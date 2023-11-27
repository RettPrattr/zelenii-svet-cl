import React from 'react'
import {aboutBlockUrl, advantagesUrl, servicesIconUrl, formUrl, formCUrl, creditStoryUrl, contactsUrl, headerUrl, footerUrl, forWhatUrl, hepUrl, heroSectionUrl, mainProfitsUrl, mapBlockUrl, partnersUrl, seoUrl, textCardsUrl, servicesCardsUrl, helpUrl, weWorkUrl } from '../../utilities/varsUrl'

import Calculator from '@/components/Calculator';
import Form from '@/components/Form';
import PartnersBlock from '@/components/Partners';
import HeroSection from '@/components/HeroSection';
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import CreditStory from '@/components/CreditStory';
import Story from '@/components/Story';
import Text from '@/components/Text'
import MainProfits from '@/components/MainProfits'
import Button from '@/components/atoms/Button'
import TextCards from '@/components/TextCards'
import Advantages from '@/components/Advantages'
import About from '@/components/About'
import ForWhat from '@/components/ForWhat'
import SEO from '@/components/SEO'
// import { ids } from 'build/server/pages/_document';

import { useRouter } from 'next/router'





// export async function getStaticPaths () {
// 	const res = await axios.get(`${process.env.API_LINK}/services?populate=photo`);
// 	const data = res.data;

// 	const paths = data.data.map(service => {
// 		console.log(service)
//         const serviceId = service.id - 1
// 		return {
// 			params: {
//                 id: serviceId.toString(),
//                 link: service.attributes.link
//             }
// 		}
// 	})

// 	return {
// 		paths,
// 		fallback: false
// 	}
// }


export async function getServerSideProps (context) {


    // let id;

    // let prop = context.query.id.toString()

    // console.log(context.query , 'TPPTPTPTPTTPTPTPTPTPTPTP')

    // console.log(query, search)

    // const link = context.params.link;

    const servicesRes = await fetch(`${process.env.API_LINK}/services/?populate=deep&sort=orderNumber`)
    const storyPhotosRes = await fetch(`${process.env.API_LINK}/services/?populate=storyPhotos&sort=orderNumber`)
    const staffPhotoRes = await fetch(`${process.env.API_LINK}/services/?populate=staffPhoto&sort=orderNumber`)


    const seoRes = await fetch(seoUrl)
    const heroSectionRes = await fetch(heroSectionUrl)
    const servicesCardsRes = await fetch(servicesCardsUrl)
    const helpRes = await fetch(helpUrl)
    const formRes = await fetch(formUrl)
    const formCRes = await fetch(formCUrl)
    const mainProfitsRes = await fetch(mainProfitsUrl)
    const servicesIconRes = await fetch(servicesIconUrl)
    const forWhatRes = await fetch(forWhatUrl)
    const mapBlockRes = await fetch(mapBlockUrl)
    const creditStoryRes = await fetch(creditStoryUrl)
    const textCardsRes = await fetch(textCardsUrl)
    const partnersRes = await fetch(partnersUrl)
    const weWorkRes = await fetch(weWorkUrl)
    const contactsRes = await fetch(contactsUrl)
    const advantagesRes = await fetch(advantagesUrl)
    const aboutBlockRes = await fetch(aboutBlockUrl)

    return {
      props: {
        seoData: await seoRes.json(), 
        heroSectionData: await heroSectionRes.json(),
        servicesCardsData: await servicesCardsRes.json(),
        servicesData: await servicesRes.json(),
        mainProfitsData: await mainProfitsRes.json(),
        helpData: await helpRes.json(),
        formData: await formRes.json(),
        formCData: await formCRes.json(),
        servicesIconData: await servicesIconRes.json(),
        forWhatData: await forWhatRes.json(),
        creditStoryData: await creditStoryRes.json(),
        mapBlockData: await mapBlockRes.json(),
        textCardsData: await textCardsRes.json(),
        partnersData: await partnersRes.json(),
        weWorkData: await weWorkRes.json(),
        contactsData: await contactsRes.json(),
        storyPhotosData: await storyPhotosRes.json(),
        staffPhotoData: await staffPhotoRes.json(),
        advantagesData: await advantagesRes.json(),
        aboutBlockData: await aboutBlockRes.json()
      }
    }
  }


