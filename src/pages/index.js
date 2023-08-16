
import { useGetClassesQuery } from '@/redux/api/class/classApi'
import BalanceTimerBanner from './components/home/BalanceTimerBanner'
import ClassBanner from './components/home/ClassBanner'
import MemberBanner from './components/home/MemberBanner'
import Reviews from './components/home/Reviews'
import ServicesBanner from './components/home/ServicesBanner'
import ThrowEmail from './components/home/ThrowEmail'
import TopBanner from './components/home/TopBanner'
import RootFooter from './layout/footer/RootFooter'
import RootNavbar from './layout/navbar/RootNavbar'
export default function Home() {
  const {data} = useGetClassesQuery()
  console.log(data)
  return (
    <main>
      <TopBanner />
      <ServicesBanner />
      <MemberBanner />
      <ClassBanner />
      <BalanceTimerBanner />
      <Reviews />
      <ThrowEmail />
    </main>
  )
}
Home.getLayout = function (pages) {
  return <>
    <RootNavbar />
    {pages}
    <RootFooter />
  </>
}
