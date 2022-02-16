import Image from 'next/image';
import React from 'react'
import About08 from "../../public/assets/img/about/about08.jpg";
import About09 from "../../public/assets/img/about/about09.jpg";
import Shape14 from "../../public/assets/img/figure/shape14.svg";
import Shape15 from "../../public/assets/img/figure/shape15.svg";

const About = () => {
    return (
        <section className="about-wrap2">
            <div className="container">
                <div className="row flex-row-reverse flex-lg-row">
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-img">
                            <Image src={`${About08.src}`} alt="about" width={746} height={587} />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-box3 wow fadeInUp" data-wow-delay=".2s">
                            <span className="item-subtitle">About Us</span>
                            <h2 className="item-title">
                                We're on a Mission to Change View of RealEstate Field.
                            </h2>
                            <p>
                                when an unknown printer took a galley of type and scrambled it
                                to make type specimen bookt has survived not only five
                                centuries alsoey jequery the leap into electronic typesetting.
                            </p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="about-layout1">
                                        <div className="item-img">
                                            <Image
                                                src={Shape14.src}
                                                alt="shape"
                                                width={60}
                                                height={57}
                                            />
                                        </div>
                                        <h3 className="item-sm-title">Modern Villa</h3>
                                        <p>
                                            when unknown printer took galley of type and scrambled.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                    <div className="about-layout1">
                                        <div className="item-img">
                                            <Image
                                                src={Shape15.src}
                                                alt="shape"
                                                width={62}
                                                height={57}
                                            />
                                        </div>
                                        <h3 className="item-sm-title">Secure Payment</h3>
                                        <p>
                                            when unknown printer took galley of type and scrambled.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row flex-row flex-lg-row-reverse">
                    <div className="col-xl-6 col-lg-6">
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
                    <div className="col-xl-6 col-lg-6">
                        <div className="about-layout2">
                            <span className="item-subtitle">Company Power</span>
                            <h2 className="item-title">
                                The Core Company Values Of Our main Goal.
                            </h2>
                            <p>
                                when an unknown printer took a galley of type and scrambled it
                                to make type specimen bookt has survived.
                            </p>
                            <div className="skills-wrap-layout-2 counter-appear">
                                <div className="single-skill">
                                    <div className="title-bar">
                                        <h4 className="title"> Modern Technology </h4>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-per" data-per={59} />
                                    </div>
                                </div>
                                <div className="single-skill">
                                    <div className="title-bar">
                                        <h4 className="title">Tax Solution Area</h4>
                                    </div>
                                    <div className="skill-bar">
                                        <div className="skill-per" data-per={79} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About