import React from 'react';
import Image from 'next/image'


export default function About(props) { 


    return (
        <section className='about about-3 flex flex-col'>
            <div className="title mb">
                <div className="container">
                    <h2 className='cd12 cm4'>{props?.data?.data.attributes.title}</h2>
                </div>
            </div>
            <div className="dotsContent">
                <div className="container dots flex flex-row">
                    <div className="cd4 cm3"><div className="dot"></div><div className="line"></div></div>
                    <div className="cd4 cm3"><div className="dot"></div><div className="line"></div></div>
                    <div className="cd4 cm3"><div className="dot"></div><div className="line"></div></div>
                </div>
                <div className="container content flex flex-row">
                    <div className="info flex flex-col cd4 cm3">
                        <p className="name mr">{props?.data?.data.attributes.firstTitle}</p>
                        <p className="text">{props?.data?.data.attributes.firstDescription}</p>
                    </div>
                    <div className="info flex flex-col cd4 cm3">
                        <p className="name mr">{props?.data?.data.attributes.secondTitle}</p>
                        <p className="text">{props?.data?.data.attributes.secondDescription}</p>
                    </div>
                    <div className="info flex flex-col cd4 cm3">
                        <p className="name mr">{props?.data?.data.attributes.thirdTitle}</p>
                        <p className="text">{props?.data?.data.attributes.thirdDescription}</p>
                    </div>
                    {/* {props?.data?.data.map((item, i) => {
                        return (
                            <div className="info flex flex-col cd4 cm3" key={i}>
                                <p className="name mr">{item.pointName}</p>
                                <p className="text">{item.pointText}</p>
                            </div>
                        )
                    })} */}
                </div>
            </div>
        </section>
    )
}