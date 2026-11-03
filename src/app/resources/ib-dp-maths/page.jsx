'use client'
import NavBar from '../../components/NavBar/NavBar'
import { MMFooter } from '../../components/MMFooter/MMFooter'
import Image from 'next/image'
import Charbel from '../../../../public/assets/Images/Charbel.webp'

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
      <NavBar whatsapp />
      <main className="flex-1">
        <div className="w-full relative overflow-hidden">
          <video
            className="pointer-events-none absolute inset-0 min-h-full w-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          >
            <source src="https://dev.mentormatch.com/qb-geometry-bg-blue.mp4" type="video/mp4" />
          </video>
          <div className=" relative z-10 mx-auto max-w-[80rem] px-[1rem] lg:py-24 py-12 flex flex-col justify-center items-center lg:gap-4 gap-2 ">
            <p className="font-bold tracking-[.2em] text-[#fff116] lg:text-[1rem] text-[4vw]">
              —QUESTION BANK—
            </p>
            <h1 className="m-0 lg:text-[4rem] text-center lg:text-left text-[8vw] leading-[150%] font-bold md:font-medium text-white">
              Choose your question bank.
            </h1>
            <p className="text-[1.2rem] text-center lg:text-left leading-[140%] mt-2 lg:mt-4 text-white">
              Select your IB Mathematics course to see the questions that belong to your syllabus.
            </p>
            <div className="mt-4 w-full flex lg:flex-row flex-col  gap-4">
              {IBDP_TOPICS?.map((ele) => (
                <div
                  className="w-full lg:w-[25%] border p-4 rounded-[1rem] bg-white border-white cursor-pointer"
                  onClick={() => window.location.replace(ele?.link)}
                >
                  <div className="w-full flex justify-between">
                    <p
                      className="  font-bold px-3 py-0.5 rounded-4xl "
                      style={
                        ele?.type == 'HL'
                          ? { background: '#fff116', fontColor: '#163B82' }
                          : { background: '#d5e1f7', fontColor: '#163B82' }
                      }
                    >
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
        </div>
        <div className="w-full bg-white ">
          <div className="mx-auto  px-4  py-8 lg:py-16 flex lg:flex-row flex-col gap-4">
            <p className="text-[5vw] text-center text-[#006CFF] my-4 tracking-[.2em] font-bold block lg:hidden ">
              MEET THE EXPERT
            </p>
            <div className="w-full lg:w-[40%] flex justify-end">
              {' '}
              <Image src={Charbel} alt="Chabel" className="w-full lg:w-[70%] rounded-2xl" />{' '}
            </div>
            <div className="w-full lg:w-[50%] p-4">
              <p className="text-[0.9rem] text-[#006CFF] tracking-[.2em] font-bold hidden lg:block">
                MEET THE EXPERT
              </p>
              <h2 className="text-black font-bold leading-12 text-[2.5rem] lg:block hidden ">
                The expert behind our <br></br>
                <span className="text-[#006CFF]">IB Mathematics</span> programme
              </h2>
              <h2 className="text-black font-bold leading-9 text-[6.25vw] lg:hidden block ">
                The expert behind our
                <span className="text-[#006CFF]"> IB Mathematics </span> programme
              </h2>
              <p className="text-gray-600 text-[3.8vw] leading-[140%] lg:text-[0.9rem] ">
                Our IB Mathematics curriculum wasn't put together from textbooks. It was built by
                someone who has taught IB Maths for over a decade, and who trains other IB teachers.
                Every course, topic and question bank follows the way the IB actually assesses
                students.
              </p>
              <p className="text-[#163B82] text-[6vw] lg:text-[1.5rem]  mt-4 font-bold">
                Charbel Alkawkabany
              </p>
              <p className="text-black text-[3.8vw] lg:text-[0.9rem] leading-[150%] mt-2 font-medium">
                Academic Director, IB Mathematics
              </p>
              <ul className="text-gray-600  text-[3.8vw] lg:text-[0.9rem] font-medium list-disc mt-2">
                <li>Global IB Workshop Leader</li>
                <li>Over a decade teaching IB Mathematics at leading schools in the US</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <MMFooter />
    </div>
  )
}

export default page
