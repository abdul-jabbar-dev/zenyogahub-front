import Image from 'next/image'
import React from 'react'
import banner from '@/assets/banner.jpg'
export default function TopBanner() {
    return (
        <div className="container mx-auto relative my-2">
            <div className="absolute inset-1/2 transform -translate-x-1/2 top-1/4 text-center w-3/5" >
                <h2 className="text-6xl font-semibold" >
                    Premium self-care done your way
                </h2>
                <p className="text-xl my-5  ">We all have unique ways of offering ourselves care. This is your space to create a routine catered to your body, mind, and schedule.</p>
                <button className="primaryBTN px-4 py-2 rounded-md text-gray-100 font-semibold">Start free trial</button>
            </div>
            <Image src={banner} alt='d' layout="responsive"></Image>
        </div>
    )
}
