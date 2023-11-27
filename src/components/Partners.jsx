import React from 'react'
import { motion } from "framer-motion";
import RunLine from './animations/RunLine'
import ScrollAnimation from './animations/ScrollAnimation'
import useWindowDimensions from '../components/hooks/useWindowDimensions'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';



const PartnersBlock = (data) => {
    const [width, height] = useWindowDimensions();

  return (
    <div className='partners flex flex-col justify-center'>
        <div className="title_partners flex items-center flex-col">
                <ScrollAnimation delay={0.3} triggerOnce={false}>
                    <div className="text_partners text-center" dangerouslySetInnerHTML={{ __html: data?.data.data.attributes.title }}></div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.5} triggerOnce={false}>
                    <p className='text-center'>{data?.data.data.attributes.description}</p>
                </ScrollAnimation>
        </div>
        {width > 800 ? 
                <div className="sliders_partners flex flex-col h-full relative">
                    <RunLine className={"slider_track"} dur={50} fromX={"-50%"} toX={'0%'}>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_1.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_2.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_3.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_4.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_5.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_1.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_2.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_3.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_4.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_5.svg" alt="" />
                        </div>
                    </RunLine>
                    <RunLine className={"slider_track"} dur={50} fromX={"0%"} toX={'-50%'}>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_6.svg"alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_7.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_8.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_9.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_10.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_6.svg"alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_7.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_8.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_9.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_10.svg" alt="" />
                        </div>
                    </RunLine>
                    <RunLine className={"slider_track"} dur={50} fromX={"-50%"} toX={'0%'}>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_11.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_12.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_13.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_14.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_15.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_11.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_12.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_13.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_14.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_15.svg" alt="" />
                        </div>
                    </RunLine>
                    <RunLine className={"slider_track"} dur={50} fromX={"0%"} toX={'-50%'}>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_16.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_17.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_18.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_19.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_20.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_16.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_17.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_18.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_19.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_20.svg" alt="" />
                        </div>
                    </RunLine>
                </div> : 
                <div className="sliders_partners flex flex-col h-full relative">
                    <RunLine className={"slider_track"} dur={20} fromX={"-35.6%"} toX={'0%'}>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_1.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_2.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_3.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_4.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_5.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_1.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_2.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_3.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_4.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_5.svg" alt="" />
                        </div>
                    </RunLine>
                    <RunLine className={"slider_track"} dur={20} fromX={"0%"} toX={'-35.6%'}>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_6.svg"alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_7.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_8.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_9.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_10.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_6.svg"alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_7.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_8.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_9.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_10.svg" alt="" />
                        </div>
                    </RunLine>
                    <RunLine className={"slider_track"} dur={20} fromX={"-35.6%"} toX={'0%'}>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_11.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_12.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_13.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_14.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_15.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_11.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_12.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_13.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_14.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_15.svg" alt="" />
                        </div>
                    </RunLine>
                    <RunLine className={"slider_track"} dur={20} fromX={"0%"} toX={'-35.6%'}>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_16.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_17.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_18.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_19.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_20.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_16.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_17.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_18.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_19.svg" alt="" />
                        </div>
                        <div className="slide">
                            <img className="slider_logo" src="/images/logo/partner_logo_20.svg" alt="" />
                        </div>
                    </RunLine>
                </div>    
    }
    </div>
  )
}

export default PartnersBlock
