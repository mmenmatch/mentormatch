// import Link from 'next/link'
// import { notFound } from 'next/navigation'
// import { PYQ_TOPIC_DATA } from '../../../../../../data/ibdp-pyq'
// import { SubTopicPastPaperHeroBannner } from '../../../../../../app/components/SubTopicPastPaperHeroBannner/SubTopicPastPaperHeroBannner'
// import NavBar from '@/app/components/NavBar/NavBar'
// import { MMFooter } from '@/app/components/MMFooter/MMFooter'
// import TopicWiseQuestionSection from '../../../../../../app/components/TopicWiseQuestionSection/TopicWiseQuestionSection'
// const COURSE = 'ai-sl'
// const BASE = `/previous-year-question-papers/ib-dp-math/${COURSE}`

// type Params = { topic: string; subtopic: string }

// // Builds every topic × paper combination for this course
// export function generateStaticParams(): Params[] {
//   return PYQ_TOPIC_DATA[COURSE].flatMap((t) =>
//     t.papers.map((p) => ({ topic: t.link, subtopic: p.link })),
//   )
// }

// export default async function PaperPage({ params }: { params: Promise<Params> }) {
//   const { topic, subtopic } = await params

//   const data = PYQ_TOPIC_DATA[COURSE].find((t) => t.link === topic)
//   const current = data?.papers.find((p) => p.link === subtopic)
//   if (!data || !current) notFound()

//   return (
//     <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
//       <NavBar />
//       <main className="w-full flex flex-col flex-1 overflow-x-clip">
//         <SubTopicPastPaperHeroBannner />
//         <TopicWiseQuestionSection />
//       </main>
//       <MMFooter />
//     </div>
//   )
// }

import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { PYQ_TOPIC_DATA } from '../../../../../../data/ibdp-pyq'
import { SubTopicPastPaperHeroBannner } from '../../../../../../app/components/SubTopicPastPaperHeroBannner/SubTopicPastPaperHeroBannner'
import NavBar from '@/app/components/NavBar/NavBar'
import { MMFooter } from '@/app/components/MMFooter/MMFooter'
import TopicWiseQuestionSection from '../../../../../../app/components/TopicWiseQuestionSection/TopicWiseQuestionSection'

const COURSE = 'ai-sl'
const BASE = `/previous-year-question-papers/ib-dp-math/${COURSE}`

type Params = { topic: string; subtopic: string }

// Finds the topic and the paper (paper1 / paper2 / paper3) from the URL
function getPaper(topic: string, subtopic: string) {
  const data = PYQ_TOPIC_DATA[COURSE].find((t) => t.link === topic)
  const current = data?.papers.find((p) => p.link === subtopic)
  return { data, current }
}

// Fills {count} in your SEO text with that paper's question count
const fill = (text: string, count: number) => text.replace('{count}', String(count))

export function generateStaticParams(): Params[] {
  return PYQ_TOPIC_DATA[COURSE].flatMap((t) =>
    t.papers.map((p) => ({ topic: t.link, subtopic: p.link })),
  )
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { topic, subtopic } = await params
  const { current } = getPaper(topic, subtopic)
  if (!current) return {}

  const title = current.seo.metaTitle
  const description = fill(current.seo.metaDescription, current.count)
  const url = `${BASE}/${topic}/${subtopic}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: 'website' },
    twitter: { card: 'summary', title, description },
  }
}

export default async function PaperPage({ params }: { params: Promise<Params> }) {
  const { topic, subtopic } = await params
  const { data, current } = getPaper(topic, subtopic)
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
