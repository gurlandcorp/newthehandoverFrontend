import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Blog4 from "../public/assets/img/blog/now.jpg";
import { Base_URL } from '../config/constants';
import { useRouter } from 'next/router';
import BackgroundImage from "/public/img/breadcrumd.svg"
import Image from 'next/image';
import Opportunities from "../components/Opportunities"

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
		"Constructed",
		"Non Constructed",
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

    const router = useRouter()

	const changeOrder = async (e: any) => {
		if(e.target.value!='')
		{
			let res = await fetch(`${Base_URL}/api/property/${e.target.value}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				}
			})
			.then(response => response.json())
			setOpportunities(res.data)
		}
	}

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
		setOpportunities(data)
		
	},[query, data])

    return (
        <>
			{/* Start of page heading  */}
			{/* <div className="" style={{ backgroundImage: `linear-gradient(178deg, #00000059, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 1), white), url(${BackgroundImage.src})`, backgroundRepeat: 'no-repeat' }}>
				<div className="font-semibold py-32 text-3xl text-center">
					<h3 className="uppercase theme-color text-4xl">Opportunities</h3>
				</div>
			</div> */}
			<div className="" style={{ backgroundImage: `linear-gradient(178deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${BackgroundImage.src})`, backgroundRepeat: 'no-repeat' }}>
				<div className="font-semibold py-32 text-3xl text-center">
					<h3 className="uppercase text-white font-semibold text-4xl">Opportunities</h3>
				</div>
			</div>

			<div className="width py-10 mx-auto">
				<div className="flex flex-wrap">
					{/* Left Side Advance Search */}
					{/* <div className="sidebar w-full lg:w-1/3">
						<div className="adv-search p-5 shadow-xl rounded">
							<h2 className="text-center font-medium text-xl mb-5">Advanced Search</h2>
							<form onSubmit={(e) => searchSubmit(e)}>
								<input type="text" className="w-full border border-solid rounded p-2 mb-4" placeholder="What are you looking for ?" />
								<div className="grid grid-cols-2 gap-5">
									<input type="text" className="w-full border border-solid rounded p-2 mb-4" placeholder="Rooms" />
									<input type="text" className="w-full border border-solid rounded p-2 mb-4" placeholder="Bathrooms" />
								</div>
								<select name="" id="" className="w-full border border-solid rounded p-2 mb-4" onChange={(e) => setType(e.target.value)}>
									<option value="">Property Type</option>
									{
										propertyType.map((type: any, index: any) => {
											return <option key={index} value={type}>{type}</option>
										})
									}
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
									<button type="submit" className="bg-black text-white py-2 px-5 rounded-3xl shadow hover:bg-white hover:text-black transition-all duration-300"><span className="mdi mdi-magnify" /> Search </button>
								</div>
							</form>
						</div>
					</div> */}

					{/* Opportunities List */}
					<div className="content-area w-full">
						<div className="pt-3 ml-0 lg:ml-5 mt-5 lg:mt-0">
							<div className="listing-filters w-full mb-5">
								<h3 className="listing-title text-3xl theme-color font-semibold">All Listings</h3>
							</div>
							<div className='py-5'>
								<select name="" id="" className="p-2 px-4 text-sm rounded-full border border-solid" onChange={(e)=>changeOrder(e)}>
									<option value="">Sort by</option>
									<option value="desc">Desc</option>
									<option value="asc">Asc</option>
								</select>
							</div>
							<Opportunities opportunities={opportunities} />
						</div>
					</div>
				</div>
			</div>
        </>
    )
}

export default Properties

export async function getServerSideProps(context: any) {
    // Fetch data from external API
	let res: any;
	let data = []
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
				"Content-Type": "application/json"
			}
		}).then(response => response.json())
		if(res.data!=undefined)
		{
			data = res.data
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