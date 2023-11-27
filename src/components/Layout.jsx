import React, { useContext, useState } from 'react';

import Header from './Header'
import Footer from './Footer'

import axios from 'axios';

import { Context } from '../context/Context'

export default function Layout({ children }, data) {

    // console.log(data)

    return (
        <Context>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </Context>
    )
}