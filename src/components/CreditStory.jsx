import Image from 'next/image'
import React from 'react'
import ScrollAnimation from './animations/ScrollAnimation'
import { useEffect, useState, useContext } from 'react'

import axios from 'axios';

import Button from "./atoms/Button"

const CreditStory = (data) => {

    const imageWidth = 2000
    const imageHeight = 2000
    
    const title = 'Увеличиваем прибыль вашего бизнеса'
    const subtitle = 'Делаем это быстро и надежно'
    const text = 'Какой то длинный текст'
    const photo = 'LINK'

  return (
    <section className='creditstory'>
        <div className='container flex flex-col'>
            <ScrollAnimation delay={0}>
                <div className="title mbl">
                    <h2>{data?.data.data.attributes.title}</h2>
                </div>
            </ScrollAnimation>
            <div className="flex flex-row items-start">
                <ScrollAnimation delay={0} className={'cd6 cm4'}>
                    <div className="c-card flex flex-col">
                        <div className="top flex flex-col mb items-center">
                            <h3 className='text-center mbs cd9'>{data?.data.data.attributes.firstSubtitle}</h3>
                            <p className='text-center w-full'>{data?.data.data.attributes.firstDescription}</p>
                            <Image width={imageWidth} height={imageHeight} src={`${process.env.API_LINK}${data?.data.data.attributes.photos.data[0].attributes.url}`}/>
                        </div>
                        <div className="middle"></div>
                        <div className="bottom flex flex-row w-full justify-center items-start">
                            <div className="cd6 cm4 mb">
                                <Button 
                                    className=''
                                    component='CreditStory1'
                                    mode="light"
                                    text='Получить выписку'
                                    icon='true'
                                />
                            </div>
                            <div className="flex flex-col bottom-text cd6 cm4">
                                    <span className='mb0'>{data?.data.data.attributes.firstBottomSubtitle}</span>
                                    <p className='mb0'>{data?.data.data.attributes.firstBottomDescription}</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.4} className={'cd6 cm4'}>
                    <div className="c-card flex flex-col">
                        <div className="top flex flex-col mb items-center">
                            <h3 className='text-center mbs cd9'>{data?.data.data.attributes.secondSubtitle}</h3>
                            <p className='text-center w-full'>{data?.data.data.attributes.secondDescription}</p>
                            <Image width={imageWidth} height={imageHeight} src={`${process.env.API_LINK}${data?.data.data.attributes.photos.data[1].attributes.url}`}/>
                        </div>
                        <div className="middle"></div>
                        <div className="bottom flex flex-row w-full justify-center items-start">
                            <div className="cd6 cm4 mb">
                                <Button 
                                    style={{width: 'fit-content !important'}}
                                    component='CreditStory2'
                                    mode="light"
                                    text='Получить выписку'
                                    icon='true'
                                />
                            </div>
                            <div className="flex flex-col bottom-text cd6 cm4">
                                <span className='mb0'>{data?.data.data.attributes.secondBottomSubtitle}</span>
                                <p className='mb0'>{data?.data.data.attributes.secondBottomDescription}</p>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    </section>
  )
}

export default CreditStory
