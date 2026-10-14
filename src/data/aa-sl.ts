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
          explaination: 'Move the decimal point 4 places to the right: 3.2 × 10⁴ = 32,000',
          answer: '32,000',
        },
        {
          id: 2,
          question: 'Write 6.92 × 10⁶ as a normal number.',
          type: 'Easy',
          explaination: 'Move the decimal point 6 places to the right: 6.92 × 10⁶ = 6,920,000',
          answer: '6,920,000',
        },
        {
          id: 3,
          question: 'Write 4.8 × 10⁻² as a decimal.',
          type: 'Medium',
          explaination: 'Move the decimal point 2 places to the left: 4.8 × 10⁻² = 0.048',
          answer: '0.048',
        },
        {
          id: 4,
          question: 'Write 9.85 × 10⁻⁴ as a decimal.',
          type: 'Hard',
          explaination: 'Move the decimal point 4 places to the left: 9.85 × 10⁻⁴ = 0.000985',
          answer: '0.000985',
        },
      ],
      'writing-in-standard-form': [
        {
          id: 1,
          question: 'Write the value 612.07 in standard index form.',
          type: 'Easy',
          explaination:
            'Move the decimal point 2 places to the left to get a number between 1 and 10: 612.07 = 6.1207 × 10²',
          answer: '6.1207 × 10²',
        },
        {
          id: 2,
          question: 'Write the value 3076.91 in standard index form.',
          type: 'Easy',
          explaination:
            'Move the decimal point 3 places to the left to get a number between 1 and 10: 3076.91 = 3.07691 × 10³',
          answer: '3.07691 × 10³',
        },
        {
          id: 3,
          question: 'Write the value 0.0030617 in standard index form.',
          type: 'Easy',
          explaination:
            'Move the decimal point 3 places to the right to get a number between 1 and 10: 0.0030617 = 3.0617 × 10⁻³',
          answer: '3.0617 × 10⁻³',
        },
        {
          id: 4,
          question: 'Write the value 0.02219 in standard index form.',
          type: 'Easy',
          explaination:
            'Move the decimal point 2 places to the right to get a number between 1 and 10: 0.02219 = 2.219 × 10⁻²',
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
            'Multiply the coefficients: 2 × 3.4 = 6.8. Add the powers: 10⁴⁺³ = 10⁷. Result: 6.8 × 10⁷',
          answer: '6.8 × 10⁷',
        },
        {
          id: 2,
          question:
            'Write (3.2 × 10⁵) × (3 × 10⁶) in standard index form. Do not use a calculator.',
          type: 'Easy',
          explaination:
            'Multiply the coefficients: 3.2 × 3 = 9.6. Add the powers: 10⁵⁺⁶ = 10¹¹. Result: 9.6 × 10¹¹',
          answer: '9.6 × 10¹¹',
        },
        {
          id: 3,
          question: 'Write (5 × 10⁴) × (2 × 10⁻⁵) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination:
            'Multiply the coefficients: 5 × 2 = 10. Add the powers: 10⁴⁺⁽⁻⁵⁾ = 10⁻¹. Then, 10 × 10⁻¹ = 1 × 10⁰ = 1.',
          answer: '1',
        },
        {
          id: 4,
          question:
            'Write (3 × 10⁻²) × (4 × 10⁻⁴) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination:
            'Multiply the coefficients: 3 × 4 = 12. Add the powers: 10⁻²⁺⁽⁻⁴⁾ = 10⁻⁶. Then, 12 × 10⁻⁶ = 1.2 × 10⁻⁵.',
          answer: '1.2 × 10⁻⁵',
        },
      ],
      'squaring-in-standard-form': [
        {
          id: 1,
          question: 'Write (5 × 10¹⁰)² in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination:
            'Square the coefficient: 5² = 25. Square the power of 10: (10¹⁰)² = 10²⁰. Then, 25 × 10²⁰ = 2.5 × 10²¹.',
          answer: '2.5 × 10²¹',
        },
        {
          id: 2,
          question: 'Write (6 × 10⁶)² in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination:
            'Square the coefficient: 6² = 36. Square the power of 10: (10⁶)² = 10¹². Then, 36 × 10¹² = 3.6 × 10¹³.',
          answer: '3.6 × 10¹³',
        },
      ],
      'dividing-in-standard-form': [
        {
          id: 1,
          question: 'Write (6 × 10²) ÷ (3 × 10⁴) in standard index form. Do not use a calculator.',
          type: 'Easy',
          explaination:
            'Divide the coefficients: 6 ÷ 3 = 2. Subtract the powers: 10²⁻⁴ = 10⁻². Result: 2 × 10⁻².',
          answer: '2 × 10⁻²',
        },
        {
          id: 2,
          question: 'Write (8 × 10⁶) ÷ (2 × 10¹⁰) in standard index form. Do not use a calculator.',
          type: 'Easy',
          explaination:
            'Divide the coefficients: 8 ÷ 2 = 4. Subtract the powers: 10⁶⁻¹⁰ = 10⁻⁴. Result: 4 × 10⁻⁴.',
          answer: '4 × 10⁻⁴',
        },
        {
          id: 3,
          question: 'Write (1 × 10⁵) ÷ (2 × 10⁴) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination:
            'Divide the coefficients: 1 ÷ 2 = 0.5. Subtract the powers: 10⁵⁻⁴ = 10¹. Then, 0.5 × 10¹ = 5 × 10⁰ = 5.',
          answer: '5',
        },
        {
          id: 4,
          question: 'Write (2 × 10⁵) ÷ (8 × 10²) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination:
            'Divide the coefficients: 2 ÷ 8 = 0.25. Subtract the powers: 10⁵⁻² = 10³. Then, 0.25 × 10³ = 2.5 × 10².',
          answer: '2.5 × 10²',
        },
        {
          id: 5,
          question:
            'Write (8.4 × 10¹⁴) ÷ (4 × 10³) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination:
            'Divide the coefficients: 8.4 ÷ 4 = 2.1. Subtract the powers: 10¹⁴⁻³ = 10¹¹. Result: 2.1 × 10¹¹.',
          answer: '2.1 × 10¹¹',
        },
        {
          id: 6,
          question:
            'Write (9.3 × 10¹⁵) ÷ (3 × 10⁶) in standard index form. Do not use a calculator.',
          type: 'Medium',
          explaination:
            'Divide the coefficients: 9.3 ÷ 3 = 3.1. Subtract the powers: 10¹⁵⁻⁶ = 10⁹. Result: 3.1 × 10⁹.',
          answer: '3.1 × 10⁹',
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
          explaination: 'Use uₙ = u₁ + (n − 1)d. u₁₂ = 5 + 11 × 4 = 5 + 44 = 49.',
          answer: 'u₁₂ = 49',
        },
        {
          id: 2,
          question: 'Given u₁ = 11 and d = 3, find u₂₀.',
          type: 'Easy',
          explaination: 'u₂₀ = 11 + 19 × 3 = 11 + 57 = 68.',
          answer: 'u₂₀ = 68',
        },
        {
          id: 3,
          question: 'Given u₁ = 13 and d = −7, find u₆.',
          type: 'Easy',
          explaination: 'u₆ = 13 + 5 × (−7) = 13 − 35 = −22.',
          answer: 'u₆ = −22',
        },
        {
          id: 4,
          question: 'Given u₁ = 11 and d = −3, find u₁₈.',
          type: 'Easy',
          explaination: 'u₁₈ = 11 + 17 × (−3) = 11 − 51 = −40.',
          answer: 'u₁₈ = −40',
        },
      ],
      'finding-common-difference': [
        {
          id: 1,
          question: 'Given u₁ = 7 and u₅ = 15, find the common difference d.',
          type: 'Easy',
          explaination:
            'Use uₙ = u₁ + (n − 1)d. u₅ = 7 + 4d. Therefore, 15 = 7 + 4d → 4d = 8 → d = 2.',
          answer: 'd = 2',
        },
        {
          id: 2,
          question: 'Given u₁ = 19 and u₉ = 75, find the common difference d.',
          type: 'Easy',
          explaination:
            'Use uₙ = u₁ + (n − 1)d. u₉ = 19 + 8d. Therefore, 75 = 19 + 8d → 8d = 56 → d = 7.',
          answer: 'd = 7',
        },
        {
          id: 3,
          question: 'Given u₁ = 10 and u₂₁ = 0, find the common difference d.',
          type: 'Easy',
          explaination:
            'Use uₙ = u₁ + (n − 1)d. u₂₁ = 10 + 20d. Therefore, 0 = 10 + 20d → 20d = −10 → d = −0.5.',
          answer: 'd = −0.5',
        },
        {
          id: 4,
          question: 'Given u₁ = 100 and u₉ = 80, find the common difference d.',
          type: 'Easy',
          explaination:
            'Use uₙ = u₁ + (n − 1)d. u₉ = 100 + 8d. Therefore, 80 = 100 + 8d → 8d = −20 → d = −2.5.',
          answer: 'd = −2.5',
        },
      ],
      'finding-first-term-and-common-difference': [
        {
          id: 1,
          question: 'Given u₈ = 12 and u₁₁ = 33, find u₁ and d.',
          type: 'Medium',
          explaination:
            'Use uₙ = u₁ + (n − 1)d. u₁₁ − u₈ = 3d = 33 − 12 = 21, so d = 7. Then u₁ = u₈ − 7d = 12 − 49 = −37.',
          answer: 'd = 7, u₁ = −37',
        },
        {
          id: 2,
          question: 'Given u₇ = 11 and u₁₂ = 56, find u₁ and d.',
          type: 'Medium',
          explaination:
            'Use uₙ = u₁ + (n − 1)d. u₁₂ − u₇ = 5d = 56 − 11 = 45, so d = 9. Then u₁ = u₇ − 6d = 11 − 54 = −43.',
          answer: 'd = 9, u₁ = −43',
        },
      ],
      'formula-for-nth-term': [
        {
          id: 1,
          question:
            'Given u₁ = 8 and d = −3, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination: 'Use uₙ = u₁ + (n − 1)d. uₙ = 8 + (n − 1)(−3) = 8 − 3n + 3 = 11 − 3n.',
          answer: 'uₙ = 11 − 3n',
        },
        {
          id: 2,
          question:
            'Given u₁ = 10 and d = 4, find a formula for the nth term of the arithmetic sequence.',
          type: 'Easy',
          explaination: 'Use uₙ = u₁ + (n − 1)d. uₙ = 10 + (n − 1)(4) = 10 + 4n − 4 = 4n + 6.',
          answer: 'uₙ = 4n + 6',
        },
        {
          id: 3,
          question:
            'Given u₁ = 3 and u₅ = 11, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination:
            'Use u₅ = u₁ + 4d. 11 = 3 + 4d → 4d = 8 → d = 2. Then uₙ = 3 + (n − 1)(2) = 2n + 1.',
          answer: 'uₙ = 2n + 1',
        },
        {
          id: 4,
          question:
            'Given u₁ = 10 and u₁₁ = 50, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination:
            'Use u₁₁ = u₁ + 10d. 50 = 10 + 10d → 10d = 40 → d = 4. Then uₙ = 10 + (n − 1)(4) = 4n + 6.',
          answer: 'uₙ = 4n + 6',
        },
        {
          id: 5,
          question:
            'Given u₂ = 6 and u₅ = 21, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination:
            'Find the common difference: 3d = 21 − 6 = 15 → d = 5. Then u₁ = u₂ − d = 6 − 5 = 1. Therefore, uₙ = 1 + (n − 1)(5) = 5n − 4.',
          answer: 'uₙ = 5n − 4',
        },
        {
          id: 6,
          question:
            'Given u₃ = 14 and u₆ = −15, find a formula for the nth term of the arithmetic sequence.',
          type: 'Hard',
          explaination:
            'Find the common difference: 3d = −15 − 14 = −29 → d = −29/3. Then u₁ = u₃ − 2d = 14 − 2(−29/3) = 100/3. Therefore, uₙ = 100/3 + (n − 1)(−29/3) = (129 − 29n)/3.',
          answer: 'uₙ = (129 − 29n)/3',
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
          explaination:
            'Use the compound interest formula FV = PV(1 + r)ⁿ. FV = 2000 × (1 + 0.06)³ = 2000 × 1.191016 = $2382.03.',
          answer: '$2382.03',
        },
        {
          id: 2,
          question:
            'Find the final value of the investment: $3000 invested at 4% compounded annually for 18 years.',
          type: 'Easy',
          explaination:
            'Use the compound interest formula FV = PV(1 + r)ⁿ. FV = 3000 × (1.04)¹⁸ ≈ 3000 × 2.02582 = $6077.45.',
          answer: '$6077.45',
        },
        {
          id: 3,
          question:
            'Find the final value of the investment: $500 invested at 2.5% compounded quarterly for 6 years.',
          type: 'Easy',
          explaination:
            'For quarterly compounding, use FV = PV(1 + r/k)ⁿᵏ. FV = 500 × (1 + 0.025/4)²⁴ = 500 × (1.00625)²⁴ ≈ $580.95.',
          answer: '$580.95',
        },
        {
          id: 4,
          question:
            'Find the final value of the investment: $100 invested at 3.5% compounded twice-yearly for 10 years.',
          type: 'Easy',
          explaination:
            'For twice-yearly compounding, use FV = PV(1 + r/k)ⁿᵏ. FV = 100 × (1 + 0.035/2)²⁰ = 100 × (1.0175)²⁰ ≈ $141.48.',
          answer: '$141.48',
        },
        {
          id: 5,
          question:
            'Find the final value of the investment: $5000 invested at 5% compounded monthly for 60 months.',
          type: 'Easy',
          explaination:
            'For monthly compounding, use FV = PV(1 + r/12)ⁿ, where n is the total number of months. FV = 5000 × (1 + 0.05/12)⁶⁰ ≈ $6416.79.',
          answer: '$6416.79',
        },
        {
          id: 6,
          question:
            'Find the final value of the investment: $800 invested at 4% compounded monthly for 100 months.',
          type: 'Easy',
          explaination:
            'For monthly compounding, use FV = PV(1 + r/12)ⁿ. FV = 800 × (1 + 0.04/12)¹⁰⁰ ≈ $1116.39.',
          answer: '$1116.39',
        },
      ],
      'time-to-reach-a-target-value': [
        {
          id: 1,
          question:
            'Find how long is required to achieve the given final value: $100 invested at 5% compounded annually. £1000 is required.',
          type: 'Medium',
          explaination:
            'Use the compound interest formula FV = PV(1 + r)ⁿ. 100 × (1.05)ⁿ = 1000 → (1.05)ⁿ = 10. Taking logarithms, n = ln(10) / ln(1.05) ≈ 47.6 years. Treat both currency symbols as the same unit.',
          answer: 'n ≈ 47.6 years',
        },
        {
          id: 2,
          question:
            'Find how long is required to achieve the given final value: $500 invested at 4% compounded annually. £600 is required.',
          type: 'Easy',
          explaination:
            'Use the compound interest formula FV = PV(1 + r)ⁿ. 500 × (1.04)ⁿ = 600 → (1.04)ⁿ = 1.2. Taking logarithms, n = ln(1.2) / ln(1.04) ≈ 4.64 years. Treat both currency symbols as the same unit.',
          answer: 'n ≈ 4.64 years',
        },
        {
          id: 3,
          question:
            'Find how long is required to achieve the given final value: $300 invested at 2% compounded monthly. £400 is required.',
          type: 'Medium',
          explaination:
            'For monthly compounding, use FV = PV(1 + r/12)ⁿ, where n is the number of months. 300 × (1 + 0.02/12)ⁿ = 400 → n = ln(4/3) / ln(1 + 0.02/12) ≈ 172.1 months. Converting to years, 172.1 / 12 ≈ 14.3 years. Treat both currency symbols as the same unit.',
          answer: 'n ≈ 172.1 months ≈ 14.3 years',
        },
        {
          id: 4,
          question:
            'Find how long is required to achieve the given final value: $1000 invested at 1.5% compounded monthly. £1100 is required.',
          type: 'Medium',
          explaination:
            'For monthly compounding, use FV = PV(1 + r/12)ⁿ, where n is the number of months. 1000 × (1 + 0.015/12)ⁿ = 1100. Taking logarithms, n = ln(1.1) / ln(1 + 0.015/12) ≈ 76.3 months. Converting to years, 76.3 / 12 ≈ 6.4 years. Treat both currency symbols as the same unit.',
          answer: 'n ≈ 76.3 months ≈ 6.4 years',
        },
      ],
      'finding-the-interest-rate': [
        {
          id: 1,
          question:
            'Find the annual interest rate required (compounded annually): €500 invested for 10 years. €1000 is required.',
          type: 'Medium',
          explaination:
            'Use the compound interest formula FV = PV(1 + r)ⁿ. 500(1 + r)¹⁰ = 1000 → (1 + r)¹⁰ = 2 → 1 + r = 2^(1/10). Therefore, r = 2^(0.1) − 1 ≈ 0.0718 = 7.18%.',
          answer: 'r ≈ 7.18%',
        },
        {
          id: 2,
          question:
            'Find the annual interest rate required (compounded annually): €500 invested for 10 years. €800 is required.',
          type: 'Medium',
          explaination:
            'Use the compound interest formula FV = PV(1 + r)ⁿ. 500(1 + r)¹⁰ = 800 → (1 + r)¹⁰ = 1.6 → 1 + r = 1.6^(1/10). Therefore, r = 1.6^(0.1) − 1 ≈ 0.0481 = 4.81%.',
          answer: 'r ≈ 4.81%',
        },
        {
          id: 3,
          question:
            'Find the annual interest rate required (compounded annually): €100 invested for 5 years. €200 is required.',
          type: 'Medium',
          explaination:
            'Use the compound interest formula FV = PV(1 + r)ⁿ. 100(1 + r)⁵ = 200 → (1 + r)⁵ = 2 → 1 + r = 2^(1/5). Therefore, r = 2^(1/5) − 1 ≈ 0.1487 = 14.87%.',
          answer: 'r ≈ 14.87%',
        },
        {
          id: 4,
          question:
            'Find the annual interest rate required (compounded annually): €100 invested for 10 years. €200 is required.',
          type: 'Medium',
          explaination:
            'Use the compound interest formula FV = PV(1 + r)ⁿ. 100(1 + r)¹⁰ = 200 → (1 + r)¹⁰ = 2 → 1 + r = 2^(1/10). Therefore, r = 2^(0.1) − 1 ≈ 0.0718 = 7.18%.',
          answer: 'r ≈ 7.18%',
        },
      ],
      depreciation: [
        {
          id: 1,
          question:
            'Find the final value of an asset after the given depreciation (compounded annually): Initial value $1200, annual depreciation 10% for 10 years.',
          type: 'Easy',
          explaination:
            'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 1200 × (1 − 0.10)¹⁰ = 1200 × (0.9)¹⁰ ≈ $418.42.',
          answer: '$418.42',
        },
        {
          id: 2,
          question:
            'Find the final value of an asset after the given depreciation (compounded annually): Initial value $1200, annual depreciation 20% for 10 years.',
          type: 'Easy',
          explaination:
            'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 1200 × (1 − 0.20)¹⁰ = 1200 × (0.8)¹⁰ ≈ $128.85.',
          answer: '$128.85',
        },
        {
          id: 3,
          question:
            'Find the final value of an asset after the given depreciation (compounded annually): Initial value £30,000, annual depreciation 15% for 5 years.',
          type: 'Easy',
          explaination:
            'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 30000 × (1 − 0.15)⁵ = 30000 × (0.85)⁵ ≈ £13,311.22.',
          answer: '£13,311.22',
        },
        {
          id: 4,
          question:
            'Find the final value of an asset after the given depreciation (compounded annually): Initial value £30,000, annual depreciation 25% for 5 years.',
          type: 'Easy',
          explaination:
            'Use the depreciation formula FV = PV(1 − r)ⁿ. FV = 30000 × (1 − 0.25)⁵ = 30000 × (0.75)⁵ ≈ £7,119.14.',
          answer: '£7,119.14',
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
          question: 'Simplify: a) x² × x⁴  b) x⁵ × x⁷',
          type: 'Easy',
          explaination: 'Use the index law aᵐ × aⁿ = aᵐ⁺ⁿ. a) x²⁺⁴ = x⁶. b) x⁵⁺⁷ = x¹².',
          answer: 'a) x⁶  b) x¹²',
        },
        {
          id: 2,
          question: 'Simplify: a) y³ × y³  b) z⁵ × z⁵',
          type: 'Easy',
          explaination:
            'When multiplying powers with the same base, add the exponents. a) y³⁺³ = y⁶. b) z⁵⁺⁵ = z¹⁰.',
          answer: 'a) y⁶  b) z¹⁰',
        },
        {
          id: 3,
          question: 'Simplify: a) a⁶ × a  b) a¹⁰ × a',
          type: 'Easy',
          explaination:
            'Recall that a = a¹. Add the exponents when multiplying powers with the same base. a) a⁶⁺¹ = a⁷. b) a¹⁰⁺¹ = a¹¹.',
          answer: 'a) a⁷  b) a¹¹',
        },
        {
          id: 4,
          question: 'Simplify (do not evaluate): a) 5⁷ × 5¹⁰  b) 2¹² × 2¹²',
          type: 'Easy',
          explaination:
            'Use the index law aᵐ × aⁿ = aᵐ⁺ⁿ. a) 5⁷⁺¹⁰ = 5¹⁷. b) 2¹²⁺¹² = 2²⁴. Leave the answers in index form without evaluating.',
          answer: 'a) 5¹⁷  b) 2²⁴',
        },
      ],
      'laws-of-indices-power-of-a-power': [
        {
          id: 1,
          question: 'Simplify: a) (x³)⁵  b) (x⁴)⁸',
          type: 'Easy',
          explaination:
            'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (x³)⁵ = x³ˣ⁵ = x¹⁵. b) (x⁴)⁸ = x⁴ˣ⁸ = x³².',
          answer: 'a) x¹⁵  b) x³²',
        },
        {
          id: 2,
          question: 'Simplify: a) (y⁴)⁴  b) (z⁵)⁵',
          type: 'Easy',
          explaination:
            'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (y⁴)⁴ = y⁴ˣ⁴ = y¹⁶. b) (z⁵)⁵ = z⁵ˣ⁵ = z²⁵.',
          answer: 'a) y¹⁶  b) z²⁵',
        },
        {
          id: 3,
          question: 'Simplify: a) (c⁷)²  b) (c²)⁷',
          type: 'Easy',
          explaination:
            'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (c⁷)² = c⁷ˣ² = c¹⁴. b) (c²)⁷ = c²ˣ⁷ = c¹⁴. Both expressions have the same answer because 7 × 2 = 2 × 7.',
          answer: 'a) c¹⁴  b) c¹⁴',
        },
        {
          id: 4,
          question: 'Simplify (do not evaluate): a) (3⁵)¹⁰  b) (13⁷)⁴',
          type: 'Easy',
          explaination:
            'Use the index law (aᵐ)ⁿ = aᵐⁿ. a) (3⁵)¹⁰ = 3⁵ˣ¹⁰ = 3⁵⁰. b) (13⁷)⁴ = 13⁷ˣ⁴ = 13²⁸. Leave the answers in index form without evaluating.',
          answer: 'a) 3⁵⁰  b) 13²⁸',
        },
      ],
      'laws-of-indices-coefficient-variable-combined': [
        {
          id: 1,
          question: 'Simplify: a) 12x² × 4x⁵  b) 3x⁴ × 5x³',
          type: 'Easy',
          explaination:
            'Multiply the coefficients and add the indices of variables with the same base. a) (12 × 4)x²⁺⁵ = 48x⁷. b) (3 × 5)x⁴⁺³ = 15x⁷.',
          answer: 'a) 48x⁷  b) 15x⁷',
        },
        {
          id: 2,
          question: 'Simplify: a) a × 3a²  b) b² × 5b²',
          type: 'Easy',
          explaination:
            'Recall that a = a¹. Multiply the coefficients and add the indices of variables with the same base. a) 3 × a¹⁺² = 3a³. b) 5 × b²⁺² = 5b⁴.',
          answer: 'a) 3a³  b) 5b⁴',
        },
      ],
      'laws-of-indices-multi-variable': [
        {
          id: 1,
          question: 'Simplify: a) 5x²yz × 4x³y²  b) 6x⁷yz² × 2xz³',
          type: 'Medium',
          explaination:
            'Multiply the coefficients and add the indices of variables with the same base. a) (5 × 4)x²⁺³y¹⁺²z = 20x⁵y³z. b) (6 × 2)x⁷⁺¹yz²⁺³ = 12x⁸yz⁵.',
          answer: 'a) 20x⁵y³z  b) 12x⁸yz⁵',
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
          question: 'Without using a calculator, find the exact value of: log 10',
          type: 'Easy',
          explaination: 'log 10 = 1 since 10¹ = 10.',
          answer: '1',
        },
        {
          id: 2,
          question: 'Without using a calculator, find the exact value of: log 100',
          type: 'Easy',
          explaination: 'log 100 = 2 since 10² = 100.',
          answer: '2',
        },
        {
          id: 3,
          question: 'Without using a calculator, find the exact value of: log 100,000',
          type: 'Easy',
          explaination: 'Since 100,000 = 10⁵, log 10⁵ = 5.',
          answer: '5',
        },
        {
          id: 4,
          question: 'Without using a calculator, find the exact value of: log 1,000,000',
          type: 'Easy',
          explaination: 'Since 1,000,000 = 10⁶, log 10⁶ = 6.',
          answer: '6',
        },
        {
          id: 5,
          question: 'Without using a calculator, find the exact value of: log 1',
          type: 'Easy',
          explaination: 'log 1 = 0 since 10⁰ = 1.',
          answer: '0',
        },
        {
          id: 6,
          question: 'Without using a calculator, find the exact value of: log 0.1',
          type: 'Easy',
          explaination: 'Since 0.1 = 10⁻¹, log 0.1 = -1.',
          answer: '-1',
        },
        {
          id: 7,
          question: 'Without using a calculator, find the exact value of: log 0.01',
          type: 'Easy',
          explaination: 'Since 0.01 = 10⁻², log 0.01 = -2.',
          answer: '-2',
        },
        {
          id: 8,
          question: 'Without using a calculator, find the exact value of: log 0.0001',
          type: 'Easy',
          explaination: 'Since 0.0001 = 10⁻⁴, log 0.0001 = -4.',
          answer: '-4',
        },
      ],
      'solving-logarithmic-equations': [
        {
          id: 1,
          question: 'Without using a calculator, find the exact value of x: log x = 2',
          type: 'Easy',
          explaination: 'log x = 2 ⇒ x = 10² = 100.',
          answer: 'x = 100',
        },
        {
          id: 2,
          question: 'Without using a calculator, find the exact value of x: log x = 3',
          type: 'Easy',
          explaination: 'log x = 3 ⇒ x = 10³ = 1000.',
          answer: 'x = 1000',
        },
        {
          id: 3,
          question: 'Without using a calculator, find the exact value of x: log(2x - 4) = 5',
          type: 'Medium',
          explaination: '2x - 4 = 10⁵ = 100000. Therefore, 2x = 100004 and x = 50002.',
          answer: 'x = 50002',
        },
        {
          id: 4,
          question: 'Without using a calculator, find the exact value of x: log(3x + 4) = 3',
          type: 'Medium',
          explaination: '3x + 4 = 10³ = 1000. Therefore, 3x = 996 and x = 332.',
          answer: 'x = 332',
        },
        {
          id: 5,
          question: 'Without using a calculator, find the exact value of x: log(2x - 3) = -1',
          type: 'Medium',
          explaination: '2x - 3 = 10⁻¹ = 0.1. Therefore, 2x = 3.1 and x = 1.55 = 31/20.',
          answer: 'x = 31/20',
        },
        {
          id: 6,
          question: 'Without using a calculator, find the exact value of x: log(x + 2) = -2',
          type: 'Medium',
          explaination: 'x + 2 = 10⁻² = 0.01. Therefore, x = 0.01 - 2 = -1.99 = -199/100.',
          answer: 'x = -199/100',
        },
      ],
      'natural-logarithm-rearranging': [
        {
          id: 1,
          question: 'Rearrange the equation to find an expression for x: ln x = 2',
          type: 'Easy',
          explaination: 'ln x = 2 ⇒ x = e².',
          answer: 'x = e²',
        },
        {
          id: 2,
          question: 'Rearrange the equation to find an expression for x: ln x = 5',
          type: 'Easy',
          explaination: 'ln x = 5 ⇒ x = e⁵.',
          answer: 'x = e⁵',
        },
        {
          id: 3,
          question: 'Rearrange the equation to find an expression for x: ln x = y + 1',
          type: 'Easy',
          explaination: 'ln x = y + 1 ⇒ x = eʸ⁺¹.',
          answer: 'x = e^(y + 1)',
        },
        {
          id: 4,
          question: 'Rearrange the equation to find an expression for x: ln x = y²',
          type: 'Easy',
          explaination: 'ln x = y² ⇒ x = eʸ².',
          answer: 'x = e^(y²)',
        },
        {
          id: 5,
          question: 'Rearrange the equation to find an expression for x: ln(2x + 4) = y - 3',
          type: 'Medium',
          explaination:
            '2x + 4 = e^(y - 3). Therefore, 2x = e^(y - 3) - 4, so x = (e^(y - 3) - 4)/2.',
          answer: 'x = (e^(y - 3) - 4)/2',
        },
        {
          id: 6,
          question: 'Rearrange the equation to find an expression for x: ln((1/2)x - 6) = 2y + 1',
          type: 'Medium',
          explaination:
            '(1/2)x - 6 = e^(2y + 1). Therefore, (1/2)x = e^(2y + 1) + 6, so x = 2e^(2y + 1) + 12.',
          answer: 'x = 2e^(2y + 1) + 12',
        },
      ],
      'simplifying-logarithmic-expressions': [
        {
          id: 1,
          question: 'Simplify the expression: log x + 4 log x',
          type: 'Easy',
          explaination: 'Collect like terms: (1 + 4) log x = 5 log x.',
          answer: '5 log x',
        },
        {
          id: 2,
          question: 'Simplify the expression: 10 log x - 5 log x',
          type: 'Easy',
          explaination: 'Collect like terms: (10 - 5) log x = 5 log x.',
          answer: '5 log x',
        },
        {
          id: 3,
          question: 'Simplify the expression: 2(log 3x)² / log 3x',
          type: 'Medium',
          explaination:
            'Cancel one factor of log 3x: 2(log 3x)² / log 3x = 2 log 3x, assuming log 3x ≠ 0.',
          answer: '2 log 3x',
        },
        {
          id: 4,
          question: 'Simplify the expression: log 2x / (log 2x)²',
          type: 'Medium',
          explaination:
            'Cancel one factor of log 2x: log 2x / (log 2x)² = 1 / log 2x, assuming log 2x ≠ 0.',
          answer: '1 / log 2x',
        },
        {
          id: 5,
          question: 'Simplify the expression: (ln x + (ln x)²) / ln x - ln x',
          type: 'Hard',
          explaination:
            '(ln x + (ln x)²) / ln x = 1 + ln x. Therefore, (1 + ln x) - ln x = 1, assuming ln x ≠ 0 (x ≠ 1).',
          answer: '1',
        },
        {
          id: 6,
          question: 'Simplify the expression: (ln x - (ln x)³) / (ln x)² + ln x',
          type: 'Hard',
          explaination:
            'Factor the numerator: ln x(1 - (ln x)²) / (ln x)² + ln x = (1 - (ln x)²) / ln x + ln x. Combining the terms gives [1 - (ln x)² + (ln x)²] / ln x = 1 / ln x, assuming ln x ≠ 0 (x > 0 and x ≠ 1).',
          answer: '1 / ln x',
        },
      ],
    },
  },
]

export function findTopic(topicSlug: string) {
  return topics.find((topic) => topic.slug === topicSlug)
}

export function findSubtopic(topicSlug: string, subtopicSlug: string) {
  const topic = findTopic(topicSlug)

  const subtopic = topic?.subtopics.find((item) => item.slug === subtopicSlug)

  return topic && subtopic ? { topic, subtopic } : undefined
}
