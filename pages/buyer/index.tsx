import type { NextPage } from 'next'
import { parseCookies } from 'nookies'
import React, {useEffect} from 'react'

const Buyer: NextPage = () => {

    const {user} = parseCookies()

    useEffect(()=> {

    },[user])

    return (
        <h4>Hi {user != undefined && JSON.parse(user)?.name}, Welcome back</h4>
    )
}

export default Buyer

export async function getServerSideProps(context: any) {
    return {
      props: {}, // will be passed to the page component as props
    }
}