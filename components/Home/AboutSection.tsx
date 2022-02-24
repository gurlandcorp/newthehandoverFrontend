import Shape26 from "../../public/assets/img/figure/shape026.png";
import Shape27 from "../../public/assets/img/figure/shape27.png";
import Shape28 from "../../public/assets/img/figure/shape28.png";
import Shape29 from "../../public/assets/img/about/shape29.png";
import About1 from "../../public/assets/img/about/about1.png";
import About13 from "../../public/assets/img/about/room2.jpg";
import About14 from "../../public/assets/img/about/abu-dhabi-room.jpg";
import About15 from "../../public/assets/img/about/about15.jpg";
import Link from "next/link";
import Image from "next/image";

const AboutSection = () => {
    return (
        <section className="about-wrap-4 motion-effects-wrap">
        <div className="motion-effects8">
            <Image src={Shape26.src} blurDataURL={Shape26.blurDataURL} alt="shape" width="134" height="137" />
        </div>
        <div className="motion-effects9">
            <Image src={Shape27.src} blurDataURL={Shape27.blurDataURL} alt="shape" width="105" height="103" />
        </div>
        <div className="motion-effects10">
            <Image src={Shape28.src} blurDataURL={Shape28.blurDataURL} alt="shape" width="90" height="18" />
        </div>
        <div className="motion-effects11">
            <Image src={Shape29.src} blurDataURL={Shape29.blurDataURL} alt="shape" width="460" height="460" />
        </div>
        <div className="container">
            <div className="row">
            <div className="col-lg-5">
                <div className="about-box6 wow fadeInUp" data-wow-delay=".2s">
                    <div className="item-heading-left">
                        <span className="section-subtitle">Who We Are</span>
                        <h2 className="section-title">Off plan investing online auctions.</h2>
                        <div className="bg-title-wrap" style={{ display: "block" }}>
                        <span className="background-title solid">About Us</span>
                        </div>
                    </div>
                    <p>Invest like a Sheik. With todays inflationary environment the smartest investors are allocating more of their portfolio’s capital to inflationary hedge assets like real estate. Invest in a hard asset that stores real value and yields future income.</p>
                    <p>What is off plan? Off plan investing is the investment into residential real estate at the construction or pre construction phase. Prior to the completion of the project get discounts on the asset’s true value and see your capital appreciate.</p>
                    <div className="about-button">
                        <Link href={'/contact'} >
                            <a className="item-btn">
                            Contact With Us
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="offset-lg-1 col-lg-6">
                <div className="about-box7">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="item-img">
                        <Image src={About13.src} blurDataURL={About13.blurDataURL} alt="about" height="270" width="530" />
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-xl-8">
                        <div className="about-img-style-3">
                            <Image
                            src={About14.src}
                            blurDataURL={About14.blurDataURL}
                            alt="about"
                            height="315"
                            width="363"
                            />
                        </div>
                        </div>
                        <div className="col-xl-4">
                        <div className="about-img-style-4">
                            <Image
                            src={About15.src}
                            blurDataURL={About15.blurDataURL}
                            alt="about"
                            height="315"
                            width="280"
                            />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="about-img-style-5">
                    <div className="item-big-img">
                    <Image src={About1.src} blurDataURL={About1.blurDataURL} alt="about" width="425" height="654" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default AboutSection;
