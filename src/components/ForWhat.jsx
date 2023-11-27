import ScrollAnimation from './animations/ScrollAnimation'
import { useEffect, useState, useContext } from 'react'

import axios from 'axios';

export default function ForWhat(data){


    return (
        <section className="forWhat">
            <div className="container cards_services flex flex-row items-center">
                <ScrollAnimation delay={0} triggerOnce={false} className={'cd6 cm4'}>
                    <div className="card_services flex flex-col items-center relative">
                        <div className="titleCard text-center" dangerouslySetInnerHTML={{__html: data?.data.data.attributes.firstTitle}} />
                        <img className="card_img h-auto" src={`process.env.API_LINK${data?.data.data.attributes.photos.data[0].attributes.url}`} alt=""/>
                        <p className='text-center'>{data?.data.data.attributes.firstDescription}</p>
                    </div>
                    
                </ScrollAnimation>
                <ScrollAnimation delay={0.5} triggerOnce={false} className={'cd6 cm4'}>
                    <div className="card_services flex flex-col items-center relative">
                        <div className="titleCard text-center" dangerouslySetInnerHTML={{__html: data?.data.data.attributes.secondTitle}} />
                        <img className="card_img h-auto" src={`process.env.API_LINK${data?.data.data.attributes.photos.data[1].attributes.url}`} alt=""/>
                        <p className='text-center'>{data?.data.data.attributes.secondDescription}</p>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    )
}