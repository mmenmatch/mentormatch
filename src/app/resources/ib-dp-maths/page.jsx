'use client'
import NavBar from '../../components/NavBar/NavBar'
import { MMFooter } from '../../components/MMFooter/MMFooter'
import Image from 'next/image'

function page() {
  const IBDP_TOPICS = [
    {
      id: 1,
      name: 'AA HL',
      subtext: 'Analysis & Approach',
      subtext2: 'Higher Level',
      questions: '100+',
      type: 'HL',
      tag: 'Analysis',
      link: 'https://www.mentormatch.com/app/resources/ib-dp-maths/aa-sl/number/standard-form',
    },
    {
      id: 2,
      name: 'AA SL',
      subtext: 'Analysis & Approach',
      subtext2: 'Standard Level',
      questions: '100+',
      type: 'SL',
      tag: 'Analysis',
      link: 'https://www.mentormatch.com/app/resources/ib-dp-maths/aa-hl/counting-and-probability/multiplication-principle',
    },
    {
      id: 3,
      name: 'AI HL',
      subtext: 'Applications & Interpretation',
      subtext2: 'Higher Level',
      questions: '100+',
      type: 'HL',
      tag: 'Applications',
      link: 'https://www.mentormatch.com/app/resources/ib-dp-maths/ai-sl/number-and-algebra/arithmetic-sequences-finding-terms',
    },
    {
      id: 4,
      name: 'AI SL',
      subtext: 'Applications & Interpretation',
      subtext2: 'Standard Level',
      questions: '100+',
      type: 'SL',
      tag: 'Applications',
      link: 'https://www.mentormatch.com/app/resources/ib-dp-maths/ai-hl/logarithms-and-exponentials/solving-log-equations',
    },
  ]
  return (
    <div className=" flex flex-col min-h-dvh bg-[#006CFF]">
      <NavBar />
      <main className=" relative overflow-hidden flex-1">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src="https://dev.mentormatch.com/qb-geometry-bg-blue.mp4" type="video/webm" />
        </video>
        <div className=" relative z-10 mx-auto max-w-[80rem] px-[1rem] py-24 flex flex-col justify-center items-center gap-4 ">
          <p className=" font-bold tracking-[.2em] text-[#fff116]"> —QUESTION BANK—</p>
          <h1 className="m-0 text-[4rem] font-medium text-white">Choose your question bank.</h1>
          <p className="text-[1.2rem] leading-[140%] mt-4 text-white">
            Select your IB Mathematics course to see the questions that belong to your syllabus.
          </p>
          <div className="mt-4 w-full flex  gap-4">
            {IBDP_TOPICS?.map((ele) => (
              <div
                className="w-[25%] border p-4 rounded-[1rem] bg-white border-white cursor-pointer"
                onClick={() => window.location.replace(ele?.link)}
              >
                <div className="w-full flex justify-between">
                  <p className="bg-[#fff116] text-[#163B82] font-bold px-3 py-0.5 rounded-4xl ">
                    {ele?.type}
                  </p>
                  <p className="text-[0.8rem] text-[#47608e] font-medium">{ele?.tag}</p>
                </div>
                <h2 className=" text-[3rem] font-bold text-[#163B82] ">{ele?.name}</h2>
                <div className="flex w-full justify-between items-center">
                  <div className="flex flex-col gap-4">
                    <p className="text-[1.1rem] leading-[140%] font-semibold">{ele?.subtext}</p>
                    <p className="text-[0.9rem] text-gray-500 leading-[150%] font-medium">
                      {ele?.subtext2}
                    </p>
                  </div>
                </div>
                <div className="h-[1px] rounded w-full bg-[#c5d4ee] my-8"></div>
                <div className="w-full px-2 flex justify-between items-center">
                  <p className="text-[1rem] text-gray-500">
                    <span className="text-[#163B82]  font-bold">{ele?.questions}</span> Question
                  </p>
                  <p className="text-[#163B82] text-[0.8rem] bg-[#d5e1f7] min-w-[30px] h-[30px] text-center rounded-4xl flex justify-center items-center">
                    ➜
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <MMFooter />
    </div>
  )
}

export default page
