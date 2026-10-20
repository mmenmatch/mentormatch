import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findSubtopic, topics } from '../../../../../../data/aa-sl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { AASLQuestionAndAnswer } from '../../../../../../data/aa-sl'
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
const metaData: any = {
  number: {
    'standard-form': {
      metaTitle: 'IB Maths Standard Form Questions & Answers',
      metaDescription:
        'Practise standard form questions for IB Maths AA SL. Review how to write, convert and calculate with numbers in standard form using step-by-step worked solutions.',
      title: 'Standard Form Questions & Answers',
      description:
        'Build confidence with standard form questions for IB Maths AA SL. Practise writing and converting numbers in standard form, then check each method with a worked solution.',
    },
    'writing-in-standard-form': {
      metaTitle: 'IB Maths Writing in Standard Form Questions',
      metaDescription:
        'Practise writing numbers in standard form for IB Maths AA SL. Review how to convert numbers into standard form and check your method with worked explanations.',
      title: 'Writing in Standard Form Questions & Answers',
      description:
        'Practise writing numbers in standard form for IB Maths AA SL. Work through number-conversion questions and review the steps used to express numbers in standard form.',
    },
    'multiplying-in-standard-form': {
      metaTitle: 'IB Maths Multiplying in Standard Form Questions',
      metaDescription:
        'Practise multiplying numbers in standard form for IB Maths AA SL. Follow the method for multiplying coefficients and powers of 10, then review the worked solutions.',
      title: 'Multiplying in Standard Form Questions & Answers',
      description:
        'Practise multiplying numbers in standard form for IB Maths AA SL. Focus on multiplying the numerical parts and combining powers of 10, then check each step against the available explanation.',
    },
    'squaring-in-standard-form': {
      metaTitle: 'IB Maths Squaring in Standard Form Questions',
      metaDescription:
        'Practise squaring numbers in standard form for IB Maths AA SL. Review how squaring affects the coefficient and power of 10, with worked explanations for each method.',
      title: 'Squaring in Standard Form Questions & Answers',
      description:
        'Practise squaring numbers in standard form for IB Maths AA SL. Work through how the coefficient and power of 10 change when a number is squared, then review the method.',
    },
    'dividing-in-standard-form': {
      metaTitle: 'IB Maths AA SL Dividing in Standard Form Questions | Mentor Match',
      metaDescription:
        'Practise dividing numbers in standard form for IB Maths AA SL. Learn how to divide the coefficients and subtract powers of 10, with step-by-step worked solutions.',
      title: 'Dividing in Standard Form Questions & Answers',
      description:
        'Practise dividing numbers in standard form for IB Maths AA SL. Work through how to divide the coefficients and handle powers of 10, then review each step in the solution.',
    },
  },
  'sequences-and-series': {
    'arithmetic-sequences-nth-term': {
      metaTitle: 'Arithmetic Sequence Formula & Questions | IB Maths AA SL',
      metaDescription:
        'Learn what an arithmetic sequence is, understand the nth term, and practise arithmetic sequence questions with worked explanations for IB Maths AA SL.',
      title: 'Arithmetic Sequences – nth Term',
      description:
        'Understand how arithmetic sequences work and how to find the nth term. Review the common difference, follow worked examples, and practise applying the rule to arithmetic sequence questions',
    },
    'finding-common-difference': {
      metaTitle: 'Common Difference Formula & Examples | IB Maths AA SL',
      metaDescription:
        'Learn how to find the common difference in an arithmetic sequence. Review the common difference formula and practise examples for IB Maths AA SL.',
      title: 'Finding the Common Difference',
      description:
        'Learn how to identify the common difference between consecutive terms in an arithmetic sequence. Use the common difference formula, follow worked examples, and apply the method to practice questions.',
    },
    'finding-first-term-and-common-difference': {
      metaTitle: 'Find First Term & Common Difference | Arithmetic Sequences',
      metaDescription:
        'Practise finding the first term and common difference of an arithmetic sequence when terms are given. Follow the method with IB Maths AA SL examples.',
      title: 'Finding the First Term and Common Difference',
      description:
        'Learn how to find the first term and common difference when information about an arithmetic sequence is given. Work through the steps carefully and practise applying them to sequence questions.',
    },
    'formula-for-nth-term': {
      metaTitle: 'Arithmetic Sequence Formula: Find the nth Term | IB Maths AA SL',
      metaDescription:
        'Learn the arithmetic sequence formula and how to find the nth term. Review examples and practise nth-term questions for IB Maths AA SL.',
      title: 'Formula for the nth Term',
      description:
        'Understand the arithmetic sequence formula and use it to find any term in a sequence. Review how the first term and common difference fit into the rule, then apply the formula to practice questions.',
    },
  },
  'financial-mathematics': {
    'compound-interest-annual': {
      metaTitle: 'Compound Interest Formula & Questions | IB Maths AA SL',
      metaDescription:
        'Learn the compound interest formula and how to calculate compound interest annually. Review worked examples and practise compound interest questions for IB Maths AA SL.',
      title: 'Annual Compound Interest: Formula and Questions',
      description:
        'Understand how annual compound interest works and how the compound interest formula is applied. Review the key variables, follow worked examples, and practise calculating how an amount grows over time.',
    },
    'time-to-reach-a-target-value': {
      metaTitle: 'Rule of 72 & Compound Interest Time Formula | IB Maths AA SL',
      metaDescription:
        'Learn how to estimate the time needed for money to grow using the Rule of 72 and compound interest time formula. Practise with worked examples for IB Maths AA SL.',
      title: 'Time to Reach a Target Value',
      description:
        'Explore how to estimate the time it takes for an investment to reach a target value. Learn when the Rule of 72 is useful and how compound interest time calculations can be worked through step by step.',
    },
    'finding-the-interest-rate': {
      metaTitle: 'How to Calculate Interest Rate & Formula | IB Maths AA SL',
      metaDescription:
        'Learn how to calculate an interest rate using the interest rate formula and compound interest relationships. Review examples and practise finding the rate for IB Maths AA SL.',
      title: 'Finding the Interest Rate',
      description:
        'Learn how to find an unknown interest rate from the values given in a compound interest problem. Review the relevant formula, follow the calculation steps, and practise applying the method to questions.',
    },
    depreciation: {
      metaTitle: 'Depreciation Formula & Rate | IB Maths AA SL Questions',
      metaDescription:
        'Learn what depreciation means and how to calculate depreciation using the depreciation formula and rate. Review examples and practise IB Maths AA SL questions.',
      title: 'Depreciation: Formula and Questions',
      description:
        'Understand how depreciation describes a decrease in value over time. Review the depreciation formula, see how the rate affects an asset’s value, and practise applying the method to financial mathematics questions.',
    },
  },
  'number-algebra': {
    'laws-of-indices-multiplication': {
      metaTitle: 'Laws of Indices: Multiplication Rules & Questions',
      metaDescription:
        'Learn the laws of indices for multiplication, including the product of powers rule. Review exponent rules and practise laws of indices questions for IB Maths AA SL.',
      title: 'Laws of Indices – Multiplication',
      description:
        'Understand how to multiply powers using the laws of indices. Review the product of powers rule, see how it applies when the base is the same, and practise questions to strengthen your method.',
    },
    'laws-of-indices-power-of-a-power': {
      metaTitle: 'Power of a Power Rule & Examples | Laws of Indices',
      metaDescription:
        'Learn the power of a power rule and how to simplify expressions with exponents. Review examples and practise laws of indices questions for IB Maths AA SL.',
      title: 'Laws of Indices – Power of a Power',
      description:
        'Learn how to simplify a power raised to another power using the power of a power rule. Follow the exponent steps carefully, review worked examples, and practise applying the rule to expressions.',
    },
    'laws-of-indices-coefficient-variable-combined': {
      metaTitle: 'Simplifying Indices with Coefficients & Variables',
      metaDescription:
        'Practise simplifying expressions with coefficients and variables using exponent rules. Explore monomial multiplication and division for IB Maths AA SL.',
      title: 'Laws of Indices – Coefficients and Variables Combined',
      description:
        'Practise simplifying algebraic expressions that combine coefficients, variables and exponents. Review how exponent rules apply when multiplying or dividing monomials, then work through the available questions.',
    },
    'laws-of-indices-multi-variable': {
      metaTitle: 'Multiplying Exponents with Different Bases | IB Maths AA SL',
      metaDescription:
        'Practise multiplying exponents with different bases and simplifying expressions with multiple variables. Review the relevant indices rules and IB Maths AA SL questions.',
      title: 'Laws of Indices – Multi-variable',
      description:
        'Explore how to simplify expressions involving multiple variables and exponents. Identify each base carefully, apply the appropriate indices rules, and practise working through algebraic expressions step by step.',
    },
  },
  'logarithms-exponentials': {
    'evaluating-logarithms': {
      metaTitle: 'Logarithm Formula & Evaluating Logarithms Questions ',
      metaDescription:
        'Learn the logarithm formula and how to evaluate logarithms, including log base 2, log base 10 and natural logs. Practise IB Maths AA SL questions with explanations.',
      title: 'Evaluating Logarithms',
      description:
        'Learn how to evaluate logarithms using the relevant logarithm rules and formulas. Explore common bases, including base 2, base 10 and base e, then practise applying the methods to questions.',
    },
    'solving-logarithmic-equations': {
      metaTitle: 'How to Solve Logarithmic Equations | IB Maths AA SL | ',
      metaDescription:
        'Learn how to solve logarithmic equations step by step. Review log rules, explore worked examples and practise solving log equations for IB Maths AA SL.',
      title: 'Solving Logarithmic Equations',
      description:
        'Learn how to solve logarithmic equations by applying logarithm rules and working through each step carefully. Practise rearranging equations, checking valid solutions and using the available explanations to review your method.',
    },
    'natural-logarithm-rearranging': {
      metaTitle: 'Natural Log Rules & Rearranging ln Expressions | IB Maths AA SL',
      metaDescription:
        'Explore natural log rules and learn how to rearrange expressions involving ln, ln x, ln 1 and ln 0. Review examples and practise IB Maths AA SL questions.',
      title: 'Natural Logarithm – Rearranging',
      description:
        'Build confidence working with natural logarithms. Review how ln relates to e, practise rearranging expressions involving ln x, and use examples to understand the rules that apply.',
    },
    'simplifying-logarithmic-expressions': {
      metaTitle: 'Log Rules & Simplifying Logarithmic Expressions | Mentor Match',
      metaDescription:
        'Learn log rules and properties of logarithms to simplify expressions. Practise expanding and condensing logarithms using the product, quotient and power rules.',
      title: 'Simplifying Logarithmic Expressions',
      description:
        'Learn how to simplify logarithmic expressions using the properties of logarithms. Review the product, quotient and power rules, then practise expanding and condensing expressions step by step.',
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
  let pageData: any = AASLQuestionAndAnswer?.find((item: any, index: any) => item?.[topicSlug])

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
          <nav aria-label="Breadcrumb" className="lg:mb-6 text-md text-slate-500">
            <ol className="flex flex-wrap items-center lg:pl-4 pl-4 gap-2">
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
                      <p className="font-semibold text-[1rem] text-black py-0.5 px-2 rounded-4xl">
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
                      <span className="flex lg:flex-row flex-col py-4 border-t-2 border-dashed border-gray-300 gap-2 ">
                        <p className="min-w-[140px] font-semibold text-[1rem] text-[#006CFF] py-0.5  rounded-4xl">
                          Worked solution :
                        </p>
                        <p className="font-semibold text-[1rem] text-black py-0.5 rounded-4xl">
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
