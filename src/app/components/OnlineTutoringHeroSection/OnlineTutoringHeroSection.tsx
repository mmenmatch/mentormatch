import React from 'react'
import Image from 'next/image'
import OnlineTutoring from '../../../../public/assets/Images/OnlineTutoring.webp'
import GoogleRating from '../../../../public/assets/Images/google-rating.png'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import CueMathForm from '../CueMathForm/CueMathForm'
export const OnlineTutoringHeroSection = () => {
  return (
    <div className="w-full md:flex ">
      <div
        className="
      lg:bg-[linear-gradient(180deg,_#2A51FF_0%,_#0285FA_100%)] lg:w-[55%] w-full md:py-16 py-8 md:px-8 px-4 flex  md:bg-none bg-[linear-gradient(180deg,_#2A51FF_0%,_#0285FA_100%)] justify-end "
      >
        <div className="max-w-[50rem]  w-full flex flex-col justify-start gap-4 items-baseline">
          <div className="border border-white bg-white/20 w-auto p-2 rounded-4xl">
            <Image src={GoogleRating} alt="OnlineTutoring" className="w-[200px]" />
          </div>

          <p className="text-white md:text-[2.5rem] text-[6vw] leading-[150%] font-bold">
            Expert{' '}
            <span className="bg-[#FFF116] text-black px-2 rounded leading-[80%]">
              {' '}
              1-on-1 Online
            </span>{' '}
            Maths & Science Tutoring
          </p>
          <p className="text-white md:text-[1.2rem] md:w-full text-[4vw] leading-[150%] ">
            Get a private tutor matched to your child's curriculum and learning style. One dedicated
            tutor online who stays with them all year.
          </p>
          <div className="flex justify-center">
            <Image src={OnlineTutoring} alt="OnlineTutoring" className="w-full" priority />
          </div>
        </div>
      </div>{' '}
      <div className="w-full md:w-[45%] px-4 md:px-12 bg-[#FFF6ED] flex items-center">
        <div className="max-w-[35rem]">
          <CueMathForm />
        </div>
      </div>
    </div>
  )
}
