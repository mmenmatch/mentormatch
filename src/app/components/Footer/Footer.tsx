'use client'
import React from 'react'
import Image from 'next/image'
import FooterTutor from '../../../../public/assets/Images/footer-tutor-image.webp'
import TutorLine from '../../../../public/assets/Images/tutor-line.webp'
import LeftSpark from '../../../../public/assets/Images/spark-pill-left.svg'
import RightSpark from '../../../../public/assets/Images/spark-pill-right.svg'
import YellowTick from '../../../../public/assets/Images/yellow-tick copy.svg'

export const Footer = () => {

  return (
    <div className="pt-12 md:pt-16 px-4 bg-[linear-gradient(180deg,_#006CFF_0%,_#014AAF_100%)]">
      <div className={`max-w-360 mx-auto`}>
        <div className="flex flex-col justify-center items-center gap-8">
          {/* <h2 className="md:w-[50%] m-0 mx-auto text-center md:text-[2.5rem] leading-[130%] text-[5vw] font-bold m-0  text-white">
            See Exactly Where The Grade is Being Lost In{' '}
            <span className="relative ml-1 inline-block">
              The First Session{' '}
              <Image src={TutorLine} alt="tutorline" className="absolute left-0 w-full bottom-0" />
            </span>
          </h2> */}
          <h2 className="md:w-[50%] m-0 mx-auto text-center md:text-[2.5rem] leading-[120%] md:leading-[150%] text-[4.8vw] font-bold m-0  text-white">
            Improve Your Child’s Grades.<br></br>
            <span>
              {' '}
              <Image src={LeftSpark} alt="left" className="w-[20px] md:w-[35px]" />
              <span className="bg-[#FFF116] text-black px-6 rounded-4xl mx-2">
                Start with a Free 1:1 Class.
              </span>
              <Image src={RightSpark} alt="left" className="w-[20px] md:w-[35px]" />
            </span>
          </h2>
          <div className="flex flex-col  gap-4 md:flex-row md:gap-8">
            <span className=" flex gap-2 justify-center items-center gap-2 ">
              <Image src={YellowTick} alt={'YellowTick'} width={30} />{' '}
              <p className="text-white text-[4vw] md:text-[1.1rem] font-semibold">
                A subject of your choice with a vetted mentor
              </p>
            </span>
            <span className="w-[2px] min-h-full bg-white"></span>
            <span className=" flex gap-2 justify-center items-center gap-2 ">
              <Image src={YellowTick} alt={'YellowTick'} width={30} />{' '}
              <p className="text-white text-[4vw] md:text-[1.1rem] font-semibold">
                A clear picture of your child’s learning gaps
              </p>
            </span>{' '}
            <span className="w-[2px] min-h-full bg-white"></span>
            <span className=" flex gap-2 justify-center items-center gap-2 ">
              <Image src={YellowTick} alt={'YellowTick'} width={30} />{' '}
              <p className="text-white text-[4vw] md:text-[1.1rem] font-semibold">
                A personalised plan to improve their grades{' '}
              </p>
            </span>
          </div>
          <div className="max-w-[300px]">
            <button
              type="submit"
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
              className="w-full md:min-w-62.5 min-w-40 md:text-[1rem] text-[0.95rem] py-3 px-4 bg-[#FFF116] text-black border-2 border-black rounded-full font-semibold shadow-[4px_4px_0px_black] active:shadow-[2px_2px_0px_black] active:translate-y-0.75
            "
            >
              Book a Free 1:1 Class →
            </button>{' '}
          </div>
          <div className="w-full flex justify-center ">
            <Image src={FooterTutor} alt="FooterTutor" className="w-full md:w-[50%]" />
          </div>
        </div>
        {/* <div className="md:w-[60%] w-full relative py-20 mx-auto bg-[linear-gradient(180deg,_#006CFF_0%,_#014AAF_100%)] py-8 rounded-4xl flex flex-col justify-center items-center gap-4 overflow-hidden">
          <Image
            src={FooterTutor}
            alt="FooterTutor"
            className=" md:block absolute left-0 bottom-0 md:w-[250px] w-[160px]"
          />
          <div className="md:text-[1.2rem] text-[4vw]"></div>
          <div className="max-w-[50%]">
            <button
              type="submit"
              onClick={() => {
                document.getElementById('cta')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }}
              className="w-full md:min-w-62.5 min-w-40 md:text-[1rem] text-[0.95rem] py-3 px-4 bg-[#FFF116] text-black border-2 border-black rounded-full font-semibold shadow-[4px_4px_0px_black] active:shadow-[2px_2px_0px_black] active:translate-y-0.75
            "
            >
              Book A Free Trial
            </button>{' '}
          </div>
          <Image
            src={FooterStudent}
            alt="FooterStudent"
            className=" md:block absolute right-0 bottom-0 md:w-[250px] w-[150px]"
          />
        </div> */}
      </div>
    </div>
  )
}
