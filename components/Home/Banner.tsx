import Banner2 from "../../public/assets/img/burj-khalifa.jpg";
import Link from "next/link"
import { useContext } from "react"
import { MainContext } from "../../context/MainContext";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Home.module.css"

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
        <section className="main-banner-wrap1 main-banner-wrap4 parallaxie" data-bg-image={props.data.images[0]} >
            <div style={{ background: `url(${props.data.images[0]})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed',backgroundPositionX:'center', position: "absolute", WebkitMask: "linear-gradient(rgb(255, 255, 255), transparent)", filter: "blur(10px)", inset: "0" }}></div>
            <div className="container position-relative" style={{zIndex: 1}}>
                <div className="row justify-content-between">
                    {/* <div className="col-xl-5 col-sm-12">
                        <div className="bg-white p-3 rounded-3 mb-3 shadow">
                            <div className="w-100">
                                <div className="control-style">
                                    <input
                                    type="text"
                                    className="form-control p-3"
                                    placeholder="What are you looking for?"
                                    onChange={(e)=>setSearch({...search, text: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="w-100">
                                <div className="rld-single-select mt-0">
                                    <select className="form-control p-3 rounded border my-3" onChange={(e)=>setSearch({...search, property_type: e.target.value})} >
                                        <option value="">Select Property Type</option>
                                        <option value="Constructed">Constructed</option>
                                        <option value="Non-constructed">Non-constructed</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-100">
                                <div className="rld-single-select mt-0">
                                    <select className="form-control p-3 rounded border" onChange={(e)=>setSearch({...search, city: e.target.value})} >
                                        <option value="">Select City</option>
                                        <option value="Dubai">Dubai</option>
                                    </select>
                                </div>
                            </div>
                            <div className="filter-button mt-3">
                                <a className="filter-btn1 search-btn" onClick={(e)=>searchSubmit(e)}>
                                    <span>Search</span>
                                    <i className="fas fa-search" />
                                </a>
                            </div>
                        </div>
                    </div> */}
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
                            {/* <Image src={props.data.images[0]} layout="intrinsic" width={250} height={250} /> */}
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
                                    {/* <div className="item-price">
                                    $15,000/<span>mo</span>
                                    </div> */}
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
        </section>
    );
};

export default Banner;