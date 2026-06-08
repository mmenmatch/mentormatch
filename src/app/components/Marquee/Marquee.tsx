import React from 'react'
import Marquee from 'react-fast-marquee'

export const MarqueeComponent = () => {
  const schools = ['Dubai', 'Repton', 'Gems', 'Kings', 'JESS']

  return (
    <div className="bg-[#EEF6FF]">
      <div className="max-w-360 mx-auto md:px-16 px-4 py-8 flex items-center md:gap-8 gap-2">
        <div className="tracking-widest md:text-[1.2rem] text-[3vw] text-[#3F4B7F] font-semibold whitespace-nowrap">
          TRUSTED BY PARENTS FROM
        </div>

        <div className="w-full flex md:justify-between items-center overflow-hidden">
          <Marquee speed={50} gradient={false}>
            {schools.map((school, index) => (
              <div
                key={index}
                className="w-[20px] md:w-[100px] text-[4vw] text-center text-[#3F4B7F]  flex justify-center items-center mx-12 md:text-[1.2rem] leading-[120%] text-[#3F4B7F] font-bold"
              >
                {school}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}
