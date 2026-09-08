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
      <div className="w-full min-h-[calc(100vh-80px)] bg-[linear-gradient(90deg,#006CFF_62%,#049FF3_100%)] flex flex-col md:py-16 py-4 gap-16 relative">
        <div className="w-full flex md:flex-row flex-col justify-center items-end px-4 md:gap-8 gap-4 ">
          <div className="free-trial-hero-section md:w-[40%] w-full flex flex-col justify-start items-center">
            <h1 className="text-white text-left md:text-[3rem] text-[7vw] leading-[140%] text-center">
              Book a
              <span className="bg-[#FFF116] md:text-[2.5rem] text-[7vw] text-black px-2 rounded mx-2">
                FREE Trial
              </span>
              For Your Child!
            </h1>
            <Image
              src={FreeTrialHeroImage}
              alt="Mentor Match"
              width={400}
              className="hidden md:flex"
            />
          </div>
          <div className="free-trial-form-section md:w-[50%] w-full flex justify-center">
            <FreeTrialForm />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 justify-center items-center md:absolute relative bottom-5">
          <Image src={RatingsBadge} alt={'mentor match'} width={300} />
          <p className="text-white text-[1rem]">© 2025 Mentor Match. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default freeTrialPage
