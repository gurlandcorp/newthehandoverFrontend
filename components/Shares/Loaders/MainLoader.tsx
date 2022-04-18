import React, { useContext } from 'react'
import Image from 'next/image'
import Loader from "/public/img/loader.svg"
import Router from "next/router"

const MainLoader = () => {

    Router.events.on('routeChangeStart', (url) => {

        document.body.classList.add('body-height')
        document.querySelector('.loader')?.classList.remove('hidden')
        document.querySelector('.loader')?.classList.add('flex')
        setTimeout(() => {
            document.querySelector('.loader')?.classList.remove('opacity-0')
        }, 100);
    })

    Router.events.on('routeChangeComplete', (url) => {
        
        document.querySelector('.loader')?.classList.add('opacity-0')
        setTimeout(() => {
            document.querySelector('.loader')?.classList.remove('flex')
            document.querySelector('.loader')?.classList.add('hidden')
            document.body.classList.remove('body-height')
        }, 300);
    })

    return (
        <div className={`loader fixed top-0 left-0 bottom-0 right-0 bg-white z-50 md:z-10 justify-center transition-all duration-500 hidden opacity-0`}>
            <Image src={Loader} className="delay-100" />
        </div>
    )
}

export default MainLoader