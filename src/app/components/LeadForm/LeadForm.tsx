import React from 'react'
import Image from 'next/image'
import LeadFormImage from '../../../../public/assets/Images/lead-form.webp'
import RegistrationForm from '../RegistrationForm/RegistrationForm'

export const LeadForm = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-360 mx-auto px-16">
        <div className="mx-auto  flex rounded-[42px] border-1 border-[#BBD3F4] overflow-hidden">
          <div className="w-[40%] ">
            <div className="w-full h-full flex items-end justify-center bg-gradient-to-b from-[#006CFF] to-[#006CFF] ">
              <Image src={LeadFormImage} alt="Lead form image" className="  " />
            </div>
          </div>
          <div className="w-[60%] px-8 pb-8">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  )
}
