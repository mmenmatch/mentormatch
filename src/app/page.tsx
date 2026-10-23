import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import GoogleReview from './components/GoogleReview/GoogleReview'
import { PainPointSection } from './components/PainPointSection/PainPointSection'
import { Form } from './components/Form/Form'

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

export default function Home() {
  return (
    <div className="w-full min-h-full">
      <NavBar />
      <HeroSection />
      <PainPointSection />
      <GoogleReview />
      <Form />
    </div>
  )
}
