'use client'
import React from 'react'
import Lottie from 'lottie-react'
import animationData from '../../../../public/animations/success.json'

export const SuccessAnimation = () => {
  return (
    <div className="w-[300px] h-[300px]">
      <Lottie animationData={animationData} loop={true} />
    </div>
  )
}
