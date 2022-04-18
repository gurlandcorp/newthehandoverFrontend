import type { NextPage } from 'next'
import React from 'react'
import PropertyContent from "../../components/Property"
import FeaturedProperty from '../../components/Home/Featured-Products/FeaturedProperty'

const Property: NextPage = ({data}: any) => {
    return (
        <>
            <PropertyContent property={data.property} properties={data.properties} />
            <FeaturedProperty data={data.properties} />
        </>
    )
}

export default Property

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res = await fetch(`${process.env.API_URL}/property/sort/desc`)
    const properties = await res.json()

    const res2 = await fetch(`${process.env.API_URL}/property/${context.query.id}`)
    const property = await res2.json()
  
    // Pass data to the page via props
    return { 
        props: { 
            data: {
                properties,
                property
            }
        }
    }
}