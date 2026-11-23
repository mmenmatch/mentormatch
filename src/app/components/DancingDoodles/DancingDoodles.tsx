import React from 'react'
import Image from '@/app/components/img'
import DoodleRight from '../../../../public/assets/Images/dodle-right.webp'

export const DancingDoodles = ({ img, alt, delay, w, h, direction }: any) => {
  console.log('delay', delay)
  return (
    <div
      className={direction === 'up' ? 'dancing-doodle-up' : 'dancing-doodle-down'}
      // style={{ animationDelay: delay }}
    >
      <Image src={img} alt={alt ?? 'doodle'} className="md:w-[100px] w-[60px]" />
    </div>
  )
}
