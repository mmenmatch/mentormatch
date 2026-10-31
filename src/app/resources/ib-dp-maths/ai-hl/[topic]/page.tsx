import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findTopic, topics } from '../../../../../data/ai-hl'

type Props = {
  params: Promise<{ topic: string }>
}

export function generateStaticParams() {
  return topics.map((topic) => ({
    topic: topic.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: topicSlug } = await params
  const topic = findTopic(topicSlug)

  if (!topic) {
    return { title: 'Topic Not Found' }
  }

  return {
    title: `IB Maths AA SL ${topic.title} Resources`,
    description: `${topic.description} Explore IB Mathematics AA SL topic resources and study guides.`,
    alternates: {
      canonical: `/resources/ib-dp-maths/ai-hl/${topic.slug}`,
    },
  }
}

export default async function TopicPage({ params }: Props) {
  const { topic: topicSlug } = await params
  const topic = findTopic(topicSlug)

  if (!topic) notFound()

  const basePath = `/resources/ib-dp-maths/ai-hl/${topic.slug}`

  return (
    <div className="mx-auto max-w-5xl py-8 min-h-[100vh] ">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/resources/ib-dp-maths/ai-hl" className="hover:text-blue-700 ">
              AASL Resources
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-slate-900">{topic.title}</li>
        </ol>
      </nav>
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-9">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          IB Mathematics: AA SL
        </p>

        <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {topic.title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
          {topic.description} Choose a subtopic below to explore the relevant study material and
          practice questions.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
            {topic.subtopics.length} subtopics
          </span>
          <span className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-600">
            Study resources
          </span>
        </div>
      </section>
      <section className="mt-9">
        <h2 className="text-2xl font-bold text-slate-900">Explore {topic.title}</h2>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          Select a subtopic to find focused learning material and questions for your revision.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {topic.subtopics.map((subtopic, index) => (
            <Link
              key={subtopic.slug}
              href={`${basePath}/${subtopic.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                  Subtopic {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700">
                  →
                </span>
              </div>

              <h3 className="mt-4 font-semibold text-slate-900">{subtopic.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">{subtopic.description}</p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-700">
                Explore subtopic →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
