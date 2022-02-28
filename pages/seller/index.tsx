import type { NextPage } from 'next'
import React from 'react'

const SellerDashboard: NextPage = () => {
    return (
        <div>Seller Dashboard</div>
    )
}

export default SellerDashboard

export async function getServerSideProps(context: any) {
    return {
      props: {}, // will be passed to the page component as props
    }
}