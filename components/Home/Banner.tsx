import Banner2 from "../../public/assets/img/burj-khalifa.jpg";

const Banner = () => {
    return (
        <section
        className="main-banner-wrap1 main-banner-wrap4 parallaxie"
        data-bg-image={Banner2.src}
        style={{ background: `url(${Banner2.src})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed',backgroundPositionX:'center' }}
        >
        <div className="container">
            <div className="row justify-content-end">
            <div className="col-xl-5 col-sm-12">
                <div
                className="main-banner-box4 wow slideInUp"
                data-wow-delay=".3s"
                >
                <div className="banner-style-1">
                    <div className="item-category-box1">
                    <div className="item-category">For Rent</div>
                    </div>
                    <div className="item-price">
                    $15,000/<span>mo</span>
                    </div>
                </div>
                <h3 className="item-title">Furnished Luxary Apartment</h3>
                <div className="location-area">
                    <i className="flaticon-maps-and-flags" />
                    Downey, California
                </div>
                <div className="item-categoery3 item-categoery4">
                    <ul>
                    <li>
                        <i className="flaticon-bed" />
                        Beds: 03
                    </li>
                    <li>
                        <i className="flaticon-shower" />
                        Baths: 02
                    </li>
                    <li>
                        <i className="flaticon-two-overlapping-square" />
                        931 Sqft
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Banner;