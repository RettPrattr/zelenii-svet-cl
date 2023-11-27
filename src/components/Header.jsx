import { useEffect, useState, useContext } from 'react'
import logo from '../assets/svg/logo.svg'
import { motion, useScroll } from "framer-motion";
import Link from "next/link";
import useMediaQuery from '../components/hooks/useDebounce'
import useScrollDirection from '../components/hooks/useScrollDirection'
import useWindowDimensions from '../components/hooks/useWindowDimensions'
import { useSyncExternalStore } from 'react';
import { AllContexts } from '../context/Context'
import Button from "./atoms/Button"
import SocialIcons from "./atoms/SocialIcons"
import axios from 'axios';
import wa from '../assets/svg/socials/wa.svg'
import tg from '../assets/svg/socials/tg.svg'

import PopupLayout from '@/components/atoms/PopupLayout'

import PromoLine from '@/components/PromoLine'
import VideoBackground from '@/components/atoms/VideoBackground'



export default function Header(){

    const scrollDirection = useScrollDirection();
    const [show, setShow] = useState(false)
    const [width, height] = useWindowDimensions();
    const [isServicesOpen, setServicesOpen] = useState(false)
 
    // useEffect(() => {
    //     console.log( isServicesOpen )
    // }, [isServicesOpen])

    const {popupState, setPopupState} = useContext(AllContexts)



    return(
        <>
            <header className={"header" + (scrollDirection ===  "down" && show === false ? " down" : " ")}>
                {width > 800 ? <PromoLine></PromoLine> : ''}
                <div className='container flex justify-between items-center py'>
                    <Link href='/'>
                        <img src={logo.src} className='header__logo' />
                    </Link>
                    <HeaderContent width={width} />
                    <div className={`header__burger ${show && 'header__burger--open'} ${isServicesOpen && ' services-open'}`} onClick={() => setShow(!show)}>
                        <span></span><span></span><span></span>
                    </div>
                </div>
                <div className={`header-mob ${show && 'header-mob--open'} `}>
                    <div className={`header-mob__menu ${isServicesOpen && 'services-open'}` }>
                        <HeaderContent setServicesOpen={setServicesOpen} setShow={setShow} isServicesOpen={isServicesOpen} width={width} />
                    </div>
                </div>
            </header>
            <div className='block mym'></div>
            {popupState === true && <PopupLayout/> }
        </>
    )
}

