'use client'
import Link from 'next/link'
import { topics } from '../../../data/aa-sl'
import { useParams } from 'next/navigation'

export function ResourceNavigation({ data, type }: any) {
  const params = useParams<{
    topic?: string
    subtopic?: string
  }>()

  const activeTopic = params?.topic
  const activeSubtopic = params?.subtopic

  return (
    <aside className="w-full min-h-full shrink-0 border-b border-slate-200 bg-white  lg:sticky lg:top-16  lg:w-85 lg:overflow-y-auto lg:border-b-0 lg:border-r">
      {/* <Link
        href="/resources/ib-dp-maths/aa-sl"
        className="block rounded-lg px-5 py-3 font-semibold text-slate-900"
      >
        <span className="mt-2 block text-black text-[1.2rem] leading-9">
          Important Questions & Answers
        </span>
      </Link> */}

      {/* <div className="my-4 border-t border-slate-100" /> */}

      <nav aria-label="Mathematics topics">
        {data?.map((topic: any, ind: number) => (
          <div key={topic.slug} className={`border-b border-gray-300 `}>
            <Link
              href={'#'}
              // href={`/resources/ib-dp-maths/aa-sl/${topic.slug}`}
              className={`text-[1.2rem] block text-sm font-semibold px-5 pt-4  ${topic.slug?.toLowerCase() == activeTopic ? 'bg-[#006CFF]  text-white  py-4' : 'text-slate-800'}    `}
            >
              {ind + 1}. {topic.title}
            </Link>

            <ul
              style={{ paddingLeft: '1rem' }}
              className={`mt-2 space-y-2  
                 `}
            >
              {topic.subtopics.map((subtopic: any, subInd: number) => (
                <li
                  key={subtopic.slug}
                  className={`transition text-wrap hover:bg-blue-100 hover:py-2 hover:pl-2 hover:border-l-4 hover:font-bold text-[1rem] hover:border-[#006CFF] hover:rounded-l hover:text-[#006CFF]  ${subtopic.slug?.toLowerCase() == activeSubtopic ? 'bg-blue-100 py-2 pl-2 border-l-4 border-[#006CFF] rounded-l text-[#006CFF] font-semibold' : 'text-slate-500'}`}
                >
                  <Link
                    href={`/resources/ib-dp-maths/${type}/${topic.slug}/${subtopic.slug}`}
                    className={`block leading-8 transition hover:text-[#006CFF] text-wrap `}
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


