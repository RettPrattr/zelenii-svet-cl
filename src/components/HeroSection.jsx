import VideoBackground from "./atoms/VideoBackground"

import { useEffect, useState, useContext } from 'react'

import axios from 'axios';

import Button from "./atoms/Button"

import useWindowDimensions from './hooks/useWindowDimensions'

export default function HeroSection(props) {

    // console.log(props)

    const [width, height] = useWindowDimensions();

  
    return(
        <section className={"relative" + (props.type !== 1 ? ' hero' : ' hero uslugi')}>
            <VideoBackground />

            <div className={'container flex ' + (props.type === 1 ? ' uslugi' : '') + (width > 800 ? ' flex-row' : ' flex-col')}>
                <div className="block mtl mbm cd7 cm4">
                    <h1 className="hero__title  mbm">
                        {(props.type !== 1 ? props.data?.data.attributes.heroTitle : '')}
                        {(props.type === 1 ? props.data2?.data[props.serviceIndex]?.attributes.heroTitle : '')}
                        
                    </h1>
                    {/* <b className={(props.type === 1 && ' mb')}>на выгодных условиях</b> */}
                    <p className={"" + (props.type === 1 && ' hidden')}>
                       {props.data?.data?.attributes.description}
                    </p>
                    <Button
                        component='HeroSection'
                        mode='white'
                        text='Бесплатная консультация'
                        icon='true'
                    />

                    {props.type === 1 ? (
                        <div className="params flex flex-row mtm cd12">
                            <div className="flex flex-col mrl">
                                <h3>Ставка от</h3>
                                <h2 className="span-param">{props?.data2?.data[props.serviceIndex]?.attributes.rate}</h2>
                            </div>
                            <div className="flex flex-col mrl">
                                <h3>Сумма кредита до</h3>
                                <h2 className="span-param">{props?.data2?.data[props.serviceIndex]?.attributes.sum}</h2>
                            </div>
                            <div className="flex flex-col">
                                <h3>Срок одобрения</h3>
                                <h2 className="span-param">{props?.data2?.data[props.serviceIndex]?.attributes.term}</h2>
                            </div>
                        </div>) : ''}
                </div>
                {props.type !== 1 ? (
                    <div className={"womanPhoto items-end main-photo cd5 cm4 flex align-end" + (props?.data2?.data[props.serviceIndex]?.attributes.showPhotos ? ' ' : ' hidden')}>
                        <div className={"z-100 w-fill woman flex items-end"}>
                            <img src={`${process.env.API_LINK}` + props?.data2?.data[props.serviceIndex]?.attributes.womanPhoto.data.attributes.url} alt="" />
                        </div>
                    </div>) : (
                    <div className={"womanPhoto items-end main-photo cd5 cm4 flex align-end" + (props?.data2?.data[props.serviceIndex]?.attributes.showPhotos ? ' ' : ' hidden')}>
                        <div className={"z-100 w-fill woman flex items-end"}>
                            <img src={props.url} alt="" />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}