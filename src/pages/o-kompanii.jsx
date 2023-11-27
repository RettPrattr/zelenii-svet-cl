import React from 'react';
import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import {aboutBlockUrl, advantagesUrl, aboutPageUrl, servicesUrl, storyPhotosUrl, staffPhotoUrl, servicesIconUrl, formUrl, formCUrl, creditStoryUrl, contactsUrl, headerUrl, footerUrl, forWhatUrl, hepUrl, heroSectionUrl, mainProfitsUrl, mapBlockUrl, partnersUrl, seoUrl, textCardsUrl, servicesCardsUrl, helpUrl, weWorkUrl } from '../utilities/varsUrl'


import Calculator from '@/components/Calculator';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import CreditStory from '@/components/CreditStory';
import MainProfits from '@/components/MainProfits'
import ForWhat from '@/components/ForWhat'
import Text from '@/components/Text'
import TextCards from '@/components/TextCards'
import About from '@/components/About'
import Advantages from '@/components/Advantages'

import SEO from '@/components/SEO'

export async function getServerSideProps () {
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
  const aboutPageRes = await fetch(aboutPageUrl)
  const aboutBlockRes = await fetch(aboutBlockUrl)
  const advantagesRes = await fetch(advantagesUrl)
  return {
    props: {
      seoData: await seoRes.json(), 
      heroSectionData: await heroSectionRes.json(),
      servicesCardsData: await servicesCardsRes.json(),
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
      aboutPageData: await aboutPageRes.json(),
      aboutBlockData: await aboutBlockRes.json(),
      advantagesData: await advantagesRes.json()
    }
  }
}

function kontakty(props) {

  // const [aboutData, setAboutData] = useState()

  // async function fetchData() {
  //     const aboutResponse = await axios.get(`${process.env.API_LINK}/page-about-company?populate=*`)

  //     return {aboutRes: aboutResponse.data}
  // }

  // useEffect(() => {
  //     (async () => {
  //         const data = await fetchData()
  //         console.log(data)
  //         setAboutData(data.aboutRes)
  //       })()
  // }, [])

  return (
    <>
      <SEO data={props.seoData}/>
      <div className='block pym'></div>
      <Text
        type={1}
        title={props?.aboutPageData.data.attributes.title}
        text2={props?.aboutPageData.data.attributes.leftText}
        text1={props?.aboutPageData.data.attributes.rightText}
      />
      <MapBlock
        data={props.mapBlockData}
        data2={props.contactsData}
      />
      <div className='bc-white-container'>
        <Calculator />
        <ForWhat 
          data={props.forWhatData}
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
      <Advantages 
        data={props.advantagesData}
      />
      <WeWork
        data={props.servicesIconData}
        data2={props.weWorkData}
      />
      <div className='bc-white-container'>
        <ForWhat 
          data={props.forWhatData}
        />
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
    </>
  );
}

export default kontakty;