'use client'
import Link from 'next/link'
import { topics } from '../../../data/aa-sl'
import { useParams } from 'next/navigation'

export function ResourceNavigation() {
  const params = useParams<{
    topic?: string
    subtopic?: string
  }>()

  const activeTopic = params?.topic
  const activeSubtopic = params?.subtopic
  console.log('activeTopic', activeTopic)
  console.log('activeSubtopic', activeSubtopic)

  return (
    <aside className="w-full shrink-0 border-b border-slate-200 bg-white  lg:sticky lg:top-16  lg:w-85 lg:overflow-y-auto lg:border-b-0 lg:border-r">
      <Link
        href={'#'}
        // href="/resources/ib-dp-maths/aa-sl"
        className="block rounded-lg px-5 py-3 font-semibold text-slate-900"
      >
        {/* <span className="mt-2 block text-[#163B82] ">AASL Mathematics</span> */}
        <span className="mt-2 block text-black text-[1.2rem] leading-9">
          Important Questions & Answers
        </span>
      </Link>

      {/* <div className="my-4 border-t border-slate-100" /> */}

      <nav aria-label="Mathematics topics">
        {topics.map((topic, ind) => (
          <div key={topic.slug} className={`border-b border-gray-300 `}>
            <Link
              href={`/resources/ib-dp-maths/aa-sl/${topic.slug}`}
              className={`text-[1.2rem] block text-sm font-semibold px-5 py-6  ${topic.slug?.toLowerCase() == activeTopic ? 'bg-[#006CFF]  text-white  py-4' : 'text-slate-800'} hover:bg-[#006CFF] hover:text-white  `}
            >
              {ind + 1}. {topic.title}
            </Link>

            <ul
              style={{ paddingLeft: '1.5rem' }}
              className={`mt-2 space-y-2   ${topic.slug?.toLowerCase() == activeTopic ? 'visible' : 'hidden'} overflow-hidden`}
            >
              {topic.subtopics.map((subtopic, subInd) => (
                <li key={subtopic.slug}>
                  <Link
                    href={`/resources/ib-dp-maths/aa-sl/${topic.slug}/${subtopic.slug}`}
                    className={`block text-sm leading-8 ${activeSubtopic == subtopic.slug.toLowerCase() ? '  text-[#006CFF] font-extrabold text-[1.3rem]' : 'text-slate-500 '} transition hover:text-[#006CFF] hover:font-bold text-[1rem]`}
                  >
                    {ind + 1 + '.'}
                    {subInd + 1} {subtopic.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
