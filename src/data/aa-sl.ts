import { title } from 'process'

export type Subtopic = {
  title: string
  slug: string
  description: string
}

export type Topic = {
  title: string
  slug: string
  description: string
  subtopics: Subtopic[]
}

// export const topics: Topic[] = [
//   {
//     title: 'Number',
//     slug: 'number',
//     description: 'Explore number systems, sequences, series, exponents and algebraic methods.',
//     subtopics: [
//       {
//         title: 'Standard Form',
//         slug: 'standard-form',
//         description:
//           'Learn how to express very large and very small numbers in standard form using powers of 10.',
//       },
//       {
//         title: 'Writing in Standard Form',
//         slug: 'writing-in-standard-form',
//         description:
//           'Practise converting ordinary numbers into standard form and expressing numbers using powers of 10.',
//       },
//       {
//         title: 'Multiplying in Standard Form',
//         slug: 'multiplying-in-standard-form',
//         description:
//           'Learn how to multiply numbers in standard form using the laws of indices and express answers in standard form.',
//       },
//       {
//         title: 'Squaring in Standard Form',
//         slug: 'squaring-in-standard-form',
//         description:
//           'Practise squaring numbers in standard form by squaring the coefficient and multiplying the exponent by 2.',
//       },
//       {
//         title: 'Dividing in Standard Form',
//         slug: 'dividing-in-standard-form',
//         description:
//           'Practise squaring numbers in standard form by squaring the coefficient and multiplying the exponent by 2.',
//       },
//     ],
//   },
//   {
//     title: 'Sequences and Series',
//     slug: 'sequences-and-series',
//     description: 'Study function notation, graphs, domain, range and transformations.',
//     subtopics: [
//       {
//         title: 'Arithmetic Sequences – nth Term',
//         slug: 'arithmetic-sequences-nth-term',
//         description: 'Understand function notation and evaluating functions.',
//       },
//       {
//         title: 'Finding Common Difference',
//         slug: 'finding-common-difference',
//         description: 'Determine the valid inputs and outputs of functions.',
//       },
//       {
//         title: 'Finding First Term and Common Difference',
//         slug: 'finding-first-term-and-common-difference',
//         description: 'Explore how two or more functions can be combined.',
//       },
//       {
//         title: 'Formula for nth Term',
//         slug: 'formula-for-nth-term',
//         description: 'Understand inverse functions and their properties.',
//       },
//     ],
//   },
//   {
//     title: 'Financial Mathematics',
//     slug: 'financial-mathematics',
//     description: 'Explore trigonometric relationships, angles, triangles and geometry.',
//     subtopics: [
//       {
//         title: 'Compound Interest – Annual',
//         slug: 'compound-interest-annual',
//         description: 'Study sine, cosine and tangent relationships.',
//       },
//       {
//         title: 'Time to Reach a Target Value',
//         slug: 'time-to-reach-a-target-value',
//         description: 'Practise simplifying and proving trigonometric identities.',
//       },
//       {
//         title: 'Finding the Interest Rate',
//         slug: 'finding-the-interest-rate',
//         description: 'Explore radian measure, arc lengths and sector areas.',
//       },
//       {
//         title: 'Depreciation',
//         slug: 'depreciation',
//         description: 'Apply trigonometric rules to solve triangle problems.',
//       },
//     ],
//   },
//   {
//     title: 'Number & Algebra',
//     slug: 'number-algebra',
//     description: 'Explore data analysis, probability, distributions and statistical relationships.',
//     subtopics: [
//       {
//         title: 'Laws of Indices – Multiplication',
//         slug: 'laws-of-indices-multiplication',
//         description: 'Review measures of centre, spread and data representation.',
//       },
//       {
//         title: 'Laws of Indices – Power of a Power',
//         slug: 'laws-of-indices-power-of-a-power',
//         description: 'Study probability rules and combined events.',
//       },
//       {
//         title: 'Laws of Indices – Coefficient & Variable Combined',
//         slug: 'laws-of-indices-coefficient-variable-combined',
//         description: 'Explore random variables and probability distributions.',
//       },
//       {
//         title: 'Laws of Indices – Multi-variable',
//         slug: 'laws-of-indices-multi-variable',
//         description: 'Interpret relationships between variables and regression models.',
//       },
//     ],
//   },
//   {
//     title: 'Logarithms & Exponentials',
//     slug: 'logarithms-exponentials',
//     description: 'Study differentiation, integration and their mathematical applications.',
//     subtopics: [
//       {
//         title: 'Evaluating Logarithms',
//         slug: 'evaluating-logarithms',
//         description: 'Explore limits and continuity of functions.',
//       },
//       {
//         title: 'Solving Logarithmic Equations',
//         slug: 'solving-logarithmic-equations',
//         description: 'Learn derivative rules and rates of change.',
//       },
//       {
//         title: 'Natural Logarithm – Rearranging',
//         slug: 'natural-logarithm-rearranging',
//         description: 'Explore gradients, optimisation and rates of change.',
//       },
//       {
//         title: 'Simplifying Logarithmic Expressions',
//         slug: 'simplifying-logarithmic-expressions',
//         description: 'Study antiderivatives, definite integrals and area.',
//       },
//     ],
//   },
// ]

export const topics: Topic[] = [
  {
    title: 'Number',
    slug: 'number',
    description: 'Explore number systems, sequences, series, exponents and algebraic methods.',
    subtopics: [
      {
        title: 'Standard Form',
        slug: 'standard-form',
        description:
          'Learn how to express very large and very small numbers in standard form using powers of 10.',
      },
      {
        title: 'Writing in Standard Form',
        slug: 'writing-in-standard-form',
        description:
          'Practise converting ordinary numbers into standard form and expressing numbers using powers of 10.',
      },
      {
        title: 'Multiplying in Standard Form',
        slug: 'multiplying-in-standard-form',
        description:
          'Learn how to multiply numbers in standard form using the laws of indices and express answers in standard form.',
      },
      {
        title: 'Squaring in Standard Form',
        slug: 'squaring-in-standard-form',
        description:
          'Practise squaring numbers in standard form by squaring the coefficient and multiplying the exponent by 2.',
      },
      {
        title: 'Dividing in Standard Form',
        slug: 'dividing-in-standard-form',
        description:
          'Practise squaring numbers in standard form by squaring the coefficient and multiplying the exponent by 2.',
      },
      {
        title: 'Adding/Subtracting in Standard Form',
        slug: 'adding-subtracting-in-standard-form',
        description:
          'Unlike multiplying, adding standard form numbers needs the powers of 10 to match first. These questions practise adding and subtracting in standard form step by step.',
      },
      {
        title: 'Proof – Multiplication in Standard Form',
        slug: 'proof-multiplication-in-standard-form',
        description:
          'Some standard form exam questions ask you to prove a result rather than calculate one. These questions show why (a × 10ⁿ)(b × 10ᵐ) = ab × 10ⁿ⁺ᵐ, and when the answer needs adjusting.',
      },
      {
        title: 'Standard Form – Multi-part Application',
        slug: 'standard-form-multi-part-application',
        description:
          'These standard form questions come in several linked parts that convert, calculate and interpret very large or very small numbers, the way longer exam questions do.',
      },
      {
        title: 'Standard Form – Real-World Context',
        slug: 'standard-form-real-world-context',
        description:
          'Standard form is how science writes very large and very small quantities. These standard form word problems use distances, populations and microscopic sizes.',
      },
      {
        title: 'Generalising Standard Form (algebra)',
        slug: 'generalising-standard-form-algebra',
        description:
          'The scientific notation rules work for letters as well as numbers. These standard form algebra questions write general results such as (a × 10ⁿ)(b × 10ᵐ).',
      },
    ],
  },
  {
    title: 'Sequences and Series',
    slug: 'sequences-and-series',
    description: 'Study function notation, graphs, domain, range and transformations.',
    subtopics: [
      {
        title: 'Arithmetic Sequences – nth Term',
        slug: 'arithmetic-sequences-nth-term',
        description: 'Understand function notation and evaluating functions.',
      },
      {
        title: 'Finding Common Difference',
        slug: 'finding-common-difference',
        description: 'Determine the valid inputs and outputs of functions.',
      },
      {
        title: 'Finding First Term and Common Difference',
        slug: 'finding-first-term-and-common-difference',
        description: 'Explore how two or more functions can be combined.',
      },
      {
        title: 'Formula for nth Term',
        slug: 'formula-for-nth-term',
        description: 'Understand inverse functions and their properties.',
      },
      {
        title: 'Arithmetic Series – Sum',
        slug: 'arithmetic-series-sum',
        description:
          'The sum of an arithmetic sequence comes from one of two formulae. These arithmetic series questions practise choosing the right one and applying it accurately.',
      },
      {
        title: 'Sigma Notation',
        slug: 'sigma-notation',
        description:
          'Sigma notation writes a long sum in one line. These questions practise reading the limits, listing the terms and evaluating each sum.',
      },
      {
        title: 'Mixed / Problem Solving',
        slug: 'mixed-problem-solving',
        description:
          'These arithmetic progression problems combine terms, sums and unknowns in one question, the way longer exam questions do.',
      },
      {
        title: 'Sum Formula Given Sₙ',
        slug: 'sum-formula-given-sn',
        description:
          'When a sequence is described by its sum of n terms formula, you can still find any term. These questions work back from Sₙ to the sequence itself.',
      },
      {
        title: 'Sum to Infinity of a Geometric Series',
        slug: 'sum-to-infinity-of-a-geometric-series',
        description:
          'An infinite geometric series has a finite sum when |r| < 1. These questions apply the sum to infinity formula, S∞ = u₁ ÷ (1 − r).',
      },
      {
        title: 'Convergence of Infinite Geometric Series',
        slug: 'convergence-of-infinite-geometric-series',
        description:
          'A convergent geometric series is one whose common ratio lies between −1 and 1. These questions test convergence and find the range of x that makes it happen.',
      },
    ],
  },
  {
    title: 'Financial Mathematics',
    slug: 'financial-mathematics',
    description: 'Explore trigonometric relationships, angles, triangles and geometry.',
    subtopics: [
      {
        title: 'Compound Interest – Annual',
        slug: 'compound-interest-annual',
        description: 'Study sine, cosine and tangent relationships.',
      },
      {
        title: 'Time to Reach a Target Value',
        slug: 'time-to-reach-a-target-value',
        description: 'Practise simplifying and proving trigonometric identities.',
      },
      {
        title: 'Finding the Interest Rate',
        slug: 'finding-the-interest-rate',
        description: 'Explore radian measure, arc lengths and sector areas.',
      },
      {
        title: 'Depreciation',
        slug: 'depreciation',
        description: 'Apply trigonometric rules to solve triangle problems.',
      },
      {
        title: 'Compound Interest – Non-Annual',
        slug: 'compound-interest-non-annual',
        description:
          'Interest added monthly or quarterly grows faster than interest added once a year. These questions show how compounding frequency changes the final value of an investment.',
      },
      {
        title: 'Real Value of Investment with Inflation',
        slug: 'real-value-of-investment-with-inflation',
        description:
          'Inflation reduces what an investment can buy. These questions find the real rate of return, also called the inflation adjusted return, and the real value of an investment over time.',
      },
      {
        title: 'Comparing Compounding Methods',
        slug: 'comparing-compounding-methods',
        description:
          'These questions compare simple vs compound interest, then compare compounding yearly, quarterly and monthly, and explain why the results differ.',
      },
      {
        title: 'Equivalent Annual Rate (EAR)',
        slug: 'equivalent-annual-rate-ear',
        description:
          'The effective annual rate turns any compounding frequency into one comparable yearly rate. These questions apply the effective annual rate formula.',
      },
      {
        title: 'Real Terms Growth with Inflation',
        slug: 'real-terms-growth-with-inflation',
        description:
          'Growth that looks strong in money terms can be small in real terms. These questions find the real interest rate and the real growth of a value over time.',
      },
      {
        title: 'Hyperinflation',
        slug: 'hyperinflation',
        description:
          'Hyperinflation is compound growth at an extreme rate. These questions model how fast prices rise and how quickly money loses its value.',
      },
    ],
  },
  {
    title: 'Number & Algebra',
    slug: 'number-algebra',
    description: 'Explore data analysis, probability, distributions and statistical relationships.',
    subtopics: [
      {
        title: 'Laws of Indices – Multiplication',
        slug: 'laws-of-indices-multiplication',
        description: 'Review measures of centre, spread and data representation.',
      },
      {
        title: 'Laws of Indices – Power of a Power',
        slug: 'laws-of-indices-power-of-a-power',
        description: 'Study probability rules and combined events.',
      },
      {
        title: 'Laws of Indices – Coefficient & Variable Combined',
        slug: 'laws-of-indices-coefficient-variable-combined',
        description: 'Explore random variables and probability distributions.',
      },
      {
        title: 'Laws of Indices – Multi-variable',
        slug: 'laws-of-indices-multi-variable',
        description: 'Interpret relationships between variables and regression models.',
      },
      {
        title: 'Laws of Indices – Division',
        slug: 'laws-of-indices-division',
        description:
          'When dividing indices with the same base, subtract the powers. These questions apply the law to numbers and to algebraic terms.',
      },
      {
        title: 'Negative Indices – Integer Base',
        slug: 'negative-indices-integer-base',
        description:
          'Negative exponents mean a reciprocal: a⁻ⁿ = 1 ÷ aⁿ. These questions evaluate negative indices with integer bases and simplify expressions that contain them.',
      },
      {
        title: 'Negative Indices – Fraction Base',
        slug: 'negative-indices-fraction-base',
        description:
          'Negative exponents with fractions have a shortcut: flip the fraction and make the power positive. These questions apply it to numerical and algebraic fractions.',
      },
      {
        title: 'Laws of Indices – Fraction in Brackets',
        slug: 'laws-of-indices-fraction-in-brackets',
        description:
          'To find the power of a fraction, apply the index to the top and the bottom. These questions practise it with numbers, variables and mixed terms.',
      },
      {
        title: 'Expressing Values in Prime Base Form',
        slug: 'expressing-values-in-prime-base-form',
        description:
          'Prime factorisation writes any number as a product of prime powers, such as 72 = 2³ × 3². These questions use it to simplify expressions and solve index equations.',
      },
      {
        title: 'Last Digit / Cyclicity',
        slug: 'last-digit-cyclicity',
        description:
          'The last digits of powers repeat in a fixed cycle. These questions use the cyclicity of numbers to find the last digit of very large powers.',
      },
    ],
  },
  {
    title: 'Logarithms & Exponentials',
    slug: 'logarithms-exponentials',
    description: 'Study differentiation, integration and their mathematical applications.',
    subtopics: [
      {
        title: 'Evaluating Logarithms',
        slug: 'evaluating-logarithms',
        description: 'Explore limits and continuity of functions.',
      },
      {
        title: 'Solving Logarithmic Equations',
        slug: 'solving-logarithmic-equations',
        description: 'Learn derivative rules and rates of change.',
      },
      {
        title: 'Natural Logarithm – Rearranging',
        slug: 'natural-logarithm-rearranging',
        description: 'Explore gradients, optimisation and rates of change.',
      },
      {
        title: 'Simplifying Logarithmic Expressions',
        slug: 'simplifying-logarithmic-expressions',
        description: 'Study antiderivatives, definite integrals and area.',
      },
      {
        title: 'Laws of Logarithms – Key Properties',
        slug: 'laws-of-logarithms-key-properties',
        description:
          'Every log simplification uses the same small set of log properties. These questions practise the properties of logarithms one at a time, then together.',
      },
      {
        title: 'Solving Exponential Equations (exact form)',
        slug: 'solving-exponential-equations-exact-form',
        description:
          'Exponential equations with an unknown in the power are solved with logarithms. These questions practise solving exponential equations and leaving the answer exact.',
      },
      {
        title: 'Real-World Applications – Exponential Decay',
        slug: 'real-world-applications-exponential-decay',
        description:
          'Exponential decay reduces a quantity by the same factor each period. These questions model radioactive decay, cooling and falling values.',
      },
      {
        title: 'Real-World Applications – Exponential Growth',
        slug: 'real-world-applications-exponential-growth',
        description:
          'Exponential growth increases a quantity by the same factor each period. These questions apply the exponential growth formula to populations, bacteria and investments.',
      },
      {
        title: 'Real-World Applications – Logarithmic Scale',
        slug: 'real-world-applications-logarithmic-scale',
        description:
          'A logarithmic scale turns multiplication into addition, so each step is a fixed factor. These questions use decibels, the Richter scale and pH.',
      },
      {
        title: 'Exponential Models',
        slug: 'exponential-models',
        description:
          'These exponential function examples come from real data: build a model, use it to predict values, and explain what each parameter means.',
      },
    ],
  },
]

