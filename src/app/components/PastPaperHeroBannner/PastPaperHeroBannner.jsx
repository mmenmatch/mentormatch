'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
export const PastPaperHeroBannner = () => {
  const pathname = usePathname()

  const splitPath = pathname?.split('/')[3]

  const IBDP_SPLITS = [
    { title: 'AA SL', link: 'aa-sl', id: 1 },
    { title: 'AA HL', link: 'aa-hl', id: 2 },
    { title: 'AI SL', link: 'ai-sl', id: 3 },
    { title: 'AI HL', link: 'ai-hl', id: 4 },
  ]

  const name = IBDP_SPLITS?.find((ele) => ele.link == splitPath)?.title

  console.log('Name', name)
  return (
    <div className="w-full py-8 lg:py-24 bg-[linear-gradient(130deg,_#2A15FF_40%,_#04C1FC_100%)] pyp-main-page">
      <div className="w-full lg:max-w-[80rem] xl:max-w-[90rem] mx-auto lg:px-16 2xl:px-4  px-4  text-white ">
        <div className="flex flex-col items-start justify-center lg:w-[50%] gap-4  ">
          <p className=" text-[2.5vw] lg:text-[0.8rem] text-center tracking-[2px] font-bold bg-[#00BF63] px-4 py-2 rounded-4xl">
            Past Paper Questions
          </p>
          <h1 className=" text-[6vw] lg:text-[2.8rem] text-white leading-[130%] my-0">
            IB Maths {name}
            <span className="relative inline-block px-2 text-black z-0">
              <span className="absolute ml-2 text-[3rem] inset-0 bg-[#FFF116] rounded-xl -rotate-2 -z-10"></span>
              Past Paper
            </span>{' '}
            Questions
          </h1>
          <p className="font-semibold text-[4vw] lg:text-[1.5rem] leading-[130%]">
            474 exam questions with answers and worked mark schema{' '}
          </p>
          <p className="text-[3.5vw] lg:text-[1rem] leading-[150%] font-medium">
            Organised by syllabus topic and by paper pick a topic, Choose paper 1 or paper 2, and
            filter by difficulty{' '}
          </p>
          <div className="flex rounded-4xl">
            {IBDP_SPLITS?.map((topics) => (
              <Link
                href={`/previous-year-question-papers/ib-dp-math/${topics?.link}`}
                className={`flex mr-4 text-center  py-2 px-4 rounded-4xl text-black text-[3.25vw] lg:text-[1.1rem] font-bold shadow-[4px_4px_0px_black] ${topics?.link === splitPath ? 'bg-[#FFF116]' : 'bg-white'}`}
                key={topics?.id}
              >
                {topics?.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
