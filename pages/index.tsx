import type { NextPage } from 'next'
import Head from 'next/head'
import AboutSection from '../components/Home/AboutSection'
import Banner from '../components/Home/Banner'
import LocationSection from '../components/Home/LocationSection'
import PropertyBanner from '../components/Shares/PropertyBanner'
// import styles from '../styles/Home.module.css'
// import API_Link from "../lib/constants"
import BlogSection from '../components/Shares/Blogs'
import JoiningBanner from '../components/Home/JoiningBanner'
import FeaturedProperty from '../components/Shares/FeaturedProperty'
import LetUSGuid from '../components/Home/LetUSGuid'

const Home: NextPage = ({data}: any) => {
    return (
    <>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Banner />
        <LetUSGuid />
        <AboutSection />
        <LocationSection />
        <PropertyBanner />
        <FeaturedProperty data={data.latest_properties} />
        {/* <BlogSection /> */}
        <JoiningBanner />
    </>
    )
}

export default Home

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    const res = await fetch(`${process.env.API_URL}/property/sort/desc`)
    const latest_properties = await res.json()
  
    // Pass data to the page via props
    return { 
        props: { 
            data: {
                latest_properties
            }
        }
    }
}