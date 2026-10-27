import NavBar from '../components/NavBar/NavBar'
import { MMFooter } from '../components/MMFooter/MMFooter'
import { GpsSection } from '../components/GpsSection/GpsSection'
import GoogleReview from '../components/GoogleReview/GoogleReview'
import { Unlock } from '../components/Unlock/Unlock'
import JoinUsHeroSection from '../components/JoinUsHeroSection/JoinUsHeroSection'

export default function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <JoinUsHeroSection />
        <GpsSection />
        <GoogleReview />
        <Unlock />
      </main>
      <MMFooter />
    </div>
  )
}
