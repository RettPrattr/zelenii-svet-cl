import React from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";
import {advantagesUrl, servicesUrl, storyPhotosUrl, staffPhotoUrl, servicesIconUrl, formUrl, formCUrl, creditStoryUrl, contactsUrl, headerUrl, footerUrl, forWhatUrl, hepUrl, heroSectionUrl, mainProfitsUrl, mapBlockUrl, partnersUrl, seoUrl, textCardsUrl, servicesCardsUrl, helpUrl, weWorkUrl } from '../utilities/varsUrl'


import Calculator from '@/components/Calculator';
import PartnersBlock from '@/components/Partners';
import Head from 'next/head'
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import CreditStory from '@/components/CreditStory';
import MainProfits from '@/components/MainProfits'
import Advantages from '@/components/Advantages'

import SEO from '@/components/SEO'

export async function getServerSideProps () {
  const seoRes = await fetch(seoUrl)
  const servicesCardsRes = await fetch(servicesCardsUrl)
  const mainProfitsRes = await fetch(mainProfitsUrl)
  const mapBlockRes = await fetch(mapBlockUrl)
  const creditStoryRes = await fetch(creditStoryUrl)
  const partnersRes = await fetch(partnersUrl)
  const contactsRes = await fetch(contactsUrl)
  const servicesIconRes = await fetch(servicesIconUrl)
  const weWorkRes = await fetch(weWorkUrl)
  const advantagesRes = await fetch(advantagesUrl)
  return {
    props: {
      seoData: await seoRes.json(), 
      servicesCardsData: await servicesCardsRes.json(),
      mainProfitsData: await mainProfitsRes.json(),
      creditStoryData: await creditStoryRes.json(),
      mapBlockData: await mapBlockRes.json(),
      partnersData: await partnersRes.json(),
      contactsData: await contactsRes.json(),
      servicesIconData: await servicesIconRes.json(),
      weWorkData: await weWorkRes.json(),
      advantagesData: await advantagesRes.json()
    }
  }
}

function kontakty(props) {




  return (
    <>
      <SEO data={props.seoData}/>
      <div className='bc-white-container'>
        <Calculator />
      </div>
      <Advantages 
        data={props.advantagesData}
      />
      <MainProfits 
        data={props.mainProfitsData}
      />
      <WeWork
        data={props.servicesIconData}
        data2={props.weWorkData}
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

export default kontakty;