// export const AASLQuestionAndAnswer = [
//   {
//     number: {
//       title: 'Number',
//       'standard-form': [
//         {
//           id: 1,
//           question: 'Write 3.2 × 10⁴ as a normal number.',
//           type: 'Easy',
//           explaination: 'Move the decimal point 4 places to the right: 3.2 × 10⁴ = 32,000',
//           answer: '32,000',
//         },
//         {
//           id: 2,
//           question: 'Write 6.92 × 10⁶ as a normal number.',
//           type: 'Easy',
//           explaination: 'Move the decimal point 6 places to the right: 6.92 × 10⁶ = 6,920,000',
//           answer: '6,920,000',
//         },
//         {
//           id: 3,
//           question: 'Write 4.8 × 10⁻² as a decimal.',
//           type: 'Medium',
//           explaination: 'Move the decimal point 2 places to the left: 4.8 × 10⁻² = 0.048',
//           answer: '0.048',
//         },
//         {
//           id: 4,
//           question: 'Write 9.85 × 10⁻⁴ as a decimal.',
//           type: 'Hard',
//           explaination: 'Move the decimal point 4 places to the left: 9.85 × 10⁻⁴ = 0.000985',
//           answer: '0.000985',
//         },
//       ],
//       'writing-in-standard-form': [
//         {
//           id: 1,
//           question: 'Write the value 612.07 in standard index form.',
//           type: 'Easy',
//           explaination:
//             'Move the decimal point 2 places to the left to get a number between 1 and 10: 612.07 = 6.1207 × 10²',
//           answer: '6.1207 × 10²',
//         },
//         {
//           id: 2,
//           question: 'Write the value 3076.91 in standard index form.',
//           type: 'Easy',
//           explaination:
//             'Move the decimal point 3 places to the left to get a number between 1 and 10: 3076.91 = 3.07691 × 10³',
//           answer: '3.07691 × 10³',
//         },
//         {
//           id: 3,
//           question: 'Write the value 0.0030617 in standard index form.',
//           type: 'Easy',
//           explaination:
//             'Move the decimal point 3 places to the right to get a number between 1 and 10: 0.0030617 = 3.0617 × 10⁻³',
//           answer: '3.0617 × 10⁻³',
//         },
//         {
//           id: 4,
//           question: 'Write the value 0.02219 in standard index form.',
//           type: 'Easy',
//           explaination:
//             'Move the decimal point 2 places to the right to get a number between 1 and 10: 0.02219 = 2.219 × 10⁻²',
//           answer: '2.219 × 10⁻²',
//         },
//       ],
//       'multiplying-in-standard-form': [
//         {
//           id: 1,
//           question:
//             'Write (2 × 10⁴) × (3.4 × 10³) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination:
//             'Multiply the coefficients: 2 × 3.4 = 6.8. Add the powers: 10⁴⁺³ = 10⁷. Result: 6.8 × 10⁷',
//           answer: '6.8 × 10⁷',
//         },
//         {
//           id: 2,
//           question:
//             'Write (3.2 × 10⁵) × (3 × 10⁶) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination:
//             'Multiply the coefficients: 3.2 × 3 = 9.6. Add the powers: 10⁵⁺⁶ = 10¹¹. Result: 9.6 × 10¹¹',
//           answer: '9.6 × 10¹¹',
//         },
//         {
//           id: 3,
//           question: 'Write (5 × 10⁴) × (2 × 10⁻⁵) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Multiply the coefficients: 5 × 2 = 10. Add the powers: 10⁴⁺⁽⁻⁵⁾ = 10⁻¹. Then, 10 × 10⁻¹ = 1 × 10⁰ = 1.',
//           answer: '1',
//         },
//         {
//           id: 4,
//           question:
//             'Write (3 × 10⁻²) × (4 × 10⁻⁴) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Multiply the coefficients: 3 × 4 = 12. Add the powers: 10⁻²⁺⁽⁻⁴⁾ = 10⁻⁶. Then, 12 × 10⁻⁶ = 1.2 × 10⁻⁵.',
//           answer: '1.2 × 10⁻⁵',
//         },
//       ],
//       'squaring-in-standard-form': [
//         {
//           id: 1,
//           question: 'Write (5 × 10¹⁰)² in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Square the coefficient: 5² = 25. Square the power of 10: (10¹⁰)² = 10²⁰. Then, 25 × 10²⁰ = 2.5 × 10²¹.',
//           answer: '2.5 × 10²¹',
//         },
//         {
//           id: 2,
//           question: 'Write (6 × 10⁶)² in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Square the coefficient: 6² = 36. Square the power of 10: (10⁶)² = 10¹². Then, 36 × 10¹² = 3.6 × 10¹³.',
//           answer: '3.6 × 10¹³',
//         },
//       ],
//       'dividing-in-standard-form': [
//         {
//           id: 1,
//           question: 'Write (6 × 10²) ÷ (3 × 10⁴) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination:
//             'Divide the coefficients: 6 ÷ 3 = 2. Subtract the powers: 10²⁻⁴ = 10⁻². Result: 2 × 10⁻².',
//           answer: '2 × 10⁻²',
//         },
//         {
//           id: 2,
//           question: 'Write (8 × 10⁶) ÷ (2 × 10¹⁰) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination:
//             'Divide the coefficients: 8 ÷ 2 = 4. Subtract the powers: 10⁶⁻¹⁰ = 10⁻⁴. Result: 4 × 10⁻⁴.',
//           answer: '4 × 10⁻⁴',
//         },
//         {
//           id: 3,
//           question: 'Write (1 × 10⁵) ÷ (2 × 10⁴) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Divide the coefficients: 1 ÷ 2 = 0.5. Subtract the powers: 10⁵⁻⁴ = 10¹. Then, 0.5 × 10¹ = 5 × 10⁰ = 5.',
//           answer: '5',
//         },
//         {
//           id: 4,
//           question: 'Write (2 × 10⁵) ÷ (8 × 10²) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Divide the coefficients: 2 ÷ 8 = 0.25. Subtract the powers: 10⁵⁻² = 10³. Then, 0.25 × 10³ = 2.5 × 10².',
//           answer: '2.5 × 10²',
//         },
//         {
//           id: 5,
//           question:
//             'Write (8.4 × 10¹⁴) ÷ (4 × 10³) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Divide the coefficients: 8.4 ÷ 4 = 2.1. Subtract the powers: 10¹⁴⁻³ = 10¹¹. Result: 2.1 × 10¹¹.',
//           answer: '2.1 × 10¹¹',
//         },
//         {
//           id: 6,
//           question:
//             'Write (9.3 × 10¹⁵) ÷ (3 × 10⁶) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Divide the coefficients: 9.3 ÷ 3 = 3.1. Subtract the powers: 10¹⁵⁻⁶ = 10⁹. Result: 3.1 × 10⁹.',
//           answer: '3.1 × 10⁹',
//         },
//       ],
//     },
//   },
//   {
//     'sequences-and-series': {
//       title: 'Sequences and Series',
//       'arithmetic-sequences-nth-term': [
//         {
//           id: 1,
//           question: 'Given u₁ = 5 and d = 4, find u₁₂.',
//           type: 'Easy',
//           explaination: 'Use uₙ = u₁ + (n − 1)d. u₁₂ = 5 + 11 × 4 = 5 + 44 = 49.',
//           answer: 'u₁₂ = 49',
//         },
//         {
//           id: 2,
//           question: 'Given u₁ = 11 and d = 3, find u₂₀.',
//           type: 'Easy',
//           explaination: 'u₂₀ = 11 + 19 × 3 = 11 + 57 = 68.',
//           answer: 'u₂₀ = 68',
//         },
//         {
//           id: 3,
//           question: 'Given u₁ = 13 and d = −7, find u₆.',
//           type: 'Easy',
//           explaination: 'u₆ = 13 + 5 × (−7) = 13 − 35 = −22.',
//           answer: 'u₆ = −22',
//         },
//         {
//           id: 4,
//           question: 'Given u₁ = 11 and d = −3, find u₁₈.',
//           type: 'Easy',
//           explaination: 'u₁₈ = 11 + 17 × (−3) = 11 − 51 = −40.',
//           answer: 'u₁₈ = −40',
//         },
//       ],
//       'finding-common-difference': [
//         {
//           id: 1,
//           question: 'Given u₁ = 7 and u₅ = 15, find the common difference d.',
//           type: 'Easy',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₅ = 7 + 4d. Therefore, 15 = 7 + 4d → 4d = 8 → d = 2.',
//           answer: 'd = 2',
//         },
//         {
//           id: 2,
//           question: 'Given u₁ = 19 and u₉ = 75, find the common difference d.',
//           type: 'Easy',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₉ = 19 + 8d. Therefore, 75 = 19 + 8d → 8d = 56 → d = 7.',
//           answer: 'd = 7',
//         },
//         {
//           id: 3,
//           question: 'Given u₁ = 10 and u₂₁ = 0, find the common difference d.',
//           type: 'Easy',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₂₁ = 10 + 20d. Therefore, 0 = 10 + 20d → 20d = −10 → d = −0.5.',
//           answer: 'd = −0.5',
//         },
//         {
//           id: 4,
//           question: 'Given u₁ = 100 and u₉ = 80, find the common difference d.',
//           type: 'Easy',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₉ = 100 + 8d. Therefore, 80 = 100 + 8d → 8d = −20 → d = −2.5.',
//           answer: 'd = −2.5',
//         },
//       ],
//       'finding-first-term-and-common-difference': [
//         {
//           id: 1,
//           question: 'Given u₈ = 12 and u₁₁ = 33, find u₁ and d.',
//           type: 'Medium',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₁₁ − u₈ = 3d = 33 − 12 = 21, so d = 7. Then u₁ = u₈ − 7d = 12 − 49 = −37.',
//           answer: 'd = 7, u₁ = −37',
//         },
//         {
//           id: 2,
//           question: 'Given u₇ = 11 and u₁₂ = 56, find u₁ and d.',
//           type: 'Medium',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₁₂ − u₇ = 5d = 56 − 11 = 45, so d = 9. Then u₁ = u₇ − 6d = 11 − 54 = −43.',
//           answer: 'd = 9, u₁ = −43',
//         },
//       ],
//       'formula-for-nth-term': [
//         {
//           id: 1,
//           question:
//             'Given u₁ = 8 and d = −3, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination: 'Use uₙ = u₁ + (n − 1)d. uₙ = 8 + (n − 1)(−3) = 8 − 3n + 3 = 11 − 3n.',
//           answer: 'uₙ = 11 − 3n',
//         },
//         {
//           id: 2,
//           question:
//             'Given u₁ = 10 and d = 4, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Easy',
//           explaination: 'Use uₙ = u₁ + (n − 1)d. uₙ = 10 + (n − 1)(4) = 10 + 4n − 4 = 4n + 6.',
//           answer: 'uₙ = 4n + 6',
//         },
//         {
//           id: 3,
//           question:
//             'Given u₁ = 3 and u₅ = 11, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination:
//             'Use u₅ = u₁ + 4d. 11 = 3 + 4d → 4d = 8 → d = 2. Then uₙ = 3 + (n − 1)(2) = 2n + 1.',
//           answer: 'uₙ = 2n + 1',
//         },
//         {
//           id: 4,
//           question:
//             'Given u₁ = 10 and u₁₁ = 50, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination:
//             'Use u₁₁ = u₁ + 10d. 50 = 10 + 10d → 10d = 40 → d = 4. Then uₙ = 10 + (n − 1)(4) = 4n + 6.',
//           answer: 'uₙ = 4n + 6',
//         },
//         {
//           id: 5,
//           question:
//             'Given u₂ = 6 and u₅ = 21, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination:
//             'Find the common difference: 3d = 21 − 6 = 15 → d = 5. Then u₁ = u₂ − d = 6 − 5 = 1. Therefore, uₙ = 1 + (n − 1)(5) = 5n − 4.',
//           answer: 'uₙ = 5n − 4',
//         },
//         {
//           id: 6,
//           question:
//             'Given u₃ = 14 and u₆ = −15, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Hard',
//           explaination:
//             'Find the common difference: 3d = −15 − 14 = −29 → d = −29/3. Then u₁ = u₃ − 2d = 14 − 2(−29/3) = 100/3. Therefore, uₙ = 100/3 + (n − 1)(−29/3) = (129 − 29n)/3.',
//           answer: 'uₙ = (129 − 29n)/3',
//         },
//       ],
//     },
//   },
//   {
//     'financial-mathematics': {
//       title: 'Financial Mathematics',
//       'compound-interest-annual': [
//         {
//           id: 1,
//           question:
//             'Find the final value of the investment: $2000 invested at 6% compounded annually for 3 years.',
//           type: 'Easy',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. FV = 2000 × (1 + 0.06)³ = 2000 × 1.191016 = $2382.03.',
//           answer: '$2382.03',
//         },
//         {
//           id: 2,
//           question:
//             'Find the final value of the investment: $3000 invested at 4% compounded annually for 18 years.',
//           type: 'Easy',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. FV = 3000 × (1.04)¹⁸ ≈ 3000 × 2.02582 = $6077.45.',
//           answer: '$6077.45',
//         },
//         {
//           id: 3,
//           question:
//             'Find the final value of the investment: $500 invested at 2.5% compounded quarterly for 6 years.',
//           type: 'Easy',
//           explaination:
//             'For quarterly compounding, use FV = PV(1 + r/k)ⁿᵏ. FV = 500 × (1 + 0.025/4)²⁴ = 500 × (1.00625)²⁴ ≈ $580.95.',
//           answer: '$580.95',
//         },
//         {
//           id: 4,
//           question:
//             'Find the final value of the investment: $100 invested at 3.5% compounded twice-yearly for 10 years.',
//           type: 'Easy',
//           explaination:
//             'For twice-yearly compounding, use FV = PV(1 + r/k)ⁿᵏ. FV = 100 × (1 + 0.035/2)²⁰ = 100 × (1.0175)²⁰ ≈ $141.48.',
//           answer: '$141.48',
//         },
//         {
//           id: 5,
//           question:
//             'Find the final value of the investment: $5000 invested at 5% compounded monthly for 60 months.',
//           type: 'Easy',
//           explaination:
//             'For monthly compounding, use FV = PV(1 + r/12)ⁿ, where n is the total number of months. FV = 5000 × (1 + 0.05/12)⁶⁰ ≈ $6416.79.',
//           answer: '$6416.79',
//         },
//         {
//           id: 6,
//           question:
//             'Find the final value of the investment: $800 invested at 4% compounded monthly for 100 months.',
//           type: 'Easy',
//           explaination:
//             'For monthly compounding, use FV = PV(1 + r/12)ⁿ. FV = 800 × (1 + 0.04/12)¹⁰⁰ ≈ $1116.39.',
//           answer: '$1116.39',
//         },
//       ],
//       'time-to-reach-a-target-value': [
//         {
//           id: 1,
//           question:
//             'Find how long is required to achieve the given final value: $100 invested at 5% compounded annually. £1000 is required.',
//           type: 'Medium',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 100 × (1.05)ⁿ = 1000 → (1.05)ⁿ = 10. Taking logarithms, n = ln(10) / ln(1.05) ≈ 47.6 years. Treat both currency symbols as the same unit.',
//           answer: 'n ≈ 47.6 years',
//         },
//         {
//           id: 2,
//           question:
//             'Find how long is required to achieve the given final value: $500 invested at 4% compounded annually. £600 is required.',
//           type: 'Easy',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 500 × (1.04)ⁿ = 600 → (1.04)ⁿ = 1.2. Taking logarithms, n = ln(1.2) / ln(1.04) ≈ 4.64 years. Treat both currency symbols as the same unit.',
//           answer: 'n ≈ 4.64 years',
//         },
//         {
//           id: 3,
//           question:
//             'Find how long is required to achieve the given final value: $300 invested at 2% compounded monthly. £400 is required.',
//           type: 'Medium',
//           explaination:
//             'For monthly compounding, use FV = PV(1 + r/12)ⁿ, where n is the number of months. 300 × (1 + 0.02/12)ⁿ = 400 → n = ln(4/3) / ln(1 + 0.02/12) ≈ 172.1 months. Converting to years, 172.1 / 12 ≈ 14.3 years. Treat both currency symbols as the same unit.',
//           answer: 'n ≈ 172.1 months ≈ 14.3 years',
//         },
//         {
//           id: 4,
//           question:
//             'Find how long is required to achieve the given final value: $1000 invested at 1.5% compounded monthly. £1100 is required.',
//           type: 'Medium',
//           explaination:
//             'For monthly compounding, use FV = PV(1 + r/12)ⁿ, where n is the number of months. 1000 × (1 + 0.015/12)ⁿ = 1100. Taking logarithms, n = ln(1.1) / ln(1 + 0.015/12) ≈ 76.3 months. Converting to years, 76.3 / 12 ≈ 6.4 years. Treat both currency symbols as the same unit.',
//           answer: 'n ≈ 76.3 months ≈ 6.4 years',
//         },
//       ],
//       'finding-the-interest-rate': [
//         {
//           id: 1,
//           question:
//             'Find the annual interest rate required (compounded annually): €500 invested for 10 years. €1000 is required.',
//           type: 'Medium',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 500(1 + r)¹⁰ = 1000 → (1 + r)¹⁰ = 2 → 1 + r = 2^(1/10). Therefore, r = 2^(0.1) − 1 ≈ 0.0718 = 7.18%.',
//           answer: 'r ≈ 7.18%',
//         },
//         {
//           id: 2,
//           question:
//             'Find the annual interest rate required (compounded annually): €500 invested for 10 years. €800 is required.',
//           type: 'Medium',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 500(1 + r)¹⁰ = 800 → (1 + r)¹⁰ = 1.6 → 1 + r = 1.6^(1/10). Therefore, r = 1.6^(0.1) − 1 ≈ 0.0481 = 4.81%.',
//           answer: 'r ≈ 4.81%',
//         },
//         {
//           id: 3,
//           question:
//             'Find the annual interest rate required (compounded annually): €100 invested for 5 years. €200 is required.',
//           type: 'Medium',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 100(1 + r)⁵ = 200 → (1 + r)⁵ = 2 → 1 + r = 2^(1/5). Therefore, r = 2^(1/5) − 1 ≈ 0.1487 = 14.87%.',
//           answer: 'r ≈ 14.87%',
//         },
//         {
//           id: 4,
//           question:
//             'Find the annual interest rate required (compounded annually): €100 invested for 10 years. €200 is required.',
//           type: 'Medium',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 100(1 + r)¹⁰ = 200 → (1 + r)¹⁰ = 2 → 1 + r = 2^(1/10). Therefore, r = 2^(0.1) − 1 ≈ 0.0718 = 7.18%.',
//           answer: 'r ≈ 7.18%',
//         },
//       ],
//       depreciation: [
//         {
//           id: 1,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value $1200, annual depreciation 10% for 10 years.',
//           type: 'Easy',
//           explaination:
//             'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 1200 × (1 − 0.10)¹⁰ = 1200 × (0.9)¹⁰ ≈ $418.42.',
//           answer: '$418.42',
//         },
//         {
//           id: 2,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value $1200, annual depreciation 20% for 10 years.',
//           type: 'Easy',
//           explaination:
//             'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 1200 × (1 − 0.20)¹⁰ = 1200 × (0.8)¹⁰ ≈ $128.85.',
//           answer: '$128.85',
//         },
//         {
//           id: 3,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value £30,000, annual depreciation 15% for 5 years.',
//           type: 'Easy',
//           explaination:
//             'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 30000 × (1 − 0.15)⁵ = 30000 × (0.85)⁵ ≈ £13,311.22.',
//           answer: '£13,311.22',
//         },
//         {
//           id: 4,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value £30,000, annual depreciation 25% for 5 years.',
//           type: 'Easy',
//           explaination:
//             'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 30000 × (1 − 0.25)⁵ = 30000 × (0.75)⁵ ≈ £7,119.14.',
//           answer: '£7,119.14',
//         },
//       ],
//     },
//   },
//   {
//     'number-algebra': {
//       title: 'Number & Algebra',
//       'laws-of-indices-multiplication': [
//         {
//           id: 1,
//           question: 'Simplify: a) x² × x⁴  b) x⁵ × x⁷',
//           type: 'Easy',
//           explaination: 'Use the index law aᵐ × aⁿ = aᵐ⁺ⁿ. a) x²⁺⁴ = x⁶. b) x⁵⁺⁷ = x¹².',
//           answer: 'a) x⁶  b) x¹²',
//         },
//         {
//           id: 2,
//           question: 'Simplify: a) y³ × y³  b) z⁵ × z⁵',
//           type: 'Easy',
//           explaination:
//             'When multiplying powers with the same base, add the exponents. a) y³⁺³ = y⁶. b) z⁵⁺⁵ = z¹⁰.',
//           answer: 'a) y⁶  b) z¹⁰',
//         },
//         {
//           id: 3,
//           question: 'Simplify: a) a⁶ × a  b) a¹⁰ × a',
//           type: 'Easy',
//           explaination:
//             'Recall that a = a¹. Add the exponents when multiplying powers with the same base. a) a⁶⁺¹ = a⁷. b) a¹⁰⁺¹ = a¹¹.',
//           answer: 'a) a⁷  b) a¹¹',
//         },
//         {
//           id: 4,
//           question: 'Simplify (do not evaluate): a) 5⁷ × 5¹⁰  b) 2¹² × 2¹²',
//           type: 'Easy',
//           explaination:
//             'Use the index law aᵐ × aⁿ = aᵐ⁺ⁿ. a) 5⁷⁺¹⁰ = 5¹⁷. b) 2¹²⁺¹² = 2²⁴. Leave the answers in index form without evaluating.',
//           answer: 'a) 5¹⁷  b) 2²⁴',
//         },
//       ],
//       'laws-of-indices-power-of-a-power': [
//         {
//           id: 1,
//           question: 'Simplify: a) (x³)⁵  b) (x⁴)⁸',
//           type: 'Easy',
//           explaination:
//             'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (x³)⁵ = x³ˣ⁵ = x¹⁵. b) (x⁴)⁸ = x⁴ˣ⁸ = x³².',
//           answer: 'a) x¹⁵  b) x³²',
//         },
//         {
//           id: 2,
//           question: 'Simplify: a) (y⁴)⁴  b) (z⁵)⁵',
//           type: 'Easy',
//           explaination:
//             'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (y⁴)⁴ = y⁴ˣ⁴ = y¹⁶. b) (z⁵)⁵ = z⁵ˣ⁵ = z²⁵.',
//           answer: 'a) y¹⁶  b) z²⁵',
//         },
//         {
//           id: 3,
//           question: 'Simplify: a) (c⁷)²  b) (c²)⁷',
//           type: 'Easy',
//           explaination:
//             'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (c⁷)² = c⁷ˣ² = c¹⁴. b) (c²)⁷ = c²ˣ⁷ = c¹⁴. Both expressions have the same answer because 7 × 2 = 2 × 7.',
//           answer: 'a) c¹⁴  b) c¹⁴',
//         },
//         {
//           id: 4,
//           question: 'Simplify (do not evaluate): a) (3⁵)¹⁰  b) (13⁷)⁴',
//           type: 'Easy',
//           explaination:
//             'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (3⁵)¹⁰ = 3⁵ˣ¹⁰ = 3⁵⁰. b) (13⁷)⁴ = 13⁷ˣ⁴ = 13²⁸. Leave the answers in index form without evaluating.',
//           answer: 'a) 3⁵⁰  b) 13²⁸',
//         },
//       ],
//       'laws-of-indices-coefficient-variable-combined': [
//         {
//           id: 1,
//           question: 'Simplify: a) 12x² × 4x⁵  b) 3x⁴ × 5x³',
//           type: 'Easy',
//           explaination:
//             'Multiply the coefficients and add the indices of variables with the same base. a) (12 × 4)x²⁺⁵ = 48x⁷. b) (3 × 5)x⁴⁺³ = 15x⁷.',
//           answer: 'a) 48x⁷  b) 15x⁷',
//         },
//         {
//           id: 2,
//           question: 'Simplify: a) a × 3a²  b) b² × 5b²',
//           type: 'Easy',
//           explaination:
//             'Recall that a = a¹. Multiply the coefficients and add the indices of variables with the same base. a) 3 × a¹⁺² = 3a³. b) 5 × b²⁺² = 5b⁴.',
//           answer: 'a) 3a³  b) 5b⁴',
//         },
//       ],
//       'laws-of-indices-multi-variable': [
//         {
//           id: 1,
//           question: 'Simplify: a) 5x²yz × 4x³y²  b) 6x⁷yz² × 2xz³',
//           type: 'Medium',
//           explaination:
//             'Multiply the coefficients and add the indices of variables with the same base. a) (5 × 4)x²⁺³y¹⁺²z = 20x⁵y³z. b) (6 × 2)x⁷⁺¹yz²⁺³ = 12x⁸yz⁵.',
//           answer: 'a) 20x⁵y³z  b) 12x⁸yz⁵',
//         },
//       ],
//     },
//   },
//   {
//     'logarithms-exponentials': {
//       title: 'Logarithms & Exponentials',
//       'evaluating-logarithms': [
//         {
//           id: 1,
//           question: 'Without using a calculator, find the exact value of: log 10',
//           type: 'Easy',
//           explaination: 'log 10 = 1 since 10¹ = 10.',
//           answer: '1',
//         },
//         {
//           id: 2,
//           question: 'Without using a calculator, find the exact value of: log 100',
//           type: 'Easy',
//           explaination: 'log 100 = 2 since 10² = 100.',
//           answer: '2',
//         },
//         {
//           id: 3,
//           question: 'Without using a calculator, find the exact value of: log 100,000',
//           type: 'Easy',
//           explaination: 'Since 100,000 = 10⁵, log 10⁵ = 5.',
//           answer: '5',
//         },
//         {
//           id: 4,
//           question: 'Without using a calculator, find the exact value of: log 1,000,000',
//           type: 'Easy',
//           explaination: 'Since 1,000,000 = 10⁶, log 10⁶ = 6.',
//           answer: '6',
//         },
//         {
//           id: 5,
//           question: 'Without using a calculator, find the exact value of: log 1',
//           type: 'Easy',
//           explaination: 'log 1 = 0 since 10⁰ = 1.',
//           answer: '0',
//         },
//         {
//           id: 6,
//           question: 'Without using a calculator, find the exact value of: log 0.1',
//           type: 'Easy',
//           explaination: 'Since 0.1 = 10⁻¹, log 0.1 = -1.',
//           answer: '-1',
//         },
//         {
//           id: 7,
//           question: 'Without using a calculator, find the exact value of: log 0.01',
//           type: 'Easy',
//           explaination: 'Since 0.01 = 10⁻², log 0.01 = -2.',
//           answer: '-2',
//         },
//         {
//           id: 8,
//           question: 'Without using a calculator, find the exact value of: log 0.0001',
//           type: 'Easy',
//           explaination: 'Since 0.0001 = 10⁻⁴, log 0.0001 = -4.',
//           answer: '-4',
//         },
//       ],
//       'solving-logarithmic-equations': [
//         {
//           id: 1,
//           question: 'Without using a calculator, find the exact value of x: log x = 2',
//           type: 'Easy',
//           explaination: 'log x = 2 ⇒ x = 10² = 100.',
//           answer: 'x = 100',
//         },
//         {
//           id: 2,
//           question: 'Without using a calculator, find the exact value of x: log x = 3',
//           type: 'Easy',
//           explaination: 'log x = 3 ⇒ x = 10³ = 1000.',
//           answer: 'x = 1000',
//         },
//         {
//           id: 3,
//           question: 'Without using a calculator, find the exact value of x: log(2x - 4) = 5',
//           type: 'Medium',
//           explaination: '2x - 4 = 10⁵ = 100000. Therefore, 2x = 100004 and x = 50002.',
//           answer: 'x = 50002',
//         },
//         {
//           id: 4,
//           question: 'Without using a calculator, find the exact value of x: log(3x + 4) = 3',
//           type: 'Medium',
//           explaination: '3x + 4 = 10³ = 1000. Therefore, 3x = 996 and x = 332.',
//           answer: 'x = 332',
//         },
//         {
//           id: 5,
//           question: 'Without using a calculator, find the exact value of x: log(2x - 3) = -1',
//           type: 'Medium',
//           explaination: '2x - 3 = 10⁻¹ = 0.1. Therefore, 2x = 3.1 and x = 1.55 = 31/20.',
//           answer: 'x = 31/20',
//         },
//         {
//           id: 6,
//           question: 'Without using a calculator, find the exact value of x: log(x + 2) = -2',
//           type: 'Medium',
//           explaination: 'x + 2 = 10⁻² = 0.01. Therefore, x = 0.01 - 2 = -1.99 = -199/100.',
//           answer: 'x = -199/100',
//         },
//       ],
//       'natural-logarithm-rearranging': [
//         {
//           id: 1,
//           question: 'Rearrange the equation to find an expression for x: ln x = 2',
//           type: 'Easy',
//           explaination: 'ln x = 2 ⇒ x = e².',
//           answer: 'x = e²',
//         },
//         {
//           id: 2,
//           question: 'Rearrange the equation to find an expression for x: ln x = 5',
//           type: 'Easy',
//           explaination: 'ln x = 5 ⇒ x = e⁵.',
//           answer: 'x = e⁵',
//         },
//         {
//           id: 3,
//           question: 'Rearrange the equation to find an expression for x: ln x = y + 1',
//           type: 'Easy',
//           explaination: 'ln x = y + 1 ⇒ x = eʸ⁺¹.',
//           answer: 'x = e^(y + 1)',
//         },
//         {
//           id: 4,
//           question: 'Rearrange the equation to find an expression for x: ln x = y²',
//           type: 'Easy',
//           explaination: 'ln x = y² ⇒ x = eʸ².',
//           answer: 'x = e^(y²)',
//         },
//         {
//           id: 5,
//           question: 'Rearrange the equation to find an expression for x: ln(2x + 4) = y - 3',
//           type: 'Medium',
//           explaination:
//             '2x + 4 = e^(y - 3). Therefore, 2x = e^(y - 3) - 4, so x = (e^(y - 3) - 4)/2.',
//           answer: 'x = (e^(y - 3) - 4)/2',
//         },
//         {
//           id: 6,
//           question: 'Rearrange the equation to find an expression for x: ln((1/2)x - 6) = 2y + 1',
//           type: 'Medium',
//           explaination:
//             '(1/2)x - 6 = e^(2y + 1). Therefore, (1/2)x = e^(2y + 1) + 6, so x = 2e^(2y + 1) + 12.',
//           answer: 'x = 2e^(2y + 1) + 12',
//         },
//       ],
//       'simplifying-logarithmic-expressions': [
//         {
//           id: 1,
//           question: 'Simplify the expression: log x + 4 log x',
//           type: 'Easy',
//           explaination: 'Collect like terms: (1 + 4) log x = 5 log x.',
//           answer: '5 log x',
//         },
//         {
//           id: 2,
//           question: 'Simplify the expression: 10 log x - 5 log x',
//           type: 'Easy',
//           explaination: 'Collect like terms: (10 - 5) log x = 5 log x.',
//           answer: '5 log x',
//         },
//         {
//           id: 3,
//           question: 'Simplify the expression: 2(log 3x)² / log 3x',
//           type: 'Medium',
//           explaination:
//             'Cancel one factor of log 3x: 2(log 3x)² / log 3x = 2 log 3x, assuming log 3x ≠ 0.',
//           answer: '2 log 3x',
//         },
//         {
//           id: 4,
//           question: 'Simplify the expression: log 2x / (log 2x)²',
//           type: 'Medium',
//           explaination:
//             'Cancel one factor of log 2x: log 2x / (log 2x)² = 1 / log 2x, assuming log 2x ≠ 0.',
//           answer: '1 / log 2x',
//         },
//         {
//           id: 5,
//           question: 'Simplify the expression: (ln x + (ln x)²) / ln x - ln x',
//           type: 'Hard',
//           explaination:
//             '(ln x + (ln x)²) / ln x = 1 + ln x. Therefore, (1 + ln x) - ln x = 1, assuming ln x ≠ 0 (x ≠ 1).',
//           answer: '1',
//         },
//         {
//           id: 6,
//           question: 'Simplify the expression: (ln x - (ln x)³) / (ln x)² + ln x',
//           type: 'Hard',
//           explaination:
//             'Factor the numerator: ln x(1 - (ln x)²) / (ln x)² + ln x = (1 - (ln x)²) / ln x + ln x. Combining the terms gives [1 - (ln x)² + (ln x)²] / ln x = 1 / ln x, assuming ln x ≠ 0 (x > 0 and x ≠ 1).',
//           answer: '1 / ln x',
//         },
//       ],
//     },
//   },
// ]
export const AASLQuestionAndAnswer = [
  {
    number: {
      title: 'Number',
      'standard-form': [
        {
          id: 1,
          question: 'Write 3.2 × 10⁴ as a normal number.',
          type: 'Easy',
          explaination: 'Move decimal 4 places right: 3.2 × 10⁴ = 32,000',
          answer: '32,000',
        },
        {
          id: 2,
          question: 'Write 6.92 × 10⁶ as a normal number.',
          type: 'Easy',
          explaination: 'Move decimal 6 places right: 6.92 × 10⁶ = 6,920,000',
          answer: '6,920,000',
        },
        {
          id: 3,
          question: 'Write 4.8 × 10⁻² as a decimal.',
          type: 'Easy',
          explaination: 'Move decimal 2 places left: 4.8 × 10⁻² = 0.048',
          answer: '0.048',
        },
        {
          id: 4,
          question: 'Write 9.85 × 10⁻⁴ as a decimal.',
          type: 'Easy',
          explaination: 'Move decimal 4 places left: 9.85 × 10⁻⁴ = 0.000985',
          answer: '0.000985',
        },
      ],
      'writing-in-standard-form': [
        {
          id: 1,
          question: 'Write the value 612.07 in standard index form.',
          type: 'Easy',
          explaination:
            'Identify leading digit; count places to move decimal: 612.07 = 6.1207 × 10²',
          answer: '6.1207 × 10²',
        },
        {
          id: 2,
          question: 'Write the value 3076.91 in standard index form.',
          type: 'Easy',
          explaination: '3076.91 = 3.07691 × 10³',
          answer: '3.07691 × 10³',
        },
        {
          id: 3,
          question: 'Write the value 0.0030617 in standard index form.',
          type: 'Easy',
          explaination: '0.0030617 = 3.0617 × 10⁻³',
          answer: '3.0617 × 10⁻³',
        },
        {
          id: 4,
          question: 'Write the value 0.02219 in standard index form.',
          type: 'Easy',
          explaination: '0.02219 = 2.219 × 10⁻²',
          answer: '2.219 × 10⁻²',
        },
      ],
      'multiplying-in-standard-form': [
        {
          id: 1,
          question:
            'Write (2 × 10⁴) × (3.4 × 10³) in standard index form. Do not use a calculator.',
          type: 'Easy',
          explaination:
            'Multiply coefficients: 2 × 3.4 = 6.8\nAdd powers: 10⁴⁺³ = 10⁷\nResult: 6.8 × 10⁷',
          answer: '6.8 × 10⁷',
        },
        {
          id: 2,
          question:
            'Write (3.2 × 10⁵) × (3 × 10⁶) in standard index form. Do not use a calculator.',
          type: 'Easy',
          explaination: '3.2 × 3 = 9.6; 10⁵⁺⁶=10¹¹\nResult: 9.6 × 10¹¹',
          answer: '9.6 × 10¹¹',
        },
        {
          id: 3,
          question: 'Write (5 × 10⁴) × (2 × 10⁻⁵) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '5 × 2 = 10; 10⁴⁺⁽⁻⁵⁾=10⁻¹\n10 × 10⁻¹ = 1 × 10⁰ = 1',
          answer: '1 × 10⁰ = 1',
        },
        {
          id: 4,
          question:
            'Write (3 × 10⁻²) × (4 × 10⁻⁴) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '3 × 4 = 12; 10^(-2+(-4))=10⁻⁶\n12 × 10⁻⁶ = 1.2 × 10⁻⁵',
          answer: '1.2 × 10⁻⁵',
        },
      ],
      'squaring-in-standard-form': [
        {
          id: 1,
          question: 'Write (5 × 10¹⁰)² in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '5² = 25; (10¹⁰)² = 10²⁰\n25 × 10²⁰ = 2.5 × 10²¹',
          answer: '2.5 × 10²¹',
        },
        {
          id: 2,
          question: 'Write (6 × 10⁶)² in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '6² = 36; (10⁶)² = 10¹²\n36 × 10¹² = 3.6 × 10¹³',
          answer: '3.6 × 10¹³',
        },
      ],
      'dividing-in-standard-form': [
        {
          id: 1,
          question: 'Write (6 × 10²)/(3 × 10⁴) in standard index form. Do not use a calculator.',
          type: 'Easy',
          explaination: '6/3 = 2; 10²⁻⁴=10⁻²\nResult: 2 × 10⁻²',
          answer: '2 × 10⁻²',
        },
        {
          id: 2,
          question: 'Write (8 × 10⁶)/(2 × 10¹⁰) in standard index form. Do not use a calculator.',
          type: 'Easy',
          explaination: '8/2=4; 10⁶⁻¹⁰=10⁻⁴\nResult: 4 × 10⁻⁴',
          answer: '4 × 10⁻⁴',
        },
        {
          id: 3,
          question: 'Write (1 × 10⁵)/(2 × 10⁴) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '1/2=0.5; 10⁵⁻⁴=10¹\n0.5 × 10¹ = 5 × 10⁰ = 5',
          answer: '5 × 10⁰ = 5',
        },
        {
          id: 4,
          question: 'Write (2 × 10⁵)/(8 × 10²) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '2/8=0.25; 10⁵⁻²=10³\n0.25 × 10³ = 2.5 × 10²',
          answer: '2.5 × 10²',
        },
        {
          id: 5,
          question:
            'Write (8.4 × 10¹⁴) ÷ (4 × 10³) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '8.4/4=2.1; 10¹⁴⁻³=10¹¹\nResult: 2.1 × 10¹¹',
          answer: '2.1 × 10¹¹',
        },
        {
          id: 6,
          question:
            'Write (9.3 × 10¹⁵) ÷ (3 × 10⁶) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '9.3/3=3.1; 10¹⁵⁻⁶=10⁹\nResult: 3.1 × 10⁹',
          answer: '3.1 × 10⁹',
        },
      ],
      'adding-subtracting-in-standard-form': [
        {
          id: 1,
          question: 'Write 1 × 10⁴ + 2 × 10⁵ in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: 'Convert to same power: 0.1 × 10⁵ + 2 × 10⁵ = 2.1 × 10⁵',
          answer: '2.1 × 10⁵',
        },
        {
          id: 2,
          question: 'Write 3 × 10⁸ + 2 × 10⁶ in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '300 × 10⁶ + 2 × 10⁶ = 302 × 10⁶ = 3.02 × 10⁸',
          answer: '3.02 × 10⁸',
        },
        {
          id: 3,
          question: 'Write 8 × 10⁵ - 4 × 10⁴ in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '80 × 10⁴ - 4 × 10⁴ = 76 × 10⁴ = 7.6 × 10⁵',
          answer: '7.6 × 10⁵',
        },
        {
          id: 4,
          question: 'Write 9 × 10¹⁴ - 9 × 10¹² in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '900 × 10¹² - 9 × 10¹² = 891 × 10¹² = 8.91 × 10¹⁴',
          answer: '8.91 × 10¹⁴',
        },
        {
          id: 5,
          question:
            'Write (2.1 × 10³) + (3.8 × 10⁴) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '0.21 × 10⁴ + 3.8 × 10⁴ = 4.01 × 10⁴',
          answer: '4.01 × 10⁴',
        },
        {
          id: 6,
          question:
            'Write (5.7 × 10¹³) + (4.3 × 10¹²) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination: '57 × 10¹² + 4.3 × 10¹² = 61.3 × 10¹² = 6.13 × 10¹³',
          answer: '6.13 × 10¹³',
        },
      ],
      'proof-multiplication-in-standard-form': [
        {
          id: 1,
          question: 'Show that if a = 4 × 10⁶ and b = 5 × 10⁻³, then a × b = 2 × 10⁴.',
          type: 'Medium',
          explaination: 'a × b = (4 × 10⁶) × (5 × 10⁻³)\n= 20 × 10³ = 2 × 10⁴',
          answer: 'Shown: 20 × 10³ = 2 × 10⁴',
        },
        {
          id: 2,
          question: 'Show that if c = 1.4 × 10³ and d = 5 × 10⁸, then c × d = 7 × 10¹¹.',
          type: 'Medium',
          explaination: 'c × d = (1.4 × 10³) × (5 × 10⁸)\n= 7 × 10¹¹',
          answer: 'Shown: 7 × 10¹¹',
        },
      ],
      'standard-form-multi-part-application': [
        {
          id: 1,
          question:
            'Let p = 12.2 × 10⁷ and q = 3.05 × 10⁵.\na) Write p in the form a × 10ᵏ where 1 ≤ a < 10 and k ∈ ℤ.\nb) Evaluate p/q.\nc) Write your answer to part b in the form a × 10ᵏ where 1 ≤ a < 10 and k ∈ ℤ.',
          type: 'Medium',
          explaination:
            'a) 12.2 × 10⁷ = 1.22 × 10⁸\nb) (12.2 × 10⁷)/(3.05 × 10⁵) = 12.2/3.05 × 10² = 4 × 10² = 400\nc) 4 × 10²',
          answer: 'a) 1.22 × 10⁸\nb) 400\nc) 4 × 10²',
        },
        {
          id: 2,
          question:
            'The area of Africa is approximately 3.04 × 10¹³ m². The area of Europe is approximately 1.02 × 10¹³ m². The population of Africa is approximately 1.2 billion and the population of Europe is 741 million.\na) How many times bigger is Africa than Europe?\nb) Write the population of Europe in the form a × 10ᵏ where 1 ≤ a < 10 and k ∈ ℤ.\nc) Does Africa or Europe have more people per metre squared? Justify your answer.',
          type: 'Hard',
          explaination:
            'a) (3.04 × 10¹³)/(1.02 × 10¹³) = 3.04/1.02 ≈ 2.98\nb) 741 × 10⁶ = 7.41 × 10⁸\nc) Africa: (1.2 × 10⁹)/(3.04 × 10¹³) ≈ 3.95 × 10⁻⁵ per m²\nEurope: (7.41 × 10⁸)/(1.02 × 10¹³) ≈ 7.26 × 10⁻⁵ per m²\nEurope has more people per m².',
          answer:
            'a) Approximately 2.98 times bigger (≈ 3)\nb) 7.41 × 10⁸\nc) Europe has more people per m²',
        },
      ],
      'standard-form-real-world-context': [
        {
          id: 1,
          question:
            'The number of atoms in a balloon is approximately 6 × 10²³. Theoretical physics predicts there are approximately 10⁸⁰ atoms in the known universe. What proportion of atoms in the known universe are found in the balloon?',
          type: 'Hard',
          explaination: 'Proportion = (6 × 10²³)/10⁸⁰ = 6 × 10²³⁻⁸⁰ = 6 × 10⁻⁵⁷',
          answer: '6 × 10⁻⁵⁷',
        },
        {
          id: 2,
          question:
            '12 grams of carbon contains 6.02 × 10²³ atoms. What is the mass (in grams) of one atom of carbon? Give your answer in the form a × 10ᵏ where 1 ≤ a < 10 and k ∈ ℤ.',
          type: 'Hard',
          explaination: 'mass per atom = 12/(6.02 × 10²³) = 12/6.02 × 10⁻²³ ≈ 1.993 × 10⁻²³ g',
          answer: '1.99 × 10⁻²³ g',
        },
        {
          id: 3,
          question:
            'The diameter of a uranium nucleus is approximately 15 fm, where 1 fm = 10⁻¹⁵ m.\na) Write the diameter (in metres) in the form a × 10ᵏ where 1 ≤ a < 10 and k ∈ ℤ.\nThe nucleus is modelled as a sphere with volume V = (1/6)π d³ where d is the diameter.\nb) Estimate the volume of a uranium nucleus in metres cubed.',
          type: 'Hard',
          explaination:
            'a) 15 × 10⁻¹⁵ = 1.5 × 10⁻¹⁴ m\nb) d = 1.5 × 10⁻¹⁴\nd³ = (1.5)³ × 10⁻⁴² = 3.375 × 10⁻⁴²\nV = π/6 × 3.375 × 10⁻⁴² ≈ 1.77 × 10⁻⁴² m³',
          answer: 'a) 1.5 × 10⁻¹⁴ m\nb) V ≈ 1.77 × 10⁻⁴² m³',
        },
      ],
      'generalising-standard-form-algebra': [
        {
          id: 1,
          question:
            'You are given that (3 × 10ᵃ) × (5 × 10ᵇ) = c × 10ᵈ, where 1 ≤ c < 10 and d ∈ ℤ.\na) Find the value of c.\nb) Find an expression for d in terms of a and b.',
          type: 'Hard',
          explaination: '3 × 5 = 15; 10ᵃ⁺ᵇ\n15 × 10ᵃ⁺ᵇ = 1.5 × 10ᵃ⁺ᵇ⁺¹\na) c = 1.5\nb) d = a+b+1',
          answer: 'a) c = 1.5\nb) d = a + b + 1',
        },
        {
          id: 2,
          question:
            'You are given that (2 × 10ᵃ) ÷ (5 × 10ᵇ) = c × 10ᵈ, where 1 ≤ c < 10 and d ∈ ℤ.\na) Find the value of c.\nb) Find an expression for d in terms of a and b.',
          type: 'Hard',
          explaination: '2/5 = 0.4; 10ᵃ⁻ᵇ\n0.4 × 10ᵃ⁻ᵇ = 4 × 10ᵃ⁻ᵇ⁻¹\na) c = 4\nb) d = a-b-1',
          answer: 'a) c = 4\nb) d = a - b - 1',
        },
        {
          id: 3,
          question:
            'x = a × 10ᵖ and y = b × 10^q where 4 < a < b < 9. When written in standard form, xy = c × 10ʳ. Express r in terms of p and q.',
          type: 'Hard',
          explaination:
            'xy = ab × 10^(p+q)\nSince 4 < a < b < 9, we have 16 < ab < 81, so 10 ≤ ab < 100.\nTherefore ab has two digits, and we write ab = ab/10 × 10, giving xy = ab/10 × 10^(p+q+1).\nSince 1 < ab/10 < 10, it is in standard form, so r = p + q + 1.',
          answer: 'r = p + q + 1',
        },
      ],
    },
  },
  {
    'sequences-and-series': {
      title: 'Sequences and Series',
      'arithmetic-sequences-nth-term': [
        {
          id: 1,
          question: 'Given u₁ = 5 and d = 4, find u₁₂.',
          type: 'Easy',
          explaination: 'Use uₙ = u₁ + (n-1)d. u₁₂ = 5 + 11 × 4 = 5 + 44 = 49',
          answer: 'u₁₂ = 49',
        },
        {
          id: 2,
          question: 'Given u₁ = 11 and d = 3, find u₂₀.',
          type: 'Easy',
          explaination: 'u₂₀ = 11 + 19 × 3 = 11 + 57 = 68',
          answer: 'u₂₀ = 68',
        },
        {
          id: 3,
          question: 'Given u₁ = 13 and d = -7, find u₆.',
          type: 'Easy',
          explaination: 'u₆ = 13 + 5 × (-7) = 13 - 35 = -22',
          answer: 'u₆ = -22',
        },
        {
          id: 4,
          question: 'Given u₁ = 11 and d = -3, find u₁₈.',
          type: 'Easy',
          explaination: 'u₁₈ = 11 + 17 × (-3) = 11 - 51 = -40',
          answer: 'u₁₈ = -40',
        },
        {
          id: 5,
          question:
            'An arithmetic sequence has first term 7 and common difference 11. Find the 20th term of the sequence.',
          type: 'Easy',
          explaination: 'u₂₀ = 7 + 19 × 11 = 7 + 209 = 216',
          answer: 'u₂₀ = 216',
        },
        {
          id: 6,
          question:
            'The first term of an arithmetic sequence is 3 and the second term is 7. Find the eighth term of the sequence.',
          type: 'Easy',
          explaination: 'd=4. u₈ = 3 + 7 × 4 = 31',
          answer: 'u₈ = 31',
        },
        {
          id: 7,
          question:
            'In an arithmetic sequence the second term is 13 and the common difference is 5. Write down the first term.',
          type: 'Easy',
          explaination: 'u₁ = u₂ - d = 13 - 5 = 8',
          answer: 'u₁ = 8',
        },
        {
          id: 8,
          question:
            'The first term of an arithmetic sequence is -8 and the common difference is 5. Find the 25th term.',
          type: 'Easy',
          explaination: 'u₂₅ = -8 + 24 × 5 = -8 + 120 = 112',
          answer: 'u₂₅ = 112',
        },
        {
          id: 9,
          question: 'An arithmetic sequence has u₁₀ = 16 and u₃₀ = 156. Find u₅₀.',
          type: 'Hard',
          explaination: '20d = 156-16 = 140 ⇒ d=7. u₁ = 16 - 9(7) = -47. u₅₀ = -47+49(7) = 296',
          answer: 'u₅₀ = 296',
        },
      ],
      'finding-common-difference': [
        {
          id: 1,
          question: 'Given u₁ = 7 and u₅ = 15, find the common difference d.',
          type: 'Easy',
          explaination: 'u₅ = u₁ + 4d ⇒ 15 = 7 + 4d ⇒ 4d = 8 ⇒ d = 2',
          answer: 'd = 2',
        },
        {
          id: 2,
          question: 'Given u₁ = 19 and u₉ = 75, find the common difference d.',
          type: 'Easy',
          explaination: 'u₉ = u₁ + 8d ⇒ 75 = 19 + 8d ⇒ 8d = 56 ⇒ d = 7',
          answer: 'd = 7',
        },
        {
          id: 3,
          question: 'Given u₁ = 10 and u₂₁ = 0, find the common difference d.',
          type: 'Easy',
          explaination: 'u₂₁ = u₁ + 20d ⇒ 0 = 10 + 20d ⇒ d = -1/2',
          answer: 'd = -0.5',
        },
        {
          id: 4,
          question: 'Given u₁ = 100 and u₉ = 80, find the common difference d.',
          type: 'Easy',
          explaination: 'u₉ = u₁ + 8d ⇒ 80 = 100 + 8d ⇒ 8d = -20 ⇒ d = -2.5',
          answer: 'd = -2.5',
        },
        {
          id: 5,
          question:
            'The first term of an arithmetic sequence is 3 and the second term is 7. Write down the common difference.',
          type: 'Easy',
          explaination: 'd = u₂ - u₁ = 7 - 3 = 4',
          answer: 'd = 4',
        },
        {
          id: 6,
          question:
            'The first term of an arithmetic sequence is -8 and the 16th term is 67. Find the common difference.',
          type: 'Easy',
          explaination: 'u₁₆ = -8 + 15d = 67 ⇒ 15d = 75 ⇒ d = 5',
          answer: 'd = 5',
        },
      ],
      'finding-first-term-and-common-difference': [
        {
          id: 1,
          question: 'Given u₈ = 12 and u₁₁ = 33, find u₁ and d.',
          type: 'Medium',
          explaination: 'u₁₁ - u₈ = 3d = 21 ⇒ d = 7. u₁ = u₈ - 7d = 12 - 49 = -37',
          answer: 'd = 7, u₁ = -37',
        },
        {
          id: 2,
          question: 'Given u₇ = 11 and u₁₂ = 56, find u₁ and d.',
          type: 'Medium',
          explaination: 'u₁₂ - u₇ = 5d = 45 ⇒ d = 9. u₁ = 11 - 6 × 9 = -43',
          answer: 'd = 9, u₁ = -43',
        },
        {
          id: 3,
          question:
            'The 7th term of an arithmetic sequence is 35 and the 18th term is 112. Find the common difference and the first term of the sequence.',
          type: 'Medium',
          explaination: '11d = 112 - 35 = 77 ⇒ d = 7. u₁ = 35 - 6 × 7 = -7',
          answer: 'd = 7, u₁ = -7',
        },
      ],
      'formula-for-nth-term': [
        {
          id: 1,
          question:
            'Given u₁ = 8 and d = -3, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination: 'uₙ = 8 + (n-1)(-3) = 8 - 3n + 3 = 11 - 3n',
          answer: 'uₙ = 11 - 3n',
        },
        {
          id: 2,
          question:
            'Given u₁ = 10 and d = 4, find a formula for the nth term of the arithmetic sequence.',
          type: 'Easy',
          explaination: 'uₙ = 10 + (n-1)(4) = 10 + 4n - 4 = 4n + 6',
          answer: 'uₙ = 4n + 6',
        },
        {
          id: 3,
          question:
            'Given u₁ = 3 and u₅ = 11, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination: 'u₅ = 3 + 4d = 11 ⇒ d = 2. uₙ = 3 + (n-1)(2) = 2n + 1',
          answer: 'uₙ = 2n + 1',
        },
        {
          id: 4,
          question:
            'Given u₁ = 10 and u₁₁ = 50, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination: 'u₁₁ = 10 + 10d = 50 ⇒ d = 4. uₙ = 10 + (n-1)(4) = 4n + 6',
          answer: 'uₙ = 4n + 6',
        },
        {
          id: 5,
          question:
            'Given u₂ = 6 and u₅ = 21, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination: '3d = 21 - 6 = 15 ⇒ d = 5. u₁ = 6 - 5 = 1. uₙ = 1 + (n-1)(5) = 5n - 4',
          answer: 'uₙ = 5n - 4',
        },
        {
          id: 6,
          question:
            'Given u₃ = 14 and u₆ = -15, find a formula for the nth term of the arithmetic sequence.',
          type: 'Hard',
          explaination:
            '3d = -15 - 14 = -29 ⇒ d = -29/3. u₁ = 14 - 2d = 100/3. uₙ = 100/3 + (n-1)(-29/3) = (129-29n)/3',
          answer: 'uₙ = (129 - 29n)/3',
        },
      ],
      'arithmetic-series-sum': [
        {
          id: 1,
          question: 'Given u₁ = 9 and d = 4, find S₁₂.',
          type: 'Easy',
          explaination: 'S₁₂ = (12/2)(2 × 9 + 11 × 4) = 6(18 + 44) = 6 × 62 = 372',
          answer: 'S₁₂ = 372',
        },
        {
          id: 2,
          question: 'Given u₁ = 17 and d = 2, find S₂₀.',
          type: 'Easy',
          explaination: 'S₂₀ = (20/2)(2 × 17 + 19 × 2) = 10(34 + 38) = 720',
          answer: 'S₂₀ = 720',
        },
        {
          id: 3,
          question: 'Given u₁ = 34 and d = -7, find S₁₁.',
          type: 'Medium',
          explaination: 'S₁₁ = (11/2)(2 × 34 + 10 × (-7)) = (11/2)(68 - 70) = (11/2)(-2) = -11',
          answer: 'S₁₁ = -11',
        },
        {
          id: 4,
          question: 'Given u₁ = 9 and d = -11, find S₈.',
          type: 'Medium',
          explaination: 'S₈ = (8/2)(2 × 9 + 7 × (-11)) = 4(18 - 77) = 4 × (-59) = -236',
          answer: 'S₈ = -236',
        },
        {
          id: 5,
          question: 'Given u₁ = 7 and u₆ = 32, find S₁₁.',
          type: 'Medium',
          explaination: 'd = (32-7)/5 = 5. S₁₁ = (11/2)(2 × 7 + 10 × 5) = (11/2)(64) = 352',
          answer: 'S₁₁ = 352',
        },
        {
          id: 6,
          question: 'Given u₁ = 9 and u₅ = 41, find S₁₂.',
          type: 'Medium',
          explaination: 'd = (41-9)/4 = 8. S₁₂ = (12/2)(2 × 9 + 11 × 8) = 6(106) = 636',
          answer: 'S₁₂ = 636',
        },
        {
          id: 7,
          question: 'Given u₁ = 9 and u₈ = 37, find S₈.',
          type: 'Medium',
          explaination: 'Use Sₙ = (n/2)(u₁ + uₙ). S₈ = (8/2)(9+37) = 4 × 46 = 184',
          answer: 'S₈ = 184',
        },
        {
          id: 8,
          question: 'Given u₁ = 4 and u₁₂ = 61, find S₁₂.',
          type: 'Medium',
          explaination: 'S₁₂ = (12/2)(4+61) = 6 × 65 = 390',
          answer: 'S₁₂ = 390',
        },
        {
          id: 9,
          question: 'Given u₁ = 27 and u₁₀ = -36, find S₁₀.',
          type: 'Medium',
          explaination: 'S₁₀ = (10/2)(27 + (-36)) = 5(-9) = -45',
          answer: 'S₁₀ = -45',
        },
        {
          id: 10,
          question: 'Given u₁ = 50 and u₂₀₀ = -50, find S₂₀₀.',
          type: 'Medium',
          explaination: 'S₂₀₀ = (200/2)(50 + (-50)) = 100 × 0 = 0',
          answer: 'S₂₀₀ = 0',
        },
        {
          id: 11,
          question:
            'An arithmetic sequence has first term 7 and common difference 11. Find the sum of the first 20 terms.',
          type: 'Easy',
          explaination: 'S₂₀ = (20/2)(7 + 216) = 10 × 223 = 2230',
          answer: 'S₂₀ = 2230',
        },
        {
          id: 12,
          question:
            'The first term of an arithmetic sequence is 3 and the second term is 7. Find the sum of the first 15 terms.',
          type: 'Easy',
          explaination: 'S₁₅ = (15/2)(2 × 3 + 14 × 4) = (15/2)(62) = 465',
          answer: 'S₁₅ = 465',
        },
        {
          id: 13,
          question:
            'In an arithmetic sequence u₂ = 13 and d = 5. Find the sum of the first 10 terms.',
          type: 'Easy',
          explaination: 'u₁=8. S₁₀ = (10/2)(2 × 8 + 9 × 5) = 5(61) = 305',
          answer: 'S₁₀ = 305',
        },
        {
          id: 14,
          question:
            'An arithmetic sequence has first term 11 and last term 75. Given the common difference is 8, find the sum of the terms.',
          type: 'Medium',
          explaination: 'n = (75-11)/8+1 = 9. S = (9/2)(11+75) = (9/2)(86) = 387',
          answer: 'S = 387',
        },
        {
          id: 15,
          question:
            'An arithmetic sequence has first term 11 and last term 75. Given the common difference is 4, find the sum of the terms.',
          type: 'Medium',
          explaination: 'n = (75-11)/4+1 = 17. S = (17/2)(11+75) = (17/2)(86) = 731',
          answer: 'S = 731',
        },
        {
          id: 16,
          question:
            'An arithmetic sequence has first term 8, common difference 3, and last term 68. Find the sum of all the terms.',
          type: 'Medium',
          explaination: 'n=21. S₂₁ = (21/2)(8+68) = (21/2)(76) = 798',
          answer: 'S = 798',
        },
        {
          id: 17,
          question:
            'The 7th term of an arithmetic sequence is 35 and the 18th term is 112. Find the sum of the first 18 terms.',
          type: 'Medium',
          explaination: 'u₁=-7, d=7. S₁₈ = (18/2)(2(-7)+17 × 7) = 9(-14+119) = 9 × 105 = 945',
          answer: 'S₁₈ = 945',
        },
        {
          id: 18,
          question: 'An arithmetic sequence has u₁₀ = 16 and u₃₀ = 156. Find Σ[r=1 to 20] uᵣ.',
          type: 'Hard',
          explaination: 'u₁=-47, d=7. S₂₀ = (20/2)(2(-47)+19(7)) = 10(-94+133) = 10(39) = 390',
          answer: 'Σ[r=1 to 20] uᵣ = 390',
        },
        {
          id: 19,
          question: 'A sequence is defined by uₙ₊₁ = uₙ + 4. If u₁ = 10, find Σ[r=1 to 20] uᵣ.',
          type: 'Medium',
          explaination: 'Arithmetic, d=4, u₁=10. u₂₀=10+19(4)=86. S₂₀=(20/2)(10+86)=10(96)=960',
          answer: '960',
        },
        {
          id: 20,
          question:
            'The arithmetic sequence U has first term 7, common difference 12 and last term 139. Find the sum of terms in U.',
          type: 'Hard',
          explaination: 'n = (139-7)/12+1=12. S=(12/2)(7+139)=6(146)=876',
          answer: 'S_U = 876',
        },
        {
          id: 21,
          question:
            'The arithmetic sequence V has the same first and last terms as sequence U (first term 7, last term 139) but has common difference 6. Find the sum of terms in V.',
          type: 'Hard',
          explaination: 'n = (139-7)/6+1=23. S=(23/2)(7+139)=(23/2)(146)=1679',
          answer: 'S_V = 1679',
        },
        {
          id: 22,
          question:
            'The arithmetic sequence W has the same first term and common difference as sequence V, and the same number of terms as sequence U. Find the sum of terms in W.',
          type: 'Hard',
          explaination: 'u₁=7, d=6, n=12. u₁₂=7+11(6)=73. S=(12/2)(7+73)=6(80)=480',
          answer: 'S_W = 480',
        },
      ],
      'sigma-notation': [
        {
          id: 1,
          question: 'Evaluate Σ[r=1 to 8] 4.',
          type: 'Easy',
          explaination: 'Constant sum: 8 × 4 = 32',
          answer: '32',
        },
        {
          id: 2,
          question: 'Evaluate Σ[r=1 to 11] 9.',
          type: 'Easy',
          explaination: '11 × 9 = 99',
          answer: '99',
        },
        {
          id: 3,
          question: 'Evaluate Σ[r=1 to 7] (2r + 7).',
          type: 'Easy',
          explaination: 'r=1: 9, r=7: 21. S = (7/2)(9+21) = (7/2)(30) = 105',
          answer: '105',
        },
        {
          id: 4,
          question: 'Evaluate Σ[r=1 to 10] (3r + 4).',
          type: 'Easy',
          explaination: 'r=1: 7, r=10: 34. S = (10/2)(7+34) = 5 × 41 = 205',
          answer: '205',
        },
        {
          id: 5,
          question: 'Evaluate Σ[r=5 to 17] (6r - 4).',
          type: 'Medium',
          explaination:
            'r=5: 26, r=17: 98. Number of terms = 17-5+1=13. S = (13/2)(26+98) = (13/2)(124) = 806',
          answer: '806',
        },
        {
          id: 6,
          question: 'Evaluate Σ[r=3 to 8] (12r - 7).',
          type: 'Medium',
          explaination: 'r=3: 29, r=8: 89. Number of terms = 6. S = (6/2)(29+89) = 3 × 118 = 354',
          answer: '354',
        },
        {
          id: 7,
          question: 'Find Σ[r=1 to 16] (5r - 3).',
          type: 'Medium',
          explaination: 'r=1: 2, r=16: 77. S = (16/2)(2+77) = 8 × 79 = 632',
          answer: '632',
        },
        {
          id: 8,
          question: 'What is the sum of all three-digit multiples of 7?',
          type: 'Hard',
          explaination:
            'First: 105, Last: 994. n=(994-105)/7+1=128. S=(128/2)(105+994)=64(1099)=70336',
          answer: '70336',
        },
        {
          id: 9,
          question:
            'What is the sum of all whole numbers from 0 up to (and including) 100 which are multiples of 5 but not multiples of 3?',
          type: 'Hard',
          explaination:
            'Multiples of 5 from 5 to 100: 20 terms, sum = (20/2)(5+100)=1050. Multiples of 15 from 15 to 90: 6 terms, sum = (6/2)(15+90)=315. Answer = 1050-315=735',
          answer: '735',
        },
      ],
      'mixed-problem-solving': [
        {
          id: 1,
          question:
            'In an arithmetic sequence the 10th term is 26 and the 30th term is 83. Find the 50th term.',
          type: 'Hard',
          explaination: '20d = 83 - 26 = 57 ⇒ d = 2.85. u₅₀ = u₃₀ + 20d = 83 + 57 = 140',
          answer: 'u₅₀ = 140',
        },
        {
          id: 2,
          question:
            'Three consecutive terms of an arithmetic sequence are 3x + 1, 2x + 1, 4x - 5. Find the value of x.',
          type: 'Medium',
          explaination: 'Equal differences: (2x+1)-(3x+1) = (4x-5)-(2x+1) ⇒ -x = 2x-6 ⇒ x = 2',
          answer: 'x = 2',
        },
        {
          id: 3,
          question:
            'The fifth term of an arithmetic sequence is double the second term, and the seventh term of the sequence is 28. Find the 11th term.',
          type: 'Hard',
          explaination:
            'u₅ = 2u₂ ⇒ u₁+4d = 2(u₁+d) ⇒ 2d = u₁. u₇ = u₁+6d = 2d+6d = 8d = 28 ⇒ d=3.5. u₁=7. u₁₁ = 7+10(3.5) = 42',
          answer: 'u₁₁ = 42',
        },
        {
          id: 4,
          question:
            'The sum of the first three terms of an arithmetic sequence equals the tenth term, and the seventh term of the sequence is 27. Find the 12th term.',
          type: 'Hard',
          explaination: 'S₃ = u₁₀ ⇒ 3u₁+3d = u₁+9d ⇒ u₁=3d. u₇=9d=27 ⇒ d=3, u₁=9. u₁₂=9+11(3)=42',
          answer: 'u₁₂ = 42',
        },
        {
          id: 5,
          question:
            'The first three terms of an arithmetic sequence are 1, a, 3a + 5. Evaluate the fourth term of the sequence.',
          type: 'Medium',
          explaination:
            'Equal differences: a-1 = (3a+5)-a ⇒ a-1=2a+5 ⇒ a=-6. d=a-1=-7. u₄=(3(-6)+5)+(-7)=-13-7=-20',
          answer: 'u₄ = -20',
        },
        {
          id: 6,
          question:
            'The ninth term of an arithmetic sequence is four times as large as the third term. Find the value of the first term.',
          type: 'Hard',
          explaination: 'u₉ = 4u₃ ⇒ u₁+8d = 4(u₁+2d) = 4u₁+8d ⇒ 0=3u₁ ⇒ u₁=0',
          answer: 'u₁ = 0',
        },
        {
          id: 7,
          question:
            'The first four terms of an arithmetic sequence are 4, a, b, a - b. Find the sixth term.',
          type: 'Hard',
          explaination:
            'Equal differences: a-4=b-a=(a-b)-b. From a-4=b-a: b=2a-4. From b-a=(a-b)-b: a-4=4-a-a+4=8-3a ⇒ 4a=12 ⇒ a=3, b=2, d=-1. u₆=4+5(-1)=-1',
          answer: 'u₆ = -1',
        },
        {
          id: 8,
          question:
            'Alessia writes down a list of the first n positive integers in order. Show that by the time she has written down the number 19, she has written down 29 digits.',
          type: 'Hard',
          explaination:
            'Digits from 1–9 (single digit): 9 × 1 = 9. Digits from 10–19 (two digits): 10 × 2 = 20. Total = 9+20 = 29 digits.',
          answer: '29 digits (shown)',
        },
        {
          id: 9,
          question:
            'Alessia writes down a list of the first n positive integers in order. Her final list contains a total of 342 digits. What was the largest number in her list?',
          type: 'Hard',
          explaination:
            '1–9: 9 digits. 10–99: 180 digits. Running total: 189. Remaining: 342-189=153 digits ÷ 3 = 51 three-digit numbers. Largest = 100+51-1=150',
          answer: '150',
        },
      ],
      'sum-formula-given-sn': [
        {
          id: 1,
          question:
            'The sum of the first n terms of an arithmetic sequence is Sₙ = 2n² + n. Find the first two terms of the sequence.',
          type: 'Hard',
          explaination: 'u₁ = S₁ = 2(1)²+1 = 3. u₂ = S₂ - S₁ = (2(4)+2)-3 = 10-3 = 7',
          answer: 'u₁ = 3, u₂ = 7',
        },
        {
          id: 2,
          question:
            'The sum of the first n terms of an arithmetic sequence is Sₙ = 2n² + n. Hence find the 50th term.',
          type: 'Hard',
          explaination: 'uₙ = Sₙ - Sₙ₋₁ = (2n²+n)-(2(n-1)²+(n-1)) = 4n-1. u₅₀=4(50)-1=199',
          answer: 'u₅₀ = 199',
        },
        {
          id: 3,
          question:
            'The sum of the first n terms of a sequence is given by Sₙ = n² + 4n. Find an expression for the nth term of the sequence.',
          type: 'Hard',
          explaination:
            'uₙ = Sₙ - Sₙ₋₁ = (n²+4n)-((n-1)²+4(n-1)) = 2n+3 for n ≥ 2. Check: u₁=S₁=5=2(1)+3',
          answer: 'uₙ = 2n + 3',
        },
      ],
      'sum-to-infinity-of-a-geometric-series': [
        {
          id: 1,
          question: 'Find the sum of the infinite geometric series:\n1/4+1/16+1/64+...',
          type: 'Easy',
          explaination: 'Identify a=1/4, r=1/4.\nUse S∞=a/(1-r)=(1/4)/(1-1/4)=(1/4)/(3/4)=1/3.',
          answer: 'S∞ = 1/3',
        },
        {
          id: 2,
          question: 'Find the sum of the infinite geometric series:\n1/2+1/4+1/8+...',
          type: 'Easy',
          explaination: 'a=1/2, r=1/2.\nS∞=(1/2)/(1-1/2)=(1/2)/(1/2)=1.',
          answer: 'S∞ = 1',
        },
        {
          id: 3,
          question: 'Find the sum of the infinite geometric series:\n1/3+2/9+4/27+...',
          type: 'Easy',
          explaination: 'a=1/3, r=2/3.\nS∞=(1/3)/(1-2/3)=(1/3)/(1/3)=1.',
          answer: 'S∞ = 1',
        },
        {
          id: 4,
          question: 'Find the sum of the infinite geometric series:\n1/3+2/15+4/75+...',
          type: 'Medium',
          explaination: 'a=1/3, r=(2/15)/(1/3)=2/5.\nS∞=(1/3)/(1-2/5)=(1/3)/(3/5)=5/9.',
          answer: 'S∞ = 5/9',
        },
        {
          id: 5,
          question: 'Find the sum of the infinite geometric series:\n4+1+1/4+...',
          type: 'Easy',
          explaination: 'a=4, r=1/4.\nS∞=4/(1-1/4)=4/(3/4)=16/3.',
          answer: 'S∞ = 16/3',
        },
        {
          id: 6,
          question: 'Find the sum of the infinite geometric series:\n6+2+2/3+...',
          type: 'Easy',
          explaination: 'a=6, r=1/3.\nS∞=6/(1-1/3)=6/(2/3)=9.',
          answer: 'S∞ = 9',
        },
        {
          id: 7,
          question: 'Find the sum of the infinite geometric series:\n1/2-1/4+1/8-1/16+...',
          type: 'Easy',
          explaination: 'a=1/2, r=-1/2.\nS∞=(1/2)/(1+1/2)=(1/2)/(3/2)=1/3.',
          answer: 'S∞ = 1/3',
        },
        {
          id: 8,
          question: 'Find the sum of the infinite geometric series:\n1/3-1/9+1/27-1/81+...',
          type: 'Easy',
          explaination: 'a=1/3, r=-1/3.\nS∞=(1/3)/(1+1/3)=(1/3)/(4/3)=1/4.',
          answer: 'S∞ = 1/4',
        },
        {
          id: 9,
          question: 'Find the sum of the infinite geometric series:\n15-9+27/5-81/25+...',
          type: 'Medium',
          explaination: 'a=15, r=-9/15=-3/5.\nS∞=15/(1+3/5)=15/(8/5)=75/8.',
          answer: 'S∞ = 75/8',
        },
        {
          id: 10,
          question: 'Find the sum of the infinite geometric series:\n16-12+9-27/4+...',
          type: 'Medium',
          explaination: 'a=16, r=-3/4.\nS∞=16/(1+3/4)=16/(7/4)=64/7.',
          answer: 'S∞ = 64/7',
        },
        {
          id: 11,
          question:
            'A geometric series has first term 3 and common ratio 1/4. Find the sum to infinity of the series.',
          type: 'Easy',
          explaination: 'S∞=a/(1-r)=3/(1-1/4)=3/(3/4)=4.',
          answer: 'S∞ = 4',
        },
        {
          id: 12,
          question:
            'Find the sum to infinity of the geometric series with first term 5 and common ratio -1/4.',
          type: 'Easy',
          explaination: 'S∞=5/(1-(-1/4))=5/(5/4)=4.',
          answer: 'S∞ = 4',
        },
        {
          id: 13,
          question: 'Find the sum to infinity of the series:\n2-2/3+2/9-2/27+...',
          type: 'Easy',
          explaination: 'a=2, r=-1/3.\nS∞=2/(1+1/3)=2/(4/3)=3/2.',
          answer: 'S∞ = 3/2',
        },
        {
          id: 14,
          question:
            'An infinite geometric series has first term 8 and its sum to infinity is 6. Find the common ratio of the series.',
          type: 'Medium',
          explaination: '8/(1-r)=6 ⇒ 1-r=8/6=4/3 ⇒ r=-1/3.',
          answer: 'r = -1/3',
        },
        {
          id: 15,
          question:
            'The first term of a geometric series is 3. Given that the sum to infinity of the series is 4, find the value of the common ratio.',
          type: 'Medium',
          explaination: '3/(1-r)=4 ⇒ 3=4(1-r) ⇒ 1-r=3/4 ⇒ r=1/4.',
          answer: 'r = 1/4',
        },
        {
          id: 16,
          question:
            'The sum to infinity of a geometric series is 3 and the common ratio is 1/3. Find the first three terms of the series.',
          type: 'Medium',
          explaination: 'a/(1-1/3)=3 ⇒ a/(2/3)=3 ⇒ a=2.\nTerms: 2, 2/3, 2/9.',
          answer: '2, 2/3, 2/9',
        },
        {
          id: 17,
          question:
            'The second term of a geometric series is 2 and the sum to infinity is 9. Find two possible values of the common ratio.',
          type: 'Hard',
          explaination:
            'Let first term = a, ratio = r.\nSecond term: ar = 2 ⇒ a = 2/r.\nSum to infinity: a/(1-r)=9 ⇒ 2/(r(1-r))=9.\n⇒ 2=9r(1-r) ⇒ 9r²-9r+2=0.\nFactorise: (3r-1)(3r-2)=0 ⇒ r=1/3 or r=2/3.\nBoth satisfy |r|<1 so both are valid.\nCheck: r=1/3 ⇒ a=6, S∞=9;\\ r=2/3 ⇒ a=3, S∞=9.',
          answer: 'r = 1/3 or r = 2/3',
        },
        {
          id: 18,
          question:
            'A geometric series is given by Σ[r=0 to ∞] (2/5)ʳ.\nWrite down the first three terms of the series.',
          type: 'Easy',
          explaination: 'Substitute r=0,1,2 into (2/5)ʳ:\nr=0: 1; r=1: 2/5; r=2: 4/25.',
          answer: '1, 2/5, 4/25',
        },
        {
          id: 19,
          question:
            'A geometric series is given by Σ[r=0 to ∞] (2/5)ʳ.\nFind the sum of the series.',
          type: 'Easy',
          explaination: 'a=1, r=2/5.\nS∞=1/(1-2/5)=1/(3/5)=5/3.',
          answer: 'S∞ = 5/3',
        },
        {
          id: 20,
          question: 'Evaluate Σ[r=0 to ∞] 2/3ʳ.',
          type: 'Easy',
          explaination: 'Rewrite: Σ[r=0 to ∞] 2·(1/3)ʳ.\nSo a=2, r=1/3.\nS∞=2/(1-1/3)=2/(2/3)=3.',
          answer: 'S∞ = 3',
        },
        {
          id: 21,
          question:
            'For the geometric series 3-x/3+x²/27-x³/243+...,\nFind the sum of the series when x=-2.',
          type: 'Hard',
          explaination: 'When x=-2: r=-(-2)/9=2/9.\nS∞=3/(1-2/9)=3/(7/9)=27/7.',
          answer: 'S∞ = 27/7',
        },
        {
          id: 22,
          question:
            'A geometric series is given by 5+5(x-3)+5(x-3)²+...\nFind the expression, in terms of x, for the sum of the series.',
          type: 'Medium',
          explaination: 'a=5, r=(x-3).\nS∞=5/(1-(x-3))=5/(4-x).',
          answer: 'S∞ = 5/(4-x)',
        },
        {
          id: 23,
          question:
            'For the geometric series 2+4x+8x²+...\nFind the expression, in terms of x, for the sum to infinity of the series.',
          type: 'Hard',
          explaination: 'a=2, r=2x.\nS∞=2/(1-2x), valid for |x|<1/2.',
          answer: 'S∞ = 2/(1-2x)',
        },
        {
          id: 24,
          question:
            'The second term of a geometric series is -6/5 and the sum to infinity is 5. Find the first term of the series.',
          type: 'Hard',
          explaination:
            'Let first term =a, ratio =r.\nSecond term: ar=-6/5.\nSum to infinity: a/(1-r)=5 ⇒ a=5(1-r).\nSubstitute: 5(1-r)· r=-6/5.\n25r(1-r)=-6 ⇒ 25r²-25r-6=0.\nWait — rearranging: 25r-25r²=-6 ⇒ 25r²-25r-6=0... discriminant =625+600=1225.\nr=(25±35)/50: r=60/50=6/5 (rejected, |r|>1) or r=-10/50=-1/5.\na=5(1-(-1/5))=5×6/5=6.',
          answer: 'a = 6',
        },
        {
          id: 25,
          question:
            'Given that x is a positive number, find an expression, in terms of x, for the sum to infinity of the series x+4x³+16x⁵+...',
          type: 'Hard',
          explaination: 'a=x, r=4x².\nS∞=x/(1-4x²).',
          answer: 'S∞ = x/(1-4x²)',
        },
        {
          id: 26,
          question: 'Find the value of x such that Σ[r=0 to ∞] xʳ⁺¹/2ʳ=3.',
          type: 'Hard',
          explaination:
            'Rewrite: Σ[r=0 to ∞] x·(x/2)ʳ.\nThis is a geometric series with a=x, r=x/2.\nS∞=x/(1-x/2)=3.\n⇒ x=3(1-x/2)=3-3x/2.\nx+3x/2=3 ⇒ 5x/2=3 ⇒ x=6/5.',
          answer: 'x = 6/5',
        },
        {
          id: 27,
          question:
            'An infinite geometric series has sum to infinity of 27 and sum of the first three terms equal to 19. Find the first term.',
          type: 'Hard',
          explaination:
            'Let first term =a, ratio =r.\nS∞=a/(1-r)=27 ...(1)\nKey insight: S∞ - S₃ = sum of remaining terms = ar³/(1-r).\nS∞ - S₃ = 27-19=8.\nSo ar³/(1-r)=8.\nDividing by (1): (ar³/(1-r))/(a/(1-r))=8/27 ⇒ r³=8/27.\nr=2/3.\nFrom (1): a=27(1-2/3)=27×1/3=9.',
          answer: 'a = 9',
        },
      ],
      'convergence-of-infinite-geometric-series': [
        {
          id: 1,
          question:
            'Find the range of values of x for which the infinite geometric series converges:\n(x-2)+(x-2)²+(x-2)³+...',
          type: 'Medium',
          explaination:
            'Common ratio r=(x-2).\nConverges when |r|<1, i.e. |x-2|<1.\n-1<x-2<1 ⇒ 1<x<3.',
          answer: '1 < x < 3',
        },
        {
          id: 2,
          question:
            'Find the range of values of x for which the infinite geometric series converges:\n(x+3)+(x+3)²+(x+3)³+...',
          type: 'Medium',
          explaination: 'Common ratio r=(x+3).\nConverges when |x+3|<1, i.e. -4<x<-2.',
          answer: '-4 < x < -2',
        },
        {
          id: 3,
          question:
            'Find the range of values of x for which the infinite geometric series converges:\n1+2x+4x²+...',
          type: 'Medium',
          explaination: 'a=1, r=2x.\nConverges when |2x|<1, i.e. |x|<1/2.',
          answer: '-1/2<x<1/2',
        },
        {
          id: 4,
          question:
            'Find the range of values of x for which the infinite geometric series converges:\n1+3x+9x²+...',
          type: 'Medium',
          explaination: 'r=3x. Converges when |3x|<1, i.e. |x|<1/3.',
          answer: '-1/3<x<1/3',
        },
        {
          id: 5,
          question:
            'Find the range of values of x for which the infinite geometric series converges:\n1+x/2+x²/4+...',
          type: 'Medium',
          explaination: 'r=x/2. Converges when |x/2|<1, i.e. |x|<2.',
          answer: '-2<x<2',
        },
        {
          id: 6,
          question:
            'Find the range of values of x for which the infinite geometric series converges:\n1+x/5+x²/25+...',
          type: 'Medium',
          explaination: 'r=x/5. Converges when |x/5|<1, i.e. |x|<5.',
          answer: '-5<x<5',
        },
        {
          id: 7,
          question:
            'Find the range of values of x for which the infinite geometric series converges:\n(x+4)-(x+4)²+(x+4)³-...',
          type: 'Medium',
          explaination: 'r=-(x+4). Converges when |-(x+4)|<1, i.e. |x+4|<1.\n-1<x+4<1 ⇒ -5<x<-3.',
          answer: '-5<x<-3',
        },
        {
          id: 8,
          question:
            'Find the range of values of x for which the infinite geometric series converges:\n(x-1)-(x-1)²+(x-1)³-...',
          type: 'Medium',
          explaination: 'r=-(x-1). Converges when |x-1|<1, giving 0<x<2.',
          answer: '0<x<2',
        },
        {
          id: 9,
          question:
            'Find the range of values of x for which the infinite geometric series converges:\n1-3x/2+9x²/4-...',
          type: 'Medium',
          explaination: 'r=-3x/2. Converges when |3x/2|<1, i.e. |x|<2/3.',
          answer: '-2/3<x<2/3',
        },
        {
          id: 10,
          question:
            'Find the range of values of x for which the infinite geometric series converges:\n1-4x/3+16x²/9-...',
          type: 'Medium',
          explaination: 'r=-4x/3. Converges when |4x/3|<1, i.e. |x|<3/4.',
          answer: '-3/4<x<3/4',
        },
        {
          id: 11,
          question:
            'Find the range of values of x for which the geometric series\n3-x/3+x²/27-x³/243+...\nconverges.',
          type: 'Hard',
          explaination:
            'First term a=3.\nCommon ratio: r=(-x/3)/3=-x/9.\nConverges when |-x/9|<1, i.e. |x|<9.',
          answer: '-9<x<9',
        },
        {
          id: 12,
          question:
            'A geometric series is given by 5+5(x-3)+5(x-3)²+...\nFind the range of values of x for which the series converges.',
          type: 'Medium',
          explaination: 'r=(x-3). Converges when |x-3|<1, i.e. 2<x<4.',
          answer: '2<x<4',
        },
        {
          id: 13,
          question:
            'For the geometric series 2+4x+8x²+...\nFind the range of values of x for which the series converges.',
          type: 'Hard',
          explaination: 'a=2, r=2x. Converges when |2x|<1, i.e. |x|<1/2.',
          answer: '-1/2<x<1/2',
        },
        {
          id: 14,
          question:
            'Given that x is a positive number, find the range of values of x for which the geometric series x+4x³+16x⁵+... converges.',
          type: 'Hard',
          explaination:
            'First term a=x.\nCommon ratio: r=4x³/x=4x².\nConverges when |4x²|<1 ⇒ x²<1/4 ⇒ x<1/2.\nSince x>0: 0<x<1/2.',
          answer: '0<x<1/2',
        },
        {
          id: 15,
          question:
            'Find the range of values of x for which the series Σ[r=0 to ∞] xʳ⁺¹/2ʳ converges.',
          type: 'Hard',
          explaination:
            'Rewrite the series as Σ[r=0 to ∞] x·(x/2)ʳ, so the common ratio is r = x/2.\nConverges when |x/2|<1, i.e. |x|<2.',
          answer: '-2<x<2',
        },
      ],
    },
  },
  {
    'financial-mathematics': {
      title: 'Financial Mathematics',
      'compound-interest-annual': [
        {
          id: 1,
          question:
            'Find the final value of the investment: $2000 invested at 6% compounded annually for 3 years.',
          type: 'Easy',
          explaination: 'FV = 2000×(1+0.06)³\n= 2000×1.191016\n= $2382.03',
          answer: '$2382.03',
        },
        {
          id: 2,
          question:
            'Find the final value of the investment: $3000 invested at 4% compounded annually for 18 years.',
          type: 'Easy',
          explaination: 'FV = 3000×(1.04)¹⁸\n= 3000×2.02582\n= $6077.45',
          answer: '$6077.45',
        },
        {
          id: 3,
          question:
            'A savings account pays interest at 3% per year (compounded annually). If £800 is deposited in the account, what will the balance show at the end of 4 years?',
          type: 'Easy',
          explaination: 'FV = 800×(1.03)⁴\n= 800×1.12551\n≈£900.41',
          answer: '£900.41',
        },
        {
          id: 4,
          question:
            'A bank charges 5% annual interest on loans. If a seven-year loan of £10,000 is taken, with no repayments until the seven years end, how much will need to be paid at the end of the loan term?',
          type: 'Easy',
          explaination: 'FV = 10000×(1.05)⁷\n= 10000×1.40710\n≈£14,071.00',
          answer: '£14,071.00',
        },
      ],
      'time-to-reach-a-target-value': [
        {
          id: 1,
          question:
            'Find how long is required to achieve the given final value: $100 invested at 5% compounded annually. £1000 required.',
          type: 'Medium',
          explaination: '100×(1.05)ⁿ=1000\n(1.05)ⁿ=10\nn=(ln 10)/(ln 1.05)≈47.6 years',
          answer: 'n ≈ 47.6 years',
        },
        {
          id: 2,
          question:
            'Find how long is required to achieve the given final value: $500 invested at 4% compounded annually. £600 required.',
          type: 'Easy',
          explaination: '500×(1.04)ⁿ=600\n(1.04)ⁿ=1.2\nn=(ln 1.2)/(ln 1.04)≈4.64 years',
          answer: 'n ≈ 4.64 years',
        },
        {
          id: 3,
          question:
            'Find how long is required to achieve the given final value: $300 invested at 2% compounded monthly. £400 required.',
          type: 'Medium',
          explaination:
            '300×(1+0.02/12)ⁿ=400\n(1.0016̅)ⁿ=4/3\nn=(ln(4/3))/(ln(1.0016̅))≈172.1 months',
          answer: 'n ≈ 172.1 months ≈ 14.3 years',
        },
        {
          id: 4,
          question:
            'Find how long is required to achieve the given final value: $1000 invested at 1.5% compounded monthly. £1100 required.',
          type: 'Medium',
          explaination: '1000×(1+0.015/12)ⁿ=1100\nn=(ln 1.1)/(ln(1.00125))≈76.3 months',
          answer: 'n ≈ 76.3 months ≈ 6.4 years',
        },
      ],
      'finding-the-interest-rate': [
        {
          id: 1,
          question:
            'Find the annual interest rate required (compounded annually): €500 invested for 10 years. €1000 required.',
          type: 'Medium',
          explaination: '500(1+r)¹⁰=1000\n(1+r)¹⁰=2\n1+r=2^(1/10)\nr=2^(0.1)-1≈0.0718 (7.18%)',
          answer: 'r ≈ 7.18%',
        },
        {
          id: 2,
          question:
            'Find the annual interest rate required (compounded annually): €500 invested for 10 years. €800 required.',
          type: 'Medium',
          explaination: '500(1+r)¹⁰=800\n(1+r)¹⁰=1.6\nr=1.6^(0.1)-1≈0.0481 (4.81%)',
          answer: 'r ≈ 4.81%',
        },
        {
          id: 3,
          question:
            'Find the annual interest rate required (compounded annually): €100 invested for 5 years. €200 required.',
          type: 'Medium',
          explaination: '100(1+r)⁵=200\n(1+r)⁵=2\nr=2^(1/5)-1≈0.1487 (14.87%)',
          answer: 'r ≈ 14.87%',
        },
        {
          id: 4,
          question:
            'Find the annual interest rate required (compounded annually): €100 invested for 10 years. €200 required.',
          type: 'Medium',
          explaination: '100(1+r)¹⁰=200\n(1+r)¹⁰=2\nr=2^(0.1)-1≈0.0718 (7.18%)',
          answer: 'r ≈ 7.18%',
        },
      ],
      depreciation: [
        {
          id: 1,
          question:
            'Find the final value of an asset after the given depreciation (compounded annually): Initial value $1200, annual depreciation 10% for 10 years.',
          type: 'Easy',
          explaination: 'FV = 1200×(1-0.10)¹⁰\n= 1200×(0.9)¹⁰\n= 1200×0.34868\n≈$418.42',
          answer: '$418.42',
        },
        {
          id: 2,
          question:
            'Find the final value of an asset after the given depreciation (compounded annually): Initial value $1200, annual depreciation 20% for 10 years.',
          type: 'Easy',
          explaination: 'FV = 1200×(0.8)¹⁰\n= 1200×0.10737\n≈$128.85',
          answer: '$128.85',
        },
        {
          id: 3,
          question:
            'Find the final value of an asset after the given depreciation (compounded annually): Initial value £30,000, annual depreciation 15% for 5 years.',
          type: 'Easy',
          explaination: 'FV = 30000×(0.85)⁵\n= 30000×0.44371\n≈£13,311.22',
          answer: '£13,311.22',
        },
        {
          id: 4,
          question:
            'Find the final value of an asset after the given depreciation (compounded annually): Initial value £30,000, annual depreciation 25% for 5 years.',
          type: 'Easy',
          explaination: 'FV = 30000×(0.75)⁵\n= 30000×0.23730\n≈£7,119.14',
          answer: '£7,119.14',
        },
        {
          id: 5,
          question:
            'A car is bought for £20,000. Each year there is 15% depreciation. Find the expected value of the car after 5 years.',
          type: 'Easy',
          explaination: 'FV = 20000×(1-0.15)⁵\n= 20000×(0.85)⁵\n= 20000×0.44371\n≈£8874.11',
          answer: '£8874.11',
        },
        {
          id: 6,
          question:
            'A company buys a manufacturing machine for $20,000, with an expected lifetime of 8 years and scrap value $1500. The depreciation rate is set at 30%. Complete the table of asset values for the 8 years. Give all values to the nearest dollar.\n| Year | Start-year value ($) | Depreciation expense ($) | End-year value ($) |\n|------|-----------------------|---------------------------|---------------------|\n| 1 | 20 000 | | |\n| 2 | | | |\n| 3 | | | |\n| 4 | | | |\n| 5 | | | |\n| 6 | | | |\n| 7 | | | |\n| 8 | | | |',
          type: 'Hard',
          explaination:
            'Depreciation each year = 30% of start-year value.\nYear 1: 20000 | 6000 | 14000\nYear 2: 14000 | 4200 | 9800\nYear 3: 9800 | 2940 | 6860\nYear 4: 6860 | 2058 | 4802\nYear 5: 4802 | 1441 | 3361\nYear 6: 3361 | 1008 | 2353\nYear 7: 2353 | 706 | 1647\nYear 8: 1647 | 494 | 1153\n(Scrap value $1500 given for context; reducing balance method applied throughout)',
          answer:
            'End-year values: 14000, 9800, 6860, 4802, 3361, 2353, 1647, 1153 (dollars, years 1–8)',
        },
      ],
      'compound-interest-non-annual': [
        {
          id: 1,
          question:
            'Find the final value of the investment: $500 invested at 2.5% compounded quarterly for 6 years.',
          type: 'Easy',
          explaination: 'FV = 500×(1+0.025/4)^(4×6)\n= 500×(1.00625)²⁴\n= $580.95',
          answer: '$580.95',
        },
        {
          id: 2,
          question:
            'Find the final value of the investment: $100 invested at 3.5% compounded twice-yearly for 10 years.',
          type: 'Easy',
          explaination: 'FV = 100×(1+0.035/2)^(2×10)\n= 100×(1.0175)²⁰\n= $141.48',
          answer: '$141.48',
        },
        {
          id: 3,
          question:
            'Find the final value of the investment: $5000 invested at 5% compounded monthly for 60 months.',
          type: 'Easy',
          explaination: 'FV = 5000×(1+0.05/12)⁶⁰\n= 5000×(1.004167)⁶⁰\n= $6416.79',
          answer: '$6416.79',
        },
        {
          id: 4,
          question:
            'Find the final value of the investment: $800 invested at 4% compounded monthly for 100 months.',
          type: 'Easy',
          explaination: 'FV = 800×(1+0.04/12)¹⁰⁰\n= 800×(1.0033̅)¹⁰⁰\n= $1116.39',
          answer: '$1116.39',
        },
        {
          id: 5,
          question:
            'A savings account has an annual interest rate of 4% compounded monthly. Find the account balance 30 months after $8000 is invested.',
          type: 'Medium',
          explaination: 'FV = 8000×(1+0.04/12)³⁰\n= 8000×(1.0033̅)³⁰\n≈$8840.96',
          answer: '$8840.96',
        },
        {
          id: 6,
          question:
            'A bank loan has a published annual interest rate of 5.8%, compounded monthly. What is the balance 18 months after a loan of €15,000 is taken out, if no payments are made?',
          type: 'Medium',
          explaination: 'FV = 15000×(1+0.058/12)¹⁸\n= 15000×(1.004833)¹⁸\n≈€16,359.75',
          answer: '€16,359.75',
        },
      ],
      'real-value-of-investment-with-inflation': [
        {
          id: 1,
          question:
            'Find the real value of cash (no interest paid) subject to the given inflation, relative to the initial value: $100 after 1 year of inflation at 3%.',
          type: 'Easy',
          explaination: 'Real Value = 100/1.03 ≈ $97.09',
          answer: '$97.09',
        },
        {
          id: 2,
          question:
            'Find the real value of cash (no interest paid) subject to the given inflation, relative to the initial value: $300 after 1 year of inflation at 2%.',
          type: 'Easy',
          explaination: 'Real Value = 300/1.02 ≈ $294.12',
          answer: '$294.12',
        },
        {
          id: 3,
          question:
            'Find the real value of cash (no interest paid) subject to the given inflation, relative to the initial value: £1000 after 10 years of inflation at 3%.',
          type: 'Easy',
          explaination: 'Real Value = 1000/(1.03)¹⁰ = 1000/1.34392 ≈ £744.09',
          answer: '£744.09',
        },
        {
          id: 4,
          question:
            'Find the real value of cash (no interest paid) subject to the given inflation, relative to the initial value: £5000 after 10 years of inflation at 5%.',
          type: 'Easy',
          explaination: 'Real Value = 5000/(1.05)¹⁰ = 5000/1.62889 ≈ £3069.57',
          answer: '£3069.57',
        },
        {
          id: 5,
          question:
            'Find the real value of the investment subject to the given inflation (all interest compounded annually): $100 after 1 year of interest at 5% and inflation at 2%.',
          type: 'Medium',
          explaination: 'Nominal FV=100×1.05=105\nReal FV=105/1.02≈$102.94',
          answer: '$102.94',
        },
        {
          id: 6,
          question:
            'Find the real value of the investment subject to the given inflation (all interest compounded annually): $5000 after 1 year of interest at 4% and inflation at 1.4%.',
          type: 'Medium',
          explaination: 'Nominal FV=5000×1.04=5200\nReal FV=5200/1.014≈$5118.34',
          answer: '$5118.34',
        },
        {
          id: 7,
          question:
            'Find the real value of the investment (all interest compounded annually): £100 after 1 year of interest at 4% and inflation at 10%.',
          type: 'Medium',
          explaination: 'Nominal FV=100×1.04=104\nReal FV=104/1.10≈£94.55',
          answer: '£94.55',
        },
        {
          id: 8,
          question:
            'Find the real value of the investment (all interest compounded annually): £2500 after 1 year of interest at 3% and inflation at 5%.',
          type: 'Medium',
          explaination: 'Nominal FV=2500×1.03=2575\nReal FV=2575/1.05≈£2452.38',
          answer: '£2452.38',
        },
        {
          id: 9,
          question:
            'Find the real value of the investment (all interest compounded annually): €1000 after 10 years of interest at 3.5% and inflation at 3%.',
          type: 'Medium',
          explaination: 'Real FV=1000×(1.035)¹⁰/(1.03)¹⁰\n=1000×1.41060/1.34392\n≈€1049.64',
          answer: '€1049.64',
        },
        {
          id: 10,
          question:
            'Find the real value of the investment (all interest compounded annually): €500 after 5 years of interest at 5% and inflation at 2%.',
          type: 'Medium',
          explaination: 'Real FV=500×(1.05)⁵/(1.02)⁵\n=500×1.27628/1.10408\n≈€577.70',
          answer: '€577.70',
        },
        {
          id: 11,
          question:
            'Find the real value of the investment (all interest compounded annually): $1000 after 10 years of interest at 5% and inflation at 10%.',
          type: 'Hard',
          explaination: 'Real FV=1000×(1.05)¹⁰/(1.10)¹⁰\n=1000×1.62889/2.59374\n≈$638.62',
          answer: '$638.62',
        },
        {
          id: 12,
          question:
            'Find the real value of the investment (all interest compounded annually): $5000 after 8 years of interest at 3% and inflation at 5%.',
          type: 'Hard',
          explaination: 'Real FV=5000×(1.03)⁸/(1.05)⁸\n=5000×1.26677/1.47746\n≈$4286.70',
          answer: '$4286.70',
        },
        {
          id: 13,
          question:
            'A car is bought for £15,000. It depreciates by 20% in the first year and 10% in subsequent years. There is an average of 2.5% inflation each year. What is the real terms value of the car after 5 years? Give your answer to the nearest £10.',
          type: 'Hard',
          explaination:
            'Nominal value after 5 years:\nYear 1: 15000×0.80=12000\nYears 2-5: 12000×(0.90)⁴=12000×0.6561=£7873.20\nReal value (deflate by inflation over 5 years):\nReal=7873.20/(1.025)⁵=7873.20/1.13141≈£6959.79≈£6960',
          answer: '≈£6960',
        },
      ],
      'comparing-compounding-methods': [
        {
          id: 1,
          question:
            '£1000 is invested at an annual interest rate of 6%.\n(a) Is the return better if the interest is compounded annually or monthly?\n(b) Over 10 years, what is the difference in the return between these two compounding methods?',
          type: 'Medium',
          explaination:
            '(a) Annual: FV=1000×1.06¹=£1060\nMonthly: FV=1000×(1+0.06/12)¹²=1000×1.00500¹²≈£1061.68\nMonthly gives higher return.\n(b) After 10 years:\nAnnual: FV=1000×(1.06)¹⁰≈£1790.85\nMonthly: FV=1000×(1+0.06/12)¹²⁰≈£1819.40\nDifference =1819.40-1790.85≈£28.55',
          answer: '(a) Monthly compounding gives a better return.\n(b) Difference ≈£28.55',
        },
      ],
      'equivalent-annual-rate-ear': [
        {
          id: 1,
          question:
            'A bank advertises a loan charging 12% annual interest compounded monthly. What is the equivalent annual interest rate if compounded annually?',
          type: 'Hard',
          explaination: 'Monthly rate =0.12/12=0.01\nEAR=(1.01)¹²-1\n=1.12683-1\n≈12.68%',
          answer: '≈12.68%',
        },
      ],
      'real-terms-growth-with-inflation': [
        {
          id: 1,
          question:
            '£1000 is invested for 5 years in an account paying 6.2% annual interest. Over the same period, inflation is judged to be 3.2% annually. What is the real terms percentage increase in value of the investment at the end of the 5 years?',
          type: 'Hard',
          explaination:
            'Real multiplier=(1.062)⁵/(1.032)⁵=(1.062/1.032)⁵=(1.02907)⁵\n≈1.15445\nPercentage increase=15.45%',
          answer: '≈15.45%',
        },
        {
          id: 2,
          question:
            'A government pledges to increase spending on education by 5% each year.\n(a) If the inflation rate is predicted to 2.5% each year, what is the real terms increase per year?\n(b) If this is pledged for a 5-year period, what is the overall real terms percentage increase in spending on education?',
          type: 'Hard',
          explaination:
            '(a) Real rate = 1.05/1.025-1≈0.02439 (2.44%)\n(b) Over 5 years:\nOverall real increase=(1.02439)⁵-1≈1.1279-1=12.79%',
          answer: '(a) ≈2.44% per year\n(b) ≈12.79% overall',
        },
      ],
      hyperinflation: [
        {
          id: 1,
          question:
            'In 1923, Germany suffered from hyperinflation. The annual inflation rate was approximately 10¹¹%. Use the exact formula for inflation to answer:\n(a) At the beginning of 1923 a loaf of bread costs approximately 250 marks. How much did it cost at the end of 1923?\n(b) Siegfried had 2,000,000 marks in savings at the beginning of 1923. He invested it in a savings account paying 20% interest. How much was it worth in real terms at the end of 1923?\n(c) Anna had a mortgage of 25 million marks at the beginning of 1923. Interest of 15% was added to this mortgage during 1923. Anna made no payments. What is the debt in real terms by the end of 1923?',
          type: 'Hard',
          explaination:
            'Inflation multiplier: (1+10¹¹/100)=1+10⁹≈10⁹\n(a) Cost=250×10⁹=2.5×10¹¹ marks\n(b) Nominal value =2,000,000×1.20=2,400,000 marks\nReal value=(2,400,000)/10⁹=0.0024 marks\n(c) Nominal debt =25,000,000×1.15=28,750,000 marks\nReal debt=(28,750,000)/10⁹≈0.02875 marks',
          answer:
            '(a) ≈ 2.5×10¹¹ marks\n(b) ≈ 0.0024 marks (essentially worthless)\n(c) ≈ 0.02875 marks (debt almost wiped out in real terms)',
        },
      ],
    },
  },
  {
    'number-algebra': {
      title: 'Number & Algebra',
      'laws-of-indices-multiplication': [
        {
          id: 1,
          question: 'Simplify:\na) x² × x⁴\nb) x⁵ × x⁷',
          type: 'Easy',
          explaination: 'Use aᵐ × aⁿ = aᵐ⁺ⁿ\na) x²⁺⁴=x⁶\nb) x⁵⁺⁷=x¹²',
          answer: 'a) x⁶\nb) x¹²',
        },
        {
          id: 2,
          question: 'Simplify:\na) y³ × y³\nb) z⁵ × z⁵',
          type: 'Easy',
          explaination: 'a) y³⁺³=y⁶\nb) z⁵⁺⁵=z¹⁰',
          answer: 'a) y⁶\nb) z¹⁰',
        },
        {
          id: 3,
          question: 'Simplify:\na) a⁶ × a\nb) a¹⁰ × a',
          type: 'Easy',
          explaination: 'Recall a = a¹\na) a⁶⁺¹=a⁷\nb) a¹⁰⁺¹=a¹¹',
          answer: 'a) a⁷\nb) a¹¹',
        },
        {
          id: 4,
          question: 'Simplify (do not evaluate):\na) 5⁷ × 5¹⁰\nb) 2¹² × 2¹²',
          type: 'Easy',
          explaination: 'a) 5⁷⁺¹⁰=5¹⁷\nb) 2¹²⁺¹²=2²⁴',
          answer: 'a) 5¹⁷\nb) 2²⁴',
        },
      ],
      'laws-of-indices-power-of-a-power': [
        {
          id: 1,
          question: 'Simplify:\na) (x³)⁵\nb) (x⁴)⁸',
          type: 'Easy',
          explaination: 'Use (aᵐ)ⁿ = aᵐⁿ\na) x^(3 × 5)=x¹⁵\nb) x^(4 × 8)=x³²',
          answer: 'a) x¹⁵\nb) x³²',
        },
        {
          id: 2,
          question: 'Simplify:\na) (y⁴)⁴\nb) (z⁵)⁵',
          type: 'Easy',
          explaination: 'a) y^(4 × 4)=y¹⁶\nb) z^(5 × 5)=z²⁵',
          answer: 'a) y¹⁶\nb) z²⁵',
        },
        {
          id: 3,
          question: 'Simplify:\na) (c⁷)²\nb) (c²)⁷',
          type: 'Easy',
          explaination:
            'a) c^(7 × 2)=c¹⁴\nb) c^(2 × 7)=c¹⁴\nNote: same answer – commutative property of multiplication.',
          answer: 'a) c¹⁴\nb) c¹⁴',
        },
        {
          id: 4,
          question: 'Simplify (do not evaluate):\na) (3⁵)¹⁰\nb) (13⁷)⁴',
          type: 'Easy',
          explaination: 'a) 3^(5 × 10)=3⁵⁰\nb) 13^(7 × 4)=13²⁸',
          answer: 'a) 3⁵⁰\nb) 13²⁸',
        },
      ],
      'laws-of-indices-coefficient-variable-combined': [
        {
          id: 1,
          question: 'Simplify:\na) 12x² × 4x⁵\nb) 3x⁴ × 5x³',
          type: 'Easy',
          explaination:
            'Multiply coefficients and add indices.\na) (12 × 4)x²⁺⁵=48x⁷\nb) (3 × 5)x⁴⁺³=15x⁷',
          answer: 'a) 48x⁷\nb) 15x⁷',
        },
        {
          id: 2,
          question: 'Simplify:\na) a × 3a²\nb) b² × 5b²',
          type: 'Easy',
          explaination: 'a) 3 · a¹⁺²=3a³\nb) 5 · b²⁺²=5b⁴',
          answer: 'a) 3a³\nb) 5b⁴',
        },
      ],
      'laws-of-indices-multi-variable': [
        {
          id: 1,
          question: 'Simplify:\na) 5x²yz × 4x³y²\nb) 6x⁷yz² × 2xz³',
          type: 'Medium',
          explaination:
            'Multiply coefficients; add indices for matching bases.\na) (5 × 4)x²⁺³y¹⁺²z¹=20x⁵y³z\nb) (6 × 2)x⁷⁺¹y¹z²⁺³=12x⁸yz⁵',
          answer: 'a) 20x⁵y³z\nb) 12x⁸yz⁵',
        },
      ],
      'laws-of-indices-division': [
        {
          id: 1,
          question: 'Simplify:\na) x⁴/x³\nb) x⁸/x⁵',
          type: 'Easy',
          explaination: 'Use aᵐ ÷ aⁿ = aᵐ⁻ⁿ\na) x⁴⁻³=x¹=x\nb) x⁸⁻⁵=x³',
          answer: 'a) x\nb) x³',
        },
        {
          id: 2,
          question: 'Simplify:\na) y⁸ ÷ y⁴\nb) z⁹ ÷ z³',
          type: 'Easy',
          explaination: 'a) y⁸⁻⁴=y⁴\nb) z⁹⁻³=z⁶',
          answer: 'a) y⁴\nb) z⁶',
        },
        {
          id: 3,
          question: 'Simplify:\na) b⁷/b\nb) b⁹/b',
          type: 'Easy',
          explaination: 'a) b⁷⁻¹=b⁶\nb) b⁹⁻¹=b⁸',
          answer: 'a) b⁶\nb) b⁸',
        },
        {
          id: 4,
          question: 'Simplify (do not evaluate):\na) 11¹² ÷ 11⁴\nb) 7¹⁰ ÷ 7⁵',
          type: 'Easy',
          explaination: 'a) 11¹²⁻⁴=11⁸\nb) 7¹⁰⁻⁵=7⁵',
          answer: 'a) 11⁸\nb) 7⁵',
        },
        {
          id: 5,
          question: 'Simplify:\na) 10x¹⁰/(5x⁵)\nb) 9x⁹/(3x³)',
          type: 'Easy',
          explaination:
            'Divide coefficients; subtract indices.\na) (10 ÷ 5)x¹⁰⁻⁵=2x⁵\nb) (9 ÷ 3)x⁹⁻³=3x⁶',
          answer: 'a) 2x⁵\nb) 3x⁶',
        },
        {
          id: 6,
          question: 'Simplify:\na) 8x/(16x⁴)\nb) 5x²/(20x³)',
          type: 'Easy',
          explaination: 'a) (8 ÷ 16)x¹⁻⁴=(1/2)x⁻³=1/(2x³)\nb) (5 ÷ 20)x²⁻³=(1/4)x⁻¹=1/(4x)',
          answer: 'a) 1/(2x³)\nb) 1/(4x)',
        },
        {
          id: 7,
          question: 'Simplify:\na) 15x² ÷ 9x⁴\nb) 21x⁵ ÷ 28x³',
          type: 'Easy',
          explaination: 'a) (15/9)x²⁻⁴=(5/3)x⁻²=5/(3x²)\nb) (21/28)x⁵⁻³=(3/4)x²=3x²/4',
          answer: 'a) 5/(3x²)\nb) 3x²/4',
        },
        {
          id: 8,
          question: 'Simplify:\na) 14x³y⁵ ÷ 2xy²\nb) 6x⁵yz² ÷ 3x²y²z',
          type: 'Medium',
          explaination: 'a) (14 ÷ 2)x³⁻¹y⁵⁻²=7x²y³\nb) (6 ÷ 3)x⁵⁻²y¹⁻²z²⁻¹=2x³y⁻¹z=2x³z/y',
          answer: 'a) 7x²y³\nb) 2x³z/y',
        },
      ],
      'negative-indices-integer-base': [
        {
          id: 1,
          question: 'Write as a fraction in simplest terms:\na) 10⁻¹\nb) 7⁻¹',
          type: 'Easy',
          explaination: 'Use a⁻ⁿ=1/aⁿ\na) 10⁻¹=1/10\nb) 7⁻¹=1/7',
          answer: 'a) 1/10\nb) 1/7',
        },
        {
          id: 2,
          question: 'Write as a fraction in simplest terms:\na) 3⁻³\nb) 5⁻²',
          type: 'Easy',
          explaination: 'a) 3⁻³=1/3³=1/27\nb) 5⁻²=1/5²=1/25',
          answer: 'a) 1/27\nb) 1/25',
        },
      ],
      'negative-indices-fraction-base': [
        {
          id: 1,
          question: 'Write as a fraction in simplest terms:\na) (3/4)⁻¹\nb) (5/7)⁻¹',
          type: 'Medium',
          explaination: 'Use (a/b)⁻¹=b/a\na) 4/3\nb) 7/5',
          answer: 'a) 4/3\nb) 7/5',
        },
        {
          id: 2,
          question: 'Write as a fraction in simplest terms:\na) (2/3)⁻²\nb) (2/5)⁻³',
          type: 'Medium',
          explaination: 'Use (a/b)⁻ⁿ=(b/a)ⁿ\na) (3/2)²=9/4\nb) (5/2)³=125/8',
          answer: 'a) 9/4\nb) 125/8',
        },
        {
          id: 3,
          question: 'Simplify:\na) (3u/(4v²))⁻²\nb) (2a³/(3b²))⁻³',
          type: 'Hard',
          explaination:
            'Invert fraction then apply power.\na) (4v²/(3u))²=16v⁴/(9u²)\nb) (3b²/(2a³))³=27b⁶/(8a⁹)',
          answer: 'a) 16v⁴/(9u²)\nb) 27b⁶/(8a⁹)',
        },
      ],
      'laws-of-indices-fraction-in-brackets': [
        {
          id: 1,
          question: 'Simplify:\na) (x/3)³\nb) (5/x²)²',
          type: 'Medium',
          explaination: 'a) x³/3³=x³/27\nb) 25/x⁴',
          answer: 'a) x³/27\nb) 25/x⁴',
        },
        {
          id: 2,
          question: 'Simplify:\na) (3x²/(2y³))³\nb) (5uv³/(7b⁴))²',
          type: 'Medium',
          explaination: 'a) 3³x⁶/(2³y⁹)=27x⁶/(8y⁹)\nb) 25u²v⁶/(49b⁸)',
          answer: 'a) 27x⁶/(8y⁹)\nb) 25u²v⁶/(49b⁸)',
        },
        {
          id: 3,
          question: 'Simplify (2x²y)³/(8xy).',
          type: 'Medium',
          explaination: 'Numerator: (2x²y)³=8x⁶y³\n8x⁶y³/(8xy)=x⁵y²',
          answer: 'x⁵y²',
        },
      ],
      'expressing-values-in-prime-base-form': [
        {
          id: 1,
          question:
            'Express each value as a power of the given prime base:\na) Express 9⁴ as a power of 3.\nb) Express 27⁸ as a power of 3.',
          type: 'Medium',
          explaination: 'a) 9⁴=(3²)⁴=3⁸\nb) 27⁸=(3³)⁸=3²⁴',
          answer: 'a) 3⁸\nb) 3²⁴',
        },
        {
          id: 2,
          question:
            'Express each value as a power of the given prime base:\na) Express 2⁵ × 4² as a power of 2.\nb) Express 5⁴ × 125² as a power of 5.',
          type: 'Medium',
          explaination: 'a) 2⁵ × (2²)²=2⁵ × 2⁴=2⁹\nb) 5⁴ × (5³)²=5⁴ × 5⁶=5¹⁰',
          answer: 'a) 2⁹\nb) 5¹⁰',
        },
        {
          id: 3,
          question:
            'Express each value as a power of the given prime base:\na) Express 4⁷ ÷ 8³ as a power of 2.\nb) Express 27⁵ ÷ 9² as a power of 3.',
          type: 'Medium',
          explaination: 'a) (2²)⁷ ÷ (2³)³=2¹⁴ ÷ 2⁹=2⁵\nb) (3³)⁵ ÷ (3²)²=3¹⁵ ÷ 3⁴=3¹¹',
          answer: 'a) 2⁵\nb) 3¹¹',
        },
        {
          id: 4,
          question:
            'Express each value as a power of the given prime base:\na) Express 8³ × 2⁷ + 4⁸ as a power of 2.\nb) Express 16² - 4⁸ ÷ 8³ as a power of 2.',
          type: 'Hard',
          explaination: 'a) 2⁹ × 2⁷+2¹⁶=2¹⁶+2¹⁶=2 · 2¹⁶=2¹⁷\nb) 2⁸-2¹⁶ ÷ 2⁹=2⁸-2⁷=2⁷(2-1)=2⁷',
          answer: 'a) 2¹⁷\nb) 2⁷',
        },
      ],
      'last-digit-cyclicity': [
        {
          id: 1,
          question: 'What is the last digit of 316³¹⁶ + 631⁶³¹?',
          type: 'Hard',
          explaination:
            'Last digit of 316ⁿ: always 6 (any power of a number ending in 6 ends in 6).\nLast digit of 631ⁿ: always 1 (any power of a number ending in 1 ends in 1).\n6 + 1 = 7',
          answer: '7',
        },
      ],
    },
  },
  {
    'logarithms-exponentials': {
      title: 'Logarithms & Exponentials',
      'evaluating-logarithms': [
        {
          id: 1,
          question: 'Without using a calculator, find the exact value of:\nlog 10',
          type: 'Easy',
          explaination: 'log 10 = 1 since 10¹ = 10',
          answer: '1',
        },
        {
          id: 2,
          question: 'Without using a calculator, find the exact value of:\nlog 100',
          type: 'Easy',
          explaination: 'log 100 = 2 since 10² = 100',
          answer: '2',
        },
        {
          id: 3,
          question: 'Without using a calculator, find the exact value of:\nlog 100,000',
          type: 'Easy',
          explaination: 'log 10⁵ = 5',
          answer: '5',
        },
        {
          id: 4,
          question: 'Without using a calculator, find the exact value of:\nlog 1,000,000',
          type: 'Easy',
          explaination: 'log 10⁶ = 6',
          answer: '6',
        },
        {
          id: 5,
          question: 'Without using a calculator, find the exact value of:\nlog 1',
          type: 'Easy',
          explaination: 'log 1 = 0 since 10⁰ = 1',
          answer: '0',
        },
        {
          id: 6,
          question: 'Without using a calculator, find the exact value of:\nlog 0.1',
          type: 'Easy',
          explaination: '0.1 = 10⁻¹, so log 0.1 = -1',
          answer: '-1',
        },
        {
          id: 7,
          question: 'Without using a calculator, find the exact value of:\nlog 0.01',
          type: 'Easy',
          explaination: '0.01 = 10⁻², so log 0.01 = -2',
          answer: '-2',
        },
        {
          id: 8,
          question: 'Without using a calculator, find the exact value of:\nlog 0.0001',
          type: 'Easy',
          explaination: '0.0001 = 10⁻⁴, so log 0.0001 = -4',
          answer: '-4',
        },
        {
          id: 9,
          question: 'Without using a calculator, find the exact value of:\nlog₂ 2',
          type: 'Easy',
          explaination: 'log₂ 2 = 1 since 2¹ = 2',
          answer: '1',
        },
        {
          id: 10,
          question: 'Without using a calculator, find the exact value of:\nlog₂ 4',
          type: 'Easy',
          explaination: '4 = 2², so log₂ 4 = 2',
          answer: '2',
        },
        {
          id: 11,
          question: 'Without using a calculator, find the exact value of:\nlog₃ 27',
          type: 'Easy',
          explaination: '27 = 3³, so log₃ 27 = 3',
          answer: '3',
        },
        {
          id: 12,
          question: 'Without using a calculator, find the exact value of:\nlog₃ 81',
          type: 'Easy',
          explaination: '81 = 3⁴, so log₃ 81 = 4',
          answer: '4',
        },
        {
          id: 13,
          question: 'Without using a calculator, find the exact value of:\nlog₅ 1',
          type: 'Easy',
          explaination: 'log_b 1 = 0 for any valid base b',
          answer: '0',
        },
        {
          id: 14,
          question: 'Without using a calculator, find the exact value of:\nlog₅ 0.2',
          type: 'Easy',
          explaination: '0.2 = 1/5 = 5⁻¹, so log₅ 0.2 = -1',
          answer: '-1',
        },
        {
          id: 15,
          question: 'Without using a calculator, find the exact value of:\nlog₂ 0.25',
          type: 'Easy',
          explaination: '0.25 = 1/4 = 2⁻², so log₂ 0.25 = -2',
          answer: '-2',
        },
        {
          id: 16,
          question: 'Without using a calculator, find the exact value of:\nlog₂ 0.125',
          type: 'Easy',
          explaination: '0.125 = 1/8 = 2⁻³, so log₂ 0.125 = -3',
          answer: '-3',
        },
      ],
      'solving-logarithmic-equations': [
        {
          id: 1,
          question: 'Without using a calculator, find the exact value of x:\nlog x = 2',
          type: 'Easy',
          explaination: 'log x = 2 ⇒ x = 10² = 100',
          answer: 'x = 100',
        },
        {
          id: 2,
          question: 'Without using a calculator, find the exact value of x:\nlog x = 3',
          type: 'Easy',
          explaination: 'x = 10³ = 1000',
          answer: 'x = 1000',
        },
        {
          id: 3,
          question: 'Without using a calculator, find the exact value of x:\nlog(2x - 4) = 5',
          type: 'Medium',
          explaination: '2x - 4 = 10⁵ = 100000\n2x = 100004\nx = 50002',
          answer: 'x = 50002',
        },
        {
          id: 4,
          question: 'Without using a calculator, find the exact value of x:\nlog(3x + 4) = 3',
          type: 'Medium',
          explaination: '3x + 4 = 10³ = 1000\n3x = 996\nx = 332',
          answer: 'x = 332',
        },
        {
          id: 5,
          question: 'Without using a calculator, find the exact value of x:\nlog(2x - 3) = -1',
          type: 'Medium',
          explaination: '2x - 3 = 10⁻¹ = 0.1\n2x = 3.1\nx = 1.55 = 31/20',
          answer: 'x = 31/20',
        },
        {
          id: 6,
          question: 'Without using a calculator, find the exact value of x:\nlog(x + 2) = -2',
          type: 'Medium',
          explaination: 'x + 2 = 10⁻² = 0.01\nx = 0.01 - 2 = -1.99 = -199/100',
          answer: 'x = -199/100',
        },
        {
          id: 7,
          question: 'Find the exact solution of:\n1 + 2 log x = 9',
          type: 'Medium',
          explaination: '2 log x = 8\nlog x = 4\nx = 10⁴',
          answer: 'x = 10⁴',
        },
        {
          id: 8,
          question: 'Find the exact solution of:\nlog(3x + 4) = 3',
          type: 'Medium',
          explaination: '3x + 4 = 10³ = 1000\n3x = 996\nx = 332',
          answer: 'x = 332',
        },
      ],
      'natural-logarithm-rearranging': [
        {
          id: 1,
          question: 'Rearrange the equation to find an expression for x:\nln x = 2',
          type: 'Easy',
          explaination: 'ln x = 2 ⇒ x = e²',
          answer: 'x = e²',
        },
        {
          id: 2,
          question: 'Rearrange the equation to find an expression for x:\nln x = 5',
          type: 'Easy',
          explaination: 'x = e⁵',
          answer: 'x = e⁵',
        },
        {
          id: 3,
          question: 'Rearrange the equation to find an expression for x:\nln x = y + 1',
          type: 'Easy',
          explaination: 'x = eʸ⁺¹',
          answer: 'x = eʸ⁺¹',
        },
        {
          id: 4,
          question: 'Rearrange the equation to find an expression for x:\nln x = y²',
          type: 'Easy',
          explaination: 'x = e^(y²)',
          answer: 'x = e^(y²)',
        },
        {
          id: 5,
          question: 'Rearrange the equation to find an expression for x:\nln(2x + 4) = y - 3',
          type: 'Medium',
          explaination: '2x + 4 = eʸ⁻³\n2x = eʸ⁻³ - 4\nx = (eʸ⁻³ - 4)/2',
          answer: 'x = (eʸ⁻³ - 4)/2',
        },
        {
          id: 6,
          question: 'Rearrange the equation to find an expression for x:\nln((1/2)x - 6) = 2y + 1',
          type: 'Medium',
          explaination: '(1/2)x - 6 = e²ʸ⁺¹\n(1/2)x = e²ʸ⁺¹ + 6\nx = 2e²ʸ⁺¹ + 12',
          answer: 'x = 2e²ʸ⁺¹ + 12',
        },
      ],
      'simplifying-logarithmic-expressions': [
        {
          id: 1,
          question: 'Simplify the expression:\nlog x + 4 log x',
          type: 'Easy',
          explaination: 'Collect like terms: (1+4) log x = 5 log x',
          answer: '5 log x',
        },
        {
          id: 2,
          question: 'Simplify the expression:\n10 log x - 5 log x',
          type: 'Easy',
          explaination: '(10-5) log x = 5 log x',
          answer: '5 log x',
        },
        {
          id: 3,
          question: 'Simplify the expression:\n(2(log 3x)²)/(log 3x)',
          type: 'Medium',
          explaination: 'Cancel one factor of log 3x:\n(2(log 3x)²)/(log 3x) = 2 log 3x',
          answer: '2 log 3x',
        },
        {
          id: 4,
          question: 'Simplify the expression:\n(log 2x)/(log 2x)²',
          type: 'Medium',
          explaination: 'Cancel one factor of log 2x:\n(log 2x)/(log 2x)² = 1/(log 2x)',
          answer: '1/(log 2x)',
        },
        {
          id: 5,
          question: 'Simplify the expression:\n(ln x + (ln x)²)/(ln x) - ln x',
          type: 'Hard',
          explaination: '(ln x + (ln x)²)/(ln x) = 1 + ln x\n(1 + ln x) - ln x = 1',
          answer: '1',
        },
        {
          id: 6,
          question: 'Simplify the expression:\n(ln x - (ln x)³)/(ln x)² + ln x',
          type: 'Hard',
          explaination:
            '(ln x(1-(ln x)²))/(ln x)² + ln x = (1 - (ln x)²)/(ln x) + ln x\n= (1 - (ln x)² + (ln x)²)/(ln x) = 1/(ln x)',
          answer: '1/(ln x)',
        },
      ],
      'laws-of-logarithms-key-properties': [
        {
          id: 1,
          question: 'Simplify:\nlog 10⁻¹⁵',
          type: 'Easy',
          explaination: 'log 10⁻¹⁵ = -15',
          answer: '-15',
        },
        {
          id: 2,
          question: 'Simplify:\nlog 10¹⁷',
          type: 'Easy',
          explaination: 'log 10¹⁷ = 17',
          answer: '17',
        },
        {
          id: 3,
          question: 'Simplify:\nln e^(4.5)',
          type: 'Easy',
          explaination: 'ln e^(4.5) = 4.5',
          answer: '4.5',
        },
        {
          id: 4,
          question: 'Simplify:\nln e^(-1.5)',
          type: 'Easy',
          explaination: 'ln e^(-1.5) = -1.5',
          answer: '-1.5',
        },
        {
          id: 5,
          question: 'Simplify:\n10^(log 13)',
          type: 'Easy',
          explaination: '10^(log₁₀ 13) = 13',
          answer: '13',
        },
        {
          id: 6,
          question: 'Simplify:\n10^(log 7)',
          type: 'Easy',
          explaination: '10^(log₁₀ 7) = 7',
          answer: '7',
        },
        {
          id: 7,
          question: 'Simplify:\ne^(ln 3)',
          type: 'Easy',
          explaination: 'e^(ln 3) = 3',
          answer: '3',
        },
        {
          id: 8,
          question: 'Simplify:\ne^(ln 7)',
          type: 'Easy',
          explaination: 'e^(ln 7) = 7',
          answer: '7',
        },
        {
          id: 9,
          question: 'Simplify:\n10^(3 log 2)',
          type: 'Medium',
          explaination: '10^(3 log 2) = 10^(log 2³) = 10^(log 8) = 8',
          answer: '8',
        },
        {
          id: 10,
          question: 'Simplify:\n10^(2 log 3)',
          type: 'Medium',
          explaination: '10^(2 log 3) = 10^(log 3²) = 10^(log 9) = 9',
          answer: '9',
        },
        {
          id: 11,
          question: 'Simplify:\ne^(2 ln 5)',
          type: 'Medium',
          explaination: 'e^(2 ln 5) = e^(ln 5²) = 5² = 25',
          answer: '25',
        },
        {
          id: 12,
          question: 'Simplify:\ne^(4 ln 3)',
          type: 'Medium',
          explaination: 'e^(4 ln 3) = e^(ln 3⁴) = 3⁴ = 81',
          answer: '81',
        },
        {
          id: 13,
          question: 'Simplify:\n10^(-log 3)',
          type: 'Medium',
          explaination: '10^(-log 3) = 10^(log 3⁻¹) = 3⁻¹ = 1/3',
          answer: '1/3',
        },
        {
          id: 14,
          question: 'Simplify:\n10^(-log 6)',
          type: 'Medium',
          explaination: '10^(-log 6) = 1/6',
          answer: '1/6',
        },
        {
          id: 15,
          question: 'Simplify:\ne^(-5 ln 2)',
          type: 'Medium',
          explaination: 'e^(-5 ln 2) = e^(ln 2⁻⁵) = 2⁻⁵ = 1/32',
          answer: '1/32',
        },
        {
          id: 16,
          question: 'Simplify:\ne^(-3 ln 4)',
          type: 'Medium',
          explaination: 'e^(-3 ln 4) = e^(ln 4⁻³) = 4⁻³ = 1/64',
          answer: '1/64',
        },
      ],
      'solving-exponential-equations-exact-form': [
        {
          id: 1,
          question: 'Find x in exact form:\n10ˣ⁻² = 7',
          type: 'Medium',
          explaination: 'x - 2 = log 7\nx = log 7 + 2',
          answer: 'x = log 7 + 2',
        },
        {
          id: 2,
          question: 'Find x in exact form:\n10ˣ⁺⁴ = 13',
          type: 'Medium',
          explaination: 'x + 4 = log 13\nx = log 13 - 4',
          answer: 'x = log 13 - 4',
        },
        {
          id: 3,
          question: 'Find x in exact form:\n10ˣ⁻² = 70',
          type: 'Medium',
          explaination: 'x - 2 = log 70\nx = log 70 + 2 = log 7 + 3',
          answer: 'x = log 70 + 2',
        },
        {
          id: 4,
          question: 'Find x in exact form:\n10ˣ⁺⁴ = 1300',
          type: 'Medium',
          explaination: 'x + 4 = log 1300\nx = log 1300 - 4 = log 13 - 2',
          answer: 'x = log 1300 - 4',
        },
        {
          id: 5,
          question: 'Find x in exact form:\neˣ⁺² = k - 2',
          type: 'Medium',
          explaination: 'x + 2 = ln(k-2)\nx = ln(k-2) - 2',
          answer: 'x = ln(k-2) - 2',
        },
        {
          id: 6,
          question: 'Find x in exact form:\neˣ⁺² = 2k + 1',
          type: 'Medium',
          explaination: 'x + 2 = ln(2k+1)\nx = ln(2k+1) - 2',
          answer: 'x = ln(2k+1) - 2',
        },
        {
          id: 7,
          question: 'Find the exact solution of:\n5 × 20ˣ = 8 × 2ˣ',
          type: 'Hard',
          explaination: '5 × 20ˣ = 8 × 2ˣ\n(20/2)ˣ = 8/5\n10ˣ = 8/5\nx = log(8/5) = log 8 - log 5',
          answer: 'x = (ln 8 - ln 5)/(ln 20 - ln 2) = (ln(8/5))/(ln 10)',
        },
      ],
      'real-world-applications-exponential-decay': [
        {
          id: 1,
          question:
            'The radioactivity (R) of a substance after a time t days is modelled by R = 10 × e^(-0.1t).\nFind the initial (t = 0) radioactivity.',
          type: 'Medium',
          explaination: 'R = 10 × e⁰ = 10 × 1 = 10',
          answer: 'R = 10',
        },
        {
          id: 2,
          question:
            'The radioactivity (R) of a substance after a time t days is modelled by R = 10 × e^(-0.1t).\nFind the time taken for the radioactivity to fall to half of its original value.',
          type: 'Medium',
          explaination:
            'Set R = 5:\n5 = 10e^(-0.1t)\ne^(-0.1t) = 0.5\n-0.1t = ln 0.5 = -ln 2\nt = (ln 2)/0.1 ≈ 6.93 days',
          answer: 't = (ln 2)/0.1 ≈ 6.93 days',
        },
      ],
      'real-world-applications-exponential-growth': [
        {
          id: 1,
          question:
            'The population of bacteria (B) at time t hours after being added to an agar dish is modelled by B = 1000 × e^(0.1t).\nFind the number of bacteria initially (t = 0).',
          type: 'Easy',
          explaination: 'B = 1000 × e⁰ = 1000',
          answer: 'B = 1000',
        },
        {
          id: 2,
          question:
            'The population of bacteria (B) at time t hours after being added to an agar dish is modelled by B = 1000 × e^(0.1t).\nFind the number of bacteria after 2 hours.',
          type: 'Easy',
          explaination: 'B = 1000 × e^(0.2) ≈ 1000 × 1.2214 ≈ 1221',
          answer: 'B ≈ 1221',
        },
        {
          id: 3,
          question:
            'The population of bacteria (B) is modelled by B = 1000 × e^(0.1t).\nFind an expression for the time it takes for B to reach 3000. Use technology to evaluate this expression.',
          type: 'Medium',
          explaination:
            '3000 = 1000e^(0.1t)\ne^(0.1t) = 3\n0.1t = ln 3\nt = (ln 3)/0.1 ≈ 10.986 ≈ 11.0 hours (3 s.f.)',
          answer: 't = (ln 3)/0.1 ≈ 11.0 hours',
        },
        {
          id: 4,
          question:
            'The population of penguins (P) after t years on two islands is modelled by:\nFirst island: P = 200 × e^(0.1t)\nSecond island: P = 100 × e^(0.25t)\nHow many years are required before the population of penguins on both islands is equal?',
          type: 'Hard',
          explaination:
            'Set equal:\n200e^(0.1t) = 100e^(0.25t)\n2 = e^(0.15t)\n0.15t = ln 2\nt = (ln 2)/0.15 ≈ 4.62 years',
          answer: 't = (ln 2)/0.15 ≈ 4.62 years',
        },
      ],
      'real-world-applications-logarithmic-scale': [
        {
          id: 1,
          question:
            'One formula for the pH of a solution is given by pH = -log [H⁺], where [H⁺] is the concentration of H⁺ ions in moles per litre.\nA solution contains 2.5 × 10⁻⁸ moles per litre of H⁺ ions. Find the pH of this solution.',
          type: 'Medium',
          explaination:
            'pH = -log(2.5 × 10⁻⁸)\n= -(log 2.5 + (-8))\n= 8 - log 2.5 ≈ 7.602\n≈ 7.60 (3 s.f.)',
          answer: 'pH ≈ 7.60',
        },
        {
          id: 2,
          question:
            'One formula for the pH of a solution is given by pH = -log [H⁺].\nA solution of hydrochloric acid has a pH of 1.9. Find the concentration of H⁺ ions.',
          type: 'Medium',
          explaination:
            '1.9 = -log [H⁺]\nlog [H⁺] = -1.9\n[H⁺] = 10^(-1.9) ≈ 0.01259 ≈ 1.26 × 10⁻² mol/l',
          answer: '[H⁺] ≈ 1.26 × 10⁻² mol/l',
        },
        {
          id: 3,
          question:
            'The decibel scale formula is L = 10 log(10¹²I) where L is the noise level in decibels and I is sound intensity in W/m².\nThe sound intensity inside a car is 5 × 10⁻⁷ W/m². Find the noise level in the car.',
          type: 'Medium',
          explaination:
            'L = 10 log(10¹² × 5 × 10⁻⁷)\n= 10 log(5 × 10⁵)\n= 10(log 5 + 5) ≈ 10 × 5.699 = 56.99 ≈ 57.0 dB',
          answer: 'L = 57.0 dB',
        },
        {
          id: 4,
          question:
            'Using L = 10 log(10¹²I), the sound intensity in a factory is 5 × 10⁻⁶ W/m². Find the noise level in the factory.',
          type: 'Medium',
          explaination: 'L = 10 log(10¹² × 5 × 10⁻⁶)\n= 10 log(5 × 10⁶)\n= 10(log 5 + 6) ≈ 67.0 dB',
          answer: 'L = 67.0 dB',
        },
        {
          id: 5,
          question:
            'Using L = 10 log(10¹²I), describe the effect on the noise level of multiplying the sound intensity by 10.',
          type: 'Medium',
          explaination:
            'L_(new) = 10 log(10¹² × 10I) = 10 log(10¹³I) = 10 log(10¹²I) + 10\nSo noise level increases by 10 dB.',
          answer: 'Noise level increases by 10 dB',
        },
        {
          id: 6,
          question:
            'Using L = 10 log(10¹²I), any noise level above 90 dB is considered dangerous. What sound intensity does this correspond to?',
          type: 'Medium',
          explaination: '90 = 10 log(10¹²I)\n9 = log(10¹²I)\n10¹²I = 10⁹\nI = 10⁻³ W/m²',
          answer: 'I = 10⁻³ W/m²',
        },
      ],
      'exponential-models': [
        {
          id: 1,
          question:
            'The radioactivity R of a substance after t days is modelled by R = 10 × 0.9ᵗ. Find the initial (i.e. t = 0) radioactivity.',
          type: 'Medium',
          explaination: 'R = 10 × 0.9⁰ = 10 × 1 = 10',
          answer: 'R = 10',
        },
        {
          id: 2,
          question:
            'The radioactivity R of a substance after t days is modelled by R = 10 × 0.9ᵗ. Find the time taken for the radioactivity to fall to half of its original value.',
          type: 'Medium',
          explaination: '5 = 10 × 0.9ᵗ ⇒ 0.9ᵗ = 0.5 ⇒ t = (ln 0.5)/(ln 0.9) ≈ 6.58',
          answer: 't ≈ 6.58 days',
        },
        {
          id: 3,
          question:
            'The population of bacteria B at time t hours after being added to an agar dish is modelled by B = 1000 × 1.1ᵗ. Find the number of bacteria initially (i.e. t = 0).',
          type: 'Medium',
          explaination: 'B = 1000 × 1.1⁰ = 1000',
          answer: 'B = 1000',
        },
        {
          id: 4,
          question:
            'The population of bacteria B at time t hours after being added to an agar dish is modelled by B = 1000 × 1.1ᵗ. Find the number of bacteria after 2 hours.',
          type: 'Medium',
          explaination: 'B = 1000 × 1.1² = 1000 × 1.21 = 1210',
          answer: 'B = 1210',
        },
        {
          id: 5,
          question:
            'The population of bacteria B at time t hours after being added to an agar dish is modelled by B = 1000 × 1.1ᵗ. Find an expression for the time it takes to reach 2000. Use technology to evaluate.',
          type: 'Medium',
          explaination: '2000 = 1000 × 1.1ᵗ ⇒ 1.1ᵗ = 2 ⇒ t = (ln 2)/(ln 1.1) ≈ 7.27',
          answer: 't = (ln 2)/(ln 1.1) ≈ 7.27 hours',
        },
        {
          id: 6,
          question:
            'The population of penguins P after t years on two islands is modelled by:\nFirst island: P = 200 × 1.1ᵗ\nSecond island: P = 100 × 1.2ᵗ\nHow many years are required before the population of penguins on both islands is equal?',
          type: 'Hard',
          explaination:
            '200 × 1.1ᵗ = 100 × 1.2ᵗ ⇒ 2 = (1.2/1.1)ᵗ ⇒ t = (ln 2)/(ln(12/11)) ≈ 7.99 ≈ 8 years',
          answer: 't ≈ 8 years',
        },
        {
          id: 7,
          question:
            "Moore's law states that the density of transistors on an integrated circuit doubles every 2 years. Write an expression for the time taken for the density to multiply by 10, and use technology to evaluate this expression.",
          type: 'Medium',
          explaination:
            'If D₀ is initial density: D = D₀ × 2^(t/2). Setting D = 10D₀: 2^(t/2) = 10 ⇒ t = 2 log₂ 10 = (2 ln 10)/(ln 2) ≈ 6.64',
          answer: 't = 2 log₂ 10 = (2 ln 10)/(ln 2) ≈ 6.64 years',
        },
      ],
    },
  },
]
// export const AASLQuestionAndAnswer = [
//   {
//     number: {
//       title: 'Number',
//       'standard-form': [
//         {
//           id: 1,
//           question: 'Write 3.2 × 10⁴ as a normal number.',
//           type: 'Easy',
//           explaination: 'Move the decimal point 4 places to the right: 3.2 × 10⁴ = 32,000',
//           answer: '32,000',
//         },
//         {
//           id: 2,
//           question: 'Write 6.92 × 10⁶ as a normal number.',
//           type: 'Easy',
//           explaination: 'Move the decimal point 6 places to the right: 6.92 × 10⁶ = 6,920,000',
//           answer: '6,920,000',
//         },
//         {
//           id: 3,
//           question: 'Write 4.8 × 10⁻² as a decimal.',
//           type: 'Medium',
//           explaination: 'Move the decimal point 2 places to the left: 4.8 × 10⁻² = 0.048',
//           answer: '0.048',
//         },
//         {
//           id: 4,
//           question: 'Write 9.85 × 10⁻⁴ as a decimal.',
//           type: 'Hard',
//           explaination: 'Move the decimal point 4 places to the left: 9.85 × 10⁻⁴ = 0.000985',
//           answer: '0.000985',
//         },
//       ],
//       'writing-in-standard-form': [
//         {
//           id: 1,
//           question: 'Write the value 612.07 in standard index form.',
//           type: 'Easy',
//           explaination:
//             'Move the decimal point 2 places to the left to get a number between 1 and 10: 612.07 = 6.1207 × 10²',
//           answer: '6.1207 × 10²',
//         },
//         {
//           id: 2,
//           question: 'Write the value 3076.91 in standard index form.',
//           type: 'Easy',
//           explaination:
//             'Move the decimal point 3 places to the left to get a number between 1 and 10: 3076.91 = 3.07691 × 10³',
//           answer: '3.07691 × 10³',
//         },
//         {
//           id: 3,
//           question: 'Write the value 0.0030617 in standard index form.',
//           type: 'Easy',
//           explaination:
//             'Move the decimal point 3 places to the right to get a number between 1 and 10: 0.0030617 = 3.0617 × 10⁻³',
//           answer: '3.0617 × 10⁻³',
//         },
//         {
//           id: 4,
//           question: 'Write the value 0.02219 in standard index form.',
//           type: 'Easy',
//           explaination:
//             'Move the decimal point 2 places to the right to get a number between 1 and 10: 0.02219 = 2.219 × 10⁻²',
//           answer: '2.219 × 10⁻²',
//         },
//       ],
//       'multiplying-in-standard-form': [
//         {
//           id: 1,
//           question:
//             'Write (2 × 10⁴) × (3.4 × 10³) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination:
//             'Multiply the coefficients: 2 × 3.4 = 6.8. Add the powers: 10⁴⁺³ = 10⁷. Result: 6.8 × 10⁷',
//           answer: '6.8 × 10⁷',
//         },
//         {
//           id: 2,
//           question:
//             'Write (3.2 × 10⁵) × (3 × 10⁶) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination:
//             'Multiply the coefficients: 3.2 × 3 = 9.6. Add the powers: 10⁵⁺⁶ = 10¹¹. Result: 9.6 × 10¹¹',
//           answer: '9.6 × 10¹¹',
//         },
//         {
//           id: 3,
//           question: 'Write (5 × 10⁴) × (2 × 10⁻⁵) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Multiply the coefficients: 5 × 2 = 10. Add the powers: 10⁴⁺⁽⁻⁵⁾ = 10⁻¹. Then, 10 × 10⁻¹ = 1 × 10⁰ = 1.',
//           answer: '1',
//         },
//         {
//           id: 4,
//           question:
//             'Write (3 × 10⁻²) × (4 × 10⁻⁴) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Multiply the coefficients: 3 × 4 = 12. Add the powers: 10⁻²⁺⁽⁻⁴⁾ = 10⁻⁶. Then, 12 × 10⁻⁶ = 1.2 × 10⁻⁵.',
//           answer: '1.2 × 10⁻⁵',
//         },
//       ],
//       'squaring-in-standard-form': [
//         {
//           id: 1,
//           question: 'Write (5 × 10¹⁰)² in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Square the coefficient: 5² = 25. Square the power of 10: (10¹⁰)² = 10²⁰. Then, 25 × 10²⁰ = 2.5 × 10²¹.',
//           answer: '2.5 × 10²¹',
//         },
//         {
//           id: 2,
//           question: 'Write (6 × 10⁶)² in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Square the coefficient: 6² = 36. Square the power of 10: (10⁶)² = 10¹². Then, 36 × 10¹² = 3.6 × 10¹³.',
//           answer: '3.6 × 10¹³',
//         },
//       ],
//       'dividing-in-standard-form': [
//         {
//           id: 1,
//           question: 'Write (6 × 10²) ÷ (3 × 10⁴) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination:
//             'Divide the coefficients: 6 ÷ 3 = 2. Subtract the powers: 10²⁻⁴ = 10⁻². Result: 2 × 10⁻².',
//           answer: '2 × 10⁻²',
//         },
//         {
//           id: 2,
//           question: 'Write (8 × 10⁶) ÷ (2 × 10¹⁰) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination:
//             'Divide the coefficients: 8 ÷ 2 = 4. Subtract the powers: 10⁶⁻¹⁰ = 10⁻⁴. Result: 4 × 10⁻⁴.',
//           answer: '4 × 10⁻⁴',
//         },
//         {
//           id: 3,
//           question: 'Write (1 × 10⁵) ÷ (2 × 10⁴) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Divide the coefficients: 1 ÷ 2 = 0.5. Subtract the powers: 10⁵⁻⁴ = 10¹. Then, 0.5 × 10¹ = 5 × 10⁰ = 5.',
//           answer: '5',
//         },
//         {
//           id: 4,
//           question: 'Write (2 × 10⁵) ÷ (8 × 10²) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Divide the coefficients: 2 ÷ 8 = 0.25. Subtract the powers: 10⁵⁻² = 10³. Then, 0.25 × 10³ = 2.5 × 10².',
//           answer: '2.5 × 10²',
//         },
//         {
//           id: 5,
//           question:
//             'Write (8.4 × 10¹⁴) ÷ (4 × 10³) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Divide the coefficients: 8.4 ÷ 4 = 2.1. Subtract the powers: 10¹⁴⁻³ = 10¹¹. Result: 2.1 × 10¹¹.',
//           answer: '2.1 × 10¹¹',
//         },
//         {
//           id: 6,
//           question:
//             'Write (9.3 × 10¹⁵) ÷ (3 × 10⁶) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination:
//             'Divide the coefficients: 9.3 ÷ 3 = 3.1. Subtract the powers: 10¹⁵⁻⁶ = 10⁹. Result: 3.1 × 10⁹.',
//           answer: '3.1 × 10⁹',
//         },
//       ],
//       // New subtopics (1.6 – 1.10) — add questions from the AA SL question bank
//       'adding-subtracting-in-standard-form': [],
//       'proof-multiplication-in-standard-form': [],
//       'standard-form-multi-part-application': [],
//       'standard-form-real-world-context': [],
//       'generalising-standard-form-algebra': [],
//     },
//   },
//   {
//     'sequences-and-series': {
//       title: 'Sequences and Series',
//       'arithmetic-sequences-nth-term': [
//         {
//           id: 1,
//           question: 'Given u₁ = 5 and d = 4, find u₁₂.',
//           type: 'Easy',
//           explaination: 'Use uₙ = u₁ + (n − 1)d. u₁₂ = 5 + 11 × 4 = 5 + 44 = 49.',
//           answer: 'u₁₂ = 49',
//         },
//         {
//           id: 2,
//           question: 'Given u₁ = 11 and d = 3, find u₂₀.',
//           type: 'Easy',
//           explaination: 'u₂₀ = 11 + 19 × 3 = 11 + 57 = 68.',
//           answer: 'u₂₀ = 68',
//         },
//         {
//           id: 3,
//           question: 'Given u₁ = 13 and d = −7, find u₆.',
//           type: 'Easy',
//           explaination: 'u₆ = 13 + 5 × (−7) = 13 − 35 = −22.',
//           answer: 'u₆ = −22',
//         },
//         {
//           id: 4,
//           question: 'Given u₁ = 11 and d = −3, find u₁₈.',
//           type: 'Easy',
//           explaination: 'u₁₈ = 11 + 17 × (−3) = 11 − 51 = −40.',
//           answer: 'u₁₈ = −40',
//         },
//       ],
//       'finding-common-difference': [
//         {
//           id: 1,
//           question: 'Given u₁ = 7 and u₅ = 15, find the common difference d.',
//           type: 'Easy',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₅ = 7 + 4d. Therefore, 15 = 7 + 4d → 4d = 8 → d = 2.',
//           answer: 'd = 2',
//         },
//         {
//           id: 2,
//           question: 'Given u₁ = 19 and u₉ = 75, find the common difference d.',
//           type: 'Easy',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₉ = 19 + 8d. Therefore, 75 = 19 + 8d → 8d = 56 → d = 7.',
//           answer: 'd = 7',
//         },
//         {
//           id: 3,
//           question: 'Given u₁ = 10 and u₂₁ = 0, find the common difference d.',
//           type: 'Easy',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₂₁ = 10 + 20d. Therefore, 0 = 10 + 20d → 20d = −10 → d = −0.5.',
//           answer: 'd = −0.5',
//         },
//         {
//           id: 4,
//           question: 'Given u₁ = 100 and u₉ = 80, find the common difference d.',
//           type: 'Easy',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₉ = 100 + 8d. Therefore, 80 = 100 + 8d → 8d = −20 → d = −2.5.',
//           answer: 'd = −2.5',
//         },
//       ],
//       'finding-first-term-and-common-difference': [
//         {
//           id: 1,
//           question: 'Given u₈ = 12 and u₁₁ = 33, find u₁ and d.',
//           type: 'Medium',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₁₁ − u₈ = 3d = 33 − 12 = 21, so d = 7. Then u₁ = u₈ − 7d = 12 − 49 = −37.',
//           answer: 'd = 7, u₁ = −37',
//         },
//         {
//           id: 2,
//           question: 'Given u₇ = 11 and u₁₂ = 56, find u₁ and d.',
//           type: 'Medium',
//           explaination:
//             'Use uₙ = u₁ + (n − 1)d. u₁₂ − u₇ = 5d = 56 − 11 = 45, so d = 9. Then u₁ = u₇ − 6d = 11 − 54 = −43.',
//           answer: 'd = 9, u₁ = −43',
//         },
//       ],
//       'formula-for-nth-term': [
//         {
//           id: 1,
//           question:
//             'Given u₁ = 8 and d = −3, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination: 'Use uₙ = u₁ + (n − 1)d. uₙ = 8 + (n − 1)(−3) = 8 − 3n + 3 = 11 − 3n.',
//           answer: 'uₙ = 11 − 3n',
//         },
//         {
//           id: 2,
//           question:
//             'Given u₁ = 10 and d = 4, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Easy',
//           explaination: 'Use uₙ = u₁ + (n − 1)d. uₙ = 10 + (n − 1)(4) = 10 + 4n − 4 = 4n + 6.',
//           answer: 'uₙ = 4n + 6',
//         },
//         {
//           id: 3,
//           question:
//             'Given u₁ = 3 and u₅ = 11, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination:
//             'Use u₅ = u₁ + 4d. 11 = 3 + 4d → 4d = 8 → d = 2. Then uₙ = 3 + (n − 1)(2) = 2n + 1.',
//           answer: 'uₙ = 2n + 1',
//         },
//         {
//           id: 4,
//           question:
//             'Given u₁ = 10 and u₁₁ = 50, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination:
//             'Use u₁₁ = u₁ + 10d. 50 = 10 + 10d → 10d = 40 → d = 4. Then uₙ = 10 + (n − 1)(4) = 4n + 6.',
//           answer: 'uₙ = 4n + 6',
//         },
//         {
//           id: 5,
//           question:
//             'Given u₂ = 6 and u₅ = 21, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination:
//             'Find the common difference: 3d = 21 − 6 = 15 → d = 5. Then u₁ = u₂ − d = 6 − 5 = 1. Therefore, uₙ = 1 + (n − 1)(5) = 5n − 4.',
//           answer: 'uₙ = 5n − 4',
//         },
//         {
//           id: 6,
//           question:
//             'Given u₃ = 14 and u₆ = −15, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Hard',
//           explaination:
//             'Find the common difference: 3d = −15 − 14 = −29 → d = −29/3. Then u₁ = u₃ − 2d = 14 − 2(−29/3) = 100/3. Therefore, uₙ = 100/3 + (n − 1)(−29/3) = (129 − 29n)/3.',
//           answer: 'uₙ = (129 − 29n)/3',
//         },
//       ],
//       // New subtopics (2.5 – 2.10) — add questions from the AA SL question bank
//       'arithmetic-series-sum': [],
//       'sigma-notation': [],
//       'mixed-problem-solving': [],
//       'sum-formula-given-sn': [],
//       'sum-to-infinity-of-a-geometric-series': [],
//       'convergence-of-infinite-geometric-series': [],
//     },
//   },
//   {
//     'financial-mathematics': {
//       title: 'Financial Mathematics',
//       'compound-interest-annual': [
//         {
//           id: 1,
//           question:
//             'Find the final value of the investment: $2000 invested at 6% compounded annually for 3 years.',
//           type: 'Easy',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. FV = 2000 × (1 + 0.06)³ = 2000 × 1.191016 = $2382.03.',
//           answer: '$2382.03',
//         },
//         {
//           id: 2,
//           question:
//             'Find the final value of the investment: $3000 invested at 4% compounded annually for 18 years.',
//           type: 'Easy',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. FV = 3000 × (1.04)¹⁸ ≈ 3000 × 2.02582 = $6077.45.',
//           answer: '$6077.45',
//         },
//         {
//           id: 3,
//           question:
//             'Find the final value of the investment: $500 invested at 2.5% compounded quarterly for 6 years.',
//           type: 'Easy',
//           explaination:
//             'For quarterly compounding, use FV = PV(1 + r/k)ⁿᵏ. FV = 500 × (1 + 0.025/4)²⁴ = 500 × (1.00625)²⁴ ≈ $580.95.',
//           answer: '$580.95',
//         },
//         {
//           id: 4,
//           question:
//             'Find the final value of the investment: $100 invested at 3.5% compounded twice-yearly for 10 years.',
//           type: 'Easy',
//           explaination:
//             'For twice-yearly compounding, use FV = PV(1 + r/k)ⁿᵏ. FV = 100 × (1 + 0.035/2)²⁰ = 100 × (1.0175)²⁰ ≈ $141.48.',
//           answer: '$141.48',
//         },
//         {
//           id: 5,
//           question:
//             'Find the final value of the investment: $5000 invested at 5% compounded monthly for 60 months.',
//           type: 'Easy',
//           explaination:
//             'For monthly compounding, use FV = PV(1 + r/12)ⁿ, where n is the total number of months. FV = 5000 × (1 + 0.05/12)⁶⁰ ≈ $6416.79.',
//           answer: '$6416.79',
//         },
//         {
//           id: 6,
//           question:
//             'Find the final value of the investment: $800 invested at 4% compounded monthly for 100 months.',
//           type: 'Easy',
//           explaination:
//             'For monthly compounding, use FV = PV(1 + r/12)ⁿ. FV = 800 × (1 + 0.04/12)¹⁰⁰ ≈ $1116.39.',
//           answer: '$1116.39',
//         },
//       ],
//       'time-to-reach-a-target-value': [
//         {
//           id: 1,
//           question:
//             'Find how long is required to achieve the given final value: $100 invested at 5% compounded annually. £1000 is required.',
//           type: 'Medium',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 100 × (1.05)ⁿ = 1000 → (1.05)ⁿ = 10. Taking logarithms, n = ln(10) / ln(1.05) ≈ 47.6 years. Treat both currency symbols as the same unit.',
//           answer: 'n ≈ 47.6 years',
//         },
//         {
//           id: 2,
//           question:
//             'Find how long is required to achieve the given final value: $500 invested at 4% compounded annually. £600 is required.',
//           type: 'Easy',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 500 × (1.04)ⁿ = 600 → (1.04)ⁿ = 1.2. Taking logarithms, n = ln(1.2) / ln(1.04) ≈ 4.64 years. Treat both currency symbols as the same unit.',
//           answer: 'n ≈ 4.64 years',
//         },
//         {
//           id: 3,
//           question:
//             'Find how long is required to achieve the given final value: $300 invested at 2% compounded monthly. £400 is required.',
//           type: 'Medium',
//           explaination:
//             'For monthly compounding, use FV = PV(1 + r/12)ⁿ, where n is the number of months. 300 × (1 + 0.02/12)ⁿ = 400 → n = ln(4/3) / ln(1 + 0.02/12) ≈ 172.1 months. Converting to years, 172.1 / 12 ≈ 14.3 years. Treat both currency symbols as the same unit.',
//           answer: 'n ≈ 172.1 months ≈ 14.3 years',
//         },
//         {
//           id: 4,
//           question:
//             'Find how long is required to achieve the given final value: $1000 invested at 1.5% compounded monthly. £1100 is required.',
//           type: 'Medium',
//           explaination:
//             'For monthly compounding, use FV = PV(1 + r/12)ⁿ, where n is the number of months. 1000 × (1 + 0.015/12)ⁿ = 1100. Taking logarithms, n = ln(1.1) / ln(1 + 0.015/12) ≈ 76.3 months. Converting to years, 76.3 / 12 ≈ 6.4 years. Treat both currency symbols as the same unit.',
//           answer: 'n ≈ 76.3 months ≈ 6.4 years',
//         },
//       ],
//       'finding-the-interest-rate': [
//         {
//           id: 1,
//           question:
//             'Find the annual interest rate required (compounded annually): €500 invested for 10 years. €1000 is required.',
//           type: 'Medium',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 500(1 + r)¹⁰ = 1000 → (1 + r)¹⁰ = 2 → 1 + r = 2^(1/10). Therefore, r = 2^(0.1) − 1 ≈ 0.0718 = 7.18%.',
//           answer: 'r ≈ 7.18%',
//         },
//         {
//           id: 2,
//           question:
//             'Find the annual interest rate required (compounded annually): €500 invested for 10 years. €800 is required.',
//           type: 'Medium',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 500(1 + r)¹⁰ = 800 → (1 + r)¹⁰ = 1.6 → 1 + r = 1.6^(1/10). Therefore, r = 1.6^(0.1) − 1 ≈ 0.0481 = 4.81%.',
//           answer: 'r ≈ 4.81%',
//         },
//         {
//           id: 3,
//           question:
//             'Find the annual interest rate required (compounded annually): €100 invested for 5 years. €200 is required.',
//           type: 'Medium',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 100(1 + r)⁵ = 200 → (1 + r)⁵ = 2 → 1 + r = 2^(1/5). Therefore, r = 2^(1/5) − 1 ≈ 0.1487 = 14.87%.',
//           answer: 'r ≈ 14.87%',
//         },
//         {
//           id: 4,
//           question:
//             'Find the annual interest rate required (compounded annually): €100 invested for 10 years. €200 is required.',
//           type: 'Medium',
//           explaination:
//             'Use the compound interest formula FV = PV(1 + r)ⁿ. 100(1 + r)¹⁰ = 200 → (1 + r)¹⁰ = 2 → 1 + r = 2^(1/10). Therefore, r = 2^(0.1) − 1 ≈ 0.0718 = 7.18%.',
//           answer: 'r ≈ 7.18%',
//         },
//       ],
//       depreciation: [
//         {
//           id: 1,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value $1200, annual depreciation 10% for 10 years.',
//           type: 'Easy',
//           explaination:
//             'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 1200 × (1 − 0.10)¹⁰ = 1200 × (0.9)¹⁰ ≈ $418.42.',
//           answer: '$418.42',
//         },
//         {
//           id: 2,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value $1200, annual depreciation 20% for 10 years.',
//           type: 'Easy',
//           explaination:
//             'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 1200 × (1 − 0.20)¹⁰ = 1200 × (0.8)¹⁰ ≈ $128.85.',
//           answer: '$128.85',
//         },
//         {
//           id: 3,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value £30,000, annual depreciation 15% for 5 years.',
//           type: 'Easy',
//           explaination:
//             'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 30000 × (1 − 0.15)⁵ = 30000 × (0.85)⁵ ≈ £13,311.22.',
//           answer: '£13,311.22',
//         },
//         {
//           id: 4,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value £30,000, annual depreciation 25% for 5 years.',
//           type: 'Easy',
//           explaination:
//             'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 30000 × (1 − 0.25)⁵ = 30000 × (0.75)⁵ ≈ £7,119.14.',
//           answer: '£7,119.14',
//         },
//       ],
//       // New subtopics (3.5 – 3.10) — add questions from the AA SL question bank
//       'compound-interest-non-annual': [],
//       'real-value-of-investment-with-inflation': [],
//       'comparing-compounding-methods': [],
//       'equivalent-annual-rate-ear': [],
//       'real-terms-growth-with-inflation': [],
//       hyperinflation: [],
//     },
//   },
//   {
//     'number-algebra': {
//       title: 'Number & Algebra',
//       'laws-of-indices-multiplication': [
//         {
//           id: 1,
//           question: 'Simplify: a) x² × x⁴  b) x⁵ × x⁷',
//           type: 'Easy',
//           explaination: 'Use the index law aᵐ × aⁿ = aᵐ⁺ⁿ. a) x²⁺⁴ = x⁶. b) x⁵⁺⁷ = x¹².',
//           answer: 'a) x⁶  b) x¹²',
//         },
//         {
//           id: 2,
//           question: 'Simplify: a) y³ × y³  b) z⁵ × z⁵',
//           type: 'Easy',
//           explaination:
//             'When multiplying powers with the same base, add the exponents. a) y³⁺³ = y⁶. b) z⁵⁺⁵ = z¹⁰.',
//           answer: 'a) y⁶  b) z¹⁰',
//         },
//         {
//           id: 3,
//           question: 'Simplify: a) a⁶ × a  b) a¹⁰ × a',
//           type: 'Easy',
//           explaination:
//             'Recall that a = a¹. Add the exponents when multiplying powers with the same base. a) a⁶⁺¹ = a⁷. b) a¹⁰⁺¹ = a¹¹.',
//           answer: 'a) a⁷  b) a¹¹',
//         },
//         {
//           id: 4,
//           question: 'Simplify (do not evaluate): a) 5⁷ × 5¹⁰  b) 2¹² × 2¹²',
//           type: 'Easy',
//           explaination:
//             'Use the index law aᵐ × aⁿ = aᵐ⁺ⁿ. a) 5⁷⁺¹⁰ = 5¹⁷. b) 2¹²⁺¹² = 2²⁴. Leave the answers in index form without evaluating.',
//           answer: 'a) 5¹⁷  b) 2²⁴',
//         },
//       ],
//       'laws-of-indices-power-of-a-power': [
//         {
//           id: 1,
//           question: 'Simplify: a) (x³)⁵  b) (x⁴)⁸',
//           type: 'Easy',
//           explaination:
//             'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (x³)⁵ = x³ˣ⁵ = x¹⁵. b) (x⁴)⁸ = x⁴ˣ⁸ = x³².',
//           answer: 'a) x¹⁵  b) x³²',
//         },
//         {
//           id: 2,
//           question: 'Simplify: a) (y⁴)⁴  b) (z⁵)⁵',
//           type: 'Easy',
//           explaination:
//             'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (y⁴)⁴ = y⁴ˣ⁴ = y¹⁶. b) (z⁵)⁵ = z⁵ˣ⁵ = z²⁵.',
//           answer: 'a) y¹⁶  b) z²⁵',
//         },
//         {
//           id: 3,
//           question: 'Simplify: a) (c⁷)²  b) (c²)⁷',
//           type: 'Easy',
//           explaination:
//             'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (c⁷)² = c⁷ˣ² = c¹⁴. b) (c²)⁷ = c²ˣ⁷ = c¹⁴. Both expressions have the same answer because 7 × 2 = 2 × 7.',
//           answer: 'a) c¹⁴  b) c¹⁴',
//         },
//         {
//           id: 4,
//           question: 'Simplify (do not evaluate): a) (3⁵)¹⁰  b) (13⁷)⁴',
//           type: 'Easy',
//           explaination:
//             'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (3⁵)¹⁰ = 3⁵ˣ¹⁰ = 3⁵⁰. b) (13⁷)⁴ = 13⁷ˣ⁴ = 13²⁸. Leave the answers in index form without evaluating.',
//           answer: 'a) 3⁵⁰  b) 13²⁸',
//         },
//       ],
//       'laws-of-indices-coefficient-variable-combined': [
//         {
//           id: 1,
//           question: 'Simplify: a) 12x² × 4x⁵  b) 3x⁴ × 5x³',
//           type: 'Easy',
//           explaination:
//             'Multiply the coefficients and add the indices of variables with the same base. a) (12 × 4)x²⁺⁵ = 48x⁷. b) (3 × 5)x⁴⁺³ = 15x⁷.',
//           answer: 'a) 48x⁷  b) 15x⁷',
//         },
//         {
//           id: 2,
//           question: 'Simplify: a) a × 3a²  b) b² × 5b²',
//           type: 'Easy',
//           explaination:
//             'Recall that a = a¹. Multiply the coefficients and add the indices of variables with the same base. a) 3 × a¹⁺² = 3a³. b) 5 × b²⁺² = 5b⁴.',
//           answer: 'a) 3a³  b) 5b⁴',
//         },
//       ],
//       'laws-of-indices-multi-variable': [
//         {
//           id: 1,
//           question: 'Simplify: a) 5x²yz × 4x³y²  b) 6x⁷yz² × 2xz³',
//           type: 'Medium',
//           explaination:
//             'Multiply the coefficients and add the indices of variables with the same base. a) (5 × 4)x²⁺³y¹⁺²z = 20x⁵y³z. b) (6 × 2)x⁷⁺¹yz²⁺³ = 12x⁸yz⁵.',
//           answer: 'a) 20x⁵y³z  b) 12x⁸yz⁵',
//         },
//       ],
//       // New subtopics (4.5 – 4.10) — add questions from the AA SL question bank
//       'laws-of-indices-division': [],
//       'negative-indices-integer-base': [],
//       'negative-indices-fraction-base': [],
//       'laws-of-indices-fraction-in-brackets': [],
//       'expressing-values-in-prime-base-form': [],
//       'last-digit-cyclicity': [],
//     },
//   },
//   {
//     'logarithms-exponentials': {
//       title: 'Logarithms & Exponentials',
//       'evaluating-logarithms': [
//         {
//           id: 1,
//           question: 'Without using a calculator, find the exact value of: log 10',
//           type: 'Easy',
//           explaination: 'log 10 = 1 since 10¹ = 10.',
//           answer: '1',
//         },
//         {
//           id: 2,
//           question: 'Without using a calculator, find the exact value of: log 100',
//           type: 'Easy',
//           explaination: 'log 100 = 2 since 10² = 100.',
//           answer: '2',
//         },
//         {
//           id: 3,
//           question: 'Without using a calculator, find the exact value of: log 100,000',
//           type: 'Easy',
//           explaination: 'Since 100,000 = 10⁵, log 10⁵ = 5.',
//           answer: '5',
//         },
//         {
//           id: 4,
//           question: 'Without using a calculator, find the exact value of: log 1,000,000',
//           type: 'Easy',
//           explaination: 'Since 1,000,000 = 10⁶, log 10⁶ = 6.',
//           answer: '6',
//         },
//         {
//           id: 5,
//           question: 'Without using a calculator, find the exact value of: log 1',
//           type: 'Easy',
//           explaination: 'log 1 = 0 since 10⁰ = 1.',
//           answer: '0',
//         },
//         {
//           id: 6,
//           question: 'Without using a calculator, find the exact value of: log 0.1',
//           type: 'Easy',
//           explaination: 'Since 0.1 = 10⁻¹, log 0.1 = -1.',
//           answer: '-1',
//         },
//         {
//           id: 7,
//           question: 'Without using a calculator, find the exact value of: log 0.01',
//           type: 'Easy',
//           explaination: 'Since 0.01 = 10⁻², log 0.01 = -2.',
//           answer: '-2',
//         },
//         {
//           id: 8,
//           question: 'Without using a calculator, find the exact value of: log 0.0001',
//           type: 'Easy',
//           explaination: 'Since 0.0001 = 10⁻⁴, log 0.0001 = -4.',
//           answer: '-4',
//         },
//       ],
//       'solving-logarithmic-equations': [
//         {
//           id: 1,
//           question: 'Without using a calculator, find the exact value of x: log x = 2',
//           type: 'Easy',
//           explaination: 'log x = 2 ⇒ x = 10² = 100.',
//           answer: 'x = 100',
//         },
//         {
//           id: 2,
//           question: 'Without using a calculator, find the exact value of x: log x = 3',
//           type: 'Easy',
//           explaination: 'log x = 3 ⇒ x = 10³ = 1000.',
//           answer: 'x = 1000',
//         },
//         {
//           id: 3,
//           question: 'Without using a calculator, find the exact value of x: log(2x - 4) = 5',
//           type: 'Medium',
//           explaination: '2x - 4 = 10⁵ = 100000. Therefore, 2x = 100004 and x = 50002.',
//           answer: 'x = 50002',
//         },
//         {
//           id: 4,
//           question: 'Without using a calculator, find the exact value of x: log(3x + 4) = 3',
//           type: 'Medium',
//           explaination: '3x + 4 = 10³ = 1000. Therefore, 3x = 996 and x = 332.',
//           answer: 'x = 332',
//         },
//         {
//           id: 5,
//           question: 'Without using a calculator, find the exact value of x: log(2x - 3) = -1',
//           type: 'Medium',
//           explaination: '2x - 3 = 10⁻¹ = 0.1. Therefore, 2x = 3.1 and x = 1.55 = 31/20.',
//           answer: 'x = 31/20',
//         },
//         {
//           id: 6,
//           question: 'Without using a calculator, find the exact value of x: log(x + 2) = -2',
//           type: 'Medium',
//           explaination: 'x + 2 = 10⁻² = 0.01. Therefore, x = 0.01 - 2 = -1.99 = -199/100.',
//           answer: 'x = -199/100',
//         },
//       ],
//       'natural-logarithm-rearranging': [
//         {
//           id: 1,
//           question: 'Rearrange the equation to find an expression for x: ln x = 2',
//           type: 'Easy',
//           explaination: 'ln x = 2 ⇒ x = e².',
//           answer: 'x = e²',
//         },
//         {
//           id: 2,
//           question: 'Rearrange the equation to find an expression for x: ln x = 5',
//           type: 'Easy',
//           explaination: 'ln x = 5 ⇒ x = e⁵.',
//           answer: 'x = e⁵',
//         },
//         {
//           id: 3,
//           question: 'Rearrange the equation to find an expression for x: ln x = y + 1',
//           type: 'Easy',
//           explaination: 'ln x = y + 1 ⇒ x = eʸ⁺¹.',
//           answer: 'x = e^(y + 1)',
//         },
//         {
//           id: 4,
//           question: 'Rearrange the equation to find an expression for x: ln x = y²',
//           type: 'Easy',
//           explaination: 'ln x = y² ⇒ x = eʸ².',
//           answer: 'x = e^(y²)',
//         },
//         {
//           id: 5,
//           question: 'Rearrange the equation to find an expression for x: ln(2x + 4) = y - 3',
//           type: 'Medium',
//           explaination:
//             '2x + 4 = e^(y - 3). Therefore, 2x = e^(y - 3) - 4, so x = (e^(y - 3) - 4)/2.',
//           answer: 'x = (e^(y - 3) - 4)/2',
//         },
//         {
//           id: 6,
//           question: 'Rearrange the equation to find an expression for x: ln((1/2)x - 6) = 2y + 1',
//           type: 'Medium',
//           explaination:
//             '(1/2)x - 6 = e^(2y + 1). Therefore, (1/2)x = e^(2y + 1) + 6, so x = 2e^(2y + 1) + 12.',
//           answer: 'x = 2e^(2y + 1) + 12',
//         },
//       ],
//       'simplifying-logarithmic-expressions': [
//         {
//           id: 1,
//           question: 'Simplify the expression: log x + 4 log x',
//           type: 'Easy',
//           explaination: 'Collect like terms: (1 + 4) log x = 5 log x.',
//           answer: '5 log x',
//         },
//         {
//           id: 2,
//           question: 'Simplify the expression: 10 log x - 5 log x',
//           type: 'Easy',
//           explaination: 'Collect like terms: (10 - 5) log x = 5 log x.',
//           answer: '5 log x',
//         },
//         {
//           id: 3,
//           question: 'Simplify the expression: 2(log 3x)² / log 3x',
//           type: 'Medium',
//           explaination:
//             'Cancel one factor of log 3x: 2(log 3x)² / log 3x = 2 log 3x, assuming log 3x ≠ 0.',
//           answer: '2 log 3x',
//         },
//         {
//           id: 4,
//           question: 'Simplify the expression: log 2x / (log 2x)²',
//           type: 'Medium',
//           explaination:
//             'Cancel one factor of log 2x: log 2x / (log 2x)² = 1 / log 2x, assuming log 2x ≠ 0.',
//           answer: '1 / log 2x',
//         },
//         {
//           id: 5,
//           question: 'Simplify the expression: (ln x + (ln x)²) / ln x - ln x',
//           type: 'Hard',
//           explaination:
//             '(ln x + (ln x)²) / ln x = 1 + ln x. Therefore, (1 + ln x) - ln x = 1, assuming ln x ≠ 0 (x ≠ 1).',
//           answer: '1',
//         },
//         {
//           id: 6,
//           question: 'Simplify the expression: (ln x - (ln x)³) / (ln x)² + ln x',
//           type: 'Hard',
//           explaination:
//             'Factor the numerator: ln x(1 - (ln x)²) / (ln x)² + ln x = (1 - (ln x)²) / ln x + ln x. Combining the terms gives [1 - (ln x)² + (ln x)²] / ln x = 1 / ln x, assuming ln x ≠ 0 (x > 0 and x ≠ 1).',
//           answer: '1 / ln x',
//         },
//       ],
//       // New subtopics (5.5 – 5.10) — add questions from the AA SL question bank
//       'laws-of-logarithms-key-properties': [],
//       'solving-exponential-equations-exact-form': [],
//       'real-world-applications-exponential-decay': [],
//       'real-world-applications-exponential-growth': [],
//       'real-world-applications-logarithmic-scale': [],
//       'exponential-models': [],
//     },
//   },
// ]

export function findTopic(topicSlug: string) {
  return topics.find((topic) => topic.slug === topicSlug)
}

export function findSubtopic(topicSlug: string, subtopicSlug: string) {
  const topic = findTopic(topicSlug)

  const subtopic = topic?.subtopics.find((item) => item.slug === subtopicSlug)

  return topic && subtopic ? { topic, subtopic } : undefined
}
