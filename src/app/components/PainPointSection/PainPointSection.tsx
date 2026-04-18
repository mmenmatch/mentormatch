'use client'
import React, { useState } from 'react'
import { Container } from '../Container/Container'
import PrimaryPaperTexture from '../../../../public/assets/Images/primary-paper-1.webp'
import { StaticImageData } from 'next/image'
import StudentImageB from '../../../../public/assets/Images/worried-student-b.png'
import StudentImageA from '../../../../public/assets/Images/worried-student-a.webp'

import Image from 'next/image'
import { myFont } from '../../../../public/fonts/local'

export const PainPointSection = () => {
  const [isSolutionActive, setIsSolutionActive] = useState(false)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 ">
      {/* <Container> */}
      <div
        className={`primary-paper-texture w-full border text-white rounded-2xl flex xl:flex-row flex-col-reverse justify-between min-h-100`}
      >
        <div className="xl:w-[30%] w-full flex student-bg  ">
          <div className="w-full relative h-full">
            <Image
              src={StudentImageB}
              alt="test"
              className={`w-full h-full xl:min-w-50 min-w-5  object-cover xl:absolute  ${isSolutionActive ? 'absolute opacity-0' : ''}`}
            />
            <Image
              src={StudentImageA}
              alt="test"
              className={`w-full h-full min-w-50 object-cover xl:absolute   ${!isSolutionActive ? ' absolute opacity-0' : ''}`}
            />
          </div>
        </div>
        <div className=" xl:w-[70%] w-full flex flex-col justify-center gap-8 xl:p-4 p-8 ">
          <div className="relative xl:h-25 h-40 mb-12">
            <div className={`${isSolutionActive ? 'opacity-0' : ''} absolute`}>
              <p
                className={`${myFont.className} mb-4 leading-[150%] text-[#FFF216] xl:text-3xl text-[1.5rem] leading-[120%] xl:text-left text-center`}
              >
                " It's not just marks… my child is losing interest in studies. "
              </p>
              <p
                className={`${myFont.className} leading-[150%] text-white xl:text-2xl text-[1rem] leading-[120%] xl:text-left text-center`}
              >
                I wish there was someone who could really understand where my
                child is struggling.
              </p>
            </div>
            <div className={`${!isSolutionActive ? 'opacity-0' : ''} absolute`}>
              <p
                className={`${myFont.className} leading-[150%] flex xl:flex-row flex-col gap-2  mb-4 break-keep text-[#FFF216] xl:text-3xl text-[1.5rem] leading-[120%] xl:text-left text-center`}
              >
                <span>Right mentor.</span>
                <span>Right guidance.</span>
                <span>Real results.</span>
              </p>

              <p
                className={`${myFont.className} leading-[150%] text-white xl:text-2xl text-[1rem] leading-[120%] xl:text-left text-center`}
              >
                2000+ students have already improved from any grade level to top
                performance.
              </p>
            </div>
          </div>
          <div className="w-full mt-4 flex xl:justify-start justify-center items-center">
            <button
              onClick={() => {
                setIsSolutionActive(!isSolutionActive)
              }}
              className={` xl:px-8 xl:py-3 px-6 text-black py-2 border-2 border-black rounded font-extrabold bg-[#fff116] text-[1rem] shadow-[3px_3px_0px_black] active:shadow-[1px_1px_0px_black] active:translate-y-0.75 `}
            >
              Here Is A Solution
            </button>
          </div>
        </div>
      </div>
      {/* </Container> */}
    </div>
  )
}
