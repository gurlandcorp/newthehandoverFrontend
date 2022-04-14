import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { fontWeight } from '@mui/system'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomPaper from '../../../components/Shares/Components/CustomPaper'
import { API_LINK } from '../../../config/constants'

const useStyles = makeStyles({
    biddings: {
        "& p" : {
            marginBottom: "10px"
        },
        "& h3": {
            color: "#000000",
            fontWeight: "600",
            fontSize: "20px"
        },
        "& strong" : {
            fontFamily: "Poppins, san-serif",
            color: "#000000",
            fontWeight: "500"
        }
    }
})

const Property = (props:any) => {
    
    let currentDate: any = new Date()
    let propertyEndTime: any = new Date(props.property.biddingEnd.split('T')[0])
    currentDate = currentDate.getTime()
    propertyEndTime = propertyEndTime.getTime()
    let difference = propertyEndTime - currentDate
    let Difference_In_Days = difference / (1000 * 3600 * 24)
    let Difference_In_Hours = (difference % (1000 * 3600 * 24)) / (1000 * 60 * 60)

    const classes = useStyles()
    return (
        <>
            <nav className="relative w-full flex flex-wrap items-center justify-between py-2 hover:text-gray-700 rounded" style={{ backgroundColor: '#fbfbfb' }}>
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <div className="bg-grey-light rounded-md w-full" aria-label="breadcrumb">
                        <ol className="list-reset flex text-sm">
                            <li>
                                <Link href={`/seller`}>
                                    <a className="text-black">Dashboard</a>
                                </Link> /&nbsp;
                            </li>
                            <li>
                                <Link href={`/seller/properties`}>
                                    <a><span className="text-black">Properties</span></a>
                                </Link> /&nbsp;
                            </li>
                            <li><span className="text-gray-500">{props.property.propertyTitle}</span></li>
                        </ol>
                    </div>
                </div>
            </nav>
            <div className="py-4">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-8">
                        <div className="bg-white p-4 shadow-lg rounded w-full">
                            <div style={{width: "100%", height: "400px"}} className="overflow-hidden">
                                <div className="position-relative">
                                    <Image src={props.property.images[0]} width={300} height={300} layout="responsive" />
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-between items-center">
                            <h3 className="text-2xl mt-2">{props.property.propertyTitle}</h3> <span className="text-sm text-blue-800 font-medium bg-blue-100 px-1 rounded h-auto">AED {props.property.priceDemand}</span>
                            </div>
                            <h4 className="text-lg theme-color my-2">Overview</h4>
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
                                        <h4 className="text-xs">Floors</h4>
                                        <p className="text-sm theme-color font-medium">{props.property.floors}</p>
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

                            <h4 className="text-lg theme-color my-2">Description</h4>
                            <p className="p-2 bg-gray-50 rounded">{props.property.description}</p>
                        </div>
                    </div>
                    <div className="col-span-4 px-5">
                        <div className="shadow-lg px-4 py-2 rounded sticky top-24">
                            <p className="text-sm font-medium">Bidding Start <span className="text-blue-500 mx-2">{props.property.biddingStart.split('T')[0]}</span></p>
                            <p className="text-sm font-medium">Bidding End <span className="text-red-500 mx-2">{props.property.biddingEnd.split('T')[0]}</span></p>
                            {
                                (Difference_In_Days > 0 || Difference_In_Hours > 0) ? (
                                    <p className="text-sm font-medium">Duration <span className="text-blue-500">{Difference_In_Days.toFixed(0)} days {Difference_In_Hours.toFixed(0)} hours left </span></p>
                                ) : (
                                    <p className="text-sm bg-red-100 text-red-500 px-2 rounded" style={{width:"max-content"}}>Expired</p>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="shadow-lg rounded">
                <div className={`p-4 ${classes.biddings}`}>
                    <h4 className="text-lg font-medium">Buyer Biddings</h4>
                    {
                        props.bidding.map((bid:any, index: any) => {
                            return <div key={index} className="mb-3 bg-gray-50 p-2 rounded-md flex justify-between">
                                <div>
                                    <p><strong>User Name:</strong> {bid.Bidder[0].name}</p>
                                    <p><strong>Email:</strong> {bid.Bidder[0].email}</p>
                                    <p><strong>Status:</strong> {bid.winner===true ? <span className="text-xs bg-blue-500 text-blue-500">Winner</span> : <span className="text-xs bg-red-100 text-red-500 px-2 rounded-md">Not-approved</span> }</p>
                                </div>
                                <div className="flex flex-col">
                                    <p className="bg-blue-100 text-blue-500 font-medium px-2 rounded-md text-center">{'AED '+bid.bidAmount}</p>
                                    <button className="bg-gray-900 text-gray-100 px-2 py-1 rounded-md shadow-lg">Accept Bid</button>
                                </div>
                            </div>
                        })
                    }
                    
                </div>
            </div>
        </>
    )
}

export default Property

export async function getServerSideProps(context: any) {
    // Fetch data from external API
    // const propRes = await fetch(`${process.env.API_URL}/property/${context.query.id}`)
    // const property = await propRes.json()

    const res: any = await axios({
        method: "GET",
        url: `${API_LINK}/bidding/property`,
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${context.req.cookies.token}`
        },
        data: {
            propertyId: context.query.id
        }
    })
    .then(response => {
        return response.data
    }).catch(err => {
        console.log("error in opportunties filter request", err.response);
    });

    let user = JSON.parse(context.req.cookies.user)

    return { 
        props: {
            user: user,
            property: res.property,
            bidding: res.events,
        }
    }
}