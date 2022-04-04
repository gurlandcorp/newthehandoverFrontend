import React, { useContext } from 'react'
import Image from 'next/image'
import Loader from "/public/img/loader.svg"
import { MainContext } from '../../../context/MainContext'
import Router from "next/router"

const DefaultLoader = () => {

    const {loading,setLoading} = useContext(MainContext)
    Router.events.on('routeChangeStart', (url) => {
        setLoading(true)
        document.body.classList.add('body-height')
    })

    Router.events.on('routeChangeComplete', (url) => {
        setLoading(false)
        document.body.classList.remove('body-height')
    })

    return (
        <div className={`fixed top-0 left-0 bottom-0 right-0 bg-white z-50 md:z-10 flex justify-center transition-all duration-300 ${loading==true ? '' : 'scale-0'}`}>
            <Image src={Loader} className="delay-100" />
        </div>
    )
}

export default DefaultLoader