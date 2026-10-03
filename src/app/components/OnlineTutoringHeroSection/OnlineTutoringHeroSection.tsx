import React from 'react'
import Image from 'next/image'
import OnlineTutoring from '../../../../public/assets/Images/OnlineTutoring.webp'
import GoogleRating from '../../../../public/assets/Images/google-rating.png'

export const OnlineTutoringHeroSection = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col">
      <div className="lg:w-[60%] w-full py-16 md:px-8 px-4 bg-[linear-gradient(180deg,_#2A51FF_0%,_#0285FA_100%)] flex justify-center">
        <div className="flex flex-col  justify-start gap-4 items-baseline">
          <div className="border border-white bg-white/20 w-auto p-2 rounded-4xl">
            <Image src={GoogleRating} alt="OnlineTutoring" className="w-[140px]" />
          </div>

          <p className="text-white md:text-[2.5rem] text-[6vw] leading-[150%] font-bold">
            Expert{' '}
            <span className="bg-[#FFF116] text-black px-2 rounded leading-[80%]">
              {' '}
              1-on-1 Online
            </span>{' '}
            Maths <br></br>& Science Tutoring
          </p>
          <p className="text-white md:text-[1.2rem] md:w-[70%] text-[4vw] leading-[150%] ">
            Get a private tutor matched to your child's curriculum and learning style. One dedicated
            tutor online who stays with them all year.
          </p>
          <div className="flex justify-center">
            <Image src={OnlineTutoring} alt="OnlineTutoring" width={600} priority />
          </div>
        </div>
      </div>
      <div className="lg:w-[40%] w-full bg-[#FFF6ED] py-16 px-8">
        <p className="text-[2.5rem] leading-[120%] text-center font-bold">
          {' '}
          Book a FREE Online <br></br> Trial Class
        </p>
      </div>
    </div>
  )
}
