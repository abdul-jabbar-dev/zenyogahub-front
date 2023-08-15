import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import ico from '../../../assets/logo/lotus.png'
export default function RootNavbar({ children }) {
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
            <div className={`fixed w-full top-0 bg-white shadow-lg transition-opacity duration-300 z-50 py-6 ${isVisible ? 'opacity-100' : 'opacity-0 -top-full'
                }`}>
                <div className="container mx-auto flex justify-between">
                    <div>
                        <Image alt='logo' src={ico} width="50" height="50"/>
                    </div>
                    <div className="my-auto">
                        <Link href="getting started"><button className="uppercase hover:border-b transition-all delay-200  ">get started</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
