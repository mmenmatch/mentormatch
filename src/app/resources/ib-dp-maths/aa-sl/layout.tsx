import type { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/app/components/NavBar/NavBar'
import { topics } from '../../../../data/aa-sl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { MMFooter } from '@/app/components/MMFooter/MMFooter'
import type { ReactNode } from 'react'
import { ResourceNavigation } from '@/app/components/ResourceNavigation/ResourceNavigation'
export const metadata: Metadata = {
  title: {
    default: 'IB Maths AA SL Resources | Mentor Match',
    template: '%s | Mentor Match',
  },
  description:
    'Explore IB Mathematics Analysis and Approaches SL study resources and practice questions.',
}

type Props = {
  children: ReactNode
  params: Promise<{
    topic?: string
    subtopic?: string
  }>
}

export default async function AASLLayout({ children, params }: Props) {
  const { topic, subtopic } = await params
  return (
    <div className="flex flex-col h-full bg-slate-50">
      <NavBar />
      <div>
        {/* <ResourceBanner /> */}
        <div className="mx-auto flex max-w-[1600px] flex-col lg:flex-row">
          <ResourceNavigation />
          <main
            className="min-w-0 flex-1 
          "
          >
            {children}
          </main>
        </div>
        <MMFooter />
      </div>
    </div>
  )
}
// px-5 py-8 sm:px-8 lg:px-10 lg:py-10. main style
//
