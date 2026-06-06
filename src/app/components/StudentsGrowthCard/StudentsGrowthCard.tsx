import React from 'react'
import { DancingDoodles } from '../DancingDoodles/DancingDoodles'
import DoodleRight from '../../../../public/assets/Images/dodle-right.webp'
import DoodleLeft from '../../../../public/assets/Images/dodleleft.webp'
import Rishi from '../../../../public/assets/Images/Rishi.png'
import Sloka from '../../../../public/assets/Images/Sloka.png'
import Adithya from '../../../../public/assets/Images/Addithya.png'

import Arrow from '../../../../public/assets/Images/arrow.png'
import Image from 'next/image'
export const StudentsGrowthCard = () => {
  const STUDENTD_DATA = [
    {
      name: 'Rishi',
      img: Rishi,
      subject: 'ICSE • Maths • Grade 10',
      before: '29',
      after: '80',
      type: 'mark',
      tag: '+51 Points',
    },
    {
      name: 'Sloka',
      img: Sloka,
      subject: 'IGCSE • Biology • Grade 9',
      before: 'E',
      after: 'B',
      type: 'grade',
      tag: 'Grade 1 → Grade 8',
    },
    {
      name: 'Aditya',
      img: Adithya,
      subject: 'British • Maths • Grade 10',
      before: '40%',
      after: '60%',
      type: 'percentage',
      tag: '+25 in One Term',
    },
  ]

  return (
    <div className="bg-[#FFFDF8]">
      <div className="max-w-360 md:mx-16 mx-4 py-16">
        <div className="flex flex-col  items-center justify-center mb-16">
          <span className="flex justify-center items-center text-center md:gap-4 gap-2">
            <DancingDoodles img={DoodleLeft} delay={-1} direction={'up'} />
            <h2 className="md:text-[2.5rem] text-[6vw] md:w-auto w-70 leading-[120%] font-bold flex items-center justify-center">
              Students who Moved the Grade
            </h2>
            <DancingDoodles img={DoodleRight} w={80} delay={-6} direction={'down'} />
          </span>
          <p className="md:text-[1.25rem] text-[4vw]">
            Across <span className="font-bold">Curricula</span>. Across{' '}
            <span className="font-bold">Subjects</span>. All in{' '}
            <span className="font-bold">UAE</span>.
          </p>
        </div>
        <div className="w-full flex md:flex-row flex-col gap-8 justify-center ">
          {STUDENTD_DATA?.map((data) => (
            <div className=" md:w-[33%] flex flex-col justify-start items-start rounded-2xl  min-h-50 shadow-[2px_2px_17.1px_0px_rgba(0,0,0,0.10)] p-4">
              <div className="w-full mb-6 flex gap-4 items-center justify-start">
                <div className="max-w-20 rounded-full overflow-hidden">
                  <Image src={data?.img} alt={'rishi'} className="w-full h-full" />
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-[1.6rem] leading-[100%] m-0 font-bold">{data?.name}</p>
                  <p className="text-[1.1rem] m-0 font-medium">{data?.subject}</p>
                </div>
              </div>
              <div className="flex gap-4 items-start justify-stretch text-[#3A4A6A]">
                <div className="flex flex-col justify-center items-center font-medium">
                  <p className="text-[2.2rem]   leading-[100%] m-0">{data?.before}</p>
                  <p>Before</p>
                </div>
                <div className="w-[15px] h-[25px] mt-2 ">
                  <Image src={Arrow} alt="arrow" className="w-full h-full" />
                </div>
                <div className="flex flex-col justify-center items-center font-medium">
                  <p className="text-[2.2rem] leading-[100%] m-0 font-bold text-[#00BF63]">
                    {data?.after}
                    <span className="font-medium text-[#3A4A6A] text-[1.25rem] leading-[100%]">
                      {data?.type == 'mark' ? '/100' : data?.type == 'grade' ? ' Grade' : ''}
                    </span>
                  </p>
                  <p>After</p>
                </div>
              </div>
              <div className="bg-[#2A51FF] p-2 rounded-full w-auto">
                <p className="text-white mb-0 px-1 font-medium">{data?.tag}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
