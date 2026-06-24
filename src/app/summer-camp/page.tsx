import React from 'react'
import { MultiStepForm } from '../components/MultiStepForm/MultiStepForm'
import NavBar from '../components/NavBar/NavBar'
import { Metadata } from 'next'
import BookDemoImage from '../../../public/assets/Images/math-hero-card.webp'
import Step1 from '../../../public/assets/Images/lens.webp'
import Step3 from '../../../public/assets/Images/recog.webp'
import Step2 from '../../../public/assets/Images/profile.webp'
import Image from 'next/image'
export const metadata: Metadata = {
  title: 'Book a Free Demo Class for Your Child',
  description:
    'Experience personalized online learning with expert tutors. Schedule a free live demo class today.',
  openGraph: {
    title: 'Book a Free Demo Class for Your Child',
    description:
      'Experience personalized online learning with expert tutors. Schedule a free live demo class today.',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6a21389fc30b68ec4cafbe77_OG.webp',
        width: 1200,
        height: 630,
        alt: 'Mentor Match',
      },
    ],
  },
}
export default function page() {
  return (
    <div className="w-full  min-h-screen ">
      <NavBar />
      <div className="flex w-full min-h-[calc(100vh-80px)]">
        <div className="md:flex hidden w-[40%] bg-[#163B82]  flex-col justify-between relative pt-8">
          <h1 className="text-[1.8rem] text-white text-center leading-[140%] w-[85%] mx-auto">
            Summer Bootcamp:
            <span className="bg-[#FFF116] text-black px-2 rounded mx-1">1-on-1</span>
            <div className="text-white  px-2 rounded ">Before School Reopens.</div>
          </h1>
          <Image src={BookDemoImage} alt="book-demo" />
          <div className="md:w-[90%] w-full md:p-4 p-2  absolute md:rounded-[42px] rounded-t-[42px] md:bottom-2.5 bottom-0 left-1/2 -translate-x-1/2 bg-[#163B82]">
            <h2 className="m-0 text-white md:text-[1.5rem] text-[4vw] text-center">
              3-Step Formula for A+ Success:
            </h2>

            <div className="w-full flex justify-around items-end text-[1rem] md:mt-2 mt-0">
              <div>
                <div className="flex flex-col items-center md:text-[1rem] text-[2.8vw] text-center leading-[110%] md:gap-4 gap-2 px-4 justify-end text-white md:h-20 h-15 font-semibold">
                  <Image src={Step1} alt="step-1" className="md:w-10 w-5" />
                  Find the Gap
                </div>
              </div>
              <div className="md:h-20 h-15 border-r border-white "></div>
              <div>
                <div className="flex flex-col items-center md:text-[1rem] text-[2.8vw] text-center  leading-[110%] md:gap-4 gap-2 px-4 justify-end text-white md:h-20 h-15 font-semibold">
                  <Image src={Step2} alt="step-2" className="md:w-10 w-5" />
                  Personalize the Plan
                </div>
              </div>
              <div className="md:h-20 h-15 border-r border-white "></div>

              <div>
                <div className="flex flex-col items-center md:text-[1rem] text-[2.8vw] text-center  leading-[110%] md:gap-4 gap-2 px-4 justify-end text-white md:h-20 h-15 font-semibold">
                  <Image src={Step3} alt="step-3" className="md:w-10 w-5" />
                  Prove the progress
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[60%] w-full ">
          <MultiStepForm type="summer" utm_campaign="Reactivation_24thJune_Stepsform_Summer-LP" />
        </div>
      </div>
    </div>
  )
}
