import src from '../assets/png/credit-img.png'
import ScrollAnimation from './animations/ScrollAnimation'
import Button from "./atoms/Button"
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';

export default function Help(data){

    // console.log(data)

 
    return(
        <section className="help">
            <div className="container flex items-center">
                <ScrollAnimation delay={0} triggerOnce={false}>
                    <img src={src.src} className="help__img mbm" />
                </ScrollAnimation>
                <ScrollAnimation delay={0.4} triggerOnce={false}>
                    <div className='help__content cd12'>
                    <div dangerouslySetInnerHTML={{ __html: data?.data.data.attributes.title }}></div>
                        <div className='help_desc' dangerouslySetInnerHTML={{ __html: data?.data.data.attributes.description }}></div>
                        <Button 
                            component='Help'
                            mode='light'
                            text='Бесплатная консультация'
                        />
                    </div>                
                </ScrollAnimation>

            </div>
        </section>
    )
}