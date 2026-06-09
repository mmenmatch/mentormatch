import React from 'react'
import Image from 'next/image'
import LeadFormImage from '../../../../public/assets/Images/teacher-form.webp'
import RegistrationForm from '../RegistrationForm/RegistrationForm'

export const LeadForm = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-360 mx-auto md:px-16">
        <div className="mx-auto  flex rounded-[42px] md:border-1 md:border-[#BBD3F4] overflow-hidden">
          <div className="md:w-[40%] md:block hidden">
            <div className="w-full h-full flex items-end justify-center bg-gradient-to-b from-[#006CFF] to-[#006CFF] ">
              <Image src={LeadFormImage} alt="Lead form image" className="  " />
            </div>
          </div>
          <div className="md:w-[60%] w-full md:px-8  md:pb-8">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  )
}
