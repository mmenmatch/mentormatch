import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findSubtopic, topics } from '../../../../../../data/ai-sl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { AISLQuestionAndAnswer } from '../../../../../../data/ai-sl'
import BookDemoBanner from '@/app/components/BookDemoBanner/BookDemoBanner'
import { Menu } from './Menu'

// @next-codemod-ignore Cache Components adoption: this segment temporarily allows blocking.
// Remove this opt-out after verifying the segment passes validation without it.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

type Props = {
  params: Promise<{
    topic: string
    subtopic: string
  }>
}

export function generateStaticParams() {
  return topics.flatMap((topic) =>
    topic.subtopics.map((subtopic) => ({
      topic: topic.slug,
      subtopic: subtopic.slug,
    })),
  )
}
export const metaData: any = {
  'number-and-algebra': {
    'arithmetic-sequences-finding-terms': {
      metaTitle: 'Arithmetic Progression Questions | IB AI SL | Mentor Match',
      metaDescription:
        'Arithmetic progression questions for IB Maths AI SL: find any term of an arithmetic sequence from the first term and common difference.',
      title: 'IB Maths AI SL 1.2 Arithmetic Sequences: Finding Terms',
      description:
        'Arithmetic progression questions start with two values: the first term and the common difference. These arithmetic sequence questions use them to find any term you are asked for.',
    },
    'arithmetic-sequences-nth-term-formula': {
      metaTitle: 'Arithmetic Sequence nth Term Formula | IB AI SL | Mentor Match',
      metaDescription:
        'Use the nth term formula of an arithmetic sequence in IB Maths AI SL: write the general term and use it to find any value in the sequence.',
      title: 'IB Maths AI SL 1.2 Arithmetic Sequence: nth Term Formula',
      description:
        'Every arithmetic sequence can be written with one formula: u = u₁ + (n − 1)d. These questions ask you to build that nth term formula from given information and use it.',
    },
    'arithmetic-series-sum-of-terms': {
      metaTitle: 'Arithmetic Series Formula | IB Maths AI SL | Mentor Match',
      metaDescription:
        'Apply the arithmetic series formula in IB Maths AI SL to find the sum of the first n terms, with practice on choosing the right version.',
      title: 'IB Maths AI SL 1.2 Arithmetic Series: Sum of Terms',
      description:
        'The arithmetic series formula adds the terms of a sequence without listing them. These arithmetic series questions ask for the sum of the first n terms in both pure and applied settings.',
    },
    'bounds-and-inequalities': {
      metaTitle: 'Upper and Lower Bounds Questions | IB AI SL | Mentor Match',
      metaDescription:
        'Upper and lower bounds questions for IB Maths AI SL: find the bounds of rounded values, write them as inequalities and use them in calculations.',
      title: 'IB Maths AI SL 1.6 Bounds & Inequalities Questions',
      description:
        'A rounded measurement hides a range of possible values. These upper and lower bounds questions find that range and express it as an inequality.',
    },
    'percentage-error': {
      metaTitle: 'Percentage Error Formula | IB Maths AI SL | Mentor Match',
      metaDescription:
        'Use the percentage error formula in IB Maths AI SL to compare an approximate value with the exact value, with mark scheme working.',
      title: 'IB Maths AI SL 1.6 Percentage Error Questions',
      description:
        'The percentage error formula compares an approximate value with the exact one: ε = |vₐ − vₑ| ÷ |vₑ| × 100%. These questions apply it to rounding, estimation and measurement.',
    },
  },
  probability: {
    'venn-diagrams': {
      metaTitle: 'Venn Diagram Probability Questions | IB AI SL | Mentor Match',
      metaDescription:
        'Venn diagram probability questions for IB Maths AI SL: complete the diagram, then find probabilities of unions, intersections and complements.',
      title: 'IB Maths AI SL 4.6 Venn Diagram Questions',
      description:
        'A Venn diagram shows how two events overlap, and most probability questions become simple once it is filled in correctly. These Venn diagram probability questions build that skill.',
    },
    'tree-diagrams': {
      metaTitle: 'Tree Diagram Probability Questions | IB AI SL | Mentor Match',
      metaDescription:
        'Tree diagram probability questions for IB Maths AI SL: draw each stage, multiply along branches and add the outcomes you need.',
      title: 'IB Maths AI SL 4.6 Tree Diagram Questions',
      description:
        'A tree diagram breaks a probability problem into stages. These tree diagram probability questions ask you to draw the branches, multiply along them and combine the outcomes.',
    },
    'conditional-probability': {
      metaTitle: 'Conditional Probability Questions | IB AI SL | Mentor Match',
      metaDescription:
        'Conditional probability for IB Maths AI SL: find P(A | B) from tables, Venn diagrams and tree diagrams, with mark scheme working.',
      title: 'IB Maths AI SL 4.6 Conditional Probability Questions',
      description:
        'Conditional probability narrows the sample space to the outcomes you already know have happened. These conditional probability questions use tables, Venn diagrams and tree diagrams.',
    },
    'binomial-distribution': {
      metaTitle: 'Binomial Distribution Questions | IB AI SL | Mentor Match',
      metaDescription:
        'Binomial distribution questions for IB Maths AI SL: check the conditions and find exact and cumulative probabilities on your GDC.',
      title: 'IB Maths AI SL 4.8 Binomial Distribution Questions',
      description:
        'The binomial distribution models a fixed number of independent trials with two outcomes. These binomial distribution questions turn on one decision: P(X = k) or a cumulative probability.',
    },
    'binomial-distribution-mean-and-sd': {
      metaTitle: 'Binomial Distribution Mean and Variance | Mentor Match',
      metaDescription:
        'Find the binomial distribution mean and variance in IB Maths AI SL using E(X) = np and Var(X) = np(1 − p), then the standard deviation.',
      title: 'IB Maths AI SL 4.8 Binomial Distribution: Mean & Standard Deviation',
      description:
        'Two short formulas give the binomial distribution mean and variance: E(X) = np and Var(X) = np(1 − p). These questions use them, along with the standard deviation, in context.',
    },
  },
  trigonometry: {
    'sinusoidal-models-real-world-context': {
      metaTitle: 'Sinusoidal Function Models | IB Maths AI SL | Mentor Match',
      metaDescription:
        'Model real situations with a sinusoidal function in IB Maths AI SL: tides, daylight and temperature, using amplitude, period and principal axis.',
      title: 'IB Maths AI SL 2.5 Sinusoidal Models: Real-World Context',
      description:
        'A sinusoidal function models anything that repeats, from tide heights to hours of daylight. These questions apply the model to real data and interpret each parameter.',
    },
    'sine-rule': {
      metaTitle: 'Sine Rule Questions: Finding Sides | IB AI SL | Mentor Match',
      metaDescription:
        'Use the sine rule in IB Maths AI SL to find a missing side in a non-right-angled triangle, with mark scheme working for every answer.',
      title: 'IB Maths AI SL 3.2 Sine Rule Questions: Finding Sides',
      description:
        'The sine rule finds a missing side whenever you know an angle and its opposite side. These sine rule questions practise setting up the ratio and solving it accurately.',
    },
    'cosine-rule': {
      metaTitle: 'Cosine Rule Questions: Finding Sides | IB AI SL | Mentor Match',
      metaDescription:
        'Use the cosine rule in IB Maths AI SL to find a missing side when you know two sides and the included angle, with mark scheme working.',
      title: 'IB Maths AI SL 3.2 Cosine Rule Questions: Finding Sides',
      description:
        'The cosine rule finds the third side of a triangle from two sides and the angle between them. These cosine rule questions practise substituting correctly and evaluating in one step.',
    },
    'area-of-a-triangle': {
      metaTitle: 'Area of a Triangle Using Sine | IB Maths AI SL | Mentor Match',
      metaDescription:
        'Find the area of a triangle using sine in IB Maths AI SL with ½ab sin C, including problems where you must find a side or angle first.',
      title: 'IB Maths AI SL 3.2 Area of a Triangle Questions',
      description:
        'When a triangle has no right angle, its area comes from two sides and the angle between them. These questions find the area of a triangle using sine: A = ½ab sin C.',
    },
    'multi-step-trigonometry-problems': {
      metaTitle: 'Sine and Cosine Rule Problems | IB Maths AI SL | Mentor Match',
      metaDescription:
        'Multi-step sine and cosine rule problems for IB Maths AI SL: combine both rules and triangle area in longer exam-style questions.',
      title: 'IB Maths AI SL 3.2 Multi-Step Trigonometry Problems',
      description:
        'Longer questions combine the sine and cosine rule in one problem, often with an area or a second triangle. These multi-step problems practise choosing the right rule at each stage.',
    },
  },
  'geometry-and-trigonometry': {
    'bearings-and-navigation': {
      metaTitle: 'Bearings Questions | IB Maths AI SL | Mentor Match',
      metaDescription:
        'Bearings questions for IB Maths AI SL: measure three-figure bearings clockwise from north and solve navigation problems with trigonometry.',
      title: 'IB Maths AI SL 3.3 Bearings and Navigation Questions',
      description:
        'Bearings are measured clockwise from north as three-figure angles. These bearings questions combine that convention with bearings trigonometry to find distances and directions.',
    },
    'angles-of-elevation-and-depression': {
      metaTitle: 'Angle of Elevation and Depression | IB AI SL | Mentor Match',
      metaDescription:
        'Angle of elevation and depression questions for IB Maths AI SL: draw the diagram, then solve with right-angled trigonometry.',
      title: 'IB Maths AI SL 3.3 Angles of Elevation and Depression Questions',
      description:
        'Every angle of elevation and depression is measured from the horizontal. These angle of elevation and depression questions practise drawing the diagram and solving the triangle.',
    },
    'arc-length-and-sector-area': {
      metaTitle: 'Arc Length Formula & Sector Area | IB AI SL | Mentor Match',
      metaDescription:
        'Use the arc length formula and sector area formula in IB Maths AI SL, with angles in degrees and mark scheme working for each answer.',
      title: 'IB Maths AI SL 3.4 Arc Length & Sector Area Questions',
      description:
        'The arc length formula takes a fraction of the circumference: l = (θ/360) × 2πr. These questions apply it alongside the sector area formula.',
    },
    'arc-length-and-sector-area-finding-radius': {
      metaTitle: 'Area of a Sector: Finding the Radius | IB AI SL | Mentor Match',
      metaDescription:
        'Work backwards from the area of a sector or an arc length to find the radius in IB Maths AI SL, with mark scheme working.',
      title: 'IB Maths AI SL 3.4 Arc Length & Sector Area: Finding the Radius',
      description:
        'These questions reverse the usual process: you are given the area of a sector or an arc length and must find the radius.',
    },
    'arc-length-and-sector-area-finding-angle': {
      metaTitle: 'Arc Length Questions: Finding θ | IB AI SL | Mentor Match',
      metaDescription:
        'Arc length questions for IB Maths AI SL that ask for the angle at the centre, given the arc length or sector area and the radius.',
      title: 'IB Maths AI SL 3.4 Arc Length & Sector Area: Finding the Angle',
      description:
        'When the radius and the arc length are known, the angle at the centre follows from one rearrangement. These arc length questions practise finding it.',
    },
  },
  'statistical-testing': {
    'chi-squared-goodness-of-fit': {
      metaTitle: 'Chi Square Goodness of Fit Questions | IB AI SL | Mentor Match',
      metaDescription:
        'Chi square goodness of fit questions for IB Maths AI SL: state hypotheses, find expected frequencies and draw a conclusion from the p-value.',
      title: 'IB Maths AI SL 4.11 Chi-Squared Goodness of Fit Questions',
      description:
        'A chi square goodness of fit test asks whether observed data match an expected distribution. These questions take you through every stage, from hypotheses to conclusion.',
    },
    'chi-squared-test-for-independence': {
      metaTitle: 'Chi Square Test for Independence | IB AI SL | Mentor Match',
      metaDescription:
        'Chi square test for independence questions for IB Maths AI SL: expected frequencies, degrees of freedom and conclusions in context.',
      title: 'IB Maths AI SL 4.11 Chi-Squared Test for Independence Questions',
      description:
        'The chi square test for independence asks whether two variables in a contingency table are related. These questions practise expected frequencies, degrees of freedom and conclusions.',
    },
    'chi-squared-test-for-independence-full-test': {
      metaTitle: 'Chi Square Test Questions: Full Test | IB AI SL | Mentor Match',
      metaDescription:
        'Full chi square test questions for IB Maths AI SL, from hypotheses to conclusion, set out the way the mark scheme expects.',
      title: 'IB Maths AI SL 4.11 Chi-Squared Test for Independence: Full Test',
      description:
        'These chi square test questions take a test for independence from start to finish, in the order the mark scheme rewards: hypotheses, expected values, statistic, p-value, conclusion.',
    },
    'one-sample-t-test': {
      metaTitle: 'One-Sample t Test Questions | IB Maths AI SL | Mentor Match',
      metaDescription:
        'One-sample t test questions for IB Maths AI SL: test a population mean, find the p-value on your GDC and conclude in context.',
      title: 'IB Maths AI SL 4.11 One-Sample t-Test Questions',
      description:
        'A one-sample t test compares a sample mean with a claimed population mean when the population standard deviation is unknown. These t test questions practise the full method.',
    },
    'two-sample-t-test': {
      metaTitle: 'Two-Sample t Test Questions | IB AI SL | Mentor Match',
      metaDescription:
        'Two-sample t test questions for IB Maths AI SL: compare the means of two independent groups, find the p-value and conclude in context.',
      title: 'IB Maths AI SL 4.11 Two-Sample t-Test Questions',
      description:
        'A two-sample t test asks whether two independent groups have different population means. These t test questions set up the hypotheses and interpret the result.',
    },
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic: topicSlug, subtopic: subtopicSlug } = await params

  const result = findSubtopic(topicSlug, subtopicSlug)

  if (!result) {
    return { title: 'Resource Not Found' }
  }

  const { topic, subtopic } = result

  return {
    title: metaData?.[topicSlug]?.[subtopicSlug]?.metaTitle,
    description: metaData?.[topicSlug]?.[subtopicSlug]?.metaDescription,
    alternates: {
      canonical: `/resources/ib-dp-maths/aa-sl/${topic.slug}/${subtopic.slug}`,
    },
  }
}

