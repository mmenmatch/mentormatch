'use client'
import React from 'react'
import TutorGang from '../../../../public/assets/Images/tutor-gang.webp'
import Image from 'next/image'

export default function BookDemoBanner() {
   const handleRedirect = () => {
     // Directly changes the browser URL to the external link
     window.location.href = 'https://www.mentormatch.com/#form-cta'
   }
  return (
    <div className=" lg:px-8 px-4 pt-4 bg-[linear-gradient(90deg,#006CFF_62%,#049FF3_100%)] text-white">
      <div className="max-w-[90rem] flex lg:flex-row flex-col mx-auto">
        <div className="lg:w-[50%] w-full flex flex-col justify-center  items-center">
          <div className="lg:w-[500px] w-full mx-auto flex flex-col justify-start gap-2 ">
            <h2 className="lg:text-[2.4rem] text-[7vw] text-[#FFF116] lg:leading-12  leading-8 font-extrabold">
              Need Help Preparing for Your Exams?
            </h2>
            <p className="lg:text-[1.25rem] text-[4vw] lg:leading-8 leading-6 font-bold">
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
                className=" lg:w-[200px] w-[50%] border-2 border-white md:py-3 py-3   font-semibold rounded-4xl
             disabled:bg-gray-300 transition text-[1rem] mt-4 text-white "
              >
                Explore Topics
              </button>
              <button
                onClick={handleRedirect}
                type="submit"
                className=" lg:w-[200px] w-[50%] text-black border-2 border-black md:py-3 py-3 bg-[#FFF116]  font-semibold rounded-4xl
             disabled:bg-gray-300 transition text-[1rem] mt-4 "
              >
                Book a Free Trial
              </button>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] w-full flex justify-center">
          <Image src={TutorGang} alt="TutorGang" width={400} />
        </div>
      </div>
    </div>
  )
}
