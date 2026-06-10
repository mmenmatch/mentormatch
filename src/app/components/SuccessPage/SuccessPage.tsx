'use client'
import React, { useState } from 'react'
import { SuccessAnimation } from '../SuccessAnimation/SuccessAnimation'
import { useRouter } from 'next/navigation'
import { Modal } from '../Modal/Modal'

export const SuccessPage = () => {
  const router = useRouter()
  const [showModal, setShowModal] = useState(false)
  const closeFn = () => {
    setShowModal(false)
  }
  return (
    <div className="w-full h-full">
      <div className="success-bg bg-[#2B51FF] w-full h-[100vh]">
        <div className="max-w-360 mx-auto w-full h-full flex flex-col justify-end items-center p-4 md:p-8 ">
          <SuccessAnimation />
          <h1 className="text-[6vw] m-0 md:text-[2.8rem] font-bold text-white mb-4 md:mb-[1rem]">
            Thank You!
          </h1>
          <p className="text-[4vw] md:text-[1.2rem] text-[#e1e1e1] max-w-[28.1rem] leading-[130%] text-center">
            Our academic counsellor will get in touch with you within 24 hours!
          </p>
          <button
            onClick={() => setShowModal(!showModal)}
            className="py-4 md:px-8 mt-[1.7rem] bg-white text-[#2a51ff]  w-full md:min-w-[400px] max-w-[440px]  text-[4vw] font-bold  md:text-[1.2rem]  rounded-4xl"
          >
            Have Another Child? Book a Free Trial
          </button>
          <button
            onClick={() => {
              router.push('https://www.mentormatch.com/')
            }}
            className="py-4 px-8 border-2 mt-[1.7rem]  w-full md:min-w-[430px] max-w-[450px] text-white font-bold text-[4vw] md:text-[1.2rem] rounded-4xl"
          >
            Go Home
          </button>
        </div>
      </div>
      {showModal && <Modal closeFn={() => setShowModal(false)} />}
    </div>
  )
}
