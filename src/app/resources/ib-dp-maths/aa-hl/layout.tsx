import type { Metadata } from 'next'
import Link from 'next/link'
import NavBar from '@/app/components/NavBar/NavBar'
import { topics } from '../../../../data/aa-hl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { MMFooter } from '@/app/components/MMFooter/MMFooter'
import type { ReactNode } from 'react'
import { ResourceNavigation } from '@/app/components/ResourceNavigation/ResourceNavigation'
import ResourceForm from '../../../components/ResourceForm/ResourceForm'
import BookDemoBanner from '../../../components/BookDemoBanner/BookDemoBanner'

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

export default async function AAHLLayout({ children, params }: Props) {
  const { topic, subtopic } = await params
  return (
    <div className="flex lg:h-screen flex-col  bg-blue-50">
      <NavBar whatsapp />

      <div className="mx-auto flex w-full  flex-1 min-h-full items-stretch">
        {/* Left navigation - full available height */}
        <aside className="h-full min-h-full shrink-0 overflow-y-auto hidden lg:block">
          <ResourceNavigation data={topics} type={'aa-hl'} />
        </aside>

        {/* Main content - same height, scrollable */}
        <main className="h-full min-h-0 min-w-0 flex-1 overflow-y-auto">{children}</main>
      </div>
      <div className="fixed right-2 bottom-8 p-4 px-4 text-center flex justify-center items-center bg-yellow-300 text-black max-w-[50px] rounded-4xl">
        Menu
      </div>
      <MMFooter />
    </div>
  )
}
