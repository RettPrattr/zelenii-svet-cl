import React from 'react'

import { createContext, useState } from 'react';

export const AllContexts = createContext(null)

export function Context({children}) {
    const [popupState, setPopupState] = useState(false)
    const [currentPage, setCurrentPage] = useState('')
    const [currentComponent, setCurrentComponent] = useState('')
    const [phonesData, setPhonesData] = useState([])


    return (
        <AllContexts.Provider value={{
            popupState, setPopupState, 
            currentPage, setCurrentPage, 
            currentComponent, setCurrentComponent,
            phonesData, setPhonesData
            }}>
            {children}
        </AllContexts.Provider>
    )
}