import React from 'react'
import Tutors from '../../../../public/assets/Images/tutors.webp'
import B1 from '../../../../public/assets/Images/b-1.webp'
import B2 from '../../../../public/assets/Images/b-2.webp'
import B3 from '../../../../public/assets/Images/b-3.webp'

import Image from 'next/image'
export default function MathDemoBottomCard() {
  return (
    <div className="md:px-0 md:pb-8 pb-0">
      <div className="w-full md:h-full justify-between md:min-h-auto min-h-[300px] md:py-4  pt-8 xl:px-4  bg-[linear-gradient(180deg,_#006CFF_-7.54%,_#004199_129.79%)] md:rounded-[42px] rounded-none relative  md:mt-0 mt-8 mb-8 flex md:flex-row flex-col items-start md:items-center overflow-hidden">
        <div className="flex flex-col md:w-[60%] w-full gap-2 md:gap-4 md:p-4 p-4">
          <p className="md:text-[2rem] leading-[120%] text-[6vw] flex flex-col md:flex-row items-center gap-2 font-bold text-[white]">
            We match kids with{' '}
            <span className="text-black bg-[#FFF216] px-1 md:rounded-[12px] rounded-[8px]">
              Tutors They’ll Love{' '}
            </span>
          </p>
          <div className="flex md:flex-row flex-row md:gap-4">
            <div className="flex md:gap-2 items-center">
              <Image
                src={B1}
                alt="b1"
                className="md:w-20 w-10 h-full object-contain"
              />
              <p className="md:text-[1rem]  m-0  text-[0.8rem] leading-[110%] font-medium text-white">
                Vetted for Curricula Expertise{' '}
              </p>
            </div>
            <div className="flex md:gap-2 items-center md:mr-4">
              <Image
                src={B2}
                alt="b2"
                className="md:w-20 w-10 h-full object-contain"
              />
              <p className="md:text-[1rem]  m-0  text-[0.8rem] leading-[110%] font-medium text-white">
                Min 5 years of Tutoring Experience{' '}
              </p>
            </div>
            <div className="flex md:gap-2 items-center">
              <Image
                src={B3}
                alt="b3"
                className="md:w-20 w-10 h-full object-contain"
              />
              <p className="md:text-[1rem]  m-0  text-[0.8rem] leading-[110%] font-medium text-white">
                Trained for Real Exam Conditions{' '}
              </p>
            </div>
          </div>
        </div>
        <Image
          src={Tutors}
          alt="tutors"
          className="md:w-100 w-100 md:absolute md:bottom-0  md:right-0"
        />
      </div>
    </div>
  )
}
