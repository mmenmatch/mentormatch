import NavBar from '../components/NavBar/NavBar'
import CampaignHeroSection from '../components/CampaignHeroSection/CampaignHeroSection'
import FormulaSection from '../components/FormulaSection/FormulaSection'
import GettingStarted from '../components/GettingStarted/GettingStarted'
import GoogleReview from '../components/GoogleReview/GoogleReview'
export default function Campaign() {
  return (
    <div className="w-full h-full text-black">
      <NavBar />
      <CampaignHeroSection />
      <FormulaSection />
      <GettingStarted />
      <GoogleReview />
    </div>
  )
}
