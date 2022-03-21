import { NextPage } from 'next'
import React, { useContext, useEffect, useState } from 'react'
import Blog4 from "../public/assets/img/blog/now.jpg";
import widget05 from "../public/assets/img/blog/widget05.jpg";
import JoiningBanner from '../components/Home/JoiningBanner';
import BreadCrumb from '../components/Shares/BreadCrumb';
import Image from 'next/image';
import PropertyCard from '../components/Shares/PropertyCard';
import PropertyCardForLG12 from '../components/Shares/PropertyCardForLG12';
import Link from 'next/link';
import { Base_URL } from '../config/constants';
import { MainContext } from '../context/MainContext';
import { useRouter } from 'next/router';
import BackgroundImage from "/public/img/image-box-2.jpg"
import axios from 'axios';

const Properties: NextPage = ({data, query}: any) => {

    const [images, setImages] = useState([
		Blog4,
	]);

	const [filter, setFilter] = useState({
		text: '',
		propertyType: '',
		categories: '',
		city: '',
		price: '',
	})
	const [text, setText] = useState('')
	const [rooms, setRooms] = useState('')
	const [bathRooms, setBathRooms] = useState('')
	const [type, setType] = useState('')
	const [city, setCity] = useState('')
	const [category, setCategory] = useState('')
	const[opportunities, setOpportunities] = useState(data);


	const propertyType = [
		"Family House",
		"Apartment",
		"Condo"
	]
	const categories = [
		"Rent",
		"Sell",
		"Buy"
	]
	const cities = [
		"Dubai",
		"Los Angeles",
		"Chicago",
		"Philadelphia"
	]

	const {search, setSearch} = useContext(MainContext)
    const router = useRouter()

	const searchSubmit = async (e: any) => {
        e.preventDefault()

		let filters: any = {
		}
		rooms!='' && (filters.bedrooms = rooms);
		bathRooms!='' && (filters.bathrooms = bathRooms);
		type!='' && (filters.propertyType = type)
		if(text!='' || city!='')
		{
			filters.location = {
				address: text,
				city: city,
			}
		}
		let res = await fetch(`${Base_URL}/api/property/filter`, {
			method: "POST",
			body: JSON.stringify(filters),
			headers: {
				"Content-Type": "application/json"
			}
		})
		.then(response => response.json())
		setOpportunities(res.data)
    }

	useEffect(() => {
		if(query.text!=undefined)
		{
			setText(query.text)
		}

		if(query.propertyType!=undefined)
		{
			setType(query.propertyType)
		}

		if(query.city!=undefined)
		{
			setCity(query.city)
		}

		// let filter: any = {
		// 	propertyType : query.propertyType
		// }
		// let result = axios.get(`https://handoverapi.herokuapp.com/property/filter/others`, filter).then(response => {
        //     return response.data
        // })
        // console.log(result)
	},[query])

    return (
        <>
			{/* Start of Search Bar  */}
			<div className="" style={{ backgroundImage: `linear-gradient(178deg, #00000059, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1), white), url(${BackgroundImage.src})`, backgroundRepeat: 'no-repeat' }}>
				<div className="container-search py-10 mx-auto">
					<div className="search-wrapper p-4">
						<form action="" className="gap-4 grid grid-cols-1 lg:grid-cols-7 sm:grid-cols-2 w-full">
							<input type="text" placeholder="What are you looking for ?" className="p-3 w-full col-span-2" />
							<select name="" id="" className="p-3 w-full col-span-2">
								<option value="">Property Type</option>
							</select>
							<select name="" id="" className="p-3 w-full col-span-2">
								<option value="">All Cities</option>
							</select>
							<div className="flex flex-wrap items-center justify-end text-right w-full">
								<button type="submit" className="px-4 py-2 w-full rounded-xl"><span className="mdi mdi-magnify" /> Search </button>
							</div>
						</form>
					</div>
				</div>
				<div className="font-semibold py-32 text-3xl text-center">
					<h3 className="uppercase theme-color text-4xl">Opportunities</h3>
				</div>
			</div>
			{/* end of search Bar  */}

			<div className="width py-10 mx-auto">
				<div className="flex flex-wrap">
					<div className="sidebar w-full lg:w-1/3">
						<div className="adv-search p-5 shadow-xl rounded">
							<h2 className="text-center font-medium text-xl mb-5">Advanced Search</h2>
							<form onSubmit={(e) => searchSubmit(e)}>
								<input type="text" className="w-full border border-solid rounded p-2 mb-4" placeholder="What are you looking for ?" />
								<div className="grid grid-cols-2 gap-5">
									<input type="text" className="w-full border border-solid rounded p-2 mb-4" placeholder="Rooms" />
									<input type="text" className="w-full border border-solid rounded p-2 mb-4" placeholder="Bathrooms" />
								</div>
								<select name="" id="" className="w-full border border-solid rounded p-2 mb-4">
									<option value="">Property Type</option>
								</select>
								<select name="" id="" className="w-full border border-solid rounded p-2 mb-4">
									<option value="">All Cities</option>
								</select>
								<p className="mb-4">Price Range</p>
								<div className="grid grid-cols-2 gap-5">
									<input type="text" className="w-full border border-solid rounded p-2 mb-4" placeholder="Min" />
									<input type="text" className="w-full border border-solid rounded p-2 mb-4" placeholder="Max" />
								</div>
								<div className="text-center">
									<button type="submit" className="bg-black text-white py-2 px-3 rounded-3xl shadow hover:bg-white hover:text-black transition-all duration-300"><span className="mdi mdi-magnify" /> Search </button>
								</div>
							</form>
						</div>
					</div>
					<div className="content-area w-full lg:w-2/3">
						<div className="pt-3 ml-0 lg:ml-5 mt-5 lg:mt-0">
							<div className="listing-filters w-full mb-5">
								<h3 className="listing-title text-3xl text-blue-900">All Listings</h3>
							</div>
							<div className="listing-cont grid grid-cols-1 md:grid-cols-2 gap-5">
								{
									opportunities?.length > 0 && (
										data.map((property: any, index: any)=> {
											return (
												<div key={index} className="list-item shadow-box rounded-xl overflow-hidden relative" style={{ backgroundImage: `url("${property.images[0]}")`, backgroundSize: 'cover', backgroundPosition: 'center', height: 300 }}>
													<div className="detail-box p-5 bg-black text-white rounded-t-xl absolute bottom-0">
														<div className="box-title w-full">{property.propertyTitle}</div>
														<div className="box-location text-gray-500 text-sm">{property.location.city}</div>
														<ul className="grid grid-cols-4 gap-2 text-sm text-gray-500">
															<li><span className="mdi mdi-vector-square-plus" /> {property.area} sqft</li>
															<li><span className="mdi mdi-bed-king-outline" /> {property.bedrooms} Beds</li>
															<li><span className="mdi mdi-bathtub-outline" /> {property.bathrooms} Baths</li>
															<li><span className="mdi mdi-cached" /> 4 Days ago</li>
														</ul>
														<div className="box-price">AED {property.priceDemand}</div>
													</div>
												</div>
											)
										})
									)
								}
								
								{/* <div className="list-item shadow-box rounded-xl overflow-hidden relative" style={{ backgroundImage: 'url("./image-box-2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: 300 }}>
									<div className="detail-box p-5 bg-black text-white rounded-t-xl absolute bottom-0">
										<div className="box-title w-full">EB Sunrise Bay T2-4-404</div>
										<div className="box-location text-gray-500 text-sm">Dubai</div>
										<ul className="grid grid-cols-4 gap-2 text-sm text-gray-500">
											<li><span className="mdi mdi-vector-square-plus" /> 1100 sqft</li>
											<li><span className="mdi mdi-bed-king-outline" /> 3 Beds</li>
											<li><span className="mdi mdi-bathtub-outline" /> 2 Baths</li>
											<li><span className="mdi mdi-cached" /> 4 Days ago</li>
										</ul>
										<div className="box-price">AED 50000</div>
									</div>
								</div>
								<div className="list-item shadow-box rounded-xl overflow-hidden relative" style={{ backgroundImage: 'url("./image-box-2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: 300 }}>
									<div className="detail-box p-5 bg-black text-white rounded-t-xl absolute bottom-0">
										<div className="box-title w-full">EB Sunrise Bay T2-4-404</div>
										<div className="box-location text-gray-500 text-sm">Dubai</div>
										<ul className="grid grid-cols-4 gap-2 text-sm text-gray-500">
											<li><span className="mdi mdi-vector-square-plus" /> 1100 sqft</li>
											<li><span className="mdi mdi-bed-king-outline" /> 3 Beds</li>
											<li><span className="mdi mdi-bathtub-outline" /> 2 Baths</li>
											<li><span className="mdi mdi-cached" /> 4 Days ago</li>
										</ul>
										<div className="box-price">AED 50000</div>
									</div>
								</div>
								<div className="list-item shadow-box rounded-xl overflow-hidden relative" style={{ backgroundImage: 'url("./image-box-2.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: 300 }}>
									<div className="detail-box p-5 bg-black text-white rounded-t-xl absolute bottom-0">
										<div className="box-title w-full">EB Sunrise Bay T2-4-404</div>
										<div className="box-location text-gray-500 text-sm">Dubai</div>
										<ul className="grid grid-cols-4 gap-2 text-sm text-gray-500">
											<li><span className="mdi mdi-vector-square-plus" /> 1100 sqft</li>
											<li><span className="mdi mdi-bed-king-outline" /> 3 Beds</li>
											<li><span className="mdi mdi-bathtub-outline" /> 2 Baths</li>
											<li><span className="mdi mdi-cached" /> 4 Days ago</li>
										</ul>
										<div className="box-price">AED 50000</div>
									</div>
								</div> */}
							</div>
						</div>
					</div>
				</div>
			</div>

        {/* <BreadCrumb title="All Opportunities" /> */}
			{/* <section className="grid-wrap3">
				<div className="container">
					<div className="row gutters-40">
						<div className="col-lg-4 widget-break-lg sidebar-widget">
							<div className="widget widget-advanced-search">
								<h3 className="widget-subtitle">Advanced Search</h3>
								<form className="map-forms map-form-style-2" onSubmit={(e) => searchSubmit(e)} >
									<input
										type="text"
										className="form-control"
										placeholder="What are you looking for?" 
										value={text}
										onChange={(e)=>setText(e.target.value)}
									/>
									<div className="row">
										<div className="col-lg-6">
											<input
												type="number"
												className="form-control mt-2"
												placeholder="Rooms" 
												value={rooms}
												min={1}
												onChange={(e)=>setRooms(e.target.value)}
											/>
										</div>
										<div className="col-lg-6">
											<input
												type="number"
												className="form-control mt-2"
												placeholder="Bathrooms" 
												value={bathRooms}
												min={1}
												onChange={(e)=>setBathRooms(e.target.value)}
											/>
										</div>
										<div className="col-lg-12 pl-15 mb-0">
											<div className="rld-single-select">
												<select className="select single-select mr-0" onChange={(e) => setType(e.target.value)}>
													<option value="">Property Type</option>
													{
														propertyType.map((val, index) => {
															if(type==val)
															{
																return <option value={val} key={index} selected >{val}</option>
															}
															else
															{
																return <option value={val} key={index} >{val}</option>
															}
														})
													}
												</select>
											</div>
										</div>
										<div className="col-lg-12 pl-15">
											<div className="rld-single-select">
												<select className="select single-select mr-0" onChange={(e) => setCity(e.target.value)}>
													<option value="">All Cities</option>
													{
														cities.map((val, index) => {
															if(city==val)
															{
																return <option value={val} key={index} selected >{val}</option>
															}
															else
															{
																return <option value={val} key={index} >{val}</option>
															}
														})
													}
												</select>
											</div>
										</div>
										<div className="col-lg-12 pl-15">
											<label className='text-black'>Price Range</label>
											<div className='row'>
												<div className="col-lg-6">
													<input type="text" className="form-control" id="customRange1" placeholder='min' />
												</div>
												<div className="col-lg-6">
													<input type="text" className="form-control" id="customRange1" placeholder='max' />
												</div>
											</div>
										</div>
									</div>
									
									<div className="banner-search-wrap banner-search-wrap-2">
										<div className="rld-main-search rld-main-search3">
											<div className="main-search-field-2">
											</div>
											<div className="filter-button">
												<button
													type="submit"
													className="filter-btn1 search-btn"
												>
													Search<i className="fas fa-search"></i>
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
							{
								opportunities?.length>0 && (
									<div className="widget widget-listing-box1">
										<h3 className="widget-subtitle">Latest Listing</h3>
										<div className="item-img">
											<a>
												<Image
													src={opportunities[0]?.images[0]}
													width="630px"
													height={'400px'}
													alt="widget"
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
												<Link href={`/opportunity/${opportunities[0]?._id}`}>
													<a>
														{opportunities[0]?.propertyTitle}
													</a>
												</Link>
											</h4>
											<div className="location-area">
												<i className="flaticon-maps-and-flags"></i>Downey,California
											</div>
											<div className="item-price">
												AED {opportunities[0]?.priceDemand}
											</div>
										</div>
									</div>
								)
							}
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
												<h4 className="item-title">{opportunities?.length} Search Results Found</h4>
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
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="tab-style-1 tab-style-3">
									<div className="tab-content" id="myTabContent">
										<div className="tab-pane fade show active"
											id="mylisting"
											role="tabpanel"
										>
											<div className="row">
												{
													opportunities?.length > 0 && (
														data.slice(0, 10).map((i: any, index: any) => {
															return <PropertyCard img={i} data={i} key={index} />;
														})
													)
												}
											</div>
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
			</section> */}
			{/* <JoiningBanner /> */}
        </>
    )
}

