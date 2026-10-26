import NavBar from '../components/NavBar/NavBar'
import { Metadata } from 'next'
import { MarqueeComponent } from '../components/Marquee/Marquee'
import { StudentsGrowthCard } from '../components/StudentsGrowthCard/StudentsGrowthCard'
import { ParentsChoose } from '../components/ParentsChoose/ParentsChoose'
import { Footer } from '../components/Footer/Footer'
import { GpsFrameWork } from '../components/GpsFrameWork/GpsFrameWork'
import { Faqs } from '../components/Faqs/Faqs'
import { TutorSection } from '../components/TutorSection/TutorSection'
import { FooterBanner } from '../components/FooterBanner/FooterBanner'
import OneOnOneOnlineTutoringV2 from '../components/OneOnOneOnlineTutoringV2/OneOnOneOnlineTutoringV2'

export const metadata: Metadata = {
  title: '1 on 1 Online Tuition | Mentor Match',
  description: 'Mentor Match: 1:1 Online Math and Science tuition for IB & IGCSE   ',
  openGraph: {
    title: '1 on 1 Online Tuition | Mentor Match',
    description: 'Mentor Match: 1:1 Online Math and Science tuition for IB & IGCSE   ',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6a21389fc30b68ec4cafbe77_OG.webp', // absolute URL
        width: 1200,
        height: 630,
        alt: '1 on 1 Online Tuition | Mentor Match',
      },
    ],
  },
}
export default function page() {
  return (
    <div className="w-full">
      <NavBar />
      <div className="w-full">
        <div className="  ">
          <OneOnOneOnlineTutoringV2 />
          <MarqueeComponent />
          <GpsFrameWork />
          <StudentsGrowthCard />
          <ParentsChoose />
          <TutorSection />
          <Faqs />
          <Footer />
          <FooterBanner />
        </div>
      </div>
    </div>
  )
}
