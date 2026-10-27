import Image from 'next/image'
import Expendables from '../../../../public/assets/Images/tutors-expendables.webp'
import { JoinUsForm } from '../JoinUsForm/JoinUsForm'
function JoinUsHeroSection() {
  return (
    <div className="bg-[#006CFF] px-8 pt-8 flex flex-col justify-center">
      <h1 className="text-white text-center">
        Get Matched for a FREE Class<br></br>& Start 1-on-1 Personalised Tutoring
      </h1>
      <p className="text-white text-center text-[1rem]">
        Get a private tutor matched to your child's curriculum and learning style.<br></br> One
        dedicated tutor who stays with them online all year.
      </p>
      <div className="max-w-7xl mx-auto  h-auto flex flex-col items-center justify-center gap-8 pt-8 ">
        <JoinUsForm />
        <Image src={Expendables} alt="mentor match" className="w-[60%] mx-auto" />
      </div>
    </div>
  )
}

export default JoinUsHeroSection
