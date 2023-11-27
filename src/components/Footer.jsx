import logo from '../assets/svg/logo-light.svg'
import logoW from '../assets/svg/logo-white-bc.svg'
import wa from '../assets/svg/socials/wa.svg'
import tg from '../assets/svg/socials/tg.svg'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import useWindowDimensions from '../components/hooks/useWindowDimensions'

import Link from 'next/link'

import VideoBackground from './atoms/VideoBackground'

export default function Footer(){

    const [footerData, setFooterData] = useState()
    const [contactsData, setContactsData] = useState()
    const [servicesData, setServicesData] = useState()
    const [headerData, setHeaderData] = useState()

    async function fetchData() {
        const footerResponse = await axios.get(`${process.env.API_LINK}/block-footer?populate=label`)
        const servicesResponse = await axios.get(`${process.env.API_LINK}/services?sort=orderNumber`)
        const contactsResponse = await axios.get(`${process.env.API_LINK}/contacts-info?populate=*`)
        const headerResponse = await axios.get(`${process.env.API_LINK}/block-header?populate=*`)

        return {footerRes: footerResponse.data, servicesRes: servicesResponse.data, contactsRes: contactsResponse.data, headerRes: headerResponse.data}
    }

    useEffect(() => {
        (async () => {
            const data = await fetchData()
            // console.log(data)
            setFooterData(data.footerRes)
            setServicesData(data.servicesRes)
            setContactsData(data.contactsRes)
            setHeaderData(data.headerRes)
          })()
    }, [])

    const [width, height] = useWindowDimensions();


    return(
        <footer className="footer relative">
            <VideoBackground />
            <div className="container">
                <div className="footer__top flex justify-between">
                    <h2 className="footer__title font-5-light">{footerData?.data.attributes.title}</h2>
                    <div className="footer__menu mbm">
                        <Link className="mbs" href={`${headerData?.data.attributes.headerLinks[0].link}`}>{headerData?.data.attributes.headerLinks[0].title}</Link>
                        <Link className="mbs" href={`${headerData?.data.attributes.headerLinks[1].link}`}>{headerData?.data.attributes.headerLinks[1].title}</Link>
                        {servicesData?.data.map((s, i) => {
                            return <Link 
                                        key={i} 
                                        href={{ pathname: `/uslugi/${s.attributes.link}` }} 
                                        // as={`/uslugi/${s.attributes.link}`} 
                                        className="sub-menu-item mbs">{s.attributes.Title}
                                    </Link>                        
                                })}
                        <Link className="mbs" href={`${headerData?.data.attributes.headerLinks[2].link}`}>{headerData?.data.attributes.headerLinks[2].title}</Link>
                        <Link className="mbs" href={`${headerData?.data.attributes.headerLinks[3].link}`}>{headerData?.data.attributes.headerLinks[3].title}</Link>
                    </div>
                </div>
                <div className="footer__bottom flex items-center justify-between">
                    <div className='flex items-center'>
                        <img src={logoW.src} className='footer__logo' />
                        <p className='h-fit mb0 mlm'>&copy;&nbsp;{new Date().getFullYear()}</p>
                    </div>
                    <div className='footer__bottom-social flex item-center'>
                        <a href={contactsData?.data.attributes.linkWA}>
                            <img src={wa.src} />
                        </a>
                        <a href={contactsData?.data.attributes.linkTG}>
                            <img src={tg.src} style={{marginRight: 2}} />
                        </a>
                    </div>
                    <Link href='https://kapustin.team' target='_blank' className={"label" + (width > 800 ? ' ' : ' mbs')}>
                        <img src={`${process.env.API_LINK}${footerData?.data.attributes.label.data.attributes.url}`} alt="" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}