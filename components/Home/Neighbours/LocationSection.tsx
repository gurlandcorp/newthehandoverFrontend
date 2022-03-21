import Image from "next/image";
import Link from "next/link";
import styles from "./LocationSection.module.css"
import UmmAlQuwain from "/public/assets/img/toparea/umm-al-quwain.jpg";
import Fujairah from "/public/assets/img/toparea/fujairah.jpg";
import Dubai from "/public/assets/img/toparea/dubai.jpg";
import AbuDhabi from "/public/assets/img/toparea/abu-dhabi.jpg";
import Ajman from "/public/assets/img/toparea/ajman.jpg";
import Sharjah from "/public/assets/img/toparea/sharjah.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const LocationSection = () => {
    return (
        <>
        {/* Start Neighbourhood Section  */}
        <div className="py-20" style={{backgroundColor: '#f7f7f7'}}>
            <div className="width mx-auto">
                <div className="title-box">
                    <h3 className="sub-title">TOP MARKETS</h3>
                    <h2 className="theme-color text-lg font-semibold md:text-3xl">Find Your Neighbourhood</h2>
                </div>
            </div>
            <div className="width mx-auto my-10">
                {/* Swiper */}
                <Swiper
                slidesPerView={3}
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                    <SwiperSlide>
                        <div style={{ background: 'url('+UmmAlQuwain.src+')' }} className={styles.slideBox}>
                            <div className={styles.slideContent}>
                                <div className={styles.propCount}>02 Properties <br /><div className="location">Umm al-Quwain</div></div>
                                <div className="arrow">
                                    {/* <Image src={UmmAlQuwain.src} width={UmmAlQuwain.width} height={UmmAlQuwain.height} alt={'Umm al-Quwain'} /> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div style={{ background: `url(${Fujairah.src})` }} className={styles.slideBox}>
                                <div className={styles.slideContent}>
                                    <div className={styles.propCount}>02 Properties <br /><div className="location">Fujairah</div></div>
                                    <div className="arrow">
                                        {/* <Image src={Fujairah.src} width={Fujairah.width} height={Fujairah.height} alt={'Fujairah'} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ background: `url(${Dubai.src})` }} className={styles.slideBox}>
                            <div className={styles.slideContent}>
                                <div className={styles.propCount}>02 Properties <br /><div className={styles.location}>Dubai</div></div>
                                <div className="arrow">
                                    {/* <Image src={Dubai.src} width={Dubai.width} height={Dubai.height} alt={'Dubai'} /> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide">
                            <div style={{ background: `url(${AbuDhabi.src})` }} className={styles.slideBox}>
                                <div className={styles.slideContent}>
                                    <div className={styles.propCount}>02 Properties <br /><div className={styles.location}>Abu Dhabi</div></div>
                                    <div className="arrow">
                                        {/* <Image src={AbuDhabi.src} width={AbuDhabi.width} height={AbuDhabi.height} alt={'Abu Dhabi'} /> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ background: `url(${Ajman.src})` }} className={styles.slideBox}>
                            <div className={styles.slideContent}>
                                <div className={styles.propCount}>02 Properties <br /><div className={styles.location}>Ajman</div></div>
                                <div className="arrow">
                                    {/* <Image src={Ajman.src} width={Ajman.width} height={Ajman.height} alt={'Ajman'} /> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ background: `url(${Sharjah.src})` }} className={styles.slideBox}>
                            <div className={styles.slideContent}>
                                <div className={styles.propCount}>02 Properties <br /><div className={styles.location}>Sharjah</div></div>
                                <div className="arrow">
                                    {/* <Image src={Sharjah.src} width={Sharjah.width} height={Sharjah.height} alt={'Sharjah'} /> */}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="width mx-auto text-center">
                <a href="/" className="dark-btn">Explore More</a>
            </div>
        </div>
        {/* End Neighbourhood Section Here  */}
        </>
    );
};

export default LocationSection;