import React from 'react'
import Image from 'next/image'
import TickeImage from '../../../../public/assets/Images/yellow-tick.svg'
import AppLogo from '../../../../public/assets/Images/apps-logo.webp'
import MentorMatchApp from '../../../../public/assets/Images/Mentormatch-App.webp'

export const ParentsApp = () => {
  const features = [
    'One app for every session, subject and progress',
    'Chat with the tutor directly for doubt solving',
    'Always know what’s left in your plan',
  ]
  return (
    <div className="w-full py-16">
      <div className="w-full max-w-[80rem] mx-auto  px-4 flex justify-center">
        <div className="lg:w-[70%] w-full bg-[linear-gradient(100deg,_#2A51FF_0%,_#0285FA_100%)]  rounded-4xl flex md:flex-row flex-col-reverse overflow-hidden md:overflow-visible  ">
          <div className="w-full lg:w-[40%] relative flex justify-center items-center">
            <p className="w-full md:w-[200px] text-center bg-[#163B82] overflow-hidden rounded-tl-4xl md:rounded-tl-none  p-2 text-white rounded-tr-4xl  rounded-bl-4xl absolute bottom-0 md:left-0 z-20 font-bold">
              Mentor Match <br></br>Parent App
            </p>
            <Image
              // height={500}
              src={MentorMatchApp}
              alt={'MentorMatchApp'}
              className=" md:absolute top-[-20px] left-5 z-10  w-[300px] "
            />
          </div>
          <div className="lg:w-[60%] w-full px-4 py-6 md:py-12 text-white flex flex-col gap-4">
            <p className="text-[6vw] md:text-[2rem] leading-[140%] font-bold">
              Your child's learning. Tracked effortlessly.
            </p>
            <div className="flex flex-col gap-4">
              {features?.map((ele, ind) => (
                <div key={ind + 1} className="flex gap-2 items-baseline">
                  <Image src={TickeImage} alt="tick-image" width={20} />
                  <p className="text-[4vw] md:text-[1rem]">{ele}</p>
                </div>
              ))}
            </div>
            <Image src={AppLogo} alt="tick-image" width={300} />
          </div>
        </div>
      </div>
    </div>
  )
}
