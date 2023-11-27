import src from './../assets/png/card-mock.png'
import srcSet from './../assets/png/card-mock@2x.png'
import ServicesCard from './ServicesCard'
import CardsAnimation from './animations/CardsAnimation'
import { useEffect, useState, useContext } from 'react'

import axios from 'axios';

export default function Services(data){

    // console.log(data)


    return(
        <div className="services">
            <CardsAnimation
                className={'container flex items-stretch'}
            >
                {data?.data.data.map((m, i) => <ServicesCard key={i} {...m} />)}
            </CardsAnimation>
        </div>
    )
}