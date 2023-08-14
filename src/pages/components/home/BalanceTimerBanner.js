import Image from "next/image";
import timeClassImage from "@/assets/yogaCalender.png"

export default function BalanceTimerBanner() {
    return (
        <div className="container mx-auto my-24" >
            <div className="grid grid-cols-2 gap-x-12">
                <div className="w-full">
                    <Image layout="responsive" src={timeClassImage} alt="d" />
                </div>

                <div className="flex justify-center flex-col ">
                    <div className="w-4/5  ml-6">

                        <h3 className="text-3xl font-semibold">Join Our Free Online Yoga Classes - Find Your Perfect Balance</h3>
                        <p className="text-md my-6">At ZenYoga Hub, we&apos;re thrilled to offer you a unique opportunity to embark on a journey of health, wellness, and self-discovery through our free online yoga classes. </p>
                        <button className="primaryBTN py-3 rounded-3xl px-4 text-white">See live class schedule</button>
                    </div >
                </div>

            </div>
        </div>
    )
}