export default Properties

export async function getServerSideProps(context: any) {
    // Fetch data from external API
	let res: any;
	let data = null
	if(context.query.propertyType!=undefined)
	{
		let filter: any = {
			propertyType : context.query.propertyType
		}
		context.query.rooms != undefined && (filter.bedrooms = context.query.rooms);
		context.query.bathrooms != undefined && (filter.bathrooms = context.query.bathrooms);
		
		res = await fetch(`${Base_URL}/api/property/filter`, {
			method: "POST",
			body: JSON.stringify(filter),
			headers: {
				"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWFlNDQ4ODk5YzZlNTM3MTQwMTY0N2QiLCJlbWFpbCI6InNhbWluYTkxQG1haWxpbmF0b3IuY29tIiwibmFtZSI6IlNhbWluYSIsImltYWdlVXJsIjoiIiwiaWF0IjoxNjM5NTg3MjcwLCJleHAiOjE2NzExMjMyNzB9.hHACfbXBwPBkrQSCZdHCqVTHuF-BcE-mHfUlgzf19vU",
				"Content-Type": "application/json"
			}
		})
		if(res.status==200)
		{
			res = res.json()
			data = res.data==undefined ? [] : res.data
		}
	}
	else
	{
    	res = await fetch(`${process.env.API_URL}/property/sort/desc`);
		if(res.status==200)
		{
			res = await res.json()
			data = res
		}
	}
    // Pass data to the page via props
    return { 
        props: { 
            data,
			query: context.query
        }
    }
}