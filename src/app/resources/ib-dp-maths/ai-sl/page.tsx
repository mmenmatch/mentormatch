import type { Metadata } from 'next'
import Link from 'next/link'
import { topics } from '../../../../data/ai-sl'

export const metadata: Metadata = {
  title: 'IB Maths AI SL Resources, Topics and Practice Questions',
  description:
    'Explore IB Mathematics AI SL study resources, topic guides, practice questions and worked explanations for the IB Diploma Programme.',
  alternates: {
    canonical: '/resources/ib-dp-maths/ai-sl',
  },
}

export default function AASLPage() {
  return (
    <div className="mx-auto my-16 max-w-5xl min-h-[100vh]   ">
      <section className="overflow-hidden rounded-2xl bg-linear-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-10 text-white sm:px-10 sm:py-14">
        <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-100">
          IB DIPLOMA PROGRAMME
        </span>

        <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          IB Mathematics: Analysis and Approaches SL
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
          Explore topic-based study resources and practise mathematics questions with answers and
          explanations to strengthen your understanding of the IB Maths AI SL syllabus.
        </p>

        <a
          href="#topics"
          className="mt-7 inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-blue-950 transition hover:bg-blue-50"
        >
          Explore topics
          <span className="ml-2" aria-hidden="true">
            ↓
          </span>
        </a>
      </section>

      <section className="mt-10">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold text-blue-700">STUDY BY TOPIC</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
              Explore IB Maths AI SL topics
            </h2>
          </div>

          <p className="text-sm text-slate-500">5 main topics · 20 subtopics</p>
        </div>

        <div id="topics" className="mt-6 grid gap-4 sm:grid-cols-2">
          {topics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/resources/ib-dp-maths/ai-sl/${topic.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700">
                  →
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-slate-900">{topic.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">{topic.description}</p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-700">
                Explore topic →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
