import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import MathDemoHeroSection from '../components/MathDemoHeroSection/MathDemoHeroSection'
import MathDemoBottomCard from '../components/MathDemoBottomCard/MathDemoBottomCard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Math | Mentor Match',
  description:
    'Learn more about Mentor Match and how we help students connect with expert tutors.',
}
export default function page() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="w-full">
        <div className="max-w-360 mx-auto md:px-16 px-0 mb-8">
          <MathDemoHeroSection />
          <MathDemoBottomCard />
        </div>
      </div>
    </div>
  )
}
