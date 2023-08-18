import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import bg from '../../assets/bg.png'
import fb from '../../assets/icons/facebook.svg'
import google from '../../assets/icons/google.svg'
import showIcon from '../../assets/icons/eye-regular.svg'
import hideIcon from '../../assets/icons/eye-slash-regular.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import back from '../../assets/icons/back.svg'
import { signIn } from 'next-auth/react'
export default function Index() {
    const [show, setShow] = React.useState(false)
    const router = useRouter()
    const [credential, setCredential] = React.useState({ email: "", password: "" })
    const loginByCredential = (e) => {
        e.preventDefault()
        signIn("credentials", { ...credential })
    }
    return (
        <>
            <Head>
                <title>
                    Login
                </title>
            </Head>
            <div className='flex justify-between'>
                <Image alt='Login image' className='' src={bg.src} width={800} height={600} style={{ width: '40%', height: '100vh', objectFit: 'contain' }} />
                <div className=' w-full h-screen p-6 relative'>
                    <div className='bg-gray-100 w-full rounded-2xl h-full'>
                        <span className='absolute top-10 left-16 flex '>
                            <span className='flex gap-2 items-center  cursor-pointer' onClick={() => router.push('/')}>
                                <Image src={back} width={30} height={30} alt='icon' />
                                Back
                            </span>
                        </span>
                        <div className='text-center text-3xl pt-16  pb-8 uppercase'>
                            Try to Login
                        </div>
                        <div>
                            <form onSubmit={e => loginByCredential(e)} className='flex justify-center flex-col items-center'>
                                <div className='flex justify-center flex-col items-center gap-2'>
                                    <input onChange={(e) => setCredential({ ...credential, email: e.target.value })} className='border px-3 py-2 rounded-md w-80 focus:outline-violet-700' type='email' placeholder='Email' />
                                    <span className='relative'>

                                        <input onChange={(e) => setCredential({ ...credential, password: e.target.value })} className='border px-3 py-2 rounded-md w-80 focus:outline-violet-700' type={show ? 'text' : 'password'} placeholder='Password' />
                                        <span onClick={() => setShow((e) => !e)}>
                                            <Image className='absolute top-3 right-3' src={show ? hideIcon : showIcon} width={20} height={20} alt='icon' />
                                        </span>
                                    </span>                                </div>
                                <div className='flex mt-3 gap-2 justify-between w-80'>
                                    <div className='flex text-center gap-x-2'><input className='accent-violet-800' type="checkbox" name="remember_pass" id="remember_pass" />
                                        <label className='text-gray-600 text-sm' htmlFor="remember_pass">Remember me</label></div>
                                    <Link className='text-gray-600 text-sm hover:underline hover:text-violet-900' href={'/start/register'}>Create an acount</Link>
                                </div>
                                <br />
                                <input type="submit" className='border px-6 py-1 rounded-md active:bg-violet-800 active:text-white cursor-pointer uppercase ' value="Login" />
                            </form>
                        </div>

                        <div >
                            <div className='flex justify-center w-80 mx-auto gap-x-6 border-gray-300  border-t pt-6 mt-8'>
                                <p className='text-center font-semibold text-2xl text-gray-500'>Or</p>

                                <button onClick={() => signIn("google")} className='border w-full rounded py-2'>
                                    <span className=' flex justify-center w-full items-center space-x-2'><Image
                                        className=' '
                                        src={google.src}
                                        alt="icon"
                                        width={30}
                                        height={30}
                                    />
                                        <h1 className='font-semibold text-gray-500'>Google</h1>
                                    </span>
                                </button>
                                <button onClick={() => signIn("facebook")} className='border w-full rounded py-2'>
                                    <span className=' flex justify-center w-full items-center space-x-2'><Image
                                        className=' '
                                        src={fb.src}
                                        alt="icon"
                                        width={30}
                                        height={30}
                                    />
                                        <h1 className='font-semibold text-gray-500'>Facebook</h1>
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
