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
// import OneOnOneOnlineTutoringV2 from '../components/OneOnOneOnlineTutoringV2/OneOnOneOnlineTutoringV2'
import OneOnOneOnlineTutoringIndia from '../components/OneOnOneOnlineTutoringIndia/OneOnOneOnlineTutoringIndia'
export const metadata: Metadata = {
  title: '1:1 Online Tuition for IB,IGCSE and Cambridge | Mentor Match',
  description:
    'Personalised 1:1 Maths, Physics and Science tuition for IB and Cambridge students from 4 to 12 grade. Learn with curriculum-trained tutors.',
  openGraph: {
    title: '1:1 Online Tuition for IB,IGCSE and Cambridge | Mentor Match',
    description:
      'Personalised 1:1 Maths, Physics and Science tuition for IB and Cambridge students from 4 to 12 grade. Learn with curriculum-trained tutors.',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6a21389fc30b68ec4cafbe77_OG.webp', // absolute URL
        width: 1200,
        height: 630,
        alt: '1:1 Online Tuition for IB & IGCSE | Mentor Match',
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
          <OneOnOneOnlineTutoringIndia />
          <MarqueeComponent />
          <GpsFrameWork />
          <StudentsGrowthCard type={'india'} />
          <ParentsChoose type={'india'} />
          <TutorSection />
          <Faqs type="india" />
          <Footer />
          <FooterBanner />
        </div>
      </div>
    </div>
  )
}
