'use client'
import React from 'react'
import Image from 'next/image'
import FooterTutor from '../../../../public/assets/Images/footer-tutor.webp'
import FooterStudent from '../../../../public/assets/Images/footer-student.webp'

export const Footer = () => {
  return (
    <div className="py-12 md:py-16 px-4 bg-[#1E293E]">
      <div className={`max-w-360 mx-auto`}>
        <div className="md:mb-16 mb-8">
          <h2 className="md:w-[50%] m-0 mx-auto text-center md:text-[2.5rem] leading-[130%] text-[5vw] font-bold m-0  text-white">
            See Exactly Where The Grade is Being Lost In{' '}
            <span className=" bg-[#FFF116] text-black md:text-[2.5rem] text-[5vw] px-2 m-0 leading-[100%] m-0 rounded-[4px]">
              The First Session
            </span>
          </h2>
        </div>
        <div className="md:w-[60%] w-full relative py-20 mx-auto bg-[linear-gradient(180deg,_#006CFF_0%,_#014AAF_100%)] py-8 rounded-4xl flex flex-col justify-center items-center gap-4 overflow-hidden">
          <Image
            src={FooterTutor}
            alt="FooterTutor"
            className=" md:block absolute left-0 bottom-0 md:w-[250px] w-[160px]"
          />
          <div className="md:text-[1.2rem] text-[4vw]">
            {/* <p className="text-white m-0  text-center leading-[120%] w-[290px] mx-auto">
              Book a Free Demo Class with a Curriculum Trained Tutor. You Sit in. You Decide.
            </p> */}
          </div>
          <div className="max-w-[50%]">
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
            </button>{' '}
          </div>
          <Image
            src={FooterStudent}
            alt="FooterStudent"
            className=" md:block absolute right-0 bottom-0 md:w-[250px] w-[150px]"
          />
        </div>
        <div className="mt-8">
          <p className="m-0 md:text-[1rem] text-[3.5vw] text-center text-white ">
            © 2026 Mentor Match. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}
