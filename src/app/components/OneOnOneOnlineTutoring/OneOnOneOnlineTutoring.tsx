'use client'
import React from 'react'
import Image from 'next/image'
import HeroImage from '../../../../public/assets/Images/hero-section.webp'
import StudentImage from '../../../../public/assets/Images/student.webp'
import RArrow from '../../../../public/assets/Images/r-arrow.webp'

export default function OneOnOneOnlineTutoring() {
  return (
    <div>
      <div className="mx-auto flex bg-[linear-gradient(180deg,_#0285FA_-20.54%,_#006CFF_50.79%)]">
        <div className="max-w-360 w-full flex md:flex-row flex-col gap-4 mx-auto md:px-16 px-4 md:mt-16 mt-8 ">
          <div className="md:w-[50%] w-full text-white flex flex-col  md:gap-4 gap-2">
            <h1 className="md:text-[2.6rem] m-0 text-[6.5vw] leading-[150%] font-bold">
              1:1 Online Tutoring That Actually Improves Grades
              {/* <span className="w-auto bg-[#FFF116] leading-[100%] text-black px-2 rounded-sm">
                Actually Improves Grades
              </span> */}
            </h1>
            <p className="md:text-[1.3rem] text-[4vw] leading-[130%]  font-medium ">
              Personalised lessons tailored to IB, IGCSE, A Level & CBSE. Expert tutors, proven
              results, and first class is free.{' '}
            </p>
            <div className="flex  gap-2 md:mb-6">
              <div className="bg-white w-full md:w-auto p-2 rounded-lg md:text-[1.5rem] text-[3vw] leading-[100%] text-[#2A51FF] font-bold flex items-baseline gap-1">
                {' '}
                <Image
                  src={StudentImage}
                  alt="student"
                  className="md:w-5.75 ml-2 w-3.75"
                  // height={20}
                />
                5279+ <span className="text-black font-medium">Students</span>
              </div>
              <div className="bg-white w-full md:w-auto p-2 rounded-lg md:text-[1.5rem] text-[3vw] leading-[100%] text-[#2A51FF] font-bold flex items-center md:items-baseline gap-1">
                C <Image src={RArrow} alt="arrow" className="md:w-5 md:h-4.5 w-3.75 h-2.5" /> A{' '}
                <span className="text-black font-medium">In 3 Months</span>
              </div>{' '}
            </div>
            <div className="w-70 md:block hidden">
              <button
                type="submit"
                onClick={() => {
                  document.getElementById('cta')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
                className="w-full md:min-w-62.5 min-w-40 md:text-[1rem] text-[0.95rem] py-3 px-4 bg-[#FFF116] text-black border-2 border-black rounded-full font-semibold shadow-[4px_4px_0px_black] active:shadow-[2px_2px_0px_black] active:translate-y-0.75
            "
              >
                Book A Free Trial
              </button>
            </div>
          </div>
          <div className="md:w-[50%] w-full relative flex justify-end items-end">
            <Image src={HeroImage} alt="hero-section" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  )
}
