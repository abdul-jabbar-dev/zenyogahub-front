
import React from 'react'
import bg from '@/assets/gettingStartedBg.jpg'
import Link from 'next/link'
export default function MemberBanner() {
    return (
        <div className="container relative mx-auto py-24 bg-contain bg-no-repeat bg-center flex justify-center" style={{ backgroundImage: `url(${bg.src})` }} >
            <div className="text-center" >
                <h2 className="text-4xl font-bold p-0">Ready to Begin Your Yoga Journey?</h2>
                <p className="text-lg my-4 w-2/3 mx-auto">Embark on a path of well-being with our expert-led online yoga classes and curated collection of premium yoga tools</p>
                <Link href="start"> <button className="bg-orange-600 p-2 px-4 text-xl uppercase rounded-3xl text-white"  >Get Started</button></Link>
            </div>
        </div>
    )
}
