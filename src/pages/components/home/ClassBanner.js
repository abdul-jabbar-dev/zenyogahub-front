import Image from "next/image";
import liveClassImage from "@/assets/live-classes.png"
export default function ClassBanner() {
    return (
        <div className="container mx-auto my-24">
            <div className="grid grid-cols-2 gap-x-12">
                <div className="flex justify-center flex-col ">
                    <div className="w-4/5 ">

                        <h3 className="text-3xl font-semibold">Experience in-studio energy from the comfort of your home with live classes</h3>
                        <p className="text-md my-6 ">Join our global community for convenient, daily live classes that fit your schedule. Sign up in advance for stress-relieving flows, motivating workouts, and mindful meditations in real-time when you need that extra push.</p>
                        <button className="primaryBTN py-3 rounded-3xl px-4 text-white">See live class schedule</button>
                    </div >
                </div>
                <div>
                    <Image layout="responsive" src={liveClassImage} alt="d" />
                </div>
            </div>
        </div>
    )
}
