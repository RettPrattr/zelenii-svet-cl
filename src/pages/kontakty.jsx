import React from 'react';
import { useEffect, useContext } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from "framer-motion";
import {advantagesUrl, servicesUrl, storyPhotosUrl, staffPhotoUrl, servicesIconUrl, formUrl, formCUrl, creditStoryUrl, contactsUrl, headerUrl, footerUrl, forWhatUrl, hepUrl, heroSectionUrl, mainProfitsUrl, mapBlockUrl, partnersUrl, seoUrl, textCardsUrl, servicesCardsUrl, helpUrl, weWorkUrl } from '../utilities/varsUrl'


import Head from 'next/head'
import WeWork from '@/components/WeWork';
import MapBlock from '@/components/MapBlock';
import Advantages from '@/components/Advantages'

import SEO from '@/components/SEO'

export async function getServerSideProps () {
  const seoRes = await fetch(seoUrl)
  const servicesIconRes = await fetch(servicesIconUrl)
  const mapBlockRes = await fetch(mapBlockUrl)
  const weWorkRes = await fetch(weWorkUrl)
  const contactsRes = await fetch(contactsUrl)
  const advantagesRes = await fetch(advantagesUrl)
  return {
    props: {
      seoData: await seoRes.json(), 
      servicesIconData: await servicesIconRes.json(),
      mapBlockData: await mapBlockRes.json(),
      weWorkData: await weWorkRes.json(),
      contactsData: await contactsRes.json(),
      advantagesData: await advantagesRes.json(),
    }
  }
}

function kontakty(props) {

  return (
    <>
      <SEO data={props.seoData}/>
      <MapBlock
        data={props.mapBlockData}
        data2={props.contactsData}
      />
      <Advantages 
        data={props.advantagesData}
      />
      <WeWork
        data={props.servicesIconData}
        data2={props.weWorkData}
      />
    </>
  );
}

export default kontakty;