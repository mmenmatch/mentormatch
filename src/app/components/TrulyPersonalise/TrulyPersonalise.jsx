'use client'
import React from 'react'
import Image from 'next/image'
import TrulyPersonaliseImage from '../../../../public/assets/Images/truly-personalise.webp'

export const TrulyPersonalise = () => {
  return (
    <div className="w-full  bg-[linear-gradient(180deg,_#2A51FF_0%,_#0285FA_100%)]">
      <div className="lg:w-7xl max-w-[90rem] w-full mx-auto flex flex-col lg:flex-row lg:gap-16 px-4">
        <div className="lg:w-[50%]  w-full lg:py-16 pt-8 flex flex-col justify-center lg:items-start items-center gap-4">
          <p className=" text-[6vw] lg:text-[3rem] leading-[140%] text-white font-bold">
            Truly Personalised 1:1 Online Classes for Maths & Science
          </p>
          <div className="w-full bg-white lg:p-6 p-3 rounded-2xl flex justify-between md:items-center ">
            <div className="flex flex-col gap-2 w-[30%] justify-center">
              <p className="text-[#023BF3] lg:text-[2rem] text-[5vw] font-bold">4200+</p>
              <p className="text-[#163B82] lg:text-[1rem] text-[3vw] leading-[120%]">
                students improved a full grade
              </p>
            </div>{' '}
            <div className="bg-[#023BF3] w-[1px] md:h-full h-auto"></div>
            <div className="flex flex-col gap-2 w-[30%] justify-center">
              <p className="text-[#023BF3] lg:text-[2rem] text-[5vw] font-bold">98%+</p>
              <p className="text-[#163B82] lg:text-[1rem] text-[3vw] leading-[120%]">
                students love their tutor
              </p>
            </div>{' '}
            <div className="bg-[#023BF3] w-[1px] md:h-full h-auto"></div>
            <div className="flex flex-col gap-2 w-[30%] justify-center">
              <p className="text-[#023BF3] lg:text-[2rem] text-[5vw] font-bold">200K+</p>
              <p className="text-[#163B82] lg:text-[1rem] text-[3vw] leading-[100%]">
                1:1 sessions delivered
              </p>
            </div>
          </div>
          <button
            type="submit"
            onClick={() => {
              document.getElementById('cta')?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
            className="w-[250px] md:min-w-62.5 min-w-40 md:text-[1.2rem] text-[0.95rem] py-3 px-4 bg-[#FFF116] text-black border-2 border-black rounded-[14px] font-semibold shadow-[0px_4px_0px_black] active:shadow-[0px_2px_0px_black] active:translate-y-0.75
            "
          >
            Book A Free Trial
          </button>
        </div>
        <div className="lg:w-[50%] w-full flex justify-center mt-12">
          <Image src={TrulyPersonaliseImage} alt="TrulyPersonalise" />
        </div>
      </div>
    </div>
  )
}
