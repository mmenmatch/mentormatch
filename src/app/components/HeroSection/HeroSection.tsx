import React from 'react'
import HeroImage from '../../../../public/assets/Images/heroimage.webp'
import HeroContentImage from '../../../../public/assets/Images/hero-text-icon.webp'
import HeroStudentAvatar from '../../../../public/assets/Images/students-avatar.webp'

import Image from 'next/image'
import Tag from '../Tag/Tag'
import { myFont } from '../../../../public/fonts/local'

const HeroSection = () => {
  return (
    <div className="xl:py-12 xl:px-8  py-8 px-4 max-w-7xl mx-auto w-full flex flex-col sm:flex-row gap-4">
      <div className="hero-content 2xl:w-[50%] w-full flex justify-center">
        <div className="w-full flex flex-col xl:gap-8 gap-4  justify-center">
          <div className="flex  xl:justify-start justify-center items-center">
             
            <Tag
              title="Tutoring for every Grade and Curriculum"
              icon={HeroContentImage}
            />
          </div>
          <p
            className={`${myFont.className} xl:text-6xl text-2xl leading-[120%] xl:text-left text-center`}
          >
            1:1 Tutoring That Helps Your Child Excel at School
          </p>

          <div className="flex xl:justify-start justify-center items-center gap-2 mb-2">
            <div className="2xl:w-30 w-20">
              <Image
                src={HeroStudentAvatar}
                alt="hero"
                // width={ 100 }
              />
            </div>
            <p
              className={`${myFont.className} xl:text-[1rem] text-[0.85rem] leading-[120%]`}
            >
              2.2K+ Students Worldwide
            </p>
          </div>
          <div className="w-full flex xl:justify-start justify-center items-center">
            <button className="xl:px-8 xl:py-3 px-6 py-2 border-2 border-black rounded font-extrabold bg-[#fff116] text-[1rem] shadow-[3px_3px_0px_black] active:shadow-[1px_1px_0px_black] active:translate-y-0.75 ">
              Book A Free Trial
            </button>
          </div>
        </div>
      </div>
      <div className="hero-image 2xl:w-[50%] w-full">
        <div className="w-full h-full flex xl:justify-end justify-center items-center ">
          <Image
            src={HeroImage}
            alt="hero"
            className="xl:max-w-full xl:max-h-full max-w-75 max-h-70 object-contain"
          />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
