'use client'

import React from 'react'
import { useState, useEffect } from 'react'
import type { Country } from 'react-phone-number-input'

export const Faqs = ({ type = '' }) => {
  const [openIndex, setOpenIndex] = useState(null)
  const [detectedCountry, setDetectedCountry] = useState<Country>('AE') // fallback

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  useEffect(() => {
    fetch('https://ipinfo.io/json')
      .then((res) => res.json())
      .then((data: any) => {
        if (data?.country) {
          setDetectedCountry(data?.country as Country)
        }
      })
      .catch(() => {
        // silently fall back to 'IN'
      })
  }, [])

  let priceFaq =
    detectedCountry === 'IN'
      ? "Plans start at ₹7,999/month for online tuition, and your first session is completely free. If you're still unhappy after three tutors, we refund all remaining sessions in full."
      : "Plans start at AED 499/month for online tuition, and your first session is completely free. If you're still unhappy after three tutors, we refund all remaining sessions in full."
  const faqData = [
    {
      question: 'Which subjects and curricula do you cover?',
      answer:
        'We offer 1:1 online tuition in math, physics, and science for CBSE, ICSE, IB, IGCSE, and British curriculum students in Grades 4 to 12 ',
    },
    {
      question: 'How does our 1:1 online tuition work?',
      answer:
        "Every online tuition session runs 55 minutes with one student and one dedicated tutor and a live interactive whiteboard. Whether it's a math class online or a science session, it's recorded so your child can review it anytime.  ",
    },
    {
      question: 'How do you match my child with the right tutor?',
      answer:
        'We run a short diagnostic first, then match your child to one of our Top maths tutors or science tutors — fewer than 1 in 10 applicants make the cut. Not happy? We rematch at no cost.',
    },
    {
      question: 'How will I know if my child is actually improving?',
      answer:
        "Each month, your child sits a test under real exam conditions to track progress in math, physics,Science-tuitions . Every 8 sessions, you receive a progress report showing exactly what's improved.",
    },
    {
      question: 'How flexible are the session timings?',
      answer:
        "Online tuition timings are fully flexible around your child's school schedule and time zone, with most students attending 2 to 3 sessions a week. Reschedule anytime with 24 hours' notice.",
    },
    {
      question: 'What does it cost, and what if it does not work out?',
      answer: priceFaq,
    },
    {
      question: 'Is online math tuition more effective than in-person or group classes?',
      answer:
        "For most students, yes. Online math tuition gives your child a tutor's full attention for the entire session — something group classes can't offer. Every math class online is recorded for revision. ",
    },
    {
      question: 'Do you offer physics and science tuition alongside math?',
      answer:
        'Yes. Alongside math tuition, we offer physics tuition from dedicated science tutors, matched the same way as our math tutors — by curriculum and grade. ',
    },
  ]
  const indiaFaqData = [
    {
      question: 'Which subjects and curricula do you cover?',
      answer:
        'We provide private tuition classes online in Maths, Physics and Science for IB and IGCSE students in Grades 6 to 12.',
    },
    {
      question: 'How does our 1:1 online tuition work?',
      answer:
        'Each online tuition session lasts 55 minutes, with one student, one dedicated tutor and a live interactive whiteboard. Whether your child attends online maths classes or a science session, the lesson is recorded for review.',
    },
    {
      question: 'How do you match my child with the right tutor?',
      answer:
        "We begin with a short diagnostic to understand your child's learning needs, then match them with a tutor trained in their IB or IGCSE curriculum. If the match isn't right, we can arrange a rematch at no extra cost.",
    },
    {
      question: 'How will I know if my child is actually improving?',
      answer:
        'Each month, your child takes an assessment under real exam conditions to track progress in Maths, Physics and Science. Every 8 sessions, you receive a progress report showing what has improved.',
    },
    {
      question: 'How flexible are the session timings?',
      answer:
        "Session timings can be arranged around your child's school schedule and time zone. Most students attend 2 to 3 sessions a week. You can reschedule with 24 hours' notice.",
    },
    {
      question: 'What does it cost, and what if it does not work out?',
      answer: priceFaq,
    },
    {
      question: 'Is online math tuition more effective than in-person or group classes?',
      answer:
        "Online maths tuition gives your child a tutor's full attention throughout each session, unlike group classes. Each online maths class is recorded so your child can revisit the lesson during revision.",
    },
    {
      question: 'Do you offer physics and science tuition alongside math?',
      answer:
        "Yes. Alongside Maths tuition, we offer online science tuition and Physics lessons with tutors matched to your child's curriculum and grade.",
    },
  ]
  const COUNTRY_BASED_FAQ = type == 'india' ? indiaFaqData : faqData
  return (
    <div className="bg-[#EEF6FF] py-12 md:py-16">
      <div className="max-w-360 mx-auto md:px-16 px-4 ">
        <h2 className="md:text-[2.5rem]  text-[6vw] m-0 text-center font-bold  mb-8 md:mb-12">
          Questions Parents Ask Before They Book
        </h2>
        <div className="flex flex-col gap-4 max-w-[70rem] mx-auto">
          {COUNTRY_BASED_FAQ.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div key={index} className="bg-white py-4 md:px-8 px-4 rounded-2xl">
                <button
                  className="w-full flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <p className="m-0 md:text-[1rem] w-[90%] text-[4vw] text-[#364153] leading-[150%] font-medium text-left">
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
                  <p className="text-[#6B7280] m-0 md:text-[0.9rem] text-[3.5vw] leading-[150%]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
