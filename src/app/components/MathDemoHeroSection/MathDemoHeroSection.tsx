import React from 'react'
import MathImage from '../../../../public/assets/Images/math-hero-card.webp'
import Image from 'next/image'
import Step1 from '../../../../public/assets/Images/lens.webp'
import Step2 from '../../../../public/assets/Images/profile.webp'
import Step3 from '../../../../public/assets/Images/recog.webp'


import RegistrationForm from '../RegistrationForm/RegistrationForm'
export default function MathDemoHeroSection() {
  return (
    <div className="w-full h-full md:py-8 ">
      <div className="w-full flex items-stretch md:flex-row flex-col">
        <div className="md:w-[50%] flex flex-col justify-between items-start md:gap-6 gap-2  bg-[#006CFF] md:rounded-l-[42px] overflow-hidden relative">
          <div className="w-full px-4 pt-8 flex flex-col md:items-center">
            <div className="md:w-full">
              <p className="mx-auto md:text-[2.5rem] w-full  md:leading-[170%] leading-[150%] text-[6vw] text-white font-bold text-center ">
                1-on-1 Tutoring to Make Your Child
                <span className="ml-2 text-black bg-[#FFF216] px-2 rounded-xl">
                  Excel in School
                </span>
              </p>
              {/* <p className="md:text-[2.5rem] text-[6vw]  text-[#FFF216] font-bold  text-center ">
                Excel in School
              </p> */}
            </div>
          </div>
          <Image
            src={MathImage}
            alt="hero"
            fetchPriority="high"
            className="md:w-full "
          />
          <div className="md:w-[90%] w-full md:p-4 p-2  absolute md:rounded-[42px] rounded-t-[42px] md:bottom-2.5 bottom-0 left-1/2 -translate-x-1/2 bg-[#163B82]">
            <h2 className="m-0 text-white md:text-[1.5rem] text-[4vw] text-center">
              3-Step Formula for A+ Success:
            </h2>

            <div className="w-full flex justify-around items-end text-[1rem] md:mt-2 mt-0">
              <div>
                <div className="flex flex-col items-center md:text-[1rem] text-[2.8vw] text-center leading-[110%] md:gap-4 gap-2 px-4 justify-end text-white md:h-20 h-15 font-semibold">
                  <Image src={Step1} alt="step-1" className="md:w-10 w-5" />
                  Find the Gap
                </div>
              </div>
              <div className="md:h-20 h-15 border-r border-white "></div>
              <div>
                <div className="flex flex-col items-center md:text-[1rem] text-[2.8vw] text-center  leading-[110%] md:gap-4 gap-2 px-4 justify-end text-white md:h-20 h-15 font-semibold">
                  <Image src={Step2} alt="step-2" className="md:w-10 w-5" />
                  Personalize the Plan
                </div>
              </div>
              <div className="md:h-20 h-15 border-r border-white "></div>

              <div>
                <div className="flex flex-col items-center md:text-[1rem] text-[2.8vw] text-center  leading-[110%] md:gap-4 gap-2 px-4 justify-end text-white md:h-20 h-15 font-semibold">
                  <Image src={Step3} alt="step-3" className="md:w-10 w-5" />
                  Prove the progress
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%] md:pt-8 pt-0 md:rounded-r-[42px] md:shadow-2xl border border-[#BBD3F4] flex items-start">
          <div className="w-full md:px-8">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  )
}
