import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findSubtopic, topics } from '../../../../../../data/aa-sl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { AASLQuestionAndAnswer } from '../../../../../../data/aa-sl'

type Props = {
  params: Promise<{
    topic: string
    subtopic: string
  }>
}

export function generateStaticParams() {
  return topics.flatMap((topic) =>
    topic.subtopics.map((subtopic) => ({
      topic: topic.slug,
      subtopic: subtopic.slug,
    })),
  )
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: topicSlug, subtopic: subtopicSlug } = await params

  const result = findSubtopic(topicSlug, subtopicSlug)

  if (!result) {
    return { title: 'Resource Not Found' }
  }

  const { topic, subtopic } = result

  return {
    title: `IB Maths AA SL ${subtopic.title} Questions and Resources`,
    description: `${subtopic.description} Explore IB Mathematics AA SL ${subtopic.title} study resources and practice questions.`,
    alternates: {
      canonical: `/resources/ib-dp-maths/aa-sl/${topic.slug}/${subtopic.slug}`,
    },
  }
}

export default async function SubtopicPage({ params }: Props) {
  const { topic: topicSlug, subtopic: subtopicSlug } = await params

  const result = findSubtopic(topicSlug, subtopicSlug)

  if (!result) notFound()

  const { topic, subtopic } = result
  // console.log('topics', topic)

  return (
    <>
      <div className="mx-auto py-6 bg-white min-h-screen">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-2">
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

            <li className="font-medium text-slate-900">{subtopic.title}</li>
          </ol>
        </nav>
        <ResourceBanner />
        <div className="px-8 py-4">
          <h1 className="text-[1.5rem] mb-0 font-bold text-black flex flex-col">
            Important Questions & Answers
          </h1>
          <p className="text-[1.1rem] leading-8 mb-4 text-gray-500 font-medium">
            Attempt each question first. Then compare your method with the worked solution,<br></br>{' '}
            step by step.
          </p>
          {AASLQuestionAndAnswer?.map((ele: any, index: any) => (
            <div className=" w-full flex flex-col gap-4" key={index + 1}>
              {ele?.[topicSlug]?.[subtopicSlug] && (
                <span className="flex  gap-8 border-b-3 border-[#006CFF] items-center pb-2 mt-4">
                  {' '}
                  <p className="font-bold text-[1.5rem]">{ele?.[topicSlug]?.title}</p>
                  <p className="font-bold text-[0.9rem] bg-[#006CFF]/10 text-[#006CFF] py-0.5 px-4 rounded-4xl  ">
                    {' '}
                    {ele?.[topicSlug]?.[subtopicSlug]?.length} Questions
                  </p>
                </span>
              )}

              <div className="flex flex-col gap-4">
                {ele?.[topicSlug]?.[subtopicSlug]?.map((subele: any, ind: any) => (
                  <div
                    key={subele?.id}
                    className="p-4 border border-gray-200 w-full rounded-2xl flex flex-col gap-4"
                  >
                    <span className="flex items-baseline">
                      {' '}
                      <p className=" text-nowrap font-semibold text-[1rem] bg-[#006CFF] text-white py-0.5 px-2 rounded-4xl ">
                        Q {ind + 1}
                      </p>
                      <p className="font-semibold text-[1rem] text-black py-0.5 px-2 rounded-4xl">
                        {' '}
                        {subele?.question}
                      </p>
                      <p
                        className={`font-semibold text-[0.8rem] px-4 ${subele?.type == 'Easy' ? 'bg-green-100 text-[#03BF62]' : subele?.type == 'Medium' ? 'bg-orange-100 text-[#FFB400]' : subele?.type == 'Hard' ? ' bg-red-100 text-red-600' : ''}   py-0.5 px-2 rounded-4xl`}
                      >
                        {' '}
                        {subele?.type}
                      </p>
                    </span>
                    <div className="flex flex-col">
                      <span className="flex py-4 border-t-2 border-dashed border-gray-300 gap-2 ">
                        <p className="min-w-[140px] font-semibold text-[1rem] text-[#006CFF] py-0.5  rounded-4xl">
                          Worked solution :
                        </p>
                        <p className="font-semibold text-[1rem] text-black py-0.5 rounded-4xl">
                          {' '}
                          {subele?.explaination}
                        </p>
                      </span>
                      <span className="flex gap-2  ">
                        <p className="font-semibold text-[1rem] text-[#03BF62] py-0.5  rounded-4xl">
                          Answer :
                        </p>
                        <p className="font-bold text-[1rem] text-[#03BF62] py-0.5 rounded-4xl">
                          {' '}
                          {subele?.answer}
                        </p>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          {/* <article>
            <header className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-9">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
                {topic.title}
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {subtopic.title}
              </h1>

              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                {subtopic.description} Use this page to review the topic and practise relevant IB
                Maths AA SL questions.
              </p>
            </header>

            <section className="mt-8 rounded-xl border border-slate-200 bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">Study {subtopic.title}</h2>

              <p className="mt-3 leading-7 text-slate-600">
                This section will contain the study notes, practice questions, answers and
                explanations for {subtopic.title}.
              </p>

              <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">Practice questions</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Your AASL question bank will appear here when we connect this page to your Google
                  Sheet.
                </p>
              </div>
            </section>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <Link
                href={`/resources/ib-dp-maths/aa-sl/${topic.slug}`}
                className="text-sm font-semibold text-blue-700 hover:text-blue-900"
              >
                ← All {topic.title} subtopics
              </Link>

              <Link
                href="/resources/ib-dp-maths/aa-sl"
                className="text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                All AASL topics
              </Link>
            </div>
          </article> */}
        </div>
      </div>
    </>
  )
}
