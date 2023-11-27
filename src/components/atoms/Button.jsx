import React, { useContext, useState, useEffect } from 'react';

import { AllContexts } from '@/context/Context'

import Link from 'next/link'

function Button(props) {

    const {setPopupState, setCurrentPage, setCurrentComponent} = useContext(AllContexts)

    // useEffect(() => {
	// 	// console.log(window.location.href)
	// }, [])

    const clickBtnHandler = () => {
        setPopupState(true),
        setCurrentPage(window.location.href),
        setCurrentComponent(props.component)
    }

    if (props.href) {
        return ( 
            <Link 
                href={props.href} 
                className={'action action--' + props.mode + " "} 
            >
                <span> { props.text } </span>
                { props.icon && <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 13.5L9.45 12.4125L12.1125 9.75H3V8.25H12.1125L9.45 5.5875L10.5 4.5L15 9L10.5 13.5Z" fill="#FBFBFB"/></svg> }
            </Link> 
        )
    }
    if (!props.href) {
        return ( 
            <div 
                className={'action action--' + props.mode + " "}
                onClick={() => 
                    clickBtnHandler()
                }
            >
                <span> { props.text } </span>
                { props.icon && <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 13.5L9.45 12.4125L12.1125 9.75H3V8.25H12.1125L9.45 5.5875L10.5 4.5L15 9L10.5 13.5Z" fill="#FBFBFB"/></svg> }
            </div> 
        )
    } 
}

export default Button