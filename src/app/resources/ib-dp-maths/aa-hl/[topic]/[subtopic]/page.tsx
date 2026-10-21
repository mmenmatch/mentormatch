import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findSubtopic, topics } from '../../../../../../data/aa-hl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { AASLQuestionAndAnswer } from '../../../../../../data/aa-hl'
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
// const metaData: any = {
//   'counting-and-probability': {
//     'multiplication-principle': {
//       metaTitle: 'IB Maths Standard Form Questions & Answers',
//       metaDescription:
//         'Practise standard form questions for IB Maths AA SL. Review how to write, convert and calculate with numbers in standard form using step-by-step worked solutions.',
//       title: 'Standard Form Questions & Answers',
//       description:
//         'Build confidence with standard form questions for IB Maths AA SL. Practise writing and converting numbers in standard form, then check each method with a worked solution.',
//     },
//     'writing-in-standard-form': {
//       metaTitle: 'IB Maths Writing in Standard Form Questions',
//       metaDescription:
//         'Practise writing numbers in standard form for IB Maths AA SL. Review how to convert numbers into standard form and check your method with worked explanations.',
//       title: 'Writing in Standard Form Questions & Answers',
//       description:
//         'Practise writing numbers in standard form for IB Maths AA SL. Work through number-conversion questions and review the steps used to express numbers in standard form.',
//     },
//     'multiplying-in-standard-form': {
//       metaTitle: 'IB Maths Multiplying in Standard Form Questions',
//       metaDescription:
//         'Practise multiplying numbers in standard form for IB Maths AA SL. Follow the method for multiplying coefficients and powers of 10, then review the worked solutions.',
//       title: 'Multiplying in Standard Form Questions & Answers',
//       description:
//         'Practise multiplying numbers in standard form for IB Maths AA SL. Focus on multiplying the numerical parts and combining powers of 10, then check each step against the available explanation.',
//     },
//     'squaring-in-standard-form': {
//       metaTitle: 'IB Maths Squaring in Standard Form Questions',
//       metaDescription:
//         'Practise squaring numbers in standard form for IB Maths AA SL. Review how squaring affects the coefficient and power of 10, with worked explanations for each method.',
//       title: 'Squaring in Standard Form Questions & Answers',
//       description:
//         'Practise squaring numbers in standard form for IB Maths AA SL. Work through how the coefficient and power of 10 change when a number is squared, then review the method.',
//     },
//     'dividing-in-standard-form': {
//       metaTitle: 'IB Maths AA SL Dividing in Standard Form Questions | Mentor Match',
//       metaDescription:
//         'Practise dividing numbers in standard form for IB Maths AA SL. Learn how to divide the coefficients and subtract powers of 10, with step-by-step worked solutions.',
//       title: 'Dividing in Standard Form Questions & Answers',
//       description:
//         'Practise dividing numbers in standard form for IB Maths AA SL. Work through how to divide the coefficients and handle powers of 10, then review each step in the solution.',
//     },
//   },
//   'sequences-and-series': {
//     'arithmetic-sequences-nth-term': {
//       metaTitle: 'Arithmetic Sequence Formula & Questions | IB Maths AA SL',
//       metaDescription:
//         'Learn what an arithmetic sequence is, understand the nth term, and practise arithmetic sequence questions with worked explanations for IB Maths AA SL.',
//       title: 'Arithmetic Sequences – nth Term',
//       description:
//         'Understand how arithmetic sequences work and how to find the nth term. Review the common difference, follow worked examples, and practise applying the rule to arithmetic sequence questions',
//     },
//     'finding-common-difference': {
//       metaTitle: 'Common Difference Formula & Examples | IB Maths AA SL',
//       metaDescription:
//         'Learn how to find the common difference in an arithmetic sequence. Review the common difference formula and practise examples for IB Maths AA SL.',
//       title: 'Finding the Common Difference',
//       description:
//         'Learn how to identify the common difference between consecutive terms in an arithmetic sequence. Use the common difference formula, follow worked examples, and apply the method to practice questions.',
//     },
//     'finding-first-term-and-common-difference': {
//       metaTitle: 'Find First Term & Common Difference | Arithmetic Sequences',
//       metaDescription:
//         'Practise finding the first term and common difference of an arithmetic sequence when terms are given. Follow the method with IB Maths AA SL examples.',
//       title: 'Finding the First Term and Common Difference',
//       description:
//         'Learn how to find the first term and common difference when information about an arithmetic sequence is given. Work through the steps carefully and practise applying them to sequence questions.',
//     },
//     'formula-for-nth-term': {
//       metaTitle: 'Arithmetic Sequence Formula: Find the nth Term | IB Maths AA SL',
//       metaDescription:
//         'Learn the arithmetic sequence formula and how to find the nth term. Review examples and practise nth-term questions for IB Maths AA SL.',
//       title: 'Formula for the nth Term',
//       description:
//         'Understand the arithmetic sequence formula and use it to find any term in a sequence. Review how the first term and common difference fit into the rule, then apply the formula to practice questions.',
//     },
//   },
//   'financial-mathematics': {
//     'compound-interest-annual': {
//       metaTitle: 'Compound Interest Formula & Questions | IB Maths AA SL',
//       metaDescription:
//         'Learn the compound interest formula and how to calculate compound interest annually. Review worked examples and practise compound interest questions for IB Maths AA SL.',
//       title: 'Annual Compound Interest: Formula and Questions',
//       description:
//         'Understand how annual compound interest works and how the compound interest formula is applied. Review the key variables, follow worked examples, and practise calculating how an amount grows over time.',
//     },
//     'time-to-reach-a-target-value': {
//       metaTitle: 'Rule of 72 & Compound Interest Time Formula | IB Maths AA SL',
//       metaDescription:
//         'Learn how to estimate the time needed for money to grow using the Rule of 72 and compound interest time formula. Practise with worked examples for IB Maths AA SL.',
//       title: 'Time to Reach a Target Value',
//       description:
//         'Explore how to estimate the time it takes for an investment to reach a target value. Learn when the Rule of 72 is useful and how compound interest time calculations can be worked through step by step.',
//     },
//     'finding-the-interest-rate': {
//       metaTitle: 'How to Calculate Interest Rate & Formula | IB Maths AA SL',
//       metaDescription:
//         'Learn how to calculate an interest rate using the interest rate formula and compound interest relationships. Review examples and practise finding the rate for IB Maths AA SL.',
//       title: 'Finding the Interest Rate',
//       description:
//         'Learn how to find an unknown interest rate from the values given in a compound interest problem. Review the relevant formula, follow the calculation steps, and practise applying the method to questions.',
//     },
//     depreciation: {
//       metaTitle: 'Depreciation Formula & Rate | IB Maths AA SL Questions',
//       metaDescription:
//         'Learn what depreciation means and how to calculate depreciation using the depreciation formula and rate. Review examples and practise IB Maths AA SL questions.',
//       title: 'Depreciation: Formula and Questions',
//       description:
//         'Understand how depreciation describes a decrease in value over time. Review the depreciation formula, see how the rate affects an asset’s value, and practise applying the method to financial mathematics questions.',
//     },
//   },
//   'number-algebra': {
//     'laws-of-indices-multiplication': {
//       metaTitle: 'Laws of Indices: Multiplication Rules & Questions',
//       metaDescription:
//         'Learn the laws of indices for multiplication, including the product of powers rule. Review exponent rules and practise laws of indices questions for IB Maths AA SL.',
//       title: 'Laws of Indices – Multiplication',
//       description:
//         'Understand how to multiply powers using the laws of indices. Review the product of powers rule, see how it applies when the base is the same, and practise questions to strengthen your method.',
//     },
//     'laws-of-indices-power-of-a-power': {
//       metaTitle: 'Power of a Power Rule & Examples | Laws of Indices',
//       metaDescription:
//         'Learn the power of a power rule and how to simplify expressions with exponents. Review examples and practise laws of indices questions for IB Maths AA SL.',
//       title: 'Laws of Indices – Power of a Power',
//       description:
//         'Learn how to simplify a power raised to another power using the power of a power rule. Follow the exponent steps carefully, review worked examples, and practise applying the rule to expressions.',
//     },
//     'laws-of-indices-coefficient-variable-combined': {
//       metaTitle: 'Simplifying Indices with Coefficients & Variables',
//       metaDescription:
//         'Practise simplifying expressions with coefficients and variables using exponent rules. Explore monomial multiplication and division for IB Maths AA SL.',
//       title: 'Laws of Indices – Coefficients and Variables Combined',
//       description:
//         'Practise simplifying algebraic expressions that combine coefficients, variables and exponents. Review how exponent rules apply when multiplying or dividing monomials, then work through the available questions.',
//     },
//     'laws-of-indices-multi-variable': {
//       metaTitle: 'Multiplying Exponents with Different Bases | IB Maths AA SL',
//       metaDescription:
//         'Practise multiplying exponents with different bases and simplifying expressions with multiple variables. Review the relevant indices rules and IB Maths AA SL questions.',
//       title: 'Laws of Indices – Multi-variable',
//       description:
//         'Explore how to simplify expressions involving multiple variables and exponents. Identify each base carefully, apply the appropriate indices rules, and practise working through algebraic expressions step by step.',
//     },
//   },
//   'logarithms-exponentials': {
//     'evaluating-logarithms': {
//       metaTitle: 'Logarithm Formula & Evaluating Logarithms Questions ',
//       metaDescription:
//         'Learn the logarithm formula and how to evaluate logarithms, including log base 2, log base 10 and natural logs. Practise IB Maths AA SL questions with explanations.',
//       title: 'Evaluating Logarithms',
//       description:
//         'Learn how to evaluate logarithms using the relevant logarithm rules and formulas. Explore common bases, including base 2, base 10 and base e, then practise applying the methods to questions.',
//     },
//     'solving-logarithmic-equations': {
//       metaTitle: 'How to Solve Logarithmic Equations | IB Maths AA SL | ',
//       metaDescription:
//         'Learn how to solve logarithmic equations step by step. Review log rules, explore worked examples and practise solving log equations for IB Maths AA SL.',
//       title: 'Solving Logarithmic Equations',
//       description:
//         'Learn how to solve logarithmic equations by applying logarithm rules and working through each step carefully. Practise rearranging equations, checking valid solutions and using the available explanations to review your method.',
//     },
//     'natural-logarithm-rearranging': {
//       metaTitle: 'Natural Log Rules & Rearranging ln Expressions | IB Maths AA SL',
//       metaDescription:
//         'Explore natural log rules and learn how to rearrange expressions involving ln, ln x, ln 1 and ln 0. Review examples and practise IB Maths AA SL questions.',
//       title: 'Natural Logarithm – Rearranging',
//       description:
//         'Build confidence working with natural logarithms. Review how ln relates to e, practise rearranging expressions involving ln x, and use examples to understand the rules that apply.',
//     },
//     'simplifying-logarithmic-expressions': {
//       metaTitle: 'Log Rules & Simplifying Logarithmic Expressions | Mentor Match',
//       metaDescription:
//         'Learn log rules and properties of logarithms to simplify expressions. Practise expanding and condensing logarithms using the product, quotient and power rules.',
//       title: 'Simplifying Logarithmic Expressions',
//       description:
//         'Learn how to simplify logarithmic expressions using the properties of logarithms. Review the product, quotient and power rules, then practise expanding and condensing expressions step by step.',
//     },
//   },
// }
export const metaData: any = {
  'counting-and-probability': {
    'multiplication-principle': {
      metaTitle: 'Fundamental Counting Principle Questions | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL fundamental counting principle questions. Use the multiplication principle to count outcomes when choices are made in stages.',
      title: 'IB Maths AA HL Multiplication Principle Questions',
      description:
        'Fundamental counting principle questions: when a task is made of independent stages, multiply the number of choices at each stage.',
    },

    // Not in the HL brief — left unchanged
    'addition-principle': {
      metaTitle: 'Addition Principle Questions | IB Maths AA HL',
      metaDescription:
        'Practise the addition principle for IB Maths AA HL. Count outcomes across mutually exclusive alternatives by adding the choices in each case.',
      title: 'Addition Principle: Questions & Answers',
      description:
        'Understand how to count possible outcomes by adding the numbers of choices across mutually exclusive cases.',
    },

    // Not in the HL brief — left unchanged
    'Multiplication-Addition-Principles': {
      metaTitle: 'Addition and Multiplication Principle Questions | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL addition and multiplication principle questions. Add outcomes across separate cases and multiply choices across successive stages.',
      title: 'Multiplication & Addition Principles: Questions & Answers',
      description:
        'Combine the multiplication and addition principles to solve counting problems involving multiple stages and alternative cases.',
    },

    permutations: {
      metaTitle: 'Permutations Questions | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL permutations questions: count arrangements where order matters, using factorials and nPr, including repeated objects.',
      title: 'IB Maths AA HL Permutations Questions',
      description:
        'Permutations questions on counting arrangements where order matters. Use factorials and nPr, and adjust for repeated objects.',
    },

    // New in the HL brief — slug suggested; no matching entry in topics yet
    combinations: {
      metaTitle: 'Combinations Questions | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL combinations questions: count selections where order does not matter, using nCr, and tell combinations apart from permutations.',
      title: 'IB Maths AA HL Combinations Questions',
      description:
        'Combinations questions on counting selections where order does not matter. Use nCr and decide when a problem calls for combinations rather than permutations.',
    },

    // New in the HL brief — slug suggested; no matching entry in topics yet
    'counting-with-restrictions': {
      metaTitle: 'Permutation and Combination Questions with Restrictions',
      metaDescription:
        'IB Maths AA HL permutation and combination questions with restrictions: objects together or apart, fixed positions and cases.',
      title: 'IB Maths AA HL Counting Questions with Restrictions',
      description:
        'Permutation and combination questions with restrictions, such as objects kept together or apart, fixed positions, and cases that must be counted separately.',
    },
  },

  'binomial-series': {
    'binomial-expansion-applications-and-approximations': {
      metaTitle: 'Binomial Approximation Questions | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL binomial approximation questions: choose a suitable expansion, approximate the value and interpret the result within the conditions given.',
      title: 'IB Maths AA HL Binomial Expansion: Applications & Approximations',
      description:
        'Use binomial expansions to approximate values such as roots and powers. These binomial approximation questions ask you to choose a suitable substitution and judge how many terms you need.',
    },

    'binomial-series-coefficient-problems': {
      metaTitle: 'Binomial Theorem Questions: Coefficients | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL binomial theorem questions on finding a specified coefficient or term. Identify the general term, match the power and simplify.',
      title: 'IB Maths AA HL Binomial Series Coefficient Questions',
      description:
        'Work through binomial theorem questions that ask for a particular coefficient, a constant term or an unknown in the expansion. Each starts from the general term.',
    },

    'binomial-expansion': {
      metaTitle: 'Binomial Expansion Negative Power Questions | IB Maths AA HL',
      metaDescription:
        'Binomial expansion negative power questions for IB Maths AA HL: expand (1+x)^n for negative or fractional n, valid for |x| < 1.',
      title: 'IB Maths AA HL Binomial Expansion of (1+x)^n for |x| < 1',
      description:
        'Practise binomial expansion negative power questions, along with fractional powers. When n is not a positive integer, (1+x)^n becomes an infinite series that is valid only for |x| < 1.',
    },

    'binomial-expansion-factoring-out-constant': {
      metaTitle: 'Binomial Expansion Fractional Power | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL binomial expansion fractional power questions: factor a constant out of (a+bx)^n first, then expand and simplify.',
      title: 'IB Maths AA HL Binomial Expansion by Factoring Out a Constant',
      description:
        'Rewrite (a+bx)^n as a^n(1+bx/a)^n before expanding. These binomial expansion fractional power questions focus on choosing this form and tracking the constant through every term.',
    },
  },

  'complex-numbers': {
    'modulus-argument-form': {
      metaTitle: 'Modulus–Argument Form: Complex Numbers Practice Questions',
      metaDescription:
        'IB Maths AA HL complex numbers practice questions on modulus–argument form. Find the modulus and argument and check the quadrant each time.',
      title: 'IB Maths AA HL Complex Numbers in Modulus–Argument Form',
      description:
        'These complex numbers practice questions cover writing z in the form r(cos θ + i sin θ). Find r and θ, take care with the quadrant, and convert between forms.',
    },

    'euler-form': {
      metaTitle: 'Exponential Form of Complex Numbers | IB Maths AA HL',
      metaDescription:
        'Practise the exponential form of complex numbers (Euler form), z = re^(iθ), for IB Maths AA HL. Convert between forms and simplify products and powers.',
      title: 'IB Maths AA HL Complex Numbers in Euler Form',
      description:
        'Questions on the exponential form of complex numbers, z = re^(iθ). Convert between Cartesian, modulus–argument and Euler form, and use it to simplify products, quotients and powers.',
    },

    'De-Moivres-theorem-evaluation': {
      metaTitle: "De Moivre's Theorem Questions and Answers | IB Maths AA HL",
      metaDescription:
        "IB Maths AA HL De Moivre's theorem questions and answers. Raise complex numbers to powers in modulus–argument form and simplify the result.",
      title: "IB Maths AA HL De Moivre's Theorem Questions",
      description:
        "Work through De Moivre's theorem questions and answers on evaluating powers of complex numbers. Convert to modulus–argument form first, then apply the theorem.",
    },

    'nth-roots-geometric-interpretation': {
      metaTitle: 'nth Roots of Complex Numbers | IB Maths AA HL',
      metaDescription:
        'Find the nth roots of complex numbers and interpret them geometrically for IB Maths AA HL: equally spaced points on a circle in the Argand diagram.',
      title: 'IB Maths AA HL nth Roots of Complex Numbers',
      description:
        'Find the nth roots of complex numbers and see how they sit on the Argand diagram: n points equally spaced on a circle centred at the origin.',
    },
  },

  vectors: {
    'scalar-product': {
      metaTitle: 'Dot Product Questions (Scalar Product) | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL dot product questions: compute the scalar product of two vectors, test for perpendicularity and use its algebraic properties.',
      title: 'IB Maths AA HL Scalar Product Questions',
      description:
        'Dot product questions on calculating a·b from components, testing whether two vectors are perpendicular and applying the properties of the scalar product.',
    },

    'angle-between-vectors': {
      metaTitle: 'Angle Between Two Vectors: Questions | IB Maths AA HL',
      metaDescription:
        'Find the angle between two vectors using the scalar product, for IB Maths AA HL. Apply the formula and interpret acute and obtuse angles.',
      title: 'IB Maths AA HL Angle Between Vectors Questions',
      description:
        'Questions on finding the angle between two vectors. Use the angle between two vectors formula, cos θ = a·b / (|a||b|), and interpret the result in context.',
    },

    'vector-equation-of-a-line': {
      metaTitle: 'Vector Equation of a Line Questions | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL questions on the vector equation of a line, r = a + λb. Form equations, find points and test whether lines intersect.',
      title: 'IB Maths AA HL Vector Equation of a Line Questions',
      description:
        'Practise writing the vector equation of a line, r = a + λb, from a point and a direction or from two points, and use it to work with lines in 3D.',
    },

    'cross-Pproduct-scalar-triple-product': {
      metaTitle: 'Cross Product Questions | IB Maths AA HL Vectors',
      metaDescription:
        'IB Maths AA HL cross product questions: find a×b, use it for perpendicular vectors and areas, and evaluate the scalar triple product.',
      title: 'IB Maths AA HL Cross Product and Scalar Triple Product Questions',
      description:
        'Cross product questions on finding a×b, using it to obtain a vector perpendicular to two others, calculating areas and evaluating the scalar triple product.',
    },
  },

  calculus: {
    limits: {
      metaTitle: 'Limits Practice Problems | IB Maths AA HL Calculus',
      metaDescription:
        "IB Maths AA HL limits practice problems. Evaluate limits algebraically, including indeterminate forms, and use L'Hôpital's rule where appropriate.",
      title: 'IB Maths AA HL Limits Questions & Practice',
      description:
        "Limits practice problems for IB Maths AA HL. Evaluate limits by simplifying, handle indeterminate forms and decide when L'Hôpital's rule applies.",
    },

    'implicit-differentiation': {
      metaTitle: 'Implicit Differentiation Questions | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL implicit differentiation questions: differentiate both sides, find dy/dx and use it for gradients, tangents and normals.',
      title: 'IB Maths AA HL Implicit Differentiation Questions',
      description:
        'Implicit differentiation questions where y cannot easily be written in terms of x. Differentiate term by term, collect the dy/dx terms and use the result.',
    },

    'integration-by-parts': {
      metaTitle: 'Integration by Parts Questions | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL integration by parts questions. Choose u and dv/dx well, apply the formula and handle repeated or definite integrals.',
      title: 'IB Maths AA HL Integration by Parts Questions',
      description:
        'Integration by parts questions for IB Maths AA HL. Decide which factor to differentiate and which to integrate, then apply the formula, repeating it where needed.',
    },

    'reduction-formula': {
      metaTitle: 'Reduction Formula Integration Questions | IB Maths AA HL',
      metaDescription:
        'IB Maths AA HL reduction formula integration questions. Derive a reduction formula using integration by parts and apply it to evaluate integrals.',
      title: 'IB Maths AA HL Reduction Formula Integration Questions',
      description:
        'Reduction formula integration questions: use integration by parts to relate Iₙ to a lower-index integral, then apply the reduction formula repeatedly to evaluate it.',
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
      canonical: `/resources/ib-dp-maths/aa-hl/${topic.slug}/${subtopic.slug}`,
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
          <nav aria-label="Breadcrumb" className="lg:mb-6 text-md text-slate-500 mt-4">
            <ol className="flex flex-wrap items-center  pl-4  gap-2">
              <li>
                <Link href="/resources/ib-dp-maths/aa-hl" className="hover:text-blue-700">
                  AASL Resources
                </Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link
                  href={`/resources/ib-dp-maths/aa-hl/${topic.slug}`}
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
                      <span className="flex  flex-col py-4 border-t-2 border-dashed border-gray-300 gap-2 ">
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
