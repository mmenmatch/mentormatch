'use client'

import React from 'react'
import { DancingDoodles } from '../DancingDoodles/DancingDoodles'
import DoodleRight from '../../../../public/assets/Images/dodle-right.webp'
import DoodleLeft from '../../../../public/assets/Images/dodleleft.webp'
import Rishi from '../../../../public/assets/Images/Rishi.png'
import Sloka from '../../../../public/assets/Images/Sloka.png'
import Adithya from '../../../../public/assets/Images/Addithya.png'
import Alia from '../../../../public/assets/Images/alia.webp'
import Ananya from '../../../../public/assets/Images/ananya.webp'
import Kabir from '../../../../public/assets/Images/kabir.webp'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import Arrow from '../../../../public/assets/Images/arrow.png'
import Image from 'next/image'


export const StudentsGrowthCard = () => {
  const STUDENT_DATA = [
    {
      name: 'Rishi',
      img: Rishi,
      subject: 'ICSE • Maths • Grade 10',
      before: '29',
      after: '80',
      type: 'mark',
      tag: '+51 Points',
    },
    {
      name: 'Sloka',
      img: Sloka,
      subject: 'IGCSE • Biology • Grade 9',
      before: 'E',
      after: 'B',
      type: 'grade',
      tag: 'Grade 1 → Grade 8',
    },
    {
      name: 'Aditya',
      img: Adithya,
      subject: 'British • Maths • Grade 10',
      before: '40%',
      after: '60%',
      type: 'percentage',
      tag: '+25 in One Term',
    },
    {
      name: 'Alia',
      img: Alia,
      subject: 'IBDP •Maths AAHL • Grade 12',
      before: 'D',
      after: 'A',
      type: 'grade',
      tag: '+4 IB Grades',
    },
    {
      name: 'Kabir',
      img: Kabir,
      subject: 'ICSE• Physics • Class 10',
      before: '38%',
      after: '74%',
      type: 'percentage',
      tag: '+36% one term',
    },
    {
      name: 'Aanya',
      img: Ananya,
      subject: 'CBSE • Maths • Class 8',
      before: '45%',
      after: '78%',
      type: 'percentage',
      tag: '+33% in one term',
    },
  ]

  return (
    // <div className="bg-[#FFFDF8]">
    //   <div className="max-w-360 mx-auto px-4 py-16">
    //     <div className="flex flex-col items-center justify-center mb-16">
    //       <span className="flex justify-center items-center text-center md:gap-4 gap-2">
    //         <DancingDoodles img={DoodleLeft} delay={-1} direction={'up'} />
    //         <h2 className="md:text-[2.5rem] text-[6vw] md:w-auto w-70 leading-[120%] font-bold flex items-center justify-center">
    //           Students who Moved the Grade
    //         </h2>
    //         <DancingDoodles img={DoodleRight} w={80} delay={-6} direction={'down'} />
    //       </span>
    //       <p className="md:text-[1.25rem] text-[4vw]">
    //         Across <span className="font-bold">Curricula</span>. Across{' '}
    //         <span className="font-bold">Subjects</span>. All in{' '}
    //         <span className="font-bold">UAE</span>.
    //       </p>
    //     </div>
    //     <div className="md:w-full w-auto flex md:flex-row flex-col gap-4 justify-center  ">
    //       <Swiper
    //         modules={[Navigation]}
    //         navigation
    //         slidesPerView={1}
    //         spaceBetween={12}
    //         breakpoints={{
    //           768: {
    //             slidesPerView: 2,
    //           },
    //           1024: {
    //             slidesPerView: 3,
    //           },
    //         }}
    //         className="py-8"
    //       >
    //         {STUDENT_DATA?.map((data, index) => (
    //           <SwiperSlide
    //             key={index}
    //             className="flex flex-col justify-start items-start rounded-2xl  min-h-50 shadow-[2px_2px_17.1px_0px_rgba(0,0,0,0.10)] p-4"
    //           >
    //             <div className="flex flex-col justify-start items-start  ">
    //               <div className="w-full mb-6 flex gap-4 items-center justify-start">
    //                 <div className="md:max-w-20 max-w-18 rounded-full overflow-hidden">
    //                   <Image src={data?.img} alt={'rishi'} className="w-full h-full" />
    //                 </div>
    //                 <div className="flex flex-col gap-2">
    //                   <p className="md:text-[1.6rem] text-[1.25rem] leading-[100%] m-0 font-bold">
    //                     {data?.name}
    //                   </p>
    //                   <p className="md:text-[1.1rem] text-[0.95rem]  m-0 font-medium">
    //                     {data?.subject}
    //                   </p>
    //                 </div>
    //               </div>
    //               <div className="flex gap-4 items-start justify-stretch text-[#3A4A6A]">
    //                 <div className="flex flex-col justify-start items-start font-medium">
    //                   <p className="text-[2.2rem]   leading-[100%] m-0">{data?.before}</p>
    //                   <p className="leading-[100%] m-0">Before</p>
    //                 </div>
    //                 <div className="w-3.75 h-6.25 mt-2  ">
    //                   <Image src={Arrow} alt="arrow" className="w-full h-full" />
    //                 </div>
    //                 <div className="flex flex-col justify-start items-start font-medium">
    //                   <p className="text-[2.2rem] leading-[100%] m-0 font-bold text-[#00BF63]">
    //                     {data?.after}
    //                     <span className="font-medium text-[#3A4A6A] text-[1.25rem] leading-[100%]">
    //                       {data?.type == 'mark' ? '/100' : data?.type == 'grade' ? ' Grade' : ''}
    //                     </span>
    //                   </p>
    //                   <p className="leading-[100%] m-0">After</p>
    //                 </div>
    //               </div>
    //               <div className="bg-[#2A51FF] p-2 rounded-full w-auto mt-4">
    //                 <p className="text-white mb-0 px-1 font-medium">{data?.tag}</p>
    //               </div>
    //             </div>{' '}
    //           </SwiperSlide>
    //         ))}
    //       </Swiper>
    //     </div>
    //   </div>
    // </div>
    <section className="bg-[#FFFDF8] overflow-hidden">
      <div className="max-w-360 mx-auto px-4 md:px-16 py-12 md:py-16">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center mb-2 md:mb-4">
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <DancingDoodles img={DoodleLeft} delay={-1} direction="up" />

            <h2 className="text-center text-[1.8rem] md:text-[2.5rem] font-bold leading-[120%]">
              Students who Moved the Grade
            </h2>

            <DancingDoodles img={DoodleRight} w={80} delay={-6} direction="down" />
          </div>

          {/* <p className="mt-3 text-center text-[0.95rem] md:text-[1.25rem]">
            Across <span className="font-bold">Curricula</span>. Across{' '}
            <span className="font-bold">Subjects</span>. All in{' '}
            <span className="font-bold">UAE</span>.
          </p> */}
        </div>

        {/* Swiper */}
        <div className="studentgrowth">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            spaceBetween={16}
            slidesPerView={1.1}
            autoplay={{
              delay: 3000, // 3 seconds per slide
              // disableOnInteraction: false, // keeps autoplaying after user swipes
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className=" py-4 md:py-8"
          >
            {STUDENT_DATA.map((data, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col rounded-2xl min-h-[220px] shadow-[2px_2px_17.1px_0px_rgba(0,0,0,0.10)] p-4 bg-white">
                  {/* Student Info */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={data.img}
                        alt={data.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xl md:text-[1.6rem] leading-none font-bold mb-2">
                        {data.name}
                      </p>

                      <p className="text-sm md:text-[1.1rem] font-medium text-gray-600">
                        {data.subject}
                      </p>
                    </div>
                  </div>

                  {/* Scores */}
                  <div className="flex gap-4 items-start text-[#3A4A6A]">
                    <div>
                      <p className="text-[2rem] md:text-[2.2rem] leading-none">{data.before}</p>
                      <p className="text-sm mt-1">Before</p>
                    </div>

                    <div className="w-4 h-6 mt-2">
                      <Image src={Arrow} alt="arrow" className="w-full h-full object-contain" />
                    </div>

                    <div>
                      <p className="text-[2rem] md:text-[2.2rem] leading-none font-bold text-[#00BF63]">
                        {data.after}

                        <span className="ml-1 font-medium text-[#3A4A6A] text-base md:text-[1.25rem]">
                          {data.type === 'mark' ? '/100' : data.type === 'grade' ? ' Grade' : ''}
                        </span>
                      </p>

                      <p className="text-sm mt-1">After</p>
                    </div>
                  </div>

                  {/* Tag */}
                  <div className="mt-4">
                    <span className="inline-flex bg-[#2A51FF] rounded-full px-3 py-2">
                      <span className="text-white text-sm md:text-base font-medium">
                        {data.tag}
                      </span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
