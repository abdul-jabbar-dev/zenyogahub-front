import React from 'react'
import fbIcon from '../../../assets/icons/facebook.svg'
import twIcon from '../../../assets/icons/twitter.svg'
import youtubeIcon from '../../../assets/icons/youtube.svg'
import Logo from '../../../assets/logo/lotus.png'
import Image from 'next/image'


export default function Footer({ children }) {
    return (
        <>
            {children}
            <div className='bg-slate-100'>

                <div className="container mx-auto grid grid-cols-5  py-10" >

                    <div className="mx-auto">
                        <div className="w-max  uppercase">
                            <h3 className="my-4 ">ShortCut</h3>
                            <ol>
                                <li className="mt-2 text-xs ">home</li>
                                <li className="mt-2 text-xs ">about</li>
                                <li className="mt-2 text-xs ">contact</li>
                                <li className="mt-2 text-xs ">Visit</li>
                            </ol>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <div className="w-max  uppercase">
                            <h3 className="my-4 ">Services</h3>
                            <ol>
                                <li className="mt-2 text-xs ">Yoga</li>
                                <li className="mt-2 text-xs ">Meditation</li>
                                <li className="mt-2 text-xs ">Fetness</li>
                                <li className="mt-2 text-xs ">THERAPY</li>
                                <li className="mt-2 text-xs ">Consultation</li>
                            </ol>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <div className="w-max  uppercase">
                            <h3 className="my-4 ">Mart service</h3>
                            <ol>
                                <li className="mt-2 text-xs ">Goto YogaMart</li>
                                <li className="mt-2 text-xs ">Mats</li>
                                <li className="mt-2 text-xs ">Supplement</li>
                                <li className="mt-2 text-xs ">Apparel</li>
                            </ol>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="w-max  uppercase">
                            <h3 className="my-4 ">Others</h3>
                            <ol>
                                <li className="mt-2 text-xs ">Blogs</li>
                                <li className="mt-2 text-xs ">Lifestyle</li>
                            </ol>
                        </div>
                    </div>
                    <div className=' flex flex-col  '>
                        <div className="mx-auto">
                            <Image className="mx-auto" width="94" height="94" alt="social media icon" src={Logo.src} />
                            <h1 className="text-center text-gray-700 font-semibold">Zenyoga Hub</h1>
                            <div className="text-sm  text-gray-500">Experience yoga excellence at our online school. Shop top-quality gear at YogaMart. Your holistic journey starts here.</div>
                        </div>
                        <div className="flex justify-end space-x-4">
                            <Image width="16" height="16" alt="social media icon" src={fbIcon.src} />
                            <Image width="16" height="16" alt="social media icon" src={twIcon.src} />
                            <Image width="16" height="16" alt="social media icon" src={youtubeIcon.src} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
