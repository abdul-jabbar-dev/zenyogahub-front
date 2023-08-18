import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ico from '../../../assets/logo/lotus.png'
import logout from '../../../assets/icons/logout-svgrepo-com.svg'
import { useSession,signOut } from 'next-auth/react'
export default function RootNavbar({ children }) {
    const { data: user } = useSession()
    console.log(user)
    const [isVisible, setIsVisible] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (

        <>
            {children}
            <div className={`fixed w-full  top-0 bg-white shadow-lg transition-opacity duration-300 z-50 py-6 ${isVisible ? 'opacity-100' : 'opacity-0  -top-full   '
                }`}>
                <div className="container mx-auto flex justify-between">
                    <div>
                        <Image alt='logo' src={ico} width="50" height="50" />
                    </div>
                    <div className="my-auto flex items-center gap-x-6">
                        {
                            <Link href={user ? "dashboard" : "start"}>
                                <button className="uppercase border hover:border-gray-300 border-white rounded-full px-3 py-2  transition-all delay-100  ">{user ? "Dashboard" : "get started"}</button>
                            </Link>
                        }
                        {user&&<span onClick={()=>signOut()} className='hover:border-purple-600 hover:bg-purple-300 border cursor-pointer p-2 rounded-full ' >
                            <Image alt='logo' src={logout.src}  width="20" height="20" />
                        </span>}
                    </div>
                </div>
            </div>
        </>
    )
}
