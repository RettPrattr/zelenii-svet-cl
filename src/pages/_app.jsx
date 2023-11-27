
import '../styles/App.sass';

import { AnimatePresence } from 'framer-motion'

import Layout from '../components/Layout'

import Head from 'next/head'

export async function getServerSideProps () {
  const footerResponse = await axios.get(`${process.env.API_LINK}/block-footer?populate=label`)
  const servicesResponse = await axios.get(`${process.env.API_LINK}/services?populate=*&sort=orderNumber`)
  const contactsResponse = await axios.get(`${process.env.API_LINK}/contacts-info?populate=*`)
  const headerResponse = await axios.get(`${process.env.API_LINK}/block-header?populate=*`)
  return {
    props: {
      footerData: footerResponse.data, servicesData: servicesResponse.data, contactsData: contactsResponse.data, headerData: headerResponse.data
    }
  }
}

export default function MyApp({ Component, pageProps, props }) {

  return (
      <Layout data={props}>
        <Component {...pageProps} />
      </Layout>
  )
}
