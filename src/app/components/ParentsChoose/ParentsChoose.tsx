import React from 'react'
import Image from 'next/image'
import Parents1 from '../../../../public/assets/Images/parent-1.png'
import Parents2 from '../../../../public/assets/Images/parent-2.png'
import Parents3 from '../../../../public/assets/Images/parent-3.png'

export const ParentsChoose = () => {
  const PARENTS_DATA = [
    {
      name: Parents1,
      title: 'Same Tutor, Start to Finish',
      description:
        'The tutor from your free demo is the tutor who continues. No switching, no restarting the relationship.',
    },
    {
      name: Parents2,
      title: 'Curriculum Trained Tutors',
      description: `Not just subject experts. Tutors trained in the specific curricula your child is sitting: IGCSE, A- Level, IB or American.
         We accept fewer than 2% of tutors who apply.`,
    },
    {
      name: Parents3,
      title: 'Unused Sessions Fully Refunded',
      description:
        'Any sessions you haven’t taken are refunded. clearly stated on our website. Test before you fully commit.',
    },
  ]

  return (
    <div className="py-12">
      <div className="max-w-360 md:px-16 px-4 mx-auto">
        {' '}
        <div className="flex flex-col  items-center justify-center mb-8 gap-2">
          <span className="flex justify-center items-center text-center md:gap-4 gap-8">
            <h2 className="md:text-[2.5rem] text-[6vw] md:w-auto w-70 leading-[120%] font-bold flex items-center justify-center">
              Why Parents Choose Us
            </h2>
          </span>
          <p className="md:text-[1.25rem] text-[4vw]">
            Built Around Your Child & Your Family’s Time
          </p>
        </div>
        <div className="md:w-full w-full flex flex-col justify-center gap-4 items-center">
          {PARENTS_DATA?.map((data) => (
            <div className="flex md:items-center items-start  gap-4 md:w-220 ">
              <span className="md:max-w-[60px] max-w-[30px]">
                <Image src={data?.name} alt="step" className="w-full h-full object-contain" />
              </span>
              <div className="w-auto flex flex-col justify-center gap-2">
                <p className="m-0 text-black md:text-[1.25rem] text-[4vw] font-bold">
                  {data?.title}
                </p>
                <p className="m-0 md:text-[0.9rem] text-[3.5vw]  font-medium">
                  {data?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
