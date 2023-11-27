import ScrollAnimation from './animations/ScrollAnimation'
import Button from "./atoms/Button"
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';

export default function MainProfits(data){


    return (
        <section className="mainProfits">
            <div className="container flex flex-row">
                {/* <div className="cards flex w-full"> */}
                <ScrollAnimation delay={0} triggerOnce={false} className={"cd6 cm4 scroll-container mb"}>
                    <div className="card flex flex-col items-center round">
                        <img src={`${process.env.API_LINK}${data?.data.data.attributes.photos.data[0].attributes.url}`} alt=""/>
                        <div className="title_card text-center px" dangerouslySetInnerHTML={{ __html: data?.data.data.attributes.firstTitle }}></div>
                        <p className='text-center'>{data?.data.data.attributes.firstDescription}</p>
                        <Button 
                            component='Help'
                            mode='light'
                            text='Оставить заявку'
                            icon='true'
                        />
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.5} triggerOnce={false} className={"cd6 cm4 scroll-container"}>
                    <div className="card card-2 flex flex-col items-center">
                        <img src={`${process.env.API_LINK}${data?.data.data.attributes.photos.data[1].attributes.url}`} alt=""/>
                        <div className="title_card text-center px" dangerouslySetInnerHTML={{ __html: data?.data.data.attributes.secondTitle }}></div>
                        <p className='text-center'>{data?.data.data.attributes.secondDescription}</p>
                        <Button 
                            component='Help'
                            mode='light'
                            text='Оставить заявку'
                            icon='true'
                        />
                    </div>
                </ScrollAnimation>
                {/* </div> */}
            </div>
        </section>
    )
}