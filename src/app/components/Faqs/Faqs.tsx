'use client'

import React from 'react'
import { useState } from 'react'

export const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index: any) => {
    setOpenIndex(openIndex === index ? null : index)
  }
  const faqData = [
    {
      question: 'Is the Demo Class really Free?',
      answer:
        'Yes, the demo class is completely free. It helps students and parents understand the teaching style before enrolling.',
    },
    {
      question: 'How are classes conducted?',
      answer: 'Classes are conducted online through live one-on-one sessions.',
    },
    {
      question: 'Can I choose my tutor?',
      answer: 'Yes, we help match you with a tutor based on your requirements.',
    },
    {
      question: 'Do you provide study materials?',
      answer: 'Yes, tutors provide worksheets, notes, and practice materials.',
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
                  className={`overflow-hidden transition-all duration-300 ${
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
