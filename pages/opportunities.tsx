import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Blog4 from "../public/assets/img/blog/now.jpg";
import { Base_URL } from '../config/constants';
import { useRouter } from 'next/router';
import BackgroundImage from "/public/img/breadcrumd.svg"
import Image from 'next/image';
import Opportunities from "../components/Opportunities"
import FeaturedProperty from '../components/Home/Featured-Products/FeaturedProperty';
import Link from 'next/link';
import styles from "../styles/Opportunities.module.css"
import SqFtImage from "/public/img/property-icons/select.png"
import BedImage from "/public/img/property-icons/bed.png"
import RegreshImage from "/public/img/property-icons/refresh.png"

const Properties: NextPage = ({data, query, highest_res}: any) => {

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
			<div className={`relative overflow-hidden`} style={{height: '20rem'}}>
				<div className='absolute top-10 w-full' style={{zIndex: 1}}>
					<div className='text-3xl font-semibold text-gray-50 flex justify-center'>
						<h1>Auctions</h1>
					</div>
				</div>
				<Image src={data[0].images[0]} layout="fill" className="object-cover" alt={data[0].propertyTitle} />
				<div className={`absolute bottom-0 top-0 w-full`} style={{background: "linear-gradient(0deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3))"}}>
					<div className="width mx-auto h-full">
						<div className="flex flex-wrap justify-between items-end py-16 absolute bottom-0 width">
							<div>
								<h3 className="text-white text-2xl font-semibold pb-4">{data[0].propertyTitle}</h3>
								<p className="text-white text-sm pb-2">{data[0].location.address}, {data[0].location.city} {data[0].location.zip}</p>
								<div className="grid grid-cols-4 text-gray-300 text-xs items-center">
									<span className="flex justify-center"><Image src={SqFtImage} width={15} height={15} alt={'area sq.ft'} /> <span className="ml-1">{data[0].area} sq.ft</span></span>
									<span className="flex justify-center"><Image src={BedImage} width={15} height={15} alt={'area sq.ft'} /> <span className="ml-1">{data[0].bedrooms} bed</span></span>
									<span className="flex justify-center"><Image src={BedImage} width={15} height={15} alt={'area sq.ft'} /> <span className="ml-1">{data[0].bathrooms} bath</span></span>
									<span className="flex justify-center"><Image src={RegreshImage} width={15} height={15} alt={'area sq.ft'} /> <span className="ml-1">3 hours left</span></span>
								</div>
							</div>
							<div>
								<Link href={"/opportunity/" + data[0]._id}>
									<a className="text-black text-sm bg-white font-semibold py-3 px-8 rounded-full block mt-10">View Detail</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="" style={{ backgroundImage: `linear-gradient(178deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${BackgroundImage.src})`, backgroundRepeat: 'no-repeat' }}>
				<div className="font-semibold py-32 text-3xl text-center">
					<h3 className="uppercase text-white font-semibold text-4xl">Opportunities</h3>
				</div>
			</div> */}

			<div className="width py-10 mx-auto">
				<div className="flex flex-wrap">
					{/* Left Side Advance Search */}

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

	// let highest_res: any = await fetch(`${Base_URL}/api/property/highest`, {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	}
	// }).then(response => response.json())

	// console.log(highest_res)

    // Pass data to the page via props
    return { 
        props: { 
            data,
			query: context.query,
        }
    }
}