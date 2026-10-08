import React from 'react'
import Image from 'next/image'
import Vivek from '../../../../public/assets/Images/vivek-trained-tutor.webp'
import Amit from '../../../../public/assets/Images/amit.webp'
import Anupama from '../../../../public/assets/Images/anupama.webp'
import Chaima from '../../../../public/assets/Images/chaima.webp'
import Manushi from '../../../../public/assets/Images/manushi.webp'
import Date from '../../../../public/assets/Images/Date.webp'
import Book from '../../../../public/assets/Images/Book.webp'
import BlueTick from '../../../../public/assets/Images/tick-blue.webp'

import Star from '../../../../public/assets/Images/tutor-green-start.png'
import Marquee from 'react-fast-marquee'

export const TrainedTutor = () => {
  const TrainTutorData = [
    {
      id: 1,
      name: 'Vivek Vishwanathan',
      subAndCur: ['Math', 'IB', 'IGCSE'],
      time: '4.9 · 46 hrs taught',
      img: Vivek,
    },
    {
      id: 2,
      name: 'Manushi Sharma',
      subAndCur: ['Math', 'IGCSE'],
      time: '4.7 · 52 hrs taught',
      img: Manushi,
    },
    {
      id: 3,
      name: 'Chaima Dhaflaoui',
      subAndCur: ['English', 'Common Core'],
      time: '5.0 · 38 hrs taught',
      img: Chaima,
    },
    {
      id: 4,
      name: 'Amit Pobadora',
      subAndCur: ['Coding', 'IB'],
      time: '4.9 · 27 hrs taught',
      img: Amit,
    },
    {
      id: 5,
      name: 'Anupama Roychoudhury',
      subAndCur: ['Science', 'IB'],
      time: '4.9 · 70 hrs taught',
      img: Anupama,
    },
  ]
  const iconData = [
    {
      id: 1,
      img: Date,
      title: 'Flexible Scheduling to fit ',
      subtitle: ' your family’s needs.',
    },
    {
      id: 2,
      img: Book,
      title: 'Tutor’s specialized in IB, IGCSE,',
      subtitle: 'AP, A-Levels, CBSE & ICSE',
    },
    ,
    {
      id: 3,
      img: BlueTick,
      title: 'Minimum 5+ Years of ',
      subtitle: 'teaching experience.',
    },
  ]
  return (
    <div className="w-full lg:py-16 ">
      <div className="w-full md:w-[80rem] mx-auto bg-[#EFF7FF] py-12 lg:rounded-4xl flex flex-col justify-center items-center gap-8 px-4 overflow-hidden ">
        <div className="flex flex-col justify-center items-center gap-6 ">
          <p className=" text-[6vw] lg:text-[2.5rem] text-center leading-[150%] font-bold text-[#0F1F3D]">
            Meet Our Trained Tutors. Loved by Kids.
          </p>
          <p className="text-[4vw] lg:text-[1rem]  text-[#0F1F3D]  mx-auto text-center leading-[150%]">
            Hand picked private tutors for math, physics, science and english,<br></br> matched to
            your child's curriculum.
          </p>
        </div>
        <Marquee speed={80} gradient={false} pauseOnHover>
          <div className="w-full flex flex-row over]">
            {TrainTutorData?.map((ele) => (
              <div className="min-w-[300px] rounded-2xl overflow-hidden ml-8" key={ele.id}>
                <div className="flex bg-[#006CFF] justify-center ">
                  <Image src={ele.img} alt={ele.name} className="w-[200px]" />
                </div>
                <div className="bg-white p-4 flex flex-col justify-start items-start font-semibold gap-2">
                  <p className="text-[1rem]">{ele.name}</p>
                  <div className="flex flex-row gap-4">
                    {ele.subAndCur?.map((ele) => (
                      <p className="bg-[#FFF899] text-black text-[0.8rem] rounded-4xl w-auto px-3 py-1">
                        {ele}
                      </p>
                    ))}
                  </div>

                  <div className="flex gap-2 items-center">
                    <Image src={Star} alt="star" />
                    <p className="text-[#163B82]">{ele.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
        <div className="w-full flex md:flex-row flex-col justify-center gap-4 ">
          {iconData?.map((ele) => (
            <div
              className="w-full md:max-w-[28%] flex gap-4 bg-white justify-start items-center p-2 rounded-2xl"
              key={ele.id}
            >
              <Image src={ele.img} alt={ele.id} width={50} />
              <div className="flex flex-col ">
                <p className="text-[1rem] leading-[150%] ">{ele.title}</p>
                <p className="text-[1rem]  leading-[150%]  ">{ele.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
