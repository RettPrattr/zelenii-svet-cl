import Button from '../components/atoms/Button'
import useWindowDimensions from './hooks/useWindowDimensions'

import { useEffect, useState, useContext } from 'react'

import axios from 'axios';

const mock = [
    {
        href: '',
        title: 'Потребительский кредит',
        text: ['Понадобились деньги для важных покупок в семью или на личные нужды, а накоплений нет? Мы поможем получить потребительский кредит в банке.'],
    },
    {
        href: '',
        title: 'Рефинансирование',
        text: ['Если у вас есть кредит, но условия не устраивают, то эта услуга для вас. Мы заменим старый заём на новый, ещё и с выгодой для вас.'],
    },
    {
        href: '',
        title: 'Ипотека',
        text: ['Первая покупка недвижимости или расширение жилой площади требует помощи у банка. Если вы уже обращались в банк, но получили отказ, мы поможем получить согласие.'],
    },
]

export default function TextCards (data) {



    return (
        <section className="text-cards">
            <div className="container flex flex-row justify-between">
                {data?.data.data.map((m, i) => <TextCard key={i} {...m} index={i} />)}
            </div>
        </section>
    )
}


// justify накинуть чтобы кнопка была внизу у всех
function TextCard (props) {


    const [width] = useWindowDimensions()
    

    return (
        <div className=" cd4 cm4 flex flex-col h-auto">
            <div className={"text-card flex-col h-full flex pxm pym justify-between" + (width > 800 ? '' : ' mb')}> 
                <div className="flex-col">
                    <h3 className="mb">{props.attributes.title}</h3>
                    <p className="pb0 mb0">{props.attributes.description}</p>
                </div>
            </div>
        </div>
    )
}