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
//     title: 'Counting and Probability',
//     slug: 'counting-and-probability',
//     description: 'Explore number systems, sequences, series, exponents and algebraic methods.',
//     subtopics: [
//       {
//         title: 'Multiplication Principle',
//         slug: 'multiplication-principle',
//         description:
//           'Learn how to express very large and very small numbers in standard form using powers of 10.',
//       },
//       {
//         title: 'Addition Principle',
//         slug: 'addition-principle',
//         description:
//           'Practise converting ordinary numbers into standard form and expressing numbers using powers of 10.',
//       },
//       {
//         title: 'Multiplication & Addition Principles',
//         slug: 'Multiplication-Addition-Principles',
//         description:
//           'Learn how to multiply numbers in standard form using the laws of indices and express answers in standard form.',
//       },
//       {
//         title: 'Permutations',
//         slug: 'permutations',
//         description:
//           'Practise squaring numbers in standard form by squaring the coefficient and multiplying the exponent by 2.',
//       },
//     ],
//   },
//   {
//     title: 'Binomial Series',
//     slug: 'binomial-series',
//     description: 'Explore number systems, sequences, series, exponents and algebraic methods.',
//     subtopics: [
//       {
//         title: 'Binomial Expansion – applications & approximations',
//         slug: 'binomial-expansion-applications-and-approximations',
//         description:
//           'Learn how to express very large and very small numbers in standard form using powers of 10.',
//       },
//       {
//         title: 'Binomial Series – coefficient problems',
//         slug: 'binomial-series-coefficient-problems',
//         description:
//           'Practise converting ordinary numbers into standard form and expressing numbers using powers of 10.',
//       },
//       {
//         title: 'Binomial Expansion of (1+x)^n, |x|<1',
//         slug: 'binomial-expansion',
//         description:
//           'Learn how to multiply numbers in standard form using the laws of indices and express answers in standard form.',
//       },
//       {
//         title: 'Binomial Expansion – factoring out constant',
//         slug: 'binomial-expansion-factoring-out-constant',
//         description:
//           'Practise squaring numbers in standard form by squaring the coefficient and multiplying the exponent by 2.',
//       },
//     ],
//   },
//   {
//     title: 'Complex Numbers',
//     slug: 'complex-numbers',
//     description: 'Explore number systems, sequences, series, exponents and algebraic methods.',
//     subtopics: [
//       {
//         title: 'Modulus–Argument Form',
//         slug: 'modulus-argument-form',
//         description:
//           'Learn how to express very large and very small numbers in standard form using powers of 10.',
//       },
//       {
//         title: 'Euler Form',
//         slug: 'euler-form',
//         description:
//           'Practise converting ordinary numbers into standard form and expressing numbers using powers of 10.',
//       },
//       {
//         title: "De Moivre's Theorem – Evaluation",
//         slug: 'De-Moivres-theorem-evaluation',
//         description:
//           'Learn how to multiply numbers in standard form using the laws of indices and express answers in standard form.',
//       },
//       {
//         title: 'nth Roots – Geometric Interpretation',
//         slug: 'nth-roots-geometric-interpretation',
//         description:
//           'Practise squaring numbers in standard form by squaring the coefficient and multiplying the exponent by 2.',
//       },
//     ],
//   },
//   {
//     title: 'Vectors',
//     slug: 'vectors',
//     description: 'Explore number systems, sequences, series, exponents and algebraic methods.',
//     subtopics: [
//       {
//         title: 'Scalar Product',
//         slug: 'scalar-product',
//         description:
//           'Learn how to express very large and very small numbers in standard form using powers of 10.',
//       },
//       {
//         title: 'Angle Between Vectors',
//         slug: 'angle-between-vectors',
//         description:
//           'Practise converting ordinary numbers into standard form and expressing numbers using powers of 10.',
//       },
//       {
//         title: 'Vector equation of a line',
//         slug: 'vector-equation-of-a-line',
//         description:
//           'Learn how to multiply numbers in standard form using the laws of indices and express answers in standard form.',
//       },
//       {
//         title: 'Cross Product – Scalar Triple Product',
//         slug: 'cross-Pproduct-scalar-triple-product',
//         description:
//           'Practise squaring numbers in standard form by squaring the coefficient and multiplying the exponent by 2.',
//       },
//     ],
//   },
//   {
//     title: 'Calculus',
//     slug: 'calculus',
//     description: 'Explore number systems, sequences, series, exponents and algebraic methods.',
//     subtopics: [
//       {
//         title: 'Limits',
//         slug: 'limits',
//         description:
//           'Learn how to express very large and very small numbers in standard form using powers of 10.',
//       },
//       {
//         title: 'Implicit Differentiation',
//         slug: 'implicit-differentiation',
//         description:
//           'Learn how to multiply numbers in standard form using the laws of indices and express answers in standard form.',
//       },
//       {
//         title: 'Integration by Parts',
//         slug: 'integration-by-parts',
//         description:
//           'Practise converting ordinary numbers into standard form and expressing numbers using powers of 10.',
//       },
//       {
//         title: 'Reduction Formula',
//         slug: 'reduction-formula',
//         description:
//           'Practise squaring numbers in standard form by squaring the coefficient and multiplying the exponent by 2.',
//       },
//     ],
//   },
// ]
export const topics: Topic[] = [
  {
    title: 'Counting and Probability',
    slug: 'counting-and-probability',
    description:
      'Learn counting techniques, permutations, and probability principles to solve problems involving possible outcomes and events.',
    subtopics: [
      {
        title: 'Multiplication Principle',
        slug: 'multiplication-principle',
        description:
          'Learn how to count possible outcomes when a process involves multiple successive stages or choices.',
      },
      {
        title: 'Addition Principle',
        slug: 'addition-principle',
        description:
          'Understand how to count possible outcomes by adding the numbers of choices across mutually exclusive cases.',
      },
      {
        title: 'Multiplication & Addition Principles',
        slug: 'Multiplication-Addition-Principles',
        description:
          'Combine the multiplication and addition principles to solve counting problems involving multiple stages and alternative cases.',
      },
      {
        title: 'Permutations',
        slug: 'permutations',
        description:
          'Explore permutations to calculate the number of possible ordered arrangements of objects, including arrangements with restrictions.',
      },
    ],
  },
  {
    title: 'Binomial Series',
    slug: 'binomial-series',
    description:
      'Explore binomial expansions and infinite series to determine coefficients, expand expressions, and solve approximation problems.',
    subtopics: [
      {
        title: 'Binomial Expansion – applications & approximations',
        slug: 'binomial-expansion-applications-and-approximations',
        description:
          'Apply binomial expansions to estimate numerical values, simplify expressions, and solve approximation problems.',
      },
      {
        title: 'Binomial Series – coefficient problems',
        slug: 'binomial-series-coefficient-problems',
        description:
          'Find unknown coefficients and specific terms in binomial expansions and series using algebraic techniques.',
      },
      {
        title: 'Binomial Expansion of (1+x)^n, |x|<1',
        slug: 'binomial-expansion',
        description:
          'Expand (1 + x)^n as a binomial series for |x| < 1 and identify its terms and coefficients.',
      },
      {
        title: 'Binomial Expansion – factoring out constant',
        slug: 'binomial-expansion-factoring-out-constant',
        description:
          'Factor out constants and rewrite expressions into a suitable form before applying binomial expansion techniques.',
      },
    ],
  },
  {
    title: 'Complex Numbers',
    slug: 'complex-numbers',
    description:
      'Study complex numbers using Cartesian, modulus–argument, and Euler forms, and apply complex-number theorems to solve mathematical problems.',
    subtopics: [
      {
        title: 'Modulus–Argument Form',
        slug: 'modulus-argument-form',
        description:
          'Represent complex numbers using their modulus and argument, and convert between Cartesian and modulus–argument forms.',
      },
      {
        title: 'Euler Form',
        slug: 'euler-form',
        description:
          'Express complex numbers in Euler form using the exponential representation and apply it to complex-number calculations.',
      },
      {
        title: "De Moivre's Theorem – Evaluation",
        slug: 'De-Moivres-theorem-evaluation',
        description:
          'Apply De Moivre’s theorem to evaluate powers of complex numbers and simplify expressions involving modulus and argument.',
      },
      {
        title: 'nth Roots – Geometric Interpretation',
        slug: 'nth-roots-geometric-interpretation',
        description:
          'Calculate the nth roots of complex numbers and interpret their positions and geometric relationships on the Argand diagram.',
      },
    ],
  },
  {
    title: 'Vectors',
    slug: 'vectors',
    description:
      'Explore vector operations, scalar and cross products, angles between vectors, and vector equations of lines to solve geometric problems.',
    subtopics: [
      {
        title: 'Scalar Product',
        slug: 'scalar-product',
        description:
          'Calculate the scalar product of vectors and use it to determine angles, perpendicularity, and geometric relationships.',
      },
      {
        title: 'Angle Between Vectors',
        slug: 'angle-between-vectors',
        description:
          'Find the angle between two vectors using the scalar product formula and interpret the result geometrically.',
      },
      {
        title: 'Vector equation of a line',
        slug: 'vector-equation-of-a-line',
        description:
          'Construct and use vector equations of lines to describe their positions, directions, intersections, and relationships in space.',
      },
      {
        title: 'Cross Product – Scalar Triple Product',
        slug: 'cross-Pproduct-scalar-triple-product',
        description:
          'Use cross products and scalar triple products to calculate vector quantities, determine areas and volumes, and test coplanarity.',
      },
    ],
  },
  {
    title: 'Calculus',
    slug: 'calculus',
    description:
      'Develop calculus skills through limits, implicit differentiation, integration techniques, and reduction formulae for solving advanced mathematical problems.',
    subtopics: [
      {
        title: 'Limits',
        slug: 'limits',
        description:
          'Evaluate limits algebraically and understand how functions behave as their inputs approach particular values.',
      },
      {
        title: 'Implicit Differentiation',
        slug: 'implicit-differentiation',
        description:
          'Differentiate equations involving multiple variables using implicit differentiation and apply the chain rule to find derivatives.',
      },
      {
        title: 'Integration by Parts',
        slug: 'integration-by-parts',
        description:
          'Apply integration by parts to evaluate integrals involving products of functions and choose suitable terms for simplification.',
      },
      {
        title: 'Reduction Formula',
        slug: 'reduction-formula',
        description:
          'Derive and apply reduction formulae to express complex integrals in terms of simpler integrals that can be evaluated systematically.',
      },
    ],
  },
]

