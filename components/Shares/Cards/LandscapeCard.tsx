import React from 'react'
import styles from "./LandscapeCard.module.css"
import Img from "/public/assets/img/blog/blog01.jpg"

const LandscapeCard = () => {
    return (
        <div className={`${styles.propBox}`}>
            <div style={{ background: `url(${Img.src})` }} className={`${styles.imgSide}`}>
            </div>
            <div className={`${styles.content}`}>
                <div className={`${styles.propTitle}`}>EB Sunrise Bay T2-4-404</div>
                <div className={`${styles.propBids}`}>Bids : 10</div>
                <div className={`${styles.propPrice}`}>$980000</div>
            </div>
        </div>
    )
}

export default LandscapeCard