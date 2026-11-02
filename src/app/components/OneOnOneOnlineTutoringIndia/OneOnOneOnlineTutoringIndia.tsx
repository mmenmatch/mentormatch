'use client'
import Image from 'next/image'
import TutorLine from '../../../../public/assets/Images/tutor-line.webp'
import StepperFormIndia from '../StepperFormIndia/StepperFormIndia'
import GoogleTag from '../../../../public/assets/Images/google-tag.png'
import OnlineTutoring from '../../../../public/assets/Images/one-one-v3.webp'

export default function OneOnOneOnlineTutoringIndia() {
  return (
    <div>
      <div className="mx-auto flex bg-[linear-gradient(180deg,_#0285FA_-20.54%,_#006CFF_50.79%)]">
        <div className="max-w-360 w-full flex md:flex-row flex-col lg:gap-4 gap-8 mx-auto md:px-16 px-4 md:py-12 py-10 ">
          <div className="md:w-[55%] w-full text-white flex flex-col justify-center md:gap-6 gap-4">
            <h1 className="md:text-[2.5rem] m-0 text-[6.5vw] leading-[150%] font-bold">
              <span className="w-auto bg-[#FFF116] leading-[100%] text-black px-2 rounded-sm">
                {' '}
                1:1 Online Tuition
              </span>{' '}
              That Actually Improves
              <span className="relative ml-2  inline-block">
                IB & IGCSE Grades
                <Image
                  src={TutorLine}
                  alt="tutorline"
                  className="absolute left-0 w-full bottom-0"
                />
              </span>
            </h1>
            <p className="md:text-[1rem] text-[4vw] leading-[130%]  font-medium ">
              Personalised 1:1 Maths, Physics and Science tuition for IB and IGCSE students. Learn
              with curriculum-trained tutors and see measurable progress. Your first class is free.
            </p>
            <div className="md:w-[100%] w-full relative flex justify-end items-end">
              <Image
                src={OnlineTutoring}
                alt="Online maths tutor session with Mentor Match"
                className="lg:w-full w-[95%] mx-auto h-full"
                fetchPriority="high"
              />
            </div>
          </div>
          <div className="md:w-[50%] flex flex-col justify-center gap-4 items-center ">
            <StepperFormIndia />
            <div className="w-full flex gap-8 justify-center items-center">
              <div className="w-50 ">
                <Image src={GoogleTag} alt="hero" loading="lazy" />
              </div>
              {/* <div className=" flex items-center gap-1 justify-center">
                <Image
                  src={HeroStudentAvatar}
                  alt="hero"
                  loading="lazy"
                  className="2xl:w-30 w-25"
                />
                <h2 className="text-white text-[1rem] m-0">6000+ Students</h2>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
