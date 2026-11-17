'use client'
import React from 'react'

export const PastPaperTopicSection = () => {
  const topics = [
    {
      id: 1,
      title: 'Number and Algebra',
      description: 'Sequences and series, binomial theorem, logarithms, proof',
      papers: [
        { paper: 1, count: 43 },
        { paper: 2, count: 21 },
      ],
      totalQuestions: 64,
    },
    {
      id: 2,
      title: 'Functions',
      description:
        'Quadratics, composite and inverse functions, transformations, exponential models',
      papers: [
        { paper: 1, count: 39 },
        { paper: 2, count: 29 },
      ],
      totalQuestions: 68,
    },
    {
      id: 3,
      title: 'Geometry and Trigonometry',
      description: 'Sine and cosine rule, radians and sectors, trig equations, 3D solids',
      papers: [
        { paper: 1, count: 55 },
        { paper: 2, count: 53 },
      ],
      totalQuestions: 108,
    },
    {
      id: 4,
      title: 'Statistics and Probability',
      description:
        'Regression, normal and binomial distributions, conditional probability, box plots',
      papers: [
        { paper: 1, count: 63 },
        { paper: 2, count: 70 },
      ],
      totalQuestions: 133,
    },
    {
      id: 5,
      title: 'Calculus',
      description: 'Differentiation, integration, optimisation, kinematics, areas and volumes',
      papers: [
        { paper: 1, count: 53 },
        { paper: 2, count: 48 },
      ],
      totalQuestions: 101,
    },
  ]
  return (
    <div className="py-16">
      <div className="w-full lg:max-w-[80rem] xl:max-w-[90rem] mx-auto lg:px-16 2xl:px-4  px-4  text-white ">
        <h2 className="text-black text-[2.5rem] font-bold">Browse by topics</h2>
        <div className="w-full mt-8 flex flex-row flex-wrap gap-4 ">
          {topics?.map((ele, index) => (
            <div
              className="w-full lg:w-[32%] px-4 py-4 min-h-[350px] border text-black border-[#d9e2f4] rounded-2xl flex flex-col gap-4"
              key={ele?.id}
            >
              <div className="flex gap-2 items-center">
                <p className="bg-[var(--secondary)] font-bold px-4 py-3 text-white text-[1.25rem] rounded ">
                  {index + 1}
                </p>
                <p className="text-[1.1rem] font-semibold text-[var(--primary)]">
                  Topic {index + 1}
                </p>
              </div>
              <div className="flex flex-col gap-16">
                <div className="mt-2 flex flex-col gap-3">
                  <p className="text-black font-bold text-[1.5rem] leading-[120%]">{ele?.title}</p>
                  <p className="text-[0.9rem] font-medium text-gray-500">{ele?.description}</p>
                </div>
                <div className="flex gap-4">
                  {ele?.papers?.map((paper, index) => (
                    <p className="bg-[#d9e2f4] px-3 py-2 font-bold text-[var(--darkblue)] rounded">
                      Paper {index + 1} . {paper?.count}
                    </p>
                  ))}
                </div>
              </div>
              <div className="w-full h-[2px] bg-[#d9e2f4] rounded-4xl"></div>
              <p className="text-[0.9rem] font-semibold text-[var(--primary)]">
                {ele?.totalQuestions} questions →
              </p>
            </div>
          ))}
          <div className="pyp-bottom-page w-full lg:w-[32%] bg-[var(--primary)] px-4 py-8 min-h-[350px] border text-black border-[#d9e2f4] rounded-2xl flex flex-col gap-4 justify-between">
            <div className="flex flex-col gap-4">
              {' '}
              <p className="text-white font-bold text-[2rem] leading-[120%]">
                Not sure where to{' '}
                <span className="relative inline-block px-2 text-black z-0">
                  <span className="absolute text-[3rem] inset-0 bg-[#FFF116] rounded-xl -rotate-2 -z-10"></span>
                  Start{' '}
                </span>{' '}
              </p>
              <p className="text-white leading-[120%] text-[1rem] font-medium">
                An IB Maths tutor can find the gaps and set the right question for you{' '}
              </p>
            </div>
            <div className="">
              <button
                type="submit"
                onClick={() => {
                  document.getElementById('cta')?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
                className="md:text-[1rem] text-[0.8rem] md:py-3 md:px-4 py-2 px-2 bg-[#FFF116] text-black border-2 border-black rounded-4xl font-semibold shadow-[4px_4px_0px_black] active:shadow-[2px_2px_0px_black] active:translate-y-0.75
            "
              >
                Book A Free Trial Class
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
