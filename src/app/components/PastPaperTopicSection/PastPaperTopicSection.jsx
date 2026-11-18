'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()

  const splitPath = pathname?.split('/')[3]
  // Generated from Master_Question_Bank_IBDP_1.xlsx (PYQ sheets only)
  // count = number of question rows in each 'PYQ <course> T<n> P<n>' sheet
  const PYQ_TOPIC_DATA = {
    'aa-sl': [
      {
        id: 1,
        topic: 'Number and Algebra',
        descriptions:
          'Arithmetic and geometric sequences and series, exponents and logarithms, standard form, compound interest, binomial expansion and simple algebraic proof.',
        papers: [
          { paper: 1, count: 43 },
          { paper: 2, count: 21 },
        ],
        totalQuestions: 64,
      },
      {
        id: 2,
        topic: 'Functions',
        descriptions:
          'Linear, quadratic, exponential and logarithmic functions — composite and inverse functions, transformations of graphs and the discriminant.',
        papers: [
          { paper: 1, count: 39 },
          { paper: 2, count: 29 },
        ],
        totalQuestions: 68,
      },
      {
        id: 3,
        topic: 'Geometry and Trigonometry',
        descriptions:
          'Right-angled and non-right-angled trigonometry (sine and cosine rules), radians, arc length and sector area, trig identities and equations, 3D solids and vectors.',
        papers: [
          { paper: 1, count: 55 },
          { paper: 2, count: 53 },
        ],
        totalQuestions: 108,
      },
      {
        id: 4,
        topic: 'Statistics and Probability',
        descriptions:
          'Descriptive statistics, box plots and cumulative frequency, regression and correlation, Venn and tree diagrams, conditional probability, binomial and normal distributions.',
        papers: [
          { paper: 1, count: 63 },
          { paper: 2, count: 70 },
        ],
        totalQuestions: 133,
      },
      {
        id: 5,
        topic: 'Calculus',
        descriptions:
          'Differentiation and its applications — stationary points, tangents and optimisation — plus integration, area under curves and kinematics.',
        papers: [
          { paper: 1, count: 53 },
          { paper: 2, count: 48 },
        ],
        totalQuestions: 101,
      },
    ],
    'aa-hl': [
      {
        id: 1,
        topic: 'Number and Algebra',
        descriptions:
          "Proof by induction and contradiction, complex numbers and De Moivre's theorem, counting principles, extended binomial theorem, partial fractions and systems of equations.",
        papers: [
          { paper: 1, count: 45 },
          { paper: 2, count: 39 },
          { paper: 3, count: 10 },
        ],
        totalQuestions: 94,
      },
      {
        id: 2,
        topic: 'Functions',
        descriptions:
          'Rational and modulus functions, polynomial factor and remainder theorems, inverse and composite functions, transformations and graphical inequalities.',
        papers: [
          { paper: 1, count: 32 },
          { paper: 2, count: 28 },
          { paper: 3, count: 9 },
        ],
        totalQuestions: 69,
      },
      {
        id: 3,
        topic: 'Geometry and Trigonometry',
        descriptions:
          'Vectors, lines and planes in 3D, vector and scalar products, compound-angle identities, inverse trig functions and sectors and segments.',
        papers: [
          { paper: 1, count: 41 },
          { paper: 2, count: 28 },
          { paper: 3, count: 2 },
        ],
        totalQuestions: 71,
      },
      {
        id: 4,
        topic: 'Statistics and Probability',
        descriptions:
          "Continuous and discrete random variables, Bayes' theorem and conditional probability, binomial, Poisson and normal distributions and regression.",
        papers: [
          { paper: 1, count: 12 },
          { paper: 2, count: 33 },
          { paper: 3, count: 2 },
        ],
        totalQuestions: 47,
      },
      {
        id: 5,
        topic: 'Calculus',
        descriptions:
          "Maclaurin series, L'Hôpital's rule, implicit differentiation, related rates, integration techniques, volumes of revolution and differential equations.",
        papers: [
          { paper: 1, count: 41 },
          { paper: 2, count: 43 },
          { paper: 3, count: 26 },
        ],
        totalQuestions: 110,
      },
    ],
    'ai-sl': [
      {
        id: 1,
        topic: 'Number and Algebra',
        descriptions:
          'Financial mathematics — compound interest, loans, annuities and inflation — alongside arithmetic and geometric sequences, standard form and approximation.',
        papers: [
          { paper: 1, count: 31 },
          { paper: 2, count: 23 },
        ],
        totalQuestions: 54,
      },
      {
        id: 2,
        topic: 'Functions',
        descriptions:
          'Linear, quadratic, exponential and sinusoidal models, transformations, inverse and composite functions, and modelling real-world data.',
        papers: [
          { paper: 1, count: 56 },
          { paper: 2, count: 31 },
        ],
        totalQuestions: 87,
      },
      {
        id: 3,
        topic: 'Geometry and Trigonometry',
        descriptions:
          'Sine and cosine rules, bearings and elevation, arcs and sectors, 3D volumes and surface areas, Voronoi diagrams and vector basics.',
        papers: [
          { paper: 1, count: 41 },
          { paper: 2, count: 34 },
        ],
        totalQuestions: 75,
      },
      {
        id: 4,
        topic: 'Statistics and Probability',
        descriptions:
          "Statistical measures, box plots and cumulative frequency, Pearson's and Spearman's correlation, regression, normal distribution and chi-squared tests.",
        papers: [
          { paper: 1, count: 102 },
          { paper: 2, count: 64 },
        ],
        totalQuestions: 166,
      },
      {
        id: 5,
        topic: 'Calculus',
        descriptions:
          'Introductory differentiation and integration — tangents and normals, optimisation, area under curves, kinematics and the trapezoidal rule.',
        papers: [
          { paper: 1, count: 40 },
          { paper: 2, count: 36 },
        ],
        totalQuestions: 76,
      },
    ],
    'ai-hl': [
      {
        id: 1,
        topic: 'Number and Algebra',
        descriptions:
          'Matrices — algebra, determinants, inverses and systems of equations — plus complex numbers, sequences and series, loans and annuities.',
        papers: [
          { paper: 1, count: 65 },
          { paper: 2, count: 32 },
          { paper: 3, count: 3 },
        ],
        totalQuestions: 100,
      },
      {
        id: 2,
        topic: 'Functions',
        descriptions:
          "Linearising data with logs and power laws, regression models, sinusoidal and piecewise modelling, inverse and composite functions and Euler's method.",
        papers: [
          { paper: 1, count: 22 },
          { paper: 2, count: 14 },
          { paper: 3, count: 5 },
        ],
        totalQuestions: 41,
      },
      {
        id: 3,
        topic: 'Geometry and Trigonometry',
        descriptions:
          'Graph theory — spanning trees, Eulerian and Hamiltonian paths, adjacency matrices — vectors, matrix transformations and trigonometry.',
        papers: [
          { paper: 1, count: 40 },
          { paper: 2, count: 23 },
          { paper: 3, count: 14 },
        ],
        totalQuestions: 77,
      },
      {
        id: 4,
        topic: 'Statistics and Probability',
        descriptions:
          'Markov chains, Poisson, binomial and normal distributions, continuous random variables, hypothesis testing, Type I/II errors and estimation.',
        papers: [
          { paper: 1, count: 48 },
          { paper: 2, count: 49 },
          { paper: 3, count: 24 },
        ],
        totalQuestions: 121,
      },
      {
        id: 5,
        topic: 'Calculus',
        descriptions:
          'Implicit differentiation, related rates, integration by parts and substitution, volumes of revolution, kinematics and coupled differential equations.',
        papers: [
          { paper: 1, count: 30 },
          { paper: 2, count: 29 },
          { paper: 3, count: 8 },
        ],
        totalQuestions: 67,
      },
    ],
  }

  return (
    <div className="py-8 lg:py-16">
      <div className="w-full lg:max-w-[80rem] xl:max-w-[90rem] mx-auto lg:px-16 2xl:px-4  px-4  text-white ">
        <h2 className="text-black text-[7vw] lg:text-[2.5rem] font-bold">Browse by topics</h2>
        <div className="w-full mt-8 flex flex-row flex-wrap gap-4 ">
          {PYQ_TOPIC_DATA[splitPath]?.map((ele, index) => (
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
                  <p className="text-black font-bold text-[1.5rem] leading-[120%]">{ele?.topic}</p>
                  <p className="text-[0.9rem] font-medium text-gray-500">{ele?.descriptions}</p>
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

