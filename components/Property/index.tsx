import React from 'react'
import widget05 from "../../public/assets/img/blog/widget05.jpg"
import floor_plan00 from "../../public/assets/img/figure/floor_plan00.jpg"
import listing01 from "../../public/assets/img/blog/listing01.jpg"
import Image from 'next/image'
import { parseCookies } from 'nookies'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Link from 'next/link'

const Index = (props: any) => {

	const { token } = parseCookies()

	let currentDate: any = new Date()
	let propertyEndTime: any = new Date(props.property.biddingEnd.split('T')[0])
	currentDate = currentDate.getTime()
	propertyEndTime = propertyEndTime.getTime()
	let difference = propertyEndTime - currentDate
	let Difference_In_Days = difference / (1000 * 3600 * 24)
	let Difference_In_Hours = (difference % (1000 * 3600 * 24)) / (1000 * 60 * 60)

	return (
		<>
			<div className="bg-gray-50 p-3">
				<div className="text-sm">
					<a href="/" className="mr-1">Home</a>&gt;
					<a href="/opportunities" className="mx-1">Opportunities</a> &gt;
					<span className="text-gray-600 mx-1">{props.property.propertyTitle}</span>
				</div>
			</div>

			<div className="width py-10 mx-auto">
				<h2 className="text-2xl my-2">{props.property.propertyTitle}</h2>
				<div className="flex flex-wrap justify-between items-center">
					<div>
						<div className="price text-blue-700 font-medium">AED {props.property.priceDemand}</div>
						<div className="text-gray-500 text-sm">Remaining time: { Difference_In_Hours < 0 && Difference_In_Days < 0 ? (
								<span className="text-red-500 text-sm italic font-medium">Expired</span>
							) : (
								<span className="text-black">{ Difference_In_Days.toFixed(0)} days {Difference_In_Hours.toFixed(0)} hours left</span>
							)
						} </div>
					</div>
					<div className="grid grid-cols-2 gap-1">
						<div className="p-1 text-white rounded" style={{ width: 'max-content', background: '#006CA1' }}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
							</svg>
						</div>
						<div className="p-1 text-white rounded" style={{ width: 'max-content', background: '#006CA1' }}>
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
							</svg>
						</div>
						{/* <div class="p-1 text-white rounded" style="width: max-content;background:#006CA1;">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
						</svg>
					</div> */}
					</div>
				</div>
				<div className="">
					<div className="flex flex-wrap my-4">
						<div className="my-4 bg-gray-50 p-4 rounded w-full md:w-9/12">
							<div className="relative" style={{ width: "100%", height: "700px" }}>
								{
									props.property != undefined && props.property != '' && props.property.images != undefined ?
										(
											<Image
												src={props.property.images[0]}
												alt={props.property.propertyTitle}
												layout="fill"
												className="object-cover rounded"
											/>
										) : (
											''
										)
								}
							</div>
							<Swiper
								loop={false}
								slidesPerView={4}
								spaceBetween={10}
								freeMode={true}
								watchSlidesProgress={true}
								modules={[Pagination]}
								className="mySwiper mt-4">
								{
									props.property.images.map((image: any, index: any) => {
										return (
											<SwiperSlide key={index}>
												<div className="bg-blue-100 flex items-center p-2 rounded" style={{ width: "max-content" }}>
													<div className="relative" style={{ width: "100px", height: "100px" }}>
														<Image
															src={image}
															alt={props.property.propertyTitle}
															layout="fill"
															className="object-cover rounded"
														/>
													</div>
												</div>
											</SwiperSlide>
										)
									})
								}
							</Swiper>
						</div>
						<div className="text-center w-full mb-4 md:mb-0 md:p-4 md:w-3/12 relative">
							{
								Difference_In_Hours < 0 && Difference_In_Days < 0 ? (
									<div className="bg-red-100 bg-opacity-50 rounded-full p-4 sticky top-24">
										<span className="text-red-500 capitalize">Bid ended</span>
									</div>
								) : (
									<div className="bg-gray-50 rounded p-4 sticky top-24">
										<Link href={'/buyer/bid/'+props.property._id}>
											<a className="inline-block bg-white border border-black border-solid duration-300 ease-in-out hover:bg-black hover:text-white m-1 px-4 py-1 rounded-3xl text-black">Appy for Bid</a>
										</Link>
									</div>
								)
							}
						</div>
					</div>
					<div className="bg-white p-4 shadow-box rounded w-full">
						<h4 className="text-xl theme-color my-2">Overview</h4>
						<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
							<div className="flex flex-wrap bg-blue-100 rounded p-2">
								<div className="px-1 w-max rounded flex items-center mr-2 bg-white">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#006CA1" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
									</svg>
								</div>
								<div>
									<h4 className="text-xs">Type</h4>
									<p className="text-sm theme-color font-medium">{props.property.propertyType}</p>
								</div>
							</div>
							<div className="flex flex-wrap bg-blue-100 rounded p-2">
								<div className="px-1 w-max rounded flex items-center mr-2 bg-white">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#006CA1" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
									</svg>
								</div>
								<div>
									<h4 className="text-xs">Area</h4>
									<p className="text-sm theme-color font-medium">{props.property.area} ft</p>
								</div>
							</div>
							<div className="flex flex-wrap bg-blue-100 rounded p-2">
								<div className="px-1 w-max rounded flex items-center mr-2 bg-white">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="#006CA1">
										<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
									</svg>
								</div>
								<div>
									<h4 className="text-xs">Bed rooms</h4>
									<p className="text-sm theme-color font-medium">{props.property.bedrooms}</p>
								</div>
							</div>
							<div className="flex flex-wrap bg-blue-100 rounded p-2">
								<div className="px-1 w-max rounded flex items-center mr-2 bg-white">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#006CA1" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
									</svg>
								</div>
								<div>
									<h4 className="text-xs">Bath rooms</h4>
									<p className="text-sm theme-color font-medium">{props.property.bathrooms}</p>
								</div>
							</div>
						</div>

						<h4 className="text-xl theme-color my-2">Description</h4>
						<p className="p-2 bg-gray-50 rounded">{props.property.description}</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index