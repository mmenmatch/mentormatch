import NavBar from '../components/NavBar/NavBar'
import { OnlineTutoringHeroSection } from '../components/OnlineTutoringHeroSection/OnlineTutoringHeroSection'
import { GpsSection } from '../components/GpsSection/GpsSection'
import { TrulyPersonalise } from '../components/TrulyPersonalise/TrulyPersonalise'
import { Faqs } from '../components/Faqs/Faqs'
import { ParentsApp } from '../components/ParentsApp/ParentsApp'
import GoogleReview from '../components/GoogleReview/GoogleReview'


export default function page() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="w-full">
        <div className=" ">
          <OnlineTutoringHeroSection />
          <GpsSection />
          <TrulyPersonalise />
          <GoogleReview />
          <ParentsApp />
          <Faqs />
        </div>
      </div>
    </div>
  )
}
