import React from 'react'
import Image from 'next/image'
import { parseCookies } from 'nookies'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Link from 'next/link'
import { WhiteButton, SlimButton } from '../Shares/Buttons'
import { currency_symbol } from '../../config/constants'
import TownerImage from "/public/img/property-icons/tower-block.png"
import SqFtImage from "/public/img/property-icons/select_1.png"
import BedImage from "/public/img/property-icons/bed_1.png"
import LocationImage from "/public/img/property-icons/maps-and-flags.png"

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
					<Link href={'/'}>
						<a className="mr-1">Home</a>
					</Link>&gt;
					<Link href="/opportunities">
						<a className="mx-1">Opportunities</a>
					</Link>&gt;
					<span className="text-gray-600 mx-1">{props.property.propertyTitle}</span>
				</div>
			</div>

			<div className="width py-10 mx-auto">
				
				<div className="grid grid-cols-2 gap-4">
					<div className='relative rounded-lg overflow-hidden' style={{width:'100%',height:'300px'}}>
						<Image src={props.property.images[0]} layout="fill" alt={props.property.propertyTitle} className="object-cover" />
					</div>
					<div>
						<div className="grid grid-cols-2 gap-4 h-full">
							{
								props.property.images.map((image: any, index: any) => {
									return (
										<div className='relative rounded-lg overflow-hidden' style={{width:'100%',height:"100%"}} key={index}>
											<Image src={image} layout="fill" alt={props.property.propertyTitle} className="object-cover" />
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
				<div className='grid grid-cols-6 mt-5 gap-4'>
					<div className='col-span-4'>
						<h2 className="text-3xl my-2 theme-color capitalize font-bold">{props.property.propertyTitle}</h2>
						<div>
							<p className="font-semibold text-gray-500 border-b-2 border-solid border-gray-500 w-max">{props.property.location.address}, {props.property.location.city}, {props.property.location.zip} </p>
						</div>
						<div className="quick-summary">
							<h4 className='theme-color text-lg font-semibold my-5'>Quick Summary</h4>
						</div>

						<div className='grid grid-cols-5 gap-4'>
							<div className='flex flex-wrap items-center'>
								<Image src={TownerImage} width={40} height={40} layout="intrinsic" alt='type' />
								<div>
									<p className='text-xs font-semibold'>{props.property.propertyType}</p>
									<p className='text-xs'>Type</p>
								</div>
							</div>
							<div className='flex flex-wrap items-center'>
								<Image src={SqFtImage} width={30} height={30} layout="intrinsic" alt='sqft' />
								<div className='ml-1'>
									<p className='text-sm font-semibold'>{props.property.area}</p>
									<p className='text-xs'>sq.ft</p>
								</div>
							</div>
							<div className='flex flex-wrap items-center'>
								<Image src={BedImage} width={40} height={40} layout="intrinsic" alt='bedrooms' />
								<div className='ml-1'>
									<p className='text-sm font-semibold'>{props.property.bedrooms}</p>
									<p className='text-xs'>bedrooms</p>
								</div>
							</div>
							<div className='flex flex-wrap items-center'>
								{/* <Image src={LocationImage} width={30} height={30} layout="intrinsic" /> */}
								<svg xmlns="http://www.w3.org/2000/svg" className="theme-color w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
									<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
								</svg>
								<div className='ml-1'>
									<p className='text-sm font-semibold'>{props.property.floors}</p>
									<p className='text-xs'>Floor</p>
								</div>
							</div>
							<div className='flex flex-wrap items-center'>
								<Image src={BedImage} width={40} height={40} layout="intrinsic" alt='bathrooms' />
								<div className='ml-1'>
									<p className='text-sm font-semibold'>{props.property.bathrooms}</p>
									<p className='text-xs'>bathrooms</p>
								</div>
							</div>
						</div>
						<div className='my-5 text-sm'>
							{props.property.description}
						</div>
						<div className='bg-white shadow-box rounded-lg'>
							<h3 className='font-semibold theme-color p-4 border-b-2 border-solid w-max mb-4'>Key Selling Features</h3>
							<ul className="list-disc block ml-10 pb-5">
								<li className="text-xs">Abundance of sqaure feet</li>
								<li className="text-xs">180°of unobstructed waterviews</li>
								<li className="text-xs">Ceiling heights of 2.9m</li>
								<li className="text-xs">Elevated finishes – Emulating</li>
								<li className="text-xs">Marina Gate</li>
								<li className="text-xs">Premium lifestyle facilties</li>
							</ul>
						</div>

						<div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
							<div className='bg-white shadow-box rounded-lg my-5'>
								<div className='grid grid-cols-2'>
									<h3 className='font-semibold theme-color p-4 border-b-2 border-solid w-max mb-4'>Apartment Type</h3>
									<h3 className='font-semibold theme-color p-4 mb-4'>Range</h3>
								</div>
								<div className="p-4 pt-0">
									<div className="text-xs grid grid-cols-2">
										<span>Studio</span>
										<span className='font-semibold'>513 – 543 ft2</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>One Bedroom</span>
										<span className='font-semibold'>702 – 1,438 ft2</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>Two Bedroom</span>
										<span className='font-semibold'>1,161 –1,864 ft2</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>Three Bedroom</span>
										<span className='font-semibold'>1,168 –1,815 ft2</span>
									</div>
								</div>
							</div>
							<div className='bg-white shadow-box rounded-lg my-5'>
								<div className='grid grid-cols-2'>
									<h3 className='font-semibold theme-color p-4 border-b-2 border-solid mb-4'>Tower apartments starting rates:</h3>
								</div>
								<div className="p-4 pt-0">
									<div className="text-xs grid grid-cols-2">
										<span>Studio apartment:</span>
										<span className='font-semibold'>AED 886 500</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>One bedroom apartment:</span>
										<span className='font-semibold'>AED 1,218 500</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>Two bedroom apartment:</span>
										<span className='font-semibold'>AED 2,045 000</span>
									</div>
									<div className="text-xs grid grid-cols-2">
										<span>Three bedroom apartment:</span>
										<span className='font-semibold'>AED 3,515 000</span>
									</div>
								</div>
							</div>
						</div>
					</div>


					<div className='col-span-2'>
						<div className='py-2 px-4 shadow-box rounded-lg sticky top-24'>
							<div className='flex flex-wrap justify-between border-b-2 border-solid border-gray-200 pb-3'>
								<div className="prices">
									<span className='text-xs theme-color font-medium'>Total price</span>
									<p className="text-lg font-semibold theme-color">{currency_symbol} {props.property.priceDemand}</p>
								</div>
								<div className='buy-btn'>
									<SlimButton href={'/'}>Buy</SlimButton>
								</div>
							</div>
							<div>
								<div className='text-center pb-5'>
									{ Difference_In_Hours < 0 && Difference_In_Days < 0 ? (
											<span className="text-white bg-red-500 font-semibold py-2 w-full inline-block mt-4 rounded-full">Expired</span>
										) : (
											<SlimButton href={'/buyer/bid/'+props.property._id} className="py-2 w-full">Place a Bid</SlimButton>
										)
									}
									<p className='text-sm pt-1 font-medium' style={{fontSize: '10px'}}>It&apos;s free, with no obligation — cancel anytime</p>
								</div>
								<div className='text-right flex flex-wrap justify-between items-center'>
									<span className="text-black font-medium" style={{fontSize:'10px'}}>{ Difference_In_Hours >= 0 || Difference_In_Days >= 0 ? Difference_In_Days.toFixed(0)+ ' days ' + Difference_In_Hours.toFixed(0) + ' hours left' : ''}</span>
									<WhiteButton> Add to shortlist </WhiteButton>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Index