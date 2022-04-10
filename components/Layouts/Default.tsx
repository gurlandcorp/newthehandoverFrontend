import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import Footer from '../Includes/Footer/Footer'
import Header from '../Includes/Header'
import Router from "next/router"
import { MainContext } from '../../context/MainContext'
import MainLoader from '../Shares/Loaders/MainLoader'

const Default = ({children}: any) => {

    useEffect(() => {
        document.addEventListener('scroll', function(e) {
            let lastKnownScrollPosition = window.scrollY;
            if(lastKnownScrollPosition > 100)
            {
                document.querySelector('#header-bottombar')?.classList.add('hide');
            }
            else
            {
                document.querySelector('#header-bottombar')?.classList.remove('hide');
            }
        });
    })

    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/favicon-homlisti.svg" />
            </Head>
            <MainLoader />
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default