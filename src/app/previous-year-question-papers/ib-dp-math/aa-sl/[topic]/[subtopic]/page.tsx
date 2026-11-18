import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PYQ_TOPIC_DATA } from '../../../../../../data/ibdp-pyq'
import { SubTopicPastPaperHeroBannner } from '../../../../../../app/components/SubTopicPastPaperHeroBannner/SubTopicPastPaperHeroBannner'
import NavBar from '@/app/components/NavBar/NavBar'
import { MMFooter } from '@/app/components/MMFooter/MMFooter'
import TopicWiseQuestionSection from '../../../../../../app/components/TopicWiseQuestionSection/TopicWiseQuestionSection'
const COURSE = 'aa-sl'
const BASE = `/previous-year-question-papers/ib-dp-math/${COURSE}`

type Params = { topic: string; subtopic: string }

// Builds every topic × paper combination for this course
export function generateStaticParams(): Params[] {
  return PYQ_TOPIC_DATA[COURSE].flatMap((t) =>
    t.papers.map((p) => ({ topic: t.link, subtopic: p.link })),
  )
}


export default async function PaperPage({ params }: { params: Promise<Params> }) {
  const { topic, subtopic } = await params

  const data = PYQ_TOPIC_DATA[COURSE].find((t) => t.link === topic)
  const current = data?.papers.find((p) => p.link === subtopic)
  if (!data || !current) notFound()

  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <NavBar />
      <main className="w-full flex flex-col flex-1 overflow-x-clip">
        <SubTopicPastPaperHeroBannner />
        <TopicWiseQuestionSection />
      </main>
      <MMFooter />
    </div>
  )
}
