import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import FreeTrialHeroImage from '../../../public/assets/Images/tutor-student-comb.webp'
import FreeTrialForm from '../components/FreeTrialForm/FreeTrialForm'
import Image from 'next/image'
import RatingsBadge from '../../../public/assets/Images/ratings-badges.webp'
const freeTrialPage = () => {
  return (
    <div className="w-full flex flex-col">
      <NavBar whatsapp />
      <div className="w-full min-h-[calc(100vh-80px)] bg-[linear-gradient(90deg,#006CFF_62%,#049FF3_100%)] flex flex-col justify-center items-end ">
        <div className="w-full flex justify-center gap-8 items-end px-4 ">
          <div className="free-trial-hero-section w-[40%] flex flex-col justify-start items-center">
            <h1 className="text-white text-left text-[2rem] leading-[140%]">
              Book a
              <span className="bg-[#FFF116] text-[2rem] text-black px-2 rounded mx-2">
                FREE Trial
              </span>
              For Your Child!
            </h1>
            <Image src={FreeTrialHeroImage} alt="Mentor Match" width={350} />
          </div>
          <div className="free-trial-form-section w-[50%] flex justify-center">
            <FreeTrialForm />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center mt-8">
          <Image src={RatingsBadge} alt={'mentor match'} width={280} />
          <p className="text-white text-[1rem]">© 2025 Mentor Match. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default freeTrialPage
