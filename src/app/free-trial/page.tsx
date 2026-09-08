import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import FreeTrialHeroImage from '../../../public/assets/Images/tutor-student-comb.webp'
import FreeTrialForm from '../components/FreeTrialForm/FreeTrialForm'
import Image from 'next/image'
import RatingsBadge from '../../../public/assets/Images/ratings-badges.webp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '1:1 Tutoring That Helps You Excel at School | MentorMatch',
  description: `Start early before it's too late. Foundation weak? Concepts unclear? Same tutor fixes it all. CBSE, IB, IGCSE, AP. Book a free trial.`,
  openGraph: {
    title: '1:1 Tutoring That Helps You Excel at School | MentorMatch',
    description: `Start early before it's too late. Foundation weak? Concepts unclear? Same tutor fixes it all. CBSE, IB, IGCSE, AP. Book a free trial.`,
    images: [
      {
        url: 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6a21389fc30b68ec4cafbe77_OG.webp', // absolute URL
        width: 1200,
        height: 630,
        alt: '1:1 Tutoring That Helps You Excel at School | MentorMatch',
      },
    ],
  },
}

const freeTrialPage = () => {
  return (
    <div className="w-full flex flex-col">
      <NavBar whatsapp />
      <div className="w-full min-h-[calc(100vh-80px)] bg-[linear-gradient(90deg,#006CFF_62%,#049FF3_100%)] flex flex-col justify-center md:py-16 py-4 md:gap-16 gap-12 relative">
        <div className="w-full flex md:flex-row flex-col justify-center items-end px-4 md:gap-8 gap-4 ">
          <div className="free-trial-hero-section md:w-[40%] w-full flex flex-col justify-start items-center">
            <h1 className="text-white  md:text-[3rem] text-[7vw] leading-[140%] text-center">
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
        <div className="w-full flex flex-col gap-4 justify-center items-center  relative bottom-5">
          <Image src={RatingsBadge} alt={'mentor match'} width={300} />
          <p className="text-white text-[1rem]">© 2025 Mentor Match. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default freeTrialPage
