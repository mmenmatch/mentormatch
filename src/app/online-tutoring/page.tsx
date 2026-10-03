import NavBar from '../components/NavBar/NavBar'
import { OnlineTutoringHeroSection } from '../components/OnlineTutoringHeroSection/OnlineTutoringHeroSection'
import { GpsSection } from '../components/GpsSection/GpsSection'
import { TrulyPersonalise } from '../components/TrulyPersonalise/TrulyPersonalise'
import { Faqs } from '../components/Faqs/Faqs'
export default function page() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="w-full">
        <div className=" ">
          <OnlineTutoringHeroSection />
          <GpsSection />
          <TrulyPersonalise />
          <Faqs />
        </div>
      </div>
    </div>
  )
}
