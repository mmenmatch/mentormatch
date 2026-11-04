import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findSubtopic, topics } from '../../../../../../data/aa-sl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { AASLQuestionAndAnswer } from '../../../../../../data/aa-sl'
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
//   number: {
//     'standard-form': {
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
//       metaTitle: 'IB Maths AA SL Dividing in Standard Form Questions  ',
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
//       metaTitle: 'Log Rules & Simplifying Logarithmic Expressions  ',
//       metaDescription:
//         'Learn log rules and properties of logarithms to simplify expressions. Practise expanding and condensing logarithms using the product, quotient and power rules.',
//       title: 'Simplifying Logarithmic Expressions',
//       description:
//         'Learn how to simplify logarithmic expressions using the properties of logarithms. Review the product, quotient and power rules, then practise expanding and condensing expressions step by step.',
//     },
//   },
// }

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
      metaTitle: 'IB Maths AA SL Dividing in Standard Form Questions  ',
      metaDescription:
        'Practise dividing numbers in standard form for IB Maths AA SL. Learn how to divide the coefficients and subtract powers of 10, with step-by-step worked solutions.',
      title: 'Dividing in Standard Form Questions & Answers',
      description:
        'Practise dividing numbers in standard form for IB Maths AA SL. Work through how to divide the coefficients and handle powers of 10, then review each step in the solution.',
    },
    'adding-subtracting-in-standard-form': {
      metaTitle: 'Adding Standard Form Questions | IB Maths AA SL  ',
      metaDescription:
        'Practise adding standard form numbers in IB Maths AA SL, and subtracting them, by matching the powers of 10 before you combine them.',
      title: 'IB Maths AA SL Adding and Subtracting in Standard Form',
      description:
        'Unlike multiplying, adding standard form numbers needs the powers of 10 to match first. These questions practise adding and subtracting in standard form step by step.',
      questionSectionTitle: 'Adding/Subtracting in Standard Form: Questions & Answers',
      questionSectionDescription:
        'Rewrite one number so both share the same power of 10, add or subtract the front numbers, then adjust the answer back into correct standard form. Questions follow syllabus section SL 1.1. Every question comes with the mark scheme working.',
    },
    'proof-multiplication-in-standard-form': {
      metaTitle: 'Standard Form Exam Questions: Proof | IB AA SL  ',
      metaDescription:
        'Standard form exam questions for IB Maths AA SL that ask you to prove a result: show why multiplying numbers in standard form works.',
      title: 'IB Maths AA SL Proof: Multiplication in Standard Form',
      description:
        'Some standard form exam questions ask you to prove a result rather than calculate one. These questions show why (a × 10ⁿ)(b × 10ᵐ) = ab × 10ⁿ⁺ᵐ, and when the answer needs adjusting.',
      questionSectionTitle: 'Proof – Multiplication in Standard Form: Questions & Answers',
      questionSectionDescription:
        'Write each number as a × 10ⁿ with 1 ≤ a < 10, multiply the front numbers and add the powers, then show how to adjust when ab is 10 or more. State each step clearly. Questions follow syllabus section SL 1.1. Every question comes with the mark scheme working.',
    },
    'standard-form-multi-part-application': {
      metaTitle: 'Standard Form Questions | IB Maths AA SL  ',
      metaDescription:
        'Multi-part standard form questions for IB Maths AA SL that combine converting, calculating and interpreting large and small numbers.',
      title: 'IB Maths AA SL Standard Form Questions: Multi-Part Applications',
      description:
        'These standard form questions come in several linked parts that convert, calculate and interpret very large or very small numbers, the way longer exam questions do.',
      questionSectionTitle: 'Standard Form – Multi-part Application: Questions & Answers',
      questionSectionDescription:
        'Answer each part in order, carry exact values forward, and give the final answer in standard form to the accuracy the question asks for. Questions follow syllabus section SL 1.1. Every question comes with the mark scheme working.',
    },
    'standard-form-real-world-context': {
      metaTitle: 'Standard Form Word Problems | IB Maths AA SL  ',
      metaDescription:
        'Standard form word problems for IB Maths AA SL: distances in space, populations and microscopic sizes, calculated and compared.',
      title: 'IB Maths AA SL Standard Form in Real-World Contexts',
      description:
        'Standard form is how science writes very large and very small quantities. These standard form word problems use distances, populations and microscopic sizes.',
      questionSectionTitle: 'Standard Form – Real-World Context: Questions & Answers',
      questionSectionDescription:
        'Pick out the values, write each in standard form, carry out the calculation, and include units in your final answer. Questions follow syllabus section SL 1.1. Every question comes with the mark scheme working.',
    },
    'generalising-standard-form-algebra': {
      metaTitle: 'Scientific Notation Rules & Algebra | IB AA SL  ',
      metaDescription:
        'Apply the scientific notation rules in IB Maths AA SL to algebraic expressions, and generalise how standard form behaves.',
      title: 'IB Maths AA SL Generalising Standard Form with Algebra',
      description:
        'The scientific notation rules work for letters as well as numbers. These standard form algebra questions write general results such as (a × 10ⁿ)(b × 10ᵐ).',
      questionSectionTitle: 'Generalising Standard Form (Algebra): Questions & Answers',
      questionSectionDescription:
        'Treat the front numbers and the powers of 10 separately, apply the laws of indices to the powers, and state any condition on a or b for the result to stay in standard form. Questions follow syllabus section SL 1.1. Every question comes with the mark scheme working.',
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
    'arithmetic-series-sum': {
      metaTitle: 'Sum of Arithmetic Sequence Questions | IB AA SL  ',
      metaDescription:
        'Find the sum of an arithmetic sequence in IB Maths AA SL using the arithmetic series formulae, with mark scheme working.',
      title: 'IB Maths AA SL Arithmetic Series: Sum Questions',
      description:
        'The sum of an arithmetic sequence comes from one of two formulae. These arithmetic series questions practise choosing the right one and applying it accurately.',
      questionSectionTitle: 'Arithmetic Series – Sum: Questions & Answers',
      questionSectionDescription:
        'Use Sₙ = n/2(2u₁ + (n − 1)d) with the first term and common difference, or Sₙ = n/2(u₁ + uₙ) when the last term is known, to find the sum of arithmetic series terms. Questions follow syllabus section SL 1.2. Every question comes with the mark scheme working.',
    },
    'sigma-notation': {
      metaTitle: 'Sigma Notation Questions | IB Maths AA SL  ',
      metaDescription:
        'Sigma notation questions for IB Maths AA SL: read, write and evaluate sums written with Σ, step by step, with mark scheme working.',
      title: 'IB Maths AA SL Sigma Notation Questions',
      description:
        'Sigma notation writes a long sum in one line. These questions practise reading the limits, listing the terms and evaluating each sum.',
      questionSectionTitle: 'Sigma Notation: Questions & Answers',
      questionSectionDescription:
        'Substitute the lower and upper limits to find the first and last terms, count the terms, and apply the arithmetic series formula or your GDC. Questions follow syllabus section SL 1.2. Every question comes with the mark scheme working.',
    },
    'mixed-problem-solving': {
      metaTitle: 'Arithmetic Progression Problems | IB AA SL  ',
      metaDescription:
        'Mixed arithmetic progression problems for IB Maths AA SL that combine terms, sums and unknowns in longer exam-style questions.',
      title: 'IB Maths AA SL Arithmetic Sequences: Mixed Problem Solving',
      description:
        'These arithmetic progression problems combine terms, sums and unknowns in one question, the way longer exam questions do.',
      questionSectionTitle: 'Mixed / Problem Solving: Questions & Answers',
      questionSectionDescription:
        'Write each piece of information as an equation in u₁ and d, solve them simultaneously, then answer the question that was asked. Questions follow syllabus section SL 1.2. Every question comes with the mark scheme working.',
    },
    'sum-formula-given-sn': {
      metaTitle: 'Sum of n Terms Formula Questions | IB AA SL  ',
      metaDescription:
        'Use the sum of n terms formula in IB Maths AA SL to work backwards from Sₙ to the first term, common difference or a single term.',
      title: 'IB Maths AA SL Sum Formula Given Sₙ Questions',
      description:
        'When a sequence is described by its sum of n terms formula, you can still find any term. These questions work back from Sₙ to the sequence itself.',
      questionSectionTitle: 'Sum Formula Given Sₙ: Questions & Answers',
      questionSectionDescription:
        'Use u₁ = S₁ and uₙ = Sₙ − Sₙ₋₁, then compare with the general form to read off the common difference. Questions follow syllabus section SL 1.2. Every question comes with the mark scheme working.',
    },
    'sum-to-infinity-of-a-geometric-series': {
      metaTitle: 'Infinite Geometric Series Questions | IB AA SL  ',
      metaDescription:
        'Find the sum of an infinite geometric series in IB Maths AA SL using the sum to infinity formula, when |r| < 1, with mark scheme working.',
      title: 'IB Maths AA SL Sum to Infinity of a Geometric Series',
      description:
        'An infinite geometric series has a finite sum when |r| < 1. These questions apply the sum to infinity formula, S∞ = u₁ ÷ (1 − r).',
      questionSectionTitle: 'Sum to Infinity of a Geometric Series: Questions & Answers',
      questionSectionDescription:
        'Check that |r| < 1, then substitute u₁ and r into S∞ = u₁/(1 − r). If the sum to infinity is given, rearrange to find the unknown. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },
    'convergence-of-infinite-geometric-series': {
      metaTitle: 'Convergent Geometric Series | IB Maths AA SL  ',
      metaDescription:
        'Decide whether a geometric series converges in IB Maths AA SL, and find the values of x that make a convergent geometric series.',
      title: 'IB Maths AA SL Convergence of Infinite Geometric Series',
      description:
        'A convergent geometric series is one whose common ratio lies between −1 and 1. These questions test convergence and find the range of x that makes it happen.',
      questionSectionTitle: 'Convergence of Infinite Geometric Series: Questions & Answers',
      questionSectionDescription:
        'Write the common ratio in terms of x, solve −1 < r < 1, and state the interval of values for which the series converges. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
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
    'compound-interest-non-annual': {
      metaTitle: 'Compounding Frequency Questions | IB AA SL  ',
      metaDescription:
        'Compound interest with monthly, quarterly and half-yearly compounding in IB Maths AA SL: see how compounding frequency changes the final value.',
      title: 'IB Maths AA SL Compound Interest: Non-Annual Compounding',
      description:
        'Interest added monthly or quarterly grows faster than interest added once a year. These questions show how compounding frequency changes the final value of an investment.',
      questionSectionTitle: 'Compound Interest – Non-Annual: Questions & Answers',
      questionSectionDescription:
        "Set C/Y to the number of compounding periods per year on your GDC's finance solver, keep N in total periods, and compare the result with annual compounding. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.",
    },
    'real-value-of-investment-with-inflation': {
      metaTitle: 'Real Rate of Return Questions | IB Maths AA SL  ',
      metaDescription:
        "Find the real rate of return in IB Maths AA SL by adjusting an investment's interest rate for inflation, with mark scheme working.",
      title: 'IB Maths AA SL Real Value of an Investment with Inflation',
      description:
        'Inflation reduces what an investment can buy. These questions find the real rate of return, also called the inflation adjusted return, and the real value of an investment over time.',
      questionSectionTitle: 'Real Value of Investment with Inflation: Questions & Answers',
      questionSectionDescription:
        "Subtract the inflation rate from the interest rate for the real rate, then use your GDC's finance solver to find the real value of the investment. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.",
    },
    'comparing-compounding-methods': {
      metaTitle: 'Simple vs Compound Interest | IB Maths AA SL  ',
      metaDescription:
        'Compare simple vs compound interest in IB Maths AA SL, and compare different compounding periods for the same investment.',
      title: 'IB Maths AA SL Comparing Compounding Methods Questions',
      description:
        'These questions compare simple vs compound interest, then compare compounding yearly, quarterly and monthly, and explain why the results differ.',
      questionSectionTitle: 'Comparing Compounding Methods: Questions & Answers',
      questionSectionDescription:
        'Calculate the final value under each method with the same principal, rate and time, then compare the results and state which is better. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },
    'equivalent-annual-rate-ear': {
      metaTitle: 'Effective Annual Rate Questions | IB AA SL  ',
      metaDescription:
        'Calculate the effective annual rate in IB Maths AA SL to compare interest compounded at different frequencies, with mark scheme working.',
      title: 'IB Maths AA SL Equivalent Annual Rate (EAR) Questions',
      description:
        'The effective annual rate turns any compounding frequency into one comparable yearly rate. These questions apply the effective annual rate formula.',
      questionSectionTitle: 'Equivalent Annual Rate (EAR): Questions & Answers',
      questionSectionDescription:
        'Use EAR = (1 + r/k)ᵏ − 1, where k is the number of compounding periods per year, and express the result as a percentage. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },
    'real-terms-growth-with-inflation': {
      metaTitle: 'Real Interest Rate Questions | IB Maths AA SL  ',
      metaDescription:
        'Find the real interest rate in IB Maths AA SL and use it to measure how a value grows in real terms once inflation is removed.',
      title: 'IB Maths AA SL Real Terms Growth with Inflation',
      description:
        'Growth that looks strong in money terms can be small in real terms. These questions find the real interest rate and the real growth of a value over time.',
      questionSectionTitle: 'Real Terms Growth with Inflation: Questions & Answers',
      questionSectionDescription:
        "Subtract the inflation rate from the nominal rate to find the real interest rate, then apply it with your GDC's finance solver. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.",
    },
    hyperinflation: {
      metaTitle: 'Hyperinflation Questions | IB Maths AA SL  ',
      metaDescription:
        'Model hyperinflation in IB Maths AA SL with compound growth, and calculate how quickly prices rise and money loses value.',
      title: 'IB Maths AA SL Hyperinflation Questions',
      description:
        'Hyperinflation is compound growth at an extreme rate. These questions model how fast prices rise and how quickly money loses its value.',
      questionSectionTitle: 'Hyperinflation: Questions & Answers',
      questionSectionDescription:
        'Treat the inflation rate as a compound growth rate, apply it over the number of periods given, and interpret the result in context. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
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
    'laws-of-indices-division': {
      metaTitle: 'Dividing Indices Questions | IB Maths AA SL  ',
      metaDescription:
        'Practise dividing indices in IB Maths AA SL using the law aᵐ ÷ aⁿ = aᵐ⁻ⁿ, for numbers and algebraic terms, with mark scheme working.',
      title: 'IB Maths AA SL Laws of Indices: Division Questions',
      description:
        'When dividing indices with the same base, subtract the powers. These questions apply the law to numbers and to algebraic terms.',
      questionSectionTitle: 'Laws of Indices – Division: Questions & Answers',
      questionSectionDescription:
        'Check that the bases match, subtract the index of the denominator from the index of the numerator, and simplify any coefficients separately. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
    'negative-indices-integer-base': {
      metaTitle: 'Negative Exponents Questions | IB Maths AA SL  ',
      metaDescription:
        'Negative exponents in IB Maths AA SL: evaluate and simplify expressions with negative indices and integer bases, step by step.',
      title: 'IB Maths AA SL Negative Indices Questions: Integer Base',
      description:
        'Negative exponents mean a reciprocal: a⁻ⁿ = 1 ÷ aⁿ. These questions evaluate negative indices with integer bases and simplify expressions that contain them.',
      questionSectionTitle: 'Negative Indices – Integer Base: Questions & Answers',
      questionSectionDescription:
        'Rewrite each negative power as a reciprocal, evaluate the positive power, and simplify the fraction. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
    'negative-indices-fraction-base': {
      metaTitle: 'Negative Exponents with Fractions | IB AA SL  ',
      metaDescription:
        'Evaluate negative exponents with fractions in IB Maths AA SL: flip the fraction, then apply the positive power, with mark scheme working.',
      title: 'IB Maths AA SL Negative Indices Questions: Fraction Base',
      description:
        'Negative exponents with fractions have a shortcut: flip the fraction and make the power positive. These questions apply it to numerical and algebraic fractions.',
      questionSectionTitle: 'Negative Indices – Fraction Base: Questions & Answers',
      questionSectionDescription:
        'Use (a/b)⁻ⁿ = (b/a)ⁿ, apply the power to the numerator and denominator, and simplify. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
    'laws-of-indices-fraction-in-brackets': {
      metaTitle: 'Power of a Fraction Questions | IB Maths AA SL  ',
      metaDescription:
        'Find the power of a fraction in IB Maths AA SL by applying the index to the numerator and the denominator, with mark scheme working.',
      title: 'IB Maths AA SL Laws of Indices: Fraction in Brackets',
      description:
        'To find the power of a fraction, apply the index to the top and the bottom. These questions practise it with numbers, variables and mixed terms.',
      questionSectionTitle: 'Laws of Indices – Fraction in Brackets: Questions & Answers',
      questionSectionDescription:
        'Use (a/b)ⁿ = aⁿ/bⁿ, apply the power to every factor inside the bracket, then simplify using the other laws of indices. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
    'expressing-values-in-prime-base-form': {
      metaTitle: 'Prime Factorisation & Prime Bases | IB AA SL  ',
      metaDescription:
        'Use prime factorisation in IB Maths AA SL to write numbers as powers of primes and simplify index expressions, with mark scheme working.',
      title: 'IB Maths AA SL Expressing Values in Prime Base Form',
      description:
        'Prime factorisation writes any number as a product of prime powers, such as 72 = 2³ × 3². These questions use it to simplify expressions and solve index equations.',
      questionSectionTitle: 'Expressing Values in Prime Base Form: Questions & Answers',
      questionSectionDescription:
        'Break each number into prime factors, write repeated factors as powers, and apply the laws of indices to combine terms with the same prime base. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
    'last-digit-cyclicity': {
      metaTitle: 'Cyclicity of Numbers: Last Digit Questions  ',
      metaDescription:
        'Use the cyclicity of numbers in IB Maths AA SL to find the last digit of a very large power without calculating it in full.',
      title: 'IB Maths AA SL Last Digit and Cyclicity Questions',
      description:
        'The last digits of powers repeat in a fixed cycle. These questions use the cyclicity of numbers to find the last digit of very large powers.',
      questionSectionTitle: 'Last Digit / Cyclicity: Questions & Answers',
      questionSectionDescription:
        'List the last digits of the first few powers until they repeat, find the cycle length, and use the remainder of the exponent divided by that length. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
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
      metaTitle: 'Log Rules & Simplifying Logarithmic Expressions  ',
      metaDescription:
        'Learn log rules and properties of logarithms to simplify expressions. Practise expanding and condensing logarithms using the product, quotient and power rules.',
      title: 'Simplifying Logarithmic Expressions',
      description:
        'Learn how to simplify logarithmic expressions using the properties of logarithms. Review the product, quotient and power rules, then practise expanding and condensing expressions step by step.',
    },
    'laws-of-logarithms-key-properties': {
      metaTitle: 'Log Properties Questions | IB Maths AA SL  ',
      metaDescription:
        'Apply the log properties in IB Maths AA SL: product, quotient and power rules, and the key values logₐ 1 and logₐ a, with mark scheme working.',
      title: 'IB Maths AA SL Laws of Logarithms: Key Properties',
      description:
        'Every log simplification uses the same small set of log properties. These questions practise the properties of logarithms one at a time, then together.',
      questionSectionTitle: 'Laws of Logarithms – Key Properties: Questions & Answers',
      questionSectionDescription:
        'Apply the logarithm rules for products, quotients and powers, and use logₐ 1 = 0 and logₐ a = 1 to simplify fully. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
    'solving-exponential-equations-exact-form': {
      metaTitle: 'Exponential Equations: Exact Answers | IB AA SL  ',
      metaDescription:
        'Solve exponential equations in IB Maths AA SL and give exact answers in terms of logarithms, without a calculator, with mark scheme working.',
      title: 'IB Maths AA SL Solving Exponential Equations (Exact Form)',
      description:
        'Exponential equations with an unknown in the power are solved with logarithms. These questions practise solving exponential equations and leaving the answer exact.',
      questionSectionTitle: 'Solving Exponential Equations (Exact Form): Questions & Answers',
      questionSectionDescription:
        'Isolate the exponential term, take logarithms of both sides, bring the power down, and leave your answer in terms of ln or log. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
    'real-world-applications-exponential-decay': {
      metaTitle: 'Exponential Decay Questions | IB Maths AA SL  ',
      metaDescription:
        'Exponential decay questions for IB Maths AA SL: radioactive decay, cooling and depreciation modelled with exponential functions.',
      title: 'IB Maths AA SL Exponential Decay Questions',
      description:
        'Exponential decay reduces a quantity by the same factor each period. These questions model radioactive decay, cooling and falling values.',
      questionSectionTitle: 'Real-World Applications – Exponential Decay: Questions & Answers',
      questionSectionDescription:
        'Write the model as A = A₀e⁻ᵏᵗ or A = A₀(1 − r)ᵗ, use the given data to find k or r, and solve for the time or amount required. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
    'real-world-applications-exponential-growth': {
      metaTitle: 'Exponential Growth Questions | IB Maths AA SL  ',
      metaDescription:
        'Exponential growth questions for IB Maths AA SL: populations, bacteria and investments, solved with the exponential growth formula.',
      title: 'IB Maths AA SL Exponential Growth Questions',
      description:
        'Exponential growth increases a quantity by the same factor each period. These questions apply the exponential growth formula to populations, bacteria and investments.',
      questionSectionTitle: 'Real-World Applications – Exponential Growth: Questions & Answers',
      questionSectionDescription:
        'Write the model as A = A₀eᵏᵗ, find k from the data given, and use logarithms to find when the quantity reaches a target. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
    'real-world-applications-logarithmic-scale': {
      metaTitle: 'Logarithmic Scale Questions | IB Maths AA SL  ',
      metaDescription:
        'Logarithmic scale questions for IB Maths AA SL: decibels, the Richter scale and pH, and comparing values on a log scale.',
      title: 'IB Maths AA SL Logarithmic Scale Questions',
      description:
        'A logarithmic scale turns multiplication into addition, so each step is a fixed factor. These questions use decibels, the Richter scale and pH.',
      questionSectionTitle: 'Real-World Applications – Logarithmic Scale: Questions & Answers',
      questionSectionDescription:
        'Substitute into the given log scale formula, and compare two values by subtracting their scale readings to find the factor between them. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
    'exponential-models': {
      metaTitle: 'Exponential Function Examples | IB AA SL  ',
      metaDescription:
        'Exponential function examples for IB Maths AA SL: build exponential models from data and use them to predict and interpret.',
      title: 'IB Maths AA SL Exponential Models Questions',
      description:
        'These exponential function examples come from real data: build a model, use it to predict values, and explain what each parameter means.',
      questionSectionTitle: 'Exponential Models: Questions & Answers',
      questionSectionDescription:
        'Use two data points to find the parameters of the model, check it against any further data, and comment on how reliable predictions are. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
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
