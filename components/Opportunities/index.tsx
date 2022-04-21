import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const index = ({ opportunities }: any) => {
    return (
        <div className="listing-cont grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                opportunities?.length > 0 && (
                    opportunities.map((property: any, index: any)=> {
                        return (
                            <Link href={'/'} key={index}>
                                <a className="relative rounded-lg overflow-hidden" style={{height: '16rem'}}>
                                    <Image src={property.images[0]} layout="fill" className="object-cover" alt={property.propertyTitle} />
                                    <div className="absolute bottom-0 top-0 w-full" style={{background: "linear-gradient(0deg, rgba(0, 0, 0,0.8), rgba(255, 255, 255, 0.2), transparent)"}}>
                                        <div className='h-full flex flex-col justify-end px-5 py-3'>
                                            <div className="flex flex-wrap justify-between w-full border-b-2 border-solid border-white pb-2">
                                                <div style={{flex: 3}}>
                                                    <h3 className="text-white text-lg font-semibold pb-1 pr-2">{property.propertyTitle}</h3>
                                                    <p className="text-white text-xs">{property.location.address}, {property.location.city} {property.location.zip}</p>
                                                </div>
                                                <span className='text-white font-medium text-sm flex-1'>ADE {property.priceDemand}</span>
                                            </div>
                                            
                                            <div className="grid grid-cols-4 text-gray-300 text-xs w-full mt-2">
                                                <span>{property.area} sq.ft</span>
                                                <span>{property.bedrooms} bed</span>
                                                <span>{property.bathrooms} bath</span>
                                                {/* <span>3 hours left</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        )
                    })
                )
            }
        </div>
    )
}

export default index