import React from 'react'
import NavBar from '@/app/components/NavBar/NavBar'
import { MMFooter } from '@/app/components/MMFooter/MMFooter'
import { PastPaperHeroBannner } from '../../../../app/components/PastPaperHeroBannner/PastPaperHeroBannner'
import { PastPaperTopicSection } from '../../../../app/components/PastPaperTopicSection/PastPaperTopicSection'

export default function page() {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      <NavBar />
      <main className="w-full flex flex-col flex-1 overflow-x-clip">
        <PastPaperHeroBannner />
        <PastPaperTopicSection />
      </main>
      <MMFooter />
    </div>
  )
}
