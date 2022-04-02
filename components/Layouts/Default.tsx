import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import Footer from '../Includes/Footer/Footer'
import Header from '../Includes/Header'
import Router from "next/router"
import { MainContext } from '../../context/MainContext'
import Image from 'next/image'
import Loader from "/public/img/loader.svg"

const Default = ({children}: any) => {

    const {loading,setLoading} = useContext(MainContext)
    Router.events.on('routeChangeStart', (url) => {
        console.log('route is changing')
        setLoading(true)
    })

    Router.events.on('routeChangeComplete', (url) => {
        console.log('route changed completely')
        setLoading(false)
    })

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
            <div className={`absolute top-0 left-0 bottom-0 right-0 bg-white z-10 flex justify-center transition-all duration-300 ${loading==true ? '' : 'scale-0'}`}>
                <Image src={Loader} className="delay-100" />
            </div>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Default