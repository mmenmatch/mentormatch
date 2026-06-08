import React from 'react'
import Image from 'next/image'
import GapImage from '../../../../public/assets/Images/GAP.webp'
import PersonalizeImage from '../../../../public/assets/Images/personalize2.webp'
import ScoreImage from '../../../../public/assets/Images/Score.webp'

export const GpsFrameWork = () => {
  const GAP_DATA = [
    {
      id: 1,
      title: 'Gap',
      description: "Our AI Diagnostic finds your child's exact gaps.",
      img: GapImage,
      color: '#023BF3',
    },
    {
      id: 2,
      title: 'Personalise',
      description:
        'We match your child with a master mentor for highly personalised 1-on-1 sessions - 2 times a week.',
      img: PersonalizeImage,
      color: '#006CFF',
    },
    {
      id: 3,
      title: 'Score',
      description:
        'Every month end, we test your child under real exam conditions. So you see exactly where their score stands.',
      img: ScoreImage,
      color: '#10C36C',
    },
  ]
  return (
    <div className="bg-[#EEF6FF]">
      <div className="max-w-360 py-12 md:px-16 px-4 mx-auto">
        <h2 className="md:text-[2.5rem] text-[6vw] font-bold text-center md:mb-12  mb-8 ">
          The GPS Framework™
        </h2>
        <div className="flex md:flex-row flex-col gap-8 justify-center items-center">
          {GAP_DATA?.map((ele) => (
            <div className="md:max-w-[30%] rounded-[12px] overflow-hidden">
              <div className="w-full  ">
                <Image
                  src={ele.img}
                  alt={ele.title}
                  className="w-full h-full min-h-[200px] object-cover"
                />
              </div>
              <div className="bg-white px-4 py-4 flex flex-col min-h-[150px] gap-4 rounded-[12px]  ">
                <p
                  style={{ color: ele.color }}
                  className={`font-bold text-[2rem] leading-[100%] m-0 `}
                >
                  {ele.title}
                </p>
                <p className="text-[1rem] m-0">{ele.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