const ServicePage = (props) => {


    

    let serviceId;
    let serviceIdReal;

    const router = useRouter();
    const data = router.query;

    // if (data.id === 'ipoteka') {
    //   serviceId = '0'
    // } else if (data.id === 'kredit-dlya-yuridicheskikh-lits') {
    //   serviceId = '1'
    // } else if (data.id === 'refinansirovanie') {
    //   serviceId = '2'
    // } else if (data.id === 'kredit-pod-zalog-nedvizhimosti') {
    //   serviceId = '3'
    // } else if (data.id === 'lizing') {
    //   serviceId = '4'
    // } else if (data.id === 'potrebitelskiy-kredit') {
    //   serviceId = '5'
    // } else if (data.id === 'kredit-pod-zalog-avtomobilya') {
    //   serviceId = '6'
    // }

    const serviceData = props.servicesData
    var index = -1;
    const link = data.id
    var filteredObj = serviceData.data.find(function(item, i){
      if(item.attributes.link === link){
        serviceIdReal = item.id
        serviceId = i
        return item
      }
    });

    // console.log(index, filteredObj);

    return (
        <>
        <SEO data={props.seoData}/>
        <HeroSection
          serviceIndex={serviceId}
          type={1}
          data={props.heroSectionData}
          data2={props.servicesData}
          url={`${process.env.API_LINK}${props.staffPhotoData?.data[serviceId].attributes.staffPhoto?.data.attributes.url}`}
          />
          <Advantages 
            data={props.advantagesData}
          />
        <div className='bc-white-container'>
          <Calculator />
          <Story 
            type={5}
            reverse={true}
            title={props?.storyPhotosData?.data[serviceId].attributes.descriptionTitle}
            subtitle=''
            text={props?.storyPhotosData?.data[serviceId].attributes.firstText}
            photo={`${process.env.API_LINK}${props?.storyPhotosData?.data[serviceId].attributes.storyPhotos.data[0].attributes.url}`}
          />
          <Story 
            type={5}
            title=''
            subtitle={''}
            text={props?.storyPhotosData?.data[serviceId].attributes.secondText}
            photo={`${process.env.API_LINK}${props?.storyPhotosData?.data[serviceId].attributes.storyPhotos.data[1].attributes.url}`}

          >
          <Button 
              mode='light'
              text='Бесплатная консультация'
              icon='true'
          />
          </Story>
          <Text
            type={0}
            title='Оформи ипотеку'
            text1='Помогаем оформить имущество для использования в вашем бизнесе с последующим правом выкупа. Предложим надёжную лизинговую компанию и банк для успешной сделки.'
            text2='Бизнес это сложная и «живая» структура, а кредиты — распространённое явление. Мы знаем, как раздобыть для вас лучший вариант займа у банка.'
          />
        </div>
        <Help
          data={props.helpData}
        />
        <MainProfits 
          data={props.mainProfitsData}
        />
        <About 
          data={props.aboutBlockData}
        />
        <Form
          data={props.formData}
          data2={props.formCData}
          metrika={props?.servicesData?.data[serviceId].attributes.metrika}
        />
        <WeWork         
          data={props.servicesIconData}
          data2={props.weWorkData}
        />
        <div className='bc-white-container'>
          <ForWhat data={props.forWhatData} />
        </div>
        <TextCards 
          data={props.textCardsData}
        />
        <CreditStory
          data={props.creditStoryData}
        />
        <PartnersBlock 
          data={props.partnersData}
        />
        <MapBlock
          data={props.mapBlockData}
          data2={props.contactsData}
        />
      </>
    )
}

export default ServicePage;