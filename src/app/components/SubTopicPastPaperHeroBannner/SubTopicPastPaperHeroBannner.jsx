'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { PYQ_TOPIC_DATA } from '@/data/ibdp-pyq'
export const SubTopicPastPaperHeroBannner = () => {
  const pathname = usePathname()
  const splitPath = pathname?.split('/')[3]
  const topicPath = pathname?.split('/')[4]

  const paperNumber = pathname?.split('/')[5]
  // console.log('paperNumber', paperNumber)

  const findTopic = PYQ_TOPIC_DATA?.[splitPath]?.find((ele) => ele.link == topicPath)
  const findPage = findTopic?.papers?.find((ele) => ele?.link == paperNumber)
  const topicName = findTopic?.topic
  const numberOfQuestion = findTopic?.totalQuestions
  const paperCount = findTopic?.papers
  // console.log('splitPath', splitPath)
  // console.log('findTopic', findTopic)
  // console.log('paperCount', paperCount)
  if (!findPage) {
    return
  }
  return (
    <div className="w-full py-8 lg:py-24 bg-[linear-gradient(130deg,_#2A15FF_40%,_#04C1FC_100%)] pyp-student-main-page">
      <div className="w-full lg:max-w-[80rem] xl:max-w-[90rem] mx-auto lg:px-16 2xl:px-4  px-4  text-white ">
        <div className="flex flex-col items-start justify-center lg:w-[50%] gap-8  ">
          <p className=" text-[2.5vw] lg:text-[0.8rem] text-center tracking-[2px] font-bold bg-[#00BF63] px-4 py-2 rounded-4xl">
            Past Paper Questions
          </p>
          <h1 className=" text-[6vw] lg:text-[2.8rem] text-white leading-[130%] my-0">
            {topicName}
            <span className="relative inline-block px-2 text-black z-0">
              <span className="absolute ml-2 text-[3rem] inset-0 px-3 bg-[#FFF116] rounded-xl -rotate-2 -z-10"></span>
              Past Paper
            </span>{' '}
            Questions
          </h1>
          <p className="font-semibold text-[4vw] lg:text-[1.8rem] leading-[130%]">
            {numberOfQuestion} questions with answers and worked solutions, grouped by{' '}
          </p>
          <div className="flex">
            {paperCount?.map((topics, ind) => (
              <Link
                href={`/previous-year-question-papers/ib-dp-math/${splitPath}/${findTopic?.link}/${topics?.link}`}
                className={`flex mr-4 text-center  py-3 px-6 rounded-4xl text-black text-[3.25vw] lg:text-[1.25rem] font-bold shadow-[4px_4px_0px_black] ${topics?.link == paperNumber ? 'bg-[#FFF116]' : 'bg-white'}`}
                key={topics?.id}
              >
                Paper {ind + 1}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
