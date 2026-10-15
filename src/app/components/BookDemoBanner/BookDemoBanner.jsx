'use client'
import React from 'react'
import TutorGang from '../../../../public/assets/Images/tutor-gang.webp'
import Image from 'next/image'

export default function BookDemoBanner() {
  return (
    <div className=" px-8 bg-[linear-gradient(90deg,#006CFF_62%,#049FF3_100%)] text-white">
      <div className="max-w-[90rem] flex mx-auto">
        <div className="w-[50%] flex flex-col justify-center  items-center">
          <div className="w-[500px] mx-auto flex flex-col justify-start gap-2 ">
            <h2 className="text-[2.4rem] text-[#FFF116] leading-12 font-extrabold">
              Need Help Preparing for Your Exams?
            </h2>
            <p className="text-[1.25rem] leading-8 font-bold">
              Learn from the{' '}
              <span className="bg-[#FFF116] text-black px-1 py-1 rounded">top 1.3%</span> of IB
              tutors. Get personalised guidance and build confidence for your exams.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  document.getElementById('topics')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
                type="submit"
                className=" w-[200px] border-2 border-white md:py-3 py-3   font-semibold rounded-4xl
             disabled:bg-gray-300 transition text-[1rem] mt-4 text-white "
              >
                Explore Topics
              </button>
              <button
                onClick={() => {
                  document.getElementById('resource-form')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
                type="submit"
                className=" w-[200px] text-black border-2 border-black md:py-3 py-3 bg-[#FFF116]  font-semibold rounded-4xl
             disabled:bg-gray-300 transition text-[1rem] mt-4 "
              >
                Book a Free Trial
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center">
          <Image src={TutorGang} alt="TutorGang" width={400} />
        </div>
      </div>
    </div>
  )
}
