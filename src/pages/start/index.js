import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import bg from '../../assets/bg.png'

export default function index() {
    return (
        <>
            <Head>
                <title>
                    Login
                </title>
            </Head>
            <div className='flex justify-between'>
                <Image alt='Login image' className='' src={bg.src} width={800} height={600} style={{ width: '40%', height: '100vh', objectFit: 'contain' }} />
                <div className=' w-full h-screen p-6'>
                    <div className='bg-gray-100 w-full rounded-2xl h-full'>
                        <div className='text-center text-3xl pt-16  pb-8 uppercase'>
                            Try to Login
                        </div>
                        <div>
                            <form className='flex justify-center flex-col items-center'>
                                <div className='flex justify-center flex-col items-center gap-2'>
                                    <input className='border px-3 py-2 rounded-md w-80 focus:outline-violet-700' type='email' placeholder='Email' />
                                    <input className='border px-3 py-2 rounded-md w-80 focus:outline-violet-700' type='password' placeholder='Password' />
                                </div>
                                <br />
                                <input type="submit" className='border px-6 py-1 rounded-md active:bg-violet-800 active:text-white cursor-pointer uppercase ' value="Login" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
