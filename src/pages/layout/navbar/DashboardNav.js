import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { Router, useRouter } from 'next/router'
import Link from 'next/link'
export default function DashboardNav({ children }) {
    const { data } = useSession()
    const { pathname } = useRouter()
    if (!data) return 'Loading...'
    return (
        <div>
            <div className="font-poppins antialiased">
                <div
                    id="view"
                    className="h-full w-screen flex flex-row"
                    x-data="{ sidenav: true }"
                >
                    <button
                        className="p-2 border-2 bg-white rounded-md border-gray-200 shadow-lg text-gray-500 focus:bg-teal-500 focus:outline-none focus:text-white absolute top-0 left-0 sm:hidden"
                    >
                        <svg
                            className="w-5 h-5 fill-current"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <div
                        id="sidebar"
                        className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
                    >
                        <div className="space-y-6 md:space-y-10 mt-10">

                            <div id="profile" className="space-y-3">
                                <Image
                                    src={data?.user?.image}
                                    alt="Avatar user"
                                    width={100}
                                    height={100}
                                    style={{ width: '70px' }}
                                    className="w-10 md:w-16 rounded-full mx-auto"
                                />
                                <div>
                                    <h2
                                        className="font-medium text-xs md:text-sm text-center text-teal-500"
                                    >
                                        {data.user.name}
                                    </h2>
                                    <p className="text-xs text-gray-500 text-center">{data.user.email}</p>
                                </div>
                            </div>

                            <div id="menu" className="flex flex-col space-y-2">
                                <Link
                                    href="/dashboard"
                                    className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                        ></path>
                                    </svg>
                                    <span className="">Dashboard</span>
                                </Link>
                                <Link
                                    href={!(pathname === "/dashboard/create") ? "dashboard/create" : ""}
                                    className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="w-6 h-6 fill-current inline-block"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                        ></path>
                                    </svg>
                                    <span className="">Post</span>
                                </Link>

                            </div>
                        </div>
                    </div>
                    {children}
                </div >
            </div >
        </div >
    )
}