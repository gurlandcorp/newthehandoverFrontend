import React from 'react'
import Link from 'next/link'
import LandscapeCards from '../Shares/Cards/LandscapeCards'

const TopProperties = () => {
    return (
        <>
        {/* Start Top Properties Section  */}
        <div className="m-auto py-20 width">
            <div className="my-4">
                <div className="title-box">
                    <h2 className="title">Top Properties over last 7 days</h2>
                </div>
            </div>
            <LandscapeCards />
            <div className="text-center">
                <Link href={'/opportunities'}>
                    <a className="dark-btn">Go to Properties</a>
                </Link>
            </div>
        </div>
        {/* End Top Properties Section Here  */}
        </>
    )
}

export default TopProperties