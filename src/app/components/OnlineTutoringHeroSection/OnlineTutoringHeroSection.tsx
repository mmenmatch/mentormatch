import React from 'react'
import Image from 'next/image'
import OnlineTutoring from '../../../../public/assets/Images/OnlineTutoring.webp'
import GoogleRating from '../../../../public/assets/Images/google-rating.png'
import RegistrationForm from '../RegistrationForm/RegistrationForm'

export const OnlineTutoringHeroSection = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col md:bg-[linear-gradient(180deg,_#2A51FF_0%,_#0285FA_100%)] ">
      <div className="max-w-360 w-full mx-auto  flex md:flex-row flex-col justify-between  items-center">
        <div className="lg:w-[50%] w-full md:py-16 py-8 md:px-8 px-4 flex justify-center md:bg-none bg-[linear-gradient(180deg,_#2A51FF_0%,_#0285FA_100%)]  ">
          <div className=" w-full flex flex-col justify-start gap-4 items-baseline">
            <div className="border border-white bg-white/20 w-auto p-2 rounded-4xl">
              <Image src={GoogleRating} alt="OnlineTutoring" className="w-[140px]" />
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
              Get a private tutor matched to your child's curriculum and learning style. One
              dedicated tutor online who stays with them all year.
            </p>
            <div className="flex justify-center">
              <Image src={OnlineTutoring} alt="OnlineTutoring" className="w-full" priority />
            </div>
          </div>
        </div>
        <div className="lg:w-[45%] w-full py-4 md:py-16 px-4 md:px-8">
          <div className="md:px-6  md:py-8 rounded-4xl bg-white">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  )
}
