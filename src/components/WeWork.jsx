import icon1 from './../assets/svg/1.svg'
import icon2 from './../assets/svg/2.svg'
import icon3 from './../assets/svg/3.svg'
import icon4 from './../assets/svg/4.svg'
import icon5 from './../assets/svg/5.svg'
import icon6 from './../assets/svg/6.svg'
import icon7 from './../assets/svg/7.svg'

import Button from "./atoms/Button"
import VideoBackground from './atoms/VideoBackground'

import { useEffect, useState, useContext } from 'react'

import axios from 'axios';

import ScrollCardsAnimation from './animations/ScrollCardsAnimation'
import ScrollAnimation from './animations/ScrollAnimation'

import WeWorkCard from './WeWorkCard'


export default function WeWork(props){

    // console.log(props)

    return(
        <section className="work">
                <div className="container">
                    <ScrollAnimation delay={0} triggerOnce={false}>
                        <div className="work__title text-center" dangerouslySetInnerHTML={{ __html: props.data2?.data.attributes.title }}></div>
                    </ScrollAnimation>
                    <ScrollAnimation delay={0} triggerOnce={false}>
                        <div className="work__text text-center" dangerouslySetInnerHTML={{ __html: props.data2?.data.attributes.description }}></div>
                    </ScrollAnimation>
    
                    <div
                        className={"work__cards items-stretch"}
                    >
                        {props?.data?.data.map((m, i) => <WeWorkCard key={i} {...m} index={props.index} i={i} isGreen={i === 7}/>)}
                        <div className={`relative work-card flex flex-col h-full work-card--green`}>
                            <VideoBackground/>
                            <h3 className="work-card__title">{props.data2?.data.attributes.titleGreenCard}</h3>
                            <p className="work-card__text">{props.data2?.data.attributes.descriptionGreenCard}</p>            
                            <Button 
                                component='WeWorkCard'
                                mode={`white`}
                                text={`Оставить заявку`}
                            />

                        </div>
                    </div>
    
                </div>
        </section>
    )
}