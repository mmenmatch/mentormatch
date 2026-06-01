import React from 'react'
import MathImage from '../../../../public/assets/Images/math.webp'
import Image from 'next/image'
import { Form } from '../Form/Form'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
export default function MathDemoHeroSection() {
  return (
    <div className="w-full h-full md:py-8 ">
      <div className="w-full flex items-stretch md:flex-row flex-col">
        <div className="md:w-[50%] flex flex-col items-center md:gap-6 gap-2 px-4  bg-[#2B23FF] md:rounded-l-xl py-12">
          <div className="flex flex-col items-center md:gap-3 ">
            <p className="md:text-[2rem] text-[6vw] text-white font-normal text-center ">
              We Make your Kid A{' '}
            </p>
            <p className="md:text-[2rem] text-[6vw]  text-[#FFF116] font-bold  ">
              Problem solver
            </p>
          </div>
          <Image
            src={MathImage}
            alt="hero"
            loading="lazy"
            className="md:w-80 w-50 mb-4"
          />
          <div className="flex flex-col items-center md:gap-3 ">
            <p className="md:text-[2rem] text-[6vw]  text-[#FFF116] font-bold m-0">
              Math Program
            </p>
            <h2 className="md:text-[2rem] text-[6vw]  text-[white] font-medium text-center m-0">
              For Grade 6 - 12
            </h2>
          </div>
          <div className="w-full flex justify-around text-[1rem] mt-4">
            <div>
              <div className="flex flex-col items-center px-4 justify-end text-white h-20 ">
                <span>Build</span>
                <span>Confidence</span>{' '}
              </div>
            </div>
            <div className="h-20 border-r border-white border-dashed"></div>
            <div>
              <div className="flex flex-col items-center px-4 justify-end text-white h-20">
                <span>Shape</span>
                <span>Personality</span>{' '}
              </div>
            </div>
            <div className="h-20 border-r border-white border-dashed"></div>

            <div>
              <div className="flex flex-col items-center px-4 justify-end text-white h-20">
                <span>Strong</span>
                <span>Maths</span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[50%]  md:rounded-r-xl md:shadow-2xl border border-gray-200 flex ">
          <div className="w-full md:px-8">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  )
}
