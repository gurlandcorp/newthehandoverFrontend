import { NextPage } from 'next'
import React, { useState } from 'react'
import Blog4 from "../public/assets/img/blog/blog4.jpg";
import Blog5 from "../public/assets/img/blog/blog5.jpg";
import Blog6 from "../public/assets/img/blog/blog6.jpg";
import Blog7 from "../public/assets/img/blog/blog7.jpg";
import Blog8 from "../public/assets/img/blog/blog8.jpg";
import Blog9 from "../public/assets/img/blog/blog9.jpg";
import Blog13 from "../public/assets/img/blog/blog13.jpg";
import Blog14 from "../public/assets/img/blog/blog14.jpg";
import Blog15 from "../public/assets/img/blog/blog15.jpg";
import Blog16 from "../public/assets/img/blog/blog16.jpg";
import Blog17 from "../public/assets/img/blog/blog17.jpg";
import Blog18 from "../public/assets/img/blog/blog18.jpg";
import Widget2 from "../public/assets/img/blog/widget2.jpg";
import Widget3 from "../public/assets/img/blog/widget3.jpg";
import Widget4 from "../public/assets/img/blog/widget4.jpg";
import Widget5 from "../public/assets/img/blog/widget5.jpg";
import Widget6 from "../public/assets/img/blog/widget6.jpg";
import widget05 from "../public/assets/img/blog/widget05.jpg";
import axios from "axios";
import JoiningBanner from '../components/Home/JoiningBanner';
import BreadCrumb from '../components/Shares/BreadCrumb';
import Image from 'next/image';
import PropertyCard from '../components/Shares/PropertyCard';
import PropertyCardForLG12 from '../components/Shares/PropertyCardForLG12';

