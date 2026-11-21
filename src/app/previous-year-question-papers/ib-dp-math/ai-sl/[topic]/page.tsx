import { notFound, redirect } from 'next/navigation'
import { PYQ_TOPIC_DATA } from '../../../../../data/ibdp-pyq'

const COURSE = 'ai-sl'

export function generateStaticParams() {
  return PYQ_TOPIC_DATA[COURSE].map((t) => ({ topic: t.link }))
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic } = await params
  const data = PYQ_TOPIC_DATA[COURSE].find((t) => t.link === topic)
  if (!data) notFound()

  redirect(`/previous-year-question-papers/ib-dp-math/${COURSE}/${topic}/${data.papers[0].link}`)
}
