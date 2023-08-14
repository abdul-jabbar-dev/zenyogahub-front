import Image from 'next/image'
import React from 'react'
import yogaIMG from "../../../assets/category/yoga.jpg"
import mediIMG from "../../../assets/category/meditation.jpg"
import theraIMG from "../../../assets/category/therapy.jpg"
import phyIMG from "../../../assets/category/psychiatrist.jpg"
import fetnessIMG from "../../../assets/category/fetness.jpg"
export default function ServicesBanner() {
    const category = [
        {
            type: 'Yoga',
            link: '',
            img: yogaIMG
        }, {
            type: 'Meditation',
            link: '',
            img: mediIMG
        }, {
            type: 'Fitness',
            link: '',
            img: fetnessIMG
        }, {
            type: 'Therapy',
            link: '',
            img: theraIMG
        }, {
            type: 'Psychiatrist',
            link: '',
            img: phyIMG
        },
    ] 
    return (
        <div className='container mx-auto text-center my-24'>
            <h1 className="text-3xl font-semibold my-2"> Explore Our Diverse Yoga Offerings</h1> 
            <p className="text-lg ">Embark on a transformative journey of self-discovery and well-being through our carefully curated yoga categories.</p>
            <div className="my-4">
                <div className="flex justify-evenly flex-grow  gap-6">
                    {category.map((item, i) =>
                        <div key={i} className="relative flex justify-center items-center"  >

                            <Image
                                src={item.img.src}
                                className="contrast-75  rounded-md"
                                alt={item.type}
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: '80%',
                                }}
                                width='100'
                                height='100' />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <h2 className="drop-shadow-xl  uppercase  text-2xl font-semibold text-white"> {item.type}</h2>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
