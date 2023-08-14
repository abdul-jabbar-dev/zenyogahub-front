import React from 'react'
import fbIcon from '../../../assets/icons/facebook.svg'
import twIcon from '../../../assets/icons/twitter.svg'
import youtubeIcon from '../../../assets/icons/youtube.svg'
export default function Footer({ children }) {
    return (
        <>
            {children}
            <div className='bg-slate-100'>

                <div className="container mx-auto grid grid-cols-4  py-10" >

                    <div className="mx-auto">
                        <div className="w-min  uppercase">
                            <h3 className="my-4 ">ShortCut</h3>
                            <ol>
                                <li className="mt-2 text-sm ">home</li>
                                <li className="mt-2 text-sm ">about</li>
                                <li className="mt-2 text-sm ">contact</li>
                                <li className="mt-2 text-sm ">Visit</li>
                            </ol>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <div className="w-min  uppercase">
                            <h3 className="my-4 ">ShortCut</h3>
                            <ol>
                                <li className="mt-2 text-sm ">home</li>
                                <li className="mt-2 text-sm ">about</li>
                                <li className="mt-2 text-sm ">contact</li>
                                <li className="mt-2 text-sm ">Visit</li>
                            </ol>
                        </div>
                    </div>

                    <div className="mx-auto">
                        <div className="w-min  uppercase">
                            <h3 className="my-4 ">ShortCut</h3>
                            <ol>
                                <li className="mt-2 text-sm ">home</li>
                                <li className="mt-2 text-sm ">about</li>
                                <li className="mt-2 text-sm ">contact</li>
                                <li className="mt-2 text-sm ">Visit</li>
                            </ol>
                        </div>
                    </div>
                    <div className="flex justify-evenly">
                        <img className="h-8" src={fbIcon.src} />
                        <img className="h-8" src={twIcon.src} />
                        <img className="h-8" src={youtubeIcon.src} />
                    </div>

                </div>
            </div>
        </>
    )
}
