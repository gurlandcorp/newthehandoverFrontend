import { useContext } from "react"
import { MainContext } from "../../context/MainContext";
import { useRouter } from "next/router";
import Image from "next/image";
import CoverImage from "/public/img/cover-img.png"
import SearchSection from "../Includes/SearchSection";

const Banner = (props: any) => {

    const {search, setSearch} = useContext(MainContext)

    const router = useRouter()

    const searchSubmit = (e: any) => {
        e.preventDefault()
        router.push(`/opportunities?propertyType=${search.property_type}&city=${search.city}&text=${search.text}`)
    }

    const learnMore = () => {
        document.querySelector('.Home_topPropertyContainer__zEQHi')?.scrollIntoView()
    }

    return (
        <>
        <div>
            <SearchSection />

            {/* Start of Hero Section  */}
            <div className="width m-auto herosection">
                <div className="grid grid-cols-1 items-center justify-center lg:grid-cols-2">
                    <div className="lg:text-left text-center">
                        <h1 className="heading">Off Plan Property<br /> Investing For<br /> Everyone Online.</h1>
                        <p className="tagline">The Handover is the world&apos;s first and largest Off-plan
                            investing marketplace</p>
                        <p className="tagline">Explore <strong>marketplace</strong> as</p>
                        <div className="block mt-10">
                            <a href="#" className="dark-btn mr-2">Developer</a>
                            <a href="#" className="inverse-dark-btn">Investor</a>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 text-center">
                        <Image src={CoverImage.src} width={CoverImage.width} height={CoverImage.height} className="cover-img mx-auto" alt={'cover-image'} />
                    </div>
                </div>
            </div>
            {/* END OF Hero Section  */}
        </div>
        {/* <section className="main-banner-wrap1 main-banner-wrap4 parallaxie" data-bg-image={props.data.images[0]} >
            <div style={{ background: `url(${props.data.images[0]})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed',backgroundPositionX:'center', position: "absolute", WebkitMask: "linear-gradient(rgb(255, 255, 255), transparent)", filter: "blur(10px)", inset: "0" }}></div>
            <div className="container position-relative" style={{zIndex: 1}}>
                <div className="row justify-content-between">
                    <div className="col-xl-7 col-md-6 col-sm-12">
                        <div className={styles.heroSectionContentContainer}>
                            <h2>Off plan property investing for everyone online</h2>
                            <p>TheHandover is the world&apos;s first and largest Off-plan investing marketplace</p>
                            <div className={styles.heroSectionBtnWrapper}>
                                <h4>Explore <span>marketplace</span> as</h4>
                                <button className={`${styles.btnGreen}`} style={{marginRight: '1rem'}}>
                                    Developer
                                </button>
                                <button className={styles.btnGreenOutline}>
                                    Investor
                                </button>
                            </div>
                            <div>
                                <a className={`cursor-pointer ${styles.learnMore}`} onClick={()=>learnMore()}>Learn more about <span>TheHandover</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-6 col-sm-12">
                        <div className="">
                            <div className="main-banner-box4 wow slideInUp overflow-hidden" data-wow-delay=".3s"  style={{padding:0, background: `url(${props.data.images[0]})`, backgroundSize: 'cover',backgroundRepeat: 'no-repeat', height: '400px'}} >
                                <div className="banner-style-1 justify-content-between" style={{padding: '1.5rem'}}>
                                    <div className="item-category-box1">
                                        <div className="item-category">{props.data.propertyType}</div>
                                    </div>
                                    <div className={styles.btnPrimary}>
                                        <Link href={'/'}>
                                            <a className="">Bid Now</a>
                                        </Link>
                                    </div>
                                </div>
                                <div style={{position: 'absolute', width: '100%', bottom: '0', background: '#fff', padding: '1.5rem'}}>
                                    <h3 className="item-title">
                                        <Link href={`/opportunity/${props.data._id}`}>
                                            <a style={{color: '#00c194'}}>{props.data.propertyTitle}</a>
                                        </Link>
                                    </h3>
                                    <div className="location-area">
                                        <i className="flaticon-maps-and-flags" />
                                        {props.data.location.city}
                                    </div>
                                    <div className="item-categoery3 item-categoery4">
                                        <ul>
                                        <li>
                                            <i className="flaticon-bed" />
                                            Beds: {props.data.bedrooms}
                                        </li>
                                        <li>
                                            <i className="flaticon-shower" />
                                            Baths: {props.data.bathrooms}
                                        </li>
                                        <li>
                                            <i className="flaticon-two-overlapping-square" />
                                            {props.data.area}
                                        </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        </>
    );
};

export default Banner;