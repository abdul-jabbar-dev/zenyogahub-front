import Image from 'next/image'
import React from 'react'
import i1 from '../../../assets/reviews/review1.jpg'
import i2 from '../../../assets/reviews/review2.jpg'
import i3 from '../../../assets/reviews/review3.jpg'
import ret from '../../../assets/icons/star-solid.svg'



export default function Reviews() {
    const reviews = [
        {
            img: i1,
            name: "Sarah Johnson",
            reviews: 'I stumbled upon this online yoga platform, and it has been a game-changer! The variety of yoga types keeps me engaged, and the instructors are fantastic. The convenience of practicing at home has transformed my routine. Highly recommended!',
            rating: 4
        }, {
            img: i2,
            name: "Mark Thompson",
            reviews: "As someone who's new to yoga, this platform has been an incredible find.The beginner- friendly classes and clear instructions have helped me feel comfortable in my practice.It's like having a personal yoga studio at my fingertips.",
            rating: 5
        }, , {
            img: i3,
            name: "Lisa Martinez",
            reviews: "I can't thank this website enough for the Restorative Yoga classes. The soothing sessions have been a lifesaver for managing my stress. The combination of gentle poses and calming breathwork is exactly what I needed.",
            rating: 5
        },
    ]
    return (
        <div className='mx-auto container my-36'>
            <h1 className="my-8 text-center font-semibold text-3xl">
                Yoga&rsquo;s Impact in Their Own Words
            </h1>
            <div className="grid grid-cols-3">
                {reviews.map((review, i) =>
                    <div key={i} className={`flex justify-center flex-col px-6  ${reviews.length !== (i + 1) && 'border-r'}`}>
                        <Image src={review.img} alt={review.name} width={80} height={80} className="rounded-full mx-auto my-3" />
                        <div className="flex justify-center flex-col text-center">
                            <div className="flex mx-auto space-x-1">
                                {
                                    [...Array(parseInt(review.rating))].map((j,jj) => <Image key={jj} src={ret.src} width='16' alt={i} height='16' />)
                                }
                            </div>
                            <h1 className="my-3 text-xl ">{review.name}</h1>
                            <h1>{review.reviews}</h1>
                        </div>
                    </div>)}
            </div>
        </div>)
}
