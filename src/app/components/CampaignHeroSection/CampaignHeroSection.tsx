import React from 'react'
import Image from 'next/image'
import TutorImage from '../../../../public/assets/Images/Tutor.webp'
import KidImage from '../../../../public/assets/Images/campaign-page-kid.webp'

export default function CampaignHeroSection() {
  return (
    <div className=" w-full flex items-center py-8 bg-[#f8f6f6]">
      <div className="w-full flex justify-between items-center gap-4">
        <div className="w-[25%]  min-h-75 xl:block hidden">
          <Image src={TutorImage} className="" alt="Mentor Match" priority />
        </div>
        <div className="xl:w-[50%] w-full flex flex-col justify-center items-center gap-4 mx-4 ">
          <div className="flex gap-4">
            <div className="w-[50%]  xl:hidden block ">
              <Image
                src={TutorImage}
                className="object-cover"
                alt="Mentor Match"
                priority
              />
            </div>
            <div className="w-[50%] xl:hidden block">
              <Image
                src={KidImage}
                className="h-full"
                alt="Mentor Match"
                priority
              />
            </div>
          </div>
          <h1 className="text-center xl:text-[2.8rem] text-[1.85rem] leading-[100%] font-extrabold ">
            Personalized 1-on-1 Tutoring Catered to Your Child
          </h1>
          <p className="xl:text-[1.25rem] text-[1rem] text-center ">
            First class is free, followed by sessions starting at just AED 70 -
            100
          </p>
          <form className="xl:min-w-150 flex flex-col gap-4 mx-auto">
            <div className="w-full flex gap-4 justify-center">
              <input
                type="text"
                className="w-full min-h-10 border bg-white border-[#c0c0c0] p-2 rounded"
                placeholder="PARENT'S NAME"
              />
              <input
                type="text"
                className="w-full min-h-10 border bg-white border-[#c0c0c0] p-2 rounded"
                placeholder="EMAIL ADDRESS"
              />
            </div>
            <div className="flex gap-4 justify-center">
              <input
                type="text"
                className="w-full min-h-10 border bg-white border-[#c0c0c0] p-2 rounded"
                placeholder="PARENT'S PHONE NUMBER"
              />
              <input
                type="text"
                className="w-full min-h-10 border bg-white border-[#c0c0c0] p-2 rounded"
                placeholder="GRADE"
              />
            </div>
            <button className="border bg-[#2b51ff] h-10 text-white text-[1rem] rounded font-bold">
              Book A Free Class
            </button>
          </form>
        </div>
        <div className="w-[25%] min-h-75  xl:block hidden">
          <Image src={KidImage} alt="Mentor Match" priority />
        </div>{' '}
      </div>
    </div>
  )
}
