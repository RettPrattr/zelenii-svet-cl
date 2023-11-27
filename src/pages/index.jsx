import React from 'react';
import { useState, useEffect, useContext } from 'react';

import {aboutBlockUrl, advantagesUrl, servicesUrl, storyPhotosUrl, staffPhotoUrl, servicesIconUrl, formUrl, formCUrl, creditStoryUrl, contactsUrl, headerUrl, footerUrl, forWhatUrl, hepUrl, heroSectionUrl, mainProfitsUrl, mapBlockUrl, partnersUrl, seoUrl, textCardsUrl, servicesCardsUrl, helpUrl, weWorkUrl } from '../utilities/varsUrl'



import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";

import Calculator from '@/components/Calculator';
import Form from '@/components/Form';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import HeroSection from '@/components/HeroSection';
import Services from '@/components/Services';
import Help from '@/components/Help';
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import CreditStory from '@/components/CreditStory';
import Advantages from '@/components/Advantages'
import MainProfits from '@/components/MainProfits'
import TextCards from '@/components/TextCards'
import ForWhat from '@/components/ForWhat'
import About from '@/components/About'

import SEO from '@/components/SEO'


// const dateC = new Date();

// let day = dateC.getDate();
// let month = dateC.getMonth();
// let year = dateC.getFullYear();

// console.log(day, month, year)

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
  const advantagesRes = await fetch(advantagesUrl)
  const aboutBlockRes = await fetch(aboutBlockUrl)
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
      advantagesData: await advantagesRes.json(),
      aboutBlockData: await aboutBlockRes.json()
    }
  }
}


function App(props) {

  // console.log(props.contactsData)

  return (
    <>
      <SEO 
        data={props.seoData}
      />
      <HeroSection
        data={props.heroSectionData}
        url={`${process.env.API_LINK}${props.heroSectionData?.data.attributes.womanPhoto.data.attributes.url}`}
      />
      <Services
        data={props.servicesCardsData}
      />
      <Advantages 
        data={props.advantagesData}
      />
      <div className='bc-white-container'>
        <Calculator />
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
      <MapBlock
        data={props.mapBlockData}
        data2={props.contactsData}
      />
    </>
  );
}

export default App;