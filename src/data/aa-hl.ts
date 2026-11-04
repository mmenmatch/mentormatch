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
//     description:
//       'Learn counting techniques, permutations, and probability principles to solve problems involving possible outcomes and events.',
//     subtopics: [
//       {
//         title: 'Multiplication Principle',
//         slug: 'multiplication-principle',
//         description:
//           'Learn how to count possible outcomes when a process involves multiple successive stages or choices.',
//       },
//       {
//         title: 'Addition Principle',
//         slug: 'addition-principle',
//         description:
//           'Understand how to count possible outcomes by adding the numbers of choices across mutually exclusive cases.',
//       },
//       {
//         title: 'Multiplication & Addition Principles',
//         slug: 'Multiplication-Addition-Principles',
//         description:
//           'Combine the multiplication and addition principles to solve counting problems involving multiple stages and alternative cases.',
//       },
//       {
//         title: 'Permutations',
//         slug: 'permutations',
//         description:
//           'Explore permutations to calculate the number of possible ordered arrangements of objects, including arrangements with restrictions.',
//       },
//     ],
//   },
//   {
//     title: 'Binomial Series',
//     slug: 'binomial-series',
//     description:
//       'Explore binomial expansions and infinite series to determine coefficients, expand expressions, and solve approximation problems.',
//     subtopics: [
//       {
//         title: 'Binomial Expansion – applications & approximations',
//         slug: 'binomial-expansion-applications-and-approximations',
//         description:
//           'Apply binomial expansions to estimate numerical values, simplify expressions, and solve approximation problems.',
//       },
//       {
//         title: 'Binomial Series – coefficient problems',
//         slug: 'binomial-series-coefficient-problems',
//         description:
//           'Find unknown coefficients and specific terms in binomial expansions and series using algebraic techniques.',
//       },
//       {
//         title: 'Binomial Expansion of (1+x)^n, |x|<1',
//         slug: 'binomial-expansion',
//         description:
//           'Expand (1 + x)^n as a binomial series for |x| < 1 and identify its terms and coefficients.',
//       },
//       {
//         title: 'Binomial Expansion – factoring out constant',
//         slug: 'binomial-expansion-factoring-out-constant',
//         description:
//           'Factor out constants and rewrite expressions into a suitable form before applying binomial expansion techniques.',
//       },
//     ],
//   },
//   {
//     title: 'Complex Numbers',
//     slug: 'complex-numbers',
//     description:
//       'Study complex numbers using Cartesian, modulus–argument, and Euler forms, and apply complex-number theorems to solve mathematical problems.',
//     subtopics: [
//       {
//         title: 'Modulus–Argument Form',
//         slug: 'modulus-argument-form',
//         description:
//           'Represent complex numbers using their modulus and argument, and convert between Cartesian and modulus–argument forms.',
//       },
//       {
//         title: 'Euler Form',
//         slug: 'euler-form',
//         description:
//           'Express complex numbers in Euler form using the exponential representation and apply it to complex-number calculations.',
//       },
//       {
//         title: "De Moivre's Theorem – Evaluation",
//         slug: 'De-Moivres-theorem-evaluation',
//         description:
//           'Apply De Moivre’s theorem to evaluate powers of complex numbers and simplify expressions involving modulus and argument.',
//       },
//       {
//         title: 'nth Roots – Geometric Interpretation',
//         slug: 'nth-roots-geometric-interpretation',
//         description:
//           'Calculate the nth roots of complex numbers and interpret their positions and geometric relationships on the Argand diagram.',
//       },
//     ],
//   },
//   {
//     title: 'Vectors',
//     slug: 'vectors',
//     description:
//       'Explore vector operations, scalar and cross products, angles between vectors, and vector equations of lines to solve geometric problems.',
//     subtopics: [
//       {
//         title: 'Scalar Product',
//         slug: 'scalar-product',
//         description:
//           'Calculate the scalar product of vectors and use it to determine angles, perpendicularity, and geometric relationships.',
//       },
//       {
//         title: 'Angle Between Vectors',
//         slug: 'angle-between-vectors',
//         description:
//           'Find the angle between two vectors using the scalar product formula and interpret the result geometrically.',
//       },
//       {
//         title: 'Vector equation of a line',
//         slug: 'vector-equation-of-a-line',
//         description:
//           'Construct and use vector equations of lines to describe their positions, directions, intersections, and relationships in space.',
//       },
//       {
//         title: 'Cross Product – Scalar Triple Product',
//         slug: 'cross-Pproduct-scalar-triple-product',
//         description:
//           'Use cross products and scalar triple products to calculate vector quantities, determine areas and volumes, and test coplanarity.',
//       },
//     ],
//   },
//   {
//     title: 'Calculus',
//     slug: 'calculus',
//     description:
//       'Develop calculus skills through limits, implicit differentiation, integration techniques, and reduction formulae for solving advanced mathematical problems.',
//     subtopics: [
//       {
//         title: 'Limits',
//         slug: 'limits',
//         description:
//           'Evaluate limits algebraically and understand how functions behave as their inputs approach particular values.',
//       },
//       {
//         title: 'Implicit Differentiation',
//         slug: 'implicit-differentiation',
//         description:
//           'Differentiate equations involving multiple variables using implicit differentiation and apply the chain rule to find derivatives.',
//       },
//       {
//         title: 'Integration by Parts',
//         slug: 'integration-by-parts',
//         description:
//           'Apply integration by parts to evaluate integrals involving products of functions and choose suitable terms for simplification.',
//       },
//       {
//         title: 'Reduction Formula',
//         slug: 'reduction-formula',
//         description:
//           'Derive and apply reduction formulae to express complex integrals in terms of simpler integrals that can be evaluated systematically.',
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
      {
        title: 'Combinations',
        slug: 'combinations',
        description:
          'Count selections where order does not matter using the nCr formula, and combine choices from different groups.',
      },
      {
        title: 'Counting (Distribution into Boxes)',
        slug: 'counting-distribution-into-boxes',
        description:
          'Count the ways of distributing objects into boxes by treating each placement as a separate choice.',
      },
      {
        title: 'Combinations (Geometric)',
        slug: 'combinations-geometric',
        description:
          'Use combinations to count the triangles, quadrilaterals and other shapes formed from a set of points.',
      },
      {
        title: 'Combinations (Handshake Problem)',
        slug: 'combinations-handshake-problem',
        description:
          'Model handshakes as selections of two people and solve for the number of handshakes or the group size.',
      },
      {
        title: 'Combinations with restrictions',
        slug: 'combinations-with-restrictions',
        description:
          'Count selections with conditions, such as at least one of a type, using cases and complementary counting.',
      },
      {
        title: 'Probability – Combinations',
        slug: 'probability-combinations',
        description: 'Find probabilities by counting favourable and total selections with nCr.',
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
      {
        title: 'First Four Terms',
        slug: 'first-four-terms',
        description:
          'Use the binomial theorem to write the first four terms of an expansion in ascending powers.',
      },
      {
        title: "Pascal's Triangle Expansion",
        slug: 'pascals-triangle-expansion',
        description:
          "Use the rows of Pascal's triangle as coefficients to expand brackets raised to small powers.",
      },
      {
        title: 'Binomial Coefficients',
        slug: 'binomial-coefficients',
        description: 'Calculate binomial coefficients ⁿCᵣ and use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ.',
      },
      {
        title: 'Finding Unknown r',
        slug: 'finding-unknown-r',
        description: 'Find the value or values of r that give a stated binomial coefficient.',
      },
      {
        title: 'Finding Unknown n',
        slug: 'finding-unknown-n',
        description: 'Work back from a given binomial coefficient or term to find the power n.',
      },
      {
        title: 'Expansion with Rational Terms',
        slug: 'expansion-with-rational-terms',
        description:
          'Expand brackets containing fractional terms such as 2/x and find specific coefficients.',
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
      {
        title: 'Powers of i',
        slug: 'powers-of-i',
        description: 'Simplify powers of i using the repeating cycle i, −1, −i, 1.',
      },
      {
        title: 'Solving quadratic equations with complex roots',
        slug: 'solving-quadratic-equations-with-complex-roots',
        description:
          'Solve quadratic equations with a negative discriminant and write the complex roots as a conjugate pair.',
      },
      {
        title: 'Division / Writing in x+iy form',
        slug: 'division-writing-in-x-iy-form',
        description:
          'Divide complex numbers by multiplying by the conjugate and write the result in the form x + iy.',
      },
      {
        title: 'Argand diagram',
        slug: 'argand-diagram',
        description:
          'Plot complex numbers on the Argand diagram, including conjugates, multiples, sums and differences.',
      },
      {
        title: 'Cartesian Form from Polar',
        slug: 'cartesian-form-from-polar',
        description:
          'Convert complex numbers from modulus–argument form to Cartesian form using exact values.',
      },
      {
        title: 'Loci on Argand Diagram',
        slug: 'loci-on-argand-diagram',
        description:
          'Sketch and interpret loci such as circles, half-lines and perpendicular bisectors on the Argand diagram.',
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
      {
        title: 'Parallel vectors — finding unknowns',
        slug: 'parallel-vectors-finding-unknowns',
        description:
          'Use scalar multiples to find unknown components that make two vectors parallel.',
      },
      {
        title: 'Unit vectors',
        slug: 'unit-vectors',
        description:
          'Find a unit vector in the direction of a given vector by dividing by its magnitude.',
      },
      {
        title: 'Magnitude of a vector',
        slug: 'magnitude-of-a-vector',
        description:
          'Calculate the magnitude of a vector and solve for unknown components from a given length.',
      },
      {
        title: 'Collinearity',
        slug: 'collinearity',
        description:
          'Show that points are collinear and find unknown coordinates using parallel vectors through a common point.',
      },
      {
        title: 'Foot of perpendicular from a point to a line',
        slug: 'foot-of-perpendicular-from-a-point-to-a-line',
        description: 'Find the point on a line closest to a given point using the scalar product.',
      },
      {
        title: 'Area of Triangle using Cross Product',
        slug: 'area-of-triangle-using-cross-product',
        description:
          'Find the area of a triangle in 3D as half the magnitude of the cross product of two sides.',
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
      {
        title: 'Increasing & Decreasing Functions',
        slug: 'increasing-decreasing-functions',
        description:
          'Find the intervals where a function is increasing or decreasing from the sign of its derivative.',
      },
      {
        title: 'Continuity',
        slug: 'continuity',
        description:
          'Test whether a function is continuous at a point by comparing one-sided limits with its value.',
      },
      {
        title: 'Related Rates of Change',
        slug: 'related-rates-of-change',
        description: 'Use the chain rule to connect the rates of change of related quantities.',
      },
      {
        title: 'Differentiation – Inverse Trigonometric Functions',
        slug: 'differentiation-inverse-trigonometric-functions',
        description: 'Differentiate arcsin, arccos and arctan, combined with the chain rule.',
      },
      {
        title: 'Integration – Inverse Trigonometric Forms',
        slug: 'integration-inverse-trigonometric-forms',
        description: 'Recognise and evaluate integrals that give arcsin and arctan results.',
      },
      {
        title: 'Integration – Completing the Square (arctan form)',
        slug: 'integration-completing-the-square-arctan-form',
        description:
          'Complete the square in a quadratic denominator to integrate using the arctan form.',
      },
    ],
  },
]

// export const AAHLQuestionAndAnswer = [
//   {
//     'counting-and-probability': {
//       title: 'Counting and Probability',
//       'multiplication-principle': [
//         {
//           id: 1,
//           question:
//             '(a) Find the number of ways of choosing one item from a list of eight AND one item from a different list of five.  (b) Find the number of ways of choosing one item from a list of seven AND one item from a different list of four.',
//           type: 'Easy',
//           explaination:
//             '(a) Apply the multiplication principle: 8 × 5 = 40.  (b) Apply the multiplication principle: 7 × 4 = 28.',
//           answer: '(a) 40  (b) 28',
//         },
//       ],
//       'addition-principle': [
//         {
//           id: 1,
//           question:
//             '(a) Find the number of ways of choosing one item from a list of eight OR one item from a different list of five.  (b) Find the number of ways of choosing one item from a list of seven OR one item from a different list of four.',
//           type: 'Easy',
//           explaination:
//             '(a) Apply the addition principle: 8 + 5 = 13.  (b) Apply the addition principle: 7 + 4 = 11.',
//           answer: '(a) 13  (b) 11',
//         },
//       ],
//       'Multiplication-Addition-Principles': [
//         {
//           id: 1,
//           question:
//             '(a) Find the number of ways of choosing one item from EACH of a list of eight, a list of five and a list of seven.  (b) Find the number of ways of choosing one item from EITHER a list of eight, a list of five OR a list of seven.',
//           type: 'Easy',
//           explaination:
//             '(a) Apply the multiplication principle: 8 × 5 × 7 = 280.  (b) Apply the addition principle: 8 + 5 + 7 = 20.',
//           answer: '(a) 280  (b) 20',
//         },
//       ],
//       permutations: [
//         {
//           id: 1,
//           question: 'Find the number of permutations of: (a) nine items  (b) six items.',
//           type: 'Easy',
//           explaination:
//             'Use n! for the number of permutations of n items. (a) 9! = 362,880.  (b) 6! = 720.',
//           answer: '(a) 362,880  (b) 720',
//         },
//         {
//           id: 2,
//           question:
//             '(a) Find the number of permutations of four items followed by five different items.  (b) Find the number of permutations of ten items followed by three different items.',
//           type: 'Easy',
//           explaination:
//             'Two independent groups, so multiply their factorials. (a) 4! × 5! = 24 × 120 = 2,880.  (b) 10! × 3! = 3,628,800 × 6 = 21,772,800.',
//           answer: '(a) 2,880  (b) 21,772,800',
//         },
//         {
//           id: 3,
//           question:
//             '(a) Find the number of permutations of either two items followed by five, or three items followed by four.  (b) Find the number of permutations of either three items followed by seven, or four items followed by six.',
//           type: 'Easy',
//           explaination:
//             'Two mutually exclusive cases, so add the products. (a) 2! × 5! + 3! × 4! = 2 × 120 + 6 × 24 = 240 + 144 = 384.  (b) 3! × 7! + 4! × 6! = 6 × 5,040 + 24 × 720 = 30,240 + 17,280 = 47,520.',
//           answer: '(a) 384  (b) 47,520',
//         },
//       ],
//     },
//   },
//   {
//     'binomial-series': {
//       title: 'Binomial Series',
//       'binomial-expansion-applications-and-approximations': [
//         {
//           id: 1,
//           question:
//             'a) Find the first three terms in ascending powers of x in the expansion of √(9 + x).  b) Find the values of x for which the expansion is valid.  c) By substituting an appropriate value of x into the expansion in part a, find an approximation to √10 to five decimal places.',
//           type: 'Medium',
//           explaination:
//             'a) √(9 + x) = 3(1 + x/9)^(1/2) = 3(1 + x/18 − x²/648 + …) = 3 + x/6 − x²/216.  b) The expansion is valid when |x/9| < 1, so |x| < 9.  c) Set 9 + x = 10, so x = 1, which lies within |x| < 9. Substituting: 3 + 1/6 − 1/216 ≈ 3.16204. (The true value is √10 ≈ 3.16228; more terms are needed for full five-decimal accuracy.)',
//           answer: 'a) 3 + x/6 − x²/216  b) −9 < x < 9  c) √10 ≈ 3.16204',
//         },
//         {
//           id: 2,
//           question:
//             'a) Find the first three terms in ascending powers of x in the expansion of ∛(8 − 3x).  b) Find the values of x for which the expansion is valid.  c) By substituting an appropriate value of x into the expansion in part a, find an approximation to ∛5 to five decimal places.',
//           type: 'Medium',
//           explaination:
//             'a) ∛(8 − 3x) = 2(1 − 3x/8)^(1/3) = 2(1 + (1/3)(−3x/8) + [(1/3)(−2/3)/2](9x²/64) + …) = 2(1 − x/8 − x²/64 + …) = 2 − x/4 − x²/32.  b) The expansion is valid when |3x/8| < 1, so |x| < 8/3.  c) Set 8 − 3x = 5, so x = 1, which lies within |x| < 8/3. Substituting: 2 − 1/4 − 1/32 = 1.71875. (The true value is ∛5 ≈ 1.70998; more terms are needed for full five-decimal accuracy.)',
//           answer: 'a) 2 − x/4 − x²/32  b) −8/3 < x < 8/3  c) ∛5 ≈ 1.71875',
//         },
//         {
//           id: 3,
//           question:
//             'a) Find the first three terms in ascending powers of x in the expansion of x(1 + 3x)⁻².  b) Find the values of x for which the expansion is valid.',
//           type: 'Medium',
//           explaination:
//             'a) (1 + 3x)⁻² = 1 + (−2)(3x) + [(−2)(−3)/2](3x)² + … = 1 − 6x + 27x² + … Multiply the entire expansion by x: x − 6x² + 27x³.  b) The expansion is valid when |3x| < 1, so |x| < 1/3.',
//           answer: 'a) x − 6x² + 27x³  b) −1/3 < x < 1/3',
//         },
//         {
//           id: 4,
//           question: 'Find the first three terms in the expansion of (1 + x)/(1 − x).',
//           type: 'Medium',
//           explaination:
//             'Write as (1 + x)(1 − x)⁻¹. Expand (1 − x)⁻¹ = 1 + x + x² + … Then multiply by (1 + x): (1 + x + x²) + (x + x²) + … = 1 + 2x + 2x² + …',
//           answer: '1 + 2x + 2x²',
//         },
//         {
//           id: 5,
//           question: 'Find the coefficient of x² in the expansion of (1 + 6x)^(1/4)(2 + x).',
//           type: 'Hard',
//           explaination:
//             '(1 + 6x)^(1/4) = 1 + (1/4)(6x) + [(1/4)(−3/4)/2!](6x)² + … = 1 + 3x/2 − 27x²/8 + … Multiply by (2 + x) and collect the x² terms: 2 × (−27/8) + 1 × (3/2) = −27/4 + 6/4 = −21/4.',
//           answer: '−21/4',
//         },
//         {
//           id: 6,
//           question: 'Find the coefficient of x² in the expansion of ((1 + x)/(1 + 2x))².',
//           type: 'Hard',
//           explaination:
//             'Write as (1 + x)²(1 + 2x)⁻². (1 + 2x)⁻² = 1 − 4x + 12x² − … and (1 + x)² = 1 + 2x + x². Collect the x² terms: 1(12) + 2(−4) + 1(1) = 12 − 8 + 1 = 5.',
//           answer: '5',
//         },
//         {
//           id: 7,
//           question:
//             'a) Find the first four terms in ascending powers of x in the expansion of √(1 − 4x).  b) Find the values of x for which the expansion is valid.  c) By substituting x = 0.02 into the expansion in part a, find an approximation to √23 to five decimal places.',
//           type: 'Medium',
//           explaination:
//             'a) (1 − 4x)^(1/2) = 1 + (1/2)(−4x) + [(1/2)(−1/2)/2](−4x)² + [(1/2)(−1/2)(−3/2)/6](−4x)³ + … = 1 − 2x − 2x² − 4x³.  b) The expansion is valid when |4x| < 1, so |x| < 1/4.  c) When x = 0.02, 1 − 4x = 0.92 = 23/25, so √0.92 = √23/5 and √23 = 5√0.92. Substituting: 1 − 0.04 − 0.0008 − 0.000032 = 0.959168. Therefore √23 ≈ 5 × 0.959168 = 4.79584.',
//           answer: 'a) 1 − 2x − 2x² − 4x³  b) −1/4 < x < 1/4  c) √23 ≈ 4.79584',
//         },
//       ],
//       'binomial-series-coefficient-problems': [
//         {
//           id: 1,
//           question:
//             'The coefficient of x³ in the expansion of (1 + ax)⁻³ is −640. Find the value of a.',
//           type: 'Medium',
//           explaination:
//             'Using the binomial expansion for a negative integer power, the coefficient of x³ in (1 + ax)⁻³ is [(−3)(−4)(−5)/3!]a³ = −10a³. Set −10a³ = −640, so a³ = 64 and a = 4.',
//           answer: 'a = 4',
//         },
//         {
//           id: 2,
//           question: '(1 + ax)ⁿ = 1 − 4x + 9x² + bx³ + …  Find the value of b.',
//           type: 'Hard',
//           explaination:
//             'Match coefficients to form simultaneous equations: an = −4 and [n(n − 1)/2]a² = 9. From an = −4, a = −4/n. Substituting: [n(n − 1)/2](16/n²) = 9, so 8(n − 1)/n = 9, giving 8n − 8 = 9n and n = −8. Then a = 1/2. Coefficient of x³: [n(n − 1)(n − 2)/6]a³ = [(−8)(−9)(−10)/6] × 1/8 = −120 × 1/8 = −15.',
//           answer: 'b = −15',
//         },
//         {
//           id: 3,
//           question: '(1 − x)(1 + ax)ⁿ = 1 + x² + bx³ + …  Find the value of b.',
//           type: 'Hard',
//           explaination:
//             'Expand (1 + ax)ⁿ = 1 + anx + [n(n − 1)a²/2]x² + [n(n − 1)(n − 2)a³/6]x³ + … and multiply by (1 − x). Coefficient of x: an − 1 = 0, so an = 1. Coefficient of x²: n(n − 1)a²/2 − an = 1, so n(n − 1)a²/2 = 2. With a = 1/n: (n − 1)/(2n) = 2, so n − 1 = 4n, giving n = −1/3 and a = −3. Coefficient of x³: n(n − 1)(n − 2)a³/6 − n(n − 1)a²/2 = [(−1/3)(−4/3)(−7/3)(−27)]/6 − 2 = 28/6 − 2 = 14/3 − 6/3 = 8/3.',
//           answer: 'b = 8/3',
//         },
//         {
//           id: 4,
//           question: '(1 + ax)ⁿ = 1 + 21x + bx² + bx³ + …  Given that b ≠ 0, find the value of b.',
//           type: 'Hard',
//           explaination:
//             'Coefficient of x: an = 21. The coefficients of x² and x³ are both b, so n(n − 1)a²/2 = n(n − 1)(n − 2)a³/6. Divide both sides by n(n − 1)a²/6, which is non-zero since b ≠ 0: 3 = (n − 2)a = an − 2a = 21 − 2a. So a = 9 and n = 21/9 = 7/3. Then b = n(n − 1)a²/2 = (7/3)(4/3)(81)/2 = 252/2 = 126.',
//           answer: 'b = 126',
//         },
//       ],
//       'binomial-expansion': [
//         {
//           id: 1,
//           question:
//             'Use the binomial expansion to find the first three terms and state the values of x for which each expansion is valid.  a) (1 + x)⁻²  b) (1 + x)⁻³',
//           type: 'Easy',
//           explaination:
//             'Use (1 + x)ⁿ = 1 + nx + [n(n − 1)/2!]x² + …  a) n = −2: 1 + (−2)x + [(−2)(−3)/2]x² = 1 − 2x + 3x².  b) n = −3: 1 + (−3)x + [(−3)(−4)/2]x² = 1 − 3x + 6x². Both are valid for |x| < 1.',
//           answer: 'a) 1 − 2x + 3x², valid for |x| < 1  b) 1 − 3x + 6x², valid for |x| < 1',
//         },
//         {
//           id: 2,
//           question:
//             'Use the binomial expansion to find the first three terms and state the values of x for which each expansion is valid.  a) (1 + x)^(1/3)  b) (1 + x)^(1/4)',
//           type: 'Easy',
//           explaination:
//             'a) n = 1/3: 1 + (1/3)x + [(1/3)(−2/3)/2!]x² = 1 + x/3 − x²/9.  b) n = 1/4: 1 + (1/4)x + [(1/4)(−3/4)/2]x² = 1 + x/4 − 3x²/32. Both are valid for |x| < 1.',
//           answer: 'a) 1 + x/3 − x²/9, valid for |x| < 1  b) 1 + x/4 − 3x²/32, valid for |x| < 1',
//         },
//         {
//           id: 3,
//           question:
//             'Use the binomial expansion to find the first three terms and state the values of x for which each expansion is valid.  a) (1 − x/4)⁻¹  b) (1 + x/2)⁻⁴',
//           type: 'Easy',
//           explaination:
//             'a) Replace x with −x/4 and use n = −1: 1 + (−1)(−x/4) + [(−1)(−2)/2](x²/16) = 1 + x/4 + x²/16. Valid when |x/4| < 1, so |x| < 4.  b) Replace x with x/2 and use n = −4: 1 + (−4)(x/2) + [(−4)(−5)/2](x²/4) = 1 − 2x + 10(x²/4) = 1 − 2x + 5x²/2. Valid when |x/2| < 1, so |x| < 2.',
//           answer: 'a) 1 + x/4 + x²/16, valid for |x| < 4  b) 1 − 2x + 5x²/2, valid for |x| < 2',
//         },
//         {
//           id: 4,
//           question:
//             'Use the binomial expansion to find the first three terms and state the values of x for which each expansion is valid.  a) (1 + 2x)^(−1/2)  b) (1 − 3x)^(−2/3)',
//           type: 'Easy',
//           explaination:
//             'a) Replace x with 2x and use n = −1/2: 1 + (−1/2)(2x) + [(−1/2)(−3/2)/2](4x²) = 1 − x + (3/8)(4x²) = 1 − x + 3x²/2. Valid when |2x| < 1, so |x| < 1/2.  b) Replace x with −3x and use n = −2/3: 1 + (−2/3)(−3x) + [(−2/3)(−5/3)/2](9x²) = 1 + 2x + (5/9)(9x²) = 1 + 2x + 5x². Valid when |3x| < 1, so |x| < 1/3.',
//           answer: 'a) 1 − x + 3x²/2, valid for |x| < 1/2  b) 1 + 2x + 5x², valid for |x| < 1/3',
//         },
//       ],
//       'binomial-expansion-factoring-out-constant': [
//         {
//           id: 1,
//           question:
//             'Use the method for expressions not in the form (1 + x)ⁿ to find the first three terms and state the values of x for which each expansion is valid.  a) (3 + x)⁻¹  b) (5 + x)⁻²',
//           type: 'Medium',
//           explaination:
//             'a) 3⁻¹(1 + x/3)⁻¹ = (1/3)(1 − x/3 + x²/9 − …) = 1/3 − x/9 + x²/27. Valid when |x/3| < 1, so |x| < 3.  b) 5⁻²(1 + x/5)⁻² = (1/25)(1 − 2x/5 + 3x²/25 − …) = 1/25 − 2x/125 + 3x²/625. Valid when |x/5| < 1, so |x| < 5.',
//           answer:
//             'a) 1/3 − x/9 + x²/27, valid for |x| < 3  b) 1/25 − 2x/125 + 3x²/625, valid for |x| < 5',
//         },
//         {
//           id: 2,
//           question:
//             'Use the method for expressions not in the form (1 + x)ⁿ to find the first three terms and state the values of x for which each expansion is valid.  a) (8 + x)^(1/3)  b) (9 + x)^(1/2)',
//           type: 'Medium',
//           explaination:
//             'a) 8^(1/3)(1 + x/8)^(1/3) = 2(1 + (1/3)(x/8) + [(1/3)(−2/3)/2](x²/64) + …) = 2(1 + x/24 − x²/576 + …) = 2 + x/12 − x²/288. Valid when |x/8| < 1, so |x| < 8.  b) 9^(1/2)(1 + x/9)^(1/2) = 3(1 + x/18 − x²/648 + …) = 3 + x/6 − x²/216. Valid when |x/9| < 1, so |x| < 9.',
//           answer: 'a) 2 + x/12 − x²/288, valid for |x| < 8  b) 3 + x/6 − x²/216, valid for |x| < 9',
//         },
//         {
//           id: 3,
//           question:
//             'Use the method for expressions not in the form (1 + x)ⁿ to find the first three terms and state the values of x for which each expansion is valid.  a) (2 − 3x)⁻³  b) (3 + 4x)⁻¹',
//           type: 'Medium',
//           explaination:
//             'a) 2⁻³(1 − 3x/2)⁻³ = (1/8)(1 + (−3)(−3x/2) + [(−3)(−4)/2](9x²/4) + …) = (1/8)(1 + 9x/2 + 27x²/2 + …) = 1/8 + 9x/16 + 27x²/16. Valid when |3x/2| < 1, so |x| < 2/3.  b) 3⁻¹(1 + 4x/3)⁻¹ = (1/3)(1 − 4x/3 + 16x²/9 − …) = 1/3 − 4x/9 + 16x²/27. Valid when |4x/3| < 1, so |x| < 3/4.',
//           answer:
//             'a) 1/8 + 9x/16 + 27x²/16, valid for |x| < 2/3  b) 1/3 − 4x/9 + 16x²/27, valid for |x| < 3/4',
//         },
//         {
//           id: 4,
//           question:
//             'Use the method for expressions not in the form (1 + x)ⁿ to find the first three terms and state the values of x for which each expansion is valid.  a) (16 + x/2)^(7/4)  b) (4 − x/3)^(3/2)',
//           type: 'Hard',
//           explaination:
//             'a) 16^(7/4)(1 + x/32)^(7/4) = 128(1 + (7/4)(x/32) + [(7/4)(3/4)/2](x²/1024) + …) = 128(1 + 7x/128 + 21x²/32768 + …) = 128 + 7x + 21x²/256. Valid when |x/32| < 1, so |x| < 32.  b) 4^(3/2)(1 − x/12)^(3/2) = 8(1 + (3/2)(−x/12) + [(3/2)(1/2)/2](x²/144) + …) = 8(1 − x/8 + x²/384 + …) = 8 − x + x²/48. Valid when |x/12| < 1, so |x| < 12.',
//           answer:
//             'a) 128 + 7x + 21x²/256, valid for |x| < 32  b) 8 − x + x²/48, valid for |x| < 12',
//         },
//         {
//           id: 5,
//           question:
//             'Find the expansion, in ascending powers of x up to and including the term in x², of 4/∛(8 + x).',
//           type: 'Medium',
//           explaination:
//             'Write as 4(8 + x)^(−1/3) = 4 × 8^(−1/3)(1 + x/8)^(−1/3). Since 8^(−1/3) = 1/2, this is 2(1 + x/8)^(−1/3). With n = −1/3: 2[1 + (−1/3)(x/8) + [(−1/3)(−4/3)/2](x²/64) + …] = 2[1 − x/24 + x²/288 + …] = 2 − x/12 + x²/144. Valid for |x| < 8.',
//           answer: '2 − x/12 + x²/144, valid for |x| < 8',
//         },
//         {
//           id: 6,
//           question:
//             'Find the expansion, in ascending powers of x up to and including the term in x², of 1/(2 − 5x).',
//           type: 'Medium',
//           explaination:
//             '1/(2 − 5x) = (1/2)(1 − 5x/2)⁻¹ = (1/2)(1 + 5x/2 + 25x²/4 + …) = 1/2 + 5x/4 + 25x²/8. Valid when |5x/2| < 1, so |x| < 2/5.',
//           answer: '1/2 + 5x/4 + 25x²/8, valid for |x| < 2/5',
//         },
//       ],
//     },
//   },
//   {
//     'complex-numbers': {
//       title: 'Complex Numbers',
//       'modulus-argument-form': [
//         {
//           id: 1,
//           question: 'Write the following in the form r cis θ, where −π < θ ≤ π:  a) −4  b) 5',
//           type: 'Easy',
//           explaination:
//             'a) |−4| = 4 and −4 lies on the negative real axis, so arg(−4) = π. Therefore −4 = 4 cis π.  b) |5| = 5 and 5 lies on the positive real axis, so arg(5) = 0. Therefore 5 = 5 cis 0.',
//           answer: 'a) 4 cis π  b) 5 cis 0',
//         },
//         {
//           id: 2,
//           question: 'Write the following in the form r cis θ, where −π < θ ≤ π:  a) 3i  b) −2i',
//           type: 'Easy',
//           explaination:
//             'a) |3i| = 3 and 3i lies on the positive imaginary axis, so arg(3i) = π/2.  b) |−2i| = 2 and −2i lies on the negative imaginary axis, so arg(−2i) = −π/2.',
//           answer: 'a) 3 cis (π/2)  b) 2 cis (−π/2)',
//         },
//         {
//           id: 3,
//           question:
//             'Write the following in the form r cis θ, where −π < θ ≤ π:  a) √3 + i  b) 2√3 − 2i',
//           type: 'Easy',
//           explaination:
//             'a) r = √(3 + 1) = 2. The number is in the first quadrant, so θ = arctan(1/√3) = π/6.  b) r = √(12 + 4) = 4. The number is in the fourth quadrant, so θ = arctan(−2/(2√3)) = −π/6.',
//           answer: 'a) 2 cis (π/6)  b) 4 cis (−π/6)',
//         },
//         {
//           id: 4,
//           question:
//             'Write the following in the form r cis θ, where −π < θ ≤ π:  a) −1 − i  b) −3 + 3i',
//           type: 'Easy',
//           explaination:
//             'a) r = √(1 + 1) = √2. The number is in the third quadrant with reference angle arctan(1) = π/4, so θ = −π + π/4 = −3π/4.  b) r = √(9 + 9) = 3√2. The number is in the second quadrant with reference angle π/4, so θ = π − π/4 = 3π/4.',
//           answer: 'a) √2 cis (−3π/4)  b) 3√2 cis (3π/4)',
//         },
//         {
//           id: 5,
//           question: 'Write the following in the form r cis θ, where 0 ≤ θ < 2π:  a) −5i  b) −7i',
//           type: 'Easy',
//           explaination:
//             'Both numbers lie on the negative imaginary axis, so in the range 0 ≤ θ < 2π the argument is 3π/2. The modulus is the size of the imaginary part.  a) r = 5.  b) r = 7.',
//           answer: 'a) 5 cis (3π/2)  b) 7 cis (3π/2)',
//         },
//         {
//           id: 6,
//           question:
//             'Write the following in the form r cis θ, where 0 ≤ θ < 2π:  a) 3 − 3√3i  b) 4 − 4i',
//           type: 'Easy',
//           explaination:
//             'a) r = √(9 + 27) = 6. The number is in the fourth quadrant with reference angle arctan(√3) = π/3, so θ = 2π − π/3 = 5π/3.  b) r = √(16 + 16) = 4√2. The number is in the fourth quadrant with reference angle π/4, so θ = 2π − π/4 = 7π/4.',
//           answer: 'a) 6 cis (5π/3)  b) 4√2 cis (7π/4)',
//         },
//         {
//           id: 7,
//           question:
//             'Write the following in the form r cis θ, where 0 ≤ θ < 2π:  a) −2 − 2i  b) −1 − √3i',
//           type: 'Easy',
//           explaination:
//             'a) r = √(4 + 4) = 2√2. The number is in the third quadrant with reference angle π/4, so θ = π + π/4 = 5π/4.  b) r = √(1 + 3) = 2. The number is in the third quadrant with reference angle arctan(√3) = π/3, so θ = π + π/3 = 4π/3.',
//           answer: 'a) 2√2 cis (5π/4)  b) 2 cis (4π/3)',
//         },
//         {
//           id: 8,
//           question:
//             'Write z in Cartesian form given:  a) |z| = 10, arg z = −π/2  b) |z| = 8, arg z = π/2',
//           type: 'Easy',
//           explaination:
//             'Use z = r(cos θ + i sin θ).  a) z = 10(cos(−π/2) + i sin(−π/2)) = 10(0 − i) = −10i.  b) z = 8(cos(π/2) + i sin(π/2)) = 8(0 + i) = 8i.',
//           answer: 'a) z = −10i  b) z = 8i',
//         },
//         {
//           id: 9,
//           question:
//             'The complex numbers z and w have arguments between 0 and π. Given that zw = −4√2 + 4√2i and z/w = 1 + √3i, find the modulus and argument of z and the modulus and argument of w.',
//           type: 'Hard',
//           explaination:
//             'zw = −4√2 + 4√2i has modulus √(32 + 32) = 8 and argument 3π/4. z/w = 1 + √3i has modulus 2 and argument π/3. Moduli: |z|² = |zw| × |z/w| = 8 × 2 = 16, so |z| = 4, and |w|² = |zw| ÷ |z/w| = 8 ÷ 2 = 4, so |w| = 2. Arguments: arg z + arg w = 3π/4 and arg z − arg w = π/3. Since both arguments lie between 0 and π, their sum is between 0 and 2π and their difference is between −π and π, so no multiples of 2π need adding. Adding the equations: 2 arg z = 13π/12, so arg z = 13π/24. Subtracting: 2 arg w = 5π/12, so arg w = 5π/24. Both lie between 0 and π.',
//           answer: '|z| = 4, arg z = 13π/24;  |w| = 2, arg w = 5π/24',
//         },
//         {
//           id: 10,
//           question:
//             'The complex numbers z and w are defined by z = 1/√2 + (1/√2)i and w = 1 + √3i.  a) Find: (i) |z|, (ii) arg z, (iii) |w|, (iv) arg w.  b) Find w/z in modulus–argument form.  c) Find w/z in Cartesian form.  d) Hence find an exact surd expression for cos(π/12).',
//           type: 'Hard',
//           explaination:
//             'a) |z| = √(1/2 + 1/2) = 1 and z is in the first quadrant with equal real and imaginary parts, so arg z = π/4. |w| = √(1 + 3) = 2 and arg w = arctan(√3) = π/3.  b) Divide the moduli and subtract the arguments: |w/z| = 2/1 = 2 and arg(w/z) = π/3 − π/4 = π/12, so w/z = 2 cis (π/12).  c) Since |z| = 1, dividing by z is the same as multiplying by its conjugate: w/z = (1 + √3i)(1/√2 − (1/√2)i) = (1/√2)(1 − i + √3i + √3) = [(1 + √3) + (√3 − 1)i]/√2 = (√6 + √2)/2 + ((√6 − √2)/2)i.  d) From part b, the real part of w/z is 2 cos(π/12). Equating with part c: 2 cos(π/12) = (√6 + √2)/2, so cos(π/12) = (√6 + √2)/4.',
//           answer:
//             'a) (i) 1, (ii) π/4, (iii) 2, (iv) π/3  b) 2 cis (π/12)  c) (√6 + √2)/2 + ((√6 − √2)/2)i  d) cos(π/12) = (√6 + √2)/4',
//         },
//       ],
//       'euler-form': [
//         {
//           id: 1,
//           question: 'Write the following numbers in Euler form:  a) −3  b) 2',
//           type: 'Medium',
//           explaination:
//             'Use z = re^(iθ), where r = |z| and θ = arg z.  a) −3 lies on the negative real axis, so r = 3 and θ = π, giving 3e^(iπ).  b) 2 lies on the positive real axis, so r = 2 and θ = 0, giving 2e^(i0) = 2.',
//           answer: 'a) 3e^(iπ)  b) 2e^(i0) = 2',
//         },
//         {
//           id: 2,
//           question: 'Write the following numbers in Euler form:  a) i  b) −√2i',
//           type: 'Medium',
//           explaination:
//             'a) |i| = 1 and i lies on the positive imaginary axis, so arg(i) = π/2, giving e^(iπ/2).  b) |−√2i| = √2 and −√2i lies on the negative imaginary axis, so arg = −π/2, giving √2e^(−iπ/2). This can also be written as √2e^(i3π/2), since −π/2 and 3π/2 differ by 2π.',
//           answer: 'a) e^(iπ/2)  b) √2e^(−iπ/2) (or √2e^(i3π/2))',
//         },
//         {
//           id: 3,
//           question: 'Write the following numbers in Euler form:  a) 1 + i  b) √3 + i',
//           type: 'Medium',
//           explaination:
//             'a) r = √(1 + 1) = √2. The number is in the first quadrant, so θ = arctan(1) = π/4, giving √2e^(iπ/4).  b) r = √(3 + 1) = 2. The number is in the first quadrant, so θ = arctan(1/√3) = π/6, giving 2e^(iπ/6).',
//           answer: 'a) √2e^(iπ/4)  b) 2e^(iπ/6)',
//         },
//         {
//           id: 4,
//           question: 'Write the following in Euler form:  a) cis 0.4  b) cis 1.8',
//           type: 'Medium',
//           explaination: 'Use cis θ = e^(iθ).  a) cis 0.4 = e^(0.4i).  b) cis 1.8 = e^(1.8i).',
//           answer: 'a) e^(0.4i)  b) e^(1.8i)',
//         },
//         {
//           id: 5,
//           question: 'Write the following in Euler form:  a) 4 cis (π/5)  b) 7 cis (π/10)',
//           type: 'Medium',
//           explaination:
//             'Use r cis θ = re^(iθ).  a) 4 cis (π/5) = 4e^(iπ/5).  b) 7 cis (π/10) = 7e^(iπ/10).',
//           answer: 'a) 4e^(iπ/5)  b) 7e^(iπ/10)',
//         },
//       ],
//       'De-Moivres-theorem-evaluation': [
//         {
//           id: 1,
//           question: 'Find, in Cartesian form, 8/(1 − √3i)⁵.',
//           type: 'Medium',
//           explaination:
//             "Convert the denominator to modulus–argument form first: 1 − √3i has modulus √(1 + 3) = 2 and lies in the fourth quadrant, so 1 − √3i = 2 cis (−π/3). By De Moivre's theorem, (1 − √3i)⁵ = 2⁵ cis (−5π/3) = 32 cis (π/3), since −5π/3 + 2π = π/3. Then 8/(32 cis (π/3)) = (1/4) cis (−π/3) = (1/4)(1/2 − (√3/2)i) = 1/8 − (√3/8)i.",
//           answer: '1/8 − (√3/8)i',
//         },
//       ],
//       'nth-roots-geometric-interpretation': [
//         {
//           id: 1,
//           question:
//             'The five vertices of a regular pentagon, shown on an Argand diagram, correspond to the solutions of an equation of the form zⁿ = w, where w is a complex number. One vertex is at −√3i. Find the values of n and w.',
//           type: 'Hard',
//           explaination:
//             "The pentagon has five vertices, so there are five solutions and n = 5. All the vertices lie on a circle of radius √3 centred at the origin. The vertex −√3i lies on the negative imaginary axis, so it has modulus √3 and argument −π/2, giving the root z = √3 cis (−π/2). Since z⁵ = w, by De Moivre's theorem w = (√3)⁵ cis (5 × (−π/2)) = 9√3 cis (−5π/2). Adding 2π to the argument gives −π/2, so w = 9√3 cis (−π/2) = −9√3i.",
//           answer: 'n = 5, w = −9√3i',
//         },
//       ],
//     },
//   },
//   {
//     vectors: {
//       title: 'Vectors',
//       'scalar-product': [
//         {
//           id: 1,
//           question:
//             'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 7, |b| = 10 and the angle between them is 60°.',
//           type: 'Easy',
//           explaination: 'a · b = 7 × 10 × cos 60° = 70 × 0.5 = 35.',
//           answer: 'a · b = 35',
//         },
//         {
//           id: 2,
//           question:
//             'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 5, |b| = 8 and the angle between them is 60°.',
//           type: 'Easy',
//           explaination: 'a · b = 5 × 8 × cos 60° = 40 × 0.5 = 20.',
//           answer: 'a · b = 20',
//         },
//         {
//           id: 3,
//           question:
//             'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 13, |b| = 20 and the angle between them is 75°.',
//           type: 'Easy',
//           explaination: 'a · b = 13 × 20 × cos 75° = 260 cos 75° ≈ 260 × 0.2588 ≈ 67.3.',
//           answer: 'a · b = 260 cos 75° ≈ 67.3',
//         },
//         {
//           id: 4,
//           question:
//             'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 3, |b| = 5 and the angle between them is 50°.',
//           type: 'Easy',
//           explaination: 'a · b = 3 × 5 × cos 50° = 15 cos 50° ≈ 15 × 0.6428 ≈ 9.64.',
//           answer: 'a · b = 15 cos 50° ≈ 9.64',
//         },
//         {
//           id: 5,
//           question:
//             'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 12, |b| = 7 and the angle between them is 130°.',
//           type: 'Easy',
//           explaination:
//             'a · b = 12 × 7 × cos 130° = 84 cos 130° ≈ 84 × (−0.6428) ≈ −54.0. The scalar product is negative because the angle between the vectors is obtuse.',
//           answer: 'a · b = 84 cos 130° ≈ −54.0',
//         },
//         {
//           id: 6,
//           question:
//             'Use the formula a · b = |a||b| cos θ to find a · b, given that |a| = 9, |b| = 5 and the angle between them is 145°.',
//           type: 'Easy',
//           explaination:
//             'a · b = 9 × 5 × cos 145° = 45 cos 145° ≈ 45 × (−0.8192) ≈ −36.9. The scalar product is negative because the angle between the vectors is obtuse.',
//           answer: 'a · b = 45 cos 145° ≈ −36.9',
//         },
//       ],
//       'angle-between-vectors': [
//         {
//           id: 1,
//           question:
//             'Find the angle between the vectors (5, 1, 2) and (1, −2, 3), giving your answer to the nearest degree.',
//           type: 'Medium',
//           explaination:
//             'a · b = 5(1) + 1(−2) + 2(3) = 5 − 2 + 6 = 9. |a| = √(25 + 1 + 4) = √30 and |b| = √(1 + 4 + 9) = √14. cos θ = 9/(√30 × √14) = 9/√420 ≈ 0.4392, so θ = arccos(0.4392) ≈ 64°.',
//           answer: 'θ ≈ 64°',
//         },
//         {
//           id: 2,
//           question:
//             'Find the angle between the vectors (3, 0, 2) and (0, −1, 1), giving your answer to the nearest degree.',
//           type: 'Medium',
//           explaination:
//             'a · b = 3(0) + 0(−1) + 2(1) = 2. |a| = √(9 + 0 + 4) = √13 and |b| = √(0 + 1 + 1) = √2. cos θ = 2/(√13 × √2) = 2/√26 ≈ 0.3922, so θ = arccos(0.3922) ≈ 67°.',
//           answer: 'θ ≈ 67°',
//         },
//         {
//           id: 3,
//           question:
//             'Find the angle between the vectors 2i + 2j − k and i − j + 3k, giving your answer to the nearest degree.',
//           type: 'Medium',
//           explaination:
//             'a · b = 2(1) + 2(−1) + (−1)(3) = 2 − 2 − 3 = −3. |a| = √(4 + 4 + 1) = 3 and |b| = √(1 + 1 + 9) = √11. cos θ = −3/(3√11) = −1/√11 ≈ −0.3015, so θ = arccos(−0.3015) ≈ 108°. The angle is obtuse because the scalar product is negative.',
//           answer: 'θ ≈ 108°',
//         },
//         {
//           id: 4,
//           question:
//             'Find the angle between the vectors i − j and 2i + 3j, giving your answer to the nearest degree.',
//           type: 'Medium',
//           explaination:
//             'a · b = 1(2) + (−1)(3) = 2 − 3 = −1. |a| = √(1 + 1) = √2 and |b| = √(4 + 9) = √13. cos θ = −1/(√2 × √13) = −1/√26 ≈ −0.1961, so θ = arccos(−0.1961) ≈ 101°. The angle is obtuse because the scalar product is negative.',
//           answer: 'θ ≈ 101°',
//         },
//       ],
//       'vector-equation-of-a-line': [
//         {
//           id: 1,
//           question:
//             'Find the angle between the vectors (5, 1, 2) and (1, −2, 3), giving your answer to the nearest degree.',
//           type: 'Medium',
//           explaination:
//             'a · b = 5(1) + 1(−2) + 2(3) = 5 − 2 + 6 = 9. |a| = √(25 + 1 + 4) = √30 and |b| = √(1 + 4 + 9) = √14. cos θ = 9/(√30 × √14) = 9/√420 ≈ 0.4392, so θ = arccos(0.4392) ≈ 64°.',
//           answer: 'θ ≈ 64°',
//         },
//         {
//           id: 2,
//           question:
//             'Find the angle between the vectors (3, 0, 2) and (0, −1, 1), giving your answer to the nearest degree.',
//           type: 'Medium',
//           explaination:
//             'a · b = 3(0) + 0(−1) + 2(1) = 2. |a| = √(9 + 0 + 4) = √13 and |b| = √(0 + 1 + 1) = √2. cos θ = 2/(√13 × √2) = 2/√26 ≈ 0.3922, so θ = arccos(0.3922) ≈ 67°.',
//           answer: 'θ ≈ 67°',
//         },
//         {
//           id: 3,
//           question:
//             'Find the angle between the vectors 2i + 2j − k and i − j + 3k, giving your answer to the nearest degree.',
//           type: 'Medium',
//           explaination:
//             'a · b = 2(1) + 2(−1) + (−1)(3) = 2 − 2 − 3 = −3. |a| = √(4 + 4 + 1) = 3 and |b| = √(1 + 1 + 9) = √11. cos θ = −3/(3√11) = −1/√11 ≈ −0.3015, so θ = arccos(−0.3015) ≈ 108°. The angle is obtuse because the scalar product is negative.',
//           answer: 'θ ≈ 108°',
//         },
//         {
//           id: 4,
//           question:
//             'Find the angle between the vectors i − j and 2i + 3j, giving your answer to the nearest degree.',
//           type: 'Medium',
//           explaination:
//             'a · b = 1(2) + (−1)(3) = 2 − 3 = −1. |a| = √(1 + 1) = √2 and |b| = √(4 + 9) = √13. cos θ = −1/(√2 × √13) = −1/√26 ≈ −0.1961, so θ = arccos(−0.1961) ≈ 101°. The angle is obtuse because the scalar product is negative.',
//           answer: 'θ ≈ 101°',
//         },
//       ],
//       'cross-Pproduct-scalar-triple-product': [
//         {
//           id: 1,
//           question: 'Explain why (a × b) · a = 0.',
//           type: 'Medium',
//           explaination:
//             'By definition, the cross product a × b is perpendicular to both a and b. The scalar product of two perpendicular vectors is zero, so (a × b) · a = 0.',
//           answer: 'Because a × b is perpendicular to a',
//         },
//         {
//           id: 2,
//           question: 'Evaluate (a × b) · (a − b).',
//           type: 'Hard',
//           explaination:
//             'Expand using the distributive property of the scalar product: (a × b) · (a − b) = (a × b) · a − (a × b) · b. Since a × b is perpendicular to both a and b, both terms are zero, so the result is 0 − 0 = 0.',
//           answer: '0',
//         },
//       ],
//     },
//   },
//   {
//     calculus: {
//       title: 'Calculus',
//       limits: [
//         {
//           id: 1,
//           question: 'Find: lim (x → 0) of 12x/(3x)',
//           type: 'Easy',
//           explaination:
//             'For x ≠ 0, the x terms cancel: 12x/(3x) = 4. The expression is constant, so the limit as x → 0 is 4.',
//           answer: '4',
//         },
//         {
//           id: 2,
//           question: 'Find: lim (x → 0) of 8x/(4x)',
//           type: 'Easy',
//           explaination:
//             'For x ≠ 0, the x terms cancel: 8x/(4x) = 2. The expression is constant, so the limit as x → 0 is 2.',
//           answer: '2',
//         },
//         {
//           id: 3,
//           question: 'Find: lim (x → 0) of (x² − 2x)/x',
//           type: 'Easy',
//           explaination:
//             'Direct substitution gives 0/0, so factorise first: (x² − 2x)/x = x(x − 2)/x = x − 2 for x ≠ 0. As x → 0, x − 2 → −2.',
//           answer: '−2',
//         },
//         {
//           id: 4,
//           question: 'Find: lim (x → 0) of (x² + 5x)/(2x)',
//           type: 'Easy',
//           explaination:
//             'Direct substitution gives 0/0, so factorise first: (x² + 5x)/(2x) = x(x + 5)/(2x) = (x + 5)/2 for x ≠ 0. As x → 0, (x + 5)/2 → 5/2.',
//           answer: '5/2',
//         },
//       ],
//       // Paste into the 'implicit-differentiation' array
//       'implicit-differentiation': [
//         {
//           id: 1,
//           question:
//             'Use implicit differentiation to find the gradient of the curve x² + y² = 25 at the point (3, −4).',
//           type: 'Easy',
//           explaination:
//             'Differentiate both sides with respect to x: 2x + 2y(dy/dx) = 0, so dy/dx = −x/y. At (3, −4): dy/dx = −3/(−4) = 3/4.',
//           answer: 'dy/dx = 3/4',
//         },
//         {
//           id: 2,
//           question:
//             'Use implicit differentiation to find the gradient of the curve x³ + y² = 9 at the point (2, 1).',
//           type: 'Easy',
//           explaination:
//             'Differentiate both sides with respect to x: 3x² + 2y(dy/dx) = 0, so dy/dx = −3x²/(2y). At (2, 1): dy/dx = −12/2 = −6.',
//           answer: 'dy/dx = −6',
//         },
//         {
//           id: 3,
//           question:
//             'Use implicit differentiation to find the gradient of the curve eˣ + eʸ = 2e at the point (1, 1).',
//           type: 'Easy',
//           explaination:
//             'Differentiate both sides with respect to x: eˣ + eʸ(dy/dx) = 0, so dy/dx = −eˣ/eʸ. At (1, 1): dy/dx = −e/e = −1.',
//           answer: 'dy/dx = −1',
//         },
//         {
//           id: 4,
//           question:
//             'Use implicit differentiation to find the gradient of the curve eˣ + e²ʸ = e + 1 at the point (1, 0).',
//           type: 'Easy',
//           explaination:
//             'Differentiate both sides with respect to x, using the chain rule on e²ʸ: eˣ + 2e²ʸ(dy/dx) = 0, so dy/dx = −eˣ/(2e²ʸ). At (1, 0): dy/dx = −e/(2 × 1) = −e/2.',
//           answer: 'dy/dx = −e/2',
//         },
//         {
//           id: 5,
//           question:
//             'Use implicit differentiation to find the gradient of the curve ln x + ln y = 4 at the point (e, e³).',
//           type: 'Easy',
//           explaination:
//             'Differentiate both sides with respect to x: 1/x + (1/y)(dy/dx) = 0, so dy/dx = −y/x. At (e, e³): dy/dx = −e³/e = −e².',
//           answer: 'dy/dx = −e²',
//         },
//         {
//           id: 6,
//           question:
//             'Use implicit differentiation to find the gradient of the curve ln(x) + ln(y²) = 2 at the point (1, e).',
//           type: 'Easy',
//           explaination:
//             'Rewrite as ln x + 2 ln y = 2. Differentiate both sides with respect to x: 1/x + (2/y)(dy/dx) = 0, so dy/dx = −y/(2x). At (1, e): dy/dx = −e/2.',
//           answer: 'dy/dx = −e/2',
//         },
//         {
//           id: 7,
//           question:
//             'Use implicit differentiation to find the gradient of the curve x² + y² = x + y + 2 at the point (2, 1).',
//           type: 'Medium',
//           explaination:
//             'Differentiate both sides with respect to x: 2x + 2y(dy/dx) = 1 + dy/dx. Collect the dy/dx terms: (2y − 1)(dy/dx) = 1 − 2x, so dy/dx = (1 − 2x)/(2y − 1). At (2, 1): dy/dx = (1 − 4)/(2 − 1) = −3.',
//           answer: 'dy/dx = −3',
//         },
//         {
//           id: 8,
//           question:
//             'Use implicit differentiation to find the gradient of the curve x³ + y³ = x + 4y at the point (1, 2).',
//           type: 'Medium',
//           explaination:
//             'Differentiate both sides with respect to x: 3x² + 3y²(dy/dx) = 1 + 4(dy/dx). Collect the dy/dx terms: (3y² − 4)(dy/dx) = 1 − 3x², so dy/dx = (1 − 3x²)/(3y² − 4). At (1, 2): dy/dx = (1 − 3)/(12 − 4) = −2/8 = −1/4.',
//           answer: 'dy/dx = −1/4',
//         },
//         {
//           id: 9,
//           question:
//             'Use implicit differentiation to find dy/dx in terms of x and y for xy² + yx² = 3.',
//           type: 'Medium',
//           explaination:
//             'Use the product rule on each term: (y² + 2xy(dy/dx)) + (x²(dy/dx) + 2xy) = 0. Collect the dy/dx terms: (2xy + x²)(dy/dx) = −(y² + 2xy), so dy/dx = −(y² + 2xy)/(2xy + x²).',
//           answer: 'dy/dx = −(y² + 2xy)/(2xy + x²)',
//         },
//         {
//           id: 10,
//           question:
//             'Use implicit differentiation to find dy/dx in terms of x and y for xy + x²y² = 5.',
//           type: 'Medium',
//           explaination:
//             'Use the product rule on each term: (y + x(dy/dx)) + (2xy² + 2x²y(dy/dx)) = 0. Collect the dy/dx terms: (x + 2x²y)(dy/dx) = −(y + 2xy²), so dy/dx = −(y + 2xy²)/(x + 2x²y). Factorising, this is −y(1 + 2xy)/(x(1 + 2xy)) = −y/x.',
//           answer: 'dy/dx = −(y + 2xy²)/(x + 2x²y) = −y/x',
//         },
//         {
//           id: 11,
//           question:
//             'Use implicit differentiation to find dy/dx in terms of x and y for x/y + y/x = x.',
//           type: 'Medium',
//           explaination:
//             'Use the quotient rule on each fraction: (y − x(dy/dx))/y² + (x(dy/dx) − y)/x² = 1. Multiply through by x²y²: x²y − x³(dy/dx) + xy²(dy/dx) − y³ = x²y². Collect the dy/dx terms: (xy² − x³)(dy/dx) = x²y² − x²y + y³, so dy/dx = (x²y² − x²y + y³)/(xy² − x³).',
//           answer: 'dy/dx = (x²y² − x²y + y³)/(xy² − x³)',
//         },
//         {
//           id: 12,
//           question:
//             'Use implicit differentiation to find dy/dx in terms of x and y for x/(x + y) = y² − 3.',
//           type: 'Medium',
//           explaination:
//             'Use the quotient rule on the left-hand side and the chain rule on the right: [(x + y) − x(1 + dy/dx)]/(x + y)² = 2y(dy/dx). The numerator simplifies to y − x(dy/dx), so y − x(dy/dx) = 2y(x + y)²(dy/dx). Collect the dy/dx terms: y = [x + 2y(x + y)²](dy/dx), so dy/dx = y/(x + 2y(x + y)²).',
//           answer: 'dy/dx = y/(x + 2y(x + y)²)',
//         },
//         {
//           id: 13,
//           question:
//             'Use implicit differentiation to find dy/dx in terms of x and y for ln x + ln y = ln(x + y) − 1.',
//           type: 'Medium',
//           explaination:
//             'Differentiate both sides with respect to x: 1/x + (1/y)(dy/dx) = (1 + dy/dx)/(x + y). Collect the dy/dx terms: [1/y − 1/(x + y)](dy/dx) = 1/(x + y) − 1/x. The left bracket simplifies to x/(y(x + y)) and the right-hand side to −y/(x(x + y)). Therefore dy/dx = [−y/(x(x + y))] × [y(x + y)/x] = −y²/x².',
//           answer: 'dy/dx = −y²/x²',
//         },
//         {
//           id: 14,
//           question:
//             'Use implicit differentiation to find dy/dx in terms of x and y for ln(x + 2y) = x² − y.',
//           type: 'Medium',
//           explaination:
//             'Differentiate both sides with respect to x: (1 + 2(dy/dx))/(x + 2y) = 2x − dy/dx. Multiply by (x + 2y): 1 + 2(dy/dx) = 2x(x + 2y) − (x + 2y)(dy/dx). Collect the dy/dx terms: (x + 2y + 2)(dy/dx) = 2x(x + 2y) − 1, so dy/dx = (2x² + 4xy − 1)/(x + 2y + 2).',
//           answer: 'dy/dx = (2x² + 4xy − 1)/(x + 2y + 2)',
//         },
//         {
//           id: 15,
//           question:
//             'Use implicit differentiation to find dy/dx in terms of x and y for e^(x + y) = x + 1/y.',
//           type: 'Hard',
//           explaination:
//             'Differentiate both sides with respect to x: e^(x + y)(1 + dy/dx) = 1 − (1/y²)(dy/dx). Collect the dy/dx terms: [e^(x + y) + 1/y²](dy/dx) = 1 − e^(x + y), so dy/dx = (1 − e^(x + y))/(e^(x + y) + 1/y²). Multiplying the numerator and denominator by y² gives dy/dx = y²(1 − e^(x + y))/(y²e^(x + y) + 1).',
//           answer: 'dy/dx = y²(1 − e^(x + y))/(y²e^(x + y) + 1)',
//         },
//         {
//           id: 16,
//           question:
//             'Use implicit differentiation to find dy/dx in terms of x and y for e^(y²) + e^(x²) = 3.',
//           type: 'Hard',
//           explaination:
//             'Differentiate both sides with respect to x, using the chain rule on each exponential: 2y e^(y²)(dy/dx) + 2x e^(x²) = 0, so dy/dx = −x e^(x²)/(y e^(y²)).',
//           answer: 'dy/dx = −x e^(x²)/(y e^(y²))',
//         },
//         {
//           id: 17,
//           question:
//             'Use implicit differentiation to find dy/dx in terms of x and y for sin(xy) = x + y.',
//           type: 'Medium',
//           explaination:
//             'Differentiate both sides with respect to x, using the chain rule and the product rule on xy: cos(xy)(y + x(dy/dx)) = 1 + dy/dx. Collect the dy/dx terms: (x cos(xy) − 1)(dy/dx) = 1 − y cos(xy), so dy/dx = (1 − y cos(xy))/(x cos(xy) − 1).',
//           answer: 'dy/dx = (1 − y cos(xy))/(x cos(xy) − 1)',
//         },
//         {
//           id: 18,
//           question:
//             'Use implicit differentiation to find dy/dx in terms of x and y for cos(x + y) = y.',
//           type: 'Medium',
//           explaination:
//             'Differentiate both sides with respect to x: −sin(x + y)(1 + dy/dx) = dy/dx. Rearrange: −sin(x + y) = (1 + sin(x + y))(dy/dx), so dy/dx = −sin(x + y)/(1 + sin(x + y)).',
//           answer: 'dy/dx = −sin(x + y)/(1 + sin(x + y))',
//         },
//       ],
//       'integration-by-parts': [
//         {
//           id: 1,
//           question: 'Find ∫ x cos 2x dx.',
//           type: 'Easy',
//           explaination:
//             'Let u = x and dv/dx = cos 2x, so du/dx = 1 and v = (sin 2x)/2. Then ∫ x cos 2x dx = (x sin 2x)/2 − ∫ (sin 2x)/2 dx = (x sin 2x)/2 + (cos 2x)/4 + c.',
//           answer: '(x sin 2x)/2 + (cos 2x)/4 + c',
//         },
//         {
//           id: 2,
//           question: 'Find ∫ x cos 3x dx.',
//           type: 'Easy',
//           explaination:
//             'Let u = x and dv/dx = cos 3x, so du/dx = 1 and v = (sin 3x)/3. Then ∫ x cos 3x dx = (x sin 3x)/3 − ∫ (sin 3x)/3 dx = (x sin 3x)/3 + (cos 3x)/9 + c.',
//           answer: '(x sin 3x)/3 + (cos 3x)/9 + c',
//         },
//         {
//           id: 3,
//           question: 'Find ∫ x sin(x/2) dx.',
//           type: 'Easy',
//           explaination:
//             'Let u = x and dv/dx = sin(x/2), so du/dx = 1 and v = −2 cos(x/2). Then ∫ x sin(x/2) dx = −2x cos(x/2) + 2∫ cos(x/2) dx = −2x cos(x/2) + 4 sin(x/2) + c.',
//           answer: '−2x cos(x/2) + 4 sin(x/2) + c',
//         },
//         {
//           id: 4,
//           question: 'Find ∫ x sin(x/3) dx.',
//           type: 'Easy',
//           explaination:
//             'Let u = x and dv/dx = sin(x/3), so du/dx = 1 and v = −3 cos(x/3). Then ∫ x sin(x/3) dx = −3x cos(x/3) + 3∫ cos(x/3) dx = −3x cos(x/3) + 9 sin(x/3) + c.',
//           answer: '−3x cos(x/3) + 9 sin(x/3) + c',
//         },
//         {
//           id: 5,
//           question: 'Find ∫ xe^(−2x) dx.',
//           type: 'Easy',
//           explaination:
//             'Let u = x and dv/dx = e^(−2x), so du/dx = 1 and v = −(1/2)e^(−2x). Then ∫ xe^(−2x) dx = −(x/2)e^(−2x) + ∫ (1/2)e^(−2x) dx = −(x/2)e^(−2x) − (1/4)e^(−2x) + c.',
//           answer: '−(x/2)e^(−2x) − (1/4)e^(−2x) + c',
//         },
//         {
//           id: 6,
//           question: 'Find ∫ xe^(−3x) dx.',
//           type: 'Easy',
//           explaination:
//             'Let u = x and dv/dx = e^(−3x), so du/dx = 1 and v = −(1/3)e^(−3x). Then ∫ xe^(−3x) dx = −(x/3)e^(−3x) + ∫ (1/3)e^(−3x) dx = −(x/3)e^(−3x) − (1/9)e^(−3x) + c.',
//           answer: '−(x/3)e^(−3x) − (1/9)e^(−3x) + c',
//         },
//         {
//           id: 7,
//           question: 'Find ∫ x ln x dx.',
//           type: 'Easy',
//           explaination:
//             'Let u = ln x and dv/dx = x, so du/dx = 1/x and v = x²/2. Then ∫ x ln x dx = (x²/2) ln x − ∫ x/2 dx = (x²/2) ln x − x²/4 + c.',
//           answer: '(x²/2) ln x − x²/4 + c',
//         },
//         {
//           id: 8,
//           question: 'Find ∫ x² ln x dx.',
//           type: 'Medium',
//           explaination:
//             'Let u = ln x and dv/dx = x², so du/dx = 1/x and v = x³/3. Then ∫ x² ln x dx = (x³/3) ln x − ∫ x²/3 dx = (x³/3) ln x − x³/9 + c.',
//           answer: '(x³/3) ln x − x³/9 + c',
//         },
//         {
//           id: 9,
//           question: 'Find ∫ (1/x²) ln x dx.',
//           type: 'Medium',
//           explaination:
//             'Let u = ln x and dv/dx = x⁻², so du/dx = 1/x and v = −1/x. Then ∫ (1/x²) ln x dx = −(ln x)/x + ∫ 1/x² dx = −(ln x)/x − 1/x + c.',
//           answer: '−(ln x)/x − 1/x + c',
//         },
//         {
//           id: 10,
//           question: 'Find ∫ (1/x³) ln x dx.',
//           type: 'Medium',
//           explaination:
//             'Let u = ln x and dv/dx = x⁻³, so du/dx = 1/x and v = −1/(2x²). Then ∫ (1/x³) ln x dx = −(ln x)/(2x²) + ∫ 1/(2x³) dx = −(ln x)/(2x²) − 1/(4x²) + c.',
//           answer: '−(ln x)/(2x²) − 1/(4x²) + c',
//         },
//         {
//           id: 11,
//           question: 'Find ∫ √x ln x dx.',
//           type: 'Medium',
//           explaination:
//             'Let u = ln x and dv/dx = x^(1/2), so du/dx = 1/x and v = (2/3)x^(3/2). Then ∫ √x ln x dx = (2/3)x^(3/2) ln x − ∫ (2/3)x^(1/2) dx = (2/3)x^(3/2) ln x − (4/9)x^(3/2) + c.',
//           answer: '(2/3)x^(3/2) ln x − (4/9)x^(3/2) + c',
//         },
//         {
//           id: 12,
//           question: 'Find ∫ (1/√x) ln x dx.',
//           type: 'Medium',
//           explaination:
//             'Let u = ln x and dv/dx = x^(−1/2), so du/dx = 1/x and v = 2√x. Then ∫ (1/√x) ln x dx = 2√x ln x − ∫ 2/√x dx = 2√x ln x − 4√x + c.',
//           answer: '2√x ln x − 4√x + c',
//         },
//       ],
//       'reduction-formula': [
//         {
//           id: 1,
//           question:
//             'Let Iₙ = ∫ xⁿeˣ dx.  a) Use integration by parts once to show that Iₙ = xⁿeˣ − nIₙ₋₁.  b) Hence evaluate ∫₀¹ x³eˣ dx.',
//           type: 'Hard',
//           explaination:
//             'a) Let u = xⁿ and dv/dx = eˣ, so du/dx = nxⁿ⁻¹ and v = eˣ. Then Iₙ = xⁿeˣ − ∫ nxⁿ⁻¹eˣ dx = xⁿeˣ − nIₙ₋₁.  b) Use the reduction formula with limits 0 to 1, where Iₙ now means ∫₀¹ xⁿeˣ dx. Each boundary term is [xⁿeˣ]₀¹ = e for n ≥ 1. Start from I₀ = ∫₀¹ eˣ dx = e − 1. Then I₁ = e − I₀ = e − (e − 1) = 1, I₂ = e − 2I₁ = e − 2, and I₃ = e − 3I₂ = e − 3(e − 2) = 6 − 2e.',
//           answer: 'a) Shown in the explanation  b) 6 − 2e',
//         },
//       ],
//     },
//   },
// ]
export const AAHLQuestionAndAnswer = [
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
      combinations: [
        {
          id: 1,
          question:
            '(a) Find the number of ways of choosing five items from nine.  (b) Find the number of ways of choosing three items from eight.',
          type: 'Easy',
          explaination:
            'Use ⁿCᵣ = n!/(r!(n − r)!).  (a) ⁹C₅ = 9!/(5! 4!) = 126.  (b) ⁸C₃ = 8!/(3! 5!) = 56.',
          answer: '(a) ⁹C₅ = 126  (b) ⁸C₃ = 56',
        },
        {
          id: 2,
          question:
            'A box contains 25 different chocolates: ten dark, eight milk and seven white. Find the number of ways of choosing three chocolates such that they are all a different type.',
          type: 'Medium',
          explaination:
            'Choose 1 dark from 10, 1 milk from 8 and 1 white from 7, then multiply: ¹⁰C₁ × ⁸C₁ × ⁷C₁ = 10 × 8 × 7 = 560.',
          answer: '10 × 8 × 7 = 560',
        },
      ],
      'counting-distribution-into-boxes': [
        {
          id: 1,
          question:
            'Find the number of ways that:  (a) five presents can be put into two boxes  (b) three presents can be put into four boxes.',
          type: 'Hard',
          explaination:
            'The presents and the boxes are distinguishable, so each present is placed independently.  (a) Each of the 5 presents can go into either of the 2 boxes: 2⁵ = 32.  (b) Each of the 3 presents can go into any of the 4 boxes: 4³ = 64.',
          answer: '(a) 2⁵ = 32  (b) 4³ = 64',
        },
      ],
      'combinations-geometric': [
        {
          id: 1,
          question:
            'Ten points on a plane are drawn so that no three lie in a straight line. If the points are connected by straight lines and vertices can only occur at the original points, find the number of different:  (a) triangles that can be formed  (b) quadrilaterals that can be formed.',
          type: 'Medium',
          explaination:
            'No three points are collinear, so every selection of points gives a valid shape.  (a) A triangle is determined by choosing 3 of the 10 points: ¹⁰C₃ = 120.  (b) A quadrilateral is determined by choosing 4 of the 10 points: ¹⁰C₄ = 210.',
          answer: '(a) ¹⁰C₃ = 120  (b) ¹⁰C₄ = 210',
        },
      ],
      'combinations-handshake-problem': [
        {
          id: 1,
          question:
            'At a party, everyone shakes hands with everyone else. In total there are 465 handshakes.  Find the number of people at the party.',
          type: 'Medium',
          explaination:
            'Each handshake is a selection of 2 people from n, so ⁿC₂ = n(n − 1)/2 = 465. Then n(n − 1) = 930, so n² − n − 930 = 0, which factorises as (n − 31)(n + 30) = 0. Since n > 0, n = 31.',
          answer: 'n = 31',
        },
      ],
      'combinations-with-restrictions': [
        {
          id: 1,
          question:
            'Alessia has seven different soft toys and five different toy cars she likes to play with.  Find the number of ways she can choose four of these to play with if at least one of them must be a toy car.',
          type: 'Medium',
          explaination:
            'Use complementary counting. Total ways to choose 4 from 12: ¹²C₄ = 495. Ways with no toy cars (all soft toys): ⁷C₄ = 35. At least one toy car: 495 − 35 = 460.',
          answer: '¹²C₄ − ⁷C₄ = 495 − 35 = 460',
        },
        {
          id: 2,
          question:
            'A box contains 25 different chocolates: ten dark, eight milk and seven white. Find the number of ways of choosing three chocolates such that they are not all dark.',
          type: 'Medium',
          explaination:
            'Use complementary counting. Total ways to choose 3 from 25: ²⁵C₃ = 2300. All dark: ¹⁰C₃ = 120. Not all dark: 2300 − 120 = 2180.',
          answer: '²⁵C₃ − ¹⁰C₃ = 2300 − 120 = 2180',
        },
        {
          id: 3,
          question:
            'Eight students are to be chosen from 16 girls and 13 boys.  Find the number of ways this can be done if at least two girls must be chosen.',
          type: 'Hard',
          explaination:
            'Use complementary counting. Total ways to choose 8 from 29: ²⁹C₈ = 4,292,145. No girls: ¹³C₈ = 1287. Exactly one girl: ¹⁶C₁ × ¹³C₇ = 16 × 1716 = 27,456. At least two girls: 4,292,145 − 1287 − 27,456 = 4,263,402.',
          answer: '²⁹C₈ − ¹³C₈ − ¹⁶C₁ × ¹³C₇ = 4,263,402',
        },
        {
          id: 4,
          question:
            'A six-a-side football team is to be selected from short-listed players from the top two sides in the league. Eight players are short-listed from Team A and seven from Team B.  Find the number of ways the side can be chosen if there must be at least two players from Team A and at least one from Team B.',
          type: 'Hard',
          explaination:
            'Total ways to choose 6 from 15: ¹⁵C₆ = 3003. Subtract the selections that break the conditions: no players from Team B (all 6 from A): ⁸C₆ = 28; no players from Team A (all 6 from B): ⁷C₆ = 7; exactly one player from Team A and five from B: ⁸C₁ × ⁷C₅ = 8 × 21 = 168. Valid selections: 3003 − 28 − 7 − 168 = 2800.',
          answer: '¹⁵C₆ − ⁸C₆ − ⁷C₆ − ⁸C₁ × ⁷C₅ = 3003 − 28 − 7 − 168 = 2800',
        },
        {
          id: 5,
          question:
            'In a word game, there are 26 tiles each printed with a different letter.  Find the number of ways of choosing seven tiles if at least two of them are vowels.  Note: There are 5 vowels (A, E, I, O, U) and 21 consonants.',
          type: 'Hard',
          explaination:
            'Use complementary counting. Total ways to choose 7 from 26: ²⁶C₇ = 657,800. No vowels: ²¹C₇ = 116,280. Exactly one vowel: ⁵C₁ × ²¹C₆ = 5 × 54,264 = 271,320. At least two vowels: 657,800 − 116,280 − 271,320 = 270,200.',
          answer: '²⁶C₇ − ²¹C₇ − ⁵C₁ × ²¹C₆ = 657,800 − 116,280 − 271,320 = 270,200',
        },
      ],
      'probability-combinations': [
        {
          id: 1,
          question:
            'Five cards are dealt from a randomly shuffled standard deck of 52 playing cards. Find the probability of getting all spades.',
          type: 'Hard',
          explaination:
            'There are 13 spades. P(all spades) = ¹³C₅ ÷ ⁵²C₅ = 1287/2,598,960 ≈ 0.000495.',
          answer: 'P = 1287/2,598,960 ≈ 4.95 × 10⁻⁴',
        },
        {
          id: 2,
          question:
            'Five cards are dealt from a randomly shuffled standard deck of 52 playing cards. Find the probability of getting all red cards.',
          type: 'Hard',
          explaination:
            'There are 26 red cards. P(all red) = ²⁶C₅ ÷ ⁵²C₅ = 65,780/2,598,960 ≈ 0.0253.',
          answer: 'P = 65,780/2,598,960 ≈ 0.0253',
        },
        {
          id: 3,
          question:
            'Five cards are dealt from a randomly shuffled standard deck of 52 playing cards. Find the probability of getting at least two black cards.',
          type: 'Hard',
          explaination:
            'There are 26 black cards. Use complementary counting: P(at least 2 black) = 1 − P(0 black) − P(1 black). P(0 black) = ²⁶C₅ ÷ ⁵²C₅ = 65,780/2,598,960. P(1 black) = (²⁶C₁ × ²⁶C₄) ÷ ⁵²C₅ = (26 × 14,950)/2,598,960 = 388,700/2,598,960. So P(at least 2 black) = 1 − 454,480/2,598,960 ≈ 0.825.',
          answer: 'P ≈ 0.825',
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
      'first-four-terms': [
        {
          id: 1,
          question:
            'Find the first four terms of the binomial expansion of (2 + x)⁶ in increasing powers of x.',
          type: 'Easy',
          explaination:
            'Use the binomial theorem: ⁶C₀ × 2⁶ + ⁶C₁ × 2⁵ x + ⁶C₂ × 2⁴ x² + ⁶C₃ × 2³ x³ = 64 + 192x + 240x² + 160x³.',
          answer: '64 + 192x + 240x² + 160x³',
        },
        {
          id: 2,
          question:
            'Find the first four terms of the binomial expansion of (2 + x)⁷ in increasing powers of x.',
          type: 'Easy',
          explaination:
            'Use the binomial theorem: ⁷C₀ × 2⁷ + ⁷C₁ × 2⁶ x + ⁷C₂ × 2⁵ x² + ⁷C₃ × 2⁴ x³ = 128 + 448x + 672x² + 560x³.',
          answer: '128 + 448x + 672x² + 560x³',
        },
        {
          id: 3,
          question:
            'Find the first four terms of the binomial expansion of (3 − x)⁵ in increasing powers of x.',
          type: 'Easy',
          explaination:
            'Use the binomial theorem: ⁵C₀ × 3⁵ + ⁵C₁ × 3⁴(−x) + ⁵C₂ × 3³(−x)² + ⁵C₃ × 3²(−x)³ = 243 − 405x + 270x² − 90x³.',
          answer: '243 − 405x + 270x² − 90x³',
        },
        {
          id: 4,
          question:
            'Find the first four terms of the binomial expansion of (3 − x)⁴ in increasing powers of x.',
          type: 'Easy',
          explaination:
            'Use the binomial theorem: ⁴C₀ × 3⁴ + ⁴C₁ × 3³(−x) + ⁴C₂ × 3²(−x)² + ⁴C₃ × 3(−x)³ = 81 − 108x + 54x² − 12x³.',
          answer: '81 − 108x + 54x² − 12x³',
        },
        {
          id: 5,
          question:
            'Find the first four terms of the binomial expansion of (1 + 2x)⁶ in increasing powers of x.',
          type: 'Easy',
          explaination:
            'Use the binomial theorem: ⁶C₀ + ⁶C₁ × (2x) + ⁶C₂ × (2x)² + ⁶C₃ × (2x)³ = 1 + 12x + 60x² + 160x³.',
          answer: '1 + 12x + 60x² + 160x³',
        },
        {
          id: 6,
          question:
            'Find the first four terms of the binomial expansion of (1 + 2x)⁷ in increasing powers of x.',
          type: 'Easy',
          explaination:
            'Use the binomial theorem: ⁷C₀ + ⁷C₁ × (2x) + ⁷C₂ × (2x)² + ⁷C₃ × (2x)³ = 1 + 14x + 84x² + 280x³.',
          answer: '1 + 14x + 84x² + 280x³',
        },
        {
          id: 7,
          question:
            'Find the first four terms of the binomial expansion of (1 − 5x)⁴ in increasing powers of x.',
          type: 'Easy',
          explaination:
            'Use the binomial theorem: ⁴C₀ + ⁴C₁ × (−5x) + ⁴C₂ × (−5x)² + ⁴C₃ × (−5x)³ = 1 − 20x + 150x² − 500x³.',
          answer: '1 − 20x + 150x² − 500x³',
        },
        {
          id: 8,
          question:
            'Find the first four terms of the binomial expansion of (1 − 5x)⁵ in increasing powers of x.',
          type: 'Easy',
          explaination:
            'Use the binomial theorem: ⁵C₀ + ⁵C₁ × (−5x) + ⁵C₂ × (−5x)² + ⁵C₃ × (−5x)³ = 1 − 25x + 250x² − 1250x³.',
          answer: '1 − 25x + 250x² − 1250x³',
        },
        {
          id: 9,
          question:
            'Find the first four terms of the binomial expansion of (2 + 3x)¹⁰ in increasing powers of x.',
          type: 'Medium',
          explaination:
            'Use the binomial theorem: ¹⁰C₀ × 2¹⁰ + ¹⁰C₁ × 2⁹(3x) + ¹⁰C₂ × 2⁸(3x)² + ¹⁰C₃ × 2⁷(3x)³ = 1024 + 15360x + 103680x² + 414720x³.',
          answer: '1024 + 15360x + 103680x² + 414720x³',
        },
        {
          id: 10,
          question:
            'Find the first four terms of the binomial expansion of (2 + 3x)⁹ in increasing powers of x.',
          type: 'Medium',
          explaination:
            'Use the binomial theorem: ⁹C₀ × 2⁹ + ⁹C₁ × 2⁸(3x) + ⁹C₂ × 2⁷(3x)² + ⁹C₃ × 2⁶(3x)³ = 512 + 6912x + 41472x² + 145152x³.',
          answer: '512 + 6912x + 41472x² + 145152x³',
        },
        {
          id: 11,
          question:
            'Find the first four terms of the binomial expansion of (2 − 3x)⁵ in increasing powers of x.',
          type: 'Medium',
          explaination:
            'Use the binomial theorem: ⁵C₀ × 2⁵ + ⁵C₁ × 2⁴(−3x) + ⁵C₂ × 2³(−3x)² + ⁵C₃ × 2²(−3x)³ = 32 − 240x + 720x² − 1080x³.',
          answer: '32 − 240x + 720x² − 1080x³',
        },
        {
          id: 12,
          question:
            'Find the first four terms of the binomial expansion of (2 − 3x)⁶ in increasing powers of x.',
          type: 'Medium',
          explaination:
            'Use the binomial theorem: ⁶C₀ × 2⁶ + ⁶C₁ × 2⁵(−3x) + ⁶C₂ × 2⁴(−3x)² + ⁶C₃ × 2³(−3x)³ = 64 − 576x + 2160x² − 4320x³.',
          answer: '64 − 576x + 2160x² − 4320x³',
        },
        {
          id: 13,
          question:
            'Find the first four terms of the binomial expansion of (a + 2b)⁷ in increasing powers of b.',
          type: 'Medium',
          explaination:
            'Use the binomial theorem: ⁷C₀ × a⁷ + ⁷C₁ × a⁶(2b) + ⁷C₂ × a⁵(2b)² + ⁷C₃ × a⁴(2b)³ = a⁷ + 14a⁶b + 84a⁵b² + 280a⁴b³.',
          answer: 'a⁷ + 14a⁶b + 84a⁵b² + 280a⁴b³',
        },
        {
          id: 14,
          question:
            'Find the first four terms of the binomial expansion of (a + 2b)⁸ in increasing powers of b.',
          type: 'Medium',
          explaination:
            'Use the binomial theorem: ⁸C₀ × a⁸ + ⁸C₁ × a⁷(2b) + ⁸C₂ × a⁶(2b)² + ⁸C₃ × a⁵(2b)³ = a⁸ + 16a⁷b + 112a⁶b² + 448a⁵b³.',
          answer: 'a⁸ + 16a⁷b + 112a⁶b² + 448a⁵b³',
        },
        {
          id: 15,
          question:
            'Find the first four terms of the binomial expansion of (3a − 2b)⁵ in increasing powers of b.',
          type: 'Medium',
          explaination:
            'Use the binomial theorem: ⁵C₀ × (3a)⁵ + ⁵C₁ × (3a)⁴(−2b) + ⁵C₂ × (3a)³(−2b)² + ⁵C₃ × (3a)²(−2b)³ = 243a⁵ − 810a⁴b + 1080a³b² − 720a²b³.',
          answer: '243a⁵ − 810a⁴b + 1080a³b² − 720a²b³',
        },
        {
          id: 16,
          question:
            'Find the first four terms of the binomial expansion of (3a − 2b)⁶ in increasing powers of b.',
          type: 'Medium',
          explaination:
            'Use the binomial theorem: ⁶C₀ × (3a)⁶ + ⁶C₁ × (3a)⁵(−2b) + ⁶C₂ × (3a)⁴(−2b)² + ⁶C₃ × (3a)³(−2b)³ = 729a⁶ − 2916a⁵b + 4860a⁴b² − 4320a³b³.',
          answer: '729a⁶ − 2916a⁵b + 4860a⁴b² − 4320a³b³',
        },
      ],
      'pascals-triangle-expansion': [
        {
          id: 1,
          question: "Use Pascal's triangle to expand (1 + 2x)⁴.",
          type: 'Easy',
          explaination:
            "Row 4 of Pascal's triangle: 1, 4, 6, 4, 1. 1(1) + 4(2x) + 6(2x)² + 4(2x)³ + 1(2x)⁴ = 1 + 8x + 24x² + 32x³ + 16x⁴.",
          answer: '1 + 8x + 24x² + 32x³ + 16x⁴',
        },
        {
          id: 2,
          question: "Use Pascal's triangle to expand (2 + x)⁴.",
          type: 'Easy',
          explaination:
            "Row 4 of Pascal's triangle: 1, 4, 6, 4, 1. 1(2⁴) + 4(2³)x + 6(2²)x² + 4(2)x³ + 1(x⁴) = 16 + 32x + 24x² + 8x³ + x⁴.",
          answer: '16 + 32x + 24x² + 8x³ + x⁴',
        },
        {
          id: 3,
          question: "Use Pascal's triangle to expand (3 + x)³.",
          type: 'Easy',
          explaination:
            "Row 3 of Pascal's triangle: 1, 3, 3, 1. 1(3³) + 3(3²)x + 3(3)x² + 1(x³) = 27 + 27x + 9x² + x³.",
          answer: '27 + 27x + 9x² + x³',
        },
        {
          id: 4,
          question: "Use Pascal's triangle to expand (1 + 3x)³.",
          type: 'Easy',
          explaination:
            "Row 3 of Pascal's triangle: 1, 3, 3, 1. 1 + 3(3x) + 3(3x)² + (3x)³ = 1 + 9x + 27x² + 27x³.",
          answer: '1 + 9x + 27x² + 27x³',
        },
        {
          id: 5,
          question: "Use Pascal's triangle to expand (x + 2)⁵.",
          type: 'Easy',
          explaination:
            "Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1. x⁵ + 5(2)x⁴ + 10(4)x³ + 10(8)x² + 5(16)x + 32 = x⁵ + 10x⁴ + 40x³ + 80x² + 80x + 32.",
          answer: 'x⁵ + 10x⁴ + 40x³ + 80x² + 80x + 32',
        },
        {
          id: 6,
          question: "Use Pascal's triangle to expand (x + 1)⁵.",
          type: 'Easy',
          explaination:
            "Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1. Every power of 1 is 1, so the coefficients are the row itself: x⁵ + 5x⁴ + 10x³ + 10x² + 5x + 1.",
          answer: 'x⁵ + 5x⁴ + 10x³ + 10x² + 5x + 1',
        },
      ],
      'binomial-coefficients': [
        {
          id: 1,
          question: 'Evaluate ⁶C₁.',
          type: 'Easy',
          explaination: '⁶C₁ = 6!/(1! · 5!) = 6.',
          answer: '6',
        },
        {
          id: 2,
          question: 'Evaluate ⁸C₁.',
          type: 'Easy',
          explaination: '⁸C₁ = 8!/(1! · 7!) = 8.',
          answer: '8',
        },
        {
          id: 3,
          question: 'Evaluate ⁷C₂.',
          type: 'Easy',
          explaination: '⁷C₂ = (7 × 6)/2! = 42/2 = 21.',
          answer: '21',
        },
        {
          id: 4,
          question: 'Evaluate ⁶C₂.',
          type: 'Easy',
          explaination: '⁶C₂ = (6 × 5)/2! = 30/2 = 15.',
          answer: '15',
        },
        {
          id: 5,
          question: 'Evaluate ⁹C₃.',
          type: 'Easy',
          explaination: '⁹C₃ = (9 × 8 × 7)/3! = 504/6 = 84.',
          answer: '84',
        },
        {
          id: 6,
          question: 'Evaluate ⁸C₃.',
          type: 'Easy',
          explaination: '⁸C₃ = (8 × 7 × 6)/3! = 336/6 = 56.',
          answer: '56',
        },
        {
          id: 7,
          question: 'Evaluate ¹⁰C₉.',
          type: 'Easy',
          explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹⁰C₉ = ¹⁰C₁ = 10.',
          answer: '10',
        },
        {
          id: 8,
          question: 'Evaluate ¹³C₁₂.',
          type: 'Easy',
          explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹³C₁₂ = ¹³C₁ = 13.',
          answer: '13',
        },
        {
          id: 9,
          question: 'Evaluate ¹⁵C₁₃.',
          type: 'Easy',
          explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹⁵C₁₃ = ¹⁵C₂ = (15 × 14)/2 = 105.',
          answer: '105',
        },
        {
          id: 10,
          question: 'Evaluate ¹¹C₉.',
          type: 'Easy',
          explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹¹C₉ = ¹¹C₂ = (11 × 10)/2 = 55.',
          answer: '55',
        },
      ],
      'finding-unknown-r': [
        {
          id: 1,
          question: 'Use technology to find the value (or values) of r such that ¹⁴Cᵣ = 2002.',
          type: 'Medium',
          explaination: 'Using technology, ¹⁴C₅ = 2002. By symmetry, ¹⁴C₉ = ¹⁴C₅ = 2002 as well.',
          answer: 'r = 5 or r = 9',
        },
        {
          id: 2,
          question: 'Use technology to find the value (or values) of r such that ¹⁵Cᵣ = 6435.',
          type: 'Medium',
          explaination: 'Using technology, ¹⁵C₇ = 6435. By symmetry, ¹⁵C₈ = ¹⁵C₇ = 6435 as well.',
          answer: 'r = 7 or r = 8',
        },
        {
          id: 3,
          question: 'Use technology to find the value (or values) of r such that ²⁰Cᵣ = 1140.',
          type: 'Medium',
          explaination: 'Using technology, ²⁰C₃ = 1140. By symmetry, ²⁰C₁₇ = ²⁰C₃ = 1140 as well.',
          answer: 'r = 3 or r = 17',
        },
        {
          id: 4,
          question: 'Use technology to find the value (or values) of r such that ¹⁷Cᵣ = 6188.',
          type: 'Medium',
          explaination: 'Using technology, ¹⁷C₅ = 6188. By symmetry, ¹⁷C₁₂ = ¹⁷C₅ = 6188 as well.',
          answer: 'r = 5 or r = 12',
        },
      ],
      'finding-unknown-n': [
        {
          id: 1,
          question: 'Use technology to find the value of n such that ⁿC₅ = 792.',
          type: 'Medium',
          explaination:
            'Solve n!/(5!(n − 5)!) = 792 using technology (for example, a table of ⁿC₅). When n = 12, ¹²C₅ = 792.',
          answer: 'n = 12',
        },
        {
          id: 2,
          question: 'Use technology to find the value of n such that ⁿC₈ = 43,758.',
          type: 'Medium',
          explaination:
            'Solve n!/(8!(n − 8)!) = 43,758 using technology (for example, a table of ⁿC₈). When n = 18, ¹⁸C₈ = 43,758.',
          answer: 'n = 18',
        },
        {
          id: 3,
          question: 'Find the value of n such that ⁿC₄ = 495.',
          type: 'Medium',
          explaination:
            'ⁿC₄ = n(n − 1)(n − 2)(n − 3)/24 = 495, so n(n − 1)(n − 2)(n − 3) = 11,880. Try n = 12: 12 × 11 × 10 × 9 = 11,880, so n = 12.',
          answer: 'n = 12',
        },
        {
          id: 4,
          question:
            'The coefficient of xⁿ⁻³ in the expansion of (x + 2)ⁿ is 1760. Find the value of n.',
          type: 'Hard',
          explaination:
            'The term in xⁿ⁻³ is ⁿC₃ xⁿ⁻³ × 2³. So ⁿC₃ × 8 = 1760, giving ⁿC₃ = 220. Then n(n − 1)(n − 2)/6 = 220, so n(n − 1)(n − 2) = 1320. Try n = 12: 12 × 11 × 10 = 1320, so n = 12.',
          answer: 'n = 12',
        },
        {
          id: 5,
          question:
            'The coefficient of x⁴ in the expansion of (x + 3)ⁿ is 153,090. Find the value of n.',
          type: 'Hard',
          explaination:
            'The term in x⁴ is ⁿC₄ x⁴ × 3ⁿ⁻⁴, so ⁿC₄ × 3ⁿ⁻⁴ = 153,090. Try n = 10: ¹⁰C₄ × 3⁶ = 210 × 729 = 153,090, so n = 10.',
          answer: 'n = 10',
        },
      ],
      'expansion-with-rational-terms': [
        {
          id: 1,
          question: 'Expand and simplify (x + 2/x)⁴.',
          type: 'Hard',
          explaination:
            'Use the binomial theorem with n = 4: ⁴C₀x⁴ + ⁴C₁x³(2/x) + ⁴C₂x²(2/x)² + ⁴C₃x(2/x)³ + ⁴C₄(2/x)⁴ = x⁴ + 4(2x²) + 6(4) + 4(8/x²) + 16/x⁴ = x⁴ + 8x² + 24 + 32/x² + 16/x⁴.',
          answer: 'x⁴ + 8x² + 24 + 32/x² + 16/x⁴',
        },
        {
          id: 2,
          question: 'Find the coefficient of x⁵ in the expansion of (2x² − 3/x)¹⁰.',
          type: 'Hard',
          explaination:
            'General term: ¹⁰Cᵣ(2x²)ʳ(−3/x)¹⁰⁻ʳ = ¹⁰Cᵣ × 2ʳ × (−3)¹⁰⁻ʳ × x³ʳ⁻¹⁰. For x⁵: 3r − 10 = 5, so r = 5. Coefficient: ¹⁰C₅ × 2⁵ × (−3)⁵ = 252 × 32 × (−243) = −1,959,552.',
          answer: '−1,959,552',
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
      'powers-of-i': [
        {
          id: 1,
          question: 'Simplify i⁵.',
          type: 'Easy',
          explaination: 'i⁵ = i⁴ × i = 1 × i = i.',
          answer: 'i',
        },
        {
          id: 2,
          question: 'Simplify i⁶.',
          type: 'Easy',
          explaination: 'i⁶ = i⁴ × i² = 1 × (−1) = −1.',
          answer: '−1',
        },
        {
          id: 3,
          question: 'Simplify −4i³.',
          type: 'Easy',
          explaination: 'i³ = i² × i = −i, so −4i³ = −4(−i) = 4i.',
          answer: '4i',
        },
        {
          id: 4,
          question: 'Simplify 5i⁴.',
          type: 'Easy',
          explaination: 'i⁴ = (i²)² = (−1)² = 1, so 5i⁴ = 5.',
          answer: '5',
        },
        {
          id: 5,
          question: 'Simplify (3i)².',
          type: 'Easy',
          explaination: '(3i)² = 9i² = 9(−1) = −9.',
          answer: '−9',
        },
        {
          id: 6,
          question: 'Simplify (2i)³.',
          type: 'Easy',
          explaination: '(2i)³ = 8i³ = 8(−i) = −8i.',
          answer: '−8i',
        },
        {
          id: 7,
          question: 'Simplify i⁴ⁿ for n, a positive integer.',
          type: 'Medium',
          explaination: 'i⁴ⁿ = (i⁴)ⁿ = 1ⁿ = 1.',
          answer: '1',
        },
        {
          id: 8,
          question: 'Simplify i⁴ⁿ⁺² for n, a positive integer.',
          type: 'Medium',
          explaination: 'i⁴ⁿ⁺² = i⁴ⁿ × i² = 1 × (−1) = −1.',
          answer: '−1',
        },
      ],
      'solving-quadratic-equations-with-complex-roots': [
        {
          id: 1,
          question: 'Solve the equation x² = −9.',
          type: 'Easy',
          explaination: 'x² = −9, so x = ±√(−9) = ±3i.',
          answer: 'x = ±3i',
        },
        {
          id: 2,
          question: 'Solve the equation x² = −36.',
          type: 'Easy',
          explaination: 'x² = −36, so x = ±√(−36) = ±6i.',
          answer: 'x = ±6i',
        },
        {
          id: 3,
          question: 'Solve the equation x² = −8.',
          type: 'Easy',
          explaination: 'x = ±√(−8) = ±√8 i = ±2√2 i.',
          answer: 'x = ±2√2 i',
        },
        {
          id: 4,
          question: 'Solve the equation x² = −75.',
          type: 'Easy',
          explaination: 'x = ±√(−75) = ±√75 i = ±5√3 i.',
          answer: 'x = ±5√3 i',
        },
        {
          id: 5,
          question: 'Solve the equation x² − 2x + 5 = 0.',
          type: 'Medium',
          explaination:
            'Discriminant: Δ = (−2)² − 4(1)(5) = 4 − 20 = −16, so the roots are complex. x = (2 ± √(−16))/2 = (2 ± 4i)/2 = 1 ± 2i.',
          answer: 'x = 1 ± 2i',
        },
        {
          id: 6,
          question: 'Solve the equation x² − 4x + 13 = 0.',
          type: 'Medium',
          explaination:
            'Discriminant: Δ = 16 − 52 = −36. x = (4 ± √(−36))/2 = (4 ± 6i)/2 = 2 ± 3i.',
          answer: 'x = 2 ± 3i',
        },
        {
          id: 7,
          question: 'Solve the equation 2x² + 4x + 3 = 0.',
          type: 'Medium',
          explaination:
            'Discriminant: Δ = 16 − 24 = −8. x = (−4 ± √(−8))/4 = (−4 ± 2√2 i)/4 = −1 ± (√2/2)i.',
          answer: 'x = −1 ± (√2/2)i',
        },
        {
          id: 8,
          question: 'Solve the equation 3x² − 2x + 2 = 0.',
          type: 'Medium',
          explaination:
            'Discriminant: Δ = 4 − 24 = −20. x = (2 ± √(−20))/6 = (2 ± 2√5 i)/6 = (1 ± √5 i)/3.',
          answer: 'x = (1 ± √5 i)/3',
        },
        {
          id: 9,
          question: 'Solve the equation 5x² + 6x + 5 = 0.',
          type: 'Medium',
          explaination:
            'Discriminant: Δ = 36 − 100 = −64. x = (−6 ± √(−64))/10 = (−6 ± 8i)/10 = (−3 ± 4i)/5.',
          answer: 'x = (−3 ± 4i)/5',
        },
      ],
      'division-writing-in-x-iy-form': [
        {
          id: 1,
          question: 'Write 10/(2 + i) in the form x + iy.',
          type: 'Medium',
          explaination:
            'Multiply the numerator and denominator by the conjugate 2 − i: 10(2 − i)/((2 + i)(2 − i)) = (20 − 10i)/5 = 4 − 2i.',
          answer: '4 − 2i',
        },
        {
          id: 2,
          question: 'Write 6i/(1 − i) in the form x + iy.',
          type: 'Medium',
          explaination:
            'Multiply the numerator and denominator by the conjugate 1 + i: 6i(1 + i)/((1 − i)(1 + i)) = (6i + 6i²)/2 = (−6 + 6i)/2 = −3 + 3i.',
          answer: '−3 + 3i',
        },
        {
          id: 3,
          question: 'Write (10 − 5i)/(1 − 2i) in the form x + iy.',
          type: 'Medium',
          explaination:
            'Multiply the numerator and denominator by the conjugate 1 + 2i: (10 − 5i)(1 + 2i)/(1 + 4) = (10 + 20i − 5i − 10i²)/5 = (20 + 15i)/5 = 4 + 3i.',
          answer: '4 + 3i',
        },
        {
          id: 4,
          question: 'Write (7 + i)/(3 + 4i) in the form x + iy.',
          type: 'Medium',
          explaination:
            'Multiply the numerator and denominator by the conjugate 3 − 4i: (7 + i)(3 − 4i)/(9 + 16) = (21 − 28i + 3i − 4i²)/25 = (25 − 25i)/25 = 1 − i.',
          answer: '1 − i',
        },
        {
          id: 5,
          question: 'Write (3 + 2i)/(5 − i) in the form x + iy.',
          type: 'Medium',
          explaination:
            'Multiply the numerator and denominator by the conjugate 5 + i: (3 + 2i)(5 + i)/(25 + 1) = (15 + 3i + 10i + 2i²)/26 = (13 + 13i)/26 = 1/2 + (1/2)i.',
          answer: '1/2 + (1/2)i',
        },
        {
          id: 6,
          question: 'Write (5 − 4i)/(2 + 3i) in the form x + iy.',
          type: 'Medium',
          explaination:
            'Multiply the numerator and denominator by the conjugate 2 − 3i: (5 − 4i)(2 − 3i)/(4 + 9) = (10 − 15i − 8i + 12i²)/13 = (−2 − 23i)/13 = −2/13 − (23/13)i.',
          answer: '−2/13 − (23/13)i',
        },
        {
          id: 7,
          question: 'Given that z = 7 + 3i − 10i/(2 + i), find z*.',
          type: 'Hard',
          explaination:
            'First simplify 10i/(2 + i) by multiplying the numerator and denominator by 2 − i: 10i(2 − i)/5 = (20i − 10i²)/5 = (10 + 20i)/5 = 2 + 4i. Then z = 7 + 3i − (2 + 4i) = 5 − i, so z* = 5 + i.',
          answer: 'z* = 5 + i',
        },
      ],
      'argand-diagram': [
        {
          id: 1,
          question:
            'Represent the following complex numbers on an Argand diagram:  (i) z = 5 + 2i  (ii) −z  (iii) z*',
          type: 'Easy',
          explaination:
            '(i) z = 5 + 2i is the point (5, 2).  (ii) −z = −5 − 2i is the point (−5, −2).  (iii) z* = 5 − 2i is the point (5, −2).',
          answer: 'Points at (5, 2), (−5, −2), (5, −2)',
        },
        {
          id: 2,
          question:
            'Represent the following complex numbers on an Argand diagram:  (i) z = −2 + 3i  (ii) −z  (iii) z*',
          type: 'Easy',
          explaination:
            '(i) z = −2 + 3i is the point (−2, 3).  (ii) −z = 2 − 3i is the point (2, −3).  (iii) z* = −2 − 3i is the point (−2, −3).',
          answer: 'Points at (−2, 3), (2, −3), (−2, −3)',
        },
        {
          id: 3,
          question:
            'Represent the following on an Argand diagram:  (i) z = 3 − 4i  (ii) 2z  (iii) iz',
          type: 'Easy',
          explaination:
            '(i) z = 3 − 4i is the point (3, −4).  (ii) 2z = 6 − 8i is the point (6, −8).  (iii) iz = i(3 − 4i) = 3i − 4i² = 4 + 3i is the point (4, 3).',
          answer: 'Points at (3, −4), (6, −8), (4, 3)',
        },
        {
          id: 4,
          question:
            'Represent the following on an Argand diagram:  (i) z = −4 − 5i  (ii) 2z  (iii) iz',
          type: 'Easy',
          explaination:
            '(i) z = −4 − 5i is the point (−4, −5).  (ii) 2z = −8 − 10i is the point (−8, −10).  (iii) iz = i(−4 − 5i) = −4i − 5i² = 5 − 4i is the point (5, −4).',
          answer: 'Points at (−4, −5), (−8, −10), (5, −4)',
        },
        {
          id: 5,
          question:
            'Given z = −3 + 2i and w = 5 + 3i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z + w',
          type: 'Easy',
          explaination:
            '(i) z is the point (−3, 2).  (ii) w is the point (5, 3).  (iii) z + w = (−3 + 5) + (2 + 3)i = 2 + 5i, the point (2, 5).',
          answer: 'Points at (−3, 2), (5, 3), (2, 5); z + w = 2 + 5i',
        },
        {
          id: 6,
          question:
            'Given z = 2 + 2i and w = 1 + 3i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z + w',
          type: 'Easy',
          explaination:
            '(i) z is the point (2, 2).  (ii) w is the point (1, 3).  (iii) z + w = 3 + 5i, the point (3, 5).',
          answer: 'Points at (2, 2), (1, 3), (3, 5); z + w = 3 + 5i',
        },
        {
          id: 7,
          question:
            'Given z = −4 − i and w = −2 − 3i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z − w',
          type: 'Easy',
          explaination:
            '(i) z is the point (−4, −1).  (ii) w is the point (−2, −3).  (iii) z − w = (−4 − i) − (−2 − 3i) = −2 + 2i, the point (−2, 2).',
          answer: 'Points at (−4, −1), (−2, −3), (−2, 2); z − w = −2 + 2i',
        },
        {
          id: 8,
          question:
            'Given z = −2 + 5i and w = 6 − 2i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z − w',
          type: 'Easy',
          explaination:
            '(i) z is the point (−2, 5).  (ii) w is the point (6, −2).  (iii) z − w = (−2 + 5i) − (6 − 2i) = −8 + 7i, the point (−8, 7).',
          answer: 'Points at (−2, 5), (6, −2), (−8, 7); z − w = −8 + 7i',
        },
      ],
      'cartesian-form-from-polar': [
        {
          id: 1,
          question:
            'Write z in Cartesian form given:  (a) |z| = 10, arg z = −π/2  (b) |z| = 8, arg z = π/2',
          type: 'Easy',
          explaination:
            'Use z = r(cos θ + i sin θ).  (a) z = 10(cos(−π/2) + i sin(−π/2)) = 10(0 − i) = −10i.  (b) z = 8(cos(π/2) + i sin(π/2)) = 8(0 + i) = 8i.',
          answer: '(a) z = −10i  (b) z = 8i',
        },
        {
          id: 2,
          question:
            'Write z in Cartesian form given:  (a) |z| = 4, arg z = π/3  (b) |z| = √2, arg z = π/4',
          type: 'Easy',
          explaination:
            'Use z = r(cos θ + i sin θ).  (a) z = 4(1/2 + (√3/2)i) = 2 + 2√3 i.  (b) z = √2(1/√2 + (1/√2)i) = 1 + i.',
          answer: '(a) z = 2 + 2√3 i  (b) z = 1 + i',
        },
        {
          id: 3,
          question:
            'Write z in Cartesian form given:  (a) |z| = 4√3, arg z = 3π/4  (b) |z| = 2, arg z = 2π/3',
          type: 'Easy',
          explaination:
            'Use z = r(cos θ + i sin θ).  (a) cos(3π/4) = −√2/2 and sin(3π/4) = √2/2, so z = 4√3(−√2/2 + (√2/2)i) = −2√6 + 2√6 i.  (b) z = 2(−1/2 + (√3/2)i) = −1 + √3 i.',
          answer: '(a) z = −2√6 + 2√6 i  (b) z = −1 + √3 i',
        },
        {
          id: 4,
          question:
            'Write z in Cartesian form given:  (a) |z| = 8, arg z = 11π/6  (b) |z| = 2, arg z = −π/4',
          type: 'Easy',
          explaination:
            'Use z = r(cos θ + i sin θ).  (a) z = 8(cos(11π/6) + i sin(11π/6)) = 8(√3/2 − (1/2)i) = 4√3 − 4i.  (b) z = 2(cos(−π/4) + i sin(−π/4)) = 2(1/√2 − (1/√2)i) = √2 − √2 i.',
          answer: '(a) z = 4√3 − 4i  (b) z = √2 − √2 i',
        },
      ],
      'loci-on-argand-diagram': [
        {
          id: 1,
          question:
            'Sketch the curves in the Argand diagram described by:  (a) |z| = 2  (b) arg z = π/6  (c) Re(z)² = Im(z)',
          type: 'Medium',
          explaination:
            'Let z = x + iy.  (a) |z| = 2 gives x² + y² = 4: a circle with centre the origin and radius 2.  (b) arg z = π/6 is a half-line from the origin (not including it) at an angle of π/6 to the positive real axis.  (c) Re(z)² = Im(z) gives x² = y: a parabola through the origin, opening upwards.',
          answer:
            '(a) Circle, centre origin, radius 2  (b) Half-line from origin at angle π/6  (c) Parabola x² = y',
        },
        {
          id: 2,
          question: 'If |z − 5i| = 3, find the smallest possible value of |z|.',
          type: 'Medium',
          explaination:
            '|z − 5i| = 3 is a circle with centre 5i (the point (0, 5)) and radius 3. The point on this circle nearest the origin lies on the line through the origin and the centre, so the smallest |z| = 5 − 3 = 2.',
          answer: '2',
        },
        {
          id: 3,
          question:
            '(a) Given that |z| = |z − 1|, find Re(z).  (b) Sketch all the points with |z| = |z − 1| on an Argand diagram.',
          type: 'Medium',
          explaination:
            '(a) Let z = x + iy. Then x² + y² = (x − 1)² + y², so x² = x² − 2x + 1, giving 2x = 1 and x = 1/2.  (b) The points are equidistant from 0 and 1, so they form the perpendicular bisector of the segment joining 0 and 1: the vertical line Re(z) = 1/2.',
          answer: '(a) Re(z) = 1/2  (b) Vertical line x = 1/2',
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
      'parallel-vectors-finding-unknowns': [
        {
          id: 1,
          question:
            'Find the values of p and q such that vectors a and b are parallel:  (a) a = (2, 1, 5), b = (6, p, q)  (b) a = (1, 1, 4), b = (4, p, q)',
          type: 'Medium',
          explaination:
            'Parallel vectors are scalar multiples of each other.  (a) Comparing first components, b = 3a, so p = 3 × 1 = 3 and q = 3 × 5 = 15.  (b) Comparing first components, b = 4a, so p = 4 × 1 = 4 and q = 4 × 4 = 16.',
          answer: '(a) p = 3, q = 15  (b) p = 4, q = 16',
        },
        {
          id: 2,
          question:
            'Find the values of p and q such that vectors a and b are parallel:  (a) a = (3, 2, −1), b = (−9, p, q)  (b) a = (1, −1, 4), b = (−2, p, q)',
          type: 'Medium',
          explaination:
            'Parallel vectors are scalar multiples of each other.  (a) Comparing first components, b = −3a, so p = −3 × 2 = −6 and q = −3 × (−1) = 3.  (b) Comparing first components, b = −2a, so p = −2 × (−1) = 2 and q = −2 × 4 = −8.',
          answer: '(a) p = −6, q = 3  (b) p = 2, q = −8',
        },
        {
          id: 3,
          question:
            'Find the values of p and q such that vectors a and b are parallel:  (a) a = (2, p, 6), b = (q, 2, 3)  (b) a = (−3, p, 6), b = (q, 15, 2)',
          type: 'Medium',
          explaination:
            'Set a = kb and find k from the known components.  (a) Third components: 6 = 3k, so k = 2. Then 2 = kq gives q = 1, and p = 2k = 4.  (b) Third components: 6 = 2k, so k = 3. Then −3 = kq gives q = −1, and p = 15k = 45.',
          answer: '(a) p = 4, q = 1  (b) p = 45, q = −1',
        },
      ],
      'unit-vectors': [
        {
          id: 1,
          question:
            'Find the unit vector in the same direction as a:  (a) a = (1, 2, 2)  (b) a = (3, 0, 4)',
          type: 'Easy',
          explaination:
            'Divide the vector by its magnitude.  (a) |a| = √(1 + 4 + 4) = 3, so the unit vector is (1/3)(1, 2, 2).  (b) |a| = √(9 + 0 + 16) = 5, so the unit vector is (1/5)(3, 0, 4).',
          answer: '(a) (1/3)(1, 2, 2)  (b) (1/5)(3, 0, 4)',
        },
        {
          id: 2,
          question:
            'Find the unit vector in the same direction as a:  (a) a = (−1, 1, 2)  (b) a = (1, −2, 3)',
          type: 'Easy',
          explaination:
            'Divide the vector by its magnitude.  (a) |a| = √(1 + 1 + 4) = √6, so the unit vector is (1/√6)(−1, 1, 2).  (b) |a| = √(1 + 4 + 9) = √14, so the unit vector is (1/√14)(1, −2, 3).',
          answer: '(a) (1/√6)(−1, 1, 2)  (b) (1/√14)(1, −2, 3)',
        },
        {
          id: 3,
          question:
            'Find the unit vector in the same direction as a:  (a) a = 3i + j − k  (b) a = i − 2j + k',
          type: 'Easy',
          explaination:
            'Divide the vector by its magnitude.  (a) |a| = √(9 + 1 + 1) = √11, so the unit vector is (1/√11)(3i + j − k).  (b) |a| = √(1 + 4 + 1) = √6, so the unit vector is (1/√6)(i − 2j + k).',
          answer: '(a) (1/√11)(3i + j − k)  (b) (1/√6)(i − 2j + k)',
        },
        {
          id: 4,
          question:
            'Find the unit vector in the same direction as a:  (a) a = i − 4j  (b) a = 2j − 3k',
          type: 'Easy',
          explaination:
            'Divide the vector by its magnitude.  (a) |a| = √(1 + 16) = √17, so the unit vector is (1/√17)(i − 4j).  (b) |a| = √(4 + 9) = √13, so the unit vector is (1/√13)(2j − 3k).',
          answer: '(a) (1/√17)(i − 4j)  (b) (1/√13)(2j − 3k)',
        },
      ],
      'magnitude-of-a-vector': [
        {
          id: 1,
          question:
            'Find the possible values of the constant k such that the vector (3k, −k, k) has magnitude 22.',
          type: 'Medium',
          explaination:
            '√((3k)² + (−k)² + k²) = 22, so √(11k²) = 22. Then |k|√11 = 22, giving k = ±22/√11 = ±2√11.',
          answer: 'k = ±2√11',
        },
        {
          id: 2,
          question:
            'The vector 2i + 3tj + (t − 1)k has magnitude 3. Find the possible values of t.',
          type: 'Medium',
          explaination:
            '√(2² + (3t)² + (t − 1)²) = 3, so 4 + 9t² + t² − 2t + 1 = 9. This gives 10t² − 2t − 4 = 0, or 5t² − t − 2 = 0. Using the quadratic formula: t = (1 ± √(1 + 40))/10 = (1 ± √41)/10.',
          answer: 't = (1 ± √41)/10',
        },
      ],
      collinearity: [
        {
          id: 1,
          question:
            'Find the values of p and q such that A, B and C are collinear.  (a) A(2, 5, 2), B(1, 1, 6), C(−3, p, q)  (b) A(−1, 1, 5), B(2, 1, 3), C(11, p, q)',
          type: 'Medium',
          explaination:
            'A, B and C are collinear when →AC = k→AB.  (a) →AB = (−1, −4, 4) and →AC = (−5, p − 5, q − 2). From the first components, −5 = −k, so k = 5. Then p − 5 = −20 gives p = −15, and q − 2 = 20 gives q = 22.  (b) →AB = (3, 0, −2) and →AC = (12, p − 1, q − 5). From the first components, k = 4. Then p − 1 = 0 gives p = 1, and q − 5 = −8 gives q = −3.',
          answer: '(a) p = −15, q = 22  (b) p = 1, q = −3',
        },
        {
          id: 2,
          question:
            'Find the values of p and q such that the points A, B and C, with position vectors a, b and c, are collinear.  (a) a = (2, −1, 3), b = (5, 2, 6), c = (p, 7, q)  (b) a = (1, 1, −5), b = (5, −3, 3), c = (2, p, q)',
          type: 'Medium',
          explaination:
            'A, B and C are collinear when →AC = k→AB.  (a) →AB = (3, 3, 3) and →AC = (p − 2, 8, q − 3). From the second components, 8 = 3k, so k = 8/3. Then p − 2 = 8 gives p = 10, and q − 3 = 8 gives q = 11.  (b) →AB = (4, −4, 8) and →AC = (1, p − 1, q + 5). From the first components, k = 1/4. Then p − 1 = −1 gives p = 0, and q + 5 = 2 gives q = −3.',
          answer: '(a) p = 10, q = 11  (b) p = 0, q = −3',
        },
        {
          id: 3,
          question:
            'Find the values of p and q such that the points A, B and C, with position vectors a, b and c, are collinear.  (a) a = pi − 2j + k, b = −i + 3j + qk, c = 7i − 7j + 3k  (b) a = i + pj − 3k, b = 2i + 3j + qk, c = −i − 7j + 3k',
          type: 'Medium',
          explaination:
            'A, B and C are collinear when →AC = k→AB.  (a) →AB = (−1 − p, 5, q − 1) and →AC = (7 − p, −5, 2). From the second components, −5 = 5k, so k = −1. Third components: 2 = −(q − 1), so q = −1. First components: 7 − p = 1 + p, so p = 3.  (b) →AB = (1, 3 − p, q + 3) and →AC = (−2, −7 − p, 6). From the first components, k = −2. Second components: −7 − p = −2(3 − p), so −7 − p = −6 + 2p, giving p = −1/3. Third components: 6 = −2(q + 3), so q = −6.',
          answer: '(a) p = 3, q = −1  (b) p = −1/3, q = −6',
        },
      ],
      'foot-of-perpendicular-from-a-point-to-a-line': [
        {
          id: 1,
          question:
            'Line l has equation r = (4, 2, −1) + λ(2, −1, 2) and point P has coordinates (7, 2, 3). Point C lies on l and PC is perpendicular to l. Find the coordinates of C.',
          type: 'Hard',
          explaination:
            'A general point on l is C = (4 + 2λ, 2 − λ, −1 + 2λ), so →PC = (−3 + 2λ, −λ, −4 + 2λ). PC is perpendicular to l, so →PC · (2, −1, 2) = 0: 2(−3 + 2λ) − (−λ) + 2(−4 + 2λ) = 0, which gives 9λ − 14 = 0 and λ = 14/9. Substituting: C = (4 + 28/9, 2 − 14/9, −1 + 28/9) = (64/9, 4/9, 19/9).',
          answer: 'C = (64/9, 4/9, 19/9)',
        },
        {
          id: 2,
          question:
            'Line l has equation r = (5, 1, 2) + λ(2, −3, 3) and point P has coordinates (21, 5, 10).  (a) Find the coordinates of the point M on l such that PM is perpendicular to l.  (b) Show that the point Q(15, −14, 17) lies on l.  (c) Find the coordinates of the point R on l, other than Q, such that |PR| = |PQ|.',
          type: 'Hard',
          explaination:
            '(a) A general point on l is (5 + 2λ, 1 − 3λ, 2 + 3λ), so →PM = (2λ − 16, −3λ − 4, 3λ − 8). Set →PM · (2, −3, 3) = 0: 2(2λ − 16) − 3(−3λ − 4) + 3(3λ − 8) = 0, so 22λ − 44 = 0 and λ = 2. M = (9, −5, 8).  (b) λ = 5 gives (5 + 10, 1 − 15, 2 + 15) = (15, −14, 17), so Q lies on l.  (c) M is the foot of the perpendicular from P, so the points of l at equal distance from P are symmetric about M. Q has λ = 5 and M has λ = 2, so R has λ = 2 − 3 = −1, giving R = (3, 4, −1). Check: |PQ|² = 36 + 361 + 49 = 446 and |PR|² = 324 + 1 + 121 = 446.',
          answer: '(a) M = (9, −5, 8)  (b) λ = 5 gives Q  (c) R = (3, 4, −1)',
        },
      ],
      'area-of-triangle-using-cross-product': [
        {
          id: 1,
          question:
            'Find the area of the triangle with vertices (1, 3, 3), (−1, 1, 2) and (1, −2, 4).',
          type: 'Medium',
          explaination:
            'Let A = (1, 3, 3), B = (−1, 1, 2) and C = (1, −2, 4). →AB = (−2, −2, −1) and →AC = (0, −5, 1). →AB × →AC = ((−2)(1) − (−1)(−5), (−1)(0) − (−2)(1), (−2)(−5) − (−2)(0)) = (−7, 2, 10). |→AB × →AC| = √(49 + 4 + 100) = √153 = 3√17. Area = (1/2)|→AB × →AC| = 3√17/2.',
          answer: 'Area = 3√17/2 ≈ 6.18',
        },
        {
          id: 2,
          question:
            'Find the area of the triangle with vertices (3, −5, 1), (−1, 1, 3) and (−1, −5, 2).',
          type: 'Medium',
          explaination:
            'Let A = (3, −5, 1), B = (−1, 1, 3) and C = (−1, −5, 2). →AB = (−4, 6, 2) and →AC = (−4, 0, 1). →AB × →AC = ((6)(1) − (2)(0), (2)(−4) − (−4)(1), (−4)(0) − (6)(−4)) = (6, −4, 24). |→AB × →AC| = √(36 + 16 + 576) = √628 = 2√157. Area = (1/2)(2√157) = √157.',
          answer: 'Area = √157 ≈ 12.5',
        },
        {
          id: 3,
          question:
            'Find the area of the triangle with vertices (−3, −5, 1), (4, 7, 2) and (−1, 2, 2).',
          type: 'Medium',
          explaination:
            'Let A = (−3, −5, 1), B = (4, 7, 2) and C = (−1, 2, 2). →AB = (7, 12, 1) and →AC = (2, 7, 1). →AB × →AC = ((12)(1) − (1)(7), (1)(2) − (7)(1), (7)(7) − (12)(2)) = (5, −5, 25). |→AB × →AC| = √(25 + 25 + 625) = √675 = 15√3. Area = 15√3/2.',
          answer: 'Area = 15√3/2 ≈ 13.0',
        },
        {
          id: 4,
          question:
            'Find the area of the triangle with vertices (4, 0, 2), (4, 1, 5) and (4, −3, 2).',
          type: 'Medium',
          explaination:
            'Let A = (4, 0, 2), B = (4, 1, 5) and C = (4, −3, 2). →AB = (0, 1, 3) and →AC = (0, −3, 0). →AB × →AC = ((1)(0) − (3)(−3), (3)(0) − (0)(0), (0)(−3) − (1)(0)) = (9, 0, 0). |→AB × →AC| = 9. Area = 9/2 = 4.5.',
          answer: 'Area = 9/2 = 4.5',
        },
        {
          id: 5,
          question:
            'Find the area of the triangle with vertices (1, 5, 2), (8, 4, 6) and (0, 6, 7).',
          type: 'Medium',
          explaination:
            'Let A = (1, 5, 2), B = (8, 4, 6) and C = (0, 6, 7). →AB = (7, −1, 4) and →AC = (−1, 1, 5). →AB × →AC = ((−1)(5) − (4)(1), (4)(−1) − (7)(5), (7)(1) − (−1)(−1)) = (−9, −39, 6). |→AB × →AC| = √(81 + 1521 + 36) = √1638 = 3√182. Area = 3√182/2.',
          answer: 'Area = 3√182/2 ≈ 20.2',
        },
        {
          id: 6,
          question:
            'Find the area of the triangle with vertices (2, 1, 2), (3, 8, 4) and (1, 3, −1).',
          type: 'Medium',
          explaination:
            'Let A = (2, 1, 2), B = (3, 8, 4) and C = (1, 3, −1). →AB = (1, 7, 2) and →AC = (−1, 2, −3). →AB × →AC = ((7)(−3) − (2)(2), (2)(−1) − (1)(−3), (1)(2) − (7)(−1)) = (−25, 1, 9). |→AB × →AC| = √(625 + 1 + 81) = √707. Area = √707/2.',
          answer: 'Area = √707/2 ≈ 13.3',
        },
        {
          id: 7,
          question:
            'Find the area of the triangle with vertices (2, 1, 2), (5, 0, 1) and (−1, 3, 5).',
          type: 'Medium',
          explaination:
            'Let A = (2, 1, 2), B = (5, 0, 1) and C = (−1, 3, 5). →AB = (3, −1, −1) and →AC = (−3, 2, 3). →AB × →AC = ((−1)(3) − (−1)(2), (−1)(−3) − (3)(3), (3)(2) − (−1)(−3)) = (−1, −6, 3). |→AB × →AC| = √(1 + 36 + 9) = √46. Area = √46/2.',
          answer: 'Area = √46/2 ≈ 3.39',
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
      'increasing-decreasing-functions': [
        {
          id: 1,
          question:
            'Find the set of values of x for which the function f(x) = 2 + 8x³ − x⁴ is decreasing.',
          type: 'Medium',
          explaination:
            'f′(x) = 24x² − 4x³ = 4x²(6 − x). f is decreasing where f′(x) < 0. Since 4x² ≥ 0 (and is zero only at the stationary point x = 0), the sign of f′(x) is the sign of 6 − x, which is negative when x > 6. So f is decreasing for x > 6.',
          answer: 'x > 6',
        },
        {
          id: 2,
          question:
            'Find the set of values of x for which the function f(x) = x⁴ − 4x³ − 2x² + 12x − 5 is increasing.',
          type: 'Medium',
          explaination:
            'f′(x) = 4x³ − 12x² − 4x + 12 = 4(x²(x − 3) − (x − 3)) = 4(x − 3)(x − 1)(x + 1). f is increasing where f′(x) > 0. The critical values are x = −1, 1 and 3. Checking the sign in each interval: x < −1 gives (−)(−)(−) < 0; −1 < x < 1 gives (−)(−)(+) > 0; 1 < x < 3 gives (−)(+)(+) < 0; x > 3 gives (+)(+)(+) > 0. So f is increasing for −1 < x < 1 or x > 3.',
          answer: '−1 < x < 1 or x > 3',
        },
      ],
      continuity: [
        {
          id: 1,
          question:
            'Show that the function f(x) = sin 3x/sin x for x ≤ 0, and f(x) = (e³ˣ − 1)/x for x > 0, is continuous at x = 0.',
          type: 'Hard',
          explaination:
            'f is continuous at x = 0 when the left-hand limit, the right-hand limit and the value at 0 agree. For x ≤ 0: sin 3x/sin x = 3 × (sin 3x/(3x)) × (x/sin x) → 3 × 1 × 1 = 3 as x → 0⁻. For x > 0: (e³ˣ − 1)/x = 3 × (e³ˣ − 1)/(3x) → 3 × 1 = 3 as x → 0⁺. At x = 0 the formula sin 3x/sin x takes the form 0/0, so f(0) is its limiting value, 3. Both one-sided limits equal 3 = f(0), so f is continuous at x = 0.',
          answer: 'f is continuous at x = 0',
        },
      ],
      'related-rates-of-change': [
        {
          id: 1,
          question: 'If y = x³, find dy/dt when x = 1 and dx/dt = −1.',
          type: 'Easy',
          explaination:
            'By the chain rule, dy/dt = (dy/dx)(dx/dt) = 3x²(dx/dt). At x = 1 and dx/dt = −1: dy/dt = 3(1)²(−1) = −3.',
          answer: 'dy/dt = −3',
        },
        {
          id: 2,
          question: 'If y = x² + x, find dy/dt when x = 0 and dx/dt = 4.',
          type: 'Easy',
          explaination:
            'By the chain rule, dy/dt = (2x + 1)(dx/dt). At x = 0 and dx/dt = 4: dy/dt = (0 + 1)(4) = 4.',
          answer: 'dy/dt = 4',
        },
        {
          id: 3,
          question: 'If A = e²ᶻ, find the rate of increase of A when z = 0 and dz/dt = 6.',
          type: 'Easy',
          explaination:
            'By the chain rule, dA/dt = 2e²ᶻ(dz/dt). At z = 0 and dz/dt = 6: dA/dt = 2e⁰ × 6 = 12.',
          answer: 'dA/dt = 12',
        },
        {
          id: 4,
          question: 'If p = e^q, find the rate of increase of p when q = 1 and dq/dt = 7.',
          type: 'Easy',
          explaination:
            'By the chain rule, dp/dt = e^q(dq/dt). At q = 1 and dq/dt = 7: dp/dt = e¹ × 7 = 7e.',
          answer: 'dp/dt = 7e',
        },
        {
          id: 5,
          question:
            'If a = 1/b, find the rate of increase of a when b = 2 and b is increasing at a rate of 3 per second.',
          type: 'Easy',
          explaination:
            'a = b⁻¹, so da/dt = −(1/b²)(db/dt). At b = 2 and db/dt = 3: da/dt = −(1/4) × 3 = −3/4.',
          answer: 'da/dt = −3/4',
        },
        {
          id: 6,
          question:
            'If a = 1/b², find the rate of increase of a when b = 1 and b is increasing at a rate of 2 per second.',
          type: 'Easy',
          explaination:
            'a = b⁻², so da/dt = −(2/b³)(db/dt). At b = 1 and db/dt = 2: da/dt = −(2/1) × 2 = −4.',
          answer: 'da/dt = −4',
        },
        {
          id: 7,
          question:
            'If y = ln x, find the rate of increase of y when x = 2 and x is decreasing at a rate of 4 per hour.',
          type: 'Easy',
          explaination:
            'x is decreasing, so dx/dt = −4. By the chain rule, dy/dt = (1/x)(dx/dt). At x = 2: dy/dt = (1/2)(−4) = −2.',
          answer: 'dy/dt = −2',
        },
        {
          id: 8,
          question:
            'If y = ln(x + 1), find the rate of increase of y when x = 1 and x is decreasing at a rate of 3 per hour.',
          type: 'Easy',
          explaination:
            'x is decreasing, so dx/dt = −3. By the chain rule, dy/dt = (1/(x + 1))(dx/dt). At x = 1: dy/dt = (1/2)(−3) = −3/2.',
          answer: 'dy/dt = −3/2',
        },
        {
          id: 9,
          question: 'Given that A = x² + y², find dA/dt when x = 3, y = 4, dx/dt = 1, dy/dt = −1.',
          type: 'Medium',
          explaination:
            'Differentiate with respect to t: dA/dt = 2x(dx/dt) + 2y(dy/dt) = 2(3)(1) + 2(4)(−1) = 6 − 8 = −2.',
          answer: 'dA/dt = −2',
        },
        {
          id: 10,
          question: 'Given that B = x³ + y³, find dB/dt when x = 1, y = 2, dx/dt = 1, dy/dt = −2.',
          type: 'Medium',
          explaination:
            'Differentiate with respect to t: dB/dt = 3x²(dx/dt) + 3y²(dy/dt) = 3(1)²(1) + 3(2)²(−2) = 3 − 24 = −21.',
          answer: 'dB/dt = −21',
        },
        {
          id: 11,
          question: 'Given that C = x/y, find dC/dt when x = 3, y = 4, dx/dt = 3, dy/dt = −1.',
          type: 'Medium',
          explaination:
            'Use the quotient rule: dC/dt = (y(dx/dt) − x(dy/dt))/y² = (4(3) − 3(−1))/16 = (12 + 3)/16 = 15/16.',
          answer: 'dC/dt = 15/16',
        },
        {
          id: 12,
          question:
            'The sides of a square are increasing at a rate of 2 cm s⁻¹. Find the rate of increase of the area when the area is 25 cm².',
          type: 'Medium',
          explaination:
            'Let the side be s, so A = s² and dA/dt = 2s(ds/dt). When A = 25, s = 5, and ds/dt = 2. So dA/dt = 2(5)(2) = 20 cm² s⁻¹.',
          answer: 'dA/dt = 20 cm² s⁻¹',
        },
        {
          id: 13,
          question:
            'A circular mould is spreading on a leaf. When the radius is 3 mm the rate of increase of the radius is 1.2 mm per day. What is the rate of increase of the area?',
          type: 'Medium',
          explaination:
            'A = πr², so dA/dt = 2πr(dr/dt). At r = 3 and dr/dt = 1.2: dA/dt = 2π(3)(1.2) = 7.2π ≈ 22.6 mm² per day.',
          answer: 'dA/dt = 7.2π ≈ 22.6 mm² per day',
        },
        {
          id: 14,
          question:
            'The volume of a spherical balloon is increasing at a rate of 200 cm³ per second. Find the rate of increase of the radius when the volume is 100 cm³.',
          type: 'Hard',
          explaination:
            'V = (4/3)πr³, so dV/dt = 4πr²(dr/dt). When V = 100: (4/3)πr³ = 100, so r = (75/π)^(1/3) ≈ 2.88 cm. Then dr/dt = 200/(4πr²) ≈ 1.92 cm s⁻¹.',
          answer: 'dr/dt ≈ 1.92 cm s⁻¹',
        },
        {
          id: 15,
          question:
            "An x by y rectangle is expanding with dx/dt = 4 cm s⁻¹ and dy/dt = −2 cm s⁻¹. When x = 3 cm and y = 4 cm, find:  (a) the rate of increase of the rectangle's area  (b) the rate of increase of the length of the diagonal.",
          type: 'Medium',
          explaination:
            '(a) A = xy, so dA/dt = y(dx/dt) + x(dy/dt) = 4(4) + 3(−2) = 16 − 6 = 10 cm² s⁻¹.  (b) The diagonal is D = √(x² + y²), so dD/dt = (x(dx/dt) + y(dy/dt))/√(x² + y²) = (3(4) + 4(−2))/√(9 + 16) = 4/5 = 0.8 cm s⁻¹.',
          answer: '(a) dA/dt = 10 cm² s⁻¹  (b) dD/dt = 0.8 cm s⁻¹',
        },
        {
          id: 16,
          question:
            'An inverted cone is being filled with water at a constant rate of 5 cm³ s⁻¹. The surface of the water is always horizontal. The largest diameter of the cone is 10 cm and its height is 30 cm. If the volume of water is V at time t and h is the height of the water above the vertex:  (a) Show that V = πh³/108.  (b) Find the rate at which the height is increasing when h = 18 cm.',
          type: 'Hard',
          explaination:
            '(a) By similar triangles, r/h = 5/30 = 1/6, so r = h/6. Then V = (1/3)πr²h = (1/3)π(h²/36)h = πh³/108.  (b) dV/dt = (πh²/36)(dh/dt). At h = 18: 5 = (324π/36)(dh/dt) = 9π(dh/dt), so dh/dt = 5/(9π) ≈ 0.177 cm s⁻¹.',
          answer: '(a) Shown in the explanation  (b) dh/dt = 5/(9π) ≈ 0.177 cm s⁻¹',
        },
        {
          id: 17,
          question:
            'A circular stain of radius r cm and area A cm² is increasing in size. At a certain time, the rate of increase of the radius is 1.8 cm s⁻¹ and the rate of increase of the area is 86.5 cm² s⁻¹. Find the radius of the stain at this point.',
          type: 'Hard',
          explaination:
            'A = πr², so dA/dt = 2πr(dr/dt). Substituting: 86.5 = 2πr(1.8) = 3.6πr, so r = 86.5/(3.6π) ≈ 7.65 cm.',
          answer: 'r ≈ 7.65 cm',
        },
        {
          id: 18,
          question:
            'A sportsman throws a ball. When it is 2 m above the sportsman and 4 m away horizontally it is moving purely horizontally with a speed of 3 m s⁻¹. Find the rate at which the ball is moving away from the sportsman.',
          type: 'Hard',
          explaination:
            'Let x be the horizontal distance and y the height above the sportsman, so x = 4, y = 2, dx/dt = 3 and dy/dt = 0. The distance is D = √(x² + y²) = √20 = 2√5. Then dD/dt = (x(dx/dt) + y(dy/dt))/D = (4(3) + 2(0))/(2√5) = 6/√5 ≈ 2.68 m s⁻¹.',
          answer: 'dD/dt = 6/√5 = 6√5/5 ≈ 2.68 m s⁻¹',
        },
        {
          id: 19,
          question:
            'The density of a reactive substance is given by its mass divided by its volume. When the density is 5 g cm⁻³ the mass is decreasing at a rate of 2 g s⁻¹ and the volume is decreasing at a rate of 1 cm³ s⁻¹. Determine, with justification, whether the density is increasing or decreasing.',
          type: 'Hard',
          explaination:
            'ρ = m/V, so by the quotient rule dρ/dt = (V(dm/dt) − m(dV/dt))/V². When ρ = 5, m = 5V, with dm/dt = −2 and dV/dt = −1. So dρ/dt = (V(−2) − 5V(−1))/V² = 3V/V² = 3/V. Since V > 0, dρ/dt > 0, so the density is increasing.',
          answer: 'Density is increasing.',
        },
        {
          id: 20,
          question:
            'A ladder of length 3 m is sliding down a vertical wall. The foot of the ladder is on horizontal ground. When the point of contact with the wall is 2 m above the ground that point is moving down at a rate of 0.1 m s⁻¹. At what speed is the foot of the ladder moving away from the wall, assuming the ladder always stays in contact with both the wall and the ground?',
          type: 'Hard',
          explaination:
            'Let x be the distance of the foot from the wall and y the height on the wall. Then x² + y² = 9, so 2x(dx/dt) + 2y(dy/dt) = 0. When y = 2, x = √(9 − 4) = √5, and dy/dt = −0.1. So 2√5(dx/dt) + 2(2)(−0.1) = 0, giving dx/dt = 0.4/(2√5) = √5/25 ≈ 0.0894 m s⁻¹.',
          answer: 'dx/dt = √5/25 ≈ 0.0894 m s⁻¹',
        },
      ],
      'differentiation-inverse-trigonometric-functions': [
        {
          id: 1,
          question:
            '(a) Find the gradient of y = arcsin(2x) + arccos(3x) at x = 1/6.  (b) Find the gradient of y = 5x − 3 arctan(2x) at x = 1.',
          type: 'Medium',
          explaination:
            '(a) dy/dx = 2/√(1 − 4x²) − 3/√(1 − 9x²). At x = 1/6: 2/√(8/9) − 3/√(3/4) = 3/√2 − 2√3 = 3√2/2 − 2√3 ≈ −1.34.  (b) dy/dx = 5 − 3 × 2/(1 + 4x²) = 5 − 6/(1 + 4x²). At x = 1: 5 − 6/5 = 19/5.',
          answer: '(a) 3√2/2 − 2√3 ≈ −1.34  (b) 19/5',
        },
        {
          id: 2,
          question:
            'Find the gradient of the graph of y = arcsin x − arccos x at the point where it crosses the y-axis.',
          type: 'Medium',
          explaination:
            'dy/dx = 1/√(1 − x²) − (−1/√(1 − x²)) = 2/√(1 − x²). The graph crosses the y-axis at x = 0, so the gradient there is 2/√1 = 2.',
          answer: '2',
        },
        {
          id: 3,
          question: 'Given that y = 3 arctan(x/2), find dy/dx and simplify your answer.',
          type: 'Medium',
          explaination:
            'Use d/dx(arctan u) = u′/(1 + u²) with u = x/2: dy/dx = 3 × (1/2)/(1 + x²/4) = (3/2)/((4 + x²)/4) = 6/(x² + 4).',
          answer: 'dy/dx = 6/(x² + 4)',
        },
      ],
      'integration-inverse-trigonometric-forms': [
        {
          id: 1,
          question: '(a) Find ∫ 3/√(1 − x²) dx.  (b) Find ∫ 4/(1 + x²) dx.',
          type: 'Easy',
          explaination:
            'Use the standard results ∫ 1/√(1 − x²) dx = arcsin x + c and ∫ 1/(1 + x²) dx = arctan x + c.  (a) ∫ 3/√(1 − x²) dx = 3 arcsin x + c.  (b) ∫ 4/(1 + x²) dx = 4 arctan x + c.',
          answer: '(a) 3 arcsin x + c  (b) 4 arctan x + c',
        },
        {
          id: 2,
          question:
            '(a) Find ∫ (2 + √(1 − x²))/√(1 − x²) dx.  (b) Find ∫ (2√(1 − x²) − 3)/√(1 − x²) dx.',
          type: 'Medium',
          explaination:
            'Split each fraction into standard forms.  (a) (2 + √(1 − x²))/√(1 − x²) = 2/√(1 − x²) + 1, which integrates to 2 arcsin x + x + c.  (b) (2√(1 − x²) − 3)/√(1 − x²) = 2 − 3/√(1 − x²), which integrates to 2x − 3 arcsin x + c.',
          answer: '(a) 2 arcsin x + x + c  (b) 2x − 3 arcsin x + c',
        },
      ],
      'integration-completing-the-square-arctan-form': [
        {
          id: 1,
          question: '(a) Find ∫ 1/(x² + 4x + 5) dx.  (b) Find ∫ 1/(x² − 6x + 10) dx.',
          type: 'Medium',
          explaination:
            'Complete the square, then use ∫ 1/(u² + 1) du = arctan u + c.  (a) x² + 4x + 5 = (x + 2)² + 1, so the integral is arctan(x + 2) + c.  (b) x² − 6x + 10 = (x − 3)² + 1, so the integral is arctan(x − 3) + c.',
          answer: '(a) arctan(x + 2) + c  (b) arctan(x − 3) + c',
        },
        {
          id: 2,
          question: '(a) Find ∫ 1/(x² + 2x + 10) dx.  (b) Find ∫ 1/(x² + 4x + 20) dx.',
          type: 'Medium',
          explaination:
            'Complete the square, then use ∫ 1/(u² + a²) du = (1/a) arctan(u/a) + c.  (a) x² + 2x + 10 = (x + 1)² + 3², so the integral is (1/3) arctan((x + 1)/3) + c.  (b) x² + 4x + 20 = (x + 2)² + 4², so the integral is (1/4) arctan((x + 2)/4) + c.',
          answer: '(a) (1/3) arctan((x + 1)/3) + c  (b) (1/4) arctan((x + 2)/4) + c',
        },
        {
          id: 3,
          question: '(a) Find ∫ 1/(x² + 6x + 11) dx.  (b) Find ∫ 1/(x² − 10x + 30) dx.',
          type: 'Medium',
          explaination:
            'Complete the square, then use ∫ 1/(u² + a²) du = (1/a) arctan(u/a) + c.  (a) x² + 6x + 11 = (x + 3)² + (√2)², so the integral is (1/√2) arctan((x + 3)/√2) + c.  (b) x² − 10x + 30 = (x − 5)² + (√5)², so the integral is (1/√5) arctan((x − 5)/√5) + c.',
          answer: '(a) (1/√2) arctan((x + 3)/√2) + c  (b) (1/√5) arctan((x − 5)/√5) + c',
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
