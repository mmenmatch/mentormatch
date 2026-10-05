import React from 'react'
import Image from 'next/image'
import MentorMatchLogo from '../../../../public/assets/Images/mentormatch.webp'
import SocialMediaLogo from '../../../../public/assets/Images/socialmediaLogo.webp'
import USoffice from '../../../../public/assets/Images/Us.webp'
import Uaeoffice from '../../../../public/assets/Images/Uae.webp'
import Indoffice from '../../../../public/assets/Images/Inidan.webp'
import Link from 'next/link'

export const MMFooter = () => {
  const branch = [
    {
      id: 1,
      offic: 'US office',
      address: '355 Bryant St Unit 403 San Francisco, CA 94107',
      img: USoffice,
    },
    {
      id: 2,
      offic: 'UAE office',
      address: 'Building A1, Dubai Digital Park, Silicon Oasis, Dubai, UAE ',
      img: Uaeoffice,
    },
    {
      id: 3,
      offic: 'India Office',
      address: '2nd Floor, 31/14, Deivasigamani St, Royapettah, Chennai - 600014. ',
      img: Indoffice,
    },
  ]
  const others = [
    { id: 1, title: 'About us', link: 'https://www.mentormatch.com/about-us' },
    { id: 2, title: 'Become a teacher', link: 'https://www.mentormatch.com/become-a-teacher' },
    { id: 3, title: 'Blogs', link: 'https://www.mentormatch.com/blogs' },
    { id: 4, title: 'Contact support', link: 'https://tally.so/r/3jbLka' },
    { id: 5, title: 'Pricing', link: 'https://www.mentormatch.com/pricing' },
  ]
  const Legal = [
    {
      id: 1,
      title: 'Terms of Service (Student)',
      link: 'https://www.mentormatch.com/legal/terms-of-service-for-students',
    },
    {
      id: 2,
      title: 'Terms of Service (Tutor)',
      link: 'https://www.mentormatch.com/legal/terms-of-service-for-tutors',
    },
    { id: 3, title: 'Terms of Use', link: 'https://www.mentormatch.com/legal/terms-of-use' },
    { id: 4, title: 'Privacy Policy', link: 'https://www.mentormatch.com/legal/privacy-policy' },
    {
      id: 5,
      title: 'Refund/Cancellation',
      link: 'https://www.mentormatch.com/legal/refund-cancellation-policy',
    },
  ]
  return (
    <div className="md:px-12 md:pt-12 px-4 md:py-0 py-6 bg-[#2A2A2A] flex flex-col gap-12 justify-between">
      <div className="w-full max-w-360 mx-auto flex md:flex-row flex-col  gap-8 justify-between">
        <div className="lg:w-[20%] w-full flex flex-col gap-4 text-white text-[1rem] font-medium">
          <Image src={MentorMatchLogo} alt={'mentor match logo'} className="max-w-[250px]" />
          <Image src={SocialMediaLogo} alt={'mentor match logo'} className="max-w-[250px]" />
          <p>📧 hello@mentormatch.com</p>
          <p>☎️ +97148369577</p>
        </div>
        <div className="lg:w-[20%] w-full flex flex-col gap-4">
          {branch?.map((ele) => (
            <div key={ele?.id} className="flex flex-col gap-2">
              <div className="flex gap-4">
                <Image src={ele.img} alt={ele.offic} width={30} />
                <p className="text-[1.1rem] text-[#ECECEC] font-bold">{ele.offic}</p>
              </div>
              <p className="text-[#FFFFFF]/70">{ele.address}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-[20%] w-full flex flex-col gap-4">
          <p className="text-[1rem] text-[#B0B0B0] font-bold">Others</p>

          {others?.map((ele) => (
            <Link href={ele?.link} key={ele.id}>
              <p className="text-[1rem] text-[#FFFFFF]/70 ">{ele.title}</p>
            </Link>
          ))}
        </div>
        <div className="lg:w-[20%] w-full flex flex-col gap-4">
          <p className="text-[1rem] text-[#B0B0B0] font-bold">Legal</p>

          {Legal?.map((ele) => (
            <Link href={ele?.link} key={ele.id}>
              <p className="text-[1rem] text-[#FFFFFF]/70 ">{ele.title}</p>
            </Link>
          ))}
        </div>{' '}
      </div>
      <div className="w-full max-w-360 mx-auto flex md:flex-row flex-col p-4 border-t-1  border-[#808080] gap-8 justify-center">
        <p className="text-[#808080]">© 2026 Mentor Match. All rights reserved.</p>
      </div>
    </div>
  )
}
