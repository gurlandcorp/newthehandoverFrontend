import Video from "../../public/assets/img/svg/video-bg-2.svg";
import Banner1 from "../../public/assets/img/banner/banner01.png";
import Shape3 from "../../public/assets/img/figure/shape3.png";
import Shape4 from "../../public/assets/img/figure/shape4.png";
import Shape5 from "../../public/assets/img/figure/shape5.png";
import Image from "next/image";

const JoiningBanner = () => {
    return (
    <section
      className="banner-collection1 motion-effects-wrap"
      data-wow-delay=".2s"
    >
      <div className="shape-img1">
        <Image src={Video.src} alt="figure" height="149" width="230" />
      </div>
      <div className="shape-img2">
        <Image src={Video.src} alt="figure" height="149" width="230" />
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7">
            <div className="banner-box1">
              <div className="item-img">
                <Image
                  src={Banner1.src}
                  alt="banner"
                  height="252"
                  width="169"
                  className="img-bg-space"
                />
                <div className="motion-effects3">
                  {/* <img src={Shape3} alt="shape" height="113" width="113" /> */}
                </div>
                <div className="motion-effects4">
                  {/* <img src={Shape4} alt="shape" height="157" width="154" /> */}
                </div>
                <div className="motion-effects5">
                  {/* <img src={Shape5} alt="shape" height="91" width="102" /> */}
                </div>
              </div>
              <div className="item-content">
                <h2 className="heading-title">Register as a developer or property owner</h2>
                <p>
                Be the part of the top off plan investing online auctions.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="banner-button">
              <a href="https://app.thehandover.com" className="banner-btn">
              Post a Property
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default JoiningBanner;
