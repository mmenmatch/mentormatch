import React from 'react'
import Tutors from '../../../../public/assets/Images/tutors.webp'
import B1 from '../../../../public/assets/Images/win.webp'
import B2 from '../../../../public/assets/Images/script.webp'
import B3 from '../../../../public/assets/Images/thumb.webp'

import Image from 'next/image'
export default function MathDemoBottomCard() {
  return (
    <div className="md:px-0 md:pb-8 pb-0">
      <div className="w-full md:h-full justify-between md:min-h-auto min-h-75 md:py-4  pt-8 xl:px-4  bg-[linear-gradient(180deg,_#006CFF_-7.54%,_#004199_129.79%)] md:rounded-[42px] rounded-none relative  md:mt-0 mt-8 mb-8 flex md:flex-row flex-col items-start md:items-center overflow-hidden">
        <div className="flex flex-col md:w-[60%] w-full gap-4 md:gap-4 md:p-4 p-4">
          <p className="md:text-[2rem] leading-[120%] text-[6vw] flex flex-col md:flex-row items-center gap-2 font-bold text-[white]">
            We match kids with{' '}
            <span className="text-black bg-[#FFF216] px-1 md:rounded-xl rounded-lg">
              Tutors They’ll Love{' '}
            </span>
          </p>
          <div className="flex md:flex-row flex-row md:gap-4">
            <div className="flex flex-col md:gap-2 items-center">
              <Image
                src={B1}
                alt="b1"
                className="md:w-15 w-10 h-full object-contain"
              />
              <p className="md:text-[1rem] m-0 text-[0.8rem] text-center leading-[130%] font-medium text-white">
                Vetted for Curricula Expertise{' '}
              </p>
            </div>
            <div className="flex flex-col md:gap-2 items-center md:mr-4">
              <Image
                src={B2}
                alt="b2"
                className="md:w-15 w-10 h-full object-contain"
              />
              <p className="md:text-[1rem] text-center m-0  text-[0.8rem] leading-[130%] font-medium text-white">
                Min 5 years of Tutoring Experience{' '}
              </p>
            </div>
            <div className="flex flex-col md:gap-2 items-center">
              <Image
                src={B3}
                alt="b3"
                className="md:w-15 w-10 h-full object-contain"
              />
              <p className="md:text-[1rem] text-center m-0  text-[0.8rem] leading-[130%] font-medium text-white">
                Trained for Real Exam Conditions{' '}
              </p>
            </div>
          </div>
        </div>
        <Image
          src={Tutors}
          alt="tutors"
          className="md:w-120 w-100 md:absolute md:bottom-0  md:right-0"
        />
      </div>
    </div>
  )
}
