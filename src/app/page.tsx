import NavBar from './components/NavBar/NavBar'
import HeroSection from './components/HeroSection/HeroSection'
import GoogleReview from './components/GoogleReview/GoogleReview'
import { PainPointSection } from './components/PainPointSection/PainPointSection'
import { Form } from './components/Form/Form'

export default function Home() {
  return (
    <div className="w-full h-full">
      <NavBar />
      <HeroSection />
      <PainPointSection />
      <GoogleReview />
      <Form />
    </div>
  )
}
