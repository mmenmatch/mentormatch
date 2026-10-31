import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findSubtopic, topics } from '../../../../../../data/ai-hl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { AIHLQuestionAndAnswer } from '../../../../../../data/ai-hl'
import BookDemoBanner from '@/app/components/BookDemoBanner/BookDemoBanner'
import { Menu } from './Menu'

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
  'logarithms-and-exponentials': {
    'solving-log-equations': {
      metaTitle: 'Solving Logarithmic Equations | IB Maths AI HL ',
      metaDescription:
        'Practise solving logarithmic equations in base 10 for IB Maths AI HL: rewrite each log in exponential form and check every solution.',
      title: 'IB Maths AI HL 1.9 Solving Log Equations (Base 10)',
      description:
        'Solving logarithmic equations in base 10 rests on one definition: if log₁₀ x = k, then x = 10ᵏ. These questions apply it to equations of increasing difficulty.',
    },
    'laws-of-logarithms-expressing-in-terms-of-p-and-q': {
      metaTitle: 'Log Rules Questions | IB Maths AI HL ',
      metaDescription:
        'Use the log rules in IB Maths AI HL to rewrite logarithms in terms of p and q, applying the product, quotient and power laws.',
      title: 'IB Maths AI HL 1.9 Laws of Logarithms: Expressing in Terms of p and q',
      description:
        'These questions give you log a = p and log b = q, then ask you to rewrite other logarithms using them. Each one is a direct test of the log rules.',
    },
    'solving-equations-using-log-laws': {
      metaTitle: 'Laws of Logarithms Questions | IB AI HL ',
      metaDescription:
        'Solve equations with the laws of logarithms in IB Maths AI HL: combine logs into one, then remove it and check each solution.',
      title: 'IB Maths AI HL 1.9 Solving Equations Using Log Laws',
      description:
        'When an equation has more than one logarithm, the laws of logarithms combine them into one. These questions practise combining, solving and checking.',
    },
    'solving-exponential-equations-using-logarithms': {
      metaTitle: 'Exponential Equations Questions | IB AI HL ',
      metaDescription:
        'Exponential equations questions for IB Maths AI HL: take logarithms of both sides to solve for an unknown in the power, with mark scheme working.',
      title: 'IB Maths AI HL 1.9 Solving Exponential Equations Using Logarithms',
      description:
        'When the unknown sits in the power, logarithms bring it down. These exponential equations questions practise taking logs of both sides and solving exactly or with a GDC.',
    },
    'solving-equations-with-non-standard-bases': {
      metaTitle: 'Change of Base Formula | IB Maths AI HL ',
      metaDescription:
        'Use the change of base formula in IB Maths AI HL to evaluate and solve logarithmic equations with non-standard bases, with mark scheme working.',
      title: 'IB Maths AI HL 1.9 Solving Equations with Non-Standard Bases',
      description:
        'A calculator works in base 10 and base e, so other bases need the change of base formula: logₐ x = log x ÷ log a. These questions use it to evaluate and solve.',
    },
  },
  matrices: {
    'matrix-addition-and-subtraction': {
      metaTitle: 'Matrices Questions | IB Maths AI HL ',
      metaDescription:
        'Matrices questions for IB Maths AI HL on adding and subtracting matrices, including when the operation is defined and solving for unknowns.',
      title: 'IB Maths AI HL 1.14 Matrix Addition & Subtraction Questions',
      description:
        'Matrices of the same order are added and subtracted element by element. These matrices questions practise the operation and use it to find unknown entries.',
    },
    'matrix-multiplication': {
      metaTitle: 'Matrix Multiplication Questions | IB AI HL ',
      metaDescription:
        'Matrix multiplication questions for IB Maths AI HL: check the orders, multiply rows by columns and see why AB is not always BA.',
      title: 'IB Maths AI HL 1.14 Matrix Multiplication Questions',
      description:
        'Matrix multiplication combines rows of the first matrix with columns of the second, so order matters. These matrix multiplication questions practise the method by hand and with a GDC.',
    },
    'matrix-equations': {
      metaTitle: 'Solving Systems of Equations Using Matrices ',
      metaDescription:
        'Matrix equations for IB Maths AI HL: write simultaneous equations as AX = B, then practise solving systems of equations using matrices.',
      title: 'IB Maths AI HL 1.14 Matrix Equations Questions',
      description:
        'Any set of simultaneous linear equations can be written as one matrix equation, AX = B. These questions practise solving systems of equations using matrices.',
    },
    'inverse-of-3x3-Matrix': {
      metaTitle: 'Inverse of a Matrix: 3×3 Questions | IB AI HL ',
      metaDescription:
        'Find the inverse of a matrix in IB Maths AI HL for 3×3 matrices, check it is non-singular and use it to solve matrix equations.',
      title: 'IB Maths AI HL 1.14 Inverse of a 3×3 Matrix Questions',
      description:
        'The inverse of a matrix undoes it, and exists only when the determinant is non-zero. These questions find the inverse of 3×3 matrices with a GDC and apply it.',
    },
    'inverse-of-2x2-matrix': {
      metaTitle: 'Inverse Matrix Questions: 2×2 | IB Maths AI HL ',
      metaDescription:
        'Inverse matrix questions for IB Maths AI HL: find the inverse of a 2×2 matrix by hand using the determinant and the swap-and-negate rule.',
      title: 'IB Maths AI HL 1.14 Inverse of a 2×2 Matrix Questions',
      description:
        'A 2×2 inverse can be found by hand in one line. These inverse matrix questions practise the formula and the determinant check that comes before it.',
    },
  },
  'graph-theory': {
    'adjacency-matrices': {
      metaTitle: 'Adjacency Matrix Questions | IB Maths AI HL ',
      metaDescription:
        'Adjacency matrix questions for IB Maths AI HL: build the matrix from a graph and read degrees, loops and connections from it.',
      title: 'IB Maths AI HL 3.15 Adjacency Matrix Questions',
      description:
        'An adjacency matrix records every connection in a graph as a number. These questions build the adjacency matrix from a graph and read information back from it.',
    },
    'kruskals-algorithm': {
      metaTitle: "Kruskal's Algorithm Questions | IB Maths AI HL ",
      metaDescription:
        "Kruskal's algorithm questions for IB Maths AI HL: build a minimum spanning tree by choosing the shortest edges that avoid cycles.",
      title: "IB Maths AI HL 3.16 Kruskal's Algorithm Questions",
      description:
        "Kruskal's algorithm builds a minimum spanning tree by adding the shortest available edge each time, as long as it does not form a cycle.",
    },
    'prims-algorithm': {
      metaTitle: "Prim's Algorithm Questions | IB Maths AI HL ",
      metaDescription:
        "Prim's algorithm questions for IB Maths AI HL: grow a minimum spanning tree from one vertex, on graphs and distance tables.",
      title: "IB Maths AI HL 3.16 Prim's Algorithm Questions",
      description:
        "Prim's algorithm grows a minimum spanning tree from a single vertex, adding the nearest unconnected vertex each time. It works on both graphs and distance tables.",
    },
    'minimum-spanning-trees': {
      metaTitle: 'Minimum Spanning Tree Questions | IB AI HL ',
      metaDescription:
        'Minimum spanning tree questions for IB Maths AI HL: find the tree, state its total weight and interpret the result in a real context.',
      title: 'IB Maths AI HL 3.16 Minimum Spanning Tree Questions',
      description:
        'A minimum spanning tree connects every vertex at the lowest total weight. These minimum spanning tree questions ask you to find it, state its weight and explain what it means.',
    },
    'travelling-salesman-problem-nearest-neighbour-algorithm': {
      metaTitle: 'Travelling Salesman Problem | IB Maths AI HL ',
      metaDescription:
        'The travelling salesman problem in IB Maths AI HL: find an upper bound for the shortest tour with the nearest neighbour algorithm.',
      title: 'IB Maths AI HL 3.16 Travelling Salesman Problem: Nearest Neighbour',
      description:
        'The travelling salesman problem asks for the shortest route that visits every vertex and returns to the start. The nearest neighbour algorithm gives an upper bound for it.',
    },
  },
  'statistics-and-probability': {
    'coefficient-of-determination-r2': {
      metaTitle: 'Coefficient of Determination R² | IB AI HL ',
      metaDescription:
        'The coefficient of determination R² in IB Maths AI HL: measure how well a model fits the data and compare regression models.',
      title: 'IB Maths AI HL 4.13 Coefficient of Determination R² Questions',
      description:
        'The coefficient of determination, R², measures how much of the variation in the data a model explains. These questions find it on a GDC and use it to compare models.',
    },
    'confidence-intervals-unknown-variance-t-distribution': {
      metaTitle: 'Confidence Interval: t-Distribution | IB AI HL ',
      metaDescription:
        'Confidence interval questions for IB Maths AI HL when the variance is unknown: use the t-distribution and unbiased estimates.',
      title: 'IB Maths AI HL 4.16 Confidence Intervals: Unknown Variance (t-Distribution)',
      description:
        "When the population variance is unknown, a confidence interval uses the t-distribution and the sample's unbiased estimate of variance. These questions build a confidence interval for the mean.",
    },
    'confidence-intervals-known-variance-z-distribution': {
      metaTitle: 'Confidence Interval Formula | IB Maths AI HL ',
      metaDescription:
        'Apply the confidence interval formula in IB Maths AI HL when the population variance is known, using the z-distribution.',
      title: 'IB Maths AI HL 4.16 Confidence Intervals: Known Variance (z-Distribution)',
      description:
        'With a known population variance, the confidence interval formula is x̄ ± z × σ/√n. These questions apply it and interpret the width of the interval.',
    },
    'poisson-probability-calculations': {
      metaTitle: 'Poisson Distribution Questions | IB Maths AI HL ',
      metaDescription:
        'Poisson distribution questions for IB Maths AI HL: exact and cumulative probabilities for events at a constant average rate.',
      title: 'IB Maths AI HL 4.17 Poisson Probability Questions',
      description:
        'The Poisson distribution models how many times an event happens in a fixed interval. These Poisson distribution questions find exact and cumulative probabilities on a GDC.',
    },
    'poisson-mean-and-variance': {
      metaTitle: 'Poisson Distribution Formula | IB AI HL ',
      metaDescription:
        'The Poisson distribution formula and its mean and variance in IB Maths AI HL: use E(X) = Var(X) = λ to test whether the model fits.',
      title: 'IB Maths AI HL 4.17 Poisson Mean and Variance Questions',
      description:
        'The Poisson distribution formula, P(X = x) = e⁻λ λˣ ÷ x!, has one parameter, and both the mean and the variance equal λ. These questions use that property to test whether a Poisson model fits.',
    },
  },
  'statistical-hypothesis-testing': {
    'one-sample-z-test-t-test': {
      metaTitle: 'Hypothesis Testing: z and t Tests | IB AI HL ',
      metaDescription:
        'Hypothesis testing for a population mean in IB Maths AI HL: choose a z-test or t-test, find the p-value and conclude in context.',
      title: 'IB Maths AI HL 4.18 Hypothesis Testing: One-Sample z-Test and t-Test',
      description:
        'Hypothesis testing for a mean starts with one choice: a z-test when the population standard deviation is known, a t-test when it is not. These questions practise both.',
    },
    'one-sample-t-test': {
      metaTitle: 'Hypothesis Testing Questions | IB AI HL ',
      metaDescription:
        'Hypothesis testing questions for IB Maths AI HL using the one-sample t-test when the population variance is unknown, with mark scheme working.',
      title: 'IB Maths AI HL 4.18 One-Sample t-Test Questions',
      description:
        'These hypothesis testing questions use the one-sample t-test, the standard choice when the population variance must be estimated from the sample.',
    },
    'critical-region-one-sample-z-test': {
      metaTitle: 'Critical Region Hypothesis Testing | IB AI HL ',
      metaDescription:
        'Critical region hypothesis testing for IB Maths AI HL: find the critical region for a one-sample z-test and decide whether to reject H₀.',
      title: 'IB Maths AI HL 4.18 Critical Region Questions (One-Sample z-Test)',
      description:
        'The critical region in hypothesis testing is the set of values that lead you to reject H₀. These questions find its boundary for a one-sample z-test.',
    },
    'one-sample-z-test-known-sigma': {
      metaTitle: 'p-Value Hypothesis Testing: z-Test | IB AI HL ',
      metaDescription:
        'p-value hypothesis testing for IB Maths AI HL with a one-sample z-test when the population standard deviation is known, concluding in context.',
      title: 'IB Maths AI HL 4.18 One-Sample z-Test Questions (Known σ)',
      description:
        'When σ is known, the one-sample z-test gives a p-value directly. These p-value hypothesis testing questions practise reading it correctly and concluding in context.',
    },
    'type-i-and-type-ii-error-normal-distribution': {
      metaTitle: 'Type 1 and Type 2 Errors Questions | IB AI HL ',
      metaDescription:
        'Type 1 and type 2 errors for IB Maths AI HL with the normal distribution: define each error and calculate its probability.',
      title: 'IB Maths AI HL 4.18 Type I and Type II Error Questions',
      description:
        'A type 1 error rejects a true null hypothesis; a type 2 error fails to reject a false one. These questions define type 1 and type 2 errors and calculate their probabilities.',
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
  let pageData: any = AIHLQuestionAndAnswer?.find((item: any, index: any) => item?.[topicSlug])

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
