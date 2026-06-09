'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import type { Country } from 'react-phone-number-input'

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const [detectedCountry, setDetectedCountry] = useState<Country>('AE') // fallback

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data: any) => {
        if (data?.country_code) {
          setDetectedCountry(data?.country_code as Country)
        }
      })
      .catch(() => {
        // silently fall back to 'IN'
      })
  }, [])

 let priceFaq =
   detectedCountry === 'IN'
     ? 'Plans start at ₹7,999 per month. Your first session is free. If you are still unhappy after three tutors, we refund all remaining unused sessions in full.'
     : 'Plans start at AED 499 per month. Your first session is free. If you are still unhappy after three tutors, we refund all remaining unused sessions in full.'
  const faqData = [
    {
      question: 'Which subjects and curricula do you cover?',
      answer:
        "Maths, Science, and English for IB, IGCSE, A Level, and American curricula, Grades 6 to 12. We follow your child's exact school syllabus and chapter sequence.",
    },
    {
      question: 'How does a 1:1 online session work?',
      answer:
        '55 minutes, one student, one tutor, no group classes. Live whiteboard, fully interactive, and every session is recorded for your child to review.',
    },
    {
      question: 'How do you match my child with the right tutor?',
      answer:
        'We run a short diagnostic first, then match your child to a curriculum specialist. Fewer than 1 in 10 applicants become Mentor Match tutors. Not happy? We rematch at no cost.',
    },
    {
      question: 'How will I know if my child is actually improving?',
      answer:
        'Every month your child sits a test under real exam conditions. Every 8 sessions you receive a simple progress report showing exactly what improved and what still needs work.',
    },
    {
      question: 'How flexible are the session timings?',
      answer:
        "Fully flexible around your child's school schedule and timezone. Most students attend 2 to 3 sessions a week. Reschedule anytime with 24 hours notice.",
    },
    {
      question: 'What does it cost, and what if it does not work out?',
      answer: priceFaq,
    },
  ]

  return (
    <div className="bg-[#EEF6FF] py-12">
      <div className="max-w-360 mx-auto md:px-16 px-4 ">
        <h2 className="md:text-[2.5rem]  text-[6vw] text-center font-bold  mb-8 md:mb-12">
          Questions Parents Ask Before They Book
        </h2>
        <div className="flex flex-col gap-4">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="bg-white py-4 md:px-8 px-4 rounded-2xl">
                <button
                  className="w-full flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <p className="m-0 md:text-[1.2rem] text-[4vw] text-[#364153] font-medium text-left">
                    {faq.question}
                  </p>

                  <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full text-xl font-semibold bg-[#EEF6FF]">
                    {isOpen ? '−' : '+'}
                  </div>
                </button>

                <div
                  className={`overflow-hidden max-w-[90%] transition-all duration-300 ${
                    isOpen ? 'max-h-40 mt-4' : 'max-h-0'
                  }`}
                >
                  <p className="text-[#6B7280] m-0 md:text-[1rem] text-[3.5vw]">{faq.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
