import cross from '../assets/svg/cross.svg'
import bg from '../assets/svg/adv_bg.svg'
import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function PromoLine(){
    const [isOpen, setIsOpen] = useState(true)

    const [contactsData, setContactsData] = useState()

    const [headerData, setHeaderData] = useState()

    async function fetchData() {
        const contactsResponse = await axios.get(`${process.env.API_LINK}/contacts-info?populate=*`)
        const headerResponse = await axios.get(`${process.env.API_LINK}/block-header?populate=*`)
        return {contactsRes: contactsResponse.data, headerRes: headerResponse.data}
    }

    useEffect(() => {
        (async () => {
            const data = await fetchData()
            // console.log(data)
            setContactsData(data.contactsRes)
            setHeaderData(data.headerRes)
          })()
    }, [])


    return(
        <div className="flex promoline" style={{backgroundImage: `url(${bg.src})`}}>
            <div className={'flex container justify-center'}>
                <div className="promoline__text cd12 cm4 flex flex-row space-between px0">
                    <div className="address flex">
                        <p className='mb0'>{contactsData?.data.attributes.address}</p>
                    </div>
                    <div className="schedule flex justify-center">
                        <p className='mb0'>{headerData?.data.attributes.schedule}</p>
                    </div>
                    <div className="phone flex justify-center">
                        <a href={'tel:' + contactsData?.data.attributes.phoneNumber} className='mb0'>{contactsData?.data.attributes.phoneNumber}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}