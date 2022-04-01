import React from 'react'
import styles from "./LandscapeCard.module.css"
import Img from "/public/assets/img/blog/blog01.jpg"

const LandscapeCard = ({property}: any) => {
    return (
        <div className={`${styles.propBox} flex flex-wrap`}>
            <div className="w-full md:w-2/5 flex justify-center md:block mb-2 md:mb-0">
                <div style={{ background: `url(${property.images[0]})` }} className={`${styles.imgSide}`}>
                </div>
            </div>
            <div className={`${styles.content} w-full md:w-3/5`}>
                <div className={`${styles.propTitle}`}>{property.propertyTitle}</div>
                <div className={`${styles.propBids}`}>Top Bid : AED {Number(property.topBid).toFixed()}</div>
                <div className={`${styles.propPrice}`}>{'AED ' + property.priceDemand}</div>
            </div>
        </div>
    )
}

export default LandscapeCard