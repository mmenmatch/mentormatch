'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import { useState, useEffect } from 'react'
import type { Country } from 'react-phone-number-input'

export const MarqueeComponent = () => {
  const uaeSchools = [
    'Nord Anglia',
    'Jumeirah College',
    'Cranleigh',
    'Gems Wellington',
    'Repton',
    'Safa Community School',
    '450+ UAE Schools',
  ]
  const indianSchools = [
    'Candor School',
    'GICLM School',
    'Adamas School',
    'Stonehill school',
    'Inventure Academy',
    'Dhirubhai Ambani School',
    '450+ Indian Schools',
  ]

  const [detectedCountry, setDetectedCountry] = useState<Country>('AE') // fallback

  useEffect(() => {
    fetch('https://ipinfo.io/json')
      .then((res) => res.json())
      .then((data: any) => {
        if (data?.country) {
          setDetectedCountry(data?.country as Country)
        }
      })
      .catch(() => {
        // silently fall back to 'IN'
      })
  }, [])

  let Schools = detectedCountry == 'IN' ? indianSchools : uaeSchools

  return (
    <div className="bg-[#EEF6FF]">
      <div className="max-w-360 mx-auto md:px-8 px-4 md:py-8 py-4  flex  items-center md:gap-8 gap-4">
        <div className="tracking-widest md:text-[1rem]  text-[0.65rem] text-[#3F4B7F] font-medium whitespace-nowrap">
          {/* whitespace-nowrap */}
          TRUSTED BY PARENTS FROM
        </div>

        <div className="w-full flex md:justify-between items-center overflow-hidden ">
          <Marquee speed={80} gradient={false} pauseOnHover>
            {Schools?.map((school, index) => (
              <div
                key={index}
                className=" md:w-auto text-[3vw] text-center text-[#3F4B7F]  flex justify-center items-center mx-12 md:text-[1rem] leading-[120%] text-[#3F4B7F] font-semibold"
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
