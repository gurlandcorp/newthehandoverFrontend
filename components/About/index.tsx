import Image from 'next/image';
import React from 'react'
import About08 from "../../public/assets/img/about/about08.jpg";
import About09 from "../../public/assets/img/about/about09.jpg";
import SearchSection from '../Includes/SearchSection';
import styles from "./About.module.css"
import BackgroundImage from "/public/img/image-box-2.jpg"

const About = () => {
    return (
        <>
        {/* Start of Search Bar  */}
        <div className="" style={{ backgroundImage: `linear-gradient(178deg, #00000059, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1), white), url(${BackgroundImage.src})`, backgroundRepeat: 'no-repeat' }}>
            <SearchSection />
            <div className="font-semibold py-32 text-3xl text-center">
                <h3 className="uppercase theme-color text-4xl">About</h3>
            </div>
        </div>
        {/* end of search Bar  */}
            <section className="about-wrap2 width mx-auto">
                <div className="flex flex-wrap flex-row-reverse flex-lg-row">
                    <div className="w-full md:w-3/6">
                        <div className="about-img">
                            <Image src={`${About08.src}`} alt="about" width={746} height={587} />
                        </div>
                    </div>
                    <div className="w-full md:w-3/6">
                        <div className="about-box3 mx-3" data-wow-delay=".2s">
                            {/* <span className="item-subtitle">About Us</span> */}
                            <h2 className="item-title text-gray-500">
                                HandOver – Embark on a journey to your best off-plan property deal!
                            </h2>
                            <h4 className={`${styles.h4} theme-color`}>Who Are We?</h4>
                            <p className="text-gray-500" style={{marginBottom: '10px'}}>HandOver is a leading property portal revolutionizing the off-plan real estate market. We take pride in bridging the gap between investors and top real estate developers to discover their best property offers online.</p>

                            <h4 className={`${styles.h4} theme-color`}>Our Vision</h4>
                            <p className="text-gray-500" style={{marginBottom: '10px'}}>Being the most trusted name for property searching and pre-selling, HandOver has set its sights on taking the off-plan real estate industry by storm from the frontlines. Our topmost priority is to alleviate the burden of responsibility to ensure smooth sailing in your endeavors.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap flex-row flex-lg-row-reverse mt-10">
                    <div className="w-full md:w-3/6">
                        <div className="about-layout3">
                            <div className="item-img">
                                <Image src={About09.src} blurDataURL={About09.blurDataURL} alt="about" width={809} height={587} />
                                <div className="play-button">
                                    <div className="item-icon">
                                        <a
                                            href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
                                            className="play-btn play-btn-big"
                                        >
                                            <span className="play-icon style-2">
                                                <i className="fas fa-play" />
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-3/6">
                        <div className="about-layout2 mx-5">
                            <span className="item-subtitle text-xl theme-color">Our Mission</span>
                            <h2 className="item-title text-base theme-color">
                                The Core Company Values Of Our main Goal.
                            </h2>
                            <p className="text-gray-500 my-2">We know it&lsquo;s special to you — so we do our best to make it a memorable, reliable, and secure real estate experience for you. We, at HandOver, are devoted to providing our clientele access to the latest and most comprehensive pre-sale/off-plan properties listings.
                            </p>
                            <div className="">
                                <div className="single-skill">
                                    <h4 className="title text-sm theme-color border-b border-solid border-b-blue-800 w-max"> Modern Technology </h4>
                                    <div className="skill-bar">
                                        <div className="skill-per" data-per={59} />
                                    </div>
                                </div>
                                <div className="single-skill">
                                    <h4 className="title text-sm theme-color border-b border-solid border-b-blue-800 w-max">Tax Solution Area</h4>
                                    <div className="skill-bar">
                                        <div className="skill-per" data-per={79} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About