const Properties: NextPage = ({data}: any) => {
    const [images, setImages] = useState([
		Blog4,
		Blog5,
		Blog6,
		Blog7,
		Blog8,
		Blog9,
		Blog13,
		Blog14,
		Blog15,
		Blog16,
		Blog17,
		Blog18,
	]);

    return (
        <>
        <BreadCrumb title="All Listing" />
			<section className="grid-wrap3">
				<div className="container">
					<div className="row gutters-40">
						<div className="col-lg-4 widget-break-lg sidebar-widget">
							<div className="widget widget-advanced-search">
								<h3 className="widget-subtitle">Advanced Search</h3>
								<form className="map-forms map-form-style-2" >
									<input
										type="text"
										className="form-control"
										placeholder="What are you looking for?"
									/>
									<div className="row">
										<div className="col-lg-12 pl-15 mb-0">
											<div className="rld-single-select">
												<select className="select single-select mr-0">
													<option value="1">Property Type</option>
													<option value="2">Family House</option>
													<option value="3">Apartment</option>
													<option value="3">Condo</option>
												</select>
											</div>
										</div>
										<div className="col-lg-12 pl-15 mb-0">
											<div className="rld-single-select">
												<select className="select single-select mr-0">
													<option value="1">All Categories</option>
													<option value="2">Rent</option>
													<option value="3">Sell</option>
													<option value="3">Buy</option>
												</select>
											</div>
										</div>
										<div className="col-lg-12 pl-15">
											<div className="rld-single-select">
												<select className="select single-select mr-0">
													<option value="1">All Cities</option>
													<option value="2">Los Angeles</option>
													<option value="3">Chicago</option>
													<option value="3">Philadelphia</option>
												</select>
											</div>
										</div>
									</div>
								</form>
								<div className="banner-search-wrap banner-search-wrap-2">
									<div className="rld-main-search rld-main-search3">
										<div className="main-search-field-2">
											{/* <!-- Area Range --> */}
											<div className="price-range-wrapper">
												<div className="range-box">
													<div className="price-label">Price:</div>
													<div
														id="price-range-filter-4"
														className="price-range-filter"
													></div>
													<div className="price-filter-wrap d-flex align-items-center">
														<div className="price-range-select">
															<div className="price-range range-title">$</div>
															<div
																className="price-range"
																id="price-range-min-4"
															></div>
															<div className="price-range">-</div>
															<div
																className="price-range"
																id="price-range-max-4"
															></div>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="filter-button">
											<a
												href="single-listing1.html"
												className="filter-btn1 search-btn"
											>
												Search<i className="fas fa-search"></i>
											</a>
										</div>
									</div>
									{/* <!--/ End Search Form --> */}
								</div>
							</div>
							<div className="widget widget-listing-box1">
								<h3 className="widget-subtitle">Latest Listing</h3>
								<div className="item-img">
									<a>
										<Image
											src={data[0]?.images[0]}
                                            width="630px"
                                            height={'400px'}
											alt="widget"
											// src={Widget6} alt="widget" width="630" height="400"
										/>
									</a>
									<div className="item-category-box1">
										<div className="item-category">For Rent</div>
									</div>
								</div>
								<div className="widget-content">
									<div className="item-category10">
										<a>Villa</a>
									</div>
									<h4 className="item-title">
										<a>
											{/* Modern Villa for House Highland Ave Los Angeles */}{" "}
											{data[0]?.propertyTitle}
										</a>
									</h4>
									<div className="location-area">
										<i className="flaticon-maps-and-flags"></i>Downey,California
									</div>
									<div className="item-price">
										{/* $11,000 */} AED {data[0]?.priceDemand}
										{/* <span>/mo</span> */}
									</div>
								</div>
							</div>
							<div className="widget widget-post">
								<div className="item-img">
									<Image src={widget05.src} blurDataURL={widget05.blurDataURL} alt="widget" width="690" height="850" />

									<div className="circle-shape">
										<span className="item-shape"></span>
									</div>
								</div>
								<div className="item-content">
									<h4 className="item-title">Find Your Dream House</h4>
									<div className="item-price">$2,999</div>
									<div className="post-button">
										<a className="item-btn">Shop Now</a>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-8">
							<div className="property-wrap-9">
								<div className="row justify-content-center">
									<div className="col-lg-12 col-md-12">
										<div className="item-shorting-box">
											<div className="shorting-title">
												<h4 className="item-title">9 Search Results Found</h4>
											</div>
											<div className="item-shorting-box-2">
												<div className="by-shorting">
													<div className="shorting">Sort by:</div>
													<select className="select single-select mr-0">
														<option value="1">Default</option>
														<option value="2">High Price</option>
														<option value="3">Medium Price</option>
														<option value="3">Low Price</option>
													</select>
												</div>
												<div className="grid-button">
													<ul className="nav nav-tabs" role="tablist">
														<li className="nav-item">
															<a
																className="nav-link active"
																data-bs-toggle="tab"
																href="#mylisting"
															>
																<i className="fas fa-th"></i>
															</a>
														</li>
														{/* <li className="nav-item">
															<a
																className="nav-link"
																data-bs-toggle="tab"
																href="#reviews"
															>
																<i className="fas fa-list-ul"></i>
															</a>
														</li> */}
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-style-1 tab-style-3">
									<div className="tab-content" id="myTabContent">
										<div
											className="tab-pane fade show active"
											id="mylisting"
											role="tabpanel"
										>
											<div className="row">
												{data.slice(0, 7).map((i: any, index: any) => {
													return <PropertyCard img={i} data={i} key={index} />;
												})}
											</div>

											{/* <div className="pagination-style-1">
												<ul className="pagination">
													<li className="page-item">
														<a
															className="page-link"
															// href="with-sidebar2.html"
															aria-label="Previous"
														>
															<span aria-hidden="true">&laquo;</span>
															<span className="sr-only">Previous</span>
														</a>
													</li>
													<li className="page-item">
														<a
															className="page-link active"
															// href="with-sidebar2.html"
														>
															1
														</a>
													</li>
													<li className="page-item">
														<a
															className="page-link"
															// href="with-sidebar2.html"
														>
															2
														</a>
													</li>
													<li className="page-item">
														<a
															className="page-link"
															// href="with-sidebar2.html"
														>
															3
														</a>
													</li>
													<li className="page-item">
														<a
															className="page-link"
															// href="with-sidebar2.html"
														>
															4
														</a>
													</li>
													<li className="page-item">
														<a
															className="page-link"
															// href="with-sidebar2.html"
															aria-label="Next"
														>
															<span aria-hidden="true">&raquo;</span>
															<span className="sr-only">Next</span>
														</a>
													</li>
												</ul>
											</div> */}
										</div>
										<div className="tab-pane fade" id="reviews" role="tabpanel">
											<div className="row">
												{images.map((i, index) => {
													return <PropertyCardForLG12 key={index} img={i} />;
												})}
											</div>
											<div className="pagination-style-1">
												<ul className="pagination">
													<li className="page-item">
														<a
															className="page-link"
															// href="with-sidebar.html"
															aria-label="Previous"
														>
															<span aria-hidden="true">&laquo;</span>
															<span className="sr-only">Previous</span>
														</a>
													</li>
													<li className="page-item">
														<a
															className="page-link active"
															// href="with-sidebar2.html"
														>
															1
														</a>
													</li>
													<li className="page-item">
														<a
															className="page-link"
															// href="with-sidebar2.html"
														>
															2
														</a>
													</li>
													<li className="page-item">
														<a
															className="page-link"
															// href="with-sidebar2.html"
														>
															3
														</a>
													</li>
													<li className="page-item">
														<a
															className="page-link"
															// href="with-sidebar2.html"
														>
															4
														</a>
													</li>
													<li className="page-item">
														<a
															className="page-link"
															// href="with-sidebar2.html"
															aria-label="Next"
														>
															<span aria-hidden="true">&raquo;</span>
															<span className="sr-only">Next</span>
														</a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<JoiningBanner />
        </>
    )
}

export default Properties

export async function getServerSideProps(context: any) {
    // Fetch data from external API
	// console.log(context.query)
    const res = await fetch(`${process.env.API_URL}/property/sort/desc`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { 
        props: { 
            data
        }
    }
}