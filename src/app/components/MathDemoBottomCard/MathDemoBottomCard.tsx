import React from 'react'
import Vivek from '../../../../public/assets/Images/vivek.webp'
import Image from 'next/image'
export default function MathDemoBottomCard() {
  return (
    <div className="pb-8 md:px-0 px-4 ">
      <div className="w-full h-full md:py-8 xl:px-16  min-h-50 bg-[#2B23FF] rounded-2xl relative  md:mt-0 mt-8 mb-8 flex items-center">
        <div className="flex flex-col w-[60%] gap-2 md:gap-4 md:p-4 p-4">
          <p className="md:text-[2rem] leading-[120%] text-[1rem] font-bold text-[white]">
            Course by Vivek V, Math expert & Global academician
          </p>
          <div className="flex md:flex-row flex-col md:gap-4">
            <span className="md:text-[1rem]  text-[0.95rem] font-medium text-[#FFF116]">
              IB Resource Person
            </span>
            <span className="md:text-[1rem] text-[0.95rem] font-medium text-[#FFF116]">
              IB Math Tutor
            </span>
            <span className="md:text-[1rem] text-[0.95rem] font-medium text-[#FFF116]">
              Author of 24+ Books
            </span>
          </div>
        </div>
        <Image
          src={Vivek}
          alt="vivek"
          className="md:w-50 w-40 absolute bottom-0  right-0"
        />
      </div>
    </div>
  )
}
