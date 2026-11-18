import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PYQ_TOPIC_DATA } from '../../../../../data/ibdp-pyq'

const COURSE = 'aa-sl' // change per course folder
const BASE = `/previous-year-question-papers/ib-dp-math/${COURSE}`
console.log('PYQ_TOPIC_DATA', PYQ_TOPIC_DATA)
export function generateStaticParams() {
  return PYQ_TOPIC_DATA[COURSE]?.map((t) => ({ topic: t?.link }))
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params
  console.log('topic param:', topic)

  const data = PYQ_TOPIC_DATA[COURSE]?.find((t) => t.link === topic)
  if (!data) notFound()

  return (
    <div className="w-full lg:max-w-[80rem] mx-auto px-4 py-16">
      <p className="text-[var(--primary)] font-semibold">Topic {data.id}</p>
      <h1 className="text-[2.5rem] font-bold">{data.topic}</h1>
      <p className="mt-3 text-gray-500">{data.descriptions}</p>
      <p className="mt-2 font-semibold">{data.totalQuestions} questions</p>

      <div className="mt-8 flex gap-4">
        {data.papers.map((p) => (
          <Link
            key={p.link}
            href={`${BASE}/${data.link}/${p.link}`}
            className="bg-[#d9e2f4] px-4 py-3 font-bold text-[var(--darkblue)] rounded"
          >
            Paper {p.paper} · {p.count}
          </Link>
        ))}
      </div>
    </div>
  )
}
