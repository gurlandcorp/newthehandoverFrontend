import Banner3 from "../../public/assets/img/banner/banner03.jpg";

const PropertyBanner = () => {
    return (
        <section
        className="property-banner-wrap1 parallaxie"
        data-bg-image={Banner3.src}
        style={{
            background: `url(${Banner3.src}) no-repeat center center / cover`,
        }}
        >
        <div className="container">
            <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
                <div className="property-box1 wow slideInUp" data-wow-delay="100">
                <div className="item-subtitle">Let’s Take a Tour</div>
                <h3 className="item-title">
                    Search Property Smarter, Quicker & Anywhere
                </h3>
                <div className="play-button">
                    <div className="item-icon">
                    <a
                        href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
                        className="play-btn"
                    >
                        <span className="play-icon style-1">
                        <i className="fas fa-play"></i>
                        </span>
                        <span className="play-text">Watch Video</span>
                    </a>
                    </div>
                </div>
                </div>
            </div>
            <div className="col-lg-7 col-md-12">
                <div className="property-img wow fadeInUp" data-wow-delay="100">
                <div className="bg-title-wrap" style={{ display: "block" }}>
                    <span className="background-title solid">Property For All</span>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default PropertyBanner;