const HeaderContent = (props) => {

    const {popupState, setPopupState} = useContext(AllContexts)

    const [width, height] = useWindowDimensions();

    const [servicesData, setServicesData] = useState()

    const [contactsData, setContactsData] = useState()

    const [headerData, setHeaderData] = useState()

    // console.log(popupState)


    async function fetchData() {
        const servicesResponse = await axios.get(`${process.env.API_LINK}/services?sort=orderNumber`)
        const contactsResponse = await axios.get(`${process.env.API_LINK}/contacts-info?populate=*`)
        const headerResponse = await axios.get(`${process.env.API_LINK}/block-header?populate=*`)
        return {servicesRes: servicesResponse.data, contactsRes: contactsResponse.data, headerRes: headerResponse.data}
    }

    useEffect(() => {
        (async () => {
            const data = await fetchData()
            setServicesData(data.servicesRes)
            setContactsData(data.contactsRes)
            setHeaderData(data.headerRes)
          })()
    }, [])

    const [isTab, toggleTab] = useState(false)
    const [isHover, toggleHover] = useState(false)

    // const mobSize = useMediaQuery("(max-width: 800px)");

    const subMenuAnimate = {
        enter: {
            opacity: 1,
            rotateX: 0,
            transition: {
            duration: 0.4
            },
            display: "block",
        },
        exit: {
            opacity: 0,
            rotateX: -40,
            transition: {
            duration: 0.2,
            },
            transitionEnd: {
            display: "none"
            }
        }
    };

    const subMenuItemAnimate = {
        enter: {
            rotateX: 0,
            duration: 0.1,
        },
        exit: {
            rotateX: -10,
            duration: 0.1
        }

    }

    if (width) {
        return (
            <>
                <nav className={"header__menu flex justify-between" + (isTab === true ? " services-open" : "")}>
                    {width > 800 ? <Link href={`${headerData?.data.attributes.headerLinks[0].link}`} className="header__menu-item">{headerData?.data.attributes.headerLinks[0].title}</Link>
                    :  <Link onClick={() => {props.setShow(false)}} href={`${headerData?.data.attributes.headerLinks[0].link}`} className="header__menu-item">{headerData?.data.attributes.headerLinks[0].title}</Link>
                    }
                    {width > 800 ? <Link href={`${headerData?.data.attributes.headerLinks[1].link}`} className="header__menu-item">{headerData?.data.attributes.headerLinks[1].title}</Link>
                    :  <Link onClick={() => {props.setShow(false)}} href={`${headerData?.data.attributes.headerLinks[1].link}`} className="header__menu-item">{headerData?.data.attributes.headerLinks[1].title}</Link>
                    }
                    { props.width > 800 ?
                        <motion.div
                            onHoverStart={() => toggleHover(true)}
                            onHoverEnd={() => toggleHover(false)}
                            className='header__menu-container'
                        >
                            <motion.button
                                // whileTap={{ scale: 0.97 }}
                                animate={isHover ? "open" : "closed"}
                                >
                                <a id="services" className="header__menu-item">
                                    {headerData?.data.attributes.headerLinks[4].title}
                                </a>
                                <motion.div
                                    variants={{
                                    open: { rotate: 180 },
                                    closed: { rotate: 0 }
                                    }}
                                    transition={{ duration: 0.2 }}
                                    style={{ originY: 0.55 }}
                                >
                                    <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.98681 8.92392C10.1193 8.91019 10.2446 8.85592 10.3467 8.76852L18.7619 1.53126L18.7618 1.5311C18.8974 1.41515 18.9822 1.24887 18.9975 1.06888C19.0128 0.888886 18.9573 0.709974 18.8432 0.571921C18.7292 0.43388 18.5659 0.347744 18.3896 0.332913C18.2134 0.317926 18.0385 0.375194 17.9037 0.492251L9.91753 7.362L1.93139 0.49225C1.79654 0.375193 1.62168 0.317925 1.44542 0.332912C1.26917 0.347741 1.10589 0.433878 0.991881 0.57192C0.877726 0.70996 0.822268 0.88886 0.837563 1.06888C0.85286 1.24889 0.937659 1.41516 1.07329 1.5311L9.48849 8.76836C9.62706 8.88731 9.80698 8.94348 9.98681 8.92392Z" fill="white"/>
                                    </svg>

                                </motion.div>
                            </motion.button>
                            <motion.div
                                className="sub-menu"
                                initial="exit"
                                animate={isHover ? "enter" : "exit"}
                                variants={subMenuAnimate}
                            >
                                <div className="sub-menu-background" />
                                <div className="sub-menu-container flex flex-col">
                                    {servicesData?.data.map((s, i) => {
                                        return <Link 
                                                    key={i} 
                                                    href={{ pathname: `/uslugi/${s.attributes.link}`}} 
                                                    // as={`/uslugi/${s.attributes.link}`} 
                                                    className="sub-menu-item mbs">{s.attributes.Title}
                                                </Link>
                                    })}

                                </div>
                            </motion.div>
                        </motion.div> :
                        <motion.div
                            onClick={() => {
                                toggleTab(!isTab)
                                props.setServicesOpen(!isTab)
                            }}
                            className='header__menu-container'
                        >
                            <motion.button
                                // whileTap={{ scale: 0.97 }}
                                animate={isTab ? "open" : "closed"}
                                onClick={() => {
                                    toggleTab(!isTab)
                                    props.setServicesOpen(!isTab)
                                }}
                                >
                                <a className="header__menu-item">
                                    Услуги
                                </a>
                                <motion.div
                                    variants={{
                                    open: { rotate: 180 },
                                    closed: { rotate: 0 }
                                    }}
                                    transition={{ duration: 0.2 }}
                                    style={{ originY: 0.55 }}
                                >
                                    <svg width="19" height="9" viewBox="0 0 19 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.98681 8.92392C10.1193 8.91019 10.2446 8.85592 10.3467 8.76852L18.7619 1.53126L18.7618 1.5311C18.8974 1.41515 18.9822 1.24887 18.9975 1.06888C19.0128 0.888886 18.9573 0.709974 18.8432 0.571921C18.7292 0.43388 18.5659 0.347744 18.3896 0.332913C18.2134 0.317926 18.0385 0.375194 17.9037 0.492251L9.91753 7.362L1.93139 0.49225C1.79654 0.375193 1.62168 0.317925 1.44542 0.332912C1.26917 0.347741 1.10589 0.433878 0.991881 0.57192C0.877726 0.70996 0.822268 0.88886 0.837563 1.06888C0.85286 1.24889 0.937659 1.41516 1.07329 1.5311L9.48849 8.76836C9.62706 8.88731 9.80698 8.94348 9.98681 8.92392Z" fill="white"/>
                                    </svg>

                                </motion.div>
                            </motion.button>
                            <motion.div
                                className="sub-menu"
                                initial="exit"
                                animate={isTab ? "enter" : "exit"}
                                variants={subMenuAnimate}
                            >
                                <div className="sub-menu-background" />
                                <div className="sub-menu-container flex flex-col">
                                    {servicesData?.data.map((s, i) => {
                                        return <Link onClick={() => {props.setShow(false)}} key={i} href={`/uslugi/${s.attributes.link}`} className="sub-menu-item mbs">{s.attributes.Title}</Link>
                                    })}
                                </div>
                            </motion.div>
                        </motion.div>}
                    {width > 800 ? <Link href={`${headerData?.data.attributes.headerLinks[2].link}`} className="header__menu-item">{headerData?.data.attributes.headerLinks[2].title}</Link>
                    :  <Link onClick={() => {props.setShow(false)}} href={`${headerData?.data.attributes.headerLinks[2].link}`} className="header__menu-item">{headerData?.data.attributes.headerLinks[2].title}</Link>
                    }
                    {width > 800 ? <Link href={`${headerData?.data.attributes.headerLinks[3].link}`} className="header__menu-item">{headerData?.data.attributes.headerLinks[3].title}</Link>
                    :  <Link onClick={() => {props.setShow(false)}} href={`${headerData?.data.attributes.headerLinks[3].link}`} className="header__menu-item">{headerData?.data.attributes.headerLinks[3].title}</Link>
                    }
                    {width > 800 ? '' : 
                        <div className={"info-and-social flex flex-col cm4" + (props.isServicesOpen === true ? ' mts' : ' mtl')}>
                        <div className="address-content flex justify-center">
                            <p className='mbs mt0 py0'>{contactsData?.data.attributes.address}</p>
                        </div>
                        <div className="schedule-content flex justify-center">
                            <p className='mbs mt0 py0'>{headerData?.data.attributes.schedule}</p>
                        </div>
                        <div className="phone-content flex justify-center">
                            <a className='mbs mt0 py0'>{contactsData?.data.attributes.phoneNumber}</a>
                        </div>
                        <div className='header-social flex cm4 mbs justify-center item-center'>
                            <a href="https://wa.clck.bar/79381333311">
                                <img src={wa.src} />
                            </a>
                            <a href="https://t.me/GreenLight61">
                                <img src={tg.src} style={{marginRight: 2}} />
                            </a>
                        </div>
                    </div>
                    }
                </nav>
                <div className="flex items-center">
                    {width > 800 ? 
                        <div className='header-social flex item-center' style={{marginRight: 10}}>
                            <a href="https://wa.clck.bar/79381333311">
                                <img src={wa.src} />
                            </a>
                            <a href="https://t.me/GreenLight61">
                                <img src={tg.src} style={{marginRight: 2}} />
                            </a>
                        </div> : ''}
                        <Button 
                            component='Header'
                            mode="light"
                            text='Оставить заявку'
                        />
                </div>
            </>
        )
    }
}