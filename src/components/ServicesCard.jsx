import { useCallback } from "react";
import Image from 'next/image';

import Link from 'next/link'


export default function ServicesCard(props){
    

    return(
        <div className="services-card">
            <Link href={`/uslugi/${props.attributes.link}`}>
                {/* <img src={src} srcSet={`${srcSet} 2x`} className="services-card__img" /> */}
                <Image
                    src={`${process.env.API_LINK}${props.attributes.photo.data.attributes.url}`}
                    width={150}
                    height={150}
                    quality={100}
                    alt={''}
                >
                </Image>
                <div className="services-card__body">
                    <div className="services-card__title" dangerouslySetInnerHTML={{__html: props.attributes.title}} />
                    <p className="services-card__desc">{props.attributes.description}</p>
                </div>
            </Link>
        </div>
    )
}