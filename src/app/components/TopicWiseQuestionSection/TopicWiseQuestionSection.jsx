// 'use client'
// import { PYP_QUESTIONS } from '../../../data/ibdp-pyq'
// import { usePathname } from 'next/navigation'
// import { MathText } from '../MathText/MathText'
// import { useState } from 'react'

// const TopicWiseQuestionSection = () => {
//   const [show, setShow] = useState(false)

//   const pathname = usePathname()
//   const course = pathname?.split('/')[3]
//   const topic = pathname?.split('/')[4]
//   const paper = pathname?.split('/')[5]
//   const subtopicSection = PYP_QUESTIONS?.[course]?.[topic]?.[paper]?.subtopics
//   const questionSection = PYP_QUESTIONS?.[course]?.[topic]?.[paper]?.questions

//   const totalCount = PYP_QUESTIONS?.[course]?.[topic]?.[paper]?.total

//   const LEVEL = ['All', 'Easy', 'Medium', 'Hard']

//   console.log(PYP_QUESTIONS)
//   // console.log('course', course)
//   // console.log('topic', topic)
//   // console.log('paper', paper)

//   // console.log('subtopic', subtopicSection)
//   console.log('questionSection', questionSection)

//   return (
//     <div className="w-full bg-white py-16">
//       <div className=" max-w-7xl mx-auto">
//         <div className="w-full flex flex-row justify-between items-baseline gap-8">
//           <div className="w-[30%] border-2 border-[var(--softblue)] rounded-2xl p-8">
//             <p className="font-bold text-[1rem]">Subtopics</p>
//             <div className="flex flex-col gap-6 mt-6">
//               {/* ALL TOPICS */}
//               {/* <div className="flex justify-between items-center">
//                 <p className="text-[1rem]">All Topics</p>
//                 <p className="text-[1rem] font-bold">{totalCount}</p>
//               </div> */}
//               {subtopicSection?.map((ele) => (
//                 <>
//                   {' '}
//                   <div className="flex justify-between items-center">
//                     <p className="text-[1rem]">{ele?.name}</p>
//                     <p className="text-[1rem] font-bold">{ele?.count}</p>
//                   </div>
//                 </>
//               ))}{' '}
//             </div>
//           </div>
//           <div className="w-[70%]  p-2">
//             <div className="flex gap-4">
//               {LEVEL?.map((ele) => (
//                 <p className="text-[1rem] font-bold  border-2 border-(--softblue)  px-6 py-2 rounded-4xl">
//                   {ele}
//                 </p>
//               ))}
//             </div>

//             <div className="w-full mt-8 flex flex-col gap-8">
//               {questionSection?.map((ele) => (
//                 <div className="w-full border-2 border-(--softblue) p-4 rounded-2xl flex flex-col items-start">
//                   <div className=" w-full flex justify-between items-center">
//                     <div className="w-full flex gap-4 font-semibold items-center">
//                       <span className="bg-blue-500 text-white py-2 px-4 rounded-4xl">
//                         {ele?.subtopic}
//                       </span>
//                       <span className="text-(--darkblue) bg-[#d9e2f4] py-2 px-4 rounded-4xl">
//                         {ele?.difficulty}
//                       </span>
//                       <span className="text-(--darkblue) bg-[#d9e2f4] py-2 px-4 rounded-4xl">
//                         {ele?.marks} marks
//                       </span>
//                     </div>
//                     <span>{ele?.code}</span>
//                   </div>
//                   <div className="mt-4">
//                     <MathText text={ele?.question} />
//                   </div>
//                   <button className="p-3 border rounded border-0 text-white font-semibold mt-4 bg-(--secondary)">
//                     Show answer and solution
//                   </button>
//                   {show && (
//                     <div className="mt-4 bg-(--softyellow) flex flex-col gap-6 p-4 rounded-2xl">
//                       <div className="flex flex-col gap-4 font-semibold ">
//                         <span className="tracking-[1px]">ANSWER</span>
//                         <MathText text={ele?.answer} />
//                       </div>{' '}
//                       <div className="flex flex-col gap-2 ">
//                         <span className="font-semibold tracking-[1px]">WORKED SOLUTION</span>
//                         <MathText text={ele?.solution} />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default TopicWiseQuestionSection

