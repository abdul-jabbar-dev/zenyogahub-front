import React from 'react'

export default function ThrowEmail() {
    return (
        <div className="container mx-auto grid grid-cols-2 my-4 gap-6" >
            <div>
                <h2 className="text-4xl">Not ready to commit?</h2>
                <p className="text-lg my-4"> Add your email for more information on all the ways we can support you in your wellness goals.</p>
            </div>
            <div className="flex items-center w-5/6">
                <input type="email" placeholder="yourmail@example.com"
                    className="w-full flex-1 appearance-none rounded-3xl pl-6 border border-purple-400 shadow p-3 text-grey-dark mr-2 focus:outline-none" />
                <button type="submit"
                    className="primaryBTN py-3 rounded-3xl px-4 text-white">Submit</button>
            </div>
        </div>
    )
}