export const AASLQuestionAndAnswer = [
  {
    'counting-and-probability': {
      title: 'Counting and Probability',
      'multiplication-principle': [
        {
          id: 1,
          question:
            '(a) Find the number of ways of choosing one item from a list of eight AND one item from a different list of five.  (b) Find the number of ways of choosing one item from a list of seven AND one item from a different list of four.',
          type: 'Easy',
          explaination:
            '(a) Apply the multiplication principle: 8 × 5 = 40.  (b) Apply the multiplication principle: 7 × 4 = 28.',
          answer: '(a) 40  (b) 28',
        },
      ],
      'addition-principle': [
        {
          id: 1,
          question:
            '(a) Find the number of ways of choosing one item from a list of eight OR one item from a different list of five.  (b) Find the number of ways of choosing one item from a list of seven OR one item from a different list of four.',
          type: 'Easy',
          explaination:
            '(a) Apply the addition principle: 8 + 5 = 13.  (b) Apply the addition principle: 7 + 4 = 11.',
          answer: '(a) 13  (b) 11',
        },
      ],
      'Multiplication-Addition-Principles': [
        {
          id: 1,
          question:
            '(a) Find the number of ways of choosing one item from EACH of a list of eight, a list of five and a list of seven.  (b) Find the number of ways of choosing one item from EITHER a list of eight, a list of five OR a list of seven.',
          type: 'Easy',
          explaination:
            '(a) Apply the multiplication principle: 8 × 5 × 7 = 280.  (b) Apply the addition principle: 8 + 5 + 7 = 20.',
          answer: '(a) 280  (b) 20',
        },
      ],
      permutations: [
        {
          id: 1,
          question: 'Find the number of permutations of: (a) nine items  (b) six items.',
          type: 'Easy',
          explaination:
            'Use n! for the number of permutations of n items. (a) 9! = 362,880.  (b) 6! = 720.',
          answer: '(a) 362,880  (b) 720',
        },
        {
          id: 2,
          question:
            '(a) Find the number of permutations of four items followed by five different items.  (b) Find the number of permutations of ten items followed by three different items.',
          type: 'Easy',
          explaination:
            'Two independent groups, so multiply their factorials. (a) 4! × 5! = 24 × 120 = 2,880.  (b) 10! × 3! = 3,628,800 × 6 = 21,772,800.',
          answer: '(a) 2,880  (b) 21,772,800',
        },
        {
          id: 3,
          question:
            '(a) Find the number of permutations of either two items followed by five, or three items followed by four.  (b) Find the number of permutations of either three items followed by seven, or four items followed by six.',
          type: 'Easy',
          explaination:
            'Two mutually exclusive cases, so add the products. (a) 2! × 5! + 3! × 4! = 2 × 120 + 6 × 24 = 240 + 144 = 384.  (b) 3! × 7! + 4! × 6! = 6 × 5,040 + 24 × 720 = 30,240 + 17,280 = 47,520.',
          answer: '(a) 384  (b) 47,520',
        },
      ],
    },
  },
  {
    'binomial-series': {
      title: 'Binomial Series',
      'binomial-expansion-applications-and-approximations': [
        {
          id: 1,
          question:
            'a) Find the first three terms in ascending powers of x in the expansion of √(9 + x).  b) Find the values of x for which the expansion is valid.  c) By substituting an appropriate value of x into the expansion in part a, find an approximation to √10 to five decimal places.',
          type: 'Medium',
          explaination:
            'a) √(9 + x) = 3(1 + x/9)^(1/2) = 3(1 + x/18 − x²/648 + …) = 3 + x/6 − x²/216.  b) The expansion is valid when |x/9| < 1, so |x| < 9.  c) Set 9 + x = 10, so x = 1, which lies within |x| < 9. Substituting: 3 + 1/6 − 1/216 ≈ 3.16204. (The true value is √10 ≈ 3.16228; more terms are needed for full five-decimal accuracy.)',
          answer: 'a) 3 + x/6 − x²/216  b) −9 < x < 9  c) √10 ≈ 3.16204',
        },
        {
          id: 2,
          question:
            'a) Find the first three terms in ascending powers of x in the expansion of ∛(8 − 3x).  b) Find the values of x for which the expansion is valid.  c) By substituting an appropriate value of x into the expansion in part a, find an approximation to ∛5 to five decimal places.',
          type: 'Medium',
          explaination:
            'a) ∛(8 − 3x) = 2(1 − 3x/8)^(1/3) = 2(1 + (1/3)(−3x/8) + [(1/3)(−2/3)/2](9x²/64) + …) = 2(1 − x/8 − x²/64 + …) = 2 − x/4 − x²/32.  b) The expansion is valid when |3x/8| < 1, so |x| < 8/3.  c) Set 8 − 3x = 5, so x = 1, which lies within |x| < 8/3. Substituting: 2 − 1/4 − 1/32 = 1.71875. (The true value is ∛5 ≈ 1.70998; more terms are needed for full five-decimal accuracy.)',
          answer: 'a) 2 − x/4 − x²/32  b) −8/3 < x < 8/3  c) ∛5 ≈ 1.71875',
        },
        {
          id: 3,
          question:
            'a) Find the first three terms in ascending powers of x in the expansion of x(1 + 3x)⁻².  b) Find the values of x for which the expansion is valid.',
          type: 'Medium',
          explaination:
            'a) (1 + 3x)⁻² = 1 + (−2)(3x) + [(−2)(−3)/2](3x)² + … = 1 − 6x + 27x² + … Multiply the entire expansion by x: x − 6x² + 27x³.  b) The expansion is valid when |3x| < 1, so |x| < 1/3.',
          answer: 'a) x − 6x² + 27x³  b) −1/3 < x < 1/3',
        },
        {
          id: 4,
          question: 'Find the first three terms in the expansion of (1 + x)/(1 − x).',
          type: 'Medium',
          explaination:
            'Write as (1 + x)(1 − x)⁻¹. Expand (1 − x)⁻¹ = 1 + x + x² + … Then multiply by (1 + x): (1 + x + x²) + (x + x²) + … = 1 + 2x + 2x² + …',
          answer: '1 + 2x + 2x²',
        },
        {
          id: 5,
          question: 'Find the coefficient of x² in the expansion of (1 + 6x)^(1/4)(2 + x).',
          type: 'Hard',
          explaination:
            '(1 + 6x)^(1/4) = 1 + (1/4)(6x) + [(1/4)(−3/4)/2!](6x)² + … = 1 + 3x/2 − 27x²/8 + … Multiply by (2 + x) and collect the x² terms: 2 × (−27/8) + 1 × (3/2) = −27/4 + 6/4 = −21/4.',
          answer: '−21/4',
        },
        {
          id: 6,
          question: 'Find the coefficient of x² in the expansion of ((1 + x)/(1 + 2x))².',
          type: 'Hard',
          explaination:
            'Write as (1 + x)²(1 + 2x)⁻². (1 + 2x)⁻² = 1 − 4x + 12x² − … and (1 + x)² = 1 + 2x + x². Collect the x² terms: 1(12) + 2(−4) + 1(1) = 12 − 8 + 1 = 5.',
          answer: '5',
        },
        {
          id: 7,
          question:
            'a) Find the first four terms in ascending powers of x in the expansion of √(1 − 4x).  b) Find the values of x for which the expansion is valid.  c) By substituting x = 0.02 into the expansion in part a, find an approximation to √23 to five decimal places.',
          type: 'Medium',
          explaination:
            'a) (1 − 4x)^(1/2) = 1 + (1/2)(−4x) + [(1/2)(−1/2)/2](−4x)² + [(1/2)(−1/2)(−3/2)/6](−4x)³ + … = 1 − 2x − 2x² − 4x³.  b) The expansion is valid when |4x| < 1, so |x| < 1/4.  c) When x = 0.02, 1 − 4x = 0.92 = 23/25, so √0.92 = √23/5 and √23 = 5√0.92. Substituting: 1 − 0.04 − 0.0008 − 0.000032 = 0.959168. Therefore √23 ≈ 5 × 0.959168 = 4.79584.',
          answer: 'a) 1 − 2x − 2x² − 4x³  b) −1/4 < x < 1/4  c) √23 ≈ 4.79584',
        },
      ],
      'binomial-series-coefficient-problems': [
        {
          id: 1,
          question:
            'The coefficient of x³ in the expansion of (1 + ax)⁻³ is −640. Find the value of a.',
          type: 'Medium',
          explaination:
            'Using the binomial expansion for a negative integer power, the coefficient of x³ in (1 + ax)⁻³ is [(−3)(−4)(−5)/3!]a³ = −10a³. Set −10a³ = −640, so a³ = 64 and a = 4.',
          answer: 'a = 4',
        },
        {
          id: 2,
          question: '(1 + ax)ⁿ = 1 − 4x + 9x² + bx³ + …  Find the value of b.',
          type: 'Hard',
          explaination:
            'Match coefficients to form simultaneous equations: an = −4 and [n(n − 1)/2]a² = 9. From an = −4, a = −4/n. Substituting: [n(n − 1)/2](16/n²) = 9, so 8(n − 1)/n = 9, giving 8n − 8 = 9n and n = −8. Then a = 1/2. Coefficient of x³: [n(n − 1)(n − 2)/6]a³ = [(−8)(−9)(−10)/6] × 1/8 = −120 × 1/8 = −15.',
          answer: 'b = −15',
        },
        {
          id: 3,
          question: '(1 − x)(1 + ax)ⁿ = 1 + x² + bx³ + …  Find the value of b.',
          type: 'Hard',
          explaination:
            'Expand (1 + ax)ⁿ = 1 + anx + [n(n − 1)a²/2]x² + [n(n − 1)(n − 2)a³/6]x³ + … and multiply by (1 − x). Coefficient of x: an − 1 = 0, so an = 1. Coefficient of x²: n(n − 1)a²/2 − an = 1, so n(n − 1)a²/2 = 2. With a = 1/n: (n − 1)/(2n) = 2, so n − 1 = 4n, giving n = −1/3 and a = −3. Coefficient of x³: n(n − 1)(n − 2)a³/6 − n(n − 1)a²/2 = [(−1/3)(−4/3)(−7/3)(−27)]/6 − 2 = 28/6 − 2 = 14/3 − 6/3 = 8/3.',
          answer: 'b = 8/3',
        },
        {
          id: 4,
          question: '(1 + ax)ⁿ = 1 + 21x + bx² + bx³ + …  Given that b ≠ 0, find the value of b.',
          type: 'Hard',
          explaination:
            'Coefficient of x: an = 21. The coefficients of x² and x³ are both b, so n(n − 1)a²/2 = n(n − 1)(n − 2)a³/6. Divide both sides by n(n − 1)a²/6, which is non-zero since b ≠ 0: 3 = (n − 2)a = an − 2a = 21 − 2a. So a = 9 and n = 21/9 = 7/3. Then b = n(n − 1)a²/2 = (7/3)(4/3)(81)/2 = 252/2 = 126.',
          answer: 'b = 126',
        },
      ],
      'binomial-expansion': [
        {
          id: 1,
          question:
            'Use the binomial expansion to find the first three terms and state the values of x for which each expansion is valid.  a) (1 + x)⁻²  b) (1 + x)⁻³',
          type: 'Easy',
          explaination:
            'Use (1 + x)ⁿ = 1 + nx + [n(n − 1)/2!]x² + …  a) n = −2: 1 + (−2)x + [(−2)(−3)/2]x² = 1 − 2x + 3x².  b) n = −3: 1 + (−3)x + [(−3)(−4)/2]x² = 1 − 3x + 6x². Both are valid for |x| < 1.',
          answer: 'a) 1 − 2x + 3x², valid for |x| < 1  b) 1 − 3x + 6x², valid for |x| < 1',
        },
        {
          id: 2,
          question:
            'Use the binomial expansion to find the first three terms and state the values of x for which each expansion is valid.  a) (1 + x)^(1/3)  b) (1 + x)^(1/4)',
          type: 'Easy',
          explaination:
            'a) n = 1/3: 1 + (1/3)x + [(1/3)(−2/3)/2!]x² = 1 + x/3 − x²/9.  b) n = 1/4: 1 + (1/4)x + [(1/4)(−3/4)/2]x² = 1 + x/4 − 3x²/32. Both are valid for |x| < 1.',
          answer: 'a) 1 + x/3 − x²/9, valid for |x| < 1  b) 1 + x/4 − 3x²/32, valid for |x| < 1',
        },
        {
          id: 3,
          question:
            'Use the binomial expansion to find the first three terms and state the values of x for which each expansion is valid.  a) (1 − x/4)⁻¹  b) (1 + x/2)⁻⁴',
          type: 'Easy',
          explaination:
            'a) Replace x with −x/4 and use n = −1: 1 + (−1)(−x/4) + [(−1)(−2)/2](x²/16) = 1 + x/4 + x²/16. Valid when |x/4| < 1, so |x| < 4.  b) Replace x with x/2 and use n = −4: 1 + (−4)(x/2) + [(−4)(−5)/2](x²/4) = 1 − 2x + 10(x²/4) = 1 − 2x + 5x²/2. Valid when |x/2| < 1, so |x| < 2.',
          answer: 'a) 1 + x/4 + x²/16, valid for |x| < 4  b) 1 − 2x + 5x²/2, valid for |x| < 2',
        },
        {
          id: 4,
          question:
            'Use the binomial expansion to find the first three terms and state the values of x for which each expansion is valid.  a) (1 + 2x)^(−1/2)  b) (1 − 3x)^(−2/3)',
          type: 'Easy',
          explaination:
            'a) Replace x with 2x and use n = −1/2: 1 + (−1/2)(2x) + [(−1/2)(−3/2)/2](4x²) = 1 − x + (3/8)(4x²) = 1 − x + 3x²/2. Valid when |2x| < 1, so |x| < 1/2.  b) Replace x with −3x and use n = −2/3: 1 + (−2/3)(−3x) + [(−2/3)(−5/3)/2](9x²) = 1 + 2x + (5/9)(9x²) = 1 + 2x + 5x². Valid when |3x| < 1, so |x| < 1/3.',
          answer: 'a) 1 − x + 3x²/2, valid for |x| < 1/2  b) 1 + 2x + 5x², valid for |x| < 1/3',
        },
      ],
      'binomial-expansion-factoring-out-constant': [
        {
          id: 1,
          question:
            'Use the method for expressions not in the form (1 + x)ⁿ to find the first three terms and state the values of x for which each expansion is valid.  a) (3 + x)⁻¹  b) (5 + x)⁻²',
          type: 'Medium',
          explaination:
            'a) 3⁻¹(1 + x/3)⁻¹ = (1/3)(1 − x/3 + x²/9 − …) = 1/3 − x/9 + x²/27. Valid when |x/3| < 1, so |x| < 3.  b) 5⁻²(1 + x/5)⁻² = (1/25)(1 − 2x/5 + 3x²/25 − …) = 1/25 − 2x/125 + 3x²/625. Valid when |x/5| < 1, so |x| < 5.',
          answer:
            'a) 1/3 − x/9 + x²/27, valid for |x| < 3  b) 1/25 − 2x/125 + 3x²/625, valid for |x| < 5',
        },
        {
          id: 2,
          question:
            'Use the method for expressions not in the form (1 + x)ⁿ to find the first three terms and state the values of x for which each expansion is valid.  a) (8 + x)^(1/3)  b) (9 + x)^(1/2)',
          type: 'Medium',
          explaination:
            'a) 8^(1/3)(1 + x/8)^(1/3) = 2(1 + (1/3)(x/8) + [(1/3)(−2/3)/2](x²/64) + …) = 2(1 + x/24 − x²/576 + …) = 2 + x/12 − x²/288. Valid when |x/8| < 1, so |x| < 8.  b) 9^(1/2)(1 + x/9)^(1/2) = 3(1 + x/18 − x²/648 + …) = 3 + x/6 − x²/216. Valid when |x/9| < 1, so |x| < 9.',
          answer: 'a) 2 + x/12 − x²/288, valid for |x| < 8  b) 3 + x/6 − x²/216, valid for |x| < 9',
        },
        {
          id: 3,
          question:
            'Use the method for expressions not in the form (1 + x)ⁿ to find the first three terms and state the values of x for which each expansion is valid.  a) (2 − 3x)⁻³  b) (3 + 4x)⁻¹',
          type: 'Medium',
          explaination:
            'a) 2⁻³(1 − 3x/2)⁻³ = (1/8)(1 + (−3)(−3x/2) + [(−3)(−4)/2](9x²/4) + …) = (1/8)(1 + 9x/2 + 27x²/2 + …) = 1/8 + 9x/16 + 27x²/16. Valid when |3x/2| < 1, so |x| < 2/3.  b) 3⁻¹(1 + 4x/3)⁻¹ = (1/3)(1 − 4x/3 + 16x²/9 − …) = 1/3 − 4x/9 + 16x²/27. Valid when |4x/3| < 1, so |x| < 3/4.',
          answer:
            'a) 1/8 + 9x/16 + 27x²/16, valid for |x| < 2/3  b) 1/3 − 4x/9 + 16x²/27, valid for |x| < 3/4',
        },
        {
          id: 4,
          question:
            'Use the method for expressions not in the form (1 + x)ⁿ to find the first three terms and state the values of x for which each expansion is valid.  a) (16 + x/2)^(7/4)  b) (4 − x/3)^(3/2)',
          type: 'Hard',
          explaination:
            'a) 16^(7/4)(1 + x/32)^(7/4) = 128(1 + (7/4)(x/32) + [(7/4)(3/4)/2](x²/1024) + …) = 128(1 + 7x/128 + 21x²/32768 + …) = 128 + 7x + 21x²/256. Valid when |x/32| < 1, so |x| < 32.  b) 4^(3/2)(1 − x/12)^(3/2) = 8(1 + (3/2)(−x/12) + [(3/2)(1/2)/2](x²/144) + …) = 8(1 − x/8 + x²/384 + …) = 8 − x + x²/48. Valid when |x/12| < 1, so |x| < 12.',
          answer:
            'a) 128 + 7x + 21x²/256, valid for |x| < 32  b) 8 − x + x²/48, valid for |x| < 12',
        },
        {
          id: 5,
          question:
            'Find the expansion, in ascending powers of x up to and including the term in x², of 4/∛(8 + x).',
          type: 'Medium',
          explaination:
            'Write as 4(8 + x)^(−1/3) = 4 × 8^(−1/3)(1 + x/8)^(−1/3). Since 8^(−1/3) = 1/2, this is 2(1 + x/8)^(−1/3). With n = −1/3: 2[1 + (−1/3)(x/8) + [(−1/3)(−4/3)/2](x²/64) + …] = 2[1 − x/24 + x²/288 + …] = 2 − x/12 + x²/144. Valid for |x| < 8.',
          answer: '2 − x/12 + x²/144, valid for |x| < 8',
        },
        {
          id: 6,
          question:
            'Find the expansion, in ascending powers of x up to and including the term in x², of 1/(2 − 5x).',
          type: 'Medium',
          explaination:
            '1/(2 − 5x) = (1/2)(1 − 5x/2)⁻¹ = (1/2)(1 + 5x/2 + 25x²/4 + …) = 1/2 + 5x/4 + 25x²/8. Valid when |5x/2| < 1, so |x| < 2/5.',
          answer: '1/2 + 5x/4 + 25x²/8, valid for |x| < 2/5',
        },
      ],
    },
  },
  {
    'complex-numbers': {
      title: 'Complex Numbers',
      'modulus-argument-form': [
        {
          id: 1,
          question: 'Write the following in the form r cis θ, where −π < θ ≤ π:  a) −4  b) 5',
          type: 'Easy',
          explaination:
            'a) |−4| = 4 and −4 lies on the negative real axis, so arg(−4) = π. Therefore −4 = 4 cis π.  b) |5| = 5 and 5 lies on the positive real axis, so arg(5) = 0. Therefore 5 = 5 cis 0.',
          answer: 'a) 4 cis π  b) 5 cis 0',
        },
        {
          id: 2,
          question: 'Write the following in the form r cis θ, where −π < θ ≤ π:  a) 3i  b) −2i',
          type: 'Easy',
          explaination:
            'a) |3i| = 3 and 3i lies on the positive imaginary axis, so arg(3i) = π/2.  b) |−2i| = 2 and −2i lies on the negative imaginary axis, so arg(−2i) = −π/2.',
          answer: 'a) 3 cis (π/2)  b) 2 cis (−π/2)',
        },
        {
          id: 3,
          question:
            'Write the following in the form r cis θ, where −π < θ ≤ π:  a) √3 + i  b) 2√3 − 2i',
          type: 'Easy',
          explaination:
            'a) r = √(3 + 1) = 2. The number is in the first quadrant, so θ = arctan(1/√3) = π/6.  b) r = √(12 + 4) = 4. The number is in the fourth quadrant, so θ = arctan(−2/(2√3)) = −π/6.',
          answer: 'a) 2 cis (π/6)  b) 4 cis (−π/6)',
        },
        {
          id: 4,
          question:
            'Write the following in the form r cis θ, where −π < θ ≤ π:  a) −1 − i  b) −3 + 3i',
          type: 'Easy',
          explaination:
            'a) r = √(1 + 1) = √2. The number is in the third quadrant with reference angle arctan(1) = π/4, so θ = −π + π/4 = −3π/4.  b) r = √(9 + 9) = 3√2. The number is in the second quadrant with reference angle π/4, so θ = π − π/4 = 3π/4.',
          answer: 'a) √2 cis (−3π/4)  b) 3√2 cis (3π/4)',
        },
        {
          id: 5,
          question: 'Write the following in the form r cis θ, where 0 ≤ θ < 2π:  a) −5i  b) −7i',
          type: 'Easy',
          explaination:
            'Both numbers lie on the negative imaginary axis, so in the range 0 ≤ θ < 2π the argument is 3π/2. The modulus is the size of the imaginary part.  a) r = 5.  b) r = 7.',
          answer: 'a) 5 cis (3π/2)  b) 7 cis (3π/2)',
        },
        {
          id: 6,
          question:
            'Write the following in the form r cis θ, where 0 ≤ θ < 2π:  a) 3 − 3√3i  b) 4 − 4i',
          type: 'Easy',
          explaination:
            'a) r = √(9 + 27) = 6. The number is in the fourth quadrant with reference angle arctan(√3) = π/3, so θ = 2π − π/3 = 5π/3.  b) r = √(16 + 16) = 4√2. The number is in the fourth quadrant with reference angle π/4, so θ = 2π − π/4 = 7π/4.',
          answer: 'a) 6 cis (5π/3)  b) 4√2 cis (7π/4)',
        },
        {
          id: 7,
          question:
            'Write the following in the form r cis θ, where 0 ≤ θ < 2π:  a) −2 − 2i  b) −1 − √3i',
          type: 'Easy',
          explaination:
            'a) r = √(4 + 4) = 2√2. The number is in the third quadrant with reference angle π/4, so θ = π + π/4 = 5π/4.  b) r = √(1 + 3) = 2. The number is in the third quadrant with reference angle arctan(√3) = π/3, so θ = π + π/3 = 4π/3.',
          answer: 'a) 2√2 cis (5π/4)  b) 2 cis (4π/3)',
        },
        {
          id: 8,
          question:
            'Write z in Cartesian form given:  a) |z| = 10, arg z = −π/2  b) |z| = 8, arg z = π/2',
          type: 'Easy',
          explaination:
            'Use z = r(cos θ + i sin θ).  a) z = 10(cos(−π/2) + i sin(−π/2)) = 10(0 − i) = −10i.  b) z = 8(cos(π/2) + i sin(π/2)) = 8(0 + i) = 8i.',
          answer: 'a) z = −10i  b) z = 8i',
        },
        {
          id: 9,
          question:
            'The complex numbers z and w have arguments between 0 and π. Given that zw = −4√2 + 4√2i and z/w = 1 + √3i, find the modulus and argument of z and the modulus and argument of w.',
          type: 'Hard',
          explaination:
            'zw = −4√2 + 4√2i has modulus √(32 + 32) = 8 and argument 3π/4. z/w = 1 + √3i has modulus 2 and argument π/3. Moduli: |z|² = |zw| × |z/w| = 8 × 2 = 16, so |z| = 4, and |w|² = |zw| ÷ |z/w| = 8 ÷ 2 = 4, so |w| = 2. Arguments: arg z + arg w = 3π/4 and arg z − arg w = π/3. Since both arguments lie between 0 and π, their sum is between 0 and 2π and their difference is between −π and π, so no multiples of 2π need adding. Adding the equations: 2 arg z = 13π/12, so arg z = 13π/24. Subtracting: 2 arg w = 5π/12, so arg w = 5π/24. Both lie between 0 and π.',
          answer: '|z| = 4, arg z = 13π/24;  |w| = 2, arg w = 5π/24',
        },
        {
          id: 10,
          question:
            'The complex numbers z and w are defined by z = 1/√2 + (1/√2)i and w = 1 + √3i.  a) Find: (i) |z|, (ii) arg z, (iii) |w|, (iv) arg w.  b) Find w/z in modulus–argument form.  c) Find w/z in Cartesian form.  d) Hence find an exact surd expression for cos(π/12).',
          type: 'Hard',
          explaination:
            'a) |z| = √(1/2 + 1/2) = 1 and z is in the first quadrant with equal real and imaginary parts, so arg z = π/4. |w| = √(1 + 3) = 2 and arg w = arctan(√3) = π/3.  b) Divide the moduli and subtract the arguments: |w/z| = 2/1 = 2 and arg(w/z) = π/3 − π/4 = π/12, so w/z = 2 cis (π/12).  c) Since |z| = 1, dividing by z is the same as multiplying by its conjugate: w/z = (1 + √3i)(1/√2 − (1/√2)i) = (1/√2)(1 − i + √3i + √3) = [(1 + √3) + (√3 − 1)i]/√2 = (√6 + √2)/2 + ((√6 − √2)/2)i.  d) From part b, the real part of w/z is 2 cos(π/12). Equating with part c: 2 cos(π/12) = (√6 + √2)/2, so cos(π/12) = (√6 + √2)/4.',
          answer:
            'a) (i) 1, (ii) π/4, (iii) 2, (iv) π/3  b) 2 cis (π/12)  c) (√6 + √2)/2 + ((√6 − √2)/2)i  d) cos(π/12) = (√6 + √2)/4',
        },
      ],
      'euler-form': [
        {
          id: 1,
          question: 'Write the following numbers in Euler form:  a) −3  b) 2',
          type: 'Medium',
          explaination:
            'Use z = re^(iθ), where r = |z| and θ = arg z.  a) −3 lies on the negative real axis, so r = 3 and θ = π, giving 3e^(iπ).  b) 2 lies on the positive real axis, so r = 2 and θ = 0, giving 2e^(i0) = 2.',
          answer: 'a) 3e^(iπ)  b) 2e^(i0) = 2',
        },
        {
          id: 2,
          question: 'Write the following numbers in Euler form:  a) i  b) −√2i',
          type: 'Medium',
          explaination:
            'a) |i| = 1 and i lies on the positive imaginary axis, so arg(i) = π/2, giving e^(iπ/2).  b) |−√2i| = √2 and −√2i lies on the negative imaginary axis, so arg = −π/2, giving √2e^(−iπ/2). This can also be written as √2e^(i3π/2), since −π/2 and 3π/2 differ by 2π.',
          answer: 'a) e^(iπ/2)  b) √2e^(−iπ/2) (or √2e^(i3π/2))',
        },
        {
          id: 3,
          question: 'Write the following numbers in Euler form:  a) 1 + i  b) √3 + i',
          type: 'Medium',
          explaination:
            'a) r = √(1 + 1) = √2. The number is in the first quadrant, so θ = arctan(1) = π/4, giving √2e^(iπ/4).  b) r = √(3 + 1) = 2. The number is in the first quadrant, so θ = arctan(1/√3) = π/6, giving 2e^(iπ/6).',
          answer: 'a) √2e^(iπ/4)  b) 2e^(iπ/6)',
        },
        {
          id: 4,
          question: 'Write the following in Euler form:  a) cis 0.4  b) cis 1.8',
          type: 'Medium',
          explaination: 'Use cis θ = e^(iθ).  a) cis 0.4 = e^(0.4i).  b) cis 1.8 = e^(1.8i).',
          answer: 'a) e^(0.4i)  b) e^(1.8i)',
        },
        {
          id: 5,
          question: 'Write the following in Euler form:  a) 4 cis (π/5)  b) 7 cis (π/10)',
          type: 'Medium',
          explaination:
            'Use r cis θ = re^(iθ).  a) 4 cis (π/5) = 4e^(iπ/5).  b) 7 cis (π/10) = 7e^(iπ/10).',
          answer: 'a) 4e^(iπ/5)  b) 7e^(iπ/10)',
        },
      ],
      'De-Moivres-theorem-evaluation': [
        {
          id: 1,
          question: 'Find, in Cartesian form, 8/(1 − √3i)⁵.',
          type: 'Medium',
          explaination:
            "Convert the denominator to modulus–argument form first: 1 − √3i has modulus √(1 + 3) = 2 and lies in the fourth quadrant, so 1 − √3i = 2 cis (−π/3). By De Moivre's theorem, (1 − √3i)⁵ = 2⁵ cis (−5π/3) = 32 cis (π/3), since −5π/3 + 2π = π/3. Then 8/(32 cis (π/3)) = (1/4) cis (−π/3) = (1/4)(1/2 − (√3/2)i) = 1/8 − (√3/8)i.",
          answer: '1/8 − (√3/8)i',
        },
      ],
      'nth-roots-geometric-interpretation': [
        {
          id: 1,
          question:
            'The five vertices of a regular pentagon, shown on an Argand diagram, correspond to the solutions of an equation of the form zⁿ = w, where w is a complex number. One vertex is at −√3i. Find the values of n and w.',
          type: 'Hard',
          explaination:
            "The pentagon has five vertices, so there are five solutions and n = 5. All the vertices lie on a circle of radius √3 centred at the origin. The vertex −√3i lies on the negative imaginary axis, so it has modulus √3 and argument −π/2, giving the root z = √3 cis (−π/2). Since z⁵ = w, by De Moivre's theorem w = (√3)⁵ cis (5 × (−π/2)) = 9√3 cis (−5π/2). Adding 2π to the argument gives −π/2, so w = 9√3 cis (−π/2) = −9√3i.",
          answer: 'n = 5, w = −9√3i',
        },
      ],
    },
  },
  {
    vectors: {
      title: 'Vectors',
      'scalar-product': [
        {
          id: 1,
          question:
            'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 7, |b| = 10 and the angle between them is 60°.',
          type: 'Easy',
          explaination: 'a · b = 7 × 10 × cos 60° = 70 × 0.5 = 35.',
          answer: 'a · b = 35',
        },
        {
          id: 2,
          question:
            'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 5, |b| = 8 and the angle between them is 60°.',
          type: 'Easy',
          explaination: 'a · b = 5 × 8 × cos 60° = 40 × 0.5 = 20.',
          answer: 'a · b = 20',
        },
        {
          id: 3,
          question:
            'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 13, |b| = 20 and the angle between them is 75°.',
          type: 'Easy',
          explaination: 'a · b = 13 × 20 × cos 75° = 260 cos 75° ≈ 260 × 0.2588 ≈ 67.3.',
          answer: 'a · b = 260 cos 75° ≈ 67.3',
        },
        {
          id: 4,
          question:
            'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 3, |b| = 5 and the angle between them is 50°.',
          type: 'Easy',
          explaination: 'a · b = 3 × 5 × cos 50° = 15 cos 50° ≈ 15 × 0.6428 ≈ 9.64.',
          answer: 'a · b = 15 cos 50° ≈ 9.64',
        },
        {
          id: 5,
          question:
            'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 12, |b| = 7 and the angle between them is 130°.',
          type: 'Easy',
          explaination:
            'a · b = 12 × 7 × cos 130° = 84 cos 130° ≈ 84 × (−0.6428) ≈ −54.0. The scalar product is negative because the angle between the vectors is obtuse.',
          answer: 'a · b = 84 cos 130° ≈ −54.0',
        },
        {
          id: 6,
          question:
            'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 9, |b| = 5 and the angle between them is 145°.',
          type: 'Easy',
          explaination:
            'a · b = 9 × 5 × cos 145° = 45 cos 145° ≈ 45 × (−0.8192) ≈ −36.9. The scalar product is negative because the angle between the vectors is obtuse.',
          answer: 'a · b = 45 cos 145° ≈ −36.9',
        },
      ],
      'angle-between-vectors': [
        {
          id: 1,
          question:
            'Find the angle between the vectors (5, 1, 2) and (1, −2, 3), giving your answer to the nearest degree.',
          type: 'Medium',
          explaination:
            'a · b = 5(1) + 1(−2) + 2(3) = 5 − 2 + 6 = 9. |a| = √(25 + 1 + 4) = √30 and |b| = √(1 + 4 + 9) = √14. cos θ = 9/(√30 × √14) = 9/√420 ≈ 0.4392, so θ = arccos(0.4392) ≈ 64°.',
          answer: 'θ ≈ 64°',
        },
        {
          id: 2,
          question:
            'Find the angle between the vectors (3, 0, 2) and (0, −1, 1), giving your answer to the nearest degree.',
          type: 'Medium',
          explaination:
            'a · b = 3(0) + 0(−1) + 2(1) = 2. |a| = √(9 + 0 + 4) = √13 and |b| = √(0 + 1 + 1) = √2. cos θ = 2/(√13 × √2) = 2/√26 ≈ 0.3922, so θ = arccos(0.3922) ≈ 67°.',
          answer: 'θ ≈ 67°',
        },
        {
          id: 3,
          question:
            'Find the angle between the vectors 2i + 2j − k and i − j + 3k, giving your answer to the nearest degree.',
          type: 'Medium',
          explaination:
            'a · b = 2(1) + 2(−1) + (−1)(3) = 2 − 2 − 3 = −3. |a| = √(4 + 4 + 1) = 3 and |b| = √(1 + 1 + 9) = √11. cos θ = −3/(3√11) = −1/√11 ≈ −0.3015, so θ = arccos(−0.3015) ≈ 108°. The angle is obtuse because the scalar product is negative.',
          answer: 'θ ≈ 108°',
        },
        {
          id: 4,
          question:
            'Find the angle between the vectors i − j and 2i + 3j, giving your answer to the nearest degree.',
          type: 'Medium',
          explaination:
            'a · b = 1(2) + (−1)(3) = 2 − 3 = −1. |a| = √(1 + 1) = √2 and |b| = √(4 + 9) = √13. cos θ = −1/(√2 × √13) = −1/√26 ≈ −0.1961, so θ = arccos(−0.1961) ≈ 101°. The angle is obtuse because the scalar product is negative.',
          answer: 'θ ≈ 101°',
        },
      ],
      'vector-equation-of-a-line': [
        {
          id: 1,
          question:
            'Find the angle between the vectors (5, 1, 2) and (1, −2, 3), giving your answer to the nearest degree.',
          type: 'Medium',
          explaination:
            'a · b = 5(1) + 1(−2) + 2(3) = 5 − 2 + 6 = 9. |a| = √(25 + 1 + 4) = √30 and |b| = √(1 + 4 + 9) = √14. cos θ = 9/(√30 × √14) = 9/√420 ≈ 0.4392, so θ = arccos(0.4392) ≈ 64°.',
          answer: 'θ ≈ 64°',
        },
        {
          id: 2,
          question:
            'Find the angle between the vectors (3, 0, 2) and (0, −1, 1), giving your answer to the nearest degree.',
          type: 'Medium',
          explaination:
            'a · b = 3(0) + 0(−1) + 2(1) = 2. |a| = √(9 + 0 + 4) = √13 and |b| = √(0 + 1 + 1) = √2. cos θ = 2/(√13 × √2) = 2/√26 ≈ 0.3922, so θ = arccos(0.3922) ≈ 67°.',
          answer: 'θ ≈ 67°',
        },
        {
          id: 3,
          question:
            'Find the angle between the vectors 2i + 2j − k and i − j + 3k, giving your answer to the nearest degree.',
          type: 'Medium',
          explaination:
            'a · b = 2(1) + 2(−1) + (−1)(3) = 2 − 2 − 3 = −3. |a| = √(4 + 4 + 1) = 3 and |b| = √(1 + 1 + 9) = √11. cos θ = −3/(3√11) = −1/√11 ≈ −0.3015, so θ = arccos(−0.3015) ≈ 108°. The angle is obtuse because the scalar product is negative.',
          answer: 'θ ≈ 108°',
        },
        {
          id: 4,
          question:
            'Find the angle between the vectors i − j and 2i + 3j, giving your answer to the nearest degree.',
          type: 'Medium',
          explaination:
            'a · b = 1(2) + (−1)(3) = 2 − 3 = −1. |a| = √(1 + 1) = √2 and |b| = √(4 + 9) = √13. cos θ = −1/(√2 × √13) = −1/√26 ≈ −0.1961, so θ = arccos(−0.1961) ≈ 101°. The angle is obtuse because the scalar product is negative.',
          answer: 'θ ≈ 101°',
        },
      ],
      'cross-Pproduct-scalar-triple-product': [
        {
          id: 1,
          question: 'Explain why (a × b) · a = 0.',
          type: 'Medium',
          explaination:
            'By definition, the cross product a × b is perpendicular to both a and b. The scalar product of two perpendicular vectors is zero, so (a × b) · a = 0.',
          answer: 'Because a × b is perpendicular to a',
        },
        {
          id: 2,
          question: 'Evaluate (a × b) · (a − b).',
          type: 'Hard',
          explaination:
            'Expand using the distributive property of the scalar product: (a × b) · (a − b) = (a × b) · a − (a × b) · b. Since a × b is perpendicular to both a and b, both terms are zero, so the result is 0 − 0 = 0.',
          answer: '0',
        },
      ],
    },
  },
  {
    calculus: {
      title: 'Calculus',
      limits: [
        {
          id: 1,
          question: 'Find: lim (x → 0) of 12x/(3x)',
          type: 'Easy',
          explaination:
            'For x ≠ 0, the x terms cancel: 12x/(3x) = 4. The expression is constant, so the limit as x → 0 is 4.',
          answer: '4',
        },
        {
          id: 2,
          question: 'Find: lim (x → 0) of 8x/(4x)',
          type: 'Easy',
          explaination:
            'For x ≠ 0, the x terms cancel: 8x/(4x) = 2. The expression is constant, so the limit as x → 0 is 2.',
          answer: '2',
        },
        {
          id: 3,
          question: 'Find: lim (x → 0) of (x² − 2x)/x',
          type: 'Easy',
          explaination:
            'Direct substitution gives 0/0, so factorise first: (x² − 2x)/x = x(x − 2)/x = x − 2 for x ≠ 0. As x → 0, x − 2 → −2.',
          answer: '−2',
        },
        {
          id: 4,
          question: 'Find: lim (x → 0) of (x² + 5x)/(2x)',
          type: 'Easy',
          explaination:
            'Direct substitution gives 0/0, so factorise first: (x² + 5x)/(2x) = x(x + 5)/(2x) = (x + 5)/2 for x ≠ 0. As x → 0, (x + 5)/2 → 5/2.',
          answer: '5/2',
        },
      ],
      // Paste into the 'implicit-differentiation' array
      'implicit-differentiation': [
        {
          id: 1,
          question:
            'Use implicit differentiation to find the gradient of the curve x² + y² = 25 at the point (3, −4).',
          type: 'Easy',
          explaination:
            'Differentiate both sides with respect to x: 2x + 2y(dy/dx) = 0, so dy/dx = −x/y. At (3, −4): dy/dx = −3/(−4) = 3/4.',
          answer: 'dy/dx = 3/4',
        },
        {
          id: 2,
          question:
            'Use implicit differentiation to find the gradient of the curve x³ + y² = 9 at the point (2, 1).',
          type: 'Easy',
          explaination:
            'Differentiate both sides with respect to x: 3x² + 2y(dy/dx) = 0, so dy/dx = −3x²/(2y). At (2, 1): dy/dx = −12/2 = −6.',
          answer: 'dy/dx = −6',
        },
        {
          id: 3,
          question:
            'Use implicit differentiation to find the gradient of the curve eˣ + eʸ = 2e at the point (1, 1).',
          type: 'Easy',
          explaination:
            'Differentiate both sides with respect to x: eˣ + eʸ(dy/dx) = 0, so dy/dx = −eˣ/eʸ. At (1, 1): dy/dx = −e/e = −1.',
          answer: 'dy/dx = −1',
        },
        {
          id: 4,
          question:
            'Use implicit differentiation to find the gradient of the curve eˣ + e²ʸ = e + 1 at the point (1, 0).',
          type: 'Easy',
          explaination:
            'Differentiate both sides with respect to x, using the chain rule on e²ʸ: eˣ + 2e²ʸ(dy/dx) = 0, so dy/dx = −eˣ/(2e²ʸ). At (1, 0): dy/dx = −e/(2 × 1) = −e/2.',
          answer: 'dy/dx = −e/2',
        },
        {
          id: 5,
          question:
            'Use implicit differentiation to find the gradient of the curve ln x + ln y = 4 at the point (e, e³).',
          type: 'Easy',
          explaination:
            'Differentiate both sides with respect to x: 1/x + (1/y)(dy/dx) = 0, so dy/dx = −y/x. At (e, e³): dy/dx = −e³/e = −e².',
          answer: 'dy/dx = −e²',
        },
        {
          id: 6,
          question:
            'Use implicit differentiation to find the gradient of the curve ln(x) + ln(y²) = 2 at the point (1, e).',
          type: 'Easy',
          explaination:
            'Rewrite as ln x + 2 ln y = 2. Differentiate both sides with respect to x: 1/x + (2/y)(dy/dx) = 0, so dy/dx = −y/(2x). At (1, e): dy/dx = −e/2.',
          answer: 'dy/dx = −e/2',
        },
        {
          id: 7,
          question:
            'Use implicit differentiation to find the gradient of the curve x² + y² = x + y + 2 at the point (2, 1).',
          type: 'Medium',
          explaination:
            'Differentiate both sides with respect to x: 2x + 2y(dy/dx) = 1 + dy/dx. Collect the dy/dx terms: (2y − 1)(dy/dx) = 1 − 2x, so dy/dx = (1 − 2x)/(2y − 1). At (2, 1): dy/dx = (1 − 4)/(2 − 1) = −3.',
          answer: 'dy/dx = −3',
        },
        {
          id: 8,
          question:
            'Use implicit differentiation to find the gradient of the curve x³ + y³ = x + 4y at the point (1, 2).',
          type: 'Medium',
          explaination:
            'Differentiate both sides with respect to x: 3x² + 3y²(dy/dx) = 1 + 4(dy/dx). Collect the dy/dx terms: (3y² − 4)(dy/dx) = 1 − 3x², so dy/dx = (1 − 3x²)/(3y² − 4). At (1, 2): dy/dx = (1 − 3)/(12 − 4) = −2/8 = −1/4.',
          answer: 'dy/dx = −1/4',
        },
        {
          id: 9,
          question:
            'Use implicit differentiation to find dy/dx in terms of x and y for xy² + yx² = 3.',
          type: 'Medium',
          explaination:
            'Use the product rule on each term: (y² + 2xy(dy/dx)) + (x²(dy/dx) + 2xy) = 0. Collect the dy/dx terms: (2xy + x²)(dy/dx) = −(y² + 2xy), so dy/dx = −(y² + 2xy)/(2xy + x²).',
          answer: 'dy/dx = −(y² + 2xy)/(2xy + x²)',
        },
        {
          id: 10,
          question:
            'Use implicit differentiation to find dy/dx in terms of x and y for xy + x²y² = 5.',
          type: 'Medium',
          explaination:
            'Use the product rule on each term: (y + x(dy/dx)) + (2xy² + 2x²y(dy/dx)) = 0. Collect the dy/dx terms: (x + 2x²y)(dy/dx) = −(y + 2xy²), so dy/dx = −(y + 2xy²)/(x + 2x²y). Factorising, this is −y(1 + 2xy)/(x(1 + 2xy)) = −y/x.',
          answer: 'dy/dx = −(y + 2xy²)/(x + 2x²y) = −y/x',
        },
        {
          id: 11,
          question:
            'Use implicit differentiation to find dy/dx in terms of x and y for x/y + y/x = x.',
          type: 'Medium',
          explaination:
            'Use the quotient rule on each fraction: (y − x(dy/dx))/y² + (x(dy/dx) − y)/x² = 1. Multiply through by x²y²: x²y − x³(dy/dx) + xy²(dy/dx) − y³ = x²y². Collect the dy/dx terms: (xy² − x³)(dy/dx) = x²y² − x²y + y³, so dy/dx = (x²y² − x²y + y³)/(xy² − x³).',
          answer: 'dy/dx = (x²y² − x²y + y³)/(xy² − x³)',
        },
        {
          id: 12,
          question:
            'Use implicit differentiation to find dy/dx in terms of x and y for x/(x + y) = y² − 3.',
          type: 'Medium',
          explaination:
            'Use the quotient rule on the left-hand side and the chain rule on the right: [(x + y) − x(1 + dy/dx)]/(x + y)² = 2y(dy/dx). The numerator simplifies to y − x(dy/dx), so y − x(dy/dx) = 2y(x + y)²(dy/dx). Collect the dy/dx terms: y = [x + 2y(x + y)²](dy/dx), so dy/dx = y/(x + 2y(x + y)²).',
          answer: 'dy/dx = y/(x + 2y(x + y)²)',
        },
        {
          id: 13,
          question:
            'Use implicit differentiation to find dy/dx in terms of x and y for ln x + ln y = ln(x + y) − 1.',
          type: 'Medium',
          explaination:
            'Differentiate both sides with respect to x: 1/x + (1/y)(dy/dx) = (1 + dy/dx)/(x + y). Collect the dy/dx terms: [1/y − 1/(x + y)](dy/dx) = 1/(x + y) − 1/x. The left bracket simplifies to x/(y(x + y)) and the right-hand side to −y/(x(x + y)). Therefore dy/dx = [−y/(x(x + y))] × [y(x + y)/x] = −y²/x².',
          answer: 'dy/dx = −y²/x²',
        },
        {
          id: 14,
          question:
            'Use implicit differentiation to find dy/dx in terms of x and y for ln(x + 2y) = x² − y.',
          type: 'Medium',
          explaination:
            'Differentiate both sides with respect to x: (1 + 2(dy/dx))/(x + 2y) = 2x − dy/dx. Multiply by (x + 2y): 1 + 2(dy/dx) = 2x(x + 2y) − (x + 2y)(dy/dx). Collect the dy/dx terms: (x + 2y + 2)(dy/dx) = 2x(x + 2y) − 1, so dy/dx = (2x² + 4xy − 1)/(x + 2y + 2).',
          answer: 'dy/dx = (2x² + 4xy − 1)/(x + 2y + 2)',
        },
        {
          id: 15,
          question:
            'Use implicit differentiation to find dy/dx in terms of x and y for e^(x + y) = x + 1/y.',
          type: 'Hard',
          explaination:
            'Differentiate both sides with respect to x: e^(x + y)(1 + dy/dx) = 1 − (1/y²)(dy/dx). Collect the dy/dx terms: [e^(x + y) + 1/y²](dy/dx) = 1 − e^(x + y), so dy/dx = (1 − e^(x + y))/(e^(x + y) + 1/y²). Multiplying the numerator and denominator by y² gives dy/dx = y²(1 − e^(x + y))/(y²e^(x + y) + 1).',
          answer: 'dy/dx = y²(1 − e^(x + y))/(y²e^(x + y) + 1)',
        },
        {
          id: 16,
          question:
            'Use implicit differentiation to find dy/dx in terms of x and y for e^(y²) + e^(x²) = 3.',
          type: 'Hard',
          explaination:
            'Differentiate both sides with respect to x, using the chain rule on each exponential: 2y e^(y²)(dy/dx) + 2x e^(x²) = 0, so dy/dx = −x e^(x²)/(y e^(y²)).',
          answer: 'dy/dx = −x e^(x²)/(y e^(y²))',
        },
        {
          id: 17,
          question:
            'Use implicit differentiation to find dy/dx in terms of x and y for sin(xy) = x + y.',
          type: 'Medium',
          explaination:
            'Differentiate both sides with respect to x, using the chain rule and the product rule on xy: cos(xy)(y + x(dy/dx)) = 1 + dy/dx. Collect the dy/dx terms: (x cos(xy) − 1)(dy/dx) = 1 − y cos(xy), so dy/dx = (1 − y cos(xy))/(x cos(xy) − 1).',
          answer: 'dy/dx = (1 − y cos(xy))/(x cos(xy) − 1)',
        },
        {
          id: 18,
          question:
            'Use implicit differentiation to find dy/dx in terms of x and y for cos(x + y) = y.',
          type: 'Medium',
          explaination:
            'Differentiate both sides with respect to x: −sin(x + y)(1 + dy/dx) = dy/dx. Rearrange: −sin(x + y) = (1 + sin(x + y))(dy/dx), so dy/dx = −sin(x + y)/(1 + sin(x + y)).',
          answer: 'dy/dx = −sin(x + y)/(1 + sin(x + y))',
        },
      ],
      'integration-by-parts': [
        {
          id: 1,
          question: 'Find ∫ x cos 2x dx.',
          type: 'Easy',
          explaination:
            'Let u = x and dv/dx = cos 2x, so du/dx = 1 and v = (sin 2x)/2. Then ∫ x cos 2x dx = (x sin 2x)/2 − ∫ (sin 2x)/2 dx = (x sin 2x)/2 + (cos 2x)/4 + c.',
          answer: '(x sin 2x)/2 + (cos 2x)/4 + c',
        },
        {
          id: 2,
          question: 'Find ∫ x cos 3x dx.',
          type: 'Easy',
          explaination:
            'Let u = x and dv/dx = cos 3x, so du/dx = 1 and v = (sin 3x)/3. Then ∫ x cos 3x dx = (x sin 3x)/3 − ∫ (sin 3x)/3 dx = (x sin 3x)/3 + (cos 3x)/9 + c.',
          answer: '(x sin 3x)/3 + (cos 3x)/9 + c',
        },
        {
          id: 3,
          question: 'Find ∫ x sin(x/2) dx.',
          type: 'Easy',
          explaination:
            'Let u = x and dv/dx = sin(x/2), so du/dx = 1 and v = −2 cos(x/2). Then ∫ x sin(x/2) dx = −2x cos(x/2) + 2∫ cos(x/2) dx = −2x cos(x/2) + 4 sin(x/2) + c.',
          answer: '−2x cos(x/2) + 4 sin(x/2) + c',
        },
        {
          id: 4,
          question: 'Find ∫ x sin(x/3) dx.',
          type: 'Easy',
          explaination:
            'Let u = x and dv/dx = sin(x/3), so du/dx = 1 and v = −3 cos(x/3). Then ∫ x sin(x/3) dx = −3x cos(x/3) + 3∫ cos(x/3) dx = −3x cos(x/3) + 9 sin(x/3) + c.',
          answer: '−3x cos(x/3) + 9 sin(x/3) + c',
        },
        {
          id: 5,
          question: 'Find ∫ xe^(−2x) dx.',
          type: 'Easy',
          explaination:
            'Let u = x and dv/dx = e^(−2x), so du/dx = 1 and v = −(1/2)e^(−2x). Then ∫ xe^(−2x) dx = −(x/2)e^(−2x) + ∫ (1/2)e^(−2x) dx = −(x/2)e^(−2x) − (1/4)e^(−2x) + c.',
          answer: '−(x/2)e^(−2x) − (1/4)e^(−2x) + c',
        },
        {
          id: 6,
          question: 'Find ∫ xe^(−3x) dx.',
          type: 'Easy',
          explaination:
            'Let u = x and dv/dx = e^(−3x), so du/dx = 1 and v = −(1/3)e^(−3x). Then ∫ xe^(−3x) dx = −(x/3)e^(−3x) + ∫ (1/3)e^(−3x) dx = −(x/3)e^(−3x) − (1/9)e^(−3x) + c.',
          answer: '−(x/3)e^(−3x) − (1/9)e^(−3x) + c',
        },
        {
          id: 7,
          question: 'Find ∫ x ln x dx.',
          type: 'Easy',
          explaination:
            'Let u = ln x and dv/dx = x, so du/dx = 1/x and v = x²/2. Then ∫ x ln x dx = (x²/2) ln x − ∫ x/2 dx = (x²/2) ln x − x²/4 + c.',
          answer: '(x²/2) ln x − x²/4 + c',
        },
        {
          id: 8,
          question: 'Find ∫ x² ln x dx.',
          type: 'Medium',
          explaination:
            'Let u = ln x and dv/dx = x², so du/dx = 1/x and v = x³/3. Then ∫ x² ln x dx = (x³/3) ln x − ∫ x²/3 dx = (x³/3) ln x − x³/9 + c.',
          answer: '(x³/3) ln x − x³/9 + c',
        },
        {
          id: 9,
          question: 'Find ∫ (1/x²) ln x dx.',
          type: 'Medium',
          explaination:
            'Let u = ln x and dv/dx = x⁻², so du/dx = 1/x and v = −1/x. Then ∫ (1/x²) ln x dx = −(ln x)/x + ∫ 1/x² dx = −(ln x)/x − 1/x + c.',
          answer: '−(ln x)/x − 1/x + c',
        },
        {
          id: 10,
          question: 'Find ∫ (1/x³) ln x dx.',
          type: 'Medium',
          explaination:
            'Let u = ln x and dv/dx = x⁻³, so du/dx = 1/x and v = −1/(2x²). Then ∫ (1/x³) ln x dx = −(ln x)/(2x²) + ∫ 1/(2x³) dx = −(ln x)/(2x²) − 1/(4x²) + c.',
          answer: '−(ln x)/(2x²) − 1/(4x²) + c',
        },
        {
          id: 11,
          question: 'Find ∫ √x ln x dx.',
          type: 'Medium',
          explaination:
            'Let u = ln x and dv/dx = x^(1/2), so du/dx = 1/x and v = (2/3)x^(3/2). Then ∫ √x ln x dx = (2/3)x^(3/2) ln x − ∫ (2/3)x^(1/2) dx = (2/3)x^(3/2) ln x − (4/9)x^(3/2) + c.',
          answer: '(2/3)x^(3/2) ln x − (4/9)x^(3/2) + c',
        },
        {
          id: 12,
          question: 'Find ∫ (1/√x) ln x dx.',
          type: 'Medium',
          explaination:
            'Let u = ln x and dv/dx = x^(−1/2), so du/dx = 1/x and v = 2√x. Then ∫ (1/√x) ln x dx = 2√x ln x − ∫ 2/√x dx = 2√x ln x − 4√x + c.',
          answer: '2√x ln x − 4√x + c',
        },
      ],
      'reduction-formula': [
        {
          id: 1,
          question:
            'Let Iₙ = ∫ xⁿeˣ dx.  a) Use integration by parts once to show that Iₙ = xⁿeˣ − nIₙ₋₁.  b) Hence evaluate ∫₀¹ x³eˣ dx.',
          type: 'Hard',
          explaination:
            'a) Let u = xⁿ and dv/dx = eˣ, so du/dx = nxⁿ⁻¹ and v = eˣ. Then Iₙ = xⁿeˣ − ∫ nxⁿ⁻¹eˣ dx = xⁿeˣ − nIₙ₋₁.  b) Use the reduction formula with limits 0 to 1, where Iₙ now means ∫₀¹ xⁿeˣ dx. Each boundary term is [xⁿeˣ]₀¹ = e for n ≥ 1. Start from I₀ = ∫₀¹ eˣ dx = e − 1. Then I₁ = e − I₀ = e − (e − 1) = 1, I₂ = e − 2I₁ = e − 2, and I₃ = e − 3I₂ = e − 3(e − 2) = 6 − 2e.',
          answer: 'a) Shown in the explanation  b) 6 − 2e',
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