export default async function SubtopicPage({ params }: Props) {
  const { topic: topicSlug, subtopic: subtopicSlug } = await params
  const result = findSubtopic(topicSlug, subtopicSlug)
  const title = metaData?.[topicSlug]?.[subtopicSlug]?.title
  const description = metaData?.[topicSlug]?.[subtopicSlug]?.description

  if (!result) notFound()
  const { topic, subtopic } = result
  let pageData: any = AISLQuestionAndAnswer?.find((item: any, index: any) => item?.[topicSlug])

  return (
    <>
      <div className="mx-auto lg:py-6  bg-white ">
        <Menu
          title={title}
          description={description}
          pageData={pageData}
          topicSlug={topicSlug}
          subtopicSlug={subtopicSlug}
          topic={topic}
          subtopic={subtopic}
        />
        <div className="lg:block hidden">
          <nav aria-label="Breadcrumb" className="lg:mb-6 text-md text-slate-500 mt-4">
            <ol className="flex flex-wrap items-center  pl-4  gap-2">
              <li>
                <Link href="/resources/ib-dp-maths/aa-sl" className="hover:text-blue-700">
                  AASL Resources
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link
                  href={`/resources/ib-dp-maths/aa-sl/${topic.slug}`}
                  className="hover:text-blue-700"
                >
                  {topic.title}
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li className="font-bold text-slate-900">{subtopic.title}</li>
            </ol>
          </nav>
          <ResourceBanner title={title} description={description} />
          <div className="lg:px-8 px-4 py-6" id={'topics'}>
            <h1 className="lg:text-[1.5rem] text-[5vw] m-0 mb-0 font-bold text-black flex flex-col">
              Important Questions & Answers
            </h1>
            <p className="lg:text-[1.1rem] text-[4vw] lg:leading-8 leading-6 mb-4 text-gray-500 font-medium">
              Attempt each question first. Then compare your method with the worked solution, step
              by step.
            </p>
            <div className=" w-full flex flex-col gap-4 py-4">
              <span className="flex  gap-8 border-b-3 border-[#006CFF] items-center pb-2 mt-4">
                {' '}
                <p className="font-bold lg:text-[1.5rem] text-[4.5vw]">
                  {pageData?.[topicSlug]?.title}
                </p>
                <p className="font-bold lg:text-[0.9rem] text-[3vw] bg-[#006CFF]/10 text-[#006CFF] py-0.5 px-4 rounded-4xl  ">
                  {' '}
                  {pageData?.[topicSlug]?.[subtopicSlug]?.length} Questions
                </p>
              </span>

              <div className="relative flex flex-col gap-4 ">
                {pageData?.[topicSlug]?.[subtopicSlug]?.map((subele: any, ind: any) => (
                  <div
                    key={subele?.id}
                    className="p-4 border bg-white border-gray-200 w-full rounded-2xl flex flex-col gap-4"
                  >
                    <span className="flex items-baseline">
                      {' '}
                      <p className=" text-nowrap font-semibold text-[1rem] bg-[#006CFF] text-white py-0.5 px-2 rounded-4xl ">
                        Q {ind + 1}
                      </p>
                      <p className="font-semibold text-[1rem] text-black py-0.5 px-2 rounded-4xl ">
                        {' '}
                        {subele?.question}
                      </p>
                      <p
                        className={`hidden lg:block font-semibold text-[0.8rem] px-4 ${subele?.type == 'Easy' ? 'bg-green-100 text-[#03BF62]' : subele?.type == 'Medium' ? 'bg-orange-100 text-[#FFB400]' : subele?.type == 'Hard' ? ' bg-red-100 text-red-600' : ''}   py-0.5 px-2 rounded-4xl`}
                      >
                        {' '}
                        {subele?.type}
                      </p>
                    </span>
                    <div className="flex flex-col">
                      <span className="flex flex-col py-4 border-t-2 border-dashed border-gray-300 gap-2 ">
                        <p className="min-w-[140px] font-semibold text-[1rem] text-[#006CFF] py-0.5  rounded-4xl">
                          Worked solution :
                        </p>
                        <p className="font-semibold text-[1rem] text-black py-0.5 rounded-4xl leading-8">
                          {' '}
                          {subele?.explaination}
                        </p>
                      </span>
                      <div className="flex justify-between">
                        <span className="flex gap-2  ">
                          <p className="font-semibold text-[1rem] text-[#03BF62] py-0.5  rounded-4xl">
                            Answer :
                          </p>
                          <p className="font-bold text-[1rem] text-[#03BF62] py-0.5 rounded-4xl">
                            {' '}
                            {subele?.answer}
                          </p>
                        </span>
                        <p
                          className={`block lg:hidden font-semibold text-[0.8rem] px-4 ${subele?.type == 'Easy' ? 'bg-green-100 text-[#03BF62]' : subele?.type == 'Medium' ? 'bg-orange-100 text-[#FFB400]' : subele?.type == 'Hard' ? ' bg-red-100 text-red-600' : ''}   py-0.5 px-2 rounded-4xl`}
                        >
                          {' '}
                          {subele?.type}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookDemoBanner />
    </>
  )
}
