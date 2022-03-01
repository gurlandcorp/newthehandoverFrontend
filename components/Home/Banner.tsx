import Banner2 from "../../public/assets/img/burj-khalifa.jpg";
import Link from "next/link"
import styles from "./Home.module.css"
import { useContext } from "react"
import { MainContext } from "../../context/MainContext";
import { useRouter } from "next/router";

const Banner = (props: any) => {

    const {search, setSearch} = useContext(MainContext)

    const router = useRouter()
    const searchSubmit = (e: any) => {
        e.preventDefault()
        router.push(`/opportunities?propertyType=${search.property_type}&city=${search.city}&text=${search.text}`)
    }

    return (
        <section className="main-banner-wrap1 main-banner-wrap4 parallaxie" data-bg-image={Banner2.src} style={{ background: `url(${Banner2.src})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed',backgroundPositionX:'center' }} >
            <div className="container">
                <div className="row justify-content-between">
                <div className="col-xl-5 col-sm-12">
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
                </div>
                <div className="col-xl-5 col-sm-12">
                    <div className="main-banner-box4 wow slideInUp" data-wow-delay=".3s" >
                        <div className="banner-style-1 justify-content-between">
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
        </section>
    );
};

export default Banner;