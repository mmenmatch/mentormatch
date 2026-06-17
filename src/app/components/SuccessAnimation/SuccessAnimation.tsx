'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../../public/animations/success.json'

export const SuccessAnimation = ({ w = 'w-[300px]', h = 'h-[300px]' }: any) => {
  return (
    <div className={`${w} ${h}`}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  )
}
