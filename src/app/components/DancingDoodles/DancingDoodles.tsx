import React from 'react'
import Image from 'next/image'
import DoodleRight from '../../../../public/assets/Images/dodle-right.webp'

export const DancingDoodles = ({ img, alt, delay, w, h, direction }: any) => {
  console.log('delay', delay)
  return (
    <div
      className={
        direction === 'up' ? 'dancing-doodle-up' : 'dancing-doodle-down'
      }
      // style={{ animationDelay: delay }}
    >
      <Image src={img} alt={alt} className="md:w-[80px] w-[40px]" />
    </div>
  )
}
