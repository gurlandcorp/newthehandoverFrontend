import React from 'react'
import { Button } from "../Shares/Buttons"
const InvestContent = () => {
    return (
        <div className="bg-gray-50 py-20">
            <div className='width mx-auto'>
                <div className="">
                    <h2 className="theme-color text-lg sm:text-3xl md:text-4xl text-center font-semibold w-4/6 mx-auto">Invest in the most lucrative real estate projects with confidence.</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 py-20'>
                    <div className='flex flex-wrap bg-white p-6 rounded-lg shadow-box'>
                        <div className='w-3/12'></div>
                        <div className='w-9/12'>
                            <h4 className='theme-color font-semibold text-lg'>Market analysis</h4>
                            <p className='pt-4 text-gray-600 text-sm'>Our experts continuously research markets and analyze data to provide you with the most reliable and secure investment locations meeting your precise needs and objectives.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap bg-white p-6 rounded-lg shadow-box'>
                        <div className='w-3/12'></div>
                        <div className='w-9/12'>
                            <h4 className='theme-color font-semibold text-lg'>Investment analysis</h4>
                            <p className='pt-4 text-gray-600 text-sm'>Review our latest reports, see estimates of return based on your financial investments, take a virtual tour of the property, and much more to make an informed decision.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap bg-white p-6 rounded-lg shadow-box'>
                        <div className='w-3/12'></div>
                        <div className='w-9/12'>
                            <h4 className='theme-color font-semibold text-lg'>Hand-picked neighborhoods</h4>
                            <p className='pt-4 text-gray-600 text-sm'>We invest in time and efforts to hand-pick the hottest neighborhoods and provide you with complete details with cross-comparisons to help you choose the best.</p>
                        </div>
                    </div>
                    <div className='flex flex-wrap bg-white p-6 rounded-lg shadow-box'>
                        <div className='w-3/12'></div>
                        <div className='w-9/12'>
                            <h4 className='theme-color font-semibold text-lg'>Long-term Customer support</h4>
                            <p className='pt-4 text-gray-600 text-sm'>From the selection to listings, purchase, and postpurchase, we are with you every step of the way. We provide long-term customer support to help you invest with confidence.</p>
                        </div>
                    </div>
                </div>
                <div className='text-center'>
                    <Button>Bid Now</Button>
                </div>
            </div>
        </div>
    )
}

export default InvestContent