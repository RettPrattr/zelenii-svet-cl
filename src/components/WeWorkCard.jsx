import { useEffect, useState } from 'react'
import greenBg from './../assets/svg/work-card-bg.svg'
import Button from "./atoms/Button"


import VideoBackground from './atoms/VideoBackground'

export default function WeWorkCard(props){
    const {attributes, index, i, isGreen} = props

    // console.log(props)

    // const [hiddenCard, setHiddenCard] = useState(false)

    // useEffect(() => {
    //     console.log(i, index)
    //     i === index ? setHiddenCard(true) : setHiddenCard(false)
    // }, [])

    return(
        <div className={`relative work-card flex flex-col h-full ${index && isGreen && ' green-x2 '}  ${isGreen ? 'work-card--green' : ''}`}>
            {isGreen 
                ? <VideoBackground/>
                : '' }
            <div>{attributes.icon && !isGreen &&  <img src={`/images/${attributes.icon.data.attributes.name}`} className="work-card__icon block w-auto h-auto" />}</div>
            <h3 className="work-card__title">{attributes.Title}</h3>
            <p className="work-card__text">{attributes.shortDescription}</p>            
            <Button 
                component='WeWorkCard'
                mode={`${isGreen ? 'white' : 'light'}`}
                text={`${isGreen ? 'Оставить заявку' : 'Подробнее'}`}
                href={`/uslugi/${attributes.link}`}
            />

        </div>
    )
}