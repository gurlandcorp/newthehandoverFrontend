import type { NextPage } from 'next'
import React from 'react'

const Buyer: NextPage = () => {
    return (
        <div>Buyer</div>
    )
}

export default Buyer

export async function getServerSideProps(context: any) {
    return {
      props: {}, // will be passed to the page component as props
    }
}