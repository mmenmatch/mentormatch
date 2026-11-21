'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { PYQ_TOPIC_DATA } from '../../../data/ibdp-pyq'
import Link from 'next/link'

export const PastPaperTopicSection = () => {
  const pathname = usePathname()
  const splitPath = pathname?.split('/')[3]

  return (
    <div className="py-8 lg:py-16">
      <div className="w-full lg:max-w-[80rem] xl:max-w-[90rem] mx-auto lg:px-16 2xl:px-4  px-4  text-white ">
        <h2 className="text-black text-[7vw] lg:text-[2.5rem] font-bold">Browse by topics</h2>
        <div className="w-full mt-8 flex flex-row flex-wrap gap-4 ">
          {PYQ_TOPIC_DATA[splitPath]?.map((ele, index) => (
            <Link
              href={`/previous-year-question-papers/ib-dp-math/${splitPath}/${ele?.link}`}
              className="w-full lg:w-[32%] px-4 py-4  border text-black border-[#d9e2f4] rounded-2xl flex flex-col gap-4"
              key={ele?.id}
            >
              <div className="flex gap-2 items-center">
                <p className="bg-[var(--secondary)] font-bold px-4 py-3 text-white text-[1.25rem] rounded ">
                  {index + 1}
                </p>
                <p className="text-[1.1rem] font-semibold text-[var(--primary)]">
                  Topic {index + 1}
                </p>
              </div>
              <div className="flex flex-col gap-16">
                <div className="mt-2 flex flex-col gap-3">
                  <p className="text-black font-bold text-[1.5rem] leading-[120%]">{ele?.topic}</p>
                  {/* <p className="text-[0.9rem] font-medium text-gray-500">{ele?.descriptions}</p> */}
                </div>
                <div className="flex gap-4">
                  {ele?.papers?.map((paper, index) => (
                    <p className="bg-[#d9e2f4] px-3 py-2 font-bold text-[var(--darkblue)] rounded">
                      Paper {index + 1}
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#d9e2f4] rounded-4xl"></div>
              <p className="text-[0.9rem] font-semibold text-[var(--primary)]">
                {ele?.totalQuestions} questions →
              </p>
            </Link>
          ))}
          <div className="pyp-bottom-page w-full lg:w-[32%] bg-[var(--primary)] px-4 py-8  border text-black border-[#d9e2f4] rounded-2xl flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4">
              {' '}
              <p className="text-white font-bold text-[2rem] leading-[120%]">
                Not sure where to{' '}
                <span className="relative inline-block px-2 text-black z-0">
                  <span className="absolute text-[3rem] inset-0 bg-[#FFF116] rounded-xl -rotate-2 -z-10"></span>
                  Start{' '}
                </span>{' '}
              </p>
              <p className="text-white leading-[120%] text-[1rem] font-medium">
                An IB Maths tutor can find the gaps and set the right question for you{' '}
              </p>
            </div>
            <div className="">
              <button
                type="submit"
                onClick={() => {
                  document.getElementById('cta')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
                className="md:text-[1rem] text-[0.8rem] md:py-3 md:px-4 py-2 px-2 bg-[#FFF116] text-black border-2 border-black rounded-4xl font-semibold shadow-[4px_4px_0px_black] active:shadow-[2px_2px_0px_black] active:translate-y-0.75
            "
              >
                Book A Free Trial Class
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

