import NavBar from '../components/NavBar/NavBar'
// import CampaignHeroSection from '../components/CampaignHeroSection/CampaignHeroSection'
import FormulaSection from '../components/FormulaSection/FormulaSection'
import GettingStarted from '../components/GettingStarted/GettingStarted'
import GoogleReview from '../components/GoogleReview/GoogleReview'

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

export default function Campaign() {
  return (
    <div className="w-full h-full text-black">
      <NavBar />
      {/* <CampaignHeroSection /> */}
      <FormulaSection />
      <GettingStarted />
      <GoogleReview />
    </div>
  )
}
