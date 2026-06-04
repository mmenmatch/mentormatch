import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import OneOnOneOnlineTutoring from '../components/OneOnOneOnlineTutoring/OneOnOneOnlineTutoring'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '1 on 1 online tutoring | Mentor Match',
  description:
    'Learn more about Mentor Match and how we help students connect with expert tutors.',
  openGraph: {
    title: '1 on 1 online tutoring | Mentor Match',
    description:
      'Learn more about Mentor Match and how we help students connect with expert tutors.',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6a21389fc30b68ec4cafbe77_OG.webp', // absolute URL
        width: 1200,
        height: 630,
        alt: 'Math | Mentor Match',
      },
    ],
  },
}
export default function page() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="w-full">
        <div className="max-w-360 mx-auto lg:px-16 md:px-16 px-0 mb-8">
          <OneOnOneOnlineTutoring />
        </div>
      </div>
    </div>
  )
}
