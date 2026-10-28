import NavBar from '../components/NavBar/NavBar'
import { MMFooter } from '../components/MMFooter/MMFooter'
import { GpsSection } from '../components/GpsSection/GpsSection'
import GoogleReview from '../components/GoogleReview/GoogleReview'
import { Unlock } from '../components/Unlock/Unlock'
import JoinUsHeroSection from '../components/JoinUsHeroSection/JoinUsHeroSection'
import { JoinUsReviewSection } from '../components/JoinUsReviewSection/JoinUsReviewSection'
export default function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <JoinUsHeroSection />
        <JoinUsReviewSection />
        <GpsSection />
        <GoogleReview />
        <Unlock />
      </main>
      <MMFooter />
    </div>
  )
}
