
import BalanceTimerBanner from './components/home/BalanceTimerBanner'
import ClassBanner from './components/home/ClassBanner'
import MemberBanner from './components/home/MemberBanner'
import ServicesBanner from './components/home/ServicesBanner'
import ThrowEmail from './components/home/ThrowEmail'
import TopBanner from './components/home/TopBanner'
import RootFooter from './layout/footer/RootFooter'
export default function Home() {
  return (
    <main>
      <TopBanner />
      <ServicesBanner />
      <MemberBanner />
      <ClassBanner />
      <BalanceTimerBanner />
      <ThrowEmail />
    </main>
  )
}
Home.getLayout = function (pages) {
  return <>
    {pages}
    <RootFooter />
  </>
}
