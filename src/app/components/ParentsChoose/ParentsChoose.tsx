'use client'
import React from 'react'
import Image from 'next/image'
import Parents1 from '../../../../public/assets/Images/pc-1.webp'
import Parents2 from '../../../../public/assets/Images/pc-2.webp'
import Parents3 from '../../../../public/assets/Images/pc-3.webp'
import Parents4 from '../../../../public/assets/Images/pc-4.webp'

import STEP1 from '../../../../public/assets/Images/verified-tutor.png'
import STEP2 from '../../../../public/assets/Images/graduation-cap.png'
import STEP3 from '../../../../public/assets/Images/calendar.png'
import STEP4 from '../../../../public/assets/Images/wallet.png'

import Trust1 from '../../../../public/assets/Images/shield-check.png'
import Trust2 from '../../../../public/assets/Images/expert-tutors.png'
import Trust3 from '../../../../public/assets/Images/lightning.png'

export const ParentsChoose = ({ type = '' }: { type?: any }) => {
  const PARENTS_DATA = [
    {
      name: STEP1,
      title: 'The same mentor, always.',
      description: 'Your child learns with the mentor from their first class, without switching.',
    },
    {
      name: STEP2,
      title: 'Tutors who know your curriculum.',
      description: `Learn with subject experts trained in the curriculum your child follows.`,
    },
    {
      name: STEP3,
      title: 'A schedule that fits your life.',
      description: `Reschedule with 24 hours’ notice. Emergencies are handled within 2 hours.`,
    },
    {
      name: STEP4,
      title: 'Unused sessions, refunded.',
      description: 'Get a refund for any sessions you haven’t taken, within 48 hours.',
    },
  ]

  const PARENTS_DATA_INDIA = [
    {
      name: STEP1,
      title: 'Same Tutor, Start to Finish',
      description: 'The tutor from your free demo is the tutor who continues.',
    },
    {
      name: STEP2,
      title: 'Curriculum Vetted Tutors',
      description: `Tutors are trained in the specific IB or IGCSE curriculum your child is learning.`,
    },
    {
      name: STEP3,
      title: 'Unused Sessions Refunded',
      description: `Any sessions you haven't taken are refunded within 48 hours.`,
    },
    {
      name: STEP4,
      title: 'Flexible Scheduling',
      description: 'Reschedule with 24-hour notice. Emergencies are handled within 2 hours.',
    },
  ]
  const TRUSTED_DATA = [
    { id: 1, title: 'Trusted by parents', image: Trust1 },
    { id: 2, title: 'Expert tutors', image: Trust2 },
    { id: 3, title: 'Built for real learning', image: Trust3 },
  ]
  const COUNTRY_TYPE = type == 'india' ? PARENTS_DATA_INDIA : PARENTS_DATA

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-360 md:px-16 px-4 mx-auto">
        {' '}
        <div className="flex flex-col  items-center justify-center mb-8 gap-2">
          <span className="flex justify-center items-center text-center md:gap-4 gap-8">
            {/* <h2 className="md:text-[2.5rem] m-0 text-[7vw] md:w-auto leading-[140%] font-bold flex items-center justify-center">
              Why choose us for 1:1 Online Tuition
            </h2> */}
            <h2 className="m-0 flex flex-wrap items-center justify-center gap-x-2 text-center text-[6vw] font-bold leading-[1.3] md:flex-nowrap md:text-[2.5rem]">
              <span>Why Parents & Kids</span>
              <span className="rounded bg-[#FFF116] px-2 py-1 leading-none text-black">
                Love Mentor Match
              </span>
            </h2>
          </span>
          {/* <p className="md:text-[1.25rem] text-[4vw]">
            Built Around Your Child & Your Family’s Time
          </p> */}
        </div>
        {/* <div className="md:w-full w-full flex  flex-col justify-center gap-4 items-center">
          {COUNTRY_TYPE?.map((data) => (
            <div className="flex md:items-center items-start  gap-4 md:w-220 bg-[#FEFEFE]">
              <span className="md:max-w-[60px] max-w-[30px]">
                <Image
                  src={data?.name}
                  alt="step"
                  className="md:min-w-auto min-w-[30px] w-full h-full object-contain"
                />
              </span>
              <div className="w-auto flex flex-col justify-center gap-2">
                <p className="m-0 text-black md:text-[1.25rem] text-[4vw] font-bold">
                  {data?.title}
                </p>
                <p className="m-0 md:text-[0.9rem] text-[3.5vw]  font-medium">
                  {data?.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}
        <div className="w-full flex flex-col md:flex-row flex-wrap justify-center gap-4">
          {COUNTRY_TYPE?.map((data, index) => (
            <div
              key={index}
              className="flex md:items-center items-start gap-4 w-full  lg:w-[calc(50%-8px)] bg-blue-50 p-4 rounded-2xl"
            >
              <span className="md:max-w-[60px] max-w-[30px] bg-blue-100 p-2 rounded-2xl">
                <Image
                  src={data?.name}
                  alt="step"
                  className="md:min-w-auto min-w-[30px] w-full h-full object-contain"
                />
              </span>
              <span className="h-full w-[2px] bg-blue-100"></span>
              <div className="flex-1 min-w-0 flex flex-col justify-center gap-2">
                <p className="m-0 text-black md:text-[1.25rem] text-[4vw] font-bold">
                  {data?.title}
                </p>
                <p className="m-0 md:text-[0.9rem] text-[3.5vw] font-medium">{data?.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-[200px] mt-8 mx-auto">
          {' '}
          <button
            type="submit"
            onClick={() => {
              document.getElementById('cta')?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
            className="w-full md:min-w-62.5 min-w-40 md:text-[1rem] text-[0.95rem] py-3 px-4 bg-[#FFF116] text-black border-2 border-black rounded-full font-semibold shadow-[4px_4px_0px_black] active:shadow-[2px_2px_0px_black] active:translate-y-0.75
            "
          >
            Book a Free 1:1 Class →
          </button>
        </div>
        <div className="w-full flex flex-row justify-center items-center mt-8 gap-2 md:gap-8">
          {TRUSTED_DATA?.map((ele: any) => (
            <span className="flex justify-center items-center gap-1">
              <Image src={ele?.image} alt={ele.title} className="w-[30px]" />
              <p className="text-[3.5vw] md:text-[1rem] leading-[120%] font-medium">{ele?.title}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
