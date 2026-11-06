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
//     'adding-subtracting-in-standard-form': {
//       metaTitle: 'Adding Standard Form Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Practise adding standard form numbers in IB Maths AA SL, and subtracting them, by matching the powers of 10 before you combine them.',
//       title: 'IB Maths AA SL Adding and Subtracting in Standard Form',
//       description:
//         'Unlike multiplying, adding standard form numbers needs the powers of 10 to match first. These questions practise adding and subtracting in standard form step by step.',
//       questionSectionTitle: 'Adding/Subtracting in Standard Form: Questions & Answers',
//       questionSectionDescription:
//         'Rewrite one number so both share the same power of 10, add or subtract the front numbers, then adjust the answer back into correct standard form. Questions follow syllabus section SL 1.1. Every question comes with the mark scheme working.',
//     },
//     'proof-multiplication-in-standard-form': {
//       metaTitle: 'Standard Form Exam Questions: Proof | IB AA SL  ',
//       metaDescription:
//         'Standard form exam questions for IB Maths AA SL that ask you to prove a result: show why multiplying numbers in standard form works.',
//       title: 'IB Maths AA SL Proof: Multiplication in Standard Form',
//       description:
//         'Some standard form exam questions ask you to prove a result rather than calculate one. These questions show why (a × 10ⁿ)(b × 10ᵐ) = ab × 10ⁿ⁺ᵐ, and when the answer needs adjusting.',
//       questionSectionTitle: 'Proof – Multiplication in Standard Form: Questions & Answers',
//       questionSectionDescription:
//         'Write each number as a × 10ⁿ with 1 ≤ a < 10, multiply the front numbers and add the powers, then show how to adjust when ab is 10 or more. State each step clearly. Questions follow syllabus section SL 1.1. Every question comes with the mark scheme working.',
//     },
//     'standard-form-multi-part-application': {
//       metaTitle: 'Standard Form Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Multi-part standard form questions for IB Maths AA SL that combine converting, calculating and interpreting large and small numbers.',
//       title: 'IB Maths AA SL Standard Form Questions: Multi-Part Applications',
//       description:
//         'These standard form questions come in several linked parts that convert, calculate and interpret very large or very small numbers, the way longer exam questions do.',
//       questionSectionTitle: 'Standard Form – Multi-part Application: Questions & Answers',
//       questionSectionDescription:
//         'Answer each part in order, carry exact values forward, and give the final answer in standard form to the accuracy the question asks for. Questions follow syllabus section SL 1.1. Every question comes with the mark scheme working.',
//     },
//     'standard-form-real-world-context': {
//       metaTitle: 'Standard Form Word Problems | IB Maths AA SL  ',
//       metaDescription:
//         'Standard form word problems for IB Maths AA SL: distances in space, populations and microscopic sizes, calculated and compared.',
//       title: 'IB Maths AA SL Standard Form in Real-World Contexts',
//       description:
//         'Standard form is how science writes very large and very small quantities. These standard form word problems use distances, populations and microscopic sizes.',
//       questionSectionTitle: 'Standard Form – Real-World Context: Questions & Answers',
//       questionSectionDescription:
//         'Pick out the values, write each in standard form, carry out the calculation, and include units in your final answer. Questions follow syllabus section SL 1.1. Every question comes with the mark scheme working.',
//     },
//     'generalising-standard-form-algebra': {
//       metaTitle: 'Scientific Notation Rules & Algebra | IB AA SL  ',
//       metaDescription:
//         'Apply the scientific notation rules in IB Maths AA SL to algebraic expressions, and generalise how standard form behaves.',
//       title: 'IB Maths AA SL Generalising Standard Form with Algebra',
//       description:
//         'The scientific notation rules work for letters as well as numbers. These standard form algebra questions write general results such as (a × 10ⁿ)(b × 10ᵐ).',
//       questionSectionTitle: 'Generalising Standard Form (Algebra): Questions & Answers',
//       questionSectionDescription:
//         'Treat the front numbers and the powers of 10 separately, apply the laws of indices to the powers, and state any condition on a or b for the result to stay in standard form. Questions follow syllabus section SL 1.1. Every question comes with the mark scheme working.',
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
//     'arithmetic-series-sum': {
//       metaTitle: 'Sum of Arithmetic Sequence Questions | IB AA SL  ',
//       metaDescription:
//         'Find the sum of an arithmetic sequence in IB Maths AA SL using the arithmetic series formulae, with mark scheme working.',
//       title: 'IB Maths AA SL Arithmetic Series: Sum Questions',
//       description:
//         'The sum of an arithmetic sequence comes from one of two formulae. These arithmetic series questions practise choosing the right one and applying it accurately.',
//       questionSectionTitle: 'Arithmetic Series – Sum: Questions & Answers',
//       questionSectionDescription:
//         'Use Sₙ = n/2(2u₁ + (n − 1)d) with the first term and common difference, or Sₙ = n/2(u₁ + uₙ) when the last term is known, to find the sum of arithmetic series terms. Questions follow syllabus section SL 1.2. Every question comes with the mark scheme working.',
//     },
//     'sigma-notation': {
//       metaTitle: 'Sigma Notation Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Sigma notation questions for IB Maths AA SL: read, write and evaluate sums written with Σ, step by step, with mark scheme working.',
//       title: 'IB Maths AA SL Sigma Notation Questions',
//       description:
//         'Sigma notation writes a long sum in one line. These questions practise reading the limits, listing the terms and evaluating each sum.',
//       questionSectionTitle: 'Sigma Notation: Questions & Answers',
//       questionSectionDescription:
//         'Substitute the lower and upper limits to find the first and last terms, count the terms, and apply the arithmetic series formula or your GDC. Questions follow syllabus section SL 1.2. Every question comes with the mark scheme working.',
//     },
//     'mixed-problem-solving': {
//       metaTitle: 'Arithmetic Progression Problems | IB AA SL  ',
//       metaDescription:
//         'Mixed arithmetic progression problems for IB Maths AA SL that combine terms, sums and unknowns in longer exam-style questions.',
//       title: 'IB Maths AA SL Arithmetic Sequences: Mixed Problem Solving',
//       description:
//         'These arithmetic progression problems combine terms, sums and unknowns in one question, the way longer exam questions do.',
//       questionSectionTitle: 'Mixed / Problem Solving: Questions & Answers',
//       questionSectionDescription:
//         'Write each piece of information as an equation in u₁ and d, solve them simultaneously, then answer the question that was asked. Questions follow syllabus section SL 1.2. Every question comes with the mark scheme working.',
//     },
//     'sum-formula-given-sn': {
//       metaTitle: 'Sum of n Terms Formula Questions | IB AA SL  ',
//       metaDescription:
//         'Use the sum of n terms formula in IB Maths AA SL to work backwards from Sₙ to the first term, common difference or a single term.',
//       title: 'IB Maths AA SL Sum Formula Given Sₙ Questions',
//       description:
//         'When a sequence is described by its sum of n terms formula, you can still find any term. These questions work back from Sₙ to the sequence itself.',
//       questionSectionTitle: 'Sum Formula Given Sₙ: Questions & Answers',
//       questionSectionDescription:
//         'Use u₁ = S₁ and uₙ = Sₙ − Sₙ₋₁, then compare with the general form to read off the common difference. Questions follow syllabus section SL 1.2. Every question comes with the mark scheme working.',
//     },
//     'sum-to-infinity-of-a-geometric-series': {
//       metaTitle: 'Infinite Geometric Series Questions | IB AA SL  ',
//       metaDescription:
//         'Find the sum of an infinite geometric series in IB Maths AA SL using the sum to infinity formula, when |r| < 1, with mark scheme working.',
//       title: 'IB Maths AA SL Sum to Infinity of a Geometric Series',
//       description:
//         'An infinite geometric series has a finite sum when |r| < 1. These questions apply the sum to infinity formula, S∞ = u₁ ÷ (1 − r).',
//       questionSectionTitle: 'Sum to Infinity of a Geometric Series: Questions & Answers',
//       questionSectionDescription:
//         'Check that |r| < 1, then substitute u₁ and r into S∞ = u₁/(1 − r). If the sum to infinity is given, rearrange to find the unknown. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
//     },
//     'convergence-of-infinite-geometric-series': {
//       metaTitle: 'Convergent Geometric Series | IB Maths AA SL  ',
//       metaDescription:
//         'Decide whether a geometric series converges in IB Maths AA SL, and find the values of x that make a convergent geometric series.',
//       title: 'IB Maths AA SL Convergence of Infinite Geometric Series',
//       description:
//         'A convergent geometric series is one whose common ratio lies between −1 and 1. These questions test convergence and find the range of x that makes it happen.',
//       questionSectionTitle: 'Convergence of Infinite Geometric Series: Questions & Answers',
//       questionSectionDescription:
//         'Write the common ratio in terms of x, solve −1 < r < 1, and state the interval of values for which the series converges. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
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
//     'compound-interest-non-annual': {
//       metaTitle: 'Compounding Frequency Questions | IB AA SL  ',
//       metaDescription:
//         'Compound interest with monthly, quarterly and half-yearly compounding in IB Maths AA SL: see how compounding frequency changes the final value.',
//       title: 'IB Maths AA SL Compound Interest: Non-Annual Compounding',
//       description:
//         'Interest added monthly or quarterly grows faster than interest added once a year. These questions show how compounding frequency changes the final value of an investment.',
//       questionSectionTitle: 'Compound Interest – Non-Annual: Questions & Answers',
//       questionSectionDescription:
//         "Set C/Y to the number of compounding periods per year on your GDC's finance solver, keep N in total periods, and compare the result with annual compounding. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.",
//     },
//     'real-value-of-investment-with-inflation': {
//       metaTitle: 'Real Rate of Return Questions | IB Maths AA SL  ',
//       metaDescription:
//         "Find the real rate of return in IB Maths AA SL by adjusting an investment's interest rate for inflation, with mark scheme working.",
//       title: 'IB Maths AA SL Real Value of an Investment with Inflation',
//       description:
//         'Inflation reduces what an investment can buy. These questions find the real rate of return, also called the inflation adjusted return, and the real value of an investment over time.',
//       questionSectionTitle: 'Real Value of Investment with Inflation: Questions & Answers',
//       questionSectionDescription:
//         "Subtract the inflation rate from the interest rate for the real rate, then use your GDC's finance solver to find the real value of the investment. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.",
//     },
//     'comparing-compounding-methods': {
//       metaTitle: 'Simple vs Compound Interest | IB Maths AA SL  ',
//       metaDescription:
//         'Compare simple vs compound interest in IB Maths AA SL, and compare different compounding periods for the same investment.',
//       title: 'IB Maths AA SL Comparing Compounding Methods Questions',
//       description:
//         'These questions compare simple vs compound interest, then compare compounding yearly, quarterly and monthly, and explain why the results differ.',
//       questionSectionTitle: 'Comparing Compounding Methods: Questions & Answers',
//       questionSectionDescription:
//         'Calculate the final value under each method with the same principal, rate and time, then compare the results and state which is better. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
//     },
//     'equivalent-annual-rate-ear': {
//       metaTitle: 'Effective Annual Rate Questions | IB AA SL  ',
//       metaDescription:
//         'Calculate the effective annual rate in IB Maths AA SL to compare interest compounded at different frequencies, with mark scheme working.',
//       title: 'IB Maths AA SL Equivalent Annual Rate (EAR) Questions',
//       description:
//         'The effective annual rate turns any compounding frequency into one comparable yearly rate. These questions apply the effective annual rate formula.',
//       questionSectionTitle: 'Equivalent Annual Rate (EAR): Questions & Answers',
//       questionSectionDescription:
//         'Use EAR = (1 + r/k)ᵏ − 1, where k is the number of compounding periods per year, and express the result as a percentage. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
//     },
//     'real-terms-growth-with-inflation': {
//       metaTitle: 'Real Interest Rate Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Find the real interest rate in IB Maths AA SL and use it to measure how a value grows in real terms once inflation is removed.',
//       title: 'IB Maths AA SL Real Terms Growth with Inflation',
//       description:
//         'Growth that looks strong in money terms can be small in real terms. These questions find the real interest rate and the real growth of a value over time.',
//       questionSectionTitle: 'Real Terms Growth with Inflation: Questions & Answers',
//       questionSectionDescription:
//         "Subtract the inflation rate from the nominal rate to find the real interest rate, then apply it with your GDC's finance solver. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.",
//     },
//     hyperinflation: {
//       metaTitle: 'Hyperinflation Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Model hyperinflation in IB Maths AA SL with compound growth, and calculate how quickly prices rise and money loses value.',
//       title: 'IB Maths AA SL Hyperinflation Questions',
//       description:
//         'Hyperinflation is compound growth at an extreme rate. These questions model how fast prices rise and how quickly money loses its value.',
//       questionSectionTitle: 'Hyperinflation: Questions & Answers',
//       questionSectionDescription:
//         'Treat the inflation rate as a compound growth rate, apply it over the number of periods given, and interpret the result in context. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
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
//     'laws-of-indices-division': {
//       metaTitle: 'Dividing Indices Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Practise dividing indices in IB Maths AA SL using the law aᵐ ÷ aⁿ = aᵐ⁻ⁿ, for numbers and algebraic terms, with mark scheme working.',
//       title: 'IB Maths AA SL Laws of Indices: Division Questions',
//       description:
//         'When dividing indices with the same base, subtract the powers. These questions apply the law to numbers and to algebraic terms.',
//       questionSectionTitle: 'Laws of Indices – Division: Questions & Answers',
//       questionSectionDescription:
//         'Check that the bases match, subtract the index of the denominator from the index of the numerator, and simplify any coefficients separately. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
//     },
//     'negative-indices-integer-base': {
//       metaTitle: 'Negative Exponents Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Negative exponents in IB Maths AA SL: evaluate and simplify expressions with negative indices and integer bases, step by step.',
//       title: 'IB Maths AA SL Negative Indices Questions: Integer Base',
//       description:
//         'Negative exponents mean a reciprocal: a⁻ⁿ = 1 ÷ aⁿ. These questions evaluate negative indices with integer bases and simplify expressions that contain them.',
//       questionSectionTitle: 'Negative Indices – Integer Base: Questions & Answers',
//       questionSectionDescription:
//         'Rewrite each negative power as a reciprocal, evaluate the positive power, and simplify the fraction. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
//     },
//     'negative-indices-fraction-base': {
//       metaTitle: 'Negative Exponents with Fractions | IB AA SL  ',
//       metaDescription:
//         'Evaluate negative exponents with fractions in IB Maths AA SL: flip the fraction, then apply the positive power, with mark scheme working.',
//       title: 'IB Maths AA SL Negative Indices Questions: Fraction Base',
//       description:
//         'Negative exponents with fractions have a shortcut: flip the fraction and make the power positive. These questions apply it to numerical and algebraic fractions.',
//       questionSectionTitle: 'Negative Indices – Fraction Base: Questions & Answers',
//       questionSectionDescription:
//         'Use (a/b)⁻ⁿ = (b/a)ⁿ, apply the power to the numerator and denominator, and simplify. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
//     },
//     'laws-of-indices-fraction-in-brackets': {
//       metaTitle: 'Power of a Fraction Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Find the power of a fraction in IB Maths AA SL by applying the index to the numerator and the denominator, with mark scheme working.',
//       title: 'IB Maths AA SL Laws of Indices: Fraction in Brackets',
//       description:
//         'To find the power of a fraction, apply the index to the top and the bottom. These questions practise it with numbers, variables and mixed terms.',
//       questionSectionTitle: 'Laws of Indices – Fraction in Brackets: Questions & Answers',
//       questionSectionDescription:
//         'Use (a/b)ⁿ = aⁿ/bⁿ, apply the power to every factor inside the bracket, then simplify using the other laws of indices. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
//     },
//     'expressing-values-in-prime-base-form': {
//       metaTitle: 'Prime Factorisation & Prime Bases | IB AA SL  ',
//       metaDescription:
//         'Use prime factorisation in IB Maths AA SL to write numbers as powers of primes and simplify index expressions, with mark scheme working.',
//       title: 'IB Maths AA SL Expressing Values in Prime Base Form',
//       description:
//         'Prime factorisation writes any number as a product of prime powers, such as 72 = 2³ × 3². These questions use it to simplify expressions and solve index equations.',
//       questionSectionTitle: 'Expressing Values in Prime Base Form: Questions & Answers',
//       questionSectionDescription:
//         'Break each number into prime factors, write repeated factors as powers, and apply the laws of indices to combine terms with the same prime base. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
//     },
//     'last-digit-cyclicity': {
//       metaTitle: 'Cyclicity of Numbers: Last Digit Questions  ',
//       metaDescription:
//         'Use the cyclicity of numbers in IB Maths AA SL to find the last digit of a very large power without calculating it in full.',
//       title: 'IB Maths AA SL Last Digit and Cyclicity Questions',
//       description:
//         'The last digits of powers repeat in a fixed cycle. These questions use the cyclicity of numbers to find the last digit of very large powers.',
//       questionSectionTitle: 'Last Digit / Cyclicity: Questions & Answers',
//       questionSectionDescription:
//         'List the last digits of the first few powers until they repeat, find the cycle length, and use the remainder of the exponent divided by that length. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
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
//     'laws-of-logarithms-key-properties': {
//       metaTitle: 'Log Properties Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Apply the log properties in IB Maths AA SL: product, quotient and power rules, and the key values logₐ 1 and logₐ a, with mark scheme working.',
//       title: 'IB Maths AA SL Laws of Logarithms: Key Properties',
//       description:
//         'Every log simplification uses the same small set of log properties. These questions practise the properties of logarithms one at a time, then together.',
//       questionSectionTitle: 'Laws of Logarithms – Key Properties: Questions & Answers',
//       questionSectionDescription:
//         'Apply the logarithm rules for products, quotients and powers, and use logₐ 1 = 0 and logₐ a = 1 to simplify fully. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
//     },
//     'solving-exponential-equations-exact-form': {
//       metaTitle: 'Exponential Equations: Exact Answers | IB AA SL  ',
//       metaDescription:
//         'Solve exponential equations in IB Maths AA SL and give exact answers in terms of logarithms, without a calculator, with mark scheme working.',
//       title: 'IB Maths AA SL Solving Exponential Equations (Exact Form)',
//       description:
//         'Exponential equations with an unknown in the power are solved with logarithms. These questions practise solving exponential equations and leaving the answer exact.',
//       questionSectionTitle: 'Solving Exponential Equations (Exact Form): Questions & Answers',
//       questionSectionDescription:
//         'Isolate the exponential term, take logarithms of both sides, bring the power down, and leave your answer in terms of ln or log. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
//     },
//     'real-world-applications-exponential-decay': {
//       metaTitle: 'Exponential Decay Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Exponential decay questions for IB Maths AA SL: radioactive decay, cooling and depreciation modelled with exponential functions.',
//       title: 'IB Maths AA SL Exponential Decay Questions',
//       description:
//         'Exponential decay reduces a quantity by the same factor each period. These questions model radioactive decay, cooling and falling values.',
//       questionSectionTitle: 'Real-World Applications – Exponential Decay: Questions & Answers',
//       questionSectionDescription:
//         'Write the model as A = A₀e⁻ᵏᵗ or A = A₀(1 − r)ᵗ, use the given data to find k or r, and solve for the time or amount required. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
//     },
//     'real-world-applications-exponential-growth': {
//       metaTitle: 'Exponential Growth Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Exponential growth questions for IB Maths AA SL: populations, bacteria and investments, solved with the exponential growth formula.',
//       title: 'IB Maths AA SL Exponential Growth Questions',
//       description:
//         'Exponential growth increases a quantity by the same factor each period. These questions apply the exponential growth formula to populations, bacteria and investments.',
//       questionSectionTitle: 'Real-World Applications – Exponential Growth: Questions & Answers',
//       questionSectionDescription:
//         'Write the model as A = A₀eᵏᵗ, find k from the data given, and use logarithms to find when the quantity reaches a target. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
//     },
//     'real-world-applications-logarithmic-scale': {
//       metaTitle: 'Logarithmic Scale Questions | IB Maths AA SL  ',
//       metaDescription:
//         'Logarithmic scale questions for IB Maths AA SL: decibels, the Richter scale and pH, and comparing values on a log scale.',
//       title: 'IB Maths AA SL Logarithmic Scale Questions',
//       description:
//         'A logarithmic scale turns multiplication into addition, so each step is a fixed factor. These questions use decibels, the Richter scale and pH.',
//       questionSectionTitle: 'Real-World Applications – Logarithmic Scale: Questions & Answers',
//       questionSectionDescription:
//         'Substitute into the given log scale formula, and compare two values by subtracting their scale readings to find the factor between them. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
//     },
//     'exponential-models': {
//       metaTitle: 'Exponential Function Examples | IB AA SL  ',
//       metaDescription:
//         'Exponential function examples for IB Maths AA SL: build exponential models from data and use them to predict and interpret.',
//       title: 'IB Maths AA SL Exponential Models Questions',
//       description:
//         'These exponential function examples come from real data: build a model, use it to predict values, and explain what each parameter means.',
//       questionSectionTitle: 'Exponential Models: Questions & Answers',
//       questionSectionDescription:
//         'Use two data points to find the parameters of the model, check it against any further data, and comment on how reliable predictions are. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
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
  functions: {
    'vertical-line-test-identifying-functions': {
      metaTitle: 'Vertical Line Test Questions | IB Maths AA SL',
      metaDescription:
        'Use the vertical line test in IB Maths AA SL to decide whether a graph or mapping represents a function, with mark scheme working.',
      title: 'IB Maths AA SL Vertical Line Test Questions',
      description:
        'A relation is a function only if every input has exactly one output. The vertical line test checks this on a graph in seconds, and these questions practise applying it to graphs and mappings.',
      questionSectionTitle: 'Vertical Line Test: Questions & Answers',
      questionSectionDescription:
        'Imagine a vertical line sweeping across the graph. If it ever meets the curve more than once, the relation is not a function. For mappings, check that no input points to two outputs. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },
    'domain-of-functions': {
      metaTitle: 'Domain of a Function Questions | IB AA SL',
      metaDescription:
        'Find the domain of a function in IB Maths AA SL: rational, square root and logarithmic functions, written in correct notation.',
      title: 'IB Maths AA SL Domain of a Function Questions',
      description:
        'The domain of a function is every input it can accept. These questions show how to find the domain of a function by spotting the values that would break it: division by zero, negative square roots and logarithms of non-positive numbers.',
      questionSectionTitle: 'Domain of Functions: Questions & Answers',
      questionSectionDescription:
        'Identify any restriction in the formula, solve the inequality it creates, and write the domain in interval or set notation. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },
    'range-of-functions': {
      metaTitle: 'How to Find the Range of a Function | IB AA SL',
      metaDescription:
        'Learn how to find the range of a function in IB Maths AA SL using graphs, vertices, asymptotes and technology, with mark scheme working.',
      title: 'IB Maths AA SL Range of a Function Questions',
      description:
        'The range of a function is every output it can produce. These questions show how to find the range of a function from its graph, its turning points and its asymptotes.',
      questionSectionTitle: 'Range of Functions: Questions & Answers',
      questionSectionDescription:
        'Sketch or plot the graph over the given domain, find the minimum and maximum output values, and check whether each endpoint is included. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },
    'inverse-functions-sketching': {
      metaTitle: 'Inverse Function Questions | IB Maths AA SL',
      metaDescription:
        'Find and sketch an inverse function in IB Maths AA SL: swap x and y, reflect in y = x, and state the domain and range of the inverse.',
      title: 'IB Maths AA SL Inverse Function Questions',
      description:
        'An inverse function reverses the original, so its graph is a reflection in the line y = x. These questions practise sketching the graph of an inverse function and swapping the domain and range.',
      questionSectionTitle: 'Inverse Functions: Questions & Answers',
      questionSectionDescription:
        'Reflect key points such as intercepts and endpoints in y = x, then join them. The domain of f⁻¹ is the range of f, and the range of f⁻¹ is the domain of f. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },
    'composite-functions': {
      metaTitle: 'Composite Function Questions | IB Maths AA SL',
      metaDescription:
        'Composite function questions for IB Maths AA SL: evaluate f(g(x)), form composite expressions and solve equations involving them.',
      title: 'IB Maths AA SL Composite Function Questions',
      description:
        'A composite function applies one function to the output of another, so the order matters. These questions evaluate, simplify and solve with f(g(x)) and g(f(x)).',
      questionSectionTitle: 'Composite Functions: Questions & Answers',
      questionSectionDescription:
        "Work from the inside out: evaluate or substitute the inner function first, then apply the outer one. Check that each output lies in the next function's domain. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.",
    },
  },
  trigonometry: {
    'radians-degree-radian-conversion': {
      metaTitle: 'Radians to Degrees Conversion | IB Maths AA SL',
      metaDescription:
        'Convert radians to degrees and degrees to radians in IB Maths AA SL, with exact answers in terms of π and mark scheme working.',
      title: 'IB Maths AA SL Radians to Degrees Conversion Questions',
      description:
        'Converting radians to degrees uses one fact: π radians = 180°. These questions practise both directions, radians to degrees and degrees to radians, with exact answers in terms of π.',
      questionSectionTitle: 'Radians – Degree/Radian Conversion: Questions & Answers',
      questionSectionDescription:
        'Multiply by 180/π to convert to degrees and by π/180 to convert to radians. Leave answers in terms of π unless the question asks for a decimal. Questions follow syllabus section SL 3.4. Every question comes with the mark scheme working.',
    },
    'unit-circle-marking-radian-angles': {
      metaTitle: 'Unit Circle Questions | IB Maths AA SL',
      metaDescription:
        'Unit circle questions for IB Maths AA SL: mark angles in radians, find their coordinates and read sine and cosine values.',
      title: 'IB Maths AA SL Unit Circle Questions',
      description:
        'The unit circle links every angle to a point (cos θ, sin θ). These unit circle questions practise marking angles in radians and reading off their trigonometric values.',
      questionSectionTitle: 'Unit Circle – Marking Radian Angles: Questions & Answers',
      questionSectionDescription:
        'Measure angles anticlockwise from the positive x-axis, use the quadrant to decide the signs, and use the related acute angle to find exact values. Questions follow syllabus section SL 3.4. Every question comes with the mark scheme working.',
    },
    'segment-area-and-perimeter': {
      metaTitle: 'Area of a Segment of a Circle | IB Maths AA SL',
      metaDescription:
        'Find the area of a segment of a circle in IB Maths AA SL, plus its perimeter, using radians, the sector and the area of a triangle.',
      title: 'IB Maths AA SL Segment Area and Perimeter Questions',
      description:
        'The area of a segment of a circle is the sector minus the triangle. These questions find the area of a segment and its perimeter with angles in radians.',
      questionSectionTitle: 'Segment Area and Perimeter: Questions & Answers',
      questionSectionDescription:
        'Find the sector area ½r²θ, subtract the triangle area ½r² sin θ, and for the perimeter add the arc length rθ to the chord. Questions follow syllabus section SL 3.4. Every question comes with the mark scheme working.',
    },
    'double-angle-formulae': {
      metaTitle: 'Double Angle Formula Questions | IB Maths AA SL',
      metaDescription:
        'Use the double angle formula for sin 2θ and cos 2θ in IB Maths AA SL to find exact values, simplify and prove identities.',
      title: 'IB Maths AA SL Double Angle Formula Questions',
      description:
        'The double angle formula expresses sin 2θ and cos 2θ in terms of θ. These questions use the double angle identities to find exact values, simplify expressions and solve equations.',
      questionSectionTitle: 'Double Angle Formulae: Questions & Answers',
      questionSectionDescription:
        'Use sin 2θ = 2 sin θ cos θ, and choose the form of cos 2θ that suits the question. Use the quadrant to fix the sign of any value you find. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },
    'half-angle-formulae': {
      metaTitle: 'Half Angle Formula Questions | IB Maths AA SL',
      metaDescription:
        'Use the half angle formula in IB Maths AA SL to find exact values of sin and cos of half an angle, with mark scheme working.',
      title: 'IB Maths AA SL Half Angle Formula Questions',
      description:
        'The half angle formula comes from rearranging the double angle formula for cos 2θ. These questions use half angle identities to find exact values.',
      questionSectionTitle: 'Half Angle Formulae: Questions & Answers',
      questionSectionDescription:
        'Rearrange cos 2θ = 1 − 2 sin²θ or 2 cos²θ − 1, substitute the half angle, and choose the sign from the quadrant the half angle lies in. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },
  },
  'statistics-probability': {
    'sampling-stratified': {
      metaTitle: 'Stratified Sampling Questions | IB Maths AA SL',
      metaDescription:
        'Stratified sampling questions for IB Maths AA SL: find how many to sample from each group so the sample matches the population.',
      title: 'IB Maths AA SL Stratified Sampling Questions',
      description:
        'Stratified sampling makes a sample reflect the population by sampling each group in proportion to its size. These questions practise the calculation and when the method is appropriate.',
      questionSectionTitle: 'Sampling – Stratified: Questions & Answers',
      questionSectionDescription:
        'Divide each group size by the population total, multiply by the sample size, and round so that the group samples add up to the total required. Questions follow syllabus section SL 4.1. Every question comes with the mark scheme working.',
    },
    'outliers-iqr-method': {
      metaTitle: 'Interquartile Range & Outliers | IB Maths AA SL',
      metaDescription:
        'Use the interquartile range in IB Maths AA SL to identify outliers with the 1.5 × IQR rule, with full mark scheme working.',
      title: 'IB Maths AA SL Outliers (IQR Method) Questions',
      description:
        'The interquartile range measures the spread of the middle half of the data, and it also defines what counts as an outlier. These questions apply the 1.5 × IQR rule.',
      questionSectionTitle: 'Outliers (IQR Method): Questions & Answers',
      questionSectionDescription:
        'Find Q1 and Q3, calculate IQR = Q3 − Q1, and flag any value below Q1 − 1.5 × IQR or above Q3 + 1.5 × IQR. Questions follow syllabus section SL 4.2. Every question comes with the mark scheme working.',
    },
    histograms: {
      metaTitle: 'Histogram Questions | IB Maths AA SL',
      metaDescription:
        'Histogram questions for IB Maths AA SL: draw and read histograms, estimate frequencies and interpret the shape of a distribution.',
      title: 'IB Maths AA SL Histogram Questions',
      description:
        'A histogram shows how continuous data is distributed across class intervals. These histogram questions practise drawing one accurately and reading frequencies back from it.',
      questionSectionTitle: 'Histograms: Questions & Answers',
      questionSectionDescription:
        'Check whether the class widths are equal, plot frequency (or frequency density for unequal widths), and describe the shape and spread of the distribution. Questions follow syllabus section SL 4.2. Every question comes with the mark scheme working.',
    },
    'cumulative-frequency': {
      metaTitle: 'Cumulative Frequency Questions | IB Maths AA SL',
      metaDescription:
        'Cumulative frequency questions for IB Maths AA SL: build the table, draw the cumulative frequency graph and read the median and quartiles.',
      title: 'IB Maths AA SL Cumulative Frequency Questions',
      description:
        'Cumulative frequency adds up the data as you move through the classes. These questions build the table, draw the cumulative frequency graph and read the median and quartiles from it.',
      questionSectionTitle: 'Cumulative Frequency: Questions & Answers',
      questionSectionDescription:
        'Plot each running total at the upper class boundary, join the points with a smooth curve, and read the median at n/2 and the quartiles at n/4 and 3n/4. Questions follow syllabus section SL 4.2. Every question comes with the mark scheme working.',
    },
    'box-and-whisker-diagrams': {
      metaTitle: 'Box Plot Questions | IB Maths AA SL',
      metaDescription:
        'Box plot questions for IB Maths AA SL: draw a box and whisker plot from the five-number summary and compare distributions.',
      title: 'IB Maths AA SL Box-and-Whisker Diagram Questions',
      description:
        'A box plot summarises a data set in five numbers. These questions draw a box and whisker plot, mark outliers and compare two distributions side by side.',
      questionSectionTitle: 'Box-and-Whisker Diagrams: Questions & Answers',
      questionSectionDescription:
        'Find the minimum, Q1, median, Q3 and maximum, draw the box from Q1 to Q3, and compare medians and interquartile ranges when two plots are given. Questions follow syllabus section SL 4.2. Every question comes with the mark scheme working.',
    },
  },
  calculus: {
    'chain-rule': {
      metaTitle: 'Chain Rule Questions | IB Maths AA SL',
      metaDescription:
        'Chain rule questions for IB Maths AA SL: differentiate composite functions, including powers, trigonometric and exponential functions.',
      title: 'IB Maths AA SL Chain Rule Questions',
      description:
        'The chain rule differentiates a function inside another function. These chain rule questions cover powers of brackets, trigonometric and exponential composites.',
      questionSectionTitle: 'Chain Rule: Questions & Answers',
      questionSectionDescription:
        'Identify the inner and outer functions, differentiate the outer function and keep the inner one unchanged, then multiply by the derivative of the inner function. Questions follow syllabus section SL 5.6. Every question comes with the mark scheme working.',
    },
    'differentiation-product-rule': {
      metaTitle: 'Product Rule Questions | IB Maths AA SL',
      metaDescription:
        'Product rule questions for IB Maths AA SL: differentiate the product of two functions and simplify the result fully, with mark scheme working.',
      title: 'IB Maths AA SL Product Rule Questions',
      description:
        'The product rule differentiates two functions multiplied together. These product rule differentiation questions apply it and simplify the result into a usable form.',
      questionSectionTitle: 'Differentiation – Product Rule: Questions & Answers',
      questionSectionDescription:
        'Label u and v, find u′ and v′, apply d/dx(uv) = u′v + uv′, and factorise common terms in the final answer. Questions follow syllabus section SL 5.6. Every question comes with the mark scheme working.',
    },
    'differentiation-quotient-rule': {
      metaTitle: 'Quotient Rule Questions | IB Maths AA SL',
      metaDescription:
        'Quotient rule questions for IB Maths AA SL: differentiate one function divided by another and simplify the numerator, with mark scheme working.',
      title: 'IB Maths AA SL Quotient Rule Questions',
      description:
        'The quotient rule differentiates one function divided by another. These quotient rule differentiation questions practise the order of the terms, where most errors happen.',
      questionSectionTitle: 'Differentiation – Quotient Rule: Questions & Answers',
      questionSectionDescription:
        'Label the numerator u and the denominator v, apply (u′v − uv′) ÷ v², and simplify the numerator before stating the derivative. Questions follow syllabus section SL 5.6. Every question comes with the mark scheme working.',
    },
    'local-maximum-and-minimum': {
      metaTitle: 'Maxima and Minima Questions | IB Maths AA SL',
      metaDescription:
        'Maxima and minima questions for IB Maths AA SL: find stationary points and classify each one as a local maximum or minimum.',
      title: 'IB Maths AA SL Local Maximum and Minimum Questions',
      description:
        'Maxima and minima occur where the gradient is zero. These questions find local maxima and minima and use the second derivative or a sign change to classify them.',
      questionSectionTitle: 'Local Maximum and Minimum: Questions & Answers',
      questionSectionDescription:
        'Solve f′(x) = 0, then test each point with f″(x) or the sign of f′(x) either side, and give the coordinates of each maximum or minimum. Questions follow syllabus section SL 5.8. Every question comes with the mark scheme working.',
    },
    'points-of-inflection': {
      metaTitle: 'Point of Inflection Questions | IB Maths AA SL',
      metaDescription:
        'Find a point of inflection in IB Maths AA SL using the second derivative and a change in concavity, with mark scheme working.',
      title: 'IB Maths AA SL Points of Inflection Questions',
      description:
        'A point of inflection is where a curve changes concavity. These questions find each inflection point using the second derivative and confirm the change of sign.',
      questionSectionTitle: 'Points of Inflection: Questions & Answers',
      questionSectionDescription:
        'Solve f″(x) = 0, then check that f″(x) changes sign either side. A zero second derivative alone does not prove a point of inflection. Questions follow syllabus section SL 5.8. Every question comes with the mark scheme working.',
    },
  },
  integration: {
    'integration-of-trig-exp-ln-to-find-y': {
      metaTitle: 'Integration of Trigonometric Functions',
      metaDescription:
        'Integration of trigonometric functions, eˣ and 1/x in IB Maths AA SL, using a known point to find y, with mark scheme working.',
      title: 'IB Maths AA SL Integration of Trig, Exponential and Log Functions',
      description:
        'These questions cover the integration of trigonometric functions, eˣ and 1/x, then use a known point on the curve to find the constant and write y in full.',
      questionSectionTitle: 'Integration of trig/exp/ln to find y: Questions & Answers',
      questionSectionDescription:
        'Integrate each term using the standard results, add + C, then substitute the given point to find C and write the equation of the curve. Questions follow syllabus section SL 5.10. Every question comes with the mark scheme working.',
    },
    'integration-by-substitution-reverse-chain-rule': {
      metaTitle: 'Integration by Substitution | IB Maths AA SL',
      metaDescription:
        'Integration by substitution in IB Maths AA SL: spot the reverse chain rule pattern and integrate composite functions step by step.',
      title: 'IB Maths AA SL Integration by Substitution Questions',
      description:
        'Integration by substitution works when the integrand contains a function and its derivative. These questions practise spotting that reverse chain rule pattern.',
      questionSectionTitle: 'Integration by Substitution (Reverse Chain Rule): Questions & Answers',
      questionSectionDescription:
        'Choose u as the inner function, check that du/dx appears in the integrand (up to a constant), integrate in terms of u, and substitute back. Questions follow syllabus section SL 5.10. Every question comes with the mark scheme working.',
    },
    'differential-equations-with-initial-conditions': {
      metaTitle: 'Initial Value Problem Questions | IB AA SL',
      metaDescription:
        'Solve an initial value problem in IB Maths AA SL: integrate dy/dx and use the initial condition to find the particular solution.',
      title: 'IB Maths AA SL Differential Equations with Initial Conditions',
      description:
        'An initial value problem gives a gradient function and one known point. These questions integrate to find the general solution, then use the point to find the particular one.',
      questionSectionTitle: 'Differential Equations with Initial Conditions: Questions & Answers',
      questionSectionDescription:
        'Integrate dy/dx to find y with + C, substitute the initial condition to find C, and state the particular solution. Questions follow syllabus section SL 5.10. Every question comes with the mark scheme working.',
    },
    'definite-integrals-power-rule': {
      metaTitle: 'Definite Integral Questions | IB Maths AA SL',
      metaDescription:
        'Evaluate a definite integral in IB Maths AA SL using the power rule and the limits of integration, with exact answers and mark scheme working.',
      title: 'IB Maths AA SL Definite Integral Questions',
      description:
        'A definite integral gives a single value between two limits. These questions evaluate definite integrals of power functions exactly, step by step.',
      questionSectionTitle: 'Definite Integrals – Power Rule: Questions & Answers',
      questionSectionDescription:
        'Integrate using the power rule, substitute the upper limit and then the lower limit, and subtract. No constant of integration is needed. Questions follow syllabus section SL 5.11. Every question comes with the mark scheme working.',
    },
    'area-between-two-curves': {
      metaTitle: 'Area Between Two Curves | IB Maths AA SL',
      metaDescription:
        'Find the area between two curves in IB Maths AA SL: locate intersections, set up the integral and evaluate it exactly or with a GDC.',
      title: 'IB Maths AA SL Area Between Two Curves Questions',
      description:
        'The area between two curves is the integral of the upper curve minus the lower curve. These questions find the intersection points, set up the integral and evaluate it.',
      questionSectionTitle: 'Area Between Two Curves: Questions & Answers',
      questionSectionDescription:
        'Solve the equations simultaneously to find the limits, integrate (upper − lower) between them, and split the integral if the curves cross inside the region. Questions follow syllabus section SL 5.11. Every question comes with the mark scheme working.',
    },
  },
  'sequences-series': {
    'nth-term-of-a-geometric-sequence': {
      metaTitle: 'Geometric Sequence Questions | IB Maths AA SL',
      metaDescription:
        'Geometric sequence questions for IB Maths AA SL: find any term from the first term and common ratio, including sequences with algebraic terms.',
      title: 'IB Maths AA SL Geometric Sequence: nth Term',
      description:
        'In a geometric sequence every term is the previous one multiplied by the same common ratio. These geometric sequence questions practise finding any term with uₙ = u₁rⁿ⁻¹.',
      questionSectionTitle: 'nth term of a geometric sequence: Questions & Answers',
      questionSectionDescription:
        'Identify u₁ and r, substitute into the formula for the nth term of a geometric sequence, and take care with negative ratios, where the sign alternates. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'number-of-terms-in-a-geometric-sequence': {
      metaTitle: 'Number of Terms: Geometric Sequence | IB AA SL',
      metaDescription:
        'Find the number of terms in a geometric sequence in IB Maths AA SL from its last term, and solve geometric inequalities with logarithms.',
      title: 'IB Maths AA SL Number of Terms in a Geometric Sequence',
      description:
        'When you know the first term, the common ratio and the last term, the number of terms in a geometric sequence comes from solving u₁rⁿ⁻¹ = uₙ for n.',
      questionSectionTitle: 'Number of terms in a geometric sequence: Questions & Answers',
      questionSectionDescription:
        'Set up the equation or inequality for the nth term, solve it with logarithms or a table of values, and give n as a whole number that fits the context. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'sigma-notation-sum-of-geometric-series': {
      metaTitle: 'Sigma Notation: Geometric Series | IB AA SL',
      metaDescription:
        'Evaluate sums written in sigma notation for a geometric series in IB Maths AA SL by reading off the first term, ratio and number of terms.',
      title: 'IB Maths AA SL Sigma Notation for a Geometric Series',
      description:
        'Sigma notation is a compact way to write a sum. These questions unpack a sum written in sigma notation for a geometric series and evaluate it exactly.',
      questionSectionTitle: 'Sigma notation — sum of geometric series: Questions & Answers',
      questionSectionDescription:
        'Write out the first few terms to find u₁, r and the number of terms, then apply the sum formula Sₙ = u₁(rⁿ − 1)/(r − 1). Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'nth-term-and-sum-application': {
      metaTitle: 'Geometric Sequence Word Problems | IB AA SL',
      metaDescription:
        'Geometric sequence word problems for IB Maths AA SL: find a term and the sum of terms, including the classic grains-of-wheat chessboard problem.',
      title: 'IB Maths AA SL Geometric Sequence Word Problems',
      description:
        'These geometric sequence word problems combine the nth term and the sum of the first n terms, from a halving sequence to the legend of grains on a chessboard.',
      questionSectionTitle: 'nth term and sum — application: Questions & Answers',
      questionSectionDescription:
        'Like most geometric progression problems, each one starts by naming u₁ and r. Decide whether the question wants a single term or a sum, then choose the matching formula. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'identifying-common-ratio': {
      metaTitle: 'Common Ratio Formula Questions | IB Maths AA SL',
      metaDescription:
        'Use the common ratio formula in IB Maths AA SL to find r from consecutive terms, or from a given term and the sum to infinity.',
      title: 'IB Maths AA SL Common Ratio Formula Questions',
      description:
        'The common ratio formula, r = uₙ₊₁ ÷ uₙ, links any two neighbouring terms of a geometric sequence. These questions use it on its own and inside a sum-to-infinity problem.',
      questionSectionTitle: 'Identifying common ratio: Questions & Answers',
      questionSectionDescription:
        'Here is how to find the common ratio: divide a term by the one before it, or form an equation in r and solve it, rejecting any value where |r| ≥ 1 for an infinite sum. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'nth-term': {
      metaTitle: 'nth Term Formula Questions | IB Maths AA SL',
      metaDescription:
        'Apply the nth term formula for geometric sequences in IB Maths AA SL, including finding a later term from two given terms.',
      title: 'IB Maths AA SL nth Term Formula Questions',
      description:
        'The nth term formula uₙ = u₁rⁿ⁻¹ lets you jump straight to any term. These questions use it when two terms are given and the first term and ratio must be found.',
      questionSectionTitle: 'nth term: Questions & Answers',
      questionSectionDescription:
        'Write each given nth term as an equation in u₁ and r, divide one equation by the other to find r, then substitute back to find the term required. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'geometric-sequences-real-world-application': {
      metaTitle: 'Geometric Sequences in Real Life | IB AA SL',
      metaDescription:
        'Geometric sequence real-life questions for IB Maths AA SL: algae growth, sugar concentration, learning times and a bouncing ball.',
      title: 'IB Maths AA SL Geometric Sequences in Real Life',
      description:
        'Growth and decay by a fixed percentage form a geometric sequence in real life. These questions model algae, a yeast culture, a learning program and a bouncing ball.',
      questionSectionTitle: 'Geometric sequences — real-world application: Questions & Answers',
      questionSectionDescription:
        'Turn the percentage change into a common ratio, identify the first term from the context, and interpret each answer in the units of the problem. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'sum-of-geometric-series-extended-application': {
      metaTitle: 'Sum of Geometric Series Questions | IB AA SL',
      metaDescription:
        'Use the sum of geometric series formula in IB Maths AA SL for extended problems: wheat production, ratios of sums and total bounce distances.',
      title: 'IB Maths AA SL Sum of Geometric Series Questions',
      description:
        'The sum of geometric series formula adds many terms in one step. These questions apply it to extended problems, where each geometric series sits inside a larger context.',
      questionSectionTitle: 'Sum of geometric series — extended application: Questions & Answers',
      questionSectionDescription:
        'Find u₁, r and n first, use Sₙ = u₁(rⁿ − 1)/(r − 1), and check whether the question needs a single sum or a comparison of sums. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'sum-using-recurrence-relation': {
      metaTitle: 'Recurrence Relation Questions | IB Maths AA SL',
      metaDescription:
        'Recurrence relation questions for IB Maths AA SL: recognise a geometric sequence from uₙ₊₁ = 2uₙ and find the sum of its terms.',
      title: 'IB Maths AA SL Recurrence Relation Questions',
      description:
        'A recurrence relation defines each term from the one before. When uₙ₊₁ is a fixed multiple of uₙ, the recurrence relation describes a geometric sequence.',
      questionSectionTitle: 'Sum using recurrence relation: Questions & Answers',
      questionSectionDescription:
        'Read u₁ and the common ratio from the recurrence relation, then use the geometric sum formula rather than adding the terms one by one. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'finding-nth-term-from-algebraic-terms': {
      metaTitle: 'Geometric Sequence with Variables | IB AA SL',
      metaDescription:
        'Solve a geometric sequence with variables in IB Maths AA SL: use the common ratio to form an equation in x, then find a later term.',
      title: 'IB Maths AA SL Geometric Sequence with Variables',
      description:
        'When the terms of a geometric sequence with variables are given as expressions in x, the common ratio is the same between each pair of terms. That gives an equation to solve.',
      questionSectionTitle: 'Finding nth term from algebraic terms: Questions & Answers',
      questionSectionDescription:
        'Set u₂ ÷ u₁ equal to u₃ ÷ u₂, solve for x, reject any value that makes a term zero, then find the term the question asks for. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'model-limitations': {
      metaTitle: 'Limitations of Mathematical Models | IB AA SL',
      metaDescription:
        'Discuss the limitations of mathematical models in IB Maths AA SL, using a geometric sequence that models a bouncing ball.',
      title: 'IB Maths AA SL Limitations of Mathematical Models',
      description:
        'Every model simplifies reality. This question asks for the limitations of mathematical models built on a geometric sequence, using a ball that never quite stops bouncing.',
      questionSectionTitle: 'Model limitations: Questions & Answers',
      questionSectionDescription:
        'Compare what the model predicts with what happens physically, and give a clear, specific reason the model stops being accurate. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
    'compound-interest-arithmetic-vs-geometric-growth': {
      metaTitle: 'Arithmetic vs Geometric Growth | IB Maths AA SL',
      metaDescription:
        'Compare arithmetic vs geometric growth in IB Maths AA SL: simple interest against compound interest, and when one account overtakes the other.',
      title: 'IB Maths AA SL Arithmetic vs Geometric Growth',
      description:
        'Simple interest grows by the same amount each year, while compound interest grows by the same percentage. This question compares arithmetic vs geometric growth in two bank accounts.',
      questionSectionTitle:
        'Compound Interest / Arithmetic vs Geometric Growth: Questions & Answers',
      questionSectionDescription:
        'Model the simple-interest account as an arithmetic sequence and the compound-interest account as a geometric one, write the nth term of each, then solve to find when one balance exceeds the other. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
  },
  algebra: {
    'completing-the-square': {
      metaTitle: 'Completing the Square Questions | IB AA SL',
      metaDescription:
        'Completing the square in IB Maths AA SL: write quadratics as (x + a)² + b, find unknown constants and solve equations in exact form.',
      title: 'IB Maths AA SL Completing the Square',
      description:
        'Completing the square rewrites x² + bx + c as (x + b/2)² plus a constant. It finds the vertex of a parabola and gives exact solutions to quadratic equations.',
      questionSectionTitle: 'Completing the Square: Questions & Answers',
      questionSectionDescription:
        'These completing the square questions start by halving the coefficient of x. Square it, adjust the constant, then compare coefficients or solve by taking square roots. Questions follow syllabus section SL 1.6, SL 2.7. Every question comes with the mark scheme working.',
    },
    'difference-of-two-squares': {
      metaTitle: 'Difference of Squares Questions | IB AA SL',
      metaDescription:
        'Use the difference of squares identity in IB Maths AA SL to expand (2x − 5)(2x + 5) and find the unknown constants in the identity.',
      title: 'IB Maths AA SL Difference of Two Squares',
      description:
        'The difference of squares identity, (a − b)(a + b) ≡ a² − b², turns a product into two squared terms. This question uses it to identify unknown constants.',
      questionSectionTitle: 'Difference of Two Squares: Questions & Answers',
      questionSectionDescription:
        'Expand the brackets or apply the difference of two squares directly, then compare coefficients on both sides of the identity. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'algebraic-proof': {
      metaTitle: 'Algebraic Proof Questions | IB Maths AA SL',
      metaDescription:
        'Algebraic proof in IB Maths AA SL: prove an identity by expanding the squares of three consecutive integers and simplifying.',
      title: 'IB Maths AA SL Algebraic Proof',
      description:
        'An algebraic proof shows a result holds for every value, not only the ones you test. This question proves an identity involving three consecutive integers.',
      questionSectionTitle: 'Algebraic Proof: Questions & Answers',
      questionSectionDescription:
        'Expand each bracket, collect like terms, and show the left-hand side simplifies exactly to the right-hand side. End with a clear concluding statement. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'algebraic-fractions-proof': {
      metaTitle: 'Algebraic Fractions Questions | IB Maths AA SL',
      metaDescription:
        'Prove identities with algebraic fractions in IB Maths AA SL by finding a common denominator and simplifying both sides.',
      title: 'IB Maths AA SL Algebraic Fractions and Proof',
      description:
        'Algebraic fractions follow the same rules as numerical ones. These questions prove identities by simplifying algebraic fractions over a common denominator.',
      questionSectionTitle: 'Algebraic Fractions / Proof: Questions & Answers',
      questionSectionDescription:
        'Write each fraction over the lowest common denominator, expand and simplify the numerator, and show it matches the right-hand side. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'numerical-verification': {
      metaTitle: 'Verify an Identity Numerically | IB Maths AA SL',
      metaDescription:
        'Verify an identity numerically in IB Maths AA SL: show that fraction sums such as 1/2 + 1/4 = 3/4 hold before proving them in general.',
      title: 'IB Maths AA SL Numerical Verification of an Identity',
      description:
        'Before proving a general result, it helps to verify each identity numerically. These questions check fraction sums that lead to an algebraic generalisation.',
      questionSectionTitle: 'Numerical Verification: Questions & Answers',
      questionSectionDescription:
        'Use a common denominator, show each step of the arithmetic, and state the result clearly. The next page generalises these results algebraically. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'algebraic-generalisation': {
      metaTitle: 'Generalising Algebra: Proofs | IB AA SL',
      metaDescription:
        'Generalising algebra in IB Maths AA SL: turn numerical fraction results into identities in n and prove them for all values.',
      title: 'IB Maths AA SL Algebraic Generalisation',
      description:
        'Generalising algebra means replacing specific numbers with a variable and proving the pattern holds every time. These questions generalise two fraction results in terms of n.',
      questionSectionTitle: 'Algebraic Generalisation: Questions & Answers',
      questionSectionDescription:
        'Write the general form with n, combine the fractions over a common denominator, and simplify until both sides match. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'identifying-identities': {
      metaTitle: 'Algebraic Identities Questions | IB Maths AA SL',
      metaDescription:
        'Algebraic identities in IB Maths AA SL: decide which equations are true for all values of x and which are only true for some.',
      title: 'IB Maths AA SL Algebraic Identities',
      description:
        'An identity is true for every value of x; an equation is true only for some. These algebraic identities questions test whether common expansions really are identities.',
      questionSectionTitle: 'Identifying Identities: Questions & Answers',
      questionSectionDescription:
        'Expand each side fully and compare. If one value of x makes the two sides different, the statement is an equation, not an identity. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'polynomial-identities-factor-theorem': {
      metaTitle: 'Polynomial Identities Questions | IB AA SL',
      metaDescription:
        'Polynomial identities in IB Maths AA SL: find unknown constants by expanding factorised cubics and comparing coefficients.',
      title: 'IB Maths AA SL Polynomial Identities',
      description:
        'Two polynomials are identical only when every coefficient matches. These polynomial identities questions use that fact to find unknown constants in factorised cubics.',
      questionSectionTitle: 'Polynomial Identities / Factor Theorem: Questions & Answers',
      questionSectionDescription:
        'Expand the factorised side, then set up one equation per power of x. Each polynomial identity gives a small system of equations to solve. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'algebraic-proof-counter-example': {
      metaTitle: 'Counter Example Questions | IB Maths AA SL',
      metaDescription:
        'Use a counter example in IB Maths AA SL to disprove a claimed identity, then correct it by finding the missing coefficient.',
      title: 'IB Maths AA SL Proof by Counter Example',
      description:
        'One counter example is enough to show a statement is false. This question disproves a claimed factorisation of x³ − y³ and then fixes it.',
      questionSectionTitle: 'Algebraic Proof / Counter-example: Questions & Answers',
      questionSectionDescription:
        'For proof by counter example, choose simple values for x and y, show the two sides differ, then expand to find the correct identity. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'proof-even-odd-numbers': {
      metaTitle: 'Proof with Even and Odd Numbers | IB AA SL',
      metaDescription:
        'Proof with even and odd numbers in IB Maths AA SL: use 2n and 2n + 1 to prove results, including squares of consecutive odd numbers.',
      title: 'IB Maths AA SL Proof: Even and Odd Numbers',
      description:
        'Writing even numbers as 2n and odd numbers as 2n + 1 turns a number fact into algebra. These proof questions on even and odd numbers use it to show results about odd numbers and their squares.',
      questionSectionTitle: 'Proof — Even/Odd Numbers: Questions & Answers',
      questionSectionDescription:
        'Represent each number algebraically, expand and simplify, then factorise to show the result is a multiple of 2, or that it can never be a multiple of 4. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'proof-multiples': {
      metaTitle: 'Prove a Number Is Divisible by 8 | IB AA SL',
      metaDescription:
        'Prove an expression is divisible by 8 for all positive integers in IB Maths AA SL, using the difference of two odd squares.',
      title: 'IB Maths AA SL Proof: Multiples',
      description:
        'To prove an expression is divisible by a number, show it can be written as that number times an integer. This question proves a difference of odd squares is a multiple of 8.',
      questionSectionTitle: 'Proof — Multiples: Questions & Answers',
      questionSectionDescription:
        'Expand both squares, simplify, and factor out 8 so the result is clearly 8 × (an integer) for every positive integer n. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'proof-consecutive-integers': {
      metaTitle: 'Consecutive Integers Proof | IB Maths AA SL',
      metaDescription:
        'Prove algebraically in IB Maths AA SL that the difference between the squares of two consecutive integers is always odd.',
      title: 'IB Maths AA SL Proof: Consecutive Integers',
      description:
        'Consecutive integers can be written as n and n + 1. This question uses that to prove the difference of their squares is always an odd number.',
      questionSectionTitle: 'Proof — Consecutive Integers: Questions & Answers',
      questionSectionDescription:
        'Square n + 1 and n, subtract, simplify to 2n + 1, and explain why that expression is odd for every integer n. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
    'indices-nth-roots': {
      metaTitle: 'nth Root Questions | IB Maths AA SL',
      metaDescription:
        'Evaluate the nth root of a number without a calculator in IB Maths AA SL, writing roots as fractional indices such as 8^(1/3).',
      title: 'IB Maths AA SL Indices: nth Roots',
      description:
        'A power of 1/n means the nth root of a number. These questions evaluate square roots and cube roots written as fractional indices, without a calculator.',
      questionSectionTitle: 'Indices – nth roots: Questions & Answers',
      questionSectionDescription:
        'Rewrite each power of 1/n as an nth root, then find the number that, raised to the power n, gives the base. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },
    'indices-exact-values': {
      metaTitle: 'Fractional Exponents Questions | IB Maths AA SL',
      metaDescription:
        'Find exact values with fractional exponents in IB Maths AA SL, including negative fractional powers of whole numbers and fractions.',
      title: 'IB Maths AA SL Indices: Exact Values',
      description:
        'Fractional exponents combine a root and a power. These questions find exact values of expressions such as 8^(−4/3), including negative fractional indices.',
      questionSectionTitle: 'Indices – exact values: Questions & Answers',
      questionSectionDescription:
        'Take the root first, then the power, and use a negative index to take the reciprocal. Keep answers as exact fractions. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },
    'solving-equations-with-indices': {
      metaTitle: 'Solving Equations with Exponents | IB AA SL',
      metaDescription:
        'Practise solving equations with exponents in IB Maths AA SL, such as x^(3/2) = 1/8, by raising both sides to the reciprocal power.',
      title: 'IB Maths AA SL Solving Equations with Indices',
      description:
        'Solving equations with exponents means undoing the power on x. These questions use the reciprocal index to find x when the power is a fraction.',
      questionSectionTitle: 'Solving equations with indices: Questions & Answers',
      questionSectionDescription:
        'Raise both sides to the reciprocal of the power on x, simplify with the laws of indices, and check for a second solution when the power has an even denominator. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },
    'indices-composition-and-substitution': {
      metaTitle: 'Exponent Substitution: Indices | IB AA SL',
      metaDescription:
        'Indices questions for IB Maths AA SL using exponent substitution: rewrite expressions in roots of x in the form axᵏ.',
      title: 'IB Maths AA SL Indices: Composition and Substitution',
      description:
        'These questions use exponent substitution: one variable is given in terms of another, and you rewrite a new expression in the form axᵏ.',
      questionSectionTitle: 'Indices – composition and substitution: Questions & Answers',
      questionSectionDescription:
        'Write every root as a fractional index, substitute, then apply the power and multiplication laws of indices to reach a single power of x. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },
    'solving-quadratics-factorising': {
      metaTitle: 'Factorising Quadratics Questions | IB AA SL',
      metaDescription:
        'Solve equations by factorising quadratics in IB Maths AA SL: find the two brackets, set each to zero and state both solutions.',
      title: 'IB Maths AA SL Solving Quadratics by Factorising',
      description:
        'Factorising quadratics turns x² + bx + c = 0 into two brackets whose product is zero. Each bracket then gives one solution.',
      questionSectionTitle: 'Solving Quadratics – Factorising: Questions & Answers',
      questionSectionDescription:
        'Find two numbers that multiply to c and add to b, write the brackets, set each equal to zero, and state both values of x. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'quadratic-formula': {
      metaTitle: 'Quadratic Formula Questions | IB Maths AA SL',
      metaDescription:
        'Use the quadratic formula in IB Maths AA SL to solve equations exactly, giving answers in simplified surd form.',
      title: 'IB Maths AA SL Quadratic Formula',
      description:
        'The quadratic formula solves any quadratic equation, including those that do not factorise. These questions give answers as exact surds.',
      questionSectionTitle: 'Quadratic Formula: Questions & Answers',
      questionSectionDescription:
        'Rearrange so the quadratic equals zero, identify a, b and c with their signs, substitute into x = (−b ± √(b² − 4ac)) / 2a, and simplify the surd fully. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'quadratic-inequalities': {
      metaTitle: 'Quadratic Inequalities Questions | IB AA SL',
      metaDescription:
        'Quadratic inequalities in IB Maths AA SL: find the critical values, sketch the parabola and solve, including problems in context and with parameters.',
      title: 'IB Maths AA SL Quadratic Inequalities',
      description:
        'Quadratic inequalities are solved with a sketch as well as algebra. These questions cover standard inequalities, a geometry context and one with parameters.',
      questionSectionTitle: 'Quadratic Inequalities: Questions & Answers',
      questionSectionDescription:
        'Solving quadratic inequalities starts with the critical values. Sketch the parabola, read off where it is above or below the x-axis, and write the solution set. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'solving-quadratics': {
      metaTitle: 'Quadratic Equations Questions | IB Maths AA SL',
      metaDescription:
        'Solve quadratic equations in IB Maths AA SL by rearranging to equal zero first, then factorising to find both solutions.',
      title: 'IB Maths AA SL Solving Quadratic Equations',
      description:
        'Quadratic equations are not always given in the form ax² + bx + c = 0. This question starts with rearranging, the step most often missed.',
      questionSectionTitle: 'Solving Quadratics: Questions & Answers',
      questionSectionDescription:
        'Solving quadratic equations starts by moving every term to one side, then choosing a method: factorise, complete the square or use the quadratic formula. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'quadratic-modelling': {
      metaTitle: 'Quadratic Word Problems | IB Maths AA SL',
      metaDescription:
        'Quadratic word problems for IB Maths AA SL: form a quadratic from numbers and rectangles, show it equals zero, then solve.',
      title: 'IB Maths AA SL Quadratic Modelling',
      description:
        'In quadratic word problems the equation is not given; you build it from the context. These questions form quadratics from products of numbers and the area of a rectangle.',
      questionSectionTitle: 'Quadratic Modelling: Questions & Answers',
      questionSectionDescription:
        'Define the variable, write the relationship as an equation, rearrange to show the given quadratic, then solve and reject any answer that does not fit the context. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'simultaneous-equations-line-parabola': {
      metaTitle: 'Intersection of Line and Parabola | IB AA SL',
      metaDescription:
        'Find the intersection of a line and a parabola in IB Maths AA SL by solving simultaneous equations; also a line meeting a circle.',
      title: 'IB Maths AA SL Simultaneous Equations: Line and Parabola',
      description:
        'The intersection of a line and a parabola is found by solving their equations together. Substitution gives a quadratic whose roots are the x-coordinates.',
      questionSectionTitle: 'Simultaneous Equations – Line & Parabola: Questions & Answers',
      questionSectionDescription:
        'Substitute the linear equation into the quadratic one, solve the resulting quadratic, then substitute back to find each y-coordinate. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'rational-equations': {
      metaTitle: 'Solving Rational Equations | IB Maths AA SL',
      metaDescription:
        'Practise solving rational equations in IB Maths AA SL: clear the fraction, form a quadratic and give the exact solutions.',
      title: 'IB Maths AA SL Rational Equations',
      description:
        'Solving rational equations means clearing the denominator first. The result is a quadratic equation, solved exactly.',
      questionSectionTitle: 'Rational Equations: Questions & Answers',
      questionSectionDescription:
        'Multiply every term by the denominator, rearrange to a quadratic equal to zero, solve with the quadratic formula, and check no solution makes the denominator zero. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'quadratic-in-y-rearranging': {
      metaTitle: 'Rearranging Quadratic Equations | IB AA SL',
      metaDescription:
        'Rearranging quadratic equations in IB Maths AA SL: treat 2x² + y² = 3xy as a quadratic in y and factorise to find y in terms of x.',
      title: 'IB Maths AA SL Quadratic in y: Rearranging',
      description:
        'Some equations in two variables are quadratics in disguise. Rearranging quadratic equations as a quadratic in y lets you factorise and find y in terms of x.',
      questionSectionTitle: 'Quadratic in y – Rearranging: Questions & Answers',
      questionSectionDescription:
        'Collect every term on one side, order by powers of y, and factorise as you would a quadratic in a single variable. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'quadratic-in-x-parameters': {
      metaTitle: 'Quadratic Equation with a Parameter | IB AA SL',
      metaDescription:
        'Solve a quadratic equation with a parameter in IB Maths AA SL: rearrange as a quadratic in x and factorise to find x in terms of k.',
      title: 'IB Maths AA SL Quadratic in x with Parameters',
      description:
        'A quadratic equation with a parameter has a letter, such as k, in its coefficients. This question finds x in terms of k by factorising.',
      questionSectionTitle: 'Quadratic in x – Parameters: Questions & Answers',
      questionSectionDescription:
        'Group the terms by powers of x, identify the coefficients in terms of k, and factorise or use the quadratic formula. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'quadratic-inequality-two-variables': {
      metaTitle: 'Two-Variable Quadratic Inequality | IB AA SL',
      metaDescription:
        'Solve a two-variable quadratic inequality in IB Maths AA SL by completing the square to show a sum of squares is at most zero.',
      title: 'IB Maths AA SL Quadratic Inequality in Two Variables',
      description:
        'This two-variable quadratic inequality has both x and y. Completing the square shows a sum of squares cannot be negative, which fixes both values.',
      questionSectionTitle: 'Quadratic Inequality – Two Variables: Questions & Answers',
      questionSectionDescription:
        'Rearrange to one side, complete the square in y, and use the fact that a square is never negative to find the only solution. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'quadratic-equations-discriminant': {
      metaTitle: 'Discriminant Formula Questions | IB Maths AA SL',
      metaDescription:
        'Use the discriminant formula b² − 4ac in IB Maths AA SL to find how many real solutions a quadratic has, and for what values it has real roots.',
      title: 'IB Maths AA SL Quadratic Equations: The Discriminant',
      description:
        'The discriminant formula, Δ = b² − 4ac, tells you the nature of roots without solving: two distinct roots, one repeated root or none.',
      questionSectionTitle: 'Quadratic Equations — Discriminant: Questions & Answers',
      questionSectionDescription:
        'Identify a, b and c, calculate the discriminant, and compare it with zero. Where the equation needs rearranging first, do that before finding a, b and c. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'discriminant-finding-k-two-roots': {
      metaTitle: 'Discriminant: Find k | IB Maths AA SL',
      metaDescription:
        'Use the discriminant to find k in IB Maths AA SL so a quadratic has two distinct real roots, one real root or no real roots.',
      title: 'IB Maths AA SL Discriminant: Finding k',
      description:
        'These discriminant questions find k so a quadratic has a required number of roots. Each condition on the roots becomes an inequality or equation in k.',
      questionSectionTitle: 'Discriminant — Finding k (Two Roots): Questions & Answers',
      questionSectionDescription:
        'Write Δ = b² − 4ac in terms of k, apply > 0, = 0 or < 0 as needed, and solve. When k is the coefficient of x², check that k = 0 is handled. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'discriminant-repeated-root': {
      metaTitle: 'Repeated Roots of a Quadratic | IB Maths AA SL',
      metaDescription:
        'Repeated roots of a quadratic in IB Maths AA SL: equal roots, a vertex on the x-axis and proofs that lead to Δ = 0.',
      title: 'IB Maths AA SL Discriminant: Repeated Roots of a Quadratic',
      description:
        'A quadratic has repeated roots when its discriminant is zero; its graph then touches the x-axis at the vertex. These questions use that condition in several forms.',
      questionSectionTitle: 'Discriminant — Repeated Root: Questions & Answers',
      questionSectionDescription:
        'Set b² − 4ac = 0, solve for the unknown, and where asked, show the given equation in k first. Then find the repeated root itself. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'discriminant-two-distinct-roots': {
      metaTitle: 'Two Distinct Real Roots | IB Maths AA SL',
      metaDescription:
        'Find the values of k for which a quadratic has two distinct real roots in IB Maths AA SL, using the discriminant greater than zero.',
      title: 'IB Maths AA SL Discriminant: Two Distinct Roots',
      description:
        'A quadratic has two distinct real roots when b² − 4ac > 0. These questions turn that condition into an inequality and solve it.',
      questionSectionTitle: 'Discriminant — Two Distinct Roots: Questions & Answers',
      questionSectionDescription:
        'Form the discriminant in terms of the unknown, set it greater than zero, and solve the resulting quadratic inequality with a sketch. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'discriminant-at-least-one-real-root': {
      metaTitle: 'Real Roots Condition Questions | IB AA SL',
      metaDescription:
        'Apply the real roots condition in IB Maths AA SL: find the values of a for which a quadratic has at least one real root.',
      title: 'IB Maths AA SL Discriminant: At Least One Real Root',
      description:
        'At least one real root means the discriminant is zero or positive. This question applies the real roots condition, b² − 4ac ≥ 0, to a quadratic with an unknown.',
      questionSectionTitle: 'Discriminant — At Least One Real Root: Questions & Answers',
      questionSectionDescription:
        'Form the discriminant, set it greater than or equal to zero, solve, and check separately the case where the coefficient of x² is zero. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'discriminant-graph-does-not-cross-x-axis': {
      metaTitle: 'No Real Roots Questions | IB Maths AA SL',
      metaDescription:
        'Find when a quadratic graph does not cross the x-axis in IB Maths AA SL, using the discriminant condition for no real roots.',
      title: 'IB Maths AA SL Discriminant: Graph Does Not Cross the x-axis',
      description:
        'A graph that never crosses the x-axis has no real roots, so its discriminant is negative. This question finds the values of c that make that true.',
      questionSectionTitle: 'Discriminant — Graph Does Not Cross x-axis: Questions & Answers',
      questionSectionDescription:
        'Write b² − 4ac in terms of c, set it less than zero, and solve the linear inequality. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'discriminant-graph-above-x-axis': {
      metaTitle: 'Positive Definite Quadratic | IB Maths AA SL',
      metaDescription:
        'Find when a quadratic is always positive in IB Maths AA SL: a positive definite quadratic lies entirely above the x-axis.',
      title: 'IB Maths AA SL Discriminant: Graph Above the x-axis',
      description:
        'A positive definite quadratic is positive for every x, so its graph lies entirely above the x-axis. That needs a positive x² coefficient and a negative discriminant.',
      questionSectionTitle: 'Discriminant — Graph Above x-axis: Questions & Answers',
      questionSectionDescription:
        'Check the coefficient of x² is positive, set b² − 4ac < 0, and solve the inequality for the unknown. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'discriminant-graph-entirely-below-x-axis': {
      metaTitle: 'Negative Definite Quadratic | IB Maths AA SL',
      metaDescription:
        'Find when a quadratic graph lies entirely below the x-axis in IB Maths AA SL: the conditions for a negative definite quadratic.',
      title: 'IB Maths AA SL Discriminant: Graph Below the x-axis',
      description:
        'A negative definite quadratic is negative for every x. Its graph opens downwards and never reaches the x-axis.',
      questionSectionTitle: 'Discriminant — Graph Entirely Below x-axis: Questions & Answers',
      questionSectionDescription:
        'Require a < 0 and b² − 4ac < 0, solve both inequalities, and give the values that satisfy both. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'discriminant-tangent-to-parabola': {
      metaTitle: 'Line Tangent to a Parabola | IB Maths AA SL',
      metaDescription:
        'Find k so a line is tangent to a parabola in IB Maths AA SL, using the discriminant of the combined equation.',
      title: 'IB Maths AA SL Discriminant: Tangent to a Parabola',
      description:
        'A line tangent to a parabola meets it at exactly one point. Setting the equations equal gives a quadratic whose discriminant must be zero.',
      questionSectionTitle: 'Discriminant — Tangent to Parabola: Questions & Answers',
      questionSectionDescription:
        'Equate the two expressions for y, rearrange to a quadratic equal to zero, then set b² − 4ac = 0 and solve for k. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'discriminant-line-intersects-circle': {
      metaTitle: 'Line and Circle Intersection | IB Maths AA SL',
      metaDescription:
        'Line and circle intersection questions for IB Maths AA SL: find the values of k for which a line meets a circle, using the discriminant.',
      title: 'IB Maths AA SL Discriminant: Line Intersects a Circle',
      description:
        "For a line and circle intersection, substitute the line into the circle's equation. The resulting quadratic has real roots only when the line meets the circle.",
      questionSectionTitle: 'Discriminant — Line Intersects Circle: Questions & Answers',
      questionSectionDescription:
        'Substitute y = 2x + k into the circle, expand to a quadratic in x, and solve b² − 4ac ≥ 0 for k. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'discriminant-proof-always-two-roots': {
      metaTitle: 'Prove Two Real Roots | IB Maths AA SL',
      metaDescription:
        'Prove two real roots exist for every value of a in IB Maths AA SL, and prove linked root conditions with the discriminant.',
      title: 'IB Maths AA SL Discriminant: Proofs',
      description:
        'To prove two real roots exist for every value of a parameter, show the discriminant is always positive. These questions also link the roots of two equations.',
      questionSectionTitle: 'Discriminant — Proof (Always Two Roots): Questions & Answers',
      questionSectionDescription:
        'Write the discriminant in terms of the parameter, then show it is a sum of a square and a positive number, or use a given condition to bound it. Questions follow syllabus section SL 2.7. Every question comes with the mark scheme working.',
    },
    'quadratic-equations-projectile-motion': {
      metaTitle: 'Projectile Motion Equation Questions | IB AA SL',
      metaDescription:
        'Use a quadratic projectile motion equation in IB Maths AA SL to find when a ball lands and how high a golf chip rises.',
      title: 'IB Maths AA SL Quadratic Equations: Projectile Motion',
      description:
        'A projectile motion equation such as h = 3.6 + 5.2t − 4.9t² is a quadratic in time. Solving it tells you when the object lands.',
      questionSectionTitle: 'Quadratic Equations / Projectile Motion: Questions & Answers',
      questionSectionDescription:
        'Set the height equal to the value asked for, solve the quadratic in t, and reject negative times. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'substitution-quadratic-in-disguise': {
      metaTitle: 'Hidden Quadratic Equations | IB Maths AA SL',
      metaDescription:
        'Solve hidden quadratic equations in IB Maths AA SL, using a car stopping-distance model to find speed from distance.',
      title: 'IB Maths AA SL Substitution: Quadratic in Disguise',
      description:
        'Hidden quadratic equations do not look like quadratics at first. This stopping-distance model becomes one as soon as you set it equal to a given distance.',
      questionSectionTitle: 'Substitution / Quadratic in Disguise: Questions & Answers',
      questionSectionDescription:
        'Set the model equal to the value given, multiply out the fractions, rearrange to a quadratic equal to zero, and keep only the speed that makes sense. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
  },
  'binomial-expansion': {
    'full-expansion': {
      metaTitle: 'Binomial Expansion Questions | IB Maths AA SL',
      metaDescription:
        'Binomial expansion questions for IB Maths AA SL: expand and simplify expressions such as (10 − 3x)⁴ and (2x − 1)⁵ in full.',
      title: 'IB Maths AA SL Binomial Expansion: Full Expansion',
      description:
        'A binomial expansion writes (a + b)ⁿ as a sum of terms using binomial coefficients. These binomial expansion questions expand two brackets in full.',
      questionSectionTitle: 'Full Expansion: Questions & Answers',
      questionSectionDescription:
        "Use Pascal's triangle or ⁿCᵣ for the coefficients, keep the sign of each term inside the bracket, and simplify every power and coefficient. Questions follow syllabus section SL 1.9. Every question comes with the mark scheme working.",
    },
    'applications-of-expansion': {
      metaTitle: 'Binomial Theorem Questions | IB Maths AA SL',
      metaDescription:
        'Apply the binomial theorem in IB Maths AA SL: find the first terms of an expansion, specific coefficients and approximations such as 2.003¹⁰.',
      title: 'IB Maths AA SL Binomial Theorem: Applications',
      description:
        'The binomial theorem gives any term of (a + b)ⁿ without writing out the full expansion. These binomial theorem questions find leading terms, coefficients and approximations.',
      questionSectionTitle: 'Applications of Expansion: Questions & Answers',
      questionSectionDescription:
        'Write the general term ⁿCᵣ aⁿ⁻ʳ bʳ, choose r for the power required, and for approximations substitute the value of x that matches the number given. Questions follow syllabus section SL 1.9. Every question comes with the mark scheme working.',
    },
  },
  geometry: {
    'gradient-of-a-line': {
      metaTitle: 'Slope of a Line: Gradient Questions | IB AA SL',
      metaDescription:
        'Find the gradient, or slope of a line, through two points in IB Maths AA SL using rise over run, with positive and negative gradients.',
      title: 'IB Maths AA SL Gradient (Slope) of a Line',
      description:
        'The gradient, also called the slope of a line, measures how steeply it rises or falls. These questions find it from two points using the slope of a line formula, m = (y₂ − y₁) ÷ (x₂ − x₁).',
      questionSectionTitle: 'Gradient of a Line: Questions & Answers',
      questionSectionDescription:
        'Here is how to find slope from two points: subtract the y-coordinates, subtract the x-coordinates in the same order, divide, and simplify the fraction. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
    'intercepts-of-a-line': {
      metaTitle: 'x and y Intercepts of a Line | IB Maths AA SL',
      metaDescription:
        'Find the x and y intercepts of a straight line in IB Maths AA SL by setting y = 0 and x = 0, including equations not in y = mx + c form.',
      title: 'IB Maths AA SL Intercepts of a Line',
      description:
        'The x and y intercepts are where a line crosses the axes. These questions find both, including lines written in forms such as 2y = 5 − x.',
      questionSectionTitle: 'Intercepts of a Line: Questions & Answers',
      questionSectionDescription:
        'Set y = 0 to find where the line crosses the x-axis and x = 0 for the y-axis, then write each intercept as a pair of coordinates. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
    'equation-of-a-line': {
      metaTitle: 'Equation of a Line Questions | IB Maths AA SL',
      metaDescription:
        'Find the equation of a line from its gradient and y-intercept in IB Maths AA SL, and write it in the form ax + by + d = 0.',
      title: 'IB Maths AA SL Equation of a Line',
      description:
        'The equation of a line is fixed by its gradient and one point. These questions use the gradient and y-intercept, then rewrite the answer in the general form the IB often asks for.',
      questionSectionTitle: 'Equation of a Line: Questions & Answers',
      questionSectionDescription:
        'Start from the equation of a line formula y = mx + c, substitute m and c, then rearrange to ax + by + d = 0 with integer coefficients. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
    'gradient-intercept-form': {
      metaTitle: 'Slope-Intercept Form Questions | IB Maths AA SL',
      metaDescription:
        'Rewrite equations in slope-intercept form, y = mx + c, in IB Maths AA SL and read off the gradient, the y-intercept and the x-intercept.',
      title: 'IB Maths AA SL Gradient-Intercept Form',
      description:
        'Slope-intercept form, y = mx + c, shows the gradient and y-intercept at a glance. These questions rearrange general equations into that form.',
      questionSectionTitle: 'Gradient-Intercept Form: Questions & Answers',
      questionSectionDescription:
        'Make y the subject, simplify so the equation reads y = mx + c, then state m and c. For the x-intercept, set y = 0. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
    'equation-of-a-line-through-a-point': {
      metaTitle: 'Point-Slope Form Questions | IB Maths AA SL',
      metaDescription:
        'Find the equation of a line through a given point in IB Maths AA SL using point-slope form, y − y₁ = m(x − x₁).',
      title: 'IB Maths AA SL Equation of a Line Through a Point',
      description:
        'When you know the gradient and one point, point-slope form gives the equation of the line in one step: y − y₁ = m(x − x₁).',
      questionSectionTitle: 'Equation of a Line Through a Point: Questions & Answers',
      questionSectionDescription:
        'Substitute the gradient and the point into the point-slope form formula, expand, and rearrange into the form the question asks for. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
    'line-through-two-points': {
      metaTitle: 'Two Point Form Questions | IB Maths AA SL',
      metaDescription:
        'Find the equation of a line through two points in IB Maths AA SL using the two point form, and write it as ax + by + c = 0.',
      title: 'IB Maths AA SL Equation of a Line Through Two Points',
      description:
        'Two points fix a line. The two point form finds its gradient from the points, then its equation, written in general form.',
      questionSectionTitle: 'Line Through Two Points: Questions & Answers',
      questionSectionDescription:
        'Calculate the gradient from the two points, substitute one point into y − y₁ = m(x − x₁), and rearrange to ax + by + c = 0 with integer coefficients. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
    'perpendicular-lines': {
      metaTitle: 'Perpendicular Lines Questions | IB Maths AA SL',
      metaDescription:
        'Perpendicular lines in IB Maths AA SL: use the negative reciprocal gradient to find the equation of a perpendicular line through a point.',
      title: 'IB Maths AA SL Perpendicular Lines',
      description:
        'Perpendicular lines meet at a right angle, and their gradients multiply to −1. These perpendicular lines examples find the equation of a line at right angles to a given one.',
      questionSectionTitle: 'Perpendicular Lines: Questions & Answers',
      questionSectionDescription:
        'Use the perpendicular slope formula, m₂ = −1/m₁, then substitute the given point into y − y₁ = m(x − x₁) and simplify. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
    'intersection-of-lines': {
      metaTitle: 'Point of Intersection of Two Lines | IB AA SL',
      metaDescription:
        'Find the point of intersection of two straight lines in IB Maths AA SL by solving their equations simultaneously.',
      title: 'IB Maths AA SL Intersection of Lines',
      description:
        'The point of intersection is the one pair of coordinates that satisfies both equations. These questions find it by elimination or substitution.',
      questionSectionTitle: 'Intersection of Lines: Questions & Answers',
      questionSectionDescription:
        'For the intersection of two lines, solve the equations simultaneously, then check the point in both original equations. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
    'coordinates-and-lines': {
      metaTitle: 'Coordinate Geometry Questions | IB Maths AA SL',
      metaDescription:
        'Coordinate geometry in IB Maths AA SL: place points from a description, find unknown coordinates and work with the lines between them.',
      title: 'IB Maths AA SL Coordinates and Lines',
      description:
        'Coordinate geometry turns a description of points into numbers you can calculate with. This question builds a set of points step by step and works with the lines joining them.',
      questionSectionTitle: 'Coordinates and Lines: Questions & Answers',
      questionSectionDescription:
        'These coordinate geometry questions start with a quick sketch. Read each description carefully, write down each coordinate, then use the gradient and distance where needed. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
    'gradient-and-parallel-lines': {
      metaTitle: 'Slope of Parallel Lines | IB Maths AA SL',
      metaDescription:
        'Use the slope of parallel lines in IB Maths AA SL to write parallel line equations and show that sides of a quadrilateral are parallel.',
      title: 'IB Maths AA SL Gradient and Parallel Lines',
      description:
        'Parallel lines never meet, so the slope of parallel lines is always the same. These questions use the gradient of parallel lines to write new equations and to prove shapes are trapeziums.',
      questionSectionTitle: 'Gradient and Parallel Lines: Questions & Answers',
      questionSectionDescription:
        'Find the gradient of the given line, keep it for the new line, and substitute the point. To prove two sides parallel, show their gradients are equal. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
  },
  applications: {
    'gradient-in-context': {
      metaTitle: 'Slope in Real Life | IB Maths AA SL',
      metaDescription:
        "Slope in real-life contexts for IB Maths AA SL: the gradient of a mountain, a drawbridge and a road's maximum incline.",
      title: 'IB Maths AA SL Gradient in Context',
      description:
        'Gradient is a rate you meet outside the classroom: the slope of a hillside, a road or a bridge. These questions find the slope in real life by turning each context into rise over run.',
      questionSectionTitle: 'Gradient in Context: Questions & Answers',
      questionSectionDescription:
        'Draw the situation as a right-angled triangle, label the vertical rise and horizontal run, and use gradient = rise ÷ run, with units where needed. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
    'hookes-law-linear-models': {
      metaTitle: "Hooke's Law Questions | IB Maths AA SL",
      metaDescription:
        "Hooke's law as a linear model in IB Maths AA SL: interpret F = kx, state the units of k and use the model to find force and extension.",
      title: "IB Maths AA SL Hooke's Law and Linear Models",
      description:
        "Hooke's law says the force needed to stretch a spring is proportional to the extension, F = kx. It is one of the clearest linear models in IB Maths.",
      questionSectionTitle: "Hooke's Law / Linear Models: Questions & Answers",
      questionSectionDescription:
        'Linear models like this one link a gradient to a real rate. Identify k as the gradient, work out its units from F and x, then substitute to find the unknown. Questions follow syllabus section SL 2.1. Every question comes with the mark scheme working.',
    },
  },
  'functions-graphs': {
    'quadratic-graphs-matching': {
      metaTitle: 'Quadratic Graphs: Matching | IB Maths AA SL',
      metaDescription:
        'Match quadratic graphs to their equations in IB Maths AA SL using the sign of the x² term, the y-intercept and the roots.',
      title: 'IB Maths AA SL Quadratic Graphs: Matching',
      description:
        "Quadratic graphs carry their equation's features: the sign of a decides the shape, c gives the y-intercept and the roots give the x-intercepts. These questions match three graphs to three equations.",
      questionSectionTitle: 'Quadratic Graphs – Matching: Questions & Answers',
      questionSectionDescription:
        'Check the shape first, then the y-intercept, then the position of the vertex, and eliminate equations until each graph has one match. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },
    'sketching-quadratic-graphs': {
      metaTitle: 'Sketching Quadratic Graphs | IB Maths AA SL',
      metaDescription:
        'Practise sketching quadratic graphs in IB Maths AA SL, labelling every axis intercept and showing the correct shape.',
      title: 'IB Maths AA SL Sketching Quadratic Graphs',
      description:
        'Sketching quadratic graphs well means showing the right shape and labelling every point where the curve meets the axes.',
      questionSectionTitle: 'Sketching Quadratic Graphs: Questions & Answers',
      questionSectionDescription:
        'Factorise to find the x-intercepts, set x = 0 for the y-intercept, decide whether the parabola opens upwards or downwards, and label each point. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },
    'equation-from-graph-factored-form': {
      metaTitle: 'Factored Form of a Quadratic | IB Maths AA SL',
      metaDescription:
        'Find the factored form of a quadratic from its graph in IB Maths AA SL, y = a(x − p)(x − q), and its vertex form from the turning point.',
      title: 'IB Maths AA SL Equation from a Graph: Factored and Vertex Form',
      description:
        "A graph's roots give the factored form of a quadratic, y = a(x − p)(x − q); its vertex gives vertex form. These questions use one extra point to find a.",
      questionSectionTitle: 'Equation from Graph – Factored Form: Questions & Answers',
      questionSectionDescription:
        'Write the form that matches the information given, substitute the y-intercept or another known point, and solve for a. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },
    'completing-the-square-line-of-symmetry': {
      metaTitle: 'Axis of Symmetry Questions | IB Maths AA SL',
      metaDescription:
        'Find the axis of symmetry of a parabola in IB Maths AA SL by completing the square on quadratics such as y = 2x² + 8x + 15.',
      title: 'IB Maths AA SL Completing the Square: Line of Symmetry',
      description:
        'The axis of symmetry of a parabola passes through its vertex. Completing the square shows it directly as x = −h.',
      questionSectionTitle: 'Completing the Square – Line of Symmetry: Questions & Answers',
      questionSectionDescription:
        'Factor out the coefficient of x², complete the square inside the bracket, write the result as a(x + h)² + k, and state the line of symmetry. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },
    'quadratic-graph-features': {
      metaTitle: 'Parts of a Parabola | IB Maths AA SL',
      metaDescription:
        'Identify the parts of a parabola in IB Maths AA SL: the x-intercepts, the y-intercept and the vertex of y = x² − 5x − 24.',
      title: 'IB Maths AA SL Quadratic Graph Features',
      description:
        'The parts of a parabola every exam asks about are the roots, the y-intercept, the line of symmetry and the vertex. This question finds each one from the equation.',
      questionSectionTitle: 'Quadratic Graph Features: Questions & Answers',
      questionSectionDescription:
        'Factorise for the roots, substitute x = 0 for the y-intercept, take the midpoint of the roots for the line of symmetry, and substitute to find the vertex. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },
    'completing-the-square-minimum-value': {
      metaTitle: 'Minimum Value of a Quadratic | IB Maths AA SL',
      metaDescription:
        'Find the minimum value of a quadratic in IB Maths AA SL by completing the square and reading off the turning point.',
      title: 'IB Maths AA SL Completing the Square: Minimum Value',
      description:
        'The minimum value of a quadratic with a positive x² term sits at its vertex. Completing the square gives that value exactly.',
      questionSectionTitle: 'Completing the Square – Minimum Value: Questions & Answers',
      questionSectionDescription:
        'Write the quadratic as a(x + h)² − k, note that the squared term is never negative, and state the minimum value and where it occurs. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },
    'completing-the-square-range-of-function': {
      metaTitle: 'Range of a Quadratic Function | IB Maths AA SL',
      metaDescription:
        'Find the range of a quadratic function in IB Maths AA SL by completing the square, then write it in correct inequality notation.',
      title: 'IB Maths AA SL Completing the Square: Range',
      description:
        'The range of a quadratic function starts or ends at its vertex. Completing the square finds the vertex, and the shape tells you which way the range extends.',
      questionSectionTitle: 'Completing the Square – Range of Function: Questions & Answers',
      questionSectionDescription:
        'Complete the square, identify the minimum or maximum value, and write the range as f(x) ≥ k or f(x) ≤ k. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },
    'graph-transformations-vertical-translation': {
      metaTitle: 'Vertical Translation of Graphs | IB Maths AA SL',
      metaDescription:
        'Vertical translation and horizontal translation of graphs in IB Maths AA SL: sketch f(x) + a and f(x + a), and write the new equation.',
      title: 'IB Maths AA SL Graph Transformations: Translations',
      description:
        'A vertical translation moves every point up or down; a horizontal translation moves it left or right. These questions sketch both and write the equation after each translation.',
      questionSectionTitle: 'Graph Transformations – Vertical Translation: Questions & Answers',
      questionSectionDescription:
        'For the translation of graphs, f(x) + a moves the graph up by a and f(x + a) moves it left by a. Apply the shift to key points, then sketch or substitute. Questions follow syllabus section SL 2.11. Every question comes with the mark scheme working.',
    },
    'reflections-vertex-coordinates': {
      metaTitle: 'Reflection in the x-Axis | IB Maths AA SL',
      metaDescription:
        'Reflection in the x-axis and y-axis in IB Maths AA SL: find the new vertex of −f(x) and the equation after two reflections.',
      title: 'IB Maths AA SL Reflections: Vertex Coordinates',
      description:
        'A reflection in the x-axis changes the sign of every y-coordinate, so y = f(x) becomes y = −f(x). These questions track the vertex and find the new equation.',
      questionSectionTitle: 'Reflections – Vertex Coordinates: Questions & Answers',
      questionSectionDescription:
        'For −f(x), keep x and change the sign of y; for f(−x), change the sign of x. Apply each reflection in the order given. Questions follow syllabus section SL 2.11. Every question comes with the mark scheme working.',
    },
    'describing-transformations-combined': {
      metaTitle: 'Describing Transformations | IB Maths AA SL',
      metaDescription:
        'Describing transformations of graphs in IB Maths AA SL: combined translations, stretches and reflections, sketched and written in order.',
      title: 'IB Maths AA SL Describing Combined Transformations',
      description:
        'Describing transformations fully means naming each one, its direction and its size, in the right order. These questions combine translations, stretches and reflections.',
      questionSectionTitle: 'Describing Transformations – Combined: Questions & Answers',
      questionSectionDescription:
        'Work from the inside of the function outwards for horizontal changes and from the outside in for vertical ones, and state each transformation precisely. Questions follow syllabus section SL 2.11. Every question comes with the mark scheme working.',
    },
    'describing-transformations-from-completed-square': {
      metaTitle: 'Vertex Form Transformations | IB Maths AA SL',
      metaDescription:
        'Use vertex form transformations in IB Maths AA SL: complete the square, then describe the moves that map y = x² onto the quadratic.',
      title: 'IB Maths AA SL Transformations from the Completed Square',
      description:
        'Vertex form transformations read straight from a(x + h)² + k: a stretch by a, a horizontal shift by h and a vertical shift by k.',
      questionSectionTitle: 'Describing Transformations from Completed Square: Questions & Answers',
      questionSectionDescription:
        'Complete the square first, then describe each transformation from y = x² in order, giving the scale factor and the translation vector. Questions follow syllabus section SL 2.11. Every question comes with the mark scheme working.',
    },
    'vertical-and-horizontal-stretches': {
      metaTitle: 'Vertical and Horizontal Stretches | IB AA SL',
      metaDescription:
        'Vertical and horizontal stretches of graphs in IB Maths AA SL: sketch af(x) and f(ax), find scale factors and describe each stretch.',
      title: 'IB Maths AA SL Vertical and Horizontal Stretches',
      description:
        "Vertical and horizontal stretches change a graph's shape without moving its intercept on the fixed axis. These questions sketch stretches, find equations and describe them.",
      questionSectionTitle: 'Vertical and Horizontal Stretches: Questions & Answers',
      questionSectionDescription:
        'For af(x), multiply each y-coordinate by a; for f(ax), divide each x-coordinate by a. State the scale factor and the direction of every stretch. Questions follow syllabus section SL 2.11. Every question comes with the mark scheme working.',
    },
    'stretch-about-a-non-standard-line': {
      metaTitle: 'Stretch Transformation About a Line | IB AA SL',
      metaDescription:
        'A stretch transformation about the line y = 1 in IB Maths AA SL: keep that line fixed and find the equation of the stretched graph.',
      title: 'IB Maths AA SL Stretch About a Non-Standard Line',
      description:
        'Most stretches keep an axis fixed. In this stretch transformation the line y = 1 stays fixed instead, which changes the equation of the result.',
      questionSectionTitle: 'Stretch About a Non-Standard Line: Questions & Answers',
      questionSectionDescription:
        'Translate so the fixed line becomes the x-axis, apply the stretch, then translate back. Check with one point on the original graph. Questions follow syllabus section SL 2.11. Every question comes with the mark scheme working.',
    },
  },
  'exponential-logarithmic-functions': {
    'sketching-exponential-graphs': {
      metaTitle: 'Exponential Graph Questions | IB Maths AA SL',
      metaDescription:
        'Sketch and match exponential graphs in IB Maths AA SL: y = 2ˣ, eˣ and 0.5ˣ, with their asymptotes and intercepts.',
      title: 'IB Maths AA SL Sketching Exponential Graphs',
      description:
        'Every exponential graph of the form y = aˣ passes through (0, 1) and has the x-axis as an asymptote. These questions sketch, compare and match growth and decay curves.',
      questionSectionTitle: 'Sketching Exponential Graphs: Questions & Answers',
      questionSectionDescription:
        'Mark the y-intercept, show the asymptote y = 0, and decide whether the curve rises or falls from whether the base is greater or less than 1. Questions follow syllabus section SL 2.9. Every question comes with the mark scheme working.',
    },
    'exponential-logarithmic-inverse-graphs': {
      metaTitle: 'Inverse of an Exponential Function | IB AA SL',
      metaDescription:
        'Sketch the inverse of an exponential function, the logarithm, in IB Maths AA SL, as a reflection of the original in the line y = x.',
      title: 'IB Maths AA SL Exponential and Logarithmic Inverse Graphs',
      description:
        'The inverse of an exponential function is a logarithm, so y = aˣ and y = logₐx are reflections of each other in the line y = x.',
      questionSectionTitle: 'Exponential & Logarithmic Inverse Graphs: Questions & Answers',
      questionSectionDescription:
        'Sketch y = aˣ with its asymptote, reflect key points in y = x, and show the vertical asymptote x = 0 on the logarithm. Questions follow syllabus section SL 2.9. Every question comes with the mark scheme working.',
    },
    'writing-exponentials-in-the-form-ekx': {
      metaTitle: 'Converting to Base e: e^kx Form | IB AA SL',
      metaDescription:
        'Write exponentials in the form e^(kx) in IB Maths AA SL by converting to base e with natural logarithms, k to 3 significant figures.',
      title: 'IB Maths AA SL Writing Exponentials in the Form e^kx',
      description:
        'Any exponential aˣ can be written as e^(kx). Converting to base e uses the natural logarithm: k = ln a.',
      questionSectionTitle: 'Writing Exponentials in the form e^kx: Questions & Answers',
      questionSectionDescription:
        'Set aˣ = e^(kx), take natural logs of both sides, and give k to the accuracy requested. Questions follow syllabus section SL 2.9. Every question comes with the mark scheme working.',
    },
    'transformations-of-logarithmic-graphs': {
      metaTitle: 'Log Graph Transformations | IB Maths AA SL',
      metaDescription:
        'Log graph transformations in IB Maths AA SL: translate and stretch y = ln x and track the vertical asymptote and intercepts.',
      title: 'IB Maths AA SL Transformations of Logarithmic Graphs',
      description:
        'Log graph transformations move the asymptote as well as the curve. These questions translate and stretch y = ln x and find the new asymptote and intercepts.',
      questionSectionTitle: 'Transformations of Logarithmic Graphs: Questions & Answers',
      questionSectionDescription:
        'Apply each transformation to the asymptote x = 0 and to the point (1, 0), then sketch the new graph through them. Questions follow syllabus section SL 2.9. Every question comes with the mark scheme working.',
    },
    'finding-parameters-of-exponential-functions': {
      metaTitle: 'Exponential Function from Points | IB AA SL',
      metaDescription:
        'Find an exponential function from points on its graph in IB Maths AA SL: the constants in y = Caˣ and y = e^(kx) − c.',
      title: 'IB Maths AA SL Finding Parameters of Exponential Functions',
      description:
        'Finding an exponential function from points means substituting known coordinates. The y-intercept usually gives one parameter straight away.',
      questionSectionTitle: 'Finding Parameters of Exponential Functions: Questions & Answers',
      questionSectionDescription:
        'Substitute x = 0 to find the first constant, then substitute the second point and solve for the remaining parameter. Questions follow syllabus section SL 2.9. Every question comes with the mark scheme working.',
    },
    'change-of-base-log-laws': {
      metaTitle: 'Change of Base Formula | IB Maths AA SL',
      metaDescription:
        'Prove and use the change of base formula in IB Maths AA SL: write log₄x in terms of ln and log, then evaluate log₄32 exactly.',
      title: 'IB Maths AA SL Change of Base and Log Laws',
      description:
        'The change of base formula, logₐx = ln x ÷ ln a, lets any logarithm be written in a base your calculator has. This question proves it and uses it without a calculator.',
      questionSectionTitle: 'Change of Base / Log Laws: Questions & Answers',
      questionSectionDescription:
        'Let y = log₄x, rewrite as 4ʸ = x, take logs of both sides and rearrange. Then write 32 and 4 as powers of 2 to evaluate exactly. Questions follow syllabus section SL 2.9. Every question comes with the mark scheme working.',
    },
  },
  'functions-equations': {
    'solving-equations-by-factoring-cancellation': {
      metaTitle: 'Solving Equations by Factorising | IB AA SL',
      metaDescription:
        'Practise solving equations by factorising in IB Maths AA SL: equations such as xeˣ = 4x, where dividing by x would lose a solution.',
      title: 'IB Maths AA SL Solving Equations by Factorising',
      description:
        'Solving equations by factorising keeps every solution. Dividing both sides of xeˣ = 4x by x loses x = 0; factorising does not.',
      questionSectionTitle: 'Solving equations by factoring / cancellation: Questions & Answers',
      questionSectionDescription:
        'Move every term to one side, take out the common factor, set each factor equal to zero, and check each solution is in the domain. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'equations-involving-surds': {
      metaTitle: 'Surd Equations Questions | IB Maths AA SL',
      metaDescription:
        'Solve surd equations in IB Maths AA SL, such as x√(x + 1) = 3x, by factorising first and then squaring.',
      title: 'IB Maths AA SL Equations Involving Surds',
      description:
        'Surd equations hide a common factor and a square root. These questions factorise first, then square to remove the root.',
      questionSectionTitle: 'Equations involving surds: Questions & Answers',
      questionSectionDescription:
        'Rearrange to zero and factorise out x, solve the surd factor by squaring both sides, and check every answer in the original equation. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'equations-involving-surds-logs-exponentials': {
      metaTitle: 'Logarithmic & Exponential Equations | IB AA SL',
      metaDescription:
        'Practise solving logarithmic and exponential equations in IB Maths AA SL that combine eˣ, ln x and x, by factorising.',
      title: 'IB Maths AA SL Equations with Surds, Logs and Exponentials',
      description:
        'Solving logarithmic and exponential equations together needs care with domains. These questions factorise and then solve each factor separately.',
      questionSectionTitle: 'Equations involving surds / logs / exponentials: Questions & Answers',
      questionSectionDescription:
        'Collect terms on one side, factorise, solve each factor, and reject any solution where the logarithm is undefined. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'hidden-quadratics-substitution-method': {
      metaTitle: 'Substitution Method for Quadratics | IB AA SL',
      metaDescription:
        'Solve hidden quadratics in IB Maths AA SL with a substitution method: quadratic equations in x² or x³ such as x⁴ − 5x² + 4 = 0.',
      title: 'IB Maths AA SL Hidden Quadratics: Substitution Method',
      description:
        'An equation such as x⁴ − 5x² + 4 = 0 is a quadratic in x². The substitution method makes it a quadratic you can factorise.',
      questionSectionTitle: 'Hidden quadratics (substitution method): Questions & Answers',
      questionSectionDescription:
        'Let u = x² (or x³), solve the quadratic in u, then substitute back and find every value of x, rejecting any that are not real. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'exponential-equations-reducible-to-quadratics': {
      metaTitle: 'Exponential Equations in Quadratic Form | AA SL',
      metaDescription:
        'Solve exponential equations in quadratic form in IB Maths AA SL, such as e²ˣ − 7eˣ + 6 = 0, using the substitution u = eˣ.',
      title: 'IB Maths AA SL Exponential Equations Reducible to Quadratics',
      description:
        'Exponential equations in quadratic form use the fact that e²ˣ = (eˣ)². Substituting u = eˣ gives an ordinary quadratic.',
      questionSectionTitle: 'Exponential equations reducible to quadratics: Questions & Answers',
      questionSectionDescription:
        'Let u = eˣ, solve the quadratic in u, reject any negative value of u, and take natural logarithms to find x. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'hidden-quadratics-fractional-indices': {
      metaTitle: 'Equations with Fractional Indices | IB AA SL',
      metaDescription:
        'Solve equations with fractional indices in IB Maths AA SL, such as x^(2/3) − 2x^(1/3) = 3, as a hidden quadratic.',
      title: 'IB Maths AA SL Hidden Quadratics: Fractional Indices',
      description:
        'Equations with fractional indices can be hidden quadratics: x^(2/3) is the square of x^(1/3).',
      questionSectionTitle: 'Hidden quadratics — fractional indices: Questions & Answers',
      questionSectionDescription:
        'Let u = x^(1/3), solve the quadratic in u, then cube each value to find x. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'equations-with-variable-exponents': {
      metaTitle: 'Variable Exponent Equations | IB Maths AA SL',
      metaDescription:
        'Find all real solutions of variable exponent equations in IB Maths AA SL, such as (x − 7)^(x² − 16) = 1, case by case.',
      title: 'IB Maths AA SL Equations with Variable Exponents',
      description:
        'Variable exponent equations such as (x − 7)^(x² − 16) = 1 have more than one route to the answer: the power is zero, the base is 1, or the base is −1 with an even power.',
      questionSectionTitle: 'Equations with variable exponents: Questions & Answers',
      questionSectionDescription:
        'Check each case in turn, solve it, and test every candidate in the original equation. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
  },
  'algebra-and-functions': {
    'polynomial-equations-graphical-methods': {
      metaTitle: 'Solving Equations Graphically | IB Maths AA SL',
      metaDescription:
        'Practise solving equations graphically in IB Maths AA SL: polynomial, exponential, logarithmic and rational equations on a GDC.',
      title: 'IB Maths AA SL Graphical Methods for Equations',
      description:
        'Some equations cannot be solved with algebra. Solving equations graphically finds every solution as an intersection on your GDC.',
      questionSectionTitle: 'Polynomial Equations — Graphical Methods: Questions & Answers',
      questionSectionDescription:
        'Rearrange so one side is zero and find the roots, or graph each side and find where they intersect. Give every solution to three significant figures. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'graphs-and-intersections': {
      metaTitle: 'Intersection of Graphs Questions | IB AA SL',
      metaDescription:
        'Use the intersection of graphs in IB Maths AA SL to find the number of solutions of e^(−x) = 2 − x² from a sketch.',
      title: 'IB Maths AA SL Graphs and Intersections',
      description:
        'Each intersection of graphs is one solution of the equation formed by setting them equal. A sketch shows how many solutions there are.',
      questionSectionTitle: 'Graphs and Intersections: Questions & Answers',
      questionSectionDescription:
        'Sketch both graphs on the same axes with their key features, count the intersections, and state the number of solutions. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'logarithmic-rational-equations-graphs': {
      metaTitle: 'Logarithmic and Rational Graphs | IB AA SL',
      metaDescription:
        'Sketch logarithmic and rational graphs in IB Maths AA SL, y = ln(x − 2) and y = 1/(x − 3), and count the solutions where they meet.',
      title: 'IB Maths AA SL Logarithmic and Rational Equations: Graphs',
      description:
        'Drawing logarithmic and rational graphs together shows where they meet. Each meeting point is a solution of the equation formed from them.',
      questionSectionTitle: 'Logarithmic & Rational Equations — Graphs: Questions & Answers',
      questionSectionDescription:
        'Show each asymptote clearly, sketch both curves on one diagram, and count the points of intersection. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'number-of-roots-parameter-problems': {
      metaTitle: 'Number of Roots of an Equation | IB Maths AA SL',
      metaDescription:
        'Find the number of roots of an equation in IB Maths AA SL, and the values of k that give three, one or no real roots.',
      title: 'IB Maths AA SL Number of Roots and Parameter Problems',
      description:
        'The number of roots of an equation equals the number of times two graphs meet. Moving a horizontal line y = k changes that number.',
      questionSectionTitle: 'Number of Roots / Parameter Problems: Questions & Answers',
      questionSectionDescription:
        'Sketch the curve, find its turning points, and use them to decide which values of k give the required number of intersections. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
  },
  'geometry-trigonometry': {
    'surface-area-and-volume-of-3d-shapes': {
      metaTitle: 'Volume of 3D Shapes Questions | IB Maths AA SL',
      metaDescription:
        'Volume of 3D shapes and surface area in IB Maths AA SL: spheres, hemispheres, cones and cubes, as decimals and in exact form.',
      title: 'IB Maths AA SL Surface Area and Volume of 3D Shapes',
      description:
        'These questions find the volume and surface area of 3D shapes: spheres, hemispheres, cones and a cube, using the IB formula booklet.',
      questionSectionTitle: 'Surface Area and Volume of 3D Shapes: Questions & Answers',
      questionSectionDescription:
        'Choose the right formula, check whether the question gives the radius or the diameter, and give exact answers in terms of π where asked. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'right-angled-triangles-algebraic-geometry': {
      metaTitle: 'Pythagoras Theorem Questions | IB Maths AA SL',
      metaDescription:
        'Use Pythagoras theorem in IB Maths AA SL to solve a right-angled triangle where the area equals the perimeter.',
      title: 'IB Maths AA SL Pythagoras Theorem: Algebraic Geometry',
      description:
        'Pythagoras theorem links the three sides of a right-angled triangle. Here it is combined with area and perimeter to form an equation in x.',
      questionSectionTitle: 'Right-Angled Triangles / Algebraic Geometry: Questions & Answers',
      questionSectionDescription:
        'Write the hypotenuse with Pythagoras, express the area and perimeter in terms of x, set them equal, and solve. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
    'distance-between-two-points-2d': {
      metaTitle: 'Distance Formula Questions | IB Maths AA SL',
      metaDescription:
        'Use the distance formula in IB Maths AA SL to find the exact distance between two points, leaving surds in simplest form.',
      title: 'IB Maths AA SL Distance Between Two Points',
      description:
        'The distance formula, d = √((x₂ − x₁)² + (y₂ − y₁)²), is Pythagoras theorem on a coordinate grid. These questions find the distance between two points exactly.',
      questionSectionTitle: 'Distance Between Two Points (2D): Questions & Answers',
      questionSectionDescription:
        'Subtract the coordinates, square each difference, add, and take the square root. Simplify the surd rather than rounding. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'midpoint-of-a-line-segment-2d': {
      metaTitle: 'Midpoint Formula Questions | IB Maths AA SL',
      metaDescription:
        'Use the midpoint formula in IB Maths AA SL to find the midpoint of a line segment from its two end points.',
      title: 'IB Maths AA SL Midpoint of a Line Segment',
      description:
        'The midpoint formula averages the coordinates: ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2). It gives the midpoint of a line segment in one step.',
      questionSectionTitle: 'Midpoint of a Line Segment (2D): Questions & Answers',
      questionSectionDescription:
        'Add the x-coordinates and halve, then do the same for the y-coordinates, keeping signs with care. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'distance-of-midpoint-from-origin-3d': {
      metaTitle: 'Midpoint in 3D Questions | IB Maths AA SL',
      metaDescription:
        'Find the midpoint in 3D in IB Maths AA SL from two points with x, y and z coordinates, and its distance from the origin.',
      title: 'IB Maths AA SL Midpoint in 3D',
      description:
        'The midpoint in 3D works as it does in 2D, with a third coordinate. These questions find midpoints and then their distance from the origin.',
      questionSectionTitle: 'Distance of Midpoint from Origin (3D): Questions & Answers',
      questionSectionDescription:
        'Average each of the three coordinates, then use d = √(x² + y² + z²) for the distance from the origin. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'real-life-application-3d-distance-and-speed': {
      metaTitle: '3D Distance in Real Life | IB Maths AA SL',
      metaDescription:
        "A 3D distance real-life problem for IB Maths AA SL: a bird's flight from a birdhouse to a treetop, then its speed.",
      title: 'IB Maths AA SL 3D Distance in Real Life',
      description:
        "This real-life 3D distance problem places a birdhouse and a tree in coordinates, finds the straight-line flight distance, and then the bird's speed.",
      questionSectionTitle: 'Real-Life Application — 3D Distance and Speed: Questions & Answers',
      questionSectionDescription:
        'Write the coordinates of each point, use the 3D distance formula, then divide distance by time for the speed. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'distance-from-origin-algebraic-3d': {
      metaTitle: 'Distance from the Origin in 3D | IB Maths AA SL',
      metaDescription:
        'Find unknown coordinates from the distance from the origin in 3D in IB Maths AA SL, including a point twice as far as another.',
      title: 'IB Maths AA SL Distance from the Origin in 3D',
      description:
        'The distance from the origin in 3D is √(x² + y² + z²). When coordinates contain an unknown, that distance gives an equation to solve.',
      questionSectionTitle: 'Distance from Origin — Algebraic (3D): Questions & Answers',
      questionSectionDescription:
        'Substitute the coordinates into the distance formula, square both sides, and solve for the positive value. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'distance-formula-quadratic-equation-3d': {
      metaTitle: '3D Distance Formula Questions | IB Maths AA SL',
      metaDescription:
        'Use the 3D distance formula in IB Maths AA SL to find exact distances between points and solve for unknown coordinates.',
      title: 'IB Maths AA SL 3D Distance Formula',
      description:
        'The 3D distance formula adds a z-term to the familiar one: d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²). These questions find exact distances and unknowns.',
      questionSectionTitle: 'Distance Formula — Quadratic Equation (3D): Questions & Answers',
      questionSectionDescription:
        'Subtract each pair of coordinates, square, add and take the square root. When the distance is given, square both sides and solve the quadratic. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    '3d-coordinates-real-life-context-tent': {
      metaTitle: '3D Coordinates Questions | IB Maths AA SL',
      metaDescription:
        'Read 3D coordinates in IB Maths AA SL from a real-life model of a tent and state its height from the vertex coordinates.',
      title: 'IB Maths AA SL 3D Coordinates in Context',
      description:
        '3D coordinates describe a real object with three numbers per point. This question reads the height of a tent from its vertices.',
      questionSectionTitle: '3D Coordinates — Real-Life Context (Tent): Questions & Answers',
      questionSectionDescription:
        'Identify which coordinate measures height, then read it from the vertices at the top of the tent. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    '3d-distance-fly-flying-diagonally': {
      metaTitle: 'Space Diagonal of a Cuboid | IB Maths AA SL',
      metaDescription:
        'Find the space diagonal of a cuboid in IB Maths AA SL: the straight-line distance a fly travels across a 3 m by 4 m by 5 m room.',
      title: 'IB Maths AA SL 3D Distance: The Space Diagonal',
      description:
        'The space diagonal of a cuboid joins opposite corners through the inside. Its length is √(a² + b² + c²).',
      questionSectionTitle: '3D Distance — Fly Flying Diagonally: Questions & Answers',
      questionSectionDescription:
        'Apply Pythagoras twice, or use the 3D formula directly, and give the answer in exact form or to three significant figures. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'shortest-path-on-surface-unfolding-method': {
      metaTitle: 'Shortest Path on Surface of a Cuboid | IB AA SL',
      metaDescription:
        'Find the shortest path on the surface of a cuboid in IB Maths AA SL by unfolding the faces into a flat net.',
      title: 'IB Maths AA SL Shortest Path on a Surface: Unfolding Method',
      description:
        'The shortest path on the surface of a cuboid is a straight line on its net. Unfolding the faces turns a 3D problem into a 2D one.',
      questionSectionTitle: 'Shortest Path on Surface — Unfolding Method: Questions & Answers',
      questionSectionDescription:
        'Unfold the two faces the path crosses, draw the straight line, use Pythagoras, and compare the possible unfoldings. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
  },
  'sequences-series-algebra': {
    'infinite-geometric-series-exponential-equations': {
      metaTitle: 'Exponential Geometric Series | IB Maths AA SL',
      metaDescription:
        'An exponential geometric series question for IB Maths AA SL: sum an infinite series in e^(−x), form a quadratic in eˣ and find x exactly.',
      title: 'IB Maths AA SL Infinite Geometric Series and Exponential Equations',
      description:
        'This exponential geometric series has terms in e^(−x). Its sum to infinity leads to a quadratic equation in eˣ, which gives x exactly.',
      questionSectionTitle:
        'Infinite Geometric Series / Exponential Equations: Questions & Answers',
      questionSectionDescription:
        'Identify the first term and ratio, apply S∞ = u₁ ÷ (1 − r), rearrange into the given quadratic, then solve for eˣ and take logarithms. Questions follow syllabus section SL 2.10. Every question comes with the mark scheme working.',
    },
  },
  'coordinate-geometry': {
    'midpoint-with-unknown-parameters-system-of-equations': {
      metaTitle: 'Find Coordinates from a Midpoint | IB AA SL',
      metaDescription:
        'Find coordinates from a midpoint in IB Maths AA SL when the end points contain unknowns: form and solve simultaneous equations.',
      title: 'IB Maths AA SL Midpoint with Unknown Parameters',
      description:
        'When you find coordinates from a midpoint, each coordinate of the midpoint gives one equation. Two unknowns need a system of two equations.',
      questionSectionTitle:
        'Midpoint with Unknown Parameters — System of Equations: Questions & Answers',
      questionSectionDescription:
        'Write the midpoint formula for x and for y, set each equal to the given value, and solve simultaneously. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'gradient-from-equation-of-a-line': {
      metaTitle: 'Slope from Equation of a Line | IB Maths AA SL',
      metaDescription:
        'Find the gradient, or slope, from the equation of a line in IB Maths AA SL by rearranging 4x − 7y = 35 into y = mx + c.',
      title: 'IB Maths AA SL Gradient from the Equation of a Line',
      description:
        'Reading the slope from an equation means getting it into y = mx + c first. This question rearranges a general-form equation.',
      questionSectionTitle: 'Gradient from Equation of a Line: Questions & Answers',
      questionSectionDescription:
        'Make y the subject, simplify, and read the gradient as the coefficient of x. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'equation-of-a-perpendicular-line': {
      metaTitle: 'Equation of a Perpendicular Line | IB AA SL',
      metaDescription:
        'Find the equation of a perpendicular line through a given point in IB Maths AA SL, written in the form ax + by + d = 0.',
      title: 'IB Maths AA SL Equation of a Perpendicular Line',
      description:
        'The equation of a perpendicular line uses the negative reciprocal of the original gradient and one point on the new line.',
      questionSectionTitle: 'Equation of a Perpendicular Line: Questions & Answers',
      questionSectionDescription:
        'Find the gradient of l₁, take its negative reciprocal, substitute the point into y − y₁ = m(x − x₁), and write the perpendicular line equation in general form. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'shortest-distance-from-a-point-to-a-line': {
      metaTitle: 'Perpendicular Distance from Point to Line',
      metaDescription:
        'Find the perpendicular distance from a point to a line in IB Maths AA SL using the foot of the perpendicular and the distance formula.',
      title: 'IB Maths AA SL Shortest Distance from a Point to a Line',
      description:
        'The shortest route from a point to a line meets it at right angles, so the perpendicular distance from the point to the line is the length of that segment.',
      questionSectionTitle: 'Shortest Distance from a Point to a Line: Questions & Answers',
      questionSectionDescription:
        'Find the foot of the perpendicular, then use the distance formula between it and the point. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'midpoint-of-a-diagonal-of-a-square': {
      metaTitle: 'Diagonals of a Square Questions | IB AA SL',
      metaDescription:
        'Use the diagonals of a square in IB Maths AA SL: find the midpoint of AC from two opposite vertices.',
      title: 'IB Maths AA SL Midpoint of a Diagonal of a Square',
      description:
        'The diagonals of a square bisect each other at right angles, so both share the same midpoint. This question finds it from two opposite vertices.',
      questionSectionTitle: 'Midpoint of a Diagonal of a Square: Questions & Answers',
      questionSectionDescription:
        'Apply the midpoint formula to the opposite vertices A and C. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'coordinates-of-vertices-of-a-square': {
      metaTitle: 'Vertices of a Square from Coordinates | AA SL',
      metaDescription:
        'Find the vertices of a square from coordinates of two opposite corners in IB Maths AA SL, and the missing vertices of a rhombus.',
      title: 'IB Maths AA SL Coordinates of Vertices of a Square',
      description:
        'Given two opposite vertices of a square, coordinates of the other two follow from the midpoint and a perpendicular step of equal length.',
      questionSectionTitle: 'Coordinates of Vertices of a Square: Questions & Answers',
      questionSectionDescription:
        'Find the midpoint of the known diagonal, rotate the half-diagonal by 90°, and add and subtract it from the midpoint. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'perpendicular-bisector-diagonals-of-a-rhombus': {
      metaTitle: 'Perpendicular Bisector Questions | IB AA SL',
      metaDescription:
        'Find the perpendicular bisector of a rhombus diagonal in IB Maths AA SL, using the fact that the diagonals bisect at right angles.',
      title: 'IB Maths AA SL Perpendicular Bisector: Diagonals of a Rhombus',
      description:
        'Each diagonal of a rhombus is the perpendicular bisector of the other. This question finds the equation of one diagonal from the end points of the other.',
      questionSectionTitle: 'Perpendicular Bisector — Diagonals of a Rhombus: Questions & Answers',
      questionSectionDescription:
        'Find the midpoint and gradient of AC, take the negative reciprocal gradient, and write the equation of the line through the midpoint. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'length-of-sides-of-a-rhombus': {
      metaTitle: 'Rhombus Properties: Side Lengths | IB AA SL',
      metaDescription:
        'Use rhombus properties in IB Maths AA SL to find the length of each side of a rhombus from its vertices.',
      title: 'IB Maths AA SL Length of the Sides of a Rhombus',
      description:
        'Among the key rhombus properties: all four sides are equal. This question checks it with the distance formula.',
      questionSectionTitle: 'Length of Sides of a Rhombus: Questions & Answers',
      questionSectionDescription:
        'Use the distance formula on each pair of neighbouring vertices and confirm the four lengths are equal. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
  },
  'geometry-mensuration': {
    'volume-pyramid': {
      metaTitle: 'Volume of Pyramid Questions | IB Maths AA SL',
      metaDescription:
        'Calculate the volume of a pyramid in IB Maths AA SL from its base area and height, for triangular-based and square-based pyramids.',
      title: 'IB Maths AA SL Volume of a Pyramid',
      description:
        'The volume of a pyramid is one third of its base area times its height. These volume of pyramid questions apply it to triangular-based and square-based pyramids.',
      questionSectionTitle: 'Volume – Pyramid: Questions & Answers',
      questionSectionDescription:
        'Use the volume of a pyramid formula, V = ⅓ × base area × height, check the units match, and give the answer in cubic units. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'volume-cone': {
      metaTitle: 'Volume of Cone Questions | IB Maths AA SL',
      metaDescription:
        'Find the volume of a cone in IB Maths AA SL from its base area and height, including a conical sculpture given its diameter.',
      title: 'IB Maths AA SL Volume of a Cone',
      description:
        'A cone is a pyramid with a circular base, so its volume is one third of base area times height. These volume of cone questions include a real sculpture.',
      questionSectionTitle: 'Volume – Cone: Questions & Answers',
      questionSectionDescription:
        'Apply the volume of cone formula, V = ⅓πr²h. When the diameter is given, halve it first. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'volume-total-surface-area-right-square-pyramid': {
      metaTitle: 'Surface Area of a Square Pyramid | IB AA SL',
      metaDescription:
        'Find the volume and total surface area of a square pyramid in IB Maths AA SL, plus rectangular pyramids and right cones.',
      title: 'IB Maths AA SL Volume and Total Surface Area of a Right Pyramid',
      description:
        'The surface area of a square pyramid is the base plus four triangular faces. These questions find it alongside the volume, for square and rectangular pyramids and right cones.',
      questionSectionTitle:
        'Volume & Total Surface Area – Right Square Pyramid: Questions & Answers',
      questionSectionDescription:
        'Use Pythagoras to find any slant height you need, add the area of the base and every face, and find the volume with V = ⅓ × base area × height. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'surface-area-sphere': {
      metaTitle: 'Surface Area of Sphere Questions | IB AA SL',
      metaDescription:
        'Find the surface area of a sphere in IB Maths AA SL from its diameter, using the formula 4πr², and give the answer to the accuracy asked.',
      title: 'IB Maths AA SL Surface Area of a Sphere',
      description:
        'The surface area of a sphere is 4πr², four times the area of its widest circle. This question starts from the diameter.',
      questionSectionTitle: 'Surface Area – Sphere: Questions & Answers',
      questionSectionDescription:
        'Halve the diameter, apply the surface area of sphere formula, and round to the accuracy asked for. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'total-surface-area-hemisphere': {
      metaTitle: 'Total Surface Area of Hemisphere | IB AA SL',
      metaDescription:
        'Find the total surface area of a hemisphere in IB Maths AA SL: the curved surface plus the flat circular face, 3πr².',
      title: 'IB Maths AA SL Total Surface Area of a Hemisphere',
      description:
        'The total surface area of a hemisphere includes its flat circular face as well as its curved surface, giving 2πr² + πr² = 3πr².',
      questionSectionTitle: 'Total Surface Area – Hemisphere: Questions & Answers',
      questionSectionDescription:
        'The curved surface area of a hemisphere is half of 4πr², or 2πr². Add the flat face, πr², for a solid hemisphere. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'volume-hemisphere': {
      metaTitle: 'Volume of Hemisphere Questions | IB Maths AA SL',
      metaDescription:
        'Find the volume of a hemisphere and of a full sphere in IB Maths AA SL, working from the radius or the diameter given in the question.',
      title: 'IB Maths AA SL Volume of a Hemisphere and Sphere',
      description:
        'The volume of a hemisphere is half the volume of a sphere: ⅔πr³. These questions find both.',
      questionSectionTitle: 'Volume – Hemisphere: Questions & Answers',
      questionSectionDescription:
        'Use the volume of hemisphere formula, V = ⅔πr³, or V = ⁴⁄₃πr³ for a full sphere, and halve any diameter first. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'surface-area-volume-compound-shape-cylinder-cone': {
      metaTitle: 'Composite Solids Questions | IB Maths AA SL',
      metaDescription:
        'Composite solids in IB Maths AA SL: surface area and volume of a cylinder with a cone, a toy rocket and a capsule-shaped tablet.',
      title: 'IB Maths AA SL Compound Shapes: Cylinder, Cone and Hemisphere',
      description:
        'Composite solids are built from simple shapes. These questions combine cylinders with cones and hemispheres, from a toy rocket to a tablet.',
      questionSectionTitle:
        'Surface Area & Volume – Compound Shape (Cylinder + Cone): Questions & Answers',
      questionSectionDescription:
        'Split the solid into its parts, add the volumes, and for surface area include only the faces on the outside. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'volume-compound-shape-standard-form': {
      metaTitle: 'Volume of Compound Shapes | IB Maths AA SL',
      metaDescription:
        'Find the volume of compound shapes in IB Maths AA SL: a fence post made from a cylinder and a hemisphere, given in standard form.',
      title: 'IB Maths AA SL Volume of a Compound Shape',
      description:
        'The volume of compound shapes is the sum of the volumes of their parts. This fence post is a cylinder with a hemisphere on top.',
      questionSectionTitle: 'Volume – Compound Shape (Standard Form): Questions & Answers',
      questionSectionDescription:
        "Find the height of the cylinder part, add its volume to the hemisphere's, and write the answer in standard form with consistent units. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.",
    },
    'surface-area-cone-reverse-calculation': {
      metaTitle: 'Curved Surface Area of Cone | IB Maths AA SL',
      metaDescription:
        'Find the radius, then the curved surface area of a cone and its total surface area in IB Maths AA SL, from the height and slant height.',
      title: 'IB Maths AA SL Surface Area of a Cone: Reverse Calculation',
      description:
        'The curved surface area of a cone is πrl, where l is the slant height. This question first works backwards to find the radius.',
      questionSectionTitle: 'Surface Area – Cone (Reverse Calculation): Questions & Answers',
      questionSectionDescription:
        'Use Pythagoras with the vertical height and slant height to find r, then add the base, πr², for the total surface area of a cone. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'volume-cylinder-cone-reverse-calculation': {
      metaTitle: 'Volume of a Cylinder Questions | IB Maths AA SL',
      metaDescription:
        'Work backwards from the volume of a cylinder in IB Maths AA SL to find its radius, then the height of a cone with the same volume.',
      title: 'IB Maths AA SL Volume of a Cylinder and Cone: Reverse Calculation',
      description:
        'When the volume of a cylinder is known, its formula can be rearranged to find the radius. This question then compares it with a cone.',
      questionSectionTitle: 'Volume – Cylinder & Cone (Reverse Calculation): Questions & Answers',
      questionSectionDescription:
        "Rearrange the volume of a cylinder formula, V = πr²h, to find r, then set ⅓πr²h equal to the same volume to find the cone's height. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.",
    },
    'volume-cone-sphere-conservation-of-volume': {
      metaTitle: 'Volume of a Sphere Questions | IB Maths AA SL',
      metaDescription:
        'Use the volume of a sphere in IB Maths AA SL: melt a metal cone into spheres and find their radius by conservation of volume.',
      title: 'IB Maths AA SL Volume: Cone and Sphere',
      description:
        'When a solid is melted and recast, its volume stays the same. This question uses the volume of a sphere to find the size of the new pieces.',
      questionSectionTitle: 'Volume – Cone & Sphere (Conservation of Volume): Questions & Answers',
      questionSectionDescription:
        "Find the cone's volume, set it equal to the total volume of the spheres using the volume of a sphere formula, and solve for r. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.",
    },
    'surface-area-volume-square-pyramid': {
      metaTitle: 'Square Pyramid Volume and Area | IB Maths AA SL',
      metaDescription:
        'Find the square pyramid volume and surface area in IB Maths AA SL when each side face is an isosceles triangle.',
      title: 'IB Maths AA SL Surface Area and Volume of a Square Pyramid',
      description:
        'The square pyramid volume needs the vertical height, which is not given directly here. The side faces are isosceles triangles, so Pythagoras finds it.',
      questionSectionTitle: 'Surface Area & Volume – Square Pyramid: Questions & Answers',
      questionSectionDescription:
        'Find the area of one side face, then the slant height and vertical height with Pythagoras, then the volume and total surface area. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'surface-area-volume-compound-shape-cone-with-hemispherical-cavity': {
      metaTitle: 'Volume of Cone and Hemisphere | IB Maths AA SL',
      metaDescription:
        'Find the volume of a cone and hemisphere combined in IB Maths AA SL: a cone with a hemispherical hole and two joined hemispheres.',
      title: 'IB Maths AA SL Compound Shapes: Cones and Hemispheres',
      description:
        'These questions find the surface area and volume of a cone and hemisphere combined, including a cone with a hemispherical hole in its base.',
      questionSectionTitle:
        'Surface Area & Volume – Compound Shape (Cone with Hemispherical Cavity): Questions & Answers',
      questionSectionDescription:
        'Subtract the volume of a hole and add the volume of an extra part, then list every outer surface for the total surface area. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'volume-surface-area-frustum': {
      metaTitle: 'Volume of Frustum Questions | IB Maths AA SL',
      metaDescription:
        'Find the volume of a frustum and its total surface area in IB Maths AA SL by subtracting a small cone from a large one.',
      title: 'IB Maths AA SL Volume and Surface Area of a Frustum',
      description:
        'A frustum is a cone with its tip sliced off parallel to the base. The volume of a frustum is the large cone minus the small one.',
      questionSectionTitle: 'Volume & Surface Area – Frustum: Questions & Answers',
      questionSectionDescription:
        'Use similar triangles to find the missing heights, then find the volume of the frustum by subtraction. You can also apply the frustum formula directly. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'volume-surface-area-square-pyramid-reverse-calculation': {
      metaTitle: 'Slant Height of a Pyramid | IB Maths AA SL',
      metaDescription:
        "Find a pyramid's base from its volume in IB Maths AA SL, then the slant height of the pyramid and its total surface area.",
      title: 'IB Maths AA SL Square Pyramid: Reverse Calculation',
      description:
        'This question works backwards from the volume to find the base side, then uses the slant height of the pyramid to find its surface area.',
      questionSectionTitle:
        'Volume & Surface Area – Square Pyramid (Reverse Calculation): Questions & Answers',
      questionSectionDescription:
        'Rearrange V = ⅓ × base area × height for the side length, use Pythagoras for the slant height, then add the five faces. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'surface-area-sphere-from-volume': {
      metaTitle: 'Sphere Volume and Surface Area | IB Maths AA SL',
      metaDescription:
        'Link sphere volume and surface area in IB Maths AA SL: find the radius from a given volume, then the surface area.',
      title: 'IB Maths AA SL Surface Area of a Sphere from its Volume',
      description:
        'Sphere volume and surface area both depend only on the radius. Find r from one, and the other follows.',
      questionSectionTitle: 'Surface Area – Sphere (from Volume): Questions & Answers',
      questionSectionDescription:
        'Rearrange V = ⁴⁄₃πr³ to find r, keep it unrounded, then substitute into 4πr². Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
    'volume-surface-area-compound-shape-fencepost': {
      metaTitle: 'Surface Area of Composite Shapes | IB AA SL',
      metaDescription:
        'Find the volume and surface area of composite shapes in IB Maths AA SL: a metal fence post made of a cylinder and a conical spike.',
      title: 'IB Maths AA SL Compound Shape: Fence Post',
      description:
        'The surface area of composite shapes counts only the outside faces. This fence post joins a cylinder to a conical spike.',
      questionSectionTitle:
        'Volume & Surface Area – Compound Shape (Fencepost): Questions & Answers',
      questionSectionDescription:
        "Convert every length to the same unit, find the cone's slant height, and add the outer surfaces and the two volumes. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.",
    },
  },
  'geometry-and-trigonometry': {
    'right-angled-triangle-finding-angles': {
      metaTitle: 'SOHCAHTOA Questions | IB Maths AA SL',
      metaDescription:
        'Use SOHCAHTOA in IB Maths AA SL to find missing angles and sides in right-angled triangles, with the correct trig ratio each time.',
      title: 'IB Maths AA SL Right-Angled Triangles: Angles and Sides',
      description:
        'SOHCAHTOA is the memory aid for sine, cosine and tangent in a right-angled triangle. These questions use it to find missing angles and sides.',
      questionSectionTitle: 'Right-angled triangle – finding angles: Questions & Answers',
      questionSectionDescription:
        'Label the sides as opposite, adjacent and hypotenuse from the angle in question, choose the ratio that links what you know, and use inverse trig for angles. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'angle-between-a-line-and-an-axis': {
      metaTitle: 'Angle Between a Line and the x-Axis | IB AA SL',
      metaDescription:
        'Find the angle between a line and the x-axis or y-axis in IB Maths AA SL using the gradient and the inverse tangent.',
      title: 'IB Maths AA SL Angle Between a Line and the x-axis',
      description:
        'The angle between a line and the x-axis comes straight from its gradient: tan θ = m. The y-axis angle is its complement.',
      questionSectionTitle: 'Angle between a line and an axis: Questions & Answers',
      questionSectionDescription:
        'Find the gradient, use θ = tan⁻¹(m) for the x-axis, and subtract from 90° for the angle with the y-axis. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'sine-rule-finding-a-side': {
      metaTitle: 'Sine Rule Questions | IB Maths AA SL',
      metaDescription:
        'Use the sine rule in IB Maths AA SL to find a missing side or a missing angle in a non-right-angled triangle.',
      title: 'IB Maths AA SL Sine Rule: Sides and Angles',
      description:
        'The sine rule links each side of a triangle to the sine of its opposite angle. These questions use it to find a missing side and a missing angle.',
      questionSectionTitle: 'Sine rule – finding a side: Questions & Answers',
      questionSectionDescription:
        'Pair each side with its opposite angle, write a/sin A = b/sin B, and solve. When finding an angle, check whether an obtuse answer is also possible. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'cosine-rule-finding-a-side': {
      metaTitle: 'Cosine Rule Questions | IB Maths AA SL',
      metaDescription:
        'Use the cosine rule in IB Maths AA SL to find a missing side from two sides and the included angle, or an angle from three sides.',
      title: 'IB Maths AA SL Cosine Rule: Sides and Angles',
      description:
        'The cosine rule extends Pythagoras to any triangle: a² = b² + c² − 2bc cos A. These questions find a third side and find angles from three sides.',
      questionSectionTitle: 'Cosine rule – finding a side: Questions & Answers',
      questionSectionDescription:
        'Use the side form when you know two sides and the angle between them, and the rearranged form, cos A = (b² + c² − a²)/2bc, when you know all three sides. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'area-of-a-triangle': {
      metaTitle: 'Area of a Triangle Using Trigonometry | AA SL',
      metaDescription:
        'Find the area of a triangle using trigonometry in IB Maths AA SL with ½ab sin C, from two sides and the included angle.',
      title: 'IB Maths AA SL Area of a Triangle',
      description:
        'The area of a triangle using trigonometry needs two sides and the angle between them: Area = ½ab sin C.',
      questionSectionTitle: 'Area of a triangle: Questions & Answers',
      questionSectionDescription:
        'Check the angle sits between the two given sides, substitute into ½ab sin C, and give the answer in square units. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'area-of-a-triangle-finding-unknowns': {
      metaTitle: 'Area of a Triangle: Find Angle or Side | AA SL',
      metaDescription:
        'Use the area of a triangle to find an angle or a side in IB Maths AA SL by rearranging ½ab sin C and solving for the unknown.',
      title: 'IB Maths AA SL Area of a Triangle: Finding Unknowns',
      description:
        'These questions work backwards: given the area of a triangle, find the angle or side. Rearranging ½ab sin C gives the unknown.',
      questionSectionTitle: 'Area of a triangle – finding unknowns: Questions & Answers',
      questionSectionDescription:
        'Substitute the area and known values, solve for sin C or the missing side, and use inverse sine for the acute angle. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'mixed-trigonometry-multi-step': {
      metaTitle: 'Trigonometry Questions: Multi-Step | IB AA SL',
      metaDescription:
        'Multi-step trigonometry questions for IB Maths AA SL that combine right-angled trig, the sine rule and the cosine rule in one diagram.',
      title: 'IB Maths AA SL Mixed Trigonometry: Multi-Step',
      description:
        'These trigonometry questions need more than one step. Each diagram mixes right-angled triangles with non-right-angled ones.',
      questionSectionTitle: 'Mixed trigonometry – multi-step: Questions & Answers',
      questionSectionDescription:
        'Treat multi-step trigonometry problems one triangle at a time: find a shared side, carry its exact value forward, and choose SOHCAHTOA, the sine rule or the cosine rule for each. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
  },
  'geometry-trig': {
    '3d-trigonometry-cuboid-angles': {
      metaTitle: '3D Trigonometry Questions | IB Maths AA SL',
      metaDescription:
        '3D trigonometry in IB Maths AA SL: find lengths and angles inside a cuboid, including diagonals and face-diagonal triangles.',
      title: 'IB Maths AA SL 3D Trigonometry: Cuboids',
      description:
        '3D trigonometry finds lengths and angles in solids by picking out the right 2D triangle. These questions work inside cuboids.',
      questionSectionTitle: '3D Trigonometry – Cuboid Angles: Questions & Answers',
      questionSectionDescription:
        'Sketch the triangle you need separately, find any missing length with Pythagoras, then use trigonometry for the angle. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    '3d-trigonometry-angle-between-lines': {
      metaTitle: 'Angle Between Two Lines in 3D | IB Maths AA SL',
      metaDescription:
        'Find the acute angle between two lines in 3D in IB Maths AA SL, such as two diagonals of a cuboid, with the cosine rule.',
      title: 'IB Maths AA SL Angle Between Two Lines in 3D',
      description:
        'The angle between two lines in 3D is found in the triangle they form with a third line. These questions use the space diagonals of a cuboid.',
      questionSectionTitle: '3D Trigonometry – Angle Between Lines: Questions & Answers',
      questionSectionDescription:
        "Find the lengths of the triangle's three sides, apply the cosine rule, and give the acute angle. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.",
    },
    '3d-trig-right-pyramid-angle-acm': {
      metaTitle: 'Angle Between Line and Plane | IB Maths AA SL',
      metaDescription:
        'Find the angle between a line and a plane in IB Maths AA SL inside a right pyramid, such as angle ACM, and angle ABM.',
      title: 'IB Maths AA SL 3D Trigonometry: Right Pyramid Angles',
      description:
        "The angle between a line and a plane is measured to the line's projection on the plane. In a right pyramid, that projection runs to the centre of the base.",
      questionSectionTitle: '3D Trig – Right Pyramid, Angle ACM: Questions & Answers',
      questionSectionDescription:
        'Find the half-diagonal of the base, use the height to form a right-angled triangle, then apply trigonometry. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    '3d-trig-right-pyramid-find-height': {
      metaTitle: 'Height of a Pyramid Questions | IB Maths AA SL',
      metaDescription:
        'Find the height of a pyramid in IB Maths AA SL from its base and a given angle or edge length, in a right rectangular pyramid.',
      title: 'IB Maths AA SL 3D Trigonometry: Height of a Pyramid',
      description:
        'The height of a pyramid is the perpendicular from the vertex to the centre of the base. These questions find it from an angle or a sloping edge.',
      questionSectionTitle: '3D Trig – Right Pyramid, Find Height: Questions & Answers',
      questionSectionDescription:
        'Find AO, half of the base diagonal, then use tan or Pythagoras in triangle AOM to find OM. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    '3d-trig-diagonal-ag-base-angle': {
      metaTitle: 'Angle Between Diagonal and Base | IB AA SL',
      metaDescription:
        'Find the angle between the diagonal AG and the base of a cuboid in IB Maths AA SL from given edge or diagonal lengths.',
      title: 'IB Maths AA SL 3D Trigonometry: Diagonal and Base Angle',
      description:
        'The angle between diagonal and base sits in a right-angled triangle formed by the space diagonal, the base diagonal and a vertical edge.',
      questionSectionTitle: '3D Trig – Diagonal AG / Base Angle: Questions & Answers',
      questionSectionDescription:
        'Find the base diagonal with Pythagoras, then use tan θ = height ÷ base diagonal. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    '3d-trig-pyramid-edge-to-plane-angle': {
      metaTitle: 'Angle Between Edge and Base: Pyramid | IB AA SL',
      metaDescription:
        'Find the angle between an edge and the base of a pyramid in IB Maths AA SL for right pyramids with rectangular bases.',
      title: 'IB Maths AA SL 3D Trigonometry: Pyramid Edge and Base',
      description:
        'The angle between edge and base of a pyramid uses the triangle formed by the sloping edge, the height and half the base diagonal.',
      questionSectionTitle: '3D Trig – Pyramid Edge-to-Plane Angle: Questions & Answers',
      questionSectionDescription:
        'Find AO from the base dimensions, then use tan θ = OM ÷ AO. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    '3d-trig-triangular-pyramid-edge-to-plane': {
      metaTitle: 'Triangular Pyramid Questions | IB Maths AA SL',
      metaDescription:
        'Find the angle between an edge and the base of a triangular pyramid in IB Maths AA SL with an equilateral base and centroid O.',
      title: 'IB Maths AA SL 3D Trigonometry: Triangular Pyramid',
      description:
        'A right triangular pyramid has its vertex above the centroid of its base. These questions find the angle between a sloping edge and the base.',
      questionSectionTitle: '3D Trig – Triangular Pyramid Edge-to-Plane: Questions & Answers',
      questionSectionDescription:
        'Find the distance from a vertex of the base to the centroid, two thirds of the median, then use tan with the height. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'bearings-navigation-two-legs': {
      metaTitle: 'Bearings Questions | IB Maths AA SL',
      metaDescription:
        'Bearings in IB Maths AA SL: two-leg and three-leg journeys by drone, ship and bike, finding the distance and bearing back to the start.',
      title: 'IB Maths AA SL Bearings and Navigation',
      description:
        'Bearings are measured clockwise from north as three-figure angles. These bearings questions follow two-leg and three-leg journeys back to the start.',
      questionSectionTitle: 'Bearings & Navigation (Two Legs): Questions & Answers',
      questionSectionDescription:
        'Draw a north line at each turning point, find the angle inside the triangle, use the cosine rule for the distance and the sine rule for the bearing. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    '3d-trig-square-pyramid': {
      metaTitle: 'Square Pyramid Trigonometry | IB Maths AA SL',
      metaDescription:
        "Square pyramid trigonometry in IB Maths AA SL: angles in triangle ACE, slant heights and the angle between two faces' midpoints.",
      title: 'IB Maths AA SL 3D Trigonometry: Square Pyramid',
      description:
        'Square pyramid trigonometry picks out triangles inside the solid, such as the triangle through the vertex and a base diagonal.',
      questionSectionTitle: '3D Trig – Square Pyramid: Questions & Answers',
      questionSectionDescription:
        'Sketch each triangle on its own, find the pyramid slant height or diagonal with Pythagoras, then apply trigonometry or the cosine rule. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'angles-of-elevation-3d-shapes-cone': {
      metaTitle: 'Angle of Elevation of a Cone | IB Maths AA SL',
      metaDescription:
        'Find the angle of elevation of a cone, between its sloping edge and base, in IB Maths AA SL from the diameter and vertical height.',
      title: 'IB Maths AA SL Angle of Elevation: Cone',
      description:
        "The angle of elevation of a cone's sloping edge is the angle it makes with the base. Half the diameter and the height form a right-angled triangle.",
      questionSectionTitle: 'Angles of Elevation / 3D Shapes – Cone: Questions & Answers',
      questionSectionDescription:
        'Halve the diameter for the radius, then use tan θ = height ÷ radius. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'angles-of-depression': {
      metaTitle: 'Angle of Depression Questions | IB Maths AA SL',
      metaDescription:
        'Use an angle of depression in IB Maths AA SL to find the distance from a window to a car on the ground.',
      title: 'IB Maths AA SL Angles of Depression',
      description:
        'An angle of depression is measured down from the horizontal. It equals the angle of elevation from the ground back up, by alternate angles.',
      questionSectionTitle: 'Angles of Depression: Questions & Answers',
      questionSectionDescription:
        'Draw the horizontal from the observer, mark the angle of depression, and use tan with the known height. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'angles-of-elevation-two-observations': {
      metaTitle: 'Angle of Elevation Questions | IB Maths AA SL',
      metaDescription:
        "Angle of elevation questions for IB Maths AA SL with two observations: find a statue's height and the distance between two buoys.",
      title: 'IB Maths AA SL Angles of Elevation: Two Observations',
      description:
        'Two angle of elevation readings from different points give two triangles that share a height. These angle of elevation examples solve for that height.',
      questionSectionTitle: 'Angles of Elevation – Two Observations: Questions & Answers',
      questionSectionDescription:
        'Write the shared height in terms of each distance, set the expressions equal, and solve for the unknown length. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    '3d-trig-cuboid-from-face-diagonals': {
      metaTitle: 'Face Diagonal of a Cuboid | IB Maths AA SL',
      metaDescription:
        'Use the face diagonal of a cuboid in IB Maths AA SL: find the body diagonal and edges from three given face diagonals.',
      title: 'IB Maths AA SL Cuboid from Face Diagonals',
      description:
        'Each face diagonal of a cuboid links two edge lengths through Pythagoras. Three face diagonals give three equations to solve.',
      questionSectionTitle: '3D Trig – Cuboid from Face Diagonals: Questions & Answers',
      questionSectionDescription:
        'Write each face diagonal as a sum of two squared edges, add the equations to find the body diagonal, then solve for each edge. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    '3d-trig-angle-between-space-diagonals': {
      metaTitle: 'Angle Between Space Diagonals | IB Maths AA SL',
      metaDescription:
        'Find the angle between two space diagonals of a cuboid in IB Maths AA SL; the same method works for the diagonals of a cube.',
      title: 'IB Maths AA SL Angle Between Space Diagonals',
      description:
        'Two space diagonals cross at the centre of a cuboid. The method matches the angle between diagonals of a cube, with different edge lengths.',
      questionSectionTitle: '3D Trig – Angle Between Space Diagonals: Questions & Answers',
      questionSectionDescription:
        'Find the length of a space diagonal, halve it, and use the cosine rule in the triangle formed at the centre. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    '3d-trigonometry-pyramid-real-world': {
      metaTitle: 'Pyramid Trigonometry in Real Life | IB AA SL',
      metaDescription:
        'Pyramid trigonometry in real life for IB Maths AA SL: the Great Pyramid of Giza and the Louvre pyramid in Paris.',
      title: 'IB Maths AA SL 3D Trigonometry: Real-World Pyramids',
      description:
        'Pyramid trigonometry in real life uses the same triangles as textbook pyramids. These questions measure the Great Pyramid of Giza and the Louvre pyramid.',
      questionSectionTitle: '3D Trigonometry – Pyramid (Real World): Questions & Answers',
      questionSectionDescription:
        'Find the half-diagonal of the square base, use the given angle or height, and answer each part in the units of the context. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    'angles-of-elevation-art-gallery': {
      metaTitle: 'Angle of Elevation: Real-Life Examples | AA SL',
      metaDescription:
        'Angle of elevation real-life examples for IB Maths AA SL: the height of a painting in a gallery and a tree seen from two places.',
      title: 'IB Maths AA SL Angle of Elevation: Real-Life Examples',
      description:
        'These real-life examples of angles of elevation use a painting on a gallery wall and a tree seen from the ground and from a window.',
      questionSectionTitle: 'Angles of Elevation – Art Gallery: Questions & Answers',
      questionSectionDescription:
        'Draw each right-angled triangle separately, find heights with tan, and subtract or add them as the context requires. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.',
    },
    '3d-geometry-triangular-prism-roof': {
      metaTitle: 'Triangular Prism: Roof Questions | IB AA SL',
      metaDescription:
        'Use a triangular prism in IB Maths AA SL to model a roof: check the angle of elevation against building rules and find its volume.',
      title: 'IB Maths AA SL 3D Geometry: Triangular Prism Roof',
      description:
        'A pitched roof is a triangular prism sitting on top of a building. This question checks its angle against building regulations.',
      questionSectionTitle: '3D Geometry – Triangular Prism Roof: Questions & Answers',
      questionSectionDescription:
        "Find the roof's height with trigonometry, compare the angle with the 35° limit, and find the volume as cross-section area × length. Questions follow syllabus section SL 3.2, SL 3.3. Every question comes with the mark scheme working.",
    },
  },
  'trigonometric-functions': {
    'tangent-function-horizontal-shift': {
      metaTitle: 'Tan Graph Transformations | IB Maths AA SL',
      metaDescription:
        'Tan graph transformations in IB Maths AA SL: sketch horizontal shifts of y = tan x in radians and degrees, with asymptotes and intercepts.',
      title: 'IB Maths AA SL Tangent Function: Horizontal Shift',
      description:
        'Tan graph transformations move the asymptotes as well as the curve. These questions sketch horizontal shifts of y = tan x and label every asymptote and intercept.',
      questionSectionTitle: 'Tangent Function – Horizontal Shift: Questions & Answers',
      questionSectionDescription:
        'Shift each asymptote and x-intercept of y = tan x by the same amount, then sketch the repeating branches over the given domain. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'tangent-function-period-change': {
      metaTitle: 'Period of Tan Function | IB Maths AA SL',
      metaDescription:
        'Find the period of the tan function y = tan bx in IB Maths AA SL and sketch it with asymptotes and intercepts.',
      title: 'IB Maths AA SL Tangent Function: Period Change',
      description:
        'The period of the tan function y = tan bx is π ÷ b. A larger b squeezes the branches closer together.',
      questionSectionTitle: 'Tangent Function – Period Change: Questions & Answers',
      questionSectionDescription:
        'Find the new period, place asymptotes half a period either side of each x-intercept, and sketch over the domain given. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'transformed-cosine-amplitude-period-phase': {
      metaTitle: 'Amplitude and Period Questions | IB Maths AA SL',
      metaDescription:
        'Find the amplitude and period of transformed sine and cosine functions in IB Maths AA SL, locate the maximum point and sketch the graph.',
      title: 'IB Maths AA SL Amplitude, Period and Phase Shift',
      description:
        'The amplitude and period of a·sin(b(x + c)) + d come from a and b; c shifts the graph sideways and d moves it up or down.',
      questionSectionTitle: 'Transformed Cosine – Amplitude, Period, Phase: Questions & Answers',
      questionSectionDescription:
        'Read a for the amplitude, use 2π ÷ b for the period, find the maximum point from the shift, then sketch one full cycle and repeat. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'transformed-sine-vertical-reflection-and-shift': {
      metaTitle: 'Sine Graph Transformations | IB Maths AA SL',
      metaDescription:
        'Sine graph transformations in IB Maths AA SL: vertical reflections and shifts such as 2 − 3sin(x + π), with the maximum point and sketch.',
      title: 'IB Maths AA SL Transformed Sine: Reflection and Shift',
      description:
        'Sine graph transformations with a negative coefficient reflect the curve vertically. These questions combine that with vertical and horizontal shifts.',
      questionSectionTitle: 'Transformed Sine – Vertical Reflection and Shift: Questions & Answers',
      questionSectionDescription:
        'Identify the amplitude, period and shifts, account for the reflection when finding the maximum, and sketch over the given domain. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'finding-constants-from-graph-asin-bx-d': {
      metaTitle: 'Finding the Equation of a Sine Graph | IB AA SL',
      metaDescription:
        'Finding the equation of a sine graph or cosine graph in IB Maths AA SL: the constants a, b, c and d from maximum and minimum points.',
      title: 'IB Maths AA SL Finding Constants from a Trig Graph',
      description:
        'Finding the equation of a sine graph means reading its features: the amplitude, the period, the shift and the centre line. Cosine graphs follow the same steps.',
      questionSectionTitle: 'Finding Constants from Graph – asin(bx)+d: Questions & Answers',
      questionSectionDescription:
        'Halve the distance between maximum and minimum for a, average them for d, use the period for b, and find c from the position of a maximum. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'period-of-trigonometric-function': {
      metaTitle: 'How to Find the Period of a Function | IB AA SL',
      metaDescription:
        'Learn how to find the period of a function in IB Maths AA SL, such as 3 sin 4x in radians, in exact form.',
      title: 'IB Maths AA SL Period of a Trigonometric Function',
      description:
        'This question shows how to find the period of a function such as 3 sin 4x: the amplitude does not change it, but the coefficient of x does.',
      questionSectionTitle: 'Period of Trigonometric Function: Questions & Answers',
      questionSectionDescription:
        'Divide 2π by the coefficient of x and leave the answer exact. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'tangent-function-finding-period-multiplier-from-graph': {
      metaTitle: 'Tan Graph: Finding the Period | IB Maths AA SL',
      metaDescription:
        'Use a tan graph in IB Maths AA SL to find b in y = 4 tan bx from the spacing of its asymptotes and intercepts.',
      title: 'IB Maths AA SL Tangent Function: Finding b from a Graph',
      description:
        'The spacing of asymptotes on a tan graph gives its period, and the period gives b. This question works back from the graph to the equation.',
      questionSectionTitle:
        'Tangent Function – Finding Period Multiplier from Graph: Questions & Answers',
      questionSectionDescription:
        'Measure the distance between neighbouring asymptotes, set it equal to π ÷ b, and solve for b. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'sketching-two-trig-functions-on-same-axes': {
      metaTitle: 'Sketching Trig Graphs | IB Maths AA SL',
      metaDescription:
        'Practise sketching trig graphs in IB Maths AA SL: y = cos 2x and y = 3 sin x on the same axes over 0 to 2π.',
      title: 'IB Maths AA SL Sketching Two Trig Functions',
      description:
        'Sketching trig graphs on the same axes sets up questions about their intersections. Both curves need the right period and amplitude.',
      questionSectionTitle: 'Sketching Two Trig Functions on Same Axes: Questions & Answers',
      questionSectionDescription:
        'Mark key points for each curve at quarter-period intervals, then draw both smoothly over the full domain. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'number-of-solutions-from-graph': {
      metaTitle: 'Number of Solutions of a Trig Equation | AA SL',
      metaDescription:
        'Find the number of solutions of a trig equation in IB Maths AA SL from a graph, including over an extended domain.',
      title: 'IB Maths AA SL Number of Solutions from a Graph',
      description:
        'The number of solutions of a trig equation equals the number of times its two graphs intersect over the given domain.',
      questionSectionTitle: 'Number of Solutions from Graph: Questions & Answers',
      questionSectionDescription:
        'Count the intersections in one period, then use the period to extend the count to a wider domain. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'period-of-sum-of-trig-functions': {
      metaTitle: 'Period of a Sum of Trig Functions | IB AA SL',
      metaDescription:
        'Find the period of a sum of trig functions in IB Maths AA SL, such as 2 sin 2x + 3 sin 6x, using the lowest common multiple.',
      title: 'IB Maths AA SL Period of a Sum of Trigonometric Functions',
      description:
        'The period of a sum of trig functions is the lowest common multiple of the separate periods.',
      questionSectionTitle: 'Period of Sum of Trig Functions: Questions & Answers',
      questionSectionDescription:
        'Find each period on its own, then find the smallest value that is a multiple of both. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'rational-trigonometric-function-asymptotes': {
      metaTitle: 'Asymptotes of Trigonometric Functions | AA SL',
      metaDescription:
        'Find the asymptotes of trigonometric functions in IB Maths AA SL: decide whether 3 ÷ (7 + 3 sin 2x) has any by checking its denominator.',
      title: 'IB Maths AA SL Rational Trigonometric Function: Asymptotes',
      description:
        'Asymptotes of trigonometric functions such as 3 ÷ (7 + 3 sin 2x) appear only where the denominator is zero. This question checks whether that can happen.',
      questionSectionTitle: 'Rational Trigonometric Function – Asymptotes: Questions & Answers',
      questionSectionDescription:
        'Find the range of the denominator using −1 ≤ sin 2x ≤ 1 and justify whether it can equal zero. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
    'rational-trigonometric-function-maximum-value': {
      metaTitle: 'Maximum Value of a Trig Function | IB AA SL',
      metaDescription:
        'Find the maximum value of a trig function in IB Maths AA SL, 3 ÷ (7 + 3 sin 2x), and the first x where it occurs.',
      title: 'IB Maths AA SL Rational Trigonometric Function: Maximum Value',
      description:
        'The maximum value of a trig function in a fraction comes when the denominator is smallest.',
      questionSectionTitle: 'Rational Trigonometric Function – Maximum Value: Questions & Answers',
      questionSectionDescription:
        'Find the minimum of the denominator, divide to get the maximum value, and solve sin 2x = −1 for the first positive x. Questions follow syllabus section SL 3.7. Every question comes with the mark scheme working.',
    },
  },
  statistics: {
    'scatter-diagrams': {
      metaTitle: 'Scatter Diagram Questions | IB Maths AA SL',
      metaDescription:
        'Draw a scatter diagram in IB Maths AA SL, plot the mean point and add a line of best fit by eye through it.',
      title: 'IB Maths AA SL Scatter Diagrams',
      description:
        'A scatter diagram shows whether two variables are related. These questions plot the data, the mean point and a line of best fit.',
      questionSectionTitle: 'Scatter Diagrams: Questions & Answers',
      questionSectionDescription:
        'Plot each pair on the scatter graph, calculate the mean of x and of y, mark that point, and draw the line of best fit through it. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'describing-correlation': {
      metaTitle: 'Types of Correlation Questions | IB Maths AA SL',
      metaDescription:
        'Describe the types of correlation in IB Maths AA SL scatter graphs: positive or negative, and strong, moderate or weak.',
      title: 'IB Maths AA SL Describing Correlation',
      description:
        'Describing a scatter graph means naming both the direction and the strength. These questions practise the types of correlation the IB expects.',
      questionSectionTitle: 'Describing Correlation: Questions & Answers',
      questionSectionDescription:
        'State whether the correlation is positive, negative or none, then whether it is strong, moderate or weak, using the spread of points. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'pearsons-pmcc': {
      metaTitle: 'Pearson Correlation Coefficient | IB AA SL',
      metaDescription:
        'Find the Pearson correlation coefficient in IB Maths AA SL with technology and interpret it, including car age and value data.',
      title: "IB Maths AA SL Pearson's Product-Moment Correlation Coefficient",
      description:
        'The Pearson correlation coefficient, r, measures the strength of a linear relationship on a scale from −1 to 1. These questions calculate and interpret it.',
      questionSectionTitle: "Pearson's PMCC: Questions & Answers",
      questionSectionDescription:
        "Enter the data on your GDC to find Pearson's correlation coefficient, then interpret the PMCC in words: its sign for direction and its size for strength. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.",
    },
    'regression-line': {
      metaTitle: 'Regression Line Questions | IB Maths AA SL',
      metaDescription:
        'Find the equation of the regression line of y on x in IB Maths AA SL from raw data, using technology.',
      title: 'IB Maths AA SL Regression Line of y on x',
      description:
        'The regression line of y on x is the line of best fit that predicts y from x. These questions find its equation from data.',
      questionSectionTitle: 'Regression Line: Questions & Answers',
      questionSectionDescription:
        'Enter both lists on your GDC, run linear regression, and write the regression line equation as y = ax + b to three significant figures. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'predictions-and-reliability': {
      metaTitle: 'Interpolation and Extrapolation | IB AA SL',
      metaDescription:
        'Predict with a regression line in IB Maths AA SL and judge reliability: interpolation and extrapolation, and the strength of r.',
      title: 'IB Maths AA SL Predictions and Reliability',
      description:
        'A regression prediction is reliable only when the correlation is strong and the value sits inside the data range. These questions practise interpolation and extrapolation.',
      questionSectionTitle: 'Predictions and Reliability: Questions & Answers',
      questionSectionDescription:
        'Substitute into the correct regression line, then comment on reliability using r and whether the value lies within the data range. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'correlation-and-regression': {
      metaTitle: 'Correlation and Regression Questions | IB AA SL',
      metaDescription:
        'Correlation and regression in IB Maths AA SL: plot data, describe the correlation, find PMCC and the regression line, and predict.',
      title: 'IB Maths AA SL Correlation and Regression',
      description:
        'These correlation and regression questions follow the full process: plot the data, describe the pattern, calculate r and find the regression line.',
      questionSectionTitle: 'Correlation and Regression: Questions & Answers',
      questionSectionDescription:
        'Work through each part in order. The answer to one part, such as the value of r, decides how reliable a later prediction is. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'regression-interpretation': {
      metaTitle: 'Interpreting a Regression Line | IB Maths AA SL',
      metaDescription:
        'Practise interpreting a regression line in IB Maths AA SL: what the gradient and intercept mean for advertising budget and profit.',
      title: 'IB Maths AA SL Interpreting a Regression Line',
      description:
        'Interpreting a regression line means explaining its gradient and intercept in the context of the data, with units.',
      questionSectionTitle: 'Regression / Interpretation: Questions & Answers',
      questionSectionDescription:
        'Describe the gradient as the change in y for each unit increase in x, and say whether the intercept makes sense in context. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'regression-two-regions': {
      metaTitle: 'Piecewise Regression Questions | IB Maths AA SL',
      metaDescription:
        'Piecewise regression in IB Maths AA SL: spot two clusters in a scatter diagram and fit a separate regression line to each region.',
      title: 'IB Maths AA SL Regression with Two Regions',
      description:
        'Some data sets contain two groups, such as children and adults. Piecewise regression fits a separate line to each group.',
      questionSectionTitle: 'Regression / Two Regions: Questions & Answers',
      questionSectionDescription:
        'Plot the data, identify where the pattern changes, split the data there, and find a regression line for each part. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'regression-line-of-x-on-y': {
      metaTitle: 'Regression Line of x on y | IB Maths AA SL',
      metaDescription:
        'Find the regression line of x on y in IB Maths AA SL and use it to estimate x from a known value of y.',
      title: 'IB Maths AA SL Regression Line of x on y',
      description:
        'To predict x from y, use the regression line of x on y, not the y-on-x line. These questions find it and use it to estimate.',
      questionSectionTitle: 'Regression line of x on y: Questions & Answers',
      questionSectionDescription:
        'For x on y regression, enter y as the independent list on your GDC, find the line, then substitute the known y value. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'regression-line-selection-prediction-reliability': {
      metaTitle: 'Regression Line y on x or x on y? | IB AA SL',
      metaDescription:
        'Choose between the regression line y on x and x on y in IB Maths AA SL, then predict and judge the reliability.',
      title: 'IB Maths AA SL Selecting the Appropriate Regression Line',
      description:
        'The variable you know decides the line you use. These questions choose between the regression line y on x and the x-on-y line, then predict.',
      questionSectionTitle:
        'Regression line selection; prediction; reliability: Questions & Answers',
      questionSectionDescription:
        'Identify which variable is given, use that line, and justify your choice and the reliability of the prediction. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'mean-values-from-regression-lines': {
      metaTitle: 'Regression Lines Intersect at the Mean | AA SL',
      metaDescription:
        'Find the mean values from two regression lines in IB Maths AA SL, using the fact that regression lines intersect at the mean point.',
      title: 'IB Maths AA SL Mean Values from Regression Lines',
      description:
        'Both regression lines pass through (x̄, ȳ), so regression lines intersect at the mean point. Solving them simultaneously gives both means.',
      questionSectionTitle: 'Mean values from regression lines: Questions & Answers',
      questionSectionDescription:
        'Solve the y-on-x and x-on-y equations simultaneously and interpret the solution as the two means. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'interpreting-r2-and-deducing-r': {
      metaTitle: 'r Squared Questions | IB Maths AA SL',
      metaDescription:
        "Interpret r squared in IB Maths AA SL and deduce the value of r from r² and the sign of the regression line's gradient.",
      title: 'IB Maths AA SL Interpreting r² and Deducing r',
      description:
        'r squared tells you how well the regression line fits the data. Its square root gives r, with the sign taken from the gradient.',
      questionSectionTitle: 'Interpreting r² and deducing r: Questions & Answers',
      questionSectionDescription:
        'State what the coefficient of determination r squared means in context, take the square root, and choose the sign that matches the gradient. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'deriving-x-on-y-regression-line-from-y-on-x-line-when-r-1': {
      metaTitle: 'Perfect Correlation: Regression Lines | AA SL',
      metaDescription:
        'Perfect correlation regression in IB Maths AA SL: when r = ±1, rearrange the y-on-x line to get the x-on-y regression line.',
      title: 'IB Maths AA SL Regression Lines When r = ±1',
      description:
        'With perfect correlation, regression lines coincide: every point lies on one line. The x-on-y line is the y-on-x line rearranged.',
      questionSectionTitle:
        'Deriving x-on-y regression line from y-on-x line when r = ±1: Questions & Answers',
      questionSectionDescription:
        'Make x the subject of the y-on-x equation and explain why this works only when r = ±1. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'interpreting-gradient-of-regression-line-estimation': {
      metaTitle: 'Slope of a Regression Line | IB Maths AA SL',
      metaDescription:
        "Interpret the slope of a regression line in IB Maths AA SL as a rate, using a snail's distance over time, and estimate from it.",
      title: 'IB Maths AA SL Interpreting the Gradient of a Regression Line',
      description:
        "The slope of a regression line is a rate of change. Here it gives the snail's average speed in centimetres per minute.",
      questionSectionTitle:
        'Interpreting gradient of regression line; estimation: Questions & Answers',
      questionSectionDescription:
        'State the gradient with units in the context of the question, then substitute to estimate the value required. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'changing-units-in-regression-equations': {
      metaTitle: 'Regression Change of Units | IB Maths AA SL',
      metaDescription:
        'Regression change of units in IB Maths AA SL: rewrite a regression line in centimetres and minutes for metres or seconds.',
      title: 'IB Maths AA SL Regression: Change of Units',
      description:
        'Changing the units in a regression rescales the variables, so the gradient and intercept change while the relationship stays the same.',
      questionSectionTitle: 'Changing units in regression equations: Questions & Answers',
      questionSectionDescription:
        'Write the old variable in terms of the new one, substitute into the equation, and simplify. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
    'correlation-coefficient-invariance-under-linear-scaling': {
      metaTitle: 'Correlation Coefficient Properties | IB AA SL',
      metaDescription:
        'Correlation coefficient properties in IB Maths AA SL: why r stays the same when the data is rescaled to new units.',
      title: 'IB Maths AA SL Correlation Coefficient Under Linear Scaling',
      description:
        'One of the key correlation coefficient properties: r does not change when the data is multiplied by a positive constant or shifted.',
      questionSectionTitle:
        'Correlation coefficient invariance under linear scaling: Questions & Answers',
      questionSectionDescription:
        'Explain why scaling and shifting do not affect the strength or direction of a linear relationship, and state the value of r. Questions follow syllabus section SL 4.10, SL 4.4. Every question comes with the mark scheme working.',
    },
  },
  probability: {
    'experimental-probability': {
      metaTitle: 'Relative Frequency Questions | IB Maths AA SL',
      metaDescription:
        'Estimate probability from relative frequency in IB Maths AA SL using samples of children, flowers and rolls of a biased dice.',
      title: 'IB Maths AA SL Experimental Probability',
      description:
        'Relative frequency estimates a probability from data: the number of times an event happened divided by the number of trials.',
      questionSectionTitle: 'Experimental Probability: Questions & Answers',
      questionSectionDescription:
        'Experimental probability always comes from data. Divide the frequency of the event by the total number of trials and simplify. Questions follow syllabus section SL 4.5. Every question comes with the mark scheme working.',
    },
    'theoretical-probability': {
      metaTitle: 'Theoretical Probability Questions | IB AA SL',
      metaDescription:
        'Theoretical probability in IB Maths AA SL: dice, cards and other equally likely outcomes, counted and written as fractions.',
      title: 'IB Maths AA SL Theoretical Probability',
      description:
        'Theoretical probability counts equally likely outcomes rather than collecting data. These questions use dice and a standard pack of cards.',
      questionSectionTitle: 'Theoretical Probability: Questions & Answers',
      questionSectionDescription:
        'Count the outcomes that satisfy the event, divide by the total number of equally likely outcomes, and simplify. Questions follow syllabus section SL 4.5. Every question comes with the mark scheme working.',
    },
    'complementary-probability': {
      metaTitle: 'Complementary Events Questions | IB Maths AA SL',
      metaDescription:
        "Complementary events in IB Maths AA SL: use P(A′) = 1 − P(A) to find 'at least one' and 'not' probabilities.",
      title: 'IB Maths AA SL Complementary Probability',
      description:
        "Complementary events cover every outcome between them, so their probabilities add to 1. 'At least one' questions are often fastest this way.",
      questionSectionTitle: 'Complementary Probability: Questions & Answers',
      questionSectionDescription:
        'Identify the complement of the event, find its probability, and subtract from 1. Questions follow syllabus section SL 4.5. Every question comes with the mark scheme working.',
    },
    'expected-value': {
      metaTitle: 'Expected Value Questions | IB Maths AA SL',
      metaDescription:
        'Expected value in IB Maths AA SL: expected numbers from n × p, and E(X) from a probability distribution built from a tree diagram.',
      title: 'IB Maths AA SL Expected Value',
      description:
        'Expected value is the long-run average outcome. These questions find expected numbers of successes and the expected value of a discrete random variable.',
      questionSectionTitle: 'Expected Value: Questions & Answers',
      questionSectionDescription:
        'For repeated trials use np. For a distribution, apply the expected value formula E(X) = Σ x P(X = x). Questions follow syllabus section SL 4.5, SL 4.7. Every question comes with the mark scheme working.',
    },
    'experimental-expected-value': {
      metaTitle: 'Expected Frequency Questions | IB Maths AA SL',
      metaDescription:
        'Find expected frequency in IB Maths AA SL from an estimated probability: side-effects in a clinical trial applied to a larger group.',
      title: 'IB Maths AA SL Experimental Probability and Expected Value',
      description:
        'Expected frequency multiplies a probability by the number of trials. Here the probability itself is estimated from a clinical trial.',
      questionSectionTitle: 'Experimental & Expected Value: Questions & Answers',
      questionSectionDescription:
        'Estimate the probability with relative frequency, then multiply by the new number of people. Questions follow syllabus section SL 4.5. Every question comes with the mark scheme working.',
    },
    'theoretical-expected-value': {
      metaTitle: 'Expected Outcomes in Probability | IB AA SL',
      metaDescription:
        'Estimate expected outcomes in probability for IB Maths AA SL: how often an eight-sided dice with repeated numbers lands on 2.',
      title: 'IB Maths AA SL Theoretical Probability and Expected Value',
      description:
        'Expected outcomes in probability come from a theoretical probability multiplied by the number of trials.',
      questionSectionTitle: 'Theoretical & Expected Value: Questions & Answers',
      questionSectionDescription:
        'Count the faces showing 2, find the probability, and multiply by the number of rolls. Questions follow syllabus section SL 4.5. Every question comes with the mark scheme working.',
    },
    'forming-solving-equations': {
      metaTitle: 'Probability Equations Questions | IB AA SL',
      metaDescription:
        'Form and solve probability equations in IB Maths AA SL: find the number of sides on a dice and probabilities on a biased dice.',
      title: 'IB Maths AA SL Forming and Solving Probability Equations',
      description:
        'Probability equations come from a condition in the question, such as an expected number of outcomes. Writing that condition algebraically gives an equation.',
      questionSectionTitle: 'Forming & Solving Equations: Questions & Answers',
      questionSectionDescription:
        'Let the unknown be a letter, write the expected number or total probability in terms of it, and solve. Questions follow syllabus section SL 4.5. Every question comes with the mark scheme working.',
    },
    'odds-probability': {
      metaTitle: 'Odds and Probability Questions | IB Maths AA SL',
      metaDescription:
        'Convert between odds and probability in IB Maths AA SL using p ÷ (1 − p), and find probabilities from ratios of coloured balls.',
      title: 'IB Maths AA SL Odds, Ratio and Probability',
      description:
        'Odds and probability measure the same thing in different ways. Odds compare an event happening with it not happening.',
      questionSectionTitle: 'Odds & Probability: Questions & Answers',
      questionSectionDescription:
        'Use odds = p ÷ (1 − p) and rearrange it to find p. For ratios, write every count in terms of one variable before finding the probability. Questions follow syllabus section SL 4.5. Every question comes with the mark scheme working.',
    },
    'monte-carlo-estimation': {
      metaTitle: 'Monte Carlo Simulation Questions | IB AA SL',
      metaDescription:
        'Use a Monte Carlo simulation in IB Maths AA SL to estimate π from random points in a square and a quarter circle.',
      title: 'IB Maths AA SL Monte Carlo Estimation',
      description:
        'A Monte Carlo simulation estimates a value by running many random trials. This question estimates π from random points inside a square.',
      questionSectionTitle: 'Monte Carlo / Estimation: Questions & Answers',
      questionSectionDescription:
        "The Monte Carlo method links the proportion of points that land in a region to that region's area. Set up the ratio and solve for π. Questions follow syllabus section SL 4.5. Every question comes with the mark scheme working.",
    },
    'venn-diagrams': {
      metaTitle: 'Venn Diagram Questions | IB Maths AA SL',
      metaDescription:
        'Venn diagram probability in IB Maths AA SL: languages, fruit and sports, filled in from the overlap outwards.',
      title: 'IB Maths AA SL Venn Diagrams',
      description:
        'A Venn diagram sorts a group into overlapping categories. These questions fill one in from given totals and find probabilities.',
      questionSectionTitle: 'Venn Diagrams: Questions & Answers',
      questionSectionDescription:
        'These venn diagram questions all start with the overlap. Fill it in first, then each remaining region, then the outside, and check the total. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'venn-diagrams-probability-notation': {
      metaTitle: 'Set Notation Probability | IB Maths AA SL',
      metaDescription:
        'Set notation probability in IB Maths AA SL: P(A ∩ B), P(A ∪ B) and P(A′) on Venn diagrams for subjects and instruments.',
      title: 'IB Maths AA SL Venn Diagrams: Probability Notation',
      description:
        "Set notation probability uses ∩ for 'and', ∪ for 'or' and ′ for 'not'. These questions read each region of a Venn diagram in that notation.",
      questionSectionTitle: 'Venn Diagrams (probability notation): Questions & Answers',
      questionSectionDescription:
        'Draw the Venn diagram with probabilities, then match each expression to the region or regions it describes. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'tree-diagrams': {
      metaTitle: 'Tree Diagram Questions | IB Maths AA SL',
      metaDescription:
        "Tree diagrams in IB Maths AA SL: two-stage events such as travel and lateness, plus a football league's expected wins.",
      title: 'IB Maths AA SL Tree Diagrams',
      description:
        'A tree diagram shows each stage of an experiment as a set of branches. Multiply along branches and add between them.',
      questionSectionTitle: 'Tree Diagrams: Questions & Answers',
      questionSectionDescription:
        'Label each probability tree diagram branch, check that each set of branches adds to 1, multiply along paths, and add the paths that satisfy the event. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'tree-diagrams-without-replacement': {
      metaTitle: 'Probability Without Replacement | IB AA SL',
      metaDescription:
        'Probability without replacement in IB Maths AA SL: draw two balls from a bag and use a tree diagram with changing probabilities.',
      title: 'IB Maths AA SL Tree Diagrams: Without Replacement',
      description:
        'In probability without replacement, the second draw depends on the first, because one item has gone.',
      questionSectionTitle: 'Tree Diagrams / Without Replacement: Questions & Answers',
      questionSectionDescription:
        'Reduce both the numerator and the total on the second branch, multiply along each path, and add the paths you need. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'sample-space-diagrams': {
      metaTitle: 'Sample Space Questions | IB Maths AA SL',
      metaDescription:
        'Use a sample space diagram in IB Maths AA SL to list every outcome of two dice or two coins and find probabilities.',
      title: 'IB Maths AA SL Sample Space Diagrams',
      description:
        'A sample space lists every possible outcome. For two dice, a 6 × 6 grid shows all 36 equally likely results.',
      questionSectionTitle: 'Sample Space Diagrams: Questions & Answers',
      questionSectionDescription:
        'Draw the sample space diagram, highlight the outcomes that fit the event, and divide by the total. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'sample-space-diagrams-arrangements': {
      metaTitle: 'Arrangements and Probability | IB Maths AA SL',
      metaDescription:
        'Arrangements and probability in IB Maths AA SL: list every arrangement of four letters in a sample space, then find probabilities.',
      title: 'IB Maths AA SL Sample Space Diagrams: Arrangements',
      description:
        'Arrangements and probability go together: list every arrangement of four letters systematically, then count the ones that fit the event.',
      questionSectionTitle: 'Sample Space Diagrams / Arrangements: Questions & Answers',
      questionSectionDescription:
        'List the arrangements in a fixed order so none is missed, count those that satisfy the condition, and divide by the total. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'two-way-tables': {
      metaTitle: 'Two-Way Table Questions | IB Maths AA SL',
      metaDescription:
        'Two-way table probability in IB Maths AA SL: subjects, favourite colours and hair and eye colour, read from row and column totals.',
      title: 'IB Maths AA SL Two-Way Tables',
      description:
        'A two-way table organises data by two categories at once. These questions read probabilities from its cells and totals.',
      questionSectionTitle: 'Two-Way Tables: Questions & Answers',
      questionSectionDescription:
        'For two-way table probability, find the cell for the event and divide by the correct total: the grand total, or a row or column total. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'mutually-exclusive-events': {
      metaTitle: 'Mutually Exclusive Events | IB Maths AA SL',
      metaDescription:
        'Mutually exclusive events in IB Maths AA SL: use P(A ∪ B) = P(A) + P(B) to find unknown probabilities.',
      title: 'IB Maths AA SL Mutually Exclusive Events',
      description:
        'Mutually exclusive events cannot happen together, so P(A ∩ B) = 0 and their probabilities add directly.',
      questionSectionTitle: 'Mutually Exclusive Events: Questions & Answers',
      questionSectionDescription:
        'Write P(A ∪ B) = P(A) + P(B), substitute what you know, and solve for the missing probability. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'conditional-probability': {
      metaTitle: 'Conditional Probability Questions | IB AA SL',
      metaDescription:
        'Conditional probability in IB Maths AA SL: counters, cards and distributions with an unknown k, using P(A | B).',
      title: 'IB Maths AA SL Conditional Probability',
      description:
        'Conditional probability is the chance of an event given that another has already happened. It narrows the sample space.',
      questionSectionTitle: 'Conditional Probability: Questions & Answers',
      questionSectionDescription:
        'Apply the conditional probability formula P(A | B) = P(A ∩ B) ÷ P(B), or reduce the sample space directly when items are removed. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'conditional-probability-two-way-tables': {
      metaTitle: 'Conditional Probability: Two-Way Tables | AA SL',
      metaDescription:
        'Conditional probability from a two-way table in IB Maths AA SL: restrict to one row or column, then find the probability.',
      title: 'IB Maths AA SL Conditional Probability with Two-Way Tables',
      description:
        'Conditional probability from a two-way table is a matter of choosing the right total: the given condition picks the row or column.',
      questionSectionTitle: 'Conditional Probability / Two-Way Tables: Questions & Answers',
      questionSectionDescription:
        'Find the row or column for the condition, then divide the relevant cell by that row or column total. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'conditional-probability-venn-diagrams': {
      metaTitle: 'Conditional Probability Venn Diagram | IB AA SL',
      metaDescription:
        'Use a conditional probability Venn diagram in IB Maths AA SL, with two and three sets, to find P(A | B) from given totals.',
      title: 'IB Maths AA SL Conditional Probability with Venn Diagrams',
      description:
        'A conditional probability Venn diagram restricts attention to one circle. These questions use two-set and three-set diagrams.',
      questionSectionTitle: 'Conditional Probability / Venn Diagrams: Questions & Answers',
      questionSectionDescription:
        "Complete the diagram, identify the region for the condition, and divide the overlap you need by that region's total. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.",
    },
    'independent-events': {
      metaTitle: 'Independent Events Questions | IB Maths AA SL',
      metaDescription:
        'Independent events in IB Maths AA SL: multiply probabilities with P(A ∩ B) = P(A)P(B), including rain on several days.',
      title: 'IB Maths AA SL Independent Events',
      description:
        'Independent events do not affect each other, so the probability of both is the product of their probabilities.',
      questionSectionTitle: 'Independent Events: Questions & Answers',
      questionSectionDescription:
        "For independent events probability, multiply for 'and', use P(A ∪ B) = P(A) + P(B) − P(A)P(B) for 'or', and use the complement for 'at least one'. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.",
    },
    'sample-space-diagrams-expected-value': {
      metaTitle: 'Dice Probability Questions | IB Maths AA SL',
      metaDescription:
        'Dice probability in IB Maths AA SL: a sample space of products of two dice, then the expected score of a game.',
      title: 'IB Maths AA SL Sample Space and Expected Value',
      description:
        'This dice probability question builds a sample space of the products of two dice, then uses it for an expected value.',
      questionSectionTitle: 'Sample Space Diagrams / Expected Value: Questions & Answers',
      questionSectionDescription:
        'Fill in the 6 × 6 grid of products, find the probability of each score, and use E(X) = Σ x P(X = x). Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'conditional-probability-independence': {
      metaTitle: 'Independent and Dependent Events | IB AA SL',
      metaDescription:
        'Test independent and dependent events in IB Maths AA SL using conditional probability from a punctuality and weather table.',
      title: 'IB Maths AA SL Conditional Probability and Independence',
      description:
        'Two events are independent when P(A | B) = P(A). These questions compare the two to decide between independent and dependent events.',
      questionSectionTitle: 'Conditional Probability / Independence: Questions & Answers',
      questionSectionDescription:
        'Find each conditional probability from the table, compare it with the overall probability, and state your conclusion. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'conditional-probability-sample-space': {
      metaTitle: 'Conditional Probability: Sample Space | AA SL',
      metaDescription:
        'Conditional probability with a sample space in IB Maths AA SL: the two-children problem, where the wording of the condition changes the answer.',
      title: 'IB Maths AA SL Conditional Probability with a Sample Space',
      description:
        'This question shows how the wording of a condition changes the answer: list the sample space, then restrict it to the outcomes that meet the condition.',
      questionSectionTitle: 'Conditional Probability / Sample Space: Questions & Answers',
      questionSectionDescription:
        'List the equally likely outcomes, remove those that do not meet the condition, and count what remains. Questions follow syllabus section SL 4.11, SL 4.6. Every question comes with the mark scheme working.',
    },
    'discrete-probability-distributions': {
      metaTitle: 'Probability Distribution Questions | IB AA SL',
      metaDescription:
        'Find a discrete probability distribution in IB Maths AA SL, such as the number of blue counters drawn without replacement.',
      title: 'IB Maths AA SL Discrete Probability Distributions',
      description:
        'A probability distribution lists every value of a random variable with its probability. These questions build one from a draw or a coin toss.',
      questionSectionTitle: 'Discrete Probability Distributions: Questions & Answers',
      questionSectionDescription:
        'For each discrete probability distribution, list the possible values of X, find each probability with a tree diagram, and check they sum to 1. Questions follow syllabus section SL 4.7. Every question comes with the mark scheme working.',
    },
    'expected-value-finding-k': {
      metaTitle: 'Probability Distribution: Find k | IB AA SL',
      metaDescription:
        'Probability distribution questions where you find k in IB Maths AA SL, from a table or a formula, then find probabilities and E(X).',
      title: 'IB Maths AA SL Probability Distribution: Find k',
      description:
        'Every probability distribution sums to 1. These questions use that fact to find k, then the expected value.',
      questionSectionTitle: 'Expected Value / Finding k: Questions & Answers',
      questionSectionDescription:
        'Add every probability, set the total equal to 1, solve for k, then substitute back. Questions follow syllabus section SL 4.7. Every question comes with the mark scheme working.',
    },
    'fair-games-expected-value': {
      metaTitle: 'Fair Game Questions | IB Maths AA SL',
      metaDescription:
        'Decide whether a game is a fair game in IB Maths AA SL by finding the expected gain, and set the price that makes it fair.',
      title: 'IB Maths AA SL Fair Games and Expected Value',
      description:
        'A game is a fair game when the expected gain is zero. These questions find expected winnings and the stake that makes a game fair.',
      questionSectionTitle: 'Fair Games / Expected Value: Questions & Answers',
      questionSectionDescription:
        'Let X be the gain, list its values and probabilities, find E(X), and set it equal to zero to find a fair price. Questions follow syllabus section SL 4.7. Every question comes with the mark scheme working.',
    },
    'expected-value-simultaneous-equations': {
      metaTitle: 'Expected Value: Simultaneous Equations | AA SL',
      metaDescription:
        'Solve for two unknown probabilities in IB Maths AA SL with expected value simultaneous equations: the sum rule and E(X).',
      title: 'IB Maths AA SL Expected Value: Simultaneous Equations',
      description:
        'With two unknown probabilities, you need two equations: the probabilities sum to 1, and E(X) is given. Solving them together finds both unknowns.',
      questionSectionTitle: 'Expected Value / Simultaneous Equations: Questions & Answers',
      questionSectionDescription:
        'Write one equation from the total probability and one from E(X) = Σ x P(X = x), then solve them simultaneously. Questions follow syllabus section SL 4.7. Every question comes with the mark scheme working.',
    },
  },
  'statistics-normal-distribution': {
    'finding-probabilities-from-a-normal-distribution': {
      metaTitle: 'Normal Distribution Questions | IB Maths AA SL',
      metaDescription:
        'Find probabilities from a normal distribution in IB Maths AA SL with a GDC, from X ~ N(μ, σ²) to tree heights and battery life.',
      title: 'IB Maths AA SL Finding Probabilities from a Normal Distribution',
      description:
        'The normal distribution models continuous data that clusters around a mean. These questions find probabilities with technology.',
      questionSectionTitle: 'Finding probabilities from a normal distribution: Questions & Answers',
      questionSectionDescription:
        'These normal distribution questions start with a sketch and the shaded region. Use normalcdf with the correct bounds, and check whether the question gives the variance or the standard deviation. Questions follow syllabus section SL 4.12, SL 4.9. Every question comes with the mark scheme working.',
    },
    'inverse-normal-distribution-finding-x': {
      metaTitle: 'Inverse Normal Distribution | IB Maths AA SL',
      metaDescription:
        'Use the inverse normal distribution in IB Maths AA SL to find x from a probability, including contextual and lower-bound problems.',
      title: 'IB Maths AA SL Inverse Normal Distribution',
      description:
        'The inverse normal distribution works backwards: given a probability, it finds the value of x.',
      questionSectionTitle: 'Inverse normal distribution (finding x): Questions & Answers',
      questionSectionDescription:
        'Convert the probability to a left-tail area, use invNorm with the mean and standard deviation, and interpret x in context. Questions follow syllabus section SL 4.12, SL 4.9. Every question comes with the mark scheme working.',
    },
    'normal-distribution-model-suitability': {
      metaTitle: 'When to Use the Normal Distribution | IB AA SL',
      metaDescription:
        'Know when to use the normal distribution in IB Maths AA SL: judge box plots and summary statistics for symmetry and limits.',
      title: 'IB Maths AA SL Normal Distribution: Model Suitability',
      description:
        'Knowing when to use the normal distribution matters as much as using it. These questions judge whether data looks normal.',
      questionSectionTitle: 'Normal distribution – model suitability: Questions & Answers',
      questionSectionDescription:
        'Check for symmetry about the median, and check whether a normal model would predict impossible values such as negative scores. Questions follow syllabus section SL 4.12, SL 4.9. Every question comes with the mark scheme working.',
    },
    'normal-distribution-combined-with-expected-value-inverse': {
      metaTitle: 'Normal Distribution and Expected Value | AA SL',
      metaDescription:
        'Combine a normal distribution with expected value in IB Maths AA SL: race times, long jumps, egg sizes and screen time.',
      title: 'IB Maths AA SL Normal Distribution with Expected Value',
      description:
        'These questions find a probability from a normal distribution, then use it for an expected value: how many eggs, races or teenagers.',
      questionSectionTitle:
        'Normal distribution combined with expected value / inverse: Questions & Answers',
      questionSectionDescription:
        'Find each probability with technology, multiply by the number of trials or the income per item, and answer in context. Questions follow syllabus section SL 4.12, SL 4.9. Every question comes with the mark scheme working.',
    },
    'inverse-normal-distribution-qualifying-threshold': {
      metaTitle: 'Normal Distribution Cutoff | IB Maths AA SL',
      metaDescription:
        'Find a normal distribution cutoff in IB Maths AA SL: the qualifying time for the top 15% of 17-year-old sprinters.',
      title: 'IB Maths AA SL Inverse Normal: Qualifying Threshold',
      description:
        'A normal distribution cutoff separates a top or bottom percentage from the rest. Faster times are smaller, so the top 15% sits in the left tail.',
      questionSectionTitle:
        'Inverse normal distribution – qualifying threshold: Questions & Answers',
      questionSectionDescription:
        'Decide which tail the percentage is in, use invNorm with that area, and convert the variance to a standard deviation first. Questions follow syllabus section SL 4.12, SL 4.9. Every question comes with the mark scheme working.',
    },
    'inverse-normal-quartiles-and-iqr': {
      metaTitle: 'Normal Distribution IQR | IB Maths AA SL',
      metaDescription:
        'Find the quartiles and the normal distribution IQR in IB Maths AA SL using inverse normal at 0.25 and 0.75.',
      title: 'IB Maths AA SL Inverse Normal: Quartiles and IQR',
      description:
        'The normal distribution IQR is the gap between the quartiles, found with inverse normal at areas 0.25 and 0.75.',
      questionSectionTitle: 'Inverse normal – quartiles and IQR: Questions & Answers',
      questionSectionDescription:
        'Find Q₁ and Q₃ with invNorm, then subtract. By symmetry, each sits the same distance from the mean. Questions follow syllabus section SL 4.12, SL 4.9. Every question comes with the mark scheme working.',
    },
    'inverse-normal-percentile': {
      metaTitle: 'Percentiles of a Normal Distribution | IB AA SL',
      metaDescription:
        'Find a percentile of a normal distribution in IB Maths AA SL, such as the 80th percentile, using inverse normal.',
      title: 'IB Maths AA SL Inverse Normal: Percentiles',
      description:
        'The 80th percentile of a normal distribution is the value with 80% of the data below it. Inverse normal finds it directly.',
      questionSectionTitle: 'Inverse normal – percentile: Questions & Answers',
      questionSectionDescription:
        'Write the percentile as a left-tail area, use invNorm with the mean and standard deviation, and round sensibly. Questions follow syllabus section SL 4.12, SL 4.9. Every question comes with the mark scheme working.',
    },
    'normal-distribution-box-plot-interpretation-and-completion': {
      metaTitle: 'Normal Distribution and Box Plots | IB AA SL',
      metaDescription:
        'Interpret a normal distribution box plot in IB Maths AA SL: spot the features that suggest normality, then complete the plot.',
      title: 'IB Maths AA SL Normal Distribution: Box Plot Interpretation',
      description:
        'A normal distribution box plot is symmetrical, with the median in the centre of the box and equal whiskers.',
      questionSectionTitle:
        'Normal distribution – box plot interpretation and completion: Questions & Answers',
      questionSectionDescription:
        'Identify the symmetry features, then use inverse normal to find the missing quartiles and complete the box plot. Questions follow syllabus section SL 4.12, SL 4.9. Every question comes with the mark scheme working.',
    },
    'normal-distribution-contextual-probability-binomial': {
      metaTitle: 'Normal and Binomial Distribution | IB AA SL',
      metaDescription:
        "Combine the normal and binomial distribution in IB Maths AA SL: a sprinter's reaction time, then the number of false starts.",
      title: 'IB Maths AA SL Normal and Binomial Distribution',
      description:
        'This question uses the normal and binomial distribution together: the normal model gives a probability, and a binomial model uses it over several races.',
      questionSectionTitle:
        'Normal distribution – contextual probability + binomial: Questions & Answers',
      questionSectionDescription:
        'Find p with normalcdf, define X ~ B(n, p), then use binomcdf or binompdf for the number of races required. Questions follow syllabus section SL 4.12, SL 4.9. Every question comes with the mark scheme working.',
    },
  },
  'analysis-approaches': {
    'limits-trigonometric-degrees': {
      metaTitle: 'Limits of Trig Functions | IB Maths AA SL',
      metaDescription:
        'Suggest limits of trig functions in IB Maths AA SL as x approaches zero, with angles in degrees, by table and by graph.',
      title: 'IB Maths AA SL Limits: Trigonometric Functions',
      description:
        'Limits of trig functions such as sin 2x ÷ (πx/180) show why radians make calculus simpler. These questions use degrees and suggest each limit.',
      questionSectionTitle: 'Limits — trigonometric (degrees): Questions & Answers',
      questionSectionDescription:
        'Evaluate the expression for x values closer and closer to zero, or sketch it on your GDC, and state the value it approaches. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.',
    },
    'limits-exponential': {
      metaTitle: 'Limits of Exponential Functions | IB AA SL',
      metaDescription:
        'Suggest limits of exponential functions in IB Maths AA SL, such as (2ˣ − 1) ÷ x as x approaches zero, by table and by graph.',
      title: 'IB Maths AA SL Limits: Exponential Functions',
      description:
        'Limits of exponential functions such as (aˣ − 1) ÷ x lead to ln a. These questions suggest each limit numerically and graphically.',
      questionSectionTitle: 'Limits — exponential: Questions & Answers',
      questionSectionDescription:
        'Substitute values of x approaching zero from both sides, or sketch on your GDC, and compare your answer with ln a. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.',
    },
    'limits-graphical-approach': {
      metaTitle: 'Limits from Graphs | IB Maths AA SL',
      metaDescription:
        'Suggest limits from graphs in IB Maths AA SL: sketch y = x ÷ 5x and similar functions on a GDC and read the limit at zero.',
      title: 'IB Maths AA SL Limits: Graphical Approach',
      description:
        'Reading limits from graphs means looking at where the curve heads, even where the function itself is undefined.',
      questionSectionTitle: 'Limits — graphical approach: Questions & Answers',
      questionSectionDescription:
        'Sketch the function on your GDC, zoom in around x = 0, and state the y-value the curve approaches. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.',
    },
    'gradient-of-tangent-by-chord-method': {
      metaTitle: 'Slope of a Chord: Tangent Gradient | IB AA SL',
      metaDescription:
        'Use the slope of a chord in IB Maths AA SL to estimate the gradient of a tangent, completing a table as the chord shrinks.',
      title: 'IB Maths AA SL Gradient of a Tangent by the Chord Method',
      description:
        'The slope of a chord approaches the gradient of the tangent as the second point moves closer. This is the idea behind differentiation.',
      questionSectionTitle: 'Gradient of tangent by chord method: Questions & Answers',
      questionSectionDescription:
        'Complete the table of chord gradients for points closer to P, then suggest the value they approach. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.',
    },
    'evaluating-a-derivative-at-a-point': {
      metaTitle: 'Gradient at a Point | IB Maths AA SL',
      metaDescription:
        'Find the gradient at a point in IB Maths AA SL from a rate of change, such as dV/dt = V + 1 for an electrical component.',
      title: 'IB Maths AA SL Evaluating a Derivative at a Point',
      description:
        'The gradient at a point is the value of the derivative there. This question reads it from a rate of change in context.',
      questionSectionTitle: 'Evaluating a derivative at a point: Questions & Answers',
      questionSectionDescription:
        'Substitute the given value into the derivative and interpret the result with units. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.',
    },
    limits: {
      metaTitle: 'Limits Questions | IB Maths AA SL',
      metaDescription:
        'Suggest limits in IB Maths AA SL with technology: ln x ÷ (x − 1) as x approaches 1, trig limits in degrees and limits as x gets large.',
      title: 'IB Maths AA SL Limits',
      description:
        'Limits describe the value a function approaches. These questions use technology to suggest limits at a point and as x becomes very large.',
      questionSectionTitle: 'Limits: Questions & Answers',
      questionSectionDescription:
        'Use a table or graph on your GDC, test values on both sides or for very large x, and state the value approached. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.',
    },
    'related-rates-inverse-derivatives': {
      metaTitle: 'Related Rates Problems | IB Maths AA SL',
      metaDescription:
        'Related rates problems in IB Maths AA SL: use dy/dx = 1 ÷ (dx/dy) to find a gradient from the rate of change of x with y.',
      title: 'IB Maths AA SL Related Rates and Inverse Derivatives',
      description:
        'Related rates problems connect different rates of change. Here dx/dy is given, and its reciprocal gives the gradient dy/dx.',
      questionSectionTitle: 'Related rates / inverse derivatives: Questions & Answers',
      questionSectionDescription:
        'Write dy/dx = 1 ÷ (dx/dy), substitute the given value, and simplify. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.',
    },
    'increasing-decreasing-functions': {
      metaTitle: 'Increasing and Decreasing Functions | IB AA SL',
      metaDescription:
        'Increasing and decreasing function questions for IB Maths AA SL: find the intervals from the graph of f(x) or f′(x), as inequalities.',
      title: 'IB Maths AA SL Increasing and Decreasing Functions',
      description:
        'An increasing and decreasing function changes direction at its turning points. These questions read the intervals from f(x) or from f′(x).',
      questionSectionTitle: 'Increasing & Decreasing Functions: Questions & Answers',
      questionSectionDescription:
        'Where f′(x) > 0 the function is increasing; where f′(x) < 0 it is decreasing. Write each interval as an inequality in x. Questions follow syllabus section SL 5.2. Every question comes with the mark scheme working.',
    },
    'sketching-derivatives': {
      metaTitle: 'Derivative Graph Questions | IB Maths AA SL',
      metaDescription:
        'Sketch the derivative graph of a function in IB Maths AA SL, and its second derivative, from straight lines and curves.',
      title: 'IB Maths AA SL Sketching Derivatives',
      description:
        'A derivative graph shows the gradient of the original function at every point. Turning points on f become x-intercepts on f′.',
      questionSectionTitle: 'Sketching Derivatives: Questions & Answers',
      questionSectionDescription:
        'Mark where the gradient is zero, positive and negative, then sketch f′ through those points. Repeat the process for f″. Questions follow syllabus section SL 5.2. Every question comes with the mark scheme working.',
    },
    'sketching-f-x-from-f-x': {
      metaTitle: "Sketching the Graph of f from f' | IB AA SL",
      metaDescription:
        "Sketch the graph of f from f' in IB Maths AA SL: use the sign of the derivative to find increasing sections and turning points.",
      title: 'IB Maths AA SL Sketching f(x) from f′(x)',
      description:
        "To sketch the graph of f from f', read the sign of f′: positive means f rises, negative means it falls, and zero gives a turning point.",
      questionSectionTitle: "Sketching f(x) from f'(x): Questions & Answers",
      questionSectionDescription:
        'Find where f′ is zero and where it changes sign, then sketch a possible f with turning points in the right places. Questions follow syllabus section SL 5.2. Every question comes with the mark scheme working.',
    },
    'graphing-analysing-functions': {
      metaTitle: 'Curve Sketching Questions | IB Maths AA SL',
      metaDescription:
        'Curve sketching in IB Maths AA SL: sketch f(x) = x²(x² − 1) with technology and find where f(x) > 0 and f′(x) < 0.',
      title: 'IB Maths AA SL Graphing and Analysing Functions',
      description:
        'Curve sketching combines a graph with analysis. These questions sketch a quartic and find where it is positive and where it decreases.',
      questionSectionTitle: 'Graphing & Analysing Functions: Questions & Answers',
      questionSectionDescription:
        'Sketch the curve with technology, then use the roots of f and of f′ to give each interval. Questions follow syllabus section SL 5.2. Every question comes with the mark scheme working.',
    },
    'matching-functions-and-derivatives': {
      metaTitle: 'Matching Functions and Derivatives | IB AA SL',
      metaDescription:
        'Matching functions and derivatives in IB Maths AA SL: pair graphs of f and f′, and sketch one from the other.',
      title: 'IB Maths AA SL Matching Functions and Derivatives',
      description:
        'Matching functions and derivatives means linking turning points on one graph with x-intercepts on the other.',
      questionSectionTitle: 'Matching Functions and Derivatives: Questions & Answers',
      questionSectionDescription:
        'For each graph, find where the gradient is zero, then look for a graph that crosses the x-axis at those values with matching signs. Questions follow syllabus section SL 5.2. Every question comes with the mark scheme working.',
    },
    'area-enclosed-by-curve-and-x-axis': {
      metaTitle: 'Area Bounded by a Curve | IB Maths AA SL',
      metaDescription:
        'Find the area bounded by a curve and the x-axis in IB Maths AA SL, or by a curve and both axes, with definite integrals.',
      title: 'IB Maths AA SL Area Enclosed by a Curve and the x-axis',
      description:
        'The area bounded by a curve and the x-axis is a definite integral between the points where the curve meets the axis.',
      questionSectionTitle: 'Area Enclosed by Curve and x-axis: Questions & Answers',
      questionSectionDescription:
        'Find the limits from the x-intercepts, integrate, and give the area as a positive value. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },
    'integration-in-context': {
      metaTitle: 'Applications of Integration | IB Maths AA SL',
      metaDescription:
        'Applications of integration in IB Maths AA SL: total volume from a rate of flow, paint from a sprayer and sand in a timer.',
      title: 'IB Maths AA SL Integration in Context',
      description:
        'Integrating a rate of change gives the total amount. These applications of integration use water filters, paint sprayers and sand timers.',
      questionSectionTitle: 'Integration in Context: Questions & Answers',
      questionSectionDescription:
        'Write the rate as a function of time, find any constant from the information given, and integrate between the right limits. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },
    'integration-in-context-improper-integrals': {
      metaTitle: 'Improper Integrals Questions | IB Maths AA SL',
      metaDescription:
        'Use improper integrals in IB Maths AA SL to estimate the total sand that eventually falls through a timer, with technology.',
      title: 'IB Maths AA SL Integration in Context: Improper Integrals',
      description:
        'Improper integrals have an infinite limit. Here one finds how much sand eventually falls, even though the flow never quite stops.',
      questionSectionTitle: 'Integration in Context / Improper Integrals: Questions & Answers',
      questionSectionDescription:
        'Integrate the rate from the start time to a very large value of t on your GDC, and state the value the total approaches. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },
    'mathematical-modelling': {
      metaTitle: 'Mathematical Modelling Questions | IB AA SL',
      metaDescription:
        'Mathematical modelling in IB Maths AA SL: give one criticism of a sand-timer model whose flow rate is 100 ÷ t³.',
      title: 'IB Maths AA SL Mathematical Modelling',
      description:
        'Mathematical modelling is only as good as its assumptions. This question asks for a clear criticism of a sand-timer model.',
      questionSectionTitle: 'Mathematical Modelling: Questions & Answers',
      questionSectionDescription:
        'Test the model at the start and at very large times, and explain one way its predictions do not match reality. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },
    'integration-from-derivative': {
      metaTitle: 'Finding a Function from its Derivative | AA SL',
      metaDescription:
        'Finding a function from its derivative in IB Maths AA SL: integrate, then use the given values to fix each constant, from f′ and from y″.',
      title: 'IB Maths AA SL Integration from a Derivative',
      description:
        'Finding a function from its derivative means integrating and then using a known point to fix the constant.',
      questionSectionTitle: 'Integration from Derivative: Questions & Answers',
      questionSectionDescription:
        'Integrate, add a constant, substitute the given value to find it, and repeat once more when starting from a second derivative. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },
    'second-derivative': {
      metaTitle: 'Second Derivative Test Questions | IB AA SL',
      metaDescription:
        'Find the second derivative of polynomials in IB Maths AA SL, then use it to find unknown constants, the basis of the second derivative test.',
      title: 'IB Maths AA SL Second Derivative',
      description:
        'The second derivative measures how the gradient changes. It underpins the second derivative test for maximum and minimum points.',
      questionSectionTitle: 'Second Derivative: Questions & Answers',
      questionSectionDescription:
        'Differentiate twice term by term. When a value of the second derivative is given, substitute it and solve for the constant. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
    'increasing-decreasing-concavity': {
      metaTitle: 'Concavity Questions | IB Maths AA SL',
      metaDescription:
        'Concavity in IB Maths AA SL: describe graph sections as increasing, decreasing, concave-up or concave-down, and find intervals.',
      title: 'IB Maths AA SL Increasing, Decreasing and Concavity',
      description:
        'Concavity describes which way a curve bends. These questions describe sections of a graph and find where a polynomial is concave-up or concave-down.',
      questionSectionTitle: 'Increasing/Decreasing & Concavity: Questions & Answers',
      questionSectionDescription:
        'To find the concavity of a function, solve f″(x) > 0 for concave-up and f″(x) < 0 for concave-down. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
    'sketching-curves-sign-analysis': {
      metaTitle: 'Sign Chart Questions | IB Maths AA SL',
      metaDescription:
        'Use a sign chart in IB Maths AA SL to sketch a curve from the signs of f(x), f′(x) and f″(x) across every interval of x.',
      title: 'IB Maths AA SL Sketching Curves from Sign Analysis',
      description:
        'A sign chart records whether f, f′ and f″ are positive or negative. Together they fix the position, direction and bend of a curve.',
      questionSectionTitle: 'Sketching Curves – Sign Analysis: Questions & Answers',
      questionSectionDescription:
        'Build a sign diagram for each condition, then sketch a curve that matches all three in every interval. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
    'concavity-finding-constants': {
      metaTitle: 'Concave Up: Finding Constants | IB Maths AA SL',
      metaDescription:
        'Find the constants that make a cubic concave up for x > 1 in IB Maths AA SL, and evaluate b ÷ a from increasing intervals.',
      title: 'IB Maths AA SL Concavity: Finding Constants',
      description:
        'A cubic is concave up on one side of its point of inflection only. That point gives an equation for the unknown constant.',
      questionSectionTitle: 'Concavity – Finding Constants: Questions & Answers',
      questionSectionDescription:
        'Find f″(x), set it equal to zero at the boundary value given, and solve for the constant. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
    'proof-concavity': {
      metaTitle: 'Prove a Curve Is Concave Up | IB Maths AA SL',
      metaDescription:
        'Prove concave-up results in IB Maths AA SL: show y = x² + bx + c is always concave up, and prove concavity with parameters.',
      title: 'IB Maths AA SL Proof: Concavity',
      description:
        'To prove concave-up behaviour, show the second derivative is positive over the whole interval required.',
      questionSectionTitle: 'Proof – Concavity: Questions & Answers',
      questionSectionDescription:
        'Find the second derivative, then show it is positive for every x in the interval using the information given. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
    'second-derivative-trigonometry': {
      metaTitle: 'Second Derivative of Trig Functions | IB AA SL',
      metaDescription:
        'Find the second derivative of trig functions in IB Maths AA SL and prove that y = sin 3x + 2 cos 3x satisfies y″ = −9y.',
      title: 'IB Maths AA SL Second Derivative: Trigonometry',
      description:
        'The second derivative of trig functions such as sin 3x returns a multiple of the original. This question uses that to prove a result.',
      questionSectionTitle: 'Second Derivative – Trigonometry: Questions & Answers',
      questionSectionDescription:
        'Differentiate twice with the chain rule, factor out −9, and show the result equals −9y. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
    'second-derivative-logarithms-proof': {
      metaTitle: 'Second Derivative of ln x | IB Maths AA SL',
      metaDescription:
        'Find the second derivative of ln(a + x) in IB Maths AA SL, using the second derivative of ln x, and prove the graph is concave down.',
      title: 'IB Maths AA SL Second Derivative: Logarithms and Proof',
      description:
        'The second derivative of ln x is −1 ÷ x², which is always negative. The same holds for ln(a + x), so its graph is concave down.',
      questionSectionTitle: 'Second Derivative – Logarithms & Proof: Questions & Answers',
      questionSectionDescription:
        'Differentiate twice, then explain why the result is negative for every x in the domain. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
    'second-derivative-mixed-functions': {
      metaTitle: 'Second Order Derivative Questions | IB AA SL',
      metaDescription:
        'Find a second order derivative in IB Maths AA SL with the product rule, then the point on y = x² ln x where it equals 1.',
      title: 'IB Maths AA SL Second Derivative: Mixed Functions',
      description:
        'A second order derivative of a product such as x² ln x needs the product rule twice. This question then solves an equation in it.',
      questionSectionTitle: 'Second Derivative – Mixed Functions: Questions & Answers',
      questionSectionDescription:
        'Differentiate with the product rule, differentiate again, set the result equal to 1, and solve for x. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
    'intervals-decreasing-gradient': {
      metaTitle: 'Decreasing Gradient Questions | IB Maths AA SL',
      metaDescription:
        'Find the interval with a decreasing gradient in IB Maths AA SL, where the second derivative of a cubic is negative.',
      title: 'IB Maths AA SL Intervals of Decreasing Gradient',
      description:
        'A decreasing gradient means f′ is falling, so f″ is negative. This question finds where that happens on a cubic.',
      questionSectionTitle: 'Intervals – Decreasing Gradient: Questions & Answers',
      questionSectionDescription:
        'Find f″(x), solve f″(x) < 0, and write the interval as an inequality. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
    'concavity-increasing-conditions': {
      metaTitle: 'Concave Down and Increasing | IB Maths AA SL',
      metaDescription:
        'Find conditions for a cubic to be concave down and increasing in IB Maths AA SL, using f′(x) and f″(x) together.',
      title: 'IB Maths AA SL Concavity and Increasing: Conditions',
      description:
        'A section that is concave down and increasing needs f″(x) < 0 and f′(x) > 0 together. This question finds the condition on b.',
      questionSectionTitle: 'Concavity & Increasing – Conditions: Questions & Answers',
      questionSectionDescription:
        'Use the given value of a, write both inequalities, and find the values of b that satisfy them over the interval. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
  },
  'calculus-kinematics': {
    'differentiation-velocity-acceleration-from-displacement': {
      metaTitle: 'Kinematics Calculus Questions | IB Maths AA SL',
      metaDescription:
        'Kinematics calculus in IB Maths AA SL: differentiate displacement to find velocity and acceleration, including trig models.',
      title: 'IB Maths AA SL Velocity and Acceleration from Displacement',
      description:
        'In kinematics calculus, velocity is the derivative of displacement and acceleration is the derivative of velocity.',
      questionSectionTitle:
        'Differentiation: Velocity & Acceleration from Displacement: Questions & Answers',
      questionSectionDescription:
        'Differentiate s once for v and again for a, using the chain rule for trigonometric and exponential models. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'integration-distance-travelled': {
      metaTitle: 'Total Distance Travelled | IB Maths AA SL',
      metaDescription:
        'Find the total distance travelled in IB Maths AA SL by integrating the absolute value of velocity with technology.',
      title: 'IB Maths AA SL Integration: Distance Travelled',
      description:
        'Total distance travelled counts every metre, forwards and backwards, so it uses the integral of |v|, not v.',
      questionSectionTitle: 'Integration: Distance Travelled: Questions & Answers',
      questionSectionDescription:
        'Enter ∫|v| dt between the given times on your GDC and give the answer to three significant figures. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'kinematics-polynomial-model': {
      metaTitle: 'Kinematics Questions | IB Maths AA SL',
      metaDescription:
        'Kinematics in IB Maths AA SL with polynomial models: a particle, a bullet in a fluid and a cyclist passing a checkpoint.',
      title: 'IB Maths AA SL Kinematics: Polynomial Models',
      description:
        'Kinematics describes motion with displacement, velocity and acceleration. These kinematics questions use polynomial models in context.',
      questionSectionTitle: 'Kinematics: Polynomial Model: Questions & Answers',
      questionSectionDescription:
        'Read each part carefully: differentiate to move from s to v to a, integrate to move back, and use units throughout. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'integration-displacement-from-velocity': {
      metaTitle: 'Finding Displacement from Velocity | IB AA SL',
      metaDescription:
        'Practise finding displacement from velocity in IB Maths AA SL by integrating v between two times, including exponentials and roots.',
      title: 'IB Maths AA SL Integration: Displacement from Velocity',
      description:
        'Finding displacement from velocity means integrating v. The change in displacement between two times is a definite integral.',
      questionSectionTitle: 'Integration: Displacement from Velocity: Questions & Answers',
      questionSectionDescription:
        'Integrate v with respect to t between the given limits. A negative answer means the particle ends up behind its starting point. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'integration-displacement-and-distance': {
      metaTitle: 'Displacement vs Distance | IB Maths AA SL',
      metaDescription:
        'Displacement vs distance in IB Maths AA SL: integrate v for displacement and |v| for distance travelled in the first 6 seconds.',
      title: 'IB Maths AA SL Integration: Displacement and Distance',
      description:
        'Displacement vs distance is the key distinction in kinematics: displacement has a direction, while distance counts all movement.',
      questionSectionTitle: 'Integration: Displacement and Distance: Questions & Answers',
      questionSectionDescription:
        'Integrate v for the displacement and |v| for the distance, and explain why the two answers differ. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'integration-velocity-from-acceleration': {
      metaTitle: 'How to Find Velocity from Acceleration | AA SL',
      metaDescription:
        'Learn how to find velocity from acceleration in IB Maths AA SL by integrating and using the initial velocity.',
      title: 'IB Maths AA SL Integration: Velocity from Acceleration',
      description:
        'Here is how to find velocity from acceleration: integrate a with respect to t, then use the initial velocity to find the constant.',
      questionSectionTitle: 'Integration: Velocity from Acceleration: Questions & Answers',
      questionSectionDescription:
        'Integrate a, substitute the known velocity to fix the constant, or evaluate a definite integral for the change in velocity. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'kinematics-displacementtime-analysis': {
      metaTitle: 'Displacement Time Graph Questions | IB AA SL',
      metaDescription:
        'Analyse a displacement time graph in IB Maths AA SL: when the particle is at rest, its maximum displacement and the distance travelled.',
      title: 'IB Maths AA SL Kinematics: Displacement–Time Analysis',
      description:
        'A displacement time graph shows where a particle is at each moment. Its gradient is the velocity.',
      questionSectionTitle: 'Kinematics: Displacement–Time Analysis: Questions & Answers',
      questionSectionDescription:
        'Find when s = 0 and when v = 0, then use the turning points to find the total distance travelled. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'kinematics-trigonometric-model': {
      metaTitle: 'Trigonometric Kinematics Model | IB Maths AA SL',
      metaDescription:
        'A trigonometric kinematics model in IB Maths AA SL: s = t sin t, with velocity, initial velocity and times at rest.',
      title: 'IB Maths AA SL Kinematics: Trigonometric Model',
      description:
        'This trigonometric kinematics model uses s = t sin t, so differentiating it needs the product rule.',
      questionSectionTitle: 'Kinematics: Trigonometric Model: Questions & Answers',
      questionSectionDescription:
        'Differentiate with the product rule for v, substitute t = 0 for the initial velocity, and solve v = 0 on your GDC for the times at rest. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'kinematics-proof-derivation': {
      metaTitle: 'Kinematics Derivation: SUVAT | IB Maths AA SL',
      metaDescription:
        'A kinematics derivation in IB Maths AA SL: integrate constant acceleration to prove v = u + At and s = ut + ½At².',
      title: 'IB Maths AA SL Kinematics: Proof and Derivation',
      description:
        'The constant acceleration equations come from calculus. This kinematics derivation integrates a = A twice.',
      questionSectionTitle: 'Kinematics: Proof / Derivation: Questions & Answers',
      questionSectionDescription:
        'Integrate a to get v, use v = u when t = 0, integrate again, and use s = 0 when t = 0. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'kinematics-proof-shm': {
      metaTitle: 'Simple Harmonic Motion Questions | IB AA SL',
      metaDescription:
        'Prove the simple harmonic motion result a = −ω²s in IB Maths AA SL by differentiating s = sin ωt twice.',
      title: 'IB Maths AA SL Kinematics: Proof of Simple Harmonic Motion',
      description:
        'Simple harmonic motion is defined by an acceleration that is proportional to displacement and in the opposite direction.',
      questionSectionTitle: 'Kinematics: Proof – SHM: Questions & Answers',
      questionSectionDescription:
        'For this SHM proof, differentiate s = sin ωt twice with the chain rule and write the result in terms of s. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'kinematics-projectile-free-fall': {
      metaTitle: 'Free Fall Questions | IB Maths AA SL',
      metaDescription:
        'Free fall in IB Maths AA SL: a ball thrown off a cliff with v = 5 − 10t, its maximum height and when it reaches the sea.',
      title: 'IB Maths AA SL Kinematics: Projectile and Free Fall',
      description:
        'Under free fall, velocity falls at a constant rate. This question follows a ball thrown up from a cliff until it hits the sea.',
      questionSectionTitle: 'Kinematics: Projectile / Free Fall: Questions & Answers',
      questionSectionDescription:
        'Integrate v to get the height, use the initial height for the constant, and solve for the times asked. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'integration-piecewise-acceleration': {
      metaTitle: 'Piecewise Acceleration Questions | IB AA SL',
      metaDescription:
        'Piecewise acceleration in IB Maths AA SL: a cyclist whose acceleration changes after 2 seconds, and acceleration a = At.',
      title: 'IB Maths AA SL Integration: Piecewise and Variable Acceleration',
      description:
        'With piecewise acceleration, each stage of motion has its own model. The velocity at the end of one stage starts the next.',
      questionSectionTitle: 'Integration: Piecewise Acceleration: Questions & Answers',
      questionSectionDescription:
        'Integrate each stage separately, carry the final velocity and displacement into the next stage, and add the results. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'kinematics-max-min-average-speed': {
      metaTitle: 'Maximum Speed: Calculus Questions | IB AA SL',
      metaDescription:
        'Find maximum speed with calculus in IB Maths AA SL, plus minimum and average speed, for v = t(t − 1)(t − 4).',
      title: 'IB Maths AA SL Kinematics: Maximum, Minimum and Average Speed',
      description:
        'Finding maximum speed with calculus means maximising |v|, not v. This question also finds the minimum and average speed.',
      questionSectionTitle: 'Kinematics: Max/Min/Average Speed: Questions & Answers',
      questionSectionDescription:
        'Check where a = 0 and the end points, compare |v| at each, and use total distance ÷ time for the average speed. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
    'kinematics-two-particle-problem': {
      metaTitle: 'Two-Particle Kinematics Questions | IB AA SL',
      metaDescription:
        'Two-particle kinematics in IB Maths AA SL: when one runner overtakes another, and when two juggled balls collide.',
      title: 'IB Maths AA SL Kinematics: Two-Particle Problems',
      description:
        'Two-particle kinematics problems compare two displacements. They meet when their displacements are equal.',
      questionSectionTitle: 'Kinematics: Two-Particle Problem: Questions & Answers',
      questionSectionDescription:
        'Integrate each velocity, use each starting position for the constant, set the displacements equal, and solve for t. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
    },
  },
  'proof-algebra': {
    'algebraic-proof-using-kinematics-context': {
      metaTitle: 'Kinematics Proof: Algebraic Inequality | AA SL',
      metaDescription:
        'A kinematics proof in IB Maths AA SL: use average speeds to prove an inequality about fractions with positive numbers.',
      title: 'IB Maths AA SL Algebraic Proof Using Kinematics',
      description:
        'This kinematics proof uses average speed to prove an algebraic inequality: the combined fraction lies between the two originals.',
      questionSectionTitle: 'Algebraic Proof using Kinematics Context: Questions & Answers',
      questionSectionDescription:
        'Interpret each fraction as a distance divided by a time, combine the two journeys, and explain why the average speed lies between the two speeds. Questions follow syllabus section SL 5.9. Every question comes with the mark scheme working.',
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
