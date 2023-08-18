import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import bg from '../../../assets/bg.png'
import fb from '../../../assets/icons/facebook.svg'
import google from '../../../assets/icons/google.svg'
import showIcon from '../../../assets/icons/eye-regular.svg'
import hideIcon from '../../../assets/icons/eye-slash-regular.svg'
import back from '../../../assets/icons/back.svg'
import { useRouter } from 'next/router'

export default function Index() {
    const router = useRouter()
    const [show, setShow] = useState(false)
    const [credential, setCredential] = useState({ email: "", password: "", name: "" })
    const createAccount = (e) => {
        e.preventDefault()
        fetch(window.location.origin + '/api/auth/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(credential)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <>
            <Head>
                <title>
                    Register
                </title>
            </Head>
            <div className='flex justify-between'>
                <Image alt='Register image' className='' src={bg.src} width={800} height={600} style={{ width: '40%', height: '100vh', objectFit: 'contain' }} />
                <div className=' w-full h-screen p-6 relative'>
                    <div className='bg-gray-100 w-full rounded-2xl h-full'>
                        <span className='absolute top-10 left-16 flex '>
                            <span className='flex gap-2 items-center  cursor-pointer' onClick={useRouter().back}>
                                <Image src={back} width={30} height={30} alt='icon' />
                                Back
                            </span>
                        </span>
                        <div className='text-center text-3xl pt-16  pb-8 uppercase'>
                            Create a new account
                        </div>
                        <div>
                            <form onSubmit={(e) => createAccount(e)} className='flex justify-center flex-col items-center'>
                                <div className='flex justify-center flex-col items-center gap-2'>
                                    <input onChange={(e) => setCredential({ ...credential, name: e.target.value })} className='border px-3 py-2 rounded-md w-80 focus:outline-violet-700' type='text' placeholder='Name' />
                                    <input onChange={(e) => setCredential({ ...credential, email: e.target.value })} className='border px-3 py-2 rounded-md w-80 focus:outline-violet-700' type='email' placeholder='Email' />
                                    <span className='relative'>

                                        <input onChange={(e) => setCredential({ ...credential, password: e.target.value })} className='border px-3 py-2 rounded-md w-80 focus:outline-violet-700' type={show ? 'text' : 'password'} placeholder='Password' />
                                        <span onClick={() => setShow((e) => !e)}>
                                            <Image className='absolute top-3 right-3' src={show ? hideIcon : showIcon} width={20} height={20} alt='icon' />
                                        </span>
                                    </span>
                                </div>
                                <div className='flex mt-3 gap-2'>
                                    <input className='accent-violet-800' type="checkbox" name="remember_pass" id="remember_pass" />
                                    <label className='text-gray-600 text-sm' htmlFor="remember_pass">Remember me</label>
                                </div>
                                <br />
                                <input type="submit" className='border px-6 py-1 rounded-md active:bg-violet-800 active:text-white cursor-pointer uppercase ' value="Register" />
                            </form>
                        </div>

                        <div >
                            <div className='flex justify-center w-80 mx-auto gap-x-6 border-gray-300  border-t pt-6 mt-8'>
                                <p className='text-center font-semibold text-2xl text-gray-500'>Or</p>

                                <button className='border w-full rounded py-2'>
                                    <span className=' flex justify-center w-full items-center space-x-2'><Image
                                        className=' '
                                        src={google.src}
                                        alt="icon"
                                        width={30}
                                        height={30}
                                    />
                                        <h1 className='font-semibold text-gray-500'>Google</h1>
                                    </span>
                                </button>                                <button className='border w-full rounded py-2'>
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
