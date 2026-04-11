import { StaticImageData } from 'next/image'
import Image from 'next/image'
import React from 'react'

type TagProps = {
  title: string,
  icon: StaticImageData
}

const Tag = ({ title, icon }: TagProps) => {
  return (
    <div className='flex items-center gap-2 border-2 border-[#DBDBDB] 2xl:px-2 2xl:py-2 px-1 py-1 rounded-full'>
      <div className='xl:w-7 xl:h-7 w-5 h-5 bg-[#006CFF] rounded-full flex items-center'>
        <Image src={ icon } alt="mentor match" className='w-full xl:h-4 h-3 object-contain' />
      </div>
      <p className='2xl:text-[1rem] text-[0.75rem] font-bold'>{ title }</p>
    </div>
  )
}

export default Tag