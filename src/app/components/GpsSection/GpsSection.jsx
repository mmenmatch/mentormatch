import React from 'react'
import Image from 'next/image'
import GAP from '../../../../public/assets/Images/Gap-Image.webp'
import Personalise from '../../../../public/assets/Images/personalise.webp'
import Score from '../../../../public/assets/Images/Score.webp'

export const GpsSection = () => {
  const gpsData = [
    {
      id: 1,
      count: '01',
      title: 'Gap',
      subtitle: 'AI Diagnostic & Assessment',
      bottomText: 'We pinpoint the exact concept your child is stuck on, not just the topic.',
      posterImage: GAP,
      video: 'https://dev.mentormatch.com/Gap.mp4',
      color: '#023BF3',
    },
    {
      id: 2,
      count: '02',
      title: 'Personalise',
      subtitle: 'Weekly 1:1 sessions',
      bottomText: 'Live online home tuition built around that gap and their real school syllabus.',
      posterImage: Personalise,
      video: 'https://dev.mentormatch.com/personalise.mp4',
      color: '#006CFF',
    },
    {
      id: 3,
      count: '03',
      title: 'Score',
      subtitle: 'Mock Tests & Reports',
      bottomText: 'Invigilated tests every month, so you see progress in the data.',
      posterImage: Score,
      video: 'https://dev.mentormatch.com/score.mp4',
      color: '#00BF63',
    },
  ]
  return (
    <div className="w-full max-w-[90rem] lg:px-16 lg:py-16 px-4 py-8 mx-auto">
      <div className=" w-full flex flex-col justify-center gap-4 text-center mb-8">
        <p className="lg:text-[2.5rem] text-[7vw] leading-[120%] font-bold">
          Our <span className="text-[#023BF3]">G</span>
          <span className="text-[#006FFE]">P</span>
          <span className="text-[#00BF63]">S</span> Framework™ Finds the Gap
        </p>
        <p className="lg:text-[1.1rem] text-[4vw] leading-[140%] ">
          We find your child's exact gap, personalise the intervention, and score the progress
        </p>
      </div>
      <div className="gps-card-wrapper w-full flex md:flex-row flex-col gap-8">
        {gpsData?.map((ele) => (
          <div className="main-gps-card lg:w-[33%] w-full flex flex-col gap-4">
            <div className="gps-card p-4 flex flex-col gap-4 rounded-4xl border-[#EEF6FF] border shadow-lg overflow-hidden ">
              {/* <Image src={GAP} alt="Gap" /> */}
              <video
                width="100%"
                height="240"
                poster={ele.posterImage}
                autoPlay
                muted
                loop
                playsInline
                className="rounded-3xl"
              >
                <source src={ele.video} type="video/mp4" />
              </video>
              <div className="p-2 rounded-4xl bg-[#EEF6FF] flex gap-4 items-center ">
                <p
                  className={`bg-[${ele.color}] text-white p-2 md:text-[1.2rem] text-[4vw] font-bold rounded-4xl`}
                >
                  {' '}
                  <span className="text-white/60 ">{ele.count}</span> {ele.title}
                </p>
                <p className="md:text-[1.2rem] text-[4vw]">{ele.subtitle}</p>
              </div>
            </div>
            <p className="text-center md:text-[1rem] text-[4vw] leading-[140%]">{ele.bottomText}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