'use client'
import { PYP_QUESTIONS } from '../../../data/ibdp-pyq'
import { usePathname } from 'next/navigation'
import { MathText } from '../MathText/MathText'
import { useState } from 'react'

const TopicWiseQuestionSection = () => {
  // Which subtopic is selected ('all' or a subtopic slug)
  const [selectedSubtopic, setSelectedSubtopic] = useState('all')
  // Which difficulty is selected ('All' | 'Easy' | 'Medium' | 'Hard')
  const [selectedLevel, setSelectedLevel] = useState('All')
  // Ids of the questions whose answer is open
  const [openIds, setOpenIds] = useState([])

  const pathname = usePathname()
  const course = pathname?.split('/')[3]
  const topic = pathname?.split('/')[4]
  const paper = pathname?.split('/')[5]
  const subtopicSection = PYP_QUESTIONS?.[course]?.[topic]?.[paper]?.subtopics
  const questionSection = PYP_QUESTIONS?.[course]?.[topic]?.[paper]?.questions

  const totalCount = PYP_QUESTIONS?.[course]?.[topic]?.[paper]?.total

  const LEVEL = ['All', 'Easy', 'Medium', 'Hard']

  // Questions that match both filters
  const filteredQuestions = questionSection?.filter(
    (ele) =>
      (selectedSubtopic === 'all' || ele?.subtopicSlug === selectedSubtopic) &&
      (selectedLevel === 'All' || ele?.difficulty === selectedLevel),
  )

  // Open / close one question's answer
  const toggleAnswer = (id) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const handleSubtopic = (slug) => {
    setSelectedSubtopic(slug)
    setOpenIds([]) // close answers when the filter changes
  }

  const handleLevel = (level) => {
    setSelectedLevel(level)
    setOpenIds([])
  }

  return (
    <div className="w-full bg-white py-16">
      <div className=" max-w-7xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-between items-baseline gap-8">
          <div className="hidden w-full lg:block lg:w-[30%] border-2 border-[var(--softblue)] rounded-2xl p-8">
            <p className="font-bold text-[1rem]">Subtopics</p>
            <div className="flex flex-col gap-6 mt-6">
              {/* ALL TOPICS */}
              <div
                onClick={() => handleSubtopic('all')}
                className={`flex justify-between items-center cursor-pointer rounded-xl px-3 py-2 -mx-3 ${
                  selectedSubtopic === 'all' ? 'bg-blue-500 text-white' : ''
                }`}
              >
                <p className="text-[1rem]">All Topics</p>
                <p className="text-[1rem] font-bold">{totalCount}</p>
              </div>
              {subtopicSection?.map((ele) => (
                <div
                  key={ele?.slug}
                  onClick={() => handleSubtopic(ele?.slug)}
                  className={`flex justify-between items-center cursor-pointer rounded-xl px-3 py-2 -mx-3 ${
                    selectedSubtopic === ele?.slug ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  <p className="text-[1rem]">{ele?.name}</p>
                  <p className="text-[1rem] font-bold">{ele?.count}</p>
                </div>
              ))}{' '}
            </div>
          </div>
          <div className="block lg:hidden w-full lg:w-[30%] border-2 border-[var(--softblue)] rounded-2xl p-8">
            <p className="font-bold text-[1rem]">Subtopics</p>
            <div className="flex flex-col gap-6 mt-6">
              {/* ALL TOPICS */}
              <div
                onClick={() => handleSubtopic('all')}
                className={`flex justify-between items-center cursor-pointer rounded-xl px-3 py-2 -mx-3 ${
                  selectedSubtopic === 'all' ? 'bg-blue-500 text-white' : ''
                }`}
              >
                <p className="text-[1rem]">All Topics</p>
                <p className="text-[1rem] font-bold">{totalCount}</p>
              </div>
              {subtopicSection?.map((ele) => (
                <div
                  key={ele?.slug}
                  onClick={() => handleSubtopic(ele?.slug)}
                  className={`flex justify-between items-center cursor-pointer rounded-xl px-3 py-2 -mx-3 ${
                    selectedSubtopic === ele?.slug ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  <p className="text-[1rem]">{ele?.name}</p>
                  <p className="text-[1rem] font-bold">{ele?.count}</p>
                </div>
              ))}{' '}
            </div>
          </div>
          <div className="w-full lg:w-[70%]  p-2">
            <div className="flex justify-between items-center gap-4">
              <div className="flex gap-4">
                {LEVEL?.map((ele) => (
                  <p
                    key={ele}
                    onClick={() => handleLevel(ele)}
                    className={`text-[1rem] font-bold  border-2 border-(--softblue)  px-6 py-2 rounded-4xl cursor-pointer ${
                      selectedLevel === ele ? 'bg-blue-500 text-white border-blue-500' : ''
                    }`}
                  >
                    {ele}
                  </p>
                ))}
              </div>
              <p className="text-[1rem]">
                Showing {filteredQuestions?.length ?? 0} questions of {totalCount}
              </p>
            </div>

            <div className="w-full mt-8 flex flex-col gap-8">
              {filteredQuestions?.map((ele) => {
                const show = openIds.includes(ele?.id)
                return (
                  <div
                    key={ele?.id}
                    className="w-full border-2 border-(--softblue) p-4 rounded-2xl flex flex-col items-start"
                  >
                    <div className=" w-full flex justify-between items-center">
                      <div className="w-full flex gap-4 font-semibold items-center">
                        <span className="bg-blue-500 text-white py-2 px-4 rounded-4xl">
                          {ele?.subtopic}
                        </span>
                        <span className="text-(--darkblue) bg-[#d9e2f4] py-2 px-4 rounded-4xl">
                          {ele?.difficulty}
                        </span>
                        <span className="text-(--darkblue) bg-[#d9e2f4] py-2 px-4 rounded-4xl">
                          {ele?.marks} marks
                        </span>
                      </div>
                      <span className="whitespace-nowrap">
                        {[ele?.session, ele?.code].filter(Boolean).join(' · ')}
                      </span>
                    </div>
                    <div className="mt-4">
                      <MathText text={ele?.question} />
                    </div>
                    <button
                      type="button"
                      onClick={() => toggleAnswer(ele?.id)}
                      className={`p-3 rounded font-semibold mt-4 cursor-pointer ${
                        show
                          ? 'border-2 border-(--secondary) text-(--secondary) bg-white'
                          : 'border-0 text-white bg-(--secondary)'
                      }`}
                    >
                      {show ? 'Hide answer' : 'Show answer and solution'}
                    </button>
                    {show && (
                      <div className="mt-4 w-full bg-(--softyellow) flex flex-col gap-6 p-4 rounded-2xl">
                        {ele?.answer && (
                          <div className="flex flex-col gap-4 font-semibold ">
                            <span className="tracking-[1px]">ANSWER</span>
                            <MathText text={ele?.answer} />
                          </div>
                        )}
                        {ele?.solution && (
                          <div className="flex flex-col gap-2 ">
                            <span className="font-semibold tracking-[1px]">WORKED SOLUTION</span>
                            <MathText text={ele?.solution} />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}

              {filteredQuestions?.length === 0 && (
                <p className="text-center text-gray-500 border-2 border-dashed border-(--softblue) rounded-2xl p-8">
                  No questions match this filter.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopicWiseQuestionSection
