import React from 'react'
import Vivek from '../../../../public/assets/Images/vivek.webp'
import Image from 'next/image'
export default function MathDemoBottomCard() {
  return (
    <div className="pb-8">
      <div className="w-full h-full md:py-8 xl:px-16  bg-[#2B23FF] rounded-2xl relative mb-8 flex items-center">
        <div className="flex flex-col gap-4">
          <p className="text-[2rem] font-bold text-[white]">
            Course by Vivek V, Math expert & Global academician
          </p>
          <div className="flex flex-row gap-4">
            <span className="text-[1.25rem] font-medium text-[#FFF116]">
              IB Resource Person
            </span>
            <span className="text-[1.25rem] font-medium text-[#FFF116]">
              IB Math Tutor
            </span>
            <span className="text-[1.25rem] font-medium text-[#FFF116]">
              Author of 24+ Books
            </span>
          </div>
        </div>
        <Image
          src={Vivek}
          alt="vivek"
          className="w-[200px] absolute bottom-0 right-20"
        />
      </div>
    </div>
  )
}
