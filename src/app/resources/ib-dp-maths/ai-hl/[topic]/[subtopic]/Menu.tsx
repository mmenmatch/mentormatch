'use client'
import Image from 'next/image'
import List from '../../../../../../../public/assets/Images/burger-bar.png'
import { useState } from 'react'
import { ResourceNavigation } from '@/app/components/ResourceNavigation/ResourceNavigation'
import { findSubtopic, topics } from '../../../../../../data/ai-hl'
import { ResourceBanner2 } from '@/app/components/ResourceBanner2/ResourceBanner'
import Link from 'next/link'

export const Menu = ({
  title,
  description,
  pageData,
  topicSlug,
  subtopicSlug,
  subtopic,
  topic,
}: any) => {
  const [showNavBar, setShowNavBar] = useState(false)
  return (
    <>
      {showNavBar && (
        <div className="min-h-[100vh] lg:hidden ">
          <ResourceNavigation data={topics} type="aa-sl" />{' '}
        </div>
      )}
      {!showNavBar && (
        <div className=" lg:hidden">
          <nav aria-label="Breadcrumb" className="lg:mb-6 text-md text-slate-500">
            <ol className="flex flex-wrap items-center lg:pl-3 pl-3 pt-4 gap-2">
              <li>
                <Link href="/resources/ib-dp-maths/aa-sl" className="hover:text-blue-700">
                  AASL Resources
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link
                  href={`/resources/ib-dp-maths/aa-sl/${topic.slug}`}
                  className="hover:text-blue-700"
                >
                  {topic.title}
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li className="font-bold text-slate-900">{subtopic.title}</li>
            </ol>
          </nav>
          <ResourceBanner2 title={title} description={description} />
          <div className="lg:px-8 px-4 py-6" id={'topics'}>
            <h1 className="lg:text-[1.5rem] text-[5vw] m-0 mb-0 font-bold text-black flex flex-col">
              Important Questions & Answers
            </h1>
            <p className="lg:text-[1.1rem] text-[4vw] lg:leading-8 leading-6 mb-4 text-gray-500 font-medium">
              Attempt each question first. Then compare your method with the worked solution, step
              by step.
            </p>
            <div className=" w-full flex flex-col gap-4 py-4">
              <span className="flex  gap-8 border-b-3 border-[#006CFF] items-center pb-2 mt-4">
                {' '}
                <p className="font-bold lg:text-[1.5rem] text-[4.5vw]">
                  {pageData?.[topicSlug]?.title}
                </p>
                <p className="font-bold lg:text-[0.9rem] text-[3vw] bg-[#006CFF]/10 text-[#006CFF] py-0.5 px-4 rounded-4xl  ">
                  {' '}
                  {pageData?.[topicSlug]?.[subtopicSlug]?.length} Questions
                </p>
              </span>

              <div className="relative flex flex-col gap-4 ">
                {pageData?.[topicSlug]?.[subtopicSlug]?.map((subele: any, ind: any) => (
                  <div
                    key={subele?.id}
                    className="p-4 border bg-white border-gray-200 w-full rounded-2xl flex flex-col gap-4"
                  >
                    <span className="flex items-baseline">
                      {' '}
                      <p className=" text-nowrap font-semibold text-[1rem] bg-[#006CFF] text-white py-0.5 px-2 rounded-4xl ">
                        Q {ind + 1}
                      </p>
                      <p className="font-semibold  text-[3vw] lg:text-[1rem] text-black py-0.5 px-2 rounded-4xl leading-5">
                        {' '}
                        {subele?.question}
                      </p>
                      <p
                        className={`hidden lg:block font-semibold text-[0.8rem] px-4 ${subele?.type == 'Easy' ? 'bg-green-100 text-[#03BF62]' : subele?.type == 'Medium' ? 'bg-orange-100 text-[#FFB400]' : subele?.type == 'Hard' ? ' bg-red-100 text-red-600' : ''}   py-0.5 px-2 rounded-4xl`}
                      >
                        {' '}
                        {subele?.type}
                      </p>
                    </span>
                    <div className="flex flex-col">
                      <span className="flex flex-col py-4 border-t-2 border-dashed border-gray-300 gap-2 ">
                        <p className="min-w-[140px] font-semibold  text-[3vw] lg:text-[1rem] text-[#006CFF] py-0.5  rounded-4xl">
                          Worked solution:
                        </p>
                        <p className="font-semibold text-[3vw] lg:text-[1rem] text-black py-0.5 rounded-4xl leading-5">
                          {' '}
                          {subele?.explaination}
                        </p>
                      </span>
                      <div className="flex justify-between flex-col items-baseline">
                        <span className="flex gap-2  ">
                          <p className="font-semibold text-[3vw] lg:text-[1rem] text-[#03BF62] py-0.5  rounded-4xl">
                            Answer:
                          </p>
                          <p className="font-bold  text-[3vw] lg:text-[1rem] text-[#03BF62] py-0.5 rounded-4xl leading-5">
                            {' '}
                            {subele?.answer}
                          </p>
                        </span>
                        <p
                          className={`block lg:hidden font-semibold text-[2.8vw] mt-3 px-4 ${subele?.type == 'Easy' ? 'bg-green-100 text-[#03BF62]' : subele?.type == 'Medium' ? 'bg-orange-100 text-[#FFB400]' : subele?.type == 'Hard' ? ' bg-red-100 text-red-600' : ''}   py-0.5 px-2 rounded-4xl`}
                        >
                          {' '}
                          {subele?.type}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* //menu  */}
          <div
            className="lg:hidden fixed z-100 bg-blend-lighten right-2 bottom-8 p-4 px-4 text-center flex justify-center items-center bg-[#006CFF] text-black max-w-[50px] rounded-4xl"
            onClick={() => {
              setShowNavBar(true)
            }}
          >
            <Image src={List} alt="menu" />
          </div>
        </div>
      )}
    </>
  )
}
