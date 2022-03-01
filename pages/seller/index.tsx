import type { NextPage } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'

const SellerDashboard: NextPage = () => {

    const {user} = parseCookies()

    return (
        <h4>Hi {JSON.parse(user).name}, Welcome back</h4>
    )
}

export default SellerDashboard

export async function getServerSideProps(context: any) {
    return {
      props: {}, // will be passed to the page component as props
    }
}