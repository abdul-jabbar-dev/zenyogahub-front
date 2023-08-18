import React from 'react'
import DashboardNav from '../layout/navbar/DashboardNav'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Posts from '../components/dashboard/post/Posts'

export default function Index() {
    const { pathname } = useRouter()
    return (
        <div>
            <div>
                <Link href={!(pathname === "/dashboard/create") ? "dashboard/create" : ""}> <button>Make a post</button></Link>
            </div>
            <div className='mt-6 mx-6'>
                <Posts />
            </div>
        </div>
    )
}
Index.getLayout = (page) => {
    return <DashboardNav>
        {page}
    </DashboardNav>
}
