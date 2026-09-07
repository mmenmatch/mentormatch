import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import FreeTrialHeroImage from '../../../public/assets/Images/tutor-student-comb.webp'
import FreeTrialForm from '../components/FreeTrialForm/FreeTrialForm'
import Image from 'next/image'

const freeTrialPage = () => {
  return (
    <div className="w-full flex flex-col">
      <NavBar whatsapp />
      <div className="w-full min-h-[calc(100vh-80px)] bg-[linear-gradient(90deg,#006CFF_62%,#049FF3_100%)] px-4 flex justify-center items-center">
        <div className="free-trial-hero-section w-[40%] flex flex-col justify-start items-start">
          <h1 className="text-white text-left text-[2rem] leading-[140%]">
            Book a
            <span className="bg-[#FFF116] text-[2rem] text-black px-2 rounded mx-2">
              FREE Trial
            </span>
            For Your Child!
          </h1>
          <Image src={FreeTrialHeroImage} alt="Mentor Match" width={400} />
        </div>
        <div className="free-trial-form-section w-[50%]">
          <div>
            <FreeTrialForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default freeTrialPage
