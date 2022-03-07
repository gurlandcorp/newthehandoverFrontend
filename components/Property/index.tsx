import React from 'react'
import widget05 from "../../public/assets/img/blog/widget05.jpg";
import floor_plan00 from "../../public/assets/img/figure/floor_plan00.jpg";
import listing01 from "../../public/assets/img/blog/listing01.jpg";
import Image from 'next/image';
import Link from 'next/link';
import { parseCookies } from 'nookies';

const Index = (props: any) => {

	const {token} = parseCookies()

    return (
        <section className="single-listing-wrap1">
			<div className="container">
				<div className="single-property">
					<div className="content-wrapper">
						<div className="property-heading">
							<div className="row">
								<div className="col-lg-6 col-md-12">
									<div className="single-list-cate">
										<div className="item-categoery">For Rent</div>
									</div>
								</div>
								<div className="col-lg-6 col-md-12">
									<div className="single-list-price">
										AED {props.property.priceDemand}
									</div>
								</div>
							</div>
							<div className="row align-items-center">
								<div className="col-lg-8 col-md-12">
									<div className="single-verified-area">
										<div className="item-title">
											<h3>
												<a
												//  href="single-listing2.html"
												>
													{props.property.propertyTitle}
												</a>
											</h3>
										</div>
									</div>
									{/* <div className="single-item-address">
										<ul>
											<li>
												<i className="fas fa-map-marker-alt"></i>House#18, Road#07,
												Albany, New York, 08525 /
											</li>
											<li>
												<i className="fas fa-clock"></i>7 months ago /
											</li>
											<li>
												<i className="fas fa-eye"></i>Views: 1,230
											</li>
										</ul>
									</div> */}
								</div>
								<div className="col-lg-4 col-md-12">
									<div className="side-button">
										<ul>
											<li>
												<a href="with-sidebar2.html" className="side-btn">
													<i className="flaticon-share"></i>
												</a>
											</li>
											<li>
												<a href="with-sidebar2.html" className="side-btn">
													<i className="flaticon-heart"></i>
												</a>
											</li>
											<li>
												<a href="with-sidebar2.html" className="side-btn">
													<i className="flaticon-left-and-right-arrows"></i>
												</a>
											</li>
											<li>
												<a href="with-sidebar2.html" className="side-btn">
													<i className="flaticon-printer"></i>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-lg-8">
								<div
									className="featured-thumb-slider-area wow fadeInUp"
									data-wow-delay=".4s"
								>
									<div className="feature-box3 swiper-container">
										<div className="swiper-wrapper">
											<div className="swiper-slide">
												<div className="feature-img1 zoom-image-hover">
													{
														props.property!=undefined && props.property!='' && props.property.images != undefined ?
														(
															<Image
																src={props.property.images[0]}
																alt="feature"
                                                                width={'798px'}
                                                                height={'420px'}
															/>
														) : (
															''
														)
													}
												</div>
											</div>
											{/* <div className="swiper-slide">
												<div className="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product3.jpg"
														alt="feature"

														// width="798"
														// height="420"
													/>
												</div>
											</div> */}

											{/* <div className="swiper-slide">
												<div className="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product4.jpg"
														alt="feature"
														width="798"
														height="420"
													/>
												</div>
											</div> */}

											{/* <div className="swiper-slide">
												<div className="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product5.jpg"
														alt="feature"
														// width="798"
														// height="420"
													/>
												</div>
											</div> */}

											{/* <div className="swiper-slide">
												<div className="feature-img1 zoom-image-hover">
													<img
														src="img/blog/product6.jpg"
														alt="feature"
														// width="798"
														// height="420"
													/>
												</div>
											</div> */}
										</div>
									</div>
								</div>
								<div className="single-listing-box1">
									<div className="overview-area">
										<h3 className="item-title">Overview</h3>
										<div className="gallery-icon-box">
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-comment"></i>
												</div>
												<ul className="item-number">
													<li>ID No :</li>
													<li className="deep-clr">98560</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-home"></i>
												</div>
												<ul className="item-number">
													<li>Type :</li>
													<li className="deep-clr">
														{props.property.propertyType}
													</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-bed"></i>
												</div>
												<ul className="item-number">
													<li>Bed Room :</li>
													<li className="deep-clr">
														{props.property.bedrooms}
													</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-shower"></i>
												</div>
												<ul className="item-number">
													<li>ID No :</li>
													<li className="deep-clr">98560</li>
												</ul>
											</div>
										</div>
										<div className="gallery-icon-box">
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-home"></i>
												</div>
												<ul className="item-number">
													<li>Parking :</li>
													<li className="deep-clr">Yes</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-home"></i>
												</div>
												<ul className="item-number">
													<li>Area :</li>
													<li className="deep-clr">
														{props.property.area} sqft
													</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-pencil"></i>
												</div>
												<ul className="item-number">
													<li>Land Size :</li>
													<li className="deep-clr">15,000 sqft</li>
												</ul>
											</div>
											<div className="item-icon-box">
												<div className="item-icon">
													<i className="flaticon-two-overlapping-square"></i>
												</div>
												<ul className="item-number">
													<li>Year Build :</li>
													<li className="deep-clr">2022</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="overview-area listing-area">
										<h3 className="item-title">About This Listing</h3>
										<p>
											{props.property.description}
											{/* Praesent eros turpis, commodo vel justo at, pulvinar
											mollis eros. Mauris aliquet eu quam id ornareor bi ac quam
											enim. Cras vitae nulla condimentum, semper dolor non,
											faucibus dolor. Vivamus adip iscing eros quis orci
											fringilla, sed pretium lectus viverra. Pellentesque
											habitant morbi tristique senectus et netus et malesuada
											fames ac turpis egestas. */}
										</p>
										<p>
											Praesent eros turpis, commodo vel justo at, pulvinar
											mollis eros. Mauris aliquet eu quam id ornareor bi ac quam
											enim. Cras vitae nulla condimentum, semper dolor non,
											faucibus dolor. Vivamus adip iscing eros quis orci
											fringilla, sed pretium lectus viverra.
										</p>
									</div>
									<div className="overview-area single-details-box table-responsive">
										<h3 className="item-title">Details</h3>
										<table className="table-box1">
											<tbody>
												<tr>
													<td className="item-bold">Id No</td>
													<td>98560</td>
													<td className="item-bold">Price</td>
													<td>$12,500</td>
												</tr>
												<tr>
													<td className="item-bold">Property Type</td>
													<td>Apartment</td>
													<td className="item-bold">Parking</td>
													<td>Yes</td>
												</tr>
												<tr>
													<td className="item-bold">Rooms</td>
													<td>04</td>
													<td className="item-bold">Property Status</td>
													<td>For Rent</td>
												</tr>
												<tr>
													<td className="item-bold">Bath Rooms</td>
													<td>03</td>
													<td className="item-bold">Land Area</td>
													<td>15,000 sqft</td>
												</tr>
												<tr>
													<td className="item-bold">Size</td>
													<td>1050 sqft</td>
													<td className="item-bold">Year Build</td>
													<td>2022</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="overview-area ameniting-box">
										<h3 className="item-title">Features & Amenities</h3>
										<div className="row">
											<div className="col-lg-4">
												<ul className="ameniting-list">
													<li>
														<i className="fas fa-check-circle"></i>TV Cable
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Air Conditioning
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Barbeque
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Gym
													</li>
												</ul>
											</div>
											<div className="col-lg-4">
												<ul className="ameniting-list">
													<li>
														<i className="fas fa-check-circle"></i>Swimming Pool
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Laundry
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Microwave
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Lawn
													</li>
												</ul>
											</div>
											<div className="col-lg-4">
												<ul className="ameniting-list">
													<li>
														<i className="fas fa-check-circle"></i>Sauna
													</li>
													<li>
														<i className="fas fa-check-circle"></i>Window Coverings
													</li>
													<li>
														<i className="fas fa-check-circle"></i>CC Camera
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="overview-area map-box">
										<h3 className="item-title">Map Location</h3>
										<div className="item-map">
											<iframe
												src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14604.942936504207!2d90.42287424999999!3d23.774618500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1640231732625!5m2!1sen!2sbd"
												width="100%"
												height="349"
												style={{ border: "0" }}
												allowFullScreen={false}
												loading="lazy"
											></iframe>
										</div>
									</div>
									<div className="overview-area floor-plan-box">
										<h3 className="item-title">Floor Plans</h3>
										<div id="accordion" className="accordion">
											<div className="card">
												<div className="card-header">
													<div
														className="heading-title"
														data-bs-toggle="collapse"
														data-bs-target="#collapseOne"
														aria-expanded="true"
														role="button"
													>
														<span>First Floor Plan</span>
														<div className="card-list">
															<ul>
																<li>
																	<i className="flaticon-bed"></i>
																	<span>Beds: 03</span>
																</li>
																<li>
																	<i className="flaticon-shower"></i>
																	<span>Baths: 02</span>
																</li>
																<li>
																	<i className="flaticon-two-overlapping-square"></i>
																	<span>931Sqft</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div
													id="collapseOne"
													className="collapse show"
													data-bs-parent="#accordion"
												>
													<div className="card-body">
														<div className="item-img">
															<Image src={floor_plan00.src} alt="shape" width={floor_plan00.width} height={floor_plan00.height} />
														</div>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header">
													<div
														className="heading-title collapsed"
														data-bs-toggle="collapse"
														data-bs-target="#headingtwo"
														aria-expanded="true"
														role="button"
													>
														<span>Second Floor Plan</span>
														<div className="card-list">
															<ul>
																<li>
																	<i className="flaticon-bed"></i>
																	<span>Beds: 03</span>
																</li>
																<li>
																	<i className="flaticon-shower"></i>
																	<span>Baths: 02</span>
																</li>
																<li>
																	<i className="flaticon-two-overlapping-square"></i>
																	<span>931Sqft</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div
													id="headingtwo"
													className="collapse"
													data-bs-parent="#accordion"
												>
													<div className="card-body">
														<div className="item-img">
															{/* <img
																src="img/figure/floor_plan.jpg"
																alt="shape"
															/> */}
														</div>
													</div>
												</div>
											</div>
											<div className="card">
												<div className="card-header">
													<div
														className="heading-title collapsed"
														data-bs-toggle="collapse"
														data-bs-target="#headingthree"
														aria-expanded="true"
														role="button"
													>
														<span>Third Floor Plan</span>
														<div className="card-list">
															<ul>
																<li>
																	<i className="flaticon-bed"></i>
																	<span>Beds: 03</span>
																</li>
																<li>
																	<i className="flaticon-shower"></i>
																	<span>Baths: 02</span>
																</li>
																<li>
																	<i className="flaticon-two-overlapping-square"></i>
																	<span>931Sqft</span>
																</li>
															</ul>
														</div>
													</div>
												</div>
												<div
													id="headingthree"
													className="collapse"
													data-bs-parent="#accordion"
												>
													<div className="card-body">
														<div className="item-img">
															{/* <img
																src="img/figure/floor_plan.jpg"
																alt="shape"
															/> */}
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
									<div className="overview-area video-box1 mb-4">
										<h3 className="item-title">Property Video</h3>
										<div className="item-img">
											<Image
												src={listing01.src} alt="map" width="731" height="349"
											/>
											<div className="play-button">
												<div className="item-icon">
													<a
														href="http://www.youtube.com/watch?v=1iIZeIy7TqM"
														className="play-btn play-btn-big"
													>
														<span className="play-icon style-2">
															<i className="fas fa-play"></i>
														</span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-4 widget-break-lg sidebar-widget">
								<div className="widget widget-contact-box">
									<h3 className="widget-subtitle">Place a Bid</h3>
									<form className="contact-box rt-contact-form">
										<div className="row">
											<div className="form-group col-lg-12">
												<div className="advanced-button">
													<Link href={token ? `/buyer/bid/${props.property._id}` : `/sign-in?redirect_to=buyer/bid/${props.property._id}`}>
														<a className="item-btn" > Place a Bid </a>
													</Link>
												</div>
											</div>
										</div>
										<div className="form-response"></div>
									</form>
								</div>
								<div className="widget widget-listing-box1">
									<h3 className="widget-subtitle">Latest Listing</h3>
									<div className="item-img">
										<Link href={'/property/'+props.properties[0]?._id} passHref>
											<a>
												<Image
													src={props.properties[0]?.images[0]}
													width={'540px'}
													height={'360px'}
													alt="widget"
												/>
											</a>
										</Link>
										<div className="item-category-box1">
											<div className="item-category">For Rent</div>
										</div>
									</div>
									<div className="widget-content">
										<div className="item-category10">
											<a
											// href="single-listing2.html"
											>
												Villa
											</a>
										</div>
										<h4 className="item-title">
											<a
											// href="single-listing2.html"
											>
												{props.properties[0]?.propertyTitle}{" "}
											</a>
										</h4>
										<div className="location-area">
											<i className="flaticon-maps-and-flags"></i>
											{/* {Object.values(dataPro[0]?.location).join(",")} */}

											{/* 2150 S Jones Blvd,
											USA */}
										</div>
										<div className="item-price">
											AED {props.properties[0]?.priceDemand}
											{/* $11,000<span>/mo</span> */}
										</div>
									</div>
								</div>
								<div className="widget widget-post">
									<div className="item-img">
										<Image src={widget05.src} layout="intrinsic" width={'690'} height={'850'} alt="widget" />
										<div className="circle-shape">
											<span className="item-shape"></span>
										</div>
									</div>
									<div className="item-content">
										<h4 className="item-title">Find Your Dream House</h4>
										<div className="item-price">$2,999</div>
										<div className="post-button">
											<a
												// href="single-listing2.html"
												className="item-btn"
											>
												Shop Now
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
}

export default Index