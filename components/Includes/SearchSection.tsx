import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MainContext } from "../../context/MainContext";

const SearchSection = () => {

    const {search, setSearch} = useContext(MainContext)
    const router = useRouter()
    const searchSubmit = (e: any) => {
        e.preventDefault()
        router.push(`/opportunities?propertyType=${search.property_type}&city=${search.city}&text=${search.text}`)
    }

    return (
        <div id="header-bottombar" className="header-bottombar-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-9 col-lg-9">
                        <form className="map-form" onSubmit={(e)=>searchSubmit(e)}>
                        <div className="row">
                            <div className="col-lg-4 pl-15 pr-0">
                                <div className="control-style">
                                    <input
                                    type="text"
                                    className="form-control"
                                    placeholder="What are you looking for?"
                                    onChange={(e)=>setSearch({...search, text: e.target.value})}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 pl-15 pr-0">
                                <div className="rld-single-select mt-0">
                                    <select className="select single-select mr-0 rounded" onChange={(e)=>setSearch({...search, property_type: e.target.value})} >
                                        <option value="">Property Type</option>
                                        <option value="Family House">Family House</option>
                                        <option value="Apartment">Apartment</option>
                                        <option value="Condo">Condo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 pl-15">
                            <div className="rld-single-select mt-0">
                                <select className="select single-select mr-0 rounded" onChange={(e)=>setSearch({...search, city: e.target.value})} >
                                    <option value="">All Cities</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="Chicago">Chicago</option>
                                    <option value="Philadelphia">Philadelphia</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <div className="col-xl-3 col-lg-3 d-flex justify-content-end">
                        <div className="banner-search-wrap banner-search-wrap-2">
                        <div className="rld-main-search rld-main-search2">
                            <div className="row">
                            <div className="col-sm-12">
                                <div className="box">
                                <div className="dropdown-filter">
                                    <span>
                                    <i className="fas fa-sliders-h" />
                                    </span>
                                </div>
                                <div className="filter-button">
                                    <a className="filter-btn1 search-btn" onClick={(e)=>searchSubmit(e)} >
                                    <span>Search</span>
                                    <i className="fas fa-search" />
                                    </a>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* <!--/ End Search Form --> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="testing-explore">
                        <div className="explore__form-checkbox-list explore__form-checkbox-list2 full-filter">
                            <div className="row">
                            <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                {/* <!-- Form Property Status --> */}
                                <div className="form-group bed">
                                <label className="item-bedrooms">Bedrooms</label>
                                <div className="nice-select form-control wide" tabIndex={0} >
                                    <span className="current">Any</span>
                                    <ul className="list">
                                    <li data-value="1" className="option selected ">
                                        For Sale
                                    </li>
                                    <li data-value="2" className="option">
                                        For Rent
                                    </li>
                                    </ul>
                                </div>
                                </div>
                                {/* <!--/ End Form Property Status --> */}
                            </div>
                            <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                                {/* <!-- Form Bedrooms --> */}
                                <div className="form-group bath">
                                <label className="item-bath">Bathrooms</label>
                                <div className="nice-select form-control wide" tabIndex={0}>
                                    <span className="current">Any</span>
                                    <ul className="list">
                                    <li data-value="1" className="option selected">
                                        1
                                    </li>
                                    <li data-value="2" className="option">
                                        2
                                    </li>
                                    <li data-value="3" className="option">
                                        3
                                    </li>
                                    </ul>
                                </div>
                                </div>
                                {/* <!--/ End Form Bedrooms --> */}
                            </div>
                            <div className="col-lg-4 col-md-6 py-1 pl-0 pr-0">
                                {/* <!-- Form Bathrooms --> */}
                                <div className="form-group garage">
                                <label className="item-garage">Garage</label>
                                <div className="nice-select form-control wide"
                                    tabIndex={0}
                                >
                                    <span className="current">Any</span>
                                    <ul className="list">
                                    <li data-value="1" className="option selected">
                                        1
                                    </li>
                                    <li data-value="2" className="option">
                                        2
                                    </li>
                                    <li data-value="3" className="option">
                                        3
                                    </li>
                                    </ul>
                                </div>
                                </div>
                                {/* <!--/ End Form Bathrooms --> */}
                            </div>
                            {/* <!-- Price Fields --> */}
                            <div className="main-search-field-2 col-12">
                                <div className="row">
                                <div className="col-md-6 pl-0">
                                    <div className="price-range-wrapper">
                                    <div className="range-box">
                                        <div className="price-label">Flat Size:</div>
                                        <div
                                        id="price-range-filter-3"
                                        className="price-range-filter"
                                        ></div>
                                        <div className="price-filter-wrap d-flex align-items-center">
                                        <div className="price-range-select">
                                            <div
                                            className="price-range"
                                            id="price-range-min-3"
                                            ></div>
                                            <div className="price-range">-</div>
                                            <div
                                            className="price-range"
                                            id="price-range-max-3"
                                            ></div>
                                            <div className="price-range range-title">
                                            sft
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <div className="col-md-6 pl-0">
                                    <div className="price-range-wrapper">
                                    <div className="range-box">
                                        <div className="price-label">Distance:</div>
                                        <div
                                        id="price-range-filter-2"
                                        className="price-range-filter"
                                        ></div>
                                        <div className="price-filter-wrap d-flex align-items-center">
                                        <div className="price-range-select">
                                            <div
                                            className="price-range"
                                            id="price-range-min-2"
                                            ></div>
                                            <div className="price-range">-</div>
                                            <div
                                            className="price-range"
                                            id="price-range-max-2"
                                            ></div>
                                            <div className="price-range range-title">
                                            km
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
                                <h4 className="text-dark">Amenities</h4>
                                <ul className="no-ul-list third-row">
                                    <li>
                                    <input
                                        id="a-1"
                                        className="checkbox-custom"
                                        name="a-1"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="a-1"
                                        className="checkbox-custom-label"
                                    >
                                        Air Condition
                                    </label>
                                    </li>
                                    <li>
                                    <input
                                        id="a-2"
                                        className="checkbox-custom"
                                        name="a-2"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="a-2"
                                        className="checkbox-custom-label"
                                    >
                                        Bedding
                                    </label>
                                    </li>
                                    <li>
                                    <input
                                        id="a-3"
                                        className="checkbox-custom"
                                        name="a-3"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="a-3"
                                        className="checkbox-custom-label"
                                    >
                                        Heating
                                    </label>
                                    </li>
                                    <li>
                                    <input
                                        id="a-4"
                                        className="checkbox-custom"
                                        name="a-4"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="a-4"
                                        className="checkbox-custom-label"
                                    >
                                        Internet
                                    </label>
                                    </li>
                                    <li>
                                    <input
                                        id="a-5"
                                        className="checkbox-custom"
                                        name="a-5"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="a-5"
                                        className="checkbox-custom-label"
                                    >
                                        Microwave
                                    </label>
                                    </li>
                                    <li>
                                    <input
                                        id="a-6"
                                        className="checkbox-custom"
                                        name="a-6"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="a-6"
                                        className="checkbox-custom-label"
                                    >
                                        Smoking Allow
                                    </label>
                                    </li>
                                    <li>
                                    <input
                                        id="a-7"
                                        className="checkbox-custom"
                                        name="a-7"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="a-7"
                                        className="checkbox-custom-label"
                                    >
                                        Terrace
                                    </label>
                                    </li>
                                    <li>
                                    <input
                                        id="a-8"
                                        className="checkbox-custom"
                                        name="a-8"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="a-8"
                                        className="checkbox-custom-label"
                                    >
                                        Balcony
                                    </label>
                                    </li>
                                    <li>
                                    <input
                                        id="a-9"
                                        className="checkbox-custom"
                                        name="a-9"
                                        type="checkbox"
                                    />
                                    <label
                                        htmlFor="a-9"
                                        className="checkbox-custom-label"
                                    >
                                        Balcony
                                    </label>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            <div className="filter-button">
                                <a href="index4.html" className="filter-btn1">
                                Apply Filter
                                </a>
                                <a href="index4.html" className="filter-btn1 reset-btn">
                                Reset Filter<i className="fas fa-redo-alt"></i>
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchSection;