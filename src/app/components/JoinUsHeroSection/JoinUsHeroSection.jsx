import Image from 'next/image'
import Expendables from '../../../../public/assets/Images/tutors-expendables.webp'
import { JoinUsForm } from '../JoinUsForm/JoinUsForm'
import JoinUsProgressBar from '../JoinUsProgressBar/JoinUsProgressBar'

function JoinUsHeroSection() {
  return (
    <div className="bg-[#006CFF] lg:px-8 px-4 pt-4 lg:pt-8 flex flex-col justify-center" id={'cta'}>
      <JoinUsProgressBar />
      <h1 className="text-white text-center lg:text-[2.5rem] text-[5vw] leading-[120%] lg:block hidden">
        Get Matched for a FREE Class<br></br>& Start 1-on-1 Personalised Tutoring
      </h1>
      <h1 className="text-white text-center lg:text-[2.5rem] text-[5.25vw] leading-[120%] lg:hidden block">
        Get Matched for a FREE Class & Start 1-on-1 Personalised Tutoring
      </h1>
      <p className="text-white text-center text-[1rem] lg:block hidden">
        Get a private tutor matched to your child's curriculum and learning style.<br></br> One
        dedicated tutor who stays with them online all year.
      </p>
      <p className="text-white text-center text-[3.9vw] leading-[140%] lg:hidden block">
        Get a private tutor matched to your child's curriculum and learning style.One dedicated
        tutor who stays with them online all year.
      </p>
      <div className="max-w-7xl mx-auto  h-auto flex flex-col items-center justify-center  pt-8 ">
        <JoinUsForm />
        <Image src={Expendables} alt="mentor match" className="lg:w-[60%] mx-auto" />
      </div>
    </div>
  )
}

export default JoinUsHeroSection
