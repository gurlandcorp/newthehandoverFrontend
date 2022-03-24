import React from 'react'
import LandscapeCard from './LandscapeCard'

const LandscapeCards = () => {
    return (
        <div className="gap-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 my-10">
            <LandscapeCard />
            <LandscapeCard />
            <LandscapeCard />
            <LandscapeCard />
            <LandscapeCard />
            <LandscapeCard />
        </div>
    )
}

export default LandscapeCards