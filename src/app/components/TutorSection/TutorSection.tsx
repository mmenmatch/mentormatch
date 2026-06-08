import React from 'react'
import Image from 'next/image'
import Flight from '../../../../public/assets/Images/flight.webp'
import Heart from '../../../../public/assets/Images/heart copy.webp'
import Star from '../../../../public/assets/Images/star.webp'
import Leaf from '../../../../public/assets/Images/leaf.webp'
import Tutor from '../../../../public/assets/Images/rohit.webp'
import Khusbhu from '../../../../public/assets/Images/khusbhu.webp'
import Ratings from '../../../../public/assets/Images/rating.webp'
import ManMenmonics from '../../../../public/assets/Images/man-mnemonics.webp'
import WomManMenmonics from '../../../../public/assets/Images/women-mnemonics.webp.webp'
import TutorLine from '../../../../public/assets/Images/tutor-line.webp'
const TUTOR_DATA = [
  {
    id: 1,
    tutorName: 'Rohit Satidasani',
    tutorImg: Tutor,
    name: 'nidhi suresh',
    reviewCount: 4,
    tutorGender: 'M',
    reviewTagColor: '#78909C',
    review:
      'Mentor Match has been a great support for my son’s maths learning journey. His tutor, Rohit Satidasani has been extremely sincere, patient and dedicated throughout. He always takes the time to answer our questions and has made tremendous effort towards my child’s progress and confidence',
  },
  {
    id: 2,
    tutorName: 'Khushbu',
    tutorImg: Khusbhu,
    name: 'Zahra Shaikh',
    reviewCount: 4,
    tutorGender: 'F',
    reviewTagColor: '#0097A7',
    review:
      'Teacher: Anupama RoychoudhuryCourse: Physics AS LevelTeaches Concepts extremely well and allows students to be comfortable whilst asking questions and overall during the session.',
  },
]

export const TutorSection = () => {
  return (
    <div className="bg-[#006CFF] py-16">
      {' '}
      <div className="max-w-360 mx-auto md:px-16 px-4 flex flex-col justify-center items-center relative">
        <Image
          src={Flight}
          alt="flight"
          className="md:w-25 w-12 absolute
        md:right-50 right-0
          top-0
        "
        />
        <Image
          src={Heart}
          alt="flight"
          className="md:w-20 w-10 absolute
          md:left-50 left-0
          top-0
        "
        />{' '}
        <Image
          src={Leaf}
          alt="flight"
          className="md:w-20 w-10 absolute
          md:right-25 right-5
          top-10
        "
        />{' '}
        <Image
          src={Star}
          alt="flight"
          className="md:w-20 w-10 absolute
          md:left-25 left-5
          top-10
        "
        />
        <h2 className="text-[6vw] md:text-[2.5rem] text-white max-w-165 leading-[130%] text-center">
          What{' '}
          <span className="relative inline-block">
            Parents & Students{' '}
            <Image src={TutorLine} alt="tutorline" className="absolute left-0 w-full bottom-0" />
          </span>
          Say About Our Mentor Match Tutors
        </h2>
        <div className="w-full  mt-8 flex md:flex-row flex-col justify-center items-center gap-8">
          {TUTOR_DATA?.map((data) => (
            <div className="md:w-[45%] w-full rounded-4xl px-4 py-6 bg-white flex md:flex-row flex-col gap-4">
              <div className="md:w-70 flex flex-col gap-2">
                <div className="relative">
                  <div className="md:tutor-card">
                    <Image src={data?.tutorImg} alt="tutor" className="object-contain" />{' '}
                  </div>
                  <Image
                    src={data?.tutorGender == 'M' ? ManMenmonics : WomManMenmonics}
                    alt="tutor"
                    className="object-contain md:w-[40px] w-[70px] absolute md:bottom-0 bottom-2 md:right-1 right-6"
                  />
                </div>
                <p className="m-0 text-center p-2 rounded-4xl font-semibold bg-[#00BF63] text-white text-[1rem] w-full">
                  {data?.tutorName}
                </p>
              </div>
              <div className="w-full h-full">
                <div className="w-full flex flex-col items-start gap-2">
                  <div className="flex items-end gap-2">
                    <p
                      style={{ background: data?.reviewTagColor }}
                      className="m-0 w-[50px] h-[50px] p-2 text-center  flex justify-center items-center rounded-full text-white text-[1.5rem] "
                    >
                      {data?.name?.toUpperCase().charAt(0)}
                    </p>
                    <div className="flex flex-col gap-[2px]">
                      <p className="text-[1rem] font-medium">{data?.name}</p>
                      <p className="text-[0.85rem] text-[#00000080]">4 reviews</p>
                    </div>
                  </div>
                  <div className="w-[120px] pl-2">
                    <Image src={Ratings} alt="rating" />
                  </div>
                  <p className="text-[0.85rem] font-medium">{data?.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
