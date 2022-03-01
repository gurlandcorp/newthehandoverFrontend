import Image from 'next/image'
import React from 'react'
import styles from "./Home.module.css"
import Img from "../../public/assets/img/blog/blog01.jpg"
import Link from 'next/link'

const TopProperties = () => {
    return (
        <div className={styles.topPropertyContainer}>
            <div className={styles.topPropertyHeading}>
                <h4>Top Properties over last 7 days</h4>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className={`shadow rounded-pill my-3 ${styles.propertyListCard}`}>
                        <div className={styles.propertyListCardImage}>
                            <Image layout="responsive" src={Img.src} width={Img.width} height={Img.height} />
                        </div>
                        <div className={styles.propertyListCardContent}>
                            <a href="">EB Sunrise Bay T2-4-404</a>
                            <div className={`d-flex flex-wrap justify-content-between ${styles.rate}`}>
                                <span>Bids: 10</span>
                                <span>$980000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className={`shadow rounded-pill my-3 ${styles.propertyListCard}`}>
                        <div className={styles.propertyListCardImage}>
                            <Image layout="responsive" src={Img.src} width={Img.width} height={Img.height} />
                        </div>
                        <div className={styles.propertyListCardContent}>
                            <a href="">EB Sunrise Bay T2-4-404</a>
                            <div className={`d-flex flex-wrap justify-content-between ${styles.rate}`}>
                                <span>Bids: 10</span>
                                <span>$980000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className={`shadow rounded-pill my-3 ${styles.propertyListCard}`}>
                        <div className={styles.propertyListCardImage}>
                            <Image layout="responsive" src={Img.src} width={Img.width} height={Img.height} />
                        </div>
                        <div className={styles.propertyListCardContent}>
                            <a href="">EB Sunrise Bay T2-4-404</a>
                            <div className={`d-flex flex-wrap justify-content-between ${styles.rate}`}>
                                <span>Bids: 10</span>
                                <span>$980000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className={`shadow rounded-pill my-3 ${styles.propertyListCard}`}>
                        <div className={styles.propertyListCardImage}>
                            <Image layout="responsive" src={Img.src} width={Img.width} height={Img.height} />
                        </div>
                        <div className={styles.propertyListCardContent}>
                            <a href="">EB Sunrise Bay T2-4-404</a>
                            <div className={`d-flex flex-wrap justify-content-between ${styles.rate}`}>
                                <span>Bids: 10</span>
                                <span>$980000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className={`shadow rounded-pill my-3 ${styles.propertyListCard}`}>
                        <div className={styles.propertyListCardImage}>
                            <Image layout="responsive" src={Img.src} width={Img.width} height={Img.height} />
                        </div>
                        <div className={styles.propertyListCardContent}>
                            <a href="">EB Sunrise Bay T2-4-404</a>
                            <div className={`d-flex flex-wrap justify-content-between ${styles.rate}`}>
                                <span>Bids: 10</span>
                                <span>$980000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className={`shadow rounded-pill my-3 ${styles.propertyListCard}`}>
                        <div className={styles.propertyListCardImage}>
                            <Image layout="responsive" src={Img.src} width={Img.width} height={Img.height} />
                        </div>
                        <div className={styles.propertyListCardContent}>
                            <a href="">EB Sunrise Bay T2-4-404</a>
                            <div className={`d-flex flex-wrap justify-content-between ${styles.rate}`}>
                                <span>Bids: 10</span>
                                <span>$980000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className={`shadow rounded-pill my-3 ${styles.propertyListCard}`}>
                        <div className={styles.propertyListCardImage}>
                            <Image layout="responsive" src={Img.src} width={Img.width} height={Img.height} />
                        </div>
                        <div className={styles.propertyListCardContent}>
                            <a href="">EB Sunrise Bay T2-4-404</a>
                            <div className={`d-flex flex-wrap justify-content-between ${styles.rate}`}>
                                <span>Bids: 10</span>
                                <span>$980000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className={`shadow rounded-pill my-3 ${styles.propertyListCard}`}>
                        <div className={styles.propertyListCardImage}>
                            <Image layout="responsive" src={Img.src} width={Img.width} height={Img.height} />
                        </div>
                        <div className={styles.propertyListCardContent}>
                            <a href="">EB Sunrise Bay T2-4-404</a>
                            <div className={`d-flex flex-wrap justify-content-between ${styles.rate}`}>
                                <span>Bids: 10</span>
                                <span>$980000</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-xs-12">
                    <div className={`shadow rounded-pill my-3 ${styles.propertyListCard}`}>
                        <div className={styles.propertyListCardImage}>
                            <Image layout="responsive" src={Img.src} width={Img.width} height={Img.height} />
                        </div>
                        <div className={styles.propertyListCardContent}>
                            <a href="">EB Sunrise Bay T2-4-404</a>
                            <div className={`d-flex flex-wrap justify-content-between ${styles.rate}`}>
                                <span>Bids: 10</span>
                                <span>$980000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-12 text-center mt-3">
                    <Link href={'/opportunities'}>
                        <a className="btn rounded-pill py-2 shadow" style={{backgroundColor: '#00c194', color: '#fff'}}>Go to Properties</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default TopProperties