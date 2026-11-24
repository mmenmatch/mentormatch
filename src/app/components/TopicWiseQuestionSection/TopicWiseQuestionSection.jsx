'use client'
import { PYP_QUESTIONS } from '../../../data/ibdp-pyq'
import { usePathname } from 'next/navigation'
import { MathText } from '../MathText/MathText'
import { useState } from 'react'

// Split a question into its intro and its parts, so the diagram can sit between them.
// "Intro…\n (a) …\n (b) …" → ["Intro…", "(a) …\n (b) …"]
const splitQuestion = (text = '') => {
  const idx = text.search(/\n\s*\((?:a|i)\)/)
  if (idx <= 0) return [text, '']
  return [text.slice(0, idx), text.slice(idx)]
}

// Diagram images for one question (one or several)
const QuestionDiagrams = ({ images, onOpen }) => {
  if (!images?.length) return null
  return (
    <div
      className={`w-full grid gap-4 ${images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}
    >
      {images.map((src, i) => (
        <button
          key={src}
          type="button"
          onClick={() => onOpen(src)}
          className="w-full bg-white border-2 border-(--softblue) rounded-2xl p-3 flex justify-center items-center cursor-zoom-in"
        >
          <img
            src={src}
            alt={`Diagram ${i + 1}`}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="max-h-[360px] w-auto max-w-full object-contain"
          />
        </button>
      ))}
    </div>
  )
}

const TopicWiseQuestionSection = () => {
  // Which subtopic is selected ('all' or a subtopic slug)
  const [selectedSubtopic, setSelectedSubtopic] = useState('all')
  // console.log('selectedSubtopic', selectedSubtopic)
  // Which difficulty is selected ('All' | 'Easy' | 'Medium' | 'Hard')
  const [selectedLevel, setSelectedLevel] = useState('All')
  // Ids of the questions whose answer is open
  const [openIds, setOpenIds] = useState([])
  // Diagram shown full-size (null = closed)
  const [zoomSrc, setZoomSrc] = useState(null)

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

  const SubtopicList = () => (
    <>
      <p className="font-bold text-[1rem]">Subtopics</p>
      {/*Desktop */}
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
        ))}
      </div>
    </>
  )

  return (
    <div className="w-full bg-white py-8 lg:py-16">
      <div className=" max-w-7xl mx-auto">
        <div className="w-full flex flex-col lg:flex-row justify-between items-baseline gap-0 lg:gap-8">
          <div className="hidden w-full lg:block lg:w-[30%] border-2 border-[var(--softblue)] rounded-2xl p-8">
            <SubtopicList />
          </div>
          <div className=" lg:hidden w-full lg:w-[30%] flex flex-col gap-4  rounded-2xl p-4">
            <div className="flex flex-col gap-4">
              <label htmlFor="subtopic" className="text-[4vw]">
                Select subtopics
              </label>
              <select
                id="subtopic"
                value={selectedSubtopic}
                onChange={(e) => handleSubtopic(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-4 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="all">All Topics ({totalCount})</option>
                {subtopicSection?.map((ele) => (
                  <option key={ele?.slug} value={ele?.slug}>
                    {ele?.name} ({ele?.count})
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="level" className="text-[4vw]">
                Select level
              </label>
              <select
                id="level"
                value={selectedLevel}
                onChange={(e) => handleLevel(e.target.value)}
                className="w-full rounded-md border border-gray-300 bg-white px-3 py-4 text-sm shadow-sm focus:border-blue-500 focus:outline-none"
              >
                {LEVEL?.map((ele) => (
                  <option key={ele} value={ele}>
                    {ele}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full lg:w-[70%]  p-2">
            <div className="flex justify-between items-center gap-4">
              <div className=" gap-4 hidden lg:flex">
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
              <p className="text-[1rem] hidden lg:block ">
                Showing {filteredQuestions?.length ?? 0} questions of {totalCount}
              </p>
            </div>

            <div className="w-full mt-4 lg:mt-8 flex flex-col gap-8">
              {filteredQuestions?.map((ele) => {
                const show = openIds.includes(ele?.id)
                const images = Array.isArray(ele?.diagram)
                  ? ele.diagram
                  : ele?.diagram
                    ? [ele.diagram]
                    : []
                const [intro, parts] = splitQuestion(ele?.question)

                return (
                  <div
                    key={ele?.id}
                    className="w-full border-2 border-(--softblue) p-4 rounded-2xl flex flex-col items-start"
                  >
                    <div className=" w-full flex justify-between items-center">
                      <div className="w-full flex gap-4 font-semibold items-center">
                        <span className="bg-blue-500  text-[3.25vw] lg:text-[1rem] text-white py-2 px-4 rounded-4xl">
                          {ele?.subtopic}
                        </span>
                        <span className="text-(--darkblue) text-[3.25vw] lg:text-[1rem] bg-[#d9e2f4] py-2 px-4 rounded-4xl">
                          {ele?.difficulty}
                        </span>
                        <span className="text-(--darkblue ) text-[4vw] lg:text-[1rem] bg-[#d9e2f4] py-2 px-4 rounded-4xl lg:block hidden">
                          {ele?.marks} marks
                        </span>
                      </div>
                      <span className="whitespace-nowrap text-[3vw] lg:text-[1rem] lg:block hidden">
                        {[ele?.session].filter(Boolean).join(' · ')}
                      </span>
                    </div>

                    {/* Question: intro → diagram(s) → parts */}
                    <div className="mt-4 w-full flex flex-col gap-6">
                      <MathText text={intro} />
                      <QuestionDiagrams images={images} onOpen={setZoomSrc} />
                      {parts && <MathText text={parts} />}
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
                      {show ? 'Hide answer' : 'Show mark scheme'}
                    </button>
                    {show && (
                      <div className="mt-4 w-full bg-(--softyellow) flex flex-col gap-6 p-4 rounded-2xl">
                        {ele?.answer && (
                          <div className="flex flex-col gap-4 font-semibold ">
                            <span className="tracking-[1px]">ANSWER</span>
                            <MathText text={ele?.answer} splitParts />
                          </div>
                        )}
                        {ele?.solution && (
                          <div className="flex flex-col gap-2 ">
                            <span className="font-semibold tracking-[1px]">WORKED SOLUTION</span>
                            <MathText text={ele?.solution} splitSteps />
                          </div>
                        )}
                      </div>
                    )}
                    <div className="flex mt-4  text-[3.25vw] lg:text-[1rem] justify-between items-center w-full font-semibold lg:hidden">
                      <span className="text-(--darkblue) bg-[#d9e2f4] py-2 px-4 rounded-4xl">
                        {ele?.marks} marks
                      </span>
                      <span className="whitespace-nowrap">
                        {[ele?.session].filter(Boolean).join(' · ')}
                      </span>
                    </div>
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

      {/* Full-size diagram viewer */}
      {zoomSrc && (
        <div
          onClick={() => setZoomSrc(null)}
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img
            src={zoomSrc}
            alt="Diagram"
            referrerPolicy="no-referrer"
            className="max-h-[90vh] max-w-[90vw] bg-white rounded-2xl p-4 object-contain"
          />
        </div>
      )}
    </div>
  )
}

export default TopicWiseQuestionSection
