import fb from '../assets/svg/socials/fb.svg'
import inst from '../assets/svg/socials/inst.svg'
import tg from '../assets/svg/socials/tg.svg'
import vk from '../assets/svg/socials/vk.svg'
import wa from '../assets/svg/socials/wa.svg'
import mark from '../assets/svg/map-icon.svg'
import mask from '../assets/svg/map-mask.svg'
// import { YMaps, Map as YMap, Placemark } from "react-yandex-maps";
import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import ScrollAnimation from './animations/ScrollAnimation'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios';




export default function MapBlock(props) {


    // console.log(props.data2)

    const defaultState = {
        center: [55.710129, 37.654610],
        zoom: 15,
        controls: []
    }



    return (
        <section className="map relative">
            <div className="container flex items-center flex-row w-full justify-between">
                <ScrollAnimation delay={0} triggerOnce={true} className={'map__info cd5 cm4'}>
                    <h2 className="map__title">{props?.data?.data.attributes.title}</h2>
                    <p className="map__text">{props?.data?.data.attributes.description} </p>
                    <div className="map__group">
                        <div className="map__group-title">Телефон</div>
                        <a href={'tel:' + props?.data2?.data.attributes.phoneNumber} className="map__group-link">{props?.data2?.data.attributes.phoneNumber}</a>
                    </div>
                    <div className="map__group">
                        <div className="map__group-title">Почта</div>
                        <a href={"mailto:" + props?.data2?.data.attributes.email} className="map__group-link">{props?.data2?.data.attributes.email}</a>
                    </div>
                    <div className="map__group">
                        <p className="map__group-title">Адрес</p>
                        <p className="map__group-link">
                            {props?.data2?.data?.attributes.address}
                        </p>
                    </div>
                    <div className="map__group">
                        <div className="map__group-title">Мессенджеры и социальные сети</div>
                        <div className="map__group-socials flex">
                            <a className="" href={props?.data2?.data.attributes.linkWA}>
                                <img src={wa.src} />
                            </a>
                            <a className="" href={props?.data2?.data.attributes.linkTG}>
                                <img src={tg.src} />
                            </a>
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation delay={0.7} triggerOnce={true} className={'map__map relative w-full cd7 cm4'}>
                    {/* <img src={mask.src} className='map__mask block absolute' /> */}
                    <YMaps height={'440px'} query={{ apikey: 'fe365efb-ab51-440e-a7d1-c6b999dd3f87' }}>
                        <Map height={'440px'} defaultState={defaultState}>
                            <Placemark
                                geometry={[55.710129, 37.654610]}
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageSize: [46, 69],
                                    iconImageHref: mark.src
                                }} />
                            <ZoomControl options={{ float: "right" }} />
                        </Map>
                    </YMaps>
                </ScrollAnimation>
            </div>
        </section>
    )
}