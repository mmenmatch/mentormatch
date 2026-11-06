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
//       {
//         title: 'Adding/Subtracting in Standard Form',
//         slug: 'adding-subtracting-in-standard-form',
//         description:
//           'Unlike multiplying, adding standard form numbers needs the powers of 10 to match first. These questions practise adding and subtracting in standard form step by step.',
//       },
//       {
//         title: 'Proof – Multiplication in Standard Form',
//         slug: 'proof-multiplication-in-standard-form',
//         description:
//           'Some standard form exam questions ask you to prove a result rather than calculate one. These questions show why (a × 10ⁿ)(b × 10ᵐ) = ab × 10ⁿ⁺ᵐ, and when the answer needs adjusting.',
//       },
//       {
//         title: 'Standard Form – Multi-part Application',
//         slug: 'standard-form-multi-part-application',
//         description:
//           'These standard form questions come in several linked parts that convert, calculate and interpret very large or very small numbers, the way longer exam questions do.',
//       },
//       {
//         title: 'Standard Form – Real-World Context',
//         slug: 'standard-form-real-world-context',
//         description:
//           'Standard form is how science writes very large and very small quantities. These standard form word problems use distances, populations and microscopic sizes.',
//       },
//       {
//         title: 'Generalising Standard Form (algebra)',
//         slug: 'generalising-standard-form-algebra',
//         description:
//           'The scientific notation rules work for letters as well as numbers. These standard form algebra questions write general results such as (a × 10ⁿ)(b × 10ᵐ).',
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
//       {
//         title: 'Arithmetic Series – Sum',
//         slug: 'arithmetic-series-sum',
//         description:
//           'The sum of an arithmetic sequence comes from one of two formulae. These arithmetic series questions practise choosing the right one and applying it accurately.',
//       },
//       {
//         title: 'Sigma Notation',
//         slug: 'sigma-notation',
//         description:
//           'Sigma notation writes a long sum in one line. These questions practise reading the limits, listing the terms and evaluating each sum.',
//       },
//       {
//         title: 'Mixed / Problem Solving',
//         slug: 'mixed-problem-solving',
//         description:
//           'These arithmetic progression problems combine terms, sums and unknowns in one question, the way longer exam questions do.',
//       },
//       {
//         title: 'Sum Formula Given Sₙ',
//         slug: 'sum-formula-given-sn',
//         description:
//           'When a sequence is described by its sum of n terms formula, you can still find any term. These questions work back from Sₙ to the sequence itself.',
//       },
//       {
//         title: 'Sum to Infinity of a Geometric Series',
//         slug: 'sum-to-infinity-of-a-geometric-series',
//         description:
//           'An infinite geometric series has a finite sum when |r| < 1. These questions apply the sum to infinity formula, S∞ = u₁ ÷ (1 − r).',
//       },
//       {
//         title: 'Convergence of Infinite Geometric Series',
//         slug: 'convergence-of-infinite-geometric-series',
//         description:
//           'A convergent geometric series is one whose common ratio lies between −1 and 1. These questions test convergence and find the range of x that makes it happen.',
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
//       {
//         title: 'Compound Interest – Non-Annual',
//         slug: 'compound-interest-non-annual',
//         description:
//           'Interest added monthly or quarterly grows faster than interest added once a year. These questions show how compounding frequency changes the final value of an investment.',
//       },
//       {
//         title: 'Real Value of Investment with Inflation',
//         slug: 'real-value-of-investment-with-inflation',
//         description:
//           'Inflation reduces what an investment can buy. These questions find the real rate of return, also called the inflation adjusted return, and the real value of an investment over time.',
//       },
//       {
//         title: 'Comparing Compounding Methods',
//         slug: 'comparing-compounding-methods',
//         description:
//           'These questions compare simple vs compound interest, then compare compounding yearly, quarterly and monthly, and explain why the results differ.',
//       },
//       {
//         title: 'Equivalent Annual Rate (EAR)',
//         slug: 'equivalent-annual-rate-ear',
//         description:
//           'The effective annual rate turns any compounding frequency into one comparable yearly rate. These questions apply the effective annual rate formula.',
//       },
//       {
//         title: 'Real Terms Growth with Inflation',
//         slug: 'real-terms-growth-with-inflation',
//         description:
//           'Growth that looks strong in money terms can be small in real terms. These questions find the real interest rate and the real growth of a value over time.',
//       },
//       {
//         title: 'Hyperinflation',
//         slug: 'hyperinflation',
//         description:
//           'Hyperinflation is compound growth at an extreme rate. These questions model how fast prices rise and how quickly money loses its value.',
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
//       {
//         title: 'Laws of Indices – Division',
//         slug: 'laws-of-indices-division',
//         description:
//           'When dividing indices with the same base, subtract the powers. These questions apply the law to numbers and to algebraic terms.',
//       },
//       {
//         title: 'Negative Indices – Integer Base',
//         slug: 'negative-indices-integer-base',
//         description:
//           'Negative exponents mean a reciprocal: a⁻ⁿ = 1 ÷ aⁿ. These questions evaluate negative indices with integer bases and simplify expressions that contain them.',
//       },
//       {
//         title: 'Negative Indices – Fraction Base',
//         slug: 'negative-indices-fraction-base',
//         description:
//           'Negative exponents with fractions have a shortcut: flip the fraction and make the power positive. These questions apply it to numerical and algebraic fractions.',
//       },
//       {
//         title: 'Laws of Indices – Fraction in Brackets',
//         slug: 'laws-of-indices-fraction-in-brackets',
//         description:
//           'To find the power of a fraction, apply the index to the top and the bottom. These questions practise it with numbers, variables and mixed terms.',
//       },
//       {
//         title: 'Expressing Values in Prime Base Form',
//         slug: 'expressing-values-in-prime-base-form',
//         description:
//           'Prime factorisation writes any number as a product of prime powers, such as 72 = 2³ × 3². These questions use it to simplify expressions and solve index equations.',
//       },
//       {
//         title: 'Last Digit / Cyclicity',
//         slug: 'last-digit-cyclicity',
//         description:
//           'The last digits of powers repeat in a fixed cycle. These questions use the cyclicity of numbers to find the last digit of very large powers.',
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
//       {
//         title: 'Laws of Logarithms – Key Properties',
//         slug: 'laws-of-logarithms-key-properties',
//         description:
//           'Every log simplification uses the same small set of log properties. These questions practise the properties of logarithms one at a time, then together.',
//       },
//       {
//         title: 'Solving Exponential Equations (exact form)',
//         slug: 'solving-exponential-equations-exact-form',
//         description:
//           'Exponential equations with an unknown in the power are solved with logarithms. These questions practise solving exponential equations and leaving the answer exact.',
//       },
//       {
//         title: 'Real-World Applications – Exponential Decay',
//         slug: 'real-world-applications-exponential-decay',
//         description:
//           'Exponential decay reduces a quantity by the same factor each period. These questions model radioactive decay, cooling and falling values.',
//       },
//       {
//         title: 'Real-World Applications – Exponential Growth',
//         slug: 'real-world-applications-exponential-growth',
//         description:
//           'Exponential growth increases a quantity by the same factor each period. These questions apply the exponential growth formula to populations, bacteria and investments.',
//       },
//       {
//         title: 'Real-World Applications – Logarithmic Scale',
//         slug: 'real-world-applications-logarithmic-scale',
//         description:
//           'A logarithmic scale turns multiplication into addition, so each step is a fixed factor. These questions use decibels, the Richter scale and pH.',
//       },
//       {
//         title: 'Exponential Models',
//         slug: 'exponential-models',
//         description:
//           'These exponential function examples come from real data: build a model, use it to predict values, and explain what each parameter means.',
//       },
//     ],
//   },
// ]

export const topics: Topic[] = [
  {
    title: 'Number',
    slug: 'number',
    description: 'Write, convert and calculate with numbers in standard form.',
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
    description: 'Find terms, common differences and nth-term formulae for arithmetic sequences.',
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
    description:
      'Calculate compound interest, time to reach a target, interest rates and depreciation.',
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
    description:
      'Apply the laws of indices to multiplication, powers and multi-variable expressions.',
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
    description: 'Evaluate and simplify logarithms and solve logarithmic equations.',
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
  {
    title: 'Functions',
    slug: 'functions',
    description:
      'Work with domain, range, inverse and composite functions, and use the vertical line test to identify a function.',
    subtopics: [
      {
        title: 'Vertical line test / identifying functions',
        slug: 'vertical-line-test-identifying-functions',
        description:
          'A relation is a function only if every input has exactly one output. The vertical line test checks this on a graph in seconds, and these questions practise applying it to graphs and mappings.',
      },
      {
        title: 'Domain of functions',
        slug: 'domain-of-functions',
        description:
          'The domain of a function is every input it can accept. These questions show how to find the domain of a function by spotting the values that would break it: division by zero, negative square roots and logarithms of non-positive numbers.',
      },
      {
        title: 'Range of functions',
        slug: 'range-of-functions',
        description:
          'The range of a function is every output it can produce. These questions show how to find the range of a function from its graph, its turning points and its asymptotes.',
      },
      {
        title: 'Inverse functions — sketching',
        slug: 'inverse-functions-sketching',
        description:
          'An inverse function reverses the original, so its graph is a reflection in the line y = x. These questions practise sketching the graph of an inverse function and swapping the domain and range.',
      },
      {
        title: 'Composite Functions',
        slug: 'composite-functions',
        description:
          'A composite function applies one function to the output of another, so the order matters. These questions evaluate, simplify and solve with f(g(x)) and g(f(x)).',
      },
    ],
  },
  {
    title: 'Trigonometry',
    slug: 'trigonometry',
    description:
      'Convert between radians and degrees, use the unit circle, find segment areas and apply the double and half angle formulae.',
    subtopics: [
      {
        title: 'Radians – Degree/Radian Conversion',
        slug: 'radians-degree-radian-conversion',
        description:
          'Converting radians to degrees uses one fact: π radians = 180°. These questions practise both directions, radians to degrees and degrees to radians, with exact answers in terms of π.',
      },
      {
        title: 'Unit Circle – Marking Radian Angles',
        slug: 'unit-circle-marking-radian-angles',
        description:
          'The unit circle links every angle to a point (cos θ, sin θ). These unit circle questions practise marking angles in radians and reading off their trigonometric values.',
      },
      {
        title: 'Segment Area and Perimeter',
        slug: 'segment-area-and-perimeter',
        description:
          'The area of a segment of a circle is the sector minus the triangle. These questions find the area of a segment and its perimeter with angles in radians.',
      },
      {
        title: 'Double Angle Formulae',
        slug: 'double-angle-formulae',
        description:
          'The double angle formula expresses sin 2θ and cos 2θ in terms of θ. These questions use the double angle identities to find exact values, simplify expressions and solve equations.',
      },
      {
        title: 'Half Angle Formulae',
        slug: 'half-angle-formulae',
        description:
          'The half angle formula comes from rearranging the double angle formula for cos 2θ. These questions use half angle identities to find exact values.',
      },
    ],
  },
  {
    title: 'Statistics & Probability',
    slug: 'statistics-probability',
    description:
      'Practise stratified sampling, the interquartile range, histograms, cumulative frequency and box plots.',
    subtopics: [
      {
        title: 'Sampling – Stratified',
        slug: 'sampling-stratified',
        description:
          'Stratified sampling makes a sample reflect the population by sampling each group in proportion to its size. These questions practise the calculation and when the method is appropriate.',
      },
      {
        title: 'Outliers (IQR Method)',
        slug: 'outliers-iqr-method',
        description:
          'The interquartile range measures the spread of the middle half of the data, and it also defines what counts as an outlier. These questions apply the 1.5 × IQR rule.',
      },
      {
        title: 'Histograms',
        slug: 'histograms',
        description:
          'A histogram shows how continuous data is distributed across class intervals. These histogram questions practise drawing one accurately and reading frequencies back from it.',
      },
      {
        title: 'Cumulative Frequency',
        slug: 'cumulative-frequency',
        description:
          'Cumulative frequency adds up the data as you move through the classes. These questions build the table, draw the cumulative frequency graph and read the median and quartiles from it.',
      },
      {
        title: 'Box-and-Whisker Diagrams',
        slug: 'box-and-whisker-diagrams',
        description:
          'A box plot summarises a data set in five numbers. These questions draw a box and whisker plot, mark outliers and compare two distributions side by side.',
      },
    ],
  },
  {
    title: 'Calculus',
    slug: 'calculus',
    description:
      'Differentiate with the chain, product and quotient rules, and find maxima, minima and points of inflection.',
    subtopics: [
      {
        title: 'Chain Rule',
        slug: 'chain-rule',
        description:
          'The chain rule differentiates a function inside another function. These chain rule questions cover powers of brackets, trigonometric and exponential composites.',
      },
      {
        title: 'Differentiation – Product Rule',
        slug: 'differentiation-product-rule',
        description:
          'The product rule differentiates two functions multiplied together. These product rule differentiation questions apply it and simplify the result into a usable form.',
      },
      {
        title: 'Differentiation – Quotient Rule',
        slug: 'differentiation-quotient-rule',
        description:
          'The quotient rule differentiates one function divided by another. These quotient rule differentiation questions practise the order of the terms, where most errors happen.',
      },
      {
        title: 'Local Maximum and Minimum',
        slug: 'local-maximum-and-minimum',
        description:
          'Maxima and minima occur where the gradient is zero. These questions find local maxima and minima and use the second derivative or a sign change to classify them.',
      },
      {
        title: 'Points of Inflection',
        slug: 'points-of-inflection',
        description:
          'A point of inflection is where a curve changes concavity. These questions find each inflection point using the second derivative and confirm the change of sign.',
      },
    ],
  },
  {
    title: 'Integration',
    slug: 'integration',
    description:
      'Integrate trigonometric and exponential functions, use substitution, evaluate definite integrals and find areas between curves.',
    subtopics: [
      {
        title: 'Integration of trig/exp/ln to find y',
        slug: 'integration-of-trig-exp-ln-to-find-y',
        description:
          'These questions cover the integration of trigonometric functions, eˣ and 1/x, then use a known point on the curve to find the constant and write y in full.',
      },
      {
        title: 'Integration by substitution (reverse chain rule)',
        slug: 'integration-by-substitution-reverse-chain-rule',
        description:
          'Integration by substitution works when the integrand contains a function and its derivative. These questions practise spotting that reverse chain rule pattern.',
      },
      {
        title: 'Differential equations with initial conditions',
        slug: 'differential-equations-with-initial-conditions',
        description:
          'An initial value problem gives a gradient function and one known point. These questions integrate to find the general solution, then use the point to find the particular one.',
      },
      {
        title: 'Definite integrals – power rule',
        slug: 'definite-integrals-power-rule',
        description:
          'A definite integral gives a single value between two limits. These questions evaluate definite integrals of power functions exactly, step by step.',
      },
      {
        title: 'Area between two curves',
        slug: 'area-between-two-curves',
        description:
          'The area between two curves is the integral of the upper curve minus the lower curve. These questions find the intersection points, set up the integral and evaluate it.',
      },
    ],
  },
  {
    title: 'Sequences & Series',
    slug: 'sequences-series',
    description:
      'Work with geometric sequences and series: the nth term, number of terms, sums, sigma notation and real-world growth and decay.',
    subtopics: [
      {
        title: 'nth term of a geometric sequence',
        slug: 'nth-term-of-a-geometric-sequence',
        description:
          'In a geometric sequence every term is the previous one multiplied by the same common ratio. These geometric sequence questions practise finding any term with uₙ = u₁rⁿ⁻¹.',
      },
      {
        title: 'Number of terms in a geometric sequence',
        slug: 'number-of-terms-in-a-geometric-sequence',
        description:
          'When you know the first term, the common ratio and the last term, the number of terms in a geometric sequence comes from solving u₁rⁿ⁻¹ = uₙ for n.',
      },
      {
        title: 'Sigma notation — sum of geometric series',
        slug: 'sigma-notation-sum-of-geometric-series',
        description:
          'Sigma notation is a compact way to write a sum. These questions unpack a sum written in sigma notation for a geometric series and evaluate it exactly.',
      },
      {
        title: 'nth term and sum — application',
        slug: 'nth-term-and-sum-application',
        description:
          'These geometric sequence word problems combine the nth term and the sum of the first n terms, from a halving sequence to the legend of grains on a chessboard.',
      },
      {
        title: 'Identifying common ratio',
        slug: 'identifying-common-ratio',
        description:
          'The common ratio formula, r = uₙ₊₁ ÷ uₙ, links any two neighbouring terms of a geometric sequence. These questions use it on its own and inside a sum-to-infinity problem.',
      },
      {
        title: 'nth term',
        slug: 'nth-term',
        description:
          'The nth term formula uₙ = u₁rⁿ⁻¹ lets you jump straight to any term. These questions use it when two terms are given and the first term and ratio must be found.',
      },
      {
        title: 'Geometric sequences — real-world application',
        slug: 'geometric-sequences-real-world-application',
        description:
          'Growth and decay by a fixed percentage form a geometric sequence in real life. These questions model algae, a yeast culture, a learning program and a bouncing ball.',
      },
      {
        title: 'Sum of geometric series — extended application',
        slug: 'sum-of-geometric-series-extended-application',
        description:
          'The sum of geometric series formula adds many terms in one step. These questions apply it to extended problems, where each geometric series sits inside a larger context.',
      },
      {
        title: 'Sum using recurrence relation',
        slug: 'sum-using-recurrence-relation',
        description:
          'A recurrence relation defines each term from the one before. When uₙ₊₁ is a fixed multiple of uₙ, the recurrence relation describes a geometric sequence.',
      },
      {
        title: 'Finding nth term from algebraic terms',
        slug: 'finding-nth-term-from-algebraic-terms',
        description:
          'When the terms of a geometric sequence with variables are given as expressions in x, the common ratio is the same between each pair of terms. That gives an equation to solve.',
      },
      {
        title: 'Model limitations',
        slug: 'model-limitations',
        description:
          'Every model simplifies reality. This question asks for the limitations of mathematical models built on a geometric sequence, using a ball that never quite stops bouncing.',
      },
      {
        title: 'Compound Interest / Arithmetic vs Geometric Growth',
        slug: 'compound-interest-arithmetic-vs-geometric-growth',
        description:
          'Simple interest grows by the same amount each year, while compound interest grows by the same percentage. This question compares arithmetic vs geometric growth in two bank accounts.',
      },
    ],
  },
  {
    title: 'Algebra',
    slug: 'algebra',
    description:
      'Complete the square, factorise and solve quadratics, use the discriminant, and prove algebraic identities and results about integers.',
    subtopics: [
      {
        title: 'Completing the Square',
        slug: 'completing-the-square',
        description:
          'Completing the square rewrites x² + bx + c as (x + b/2)² plus a constant. It finds the vertex of a parabola and gives exact solutions to quadratic equations.',
      },
      {
        title: 'Difference of Two Squares',
        slug: 'difference-of-two-squares',
        description:
          'The difference of squares identity, (a − b)(a + b) ≡ a² − b², turns a product into two squared terms. This question uses it to identify unknown constants.',
      },
      {
        title: 'Algebraic Proof',
        slug: 'algebraic-proof',
        description:
          'An algebraic proof shows a result holds for every value, not only the ones you test. This question proves an identity involving three consecutive integers.',
      },
      {
        title: 'Algebraic Fractions / Proof',
        slug: 'algebraic-fractions-proof',
        description:
          'Algebraic fractions follow the same rules as numerical ones. These questions prove identities by simplifying algebraic fractions over a common denominator.',
      },
      {
        title: 'Numerical Verification',
        slug: 'numerical-verification',
        description:
          'Before proving a general result, it helps to verify each identity numerically. These questions check fraction sums that lead to an algebraic generalisation.',
      },
      {
        title: 'Algebraic Generalisation',
        slug: 'algebraic-generalisation',
        description:
          'Generalising algebra means replacing specific numbers with a variable and proving the pattern holds every time. These questions generalise two fraction results in terms of n.',
      },
      {
        title: 'Identifying Identities',
        slug: 'identifying-identities',
        description:
          'An identity is true for every value of x; an equation is true only for some. These algebraic identities questions test whether common expansions really are identities.',
      },
      {
        title: 'Polynomial Identities / Factor Theorem',
        slug: 'polynomial-identities-factor-theorem',
        description:
          'Two polynomials are identical only when every coefficient matches. These polynomial identities questions use that fact to find unknown constants in factorised cubics.',
      },
      {
        title: 'Algebraic Proof / Counter-example',
        slug: 'algebraic-proof-counter-example',
        description:
          'One counter example is enough to show a statement is false. This question disproves a claimed factorisation of x³ − y³ and then fixes it.',
      },
      {
        title: 'Proof — Even/Odd Numbers',
        slug: 'proof-even-odd-numbers',
        description:
          'Writing even numbers as 2n and odd numbers as 2n + 1 turns a number fact into algebra. These proof questions on even and odd numbers use it to show results about odd numbers and their squares.',
      },
      {
        title: 'Proof — Multiples',
        slug: 'proof-multiples',
        description:
          'To prove an expression is divisible by a number, show it can be written as that number times an integer. This question proves a difference of odd squares is a multiple of 8.',
      },
      {
        title: 'Proof — Consecutive Integers',
        slug: 'proof-consecutive-integers',
        description:
          'Consecutive integers can be written as n and n + 1. This question uses that to prove the difference of their squares is always an odd number.',
      },
      {
        title: 'Indices – nth roots',
        slug: 'indices-nth-roots',
        description:
          'A power of 1/n means the nth root of a number. These questions evaluate square roots and cube roots written as fractional indices, without a calculator.',
      },
      {
        title: 'Indices – exact values',
        slug: 'indices-exact-values',
        description:
          'Fractional exponents combine a root and a power. These questions find exact values of expressions such as 8^(−4/3), including negative fractional indices.',
      },
      {
        title: 'Solving equations with indices',
        slug: 'solving-equations-with-indices',
        description:
          'Solving equations with exponents means undoing the power on x. These questions use the reciprocal index to find x when the power is a fraction.',
      },
      {
        title: 'Indices – composition and substitution',
        slug: 'indices-composition-and-substitution',
        description:
          'These questions use exponent substitution: one variable is given in terms of another, and you rewrite a new expression in the form axᵏ.',
      },
      {
        title: 'Solving Quadratics – Factorising',
        slug: 'solving-quadratics-factorising',
        description:
          'Factorising quadratics turns x² + bx + c = 0 into two brackets whose product is zero. Each bracket then gives one solution.',
      },
      {
        title: 'Quadratic Formula',
        slug: 'quadratic-formula',
        description:
          'The quadratic formula solves any quadratic equation, including those that do not factorise. These questions give answers as exact surds.',
      },
      {
        title: 'Quadratic Inequalities',
        slug: 'quadratic-inequalities',
        description:
          'Quadratic inequalities are solved with a sketch as well as algebra. These questions cover standard inequalities, a geometry context and one with parameters.',
      },
      {
        title: 'Solving Quadratics',
        slug: 'solving-quadratics',
        description:
          'Quadratic equations are not always given in the form ax² + bx + c = 0. This question starts with rearranging, the step most often missed.',
      },
      {
        title: 'Quadratic Modelling',
        slug: 'quadratic-modelling',
        description:
          'In quadratic word problems the equation is not given; you build it from the context. These questions form quadratics from products of numbers and the area of a rectangle.',
      },
      {
        title: 'Simultaneous Equations – Line & Parabola',
        slug: 'simultaneous-equations-line-parabola',
        description:
          'The intersection of a line and a parabola is found by solving their equations together. Substitution gives a quadratic whose roots are the x-coordinates.',
      },
      {
        title: 'Rational Equations',
        slug: 'rational-equations',
        description:
          'Solving rational equations means clearing the denominator first. The result is a quadratic equation, solved exactly.',
      },
      {
        title: 'Quadratic in y – Rearranging',
        slug: 'quadratic-in-y-rearranging',
        description:
          'Some equations in two variables are quadratics in disguise. Rearranging quadratic equations as a quadratic in y lets you factorise and find y in terms of x.',
      },
      {
        title: 'Quadratic in x – Parameters',
        slug: 'quadratic-in-x-parameters',
        description:
          'A quadratic equation with a parameter has a letter, such as k, in its coefficients. This question finds x in terms of k by factorising.',
      },
      {
        title: 'Quadratic Inequality – Two Variables',
        slug: 'quadratic-inequality-two-variables',
        description:
          'This two-variable quadratic inequality has both x and y. Completing the square shows a sum of squares cannot be negative, which fixes both values.',
      },
      {
        title: 'Quadratic Equations — Discriminant',
        slug: 'quadratic-equations-discriminant',
        description:
          'The discriminant formula, Δ = b² − 4ac, tells you the nature of roots without solving: two distinct roots, one repeated root or none.',
      },
      {
        title: 'Discriminant — Finding k (Two Roots)',
        slug: 'discriminant-finding-k-two-roots',
        description:
          'These discriminant questions find k so a quadratic has a required number of roots. Each condition on the roots becomes an inequality or equation in k.',
      },
      {
        title: 'Discriminant — Repeated Root',
        slug: 'discriminant-repeated-root',
        description:
          'A quadratic has repeated roots when its discriminant is zero; its graph then touches the x-axis at the vertex. These questions use that condition in several forms.',
      },
      {
        title: 'Discriminant — Two Distinct Roots',
        slug: 'discriminant-two-distinct-roots',
        description:
          'A quadratic has two distinct real roots when b² − 4ac > 0. These questions turn that condition into an inequality and solve it.',
      },
      {
        title: 'Discriminant — At Least One Real Root',
        slug: 'discriminant-at-least-one-real-root',
        description:
          'At least one real root means the discriminant is zero or positive. This question applies the real roots condition, b² − 4ac ≥ 0, to a quadratic with an unknown.',
      },
      {
        title: 'Discriminant — Graph Does Not Cross x-axis',
        slug: 'discriminant-graph-does-not-cross-x-axis',
        description:
          'A graph that never crosses the x-axis has no real roots, so its discriminant is negative. This question finds the values of c that make that true.',
      },
      {
        title: 'Discriminant — Graph Above x-axis',
        slug: 'discriminant-graph-above-x-axis',
        description:
          'A positive definite quadratic is positive for every x, so its graph lies entirely above the x-axis. That needs a positive x² coefficient and a negative discriminant.',
      },
      {
        title: 'Discriminant — Graph Entirely Below x-axis',
        slug: 'discriminant-graph-entirely-below-x-axis',
        description:
          'A negative definite quadratic is negative for every x. Its graph opens downwards and never reaches the x-axis.',
      },
      {
        title: 'Discriminant — Tangent to Parabola',
        slug: 'discriminant-tangent-to-parabola',
        description:
          'A line tangent to a parabola meets it at exactly one point. Setting the equations equal gives a quadratic whose discriminant must be zero.',
      },
      {
        title: 'Discriminant — Line Intersects Circle',
        slug: 'discriminant-line-intersects-circle',
        description:
          "For a line and circle intersection, substitute the line into the circle's equation. The resulting quadratic has real roots only when the line meets the circle.",
      },
      {
        title: 'Discriminant — Proof (Always Two Roots)',
        slug: 'discriminant-proof-always-two-roots',
        description:
          'To prove two real roots exist for every value of a parameter, show the discriminant is always positive. These questions also link the roots of two equations.',
      },
      {
        title: 'Quadratic Equations / Projectile Motion',
        slug: 'quadratic-equations-projectile-motion',
        description:
          'A projectile motion equation such as h = 3.6 + 5.2t − 4.9t² is a quadratic in time. Solving it tells you when the object lands.',
      },
      {
        title: 'Substitution / Quadratic in Disguise',
        slug: 'substitution-quadratic-in-disguise',
        description:
          'Hidden quadratic equations do not look like quadratics at first. This stopping-distance model becomes one as soon as you set it equal to a given distance.',
      },
    ],
  },
  {
    title: 'Binomial Expansion',
    slug: 'binomial-expansion',
    description:
      'Expand brackets with the binomial theorem, find specific terms and coefficients, and use expansions to approximate values.',
    subtopics: [
      {
        title: 'Full Expansion',
        slug: 'full-expansion',
        description:
          'A binomial expansion writes (a + b)ⁿ as a sum of terms using binomial coefficients. These binomial expansion questions expand two brackets in full.',
      },
      {
        title: 'Applications of Expansion',
        slug: 'applications-of-expansion',
        description:
          'The binomial theorem gives any term of (a + b)ⁿ without writing out the full expansion. These binomial theorem questions find leading terms, coefficients and approximations.',
      },
    ],
  },
  {
    title: 'Geometry',
    slug: 'geometry',
    description:
      'Find gradients, intercepts and equations of straight lines, including parallel and perpendicular lines and points of intersection.',
    subtopics: [
      {
        title: 'Gradient of a Line',
        slug: 'gradient-of-a-line',
        description:
          'The gradient, also called the slope of a line, measures how steeply it rises or falls. These questions find it from two points using the slope of a line formula, m = (y₂ − y₁) ÷ (x₂ − x₁).',
      },
      {
        title: 'Intercepts of a Line',
        slug: 'intercepts-of-a-line',
        description:
          'The x and y intercepts are where a line crosses the axes. These questions find both, including lines written in forms such as 2y = 5 − x.',
      },
      {
        title: 'Equation of a Line',
        slug: 'equation-of-a-line',
        description:
          'The equation of a line is fixed by its gradient and one point. These questions use the gradient and y-intercept, then rewrite the answer in the general form the IB often asks for.',
      },
      {
        title: 'Gradient-Intercept Form',
        slug: 'gradient-intercept-form',
        description:
          'Slope-intercept form, y = mx + c, shows the gradient and y-intercept at a glance. These questions rearrange general equations into that form.',
      },
      {
        title: 'Equation of a Line Through a Point',
        slug: 'equation-of-a-line-through-a-point',
        description:
          'When you know the gradient and one point, point-slope form gives the equation of the line in one step: y − y₁ = m(x − x₁).',
      },
      {
        title: 'Line Through Two Points',
        slug: 'line-through-two-points',
        description:
          'Two points fix a line. The two point form finds its gradient from the points, then its equation, written in general form.',
      },
      {
        title: 'Perpendicular Lines',
        slug: 'perpendicular-lines',
        description:
          'Perpendicular lines meet at a right angle, and their gradients multiply to −1. These perpendicular lines examples find the equation of a line at right angles to a given one.',
      },
      {
        title: 'Intersection of Lines',
        slug: 'intersection-of-lines',
        description:
          'The point of intersection is the one pair of coordinates that satisfies both equations. These questions find it by elimination or substitution.',
      },
      {
        title: 'Coordinates and Lines',
        slug: 'coordinates-and-lines',
        description:
          'Coordinate geometry turns a description of points into numbers you can calculate with. This question builds a set of points step by step and works with the lines joining them.',
      },
      {
        title: 'Gradient and Parallel Lines',
        slug: 'gradient-and-parallel-lines',
        description:
          'Parallel lines never meet, so the slope of parallel lines is always the same. These questions use the gradient of parallel lines to write new equations and to prove shapes are trapeziums.',
      },
    ],
  },
  {
    title: 'Applications',
    slug: 'applications',
    description:
      "Apply gradient and linear models to real contexts, from road inclines to Hooke's law.",
    subtopics: [
      {
        title: 'Gradient in Context',
        slug: 'gradient-in-context',
        description:
          'Gradient is a rate you meet outside the classroom: the slope of a hillside, a road or a bridge. These questions find the slope in real life by turning each context into rise over run.',
      },
      {
        title: "Hooke's Law / Linear Models",
        slug: 'hookes-law-linear-models',
        description:
          "Hooke's law says the force needed to stretch a spring is proportional to the extension, F = kx. It is one of the clearest linear models in IB Maths.",
      },
    ],
  },
  {
    title: 'Functions & Graphs',
    slug: 'functions-graphs',
    description:
      'Sketch and match quadratic graphs, complete the square for key features, and describe translations, stretches and reflections.',
    subtopics: [
      {
        title: 'Quadratic Graphs – Matching',
        slug: 'quadratic-graphs-matching',
        description:
          "Quadratic graphs carry their equation's features: the sign of a decides the shape, c gives the y-intercept and the roots give the x-intercepts. These questions match three graphs to three equations.",
      },
      {
        title: 'Sketching Quadratic Graphs',
        slug: 'sketching-quadratic-graphs',
        description:
          'Sketching quadratic graphs well means showing the right shape and labelling every point where the curve meets the axes.',
      },
      {
        title: 'Equation from Graph – Factored Form',
        slug: 'equation-from-graph-factored-form',
        description:
          "A graph's roots give the factored form of a quadratic, y = a(x − p)(x − q); its vertex gives vertex form. These questions use one extra point to find a.",
      },
      {
        title: 'Completing the Square – Line of Symmetry',
        slug: 'completing-the-square-line-of-symmetry',
        description:
          'The axis of symmetry of a parabola passes through its vertex. Completing the square shows it directly as x = −h.',
      },
      {
        title: 'Quadratic Graph Features',
        slug: 'quadratic-graph-features',
        description:
          'The parts of a parabola every exam asks about are the roots, the y-intercept, the line of symmetry and the vertex. This question finds each one from the equation.',
      },
      {
        title: 'Completing the Square – Minimum Value',
        slug: 'completing-the-square-minimum-value',
        description:
          'The minimum value of a quadratic with a positive x² term sits at its vertex. Completing the square gives that value exactly.',
      },
      {
        title: 'Completing the Square – Range of Function',
        slug: 'completing-the-square-range-of-function',
        description:
          'The range of a quadratic function starts or ends at its vertex. Completing the square finds the vertex, and the shape tells you which way the range extends.',
      },
      {
        title: 'Graph Transformations – Vertical Translation',
        slug: 'graph-transformations-vertical-translation',
        description:
          'A vertical translation moves every point up or down; a horizontal translation moves it left or right. These questions sketch both and write the equation after each translation.',
      },
      {
        title: 'Reflections – Vertex Coordinates',
        slug: 'reflections-vertex-coordinates',
        description:
          'A reflection in the x-axis changes the sign of every y-coordinate, so y = f(x) becomes y = −f(x). These questions track the vertex and find the new equation.',
      },
      {
        title: 'Describing Transformations – Combined',
        slug: 'describing-transformations-combined',
        description:
          'Describing transformations fully means naming each one, its direction and its size, in the right order. These questions combine translations, stretches and reflections.',
      },
      {
        title: 'Describing Transformations from Completed Square',
        slug: 'describing-transformations-from-completed-square',
        description:
          'Vertex form transformations read straight from a(x + h)² + k: a stretch by a, a horizontal shift by h and a vertical shift by k.',
      },
      {
        title: 'Vertical and Horizontal Stretches',
        slug: 'vertical-and-horizontal-stretches',
        description:
          "Vertical and horizontal stretches change a graph's shape without moving its intercept on the fixed axis. These questions sketch stretches, find equations and describe them.",
      },
      {
        title: 'Stretch About a Non-Standard Line',
        slug: 'stretch-about-a-non-standard-line',
        description:
          'Most stretches keep an axis fixed. In this stretch transformation the line y = 1 stays fixed instead, which changes the equation of the result.',
      },
    ],
  },
  {
    title: 'Exponential & Logarithmic Functions',
    slug: 'exponential-logarithmic-functions',
    description:
      'Sketch exponential and logarithmic graphs, convert to base e, transform log graphs and use the change of base formula.',
    subtopics: [
      {
        title: 'Sketching Exponential Graphs',
        slug: 'sketching-exponential-graphs',
        description:
          'Every exponential graph of the form y = aˣ passes through (0, 1) and has the x-axis as an asymptote. These questions sketch, compare and match growth and decay curves.',
      },
      {
        title: 'Exponential & Logarithmic Inverse Graphs',
        slug: 'exponential-logarithmic-inverse-graphs',
        description:
          'The inverse of an exponential function is a logarithm, so y = aˣ and y = logₐx are reflections of each other in the line y = x.',
      },
      {
        title: 'Writing Exponentials in the form e^kx',
        slug: 'writing-exponentials-in-the-form-ekx',
        description:
          'Any exponential aˣ can be written as e^(kx). Converting to base e uses the natural logarithm: k = ln a.',
      },
      {
        title: 'Transformations of Logarithmic Graphs',
        slug: 'transformations-of-logarithmic-graphs',
        description:
          'Log graph transformations move the asymptote as well as the curve. These questions translate and stretch y = ln x and find the new asymptote and intercepts.',
      },
      {
        title: 'Finding Parameters of Exponential Functions',
        slug: 'finding-parameters-of-exponential-functions',
        description:
          'Finding an exponential function from points means substituting known coordinates. The y-intercept usually gives one parameter straight away.',
      },
      {
        title: 'Change of Base / Log Laws',
        slug: 'change-of-base-log-laws',
        description:
          'The change of base formula, logₐx = ln x ÷ ln a, lets any logarithm be written in a base your calculator has. This question proves it and uses it without a calculator.',
      },
    ],
  },
  {
    title: 'Functions & Equations',
    slug: 'functions-equations',
    description:
      'Solve equations by factorising, with surds, logarithms and exponentials, and spot hidden quadratics through substitution.',
    subtopics: [
      {
        title: 'Solving equations by factoring / cancellation',
        slug: 'solving-equations-by-factoring-cancellation',
        description:
          'Solving equations by factorising keeps every solution. Dividing both sides of xeˣ = 4x by x loses x = 0; factorising does not.',
      },
      {
        title: 'Equations involving surds',
        slug: 'equations-involving-surds',
        description:
          'Surd equations hide a common factor and a square root. These questions factorise first, then square to remove the root.',
      },
      {
        title: 'Equations involving surds / logs / exponentials',
        slug: 'equations-involving-surds-logs-exponentials',
        description:
          'Solving logarithmic and exponential equations together needs care with domains. These questions factorise and then solve each factor separately.',
      },
      {
        title: 'Hidden quadratics (substitution method)',
        slug: 'hidden-quadratics-substitution-method',
        description:
          'An equation such as x⁴ − 5x² + 4 = 0 is a quadratic in x². The substitution method makes it a quadratic you can factorise.',
      },
      {
        title: 'Exponential equations reducible to quadratics',
        slug: 'exponential-equations-reducible-to-quadratics',
        description:
          'Exponential equations in quadratic form use the fact that e²ˣ = (eˣ)². Substituting u = eˣ gives an ordinary quadratic.',
      },
      {
        title: 'Hidden quadratics — fractional indices',
        slug: 'hidden-quadratics-fractional-indices',
        description:
          'Equations with fractional indices can be hidden quadratics: x^(2/3) is the square of x^(1/3).',
      },
      {
        title: 'Equations with variable exponents',
        slug: 'equations-with-variable-exponents',
        description:
          'Variable exponent equations such as (x − 7)^(x² − 16) = 1 have more than one route to the answer: the power is zero, the base is 1, or the base is −1 with an even power.',
      },
    ],
  },
  {
    title: 'Algebra and Functions',
    slug: 'algebra-and-functions',
    description:
      'Solve polynomial, exponential, logarithmic and rational equations graphically, and count roots with intersections.',
    subtopics: [
      {
        title: 'Polynomial Equations — Graphical Methods',
        slug: 'polynomial-equations-graphical-methods',
        description:
          'Some equations cannot be solved with algebra. Solving equations graphically finds every solution as an intersection on your GDC.',
      },
      {
        title: 'Graphs and Intersections',
        slug: 'graphs-and-intersections',
        description:
          'Each intersection of graphs is one solution of the equation formed by setting them equal. A sketch shows how many solutions there are.',
      },
      {
        title: 'Logarithmic & Rational Equations — Graphs',
        slug: 'logarithmic-rational-equations-graphs',
        description:
          'Drawing logarithmic and rational graphs together shows where they meet. Each meeting point is a solution of the equation formed from them.',
      },
      {
        title: 'Number of Roots / Parameter Problems',
        slug: 'number-of-roots-parameter-problems',
        description:
          'The number of roots of an equation equals the number of times two graphs meet. Moving a horizontal line y = k changes that number.',
      },
    ],
  },
  {
    title: 'Geometry & Trigonometry',
    slug: 'geometry-trigonometry',
    description:
      'Find distances and midpoints in 2D and 3D, surface areas and volumes of 3D shapes, and shortest paths on a cuboid.',
    subtopics: [
      {
        title: 'Surface Area and Volume of 3D Shapes',
        slug: 'surface-area-and-volume-of-3d-shapes',
        description:
          'These questions find the volume and surface area of 3D shapes: spheres, hemispheres, cones and a cube, using the IB formula booklet.',
      },
      {
        title: 'Right-Angled Triangles / Algebraic Geometry',
        slug: 'right-angled-triangles-algebraic-geometry',
        description:
          'Pythagoras theorem links the three sides of a right-angled triangle. Here it is combined with area and perimeter to form an equation in x.',
      },
      {
        title: 'Distance Between Two Points (2D)',
        slug: 'distance-between-two-points-2d',
        description:
          'The distance formula, d = √((x₂ − x₁)² + (y₂ − y₁)²), is Pythagoras theorem on a coordinate grid. These questions find the distance between two points exactly.',
      },
      {
        title: 'Midpoint of a Line Segment (2D)',
        slug: 'midpoint-of-a-line-segment-2d',
        description:
          'The midpoint formula averages the coordinates: ((x₁ + x₂) ÷ 2, (y₁ + y₂) ÷ 2). It gives the midpoint of a line segment in one step.',
      },
      {
        title: 'Distance of Midpoint from Origin (3D)',
        slug: 'distance-of-midpoint-from-origin-3d',
        description:
          'The midpoint in 3D works as it does in 2D, with a third coordinate. These questions find midpoints and then their distance from the origin.',
      },
      {
        title: 'Real-Life Application — 3D Distance and Speed',
        slug: 'real-life-application-3d-distance-and-speed',
        description:
          "This real-life 3D distance problem places a birdhouse and a tree in coordinates, finds the straight-line flight distance, and then the bird's speed.",
      },
      {
        title: 'Distance from Origin — Algebraic (3D)',
        slug: 'distance-from-origin-algebraic-3d',
        description:
          'The distance from the origin in 3D is √(x² + y² + z²). When coordinates contain an unknown, that distance gives an equation to solve.',
      },
      {
        title: 'Distance Formula — Quadratic Equation (3D)',
        slug: 'distance-formula-quadratic-equation-3d',
        description:
          'The 3D distance formula adds a z-term to the familiar one: d = √((x₂ − x₁)² + (y₂ − y₁)² + (z₂ − z₁)²). These questions find exact distances and unknowns.',
      },
      {
        title: '3D Coordinates — Real-Life Context (Tent)',
        slug: '3d-coordinates-real-life-context-tent',
        description:
          '3D coordinates describe a real object with three numbers per point. This question reads the height of a tent from its vertices.',
      },
      {
        title: '3D Distance — Fly Flying Diagonally',
        slug: '3d-distance-fly-flying-diagonally',
        description:
          'The space diagonal of a cuboid joins opposite corners through the inside. Its length is √(a² + b² + c²).',
      },
      {
        title: 'Shortest Path on Surface — Unfolding Method',
        slug: 'shortest-path-on-surface-unfolding-method',
        description:
          'The shortest path on the surface of a cuboid is a straight line on its net. Unfolding the faces turns a 3D problem into a 2D one.',
      },
    ],
  },
  {
    title: 'Sequences & Series / Algebra',
    slug: 'sequences-series-algebra',
    description:
      'Combine an infinite geometric series with exponential equations to find exact solutions.',
    subtopics: [
      {
        title: 'Infinite Geometric Series / Exponential Equations',
        slug: 'infinite-geometric-series-exponential-equations',
        description:
          'This exponential geometric series has terms in e^(−x). Its sum to infinity leads to a quadratic equation in eˣ, which gives x exactly.',
      },
    ],
  },
  {
    title: 'Coordinate Geometry',
    slug: 'coordinate-geometry',
    description:
      'Work with midpoints, gradients, perpendicular lines and distances to solve problems about squares and rhombuses.',
    subtopics: [
      {
        title: 'Midpoint with Unknown Parameters — System of Equations',
        slug: 'midpoint-with-unknown-parameters-system-of-equations',
        description:
          'When you find coordinates from a midpoint, each coordinate of the midpoint gives one equation. Two unknowns need a system of two equations.',
      },
      {
        title: 'Gradient from Equation of a Line',
        slug: 'gradient-from-equation-of-a-line',
        description:
          'Reading the slope from an equation means getting it into y = mx + c first. This question rearranges a general-form equation.',
      },
      {
        title: 'Equation of a Perpendicular Line',
        slug: 'equation-of-a-perpendicular-line',
        description:
          'The equation of a perpendicular line uses the negative reciprocal of the original gradient and one point on the new line.',
      },
      {
        title: 'Shortest Distance from a Point to a Line',
        slug: 'shortest-distance-from-a-point-to-a-line',
        description:
          'The shortest route from a point to a line meets it at right angles, so the perpendicular distance from the point to the line is the length of that segment.',
      },
      {
        title: 'Midpoint of a Diagonal of a Square',
        slug: 'midpoint-of-a-diagonal-of-a-square',
        description:
          'The diagonals of a square bisect each other at right angles, so both share the same midpoint. This question finds it from two opposite vertices.',
      },
      {
        title: 'Coordinates of Vertices of a Square',
        slug: 'coordinates-of-vertices-of-a-square',
        description:
          'Given two opposite vertices of a square, coordinates of the other two follow from the midpoint and a perpendicular step of equal length.',
      },
      {
        title: 'Perpendicular Bisector — Diagonals of a Rhombus',
        slug: 'perpendicular-bisector-diagonals-of-a-rhombus',
        description:
          'Each diagonal of a rhombus is the perpendicular bisector of the other. This question finds the equation of one diagonal from the end points of the other.',
      },
      {
        title: 'Length of Sides of a Rhombus',
        slug: 'length-of-sides-of-a-rhombus',
        description:
          'Among the key rhombus properties: all four sides are equal. This question checks it with the distance formula.',
      },
    ],
  },
  {
    title: 'Geometry & Mensuration',
    slug: 'geometry-mensuration',
    description:
      'Find volumes and surface areas of pyramids, cones, spheres, hemispheres, frustums and compound solids, including reverse problems.',
    subtopics: [
      {
        title: 'Volume – Pyramid',
        slug: 'volume-pyramid',
        description:
          'The volume of a pyramid is one third of its base area times its height. These volume of pyramid questions apply it to triangular-based and square-based pyramids.',
      },
      {
        title: 'Volume – Cone',
        slug: 'volume-cone',
        description:
          'A cone is a pyramid with a circular base, so its volume is one third of base area times height. These volume of cone questions include a real sculpture.',
      },
      {
        title: 'Volume & Total Surface Area – Right Square Pyramid',
        slug: 'volume-total-surface-area-right-square-pyramid',
        description:
          'The surface area of a square pyramid is the base plus four triangular faces. These questions find it alongside the volume, for square and rectangular pyramids and right cones.',
      },
      {
        title: 'Surface Area – Sphere',
        slug: 'surface-area-sphere',
        description:
          'The surface area of a sphere is 4πr², four times the area of its widest circle. This question starts from the diameter.',
      },
      {
        title: 'Total Surface Area – Hemisphere',
        slug: 'total-surface-area-hemisphere',
        description:
          'The total surface area of a hemisphere includes its flat circular face as well as its curved surface, giving 2πr² + πr² = 3πr².',
      },
      {
        title: 'Volume – Hemisphere',
        slug: 'volume-hemisphere',
        description:
          'The volume of a hemisphere is half the volume of a sphere: ⅔πr³. These questions find both.',
      },
      {
        title: 'Surface Area & Volume – Compound Shape (Cylinder + Cone)',
        slug: 'surface-area-volume-compound-shape-cylinder-cone',
        description:
          'Composite solids are built from simple shapes. These questions combine cylinders with cones and hemispheres, from a toy rocket to a tablet.',
      },
      {
        title: 'Volume – Compound Shape (Standard Form)',
        slug: 'volume-compound-shape-standard-form',
        description:
          'The volume of compound shapes is the sum of the volumes of their parts. This fence post is a cylinder with a hemisphere on top.',
      },
      {
        title: 'Surface Area – Cone (Reverse Calculation)',
        slug: 'surface-area-cone-reverse-calculation',
        description:
          'The curved surface area of a cone is πrl, where l is the slant height. This question first works backwards to find the radius.',
      },
      {
        title: 'Volume – Cylinder & Cone (Reverse Calculation)',
        slug: 'volume-cylinder-cone-reverse-calculation',
        description:
          'When the volume of a cylinder is known, its formula can be rearranged to find the radius. This question then compares it with a cone.',
      },
      {
        title: 'Volume – Cone & Sphere (Conservation of Volume)',
        slug: 'volume-cone-sphere-conservation-of-volume',
        description:
          'When a solid is melted and recast, its volume stays the same. This question uses the volume of a sphere to find the size of the new pieces.',
      },
      {
        title: 'Surface Area & Volume – Square Pyramid',
        slug: 'surface-area-volume-square-pyramid',
        description:
          'The square pyramid volume needs the vertical height, which is not given directly here. The side faces are isosceles triangles, so Pythagoras finds it.',
      },
      {
        title: 'Surface Area & Volume – Compound Shape (Cone with Hemispherical Cavity)',
        slug: 'surface-area-volume-compound-shape-cone-with-hemispherical-cavity',
        description:
          'These questions find the surface area and volume of a cone and hemisphere combined, including a cone with a hemispherical hole in its base.',
      },
      {
        title: 'Volume & Surface Area – Frustum',
        slug: 'volume-surface-area-frustum',
        description:
          'A frustum is a cone with its tip sliced off parallel to the base. The volume of a frustum is the large cone minus the small one.',
      },
      {
        title: 'Volume & Surface Area – Square Pyramid (Reverse Calculation)',
        slug: 'volume-surface-area-square-pyramid-reverse-calculation',
        description:
          'This question works backwards from the volume to find the base side, then uses the slant height of the pyramid to find its surface area.',
      },
      {
        title: 'Surface Area – Sphere (from Volume)',
        slug: 'surface-area-sphere-from-volume',
        description:
          'Sphere volume and surface area both depend only on the radius. Find r from one, and the other follows.',
      },
      {
        title: 'Volume & Surface Area – Compound Shape (Fencepost)',
        slug: 'volume-surface-area-compound-shape-fencepost',
        description:
          'The surface area of composite shapes counts only the outside faces. This fence post joins a cylinder to a conical spike.',
      },
    ],
  },
  {
    title: 'Geometry and Trigonometry',
    slug: 'geometry-and-trigonometry',
    description:
      'Use SOHCAHTOA, the sine rule, the cosine rule and ½ab sin C to find sides, angles and areas of triangles.',
    subtopics: [
      {
        title: 'Right-angled triangle – finding angles',
        slug: 'right-angled-triangle-finding-angles',
        description:
          'SOHCAHTOA is the memory aid for sine, cosine and tangent in a right-angled triangle. These questions use it to find missing angles and sides.',
      },
      {
        title: 'Angle between a line and an axis',
        slug: 'angle-between-a-line-and-an-axis',
        description:
          'The angle between a line and the x-axis comes straight from its gradient: tan θ = m. The y-axis angle is its complement.',
      },
      {
        title: 'Sine rule – finding a side',
        slug: 'sine-rule-finding-a-side',
        description:
          'The sine rule links each side of a triangle to the sine of its opposite angle. These questions use it to find a missing side and a missing angle.',
      },
      {
        title: 'Cosine rule – finding a side',
        slug: 'cosine-rule-finding-a-side',
        description:
          'The cosine rule extends Pythagoras to any triangle: a² = b² + c² − 2bc cos A. These questions find a third side and find angles from three sides.',
      },
      {
        title: 'Area of a triangle',
        slug: 'area-of-a-triangle',
        description:
          'The area of a triangle using trigonometry needs two sides and the angle between them: Area = ½ab sin C.',
      },
      {
        title: 'Area of a triangle – finding unknowns',
        slug: 'area-of-a-triangle-finding-unknowns',
        description:
          'These questions work backwards: given the area of a triangle, find the angle or side. Rearranging ½ab sin C gives the unknown.',
      },
      {
        title: 'Mixed trigonometry – multi-step',
        slug: 'mixed-trigonometry-multi-step',
        description:
          'These trigonometry questions need more than one step. Each diagram mixes right-angled triangles with non-right-angled ones.',
      },
    ],
  },
  {
    title: 'Geometry & Trig',
    slug: 'geometry-trig',
    description:
      'Apply trigonometry in 3D to cuboids and pyramids, and solve bearings and angle of elevation and depression problems.',
    subtopics: [
      {
        title: '3D Trigonometry – Cuboid Angles',
        slug: '3d-trigonometry-cuboid-angles',
        description:
          '3D trigonometry finds lengths and angles in solids by picking out the right 2D triangle. These questions work inside cuboids.',
      },
      {
        title: '3D Trigonometry – Angle Between Lines',
        slug: '3d-trigonometry-angle-between-lines',
        description:
          'The angle between two lines in 3D is found in the triangle they form with a third line. These questions use the space diagonals of a cuboid.',
      },
      {
        title: '3D Trig – Right Pyramid, Angle ACM',
        slug: '3d-trig-right-pyramid-angle-acm',
        description:
          "The angle between a line and a plane is measured to the line's projection on the plane. In a right pyramid, that projection runs to the centre of the base.",
      },
      {
        title: '3D Trig – Right Pyramid, Find Height',
        slug: '3d-trig-right-pyramid-find-height',
        description:
          'The height of a pyramid is the perpendicular from the vertex to the centre of the base. These questions find it from an angle or a sloping edge.',
      },
      {
        title: '3D Trig – Diagonal AG / Base Angle',
        slug: '3d-trig-diagonal-ag-base-angle',
        description:
          'The angle between diagonal and base sits in a right-angled triangle formed by the space diagonal, the base diagonal and a vertical edge.',
      },
      {
        title: '3D Trig – Pyramid Edge-to-Plane Angle',
        slug: '3d-trig-pyramid-edge-to-plane-angle',
        description:
          'The angle between edge and base of a pyramid uses the triangle formed by the sloping edge, the height and half the base diagonal.',
      },
      {
        title: '3D Trig – Triangular Pyramid Edge-to-Plane',
        slug: '3d-trig-triangular-pyramid-edge-to-plane',
        description:
          'A right triangular pyramid has its vertex above the centroid of its base. These questions find the angle between a sloping edge and the base.',
      },
      {
        title: 'Bearings & Navigation (Two Legs)',
        slug: 'bearings-navigation-two-legs',
        description:
          'Bearings are measured clockwise from north as three-figure angles. These bearings questions follow two-leg and three-leg journeys back to the start.',
      },
      {
        title: '3D Trig – Square Pyramid',
        slug: '3d-trig-square-pyramid',
        description:
          'Square pyramid trigonometry picks out triangles inside the solid, such as the triangle through the vertex and a base diagonal.',
      },
      {
        title: 'Angles of Elevation / 3D Shapes – Cone',
        slug: 'angles-of-elevation-3d-shapes-cone',
        description:
          "The angle of elevation of a cone's sloping edge is the angle it makes with the base. Half the diameter and the height form a right-angled triangle.",
      },
      {
        title: 'Angles of Depression',
        slug: 'angles-of-depression',
        description:
          'An angle of depression is measured down from the horizontal. It equals the angle of elevation from the ground back up, by alternate angles.',
      },
      {
        title: 'Angles of Elevation – Two Observations',
        slug: 'angles-of-elevation-two-observations',
        description:
          'Two angle of elevation readings from different points give two triangles that share a height. These angle of elevation examples solve for that height.',
      },
      {
        title: '3D Trig – Cuboid from Face Diagonals',
        slug: '3d-trig-cuboid-from-face-diagonals',
        description:
          'Each face diagonal of a cuboid links two edge lengths through Pythagoras. Three face diagonals give three equations to solve.',
      },
      {
        title: '3D Trig – Angle Between Space Diagonals',
        slug: '3d-trig-angle-between-space-diagonals',
        description:
          'Two space diagonals cross at the centre of a cuboid. The method matches the angle between diagonals of a cube, with different edge lengths.',
      },
      {
        title: '3D Trigonometry – Pyramid (Real World)',
        slug: '3d-trigonometry-pyramid-real-world',
        description:
          'Pyramid trigonometry in real life uses the same triangles as textbook pyramids. These questions measure the Great Pyramid of Giza and the Louvre pyramid.',
      },
      {
        title: 'Angles of Elevation – Art Gallery',
        slug: 'angles-of-elevation-art-gallery',
        description:
          'These real-life examples of angles of elevation use a painting on a gallery wall and a tree seen from the ground and from a window.',
      },
      {
        title: '3D Geometry – Triangular Prism Roof',
        slug: '3d-geometry-triangular-prism-roof',
        description:
          'A pitched roof is a triangular prism sitting on top of a building. This question checks its angle against building regulations.',
      },
    ],
  },
  {
    title: 'Trigonometric Functions',
    slug: 'trigonometric-functions',
    description:
      'Sketch and transform sine, cosine and tangent graphs, find amplitude and period, and read equations from graphs.',
    subtopics: [
      {
        title: 'Tangent Function – Horizontal Shift',
        slug: 'tangent-function-horizontal-shift',
        description:
          'Tan graph transformations move the asymptotes as well as the curve. These questions sketch horizontal shifts of y = tan x and label every asymptote and intercept.',
      },
      {
        title: 'Tangent Function – Period Change',
        slug: 'tangent-function-period-change',
        description:
          'The period of the tan function y = tan bx is π ÷ b. A larger b squeezes the branches closer together.',
      },
      {
        title: 'Transformed Cosine – Amplitude, Period, Phase',
        slug: 'transformed-cosine-amplitude-period-phase',
        description:
          'The amplitude and period of a·sin(b(x + c)) + d come from a and b; c shifts the graph sideways and d moves it up or down.',
      },
      {
        title: 'Transformed Sine – Vertical Reflection and Shift',
        slug: 'transformed-sine-vertical-reflection-and-shift',
        description:
          'Sine graph transformations with a negative coefficient reflect the curve vertically. These questions combine that with vertical and horizontal shifts.',
      },
      {
        title: 'Finding Constants from Graph – asin(bx)+d',
        slug: 'finding-constants-from-graph-asin-bx-d',
        description:
          'Finding the equation of a sine graph means reading its features: the amplitude, the period, the shift and the centre line. Cosine graphs follow the same steps.',
      },
      {
        title: 'Period of Trigonometric Function',
        slug: 'period-of-trigonometric-function',
        description:
          'This question shows how to find the period of a function such as 3 sin 4x: the amplitude does not change it, but the coefficient of x does.',
      },
      {
        title: 'Tangent Function – Finding Period Multiplier from Graph',
        slug: 'tangent-function-finding-period-multiplier-from-graph',
        description:
          'The spacing of asymptotes on a tan graph gives its period, and the period gives b. This question works back from the graph to the equation.',
      },
      {
        title: 'Sketching Two Trig Functions on Same Axes',
        slug: 'sketching-two-trig-functions-on-same-axes',
        description:
          'Sketching trig graphs on the same axes sets up questions about their intersections. Both curves need the right period and amplitude.',
      },
      {
        title: 'Number of Solutions from Graph',
        slug: 'number-of-solutions-from-graph',
        description:
          'The number of solutions of a trig equation equals the number of times its two graphs intersect over the given domain.',
      },
      {
        title: 'Period of Sum of Trig Functions',
        slug: 'period-of-sum-of-trig-functions',
        description:
          'The period of a sum of trig functions is the lowest common multiple of the separate periods.',
      },
      {
        title: 'Rational Trigonometric Function – Asymptotes',
        slug: 'rational-trigonometric-function-asymptotes',
        description:
          'Asymptotes of trigonometric functions such as 3 ÷ (7 + 3 sin 2x) appear only where the denominator is zero. This question checks whether that can happen.',
      },
      {
        title: 'Rational Trigonometric Function – Maximum Value',
        slug: 'rational-trigonometric-function-maximum-value',
        description:
          'The maximum value of a trig function in a fraction comes when the denominator is smallest.',
      },
    ],
  },
  {
    title: 'Statistics',
    slug: 'statistics',
    description:
      "Draw scatter diagrams, describe correlation, find Pearson's correlation coefficient and regression lines, and judge predictions.",
    subtopics: [
      {
        title: 'Scatter Diagrams',
        slug: 'scatter-diagrams',
        description:
          'A scatter diagram shows whether two variables are related. These questions plot the data, the mean point and a line of best fit.',
      },
      {
        title: 'Describing Correlation',
        slug: 'describing-correlation',
        description:
          'Describing a scatter graph means naming both the direction and the strength. These questions practise the types of correlation the IB expects.',
      },
      {
        title: "Pearson's PMCC",
        slug: 'pearsons-pmcc',
        description:
          'The Pearson correlation coefficient, r, measures the strength of a linear relationship on a scale from −1 to 1. These questions calculate and interpret it.',
      },
      {
        title: 'Regression Line',
        slug: 'regression-line',
        description:
          'The regression line of y on x is the line of best fit that predicts y from x. These questions find its equation from data.',
      },
      {
        title: 'Predictions and Reliability',
        slug: 'predictions-and-reliability',
        description:
          'A regression prediction is reliable only when the correlation is strong and the value sits inside the data range. These questions practise interpolation and extrapolation.',
      },
      {
        title: 'Correlation and Regression',
        slug: 'correlation-and-regression',
        description:
          'These correlation and regression questions follow the full process: plot the data, describe the pattern, calculate r and find the regression line.',
      },
      {
        title: 'Regression / Interpretation',
        slug: 'regression-interpretation',
        description:
          'Interpreting a regression line means explaining its gradient and intercept in the context of the data, with units.',
      },
      {
        title: 'Regression / Two Regions',
        slug: 'regression-two-regions',
        description:
          'Some data sets contain two groups, such as children and adults. Piecewise regression fits a separate line to each group.',
      },
      {
        title: 'Regression line of x on y',
        slug: 'regression-line-of-x-on-y',
        description:
          'To predict x from y, use the regression line of x on y, not the y-on-x line. These questions find it and use it to estimate.',
      },
      {
        title: 'Regression line selection; prediction; reliability',
        slug: 'regression-line-selection-prediction-reliability',
        description:
          'The variable you know decides the line you use. These questions choose between the regression line y on x and the x-on-y line, then predict.',
      },
      {
        title: 'Mean values from regression lines',
        slug: 'mean-values-from-regression-lines',
        description:
          'Both regression lines pass through (x̄, ȳ), so regression lines intersect at the mean point. Solving them simultaneously gives both means.',
      },
      {
        title: 'Interpreting r² and deducing r',
        slug: 'interpreting-r2-and-deducing-r',
        description:
          'r squared tells you how well the regression line fits the data. Its square root gives r, with the sign taken from the gradient.',
      },
      {
        title: 'Deriving x-on-y regression line from y-on-x line when r = ±1',
        slug: 'deriving-x-on-y-regression-line-from-y-on-x-line-when-r-1',
        description:
          'With perfect correlation, regression lines coincide: every point lies on one line. The x-on-y line is the y-on-x line rearranged.',
      },
      {
        title: 'Interpreting gradient of regression line; estimation',
        slug: 'interpreting-gradient-of-regression-line-estimation',
        description:
          "The slope of a regression line is a rate of change. Here it gives the snail's average speed in centimetres per minute.",
      },
      {
        title: 'Changing units in regression equations',
        slug: 'changing-units-in-regression-equations',
        description:
          'Changing the units in a regression rescales the variables, so the gradient and intercept change while the relationship stays the same.',
      },
      {
        title: 'Correlation coefficient invariance under linear scaling',
        slug: 'correlation-coefficient-invariance-under-linear-scaling',
        description:
          'One of the key correlation coefficient properties: r does not change when the data is multiplied by a positive constant or shifted.',
      },
    ],
  },
  {
    title: 'Probability',
    slug: 'probability',
    description:
      'Find probabilities with Venn diagrams, tree diagrams, sample spaces and two-way tables, and work with distributions and expected value.',
    subtopics: [
      {
        title: 'Experimental Probability',
        slug: 'experimental-probability',
        description:
          'Relative frequency estimates a probability from data: the number of times an event happened divided by the number of trials.',
      },
      {
        title: 'Theoretical Probability',
        slug: 'theoretical-probability',
        description:
          'Theoretical probability counts equally likely outcomes rather than collecting data. These questions use dice and a standard pack of cards.',
      },
      {
        title: 'Complementary Probability',
        slug: 'complementary-probability',
        description:
          "Complementary events cover every outcome between them, so their probabilities add to 1. 'At least one' questions are often fastest this way.",
      },
      {
        title: 'Expected Value',
        slug: 'expected-value',
        description:
          'Expected value is the long-run average outcome. These questions find expected numbers of successes and the expected value of a discrete random variable.',
      },
      {
        title: 'Experimental & Expected Value',
        slug: 'experimental-expected-value',
        description:
          'Expected frequency multiplies a probability by the number of trials. Here the probability itself is estimated from a clinical trial.',
      },
      {
        title: 'Theoretical & Expected Value',
        slug: 'theoretical-expected-value',
        description:
          'Expected outcomes in probability come from a theoretical probability multiplied by the number of trials.',
      },
      {
        title: 'Forming & Solving Equations',
        slug: 'forming-solving-equations',
        description:
          'Probability equations come from a condition in the question, such as an expected number of outcomes. Writing that condition algebraically gives an equation.',
      },
      {
        title: 'Odds & Probability',
        slug: 'odds-probability',
        description:
          'Odds and probability measure the same thing in different ways. Odds compare an event happening with it not happening.',
      },
      {
        title: 'Monte Carlo / Estimation',
        slug: 'monte-carlo-estimation',
        description:
          'A Monte Carlo simulation estimates a value by running many random trials. This question estimates π from random points inside a square.',
      },
      {
        title: 'Venn Diagrams',
        slug: 'venn-diagrams',
        description:
          'A Venn diagram sorts a group into overlapping categories. These questions fill one in from given totals and find probabilities.',
      },
      {
        title: 'Venn Diagrams (probability notation)',
        slug: 'venn-diagrams-probability-notation',
        description:
          "Set notation probability uses ∩ for 'and', ∪ for 'or' and ′ for 'not'. These questions read each region of a Venn diagram in that notation.",
      },
      {
        title: 'Tree Diagrams',
        slug: 'tree-diagrams',
        description:
          'A tree diagram shows each stage of an experiment as a set of branches. Multiply along branches and add between them.',
      },
      {
        title: 'Tree Diagrams / Without Replacement',
        slug: 'tree-diagrams-without-replacement',
        description:
          'In probability without replacement, the second draw depends on the first, because one item has gone.',
      },
      {
        title: 'Sample Space Diagrams',
        slug: 'sample-space-diagrams',
        description:
          'A sample space lists every possible outcome. For two dice, a 6 × 6 grid shows all 36 equally likely results.',
      },
      {
        title: 'Sample Space Diagrams / Arrangements',
        slug: 'sample-space-diagrams-arrangements',
        description:
          'Arrangements and probability go together: list every arrangement of four letters systematically, then count the ones that fit the event.',
      },
      {
        title: 'Two-Way Tables',
        slug: 'two-way-tables',
        description:
          'A two-way table organises data by two categories at once. These questions read probabilities from its cells and totals.',
      },
      {
        title: 'Mutually Exclusive Events',
        slug: 'mutually-exclusive-events',
        description:
          'Mutually exclusive events cannot happen together, so P(A ∩ B) = 0 and their probabilities add directly.',
      },
      {
        title: 'Conditional Probability',
        slug: 'conditional-probability',
        description:
          'Conditional probability is the chance of an event given that another has already happened. It narrows the sample space.',
      },
      {
        title: 'Conditional Probability / Two-Way Tables',
        slug: 'conditional-probability-two-way-tables',
        description:
          'Conditional probability from a two-way table is a matter of choosing the right total: the given condition picks the row or column.',
      },
      {
        title: 'Conditional Probability / Venn Diagrams',
        slug: 'conditional-probability-venn-diagrams',
        description:
          'A conditional probability Venn diagram restricts attention to one circle. These questions use two-set and three-set diagrams.',
      },
      {
        title: 'Independent Events',
        slug: 'independent-events',
        description:
          'Independent events do not affect each other, so the probability of both is the product of their probabilities.',
      },
      {
        title: 'Sample Space Diagrams / Expected Value',
        slug: 'sample-space-diagrams-expected-value',
        description:
          'This dice probability question builds a sample space of the products of two dice, then uses it for an expected value.',
      },
      {
        title: 'Conditional Probability / Independence',
        slug: 'conditional-probability-independence',
        description:
          'Two events are independent when P(A | B) = P(A). These questions compare the two to decide between independent and dependent events.',
      },
      {
        title: 'Conditional Probability / Sample Space',
        slug: 'conditional-probability-sample-space',
        description:
          'This question shows how the wording of a condition changes the answer: list the sample space, then restrict it to the outcomes that meet the condition.',
      },
      {
        title: 'Discrete Probability Distributions',
        slug: 'discrete-probability-distributions',
        description:
          'A probability distribution lists every value of a random variable with its probability. These questions build one from a draw or a coin toss.',
      },
      {
        title: 'Expected Value / Finding k',
        slug: 'expected-value-finding-k',
        description:
          'Every probability distribution sums to 1. These questions use that fact to find k, then the expected value.',
      },
      {
        title: 'Fair Games / Expected Value',
        slug: 'fair-games-expected-value',
        description:
          'A game is a fair game when the expected gain is zero. These questions find expected winnings and the stake that makes a game fair.',
      },
      {
        title: 'Expected Value / Simultaneous Equations',
        slug: 'expected-value-simultaneous-equations',
        description:
          'With two unknown probabilities, you need two equations: the probabilities sum to 1, and E(X) is given. Solving them together finds both unknowns.',
      },
    ],
  },
  {
    title: 'Statistics – Normal Distribution',
    slug: 'statistics-normal-distribution',
    description:
      'Find probabilities and values from a normal distribution with technology, and use inverse normal in context.',
    subtopics: [
      {
        title: 'Finding probabilities from a normal distribution',
        slug: 'finding-probabilities-from-a-normal-distribution',
        description:
          'The normal distribution models continuous data that clusters around a mean. These questions find probabilities with technology.',
      },
      {
        title: 'Inverse normal distribution (finding x)',
        slug: 'inverse-normal-distribution-finding-x',
        description:
          'The inverse normal distribution works backwards: given a probability, it finds the value of x.',
      },
      {
        title: 'Normal distribution – model suitability',
        slug: 'normal-distribution-model-suitability',
        description:
          'Knowing when to use the normal distribution matters as much as using it. These questions judge whether data looks normal.',
      },
      {
        title: 'Normal distribution combined with expected value / inverse',
        slug: 'normal-distribution-combined-with-expected-value-inverse',
        description:
          'These questions find a probability from a normal distribution, then use it for an expected value: how many eggs, races or teenagers.',
      },
      {
        title: 'Inverse normal distribution – qualifying threshold',
        slug: 'inverse-normal-distribution-qualifying-threshold',
        description:
          'A normal distribution cutoff separates a top or bottom percentage from the rest. Faster times are smaller, so the top 15% sits in the left tail.',
      },
      {
        title: 'Inverse normal – quartiles and IQR',
        slug: 'inverse-normal-quartiles-and-iqr',
        description:
          'The normal distribution IQR is the gap between the quartiles, found with inverse normal at areas 0.25 and 0.75.',
      },
      {
        title: 'Inverse normal – percentile',
        slug: 'inverse-normal-percentile',
        description:
          'The 80th percentile of a normal distribution is the value with 80% of the data below it. Inverse normal finds it directly.',
      },
      {
        title: 'Normal distribution – box plot interpretation and completion',
        slug: 'normal-distribution-box-plot-interpretation-and-completion',
        description:
          'A normal distribution box plot is symmetrical, with the median in the centre of the box and equal whiskers.',
      },
      {
        title: 'Normal distribution – contextual probability + binomial',
        slug: 'normal-distribution-contextual-probability-binomial',
        description:
          'This question uses the normal and binomial distribution together: the normal model gives a probability, and a binomial model uses it over several races.',
      },
    ],
  },
  {
    title: 'Analysis & Approaches',
    slug: 'analysis-approaches',
    description:
      'Suggest limits, sketch derivatives, use the second derivative for concavity, and apply integration to areas and real contexts.',
    subtopics: [
      {
        title: 'Limits — trigonometric (degrees)',
        slug: 'limits-trigonometric-degrees',
        description:
          'Limits of trig functions such as sin 2x ÷ (πx/180) show why radians make calculus simpler. These questions use degrees and suggest each limit.',
      },
      {
        title: 'Limits — exponential',
        slug: 'limits-exponential',
        description:
          'Limits of exponential functions such as (aˣ − 1) ÷ x lead to ln a. These questions suggest each limit numerically and graphically.',
      },
      {
        title: 'Limits — graphical approach',
        slug: 'limits-graphical-approach',
        description:
          'Reading limits from graphs means looking at where the curve heads, even where the function itself is undefined.',
      },
      {
        title: 'Gradient of tangent by chord method',
        slug: 'gradient-of-tangent-by-chord-method',
        description:
          'The slope of a chord approaches the gradient of the tangent as the second point moves closer. This is the idea behind differentiation.',
      },
      {
        title: 'Evaluating a derivative at a point',
        slug: 'evaluating-a-derivative-at-a-point',
        description:
          'The gradient at a point is the value of the derivative there. This question reads it from a rate of change in context.',
      },
      {
        title: 'Limits',
        slug: 'limits',
        description:
          'Limits describe the value a function approaches. These questions use technology to suggest limits at a point and as x becomes very large.',
      },
      {
        title: 'Related rates / inverse derivatives',
        slug: 'related-rates-inverse-derivatives',
        description:
          'Related rates problems connect different rates of change. Here dx/dy is given, and its reciprocal gives the gradient dy/dx.',
      },
      {
        title: 'Increasing & Decreasing Functions',
        slug: 'increasing-decreasing-functions',
        description:
          'An increasing and decreasing function changes direction at its turning points. These questions read the intervals from f(x) or from f′(x).',
      },
      {
        title: 'Sketching Derivatives',
        slug: 'sketching-derivatives',
        description:
          'A derivative graph shows the gradient of the original function at every point. Turning points on f become x-intercepts on f′.',
      },
      {
        title: "Sketching f(x) from f'(x)",
        slug: 'sketching-f-x-from-f-x',
        description:
          "To sketch the graph of f from f', read the sign of f′: positive means f rises, negative means it falls, and zero gives a turning point.",
      },
      {
        title: 'Graphing & Analysing Functions',
        slug: 'graphing-analysing-functions',
        description:
          'Curve sketching combines a graph with analysis. These questions sketch a quartic and find where it is positive and where it decreases.',
      },
      {
        title: 'Matching Functions and Derivatives',
        slug: 'matching-functions-and-derivatives',
        description:
          'Matching functions and derivatives means linking turning points on one graph with x-intercepts on the other.',
      },
      {
        title: 'Area Enclosed by Curve and x-axis',
        slug: 'area-enclosed-by-curve-and-x-axis',
        description:
          'The area bounded by a curve and the x-axis is a definite integral between the points where the curve meets the axis.',
      },
      {
        title: 'Integration in Context',
        slug: 'integration-in-context',
        description:
          'Integrating a rate of change gives the total amount. These applications of integration use water filters, paint sprayers and sand timers.',
      },
      {
        title: 'Integration in Context / Improper Integrals',
        slug: 'integration-in-context-improper-integrals',
        description:
          'Improper integrals have an infinite limit. Here one finds how much sand eventually falls, even though the flow never quite stops.',
      },
      {
        title: 'Mathematical Modelling',
        slug: 'mathematical-modelling',
        description:
          'Mathematical modelling is only as good as its assumptions. This question asks for a clear criticism of a sand-timer model.',
      },
      {
        title: 'Integration from Derivative',
        slug: 'integration-from-derivative',
        description:
          'Finding a function from its derivative means integrating and then using a known point to fix the constant.',
      },
      {
        title: 'Second Derivative',
        slug: 'second-derivative',
        description:
          'The second derivative measures how the gradient changes. It underpins the second derivative test for maximum and minimum points.',
      },
      {
        title: 'Increasing/Decreasing & Concavity',
        slug: 'increasing-decreasing-concavity',
        description:
          'Concavity describes which way a curve bends. These questions describe sections of a graph and find where a polynomial is concave-up or concave-down.',
      },
      {
        title: 'Sketching Curves – Sign Analysis',
        slug: 'sketching-curves-sign-analysis',
        description:
          'A sign chart records whether f, f′ and f″ are positive or negative. Together they fix the position, direction and bend of a curve.',
      },
      {
        title: 'Concavity – Finding Constants',
        slug: 'concavity-finding-constants',
        description:
          'A cubic is concave up on one side of its point of inflection only. That point gives an equation for the unknown constant.',
      },
      {
        title: 'Proof – Concavity',
        slug: 'proof-concavity',
        description:
          'To prove concave-up behaviour, show the second derivative is positive over the whole interval required.',
      },
      {
        title: 'Second Derivative – Trigonometry',
        slug: 'second-derivative-trigonometry',
        description:
          'The second derivative of trig functions such as sin 3x returns a multiple of the original. This question uses that to prove a result.',
      },
      {
        title: 'Second Derivative – Logarithms & Proof',
        slug: 'second-derivative-logarithms-proof',
        description:
          'The second derivative of ln x is −1 ÷ x², which is always negative. The same holds for ln(a + x), so its graph is concave down.',
      },
      {
        title: 'Second Derivative – Mixed Functions',
        slug: 'second-derivative-mixed-functions',
        description:
          'A second order derivative of a product such as x² ln x needs the product rule twice. This question then solves an equation in it.',
      },
      {
        title: 'Intervals – Decreasing Gradient',
        slug: 'intervals-decreasing-gradient',
        description:
          'A decreasing gradient means f′ is falling, so f″ is negative. This question finds where that happens on a cubic.',
      },
      {
        title: 'Concavity & Increasing – Conditions',
        slug: 'concavity-increasing-conditions',
        description:
          'A section that is concave down and increasing needs f″(x) < 0 and f′(x) > 0 together. This question finds the condition on b.',
      },
    ],
  },
  {
    title: 'Calculus – Kinematics',
    slug: 'calculus-kinematics',
    description:
      'Move between displacement, velocity and acceleration with calculus, and find distance travelled, speeds and meeting times.',
    subtopics: [
      {
        title: 'Differentiation: Velocity & Acceleration from Displacement',
        slug: 'differentiation-velocity-acceleration-from-displacement',
        description:
          'In kinematics calculus, velocity is the derivative of displacement and acceleration is the derivative of velocity.',
      },
      {
        title: 'Integration: Distance Travelled',
        slug: 'integration-distance-travelled',
        description:
          'Total distance travelled counts every metre, forwards and backwards, so it uses the integral of |v|, not v.',
      },
      {
        title: 'Kinematics: Polynomial Model',
        slug: 'kinematics-polynomial-model',
        description:
          'Kinematics describes motion with displacement, velocity and acceleration. These kinematics questions use polynomial models in context.',
      },
      {
        title: 'Integration: Displacement from Velocity',
        slug: 'integration-displacement-from-velocity',
        description:
          'Finding displacement from velocity means integrating v. The change in displacement between two times is a definite integral.',
      },
      {
        title: 'Integration: Displacement and Distance',
        slug: 'integration-displacement-and-distance',
        description:
          'Displacement vs distance is the key distinction in kinematics: displacement has a direction, while distance counts all movement.',
      },
      {
        title: 'Integration: Velocity from Acceleration',
        slug: 'integration-velocity-from-acceleration',
        description:
          'Here is how to find velocity from acceleration: integrate a with respect to t, then use the initial velocity to find the constant.',
      },
      {
        title: 'Kinematics: Displacement–Time Analysis',
        slug: 'kinematics-displacementtime-analysis',
        description:
          'A displacement time graph shows where a particle is at each moment. Its gradient is the velocity.',
      },
      {
        title: 'Kinematics: Trigonometric Model',
        slug: 'kinematics-trigonometric-model',
        description:
          'This trigonometric kinematics model uses s = t sin t, so differentiating it needs the product rule.',
      },
      {
        title: 'Kinematics: Proof / Derivation',
        slug: 'kinematics-proof-derivation',
        description:
          'The constant acceleration equations come from calculus. This kinematics derivation integrates a = A twice.',
      },
      {
        title: 'Kinematics: Proof – SHM',
        slug: 'kinematics-proof-shm',
        description:
          'Simple harmonic motion is defined by an acceleration that is proportional to displacement and in the opposite direction.',
      },
      {
        title: 'Kinematics: Projectile / Free Fall',
        slug: 'kinematics-projectile-free-fall',
        description:
          'Under free fall, velocity falls at a constant rate. This question follows a ball thrown up from a cliff until it hits the sea.',
      },
      {
        title: 'Integration: Piecewise Acceleration',
        slug: 'integration-piecewise-acceleration',
        description:
          'With piecewise acceleration, each stage of motion has its own model. The velocity at the end of one stage starts the next.',
      },
      {
        title: 'Kinematics: Max/Min/Average Speed',
        slug: 'kinematics-max-min-average-speed',
        description:
          'Finding maximum speed with calculus means maximising |v|, not v. This question also finds the minimum and average speed.',
      },
      {
        title: 'Kinematics: Two-Particle Problem',
        slug: 'kinematics-two-particle-problem',
        description:
          'Two-particle kinematics problems compare two displacements. They meet when their displacements are equal.',
      },
    ],
  },
  {
    title: 'Proof / Algebra',
    slug: 'proof-algebra',
    description: 'Use kinematic reasoning to prove an algebraic inequality.',
    subtopics: [
      {
        title: 'Algebraic Proof using Kinematics Context',
        slug: 'algebraic-proof-using-kinematics-context',
        description:
          'This kinematics proof uses average speed to prove an algebraic inequality: the combined fraction lies between the two originals.',
      },
    ],
  },
]

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
  {
    functions: {
      title: 'Functions',
      'vertical-line-test-identifying-functions': [
        {
          id: 1,
          question:
            'Use technology to sketch the graph and determine whether the following equation for y describes a function of x.\ny = ± √x, x ≥ 0',
          type: 'Easy',
          explaination:
            'Sketch shows two branches (positive and negative square root). For any x > 0, there are two values of y. Fails vertical line test. NOT a function. [2]',
          answer: 'Not a function.',
        },
        {
          id: 2,
          question:
            'Use technology to sketch the graph and determine whether the following equation for y describes a function of x.\ny = √x², x ∈ ℝ',
          type: 'Easy',
          explaination:
            '√x² = |x|. Each value of x gives exactly one non-negative value of y. IS a function. [2]',
          answer: 'Yes, it is a function.',
        },
        {
          id: 3,
          question:
            'Use technology to sketch the graph and determine whether the following equation for y describes a function of x.\ny = x^(1/3), x ∈ ℝ',
          type: 'Easy',
          explaination:
            'Each x maps to exactly one real cube root. Passes vertical line test. IS a function. [2]',
          answer: 'Yes, it is a function.',
        },
        {
          id: 4,
          question:
            'Use technology to sketch the graph and determine whether the following equation for y describes a function of x.\ny = 2/x², x ≠ 0',
          type: 'Easy',
          explaination:
            'For each x ≠ 0, there is exactly one value of y. Passes vertical line test. IS a function. [2]',
          answer: 'Yes, it is a function.',
        },
      ],
      'domain-of-functions': [
        {
          id: 1,
          question: 'Find the largest possible domain of the real function:\nf(x) = 3x² - 2',
          type: 'Easy',
          explaination: 'Polynomial — defined for all real numbers. Domain: x ∈ ℝ. [1]',
          answer: 'x ∈ ℝ',
        },
        {
          id: 2,
          question: 'Find the largest possible domain of the real function:\ng(x) = 7x³ - 2x',
          type: 'Easy',
          explaination: 'Polynomial — defined for all real numbers. Domain: x ∈ ℝ. [1]',
          answer: 'x ∈ ℝ',
        },
        {
          id: 3,
          question: 'Find the largest possible domain of the real function:\nf(x) = 1/x',
          type: 'Easy',
          explaination: 'Denominator cannot be zero: x ≠ 0. Domain: x ∈ ℝ, x ≠ 0. [1]',
          answer: 'x ∈ ℝ, x ≠ 0',
        },
        {
          id: 4,
          question: 'Find the largest possible domain of the real function:\nf(x) = -3/x',
          type: 'Easy',
          explaination: 'Denominator cannot be zero: x ≠ 0. Domain: x ∈ ℝ, x ≠ 0. [1]',
          answer: 'x ∈ ℝ, x ≠ 0',
        },
        {
          id: 5,
          question: 'Find the largest possible domain of the real function:\nf(x) = 2√(x + 5)',
          type: 'Easy',
          explaination: 'Require x + 5 ≥ 0 ⇒ x ≥ -5. Domain: x ≥ -5. [1]',
          answer: 'x ≥ -5',
        },
        {
          id: 6,
          question: 'Find the largest possible domain of the real function:\ng(x) = 3√(2x - 7)',
          type: 'Easy',
          explaination: 'Require 2x - 7 ≥ 0 ⇒ x ≥ 7/2. Domain: x ≥ 3.5. [1]',
          answer: 'x ≥ 7/2',
        },
        {
          id: 7,
          question: 'Find the largest possible domain of the real function:\nf(x) = ln(5x + 3)',
          type: 'Easy',
          explaination: 'Require 5x + 3 > 0 ⇒ x > -3/5. Domain: x > -0.6. [1]',
          answer: 'x > -3/5',
        },
        {
          id: 8,
          question: 'Find the largest possible domain of the real function:\ng(x) = ln(2x - 8)',
          type: 'Easy',
          explaination: 'Require 2x - 8 > 0 ⇒ x > 4. Domain: x > 4. [1]',
          answer: 'x > 4',
        },
        {
          id: 9,
          question: 'Find the largest possible domain of the real function:\nf(x) = 3/(5 - 2x)',
          type: 'Easy',
          explaination: 'Denominator 5 - 2x ≠ 0 ⇒ x ≠ 5/2.\nDomain: x ∈ ℝ, x ≠ 2.5. [1]',
          answer: 'x ∈ ℝ, x ≠ 5/2',
        },
        {
          id: 10,
          question: 'Find the largest possible domain of the real function:\ng(x) = 2x/(3 + x)',
          type: 'Easy',
          explaination: 'Denominator 3 + x ≠ 0 ⇒ x ≠ -3. Domain: x ∈ ℝ, x ≠ -3. [1]',
          answer: 'x ∈ ℝ, x ≠ -3',
        },
      ],
      'range-of-functions': [
        {
          id: 1,
          question: 'Find the range of the function:\nf(x) = x² - 2, x ∈ ℝ',
          type: 'Easy',
          explaination:
            'Minimum of x² is 0 (at x=0). Therefore minimum of f is 0-2=-2. Range: f(x) ≥ -2. [2]',
          answer: 'f(x) ≥ -2',
        },
        {
          id: 2,
          question: 'Find the range of the function:\ng(x) = 3x² + 7, x ∈ ℝ',
          type: 'Easy',
          explaination:
            'Minimum of 3x² is 0 (at x=0). Therefore minimum of g is 0+7=7. Range: g(x) ≥ 7. [2]',
          answer: 'g(x) ≥ 7',
        },
        {
          id: 3,
          question: 'Find the range of the function:\nf(x) = 2x + 8, x ≤ 5',
          type: 'Easy',
          explaination:
            'f is linear and increasing. At the upper boundary x = 5: f(5) = 18. Range: f(x) ≤ 18. [2]',
          answer: 'f(x) ≤ 18',
        },
        {
          id: 4,
          question: 'Find the range of the function:\ng(x) = 7 - 3x, x > 1',
          type: 'Easy',
          explaination: 'g is linear and decreasing. As x → 1⁺, g → 4. Range:\ng(x) < 4. [2]',
          answer: 'g(x) < 4',
        },
        {
          id: 5,
          question: 'Find the range of the function:\nf(x) = √(4 + x), x ≥ -4',
          type: 'Medium',
          explaination: 'At x = -4: f(-4) = 0. As x increases, f increases. Range:\nf(x) ≥ 0. [2]',
          answer: 'f(x) ≥ 0',
        },
        {
          id: 6,
          question: 'Find the range of the function:\ng(x) = 3√(5 - 2x), x < 2.5',
          type: 'Medium',
          explaination:
            'As x → 2.5⁻, 5-2x → 0⁺, so g → 0⁺. As x decreases, g increases without bound. Range: g(x) > 0. [2]',
          answer: 'g(x) > 0',
        },
        {
          id: 7,
          question: 'Find the range of the function:\nf(x) = 2 + ln(x - 7), x ≥ 8',
          type: 'Medium',
          explaination:
            'At x = 8: f(8) = 2 + ln(1) = 2.\nAs x increases, ln(x-7) increases. Range: f(x) ≥ 2. [2]',
          answer: 'f(x) ≥ 2',
        },
        {
          id: 8,
          question: 'Find the range of the function:\ng(x) = 3 - ln(2x + 1), x > 0',
          type: 'Medium',
          explaination:
            'As x → 0⁺, ln(1) = 0, so g → 3⁻. As x increases, ln(2x+1) increases, so g decreases. Range: g(x) < 3. [2]',
          answer: 'g(x) < 3',
        },
      ],
      'inverse-functions-sketching': [],
      'composite-functions': [
        {
          id: 1,
          question: 'Given f(x) = 3x - 1 and g(x) = x², find an expression for (f ∘ g)(x).',
          type: 'Easy',
          explaination: '(f ∘ g)(x) = f(g(x)) = f(x²) = 3x²- 1',
          answer: '3x² - 1',
        },
        {
          id: 2,
          question: 'Given f(x) = 4x + 2 and g(x) = x², find an expression for (f ∘ g)(x).',
          type: 'Easy',
          explaination: '(f ∘ g)(x) = f(x²) = 4x² + 2',
          answer: '4x² + 2',
        },
        {
          id: 3,
          question: 'Given f(x) = x² and g(x) = 2x + 1, find an expression for (f ∘ g)(x).',
          type: 'Easy',
          explaination: '(f ∘ g)(x) = f(2x+1) = (2x+1)² = 4x² + 4x + 1',
          answer: '4x² + 4x + 1',
        },
        {
          id: 4,
          question: 'Given f(x) = x² and g(x) = 3x - 2, find an expression for (f ∘ g)(x).',
          type: 'Easy',
          explaination: '(f ∘ g)(x) = f(3x-2) = (3x-2)² = 9x² - 12x + 4',
          answer: '9x² - 12x + 4',
        },
        {
          id: 5,
          question: 'Given f(x) = 3x² + 2x and g(x) = 2x, find an expression for (f ∘ g)(x).',
          type: 'Easy',
          explaination: '(f ∘ g)(x) = f(2x) = 3(2x)² + 2(2x) = 12x² + 4x',
          answer: '12x² + 4x',
        },
        {
          id: 6,
          question: 'Given f(x) = 5x² - 3x and g(x) = 2x, find an expression for (f ∘ g)(x).',
          type: 'Easy',
          explaination: '(f ∘ g)(x) = f(2x) = 5(2x)² - 3(2x) = 20x² - 6x',
          answer: '20x² - 6x',
        },
        {
          id: 7,
          question: 'Given f(x) = 3eˣ and g(x) = 2x + 5, find an expression for (f ∘ g)(x).',
          type: 'Easy',
          explaination: '(f ∘ g)(x) = f(2x+5) = 3e²ˣ⁺⁵',
          answer: '3e²ˣ⁺⁵',
        },
        {
          id: 8,
          question: 'Given f(x) = 4eˣ and g(x) = 3x + 1, find an expression for (f ∘ g)(x).',
          type: 'Easy',
          explaination: '(f ∘ g)(x) = f(3x+1) = 4e³ˣ⁺¹',
          answer: '4e³ˣ⁺¹',
        },
        {
          id: 9,
          question: 'Given f(x) = 3x + 1 and g(x) = 4eˣ, find an expression for (f ∘ g)(x).',
          type: 'Easy',
          explaination: '(f ∘ g)(x) = f(4eˣ) = 3(4eˣ) + 1 = 12eˣ + 1',
          answer: '12eˣ + 1',
        },
        {
          id: 10,
          question: 'Given f(x) = 2x + 5 and g(x) = 3eˣ, find an expression for (f ∘ g)(x).',
          type: 'Easy',
          explaination: '(f ∘ g)(x) = f(3eˣ) = 2(3eˣ) + 5 = 6eˣ + 5',
          answer: '6eˣ + 5',
        },
        {
          id: 11,
          question: 'Given f(x) = x³ - 2x and g(x) = eˣ, find an expression for (f ∘ g)(x).',
          type: 'Medium',
          explaination: '(f ∘ g)(x) = f(eˣ) = (eˣ)³ -2eˣ = e³ˣ - 2eˣ',
          answer: 'e³ˣ -2eˣ',
        },
        {
          id: 12,
          question: 'Given f(x) = x³ + 4x and g(x) = eˣ, find an expression for (f ∘ g)(x).',
          type: 'Medium',
          explaination: '(f ∘ g)(x) = f(eˣ) = (eˣ)³ + 4eˣ = e³ˣ + 4eˣ',
          answer: 'e³ˣ + 4eˣ',
        },
        {
          id: 13,
          question: 'Given f(x) = 1/(x+1) and g(x) = 3x + 2, find an expression for (f ∘ g)(x).',
          type: 'Medium',
          explaination: '(f ∘ g)(x) = f(3x+2) = 1/((3x+2)+1) = 1/(3x+3)',
          answer: '1/(3x+3)',
        },
        {
          id: 14,
          question: 'Given f(x) = 1/(x-2) and g(x) = 2x + 5, find an expression for (f ∘ g)(x).',
          type: 'Medium',
          explaination: '(f ∘ g)(x) = f(2x+5) = 1/((2x+5)-2) = 1/(2x+3)',
          answer: '1/(2x+3)',
        },
        {
          id: 15,
          question: 'Given f(x) = 3x - 2x² and g(x) = 1/x, find an expression for (f ∘ g)(x).',
          type: 'Medium',
          explaination: '(f ∘ g)(x) = f(1/x) = 3/x - 2/x²',
          answer: '3/x -2/x²',
        },
        {
          id: 16,
          question: 'Given f(x) = 4x + 3x² and g(x) = 1/x, find an expression for (f ∘ g)(x).',
          type: 'Medium',
          explaination: '(f ∘ g)(x) = f(1/x) = 4/x + 3/x²',
          answer: '4/x + 3/x²',
        },
        {
          id: 17,
          question:
            'Let f(x) = 3x - 1 and g(x) = 4 - 3x.\nFind and simplify an expression for (f ∘ g)(x).',
          type: 'Medium',
          explaination: '(f ∘ g)(x) = f(4-3x) = 3(4-3x)-1 = 12-9x-1 = 11-9x.',
          answer: '-9x + 11',
        },
        {
          id: 18,
          question: 'Let f(x) = 3x - 1 and g(x) = 4 - 3x.\nSolve the equation (g ∘ f)(x) = 4.',
          type: 'Medium',
          explaination: '(g ∘ f)(x) = g(3x-1) = 4-3(3x-1) = 7-9x. Set equal to 4: 7-9x=4 ⇒ x=1/3.',
          answer: 'x = 1/3',
        },
        {
          id: 19,
          question:
            'Let f(x) = x² + 1 and g(x) = x - 1.\nFind and simplify an expression for f(f(x)).',
          type: 'Medium',
          explaination: 'f(f(x)) = f(x²+1) = (x²+1)²+1 = x⁴+2x²+2.',
          answer: 'x⁴ + 2x² + 2',
        },
        {
          id: 20,
          question: 'Let f(x) = x² + 1 and g(x) = x - 1.\nSolve the equation f(g(x)) = g(f(x)).',
          type: 'Medium',
          explaination:
            'LHS: f(g(x)) = f(x-1) = (x-1)²+1 = x²-2x+2. RHS: g(f(x)) = g(x²+1) = x². Set equal: x²-2x+2 = x² ⇒ -2x+2=0 ⇒ x=1.',
          answer: 'x = 1/2',
        },
        {
          id: 21,
          question: 'Given that f(x) = 2x³, find a simplified expression for (f ∘ f)(x).',
          type: 'Easy',
          explaination: '(f ∘ f)(x) = f(2x³) = 2(2x³)³ = 2 · 8x⁹ = 16x⁹.',
          answer: '16x⁹',
        },
        {
          id: 22,
          question:
            'Let f(x) = ln x (x > 0) and g(x) = x -5.\nWrite down the exact values of (f ∘ g)(8) and (g ∘ f)(8).',
          type: 'Medium',
          explaination: '(f ∘ g)(8)=f(3)=ln 3; (g ∘ f)(8)=g(ln 8)=ln 8-5.',
          answer: '(f ∘ g)(8) = ln 3; (g ∘ f)(8) = ln 8 - 5',
        },
        {
          id: 23,
          question: 'Let f(x) = ln x (x > 0) and g(x) = x -5.\nSolve the equation fg(x) = 8.',
          type: 'Medium',
          explaination: 'ln(x-5)=8 ⇒ x-5=e⁸ ⇒ x=e⁸+5.',
          answer: 'x = e⁸ + 5',
        },
        {
          id: 24,
          question:
            'Given that f(x) = 1/(x+2) and g(x) = 1/(x-3):\nFind and simplify an expression for (f ∘ g)(x).',
          type: 'Hard',
          explaination:
            '(f ∘ g)(x) = f(1/(x-3)) = 1/(1/(x-3)+2) = (x-3)/(1+2(x-3)) = (x-3)/(2x-5).',
          answer: '(x-3)/(2x-5)',
        },
        {
          id: 25,
          question:
            'Given that f(x) = 1/(x+2) and g(x) = 1/(x-3):\nFind the largest possible domain for the function (f ∘ g)(x).',
          type: 'Hard',
          explaination: 'Exclude x=3 (g undefined) and x=5/2 (denominator 0).',
          answer: 'x ≠ 3, x ≠ 5/2',
        },
        {
          id: 26,
          question:
            'Given that f(x) = 1/(x+2) and g(x) = 1/(x-3):\nSolve the equation (f ∘ g)(x) = 2.',
          type: 'Hard',
          explaination: '(x-3)/(2x-5)=2 ⇒ x-3=4x-10 ⇒ -3x=-7 ⇒ x=7/3.',
          answer: 'x = 11/4',
        },
      ],
    },
  },
  {
    trigonometry: {
      title: 'Trigonometry',
      'radians-degree-radian-conversion': [
        {
          id: 1,
          question: 'Convert to radians, giving your answers in terms of π:\n60°',
          type: 'Easy',
          explaination: 'Use radians = π/180 × degrees\n60 × π/180 = π/3',
          answer: 'π/3 rad',
        },
        {
          id: 2,
          question: 'Convert to radians, giving your answers in terms of π:\n45°',
          type: 'Easy',
          explaination: '45 × π/180 = π/4',
          answer: 'π/4 rad',
        },
        {
          id: 3,
          question: 'Convert to radians, giving your answers in terms of π:\n150°',
          type: 'Easy',
          explaination: '150 × π/180 = 5π/6',
          answer: '5π/6 rad',
        },
        {
          id: 4,
          question: 'Convert to radians, giving your answers in terms of π:\n120°',
          type: 'Easy',
          explaination: '120 × π/180 = 2π/3',
          answer: '2π/3 rad',
        },
        {
          id: 5,
          question: 'Convert to radians, giving your answers in terms of π:\n90°',
          type: 'Easy',
          explaination: '90 × π/180 = π/2',
          answer: 'π/2 rad',
        },
        {
          id: 6,
          question: 'Convert to radians, giving your answers in terms of π:\n270°',
          type: 'Easy',
          explaination: '270 × π/180 = 3π/2',
          answer: '3π/2 rad',
        },
        {
          id: 7,
          question: 'Convert to radians, giving your answer to three significant figures:\n28°',
          type: 'Easy',
          explaination: '28 × π/180 ≈ 0.489 rad (3 s.f.)',
          answer: '0.489 rad',
        },
        {
          id: 8,
          question: 'Convert to radians, giving your answer to three significant figures:\n36°',
          type: 'Easy',
          explaination: '36 × π/180 ≈ 0.628 rad (3 s.f.)',
          answer: '0.628 rad',
        },
        {
          id: 9,
          question: 'Convert to radians, giving your answer to three significant figures:\n67°',
          type: 'Easy',
          explaination: '67 × π/180 ≈ 1.17 rad (3 s.f.)',
          answer: '1.17 rad',
        },
        {
          id: 10,
          question: 'Convert to radians, giving your answer to three significant figures:\n78°',
          type: 'Easy',
          explaination: '78 × π/180 ≈ 1.36 rad (3 s.f.)',
          answer: '1.36 rad',
        },
        {
          id: 11,
          question: 'Convert to radians, giving your answer to three significant figures:\n196°',
          type: 'Easy',
          explaination: '196 × π/180 ≈ 3.42 rad',
          answer: '3.42 rad',
        },
        {
          id: 12,
          question: 'Convert to radians, giving your answer to three significant figures:\n236°',
          type: 'Easy',
          explaination: '236 × π/180 ≈ 4.12 rad',
          answer: '4.12 rad',
        },
        {
          id: 13,
          question: 'Convert to degrees, giving your answers to one decimal place:\n0.62 radians',
          type: 'Easy',
          explaination: 'Use degrees = 180/π × radians\n0.62 × 180/π ≈ 35.5°',
          answer: '35.5°',
        },
        {
          id: 14,
          question: 'Convert to degrees, giving your answers to one decimal place:\n0.83 radians',
          type: 'Easy',
          explaination: '0.83 × 180/π ≈ 47.6°',
          answer: '47.6°',
        },
        {
          id: 15,
          question: 'Convert to degrees, giving your answers to one decimal place:\n1.26 radians',
          type: 'Easy',
          explaination: '1.26 × 180/π ≈ 72.2°',
          answer: '72.2°',
        },
        {
          id: 16,
          question: 'Convert to degrees, giving your answers to one decimal place:\n1.35 radians',
          type: 'Easy',
          explaination: '1.35 × 180/π ≈ 77.4°',
          answer: '77.4°',
        },
        {
          id: 17,
          question: 'Convert to degrees, giving your answers to one decimal place:\n4.61 radians',
          type: 'Easy',
          explaination: '4.61 × 180/π ≈ 264.1°',
          answer: '264.1°',
        },
        {
          id: 18,
          question: 'Convert to degrees, giving your answers to one decimal place:\n5.24 radians',
          type: 'Easy',
          explaination: '5.24 × 180/π ≈ 300.2°',
          answer: '300.2°',
        },
        {
          id: 19,
          question: 'Convert to degrees:\nπ/5 radians',
          type: 'Easy',
          explaination: 'π/5 × 180/π = 36°',
          answer: '36°',
        },
        {
          id: 20,
          question: 'Convert to degrees:\nπ/8 radians',
          type: 'Easy',
          explaination: 'π/8 × 180/π = 22.5°',
          answer: '22.5°',
        },
        {
          id: 21,
          question: 'Convert to degrees:\n7π/12 radians',
          type: 'Easy',
          explaination: '7π/12 × 180/π = (7 × 180)/12 = 105°',
          answer: '105°',
        },
        {
          id: 22,
          question: 'Convert to degrees:\n4π/15 radians',
          type: 'Easy',
          explaination: '4π/15 × 180/π = 48°',
          answer: '48°',
        },
        {
          id: 23,
          question: 'Convert to degrees:\n7π/3 radians',
          type: 'Easy',
          explaination: '7π/3 × 180/π = 420°',
          answer: '420°',
        },
        {
          id: 24,
          question: 'Convert to degrees:\n11π/6 radians',
          type: 'Easy',
          explaination: '11π/6 × 180/π = 330°',
          answer: '330°',
        },
      ],
      'unit-circle-marking-radian-angles': [
        {
          id: 1,
          question: 'Mark on the unit circle the points corresponding to:\n2π/3',
          type: 'Medium',
          explaination: '2π/3 = 120°: 2nd quadrant',
          answer: '2nd quadrant, equivalent to 120°',
        },
        {
          id: 2,
          question: 'Mark on the unit circle the points corresponding to:\n3π/4',
          type: 'Medium',
          explaination: '3π/4 = 135°: 2nd quadrant',
          answer: '2nd quadrant, equivalent to 135°',
        },
        {
          id: 3,
          question: 'Mark on the unit circle the points corresponding to:\n5π/6',
          type: 'Medium',
          explaination: '5π/6 = 150°: 2nd quadrant',
          answer: '2nd quadrant, equivalent to 150°',
        },
        {
          id: 4,
          question: 'Mark on the unit circle the points corresponding to:\n7π/4',
          type: 'Medium',
          explaination: '7π/4 = 315°: 4th quadrant',
          answer: '4th quadrant, equivalent to 315°',
        },
        {
          id: 5,
          question: 'Mark on the unit circle the points corresponding to:\n-π/2',
          type: 'Medium',
          explaination: '-π/2 means 90° clockwise → bottom of unit circle',
          answer: 'Negative y-axis (270° or -90°)',
        },
        {
          id: 6,
          question: 'Mark on the unit circle the points corresponding to:\n-3π/2',
          type: 'Medium',
          explaination: '-3π/2 means 270° clockwise → top of unit circle',
          answer: 'Positive y- axis (90° or -270°)',
        },
        {
          id: 7,
          question: 'Mark on the unit circle the points corresponding to:\n-π/3',
          type: 'Medium',
          explaination: '-π/3 ≡ 300°: 4th quadrant',
          answer: '4th quadrant, equivalent to 300°',
        },
        {
          id: 8,
          question: 'Mark on the unit circle the points corresponding to:\n-π/4',
          type: 'Medium',
          explaination: '-π/4 ≡ 315°: 4th quadrant',
          answer: '4th quadrant, equivalent to 315°',
        },
        {
          id: 9,
          question: 'Mark on the unit circle the points corresponding to:\n8π/3',
          type: 'Medium',
          explaination: '8π/3 - 2π= 2π/3 = 120°: 2nd quadrant',
          answer: '2nd quadrant, equivalent to 120°',
        },
        {
          id: 10,
          question: 'Mark on the unit circle the points corresponding to:\n11π/4',
          type: 'Medium',
          explaination: '11π/4 - 2π= 3π/4 = 135°: 2nd quadrant',
          answer: '2nd quadrant, equivalent to 135°',
        },
        {
          id: 11,
          question: 'Mark on the unit circle the points corresponding to:\n11π/2',
          type: 'Medium',
          explaination: '11π/2 - 4π= 3π/2 = 270°',
          answer: 'Bottom of circle, equivalent to 270°',
        },
        {
          id: 12,
          question: 'Mark on the unit circle the points corresponding to:\n19π/2',
          type: 'Medium',
          explaination: '19π/2 - 8π= 3π/2 = 270° Both map to the same point.',
          answer: 'Bottom of circle, equivalent to 270°',
        },
      ],
      'segment-area-and-perimeter': [],
      'double-angle-formulae': [
        {
          id: 1,
          question: 'Find cos 2x given that cos x = 1/2.',
          type: 'Easy',
          explaination: 'Use cos 2x = 2 cos² x - 1 = 2(1/4) - 1 = -1/2',
          answer: 'cos 2x = -1/2',
        },
        {
          id: 2,
          question: 'Find cos 2x given that cos x = 1/3.',
          type: 'Easy',
          explaination: 'cos 2x = 2(1/9) - 1 = 2/9 - 1 = -7/9',
          answer: 'cos 2x = -7/9',
        },
        {
          id: 3,
          question: 'Find cos 2x given that sin x = -2/3.',
          type: 'Easy',
          explaination: 'Use cos 2x = 1 - 2 sin² x = 1- 2(4/9) = 1 - 8/9 = 1/9',
          answer: 'cos 2x = 1/9',
        },
        {
          id: 4,
          question: 'Find cos 2x given that sin x = -1/4.',
          type: 'Easy',
          explaination: 'cos 2x = 1 - 2(1/16) = 1 - 1/8 = 7/8',
          answer: 'cos 2x = 7/8',
        },
        {
          id: 5,
          question: 'Find all possible values of sin x and sin 2x given that cos x = -1/4.',
          type: 'Easy',
          explaination:
            'sin² x = 1 - 1/16 = 15/16 ⇒ sin x = ± √15/4 sin 2x = 2 sin x cos x = 2(± √15/4)(-1/4) = ∓ √15/8',
          answer: 'sin x = ± √15/4, sin 2x = ∓ √15/8',
        },
        {
          id: 6,
          question: 'Find all possible values of sin x and sin 2x given that cos x = -1/5.',
          type: 'Easy',
          explaination:
            'sin² x = 1 - 1/25 = 24/25 ⇒ sin x = ± 2√6/5 sin 2x = 2(± 2√6/5)(-1/5) = ∓ 4√6/25',
          answer: 'sin x = ± 2√6/5, sin 2x = ∓ 4√6/25',
        },
        {
          id: 7,
          question: 'Given that sin θ= -4/9:\nFind the exact value of cos 2θ.',
          type: 'Medium',
          explaination: 'cos 2θ= 1 - 2 sin² θ= 1 - 2 · 16/81 = 1 - 32/81 = 49/81',
          answer: 'cos 2θ= 49/81',
        },
        {
          id: 8,
          question: 'Given that sin θ= -4/9:\nFind the possible values of cos θ.',
          type: 'Medium',
          explaination: 'cos² θ= 1 - 16/81 = 65/81 ⇒ cos θ= ± √65/9',
          answer: 'cos θ= ± √65/9',
        },
      ],
      'half-angle-formulae': [
        {
          id: 1,
          question: 'Find the exact value of sin 22.5°.',
          type: 'Medium',
          explaination:
            'sin² 22.5° = (1-cos 45°)/2 = (1-√2/2)/2 = (2-√2)/4 Since 22.5° > 0, sin 22.5° = √((2-√2)/4)',
          answer: 'sin 22.5° = √((2-√2)/4) = √(2-√2)/2',
        },
        {
          id: 2,
          question: 'Find the exact value of cos 22.5°.',
          type: 'Medium',
          explaination:
            'cos² 22.5° = (1+cos 45°)/2 = (1+√2/2)/2 = (2+√2)/4 cos 22.5° = √((2+√2)/4)',
          answer: 'cos 22.5° = √((2+√2)/4) = √(2+√2)/2',
        },
        {
          id: 3,
          question: 'Find the exact value of cos(3π/8).',
          type: 'Medium',
          explaination:
            '3π/8 = ½ × 3π/4, so use cos(θ/2) = √((1 + cos θ)/2) with θ = 3π/4.\ncos(3π/8) = √((1 + cos(3π/4))/2) = √((1 - √2/2)/2) = √((2 - √2)/4) = √(2 - √2)/2',
          answer: 'cos(3π/8) = √((2-√2)/4) = √(2-√2)/2',
        },
        {
          id: 4,
          question: 'Find the exact value of sin(3π/8).',
          type: 'Medium',
          explaination: 'sin(3π/8) = cos(π/8) (co-function) = √((1+cos π/4)/2) = √((2+√2)/4)',
          answer: 'sin(3π/8) = √((2+√2)/4) = √(2+√2)/2',
        },
      ],
    },
  },
  {
    'statistics-probability': {
      title: 'Statistics & Probability',
      'sampling-stratified': [
        {
          id: 1,
          question:
            'In a wildlife park, 30% of big cats are lions and 70% are tigers. A stratified sample of 30 big cats is to be selected.\nHow many of each type should be included in the sample?',
          type: 'Easy',
          explaination: 'Lions: 0.30 × 30 = 9 Tigers: 0.70 × 30 = 21',
          answer: 'Lions: 9, Tigers: 21',
        },
        {
          id: 2,
          question:
            'Of ice creams sold in a café, 45% are strawberry and 55% are chocolate. A stratified sample of 20 ice creams is to be selected.\nHow many of each flavour should be included?',
          type: 'Easy',
          explaination: 'Strawberry: 0.45 × 20 = 9 Chocolate: 0.55 × 20 = 11',
          answer: 'Strawberry: 9, Chocolate: 11',
        },
        {
          id: 3,
          question:
            'A school is attended by 120 boys and 80 girls. A stratified sample of 40 pupils is to be selected.\nHow many boys and how many girls should be in the sample?',
          type: 'Easy',
          explaination: 'Total = 200 Boys: 120/200 × 40 = 24 Girls: 80/200 × 40 = 16',
          answer: 'Boys: 24, Girls: 16',
        },
        {
          id: 4,
          question:
            'There are 84 pupils studying Maths HL and 126 pupils studying Maths SL. A stratified sample of 45 pupils is to be selected.\nHow many from each group should be included?',
          type: 'Easy',
          explaination: 'Total = 210 HL: 84/210 × 45 = 18 SL: 126/210 × 45 = 27',
          answer: 'HL: 18, SL: 27',
        },
        {
          id: 5,
          question:
            '25% of pupils at a school play football, 35% play hockey and 40% play basketball. A stratified sample of 40 pupils is to be selected.\nHow many from each sport group should be included?',
          type: 'Easy',
          explaination:
            'Football: 0.25 × 40 = 10 Hockey: 0.35 × 40 = 14 Basketball: 0.40 × 40 = 16',
          answer: 'Football: 10, Hockey: 14, Basketball: 16',
        },
        {
          id: 6,
          question:
            '30% of fish caught are cod, 45% are haddock and 25% are mackerel. A stratified sample of 20 fish is to be selected.\nHow many of each type should be in the sample?',
          type: 'Easy',
          explaination: 'Cod: 0.30 × 20 = 6 Haddock: 0.45 × 20 = 9 Mackerel: 0.25 × 20 = 5',
          answer: 'Cod: 6, Haddock: 9, Mackerel: 5',
        },
        {
          id: 7,
          question:
            'A manufacturer produced 240 chairs, 90 tables and 40 beds. A stratified sample of 37 pieces of furniture is to be selected.\nHow many of each type should be included?',
          type: 'Medium',
          explaination:
            'Total = 370 Chairs: 240/370 × 37 = 24 Tables: 90/370 × 37 = 9 Beds: 40/370 × 37 = 4',
          answer: 'Chairs: 24, Tables: 9, Beds: 4',
        },
        {
          id: 8,
          question:
            'A park has 64 oak trees, 56 willow trees and 32 chestnut trees. A stratified sample of 19 trees is to be selected.\nHow many of each type should be included?',
          type: 'Medium',
          explaination:
            'Total = 152 Oak: 64/152 × 19 = 8 Willow: 56/152 × 19 = 7 Chestnut: 32/152 × 19 = 4',
          answer: 'Oak: 8, Willow: 7, Chestnut: 4',
        },
        {
          id: 9,
          question:
            'Of all scarves sold: 30% are red, 30% are green, 25% are blue and 15% are white. The shop owner takes a stratified sample of 40 records.\nHow many scarves of each colour should be included to make this a stratified sample?',
          type: 'Medium',
          explaination:
            'Red: 0.30 × 40 = 12 Green: 0.30 × 40 = 12 Blue: 0.25 × 40 = 10 White: 0.15 × 40 = 6 Total = 40 ✓',
          answer: 'Red: 12, Green: 12, Blue: 10, White: 6',
        },
      ],
      'outliers-iqr-method': [
        {
          id: 1,
          question:
            'Identify the range of values that would be flagged as outliers, given:\nLower quartile = 50, Upper quartile = 80.',
          type: 'Easy',
          explaination:
            'IQR = Q₃ - Q₁ = 80 - 50 = 30 Lower fence: Q₁ - 1.5 × IQR = 50 - 45 = 5 Upper fence: Q₃ + 1.5 × IQR = 80 + 45 = 125 Outliers: values < 5 or > 125',
          answer: 'Values below 5 or above 125',
        },
        {
          id: 2,
          question:
            'Identify the range of values that would be flagged as outliers, given:\nLower quartile = 16, Upper quartile = 20.',
          type: 'Easy',
          explaination:
            'IQR = 20 - 16 = 4 Lower fence: 16 - 1.5(4) = 16 - 6 = 10 Upper fence: 20 + 1.5(4) = 20 + 6 = 26 Outliers: values < 10 or > 26',
          answer: 'Values below 10 or above 26',
        },
        {
          id: 3,
          question:
            'Identify the range of values that would be flagged as outliers, given:\nQ₁ = 6.5, Q₃ = 10.5.',
          type: 'Easy',
          explaination:
            'IQR = 10.5 - 6.5 = 4 Lower fence: 6.5 - 1.5(4) = 6.5 - 6 = 0.5 Upper fence: 10.5 + 1.5(4) = 10.5 + 6 = 16.5 Outliers: values < 0.5 or > 16.5',
          answer: 'Values below 0.5 or above 16.5',
        },
        {
          id: 4,
          question:
            'Identify the range of values that would be flagged as outliers, given:\nQ₁ = 33.5, Q₃ = 45.5.',
          type: 'Easy',
          explaination:
            'IQR = 45.5 - 33.5 = 12 Lower fence: 33.5 - 1.5(12) = 33.5 -18 = 15.5 Upper fence: 45.5 + 1.5(12) = 45.5 + 18 = 63.5 Outliers: values < 15.5 or > 63.5',
          answer: 'Values below 15.5 or above 63.5',
        },
      ],
      histograms: [],
      'cumulative-frequency': [
        {
          id: 1,
          question:
            'The maximum daily temperatures in a particular town, over a period of one year, are summarized in the table:\nUse technology to draw a cumulative frequency graph for this data.',
          type: 'Medium',
          explaination:
            'Cumulative frequencies: up to 10: 43; up to 15: 43+98=141; up to 20:\n141+126=267; up to 25:\n267+67=334; up to 30:\n334+21=355. Plot at upper class boundaries and connect with smooth curve from (5,0).',
          answer: 'Cumulative frequency points:\n(10,43),(15,141),(20,267),(25,334),(30,355)',
        },
      ],
      'box-and-whisker-diagrams': [
        {
          id: 1,
          question:
            'Construct a box-and-whisker diagram for the following data:\n3, 5, 5, 6, 8, 9, 9',
          type: 'Easy',
          explaination:
            'Order data (already ordered). n = 7.\nMedian = 4th value = 6.\nQ₁ = median of lower half {3,5,5} = 5.\nQ₃ = median of upper half {8,9,9} = 9.\nMin = 3, Max = 9.\nDraw box from Q₁ to Q₃ with median line; whiskers to min and max.',
          answer: 'Min = 3, Q₁ = 5, Median = 6, Q₃ = 9, Max = 9',
        },
        {
          id: 2,
          question:
            'Construct a box-and-whisker diagram for the following data:\n11, 13, 15, 15, 16, 18, 19, 21, 24, 24',
          type: 'Easy',
          explaination:
            'n = 10. Median = (16+18)/2 = 17.\nQ₁ = median of {11,13,15,15,16} = 15.\nQ₃ = median of {18,19,21,24,24} = 21.\nMin = 11, Max = 24.\nDraw box and whiskers accordingly.',
          answer: 'Min = 11, Q₁ = 15, Median = 17, Q₃ = 21, Max = 24',
        },
        {
          id: 3,
          question:
            'Construct a box-and-whisker diagram for the following data:\n11, 13, 15, 15, 16, 18, 19, 21, 25, 32',
          type: 'Easy',
          explaination:
            'n = 10. Median = (16+18)/2 = 17.\nQ₁ = 15, Q₃ = 21.\nIQR = 21 - 15 = 6.\nOutlier fence: Q₃ + 1.5 × IQR = 21 + 9 = 30. Check: 32 > 30, so 32 may be an outlier (context-dependent). Draw box and whiskers.',
          answer: 'Min = 11, Q₁ = 15, Median = 17, Q₃ = 21, Max = 32',
        },
        {
          id: 4,
          question:
            'Construct a box-and-whisker diagram for the following data:\n4, 13, 14, 16, 17, 18, 18, 19, 19',
          type: 'Easy',
          explaination:
            'n = 9. Median = 5th value = 17.\nQ₁ = median of {4,13,14,16} = (13+14)/2 = 13.5.\nQ₃ = median of {18,18,19,19} = 18.5.\nIQR = 18.5 - 13.5 = 5. Lower fence = 13.5 - 7.5 = 6. Value 4 < 6, so 4 is an outlier. Draw box and whiskers.',
          answer: 'Min = 4, Q₁ = 14, Median = 17, Q₃ = 18, Max = 19',
        },
        {
          id: 5,
          question:
            'A group of children recorded the number of siblings they have:\n0, 2, 1, 3, 2, 1, 1, 0, 2, 3, 2, 2, 1, 4, 7 Find the median and quartiles of the data.',
          type: 'Medium',
          explaination:
            'Ordered data: 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 7\nn = 15, so the median is the 8th value = 2.\nQ₁ = median of the lower 7 values {0, 0, 1, 1, 1, 1, 2} = 1.\nQ₃ = median of the upper 7 values {2, 2, 2, 3, 3, 4, 7} = 3.',
          answer: 'Median = 2, Q₁ = 1, Q₃ = 3',
        },
        {
          id: 6,
          question:
            'Using the data for number of siblings (median = 2, Q₁ = 1, Q₃ = 3), calculate the interquartile range.',
          type: 'Medium',
          explaination: 'IQR = Q₃ - Q₁ = 3 - 1 = 2.',
          answer: 'IQR = 2',
        },
        {
          id: 7,
          question:
            'Using the five-number summary for number of siblings (Min = 0, Q₁ = 1, Median = 2, Q₃ = 3, Max = 7, outlier at 7), draw the box plot for the data.',
          type: 'Medium',
          explaination:
            'Draw box from Q₁=1 to Q₃=3 with median line at 2.\nWhisker extends left to 0 and right to 4 (last non-outlier value ≤ 6).\nMark outlier (7) with a cross or dot separately.',
          answer:
            'Box plot with outlier: Min = 0, Q₁ = 1, Median = 2, Q₃ = 3, whisker to 4 (last non-outlier), outlier at 7',
        },
      ],
    },
  },
  {
    calculus: {
      title: 'Calculus',
      'chain-rule': [
        {
          id: 1,
          question: 'Find dy/dx for y = (3x + 2)⁴',
          type: 'Easy',
          explaination:
            'Let u = 3x+2, so y = u⁴.\ndu/dx = 3, dy/du = 4u³\ndy/dx = 4(3x+2)³ · 3 = 12(3x+2)³',
          answer: 'dy/dx = 12(3x+2)³',
        },
        {
          id: 2,
          question: 'Find dy/dx for y = (2x - 7)⁵',
          type: 'Easy',
          explaination: 'Let u = 2x-7, y = u⁵.\ndy/dx = 5(2x-7)⁴ · 2 = 10(2x-7)⁴',
          answer: 'dy/dx = 10(2x-7)⁴',
        },
        {
          id: 3,
          question: 'Find dy/dx for y = (x² + 3)^(3/4)',
          type: 'Medium',
          explaination: 'dy/dx = (3/4)(x²+3)^(-1/4) · 2x = (3x/2)(x²+3)^(-1/4)',
          answer: 'dy/dx = (3x/2)(x²+3)^(-1/4)',
        },
        {
          id: 4,
          question: 'Find dy/dx for y = (4 - x²)^(2/3)',
          type: 'Medium',
          explaination: 'dy/dx = (2/3)(4-x²)^(-1/3) · (-2x) = -(4x/3)(4-x²)^(-1/3)',
          answer: 'dy/dx = -(4x/3)(4-x²)^(-1/3)',
        },
        {
          id: 5,
          question: 'Find dy/dx for y = √(2x³ + x)',
          type: 'Medium',
          explaination:
            'Rewrite as (2x³+x)^(1/2).\ndy/dx = (1/2)(2x³+x)^(-1/2) · (6x²+1) = (6x²+1)/(2√(2x³+x))',
          answer: 'dy/dx = (6x² + 1)/(2√(2x³ + x))',
        },
        {
          id: 6,
          question: 'Find dy/dx for y = ³√(5x -x³)',
          type: 'Medium',
          explaination: 'Rewrite as (5x - x³)^(1/3).\ndy/dx = (1/3)(5x-x³)^(-2/3)(5-3x²)',
          answer: 'dy/dx = (5 - 3x²)/(3(5x - x³)^(2/3))',
        },
      ],
      'differentiation-product-rule': [
        {
          id: 1,
          question: 'Find dy/dx for y = x sin x.',
          type: 'Easy',
          explaination:
            "Let u = x, v = sin x.\nu' = 1, v' = cos x.\nProduct rule: dy/dx = v + uv' = sin x + x cos x.",
          answer: 'dy/dx = sin x + x cos x',
        },
        {
          id: 2,
          question: 'Find dy/dx for y = x^(1/2) sin x.',
          type: 'Easy',
          explaination:
            "u = x^(1/2), u' = (1/2)x^(-1/2); v = sin x, v' = cos x.\ndy/dx = (1/2)x^(-1/2) sin x + x^(1/2) cos x.",
          answer: 'dy/dx = (1/2)x^(-1/2) sin x + x^(1/2) cos x',
        },
        {
          id: 3,
          question: 'Find dy/dx for y = x² cos x.',
          type: 'Easy',
          explaination:
            "u = x², u' = 2x; v = cos x, v' = -sin x.\ndy/dx = 2x cos x + x²(-sin x) = 2x cos x - x² sin x.",
          answer: 'dy/dx = 2x cos x - x² sin x',
        },
        {
          id: 4,
          question: 'Find dy/dx for y = x⁻¹ cos x.',
          type: 'Easy',
          explaination:
            "u = x⁻¹, u' = -x⁻²; v = cos x, v' = -sin x.\ndy/dx = -x⁻² cos x + x⁻¹(-sin x) = -x⁻² cos x - x⁻¹ sin x.",
          answer: 'dy/dx = -x⁻² cos x - x⁻¹ sin x',
        },
        {
          id: 5,
          question: 'Find dy/dx for y = x^(-1/2)eˣ.',
          type: 'Easy',
          explaination:
            "u = x^(-1/2), u' = -(1/2)x^(-3/2); v = eˣ, v' = eˣ.\ndy/dx = -(1/2)x^(-3/2)eˣ + x^(-1/2)eˣ.",
          answer: 'dy/dx = -(1/2)x^(-3/2)eˣ + x^(-1/2)eˣ',
        },
        {
          id: 6,
          question: 'Find dy/dx for y = x³eˣ.',
          type: 'Easy',
          explaination: "u = x³, u' = 3x²; v = eˣ, v' = eˣ.\ndy/dx = 3x² eˣ + x³ eˣ = x²eˣ(3+x).",
          answer: 'dy/dx = 3x²eˣ + x³eˣ = x²eˣ(3 + x)',
        },
        {
          id: 7,
          question: 'Find dy/dx for y = x^(2/3) ln x.',
          type: 'Easy',
          explaination:
            "u = x^(2/3), u' = (2/3)x^(-1/3); v = ln x, v' = 1/x.\ndy/dx = (2/3)x^(-1/3) ln x + x^(2/3) · 1/x = (2/3)x^(-1/3) ln x + x^(-1/3).",
          answer: 'dy/dx = (2/3)x^(-1/3) ln x + x^(-1/3)',
        },
        {
          id: 8,
          question: 'Find dy/dx for y = x⁴ ln x.',
          type: 'Easy',
          explaination:
            "u = x⁴, u' = 4x³; v = ln x, v' = 1/x.\ndy/dx = 4x³ ln x + x⁴ · 1/x = 4x³ ln x + x³ = x³(4 ln x + 1).",
          answer: 'dy/dx = 4x³ ln x + x³ = x³(4 ln x + 1)',
        },
        {
          id: 9,
          question: "Given f(x) = xe²ˣ, find f'(3).",
          type: 'Easy',
          explaination:
            "u=x, u'=1; v=e²ˣ, v'=2e²ˣ.\nf'(x) = e²ˣ + 2xe²ˣ = e²ˣ(1+2x).\nf'(3) = e⁶(1+6) = 7e⁶.",
          answer: "f'(3) = 7e⁶",
        },
        {
          id: 10,
          question: 'Differentiate xeˣ ln x.',
          type: 'Medium',
          explaination:
            "Let f = xeˣ and g = ln x.\nFirst differentiate xeˣ: (xeˣ)' = eˣ + xeˣ = eˣ(1+x).\nNow apply product rule to xeˣ · ln x:\nd/dx = (xeˣ)'ln x + xeˣ · 1/x = eˣ(1+x) ln x + eˣ.\n= eˣ[(1+x) ln x + 1] = eˣ(ln x + x ln x + 1).",
          answer: '(d/dx)(xeˣ ln x) = eˣ ln x + xeˣ ln x + eˣ = eˣ(ln x + x ln x + 1)',
        },
      ],
      'differentiation-quotient-rule': [
        {
          id: 1,
          question: 'Find dy/dx for y = x²/(x+2).',
          type: 'Easy',
          explaination:
            "u = x², u' = 2x; v = x+2, v' = 1.\nQuotient rule: dy/dx = (2x(x+2)-x² · 1)/((x+2)²) = (2x²+4x-x²)/((x+2)²) = (x²+4x)/((x+2)²).",
          answer: 'dy/dx = (x²+4x)/((x+2)²) = (x(x+4))/((x+2)²)',
        },
        {
          id: 2,
          question: 'Find dy/dx for y = 3x/(x-4).',
          type: 'Easy',
          explaination:
            "u = 3x, u'=3; v=x-4, v'=1.\ndy/dx = (3(x-4)-3x · 1)/((x-4)²) = (3x-12-3x)/((x-4)²) = -12/((x-4)²).",
          answer: 'dy/dx = -12/((x-4)²)',
        },
        {
          id: 3,
          question: 'Find dy/dx for y = (x-2)/√(x+1).',
          type: 'Medium',
          explaination:
            "u = x-2, u'=1; v=(x+1)^(1/2), v'=(1/2)(x+1)^(-1/2).\ndy/dx = ((x+1)^(1/2) -(x-2) · 1/2(x+1)^(-1/2))/(x+1).\nMultiply numerator and denominator by (x+1)^(1/2):\n= ((x+1) - 1/2(x-2))/((x+1)^(3/2)) = (x+1-x/2+1)/((x+1)^(3/2)) = ((x+4)/2)/((x+1)^(3/2)) = (x+4)/(2(x+1)^(3/2)).",
          answer: 'dy/dx = (x+4)/(2(x+1)^(3/2))',
        },
        {
          id: 4,
          question: 'Find dy/dx for y = (4-x)/((x-3)²).',
          type: 'Medium',
          explaination:
            "u = 4-x, u' = -1; v=(x-3)², v'=2(x-3).\ndy/dx = (-1 · (x-3)² - (4-x) · 2(x-3))/((x-3)⁴).\nFactor (x-3): = (-(x-3) - 2(4-x))/((x-3)³) = (-x+3-8+2x)/((x-3)³) = (x-5)/((x-3)³). (Accept equivalent simplified forms.)",
          answer: 'dy/dx = (-(x-3) - 2(4-x))/((x-3)³) = (x-11)/((x-3)³)',
        },
        {
          id: 5,
          question: 'Find dy/dx for y = eˣ/((3x+1)²).',
          type: 'Medium',
          explaination:
            "u = eˣ, u'=eˣ; v=(3x+1)², v'=6(3x+1).\ndy/dx = (eˣ(3x+1)² -eˣ · 6(3x+1))/((3x+1)⁴) = (eˣ[(3x+1)-6])/((3x+1)³) = (eˣ(3x-5))/((3x+1)³).",
          answer: 'dy/dx = (eˣ(3x+1-6))/((3x+1)³) = (eˣ(3x-5))/((3x+1)³)',
        },
        {
          id: 6,
          question: 'Find dy/dx for y = eˣ/((2x-1)³).',
          type: 'Medium',
          explaination:
            "u=eˣ, u'=eˣ; v=(2x-1)³, v'=6(2x-1)².\ndy/dx = (eˣ(2x-1)³ - 6eˣ(2x-1)²)/((2x-1)⁶) = (eˣ[(2x-1)-6])/((2x-1)⁴) = (eˣ(2x-7))/((2x-1)⁴). (Accept equivalent simplified forms.)",
          answer: 'dy/dx = (eˣ(2x-4))/((2x-1)⁴) = (2eˣ(x-2))/((2x-1)⁴)',
        },
        {
          id: 7,
          question:
            'Find and simplify an expression for the derivative of f(x) = x/√(k + x²), where k is a positive constant.',
          type: 'Hard',
          explaination:
            "u = x, u'=1; v=(k+x²)^(1/2), v'=x/((k+x²)^(1/2)).\nQuotient rule:\nf'(x) = ((k+x²)^(1/2) -x · x/((k+x²)^(1/2)))/(k+x²).\nMultiply top and bottom by (k+x²)^(1/2):\n= ((k+x²) - x²)/((k+x²)^(3/2)) = k/((k+x²)^(3/2)).",
          answer: "f'(x) = k/((k + x²)^(3/2))",
        },
        {
          id: 8,
          question: "The function f is defined by f(x) = (ln x)/x for x > 0.\nFind f'(x).",
          type: 'Medium',
          explaination: "Using the quotient rule:\nf'(x) = (1/x · x - ln x · 1)/x² = (1 - ln x)/x²",
          answer: "f'(x) = (1 -ln x)/x²",
        },
      ],
      'local-maximum-and-minimum': [
        {
          id: 1,
          question:
            'Find any local maximum/minimum points of the following function. In each case determine whether each point is a maximum or minimum.\nf(x) = x³ - 3x² - 9x + 17',
          type: 'Easy',
          explaination:
            "f'(x) = 3x² - 6x - 9 = 3(x-3)(x+1) Set f'(x) = 0: x = 3 or x = -1\nf''(x) = 6x - 6\nf''(-1) = -12 < 0 → local max at x = -1, f(-1) = 22\nf''(3) = 12 > 0 → local min at x = 3, f(3) = -10",
          answer: 'Local max at (-1, 22); Local min at (3, -10)',
        },
        {
          id: 2,
          question:
            'Find any local maximum/minimum points of the following function. In each case determine whether each point is a maximum or minimum.\nf(x) = 2x³ - 9x² + 12x + 5',
          type: 'Easy',
          explaination:
            "f'(x) = 6x² - 18x + 12 = 6(x-1)(x-2) Set f'(x) = 0: x = 1 or x = 2\nf''(x) = 12x - 18\nf''(1) = -6 < 0 → local max at (1, 10)\nf''(2) = 6 > 0 → local min at (2, 9)",
          answer: 'Local max at (1, 10); Local min at (2, 9)',
        },
        {
          id: 3,
          question:
            'Find any local maximum/minimum points of the following function. In each case determine whether each point is a maximum or minimum.\nf(x) = 2x^(1/2) - 3x + 1',
          type: 'Medium',
          explaination:
            "f'(x) = x^(-1/2) - 3 = 0 ⇒ x = 1/9\nf''(x) = -(1/2)x^(-3/2) < 0 → local max f(1/9) = 2 · 1/3 - 3 · 1/9 + 1 = 4/3",
          answer: 'Local max at (1/9, 4/3)',
        },
        {
          id: 4,
          question:
            'Find any local maximum/minimum points of the following function. In each case determine whether each point is a maximum or minimum.\nf(x) = x^(-1/2) + 4x - 2',
          type: 'Medium',
          explaination:
            "f'(x) = -(1/2)x^(-3/2) + 4 = 0 ⇒ x^(3/2) = 1/8 ⇒ x = 1/4\nf''(x) = (3/4)x^(-5/2) > 0 → local min f(1/4) = 2 + 1 - 2 = 1",
          answer: 'Local min at (1/4, 1)',
        },
        {
          id: 5,
          question:
            'Find any local maximum/minimum points of the following function. In each case determine whether each point is a maximum or minimum.\nf(x) = sin x - x/2, 0 < x < 2π',
          type: 'Medium',
          explaination:
            "f'(x) = cos x - 1/2 = 0 ⇒ cos x = 1/2 ⇒ x = π/3, 5π/3\nf''(x) = -sin x\nf''(π/3) = -√3/2 < 0 → local max f''(5π/3) = √3/2 > 0 → local min",
          answer: 'Local max at (π/3, √3/2 - π/6); Local min at (5π/3, -√3/2- 5π/6)',
        },
        {
          id: 6,
          question:
            'Find any local maximum/minimum points of the following function. In each case determine whether each point is a maximum or minimum.\nf(x) = cos x + x/2, 0 < x < 2π',
          type: 'Medium',
          explaination:
            "f'(x) = -sin x + 1/2 = 0 ⇒ sin x = 1/2 ⇒ x = π/6, 5π/6\nf''(x) = -cos x\nf''(π/6) = -√3/2 < 0 → local max f''(5π/6) = √3/2 > 0 → local min",
          answer: 'Local max at (π/6, √3/2 + π/12); Local min at (5π/6, -√3/2 + 5π/12)',
        },
        {
          id: 7,
          question:
            'Find any local maximum/minimum points of the following function. In each case determine whether each point is a maximum or minimum.\nf(x) = eˣ - 5x',
          type: 'Easy',
          explaination:
            "f'(x) = eˣ - 5 = 0 ⇒ eˣ = 5 ⇒ x = ln 5\nf''(x) = eˣ > 0 for all x → local min f(ln 5) = 5 - 5 ln 5",
          answer: 'Local min at (ln 5, 5 - 5 ln 5)',
        },
        {
          id: 8,
          question:
            'Find any local maximum/minimum points of the following function. In each case determine whether each point is a maximum or minimum.\nf(x) = x/2 - eˣ',
          type: 'Easy',
          explaination:
            "f'(x) = 1/2 - eˣ = 0 ⇒ eˣ = 1/2 ⇒ x = -ln 2\nf''(x) = -eˣ < 0 → local max f(-ln 2) = -(ln 2)/2 - 1/2",
          answer: 'Local max at (-ln 2, -(ln 2)/2 -1/2)',
        },
        {
          id: 9,
          question:
            'Find any local maximum/minimum points of the following function. In each case determine whether each point is a maximum or minimum.\nf(x) = 3 ln x - 2x',
          type: 'Easy',
          explaination:
            "f'(x) = 3/x - 2 = 0 ⇒ x = 3/2\nf''(x) = -3/x² < 0 → local max f(3/2) = 3 ln(3/2) - 3",
          answer: 'Local max at (3/2, 3 ln(3/2) - 3)',
        },
        {
          id: 10,
          question:
            'Find any local maximum/minimum points of the following function. In each case determine whether each point is a maximum or minimum.\nf(x) = x^(1/2) - ln x',
          type: 'Medium',
          explaination:
            "f'(x) = (1/2)x^(-1/2) - 1/x = 0 ⇒ 1/2√x = 1/x ⇒ √x = 2 ⇒ x = 4\nf''(x) = -(1/4)x^(-3/2) + 1/x²\nf''(4) = 1/32 > 0 → local min f(4) = 2 - ln 4 = 2 - 2 ln 2",
          answer: 'Local min at (4, 2 - 2 ln 2)',
        },
      ],
      'points-of-inflection': [
        {
          id: 1,
          question:
            'Find the value(s) of x at which the function has the given number of points of inflection. For each point of inflection, state whether it is stationary or non-stationary.\nf(x) = x³ - 6x² - 4x + 3 (1point of inflection)',
          type: 'Easy',
          explaination:
            "Step 1: f'(x) = 3x² - 12x - 4\nStep 2: f''(x) = 6x - 12 = 0 ⇒ x = 2\nStep 3: Check sign change of f'': for x<2, f''<0; for x>2, f''>0 ✓\nStep 4: f(2) = 8 - 24 - 8 + 3 = -21, so POI is (2, -21)\nStep 5: f'(2) = 12 - 24 - 4 = -16 ≠ 0, so non-stationary",
          answer: 'x = 2, (2, -21), non-stationary',
        },
        {
          id: 2,
          question:
            'Find the value(s) of x at which the function has the given number of points of inflection. For each point of inflection, state whether it is stationary or non-stationary.\nf(x) = x³ - 12x² + x + 5 (1point of inflection)',
          type: 'Easy',
          explaination:
            "Step 1: f''(x) = 6x - 24 = 0 ⇒ x = 4\nStep 2: Sign change confirmed ✓\nStep 3: f(4) = 64 - 192 + 4 + 5 = -119\nStep 4: f'(4) = 3(16) - 24(4) + 1 = -47 ≠ 0, non-stationary",
          answer: 'x = 4, (4, -119), non-stationary',
        },
        {
          id: 3,
          question:
            'Find the value(s) of x at which the function has the given number of points of inflection. For each point of inflection, state whether it is stationary or non-stationary.\nf(x) = x⁴ - 6x³ (2 points of inflection)',
          type: 'Medium',
          explaination:
            "Step 1: f'(x) = 4x³ - 18x²\nStep 2: f''(x) = 12x² - 36x = 12x(x-3) = 0 ⇒ x = 0 or x = 3\nStep 3: Check sign changes confirmed for both ✓\nStep 4: f(0)=0, f(3)=81-162=-81\nStep 5: f'(0)=0 → stationary; f'(3)=108-162=-54 ≠ 0 → non-stationary",
          answer: 'x = 0 (0,0) stationary and x = 3 (3, -81) non-stationary',
        },
        {
          id: 4,
          question:
            'Find the value(s) of x at which the function has the given number of points of inflection. For each point of inflection, state whether it is stationary or non-stationary.\nf(x) = x⁴ - 4x³ + 16x - 16 (2 points of inflection)',
          type: 'Medium',
          explaination:
            "Step 1: f''(x) = 12x² - 24x = 12x(x-2) = 0 ⇒ x=0 or x=2\nStep 2: Sign changes confirmed ✓\nStep 3: f(0)=-16, f(2)=16-32+32-16=0\nStep 4: f'(0)=16 ≠ 0 → non-stationary; f'(2)=32-48+16=0 → stationary",
          answer: 'x=0 (0,-16) non-stationary, x=2 (2,0)stationary',
        },
        {
          id: 5,
          question:
            'Find the value(s) of x at which the function has the given number of points of inflection. For each point of inflection, state whether it is stationary or non-stationary.\nf(x) = sin x - x, x ∈ [0, 2π] (3 points of inflection)',
          type: 'Medium',
          explaination:
            "Step 1: f'(x)=cos x - 1, f''(x)=-sin x\nStep 2: f''(x)=0 ⇒ sin x = 0 ⇒ x=0,π,2π in [0,2π]\nStep 3: Sign changes of -sin x: changes at x=0,π,2π\nStep 4: f'(0)=0, f'(π)=-2, f'(2π) =0 Boundary points x=0 and x=2π: f'=0; interior point x=π: non-stationary",
          answer:
            "x = 0, π, 2π; all non-stationary (f'(x) = cos x- 1 ≤ 0, equals zero only at endpoints)",
        },
        {
          id: 6,
          question:
            'Find the value(s) of x at which the function has the given number of points of inflection. For each point of inflection, state whether it is stationary or non-stationary.\nf(x) = cos x - x, x ∈ [0, 2π] (2 points of inflection)',
          type: 'Medium',
          explaination:
            "Step 1: f'(x)=-sin x - 1, f''(x)=-cos x\nStep 2: f''(x)=0 ⇒ cos x=0 ⇒ x=π/2,3π/2\nStep 3: Sign changes confirmed ✓\nStep 4: f'(π/2)=-1 ≠ 0, f'(3π/2)=1 ≠ 0 → both non-stationary",
          answer: 'x = π/2 and x = 3π/2, both non-stationary',
        },
        {
          id: 7,
          question:
            'Find the value(s) of x at which the function has the given number of points of inflection. For each point of inflection, state whether it is stationary or non-stationary.\nf(x) = 4eˣ - x² (1 point of inflection)',
          type: 'Medium',
          explaination:
            "Step 1: f''(x)=4eˣ - 2 = 0 ⇒ eˣ = 1/2 ⇒ x = ln(1/2) = -ln 2\nStep 2: Sign change confirmed ✓\nStep 3: f(-ln 2)=4 · 1/2-(ln 2)²=2-(ln 2)²\nStep 4: f'(-ln 2)=4 · 1/2-2(-ln 2)=2+2 ln 2 ≠ 0 → non-stationary",
          answer: 'x = -ln 2, (-ln 2, 2-(ln 2)²), non-stationary',
        },
        {
          id: 8,
          question:
            'Find the value(s) of x at which the function has the given number of points of inflection. For each point of inflection, state whether it is stationary or non-stationary.\nf(x) = eˣ - (1/2)x² (1point of inflection)',
          type: 'Medium',
          explaination:
            "Step 1: f''(x)=eˣ - 1 = 0 ⇒ x=0\nStep 2: Sign change confirmed ✓\nStep 3: f(0)=1-0=1\nStep 4: f'(0)=1-0=1 ≠ 0 → non-stationary",
          answer: '(0, 1), non-stationary',
        },
        {
          id: 9,
          question:
            'Find the coordinates of the point of inflection on the curve y = x³ + 9x² + x - 1.',
          type: 'Easy',
          explaination:
            "Step 1: dy/dx=3x²+18x+1, d²y/dx²=6x+18\nStep 2: 6x+18=0 ⇒ x=-3\nStep 3: Sign change of y'' confirmed ✓\nStep 4: y(-3)=-27+81-3-1=50 POI: (-3, 50)",
          answer: '(-3, 50)',
        },
        {
          id: 10,
          question: 'Find the point of inflection on the curve y = x⁵ - 80x².',
          type: 'Medium',
          explaination:
            'Step 1: dy/dx=5x⁴-160x, d²y/dx²=20x³-160\nStep 2: 20(x³-8)=0 ⇒ x=2\nStep 3: Sign change confirmed ✓\nStep 4: y(2)=32-80(4)=32-320=-288',
          answer: '(2, -288)',
        },
        {
          id: 11,
          question:
            'The curve y = x³ + bx² + c has a point of inflection at (1, 3). Find the values of b and c.',
          type: 'Medium',
          explaination:
            'Step 1: d²y/dx² =6x+2b=0 at x=1 ⇒ 6+2b=0 ⇒ b=-3\nStep 2: Substitute (1,3) into curve: 1+b+c=3 ⇒ 1-3+c=3 ⇒ c=5',
          answer: 'b = -3, c = 5',
        },
        {
          id: 12,
          question:
            'The curve y = 2x³ - ax² + b has a point of inflection at (1, -7). Find the values of a and b.',
          type: 'Medium',
          explaination:
            'Step 1: d²y/dx²=12x-2a=0 at x=1 ⇒ 12-2a=0 ⇒ a=6\nStep 2: Substitute (1,-7): 2-a+b=-7 ⇒ 2-6+b=-7 ⇒ b=-3',
          answer: 'a = 6, b = -3',
        },
        {
          id: 13,
          question:
            'The curve y = x³ + ax² + bx + c has a stationary point of inflection at (1, 3). Find the values of a, b and c.',
          type: 'Hard',
          explaination:
            "Step 1 (POI): y''=6x+2a=0 at x=1 ⇒ a=-3\nStep 2 (Stationary):\ny'=3x²+2ax+b=0 at x=1\n3+2(-3)+b=0 ⇒ b=3\nStep 3 (Point on curve): 1+a+b+c=3 ⇒ 1-3+3+c=3 ⇒ c=2",
          answer: 'a = -3, b = 3, c = 2',
        },
        {
          id: 14,
          question: 'Find the point of inflection of the function f(x) = 8 ln x + x², x > 0.',
          type: 'Medium',
          explaination:
            "Step 1: f'(x)=8/x+2x, f''(x)=-8/x²+2\nStep 2: f''(x)=0 ⇒ x²=4 ⇒ x=2 (since x>0)\nStep 3: Sign change confirmed ✓\nStep 4: f(2)=8 ln 2+4",
          answer: '(2, 8 ln 2 + 4)',
        },
        {
          id: 15,
          question:
            'For the function f(x) = 8 ln x + x², x>0, with point of inflection found in part (a):\nDetermine whether the point of inflection is stationary or non-stationary.',
          type: 'Easy',
          explaination:
            "f'(2)=8/2+2(2)=4+4=8 ≠ 0 Since f'(2) ≠ 0, the point of inflection is non-stationary.",
          answer: 'Non-stationary',
        },
        {
          id: 16,
          question:
            'For the graph y = 2 ln x + x², find the coordinates of the point of inflection.',
          type: 'Medium',
          explaination:
            "d²y/dx²=-2/x²+2=0 ⇒ x²=1 ⇒ x=1 Sign change of y'' confirmed ✓\ny(1)=2 ln 1+1=0+1=1 POI: (1, 1)",
          answer: '(1, 1)',
        },
        {
          id: 17,
          question:
            'Find the exact coordinates of the points of inflection on the curve y = e^(-x²), fully justifying your answer.',
          type: 'Hard',
          explaination:
            "Step 1: y'=-2x e^(-x²)\nStep 2 (Product/Chain rule): y''=-2e^(-x²)+(-2x)(-2x)e^(-x²)=e^(-x²)(4x²-2)\nStep 3: y''=0: Since e^(-x²) >0 always, need 4x²-2=0 ⇒ x= ± 1/√2\nStep 4: Sign change: for |x|<1/√2, y''<0; for |x|>1/√2, y''>0 ✓\nStep 5: y=e^(-1/2)=1/√e at both points.\nPOIs: (± 1/√2, 1/√e)",
          answer: '(± 1/√2, e^(-1/2))',
        },
        {
          id: 18,
          question: 'Find the point of inflection on the curve y = x² ln x.',
          type: 'Hard',
          explaination:
            "Step 1: y'=2x ln x + x² · 1/x=2x ln x+x\nStep 2: y''=2 ln x+2+1=2 ln x+3\nStep 3: y''=0 ⇒ ln x=-3/2 ⇒ x=e^(-3/2)\nStep 4: Sign change confirmed ✓\nStep 5: y=(e^(-3/2))² · ln(e^(-3/2))=e⁻³ · (-3/2) =-(3/2)e⁻³",
          answer: '(e^(-3/2), -(3/2)e⁻³)',
        },
        {
          id: 19,
          question:
            'Find the coordinates of any inflection points on the curve y = 3x⁵ - 10x⁴ + 10x³ + 2.',
          type: 'Hard',
          explaination:
            "Step 1: y'=15x⁴-40x³+30x²\nStep 2: y''=60x³-120x²+60x=60x(x²-2x+1)=60x(x-1)²\nStep 3: y''=0 ⇒ x=0or x=1\nStep 4: Check sign changes:\n- At x=0: 60x changes sign, (x-1)² ≥ 0, so y'' changes sign ✓ → POI at (0,2)\n- At x=1: (x-1)² ≥ 0, no sign change ✗ → not a POI Only POI: (0, 2)",
          answer: 'Only (0, 2) is a point of inflection.',
        },
      ],
    },
  },
  {
    integration: {
      title: 'Integration',
      'integration-of-trig-exp-ln-to-find-y': [
        {
          id: 1,
          question: 'Given that dy/dx = 3 cos x, find an expression for y.',
          type: 'Easy',
          explaination: '∫3 cos x dx = 3 sin x + C',
          answer: 'y = 3 sin x + C',
        },
        {
          id: 2,
          question: 'Given that dy/dx = -cos x, find an expression for y.',
          type: 'Easy',
          explaination: '∫-cos x dx = -sin x + C',
          answer: 'y = -sin x + C',
        },
        {
          id: 3,
          question: 'Given that dy/dx = -2 sin x, find an expression for y.',
          type: 'Easy',
          explaination: '∫-2 sin x dx = 2 cos x + C',
          answer: 'y = 2 cos x + C',
        },
        {
          id: 4,
          question: 'Given that dy/dx = (1/2)sin x, find an expression for y.',
          type: 'Easy',
          explaination: '∫(1/2)sin x dx = -(1/2)cos x + C',
          answer: 'y = -(1/2)cos x + C',
        },
        {
          id: 5,
          question: 'Given that dy/dx = 5eˣ, find an expression for y.',
          type: 'Easy',
          explaination: '∫5eˣ dx = 5eˣ + C',
          answer: 'y = 5eˣ + C',
        },
        {
          id: 6,
          question: 'Given that dy/dx = -(4/3)eˣ, find an expression for y.',
          type: 'Easy',
          explaination: '∫-(4/3)eˣ dx = -(4/3)eˣ + C',
          answer: 'y = -(4/3)eˣ + C',
        },
        {
          id: 7,
          question: 'Given that dy/dx = 2/x, find an expression for y.',
          type: 'Easy',
          explaination: '∫2/x dx = 2 ln|x| + C',
          answer: 'y = 2 ln|x| + C',
        },
        {
          id: 8,
          question: 'Given that dy/dx = 1/2x, find an expression for y.',
          type: 'Easy',
          explaination: '∫1/2x dx = (1/2)ln|x| + C',
          answer: 'y = (1/2)ln|x| + C',
        },
      ],
      'integration-by-substitution-reverse-chain-rule': [
        {
          id: 1,
          question: 'Find ∫2x(x²+4)³ dx',
          type: 'Medium',
          explaination: 'Let u=x²+4, du=2x dx. ∫u³ du = u⁴/4+C = ((x²+4)⁴)/4+C',
          answer: '((x²+4)⁴)/4 + C',
        },
        {
          id: 2,
          question: 'Find ∫4x³(x⁴-2)^(3/2) dx',
          type: 'Medium',
          explaination:
            'Let u=x⁴-2, du=4x³ dx. ∫u^(3/2) du = (u^(5/2))/(5/2)+C = (2/5)(x⁴-2)^(5/2)+C',
          answer: '(2/5)(x⁴-2)^(5/2) + C',
        },
        {
          id: 3,
          question: 'Find ∫x²√(x³+4) dx',
          type: 'Medium',
          explaination:
            'Let u=x³+4, du=3x² dx ⇒ x² dx=du/3.\n1/3∫u^(1/2) du=1/3 · (2/3)u^(3/2)+C=(2/9)(x³+4)^(3/2)+C',
          answer: '(2/9)(x³+4)^(3/2) + C',
        },
        {
          id: 4,
          question: 'Find ∫x³√(1-x²) dx',
          type: 'Medium',
          explaination:
            'Let u=1-x², du=-2x dx. -1/2∫u^(1/3) du=-1/2 · (3/4)u^(4/3)+C=-(3/8)(1-x²)^(4/3)+C',
          answer: '-(3/8)(1-x²)^(4/3) + C',
        },
        {
          id: 5,
          question: 'Find ∫2x(x²+1)⁵ dx',
          type: 'Medium',
          explaination: 'Let u=x²+1, du=2x dx. ∫u⁵ du=u⁶/6+C=((x²+1)⁶)/6+C',
          answer: '((x²+1)⁶)/6 + C',
        },
      ],
      'differential-equations-with-initial-conditions': [
        {
          id: 1,
          question:
            'Given that dy/dx = 3√x and that y = 12 when x = 9, find an expression for y in terms of x.',
          type: 'Medium',
          explaination:
            'y=∫3x^(1/2) dx = 2x^(3/2)+C.\nSub x=9, y=12: 12=2(27)+C ⇒ C=-42. y=2x^(3/2)-42',
          answer: 'y = 2x^(3/2) - 42',
        },
        {
          id: 2,
          question:
            "A function f satisfies f'(x) = 2 cos x - 3 sin x and f(0) = 5. Find an expression for f(x).",
          type: 'Medium',
          explaination:
            'f(x)=∫(2 cos x-3 sin x) dx = 2 sin x + 3 cos x + C. f(0)=5: 0+3+C=5 ⇒ C=2.',
          answer: 'f(x) = 2 sin x + 3 cos x + 2',
        },
        {
          id: 3,
          question:
            'Given that dy/dx = 2eˣ - 5/x, and that y = 0 when x = 1, find an expression for y in terms of x.',
          type: 'Medium',
          explaination: 'y=2eˣ-5 ln|x|+C. Sub x=1, y=0: 0=2e-0+C ⇒ C=-2e. y=2eˣ-5 ln x - 2e',
          answer: 'y = 2eˣ -5 ln x - 2e',
        },
        {
          id: 4,
          question:
            'Given that dV/dt = t - (1/2)sin t, and that V = 2 when t = 0, find an expression for V in terms of t.',
          type: 'Medium',
          explaination: 'V=t²/2+(1/2)cos t+C.\nt=0, V=2: 0+1/2+C=2 ⇒ C=3/2.',
          answer: 'V = t²/2 + (1/2)cos t + 3/2',
        },
        {
          id: 5,
          question:
            'It is given that x(0)=5 and that dx/dt = 5-2eᵗ. Find an expression for x in terms of t.',
          type: 'Medium',
          explaination: 'x=5t-2eᵗ+C. t=0, x=5: 0-2+C=5 ⇒ C=7. x=5t-2eᵗ+7',
          answer: 'x = 5t - 2eᵗ + 7',
        },
        {
          id: 6,
          question:
            "Given that f'(x) = 1/((2x+3)²) and that the graph of y = f(x) passes through the point (-1, 1), find an expression for f(x).",
          type: 'Hard',
          explaination:
            'f(x)=∫(2x+3)⁻² dx=((2x+3)⁻¹)/(-1 × 2)+C=-1/(2(2x+3)) +C. Sub (-1,1): 1=-1/2+C ⇒ C=3/2.',
          answer: 'f(x) = -1/(2(2x+3)) + 3/2',
        },
      ],
      'definite-integrals-power-rule': [
        {
          id: 1,
          question: 'Evaluate ∫[0 to 4] x^(1/2) dx',
          type: 'Easy',
          explaination: 'Integrate: [(2x^(3/2))/3]₀⁴ = (2(8))/3 - 0 = 16/3',
          answer: '16/3',
        },
        {
          id: 2,
          question: 'Evaluate ∫[0 to 8] x^(1/3) dx',
          type: 'Easy',
          explaination: 'Integrate: [(3x^(4/3))/4]₀⁸ = (3(16))/4 = 12',
          answer: '12',
        },
        {
          id: 3,
          question: 'Evaluate ∫[-2 to 1] x⁴ dx',
          type: 'Easy',
          explaination: '[x⁵/5]₋₂¹ = 1/5 - -32/5 = 33/5',
          answer: '33/5',
        },
        {
          id: 4,
          question: 'Evaluate ∫[-1 to 0] x⁵ dx',
          type: 'Easy',
          explaination: '[x⁶/6]₋₁⁰ = 0- 1/6 = -1/6',
          answer: '-1/6',
        },
        {
          id: 5,
          question: 'Evaluate ∫[-3 to -1] x² dx',
          type: 'Easy',
          explaination: '[x³/3]₋₃⁻¹ = -1/3 - -27/3 = 26/3',
          answer: '26/3',
        },
        {
          id: 6,
          question: 'Evaluate ∫[-4 to -2] x³ dx',
          type: 'Medium',
          explaination: '[x⁴/4]₋₄⁻² = 4 - 64 = -60',
          answer: '-60',
        },
      ],
      'area-between-two-curves': [],
    },
  },
  {
    'sequences-series': {
      title: 'Sequences & Series',
      'nth-term-of-a-geometric-sequence': [
        {
          id: 1,
          question: 'Given u₁ = 5 and r = 4, find u₁₂.',
          type: 'Easy',
          explaination: 'Use uₙ = u₁ · rⁿ⁻¹.\nu₁₂ = 5 × 4¹¹ = 5 × 4194304 = 20 971 520',
          answer: 'u₁₂ = 20971520',
        },
        {
          id: 2,
          question: 'Given u₁ = 2 and r = 3, find u₇.',
          type: 'Easy',
          explaination: 'u₇ = 2 × 3⁶ = 2 × 729 = 1458',
          answer: 'u₇ = 1458',
        },
        {
          id: 3,
          question: 'Given u₁ = 5 and r = -5, find u₆.',
          type: 'Easy',
          explaination: 'u₆ = 5 × (-5)⁵ = 5 × (-3125) = -15625',
          answer: 'u₆ = -15625',
        },
        {
          id: 4,
          question: 'Given u₁ = 11 and r = -2, find u₁₈.',
          type: 'Easy',
          explaination: 'u₁₈ = 11 × (-2)¹⁷ = 11 × (-131072) = -1 441 792',
          answer: 'u₁₈ = -1 441 792',
        },
        {
          id: 5,
          question: 'Given u₁ = 32 and r = -1/2, find u₁₁.',
          type: 'Easy',
          explaination: 'u₁₁ = 32 × (-1/2)¹⁰ = 32 × 1/1024 = 32/1024 = 1/32',
          answer: 'u₁₁ = 1/32',
        },
        {
          id: 6,
          question: 'Given u₁ = 54 and r = -1/3, find u₁₀.',
          type: 'Easy',
          explaination: 'u₁₀ = 54 × (-1/3)⁹ = 54 × (-1/19683) = -54/19683 = -2/729',
          answer: 'u₁₀ = -2/729',
        },
        {
          id: 7,
          question:
            'Find an expression for the nth term of the geometric sequence xy², y³, x⁻¹y⁴, …',
          type: 'Hard',
          explaination:
            'Common ratio r = y³/xy² = y/x.\nuₙ = xy² · (y/x)ⁿ⁻¹ = x · y² · (yⁿ⁻¹)/(xⁿ⁻¹) = x¹⁻⁽ⁿ⁻¹⁾ y²⁺⁽ⁿ⁻¹⁾ = x²⁻ⁿ yⁿ⁺¹',
          answer: 'uₙ = x²⁻ⁿyⁿ⁺¹',
        },
      ],
      'number-of-terms-in-a-geometric-sequence': [
        {
          id: 1,
          question:
            'A geometric sequence has u₁ = 3, r = 5, and uₙ = 9375. Find the number of terms.',
          type: 'Medium',
          explaination: '3 × 5ⁿ⁻¹ = 9375 ⇒ 5ⁿ⁻¹ = 3125 = 5⁵ ⇒ n-1 = 5 ⇒ n = 6',
          answer: 'n = 6',
        },
        {
          id: 2,
          question:
            'A geometric sequence has u₁ = 17, r = 2, and uₙ = 2176. Find the number of terms.',
          type: 'Medium',
          explaination: '17 × 2ⁿ⁻¹ = 2176 ⇒ 2ⁿ⁻¹ = 128 = 2⁷ ⇒ n = 8',
          answer: 'n = 8',
        },
        {
          id: 3,
          question: 'Find the number of terms in the geometric sequence 3, 6, 12, …, 12 288.',
          type: 'Medium',
          explaination: 'r = 2. 3 × 2ⁿ⁻¹ = 12288 ⇒ 2ⁿ⁻¹ = 4096 = 2¹² ⇒ n = 13',
          answer: 'n = 13',
        },
        {
          id: 4,
          question: 'Find the number of terms in the geometric sequence 5, 15, 45, …, 10 935.',
          type: 'Medium',
          explaination: 'r = 3. 5 × 3ⁿ⁻¹ = 10935 ⇒ 3ⁿ⁻¹ = 2187 = 3⁷ ⇒ n = 8',
          answer: 'n = 8',
        },
        {
          id: 5,
          question:
            'During a drought, the volume of water in a reservoir decreases by 8% every day. At the beginning of day one of the drought it contains 5000 m³.\nHow many days does it take to use up 3000 m³ of water?',
          type: 'Hard',
          explaination:
            'Water used = 5000 - uₙ ≥ 3000 ⇒ uₙ ≤ 2000. 5000 × 0.92ⁿ⁻¹ ≤ 2000 ⇒ 0.92ⁿ⁻¹ ≤ 0.4 ⇒ (n-1) ln(0.92) ≤ ln(0.4) ⇒ n-1 ≥ (ln 0.4)/(ln 0.92) ≈ 11.07 ⇒ n ≥ 12. Check: day 12.',
          answer: 'n ≈ 11 days',
        },
      ],
      'sigma-notation-sum-of-geometric-series': [
        {
          id: 1,
          question: 'Evaluate Σ[r=1 to 5] 3ʳ.',
          type: 'Easy',
          explaination: 'u₁=3, r=3, n=5. S₅ = (3(3⁵-1))/2 = (3 × 242)/2 = 363',
          answer: '363',
        },
        {
          id: 2,
          question: 'Evaluate Σ[r=1 to 4] 7ʳ.',
          type: 'Easy',
          explaination: 'u₁=7, r=7, n=4. S₄ = (7(7⁴-1))/6 = (7 × 2400)/6 = 2800',
          answer: '2800',
        },
        {
          id: 3,
          question: 'Evaluate Σ[r=1 to 8] 2 × 5ʳ.',
          type: 'Easy',
          explaination:
            'u₁ = 2 × 5 = 10, r = 5, n = 8.\nS₈ = 10(5⁸ - 1)/(5 - 1) = (10 × 390 624)/4 = 976 560',
          answer: '976 560',
        },
        {
          id: 4,
          question: 'Evaluate Σ[r=1 to 9] 11 × 3ʳ.',
          type: 'Easy',
          explaination:
            'u₁ = 11 × 3 = 33, r = 3, n = 9.\nS₉ = 33(3⁹ - 1)/(3 - 1) = (33 × 19 682)/2 = 33 × 9841 = 324 753',
          answer: '324 753',
        },
      ],
      'nth-term-and-sum-application': [
        {
          id: 1,
          question:
            'A geometric sequence has first term 128 and common ratio 0.5. Find the eighth term of the sequence.',
          type: 'Easy',
          explaination: 'u₈ = 128 × 0.5⁷ = 128 × 1/128 = 1',
          answer: 'u₈ = 1',
        },
        {
          id: 2,
          question:
            'A geometric sequence has first term 128 and common ratio 0.5. Find the sum of the first eight terms.',
          type: 'Easy',
          explaination: 'S₈ = (128(1-0.5⁸))/0.5 = 256(1-1/256) = 256 - 1 = 255',
          answer: 'S₈ = 255',
        },
        {
          id: 3,
          question:
            'According to legend, Sissa ben Dahir asked for grains of wheat: 1 on square 1, 2 on square 2, 4 on square 3, and so on.\nHow many grains would be on the 64th square of the chessboard?',
          type: 'Medium',
          explaination: 'u₆₄ = 1 × 2⁶³ = 9 223 372 036 854 775 808',
          answer: '2⁶³ ≈ 9.22 × 10¹⁸',
        },
      ],
      'identifying-common-ratio': [
        {
          id: 1,
          question:
            'The first term of a geometric sequence is 3 and the second term is 6. Write down the common ratio.',
          type: 'Easy',
          explaination: 'r = u₂/u₁ = 6/3 = 2',
          answer: 'r = 2',
        },
        {
          id: 2,
          question:
            'A geometric series has the third term equal to 1 and the sum to infinity equal to 12. Find the possible values of the common ratio.',
          type: 'Hard',
          explaination:
            'Let first term = a, common ratio = r.\nar² = 1 ⇒ a = 1/r².\nSum to infinity: a/(1-r) = 12 (requires |r| < 1).\nSubstitute: 1/(r²(1-r)) = 12.\n12r³ - 12r² + 1 = 0.\nSolve with GDC: r = 1/2 or r = -1/3.',
          answer: 'r = 1/2 or r = -1/3',
        },
      ],
      'nth-term': [
        {
          id: 1,
          question:
            'The first term of a geometric sequence is 3 and the second term is 6. Find the sixth term.',
          type: 'Easy',
          explaination: 'u₆ = 3 × 2⁵ = 96',
          answer: 'u₆ = 96',
        },
        {
          id: 2,
          question:
            'In a geometric sequence the second term is 24 and the fifth term is 81. Find the value of the seventh term.',
          type: 'Medium',
          explaination:
            'u₅/u₂ = r³ = 81/24 = 27/8, so r = 3/2.\nu₁ = u₂/r = 24 ÷ 3/2 = 16.\nu₇ = 16 × (3/2)⁶ = 16 × 729/64 = 729/4 = 182.25',
          answer: 'u₇ = 729/4 = 182.25',
        },
      ],
      'geometric-sequences-real-world-application': [
        {
          id: 1,
          question:
            'A student studies the amount of algae in a pond over time. She estimates the area of algae on the pond on day 1 of her study is 15 cm², and she predicts that the area will double every eight days.\nAccording to her projection, what area will the algae cover at the start of the ninth week?',
          type: 'Medium',
          explaination:
            'The start of week 9 = day 57. Number of 8-day periods from day 1 to day 57 = 7. So A = 15 × 2⁷ = 15 × 128 = 1920 cm²',
          answer: '1920 cm²',
        },
        {
          id: 2,
          question:
            'A yeast culture is grown in a sugar solution. The concentration of sugar in the solution at the start of the culture is 1.2 mg ml⁻¹, and halves every 2 days. What is the concentration of the sugar solution after 12 days?',
          type: 'Medium',
          explaination:
            'Number of halvings in 12 days = 6. C = 1.2 × (0.5)⁶ = 1.2/64 = 0.01875 mg ml⁻¹',
          answer: '1.2/64 ≈ 0.01875 mg ml⁻¹',
        },
        {
          id: 3,
          question:
            'The time taken for a computer learning program to identify a face decreases by 20% every time it sees that face. The first time the face is observed it takes 5 seconds to identify it. How long does it take to identify a face on the 10th attempt?',
          type: 'Medium',
          explaination: 'r = 0.8, u₁ = 5.\nu₁₀ = 5 × 0.8⁹ = 5 × 0.134217728 ≈ 0.671 s',
          answer: '≈ 0.671 seconds',
        },
        {
          id: 4,
          question:
            'During a drought, the volume of water in a reservoir decreases by 8% every day. At the beginning of day one of the drought it contains 5000 m³.\nFind the volume at the start of the fifth day.',
          type: 'Medium',
          explaination:
            'r = 0.92, u₁ = 5000 (start of day 1).\nThe start of day 5 is after 4 decreases: u₅ = 5000 × 0.92⁴ = 5000 × 0.71639296 ≈ 3581.96 m³',
          answer: '≈ 3582 m³',
        },
        {
          id: 5,
          question:
            'A basketball is dropped vertically. The first bounce reaches a height of 0.6 m and subsequent bounces are 80% of the height of the previous bounce.\nFind the height of the fifth bounce.',
          type: 'Medium',
          explaination: 'u₅ = 0.6 × 0.8⁴ = 0.6 × 0.4096 = 0.24576 m',
          answer: '≈ 0.246 m',
        },
      ],
      'sum-of-geometric-series-extended-application': [
        {
          id: 1,
          question:
            'The fifth term of a geometric sequence is eight times larger than the second term. Find the ratio S₈/u₁.',
          type: 'Hard',
          explaination:
            'u₅ = 8u₂ ⇒ u₁ r⁴ = 8u₁r ⇒ r³ = 8 ⇒ r = 2.\nS₈ = u₁ · (2⁸ - 1)/(2-1) = 255 u₁.\nS₈/u₁ = 255',
          answer: 'S₈/u₁ = 255',
        },
        {
          id: 2,
          question:
            "The annual worldwide production of wheat is approximately 7.5 × 10¹⁴ g. If one grain of wheat has a mass of 0.1 g, how many years would it take to produce enough wheat to satisfy Sissa's reward? Give your answer to the nearest 50 years.",
          type: 'Hard',
          explaination:
            'Total mass = (2⁶⁴-1) × 0.1 ≈ 1.845 × 10¹⁸ g.\nYears = (1.845 × 10¹⁸)/(7.5 × 10¹⁴) ≈ 2460 years.\nRound to nearest 50: ≈ 2450 years',
          answer: '≈ 2450 years',
        },
        {
          id: 3,
          question:
            'A basketball is dropped vertically. The first bounce reaches a height of 0.6 m and subsequent bounces are 80% of the height of the previous bounce.\nFind the total distance travelled by the ball from the top of the first bounce to the top of the fifth bounce.',
          type: 'Hard',
          explaination:
            'Bounce heights: u₁ = 0.6, u₂ = 0.48, u₃ = 0.384, u₄ = 0.3072, u₅ = 0.24576.\nFrom the top of bounce 1 the ball falls u₁, then rises and falls u₂, u₃ and u₄, then rises u₅.\nDistance = u₁ + 2(u₂ + u₃ + u₄) + u₅ = 0.6 + 2(1.1712) + 0.24576 ≈ 3.19 m',
          answer: '≈ 3.19 m',
        },
      ],
      'sum-using-recurrence-relation': [
        {
          id: 1,
          question: 'If u₁ = 3 and uₙ₊₁ = 2uₙ, find Σ[r=1 to 10] uᵣ.',
          type: 'Hard',
          explaination:
            'The recurrence gives r = 2. This is a geometric sequence with u₁ = 3, r = 2.\nS₁₀ = (3(2¹⁰-1))/1 = 3 × 1023 = 3069',
          answer: 'S₁₀ = 3069',
        },
      ],
      'finding-nth-term-from-algebraic-terms': [
        {
          id: 1,
          question:
            'The first three terms of a geometric sequence are 1, x, 2x² + x.\nFind the value of the 10th term.',
          type: 'Hard',
          explaination:
            'For a geometric sequence: x/1 = (2x²+x)/x ⇒ x² = 2x² + x ⇒ x² + x = 0 ⇒ x(x+1)=0.\nAlso x² = 2x²+x ⇒ 0 = x²+x ⇒ x = 0 or x=-1.\nIf x=-1: sequence is 1, -1, 1, …, r=-1, u₁₀=-1.\nIf x=0: degenerate. Revisit: r=x and r=(2x²+x)/x = 2x+1. So x = 2x+1 ⇒ x = -1. Thus r = -1, u₁₀ = 1 × (-1)⁹ = -1.',
          answer: 'u₁₀ = 2⁹ = 512 (for x=2) or u₁₀ = (-1/2)⁹',
        },
      ],
      'model-limitations': [
        {
          id: 1,
          question:
            'A basketball is dropped vertically. The first bounce reaches a height of 0.6 m and subsequent bounces are 80% of the height of the previous bounce.\nSuggest why this model is no longer accurate by the 20th bounce.',
          type: 'Easy',
          explaination:
            'u₂₀ = 0.6 × 0.8¹⁹ ≈ 0.6 × 0.0144 ≈ 0.0086 m, which is negligibly small; the ball would have stopped bouncing. The model assumes a constant ratio but real energy loss and ground deformation mean the ball eventually stops.',
          answer:
            'The model predicts a non-zero height, but in reality the ball will have come to rest.',
        },
      ],
      'compound-interest-arithmetic-vs-geometric-growth': [
        {
          id: 1,
          question:
            'Asher invests $200 in a bank account with an interest rate of 2.6% per annum. Elsa invests $300 in an account which pays $10 interest every year. After how many whole years will Asher have at least as much money as Elsa?',
          type: 'Medium',
          explaination:
            'Asher: A(n) = 200(1.026)ⁿ Elsa: E(n) = 300 + 10n Solve 200(1.026)ⁿ ≥ 300 + 10n with GDC/table.\nFirst whole year where inequality holds: n = 23.',
          answer: 'n = 23 years',
        },
      ],
    },
  },
  {
    algebra: {
      title: 'Algebra',
      'completing-the-square': [
        {
          id: 1,
          question: 'Given that x² + 8x + 23 ≡ (x + a)² + b, find the values of a and b.',
          type: 'Easy',
          explaination:
            'Step 1: Expand (x+a)² + b = x² + 2ax + a² + b.\nStep 2: Compare coefficients: 2a = 8 ⇒ a = 4.\nStep 3: a² + b = 23 ⇒ 16 + b = 23 ⇒ b = 7.',
          answer: 'a = 4, b = 7',
        },
        {
          id: 2,
          question: 'Given that x² - 12x - 1 ≡ (x - a)² -b, find the values of a and b.',
          type: 'Easy',
          explaination:
            'Step 1: Expand (x-a)² - b = x² -2ax + a² - b.\nStep 2: 2a = 12 ⇒ a = 6.\nStep 3: a² - b = -1 ⇒ 36 -b = -1 ⇒ b = 37.',
          answer: 'a = 6, b = 37',
        },
        {
          id: 3,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² - 6x + 15.',
          type: 'Easy',
          explaination: 'y = (x-3)² - 9 + 15 = (x-3)² + 6.\nVertex: (3, 6).',
          answer: 'Vertex: (3, 6)',
        },
        {
          id: 4,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² - 8x + 18.',
          type: 'Easy',
          explaination: 'y = (x-4)² - 16 + 18 = (x-4)² + 2.\nVertex: (4, 2).',
          answer: 'Vertex: (4, 2)',
        },
        {
          id: 5,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² + 4x + 7.',
          type: 'Easy',
          explaination: 'y = (x+2)² - 4 + 7 = (x+2)² + 3.\nVertex: (-2, 3).',
          answer: 'Vertex: (-2, 3)',
        },
        {
          id: 6,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² + 4x + 1.',
          type: 'Easy',
          explaination: 'y = (x+2)² - 4 + 1 = (x+2)² - 3.\nVertex: (-2, -3).',
          answer: 'Vertex: (-2, -3)',
        },
        {
          id: 7,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² + 10x + 5.',
          type: 'Easy',
          explaination: 'y = (x+5)² - 25 + 5 = (x+5)² - 20.\nVertex: (-5, -20).',
          answer: 'Vertex: (-5, -20)',
        },
        {
          id: 8,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² - 8x + 3.',
          type: 'Easy',
          explaination: 'y = (x-4)² - 16 + 3 = (x-4)² - 13.\nVertex: (4, -13).',
          answer: 'Vertex: (4, -13)',
        },
        {
          id: 9,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² + 4x - 5.',
          type: 'Easy',
          explaination: 'y = (x+2)² - 4 - 5 = (x+2)² - 9.\nVertex: (-2, -9).',
          answer: 'Vertex: (-2, -9)',
        },
        {
          id: 10,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² + 2x - 8.',
          type: 'Easy',
          explaination: 'y = (x+1)² - 1 - 8 = (x+1)² - 9.\nVertex: (-1, -9).',
          answer: 'Vertex: (-1, -9)',
        },
        {
          id: 11,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² + 3x + 5.',
          type: 'Easy',
          explaination: 'y = (x+3/2)² - 9/4 + 5 = (x+3/2)² + 11/4. Vertex: (-3/2, 11/4).',
          answer: 'Vertex: (-3/2,\ndfrac114)',
        },
        {
          id: 12,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² + 5x + 8.',
          type: 'Easy',
          explaination: 'y = (x+5/2)² - 25/4 + 8 = (x+5/2)² + 7/4. Vertex: (-5/2, 7/4).',
          answer: 'Vertex: (-5/2,\ndfrac74)',
        },
        {
          id: 13,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² - 3x + 1.',
          type: 'Medium',
          explaination: 'y = (x-3/2)² - 9/4 + 1 = (x-3/2)² - 5/4. Vertex: (3/2, -5/4).',
          answer: 'Vertex: (3/2, -5/4)',
        },
        {
          id: 14,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² - 7x + 3.',
          type: 'Medium',
          explaination: 'y = (x-7/2)² - 49/4 + 3 = (x-7/2)² - 37/4. Vertex: (7/2, -37/4).',
          answer: 'Vertex: (7/2, -37/4)',
        },
        {
          id: 15,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² - (1/2)x - 3/2.',
          type: 'Hard',
          explaination: 'y = (x - 1/4)² - 1/16 - 3/2 = (x-1/4)²- 25/16. Vertex: (1/4, -25/16).',
          answer: 'Vertex: (1/4, -25/16)',
        },
        {
          id: 16,
          question:
            'Complete the square and find the coordinates of the vertex of y = x² - (1/3)x - 1/3.',
          type: 'Hard',
          explaination: 'y = (x - 1/6)² - 1/36 - 1/3 = (x-1/6)²- 13/36. Vertex: (1/6, -13/36).',
          answer: 'Vertex: (1/6, -13/36)',
        },
        {
          id: 17,
          question:
            'A graph has equation y = 2x² + 12x + 23.\nWrite down the coordinates of the point where the graph crosses the y-axis.',
          type: 'Medium',
          explaination: 'Set x=0: y=23. y-intercept:\n(0, 23).',
          answer: '(0, 23)',
        },
        {
          id: 18,
          question:
            'A graph has equation y = 2x² + 12x + 23.\nWrite 2x² + 12x + 23 in the form a(x + h)² + k.',
          type: 'Medium',
          explaination: '2x²+12x+23 = 2(x²+6x)+23 = 2[(x+3)²-9]+23 = 2(x+3)²-18+23 = 2(x+3)²+5.',
          answer: '2(x+3)² + 5',
        },
        {
          id: 19,
          question:
            'A graph has equation y = 2x² + 12x + 23.\nPart b): Write 2x² + 12x + 23 in the form a(x + h)² + k. → 2(x+3)² + 5\nHence find the coordinates of the vertex of the graph.',
          type: 'Medium',
          explaination: 'Vertex at x=-3, y=5: vertex (-3, 5).',
          answer: 'Vertex: (-3, 5)',
        },
        {
          id: 20,
          question: 'Solve x² - 6x + 3 = 0 by completing the square.',
          type: 'Medium',
          explaination: '(x-3)² - 9 + 3 = 0 → (x-3)² = 6 → x = 3 ± √6',
          answer: 'x = 3 ± √6',
        },
        {
          id: 21,
          question: 'Solve x² - 4x - 2 = 0 by completing the square.',
          type: 'Medium',
          explaination: '(x-2)² - 4 - 2 = 0 → (x-2)² = 6 → x = 2 ± √6',
          answer: 'x = 2 ± √6',
        },
        {
          id: 22,
          question: 'Solve x² + 10x - 3 = 0 by completing the square.',
          type: 'Medium',
          explaination: '(x+5)² - 25 - 3 = 0 → (x+5)² = 28 → x = -5 ± 2√7',
          answer: 'x = -5 ± √28 = -5 ± 2√7',
        },
        {
          id: 23,
          question: 'Solve x² + 8x + 4 = 0 by completing the square.',
          type: 'Medium',
          explaination: '(x+4)² - 16 + 4 = 0 → (x+4)² = 12 → x = -4 ± 2√3',
          answer: 'x = -4 ± √12 = -4 ± 2√3',
        },
        {
          id: 24,
          question: 'Solve x² - 3x + 1 = 0 by completing the square.',
          type: 'Medium',
          explaination: '(x - 3/2)² - 9/4 + 1 = 0 → (x-3/2)² = 5/4 → x = (3 ± √5)/2',
          answer: 'x = (3 ± √5)/2',
        },
        {
          id: 25,
          question: 'Solve x² - 5x - 2 = 0 by completing the square.',
          type: 'Medium',
          explaination: '(x-5/2)² = 33/4 → x = (5 ± √33)/2',
          answer: 'x = (5 ± √33)/2',
        },
        {
          id: 26,
          question: 'Solve x² + x - 5 = 0 by completing the square.',
          type: 'Medium',
          explaination: '(x+1/2)² = 21/4 → x = (-1 ± √21)/2',
          answer: 'x = (-1 ± √21)/2',
        },
        {
          id: 27,
          question: 'Solve x² + 3x - 1 = 0 by completing the square.',
          type: 'Medium',
          explaination: '(x+3/2)² = 13/4 → x = (-3 ± √13)/2',
          answer: 'x = (-3 ± √13)/2',
        },
        {
          id: 28,
          question: 'Solve 4x² - 24x + 3 = 0 by completing the square.',
          type: 'Hard',
          explaination: 'Divide by 4: x² - 6x + 3/4 =0 → (x-3)² = 33/4 → x = 3 ± √33/2',
          answer: 'x = 3 ± √33/2',
        },
        {
          id: 29,
          question: 'Solve 4x² - 8x - 1 = 0 by completing the square.',
          type: 'Hard',
          explaination: 'Divide by 4: (x-1)² = 5/4 → x = 1 ± √5/2',
          answer: 'x = 1 ± √5/2',
        },
        {
          id: 30,
          question: 'Solve 4x² + 2x - 3 = 0 by completing the square.',
          type: 'Hard',
          explaination: 'Divide by 4: (x+1/4)² = 13/16 → x = (-1 ± √13)/4',
          answer: 'x = (-1 ± √13)/4',
        },
        {
          id: 31,
          question: 'Solve 4x² + 6x + 1 = 0 by completing the square.',
          type: 'Hard',
          explaination: 'Divide by 4: (x+3/4)² = 5/16 → x = (-3 ± √5)/4',
          answer: 'x = (-3 ± √5)/4',
        },
        {
          id: 32,
          question: 'Write x² - 6x - 2 in the form (x - h)² - k.',
          type: 'Medium',
          explaination: '(x-3)² - 9 - 2 = (x-3)² - 11 [M1 A1 A1]',
          answer: '(x-3)² -11',
        },
        {
          id: 33,
          question: 'Find the exact solutions of the equation x² - 6x - 2 = 0.',
          type: 'Medium',
          explaination: '(x-3)² = 11 ⇒ x = 3 ± √11 [A1 A1]',
          answer: 'x = 3 ± √11',
        },
        {
          id: 34,
          question: 'Write x² + 10x in the form (x + h)²- k.',
          type: 'Medium',
          explaination: '(x+5)²-25 [M1 A1]',
          answer: '(x+5)² -25',
        },
        {
          id: 35,
          question: 'Find the exact roots of the equation x² + 10x = 7.',
          type: 'Medium',
          explaination: '(x+5)² = 32 ⇒ x = -5 ± 4√2 [M1 A1 A1]',
          answer: 'x = -5 ± √32 = -5 ± 4√2',
        },
        {
          id: 36,
          question: 'Write x² - 10x + 11 in the form (x - h)² + k.',
          type: 'Medium',
          explaination: 'x²-10x+11 = (x-5)²-25+11 = (x-5)²-14',
          answer: '(x-5)² -14',
        },
        {
          id: 37,
          question: 'Write 5x² + 30x + 45 in the form a(x + h)².',
          type: 'Medium',
          explaination: '5x²+30x+45 = 5(x²+6x+9) = 5(x+3)²',
          answer: '5(x+3)²',
        },
      ],
      'difference-of-two-squares': [
        {
          id: 1,
          question: 'Find the values of p and q such that (2x-5)(2x+5) ≡ px² - q².',
          type: 'Easy',
          explaination:
            'Step 1: Expand (2x-5)(2x+5) = 4x²- 25.\nStep 2: Match to px² - q²: p = 4, q² = 25 ⇒ q = 5.',
          answer: 'p = 4, q = 5',
        },
      ],
      'algebraic-proof': [
        {
          id: 1,
          question: 'Prove that (n-1)² + n² + (n+1)² ≡ 3n² + 2.',
          type: 'Easy',
          explaination:
            'Step 1: Expand (n-1)² = n² - 2n + 1.\nStep 2: (n+1)² = n² + 2n + 1.\nStep 3: Sum: (n² - 2n + 1) + n² + (n² + 2n + 1) = 3n² + 2.\n□',
          answer: 'Identity proven by expansion.',
        },
      ],
      'algebraic-fractions-proof': [
        {
          id: 1,
          question: 'Prove that (3x-2)/3 - (2x-3)/2 ≡ 5/6.',
          type: 'Medium',
          explaination:
            'Step 1: Common denominator 6:\n(2(3x-2) - 3(2x-3))/6.\nStep 2: Numerator: 6x - 4 - 6x + 9 = 5.\nStep 3: Result: 5/6.\n□',
          answer: 'Identity proven.',
        },
        {
          id: 2,
          question: 'Prove that (7x+6)/12 - (3x+5)/10 ≡ 17x/60.',
          type: 'Medium',
          explaination:
            'Step 1: LCM of 12 and 10 is 60.\nStep 2: (5(7x+6) - 6(3x+5))/60 = (35x+30-18x-30)/60 = 17x/60. □',
          answer: 'Identity proven.',
        },
        {
          id: 3,
          question: 'Prove that 1/(x-2) - 1/(x+3) ≡ 5/(x²+x-6).',
          type: 'Medium',
          explaination:
            'Step 1: Note x²+x-6 = (x-2)(x+3).\nStep 2: LHS: ((x+3)-(x-2))/((x-2)(x+3)) = 5/(x²+x-6) = RHS. □',
          answer: 'Identity proven.',
        },
      ],
      'numerical-verification': [
        {
          id: 1,
          question: 'Show that 1/2 + 1/4 = 3/4.',
          type: 'Easy',
          explaination: 'Convert to common denominator 4:\n2/4 + 1/4 = 3/4. □',
          answer: '1/2 + 1/4 = 2/4 + 1/4 = 3/4',
        },
        {
          id: 2,
          question: 'Show that 1/3 - 1/5 = 2/15.',
          type: 'Easy',
          explaination: 'Common denominator 15: (5-3)/15 = 2/15. □',
          answer: '1/3 -1/5 = 5/15 -3/15 = 2/15',
        },
      ],
      'algebraic-generalisation': [
        {
          id: 1,
          question: 'Show that, for n ≠ 0, 1/n + 1/(2n) ≡ 3/(2n).',
          type: 'Easy',
          explaination: 'Step 1: 1/n + 1/2n = 2/2n + 1/2n = 3/2n. □',
          answer: 'Identity proven.',
        },
        {
          id: 2,
          question: 'Show that, for n ≠ ±1, 1/(n-1) - 1/(n+1) ≡ 2/(n²-1).',
          type: 'Medium',
          explaination:
            'Step 1: Note n²-1 = (n-1)(n+1).\nStep 2: ((n+1)-(n-1))/((n-1)(n+1)) = 2/(n²-1).\n□',
          answer: 'Identity proven.',
        },
      ],
      'identifying-identities': [
        {
          id: 1,
          question:
            'Which of the following equations are, in fact, identities?\n(x-5)(x+5) = x² - 25',
          type: 'Easy',
          explaination:
            '(x-5)(x+5) = x² - 25 — difference of two squares, true for all x. Identity.',
          answer: 'Identity ✓',
        },
        {
          id: 2,
          question: 'Which of the following equations are, in fact, identities?\n(x+5)² = x² + 25',
          type: 'Easy',
          explaination: '(x+5)² = x² + 10x + 25 ≠ x² + 25 — not an identity (missing 10x term).',
          answer: 'NOT an identity ✗',
        },
        {
          id: 3,
          question:
            'Which of the following equations are, in fact, identities?\n(x-5)² = x² - 10x + 25',
          type: 'Easy',
          explaination: '(x-5)² = x² - 10x + 25 — true for all x. Identity.',
          answer: 'Identity ✓',
        },
      ],
      'polynomial-identities-factor-theorem': [
        {
          id: 1,
          question: 'Find the values of a and b so that x³ - 5x² + 3x + 9 ≡ (x+a)(x-b)².',
          type: 'Hard',
          explaination:
            'x = 3 is a repeated root, so (x - 3)² = x² - 6x + 9 is a factor.\nDividing gives x³ - 5x² + 3x + 9 = (x + 1)(x - 3)².\nCheck: (x + 1)(x² - 6x + 9) = x³ - 5x² + 3x + 9 ✓\nComparing with (x + a)(x - b)²: a = 1, b = 3.',
          answer: 'a = 1, b = 3',
        },
        {
          id: 2,
          question: 'Find the values of p and q such that x³ - 2x² + 5x - 10 ≡ (x² + p)(x - q).',
          type: 'Medium',
          explaination:
            'Step 1: Expand (x²+p)(x-q) = x³ -qx² + px - pq.\nStep 2: Compare: -q = -2 ⇒ q = 2; p = 5; check: pq = 10 ✓.',
          answer: 'p = 5, q = 2',
        },
      ],
      'algebraic-proof-counter-example': [
        {
          id: 1,
          question:
            'Dina says that x³ - y³ = (x-y)(x²+y²) is an identity.\nFind one example to show that Dina is wrong.',
          type: 'Medium',
          explaination: 'Substitute specific values to disprove.',
          answer: 'Counter-example:\nx=2, y=1:\nLHS = 7, RHS = 1 × 5 = 5 ≠ 7.',
        },
        {
          id: 2,
          question:
            'Dina says that x³ - y³ = (x-y)(x²+y²) is an identity.\nFind the value of a such that x³ -y³ ≡ (x-y)(x² + axy + y²).',
          type: 'Medium',
          explaination:
            'Expand (x-y)(x²+axy+y²) = x³ + ax²y + xy² - x²y - axy² -y³\n= x³ + (a-1)x²y + (1-a)xy² -y³.\nFor this to equal x³-y³: a-1=0 ⇒ a=1.',
          answer: 'a = 1',
        },
      ],
      'proof-even-odd-numbers': [
        {
          id: 1,
          question:
            'Prove that (2n+1)² - (2n+1) is an even number for all positive integer values of n.',
          type: 'Medium',
          explaination:
            'Step 1: (2n+1)² - (2n+1) = (2n+1)[(2n+1)-1] = (2n+1)(2n).\nStep 2: 2n(2n+1) contains a factor of 2, so it is always even.\n□',
          answer: 'Proof: expression equals 2n(2n+1), which is always even.',
        },
        {
          id: 2,
          question:
            'Prove that the sum of the squares of two consecutive odd numbers is never a multiple of 4.',
          type: 'Hard',
          explaination:
            'Step 1: Let consecutive odd numbers be 2n+1 and 2n+3.\nStep 2: Sum of squares: (2n+1)²+ (2n+3)² = 4n²+4n+1+4n²+12n+9 = 8n²+16n+10.\nStep 3: 8n²+16n+10 = 4(2n²+4n+2)+2.\nStep 4: This is 4k+2 for integer k, so it leaves a remainder of 2 when divided by 4. Hence never a multiple of 4. □',
          answer:
            'Proof: sum equals 8n²+8n+2 = 4(2n²+2n) +2, which leaves remainder 2 when divided by 4.',
        },
      ],
      'proof-multiples': [
        {
          id: 1,
          question:
            'Prove that (2n+1)² - (2n-1)² is a multiple of 8 for all positive integer values of n.',
          type: 'Medium',
          explaination:
            'Step 1: (2n+1)² = 4n²+4n+1; (2n-1)² = 4n²-4n+1.\nStep 2: Difference: 4n²+4n+1-(4n²-4n+1) = 8n.\nStep 3: 8n is divisible by 8 for all n ∈ ℤ⁺. □',
          answer: 'Proof: expression equals 8n, a multiple of 8.',
        },
      ],
      'proof-consecutive-integers': [
        {
          id: 1,
          question:
            'Prove algebraically that the difference between the squares of any two consecutive integers is always an odd number.',
          type: 'Medium',
          explaination:
            'Step 1: Let consecutive integers be n and n+1.\nStep 2: (n+1)² - n² = n²+2n+1-n² = 2n+1.\nStep 3: 2n+1 is odd for all n ∈ ℤ. □',
          answer: 'Proof: difference equals 2n+1, always odd.',
        },
      ],
      'indices-nth-roots': [
        {
          id: 1,
          question: 'Evaluate without a calculator: 49^(1/2)',
          type: 'Easy',
          explaination: '49^(1/2) = √49 = 7',
          answer: '7',
        },
        {
          id: 2,
          question: 'Evaluate without a calculator: 25^(1/2)',
          type: 'Easy',
          explaination: '25^(1/2) = √25 = 5',
          answer: '5',
        },
        {
          id: 3,
          question: 'Evaluate without a calculator: 8^(1/3)',
          type: 'Easy',
          explaination: '8^(1/3) = ³√8 = 2',
          answer: '2',
        },
        {
          id: 4,
          question: 'Evaluate without a calculator: 27^(1/3)',
          type: 'Easy',
          explaination: '27^(1/3) = ³√27 = 3',
          answer: '3',
        },
        {
          id: 5,
          question: 'Evaluate without a calculator: 256^(1/4)',
          type: 'Easy',
          explaination: '256^(1/4) = ⁴√256 = 4',
          answer: '4',
        },
        {
          id: 6,
          question: 'Evaluate without a calculator: 625^(1/4)',
          type: 'Easy',
          explaination: '625^(1/4) = ⁴√625 = 5',
          answer: '5',
        },
      ],
      'indices-exact-values': [
        {
          id: 1,
          question: 'Evaluate without a calculator: 8^(-2/3)',
          type: 'Medium',
          explaination: '8^(-2/3) = 1/(8^(2/3)) = 1/((8^(1/3))²) = 1/4',
          answer: '1/4',
        },
        {
          id: 2,
          question: 'Evaluate without a calculator: 27^(-2/3)',
          type: 'Medium',
          explaination: '27^(-2/3) = 1/(27^(2/3)) = 1/((27^(1/3))²) = 1/9',
          answer: '1/9',
        },
        {
          id: 3,
          question: 'Evaluate without a calculator: 32^(-2/5)',
          type: 'Medium',
          explaination: '32^(-2/5) = 1/(32^(2/5)) = 1/((32^(1/5))²) = 1/2² = 1/4',
          answer: '1/4',
        },
        {
          id: 4,
          question: 'Evaluate without a calculator: 100000^(-3/5)',
          type: 'Medium',
          explaination: '100000^(-3/5) = 1/(100000^(3/5)) = 1/((10⁵)^(3/5)) = 1/10³ = 1/1000',
          answer: '1/1000',
        },
        {
          id: 5,
          question: 'Find the exact value of 8^(-4/3)',
          type: 'Medium',
          explaination: '8^(-4/3) = 1/((8^(1/3))⁴) = 1/2⁴ = 1/16',
          answer: '1/16',
        },
        {
          id: 6,
          question: 'Find the exact value of (1/4)^(-1/2)',
          type: 'Medium',
          explaination: '(1/4)^(-1/2) = 4^(1/2) = 2',
          answer: '2',
        },
        {
          id: 7,
          question: 'Find the exact value of (4/9)^(3/2)',
          type: 'Medium',
          explaination: '(4/9)^(3/2) = (2/3)³ = 8/27',
          answer: '8/27',
        },
      ],
      'solving-equations-with-indices': [
        {
          id: 1,
          question: 'Solve the equation x^(3/2) = 1/8.',
          type: 'Medium',
          explaination: 'x = (1/8)^(2/3) = 1/(8^(2/3)) = 1/((8^(1/3))²) = 1/4',
          answer: 'x = 1/4',
        },
        {
          id: 2,
          question: 'Solve the equation x^(-1/2) = 2/5.',
          type: 'Medium',
          explaination: 'x^(-1/2) = 2/5 ⇒ x^(1/2) = 5/2 ⇒ x = (5/2)² = 25/4',
          answer: 'x = 25/4',
        },
        {
          id: 3,
          question: 'Solve the equation x^(2/3) = 9.',
          type: 'Hard',
          explaination: 'x = 9^(3/2) = (9^(1/2))³ = 3³ = 27',
          answer: 'x = 27',
        },
        {
          id: 4,
          question: 'Solve the equation √x = 2³√x.',
          type: 'Hard',
          explaination: 'x^(1/2) = 2x^(1/3)\nx^(1/2-1/3) = 2\nx^(1/6) = 2\nx = 2⁶ = 64',
          answer: 'x = 64',
        },
      ],
      'indices-composition-and-substitution': [
        {
          id: 1,
          question: 'Given that y = 2³√x², write y⁴ in the form axᵏ.',
          type: 'Hard',
          explaination: 'y = 2x^(2/3)\ny⁴ = 2⁴ · x^(2/3×4) = 16x^(8/3)',
          answer: '16x^(8/3)',
        },
        {
          id: 2,
          question: 'Given that y = 27√x, write ³√y in the form axᵏ.',
          type: 'Hard',
          explaination: 'y = 27x^(1/2)\ny^(1/3) = 27^(1/3) · x^(1/6) = 3x^(1/6)',
          answer: '3x^(1/6)',
        },
        {
          id: 3,
          question: 'Given that √x = ³√y, write y in the form xᵏ.',
          type: 'Hard',
          explaination: 'x^(1/2) = y^(1/3) ⇒ y = x^(3/2)',
          answer: 'x^(3/2)',
        },
        {
          id: 4,
          question: 'Given that y = 2/3√x, write y³ in the form axᵏ.',
          type: 'Hard',
          explaination: 'y = (2/3)x^(-1/2)\ny³ = (2/3)³ x^(-3/2) = (8/27)x^(-3/2)',
          answer: '(8/27)x^(-3/2)',
        },
      ],
      'solving-quadratics-factorising': [
        {
          id: 1,
          question: 'Solve x² - 5x + 6 = 0 by factorising.',
          type: 'Easy',
          explaination: 'Factor: (x-2)(x-3)=0 → x=2 or x=3',
          answer: 'x = 2 or x = 3',
        },
        {
          id: 2,
          question: 'Solve x² - 8x + 15 = 0 by factorising.',
          type: 'Easy',
          explaination: 'Factor: (x-3)(x-5)=0 → x=3 or x=5',
          answer: 'x = 3 or x = 5',
        },
        {
          id: 3,
          question: 'Solve x² + x - 6 = 0 by factorising.',
          type: 'Easy',
          explaination: '(x+3)(x-2)=0 → x=2 or x=-3',
          answer: 'x = 2 or x = -3',
        },
        {
          id: 4,
          question: 'Solve x² - x - 12 = 0 by factorising.',
          type: 'Easy',
          explaination: '(x-4)(x+3)=0 → x=4 or x=-3',
          answer: 'x = 4 or x = -3',
        },
        {
          id: 5,
          question: 'Solve x² - 6x + 9 = 0 by factorising.',
          type: 'Easy',
          explaination: '(x-3)²=0 → x=3 (repeated root)',
          answer: 'x = 3',
        },
        {
          id: 6,
          question: 'Solve x² + 10x + 25 = 0 by factorising.',
          type: 'Easy',
          explaination: '(x+5)²=0 → x=-5 (repeated root)',
          answer: 'x = -5',
        },
        {
          id: 7,
          question: 'Solve 2x² + 8x + 6 = 0 by factorising.',
          type: 'Easy',
          explaination: 'Divide by 2: x²+4x+3=0 → (x+1)(x+3)=0 → x=-1 or x=-3',
          answer: 'x = -1 or x = -3',
        },
        {
          id: 8,
          question: 'Solve 3x² + 9x + 6 = 0 by factorising.',
          type: 'Easy',
          explaination: 'Divide by 3: x²+3x+2=0 → (x+1)(x+2)=0 → x=-1 or x=-2',
          answer: 'x = -1 or x = -2',
        },
        {
          id: 9,
          question: 'Solve 2x² - 2x - 12 = 0 by factorising.',
          type: 'Easy',
          explaination: 'Divide by 2: x²-x-6=0 → (x-3)(x+2)=0 → x=3 or x=-2',
          answer: 'x = 3 or x = -2',
        },
        {
          id: 10,
          question: 'Solve 3x² + 3x - 60 = 0 by factorising.',
          type: 'Easy',
          explaination: 'Divide by 3: x²+x-20=0 → (x+5)(x-4)=0 → x=4 or x=-5',
          answer: 'x = 4 or x = -5',
        },
        {
          id: 11,
          question: 'Solve 4x² + 24x + 36 = 0 by factorising.',
          type: 'Easy',
          explaination: 'Divide by 4: x²+6x+9=0 → (x+3)²=0 → x=-3',
          answer: 'x = -3',
        },
        {
          id: 12,
          question: 'Solve 5x² - 20x + 20 = 0 by factorising.',
          type: 'Easy',
          explaination: 'Divide by 5: x²-4x+4=0 → (x-2)²=0 → x=2',
          answer: 'x = 2',
        },
        {
          id: 13,
          question: 'Solve x² - 5x = 0 by factorising.',
          type: 'Easy',
          explaination: 'x(x-5)=0 → x=0 or x=5',
          answer: 'x = 0 or x = 5',
        },
        {
          id: 14,
          question: 'Solve x² + 3x = 0 by factorising.',
          type: 'Easy',
          explaination: 'x(x+3)=0 → x=0 or x=-3',
          answer: 'x = 0 or x = -3',
        },
        {
          id: 15,
          question: 'Solve 3x² + 12x = 0 by factorising.',
          type: 'Easy',
          explaination: '3x(x+4)=0 → x=0 or x=-4',
          answer: 'x = 0 or x = -4',
        },
        {
          id: 16,
          question: 'Solve 3x² - 9x = 0 by factorising.',
          type: 'Easy',
          explaination: '3x(x-3)=0 → x=0 or x=3',
          answer: 'x = 0 or x = 3',
        },
        {
          id: 17,
          question: 'Solve x² - 16 = 0 by factorising.',
          type: 'Easy',
          explaination: '(x-4)(x+4)=0 → x=4 or x=-4',
          answer: 'x = ± 4',
        },
        {
          id: 18,
          question: 'Solve x² - 49 = 0 by factorising.',
          type: 'Easy',
          explaination: '(x-7)(x+7)=0 → x=7 or x=-7',
          answer: 'x = ± 7',
        },
        {
          id: 19,
          question: 'Solve 5x² - 20 = 0 by factorising.',
          type: 'Easy',
          explaination: '5(x²-4)=0 → (x-2)(x+2)=0 → x= ± 2',
          answer: 'x = ± 2',
        },
        {
          id: 20,
          question: 'Solve 5x² - 80 = 0 by factorising.',
          type: 'Easy',
          explaination: '5(x²-16)=0 → (x-4)(x+4)=0 → x= ± 4',
          answer: 'x = ± 4',
        },
        {
          id: 21,
          question: 'Factorise x² - x - 12.',
          type: 'Easy',
          explaination: '(x-4)(x+3) [M1 A1]',
          answer: '(x-4)(x+3)',
        },
        {
          id: 22,
          question:
            'Part a): Factorise x² - x - 12. → (x-4)(x+3)\nHence solve the equation x² - x - 12 = 0.',
          type: 'Easy',
          explaination: 'Set each factor = 0: x=4 or x=-3 [A1 A1]',
          answer: 'x = 4 or x = -3',
        },
      ],
      'quadratic-formula': [
        {
          id: 1,
          question:
            'Use the quadratic formula to solve x² + 7x + 3 = 0. Give your answer in surd form, simplified as far as possible.',
          type: 'Medium',
          explaination: 'x = (-7 ± √(49-12))/2 = (-7 ± √37)/2',
          answer: 'x = (-7 ± √37)/2',
        },
        {
          id: 2,
          question:
            'Use the quadratic formula to solve x² + 5x + 3 = 0. Give your answer in surd form, simplified as far as possible.',
          type: 'Medium',
          explaination: 'x = (-5 ± √(25-12))/2 = (-5 ± √13)/2',
          answer: 'x = (-5 ± √13)/2',
        },
        {
          id: 3,
          question:
            'Use the quadratic formula to solve x² + 5x -2 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (-5 ± √(25+8))/2 = (-5 ± √33)/2',
          answer: 'x = (-5 ± √33)/2',
        },
        {
          id: 4,
          question:
            'Use the quadratic formula to solve x² + 3x -5 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (-3 ± √(9+20))/2 = (-3 ± √29)/2',
          answer: 'x = (-3 ± √29)/2',
        },
        {
          id: 5,
          question:
            'Use the quadratic formula to solve x² - 5x + 2 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (5 ± √(25-8))/2 = (5 ± √17)/2',
          answer: 'x = (5 ± √17)/2',
        },
        {
          id: 6,
          question:
            'Use the quadratic formula to solve x² - 9x + 4 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (9 ± √(81-16))/2 = (9 ± √65)/2',
          answer: 'x = (9 ± √65)/2',
        },
        {
          id: 7,
          question:
            'Use the quadratic formula to solve x² + 8x -3 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (-8 ± √(64+12))/2 = (-8 ± √76)/2 = -4 ± √19',
          answer: 'x = -4 ± √19',
        },
        {
          id: 8,
          question:
            'Use the quadratic formula to solve x² + 6x -4 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (-6 ± √(36+16))/2 = (-6 ± √52)/2 = -3 ± √13',
          answer: 'x = -3 ± √13',
        },
        {
          id: 9,
          question:
            'Use the quadratic formula to solve 2x² + 5x + 1 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (-5 ± √(25-8))/4 = (-5 ± √17)/4',
          answer: 'x = (-5 ± √17)/4',
        },
        {
          id: 10,
          question:
            'Use the quadratic formula to solve 2x² + 7x + 2 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (-7 ± √(49-16))/4 = (-7 ± √33)/4',
          answer: 'x = (-7 ± √33)/4',
        },
        {
          id: 11,
          question:
            'Use the quadratic formula to solve 5x² - 7x- 2 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (7 ± √(49+40))/10 = (7 ± √89)/10',
          answer: 'x = (7 ± √89)/10',
        },
        {
          id: 12,
          question:
            'Use the quadratic formula to solve 5x² - 3x- 4 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (3 ± √(9+80))/10 = (3 ± √89)/10',
          answer: 'x = (3 ± √89)/10',
        },
        {
          id: 13,
          question:
            'Use the quadratic formula to solve 3x² -10x + 1 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (10 ± √(100-12))/6 = (10 ± √88)/6 = (5 ± √22)/3',
          answer: 'x = (10 ± √88)/6 = (5 ± √22)/3',
        },
        {
          id: 14,
          question:
            'Use the quadratic formula to solve 3x² - 8x + 2 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (8 ± √(64-24))/6 = (8 ± √40)/6 = (4 ± √10)/3',
          answer: 'x = (4 ± √10)/3',
        },
        {
          id: 15,
          question:
            'Use the quadratic formula to solve 4x² + 8x- 3 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (-8 ± √(64+48))/8 = (-8 ± √112)/8 = (-2 ± √7)/2',
          answer: 'x = (-2 ± √7)/2',
        },
        {
          id: 16,
          question:
            'Use the quadratic formula to solve 4x² + 4x- 1 = 0. Give your answer in surd form.',
          type: 'Medium',
          explaination: 'x = (-4 ± √(16+16))/8 = (-4 ± 4√2)/8 = (-1 ± √2)/2',
          answer: 'x = (-1 ± √2)/2',
        },
        {
          id: 17,
          question:
            'Find the exact solution of the equation 3x² = 4x + 1, simplifying your answer as far as possible.',
          type: 'Medium',
          explaination: '3x²-4x-1=0. x = (4 ± √(16+12))/6 = (4 ± √28)/6 = (2 ± √7)/3',
          answer: 'x = (2 ± √7)/3',
        },
      ],
      'quadratic-inequalities': [
        {
          id: 1,
          question: 'Solve the quadratic inequality x² - 10x + 21 < 0.',
          type: 'Medium',
          explaination:
            'Roots: (x-3)(x-7)=0 → x=3, 7. Parabola opens up; solution between roots: 3 < x < 7',
          answer: '3 < x < 7',
        },
        {
          id: 2,
          question: 'Solve the quadratic inequality x² - 8x + 12 < 0.',
          type: 'Medium',
          explaination: 'Roots: (x-2)(x-6)=0. Solution: 2 < x < 6',
          answer: '2 < x < 6',
        },
        {
          id: 3,
          question: 'Solve the quadratic inequality x² - 2x - 15 ≤ 0.',
          type: 'Medium',
          explaination: 'Roots: (x-5)(x+3)=0. Solution:\n-3 ≤ x ≤ 5',
          answer: '-3 ≤ x ≤ 5',
        },
        {
          id: 4,
          question: 'Solve the quadratic inequality x² - 3x - 10 ≤ 0.',
          type: 'Medium',
          explaination: 'Roots: (x-5)(x+2)=0. Solution:\n-2 ≤ x ≤ 5',
          answer: '-2 ≤ x ≤ 5',
        },
        {
          id: 5,
          question: 'Solve the quadratic inequality x² + 5x + 6 > 0.',
          type: 'Medium',
          explaination:
            'Roots: (x+2)(x+3)=0. Parabola opens up; solution outside roots: x < -3 or x > -2',
          answer: 'x < -3 or x > -2',
        },
        {
          id: 6,
          question: 'Solve the quadratic inequality x² + 7x + 12 > 0.',
          type: 'Medium',
          explaination: 'Roots: (x+3)(x+4)=0. Solution:\nx < -4 or x > -3',
          answer: 'x < -4 or x > -3',
        },
        {
          id: 7,
          question: 'Solve the quadratic inequality x² - 6x ≥ 0.',
          type: 'Medium',
          explaination: 'x(x-6) ≥ 0. Roots x=0, x=6. Solution: x ≤ 0 or x ≥ 6',
          answer: 'x ≤ 0 or x ≥ 6',
        },
        {
          id: 8,
          question: 'Solve the quadratic inequality x² - 7x ≥ 0.',
          type: 'Medium',
          explaination: 'x(x-7) ≥ 0. Solution: x ≤ 0 or x ≥ 7',
          answer: 'x ≤ 0 or x ≥ 7',
        },
        {
          id: 9,
          question: 'Solve x² + 5 < 6x.',
          type: 'Medium',
          explaination: 'Rearrange: x²-6x+5<0 → (x-1)(x-5)<0 → 1<x<5',
          answer: '1 < x < 5',
        },
        {
          id: 10,
          question: 'Solve x² ≥ b² where b is a positive number.',
          type: 'Hard',
          explaination: '(x-b)(x+b) ≥ 0 → x ≤ -b or x ≥ b',
          answer: 'x ≤ -b or x ≥ b',
        },
        {
          id: 11,
          question:
            'A square has side length x cm. The area is A cm² and the perimeter is P cm.\nFor what values of x is it true that A > P?',
          type: 'Hard',
          explaination: 'A = x², P = 4x. Solve x² > 4x → x(x-4)>0. Since x>0:\nx>4',
          answer: 'x > 4',
        },
        {
          id: 12,
          question: 'Solve x² - 2xp + p² > q² where q is a positive number.',
          type: 'Hard',
          explaination: '(x-p)² > q² → |x-p| > q → x < p-q or x > p+q',
          answer: 'x < p - q or x > p + q',
        },
        {
          id: 13,
          question: 'Solve the inequality x² + 9 ≤ 6x.',
          type: 'Medium',
          explaination:
            'x²-6x+9 ≤ 0 → (x-3)² ≤ 0. Since square is always ≥ 0, only solution is x=3',
          answer: 'x = 3 (equality only)',
        },
      ],
      'solving-quadratics': [
        {
          id: 1,
          question: 'Solve the equation x² - 4x = 21.',
          type: 'Easy',
          explaination: 'x²-4x-21=0 → (x-7)(x+3)=0 → x=7 or x=-3',
          answer: 'x = 7 or x = -3',
        },
      ],
      'quadratic-modelling': [
        {
          id: 1,
          question:
            'Two numbers differ by 3 and their product is\n40. Let the smaller of the two numbers be x.\n(a) Show that x² + 3x - 40 = 0.\n(b) Hence find the possible values of the two numbers.',
          type: 'Medium',
          explaination:
            '(a) Larger number = x+3.\nProduct: x(x+3)=40 → x²+3x-40=0 [M1 A1]\n(b) (x-5)(x+8)=0 → x=5 or x=-8. Pairs: (5,8) or (−8,−5) [M1 A1 A1]',
          answer: '(b) The numbers are 5 and 8, or -8 and -5.',
        },
        {
          id: 2,
          question:
            'The length of a rectangle is 5 cm more than its width and the area of the rectangle is 24 cm².\nLet the width of the rectangle be x cm.\n(a) Show that x² + 5x - 24 = 0.\n(b) Hence find the perimeter of the rectangle.',
          type: 'Medium',
          explaination:
            '(a) Length = x+5. Area: x(x+5) =24 → x²+5x-24=0 [M1 A1]\n(b) (x+8)(x-3)=0 → x=3 (positive). Length =8. Perimeter =2(3+8)=22 cm [M1 A1 A1]',
          answer: '(b) Perimeter = 22 cm',
        },
      ],
      'simultaneous-equations-line-parabola': [
        {
          id: 1,
          question:
            'Find the coordinates of the points of intersection of the line y = x + 2 with the parabola y = x² - 4.',
          type: 'Medium',
          explaination:
            'Set equal: x + 2 = x² - 4 ⇒ x² - x - 6 = 0 ⇒ (x - 3)(x + 2) = 0 ⇒ x = 3 or x = -2.\nx = -2 ⇒ y = 0; x = 3 ⇒ y = 5.\nPoints: (-2, 0) and (3, 5)',
          answer: '(-2, 0) and (3, 5)',
        },
        {
          id: 2,
          question:
            'Find the coordinates of the intersection of the line y = x - 3 with the circle x² + y² = 16.',
          type: 'Hard',
          explaination:
            'Substitute y=x-3: x²+(x-3)²=16 → 2x²-6x-7=0 → x=(6 ± √92)/4=(3 ± √23)/2; find y correspondingly [M1 M1 A1 A1 A1]',
          answer: '((3+√23)/2, (-3+√23)/2) and ((3-√23)/2, (-3-√23)/2)',
        },
      ],
      'rational-equations': [
        {
          id: 1,
          question: 'Find the exact solutions of the equation 6/(x-1) - 3x = 4.',
          type: 'Hard',
          explaination:
            'Multiply by (x - 1): 6 - 3x(x - 1) = 4(x - 1)\n6 - 3x² + 3x = 4x - 4 ⇒ 3x² + x - 10 = 0\n(3x - 5)(x + 2) = 0 ⇒ x = 5/3 or x = -2',
          answer: 'x = 5/3 or x = -2',
        },
      ],
      'quadratic-in-y-rearranging': [
        {
          id: 1,
          question: 'If 2x² + y² = 3xy, find y in terms of x.',
          type: 'Hard',
          explaination: 'y²-3xy+2x²=0 → (y-x)(y-2x) =0 → y=x or y=2x',
          answer: 'y = x or y = 2x',
        },
      ],
      'quadratic-in-x-parameters': [
        {
          id: 1,
          question: 'If x² + k² - 2kx - x + k = 0, find x in terms of k.',
          type: 'Hard',
          explaination:
            'Group: (x² - 2kx + k²) - (x - k) = 0 ⇒ (x - k)² - (x - k) = 0\n(x - k)(x - k - 1) = 0 ⇒ x = k or x = k + 1',
          answer: 'x = k or x = k + 1',
        },
      ],
      'quadratic-inequality-two-variables': [
        {
          id: 1,
          question: 'Solve the inequality x² + y² + 1 ≤ 2y.',
          type: 'Hard',
          explaination:
            'x²+y²-2y+1 ≤ 0 → x²+(y-1)² ≤ 0. Sum of squares ≥ 0, so must equal 0. Hence x=0, y=1',
          answer: 'x = 0 and y = 1 (single point)',
        },
      ],
      'quadratic-equations-discriminant': [
        {
          id: 1,
          question:
            'Evaluate the discriminant and hence determine the number of distinct real solutions of the quadratic equation x² + 4x + 10 = 0.',
          type: 'Easy',
          explaination:
            'a=1, b=4, c=10\nΔ= b² - 4ac = 16 - 40 = -24 Since Δ< 0, there are no real roots.',
          answer: 'No real roots',
        },
        {
          id: 2,
          question:
            'Evaluate the discriminant and hence determine the number of distinct real solutions of the quadratic equation x² + 5x + 2 = 0.',
          type: 'Easy',
          explaination:
            'a=1, b=5, c=2\nΔ= 25 - 8 = 17 Since Δ> 0, there are two distinct real roots.',
          answer: 'Two distinct real roots',
        },
        {
          id: 3,
          question:
            'Evaluate the discriminant and hence determine the number of distinct real solutions of the quadratic equation x² - 4x + 4 = 0.',
          type: 'Easy',
          explaination:
            'a=1, b=-4, c=4\nΔ= 16 - 16 = 0 Since Δ= 0, there is exactly one repeated root.',
          answer: 'One repeated root',
        },
        {
          id: 4,
          question:
            'Evaluate the discriminant and hence determine the number of distinct real solutions of the quadratic equation x² - 10x + 25 = 0.',
          type: 'Easy',
          explaination:
            'a=1, b=-10, c=25\nΔ= 100 - 100 = 0 Since Δ= 0, there is exactly one repeated root.',
          answer: 'One repeated root',
        },
        {
          id: 5,
          question:
            'Evaluate the discriminant and hence determine the number of distinct real solutions of the quadratic equation 4x² + 3x = 0.',
          type: 'Easy',
          explaination:
            'a=4, b=3, c=0\nΔ= 9 - 0 = 9 Since Δ> 0, there are two distinct real roots.',
          answer: 'Two distinct real roots',
        },
        {
          id: 6,
          question:
            'Evaluate the discriminant and hence determine the number of distinct real solutions of the quadratic equation 5x² - 7x = 0.',
          type: 'Easy',
          explaination:
            'a=5, b=-7, c=0\nΔ= 49 - 0 = 49 Since Δ> 0, there are two distinct real roots.',
          answer: 'Two distinct real roots',
        },
        {
          id: 7,
          question:
            'Evaluate the discriminant and hence determine the number of distinct real solutions of the quadratic equation 2x² - 7 = 0.',
          type: 'Easy',
          explaination:
            'a=2, b=0, c=-7\nΔ= 0 - 4(2)(-7) = 56 Since Δ> 0, there are two distinct real roots.',
          answer: 'Two distinct real roots',
        },
        {
          id: 8,
          question:
            'Evaluate the discriminant and hence determine the number of distinct real solutions of the quadratic equation 3x² + 5 = 0.',
          type: 'Easy',
          explaination: 'a=3, b=0, c=5\nΔ= 0 - 60 = -60 Since Δ< 0, there are no real roots.',
          answer: 'No real roots',
        },
        {
          id: 9,
          question:
            'Find the range of values of a for which the equation x + a/x = 3 has real roots.',
          type: 'Hard',
          explaination:
            'Multiply by x (x ≠ 0):\nx² - 3x + a = 0 Require Δ ≥ 0:\n9 - 4a ≥ 0\na ≤ 9/4',
          answer: 'a ≤ 9/4',
        },
      ],
      'discriminant-finding-k-two-roots': [
        {
          id: 1,
          question:
            'Find the set of values of k for which the quadratic equation x² + 8x + k = 0 has two distinct real roots.',
          type: 'Easy',
          explaination: 'Require Δ> 0:\n64 - 4k > 0\n4k < 64\nk < 16',
          answer: 'k < 16',
        },
        {
          id: 2,
          question:
            'Find the set of values of k for which the quadratic equation x² + 6x + k = 0 has two distinct real roots.',
          type: 'Easy',
          explaination: 'Require Δ> 0:\n36 - 4k > 0\nk < 9',
          answer: 'k < 9',
        },
        {
          id: 3,
          question:
            'Find the set of values of k for which the quadratic equation 3x² - 5x + k = 0 has no real roots.',
          type: 'Easy',
          explaination: 'Require Δ< 0:\n25 - 12k < 0\n12k > 25\nk > 25/12',
          answer: 'k > 25/12',
        },
        {
          id: 4,
          question:
            'Find the set of values of k for which the quadratic equation 4x² - 2x + k = 0 has no real roots.',
          type: 'Easy',
          explaination: 'Require Δ< 0:\n4 - 16k < 0\nk > 1/4',
          answer: 'k > 1/4',
        },
        {
          id: 5,
          question:
            'Find the set of values of k for which the quadratic equation kx² + 12x + 3 = 0 has exactly one real root.',
          type: 'Medium',
          explaination: 'Require Δ= 0:\n144 - 4(k)(3) = 0\n144 - 12k = 0\nk = 12',
          answer: 'k = 12',
        },
        {
          id: 6,
          question:
            'Find the set of values of k for which the quadratic equation kx² + 20x + 5 = 0 has exactly one real root.',
          type: 'Medium',
          explaination: 'Require Δ= 0:\n400 - 4(k)(5) = 0\n400 - 20k = 0\nk = 20',
          answer: 'k = 20',
        },
        {
          id: 7,
          question:
            'Find the set of values of k for which the quadratic equation 12x² + kx + 3 = 0 has exactly one real root.',
          type: 'Medium',
          explaination: 'Require Δ= 0:\nk² - 4(12)(3) = 0\nk² = 144\nk = ± 12',
          answer: 'k = ± 12',
        },
        {
          id: 8,
          question:
            'Find the set of values of k for which the quadratic equation 20x² + kx + 5 = 0 has exactly one real root.',
          type: 'Medium',
          explaination: 'Require Δ= 0:\nk² - 4(20)(5) = 0\nk² = 400\nk = ± 20',
          answer: 'k = ± 20',
        },
        {
          id: 9,
          question:
            'Find the set of values of k for which the quadratic equation 8x² + kx + 2 = 0 has no real roots.',
          type: 'Medium',
          explaination: 'Require Δ< 0:\nk² - 4(8)(2) < 0\nk² - 64 < 0\n(k-8)(k+8) < 0\n-8 < k < 8',
          answer: '-8 < k < 8',
        },
        {
          id: 10,
          question:
            'Find the set of values of k for which the quadratic equation 3x² + kx + 3 = 0 has no real roots.',
          type: 'Medium',
          explaination: 'Require Δ< 0:\nk² - 36 < 0\n(k-6)(k+6) < 0\n-6 < k < 6',
          answer: '-6 < k < 6',
        },
      ],
      'discriminant-repeated-root': [
        {
          id: 1,
          question:
            'Find the value of k for which the quadratic equation 3x² + 8x + k = 0 has a repeated root.',
          type: 'Medium',
          explaination: 'Require Δ= 0:\n64 - 4(3)(k) = 0\n64 - 12k = 0\nk = 64/12 = 16/3',
          answer: 'k = 16/3',
        },
        {
          id: 2,
          question:
            'For the value of k found in part (a), find the root of the equation 3x² + 8x + k = 0.',
          type: 'Easy',
          explaination: 'With k = 16/3:\nRepeated root at x = -b/2a = -8/6 = -4/3',
          answer: 'x = -4/3',
        },
        {
          id: 3,
          question:
            'The equation 5x² + kx + 20 = 0 has two equal roots. Find the possible values of k.',
          type: 'Medium',
          explaination: 'Require Δ= 0:\nk² - 4(5)(20) = 0\nk² = 400\nk = ± 20',
          answer: 'k = ± 20',
        },
        {
          id: 4,
          question:
            'Find the set of values of k for which the equation 3x² - 5x + 2k = 0 has no real roots.',
          type: 'Medium',
          explaination: 'Require Δ< 0:\n25 - 4(3)(2k) < 0\n25 - 24k < 0\nk > 25/24',
          answer: 'k > 25/24',
        },
        {
          id: 5,
          question:
            'The quadratic equation 2x² + kx + (k - 2) = 0 has equal roots.\n(a) Show that k² - 8k + 16 = 0.\n(b) Hence find the values of k.',
          type: 'Medium',
          explaination:
            '(a) Equal roots ⇒ Δ= 0:\nk² - 4(2)(k-2) = 0\nk² - 8k + 16 = 0 ✓\n(b) (k-4)² = 0 ⇒ k = 4',
          answer: 'k = 4',
        },
        {
          id: 6,
          question:
            'The equation kx² + (k+3)x - 1 = 0 has one real root.\n(a) Show that k² + 10k + 9 = 0.\n(b) Hence find the possible values of k.',
          type: 'Medium',
          explaination:
            '(a) One real root ⇒ Δ= 0:\n(k+3)² - 4(k)(-1) = 0\nk² + 6k + 9 + 4k = 0\nk² + 10k + 9 = 0 ✓\n(b) (k+1)(k+9) = 0\nk = -1 or k = -9',
          answer: 'k = -1 or k = -9',
        },
        {
          id: 7,
          question:
            'The graph of y = x² + ax + 9 has its vertex on the x-axis. Find the possible values of a.',
          type: 'Medium',
          explaination: 'Vertex on x-axis ⇒ Δ= 0:\na² - 36 = 0\na = ± 6',
          answer: 'a = ± 6',
        },
        {
          id: 8,
          question:
            'Find the set of values of k for which the equation kx² - (k-3)x + k = 0 has no real roots.',
          type: 'Hard',
          explaination:
            'Require Δ< 0:\n(k-3)² - 4k² < 0\nk² - 6k + 9 - 4k² < 0\n-3k² - 6k + 9 < 0\nk² + 2k - 3 > 0\n(k+3)(k-1) > 0\nk < -3 or k > 1',
          answer: 'k < -3 or k > 1',
        },
      ],
      'discriminant-two-distinct-roots': [
        {
          id: 1,
          question:
            'Find the set of values of k for which the equation kx² - 3x + 2 = 0 has two distinct real roots.',
          type: 'Medium',
          explaination:
            'Require Δ> 0 and k ≠ 0:\n9 - 8k > 0\nk < 9/8 Also k ≠ 0 (otherwise not quadratic).\nAnswer: k < 9/8, k ≠ 0',
          answer: 'k < 9/8, k ≠ 0',
        },
        {
          id: 2,
          question:
            'Find the set of values of k for which the equation 2x² + kx + 2 = 0 has two distinct real roots.',
          type: 'Medium',
          explaination: 'Require Δ> 0:\nk² - 16 > 0\n(k-4)(k+4) > 0\nk < -4 or k > 4',
          answer: 'k < -4 or k > 4',
        },
        {
          id: 3,
          question:
            'Find the set of values of a for which the equation 3x² + (a+1)x + 4 = 0 has two distinct real roots.',
          type: 'Hard',
          explaination:
            'Require Δ> 0:\n(a+1)² - 48 > 0\n(a+1)² > 48\na+1 | > 4√3\na + 1 < -4√3 or a + 1 > 4√3\na < -1 - 4√3 or a > -1 + 4√3',
          answer: 'a < -1 - 4√3 or a > -1 + 4√3',
        },
      ],
      'discriminant-at-least-one-real-root': [
        {
          id: 1,
          question:
            'Find the set of values of a for which the equation ax² + ax + 3 = 0 has at least one real root.',
          type: 'Hard',
          explaination:
            'Require Δ ≥ 0 and a ≠ 0:\na² - 12a ≥ 0\na(a - 12) ≥ 0\na ≤ 0 or a ≥ 12 Exclude a = 0 (equation becomes 3=0, no solution).\nFinal answer: a < 0 or a ≥ 12',
          answer: 'a < 0 or a ≥ 12',
        },
      ],
      'discriminant-graph-does-not-cross-x-axis': [
        {
          id: 1,
          question:
            'Find the set of values of c for which the graph of y = 2x² - 3x + c does not cross the x-axis.',
          type: 'Medium',
          explaination: 'Graph does not cross x-axis ⇒ Δ< 0:\n9 - 8c < 0\nc > 9/8',
          answer: 'c > 9/8',
        },
      ],
      'discriminant-graph-above-x-axis': [
        {
          id: 1,
          question:
            'Given that the graph of x² + bx + 2b = 0 lies entirely above the x-axis, find the set of possible values of b.',
          type: 'Medium',
          explaination:
            'Entirely above x-axis ⇒ Δ< 0 (and a = 1 > 0 confirmed):\nb² - 8b < 0\nb(b - 8) < 0\n0 < b < 8',
          answer: '0 < b < 8',
        },
        {
          id: 2,
          question: 'For what values of a is the expression x² + ax + 4 always positive?',
          type: 'Medium',
          explaination:
            'Always positive ⇒ opens upward (a_()coeff = 1 > 0) and Δ< 0:\na² - 16 < 0\n-4 < a < 4',
          answer: '-4 < a < 4',
        },
      ],
      'discriminant-graph-entirely-below-x-axis': [
        {
          id: 1,
          question:
            'The graph of y = ax² + 4x + (a - 3) lies entirely below the x-axis. Find the set of possible values of a.',
          type: 'Hard',
          explaination:
            'Need a < 0 (opens downward) AND Δ< 0:\nΔ= 16 - 4a(a-3) = -4a² + 12a + 16 Set Δ< 0:\n4a² - 12a - 16 > 0\na² - 3a - 4 > 0\n(a-4)(a+1) > 0\na < -1 or a > 4 Combined with a < 0: a < -1',
          answer: 'a < -1',
        },
      ],
      'discriminant-tangent-to-parabola': [
        {
          id: 1,
          question:
            'Find the value of k such that the line y = x + k is tangent to the parabola y = x² + 7.',
          type: 'Hard',
          explaination:
            'Set equal:\nx + k = x² + 7\nx² - x + (7 - k) = 0 Tangent ⇒ Δ= 0:\n1 - 4(7-k) = 0\n1 - 28 + 4k = 0\n4k = 27\nk = 27/4',
          answer: 'k = 27/4',
        },
      ],
      'discriminant-line-intersects-circle': [
        {
          id: 1,
          question:
            'Find the set of values of k for which the line y = 2x + k intersects the circle with equation x² + y² = 5.',
          type: 'Hard',
          explaination:
            'Substitute y = 2x + k into x² + y² = 5:\nx² + (2x+k)² = 5\n5x² + 4kx + k² - 5 = 0 Intersects ⇒ Δ ≥ 0:\n16k² - 20(k² - 5) ≥ 0\n-4k² + 100 ≥ 0\nk² ≤ 25\n-5 ≤ k ≤ 5',
          answer: '-5 ≤ k ≤ 5',
        },
      ],
      'discriminant-proof-always-two-roots': [
        {
          id: 1,
          question:
            'Show that the equation 3x² + (a+2)x - 2 = 0 has two distinct roots for all values of a.',
          type: 'Hard',
          explaination:
            'Δ= (a+2)² - 4(3)(-2)\n= (a+2)² + 24 Since (a+2)² ≥ 0 for all a ∈ ℝ, Δ ≥ 24 > 0 for all values of a.\nTherefore the equation always has two distinct real roots. □',
          answer: 'N/A (proof question)',
        },
        {
          id: 2,
          question:
            'If the equation x² + bx + 9 = 0 has no solutions for x, prove that x² + 9x + b = 0 has two solutions for x.',
          type: 'Hard',
          explaination:
            'Given: x² + bx + 9 = 0 has no real roots.\n⇒ Δ₁ = b² - 36 < 0\n⇒ b² < 36\n⇒ -6 < b < 6 For x² + 9x + b = 0:\nΔ₂ = 81 - 4b Since -6 < b < 6, we have 4b < 24.\n∴ Δ₂ = 81 - 4b > 81 -24 = 57 > 0 So x² + 9x + b = 0 has two distinct real solutions. □',
          answer: 'N/A (proof question)',
        },
      ],
      'quadratic-equations-projectile-motion': [
        {
          id: 1,
          question:
            'While playing golf, Daniel chips a ball onto the green. The ball and the green are both at ground level. The height, h metres, of the ball t seconds after being hit is modelled by h = 10t - 5t² until it lands.\nWhen does the ball land?',
          type: 'Hard',
          explaination: 'h=0: t(10-5t)=0 → t=0 or t=2 → lands at t=2 s [M1 A1]',
          answer: 't = 2 s',
        },
        {
          id: 2,
          question:
            'While playing golf, Daniel chips a ball onto the green. The ball and the green are both at ground level. The height, h metres, of the ball t seconds after being hit is modelled by h = 10t - 5t² until it lands.\nFind the maximum height reached by the ball.',
          type: 'Hard',
          explaination: 'Vertex: t=1, h=10-5=5 m [M1 A1]',
          answer: 'h = 5 m',
        },
        {
          id: 3,
          question:
            'While playing golf, Daniel chips a ball onto the green. The ball and the green are both at ground level. The height, h metres, of the ball t seconds after being hit is modelled by h = 10t - 5t² until it lands.\nFor how long is the ball more than 1 m above the ground?',
          type: 'Hard',
          explaination:
            '10t-5t²>1 → 5t²-10t+1<0 → t = (10 ± √80)/10 = 1 ± (√5-1)/...; Duration = 2√5/5 s [M1 M1 A1]',
          answer: '(4√5-4)/10 ≈ 1.49 s (i.e. (2(√5-1))/5 s)',
        },
        {
          id: 4,
          question:
            'A ball is thrown vertically up so that its height above ground t seconds later is given by h = 3.6 + 5.2t - 4.9t². How long does it take for the ball to reach the ground?',
          type: 'Easy',
          explaination:
            'Set h = 0: 4.9t² - 5.2t - 3.6 = 0 Use quadratic formula or GDC.\nDiscard negative root.\nt ≈ 1.65 s',
          answer: 't ≈ 1.65 s',
        },
      ],
      'substitution-quadratic-in-disguise': [
        {
          id: 1,
          question:
            'The approximate stopping distance (in metres) of a car travelling at v km per hour on a dry road is modelled by v/5 + v²/150.\nWhat is the stopping distance of a car travelling at 30 km per hour?',
          type: 'Hard',
          explaination: 'Sub v=30: 30/5+900/150=6+6=12 m',
          answer: '12 m',
        },
        {
          id: 2,
          question:
            'The approximate stopping distance (in metres) of a car travelling at v km per hour on a dry road is modelled by v/5 + v²/150.\nBy using a substitution u = v/5, find the speed that results in a stopping distance of 36 m.',
          type: 'Hard',
          explaination:
            'Let u = v/5, so v²/150 = 25u²/150 = u²/6.\nu + u²/6 = 36 ⇒ u² + 6u - 216 = 0 ⇒ (u + 18)(u - 12) = 0\nu > 0, so u = 12 and v = 5u = 60 km/h',
          answer: 'v = 60 km/h',
        },
        {
          id: 3,
          question:
            'The approximate stopping distance (in metres) of a car travelling at v km per hour on a dry road is modelled by v/5 + v²/150.\nThe approximate stopping distance of a car on an icy road is modelled by v²/25 + v⁴/(6 250 000). Find the speed which results in a stopping distance of 101 m.',
          type: 'Hard',
          explaination: 'Let w=v²: w/25+w²/6250000=101. GDC → v ≈ 46.0 km/h.',
          answer: 'v ≈ 46.0 km/h',
        },
      ],
    },
  },
  {
    'binomial-expansion': {
      title: 'Binomial Expansion',
      'full-expansion': [
        {
          id: 1,
          question: 'Expand and simplify (10-3x)⁴.',
          type: 'Medium',
          explaination:
            '⁴C₀10⁴ + ⁴C₁10³(-3x) + ⁴C₂10²(-3x)² + ⁴C₃10(-3x)³ + ⁴C₄(-3x)⁴ = 10000 - 12000x + 5400x² - 1080x³ + 81x⁴',
          answer: '10000 -12000x + 5400x² -1080x³ + 81x⁴',
        },
        {
          id: 2,
          question: 'Expand and simplify (2x-1)⁵.',
          type: 'Medium',
          explaination:
            '⁵C₀(2x)⁵ + ⁵C₁(2x)⁴(-1) + ⁵C₂(2x)³(-1)² + ⁵C₃(2x)²(-1)³ + ⁵C₄(2x)(-1)⁴ + ⁵C₅(-1)⁵ = 32x⁵ - 80x⁴ + 80x³ - 40x² + 10x -1',
          answer: '32x⁵ - 80x⁴ + 80x³ - 40x² + 10x - 1',
        },
      ],
      'applications-of-expansion': [
        {
          id: 1,
          question: 'Find the first three terms in the expansion of (2+3x)¹⁰.',
          type: 'Medium',
          explaination: '¹⁰C₀2¹⁰ + ¹⁰C₁2⁹(3x) + ¹⁰C₂2⁸(3x)² = 1024 + 15360x + 103680x²',
          answer: '1024 + 15360x + 103680x²',
        },
        {
          id: 2,
          question: 'Hence find an approximate value of 2.003¹⁰, correct to the nearest integer.',
          type: 'Medium',
          explaination:
            'Let x = 0.001: (2 + 3(0.001))¹⁰ = (2.003)¹⁰\n≈ 1024 + 15360(0.001) + 103680(0.001)²\n= 1024 + 15.36 + 0.1037 ≈ 1039',
          answer: '1039',
        },
        {
          id: 3,
          question:
            'Find the first four terms, in ascending powers of x, in the expansion of (3-2x)⁹.',
          type: 'Medium',
          explaination:
            '⁹C₀3⁹ + ⁹C₁3⁸(-2x) + ⁹C₂3⁷(-2x)² + ⁹C₃3⁶(-2x)³ = 19683 - 118098x + 314928x² -489888x³',
          answer: '19683 -118098x + 314928x² -489888x³',
        },
        {
          id: 4,
          question: 'Hence find the value of 2.98⁹ correct to one decimal place.',
          type: 'Medium',
          explaination:
            'Let x=0.01: (3-2(0.01))⁹ = (2.98)⁹\n≈ 19683 - 118098(0.01) + 314928(0.0001) - 489888(0.000001)\n= 19683 - 1180.98 + 31.49 - 0.49 ≈ 18533.0',
          answer: '18533.0',
        },
        {
          id: 5,
          question:
            'Find the first three terms, in ascending powers of x, in the expansion of (2+x)⁷.',
          type: 'Medium',
          explaination: '⁷C₀2⁷ + ⁷C₁2⁶ x + ⁷C₂2⁵ x² = 128 + 448x + 672x²',
          answer: '128 + 448x + 672x²',
        },
        {
          id: 6,
          question: 'Hence expand (2+x)⁷(3-x) up to and including the term in x².',
          type: 'Medium',
          explaination:
            '(128 + 448x + 672x²)(3 - x) Constant: 128 × 3 = 384\nx: 448 × 3 + 128 × (-1) = 1344 - 128 = 1216\nx²: 672 × 3 + 448 × (-1) = 2016 - 448 = 1568 Answer: 384 + 1216x + 1568x²',
          answer: '384 + 1216x + 1568x²',
        },
        {
          id: 7,
          question: 'Find the first three terms in the expansion of (2-3x)⁵.',
          type: 'Medium',
          explaination: '⁵C₀2⁵ + ⁵C₁2⁴(-3x) + ⁵C₂2³(-3x)² = 32 - 240x + 720x²',
          answer: '32 - 240x + 720x²',
        },
        {
          id: 8,
          question: 'Hence find the coefficient of x² in the expansion of (2-3x)⁵(1+2x).',
          type: 'Medium',
          explaination: '(32 - 240x + 720x²)(1 + 2x)\nx² term: 720(1) + (-240)(2) = 720 -480 = 240',
          answer: '240',
        },
        {
          id: 9,
          question: 'Expand and simplify (2+x)⁴ - (2-x)⁴.',
          type: 'Hard',
          explaination:
            '(2+x)⁴ = 16 + 32x + 24x² + 8x³ + x⁴ (2-x)⁴ = 16 - 32x + 24x² - 8x³ + x⁴ Difference: 64x + 16x³',
          answer: '64x + 16x³',
        },
        {
          id: 10,
          question: 'Hence find the exact value of 2.01⁴ - 1.99⁴.',
          type: 'Hard',
          explaination: 'Let x = 0.01: 64(0.01) + 16(0.01)³ = 0.64 + 0.000016 = 0.640016',
          answer: '0.640016',
        },
      ],
    },
  },
  {
    geometry: {
      title: 'Geometry',
      'gradient-of-a-line': [
        {
          id: 1,
          question: 'Find the gradient of the line connecting A(1, 5) and B(3, 7).',
          type: 'Easy',
          explaination: 'm = (7-5)/(3-1) = 2/2 = 1',
          answer: 'm = 1',
        },
        {
          id: 2,
          question: 'Find the gradient of the line connecting A(2, 2) and B(5, 8).',
          type: 'Easy',
          explaination: 'm = (8-2)/(5-2) = 6/3 = 2',
          answer: 'm = 2',
        },
        {
          id: 3,
          question: 'Find the gradient of the line connecting A(4, 1) and B(2, 7).',
          type: 'Easy',
          explaination: 'm = (7-1)/(2-4) = 6/-2 = -3',
          answer: 'm = -3',
        },
        {
          id: 4,
          question: 'Find the gradient of the line connecting A(7, 3) and B(5, 5).',
          type: 'Easy',
          explaination: 'm = (5-3)/(5-7) = 2/-2 = -1',
          answer: 'm = -1',
        },
        {
          id: 5,
          question: 'Find the gradient of the line connecting A(3, 3) and B(7, 5).',
          type: 'Easy',
          explaination: 'm = (5-3)/(7-3) = 2/4 = 1/2',
          answer: 'm = 1/2',
        },
        {
          id: 6,
          question: 'Find the gradient of the line connecting A(-1, 8) and B(5, 5).',
          type: 'Easy',
          explaination: 'm = (5-8)/(5-(-1)) = -3/6 = -1/2',
          answer: 'm = -1/2',
        },
      ],
      'intercepts-of-a-line': [
        {
          id: 1,
          question:
            'Find the coordinates of the points where the line y = 3x - 6 crosses the x- and y-axes.',
          type: 'Easy',
          explaination:
            'y-intercept: set x=0: y=-6, so (0,-6). x-intercept: set y=0: 3x=6, x=2, so (2,0).',
          answer: 'x-intercept:\n(2, 0); y-intercept: (0, -6)',
        },
        {
          id: 2,
          question:
            'Find the coordinates of the points where the line y = 8 - 2x crosses the x- and y-axes.',
          type: 'Easy',
          explaination: 'y-intercept: (0, 8). x-intercept:\n8-2x=0 ⇒ x=4, so (4,0).',
          answer: 'x-intercept:\n(4, 0); y-intercept: (0, 8)',
        },
        {
          id: 3,
          question:
            'Find the coordinates of the points where the line 2y = 5 - x crosses the x- and y-axes.',
          type: 'Easy',
          explaination: 'y-intercept: set x=0: 2y=5, y=5/2. x-intercept: set y=0: x=5.',
          answer: 'x-intercept:\n(5, 0); y-intercept: (0, 5/2)',
        },
        {
          id: 4,
          question:
            'Find the coordinates of the points where the line 3y = 2x + 6 crosses the x- and y-axes.',
          type: 'Easy',
          explaination: 'y-intercept: y=2, so (0,2). x-intercept: 2x+6=0, x=-3.',
          answer: 'x-intercept:\n(-3, 0); y-intercept: (0, 2)',
        },
        {
          id: 5,
          question:
            'Find the coordinates of the points where the line 4x + 3y - 12 = 0 crosses the x- and y-axes.',
          type: 'Medium',
          explaination: 'x-int: set y=0: 4x=12, x=3. y-int: set x=0: 3y=12, y=4.',
          answer: 'x-intercept:\n(3, 0); y-intercept: (0, 4)',
        },
        {
          id: 6,
          question:
            'Find the coordinates of the points where the line 2x - 3y - 9 = 0 crosses the x- and y-axes.',
          type: 'Medium',
          explaination: 'x-int: 2x=9, x=9/2. y-int: -3y=9, y=-3.',
          answer: 'x-intercept:\n(9/2, 0); y-intercept: (0, -3)',
        },
      ],
      'equation-of-a-line': [
        {
          id: 1,
          question:
            'Find the equation of the straight line with gradient 2 and y-intercept 3.\nGive your answer in the form ax + by + d = 0.',
          type: 'Easy',
          explaination: 'y = 2x + 3 ⇒ 2x - y + 3 = 0',
          answer: '2x - y + 3 = 0',
        },
        {
          id: 2,
          question:
            'Find the equation of the straight line with gradient 5 and y-intercept 1.\nGive your answer in the form ax + by + d = 0.',
          type: 'Easy',
          explaination: 'y = 5x + 1 ⇒ 5x - y + 1 = 0',
          answer: '5x - y + 1 = 0',
        },
        {
          id: 3,
          question:
            'Find the equation of the straight line with gradient -2 and y-intercept 4.\nGive your answer in the form ax + by + d = 0.',
          type: 'Easy',
          explaination: 'y = -2x + 4 ⇒ 2x + y - 4 = 0',
          answer: '2x + y - 4 = 0',
        },
        {
          id: 4,
          question:
            'Find the equation of the straight line with gradient -3 and y-intercept 7.\nGive your answer in the form ax + by + d = 0.',
          type: 'Easy',
          explaination: 'y = -3x + 7 ⇒ 3x + y - 7 = 0',
          answer: '3x + y - 7 = 0',
        },
        {
          id: 5,
          question:
            'Find the equation of the straight line with gradient 1/2 and y-intercept 7/2. Give your answer in the form ax + by + d = 0.',
          type: 'Medium',
          explaination: 'y = (1/2)x + 7/2.\nMultiply by 2: 2y = x + 7 ⇒ x - 2y + 7 = 0.',
          answer: 'x - 2y + 7 = 0',
        },
        {
          id: 6,
          question:
            'Find the equation of the straight line with gradient -1/3 and y-intercept 3. Give your answer in the form ax + by + d = 0.',
          type: 'Medium',
          explaination: 'y = -(1/3)x + 3. Multiply by 3: 3y = -x + 9 ⇒ x + 3y - 9 = 0.',
          answer: 'x + 3y - 9 = 0',
        },
      ],
      'gradient-intercept-form': [
        {
          id: 1,
          question:
            'Rewrite 2x - y + 5 = 0 in the form y = mx + c and state the gradient and y- intercept.',
          type: 'Easy',
          explaination: '2x - y + 5 = 0 ⇒ y = 2x + 5. So m=2, c=5.',
          answer: 'y = 2x + 5; gradient = 2, y- intercept = 5',
        },
        {
          id: 2,
          question:
            'Rewrite 3x - y + 4 = 0 in the form y = mx + c and state the gradient and y- intercept.',
          type: 'Easy',
          explaination: 'y = 3x + 4. So m=3, c=4.',
          answer: 'y = 3x + 4; gradient = 3, y- intercept = 4',
        },
        {
          id: 3,
          question:
            'Rewrite 2x + 3y + 6 = 0 in the form y = mx + c and state the gradient and y- intercept.',
          type: 'Medium',
          explaination: '3y = -2x - 6 ⇒ y = -(2/3)x - 2.',
          answer: 'y = -(2/3)x - 2; gradient = -2/3, y-intercept = -2',
        },
        {
          id: 4,
          question:
            'Rewrite 5x + 2y - 10 = 0 in the form y = mx + c and state the gradient and y- intercept.',
          type: 'Medium',
          explaination: '2y = -5x + 10 ⇒ y = -(5/2)x + 5.',
          answer: 'y = -(5/2)x + 5; gradient = -5/2, y-intercept = 5',
        },
        {
          id: 5,
          question:
            'Rewrite 3x + 5y - 7 = 0 in the form y = mx + c and state the gradient and y- intercept.',
          type: 'Medium',
          explaination: '5y = -3x + 7 ⇒ y = -(3/5)x + 7/5.',
          answer: 'y = -(3/5)x + 7/5; gradient = -3/5, y- intercept = 7/5',
        },
        {
          id: 6,
          question:
            'Rewrite 11x + 2y + 5 = 0 in the form y = mx + c and state the gradient and y- intercept.',
          type: 'Medium',
          explaination: '2y = -11x - 5 ⇒ y = -(11/2)x - 5/2.',
          answer: 'y = -(11/2)x - 5/2; gradient = -11/2, y- intercept = -5/2',
        },
        {
          id: 7,
          question: 'A line has equation 5x + 7y = 17. Find the gradient of the line.',
          type: 'Medium',
          explaination: '7y = -5x + 17 ⇒ y = -(5/7)x + 17/7. Gradient = -5/7.',
          answer: 'm = -5/7',
        },
        {
          id: 8,
          question: 'A line has equation 5x + 7y = 17. Find the x-intercept of the line.',
          type: 'Medium',
          explaination: 'Set y=0: 5x=17 ⇒ x=17/5.',
          answer: 'x = 17/5',
        },
        {
          id: 9,
          question: 'A straight line l₁ has equation 7x + 2y = 42. Find the gradient of l₁.',
          type: 'Medium',
          explaination: '2y = -7x + 42 ⇒ y = -(7/2)x + 21. Gradient = -7/2.',
          answer: 'm = -7/2',
        },
      ],
      'equation-of-a-line-through-a-point': [
        {
          id: 1,
          question: 'Find the equation of the line with gradient 2 passing through (1, 4).',
          type: 'Easy',
          explaination: 'y - 4 = 2(x - 1) ⇒ y = 2x + 2.',
          answer: 'y = 2x + 2',
        },
        {
          id: 2,
          question: 'Find the equation of the line with gradient 3 passing through (5, 2).',
          type: 'Easy',
          explaination: 'y - 2 = 3(x - 5) ⇒ y = 3x -13.',
          answer: 'y = 3x - 13',
        },
        {
          id: 3,
          question: 'Find the equation of the line with gradient -5 passing through (-1, 3).',
          type: 'Medium',
          explaination: 'y - 3 = -5(x + 1) ⇒ y = -5x- 2.',
          answer: 'y = -5x - 2',
        },
        {
          id: 4,
          question: 'Find the equation of the line with gradient -2 passing through (2, -1).',
          type: 'Medium',
          explaination: 'y + 1 = -2(x - 2) ⇒ y = -2x + 3.',
          answer: 'y = -2x + 3',
        },
        {
          id: 5,
          question: 'Find the equation of the line with gradient 2/3 passing through (1, -1).',
          type: 'Medium',
          explaination: 'y + 1 = (2/3)(x - 1) ⇒ y = (2/3)x - 5/3.',
          answer: 'y = (2/3)x - 5/3',
        },
        {
          id: 6,
          question: 'Find the equation of the line with gradient -3/4 passing through (3, 1).',
          type: 'Medium',
          explaination: 'y - 1 = -(3/4)(x - 3) ⇒ y = -(3/4)x + 13/4.',
          answer: 'y = -(3/4)x + 13/4',
        },
        {
          id: 7,
          question:
            'The midpoint of the line segment connecting points P(3a+1, 2a) and Q(5-b, b+3) has coordinates (4, -5).\nFind the equation of the line connecting P and Q.',
          type: 'Hard',
          explaination:
            'Using a=-11/5, b=-43/5:\nP = (-28/5, -22/5), Q = (68/5, -28/5)\nm = (-28/5+22/5)/(68/5+28/5) = (-6/5)/(96/5) = -6/96 = -1/16\ny+22/5 = -(1/16)(x+28/5) Simplify to required form.',
          answer: 'y = -(1/16)x - 103/80 (or equivalent exact form)',
        },
      ],
      'line-through-two-points': [
        {
          id: 1,
          question:
            'Find the equation of the line connecting A(3, 1) and B(5, 5) in the form ax + by + c = 0.',
          type: 'Medium',
          explaination: 'm = (5-1)/(5-3) = 2. Using (3,1): y - 1 = 2(x-3) ⇒ 2x - y - 5 = 0.',
          answer: '2x - y - 5 = 0',
        },
        {
          id: 2,
          question:
            'Find the equation of the line connecting A(-2, 3) and B(1, 9) in the form ax + by + c = 0.',
          type: 'Medium',
          explaination: 'm = (9-3)/(1-(-2)) = 2. Using (1,9): y-9=2(x-1) ⇒ 2x-y+7=0.',
          answer: '2x - y + 7 = 0',
        },
        {
          id: 3,
          question:
            'Find the equation of the line connecting A(3, 7) and B(5, 5) in the form ax + by + c = 0.',
          type: 'Medium',
          explaination: 'm = (5-7)/(5-3) = -1. Using (3,7): y-7=-(x-3) ⇒ x+y-10=0.',
          answer: 'x + y - 10 = 0',
        },
        {
          id: 4,
          question:
            'Find the equation of the line connecting A(-2, 4) and B(-1, 1) in the form ax + by + c = 0.',
          type: 'Medium',
          explaination: 'm = (1-4)/(-1-(-2)) = -3. Using (-1,1): y-1=-3(x+1) ⇒ 3x+y+2=0.',
          answer: '3x + y + 2 = 0',
        },
        {
          id: 5,
          question:
            'Find the equation of the line connecting A(5, 1) and B(1, 3) in the form ax + by + c = 0.',
          type: 'Medium',
          explaination: 'm = (3-1)/(1-5) = -1/2.\nUsing (1,3): y-3=-(1/2)(x-1) ⇒ x+2y-7=0.',
          answer: 'x + 2y - 7 = 0',
        },
        {
          id: 6,
          question:
            'Find the equation of the line connecting A(-2, 3) and B(6, -1) in the form ax + by + c = 0.',
          type: 'Medium',
          explaination: 'm = (-1-3)/(6-(-2)) = -1/2. y-3=-(1/2)(x+2) ⇒ x+2y-4=0.',
          answer: 'x + 2y - 4 = 0',
        },
        {
          id: 7,
          question:
            'Find the equation of the line connecting A(3, 1) and B(7, -2) in the form ax + by + c = 0.',
          type: 'Medium',
          explaination: 'm = (-2-1)/(7-3) = -3/4.\ny-1=-(3/4)(x-3) ⇒ 3x+4y-13=0.',
          answer: '3x + 4y - 13 = 0',
        },
        {
          id: 8,
          question:
            'Find the equation of the line connecting A(-2, 7) and B(3, -1) in the form ax + by + c = 0.',
          type: 'Medium',
          explaination: 'm = (-1-7)/(3-(-2)) = -8/5. y-7=-(8/5)(x+2) ⇒ 8x+5y-19=0.',
          answer: '8x + 5y - 19 = 0',
        },
        {
          id: 9,
          question:
            'A straight line connects points A(-3, 1) and B(7, 3). Find the gradient of the line.',
          type: 'Medium',
          explaination: 'm = (3-1)/(7-(-3)) = 2/10 = 1/5.',
          answer: 'm = 1/5',
        },
        {
          id: 10,
          question:
            'A straight line connects points A(-3, 1) and B(7, 3). Find the equation of the line in the form ax + by = c, where a, b and c are integers.',
          type: 'Medium',
          explaination: 'y-1=(1/5)(x+3) ⇒ 5y-5=x+3 ⇒ x-5y=-8.',
          answer: 'x - 5y = -8',
        },
      ],
      'perpendicular-lines': [
        {
          id: 1,
          question:
            'Find the equation of the line perpendicular to y = x + 2 passing through (0, 5).',
          type: 'Medium',
          explaination: 'Perpendicular gradient: m=-1.\nThrough (0,5): y=-x+5.',
          answer: 'y = -x + 5',
        },
        {
          id: 2,
          question:
            'Find the equation of the line perpendicular to y = 3x + 2 passing through (0, 8).',
          type: 'Medium',
          explaination: 'm=-1/3. Through (0,8): y=-(1/3)x+8.',
          answer: 'y = -(1/3)x + 8',
        },
        {
          id: 3,
          question:
            'Find the equation of the line perpendicular to y = (1/4)x + 2 passing through (1, 5).',
          type: 'Medium',
          explaination: 'm=-4. y-5=-4(x-1) ⇒ y=-4x+9.',
          answer: 'y = -4x + 9',
        },
        {
          id: 4,
          question:
            'Find the equation of the line perpendicular to y = -(1/3)x passing through (2, 4).',
          type: 'Medium',
          explaination: 'm=3. y-4=3(x-2) ⇒ y=3x-2.',
          answer: 'y = 3x - 2',
        },
        {
          id: 5,
          question:
            'Find the equation of the line perpendicular to x - 5y - 3 = 0 passing through (-1, 2).',
          type: 'Medium',
          explaination: 'x-5y-3=0 ⇒ y=(1/5)x-3/5, so m_⊥=-5.\ny-2=-5(x+1) ⇒ y=-5x-3.',
          answer: 'y = -5x - 3',
        },
        {
          id: 6,
          question:
            'Find the equation of the line perpendicular to x - 2y - 3 = 0 passing through (2, 3).',
          type: 'Medium',
          explaination: 'mₗᵢₙₑ=1/2, so m_⊥=-2. y-3=-2(x-2) ⇒ y=-2x+7.',
          answer: 'y = -2x + 7',
        },
        {
          id: 7,
          question:
            'Find the equation of the line perpendicular to 2x + y - 7 = 0 passing through (1, 3).',
          type: 'Medium',
          explaination: 'mₗᵢₙₑ=-2, so m_⊥ =1/2. y-3=(1/2)(x-1) ⇒ y=(1/2)x+5/2.',
          answer: 'y = (1/2)x + 5/2',
        },
        {
          id: 8,
          question:
            'Find the equation of the line perpendicular to 3x + y + 1 = 0 passing through (-2, -4).',
          type: 'Medium',
          explaination: 'mₗᵢₙₑ=-3, m_⊥=1/3. y+4=(1/3)(x+2) ⇒ y=(1/3)x-10/3.',
          answer: 'y = (1/3)x - 10/3',
        },
        {
          id: 9,
          question:
            'Find the equation of the line perpendicular to 5x + 2y = 0 passing through (-1, 7).',
          type: 'Hard',
          explaination: 'mₗᵢₙₑ=-5/2, m_⊥ =2/5. y-7=(2/5)(x+1) ⇒ y=(2/5)x+37/5.',
          answer: 'y = (2/5)x + 37/5',
        },
        {
          id: 10,
          question:
            'Find the equation of the line perpendicular to 3x - 2y = 0 passing through (3, -3).',
          type: 'Hard',
          explaination: 'mₗᵢₙₑ=3/2, m_⊥ =-2/3. y+3=-(2/3)(x-3) ⇒ y=-(2/3)x-1.',
          answer: 'y = -(2/3)x - 1',
        },
        {
          id: 11,
          question:
            'Calculate the gradient of the line passing through the points A(1, -7) and B(5, 0).',
          type: 'Medium',
          explaination: 'm = (0-(-7))/(5-1) = 7/4.',
          answer: 'm = 7/4',
        },
        {
          id: 12,
          question:
            'Find the equation of the line through the point C(8, 3) which is perpendicular to the line AB, where A(1,-7) and B(5,0).\nGive your answer in the form y = mx + c.',
          type: 'Medium',
          explaination: 'm_AB=7/4, so m_⊥=-4/7. y-3=-(4/7)(x-8) ⇒ y=-(4/7)x+53/7.',
          answer: 'y = -(4/7)x + 53/7',
        },
        {
          id: 13,
          question:
            'A straight line l₁ has equation 7x + 2y = 42.\nFind the equation of the line l₂ which passes through P(8, -5) and is perpendicular to l₁, where l₁: 7x + 2y = 42. Give your answer in the form y = mx + c.',
          type: 'Hard',
          explaination: 'm_(l₁)=-7/2, so m_⊥=2/7. y+5=(2/7)(x-8) ⇒ y=(2/7)x-51/7.',
          answer: 'y = (2/7)x - 51/7',
        },
      ],
      'intersection-of-lines': [
        {
          id: 1,
          question: 'Find the point of intersection of the lines x + 2y = 5 and x - 2y = -3.',
          type: 'Easy',
          explaination: 'Add equations: 2x = 2 ⇒ x=1. Substitute: 1+2y=5 ⇒ y=2.',
          answer: '(1, 2)',
        },
        {
          id: 2,
          question: 'Find the point of intersection of the lines 2x + 3y = 13 and x - y = 4.',
          type: 'Easy',
          explaination: 'From 2nd: x=y+4. Sub: 2(y+4) +3y=13 ⇒ 5y=5 ⇒ y=1, x=5.',
          answer: '(5, 1)',
        },
        {
          id: 3,
          question: 'Find the point of intersection of the lines y = x + 2 and y = 4 - x.',
          type: 'Easy',
          explaination: 'x+2=4-x ⇒ 2x=2 ⇒ x=1, y=3.',
          answer: '(1, 3)',
        },
        {
          id: 4,
          question: 'Find the point of intersection of the lines y = x + 3 and y = 7 - x.',
          type: 'Easy',
          explaination: 'x+3=7-x ⇒ 2x=4 ⇒ x=2, y=5.',
          answer: '(2, 5)',
        },
        {
          id: 5,
          question: 'Find the point of intersection of the lines y = 2x + 1 and y = x + 3.',
          type: 'Easy',
          explaination: '2x+1=x+3 ⇒ x=2, y=5.',
          answer: '(2, 5)',
        },
        {
          id: 6,
          question: 'Find the point of intersection of the lines y = 3x + 5 and y = x - 1.',
          type: 'Easy',
          explaination: '3x+5=x-1 ⇒ 2x=-6 ⇒ x=-3, y=-4.',
          answer: '(-3, -4)',
        },
        {
          id: 7,
          question: 'Find the point of intersection of the lines y = 3 - 2x and y = 3x + 1.',
          type: 'Medium',
          explaination: '3-2x=3x+1 ⇒ 2=5x ⇒ x=2/5, y=11/5.',
          answer: '(2/5, 11/5)',
        },
        {
          id: 8,
          question: 'Find the point of intersection of the lines y = 7 - 3x and y = 2x - 4.',
          type: 'Medium',
          explaination: '7-3x=2x-4 ⇒ 11=5x ⇒ x=11/5, y=2(11/5)-4=-9/5.',
          answer: '(11/5, -9/5) i. e. (2.2, -1.8)',
        },
        {
          id: 9,
          question:
            'Line l₁ has gradient -3/2 and crosses the y-axis at the point (0, -6).\nLine l₂ passes through the points (-5, 1) and (7, -2).\nWrite down the equation of l₁.',
          type: 'Hard',
          explaination: 'y=-(3/2)x-6 (gradient and y-intercept given directly).',
          answer: 'y = -(3/2)x - 6',
        },
        {
          id: 10,
          question:
            'Line l₁ has gradient -3/2 and crosses the y-axis at the point (0, -6).\nLine l₂ passes through the points (-5, 1) and (7, -2).\nPart a): Write down the equation of l₁. → y = -(3/2)x - 6\nFind the equation of l₂, giving your answer in the form ax + by = c.',
          type: 'Hard',
          explaination: 'm_(l₂)=(-2-1)/(7-(-5))=-3/12=-1/4. y-1=-(1/4)(x+5) ⇒ 4y-4=-x-5 ⇒ x+4y=-1.',
          answer: 'x + 4y = -1',
        },
        {
          id: 11,
          question:
            'Line l₁ has gradient -3/2 and crosses the y-axis at the point (0, -6).\nLine l₂ passes through the points (-5, 1) and (7, -2).\nFind the coordinates of the point of intersection of l₁ and l₂.',
          type: 'Hard',
          explaination:
            'Substitute y=-(3/2)x-6 into x+4y=-1:\nx+4(-(3/2)x-6)=-1 ⇒ x-6x-24=-1 ⇒ -5x=23 ⇒ x=-23/5.\ny=-(3/2)(-23/5)-6=69/10-6=9/10.\nIntersection: (-23/5, 9/10).',
          answer: '(-23/5, 9/10)',
        },
        {
          id: 12,
          question:
            'Line l₁ has equation 4x - 7y = 35 and line l₂ has equation 7x + 4y = -20.\nFind the coordinates of P, the point of intersection of l₁ and l₂.',
          type: 'Medium',
          explaination:
            '4x-7y=35 (1)\n7x+4y=-20 (2)\n4 × (1): 16x-28y=140\n7 × (2): 49x+28y=-140 Adding: 65x=0 ⇒ x=0 Sub into (1): -7y=35 ⇒ y=-5\nP(0, -5)',
          answer: 'P(0, -5)',
        },
      ],
      'coordinates-and-lines': [],
      'gradient-and-parallel-lines': [
        {
          id: 1,
          question: 'Find the equation of the line parallel to y = 3x + 2 passing through (0, 4).',
          type: 'Easy',
          explaination: 'Same gradient m=3. Through (0,4): y = 3x + 4.',
          answer: 'y = 3x + 4',
        },
        {
          id: 2,
          question: 'Find the equation of the line parallel to y = -x + 2 passing through (0, 9).',
          type: 'Easy',
          explaination: 'Same gradient m=-1. Through (0,9): y = -x + 9.',
          answer: 'y = -x + 9',
        },
        {
          id: 3,
          question:
            'Find the equation of the line parallel to y = 1.5x + 4 passing through (1, 5).',
          type: 'Easy',
          explaination: 'm=1.5. y-5=1.5(x-1) ⇒ y=1.5x+3.5.',
          answer: 'y = 1.5x + 3.5',
        },
        {
          id: 4,
          question:
            'Find the equation of the line parallel to y = 0.5x - 3 passing through (-1, -3).',
          type: 'Easy',
          explaination: 'm=0.5. y+3=0.5(x+1) ⇒ y=0.5x-2.5.',
          answer: 'y = 0.5x -2.5',
        },
        {
          id: 5,
          question:
            'Find the equation of the line parallel to x - y -3 = 0 passing through (2, -4).',
          type: 'Medium',
          explaination: 'Rewrite: y=x-3, so m=1.\ny+4=1(x-2) ⇒ y=x-6.',
          answer: 'y = x - 6',
        },
        {
          id: 6,
          question:
            'Find the equation of the line parallel to 2x - y- 5 = 0 passing through (3, -1).',
          type: 'Medium',
          explaination: 'm=2. y+1=2(x-3) ⇒ y=2x-7.',
          answer: 'y = 2x - 7',
        },
        {
          id: 7,
          question:
            'Find the equation of the line parallel to x + 3y - 1 = 0 passing through (1, 1).',
          type: 'Medium',
          explaination: 'm=-1/3. y-1=-(1/3)(x-1) ⇒ y=-(1/3)x+4/3.',
          answer: 'y = -(1/3)x + 4/3',
        },
        {
          id: 8,
          question:
            'Find the equation of the line parallel to x + 5y + 4 = 0 passing through (-3, -1).',
          type: 'Medium',
          explaination: 'm=-1/5. y+1=-(1/5)(x+3) ⇒ y=-(1/5)x-8/5.',
          answer: 'y = -(1/5)x - 8/5',
        },
        {
          id: 9,
          question:
            'Find the equation of the line parallel to 2x -5y - 3 = 0 passing through (5, 2).',
          type: 'Medium',
          explaination: 'm=2/5. y-2=(2/5)(x-5) ⇒ y=(2/5)x.',
          answer: 'y = (2/5)x',
        },
        {
          id: 10,
          question:
            'Find the equation of the line parallel to 3x + 4y - 7 = 0 passing through (-2, 1).',
          type: 'Medium',
          explaination: 'm=-3/4. y-1=-(3/4)(x+2) ⇒ y=-(3/4)x-1/2.',
          answer: 'y = -(3/4)x - 1/2',
        },
        {
          id: 11,
          question:
            'Consider a quadrilateral with vertices A(-4, 3), B(3, 8), C(5, -1) and D(-9, -11).\na) Show that the sides AB and CD are parallel.\nb) Show that ABCD is not a parallelogram.',
          type: 'Hard',
          explaination:
            'a) m_AB=(8-3)/(3-(-4))=5/7. m_CD=(-11-(-1))/(-9-5)=-10/-14=5/7. Since gradients are equal, AB ∥ CD.\nb) m_BC=(-1-8)/(5-3)=-9/2. m_AD=(-11-3)/(-9-(-4)) =-14/-5=14/5. Since m_BC ≠ m_AD, BC is not parallel to AD, so ABCD is not a parallelogram.',
          answer:
            'a) Shown: gradient AB = gradient CD = 5/7\nb) Shown: gradient BC = -9/2 ≠ gradient AD = 14/5, so ABCD is not a parallelogram',
        },
      ],
    },
  },
  {
    applications: {
      title: 'Applications',
      'gradient-in-context': [
        {
          id: 1,
          question:
            'A mountain is modelled as a cone of height 8800 m and base width 24000 m.\nBased on this model, what is the gradient of the mountain?',
          type: 'Easy',
          explaination:
            'The mountain is symmetric, so horizontal distance from base to apex = 12000 m. Gradient = 8800/12000 = 11/15 ≈ 0.733.',
          answer: '≈ 0.733',
        },
        {
          id: 2,
          question:
            'A drawbridge consists of a straight plank pivoted at one end. When the other end of the bridge is 3.5 m above the horizontal, the plank is at a gradient of 0.7. Find the length of the plank.',
          type: 'Medium',
          explaination:
            'Gradient = rise/run = 0.7. Rise = 3.5 m.\nHorizontal run = 3.5/0.7 = 5 m.\nLength of plank = √(5² + 3.5²) = √(25 + 12.25) = √37.25 ≈ 6.10 m.',
          answer: '≈ 6.10 m',
        },
      ],
      'hookes-law-linear-models': [
        {
          id: 1,
          question:
            "Hooke's law states that the force (F Newtons) required to stretch a spring x metres is given by F = kx.\nState the units of k.",
          type: 'Medium',
          explaination: 'Units of k: F/x = N/m = N m⁻¹.',
          answer: 'N/m (Newtons per metre)',
        },
        {
          id: 2,
          question:
            "Hooke's law states that the force (F Newtons) required to stretch a spring x metres is given by F = kx.\nIf the numerical value of k is 0.3, find the force required to extend the spring by 0.06 m.",
          type: 'Medium',
          explaination: 'F=0.3 × 0.06=0.018 N.',
          answer: 'F = 0.018 N',
        },
        {
          id: 3,
          question:
            "Hooke's law states that the force (F Newtons) required to stretch a spring x metres is given by F = kx.\nWould a stiffer spring have a larger, smaller or the same value of k?",
          type: 'Medium',
          explaination: 'Stiffer spring ⇒ larger k.',
          answer: 'Larger value of k',
        },
        {
          id: 4,
          question:
            "Hooke's law states that the force (F Newtons) required to stretch a spring x metres is given by F = kx.\nThe spring breaks when a force of 0.14 N is applied. How much has it extended at the point of breaking?",
          type: 'Medium',
          explaination: '0.14=0.3x ⇒ x=0.14/0.3 ≈ 0.467 m.',
          answer: 'x ≈ 0.467 m',
        },
      ],
    },
  },
  {
    'functions-graphs': {
      title: 'Functions & Graphs',
      'quadratic-graphs-matching': [],
      'sketching-quadratic-graphs': [
        {
          id: 1,
          question: 'Sketch the graph of y = x² - 5x + 6, labelling all axis intercepts.',
          type: 'Easy',
          explaination:
            'Factorise: y = (x-2)(x-3) x-intercepts: set y=0: x=2 and x=3. y-intercept: set x=0: y=6.\nOpening: upward (positive leading coefficient).\nSketch: U-shape crossing x-axis at 2 and 3, y-intercept at 6.',
          answer: 'x-intercepts: x = 2, x = 3; y-intercept: (0, 6)',
        },
        {
          id: 2,
          question: 'Sketch the graph of y = x² - 6x + 8, labelling all axis intercepts.',
          type: 'Easy',
          explaination:
            'Factorise: y = (x-2)(x-4) x-intercepts: x=2, x=4. y-intercept: y=8.\nSketch: U-shape crossing at 2 and 4, y-intercept 8.',
          answer: 'x-intercepts: x = 2, x = 4; y-intercept: (0, 8)',
        },
        {
          id: 3,
          question: 'Sketch the graph of y = x² + x - 6, labelling all axis intercepts.',
          type: 'Easy',
          explaination: 'Factorise: y=(x+3)(x-2). Roots: x=-3, x=2. y-intercept: −6. U-shape.',
          answer: 'x-intercepts: x = -3, x = 2; y-intercept: (0, -6)',
        },
        {
          id: 4,
          question: 'Sketch the graph of y = x² - x - 12, labelling all axis intercepts.',
          type: 'Easy',
          explaination: 'Factorise: y=(x-4)(x+3). Roots: x=-3, x=4. y-intercept: −12. U-shape.',
          answer: 'x-intercepts: x = -3, x = 4; y-intercept: (0, -12)',
        },
        {
          id: 5,
          question: 'Sketch the graph of y = 2x² + 10x + 8, labelling all axis intercepts.',
          type: 'Easy',
          explaination:
            'Factor out 2: y=2(x²+5x+4)=2(x+4)(x+1). Roots: x=-4, x=-1. y-intercept: 8.',
          answer: 'x-intercepts: x = -4, x = -1; y-intercept: (0, 8)',
        },
        {
          id: 6,
          question: 'Sketch the graph of y = 2x² + 10x + 12, labelling all axis intercepts.',
          type: 'Easy',
          explaination: 'y=2(x²+5x+6)=2(x+3)(x+2). Roots:\nx=-3, x=-2. y-intercept: 12.',
          answer: 'x-intercepts: x = -3, x = -2; y-intercept: (0, 12)',
        },
        {
          id: 7,
          question: 'Sketch the graph of y = 3x² - 6x - 45, labelling all axis intercepts.',
          type: 'Medium',
          explaination: 'y=3(x²-2x-15)=3(x-5)(x+3). Roots:\nx=5, x=-3. y-intercept: −45.',
          answer: 'x-intercepts: x = -3, x = 5; y-intercept: (0, -45)',
        },
        {
          id: 8,
          question: 'Sketch the graph of y = 3x² + 3x - 60, labelling all axis intercepts.',
          type: 'Medium',
          explaination: 'y=3(x²+x-20)=3(x+5)(x-4). Roots:\nx=-5, x=4. y-intercept: −60.',
          answer: 'x-intercepts: x = -5, x = 4; y-intercept: (0, -60)',
        },
        {
          id: 9,
          question: 'Sketch the graph of y = -2x² - 4x - 3, labelling all axis intercepts.',
          type: 'Medium',
          explaination:
            'Δ= 16 - 4(-2)(-3) = 16-24 = -8 < 0. No real roots (no x-intercepts). y-intercept: y=-3. Opens downward (entirely below x-axis).',
          answer: 'No x-intercepts; y-intercept: (0, -3)',
        },
        {
          id: 10,
          question: 'Sketch the graph of y = -3x² - 15x - 18, labelling all axis intercepts.',
          type: 'Medium',
          explaination:
            'y=-3(x²+5x+6)=-3(x+3)(x+2). Roots:\nx=-3, x=-2. y-intercept: −18. Opens downward.',
          answer: 'x-intercepts: x = -3, x = -2; y-intercept: (0, -18)',
        },
        {
          id: 11,
          question: 'Sketch the graph of y = -3x² + 3x + 18, labelling all axis intercepts.',
          type: 'Medium',
          explaination:
            'y=-3(x²-x-6)=-3(x-3)(x+2). Roots:\nx=3, x=-2. y-intercept: 18. Opens downward.',
          answer: 'x-intercepts: x = -2, x = 3; y-intercept: (0, 18)',
        },
        {
          id: 12,
          question: 'Sketch the graph of y = -3x² - 3x - 6, labelling all axis intercepts.',
          type: 'Medium',
          explaination:
            'y=-3(x²+x+2). Δ=1-8=-7<0.\nNo real roots. y-intercept: −6. Entirely below x-axis.',
          answer: 'No x-intercepts; y-intercept: (0, -6)',
        },
      ],
      'equation-from-graph-factored-form': [],
      'completing-the-square-line-of-symmetry': [
        {
          id: 1,
          question:
            'Complete the square and find the equation of the line of symmetry of y = 2x² + 8x + 15.',
          type: 'Medium',
          explaination: 'y = 2(x²+4x)+15 = 2[(x+2)²-4]+15 = 2(x+2)² + 7. Line of symmetry: x = -2.',
          answer: 'x = -2',
        },
        {
          id: 2,
          question:
            'Complete the square and find the equation of the line of symmetry of y = 2x² + 12x + 23.',
          type: 'Medium',
          explaination: 'y = 2(x+3)² - 18 + 23 = 2(x+3)² + 5.\nLine of symmetry: x = -3.',
          answer: 'x = -3',
        },
        {
          id: 3,
          question:
            'Complete the square and find the equation of the line of symmetry of y = 3x² - 6x + 10.',
          type: 'Medium',
          explaination: 'y = 3(x²-2x)+10 = 3[(x-1)²-1]+10 = 3(x-1)² + 7. Line of symmetry: x = 1.',
          answer: 'x = 1',
        },
        {
          id: 4,
          question:
            'Complete the square and find the equation of the line of symmetry of y = 3x² - 12x + 5.',
          type: 'Medium',
          explaination: 'y = 3(x-2)² - 12 + 5 = 3(x-2)² - 7.\nLine of symmetry: x = 2.',
          answer: 'x = 2',
        },
        {
          id: 5,
          question:
            'Complete the square and find the equation of the line of symmetry of y = 2x² + 4x - 1.',
          type: 'Medium',
          explaination: 'y = 2(x+1)² - 2 - 1 = 2(x+1)² - 3.\nLine of symmetry: x = -1.',
          answer: 'x = -1',
        },
        {
          id: 6,
          question:
            'Complete the square and find the equation of the line of symmetry of y = 2x² + 8x - 3.',
          type: 'Medium',
          explaination: 'y = 2(x+2)² - 8 - 3 = 2(x+2)² - 11.\nLine of symmetry: x = -2.',
          answer: 'x = -2',
        },
        {
          id: 7,
          question:
            'Complete the square and find the equation of the line of symmetry of y = 2x² - 2x + 1.',
          type: 'Medium',
          explaination: 'y = 2(x-1/2)² - 1/2 + 1 = 2(x-1/2)² + 1/2. Line of symmetry: x = 1/2.',
          answer: 'x = 1/2',
        },
        {
          id: 8,
          question:
            'Complete the square and find the equation of the line of symmetry of y = 2x² - 6x + 5.',
          type: 'Medium',
          explaination: 'y = 2(x-3/2)² - 9/2 + 5 = 2(x-3/2)² + 1/2. Line of symmetry: x = 3/2.',
          answer: 'x = 3/2',
        },
        {
          id: 9,
          question:
            'Complete the square and find the equation of the line of symmetry of y = 3x² + x + 2.',
          type: 'Medium',
          explaination: 'y = 3(x²+(1/3)x)+2 = 3(x+1/6)² - 1/12 + 2. Line of symmetry: x = -1/6.',
          answer: 'x = -1/6',
        },
        {
          id: 10,
          question:
            'Complete the square and find the equation of the line of symmetry of y = 3x² - x + 1.',
          type: 'Medium',
          explaination: 'y = 3(x-1/6)² - 1/12 + 1. Line of symmetry: x = 1/6.',
          answer: 'x = 1/6',
        },
        {
          id: 11,
          question:
            'Complete the square and find the equation of the line of symmetry of y = -2x² + 8x - 1.',
          type: 'Medium',
          explaination: 'y = -2(x-2)² + 8 - 1 = -2(x-2)²+7.\nLine of symmetry: x = 2.',
          answer: 'x = 2',
        },
        {
          id: 12,
          question:
            'Complete the square and find the equation of the line of symmetry of y = -x² - 4x - 2.',
          type: 'Medium',
          explaination: 'y = -(x²+4x)-2 = -[(x+2)²-4]-2 = -(x+2)²+2. Line of symmetry: x = -2.',
          answer: 'x = -2',
        },
        {
          id: 13,
          question:
            'Complete the square and find the equation of the line of symmetry of y = -x² - 6x + 3.',
          type: 'Medium',
          explaination: 'y = -(x+3)² + 9 + 3 = -(x+3)²+12.\nLine of symmetry: x = -3.',
          answer: 'x = -3',
        },
        {
          id: 14,
          question: 'Write x² - 5x + 1 in the form (x - h)² -k.',
          type: 'Medium',
          explaination: 'x²-5x+1 = (x-5/2)² -25/4+1 = (x-5/2)² -21/4.',
          answer: '(x -5/2)² - 21/4',
        },
        {
          id: 15,
          question:
            'Part a): Write x² - 5x + 1 in the form (x - h)² -k. → (x -5/2)² - 21/4\nHence write down the equation of the line of symmetry of the graph y = x² - 5x + 1.',
          type: 'Medium',
          explaination: 'Line of symmetry is the vertical through the vertex: x = 5/2.',
          answer: 'x = 5/2',
        },
      ],
      'quadratic-graph-features': [],
      'completing-the-square-minimum-value': [
        {
          id: 1,
          question: 'Write 3x² + 6x - 2 in the form a(x + h)² -k.',
          type: 'Medium',
          explaination: '3x²+6x-2 = 3(x²+2x)-2 = 3[(x+1)²-1]-2 = 3(x+1)²-3-2 = 3(x+1)²-5.',
          answer: '3(x+1)² -5',
        },
        {
          id: 2,
          question:
            'Part a): Write 3x² + 6x - 2 in the form a(x + h)² -k. → 3(x+1)² -5\nHence find the minimum value of 3x² + 6x -2.',
          type: 'Medium',
          explaination: 'Minimum when (x+1)²=0, i.e.\nx=-1: minimum value = -5.',
          answer: 'Minimum value: -5',
        },
      ],
      'completing-the-square-range-of-function': [
        {
          id: 1,
          question: 'Write 5x² - 10x + 3 in the form a(x - h)² + k.',
          type: 'Hard',
          explaination: '5x²-10x+3 = 5(x²-2x)+3 = 5[(x-1)²-1]+3 = 5(x-1)²-5+3 = 5(x-1)²-2.',
          answer: '5(x-1)² -2',
        },
        {
          id: 2,
          question:
            'Part a): Write 5x² - 10x + 3 in the form a(x - h)² + k. → 5(x-1)² -2\nHence find the range of the function f(x) = 5x²- 10x + 3, x ∈ ℝ.',
          type: 'Hard',
          explaination:
            'Since 5(x-1)² ≥ 0 for all real x, the minimum is -2 (at x=1).\nRange: f(x) ≥ -2, i.e. f(x) ∈ [-2, ∞).',
          answer: 'f(x) ≥ -2',
        },
      ],
      'graph-transformations-vertical-translation': [],
      'reflections-vertex-coordinates': [
        {
          id: 1,
          question:
            'The graph of y = f(x) has a vertex at (2, 3). Find the coordinates of the vertex of the graph of y = -f(x).',
          type: 'Easy',
          explaination: 'y = -f(x) reflects in the x- axis: (x,y) → (x,-y). So (2,3) → (2,-3).',
          answer: '(2, -3)',
        },
        {
          id: 2,
          question:
            'The graph of y = f(x) has a vertex at (5, 1). Find the coordinates of the vertex of the graph of y = -f(x).',
          type: 'Easy',
          explaination: 'Reflection in x-axis: (5,1) → (5,-1).',
          answer: '(5, -1)',
        },
        {
          id: 3,
          question:
            'The graph of y = f(x) has a vertex at (-2, -4). Find the coordinates of the vertex of the graph of y = -f(x).',
          type: 'Easy',
          explaination: 'Reflection in x-axis: (-2,-4) → (-2,4).',
          answer: '(-2, 4)',
        },
        {
          id: 4,
          question:
            'The graph of y = f(x) has a vertex at (-3, -1). Find the coordinates of the vertex of the graph of y = -f(x).',
          type: 'Easy',
          explaination: 'Reflection in x-axis: (-3,-1) → (-3,1).',
          answer: '(-3, 1)',
        },
        {
          id: 5,
          question:
            'The graph of y = f(x) has a vertex at (1, 5). Find the coordinates of the vertex of the graph of y = f(-x).',
          type: 'Easy',
          explaination: 'Reflection in y-axis: (1,5) → (-1,5).',
          answer: '(-1, 5)',
        },
        {
          id: 6,
          question:
            'The graph of y = 2x³ - 5x² is reflected in the x-axis and then reflected in the y-axis. Find the equation of the resulting graph.',
          type: 'Medium',
          explaination:
            'Step 1 – Reflect in x-axis (y → -y):\ny = -(2x³-5x²) = -2x³+5x²\nStep 2 – Reflect in y-axis (replace x with -x):\ny = -2(-x)³+5(-x)² = 2x³+5x²',
          answer: 'y = 2x³ + 5x²',
        },
      ],
      'describing-transformations-combined': [
        {
          id: 1,
          question:
            'The graph of y=eˣ undergoes the following transformations in order:\n1. Horizontal stretch with scale factor 2\n2. Translation by vector (0, -3) Write down the equation of the final graph and state its horizontal asymptote.',
          type: 'Hard',
          explaination:
            'Step 1 (horiz. stretch SF 2, replace x with x/2): y=e^(x/2).\nStep 2 (translate -3 vertically): y=e^(x/2)-3.\nHorizontal asymptote: as x → -∞, e^(x/2) → 0, so y → -3.',
          answer: 'y = e^(x/2) -3; asymptote y = -3.',
        },
        {
          id: 2,
          question:
            'Describe a sequence of transformations that maps the graph of y = 4x² + x to the graph of y = 12x² + 3x - 2.',
          type: 'Hard',
          explaination:
            '3(4x²+x) = 12x²+3x, so y = 12x²+3x-2 = 3(4x²+x)-2.\n1. Vertical stretch, sf 3.\n2. Translation 2 units down.',
          answer: 'Vertical stretch by scale factor 3, then translation 2 units down.',
        },
        {
          id: 3,
          question:
            'Describe a sequence of transformations that maps the graph of y = 4x² + x to the graph of y = 20x² + 5x + 1.',
          type: 'Hard',
          explaination:
            '5(4x²+x) = 20x²+5x, so y = 20x²+5x+1 = 5(4x²+x)+1.\n1. Vertical stretch, sf 5.\n2. Translation 1 unit up.',
          answer: 'Vertical stretch by scale factor 5, then translation 1 unit up.',
        },
        {
          id: 4,
          question:
            'Describe a sequence of transformations that maps the graph of y = 4x² + x to the graph of y = x² + (1/2)x - 1.',
          type: 'Hard',
          explaination:
            "(1/4)(4x²+x) = x²+(1/4)x.\nThis doesn't directly match — need horizontal stretch by 2: replace x with x/2:\n4(x/2)²+x/2 = x²+x/2.\nThen subtract 1: y = x²+(1/2)x-1.\n1. Horizontal stretch, sf 2.\n2. Translation 1 unit down.",
          answer: 'Vertical stretch by scale factor 1/4, then translation 1 unit down.',
        },
        {
          id: 5,
          question:
            'Describe a sequence of transformations that maps the graph of y = 4x² + x to the graph of y = x² + (1/2)x + 3.',
          type: 'Hard',
          explaination:
            'Replace x with x/2:\n4(x/2)²+x/2=x²+x/2.\nAdd 3: y = x²+(1/2)x+3.\n1. Horizontal stretch, sf 2.\n2. Translation 3 units up.',
          answer: 'Horizontal stretch by scale factor 2, then translation 3 units up.',
        },
        {
          id: 6,
          question:
            'Describe a sequence of transformations that maps the graph of y = 4x² + x to the graph of y = 4(x-2)² + (x-2) + 5.',
          type: 'Hard',
          explaination:
            'Replace x with (x-2): 4(x-2)²+(x-2).\nThen add 5.\n1. Translation right 2.\n2. Translation up 5.',
          answer: 'Translation 2 units to the right, then translation 5 units up.',
        },
        {
          id: 7,
          question:
            'Describe a sequence of transformations that maps the graph of y = 4x² + x to the graph of y = 4(x+3)² + (x+3) - 4.',
          type: 'Hard',
          explaination:
            'Replace x with (x+3): 4(x+3)²+(x+3).\nThen subtract 4.\n1. Translation left 3.\n2. Translation down 4.',
          answer: 'Translation 3 units to the left, then translation 4 units down.',
        },
        {
          id: 8,
          question:
            'Describe a sequence of transformations that maps the graph of y = 4x² + x to the graph of y = 36x² - 3x.',
          type: 'Hard',
          explaination:
            'Replace x with -3x: 4(-3x)²+(-3x)=36x²-3x.\n1. Horizontal stretch, sf 1/3.\n2. Reflection in y-axis.',
          answer: 'Horizontal stretch, scale factor 1/3, then reflection in y-axis (or sf -1/3).',
        },
        {
          id: 9,
          question:
            'Describe a sequence of transformations that maps the graph of y = 4x² + x to the graph of y = 16x² - 2x.',
          type: 'Hard',
          explaination:
            'Replace x with -2x: 4(-2x)²+(-2x)=16x²-2x.\n1. Horizontal stretch, sf 1/2.\n2. Reflection in y-axis.',
          answer: 'Horizontal stretch, scale factor 1/2, then reflection in y-axis.',
        },
        {
          id: 10,
          question:
            'The graph of y = 3x² - 4x is translated 3 units in the negative x-direction and then stretched vertically with scale factor 4. Find the equation of the resulting graph, giving your answer in the form y = ax² + bx + c.',
          type: 'Hard',
          explaination:
            'Step 1 – Translate left 3 (replace x with x+3):\ny = 3(x+3)² - 4(x+3)\n= 3(x²+6x+9) - 4x - 12\n= 3x²+18x+27-4x-12\n= 3x²+14x+15\nStep 2 – Vertical stretch by 4 (multiply by 4):\ny = 4(3x²+14x+15) = 12x²+56x+60',
          answer: 'y = 12x² + 56x + 60',
        },
        {
          id: 11,
          question:
            'The graph of y = eˣ is translated horizontally 2 units in the positive direction and then stretched vertically with scale factor 3.\nFind the equation of the resulting graph.',
          type: 'Hard',
          explaination:
            'Step 1 – Translate right 2: replace x with x-2:\ny = eˣ⁻²\nStep 2 – Vertical stretch by 3:\ny = 3eˣ⁻²',
          answer: 'y = 3eˣ⁻²',
        },
        {
          id: 12,
          question:
            'The graph of y = f(x) is stretched vertically with scale factor 5 and then translated 3 units up, forming the graph of y = g(x). Write down the equation of y = g(x).',
          type: 'Medium',
          explaination:
            'Step 1 – Vertical stretch sf 5: y = 5f(x).\nStep 2 – Translate up 3: y = 5f(x) +3.',
          answer: 'g(x) = 5f(x) + 3',
        },
        {
          id: 13,
          question:
            'The graph of y = g(x) is instead formed from the graph of y = f(x) by translating upward first and then stretching vertically.\nDescribe fully the translation and the stretch.',
          type: 'Hard',
          explaination:
            'We need 5f(x)+3 by first translating then stretching.\nTranslate up c: f(x)+c.\nStretch by 5: 5(f(x)+c) = 5f(x)+5c = 5f(x)+3.\nSo 5c=3 ⇒ c=3/5.\nTranslation: 3/5 units up.\nStretch: vertical, sf 5.',
          answer: 'Translate up 3/5, then stretch vertically by scale factor 5.',
        },
      ],
      'describing-transformations-from-completed-square': [
        {
          id: 1,
          question:
            'Hence describe a sequence of two transformations that map the graph of y = x² to the graph of y = x² - 10x + 11.',
          type: 'Medium',
          explaination:
            'Since y = (x-5)² - 14:\n1. Translation right 5 (replace x with x-5).\n2. Translation down 14 (subtract 14).',
          answer: 'Translation right 5, then translation down 14.',
        },
        {
          id: 2,
          question:
            'Hence describe a sequence of two transformations that map the graph of y = x² to the graph of y = 5x² + 30x + 45.',
          type: 'Hard',
          explaination:
            'Since y = 5(x+3)²:\n1. Vertical stretch, scale factor 5.\n2. Translation left 3.',
          answer: 'Vertical stretch by scale factor 5, then translation left 3.',
        },
      ],
      'vertical-and-horizontal-stretches': [
        {
          id: 1,
          question: 'Sketch the graph of y = 2f(x).',
          type: 'Easy',
          explaination:
            '1. Multiply every y-coordinate by 2.\n2. x-coordinates remain unchanged.\n3. Sketch the new graph.',
          answer: 'Graph of y = f(x) stretched vertically by scale factor 2.',
        },
        {
          id: 2,
          question: 'Sketch the graph of y = 3f(x).',
          type: 'Easy',
          explaination: '1. Multiply every y-coordinate by 3.\n2. Sketch the new graph.',
          answer: 'Graph of y = f(x) stretched vertically by scale factor 3.',
        },
        {
          id: 3,
          question: 'Sketch the graph of y = (1/2)f(x).',
          type: 'Easy',
          explaination: '1. Multiply every y-coordinate by 1/2.\n2. Sketch the compressed graph.',
          answer: 'Graph of y = f(x) stretched vertically by scale factor 1/2.',
        },
        {
          id: 4,
          question: 'Sketch the graph of y = (1/3)f(x).',
          type: 'Easy',
          explaination: '1. Multiply every y-coordinate by 1/3.\n2. Sketch the compressed graph.',
          answer: 'Graph of y = f(x) stretched vertically by scale factor 1/3.',
        },
        {
          id: 5,
          question: 'Sketch the graph of y = f(3x).',
          type: 'Medium',
          explaination:
            '1. Divide every x-coordinate by 3.\n2. y-coordinates unchanged.\n3. Sketch the compressed graph.',
          answer: 'Graph of y = f(x) stretched horizontally by scale factor 1/3.',
        },
        {
          id: 6,
          question: 'Sketch the graph of y = f(2x).',
          type: 'Medium',
          explaination: '1. Divide every x-coordinate by 2.\n2. Sketch the resulting graph.',
          answer: 'Graph of y = f(x) stretched horizontally by scale factor 1/2.',
        },
        {
          id: 7,
          question: 'Sketch the graph of y = f(x/2).',
          type: 'Medium',
          explaination:
            '1. Multiply every x-coordinate by 2.\n2. y-coordinates unchanged.\n3. Sketch the stretched graph.',
          answer: 'Graph of y = f(x) stretched horizontally by scale factor 2.',
        },
        {
          id: 8,
          question: 'Sketch the graph of y = f(x/3).',
          type: 'Medium',
          explaination: '1. Multiply every x-coordinate by 3.\n2. Sketch the resulting graph.',
          answer: 'Graph of y = f(x) stretched horizontally by scale factor 3.',
        },
        {
          id: 9,
          question:
            'Describe the transformation that maps the graph of y = 12x² - 6x to the graph of y = 36x² - 18x.',
          type: 'Medium',
          explaination: '36x² - 18x = 3(12x² - 6x) So y → 3y: vertical stretch, scale factor 3.',
          answer: 'Vertical stretch with scale factor 3.',
        },
        {
          id: 10,
          question:
            'Describe the transformation that maps the graph of y = 12x² - 6x to the graph of y = 24x² - 12x.',
          type: 'Medium',
          explaination: '24x² - 12x = 2(12x² - 6x) Vertical stretch, scale factor 2.',
          answer: 'Vertical stretch with scale factor 2.',
        },
        {
          id: 11,
          question:
            'Describe the transformation that maps the graph of y = 12x² - 6x to the graph of y = 6x² - 3x.',
          type: 'Medium',
          explaination: '6x² - 3x = (1/2)(12x² -6x) Vertical stretch, scale factor 1/2.',
          answer: 'Vertical stretch with scale factor 1/2.',
        },
        {
          id: 12,
          question:
            'Describe the transformation that maps the graph of y = 12x² - 6x to the graph of y = 4x² - 2x.',
          type: 'Medium',
          explaination: '4x² - 2x = (1/3)(12x² -6x) Vertical stretch, scale factor 1/3.',
          answer: 'Vertical stretch with scale factor 1/3.',
        },
        {
          id: 13,
          question:
            'Describe the transformation that maps the graph of y = 12x² - 6x to the graph of y = 48x² - 12x.',
          type: 'Medium',
          explaination:
            'Replace x with 2x: 12(2x)² - 6(2x) = 48x² - 12x. Horizontal stretch, scale factor 1/2.',
          answer: 'Horizontal stretch with scale factor 1/2.',
        },
        {
          id: 14,
          question:
            'Describe the transformation that maps the graph of y = 12x² - 6x to the graph of y = 108x² - 18x.',
          type: 'Medium',
          explaination:
            'Replace x with 3x: 12(3x)² - 6(3x) = 108x² - 18x.\nHorizontal stretch, scale factor 1/3.',
          answer: 'Horizontal stretch with scale factor 1/3.',
        },
        {
          id: 15,
          question:
            'Describe the transformation that maps the graph of y = 12x² - 6x to the graph of y = 3x² - 3x.',
          type: 'Medium',
          explaination:
            'Replace x with x/2:\n12(x/2)² - 6(x/2) = 3x² - 3x.\nHorizontal stretch, scale factor 2.',
          answer: 'Horizontal stretch with scale factor 2.',
        },
        {
          id: 16,
          question:
            'Describe the transformation that maps the graph of y = 12x² - 6x to the graph of y = (4/3)x² - 2x.',
          type: 'Hard',
          explaination:
            'Replace x with x/3:\n12(x/3)² - 6(x/3) = (4/3)x² -2x. Horizontal stretch, scale factor 3.',
          answer: 'Horizontal stretch with scale factor 3.',
        },
        {
          id: 17,
          question:
            'The graph of y = x² is stretched vertically with scale factor 9. Write down the equation of the resulting graph.',
          type: 'Easy',
          explaination: 'Vertical stretch, sf 9: y → 9y, so y = 9x².',
          answer: 'y = 9x²',
        },
        {
          id: 18,
          question:
            'The graph of y = x² is stretched vertically with scale factor 9.\nFind the scale factor of a horizontal stretch that maps the graph of y = 9x² back to the graph of y = x².',
          type: 'Medium',
          explaination:
            'Replace x with kx: 9(kx)² = 9k²x² = x² ⇒ 9k²=1 ⇒ k=1/3.\nHorizontal stretch, sf 1/3.',
          answer: 'Scale factor 1/3',
        },
        {
          id: 19,
          question:
            'Find the equation of the graph obtained from the graph of y = 2x³ by stretching it vertically with scale factor 8.',
          type: 'Easy',
          explaination: 'y = 8 × 2x³ = 16x³',
          answer: 'y = 16x³',
        },
        {
          id: 20,
          question:
            'Find the scale factor of a horizontal stretch that has the same effect on the graph of y = 2x³ as the vertical stretch in part a.',
          type: 'Medium',
          explaination:
            'Vertical stretch sf 8 gives y = 16x³.\nHorizontal stretch sf k: replace x with kx: 2(kx)³ = 2k³x³ = 16x³ ⇒ k³=8 ⇒ k=2.\nHorizontal stretch sf 1/2 (compress by factor 1/k =1/2).',
          answer: 'Scale factor 1/2',
        },
      ],
      'stretch-about-a-non-standard-line': [
        {
          id: 1,
          question:
            'The graph of y = f(x) is stretched vertically by a factor of 2 away from the line y = 1 (that is, y = 1 is kept invariant rather than the x-axis). Find the equation of the resulting graph.',
          type: 'Hard',
          explaination:
            'A vertical stretch of sf 2 about y=1:\nNew y-value: 1 + 2(f(x)-1) = 2f(x)-1.\nSo the equation is y = 2f(x)-1.',
          answer: 'y = 2f(x) -1',
        },
      ],
    },
  },
  {
    'exponential-logarithmic-functions': {
      title: 'Exponential & Logarithmic Functions',
      'sketching-exponential-graphs': [
        {
          id: 1,
          question: 'Sketch the graph of y = 2ˣ.',
          type: 'Easy',
          explaination:
            'Plot key points: (0,1),(1,2),(-1,0.5).\nDraw smooth increasing curve with horizontal asymptote y=0.',
          answer: 'Graph: passes through (0,1); asymptote y=0; increasing.',
        },
        {
          id: 2,
          question: 'Sketch the graph of y = 3ˣ.',
          type: 'Easy',
          explaination: 'Plot key points: (0,1),(1,3),(-1,1/3).\nSteeper than 2ˣ. Asymptote y=0.',
          answer: 'Graph: passes through (0,1); asymptote y=0; steeper than y=2ˣ.',
        },
        {
          id: 3,
          question: 'Sketch the graph of y = 0.4ˣ.',
          type: 'Easy',
          explaination: 'Base 0<b<1 so decreasing.\n(0,1), (1,0.4), (-1,2.5).\nAsymptote y=0.',
          answer: 'Graph: passes through (0,1); asymptote y=0; decreasing.',
        },
        {
          id: 4,
          question: 'Sketch the graph of y = 0.3ˣ.',
          type: 'Easy',
          explaination: 'Steeper decrease than 0.4ˣ. Same y-intercept (0,1). Asymptote y=0.',
          answer: 'Graph: passes through (0,1); asymptote y=0; decreasing, steeper than 0.4ˣ.',
        },
        {
          id: 5,
          question: 'Sketch the graph of y = 2⁻ˣ.',
          type: 'Easy',
          explaination:
            'y=2⁻ˣ is a reflection of y=2ˣ in the y-axis. Passes through (0,1).\nAsymptote y=0.',
          answer: 'Reflection of y=2ˣ in the y-axis; asymptote y=0; decreasing.',
        },
        {
          id: 6,
          question: 'Sketch the graph of y = 3⁻ˣ.',
          type: 'Easy',
          explaination: 'y=3⁻ˣ is a reflection of y=3ˣ in the y-axis. Asymptote y=0.',
          answer: 'Reflection of y=3ˣ in the y-axis; steeper decrease.',
        },
        {
          id: 7,
          question: 'Sketch the graph of y = e⁻ˣ.',
          type: 'Easy',
          explaination: 'Reflection of y=eˣ in y-axis. Passes through (0,1). Asymptote y=0.',
          answer: 'Reflection of y=eˣ in the y-axis; passes through (0,1); asymptote y=0.',
        },
        {
          id: 8,
          question: 'Sketch the graph of y = 10⁻ˣ.',
          type: 'Easy',
          explaination: 'Reflection of y=10ˣ in y-axis. Passes through (0,1). Asymptote y=0.',
          answer:
            'Reflection of y=10ˣ in the y-axis; passes through (0,1); steep decrease for x>0.',
        },
        {
          id: 9,
          question:
            'Sketch the graph of y = 2ˣ and y = (1/2)ˣ on the same set of axes, showing their asymptotes and axis intercepts.',
          type: 'Medium',
          explaination:
            'y=(1/2)ˣ=2⁻ˣ is the reflection of y=2ˣ in the y-axis. Both have horizontal asymptote y=0 and y-intercept (0,1). No x-intercepts.',
          answer: 'Both pass through (0,1); y=0 is asymptote for both; symmetric about the y-axis.',
        },
      ],
      'exponential-logarithmic-inverse-graphs': [
        {
          id: 1,
          question: 'On the same axes, sketch the graphs of y = 2ˣ and y = log₂ x.',
          type: 'Medium',
          explaination:
            'y=log₂ x is the reflection of y=2ˣ in the line y=x.\ny=2ˣ: through (0,1), asymptote y=0. y=log₂ x: through (1,0), asymptote x=0.',
          answer: 'Both pass through (1,0) and (0,1) reflected; symmetric about y=x.',
        },
        {
          id: 2,
          question: 'On the same axes, sketch the graphs of y = 4ˣ and y = log₄ x.',
          type: 'Medium',
          explaination:
            'y=log₄ x is the reflection of y=4ˣ in y=x. y=4ˣ: through (0,1), steeper. y=log₄ x: through (1,0).',
          answer: 'Symmetric about y=x.',
        },
        {
          id: 3,
          question: 'On the same axes, sketch the graphs of y = 10ˣ and y = log x.',
          type: 'Medium',
          explaination:
            'y=log₁₀ x is the reflection of y=10ˣ in y=x. Asymptotes:\ny=0 and x=0 respectively.',
          answer: 'Symmetric about y=x; log x is common logarithm (base 10).',
        },
        {
          id: 4,
          question: 'On the same axes, sketch the graphs of y = eˣ and y = ln x.',
          type: 'Medium',
          explaination:
            'y=ln x is the reflection of y=eˣ in y=x. y=eˣ: through (0,1), asymptote y=0. y=ln x: through (1,0), asymptote x=0.',
          answer: 'Symmetric about y=x; ln x=logₑ x.',
        },
        {
          id: 5,
          question: 'On the same axes, sketch the graphs of y = 0.5ˣ and y = log_(0.5) x.',
          type: 'Medium',
          explaination:
            'y=0.5ˣ is a decreasing exponential.\nIts inverse y=log_(0.5) x is also decreasing. Both pass through (1,0) / (0,1) reflected.',
          answer: 'Both decreasing in their respective domains; symmetric about y=x.',
        },
        {
          id: 6,
          question: 'On the same axes, sketch the graphs of y = 0.2ˣ and y = log_(0.2) x.',
          type: 'Medium',
          explaination: 'Steeper than 0.5ˣ. Reflected in y=x gives y=log_(0.2) x, also decreasing.',
          answer: 'Steeper decreasing exponential; inverse also decreasing.',
        },
        {
          id: 7,
          question: 'On the same axes, sketch the graphs of y = 5⁻ˣ and y = log_(0.2) x.',
          type: 'Medium',
          explaination:
            '5⁻ˣ=(5⁻¹)ˣ=0.2ˣ. So y=0.2ˣ and y=log_(0.2) x are inverses; symmetric about y=x.',
          answer: 'y=5⁻ˣ=0.2ˣ; its inverse is y=log_(0.2) x.',
        },
        {
          id: 8,
          question: 'On the same axes, sketch the graphs of y = 4⁻ˣ and y = log_(0.25) x.',
          type: 'Medium',
          explaination: '4⁻ˣ=(4⁻¹)ˣ=0.25ˣ. y=0.25ˣ and y=log_(0.25) x symmetric about y=x.',
          answer: 'y=4⁻ˣ=0.25ˣ; its inverse is y=log_(0.25) x.',
        },
        {
          id: 9,
          question:
            'Sketch the graphs of y = 6ˣ and y = log₆ x on the same set of axes, clearly showing the relationship between them.',
          type: 'Medium',
          explaination:
            'y=log₆ x is the inverse of y=6ˣ; reflected in line y=x.\nShow the line y=x as a dashed guide.\ny=6ˣ: asymptote y=0.\ny=log₆ x: asymptote x=0.',
          answer: 'Symmetric about y=x; one passes through (0,1), the other through (1,0).',
        },
      ],
      'writing-exponentials-in-the-form-ekx': [
        {
          id: 1,
          question: 'Write 2.1ˣ in the form eᵏˣ, giving the value of k to 3 significant figures.',
          type: 'Medium',
          explaination: '2.1ˣ = e^(x ln 2.1). ln(2.1)=0.7419… ≈ 0.742 (3 s.f.)',
          answer: 'k = ln(2.1) ≈ 0.742',
        },
        {
          id: 2,
          question: 'Write 1.7ˣ in the form eᵏˣ, giving the value of k to 3 significant figures.',
          type: 'Medium',
          explaination: '1.7ˣ=e^(x ln 1.7). ln(1.7)=0.5306… ≈ 0.531 (3 s.f.)',
          answer: 'k = ln(1.7) ≈ 0.531',
        },
        {
          id: 3,
          question: 'Write 4.2ˣ in the form eᵏˣ, giving the value of k to 3 significant figures.',
          type: 'Medium',
          explaination: 'ln(4.2)=1.4351… ≈ 1.44 (3 s.f.)',
          answer: 'k = ln(4.2) ≈ 1.44',
        },
        {
          id: 4,
          question: 'Write 5.1ˣ in the form eᵏˣ, giving the value of k to 3 significant figures.',
          type: 'Medium',
          explaination: 'ln(5.1)=1.6292… ≈ 1.63 (3 s.f.)',
          answer: 'k = ln(5.1) ≈ 1.63',
        },
        {
          id: 5,
          question: 'Write 0.6ˣ in the form eᵏˣ, giving the value of k to 3 significant figures.',
          type: 'Medium',
          explaination: 'ln(0.6)=-0.5108… ≈ -0.511 (3 s.f.). Negative k since base <1.',
          answer: 'k = ln(0.6) ≈ -0.511',
        },
        {
          id: 6,
          question: 'Write 0.5ˣ in the form eᵏˣ, giving the value of k to 3 significant figures.',
          type: 'Medium',
          explaination: 'ln(0.5)=-0.6931… ≈ -0.693 (3 s.f.)',
          answer: 'k = ln(0.5) = -ln 2 ≈ -0.693',
        },
        {
          id: 7,
          question: 'Write (1/3)ˣ in the form eᵏˣ, giving the value of k to 3 significant figures.',
          type: 'Medium',
          explaination: 'ln(1/3)=-ln 3=-1.0986… ≈ -1.10 (3 s.f.)',
          answer: 'k = ln(1/3) = -ln 3 ≈ -1.10',
        },
        {
          id: 8,
          question: 'Write (1/4)ˣ in the form eᵏˣ, giving the value of k to 3 significant figures.',
          type: 'Medium',
          explaination: 'ln(1/4)=-ln 4=-1.3862… ≈ -1.39 (3 s.f.)',
          answer: 'k = ln(1/4) = -ln 4 ≈ -1.39',
        },
        {
          id: 9,
          question:
            'Write 5.2ˣ in the form eᵏˣ, giving the value of k correct to 3 significant figures.',
          type: 'Medium',
          explaination: '5.2ˣ=e^(x ln 5.2). ln(5.2)=1.6487… ≈ 1.65 (3 s.f.)',
          answer: 'k = ln(5.2) ≈ 1.65',
        },
      ],
      'transformations-of-logarithmic-graphs': [
        {
          id: 1,
          question:
            'Sketch the graphs of y = ln x and y = ln(x -2) on the same diagram, showing their asymptotes and y-intercepts.',
          type: 'Medium',
          explaination:
            'y=ln(x-2) is a horizontal translation of y=ln x by +2. Vertical asymptote shifts to x=2. x-intercept: x-2=1 ⇒ x=3. Domain: x>2.',
          answer:
            'y=ln x: asymptote x=0, through (1,0).\ny=ln(x-2): asymptote x=2, through (3,0); no y-intercept.',
        },
        {
          id: 2,
          question:
            'The graph of y = ln x is translated 5 units in the negative x-direction. a Write down the equation of the vertical asymptote of the resulting graph. b Sketch the graph, showing the asymptote and the axis intercepts.',
          type: 'Medium',
          explaination:
            'Translation 5 units left: y=ln(x+5).\na) Asymptote at x+5=0 ⇒ x=-5.\nb) x-intercept: x+5=1 ⇒ x=-4. y-intercept: x=0 ⇒ y=ln 5 ≈ 1.61.',
          answer: 'a) x = -5\nb) Curve through (-4, 0) and (0, ln 5); asymptote x=-5.',
        },
        {
          id: 3,
          question:
            'The graph of y = ln x is stretched horizontally with scale factor 1/3. Write down the equation of the resulting graph.',
          type: 'Hard',
          explaination:
            'Horizontal stretch with scale factor 1/3: replace x with 3x.\nResult: y=ln(3x).',
          answer: 'y = ln(3x)',
        },
        {
          id: 4,
          question:
            'The graph of y = ln x can also be mapped to the graph from part a by a different single transformation. Describe this transformation fully.',
          type: 'Hard',
          explaination:
            'ln(3x)=ln 3 + ln x. So the graph of y=ln x is translated vertically by +ln 3 to give y=ln 3+ln x, which equals y=ln(3x).',
          answer: 'Vertical translation by +ln 3 (upward by ln 3).',
        },
      ],
      'finding-parameters-of-exponential-functions': [],
      'change-of-base-log-laws': [
        {
          id: 1,
          question:
            'Show that log₄ x = (ln x)/(ln 4) = (log x)/(log 4), and use this to evaluate log₄ 32 without a calculator.',
          type: 'Medium',
          explaination:
            'Change of base: log₄ x = (ln x)/(ln 4).\nlog₄ 32 = (ln 32)/(ln 4)=(5 ln 2)/(2 ln 2)=5/2.',
          answer: 'log₄ 32 = 5/2',
        },
      ],
    },
  },
  {
    'functions-equations': {
      title: 'Functions & Equations',
      'solving-equations-by-factoring-cancellation': [
        {
          id: 1,
          question: 'Solve the equation xeˣ = 4x.',
          type: 'Easy',
          explaination: 'Rearrange: xeˣ - 4x = 0 ⇒ x(eˣ - 4) = 0\nx = 0 or eˣ = 4 ⇒ x = ln 4',
          answer: 'x = 0 or x = ln 4',
        },
        {
          id: 2,
          question: 'Solve the equation xeˣ = 5x.',
          type: 'Easy',
          explaination: 'x(eˣ - 5) = 0 ⇒ x = 0 or x = ln 5',
          answer: 'x = 0 or x = ln 5',
        },
        {
          id: 3,
          question: 'Solve the equation x ln x = 2x.',
          type: 'Easy',
          explaination: 'x(ln x - 2) = 0; x > 0 so x ≠ 0; ln x = 2 ⇒ x = e²',
          answer: 'x = 0 (rejected) or x = e²',
        },
        {
          id: 4,
          question: 'Solve the equation x ln x = 3x.',
          type: 'Easy',
          explaination: 'x(ln x - 3) = 0; x > 0 so ln x = 3 ⇒ x = e³',
          answer: 'x = e³',
        },
        {
          id: 5,
          question: 'Solve the equation eˣ ln x = 2 ln x.',
          type: 'Easy',
          explaination: 'ln x (eˣ - 2) = 0 ⇒ ln x = 0 giving x = 1, or eˣ = 2 giving x = ln 2',
          answer: 'x = 1 or x = ln 2',
        },
        {
          id: 6,
          question: 'Solve the equation eˣ ln x = 3 ln x.',
          type: 'Easy',
          explaination: 'ln x(eˣ - 3) = 0 ⇒ x = 1 or x = ln 3',
          answer: 'x = 1 or x = ln 3',
        },
      ],
      'equations-involving-surds': [
        {
          id: 1,
          question: 'Solve the equation x√(x+1) = 3x.',
          type: 'Medium',
          explaination: 'x(√(x+1) - 3) = 0 ⇒ x = 0 or √(x+1) = 3 ⇒ x+1 = 9 ⇒ x = 8',
          answer: 'x = 0 or x = 8',
        },
        {
          id: 2,
          question: 'Solve the equation x√(x+2) = 5x.',
          type: 'Medium',
          explaination: 'x(√(x+2) - 5) = 0 ⇒ x = 0 or √(x+2) = 5 ⇒ x+2 = 25 ⇒ x = 23',
          answer: 'x = 0 or x = 23',
        },
        {
          id: 3,
          question: 'Solve the equation x√(x-1) = 3x.',
          type: 'Medium',
          explaination: 'x(√(x-1) - 3) = 0 ⇒ x = 0 or √(x-1) = 3 ⇒ x-1 = 9 ⇒ x = 10',
          answer: 'x = 0 or x = 10',
        },
      ],
      'equations-involving-surds-logs-exponentials': [
        {
          id: 1,
          question: 'Solve the equation xeˣ ln x = 5x ln x.',
          type: 'Hard',
          explaination: 'x ln x (eˣ - 5) = 0 ⇒ x = 0 or ln x = 0 ⇒ x = 1 or eˣ = 5 ⇒ x = ln 5',
          answer: 'x = 0 or x = 1 or x = ln 5',
        },
        {
          id: 2,
          question: 'Solve the equation 3xeˣ ln(x+3) = 20x ln(x+3).',
          type: 'Hard',
          explaination:
            'x ln(x+3)(3eˣ - 20) = 0; x = 0; x+3 = 1 ⇒ x = -2 (check domain); eˣ = 20/3 ⇒ x = ln(20/3)',
          answer: 'x = 0 or x = -3 (rejected) or x = ln(20/3)',
        },
      ],
      'hidden-quadratics-substitution-method': [
        {
          id: 1,
          question: 'Solve the equation x⁴ - 5x² + 4 = 0.',
          type: 'Medium',
          explaination:
            'Let u = x²: u² - 5u + 4 = 0 ⇒ (u-1)(u-4) = 0\nu = 1 ⇒ x = ± 1; u = 4 ⇒ x = ± 2',
          answer: 'x = ± 1, x = ± 2',
        },
        {
          id: 2,
          question: 'Solve the equation x⁴ - 13x² + 36 = 0.',
          type: 'Medium',
          explaination: 'Let u = x²: u² - 13u + 36 = 0 ⇒ (u-4)(u-9) = 0\nx = ± 2 or x = ± 3',
          answer: 'x = ± 2, x = ± 3',
        },
        {
          id: 3,
          question: 'Solve the equation x⁶ - 5x³ + 6 = 0.',
          type: 'Medium',
          explaination: 'Let u = x³: u² - 5u + 6 = 0 ⇒ (u-2)(u-3) = 0\nx = 2^(1/3) or x = 3^(1/3)',
          answer: 'x = ³√2, x = ³√3',
        },
        {
          id: 4,
          question: 'Solve the equation x⁶ - 8x³ + 7 = 0.',
          type: 'Medium',
          explaination: 'Let u = x³: u² - 8u + 7 = 0 ⇒ (u-1)(u-7) = 0\nx = 1 or x = 7^(1/3)',
          answer: 'x = 1, x = ³√7',
        },
        {
          id: 5,
          question: 'Solve the equation x⁴ - x² - 12 = 0.',
          type: 'Medium',
          explaination:
            'Let u = x²: u² - u - 12 = 0 ⇒ (u-4)(u+3) = 0\nu = 4 ⇒ x = ± 2; u = -3 has no real solutions',
          answer: 'x = ± 2',
        },
        {
          id: 6,
          question: 'Solve the equation x⁴ - 7x² - 18 = 0.',
          type: 'Medium',
          explaination:
            'Let u = x²: u² - 7u - 18 = 0 ⇒ (u-9)(u+2) = 0\nu = 9 ⇒ x = ± 3; u = -2 rejected',
          answer: 'x = ± 3',
        },
        {
          id: 7,
          question: 'Solve the equation x - 7√x + 10 = 0.',
          type: 'Medium',
          explaination:
            'Let u = √x: u² - 7u + 10 = 0 ⇒ (u-2)(u-5) = 0\n√x = 2 ⇒ x = 4; √x = 5 ⇒ x = 25',
          answer: 'x = 4 or x = 25',
        },
        {
          id: 8,
          question: 'Solve the equation x - 7√x + 12 = 0.',
          type: 'Medium',
          explaination: 'Let u = √x: u² - 7u + 12 = 0 ⇒ (u-3)(u-4) = 0\nx = 9 or x = 16',
          answer: 'x = 9 or x = 16',
        },
        {
          id: 9,
          question: 'Solve the equation x - √x - 12 = 0.',
          type: 'Medium',
          explaination:
            'Let u = √x: u² - u - 12 = 0 ⇒ (u-4)(u+3) = 0\nu = 4 ⇒ x = 16; u = -3 rejected (√x ≥ 0)',
          answer: 'x = 16',
        },
        {
          id: 10,
          question: 'Solve the equation x - 2√x - 15 = 0.',
          type: 'Medium',
          explaination:
            'Let u = √x: u² - 2u - 15 = 0 ⇒ (u-5)(u+3) = 0\nu = 5 ⇒ x = 25; u = -3 rejected',
          answer: 'x = 25',
        },
        {
          id: 11,
          question: 'Find the exact roots of the equation x⁴ -10x² + 24 = 0.',
          type: 'Medium',
          explaination: 'Let u = x²: u² - 10u + 24 = 0 ⇒ (u-4)(u-6) = 0\nx = ± 2 or x = ± √6',
          answer: 'x = ± √4 = ± 2, x = ± √6',
        },
      ],
      'exponential-equations-reducible-to-quadratics': [
        {
          id: 1,
          question: 'Solve the equation e²ˣ - 7eˣ + 6 = 0.',
          type: 'Medium',
          explaination:
            'Let u = eˣ: u² - 7u + 6 = 0 ⇒ (u-1)(u-6) = 0\neˣ = 1 ⇒ x = 0; eˣ = 6 ⇒ x = ln 6',
          answer: 'x = 0 or x = ln 6',
        },
        {
          id: 2,
          question: 'Solve the equation e²ˣ - 4eˣ + 3 = 0.',
          type: 'Medium',
          explaination: 'Let u = eˣ: u² - 4u + 3 = 0 ⇒ (u-1)(u-3) = 0\nx = 0 or x = ln 3',
          answer: 'x = 0 or x = ln 3',
        },
        {
          id: 3,
          question: 'Solve the equation e²ˣ - 8eˣ + 15 = 0.',
          type: 'Medium',
          explaination: 'Let u = eˣ: u² - 8u + 15 = 0 ⇒ (u-3)(u-5) = 0\nx = ln 3 or x = ln 5',
          answer: 'x = ln 3 or x = ln 5',
        },
        {
          id: 4,
          question: 'Solve the equation e²ˣ - 7eˣ + 12 = 0.',
          type: 'Medium',
          explaination: 'Let u = eˣ: u² - 7u + 12 = 0 ⇒ (u-3)(u-4) = 0\nx = ln 3 or x = ln 4',
          answer: 'x = ln 3 or x = ln 4',
        },
        {
          id: 5,
          question: 'Solve the equation e²ˣ + 2eˣ - 8 = 0.',
          type: 'Medium',
          explaination:
            'Let u = eˣ: u² + 2u - 8 = 0 ⇒ (u+4)(u-2) = 0\nu = -4 rejected (eˣ > 0); eˣ = 2 ⇒ x = ln 2',
          answer: 'x = ln 2',
        },
        {
          id: 6,
          question: 'Solve the equation e²ˣ + 3eˣ - 10 = 0.',
          type: 'Medium',
          explaination:
            'Let u = eˣ: u² + 3u - 10 = 0 ⇒ (u+5)(u-2) = 0\nu = -5 rejected; eˣ = 2 ⇒ x = ln 2',
          answer: 'x = ln 2',
        },
        {
          id: 7,
          question: 'Solve the equation e²ˣ - 6eˣ + 9 = 0.',
          type: 'Medium',
          explaination:
            'Let u = eˣ: u² - 6u + 9 = 0 ⇒ (u-3)² = 0\neˣ = 3 ⇒ x = ln 3 (repeated root)',
          answer: 'x = ln 3',
        },
        {
          id: 8,
          question: 'Solve the equation e²ˣ - 8eˣ + 16 = 0.',
          type: 'Medium',
          explaination: 'Let u = eˣ: (u-4)² = 0 ⇒ eˣ = 4 ⇒ x = ln 4',
          answer: 'x = ln 4',
        },
        {
          id: 9,
          question: 'Solve the equation e²ˣ + 5eˣ + 6 = 0.',
          type: 'Hard',
          explaination:
            'Let u = eˣ: u² + 5u + 6 = 0 ⇒ (u+2)(u+3) = 0\nu = -2 or u = -3; both rejected since eˣ > 0 for all x',
          answer: 'No real solutions',
        },
        {
          id: 10,
          question: 'Solve the equation e²ˣ + 8eˣ + 15 = 0.',
          type: 'Hard',
          explaination: 'Let u = eˣ: (u+3)(u+5) = 0; both roots negative — rejected',
          answer: 'No real solutions',
        },
        {
          id: 11,
          question: 'Solve the equation e²ˣ - 10eˣ + 21 = 0.',
          type: 'Medium',
          explaination: 'Let u = eˣ: (u-3)(u-7) = 0 ⇒ x = ln 3 or x = ln 7',
          answer: 'x = ln 3 or x = ln 7',
        },
        {
          id: 12,
          question: 'Solve the equation e²ˣ + eˣ - 6 = 0.',
          type: 'Medium',
          explaination: 'Let u = eˣ: (u+3)(u-2) = 0; u = -3 rejected; eˣ = 2 ⇒ x = ln 2',
          answer: 'x = ln 2',
        },
      ],
      'hidden-quadratics-fractional-indices': [
        {
          id: 1,
          question: 'Solve the equation x^(2/3) - 2x^(1/3) = 3.',
          type: 'Hard',
          explaination:
            'Let u = x^(1/3): u² - 2u - 3 = 0 ⇒ (u-3)(u+1) = 0\nx^(1/3) = 3 ⇒ x = 27; x^(1/3) = -1 ⇒ x = -1',
          answer: 'x = 27 or x = -1',
        },
      ],
      'equations-with-variable-exponents': [
        {
          id: 1,
          question: 'Find all real solutions of the equation (x-7)^(x²-16) = 1.',
          type: 'Hard',
          explaination:
            'Aᴮ = 1 when (i) A = 1, (ii) A = -1 and B even, or (iii) B = 0 and A ≠ 0\n(i) x - 7 = 1 ⇒ x = 8\n(ii) x - 7 = -1 ⇒ x = 6; check B = 36-16=20 (even) ✓\n(iii) x² - 16 = 0 ⇒ x = ± 4; x = 4: base = -3 ≠ 0 ✓; x = -4: base = -11 ≠ 0 but B = 0 ✓ — however check if (-11)⁰ = 1 ✓\nAlso x = -3: base = -10, B = 9-16 = -7 — not satisfied separately Final answers: x = -4, 4, 6, 8',
          answer: 'x = -3, x = 4, x = 6, x = 8',
        },
      ],
    },
  },
  {
    'algebra-and-functions': {
      title: 'Algebra and Functions',
      'polynomial-equations-graphical-methods': [
        {
          id: 1,
          question: 'Find all solutions of each equation.\nx³ - x + 2 = 0',
          type: 'Medium',
          explaination: 'Plot y = x³ - x + 2; read off x-intercept(s) using GDC.',
          answer: 'x ≈ -1.52',
        },
        {
          id: 2,
          question: 'Find all solutions of each equation.\nx³ + 2x² - 5 = 0',
          type: 'Medium',
          explaination: 'Plot y = x³ + 2x² - 5; read off x-intercept(s) using GDC.',
          answer: 'x ≈ 1.24',
        },
        {
          id: 3,
          question: 'Find all solutions of each equation.\nx⁴ - 2x³ - 3 = 0',
          type: 'Medium',
          explaination: 'Plot y = x⁴ - 2x³ - 3 and identify all x-intercepts.',
          answer: 'Two real solutions (approx)',
        },
        {
          id: 4,
          question: 'Find all solutions of each equation.\nx⁴ + 3x³ - 1 = 0',
          type: 'Medium',
          explaination: 'Plot y = x⁴ + 3x³ - 1 and identify all x-intercepts.',
          answer: 'Two real solutions (approx)',
        },
        {
          id: 5,
          question: 'Find all solutions of each equation.\nx⁵ - 8x² + 6 = 0',
          type: 'Medium',
          explaination:
            'Plot each quintic and read off all x-intercepts using GDC. Up to 5 real roots are possible.',
          answer: 'Multiple real solutions (GDC)',
        },
        {
          id: 6,
          question: 'Find all solutions of each equation.\nx⁵ + 6x² - 3 = 0',
          type: 'Medium',
          explaination:
            'Plot each quintic and read off all x-intercepts using GDC. Up to 5 real roots are possible.',
          answer: 'Multiple real solutions (GDC)',
        },
        {
          id: 7,
          question: 'Find all solutions of each equation.\neˣ - 8x = 0',
          type: 'Medium',
          explaination: 'Plot y = eˣ and y = 8x; intersections give solutions.',
          answer: 'Two solutions',
        },
        {
          id: 8,
          question: 'Find all solutions of each equation.\n9x - 2eˣ = 0',
          type: 'Medium',
          explaination: 'Plot y = 9x and y = 2eˣ; intersections give solutions.',
          answer: 'Two solutions',
        },
        {
          id: 9,
          question: 'Find all solutions of each equation.\n4 ln x = 2 - x²',
          type: 'Medium',
          explaination: 'Plot y = 4 ln x (domain: x > 0) and y = 2 - x²; find intersection.',
          answer: 'One solution (GDC)',
        },
        {
          id: 10,
          question: 'Find all solutions of each equation.\nln(x - 2) = 5 - x²',
          type: 'Medium',
          explaination: 'Plot y = ln(x-2) (domain: x > 2) and y = 5 - x²; find intersection.',
          answer: 'One solution (GDC)',
        },
        {
          id: 11,
          question: 'Find all solutions of each equation.\neˣ⁻¹ = x² - 3',
          type: 'Medium',
          explaination: 'Plot y = eˣ⁻¹ and y = x²- 3; count and find intersections.',
          answer: 'Two solutions (GDC)',
        },
        {
          id: 12,
          question: 'Find all solutions of each equation.\ne⁻ˣ = x² + 1',
          type: 'Medium',
          explaination:
            'Plot y = e⁻ˣ and y = x² + 1; note RHS is always ≥ 1, LHS decreasing — find intersection.',
          answer: 'One solution (GDC)',
        },
        {
          id: 13,
          question: 'Find all solutions of each equation.\n6/(x² + 1) = 1/(x - 1)',
          type: 'Medium',
          explaination: 'Plot y = 6/(x²+1) and y = 1/(x-1); find intersections (domain: x ≠ 1).',
          answer: 'Two solutions (GDC, excluding x = 1)',
        },
        {
          id: 14,
          question: 'Find all solutions of each equation.\n15/(x² + 4) = 1/(x - 3)',
          type: 'Medium',
          explaination: 'Plot y = 15/(x²+4) and y = 1/(x-3); find intersections (domain: x ≠ 3).',
          answer: 'Two solutions (GDC, excluding x = 3)',
        },
        {
          id: 15,
          question: 'Solve the equation eˣ = x + 2.',
          type: 'Easy',
          explaination:
            'Plot y = eˣ and y = x + 2 on the same axes; find intersection(s) using GDC. The straight line is tangent to / intersects the exponential curve — identify all crossing points.',
          answer: 'x ≈ -1.84 and x ≈ 1.15',
        },
      ],
      'graphs-and-intersections': [
        {
          id: 1,
          question:
            'a) Sketch the graphs of y = e⁻ˣ and y = 2 - x² on the same diagram.\nb) Hence state the number of solutions of the equation e⁻ˣ = 2 - x².',
          type: 'Medium',
          explaination:
            'a) y = e⁻ˣ: always positive, decreasing, y-intercept (0, 1), horizontal asymptote y = 0.\ny = 2 - x²: downward parabola, vertex (0, 2), roots at x = ±√2.\nb) The curves cross twice, at x ≈ -0.537 and x ≈ 1.316, so the equation has 2 solutions.',
          answer:
            'a) Sketch: y = e⁻ˣ decreasing through (0, 1) with asymptote y = 0; y = 2 - x² a downward parabola with vertex (0, 2) and roots x = ±√2\nb) 2 solutions',
        },
      ],
      'logarithmic-rational-equations-graphs': [
        {
          id: 1,
          question:
            'a) On the same diagram, sketch the graphs of y = ln(x - 2) and y = 1/(x - 3).\nb) Hence state the number of solutions of the equation ln(x - 2) = 1/(x - 3).',
          type: 'Medium',
          explaination:
            'a) y = ln(x-2): vertical asymptote x = 2, passes through (3, 0).\ny = 1/(x-3): vertical asymptote x = 3, horizontal asymptote y = 0.\nSketch both for x > 2, x ≠ 3.\nb) Count intersection points: one for 2 < x < 3 and one for x > 3.',
          answer: 'b) 2 solutions',
        },
      ],
      'number-of-roots-parameter-problems': [
        {
          id: 1,
          question:
            'Find the set of values of k such that the equation x³ - 4x = k has exactly three real roots.',
          type: 'Hard',
          explaination:
            "1. Let f(x) = x³ - 4x.\nDifferentiate: f'(x) = 3x² - 4 = 0.\n2. Stationary points: x = ± 2/√3.\n3. Local max: f(-2/√3) = 16/3√3 = 16√3/9.\n4. Local min: f(2/√3) = -16√3/9.\n5. For y = k to cross the cubic exactly 3 times: local min < k < local max.",
          answer: '-16√3/9 < k < 16√3/9',
        },
        {
          id: 2,
          question:
            'Find the set of values of k for which the equation ke⁻ˣ + 3x = 2 has no real roots.',
          type: 'Hard',
          explaination:
            "Rearrange: k = (2 - 3x)eˣ. Let g(x) = (2-3x)eˣ.\nFind maximum: g'(x) = eˣ(-1 - 3x) = 0 ⇒ x = -1/3.\nMax value: g(-1/3) = 3e^(-1/3) ≈ 2.15.\nAs x → -∞: g → 0⁺; as x → +∞: g → -∞.\nRange of g is (-∞, 3e^(-1/3)].\nNo real roots when k is outside this range: k > 3e^(-1/3).",
          answer: 'k > 3e^(-1/3)',
        },
        {
          id: 3,
          question:
            'The value of k is such that the equation ln x³ = kx has exactly one real root.\nFind the number of real roots of each of the following equations:\nln x⁴ = kx',
          type: 'Hard',
          explaination:
            'ln x³ = kx ⇒ 3 ln x = kx. For exactly one root, y = kx is tangent to y = 3 ln x.\nln x⁴ = kx ⇒ 4 ln x = kx: curve y = 4 ln x is a vertical stretch of y = 3 ln x; the same line y = kx now intersects it at 2 points → 2 real roots.',
          answer: '2 real roots',
        },
        {
          id: 4,
          question:
            'The value of k is such that the equation ln x³ = kx has exactly one real root.\nFind the number of real roots of each of the following equations:\nln √x = kx',
          type: 'Hard',
          explaination:
            'ln √x = kx ⇒ (1/2)ln x = kx: curve y = (1/2)ln x is compressed; the line y = kx no longer intersects it → 0 real roots.',
          answer: '0 real roots',
        },
      ],
    },
  },
  {
    'geometry-trigonometry': {
      title: 'Geometry & Trigonometry',
      'surface-area-and-volume-of-3d-shapes': [
        {
          id: 1,
          question:
            'The numerical value of the volume of a cube in cm³ equals the sum of the length of all of its edges in cm. Find the surface area of the cube.',
          type: 'Medium',
          explaination:
            'Let side = a.\nVolume = a³; total edge length = 12a.\nSet equal: a³ = 12a ⇒ a² = 12 ⇒ a = 2√3.\nSurface area = 6a² = 6 × 12 = 72 cm².',
          answer: 'Surface area = 72 cm²',
        },
        {
          id: 2,
          question: 'Find the curved surface area and volume of:\nA sphere with radius 1.8 cm',
          type: 'Easy',
          explaination:
            'CSA = 4πr² = 4π(1.8)² = 12.96π ≈ 40.7 cm²\nV = (4/3)πr³ = (4/3)π(1.8)³ ≈ 24.4 cm³',
          answer: 'CSA = 12.96π ≈ 40.7 cm², V ≈ 24.4 cm³',
        },
        {
          id: 3,
          question: 'Find the curved surface area and volume of:\nA sphere with radius 11.2 m',
          type: 'Easy',
          explaination: 'CSA = 4π(11.2)² = 501.76π ≈ 1576 m²\nV = (4/3)π(11.2)³ ≈ 5892 m³',
          answer: 'CSA ≈ 1576 m², V ≈ 5892 m³',
        },
        {
          id: 4,
          question: 'Find the curved surface area and volume of:\nA sphere with diameter 1.6 m',
          type: 'Easy',
          explaination: 'r = 0.8 m; CSA = 4π(0.8)² = 2.56π ≈ 8.04 m²\nV = (4/3)π(0.8)³ ≈ 2.14 m³',
          answer: 'CSA = 2.56π ≈ 8.04 m², V ≈ 2.14 m³',
        },
        {
          id: 5,
          question: 'Find the curved surface area and volume of:\nA sphere with diameter 0.2 m',
          type: 'Easy',
          explaination:
            'r = 0.1 m; CSA = 4π(0.1)² = 0.04π ≈ 0.126 m²\nV = (4/3)π(0.1)³ ≈ 4.19 × 10⁻³ m³',
          answer: 'CSA = 0.04π ≈ 0.126 m², V ≈ 4.19 × 10⁻³ m³',
        },
        {
          id: 6,
          question: 'Find the curved surface area and volume of:\nA hemisphere with radius 5.2 m',
          type: 'Easy',
          explaination:
            'CSA = 2πr² = 2π(5.2)² = 54.08π ≈ 169.9 m²\nV = (2/3)πr³ = (2/3)π(5.2)³ ≈ 294.5 m³',
          answer: 'CSA = 54.08π ≈ 169.9 m², V ≈ 294.5 m³',
        },
        {
          id: 7,
          question: 'Find the curved surface area and volume of:\nA hemisphere with radius 4 km',
          type: 'Easy',
          explaination: 'CSA = 2π(4)² = 32π ≈ 100.5 km²\nV = (2/3)π(4)³ = 128π/3 ≈ 134.0 km³',
          answer: 'CSA = 32π ≈ 100.5 km², V = 128π/3 ≈ 134.0 km³',
        },
        {
          id: 8,
          question:
            'Find the curved surface area and volume of:\nA cone with base radius 3 cm and height 4.1 cm',
          type: 'Easy',
          explaination:
            'l = √(3² + 4.1²) = √25.81 ≈ 5.08 cm CSA = πr l = π(3)(5.08) ≈ 47.9 cm²\nV = (1/3)πr² h = (1/3)π(9)(4.1) ≈ 38.6 cm³',
          answer: 'CSA ≈ 47.9 cm², V ≈ 38.6 cm³',
        },
        {
          id: 9,
          question:
            'Find the curved surface area and volume of:\nA cone with base radius 0.2 mm and height 7 mm',
          type: 'Easy',
          explaination:
            'l = √(0.2² + 7²) ≈ 7.003 mm CSA = π(0.2)(7.003) ≈ 4.40 mm²\nV = (1/3)π(0.04)(7) ≈ 0.293 mm³',
          answer: 'CSA ≈ 4.40 mm², V ≈ 0.293 mm³',
        },
        {
          id: 10,
          question: 'Find the exact total surface area and volume of:\nA sphere with radius 2 cm',
          type: 'Easy',
          explaination: 'SA = 4π(2)² = 16πcm²\nV = (4/3)π(2)³ = 32π/3 cm³',
          answer: 'Total SA = 16π cm², V = 32π/3 cm³',
        },
        {
          id: 11,
          question: 'Find the exact total surface area and volume of:\nA sphere with radius 3 m',
          type: 'Easy',
          explaination: 'SA = 4π(3)² = 36π m²\nV = (4/3)π(3)³ = (4 × 27π)/3 = 36π m³',
          answer: 'Total SA = 36π m², V = 36π m³',
        },
        {
          id: 12,
          question: 'Find the exact total surface area and volume of:\nA sphere with diameter 8 m',
          type: 'Easy',
          explaination: 'r = 4 m; SA = 4π(4)² = 64π m²\nV = (4/3)π(4)³ = 256π/3 m³',
          answer: 'SA = 64π m², V = 256π/3 m³',
        },
        {
          id: 13,
          question: 'Find the exact total surface area and volume of:\nA sphere with diameter 12 m',
          type: 'Easy',
          explaination: 'r = 6 m; SA = 4π(6)² = 144π m²\nV = (4/3)π(6)³ = 288πm³',
          answer: 'SA = 144π m², V = 288π m³',
        },
        {
          id: 14,
          question:
            'Find the exact total surface area and volume of:\nA hemisphere with radius 1/2 m',
          type: 'Medium',
          explaination:
            'Total SA = 3πr² = 3π(1/2)² = 3π/4 m²\nV = (2/3)πr³ = (2/3)π(1/8) = π/12 m³',
          answer: 'Total SA = 3π/4 m², V = π/12 m³',
        },
        {
          id: 15,
          question:
            'Find the exact total surface area and volume of:\nA hemisphere with radius 2/3 mm',
          type: 'Medium',
          explaination:
            'Total SA = 3π(2/3)² = 3π · 4/9 = 4π/3 mm²\nV = (2/3)π(2/3)³ = (2/3)π · 8/27 = 16π/81 mm³',
          answer: 'Total SA = 4π/3 mm², V = 16π/81 mm³',
        },
        {
          id: 16,
          question:
            'Find the exact total surface area and volume of:\nA cone with base radius 5 cm and height 12 cm',
          type: 'Medium',
          explaination:
            'l = √(5²+12²) = √169 = 13 cm (5-12-13 triple) Total SA = π(5)(13)+π(25) = 65π+25π= 90π cm²\nV = (1/3)π(25)(12) = 100π cm³',
          answer: 'Total SA = 90π cm², V = 100π cm³',
        },
        {
          id: 17,
          question:
            'Find the exact total surface area and volume of:\nA cone with base radius 4 cm and height 3 cm',
          type: 'Medium',
          explaination:
            'l = √(4²+3²) = √25 = 5 cm (3-4-5 triple) Total SA = π(4)(5)+π(16) = 20π+16π= 36π cm²\nV = (1/3)π(16)(3) = 16πcm³',
          answer: 'Total SA = 36π cm², V = 16π cm³',
        },
      ],
      'right-angled-triangles-algebraic-geometry': [
        {
          id: 1,
          question:
            'The two shorter sides of a right-angled triangle are 5 cm and x cm. The numerical value of the area in cm² equals the perimeter in cm. Find the value of x.',
          type: 'Medium',
          explaination:
            'Hypotenuse = √(25 + x²).\nArea = (1/2)(5)(x) = 5x/2.\nPerimeter = 5 + x + √(25 + x²).\nSet equal: 5x/2 = 5 + x + √(25+x²).\nSolve (GDC or algebraically).',
          answer: 'x ≈ 8.09 cm',
        },
      ],
      'distance-between-two-points-2d': [
        {
          id: 1,
          question: 'Find the exact distance between the points (0, 0) and (4, 3).',
          type: 'Easy',
          explaination: 'd = √((4-0)²+(3-0)²) = √(16+9) = √25 = 5',
          answer: '5',
        },
        {
          id: 2,
          question: 'Find the exact distance between the points (0, 0) and (5, 12).',
          type: 'Easy',
          explaination: 'd = √(5²+12²) = √(25+144) = √169 = 13',
          answer: '13',
        },
        {
          id: 3,
          question: 'Find the exact distance between the points (7, 5) and (2, -7).',
          type: 'Easy',
          explaination: 'd = √((2-7)²+(-7-5)²) = √(25+144) = √169 = 13',
          answer: '13',
        },
        {
          id: 4,
          question: 'Find the exact distance between the points (4, -1) and (-2, 7).',
          type: 'Easy',
          explaination: 'd = √((-2-4)²+(7+1)²) = √(36+64) = √100 = 10',
          answer: '10',
        },
        {
          id: 5,
          question: 'Find the exact distance between the points (3, 5) and (-2, 3).',
          type: 'Easy',
          explaination: 'd = √((-2-3)²+(3-5)²) = √(25+4) = √29',
          answer: '√29',
        },
        {
          id: 6,
          question: 'Find the exact distance between the points (-2, 5) and (4, -2).',
          type: 'Easy',
          explaination: 'd = √((4+2)²+(-2-5)²) = √(36+49) = √85',
          answer: '√85',
        },
      ],
      'midpoint-of-a-line-segment-2d': [
        {
          id: 1,
          question: 'Find the midpoint of line segment AB where A(1, 1) and B(7, -3).',
          type: 'Easy',
          explaination: 'M = ((1+7)/2, (1+(-3))/2) = (4, -1)',
          answer: '(4, -1)',
        },
        {
          id: 2,
          question: 'Find the midpoint of line segment AB where A(5, 2) and B(3, 10).',
          type: 'Easy',
          explaination: 'M = ((5+3)/2, (2+10)/2) = (4, 6)',
          answer: '(4, 6)',
        },
      ],
      'distance-of-midpoint-from-origin-3d': [
        {
          id: 1,
          question: 'Find the midpoint of line segment AB where A(1, -3, 7) and B(5, -5, -1).',
          type: 'Easy',
          explaination: 'M = ((1+5)/2, (-3+(-5))/2, (7+(-1))/2) = (3, -4, 3)',
          answer: '(3, -4, 3)',
        },
        {
          id: 2,
          question: 'Find the midpoint of line segment AB where A(2, 4, -8) and B(-4, 0, 6).',
          type: 'Easy',
          explaination: 'M = ((2-4)/2, (4+0)/2, (-8+6)/2) = (-1, 2, -1)',
          answer: '(-1, 2, -1)',
        },
        {
          id: 3,
          question: 'Find the midpoint of line segment AB where A(4, 3, 2) and B(7, 1, -8).',
          type: 'Easy',
          explaination: 'M = ((4+7)/2, (3+1)/2, (2-8)/2) = (11/2, 2, -3)',
          answer: '(11/2, 2, -3)',
        },
        {
          id: 4,
          question: 'Find the midpoint of line segment AB where A(-2, -2, 11) and B(-9, 9, 3).',
          type: 'Easy',
          explaination: 'M = ((-2-9)/2, (-2+9)/2, (11+3)/2) = (-11/2, 7/2, 7)',
          answer: '(-11/2, 7/2, 7)',
        },
        {
          id: 5,
          question:
            'Find the coordinates of the midpoint of the line segment connecting points A(-4, 1, 9) and B(7, 0, 2).',
          type: 'Easy',
          explaination: 'M = ((-4+7)/2, (1+0)/2, (9+2)/2) = (3/2, 1/2, 11/2)',
          answer: '(3/2, 1/2, 11/2)',
        },
        {
          id: 6,
          question:
            'Points A and B have coordinates (3, -18, 8) and (2, -2, 11). Find the distance of the midpoint of AB from the origin.',
          type: 'Medium',
          explaination:
            'M = ((3+2)/2, (-18-2)/2, (8+11)/2) = (5/2, -10, 19/2)\nOM | = √((5/2)²+(-10)²+(19/2)²) = √((25+400+361)/4) = √(786/4) = √786/2 ≈ 14.02',
          answer: '√786/2',
        },
      ],
      'real-life-application-3d-distance-and-speed': [
        {
          id: 1,
          question:
            'A birdhouse of height 1.6 m is located at the origin. A bird flies in a straight line from the birdhouse to the top of a 8.3 m tall tree located at the point with coordinates (14, 3). The flight takes 3.5 seconds. Find the average speed of the bird.',
          type: 'Medium',
          explaination:
            'Birdhouse top: (0,0,1.6); tree top:\n(14, 3, 8.3).\nd = √(14²+3²+(8.3-1.6)²) = √(196+9+44.89) = √249.89 ≈ 15.808 m\nSpeed = d/t = 15.808/3.5 ≈ 4.52 m s⁻¹',
          answer: '≈ 4.52 m s⁻¹',
        },
      ],
      'distance-from-origin-algebraic-3d': [
        {
          id: 1,
          question:
            'The distance of the point (k, 2k, 5k) from the origin is 30. Find the positive value of k.',
          type: 'Medium',
          explaination: '√(k²+(2k)²+(5k)²)=30\n√(k²+4k²+25k²)=30\n√30 · k = 30\nk = 30/√30 = √30',
          answer: 'k = √30',
        },
        {
          id: 2,
          question:
            'The point (2a, a, 5a) is twice as far from the origin as the point (-4, 1, 7). Find the positive value of a.',
          type: 'Hard',
          explaination:
            '(-4,1,7) | = √(16+1+49) = √66\n(2a,a,5a) | = √(4a²+a²+25a²) = a√30\na√30 = 2√66\na = 2√66/√30 = 2√(11/5) = 2√55/5',
          answer: 'a = 2√55/5',
        },
      ],
      'distance-formula-quadratic-equation-3d': [
        {
          id: 1,
          question: 'Find the exact distance between the points (0, 0, 0) and (1, 2, 2).',
          type: 'Easy',
          explaination: 'd = √(1²+2²+2²) = √(1+4+4) = √9 = 3',
          answer: '3',
        },
        {
          id: 2,
          question: 'Find the exact distance between the points (0, 0, 0) and (2, 6, 9).',
          type: 'Easy',
          explaination: 'd = √(2²+6²+9²) = √(4+36+81) = √121 = 11',
          answer: '11',
        },
        {
          id: 3,
          question: 'Find the exact distance between the points (4, 1, 3) and (6, 5, 7).',
          type: 'Easy',
          explaination: 'd = √((6-4)²+(5-1)²+(7-3)²) = √(4+16+16) = √36 = 6',
          answer: '6',
        },
        {
          id: 4,
          question: 'Find the exact distance between the points (-3, 2, -1) and (3, -1, 5).',
          type: 'Easy',
          explaination: 'd = √((3+3)²+(-1-2)²+(5+1)²) = √(36+9+36) = √81 = 9',
          answer: '9',
        },
        {
          id: 5,
          question: 'Find the exact distance between the points (1, 5, -3) and (4, -3, 2).',
          type: 'Easy',
          explaination: 'd = √((4-1)²+(-3-5)²+(2+3)²) = √(9+64+25) = √98 = 7√2',
          answer: '7√2',
        },
        {
          id: 6,
          question: 'Find the exact distance between the points (-4, -3, 7) and (2, 2, 9).',
          type: 'Easy',
          explaination: 'd = √((2+4)²+(2+3)²+(9-7)²) = √(36+25+4) = √65',
          answer: '√65',
        },
        {
          id: 7,
          question: 'Find the length of segment AB where A(-4, 1, 9) and B(7, 0, 2).',
          type: 'Easy',
          explaination: 'AB | = √((7+4)²+(0-1)²+(2-9)²) = √(121+1+49) = √171 = 3√19',
          answer: '3√19',
        },
        {
          id: 8,
          question:
            'The distance between points (k, k, 0) and (1, -1, 3k) is √46. Find the two possible values of k.',
          type: 'Medium',
          explaination:
            '(k-1)²+(k+1)²+(3k)² = 46\nk²-2k+1+k²+2k+1+9k² = 46\n11k²+2 = 46\nk² = 4 ⇒ k = ± 2',
          answer: 'k = 2 or k = -2',
        },
      ],
      '3d-coordinates-real-life-context-tent': [],
      '3d-distance-fly-flying-diagonally': [
        {
          id: 1,
          question:
            'An empty room is 3 m by 4 m by 5 m. A spider and a fly start in one corner of the room.\nThe fly travels to the furthest corner of the room by flying (straight line). What is the shortest distance it can travel?',
          type: 'Medium',
          explaination:
            'Straight-line (3D) distance between opposite corners:\nd = √(3²+4²+5²) = √(9+16+25) = √50 = 5√2 ≈ 7.07 m',
          answer: '5√2 ≈ 7.07 m',
        },
      ],
      'shortest-path-on-surface-unfolding-method': [
        {
          id: 1,
          question:
            'An empty room is 3 m by 4 m by 5 m. A spider and a fly start in one corner. The fly is at the opposite corner.\nThe spider chases the fly by crawling along any wall. What is the shortest distance the spider can travel to reach the fly?',
          type: 'Hard',
          explaination:
            'Unfold the room surfaces into a flat net and apply the distance formula.\nThree possible routes:\n(i) Over 3m + 4m faces: √((3+4)²+5²)=√(49+25)=√74\n(ii) Over 3m + 5m faces: √((3+5)²+4²)=√(64+16)=√80\n(iii) Over 4m + 5m faces: √((4+5)²+3²)=√(81+9)=√90 Minimum = √74 ≈ 8.60 m',
          answer: '√74 ≈ 8.60 m',
        },
      ],
    },
  },
  {
    'sequences-series-algebra': {
      title: 'Sequences & Series / Algebra',
      'infinite-geometric-series-exponential-equations': [
        {
          id: 1,
          question:
            'Given that Σ[k=0 to ∞] e⁻⁽²ᵏ⁺¹⁾ˣ = 2/3,\na) Show that 2e²ˣ - 3eˣ - 2 = 0\nb) Hence, find the exact value of x.',
          type: 'Hard',
          explaination:
            'a) LHS is geometric series with first term e⁻ˣ and ratio e⁻²ˣ (|e⁻²ˣ|<1).\nSum = (e⁻ˣ)/(1-e⁻²ˣ) = 2/3.\n3e⁻ˣ = 2(1-e⁻²ˣ). Multiply by e²ˣ:\n3eˣ = 2e²ˣ - 2 ⇒ 2e²ˣ-3eˣ-2=0 ✓\nb) Let u=eˣ: 2u²-3u-2=0.\n(2u+1)(u-2)=0 ⇒ u=2 (since u=eˣ>0).\neˣ=2 ⇒ x=ln 2.',
          answer: 'b) x = ln 2',
        },
      ],
    },
  },
  {
    'coordinate-geometry': {
      title: 'Coordinate Geometry',
      'midpoint-with-unknown-parameters-system-of-equations': [
        {
          id: 1,
          question:
            'The midpoint of the line segment connecting points P(3a+1, 2a) and Q(5-b, b+3) has coordinates (4, -5).\nFind the values of a and b.',
          type: 'Medium',
          explaination:
            'x: ((3a+1)+(5-b))/2=4 ⇒ 3a-b=2 (1)\ny: (2a+(b+3))/2=-5 ⇒ 2a+b=-13 (2) Adding (1)+(2): 5a=-11 ⇒ a=-11/5 From (2): b=-13-2(-11/5)=-13+22/5=-43/5',
          answer: 'a = -11/5, b = -43/5',
        },
      ],
      'gradient-from-equation-of-a-line': [
        {
          id: 1,
          question: 'Line l₁ has equation 4x - 7y = 35.\nFind the gradient of the line l₁.',
          type: 'Easy',
          explaination: 'Rearrange: 7y = 4x-35 ⇒ y = (4/7)x - 5 Gradient = 4/7',
          answer: 'm = 4/7',
        },
      ],
      'equation-of-a-perpendicular-line': [
        {
          id: 1,
          question:
            'Line l₁ has equation 4x - 7y = 35.\nLine l₂ passes through the point N(-4, 2) and is perpendicular to l₁. Find the equation of l₂ in the form ax + by = c, where a, b and c are integers.',
          type: 'Medium',
          explaination:
            'Gradient of l₁ = 4/7, so gradient of l₂ = -7/4.\ny-2 = -(7/4)(x+4)\n4y-8 = -7x-28\n7x+4y = -20',
          answer: '7x + 4y = -20',
        },
      ],
      'shortest-distance-from-a-point-to-a-line': [
        {
          id: 1,
          question:
            'Line l₁ has equation 4x - 7y = 35.\nPoint N has coordinates (-4, 2) and P(0, -5) is the foot of the perpendicular from N to l₁.\nHence find the shortest distance from point N to the line l₁.',
          type: 'Hard',
          explaination: 'Shortest distance = |NP|\n= √((0-(-4))²+(-5-2)²) = √(16+49) = √65',
          answer: '√65',
        },
      ],
      'midpoint-of-a-diagonal-of-a-square': [
        {
          id: 1,
          question:
            'A(1, 4) and C(5, 10) are opposite vertices of a square ABCD.\nFind the midpoint of AC.',
          type: 'Easy',
          explaination: 'M = ((1+5)/2, (4+10)/2) = (3, 7)',
          answer: '(3, 7)',
        },
      ],
      'coordinates-of-vertices-of-a-square': [
        {
          id: 1,
          question:
            'A(1, 4) and C(5, 10) are opposite vertices of a square ABCD.\nFind the coordinates of B and D.',
          type: 'Hard',
          explaination:
            'Centre = (3,7); AC⃗ = (4,6), so half-diagonal vector = (2,3).\nPerpendicular half-diagonal vector = (3,-2) (rotate 90°).\nB = (3+3, 7-2) = (6, 5)\nD = (3-3, 7+2) = (0, 9) Verify: |AB|²=(6-1)²+(5-4)²=25+1=26 and |BC|²=(6-5)²+(5-10)²=1+25=26 ✓',
          answer: 'B(6, 5) and D(0, 9)',
        },
        {
          id: 2,
          question:
            'The points A(1, 1) and C(8, 8) form opposite ends of a diagonal of rhombus ABCD. The gradient of line segment AB is 4/3.\nFind the coordinates of B and D.',
          type: 'Hard',
          explaination:
            'Line through A(1,1) with gradient 4/3:\ny-1=(4/3)(x-1) ⇒ y=(4/3)x-1/3 Intersect with BD: y=-x+9:\n(4/3)x-1/3=-x+9 ⇒ (7/3)x=28/3 ⇒ x=4, y=5 So B(4, 5).\nD is reflection of B in centre (9/2,9/2):\nD = (9-4, 9-5) = (5, 4)',
          answer: 'B(4, 5) and D(5, 4)',
        },
      ],
      'perpendicular-bisector-diagonals-of-a-rhombus': [
        {
          id: 1,
          question:
            'The points A(1, 1) and C(8, 8) form opposite ends of a diagonal of rhombus ABCD.\nUsing the fact that each diagonal of a rhombus perpendicularly bisects the other, find the equation of the line BD.',
          type: 'Medium',
          explaination:
            'Midpoint of AC = (9/2, 9/2) Gradient of AC = (8-1)/(8-1) = 1 Gradient of BD = -1 (negative reciprocal) y - 9/2 = -1(x - 9/2) ⇒ y = -x+9',
          answer: 'y = -x + 9',
        },
      ],
      'length-of-sides-of-a-rhombus': [
        {
          id: 1,
          question:
            'Rhombus ABCD has vertices A(1, 1), B(4, 5), C(8, 8), D(5, 4).\nFind the length of each side of the rhombus.',
          type: 'Medium',
          explaination:
            'AB | = √((4-1)²+(5-1)²) = √(9+16) = √25 = 5 All sides equal by rhombus property, so each side = 5.',
          answer: '5',
        },
      ],
    },
  },
  {
    'geometry-mensuration': {
      title: 'Geometry & Mensuration',
      'volume-pyramid': [
        {
          id: 1,
          question:
            'Calculate the volume of:\nA triangular-based pyramid with base area 6 cm² and height 3 cm',
          type: 'Easy',
          explaination: 'V = 1/3 × A_base × h = (1/3)(6)(3) = 6 cm³',
          answer: 'V = 6 cm³',
        },
        {
          id: 2,
          question:
            'Calculate the volume of:\nA triangular-based pyramid with base area 8 cm² and height 6 cm',
          type: 'Easy',
          explaination: 'V = (1/3)(8)(6) = 16 cm³',
          answer: 'V = 16 cm³',
        },
        {
          id: 3,
          question:
            'Calculate the volume of:\nA square-based pyramid with base area 5 cm² and height 12 cm',
          type: 'Easy',
          explaination: 'V = (1/3)(5)(12) = 20 cm³',
          answer: 'V = 20 cm³',
        },
        {
          id: 4,
          question:
            'Calculate the volume of:\nA square-based pyramid with base area 9 cm² and height 6 cm',
          type: 'Easy',
          explaination: 'V = (1/3)(9)(6) = 18 cm³',
          answer: 'V = 18 cm³',
        },
      ],
      'volume-cone': [
        {
          id: 1,
          question: 'Calculate the volume of:\nA cone with base area 8 cm² and height 10 cm',
          type: 'Easy',
          explaination: 'V = (1/3)(8)(10) = 80/3 ≈ 26.7 cm³',
          answer: 'V = 80/3 ≈ 26.7 cm³',
        },
        {
          id: 2,
          question: 'Calculate the volume of:\nA cone with base area 2 cm² and height 4 cm',
          type: 'Easy',
          explaination: 'V = (1/3)(2)(4) = 8/3 ≈ 2.67 cm³',
          answer: 'V = 8/3 ≈ 2.67 cm³',
        },
        {
          id: 3,
          question:
            'The base of a conical sculpture is a circle of diameter 3.2 m. The height of the sculpture is 3.1 m.\nFind the volume of the sculpture.',
          type: 'Easy',
          explaination:
            'r = 1.6 m V = (1/3)πr² h = (1/3)π(1.6)²(3.1) = (1/3)π(2.56)(3.1) ≈ 8.34 m³',
          answer: 'V ≈ 8.34 m³',
        },
      ],
      'volume-total-surface-area-right-square-pyramid': [],
      'surface-area-sphere': [
        {
          id: 1,
          question: 'Find the surface area of a sphere with diameter 15 cm.',
          type: 'Easy',
          explaination: 'r = 7.5 cm SA = 4πr² = 4π(7.5)² = 225π ≈ 707 cm²',
          answer: 'SA = 225π ≈ 707 cm²',
        },
      ],
      'total-surface-area-hemisphere': [
        {
          id: 1,
          question: 'A solid hemisphere has radius 3.2 cm. Find its total surface area.',
          type: 'Easy',
          explaination: 'Total SA = 2πr²+πr² = 3πr² = 3π(3.2)² = 30.72π ≈ 96.5 cm²',
          answer: 'Total SA = 30.72π ≈ 96.5 cm²',
        },
      ],
      'volume-hemisphere': [
        {
          id: 1,
          question: 'Find the volume of a solid hemisphere of radius 4 cm.',
          type: 'Easy',
          explaination: 'V = (2/3)πr³ = (2/3)π(4)³ = 128π/3 ≈ 134 cm³',
          answer: 'V = 128π/3 ≈ 134 cm³',
        },
        {
          id: 2,
          question: 'Find the volume of a sphere with diameter 18.3 cm.',
          type: 'Easy',
          explaination: 'r = 9.15 cm V = (4/3)π(9.15)³ ≈ 3210 cm³',
          answer: 'V ≈ 3210 cm³',
        },
      ],
      'surface-area-volume-compound-shape-cylinder-cone': [
        {
          id: 1,
          question:
            'A cylinder with length 1 m and radius 5 cm has a cone of the same radius and length 10 cm attached to one end. Find the surface area and volume of this compound shape.',
          type: 'Medium',
          explaination:
            'Convert units: cylinder length = 100 cm, cone length = 10 cm, r = 5 cm Cone slant height: l = √(10²+5²) = √125 = 5√5 cm SA = cylinder curved + 1 circular end (far end) + cone curved (no shared base) = 2π(5)(100)+π(25)+π(5)(5√5)\n= 1000π+25π+25π√5 = 25π(41+√5) ≈ 3394 cm²\nV_cyl = π(25)(100) = 2500π cm³ V_cone = (1/3)π(25)(10) = 250π/3 cm³ V = 2500π+250π/3 = 7750π/3 ≈ 8115 cm³',
          answer: 'SA = 25π(41+√5) ≈ 3394 cm² V = 7750π/3 ≈ 8115 cm³',
        },
        {
          id: 2,
          question:
            'A toy rocket can be modelled as a cone on top of a cylinder. The cone and the cylinder both have a diameter of 18 cm. The height of the cylinder is 23 cm and the height of the whole toy is 35 cm.\nFind the slant height of the cone.',
          type: 'Medium',
          explaination:
            'Cone height = 35-23 = 12 cm; r = 9 cm l = √(12²+9²) = √225 = 15 cm (9-12-15 = 3×(3-4-5))',
          answer: 'l = 15 cm',
        },
        {
          id: 3,
          question:
            'A toy rocket can be modelled as a cone on top of a cylinder. The cone and the cylinder both have a diameter of 18 cm. The height of the cylinder is 23 cm and the height of the whole toy is 35 cm.\nFind the total surface area of the toy rocket.',
          type: 'Medium',
          explaination:
            'SA = cylinder curved + bottom circle + cone curved = 2π(9)(23)+π(9²)+π(9)(15)\n= 414π+81π+135π= 630π ≈ 1979 cm²',
          answer: 'Total SA = 630π ≈ 1979 cm²',
        },
      ],
      'volume-compound-shape-standard-form': [
        {
          id: 1,
          question:
            'A fence post can be modelled as a cylinder with a hemisphere on top. The cylinder and the hemisphere have the same diameter of 28 cm. The total height of the post is 73 cm. Find the volume of the whole post, giving your answer in standard form.',
          type: 'Medium',
          explaination:
            'r = 14 cm; hemisphere height = 14 cm; cylinder height = 73−14 = 59 cm V_cyl = π(14²)(59) = 11 564π cm³ Vₕₑₘᵢ = (2/3)π(14³) = 5488π/3 cm³ V = 11 564π+5488π/3 = (34 692π+5488π)/3 = (40 180π)/3 ≈ 42 100 ≈ 4.21 × 10⁴ cm³',
          answer: 'V ≈ 4.21 × 10⁴ cm³',
        },
      ],
      'surface-area-cone-reverse-calculation': [
        {
          id: 1,
          question:
            'A cone has vertical height of 12 cm and slant height of 17 cm.\nFind the radius of the base of the cone.',
          type: 'Medium',
          explaination: 'r² = l²-h² = 17²-12² = 289-144 = 145\nr = √145 ≈ 12.04 cm',
          answer: 'r = √145 ≈ 12.0 cm',
        },
        {
          id: 2,
          question:
            'A cone has vertical height of 12 cm and slant height of 17 cm.\nFind the total surface area of the cone.',
          type: 'Medium',
          explaination: 'Total SA = πr l+πr² = π(√145)(17)+π(145)\n= π(17√145+145) ≈ 1098 cm²',
          answer: 'Total SA = π(17√145 +145) ≈ 1098 cm²',
        },
      ],
      'volume-cylinder-cone-reverse-calculation': [
        {
          id: 1,
          question:
            'A cylinder has height 12.3 cm and volume 503.7 cm³.\nFind the radius of the base of the cylinder.',
          type: 'Medium',
          explaination: 'V = πr² h ⇒ r² = 503.7/(π × 12.3) ≈ 13.03 ⇒ r ≈ 3.61 cm',
          answer: 'r ≈ 3.61 cm',
        },
        {
          id: 2,
          question:
            'A cylinder has height 12.3 cm and volume 503.7 cm³.\nFind the height of a cone which has the same radius and same volume as the cylinder.',
          type: 'Medium',
          explaination:
            'For cone with same r and same V:\n(1/3)πr² h_cone = πr² × 12.3\nh_cone = 3 × 12.3 = 36.9 cm',
          answer: 'h_cone = 36.9 cm',
        },
      ],
      'volume-cone-sphere-conservation-of-volume': [
        {
          id: 1,
          question:
            'A metal ornament is made in the shape of a cone with radius 4.7 cm and height 8.3 cm.\nFind the volume of the ornament.',
          type: 'Medium',
          explaination: 'V = (1/3)π(4.7)²(8.3) = (1/3)π(22.09)(8.3) ≈ 192.0 cm³',
          answer: 'V ≈ 192 cm³',
        },
        {
          id: 2,
          question:
            'A metal ornament is made in the shape of a cone with radius 4.7 cm and height 8.3 cm.\nThe ornament is melted down and made into a ball.\nFind the radius of the ball.',
          type: 'Medium',
          explaination: '(4/3)πr³ = 192.0 ⇒ r³ = (192.0 × 3)/4π ≈ 45.84 ⇒ r ≈ 3.58 cm',
          answer: 'r_ball ≈ 3.58 cm',
        },
      ],
      'surface-area-volume-square-pyramid': [
        {
          id: 1,
          question:
            'The base of a pyramid is a square of side 12 cm.\nEach side face is an isosceles triangle with sides 12 cm, 15 cm and 15 cm.\nFind the area of each side face.',
          type: 'Hard',
          explaination:
            'Height of triangular face from apex to the 12 cm base:\nhₜ = √(15²-6²) = √189 = 3√21 cm Area of face = (1/2)(12)(3√21) = 18√21 ≈ 82.5 cm²',
          answer: '18√21 cm² ≈ 82.5 cm²',
        },
        {
          id: 2,
          question:
            'The base of a pyramid is a square of side 12 cm.\nEach side face is an isosceles triangle with sides 12 cm, 15 cm and 15 cm.\nPart a): Find the area of each side face. → 18√21 cm² ≈ 82.5 cm²\nHence find the total surface area of the pyramid.',
          type: 'Hard',
          explaination: 'Total SA = 4(18√21)+12² = 72√21+144 ≈ 474 cm²',
          answer: '(72√21 +144) cm² ≈ 474 cm²',
        },
        {
          id: 3,
          question:
            'The base of a pyramid is a square of side 12 cm.\nEach side face is an isosceles triangle with sides 12 cm, 15 cm and 15 cm.\nFind the volume of the pyramid.',
          type: 'Hard',
          explaination:
            'Pyramid height: slant face height = 3√21 cm, half-base = 6 cm h = √((3√21)²-6²) = √(189-36) = √153 = 3√17 cm V = (1/3)(144)(3√17) = 144√17 ≈ 594 cm³',
          answer: '144√17 cm³ ≈ 594 cm³',
        },
      ],
      'surface-area-volume-compound-shape-cone-with-hemispherical-cavity': [],
      'volume-surface-area-frustum': [],
      'volume-surface-area-square-pyramid-reverse-calculation': [
        {
          id: 1,
          question:
            'A square-based pyramid has height 24 cm and volume 1352 cm³.\nFind the length of one side of the base.',
          type: 'Hard',
          explaination: 'V = (1/3)s² h ⇒ 1352 = (1/3)s²(24) = 8s²\ns² = 169 ⇒ s = 13 cm',
          answer: 's = 13 cm',
        },
        {
          id: 2,
          question:
            'A square-based pyramid has height 24 cm and volume 1352 cm³.\nFind the total surface area of the pyramid.',
          type: 'Hard',
          explaination:
            'Slant face height: l = √(24²+6.5²) = √(576+42.25) = √618.25 ≈ 24.86 cm Lateral SA = 4 × (1/2)(13)(24.86) ≈ 646 cm² Total SA ≈ 646+169 = 815 cm²',
          answer: 'Total SA ≈ 815 cm²',
        },
      ],
      'surface-area-sphere-from-volume': [
        {
          id: 1,
          question: 'Find the surface area of the sphere whose volume is 354 m³.',
          type: 'Medium',
          explaination:
            '(4/3)πr³ = 354 ⇒ r³ = (354 × 3)/4π ≈ 84.53 ⇒ r ≈ 4.387 m SA = 4πr² ≈ 4π(4.387)² ≈ 242 m²',
          answer: 'SA ≈ 242 m²',
        },
      ],
      'volume-surface-area-compound-shape-fencepost': [],
    },
  },
  {
    'geometry-and-trigonometry': {
      title: 'Geometry and Trigonometry',
      'right-angled-triangle-finding-angles': [
        {
          id: 1,
          question: 'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 30° and BC = 5.\nFind AC.',
          type: 'Easy',
          explaination: 'sin(30°) = AC/BC\nAC = 5 sin(30°) = 5 × 0.5 = 2.5',
          answer: 'AC = 2.5',
        },
        {
          id: 2,
          question: 'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 40° and BC = 6.\nFind AC.',
          type: 'Easy',
          explaination: 'AC = 6 sin(40°) ≈ 6 × 0.6428 ≈ 3.86',
          answer: 'AC ≈ 3.86',
        },
        {
          id: 3,
          question: 'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 50° and AC = 6.\nFind BC.',
          type: 'Easy',
          explaination: 'sin(50°) = AC/BC\nBC = 6/(sin(50°)) ≈ 6/0.7660 ≈ 7.83',
          answer: 'BC ≈ 7.83',
        },
        {
          id: 4,
          question:
            'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 60° and AC = 10.\nFind BC.',
          type: 'Easy',
          explaination: 'BC = 10/(sin(60°)) = 10/(√3/2) = 20/√3 ≈ 11.5',
          answer: 'BC ≈ 11.5',
        },
        {
          id: 5,
          question:
            'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 20° and BC = 10.\nFind BA.',
          type: 'Easy',
          explaination: 'cos(20°) = BA/BC\nBA = 10 cos(20°) ≈ 10 × 0.9397 ≈ 9.40',
          answer: 'BA ≈ 9.40',
        },
        {
          id: 6,
          question:
            'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 45° and BC = 20.\nFind BA.',
          type: 'Easy',
          explaination: 'BA = 20 cos(45°) = 20 × √2/2 = 10√2 ≈ 14.1',
          answer: 'BA = 10√2 ≈ 14.1',
        },
        {
          id: 7,
          question:
            'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 55° and AB = 10.\nFind BC.',
          type: 'Easy',
          explaination: 'cos(55°) = AB/BC\nBC = 10/(cos(55°)) ≈ 10/0.5736 ≈ 17.4',
          answer: 'BC ≈ 17.4',
        },
        {
          id: 8,
          question: 'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 70° and AB = 9.\nFind BC.',
          type: 'Easy',
          explaination: 'BC = 9/(cos(70°)) ≈ 9/0.3420 ≈ 26.3',
          answer: 'BC ≈ 26.3',
        },
        {
          id: 9,
          question:
            'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 15° and AB = 10.\nFind AC.',
          type: 'Easy',
          explaination: 'tan(15°) = AC/AB\nAC = 10 tan(15°) ≈ 10 × 0.2679 ≈ 2.68',
          answer: 'AC ≈ 2.68',
        },
        {
          id: 10,
          question:
            'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 65° and AB = 12.\nFind AC.',
          type: 'Easy',
          explaination: 'AC = 12 tan(65°) ≈ 12 × 2.145 ≈ 25.7',
          answer: 'AC ≈ 25.7',
        },
        {
          id: 11,
          question: 'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 2° and AC = 12.\nFind AB.',
          type: 'Easy',
          explaination: 'tan(2°) = AC/AB\nAB = 12/(tan(2°)) ≈ 12/0.03492 ≈ 344',
          answer: 'AB ≈ 344',
        },
        {
          id: 12,
          question:
            'In right-angled triangle ABC where ∠A = 90°, ∠ABC = 80° and AC = 24.\nFind AB.',
          type: 'Easy',
          explaination: 'AB = 24/(tan(80°)) ≈ 24/5.671 ≈ 4.23',
          answer: 'AB ≈ 4.23',
        },
      ],
      'angle-between-a-line-and-an-axis': [
        {
          id: 1,
          question: 'Find the angle between the positive x-axis and y = 3x.',
          type: 'Easy',
          explaination: 'Slope m = 3.\nθ= arctan(3) ≈ 71.6°',
          answer: 'θ ≈ 71.6°',
        },
        {
          id: 2,
          question: 'Find the angle between the positive x-axis and y = 5x.',
          type: 'Easy',
          explaination: 'θ= arctan(5) ≈ 78.7°',
          answer: 'θ ≈ 78.7°',
        },
        {
          id: 3,
          question: 'Find the angle between the positive y-axis and y = 3x.',
          type: 'Easy',
          explaination:
            'Angle with x-axis = arctan(3) ≈ 71.6° Angle with y-axis = 90° - 71.6° ≈ 18.4°',
          answer: 'θ ≈ 18.4°',
        },
        {
          id: 4,
          question: 'Find the angle between the positive y-axis and y = (7/2)x.',
          type: 'Easy',
          explaination:
            'Angle with x-axis = arctan(7/2) ≈ 74.1° Angle with y-axis ≈ 90° -74.1° = 15.9°',
          answer: 'θ ≈ 15.9°',
        },
        {
          id: 5,
          question: 'Find the angle between the positive y-axis and y = -(5/2)x.',
          type: 'Easy',
          explaination:
            'Acute angle with x-axis = arctan(5/2) ≈ 68.2° Angle with y-axis = 90° - 68.2° ≈ 21.8°',
          answer: 'θ ≈ 21.8°',
        },
        {
          id: 6,
          question: 'Find the angle between the positive y-axis and y = -(9/2)x.',
          type: 'Easy',
          explaination:
            'Acute angle with x-axis = arctan(9/2) ≈ 77.3° Angle with y-axis ≈ 90° -77.3° = 12.7°',
          answer: 'θ ≈ 12.7°',
        },
        {
          id: 7,
          question: 'Draw a line with equation y = 3x - 1, labelling both axis intercepts.',
          type: 'Easy',
          explaination: 'x-intercept: 0 = 3x-1 ⇒ x = 1/3\ny-intercept: y = -1',
          answer: 'x-intercept (1/3, 0); y-intercept (0, -1)',
        },
        {
          id: 8,
          question: 'Find the size of the angle that the line y = 3x - 1 makes with the x-axis.',
          type: 'Easy',
          explaination: 'θ= arctan(3) ≈ 71.6°',
          answer: 'θ ≈ 71.6°',
        },
        {
          id: 9,
          question: 'Find the acute angle that the line 4x + 5y = 40 makes with the x-axis.',
          type: 'Medium',
          explaination:
            'Rearrange: y = -(4/5)x + 8, so m = -4/5.\nAcute angle: θ= arctan(4/5) ≈ 38.7°',
          answer: 'θ ≈ 38.7°',
        },
      ],
      'sine-rule-finding-a-side': [
        {
          id: 1,
          question: 'In triangle ABC, ∠A = 45°, ∠B = 30° and a = 12 cm. Find b.',
          type: 'Medium',
          explaination:
            'b/(sin B) = a/(sin A)\nb = (12 sin 30°)/(sin 45°) = (12 × 0.5)/(√2/2) = 6√2 ≈ 8.49 cm',
          answer: 'b = 6√2 ≈ 8.49 cm',
        },
        {
          id: 2,
          question: 'In triangle ABC, ∠A = 60°, ∠B = 45° and a = 8 mm. Find b.',
          type: 'Medium',
          explaination:
            'b = (8 sin 45°)/(sin 60°) = (8 · √2/2)/(√3/2) = 8√2/√3 = 8√(2/3) ≈ 6.53 mm',
          answer: 'b ≈ 6.53 mm',
        },
        {
          id: 3,
          question: 'In triangle PQR, ∠P = 70°, ∠Q = 40° and QR = 5 cm. Find PR.',
          type: 'Medium',
          explaination:
            'Side QR is opposite P; side PR is opposite Q.\nPR/(sin Q) = QR/(sin P)\nPR = (5 sin 40°)/(sin 70°) ≈ (5 × 0.6428)/0.9397 ≈ 3.42 cm',
          answer: 'PR ≈ 3.42 cm',
        },
        {
          id: 4,
          question: 'In triangle PQR, ∠P = 60°, ∠Q = 15° and QR = 11 mm. Find PR.',
          type: 'Medium',
          explaination: 'PR = (11 sin 15°)/(sin 60°) ≈ (11 × 0.2588)/0.8660 ≈ 3.29 mm',
          answer: 'PR ≈ 3.29 mm',
        },
        {
          id: 5,
          question: 'In triangle ABC, ∠A = 23°, ∠C = 72° and a = 1.3 cm. Find b.',
          type: 'Medium',
          explaination:
            '∠B = 180° - 23° - 72° = 85°\nb = (1.3 sin 85°)/(sin 23°) ≈ (1.3 × 0.9962)/0.3907 ≈ 3.31 cm',
          answer: 'b ≈ 3.31 cm',
        },
        {
          id: 6,
          question: 'In triangle ABC, ∠A = 39°, ∠C = 74° and a = 2.8 mm. Find b.',
          type: 'Medium',
          explaination:
            '∠B = 180° - 39° - 74° = 67°\nb = (2.8 sin 67°)/(sin 39°) ≈ (2.8 × 0.9205)/0.6293 ≈ 4.10 mm',
          answer: 'b ≈ 4.10 mm',
        },
        {
          id: 7,
          question: 'In triangle ABC, ∠A = 75°, a = 11 cm and b = 7 cm. Find ∠B.',
          type: 'Medium',
          explaination:
            'sin B = (b sin A)/a = (7 sin 75°)/11 ≈ (7 × 0.9659)/11 ≈ 0.6148\n∠B = arcsin(0.6148) ≈ 38.0°',
          answer: '∠B ≈ 38.0°',
        },
        {
          id: 8,
          question: 'In triangle ABC, ∠A = 82°, a = 9 cm and b = 7 cm. Find ∠B.',
          type: 'Medium',
          explaination: 'sin B = (7 sin 82°)/9 ≈ (7 × 0.9903)/9 ≈ 0.7702\n∠B ≈ 50.3°',
          answer: '∠B ≈ 50.3°',
        },
        {
          id: 9,
          question: 'In triangle PQR, ∠P = 104°, QR = 2.8 cm and PQ = 1.7 cm. Find ∠Q.',
          type: 'Medium',
          explaination:
            'Side PQ is opposite R; side QR is opposite P.\nsin R = (1.7 sin 104°)/2.8 ≈ (1.7 × 0.9703)/2.8 ≈ 0.5888\n∠R ≈ 36.1°\n∠Q = 180° - 104° - 36.1° ≈ 39.9°',
          answer: '∠Q ≈ 39.9°',
        },
        {
          id: 10,
          question: 'In triangle PQR, ∠P = 119°, QR = 13 cm and PQ = 7 cm. Find ∠Q.',
          type: 'Medium',
          explaination:
            'sin R = (7 sin 119°)/13 ≈ (7 × 0.8746)/13 ≈ 0.4710\n∠R ≈ 28.1°\n∠Q = 180° - 119° - 28.1° ≈ 32.9°',
          answer: '∠Q ≈ 32.9°',
        },
        {
          id: 11,
          question: 'In triangle ABC, ∠A = 84°, a = 7.3 cm and c = 7.1 cm. Find ∠B.',
          type: 'Medium',
          explaination:
            'sin C = (7.1 sin 84°)/7.3 ≈ 0.9683\n∠C ≈ 75.4°\n∠B = 180° - 84° - 75.4° ≈ 20.6°',
          answer: '∠B ≈ 20.6°',
        },
        {
          id: 12,
          question: 'In triangle ABC, ∠A = 70°, a = 89 m and c = 81 m. Find ∠B.',
          type: 'Medium',
          explaination:
            'sin C = (81 sin 70°)/89 ≈ 0.8554\n∠C ≈ 58.8°\n∠B = 180° - 70° - 58.8° ≈ 51.2°',
          answer: '∠B ≈ 51.2°',
        },
        {
          id: 13,
          question: 'In triangle ABC, A = 40°, B = 60° and a = 12 cm. Find the length of side b.',
          type: 'Medium',
          explaination:
            'C = 180°-40°-60° = 80°\nb = (12 sin 60°)/(sin 40°) ≈ (12 × 0.8660)/0.6428 ≈ 16.2 cm',
          answer: 'b ≈ 16.2 cm',
        },
        {
          id: 14,
          question: 'Triangle XYZ has X = 66°, x = 10 cm and y = 8 cm. Find ∠Y.',
          type: 'Medium',
          explaination: 'sin Y = (8 sin 66°)/10 ≈ (8 × 0.9135)/10 ≈ 0.7308\n∠Y ≈ 47.0°',
          answer: '∠Y ≈ 47.0°',
        },
        {
          id: 15,
          question: 'Triangle PQR has P = 102°, p = 7 cm and q = 6 cm. Find ∠R.',
          type: 'Medium',
          explaination:
            'sin Q = (6 sin 102°)/7 ≈ (6 × 0.9781)/7 ≈ 0.8384 ⇒ Q ≈ 57.0°\n∠R = 180°-102°-57.0° ≈ 21.0°',
          answer: '∠R ≈ 21.0°',
        },
        {
          id: 16,
          question: 'In triangle ABC, B = 32°, C = 64° and b = 3 cm. Find side a.',
          type: 'Medium',
          explaination:
            'A = 180°-32°-64° = 84°\na = (3 sin 84°)/(sin 32°) ≈ (3 × 0.9945)/0.5299 ≈ 5.63 cm',
          answer: 'a ≈ 5.63 cm',
        },
      ],
      'cosine-rule-finding-a-side': [
        {
          id: 1,
          question: 'In triangle ABC, ∠A = 60°, b = 4 cm and c = 7 cm. Find side length a.',
          type: 'Medium',
          explaination:
            'a² = b² + c² - 2bc cos A = 16 + 49 -56 cos 60° = 65 - 28 = 37\na = √37 ≈ 6.08 cm',
          answer: 'a = √37 ≈ 6.08 cm',
        },
        {
          id: 2,
          question: 'In triangle ABC, ∠A = 60°, b = 5 mm and c = 8 mm. Find side length a.',
          type: 'Medium',
          explaination: 'a² = 25 + 64 - 2(5)(8) cos 60° = 89 - 40 = 49\na = 7 mm',
          answer: 'a = 7 mm',
        },
        {
          id: 3,
          question: 'In triangle PQR, ∠P = 45°, PR = 7 cm and PQ = 6 cm. Find side length QR.',
          type: 'Medium',
          explaination:
            'QR² = PR² + PQ² - 2(PR)(PQ) cos P = 49 + 36 - 84 cos 45° = 85 - 42√2 ≈ 25.6\nQR ≈ 5.06 cm',
          answer: 'QR ≈ 5.06 cm',
        },
        {
          id: 4,
          question: 'In triangle PQR, ∠P = 50°, PR = 8 mm and PQ = 7 mm. Find side length QR.',
          type: 'Medium',
          explaination: 'QR² = 64 + 49 - 112 cos 50° ≈ 113 - 72.0 = 41.0\nQR ≈ 6.40 mm',
          answer: 'QR ≈ 6.40 mm',
        },
        {
          id: 5,
          question: 'In triangle ABC, ∠B = 70°, a = 5 cm and c = 4 cm. Find side length b.',
          type: 'Medium',
          explaination:
            'b² = a² + c² - 2ac cos B = 25 + 16 -40 cos 70° ≈ 41 - 13.68 = 27.32\nb ≈ 5.22 cm',
          answer: 'b ≈ 5.22 cm',
        },
        {
          id: 6,
          question:
            'In triangle ABC, ∠C = 65°, a = 4 mm and b = 7 mm. Find side length a (i.e., the unknown side c opposite C).',
          type: 'Medium',
          explaination:
            'c² = a² + b² - 2ab cos C = 16 + 49 -56 cos 65° ≈ 65 - 23.67 = 41.33\nc ≈ 6.43 mm',
          answer: 'c ≈ 6.43 mm',
        },
        {
          id: 7,
          question: 'In triangle ABC, a = 7 cm, b = 8 cm and c = 11 cm. Find ∠A.',
          type: 'Medium',
          explaination:
            'cos A = (b²+c²-a²)/2bc = (64+121-49)/176 = 136/176 = 17/22\n∠A = arccos(17/22) ≈ 39.4°',
          answer: '∠A ≈ 39.4°',
        },
        {
          id: 8,
          question: 'In triangle ABC, a = 10 cm, b = 12 cm and c = 15 cm. Find ∠A.',
          type: 'Medium',
          explaination: 'cos A = (144+225-100)/360 = 269/360\n∠A ≈ 41.7°',
          answer: '∠A ≈ 41.7°',
        },
        {
          id: 9,
          question: 'In triangle PQR, PQ = 4.2 cm, QR = 5.1 cm and PR = 11 cm. Find ∠Q.',
          type: 'Medium',
          explaination:
            'PQ + QR = 4.2 + 5.1 = 9.3 < PR = 11; the triangle cannot exist with these dimensions. Possible misprint in source.',
          answer: 'Not valid – triangle inequality violated',
        },
        {
          id: 10,
          question: 'In triangle PQR, PQ = 16 cm, QR = 13 cm and PR = 17 cm. Find ∠R.',
          type: 'Medium',
          explaination:
            'cos R = (QR²+PR²-PQ²)/(2 · QR · PR) = (169+289-256)/442 = 202/442 = 101/221\n∠R ≈ 62.7°',
          answer: '∠R ≈ 62.7°',
        },
        {
          id: 11,
          question: 'In triangle ABC, a = 5.7 cm, b = 8.1 cm and c = 6.6 cm. Find ∠C.',
          type: 'Medium',
          explaination:
            'cos C = (a²+b²-c²)/2ab = (32.49+65.61-43.56)/92.34 = 54.54/92.34 ≈ 0.5907\n∠C ≈ 53.8°',
          answer: '∠C ≈ 53.8°',
        },
        {
          id: 12,
          question: 'In triangle ABC, a = 1.4 cm, b = 2.5 cm and c = 1.9 cm. Find ∠B.',
          type: 'Medium',
          explaination:
            'cos B = (a²+c²-b²)/2ac = (1.96+3.61-6.25)/5.32 = -0.68/5.32 ≈ -0.1278\n∠B ≈ 97.4° (obtuse)',
          answer: '∠B ≈ 97.4°',
        },
        {
          id: 13,
          question: 'In triangle ABC, A = 45°, b = 5 cm and c = 8 cm. Find the length of side a.',
          type: 'Medium',
          explaination: 'a² = 25+64-80 cos 45° = 89-40√2 ≈ 32.43\na ≈ 5.69 cm',
          answer: 'a ≈ 5.69 cm',
        },
        {
          id: 14,
          question: 'In triangle ABC, a = 4 cm, b = 6 cm and c = 8 cm. Find ∠A.',
          type: 'Medium',
          explaination: 'cos A = (36+64-16)/96 = 84/96 = 7/8\n∠A = arccos(7/8) ≈ 29.0°',
          answer: '∠A ≈ 29.0°',
        },
      ],
      'area-of-a-triangle': [
        {
          id: 1,
          question: 'In triangle ABC, a = 12 cm, b = 5 cm and ∠C = 72°. Find the area.',
          type: 'Medium',
          explaination: 'Area = (1/2)ab sin C = (1/2)(12)(5) sin 72° ≈ 30 × 0.9511 ≈ 28.5 cm²',
          answer: 'Area ≈ 28.5 cm²',
        },
        {
          id: 2,
          question: 'In triangle ABC, a = 6 mm, b = 7 mm and ∠C = 30°. Find the area.',
          type: 'Medium',
          explaination: 'Area = (1/2)(6)(7) sin 30° = 21 × 0.5 = 10.5 mm²',
          answer: 'Area = 10.5 mm²',
        },
        {
          id: 3,
          question: 'In triangle PQR, PR = 19 cm, QR = 17 cm and ∠R = 52°. Find the area.',
          type: 'Medium',
          explaination: 'Area = (1/2)(19)(17) sin 52° ≈ (1/2)(323)(0.7880) ≈ 127 cm²',
          answer: 'Area ≈ 127 cm²',
        },
        {
          id: 4,
          question: 'In triangle PQR, PR = 3.5 mm, QR = 2.1 mm and ∠R = 28°. Find the area.',
          type: 'Medium',
          explaination: 'Area = (1/2)(3.5)(2.1) sin 28° ≈ 3.675 × 0.4695 ≈ 1.72 mm²',
          answer: 'Area ≈ 1.72 mm²',
        },
        {
          id: 5,
          question: 'In triangle ABC, a = 37 cm, c = 51 cm and ∠B = 42°. Find the area.',
          type: 'Medium',
          explaination: 'Area = (1/2)(37)(51) sin 42° ≈ 943.5 × 0.6691 ≈ 631 cm²',
          answer: 'Area ≈ 631 cm²',
        },
        {
          id: 6,
          question: 'In triangle ABC, b = 61 mm, c = 71 mm and ∠A = 52°. Find the area.',
          type: 'Medium',
          explaination: 'Area = (1/2)(61)(71) sin 52° ≈ 2165.5 × 0.7880 ≈ 1706 mm²',
          answer: 'Area ≈ 1706 mm²',
        },
      ],
      'area-of-a-triangle-finding-unknowns': [
        {
          id: 1,
          question:
            'In triangle ABC, a = 15.5 cm, b = 14.7 cm and the area is 90 cm². Find the acute angle C.',
          type: 'Medium',
          explaination:
            '90 = (1/2)(15.5)(14.7) sin C ⇒ sin C = 90/113.925 ≈ 0.7901\n∠C = arcsin(0.7901) ≈ 52.1°',
          answer: '∠C ≈ 52.1°',
        },
        {
          id: 2,
          question:
            'In triangle ABC, a = 4.8 mm, b = 5.2 mm and the area is 11 mm². Find the acute angle C.',
          type: 'Medium',
          explaination: '11 = (1/2)(4.8)(5.2) sin C ⇒ sin C = 11/12.48 ≈ 0.8814\n∠C ≈ 61.9°',
          answer: '∠C ≈ 61.9°',
        },
        {
          id: 3,
          question: 'In triangle PQR, PR = 12 cm, ∠R = 40° and the area is 32 cm². Find length QR.',
          type: 'Medium',
          explaination: '32 = (1/2)(12)(QR) sin 40° ⇒ QR = 32/(6 sin 40°) ≈ 32/3.857 ≈ 8.30 cm',
          answer: 'QR ≈ 8.30 cm',
        },
        {
          id: 4,
          question: 'In triangle PQR, QR = 8 mm, ∠R = 35° and the area is 12 mm². Find length PR.',
          type: 'Medium',
          explaination: '12 = (1/2)(8)(PR) sin 35° ⇒ PR = 12/(4 sin 35°) ≈ 12/2.294 ≈ 5.23 mm',
          answer: 'PR ≈ 5.23 mm',
        },
        {
          id: 5,
          question: 'In triangle ABC, a = 5.2 cm, ∠B = 55° and the area is 15 cm². Find length c.',
          type: 'Medium',
          explaination: '15 = (1/2)(5.2)(c) sin 55° ⇒ c = 15/(2.6 sin 55°) ≈ 15/2.130 ≈ 7.04 cm',
          answer: 'c ≈ 7.04 cm',
        },
        {
          id: 6,
          question: 'In triangle ABC, a = 6.8 cm, ∠B = 100° and the area is 28 mm². Find length c.',
          type: 'Medium',
          explaination: '28 = (1/2)(6.8)(c) sin 100° ⇒ c = 28/(3.4 sin 100°) ≈ 28/3.349 ≈ 8.36 cm',
          answer: 'c ≈ 8.36 cm',
        },
      ],
      'mixed-trigonometry-multi-step': [],
    },
  },
  {
    'geometry-trig': {
      title: 'Geometry & Trig',
      '3d-trigonometry-cuboid-angles': [],
      '3d-trigonometry-angle-between-lines': [],
      '3d-trig-right-pyramid-angle-acm': [],
      '3d-trig-right-pyramid-find-height': [],
      '3d-trig-diagonal-ag-base-angle': [
        {
          id: 1,
          question:
            'For a cuboid ABCDEFGH with base ABCD, where E, F, G and H lie directly above A, B, C and D, given BH = 15 and DH = 9, find the smallest angle between diagonal AG and the base plane ABCD.',
          type: 'Medium',
          explaination:
            'Interpret: DH=AE=9 (vertical edge), BH = body diagonal.\nBH²=AB²+AD²+AE²=225, so AC²=AB²+AD²=225-81=144, AC=12.\ntan θ=AE/AC=9/12=0.75\nθ=arctan(0.75) ≈ 36.9°',
          answer: '36.9°',
        },
        {
          id: 2,
          question:
            'For a cuboid ABCDEFGH with base ABCD, where E, F, G and H lie directly above A, B, C and D, given BH = 25 and DH = 17, find the smallest angle between diagonal AG and the base plane ABCD.',
          type: 'Medium',
          explaination: 'AE=17, AC=√(625-289) =√336.\nθ=arctan(17/√336) ≈ 42.8°',
          answer: '42.8°',
        },
        {
          id: 3,
          question:
            'For a cuboid ABCDEFGH with base ABCD, where E, F, G and H lie directly above A, B, C and D, given AB = 5, AD = 8 and AE = 7, find the smallest angle between diagonal AG and the base plane ABCD.',
          type: 'Medium',
          explaination: 'AC=√(25+64)=√89.\nθ=arctan(7/√89) ≈ 36.6°',
          answer: '36.6°',
        },
        {
          id: 4,
          question:
            'For a cuboid ABCDEFGH with base ABCD, where E, F, G and H lie directly above A, B, C and D, given AB = 8, AD = 3 and AE = 9, find the smallest angle between diagonal AG and the base plane ABCD.',
          type: 'Medium',
          explaination: 'AC=√(64+9)=√73.\nθ=arctan(9/√73) ≈ 46.5°',
          answer: '46.5°',
        },
        {
          id: 5,
          question:
            'For a cuboid with base ABCD and top EFGH, given face diagonals AE = 6, AF = 7 and AH = 11, find the smallest angle between diagonal AG and the base plane ABCD.',
          type: 'Hard',
          explaination:
            'From AF=√(AB²+AE²)=7:\nAB²=49-36=13.\nFrom AH=√(AD²+AE²)=11:\nAD²=121-36=85.\nAC=√(13+85)=√98.\nθ=arctan(6/√98) ≈ 31.2°',
          answer: '31.2°',
        },
        {
          id: 6,
          question:
            'For a cuboid with base ABCD and top EFGH, given face diagonals AE = 1.2, AF = 2.1 and CF = 4.3, find the smallest angle between diagonal AG and the base plane ABCD.',
          type: 'Hard',
          explaination:
            'AF=√(AB²+AE²)=2.1:\nAB²=4.41-1.44=2.97.\nCF=√(AD²+AE²)=4.3:\nAD²=18.49-1.44=17.05.\nAC=√(2.97+17.05)=√20.02.\nθ=arctan(1.2/√20.02) ≈ 15.0°',
          answer: '15.0°',
        },
      ],
      '3d-trig-pyramid-edge-to-plane-angle': [
        {
          id: 1,
          question:
            'A right pyramid has rectangular base ABCD and vertex M. O is the centre of the base. Given AB = BC = 7 cm and OM = 5 cm, find the angle between edge AM and plane ABCD.',
          type: 'Medium',
          explaination:
            'Square base: AO=7√2/2 cm.\nIn right triangle AOM:\ntan θ=OM/AO=5/(7√2/2)=10/7√2\nθ ≈ 45.3°',
          answer: '45.3°',
        },
        {
          id: 2,
          question:
            'A right pyramid has rectangular base ABCD and vertex M. O is the centre. Given AB = BC = 7 mm and OM = 5 mm, find the angle between edge AM and plane ABCD.',
          type: 'Medium',
          explaination: 'Same method as 13a (units are mm but ratio is the same).\nθ ≈ 45.3°',
          answer: '45.3°',
        },
        {
          id: 3,
          question:
            'A right pyramid has rectangular base ABCD and vertex M. O is the centre. Given AB = 9 cm, BC = 4 cm and OM = 6 cm, find the angle between edge AM and plane ABCD.',
          type: 'Medium',
          explaination: 'AC=√(81+16)=√97, AO=√97/2.\ntan θ=6/(√97/2)=12/√97\nθ ≈ 50.6°',
          answer: '50.6°',
        },
        {
          id: 4,
          question:
            'A right pyramid has rectangular base ABCD and vertex M. O is the centre. Given AB = 11 mm, BC = 12 mm and OM = 15 mm, find the angle between edge AM and plane ABCD.',
          type: 'Medium',
          explaination: 'AC=√(121+144)=√265, AO=√265/2.\ntan θ=15/(√265/2) =30/√265\nθ ≈ 61.5°',
          answer: '61.5°',
        },
        {
          id: 5,
          question:
            'A right pyramid has rectangular base ABCD and vertex M. O is the centre. Given AB = 3 cm, BC = 7 cm and AM = 4 cm, find the angle between edge AM and plane ABCD.',
          type: 'Hard',
          explaination:
            'AO=√(9+49)/2=√58/2.\nOM=√(AM²-AO²)=√(16-58/4)=√(6/4)=√6/2.\ntan θ=OM/AO=(√6/2)/(√58/2)=√(6/58)\nθ ≈ 17.8°',
          answer: '17.8°',
        },
        {
          id: 6,
          question:
            'A right pyramid has rectangular base ABCD and vertex M. O is the centre. Given AB = 6 mm, BC = 8 mm and AM = 13 mm, find the angle between edge AM and plane ABCD.',
          type: 'Hard',
          explaination:
            'AO=√(36+64)/2=10/2=5 mm.\nOM=√(169-25)=√144=12 mm.\ntan θ=12/5\nθ=arctan(2.4) ≈ 67.4°',
          answer: '67.4°',
        },
      ],
      '3d-trig-triangular-pyramid-edge-to-plane': [],
      'bearings-navigation-two-legs': [
        {
          id: 1,
          question:
            'A drone travels 2 km due north and then 1.8 km on a bearing of 145°.\n(i) Find the distance the drone must travel to return to its original position.\n(ii) Find the bearing on which the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            'Displacement: x=1.8 sin 145° ≈ 1.032 km (east), y=2+1.8 cos 145° ≈ 0.526 km (north).\nDistance =√(1.032²+0.526²) ≈ 1.16 km.\nReturn bearing: angle of vector (-x,-y) from north ≈ 243.0°.',
          answer: '(i) 1.16 km;\n(ii) 243.0°',
        },
        {
          id: 2,
          question:
            'A drone travels 3.3 km due south and then 2.1 km on a bearing of 055°.\n(i) Find the distance the drone must travel to return to its original position.\n(ii) Find the bearing on which the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            'x=2.1 sin 55° ≈ 1.720 km, y=-3.3+2.1 cos 55° ≈ -2.094 km.\nDistance ≈ 2.71 km.\nReturn bearing ≈ 320.6°.',
          answer: '(i) 2.71 km;\n(ii) 320.6°',
        },
        {
          id: 3,
          question:
            'A drone travels 1.7 km due east and then 2.3 km on a bearing of 085°.\n(i) Find the distance the drone must travel to return to its original position.\n(ii) Find the bearing on which the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            'x=1.7+2.3 sin 85° ≈ 3.991 km, y=2.3 cos 85° ≈ 0.201 km.\nDistance ≈ 4.0 km.\nReturn bearing ≈ 267.1°.',
          answer: '(i) 4.0 km;\n(ii) 267.1°',
        },
        {
          id: 4,
          question:
            'A drone travels 6.8 km due west and then 9.1 km on a bearing of 035°.\n(i) Find the distance the drone must travel to return to its original position.\n(ii) Find the bearing on which the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            'x=-6.8+9.1 sin 35° ≈ -1.585 km, y=9.1 cos 35° ≈ 7.451 km.\nDistance ≈ 7.62 km.\nReturn bearing ≈ 168.0°.',
          answer: '(i) 7.62 km;\n(ii) 168.0°',
        },
        {
          id: 5,
          question:
            'A drone travels 2.2 km on a bearing of 130° and then 1.8 km on a bearing of 145°.\n(i) Find the distance the drone must travel to return to its original position.\n(ii) Find the bearing on which the drone must travel to return to its original position.',
          type: 'Hard',
          explaination:
            'x=2.2 sin 130°+1.8 sin 145° ≈ 2.714 km, y=2.2 cos 130°+1.8 cos 145° ≈ -2.884 km.\nDistance ≈ 3.97 km.\nReturn bearing ≈ 316.7°.',
          answer: '(i) 3.97 km;\n(ii) 316.7°',
        },
        {
          id: 6,
          question:
            'A drone travels 13 km on a bearing of 220° and then 17 km on a bearing of 105°.\n(i) Find the distance the drone must travel to return to its original position.\n(ii) Find the bearing on which the drone must travel to return to its original position.',
          type: 'Hard',
          explaination:
            'x=13 sin 220°+17 sin 105° ≈ 7.986 km, y=13 cos 220° +17 cos 105° ≈ -14.351 km.\nDistance ≈ 16.47 km.\nReturn bearing ≈ 330.7°.',
          answer: '(i) 16.47 km; (ii) 330.7°',
        },
        {
          id: 7,
          question:
            'From his tent, Mario can see a tree 120 m away on a bearing of 056°. He can also see a rock that is due east of his tent and due south of the tree.\n(a) Sketch and label a diagram showing this information.\n(b) Hence find the distance from the rock to the tree.',
          type: 'Medium',
          explaination:
            '(a) Tent T at origin; tree at (120 sin 56°, 120 cos 56°); rock directly east of T and directly south of tree.\n(b) Rock is at (120 sin 56°, 0); tree at (120 sin 56°, 120 cos 56°).\nDistance =120 cos 56° ≈ 67.1 m.',
          answer: '(b) ≈ 67.1 m',
        },
        {
          id: 8,
          question:
            'A ship sails from a port due north for 1.2 km. It then changes direction and sails another 0.8 km on a bearing of 037°.\n(a) Sketch and label a diagram showing this information.\n(b) Find the final distance of the ship from the port.',
          type: 'Medium',
          explaination:
            '(a) Show two legs and resultant from port.\n(b) x=0.8 sin 37° ≈ 0.481 km, y=1.2+0.8 cos 37° ≈ 1.839 km.\nDistance =√(0.481²+1.839²) ≈ 1.90 km.',
          answer: '(b) ≈ 1.90 km',
        },
        {
          id: 9,
          question:
            'A dog runs 220 m on a bearing of 042° and then a further 180 m on a bearing of 166°. Find the distance and the bearing on which the dog must run to return to its starting position.',
          type: 'Medium',
          explaination:
            'x=220 sin 42°+180 sin 166° ≈ 147.14+43.39=190.53 m.\ny=220 cos 42°+180 cos 166° ≈ 163.52-174.80=-11.28 m.\nReturn distance =√(190.53²+11.28²) ≈ 191.1 m.\nReturn bearing =arctan(-190.53/11.28)+360° ≈ 273.3°',
          answer: 'Distance ≈ 191.1 m, bearing ≈ 273.3°',
        },
        {
          id: 10,
          question:
            'A lighthouse is 2.5 km from a port on a bearing of 035°. An island is 1.3 km from the port on a bearing of 130°. Find the distance and the bearing of the lighthouse from the island.',
          type: 'Hard',
          explaination:
            'Port = origin.\nLighthouse L=(2.5 sin 35°, 2.5 cos 35°) ≈ (1.434, 2.048).\nIsland I=(1.3 sin 130°, 1.3 cos 130°) ≈ (0.996, -0.836).\nIL⃗=(0.438, 2.884).\nDistance ≈ 2.92 km, bearing =arctan(0.438/2.884) ≈ 8.6°',
          answer: 'Distance ≈ 2.92 km, bearing ≈ 008.6°',
        },
        {
          id: 11,
          question:
            'Amy cycles around a park. She cycles 120 m on a bearing of 070°, then 90 m on a bearing of 150° and finally 110 m on a bearing of 250°. How far is she from her starting point?',
          type: 'Hard',
          explaination:
            'x=120 sin 70°+90 sin 150° +110 sin 250° ≈ 112.76+45-103.45=54.31 m.\ny=120 cos 70°+90 cos 150° +110 cos 250° ≈ 41.04-77.94-37.62=-74.52 m.\nDistance =√(54.31²+74.52²) ≈ 92.3 m',
          answer: '≈ 92.3 m',
        },
      ],
      '3d-trig-square-pyramid': [
        {
          id: 1,
          question:
            'The base of a pyramid VABCD is a square ABCD with side length 20 cm. The sloping edges have length 23 cm. M is the midpoint of edge AB and N is the midpoint of edge BC.\nFind the size of angle MVN.',
          type: 'Hard',
          explaination:
            'Place A=(0,0,0), B=(20,0,0), C=(20,20,0), D=(0,20,0).\nApex V=(10,10,h) where h=√(23²-10²-10²)=√329.\nM=(10,0,0), N=(20,10,0).\nVM⃗=(0,-10,-h), VN⃗= (10,0,-h).\ncos(∠MVN)=h²/(100+329)=329/429\n∠MVN ≈ 39.9°',
          answer: '≈ 39.9°',
        },
      ],
      'angles-of-elevation-3d-shapes-cone': [],
      'angles-of-depression': [
        {
          id: 1,
          question:
            "From her window, 9 m above the ground, Julia observes a car at an angle of depression of 12°. Find the distance of the car from the bottom of Julia's building.",
          type: 'Easy',
          explaination: 'tan 12°=9/d\nd=9/(tan 12°) ≈ 42.3 m',
          answer: '42.3 m',
        },
      ],
      'angles-of-elevation-two-observations': [
        {
          id: 1,
          question:
            "A student records the angle of elevation of the top of a statue at two positions on horizontal ground. The angles are 17.7° and 12.0°, recorded before and after walking 5 m directly away from the statue's base.\nFind the height of the statue.",
          type: 'Hard',
          explaination:
            'Let h = height, d = initial distance.\ntan 17.7°=h/d and tan 12°=h/(d+5).\nd=(5 tan 12°)/(tan 17.7°-tan 12°)\nh=d · tan 17.7° ≈ 3.18 m',
          answer: '≈ 3.18 m',
        },
        {
          id: 2,
          question:
            'From the top of a lighthouse, a keeper observes two buoys. The nearest buoy is directly to the east; the second buoy is 18 m south of the first. The angle of depression to the first buoy is 42.5° and to the second buoy is 41.3°. Find the height of the lighthouse above sea level to the nearest metre.',
          type: 'Hard',
          explaination:
            'Let h = height. Horizontal distance to first buoy: d₁=h/(tan 42.5°).\nDistance to second buoy: d₂=√(d₁²+18²)=h/(tan 41.3°).\nh²/(tan² 41.3°)-h²/(tan² 42.5°)=324\nh=√(324/(1/(tan² 41.3°)-1/(tan² 42.5°))) ≈ 56 m',
          answer: '56 m',
        },
      ],
      '3d-trig-cuboid-from-face-diagonals': [],
      '3d-trig-angle-between-space-diagonals': [],
      '3d-trigonometry-pyramid-real-world': [
        {
          id: 1,
          question:
            'The Great Pyramid of Giza has a square base of side 230 m. One of the sloping edges makes an angle of 42° with the base. Find the height of the pyramid.',
          type: 'Hard',
          explaination:
            'Half-diagonal of base =230√2/2=115√2 m.\nHeight =115√2 · tan 42° ≈ 146.4 m',
          answer: '≈ 146.4 m',
        },
        {
          id: 2,
          question:
            'The Louvre pyramid in Paris is a square-based pyramid with base side 34 m and height 21.6 m.\nAn air conditioning company recommends one unit per 1000 m³. How many units are needed? State your assumptions.',
          type: 'Hard',
          explaination:
            'V=1/3 × 34² × 21.6 ≈ 8323 m³. Units needed =⌈8323/1000⌉=9.\nAssumption: pyramid is solid glass with no interior structure.',
          answer: '9 units;',
        },
        {
          id: 3,
          question:
            'The Louvre pyramid in Paris is a square-based pyramid with base side 34 m and height 21.6 m.\nOn a day when external temperature is 20° below required internal temperature, energy is lost at 192 W per m² of glass.\nFind the total power (in kW) required to offset this heat loss.',
          type: 'Hard',
          explaination:
            'Slant height l=√(17²+21.6²) ≈ 27.6 m. Lateral area =4 × 1/2 × 34 × 27.6 ≈ 1870 m².\nPower =192 × 1870 ≈ 359,000 W ≈ 358.9 kW.',
          answer: '≈ 358.9 kW;',
        },
        {
          id: 4,
          question:
            'The Louvre pyramid in Paris is a square-based pyramid with base side 34 m and height 21.6 m.\nPart b): On a day when external temperature is 20° below required internal temperature, energy is lost at 192 W per m² of glass.\nFind the total power (in kW) required to offset this heat loss. → ≈ 358.9 kW;\nScaffolding must be used if the maximum angle of elevation of any face exceeds 50°. Do the cleaners need scaffolding?\nJustify your answer.',
          type: 'Hard',
          explaination:
            'Max elevation angle of face:\narctan(21.6/17) ≈ 51.8°>50°. Yes, scaffolding required.',
          answer: 'Yes – maximum angle ≈ 51.8° > 50°',
        },
      ],
      'angles-of-elevation-art-gallery': [
        {
          id: 1,
          question:
            'Ramiz stands at point R, 19.5 m from the base B of a vertical tree BT. He can see the top T at an angle of elevation of 26°.\nFind the height of the tree.\nMia can see the top of the tree at an angle of elevation of 41°.',
          type: 'Hard',
          explaination: 'h=19.5 tan 26° ≈ 9.51 m.',
          answer: '9.51 m;',
        },
        {
          id: 2,
          question:
            "Ramiz stands at point R, 19.5 m from the base B of a vertical tree BT. He can see the top T at an angle of elevation of 26°.\nFind Mia's distance from the bottom of the tree.",
          type: 'Hard',
          explaination: 'd=h/(tan 41°) ≈ 10.94 m.',
          answer: '10.94 m;',
        },
        {
          id: 3,
          question:
            'Ramiz stands at point R, 19.5 m from the base B of a vertical tree BT. He can see the top T at an angle of elevation of 26°.\nGiven the distance between Mia and Ramiz is 14.7 m, find the size of angle RB̂M to the nearest degree.',
          type: 'Hard',
          explaination:
            'Cosine rule in triangle RBM:\nRB=19.5, BM=10.94, RM=14.7.\ncos(RB̂M)=(19.5²+10.94²-14.7²)/(2 · 19.5 · 10.94) ≈ 0.667\nRB̂M ≈ 48°',
          answer: '48°',
        },
        {
          id: 4,
          question:
            'A visitor at an art gallery sits on the floor, 2.4 m from the wall. The bottom of a painting is seen at an angle of elevation of 55° and the top at an angle of elevation of 72°. Find the height of the painting.',
          type: 'Hard',
          explaination:
            'Height to bottom: h₁=2.4 tan 55° ≈ 3.427 m.\nHeight to top: h₂=2.4 tan 72° ≈ 7.386 m.\nHeight of painting =h₂-h₁ ≈ 3.96 m',
          answer: '≈ 3.96 m',
        },
      ],
      '3d-geometry-triangular-prism-roof': [
        {
          id: 1,
          question:
            'Building regulations state the maximum angle of elevation of a roof is 35°. A building has a footprint of 7 m × 5 m. The roof is an isosceles triangle-based prism with vertical line of symmetry.\nFind the maximum height of the roof.',
          type: 'Hard',
          explaination: 'Half-width =2.5 m; h=2.5 tan 35° ≈ 1.751 m.',
          answer: '≈ 1.75 m;',
        },
        {
          id: 2,
          question:
            'Building regulations state the maximum angle of elevation of a roof is 35°. A building has a footprint of 7 m × 5 m. The roof is an isosceles triangle-based prism with vertical line of symmetry.\nFind the maximum volume of the roof.\nOnly parts of the roof above 0.6 m are classed as usable.',
          type: 'Hard',
          explaination: 'V=1/2 × 5 × 1.751 × 7 ≈ 30.6 m³.',
          answer: '≈ 30.6 m³;',
        },
        {
          id: 3,
          question:
            'Building regulations state the maximum angle of elevation of a roof is 35°. A building has a footprint of 7 m × 5 m. The roof is an isosceles triangle-based prism with vertical line of symmetry.\nWhat percentage of the floor area is usable?',
          type: 'Hard',
          explaination:
            'Width at height 0.6 m:\nw=5 · (h-0.6)/h ≈ 3.286 m (65.7% of 5m).\nUsable floor percentage ≈ 65.7%.',
          answer: '≈ 65.7%;',
        },
        {
          id: 4,
          question:
            'Building regulations state the maximum angle of elevation of a roof is 35°. A building has a footprint of 7 m × 5 m. The roof is an isosceles triangle-based prism with vertical line of symmetry.\nWhat percentage of the volume is usable?',
          type: 'Hard',
          explaination:
            'Cross-sectional area above 0.6m ≈ 1.892 m²; total =4.378 m².\nUsable volume % ≈ 43.2%',
          answer: '≈ 43.2%',
        },
      ],
    },
  },
  {
    'trigonometric-functions': {
      title: 'Trigonometric Functions',
      'tangent-function-horizontal-shift': [
        {
          id: 1,
          question:
            'Sketch the graph of y = tan(x - π/6) for -π/3 ≤ x ≤ 5π/3, labelling the axis intercepts and the equations of the asymptotes.',
          type: 'Medium',
          explaination:
            '1. Identify shift: graph of tan x shifted right by π/6.\n2. Asymptotes of tan x at x = ± π/2 shift to x = π/3 and x = 4π/3.\n3. x-intercepts occur where tan(x - π/6)=0, i.e. x = π/6, 7π/6.\n4. Sketch showing correct shape, intercepts, and asymptotes labelled.',
          answer: 'Asymptotes at x = π/3, x = 4π/3; x-intercepts at x = π/6, x = 7π/6',
        },
        {
          id: 2,
          question:
            'Sketch the graph of y = tan(x - π/3) for -π/6 ≤ x ≤ 11π/6, labelling the axis intercepts and the equations of the asymptotes.',
          type: 'Medium',
          explaination:
            '1. Shift of π/3 right applied to standard tan x.\n2. Asymptotes: x = π/2 + π/3 = 5π/6 and x = 3π/2 + π/3 = 11π/6.\n3. x-intercepts at x = π/3 and x = 4π/3.\n4. Correct sketch with labels.',
          answer: 'Asymptotes at x = 5π/6, x = 11π/6; x-intercepts at x = π/3, x = 4π/3',
        },
        {
          id: 3,
          question:
            'Sketch the graph of y = tan(x + π/2) for 0 < x < 2π, labelling the axis intercepts and the equations of the asymptotes.',
          type: 'Medium',
          explaination:
            '1. Shift of π/2 to the left.\n2. Asymptotes at x = -π/2 + π/2 = 0, x = π, x = 2π.\n3. x-intercepts at x = π/2, x = 3π/2.\n4. Note: tan(x + π/2) = -cot x.',
          answer: 'Asymptotes at x = 0, x = π, x = 2π; x-intercepts at x = π/2, x = 3π/2',
        },
        {
          id: 4,
          question:
            'Sketch the graph of y = tan(x + π/4) for -3π/2 < x < 3π/2, labelling the axis intercepts and the equations of the asymptotes.',
          type: 'Medium',
          explaination:
            '1. Shift π/4 to the left.\n2. Asymptotes: x = -3π/4, x = π/4.\n3. x-intercepts: x = -5π/4 (outside), x = -π/4, x = 3π/4.\n4. Correct sketch.',
          answer:
            'Asymptotes at x = -3π/4, x = π/4, x = 5π/4 (outside domain, so x = π/4 within domain); x-intercepts at x = -π/4, x = 3π/4',
        },
        {
          id: 5,
          question:
            'Sketch the graph of y = tan(x - 45°) for 0° ≤ x ≤ 180°, showing the equations of its asymptotes.',
          type: 'Easy',
          explaination:
            '1. Shift of 45° to the right.\n2. Asymptote: x - 45° = 90° ⇒ x = 135°.\n3. x-intercept: x - 45° = 0° ⇒ x = 45°.\n4. Sketch one branch through (45°, 0) with asymptote at 135°.',
          answer: 'Asymptote at x = 135°; x-intercept at x = 45°',
        },
      ],
      'tangent-function-period-change': [
        {
          id: 1,
          question:
            'Sketch the graph of y = tan 2x for 0 ≤ x ≤ 2π, labelling the axis intercepts and the equations of the asymptotes.',
          type: 'Medium',
          explaination:
            '1. Period of tan 2x = π/2.\n2. Asymptotes at x = π/4 + nπ/2.\n3. x-intercepts at multiples of π/2.\n4. Four full periods in the domain.',
          answer:
            'Period = π/2; asymptotes at x = π/4, 3π/4, 5π/4, 7π/4; x-intercepts at x = 0, π/2, π, 3π/2, 2π',
        },
        {
          id: 2,
          question:
            'Sketch the graph of y = tan 3x for 0 ≤ x ≤ π, labelling the axis intercepts and the equations of the asymptotes.',
          type: 'Medium',
          explaination:
            '1. Period = π/3.\n2. Asymptotes at x = π/6, π/2, 5π/6.\n3. x-intercepts at 0, π/3, 2π/3, π.',
          answer:
            'Period = π/3; asymptotes at x = π/6, π/2, 5π/6; x-intercepts at x = 0, π/3, 2π/3, π',
        },
        {
          id: 3,
          question:
            'Sketch the graph of y = tan(x/3) for 0 ≤ x ≤ π, labelling the axis intercepts and the equations of the asymptotes.',
          type: 'Easy',
          explaination:
            '1. Period = π/(1/3) = 3π.\n2. First asymptote at x = 3π/2, outside the domain.\n3. In [0,π], function is increasing, x-intercept at x=0.\n4. Sketch shows one partial branch.',
          answer: 'Period = 3π; no asymptote in [0, π]; x-intercept at x = 0',
        },
        {
          id: 4,
          question:
            'Sketch the graph of y = tan(x/2) for -π ≤ x ≤ π, labelling the axis intercepts and the equations of the asymptotes.',
          type: 'Easy',
          explaination:
            '1. Period = 2π.\n2. Asymptotes at x = ± π (boundary of domain).\n3. x-intercept at x = 0.\n4. One increasing branch.',
          answer: 'Period = 2π; asymptotes at x = -π and x = π (boundary); x-intercept at x = 0',
        },
      ],
      'transformed-cosine-amplitude-period-phase': [
        {
          id: 1,
          question:
            'Find the period and the amplitude of f(x) = 3 cos(2(x + π/2)) + 1, and the coordinates of the maximum point. Hence sketch the graph of y = f(x) for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            '1. Amplitude = 3 (coefficient of cos).\n2. Period = 2π/2 = π.\n3. Vertical shift d = 1; maximum value = 1 + 3 = 4.\n4. Phase shift: x + π/2 = 0 ⇒ x = -π/2; within domain first max at x = π/2.\n5. Sketch with correct shape, amplitude, midline y=1, and labels.',
          answer: 'Amplitude = 3; Period = π; Maximum point at (π/2, 4) (first in domain)',
        },
        {
          id: 2,
          question:
            'Find the period and the amplitude of f(x) = 2 cos(3(x + π/3)) -1, and the coordinates of the maximum point. Hence sketch the graph of y = f(x) for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            '1. Amplitude = 2.\n2. Period = 2π/3.\n3. Vertical shift d = -1; max value = 2 - 1 = 1.\n4. Phase shift -π/3; first max in domain at x = 0 (check:\n3(0+π/3) = π... adjust: first max where 3(x+π/3) = 2π ⇒ x = π/3).\n5. Correct sketch.',
          answer: 'Amplitude = 2; Period = 2π/3; Maximum value = 1',
        },
        {
          id: 3,
          question:
            'Find the period and the amplitude of f(x) = 2 sin(3(x - π/3)) + 2, and the coordinates of the maximum point. Hence sketch the graph of y = f(x) for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            '1. Amplitude = 2.\n2. Period = 2π/3.\n3. Vertical shift d = 2, so the maximum value is 2 + 2 = 4.\n4. Maximum where 3(x - π/3) = π/2 ⇒ x - π/3 = π/6 ⇒ x = π/2. Adding one period each time gives x = 7π/6 and x = 11π/6.\n5. Sketch the curve through these maxima, with minima of 0 halfway between them.',
          answer:
            'Amplitude = 2; Period = 2π/3; maximum value 4, with maximum points (π/2, 4), (7π/6, 4) and (11π/6, 4) for 0 ≤ x ≤ 2π',
        },
        {
          id: 4,
          question:
            'Find the period and the amplitude of f(x) = 3 sin(2(x - π/2)) - 2, and the coordinates of the maximum point.\nHence sketch the graph of y = f(x) for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            '1. Amplitude = 3.\n2. Period = π.\n3. Max = 3 - 2 = 1.\n4. Max where 2(x - π/2) = π/2 ⇒ x = 3π/4.\n5. Sketch.',
          answer: 'Amplitude = 3; Period = π; Maximum value = 1, first max at x = 3π/4',
        },
        {
          id: 5,
          question:
            'Find the period and the amplitude of f(x) = sin((1/2)(x + π/2)) - 3, and the coordinates of the maximum point. Hence sketch the graph of y = f(x) for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            '1. Amplitude = 1.\n2. Period = 2π/(1/2) = 4π.\n3. Vertical shift -3; max = 1 - 3 = -2.\n4. Max where (1/2)(x + π/2) = π/2 ⇒ x = 3π/2.\n5. Sketch partial period.',
          answer: 'Amplitude = 1; Period = 4π; Maximum value = -2, first max in domain at x = 3π/2',
        },
        {
          id: 6,
          question:
            'Find the period and the amplitude of f(x) = cos((1/2)(x - π/2)) + 3, and the coordinates of the maximum point. Hence sketch the graph of y = f(x) for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            '1. Amplitude = 1.\n2. Period = 4π.\n3. Max = 1 + 3 = 4.\n4. Max where (1/2)(x - π/2) = 0 ⇒ x = π/2.\n5. Sketch.',
          answer: 'Amplitude = 1; Period = 4π; Maximum value = 4, max at x = π/2',
        },
      ],
      'transformed-sine-vertical-reflection-and-shift': [
        {
          id: 1,
          question:
            'Find the period and the amplitude of f(x) = 2- 3 sin(x + π), and the coordinates of the maximum point. Hence sketch the graph of y = f(x) for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            '1. Write as 2 + 3 sin(-(x+π)) = 2 -3 sin(x+π). Amplitude = 3.\n2. Period = 2π.\n3. Since -3 sin(x+π): max when sin(x+π) = -1, i.e. x + π= 3π/2 ⇒ x = π/2.\n4. Max value = 2 + 3 = 5.\n5. Sketch.',
          answer: 'Amplitude = 3; Period = 2π; Maximum value = 5, at x = π/2',
        },
        {
          id: 2,
          question:
            'Find the period and the amplitude of f(x) = 3- 2 sin(x - π), and the coordinates of the maximum point. Hence sketch the graph of y = f(x) for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            '1. Amplitude = 2, vertical shift d = 3.\n2. Period = 2π.\n3. Max when sin(x-π) = -1 ⇒ x - π= -π/2 ⇒ x = π/2 (or x = 3π/2).\n4. Max = 3 + 2 = 5.\n5. Sketch.',
          answer: 'Amplitude = 2; Period = 2π; Maximum value = 5, at x = 3π/2',
        },
      ],
      'finding-constants-from-graph-asin-bx-d': [],
      'period-of-trigonometric-function': [
        {
          id: 1,
          question:
            'Find the exact period of the function f(x) = 3 sin(4x), where x is in radians.',
          type: 'Easy',
          explaination: 'Period = 2π/b = 2π/4 = π/2',
          answer: 'T = π/2',
        },
      ],
      'tangent-function-finding-period-multiplier-from-graph': [],
      'sketching-two-trig-functions-on-same-axes': [
        {
          id: 1,
          question:
            'Sketch the graph of y = cos 2x and y = 3 sin x on the same axes, for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            'y = cos 2x: period π, amplitude 1. y = 3 sin x: period 2π, amplitude 3. Sketch both showing correct shape, intercepts, and scale.',
          answer: 'Correct sketches of both functions on same axes',
        },
      ],
      'number-of-solutions-from-graph': [
        {
          id: 1,
          question:
            'State the number of solutions of the equation cos 2x = 3 sin x for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            'cos 2x = 1 - 2 sin²x, so 2 sin²x + 3 sin x - 1 = 0 ⇒ sin x = (-3 + √17)/4 ≈ 0.281 (the other root is less than -1).\nsin x ≈ 0.281 has two solutions in 0 ≤ x ≤ 2π, so the graphs of y = cos 2x and y = 3 sin x intersect twice.',
          answer: '2 solutions',
        },
        {
          id: 2,
          question:
            'Find the number of solutions of the equation cos 2x = 3 sin x for -2π ≤ x ≤ 4π.',
          type: 'Hard',
          explaination:
            'There are 2 solutions in each interval of length 2π (sin x ≈ 0.281 twice per period).\nThe domain -2π ≤ x ≤ 4π covers 3 periods, so there are 3 × 2 = 6 solutions.',
          answer: '6 solutions',
        },
      ],
      'period-of-sum-of-trig-functions': [
        {
          id: 1,
          question:
            'Find the period of the function f(x) = 2 sin 2x + 3 sin 6x, where x is in radians.',
          type: 'Hard',
          explaination:
            '1. Period of 2 sin 2x = π. Period of 3 sin 6x = π/3.\n2. Period of sum = LCM(π, π/3) = π.',
          answer: 'T = π',
        },
      ],
      'rational-trigonometric-function-asymptotes': [
        {
          id: 1,
          question:
            'The function f(x) is defined by f(x) = 3/(7 + 3 sin(2x)).\nDoes the graph of f(x) have any vertical asymptotes? Justify your answer.',
          type: 'Hard',
          explaination:
            'Vertical asymptotes occur where denominator = 0: 7 + 3 sin(2x) = 0 ⇒ sin(2x) = -7/3. Since |sin(2x)| ≤ 1 < 7/3, this has no solution.\nTherefore no vertical asymptotes.',
          answer: 'No vertical asymptotes',
        },
      ],
      'rational-trigonometric-function-maximum-value': [
        {
          id: 1,
          question:
            'The function f(x) is defined by f(x) = 3/(7 + 3 sin(2x)).\nFind the maximum value of f(x), and the first positive value of x for which this maximum occurs.',
          type: 'Hard',
          explaination:
            '1. f(x) is maximised when denominator is minimised.\n2. Denominator minimised when sin(2x) = -1.\n3. Min denominator = 7 - 3 = 4, so max f(x) = 3/4.\n4. sin(2x) = -1 ⇒ 2x = 3π/2 ⇒ x = 3π/4.',
          answer: 'Maximum = 3/4, first at x = 3π/4',
        },
      ],
    },
  },
  {
    statistics: {
      title: 'Statistics',
      'scatter-diagrams': [],
      'describing-correlation': [],
      'pearsons-pmcc': [],
      'regression-line': [],
      'predictions-and-reliability': [
        {
          id: 1,
          question:
            "Daniel wants to investigate whether there is any relationship between head circumference (x cm) and arm length (y cm). He collects data from six of his friends and finds that the value of Pearson's product-moment correlation coefficient is 0.741 and the equation of the regression line is y = 1.13x - 17.6.\nThe head circumferences ranged from 48.5 cm to 53.4 cm and the mean head circumference was 51.7 cm.\nDescribe the correlation between the head circumference and arm length.",
          type: 'Medium',
          explaination:
            'r=0.741: moderate to strong positive linear correlation between head circumference and arm length.',
          answer: 'Moderate/stron g positive linear correlation.',
        },
        {
          id: 2,
          question:
            "Daniel wants to investigate whether there is any relationship between head circumference (x cm) and arm length (y cm). He collects data from six of his friends and finds that the value of Pearson's product-moment correlation coefficient is 0.741 and the equation of the regression line is y = 1.13x - 17.6.\nThe head circumferences ranged from 48.5 cm to 53.4 cm and the mean head circumference was 51.7 cm.\nPart a): Describe the correlation between the head circumference and arm length. → Moderate/stron g positive linear correlation.\nDaniel uses his regression line to estimate the arm length of a friend whose head circumference is 49.2 cm. Should this estimate be considered reliable? Explain your answer.",
          type: 'Medium',
          explaination:
            'x=49.2 lies within [48.5, 53.4] (interpolation) and r is reasonably strong → estimate is reliable.',
          answer: 'Yes, reliable — 49.2 cm is within the range [48.5, 53.4].',
        },
        {
          id: 3,
          question:
            "Daniel wants to investigate whether there is any relationship between head circumference (x cm) and arm length (y cm). He collects data from six of his friends and finds that the value of Pearson's product-moment correlation coefficient is 0.741 and the equation of the regression line is y = 1.13x - 17.6.\nThe head circumferences ranged from 48.5 cm to 53.4 cm and the mean head circumference was 51.7 cm.\nFind the mean arm length for this sample.",
          type: 'Medium',
          explaination:
            'Since the regression line passes through (x̄,ȳ):\nȳ = 1.13 × 51.7 - 17.6 = 58.421 - 17.6 = 40.8 cm.',
          answer: 'ȳ = 1.13(51.7) -17.6 ≈ 40.8 cm.',
        },
        {
          id: 4,
          question:
            'A sales manager recorded the monthly sales (x thousand dollars) and the amount spent on advertising in the previous month (y hundred dollars) over a period of time. The regression lines are:\ny = 0.745x - 0.290 (y on x)\nx = 1.01y + 1.32 (x on y)\nEstimate the monthly profit (in $000) the month after $250 was spent on advertising.',
          type: 'Medium',
          explaination:
            '1. $250 spent on advertising means y = 2.5 (since y is in $100s) [1 mark].\n2. We want to predict x (sales) from y (advertising) → use x- on-y line [1 mark].\n3. x = 1.01(2.5) + 1.32 = 2.525 + 1.32 = 3.845 ≈ 3.85 (i.e. $3850) [1 mark]',
          answer: 'x ≈ 3.85 thousand dollars',
        },
      ],
      'correlation-and-regression': [],
      'regression-interpretation': [
        {
          id: 1,
          question:
            'A company records its advertising budget, x-thousand euros, and its profit, y- thousand euros, over a number of years. They find that the correlation coefficient between the two variables is 0.825 and that the equation of the regression line is y = 3.25x + 13.8.\nDescribe, in context, the relationship between the advertising budget and the profit.',
          type: 'Medium',
          explaination:
            'r=0.825 suggests a strong positive linear relationship: higher advertising budgets are associated with higher profits.',
          answer:
            'Strong positive linear correlation — companies with higher advertising budgets tend to make higher profits.',
        },
        {
          id: 2,
          question:
            'A company records its advertising budget, x-thousand euros, and its profit, y- thousand euros, over a number of years. They find that the correlation coefficient between the two variables is 0.825 and that the equation of the regression line is y = 3.25x + 13.8.\nDoes the value of the correlation coefficient show that increasing the advertising budget wil lead to an increase in profit?',
          type: 'Medium',
          explaination:
            'No — correlation does not prove causation. Other factors may be responsible for higher profits.',
          answer: 'No — correlation does not imply causation.',
        },
        {
          id: 3,
          question:
            'A company records its advertising budget, x-thousand euros, and its profit, y- thousand euros, over a number of years. They find that the correlation coefficient between the two variables is 0.825 and that the equation of the regression line is y = 3.25x + 13.8.\nInterpret the values:\n(i) 3.25\n(ii) 13.8 in the equation of the regression line.',
          type: 'Medium',
          explaination:
            '(i) Gradient = 3.25: for each 1000 € increase in advertising budget, profit is predicted to increase by 3250 €.\n(ii) Intercept = 13.8: when advertising budget = 0, the model predicts profit o 13,800 €. .',
          answer:
            '(i) For each additional thousand euros of advertising, profit increases by approximately 3.25 thousand euros.\n(ii) When the advertising budget is zero, the predicted profit is 13.8 thousand euros',
        },
      ],
      'regression-two-regions': [],
      'regression-line-of-x-on-y': [],
      'regression-line-selection-prediction-reliability': [
        {
          id: 1,
          question:
            'Elena collected some data on the number of people visiting a park in a day (x) and maximum daily temperature (y °C) over a period of time.\nShe calculated the equations of two regression lines:\ny = 0.0928x - 4.26 and x = 12.5y + 68.2 Use the appropriate equation to predict the number of people visiting the park on a day when the maximum temperature is 23.6°C.',
          type: 'Easy',
          explaination:
            '1. We want to predict x (number of visitors) from y (temperature), so use the regression line of x on y [1 mark].\n2. Substitute y = 23.6:\nx = 12.5(23.6) + 68.2 = 295 + 68.2 = 363.2 [1 mark]\n3. x ≈ 363 people [1 mark]',
          answer: 'x ≈ 363 people',
        },
      ],
      'mean-values-from-regression-lines': [
        {
          id: 1,
          question:
            'A sales manager recorded the monthly sales (x thousand dollars) and the amount spent on advertising in the previous month (y hundred dollars) over a period of time. The regression lines are:\ny = 0.745x - 0.290 (y on x)\nx = 1.01y + 1.32 (x on y)\nFind the mean monthly sales and the mean amount spent on advertising.',
          type: 'Medium',
          explaination:
            'Both regression lines pass through (x̄, ȳ).\nȳ = 0.745x̄ - 0.290 (1)\nx̄ = 1.01ȳ + 1.32 (2)\nSubstitute (2) into (1): ȳ = 0.745(1.01ȳ + 1.32) - 0.290 = 0.75245ȳ + 0.6934\n0.24755ȳ = 0.6934 ⇒ ȳ ≈ 2.80\nx̄ = 1.01(2.80) + 1.32 ≈ 4.15',
          answer: 'x̄ ≈ 4.15 ($4150), ȳ ≈ 2.80 ($280)',
        },
      ],
      'interpreting-r2-and-deducing-r': [
        {
          id: 1,
          question:
            'Antonia inputted some data into a spreadsheet. The spreadsheet reported that the y-on-x regression line is y = -0.5x + 4 and r² = 1.\nState, with justification, the value of r.',
          type: 'Easy',
          explaination:
            '1. r² = 1 ⇒ r = ± 1 [1 mark]\n2. The gradient of the regression line is -0.5 < 0, so the data has a negative correlation [1 mark]\n3. Therefore r = -1',
          answer: 'r = -1',
        },
      ],
      'deriving-x-on-y-regression-line-from-y-on-x-line-when-r-1': [
        {
          id: 1,
          question:
            'Antonia inputted some data into a spreadsheet. The spreadsheet reported that the y-on-x regression line is y = -0.5x + 4 and r² = 1.\nFind the equation of the x-on-y regression line in the form x = ay + b.',
          type: 'Medium',
          explaination:
            '1. Since r² = 1, both regression lines are identical (the data lies perfectly on a straight line) [1 mark].\n2. Rearrange y = -0.5x + 4:\ny - 4 = -0.5x\nx = -2y + 8 [2 marks]\n3. Therefore x = -2y + 8',
          answer: 'x = -2y + 8',
        },
      ],
      'interpreting-gradient-of-regression-line-estimation': [
        {
          id: 1,
          question:
            'Phillip has some data on the distance travelled in a straight line by a snail y (in cm) after a time t (in minutes). He finds that the equation of the regression line is y = 6t + 5 and the correlation coefficient is r = 0.6.\nBased on this regression line, estimate the speed of the snail. Explain, based on the regression line, why your answer is only an estimate.',
          type: 'Medium',
          explaination:
            '1. Speed = gradient of distance-time graph = coefficient of t in the regression line [1 mark].\n2. Speed = 6 cm per minute [1 mark].\n3. The regression line gives an estimate because r = 0.6 indicates only a moderate correlation, so the line is not a perfect fit to the data (scatter around the line) [1 mark].',
          answer: 'Speed ≈ 6 cm per minute (estimated from gradient)',
        },
      ],
      'changing-units-in-regression-equations': [
        {
          id: 1,
          question:
            "Phillip records the distance travelled in a straight line by a snail. The regression line is y = 6t + 5, where y is distance in cm and t is time in minutes:\nThe distance travelled in metres is denoted Y and the time taken in hours is denoted T.\nFind the equation of the Y-on-T regression line for Phillip's data.",
          type: 'Hard',
          explaination:
            '1. Convert units: Y = y/100 and T = t/60 [1 mark]\n2. Substitute y = 100Y and t = 60T into y = 6t + 5:\n100Y = 6(60T) + 5\n100Y = 360T + 5\nY = 3.6T + 0.05 [2 marks]',
          answer: 'Y = 3.6T + 0.05',
        },
      ],
      'correlation-coefficient-invariance-under-linear-scaling': [
        {
          id: 1,
          question:
            'Phillip has some data on the distance travelled in a straight line by a snail y (in cm) after a time t (in minutes). He finds that the equation of the regression line is y = 6t + 5 and the correlation coefficient is r = 0.6.\nFind the correlation coefficient of Y (metres) and T (hours).',
          type: 'Easy',
          explaination:
            'The correlation coefficient is invariant under positive linear transformations of the variables [1 mark].\nSince Y = y/100 and T = t/60 are both positive scalings, r_YT = r_yt = 0.6.',
          answer: 'r = 0.6',
        },
      ],
    },
  },
  {
    probability: {
      title: 'Probability',
      'experimental-probability': [
        {
          id: 1,
          question:
            'Out of a random sample of 40 children at a school, 12 were found to have a pet.\nEstimate the probability that a child at this school has a pet.',
          type: 'Easy',
          explaination:
            'Relative frequency = favourable outcomes / total trials P = 12/40 = 3/10 = 0.3',
          answer: 'P(pet) = 12/40 = 3/10',
        },
        {
          id: 2,
          question:
            'A random sample of 60 flowers was collected from a meadow and 8 were found to have six petals.\nFind the probability that a flower from this meadow has six petals.',
          type: 'Easy',
          explaination: 'P = 8/60 = 2/15 ≈ 0.133',
          answer: 'P(six petals) = 8/60 = 2/15',
        },
        {
          id: 3,
          question:
            'A biased dice is rolled 90 times and 18 sixes were obtained.\nFind the probability of rolling a six on this dice.',
          type: 'Easy',
          explaination: 'P = 18/90 = 1/5 = 0.2',
          answer: 'P(6) = 18/90 = 1/5',
        },
        {
          id: 4,
          question:
            'Daniel took 25 shots at a target and hit it 15 times.\nFind the probability that he hits the target next time.',
          type: 'Easy',
          explaination: 'P = 15/25 = 3/5 = 0.6',
          answer: 'P(hit) = 15/25 = 3/5',
        },
      ],
      'theoretical-probability': [
        {
          id: 1,
          question:
            'A standard six-sided dice is rolled.\nFind the probability that the outcome is an even number.',
          type: 'Easy',
          explaination: 'Even numbers on a die: {2, 4, 6} → 3 outcomes out of 6 P = 3/6 = 1/2',
          answer: 'P(even) = 3/6 = 1/2',
        },
        {
          id: 2,
          question:
            'A standard six-sided dice is rolled.\nFind the probability that the outcome is a multiple of 3.',
          type: 'Easy',
          explaination: 'Multiples of 3 on a die: {3, 6} → 2 outcomes out of 6 P = 2/6 = 1/3',
          answer: 'P(multiple of 3) = 2/6 = 1/3',
        },
        {
          id: 3,
          question:
            'A card is picked at random from a standard pack of 52 cards.\nFind the probability that the selected card is a diamond.',
          type: 'Easy',
          explaination: 'There are 13 diamonds in a pack of 52 P = 13/52 = 1/4',
          answer: 'P(diamond) = 13/52 = 1/4',
        },
        {
          id: 4,
          question:
            'A card is picked at random from a standard pack of 52 cards.\nFind the probability that the selected card is an ace.',
          type: 'Easy',
          explaination: 'There are 4 aces in a pack of 52 P = 4/52 = 1/13',
          answer: 'P(ace) = 4/52 = 1/13',
        },
        {
          id: 5,
          question:
            'A card is picked at random from a standard pack of 52 cards.\nFind the probability that the selected card is a red 10.',
          type: 'Easy',
          explaination: 'There are 2 red 10s (hearts and diamonds) in a pack of 52 P = 2/52 = 1/26',
          answer: 'P(red10) = 2/52 = 1/26',
        },
        {
          id: 6,
          question:
            'A card is picked at random from a standard pack of 52 cards.\nFind the probability that the selected card is a black picture card (jack, queen or king).',
          type: 'Easy',
          explaination: 'Black picture cards: J♠, Q♠, K♠, J♣, Q♣, K♣ → 6 cards P = 6/52 = 3/26',
          answer: 'P(black picture card) = 6/52 = 3/26',
        },
      ],
      'complementary-probability': [
        {
          id: 1,
          question:
            'The probability that Elsa does not meet any of her friends on the way to school is 0.06.\nFind the probability that she meets at least one friend on the way to school.',
          type: 'Easy',
          explaination: "Using P(A') = 1 - P(A):\nP(meets at least one) = 1 -0.06 = 0.94",
          answer: 'P(at least one friend) = 1 -0.06 = 0.94',
        },
        {
          id: 2,
          question:
            'The probability that Asher does not score any goals in a football match is 0.45.\nFind the probability that he scores at least one goal.',
          type: 'Easy',
          explaination: 'P(scores at least one) = 1 - P(scores none) = 1 - 0.45 = 0.55',
          answer: 'P(at least one goal) = 1 - 0.45 = 0.55',
        },
        {
          id: 3,
          question:
            'The probability that a biased coin comes up heads is 9/20.\nFind the probability that it comes up tails.',
          type: 'Easy',
          explaination: 'P(T) = 1 - P(H) = 1 - 9/20 = 11/20',
          answer: 'P(tails) = 1 - 9/20 = 11/20',
        },
        {
          id: 4,
          question:
            'The probability of rolling an even number on a biased dice is 17/40.\nFind the probability of rolling an odd number.',
          type: 'Easy',
          explaination: 'P(odd) = 1 - 17/40 = 23/40',
          answer: 'P(odd) = 1 - 17/40 = 23/40',
        },
        {
          id: 5,
          question:
            'The probability that Daniel is late for school on at least one day during a week is 0.15.\nFind the probability that he is on time every day.',
          type: 'Easy',
          explaination: 'P(on time every day) = 1 - P(late at least once) = 1 - 0.15 = 0.85',
          answer: 'P(on time every day) = 1 - 0.15 = 0.85',
        },
        {
          id: 6,
          question:
            'Theo either walks or cycles to school. The probability that he cycles at least one day a week is 0.87.\nFind the probability that he walks every day during a particular week.',
          type: 'Easy',
          explaination:
            'Since Theo either walks or cycles, cycling at least one day and walking every day are complementary:\nP(walks every day) = 1 - 0.87 = 0.13',
          answer: 'P(walks every day) = 1- 0.87 = 0.13',
        },
        {
          id: 7,
          question:
            'When a biased coin is flipped 10 times, the probability of getting more than six tails is 73/120.\nWhat is the probability of getting at most six tails?',
          type: 'Medium',
          explaination:
            "Events 'more than 6 tails' and 'at most 6 tails' are complementary:\nP(≤ 6) = 1 - 73/120 = 47/120",
          answer: 'P(at most 6 tails) = 1 - 73/120 = 47/120',
        },
        {
          id: 8,
          question:
            'When a biased coin is flipped six times, the probability of getting fewer than three heads is 7/48.\nWhat is the probability of getting at least three heads?',
          type: 'Medium',
          explaination:
            "Events 'fewer than 3 heads' and 'at least 3 heads' are complementary:\nP(≥ 3) = 1 - 7/48 = 41/48",
          answer: 'P(at least 3 heads) = 1 - 7/48 = 41/48',
        },
        {
          id: 9,
          question:
            'The probability that it rains on at least four days in a week is 0.27.\nFind the probability that it rains on no more than three days.',
          type: 'Easy',
          explaination: 'P(≤ 3) = 1 - P(≥ 4) = 1 - 0.27 = 0.73',
          answer: 'P(no more than 3days) = 1 -0.27 = 0.73',
        },
        {
          id: 10,
          question:
            'The probability that it is sunny on at most two days in a week is 0.34.\nFind the probability that it is sunny on no fewer than three days.',
          type: 'Easy',
          explaination: 'P(≥ 3) = 1 - P(≤ 2) = 1 - 0.34 = 0.66',
          answer: 'P(no fewer than 3days) = 1 -0.34 = 0.66',
        },
        {
          id: 11,
          question:
            'The probability that an arrow lands within 20 cm of the target is 0.56.\nFind the probability that it lands more than 20 cm away.',
          type: 'Easy',
          explaination: 'P(>20 cm) = 1 - P(≤ 20cm) = 1 - 0.56 = 0.44',
          answer: 'P(more than 20 cm) = 1 - 0.56 = 0.44',
        },
        {
          id: 12,
          question:
            'The probability that a parachutist lands within 20 m of the landing spot is 0.89.\nFind the probability that she lands more than 20 m away.',
          type: 'Easy',
          explaination: 'P(>20 m) = 1 - P(≤ 20m) = 1 - 0.89 = 0.11',
          answer: 'P(more than 20 m) = 1- 0.89 = 0.11',
        },
      ],
      'expected-value': [
        {
          id: 1,
          question:
            'The probability that a packet of crisps contains a toy is 0.2.\nFind the expected number of toys in 20 packets of crisps.',
          type: 'Easy',
          explaination: 'E(X) = n × p = 20 × 0.2 = 4',
          answer: 'E = 20 × 0.2 = 4',
        },
        {
          id: 2,
          question:
            'The probability that a footballer scores a penalty is 0.9. If he takes 30 penalties, find the expected number of goals scored.',
          type: 'Easy',
          explaination: 'E(X) = n × p = 30 × 0.9 = 27',
          answer: 'E = 30 × 0.9 = 27',
        },
        {
          id: 3,
          question:
            'The probability that it rains on any particular day is 2/5.\nFind the expected number of rainy days in a 30-day month.',
          type: 'Easy',
          explaination: 'E(X) = 30 × 2/5 = 12',
          answer: 'E = 30 × 2/5 = 12',
        },
        {
          id: 4,
          question:
            'The probability that a pack of collectable cards contains a particular rare card is 3/70.\nIf I buy 140 packs of cards, how many copies of this rare card should I expect to find?',
          type: 'Easy',
          explaination: 'E(X) = 140 × 3/70 = 420/70 = 6',
          answer: 'E = 140 × 3/70 = 6',
        },
        {
          id: 5,
          question:
            'The probability that a biased coin comes up heads is 0.12.\nFind the expected number of heads when the coin is tossed 40 times.',
          type: 'Easy',
          explaination: 'E(X) = 40 × 0.12 = 4.8',
          answer: 'E = 40 × 0.12 = 4.8',
        },
        {
          id: 6,
          question:
            'The probability that a biased dice lands on a 4 is 0.15.\nFind the expected number of 4s when the dice is rolled 50 times.',
          type: 'Easy',
          explaination: 'E(X) = 50 × 0.15 = 7.5',
          answer: 'E = 50 × 0.15 = 7.5',
        },
        {
          id: 7,
          question:
            'The probability that Adam is late for work is 0.08.\nFind the number of days he is expected to be late in a 20-day period.',
          type: 'Easy',
          explaination: 'E(X) = 20 × 0.08 = 1.6',
          answer: 'E = 20 × 0.08 = 1.6',
        },
        {
          id: 8,
          question:
            'The probability that Sasha forgets her homework is 0.15.\nFind the number of days she is expected to forget her homework in a 10-day period.',
          type: 'Easy',
          explaination: 'E(X) = 10 × 0.15 = 1.5',
          answer: 'E = 10 × 0.15 = 1.5',
        },
        {
          id: 9,
          question:
            'A card is selected from a standard pack of 52 cards and returned to the pack. This is repeated 19 more times.\nFind the expected number of selected cards which are not a diamond.',
          type: 'Medium',
          explaination: 'P(not a diamond) = 39/52 = 3/4 Total selections = 20 E(X) = 20 × 3/4 = 15',
          answer: 'E = 20 × 39/52 = 20 × 3/4 = 15',
        },
        {
          id: 10,
          question:
            'A bag contains eight red sweets and six yellow sweets. Two sweets are selected at random.\nLet X be the number of yellow sweets.\nFind the probability distribution of X.',
          type: 'Medium',
          explaination:
            'Total = 14, choose 2: ¹⁴C₂=91\nP(X=0)=⁸C₂/91 =28/91\nP(X=1)=⁶C₁⁸C₁/91=48/91\nP(X=2)=⁶C₂/91 =15/91',
          answer: 'P(X=0) =28/91, P(X=1)=48/91, P(X=2)=15/91',
        },
        {
          id: 11,
          question:
            'A bag contains eight red sweets and six yellow sweets. Two sweets are selected at random.\nLet X be the number of yellow sweets.\nFind the expected number of yellow sweets.',
          type: 'Medium',
          explaination: 'E(X)=0 · 28/91 +1 · 48/91+2 · 15/91=78/91=6/7',
          answer: 'E(X) =6/7 ≈ 0.857',
        },
        {
          id: 12,
          question:
            'Two cards are selected at random from a standard pack of 52 cards.\nFind the probability that both cards are hearts.',
          type: 'Medium',
          explaination: 'P=¹³C₂/⁵²C₂=78/1326=1/17',
          answer: 'P(both hearts) =1/17',
        },
        {
          id: 13,
          question:
            'Two cards are selected at random from a standard pack of 52 cards.\nFind the probability distribution of H, the number of hearts drawn.',
          type: 'Medium',
          explaination:
            'P(H=0)=³⁹C₂/1326=741/1326\nP(H=1)=(13 · 39)/1326 =507/1326\nP(H=2)=78/1326',
          answer: 'P(H=0) =703/1326, P(H=1) =507/1326, P(H=2) =78/1326',
        },
        {
          id: 14,
          question:
            'Two cards are selected at random from a standard pack of 52 cards.\nFind the expected number of hearts.',
          type: 'Medium',
          explaination: 'E(H)=0 · 741/1326+1 · 507/1326 +2 · 78/1326=663/1326=0.5',
          answer: 'E(H) =0.5',
        },
        {
          id: 15,
          question:
            'A fair coin is tossed three times.\n(a) Draw a tree diagram showing all possible outcomes.\n(b) Find the probability that exactly two heads are rolled.\nLet X be the number of heads.\n(c) Find the probability distribution of X.\n(d) Find the expected number of heads.',
          type: 'Medium',
          explaination:
            '(a) Tree diagram with 8 equally likely outcomes (HHH, HHT, HTH, HTT, THH, THT, TTH, TTT).\n(b) Outcomes with exactly 2 H: HHT, HTH, THH → P=3/8\n(c) Binomial B(3,0.5): values as above.\n(d) E(X)=(1/8)(0+3+6+3) =12/8=1.5',
          answer:
            '(b) P(exactly 2heads)=3/8\n(c) P(X=0) =1/8, P(X=1)=3/8, P(X=2) =3/8, P(X=3)=1/8\n(d) E(X) =1.5',
        },
        {
          id: 16,
          question:
            'A fair four-sided dice (with faces numbered 1 to\n4) is rolled twice and X is the sum of the two scores.\nFind the probability distribution of X.',
          type: 'Medium',
          explaination:
            'Sample space: 16 equally likely outcomes.\nSum 2: (1,1) → 1/16; Sum 3: (1,2), (2,1) → 2/16; ... Sum 8: (4,4) → 1/16',
          answer:
            'P(X=2) =1/16, P(X=3)=2/16, P(X=4) =3/16, P(X=5)=4/16, P(X=6) =3/16, P(X=7)=2/16, P(X=8) =1/16',
        },
        {
          id: 17,
          question:
            'A fair four-sided dice (with faces numbered 1 to\n4) is rolled twice and X is the sum of the two scores.\nFind the expected total score.',
          type: 'Medium',
          explaination: 'E(X)=Σx · P(X=x) =2 · 1/16+3 · 2/16 +…+8 · 1/16=80/16=5',
          answer: 'E(X) =5',
        },
      ],
      'experimental-expected-value': [
        {
          id: 1,
          question:
            'A clinical trial involved 350 participants. 26 of them experienced some negative side-effects from the drug.\nEstimate the probability that the drug produces a negative side-effect.',
          type: 'Medium',
          explaination: 'Relative frequency: P = 26/350 = 13/175 ≈ 0.0743',
          answer: 'P(side-effect) = 26/350 = 13/175',
        },
        {
          id: 2,
          question:
            'A clinical trial involved 350 participants. 26 of them experienced some negative side-effects from the drug.\nA larger trial is conducted with 900 participants. How many of them are expected to experience negative side-effects?',
          type: 'Medium',
          explaination: 'E(X) = 900 × 13/175 ≈ 66.9 Round to nearest whole person ≈ 67',
          answer: 'E = 900 × 13/175 = 11700/175 ≈ 66.9 ≈ 67',
        },
      ],
      'theoretical-expected-value': [
        {
          id: 1,
          question:
            'A fair eight-sided dice has sides numbered 1, 1, 1, 2, 2, 3, 4, 5.\nThe dice is rolled 30 times. Estimate the number of times it will land on a 2.',
          type: 'Medium',
          explaination:
            'P(landing on 2): there are 2 twos out of 8 sides P(2) = 2/8 = 1/4\nE(X) = 30 × 1/4 = 7.5',
          answer: 'E = 30 × 2/8 = 30 × 1/4 = 7.5',
        },
      ],
      'forming-solving-equations': [
        {
          id: 1,
          question:
            'A standard fair n-sided dice is rolled 400 times and the expected number of 1s is 50.\nWhat is the value of n?',
          type: 'Medium',
          explaination: 'P(1) = 1/n\nE(X) = 400/n = 50\nn = 400/50 = 8',
          answer: 'n = 8',
        },
        {
          id: 2,
          question:
            'When rolling a biased dice 100 times, the expected number of odd outcomes is three times the expected number of even outcomes.\nFind the probability of an odd outcome.',
          type: 'Hard',
          explaination:
            'Let p = P(odd), so P(even) = 1 - p\n100p = 3 × 100(1-p)\np = 3(1-p) = 3 - 3p\n4p = 3 ⇒ p = 3/4',
          answer: 'P(odd) = 3/4',
        },
      ],
      'odds-probability': [
        {
          id: 1,
          question:
            'An alternative measure of probability is called odds. If the probability of an event is p, then the odds are defined as p/(1-p).\nIf an event has a probability of 0.6, find its odds.',
          type: 'Medium',
          explaination: 'Odds = 0.6/(1-0.6) = 0.6/0.4 = 3/2 = 1.5',
          answer: 'Odds = 0.6/0.4 = 1.5',
        },
        {
          id: 2,
          question:
            'An alternative measure of probability is called odds. If the probability of an event is p, then the odds are defined as p/(1-p).\nIf an event has odds of 4, find its probability.',
          type: 'Medium',
          explaination: 'p/(1-p) = 4 ⇒ p = 4(1-p) = 4 - 4p ⇒ 5p = 4 ⇒ p = 4/5 = 0.8',
          answer: 'p = 4/5 = 0.8',
        },
        {
          id: 3,
          question:
            'An urn contains red balls, green balls and blue balls.\nThe ratio of red balls to green balls is 1:3.\nThe ratio of green balls to blue balls is 1:4.\nA random ball is drawn from the urn.\nWhat is the probability that it is a red ball?',
          type: 'Medium',
          explaination:
            'Red : Green = 1 : 3, so Red = k, Green = 3k Green : Blue = 1 : 4, so Blue = 12k Total = k + 3k + 12k = 16k P(red) = k/16k = 1/16',
          answer: 'P(red) = 1/16',
        },
      ],
      'monte-carlo-estimation': [
        {
          id: 1,
          question:
            'A computer scientist uses Monte Carlo sampling to estimate the value of π.\nHe generates 100 points at random inside a 1 by 1 square.\nOf these points, 78 are inside the largest circle which can be drawn in the square.\nWhat would be the estimate of π formed on the basis of this sample?',
          type: 'Hard',
          explaination:
            'The largest circle in a 1×1 square has radius r = 1/2 Area of circle = πr² = π/4 Area of square = 1 Proportion of points inside circle ≈ π/4\n78/100 = π/4 ⇒ π ≈ 4 × 0.78 = 3.12',
          answer: 'π ≈ 3.12',
        },
      ],
      'venn-diagrams': [
        {
          id: 1,
          question:
            'Out of 25 students in a class, 18 speak French, 9 speak German and 5 speak both languages.\nFind the probability that a randomly chosen student speaks\nneither language',
          type: 'Easy',
          explaination:
            'Draw Venn diagram:\nFrench only = 18-5=13, Both = 5, German only = 9-5=4 Neither = 25-13-5-4=3\nP(neither) = 3/25',
          answer: '3/25',
        },
        {
          id: 2,
          question:
            'Out of 25 students in a class, 18 speak French, 9 speak German and 5 speak both languages.\nFind the probability that a randomly chosen student speaks\nGerman but not French.',
          type: 'Easy',
          explaination: 'P(German only) = 4/25',
          answer: '4/25',
        },
        {
          id: 3,
          question:
            'In a group of 30 children, 12 like apples, 18 like bananas and 10 like both fruits. Find the probability that a randomly chosen child\nlikes bananas but not apples',
          type: 'Easy',
          explaination:
            'Draw Venn diagram:\nApples only = 12-10=2, Both = 10, Bananas only = 18-10=8 Neither = 30-2-10-8=10\nP(bananas only) = 8/30 = 4/15',
          answer: '8/30 = 4/15',
        },
        {
          id: 4,
          question:
            'In a group of 30 children, 12 like apples, 18 like bananas and 10 like both fruits. Find the probability that a randomly chosen child\nlikes neither fruit.',
          type: 'Easy',
          explaination: 'P(neither) = 10/30 = 1/3',
          answer: '10/30 = 1/3',
        },
        {
          id: 5,
          question:
            'In a school of 150 pupils, 80 pupils play basketball, 45 play both hockey and basketball and 25 play neither sport. Find the probability that a randomly selected pupil\nplays basketball but not hockey',
          type: 'Medium',
          explaination:
            'Total = 150; Neither = 25; Both = 45; Basketball only = 80-45=35 Hockey only = 150-35-45-25=45\nP(basketball only) = 35/150 = 7/30',
          answer: '35/150 = 7/30',
        },
        {
          id: 6,
          question:
            'In a school of 150 pupils, 80 pupils play basketball, 45 play both hockey and basketball and 25 play neither sport. Find the probability that a randomly selected pupil\nplays hockey but not basketball.',
          type: 'Medium',
          explaination: 'P(hockey only) = 45/150 = 3/10',
          answer: '45/150 = 3/10',
        },
        {
          id: 7,
          question:
            'In a certain school, 80 pupils study both Biology and History, 35 study neither subject, 45 study only Biology and 60 study only History. Find the probability that a randomly selected pupil\nstudies at least one of the two subjects',
          type: 'Medium',
          explaination:
            'Total = 45+80+60+35=220 At least one = 45+80+60=185\nP(at least one) = 185/220 = 37/44',
          answer: '185/220 = 37/44',
        },
        {
          id: 8,
          question:
            'In a certain school, 80 pupils study both Biology and History, 35 study neither subject, 45 study only Biology and 60 study only History. Find the probability that a randomly selected pupil\nstudies History.',
          type: 'Medium',
          explaination: 'History (both + History only) = 80+60=140\nP(History) = 140/220 = 7/11',
          answer: '140/220 = 7/11',
        },
        {
          id: 9,
          question:
            'Out of 35 shops in a town, 28 sell candy, 18 sell ice cream and 12 sell both ice cream and candy. Find the probability that a randomly selected shop sells\nice cream but not candy',
          type: 'Easy',
          explaination: 'Ice cream only = 18-12=6; Candy only = 28-12=16\nP(ice cream only) = 6/35',
          answer: '6/35',
        },
        {
          id: 10,
          question:
            'Out of 35 shops in a town, 28 sell candy, 18 sell ice cream and 12 sell both ice cream and candy. Find the probability that a randomly selected shop sells\ncandy but not ice cream.',
          type: 'Easy',
          explaination: 'P(candy only) = 16/35',
          answer: '16/35',
        },
      ],
      'venn-diagrams-probability-notation': [
        {
          id: 1,
          question:
            'At a certain college, the probability that a student studies Geography is 0.4, the probability that they study Spanish is 0.7 and the probability that they study both subjects is 0.2. Find the probability that a randomly selected student\nstudies neither subject',
          type: 'Easy',
          explaination: 'P(G ∪ S) = 0.4+0.7-0.2 = 0.9\nP(neither) = 1-0.9 = 0.1',
          answer: '0.1',
        },
        {
          id: 2,
          question:
            'At a certain college, the probability that a student studies Geography is 0.4, the probability that they study Spanish is 0.7 and the probability that they study both subjects is 0.2. Find the probability that a randomly selected student\nstudies Spanish but not Geography.',
          type: 'Easy',
          explaination: 'Spanish only = 0.7-0.2 = 0.5',
          answer: '0.5',
        },
        {
          id: 3,
          question:
            'In a given school, the probability that a child plays the piano is 0.4. The probability that they play both the piano and the violin is 0.08, and the probability that they play neither instrument is 0.3. Find the probability that a randomly selected child\nplays the violin but not the piano',
          type: 'Medium',
          explaination:
            'P(P ∪ V) = 1-0.3 = 0.7\nP(V) = 0.7 - 0.4 + 0.08 = 0.38\nViolin only = 0.38-0.08 = 0.30',
          answer: '0.30',
        },
        {
          id: 4,
          question:
            'In a given school, the probability that a child plays the piano is 0.4. The probability that they play both the piano and the violin is 0.08, and the probability that they play neither instrument is 0.3. Find the probability that a randomly selected child\nplays the piano but not the violin.',
          type: 'Medium',
          explaination: 'Piano only = 0.40-0.08 = 0.32',
          answer: '0.32',
        },
      ],
      'tree-diagrams': [
        {
          id: 1,
          question:
            'Every day, Rahul either drives to work or takes the bus. The probability that he drives is 0.3. If he drives to work the probability that he is late is 0.05. If he takes the bus the probability that he is late is 0.2. Find the probability that Rahul is\nlate for work',
          type: 'Easy',
          explaination: 'P(L) = (0.3)(0.05) + (0.7)(0.2) = 0.015 + 0.14 = 0.155\nP(late) = 0.155',
          answer: '0.155',
        },
        {
          id: 2,
          question:
            'Every day, Rahul either drives to work or takes the bus. The probability that he drives is 0.3. If he drives to work the probability that he is late is 0.05. If he takes the bus the probability that he is late is 0.2. Find the probability that Rahul is\nnot late for work.',
          type: 'Easy',
          explaination: 'P(not late) = 1-0.155 = 0.845',
          answer: '0.845',
        },
        {
          id: 3,
          question:
            'The probability that the school canteen serves pizza for lunch is 0.3. If there is pizza, the probability that they also serve fries is 0.8. If there is no pizza, the probability that they serve fries is 0.5. Find the probability that on a randomly selected day\nthere are no fries',
          type: 'Easy',
          explaination:
            'P(F) = (0.3)(0.8)+(0.7)(0.5) = 0.24 +0.35 = 0.59\nP(no fries) = 1-0.59 = 0.41',
          answer: '0.41',
        },
        {
          id: 4,
          question:
            'The probability that the school canteen serves pizza for lunch is 0.3. If there is pizza, the probability that they also serve fries is 0.8. If there is no pizza, the probability that they serve fries is 0.5. Find the probability that on a randomly selected day\nthere are fries.',
          type: 'Easy',
          explaination: 'P(fries) = 0.59',
          answer: '0.59',
        },
        {
          id: 5,
          question:
            'Sophia rolls a fair six-sided dice. If she gets a 6, she tosses a fair coin. If she does not get a 6, she tosses a biased coin which has the probability 0.6 of showing tails. Find the probability that the coin shows\nheads',
          type: 'Medium',
          explaination: 'P(H) = 1/6 · 1/2 + 5/6 · 0.4 = 1/12+4/12 = 5/12',
          answer: '5/12',
        },
        {
          id: 6,
          question:
            'Sophia rolls a fair six-sided dice. If she gets a 6, she tosses a fair coin. If she does not get a 6, she tosses a biased coin which has the probability 0.6 of showing tails. Find the probability that the coin shows\ntails.',
          type: 'Medium',
          explaination: 'P(T) = 1 - 5/12 = 7/12',
          answer: '7/12',
        },
        {
          id: 7,
          question:
            'The probability that I revise for a test is 0.8. If I revise, the probability that I pass the test is 0.9.\nIf I do not revise, the probability that I pass is 0.7. Find the probability that\nI revise and pass the test',
          type: 'Easy',
          explaination: 'P(R ∩ P) = 0.8 × 0.9 = 0.72',
          answer: '0.72',
        },
        {
          id: 8,
          question:
            'The probability that I revise for a test is 0.8. If I revise, the probability that I pass the test is 0.9.\nIf I do not revise, the probability that I pass is 0.7. Find the probability that\nI do not revise but pass the test.',
          type: 'Easy',
          explaination: "P(R' ∩ P) = 0.2 × 0.7 = 0.14",
          answer: '0.14',
        },
        {
          id: 9,
          question:
            'A football league consists of 18 teams. My team has a 20% chance of winning against a higher-ranking team and a 70% chance of winning against a lower-ranking team. If my team is currently ranked fifth in the league, what is the probability that we win the next match against a randomly selected team?',
          type: 'Hard',
          explaination:
            'Higher-ranking opponents (ranks 1–4): 4 teams Lower-ranking opponents (ranks 6– 18): 13 teams Total opponents = 17 P(win) = (4/17)(0.2) +(13/17)(0.7) = (0.8+9.1)/17 = 9.9/17 = 99/170',
          answer: '99/170 ≈ 0.582',
        },
        {
          id: 10,
          question:
            'An office has two photocopiers. One of them is broken with probability 0.2 and the other with probability 0.3. If a photocopier is selected at random, what is the probability that it is working?',
          type: 'Medium',
          explaination:
            'Each photocopier selected with probability 1/2\nP(working) = (1/2)(0.8) +(1/2)(0.7) = 0.4+0.35 = 0.75',
          answer: '0.75',
        },
        {
          id: 11,
          question:
            'Theo either walks, takes the bus or cycles to school, each with equal probability. The probability that he is late is 0.06 if he walks, it is 0.2 if he takes the bus and 0.1 if he cycles.\nUsing a tree diagram, or otherwise, find the probability that\nTheo takes the bus to school and is late',
          type: 'Medium',
          explaination: 'Each method probability = 1/3\nP(bus and late) = 1/3 × 0.2 = 1/15',
          answer: '1/15',
        },
        {
          id: 12,
          question:
            'Theo either walks, takes the bus or cycles to school, each with equal probability. The probability that he is late is 0.06 if he walks, it is 0.2 if he takes the bus and 0.1 if he cycles.\nUsing a tree diagram, or otherwise, find the probability that\nTheo is on time for school.',
          type: 'Medium',
          explaination: 'P(late) = (1/3)(0.06+0.2+0.1) = 0.36/3 = 0.12\nP(on time) = 1-0.12 = 0.88',
          answer: '0.88',
        },
      ],
      'tree-diagrams-without-replacement': [
        {
          id: 1,
          question:
            'A bag contains 12 red balls and 18 blue balls.\nTwo balls are taken out at random, one after the other, without replacement. Find the probability that\nthe two balls are the same colour',
          type: 'Medium',
          explaination: 'P(same) = 12/30 · 11/29+18/30 · 17/29 = (132+306)/870 = 438/870 = 73/145',
          answer: '73/145',
        },
        {
          id: 2,
          question:
            'A bag contains 12 red balls and 18 blue balls.\nTwo balls are taken out at random, one after the other, without replacement. Find the probability that\nthe second ball is blue.',
          type: 'Medium',
          explaination:
            'P(2nd blue) = 18/30 = 3/5 (by symmetry; verify:\n12/30 · 18/29+18/30 · 17/29=522/870=3/5)',
          answer: '3/5',
        },
        {
          id: 3,
          question:
            'A bag contains 12 green balls and 18 yellow balls. Two balls are taken out at random. Find the probability that they are different colours.',
          type: 'Medium',
          explaination:
            'P(different) = 12/30 · 18/29+18/30 · 12/29 = (2 × 12 × 18)/(30 × 29) = 432/870 = 72/145',
          answer: '72/145',
        },
        {
          id: 4,
          question:
            'A box contains 40 red balls and 30 green balls.\nTwo balls are taken out at random, one after another without replacement.\nGiven that the first ball is red, find the probability that the second ball is also red.',
          type: 'Hard',
          explaination: 'P(R₂|R₁) = 39/69 = 13/23',
          answer: '13/23',
        },
        {
          id: 5,
          question:
            'A box contains 40 red balls and 30 green balls.\nTwo balls are taken out at random, one after another without replacement.\nWhat is the probability that both balls are red?',
          type: 'Hard',
          explaination: 'P(RR) = 40/70 · 39/69 = 1560/4830 = 52/161',
          answer: '52/161',
        },
        {
          id: 6,
          question:
            'A box contains 40 red balls and 30 green balls.\nTwo balls are taken out at random, one after another without replacement.\nIs it more likely that the two balls are the same colour or different colour?',
          type: 'Hard',
          explaination:
            'P(same) = 52/161 +30/70 · 29/69 = 52/161+29/161 = 81/161\nP(different) = 80/161 Same colour more likely.',
          answer: 'Same colour (81/161 > 80/161)',
        },
      ],
      'sample-space-diagrams': [
        {
          id: 1,
          question:
            'Two fair six-sided dice are rolled, and the scores are added. Find the probability that the total score is\nequal to 6',
          type: 'Easy',
          explaination:
            'Total outcomes = 36\nSum = 6: (1,5),(2,4),(3,3),(4,2),(5,1) → 5 ways P = 5/36',
          answer: '5/36',
        },
        {
          id: 2,
          question:
            'Two fair six-sided dice are rolled, and the scores are added. Find the probability that the total score is\ngreater than 9.',
          type: 'Easy',
          explaination: 'Sum > 9: sum 10 (3 ways), 11 (2 ways), 12 (1 way) → 6 ways P = 6/36 = 1/6',
          answer: '1/6',
        },
        {
          id: 3,
          question:
            'Two fair six-sided dice are rolled. Find the probability that\nthe two scores are equal',
          type: 'Easy',
          explaination: 'Total outcomes = 36\nEqual: (1,1),(2,2),...,(6,6) → 6 ways → 6/36=1/6',
          answer: '1/6',
        },
        {
          id: 4,
          question:
            'Two fair six-sided dice are rolled. Find the probability that\nthe second score is larger than the first.',
          type: 'Easy',
          explaination: 'Second > First: (36-6)/2 =15 ways → 15/36=5/12',
          answer: '5/12',
        },
        {
          id: 5,
          question: 'Two fair coins are tossed. Find the probability that\nboth show tails',
          type: 'Easy',
          explaination: 'Sample space: {HH, HT, TH, TT}\nP(TT)=1/4',
          answer: '1/4',
        },
        {
          id: 6,
          question:
            'Two fair coins are tossed. Find the probability that\nthe two outcomes are different.',
          type: 'Easy',
          explaination: 'Different: HT or TH → 2/4 =1/2',
          answer: '1/2',
        },
        {
          id: 7,
          question:
            'A family has two children, born independently.\nFind the probability that they are\na boy and a girl',
          type: 'Easy',
          explaination: 'Sample space: {BB, BG, GB, GG}\nBG or GB → 2/4=1/2',
          answer: '1/2',
        },
        {
          id: 8,
          question:
            'A family has two children, born independently.\nFind the probability that they are\ntwo girls.',
          type: 'Easy',
          explaination: 'GG → 1/4',
          answer: '1/4',
        },
        {
          id: 9,
          question:
            'A fair four-sided dice (numbered 1 to 4) and a fair eight-sided dice (numbered 1 to 8) are rolled and the outcomes are added together.\nFind the probability that the total is less than 10.',
          type: 'Medium',
          explaination:
            'Total outcomes = 4 × 8 = 32 Sum ≥ 10: sum 10: (2,8),(3,7), (4,6)→3; sum 11: (3,8),(4,7)→2; sum 12: (4,8)→1 → Total: 6 P(sum < 10) = (32-6)/32 = 26/32 = 13/16',
          answer: '13/16',
        },
        {
          id: 10,
          question:
            'Three fair six-sided dice are thrown and the score is the sum of the three outcomes. Find the probability that the score is equal to 5.',
          type: 'Hard',
          explaination:
            'Total outcomes = 6³ = 216 Ordered triples summing to 5: (1,1,3), (1,3,1),(3,1,1),(1,2,2),(2,1,2),(2,2,1) → 6 ways P(sum=5) = 6/216 = 1/36',
          answer: '1/36',
        },
      ],
      'sample-space-diagrams-arrangements': [
        {
          id: 1,
          question:
            "Write out all possible arrangements of the letters T, A, I, L. Hence find the probability that, when those four letters are arranged in a random order,\nthe 'word' ends with two consonants",
          type: 'Medium',
          explaination:
            'Total arrangements = 4! = 24 Consonants: T, L; Vowels: A, I\nLast two positions = T,L (2! = 2 ways); first two = A,I (2! = 2 ways) → 4 arrangements; P = 4/24 = 1/6',
          answer: '1/6',
        },
        {
          id: 2,
          question:
            'Write out all possible arrangements of the letters T, A, I, L. Hence find the probability that, when those four letters are arranged in a random order,\nthe two vowels are next to each other.',
          type: 'Medium',
          explaination: 'Treat AI as one unit → 3! × 2 = 12 arrangements P = 12/24 = 1/2',
          answer: '1/2',
        },
      ],
      'two-way-tables': [],
      'mutually-exclusive-events': [
        {
          id: 1,
          question:
            'If two events A and B are mutually exclusive and P(A)=0.6 and P(A ∪ B) =0.8, find P(B).',
          type: 'Easy',
          explaination:
            'Mutually exclusive: P(A ∩ B) =0, so P(A ∪ B)=P(A)+P(B)\nP(B) = 0.8-0.6 = 0.2',
          answer: 'P(B) = 0.2',
        },
        {
          id: 2,
          question:
            'If two events A and B are mutually exclusive and P(A)=0.4 and P(A ∪ B) =0.5, find P(B).',
          type: 'Easy',
          explaination: 'P(B) = 0.5-0.4 = 0.1',
          answer: 'P(B) = 0.1',
        },
        {
          id: 3,
          question: 'Events A and B are mutually exclusive, P(A)=1/3 and P(B) =2/5. Find P(A ∪ B).',
          type: 'Easy',
          explaination: 'P(A ∪ B) = 1/3+2/5=5/15+6/15=11/15',
          answer: '11/15',
        },
        {
          id: 4,
          question:
            'Events A and B are mutually exclusive, P(A)=3/4 and P(B) =1/10. Find P(A ∪ B).',
          type: 'Easy',
          explaination: 'P(A ∪ B) = 3/4+1/10=15/20+2/20=17/20',
          answer: '17/20',
        },
      ],
      'conditional-probability': [
        {
          id: 1,
          question:
            'A bag contains 20 red counters and 30 blue counters. Two counters are taken out at random. Given that the first counter is red, find the probability that the second counter is\nred',
          type: 'Easy',
          explaination:
            'First counter is red; 49 remain: 19 red, 30 blue.\nP(red|first red) = 19/49',
          answer: '19/49',
        },
        {
          id: 2,
          question:
            'A bag contains 20 red counters and 30 blue counters. Two counters are taken out at random. Given that the first counter is red, find the probability that the second counter is\nblue.',
          type: 'Easy',
          explaination: 'P(blue|first red) = 30/49',
          answer: '30/49',
        },
        {
          id: 3,
          question:
            'Two cards are taken out of a standard pack of 52 cards. Given that the first card is a red 10, find the probability that the second card is\nred',
          type: 'Medium',
          explaination:
            'After removing one red 10: 51 cards remain; 25 red, 3 tens.\nP(red) = 25/51',
          answer: '25/51',
        },
        {
          id: 4,
          question:
            'Two cards are taken out of a standard pack of 52 cards. Given that the first card is a red 10, find the probability that the second card is\na 10.',
          type: 'Medium',
          explaination: 'P(10) = 3/51 = 1/17',
          answer: '3/51 = 1/17',
        },
      ],
      'conditional-probability-two-way-tables': [],
      'conditional-probability-venn-diagrams': [
        {
          id: 1,
          question:
            'Out of 25 students in a class, 18 speak French, 9 speak German and 5 speak both languages.\nFind the probability that a randomly chosen student speaks\nGerman, given that they speak French',
          type: 'Medium',
          explaination:
            'French only = 13, Both = 5, German only = 4\nP(G|F) = (P(G ∩ F))/(P(F)) = (5/25)/(18/25) = 5/18',
          answer: '5/18',
        },
        {
          id: 2,
          question:
            'Out of 25 students in a class, 18 speak French, 9 speak German and 5 speak both languages.\nFind the probability that a randomly chosen student speaks\nFrench, given that they speak German.',
          type: 'Medium',
          explaination: 'P(F|G) = (5/25)/(9/25) = 5/9',
          answer: '5/9',
        },
        {
          id: 3,
          question:
            'In a group of 30 children, 12 like apples, 18 like bananas and 10 like both fruits. Find the probability that a randomly chosen child\nlikes bananas, given that they like apples',
          type: 'Medium',
          explaination: 'P(B|A) = 10/12 = 5/6',
          answer: '5/6',
        },
        {
          id: 4,
          question:
            'In a group of 30 children, 12 like apples, 18 like bananas and 10 like both fruits. Find the probability that a randomly chosen child\nlikes apples, given that they like bananas.',
          type: 'Medium',
          explaination: 'P(A|B) = 10/18 = 5/9',
          answer: '5/9',
        },
        {
          id: 5,
          question:
            'In a school of 150 pupils, 80 pupils play basketball, 45 play both hockey and basketball and 25 play neither sport. Find the probability that a randomly selected pupil\nplays basketball, given that they do not play hockey',
          type: 'Medium',
          explaination:
            "Basketball only = 35, Hockey only = 45, Both = 45, Neither = 25\nNot hockey = Basketball only + Neither = 35+25=60\nP(B|H') = 35/60 = 7/12",
          answer: '7/12',
        },
        {
          id: 6,
          question:
            'In a school of 150 pupils, 80 pupils play basketball, 45 play both hockey and basketball and 25 play neither sport. Find the probability that a randomly selected pupil\nplays hockey, given that they do not play basketball.',
          type: 'Medium',
          explaination: "Not basketball = Hockey only + Neither = 45+25=70\nP(H|B') = 45/70 = 9/14",
          answer: '9/14',
        },
        {
          id: 7,
          question:
            'In a certain school, 80 pupils study both Biology and History, 35 study neither subject, 45 study only Biology and 60 study only History. Find the probability that a randomly selected pupil\nstudies Biology, given that they study at least one of the two subjects',
          type: 'Medium',
          explaination:
            'Total = 220; At least one = 45+80+60=185 Biology (any) = 45+80=125; History (any) = 60+80=140\nP(B|at least one) = 125/185 = 25/37',
          answer: '25/37',
        },
        {
          id: 8,
          question:
            'In a certain school, 80 pupils study both Biology and History, 35 study neither subject, 45 study only Biology and 60 study only History. Find the probability that a randomly selected pupil\nstudies History, given that they study at least one of the two subjects.',
          type: 'Medium',
          explaination: 'P(H|at least one) = 140/185 = 28/37',
          answer: '28/37',
        },
        {
          id: 9,
          question:
            'Out of 35 shops in a town, 28 sell candy, 18 sell ice cream and 12 sell both ice cream and candy. Find the probability that a randomly selected shop\nsells neither, given that it does not sell candy',
          type: 'Hard',
          explaination:
            'Neither = 35-(28+18-12)=1; Candy only=16, Ice cream only=6\nNot candy = Ice cream only + Neither = 6+1=7\nP(neither|not candy) = 1/7',
          answer: '1/7',
        },
        {
          id: 10,
          question:
            'Out of 35 shops in a town, 28 sell candy, 18 sell ice cream and 12 sell both ice cream and candy. Find the probability that a randomly selected shop\nsells neither, given that it does not sell ice cream.',
          type: 'Hard',
          explaination:
            'Not ice cream = Candy only + Neither = 16+1=17\nP(neither|not ice cream) = 1/17',
          answer: '1/17',
        },
        {
          id: 11,
          question:
            'At a certain college, the probability that a student studies Geography is 0.4, the probability that they study Spanish is 0.7 and the probability that they study both subjects is 0.2. Find the probability that a randomly selected student\nstudies both subjects, given that they study Geography',
          type: 'Medium',
          explaination: 'P(G ∩ S|G) = 0.2/0.4 = 0.5',
          answer: '0.5',
        },
        {
          id: 12,
          question:
            'At a certain college, the probability that a student studies Geography is 0.4, the probability that they study Spanish is 0.7 and the probability that they study both subjects is 0.2. Find the probability that a randomly selected student\nstudies both subjects, given that they study Spanish.',
          type: 'Medium',
          explaination: 'P(G ∩ S|S) = 0.2/0.7 = 2/7',
          answer: '2/7',
        },
        {
          id: 13,
          question:
            'In a school, the probability that a child plays the piano is 0.4. The probability that they play both the piano and the violin is 0.08, and the probability that they play neither instrument is 0.3. Find the probability that a randomly selected child\nplays the violin, given that they play at least one instrument',
          type: 'Hard',
          explaination:
            'P(P ∪ V) = 0.7; P(V) = 0.7-0.4+0.08 = 0.38\nP(V|at least one) = 0.38/0.7 = 19/35',
          answer: '19/35',
        },
        {
          id: 14,
          question:
            'In a school, the probability that a child plays the piano is 0.4. The probability that they play both the piano and the violin is 0.08, and the probability that they play neither instrument is 0.3. Find the probability that a randomly selected child\nplays the piano, given that they play at least one instrument.',
          type: 'Hard',
          explaination: 'P(P|at least one) = 0.4/0.7 = 4/7',
          answer: '4/7',
        },
        {
          id: 15,
          question:
            'A survey of 180 parents in a primary school found that 80 are in favour of building a new library, 100 are in favour of a new dining hall and 40 are in favour of both.\na) Draw a Venn diagram to represent this information.\nb) Find the probability that a randomly selected parent is in favour of neither a new library, nor a new dining hall.\nc) Find the probability that a randomly selected parent is in favour of a new library, given that they are not in favour of a new dining hall.',
          type: 'Medium',
          explaination:
            "Library only = 40, Dining only = 60, Both = 40, Neither = 40\nb) P(neither) = 40/180 = 2/9\nc) Not dining = 180-100=80; Library and not dining = 40 P(L|D') = 40/80 = 1/2",
          answer: 'b) 2/9\nc) 1/2',
        },
        {
          id: 16,
          question:
            'Asher has 22 toys: 12 are teddies, 5 are green teddies, and 8 are neither green nor teddies.\nDraw a Venn diagram showing this information and find the number of toys which are green but not teddies.',
          type: 'Medium',
          explaination:
            'Let G=green, T=teddies. |T|=12,\nT∩G | =5, neither=8. | T∪G | = 22-8 = 14; | G | = 14-12+5 = 7; Green only = 7-5 = 2\nGreen but not teddy = 2',
          answer: '2',
        },
        {
          id: 17,
          question:
            'Asher has 22 toys: 12 are teddies, 5 are green teddies, and 8 are neither green nor teddies.\nFind the probability that a randomly selected toy is green.',
          type: 'Medium',
          explaination: 'P(G) = 7/22',
          answer: '7/22',
        },
        {
          id: 18,
          question:
            'Asher has 22 toys: 12 are teddies, 5 are green teddies, and 8 are neither green nor teddies.\nGiven that a toy is green, find the probability that it is a teddy.',
          type: 'Medium',
          explaination: 'P(T | G) = 5/7',
          answer: '5/7',
        },
        {
          id: 19,
          question:
            'Out of 130 students at a college, 50 play tennis, 45 play badminton and 12 play both sports.\nHow many students play neither sport?',
          type: 'Medium',
          explaination: 'At least one = 50+45-12=83; Neither = 130-83=47\n47',
          answer: '47',
        },
        {
          id: 20,
          question:
            'Out of 130 students at a college, 50 play tennis, 45 play badminton and 12 play both sports.\nFind the probability that a randomly selected student plays at least one of the two sports.',
          type: 'Medium',
          explaination: 'P(at least one) = 83/130',
          answer: '83/130',
        },
        {
          id: 21,
          question:
            'Out of 130 students at a college, 50 play tennis, 45 play badminton and 12 play both sports.\nGiven that a student plays exactly one of the two sports, find the probability that it is badminton.',
          type: 'Medium',
          explaination:
            'Tennis only = 38, Badminton only = 33; exactly one = 71 P(badminton|exactly one) = 33/71',
          answer: '33/71',
        },
        {
          id: 22,
          question:
            'Let A and B be events such that P(A)=2/5, P(B|A)=1/2 and P(A ∪ B)=3/4.\nUsing a Venn diagram, or otherwise, find P(A ∩ B).',
          type: 'Hard',
          explaination: 'P(A ∩ B) = P(B|A) × P(A) = 1/2 × 2/5 = 1/5',
          answer: '1/5',
        },
        {
          id: 23,
          question:
            'Let A and B be events such that P(A)=2/5, P(B|A)=1/2 and P(A ∪ B)=3/4.\nFind P(B).',
          type: 'Hard',
          explaination:
            'P(B) = P(A ∪ B)-P(A)+P(A ∩ B) = 3/4-2/5+1/5 = 3/4-1/5 = 15/20-4/20 = 11/20',
          answer: '11/20',
        },
        {
          id: 24,
          question:
            'In a group of 100 people, 27 speak German, 30 speak Mandarin, 40 speak Spanish, 3 speak all three languages. 12 speak only German, 15 speak only Mandarin and 8 speak Spanish and Mandarin but not German.\na) Draw a Venn diagram showing this information, and fill in the missing regions.\nb) Find the probability that a randomly selected person speaks only Spanish.\nc) Given that a person speaks Spanish, find the probability that they also speak Mandarin.',
          type: 'Hard',
          explaination:
            'Only G=12, Only M=15, All three=3, M∩S only=8 G∩M only = 30-15-8-3=4; G∩S only = 27-12-4-3=8 Only S = 40-8-8-3=21; Neither = 100-71=29\nb) P(only Spanish) = 21/100\nc) P(M|S) = (8+3)/40 = 11/40',
          answer: 'b) 21/100\nc) 11/40',
        },
        {
          id: 25,
          question:
            'In a class of 30 pupils, 22 have a phone, 17 have a smart watch and 15 have a tablet. 11 have both a smart watch and a phone, 11 have a phone and a tablet and 10 have a tablet and a smart watch. Everyone has at least one of those items.\na) Let x be the number of pupils who have all three items. Draw a Venn diagram showing this information.\nb) Use your Venn diagram to show that x+22=30.\nc) Hence find the probability that a randomly selected pupil has all three items.\nd) Given that a pupil does not have a tablet, find the probability that they have a phone.\ne) Given that a pupil has exactly two of the items, find the probability that they are a smart watch and a tablet.',
          type: 'Hard',
          explaination:
            "Use inclusion-exclusion:\n30=22+17+15-11-11-10+x ⇒ x=8\nc) P(all three) = 8/30 = 4/15\nd) No tablet: 30-15=15 pupils; phone and no tablet: 22-11=11 P(P|T') = 11/15\ne) P∩SW only=3, P∩T only=3, SW∩T only=2; total exactly two=8 P(SW and T|exactly two) = 2/8 = 1/4",
          answer: 'c) 4/15\nd) 11/15\ne) 1/4',
        },
      ],
      'independent-events': [
        {
          id: 1,
          question:
            'The probability that a child has a sibling is 0.7. The probability that a child has a pet is 0.2.\nIf having a sibling and having a pet are independent, find the probability that a child has both a sibling and a pet.',
          type: 'Easy',
          explaination: 'For independent events A, B:\nP(A ∩ B) = P(A) × P(B)\n0.7 × 0.2 = 0.14',
          answer: '0.14',
        },
        {
          id: 2,
          question:
            "The probability that a child likes bananas is 0.8. The probability that their favourite colour is green is 0.3. If these two characteristics are independent, find the probability that a child's favourite colour is green and they like bananas.",
          type: 'Easy',
          explaination: '0.3 × 0.8 = 0.24',
          answer: '0.24',
        },
        {
          id: 3,
          question:
            'My laptop and my phone can run out of charge independently of each other. The probability that my laptop is out of charge is 0.2 and the probability that they are both out of charge is 0.06. Find the probability that my phone is out of charge.',
          type: 'Medium',
          explaination: 'Independent: P(A ∩ B) = P(A) × P(B)\nP(phone) = 0.06/0.2 = 0.3',
          answer: '0.3',
        },
        {
          id: 4,
          question: 'The probability that my bus is late is 0.2.',
          type: 'Medium',
          explaination: 'P(rain) = 0.08/0.2 = 0.4',
          answer: '0.4',
        },
        {
          id: 5,
          question:
            'The probability that it rains on any given day is 0.12, independently of any other day. Find the probability that\nit rains on at least one of two consecutive days',
          type: 'Medium',
          explaination: 'P(at least one) = 1-(0.88)² = 1-0.7744 = 0.2256',
          answer: '0.2256',
        },
        {
          id: 6,
          question:
            'The probability that it rains on any given day is 0.12, independently of any other day. Find the probability that\nit rains on three consecutive days.',
          type: 'Medium',
          explaination: 'P(3 consecutive) = (0.12)³ = 0.001728',
          answer: '0.001728',
        },
      ],
      'sample-space-diagrams-expected-value': [
        {
          id: 1,
          question:
            'Two fair dice are rolled and the score is the product of the two numbers.\nDraw a sample space diagram showing all possible outcomes.',
          type: 'Medium',
          explaination: '6×6 grid with products 1 to 36.',
          answer: '6×6 product grid',
        },
        {
          id: 2,
          question:
            'Two fair dice are rolled and the score is the product of the two numbers.\nIf this were done 180 times, how many times would you expect the score to be at least 20?',
          type: 'Medium',
          explaination:
            'Products ≥ 20: 4×5=20, 4×6=24, 5×4=20, 5×5=25, 5×6=30, 6×4=24, 6×5=30, 6×6=36 → 8 outcomes P(product ≥ 20) = 8/36 = 2/9 Expected = 180 × 2/9 = 40',
          answer: '40 times',
        },
      ],
      'conditional-probability-independence': [],
      'conditional-probability-sample-space': [
        {
          id: 1,
          question:
            'A mother has two children. If one of them is a boy, what is the probability that they are both boys?',
          type: 'Hard',
          explaination:
            "Sample space: {BB, BG, GB, GG} all equally likely\n'At least one boy': {BB, BG, GB} → 3 outcomes; BB occurs once P(BB|at least one boy) = 1/3",
          answer: '1/3',
        },
        {
          id: 2,
          question:
            'A mother has two children. If the older one is a boy, what is the probability that they are both boys?',
          type: 'Hard',
          explaination:
            "'Older is boy': {BB, BG} → 2 outcomes; BB occurs once P(BB|older is boy) = 1/2",
          answer: '1/2',
        },
      ],
      'discrete-probability-distributions': [
        {
          id: 1,
          question:
            'A bag contains three blue counters and four yellow counters. Two counters are removed without replacement and X is the number of blue counters removed.\nFind the probability distribution of X.',
          type: 'Easy',
          explaination:
            'P(X=0)=4/7 · 3/6 =12/42=2/7\nP(X=1)=3/7 · 4/6 +4/7 · 3/6=24/42=4/7\nP(X=2)=3/7 · 2/6 =6/42=1/7 Check: 2/7+4/7+1/7=1 ✓',
          answer: 'P(X=0)=2/7, P(X=1) =4/7, P(X=2)=1/7',
        },
        {
          id: 2,
          question:
            'Adam has seven blue shirts and eight purple shirts in the wardrobe. He picks two shirts without looking and X is the number of blue shirts selected.\nFind the probability distribution of X.',
          type: 'Easy',
          explaination:
            'Total = 15 shirts, choose 2: ¹⁵C₂=105\nP(X=0)=⁸C₂/105 =28/105\nP(X=1)=⁷C₁⁸C₁/105=56/105\nP(X=2)=⁷C₂/105 =21/105',
          answer: 'P(X=0)=28/105, P(X=1)=56/105, P(X=2) =21/105',
        },
        {
          id: 3,
          question:
            'A fair coin is tossed twice and X is the number of heads.\nFind the probability distribution of X.',
          type: 'Easy',
          explaination: 'P(X=0)=1/4, P(X=1)=2/4=1/2, P(X=2)=1/4',
          answer: 'P(X=0)=0.25, P(X=1)=0.5, P(X=2)=0.25',
        },
        {
          id: 4,
          question:
            'A fair coin is tossed twice and X is the number of tails.\nFind the probability distribution of X.',
          type: 'Easy',
          explaination: 'By symmetry with Q2a: same distribution with tails replacing heads.',
          answer: 'P(X=0)=0.25, P(X=1)=0.5, P(X=2)=0.25',
        },
        {
          id: 5,
          question:
            'A fair coin is tossed three times and X is the number of tails.\nFind the probability distribution of X.',
          type: 'Easy',
          explaination: 'Sample space size = 2³=8\nP(X=0)=1/8, P(X=1)=3/8, P(X=2)=3/8, P(X=3) =1/8',
          answer: 'P(X=0)=1/8, P(X=1) =3/8, P(X=2)=3/8, P(X=3) =1/8',
        },
        {
          id: 6,
          question:
            'A fair coin is tossed three times and X is the number of heads.\nFind the probability distribution of X.',
          type: 'Easy',
          explaination: 'Same distribution as Q3a by symmetry.',
          answer: 'P(X=0)=1/8, P(X=1) =3/8, P(X=2)=3/8, P(X=3) =1/8',
        },
        {
          id: 7,
          question:
            'A fair six-sided dice is rolled once and X is the number shown on the dice.\nFind the probability distribution of X.',
          type: 'Easy',
          explaination: 'Each outcome equally likely: P(X=x) =1/6 for each value.',
          answer: 'P(X=x)=1/6 for x ∈ {1,2,3,4,5,6}',
        },
        {
          id: 8,
          question:
            'A fair eight-sided dice is rolled once and X is the number shown on the dice.\nFind the probability distribution of X.',
          type: 'Easy',
          explaination: 'Each outcome equally likely: P(X=x) =1/8.',
          answer: 'P(X=x)=1/8 for x ∈ {1,2,3,4,5,6,7,8}',
        },
        {
          id: 9,
          question:
            'A fair six-sided dice is rolled three times and X is the number of 5s.\nFind the probability distribution of X.',
          type: 'Medium',
          explaination:
            'p=1/6, q=5/6\nP(X=k)=³Cₖ(1/6)ᵏ(5/6)³⁻ᵏ\nP(X=0)=125/216, P(X=1) =75/216, P(X=2)=15/216, P(X=3)=1/216',
          answer: 'P(X=0)=125/216, P(X=1)=75/216, P(X=2) =15/216, P(X=3)=1/216',
        },
        {
          id: 10,
          question:
            'A fair eight-sided dice is rolled three times and X is the number of 1s.\nFind the probability distribution of X.',
          type: 'Medium',
          explaination: 'p=1/8, q=7/8\nP(X=k)=³Cₖ(1/8)ᵏ(7/8)³⁻ᵏ',
          answer: 'P(X=0)=343/512, P(X=1)=147/512, P(X=2)=21/512, P(X=3) =1/512',
        },
        {
          id: 11,
          question:
            'The probability that it rains on any given day is 0.2. X is the number of rainy days in a two-day weekend.\nFind the probability distribution of X.',
          type: 'Medium',
          explaination: 'p=0.2, q=0.8\nP(X=0)=0.8²=0.64\nP(X=1)=2(0.2)(0.8)=0.32\nP(X=2)=0.2²=0.04',
          answer: 'P(X=0)=0.64, P(X=1)=0.32, P(X=2)=0.04',
        },
        {
          id: 12,
          question:
            'The probability that I go to the gym on any given day is 0.7. X is the number of days I go to the gym during a two-day weekend.\nFind the probability distribution of X.',
          type: 'Medium',
          explaination: 'p=0.7, q=0.3\nP(X=0)=0.3²=0.09, P(X=1)=2(0.7)(0.3)=0.42, P(X=2)=0.7²=0.49',
          answer: 'P(X=0)=0.09, P(X=1)=0.42, P(X=2)=0.49',
        },
      ],
      'expected-value-finding-k': [
        {
          id: 1,
          question:
            'A discrete random variable has the probability distribution given by P(X=x)=(1/15)(x+3) for x ∈ {1,2,3}.\nWrite down P(X=3).',
          type: 'Medium',
          explaination: 'P(X=3)=(1/15)(3+3)=6/15=2/5',
          answer: 'P(X=3) =6/15 =2/5',
        },
        {
          id: 2,
          question:
            'A discrete random variable has the probability distribution given by P(X=x)=(1/15)(x+3) for x ∈ {1,2,3}.\nFind the expected value of X.',
          type: 'Medium',
          explaination:
            'P(X=1)=4/15, P(X=2) =5/15, P(X=3)=6/15 Check: (4+5+6)/15=1 ✓\nE(X)=1 · 4/15 +2 · 5/15+3 · 6/15 =(4+10+18)/15=32/15 ≈ 2.13',
          answer: 'E(X) =34/15 ≈ 2.27',
        },
        {
          id: 3,
          question:
            'A discrete random variable Y has the probability distribution given by P(Y=y)=k(y-1) for y ∈ {4,5,6}.\nFind the value of k.',
          type: 'Medium',
          explaination: 'k(3)+k(4)+k(5)=1 ⇒ 12k=1 ⇒ k=1/12',
          answer: 'k=1/12',
        },
        {
          id: 4,
          question:
            'A discrete random variable Y has the probability distribution given by P(Y=y)=k(y-1) for y ∈ {4,5,6}.\nFind P(Y ≥ 5).',
          type: 'Medium',
          explaination: 'P(Y=5)=4/12, P(Y=6) =5/12 ⇒ P(Y ≥ 5) =9/12=3/4',
          answer: 'P(Y ≥ 5)=9/12 =3/4',
        },
        {
          id: 5,
          question:
            'A discrete random variable Y has the probability distribution given by P(Y=y)=k(y-1) for y ∈ {4,5,6}.\nCalculate E(Y).',
          type: 'Medium',
          explaination: 'E(Y)=4 · 3/12 +5 · 4/12+6 · 5/12 =(12+20+30)/12=62/12 =31/6 ≈ 5.17',
          answer: 'E(Y) =65/12 ≈ 5.42',
        },
        {
          id: 6,
          question:
            'A probability distribution is given by P(X=x) =c/x for x=1,2,3,4.\nFind the value of c.',
          type: 'Hard',
          explaination: 'c/1+c/2+c/3 +c/4=1 ⇒ c(1+1/2+1/3+1/4) =1 ⇒ c · 25/12 =1 ⇒ c=12/25',
          answer: 'c=12/25',
        },
        {
          id: 7,
          question:
            'A probability distribution is given by P(X=x) =c/x for x=1,2,3,4.\nFind P(X=2 | X ≤ 3).',
          type: 'Hard',
          explaination:
            'P(X ≤ 3)=(12/25)(1+1/2+1/3)=12/25 · 11/6=22/25\nP(X=2 | X ≤ 3)=(P(X=2))/(P(X ≤ 3))=(6/25)/(22/25)=6/22=3/11',
          answer: 'P(X=2 | X ≤ 3)=6/13 ≈ 0.462',
        },
        {
          id: 8,
          question:
            'A probability distribution is given by P(X=x) =c/x for x=1,2,3,4.\nCalculate E(X).',
          type: 'Hard',
          explaination: 'E(X)=Σx · c/x =4c=4 · 12/25=48/25 =1.92',
          answer: 'E(X) ≈ 1.88',
        },
      ],
      'fair-games-expected-value': [
        {
          id: 1,
          question:
            'Simon and Olivia play the following game:\nSimon gives Olivia £5. Olivia then tosses a fair coin. If the coin comes up heads she gives Simon £7; if it comes up tails she gives him £2.\nDetermine whether this is a fair game.',
          type: 'Medium',
          explaination:
            'Simon pays £5 upfront. Expected return to Simon:\nE=(1/2)(7)+(1/2)(2) =3.5+1.0=4.5 Net gain for Simon = 4.5 - 5 = -0.5 Since E(net gain) ≠ 0, the game is NOT fair. It favours Olivia.',
          answer: "Not a fair game; Simon's expected gain is -£0.50.",
        },
        {
          id: 2,
          question:
            'Maria and Shinji play the following game: Shinji selects a card at random from a standard pack of 52 cards. If the card is a diamond, he gives Maria £3; otherwise Maria gives him £n.\nFind the value of n which makes this a fair game.',
          type: 'Medium',
          explaination:
            'P(diamond)=1/4, P(not diamond)=3/4 For a fair game: E(gain for Shinji)=0\n-3 · 1/4+n · 3/4 =0 ⇒ 3n=3 ⇒ n=1',
          answer: 'n=1',
        },
        {
          id: 3,
          question:
            'A game stall offers the following game: You toss three fair coins. You receive the number of dollars equal to the number of tails.\nHow much should the stall charge for one game in order to make the game fair?',
          type: 'Medium',
          explaination:
            'Let X = number of tails, X ~ B(3,0.5)\nE(X)=3 × 0.5=1.5 For a fair game, charge = E(payout)=$1.50',
          answer: '$1.50',
        },
      ],
      'expected-value-simultaneous-equations': [],
    },
  },
  {
    'statistics-normal-distribution': {
      title: 'Statistics – Normal Distribution',
      'finding-probabilities-from-a-normal-distribution': [
        {
          id: 1,
          question: 'X ~ N(10, 25).\nFind P(X > 15).',
          type: 'Easy',
          explaination: 'Standardise: Z=(15-10)/5 =1; P(Z>1)=1-Φ(1) ≈ 0.159',
          answer: 'P(X>15) ≈ 0.159',
        },
        {
          id: 2,
          question: 'X ~ N(10, 25).\nFind P(X > 12).',
          type: 'Easy',
          explaination: 'Z=(12-10)/5=0.4; P(Z>0.4)=1-Φ(0.4) ≈ 0.345',
          answer: 'P(X>12) ≈ 0.345',
        },
        {
          id: 3,
          question: 'X ~ N(10, 25).\nFind P(X < 13).',
          type: 'Easy',
          explaination: 'Z=(13-10)/5=0.6; Φ(0.6) ≈ 0.726',
          answer: 'P(X<13) ≈ 0.726',
        },
        {
          id: 4,
          question: 'X ~ N(10, 25).\nFind P(X < 7).',
          type: 'Easy',
          explaination: 'Z=(7-10)/5=-0.6; Φ(-0.6) ≈ 0.274',
          answer: 'P(X<7) ≈ 0.274',
        },
        {
          id: 5,
          question: 'Y ~ N(25, 12).\nFind P(18 < Y < 23).',
          type: 'Easy',
          explaination:
            'σ=√12 ≈ 3.464\nz₁=(18-25)/3.464 ≈ -2.02, z₂=(23-25)/3.464 ≈ -0.577; P ≈ Φ(-0.577)-Φ(-2.02) ≈ 0.282-0.022=0.260',
          answer: 'P(18<Y<23) ≈ 0.260',
        },
        {
          id: 6,
          question: 'Y ~ N(25, 12).\nFind P(23 < Y < 28).',
          type: 'Easy',
          explaination: 'z₁ ≈ -0.577, z₂ ≈ 0.866; P ≈ Φ(0.866)-Φ(-0.577) ≈ 0.807-0.282=0.525',
          answer: 'P(23<Y<28) ≈ 0.525',
        },
        {
          id: 7,
          question: 'Y ~ N(25, 12).\nFind P(Y > 24.8).',
          type: 'Easy',
          explaination: 'σ=√12 ≈ 3.464\nZ=(24.8-25)/3.464 ≈ -0.058; P(Z>-0.058) ≈ 0.523',
          answer: 'P(Y>24.8) ≈ 0.523',
        },
        {
          id: 8,
          question: 'Y ~ N(25, 12).\nFind P(Y > 27.4).',
          type: 'Easy',
          explaination: 'Z=(27.4-25)/3.464 ≈ 0.693; P(Z>0.693) ≈ 0.244',
          answer: 'P(Y>27.4) ≈ 0.244',
        },
        {
          id: 9,
          question:
            'T has a normal distribution with mean 12.5 and standard deviation 4.6.\nFind P(T < 11.2).',
          type: 'Easy',
          explaination: 'T ~ N(12.5, 4.6²)\nZ=(11.2-12.5)/4.6 ≈ -0.283; Φ(-0.283) ≈ 0.389',
          answer: 'P(T<11.2) ≈ 0.389',
        },
        {
          id: 10,
          question:
            'T has a normal distribution with mean 12.5 and standard deviation 4.6.\nFind P(T < 13.1).',
          type: 'Easy',
          explaination: 'Z=(13.1-12.5)/4.6 ≈ 0.130; Φ(0.130) ≈ 0.552',
          answer: 'P(T<13.1) ≈ 0.552',
        },
        {
          id: 11,
          question:
            'T has a normal distribution with mean 12.5 and standard deviation 4.6.\nFind P(11.6 < T < 14.5).',
          type: 'Medium',
          explaination:
            'T ~ N(12.5, 4.6²)\nz₁=(11.6-12.5)/4.6 ≈ -0.196, z₂=(14.5-12.5)/4.6 ≈ 0.435; P ≈ 0.668-0.422=0.246',
          answer: 'P(11.6 <T<14.5) ≈ 0.246',
        },
        {
          id: 12,
          question:
            'T has a normal distribution with mean 12.5 and standard deviation 4.6.\nFind P(8.7 < T < 12.0).',
          type: 'Medium',
          explaination:
            'z₁=(8.7-12.5)/4.6 ≈ -0.826, z₂=(12.0-12.5)/4.6 ≈ -0.109; P ≈ 0.457-0.204=0.253',
          answer: 'P(8.7 <T<12.0) ≈ 0.252',
        },
        {
          id: 13,
          question: 'M has a normal distribution with mean 62.4 and variance 8.7.\nFind P(M > 65).',
          type: 'Medium',
          explaination: 'M ~ N(62.4, 8.7), σ=√8.7 ≈ 2.950\nZ=(65-62.4)/2.950 ≈ 0.881; P ≈ 0.189',
          answer: 'P(M>65) ≈ 0.189',
        },
        {
          id: 14,
          question: 'M has a normal distribution with mean 62.4 and variance 8.7.\nFind P(M > 60).',
          type: 'Medium',
          explaination: 'Z=(60-62.4)/2.950 ≈ -0.814; P(Z>-0.814) ≈ 0.792',
          answer: 'P(M>60) ≈ 0.792',
        },
        {
          id: 15,
          question:
            'M has a normal distribution with mean 62.4 and variance 8.7.\nFind P(61.5 < M < 62.5).',
          type: 'Medium',
          explaination: 'σ ≈ 2.950\nz₁ ≈ -0.305, z₂ ≈ 0.034; P ≈ 0.514-0.380=0.134',
          answer: 'P(61.5 <M<62.5) ≈ 0.133',
        },
        {
          id: 16,
          question:
            'M has a normal distribution with mean 62.4 and variance 8.7.\nFind P(62.5 < M < 63.5).',
          type: 'Medium',
          explaination: 'z₁ ≈ 0.034, z₂ ≈ 0.373; P ≈ 0.645-0.514=0.131',
          answer: 'P(62.5 <M<63.5) ≈ 0.132',
        },
        {
          id: 17,
          question:
            'The heights of trees in a forest can be modelled by a normal distribution with mean 8.7 m and standard deviation 2.3 m.\n(a) Sketch a normal distribution curve and shade the area representing P(5 < X < 10).\n(b) Find the probability that a randomly chosen tree is between 5 m and 10 m tall.',
          type: 'Medium',
          explaination:
            'X ~ N(8.7, 2.3²)\n(a) Bell-shaped curve centred at 8.7; region between 5 and 10 shaded.\n(b) z₁=(5-8.7)/2.3 ≈ -1.609, z₂=(10-8.7)/2.3 ≈ 0.565\nP ≈ Φ(0.565)-Φ(-1.609) ≈ 0.714-0.054=0.660',
          answer: '(b) P(5<X<10) ≈ 0.660',
        },
        {
          id: 18,
          question:
            'The battery life of a particular model of phone can be modelled by a normal distribution with mean 56 hours and standard deviation 8 hours.\nFind the probability that a randomly selected phone has battery life:\nbetween 50 and 60 hours;',
          type: 'Medium',
          explaination:
            'X ~ N(56, 8²)\nz₁=(50-56)/8=-0.75, z₂=(60-56)/8=0.5; P ≈ Φ(0.5)-Φ(-0.75) ≈ 0.692-0.227=0.465',
          answer: 'P(50<X<60) ≈ 0.465',
        },
        {
          id: 19,
          question:
            'The battery life of a particular model of phone can be modelled by a normal distribution with mean 56 hours and standard deviation 8 hours.\nFind the probability that a randomly selected phone has battery life:\nmore than 72 hours.',
          type: 'Medium',
          explaination: 'Z=(72-56)/8=2; P(Z>2) ≈ 0.0228',
          answer: 'P(X>72) ≈ 0.0228',
        },
        {
          id: 20,
          question:
            'The heights of trees in a forest are modelled by a normal distribution with mean 17.2 m and standard deviation 6.3 m.\nFind the probability that a randomly selected tree:\nhas height between 15 m and 20 m;',
          type: 'Medium',
          explaination:
            'X ~ N(17.2, 6.3²)\nz₁=(15-17.2)/6.3 ≈ -0.349, z₂=(20-17.2)/6.3 ≈ 0.444; P ≈ 0.672-0.364=0.308',
          answer: 'P(15<X<20) ≈ 0.308',
        },
        {
          id: 21,
          question:
            'The heights of trees in a forest are modelled by a normal distribution with mean 17.2 m and standard deviation 6.3 m.\nFind the probability that a randomly selected tree:\nis taller than 20 m.',
          type: 'Medium',
          explaination: 'P(Z>0.444) ≈ 1-0.672=0.328',
          answer: 'P(X>20) ≈ 0.328',
        },
      ],
      'inverse-normal-distribution-finding-x': [
        {
          id: 1,
          question: 'X ~ N(10, 25).\nFind x such that P(X < x) = 0.75.',
          type: 'Easy',
          explaination: 'σ=5\nΦ⁻¹(0.75)=0.6745; x=10+0.6745 × 5 ≈ 13.37',
          answer: 'x ≈ 13.37',
        },
        {
          id: 2,
          question: 'X ~ N(10, 25).\nFind x such that P(X < x) = 0.26.',
          type: 'Easy',
          explaination: 'Φ⁻¹(0.26)=-0.6433; x=10+ (-0.6433) × 5 ≈ 6.78',
          answer: 'x ≈ 6.78',
        },
        {
          id: 3,
          question: 'X ~ N(10, 25).\nFind x such that P(X > x) = 0.65.',
          type: 'Easy',
          explaination: 'σ=5\nP(X<x)=0.35; z=-0.3853; x=10-0.3853 × 5 ≈ 8.07',
          answer: 'x ≈ 8.07',
        },
        {
          id: 4,
          question: 'X ~ N(10, 25).\nFind x such that P(X > x) = 0.12.',
          type: 'Easy',
          explaination: 'P(X<x)=0.88; z=1.1750; x=10+1.175 × 5 ≈ 15.88',
          answer: 'x ≈ 15.88',
        },
        {
          id: 5,
          question: 'X ~ N(38, 18).\nFind x such that P(X < x) = 0.05.',
          type: 'Medium',
          explaination: 'σ=√18 ≈ 4.243\nz=-1.6449; x=38-1.6449 × 4.243 ≈ 31.02',
          answer: 'x ≈ 31.02',
        },
        {
          id: 6,
          question: 'X ~ N(38, 18).\nFind x such that P(X < x) = 0.97.',
          type: 'Medium',
          explaination: 'z=1.8808; x=38+1.8808 × 4.243 ≈ 45.98',
          answer: 'x ≈ 45.98',
        },
        {
          id: 7,
          question: 'X ~ N(38, 18).\nFind x such that P(X > x) = 0.99.',
          type: 'Medium',
          explaination: 'σ ≈ 4.243\nP(X<x)=0.01; z=-2.3263; x=38-2.3263 × 4.243 ≈ 28.13',
          answer: 'x ≈ 28.13',
        },
        {
          id: 8,
          question: 'X ~ N(38, 18).\nFind x such that P(X > x) = 0.02.',
          type: 'Medium',
          explaination: 'P(X<x)=0.98; z=2.0537; x=38+2.0537 × 4.243 ≈ 46.71',
          answer: 'x ≈ 46.71',
        },
        {
          id: 9,
          question:
            'The times taken by a group of children to complete a puzzle can be modelled by a normal distribution with mean 4.5 minutes and variance 2.25 minutes².\nWhat is the probability that a randomly selected child takes more than 7 minutes to complete the puzzle?',
          type: 'Medium',
          explaination:
            'T ~ N(4.5, 2.25), σ=√2.25=1.5\nZ=(7-4.5)/1.5=5/3 ≈ 1.667; P(T>7) ≈ 1-Φ(1.667) ≈ 0.0478',
          answer: 'P(T>7) ≈ 0.0478',
        },
        {
          id: 10,
          question:
            'The times taken by a group of children to complete a puzzle can be modelled by a normal distribution with mean 4.5 minutes and variance 2.25 minutes².\nFind the length of time such that 90% of the children take less than this time to complete the puzzle.',
          type: 'Medium',
          explaination: 'P(T<t)=0.90; z=Φ⁻¹(0.90) ≈ 1.2816; t=4.5+1.2816 × 1.5 ≈ 6.42',
          answer: 't ≈ 6.42 minutes',
        },
        {
          id: 11,
          question: 'Given that Y ~ N(13.2, 5.1²), find the value of c such that P(c<Y<17.3)=0.14.',
          type: 'Hard',
          explaination:
            'P(Y<17.3)=Φ((17.3-13.2)/5.1)=Φ(0.804) ≈ 0.7892\nP(Y<c)=0.7892-0.14=0.6492\nz=Φ⁻¹(0.6492) ≈ 0.381\nc=13.2+0.381 × 5.1 ≈ 15.14',
          answer: 'c ≈ 15.14',
        },
      ],
      'normal-distribution-model-suitability': [
        {
          id: 1,
          question:
            'Percentage scores on a test, taken by a large number of people, are found to have a mean of 35 with a standard deviation of 20. Explain why this suggests that the scores cannot be modelled by a normal distribution.',
          type: 'Medium',
          explaination:
            'For X ~ N(35, 20²):\nμ-3σ=35-60=-25<0 A normal model assigns positive probability to values below 0, but percentage scores must lie in [0, 100]. Since a large proportion of the model falls below 0, it is not a suitable model.',
          answer:
            'A normal distribution extends to -∞, giving non-zero probability for negative scores, which is impossible for percentage scores.',
        },
      ],
      'normal-distribution-combined-with-expected-value-inverse': [
        {
          id: 1,
          question:
            "Charlotte's times for running a 400 m race are normally distributed with mean 62.3 seconds and standard deviation 4.5 seconds.\nWhat is the probability that Charlotte's time in a randomly selected race is over 65 seconds?",
          type: 'Hard',
          explaination: 'T ~ N(62.3, 4.5²)\nZ=(65-62.3)/4.5=0.6; P(T>65)=1-Φ(0.6) ≈ 0.274',
          answer: 'P(T>65) ≈ 0.274',
        },
        {
          id: 2,
          question:
            "Charlotte's times for running a 400 m race are normally distributed with mean 62.3 seconds and standard deviation 4.5 seconds.\nCharlotte ran 38 races this season. What is the expected number of races in which she ran over 65 seconds?",
          type: 'Hard',
          explaination: 'Expected = 38 × 0.274 ≈ 10.4',
          answer: '≈ 10.4 races',
        },
        {
          id: 3,
          question:
            "Charlotte's times for running a 400 m race are normally distributed with mean 62.3 seconds and standard deviation 4.5 seconds.\nIn order to qualify for the national championships, Charlotte needs to run under 59.7 seconds. What is the probability that she will qualify with a single race?",
          type: 'Hard',
          explaination: 'Z=(59.7-62.3)/4.5 ≈ -0.578; P(T<59.7) ≈ 0.282',
          answer: 'P(T<59.7) ≈ 0.282',
        },
        {
          id: 4,
          question:
            'The daily amount of screen time among teenagers can be modelled by a normal distribution with mean 4.2 hours and standard deviation 1.3 hours.\nWhat percentage of teenagers get more than 6 hours of screen time per day?',
          type: 'Hard',
          explaination: 'X ~ N(4.2, 1.3²)\nZ=(6-4.2)/1.3 ≈ 1.385; P(X>6) ≈ 0.0831 → 8.31%',
          answer: '≈ 8.31%',
        },
        {
          id: 5,
          question:
            'The daily amount of screen time among teenagers can be modelled by a normal distribution with mean 4.2 hours and standard deviation 1.3 hours.\nLet T be the time such that 5% of teenagers get more screen time than T. Find the value of T.',
          type: 'Hard',
          explaination: 'P(X<T)=0.95; z=1.6449; T=4.2+1.6449 × 1.3 ≈ 6.34',
          answer: 'T ≈ 6.34 hours',
        },
        {
          id: 6,
          question:
            'The daily amount of screen time among teenagers can be modelled by a normal distribution with mean 4.2 hours and standard deviation 1.3 hours.\nIn a group of 350 teenagers, how many would you expect to get less than 3 hours of screen time per day?',
          type: 'Hard',
          explaination:
            'Z=(3-4.2)/1.3 ≈ -0.923; P(X<3) ≈ 0.178; Expected = 350 × 0.178 ≈ 62.3 ≈ 62',
          answer: '≈ 62 teenagers',
        },
        {
          id: 7,
          question:
            'In a long jump competition, the distances achieved by a particular age group can be modelled by a normal distribution with mean 5.2 m and variance 0.6 m².\nIn a group of 30 competitors from this age group, how many would you expect to jump further than 6 m?',
          type: 'Hard',
          explaination:
            'X ~ N(5.2, 0.6), σ=√0.6 ≈ 0.7746\nZ=(6-5.2)/0.7746 ≈ 1.033; P(X>6) ≈ 0.151; Expected = 30 × 0.151 ≈ 4.53 ≈ 5',
          answer: '≈ 5 competitors',
        },
        {
          id: 8,
          question:
            'In a long jump competition, the distances achieved by a particular age group can be modelled by a normal distribution with mean 5.2 m and variance 0.6 m².\nIn a large competition, the top 5% of participants will qualify for the next round. Estimate the qualifying distance.',
          type: 'Hard',
          explaination: 'P(X>x)=0.05 ⇒ z=1.6449; x=5.2+1.6449 × 0.7746 ≈ 6.47 m',
          answer: '≈ 6.47 m',
        },
        {
          id: 9,
          question:
            "A farmer has chickens that produce eggs with masses that are normally distributed with mean 60 g and standard deviation 5 g. Eggs with a mass less than 53 g cannot be sold. Eggs with a mass between 53 g and 63 g are sold for 12 cents, and eggs with a mass above 63 g are sold for 16 cents.\nIf the farmer's hens produce 6000 eggs each week, what is the farmer's expected income from the eggs?",
          type: 'Hard',
          explaination:
            'X ~ N(60, 5²)\nP(X<53)=Φ((53-60)/5) =Φ(-1.4) ≈ 0.0808\nP(53 ≤ X ≤ 63)=Φ(0.6)-Φ(-1.4) ≈ 0.7257-0.0808=0.6449\nP(X>63)=1-Φ(0.6) ≈ 0.2743 Expected income per egg = 0 × 0.0808+12 × 0.6449+16 × 0.2743\n=0+7.739+4.389=12.128 cents Total: 6000 × 12.128=72 768 cents =$727.68',
          answer: 'Expected weekly income ≈ 727.68 cents ≈ $7.28',
        },
      ],
      'inverse-normal-distribution-qualifying-threshold': [
        {
          id: 1,
          question:
            'Among 17-year-olds, the times taken to run 100 m are normally distributed with mean 14.3 s and variance 2.2 s². In a large competition, the top 15% of participants will qualify for the next round. Estimate the required qualifying time.',
          type: 'Hard',
          explaination:
            'T ~ N(14.3, 2.2), σ=√2.2 ≈ 1.483 Top 15% = fastest times ⇒ P(T<t)=0.15\nz=Φ⁻¹(0.15) ≈ -1.0364\nt=14.3+(-1.0364) × 1.483 ≈ 12.76 s',
          answer: 't ≈ 12.76 s',
        },
      ],
      'inverse-normal-quartiles-and-iqr': [
        {
          id: 1,
          question:
            'A random variable follows a normal distribution with mean 12 and variance 25.\nFind the upper quartile.',
          type: 'Medium',
          explaination: 'X ~ N(12, 25), σ=5\nP(X<Q₃)=0.75; z=0.6745; Q₃=12+0.6745 × 5 ≈ 15.37',
          answer: 'Q₃ ≈ 15.37',
        },
        {
          id: 2,
          question:
            'A random variable follows a normal distribution with mean 12 and variance 25.\nFind the interquartile range of the distribution.',
          type: 'Medium',
          explaination: 'By symmetry Q₁=12-0.6745 × 5 ≈ 8.63; IQR=Q₃-Q₁=2 × 0.6745 × 5 ≈ 6.74',
          answer: 'IQR ≈ 6.75',
        },
      ],
      'inverse-normal-percentile': [
        {
          id: 1,
          question:
            'A random variable follows a normal distribution with mean 3.6 and variance 1.44. Find the 80th percentile of the distribution.',
          type: 'Medium',
          explaination:
            'X ~ N(3.6, 1.44), σ=√1.44=1.2\nP(X<x)=0.80; z=Φ⁻¹(0.80) ≈ 0.8416\nx=3.6+0.8416 × 1.2 ≈ 4.61',
          answer: 'x ≈ 4.61',
        },
      ],
      'normal-distribution-box-plot-interpretation-and-completion': [],
      'normal-distribution-contextual-probability-binomial': [
        {
          id: 1,
          question:
            'The reaction time of a sprinter follows a normal distribution with mean 0.2 seconds and standard deviation 0.1 seconds.\n(a) Find the probability of getting a negative reaction time. Explain in this context why this might be a plausible outcome.\nA false start is declared if the reaction time is less than 0.1 seconds.\n(b) Find the probability of the sprinter getting a false start.\n(c) In 10 races, find the probability that the sprinter gets a false start more than once.\n(d) What assumptions did you have to make in part\n(c)? How realistic are these assumptions?',
          type: 'Hard',
          explaination:
            'T ~ N(0.2, 0.1²)\n(a) Z=(0-0.2)/0.1=-2; P(T<0) ≈ 0.0228. A negative reaction time is physically impossible but the normal model assigns a small probability to it; in practice this is negligible, so the model is still plausible.\n(b) Z=(0.1-0.2)/0.1=-1; P(T<0.1) ≈ 0.159\n(c) Let X ~ B(10, 0.159).\nP(X=0)=(0.841)¹⁰ ≈ 0.175; P(X=1)=¹⁰C₁(0.159)(0.841)⁹ ≈ 0.330\nP(X>1)=1-0.175-0.330 ≈ 0.495\n(d) Assumption: reaction times in different races are independent. This may not be fully realistic (fatigue, adrenaline, etc.).',
          answer: '(a) P(T<0) ≈ 0.0228\n(b) P(T<0.1) ≈ 0.159\n(c) P(X>1) ≈ 0.494',
        },
      ],
    },
  },
  {
    'analysis-approaches': {
      title: 'Analysis & Approaches',
      'limits-trigonometric-degrees': [
        {
          id: 1,
          question:
            'Suggest the limit of (sin 2x)/(πx/180) as x tends to zero. (Angles in degrees.)',
          type: 'Medium',
          explaination:
            'Convert: sin(2x°)=sin(2πx/180) ≈ 2πx/180 as x → 0. Divide by πx/180: limit =2.',
          answer: '2',
        },
        {
          id: 2,
          question:
            'Suggest the limit of (sin 3x)/(πx/180) as x tends to zero. (Angles in degrees.)',
          type: 'Medium',
          explaination: 'Similarly sin(3x°) ≈ 3πx/180; dividing by πx/180 gives limit =3.',
          answer: '3',
        },
        {
          id: 3,
          question:
            'Suggest the limit of (tan x)/(πx/180) as x tends to zero. (Angles in degrees.)',
          type: 'Medium',
          explaination: 'tan(x°) ≈ πx/180 as x → 0; ratio → 1.',
          answer: '1',
        },
        {
          id: 4,
          question:
            'Suggest the limit of (tan 2x)/(πx/90) as x tends to zero. (Angles in degrees.)',
          type: 'Medium',
          explaination: 'tan(2x°) ≈ 2πx/180 =πx/90; ratio → 1.',
          answer: '1',
        },
        {
          id: 5,
          question:
            'Use a graphical calculator to sketch y=(sin 5x)/(πx/36) and suggest the limit as x → 0. (Angles in degrees.)',
          type: 'Medium',
          explaination: 'sin(5x°) ≈ 5πx/180 =πx/36; ratio → 1.',
          answer: '1',
        },
        {
          id: 6,
          question:
            'Use a graphical calculator to sketch y=(sin 10x)/(πx/180) and suggest the limit as x → 0. (Angles in degrees.)',
          type: 'Medium',
          explaination: 'sin(10x°) ≈ 10πx/180; divide by πx/180: limit =10.',
          answer: '10',
        },
        {
          id: 7,
          question:
            'Use a graphical calculator to sketch y=(cos x- 1)/((πx/180)²) and suggest the limit as x → 0. (Angles in degrees.)',
          type: 'Hard',
          explaination:
            'Using cos θ ≈ 1-θ²/2 with θ=πx/180: numerator ≈ -(1/2)(πx/180)²; limit =-1/2.',
          answer: '-1/2',
        },
        {
          id: 8,
          question:
            'Use a graphical calculator to sketch y=(cos x- 1)/(πx/180) and suggest the limit as x → 0. (Angles in degrees.)',
          type: 'Hard',
          explaination: 'Numerator ≈ -(1/2)(πx/180)²; dividing by πx/180 gives -πx/360 → 0.',
          answer: '0',
        },
      ],
      'limits-exponential': [
        {
          id: 1,
          question: 'Suggest the limit of (2ˣ - 1)/x as x tends to zero.',
          type: 'Medium',
          explaination: 'By the standard result lim(x→0) (aˣ-1)/x=ln a, limit =ln 2.',
          answer: 'ln 2 ≈ 0.693',
        },
        {
          id: 2,
          question: 'Suggest the limit of (3ˣ - 1)/x as x tends to zero.',
          type: 'Medium',
          explaination: 'By the same result, limit =ln 3.',
          answer: 'ln 3 ≈ 1.099',
        },
        {
          id: 3,
          question:
            'Use a graphical calculator to sketch y=(5ˣ -1)/2x and suggest the limit as x → 0.',
          type: 'Medium',
          explaination: 'lim(x→0) (5ˣ-1)/x=ln 5; divide by 2: limit =(ln 5)/2.',
          answer: '(ln 5)/2',
        },
        {
          id: 4,
          question:
            'Use a graphical calculator to sketch y=(4ˣ -1)/4x and suggest the limit as x → 0.',
          type: 'Medium',
          explaination: 'lim(x→0) (4ˣ-1)/x=ln 4; divide by 4: limit =(ln 4)/4.',
          answer: '(ln 4)/4',
        },
      ],
      'limits-graphical-approach': [
        {
          id: 1,
          question:
            'Use a graphical calculator to sketch the graph of y=x/5x and hence suggest the limit as x tends to zero.',
          type: 'Easy',
          explaination: 'x/5x=1/5 for x ≠ 0; graph is horizontal line, limit =1/5.',
          answer: '1/5',
        },
        {
          id: 2,
          question:
            'Use a graphical calculator to sketch the graph of y=7x²/10x and hence suggest the limit as x tends to zero.',
          type: 'Easy',
          explaination: '7x²/10x=7x/10 → 0.',
          answer: '0',
        },
        {
          id: 3,
          question:
            'Use a graphical calculator to sketch the graph of y=(x+x³)/2x and hence suggest the limit as x tends to zero.',
          type: 'Easy',
          explaination: '(x+x³)/2x=(1+x²)/2 → 1/2.',
          answer: '1/2',
        },
        {
          id: 4,
          question:
            'Use a graphical calculator to sketch the graph of y=(x²+x)/(x²+2x) and hence suggest the limit as x tends to zero.',
          type: 'Easy',
          explaination: '(x(x+1))/(x(x+2))=(x+1)/(x+2) → 1/2.',
          answer: '1/2',
        },
      ],
      'gradient-of-tangent-by-chord-method': [],
      'evaluating-a-derivative-at-a-point': [
        {
          id: 1,
          question:
            'The rate of increase of voltage (V) with respect to time (t) through an electrical component satisfies dV/dt = V+1.\nFind the gradient of the graph of V against t when V = 2.',
          type: 'Easy',
          explaination: 'Substitute V=2: dV/dt =2+1=3.',
          answer: '3',
        },
      ],
      limits: [
        {
          id: 1,
          question:
            'Use technology to suggest the value of the limit of (sin x²)/((πx/180)²) as x tends to zero. (Angles in degrees.)',
          type: 'Medium',
          explaination:
            'sin(x²) ≈ x² (rad) but angles in degrees: sin(πx²/180) ≈ πx²/180.\nDenominator (πx/180)²=(π² x²)/180². Ratio → (πx²/180)/(π² x²/180²) =180/π. (Interpret sin x² as (sin x)²: limit =1.)',
          answer: '1',
        },
        {
          id: 2,
          question: 'Suggest the value of the limit of (ln x)/(x -1) as x tends to 1.',
          type: 'Medium',
          explaination: "Using numerical values approaching x=1, or L'Hôpital's rule: limit =1.",
          answer: '1',
        },
        {
          id: 3,
          question:
            'Use technology to suggest a value for the limit of √(x² + 6x) - x as x gets very large.',
          type: 'Hard',
          explaination: '√(x²+6x)-x=6x/(√(x²+6x) +x) → 6x/2x=3 as x → ∞.',
          answer: '3',
        },
      ],
      'related-rates-inverse-derivatives': [
        {
          id: 1,
          question:
            'The rate of change of x with respect to y is given by 3x.\nFind the gradient on the graph of y against x when x = 2.',
          type: 'Hard',
          explaination: 'dx/dy=3x ⇒ dy/dx=1/3x. At x=2: dy/dx=1/6.',
          answer: '1/6',
        },
      ],
      'increasing-decreasing-functions': [],
      'sketching-derivatives': [],
      'sketching-f-x-from-f-x': [],
      'graphing-analysing-functions': [
        {
          id: 1,
          question: 'Use technology to sketch the graph of y = f(x) where f(x) = x²(x² - 1) .',
          type: 'Hard',
          explaination:
            '1. Use GDC or graphing technology to plot y = x²(x² - 1) = x⁴ - x² .\n2. Identify key features: roots, turning points.',
          answer:
            'Graph showing a W-shaped quartic with roots at x = -1, 0, 0, 1 and local maxima/minima .',
        },
        {
          id: 2,
          question: 'For f(x) = x²(x² - 1) , find the interval in which f(x) > 0 .',
          type: 'Hard',
          explaination:
            '1. f(x) = x²(x² - 1) = x²(x-1)(x+1) .\n2. f(x) > 0 when x² > 0 (always, except x = 0 ) and x² - 1 > 0 .\n3. x² - 1 > 0 ⇒ x < -1 or x > 1 .\n4. Answer: x < -1 or x > 1 .',
          answer: 'x < -1 or x > 1 (excluding x = 0 , but f(0) = 0 is not > 0 ).',
        },
        {
          id: 3,
          question: "For f(x) = x²(x² - 1) , find the interval in which f'(x) < 0 .",
          type: 'Hard',
          explaination:
            "1. f(x) = x⁴ - x² .\n2. f'(x) = 4x³ - 2x = 2x(2x² - 1).\n3. f'(x) = 0 ⇒ x = 0 or x = ± 1/√2 .\n4. Sign analysis: f'(x) < 0 for x < -1/√2 and 0 < x < 1/√2 .",
          answer: 'x < -1/√2 or 0 < x < 1/√2 , equivalently x < -√2/2 or 0 < x < √2/2 .',
        },
      ],
      'matching-functions-and-derivatives': [
        {
          id: 1,
          question: 'Explain why the answer to part (b) is not unique.',
          type: 'Hard',
          explaination:
            "1. Integrating f'(x) gives f(x) + c where c is an arbitrary constant.\n2. Different values of c give different graphs that all have the same derivative.\n3. Therefore the answer is not unique.",
          answer: 'Adding any constant to f(x) gives another valid answer.',
        },
      ],
      'area-enclosed-by-curve-and-x-axis': [
        {
          id: 1,
          question: 'Find the area enclosed between the x-axis and the graph of y = -x² + 8x - 12.',
          type: 'Medium',
          explaination:
            'Find roots: -x²+8x-12=0 ⇒ x²-8x+12=0 ⇒ (x-2)(x-6)=0 Roots: x=2, x=6\nArea = ∫[2 to 6] (-x²+8x-12) dx = [-x³/3+4x²-12x]₂⁶\n= (-72+144-72)-(-8/3+16-24) = 0 - (-32/3) = 32/3',
          answer: '32/3',
        },
        {
          id: 2,
          question:
            'Find the area enclosed by the part of the graph of y = 9 - x² for x > 0, the x-axis and the y-axis.',
          type: 'Easy',
          explaination:
            'Positive root: 9-x²=0 ⇒ x=3\nArea = ∫[0 to 3] (9-x²) dx = [9x-x³/3]₀³\n= 27 - 9 = 18',
          answer: '18',
        },
      ],
      'integration-in-context': [
        {
          id: 1,
          question:
            'As a chemical filter warms up it can filter water more quickly. At a time t after it starts, it filters water at a rate of (5 + kt²) litres per minute. After 2 minutes it filters at a rate of 9 litres per minute.\nHow much water is filtered in the first 2 minutes?',
          type: 'Hard',
          explaination:
            'Find k: 5 + k(2)² = 9 ⇒ 4k = 4 ⇒ k = 1 Rate: 5 + t²\nWater = ∫[0 to 2] (5+t²) dt = [5t + t³/3]₀²\n= 10 + 8/3 = 38/3 litres',
          answer: '38/3 ≈ 12.7 litres',
        },
        {
          id: 2,
          question:
            'For the first minute of activity, the rate at which a paint sprayer emits paint is directly proportional to the time it has been on. After 10 seconds it sprays paint at a rate of 20 grams per second.\nWhat is the total amount of paint it sprays in the first minute of activity?',
          type: 'Medium',
          explaination:
            'Rate: r = kt At t = 10: 20 = 10k ⇒ k = 2 Rate: r = 2t\nTotal = ∫[0 to 60] 2t dt = [t²]₀⁶⁰ = 3600 g',
          answer: '3600 grams',
        },
        {
          id: 3,
          question:
            'A model suggests that sand falls through a timer at a rate of 100/t³ g per second, where t is the time in seconds after it was started.\nWhen t = 1 there are 10 g of sand in the base of the timer. a Find the amount of sand in the base 5 seconds after it was started.',
          type: 'Hard',
          explaination:
            'S(t) = 10 + ∫[1 to t] 100/s³ ds = 10 + [-50/s²]₁ᵗ\n= 10 + (-50/t² + 50) = 60 - 50/t² At t = 5: S(5) = 60 - 50/25 = 60 - 2 = 58 g',
          answer: '58 g',
        },
      ],
      'integration-in-context-improper-integrals': [
        {
          id: 1,
          question:
            'Using the sand timer model with rate 100/t³ g/s, use technology to estimate the amount of sand that will eventually fall into the base.',
          type: 'Hard',
          explaination: 'As t → ∞: S(t) = 60 - 50/t² → 60 Total sand → 60 g',
          answer: '60 g',
        },
      ],
      'mathematical-modelling': [
        {
          id: 1,
          question:
            'Using the sand timer model with rate 100/t³ g/s, provide one criticism of this model.',
          type: 'Easy',
          explaination:
            'Any one valid criticism, e.g.:\n• The model is only valid for t ≥ 1; the rate is undefined at t = 0 (infinite rate as t → 0⁺).\n• In reality, the rate of sand falling would eventually reach zero, but the model always gives a positive rate.\n• The model assumes continuous flow, but sand falls in discrete grains.',
          answer: 'See mark scheme.',
        },
      ],
      'integration-from-derivative': [
        {
          id: 1,
          question: "The function f satisfies f'(x) = x² and f(0) = 4.\nFind ∫[0 to 3] f(x) dx.",
          type: 'Medium',
          explaination:
            'Integrate: f(x) = x³/3 + C Use f(0) = 4: C = 4, so f(x) = x³/3 + 4\n∫[0 to 3] f(x) dx = [x⁴/12 + 4x]₀³\n= 81/12 + 12 = 27/4 + 48/4 = 75/4',
          answer: '75/4',
        },
        {
          id: 2,
          question: "If y''(x) = 10, y'(0) = 10 and y(0) = 2, find y(x).",
          type: 'Hard',
          explaination:
            "Integrate y'' = 10: y' = 10x + C₁ [M1] y'(0) = 10 ⇒ C₁ = 10, so y' = 10x + 10 [A1] Integrate: y = 5x² + 10x + C₂ [M1] y(0) = 2 ⇒ C₂ = 2 [A1] y(x) = 5x² + 10x + 2 [A1]",
          answer: 'y(x) = 5x² + 10x + 2',
        },
      ],
      'second-derivative': [
        {
          id: 1,
          question: "Find f''(x) given f(x) = 5x² + 2x + 1.",
          type: 'Easy',
          explaination: "f'(x) = 10x + 2 [M1] f''(x) = 10 [A1]",
          answer: "f''(x) = 10",
        },
        {
          id: 2,
          question: "Find f''(x) given f(x) = 6x² + 3x + 5.",
          type: 'Easy',
          explaination: "f'(x) = 12x + 3 [M1] f''(x) = 12 [A1]",
          answer: "f''(x) = 12",
        },
        {
          id: 3,
          question: "Find f''(x) given f(x) = 5x³ + x² + 3x + 7.",
          type: 'Easy',
          explaination: "f'(x) = 15x² + 2x + 3 [M1] f''(x) = 30x + 2 [A1]",
          answer: "f''(x) = 30x + 2",
        },
        {
          id: 4,
          question: "Find f''(x) given f(x) = x³ - 2x² + 4x + 11.",
          type: 'Easy',
          explaination: "f'(x) = 3x² - 4x + 4 [M1] f''(x) = 6x - 4 [A1]",
          answer: "f''(x) = 6x -4",
        },
        {
          id: 5,
          question: 'Find d²y/dx² given y = e⁻²ˣ.',
          type: 'Easy',
          explaination: 'dy/dx = -2e⁻²ˣ [M1] d²y/dx² = 4e⁻²ˣ [A1]',
          answer: 'd²y/dx² = 4e⁻²ˣ',
        },
        {
          id: 6,
          question: 'Find d²y/dx² given y = 2e³ˣ.',
          type: 'Easy',
          explaination: 'dy/dx = 6e³ˣ [M1] d²y/dx² = 18e³ˣ [A1]',
          answer: 'd²y/dx² = 18e³ˣ',
        },
        {
          id: 7,
          question: 'Find d²y/dx² given y = ln x.',
          type: 'Easy',
          explaination: 'dy/dx = 1/x [M1] d²y/dx² = -1/x² [A1]',
          answer: 'd²y/dx² = -1/x²',
        },
        {
          id: 8,
          question: 'Find d²y/dx² given y = -4 ln(x) + 2.',
          type: 'Easy',
          explaination: 'dy/dx = -4/x [M1] d²y/dx² = 4/x² [A1]',
          answer: 'd²y/dx² = 4/x²',
        },
        {
          id: 9,
          question: "If f(x) = x³ + kx² + 3x + 1 and f''(1) = 10, find the value of k.",
          type: 'Medium',
          explaination:
            "f'(x) = 3x² + 2kx + 3 [M1] f''(x) = 6x + 2k [M1] f''(1) = 6 + 2k = 10 [M1] k = 2 [A1]",
          answer: 'k = 2',
        },
        {
          id: 10,
          question: "If f(x) = x³ + ax² + bx + 1 with f''(-1) = -4 and f'(1) = 4, find a and b.",
          type: 'Medium',
          explaination:
            "f'(x) = 3x² + 2ax + b [M1] f''(x) = 6x + 2a [M1] f''(-1) = -6 + 2a = -4 ⇒ a = 1 [A1] f'(1) = 3 + 2(1) + b = 4 ⇒ b = -1 [A1][A1] Verify: a=1, b=-1 [A1]",
          answer: 'a = 1, b = 0',
        },
        {
          id: 11,
          question: "If f(x) = xⁿ and f''(1) = 12, find the possible values of n.",
          type: 'Hard',
          explaination:
            "f'(x) = nxⁿ⁻¹ [M1] f''(x) = n(n-1)xⁿ⁻² [M1] f''(1) = n(n-1) = 12 [M1] n² - n - 12 = 0 ⇒ (n-4)(n+3) = 0 [M1] n = 4 or n = -3 [A1]",
          answer: 'n = 4 or n = -3',
        },
      ],
      'increasing-decreasing-concavity': [
        {
          id: 1,
          question: 'Find the values of x for which f(x) = x³- 4x² + 5x - 2 is concave-down.',
          type: 'Medium',
          explaination:
            "f'(x) = 3x² - 8x + 5 [M1] f''(x) = 6x - 8 [M1] Concave-down: f''(x) < 0 ⇒ 6x - 8 < 0 ⇒ x < 4/3 [A1]",
          answer: 'x < 4/3',
        },
        {
          id: 2,
          question: 'Find the values of x for which f(x) = x³ + 9x² - 4x + 1 is concave-up.',
          type: 'Medium',
          explaination:
            "f'(x) = 3x² + 18x - 4 [M1] f''(x) = 6x + 18 [M1] Concave-up: f''(x) > 0 ⇒ 6x + 18 > 0 ⇒ x > -3 [A1]",
          answer: 'x > -3',
        },
        {
          id: 3,
          question: 'Find the values of x for which f(x) = x⁴- 4x³ - 18x² + 2x - 1 is concave-up.',
          type: 'Hard',
          explaination:
            "f'(x) = 4x³ - 12x² - 36x + 2 [M1] f''(x) = 12x² - 24x - 36 = 12(x² -2x - 3) = 12(x-3)(x+1) [M1] Concave-up: f''(x) > 0 ⇒ x < -1 or x > 3 [A1][A1]",
          answer: 'x < -3/2 or x > 3',
        },
        {
          id: 4,
          question: 'Find the values of x for which f(x) = x⁴- 6x³ + 2x - 7 is concave-down.',
          type: 'Hard',
          explaination:
            "f'(x) = 4x³ - 18x² + 2 [M1] f''(x) = 12x² - 36x = 12x(x-3) [M1] Concave-down: f''(x) < 0 ⇒ 0 < x < 3 [A1][A1]",
          answer: '0 < x < 3',
        },
      ],
      'sketching-curves-sign-analysis': [
        {
          id: 1,
          question: "Sketch a graph where for all x:\nf(x) < 0\nf'(x) > 0\nf''(x) < 0",
          type: 'Hard',
          explaination:
            'Graph lies entirely below x-axis [A1]; is strictly increasing [A1]; is concave-down [A1]',
          answer: 'See mark scheme.',
        },
        {
          id: 2,
          question:
            "Sketch a graph where for all positive x, f'(x) > 0 and f''(x) > 0, and for all negative x, f'(x) > 0 and f''(x) < 0.",
          type: 'Hard',
          explaination:
            'For x > 0: increasing and concave-up [A1]; for x < 0: increasing and concave-down [A1]; correct transition at x = 0 (inflection point) [A1]',
          answer: 'See mark scheme.',
        },
      ],
      'concavity-finding-constants': [
        {
          id: 1,
          question:
            'The graph of x³ - kx² + 4x + 7 is concave-up for all x > 1 and this is the only section which is concave-up. Find the value of k.',
          type: 'Hard',
          explaination:
            "f'(x) = 3x² - 2kx + 4 [M1] f''(x) = 6x - 2k [M1] Concave-up when f''(x) > 0 ⇒ 6x - 2k > 0 ⇒ x > k/3 [M1] Only concave-up for x > 1, so k/3 = 1 [M1] k = 3 [A1]",
          answer: 'k = 3',
        },
        {
          id: 2,
          question:
            'The curve y = x³ + ax² + bx + 7 is concave-up for all x > 2 and this is the only section which is concave-up. Find the value of a.',
          type: 'Hard',
          explaination:
            'dy/dx = 3x² + 2ax + b [M1] d²y/dx² = 6x + 2a [M1] Concave-up for x > 2 only: 6(2) + 2a = 0 ⇒ 12 + 2a = 0 [M1] a = -3 [A1]',
          answer: 'a = -3',
        },
        {
          id: 3,
          question:
            'The curve y = ax³ - bx² (where a and b are positive) is increasing for x < 0 and x > 4. Evaluate b/a.',
          type: 'Hard',
          explaination:
            "f'(x) = 3ax² - 2bx = x(3ax - 2b) [M1] Critical points at x = 0 and x = 2b/3a [M1] Increasing for x < 0 and x > 4, so 2b/3a = 4 [M1] b/a = (3 × 4)/2 = 6 [A1][A1]",
          answer: 'b/a = 6',
        },
      ],
      'proof-concavity': [
        {
          id: 1,
          question: 'Prove that the graph of y = x² + bx + c is always concave-up.',
          type: 'Hard',
          explaination:
            'dy/dx = 2x + b [M1] d²y/dx² = 2 [M1] Since d²y/dx² = 2 > 0 for all x, the graph is always concave-up [A1]',
          answer: 'See mark scheme.',
        },
        {
          id: 2,
          question:
            'The curve y = ax³ - bx² (where a and b are positive) is increasing for x < 0 and x > 4. Prove that the curve is concave-up for x > 2.',
          type: 'Hard',
          explaination:
            'dy/dx = 3ax² - 2bx [M1] d²y/dx² = 6ax - 2b [M1] Using b/a = 6, so b = 6a: d²y/dx² = 6ax - 12a = 6a(x-2) [M1] Since a > 0, for x > 2:\nd²y/dx² > 0, hence concave-up [A1]',
          answer: 'See mark scheme.',
        },
      ],
      'second-derivative-trigonometry': [
        {
          id: 1,
          question: 'If y = sin 3x + 2 cos 3x, prove that d²y/dx² = -9y.',
          type: 'Hard',
          explaination:
            'dy/dx = 3 cos 3x - 6 sin 3x [M1] d²y/dx² = -9 sin 3x -18 cos 3x = -9(sin 3x + 2 cos 3x) = -9y [M1][M1][A1]',
          answer: 'See mark scheme.',
        },
      ],
      'second-derivative-logarithms-proof': [
        {
          id: 1,
          question:
            'If y = ln(a + x), find d²y/dx². Hence, prove that the graph of y = ln(a + x) is always concave-down.',
          type: 'Hard',
          explaination:
            'dy/dx = 1/(a+x) [M1] d²y/dx² = -1/((a+x)²) [M1] Since (a+x)² > 0, we have d²y/dx² < 0 for all valid x [M1][A1] Hence always concave-down [A1]',
          answer: 'd²y/dx² = -1/((a+x)²) < 0',
        },
      ],
      'second-derivative-mixed-functions': [
        {
          id: 1,
          question: 'Find the point on the graph y = x² ln x where the second derivative equals 1.',
          type: 'Hard',
          explaination:
            'dy/dx = 2x ln x + x² · 1/x = 2x ln x + x [M1] d²y/dx² = 2 ln x + 2x · 1/x + 1 = 2 ln x + 3 [M1][A1] Set 2 ln x + 3 = 1 ⇒ ln x = -1 ⇒ x = e^(-1/2) [M1] y = e⁻¹ · (-1/2) = -1/2e [A1][A1]',
          answer: '(1/√e, -1/2e)',
        },
      ],
      'intervals-decreasing-gradient': [
        {
          id: 1,
          question:
            'Find the interval in which the gradient of the graph y = x³ - 5x² + 4x - 2 is decreasing.',
          type: 'Medium',
          explaination:
            "dy/dx = 3x² - 10x + 4 [M1] d²y/dx² = 6x - 10 [M1] Gradient decreasing when f''(x) < 0 ⇒ 6x - 10 < 0 ⇒ x < 5/3 [M1][A1]",
          answer: 'x < 5/3',
        },
      ],
      'concavity-increasing-conditions': [
        {
          id: 1,
          question:
            'The curve y = x³ + ax² + bx + 7 is concave-up for all x > 2 and this is the only section which is concave-up (a = -3).\nFind a condition on b for the curve to be strictly increasing.',
          type: 'Hard',
          explaination:
            "With a = -3: f'(x) = 3x² - 6x + b [M1] For strictly increasing, f'(x) > 0 for all x [M1] Discriminant < 0: 36 - 12b < 0 ⇒ b > 3 [M1][A1]",
          answer: 'b > 3',
        },
      ],
    },
  },
  {
    'calculus-kinematics': {
      title: 'Calculus – Kinematics',
      'differentiation-velocity-acceleration-from-displacement': [
        {
          id: 1,
          question:
            'Given that s = t³ + 3t² + 1, find expressions for the velocity and acceleration.',
          type: 'Easy',
          explaination: 'v = ds/dt = 3t² + 6t\na = dv/dt = 6t + 6',
          answer: 'v = 3t² + 6t, a = 6t + 6',
        },
        {
          id: 2,
          question:
            'Given that s = t⁴ - 5t + 2, find expressions for the velocity and acceleration.',
          type: 'Easy',
          explaination: 'v = ds/dt = 4t³ - 5\na = dv/dt = 12t²',
          answer: 'v = 4t³ - 5, a = 12t²',
        },
        {
          id: 3,
          question: 'Given that s = cos 2t, find expressions for the velocity and acceleration.',
          type: 'Easy',
          explaination: 'v = ds/dt = -2 sin 2t\na = dv/dt = -4 cos 2t',
          answer: 'v = -2 sin 2t, a = -4 cos 2t',
        },
        {
          id: 4,
          question: 'Given that s = sin(t/2), find expressions for the velocity and acceleration.',
          type: 'Easy',
          explaination: 'v = ds/dt = (1/2)cos(t/2)\na = dv/dt = -(1/4)sin(t/2)',
          answer: 'v = (1/2)cos(t/2), a = -(1/4)sin(t/2)',
        },
        {
          id: 5,
          question: 'Given that s = e³ᵗ, find expressions for the velocity and acceleration.',
          type: 'Easy',
          explaination: 'v = ds/dt = 3e³ᵗ\na = dv/dt = 9e³ᵗ',
          answer: 'v = 3e³ᵗ, a = 9e³ᵗ',
        },
        {
          id: 6,
          question: 'Given that s = e⁻⁴ᵗ, find expressions for the velocity and acceleration.',
          type: 'Easy',
          explaination: 'v = ds/dt = -4e⁻⁴ᵗ\na = dv/dt = 16e⁻⁴ᵗ',
          answer: 'v = -4e⁻⁴ᵗ, a = 16e⁻⁴ᵗ',
        },
        {
          id: 7,
          question: 'Given that s = ln(t/3), find expressions for the velocity and acceleration.',
          type: 'Easy',
          explaination: 's = ln t - ln 3\nv = ds/dt = 1/t\na = dv/dt = -1/t²',
          answer: 'v = 1/t, a = -1/t²',
        },
        {
          id: 8,
          question: 'Given that s = ln 2t, find expressions for the velocity and acceleration.',
          type: 'Easy',
          explaination: 's = ln 2 + ln t\nv = 1/t\na = -1/t²',
          answer: 'v = 1/t, a = -1/t²',
        },
      ],
      'integration-distance-travelled': [
        {
          id: 1,
          question:
            'Given that v = (sin t)/t, find the distance travelled between t = 1 and t = 5.',
          type: 'Hard',
          explaination:
            'v changes sign at t = π.\nd = ∫[1 to π] (sin t)/t dt + |∫[π to 5] (sin t)/t dt| ≈ 0.906 + 0.302 ≈ 1.21 (GDC)',
          answer: 'd ≈ 1.21',
        },
        {
          id: 2,
          question:
            'Given that v = (cos t)/t, find the distance travelled between t = 1 and t = 6.',
          type: 'Hard',
          explaination:
            'v changes sign at t = π/2 and t = 3π/2.\nd = ∫[1 to 6] |(cos t)/t| dt ≈ 0.135 + 0.670 + 0.130 ≈ 0.94 (GDC)',
          answer: 'd ≈ 0.94',
        },
        {
          id: 3,
          question:
            'Given that v = 2e^(-t²) - 1, find the distance travelled between t = 0 and t = 2.',
          type: 'Hard',
          explaination:
            'Zero of v: 2e^(-t²) = 1 ⇒ t² = ln 2 ⇒ t = √(ln 2) ≈ 0.833.\nd = ∫[0 to √(ln 2)] v dt + |∫[√(ln 2) to 2] v dt| ≈ 0.516 + 0.752 ≈ 1.27 (GDC)',
          answer: 'd ≈ 1.27',
        },
        {
          id: 4,
          question:
            'Given that v = 2e^(-t³) - 1, find the distance travelled between t = 0 and t = 1.5.',
          type: 'Hard',
          explaination:
            'Zero of v: 2e^(-t³) = 1 ⇒ t³ = ln 2 ⇒ t = ∛(ln 2) ≈ 0.885.\nd = ∫[0 to 1.5] |2e^(-t³) - 1| dt ≈ 0.984 (GDC)',
          answer: 'd ≈ 0.984',
        },
        {
          id: 5,
          question:
            'Given that v = 5(ln t)³, find the distance travelled between t = 0.5 and t = 2.',
          type: 'Hard',
          explaination:
            'v < 0 for 0.5 ≤ t < 1 and v > 0 for 1 < t ≤ 2.\nd = |∫[0.5 to 1] v dt| + ∫[1 to 2] v dt ≈ 0.167 + 0.505 ≈ 0.672 (GDC)',
          answer: 'd ≈ 0.672',
        },
        {
          id: 6,
          question:
            'Given that v = (3 ln t)/t, find the distance travelled between t = 0.5 and t = 3.',
          type: 'Hard',
          explaination:
            'v < 0 for 0.5 ≤ t < 1 and v > 0 for t > 1, so split at t = 1.\n∫ (3 ln t)/t dt = 1.5(ln t)²\nd = |0 - 1.5(ln 0.5)²| + 1.5(ln 3)² = 1.5(ln 2)² + 1.5(ln 3)² ≈ 2.53',
          answer: 'd = 1.5(ln 2)² + 1.5(ln 3)² ≈ 2.53',
        },
        {
          id: 7,
          question:
            'Find the distance travelled by a particle in its first 2 seconds of travel if the velocity is modelled by v = eᵗ - 2.',
          type: 'Medium',
          explaination:
            'Zero: eᵗ = 2 ⇒ t = ln 2.\nd = ∫[0 to ln 2] (2 - eᵗ) dt + ∫[ln 2 to 2] (eᵗ - 2) dt\n= [2t - eᵗ]₀^(ln 2) + [eᵗ - 2t]_(ln 2)²\n= (2 ln 2 - 1) + (e² - 6 + 2 ln 2) = e² - 7 + 4 ln 2 ≈ 3.16 m',
          answer: 'd = e² - 7 + 4 ln 2 ≈ 3.16 m',
        },
        {
          id: 8,
          question:
            'Given that a particle travels with velocity v = 1/t - 1, find the distance travelled between t = 0.5 and t = 2.',
          type: 'Medium',
          explaination:
            'Zero of v: 1/t = 1 ⇒ t = 1.\nd = ∫[0.5 to 1] (1/t - 1) dt + |∫[1 to 2] (1/t - 1) dt|\n= [ln t - t]₀.₅¹ + |[ln t - t]₁²|\n= (ln 2 - 0.5) + (1 - ln 2) = 0.5',
          answer: 'd = 0.5',
        },
      ],
      'kinematics-polynomial-model': [
        {
          id: 1,
          question:
            'The displacement of a particle, s metres, at time t seconds is modelled by s = 10t- t².\nFind the displacement after 2 seconds.',
          type: 'Easy',
          explaination: 's(2) = 20 - 4 = 16',
          answer: 's = 16 m',
        },
        {
          id: 2,
          question:
            'The displacement of a particle, s metres, at time t seconds is modelled by s = 10t- t².\nFind the velocity after 3 seconds.',
          type: 'Easy',
          explaination: 'v = ds/dt = 10 - 2t, so v(3) = 10 - 6 = 4',
          answer: 'v = 4 m s⁻¹',
        },
        {
          id: 3,
          question:
            'The displacement of a particle, s metres, at time t seconds is modelled by s = 10t- t².\nFind the acceleration after 4 seconds.',
          type: 'Easy',
          explaination: 'a = dv/dt = -2',
          answer: 'a = -2 m s⁻²',
        },
        {
          id: 4,
          question:
            'A bullet is fired through a viscous fluid. Its velocity is modelled by v = 256 - t⁴ from t = 0 until it stops.\nWhat is the initial speed of the bullet?',
          type: 'Medium',
          explaination: 'v(0) = 256',
          answer: '256 m s⁻¹',
        },
        {
          id: 5,
          question:
            'A bullet is fired through a viscous fluid. Its velocity is modelled by v = 256 - t⁴ from t = 0 until it stops.\nWhat is the acceleration after 2 seconds?',
          type: 'Medium',
          explaination: 'a = dv/dt = -4t³, a(2) = -32',
          answer: '-32 m s⁻²',
        },
        {
          id: 6,
          question:
            'A bullet is fired through a viscous fluid. Its velocity is modelled by v = 256 - t⁴ from t = 0 until it stops.\nHow long does it take to stop?',
          type: 'Medium',
          explaination: 'v = 0: 256 - t⁴ = 0 ⇒ t = 4',
          answer: 't = 4 s',
        },
        {
          id: 7,
          question:
            'A bullet is fired through a viscous fluid. Its velocity is modelled by v = 256 - t⁴ from t = 0 until it stops.\nWhat is the distance travelled by the bullet?',
          type: 'Medium',
          explaination:
            's = ∫[0 to 4] (256-t⁴) dt = [256t - t⁵/5]₀⁴ = 1024 -1024/5 = 4096/5 = 819.2',
          answer: 'd = 3072/5 = 614.4 m',
        },
        {
          id: 8,
          question:
            'The velocity, in metres per second, of a bicycle t seconds after passing a time checkpoint is modelled by v = 18 - 2t² for 0 < t < 6.\nWhat is the initial speed of the bicycle?',
          type: 'Medium',
          explaination: 'v(0) = 18',
          answer: '18 m s⁻¹',
        },
        {
          id: 9,
          question:
            'The velocity, in metres per second, of a bicycle t seconds after passing a time checkpoint is modelled by v = 18 - 2t² for 0 < t < 6.\nWhen is the velocity zero?',
          type: 'Medium',
          explaination: '18 - 2t² = 0 ⇒ t = 3',
          answer: 't = 3 s',
        },
        {
          id: 10,
          question:
            'The velocity, in metres per second, of a bicycle t seconds after passing a time checkpoint is modelled by v = 18 - 2t² for 0 < t < 6.\nWhat is the acceleration of the bicycle after 2 seconds?',
          type: 'Medium',
          explaination: 'a = -4t, a(2) = -8',
          answer: 'a = -8 m s⁻²',
        },
        {
          id: 11,
          question:
            'The velocity, in metres per second, of a bicycle t seconds after passing a time checkpoint is modelled by v = 18 - 2t² for 0 < t < 6.\nWhat is the distance travelled by the bicycle between t = 0 and t = 6?',
          type: 'Medium',
          explaination: 'Split at t=3: d = ∫[0 to 3] v dt + |∫[3 to 6] v dt| = 36 + 24 = 60',
          answer: 'd = 60 m',
        },
        {
          id: 12,
          question:
            'The velocity, in metres per second, of a bicycle t seconds after passing a time checkpoint is modelled by v = 18 - 2t² for 0 < t < 6.\nFind the displacement after 6 seconds.',
          type: 'Medium',
          explaination: 's = ∫[0 to 6] v dt = 36 - 36 = 0',
          answer: 's = 0 m',
        },
        {
          id: 13,
          question:
            'The velocity, in metres per second, of a bicycle t seconds after passing a time checkpoint is modelled by v = 18 - 2t² for 0 < t < 6.\nWithout any further calculus, deduce the distance travelled in the first 3 seconds.',
          type: 'Medium',
          explaination: 'By symmetry of the integral split, d_(0→3) = 36 m',
          answer: '36 m',
        },
      ],
      'integration-displacement-from-velocity': [
        {
          id: 1,
          question: 'Given that v = 4³√t, find the change in displacement between t = 1 and t = 8.',
          type: 'Easy',
          explaination: 'Δs = ∫[1 to 8] 4t^(1/3) dt = [3t^(4/3)]₁⁸ = 3(16) - 3(1) = 48- 3 = 45',
          answer: 'Δs = 45',
        },
        {
          id: 2,
          question:
            'Given that v = 5⁴√t, find the change in displacement between t = 1 and t = 16.',
          type: 'Easy',
          explaination:
            'Δs = ∫[1 to 16] 5t^(1/4) dt = [4t^(5/4)]₁¹⁶ = 4(32) - 4(1) = 128 - 4 = 124',
          answer: 'Δs = 124',
        },
        {
          id: 3,
          question:
            'Given that v = e^(t/2), find the change in displacement between t = 0 and t = ln 9.',
          type: 'Medium',
          explaination:
            'Δs = ∫[0 to ln 9] e^(t/2) dt = [2e^(t/2)]₀^(ln 9) = 2e^((ln 9)/2) - 2e⁰ = 2(3) - 2 = 4',
          answer: 'Δs = 4',
        },
        {
          id: 4,
          question:
            'Given that v = e⁻ᵗ, find the change in displacement between t = 0 and t = ln 5.',
          type: 'Medium',
          explaination:
            'Δs = ∫[0 to ln 5] e⁻ᵗ dt = [-e⁻ᵗ]₀^(ln 5) = -e^(-ln 5) + 1 = 1 - 1/5 = 4/5',
          answer: 'Δs = 4/5',
        },
        {
          id: 5,
          question:
            'The velocity of a particle is given by v = e^(-0.5t). Find the displacement of the particle after 3 seconds, relative to its initial position.',
          type: 'Medium',
          explaination:
            's = ∫[0 to 3] e^(-0.5t) dt = [-2e^(-0.5t)]₀³ = -2e^(-1.5) + 2 = 2(1- e^(-1.5))',
          answer: 's = 2(1 - e^(-1.5)) ≈ 1.55 m',
        },
      ],
      'integration-displacement-and-distance': [
        {
          id: 1,
          question:
            'The velocity of a particle is given by v = 4 - t².\nFind the displacement after 6 seconds.',
          type: 'Medium',
          explaination: 's = ∫[0 to 6] (4 - t²) dt = [4t - t³/3]₀⁶ = 24 - 72 = -48 m',
          answer: 's = -48 m',
        },
        {
          id: 2,
          question:
            'The velocity of a particle is given by v = 4 - t².\nFind the distance travelled in the first 6 seconds.',
          type: 'Medium',
          explaination:
            'Find zero: 4 - t² = 0 ⇒ t = 2.\nd = ∫[0 to 2] (4 - t²) dt + |∫[2 to 6] (4 - t²) dt|\n= [4t - t³/3]₀² + |[4t - t³/3]₂⁶| = 16/3 + |-48 - 16/3| = 16/3 + 160/3 = 176/3 ≈ 58.7 m',
          answer: 'd = 176/3 ≈ 58.7 m',
        },
      ],
      'integration-velocity-from-acceleration': [
        {
          id: 1,
          question:
            'Given that a = 2 cos(t/3), find the change in velocity between t = 0 and t = π.',
          type: 'Medium',
          explaination:
            'Δv = ∫[0 to π] 2 cos(t/3) dt = [6 sin(t/3)]₀^π = 6 sin(π/3) - 0 = 6 · √3/2 = 3√3',
          answer: 'Δv = 3√3',
        },
        {
          id: 2,
          question:
            'Given that a = 3 sin 2t, find the change in velocity between t = 0 and t = π/2.',
          type: 'Medium',
          explaination:
            'Δv = ∫[0 to π/2] 3 sin 2t dt = [-(3/2)cos 2t]₀^(π/2) = -(3/2)cos π+ (3/2)cos 0 = 3/2 + 3/2 = 3',
          answer: 'Δv = 3',
        },
        {
          id: 3,
          question:
            'Given that a = 1/(2t+1), find the change in velocity between t = 4 and t = 12.',
          type: 'Medium',
          explaination:
            'Δv = ∫[4 to 12] 1/(2t+1) dt = [(1/2)ln|2t+1|]₄¹² = (1/2)(ln 25 - ln 9) = (1/2)ln(25/9)',
          answer: 'Δv = (1/2)ln 5',
        },
        {
          id: 4,
          question: 'Given that a = 1/(3t-2), find the change in velocity between t = 1 and t = 6.',
          type: 'Medium',
          explaination:
            'Δv = ∫[1 to 6] 1/(3t-2) dt = [(1/3)ln|3t-2|]₁⁶ = (1/3)(ln 16 - ln 1) = (ln 16)/3',
          answer: 'Δv = (1/3)ln 16',
        },
        {
          id: 5,
          question:
            'The acceleration of a particle is modelled by 2t + 1. If the initial velocity is 3 m s⁻¹, find the velocity after 4 seconds.',
          type: 'Easy',
          explaination:
            'v = ∫(2t + 1) dt = t² + t + C. At t = 0, v = 3 ⇒ C = 3.\nv = t² + t + 3, so v(4) = 16 + 4 + 3 = 23 m s⁻¹',
          answer: 'v = 23 m s⁻¹',
        },
      ],
      'kinematics-displacementtime-analysis': [
        {
          id: 1,
          question:
            'The displacement of a particle, s metres, at time t seconds is modelled by s = 6t² - t³ for 0 ≤ t ≤ 6.\nFind the times at which the displacement is zero.',
          type: 'Medium',
          explaination: 's = t²(6-t) = 0 ⇒ t = 0, 6',
          answer: 't = 0 and t = 6',
        },
        {
          id: 2,
          question:
            'The displacement of a particle, s metres, at time t seconds is modelled by s = 6t² - t³ for 0 ≤ t ≤ 6.\nFind the time at which the velocity is zero.',
          type: 'Medium',
          explaination: 'v = 12t - 3t² = 3t(4-t) = 0 ⇒ t = 0 or t = 4 (t=4 for non-trivial)',
          answer: 't = 4 s',
        },
        {
          id: 3,
          question:
            'The displacement of a particle, s metres, at time t seconds is modelled by s = 6t² - t³ for 0 ≤ t ≤ 6.\nFind the time at which the displacement is maximum.',
          type: 'Medium',
          explaination: 'max s at t = 4: s(4) = 96 -64 = 32',
          answer: 't = 4 s',
        },
        {
          id: 4,
          question:
            'The displacement of a particle, s metres after t seconds, is given by s(t) = t(10 -t).\nFind the displacement after 10 seconds.',
          type: 'Easy',
          explaination: 's(10) = 10(0) = 0',
          answer: 's = 0 m',
        },
        {
          id: 5,
          question:
            'The displacement of a particle, s metres after t seconds, is given by s(t) = t(10 -t).\nFind the distance travelled in the first 10 seconds.',
          type: 'Easy',
          explaination:
            'v = ds/dt = 10 - 2t = 0 ⇒ t = 5. s(5) = 5(5) = 25. Particle goes 25 m out then returns 25 m so total distance = 25 + 25 = 50 m. [Check: d = ∫[0 to 10] |10-2t| dt = ∫[0 to 5] (10-2t)dt + ∫[5 to 10] (2t-10)dt = 25 + 25 = 50]',
          answer: 'd = 25 m',
        },
      ],
      'kinematics-trigonometric-model': [
        {
          id: 1,
          question:
            'The displacement of a particle is modelled by s = t sin t for 0 ≤ t ≤ 2π.\nFind an expression for v.',
          type: 'Hard',
          explaination: 'Product rule: v = sin t + t cos t',
          answer: 'v = sin t + t cos t',
        },
        {
          id: 2,
          question:
            'The displacement of a particle is modelled by s = t sin t for 0 ≤ t ≤ 2π.\nPart a): Find an expression for v. → v = sin t + t cos t\nHence find the initial velocity.',
          type: 'Hard',
          explaination: 'v(0) = 0 + 0 = 0',
          answer: 'v(0) = 0',
        },
        {
          id: 3,
          question:
            'The displacement of a particle is modelled by s = t sin t for 0 ≤ t ≤ 2π.\nFind an exact expression for the velocity when t = π/4.',
          type: 'Hard',
          explaination: 'Substitute t = π/4: v = √2/2 + π/4 · √2/2 = (√2/2)(1+π/4)',
          answer: 'v(π/4) = (√2/2)(1 + π/4)',
        },
        {
          id: 4,
          question:
            'The displacement of a particle is modelled by s = t sin t for 0 ≤ t ≤ 2π.\nWhat is the initial acceleration?',
          type: 'Hard',
          explaination: 'a = dv/dt = 2 cos t - t sin t, a(0) = 2',
          answer: 'a(0) = 2',
        },
        {
          id: 5,
          question:
            'The displacement of a particle is modelled by s = t sin t for 0 ≤ t ≤ 2π.\nAt what times is the velocity equal to 1?',
          type: 'Hard',
          explaination: 'Solve sin t + t cos t = 1 numerically',
          answer: 'Solve using GDC',
        },
        {
          id: 6,
          question:
            'The displacement of a particle is modelled by s = t sin t for 0 ≤ t ≤ 2π.\nWhat is the total distance travelled by the particle?',
          type: 'Hard',
          explaination: 'd = ∫[0 to 2π] |v| dt via GDC',
          answer: 'Use GDC',
        },
      ],
      'kinematics-proof-derivation': [
        {
          id: 1,
          question:
            'If a particle has a constant acceleration A, initial velocity u and initial displacement zero, show that:\nv = u + At',
          type: 'Medium',
          explaination: 'v = ∫A dt = At + C. At t=0, v=u ⇒ C=u.\nSo v = u + At.',
          answer: 'Shown',
        },
        {
          id: 2,
          question:
            'If a particle has a constant acceleration A, initial velocity u and initial displacement zero, show that:\ns = ut + (1/2)At²',
          type: 'Medium',
          explaination: 's = ∫(u + At) dt = ut + (1/2)At² + C. At t=0, s=0 ⇒ C=0.',
          answer: 'Shown',
        },
      ],
      'kinematics-proof-shm': [
        {
          id: 1,
          question: 'If s = sin ωt where ω is a constant, show that a = -ω² s.',
          type: 'Hard',
          explaination: 'v = ω cos ωt\na = dv/dt = -ω² sin ωt = -ω²s',
          answer: 'Shown',
        },
      ],
      'kinematics-projectile-free-fall': [
        {
          id: 1,
          question:
            'The velocity of a ball thrown off a cliff, v metres per second, after time t seconds is modelled by v = 5 - 10t. The ball is initially 60 m above sea level. It is thrown upwards.\nWhat is the vertical acceleration of the ball?',
          type: 'Medium',
          explaination: 'a = dv/dt = -10',
          answer: '-10 m s⁻²',
        },
        {
          id: 2,
          question:
            'The velocity of a ball thrown off a cliff, v metres per second, after time t seconds is modelled by v = 5 - 10t. The ball is initially 60 m above sea level. It is thrown upwards.\nWhen does the ball reach its maximum height above sea level? What is that maximum height?',
          type: 'Medium',
          explaination:
            'v=0: t=0.5; s = ∫[0 to 0.5] (5-10t)dt + 60 = [5t-5t²]₀^(0.5) + 60 = 1.25 + 60 = 61.25',
          answer: 't = 0.5 s, h_(max) = 61.25 m',
        },
        {
          id: 3,
          question:
            'The velocity of a ball thrown off a cliff, v metres per second, after time t seconds is modelled by v = 5 - 10t. The ball is initially 60 m above sea level. It is thrown upwards.\nWhen does the ball hit the sea?',
          type: 'Medium',
          explaination: 'Solve s(t) = 60 + 5t - 5t² = 0; positive root ≈ 4 s',
          answer: 't = 4 s (approx)',
        },
        {
          id: 4,
          question:
            'The velocity of a ball thrown off a cliff, v metres per second, after time t seconds is modelled by v = 5 - 10t. The ball is initially 60 m above sea level. It is thrown upwards.\nWhat is the vertical distance travelled by the ball?',
          type: 'Medium',
          explaination: 'Total path = up (1.25 m) + down (61.25 m) = 62.5 m',
          answer: 'd ≈ 62.5 m',
        },
        {
          id: 5,
          question:
            'The velocity of a ball thrown off a cliff, v metres per second, after time t seconds is modelled by v = 5 - 10t. The ball is initially 60 m above sea level. It is thrown upwards.\nState one assumption being made in this model.',
          type: 'Medium',
          explaination: 'E.g. air resistance ignored',
          answer: 'E.g. air resistance ignored',
        },
      ],
      'integration-piecewise-acceleration': [
        {
          id: 1,
          question:
            "A cyclist accelerates from rest. For the first 2 seconds his acceleration is modelled by 2t. For the next 2 seconds his acceleration is modelled by 16/t². Find the cyclist's velocity 4 seconds after starting.",
          type: 'Hard',
          explaination:
            'Phase 1 (0 ≤ t ≤ 2): v = ∫2t dt = t² + C. At t=0, v=0 ⇒ C=0. v(2) = 4 m s⁻¹.\nPhase 2 (2 ≤ t ≤ 4): v = ∫16/t² dt = -16/t + C.\nAt t=2, v=4 ⇒ C = 4+8 = 12. v(4) = -4 + 12 = 8 m s⁻¹.',
          answer: 'v(4) = 12 m s⁻¹',
        },
        {
          id: 2,
          question:
            'A particle has acceleration a = At, initial velocity u > 0 and initial displacement zero.\nFind expressions for:\n(i) velocity in terms of A, t and u\n(ii) displacement in terms of A, t and u.',
          type: 'Hard',
          explaination:
            '(i) v = ∫At dt = (1/2)At² + C; v(0)=u ⇒ v = u + (1/2)At²\n(a)(ii) s = ∫(u + (1/2)At²)dt = ut + (1/6)At³',
          answer: '(i) v = u + (1/2)At²\n(a)(ii) s = ut + (1/6)At³',
        },
        {
          id: 3,
          question:
            'A particle has acceleration a = At, initial velocity u > 0 and initial displacement zero.\nShow that the average velocity up to time t is given by (v + 2u)/3.',
          type: 'Hard',
          explaination:
            'Avg velocity = s/t = u + At²/6; express in terms of v:\nv = u + At²/2 ⇒ At² = 2(v-u); sub: avg = u + (v-u)/3 = (v+2u)/3',
          answer: 'Shown',
        },
      ],
      'kinematics-max-min-average-speed': [
        {
          id: 1,
          question: 'If v = t(t-1)(t-4) for 0 ≤ t ≤ 4, find:\nthe maximum speed',
          type: 'Hard',
          explaination:
            'dv/dt = 3t² - 10t + 4 = 0 ⇒ t = (10 ± √52)/6, so t ≈ 0.465 or t ≈ 2.869.\nv(0.465) ≈ 0.879 and v(2.869) ≈ -6.06; v = 0 at t = 0, 1 and 4.\nMaximum speed = |v(2.869)| ≈ 6.06 m s⁻¹',
          answer: 'Max speed ≈ 6.06 m s⁻¹',
        },
        {
          id: 2,
          question: 'If v = t(t-1)(t-4) for 0 ≤ t ≤ 4, find:\nthe minimum speed',
          type: 'Hard',
          explaination: 'Min |v| = 0 at t = 0, 1, 4.',
          answer: 'Min speed = 0 m s⁻¹',
        },
        {
          id: 3,
          question: 'If v = t(t-1)(t-4) for 0 ≤ t ≤ 4, find:\nthe average speed.',
          type: 'Hard',
          explaination:
            'v = t³ - 5t² + 4t, with v ≥ 0 on [0, 1] and v ≤ 0 on [1, 4].\n∫[0 to 1] v dt = 7/12 and ∫[1 to 4] v dt = -45/4\nTotal distance = 7/12 + 45/4 = 71/6\nAverage speed = (71/6)/4 = 71/24 ≈ 2.96 m s⁻¹',
          answer: 'Average speed = 71/24 ≈ 2.96 m s⁻¹',
        },
      ],
      'kinematics-two-particle-problem': [
        {
          id: 1,
          question:
            'In a race, Jane starts 42 m ahead of Aisla.\nJane has velocity given by t + 2. Aisla has velocity given by t². How long does it take Aisla to overtake Jane?',
          type: 'Hard',
          explaination:
            'Displacement of Jane: s_J = 42 + ∫[0 to t] (τ+2)dτ= 42 + t²/2 + 2t Displacement of Aisla: s_A = ∫[0 to t] τ² dτ= t³/3 Set equal: t³/3 = 42 + t²/2 + 2t\n2t³ - 3t² - 12t - 252 = 0 Solve (GDC or factor): t = 7.',
          answer: 't = 7 s',
        },
        {
          id: 2,
          question:
            "A juggler throws a ball vertically upward. The ball's speed is modelled by v = 5 - 10t.\nHalf a second later, the juggler throws a second ball vertically upward in exactly the same way from the same position. At what height above the release position do the two balls collide?",
          type: 'Hard',
          explaination:
            'Ball 1: s₁ = 5t - 5t². Ball 2 (thrown at t = 0.5): s₂ = 5(t - 0.5) - 5(t - 0.5)².\nSet s₁ = s₂: 5t - 5t² = 5t - 2.5 - 5t² + 5t - 1.25 ⇒ 5t = 3.75 ⇒ t = 0.75\nh = 5(0.75) - 5(0.75)² = 3.75 - 2.8125 = 15/16 = 0.9375 m',
          answer: 'h = 15/16 = 0.9375 m',
        },
      ],
    },
  },
  {
    'proof-algebra': {
      title: 'Proof / Algebra',
      'algebraic-proof-using-kinematics-context': [
        {
          id: 1,
          question:
            'By considering kinematic quantities, prove that if a, b, c, d are positive and a/b < c/d, then a/b < (a+c)/(b+d) < c/d.',
          type: 'Hard',
          explaination:
            'Let a/b = p and c/d = q, so p < q.\nThen a = pb, c = qd.\n(a+c)/(b+d) = (pb+qd)/(b+d).\nSince p < q: (pb+qd)/(b+d) > (pb+pd)/(b+d) = p = a/b. ✓\nSimilarly: (pb+qd)/(b+d) < (qb+qd)/(b+d) = q = c/d. ✓\nHence a/b < (a+c)/(b+d) < c/d.',
          answer: 'Proved',
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
//           explaination: 'Move decimal 4 places right: 3.2 × 10⁴ = 32,000',
//           answer: '32,000',
//         },
//         {
//           id: 2,
//           question: 'Write 6.92 × 10⁶ as a normal number.',
//           type: 'Easy',
//           explaination: 'Move decimal 6 places right: 6.92 × 10⁶ = 6,920,000',
//           answer: '6,920,000',
//         },
//         {
//           id: 3,
//           question: 'Write 4.8 × 10⁻² as a decimal.',
//           type: 'Easy',
//           explaination: 'Move decimal 2 places left: 4.8 × 10⁻² = 0.048',
//           answer: '0.048',
//         },
//         {
//           id: 4,
//           question: 'Write 9.85 × 10⁻⁴ as a decimal.',
//           type: 'Easy',
//           explaination: 'Move decimal 4 places left: 9.85 × 10⁻⁴ = 0.000985',
//           answer: '0.000985',
//         },
//       ],
//       'writing-in-standard-form': [
//         {
//           id: 1,
//           question: 'Write the value 612.07 in standard index form.',
//           type: 'Easy',
//           explaination:
//             'Identify leading digit; count places to move decimal: 612.07 = 6.1207 × 10²',
//           answer: '6.1207 × 10²',
//         },
//         {
//           id: 2,
//           question: 'Write the value 3076.91 in standard index form.',
//           type: 'Easy',
//           explaination: '3076.91 = 3.07691 × 10³',
//           answer: '3.07691 × 10³',
//         },
//         {
//           id: 3,
//           question: 'Write the value 0.0030617 in standard index form.',
//           type: 'Easy',
//           explaination: '0.0030617 = 3.0617 × 10⁻³',
//           answer: '3.0617 × 10⁻³',
//         },
//         {
//           id: 4,
//           question: 'Write the value 0.02219 in standard index form.',
//           type: 'Easy',
//           explaination: '0.02219 = 2.219 × 10⁻²',
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
//             'Multiply coefficients: 2 × 3.4 = 6.8\nAdd powers: 10⁴⁺³ = 10⁷\nResult: 6.8 × 10⁷',
//           answer: '6.8 × 10⁷',
//         },
//         {
//           id: 2,
//           question:
//             'Write (3.2 × 10⁵) × (3 × 10⁶) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination: '3.2 × 3 = 9.6; 10⁵⁺⁶=10¹¹\nResult: 9.6 × 10¹¹',
//           answer: '9.6 × 10¹¹',
//         },
//         {
//           id: 3,
//           question: 'Write (5 × 10⁴) × (2 × 10⁻⁵) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '5 × 2 = 10; 10⁴⁺⁽⁻⁵⁾=10⁻¹\n10 × 10⁻¹ = 1 × 10⁰ = 1',
//           answer: '1 × 10⁰ = 1',
//         },
//         {
//           id: 4,
//           question:
//             'Write (3 × 10⁻²) × (4 × 10⁻⁴) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '3 × 4 = 12; 10^(-2+(-4))=10⁻⁶\n12 × 10⁻⁶ = 1.2 × 10⁻⁵',
//           answer: '1.2 × 10⁻⁵',
//         },
//       ],
//       'squaring-in-standard-form': [
//         {
//           id: 1,
//           question: 'Write (5 × 10¹⁰)² in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '5² = 25; (10¹⁰)² = 10²⁰\n25 × 10²⁰ = 2.5 × 10²¹',
//           answer: '2.5 × 10²¹',
//         },
//         {
//           id: 2,
//           question: 'Write (6 × 10⁶)² in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '6² = 36; (10⁶)² = 10¹²\n36 × 10¹² = 3.6 × 10¹³',
//           answer: '3.6 × 10¹³',
//         },
//       ],
//       'dividing-in-standard-form': [
//         {
//           id: 1,
//           question: 'Write (6 × 10²)/(3 × 10⁴) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination: '6/3 = 2; 10²⁻⁴=10⁻²\nResult: 2 × 10⁻²',
//           answer: '2 × 10⁻²',
//         },
//         {
//           id: 2,
//           question: 'Write (8 × 10⁶)/(2 × 10¹⁰) in standard index form. Do not use a calculator.',
//           type: 'Easy',
//           explaination: '8/2=4; 10⁶⁻¹⁰=10⁻⁴\nResult: 4 × 10⁻⁴',
//           answer: '4 × 10⁻⁴',
//         },
//         {
//           id: 3,
//           question: 'Write (1 × 10⁵)/(2 × 10⁴) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '1/2=0.5; 10⁵⁻⁴=10¹\n0.5 × 10¹ = 5 × 10⁰ = 5',
//           answer: '5 × 10⁰ = 5',
//         },
//         {
//           id: 4,
//           question: 'Write (2 × 10⁵)/(8 × 10²) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '2/8=0.25; 10⁵⁻²=10³\n0.25 × 10³ = 2.5 × 10²',
//           answer: '2.5 × 10²',
//         },
//         {
//           id: 5,
//           question:
//             'Write (8.4 × 10¹⁴) ÷ (4 × 10³) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '8.4/4=2.1; 10¹⁴⁻³=10¹¹\nResult: 2.1 × 10¹¹',
//           answer: '2.1 × 10¹¹',
//         },
//         {
//           id: 6,
//           question:
//             'Write (9.3 × 10¹⁵) ÷ (3 × 10⁶) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '9.3/3=3.1; 10¹⁵⁻⁶=10⁹\nResult: 3.1 × 10⁹',
//           answer: '3.1 × 10⁹',
//         },
//       ],
//       'adding-subtracting-in-standard-form': [
//         {
//           id: 1,
//           question: 'Write 1 × 10⁴ + 2 × 10⁵ in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: 'Convert to same power: 0.1 × 10⁵ + 2 × 10⁵ = 2.1 × 10⁵',
//           answer: '2.1 × 10⁵',
//         },
//         {
//           id: 2,
//           question: 'Write 3 × 10⁸ + 2 × 10⁶ in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '300 × 10⁶ + 2 × 10⁶ = 302 × 10⁶ = 3.02 × 10⁸',
//           answer: '3.02 × 10⁸',
//         },
//         {
//           id: 3,
//           question: 'Write 8 × 10⁵ - 4 × 10⁴ in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '80 × 10⁴ - 4 × 10⁴ = 76 × 10⁴ = 7.6 × 10⁵',
//           answer: '7.6 × 10⁵',
//         },
//         {
//           id: 4,
//           question: 'Write 9 × 10¹⁴ - 9 × 10¹² in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '900 × 10¹² - 9 × 10¹² = 891 × 10¹² = 8.91 × 10¹⁴',
//           answer: '8.91 × 10¹⁴',
//         },
//         {
//           id: 5,
//           question:
//             'Write (2.1 × 10³) + (3.8 × 10⁴) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '0.21 × 10⁴ + 3.8 × 10⁴ = 4.01 × 10⁴',
//           answer: '4.01 × 10⁴',
//         },
//         {
//           id: 6,
//           question:
//             'Write (5.7 × 10¹³) + (4.3 × 10¹²) in standard index form. Do not use a calculator.',
//           type: 'Medium',
//           explaination: '57 × 10¹² + 4.3 × 10¹² = 61.3 × 10¹² = 6.13 × 10¹³',
//           answer: '6.13 × 10¹³',
//         },
//       ],
//       'proof-multiplication-in-standard-form': [
//         {
//           id: 1,
//           question: 'Show that if a = 4 × 10⁶ and b = 5 × 10⁻³, then a × b = 2 × 10⁴.',
//           type: 'Medium',
//           explaination: 'a × b = (4 × 10⁶) × (5 × 10⁻³)\n= 20 × 10³ = 2 × 10⁴',
//           answer: 'Shown: 20 × 10³ = 2 × 10⁴',
//         },
//         {
//           id: 2,
//           question: 'Show that if c = 1.4 × 10³ and d = 5 × 10⁸, then c × d = 7 × 10¹¹.',
//           type: 'Medium',
//           explaination: 'c × d = (1.4 × 10³) × (5 × 10⁸)\n= 7 × 10¹¹',
//           answer: 'Shown: 7 × 10¹¹',
//         },
//       ],
//       'standard-form-multi-part-application': [
//         {
//           id: 1,
//           question:
//             'Let p = 12.2 × 10⁷ and q = 3.05 × 10⁵.\na) Write p in the form a × 10ᵏ where 1 ≤ a < 10 and k ∈ ℤ.\nb) Evaluate p/q.\nc) Write your answer to part b in the form a × 10ᵏ where 1 ≤ a < 10 and k ∈ ℤ.',
//           type: 'Medium',
//           explaination:
//             'a) 12.2 × 10⁷ = 1.22 × 10⁸\nb) (12.2 × 10⁷)/(3.05 × 10⁵) = 12.2/3.05 × 10² = 4 × 10² = 400\nc) 4 × 10²',
//           answer: 'a) 1.22 × 10⁸\nb) 400\nc) 4 × 10²',
//         },
//         {
//           id: 2,
//           question:
//             'The area of Africa is approximately 3.04 × 10¹³ m². The area of Europe is approximately 1.02 × 10¹³ m². The population of Africa is approximately 1.2 billion and the population of Europe is 741 million.\na) How many times bigger is Africa than Europe?\nb) Write the population of Europe in the form a × 10ᵏ where 1 ≤ a < 10 and k ∈ ℤ.\nc) Does Africa or Europe have more people per metre squared? Justify your answer.',
//           type: 'Hard',
//           explaination:
//             'a) (3.04 × 10¹³)/(1.02 × 10¹³) = 3.04/1.02 ≈ 2.98\nb) 741 × 10⁶ = 7.41 × 10⁸\nc) Africa: (1.2 × 10⁹)/(3.04 × 10¹³) ≈ 3.95 × 10⁻⁵ per m²\nEurope: (7.41 × 10⁸)/(1.02 × 10¹³) ≈ 7.26 × 10⁻⁵ per m²\nEurope has more people per m².',
//           answer:
//             'a) Approximately 2.98 times bigger (≈ 3)\nb) 7.41 × 10⁸\nc) Europe has more people per m²',
//         },
//       ],
//       'standard-form-real-world-context': [
//         {
//           id: 1,
//           question:
//             'The number of atoms in a balloon is approximately 6 × 10²³. Theoretical physics predicts there are approximately 10⁸⁰ atoms in the known universe. What proportion of atoms in the known universe are found in the balloon?',
//           type: 'Hard',
//           explaination: 'Proportion = (6 × 10²³)/10⁸⁰ = 6 × 10²³⁻⁸⁰ = 6 × 10⁻⁵⁷',
//           answer: '6 × 10⁻⁵⁷',
//         },
//         {
//           id: 2,
//           question:
//             '12 grams of carbon contains 6.02 × 10²³ atoms. What is the mass (in grams) of one atom of carbon? Give your answer in the form a × 10ᵏ where 1 ≤ a < 10 and k ∈ ℤ.',
//           type: 'Hard',
//           explaination: 'mass per atom = 12/(6.02 × 10²³) = 12/6.02 × 10⁻²³ ≈ 1.993 × 10⁻²³ g',
//           answer: '1.99 × 10⁻²³ g',
//         },
//         {
//           id: 3,
//           question:
//             'The diameter of a uranium nucleus is approximately 15 fm, where 1 fm = 10⁻¹⁵ m.\na) Write the diameter (in metres) in the form a × 10ᵏ where 1 ≤ a < 10 and k ∈ ℤ.\nThe nucleus is modelled as a sphere with volume V = (1/6)π d³ where d is the diameter.\nb) Estimate the volume of a uranium nucleus in metres cubed.',
//           type: 'Hard',
//           explaination:
//             'a) 15 × 10⁻¹⁵ = 1.5 × 10⁻¹⁴ m\nb) d = 1.5 × 10⁻¹⁴\nd³ = (1.5)³ × 10⁻⁴² = 3.375 × 10⁻⁴²\nV = π/6 × 3.375 × 10⁻⁴² ≈ 1.77 × 10⁻⁴² m³',
//           answer: 'a) 1.5 × 10⁻¹⁴ m\nb) V ≈ 1.77 × 10⁻⁴² m³',
//         },
//       ],
//       'generalising-standard-form-algebra': [
//         {
//           id: 1,
//           question:
//             'You are given that (3 × 10ᵃ) × (5 × 10ᵇ) = c × 10ᵈ, where 1 ≤ c < 10 and d ∈ ℤ.\na) Find the value of c.\nb) Find an expression for d in terms of a and b.',
//           type: 'Hard',
//           explaination: '3 × 5 = 15; 10ᵃ⁺ᵇ\n15 × 10ᵃ⁺ᵇ = 1.5 × 10ᵃ⁺ᵇ⁺¹\na) c = 1.5\nb) d = a+b+1',
//           answer: 'a) c = 1.5\nb) d = a + b + 1',
//         },
//         {
//           id: 2,
//           question:
//             'You are given that (2 × 10ᵃ) ÷ (5 × 10ᵇ) = c × 10ᵈ, where 1 ≤ c < 10 and d ∈ ℤ.\na) Find the value of c.\nb) Find an expression for d in terms of a and b.',
//           type: 'Hard',
//           explaination: '2/5 = 0.4; 10ᵃ⁻ᵇ\n0.4 × 10ᵃ⁻ᵇ = 4 × 10ᵃ⁻ᵇ⁻¹\na) c = 4\nb) d = a-b-1',
//           answer: 'a) c = 4\nb) d = a - b - 1',
//         },
//         {
//           id: 3,
//           question:
//             'x = a × 10ᵖ and y = b × 10^q where 4 < a < b < 9. When written in standard form, xy = c × 10ʳ. Express r in terms of p and q.',
//           type: 'Hard',
//           explaination:
//             'xy = ab × 10^(p+q)\nSince 4 < a < b < 9, we have 16 < ab < 81, so 10 ≤ ab < 100.\nTherefore ab has two digits, and we write ab = ab/10 × 10, giving xy = ab/10 × 10^(p+q+1).\nSince 1 < ab/10 < 10, it is in standard form, so r = p + q + 1.',
//           answer: 'r = p + q + 1',
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
//           explaination: 'Use uₙ = u₁ + (n-1)d. u₁₂ = 5 + 11 × 4 = 5 + 44 = 49',
//           answer: 'u₁₂ = 49',
//         },
//         {
//           id: 2,
//           question: 'Given u₁ = 11 and d = 3, find u₂₀.',
//           type: 'Easy',
//           explaination: 'u₂₀ = 11 + 19 × 3 = 11 + 57 = 68',
//           answer: 'u₂₀ = 68',
//         },
//         {
//           id: 3,
//           question: 'Given u₁ = 13 and d = -7, find u₆.',
//           type: 'Easy',
//           explaination: 'u₆ = 13 + 5 × (-7) = 13 - 35 = -22',
//           answer: 'u₆ = -22',
//         },
//         {
//           id: 4,
//           question: 'Given u₁ = 11 and d = -3, find u₁₈.',
//           type: 'Easy',
//           explaination: 'u₁₈ = 11 + 17 × (-3) = 11 - 51 = -40',
//           answer: 'u₁₈ = -40',
//         },
//         {
//           id: 5,
//           question:
//             'An arithmetic sequence has first term 7 and common difference 11. Find the 20th term of the sequence.',
//           type: 'Easy',
//           explaination: 'u₂₀ = 7 + 19 × 11 = 7 + 209 = 216',
//           answer: 'u₂₀ = 216',
//         },
//         {
//           id: 6,
//           question:
//             'The first term of an arithmetic sequence is 3 and the second term is 7. Find the eighth term of the sequence.',
//           type: 'Easy',
//           explaination: 'd=4. u₈ = 3 + 7 × 4 = 31',
//           answer: 'u₈ = 31',
//         },
//         {
//           id: 7,
//           question:
//             'In an arithmetic sequence the second term is 13 and the common difference is 5. Write down the first term.',
//           type: 'Easy',
//           explaination: 'u₁ = u₂ - d = 13 - 5 = 8',
//           answer: 'u₁ = 8',
//         },
//         {
//           id: 8,
//           question:
//             'The first term of an arithmetic sequence is -8 and the common difference is 5. Find the 25th term.',
//           type: 'Easy',
//           explaination: 'u₂₅ = -8 + 24 × 5 = -8 + 120 = 112',
//           answer: 'u₂₅ = 112',
//         },
//         {
//           id: 9,
//           question: 'An arithmetic sequence has u₁₀ = 16 and u₃₀ = 156. Find u₅₀.',
//           type: 'Hard',
//           explaination: '20d = 156-16 = 140 ⇒ d=7. u₁ = 16 - 9(7) = -47. u₅₀ = -47+49(7) = 296',
//           answer: 'u₅₀ = 296',
//         },
//       ],
//       'finding-common-difference': [
//         {
//           id: 1,
//           question: 'Given u₁ = 7 and u₅ = 15, find the common difference d.',
//           type: 'Easy',
//           explaination: 'u₅ = u₁ + 4d ⇒ 15 = 7 + 4d ⇒ 4d = 8 ⇒ d = 2',
//           answer: 'd = 2',
//         },
//         {
//           id: 2,
//           question: 'Given u₁ = 19 and u₉ = 75, find the common difference d.',
//           type: 'Easy',
//           explaination: 'u₉ = u₁ + 8d ⇒ 75 = 19 + 8d ⇒ 8d = 56 ⇒ d = 7',
//           answer: 'd = 7',
//         },
//         {
//           id: 3,
//           question: 'Given u₁ = 10 and u₂₁ = 0, find the common difference d.',
//           type: 'Easy',
//           explaination: 'u₂₁ = u₁ + 20d ⇒ 0 = 10 + 20d ⇒ d = -1/2',
//           answer: 'd = -0.5',
//         },
//         {
//           id: 4,
//           question: 'Given u₁ = 100 and u₉ = 80, find the common difference d.',
//           type: 'Easy',
//           explaination: 'u₉ = u₁ + 8d ⇒ 80 = 100 + 8d ⇒ 8d = -20 ⇒ d = -2.5',
//           answer: 'd = -2.5',
//         },
//         {
//           id: 5,
//           question:
//             'The first term of an arithmetic sequence is 3 and the second term is 7. Write down the common difference.',
//           type: 'Easy',
//           explaination: 'd = u₂ - u₁ = 7 - 3 = 4',
//           answer: 'd = 4',
//         },
//         {
//           id: 6,
//           question:
//             'The first term of an arithmetic sequence is -8 and the 16th term is 67. Find the common difference.',
//           type: 'Easy',
//           explaination: 'u₁₆ = -8 + 15d = 67 ⇒ 15d = 75 ⇒ d = 5',
//           answer: 'd = 5',
//         },
//       ],
//       'finding-first-term-and-common-difference': [
//         {
//           id: 1,
//           question: 'Given u₈ = 12 and u₁₁ = 33, find u₁ and d.',
//           type: 'Medium',
//           explaination: 'u₁₁ - u₈ = 3d = 21 ⇒ d = 7. u₁ = u₈ - 7d = 12 - 49 = -37',
//           answer: 'd = 7, u₁ = -37',
//         },
//         {
//           id: 2,
//           question: 'Given u₇ = 11 and u₁₂ = 56, find u₁ and d.',
//           type: 'Medium',
//           explaination: 'u₁₂ - u₇ = 5d = 45 ⇒ d = 9. u₁ = 11 - 6 × 9 = -43',
//           answer: 'd = 9, u₁ = -43',
//         },
//         {
//           id: 3,
//           question:
//             'The 7th term of an arithmetic sequence is 35 and the 18th term is 112. Find the common difference and the first term of the sequence.',
//           type: 'Medium',
//           explaination: '11d = 112 - 35 = 77 ⇒ d = 7. u₁ = 35 - 6 × 7 = -7',
//           answer: 'd = 7, u₁ = -7',
//         },
//       ],
//       'formula-for-nth-term': [
//         {
//           id: 1,
//           question:
//             'Given u₁ = 8 and d = -3, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination: 'uₙ = 8 + (n-1)(-3) = 8 - 3n + 3 = 11 - 3n',
//           answer: 'uₙ = 11 - 3n',
//         },
//         {
//           id: 2,
//           question:
//             'Given u₁ = 10 and d = 4, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Easy',
//           explaination: 'uₙ = 10 + (n-1)(4) = 10 + 4n - 4 = 4n + 6',
//           answer: 'uₙ = 4n + 6',
//         },
//         {
//           id: 3,
//           question:
//             'Given u₁ = 3 and u₅ = 11, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination: 'u₅ = 3 + 4d = 11 ⇒ d = 2. uₙ = 3 + (n-1)(2) = 2n + 1',
//           answer: 'uₙ = 2n + 1',
//         },
//         {
//           id: 4,
//           question:
//             'Given u₁ = 10 and u₁₁ = 50, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination: 'u₁₁ = 10 + 10d = 50 ⇒ d = 4. uₙ = 10 + (n-1)(4) = 4n + 6',
//           answer: 'uₙ = 4n + 6',
//         },
//         {
//           id: 5,
//           question:
//             'Given u₂ = 6 and u₅ = 21, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Medium',
//           explaination: '3d = 21 - 6 = 15 ⇒ d = 5. u₁ = 6 - 5 = 1. uₙ = 1 + (n-1)(5) = 5n - 4',
//           answer: 'uₙ = 5n - 4',
//         },
//         {
//           id: 6,
//           question:
//             'Given u₃ = 14 and u₆ = -15, find a formula for the nth term of the arithmetic sequence.',
//           type: 'Hard',
//           explaination:
//             '3d = -15 - 14 = -29 ⇒ d = -29/3. u₁ = 14 - 2d = 100/3. uₙ = 100/3 + (n-1)(-29/3) = (129-29n)/3',
//           answer: 'uₙ = (129 - 29n)/3',
//         },
//       ],
//       'arithmetic-series-sum': [
//         {
//           id: 1,
//           question: 'Given u₁ = 9 and d = 4, find S₁₂.',
//           type: 'Easy',
//           explaination: 'S₁₂ = (12/2)(2 × 9 + 11 × 4) = 6(18 + 44) = 6 × 62 = 372',
//           answer: 'S₁₂ = 372',
//         },
//         {
//           id: 2,
//           question: 'Given u₁ = 17 and d = 2, find S₂₀.',
//           type: 'Easy',
//           explaination: 'S₂₀ = (20/2)(2 × 17 + 19 × 2) = 10(34 + 38) = 720',
//           answer: 'S₂₀ = 720',
//         },
//         {
//           id: 3,
//           question: 'Given u₁ = 34 and d = -7, find S₁₁.',
//           type: 'Medium',
//           explaination: 'S₁₁ = (11/2)(2 × 34 + 10 × (-7)) = (11/2)(68 - 70) = (11/2)(-2) = -11',
//           answer: 'S₁₁ = -11',
//         },
//         {
//           id: 4,
//           question: 'Given u₁ = 9 and d = -11, find S₈.',
//           type: 'Medium',
//           explaination: 'S₈ = (8/2)(2 × 9 + 7 × (-11)) = 4(18 - 77) = 4 × (-59) = -236',
//           answer: 'S₈ = -236',
//         },
//         {
//           id: 5,
//           question: 'Given u₁ = 7 and u₆ = 32, find S₁₁.',
//           type: 'Medium',
//           explaination: 'd = (32-7)/5 = 5. S₁₁ = (11/2)(2 × 7 + 10 × 5) = (11/2)(64) = 352',
//           answer: 'S₁₁ = 352',
//         },
//         {
//           id: 6,
//           question: 'Given u₁ = 9 and u₅ = 41, find S₁₂.',
//           type: 'Medium',
//           explaination: 'd = (41-9)/4 = 8. S₁₂ = (12/2)(2 × 9 + 11 × 8) = 6(106) = 636',
//           answer: 'S₁₂ = 636',
//         },
//         {
//           id: 7,
//           question: 'Given u₁ = 9 and u₈ = 37, find S₈.',
//           type: 'Medium',
//           explaination: 'Use Sₙ = (n/2)(u₁ + uₙ). S₈ = (8/2)(9+37) = 4 × 46 = 184',
//           answer: 'S₈ = 184',
//         },
//         {
//           id: 8,
//           question: 'Given u₁ = 4 and u₁₂ = 61, find S₁₂.',
//           type: 'Medium',
//           explaination: 'S₁₂ = (12/2)(4+61) = 6 × 65 = 390',
//           answer: 'S₁₂ = 390',
//         },
//         {
//           id: 9,
//           question: 'Given u₁ = 27 and u₁₀ = -36, find S₁₀.',
//           type: 'Medium',
//           explaination: 'S₁₀ = (10/2)(27 + (-36)) = 5(-9) = -45',
//           answer: 'S₁₀ = -45',
//         },
//         {
//           id: 10,
//           question: 'Given u₁ = 50 and u₂₀₀ = -50, find S₂₀₀.',
//           type: 'Medium',
//           explaination: 'S₂₀₀ = (200/2)(50 + (-50)) = 100 × 0 = 0',
//           answer: 'S₂₀₀ = 0',
//         },
//         {
//           id: 11,
//           question:
//             'An arithmetic sequence has first term 7 and common difference 11. Find the sum of the first 20 terms.',
//           type: 'Easy',
//           explaination: 'S₂₀ = (20/2)(7 + 216) = 10 × 223 = 2230',
//           answer: 'S₂₀ = 2230',
//         },
//         {
//           id: 12,
//           question:
//             'The first term of an arithmetic sequence is 3 and the second term is 7. Find the sum of the first 15 terms.',
//           type: 'Easy',
//           explaination: 'S₁₅ = (15/2)(2 × 3 + 14 × 4) = (15/2)(62) = 465',
//           answer: 'S₁₅ = 465',
//         },
//         {
//           id: 13,
//           question:
//             'In an arithmetic sequence u₂ = 13 and d = 5. Find the sum of the first 10 terms.',
//           type: 'Easy',
//           explaination: 'u₁=8. S₁₀ = (10/2)(2 × 8 + 9 × 5) = 5(61) = 305',
//           answer: 'S₁₀ = 305',
//         },
//         {
//           id: 14,
//           question:
//             'An arithmetic sequence has first term 11 and last term 75. Given the common difference is 8, find the sum of the terms.',
//           type: 'Medium',
//           explaination: 'n = (75-11)/8+1 = 9. S = (9/2)(11+75) = (9/2)(86) = 387',
//           answer: 'S = 387',
//         },
//         {
//           id: 15,
//           question:
//             'An arithmetic sequence has first term 11 and last term 75. Given the common difference is 4, find the sum of the terms.',
//           type: 'Medium',
//           explaination: 'n = (75-11)/4+1 = 17. S = (17/2)(11+75) = (17/2)(86) = 731',
//           answer: 'S = 731',
//         },
//         {
//           id: 16,
//           question:
//             'An arithmetic sequence has first term 8, common difference 3, and last term 68. Find the sum of all the terms.',
//           type: 'Medium',
//           explaination: 'n=21. S₂₁ = (21/2)(8+68) = (21/2)(76) = 798',
//           answer: 'S = 798',
//         },
//         {
//           id: 17,
//           question:
//             'The 7th term of an arithmetic sequence is 35 and the 18th term is 112. Find the sum of the first 18 terms.',
//           type: 'Medium',
//           explaination: 'u₁=-7, d=7. S₁₈ = (18/2)(2(-7)+17 × 7) = 9(-14+119) = 9 × 105 = 945',
//           answer: 'S₁₈ = 945',
//         },
//         {
//           id: 18,
//           question: 'An arithmetic sequence has u₁₀ = 16 and u₃₀ = 156. Find Σ[r=1 to 20] uᵣ.',
//           type: 'Hard',
//           explaination: 'u₁=-47, d=7. S₂₀ = (20/2)(2(-47)+19(7)) = 10(-94+133) = 10(39) = 390',
//           answer: 'Σ[r=1 to 20] uᵣ = 390',
//         },
//         {
//           id: 19,
//           question: 'A sequence is defined by uₙ₊₁ = uₙ + 4. If u₁ = 10, find Σ[r=1 to 20] uᵣ.',
//           type: 'Medium',
//           explaination: 'Arithmetic, d=4, u₁=10. u₂₀=10+19(4)=86. S₂₀=(20/2)(10+86)=10(96)=960',
//           answer: '960',
//         },
//         {
//           id: 20,
//           question:
//             'The arithmetic sequence U has first term 7, common difference 12 and last term 139. Find the sum of terms in U.',
//           type: 'Hard',
//           explaination: 'n = (139-7)/12+1=12. S=(12/2)(7+139)=6(146)=876',
//           answer: 'S_U = 876',
//         },
//         {
//           id: 21,
//           question:
//             'The arithmetic sequence V has the same first and last terms as sequence U (first term 7, last term 139) but has common difference 6. Find the sum of terms in V.',
//           type: 'Hard',
//           explaination: 'n = (139-7)/6+1=23. S=(23/2)(7+139)=(23/2)(146)=1679',
//           answer: 'S_V = 1679',
//         },
//         {
//           id: 22,
//           question:
//             'The arithmetic sequence W has the same first term and common difference as sequence V, and the same number of terms as sequence U. Find the sum of terms in W.',
//           type: 'Hard',
//           explaination: 'u₁=7, d=6, n=12. u₁₂=7+11(6)=73. S=(12/2)(7+73)=6(80)=480',
//           answer: 'S_W = 480',
//         },
//       ],
//       'sigma-notation': [
//         {
//           id: 1,
//           question: 'Evaluate Σ[r=1 to 8] 4.',
//           type: 'Easy',
//           explaination: 'Constant sum: 8 × 4 = 32',
//           answer: '32',
//         },
//         {
//           id: 2,
//           question: 'Evaluate Σ[r=1 to 11] 9.',
//           type: 'Easy',
//           explaination: '11 × 9 = 99',
//           answer: '99',
//         },
//         {
//           id: 3,
//           question: 'Evaluate Σ[r=1 to 7] (2r + 7).',
//           type: 'Easy',
//           explaination: 'r=1: 9, r=7: 21. S = (7/2)(9+21) = (7/2)(30) = 105',
//           answer: '105',
//         },
//         {
//           id: 4,
//           question: 'Evaluate Σ[r=1 to 10] (3r + 4).',
//           type: 'Easy',
//           explaination: 'r=1: 7, r=10: 34. S = (10/2)(7+34) = 5 × 41 = 205',
//           answer: '205',
//         },
//         {
//           id: 5,
//           question: 'Evaluate Σ[r=5 to 17] (6r - 4).',
//           type: 'Medium',
//           explaination:
//             'r=5: 26, r=17: 98. Number of terms = 17-5+1=13. S = (13/2)(26+98) = (13/2)(124) = 806',
//           answer: '806',
//         },
//         {
//           id: 6,
//           question: 'Evaluate Σ[r=3 to 8] (12r - 7).',
//           type: 'Medium',
//           explaination: 'r=3: 29, r=8: 89. Number of terms = 6. S = (6/2)(29+89) = 3 × 118 = 354',
//           answer: '354',
//         },
//         {
//           id: 7,
//           question: 'Find Σ[r=1 to 16] (5r - 3).',
//           type: 'Medium',
//           explaination: 'r=1: 2, r=16: 77. S = (16/2)(2+77) = 8 × 79 = 632',
//           answer: '632',
//         },
//         {
//           id: 8,
//           question: 'What is the sum of all three-digit multiples of 7?',
//           type: 'Hard',
//           explaination:
//             'First: 105, Last: 994. n=(994-105)/7+1=128. S=(128/2)(105+994)=64(1099)=70336',
//           answer: '70336',
//         },
//         {
//           id: 9,
//           question:
//             'What is the sum of all whole numbers from 0 up to (and including) 100 which are multiples of 5 but not multiples of 3?',
//           type: 'Hard',
//           explaination:
//             'Multiples of 5 from 5 to 100: 20 terms, sum = (20/2)(5+100)=1050. Multiples of 15 from 15 to 90: 6 terms, sum = (6/2)(15+90)=315. Answer = 1050-315=735',
//           answer: '735',
//         },
//       ],
//       'mixed-problem-solving': [
//         {
//           id: 1,
//           question:
//             'In an arithmetic sequence the 10th term is 26 and the 30th term is 83. Find the 50th term.',
//           type: 'Hard',
//           explaination: '20d = 83 - 26 = 57 ⇒ d = 2.85. u₅₀ = u₃₀ + 20d = 83 + 57 = 140',
//           answer: 'u₅₀ = 140',
//         },
//         {
//           id: 2,
//           question:
//             'Three consecutive terms of an arithmetic sequence are 3x + 1, 2x + 1, 4x - 5. Find the value of x.',
//           type: 'Medium',
//           explaination: 'Equal differences: (2x+1)-(3x+1) = (4x-5)-(2x+1) ⇒ -x = 2x-6 ⇒ x = 2',
//           answer: 'x = 2',
//         },
//         {
//           id: 3,
//           question:
//             'The fifth term of an arithmetic sequence is double the second term, and the seventh term of the sequence is 28. Find the 11th term.',
//           type: 'Hard',
//           explaination:
//             'u₅ = 2u₂ ⇒ u₁+4d = 2(u₁+d) ⇒ 2d = u₁. u₇ = u₁+6d = 2d+6d = 8d = 28 ⇒ d=3.5. u₁=7. u₁₁ = 7+10(3.5) = 42',
//           answer: 'u₁₁ = 42',
//         },
//         {
//           id: 4,
//           question:
//             'The sum of the first three terms of an arithmetic sequence equals the tenth term, and the seventh term of the sequence is 27. Find the 12th term.',
//           type: 'Hard',
//           explaination: 'S₃ = u₁₀ ⇒ 3u₁+3d = u₁+9d ⇒ u₁=3d. u₇=9d=27 ⇒ d=3, u₁=9. u₁₂=9+11(3)=42',
//           answer: 'u₁₂ = 42',
//         },
//         {
//           id: 5,
//           question:
//             'The first three terms of an arithmetic sequence are 1, a, 3a + 5. Evaluate the fourth term of the sequence.',
//           type: 'Medium',
//           explaination:
//             'Equal differences: a-1 = (3a+5)-a ⇒ a-1=2a+5 ⇒ a=-6. d=a-1=-7. u₄=(3(-6)+5)+(-7)=-13-7=-20',
//           answer: 'u₄ = -20',
//         },
//         {
//           id: 6,
//           question:
//             'The ninth term of an arithmetic sequence is four times as large as the third term. Find the value of the first term.',
//           type: 'Hard',
//           explaination: 'u₉ = 4u₃ ⇒ u₁+8d = 4(u₁+2d) = 4u₁+8d ⇒ 0=3u₁ ⇒ u₁=0',
//           answer: 'u₁ = 0',
//         },
//         {
//           id: 7,
//           question:
//             'The first four terms of an arithmetic sequence are 4, a, b, a - b. Find the sixth term.',
//           type: 'Hard',
//           explaination:
//             'Equal differences: a-4=b-a=(a-b)-b. From a-4=b-a: b=2a-4. From b-a=(a-b)-b: a-4=4-a-a+4=8-3a ⇒ 4a=12 ⇒ a=3, b=2, d=-1. u₆=4+5(-1)=-1',
//           answer: 'u₆ = -1',
//         },
//         {
//           id: 8,
//           question:
//             'Alessia writes down a list of the first n positive integers in order. Show that by the time she has written down the number 19, she has written down 29 digits.',
//           type: 'Hard',
//           explaination:
//             'Digits from 1–9 (single digit): 9 × 1 = 9. Digits from 10–19 (two digits): 10 × 2 = 20. Total = 9+20 = 29 digits.',
//           answer: '29 digits (shown)',
//         },
//         {
//           id: 9,
//           question:
//             'Alessia writes down a list of the first n positive integers in order. Her final list contains a total of 342 digits. What was the largest number in her list?',
//           type: 'Hard',
//           explaination:
//             '1–9: 9 digits. 10–99: 180 digits. Running total: 189. Remaining: 342-189=153 digits ÷ 3 = 51 three-digit numbers. Largest = 100+51-1=150',
//           answer: '150',
//         },
//       ],
//       'sum-formula-given-sn': [
//         {
//           id: 1,
//           question:
//             'The sum of the first n terms of an arithmetic sequence is Sₙ = 2n² + n. Find the first two terms of the sequence.',
//           type: 'Hard',
//           explaination: 'u₁ = S₁ = 2(1)²+1 = 3. u₂ = S₂ - S₁ = (2(4)+2)-3 = 10-3 = 7',
//           answer: 'u₁ = 3, u₂ = 7',
//         },
//         {
//           id: 2,
//           question:
//             'The sum of the first n terms of an arithmetic sequence is Sₙ = 2n² + n. Hence find the 50th term.',
//           type: 'Hard',
//           explaination: 'uₙ = Sₙ - Sₙ₋₁ = (2n²+n)-(2(n-1)²+(n-1)) = 4n-1. u₅₀=4(50)-1=199',
//           answer: 'u₅₀ = 199',
//         },
//         {
//           id: 3,
//           question:
//             'The sum of the first n terms of a sequence is given by Sₙ = n² + 4n. Find an expression for the nth term of the sequence.',
//           type: 'Hard',
//           explaination:
//             'uₙ = Sₙ - Sₙ₋₁ = (n²+4n)-((n-1)²+4(n-1)) = 2n+3 for n ≥ 2. Check: u₁=S₁=5=2(1)+3',
//           answer: 'uₙ = 2n + 3',
//         },
//       ],
//       'sum-to-infinity-of-a-geometric-series': [
//         {
//           id: 1,
//           question: 'Find the sum of the infinite geometric series:\n1/4+1/16+1/64+...',
//           type: 'Easy',
//           explaination: 'Identify a=1/4, r=1/4.\nUse S∞=a/(1-r)=(1/4)/(1-1/4)=(1/4)/(3/4)=1/3.',
//           answer: 'S∞ = 1/3',
//         },
//         {
//           id: 2,
//           question: 'Find the sum of the infinite geometric series:\n1/2+1/4+1/8+...',
//           type: 'Easy',
//           explaination: 'a=1/2, r=1/2.\nS∞=(1/2)/(1-1/2)=(1/2)/(1/2)=1.',
//           answer: 'S∞ = 1',
//         },
//         {
//           id: 3,
//           question: 'Find the sum of the infinite geometric series:\n1/3+2/9+4/27+...',
//           type: 'Easy',
//           explaination: 'a=1/3, r=2/3.\nS∞=(1/3)/(1-2/3)=(1/3)/(1/3)=1.',
//           answer: 'S∞ = 1',
//         },
//         {
//           id: 4,
//           question: 'Find the sum of the infinite geometric series:\n1/3+2/15+4/75+...',
//           type: 'Medium',
//           explaination: 'a=1/3, r=(2/15)/(1/3)=2/5.\nS∞=(1/3)/(1-2/5)=(1/3)/(3/5)=5/9.',
//           answer: 'S∞ = 5/9',
//         },
//         {
//           id: 5,
//           question: 'Find the sum of the infinite geometric series:\n4+1+1/4+...',
//           type: 'Easy',
//           explaination: 'a=4, r=1/4.\nS∞=4/(1-1/4)=4/(3/4)=16/3.',
//           answer: 'S∞ = 16/3',
//         },
//         {
//           id: 6,
//           question: 'Find the sum of the infinite geometric series:\n6+2+2/3+...',
//           type: 'Easy',
//           explaination: 'a=6, r=1/3.\nS∞=6/(1-1/3)=6/(2/3)=9.',
//           answer: 'S∞ = 9',
//         },
//         {
//           id: 7,
//           question: 'Find the sum of the infinite geometric series:\n1/2-1/4+1/8-1/16+...',
//           type: 'Easy',
//           explaination: 'a=1/2, r=-1/2.\nS∞=(1/2)/(1+1/2)=(1/2)/(3/2)=1/3.',
//           answer: 'S∞ = 1/3',
//         },
//         {
//           id: 8,
//           question: 'Find the sum of the infinite geometric series:\n1/3-1/9+1/27-1/81+...',
//           type: 'Easy',
//           explaination: 'a=1/3, r=-1/3.\nS∞=(1/3)/(1+1/3)=(1/3)/(4/3)=1/4.',
//           answer: 'S∞ = 1/4',
//         },
//         {
//           id: 9,
//           question: 'Find the sum of the infinite geometric series:\n15-9+27/5-81/25+...',
//           type: 'Medium',
//           explaination: 'a=15, r=-9/15=-3/5.\nS∞=15/(1+3/5)=15/(8/5)=75/8.',
//           answer: 'S∞ = 75/8',
//         },
//         {
//           id: 10,
//           question: 'Find the sum of the infinite geometric series:\n16-12+9-27/4+...',
//           type: 'Medium',
//           explaination: 'a=16, r=-3/4.\nS∞=16/(1+3/4)=16/(7/4)=64/7.',
//           answer: 'S∞ = 64/7',
//         },
//         {
//           id: 11,
//           question:
//             'A geometric series has first term 3 and common ratio 1/4. Find the sum to infinity of the series.',
//           type: 'Easy',
//           explaination: 'S∞=a/(1-r)=3/(1-1/4)=3/(3/4)=4.',
//           answer: 'S∞ = 4',
//         },
//         {
//           id: 12,
//           question:
//             'Find the sum to infinity of the geometric series with first term 5 and common ratio -1/4.',
//           type: 'Easy',
//           explaination: 'S∞=5/(1-(-1/4))=5/(5/4)=4.',
//           answer: 'S∞ = 4',
//         },
//         {
//           id: 13,
//           question: 'Find the sum to infinity of the series:\n2-2/3+2/9-2/27+...',
//           type: 'Easy',
//           explaination: 'a=2, r=-1/3.\nS∞=2/(1+1/3)=2/(4/3)=3/2.',
//           answer: 'S∞ = 3/2',
//         },
//         {
//           id: 14,
//           question:
//             'An infinite geometric series has first term 8 and its sum to infinity is 6. Find the common ratio of the series.',
//           type: 'Medium',
//           explaination: '8/(1-r)=6 ⇒ 1-r=8/6=4/3 ⇒ r=-1/3.',
//           answer: 'r = -1/3',
//         },
//         {
//           id: 15,
//           question:
//             'The first term of a geometric series is 3. Given that the sum to infinity of the series is 4, find the value of the common ratio.',
//           type: 'Medium',
//           explaination: '3/(1-r)=4 ⇒ 3=4(1-r) ⇒ 1-r=3/4 ⇒ r=1/4.',
//           answer: 'r = 1/4',
//         },
//         {
//           id: 16,
//           question:
//             'The sum to infinity of a geometric series is 3 and the common ratio is 1/3. Find the first three terms of the series.',
//           type: 'Medium',
//           explaination: 'a/(1-1/3)=3 ⇒ a/(2/3)=3 ⇒ a=2.\nTerms: 2, 2/3, 2/9.',
//           answer: '2, 2/3, 2/9',
//         },
//         {
//           id: 17,
//           question:
//             'The second term of a geometric series is 2 and the sum to infinity is 9. Find two possible values of the common ratio.',
//           type: 'Hard',
//           explaination:
//             'Let first term = a, ratio = r.\nSecond term: ar = 2 ⇒ a = 2/r.\nSum to infinity: a/(1-r)=9 ⇒ 2/(r(1-r))=9.\n⇒ 2=9r(1-r) ⇒ 9r²-9r+2=0.\nFactorise: (3r-1)(3r-2)=0 ⇒ r=1/3 or r=2/3.\nBoth satisfy |r|<1 so both are valid.\nCheck: r=1/3 ⇒ a=6, S∞=9;\\ r=2/3 ⇒ a=3, S∞=9.',
//           answer: 'r = 1/3 or r = 2/3',
//         },
//         {
//           id: 18,
//           question:
//             'A geometric series is given by Σ[r=0 to ∞] (2/5)ʳ.\nWrite down the first three terms of the series.',
//           type: 'Easy',
//           explaination: 'Substitute r=0,1,2 into (2/5)ʳ:\nr=0: 1; r=1: 2/5; r=2: 4/25.',
//           answer: '1, 2/5, 4/25',
//         },
//         {
//           id: 19,
//           question:
//             'A geometric series is given by Σ[r=0 to ∞] (2/5)ʳ.\nFind the sum of the series.',
//           type: 'Easy',
//           explaination: 'a=1, r=2/5.\nS∞=1/(1-2/5)=1/(3/5)=5/3.',
//           answer: 'S∞ = 5/3',
//         },
//         {
//           id: 20,
//           question: 'Evaluate Σ[r=0 to ∞] 2/3ʳ.',
//           type: 'Easy',
//           explaination: 'Rewrite: Σ[r=0 to ∞] 2·(1/3)ʳ.\nSo a=2, r=1/3.\nS∞=2/(1-1/3)=2/(2/3)=3.',
//           answer: 'S∞ = 3',
//         },
//         {
//           id: 21,
//           question:
//             'For the geometric series 3-x/3+x²/27-x³/243+...,\nFind the sum of the series when x=-2.',
//           type: 'Hard',
//           explaination: 'When x=-2: r=-(-2)/9=2/9.\nS∞=3/(1-2/9)=3/(7/9)=27/7.',
//           answer: 'S∞ = 27/7',
//         },
//         {
//           id: 22,
//           question:
//             'A geometric series is given by 5+5(x-3)+5(x-3)²+...\nFind the expression, in terms of x, for the sum of the series.',
//           type: 'Medium',
//           explaination: 'a=5, r=(x-3).\nS∞=5/(1-(x-3))=5/(4-x).',
//           answer: 'S∞ = 5/(4-x)',
//         },
//         {
//           id: 23,
//           question:
//             'For the geometric series 2+4x+8x²+...\nFind the expression, in terms of x, for the sum to infinity of the series.',
//           type: 'Hard',
//           explaination: 'a=2, r=2x.\nS∞=2/(1-2x), valid for |x|<1/2.',
//           answer: 'S∞ = 2/(1-2x)',
//         },
//         {
//           id: 24,
//           question:
//             'The second term of a geometric series is -6/5 and the sum to infinity is 5. Find the first term of the series.',
//           type: 'Hard',
//           explaination:
//             'Let first term =a, ratio =r.\nSecond term: ar=-6/5.\nSum to infinity: a/(1-r)=5 ⇒ a=5(1-r).\nSubstitute: 5(1-r)· r=-6/5.\n25r(1-r)=-6 ⇒ 25r²-25r-6=0.\nWait — rearranging: 25r-25r²=-6 ⇒ 25r²-25r-6=0... discriminant =625+600=1225.\nr=(25±35)/50: r=60/50=6/5 (rejected, |r|>1) or r=-10/50=-1/5.\na=5(1-(-1/5))=5×6/5=6.',
//           answer: 'a = 6',
//         },
//         {
//           id: 25,
//           question:
//             'Given that x is a positive number, find an expression, in terms of x, for the sum to infinity of the series x+4x³+16x⁵+...',
//           type: 'Hard',
//           explaination: 'a=x, r=4x².\nS∞=x/(1-4x²).',
//           answer: 'S∞ = x/(1-4x²)',
//         },
//         {
//           id: 26,
//           question: 'Find the value of x such that Σ[r=0 to ∞] xʳ⁺¹/2ʳ=3.',
//           type: 'Hard',
//           explaination:
//             'Rewrite: Σ[r=0 to ∞] x·(x/2)ʳ.\nThis is a geometric series with a=x, r=x/2.\nS∞=x/(1-x/2)=3.\n⇒ x=3(1-x/2)=3-3x/2.\nx+3x/2=3 ⇒ 5x/2=3 ⇒ x=6/5.',
//           answer: 'x = 6/5',
//         },
//         {
//           id: 27,
//           question:
//             'An infinite geometric series has sum to infinity of 27 and sum of the first three terms equal to 19. Find the first term.',
//           type: 'Hard',
//           explaination:
//             'Let first term =a, ratio =r.\nS∞=a/(1-r)=27 ...(1)\nKey insight: S∞ - S₃ = sum of remaining terms = ar³/(1-r).\nS∞ - S₃ = 27-19=8.\nSo ar³/(1-r)=8.\nDividing by (1): (ar³/(1-r))/(a/(1-r))=8/27 ⇒ r³=8/27.\nr=2/3.\nFrom (1): a=27(1-2/3)=27×1/3=9.',
//           answer: 'a = 9',
//         },
//       ],
//       'convergence-of-infinite-geometric-series': [
//         {
//           id: 1,
//           question:
//             'Find the range of values of x for which the infinite geometric series converges:\n(x-2)+(x-2)²+(x-2)³+...',
//           type: 'Medium',
//           explaination:
//             'Common ratio r=(x-2).\nConverges when |r|<1, i.e. |x-2|<1.\n-1<x-2<1 ⇒ 1<x<3.',
//           answer: '1 < x < 3',
//         },
//         {
//           id: 2,
//           question:
//             'Find the range of values of x for which the infinite geometric series converges:\n(x+3)+(x+3)²+(x+3)³+...',
//           type: 'Medium',
//           explaination: 'Common ratio r=(x+3).\nConverges when |x+3|<1, i.e. -4<x<-2.',
//           answer: '-4 < x < -2',
//         },
//         {
//           id: 3,
//           question:
//             'Find the range of values of x for which the infinite geometric series converges:\n1+2x+4x²+...',
//           type: 'Medium',
//           explaination: 'a=1, r=2x.\nConverges when |2x|<1, i.e. |x|<1/2.',
//           answer: '-1/2<x<1/2',
//         },
//         {
//           id: 4,
//           question:
//             'Find the range of values of x for which the infinite geometric series converges:\n1+3x+9x²+...',
//           type: 'Medium',
//           explaination: 'r=3x. Converges when |3x|<1, i.e. |x|<1/3.',
//           answer: '-1/3<x<1/3',
//         },
//         {
//           id: 5,
//           question:
//             'Find the range of values of x for which the infinite geometric series converges:\n1+x/2+x²/4+...',
//           type: 'Medium',
//           explaination: 'r=x/2. Converges when |x/2|<1, i.e. |x|<2.',
//           answer: '-2<x<2',
//         },
//         {
//           id: 6,
//           question:
//             'Find the range of values of x for which the infinite geometric series converges:\n1+x/5+x²/25+...',
//           type: 'Medium',
//           explaination: 'r=x/5. Converges when |x/5|<1, i.e. |x|<5.',
//           answer: '-5<x<5',
//         },
//         {
//           id: 7,
//           question:
//             'Find the range of values of x for which the infinite geometric series converges:\n(x+4)-(x+4)²+(x+4)³-...',
//           type: 'Medium',
//           explaination: 'r=-(x+4). Converges when |-(x+4)|<1, i.e. |x+4|<1.\n-1<x+4<1 ⇒ -5<x<-3.',
//           answer: '-5<x<-3',
//         },
//         {
//           id: 8,
//           question:
//             'Find the range of values of x for which the infinite geometric series converges:\n(x-1)-(x-1)²+(x-1)³-...',
//           type: 'Medium',
//           explaination: 'r=-(x-1). Converges when |x-1|<1, giving 0<x<2.',
//           answer: '0<x<2',
//         },
//         {
//           id: 9,
//           question:
//             'Find the range of values of x for which the infinite geometric series converges:\n1-3x/2+9x²/4-...',
//           type: 'Medium',
//           explaination: 'r=-3x/2. Converges when |3x/2|<1, i.e. |x|<2/3.',
//           answer: '-2/3<x<2/3',
//         },
//         {
//           id: 10,
//           question:
//             'Find the range of values of x for which the infinite geometric series converges:\n1-4x/3+16x²/9-...',
//           type: 'Medium',
//           explaination: 'r=-4x/3. Converges when |4x/3|<1, i.e. |x|<3/4.',
//           answer: '-3/4<x<3/4',
//         },
//         {
//           id: 11,
//           question:
//             'Find the range of values of x for which the geometric series\n3-x/3+x²/27-x³/243+...\nconverges.',
//           type: 'Hard',
//           explaination:
//             'First term a=3.\nCommon ratio: r=(-x/3)/3=-x/9.\nConverges when |-x/9|<1, i.e. |x|<9.',
//           answer: '-9<x<9',
//         },
//         {
//           id: 12,
//           question:
//             'A geometric series is given by 5+5(x-3)+5(x-3)²+...\nFind the range of values of x for which the series converges.',
//           type: 'Medium',
//           explaination: 'r=(x-3). Converges when |x-3|<1, i.e. 2<x<4.',
//           answer: '2<x<4',
//         },
//         {
//           id: 13,
//           question:
//             'For the geometric series 2+4x+8x²+...\nFind the range of values of x for which the series converges.',
//           type: 'Hard',
//           explaination: 'a=2, r=2x. Converges when |2x|<1, i.e. |x|<1/2.',
//           answer: '-1/2<x<1/2',
//         },
//         {
//           id: 14,
//           question:
//             'Given that x is a positive number, find the range of values of x for which the geometric series x+4x³+16x⁵+... converges.',
//           type: 'Hard',
//           explaination:
//             'First term a=x.\nCommon ratio: r=4x³/x=4x².\nConverges when |4x²|<1 ⇒ x²<1/4 ⇒ x<1/2.\nSince x>0: 0<x<1/2.',
//           answer: '0<x<1/2',
//         },
//         {
//           id: 15,
//           question:
//             'Find the range of values of x for which the series Σ[r=0 to ∞] xʳ⁺¹/2ʳ converges.',
//           type: 'Hard',
//           explaination:
//             'Rewrite the series as Σ[r=0 to ∞] x·(x/2)ʳ, so the common ratio is r = x/2.\nConverges when |x/2|<1, i.e. |x|<2.',
//           answer: '-2<x<2',
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
//           explaination: 'FV = 2000×(1+0.06)³\n= 2000×1.191016\n= $2382.03',
//           answer: '$2382.03',
//         },
//         {
//           id: 2,
//           question:
//             'Find the final value of the investment: $3000 invested at 4% compounded annually for 18 years.',
//           type: 'Easy',
//           explaination: 'FV = 3000×(1.04)¹⁸\n= 3000×2.02582\n= $6077.45',
//           answer: '$6077.45',
//         },
//         {
//           id: 3,
//           question:
//             'A savings account pays interest at 3% per year (compounded annually). If £800 is deposited in the account, what will the balance show at the end of 4 years?',
//           type: 'Easy',
//           explaination: 'FV = 800×(1.03)⁴\n= 800×1.12551\n≈£900.41',
//           answer: '£900.41',
//         },
//         {
//           id: 4,
//           question:
//             'A bank charges 5% annual interest on loans. If a seven-year loan of £10,000 is taken, with no repayments until the seven years end, how much will need to be paid at the end of the loan term?',
//           type: 'Easy',
//           explaination: 'FV = 10000×(1.05)⁷\n= 10000×1.40710\n≈£14,071.00',
//           answer: '£14,071.00',
//         },
//       ],
//       'time-to-reach-a-target-value': [
//         {
//           id: 1,
//           question:
//             'Find how long is required to achieve the given final value: $100 invested at 5% compounded annually. £1000 required.',
//           type: 'Medium',
//           explaination: '100×(1.05)ⁿ=1000\n(1.05)ⁿ=10\nn=(ln 10)/(ln 1.05)≈47.6 years',
//           answer: 'n ≈ 47.6 years',
//         },
//         {
//           id: 2,
//           question:
//             'Find how long is required to achieve the given final value: $500 invested at 4% compounded annually. £600 required.',
//           type: 'Easy',
//           explaination: '500×(1.04)ⁿ=600\n(1.04)ⁿ=1.2\nn=(ln 1.2)/(ln 1.04)≈4.64 years',
//           answer: 'n ≈ 4.64 years',
//         },
//         {
//           id: 3,
//           question:
//             'Find how long is required to achieve the given final value: $300 invested at 2% compounded monthly. £400 required.',
//           type: 'Medium',
//           explaination:
//             '300×(1+0.02/12)ⁿ=400\n(1.0016̅)ⁿ=4/3\nn=(ln(4/3))/(ln(1.0016̅))≈172.1 months',
//           answer: 'n ≈ 172.1 months ≈ 14.3 years',
//         },
//         {
//           id: 4,
//           question:
//             'Find how long is required to achieve the given final value: $1000 invested at 1.5% compounded monthly. £1100 required.',
//           type: 'Medium',
//           explaination: '1000×(1+0.015/12)ⁿ=1100\nn=(ln 1.1)/(ln(1.00125))≈76.3 months',
//           answer: 'n ≈ 76.3 months ≈ 6.4 years',
//         },
//       ],
//       'finding-the-interest-rate': [
//         {
//           id: 1,
//           question:
//             'Find the annual interest rate required (compounded annually): €500 invested for 10 years. €1000 required.',
//           type: 'Medium',
//           explaination: '500(1+r)¹⁰=1000\n(1+r)¹⁰=2\n1+r=2^(1/10)\nr=2^(0.1)-1≈0.0718 (7.18%)',
//           answer: 'r ≈ 7.18%',
//         },
//         {
//           id: 2,
//           question:
//             'Find the annual interest rate required (compounded annually): €500 invested for 10 years. €800 required.',
//           type: 'Medium',
//           explaination: '500(1+r)¹⁰=800\n(1+r)¹⁰=1.6\nr=1.6^(0.1)-1≈0.0481 (4.81%)',
//           answer: 'r ≈ 4.81%',
//         },
//         {
//           id: 3,
//           question:
//             'Find the annual interest rate required (compounded annually): €100 invested for 5 years. €200 required.',
//           type: 'Medium',
//           explaination: '100(1+r)⁵=200\n(1+r)⁵=2\nr=2^(1/5)-1≈0.1487 (14.87%)',
//           answer: 'r ≈ 14.87%',
//         },
//         {
//           id: 4,
//           question:
//             'Find the annual interest rate required (compounded annually): €100 invested for 10 years. €200 required.',
//           type: 'Medium',
//           explaination: '100(1+r)¹⁰=200\n(1+r)¹⁰=2\nr=2^(0.1)-1≈0.0718 (7.18%)',
//           answer: 'r ≈ 7.18%',
//         },
//       ],
//       depreciation: [
//         {
//           id: 1,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value $1200, annual depreciation 10% for 10 years.',
//           type: 'Easy',
//           explaination: 'FV = 1200×(1-0.10)¹⁰\n= 1200×(0.9)¹⁰\n= 1200×0.34868\n≈$418.42',
//           answer: '$418.42',
//         },
//         {
//           id: 2,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value $1200, annual depreciation 20% for 10 years.',
//           type: 'Easy',
//           explaination: 'FV = 1200×(0.8)¹⁰\n= 1200×0.10737\n≈$128.85',
//           answer: '$128.85',
//         },
//         {
//           id: 3,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value £30,000, annual depreciation 15% for 5 years.',
//           type: 'Easy',
//           explaination: 'FV = 30000×(0.85)⁵\n= 30000×0.44371\n≈£13,311.22',
//           answer: '£13,311.22',
//         },
//         {
//           id: 4,
//           question:
//             'Find the final value of an asset after the given depreciation (compounded annually): Initial value £30,000, annual depreciation 25% for 5 years.',
//           type: 'Easy',
//           explaination: 'FV = 30000×(0.75)⁵\n= 30000×0.23730\n≈£7,119.14',
//           answer: '£7,119.14',
//         },
//         {
//           id: 5,
//           question:
//             'A car is bought for £20,000. Each year there is 15% depreciation. Find the expected value of the car after 5 years.',
//           type: 'Easy',
//           explaination: 'FV = 20000×(1-0.15)⁵\n= 20000×(0.85)⁵\n= 20000×0.44371\n≈£8874.11',
//           answer: '£8874.11',
//         },
//         {
//           id: 6,
//           question:
//             'A company buys a manufacturing machine for $20,000, with an expected lifetime of 8 years and scrap value $1500. The depreciation rate is set at 30%. Complete the table of asset values for the 8 years. Give all values to the nearest dollar.\n| Year | Start-year value ($) | Depreciation expense ($) | End-year value ($) |\n|------|-----------------------|---------------------------|---------------------|\n| 1 | 20 000 | | |\n| 2 | | | |\n| 3 | | | |\n| 4 | | | |\n| 5 | | | |\n| 6 | | | |\n| 7 | | | |\n| 8 | | | |',
//           type: 'Hard',
//           explaination:
//             'Depreciation each year = 30% of start-year value.\nYear 1: 20000 | 6000 | 14000\nYear 2: 14000 | 4200 | 9800\nYear 3: 9800 | 2940 | 6860\nYear 4: 6860 | 2058 | 4802\nYear 5: 4802 | 1441 | 3361\nYear 6: 3361 | 1008 | 2353\nYear 7: 2353 | 706 | 1647\nYear 8: 1647 | 494 | 1153\n(Scrap value $1500 given for context; reducing balance method applied throughout)',
//           answer:
//             'End-year values: 14000, 9800, 6860, 4802, 3361, 2353, 1647, 1153 (dollars, years 1–8)',
//         },
//       ],
//       'compound-interest-non-annual': [
//         {
//           id: 1,
//           question:
//             'Find the final value of the investment: $500 invested at 2.5% compounded quarterly for 6 years.',
//           type: 'Easy',
//           explaination: 'FV = 500×(1+0.025/4)^(4×6)\n= 500×(1.00625)²⁴\n= $580.95',
//           answer: '$580.95',
//         },
//         {
//           id: 2,
//           question:
//             'Find the final value of the investment: $100 invested at 3.5% compounded twice-yearly for 10 years.',
//           type: 'Easy',
//           explaination: 'FV = 100×(1+0.035/2)^(2×10)\n= 100×(1.0175)²⁰\n= $141.48',
//           answer: '$141.48',
//         },
//         {
//           id: 3,
//           question:
//             'Find the final value of the investment: $5000 invested at 5% compounded monthly for 60 months.',
//           type: 'Easy',
//           explaination: 'FV = 5000×(1+0.05/12)⁶⁰\n= 5000×(1.004167)⁶⁰\n= $6416.79',
//           answer: '$6416.79',
//         },
//         {
//           id: 4,
//           question:
//             'Find the final value of the investment: $800 invested at 4% compounded monthly for 100 months.',
//           type: 'Easy',
//           explaination: 'FV = 800×(1+0.04/12)¹⁰⁰\n= 800×(1.0033̅)¹⁰⁰\n= $1116.39',
//           answer: '$1116.39',
//         },
//         {
//           id: 5,
//           question:
//             'A savings account has an annual interest rate of 4% compounded monthly. Find the account balance 30 months after $8000 is invested.',
//           type: 'Medium',
//           explaination: 'FV = 8000×(1+0.04/12)³⁰\n= 8000×(1.0033̅)³⁰\n≈$8840.96',
//           answer: '$8840.96',
//         },
//         {
//           id: 6,
//           question:
//             'A bank loan has a published annual interest rate of 5.8%, compounded monthly. What is the balance 18 months after a loan of €15,000 is taken out, if no payments are made?',
//           type: 'Medium',
//           explaination: 'FV = 15000×(1+0.058/12)¹⁸\n= 15000×(1.004833)¹⁸\n≈€16,359.75',
//           answer: '€16,359.75',
//         },
//       ],
//       'real-value-of-investment-with-inflation': [
//         {
//           id: 1,
//           question:
//             'Find the real value of cash (no interest paid) subject to the given inflation, relative to the initial value: $100 after 1 year of inflation at 3%.',
//           type: 'Easy',
//           explaination: 'Real Value = 100/1.03 ≈ $97.09',
//           answer: '$97.09',
//         },
//         {
//           id: 2,
//           question:
//             'Find the real value of cash (no interest paid) subject to the given inflation, relative to the initial value: $300 after 1 year of inflation at 2%.',
//           type: 'Easy',
//           explaination: 'Real Value = 300/1.02 ≈ $294.12',
//           answer: '$294.12',
//         },
//         {
//           id: 3,
//           question:
//             'Find the real value of cash (no interest paid) subject to the given inflation, relative to the initial value: £1000 after 10 years of inflation at 3%.',
//           type: 'Easy',
//           explaination: 'Real Value = 1000/(1.03)¹⁰ = 1000/1.34392 ≈ £744.09',
//           answer: '£744.09',
//         },
//         {
//           id: 4,
//           question:
//             'Find the real value of cash (no interest paid) subject to the given inflation, relative to the initial value: £5000 after 10 years of inflation at 5%.',
//           type: 'Easy',
//           explaination: 'Real Value = 5000/(1.05)¹⁰ = 5000/1.62889 ≈ £3069.57',
//           answer: '£3069.57',
//         },
//         {
//           id: 5,
//           question:
//             'Find the real value of the investment subject to the given inflation (all interest compounded annually): $100 after 1 year of interest at 5% and inflation at 2%.',
//           type: 'Medium',
//           explaination: 'Nominal FV=100×1.05=105\nReal FV=105/1.02≈$102.94',
//           answer: '$102.94',
//         },
//         {
//           id: 6,
//           question:
//             'Find the real value of the investment subject to the given inflation (all interest compounded annually): $5000 after 1 year of interest at 4% and inflation at 1.4%.',
//           type: 'Medium',
//           explaination: 'Nominal FV=5000×1.04=5200\nReal FV=5200/1.014≈$5118.34',
//           answer: '$5118.34',
//         },
//         {
//           id: 7,
//           question:
//             'Find the real value of the investment (all interest compounded annually): £100 after 1 year of interest at 4% and inflation at 10%.',
//           type: 'Medium',
//           explaination: 'Nominal FV=100×1.04=104\nReal FV=104/1.10≈£94.55',
//           answer: '£94.55',
//         },
//         {
//           id: 8,
//           question:
//             'Find the real value of the investment (all interest compounded annually): £2500 after 1 year of interest at 3% and inflation at 5%.',
//           type: 'Medium',
//           explaination: 'Nominal FV=2500×1.03=2575\nReal FV=2575/1.05≈£2452.38',
//           answer: '£2452.38',
//         },
//         {
//           id: 9,
//           question:
//             'Find the real value of the investment (all interest compounded annually): €1000 after 10 years of interest at 3.5% and inflation at 3%.',
//           type: 'Medium',
//           explaination: 'Real FV=1000×(1.035)¹⁰/(1.03)¹⁰\n=1000×1.41060/1.34392\n≈€1049.64',
//           answer: '€1049.64',
//         },
//         {
//           id: 10,
//           question:
//             'Find the real value of the investment (all interest compounded annually): €500 after 5 years of interest at 5% and inflation at 2%.',
//           type: 'Medium',
//           explaination: 'Real FV=500×(1.05)⁵/(1.02)⁵\n=500×1.27628/1.10408\n≈€577.70',
//           answer: '€577.70',
//         },
//         {
//           id: 11,
//           question:
//             'Find the real value of the investment (all interest compounded annually): $1000 after 10 years of interest at 5% and inflation at 10%.',
//           type: 'Hard',
//           explaination: 'Real FV=1000×(1.05)¹⁰/(1.10)¹⁰\n=1000×1.62889/2.59374\n≈$638.62',
//           answer: '$638.62',
//         },
//         {
//           id: 12,
//           question:
//             'Find the real value of the investment (all interest compounded annually): $5000 after 8 years of interest at 3% and inflation at 5%.',
//           type: 'Hard',
//           explaination: 'Real FV=5000×(1.03)⁸/(1.05)⁸\n=5000×1.26677/1.47746\n≈$4286.70',
//           answer: '$4286.70',
//         },
//         {
//           id: 13,
//           question:
//             'A car is bought for £15,000. It depreciates by 20% in the first year and 10% in subsequent years. There is an average of 2.5% inflation each year. What is the real terms value of the car after 5 years? Give your answer to the nearest £10.',
//           type: 'Hard',
//           explaination:
//             'Nominal value after 5 years:\nYear 1: 15000×0.80=12000\nYears 2-5: 12000×(0.90)⁴=12000×0.6561=£7873.20\nReal value (deflate by inflation over 5 years):\nReal=7873.20/(1.025)⁵=7873.20/1.13141≈£6959.79≈£6960',
//           answer: '≈£6960',
//         },
//       ],
//       'comparing-compounding-methods': [
//         {
//           id: 1,
//           question:
//             '£1000 is invested at an annual interest rate of 6%.\n(a) Is the return better if the interest is compounded annually or monthly?\n(b) Over 10 years, what is the difference in the return between these two compounding methods?',
//           type: 'Medium',
//           explaination:
//             '(a) Annual: FV=1000×1.06¹=£1060\nMonthly: FV=1000×(1+0.06/12)¹²=1000×1.00500¹²≈£1061.68\nMonthly gives higher return.\n(b) After 10 years:\nAnnual: FV=1000×(1.06)¹⁰≈£1790.85\nMonthly: FV=1000×(1+0.06/12)¹²⁰≈£1819.40\nDifference =1819.40-1790.85≈£28.55',
//           answer: '(a) Monthly compounding gives a better return.\n(b) Difference ≈£28.55',
//         },
//       ],
//       'equivalent-annual-rate-ear': [
//         {
//           id: 1,
//           question:
//             'A bank advertises a loan charging 12% annual interest compounded monthly. What is the equivalent annual interest rate if compounded annually?',
//           type: 'Hard',
//           explaination: 'Monthly rate =0.12/12=0.01\nEAR=(1.01)¹²-1\n=1.12683-1\n≈12.68%',
//           answer: '≈12.68%',
//         },
//       ],
//       'real-terms-growth-with-inflation': [
//         {
//           id: 1,
//           question:
//             '£1000 is invested for 5 years in an account paying 6.2% annual interest. Over the same period, inflation is judged to be 3.2% annually. What is the real terms percentage increase in value of the investment at the end of the 5 years?',
//           type: 'Hard',
//           explaination:
//             'Real multiplier=(1.062)⁵/(1.032)⁵=(1.062/1.032)⁵=(1.02907)⁵\n≈1.15445\nPercentage increase=15.45%',
//           answer: '≈15.45%',
//         },
//         {
//           id: 2,
//           question:
//             'A government pledges to increase spending on education by 5% each year.\n(a) If the inflation rate is predicted to 2.5% each year, what is the real terms increase per year?\n(b) If this is pledged for a 5-year period, what is the overall real terms percentage increase in spending on education?',
//           type: 'Hard',
//           explaination:
//             '(a) Real rate = 1.05/1.025-1≈0.02439 (2.44%)\n(b) Over 5 years:\nOverall real increase=(1.02439)⁵-1≈1.1279-1=12.79%',
//           answer: '(a) ≈2.44% per year\n(b) ≈12.79% overall',
//         },
//       ],
//       hyperinflation: [
//         {
//           id: 1,
//           question:
//             'In 1923, Germany suffered from hyperinflation. The annual inflation rate was approximately 10¹¹%. Use the exact formula for inflation to answer:\n(a) At the beginning of 1923 a loaf of bread costs approximately 250 marks. How much did it cost at the end of 1923?\n(b) Siegfried had 2,000,000 marks in savings at the beginning of 1923. He invested it in a savings account paying 20% interest. How much was it worth in real terms at the end of 1923?\n(c) Anna had a mortgage of 25 million marks at the beginning of 1923. Interest of 15% was added to this mortgage during 1923. Anna made no payments. What is the debt in real terms by the end of 1923?',
//           type: 'Hard',
//           explaination:
//             'Inflation multiplier: (1+10¹¹/100)=1+10⁹≈10⁹\n(a) Cost=250×10⁹=2.5×10¹¹ marks\n(b) Nominal value =2,000,000×1.20=2,400,000 marks\nReal value=(2,400,000)/10⁹=0.0024 marks\n(c) Nominal debt =25,000,000×1.15=28,750,000 marks\nReal debt=(28,750,000)/10⁹≈0.02875 marks',
//           answer:
//             '(a) ≈ 2.5×10¹¹ marks\n(b) ≈ 0.0024 marks (essentially worthless)\n(c) ≈ 0.02875 marks (debt almost wiped out in real terms)',
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
//           question: 'Simplify:\na) x² × x⁴\nb) x⁵ × x⁷',
//           type: 'Easy',
//           explaination: 'Use aᵐ × aⁿ = aᵐ⁺ⁿ\na) x²⁺⁴=x⁶\nb) x⁵⁺⁷=x¹²',
//           answer: 'a) x⁶\nb) x¹²',
//         },
//         {
//           id: 2,
//           question: 'Simplify:\na) y³ × y³\nb) z⁵ × z⁵',
//           type: 'Easy',
//           explaination: 'a) y³⁺³=y⁶\nb) z⁵⁺⁵=z¹⁰',
//           answer: 'a) y⁶\nb) z¹⁰',
//         },
//         {
//           id: 3,
//           question: 'Simplify:\na) a⁶ × a\nb) a¹⁰ × a',
//           type: 'Easy',
//           explaination: 'Recall a = a¹\na) a⁶⁺¹=a⁷\nb) a¹⁰⁺¹=a¹¹',
//           answer: 'a) a⁷\nb) a¹¹',
//         },
//         {
//           id: 4,
//           question: 'Simplify (do not evaluate):\na) 5⁷ × 5¹⁰\nb) 2¹² × 2¹²',
//           type: 'Easy',
//           explaination: 'a) 5⁷⁺¹⁰=5¹⁷\nb) 2¹²⁺¹²=2²⁴',
//           answer: 'a) 5¹⁷\nb) 2²⁴',
//         },
//       ],
//       'laws-of-indices-power-of-a-power': [
//         {
//           id: 1,
//           question: 'Simplify:\na) (x³)⁵\nb) (x⁴)⁸',
//           type: 'Easy',
//           explaination: 'Use (aᵐ)ⁿ = aᵐⁿ\na) x^(3 × 5)=x¹⁵\nb) x^(4 × 8)=x³²',
//           answer: 'a) x¹⁵\nb) x³²',
//         },
//         {
//           id: 2,
//           question: 'Simplify:\na) (y⁴)⁴\nb) (z⁵)⁵',
//           type: 'Easy',
//           explaination: 'a) y^(4 × 4)=y¹⁶\nb) z^(5 × 5)=z²⁵',
//           answer: 'a) y¹⁶\nb) z²⁵',
//         },
//         {
//           id: 3,
//           question: 'Simplify:\na) (c⁷)²\nb) (c²)⁷',
//           type: 'Easy',
//           explaination:
//             'a) c^(7 × 2)=c¹⁴\nb) c^(2 × 7)=c¹⁴\nNote: same answer – commutative property of multiplication.',
//           answer: 'a) c¹⁴\nb) c¹⁴',
//         },
//         {
//           id: 4,
//           question: 'Simplify (do not evaluate):\na) (3⁵)¹⁰\nb) (13⁷)⁴',
//           type: 'Easy',
//           explaination: 'a) 3^(5 × 10)=3⁵⁰\nb) 13^(7 × 4)=13²⁸',
//           answer: 'a) 3⁵⁰\nb) 13²⁸',
//         },
//       ],
//       'laws-of-indices-coefficient-variable-combined': [
//         {
//           id: 1,
//           question: 'Simplify:\na) 12x² × 4x⁵\nb) 3x⁴ × 5x³',
//           type: 'Easy',
//           explaination:
//             'Multiply coefficients and add indices.\na) (12 × 4)x²⁺⁵=48x⁷\nb) (3 × 5)x⁴⁺³=15x⁷',
//           answer: 'a) 48x⁷\nb) 15x⁷',
//         },
//         {
//           id: 2,
//           question: 'Simplify:\na) a × 3a²\nb) b² × 5b²',
//           type: 'Easy',
//           explaination: 'a) 3 · a¹⁺²=3a³\nb) 5 · b²⁺²=5b⁴',
//           answer: 'a) 3a³\nb) 5b⁴',
//         },
//       ],
//       'laws-of-indices-multi-variable': [
//         {
//           id: 1,
//           question: 'Simplify:\na) 5x²yz × 4x³y²\nb) 6x⁷yz² × 2xz³',
//           type: 'Medium',
//           explaination:
//             'Multiply coefficients; add indices for matching bases.\na) (5 × 4)x²⁺³y¹⁺²z¹=20x⁵y³z\nb) (6 × 2)x⁷⁺¹y¹z²⁺³=12x⁸yz⁵',
//           answer: 'a) 20x⁵y³z\nb) 12x⁸yz⁵',
//         },
//       ],
//       'laws-of-indices-division': [
//         {
//           id: 1,
//           question: 'Simplify:\na) x⁴/x³\nb) x⁸/x⁵',
//           type: 'Easy',
//           explaination: 'Use aᵐ ÷ aⁿ = aᵐ⁻ⁿ\na) x⁴⁻³=x¹=x\nb) x⁸⁻⁵=x³',
//           answer: 'a) x\nb) x³',
//         },
//         {
//           id: 2,
//           question: 'Simplify:\na) y⁸ ÷ y⁴\nb) z⁹ ÷ z³',
//           type: 'Easy',
//           explaination: 'a) y⁸⁻⁴=y⁴\nb) z⁹⁻³=z⁶',
//           answer: 'a) y⁴\nb) z⁶',
//         },
//         {
//           id: 3,
//           question: 'Simplify:\na) b⁷/b\nb) b⁹/b',
//           type: 'Easy',
//           explaination: 'a) b⁷⁻¹=b⁶\nb) b⁹⁻¹=b⁸',
//           answer: 'a) b⁶\nb) b⁸',
//         },
//         {
//           id: 4,
//           question: 'Simplify (do not evaluate):\na) 11¹² ÷ 11⁴\nb) 7¹⁰ ÷ 7⁵',
//           type: 'Easy',
//           explaination: 'a) 11¹²⁻⁴=11⁸\nb) 7¹⁰⁻⁵=7⁵',
//           answer: 'a) 11⁸\nb) 7⁵',
//         },
//         {
//           id: 5,
//           question: 'Simplify:\na) 10x¹⁰/(5x⁵)\nb) 9x⁹/(3x³)',
//           type: 'Easy',
//           explaination:
//             'Divide coefficients; subtract indices.\na) (10 ÷ 5)x¹⁰⁻⁵=2x⁵\nb) (9 ÷ 3)x⁹⁻³=3x⁶',
//           answer: 'a) 2x⁵\nb) 3x⁶',
//         },
//         {
//           id: 6,
//           question: 'Simplify:\na) 8x/(16x⁴)\nb) 5x²/(20x³)',
//           type: 'Easy',
//           explaination: 'a) (8 ÷ 16)x¹⁻⁴=(1/2)x⁻³=1/(2x³)\nb) (5 ÷ 20)x²⁻³=(1/4)x⁻¹=1/(4x)',
//           answer: 'a) 1/(2x³)\nb) 1/(4x)',
//         },
//         {
//           id: 7,
//           question: 'Simplify:\na) 15x² ÷ 9x⁴\nb) 21x⁵ ÷ 28x³',
//           type: 'Easy',
//           explaination: 'a) (15/9)x²⁻⁴=(5/3)x⁻²=5/(3x²)\nb) (21/28)x⁵⁻³=(3/4)x²=3x²/4',
//           answer: 'a) 5/(3x²)\nb) 3x²/4',
//         },
//         {
//           id: 8,
//           question: 'Simplify:\na) 14x³y⁵ ÷ 2xy²\nb) 6x⁵yz² ÷ 3x²y²z',
//           type: 'Medium',
//           explaination: 'a) (14 ÷ 2)x³⁻¹y⁵⁻²=7x²y³\nb) (6 ÷ 3)x⁵⁻²y¹⁻²z²⁻¹=2x³y⁻¹z=2x³z/y',
//           answer: 'a) 7x²y³\nb) 2x³z/y',
//         },
//       ],
//       'negative-indices-integer-base': [
//         {
//           id: 1,
//           question: 'Write as a fraction in simplest terms:\na) 10⁻¹\nb) 7⁻¹',
//           type: 'Easy',
//           explaination: 'Use a⁻ⁿ=1/aⁿ\na) 10⁻¹=1/10\nb) 7⁻¹=1/7',
//           answer: 'a) 1/10\nb) 1/7',
//         },
//         {
//           id: 2,
//           question: 'Write as a fraction in simplest terms:\na) 3⁻³\nb) 5⁻²',
//           type: 'Easy',
//           explaination: 'a) 3⁻³=1/3³=1/27\nb) 5⁻²=1/5²=1/25',
//           answer: 'a) 1/27\nb) 1/25',
//         },
//       ],
//       'negative-indices-fraction-base': [
//         {
//           id: 1,
//           question: 'Write as a fraction in simplest terms:\na) (3/4)⁻¹\nb) (5/7)⁻¹',
//           type: 'Medium',
//           explaination: 'Use (a/b)⁻¹=b/a\na) 4/3\nb) 7/5',
//           answer: 'a) 4/3\nb) 7/5',
//         },
//         {
//           id: 2,
//           question: 'Write as a fraction in simplest terms:\na) (2/3)⁻²\nb) (2/5)⁻³',
//           type: 'Medium',
//           explaination: 'Use (a/b)⁻ⁿ=(b/a)ⁿ\na) (3/2)²=9/4\nb) (5/2)³=125/8',
//           answer: 'a) 9/4\nb) 125/8',
//         },
//         {
//           id: 3,
//           question: 'Simplify:\na) (3u/(4v²))⁻²\nb) (2a³/(3b²))⁻³',
//           type: 'Hard',
//           explaination:
//             'Invert fraction then apply power.\na) (4v²/(3u))²=16v⁴/(9u²)\nb) (3b²/(2a³))³=27b⁶/(8a⁹)',
//           answer: 'a) 16v⁴/(9u²)\nb) 27b⁶/(8a⁹)',
//         },
//       ],
//       'laws-of-indices-fraction-in-brackets': [
//         {
//           id: 1,
//           question: 'Simplify:\na) (x/3)³\nb) (5/x²)²',
//           type: 'Medium',
//           explaination: 'a) x³/3³=x³/27\nb) 25/x⁴',
//           answer: 'a) x³/27\nb) 25/x⁴',
//         },
//         {
//           id: 2,
//           question: 'Simplify:\na) (3x²/(2y³))³\nb) (5uv³/(7b⁴))²',
//           type: 'Medium',
//           explaination: 'a) 3³x⁶/(2³y⁹)=27x⁶/(8y⁹)\nb) 25u²v⁶/(49b⁸)',
//           answer: 'a) 27x⁶/(8y⁹)\nb) 25u²v⁶/(49b⁸)',
//         },
//         {
//           id: 3,
//           question: 'Simplify (2x²y)³/(8xy).',
//           type: 'Medium',
//           explaination: 'Numerator: (2x²y)³=8x⁶y³\n8x⁶y³/(8xy)=x⁵y²',
//           answer: 'x⁵y²',
//         },
//       ],
//       'expressing-values-in-prime-base-form': [
//         {
//           id: 1,
//           question:
//             'Express each value as a power of the given prime base:\na) Express 9⁴ as a power of 3.\nb) Express 27⁸ as a power of 3.',
//           type: 'Medium',
//           explaination: 'a) 9⁴=(3²)⁴=3⁸\nb) 27⁸=(3³)⁸=3²⁴',
//           answer: 'a) 3⁸\nb) 3²⁴',
//         },
//         {
//           id: 2,
//           question:
//             'Express each value as a power of the given prime base:\na) Express 2⁵ × 4² as a power of 2.\nb) Express 5⁴ × 125² as a power of 5.',
//           type: 'Medium',
//           explaination: 'a) 2⁵ × (2²)²=2⁵ × 2⁴=2⁹\nb) 5⁴ × (5³)²=5⁴ × 5⁶=5¹⁰',
//           answer: 'a) 2⁹\nb) 5¹⁰',
//         },
//         {
//           id: 3,
//           question:
//             'Express each value as a power of the given prime base:\na) Express 4⁷ ÷ 8³ as a power of 2.\nb) Express 27⁵ ÷ 9² as a power of 3.',
//           type: 'Medium',
//           explaination: 'a) (2²)⁷ ÷ (2³)³=2¹⁴ ÷ 2⁹=2⁵\nb) (3³)⁵ ÷ (3²)²=3¹⁵ ÷ 3⁴=3¹¹',
//           answer: 'a) 2⁵\nb) 3¹¹',
//         },
//         {
//           id: 4,
//           question:
//             'Express each value as a power of the given prime base:\na) Express 8³ × 2⁷ + 4⁸ as a power of 2.\nb) Express 16² - 4⁸ ÷ 8³ as a power of 2.',
//           type: 'Hard',
//           explaination: 'a) 2⁹ × 2⁷+2¹⁶=2¹⁶+2¹⁶=2 · 2¹⁶=2¹⁷\nb) 2⁸-2¹⁶ ÷ 2⁹=2⁸-2⁷=2⁷(2-1)=2⁷',
//           answer: 'a) 2¹⁷\nb) 2⁷',
//         },
//       ],
//       'last-digit-cyclicity': [
//         {
//           id: 1,
//           question: 'What is the last digit of 316³¹⁶ + 631⁶³¹?',
//           type: 'Hard',
//           explaination:
//             'Last digit of 316ⁿ: always 6 (any power of a number ending in 6 ends in 6).\nLast digit of 631ⁿ: always 1 (any power of a number ending in 1 ends in 1).\n6 + 1 = 7',
//           answer: '7',
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
//           question: 'Without using a calculator, find the exact value of:\nlog 10',
//           type: 'Easy',
//           explaination: 'log 10 = 1 since 10¹ = 10',
//           answer: '1',
//         },
//         {
//           id: 2,
//           question: 'Without using a calculator, find the exact value of:\nlog 100',
//           type: 'Easy',
//           explaination: 'log 100 = 2 since 10² = 100',
//           answer: '2',
//         },
//         {
//           id: 3,
//           question: 'Without using a calculator, find the exact value of:\nlog 100,000',
//           type: 'Easy',
//           explaination: 'log 10⁵ = 5',
//           answer: '5',
//         },
//         {
//           id: 4,
//           question: 'Without using a calculator, find the exact value of:\nlog 1,000,000',
//           type: 'Easy',
//           explaination: 'log 10⁶ = 6',
//           answer: '6',
//         },
//         {
//           id: 5,
//           question: 'Without using a calculator, find the exact value of:\nlog 1',
//           type: 'Easy',
//           explaination: 'log 1 = 0 since 10⁰ = 1',
//           answer: '0',
//         },
//         {
//           id: 6,
//           question: 'Without using a calculator, find the exact value of:\nlog 0.1',
//           type: 'Easy',
//           explaination: '0.1 = 10⁻¹, so log 0.1 = -1',
//           answer: '-1',
//         },
//         {
//           id: 7,
//           question: 'Without using a calculator, find the exact value of:\nlog 0.01',
//           type: 'Easy',
//           explaination: '0.01 = 10⁻², so log 0.01 = -2',
//           answer: '-2',
//         },
//         {
//           id: 8,
//           question: 'Without using a calculator, find the exact value of:\nlog 0.0001',
//           type: 'Easy',
//           explaination: '0.0001 = 10⁻⁴, so log 0.0001 = -4',
//           answer: '-4',
//         },
//         {
//           id: 9,
//           question: 'Without using a calculator, find the exact value of:\nlog₂ 2',
//           type: 'Easy',
//           explaination: 'log₂ 2 = 1 since 2¹ = 2',
//           answer: '1',
//         },
//         {
//           id: 10,
//           question: 'Without using a calculator, find the exact value of:\nlog₂ 4',
//           type: 'Easy',
//           explaination: '4 = 2², so log₂ 4 = 2',
//           answer: '2',
//         },
//         {
//           id: 11,
//           question: 'Without using a calculator, find the exact value of:\nlog₃ 27',
//           type: 'Easy',
//           explaination: '27 = 3³, so log₃ 27 = 3',
//           answer: '3',
//         },
//         {
//           id: 12,
//           question: 'Without using a calculator, find the exact value of:\nlog₃ 81',
//           type: 'Easy',
//           explaination: '81 = 3⁴, so log₃ 81 = 4',
//           answer: '4',
//         },
//         {
//           id: 13,
//           question: 'Without using a calculator, find the exact value of:\nlog₅ 1',
//           type: 'Easy',
//           explaination: 'log_b 1 = 0 for any valid base b',
//           answer: '0',
//         },
//         {
//           id: 14,
//           question: 'Without using a calculator, find the exact value of:\nlog₅ 0.2',
//           type: 'Easy',
//           explaination: '0.2 = 1/5 = 5⁻¹, so log₅ 0.2 = -1',
//           answer: '-1',
//         },
//         {
//           id: 15,
//           question: 'Without using a calculator, find the exact value of:\nlog₂ 0.25',
//           type: 'Easy',
//           explaination: '0.25 = 1/4 = 2⁻², so log₂ 0.25 = -2',
//           answer: '-2',
//         },
//         {
//           id: 16,
//           question: 'Without using a calculator, find the exact value of:\nlog₂ 0.125',
//           type: 'Easy',
//           explaination: '0.125 = 1/8 = 2⁻³, so log₂ 0.125 = -3',
//           answer: '-3',
//         },
//       ],
//       'solving-logarithmic-equations': [
//         {
//           id: 1,
//           question: 'Without using a calculator, find the exact value of x:\nlog x = 2',
//           type: 'Easy',
//           explaination: 'log x = 2 ⇒ x = 10² = 100',
//           answer: 'x = 100',
//         },
//         {
//           id: 2,
//           question: 'Without using a calculator, find the exact value of x:\nlog x = 3',
//           type: 'Easy',
//           explaination: 'x = 10³ = 1000',
//           answer: 'x = 1000',
//         },
//         {
//           id: 3,
//           question: 'Without using a calculator, find the exact value of x:\nlog(2x - 4) = 5',
//           type: 'Medium',
//           explaination: '2x - 4 = 10⁵ = 100000\n2x = 100004\nx = 50002',
//           answer: 'x = 50002',
//         },
//         {
//           id: 4,
//           question: 'Without using a calculator, find the exact value of x:\nlog(3x + 4) = 3',
//           type: 'Medium',
//           explaination: '3x + 4 = 10³ = 1000\n3x = 996\nx = 332',
//           answer: 'x = 332',
//         },
//         {
//           id: 5,
//           question: 'Without using a calculator, find the exact value of x:\nlog(2x - 3) = -1',
//           type: 'Medium',
//           explaination: '2x - 3 = 10⁻¹ = 0.1\n2x = 3.1\nx = 1.55 = 31/20',
//           answer: 'x = 31/20',
//         },
//         {
//           id: 6,
//           question: 'Without using a calculator, find the exact value of x:\nlog(x + 2) = -2',
//           type: 'Medium',
//           explaination: 'x + 2 = 10⁻² = 0.01\nx = 0.01 - 2 = -1.99 = -199/100',
//           answer: 'x = -199/100',
//         },
//         {
//           id: 7,
//           question: 'Find the exact solution of:\n1 + 2 log x = 9',
//           type: 'Medium',
//           explaination: '2 log x = 8\nlog x = 4\nx = 10⁴',
//           answer: 'x = 10⁴',
//         },
//         {
//           id: 8,
//           question: 'Find the exact solution of:\nlog(3x + 4) = 3',
//           type: 'Medium',
//           explaination: '3x + 4 = 10³ = 1000\n3x = 996\nx = 332',
//           answer: 'x = 332',
//         },
//       ],
//       'natural-logarithm-rearranging': [
//         {
//           id: 1,
//           question: 'Rearrange the equation to find an expression for x:\nln x = 2',
//           type: 'Easy',
//           explaination: 'ln x = 2 ⇒ x = e²',
//           answer: 'x = e²',
//         },
//         {
//           id: 2,
//           question: 'Rearrange the equation to find an expression for x:\nln x = 5',
//           type: 'Easy',
//           explaination: 'x = e⁵',
//           answer: 'x = e⁵',
//         },
//         {
//           id: 3,
//           question: 'Rearrange the equation to find an expression for x:\nln x = y + 1',
//           type: 'Easy',
//           explaination: 'x = eʸ⁺¹',
//           answer: 'x = eʸ⁺¹',
//         },
//         {
//           id: 4,
//           question: 'Rearrange the equation to find an expression for x:\nln x = y²',
//           type: 'Easy',
//           explaination: 'x = e^(y²)',
//           answer: 'x = e^(y²)',
//         },
//         {
//           id: 5,
//           question: 'Rearrange the equation to find an expression for x:\nln(2x + 4) = y - 3',
//           type: 'Medium',
//           explaination: '2x + 4 = eʸ⁻³\n2x = eʸ⁻³ - 4\nx = (eʸ⁻³ - 4)/2',
//           answer: 'x = (eʸ⁻³ - 4)/2',
//         },
//         {
//           id: 6,
//           question: 'Rearrange the equation to find an expression for x:\nln((1/2)x - 6) = 2y + 1',
//           type: 'Medium',
//           explaination: '(1/2)x - 6 = e²ʸ⁺¹\n(1/2)x = e²ʸ⁺¹ + 6\nx = 2e²ʸ⁺¹ + 12',
//           answer: 'x = 2e²ʸ⁺¹ + 12',
//         },
//       ],
//       'simplifying-logarithmic-expressions': [
//         {
//           id: 1,
//           question: 'Simplify the expression:\nlog x + 4 log x',
//           type: 'Easy',
//           explaination: 'Collect like terms: (1+4) log x = 5 log x',
//           answer: '5 log x',
//         },
//         {
//           id: 2,
//           question: 'Simplify the expression:\n10 log x - 5 log x',
//           type: 'Easy',
//           explaination: '(10-5) log x = 5 log x',
//           answer: '5 log x',
//         },
//         {
//           id: 3,
//           question: 'Simplify the expression:\n(2(log 3x)²)/(log 3x)',
//           type: 'Medium',
//           explaination: 'Cancel one factor of log 3x:\n(2(log 3x)²)/(log 3x) = 2 log 3x',
//           answer: '2 log 3x',
//         },
//         {
//           id: 4,
//           question: 'Simplify the expression:\n(log 2x)/(log 2x)²',
//           type: 'Medium',
//           explaination: 'Cancel one factor of log 2x:\n(log 2x)/(log 2x)² = 1/(log 2x)',
//           answer: '1/(log 2x)',
//         },
//         {
//           id: 5,
//           question: 'Simplify the expression:\n(ln x + (ln x)²)/(ln x) - ln x',
//           type: 'Hard',
//           explaination: '(ln x + (ln x)²)/(ln x) = 1 + ln x\n(1 + ln x) - ln x = 1',
//           answer: '1',
//         },
//         {
//           id: 6,
//           question: 'Simplify the expression:\n(ln x - (ln x)³)/(ln x)² + ln x',
//           type: 'Hard',
//           explaination:
//             '(ln x(1-(ln x)²))/(ln x)² + ln x = (1 - (ln x)²)/(ln x) + ln x\n= (1 - (ln x)² + (ln x)²)/(ln x) = 1/(ln x)',
//           answer: '1/(ln x)',
//         },
//       ],
//       'laws-of-logarithms-key-properties': [
//         {
//           id: 1,
//           question: 'Simplify:\nlog 10⁻¹⁵',
//           type: 'Easy',
//           explaination: 'log 10⁻¹⁵ = -15',
//           answer: '-15',
//         },
//         {
//           id: 2,
//           question: 'Simplify:\nlog 10¹⁷',
//           type: 'Easy',
//           explaination: 'log 10¹⁷ = 17',
//           answer: '17',
//         },
//         {
//           id: 3,
//           question: 'Simplify:\nln e^(4.5)',
//           type: 'Easy',
//           explaination: 'ln e^(4.5) = 4.5',
//           answer: '4.5',
//         },
//         {
//           id: 4,
//           question: 'Simplify:\nln e^(-1.5)',
//           type: 'Easy',
//           explaination: 'ln e^(-1.5) = -1.5',
//           answer: '-1.5',
//         },
//         {
//           id: 5,
//           question: 'Simplify:\n10^(log 13)',
//           type: 'Easy',
//           explaination: '10^(log₁₀ 13) = 13',
//           answer: '13',
//         },
//         {
//           id: 6,
//           question: 'Simplify:\n10^(log 7)',
//           type: 'Easy',
//           explaination: '10^(log₁₀ 7) = 7',
//           answer: '7',
//         },
//         {
//           id: 7,
//           question: 'Simplify:\ne^(ln 3)',
//           type: 'Easy',
//           explaination: 'e^(ln 3) = 3',
//           answer: '3',
//         },
//         {
//           id: 8,
//           question: 'Simplify:\ne^(ln 7)',
//           type: 'Easy',
//           explaination: 'e^(ln 7) = 7',
//           answer: '7',
//         },
//         {
//           id: 9,
//           question: 'Simplify:\n10^(3 log 2)',
//           type: 'Medium',
//           explaination: '10^(3 log 2) = 10^(log 2³) = 10^(log 8) = 8',
//           answer: '8',
//         },
//         {
//           id: 10,
//           question: 'Simplify:\n10^(2 log 3)',
//           type: 'Medium',
//           explaination: '10^(2 log 3) = 10^(log 3²) = 10^(log 9) = 9',
//           answer: '9',
//         },
//         {
//           id: 11,
//           question: 'Simplify:\ne^(2 ln 5)',
//           type: 'Medium',
//           explaination: 'e^(2 ln 5) = e^(ln 5²) = 5² = 25',
//           answer: '25',
//         },
//         {
//           id: 12,
//           question: 'Simplify:\ne^(4 ln 3)',
//           type: 'Medium',
//           explaination: 'e^(4 ln 3) = e^(ln 3⁴) = 3⁴ = 81',
//           answer: '81',
//         },
//         {
//           id: 13,
//           question: 'Simplify:\n10^(-log 3)',
//           type: 'Medium',
//           explaination: '10^(-log 3) = 10^(log 3⁻¹) = 3⁻¹ = 1/3',
//           answer: '1/3',
//         },
//         {
//           id: 14,
//           question: 'Simplify:\n10^(-log 6)',
//           type: 'Medium',
//           explaination: '10^(-log 6) = 1/6',
//           answer: '1/6',
//         },
//         {
//           id: 15,
//           question: 'Simplify:\ne^(-5 ln 2)',
//           type: 'Medium',
//           explaination: 'e^(-5 ln 2) = e^(ln 2⁻⁵) = 2⁻⁵ = 1/32',
//           answer: '1/32',
//         },
//         {
//           id: 16,
//           question: 'Simplify:\ne^(-3 ln 4)',
//           type: 'Medium',
//           explaination: 'e^(-3 ln 4) = e^(ln 4⁻³) = 4⁻³ = 1/64',
//           answer: '1/64',
//         },
//       ],
//       'solving-exponential-equations-exact-form': [
//         {
//           id: 1,
//           question: 'Find x in exact form:\n10ˣ⁻² = 7',
//           type: 'Medium',
//           explaination: 'x - 2 = log 7\nx = log 7 + 2',
//           answer: 'x = log 7 + 2',
//         },
//         {
//           id: 2,
//           question: 'Find x in exact form:\n10ˣ⁺⁴ = 13',
//           type: 'Medium',
//           explaination: 'x + 4 = log 13\nx = log 13 - 4',
//           answer: 'x = log 13 - 4',
//         },
//         {
//           id: 3,
//           question: 'Find x in exact form:\n10ˣ⁻² = 70',
//           type: 'Medium',
//           explaination: 'x - 2 = log 70\nx = log 70 + 2 = log 7 + 3',
//           answer: 'x = log 70 + 2',
//         },
//         {
//           id: 4,
//           question: 'Find x in exact form:\n10ˣ⁺⁴ = 1300',
//           type: 'Medium',
//           explaination: 'x + 4 = log 1300\nx = log 1300 - 4 = log 13 - 2',
//           answer: 'x = log 1300 - 4',
//         },
//         {
//           id: 5,
//           question: 'Find x in exact form:\neˣ⁺² = k - 2',
//           type: 'Medium',
//           explaination: 'x + 2 = ln(k-2)\nx = ln(k-2) - 2',
//           answer: 'x = ln(k-2) - 2',
//         },
//         {
//           id: 6,
//           question: 'Find x in exact form:\neˣ⁺² = 2k + 1',
//           type: 'Medium',
//           explaination: 'x + 2 = ln(2k+1)\nx = ln(2k+1) - 2',
//           answer: 'x = ln(2k+1) - 2',
//         },
//         {
//           id: 7,
//           question: 'Find the exact solution of:\n5 × 20ˣ = 8 × 2ˣ',
//           type: 'Hard',
//           explaination: '5 × 20ˣ = 8 × 2ˣ\n(20/2)ˣ = 8/5\n10ˣ = 8/5\nx = log(8/5) = log 8 - log 5',
//           answer: 'x = (ln 8 - ln 5)/(ln 20 - ln 2) = (ln(8/5))/(ln 10)',
//         },
//       ],
//       'real-world-applications-exponential-decay': [
//         {
//           id: 1,
//           question:
//             'The radioactivity (R) of a substance after a time t days is modelled by R = 10 × e^(-0.1t).\nFind the initial (t = 0) radioactivity.',
//           type: 'Medium',
//           explaination: 'R = 10 × e⁰ = 10 × 1 = 10',
//           answer: 'R = 10',
//         },
//         {
//           id: 2,
//           question:
//             'The radioactivity (R) of a substance after a time t days is modelled by R = 10 × e^(-0.1t).\nFind the time taken for the radioactivity to fall to half of its original value.',
//           type: 'Medium',
//           explaination:
//             'Set R = 5:\n5 = 10e^(-0.1t)\ne^(-0.1t) = 0.5\n-0.1t = ln 0.5 = -ln 2\nt = (ln 2)/0.1 ≈ 6.93 days',
//           answer: 't = (ln 2)/0.1 ≈ 6.93 days',
//         },
//       ],
//       'real-world-applications-exponential-growth': [
//         {
//           id: 1,
//           question:
//             'The population of bacteria (B) at time t hours after being added to an agar dish is modelled by B = 1000 × e^(0.1t).\nFind the number of bacteria initially (t = 0).',
//           type: 'Easy',
//           explaination: 'B = 1000 × e⁰ = 1000',
//           answer: 'B = 1000',
//         },
//         {
//           id: 2,
//           question:
//             'The population of bacteria (B) at time t hours after being added to an agar dish is modelled by B = 1000 × e^(0.1t).\nFind the number of bacteria after 2 hours.',
//           type: 'Easy',
//           explaination: 'B = 1000 × e^(0.2) ≈ 1000 × 1.2214 ≈ 1221',
//           answer: 'B ≈ 1221',
//         },
//         {
//           id: 3,
//           question:
//             'The population of bacteria (B) is modelled by B = 1000 × e^(0.1t).\nFind an expression for the time it takes for B to reach 3000. Use technology to evaluate this expression.',
//           type: 'Medium',
//           explaination:
//             '3000 = 1000e^(0.1t)\ne^(0.1t) = 3\n0.1t = ln 3\nt = (ln 3)/0.1 ≈ 10.986 ≈ 11.0 hours (3 s.f.)',
//           answer: 't = (ln 3)/0.1 ≈ 11.0 hours',
//         },
//         {
//           id: 4,
//           question:
//             'The population of penguins (P) after t years on two islands is modelled by:\nFirst island: P = 200 × e^(0.1t)\nSecond island: P = 100 × e^(0.25t)\nHow many years are required before the population of penguins on both islands is equal?',
//           type: 'Hard',
//           explaination:
//             'Set equal:\n200e^(0.1t) = 100e^(0.25t)\n2 = e^(0.15t)\n0.15t = ln 2\nt = (ln 2)/0.15 ≈ 4.62 years',
//           answer: 't = (ln 2)/0.15 ≈ 4.62 years',
//         },
//       ],
//       'real-world-applications-logarithmic-scale': [
//         {
//           id: 1,
//           question:
//             'One formula for the pH of a solution is given by pH = -log [H⁺], where [H⁺] is the concentration of H⁺ ions in moles per litre.\nA solution contains 2.5 × 10⁻⁸ moles per litre of H⁺ ions. Find the pH of this solution.',
//           type: 'Medium',
//           explaination:
//             'pH = -log(2.5 × 10⁻⁸)\n= -(log 2.5 + (-8))\n= 8 - log 2.5 ≈ 7.602\n≈ 7.60 (3 s.f.)',
//           answer: 'pH ≈ 7.60',
//         },
//         {
//           id: 2,
//           question:
//             'One formula for the pH of a solution is given by pH = -log [H⁺].\nA solution of hydrochloric acid has a pH of 1.9. Find the concentration of H⁺ ions.',
//           type: 'Medium',
//           explaination:
//             '1.9 = -log [H⁺]\nlog [H⁺] = -1.9\n[H⁺] = 10^(-1.9) ≈ 0.01259 ≈ 1.26 × 10⁻² mol/l',
//           answer: '[H⁺] ≈ 1.26 × 10⁻² mol/l',
//         },
//         {
//           id: 3,
//           question:
//             'The decibel scale formula is L = 10 log(10¹²I) where L is the noise level in decibels and I is sound intensity in W/m².\nThe sound intensity inside a car is 5 × 10⁻⁷ W/m². Find the noise level in the car.',
//           type: 'Medium',
//           explaination:
//             'L = 10 log(10¹² × 5 × 10⁻⁷)\n= 10 log(5 × 10⁵)\n= 10(log 5 + 5) ≈ 10 × 5.699 = 56.99 ≈ 57.0 dB',
//           answer: 'L = 57.0 dB',
//         },
//         {
//           id: 4,
//           question:
//             'Using L = 10 log(10¹²I), the sound intensity in a factory is 5 × 10⁻⁶ W/m². Find the noise level in the factory.',
//           type: 'Medium',
//           explaination: 'L = 10 log(10¹² × 5 × 10⁻⁶)\n= 10 log(5 × 10⁶)\n= 10(log 5 + 6) ≈ 67.0 dB',
//           answer: 'L = 67.0 dB',
//         },
//         {
//           id: 5,
//           question:
//             'Using L = 10 log(10¹²I), describe the effect on the noise level of multiplying the sound intensity by 10.',
//           type: 'Medium',
//           explaination:
//             'L_(new) = 10 log(10¹² × 10I) = 10 log(10¹³I) = 10 log(10¹²I) + 10\nSo noise level increases by 10 dB.',
//           answer: 'Noise level increases by 10 dB',
//         },
//         {
//           id: 6,
//           question:
//             'Using L = 10 log(10¹²I), any noise level above 90 dB is considered dangerous. What sound intensity does this correspond to?',
//           type: 'Medium',
//           explaination: '90 = 10 log(10¹²I)\n9 = log(10¹²I)\n10¹²I = 10⁹\nI = 10⁻³ W/m²',
//           answer: 'I = 10⁻³ W/m²',
//         },
//       ],
//       'exponential-models': [
//         {
//           id: 1,
//           question:
//             'The radioactivity R of a substance after t days is modelled by R = 10 × 0.9ᵗ. Find the initial (i.e. t = 0) radioactivity.',
//           type: 'Medium',
//           explaination: 'R = 10 × 0.9⁰ = 10 × 1 = 10',
//           answer: 'R = 10',
//         },
//         {
//           id: 2,
//           question:
//             'The radioactivity R of a substance after t days is modelled by R = 10 × 0.9ᵗ. Find the time taken for the radioactivity to fall to half of its original value.',
//           type: 'Medium',
//           explaination: '5 = 10 × 0.9ᵗ ⇒ 0.9ᵗ = 0.5 ⇒ t = (ln 0.5)/(ln 0.9) ≈ 6.58',
//           answer: 't ≈ 6.58 days',
//         },
//         {
//           id: 3,
//           question:
//             'The population of bacteria B at time t hours after being added to an agar dish is modelled by B = 1000 × 1.1ᵗ. Find the number of bacteria initially (i.e. t = 0).',
//           type: 'Medium',
//           explaination: 'B = 1000 × 1.1⁰ = 1000',
//           answer: 'B = 1000',
//         },
//         {
//           id: 4,
//           question:
//             'The population of bacteria B at time t hours after being added to an agar dish is modelled by B = 1000 × 1.1ᵗ. Find the number of bacteria after 2 hours.',
//           type: 'Medium',
//           explaination: 'B = 1000 × 1.1² = 1000 × 1.21 = 1210',
//           answer: 'B = 1210',
//         },
//         {
//           id: 5,
//           question:
//             'The population of bacteria B at time t hours after being added to an agar dish is modelled by B = 1000 × 1.1ᵗ. Find an expression for the time it takes to reach 2000. Use technology to evaluate.',
//           type: 'Medium',
//           explaination: '2000 = 1000 × 1.1ᵗ ⇒ 1.1ᵗ = 2 ⇒ t = (ln 2)/(ln 1.1) ≈ 7.27',
//           answer: 't = (ln 2)/(ln 1.1) ≈ 7.27 hours',
//         },
//         {
//           id: 6,
//           question:
//             'The population of penguins P after t years on two islands is modelled by:\nFirst island: P = 200 × 1.1ᵗ\nSecond island: P = 100 × 1.2ᵗ\nHow many years are required before the population of penguins on both islands is equal?',
//           type: 'Hard',
//           explaination:
//             '200 × 1.1ᵗ = 100 × 1.2ᵗ ⇒ 2 = (1.2/1.1)ᵗ ⇒ t = (ln 2)/(ln(12/11)) ≈ 7.99 ≈ 8 years',
//           answer: 't ≈ 8 years',
//         },
//         {
//           id: 7,
//           question:
//             "Moore's law states that the density of transistors on an integrated circuit doubles every 2 years. Write an expression for the time taken for the density to multiply by 10, and use technology to evaluate this expression.",
//           type: 'Medium',
//           explaination:
//             'If D₀ is initial density: D = D₀ × 2^(t/2). Setting D = 10D₀: 2^(t/2) = 10 ⇒ t = 2 log₂ 10 = (2 ln 10)/(ln 2) ≈ 6.64',
//           answer: 't = 2 log₂ 10 = (2 ln 10)/(ln 2) ≈ 6.64 years',
//         },
//       ],
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
