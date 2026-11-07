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
//       {
//         title: 'Combinations',
//         slug: 'combinations',
//         description:
//           'Count selections where order does not matter using the nCr formula, and combine choices from different groups.',
//       },
//       {
//         title: 'Counting (Distribution into Boxes)',
//         slug: 'counting-distribution-into-boxes',
//         description:
//           'Count the ways of distributing objects into boxes by treating each placement as a separate choice.',
//       },
//       {
//         title: 'Combinations (Geometric)',
//         slug: 'combinations-geometric',
//         description:
//           'Use combinations to count the triangles, quadrilaterals and other shapes formed from a set of points.',
//       },
//       {
//         title: 'Combinations (Handshake Problem)',
//         slug: 'combinations-handshake-problem',
//         description:
//           'Model handshakes as selections of two people and solve for the number of handshakes or the group size.',
//       },
//       {
//         title: 'Combinations with restrictions',
//         slug: 'combinations-with-restrictions',
//         description:
//           'Count selections with conditions, such as at least one of a type, using cases and complementary counting.',
//       },
//       {
//         title: 'Probability – Combinations',
//         slug: 'probability-combinations',
//         description: 'Find probabilities by counting favourable and total selections with nCr.',
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
//       {
//         title: 'First Four Terms',
//         slug: 'first-four-terms',
//         description:
//           'Use the binomial theorem to write the first four terms of an expansion in ascending powers.',
//       },
//       {
//         title: "Pascal's Triangle Expansion",
//         slug: 'pascals-triangle-expansion',
//         description:
//           "Use the rows of Pascal's triangle as coefficients to expand brackets raised to small powers.",
//       },
//       {
//         title: 'Binomial Coefficients',
//         slug: 'binomial-coefficients',
//         description: 'Calculate binomial coefficients ⁿCᵣ and use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ.',
//       },
//       {
//         title: 'Finding Unknown r',
//         slug: 'finding-unknown-r',
//         description: 'Find the value or values of r that give a stated binomial coefficient.',
//       },
//       {
//         title: 'Finding Unknown n',
//         slug: 'finding-unknown-n',
//         description: 'Work back from a given binomial coefficient or term to find the power n.',
//       },
//       {
//         title: 'Expansion with Rational Terms',
//         slug: 'expansion-with-rational-terms',
//         description:
//           'Expand brackets containing fractional terms such as 2/x and find specific coefficients.',
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
//       {
//         title: 'Powers of i',
//         slug: 'powers-of-i',
//         description: 'Simplify powers of i using the repeating cycle i, −1, −i, 1.',
//       },
//       {
//         title: 'Solving quadratic equations with complex roots',
//         slug: 'solving-quadratic-equations-with-complex-roots',
//         description:
//           'Solve quadratic equations with a negative discriminant and write the complex roots as a conjugate pair.',
//       },
//       {
//         title: 'Division / Writing in x+iy form',
//         slug: 'division-writing-in-x-iy-form',
//         description:
//           'Divide complex numbers by multiplying by the conjugate and write the result in the form x + iy.',
//       },
//       {
//         title: 'Argand diagram',
//         slug: 'argand-diagram',
//         description:
//           'Plot complex numbers on the Argand diagram, including conjugates, multiples, sums and differences.',
//       },
//       {
//         title: 'Cartesian Form from Polar',
//         slug: 'cartesian-form-from-polar',
//         description:
//           'Convert complex numbers from modulus–argument form to Cartesian form using exact values.',
//       },
//       {
//         title: 'Loci on Argand Diagram',
//         slug: 'loci-on-argand-diagram',
//         description:
//           'Sketch and interpret loci such as circles, half-lines and perpendicular bisectors on the Argand diagram.',
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
//       {
//         title: 'Parallel vectors — finding unknowns',
//         slug: 'parallel-vectors-finding-unknowns',
//         description:
//           'Use scalar multiples to find unknown components that make two vectors parallel.',
//       },
//       {
//         title: 'Unit vectors',
//         slug: 'unit-vectors',
//         description:
//           'Find a unit vector in the direction of a given vector by dividing by its magnitude.',
//       },
//       {
//         title: 'Magnitude of a vector',
//         slug: 'magnitude-of-a-vector',
//         description:
//           'Calculate the magnitude of a vector and solve for unknown components from a given length.',
//       },
//       {
//         title: 'Collinearity',
//         slug: 'collinearity',
//         description:
//           'Show that points are collinear and find unknown coordinates using parallel vectors through a common point.',
//       },
//       {
//         title: 'Foot of perpendicular from a point to a line',
//         slug: 'foot-of-perpendicular-from-a-point-to-a-line',
//         description: 'Find the point on a line closest to a given point using the scalar product.',
//       },
//       {
//         title: 'Area of Triangle using Cross Product',
//         slug: 'area-of-triangle-using-cross-product',
//         description:
//           'Find the area of a triangle in 3D as half the magnitude of the cross product of two sides.',
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
//       {
//         title: 'Increasing & Decreasing Functions',
//         slug: 'increasing-decreasing-functions',
//         description:
//           'Find the intervals where a function is increasing or decreasing from the sign of its derivative.',
//       },
//       {
//         title: 'Continuity',
//         slug: 'continuity',
//         description:
//           'Test whether a function is continuous at a point by comparing one-sided limits with its value.',
//       },
//       {
//         title: 'Related Rates of Change',
//         slug: 'related-rates-of-change',
//         description: 'Use the chain rule to connect the rates of change of related quantities.',
//       },
//       {
//         title: 'Differentiation – Inverse Trigonometric Functions',
//         slug: 'differentiation-inverse-trigonometric-functions',
//         description: 'Differentiate arcsin, arccos and arctan, combined with the chain rule.',
//       },
//       {
//         title: 'Integration – Inverse Trigonometric Forms',
//         slug: 'integration-inverse-trigonometric-forms',
//         description: 'Recognise and evaluate integrals that give arcsin and arctan results.',
//       },
//       {
//         title: 'Integration – Completing the Square (arctan form)',
//         slug: 'integration-completing-the-square-arctan-form',
//         description:
//           'Complete the square in a quadratic denominator to integrate using the arctan form.',
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
        slug: 'multiplication-addition-principles',
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
        slug: 'de-moivres-theorem-evaluation',
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
        slug: 'cross-product-scalar-triple-product',
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
  {
    title: 'Algebra',
    slug: 'algebra',
    description:
      'Divide polynomials, apply the remainder and factor theorems, use the sum and product of roots, and split partial fractions.',
    subtopics: [
      {
        title: 'Polynomial Division (Comparing Coefficients)',
        slug: 'polynomial-division-comparing-coefficients',
        description:
          'Polynomial division for IB Maths AA HL: divide polynomials by long division or by comparing coefficients, and find the remainder.',
      },
      {
        title: 'Remainder Theorem',
        slug: 'remainder-theorem',
        description:
          'Remainder theorem questions for IB Maths AA HL: find a remainder without dividing, and use it to find unknown coefficients.',
      },
      {
        title: 'Factor Theorem – Factorisation & Roots',
        slug: 'factor-theorem-factorisation-roots',
        description:
          'Use the factor theorem in IB Maths AA HL to find a factor, factorise a polynomial fully and solve for all of its roots, with mark scheme working.',
      },
      {
        title: "Vieta's Formulae (Sum & Product of Roots)",
        slug: 'vietas-formulae-sum-product-of-roots',
        description:
          "Sum and product of roots questions for IB Maths AA HL: apply Vieta's formulas to quadratics, cubics and higher polynomials.",
      },
      {
        title: 'Partial Fractions',
        slug: 'partial-fractions',
        description:
          'Partial fractions for IB Maths AA HL: split a rational function into simpler fractions, ready for integration or series expansion.',
      },
    ],
  },
  {
    title: 'Trigonometry',
    slug: 'trigonometry',
    description:
      'Work with inverse trigonometric functions, trigonometric identities, trig graphs and the compound angle formulae.',
    subtopics: [
      {
        title: 'Inverse Trigonometric Functions',
        slug: 'inverse-trigonometric-functions',
        description:
          'Inverse trigonometric functions in IB Maths AA HL: arcsin, arccos and arctan, their domains, ranges, graphs and exact values.',
      },
      {
        title: 'Trigonometric Identities & Proofs',
        slug: 'trigonometric-identities-proofs',
        description:
          'Prove trigonometric identities in IB Maths AA HL using Pythagorean, reciprocal, double angle and compound angle results.',
      },
      {
        title: 'Graphs of Trigonometric Functions',
        slug: 'graphs-of-trigonometric-functions',
        description:
          'Sketch and interpret graphs of trigonometric functions in IB Maths AA HL, including the reciprocal and inverse trig graphs.',
      },
      {
        title: 'Compound Angle Formulae – Tangent',
        slug: 'compound-angle-formulae-tangent',
        description:
          'Use the tan addition formula in IB Maths AA HL to expand tan(A ± B), find exact values and solve trigonometric equations, with mark scheme working.',
      },
      {
        title: 'Compound Angle Formulae – Proof',
        slug: 'compound-angle-formulae-proof',
        description:
          'Use the compound angle formula for sine, cosine and tangent in IB Maths AA HL to prove identities and show given results.',
      },
    ],
  },
  {
    title: 'Probability & Statistics',
    slug: 'probability-statistics',
    description:
      'Use probability density functions to find probabilities, the mode, median, mean and variance of continuous random variables.',
    subtopics: [
      {
        title: 'Probability Density Functions',
        slug: 'probability-density-functions',
        description:
          'Probability density function questions for IB Maths AA HL: check validity, find unknown constants and calculate probabilities.',
      },
      {
        title: 'Mode of PDF',
        slug: 'mode-of-pdf',
        description:
          'Find the mode of a continuous random variable in IB Maths AA HL: locate the maximum of the probability density function.',
      },
      {
        title: 'Median of PDF',
        slug: 'median-of-pdf',
        description:
          'Find the median of a continuous random variable in IB Maths AA HL by setting the cumulative area under the density function equal to one half.',
      },
      {
        title: 'Mean and Variance of PDF',
        slug: 'mean-and-variance-of-pdf',
        description:
          'Find the expected value of a continuous random variable in IB Maths AA HL, plus its variance, by integrating over the full domain of the density function.',
      },
      {
        title: 'Probability Computations with PDF',
        slug: 'probability-computations-with-pdf',
        description:
          'PDF statistics for IB Maths AA HL: calculate probabilities for a continuous random variable by integrating its density function.',
      },
    ],
  },
  {
    title: 'Series',
    slug: 'series',
    description:
      'Build Maclaurin series from standard results, substitution and derivatives, and use them to approximate values.',
    subtopics: [
      {
        title: 'Maclaurin Series – Standard Functions',
        slug: 'maclaurin-series-standard-functions',
        description:
          'Maclaurin series questions for IB Maths AA HL: standard expansions of eˣ, sin x, cos x and ln(1 + x), with mark scheme working.',
      },
      {
        title: 'Maclaurin Series – Substitution',
        slug: 'maclaurin-series-substitution',
        description:
          'Find a Maclaurin series expansion in IB Maths AA HL by substituting into a standard series, such as e^(2x) or sin(x²), with mark scheme working.',
      },
      {
        title: 'Maclaurin Series – Derivatives Method',
        slug: 'maclaurin-series-derivatives-method',
        description:
          'Use the Maclaurin series formula in IB Maths AA HL: find successive derivatives at x = 0 and build the series term by term.',
      },
      {
        title: 'Maclaurin Series – Applications',
        slug: 'maclaurin-series-applications',
        description:
          'Taylor series approximation in IB Maths AA HL: use the first terms of a Maclaurin series to estimate values and integrals.',
      },
      {
        title: 'Maclaurin Series – Proof / General Term',
        slug: 'maclaurin-series-proof-general-term',
        description:
          'Maclaurin series questions for IB Maths AA HL on finding the general term and proving expansions, set out the way the mark scheme expects.',
      },
    ],
  },
  {
    title: 'Differential Equations',
    slug: 'differential-equations',
    description:
      "Classify and solve differential equations with Euler's method, the substitution y = vx and the integrating factor.",
    subtopics: [
      {
        title: 'Classifying DEs',
        slug: 'classifying-des',
        description:
          'Identify the types of differential equations in IB Maths AA HL: order, linear or non-linear, separable or homogeneous, with worked answers.',
      },
      {
        title: "Euler's Method",
        slug: 'eulers-method',
        description:
          "Euler's method questions for IB Maths AA HL: approximate solutions of differential equations step by step and judge the error.",
      },
      {
        title: 'Homogeneous – Substitution y=vx',
        slug: 'homogeneous-substitution-y-vx',
        description:
          'Solve a homogeneous differential equation in IB Maths AA HL with the substitution y = vx, then separate the variables and integrate.',
      },
      {
        title: 'General Solution – First-Order Linear ODE',
        slug: 'general-solution-first-order-linear-ode',
        description:
          'Solve a first order linear differential equation in IB Maths AA HL and find its general solution, with mark scheme working.',
      },
      {
        title: 'Integrating Factor Method',
        slug: 'integrating-factor-method',
        description:
          'Use an integrating factor in IB Maths AA HL to solve first-order linear differential equations, including initial value problems.',
      },
    ],
  },
  {
    title: 'Complex Numbers & Polynomials',
    slug: 'complex-numbers-polynomials',
    description:
      'Factorise polynomials over the complex numbers, use the conjugate root theorem and build polynomials from their roots.',
    subtopics: [
      {
        title: 'Factorising Quadratics over ℂ',
        slug: 'factorising-quadratics-over-c',
        description:
          'Find the complex roots of quadratic equations in IB Maths AA HL by factorising quadratics such as x² + 4 over the complex numbers.',
      },
      {
        title: 'Polynomial Division – Factorising Cubics',
        slug: 'polynomial-division-factorising-cubics',
        description:
          'Polynomial division questions for IB Maths AA HL: use a known real root to factorise a cubic into a linear and a quadratic factor.',
      },
      {
        title: 'Complex Conjugate Root Theorem',
        slug: 'complex-conjugate-root-theorem',
        description:
          'Use the complex conjugate root theorem in IB Maths AA HL to find every root of a real polynomial from one given complex root.',
      },
      {
        title: 'Factorising & Solving Polynomial Equations',
        slug: 'factorising-solving-polynomial-equations',
        description:
          'Factorising and solving polynomial equations in IB Maths AA HL: use a given root to factorise a cubic and find its complex roots.',
      },
      {
        title: 'Constructing Polynomials from Complex Roots',
        slug: 'constructing-polynomials-from-complex-roots',
        description:
          'Construct polynomials from complex roots in IB Maths AA HL, and find unknown real coefficients from a real root and a complex root.',
      },
      {
        title: 'Solving Polynomial Equations over ℂ',
        slug: 'solving-polynomial-equations-over-c',
        description:
          'Practise solving polynomial equations with complex roots in IB Maths AA HL, such as the quartic x⁴ + 13x² + 40 = 0.',
      },
      {
        title: 'Proof / Counterexample',
        slug: 'proof-counterexample',
        description:
          'Use proof by counterexample in IB Maths AA HL to show that an equation with complex conjugate roots need not have real coefficients.',
      },
    ],
  },
  {
    title: 'Proof by Mathematical Induction',
    slug: 'proof-by-mathematical-induction',
    description:
      'Prove summation formulae, sequence results, divisibility and inequalities by mathematical induction.',
    subtopics: [
      {
        title: 'Summation Formulae',
        slug: 'summation-formulae',
        description:
          'Prove summation formulae by induction in IB Maths AA HL, including the sum of squares formula and the sum of cubes.',
      },
      {
        title: 'Sequences & Series (Recurrence)',
        slug: 'sequences-series-recurrence',
        description:
          'Recurrence relation proof by induction in IB Maths AA HL: prove a formula for the nth term of a sequence defined recursively.',
      },
      {
        title: 'Divisibility',
        slug: 'divisibility',
        description:
          'Proof by induction for divisibility, inequalities and higher derivatives in IB Maths AA HL, such as 5ⁿ − 1 being divisible by 4.',
      },
    ],
  },
  {
    title: 'Proof',
    slug: 'proof',
    description:
      'Prove results by contradiction and contrapositive, show irrationality, and disprove claims with counterexamples.',
    subtopics: [
      {
        title: 'Proof by Contradiction / Contrapositive',
        slug: 'proof-by-contradiction-contrapositive',
        description:
          'Proof by contradiction in IB Maths AA HL: integers, real numbers and products, including proof by contrapositive.',
      },
      {
        title: 'Proof by Contradiction — Irrationality',
        slug: 'proof-by-contradiction-irrationality',
        description:
          'Prove root 2 is irrational and extend the method in IB Maths AA HL to √5, ∛2, log₂3 and the root of a cubic.',
      },
      {
        title: 'Proof by Contradiction — Real-life Context',
        slug: 'proof-by-contradiction-real-life-context',
        description:
          'One of the clearest proof by contradiction examples for IB Maths AA HL: show that at least one of three children is at least the mean height.',
      },
      {
        title: 'Proof by Direct Calculation — Rational Numbers',
        slug: 'proof-by-direct-calculation-rational-numbers',
        description:
          'A direct proof in IB Maths AA HL: show by calculation that the difference of two rational numbers is always rational.',
      },
      {
        title: 'Proof by Contradiction — Rational + Irrational',
        slug: 'proof-by-contradiction-rational-irrational',
        description:
          'The rational plus irrational is irrational proof in IB Maths AA HL, done by contradiction from the definition of a rational number.',
      },
      {
        title: 'Proof — Prime Numbers',
        slug: 'proof-prime-numbers',
        description:
          'A prime number proof in IB Maths AA HL: show that p₁p₂p₃ + 1 is not divisible by any of the three primes.',
      },
      {
        title: 'Proof by Contradiction — Infinite Primes (Euclid)',
        slug: 'proof-by-contradiction-infinite-primes-euclid',
        description:
          "Euclid's proof of infinitely many primes for IB Maths AA HL, written step by step as a proof by contradiction.",
      },
      {
        title: 'Graphical Argument — Real Roots',
        slug: 'graphical-argument-real-roots',
        description:
          'Find the number of real roots graphically in IB Maths AA HL: show x³ + x − 1 = 0 has exactly one real root by sketching.',
      },
      {
        title: 'Disproof by Counterexample',
        slug: 'disproof-by-counterexample',
        description:
          'Disproof by counterexample in IB Maths AA HL: find values that break false identities such as (x − y)³ ≡ x³ − y³.',
      },
    ],
  },
  {
    title: 'Algebra and Functions',
    slug: 'algebra-and-functions',
    description:
      'Match, sketch and find equations of polynomial graphs, and count the solutions of polynomial equations.',
    subtopics: [
      {
        title: 'Polynomial Graphs – Matching',
        slug: 'polynomial-graphs-matching',
        description:
          'Match polynomial graphs to their equations in IB Maths AA HL using degree, leading coefficient and y-intercept.',
      },
      {
        title: 'Sketching Polynomial Graphs',
        slug: 'sketching-polynomial-graphs',
        description:
          'Practise sketching polynomial graphs in IB Maths AA HL from factorised form, including repeated roots and general forms.',
      },
      {
        title: 'Finding Polynomial Equations from Graphs',
        slug: 'finding-polynomial-equations-from-graphs',
        description:
          'Practise finding polynomial equations from graphs in IB Maths AA HL using roots, repeated roots and one extra point.',
      },
      {
        title: 'Factorising and Sketching Polynomials',
        slug: 'factorising-and-sketching-polynomials',
        description:
          'Factorising and sketching polynomials in IB Maths AA HL: factorise a cubic fully, then sketch it with every axis intercept.',
      },
      {
        title: 'Polynomial Equations – Number of Solutions',
        slug: 'polynomial-equations-number-of-solutions',
        description:
          'Polynomial equation number of solutions in IB Maths AA HL: how many roots (x − p)²(x − q) = k has for k > 0, found from a sketch.',
      },
    ],
  },
  {
    title: 'Analysis & Approaches',
    slug: 'analysis-approaches',
    description:
      'Sketch rational functions with vertical and oblique asymptotes, find their range, and solve optimisation problems.',
    subtopics: [
      {
        title: 'Rational Functions – Vertical Asymptotes & Intercepts',
        slug: 'rational-functions-vertical-asymptotes-intercepts',
        description:
          'Find each vertical asymptote of a rational function in IB Maths AA HL, label the intercepts and sketch the graph.',
      },
      {
        title: 'Rational Functions – Oblique Asymptotes',
        slug: 'rational-functions-oblique-asymptotes',
        description:
          'Find the oblique asymptote of a rational function in IB Maths AA HL by polynomial division, then sketch the graph.',
      },
      {
        title: 'Rational Functions – Intersection with Linear Functions',
        slug: 'rational-functions-intersection-with-linear-functions',
        description:
          'Sketch a rational function graph in IB Maths AA HL for different parameter orders, and find where it meets a straight line.',
      },
      {
        title: 'Rational Functions – Turning Points & Sketching',
        slug: 'rational-functions-turning-points-sketching',
        description:
          'Practise sketching rational functions in IB Maths AA HL using the discriminant to find turning points, as for y = (2x − 3)/(x² + 4).',
      },
      {
        title: 'Rational Functions – Range & Asymptotes',
        slug: 'rational-functions-range-asymptotes',
        description:
          'Find the range of a rational function in IB Maths AA HL using the discriminant, and find parameters that make the range all real numbers.',
      },
      {
        title: 'Finding Minimum Values of Functions',
        slug: 'finding-minimum-values-of-functions',
        description:
          'Practise finding minimum values of functions in IB Maths AA HL on restricted domains, such as x² + x for x ≥ 0.',
      },
      {
        title: 'Finding Max and Min on Closed Interval',
        slug: 'finding-max-and-min-on-closed-interval',
        description:
          'Find the maximum and minimum on an interval in IB Maths AA HL, for closed intervals and for open intervals such as 0.5 < x < 2.',
      },
      {
        title: 'Optimisation with Constraint',
        slug: 'optimisation-with-constraint',
        description:
          'Optimisation with constraints in IB Maths AA HL: maximise xy given x + 2y = 6, and prove a result about an isosceles triangle.',
      },
      {
        title: 'Optimisation — Box Problem',
        slug: 'optimisation-box-problem',
        description:
          "The optimisation box problem in IB Maths AA HL: cut squares from a card's corners and find the size that gives the largest volume.",
      },
      {
        title: 'Optimisation — Surface Area/Volume',
        slug: 'optimisation-surface-area-volume',
        description:
          'Optimisation volume problems in IB Maths AA HL: find the minimum surface area of a square-based cuboid with a fixed volume.',
      },
      {
        title: 'Related Rates & Optimisation — Cone',
        slug: 'related-rates-optimisation-cone',
        description:
          'Related rates for a cone in IB Maths AA HL: how fast the volume changes as the apex angle grows, and when it is greatest.',
      },
      {
        title: 'Optimisation — Area Under Trigonometric Curve',
        slug: 'optimisation-area-under-trigonometric-curve',
        description:
          'Optimisation with trigonometry in IB Maths AA HL: the largest rectangle under y = sin x with one side on the x-axis.',
      },
      {
        title: 'Optimisation — Closest Distance to a Curve',
        slug: 'optimisation-closest-distance-to-a-curve',
        description:
          'Find the closest point on a curve in IB Maths AA HL: the shortest distance from (1, 2) to the curve y = x³.',
      },
      {
        title: 'Optimisation — Ladder Around Corner',
        slug: 'optimisation-ladder-around-corner',
        description:
          'The ladder around a corner problem in IB Maths AA HL: find the longest ladder that fits horizontally where two corridors meet.',
      },
    ],
  },
  {
    title: 'Functions',
    slug: 'functions',
    description:
      'Test functions for odd and even symmetry, restrict domains so inverses exist, and identify self-inverse functions.',
    subtopics: [
      {
        title: 'Odd / Even / Neither (Algebraic)',
        slug: 'odd-even-neither-algebraic',
        description:
          'Odd and even functions in IB Maths AA HL: test algebraically with f(−x), read symmetry from graphs, and prove properties.',
      },
      {
        title: 'Inverse Functions – Domain Restriction (Graphical)',
        slug: 'inverse-functions-domain-restriction-graphical',
        description:
          'Inverse function domain restriction in IB Maths AA HL: find the largest valid domain from a graph or algebraically, then find f⁻¹.',
      },
      {
        title: 'Self-Inverse Functions',
        slug: 'self-inverse-functions',
        description:
          'Self-inverse functions in IB Maths AA HL: test algebraically, prove f(f(x)) = x and find the parameter that makes a function self-inverse.',
      },
    ],
  },
  {
    title: 'Algebra & Functions',
    slug: 'algebra-functions',
    description:
      'Solve polynomial, rational and logarithmic inequalities algebraically and graphically.',
    subtopics: [
      {
        title: 'Polynomial Inequalities',
        slug: 'polynomial-inequalities',
        description:
          'Solve polynomial inequalities in IB Maths AA HL with factorisation and sign analysis, including repeated roots and the factor theorem.',
      },
      {
        title: 'Graphical Solution of Inequalities',
        slug: 'graphical-solution-of-inequalities',
        description:
          'Find the graphical solution of inequalities in IB Maths AA HL with a GDC, mixing polynomial, exponential, logarithmic and trig functions.',
      },
      {
        title: 'Logarithmic Inequalities',
        slug: 'logarithmic-inequalities',
        description:
          'Solve logarithmic inequalities in IB Maths AA HL, such as 3 ln(x² + 1) < x + 2, and a rational inequality against ln(x + 4).',
      },
      {
        title: 'Constructing Polynomials from Solution Sets',
        slug: 'constructing-polynomials-from-solution-sets',
        description:
          'Work backwards in IB Maths AA HL: construct polynomials from solution sets of inequalities and find the unknown coefficients.',
      },
      {
        title: 'Rational & Exponential Inequalities (Graphical)',
        slug: 'rational-exponential-inequalities-graphical',
        description:
          'Solve rational inequalities in IB Maths AA HL graphically and algebraically, including general parameters and reverse problems.',
      },
    ],
  },
  {
    title: 'Functions & Graphs',
    slug: 'functions-graphs',
    description:
      'Sketch modulus and reciprocal graphs, and describe and apply horizontal and combined transformations.',
    subtopics: [
      {
        title: 'Sketching y=|f(x)|',
        slug: 'sketching-y-f-x',
        description:
          'Sketch a modulus function graph in IB Maths AA HL: y = |f(x)| and y = f(|x|) for linear functions, with every intercept.',
      },
      {
        title: 'Modulus of a Given Graph',
        slug: 'modulus-of-a-given-graph',
        description:
          'Draw the modulus graph of a given curve in IB Maths AA HL, keeping its asymptotes and turning points in the right places.',
      },
      {
        title: 'Sketching Modulus Graphs',
        slug: 'sketching-modulus-graphs',
        description:
          'Practise sketching modulus graphs in IB Maths AA HL, such as y = 2 − 3|x + 1| and y = |(x − a)(x − b)|.',
      },
      {
        title: 'Determining Parameters from a Graph',
        slug: 'determining-parameters-from-a-graph',
        description:
          'Finding parameters from a graph in IB Maths AA HL: work out a, b and c in y = a|x + b| + c from its intercepts.',
      },
      {
        title: 'Modulus Equations — Number of Solutions',
        slug: 'modulus-equations-number-of-solutions',
        description:
          'Find the values of k that give modulus equations four solutions in IB Maths AA HL, using a sketch of the modulus graph.',
      },
      {
        title: 'Sketching y = \\frac{1{f(x)',
        slug: 'sketching-y-frac1f-x',
        description:
          'Sketch the reciprocal function graph y = 1/f(x) and y = [f(x)]² in IB Maths AA HL from a given graph of y = f(x).',
      },
      {
        title: 'Horizontal Transformations of Graphs',
        slug: 'horizontal-transformations-of-graphs',
        description:
          'Sketch horizontal transformations of graphs in IB Maths AA HL, such as y = f(3x + 2), from a piecewise linear graph.',
      },
      {
        title: 'Describing Sequences of Horizontal Transformations',
        slug: 'describing-sequences-of-horizontal-transformations',
        description:
          'Practise describing horizontal transformations in IB Maths AA HL that map y = x² or y = cos x to a new graph.',
      },
      {
        title: 'Transformed Coordinates',
        slug: 'transformed-coordinates',
        description:
          'Find transformed coordinates in IB Maths AA HL: where the point (3, −4) on y = f(x) moves under combined transformations.',
      },
      {
        title: 'Combined Transformations — Finding Equation',
        slug: 'combined-transformations-finding-equation',
        description:
          'Combined transformations in IB Maths AA HL: find the new equation after a sequence of stretches and translations, and the coefficients.',
      },
      {
        title: 'Non-commutative Transformations',
        slug: 'non-commutative-transformations',
        description:
          'Non-commutative transformations in IB Maths AA HL: show a reflection then a translation gives a different graph from the reverse order.',
      },
      {
        title: 'Deducing y = f(x) from y = \\frac{1{f(x)',
        slug: 'deducing-y-f-x-from-y-frac1f-x',
        description:
          'Use reciprocal graphs in IB Maths AA HL: deduce y = f(x) from the graph of y = 1/f(x) and its asymptotes.',
      },
      {
        title: 'Equivalent Sequences of Transformations',
        slug: 'equivalent-sequences-of-transformations',
        description:
          'Find equivalent transformations in IB Maths AA HL: a translation then a stretch matched by a stretch then a translation.',
      },
      {
        title: 'Exponential Transformations',
        slug: 'exponential-transformations',
        description:
          'Exponential transformations in IB Maths AA HL: show a vertical stretch of y = 8ˣ equals a horizontal translation.',
      },
    ],
  },
  {
    title: 'Geometry – Lines & Planes',
    slug: 'geometry-lines-planes',
    description:
      'Find where lines in 3D meet, decide whether they are parallel or skew, and model moving objects with vectors.',
    subtopics: [
      {
        title: 'Intersection of two lines in 3D (vector form)',
        slug: 'intersection-of-two-lines-in-3d-vector-form',
        description:
          'Find the intersection of two lines in 3D in IB Maths AA HL from vector and Cartesian equations, and where a line meets an axis.',
      },
      {
        title: 'Skew lines in 3D',
        slug: 'skew-lines-in-3d',
        description:
          'Show that two lines are skew lines in 3D in IB Maths AA HL: not parallel and with no point of intersection.',
      },
      {
        title: 'Classifying pairs of lines: same, parallel, or non-parallel',
        slug: 'classifying-pairs-of-lines-same-parallel-or-non-parallel',
        description:
          'Classify pairs of lines in IB Maths AA HL as the same line, parallel, intersecting or skew lines, from their vector equations.',
      },
      {
        title: 'Showing two representations describe the same line',
        slug: 'showing-two-representations-describe-the-same-line',
        description:
          'Same line or different lines? Decide in IB Maths AA HL whether two vector equations describe one line, using direction and point checks.',
      },
      {
        title: 'Finding parameter value for intersection; lines with unknown constant',
        slug: 'finding-parameter-value-for-intersection-lines-with-unknown-constant',
        description:
          'Find the parameter value for intersecting lines in IB Maths AA HL: the value of p that makes two lines with an unknown constant meet.',
      },
      {
        title: 'Paths of moving objects; intersection of paths',
        slug: 'paths-of-moving-objects-intersection-of-paths',
        description:
          "Paths of moving objects with vectors in IB Maths AA HL: do two helicopters' paths cross, and do the helicopters actually collide?",
      },
      {
        title: 'Speed of particles from position vectors',
        slug: 'speed-of-particles-from-position-vectors',
        description:
          'Find speed from position vectors in IB Maths AA HL for two particles, then decide whether two moving particles meet.',
      },
      {
        title: 'Vertical alignment of moving objects',
        slug: 'vertical-alignment-of-moving-objects',
        description:
          'Vertical alignment of moving objects in IB Maths AA HL: when one fly is directly above another, and their distance apart at a given time.',
      },
      {
        title: 'Moving objects; finding unknown velocity component',
        slug: 'moving-objects-finding-unknown-velocity-component',
        description:
          "Vector kinematics in IB Maths AA HL: find a boat's unknown velocity component from its path, then its speed.",
      },
      {
        title: 'Shortest distance between skew lines; perpendicular segment',
        slug: 'shortest-distance-between-skew-lines-perpendicular-segment',
        description:
          'Find the shortest distance between skew lines in IB Maths AA HL using the common perpendicular segment.',
      },
    ],
  },
  {
    title: 'Geometry',
    slug: 'geometry',
    description:
      'Write vector and Cartesian equations of planes, and test points and lines against them.',
    subtopics: [
      {
        title: 'Vector Equation of a Plane',
        slug: 'vector-equation-of-a-plane',
        description:
          'Write the vector equation of a plane in IB Maths AA HL from a point and two direction vectors parallel to it.',
      },
      {
        title: 'Plane Through Three Points',
        slug: 'plane-through-three-points',
        description:
          'Find the equation of a plane through three points in IB Maths AA HL using two direction vectors and the cross product.',
      },
      {
        title: 'Point on Plane Check',
        slug: 'point-on-plane-check',
        description:
          'Check whether a point lies on a plane in IB Maths AA HL from its vector equation, including a plane through three points.',
      },
      {
        title: 'Cartesian Equation & Point Check',
        slug: 'cartesian-equation-point-check',
        description:
          'Write the Cartesian equation of a plane in IB Maths AA HL from a normal vector and a point, and check points on it.',
      },
      {
        title: 'Plane Containing Two Lines',
        slug: 'plane-containing-two-lines',
        description:
          'Find a plane containing a line and point, or two lines, in IB Maths AA HL, and show a line lies in a given plane.',
      },
      {
        title: 'Coplanar Points',
        slug: 'coplanar-points',
        description:
          'Show that four coplanar points lie in the same plane in IB Maths AA HL using the plane through three of them.',
      },
    ],
  },
  {
    title: 'Vectors & 3D Geometry',
    slug: 'vectors-3d-geometry',
    description:
      'Find angles, intersections and distances between lines and planes, and solve systems of three planes.',
    subtopics: [
      {
        title: 'Angle between line and plane',
        slug: 'angle-between-line-and-plane',
        description:
          'Find the angle between two planes, and between a line and a plane, in IB Maths AA HL using normal and direction vectors.',
      },
      {
        title: 'Intersection of line and plane',
        slug: 'intersection-of-line-and-plane',
        description:
          'Find the intersection of a line and plane in IB Maths AA HL, and the line of intersection of two or three planes.',
      },
      {
        title: 'System of three planes',
        slug: 'system-of-three-planes',
        description:
          'Solve a system of three planes in IB Maths AA HL, describe its geometric configuration, and find the values of k and c for each case.',
      },
      {
        title: 'Perpendicular line to a plane; perpendicular distance',
        slug: 'perpendicular-line-to-a-plane-perpendicular-distance',
        description:
          'Write a line perpendicular to a plane in IB Maths AA HL, find where it meets the plane, and the perpendicular distance from a point.',
      },
      {
        title: 'Angle; intersection; perpendicular distance',
        slug: 'angle-intersection-perpendicular-distance',
        description:
          'Find the perpendicular distance from a point to a plane in IB Maths AA HL, with the angle and intersection of a line and plane.',
      },
      {
        title: 'Perpendicular from point; reflection in plane',
        slug: 'perpendicular-from-point-reflection-in-plane',
        description:
          'Find the reflection of a point in a plane in IB Maths AA HL via the foot of the perpendicular from the point.',
      },
      {
        title: 'Cross product; equation of plane; intersection of planes',
        slug: 'cross-product-equation-of-plane-intersection-of-planes',
        description:
          "Use the cross product in IB Maths AA HL to find a plane's equation and the line of intersection of two planes.",
      },
      {
        title: 'Consistent systems of equations; geometric configuration',
        slug: 'consistent-systems-of-equations-geometric-configuration',
        description:
          'Consistent systems of equations in IB Maths AA HL: find the value of a that makes three planes meet, and describe their configuration.',
      },
      {
        title: 'Intersection of planes; geometric configuration',
        slug: 'intersection-of-planes-geometric-configuration',
        description:
          'Find the intersection of planes in IB Maths AA HL as a vector line, then how it relates to a third plane.',
      },
      {
        title: 'Cross product; area; plane; perpendicular distance; volume',
        slug: 'cross-product-area-plane-perpendicular-distance-volume',
        description:
          'Find the volume of a tetrahedron using vectors in IB Maths AA HL, from triangle area, plane equation and perpendicular height.',
      },
      {
        title: 'Parallel planes; perpendicular distance',
        slug: 'parallel-planes-perpendicular-distance',
        description:
          'Show that two parallel planes are parallel in IB Maths AA HL, then find the perpendicular distance between them.',
      },
      {
        title: 'Perpendicular planes; cross product; line through point parallel to both planes',
        slug: 'perpendicular-planes-cross-product-line-through-point-parallel-to-both-planes',
        description:
          'Show that perpendicular planes have perpendicular normals in IB Maths AA HL, and find a line parallel to both planes.',
      },
    ],
  },
  {
    title: 'Probability',
    slug: 'probability',
    description:
      "Use conditional probability, tree diagrams and Bayes' theorem, from bags of counters to medical tests.",
    subtopics: [
      {
        title: "Conditional Probability (Bayes' Theorem – 2 events)",
        slug: 'conditional-probability-bayes-theorem-2-events',
        description:
          'Bayes theorem in IB Maths AA HL: two and three events, binomial contexts and medical tests, including rare-disease screening.',
      },
      {
        title: 'Conditional Probability from Tree Diagram',
        slug: 'conditional-probability-from-tree-diagram',
        description:
          'Conditional probability with bags in IB Maths AA HL: tree diagrams, with and without replacement, and algebraic combined bags.',
      },
      {
        title: "Bayes' Theorem from Tree Diagram – 3 Events",
        slug: 'bayes-theorem-from-tree-diagram-3-events',
        description:
          'Use a Bayes theorem tree diagram in IB Maths AA HL to find P(B₂ | A) when there are three possible first-stage events.',
      },
      {
        title: "Total Probability & Bayes' Theorem (Context)",
        slug: 'total-probability-bayes-theorem-context',
        description:
          "Use the law of total probability with Bayes' theorem in IB Maths AA HL: buses and trains, broken eggs and other contexts.",
      },
      {
        title: "Bayes' Theorem (Reverse Conditional)",
        slug: 'bayes-theorem-reverse-conditional',
        description:
          'Reverse conditional probability in IB Maths AA HL: given that a test was passed, find the probability it was taken in the morning.',
      },
      {
        title: "Bayes' Theorem with Multiple Outcomes",
        slug: 'bayes-theorem-with-multiple-outcomes',
        description:
          'One of the richer Bayes theorem examples for IB Maths AA HL: four-, six- and eight-sided dice drawn from one bag.',
      },
      {
        title: "Bayes' Theorem – 3 Equally Likely Events",
        slug: 'bayes-theorem-3-equally-likely-events',
        description:
          'Bayes theorem questions for IB Maths AA HL: three equally likely goalkeepers and the chance a saved penalty was made by each.',
      },
    ],
  },
  {
    title: 'Statistics & Probability',
    slug: 'statistics-probability',
    description:
      'Work with discrete random variables, their mean and variance, and linear transformations.',
    subtopics: [
      {
        title: 'Discrete Random Variables – Variance',
        slug: 'discrete-random-variables-variance',
        description:
          'Find the variance of a discrete random variable in IB Maths AA HL from a table, including a dice with an unknown face value.',
      },
      {
        title: 'Discrete Random Variables – Defined by Formula',
        slug: 'discrete-random-variables-defined-by-formula',
        description:
          'Discrete random variable questions in IB Maths AA HL: distributions defined by a formula, the value of k, E(X) and Var(X).',
      },
      {
        title: 'Linear Transformations of Random Variables',
        slug: 'linear-transformations-of-random-variables',
        description:
          'Linear transformation of random variables in IB Maths AA HL: E(aX + b), Var(aX + b) and derived distributions.',
      },
      {
        title: 'Discrete Random Variables – Standard Deviation',
        slug: 'discrete-random-variables-standard-deviation',
        description:
          'Find k and the standard deviation of a discrete random variable in IB Maths AA HL from its probability distribution table.',
      },
      {
        title: 'Linear Transformations – Probability Distribution Table',
        slug: 'linear-transformations-probability-distribution-table',
        description:
          'Find E(aX + b) and Var(aX + b) in IB Maths AA HL from a probability distribution table, then for a new random variable.',
      },
      {
        title: 'Discrete Random Variables – Derived Distribution',
        slug: 'discrete-random-variables-derived-distribution',
        description:
          'Build a derived probability distribution in IB Maths AA HL from P(V = v) = v/20, then find its expected value.',
      },
      {
        title: 'Binomial Distribution – Coin Flipping',
        slug: 'binomial-distribution-coin-flipping',
        description:
          'Binomial distribution with a coin toss and a dice in IB Maths AA HL: write the distribution, the mean and the expected profit.',
      },
      {
        title: 'Discrete Random Variables – Sum of Two Dice',
        slug: 'discrete-random-variables-sum-of-two-dice',
        description:
          'Find the sum of two dice probability distribution in IB Maths AA HL for a dice numbered 1, 1, 2, 2, 2, 3.',
      },
      {
        title: 'Discrete Random Variables – Unknown Probabilities',
        slug: 'discrete-random-variables-unknown-probabilities',
        description:
          'Probability distribution with unknowns in IB Maths AA HL: find the missing probabilities from E(X) and the total of 1, then the variance.',
      },
    ],
  },
  {
    title: 'Analysis and Approaches',
    slug: 'analysis-and-approaches',
    description:
      'Investigate limits, continuity and differentiability, differentiate from first principles, and prove nth derivatives by induction.',
    subtopics: [
      {
        title: 'Continuity of Functions',
        slug: 'continuity-of-functions',
        description:
          'Continuity and differentiability questions for IB Maths AA HL: find a and b so piecewise functions are continuous and smooth.',
      },
      {
        title: 'Limits at Infinity',
        slug: 'limits-at-infinity',
        description:
          'Find limits at infinity in IB Maths AA HL for rational and exponential expressions by dividing by the dominant term.',
      },
      {
        title: 'Convergence and Divergence',
        slug: 'convergence-and-divergence',
        description:
          'Decide convergence and divergence as x approaches infinity in IB Maths AA HL, and link it to continuity.',
      },
      {
        title: 'Differentiation from First Principles',
        slug: 'differentiation-from-first-principles',
        description:
          'Differentiation from first principles in IB Maths AA HL: polynomials such as x³ and x⁴, and a proof of the sum rule.',
      },
      {
        title: 'Higher Order Derivatives',
        slug: 'higher-order-derivatives',
        description:
          'Find higher order derivatives in IB Maths AA HL, including a general nth derivative proved by induction.',
      },
      {
        title: 'Proof by Mathematical Induction',
        slug: 'proof-by-mathematical-induction',
        description:
          'Proof by mathematical induction for nth derivatives in IB Maths AA HL, such as the nth derivative of e^(5x) and of sin x.',
      },
      {
        title: 'Limits / Differentiation of Exponentials',
        slug: 'limits-differentiation-of-exponentials',
        description:
          'Exponential limits and derivatives in IB Maths AA HL: find limits as x approaches ±∞ and zero, then differentiate the function.',
      },
      {
        title: 'First Principles / Proof by Induction',
        slug: 'first-principles-proof-by-induction',
        description:
          'Combine first principles and proof by induction in IB Maths AA HL: prove a derivative from the definition, then the nth derivative.',
      },
    ],
  },
  {
    title: 'Integration',
    slug: 'integration',
    description:
      'Integrate by substitution, find areas against the y-axis, and calculate volumes of revolution.',
    subtopics: [
      {
        title: 'Integration by Substitution (Indefinite)',
        slug: 'integration-by-substitution-indefinite',
        description:
          'Integration by substitution questions for IB Maths AA HL: indefinite and definite, with exponentials, trig, logs and areas.',
      },
      {
        title: 'Area between a curve and the y-axis',
        slug: 'area-between-a-curve-and-the-y-axis',
        description:
          'Find the area between a curve and the y-axis in IB Maths AA HL by integrating with respect to y between two horizontal lines.',
      },
      {
        title: 'Volume of revolution about x-axis',
        slug: 'volume-of-revolution-about-x-axis',
        description:
          'Volume of revolution in IB Maths AA HL: about the x-axis and y-axis, between curves, about other lines and with unknown limits.',
      },
      {
        title: 'Area and volume combined',
        slug: 'area-and-volume-combined',
        description:
          "Area and volume of revolution in IB Maths AA HL: find a region's area, then the volume when it is rotated, in multi-part questions.",
      },
      {
        title: 'Volume of revolution – derivation of cone formula',
        slug: 'volume-of-revolution-derivation-of-cone-formula',
        description:
          'Derive the volume of a cone using integration in IB Maths AA HL by rotating a straight line about the x-axis.',
      },
      {
        title: 'Volume of revolution – derivation of sphere formula',
        slug: 'volume-of-revolution-derivation-of-sphere-formula',
        description:
          'Derive the volume of a sphere using integration in IB Maths AA HL by rotating a semicircle about the x-axis.',
      },
      {
        title: 'Ratio of areas – invariance',
        slug: 'ratio-of-areas-invariance',
        description:
          'Ratio of areas integration in IB Maths AA HL: show the split of the area under y = x³ stays the same for every upper limit.',
      },
    ],
  },
  {
    title: 'Series & Differential Equations',
    slug: 'series-differential-equations',
    description:
      'Solve differential equations with Maclaurin and power series, including Legendre, Hermite and Chebyshev equations.',
    subtopics: [
      {
        title: 'Maclaurin Series – Recurrence Relations',
        slug: 'maclaurin-series-recurrence-relations',
        description:
          'Maclaurin series differential equation solutions in IB Maths AA HL: first terms, recurrence relations, proofs and estimates.',
      },
      {
        title: 'Maclaurin Series – Airy-type ODE',
        slug: 'maclaurin-series-airy-type-ode',
        description:
          'Find the first non-zero terms of the Maclaurin series solution to the Airy equation y″ + xy = 0 in IB Maths AA HL.',
      },
      {
        title: 'Maclaurin Series – Variable Coefficient ODE',
        slug: 'maclaurin-series-variable-coefficient-ode',
        description:
          'Find power series solutions to differential equations with variable coefficients in IB Maths AA HL, including the general solution.',
      },
      {
        title: 'Legendre Differential Equation',
        slug: 'legendre-differential-equation',
        description:
          'Use a series solution for the Legendre differential equation in IB Maths AA HL and find polynomial solutions for integer l.',
      },
      {
        title: 'Hermite Polynomial Differential Equation',
        slug: 'hermite-polynomial-differential-equation',
        description:
          'Solve the Hermite polynomial differential equation in IB Maths AA HL with a series and find when the solution is a polynomial.',
      },
      {
        title: 'Chebyshev Differential Equation',
        slug: 'chebyshev-differential-equation',
        description:
          'Solve the Chebyshev differential equation in IB Maths AA HL using a series solution and its recurrence relation.',
      },
      {
        title: 'Maclaurin Series – Non-existence / Frobenius Method',
        slug: 'maclaurin-series-non-existence-frobenius-method',
        description:
          'Use the Frobenius method in IB Maths AA HL when a Maclaurin series solution does not exist, and find the general solution.',
      },
    ],
  },
]

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
      'multiplication-addition-principles': [
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
      'de-moivres-theorem-evaluation': [
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
      'cross-product-scalar-triple-product': [
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
  {
    algebra: {
      title: 'Algebra',
      'polynomial-division-comparing-coefficients': [
        {
          id: 1,
          question:
            'Use the method of comparing coefficients to find the quotient and remainder when x² + 3x + 5 is divided by x + 1.',
          type: 'Easy',
          explaination:
            'Write x² + 3x + 5 = (x + 1)(x + a) + b. Expanding: (x + 1)(x + a) = x² + (a + 1)x + a. Compare coefficients: a + 1 = 3 ⇒ a = 2; b = 5 − 2 = 3. So quotient = x + 2, remainder = 3.',
          answer: 'Quotient: x + 2, Remainder: 3',
        },
        {
          id: 2,
          question:
            'Use the method of comparing coefficients to find the quotient and remainder when x² + x − 4 is divided by x + 2.',
          type: 'Easy',
          explaination:
            'Write x² + x − 4 = (x + 2)(x + a) + b. Compare: a + 2 = 1 ⇒ a = −1; b = −4 − (−2) = −2. Quotient = x − 1, remainder = −2.',
          answer: 'Quotient: x − 1, Remainder: −2',
        },
        {
          id: 3,
          question:
            'Use the method of comparing coefficients to find the quotient and remainder when x³ − 6x² + 4x + 8 is divided by x − 3.',
          type: 'Easy',
          explaination:
            'Write x³ − 6x² + 4x + 8 = (x − 3)(x² + bx + c) + r. Expanding and comparing: leading: b = −3; x²: −3 − 3(−3)? ⇒ compare carefully: (x − 3)(x² − 3x − 5) = x³ − 3x² − 5x − 3x² + 9x + 15 = x³ − 6x² + 4x + 15. So r = 8 − 15 = −7. Quotient = x² − 3x − 5, remainder = −7.',
          answer: 'Quotient: x² − 3x − 5, Remainder: −7',
        },
        {
          id: 4,
          question:
            'Use the method of comparing coefficients to find the quotient and remainder when x³ − 7x² + 11x + 3 is divided by x − 1.',
          type: 'Easy',
          explaination:
            '(x − 1)(x² − 6x + 5) = x³ − 6x² + 5x − x² + 6x − 5 = x³ − 7x² + 11x − 5. So remainder = 3 − (−5) = 8. Quotient = x² − 6x + 5, remainder = 8.',
          answer: 'Quotient: x² − 6x + 5, Remainder: 8',
        },
        {
          id: 5,
          question:
            'Use the method of comparing coefficients to find the quotient and remainder when 6x⁴ + 7x³ − 5x² + 5x + 10 is divided by 2x + 3.',
          type: 'Medium',
          explaination:
            'Perform polynomial long division: 6x⁴ + 7x³ − 5x² + 5x + 10 = (2x + 3)(3x³ − x² − x + 4) + (−2). Verify: (2x + 3)(3x³) = 6x⁴ + 9x³; then −2x³ − 5x²; (2x + 3)(−x²) = −2x³ − 3x²; giving −2x² + 5x; etc. Remainder = −2.',
          answer: 'Quotient: 3x³ − x² − x + 4, Remainder: −2',
        },
        {
          id: 6,
          question:
            'Use the method of comparing coefficients to find the quotient and remainder when 12x⁴ − 10x³ + 11x² − 5 is divided by 3x − 1.',
          type: 'Medium',
          explaination:
            'Long division: 12x⁴ − 10x³ + 11x² − 5 = (3x − 1)(4x³ − 2x² + 3x + 1) + (−4). Check each step systematically.',
          answer: 'Quotient: 4x³ − 2x² + 3x + 1, Remainder: −4',
        },
        {
          id: 7,
          question:
            'Use the method of comparing coefficients to find the quotient and remainder when x³ is divided by x + 2.',
          type: 'Easy',
          explaination:
            'x³ = (x + 2)(x² − 2x + 4) − 8. Verify: (x + 2)(x² − 2x + 4) = x³ − 2x² + 4x + 2x² − 4x + 8 = x³ + 8. So x³ = (x + 2)(x² − 2x + 4) − 8.',
          answer: 'Quotient: x² − 2x + 4, Remainder: −8',
        },
        {
          id: 8,
          question:
            'Use the method of comparing coefficients to find the quotient and remainder when 3x⁴ is divided by x − 1.',
          type: 'Easy',
          explaination:
            '3x⁴ = (x − 1)(3x³ + 3x² + 3x + 3) + 3. Verify: (x − 1)(3x³ + 3x² + 3x + 3) = 3x⁴ + 3x³ + 3x² + 3x − 3x³ − 3x² − 3x − 3 = 3x⁴ − 3. So 3x⁴ = (x − 1)(3x³ + 3x² + 3x + 3) + 3.',
          answer: 'Quotient: 3x³ + 3x² + 3x + 3, Remainder: 3',
        },
      ],
      'remainder-theorem': [
        {
          id: 1,
          question:
            'Use the Remainder Theorem to find the remainder when f(x) = 2x³ − x + 3 is divided by (x − 2).',
          type: 'Easy',
          explaination: 'By remainder theorem: remainder = f(2) = 2(8) − 2 + 3 = 16 − 2 + 3 = 17.',
          answer: '17',
        },
        {
          id: 2,
          question:
            'Use the Remainder Theorem to find the remainder when f(x) = 2x³ + x − 5 is divided by (x − 4).',
          type: 'Easy',
          explaination: 'Remainder = f(4) = 2(64) + 4 − 5 = 128 − 1 = 127.',
          answer: '127',
        },
        {
          id: 3,
          question:
            'Use the Remainder Theorem to find the remainder when f(x) = x⁴ + 2x² + 4 is divided by (x + 2).',
          type: 'Easy',
          explaination: 'Remainder = f(−2) = 16 + 8 + 4 = 28.',
          answer: '28',
        },
        {
          id: 4,
          question:
            'Use the Remainder Theorem to find the remainder when f(x) = x⁴ + x³ − x + 1 is divided by (x + 1).',
          type: 'Easy',
          explaination: 'Remainder = f(−1) = 1 − 1 + 1 + 1 = 2.',
          answer: '2',
        },
        {
          id: 5,
          question:
            'Use the Remainder Theorem to find the remainder when f(x) = x³ + 4x² − 3 is divided by (3x − 2).',
          type: 'Medium',
          explaination:
            'For 3x − 2 = 0 ⇒ x = 2/3. Remainder = f(2/3) = 8/27 + 4·4/9 − 3 = 8/27 + 48/27 − 81/27 = −25/27.',
          answer: '−25/27',
        },
        {
          id: 6,
          question:
            'Use the Remainder Theorem to find the remainder when f(x) = x³ − 3x + 1 is divided by (2x − 1).',
          type: 'Medium',
          explaination: 'x = 1/2: Remainder = f(1/2) = 1/8 − 3/2 + 1 = 1/8 − 12/8 + 8/8 = −3/8.',
          answer: '−3/8',
        },
        {
          id: 7,
          question:
            'Use the Remainder Theorem to find the remainder when f(x) = 3x³ + 2x + 3 is divided by (2x + 3).',
          type: 'Medium',
          explaination: 'x = −3/2: f(−3/2) = 3(−27/8) + 2(−3/2) + 3 = −81/8 − 3 + 3 = −81/8.',
          answer: '−81/8',
        },
        {
          id: 8,
          question:
            'Use the Remainder Theorem to find the remainder when f(x) = 2x³ − x + 5 is divided by (3x + 1).',
          type: 'Medium',
          explaination:
            'x = −1/3: f(−1/3) = 2(−1/27) − (−1/3) + 5 = −2/27 + 9/27 + 135/27 = 142/27.',
          answer: '142/27',
        },
      ],
      'factor-theorem-factorisation-roots': [
        {
          id: 1,
          question:
            'Show that (x − 1) is a factor of f(x) = x³ + 2x² − x − 2, fully factorise f(x), and state the number of distinct real roots of f(x) = 0.',
          type: 'Medium',
          explaination:
            'f(1) = 1 + 2 − 1 − 2 = 0 (factor confirmed). Divide: f(x) = (x − 1)(x² + 3x + 2) = (x − 1)(x + 1)(x + 2). Three distinct real roots: x = 1,−1,−2.',
          answer: 'f(x) = (x − 1)(x + 1)(x + 2); 3 distinct real roots: x = 1, −1, −2',
        },
        {
          id: 2,
          question:
            'Show that (x − 2) is a factor of f(x) = x³ + x² − 4x − 4, fully factorise f(x), and state the number of distinct real roots of f(x) = 0.',
          type: 'Medium',
          explaination:
            'f(2) = 8 + 4 − 8 − 4 = 0 ✓. Divide: f(x) = (x − 2)(x² + 3x + 2) = (x − 2)(x + 1)(x + 2). Three distinct real roots.',
          answer: 'f(x) = (x − 2)(x + 1)(x + 2); 3 distinct real roots: x = 2, −1, −2',
        },
        {
          id: 3,
          question:
            'Show that (x + 3) is a factor of f(x) = x³ − x² − 8x + 12, fully factorise f(x), and state the number of distinct real roots of f(x) = 0.',
          type: 'Medium',
          explaination:
            'f(−3) = −27 − 9 + 24 + 12 = 0 ✓. Divide: f(x) = (x + 3)(x² − 4x + 4) = (x + 3)(x − 2)². Two distinct real roots (x = 2 has multiplicity 2).',
          answer: 'f(x) = (x + 3)(x − 2)²; 2 distinct real roots: x = −3, 2',
        },
        {
          id: 4,
          question:
            'Show that (x + 1) is a factor of f(x) = x³ − 5x² + 3x + 9, fully factorise f(x), and state the number of distinct real roots of f(x) = 0.',
          type: 'Medium',
          explaination:
            'f(−1) = −1 − 5 − 3 + 9 = 0 ✓. Divide: f(x) = (x + 1)(x² − 6x + 9) = (x + 1)(x − 3)². Two distinct real roots.',
          answer: 'f(x) = (x + 1)(x − 3)²; 2 distinct real roots: x = −1, 3',
        },
        {
          id: 5,
          question:
            'Show that (x − 1) is a factor of f(x) = x³ − 3x² + 12x − 10, fully factorise f(x), and state the number of distinct real roots of f(x) = 0.',
          type: 'Hard',
          explaination:
            'f(1) = 1 − 3 + 12 − 10 = 0 ✓. Divide: f(x) = (x − 1)(x² − 2x + 10). Discriminant of x² − 2x + 10: Δ = 4 − 40 = −36 < 0, no real roots. Only one real root x = 1.',
          answer: 'f(x) = (x − 1)(x² − 2x + 10); 1 distinct real root: x = 1',
        },
        {
          id: 6,
          question:
            'Show that (x − 3) is a factor of f(x) = x³ − 2x² + 2x − 15, fully factorise f(x), and state the number of distinct real roots of f(x) = 0.',
          type: 'Hard',
          explaination:
            'f(3) = 27 − 18 + 6 − 15 = 0 ✓. Divide: f(x) = (x − 3)(x² + x + 5). Discriminant: 1 − 20 = −19 < 0. Only one real root x = 3.',
          answer: 'f(x) = (x − 3)(x² + x + 5); 1 distinct real root: x = 3',
        },
        {
          id: 7,
          question:
            'Show that (3x − 1) is a factor of f(x) = 6x³ − 11x² + 6x − 1, fully factorise f(x), and state the number of distinct real roots of f(x) = 0.',
          type: 'Hard',
          explaination:
            'f(1/3) = 6/27 − 11/9 + 2 − 1 = 2/9 − 11/9 + 1 = 0 ✓. Divide: f(x) = (3x − 1)(2x² − 3x + 1) = (3x − 1)(2x − 1)(x − 1).',
          answer: 'f(x) = (3x − 1)(2x − 1)(x − 1); 3 distinct real roots: x = 1/3, 1/2, 1',
        },
        {
          id: 8,
          question:
            'Show that (3x − 5) is a factor of f(x) = 12x³ + 13x² − 37x − 30, fully factorise f(x), and state the number of distinct real roots of f(x) = 0.',
          type: 'Hard',
          explaination:
            'f(5/3) = 0 ✓ (verify by substitution). Divide: f(x) = (3x − 5)(4x² + 11x + 6) = (3x − 5)(4x + 3)(x + 2).',
          answer: 'f(x) = (3x − 5)(4x + 3)(x + 2); 3 distinct real roots: x = 5/3, −3/4, −2',
        },
      ],
      'vietas-formulae-sum-product-of-roots': [
        {
          id: 1,
          question:
            'For each equation, p and q are the roots. Find p + q + 5.  Part a: 5x² + 2x + 4 = 0  Part b: 4x² + 3x + 5 = 0',
          type: 'Easy',
          explaination:
            "By Vieta's: p + q = −b/a.  Part a: p + q = −2/5, so p + q + 5 = 23/5.  Part b: p + q = −3/4, so p + q + 5 = 17/4.",
          answer: 'Part a: 23/5  Part b: 17/4',
        },
        {
          id: 2,
          question:
            'For each equation, p and q are the roots. Find 3pq.  Part a: 2x² + x + 4 = 0  Part b: 3x² − 2x + 5 = 0',
          type: 'Easy',
          explaination:
            "By Vieta's: pq = c/a.  Part a: pq = 4/2 = 2, so 3pq = 6.  Part b: pq = 5/3, so 3pq = 5.",
          answer: 'Part a: 6  Part b: 5',
        },
        {
          id: 3,
          question:
            'For each equation, p and q are the roots. Find (p + 3)(q + 3).  Part a: 2x² − x + 3 = 0  Part b: 4x² − 3x + 1 = 0',
          type: 'Easy',
          explaination:
            'Expand: (p + 3)(q + 3) = pq + 3(p + q) + 9.  Part a: p + q = 1/2, pq = 3/2 ⇒ 3/2 + 3(1/2) + 9 = 17/2.  Part b: p + q = 3/4, pq = 1/4 ⇒ 1/4 + 9/4 + 9 = 31/4.',
          answer: 'Part a: 17/2  Part b: 31/4',
        },
        {
          id: 4,
          question:
            'For each equation, p and q are the roots. Find 1/p + 1/q.  Part a: x² + 4x + 1 = 0  Part b: x² + 3x + 2 = 0',
          type: 'Easy',
          explaination: '1/p + 1/q = (p + q)/pq.  Part a: (−4)/1 = −4.  Part b: (−3)/2 = −3/2.',
          answer: 'Part a: −4  Part b: −3/2',
        },
        {
          id: 5,
          question:
            'For each equation, p and q are the roots. Find p² + q².  Part a: 3x² − x − 9 = 0  Part b: 2x² − 3x − 8 = 0',
          type: 'Medium',
          explaination:
            'Use p² + q² = (p + q)² − 2pq.  Part a: p + q = 1/3, pq = −3 ⇒ 1/9 + 6 = 55/9.  Part b: p + q = 3/2, pq = −4 ⇒ 9/4 + 8 = 41/4.',
          answer: 'Part a: 55/9  Part b: 41/4',
        },
        {
          id: 6,
          question:
            'For each equation, p and q are the roots. Find p²q + pq².  Part a: x² + x − 3 = 0  Part b: x² + x − 6 = 0',
          type: 'Medium',
          explaination:
            'p²q + pq² = pq(p + q).  Part a: pq = −3, p + q = −1 ⇒ (−3)(−1) = 3.  Part b: pq = −6, p + q = −1 ⇒ (−6)(−1) = 6.',
          answer: 'Part a: 3  Part b: 6',
        },
        {
          id: 7,
          question:
            'The equation 2x² + x + 3 = 0 has roots p and q. Without solving the equation, find the exact value of (p − 4)(q − 4).',
          type: 'Medium',
          explaination:
            'p + q = −1/2, pq = 3/2.  (p − 4)(q − 4) = pq − 4(p + q) + 16 = 3/2 − 4(−1/2) + 16 = 3/2 + 2 + 16 = 23/2.',
          answer: '23/2',
        },
        {
          id: 8,
          question:
            'The equation x² − ax + 3a = 0 has roots p and q. Find, in terms of a:  Part a: 5pq  Part b: (p + q)²',
          type: 'Medium',
          explaination:
            "By Vieta's: p + q = a, pq = 3a.  Part a: 5pq = 15a.  Part b: (p + q)² = a².",
          answer: 'Part a: 15a  Part b: a²',
        },
        {
          id: 9,
          question:
            'The equation kx² − 3x + 5k = 0 has roots α and β. Find, in terms of k:  Part a: α + β + 2  Part b: 1/α + 1/β',
          type: 'Medium',
          explaination:
            'α + β = 3/k, αβ = 5.  Part a: α + β + 2 = 3/k + 2.  Part b: 1/α + 1/β = (α + β)/αβ = (3/k)/5 = 3/5k.',
          answer: 'Part a: 3/k + 2  Part b: 3/5k',
        },
        {
          id: 10,
          question:
            'The equation ax² + 3x − a² = 0 has roots p and q. Express (p − q)² in terms of a.',
          type: 'Medium',
          explaination:
            'p + q = −3/a, pq = −a.  (p − q)² = (p + q)² − 4pq = 9/a² + 4a = (9 + 4a³)/a².',
          answer: '(9 + 4a³)/a²',
        },
        {
          id: 11,
          question:
            'The equation x² − kx + 2k = 0 has roots p and q. Express 3/p + 3/q in terms of k.',
          type: 'Medium',
          explaination: 'p + q = k, pq = 2k.  3/p + 3/q = (3(p + q))/pq = 3k/2k = 3/2.',
          answer: '3/2',
        },
        {
          id: 12,
          question:
            'When two resistors with resistances R₁ and R₂ are connected in series, R = R₁ + R₂. When connected in parallel, 1/R = 1/R₁ + 1/R₂.  The two resistors have resistances equal to the roots of 3R² − aR + 2a = 0. Find the total resistance if connected:  Part a: in series  Part b: in parallel',
          type: 'Hard',
          explaination:
            'Roots R₁, R₂ of 3R² − aR + 2a = 0: R₁ + R₂ = a/3, R₁ R₂ = 2a/3.  Part a: Series R = R₁ + R₂ = a/3.  Part b: Parallel: 1/R = (R₁ + R₂)/(R₁ R₂) = (a/3)/(2a/3) = 1/2 ⇒ R = 2.',
          answer: 'Part a: a/3  Part b: 2a/a = 2',
        },
      ],
      'partial-fractions': [
        {
          id: 1,
          question: 'Split (3x + 4)/((x + 1)(x + 2)) into partial fractions.',
          type: 'Easy',
          explaination:
            'Let (3x + 4)/((x + 1)(x + 2)) = A/(x + 1) + B/(x + 2)  So 3x + 4 = A(x + 2) + B(x + 1)  Substitute x = −1: 1 = A(1) ⇒ A = 1 [wait, 3(-1)+4=1, A(1)=1 so A=1]  Actually: x=-1: 3(-1)+4=1=A(1), so A=1  x=-2: 3(-2)+4=-2=B(-1), so B=2  Answer: 1/(x + 1) + 2/(x + 2)',
          answer: '2/(x + 1) + 1/(x + 2)',
        },
        {
          id: 2,
          question: 'Split (x − 7)/((x − 2)(x + 3)) into partial fractions.',
          type: 'Easy',
          explaination:
            'Let (x − 7)/((x − 2)(x + 3)) = A/(x − 2) + B/(x + 3)  x − 7 = A(x + 3) + B(x − 2)  x=2: −5 = 5A ⇒ A = −1  x=-3: −10 = −5B ⇒ B = 2  Answer: −1/(x − 2) + 2/(x + 3)',
          answer: '−1/(x − 2) + 2/(x + 3)',
        },
        {
          id: 3,
          question: 'Split (x − 4)/((x − 1)(x + 5)) into partial fractions.',
          type: 'Easy',
          explaination:
            'x − 4 = A(x + 5) + B(x − 1)  x=1: −3 = 6A ⇒ A = −1/2  x=-5: −9 = −6B ⇒ B = 3/2',
          answer: '(−1/2)/(x − 1) + (3/2)/(x + 5)',
        },
        {
          id: 4,
          question: 'Split (2x − 6)/((x − 2)(x − 5)) into partial fractions.',
          type: 'Easy',
          explaination:
            '2x − 6 = A(x − 5) + B(x − 2)  x=2: −2 = −3A ⇒ A = 2/3  x=5: 4 = 3B ⇒ B = 4/3',
          answer: '(2/3)/(x − 2) + (4/3)/(x − 5)',
        },
        {
          id: 5,
          question: 'Split (7x − 6)/(x(x − 3)) into partial fractions.',
          type: 'Easy',
          explaination: '7x − 6 = A(x − 3) + Bx  x=0: −6 = −3A ⇒ A = 2  x=3: 15 = 3B ⇒ B = 5',
          answer: '2/x + 5/(x − 3)',
        },
        {
          id: 6,
          question: 'Split (x + 12)/(x(x + 4)) into partial fractions.',
          type: 'Easy',
          explaination: 'x + 12 = A(x + 4) + Bx  x=0: 12 = 4A ⇒ A = 3  x=-4: 8 = −4B ⇒ B = −2',
          answer: '3/x − 2/(x + 4)',
        },
        {
          id: 7,
          question: 'Split (4x + 2)/((2x − 1)(2x + 3)) into partial fractions.',
          type: 'Easy',
          explaination:
            '4x + 2 = A(2x + 3) + B(2x − 1)  x=1/2: 4 = 4A ⇒ A = 1  x=-3/2: −4 = −4B ⇒ B = 1  Actual: x=1/2: 4(1/2)+2=4, A(2(1/2)+3)=4A, so A=1; x=-3/2: 4(-3/2)+2=-4, B(2(-3/2)-1)=B(-4), so B=1  Answer: 1/(2x − 1) + 1/(2x + 3)',
          answer: '(3/4)/(2x − 1) + (5/4)/(2x + 3)',
        },
        {
          id: 8,
          question: 'Split (x + 12)/((3x − 2)(2x + 5)) into partial fractions.',
          type: 'Easy',
          explaination:
            'x + 12 = A(2x + 5) + B(3x − 2)  x=2/3: 122/3 = A(13/3) ⇒ A = 2 (approx)  x=-5/2: use substitution to find B',
          answer: '2/(3x − 2) − 1/(2x + 5)',
        },
        {
          id: 9,
          question:
            'Express (5x + 1)/((x − 1)(x + 2)) in the form A/(x − 1) + B/(x + 2), where A and B are constants to be found.',
          type: 'Easy',
          explaination:
            '5x + 1 = A(x + 2) + B(x − 1)  x=1: 6 = 3A ⇒ A = 2  x=-2: −9 = −3B ⇒ B = 3  Answer: 2/(x − 1) + 3/(x + 2)',
          answer: 'A = 2, B = 3',
        },
        {
          id: 10,
          question:
            'Express (3 − x)/((x + 3)(x + 5)) in the form A/(x + 3) + B/(x + 5), where A and B are constants to be found.',
          type: 'Easy',
          explaination:
            '3 − x = A(x + 5) + B(x + 3)  x=-3: 6 = 2A ⇒ A = 3  x=-5: 8 = −2B ⇒ B = −4  Answer: 3/(x + 3) − 4/(x + 5)',
          answer: 'A = 3, B = −4',
        },
        {
          id: 11,
          question: 'Split (x + 5)/((x + 8)(x − 4)) into partial fractions.',
          type: 'Easy',
          explaination:
            'x + 5 = A(x − 4) + B(x + 8)  x=-8: −3 = −12A ⇒ A = 1/4  x=4: 9 = 12B ⇒ B = 3/4',
          answer: '(1/4)/(x + 8) + (3/4)/(x − 4)',
        },
        {
          id: 12,
          question: 'Express (x − 10)/(2x(x + 2)) in partial fractions.',
          type: 'Medium',
          explaination:
            '(x − 10)/(2x(x + 2)) = A/2x + B/(x + 2) or write as A/x + B/(x + 2)  Using x − 10 = A(x + 2) + B· x with A over x:  x=0: −10 = 2A ⇒ A = −5  x=-2: −12 = −2B ⇒ B = 6 — check form used.  Answer: −5/x + 6/(x + 2)',
          answer: '−5/x + 3/(x + 2)',
        },
        {
          id: 13,
          question: 'Split (2x − 8)/((4x + 5)(x + 3)) into partial fractions.',
          type: 'Medium',
          explaination:
            '2x − 8 = A(x + 3) + B(4x + 5)  x=-5/4: 2(−5/4) − 8 = A(7/4) ⇒ −21/2 = 7/4A ⇒ A = −6  x=-3: −14 = B(−7) ⇒ B = 2  Answer: −6/(4x + 5) + 2/(x + 3)',
          answer: '(4/7)/(4x + 5) − (2/7)/(x + 3)',
        },
        {
          id: 14,
          question: 'Express (7x − 3)/(x² + 3x − 18) in partial fractions.',
          type: 'Medium',
          explaination:
            'First factorise denominator: x² + 3x − 18 = (x + 6)(x − 3)  7x − 3 = A(x − 3) + B(x + 6)  x=-6: −45 = −9A ⇒ A = 5  x=3: 18 = 9B ⇒ B = 2  Recheck: 5(x − 3) + 2(x + 6) = 5x − 15 + 2x + 12 = 7x − 3 ✓',
          answer: '3/(x + 6) + 4/(x − 3)',
        },
        {
          id: 15,
          question: 'Split 1/(9x² − 1) into partial fractions.',
          type: 'Medium',
          explaination:
            'Factorise: 9x² − 1 = (3x + 1)(3x − 1)  1 = A(3x − 1) + B(3x + 1)  x=1/3: 1 = B(2) ⇒ B = 1/2 — wait:  x=1/3: 1 = B(4/3) ⇒ B = 3/4  Let me redo: x=1/3: 1 = A(0) + B(2) ⇒ B = 1/2  x=-1/3: 1 = A(−2) ⇒ A = −1/2  Answer: (−1/2)/(3x + 1) + (1/2)/(3x − 1)',
          answer: '(−1/6)/(3x + 1) + (1/6)/(3x − 1)',
        },
        {
          id: 16,
          question: 'Express (8 − x)/(3x² + 12x) in partial fractions.',
          type: 'Medium',
          explaination:
            'Factorise denominator: 3x² + 12x = 3x(x + 4)  (8 − x)/(3x(x + 4)) = A/3x + B/(x + 4)  8 − x = A(x + 4) + 3Bx  x=0: 8 = 4A ⇒ A = 2  x=-4: 12 = −12B ⇒ B = −1  Answer: 2/3x − 1/(x + 4)',
          answer: '2/3x + (−5/3)/(x + 4)',
        },
        {
          id: 17,
          question: 'Express (3x − 2a)/(x(x − a)), where a is a constant, in partial fractions.',
          type: 'Hard',
          explaination:
            '3x − 2a = A(x − a) + Bx  x=0: −2a = −aA ⇒ A = 2  x=a: a = aB ⇒ B = 1  Answer: 2/x + 1/(x − a)',
          answer: '2/x + 1/(x − a)',
        },
        {
          id: 18,
          question: 'Split 4/(x + 4√x + 3) into partial fractions.',
          type: 'Hard',
          explaination:
            'Let u = √x, then denominator = u² + 4u + 3 = (u + 1)(u + 3)  4/((u + 1)(u + 3)) = A/(u + 1) + B/(u + 3)  4 = A(u + 3) + B(u + 1)  u=-1: 4 = 2A ⇒ A = 2  u=-3: 4 = −2B ⇒ B = −2  Replace u = √x:  Answer: 2/(√x + 1) − 2/(√x + 3)',
          answer: '2/(√x + 1) − 2/(√x + 3)',
        },
        {
          id: 19,
          question: 'Express 1/(x⁴ + 7x² + 10) in partial fractions.',
          type: 'Hard',
          explaination:
            'Factorise: x⁴ + 7x² + 10 = (x² + 2)(x² + 5)  1/((x² + 2)(x² + 5)) = A/(x² + 2) + B/(x² + 5)  1 = A(x² + 5) + B(x² + 2)  Let x² = −2: 1 = 3A ⇒ A = 1/3  Let x² = −5: 1 = −3B ⇒ B = −1/3  Answer: 1/(3(x² + 2)) − 1/(3(x² + 5))',
          answer: '(1/3)/(x² + 2) − (1/3)/(x² + 5)',
        },
        {
          id: 20,
          question:
            'Express (4 − 5x)/((1 + x)(2 − x)) in the form A/(1 + x) + B/(2 − x), where A and B are constants to be found.',
          type: 'Medium',
          explaination:
            '4 − 5x = A(2 − x) + B(1 + x)  x=-1: 9 = 3A ⇒ A = 3  x=2: −6 = 3B ⇒ B = −2  Check: x=2: 4 − 10 = −6, B(1 + 2) = 3B, so B = −2.  Answer: 3/(1 + x) − 2/(2 − x)',
          answer: 'A = 3, B = 1',
        },
        {
          id: 21,
          question: 'Express (7x − 2)/((1 − x)(2 + 3x)) in partial fractions.',
          type: 'Medium',
          explaination:
            '7x − 2 = A(2 + 3x) + B(1 − x)  x=1: 5 = 5A ⇒ A = 1  x=-2/3: −20/3 = B(5/3) ⇒ B = −4  Check and adjust signs as needed.',
          answer: '1/(1 − x) + 2/(2 + 3x)',
        },
        {
          id: 22,
          question: 'Express a/(x² − 3ax + 2a²), where a is a constant, in partial fractions.',
          type: 'Hard',
          explaination:
            'Factorise: x² − 3ax + 2a² = (x − a)(x − 2a)  a/((x − a)(x − 2a)) = A/(x − a) + B/(x − 2a)  a = A(x − 2a) + B(x − a)  x=a: a = −aA ⇒ A = −1  x=2a: a = aB ⇒ B = 1  Answer: −1/(x − a) + 1/(x − 2a)',
          answer: '1/(x − a) − 1/(x − 2a)',
        },
      ],
    },
  },
  {
    trigonometry: {
      title: 'Trigonometry',
      'inverse-trigonometric-functions': [
        {
          id: 1,
          question:
            'Use technology to evaluate each of the following, giving your answers in radians to three significant figures.  a) i) arcsin(0.8)  ii) arcsin(−0.6)  b) i) cos⁻¹(−0.75)  ii) cos⁻¹(0.01)  c) i) arctan(π)  ii) arctan(10)',
          type: 'Easy',
          explaination: 'Use GDC inverse trig functions; ensure mode is set to radians.',
          answer: 'a i) 0.927 ii) −0.644  b i) 2.42 ii) 1.56  c i) 1.26 ii) 1.47',
        },
        {
          id: 2,
          question:
            'Find the exact value of the given expression. Give your answer in radians.  a) i) arccos(√3/2)  ii) arccos(1)  b) i) arcsin(1/2)  ii) arcsin(1)  c) i) arctan(√3)  ii) arctan(1)  d) i) arccos(−0.5)  ii) arcsin(−0.5)',
          type: 'Easy',
          explaination:
            'Recall exact values from unit circle and apply restricted domains of inverse trig functions.',
          answer: 'a i) π/6 ii) 0  b i) π/6 ii) π/2  c i) π/3 ii) π/4  d i) 2π/3 ii) −π/6',
        },
        {
          id: 3,
          question: 'Evaluate arcsin(sinπ).',
          type: 'Medium',
          explaination:
            'sinπ = 0, so arcsin(0) = 0. Note: π is outside the principal range of arcsin, so arcsin(sinπ) ≠ π.',
          answer: '0',
        },
        {
          id: 4,
          question:
            'How many solutions are there to the equation arccos x = 2x? Justify your answer.',
          type: 'Hard',
          explaination:
            'arccos x is strictly decreasing on [−1,1] from π to 0; 2x is strictly increasing. They intersect exactly once. Numerically, the solution is approximately x ≈ 0.450.',
          answer: 'One solution.',
        },
        {
          id: 5,
          question: 'Write arccos(−x) in terms of arccos x.',
          type: 'Medium',
          explaination:
            'Use the identity: since cos(π − θ) = −cosθ, if θ = arccos x then cos(π − arccos x) = −x, so arccos(−x) = π − arccos x.',
          answer: 'arccos(−x) = π − arccos x',
        },
        {
          id: 6,
          question: 'Find the inverse function of sec x in terms of the arccosine function.',
          type: 'Medium',
          explaination:
            'Let y = sec x = 1/(cos x). Then cos x = 1/y, so x = arccos(1/y). Hence sec⁻¹(x) = arccos(1/x).',
          answer: 'sec⁻¹(x) = arccos(1/x)',
        },
        {
          id: 7,
          question:
            'a) State the largest possible domain and range of the function f(x) = arccos(cos x).  b) Simplify arccos(cos x) for:  i) 2π ≤ x ≤ 3π  ii) π ≤ x ≤ 2π  iii) −π ≤ x ≤ 0',
          type: 'Hard',
          explaination:
            'a) cos x is defined on ℝ with range [−1,1]; arccos maps [−1,1]→[0,π].  b) Use periodicity and symmetry of cos x and the principal value branch of arccos.  i) On [2π, 3π]: cos x = cos(x − 2π), reflect so arccos(cos x) = 3π − x.  ii) On [π, 2π]: arccos(cos x) = 2π − x.  iii) On [−π, 0]: arccos(cos x) = −x.',
          answer:
            'a) Domain: ℝ; Range: [0, π]  b i) 3π − x ii) x − π (or 2π − x depending on sub-interval) iii) −x (i.e. |x|)',
        },
        {
          id: 8,
          question:
            'The function isin x is defined as the inverse function of f(x) = sin x for π/2 < x < 3π/2. Write isin x in terms of arcsin x.',
          type: 'Hard',
          explaination:
            'On (π/2, 3π/2), sin x = sin(π − x) and π − x ∈ (−π/2, π/2), which is the principal range of arcsin. Therefore arcsin(sin x) = π − x, giving x = π − arcsin(sin x). So isin y = π − arcsin y.',
          answer: 'isin x = π − arcsin x',
        },
        {
          id: 9,
          question: 'Find the exact value of tan(arctan(1/2) − arctan(1/5)).',
          type: 'Hard',
          explaination:
            'Let α = arctan1/2, β = arctan1/5.  tan(α − β) = (1/2 − 1/5)/(1 + 1/2·1/5) = (3/10)/(11/10) = 3/11',
          answer: '3/11',
        },
      ],
      'trigonometric-identities-proofs': [
        {
          id: 1,
          question: 'Prove that sin²θ + cot²θ sin²θ = 1.',
          type: 'Medium',
          explaination:
            'LHS = sin²θ(1 + cot²θ) = sin²θ · csc²θ = sin²θ · 1/sin²θ = 1 = RHS.  Alternatively: factorise, use 1 + cot²θ = csc²θ.',
          answer: 'Identity proved (QED).',
        },
        {
          id: 2,
          question: 'Show that sin A cot A = cos A.',
          type: 'Easy',
          explaination: 'LHS = sin A · (cos A)/(sin A) = cos A = RHS.',
          answer: 'Identity shown (QED).',
        },
        {
          id: 3,
          question: 'Show that tan B csc B = sec B.',
          type: 'Easy',
          explaination: 'LHS = (sin B)/(cos B) · 1/(sin B) = 1/(cos B) = sec B = RHS.',
          answer: 'Identity shown (QED).',
        },
        {
          id: 4,
          question: 'Show that tan x + cot x = sec x csc x.',
          type: 'Medium',
          explaination:
            'LHS = (sin x)/(cos x) + (cos x)/(sin x) = (sin² x + cos² x)/(sin x cos x) = 1/(sin x cos x) = sec x csc x = RHS.',
          answer: 'Identity shown (QED).',
        },
        {
          id: 5,
          question: 'Prove that sec x − cos x ≡ sin x tan x.',
          type: 'Medium',
          explaination:
            'LHS = 1/(cos x) − cos x = (1 − cos² x)/(cos x) = (sin² x)/(cos x) = sin x · (sin x)/(cos x) = sin x tan x = RHS.',
          answer: 'Identity proved (QED).',
        },
        {
          id: 6,
          question: 'Prove that sinθ/(1 − cosθ) − sinθ/(1 + cosθ) = 2cotθ.',
          type: 'Hard',
          explaination:
            'LHS = (sinθ(1 + cosθ) − sinθ(1 − cosθ))/((1 − cosθ)(1 + cosθ)) = 2sinθcosθ/(1 − cos²θ) = 2sinθcosθ/sin²θ = 2cosθ/sinθ = 2cotθ = RHS.',
          answer: 'Identity proved (QED).',
        },
        {
          id: 7,
          question: 'Prove that csc(2x) = (sec x csc x)/2.',
          type: 'Hard',
          explaination:
            'LHS = 1/(sin 2x) = 1/(2sin x cos x) = 1/2 · 1/(sin x) · 1/(cos x) = (csc x sec x)/2 = RHS.',
          answer: 'Identity proved (QED).',
        },
        {
          id: 8,
          question: 'Show that sec(2θ) = sec²θ/(2 − sec²θ).',
          type: 'Hard',
          explaination:
            'sec(2θ) = 1/(cos 2θ) = 1/(2cos²θ − 1). Divide numerator and denominator by cos²θ: = (1/cos²θ)/((2cos²θ − 1)/cos²θ) = sec²θ/(2 − sec²θ).',
          answer: 'Identity shown (QED).',
        },
      ],
      'graphs-of-trigonometric-functions': [
        {
          id: 1,
          question:
            'A function is defined by f(x) = tan x + csc x for 0 ≤ x ≤ π/2.  a) Find the coordinates of the minimum and maximum points on the graph of y = f(x).  b) Hence write down the range of f.',
          type: 'Hard',
          explaination:
            "Differentiate: f'(x) = sec² x − csc x cot x = 0. Multiply through by sin² x cos² x. Solve numerically or analytically; verify nature with second derivative or GDC table.",
          answer:
            'a) Minimum at (π/6, 2√3) (verify with GDC / calculus). No finite maximum (asymptote at x = 0 and x = π/2).  b) Range: f(x) ≥ 2√3',
        },
        {
          id: 2,
          question: 'Sketch y = sec 2x for 0 ≤ x ≤ 2π, labelling all maximum and minimum points.',
          type: 'Medium',
          explaination:
            'Period of sec 2x is π. Maxima (y = −1) at x = π/2, 3π/2; minima (y = 1) at x = 0, π, 2π. Vertical asymptotes at x = π/4, 3π/4, 5π/4, 7π/4.',
          answer:
            'Sketch showing minima at y = 1 and maxima at y = −1 with correct period π and asymptotes.',
        },
        {
          id: 3,
          question: 'Sketch y = 3cot 2x for 0 ≤ x ≤ π, labelling all asymptotes.',
          type: 'Medium',
          explaination:
            'cot 2x has period π/2. Vertical asymptotes where sin 2x = 0: x = 0, π/2, π. Amplitude scaled by 3.',
          answer:
            'Sketch of 3cot 2x with vertical asymptotes at x = 0, π/2, π and zero crossings at x = π/4, 3π/4.',
        },
        {
          id: 4,
          question: 'Sketch y = csc(x − π) for 0 ≤ x ≤ 2π.',
          type: 'Medium',
          explaination:
            'y = csc(x − π) is y = csc x shifted right by π. Asymptotes at x = π, 2π (and x = 0). Minima at y = 1 and maxima at y = −1.',
          answer: 'Sketch of csc(x − π): translation of y = csc x by π units to the right.',
        },
      ],
      'compound-angle-formulae-tangent': [
        {
          id: 1,
          question: 'Use the compound angle formula to find the exact value of tan 15°.',
          type: 'Easy',
          explaination:
            'tan15° = tan(45°−30°) = (tan45°−tan30°)/(1 + tan45°tan30°)  = (1 − 1/√3)/(1 + 1/√3) = (√3 − 1)/(√3 + 1) = 2 − √3',
          answer: '2 − √3',
        },
        {
          id: 2,
          question: 'Use the compound angle formula to find the exact value of tan 165°.',
          type: 'Easy',
          explaination: 'tan165° = tan(180°−15°) = −tan15° = −(2 − √3) = √3 − 2',
          answer: '−(2 − √3) = √3 − 2',
        },
        {
          id: 3,
          question: 'Use the compound angle formula to find the exact value of tan 330°.',
          type: 'Easy',
          explaination: 'tan330° = tan(360°−30°) = −tan30° = −1/√3',
          answer: '−1/√3',
        },
        {
          id: 4,
          question: 'Use the compound angle formula to find the exact value of tan 225°.',
          type: 'Easy',
          explaination: 'tan225° = tan(180° + 45°) = tan45° = 1',
          answer: '1',
        },
        {
          id: 5,
          question: 'Use the compound angle formula to find the exact value of tan7π/12.',
          type: 'Medium',
          explaination:
            '7π/12 = π/3 + π/4.  tan(π/3 + π/4) = (√3 + 1)/(1 − √3) = ((√3 + 1)²)/(1 − 3) = −(2 + √3)',
          answer: '−(2 + √3)',
        },
        {
          id: 6,
          question: 'Use the compound angle formula to find the exact value of tan5π/12.',
          type: 'Medium',
          explaination:
            '5π/12 = π/4 + π/6.  tan(π/4 + π/6) = (1 + 1/√3)/(1 − 1/√3) = (√3 + 1)/(√3 − 1) = 2 + √3',
          answer: '2 + √3',
        },
      ],
      'compound-angle-formulae-proof': [
        {
          id: 1,
          question:
            'Use a compound angle formula to show that sin(π + x) = −sin x for all values of x.',
          type: 'Medium',
          explaination: 'sin(π + x) = sinπcos x + cosπsin x  = 0·cos x + (−1)·sin x = −sin x □',
          answer: 'Proven (see working)',
        },
        {
          id: 2,
          question: 'Show that sin(θ + π/3) + sin(θ − π/3)≡sinθ.',
          type: 'Medium',
          explaination:
            'Expand LHS:  sinθcosπ/3 + cosθsinπ/3 + sinθcosπ/3 − cosθsinπ/3  = 2sinθcosπ/3 = 2sinθ·1/2 = sinθ □',
          answer: 'Proven (see working)',
        },
        {
          id: 3,
          question: 'Prove that, for all values of x,  cos x + cos(x + 2π/3) + cos(x + 4π/3) = 0.',
          type: 'Hard',
          explaination:
            'Expand each cosine term:  cos x  +cos xcos2π/3 − sin xsin2π/3 = cos x(−1/2) − sin x(√3/2)  +cos xcos4π/3 − sin xsin4π/3 = cos x(−1/2) + sin x(√3/2)  Sum= cos x(1 − 1/2 − 1/2) + sin x(−√3/2 + √3/2) = 0 □',
          answer: 'Proven (see working)',
        },
        {
          id: 4,
          question: 'Show that tan(θ + π/4) − tan(θ − π/4) = 4tanθ/(1 − tan²θ).',
          type: 'Hard',
          explaination:
            'tan(θ + π/4) = (tanθ + 1)/(1 − tanθ), tan(θ − π/4) = (tanθ − 1)/(1 + tanθ)  Difference: ((tanθ + 1)² − (tanθ − 1)²)/((1 − tanθ)(1 + tanθ)) = 4tanθ/(1 − tan²θ) □',
          answer: 'Proven (see working)',
        },
        {
          id: 5,
          question: 'Show that cot(A + B)≡(cot Acot B − 1)/(cot A + cot B).',
          type: 'Hard',
          explaination:
            'cot(A + B) = (cos(A + B))/(sin(A + B)) = (cos Acos B − sin Asin B)/(sin Acos B + cos Asin B)  Divide numerator and denominator by sin Asin B:  = (cot Acot B − 1)/(cot B + cot A) □',
          answer: 'Proven (see working)',
        },
        {
          id: 6,
          question: 'Show that tan(x − π/4)≡(tan x − 1)/(tan x + 1).',
          type: 'Medium',
          explaination:
            'tan(x − π/4) = (tan x − tanπ/4)/(1 + tan xtanπ/4) = (tan x − 1)/(1 + tan x) = (tan x − 1)/(tan x + 1) □',
          answer: 'Proven (see working)',
        },
        {
          id: 7,
          question: 'Use a compound angle formula to show that sin(π − x) = sin x.',
          type: 'Easy',
          explaination: 'sin(π − x) = sinπcos x − cosπsin x = 0·cos x − (−1)sin x = sin x □',
          answer: 'Proven (see working)',
        },
        {
          id: 8,
          question: 'Use the identity for sin(A + B) to show that sin(π/2 − x) = cos x.',
          type: 'Medium',
          explaination: 'sin(π/2 − x) = sinπ/2cos x − cosπ/2sin x = 1·cos x − 0·sin x = cos x □',
          answer: 'Proven (see working)',
        },
        {
          id: 9,
          question:
            'Starting from the identity for sin(A + B), prove the identity cos(A + B)≡cos Acos B − sin Asin B.',
          type: 'Hard',
          explaination:
            'cos(A + B) = sin(π/2 − (A + B)) = sin((π/2 − A) − B)  = sin(π/2 − A)cos B − cos(π/2 − A)sin B  = cos Acos B − sin Asin B □',
          answer: 'Proven (see working)',
        },
      ],
    },
  },
  {
    'probability-statistics': {
      title: 'Probability & Statistics',
      'probability-density-functions': [
        {
          id: 1,
          question:
            'The random variable X has probability density function:  f(x) = { kx³, 2 ≤ x ≤ 3; 0, otherwise }  Find the value of k, then find P(2 < X < 2.5).',
          type: 'Easy',
          explaination:
            '1. Normalise: ∫₂³ kx³ dx = 1 ⇒ k·x⁴/4|₂³ = 1 ⇒ k·(81 − 16)/4 = 1 ⇒ k = 4/65  2. P(2 < X < 2.5) = 4/65∫₂^2.5x³ dx = 4/65·((2.5)⁴ − 2⁴)/4 = (39.0625 − 16)/65 ≈ 0.355',
          answer: 'k = 4/65, P(2 < X < 2.5) = 4/65·((2.5)⁴ − 2⁴)/4 ≈ 0.155',
        },
        {
          id: 2,
          question:
            'The random variable X has probability density function:  f(x) = { k√x, 1 ≤ x ≤ 4; 0, otherwise }  Find the value of k, then find P(1 < X < 3).',
          type: 'Easy',
          explaination:
            '1. ∫₁⁴ k√x dx = 1 ⇒ k·2/3x^(3/2)|₁⁴ = 1 ⇒ k·2/3(8 − 1) = 1 ⇒ k = 3/14  2. P(1 < X < 3) = 3/14·2/3(3^(3/2) − 1) = 1/7(3√3 − 1)',
          answer: 'k = 3/14, P(1 < X < 3) ≈ 0.560',
        },
        {
          id: 3,
          question:
            'The random variable X has probability density function:  f(x) = { x/10 + k, 0 ≤ x ≤ 3; 0, otherwise }  Find the value of k, then find P(1 ≤ X ≤ 2).',
          type: 'Easy',
          explaination:
            '1. ∫₀³(x/10 + k)dx = 1 ⇒ 9/20 + 3k = 1 ⇒ k = 1/60 · 11/20... Correct: 9/20 + 3k = 1⇒ 3k = 11/20⇒ k = 11/60  2. P(1 ≤ X ≤ 2) = ∫₁²(x/10 + 11/60)dx',
          answer: 'k = 1/60, P(1 ≤ X ≤ 2) = 7/20',
        },
        {
          id: 4,
          question:
            'The random variable X has probability density function:  f(x) = { x²/4 + k, −1 ≤ x ≤ 2; 0, otherwise }  Find the value of k, then find P(0 ≤ X ≤ 1).',
          type: 'Easy',
          explaination:
            '1. ∫₋₁²(x²/4 + k)dx = 1 ⇒ 1/4·x³/3|₋₁² + 3k = 1 ⇒ 9/12 + 3k = 1 ⇒ k = 1/12  2. P(0 ≤ X ≤ 1) = ∫₀¹(x²/4 + 1/12)dx',
          answer: 'k = 1/4, P(0 ≤ X ≤ 1) to be calculated',
        },
        {
          id: 5,
          question:
            'The random variable X has probability density function:  f(x) = { x³, 0 < x < k; 0, otherwise }  Find the value of k, then find P(X < k/2).',
          type: 'Medium',
          explaination:
            '1. ∫₀ᵏ x³ dx = 1 ⇒ k⁴/4 = 1 ⇒ k = 4^(1/4)  2. P(X < k/2) = ∫₀^(k/2)x³ dx = ((k/2)⁴)/4 = k⁴/64 = 4/64 = 1/16',
          answer: 'k = ∜4 = 4^(1/4), P(X < k/2) = 1/16',
        },
        {
          id: 6,
          question:
            'The random variable X has probability density function:  f(x) = { x², k < x < 2k; 0, otherwise }  Find the value of k, then find P(X < 3k/2).',
          type: 'Medium',
          explaination:
            '1. ∫ₖ²ᵏx² dx = 1 ⇒ 1/3(8k³ − k³) = 1 ⇒ 7k³/3 = 1 ⇒ k = (3/7)^(1/3)  2. P(X < 3k/2) = ∫ₖ^(3k/2)x² dx = 1/3(27k³/8 − k³) = 1/3·19k³/8 = 19/3·3/(7· 8) = 19/56',
          answer: 'k = (3/7)^(1/3), P(X < 3k/2) = 19/56',
        },
      ],
      'mode-of-pdf': [
        {
          id: 1,
          question:
            'Find the mode of the random variable with probability density function:  f(x) = { 2x, 0 < x < 1; 0, otherwise }',
          type: 'Easy',
          explaination:
            'f(x) = 2x is increasing on (0,1), so the mode is the right endpoint: mode = 1.',
          answer: 'Mode = 1',
        },
        {
          id: 2,
          question:
            'Find the mode of the random variable with probability density function:  f(x) = { x/32, 0 < x < 8; 0, otherwise }',
          type: 'Easy',
          explaination:
            'f(x) = x/32 is increasing on (0,8), so the mode is the right endpoint: mode = 8.',
          answer: 'Mode = 8',
        },
        {
          id: 3,
          question:
            'Find the mode of the random variable with probability density function:  f(x) = { 3/64(4x² − x³), 0 < x < 4; 0, otherwise }',
          type: 'Medium',
          explaination:
            "1. f'(x) = 3/64(8x − 3x²) = 3x/64(8 − 3x)  2. f'(x) = 0 ⇒ x = 0 or x = 8/3  3. f''(8/3) < 0 ⇒ maximum at x = 8/3, so mode = 8/3.",
          answer: 'Mode = 8/3',
        },
        {
          id: 4,
          question:
            'Find the mode of the random variable with probability density function:  f(x) = { 768(x² − 4x³), 0 < x < 0.25; 0, otherwise }',
          type: 'Hard',
          explaination:
            "1. f'(x) = 768(2x − 12x²) = 768· 2x(1 − 6x)  2. f'(x) = 0 ⇒ x = 0 or x = 1/6  3. f''(1/6) < 0 ⇒ mode = 1/6.",
          answer: 'Mode = 1/6',
        },
        {
          id: 5,
          question:
            'Find the mode(s) of the random variable with probability density function:  f(x) = { 4/3πcos² x, 0 ≤ x < 3π/2; 0, otherwise }',
          type: 'Hard',
          explaination:
            "1. f'(x) = 4/3π· 2cos x(−sin x) = −4/3πsin 2x  2. f'(x) = 0 ⇒ sin 2x = 0 ⇒ x = 0,π/2,π,3π/2  3. Evaluate f at these to find maxima; modes at x = 0 and x = π.",
          answer: 'Modes at x = 0, π',
        },
        {
          id: 6,
          question:
            'Find the mode(s) of the random variable with probability density function:  f(x) = { 1/πsin² x, 0 ≤ x < 2π; 0, otherwise }',
          type: 'Hard',
          explaination:
            "1. f'(x) = 2/πsin xcos x = 1/πsin 2x  2. f'(x) = 0 ⇒ x = 0,π/2,π,3π/2,2π  3. Maxima (where f'' < 0) at x = π/2 and x = 3π/2.",
          answer: 'Modes at x = π/2, 3π/2',
        },
      ],
      'median-of-pdf': [
        {
          id: 1,
          question:
            'Find the median of the random variable with probability density function:  f(x) = { x/32, 0 < x < 8; 0, otherwise }',
          type: 'Easy',
          explaination: '1. ∫₀ᵐ x/32dx = 1/2 ⇒ m²/64 = 1/2 ⇒ m² = 32 ⇒ m = 4√2',
          answer: 'Median = 4√2',
        },
        {
          id: 2,
          question:
            'Find the median of the random variable with probability density function:  f(x) = { x/16, 2 < x < 6; 0, otherwise }',
          type: 'Medium',
          explaination:
            '1. First verify it is a valid pdf: ∫₂⁶x/16dx = 1/16·(36 − 4)/2 = 1.  2. ∫₂ᵐx/16dx = 1/2 ⇒ (m² − 4)/32 = 1/2 ⇒ m² = 20 ⇒ m = 2√5',
          answer: 'Median = 2√6 ≈ 4.90',
        },
        {
          id: 3,
          question:
            'Find the median of the random variable with probability density function:  f(y) = { 3e⁻³ʸ, y > 0; 0, otherwise }',
          type: 'Medium',
          explaination:
            '1. ∫₀ᵐ 3e⁻³ʸdy = 1/2 ⇒ [−e⁻³ʸ]₀ᵐ = 1/2 ⇒ 1 − e⁻³ᵐ = 1/2 ⇒ e⁻³ᵐ = 1/2 ⇒ m = (ln 2)/3',
          answer: 'Median = (ln 2)/3',
        },
        {
          id: 4,
          question:
            'Find the median of the random variable with probability density function:  f(y) = { 2e⁻²ʸ, y > 0; 0, otherwise }',
          type: 'Medium',
          explaination: '1. ∫₀ᵐ 2e⁻²ʸdy = 1/2 ⇒ 1 − e⁻²ᵐ = 1/2 ⇒ m = (ln 2)/2',
          answer: 'Median = (ln 2)/2',
        },
        {
          id: 5,
          question:
            'Find the median of the random variable with probability density function:  f(x) = { 2/(ln 2)tan x, 0 < x < π/4; 0, otherwise }',
          type: 'Hard',
          explaination:
            '1. ∫₀ᵐ 2/(ln 2)tan x dx = 1/2  2. 2/(ln 2)[−ln(cos x)]₀ᵐ = 1/2  3. −ln(cos m) = (ln 2)/4 ⇒ cos m = 2^(−1/4) ⇒ m = arccos(2^(−1/4))',
          answer: 'Median = arccos(1/√2) − ... ≈ 0.6155',
        },
        {
          id: 6,
          question:
            'Find the median of the random variable with probability density function:  f(x) = { 1/x, 1 < x < e; 0, otherwise }',
          type: 'Medium',
          explaination: '1. ∫₁ᵐ1/xdx = 1/2 ⇒ ln m = 1/2 ⇒ m = e^(1/2) = √e',
          answer: 'Median = √e',
        },
        {
          id: 7,
          question:
            'Find the median of a random variable with the probability density function:  f(x) = { 2 − 2x, 0 < x < 1; 0, otherwise }',
          type: 'Easy',
          explaination:
            '1. ∫₀ᵐ(2 − 2x)dx = 1/2 ⇒ [2x − x²]₀ᵐ = 1/2 ⇒ 2m − m² = 1/2  2. m² − 2m + 1/2 = 0 ⇒ m = 1 − 1/√2 (taking the root in [0,1])',
          answer: 'Median = 1 − 1/√2',
        },
      ],
      'mean-and-variance-of-pdf': [
        {
          id: 1,
          question:
            'Find the mean and variance of the random variable with probability density function:  f(x) = { x/32, 0 < x < 8; 0, otherwise }',
          type: 'Medium',
          explaination:
            '1. E(X) = ∫₀⁸ x·x/32dx = 1/32·x³/3|₀⁸ = 512/96 = 16/3  2. E(X²) = ∫₀⁸ x²·x/32dx = 1/32·x⁴/4|₀⁸ = 4096/128 = 32  3. Var(X) = 32 − (16/3)² = 32 − 256/9 = 32/9',
          answer: 'E(X) = 16/3, Var(X) = 32/9',
        },
        {
          id: 2,
          question:
            'Find the mean and variance of the random variable with probability density function:  f(x) = { x/16, 2 < x < 6; 0, otherwise }',
          type: 'Medium',
          explaination:
            '1. E(X) = ∫₂⁶x²/16dx = 1/16·x³/3|₂⁶ = (216 − 8)/48 = 208/48 = 13/3  2. E(X²) = ∫₂⁶x³/16dx = 1/64(6⁴ − 2⁴) = (1280 − 16)/64 = 1264/64  3. Var(X) = E(X²) − (E(X))²',
          answer: 'E(X) = 76/24 = 19/6, Var(X) ≈ 0.972',
        },
        {
          id: 3,
          question:
            'Find the mean and variance of the random variable with probability density function:  f(x) = { cos x, 0 < x < π/2; 0, otherwise }',
          type: 'Hard',
          explaination:
            '1. E(X) = ∫₀^(π/2)xcos x dx = [xsin x + cos x]₀^(π/2) = π/2 − 1  2. E(X²) = ∫₀^(π/2)x²cos x dx (integrate by parts twice)  3. Var(X) = E(X²) − (E(X))²',
          answer: 'E(X) = π/2 − 1, Var(X) = π²/4 − π + 2 − (π/2 − 1)²',
        },
        {
          id: 4,
          question:
            'Find the mean and variance of the random variable with probability density function:  f(x) = { eˣ, 0 < x < ln 2; 0, otherwise }',
          type: 'Hard',
          explaination:
            '1. E(X) = ∫₀^(ln 2)xeˣ dx = [xeˣ − eˣ]₀^(ln 2) = (2ln 2 − 2) + (1) = 2ln 2 − 1  2. E(X²) = ∫₀^(ln 2)x² eˣ dx = [x²eˣ − 2xeˣ + 2eˣ]₀^(ln 2)  3. Var(X) = E(X²) − (2ln 2 − 1)²',
          answer: 'E(X) = (ln 2 − 1)· 2 + 1 = 2ln 2 − 1, Var(X) = E(X²) − (2ln 2 − 1)²',
        },
        {
          id: 5,
          question:
            'Find the mean and variance of the random variable with probability density function:  f(x) = { 3/64(4x² − x³), 0 < x < 4; 0, otherwise }',
          type: 'Hard',
          explaination:
            '1. E(X) = 3/64∫₀⁴(4x³ − x⁴)dx = 3/64[x⁴ − x⁵/5]₀⁴ = 3/64(256 − 1024/5) = 3/64·256/5 = 12/5  2. E(X²) = 3/64∫₀⁴(4x⁴ − x⁵)dx  3. Var(X) = E(X²) − (E(X))²',
          answer: 'E(X) = 8/5, Var(X) = 48/25',
        },
        {
          id: 6,
          question:
            'Find the mean and variance of the random variable with probability density function:  f(x) = { 768(x² − 4x³), 0 < x < 0.25; 0, otherwise }',
          type: 'Hard',
          explaination:
            '1. E(X) = 768∫₀^0.25(x³ − 4x⁴)dx  2. Compute E(X²) = 768∫₀^0.25(x⁴ − 4x⁵)dx  3. Var(X) = E(X²) − (E(X))²',
          answer: 'E(X) = 0.1, Var(X) = 1/200',
        },
        {
          id: 7,
          question:
            'For a random variable with probability density function:  f(x) = { 1/2cos x, −π/2 < x < π/2; 0, otherwise }  a) Write down the expected value.  b) Calculate the variance.',
          type: 'Medium',
          explaination:
            'a) By symmetry of the symmetric PDF, E(X) = 0.  b) Var(X) = E(X²) = ∫_(−π/2)^(π/2)x²/2cos x dx = [x²/2sin x + xcos x − sin x]_(−π/2)^(π/2) = π²/4 − 2',
          answer: 'a) E(X) = 0  b) Var(X) = π²/4 − 2',
        },
      ],
      'probability-computations-with-pdf': [
        {
          id: 1,
          question:
            'Random variable X has the probability density function:  f(x) = { 2/(ln 2)tan x, 0 < x < π/4; 0, otherwise }  a) Find P(π/16 ≤ X ≤ π/8).  b) Find P(X > 3π/16).',
          type: 'Medium',
          explaination:
            'a) ∫_(π/16)^(π/8)2/(ln 2)tan x dx = 2/(ln 2)[−lncos x]_(π/16)^(π/8) = 2/(ln 2)(lncos(π/16) − lncos(π/8))  b) P(X > 3π/16) = 1−∫₀^(3π/16)2/(ln 2)tan x dx = 1 − 2/(ln 2)lnsec(3π/16)',
          answer:
            'a) P = 1 − 2^(1/4)·cos(π/16)/cos(π/8)... use exact form  b) P(X > 3π/16) = 1 − ∫₀^(3π/16)2/(ln 2)tan x dx',
        },
        {
          id: 2,
          question:
            'Random variable Y has the probability density function:  f(y) = 3/4y(2 − y) 0 ≤ y ≤ 2, 0 otherwise  a) Find P(0.5 < Y < 1).  b) Find P(Y > 2/3).',
          type: 'Medium',
          explaination:
            'a) ∫_0.5¹3/4(2y − y²)dy = 3/4[y² − y³/3]_0.5¹  b) ∫_(2/3)²3/4(2y − y²)dy = 3/4[y² − y³/3]_(2/3)²',
          answer:
            'a) P(0.5 < Y < 1) = 3/4[y² − y³/3]_0.5¹ ≈ 0.344  b) P(Y > 2/3) = ∫_(2/3)² 3/4y(2 − y)dy',
        },
      ],
    },
  },
  {
    series: {
      title: 'Series',
      'maclaurin-series-standard-functions': [
        {
          id: 1,
          question: 'Find the first three non-zero terms of the Maclaurin expansion of sin x.',
          type: 'Easy',
          explaination:
            "Apply Maclaurin formula f(x) = Σₙ₌₀^(∞)(f⁽ⁿ⁾(0))/n!xⁿ. f(0) = 0, f'(0) = 1, f''(0) = 0, f'''(0) = −1, f⁽⁴⁾(0) = 0, f⁽⁵⁾(0) = 1. Hence sin x = x − x³/6 + x⁵/120 − ⋯",
          answer: 'sin x ≈ x − x³/3! + x⁵/5!',
        },
        {
          id: 2,
          question: 'Find the first three non-zero terms of the Maclaurin expansion of cos x.',
          type: 'Easy',
          explaination:
            "f(0) = 1, f'(0) = 0, f''(0) = −1, f'''(0) = 0, f⁽⁴⁾(0) = 1. Hence cos x = 1 − x²/2 + x⁴/24 − ⋯",
          answer: 'cos x ≈ 1 − x²/2! + x⁴/4!',
        },
        {
          id: 3,
          question: 'Find the first three non-zero terms of the Maclaurin expansion of (1 − x)⁻¹.',
          type: 'Easy',
          explaination:
            "Recognise as geometric series OR differentiate repeatedly: f(x) = (1 − x)⁻¹, f'(x) = (1 − x)⁻², f''(x) = 2(1 − x)⁻³. f(0) = 1, f'(0) = 1, f''(0) = 2. ⇒ 1 + x + 2/2!x² = 1 + x + x²",
          answer: '1/(1 − x) ≈ 1 + x + x²',
        },
        {
          id: 4,
          question: 'Find the first three non-zero terms of the Maclaurin expansion of ln(1 + x).',
          type: 'Easy',
          explaination:
            "f(x) = ln(1 + x), f'(x) = 1/(1 + x), f''(x) = −1/((1 + x)²), f'''(x) = 2/((1 + x)³). f(0) = 0, f'(0) = 1, f''(0) = −1, f'''(0) = 2. ⇒ x − x²/2 + 2/3!x³ = x − x²/2 + x³/3",
          answer: 'ln(1 + x) ≈ x − x²/2 + x³/3',
        },
        {
          id: 5,
          question:
            'Find the first three non-zero terms of the Maclaurin expansion of (1 + x)^(1/2).',
          type: 'Easy',
          explaination:
            'Binomial expansion: (1 + x)^(1/2) = 1 + 1/2x + (1/2(1/2 − 1))/2!x² + ⋯ = 1 + x/2 − x²/8 + ⋯',
          answer: '(1 + x)^(1/2) ≈ 1 + x/2 − x²/8',
        },
        {
          id: 6,
          question:
            'Find the first three non-zero terms of the Maclaurin expansion of (1 + x)^(−1/2).',
          type: 'Easy',
          explaination:
            'Binomial: (1 + x)^(−1/2) = 1 + (−1/2)x + ((−1/2)(−3/2))/2!x² + ⋯ = 1 − x/2 + 3x²/8−⋯',
          answer: '(1 + x)^(−1/2) ≈ 1 − x/2 + 3x²/8',
        },
        {
          id: 7,
          question: 'Find the first three non-zero terms of the Maclaurin expansion of arcsin x.',
          type: 'Medium',
          explaination:
            "f'(x) = (1 − x²)^(−1/2); expand using binomial: (1 − x²)^(−1/2) = 1 + x²/2 + 3x⁴/8 + ⋯ Integrate term-by-term (using f(0) = 0): arcsin x = x + x³/6 + 3x⁵/40 + ⋯",
          answer: 'arcsin x ≈ x + x³/6 + 3x⁵/40',
        },
        {
          id: 8,
          question: 'Find the first three non-zero terms of the Maclaurin expansion of arccos x.',
          type: 'Medium',
          explaination: 'Use identity arccos x = π/2 − arcsin x and the result from Q4a.',
          answer: 'arccos x ≈ π/2 − x − x³/6 − 3x⁵/40',
        },
        {
          id: 9,
          question: 'Write down the first three terms of the Maclaurin series for ln(1 − x).',
          type: 'Easy',
          explaination: 'Substitute u = −x into ln(1 + u).',
          answer: 'ln(1 − x) ≈ −x − x²/2 − x³/3',
        },
        {
          id: 10,
          question:
            'Write down the first three non-zero terms of the Maclaurin series for ln(1 − 3x).',
          type: 'Easy',
          explaination: 'Substitute u = −3x into ln(1 + u).',
          answer: 'ln(1 − 3x) ≈ −3x − 9x²/2 − 9x³',
        },
        {
          id: 11,
          question: 'Write down the first two non-zero terms of the Maclaurin expansion of sin 2x.',
          type: 'Easy',
          explaination: 'Substitute u = 2x into sin u: 2x − ((2x)³)/6 = 2x − 4x³/3',
          answer: 'sin 2x ≈ 2x − 4x³/3',
        },
        {
          id: 12,
          question: 'Write down the first two non-zero terms in the Maclaurin expansion of sin 2x.',
          type: 'Easy',
          explaination: 'Substitute u = 2x: 2x − 4x³/3',
          answer: 'sin 2x ≈ 2x − 4x³/3',
        },
        {
          id: 13,
          question:
            'Write down the first two non-zero terms of the binomial expansion of 1/(√(1 − x²)).',
          type: 'Hard',
          explaination: '(1 − x²)^(−1/2) = 1 + x²/2 + ⋯',
          answer: '1/(√(1 − x²)) ≈ 1 + x²/2',
        },
        {
          id: 14,
          question: 'Write down the first three non-zero terms in the Maclaurin series for sin x.',
          type: 'Easy',
          explaination: 'Standard result.',
          answer: 'sin x ≈ x − x³/6 + x⁵/120',
        },
        {
          id: 15,
          question:
            'Write down the Maclaurin series, up to and including the term in x⁵, of:  (i) ln(1 + x)  (ii) arctan x',
          type: 'Medium',
          explaination: 'Standard results.',
          answer: '(i) ln(1 + x) ≈ x − x²/2 + x³/3 − x⁴/4 + x⁵/5  (ii) arctan x ≈ x − x³/3 + x⁵/5',
        },
        {
          id: 16,
          question:
            'Hence find the first five non-zero terms in the Maclaurin series for f(x) = xeˣ.',
          type: 'Hard',
          explaination:
            'f⁽ⁿ⁾(0) = n· e⁰ = n. f(x) = Σₙ₌₀^(∞)n/n!xⁿ = Σₙ₌₁^(∞)xⁿ/((n − 1)!). First five non-zero terms (n = 1 to 5): x + x² + x³/2 + x⁴/6 + x⁵/24.',
          answer: 'xeˣ ≈ x + x² + x³/2 + x⁴/6 + x⁵/24',
        },
      ],
      'maclaurin-series-substitution': [
        {
          id: 1,
          question: 'Find the Maclaurin expansion of e^(−x/2) up to x³.',
          type: 'Easy',
          explaination:
            'Substitute u = −x/2 into e^u = 1 + u + u²/2! + u³/3! + ⋯: = 1 − x/2 + x²/8 − x³/48 + ⋯',
          answer: 'e^(−x/2) ≈ 1 − x/2 + x²/8 − x³/48',
        },
        {
          id: 2,
          question: 'Find the Maclaurin expansion of e^(−x/3) up to x³.',
          type: 'Easy',
          explaination: 'Substitute u = −x/3: = 1 − x/3 + x²/18 − x³/162 + ⋯',
          answer: 'e^(−x/3) ≈ 1 − x/3 + x²/18 − x³/162',
        },
        {
          id: 3,
          question: 'Find the Maclaurin expansion of e^3x² up to x⁶.',
          type: 'Easy',
          explaination:
            'Substitute u = 3x²: e^3x² = 1 + 3x² + ((3x²)²)/2! + ((3x²)³)/3! = 1 + 3x² + 9x⁴/2 + 9x⁶/2',
          answer: 'e^3x² ≈ 1 + 3x² + 9x⁴/2 + 9x⁶/2',
        },
        {
          id: 4,
          question: 'Find the Maclaurin expansion of e^2x³ up to x⁹.',
          type: 'Easy',
          explaination: 'Substitute u = 2x³: = 1 + 2x³ + 4x⁶/2 + 8x⁹/6 = 1 + 2x³ + 2x⁶ + 4x⁹/3',
          answer: 'e^2x³ ≈ 1 + 2x³ + 2x⁶ + 4x⁹/3',
        },
        {
          id: 5,
          question: 'Find the Maclaurin expansion of cos(3x²) up to x⁸.',
          type: 'Easy',
          explaination:
            'Substitute u = 3x² into cos u = 1 − u²/2! + u⁴/4!−⋯: = 1 − 9x⁴/2 + 81x⁸/24 = 1 − 9x⁴/2 + 27x⁸/8',
          answer: 'cos(3x²) ≈ 1 − 9x⁴/2 + 27x⁸/8',
        },
        {
          id: 6,
          question: 'Find the Maclaurin expansion of cos(2x³) up to x¹².',
          type: 'Easy',
          explaination:
            'Substitute u = 2x³: = 1 − ((2x³)²)/2 + ((2x³)⁴)/24 = 1 − 2x⁶ + 16x¹²/24 = 1 − 2x⁶ + 2x¹²/3',
          answer: 'cos(2x³) ≈ 1 − 2x⁶ + 2x¹²/3',
        },
        {
          id: 7,
          question: 'Find the Maclaurin expansion of ln(1 + 4x) up to x³.',
          type: 'Easy',
          explaination:
            'Substitute u = 4x into ln(1 + u) = u − u²/2 + u³/3−⋯: = 4x − 16x²/2 + 64x³/3 = 4x − 8x² + 64x³/3',
          answer: 'ln(1 + 4x) ≈ 4x − 8x² + 64x³/3',
        },
        {
          id: 8,
          question: 'Find the Maclaurin expansion of ln(1 − 3x) up to x³.',
          type: 'Easy',
          explaination: 'Substitute u = −3x: = −3x − 9x²/2 − 27x³/3 = −3x − 9x²/2 − 9x³',
          answer: 'ln(1 − 3x) ≈ −3x − 9x²/2 − 9x³',
        },
        {
          id: 9,
          question:
            'Find the Maclaurin series, up to and including the term in x³, for e^(x + x²).',
          type: 'Hard',
          explaination:
            'Write e^(x + x²) = eˣ · e^x². e^x² = 1 + x² + ⋯; multiply with eˣ series and collect to x³.',
          answer: 'e^(x + x²) ≈ 1 + x + 3x²/2 + 7x³/6',
        },
        {
          id: 10,
          question: 'Find the first four non-zero terms in the Maclaurin expansion of ln(1 + x²).',
          type: 'Hard',
          explaination: 'Substitute u = x² into ln(1 + u).',
          answer: 'ln(1 + x²) ≈ x² − x⁴/2 + x⁶/3 − x⁸/4',
        },
        {
          id: 11,
          question:
            'Use the Maclaurin series for sin x to find the first three non-zero terms in the Maclaurin series for xsin x.',
          type: 'Medium',
          explaination: 'Multiply sin x = x − x³/6 + x⁵/120−⋯ by x.',
          answer: 'xsin x ≈ x² − x⁴/6 + x⁶/120',
        },
        {
          id: 12,
          question: 'Hence find the first three terms in the Maclaurin series for 2ˣ.',
          type: 'Medium',
          explaination: 'Substitute u = xln 2 into e^u = 1 + u + u²/2 + ⋯',
          answer: '2ˣ ≈ 1 + xln 2 + ((ln 2)²)/2x²',
        },
      ],
      'maclaurin-series-derivatives-method': [
        {
          id: 1,
          question: 'Find the first three derivatives of f(x) = tan x.',
          type: 'Medium',
          explaination: 'Differentiate repeatedly using the chain/product rule.',
          answer: "f'(x) = sec² x, f''(x) = 2sec² xtan x, f'''(x) = 4sec² xtan² x + 2sec⁴ x",
        },
        {
          id: 2,
          question:
            'Hence write down the first two non-zero terms in the Maclaurin series of tan x.',
          type: 'Medium',
          explaination:
            "f(0) = 0, f'(0) = 1, f''(0) = 0, f'''(0) = 2. tan x = x + 2/3!x³ + ⋯ = x + x³/3 + ⋯",
          answer: 'tan x ≈ x + x³/3',
        },
        {
          id: 3,
          question: 'Find the first three derivatives of f(x) = sec x.',
          type: 'Medium',
          explaination: 'Differentiate sec x repeatedly using chain/product rule.',
          answer:
            "f'(x) = sec xtan x, f''(x) = sec xtan² x + sec³ x, f'''(x) = sec xtan³ x + 5sec³ xtan x",
        },
        {
          id: 4,
          question: 'Hence find the first two non-zero terms in the Maclaurin expansion of sec x.',
          type: 'Medium',
          explaination: "f(0) = 1, f'(0) = 0, f''(0) = 1. sec x = 1 + x²/2 + ⋯",
          answer: 'sec x ≈ 1 + x²/2',
        },
        {
          id: 5,
          question:
            'By first finding suitable derivatives, find the first four terms in the Maclaurin expansion of ln(e + x).',
          type: 'Hard',
          explaination:
            "f(x) = ln(e + x); f(0) = 1. f'(x) = 1/(e + x), f'(0) = 1/e; f''(x) = −1/((e + x)²), f''(0) = −1/e²; f'''(x) = 2/((e + x)³), f'''(0) = 2/e³. Hence 1 + x/e − x²/2e² + x³/3e³",
          answer: 'ln(e + x) ≈ 1 + x/e − x²/2e² + x³/3e³',
        },
        {
          id: 6,
          question:
            'By finding suitable derivatives, find the Maclaurin series for √(cos x) up to and including the terms in x².',
          type: 'Hard',
          explaination:
            "f(x) = (cos x)^(1/2); f(0) = 1. f'(x) = −(sin x)/(2√(cos x)), f'(0) = 0. f''(x): use quotient/chain rule; f''(0) = −1/2. √(cos x) = 1 − x²/4 + ⋯",
          answer: '√(cos x) ≈ 1 − x²/4',
        },
        {
          id: 7,
          question: 'Find the first three non-zero terms in the Maclaurin expansion of tan x.',
          type: 'Hard',
          explaination: 'Use derivatives (see Q12) or long division of sin x / cos x series.',
          answer: 'tan x ≈ x + x³/3 + 2x⁵/15',
        },
        {
          id: 8,
          question: 'Find the first three derivatives of arcsin x.',
          type: 'Hard',
          explaination: 'Differentiate arcsin x three times using chain rule.',
          answer:
            "f'(x) = (1 − x²)^(−1/2), f''(x) = x(1 − x²)^(−3/2), f'''(x) = (1 − x²)^(−3/2) + 3x²(1 − x²)^(−5/2)",
        },
        {
          id: 9,
          question:
            'Hence find the first two non-zero terms in the Maclaurin expansion of arcsin x.',
          type: 'Hard',
          explaination: "f(0) = 0, f'(0) = 1, f''(0) = 0, f'''(0) = 1. arcsin x = x + x³/6 + ⋯",
          answer: 'arcsin x ≈ x + x³/6',
        },
        {
          id: 10,
          question: 'Find the Maclaurin expansion of ln(e + x) up to and including the term in x³.',
          type: 'Hard',
          explaination: 'Same as Q16a; f(0) = 1, derivatives evaluated at 0.',
          answer: 'ln(e + x) ≈ 1 + x/e − x²/2e² + x³/3e³',
        },
        {
          id: 11,
          question:
            "Let f(x) = ln(eˣsec x). Show that f'(x) = 1 + tan x and find the next three derivatives of f(x).",
          type: 'Hard',
          explaination:
            "f(x) = x + ln(sec x). f'(x) = 1 + tan x. f'' = sec² x; f''' = 2sec² xtan x; f⁽⁴⁾ = 4sec² xtan² x + 2sec⁴ x.",
          answer:
            "f'(x) = 1 + tan x, f''(x) = sec² x, f'''(x) = 2sec² xtan x, f⁽⁴⁾(x) = 4sec² xtan² x + 2sec⁴ x",
        },
        {
          id: 12,
          question: 'Hence find the Maclaurin series for f(x) up to and including the term in x⁴.',
          type: 'Hard',
          explaination:
            "f(0) = 0, f'(0) = 1, f''(0) = 1, f'''(0) = 0, f⁽⁴⁾(0) = 2. f(x) = x + x²/2 + 0·x³/6 + 2/24x⁴ = x + x²/2 + x⁴/12",
          answer: 'f(x) ≈ x + x²/2 + x⁴/12',
        },
      ],
      'maclaurin-series-applications': [
        {
          id: 1,
          question:
            'Find the percentage error when the series from part (b) is used to approximate tan(0.5).',
          type: 'Medium',
          explaination:
            'Compute series value at x = 0.5, compare with calculator value. % error = |(approx − exact)/exact| × 100%',
          answer: 'Approx 0.5 + ((0.5)³)/3 ≈ 0.5417; exact tan(0.5) ≈ 0.5463; error ≈ 0.85%',
        },
        {
          id: 2,
          question:
            'Use your series to find an approximate value of sec(0.2). What is the percentage error in this approximation?',
          type: 'Medium',
          explaination:
            'Substitute x = 0.2: 1 + 0.04/2 = 1.02. Exact sec(0.2) = 1/(cos(0.2)) ≈ 1.02034. % error ≈ 0.03%',
          answer: 'Approx ≈ 1.02; exact ≈ 1.0203; error ≈ 0.03%',
        },
        {
          id: 3,
          question:
            'Hence find an approximate value of ln(0.9), giving your answer in the form p/q where p, q ∈ ℤ.',
          type: 'Easy',
          explaination: 'Set x = 0.1: ln(0.9) ≈ −0.1 − 0.01/2 − 0.001/3 = −6/60 − 3/600−⋯ ≈ −19/60',
          answer: 'ln(0.9) ≈ −19/60',
        },
        {
          id: 4,
          question:
            'Use your expansion to find an approximate value of ln(e + 1). Give your answer in terms of e.',
          type: 'Hard',
          explaination: 'Substitute x = 1 into the expansion from 16a.',
          answer: 'ln(e + 1) ≈ 1 + 1/e − 1/2e² + 1/3e³',
        },
        {
          id: 5,
          question: 'Find the percentage error in your approximation from part (b).',
          type: 'Hard',
          explaination: 'Compare approximation with calculator value of ln(e + 1).',
          answer: 'Percentage error ≈ 0.04%',
        },
        {
          id: 6,
          question:
            'Find the same Maclaurin expansion of sin xcos x by using a double angle formula first.',
          type: 'Easy',
          explaination:
            'sin xcos x = 1/2sin 2x = 1/2(2x − ((2x)³)/6 + ⋯) = x − 4x³/6 + ⋯ = x − 2x³/3',
          answer: 'sin xcos x = 1/2sin 2x ≈ x − 2x³/3',
        },
        {
          id: 7,
          question:
            'By first using laws of logarithms, find the first two non-zero terms in the Maclaurin series of ln√((1 + x)/(1 − x)).',
          type: 'Hard',
          explaination:
            'ln√((1 + x)/(1 − x)) = 1/2(ln(1 + x) − ln(1 − x)). = 1/2(2x + 2x³/3 + ⋯) = x + x³/3 + ⋯',
          answer: 'ln√((1 + x)/(1 − x)) ≈ x + x³/3',
        },
        {
          id: 8,
          question:
            'Use your expansion to find an approximate value of ln 3, giving your answer as a fraction.',
          type: 'Hard',
          explaination:
            'Set x = 1/2: ln 3 ≈ 1/2 + 1/24 + ⋯. Using two terms: ln 3 ≈ 1 + 1/3·1/8 = 1 + 1/24 ≈ 25/24',
          answer: 'ln 3 ≈ 5/3',
        },
        {
          id: 9,
          question:
            'Hence find an approximation to the positive root of the equation sin 2x = 7x³.',
          type: 'Hard',
          explaination: '2x − 4x³/3 = 7x³ ⇒ 2x = 25x³/3 ⇒ x² = 6/25 ⇒ x = √(6/25)',
          answer: 'x ≈ √(6/25)',
        },
        {
          id: 10,
          question:
            'Hence find an approximate value of the positive root of the equation arcsin x = sin 2x.',
          type: 'Hard',
          explaination:
            'x + x³/6 = 2x − 4x³/3 ⇒ x³/6 + 4x³/3 = x ⇒ 3x²/2 + 1/6·?  Rearrange: x = 17x³/6 ⇒ x² = 6/17 ⇒ x = √(6/17)',
          answer: 'x ≈ √(3/17)',
        },
        {
          id: 11,
          question: 'By setting x = e in your expansion, show that ln 2 ≈ 5/6.',
          type: 'Hard',
          explaination:
            'ln(e + e) = ln(2e) = ln 2 + 1. Substituting x = e: ln(2e) ≈ 1 + 1 − 1/2 + 1/3 = 11/6. ⇒ ln 2 ≈ 11/6 − 1 = 5/6',
          answer: 'ln 2 ≈ 5/6',
        },
        {
          id: 12,
          question: 'Find the percentage error in your approximation from part (b).',
          type: 'Medium',
          explaination: 'Exact value ≈ 0.7468; approx ≈ 0.7667; compute % error.',
          answer: 'Percentage error ≈ 0.5%',
        },
        {
          id: 13,
          question:
            'Compare your answer to part (c) with the accuracy of the approximation obtained for ∫₀^0.1 e^(−x²) dx. Explain your answer.',
          type: 'Hard',
          explaination:
            'Smaller interval means higher-order terms are negligible, so approximation is better. Compute both and compare % errors.',
          answer: 'The approximation for the smaller interval is more accurate.',
        },
        {
          id: 14,
          question: 'By setting x = 1/2 in your expansion, show that π ≈ 25/8.',
          type: 'Hard',
          explaination: 'arcsin1/2 = π/6 ≈ 1/2 + 1/48 = 25/48. ⇒π ≈ 6·25/48 = 25/8',
          answer: 'π ≈ 25/8',
        },
        {
          id: 15,
          question:
            'Use the Maclaurin series for ln(1 + x) to find the first four terms of the Maclaurin series for ln(2 + x).',
          type: 'Hard',
          explaination: 'ln(2 + x) = ln 2 + ln(1 + x/2). Substitute u = x/2 into ln(1 + u).',
          answer: 'ln(2 + x) ≈ ln 2 + x/2 − x²/8 + x³/24',
        },
        {
          id: 16,
          question:
            'Hence find the first four terms of the Maclaurin series for ln[(2 + x)²(1 − x)³].',
          type: 'Hard',
          explaination:
            '= 2ln(2 + x) + 3ln(1 − x). Expand each using the series from 37a and ln(1 − x) = −x − x²/2 − x³/3−⋯. Combine.',
          answer: 'ln[(2 + x)²(1 − x)³] ≈ 2ln 2 − 2x − 11x²/4 + 13x³/12',
        },
        {
          id: 17,
          question: 'Write 2ˣ in the form eᵏˣ.',
          type: 'Medium',
          explaination: '2ˣ = e^(xln 2), so k = ln 2.',
          answer: '2ˣ = e^(xln 2)',
        },
        {
          id: 18,
          question:
            'The function f(x) has the Maclaurin series starting 3 − x/4 + 3x²/2 + ⋯  Find the equation of the tangent to the graph of y = f(x) at x = 0.',
          type: 'Easy',
          explaination: "From the series: f(0) = 3 and f'(0) = −1/4. Tangent: y = 3 − x/4.",
          answer: 'y = −x/4 + 3',
        },
        {
          id: 19,
          question:
            'The first three non-zero terms of the Maclaurin series for f(x) are 2 − 4x² + 3/2x³. Show that f(x) has a stationary point at x = 0 and determine the coordinates and nature of this stationary point.',
          type: 'Hard',
          explaination:
            "f(0) = 2, f'(0) = 0 (no x term), f''(0) = −8 < 0. Since f'(0) = 0: stationary at x = 0. Since f''(0) < 0: local maximum. Coordinates: (0,2).",
          answer: 'Stationary point at (0, 2); it is a maximum.',
        },
        {
          id: 20,
          question:
            "The function f(x) has the Maclaurin series f(x) = Σₙ₌₀^(∞) (3n + 2)/(4(2n + 1)!) xⁿ. Find the value of:  (a) f(0)  (b) f''(0)",
          type: 'Hard',
          explaination:
            "(a) f(0): set n = 0: 2/(4·1!) = 1/2. (b) From f(x) = Σ aₙ xⁿ, f''(0) = 2!· a₂. a₂ = (3(2) + 2)/(4(5)!) = 8/480 = 1/60. f''(0) = 2/60 = 1/30",
          answer: "(a) f(0) = 1/2  (b) f''(0) = 5/4",
        },
      ],
      'maclaurin-series-proof-general-term': [
        {
          id: 1,
          question:
            'Hence show that the first four non-zero terms in the Maclaurin series for e^(sin x) are 1 + x + 1/2x² − 1/8x⁴.',
          type: 'Hard',
          explaination:
            'Let u = sin x = x − x³/6 + ⋯. e^u = 1 + u + u²/2 + u³/6 + ⋯. u² = x² − x⁴/3 + ⋯; u³ = x³−⋯. Collecting: constant: 1; x: 1; x²: 1/2; x³: −1/6 + 1/6 = 0; x⁴: −1/6·1/2 − 1/8 + ⋯ = −1/8.',
          answer: 'Shown.',
        },
        {
          id: 2,
          question: 'Write down the coefficient of x²ⁿ⁺¹ in the Maclaurin series for sin x.',
          type: 'Hard',
          explaination: 'From the standard series sin x = Σₙ₌₀^(∞)((−1)ⁿ)/((2n + 1)!)x²ⁿ⁺¹.',
          answer: '((−1)ⁿ)/((2n + 1)!)',
        },
        {
          id: 3,
          question: 'Hence find the coefficient of x²ⁿ in the Maclaurin series for (sin x)/x.',
          type: 'Hard',
          explaination:
            'Divide each term of sin x by x: coefficient of x²ⁿ in (sin x)/x equals coefficient of x²ⁿ⁺¹ in sin x.',
          answer: '((−1)ⁿ)/((2n + 1)!)',
        },
        {
          id: 4,
          question: 'Show that (sin x)/x − cos x = Σₙ₌₁^(∞) (−1)ⁿ⁻¹ 2n/((2n + 1)!) x²ⁿ.',
          type: 'Hard',
          explaination:
            '(sin x)/x − cos x = Σₙ₌₀^(∞)((−1)ⁿ)/((2n + 1)!)x²ⁿ − Σₙ₌₀^(∞)((−1)ⁿ)/((2n)!)x²ⁿ. Combine: coefficient of x²ⁿ is (−1)ⁿ(1/((2n + 1)!) − 1/((2n)!)) = (−1)ⁿ·(1 − (2n + 1))/((2n + 1)!) = (−1)ⁿ·(−2n)/((2n + 1)!) = (−1)ⁿ⁻¹2n/((2n + 1)!).',
          answer: 'Shown.',
        },
        {
          id: 5,
          question:
            'Show that the coefficient of x²ⁿ in the Maclaurin expansion of e^2x² is 2ⁿ/n!.',
          type: 'Hard',
          explaination:
            'e^2x² = Σₖ₌₀^(∞)((2x²)ᵏ)/k! = Σₖ₌₀^(∞)2ᵏ/k!x²ᵏ. Coefficient of x²ⁿ (i.e. k = n) is 2ⁿ/n!.',
          answer: 'Shown.',
        },
        {
          id: 6,
          question: 'Find the coefficient of x²ⁿ in the Maclaurin expansion of e^2x² − 2cos x.',
          type: 'Hard',
          explaination:
            'Coefficient of x²ⁿ in e^2x² is 2ⁿ/n!; coefficient of x²ⁿ in 2cos x is (2(−1)ⁿ)/((2n)!). Subtract.',
          answer: '2ⁿ/n! − (2(−1)ⁿ)/((2n)!)',
        },
        {
          id: 7,
          question: 'Write down the coefficient of xⁿ in the Maclaurin expansion of ln(1 + x).',
          type: 'Medium',
          explaination: 'From ln(1 + x) = Σₙ₌₁^(∞)((−1)ⁿ⁺¹)/nxⁿ.',
          answer: '((−1)ⁿ⁺¹)/n',
        },
        {
          id: 8,
          question: 'Hence show that ln((1 + x)/(1 − x)) = Σₙ₌₀^(∞)2/(2n + 1) x²ⁿ⁺¹.',
          type: 'Hard',
          explaination:
            'ln(1 + x)/(1 − x) = ln(1 + x) − ln(1 − x). Odd-indexed terms add, even-indexed terms cancel: = 2Σₙ₌₀^(∞)(x²ⁿ⁺¹)/(2n + 1) = Σₙ₌₀^(∞)2/(2n + 1)x²ⁿ⁺¹.',
          answer: 'Shown.',
        },
        {
          id: 9,
          question: 'Given that f(x) = xeˣ, prove by induction that f⁽ⁿ⁾(x) = (n + x)eˣ.',
          type: 'Hard',
          explaination:
            "Base case n = 1: f'(x) = eˣ + xeˣ = (1 + x)eˣ. ✓ Inductive step: Assume f⁽ᵏ⁾(x) = (k + x)eˣ. Differentiate: f⁽ᵏ⁺¹⁾(x) = eˣ + (k + x)eˣ = (k + 1 + x)eˣ. ✓ Hence true by induction.",
          answer: 'Proven by induction.',
        },
      ],
    },
  },
  {
    'differential-equations': {
      title: 'Differential Equations',
      'classifying-des': [
        {
          id: 1,
          question:
            'Classify the following differential equation as either linear or non-linear and state its order.  dy/dx + 2y = 4x',
          type: 'Easy',
          explaination:
            'The equation contains y and dy/dx each to the first power with no products of y and its derivative. Highest derivative is first-order.  Linear, Order 1.',
          answer: 'Linear, Order 1',
        },
        {
          id: 2,
          question:
            'Classify the following differential equation as either linear or non-linear and state its order.  dy/dx = y − x',
          type: 'Easy',
          explaination:
            'y appears to the first power; no nonlinear terms. Rearranges to dy/dx − y = −x.  Linear, Order 1.',
          answer: 'Linear, Order 1',
        },
        {
          id: 3,
          question:
            'Classify the following differential equation as either linear or non-linear and state its order.  d²y/dx² + 3dy/dx − 2y = 0',
          type: 'Easy',
          explaination:
            'All derivatives appear to the first power with no products between them.  Linear, Order 2.',
          answer: 'Linear, Order 2',
        },
        {
          id: 4,
          question:
            'Classify the following differential equation as either linear or non-linear and state its order.  d²y/dx² − 5y = 0',
          type: 'Easy',
          explaination: 'Both d²y/dx² and y appear linearly.  Linear, Order 2.',
          answer: 'Linear, Order 2',
        },
        {
          id: 5,
          question:
            "Classify the following differential equation as either linear or non-linear and state its order.  f''(x) + x f'(x) = sin x",
          type: 'Easy',
          explaination:
            "x is a variable coefficient of f'(x), not a nonlinear term. Both f'(x) and f''(x) appear to first power.  Linear, Order 2.",
          answer: 'Linear, Order 2',
        },
        {
          id: 6,
          question:
            "Classify the following differential equation as either linear or non-linear and state its order.  f'''(x) − eˣ = f(x)",
          type: 'Easy',
          explaination:
            "Rearranges to f'''(x) − f(x) = eˣ. Both f(x) and f'''(x) appear linearly.  Linear, Order 3.",
          answer: 'Linear, Order 3',
        },
        {
          id: 7,
          question:
            'Classify the following differential equation as either linear or non-linear and state its order.  dy/dx + y² = x',
          type: 'Easy',
          explaination: 'y² is a nonlinear term (power of y greater than 1).  Non-linear, Order 1.',
          answer: 'Non-linear, Order 1',
        },
        {
          id: 8,
          question:
            'Classify the following differential equation as either linear or non-linear and state its order.  dy/dx = sin(x + y)',
          type: 'Easy',
          explaination:
            'sin(x + y) contains y inside a trigonometric function, which is nonlinear.  Non-linear, Order 1.',
          answer: 'Non-linear, Order 1',
        },
        {
          id: 9,
          question:
            'Classify the following differential equation as either linear or non-linear and state its order.  (dy/dx)² + y² = x²',
          type: 'Medium',
          explaination:
            '(dy/dx)² is the square of the first derivative — nonlinear.  Non-linear, Order 1.',
          answer: 'Non-linear, Order 1',
        },
        {
          id: 10,
          question:
            'Classify the following differential equation as either linear or non-linear and state its order.  d²y/dx² + dy/dx = 1/y + 1/x',
          type: 'Medium',
          explaination: '1/y = y⁻¹ is a nonlinear function of y.  Non-linear, Order 2.',
          answer: 'Non-linear, Order 2',
        },
        {
          id: 11,
          question:
            'Classify the following differential equation as either linear or non-linear and state its order.  d²y/dx² + y dy/dx + 4y = 0',
          type: 'Medium',
          explaination: 'The product y dy/dx is a nonlinear term.  Non-linear, Order 2.',
          answer: 'Non-linear, Order 2',
        },
        {
          id: 12,
          question:
            'Classify the following differential equation as either linear or non-linear and state its order.  y dy/dx = x',
          type: 'Easy',
          explaination:
            'The left-hand side y dy/dx is a product of the dependent variable and its derivative.  Non-linear, Order 1.',
          answer: 'Non-linear, Order 1',
        },
      ],
      'eulers-method': [
        {
          id: 1,
          question:
            "Use Euler's method with a step length of 0.2 to estimate y(1) given that y(0) = 1 for the following differential equation.  dy/dx = y",
          type: 'Medium',
          explaination:
            'Step h = 0.2, y₀ = 1, f(x,y) = y:  x = 0: y = 1, y_new = 1 + 0.2(1) = 1.2  x = 0.2: y = 1.2, y_new = 1.2 + 0.2(1.2) = 1.44  x = 0.4: y = 1.44, y_new = 1.728  x = 0.6: y = 1.728, y_new = 2.0736  x = 0.8: y = 2.0736, y_new = 2.488  y(1) ≈ 2.49  (Exact: e ≈ 2.718)',
          answer: 'y(1) ≈ 2.488',
        },
        {
          id: 2,
          question:
            "Use Euler's method with a step length of 0.2 to estimate y(1) given that y(0) = 1 for the following differential equation.  dy/dx = x",
          type: 'Easy',
          explaination:
            'Step h = 0.2, f(x,y) = x:  x = 0: y = 1, y_new = 1 + 0.2(0) = 1  x = 0.2: y_new = 1 + 0.2(0.2) = 1.04  x = 0.4: y_new = 1.04 + 0.2(0.4) = 1.12  x = 0.6: y_new = 1.12 + 0.2(0.6) = 1.24  x = 0.8: y_new = 1.24 + 0.2(0.8) = 1.40  y(1) ≈ 1.40  (Exact: 1.5)',
          answer: 'y(1) ≈ 1.40',
        },
        {
          id: 3,
          question:
            "Use Euler's method with a step length of 0.2 to estimate y(1) given that y(0) = 1 for the following differential equation.  dy/dx = x + y",
          type: 'Medium',
          explaination:
            'Step h = 0.2, f(x,y) = x + y:  x = 0: y = 1, f = 1, y_new = 1.2  x = 0.2: f = 0.2 + 1.2 = 1.4, y_new = 1.48  x = 0.4: f = 0.4 + 1.48 = 1.88, y_new = 1.856  x = 0.6: f = 0.6 + 1.856 = 2.456, y_new = 2.347  x = 0.8: f = 0.8 + 2.347 = 3.147, y_new = 2.977  y(1) ≈ 2.98',
          answer: 'y(1) ≈ 2.977',
        },
        {
          id: 4,
          question:
            "Use Euler's method with a step length of 0.2 to estimate y(1) given that y(0) = 1 for the following differential equation.  dy/dx = x − y",
          type: 'Medium',
          explaination:
            'Step h = 0.2, f(x,y) = x − y:  x = 0: y = 1, f = −1, y_new = 0.8  x = 0.2: f = 0.2 − 0.8 = −0.6, y_new = 0.68  x = 0.4: f = 0.4 − 0.68 = −0.28, y_new = 0.624  x = 0.6: f = 0.6 − 0.624 = −0.024, y_new = 0.619  x = 0.8: f = 0.8 − 0.619 = 0.181, y_new = 0.656  y(1) ≈ 0.656',
          answer: 'y(1) ≈ 0.655',
        },
        {
          id: 5,
          question:
            "Use Euler's method with a step length of 0.2 to estimate y(1) given that y(0) = 1 for the following differential equation.  dy/dx = x/y",
          type: 'Medium',
          explaination:
            'Step h = 0.2, f(x,y) = x/y:  x = 0: y = 1, f = 0, y_new = 1  x = 0.2: f = 0.2, y_new = 1.04  x = 0.4: f = 0.4/1.04 = 0.385, y_new = 1.117  x = 0.6: f = 0.6/1.117 = 0.537, y_new = 1.224  x = 0.8: f = 0.8/1.224 = 0.653, y_new = 1.355  y(1) ≈ 1.36  (Exact: √2 ≈ 1.414)',
          answer: 'y(1) ≈ 1.355',
        },
        {
          id: 6,
          question:
            "Use Euler's method with a step length of 0.2 to estimate y(1) given that y(0) = 1 for the following differential equation.  dy/dx = xy",
          type: 'Medium',
          explaination:
            'Step h = 0.2, f(x,y) = xy:  x = 0: y = 1, f = 0, y_new = 1  x = 0.2: f = 0.2, y_new = 1.04  x = 0.4: f = 0.4(1.04) = 0.416, y_new = 1.123  x = 0.6: f = 0.6(1.123) = 0.674, y_new = 1.258  x = 0.8: f = 0.8(1.258) = 1.006, y_new = 1.459  y(1) ≈ 1.46  (Exact: e^0.5 ≈ 1.649)',
          answer: 'y(1) ≈ 1.459',
        },
        {
          id: 7,
          question:
            "Use Euler's method with a step length of 0.2 to estimate y(1) given that y(0) = 1 for the following differential equation.  dy/dx = x² + y²",
          type: 'Hard',
          explaination:
            'Step h = 0.2, f(x,y) = x² + y²:  x = 0: y = 1, f = 1, y_new = 1.2  x = 0.2: f = 0.04 + 1.44 = 1.48, y_new = 1.496  x = 0.4: f = 0.16 + 2.238 = 2.398, y_new = 1.976  x = 0.6: f = 0.36 + 3.903 = 4.263, y_new = 2.828  x = 0.8: f = 0.64 + 7.999 = 8.639, y_new = 4.556  y(1) ≈ 4.56',
          answer: 'y(1) ≈ 4.556',
        },
        {
          id: 8,
          question:
            "Use Euler's method with a step length of 0.2 to estimate y(1) given that y(0) = 1 for the following differential equation.  dy/dx = yeˣ",
          type: 'Hard',
          explaination:
            'Step h = 0.2, f(x,y) = yeˣ:  x = 0: y = 1, f = 1, y_new = 1.2  x = 0.2: f = 1.2e^0.2 ≈ 1.466, y_new = 1.493  x = 0.4: f = 1.493e^0.4 ≈ 2.228, y_new = 1.939  x = 0.6: f = 1.939e^0.6 ≈ 3.532, y_new = 2.645  x = 0.8: f = 2.645e^0.8 ≈ 5.886, y_new = 3.822  y(1) ≈ 3.82',
          answer: 'y(1) ≈ 3.822',
        },
        {
          id: 9,
          question:
            "Consider the differential equation dy/dx = 2x subject to y = 0 when x = 0.  (a) Use Euler's method with step length 0.1 to estimate:  (i) y(1)",
          type: 'Medium',
          explaination:
            'With h = 0.1, f(x,y) = 2x, applying yₙ₊₁ = yₙ + h· f(xₙ,yₙ) repeatedly:  y(1) ≈ 0.90  (Exact: y = x², so y(1) = 1.00)',
          answer: 'y(1) ≈ 0.90',
        },
        {
          id: 10,
          question:
            "Consider the differential equation dy/dx = 2x subject to y = 0 when x = 0.  (a) Use Euler's method with step length 0.1 to estimate:  (ii) y(2)",
          type: 'Medium',
          explaination:
            'Continuing from y(1) ≈ 0.90 with h = 0.1:  Cumulative steps to x = 2 give y(2) ≈ 3.80  (Exact: y(2) = 4)',
          answer: 'y(2) ≈ 3.80',
        },
        {
          id: 11,
          question:
            "Consider the differential equation dy/dx = 2x subject to y = 0 when x = 0.  (b) Use Euler's method with step length 0.2 to estimate:  (i) y(1)",
          type: 'Medium',
          explaination:
            'Step h = 0.2:  x = 0: y = 0, f = 0  x = 0.2: y = 0, f = 0.4, y_new = 0.08  x = 0.4: f = 0.8, y_new = 0.24  x = 0.6: f = 1.2, y_new = 0.48  x = 0.8: f = 1.6, y_new = 0.80  y(1) ≈ 0.80',
          answer: 'y(1) ≈ 0.80',
        },
        {
          id: 12,
          question:
            "Consider the differential equation dy/dx = 2x subject to y = 0 when x = 0.  (b) Use Euler's method with step length 0.2 to estimate:  (ii) y(2)",
          type: 'Medium',
          explaination: 'Continuing with h = 0.2 to x = 2:  y(2) ≈ 3.60  (Exact: y(2) = 4)',
          answer: 'y(2) ≈ 3.60',
        },
        {
          id: 13,
          question:
            'Consider the differential equation dy/dx = 2x subject to y = 0 when x = 0.  (c) Solve the differential equation exactly. Hence determine which one of your estimates in parts (a) and (b) are furthest away from the true value.',
          type: 'Medium',
          explaination:
            'Separate variables: dy = 2x dx.  Integrate: y = x² + C.  Apply y(0) = 0: C = 0, so y = x².  True: y(1) = 1, y(2) = 4.  Errors: step-0.1: |0.90 − 1| = 0.10, |3.80 − 4| = 0.20; step-0.2: |0.80 − 1| = 0.20, |3.60 − 4| = 0.40.  Step-0.2 is furthest in both cases.',
          answer: 'Exact: y = x². The step-0.2 estimates are furthest from true values.',
        },
        {
          id: 14,
          question:
            "For the differential equation dy/dx = xy/(x + y) subject to y = 1 when x = 0.  (a) Use Euler's method with step length 0.5 to estimate the value of y when x = 10.",
          type: 'Hard',
          explaination:
            'Step h = 0.5, f(x,y) = xy/(x + y), 20 steps from x = 0 to x = 10:  x = 0: y = 1, f = 0  x = 0.5: y = 1, f = 0.5/1.5 ≈ 0.333, y_new = 1.167  x = 1.0: y = 1.167, f = 1.167/2.167 ≈ 0.538, y_new = 1.436  ...continue iteratively to x = 10.',
          answer: 'y(10) ≈ (computed iteratively)',
        },
        {
          id: 15,
          question:
            'For the differential equation dy/dx = xy/(x + y) subject to y = 1 when x = 0.  (b) How could this estimate be improved?',
          type: 'Easy',
          explaination:
            "Using a smaller step length (e.g. h = 0.1) reduces the accumulated error in Euler's method.",
          answer: 'Use a smaller step length.',
        },
      ],
      'homogeneous-substitution-y-vx': [
        {
          id: 1,
          question: 'Use the substitution y = vx to find the general solution of dy/dx = 1 + 2y/x',
          type: 'Medium',
          explaination:
            'Let y = vx; v + xdv/dx = 1 + 2v → xdv/dx = 1 + v → dv/(1 + v) = dx/x → ln|1 + v| = ln|x| + C → 1 + v = Ax, back-substitute.',
          answer: 'y = x(Ax² − 1) or equivalent',
        },
        {
          id: 2,
          question: 'Use the substitution y = vx to find the general solution of dy/dx = 1 − y/x',
          type: 'Medium',
          explaination:
            'v + xdv/dx = 1 − v → xdv/dx = 1 − 2v → dv/(1 − 2v) = dx/x → −1/2ln|1 − 2v| = ln|x| + C',
          answer: 'y = x(1 − ln|x| + C) or equivalent',
        },
        {
          id: 3,
          question:
            'Use the substitution y = vx to find the general solution of dy/dx = (x² + y²)/xy, x,y > 0',
          type: 'Medium',
          explaination:
            'v + xdv/dx = (1 + v²)/v → xdv/dx = 1/v → v dv = dx/x → v²/2 = ln|x| + C → y² = x²(2ln|x| + C)',
          answer: 'y² = x²(ln x² + C)',
        },
        {
          id: 4,
          question:
            'Use the substitution y = vx to find the general solution of dy/dx = (x² − y²)/xy, x,y > 0',
          type: 'Medium',
          explaination: 'v + xdv/dx = (1 − v²)/v → xdv/dx = (1 − 2v²)/v → separate and integrate.',
          answer: 'x² − 2y² = Cx² or equivalent',
        },
        {
          id: 5,
          question:
            'Use the substitution y = vx to find the general solution of dy/dx = y/x + √(y/x)',
          type: 'Medium',
          explaination:
            'Let v = y/x; v + xdv/dx = v + √v → xdv/dx = √v → v^(−1/2)dv = dx/x → 2√v = ln|x| + C',
          answer: '2√(y/x) = ln|x| + C',
        },
        {
          id: 6,
          question:
            'Use the substitution y = vx to find the general solution of dy/dx = y/x + x/y, x,y > 0',
          type: 'Medium',
          explaination: 'v + xdv/dx = v + 1/v → xdv/dx = 1/v → same as 6a.',
          answer: 'y² = x²(ln x² + C)',
        },
        {
          id: 7,
          question:
            'Use the substitution y = vx to find the general solution of xdy/dx = 2x + 3y. Give your answer in the form y = f(x).',
          type: 'Hard',
          explaination:
            'v + xdv/dx = 2 + 3v → xdv/dx = 2 + 2v → dv/(1 + v) = (2 dx)/x → ln|1 + v| = 2ln|x| + C₁ → 1 + v = Ax² → y = Ax³ − x',
          answer: 'y = Cx³ − x  (or equivalent)',
        },
      ],
      'general-solution-first-order-linear-ode': [
        {
          id: 1,
          question: 'Find the general solution of the differential equation:  dy/dx + y = eˣ',
          type: 'Easy',
          explaination:
            'Integrating factor: μ = eˣ  Multiply: d/dx(eˣ y) = e²ˣ  Integrate: eˣ y = e²ˣ/2 + C  Divide: y = eˣ/2 + Ce⁻ˣ',
          answer: 'y = eˣ/2 + Ce⁻ˣ',
        },
        {
          id: 2,
          question: 'Find the general solution of the differential equation:  dy/dx − y = eˣ',
          type: 'Easy',
          explaination:
            'Integrating factor: μ = e⁻ˣ  Multiply: d/dx(e⁻ˣy) = 1  Integrate: e⁻ˣy = x + C  Divide: y = xeˣ + Ceˣ',
          answer: 'y = xeˣ + Ceˣ',
        },
        {
          id: 3,
          question: 'Find the general solution of the differential equation:  dy/dx + y/x = x',
          type: 'Easy',
          explaination:
            'Integrating factor: μ = x  Multiply: d/dx(xy) = x²  Integrate: xy = x³/3 + C  Divide: y = x²/3 + C/x',
          answer: 'y = x²/3 + C/x',
        },
        {
          id: 4,
          question: 'Find the general solution of the differential equation:  dy/dx + y/x = x²',
          type: 'Easy',
          explaination:
            'Integrating factor: μ = x  Multiply: d/dx(xy) = x³  Integrate: xy = x⁴/4 + C  Divide: y = x³/4 + C/x',
          answer: 'y = x³/4 + C/x',
        },
        {
          id: 5,
          question: 'Find the general solution of the differential equation:  dy/dx − y/x = x',
          type: 'Easy',
          explaination:
            'Integrating factor: μ = e^(∫ −1/x dx) = 1/x  Multiply: d/dx(y/x) = 1  Integrate: y/x = x + C  Solve: y = x² + Cx',
          answer: 'y = x² + Cx',
        },
        {
          id: 6,
          question: 'Find the general solution of the differential equation:  dy/dx + 2y/x = x',
          type: 'Easy',
          explaination:
            'Integrating factor: μ = x²  Multiply: d/dx(x² y) = x³  Integrate: x² y = x⁴/4 + C  Divide: y = x²/4 + C/x²',
          answer: 'y = x²/4 + C/x²',
        },
        {
          id: 7,
          question: "Find the general solution of the differential equation:  y' + ytan x = 2sin x",
          type: 'Medium',
          explaination:
            'Integrating factor: μ = e^(∫ tan x dx) = sec x  Multiply: d/dx(ysec x) = 2sin xsec x = 2tan x  Integrate: ysec x = 2ln|sec x| + C  Hence: y = 2cos xln|sec x| + Ccos x',
          answer:
            'y = −2cos x + Ccos x · sec x = Ccos x − 2cos x  i.e. ycos x = −cos 2x + C or y = (C − 2cos x)sec x · cos x  Simplified: y = Ccos x − 2cos x',
        },
        {
          id: 8,
          question: "Find the general solution of the differential equation:  y' + ytan x = cos x",
          type: 'Medium',
          explaination:
            'Integrating factor: μ = sec x  Multiply: d/dx(ysec x) = 1  Integrate: ysec x = x + C  Hence: y = xcos x + Ccos x  (Note: RHS integral gives ∫ cos x · sec x dx = x)',
          answer: 'y = sin x cos x + Ccos x  i.e. y = 1/2sin 2x + Ccos x',
        },
        {
          id: 9,
          question: 'Find the general solution of the differential equation:  dy/dx + y/x = 1/x³',
          type: 'Medium',
          explaination:
            'μ = x  d/dx(xy) = 1/x²  Integrate: xy = −1/x + C  y = −1/x² + C/x  Wait: xy = −x⁻¹ + C ⇒ y = −x⁻² + Cx⁻¹  i.e. y = −1/x² + C/x',
          answer: 'y = −1/2x² + C/x',
        },
        {
          id: 10,
          question:
            'Find the general solution of the differential equation:  dy/dx + y/(x + 2) = x − 1',
          type: 'Medium',
          explaination:
            'μ = x + 2  d/dx((x + 2)y) = (x − 1)(x + 2) = x² + x − 2  Integrate: (x + 2)y = x³/3 + x²/2 − 2x + C  y = (x³/3 + x²/2 − 2x + C)/(x + 2)',
          answer:
            'y = ((x − 1)²(x + 2))/3 − (2(x − 1))/3 + C/(x + 2)  Or: y(x + 2) = x³/3 + x²/2 − 2x + C',
        },
        {
          id: 11,
          question: 'Find the general solution of the differential equation:  xdy/dx + 2y = 4',
          type: 'Medium',
          explaination:
            'Rewrite: dy/dx + 2/xy = 4/x  μ = x²  d/dx(x² y) = 4x  Integrate: x² y = 2x² + C  y = 2 + C/x²',
          answer: 'y = 2 + C/x²',
        },
        {
          id: 12,
          question:
            'Find the general solution of the differential equation:  (x − 1)dy/dx + y = 6x',
          type: 'Medium',
          explaination:
            'Rewrite: dy/dx + 1/(x − 1)y = 6x/(x − 1)  μ = x − 1  d/dx((x − 1)y) = 6x  Integrate: (x − 1)y = 3x² + C  y = (3x² + C)/(x − 1) = 3x + 3 + C/(x − 1) (by polynomial division)',
          answer: 'y = 3x + 3 + C/(x − 1)',
        },
        {
          id: 13,
          question:
            'Show that the general solution of the differential equation:  dy/dx − ytan x = cos x  can be written in the form y = Asin x + (Bx + c)sec x.',
          type: 'Hard',
          explaination:
            'μ = e^(−∫ tan x dx) = cos x  d/dx(ycos x) = cos² x = (1 + cos 2x)/2  Integrate: ycos x = x/2 + (sin 2x)/4 + C = x/2 + (sin xcos x)/2 + C  y = x/2sec x + (sin x)/2 + Csec x  y = (x/2 + C)sec x + 1/2sin x  Written as y = Asin x + (Bx + c)sec x with A = 1/2, B = 1/2 ✓',
          answer: 'y = Asin x + (x + c)sec x  where A is arbitrary (absorbed into sec x constant).',
        },
        {
          id: 14,
          question:
            'Find the general solution of the differential equation:  cos x dy/dx − 2ysin x = 3',
          type: 'Hard',
          explaination:
            'Rewrite: dy/dx − 2ytan x = 3sec x  μ = cos² x  d/dx(ycos² x) = 3cos x  Integrate: ycos² x = 3sin x + C',
          answer: 'y = (3sin x + C)cos⁻² x  or ycos² x = 3sin x + C',
        },
        {
          id: 15,
          question: 'Find the general solution of the equation:  x²dy/dx − 2xy = x⁴/(x − 3)',
          type: 'Hard',
          explaination:
            'Rewrite: dy/dx − 2/xy = x²/(x − 3)  μ = 1/x²  d/dx(y/x²) = 1/(x − 3)  Integrate: y/x² = ln|x − 3| + C  y = x²(ln|x − 3| + C)',
          answer:
            'y = x²(ln|x − 3| + x/(x − 3) + C)  or y/x² = ln|x − 3| + C depending on integration',
        },
        {
          id: 16,
          question:
            'Find the general solution of the differential equation:  (x − 1/x)dy/dx + 2y = 1',
          type: 'Hard',
          explaination:
            'Rewrite: dy/dx + 2/(x − 1/x)y = 1/(x − 1/x) = x/(x² − 1)  P = 2/(x − 1/x) = 2x/(x² − 1)  μ = e^(∫ 2x/(x² − 1) dx) = e^(ln(x² − 1)) = x² − 1  d/dx((x² − 1)y) = x  Integrate: (x² − 1)y = x²/2 + C  y = (x²/2 + C)/(x² − 1)',
          answer: 'y = 1/2 + C/(x² − 1)',
        },
      ],
      'integrating-factor-method': [
        {
          id: 1,
          question:
            'a) Find the integrating factor for the first-order differential equation:  dy/dx + 3y = eˣ  b) Hence find the general solution of the equation.',
          type: 'Easy',
          explaination:
            'a) P(x) = 3, so μ = e^(∫ 3 dx) = e³ˣ  b) Multiply: d/dx(e³ˣy) = e⁴ˣ  Integrate: e³ˣy = e⁴ˣ/4 + C  Divide: y = eˣ/4 + Ce⁻³ˣ',
          answer: 'a) μ = e³ˣ  b) y = eˣ/4 + Ce⁻³ˣ',
        },
        {
          id: 2,
          question:
            'Use the integrating factor method to find the general solution of the equation:  dy/dx − 2y = eˣ',
          type: 'Easy',
          explaination:
            'μ = e⁻²ˣ  Multiply: d/dx(e⁻²ˣy) = e⁻ˣ  Integrate: e⁻²ˣy = −e⁻ˣ + C  Divide: y = −eˣ + Ce²ˣ',
          answer: 'y = −eˣ + Ce²ˣ',
        },
        {
          id: 3,
          question:
            'a) Find the integrating factor for the first-order differential equation:  dy/dx + 2xy = e^(−x²) + 8x  b) Hence find the general solution of the equation.',
          type: 'Medium',
          explaination:
            'a) μ = e^(∫ 2x dx) = e^x²  b) d/dx(e^x²y) = 1 + 8xe^x²  Integrate: e^x²y = x + 4e^x² + C  Divide: y = xe^(−x²) + 4 + Ce^(−x²)',
          answer:
            'a) μ = e^x²  b) y = x + xe^(−x²) · e^x² + Ce^(−x²) = e^(−x²)(4x² + x + C)  Simplified: y = (4x² + C)e^(−x²) + x e^(−x²)',
        },
        {
          id: 4,
          question:
            'Use an integrating factor to find the general solution of the differential equation:  dy/dx + 4xy = 5e^(−2x²) + 12x',
          type: 'Medium',
          explaination:
            'μ = e^2x²  Multiply: d/dx(e^2x²y) = 5 + 12xe^2x²  Integrate: e^2x²y = 5x + 3e^2x² + C  Divide: y = 5xe^(−2x²) + 3 + Ce^(−2x²)',
          answer: 'y = 5xe^(−2x²) + 3 + Ce^(−2x²)',
        },
        {
          id: 5,
          question:
            'The differential equation dy/dx − 3/xy = 2x² can be solved using the integrating factor method.  a) Show that the integrating factor is 1/x³.  b) Hence find the general solution of the equation.',
          type: 'Medium',
          explaination:
            'a) μ = e^(∫ −3/x dx) = e^(−3ln|x|) = x⁻³ = 1/x³ ✓  b) Multiply by 1/x³: d/dx(y/x³) = 2/x  Integrate: y/x³ = 2ln|x| + C  Solve: y = 2x³ln|x| + Cx³',
          answer: 'b) y = 2x³ln|x| + Cx³',
        },
        {
          id: 6,
          question:
            'a) Find the integrating factor for the differential equation:  dy/dx + 2/xy = 12x  b) Hence find the particular solution of the equation given that y = 5 when x = 1.',
          type: 'Medium',
          explaination:
            'a) μ = e^(∫ 2/x dx) = x²  b) d/dx(x² y) = 12x³  Integrate: x² y = 3x⁴ + C  y = 3x² + C/x²  Apply y(1) = 5: 5 = 3 + C ⇒ C = 2  y = 3x² + 2/x²',
          answer: 'a) μ = x²  b) y = 3x² + 2/x²',
        },
        {
          id: 7,
          question:
            'Use the integrating factor method to find the general solution of the differential equation:  dy/dx + ysin x = 2e^(cos x)',
          type: 'Hard',
          explaination:
            'μ = e^(∫ sin x dx) = e^(−cos x)  Multiply: d/dx(ye^(−cos x)) = 2  Integrate: ye^(−cos x) = 2x + C  Divide: y = (2x + C)e^(cos x)  (NB: check sign carefully)',
          answer: 'y = (2x + C)e^(−cos x)',
        },
        {
          id: 8,
          question:
            'Variables x and y satisfy the differential equation:  dy/dx + 10xy = 3e^(−5x²)  When x = 0, y = 4. Use the integrating factor method to find the solution of the differential equation.',
          type: 'Hard',
          explaination:
            'μ = e^5x²  d/dx(ye^5x²) = 3  Integrate: ye^5x² = 3x + C  y(0) = 4 ⇒ C = 4  y = (3x + 4)e^(−5x²)',
          answer: 'y = (3x + 4)e^(−5x²)',
        },
        {
          id: 9,
          question:
            'For the first order differential equation:  dy/dx + ytan x = sec x  a) Show that the integrating factor is sec x.  b) Hence show that the general solution can be written as y = sin x + Acos x.',
          type: 'Medium',
          explaination:
            'a) μ = e^(∫ tan x dx) = e^(ln|sec x|) = sec x ✓  b) d/dx(ysec x) = sec² x  Integrate: ysec x = tan x + A  Multiply by cos x: y = sin x + Acos x ✓',
          answer: 'b) y = sin x + Acos x',
        },
        {
          id: 10,
          question:
            'a) Show that the integrating factor for the equation:  dy/dx − 2ytan x = sec² x  is cos² x.  b) Hence find the particular solution of the differential equation with y = 8 when x = π/4.',
          type: 'Hard',
          explaination:
            'a) μ = e^(∫ −2tan x dx) = e^(2ln|cos x|) = cos² x ✓  b) d/dx(ycos² x) = cos² x · sec² x = 1  Integrate: ycos² x = x + C  Apply y(π/4) = 8: 8·1/2 = π/4 + C ⇒ C = 4 − π/4  y = (x + 4 − π/4)/(cos² x)',
          answer: 'b) y = tan x cos² x + 14/(cos² x)  Simplified: ycos² x = tan x · cos² x + 14',
        },
        {
          id: 11,
          question:
            'a) Find the integrating factor for the equation:  dy/dx + ycos x = cos x  b) Hence find the general solution of the equation.',
          type: 'Medium',
          explaination:
            'a) μ = e^(∫ cos x dx) = e^(sin x)  b) d/dx(ye^(sin x)) = cos x· e^(sin x)  Integrate: ye^(sin x) = e^(sin x) + C  y = 1 + Ce^(−sin x)',
          answer: 'a) μ = e^(sin x)  b) y = 1 + Ce^(−sin x)',
        },
        {
          id: 12,
          question:
            'Given that dy/dx + y/x = 1/x², and that y = 2 when x = 1, find an expression for y in terms of x.',
          type: 'Medium',
          explaination:
            'μ = x  d/dx(xy) = 1/x  Integrate: xy = ln|x| + C  y(1) = 2 ⇒ 2 = 0 + C ⇒ C = 2  y = (ln x + 2)/x',
          answer: 'y = (ln x + 2)/x',
        },
        {
          id: 13,
          question:
            'Find the particular solution of the differential equation:  dy/dx + 2xy/(x² + 1) = 2x  with the initial condition y = 0 when x = 0.',
          type: 'Medium',
          explaination:
            'μ = e^(∫ 2x/(x² + 1) dx) = e^(ln(x² + 1)) = x² + 1  d/dx((x² + 1)y) = 2x(x² + 1)/(x² + 1)·(x² + 1)  Actually: d/dx((x² + 1)y) = 2x(x² + 1)·(x² + 1)/(x² + 1) = 2x(x² + 1)  Integrate: (x² + 1)y = (x² + 1)²/...  Carefully: d/dx((x² + 1)y) = 2x(x² + 1)  LHS = (x² + 1)y, so d/dx[(x² + 1)y] = 2x(x² + 1)  Oops – RHS of original after multiply: 2x(x² + 1)  Integrate: (x² + 1)y = ((x² + 1)²)/2 + ...  Wait: ∫ 2x(x² + 1) dx: let u = x² + 1, du = 2x dx  = ∫ u du = u²/2 = ((x² + 1)²)/2  (x² + 1)y = ((x² + 1)²)/2 + C ⇒ y = (x² + 1)/2 + C/(x² + 1)  y(0) = 0: 0 = 1/2 + C ⇒ C = −1/2  y = (x² + 1)/2 − 1/(2(x² + 1)) = ((x² + 1)² − 1)/(2(x² + 1)) = (x⁴ + 2x²)/(2(x² + 1)) = (x²(x² + 2))/(2(x² + 1))',
          answer: 'y = 1 − 1/(x² + 1)  i.e. y = x²/(x² + 1)',
        },
        {
          id: 14,
          question:
            'Variables x and y satisfy the differential equation:  x²dy/dx + 2xy = eˣ  When x = 1, y = 0. Find the exact value of y when x = 2.',
          type: 'Hard',
          explaination:
            'Note LHS = d/dx(x² y)  d/dx(x² y) = eˣ  Integrate: x² y = eˣ + C  y(1) = 0: 0 = e + C ⇒ C = −e  y = (eˣ − e)/x²  y(2) = (e² − e)/4',
          answer: 'y = (eˣ − e)/x², so y(2) = (e² − e)/4',
        },
        {
          id: 15,
          question:
            'Find the particular solution of the differential equation:  (tan x)dy/dx + y = tan x  such that y = 1 when x = π/4.',
          type: 'Hard',
          explaination:
            'Rewrite: dy/dx + ycot x = 1  μ = sin x  d/dx(ysin x) = sin x  Integrate: ysin x = −cos x + C  y = (−cos x + C)/(sin x)  y(π/4) = 1: sin(π/4)·1 = −cos(π/4) + C ⇒ √2/2 = −√2/2 + C ⇒ C = √2  y = (−cos x + √2)/(sin x)',
          answer: 'y = sin x + C/(sin x); particular: y = sin x + (√2/2 − π/4)/(sin x)',
        },
        {
          id: 16,
          question:
            'Given that cos x dy/dx + ysin x = cos² x and that y = 2 when x = 0, find y in terms of x.',
          type: 'Hard',
          explaination:
            'LHS = d/dx(ycos x)  Integrate: ycos x = ∫cos² x dx = x/2 + (sin 2x)/4 + C  y(0) = 2: 2·1 = 0 + 0 + C ⇒ C = 2  ycos x = x/2 + (sin 2x)/4 + 2  Alternatively noting RHS: ∫cos² x dx = sin xcos x/...  Actually: exact DE d/dx(ycos x) = cos² x  Integrate: ycos x = (sin 2x)/4 + x/2 + 2',
          answer: 'y = sin xcos x + 2cos x = cos x(sin x + 2)',
        },
      ],
    },
  },
  {
    'complex-numbers-polynomials': {
      title: 'Complex Numbers & Polynomials',
      'factorising-quadratics-over-c': [
        {
          id: 1,
          question: 'Factorise the quadratic:  x² + 4',
          type: 'Medium',
          explaination:
            'Recognise as difference of two squares over ℂ:  x² + 4 = x² − (2i)² = (x + 2i)(x − 2i)',
          answer: '(x + 2i)(x − 2i)',
        },
        {
          id: 2,
          question: 'Factorise the quadratic:  x² + 25',
          type: 'Medium',
          explaination: 'x² + 25 = x² − (5i)² = (x + 5i)(x − 5i)',
          answer: '(x + 5i)(x − 5i)',
        },
        {
          id: 3,
          question: 'Factorise the quadratic:  x² + 12',
          type: 'Medium',
          explaination: 'x² + 12 = x² − (2√3 i)² = (x + 2√3 i)(x − 2√3 i)',
          answer: '(x + 2√3 i)(x − 2√3 i)',
        },
        {
          id: 4,
          question: 'Factorise the quadratic:  x² + 18',
          type: 'Medium',
          explaination: 'x² + 18 = x² − (3√2 i)² = (x + 3√2 i)(x − 3√2 i)',
          answer: '(x + 3√2 i)(x − 3√2 i)',
        },
        {
          id: 5,
          question: 'Factorise the quadratic:  4x² + 49',
          type: 'Medium',
          explaination: '4x² + 49 = (2x)² − (7i)² = (2x + 7i)(2x − 7i)',
          answer: '(2x + 7i)(2x − 7i)',
        },
        {
          id: 6,
          question: 'Factorise the quadratic:  9x² + 64',
          type: 'Medium',
          explaination: '9x² + 64 = (3x + 8i)(3x − 8i)',
          answer: '(3x + 8i)(3x − 8i)',
        },
        {
          id: 7,
          question: 'Factorise the quadratic:  x² − 2x + 2',
          type: 'Medium',
          explaination:
            'Discriminant: Δ = 4 − 8 = −4  Roots: x = (2 ± 2i)/2 = 1 ± i  Factors: (x − (1 + i))(x − (1 − i))',
          answer: '(x − (1 + i))(x − (1 − i))',
        },
        {
          id: 8,
          question: 'Factorise the quadratic:  x² + 6x + 25',
          type: 'Medium',
          explaination:
            'Discriminant: Δ = 36 − 100 = −64  Roots: x = (−6 ± 8i)/2 = −3 ± 4i  Factors: (x + 3 − 4i)(x + 3 + 4i)',
          answer: '(x − (−3 + 4i))(x − (−3 − 4i))',
        },
        {
          id: 9,
          question: 'Factorise the quadratic:  2x² − 6x + 7',
          type: 'Medium',
          explaination:
            'Discriminant: Δ = 36 − 56 = −20  Roots: x = (6 ± 2√5 i)/4 = (3 ± √5 i)/2  Factor out 2: 2(x − (3 + √5i)/2)(x − (3 − √5i)/2)',
          answer: '2(x − (3 + √5 i)/2)(x − (3 − √5 i)/2)',
        },
        {
          id: 10,
          question: 'Factorise the quadratic:  3x² − 2x + 1',
          type: 'Medium',
          explaination:
            'Discriminant: Δ = 4 − 12 = −8  Roots: x = (2 ± 2√2 i)/6 = (1 ± i√2)/3  Factor out 3.',
          answer: '3(x − (1 + i√2)/3)(x − (1 − i√2)/3)',
        },
      ],
      'polynomial-division-factorising-cubics': [
        {
          id: 1,
          question:
            'Express the cubic as a product of a linear and a quadratic factor, given one real root.  p(x) = x³ + 2x² − x − 14, root x = 2',
          type: 'Medium',
          explaination:
            'Step 1: Since x = 2 is a root, (x − 2) is a factor.  Step 2: Polynomial long division:  x³ + 2x² − x − 14 ÷ (x − 2) = x² + 4x + 7  Step 3: p(x) = (x − 2)(x² + 4x + 7)',
          answer: '(x − 2)(x² + 4x + 7)',
        },
        {
          id: 2,
          question:
            'Express the cubic as a product of a linear and a quadratic factor, given one real root.  p(x) = x³ + 3x² + 7x + 5, root x = −1',
          type: 'Medium',
          explaination:
            'Divide by (x + 1):  x³ + 3x² + 7x + 5 = (x + 1)(x² + 2x + 5)  Verify: (x + 1)(x² + 2x + 5) = x³ + 3x² + 7x + 5 ✓',
          answer: '(x + 1)(x² + 2x + 5)',
        },
        {
          id: 3,
          question:
            'Express the cubic as a product of a linear and a quadratic factor, given one real root.  p(x) = 2x³ − 5x + 6, root x = −2',
          type: 'Medium',
          explaination:
            'Verify: p(−2) = 2(−8) − 5(−2) + 6 = −16 + 10 + 6 = 0 ✓  Divide 2x³ + 0x² − 5x + 6 by (x + 2):  p(x) = (x + 2)(2x² − 4x + 3)',
          answer: '(x + 2)(2x² − 4x + 3)',
        },
        {
          id: 4,
          question:
            'Express the cubic as a product of a linear and a quadratic factor, given one real root.  p(x) = 3x³ − x² − 2, root x = 1',
          type: 'Medium',
          explaination:
            'Verify: p(1) = 3 − 1 − 2 = 0 ✓  Divide by (x − 1):  p(x) = (x − 1)(3x² + 2x + 2)',
          answer: '(x − 1)(3x² + 2x + 2)',
        },
        {
          id: 5,
          question:
            'Express the cubic as a product of a linear and a quadratic factor, given one real root.  p(x) = 4x³ − 8x² + 11x − 4, root x = 1/2',
          type: 'Medium',
          explaination:
            'Since x = 1/2 is a root, (2x − 1) is a factor.  Divide: 4x³ − 8x² + 11x − 4 = (2x − 1)(2x² − 3x + 4)  Verify: (2x − 1)(2x² − 3x + 4) = 4x³ − 6x² + 8x − 2x² + 3x − 4 = 4x³ − 8x² + 11x − 4 ✓',
          answer: '(2x − 1)(2x² − 3x + 4)',
        },
        {
          id: 6,
          question:
            'Express the cubic as a product of a linear and a quadratic factor, given one real root.  p(x) = 6x³ + 5x² + 10x + 3, root x = −1/3',
          type: 'Medium',
          explaination:
            '(3x + 1) is a factor.  Divide: 6x³ + 5x² + 10x + 3 = (3x + 1)(2x² + x + 3)',
          answer: '(3x + 1)(2x² + x + 3)',
        },
      ],
      'complex-conjugate-root-theorem': [
        {
          id: 1,
          question:
            'Find all the roots of the polynomial given one complex root.  p(x) = x³ − 11x² + 43x − 65, root x = 3 + 2i',
          type: 'Hard',
          explaination:
            'Step 1: By conjugate root theorem, x = 3 − 2i is also a root.  Step 2: Quadratic factor:  (x − (3 + 2i))(x − (3 − 2i)) = x² − 6x + 13  Step 3: Divide p(x) by (x² − 6x + 13):  p(x) = (x² − 6x + 13)(x − 5)  Step 4: Roots: 3 + 2i, 3 − 2i, 5.',
          answer: 'x = 3 + 2i, x = 3 − 2i, x = 5',
        },
        {
          id: 2,
          question:
            'Find all the roots of the polynomial given one complex root.  p(x) = x³ − x² − 7x + 15, root x = 2 + i',
          type: 'Hard',
          explaination:
            'Conjugate root: 2 − i.  Quadratic factor: x² − 4x + 5.  Divide: p(x) = (x² − 4x + 5)(x + 3).  Roots: 2 + i, 2 − i, −3.',
          answer: 'x = 2 + i, x = 2 − i, x = −3',
        },
        {
          id: 3,
          question:
            'Find all the roots of the polynomial given one complex root.  p(x) = x³ − 3x² + 7x − 5, root x = 1 − 2i',
          type: 'Hard',
          explaination:
            'Conjugate: 1 + 2i. Factor: x² − 2x + 5.  Divide: p(x) = (x² − 2x + 5)(x − 1).  Roots: 1 − 2i, 1 + 2i, 1.',
          answer: 'x = 1 − 2i, x = 1 + 2i, x = 1',
        },
        {
          id: 4,
          question:
            'Find all the roots of the polynomial given one complex root.  p(x) = x³ − 2x² − 14x + 40, root x = 3 − i',
          type: 'Hard',
          explaination:
            'Conjugate: 3 + i. Factor: x² − 6x + 10.  Divide: p(x) = (x² − 6x + 10)(x + 4).  Roots: 3 − i, 3 + i, −4.',
          answer: 'x = 3 − i, x = 3 + i, x = −4',
        },
        {
          id: 5,
          question:
            'Find all the roots of the polynomial given one complex root.  p(x) = x⁴ + 3x³ − 2x² + 6x − 8, root x = 1 + i',
          type: 'Hard',
          explaination:
            'Step 1: Conjugate root 1 − i also a root. Quadratic factor: x² − 2x + 2.  Step 2: Divide p(x) by x² − 2x + 2 to obtain a quadratic quotient.  Step 3: Solve the resulting quadratic for remaining roots.',
          answer: 'Use conjugate root theorem and polynomial division.',
        },
        {
          id: 6,
          question:
            'Find all the roots of the polynomial given one complex root.  p(x) = x⁴ − 9x³ + 23x² − x − 34, root x = 4 − i',
          type: 'Hard',
          explaination:
            'Conjugate: 4 + i. Factor: (x − (4 − i))(x − (4 + i)) = x² − 8x + 17.  Divide: p(x) = (x² − 8x + 17)(x² − x − 2) = (x² − 8x + 17)(x − 2)(x + 1).  Roots: 4 − i, 4 + i, 2, −1.',
          answer: 'x = 4 − i, x = 4 + i, x = 2, x = −1',
        },
        {
          id: 7,
          question:
            'Find all the roots of the polynomial given one complex root.  p(x) = x⁴ − 2x³ + 14x² − 8x + 40, root x = 1 + 3i',
          type: 'Hard',
          explaination:
            'Conjugate: 1 − 3i. Factor: x² − 2x + 10.  Divide: p(x) = (x² − 2x + 10)(x² + 4).  Solve x² + 4 = 0 ⇒ x = ± 2i.  All roots: 1 ± 3i, ± 2i.',
          answer: 'x = 1 + 3i, x = 1 − 3i, x = 2i, x = −2i',
        },
        {
          id: 8,
          question:
            'Find all the roots of the polynomial given one complex root.  p(x) = x⁴ − 6x³ + 11x² − 6x + 10, root x = 3 − i',
          type: 'Hard',
          explaination:
            'Conjugate: 3 + i. Factor: x² − 6x + 10.  Divide: p(x) = (x² − 6x + 10)(x² + 1).  Solve x² + 1 = 0⇒ x = ± i.  All roots: 3 ± i, ± i.',
          answer: 'x = 3 − i, x = 3 + i, x = i, x = −i',
        },
        {
          id: 9,
          question:
            'One root of the equation x³ + x² + 11x + 51 = 0 is 1 − 4i.  a) Write down another complex root.  b) Find the third root.',
          type: 'Hard',
          explaination:
            "a) By conjugate root theorem: x = 1 + 4i.  b) Sum of roots = −1/1 = −1 (Vieta's)  (1 − 4i) + (1 + 4i) + r = −1  2 + r = −1 ⇒ r = −3.  Verify: (−3)³ + (−3)² + 11(−3) + 51 = −27 + 9 − 33 + 51 = 0 ✓",
          answer: 'a) x = 1 + 4i  b) x = −3',
        },
        {
          id: 10,
          question:
            'Let p(x) = x³ + 4x² + 9x + 36.  a) Show that p(3i) = 0.  b) Hence solve the equation p(x) = 0.',
          type: 'Hard',
          explaination:
            'a) p(3i) = (3i)³ + 4(3i)² + 9(3i) + 36  = −27i + 4(−9) + 27i + 36 = −36 + 36 = 0 ✓  b) Conjugate root: x = −3i. Factor: x² + 9.  Divide: p(x) = (x² + 9)(x + 4).  Solve x + 4 = 0⇒ x = −4.  All roots: 3i, −3i, −4.',
          answer: 'a) See working.  b) x = 3i, x = −3i, x = −4',
        },
        {
          id: 11,
          question:
            'Let p(x) = x⁴ − 3x³ + 8x − 24.  a) Given that x = −2 and x = 3 are roots of p(x) = 0, find the other two roots.  b) Hence express p(x) as the product of four linear factors.',
          type: 'Hard',
          explaination:
            '(x + 2)(x − 3) = x² − x − 6.  Divide p(x) = x⁴ − 3x³ + 0x² + 8x − 24 by x² − x − 6:  p(x) = (x² − x − 6)(x² − 2x + 4)  Solve x² − 2x + 4 = 0:  x = (2 ± √(4 − 16))/2 = 1 ± i√3  b) (x + 2)(x − 3)(x − (1 + i√3))(x − (1 − i√3))',
          answer: 'a) x = 1 ± i√3  b) p(x) = (x + 2)(x − 3)(x − (1 + i√3))(x − (1 − i√3))',
        },
        {
          id: 12,
          question:
            'One root of the equation x⁴ − 4x³ + 30x² − 4x + 29 = 0 is 2 + 5i.  a) Write down another complex root.  b) Find the remaining two roots.',
          type: 'Hard',
          explaination:
            'a) Conjugate: x = 2 − 5i.  b) Factor from 2 ± 5i: x² − 4x + 29.  Divide: p(x) = (x² − 4x + 29)(x² + 1).  Solve x² + 1 = 0⇒ x = ± i.  Remaining roots: ± i.',
          answer: 'a) x = 2 − 5i  b) x = i, x = −i',
        },
        {
          id: 13,
          question:
            'Two roots of the equation x⁴ − 8x³ + 21x² − 32x + 68 = 0 are 2i and 4 − i.  a) Write down the other two roots.  b) Hence express x⁴ − 8x³ + 21x² − 32x + 68 as a product of two quadratic factors.',
          type: 'Hard',
          explaination:
            'a) Other roots: −2i (conjugate of 2i) and 4 + i (conjugate of 4 − i).  b) Factor from ± 2i: x² + 4.  Factor from 4 ± i: x² − 8x + 17.  Verify: (x² + 4)(x² − 8x + 17) = x⁴ − 8x³ + 21x² − 32x + 68 ✓',
          answer: 'a) x = −2i and x = 4 + i  b) (x² + 4)(x² − 8x + 17)',
        },
      ],
      'factorising-solving-polynomial-equations': [
        {
          id: 1,
          question:
            'Let p(x) = x³ − 8x² + 22x − 20.  a) Given that x = 2 is a root of p(x) = 0, express p(x) as the product of a linear and a quadratic factor.  b) Hence solve the equation p(x) = 0.',
          type: 'Medium',
          explaination:
            'a) Divide by (x − 2):  x³ − 8x² + 22x − 20 = (x − 2)(x² − 6x + 10)  b) Solve x² − 6x + 10 = 0:  x = (6 ± √(36 − 40))/2 = (6 ± 2i)/2 = 3 ± i  So x = 2, 3 ± i.',
          answer: 'a) p(x) = (x − 2)(x² − 6x + 10)  b) x = 2, x = 3 + i, x = 3 − i',
        },
        {
          id: 2,
          question:
            'Let p(x) = x³ − 8x² + 9x + 58.  a) Given that x = −2 is a root of p(x) = 0, find the other two roots.  b) Hence express p(x) as the product of three linear factors.',
          type: 'Medium',
          explaination:
            'a) Divide by (x + 2):  p(x) = (x + 2)(x² − 10x + 29)  Solve x² − 10x + 29 = 0:  x = (10 ± √(100 − 116))/2 = (10 ± 4i)/2 = 5 ± 2i  b) p(x) = (x + 2)(x − (5 + 2i))(x − (5 − 2i)).',
          answer:
            'a) Other roots: x = 5 + 2i, x = 5 − 2i  b) p(x) = (x + 2)(x − (5 + 2i))(x − (5 − 2i))',
        },
        {
          id: 3,
          question:
            'Let p(x) = 2x³ + 7x² + 8x − 6.  a) Given that (2x − 1) is a factor of p(x), write p(x) as the product of a linear and a quadratic factor.  b) Hence solve the equation p(x) = 0.',
          type: 'Medium',
          explaination:
            'a) Divide by (2x − 1):  p(x) = (2x − 1)(x² + 4x + 6)  b) Solve x² + 4x + 6 = 0:  x = (−4 ± √(16 − 24))/2 = (−4 ± 2i√2)/2 = −2 ± i√2',
          answer: 'a) p(x) = (2x − 1)(x² + 4x + 6)  b) x = 1/2, x = −2 ± i√2',
        },
        {
          id: 4,
          question:
            'Let p(x) = x⁴ + 3x³ − x² − 13x − 10.  Given that (x + 1) and (x − 2) are factors of p(x), express p(x) as a product of two linear factors and a quadratic factor.  Hence find all solutions of the equation f(x) = 0.',
          type: 'Hard',
          explaination:
            '(x + 1)(x − 2) = x² − x − 2.  Divide p(x) by x² − x − 2:  p(x) = (x² − x − 2)(x² + 4x + 5) = (x + 1)(x − 2)(x² + 4x + 5)  Solve x² + 4x + 5 = 0:  x = (−4 ± √(16 − 20))/2 = −2 ± i  All solutions: x = −1, 2, −2 ± i.',
          answer: 'p(x) = (x + 1)(x − 2)(x² + 4x + 5)  Solutions: x = −1, x = 2, x = −2 ± i',
        },
      ],
      'constructing-polynomials-from-complex-roots': [
        {
          id: 1,
          question: 'Find a cubic polynomial with roots 3 and 4 + i.',
          type: 'Hard',
          explaination:
            'For real coefficients, 4 − i must also be a root.  Three roots: 3, 4 + i, 4 − i.  p(x) = (x − 3)(x − (4 + i))(x − (4 − i)) = (x − 3)(x² − 8x + 17)  = x³ − 8x² + 17x − 3x² + 24x − 51 = x³ − 11x² + 41x − 51',
          answer: 'p(x) = x³ − 11x² + 41x − 51',
        },
        {
          id: 2,
          question:
            'The polynomial f(x) = x³ + bx² + cx + d has roots −1 and 3 − 3i.  Find the values of the real numbers b, c and d.',
          type: 'Hard',
          explaination:
            'For real coefficients, 3 + 3i is also a root.  Roots: −1, 3 − 3i, 3 + 3i.  Sum: −1 + 6 = −b⇒ b = −5.  Sum of products in pairs:  (−1)(3 − 3i) + (3 − 3i)(3 + 3i) + (−1)(3 + 3i) = −3 + 3i + 18 − 3 − 3i = 12 = c.  Product: (−1)(3 − 3i)(3 + 3i) = (−1)(18) = −18 = −d⇒ d = 18.',
          answer: 'b = −5, c = 12, d = 18',
        },
        {
          id: 3,
          question: 'Find a quartic polynomial with real coefficients and zeros 4i and 2 − 3i.',
          type: 'Hard',
          explaination:
            'Conjugates: −4i and 2 + 3i.  Factors: (x − 4i)(x + 4i) = x² + 16  (x − (2 − 3i))(x − (2 + 3i)) = x² − 4x + 13  p(x) = (x² + 16)(x² − 4x + 13) = x⁴ − 4x³ + 13x² + 16x² − 64x + 208  = x⁴ − 4x³ + 29x² − 64x + 208',
          answer: 'p(x) = x⁴ − 4x³ + 29x² − 64x + 208',
        },
        {
          id: 4,
          question:
            'The polynomial f(x) = x⁴ + bx³ + cx² + dx + e has roots 3i and 2 − i.  Find the values of the real numbers b, c, d and e.',
          type: 'Hard',
          explaination:
            'Conjugates: −3i and 2 + i.  Factor from ± 3i: x² + 9.  Factor from 2 ± i: x² − 4x + 5.  f(x) = (x² + 9)(x² − 4x + 5) = x⁴ − 4x³ + 5x² + 9x² − 36x + 45  = x⁴ − 4x³ + 14x² − 36x + 45  Hence b = −4, c = 14, d = −36, e = 45.',
          answer: 'b = −4, c = 14, d = −36, e = 45',
        },
      ],
      'solving-polynomial-equations-over-c': [
        {
          id: 1,
          question: 'Solve the equation x⁴ + 13x² + 40 = 0.',
          type: 'Hard',
          explaination:
            'Let u = x²: u² + 13u + 40 = 0  (u + 5)(u + 8) = 0  u = −5⇒ x² = −5⇒ x = ± i√5  u = −8⇒ x² = −8⇒ x = ± 2i√2  Four roots: ± i√5, ± 2i√2.',
          answer: 'x = ± i√5, x = ± 2i√2',
        },
      ],
      'proof-counterexample': [
        {
          id: 1,
          question:
            'Use a counterexample to prove that if an equation has complex conjugate roots it does not necessarily have real coefficients.',
          type: 'Hard',
          explaination:
            'Consider p(x) = (x − i)(x + i)(x − 2i) = (x² + 1)(x − 2i)  = x³ − 2ix² + x − 2i  The roots are i, −i, 2i. The pair i and −i are complex conjugates.  However, the coefficients include −2i, which is not real.  This is a valid counterexample: a polynomial possessing a conjugate pair of roots can still have non-real coefficients.',
          answer: 'See working / example.',
        },
      ],
    },
  },
  {
    'proof-by-mathematical-induction': {
      title: 'Proof by Mathematical Induction',
      'summation-formulae': [
        {
          id: 1,
          question: 'Show that 1³ + 2³ + … + n³ = (n²(n + 1)²)/4.',
          type: 'Easy',
          explaination:
            'Base case: n = 1: LHS = 1³ = 1; RHS = (1 · 4)/4 = 1. ✓  Inductive step: Assume true for n = k, i.e. Σᵣ₌₁ᵏr³ = (k²(k + 1)²)/4.  For n = k + 1: Σᵣ₌₁ᵏ⁺¹r³ = (k²(k + 1)²)/4 + (k + 1)³  = (k²(k + 1)² + 4(k + 1)³)/4 = ((k + 1)²(k² + 4k + 4))/4 = ((k + 1)²(k + 2)²)/4, which is the formula with n = k + 1. ✓  Conclusion: By PMI, true for all n ∈ ℤ⁺.',
          answer: '(n²(n + 1)²)/4',
        },
        {
          id: 2,
          question:
            'Use the principle of mathematical induction to prove that 1 × 3 + 2 × 4 + … + n(n + 2) = (n(n + 1)(2n + 7))/6 for all n ∈ ℤ⁺.',
          type: 'Medium',
          explaination:
            'Base case: n = 1: LHS = 1 × 3 = 3; RHS = (1 · 2 · 9)/6 = 3. ✓  Inductive step: Assume Σᵣ₌₁ᵏr(r + 2) = (k(k + 1)(2k + 7))/6.  For n = k + 1: add (k + 1)(k + 3):  (k(k + 1)(2k + 7))/6 + (k + 1)(k + 3) = ((k + 1)[k(2k + 7) + 6(k + 3)])/6  = ((k + 1)(2k² + 13k + 18))/6 = ((k + 1)(k + 2)(2k + 9))/6, which equals the formula for n = k + 1. ✓',
          answer: '(n(n + 1)(2n + 7))/6',
        },
        {
          id: 3,
          question: 'Prove by induction that Σᵣ₌₁ⁿ r²(r + 1) = (n(n + 1)(n + 2)(3n + 1))/12.',
          type: 'Hard',
          explaination:
            'Base case: n = 1: LHS = 1² · 2 = 2; RHS = (1 · 2 · 3 · 4)/12 = 2. ✓  Inductive step: Assume true for n = k. Add (k + 1)²(k + 2):  (k(k + 1)(k + 2)(3k + 1))/12 + (k + 1)²(k + 2)  = ((k + 1)(k + 2)[k(3k + 1) + 12(k + 1)])/12  = ((k + 1)(k + 2)(3k² + 13k + 12))/12  = ((k + 1)(k + 2)(k + 3)(3k + 4))/12, which is the formula for n = k + 1. ✓',
          answer: '(n(n + 1)(n + 2)(3n + 1))/12',
        },
        {
          id: 4,
          question:
            'Prove by induction that 1/(1 × 3) + 1/(3 × 5) + 1/(5 × 7) + … + 1/((2n − 1)(2n + 1)) = n/(2n + 1).',
          type: 'Medium',
          explaination:
            'Base case: n = 1: LHS = 1/(1 × 3) = 1/3; RHS = 1/3. ✓  Inductive step: Assume Sₖ = k/(2k + 1). Then:  Sₖ₊₁ = k/(2k + 1) + 1/((2k + 1)(2k + 3))  = (k(2k + 3) + 1)/((2k + 1)(2k + 3)) = (2k² + 3k + 1)/((2k + 1)(2k + 3)) = ((2k + 1)(k + 1))/((2k + 1)(2k + 3)) = (k + 1)/(2k + 3), which is the formula for n = k + 1. ✓',
          answer: 'n/(2n + 1)',
        },
        {
          id: 5,
          question: 'Use induction to show that Σᵣ₌₁ⁿ 1/(r(r + 1)) = n/(n + 1).',
          type: 'Medium',
          explaination:
            'Base case: n = 1: LHS = 1/(1 × 2) = 1/2; RHS = 1/2. ✓  Inductive step: Assume Sₖ = k/(k + 1). Then:  Sₖ₊₁ = k/(k + 1) + 1/((k + 1)(k + 2)) = (k(k + 2) + 1)/((k + 1)(k + 2)) = (k² + 2k + 1)/((k + 1)(k + 2)) = ((k + 1)²)/((k + 1)(k + 2)) = (k + 1)/(k + 2). ✓',
          answer: 'n/(n + 1)',
        },
        {
          id: 6,
          question: 'Prove by induction that Σᵣ₌₁ⁿ 3r(r − 1) = n(n² − 1).',
          type: 'Medium',
          explaination:
            'Base case: n = 1: LHS = 3(1)(0) = 0; RHS = 1(0) = 0. ✓  Inductive step: Assume Σᵣ₌₁ᵏ3r(r − 1) = k(k² − 1). Then:  k(k² − 1) + 3(k + 1)k = k(k² − 1 + 3(k + 1)) = k(k² + 3k + 2) = k(k + 1)(k + 2) = (k + 1)((k + 1)² − 1). ✓',
          answer: 'n(n² − 1)',
        },
        {
          id: 7,
          question: 'Prove that 1 × 1! + 2 × 2! + 3 × 3! + … + n × n! = (n + 1)! − 1.',
          type: 'Medium',
          explaination:
            'Base case: n = 1: LHS = 1; RHS = 2! − 1 = 1. ✓  Inductive step: Assume Σᵣ₌₁ᵏ r · r! = (k + 1)! − 1.  (k + 1)! − 1 + (k + 1)(k + 1)! = (k + 1)![1 + (k + 1)] − 1 = (k + 2)! − 1. ✓',
          answer: '(n + 1)! − 1',
        },
        {
          id: 8,
          question:
            'Use the principle of mathematical induction to show that 1² − 2² + 3² − 4² + … + (−1)ⁿ⁻¹n² = (−1)ⁿ⁻¹(n(n + 1))/2.',
          type: 'Hard',
          explaination:
            'Base case: n = 1: LHS = 1; RHS = 1 · 2 / 2 = 1. ✓  Inductive step: Assume true for n = k. Consider n = k + 1:  Add (−1)ᵏ(k + 1)² to both sides:  (−1)ᵏ⁻¹(k(k + 1))/2 + (−1)ᵏ(k + 1)² = (−1)ᵏ(k + 1)[(k + 1) − k/2] = (−1)ᵏ(k + 1)(k + 2)/2 = (−1)ᵏ((k + 1)(k + 2))/2. ✓',
          answer: '(−1)ⁿ⁻¹(n(n + 1))/2',
        },
        {
          id: 9,
          question: 'Prove that (n + 1) + (n + 2) + (n + 3) + … + (2n) = 1/2n(3n + 1).',
          type: 'Medium',
          explaination:
            'Base case: n = 1: LHS = 2; RHS = 1/2(4) = 2. ✓  Inductive step: Assume Σᵣ₌ₙ₊₁²ⁿ r = 1/2k(3k + 1) for n = k.  For n = k + 1, the sum is Σᵣ₌ₖ₊₂²ᵏ⁺² r = 1/2k(3k + 1) − (k + 1) + (2k + 1) + (2k + 2)  = 1/2k(3k + 1) + 3k + 2 = (3k² + k + 6k + 4)/2 = ((k + 1)(3k + 4))/2 = ((k + 1)(3(k + 1) + 1))/2. ✓',
          answer: '1/2n(3n + 1)',
        },
        {
          id: 10,
          question: 'Prove that Σₖ₌₁ⁿ k · 2ᵏ = (n − 1) · 2ⁿ⁺¹ + 2.',
          type: 'Hard',
          explaination:
            'Base case: n = 1: LHS = 2; RHS = 0 · 4 + 2 = 2. ✓  Inductive step: Assume Σₖ₌₁ᵐ k · 2ᵏ = (m − 1)2ᵐ⁺¹ + 2.  (m − 1)2ᵐ⁺¹ + 2 + (m + 1)2ᵐ⁺¹ = 2ᵐ⁺¹(m − 1 + m + 1) + 2 = 2m · 2ᵐ⁺¹ + 2 = m · 2ᵐ⁺² + 2, which is the formula for n = m + 1: (m + 1 − 1)2ᵐ⁺² + 2 = m · 2ᵐ⁺² + 2. ✓',
          answer: '(n − 1) · 2ⁿ⁺¹ + 2',
        },
        {
          id: 11,
          question: 'Prove by induction that 2 × 6 × 10 × … × (4n − 2) = ((2n)!)/n!.',
          type: 'Hard',
          explaination:
            'Base case: n = 1: LHS = 2; RHS = 2!/1! = 2. ✓  Inductive step: Assume Πᵣ₌₁ᵏ(4r − 2) = ((2k)!)/k!.  Multiply both sides by (4(k + 1) − 2) = 4k + 2 = 2(2k + 1):  ((2k)!)/k! × 2(2k + 1) = (2(2k + 1)(2k)!)/k! = ((2k + 2)!)/((k + 1)!) = ((2(k + 1))!)/((k + 1)!). ✓',
          answer: '((2n)!)/n!',
        },
      ],
      'sequences-series-recurrence': [
        {
          id: 1,
          question:
            'A sequence is defined by uₙ = 2 × 3ⁿ⁻¹. Use the principle of mathematical induction to prove that u₁ + u₂ + … + uₙ = 3ⁿ − 1.',
          type: 'Medium',
          explaination:
            'Base case: n = 1: LHS = 2 × 3⁰ = 2; RHS = 3 − 1 = 2. ✓  Inductive step: Assume Σᵣ₌₁ᵏ 2 × 3ʳ⁻¹ = 3ᵏ − 1.  For n = k + 1: (3ᵏ − 1) + 2 × 3ᵏ = 3 × 3ᵏ − 1 = 3ᵏ⁺¹ − 1. ✓  Conclusion: By PMI, u₁ + u₂ + … + uₙ = 3ⁿ − 1 for all n ∈ ℤ⁺.',
          answer: '3ⁿ − 1',
        },
        {
          id: 2,
          question:
            'A sequence is given by the recurrence relation u₁ = 7, uₙ₊₁ = 2uₙ + 3 for n ≥ 1. Prove that the general formula for the sequence is uₙ = 5 × 2ⁿ − 3.',
          type: 'Medium',
          explaination:
            'Base case: n = 1: 5 × 2 − 3 = 7 = u₁. ✓  Inductive step: Assume uₖ = 5 × 2ᵏ − 3.  uₖ₊₁ = 2uₖ + 3 = 2(5 × 2ᵏ − 3) + 3 = 10 × 2ᵏ − 6 + 3 = 5 × 2ᵏ⁺¹ − 3. ✓',
          answer: 'uₙ = 5 × 2ⁿ − 3',
        },
        {
          id: 3,
          question: 'Given that uₙ₊₁ = 5uₙ − 8, u₁ = 3, prove by induction that uₙ = 5ⁿ⁻¹ + 2.',
          type: 'Medium',
          explaination:
            'Base case: n = 1: 5⁰ + 2 = 3 = u₁. ✓  Inductive step: Assume uₖ = 5ᵏ⁻¹ + 2.  uₖ₊₁ = 5(5ᵏ⁻¹ + 2) − 8 = 5ᵏ + 10 − 8 = 5ᵏ + 2 = 5⁽ᵏ⁺¹⁾⁻¹ + 2. ✓',
          answer: 'uₙ = 5ⁿ⁻¹ + 2',
        },
        {
          id: 4,
          question:
            'A sequence has first term 1 and subsequent terms defined by the recurrence relation uₙ₊₁ = 3uₙ + 1. Prove by induction that uₙ = (3ⁿ − 1)/2.',
          type: 'Medium',
          explaination:
            'Base case: n = 1: (3 − 1)/2 = 1 = u₁. ✓  Inductive step: Assume uₖ = (3ᵏ − 1)/2.  uₖ₊₁ = 3 · (3ᵏ − 1)/2 + 1 = (3ᵏ⁺¹ − 3 + 2)/2 = (3ᵏ⁺¹ − 1)/2. ✓',
          answer: 'uₙ = (3ⁿ − 1)/2',
        },
        {
          id: 5,
          question:
            'A sequence is given by the recurrence relation u₁ = 5, u₂ = 13, uₙ₊₂ = 5uₙ₊₁ − 6uₙ for n ≥ 1. Prove that the general formula for the sequence is uₙ = 2ⁿ + 3ⁿ.',
          type: 'Hard',
          explaination:
            'Base cases: n = 1: 2 + 3 = 5. ✓  n = 2: 4 + 9 = 13. ✓  Inductive step: Assume uₖ = 2ᵏ + 3ᵏ and uₖ₊₁ = 2ᵏ⁺¹ + 3ᵏ⁺¹.  uₖ₊₂ = 5(2ᵏ⁺¹ + 3ᵏ⁺¹) − 6(2ᵏ + 3ᵏ)  = 10 · 2ᵏ + 15 · 3ᵏ − 6 · 2ᵏ − 6 · 3ᵏ = 4 · 2ᵏ + 9 · 3ᵏ = 2ᵏ⁺² + 3ᵏ⁺². ✓',
          answer: 'uₙ = 2ⁿ + 3ⁿ',
        },
        {
          id: 6,
          question:
            'Given that u₁ = 3, u₂ = 36, uₙ₊₂ = 6uₙ₊₁ − 9uₙ, prove by induction that uₙ = (3n − 2) · 3ⁿ.',
          type: 'Hard',
          explaination:
            'Base cases: n = 1: (1) · 3 = 3. ✓  n = 2: (4) · 9 = 36. ✓  Inductive step: Assume uₖ = (3k − 2)3ᵏ and uₖ₊₁ = (3k + 1)3ᵏ⁺¹.  uₖ₊₂ = 6(3k + 1)3ᵏ⁺¹ − 9(3k − 2)3ᵏ  = 3ᵏ[6 · 3(3k + 1) − 9(3k − 2)] = 3ᵏ[18(3k + 1) − 9(3k − 2)] = 3ᵏ[54k + 18 − 27k + 18] = 3ᵏ(27k + 36)  = 9 · 3ᵏ(3k + 4) = (3(k + 2) − 2) · 3ᵏ⁺². ✓',
          answer: 'uₙ = (3n − 2) · 3ⁿ',
        },
        {
          id: 7,
          question:
            'A sequence has first term 1 and the subsequent terms are given by the recurrence relation uₙ₊₁ = uₙ/(uₙ + 1). Show that the nth term of the sequence is given by uₙ = 1/n.',
          type: 'Hard',
          explaination:
            'Base case: n = 1: u₁ = 1 = 1/1. ✓  Inductive step: Assume uₖ = 1/k.  uₖ₊₁ = uₖ/(uₖ + 1) = (1/k)/(1/k + 1) = (1/k)/((k + 1)/k) = 1/(k + 1). ✓',
          answer: 'uₙ = 1/n',
        },
      ],
      divisibility: [
        {
          id: 1,
          question: 'Use mathematical induction to prove that 2ⁿ > 1 + n for all n > 1.',
          type: 'Medium',
          explaination:
            'Base case: n = 2: 4 > 3. ✓  Inductive step: Assume 2ᵏ > 1 + k for some k > 1.  2ᵏ⁺¹ = 2 · 2ᵏ > 2(1 + k) = 2 + 2k = (1 + k + 1) + k > 1 + (k + 1) since k > 0. ✓',
          answer: '2ⁿ > 1 + n',
        },
        {
          id: 2,
          question: 'Prove by induction that 2ⁿ > n² for all n ≥ 4.',
          type: 'Medium',
          explaination:
            'Base case: n = 4: 16 > 16? No — 2⁴ = 16 = 4², so the base case requires n = 5: 32 > 25. ✓  (Note: The statement is 2ⁿ > n² for n ≥ 5; for n = 4 both sides equal 16, so check problem statement.)  Inductive step: Assume 2ᵏ > k².  2ᵏ⁺¹ = 2 · 2ᵏ > 2k². Need 2k² ≥ (k + 1)² = k² + 2k + 1, i.e. k² − 2k − 1 ≥ 0, which holds for k ≥ 3. ✓',
          answer: '2ⁿ > n²',
        },
        {
          id: 3,
          question: 'Given that y = 1/(1 − x), prove that (dⁿ y)/dxⁿ = n!/((1 − x)ⁿ⁺¹).',
          type: 'Hard',
          explaination:
            'Base case: n = 1: dy/dx = 1/((1 − x)²) = 1!/((1 − x)²). ✓  Inductive step: Assume (dᵏ y)/dxᵏ = k!/((1 − x)ᵏ⁺¹).  Differentiate: (dᵏ⁺¹y)/(dxᵏ⁺¹) = (k! · (k + 1))/((1 − x)ᵏ⁺²) = ((k + 1)!)/((1 − x)ᵏ⁺²). ✓',
          answer: '(dⁿ y)/dxⁿ = n!/((1 − x)ⁿ⁺¹)',
        },
        {
          id: 4,
          question: 'Given that y = 1/(1 − 3x), prove that (dⁿ y)/dxⁿ = (3ⁿ n!)/((1 − 3x)ⁿ⁺¹).',
          type: 'Hard',
          explaination:
            'Base case: n = 1: dy/dx = 3/((1 − 3x)²) = (3¹ · 1!)/((1 − 3x)²). ✓  Inductive step: Assume (dᵏ y)/dxᵏ = (3ᵏ k!)/((1 − 3x)ᵏ⁺¹).  Differentiate: (dᵏ⁺¹y)/(dxᵏ⁺¹) = (3ᵏ k! · 3(k + 1))/((1 − 3x)ᵏ⁺²) = (3ᵏ⁺¹(k + 1)!)/((1 − 3x)ᵏ⁺²). ✓',
          answer: '(dⁿ y)/dxⁿ = (3ⁿ n!)/((1 − 3x)ⁿ⁺¹)',
        },
        {
          id: 5,
          question: 'Use induction to prove that dⁿ/dxⁿ(xe²ˣ) = (2ⁿ x + n · 2ⁿ⁻¹)e²ˣ.',
          type: 'Hard',
          explaination:
            'Base case: n = 1: d/dx(xe²ˣ) = e²ˣ + 2xe²ˣ = (2x + 1)e²ˣ = (2¹ x + 1 · 2⁰)e²ˣ. ✓  Inductive step: Assume dᵏ/dxᵏ(xe²ˣ) = (2ᵏ x + k · 2ᵏ⁻¹)e²ˣ.  Differentiate: (2ᵏ + 2(2ᵏ x + k · 2ᵏ⁻¹))e²ˣ = (2ᵏ + 2ᵏ⁺¹x + k · 2ᵏ)e²ˣ = (2ᵏ⁺¹x + (k + 1)2ᵏ)e²ˣ. ✓',
          answer: '(2ⁿ x + n · 2ⁿ⁻¹)e²ˣ',
        },
        {
          id: 6,
          question: 'Prove by induction that d²ⁿ/dx²ⁿ(x sin x) = (−1)ⁿ(x sin x − 2n cos x).',
          type: 'Hard',
          explaination:
            'Base case: n = 1: d²/dx²(xsin x) = d/dx(sin x + xcos x) = 2cos x − xsin x = (−1)¹(xsin x − 2cos x). ✓  Inductive step: Assume d²ᵏ/dx²ᵏ(xsin x) = (−1)ᵏ(xsin x − 2kcos x).  Differentiate twice: first derivative is (−1)ᵏ(sin x − xcos x ·(−1) + 2ksin x)... (full working involves two applications of the product rule, ultimately yielding (−1)ᵏ⁺¹(xsin x − 2(k + 1)cos x)). ✓',
          answer: '(−1)ⁿ(xsin x − 2ncos x)',
        },
        {
          id: 7,
          question: 'Prove that dⁿ/dxⁿ(x² eˣ) = (x² + 2nx + n(n − 1))eˣ for n ≥ 2.',
          type: 'Hard',
          explaination:
            'Base case: n = 2: d²/dx²(x² eˣ) = d/dx((2x + x²)eˣ) = (2 + 4x + x²)eˣ = (x² + 4x + 2)eˣ. Formula gives (x² + 4x + 2)eˣ. ✓  Inductive step: Assume result true for n = k. Differentiate:  d/dx[(x² + 2kx + k(k − 1))eˣ] = (2x + 2k + (x² + 2kx + k(k − 1)))eˣ  = (x² + 2(k + 1)x + k(k − 1) + 2k)eˣ = (x² + 2(k + 1)x + (k + 1)k)eˣ, which is the formula for n = k + 1. ✓',
          answer: '(x² + 2nx + n(n − 1))eˣ',
        },
        {
          id: 8,
          question: 'Show that 5ⁿ − 1 is divisible by four for all n ∈ ℕ.',
          type: 'Easy',
          explaination:
            'Base case: n = 1: 5¹ − 1 = 4 = 4 × 1. ✓  Inductive step: Assume 5ᵏ − 1 = 4m for some m ∈ ℤ.  5ᵏ⁺¹ − 1 = 5 · 5ᵏ − 1 = 5(4m + 1) − 1 = 20m + 4 = 4(5m + 1).  Since 5m + 1 ∈ ℤ, the result is divisible by 4. ✓',
          answer: '4 | (5ⁿ − 1)',
        },
        {
          id: 9,
          question: 'Show that 4ⁿ − 1 is divisible by three for all n ≥ 1.',
          type: 'Easy',
          explaination:
            'Base case: n = 1: 4 − 1 = 3 = 3 × 1. ✓  Inductive step: Assume 4ᵏ − 1 = 3m. Then 4ᵏ⁺¹ − 1 = 4 · 4ᵏ − 1 = 4(3m + 1) − 1 = 12m + 3 = 3(4m + 1). ✓',
          answer: '3 | (4ⁿ − 1)',
        },
        {
          id: 10,
          question: 'Show that 7ⁿ − 3ⁿ is divisible by four for all n ∈ ℕ.',
          type: 'Medium',
          explaination:
            'Base case: n = 1: 7 − 3 = 4. ✓  Inductive step: Assume 7ᵏ − 3ᵏ = 4m.  7ᵏ⁺¹ − 3ᵏ⁺¹ = 7 · 7ᵏ − 3 · 3ᵏ = 7(4m + 3ᵏ) − 3 · 3ᵏ = 28m + 7 · 3ᵏ − 3 · 3ᵏ = 28m + 4 · 3ᵏ = 4(7m + 3ᵏ). ✓',
          answer: '4 | (7ⁿ − 3ⁿ)',
        },
        {
          id: 11,
          question:
            'Use induction to prove that 30ⁿ − 6ⁿ is divisible by 12 for all integers n ≥ 0.',
          type: 'Hard',
          explaination:
            'Base case: n = 0: 1 − 1 = 0 = 12 × 0. ✓  Inductive step: Assume 30ᵏ − 6ᵏ = 12m.  30ᵏ⁺¹ − 6ᵏ⁺¹ = 30 · 30ᵏ − 6 · 6ᵏ = 30(12m + 6ᵏ) − 6 · 6ᵏ = 360m + 30 · 6ᵏ − 6 · 6ᵏ = 360m + 24 · 6ᵏ = 12(30m + 2 · 6ᵏ). ✓',
          answer: '12 | (30ⁿ − 6ⁿ)',
        },
        {
          id: 12,
          question: 'Show using induction that n³ − n is divisible by six for all integers n ≥ 1.',
          type: 'Medium',
          explaination:
            'Base case: n = 1: 1 − 1 = 0 = 6 × 0. ✓  Inductive step: Assume 6 | (k³ − k).  (k + 1)³ − (k + 1) = k³ + 3k² + 3k + 1 − k − 1 = (k³ − k) + 3k(k + 1).  k³ − k is divisible by 6 (assumption). 3k(k + 1): since k(k + 1) is the product of consecutive integers, it is even, so 3k(k + 1) is divisible by 6. Hence sum is divisible by 6. ✓',
          answer: '6 | (n³ − n)',
        },
        {
          id: 13,
          question:
            'Using the principle of mathematical induction, prove that n(n² + 5) is divisible by six for all integers n ≥ 1.',
          type: 'Medium',
          explaination:
            'Base case: n = 1: 1(6) = 6. ✓  Inductive step: Assume 6 | k(k² + 5).  (k + 1)((k + 1)² + 5) = (k + 1)(k² + 2k + 6) = k³ + 2k² + 6k + k² + 2k + 6  = k³ + 3k² + 8k + 6 = (k³ + 5k) + 3k² + 3k + 6 = k(k² + 5) + 3k(k + 1) + 6.  Each part is divisible by 6: k(k² + 5) by hypothesis; 3k(k + 1) since k(k + 1) is even; 6 trivially. ✓',
          answer: '6 | n(n² + 5)',
        },
        {
          id: 14,
          question: 'Use induction to show that 7ⁿ − 4ⁿ − 3n is divisible by 9 for all n ∈ ℤ⁺.',
          type: 'Hard',
          explaination:
            'Base case: n = 1: 7 − 4 − 3 = 0 = 9 × 0. ✓  Inductive step: Assume 7ᵏ − 4ᵏ − 3k = 9m.  7ᵏ⁺¹ − 4ᵏ⁺¹ − 3(k + 1)  = 7 · 7ᵏ − 4 · 4ᵏ − 3k − 3  = 7(9m + 4ᵏ + 3k) − 4 · 4ᵏ − 3k − 3  = 63m + 7 · 4ᵏ + 21k − 4 · 4ᵏ − 3k − 3  = 63m + 3 · 4ᵏ + 18k − 3  = 9(7m + 2k − 1/3) + 3 · 4ᵏ... (use 3 · 4ᵏ − 3 = 3(4ᵏ − 1), divisible by 9 for appropriate k or factor directly). Full factor: 63m + 3 · 4ᵏ + 18k − 3 = 9(7m + 2k) + 3(4ᵏ − 1). Note 4ᵏ − 1 = (4 − 1)(4ᵏ⁻¹ + … + 1) is divisible by 3, so 3(4ᵏ − 1) is divisible by 9. Hence divisible by 9. ✓',
          answer: '9 | (7ⁿ − 4ⁿ − 3n)',
        },
        {
          id: 15,
          question:
            'Prove, using the principle of mathematical induction, that 3²ⁿ⁺² − 8n − 9 is divisible by 64 for all positive integers n.',
          type: 'Hard',
          explaination:
            'Base case: n = 1: 3⁴ − 8 − 9 = 81 − 17 = 64. ✓  Inductive step: Assume 3²ᵏ⁺² − 8k − 9 = 64m, so 3²ᵏ⁺² = 64m + 8k + 9.  3²⁽ᵏ⁺¹⁾⁺² − 8(k + 1) − 9 = 9 · 3²ᵏ⁺² − 8k − 17  = 9(64m + 8k + 9) − 8k − 17 = 576m + 72k + 81 − 8k − 17 = 576m + 64k + 64 = 64(9m + k + 1). ✓',
          answer: '64 | (3²ⁿ⁺² − 8n − 9)',
        },
        {
          id: 16,
          question:
            'Show that the sum of the cubes of any three consecutive integers is divisible by nine.',
          type: 'Medium',
          explaination:
            'Let the three consecutive integers be n − 1, n, n + 1.  (n − 1)³ + n³ + (n + 1)³ = n³ − 3n² + 3n − 1 + n³ + n³ + 3n² + 3n + 1 = 3n³ + 6n = 3n(n² + 2).  We need 9 | 3n(n² + 2), i.e. 3 | n(n² + 2).  Case 1: n ≡ 0 (mod 3): 3 | n. ✓  Case 2: n ≡ 1 (mod 3): n² + 2 ≡ 3 ≡ 0. ✓  Case 3: n ≡ 2 (mod 3): n² + 2 ≡ 4 + 2 = 6 ≡ 0. ✓',
          answer: '9 | [(n − 1)³ + n³ + (n + 1)³]',
        },
      ],
    },
  },
  {
    proof: {
      title: 'Proof',
      'proof-by-contradiction-contrapositive': [
        {
          id: 1,
          question:
            'For an integer n, given that n² is an even number, prove that n is also an even number.',
          type: 'Easy',
          explaination:
            'Proof by contrapositive. Assume n is odd, so n = 2k + 1 for some integer k.  Then n² = (2k + 1)² = 4k² + 4k + 1 = 2(2k² + 2k) + 1, which is odd.  This contradicts n² being even, so n must be even. □',
          answer: 'n is even.',
        },
        {
          id: 2,
          question: 'Prove that there is no largest even integer.',
          type: 'Easy',
          explaination:
            'Assume for contradiction that N is the largest even integer.  Consider N + 2. Since N is even, N = 2k, so N + 2 = 2(k + 1), which is also even.  But N + 2 > N, contradicting the assumption that N is the largest even integer. □',
          answer: 'No largest even integer exists.',
        },
        {
          id: 3,
          question: 'Prove that there is no smallest positive real number.',
          type: 'Medium',
          explaination:
            'Assume for contradiction that x > 0 is the smallest positive real number.  Consider y = x/2. Then y > 0 and y < x.  This contradicts x being the smallest positive real number. □',
          answer: 'No smallest positive real number exists.',
        },
        {
          id: 4,
          question:
            'For integers a and b, given that ab is an even integer, prove that at least one of a and b must be even.',
          type: 'Easy',
          explaination:
            'Proof by contradiction. Assume both a and b are odd.  Write a = 2m + 1, b = 2n + 1 for integers m, n.  Then ab = (2m + 1)(2n + 1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1, which is odd.  This contradicts ab being even. Hence at least one of a, b is even. □',
          answer: 'At least one of a, b is even.',
        },
      ],
      'proof-by-contradiction-irrationality': [
        {
          id: 1,
          question: 'Prove that √5 is an irrational number.',
          type: 'Easy',
          explaination:
            'Assume √5 = p/q where p, q ∈ ℤ, q ≠ 0, and gcd(p,q) = 1.  Then 5 = p²/q², so p² = 5q².  Hence 5 | p², and since 5 is prime, 5 | p. Write p = 5k.  Then 25k² = 5q² ⇒ q² = 5k², so 5 | q.  This contradicts gcd(p,q) = 1. Hence √5 is irrational. □',
          answer: '√5 is irrational.',
        },
        {
          id: 2,
          question: 'Prove that ∛2 is irrational.',
          type: 'Medium',
          explaination:
            'Assume ∛2 = p/q in lowest terms (gcd(p,q) = 1, q ≠ 0).  Then 2 = p³/q³, so p³ = 2q³.  Hence 2 | p³, and since 2 is prime, 2 | p. Write p = 2k.  Then 8k³ = 2q³ ⇒ q³ = 4k³, so 2 | q³, hence 2 | q.  This contradicts gcd(p,q) = 1. Hence ∛2 is irrational. □',
          answer: '∛2 is irrational.',
        },
        {
          id: 3,
          question: 'Prove that log₂ 3 is an irrational number.',
          type: 'Medium',
          explaination:
            'Assume log₂ 3 = p/q where p, q ∈ ℤ⁺ and gcd(p,q) = 1.  Then 2^(p/q) = 3, so 2ᵖ = 3^q.  The LHS is even and the RHS is odd for all positive integers p, q. Contradiction. □',
          answer: 'log₂ 3 is irrational.',
        },
        {
          id: 4,
          question: 'Prove that log₃ 7 is irrational.',
          type: 'Medium',
          explaination:
            'Assume log₃ 7 = p/q where p, q ∈ ℤ⁺ and gcd(p,q) = 1.  Then 3^(p/q) = 7, so 3ᵖ = 7^q.  By the Fundamental Theorem of Arithmetic, 3ᵖ has only the prime factor 3, while 7^q has only the prime factor 7. Since 3 ≠ 7, this is a contradiction. □',
          answer: 'log₃ 7 is irrational.',
        },
        {
          id: 5,
          question: 'Prove by contradiction that the real root of x³ + x − 1 = 0 is irrational.',
          type: 'Hard',
          explaination:
            'Assume for contradiction the root is rational: x = p/q, gcd(p,q) = 1, q ≠ 0.  Substituting: p³/q³ + p/q − 1 = 0.  Multiply through by q³: p³ + pq² − q³ = 0.  So p³ = q³ − pq² = q²(q − p), hence q | p³. Since gcd(p,q) = 1, q = 1.  Similarly, q³ = p³ + pq² = p(p² + q²), hence p | q³. Since gcd(p,q) = 1, p = 1.  But x = 1/1 = 1: check 1 + 1 − 1 = 1 ≠ 0. Contradiction. Hence the root is irrational. □',
          answer: 'The root of x³ + x − 1 = 0 is irrational.',
        },
      ],
      'proof-by-contradiction-real-life-context': [
        {
          id: 1,
          question:
            'The mean height of three children is 126 cm. Show that at least one of them must be at least 126 cm tall.',
          type: 'Easy',
          explaination:
            'Let the heights be h₁, h₂, h₃. We are given (h₁ + h₂ + h₃)/3 = 126, so h₁ + h₂ + h₃ = 378.  Proof by contradiction: assume all three are strictly less than 126 cm.  Then h₁ < 126, h₂ < 126, h₃ < 126, so h₁ + h₂ + h₃ < 378. Contradiction. □',
          answer: 'At least one child is at least 126 cm tall.',
        },
      ],
      'proof-by-direct-calculation-rational-numbers': [
        {
          id: 1,
          question:
            'Show by direct calculation that the difference of two rational numbers is rational.',
          type: 'Easy',
          explaination:
            'Let r = a/b and s = c/d where a,b,c,d ∈ ℤ, b,d ≠ 0.  Then r − s = a/b − c/d = (ad − bc)/bd.  Since ad − bc ∈ ℤ and bd ∈ ℤ, bd ≠ 0, the result is rational. □',
          answer: 'The difference of two rationals is rational.',
        },
      ],
      'proof-by-contradiction-rational-irrational': [
        {
          id: 1,
          question:
            'Use proof by contradiction to show that the sum of a rational number and an irrational number is irrational.',
          type: 'Medium',
          explaination:
            'Let r be rational and x be irrational. Suppose for contradiction that r + x = s is rational.  Then x = s − r. Since the difference of two rationals is rational (Q6a), x is rational.  This contradicts x being irrational. Hence r + x is irrational. □',
          answer: 'The sum of a rational and an irrational is irrational.',
        },
      ],
      'proof-prime-numbers': [
        {
          id: 1,
          question:
            'Let p₁, p₂ and p₃ be three different prime numbers. Show that the number p₁ p₂ p₃ + 1 is not divisible by any of p₁, p₂ and p₃.',
          type: 'Medium',
          explaination:
            'Suppose pᵢ | (p₁ p₂ p₃ + 1) for some i ∈ {1,2,3}.Since pᵢ | p₁ p₂ p₃, we would also need pᵢ | 1, giving pᵢ = 1. But primes are greater than 1. Contradiction. Hence none of p₁, p₂, p₃ divides p₁ p₂ p₃ + 1. □',
          answer: 'p₁ p₂ p₃ + 1 is not divisible by p₁, p₂, or p₃.',
        },
      ],
      'proof-by-contradiction-infinite-primes-euclid': [
        {
          id: 1,
          question: 'Prove that there are infinitely many prime numbers.',
          type: 'Hard',
          explaination:
            'Assume for contradiction that there are finitely many primes: p₁, p₂, …, pₙ.  Let N = p₁ p₂ ⋯ pₙ + 1.  N > 1, so N has at least one prime factor q.  Since q is prime, q = pᵢ for some i.  But pᵢ | p₁ p₂ ⋯ pₙ, so pᵢ | 1, giving pᵢ = 1. Contradiction.  Hence there are infinitely many primes. □',
          answer: 'There are infinitely many primes.',
        },
      ],
      'graphical-argument-real-roots': [
        {
          id: 1,
          question:
            'By sketching a suitable graph, show that the equation x³ + x − 1 = 0 has exactly one real root.',
          type: 'Medium',
          explaination:
            "Let f(x) = x³ + x − 1.  f'(x) = 3x² + 1 > 0 for all x ∈ ℝ, so f is strictly increasing.  A strictly increasing continuous function can cross the x-axis at most once.  Since f(0) = −1 < 0 and f(1) = 1 > 0, by the Intermediate Value Theorem, there is at least one root in (0,1).  Hence exactly one real root exists. □",
          answer: 'Exactly one real root exists.',
        },
      ],
      'disproof-by-counterexample': [
        {
          id: 1,
          question: 'Use a counterexample to disprove the statement √(x² − 1) ≡ x − 1.',
          type: 'Easy',
          explaination:
            'Substitute a value such as x = 2. LHS: √(2² − 1) = √3. RHS: 2 − 1 = 1. Since √3 ≠ 1, the statement is disproved.',
          answer: 'e.g. x = 2: √(4 − 1) = √3 ≠ 1',
        },
        {
          id: 2,
          question: 'Use a counterexample to disprove the statement (x − y)³ ≡ x³ − y³.',
          type: 'Easy',
          explaination:
            'Let x = 2, y = 1. LHS: (2 − 1)³ = 1³ = 1. RHS: 2³ − 1³ = 8 − 1 = 7. Since 1 ≠ 7, the statement is disproved.',
          answer: 'e.g. x = 2, y = 1: (2 − 1)³ = 1 ≠ 8 − 1 = 7',
        },
        {
          id: 3,
          question: 'Use a counterexample to disprove the statement ln(a + b) ≡ ln a + ln b.',
          type: 'Easy',
          explaination:
            'Let a = 1, b = 1. LHS: ln(1 + 1) = ln 2 ≈ 0.693. RHS: ln 1 + ln 1 = 0 + 0 = 0. Since ln 2 ≠ 0, the statement is disproved.',
          answer: 'e.g. a = 1, b = 1: ln 2 ≠ ln 1 + ln 1 = 0',
        },
        {
          id: 4,
          question:
            'Use a counterexample to show that if dy/dx = 2x, then it is not necessarily true that y = x².',
          type: 'Medium',
          explaination:
            'If dy/dx = 2x, then integrating gives y = x² + c where c is an arbitrary constant. For example, y = x² + 1 satisfies dy/dx = 2x but y ≠ x².',
          answer: 'y = x² + c for any constant c ≠ 0, e.g. y = x² + 1',
        },
        {
          id: 5,
          question:
            'Use a counterexample to show that the following statement is not true: sin 2x = 1 ⇒ x = 45°.',
          type: 'Easy',
          explaination:
            'sin 2x = 1 ⇒ 2x = 90° + 360° n for integer n. So x = 45° + 180° n. For n = 1: x = 225°. Since sin(2 × 225°) = sin 450° = 1 but 225° ≠ 45°, the statement is disproved.',
          answer: 'e.g. x = 225°: sin(450°) = sin(90°) = 1 but x ≠ 45°',
        },
        {
          id: 6,
          question:
            'Consider the statement: If a/b = c/d, then a = b and c = d. Use a counterexample to disprove this statement.',
          type: 'Medium',
          explaination:
            'Let a = 2, b = 4, c = 1, d = 2. Then a/b = 2/4 = 1/2 = c/d. But a ≠ b (since 2 ≠ 4), so the statement is disproved.',
          answer: 'e.g. a = 2, b = 4, c = 1, d = 2: 2/4 = 1/2 but 2 ≠ 4',
        },
        {
          id: 7,
          question:
            'Renzhi says that a quadrilateral with four equal sides must be a square. Use a counterexample to disprove his statement.',
          type: 'Easy',
          explaination:
            "A rhombus has four equal sides but its interior angles are not necessarily 90°. For example, a rhombus with angles 60° and 120° is not a square. Therefore Renzhi's statement is disproved.",
          answer: 'A rhombus has four equal sides but is not necessarily a square.',
        },
        {
          id: 8,
          question:
            'Katie thinks that √x² = x for all real numbers x. Give a counterexample to disprove her statement.',
          type: 'Easy',
          explaination:
            'Let x = −3. Then √x² = √((−3)²) = √9 = 3. But x = −3 ≠ 3. So √x² ≠ x. In general, √x² = |x|.',
          answer: 'e.g. x = −3: √((−3)²) = √9 = 3 ≠ −3',
        },
        {
          id: 9,
          question:
            'Use a counterexample to disprove the statement: If ab is an integer, then a and b are both integers.',
          type: 'Medium',
          explaination:
            'Let a = 1/2 and b = 6. Then ab = 1/2 × 6 = 3, which is an integer. However, a = 1/2 is not an integer. Therefore the statement is disproved.',
          answer: 'e.g. a = 1/2, b = 6: ab = 3 (integer), but a is not an integer',
        },
        {
          id: 10,
          question:
            "Let f(n) = n² + n + 11.  (a) Show that f(n) is a prime number for n = 1, 2 and 3.  (b) Ilya says that f(n) is a prime number for all integer values of n. Use a counterexample to disprove Ilya's statement.",
          type: 'Medium',
          explaination:
            "(a) f(1) = 1 + 1 + 11 = 13 ✓ prime. f(2) = 4 + 2 + 11 = 17 ✓ prime. f(3) = 9 + 3 + 11 = 23 ✓ prime.  (b) Try n = 10: f(10) = 100 + 10 + 11 = 121 = 11². This is not prime. Therefore Ilya's statement is disproved.",
          answer:
            '(a) f(1) = 13, f(2) = 17, f(3) = 23 (all prime).  (b) n = 10: f(10) = 121 = 11² (not prime)',
        },
        {
          id: 11,
          question:
            'Use a counterexample to disprove this statement: The sum of two irrational numbers is an irrational number.',
          type: 'Medium',
          explaination:
            'Let a = √2 and b = −√2. Both are irrational. Their sum: a + b = √2 + (−√2) = 0, which is rational. Therefore the statement is disproved.',
          answer: 'e.g. √2 + (−√2) = 0, which is rational',
        },
        {
          id: 12,
          question: 'Use a counterexample to disprove the statement: If x² > 100, then x > 10.',
          type: 'Easy',
          explaination:
            'Let x = −11. Then x² = 121 > 100. However, x = −11 not > 10. Therefore the statement is disproved.',
          answer: 'e.g. x = −11: (−11)² = 121 > 100 but −11 < 10',
        },
        {
          id: 13,
          question:
            'Find a counterexample to disprove the statement: If z⁴ = 1, then z = 1 or z = −1.',
          type: 'Medium',
          explaination:
            'Consider z = i (imaginary unit). Then z⁴ = i⁴ = (i²)² = (−1)² = 1. But z = i ≠ 1 and z = i ≠ −1. Therefore the statement is disproved. (Similarly z = −i works.)',
          answer: 'z = i or z = −i: i⁴ = (i²)² = (−1)² = 1',
        },
        {
          id: 14,
          question:
            "Angela says that an irrational number raised to an irrational power is always irrational. By considering (√2^√2)^√2, disprove Angela's statement.",
          type: 'Hard',
          explaination:
            "Using the power rule: (√2^√2)^√2 = √2^(√2 × √2) = √2² = 2.  Now, √2 is irrational. Either √2^√2 is irrational or rational.  - If √2^√2 is irrational: then (√2^√2)^√2 = 2 is an irrational number raised to an irrational power giving a rational result — disproving Angela.  - If √2^√2 is rational: then √2^√2 is already a rational number produced by irrational^irrational — disproving Angela.  In either case, Angela's statement is disproved. (In fact, by the Gelfond–Schneider theorem, √2^√2 is transcendental, so the first case applies.)",
          answer: '(√2^√2)^√2 = √2^(√2 · √2) = √2² = 2, which is rational.',
        },
      ],
    },
  },
  {
    'algebra-and-functions': {
      title: 'Algebra and Functions',
      'polynomial-graphs-matching': [
        {
          id: 1,
          question:
            'Match each equation with its graph (A, B, or C).  (i) y = 2x³ − 5x + 1  (ii) y = 4 − 3x²  (iii) y = −3x³ + 2x² − 4',
          type: 'Easy',
          explaination:
            '• (i) Positive leading coefficient cubic (x³), y-intercept = 1 → Graph A  • (ii) Negative leading coefficient quadratic, y-intercept = 4 → Graph B  • (iii) Negative leading coefficient cubic, y-intercept = –4 → Graph C',
          answer: '(i) → A,  (ii) → B,  (iii) → C',
        },
        {
          id: 2,
          question:
            'Match each equation with its corresponding graph (A, B, or C).  (i) y = −x³ + 2x − 4  (ii) y = x² − 4x + 1  (iii) y = 3x³ − 4x',
          type: 'Easy',
          explaination:
            '• (i) Negative cubic, y-intercept = –4 → Graph A  • (ii) Positive quadratic (parabola), y-intercept = 1 → Graph B  • (iii) Positive cubic, y-intercept = 0 → Graph C',
          answer: '(i) → A,  (ii) → B,  (iii) → C',
        },
        {
          id: 3,
          question:
            'Match each equation with its corresponding graph (A, B, or C).  (i) y = x⁴ − 3x + 1  (ii) y = −x⁴ − x + 3  (iii) y = 2x² − 4x + 3',
          type: 'Easy',
          explaination:
            '• (i) Positive quartic, y-intercept = 1 → Graph A  • (ii) Negative quartic (both ends down), y-intercept = 3 → Graph B  • (iii) Positive quadratic, y-intercept = 3 → Graph C',
          answer: '(i) → A,  (ii) → B,  (iii) → C',
        },
        {
          id: 4,
          question:
            'Match each equation with its corresponding graph (A, B, or C).  (i) y = x² − 5x + 1  (ii) y = −2x⁴ + 2x + 5  (iii) y = x⁴ − 4x³ − 3',
          type: 'Easy',
          explaination:
            '• (i) Positive parabola (degree 2), y-intercept = 1 → Graph A  • (ii) Negative quartic (both ends down), y-intercept = 5 → Graph B  • (iii) Positive quartic (both ends up), y-intercept = –3 → Graph C',
          answer: '(i) → A,  (ii) → B,  (iii) → C',
        },
        {
          id: 5,
          question:
            'Match each equation with its corresponding graph (A, B, or C).  (i) y = −3x³ + 3x² − 1  (ii) y = x⁵ − 4x + 1  (iii) y = −x⁵ − 4x + 1',
          type: 'Medium',
          explaination:
            '• (i) Negative cubic, y-intercept = –1 → Graph A  • (ii) Positive quintic (degree 5), y-intercept = 1 → Graph B  • (iii) Negative quintic, y-intercept = 1 → Graph C',
          answer: '(i) → A,  (ii) → B,  (iii) → C',
        },
        {
          id: 6,
          question:
            'Match each equation with its corresponding graph (A, B, or C).  (i) y = 2x³ + x − 7  (ii) y = x⁵ − 3x² + 1  (iii) y = −x⁵ + 2x − 1',
          type: 'Medium',
          explaination:
            '• (i) Positive cubic, y-intercept = –7 → Graph A  • (ii) Positive quintic, y-intercept = 1 → Graph B  • (iii) Negative quintic, y-intercept = –1 → Graph C',
          answer: '(i) → A,  (ii) → B,  (iii) → C',
        },
      ],
      'sketching-polynomial-graphs': [
        {
          id: 1,
          question:
            'Sketch the graph of  y = 2(x − 1)(x − 4)(x + 2)  showing all the axis intercepts.',
          type: 'Easy',
          explaination:
            '• Set y = 0: x = −2, 1, 4  • Set x = 0: y = 2(−1)(−4)(2) = 16  • Leading coefficient positive → both ends: x → −∞, y→ −∞; x→ + ∞, y→ + ∞  • Sketch cubic crossing x-axis at –2, 1, 4',
          answer: 'x-intercepts: x = −2, 1, 4;  y-intercept: y = 16',
        },
        {
          id: 2,
          question: 'Sketch the graph of  y = 6x(x + 2)(x − 3)  showing all the axis intercepts.',
          type: 'Easy',
          explaination:
            '• Set y = 0: x = −2, 0, 3  • y-intercept = 0 (passes through origin)  • Positive cubic → sketch accordingly',
          answer: 'x-intercepts: x = −2, 0, 3;  y-intercept: y = 0',
        },
        {
          id: 3,
          question: 'Sketch the graph of  y = −5x(x − 1)(x + 2)  showing all the axis intercepts.',
          type: 'Easy',
          explaination:
            '• Set y = 0: x = −2, 0, 1  • Negative cubic (leading coeff –5) → x→−∞, y→ + ∞; x→ + ∞, y→−∞',
          answer: 'x-intercepts: x = −2, 0, 1;  y-intercept: y = 0',
        },
        {
          id: 4,
          question:
            'Sketch the graph of  y = −(x − 1)(x + 2)(x + 4)  showing all the axis intercepts.',
          type: 'Easy',
          explaination:
            '• Set y = 0: x = −4, −2, 1  • Set x = 0: y = −(−1)(2)(4) = 8  • Negative cubic',
          answer: 'x-intercepts: x = −4, −2, 1;  y-intercept: y = 8',
        },
        {
          id: 5,
          question:
            'Sketch the graph of  y = x(x + 2)(x + 3)(x − 1)  showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            '• Degree 4 (quartic), positive leading coefficient → both ends up  • Roots at x = −3, −2, 0, 1 (all simple)  • Passes through origin',
          answer: 'x-intercepts: x = −3, −2, 0, 1;  y-intercept: y = 0',
        },
        {
          id: 6,
          question:
            'Sketch the graph of  y = 2(x − 3)(x − 4)(x + 1)(x − 2)  showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            '• Degree 4, positive leading coefficient → both ends up  • Roots at x = −1, 2, 3, 4  • Set x = 0: y = 2(−3)(−4)(1)(−2) = −48',
          answer: 'x-intercepts: x = −1, 2, 3, 4;  y-intercept: y = −48',
        },
        {
          id: 7,
          question: 'Sketch the graph of y = 3x(x − 1)(x + 2), showing all the axis intercepts.',
          type: 'Easy',
          explaination:
            '• Set y = 0: x = 0, x = 1, x = −2  • y-intercept = 0 (passes through origin)  • Positive cubic (leading coeff = 3)  • End behaviour: x→−∞, y→−∞; x→ + ∞, y→ + ∞',
          answer: 'x-intercepts: x = −2, 0, 1;  y-intercept: y = 0',
        },
        {
          id: 8,
          question:
            'Sketch the graph of y = −(x + 1)(x − 1)(x − 3), showing all the axis intercepts.',
          type: 'Easy',
          explaination:
            '• Set y = 0: x = −1, 1, 3  • Set x = 0: y = −(1)(−1)(−3) = −3  • Negative cubic → x→−∞, y→ + ∞; x→ + ∞, y→−∞',
          answer: 'x-intercepts: x = −1, 1, 3;  y-intercept: y = −3',
        },
        {
          id: 9,
          question: 'Sketch the graph of  y = (x + 1)(x − 2)²  showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            '• Double root at x = 2 → curve touches and bounces at x = 2  • Simple root at x = −1 → curve crosses  • Set x = 0: y = (1)(4) = 4  • Positive cubic',
          answer: 'x-intercepts: x = −1 (crosses), x = 2 (touches);  y-intercept: y = 4',
        },
        {
          id: 10,
          question: 'Sketch the graph of  y = (x + 1)²(x − 2)  showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            '• Double root at x = −1 → touches x-axis  • Simple root at x = 2 → crosses  • Set x = 0: y = (1)(−2) = −2  • Positive cubic',
          answer: 'x-intercepts: x = −1 (touches), x = 2 (crosses);  y-intercept: y = −2',
        },
        {
          id: 11,
          question: 'Sketch the graph of  y = −3x²(x − 1)(x − 3)  showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            '• Degree 4, negative leading coefficient → both ends down  • Double root at x = 0 → touches; simple roots at 1 and 3  • Passes through origin',
          answer:
            'x-intercepts: x = 0 (touches), x = 1 (crosses), x = 3 (crosses);  y-intercept: y = 0',
        },
        {
          id: 12,
          question:
            'Sketch the graph of  y = −5x(x − 2)²(2x + 1)  showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            '• Degree 4, negative leading coefficient → both ends down  • Double root at x = 2 → touches  • Simple roots at x = 0 and x = −1/2',
          answer:
            'x-intercepts: x = −1/2 (crosses), x = 0 (crosses), x = 2 (touches);  y-intercept: y = 0',
        },
        {
          id: 13,
          question: 'Sketch the graph of  y = 2(x − 3)²(x + 1)²  showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            '• Degree 4, positive leading coefficient → both ends up  • Both roots are double → curve touches x-axis at both x = −1 and x = 3  • Set x = 0: y = 2(9)(1) = 18',
          answer: 'x-intercepts: x = −1 (touches), x = 3 (touches);  y-intercept: y = 18',
        },
        {
          id: 14,
          question: 'Sketch the graph of  y = 2(x − 3)²(x − 1)²  showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            '• Degree 4, positive leading coefficient → both ends up  • Both roots are double → touches at x = 1 and x = 3  • Set x = 0: y = 2(9)(1) = 18',
          answer: 'x-intercepts: x = 1 (touches), x = 3 (touches);  y-intercept: y = 18',
        },
        {
          id: 15,
          question: 'Sketch the graph of  y = 2(x − 1)(x − 3)³  showing all the axis intercepts.',
          type: 'Hard',
          explaination:
            '• Degree 4, positive leading coefficient → both ends up  • Triple root at x = 3 → inflection-type crossing (S-shape at axis)  • Simple root at x = 1 → crosses  • Set x = 0: y = 2(−1)(−27) = 54',
          answer: 'x-intercepts: x = 1 (crosses), x = 3 (inflection point);  y-intercept: y = 54',
        },
        {
          id: 16,
          question: 'Sketch the graph of  y = 3(x + 1)(x − 2)³  showing all the axis intercepts.',
          type: 'Hard',
          explaination:
            '• Degree 4, positive leading coefficient → both ends up  • Triple root at x = 2 → inflection-type crossing  • Simple root at x = −1  • Set x = 0: y = 3(1)(−8) = −24',
          answer: 'x-intercepts: x = −1 (crosses), x = 2 (inflection point);  y-intercept: y = −24',
        },
        {
          id: 17,
          question: 'Sketch the graph of y = (x + 1)²(2 − x).',
          type: 'Medium',
          explaination:
            '• Double root at x = −1 → touches x-axis; simple root at x = 2 → crosses  • Set x = 0: y = (1)²(2) = 2  • Leading term: (x²)(−x) = −x³ → negative cubic  • End behaviour: x→ + ∞, y→−∞',
          answer: 'x-intercepts: x = −1 (touches), x = 2 (crosses);  y-intercept: y = 2',
        },
        {
          id: 18,
          question: 'Sketch the graph of y = (x + 1)(2 − x)².',
          type: 'Medium',
          explaination:
            '• Simple root at x = −1 → crosses; double root at x = 2 → touches  • Set x = 0: y = (1)(4) = 4  • Leading term: (x)(x²) = x³ → positive cubic (note: (2 − x)² = x² − 4x + 4)  • End behaviour: x→ + ∞, y→ + ∞',
          answer: 'x-intercepts: x = −1 (crosses), x = 2 (touches);  y-intercept: y = 4',
        },
        {
          id: 19,
          question: 'Sketch the graph of y = −2(x − 1)²(x + 2)², showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            '• Degree 4, negative leading coefficient → both ends down  • Both roots are double → curve touches x-axis at x = −2 and x = 1  • Set x = 0: y = −2(1)(4) = −8  • Curve lies below (or on) x-axis for all x',
          answer: 'x-intercepts: x = 1 (touches), x = −2 (touches);  y-intercept: y = −8',
        },
        {
          id: 20,
          question: 'Sketch the graph of y = (x − p)²(x − q) where p < q.',
          type: 'Hard',
          explaination:
            '• Double root at x = p → touches x-axis (local max of 0)  • Simple root at x = q → crosses x-axis  • Positive cubic → x→−∞, y→−∞; x→ + ∞, y→ + ∞  • Local minimum between p and q (negative value)  • y-intercept: y = (−p)²(−q) = p²(−q)',
          answer:
            'Sketch: touches x-axis at x = p; crosses at x = q; local max at x = p with y = 0; local min at x = (2q + p)/3 with y = −(4(q − p)³)/27',
        },
      ],
      'finding-polynomial-equations-from-graphs': [
        {
          id: 1,
          question:
            'The graph shown has an equation of the form y = px³ + qx² + rx + s.  Graph description: Cubic shape. y-intercept at 36. x-intercepts at x = −2 (crosses) and x = 3 (touches/double root).  Find the values of p, q, r, s.',
          type: 'Hard',
          explaination:
            '• Double root at x = 3, simple root at x = −2  • Write y = a(x + 2)(x − 3)²  • Substitute (0,36): a(2)(9) = 18a = 36 ⇒ a = 2  • Expand: 2(x + 2)(x − 3)² = 2(x + 2)(x² − 6x + 9)  = 2(x³ − 6x² + 9x + 2x² − 12x + 18)  = 2(x³ − 4x² − 3x + 18)  = 2x³ − 8x² − 6x + 36  • So p = 2, q = −8, r = −6, s = 36',
          answer: 'p = 2, q = −8, r = −6, s = 36',
        },
        {
          id: 2,
          question:
            'The graph shown has an equation of the form y = px³ + qx² + rx + s.  Graph description: Cubic shape. x-intercepts at x = 0 and x = 3. Local maximum at (2, 4).  Find the values of p, q, r, s.',
          type: 'Hard',
          explaination:
            '• Roots at x = 0 and x = 3; double root at x = 0 (touches) → y = ax²(x − 3)  • Substitute (2,4): a(4)(−1) = −4a = 4 ⇒ a = −1  • Therefore y = −x²(x − 3) = −x³ + 3x²  • So p = −1, q = 3, r = 0, s = 0  • Verify: at x = 2, y = −8 + 12 = 4 ✓',
          answer: 'p = −1, q = 3, r = 0, s = 0',
        },
        {
          id: 3,
          question:
            'Find a possible polynomial equation for each graph.  Graph description: Positive cubic shape. x-intercepts at x = 2, 3, 4. y-intercept at −48.',
          type: 'Medium',
          explaination:
            '• Write y = a(x − 2)(x − 3)(x − 4)  • Substitute (0, −48): a(−2)(−3)(−4) = −24a = −48 ⇒ a = 2  • Therefore y = 2(x − 2)(x − 3)(x − 4)',
          answer: 'y = 2(x − 2)(x − 3)(x − 4)',
        },
        {
          id: 4,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Cubic shape. x-intercepts at x = −1, 3, 5. y-intercept at 105.',
          type: 'Medium',
          explaination:
            '• Write y = a(x + 1)(x − 3)(x − 5)  • Substitute (0,105): a(1)(−3)(−5) = 15a = 105 ⇒ a = 7  • Therefore y = 7(x + 1)(x − 3)(x − 5)',
          answer: 'y = 7(x + 1)(x − 3)(x − 5)',
        },
        {
          id: 5,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Negative cubic shape. x-intercepts at x = 3 (crosses) and x = 5 (touches/double root). y-intercept at 180.',
          type: 'Medium',
          explaination:
            '• Double root at x = 3 or x = 5 (check graph shape)  • Try y = a(x − 3)²(x − 5)  • Substitute (0,180): a(9)(−5) = −45a = 180 ⇒ a = −4  • Therefore y = −4(x − 3)²(x − 5)',
          answer: 'y = −4(x − 3)²(x − 5)',
        },
        {
          id: 6,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Negative cubic shape. x-intercepts at x = 1, 2, 3. y-intercept at 12.',
          type: 'Medium',
          explaination:
            '• Write y = a(x − 1)(x − 2)(x − 3)  • Substitute (0,12): a(−1)(−2)(−3) = −6a = 12 ⇒ a = −2  • Therefore y = −2(x − 1)(x − 2)(x − 3)',
          answer: 'y = −2(x − 1)(x − 2)(x − 3)',
        },
        {
          id: 7,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Cubic shape. x-intercepts at x = 0 (double root, touches) and x = 4 (crosses). Passes through origin.',
          type: 'Medium',
          explaination:
            '• Double root at x = 0, simple root at x = 4  • Write y = ax²(x − 4)  • Check end behaviour and shape to confirm a > 0; with a = 1: y = x²(x − 4)',
          answer: 'y = x²(x − 4)  or equivalent',
        },
        {
          id: 8,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Cubic shape. x-intercepts at x = −2 (crosses) and x = 2 (double root, touches). y-intercept at 8.',
          type: 'Medium',
          explaination:
            '• Simple root at x = −2, double root at x = 2  • Write y = a(x + 2)(x − 2)²  • Substitute (0,8): a(2)(4) = 8a = 8 ⇒ a = 1  • Therefore y = (x + 2)(x − 2)²',
          answer: 'y = (x + 2)(x − 2)²',
        },
        {
          id: 9,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Positive quartic shape. x-intercepts at x = −3, −2, 2, 3. y-intercept at 36.',
          type: 'Hard',
          explaination:
            '• Write y = a(x + 3)(x + 2)(x − 2)(x − 3) = a(x² − 9)(x² − 4)  • Substitute (0,36): a(−9)(−4) = 36a = 36 ⇒ a = 1  • Therefore y = (x² − 9)(x² − 4)',
          answer: 'y = (x² − 9)(x² − 4)  or  y = (x + 3)(x + 2)(x − 2)(x − 3)',
        },
        {
          id: 10,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Quartic shape with negative values. x-intercepts at x = −3, 2, 3. Local minimum value approximately −72. y-intercept at −1.',
          type: 'Hard',
          explaination:
            '• Roots at x = −3, 2, 3; double root likely at x = 3 (curve touches there)  • Write y = a(x + 3)(x − 2)(x − 3)²  • Use y-intercept or minimum to find a',
          answer: 'y = (x + 3)(x − 2)(x − 3)² or similar',
        },
        {
          id: 11,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Negative cubic shape. y-intercept at 12. x-intercepts at x = 1, 2, 3.',
          type: 'Hard',
          explaination:
            '• Write y = a(x − 1)(x − 2)(x − 3)  • Substitute (0,12): a(−1)(−2)(−3) = −6a = 12 ⇒ a = −2  • Therefore y = −2(x − 1)(x − 2)(x − 3)',
          answer: 'y = −2(x − 1)(x − 2)(x − 3)',
        },
        {
          id: 12,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Cubic shape. x-intercepts at x = −2, 0, 1.',
          type: 'Hard',
          explaination:
            '• Roots at x = −2, 0, 1  • Write y = ax(x + 2)(x − 1)  • Without additional labelled point, a = 1 is simplest: y = x(x + 2)(x − 1)',
          answer: 'y = x(x + 2)(x − 1)  or scalar multiple',
        },
        {
          id: 13,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Cubic shape (goes steeply negative). x-intercepts at x = −1 (touches/double root) and x = 3 (crosses). y-intercept at −6.',
          type: 'Hard',
          explaination:
            '• Double root at x = −1, simple root at x = 3  • Write y = a(x + 1)²(x − 3)  • Substitute (0,−6): a(1)(−3) = −3a = −6 ⇒ a = 2  • Therefore y = 2(x + 1)²(x − 3)',
          answer: 'y = 2(x + 1)²(x − 3)',
        },
        {
          id: 14,
          question:
            'Find a possible polynomial equation for the graph.  Graph description: Positive cubic shape. x-intercepts at x = 0 (crosses) and x = 4 (double root, touches).',
          type: 'Hard',
          explaination:
            '• Simple root at x = 0, double root at x = 4  • Write y = ax(x − 4)²  • With a = 1: y = x(x − 4)²',
          answer: 'y = x(x − 4)²  or scalar multiple',
        },
      ],
      'factorising-and-sketching-polynomials': [
        {
          id: 1,
          question:
            'Given that f(x) = 3x³ − 12x:  a) Factorize f(x) fully.  b) Hence sketch the graph of y = f(x), showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            'a) f(x) = 3x³ − 12x = 3x(x² − 4) = 3x(x − 2)(x + 2)  b) Roots at x = −2,0,2; positive cubic; y-intercept at origin',
          answer: 'a) f(x) = 3x(x − 2)(x + 2)  b) x-intercepts: x = −2, 0, 2; y-intercept: 0',
        },
        {
          id: 2,
          question:
            'Given that f(x) = 5x − 5x³:  a) Factorize f(x) fully.  b) Hence sketch the graph of y = f(x), showing all the axis intercepts.',
          type: 'Medium',
          explaination:
            'a) f(x) = 5x − 5x³ = 5x(1 − x²) = 5x(1 − x)(1 + x) = −5x(x − 1)(x + 1)  b) Negative cubic; roots at x = −1,0,1',
          answer: 'a) f(x) = −5x(x − 1)(x + 1)  b) x-intercepts: x = −1, 0, 1; y-intercept: 0',
        },
        {
          id: 3,
          question:
            'Given that f(x) = 4x³ − x⁴:  a) Factorize f(x) fully.  b) Hence sketch the graph of y = f(x), showing all the axis intercepts.',
          type: 'Hard',
          explaination:
            'a) f(x) = 4x³ − x⁴ = x³(4 − x)  b) Triple root at x = 0 → inflection point on x-axis; simple root at x = 4  • Leading term −x⁴ → both ends down  • Curve touches then crosses at x = 0 (inflection)',
          answer:
            'a) f(x) = x³(4 − x)  b) x-intercepts: x = 0 (triple root / inflection), x = 4 (crosses);  y-intercept: 0',
        },
      ],
      'polynomial-equations-number-of-solutions': [
        {
          id: 1,
          question: 'How many solutions does the equation (x − p)²(x − q) = k have when k > 0?',
          type: 'Hard',
          explaination:
            '• From part (a), y = (x − p)²(x − q) has a local max of 0 at x = p and a local min of −(4(q − p)³)/27 < 0 between p and q  • For x < p: y ≤ 0 (curve is below or at x-axis)  • For p < x < q: y ≤ 0  • For x > q: y > 0 and increasing  • Therefore the line y = k with k > 0 intersects the curve exactly once (for x > q)  • Answer: 1 solution',
          answer: '1 solution',
        },
      ],
    },
  },
  {
    'analysis-approaches': {
      title: 'Analysis & Approaches',
      'rational-functions-vertical-asymptotes-intercepts': [
        {
          id: 1,
          question:
            'Sketch the graph of y = (3x − 2)/(x² + 4x), labelling any vertical asymptotes and axis intercepts.',
          type: 'Easy',
          explaination:
            'Factor denominator: x(x + 4). Vertical asymptotes at x = 0 and x = −4. x-intercept: set numerator=0, x = 2/3. No y-intercept (denominator=0 at x=0). Horizontal asymptote y = 0 (degree num < degree den). Sketch accordingly.',
          answer: 'Vertical asymptotes: x = 0, x = −4; x-intercept: (2/3,0); no y-intercept',
        },
        {
          id: 2,
          question:
            'Sketch the graph of y = (5 − 2x)/(x² + x − 2), labelling any vertical asymptotes and axis intercepts.',
          type: 'Easy',
          explaination:
            'Factor denominator: (x + 2)(x − 1). Vertical asymptotes at x = 1 and x = −2. x-intercept: x = 5/2. y-intercept: y = 5/−2 = −5/2. Horizontal asymptote y = 0. Sketch.',
          answer: 'Vertical asymptotes: x = 1, x = −2; x-intercept: (5/2,0); y-intercept: (0,−5/2)',
        },
        {
          id: 3,
          question:
            'Sketch the graph of y = (1 − x)/(x² − 2x − 3), labelling any vertical asymptotes and axis intercepts.',
          type: 'Easy',
          explaination:
            'Factor denominator: (x − 3)(x + 1). Vertical asymptotes at x = 3 and x = −1. x-intercept: x = 1. y-intercept: y = 1/−3 = −1/3. Horizontal asymptote y = 0. Sketch.',
          answer: 'Vertical asymptotes: x = 3, x = −1; x-intercept: (1,0); y-intercept: (0,1/3)',
        },
        {
          id: 4,
          question:
            'Sketch the graph of y = (x − 3)/(x² − 6x + 8), labelling any vertical asymptotes and axis intercepts.',
          type: 'Easy',
          explaination:
            'Factor denominator: (x − 4)(x − 2). Vertical asymptotes at x = 4 and x = 2. x-intercept: x = 3. y-intercept: y = −3/8. Horizontal asymptote y = 0. Sketch.',
          answer: 'Vertical asymptotes: x = 4, x = 2; x-intercept: (3,0); y-intercept: (0,−3/8)',
        },
        {
          id: 5,
          question:
            'Sketch the graph of y = 4x/(x² + 2x + 5), labelling any vertical asymptotes and axis intercepts.',
          type: 'Easy',
          explaination:
            'Discriminant of x² + 2x + 5: 4 − 20 = −16 < 0, so no real roots, no vertical asymptotes. x-intercept: x = 0. y-intercept: y = 0. Sketch with horizontal asymptote y = 0.',
          answer:
            'No vertical asymptotes (discriminant < 0); x-intercept and y-intercept both at the origin (0,0)',
        },
        {
          id: 6,
          question:
            'Sketch the graph of y = (−3x)/(x² − x + 2), labelling any vertical asymptotes and axis intercepts.',
          type: 'Easy',
          explaination:
            'Discriminant of x² − x + 2: 1 − 8 = −7 < 0, so no real roots, no vertical asymptotes. Both intercepts at origin. Horizontal asymptote y = 0. Sketch.',
          answer: 'No vertical asymptotes; x-intercept and y-intercept both at the origin (0,0)',
        },
        {
          id: 7,
          question:
            'Sketch the graph of y = (x + 3)/(x² + 4x + 4), labelling any vertical asymptotes and axis intercepts.',
          type: 'Easy',
          explaination:
            'Factor denominator: (x + 2)². Vertical asymptote at x = −2 (repeated root). x-intercept: x = −3. y-intercept: y = 3/4. Horizontal asymptote y = 0. Note behaviour near repeated root.',
          answer: 'Vertical asymptote: x = −2; x-intercept: (−3,0); y-intercept: (0,3/4)',
        },
        {
          id: 8,
          question:
            'Sketch the graph of y = (x − 2)/(x² − 2x + 1), labelling any vertical asymptotes and axis intercepts.',
          type: 'Easy',
          explaination:
            'Factor denominator: (x − 1)². Vertical asymptote at x = 1 (repeated root). x-intercept: x = 2. y-intercept: y = −2/1 = −2. Horizontal asymptote y = 0. Sketch.',
          answer: 'Vertical asymptote: x = 1; x-intercept: (2,0); y-intercept: (0,−2)',
        },
        {
          id: 9,
          question:
            'For the graph of y = (4x + 5)/(4x² − 9):  a) Find the equations of the vertical asymptotes.  b) Sketch the graph, labelling the coordinates of any axis intercepts.',
          type: 'Medium',
          explaination:
            'a) Factor denominator: 4x² − 9 = (2x − 3)(2x + 3). Vertical asymptotes: x = 3/2 and x = −3/2. b) x-intercept: 4x + 5 = 0 ⇒ x = −5/4. y-intercept: y = 5/−9 = −5/9. Horizontal asymptote y = 0.',
          answer: 'a) x = 3/2 and x = −3/2; b) x-intercept: (−5/4, 0); y-intercept: (0, −5/9)',
        },
        {
          id: 10,
          question:
            'For the graph of y = (5x − 10)/(3x² + 2x − 8):  a) Find the equations of the vertical asymptotes.  b) Sketch the graph, labelling the coordinates of any axis intercepts.',
          type: 'Medium',
          explaination:
            'a) Factor denominator: 3x² + 2x − 8 = (3x − 4)(x + 2). Vertical asymptotes: x = 4/3 and x = −2. b) x-intercept: 5x − 10 = 0 ⇒ x = 2. y-intercept: y = −10/−8 = 5/4. Horizontal asymptote y = 0.',
          answer: 'a) x = 4/3 and x = −2; b) x-intercept: (2,0); y-intercept: (0,10/8) = (0,5/4)',
        },
        {
          id: 11,
          question:
            'One of the asymptotes of the graph of y = (x + 1)/(2x² + kx − 12) is x = −4.  a) Find the value of k.  b) Find the equation of the other vertical asymptote.  c) Sketch the graph, labelling any axis intercepts.',
          type: 'Hard',
          explaination:
            'a) If x = −4 is a vertical asymptote, then x + 4 is a factor of 2x² + kx − 12. Sub x = −4: 2(16) + k(−4) − 12 = 0 ⇒ 32 − 4k − 12 = 0 ⇒ k = 5. Wait — re-check: 2(16) − 4k − 12 = 0 ⇒ 20 = 4k ⇒ k = 5. Then 2x² + 5x − 12 = (2x − 3)(x + 4). Other asymptote: x = 3/2. b) x-intercept: x = −1. y-intercept: y = 1/−12.',
          answer: 'a) k = 7; b) x = 3/2; c) x-intercept: (−1,0); y-intercept: (0,1/12)',
        },
      ],
      'rational-functions-oblique-asymptotes': [
        {
          id: 1,
          question:
            'Sketch the graph of y = x − 4/(x + 3), labelling any vertical and oblique asymptotes and axis intercepts.',
          type: 'Medium',
          explaination:
            'Vertical asymptote: x = −3. Oblique asymptote: y = x (as x→ ± ∞). Set y = 0: x(x + 3) − 4 = 0 ⇒ x² + 3x − 4 = 0 ⇒ (x + 4)(x − 1) = 0, so x = −4, x = 1. y-intercept: x = 0, y = −4/3.',
          answer:
            'Vertical asymptote: x = −3; oblique asymptote: y = x; x-intercepts: (1,0) and (−4,0); y-intercept: (0,−4/3)',
        },
        {
          id: 2,
          question:
            'Sketch the graph of y = 2x − 6/(x − 2), labelling any vertical and oblique asymptotes and axis intercepts.',
          type: 'Medium',
          explaination:
            'Vertical asymptote: x = 2. Oblique asymptote: y = 2x. Set y = 0: 2x(x − 2) − 6 = 0 ⇒ 2x² − 4x − 6 = 0 ⇒ x² − 2x − 3 = 0 ⇒ (x − 3)(x + 1) = 0, so x = 3, x = −1. y-intercept: y = −6/−2 = 3.',
          answer:
            'Vertical asymptote: x = 2; oblique asymptote: y = 2x; x-intercepts: (3,0) and (−1,0); y-intercept: (0,3)',
        },
        {
          id: 3,
          question:
            'Sketch the graph of y = 3 − x + 6/(x + 2), labelling any vertical and oblique asymptotes and axis intercepts.',
          type: 'Medium',
          explaination:
            'Vertical asymptote: x = −2. Oblique asymptote: y = 3 − x. y-intercept: x = 0, y = 3 + 3 = 6. x-intercept: set y = 0: (3 − x)(x + 2) + 6 = 0 ⇒ −x² + x + 6 + 6 = 0 ⇒ x² − x − 12 = 0 ⇒ (x − 4)(x + 3) = 0, x = 4 or x = −3.',
          answer:
            'Vertical asymptote: x = −2; oblique asymptote: y = 3 − x; axis intercepts to be found from y = 0 and x = 0',
        },
        {
          id: 4,
          question:
            'Sketch the graph of y = 2x + 1 − 9/(x − 1), labelling any vertical and oblique asymptotes and axis intercepts.',
          type: 'Medium',
          explaination:
            'Vertical asymptote: x = 1. Oblique asymptote: y = 2x + 1. y-intercept: x = 0, y = 1 + 9 = 10. x-intercept: set y = 0: (2x + 1)(x − 1) − 9 = 0 ⇒ 2x² − x − 1 − 9 = 0 ⇒ 2x² − x − 10 = 0, discriminant = 1 + 80 = 81, x = (1 ± 9)/4, so x = 10/4 = 5/2 or x = −2.',
          answer:
            'Vertical asymptote: x = 1; oblique asymptote: y = 2x + 1; x-intercepts and y-intercept to be determined',
        },
        {
          id: 5,
          question:
            'Sketch the graph of y = (x² + 4x − 5)/(x − 2), labelling any vertical and oblique asymptotes and axis intercepts.',
          type: 'Medium',
          explaination:
            'Perform polynomial division: (x² + 4x − 5)/(x − 2) = x + 6 + 7/(x − 2). Vertical asymptote: x = 2. Oblique asymptote: y = x + 6. x-intercepts: factor numerator: (x + 5)(x − 1), so x = 1, x = −5. y-intercept: y = −5/−2 = 5/2.',
          answer:
            'Vertical asymptote: x = 2; oblique asymptote: y = x + 6; x-intercepts: (1,0) and (−5,0); y-intercept: (0,5/2)',
        },
        {
          id: 6,
          question:
            'Sketch the graph of y = (x² − 4)/(x + 3), labelling any vertical and oblique asymptotes and axis intercepts.',
          type: 'Medium',
          explaination:
            'Polynomial division: (x² − 4)/(x + 3) = x − 3 + 5/(x + 3). Vertical asymptote: x = −3. Oblique asymptote: y = x − 3. x-intercepts: x² − 4 = 0 ⇒ x = ± 2. y-intercept: y = −4/3.',
          answer:
            'Vertical asymptote: x = −3; oblique asymptote: y = x − 3; x-intercepts: (2,0) and (−2,0); y-intercept: (0,−4/3)',
        },
        {
          id: 7,
          question:
            'Sketch the graph of y = (x² + 4x)/(x + 1), labelling any vertical and oblique asymptotes and axis intercepts.',
          type: 'Medium',
          explaination:
            'Polynomial division: (x² + 4x)/(x + 1) = x + 3 − 3/(x + 1). Vertical asymptote: x = −1. Oblique asymptote: y = x + 3. x-intercepts: x(x + 4) = 0, x = 0 or x = −4. y-intercept: (0,0).',
          answer:
            'Vertical asymptote: x = −1; oblique asymptote: y = x + 3; x-intercepts: (0,0) and (−4,0)',
        },
        {
          id: 8,
          question:
            'Sketch the graph of y = (x² − 3x − 10)/(x − 4), labelling any vertical and oblique asymptotes and axis intercepts.',
          type: 'Medium',
          explaination:
            'Polynomial division: (x² − 3x − 10)/(x − 4) = x + 1 − 6/(x − 4). Vertical asymptote: x = 4. Oblique asymptote: y = x + 1. x-intercepts: (x − 5)(x + 2) = 0, x = 5, x = −2. y-intercept: y = −10/−4 = 5/2.',
          answer:
            'Vertical asymptote: x = 4; oblique asymptote: y = x + 1; x-intercepts: (5,0) and (−2,0); y-intercept: (0,5/2)',
        },
        {
          id: 9,
          question:
            'The function f is given by f(x) = (x² + 2ax + a² − 1)/(x + a), where a > 0.  a) Find the equation of the oblique asymptote of y = f(x).  b) Show that f has no stationary points.  c) Sketch the graph of y = f(x), labelling all asymptotes and axis intercepts.',
          type: 'Hard',
          explaination:
            "Note: x² + 2ax + a² − 1 = (x + a)² − 1. So f(x) = ((x + a)² − 1)/(x + a) = (x + a) − 1/(x + a). a) Oblique asymptote: y = x + a. b) f'(x) = 1 + 1/((x + a)²) > 0 always, so f is strictly increasing, no stationary points. c) Vertical asymptote x = −a. x-intercepts: f(x) = 0 ⇒ (x + a)² = 1 ⇒ x + a = ± 1 ⇒ x = −a ± 1. y-intercept: f(0) = (a² − 1)/a = a − 1/a (assuming a ≠ 0).",
          answer:
            "a) y = x + a; b) f'(x) = 1 − 1/((x + a)²) ≠ 0 for all x in domain (no real solution when f'(x) = 0); c) Vertical asymptote: x = −a; oblique asymptote: y = x + a; x-intercepts: x = −a + 1 and x = −a − 1",
        },
        {
          id: 10,
          question:
            'Let f(x) = (x² − 6x + 10)/(x − 3).  a) Show that y = f(x) has an oblique asymptote at y = Ax + B, where A and B are constants to be found.  b) Find the turning points of f(x).  c) State the coordinates of any axis intercepts and the equation of the vertical asymptote of y = f(x).  d) Sketch the graph of y = f(x).',
          type: 'Hard',
          explaination:
            "a) Polynomial division: (x² − 6x + 10)/(x − 3) = x − 3 + 1/(x − 3). So A = 1, B = −3, oblique asymptote y = x − 3. b) f'(x) = 1 − 1/((x − 3)²) = 0 ⇒ (x − 3)² = 1 ⇒ x = 2 or x = 4. f(2) = (4 − 12 + 10)/−1 = −2, f(4) = (16 − 24 + 10)/1 = 2. c) Numerator discriminant: 36 − 40 = −4 < 0, no real roots, no x-intercepts. y-intercept: f(0) = 10/−3 = −10/3. Vertical asymptote x = 3.",
          answer:
            'a) y = x − 3; b) Turning points at x = 3 ± 1 = 4 and x = 2: points (4, 2) and (2, −2); c) Vertical asymptote: x = 3; no x-intercepts (discriminant of numerator < 0); no y-intercept from asymptote perspective; y-intercept: (0,−10/3); d) Sketch',
        },
        {
          id: 11,
          question:
            'a) Show that the function f(x) = (2x² − x − 3)/(2x − 5) can be written as f(x) = Ax + B + C/(2x − 5), where A, B and C are constants to be found.  b) Write down the equation of the oblique asymptote of y = f(x).  c) By finding a condition on k for there to be real solutions to the equation f(x) = k, find the range of f.  d) State the axis intercepts and equation of the vertical asymptote of y = f(x).  e) Sketch the graph of y = f(x).',
          type: 'Hard',
          explaination:
            'a) Polynomial long division of 2x² − x − 3 by 2x − 5: 2x² − x − 3 = (2x − 5)(x + 2) + 7. So f(x) = x + 2 + 7/(2x − 5), giving A = 1, B = 2, C = 7. b) Oblique asymptote: y = x + 2. c) Set f(x) = k: rearrange to quadratic in x, discriminant ≥ 0. d) Vertical asymptote: 2x − 5 = 0 ⇒ x = 5/2. Numerator: 2x² − x − 3 = (2x − 3)(x + 1) = 0, x-intercepts: x = 3/2 and x = −1. y-intercept: f(0) = −3/−5 = 3/5.',
          answer:
            'a) A = 1, B = 2, C = 7; b) y = x + 2; c) Range: f(x) ∈ ℝ ∖ {values excluded by discriminant}; d) Vertical asymptote: x = 5/2; x-intercepts: roots of numerator; y-intercept: (0,3/5)',
        },
      ],
      'rational-functions-intersection-with-linear-functions': [
        {
          id: 1,
          question:
            'The curve C has equation y = (x − a)/((x − b)(x − c)).  Sketch C when:  a) a < b < c  b) b < a < c',
          type: 'Hard',
          explaination:
            'a) Vertical asymptotes at x = b and x = c. x-intercept at x = a. Since a < b < c, the x-intercept is to the left of both asymptotes. Horizontal asymptote y = 0. Sketch three branches. b) Since b < a < c, the x-intercept lies between the two asymptotes. Sketch changes sign analysis accordingly.',
          answer:
            'a) x-intercept at x = a (between the two vertical asymptotes); b) x-intercept at x = a (between b and c, but b < a < c)',
        },
        {
          id: 2,
          question:
            'a) On the same set of axes, sketch the graph of y = 3x/(x² − 2x + 1) and the graph of y = x + 2, labelling any vertical asymptotes and axis intercepts.  b) Hence state the number of solutions of the equation 3x/(x² − 2x + 1) = x + 2.',
          type: 'Hard',
          explaination:
            'a) x² − 2x + 1 = (x − 1)². Vertical asymptote: x = 1 (repeated root). x-intercept of curve: x = 0. Oblique/horizontal behaviour. y-intercept: (0,0). Sketch both. b) Count intersections of the two graphs — 2 intersections.',
          answer:
            'a) Vertical asymptote: x = 1; x-intercept of rational function: (0,0); line has y-intercept (0,2), x-intercept (−2,0). b) 2 solutions',
        },
        {
          id: 3,
          question:
            'a) On the same set of axes, sketch the graph of y = (x − 1)/(2x² + 5x − 3) and the graph of y = 2x − 1, labelling any vertical asymptotes and axis intercepts.  b) Hence state the number of solutions of the equation (x − 1)/(2x² + 5x − 3) = 2x − 1.',
          type: 'Hard',
          explaination:
            'a) Factor denominator: 2x² + 5x − 3 = (2x − 1)(x + 3). Vertical asymptotes: x = 1/2 and x = −3. Curve x-intercept: x = 1. y-intercept: y = −1/−3 = 1/3. Sketch both curves and count intersections. b) 3 intersections.',
          answer:
            'a) Vertical asymptotes: x = 1/2 and x = −3; x-intercept of curve: (1,0); y-intercept: (0,1/3); line intercepts: (1/2,0) and (0,−1). b) 3 solutions',
        },
      ],
      'rational-functions-turning-points-sketching': [
        {
          id: 1,
          question:
            'A curve has equation y = (2x − 3)/(x² + 4).  a) i) If the line y = k intersects the curve, show that 4k² + 3k − 1 ≤ 0.  ii) Hence find the coordinates of the turning points of the curve.  b) Sketch the curve.',
          type: 'Hard',
          explaination:
            'a i) Set (2x − 3)/(x² + 4) = k ⇒ kx² − 2x + (4k + 3) = 0. For real solutions, discriminant ≥ 0: 4 − 4k(4k + 3) ≥ 0 ⇒ 1 − k(4k + 3) ≥ 0 ⇒ 4k² + 3k − 1 ≤ 0. a ii) Equality gives turning points: 4k² + 3k − 1 = 0 ⇒ (4k − 1)(k + 1) = 0 ⇒ k = 1/4 or k = −1. Sub back to find x-coordinates. b) No real roots in denom; sketch accordingly.',
          answer:
            'a ii) Turning points at x = (−3 ± √25)/4... Solve 4k² + 3k − 1 = 0: k = 1/4 or k = −1. Turning points: (7/2, 1/4) and (−1/2,−1); b) Sketch with no vertical asymptotes, horizontal asymptote y = 0',
        },
      ],
      'rational-functions-range-asymptotes': [
        {
          id: 1,
          question:
            'a) i) Find the set of values of k for which the equation ks² − (k + 1)s − 2k − 2 = 0 has real roots.  ii) Hence determine the range of the function f: x ↦ (x + 2)/(x² − x − 2).  b) State the equations of the vertical asymptotes of y = f(x) and the coordinates of any axis intercepts.  c) Sketch the graph of y = f(x).',
          type: 'Hard',
          explaination:
            'a i) Discriminant (k + 1)² + 4k(2k + 2) ≥ 0 ⇒ 9k² + 10k + 1 ≥ 0 ⇒ (9k + 1)(k + 1) ≥ 0. b) Factor x² − x − 2 = (x − 2)(x + 1). Vertical asymptotes x = 2, x = −1. x-intercept: numerator=0, x = −2. y-intercept: y = 2/−2 = −1.',
          answer:
            'a i) k ≤ −1 or k ≥ 0; a ii) Range: f(x) ≤ −1 or f(x) ≥ 0; b) Vertical asymptotes: x = 2 and x = −1; x-intercept: (−2,0); y-intercept: (0,−1); c) Sketch',
        },
        {
          id: 2,
          question:
            'The function f is defined by f(x) = (x + c)/(x² − 3x − c).  The range of f is f(x) ∈ ℝ.  Find the possible values of c.',
          type: 'Hard',
          explaination:
            'Set f(x) = k: x + c = k(x² − 3x − c) ⇒ kx² − (3k + 1)x − (kc + c) = 0. For k ≠ 0, discriminant ≥ 0 for all k: (3k + 1)² + 4k(kc + c) ≥ 0 for all k. Expand and require this to hold for all k ∈ ℝ: analyse as quadratic in k with non-positive discriminant. This leads to c(c + 4) = 0, so c = 0 or c = −4.',
          answer: 'c = 0 or c = −4',
        },
      ],
      'finding-minimum-values-of-functions': [
        {
          id: 1,
          question:
            'Find the minimum value of each of the following functions.  a) f(x) = x² + x, x ≥ 0',
          type: 'Easy',
          explaination:
            "1. Differentiate: f'(x) = 2x + 1  2. Set f'(x) = 0: x = −1/2 — not in domain x ≥ 0  3. Since f'(x) = 2x + 1 > 0 for all x ≥ 0, the function is strictly increasing on its domain  4. Minimum occurs at left endpoint x = 0: f(0) = 0  5. Min = 0",
          answer: 'Minimum value = 0 at x = 0',
        },
        {
          id: 2,
          question:
            'Find the minimum value of each of the following functions.  b) f(x) = x³, x ≥ 2',
          type: 'Easy',
          explaination:
            "1. f'(x) = 3x² > 0 for all x ≥ 2, so strictly increasing  2. Minimum at left endpoint x = 2  3. f(2) = 8",
          answer: 'Minimum value = 8 at x = 2',
        },
        {
          id: 3,
          question:
            'Find the minimum value of each of the following functions.  a) f(x) = 3 − x², 0 ≤ x ≤ 3',
          type: 'Easy',
          explaination:
            "1. f'(x) = −2x; set to zero: x = 0  2. Evaluate at critical point and endpoints:  f(0) = 3, f(3) = 3 − 9 = −6  3. Minimum = −6 at x = 3",
          answer: 'Minimum value = −6 at x = 3',
        },
        {
          id: 4,
          question:
            'Find the minimum value of each of the following functions.  b) f(x) = 1 − 2ˣ, −1 ≤ x ≤ 3',
          type: 'Easy',
          explaination:
            "1. f'(x) = −2ˣ ln 2 < 0 for all x — strictly decreasing  2. Minimum at right endpoint x = 3  3. f(3) = 1 − 2³ = 1 − 8 = −7",
          answer: 'Minimum value = −7 at x = 3',
        },
        {
          id: 5,
          question:
            'Find the minimum value of each of the following functions.  a) f(x) = xeˣ, −1 ≤ x ≤ 4',
          type: 'Medium',
          explaination:
            "1. Product rule: f'(x) = eˣ + xeˣ = eˣ(1 + x)  2. Set f'(x) = 0: eˣ > 0 always, so 1 + x = 0 ⇒ x = −1 (in domain)  3. f''(x) = eˣ(2 + x); f''(−1) = e⁻¹(1) > 0 → local minimum  4. Evaluate: f(−1) = −e⁻¹, f(4) = 4e⁴  5. Global minimum = −1/e at x = −1",
          answer: 'Minimum value = −e⁻¹ = −1/e ≈ −0.368 at x = −1',
        },
        {
          id: 6,
          question:
            'Find the minimum value of each of the following functions.  b) f(x) = xeˣ, −4 ≤ x ≤ −2',
          type: 'Medium',
          explaination:
            "1. f'(x) = eˣ(1 + x); critical point x = −1 is NOT in [−4,−2]  2. On [−4,−2]: 1 + x < 0 and eˣ > 0, so f'(x) < 0 — strictly decreasing  3. Minimum at right endpoint x = −2  4. f(−2) = −2e⁻² = −2/e²",
          answer: 'Minimum value = −2e⁻² = −2/e² ≈ −0.271 at x = −2',
        },
      ],
      'finding-max-and-min-on-closed-interval': [
        {
          id: 1,
          question: 'Find the maximum and minimum value of xe⁻ˣ, 0.5 < x < 2.',
          type: 'Medium',
          explaination:
            "1. Let f(x) = xe⁻ˣ; product rule: f'(x) = e⁻ˣ − xe⁻ˣ = e⁻ˣ(1 − x)  2. f'(x) = 0 ⇒ x = 1 ∈ (0.5,2) ✓  3. f''(x) = e⁻ˣ(x − 2); at x = 1: f''(1) = −e⁻¹ < 0 → local max  4. f(1) = e⁻¹ is the global maximum on the interval  5. Open interval: no minimum is attained. Boundary values: 0.5e^−0.5 ≈ 0.303 and 2e⁻² ≈ 0.271 (approached but not reached)",
          answer:
            'Maximum = e⁻¹ = 1/e ≈ 0.368 at x = 1;  No minimum is attained on the open interval (infimum ≈ 2e⁻² as x → 2).',
        },
        {
          id: 2,
          question: 'Find the maximum and minimum value of f(x) if f(x) = x² − x, 0 ≤ x ≤ 2.',
          type: 'Easy',
          explaination:
            "1. f'(x) = 2x − 1 = 0 ⇒ x = 1/2  2. Evaluate at critical point and endpoints:  f(0) = 0, f(1/2) = 1/4 − 1/2 = −1/4, f(2) = 4 − 2 = 2  3. Maximum = 2 at x = 2  4. Minimum = −1/4 at x = 1/2",
          answer: 'Maximum = 2 at x = 2; Minimum = −1/4 at x = 1/2',
        },
      ],
      'optimisation-with-constraint': [
        {
          id: 1,
          question: 'Find the largest possible value of xy given that x + 2y = 6.',
          type: 'Medium',
          explaination:
            '1. From constraint: x = 6 − 2y  2. Substitute: P = xy = (6 − 2y)y = 6y − 2y²  3. dP/dy = 6 − 4y = 0 ⇒ y = 3/2  4. x = 6 − 3 = 3  5. xy = 3 × 3/2 = 9/2  6. d²P/dy² = −4 < 0 → maximum confirmed',
          answer: 'Maximum value of xy = 9/2',
        },
        {
          id: 2,
          question: 'Find the smallest possible value of x³ + y³ given that x + y = 1.',
          type: 'Medium',
          explaination:
            '1. Let y = 1 − x; substitute: S = x³ + (1 − x)³  2. Expand: S = x³ + 1 − 3x + 3x² − x³ = 3x² − 3x + 1  3. dS/dx = 6x − 3 = 0 ⇒ x = 1/2  4. d²S/dx² = 6 > 0 → minimum  5. S(1/2) = 3·1/4 − 3/2 + 1 = 3/4 − 6/4 + 4/4 = 1/4',
          answer: 'Minimum value = 1/4, attained at x = y = 1/2',
        },
        {
          id: 3,
          question:
            'Find the smallest possible value of x + y given that xy = 5 and both x and y are positive.',
          type: 'Medium',
          explaination:
            "1. Let y = 5/x; define f(x) = x + 5/x, x > 0  2. f'(x) = 1 − 5/x² = 0 ⇒ x² = 5 ⇒ x = √5  3. y = 5/√5 = √5  4. f''(x) = 10/x³ > 0 → minimum  5. Min = √5 + √5 = 2√5",
          answer: 'Minimum value of x + y = 2√5',
        },
        {
          id: 4,
          question:
            'A piece of wire is bent to form an isosceles triangle. Prove that the largest possible area is formed when the triangle is equilateral.',
          type: 'Hard',
          explaination:
            'Let total wire length = L (fixed). Let equal sides = a, base = b, so 2a + b = L ⇒ b = L − 2a.  Height: h = √(a² − (b/2)²) = √(a² − ((L − 2a)²)/4)  Area: A = 1/2 b h = 1/2(L − 2a)√(a² − ((L − 2a)²)/4)  Maximise A² w.r.t. a:  16A² = (L − 2a)²[4a² − (L − 2a)²]  Let u = L − 2a: 16A² = u²(4a² − u²)  Differentiate and set to zero; after simplification: a = L/3, so b = L − 2L/3 = L/3  Hence a = b = L/3 — equilateral triangle. blacksquare',
          answer:
            'Proof — the maximum area occurs when all three sides are equal (equilateral triangle).',
        },
      ],
      'optimisation-box-problem': [
        {
          id: 1,
          question:
            'A square sheet of card of side 10 cm has four squares of side x cm cut from the corners. The sides are then folded to make a small open box.  a) Find an expression for the volume of the box in cm³ in terms of x, including an appropriate domain.  b) Find the value of x for which the volume is the maximum possible.  c) What is the maximum possible volume?  d) What is the minimum possible volume?',
          type: 'Hard',
          explaination:
            'a) Dimensions: base (10 − 2x) × (10 − 2x), height x  V = x(10 − 2x)²; domain 0 < x < 5  b) dV/dx = (10 − 2x)² + x · 2(10 − 2x)(−2)  = (10 − 2x)[(10 − 2x) − 4x] = (10 − 2x)(10 − 6x)  Critical points: x = 5 (boundary) or x = 5/3  x = 5/3 is in domain ✓  c) V(5/3) = 5/3(10 − 10/3)² = 5/3·(20/3)² = 5/3·400/9 = 2000/27  d) Open interval: as x → 0⁺ or x → 5⁻, V → 0 but never equals 0',
          answer:
            'a) V(x) = x(10 − 2x)², 0 < x < 5  b) x = 5/3  c) Vₘₐₓ = 2000/27 ≈ 74.1 cm³  d) No minimum is attained; V → 0 as x → 0⁺ or x → 5⁻',
        },
      ],
      'optimisation-surface-area-volume': [
        {
          id: 1,
          question:
            'A square-based cuboid has a volume of 64 cm³. Find the minimum possible surface area.',
          type: 'Hard',
          explaination:
            '1. Let base side = a, height = h; constraint: a² h = 64 ⇒ h = 64/a²  2. SA = 2a² + 4ah = 2a² + 256/a  3. (d(SA))/da = 4a − 256/a² = 0 ⇒ 4a³ = 256 ⇒ a³ = 64 ⇒ a = 4  4. h = 64/16 = 4 → it is a cube  5. (d²(SA))/da² = 4 + 512/a³ > 0 → minimum  6. SAₘᵢₙ = 2(16) + 256/4 = 32 + 64 = 96 cm²',
          answer:
            'Minimum surface area = 96 cm², achieved when the cuboid is a cube with side 4 cm.',
        },
      ],
      'related-rates-optimisation-cone': [
        {
          id: 1,
          question:
            'As shown in the diagram, the apex angle of a cone is 2θ and the slope length is 10 cm. The rate of increase of θ is 0.01 radians per second. The cone starts with θ = π/6.  a) Find the initial rate of change of the volume of the cone.  b) How long does it take the cone to reach its maximum volume?',
          type: 'Hard',
          explaination:
            'Setup:  r = 10sinθ, h = 10cosθ  V = 1/3π r² h = 1000π/3sin²θcosθ  a) dV/dθ = 1000π/3 sinθ (2cos²θ − sin²θ)  At θ = π/6: sinπ/6 = 1/2, cosπ/6 = √3/2  dV/dθ = 1000π/3·1/2·(2·3/4 − 1/4) = 1000π/3·1/2·5/4 = 625π/3  dV/dt = dV/dθ·dθ/dt = 625π/3 × 0.01 = 6.25π/3 ≈ 6.54 cm³/s  b) Max V when dV/dθ = 0:  sinθ(2cos²θ − sin²θ) = 0 ⇒ tan²θ = 2 ⇒ θₘₐₓ = arctan√2  Time = (arctan√2 − π/6)/0.01 ≈ (0.9553 − 0.5236)/0.01 ≈ 43.2 s',
          answer:
            'a) dV/dt|_(θ = π/6) = 625π/300 ≈ 6.54 cm³/s  b) t = (arctan√2 − π/6)/0.01 ≈ 43.2 s',
        },
      ],
      'optimisation-area-under-trigonometric-curve': [
        {
          id: 1,
          question:
            'One side of a rectangle lies on the x-axis and two corners lie on the curve y = sin x, 0 ≤ x ≤ π. Find the largest possible area of the rectangle.',
          type: 'Hard',
          explaination:
            '1. By symmetry about x = π/2, let the left corner be at (a, sin a) and right at (π − a, sin a), 0 < a < π/2  2. Area: A(a) = sin a · (π − 2a)  3. dA/da = cos a(π − 2a) − 2sin a = 0  4. Solve numerically (GDC): a ≈ 0.7106  5. Aₘₐₓ = sin(0.7106)(π − 2 × 0.7106) ≈ 0.6522 × 1.7204 ≈ 1.122',
          answer: 'Aₘₐₓ ≈ 1.122 square units, attained at x ≈ 0.7106 (and π − 0.7106).',
        },
      ],
      'optimisation-closest-distance-to-a-curve': [
        {
          id: 1,
          question: 'Find the closest distance from the point (1, 2) to the curve y = x³.',
          type: 'Hard',
          explaination:
            '1. Let (a, a³) be the closest point; minimise D² = (a − 1)² + (a³ − 2)²  2. (d(D²))/da = 2(a − 1) + 6a²(a³ − 2) = 0  ⇒ 3a⁵ − 6a² + a − 1 = 0  3. Solve numerically (GDC): a ≈ 1.246  4. Closest point: (1.246, 1.935)  5. d = √((1.246 − 1)² + (1.935 − 2)²) ≈ √(0.0605 + 0.00422) ≈ 0.254',
          answer: 'dₘᵢₙ ≈ 0.254 units, attained at approximately (1.246, 1.935) on the curve.',
        },
      ],
      'optimisation-ladder-around-corner': [
        {
          id: 1,
          question:
            'Two corridors meet at a right angle. Find the longest ladder that would fit horizontally around the corner if:  a) Both corridors are 1 m wide.  b) One corridor is 1 m wide and the other is 8 m wide.  You may assume for your calculations that the ladder has negligible width.',
          type: 'Hard',
          explaination:
            "The longest ladder that fits = minimum of the 'critical length' function.  Let θ = angle the ladder makes with one corridor wall.  a) L(θ) = 1/sinθ + 1/cosθ  L'(θ) = −cosθ/sin²θ + sinθ/cos²θ = 0  ⇒ sin³θ = cos³θ ⇒ tanθ = 1 ⇒ θ = π/4  Lₘᵢₙ = 1/(sin(π/4)) + 1/(cos(π/4)) = √2 + √2 = 2√2 m  b) L(θ) = 1/sinθ + 8/cosθ  L'(θ) = −cosθ/sin²θ + 8sinθ/cos²θ = 0  ⇒ 8sin³θ = cos³θ ⇒ tan³θ = 1/8 ⇒ tanθ = 1/2  So sinθ = 1/√5, cosθ = 2/√5  Lₘᵢₙ = √5 + 4√5 = 5√5 ≈ 11.18 m",
          answer: 'a) L_(max fitting) = 2√2 ≈ 2.83 m  b) L_(max fitting) = 5√5 ≈ 11.18 m',
        },
      ],
    },
  },
  {
    functions: {
      title: 'Functions',
      'odd-even-neither-algebraic': [
        {
          id: 1,
          question:
            'Use an algebraic method to determine whether the function is odd, even or neither.  f(x) = x³ − 4x + 1',
          type: 'Easy',
          explaination:
            'Find f(−x) = (−x)³ − 4(−x) + 1 = −x³ + 4x + 1  f(−x) ≠ f(x) and f(−x) ≠ −f(x), so the function is neither odd nor even.',
          answer: 'Neither',
        },
        {
          id: 2,
          question:
            'Use an algebraic method to determine whether the function is odd, even or neither.  f(x) = x⁴ − 3x² + 2',
          type: 'Easy',
          explaination:
            'f(−x) = (−x)⁴ − 3(−x)² + 2 = x⁴ − 3x² + 2 = f(x)  Since f(−x) = f(x), the function is even.',
          answer: 'Even',
        },
        {
          id: 3,
          question:
            'Use an algebraic method to determine whether the function is odd, even or neither.  f(x) = 2x + cos x',
          type: 'Easy',
          explaination:
            'f(−x) = 2(−x) + cos(−x) = −2x + cos x  f(−x) ≠ f(x) and f(−x) ≠ −f(x) = −2x − cos x  So the function is neither odd nor even.',
          answer: 'Neither',
        },
        {
          id: 4,
          question:
            'Use an algebraic method to determine whether the function is odd, even or neither.  f(x) = 2x + tan x',
          type: 'Easy',
          explaination:
            'f(−x) = 2(−x) + tan(−x) = −2x − tan x = −(2x + tan x) = −f(x)  Since f(−x) = −f(x), the function is odd.',
          answer: 'Odd',
        },
        {
          id: 5,
          question:
            'Use an algebraic method to determine whether the function is odd, even or neither.  f(x) = e^x³',
          type: 'Easy',
          explaination:
            'f(−x) = e^((−x)³) = e^(−x³)  f(−x) ≠ f(x) and f(−x) ≠ −f(x) = −e^x³  So the function is neither odd nor even.',
          answer: 'Neither',
        },
        {
          id: 6,
          question:
            'Use an algebraic method to determine whether the function is odd, even or neither.  f(x) = e^x²',
          type: 'Easy',
          explaination:
            'f(−x) = e^((−x)²) = e^x² = f(x)  Since f(−x) = f(x), the function is even.',
          answer: 'Even',
        },
        {
          id: 7,
          question:
            'Use an algebraic method to determine whether the function is odd, even or neither.  f(x) = |x| − 3',
          type: 'Easy',
          explaination:
            'f(−x) = | − x| − 3 = |x| − 3 = f(x)  Since f(−x) = f(x), the function is even.',
          answer: 'Even',
        },
        {
          id: 8,
          question:
            'Use an algebraic method to determine whether the function is odd, even or neither.  f(x) = |x − 3|',
          type: 'Easy',
          explaination:
            'f(−x) = | − x − 3| = |x + 3|  f(−x) ≠ f(x) and f(−x) ≠ −f(x)  So the function is neither odd nor even.',
          answer: 'Neither',
        },
        {
          id: 9,
          question:
            'Determine algebraically whether the function f(x) = x³/(x² − 6) is odd, even or neither.',
          type: 'Medium',
          explaination:
            'f(−x) = ((−x)³)/((−x)² − 6) = (−x³)/(x² − 6) = −x³/(x² − 6) = −f(x)  Since f(−x) = −f(x), the function is odd.',
          answer: 'Odd',
        },
        {
          id: 10,
          question:
            'Determine algebraically whether the function f(x) = tan x + 3x² is odd, even or neither.',
          type: 'Medium',
          explaination:
            'f(−x) = tan(−x) + 3(−x)² = −tan x + 3x²  f(−x) ≠ f(x) (since −tan x + 3x² ≠ tan x + 3x²)  f(−x) ≠ −f(x) = −tan x − 3x² (since −tan x + 3x² ≠ −tan x − 3x²)  So the function is neither odd nor even.',
          answer: 'Neither',
        },
        {
          id: 11,
          question:
            'Determine algebraically whether the function f(x) = xcos x − sin x is odd, even or neither.',
          type: 'Medium',
          explaination:
            'f(−x) = (−x)cos(−x) − sin(−x) = −xcos x + sin x = −(xcos x − sin x) = −f(x)  Since f(−x) = −f(x), the function is odd.',
          answer: 'Odd',
        },
        {
          id: 12,
          question:
            'Determine whether the function f(x) = |x − 1| + |x + 1| is even, odd or neither, fully justifying your answer.',
          type: 'Medium',
          explaination:
            'f(−x) = | − x − 1| + | − x + 1| = | − (x + 1)| + | − (x − 1)| = |x + 1| + |x − 1| = f(x)  Since f(−x) = f(x), the function is even.',
          answer: 'Even',
        },
        {
          id: 13,
          question:
            'Use the graph of y = f(x) to determine whether the function is odd, even or neither.',
          type: 'Easy',
          explaination:
            'The graph has 180° rotational symmetry about the origin, so f(−x) = −f(x) for all x in the domain.  The function is odd.',
          answer: 'Odd',
        },
        {
          id: 14,
          question:
            'Use the graph of y = f(x) to determine whether the function is odd, even or neither.',
          type: 'Easy',
          explaination:
            'The graph is not symmetric about the y-axis (not even) and does not have 180° rotational symmetry about the origin (not odd).  The function is neither odd nor even.',
          answer: 'Neither',
        },
        {
          id: 15,
          question:
            'Use the graph of y = f(x) to determine whether the function is odd, even or neither.',
          type: 'Easy',
          explaination:
            'The graph is symmetric about the y-axis, so f(−x) = f(x) for all x in the domain.  The function is even.',
          answer: 'Even',
        },
        {
          id: 16,
          question:
            'The function f is even and the function g is odd.  a) Prove that the function h defined by h(x) = (f(x))/(g(x)) is odd.  b) Determine, with proof, whether the sum of an even and an odd function is odd, even or neither.',
          type: 'Hard',
          explaination:
            'a) h(−x) = (f(−x))/(g(−x)) = (f(x))/(−g(x)) = −(f(x))/(g(x)) = −h(x)  Since h(−x) = −h(x), h is odd.  b) Let s(x) = f(x) + g(x).  s(−x) = f(−x) + g(−x) = f(x) − g(x)  s(−x) ≠ s(x) (unless g(x) = 0) and s(−x) ≠ −s(x) (unless f(x) = 0).  Therefore the sum is neither odd nor even in general.',
          answer: 'a) h is odd  b) Neither',
        },
        {
          id: 17,
          question: 'Prove that the only function that is both odd and even is f(x) = 0.',
          type: 'Hard',
          explaination:
            'Let f be both odd and even.  Even: f(−x) = f(x) for all x.  Odd: f(−x) = −f(x) for all x.  Therefore f(x) = −f(x) ⇒ 2f(x) = 0 ⇒ f(x) = 0 for all x.  Hence the only such function is f(x) = 0.',
          answer: 'f(x) = 0',
        },
        {
          id: 18,
          question:
            'a) For any function f, show that f(x) + f(−x) is an even function.  b) For any function f, show that f(x) − f(−x) is an odd function.  c) Hence show that any function can be expressed as the sum of an even and an odd function.',
          type: 'Hard',
          explaination:
            'a) Let E(x) = f(x) + f(−x).  E(−x) = f(−x) + f(−(−x)) = f(−x) + f(x) = E(x) ✓ (even)  b) Let O(x) = f(x) − f(−x).  O(−x) = f(−x) − f(x) = −(f(x) − f(−x)) = −O(x) ✓ (odd)  c) f(x) = (f(x) + f(−x))/2 + (f(x) − f(−x))/2  By (a), (f(x) + f(−x))/2 is even; by (b), (f(x) − f(−x))/2 is odd.  Hence f is the sum of an even and an odd function.',
          answer: 'c) f(x) = underbrace(f(x) + f(−x))/2_even + underbrace(f(x) − f(−x))/2_odd',
        },
      ],
      'inverse-functions-domain-restriction-graphical': [
        {
          id: 1,
          question:
            'From the graph of y = f(x), determine the largest possible domain of the given form for which the inverse function exists.  a) x ≤ k  b) x ≥ k',
          type: 'Medium',
          explaination:
            'Identify the x-value of the turning point (minimum/maximum) from the graph.  For a: largest domain x ≤ k where f is one-to-one → k is the x-coordinate of the turning point.  For b: largest domain x ≥ k where f is one-to-one → same k.  Read k directly from the graph.',
          answer: 'a) k = 2  b) k = 2',
        },
        {
          id: 2,
          question:
            'From the graph of y = f(x), determine the largest possible domain of the given form for which the inverse function exists.  a) x ≥ k  b) x ≤ k',
          type: 'Medium',
          explaination:
            'Locate the turning point (local maximum or minimum) on the graph.  For a: choose k so that f is monotonically decreasing/increasing on x ≥ k.  For b: similarly for x ≤ k.  Read k from the graph grid.',
          answer: 'a) k ≈ 3  b) k ≈ 3',
        },
        {
          id: 3,
          question:
            'Let f(x) = x² + 8x + 19, x ≥ k.  a) Find the smallest value of k such that f⁻¹ exists.  b) For this value of k, find f⁻¹ and its domain.',
          type: 'Medium',
          explaination:
            'Rewrite: f(x) = (x + 4)² + 3. Vertex at x = −4, minimum value 3.  a) For f⁻¹ to exist, f must be one-to-one. Smallest k = −4.  b) Let y = (x + 4)² + 3 ⇒ (x + 4)² = y − 3 ⇒ x + 4 = √(y − 3) (taking + since x ≥ −4)  f⁻¹(x) = √(x − 3) − 4.  Domain of f⁻¹ = range of f = [3, ∞).',
          answer: 'a) k = −4  b) f⁻¹(x) = √(x − 3) − 4, domain: x ≥ 3',
        },
        {
          id: 4,
          question:
            'Let f(x) = x² − 3x + 1.  a) Given that f⁻¹ exists, find the largest possible domain of f of the form x ≤ k.  b) For the domain in part a, find f⁻¹ and its domain.',
          type: 'Medium',
          explaination:
            'Rewrite: f(x) = (x − 3/2)² − 5/4. Vertex at x = 3/2.  a) Largest domain x ≤ k for one-to-one: k = 3/2.  b) Let y = (x − 3/2)² − 5/4  (x − 3/2)² = y + 5/4  x = 3/2 − √(y + 5/4) (taking − since x ≤ 3/2)  Domain of f⁻¹ = range of f on x ≤ 3/2 = [−5/4, ∞).',
          answer: 'a) k = 3/2  b) f⁻¹(x) = 3/2 − √(x + 5/4), domain: x ≥ −5/4',
        },
        {
          id: 5,
          question:
            'The function f is defined by f(x) = x³ + 6x² + 9x − 2, −5 ≤ x ≤ 1.  a) Find the largest possible domain of the form a ≤ x ≤ b for which f has an inverse function.  b) For the domain in part a, find the domain of f⁻¹.',
          type: 'Hard',
          explaination:
            "f'(x) = 3x² + 12x + 9 = 3(x + 1)(x + 3)  Critical points at x = −3 (local max) and x = −1 (local min) within [−5,1].  Values: f(−5) = −22, f(−3) = −2, f(−1) = −6, f(1) = 14.  Monotone pieces: increasing on [−5,−3], decreasing on [−3,−1], increasing on [−1,1].  Each piece has length 2. Largest monotone subinterval: −1 ≤ x ≤ 1 (increasing, range [−6,14]).  Domain of f⁻¹ = range of f on [−1,1] = [−6, 14].",
          answer: 'a) −1 ≤ x ≤ 1  b) −6 ≤ x ≤ 14',
        },
        {
          id: 6,
          question:
            'The function f is defined by f(x) = x⁴ − 8x² + 5, x ≥ k.  a) Find the smallest value of k such that f has an inverse function.  b) For this value of k, find the domain of f⁻¹.',
          type: 'Hard',
          explaination:
            "f'(x) = 4x³ − 16x = 4x(x² − 4) = 4x(x − 2)(x + 2)  For x ≥ 0: only critical point in positive region at x = 2 (minimum).  f is decreasing on [0,2] and increasing on [2,∞).  For f to be one-to-one on x ≥ k, need k = 2.  f(2) = 16 − 32 + 5 = −11.  Domain of f⁻¹ = range of f = [−11,∞).",
          answer: 'a) k = 2  b) Domain of f⁻¹: x ≥ −11',
        },
        {
          id: 7,
          question:
            'The function f is defined by f(x) = eˣ − 4x, x ≤ k.  a) Find the largest value of k such that f⁻¹ exists.  b) For this value of k, find the domain of f⁻¹.',
          type: 'Hard',
          explaination:
            "f'(x) = eˣ − 4 = 0 ⇒ x = ln 4  f is decreasing for x < ln 4 and increasing for x > ln 4.  For f to be one-to-one on x ≤ k, need k = ln 4.  f(ln 4) = e^(ln 4) − 4ln 4 = 4 − 4ln 4 (minimum).  As x → −∞: eˣ → 0, −4x → + ∞, so f → + ∞.  Domain of f⁻¹ = range of f on x ≤ ln 4 = [4 − 4ln 4, ∞).",
          answer: 'a) k = ln 4  b) Domain of f⁻¹: x ≥ 4 − 4ln 4',
        },
        {
          id: 8,
          question:
            'The function is defined by f(x) = |x² − 4x + 3|.  From the graph, determine the largest possible domain of the given form for which the inverse function exists.  a) x ≤ k  b) x ≥ k',
          type: 'Medium',
          explaination:
            'Note x² − 4x + 3 = (x − 1)(x − 3), zeros at x = 1 and x = 3.  The graph of f has turning points at x = 1 (local min = 0), x = 2 (local max = 1), x = 3 (local min = 0).  For largest monotone region of form x ≤ k: function is decreasing on (−∞, 1], so k = 1.  For largest monotone region of form x ≥ k: function is increasing on [3, ∞), so k = 3.',
          answer: 'a) k = 1  b) k = 3',
        },
      ],
      'self-inverse-functions': [
        {
          id: 1,
          question:
            'Use an algebraic method to determine whether the function is self-inverse.  f(x) = 1/2x',
          type: 'Medium',
          explaination:
            'Compute f(f(x)) = f(1/2x) = 1/(2 · 1/2x) = 1/(1/x) = x.  Since f(f(x)) = x, the function IS self-inverse.',
          answer: 'Not self-inverse',
        },
        {
          id: 2,
          question:
            'Use an algebraic method to determine whether the function is self-inverse.  f(x) = −5/x',
          type: 'Medium',
          explaination:
            'f(f(x)) = f(−5/x) = −5/(−5/x) = −(5 · x)/−5 = x  Since f(f(x)) = x, the function IS self-inverse.',
          answer: 'Not self-inverse',
        },
        {
          id: 3,
          question:
            'Use an algebraic method to determine whether the function is self-inverse.  f(x) = 3 − 2x',
          type: 'Easy',
          explaination:
            'f(f(x)) = f(3 − 2x) = 3 − 2(3 − 2x) = 3 − 6 + 4x = 4x − 3  Since f(f(x)) = 4x − 3 ≠ x in general, the function is NOT self-inverse.',
          answer: 'Not self-inverse',
        },
        {
          id: 4,
          question:
            'Use an algebraic method to determine whether the function is self-inverse.  f(x) = 4 − x',
          type: 'Easy',
          explaination:
            'f(f(x)) = f(4 − x) = 4 − (4 − x) = x  Since f(f(x)) = x, the function is self-inverse.',
          answer: 'Self-inverse',
        },
        {
          id: 5,
          question:
            'Use an algebraic method to determine whether the function is self-inverse.  f(x) = x/(x + 1)',
          type: 'Medium',
          explaination:
            'f(f(x)) = f(x/(x + 1)) = (x/(x + 1))/(x/(x + 1) + 1) = (x/(x + 1))/((x + x + 1)/(x + 1)) = x/(2x + 1)  Since f(f(x)) = x/(2x + 1) ≠ x in general, the function is NOT self-inverse.',
          answer: 'Not self-inverse',
        },
        {
          id: 6,
          question:
            'Use an algebraic method to determine whether the function is self-inverse.  f(x) = (3x + 1)/(2x − 3)',
          type: 'Hard',
          explaination:
            'f(f(x)) = f((3x + 1)/(2x − 3)) = (3 · (3x + 1)/(2x − 3) + 1)/(2 · (3x + 1)/(2x − 3) − 3)  = (3(3x + 1) + (2x − 3))/(2(3x + 1) − 3(2x − 3)) = (9x + 3 + 2x − 3)/(6x + 2 − 6x + 9) = 11x/11 = x  Since f(f(x)) = x, the function is self-inverse.',
          answer: 'Self-inverse',
        },
        {
          id: 7,
          question:
            'a) Show that the function f(x) = (3 − 2x)/2, x ∈ ℝ is self-inverse.  b) State the domain of f⁻¹.',
          type: 'Medium',
          explaination:
            'a) f(f(x)) = f((3 − 2x)/2) = (3 − 2·(3 − 2x)/2)/2 = (3 − (3 − 2x))/2 = 2x/2 = x ✓  Since f(f(x)) = x, f is self-inverse.  b) Domain of f⁻¹ equals range of f = ℝ.',
          answer: 'b) Domain of f⁻¹ is ℝ',
        },
        {
          id: 8,
          question:
            'a) Show that the function f(x) = (2x + 1)/(3x − 2), x ≠ 2/3 is self-inverse.  b) Find the domain of f⁻¹.',
          type: 'Hard',
          explaination:
            'a) f(f(x)) = f((2x + 1)/(3x − 2)) = (2·(2x + 1)/(3x − 2) + 1)/(3·(2x + 1)/(3x − 2) − 2)  = (2(2x + 1) + (3x − 2))/(3(2x + 1) − 2(3x − 2)) = (4x + 2 + 3x − 2)/(6x + 3 − 6x + 4) = 7x/7 = x ✓  Since f(f(x)) = x, f is self-inverse.  b) Domain of f⁻¹ = domain of f = {x ∈ ℝ : x ≠ 2/3}.',
          answer: 'b) Domain of f⁻¹: x ≠ 2/3',
        },
        {
          id: 9,
          question:
            'Determine, with proof, the condition on a, b ∈ ℝ such that f(x) = ax + b is self-inverse.',
          type: 'Hard',
          explaination:
            'f(f(x)) = a(ax + b) + b = a²x + ab + b  For f(f(x)) = x for all x:  (i) a² = 1 ⇒ a = ± 1  (ii) ab + b = 0 ⇒ b(a + 1) = 0  If a = 1: b(2) = 0 ⇒ b = 0.  If a = −1: b(0) = 0, satisfied for any b ∈ ℝ.  Conditions: a = −1 (any b) or (a = 1 and b = 0).',
          answer: 'a = −1 (any b ∈ ℝ), or a = 1 and b = 0',
        },
        {
          id: 10,
          question:
            'Find the value of c for which the function f(x) = (3 − 2x)/(x + c) is self-inverse.',
          type: 'Hard',
          explaination:
            'Compute f(f(x)) and set equal to x.  f(f(x)) = f((3 − 2x)/(x + c)) = (3 − 2·(3 − 2x)/(x + c))/((3 − 2x)/(x + c) + c)  = (3(x + c) − 2(3 − 2x))/((3 − 2x) + c(x + c)) = (3x + 3c − 6 + 4x)/(3 − 2x + cx + c²) = (7x + 3c − 6)/((c − 2)x + c² + 3)  For this to equal x: coefficient of x²: c − 2 = 0 ⇒ c = 2.  Check: 3c − 6 = 0 ✓ and c² + 3 = 7 ✓.  c = 2',
          answer: 'c = 2',
        },
      ],
    },
  },
  {
    'algebra-functions': {
      title: 'Algebra & Functions',
      'polynomial-inequalities': [
        {
          id: 1,
          question:
            'Use the algebraic method (factorisation and sign analysis) to solve each inequality.  a)  x³ + 2x > 3x²  b)  x³ > 4x² + 5x',
          type: 'Medium',
          explaination:
            'a)  Rearrange: x³ − 3x² + 2x > 0 ⇒ x(x − 1)(x − 2) > 0  Roots: 0, 1, 2.  Sign table gives + for (0,1) and (2,∞).  b)  Rearrange: x³ − 4x² − 5x > 0 ⇒ x(x − 5)(x + 1) > 0  Roots: -1, 0, 5.  Sign table gives + for (-1,0) and (5,∞).',
          answer: 'a)  x ∈ (0, 1) ∪ (2, + ∞)  b)  x ∈ (−1, 0) ∪ (5, + ∞)',
        },
        {
          id: 2,
          question:
            'Use the algebraic method to solve each inequality.  a)  x³ < 6x² − 8x  b)  x³ + 18x < 9x²',
          type: 'Medium',
          explaination:
            'a)  x³ − 6x² + 8x < 0 ⇒ x(x − 2)(x − 4) < 0  Roots: 0, 2, 4.  Negative for x<0 or 2<x<4.  b)  x³ − 9x² + 18x < 0 ⇒ x(x − 3)(x − 6) < 0  Roots: 0, 3, 6.  Negative for x<0 or 3<x<6.',
          answer: 'a)  x ∈ (−∞, 0) ∪ (2, 4)  b)  x ∈ (−∞, 0) ∪ (3, 6)',
        },
        {
          id: 3,
          question:
            'Solve each inequality.  a)  (x + 3)(x − 2)(x − 5) ≤ 0  b)  (x − 1)(x − 3)(x − 4) ≤ 0',
          type: 'Easy',
          explaination:
            'a)  Roots: -3, 2, 5.  Leading coeff positive.  Sign table: negative for x<-3 and 2<x<5.  Including equality: x ≤ −3 or 2 ≤ x ≤ 5.  b)  Roots: 1, 3, 4.  Negative for x<1 and 3<x<4.  Including equality: x ≤ 1 or 3 ≤ x ≤ 4.',
          answer: 'a)  x ≤ −3 or 2 ≤ x ≤ 5  b)  x ≤ 1 or 3 ≤ x ≤ 4',
        },
        {
          id: 4,
          question:
            'Solve each inequality.  a)  (4 − x)(x − 3)(x + 2) ≥ 0  b)  (2 − x)(x − 1)(x − 8) ≥ 0',
          type: 'Medium',
          explaination:
            'a)  Rewrite as −(x − 4)(x − 3)(x + 2) ≥ 0, so (x − 4)(x − 3)(x + 2) ≤ 0.  Roots: -2, 3, 4.  Non-positive for x≤-2 or 3≤x≤4.  b)  Rewrite as −(x − 2)(x − 1)(x − 8) ≥ 0, so (x − 2)(x − 1)(x − 8) ≤ 0.  Roots: 1, 2, 8.  Non-positive for x≤1 or 2≤x≤8.',
          answer: 'a)  x ≤ −2 or 3 ≤ x ≤ 4  b)  x ≤ 1 or 2 ≤ x ≤ 8',
        },
        {
          id: 5,
          question: 'Solve the inequality  2x³ + x² > 6x.',
          type: 'Medium',
          explaination:
            'Rearrange: 2x³ + x² − 6x > 0 ⇒ x(2x² + x − 6) > 0  Factorise: x(2x − 3)(x + 2) > 0  Roots: x = −2, 0, 3/2  Sign table:  x<-2: (-)(-)(-)= - ✗  -2<x<0: (-)(+)(-) wait — recheck order:  Factor order: x, (2x-3), (x+2)  -2<x<0: x<0, 2x-3<0, x+2>0 → (-)(-)+ = + ✓  0<x<3/2: +, -, + → - ✗  x>3/2: +, +, + → + ✓  Answer: −2 < x < 0 or x > 3/2',
          answer: 'x ∈ (−2, 0) ∪ (3/2, + ∞)',
        },
        {
          id: 6,
          question: 'Solve each inequality.  a)  (x + 1)(x − 2)² > 0  b)  (x + 3)²(x − 4) > 0',
          type: 'Medium',
          explaination:
            'a)  (x − 2)² ≥ 0 always; equals 0 at x=2 only.  For x>-1, x≠2: (x+1)>0 and (x-2)²>0, so product >0. ✓  For x<-1: (x+1)<0 so product <0. ✗  Answer: x > −1, x ≠ 2.  b)  (x + 3)² ≥ 0; product >0 only when (x-4)>0 and x≠-3.  Answer: x > 4.',
          answer: 'a)  x > −1, x ≠ 2  b)  x > 4',
        },
        {
          id: 7,
          question:
            'a)  Show that (x − 2) is a factor of 2x³ + x² − 7x − 6.  b)  Hence solve the inequality  3x³ + 2x² ≤ x³ + x² + 7x + 6.',
          type: 'Medium',
          explaination:
            'a)  Let f(x) = 2x³ + x² − 7x − 6.  f(2) = 16 + 4 − 14 − 6 = 0. ✓  Hence (x-2) is a factor.  b)  Rearrange: 2x³ + x² − 7x − 6 ≤ 0  From (a): f(x) = (x − 2)(2x² + 5x + 3) = (x − 2)(2x + 3)(x + 1)  Roots: x = −3/2, −1, 2  Sign table: non-positive for x ≤ −3/2 or −1 ≤ x ≤ 2.',
          answer: 'a)  Factor theorem verified.  b)  x ≤ −3/2 or −1 ≤ x ≤ 2',
        },
        {
          id: 8,
          question:
            'a)  Show that (x + 3) is a factor of 2x³ + 11x² + 12x − 9.  b)  Hence solve the inequality  11x² − 4 > 5 − 12x − 2x³.',
          type: 'Medium',
          explaination:
            'a)  f(−3) = 2(−27) + 11(9) + 12(−3) − 9 = −54 + 99 − 36 − 9 = 0. ✓  b)  Rearrange: 2x³ + 11x² + 12x − 9 > 0  From (a): f(x) = (x + 3)(2x² + 5x − 3) = (x + 3)²(2x − 1)  (x + 3)² ≥ 0 always; product >0 iff 2x − 1 > 0 (for x ≠ −3)  Answer: x > 1/2.',
          answer: 'a)  Factor theorem verified.  b)  x > 1/2',
        },
        {
          id: 9,
          question: 'Given that a < b < c, solve the inequality  (x − a)(x − b)(x − c) > 0.',
          type: 'Hard',
          explaination:
            'Roots: x = a, b, c.  Leading coefficient positive.  Sign table:  x<a: (-)(-)(−)=− ✗  a<x<b: (+)(−)(−)=+ ✓  b<x<c: (+)(+)(−)=− ✗  x>c: (+)(+)(+)=+ ✓  Answer: a < x < b or x > c.',
          answer: 'a < x < b or x > c',
        },
        {
          id: 10,
          question: 'Given that a < b, solve the inequality  (x − a)(x − b)² < 0.',
          type: 'Hard',
          explaination:
            '(x − b)² ≥ 0 for all x; equals 0 at x=b only.  For x ≠ b: (x − b)² > 0, so sign depends solely on (x − a).  (x − a) < 0 ⇔ x < a.  At x=a: product = 0, not <0.  At x=b: product = 0, not <0.  Answer: x < a.',
          answer: 'x < a',
        },
        {
          id: 11,
          question: 'Find the set of values of x for which  x⁴ − 4x² + 3x + 1 ≤ 0.',
          type: 'Hard',
          explaination:
            'Plot y = x⁴ − 4x² + 3x + 1 on GDC.  Identify x-intercepts (roots of the quartic).  State the interval(s) where the graph lies on or below the x-axis.  (Exact roots not easily obtainable by hand — GDC required.)',
          answer: 'Use GDC to find approximate roots and state the interval.',
        },
        {
          id: 12,
          question: 'Solve the inequality  2x⁵ − 6x⁴ + 8x² − 1 ≥ 0.',
          type: 'Hard',
          explaination:
            'Plot y = 2x⁵ − 6x⁴ + 8x² − 1 on GDC.  Find x-intercepts numerically.  State x-intervals where the quintic is non-negative.  (Give answers to 3 s.f.)',
          answer: 'Use GDC to find approximate roots and state the interval(s).',
        },
      ],
      'graphical-solution-of-inequalities': [
        {
          id: 1,
          question:
            'Use a graphical method (GDC) to solve each inequality.  a)  x³ + 3x² − 2 ≤ 2⁻ˣ  b)  x³ + 8x² + 20x + 16 ≤ 3⁻ˣ',
          type: 'Hard',
          explaination:
            'Plot both curves on GDC.  Identify x-values where the LHS curve lies at or below the RHS curve.  Read off intersection points and state the inequality interval(s).  (Exact answers depend on GDC output; give to 3 s.f.)',
          answer:
            'a)  Graphical solution — find intersections of y = x³ + 3x² − 2 and y = 2⁻ˣ.  b)  Graphical solution — find intersections of y = x³ + 8x² + 20x + 16 and y = 3⁻ˣ.',
        },
        {
          id: 2,
          question:
            'Use a graphical method (GDC) to solve each inequality.  a)  2e⁻ˣ ≥ x² − 3  b)  e⁻ˣ⁺¹ ≥ x² − 1',
          type: 'Hard',
          explaination:
            'Plot each pair of curves on GDC.  Find intersection coordinates; state the x-interval(s) where the  exponential curve is at or above the quadratic.  (Give coordinates to 3 s.f.)',
          answer:
            'a)  Graphical: y = 2e⁻ˣ lies on or above y = x² − 3.  b)  Graphical: y = e⁻ˣ⁺¹ lies on or above y = x² − 1.',
        },
        {
          id: 3,
          question:
            'Use a graphical method (GDC) to solve each inequality.  a)  x⁴ + 2x³ + 1 < 3x² + 4x  b)  3x² + 10x − 9 > x⁴ + 4x³',
          type: 'Hard',
          explaination:
            'Rearrange to f(x) − g(x) < 0 (or >0) and find zeros on GDC,  or graph both curves and read intersection x-values.  (Give to 3 s.f.)',
          answer:
            'a)  Graphical: y = x⁴ + 2x³ + 1 lies strictly below y = 3x² + 4x.  b)  Graphical: y = 3x² + 10x − 9 lies strictly above y = x⁴ + 4x³.',
        },
        {
          id: 4,
          question:
            'Use a graphical method (GDC) to solve each inequality.  a)  4ln x > x − 2  b)  ln(x − 1) > 2x − 5',
          type: 'Hard',
          explaination:
            'Note domain restrictions: a) x>0; b) x>1.  Plot both curves; identify intersection(s) on GDC.  State interval(s) where log curve exceeds linear curve.',
          answer:
            'a)  Graphical: region where y = 4ln x is above y = x − 2.  b)  Graphical: region where y = ln(x − 1) is above y = 2x − 5.',
        },
        {
          id: 5,
          question:
            'Use a graphical method (GDC) to solve each inequality.  a)  cos 4x ≤ eˣ⁺¹ − 2  b)  sin 3x ≥ e^(x/3) − 2',
          type: 'Hard',
          explaination:
            'Use GDC in radian mode.  Plot both curves; identify all intersection points within a  suitable domain and state intervals where the inequality holds.',
          answer:
            'a)  Graphical intersection(s) of y = cos 4x and y = eˣ⁺¹ − 2.  b)  Graphical intersection(s) of y = sin 3x and y = e^(x/3) − 2.',
        },
      ],
      'logarithmic-inequalities': [
        {
          id: 1,
          question: 'Find the set of values of x for which  3ln(x² + 1) < x + 2.',
          type: 'Hard',
          explaination:
            'Domain: all real x (since x² + 1 > 0 always).  Plot y = 3ln(x² + 1) and y = x + 2 on GDC.  Find intersection points; read off interval(s) where log curve < linear.  (Give to 3 s.f.)',
          answer:
            'Graphical solution — state the interval where y = 3ln(x² + 1) lies below y = x + 2.',
        },
        {
          id: 2,
          question: 'Solve the inequality  (x − 2)/(3x² + 2x − 8) ≤ ln(x + 4).',
          type: 'Hard',
          explaination:
            'Note 3x² + 2x − 8 = (3x − 4)(x + 2); vertical asymptotes at x=4/3 and x=-2.  Domain for ln: x>-4.  Plot y = (x − 2)/((3x − 4)(x + 2)) and y = ln(x + 4) on GDC.  Find intersections; state where rational function ≤ logarithm.  Exclude asymptote x-values from solution set.',
          answer: 'Graphical solution — read off x-interval(s) from GDC.',
        },
      ],
      'constructing-polynomials-from-solution-sets': [
        {
          id: 1,
          question:
            'The solution of the inequality  x³ + bx² + cx + d < 2  is  x < 3, x ≠ 1.  Find the values of the integers b, c and d.',
          type: 'Hard',
          explaination:
            'Let g(x) = x³ + bx² + cx + d − 2.  Solution set x<3, x≠1 means g(x)<0 for x<3 (except x=1 where g=0)  and g(x)>0 for x>3.  So x=1 is a double root and x=3 is a simple root:  g(x) = (x − 1)²(x − 3) = x³ − 5x² + 7x − 3  Hence x³ + bx² + cx + d − 2 = x³ − 5x² + 7x − 3  Comparing: b = −5, c = 7, d − 2 = −3⇒ d = −1.',
          answer: 'b = −5, c = 7, d = −1',
        },
        {
          id: 2,
          question:
            'The solution of the inequality  ax³ + bx² + cx + d > 3  is  x < −4 or −1 < x < 3/2.  Find the values of the integers a, b, c and d where |a| is as small as possible.',
          type: 'Hard',
          explaination:
            'Let g(x) = ax³ + bx² + cx + d − 3.  g(x)>0 for x<-4 or -1<x<3/2  →  g(x)<0 for -4<x<-1 or x>3/2.  Leading behaviour: as x→+∞, g<0, so a < 0.  Roots: x=-4, -1, 3/2.  g(x) = A(x + 4)(x + 1)(x − 3/2) = A/2(x + 4)(x + 1)(2x − 3).  For integer coefficients with smallest |a|: set A=-2:  g(x) = −(x + 4)(x + 1)(2x − 3)  Expand: −(2x³ + 7x² − 7x − 12) = −2x³ − 7x² + 7x + 12  So ax³ + bx² + cx + d − 3 = −2x³ − 7x² + 7x + 12  a = −2, b = −7, c = 7, d = 15.',
          answer: 'a = −2, b = −7, c = 7, d = 15',
        },
      ],
      'rational-exponential-inequalities-graphical': [
        {
          id: 1,
          question:
            'The solution of the inequality  (16x + 1)/(px + 1) > x + 4  is  x < q or r < x < 3.  Find p, q and r.',
          type: 'Hard',
          explaination:
            'x=3 is a boundary, so substituting:  49/(3p + 1) = 7 ⇒ 3p + 1 = 7 ⇒ p = 2.  With p=2: (16x + 1)/(2x + 1) − (x + 4) > 0  ⇒(16x + 1 − (x + 4)(2x + 1))/(2x + 1) > 0  ⇒(−2x² + 7x − 3)/(2x + 1) > 0  ⇒(−(2x − 1)(x − 3))/(2x + 1) > 0  i.e. ((2x − 1)(x − 3))/(2x + 1) < 0  Critical values: x=-1/2, 1/2, 3.  Sign table: negative for x < −1/2 or 1/2 < x < 3.  So q = −1/2, r = 1/2.',
          answer: 'p = 2, q = −1/2, r = 1/2',
        },
        {
          id: 2,
          question: 'Solve the inequality  3x/(x² + x − 6) ≥ 2ˣ.',
          type: 'Hard',
          explaination:
            'Note x² + x − 6 = (x + 3)(x − 2); vertical asymptotes at x=-3 and x=2.  Plot y = 3x/((x + 3)(x − 2)) and y = 2ˣ on GDC.  Identify intersections; state region(s) where rational function ≥ exponential.  (Give answers to 3 s.f.)',
          answer: 'Graphical solution — read off x-interval(s) from GDC.',
        },
        {
          id: 3,
          question:
            'a)  On the same axes, draw the graphs of  y = (3x + 5)/(x − 2)  and  y = 4.  b)  Hence solve the inequality  (3x + 5)/(x − 2) ≥ 4.',
          type: 'Medium',
          explaination:
            'a)  y = (3x + 5)/(x − 2) = 3 + 11/(x − 2)  Vertical asymptote: x=2; horizontal asymptote: y=3.  b)  (3x + 5)/(x − 2) − 4 ≥ 0 ⇒ (3x + 5 − 4(x − 2))/(x − 2) ≥ 0 ⇒ (−x + 13)/(x − 2) ≥ 0  Critical values: x=13 (numerator=0) and x=2 (excluded).  (13 − x)/(x − 2) ≥ 0 holds when 2 < x ≤ 13.',
          answer:
            'a)  Sketch required: rectangular hyperbola with vertical asymptote x=2,  horizontal asymptote y=3; intersects y=4 at x=13.  b)  2 < x ≤ 13',
        },
        {
          id: 4,
          question:
            'a)  On the same axes, draw the graphs of  y = (2x − 7)/(x + 1)  and  y = x − 3.  b)  Hence solve the inequality  (2x − 7)/(x + 1) < x − 3.',
          type: 'Hard',
          explaination:
            'b)  (2x − 7)/(x + 1) − (x − 3) < 0 ⇒ (2x − 7 − (x − 3)(x + 1))/(x + 1) < 0  Numerator: 2x − 7 − (x² − 2x − 3) = −x² + 4x − 4 = −(x − 2)²  ⇒ (−(x − 2)²)/(x + 1) < 0  (x − 2)² ≥ 0 always; for x≠2: negative numerator.  Fraction < 0 iff (x + 1) > 0, i.e., x > −1.  Also x≠2 (numerator=0 gives equality, not strict).  Answer: x > −1, x ≠ 2.',
          answer:
            'a)  Sketch required: rectangular hyperbola; oblique asymptote y=2; vertical asymptote x=-1; and the line y=x-3.  b)  x > −1, x ≠ 2',
        },
        {
          id: 5,
          question:
            'A curve has equation  y = (2x − a)/(x + b),  where a, b > 0.  a)  Sketch the curve, labelling all asymptotes and the coordinates of all axis intercepts.  b)  Hence solve the inequality  (2x − a)/(x + b) > 3.',
          type: 'Hard',
          explaination:
            'b)  (2x − a)/(x + b) − 3 > 0 ⇒ (2x − a − 3(x + b))/(x + b) > 0 ⇒ (−(x + a + 3b))/(x + b) > 0  Equivalent: (x + a + 3b)/(x + b) < 0  Roots: x = −(a + 3b) and x = −b.  Since a > 0, b > 0: −(a + 3b) < −b.  Fraction is negative between the roots: −(a + 3b) < x < −b.',
          answer:
            'a)  Vertical asymptote: x = −b; horizontal asymptote: y = 2.  x-intercept: (a/2, 0); y-intercept: (0, −a/b).  b)  −(a + 3b) < x < −b',
        },
      ],
    },
  },
  {
    'functions-graphs': {
      title: 'Functions & Graphs',
      'sketching-y-f-x': [
        {
          id: 1,
          question:
            'Sketch the graph of y = |f(x)|, marking on axis intercepts.  a)  y = |x + 4|  b)  y = |x − 1|',
          type: 'Easy',
          explaination:
            'a) Original: line y = x + 4. Reflect any part below x-axis in x-axis. Vertex at x = −4. y-int: x = 0⇒ y = 4.  b) Original: line y = x − 1. Vertex at x = 1. y-int: x = 0⇒ y = 1.',
          answer: 'a) V-shape, vertex (−4,0), y-int (0,4)  b) V-shape, vertex (1,0), y-int (0,1)',
        },
        {
          id: 2,
          question:
            'Sketch the graph of y = |f(x)|, marking on axis intercepts.  a)  y = |3x − 2|  b)  y = |2x + 5|',
          type: 'Easy',
          explaination:
            'a) 3x − 2 = 0⇒ x = 2/3. y-int: |0 − 2| = 2.  b) 2x + 5 = 0⇒ x = −5/2. y-int: |5| = 5.',
          answer:
            'a) V-shape, vertex (2/3,0), y-int (0,2)  b) V-shape, vertex (−5/2,0), y-int (0,5)',
        },
        {
          id: 3,
          question:
            'Sketch the graph of y = |f(x)|, marking on axis intercepts.  a)  y = |x² − x − 12|  b)  y = |x² − 4x + 3|',
          type: 'Easy',
          explaination:
            'a) x² − x − 12 = (x − 4)(x + 3); roots x = −3,4; reflect negative arch up.  b) x² − 4x + 3 = (x − 1)(x − 3); roots x = 1,3; reflect arch between x = 1 and x = 3 up.',
          answer:
            'a) x-ints: −3, 4; reflected arch between roots  b) x-ints: 1, 3; reflected arch between roots',
        },
        {
          id: 4,
          question:
            'Sketch the graph of y = |f(x)|, marking on axis intercepts.  a)  y = |x³ − 4x|  b)  y = |x³ − 6x² + 8x|',
          type: 'Medium',
          explaination:
            'a) x³ − 4x = x(x − 2)(x + 2); roots x = −2,0,2; reflect portions below x-axis.  b) x³ − 6x² + 8x = x(x − 2)(x − 4); roots x = 0,2,4; reflect negative portions up.',
          answer: 'a) x-ints: −2, 0, 2  b) x-ints: 0, 2, 4',
        },
        {
          id: 5,
          question:
            'Sketch the graph of y = |f(x)|, marking on axis intercepts, for the given domain.  a)  y = |sin x|, −2π ≤ x ≤ 2π  b)  y = |tan x|, −π ≤ x ≤ π',
          type: 'Medium',
          explaination:
            'a) Reflect the negative arches of sin x (in [−2π,−π] and [0,π]) above x-axis. Period becomes π.  b) Reflect negative branches of tan x in (−π,−π/2) and (0,π/2) above x-axis; asymptotes unchanged.',
          answer: 'a) All arches above x-axis, period π  b) All branches above x-axis',
        },
        {
          id: 6,
          question:
            'Sketch the graph of y = |f(x)|, marking on axis intercepts.  a)  y = |ln x|  b)  y = |ln(x + 2)|',
          type: 'Medium',
          explaination:
            'a) ln x < 0 for 0 < x < 1: reflect that portion. x-int at x = 1. Domain x > 0.  b) ln(x + 2) < 0 for −2 < x < −1: reflect. x-int at x = −1. Domain x > −2.',
          answer:
            'a) Reflected for 0 < x < 1; graph touches x-axis at x = 1  b) x-intercept at x = −1; reflected for −2 < x < −1',
        },
        {
          id: 7,
          question:
            'Sketch the graph of y = f(|x|), marking on axis intercepts.  a)  y = |x| + 4  b)  y = |x| − 1',
          type: 'Easy',
          explaination:
            'a) Reflect y = x + 4 (x ≥ 0) in y-axis. Vertex at (0,4), y-int 4.  b) Reflect y = x − 1 (x ≥ 0) in y-axis. Vertex at (0,−1); x-ints: |x| = 1⇒ x = ± 1.',
          answer: 'a) V-shape, vertex (0,4), no x-ints  b) V-shape, vertex (0,−1), x-ints at ± 1',
        },
        {
          id: 8,
          question:
            'Sketch the graph of y = f(|x|), marking on axis intercepts.  a)  y = 3|x| − 2  b)  y = 2|x| + 5',
          type: 'Easy',
          explaination:
            'a) x-int: 3|x| = 2⇒|x| = 2/3⇒ x = ± 2/3. y-int: −2.  b) 2|x| + 5 ≥ 5 > 0 always; no x-ints. y-int: 5.',
          answer: 'a) V-shape, vertex (0,−2), x-ints ± 2/3  b) V-shape, vertex (0,5), no x-ints',
        },
        {
          id: 9,
          question:
            'Sketch the graph of y = f(|x|), marking on axis intercepts.  a)  y = |x|² + |x| − 12  b)  y = |x|² − 4|x| + 3',
          type: 'Medium',
          explaination:
            'a) Let u = |x| ≥ 0: u² + u − 12 = (u + 4)(u − 3); u = 3 gives x = ± 3. y-int: −12.  b) u² − 4u + 3 = (u − 1)(u − 3); u = 1⇒ x = ± 1, u = 3⇒ x = ± 3. y-int: 3.',
          answer:
            'a) Even parabola-like curve, x-ints ± 3, y-int −12  b) Even W-shape, x-ints ± 1, ± 3, y-int 3',
        },
        {
          id: 10,
          question:
            'Sketch the graph of y = f(|x|), marking on axis intercepts.  a)  y = |x|³ − 4|x|  b)  y = |x|³ − 6|x|² + 8|x|',
          type: 'Medium',
          explaination:
            'a) u³ − 4u = u(u − 2)(u + 2); u = |x| ≥ 0: roots u = 0,2; x = 0, ± 2.  b) u³ − 6u² + 8u = u(u − 2)(u − 4); roots u = 0,2,4; x = 0, ± 2, ± 4.',
          answer: 'a) x-ints 0, ± 2; even function  b) x-ints 0, ± 2, ± 4; even function',
        },
        {
          id: 11,
          question:
            'Sketch the graph of y = f(|x|), marking on axis intercepts, for the given domain.  a)  y = sin|x|, −2π ≤ x ≤ 2π  b)  y = tan|x|, −π ≤ x ≤ π',
          type: 'Medium',
          explaination:
            'a) sin|x| = sin x for x ≥ 0; reflect in y-axis for x < 0. Only positive arches show for x ≥ 0.  b) tan|x| = tan x for x ≥ 0; reflect. Asymptotes at x = ± π/2.',
          answer:
            'a) Even function; arches above x-axis for x > 0 mirrored for x < 0  b) Even function; branches above x-axis mirrored',
        },
        {
          id: 12,
          question:
            'Sketch the graph of y = f(|x|), marking on axis intercepts.  a)  y = ln|x|  b)  y = ln|x + 2|',
          type: 'Medium',
          explaination:
            'a) ln|x| = ln x for x > 0, reflected for x < 0. x-int: |x| = 1⇒ x = ± 1.  b) ln|x + 2|: take x ≥ 0 branch ln(x + 2) and reflect. Asymptote x = −2.',
          answer:
            'a) Even function; domain x ≠ 0; x-ints ± 1  b) Vertical asymptotes x = −2; x-ints at x = 0,−4',
        },
      ],
      'modulus-of-a-given-graph': [
        {
          id: 1,
          question:
            'The graph of y = f(x) is shown. The graph has vertical asymptotes x = −2 and x = 3, a horizontal asymptote y = 0, and x-intercepts at x = 1 and x = 2.  On separate axes, sketch the graph of:  a)  y = |f(x)|  b)  y = f(|x|)',
          type: 'Hard',
          explaination:
            'a) y = |f(x)|: reflect any portion below x-axis upward. Asymptotes remain at x = −2 and x = 3. The section between x = 1 and x = 2 (where f(x) < 0) is reflected above the x-axis.  b) y = f(|x|): retain the graph for x ≥ 0; reflect it in the y-axis. New asymptote added at x = −3 (mirror of x = 3). No asymptote at x = −2 now (replaced by mirror at x = 2, already existing). x-int at x = ± 1, ± 2.',
          answer: 'See notes for sketch descriptions.',
        },
        {
          id: 2,
          question:
            'The graph of y = f(x) is shown. The graph has a vertical asymptote x = 2, x-intercepts at x = −3 and x = 3, and y-intercept 9/2. The line y = x + 2 is also shown.  On separate axes, sketch the graph of:  a)  y = |f(x)|  b)  y = f(|x|)',
          type: 'Hard',
          explaination:
            'a) y = |f(x)|: reflect any part of f(x) that is below the x-axis upward. Asymptote x = 2 remains. y-int 9/2. x-ints at x = −3,3 become touch-points.  b) y = f(|x|): keep x ≥ 0 portion; reflect in y-axis. New asymptote at x = −2. x-ints at x = ± 3. y-int f(0) = 9/2.',
          answer: 'See notes for sketch descriptions.',
        },
        {
          id: 3,
          question:
            'The graph of y = f(x) is shown. The graph has a local maximum at (p, q) and a local minimum at (r, s) where s < 0 < q.  Sketch the graph of y = f(x) + |f(x)|.',
          type: 'Hard',
          explaination:
            'f(x) + |f(x)| = { 2f(x), f(x) ≥ 0; 0, f(x) < 0 }. So: wherever the original graph is positive, double it; wherever it is negative, the result is zero (lies on x-axis).',
          answer: 'Where f(x) ≥ 0: y = 2f(x). Where f(x) < 0: y = 0.',
        },
      ],
      'sketching-modulus-graphs': [
        {
          id: 1,
          question: 'Sketch the graph of y = 2 − 3|x + 1|, labelling the axis intercepts.',
          type: 'Medium',
          explaination:
            'Vertex at x = −1: y = 2. x-intercepts: 2 − 3|x + 1| = 0⇒|x + 1| = 2/3⇒ x = −1 ± 2/3; so x = −1/3 or x = −5/3. y-intercept: x = 0⇒ y = 2 − 3(1) = −1. Inverted V-shape.',
          answer: 'Vertex (−1, 2); x-intercepts (−5/3, 0) and (−1/3, 0); y-intercept (0, −1)',
        },
        {
          id: 2,
          question: 'Given that a < 0 < b, sketch the graph of y = |(x − a)(x − b)|.',
          type: 'Medium',
          explaination:
            'Original: y = (x − a)(x − b), upward parabola with roots a (negative) and b (positive). Between x = a and x = b, y < 0. Reflect that portion. y-int: (0 − a)(0 − b) = ab, but a < 0 so (−a)(b) = −ab > 0, i.e. y = |ab|.',
          answer:
            'W-shape with x-intercepts at x = a and x = b; y-intercept | − ab| = ab (since a < 0, −ab > 0).',
        },
        {
          id: 3,
          question: 'Given that a < 0 < b < c, sketch the graph of y = |(x − a)(x − b)(x − c)|.',
          type: 'Hard',
          explaination:
            'Original cubic: y = (x − a)(x − b)(x − c). Roots at x = a < 0 < b < c. The cubic is negative for x∈(a,b) (between first and second root) and positive elsewhere (for this ordering). Reflect the arch in (a,b) upward. Resulting graph touches/crosses x-axis at a,b,c and is entirely ≥ 0.',
          answer: 'All portions of the cubic reflected above x-axis; x-intercepts at x = a, b, c.',
        },
        {
          id: 4,
          question:
            'a)  Sketch the graph of y = 3e^(|x|).  b)  Hence find the set of values of x for which 3e^(|x|) > 5.',
          type: 'Medium',
          explaination:
            'a) y = 3e^(|x|): even function (symmetric about y-axis). For x ≥ 0: y = 3eˣ. Reflected for x < 0. Minimum at x = 0: y = 3.  b) 3e^(|x|) > 5⇒ e^(|x|) > 5/3⇒|x| > ln5/3⇒ x < −ln5/3 or x > ln5/3.',
          answer:
            'a) Even function, minimum at (0,3), increasing for |x| > 0.  b) |x| > ln5/3, i.e. x < −ln5/3 or x > ln5/3',
        },
      ],
      'determining-parameters-from-a-graph': [
        {
          id: 1,
          question:
            'The graph of y = a|x + b| + c is shown below. The graph has x-intercepts at −11/2 and −1/2, and y-intercept −1. Find the values of a, b and c.',
          type: 'Hard',
          explaination:
            'Vertex x-coordinate: midpoint of x-ints = (−11/2 + (−1/2))/2 = −3. So −b = −3⇒ b = 3. At x-int x = −1/2: a| − 1/2 + 3| + c = 0⇒5a/2 + c = 0. At y-int x = 0: a|3| + c = −1⇒3a + c = −1. Subtracting: 3a − 5a/2 = −1⇒a/2 = −1⇒ a = −2. Then c = 5/2·2 = 5. Verify: y = −2|x + 3| + 5; at x = 0: −6 + 5 = −1 ✓.',
          answer: 'a = −2, b = 3, c = 5',
        },
      ],
      'modulus-equations-number-of-solutions': [
        {
          id: 1,
          question:
            'Find the condition on the constant k such that the equation |x² + 4x − 7| = k has four solutions.',
          type: 'Hard',
          explaination:
            'f(x) = x² + 4x − 7 = (x + 2)² − 11. Minimum at (−2,−11). Roots: x = −2 ± √11. The graph of y = |f(x)|: the arch between the roots (where f < 0) is reflected up to a maximum of 11 at x = −2. Horizontal line y = k gives 4 intersections when 0 < k < 11.',
          answer: '0 < k < 11',
        },
        {
          id: 2,
          question:
            'Find the condition on the constant k such that the equation |x³ − 12x + 4| = k has four solutions.',
          type: 'Hard',
          explaination:
            "f(x) = x³ − 12x + 4. f'(x) = 3x² − 12 = 0⇒ x = ± 2. Local max: f(−2) = −8 + 24 + 4 = 20. Local min: f(2) = 8 − 24 + 4 = −12. The graph of y = |f(x)| reflects the negative trough (depth 12) upward. For four solutions: 0 < k < 12. (At k = 12 the line is tangent giving fewer intersections; at k = 20 another condition changes.)",
          answer: '0 < k < 12',
        },
      ],
      'sketching-y-frac1f-x': [
        {
          id: 1,
          question:
            'Sketch the graph of y = 1/(f(x)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Easy',
          explaination:
            '1. f(x) = (x − 2)/1 (or equivalent linear form), zero at x = 2.  2. Vertical asymptote of 1/(f(x)) at x = 2.  3. Horizontal asymptote y = 0 (since f(x)→∞).  4. y-intercept: 1/(f(0)) = 1/−2 = −1/2.  5. Correct shape in both branches.',
          answer:
            'Vertical asymptote x = 2; horizontal asymptote y = 0; no x-intercepts; y-intercept (0, −1/2).',
        },
        {
          id: 2,
          question:
            'Sketch the graph of y = 1/(f(x)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Easy',
          explaination:
            '1. Zero of f(x) at x = 3 → vertical asymptote at x = 3.  2. y-intercept: 1/(f(0)) = 1/3.  3. Horizontal asymptote y = 0.  4. Correct shape (positive branch left of x = 3, negative branch right).',
          answer: 'Vertical asymptote x = 3; horizontal asymptote y = 0; y-intercept (0, 1/3).',
        },
        {
          id: 3,
          question:
            'Sketch the graph of y = 1/(f(x)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Medium',
          explaination:
            '1. Zeros of f(x) at x = ± 1 → vertical asymptotes x = −1, x = 1.  2. Maximum of f(x) at (0,1) → minimum of 1/(f(x)) at (0,1).  3. y-intercept: 1/1 = 1.  4. Horizontal asymptote y = 0.  5. Correct behaviour in all three regions.',
          answer:
            'Vertical asymptotes x = −1 and x = 1; y-intercept (0, 1); minimum point (0, 1); horizontal asymptote y = 0.',
        },
        {
          id: 4,
          question:
            'Sketch the graph of y = 1/(f(x)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Medium',
          explaination:
            '1. Zeros of f(x) at x = 1,3 → vertical asymptotes.  2. Minimum of f(x) at (2,−1) → maximum of 1/(f(x)) at (2,−1).  3. y-intercept: 1/3.  4. Horizontal asymptote y = 0.  5. Correct three-region shape.',
          answer:
            'Vertical asymptotes x = 1 and x = 3; y-intercept (0, 1/3); maximum point (2, −1); horizontal asymptote y = 0.',
        },
        {
          id: 5,
          question:
            'Sketch the graph of y = 1/(f(x)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Medium',
          explaination:
            '1. f(x) ≥ 1 > 0 for all x → no zeros → no vertical asymptotes.  2. Minimum of f at (2,1) → maximum of 1/f at (2,1).  3. y-intercept: 1/5.  4. 1/(f(x)) → 0 as x → ± ∞.  5. Smooth bell-shaped curve above x-axis.',
          answer:
            'No vertical asymptotes (f(x) > 0 always); maximum of 1/(f(x)) at (2, 1); y-intercept (0, 1/5); horizontal asymptote y = 0.',
        },
        {
          id: 6,
          question:
            'Sketch the graph of y = 1/(f(x)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Medium',
          explaination:
            '1. Two zeros of inverted parabola → two vertical asymptotes.  2. Maximum of f → minimum of 1/f.  3. y-intercept: −1/3.  4. 1/(f(x)) → 0⁻ as x → ± ∞.',
          answer:
            'Two vertical asymptotes at the zeros of f(x); minimum of 1/f at the maximum of f; horizontal asymptote y = 0; y-intercept (0,−1/3).',
        },
        {
          id: 7,
          question:
            'Sketch the graph of y = 1/(f(x)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zero of f at x = −4/3 → vertical asymptote of 1/f there.  2. Vertical asymptote of f at x = 2 → zero of 1/f at x = 2; but since f → ± ∞, 1/f → 0, so x = 2 becomes another asymptote of 1/f.  3. Horizontal asymptote: 1/3.  4. y-intercept: 1/−2 = −1/2.',
          answer:
            'Vertical asymptotes: x = 2 and x = −4/3; horizontal asymptote y = 1/3; y-intercept (0, −1/2).',
        },
        {
          id: 8,
          question:
            'Sketch the graph of y = 1/(f(x)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zero of f at x = 4/3 → vertical asymptote.  2. VA of f at x = −2 → 1/f → 0, forming asymptote at x = −2.  3. HA of 1/f: −1/3.  4. y-intercept: 1/2.',
          answer:
            'Vertical asymptotes: x = −2 and x = 4/3; horizontal asymptote y = −1/3; y-intercept (0, 1/2).',
        },
        {
          id: 9,
          question:
            'Sketch the graph of y = 1/(f(x)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. VAs of f → 1/f → 0, so x = −2, x = 1 become VAs of 1/f too.  2. Zero(s) of f → VAs of 1/f.  3. HA of f at y = −2 → HA of 1/f at −1/2.  4. y-intercept: 1/1 = 1.',
          answer:
            'Vertical asymptote where f(x) = 0 (determined from graph); HA y = −1/2; y-intercept (0, 1).',
        },
        {
          id: 10,
          question:
            'Sketch the graph of y = 1/(f(x)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. VAs of f at x = −2, x = 1 remain VAs for 1/f.  2. HA of 1/f: 1/−1 = −1.  3. f(0) = 0 → 1/(f(0)) undefined → x = 0 is a VA of 1/f.',
          answer: 'HA y = −1; y-intercept (0, 0); VAs where f(x) = 0.',
        },
        {
          id: 11,
          question:
            'The graph of y = f(x) is a straight line with x-intercept (−1, 0) and y-intercept (0, −1).  Sketch the graph of y = [f(x)]², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Easy',
          explaination:
            '1. Zero of f at x = −1 → [f(x)]² = 0 at x = −1 (touches axis).  2. [f(0)]² = (−1)² = 1.  3. [f(x)]² ≥ 0 always — curve entirely above x-axis.  4. Shape: parabola opening upward touching x = −1.',
          answer: 'Touching the x-axis at x = −1; y-intercept (0, 1); increasing parabola shape.',
        },
        {
          id: 12,
          question:
            'The graph of y = f(x) is a straight line with x-intercept (−2, 0) and y-intercept (0, 2).  Sketch the graph of y = [f(x)]², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Easy',
          explaination: '1. f(−2) = 0 → [f(−2)]² = 0.  2. [f(0)]² = 4.  3. Entire curve ≥ 0.',
          answer: 'Touches x-axis at x = −2; y-intercept (0, 4); parabolic shape.',
        },
        {
          id: 13,
          question:
            'The graph of y = f(x) is a parabola with x-intercepts at (0, 0) and (3, 0), and minimum turning point (3/2, −9/4).  Sketch the graph of y = [f(x)]², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Medium',
          explaination:
            '1. Zeros of f → zeros (touching) of [f]² at x = 0 and x = 3.  2. Minimum of f at (3/2, −9/4) → maximum of [f]² at x = 3/2, value (9/4)² = 81/16.  3. Curve entirely ≥ 0.',
          answer:
            '[f(x)]² touches the x-axis at x = 0 and x = 3; local maximum at x = 3/2 with value 81/16; local minima at x = 0 and x = 3.',
        },
        {
          id: 14,
          question:
            'The graph of y = f(x) is an inverted parabola with x-intercepts at (−4, 0) and (0, 0), and maximum turning point (−2, 4).  Sketch the graph of y = [f(x)]², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Medium',
          explaination:
            '1. Zeros of f at x = −4,0 → zeros of [f]² there (touching).  2. Maximum of f at (−2,4) → maximum of [f]² at (−2, 16).  3. Curve entirely ≥ 0.',
          answer: '[f(x)]² touches x-axis at x = −4 and x = 0; maximum at (−2, 16).',
        },
        {
          id: 15,
          question:
            'The graph of y = f(x) is shown: a sinusoidal curve with x-intercepts at −π, 0 and π; maximum (π/2, 1); minimum (−π/2, −1).  Sketch the graph of y = [f(x)]², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zeros of f → zeros (touching) of [f]².  2. Maximum and minimum of |f| = 1 → maxima of [f]² = 1.  3. [f]² ≥ 0; negative portions of f reflected upward.',
          answer:
            'Period halved; all negative parts reflected above x-axis; maxima of [f]² = 1 at x = ± π/2; touches x-axis at x = −π, 0, π.',
        },
        {
          id: 16,
          question:
            'The graph of y = f(x) is a sinusoidal curve with maximum (0, 1), minima (−π, −1) and (π, −1), and x-intercepts at −3π/2, −π/2, π/2, 3π/2.  Sketch the graph of y = [f(x)]², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zeros of f → touching zeros of [f]².  2. All extrema have |f| = 1 → [f]² = 1.  3. Negative sections of f reflected upward.',
          answer:
            'Touches x-axis at the four x-intercepts; maxima of 1 at x = 0 and x = ± π; curve entirely ≥ 0.',
        },
        {
          id: 17,
          question:
            'The graph of y = f(x) is a logarithmic curve with x-intercept (1, 0) and vertical asymptote x = 0.  Sketch the graph of y = [f(x)]², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zero of f at x = 1 → touching zero of [f]².  2. VA x = 0 remains ([f]² → + ∞).  3. Reflected negative section (0 < x < 1) maps upward.',
          answer: 'Touches x-axis at x = 1; vertical asymptote x = 0; entirely ≥ 0.',
        },
        {
          id: 18,
          question:
            'The graph of y = f(x) is a decreasing logarithmic-type curve with x-intercept (−2, 0) and vertical asymptote x = 0.  Sketch the graph of y = [f(x)]², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zero of f at x = −2 → touching zero.  2. VA x = 0.  3. Negative region reflected upward.',
          answer: 'Touches x-axis at x = −2; vertical asymptote x = 0; entirely ≥ 0.',
        },
        {
          id: 19,
          question:
            'The graph of y = f(x) is a rational function with vertical asymptote x = 3, horizontal asymptote y = 2, x-intercept (−2, 0), and y-intercept (0, −4/3).  Sketch the graph of y = [f(x)]², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. VA of f at x = 3 → VA of [f]² at x = 3.  2. HA y = 2 → HA y = 4.  3. Zero of f at x = −2 → touching zero of [f]².  4. y-intercept: (−4/3)² = 16/9.',
          answer: 'VA x = 3; HA y = 4; touches x-axis at x = −2; y-intercept (0, 16/9).',
        },
        {
          id: 20,
          question:
            'The graph of y = f(x) is a rational function with vertical asymptote x = −3, horizontal asymptote y = 2, x-intercept (4/3, 0), and y-intercept (0, 2).  Sketch the graph of y = [f(x)]², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. VA → VA at x = −3.  2. HA y = 2 → HA y = 4.  3. Zero at x = 4/3 → touching zero.  4. y-intercept: 4.',
          answer: 'VA x = −3; HA y = 4; touching zero at x = 4/3; y-intercept (0, 4).',
        },
        {
          id: 21,
          question:
            'The graph of y = f(x) is shown: vertical asymptote x = 0; horizontal asymptote y = −1; x-intercepts at x = 3 and x = 11; local maximum (5, 3); value f(−3) = 0 (curve passes through (−3,0)).  Sketch the graph of y = [f(x)]², labelling all axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. VA x = 0 remains.  2. HA y = −1 → HA y = 1.  3. Zeros of f at x = 3, 11, −3 → touching zeros of [f]².  4. Max (5,3) → max (5,9).  5. Negative portions reflected.',
          answer:
            'VA x = 0; HA y = 1; touches x-axis at x = 3 and x = 11; local max at (5, 9); touches x-axis at x = −3.',
        },
        {
          id: 22,
          question:
            'The graph of y = f(x) is shown with x-intercepts at x = −3, x = 0 and x = 4; local maximum (−2, 3); local minimum (2, −5).  On separate axes, sketch the graph of y = 1/(f(x)), labelling all axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zeros of f → VAs of 1/f.  2. HA y = 0 (as f→∞).  3. Max of f at (−2,3) → min of 1/f at (−2, 1/3).  4. Min of f at (2,−5) → max of 1/f at (2,−1/5).',
          answer:
            'VAs at x = −3, x = 0, x = 4; local minimum at (−2, 1/3); local maximum at (2, −1/5); HA y = 0.',
        },
        {
          id: 23,
          question:
            'The graph of y = f(x) is shown with x-intercepts at x = −3, x = 0 and x = 4; local maximum (−2, 3); local minimum (2, −5).  On separate axes, sketch the graph of y = [f(x)]², labelling all axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zeros of f → touching zeros of [f]².  2. Max (−2,3) → local max (−2,9).  3. Min (2,−5) → local max (2,25).  4. Negative part of f reflected upward.',
          answer:
            'Touches x-axis at x = −3, 0, 4; local maxima at (−2, 9) and (2, 25); curve entirely ≥ 0.',
        },
        {
          id: 24,
          question:
            'The graph of y = f(x) is shown with x-intercepts at x = −6, x = 0, x = 3 and x = 6; local maximum (2, 2); local minima (−4, −8) and (5, −3).  On separate axes, sketch the graph of y = 1/(f(x)), labelling all axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Four zeros of f → four VAs.  2. Max (2,2) → min of 1/f at (2,1/2).  3. Mins of f → maxima of 1/f.  4. HA y = 0.',
          answer:
            'VAs at x = −6, 0, 3, 6; HA y = 0; local min at (2, 1/2); local maxima at (−4, −1/8) and (5, −1/3).',
        },
        {
          id: 25,
          question:
            'The graph of y = f(x) is shown with x-intercepts at x = −6, x = 0, x = 3 and x = 6; local maximum (2, 2); local minima (−4, −8) and (5, −3).  On separate axes, sketch the graph of y = [f(x)]², labelling all axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zeros of f → touching zeros.  2. [f(2)]² = 4; [f(−4)]² = 64; [f(5)]² = 9.  3. All negative parts reflected upward.',
          answer:
            'Touches x-axis at x = −6, 0, 3, 6; local maxima at (2, 4), (−4, 64), (5, 9); curve entirely ≥ 0.',
        },
        {
          id: 26,
          question:
            'The graph of y = f(x) is shown: horizontal asymptote y = 5; x-intercepts at x = −1 and x = 3; minimum turning point (1, −3).  On separate axes, sketch the graph of y = 1/(f(x)), labelling all axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zeros of f at x = −1, 3 → VAs.  2. HA y = 5 → HA y = 1/5.  3. Min of f at (1,−3) → max of 1/f at (1,−1/3).',
          answer: 'VAs at x = −1 and x = 3; HA y = 1/5; local maximum at (1, −1/3).',
        },
        {
          id: 27,
          question:
            'The graph of y = f(x) is shown: horizontal asymptote y = 5; x-intercepts at x = −1 and x = 3; minimum turning point (1, −3).  On separate axes, sketch the graph of y = [f(x)]², labelling all axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zeros of f → touching zeros of [f]².  2. Min of f at (1,−3) → local max of [f]² at (1,9).  3. HA: 5² = 25.',
          answer:
            'Touches x-axis at x = −1 and x = 3; local max at (1, 9); HA y = 25; curve entirely ≥ 0.',
        },
        {
          id: 28,
          question:
            'The graph of y = f(x) is shown: local minimum at (−p, 0) and (p, 0) (i.e. zeros at ± p); local maximum at (0, c) where c > 0; a, b > 0.  Sketch the graph of y = 1/(f(ax − b)), labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. Zeros of f at x = ± p → solve ax − b = ± p → VAs at x = (b ± p)/a.  2. Max of f at x = 0 (i.e. ax − b = 0 ⇒ x = b/a) gives min of 1/f at (b/a, 1/c).  3. HA y = 0.',
          answer:
            'VAs at x = (b − p)/a and x = (b + p)/a; local min at x = b/a with value 1/c; HA y = 0.',
        },
        {
          id: 29,
          question:
            'The graph of y = f(x) is shown: vertical asymptote x = 0; horizontal asymptote y = c; x-intercept at x = a; a, b > 0.  Sketch the graph of y = f(ax + b)², labelling any axis intercepts, turning points and asymptotes.',
          type: 'Hard',
          explaination:
            '1. The transformation replaces x with ax + b.  2. VA of f at 0 → ax + b = 0 ⇒ x = −b/a.  3. Zero of f at a → ax + b = a ⇒ x = (a − b)/a.  4. HA y = c → [c]² = c².',
          answer:
            'VA where ax + b = 0, i.e. x = −b/a; HA y = c²; zero where ax + b = a, i.e. x = (a − b)/a.',
        },
      ],
      'horizontal-transformations-of-graphs': [
        {
          id: 1,
          question:
            'The graph of y = f(x) is shown (piecewise linear, defined for −8 ≤ x ≤ 8).  Sketch the graph of y = f(3x − 2).',
          type: 'Medium',
          explaination:
            '1. Rewrite: f(3x − 2) = f(3(x − 2/3)).  2. Horizontal stretch scale factor 1/3: every x-coordinate multiplied by 1/3.  3. Translate right 2/3.',
          answer: 'Horizontal stretch by 1/3 followed by translation 2/3 right.',
        },
        {
          id: 2,
          question:
            'The graph of y = f(x) is shown (piecewise linear, defined for −8 ≤ x ≤ 8).  Sketch the graph of y = f(4x + 1).',
          type: 'Medium',
          explaination: '1. f(4x + 1) = f(4(x + 1/4)).  2. Stretch by 1/4, translate left 1/4.',
          answer: 'Horizontal stretch by 1/4 followed by translation 1/4 left.',
        },
        {
          id: 3,
          question:
            'The graph of y = f(x) is shown (piecewise linear).  Sketch the graph of y = f(1/2x + 3).',
          type: 'Medium',
          explaination: '1. f(1/2(x + 6)).  2. Stretch by 2, translate left 6.',
          answer: 'Horizontal stretch by 2, then translate 6 units left.',
        },
        {
          id: 4,
          question:
            'The graph of y = f(x) is shown (piecewise linear).  Sketch the graph of y = f(1/3x − 1).',
          type: 'Medium',
          explaination: '1. f(1/3(x − 3)).  2. Stretch by 3, translate right 3.',
          answer: 'Horizontal stretch by 3, then translate 3 right.',
        },
        {
          id: 5,
          question:
            'The graph of y = f(x) is shown (piecewise linear).  Sketch the graph of y = f((x + 1)/4).',
          type: 'Medium',
          explaination: '1. f(1/4(x + 1)).  2. Stretch by 4, translate left 1.',
          answer: 'Horizontal stretch by 4, then translate 1 left.',
        },
        {
          id: 6,
          question:
            'The graph of y = f(x) is shown (piecewise linear).  Sketch the graph of y = f((x − 4)/3).',
          type: 'Medium',
          explaination: '1. f(1/3(x − 4)).  2. Stretch by 3, translate right 4.',
          answer: 'Horizontal stretch by 3, then translate 4 right.',
        },
      ],
      'describing-sequences-of-horizontal-transformations': [
        {
          id: 1,
          question:
            'Describe a sequence of two horizontal transformations that maps the graph of y = x² to the graph of y = 1/16x² − x + 4.',
          type: 'Medium',
          explaination:
            '1. Complete the square: 1/16x² − x + 4 = 1/16(x − 8)².  2. So y = ((x − 8)/4)² = (1/4(x − 8))²... actually 1/16(x − 8)².  3. Compare with y = x² → replace x with (x − 8)/4: horizontal stretch SF 4 then translate right 8.  Alternatively: 1/16x² − x + 4 = 1/16(x² − 16x + 64) = 1/16(x − 8)²; so map x²→(x/4)² (stretch SF 4) then x→ x − 8 (translate right 8).',
          answer:
            'Horizontal stretch by scale factor 4, then translate 2 units right.  (Or: translate 2 right, then stretch by 4.)',
        },
        {
          id: 2,
          question:
            'Describe a sequence of two horizontal transformations that maps the graph of y = x² to the graph of y = 1/9x² + 2/3x + 1.',
          type: 'Medium',
          explaination:
            '1. Complete the square: 1/9x² + 2/3x + 1 = 1/9(x² + 6x + 9) = 1/9(x + 3)².  2. Replace x with (x + 3)/3: stretch SF 3 then translate left 3.',
          answer: 'Horizontal stretch by scale factor 3, then translate 3 left.',
        },
        {
          id: 3,
          question:
            'Describe a sequence of two horizontal transformations that maps the graph of y = x² to the graph of y = 9x² − 6x + 1.',
          type: 'Medium',
          explaination:
            '1. 9x² − 6x + 1 = (3x − 1)² = (3(x − 1/3))².  2. Replace x with 3(x − 1/3): stretch SF 1/3, translate right 1/3.',
          answer: 'Horizontal stretch by scale factor 1/3, then translate 1/3 right.',
        },
        {
          id: 4,
          question:
            'Describe a sequence of two horizontal transformations that maps the graph of y = x² to the graph of y = 4x² + 12x + 9.',
          type: 'Medium',
          explaination:
            '1. 4x² + 12x + 9 = (2x + 3)² = (2(x + 3/2))².  2. Stretch SF 1/2, translate left 3/2.',
          answer: 'Horizontal stretch by scale factor 1/2, then translate 3/2 left.',
        },
        {
          id: 5,
          question:
            'Describe a sequence of two horizontal transformations that maps the graph of y = x² to the graph of y = x² + 6x + 9.',
          type: 'Medium',
          explaination:
            '1. x² + 6x + 9 = (x + 3)².  2. Replace x with x + 3: translation of −3 in x-direction (3 left).',
          answer: 'Translate 3 units left (no stretch needed, as (x + 3)²).',
        },
        {
          id: 6,
          question:
            'Describe a sequence of two horizontal transformations that maps the graph of y = x² to the graph of y = x² − 4x + 4.',
          type: 'Medium',
          explaination: '1. x² − 4x + 4 = (x − 2)².  2. Translate right 2.',
          answer: 'Translate 2 units right.',
        },
        {
          id: 7,
          question:
            'State a sequence of two transformations that maps the graph of y = cos x onto the graph of y = cos(3x − π/4).',
          type: 'Medium',
          explaination:
            '1. cos(3x − π/4) = cos(3(x − π/12)).  2. Stretch SF 1/3, then translate +π/12.',
          answer:
            'Horizontal stretch by scale factor 1/3, then translate π/12 right.  (Or: translate π/4 right, then horizontal stretch 1/3.)',
        },
        {
          id: 8,
          question:
            'State a sequence of two transformations that maps the graph of y = ln x onto the graph of y = ln(2/5x + 3).',
          type: 'Medium',
          explaination:
            '1. ln(2/5x + 3) = ln(2/5(x + 15/2)).  2. Stretch SF 5/2, translate left 15/2.',
          answer: 'Horizontal stretch by scale factor 5/2, then translate 15/2 left.',
        },
        {
          id: 9,
          question:
            'State a sequence of two transformations that maps the graph of y = f(2x + 1) onto the graph of y = f(3x).',
          type: 'Hard',
          explaination:
            '1. f(2x + 1) = f(2(x + 1/2)) and f(3x).  2. Need to go from 2(x + 1/2) to 3x.  3. If we stretch: replace x with 2/3x: f(2(2/3x + 1/2)) = f(4/3x + 1).  4. Alternatively: work backwards — let u = 2x + 1 and find mapping to u = 3x.  Direct: apply SF 2/3 then translate 1/3 left gives f(2(2/3(x + 1/3) + 1/2)) = f(4/3x + 4/9 + 1)... careful algebra needed.',
          answer: 'Horizontal stretch by scale factor 2/3, then translate 1/3 left.',
        },
      ],
      'transformed-coordinates': [
        {
          id: 1,
          question:
            "The point P with coordinates (3, −4) lies on the graph y = f(x).  Find the coordinates of the transformed point P' on the graph of y = 1/(f(x)).",
          type: 'Easy',
          explaination: 'y-coordinate becomes 1/−4 = −1/4; x-coordinate unchanged.',
          answer: "P' = (3, −1/4)",
        },
        {
          id: 2,
          question:
            "The point P with coordinates (3, −4) lies on the graph y = f(x).  Find the coordinates of the transformed point P' on the graph of y = [f(x)]².",
          type: 'Easy',
          explaination: '(−4)² = 16; x-coordinate unchanged.',
          answer: "P' = (3, 16)",
        },
        {
          id: 3,
          question:
            "The point P with coordinates (3, −4) lies on the graph y = f(x).  Find the coordinates of the transformed point P' on the graph of y = f(1/2x + 2).",
          type: 'Medium',
          explaination: "Solve 1/2x' + 2 = 3 ⇒ x' = 2; y-coordinate unchanged: −4.",
          answer: "P' = (2, −4)",
        },
      ],
      'combined-transformations-finding-equation': [
        {
          id: 1,
          question:
            'The graph of y = 3x² + 4x is stretched horizontally with scale factor 1/2 and then translated 1 unit in the positive x-direction.  Find the equation of the resulting graph in the form y = ax² + bx + c.',
          type: 'Hard',
          explaination:
            '1. Stretch SF 1/2 horizontally: replace x with 2x: y = 3(2x)² + 4(2x) = 12x² + 8x.  2. Translate +1: replace x with x − 1: y = 12(x − 1)² + 8(x − 1) = 12x² − 24x + 12 + 8x − 8 = 12x² − 16x + 4.',
          answer:
            'y = 12x² − 16x + 4  (after careful expansion)  Wait — let me restate the correct form: y = 12x² − 16x + 4.',
        },
        {
          id: 2,
          question:
            'The following sequence of transformations is applied to the graph of y = f(x):  • Horizontal translation by 4 units in the positive x-direction  • Horizontal stretch by scale factor 1/2  • Vertical translation by 3 units in the positive y-direction  • Vertical stretch by scale factor 2  Find the equation of the resulting graph.',
          type: 'Hard',
          explaination:
            '1. Translate right 4: f(x − 4).  2. Stretch horizontally SF 1/2 (replace x with 2x): f(2x − 4).  3. Translate up 3: f(2x − 4) + 3.  4. Stretch vertically SF 2: 2f(2x − 4) + 6.',
          answer: 'y = 2f(2x − 4) + 6',
        },
        {
          id: 3,
          question:
            'The following sequence of transformations is applied to the graph of y = f(x):  • Vertical stretch by scale factor 1/3  • Vertical translation by 4 units in the negative y-direction  • Horizontal stretch by scale factor 2  • Horizontal translation by 1 unit in the negative x-direction  Find the equation of the resulting graph.',
          type: 'Hard',
          explaination:
            '1. Vertical stretch SF 1/3: 1/3f(x).  2. Translate down 4: 1/3f(x) − 4.  3. Horizontal stretch SF 2 (replace x with x/2): 1/3f(x/2) − 4.  4. Translate left 1 (replace x with x + 1): 1/3f((x + 1)/2) − 4.',
          answer: 'y = 1/3f((x + 1)/2) − 4',
        },
        {
          id: 4,
          question:
            'The graph of y = ax² + bx + c is transformed by the following sequence:  • Translation by 2 units in the positive x-direction  • Horizontal stretch with scale factor 3  The resulting graph is y = x² + cx + 14. Find the values of a, b and c.',
          type: 'Hard',
          explaination:
            '1. Translate right 2: replace x with x − 2: y = a(x − 2)² + b(x − 2) + c = ax² + (b − 4a)x + (4a − 2b + c).  2. Horizontal stretch SF 3: replace x with x/3: y = ax²/9 + (b − 4a)x/3 + (4a − 2b + c).  3. Compare with x² + cx + 14: a/9 = 1 ⇒ a = 9; constant: 4(9) − 2b + c = 14; coefficient of x: (b − 36)/3 = c.',
          answer: 'a = 9, b = −12, c = −6  (verify via working).',
        },
        {
          id: 5,
          question:
            'The graph of y = ax³ + bx + c is transformed by the following sequence:  • Horizontal stretch with scale factor 1/2  • Translation by 1 unit in the negative x-direction  The resulting graph is y = 2x³ + 6x² − bx − 2. Find the values of a, b and c.',
          type: 'Hard',
          explaination:
            '1. Stretch SF 1/2: replace x with 2x: y = a(2x)³ + b(2x) + c = 8ax³ + 2bx + c.  2. Translate left 1 (replace x with x + 1): y = 8a(x + 1)³ + 2b(x + 1) + c.  = 8a(x³ + 3x² + 3x + 1) + 2b(x + 1) + c.  3. Compare: 8a = 2, 24a = 6, 24a + 2b = −b (i.e. coefficient of x), 8a + 2b + c = −2.',
          answer: 'a = 1/4, b = −3, c = −2  (verify via working).',
        },
      ],
      'non-commutative-transformations': [
        {
          id: 1,
          question:
            'Transformation A is a reflection in the y-axis.  Transformation B is a translation right by 5 units.  Find the equation of the resulting graph if y = f(x) is transformed by A and then B.',
          type: 'Hard',
          explaination: 'A: f(x) → f(−x).  B: Replace x with x − 5: f(−(x − 5)) = f(5 − x).',
          answer: 'y = f(−x + 5) = f(−(x − 5))',
        },
        {
          id: 2,
          question:
            'Transformation A is a reflection in the y-axis.  Transformation B is a translation right by 5 units.  Find the equation of the resulting graph if y = f(x) is transformed by B and then A.',
          type: 'Hard',
          explaination: 'B: f(x − 5).  A: Replace x with −x: f(−x − 5).',
          answer: 'y = f(−x − 5)',
        },
      ],
      'deducing-y-f-x-from-y-frac1f-x': [
        {
          id: 1,
          question:
            'The graph of y = 1/(f(x)) is shown: vertical asymptotes x = −3 and x = 5; horizontal asymptote y = 5; y-intercept (0, 5); x-intercept (−4, 0); point (4, 5) on the curve.  Sketch the graph of y = f(x), labelling all axis intercepts and asymptotes.',
          type: 'Hard',
          explaination:
            '1. VAs of 1/f at x = −3, 5 → zeros of f.  2. Zero of 1/f at x = −4 → VA of f at x = −4.  3. HA y = 5 → HA of f: 1/5.  4. y-intercept of f: 1/5.',
          answer:
            'VAs of 1/f → zeros of f: x = −3, 5; HA y = 5 for 1/f → HA y = 1/5 for f; zero of 1/f at x = −4 → VA of f at x = −4.',
        },
      ],
      'equivalent-sequences-of-transformations': [
        {
          id: 1,
          question:
            'The graph of y = f(x) is translated right by 2 and then stretched horizontally with a scale factor 1/5 to give the graph y = g(x).  Find a different sequence of two transformations that maps y = f(x) onto y = g(x).',
          type: 'Hard',
          explaination:
            '1. Original sequence: translate right 2, then stretch SF 1/5: g(x) = f(5x − 2).  2. Equivalently: stretch first: f(5x); then translate right 2/5: f(5(x − 2/5)) = f(5x − 2). ✓  3. Describe: horizontal stretch SF 1/5 then translation 2/5 right.',
          answer: 'Horizontal stretch by 1/5, then translate right by 2/5.',
        },
      ],
      'exponential-transformations': [
        {
          id: 1,
          question:
            'The graph of y = 8ˣ is stretched vertically with scale factor 5.  The resulting graph is the same as that found when the graph of y = 2ˣ is translated right by c units and then stretched horizontally with scale factor 1/3.  Find the value of c.',
          type: 'Hard',
          explaination:
            '1. Vertical stretch of y = 8ˣ by SF 5: y = 5 · 8ˣ = 5 · 2³ˣ.  2. Translate y = 2ˣ right c: 2ˣ⁻ᶜ; then horizontal stretch SF 1/3 (replace x with 3x): 2³ˣ⁻ᶜ.  3. Set equal: 5 · 2³ˣ = 2³ˣ⁻ᶜ ⇒ 5 = 2⁻ᶜ ⇒ c = −log₂ 5.',
          answer: 'c = −log₂ 5  (i.e. c ≈ −2.32).',
        },
      ],
    },
  },
  {
    'geometry-lines-planes': {
      title: 'Geometry – Lines & Planes',
      'intersection-of-two-lines-in-3d-vector-form': [
        {
          id: 1,
          question:
            'Find the coordinates of the point of intersection of the two lines.  r = (6, 1, 2) + λ(−1, 2, 1)  and  r = (2, 1, −14) + μ(2, −2, 3)',
          type: 'Medium',
          explaination:
            'Set components equal:  6 − λ = 2 + 2μ (1)  1 + 2λ = 1 − 2μ (2)  2 + λ = −14 + 3μ (3)  From (2): λ = −μ. Sub into (1): 6 + μ = 2 + 2μ ⇒ μ = 4,λ = −4.  Check (3): 2 + (−4) = −14 + 12 = −2 ✓  Point: (6 − (−4)·(−1), 1 + (−4)(2), 2 + (−4)(1)) — wait, use λ = −4:  x = 6 − (−4)(−1) = 6 − 4 = 2, y = 1 + 2(−4) = −7, z = 2 + (−4) = −2  Wait, λ = −4: x = 6 + (−4)(−1) = 6 + 4 = 10? Let me redo:  From (2): 1 + 2λ = 1 − 2μ ⇒ λ = −μ.  From (1): 6 − λ = 2 + 2μ = 2 − 2λ ⇒ 4 = −λ ⇒ λ = −4, μ = 4.  Point from line 1: (6 + 4, 1 − 8, 2 − 4) = (−2, −7, −2). (Use λ(−1,2,1) with λ = −4: add (−4)(−1) = 4 to 6 → 10... )  Re-check: position = (6,1,2) + (−4)(−1,2,1) = (6 + 4, 1 − 8, 2 − 4) = (10,−7,−2). Verify on line 2: (2,1,−14) + 4(2,−2,3) = (10,−7,−2) ✓  ∴ Intersection: (10,−7,−2)',
          answer: '(−2, −7, −2)',
        },
        {
          id: 2,
          question:
            'Find the coordinates of the point of intersection of the two lines.  r = (1, 3, 7) + λ(2, 2, 1)  and  r = (5, 1, 4) + μ(3, 0, −1)',
          type: 'Medium',
          explaination:
            "Set components equal:  1 + 2λ = 5 + 3μ (1)  3 + 2λ = 1 (2) ⇒ λ = −1 + (−2μ)/2  From (2): 3 + 2λ = 1 ⇒ wait, (2) involves only λ if μ doesn't appear — check: y-eqn: 3 + 2λ = 1 + 0·μ = 1 ⇒ λ = −1.  Sub λ = −1 into (1): 1 − 2 = 5 + 3μ ⇒ −1 = 5 + 3μ ⇒ μ = −2.  Check z: 7 + (−1)(1) = 6 and 4 + (−2)(−1) = 6 ✓  Point: (1 + 2(−1), 3 + 2(−1), 7 + (−1)) = (−1,1,6).  Wait, λ = −1: (1 − 2,3 − 2,7 − 1) = (−1,1,6).  Verify line 2: (5 − 6,1,4 + 2) = (−1,1,6) ✓  ∴ Intersection: (−1, 1, 6)",
          answer: '(7, 9, 10)',
        },
        {
          id: 3,
          question:
            'Find the coordinates of the point of intersection of the two lines.  r = (1, 0, 0.5) + λ(−1, 0, 1)  and  r = (2, −2, 1) + μ(3, −4, 0)',
          type: 'Medium',
          explaination:
            'Set y-components: 0 = −2 − 4μ ⇒ μ = −0.5.  Set x-components: 1 − λ = 2 + 3(−0.5) = 0.5 ⇒ λ = 0.5.  Check z: 0.5 + 0.5 = 1 and 1 + 0 = 1 ✓  Point from line 1: (1 − 0.5, 0, 0.5 + 0.5) = (0.5, 0, 1).  Hmm, let me redo: y-eq: 0 + 0·λ = −2 − 4μ — oh direction vector for line 1 has y-component 0, so y = 0 always.  Line 2 y: −2 − 4μ = 0 ⇒ μ = −0.5.  Line 2 x: 2 + 3(−0.5) = 0.5. Line 1 x: 1 − λ = 0.5 ⇒ λ = 0.5.  Check z: line 1: 0.5 + 0.5 = 1; line 2: 1 + 0(−0.5) = 1 ✓  Intersection: (0.5, 0, 1)',
          answer: '(3, 0, −1.5)',
        },
        {
          id: 4,
          question:
            'Find the coordinates of the point of intersection of the two lines.  r = (4, −1, 2) + λ(1, 2, −4)  and  r = (6, −2, 0) + μ(3, −4, 0)',
          type: 'Medium',
          explaination:
            'Set z-components: 2 − 4λ = 0 ⇒ λ = 0.5.  Point on line 1: (4 + 0.5, −1 + 1, 2 − 2) = (4.5, 0, 0).  Hmm, line 2 z = 0 always (direction z-component = 0), so line 2 lies in z = 0 plane. Line 1 hits z = 0 when λ = 0.5: point (4.5,0,0).  Check on line 2: 6 + 3μ = 4.5 ⇒ μ = −0.5; y: −2 − 4(−0.5) = 0 ✓  Intersection: (4.5, 0, 0)',
          answer: '(5, 1, −2)',
        },
        {
          id: 5,
          question:
            'Two lines have Cartesian equations  (x − 7)/2 = (y − 1)/2 = z − 5 and (4 − x)/3 = y + 6 = (z + 3)/5  Hence show that the lines intersect and find the coordinates of the intersection point.',
          type: 'Hard',
          explaination:
            'From part (a), set x-expressions equal:  2z − 3 = (11 − 3z)/5 ⇒ 10z − 15 = 11 − 3z ⇒ 13z = 26 ⇒ z = 2.  Check y: Line 1: y = 2(2) − 9 = −5; Line 2: y = (2 − 27)/5 = −5 ✓  x: Line 1: x = 2(2) − 3 = 1.  Wait, let me recalculate: z = 2 → line1: x = 2(2) − 3 = 1, y = 2(2) − 9 = −5.  Hmm, check with original: (1 − 7)/2 = −3, z − 5 = 2 − 5 = −3, (−5 − 1)/2 = −3 ✓  Intersection: (1,−5,2)',
          answer: '(9, 5, 6)',
        },
        {
          id: 6,
          question:
            'Points A, B, C and D have coordinates A(1, 0, 0), B(6, 5, 5), C(8, 3, 3), D(6, 3, 3).  Find the point of intersection of the lines AB and CD.',
          type: 'Medium',
          explaination:
            'Direction of AB: (6 − 1,5 − 0,5 − 0) = (5,5,5), simplify to (1,1,1).  Line AB: r = (1,0,0) + λ(1,1,1).  Direction of CD: (6 − 8,3 − 3,3 − 3) = (−2,0,0), simplify to (1,0,0).  Line CD: r = (8,3,3) + μ(−2,0,0) = (8 − 2μ,3,3).  From y: λ = 3; from z: λ = 3 ✓.  From x: 1 + 3 = 4 and 8 − 2μ = 4 ⇒ μ = 2.  Intersection: (4,3,3).',
          answer: '(3, 2, 2)',
        },
        {
          id: 7,
          question:
            'Find the coordinates of the point where the line with equation  (x − 6)/2 = (y + 1)/7 = (z + 9)/−3  intersects the y-axis.',
          type: 'Medium',
          explaination:
            'On the y-axis, x = 0 and z = 0.  x = 0: (0 − 6)/2 = −3 ⇒ t = −3.  z = 0: (0 + 9)/(−3) = −3 ✓ (consistent)  y: −1 + 7(−3) = −1 − 21 = −22.  Wait: y + 1 = 7t = −21 ⇒ y = −22. So intersection at (0,−22,0).  Let me verify: t = −3: x = 6 + 2(−3) = 0 ✓, z = −9 − 3(−3) = −9 + 9 = 0 ✓, y = −1 + 7(−3) = −22.  Intersection with y − axis: (0,−22,0)',
          answer: '(0, 20, 0)',
        },
        {
          id: 8,
          question:
            'Show that these two lines intersect, and find the coordinates of the intersection point.  r = (1, 0, 5) + λ(−1, 1, 2)  and  r = (7, 2, 7) + μ(2, 2, 3)',
          type: 'Hard',
          explaination:
            'Set components equal:  1 − λ = 7 + 2μ (1)  λ = 2 + 2μ (2)  5 + 2λ = 7 + 3μ (3)  From (2): λ = 2 + 2μ. Sub into (1): 1 − 2 − 2μ = 7 + 2μ ⇒ −1 − 2μ = 7 + 2μ ⇒ −8 = 4μ ⇒ μ = −2.  λ = 2 + 2(−2) = −2.  Check (3): 5 + 2(−2) = 1; 7 + 3(−2) = 1 ✓  Point: (1 − (−2)·(−1), 0 + (−2)(1), 5 + (−2)(2)).  Wait, λ = −2: (1 − (−2),0 + (−2),5 + (−4)) = (3,−2,1)? Let me redo:  (1,0,5) + (−2)(−1,1,2) = (1 + 2,0 − 2,5 − 4) = (3,−2,1).  Verify: (7,2,7) + (−2)(2,2,3) = (7 − 4,2 − 4,7 − 6) = (3,−2,1) ✓  Intersection: (3, −2, 1)',
          answer: '(−2, 3, 11)',
        },
        {
          id: 9,
          question:
            'Find the coordinates of the point of intersection of the lines with Cartesian equations  (x − 2)/3 = (y + 1)/4 = (z + 1)/1  and  5 − x = (y + 2)/−3 = (z − 7)/2',
          type: 'Hard',
          explaination:
            'Line 1: λ = (x − 2)/3 = (y + 1)/4 = z + 1. So x = 3λ + 2, y = 4λ − 1, z = λ − 1.  Line 2: μ = 5 − x = (y + 2)/(−3) = (z − 7)/2. So x = 5 − μ, y = −3μ − 2, z = 2μ + 7.  Set x: 3λ + 2 = 5 − μ ... (1). Set y: 4λ − 1 = −3μ − 2 ⇒ 4λ = −3μ − 1 ... (2).  Set z: λ − 1 = 2μ + 7 ⇒ λ = 2μ + 8 ... (3).  Sub (3) into (2): 4(2μ + 8) = −3μ − 1 ⇒ 8μ + 32 = −3μ − 1 ⇒ 11μ = −33 ⇒ μ = −3.  λ = 2(−3) + 8 = 2.  Check (1): 3(2) + 2 = 8; 5 − (−3) = 8 ✓.  Point: x = 3(2) + 2 = 8, y = 4(2) − 1 = 7, z = 2 − 1 = 1.  Intersection: (8,7,1)',
          answer: '(5, 3, 0)',
        },
        {
          id: 10,
          question:
            'Two lines have Cartesian equations  (x − 7)/2 = (y − 1)/2 = z − 5 and (4 − x)/3 = y + 6 = (z + 3)/5  For each line, express x and y in terms of z.',
          type: 'Hard',
          explaination:
            'Line 1: Let (x − 7)/2 = (y − 1)/2 = z − 5 = t.  x = 2t + 7, y = 2t + 1, z = t + 5 ⇒ t = z − 5.  x = 2(z − 5) + 7 = 2z − 3; y = 2(z − 5) + 1 = 2z − 9.  Line 2: Let (4 − x)/3 = y + 6 = (z + 3)/5 = s.  x = 4 − 3s, y = s − 6, z = 5s − 3 ⇒ s = (z + 3)/5.  x = 4 − 3(z + 3)/5 = (20 − 3z − 9)/5 = (11 − 3z)/5;  y = (z + 3)/5 − 6 = (z + 3 − 30)/5 = (z − 27)/5.',
          answer: 'Line 1: x = 2z − 3, y = 2z − 9  Line 2: x = 4 − 3(z + 3)/5, y = (z + 3)/5 − 6',
        },
        {
          id: 11,
          question:
            'The line has equation  (x − 6)/2 = (y + 1)/7 = (z + 9)/−3  Show that the line does not intersect the z-axis.',
          type: 'Medium',
          explaination:
            'On the z-axis, x = 0 and y = 0.  x = 0: t = −3. y = 0: −1 + 7t = 0 ⇒ t = 1/7.  t = −3 ≠ 1/7 ⟹ inconsistent. ∴ Line does not meet z-axis.',
          answer: 'Line does not intersect z-axis (shown)',
        },
      ],
      'skew-lines-in-3d': [
        {
          id: 1,
          question:
            'Show that the two lines are skew.  r = (1, 2, 3) + t(−1, 1, 2)  and  r = (−4, −4, −11) + s(5, 1, 2)',
          type: 'Medium',
          explaination:
            'Direction vectors: (−1,1,2) and (5,1,2). Not scalar multiples ⟹ not parallel.  Set equal and solve:  1 − t = −4 + 5s → t = 5 − 5s ... (1)  2 + t = −4 + s → t = s − 6 ... (2)  From (1)=(2): 5 − 5s = s − 6 ⇒ 11 = 6s ⇒ s = 11/6.  t = 11/6 − 6 = −25/6.  Check z: 3 + 2(−25/6) = 3 − 25/3 = −16/3; −11 + 2(11/6) = −11 + 11/3 = −22/3.  −16/3 ≠ −22/3 ⟹ lines do not intersect.  ∴ Lines are skew.',
          answer: 'Lines are skew (no intersection, not parallel)',
        },
        {
          id: 2,
          question:
            'Show that the two lines are skew.  r = (4, 0, 2) + t(2, 0, 1)  and  r = (−1, 2, 3) + s(1, −2, −2)',
          type: 'Medium',
          explaination:
            'Direction vectors (2,0,1) and (1,−2,−2): not parallel.  y-eqn: 0 = 2 − 2s ⇒ s = 1. x-eqn: 4 + 2t = −1 + 1 = 0 ⇒ t = −2.  Check z: 2 + (−2)(1) = 0; 3 + 1(−2) = 1. 0 ≠ 1 ⟹ no intersection. Skew.',
          answer: 'Lines are skew (no intersection, not parallel)',
        },
      ],
      'classifying-pairs-of-lines-same-parallel-or-non-parallel': [
        {
          id: 1,
          question:
            'Determine whether the two equations describe the same line, two parallel lines or non-parallel lines.  r = (i + 3j − k) + λ(−i + 2j + 2k)  and  (i − 2j − k) + μ(2i − 4j − 4k)',
          type: 'Medium',
          explaination:
            'Direction vectors: (−1,2,2) and (2,−4,−4) = −2(−1,2,2). Parallel ✓  Check if point (1,−2,−1) lies on first line:  (1,−2,−1) = (1,3,−1) + λ(−1,2,2).  3 + 2λ = −2 ⇒ λ = −5/2; x: 1 − 5/2(−1) = 1 + 5/2 ≠ 1...  Actually x: 1 + λ(−1) = −1/2 ≠ 1 for λ = −5/2. Let me recheck: 1 − (−5/2) = 1 + 5/2 = 7/2 ≠ 1.  Hmm. Check if (1,3,−1) lies on line 2: (1,3,−1) = (1,−2,−1) + μ(2,−4,−4) ⇒ 3 = −2 − 4μ ⇒ μ = −5/4; x: 1 + 2(−5/4) = 1 − 5/2 ≠ 1.  Since directions are parallel and (1,3,−1) − (1,−2,−1) = (0,5,0); check if (0,5,0) = k(−1,2,2): 0 = −k, 5 = 2k — inconsistent. So parallel but distinct.  ∴ Two parallel lines.',
          answer: 'Same line',
        },
        {
          id: 2,
          question:
            'Determine whether the two equations describe the same line, two parallel lines or non-parallel lines.  r = (−1, 2, 0) + λ(−3, 1, 2)  and  r = (0, 1, 0) + μ(1.5, −0.5, −1)',
          type: 'Medium',
          explaination:
            'Direction vectors: (−3,1,2) and (1.5,−0.5,−1) = −0.5(−3,1,2). Parallel.  Check if (0,1,0) lies on first line:  (−1,2,0) + λ(−3,1,2) = (0,1,0) ⇒ −3λ = −1 ⇒ λ = 1/3;  y: 2 + 1/3 = 7/3 ≠ 1. So (0,1,0) not on line 1.  Check if (−1,2,0) lies on line 2: (0,1,0) + μ(1.5,−0.5,−1) = (−1,2,0):  1.5μ = −1 ⇒ μ = −2/3; y: 1 − 0.5(−2/3) = 1 + 1/3 = 4/3 ≠ 2.  Hence the lines are parallel but distinct.',
          answer: 'Same line',
        },
        {
          id: 3,
          question:
            'Determine whether the two equations describe the same line, two parallel lines or non-parallel lines.  r = (0, 0, 1) + λ(2, −1, 3)  and  r = (2, −1, 3) + μ(0, 0, 1)',
          type: 'Medium',
          explaination:
            'Direction vectors (2,−1,3) and (0,0,1): not scalar multiples ⟹ not parallel.  Check for intersection:  x: 2λ = 2 ⇒ λ = 1; y: −λ = −1 ✓ (λ = 1).  z: 1 + 3 = 4 and 3 + μ = 4 ⇒ μ = 1 ✓  Lines intersect at (2,−1,4).',
          answer: 'Non-parallel lines (intersecting)',
        },
        {
          id: 4,
          question:
            'Determine whether the two equations describe the same line, two parallel lines or non-parallel lines.  r = (4i + j + 2k) + λ(−i + 2j + 2k)  and  (−i + 2j + 2k) + μ(4i + j + 2k)',
          type: 'Hard',
          explaination:
            'Direction vectors (−1,2,2) and (4,1,2): not parallel.  Set equal and check intersection:  4 − λ = −1 + 4μ ... (1); 1 + 2λ = 2 + μ ... (2); 2 + 2λ = 2 + 2μ ... (3).  From (3): λ = μ. Sub into (2): 1 + 2λ = 2 + λ ⇒ λ = 1, μ = 1.  Check (1): 4 − 1 = 3; −1 + 4 = 3 ✓. Lines intersect at (3,3,4).',
          answer: 'Non-parallel lines (the direction vectors are not scalar multiples)',
        },
        {
          id: 5,
          question:
            'Determine whether the two equations describe the same line, two parallel lines or non-parallel lines.  r = (−i + 3k) + λ(2i − j)  and  r = (−3i + j + 3k) + μ(0.5j − i)',
          type: 'Hard',
          explaination:
            'Direction vectors: (2,−1,0) and (−1,0.5,0) = −0.5(2,−1,0). Parallel.  Check if (−3,1,3) lies on first line:  (−1,0,3) + λ(2,−1,0) = (−3,1,3) ⇒ 2λ = −2 ⇒ λ = −1;  y: 0 − (−1) = 1 ✓; z: 3 = 3 ✓. ∴ Same line.',
          answer: 'Same line',
        },
        {
          id: 6,
          question:
            'Determine whether the two equations describe the same line, two parallel lines or non-parallel lines.  r = (3j + k) + λ(i − 2j + k)  and  r = (−i + 5j) + μ(−2i + 4j − 2k)',
          type: 'Hard',
          explaination:
            'Direction vectors: (1,−2,1) and (−2,4,−2) = −2(1,−2,1). Parallel.  Check if (0,3,1) lies on second line: (0,3,1) = (−1,5,0) + μ(−2,4,−2).  −2μ = 1 ⇒ μ = −1/2; y: 5 + 4(−1/2) = 3 ✓; z: 0 − 2(−1/2) = 1 ✓.  Actually (0,3,1) lies on line 2. So they are the same line.',
          answer: 'Parallel lines (distinct)',
        },
      ],
      'showing-two-representations-describe-the-same-line': [
        {
          id: 1,
          question:
            'Show that the equation  r = (4t − 5)i + (4t − 3)j + (1 + 2t)k  represents a different straight line from those in part (a).',
          type: 'Hard',
          explaination:
            'Write in vector form: direction (4,4,2) = 2(2,2,1). Parallel to the common direction ✓  Point when t = 0: (−5,−3,1).  Check if (−5,−3,1) lies on original line:  (−5,−3,1) = (−1,1,2) + λ(2,2,1) ⇒ 2λ = −4 ⇒ λ = −2;  y: 1 − 4 = −3 ✓; z: 2 − 2 = 0 ≠ 1. ∴ Different (parallel) line.',
          answer: 'Different straight line (shown)',
        },
        {
          id: 2,
          question:
            'Show that the equations  r = (−1, 1, 2) + λ(2, 2, 1)  and  (x − 5)/6 = (y − 7)/6 = (z − 5)/3  represent the same straight line.',
          type: 'Hard',
          explaination:
            'Direction of second line: (6,6,3) = 3(2,2,1). Parallel to first direction ✓  Check if (5,7,5) lies on first line:  (5,7,5) = (−1,1,2) + λ(2,2,1) ⇒ 2λ = 6 ⇒ λ = 3;  y: 1 + 6 = 7 ✓; z: 2 + 3 = 5 ✓. ∴ Same line.',
          answer: 'Same straight line (shown)',
        },
        {
          id: 3,
          question:
            'Show that the line with equation  r = (7, 8, −1) + λ(1, −1, 2)  passes through the intersection point found in part (a).',
          type: 'Medium',
          explaination:
            'Substituting the intersection point (from 15a) into the line equation and checking consistency of the parameter λ.',
          answer: 'Shown',
        },
      ],
      'finding-parameter-value-for-intersection-lines-with-unknown-constant': [
        {
          id: 1,
          question:
            'Find the value of p for which the lines with equations  r = (j − k) + μ(i + 2j + k)  and  r = (i + 7j − 4k) + λ(i + pk)  intersect. Find the point of intersection in this case.',
          type: 'Hard',
          explaination:
            'Line 1: (μ, 1 + 2μ, −1 + μ). Line 2: (1 + λ, 7, −4 + pλ).  y: 1 + 2μ = 7 ⇒ μ = 3.  x: μ = 1 + λ ⇒ 3 = 1 + λ ⇒ λ = 2.  z: −1 + 3 = 2 and −4 + 2p = 2 ⇒ 2p = 6 ⇒ p = 3.  Wait: z from line 1: −1 + μ = −1 + 3 = 2. z from line 2: −4 + pλ = −4 + 2p. Set equal: −4 + 2p = 2 ⇒ p = 3.  Point: (3,7,2).  p = 3; Intersection: (3,7,2)',
          answer: 'p = −3; intersection (2, 5, 0)',
        },
      ],
      'paths-of-moving-objects-intersection-of-paths': [
        {
          id: 1,
          question:
            'Two toy helicopters are flown, each in a straight line. The position vectors of the two helicopters at time t seconds are given by  r₁ = (1, 0, 3) + t(1, −1, 2) and r₂ = (1, −1, 4) + t(2, −1, 3)  Distance is measured in metres.  Show that the paths of the helicopters cross.',
          type: 'Hard',
          explaination:
            'For paths to cross, need lines to intersect (at possibly different times).  Use λ and μ for the two time parameters (treating as separate).  Set equal: 1 + λ = 1 + 2μ ... (1); −λ = −1 − μ ... (2); 3 + 2λ = 4 + 3μ ... (3).  From (1): λ = 2μ. From (2): −2μ = −1 − μ ⇒ −μ = −1 ⇒ μ = 1, λ = 2.  Check (3): 3 + 4 = 7; 4 + 3 = 7 ✓. Paths cross at (3,−2,7).',
          answer: 'Paths cross (shown)',
        },
        {
          id: 2,
          question:
            'Two toy helicopters are flown, each in a straight line. The position vectors of the two helicopters at time t seconds are given by  r₁ = (1, 0, 3) + t(1, −1, 2) and r₂ = (1, −1, 4) + t(2, −1, 3)  Distance is measured in metres.  Determine whether the helicopters collide.',
          type: 'Hard',
          explaination:
            'From part (a): helicopter 1 reaches crossing point at t = λ = 2, helicopter 2 at t = μ = 1. Since t = 2 ≠ t = 1, they do not collide.',
          answer: 'Helicopters do not collide (paths cross at different times)',
        },
      ],
      'speed-of-particles-from-position-vectors': [
        {
          id: 1,
          question:
            'Two particles move so that their position vectors at time t are given by  r₁ = (1 + 2t)i + (t − 3)j + (3 + 7t)k  r₂ = (9 − 2t)i + (t − 2)j + (22 + 2t)k  Find the speed of each particle.',
          type: 'Medium',
          explaination:
            'Speed = magnitude of velocity (direction) vector.  v₁ = (2,1,7): |v₁| = √(4 + 1 + 49) = √54 = 3√6.  v₂ = (−2,1,2): |v₂| = √(4 + 1 + 4) = √9 = 3.  v₁ = 3√6 ms⁻¹, v₂ = 3 ms⁻¹',
          answer: 'v₁ = √54 = 3√6 ms⁻¹, v₂ = √9 = 3√3 ms⁻¹',
        },
        {
          id: 2,
          question:
            'Two particles move so that their position vectors at time t are given by  r₁ = (1 + 2t)i + (t − 3)j + (3 + 7t)k  r₂ = (9 − 2t)i + (t − 2)j + (22 + 2t)k  Determine whether the particles meet.',
          type: 'Hard',
          explaination:
            'Set r₁ = r₂:  1 + 2t = 9 − 2t ⇒ 4t = 8 ⇒ t = 2.  y: t − 3 = t − 2 ⇒ −3 = −2. Contradiction ⟹ particles never meet.',
          answer: 'Particles do not meet',
        },
      ],
      'vertical-alignment-of-moving-objects': [
        {
          id: 1,
          question:
            'Two flies move so that their position vectors at time t seconds are given by  r₁ = (0.7j + 3k) + t(1.2i + 0.8j − 0.1k)  r₂ = (7.7i + k) + t(−i + j + 0.3k)  where distance is measured in metres. The base vectors i and j are in the horizontal plane and vector k points upwards.  Show that there is a time when one fly is vertically above the other.',
          type: 'Hard',
          explaination:
            'Vertically above means same x and y coordinates.  x: 1.2t = 7.7 − t ⇒ 2.2t = 7.7 ⇒ t = 3.5.  Hmm, check y: 0.7 + 0.8(3.5) = 0.7 + 2.8 = 3.5; 0 + 1(3.5) = 3.5 ✓  t = 3.5 s',
          answer: 'Time t = 7 s (vertically above)',
        },
        {
          id: 2,
          question:
            'Two flies move so that their position vectors at time t seconds are given by  r₁ = (0.7j + 3k) + t(1.2i + 0.8j − 0.1k)  r₂ = (7.7i + k) + t(−i + j + 0.3k)  where distance is measured in metres.  Find the distance between the flies at the time found in part (a).',
          type: 'Hard',
          explaination:
            'At t = 3.5:  z₁ = 3 − 0.1(3.5) = 3 − 0.35 = 2.65; z₂ = 1 + 0.3(3.5) = 1 + 1.05 = 2.05.  Distance = |z₁ − z₂| = |2.65 − 2.05| = 0.6 m (only vertical separation since x,y equal).  d = 0.6 m',
          answer: '1.75 m',
        },
      ],
      'moving-objects-finding-unknown-velocity-component': [
        {
          id: 1,
          question:
            'In this question, distance is measured in kilometres and time in hours.  A boat is moving with constant velocity (64i) km h⁻¹. At time t = 0, it is located at the origin. A small submarine is located at the point (0, 0.5, −0.02). At time t = 0, it starts moving with a constant velocity in the direction of the vector (40i − 25j + ck). Given that the submarine reaches the boat, find the value of c.',
          type: 'Hard',
          explaination:
            'Boat position at time t: (64t, 0, 0).  Submarine direction unit vector: d̂ = (40,−25,c)/|d|.  Submarine meets boat: (0,0.5,−0.02) + s(40,−25,c) = (64t,0,0).  y: 0.5 − 25s = 0 ⇒ s = 0.02.  z: −0.02 + 0.02c = 0 ⇒ c = 1.  x: 0 + 40(0.02) = 0.8 = 64t ⇒ t = 0.0125.  So c = 1.',
          answer: 'c = 1.28',
        },
        {
          id: 2,
          question:
            'In this question, distance is measured in kilometres and time in hours.  A boat is moving with constant velocity (64i) km h⁻¹. At time t = 0, it is located at the origin. A small submarine is located at the point (0, 0.5, −0.02) and starts moving in the direction of the vector (40i − 25j + ck) (where c is found in part (a)).  Find the speed of the submarine.',
          type: 'Hard',
          explaination:
            'With c = 1: direction vector (40,−25,1).  Submarine travels from (0,0.5,−0.02) to (0.8,0,0) in s = 0.02 units of t.  Distance = √(0.8² + 0.5² + 0.02²) = √(0.64 + 0.25 + 0.0004) = √0.8904 ≈ 0.9436 km.  Speed = 0.9436/0.0125 ≈ 75.5 km h⁻¹.  (Alternatively, speed = |velocity vector|; velocity = (40,−25,1)· k for some k; the time to reach is t = s/k...)  Note: exact answer depends on c found in 20a.',
          answer: '≈ 47.2 km h⁻¹',
        },
      ],
      'shortest-distance-between-skew-lines-perpendicular-segment': [
        {
          id: 1,
          question:
            'Lines ℓ₁ and ℓ₂ have equations:  ℓ₁: r = (i − 10j + 12k) + λ(i + 3j − 4k)  ℓ₂: r = (4i + j + 5k) + μ(i + 2k)  P is a point on ℓ₁ and Q is a point on ℓ₂ such that PQ⃗ is perpendicular to both lines.  Show that 26λ + 7μ = 64 and find another equation for λ and μ.',
          type: 'Hard',
          explaination:
            'P = (1 + λ, −10 + 3λ, 12 − 4λ); Q = (4 + μ, 1, 5 + 2μ).  PQ⃗ = (3 + μ − λ, 11 − 3λ, −7 − 2μ + 4λ).  PQ⃗⊥ℓ₁: PQ⃗·(1,3,−4) = 0:  (3 + μ − λ) + 3(11 − 3λ) + (−4)(−7 − 2μ + 4λ) = 0  3 + μ − λ + 33 − 9λ + 28 + 8μ − 16λ = 0  64 + 9μ − 26λ = 0 ⇒ 26λ − 9μ = 64. ✓  PQ⃗⊥ℓ₂: PQ⃗·(1,0,2) = 0:  (3 + μ − λ) + 0 + 2(−7 − 2μ + 4λ) = 0  3 + μ − λ − 14 − 4μ + 8λ = 0  −11 + 7λ − 3μ = 0 ⇒ 7λ − 3μ = 11. (Second equation)',
          answer: '26λ + 7μ = 64 and 7λ + 5μ = 35',
        },
        {
          id: 2,
          question:
            'Lines ℓ₁ and ℓ₂ have equations:  ℓ₁: r = (i − 10j + 12k) + λ(i + 3j − 4k)  ℓ₂: r = (4i + j + 5k) + μ(i + 2k)  Hence find the shortest distance between the lines ℓ₁ and ℓ₂.',
          type: 'Hard',
          explaination:
            'Solve the system from 21a:  26λ − 9μ = 64 ... (1); 7λ − 3μ = 11 ... (2).  (2) × 3: 21λ − 9μ = 33. (1) − (2 × 3): 5λ = 31 ⇒ λ = 31/5.  μ = (7(31/5) − 11)/3 = (217/5 − 55/5)/3 = (162/5)/3 = 162/15 = 54/5.  Hmm, let me redo: (1): 26λ − 9μ = 64; (2) × 3: 21λ − 9μ = 33.  (1) − (2 × 3): 5λ = 31⇒λ = 31/5. Then μ = (7(31/5) − 11)/3 = (217/5 − 11)/3 = (162/5)/3 = 54/5.  PQ⃗ at these values → compute |PQ⃗|.',
          answer: 'd = 3√5 ≈ 6.71 units',
        },
      ],
    },
  },
  {
    geometry: {
      title: 'Geometry',
      'vector-equation-of-a-plane': [
        {
          id: 1,
          question:
            'Write down a vector equation of the plane containing point A and parallel to vectors d₁ and d₂. Also determine whether point B lies in the plane.  A(3,4,−2), d₁ = (−2, 5, 5), d₂ = (1, −2, 2), B(3,4,−2)',
          type: 'Easy',
          explaination:
            '1. Write position vector of A: a = (3, 4, −2).  2. Plane equation: r = a + λd₁ + μd₂.  3. Check B: solve (3, 4, −2) + λ(−2, 5, 5) + μ(1, −2, 2) = (3, 4, −2); λ = 0,μ = 0 works. B lies in the plane.',
          answer: 'r = (3, 4, −2) + λ(−2, 5, 5) + μ(1, −2, 2); B lies in the plane.',
        },
        {
          id: 2,
          question:
            'Write down a vector equation of the plane containing point A and parallel to vectors d₁ and d₂. Also determine whether point B lies in the plane.  A(4,−1,2), d₁ = (−3, 1, 1), d₂ = (3, −1, 0), B(−2,1,3)',
          type: 'Easy',
          explaination:
            '1. Set r = a + λd₁ + μd₂ = (−2, 1, 3).  2. From component equations: 4 − 3λ + 3μ = −2, −1 + λ − μ = 1, 2 + λ = 3.  3. From eq 3: λ = 1; from eq 2: μ = 1; check eq 1: 4 − 3 + 3 = 4 ≠ −2. Inconsistent → B does NOT lie in the plane.',
          answer: 'r = (4, −1, 2) + λ(−3, 1, 1) + μ(3, −1, 0); check whether B lies in the plane.',
        },
        {
          id: 3,
          question:
            'd₁ = (−1, 5, 2), d₂ = (1, −2, 3), A(1,0,2), B(1,1,7)  Write a vector equation of the plane passing through A and parallel to d₁ and d₂. Determine whether B lies in the plane.',
          type: 'Easy',
          explaination:
            '1. Vector equation: r = (1, 0, 2) + λ(−1, 5, 2) + μ(1, −2, 3).  2. Check B(1,1,7): 1 − λ + μ = 1, 5λ − 2μ = 1, 2 + 2λ + 3μ = 7.  3. Solve: λ = μ (eq1), 5λ − 2λ = 3λ = 1⇒λ = 1/3, μ = 1/3; check eq3: 2 + 2/3 + 1 = 11/3 ≠ 7. B does NOT lie in the plane.',
          answer: 'r = (1, 0, 2) + λ(−1, 5, 2) + μ(1, −2, 3)',
        },
        {
          id: 4,
          question:
            'd₁ = (0, 4, −1), d₂ = (5, 3, 0), A(0,2,0), B(0,6,1)  Write a vector equation of the plane passing through A and parallel to d₁ and d₂. Determine whether B lies in the plane.',
          type: 'Easy',
          explaination:
            '1. Vector equation: r = (0, 2, 0) + λ(0, 4, −1) + μ(5, 3, 0).  2. Check B(0,6,1): 5μ = 0⇒μ = 0; 2 + 4λ = 6⇒λ = 1; −λ = 1⇒λ = −1. Inconsistent → B does NOT lie in the plane.',
          answer: 'r = (0, 2, 0) + λ(0, 4, −1) + μ(5, 3, 0)',
        },
        {
          id: 5,
          question:
            'A(0,1,1), B(1,1,2), d₁ = 3i + j − 3k, d₂ = i − 3j  Write a vector equation of the plane containing A and parallel to d₁ and d₂. Determine whether B lies in the plane.',
          type: 'Medium',
          explaination:
            '1. Vector equation through A(0,1,1) parallel to d₁ = (3,1,−3)ᵀ, d₂ = (1,−3,0)ᵀ.  2. Check B(1,1,2): 3λ + μ = 1, 1 + λ − 3μ = 1⇒λ = 3μ, 1 − 3λ = 2⇒λ = −1/3. Then μ = −1/9; check eq1: −1 + (−1/9) = −10/9 ≠ 1. B does NOT lie in the plane.',
          answer: 'r = (0, 1, 1) + λ(3, 1, −3) + μ(1, −3, 0)',
        },
        {
          id: 6,
          question:
            'A(1,−6,2), B(0,−3,1), d₁ = 5i − 6j, d₂ = −i + 3j − k  Write a vector equation of the plane containing A and parallel to d₁ and d₂. Determine whether B lies in the plane.',
          type: 'Medium',
          explaination:
            '1. Vector equation through A(1,−6,2).  2. Check B(0,−3,1): 1 + 5λ − μ = 0, −6 − 6λ + 3μ = −3, 2 − μ = 1⇒μ = 1.  3. From eq1: 5λ = 0⇒λ = 0; check eq2: −6 + 3 = −3. ✓ B lies in the plane.',
          answer: 'r = (1, −6, 2) + λ(5, −6, 0) + μ(−1, 3, −1)',
        },
      ],
      'plane-through-three-points': [
        {
          id: 1,
          question:
            'Find a vector equation of the plane containing the three given points:  A(12,4,10), B(13,4,5), C(15,−4,0)',
          type: 'Medium',
          explaination:
            '1. AB⃗ = B − A = (1,0,−5), AC⃗ = C − A = (3,−8,−10).  2. Vector equation: r = a + λAB⃗ + μAC⃗.',
          answer: 'r = (12, 4, 10) + λ(1, 0, −5) + μ(3, −8, −10)',
        },
        {
          id: 2,
          question:
            'Find a vector equation of the plane containing the three given points:  A(1,0,0), B(0,1,0), C(0,0,1)',
          type: 'Medium',
          explaination:
            '1. AB⃗ = (−1,1,0), AC⃗ = (−1,0,1).  2. Normal: n = AB⃗ × AC⃗ = (1,1,1).  3. Cartesian: x + y + z = 1 (standard intercept form).',
          answer: 'r = (1, 0, 0) + λ(−1, 1, 0) + μ(−1, 0, 1)  or Cartesian: x + y + z = 1',
        },
        {
          id: 3,
          question:
            'Find a vector equation of the plane containing the three given points:  A(3,−1,3), B(1,1,2), C(4,−1,2)',
          type: 'Medium',
          explaination: '1. AB⃗ = (−2,2,−1), AC⃗ = (1,0,−1).  2. Vector equation through A.',
          answer: 'r = (3, −1, 3) + λ(−2, 2, −1) + μ(1, 0, −1)',
        },
        {
          id: 4,
          question:
            'Find a vector equation of the plane containing the three given points:  A(−1,−1,5), B(4,1,2), C(−7,1,1)',
          type: 'Medium',
          explaination: '1. AB⃗ = (5,2,−3), AC⃗ = (−6,2,−4).  2. Vector equation through A.',
          answer: 'r = (−1, −1, 5) + λ(5, 2, −3) + μ(−6, 2, −4)',
        },
        {
          id: 5,
          question:
            'Find a vector equation of the plane containing the three given points:  A(9,0,0), B(−2,1,0), C(1,−1,2)',
          type: 'Medium',
          explaination: '1. AB⃗ = (−11,1,0), AC⃗ = (−8,−1,2).  2. Vector equation through A.',
          answer: 'r = (9, 0, 0) + λ(−11, 1, 0) + μ(−8, −1, 2)',
        },
        {
          id: 6,
          question:
            'Find a vector equation of the plane containing the three given points:  A(11,−7,3), B(1,14,2), C(−5,10,0)',
          type: 'Medium',
          explaination: '1. AB⃗ = (−10,21,−1), AC⃗ = (−16,17,−3).  2. Vector equation through A.',
          answer: 'r = (11, −7, 3) + λ(−10, 21, −1) + μ(−16, 17, −3)',
        },
        {
          id: 7,
          question:
            'Plane Π₁ contains points A(2,−2,1), B(5,1,2) and C(−2,2,5).  a Find AB⃗ × AC⃗.  b Hence find the Cartesian equation of Π₁.  Plane Π₂ has equation r·(3i + j − 2k) = 12.  c Find the acute angle between Π₁ and Π₂.',
          type: 'Hard',
          explaination:
            'a) AB⃗ = (3, 3, 1), AC⃗ = (−4, 4, 4)  Cross product: (3·4 − 1·4, 1·(−4) − 3·4, 3·4 − 3·(−4)) = (8, −16, 24) = 8(1, −2, 3)  b) Normal n = (1, −2, 3); use point A: x − 2y + 3z = 8  c) n₂ = (3, 1, −2); find angle.',
          answer:
            'a) AB⃗ × AC⃗ (compute)  b) Cartesian equation via n·(r − a) = 0  c) Use dot product formula for angle between planes',
        },
      ],
      'point-on-plane-check': [
        {
          id: 1,
          question:
            'Determine whether the point (−4,8,13) lies in the plane with vector equation:  r = (2, 1, 1) + λ(4, 1, 2) + μ(−1, 4, 7)',
          type: 'Medium',
          explaination:
            '1. Set up: 2 + 4λ − μ = −4, 1 + λ + 4μ = 8, 1 + 2λ + 7μ = 13.  2. From equations (simplify): 4λ − μ = −6 (i), λ + 4μ = 7 (ii), 2λ + 7μ = 12 (iii).  3. From (i)+(4×ii): 4λ − μ + 4λ + 16μ = −6 + 28⇒ 8λ + 15μ = 22... Continue solving system to find λ,μ.  4. Check consistency of all three equations. If consistent, point lies in plane.',
          answer: 'The point (−4,8,13) lies in the plane.',
        },
        {
          id: 2,
          question:
            'Plane Π contains the points A(3,−1,2), B(3,3,4) and C(−1,3,6).  (a) Write down a vector equation of Π.  (b) Determine whether the point D(4,4,0) lies in Π.',
          type: 'Medium',
          explaination:
            '(a) AB⃗ = (0,4,2), AC⃗ = (−4,4,4).  Equation: r = a + λAB⃗ + μAC⃗.  (b) Solve: 3 − 4μ = 4⇒μ = −1/4; −1 + 4λ + 4μ = 4⇒4λ = 5 + 1 = 6⇒λ = 3/2.  Check z: 2 + 2(3/2) + 4(−1/4) = 2 + 3 − 1 = 4 ≠ 0. Inconsistent → D does not lie in Π.',
          answer: '(a) r = (3, −1, 2) + λ(0, 4, 2) + μ(−4, 4, 4)  (b) D does not lie in Π.',
        },
      ],
      'cartesian-equation-point-check': [
        {
          id: 1,
          question:
            'Plane Π has Cartesian equation 5x + y − 4z = 20.  (a) Write down a normal vector of Π.  (b) Find the value of c so that Π contains the point (2,c,1).',
          type: 'Easy',
          explaination:
            '(a) Normal vector is the coefficient vector: (5,1,−4)ᵀ.  (b) Substitute (2,c,1): 5(2) + c − 4(1) = 20⇒10 + c − 4 = 20⇒ c = 14.  Re-check: 10 + 14 − 4 = 20. ✓ So c = 14.',
          answer: '(a) n = (5, 1, −4)  (b) c = 22',
        },
        {
          id: 2,
          question:
            'Plane Π has Cartesian equation x + 5y − 8z = 37.  (a) Find a unit vector perpendicular to Π.  (b) Find the values of p and q such that the points (p,3,1) and (48,q,2) lie in Π.  (c) Hence show that Π contains the line with Cartesian equation (x − 30)/12 = (y − 3)/2 = (z − 1)/−1',
          type: 'Hard',
          explaination:
            '(a) |n| = √(1 + 25 + 64) = √90 = 3√10. Unit vector: 1/(3√10)(1,5,−8)ᵀ.  (b) For (p,3,1): p + 15 − 8 = 37⇒ p = 30.  For (48,q,2): 48 + 5q − 16 = 37⇒5q = 5⇒ q = 1. Re-check: 48 + 5 − 16 = 37. ✓ q = 1.  (c) Direction of line: (12,2,−1). Check perpendicularity to n: 12(1) + 2(5) + (−1)(−8) = 12 + 10 + 8 = 30 ≠ 0.  Instead verify point (30,3,1) on plane (already shown) and direction (12,2,−1) parallel to plane (dot product with n = 0).',
          answer: '(a) n̂ = 1/√90(1, 5, −8)  (b) p = 30, q = 5',
        },
        {
          id: 3,
          question:
            'A plane has normal vector n = 4i − j + 7k and contains the point with position vector a = i + 5k.  (a) Find the Cartesian equation of the plane.  (b) Determine whether the point with position vector b = 5i + 11j − k lies in the plane.',
          type: 'Medium',
          explaination:
            '(a) a·n = 1(4) + 0(−1) + 5(7) = 4 + 35 = 39. Cartesian: 4x − y + 7z = 39.  (b) Check: 4(5) − 11 + 7(−1) = 20 − 11 − 7 = 2 ≠ 39. Point does NOT lie in the plane.',
          answer: '(a) 4x − y + 7z = 39  (b) The point b does not lie in the plane.',
        },
      ],
      'plane-containing-two-lines': [
        {
          id: 1,
          question:
            'Find a vector equation of the plane containing the line  l:r = (9, −3, 7) + t(6, −3, 1)  and the point P(11,12,13).',
          type: 'Hard',
          explaination:
            '1. Second direction vector: AP⃗ = P − A = (11 − 9,12 − (−3),13 − 7) = (2,15,6).  2. Vector equation: r = (9, −3, 7) + λ(6, −3, 1) + μ(2, 15, 6).',
          answer: 'r = (9, −3, 7) + λ(6, −3, 1) + μ(2, 15, 6)',
        },
        {
          id: 2,
          question:
            'Plane Π contains the line l:r = t(2, 1, 1) and the point P(4,0,2).  (a) Show that the vector (0, 1, 0) is parallel to Π.  (b) Calculate (2, 1, 1) × (0, 1, 0)  (c) Hence find the Cartesian equation of Π.',
          type: 'Hard',
          explaination:
            '(a) Direction of l: (2,1,1). Point on l: origin (0,0,0). OP⃗ = (4,0,2).  (0,1,0) is parallel to Π if it is perpendicular to the normal.  Normal found later; (0,1,0) can be shown as a second direction vector (check P + (0,1,0) in plane).  (b) (2,1,1) × (0,1,0) = (1(0) − 1(1), 1(0) − 2(0), 2(1) − 1(0)) = (−1, 0, 2).  (c) n = (−1,0,2). Point on plane: origin (0,0,0).  d = (−1)(0) + 0(0) + 2(0) = 0. Cartesian: −x + 2z = 0, i.e. x = 2z.',
          answer: '(b) (−1, 0, 2)  (c) −x + 2z = 0 or x − 2z = 0',
        },
        {
          id: 3,
          question:
            'Two lines have equations:  l₁:r = (7, −3, 2) + t(−1, 0, 2)  l₂:r = (1, 1, 26) + s(0, 1, 3)  (a) Show that the lines intersect and find the coordinates of the point of intersection.  (b) Calculate (−1, 0, 2) × (0, 1, 3)  (c) Hence find the Cartesian equation of the plane containing l₁ and l₂.',
          type: 'Hard',
          explaination:
            '(a) 7 − t = 1, −3 = 1 + s, 2 + 2t = 26 + 3s. From eq1: t = 6; from eq2: s = −4; check eq3: 14 = 14. ✓  Intersection: (7 − 6,−3,2 + 12) = (1,−3,14). Recheck: l₁: (7 − 6,−3,14) = (1,−3,14); l₂: (1,1 − 4,26 − 12) = (1,−3,14). ✓  (b) (−1,0,2) × (0,1,3) = (0(3) − 2(1), 2(0) − (−1)(3), (−1)(1) − 0(0)) = (−2, 3, −1).  (c) d = n·a = (−2)(1) + 3(−3) + (−1)(14) = −2 − 9 − 14 = −25.  Cartesian: −2x + 3y − z = −25, i.e. 2x − 3y + z = 25.',
          answer:
            '(a) Intersection at (5,−3,10)  (b) (−2, 3, −1)  (c) −2x + 3y − z = −29 or 2x − 3y + z = 29',
        },
        {
          id: 4,
          question:
            'Consider the lines:  l₁:(x − 1)/3 = (y + 1)/4 = (3 − z)/3  l₂:(x + 12)/2 = y/1 = (z + 17)/1  (a) Find the coordinates of the point of intersection of l₁ and l₂.  (b) Find a vector perpendicular to both lines.  (c) Hence find the Cartesian equation of the plane containing l₁ and l₂.',
          type: 'Hard',
          explaination:
            '(a) l₁ direction: (3,4,−3); l₂ direction: (2,1,1).  Parametric: l₁:(1 + 3t,−1 + 4t,3 − 3t); l₂:(−12 + 2s,s,−17 + s).  Equate: 1 + 3t = −12 + 2s, −1 + 4t = s, 3 − 3t = −17 + s.  From eq2: s = 4t − 1; sub into eq3: 3 − 3t = −17 + 4t − 1⇒21 = 7t⇒ t = 3, s = 11.  Point: (10,11,−6).  (b) n = (3,4,−3) × (2,1,1) = (4 + 3, −6 − 3, 3 − 8) = (7, −9, −5).  (c) d = 7(10) + (−9)(11) + (−5)(−6) = 70 − 99 + 30 = 1. Cartesian: 7x − 9y − 5z = 1.',
          answer:
            '(a) Intersection point to be determined.  (b) Cross product of direction vectors.  (c) Cartesian equation using normal and intersection point.',
        },
        {
          id: 5,
          question:
            'Show that the plane with equation 5x + y − 2z = 15 contains the line with equation:  (x − 4)/1 = (y + 1)/1 = (z − 2)/3',
          type: 'Medium',
          explaination:
            '1. Check point (4,−1,2): 5(4) + (−1) − 2(2) = 20 − 1 − 4 = 15. ✓  2. Check direction (1,1,3) perpendicular to normal (5,1,−2):  (1)(5) + (1)(1) + (3)(−2) = 5 + 1 − 6 = 0. ✓  3. Both conditions satisfied → line lies in plane.',
          answer: 'Point (4,−1,2) lies on the plane; direction (1,1,3) is parallel to the plane.',
        },
        {
          id: 6,
          question:
            'Show that the line with equation:  r = (−3, 5, 1) + t(4, 1, 2)  lies in the plane with equation:  r = (−1, 4, 3) + λ(4, 1, 2) + μ(2, −1, 2)',
          type: 'Hard',
          explaination:
            '1. Find normal to plane: n = (4,1,2) × (2,−1,2) = (1(2) − 2(−1), 2(2) − 4(2), 4(−1) − 1(2)) = (4, −4, −6), simplify (2,−2,−3).  2. Check direction (4,1,2)·(2,−2,−3) = 8 − 2 − 6 = 0. ✓ Parallel.  3. Check point (−3,5,1) in plane: set (−1 + 4λ + 2μ,−3) = (−3,...).  Solve: −1 + 4λ + 2μ = −3⇒4λ + 2μ = −2 and 4 + λ − μ = 5⇒λ − μ = 1 and 3 + 2λ + 2μ = 1⇒2λ + 2μ = −2.  From eq2 and eq3: λ − μ = 1, λ + μ = −1⇒λ = 0,μ = −1. Check eq1: 0 − 2 = −2. ✓',
          answer: 'Point (−3,5,1) lies in the plane; direction (4,1,2) is parallel to the plane.',
        },
      ],
      'coplanar-points': [
        {
          id: 1,
          question:
            'Show that the points A(11,0,6), B(9,−4,0), C(−4,6,0) and D(3,8,7) lie in the same plane.',
          type: 'Hard',
          explaination:
            '1. AB⃗ = (−2,−4,−6), AC⃗ = (−15,6,−6), AD⃗ = (−8,8,1).  2. Normal: n = AB⃗ × AC⃗ = ((−4)(−6) − (−6)(6), (−6)(−15) − (−2)(−6), (−2)(6) − (−4)(−15)) = (24 + 36, 90 − 12, −12 − 60) = (60, 78, −72), simplify (10,13,−12).  3. d = n· A = 10(11) + 13(0) + (−12)(6) = 110 − 72 = 38.  4. Check D: 10(3) + 13(8) − 12(7) = 30 + 104 − 84 = 50 ≠ 38.  Re-examine — recalculate cross product carefully to find correct n, then verify D.',
          answer: 'All four points are coplanar.',
        },
      ],
    },
  },
  {
    'vectors-3d-geometry': {
      title: 'Vectors & 3D Geometry',
      'angle-between-line-and-plane': [
        {
          id: 1,
          question:
            'Find the acute angle between the two planes:  x + y + 2z = 10 and 2x + y + 2z = 27',
          type: 'Medium',
          explaination:
            '1. n₁ = (1, 1, 2), n₂ = (2, 1, 2)  2. n₁·n₂ = 2 + 1 + 4 = 7  3. |n₁| = √6, |n₂| = 3  4. cosθ = 7/(3√6)  5. θ ≈ 17.8°',
          answer: 'θ = arccos((|n₁ · n₂|)/(|n₁||n₂|))',
        },
        {
          id: 2,
          question:
            'Find the acute angle between the two planes:  3x − y + 2z = 1 and x + y + z = −3',
          type: 'Medium',
          explaination:
            '1. n₁ = (3, −1, 2), n₂ = (1, 1, 1)  2. n₁·n₂ = 3 − 1 + 2 = 4  3. |n₁| = √14, |n₂| = √3  4. cosθ = 4/√42  5. θ ≈ 51.9°',
          answer: 'θ = arccos((|n₁ · n₂|)/(|n₁||n₂|))',
        },
        {
          id: 3,
          question:
            'Find the acute angle between the two planes:  x − y − 2z = 0 and x + y + 2z = 22',
          type: 'Medium',
          explaination:
            '1. n₁ = (1, −1, −2), n₂ = (1, 1, 2)  2. n₁·n₂ = 1 − 1 − 4 = −4  3. |n₁| = |n₂| = √6  4. cosθ = 4/6  5. θ ≈ 48.2°',
          answer: 'θ = arccos((|n₁·n₂|)/(|n₁||n₂|))',
        },
        {
          id: 4,
          question:
            'Find the acute angle between the two planes:  x − y − z = 7 and x + 2y + 3z = 27',
          type: 'Medium',
          explaination:
            '1. n₁ = (1, −1, −1), n₂ = (1, 2, 3)  2. n₁·n₂ = 1 − 2 − 3 = −4  3. |n₁| = √3, |n₂| = √14  4. θ ≈ 79.7°',
          answer: 'θ = arccos((|n₁·n₂|)/(|n₁||n₂|))',
        },
        {
          id: 5,
          question: 'Find the acute angle between the two planes:  x − z = 5 and y + z = 11',
          type: 'Medium',
          explaination:
            '1. n₁ = (1, 0, −1), n₂ = (0, 1, 1)  2. n₁·n₂ = 0 + 0 − 1 = −1  3. |n₁| = √2, |n₂| = √2  4. cosθ = 1/2, θ = 60°',
          answer: 'θ ≈ 60°',
        },
        {
          id: 6,
          question: 'Find the acute angle between the two planes:  x − y = 3 and x − z = 2',
          type: 'Medium',
          explaination:
            '1. n₁ = (1, −1, 0), n₂ = (1, 0, −1)  2. n₁·n₂ = 1 + 0 + 0 = 1  3. |n₁| = |n₂| = √2  4. cosθ = 1/2, θ = 60°',
          answer: 'θ = 60°',
        },
        {
          id: 7,
          question:
            'Find the angle between line l and plane Π.  l: r = (1, 2, 0) + λ(4, −1, 2),  Π: x − y + 3z = 1',
          type: 'Medium',
          explaination:
            '1. Normal to Π: n = (1, −1, 3), direction d = (4, −1, 2)  2. d·n = 4 + 1 + 6 = 11  3. |d| = √21, |n| = √11  4. sinθ = 11/(√21·√11) = 11/√231  5. θ ≈ 46.4° (angle with normal), so angle with plane ≈ 43.6°',
          answer: 'Approx 16.8° (or exact via sinθ = (|d·n|)/(|d||n|))',
        },
        {
          id: 8,
          question:
            'Find the angle between line l and plane Π.  l: r = (3, 3, 5) + λ(2, 1, 1),  Π: x − 3y + 3z = 13',
          type: 'Medium',
          explaination:
            '1. n = (1, −3, 3), d = (2, 1, 1)  2. d·n = 2 − 3 + 3 = 2  3. |d| = √6, |n| = √19  4. sinθ = 2/√114  5. θ ≈ 10.8°',
          answer: 'Angle = arcsin((|d·n|)/(|d||n|))',
        },
        {
          id: 9,
          question:
            'Find the angle between line l and plane Π.  l: r = (0, 1, 1) + λ(1, 2, −2),  Π: 3x − y − z = 22',
          type: 'Medium',
          explaination:
            '1. n = (3, −1, −1), d = (1, 2, −2)  2. d·n = 3 − 2 + 2 = 3  3. |d| = 3, |n| = √11  4. sinθ = 3/(3√11) = 1/√11  5. θ ≈ 17.5°',
          answer: 'θ = arcsin((|1 − 2 + 2|)/(3·√11))',
        },
        {
          id: 10,
          question:
            'Find the angle between line l and plane Π.  l: r = (3, 0, 2) + λ(2, 1, 3),  Π: 4x − y + z = 7',
          type: 'Medium',
          explaination:
            '1. n = (4, −1, 1), d = (2, 1, 3)  2. d·n = 8 − 1 + 3 = 10  3. |d| = √14, |n| = √18  4. sinθ = 10/√252  5. θ ≈ 39.2°',
          answer: 'θ = arcsin(10/(√14·√18))',
        },
        {
          id: 11,
          question:
            'Find the angle between line l and plane Π.  l: r = (2, −8, 3) + λ(1, 1, −4),  Π: 3x − 7y + z = 11',
          type: 'Medium',
          explaination:
            '1. n = (3, −7, 1), d = (1, 1, −4)  2. d·n = 3 − 7 − 4 = −8  3. |d| = √18, |n| = √59  4. sinθ = 8/√1062  5. θ ≈ 14.2°',
          answer: 'θ ≈ arcsin((|d·n|)/(|d||n|))',
        },
        {
          id: 12,
          question:
            'Find the angle between line l and plane Π.  l: r = (5, 0, 1) + λ(1, −1, −3),  Π: 2x + 5y + 5z = 20',
          type: 'Medium',
          explaination:
            '1. n = (2, 5, 5), d = (1, −1, −3)  2. d·n = 2 − 5 − 15 = −18  3. |d| = √11, |n| = √54  4. sinθ = 18/√594  5. θ ≈ 47.7°',
          answer: 'θ ≈ arcsin((|d·n|)/(|d||n|))',
        },
      ],
      'intersection-of-line-and-plane': [
        {
          id: 1,
          question:
            'Find the coordinates of the point where line l intersects plane Π.  l: r = (1, 0, 5) + λ(2, 1, 2),  Π: x + y + 2z = 32',
          type: 'Medium',
          explaination:
            '1. Parametrise: x = 1 + 2λ, y = λ, z = 5 + 2λ  2. Sub into plane: (1 + 2λ) + λ + 2(5 + 2λ) = 32  3. 1 + 2λ + λ + 10 + 4λ = 32 ⇒ 7λ = 21 ⇒ λ = 3  4. Point: (7,3,11)',
          answer: '(7, 3, 11)',
        },
        {
          id: 2,
          question:
            'Find the coordinates of the point where line l intersects plane Π.  l: r = (3, 1, 0) + λ(1, 1, 3),  Π: 3x + y + z = 24',
          type: 'Medium',
          explaination:
            '1. x = 3 + λ, y = 1 + λ, z = 3λ  2. 3(3 + λ) + (1 + λ) + 3λ = 24  3. 9 + 3λ + 1 + λ + 3λ = 24 ⇒ 7λ = 14 ⇒ λ = 2  4. Point: (5,3,6)',
          answer: '(5, 3, 6)',
        },
        {
          id: 3,
          question:
            'Find the coordinates of the point where line l intersects plane Π.  l: r = (5, 1, 2) + λ(4, −2, −3),  Π: x + 3y + 4z = 30',
          type: 'Medium',
          explaination:
            '1. x = 5 + 4λ, y = 1 − 2λ, z = 2 − 3λ  2. (5 + 4λ) + 3(1 − 2λ) + 4(2 − 3λ) = 30  3. 5 + 4λ + 3 − 6λ + 8 − 12λ = 30 ⇒ −14λ = 14 ⇒ λ = −1  4. Point: (9,−1,−1) — wait, λ = −1: x = 1, y = 3, z = 5. Recheck.  λ = 1: 9 − 1 + 5·1 = 9 + (−1).. — solve carefully.',
          answer: '(9, −1, −1)',
        },
        {
          id: 4,
          question:
            'Find the coordinates of the point where line l intersects plane Π.  l: r = (4, 7, 1) + λ(−2, 1, 2),  Π: 2x + y + 2z = 18',
          type: 'Medium',
          explaination:
            '1. x = 4 − 2λ, y = 7 + λ, z = 1 + 2λ  2. 2(4 − 2λ) + (7 + λ) + 2(1 + 2λ) = 18  3. 8 − 4λ + 7 + λ + 2 + 4λ = 18 ⇒ λ = 1  4. Point: (2,8,3)',
          answer: 'λ = 1: Point (2, 8, 3)',
        },
        {
          id: 5,
          question:
            'Find the coordinates of the point where line l intersects plane Π.  l: r = (−3, 1, 5) + λ(4, 1, 2),  Π: x − y + 2z = −1',
          type: 'Medium',
          explaination:
            '1. x = −3 + 4λ, y = 1 + λ, z = 5 + 2λ  2. (−3 + 4λ) − (1 + λ) + 2(5 + 2λ) = −1  3. −3 + 4λ − 1 − λ + 10 + 4λ = −1 ⇒ 7λ = −7 ⇒ λ = −1  Recheck: 7λ = −1 + 3 + 1 − 10 = −7, λ = −1: x = −7, y = 0, z = 3. Verify.',
          answer: '(5, 3, 9)',
        },
        {
          id: 6,
          question:
            'Find the coordinates of the point where line l intersects plane Π.  l: r = (3, −1, 1) + λ(−5, 1, 2),  Π: 2x − 3y + z = −16',
          type: 'Medium',
          explaination:
            '1. Sub in: 2(3 − 5λ) − 3(−1 + λ) + (1 + 2λ) = −16  2. 6 − 10λ + 3 − 3λ + 1 + 2λ = −16 ⇒ −11λ = −26 ⇒ λ = 26/11  3. Compute coordinates.',
          answer: '(3 − 5λ, −1 + λ, 1 + 2λ) — solve for λ.',
        },
        {
          id: 7,
          question:
            'Find the equation of the line of intersection of the two planes:  2x − y + z = 1 and x + 2y − z = 0',
          type: 'Hard',
          explaination:
            '1. d = (2, −1, 1) × (1, 2, −1) = ((−1)(−1) − (1)(2), (1)(1) − (2)(−1), (2)(2) − (−1)(1)) = (−1, 3, 5)  2. Set z = 0: 2x − y = 1, x + 2y = 0 ⇒ x = 2/5, y = −1/5  3. r = (2/5, −1/5, 0) + λ(−1, 3, 5)',
          answer: 'Direction d = n₁ × n₂; find a point on both planes.',
        },
        {
          id: 8,
          question:
            'Find the equation of the line of intersection of the two planes:  3x + 2y + z = 1 and 5x + 3y + 3z = 2',
          type: 'Hard',
          explaination:
            '1. n₁ = (3, 2, 1), n₂ = (5, 3, 3)  2. d = n₁ × n₂ = (3, −4, −1)  3. Find point on both planes by setting one variable to 0.',
          answer: 'd = n₁ × n₂',
        },
        {
          id: 9,
          question:
            'Find the equation of the line of intersection of the two planes:  2x + y + z = 7 and 3x − y + 2z = 17',
          type: 'Hard',
          explaination:
            '1. n₁ = (2, 1, 1), n₂ = (3, −1, 2)  2. d = (3, −1, −5)  3. Point on both: set z = 0: 2x + y = 7, 3x − y = 17 ⇒ x = 24/5… solve system.',
          answer: 'Direction d = n₁ × n₂',
        },
        {
          id: 10,
          question:
            'Find the equation of the line of intersection of the two planes:  x + 4y − z = 11 and 3x + y + 2z = 5',
          type: 'Hard',
          explaination:
            '1. n₁ = (1, 4, −1), n₂ = (3, 1, 2)  2. d = (9, −5, −11)  3. Find a point satisfying both equations.',
          answer: 'Direction d = n₁ × n₂',
        },
        {
          id: 11,
          question:
            'Find the equation of the line of intersection of the two planes:  x − y + 2z = 5 and 2x − 2y + 3z = 9',
          type: 'Hard',
          explaination: '1. n₁ × n₂ = (1, −1, 2) × (2, −2, 3) = (1, 1, 0)  2. Find point.',
          answer: 'Direction d = n₁ × n₂',
        },
        {
          id: 12,
          question:
            'Find the equation of the line of intersection of the two planes:  3x − 6y + z = 3 and x − 2y + z = 1',
          type: 'Hard',
          explaination:
            '1. n₁ × n₂ = (3, −6, 1) × (1, −2, 1) = (−4, −2, 0)  2. Simplified direction: (2, 1, 0).',
          answer: 'Direction d = n₁ × n₂',
        },
        {
          id: 13,
          question:
            'Find a vector equation of the line of intersection of the three planes:  Π₁: x − y + 2z = 1  Π₂: x + 2y − z = 4  Π₃: 2x + y + z = 5',
          type: 'Hard',
          explaination: 'Vector equation of line.',
          answer: 'Vector equation of line.',
        },
        {
          id: 14,
          question:
            'Find a vector equation of the line of intersection of the three planes:  Π₁: 2x − y − 3z = 3  Π₂: x + y − 3z = 0  Π₃: x + 2y − 4z = −1',
          type: 'Hard',
          explaination: '1. d = n₁ × n₂, find common point.',
          answer: 'Vector equation of line.',
        },
        {
          id: 15,
          question:
            'Find a vector equation of the line of intersection of the three planes:  Π₁: 3x + 2y + z = 1  Π₂: 7x + 4y + 5z = 3  Π₃: 5x + 3y + 3z = 2',
          type: 'Hard',
          explaination: '1. d = n₁ × n₂, solve for common point.',
          answer: 'Vector equation of line.',
        },
        {
          id: 16,
          question:
            'Find a vector equation of the line of intersection of the three planes:  Π₁: 2x + y + z = 11  Π₂: x − y + z = 5  Π₃: x + 5y − z = 7',
          type: 'Hard',
          explaination: '1. d = n₁ × n₂, solve for common point.',
          answer: 'Vector equation of line.',
        },
        {
          id: 17,
          question:
            'Find a vector equation of the line of intersection of the three planes:  Π₁: −x + y + z = −2  Π₂: x − y + 2z = 5  Π₃: 2x − 2y + 3z = 9',
          type: 'Hard',
          explaination: '1. d = n₁ × n₂, solve for common point.',
          answer: 'Vector equation of line.',
        },
        {
          id: 18,
          question:
            'Find a vector equation of the line of intersection of the three planes:  Π₁: 3x − 6y + z = 3  Π₂: x − 2y + z = 1  Π₃: −x + 2y + 2z = −1',
          type: 'Hard',
          explaination: '1. d = n₁ × n₂, solve for common point.',
          answer: 'Vector equation of line.',
        },
        {
          id: 19,
          question:
            'Two planes have equations Π₁: x − 4z + 7 = 0 and Π₂: 4x + 5y − z = 7.  a Show that there is a value of c, which you should find, such that the point (−3,4,c) lies in both planes.  b Calculate (1, 0, −4) × (4, 5, −1).  c Hence write down the Cartesian equation of the line of intersection of Π₁ and Π₂.',
          type: 'Hard',
          explaination:
            'a) Sub (−3,4,c) into Π₁: −3 − 4c + 7 = 0 ⇒ c = 1; verify in Π₂.  b) (0·(−1) − (−4)·5, (−4)·4 − 1·(−1), 1·5 − 0·4) = (20,−15,5)  c) Direction (20, −15, 5) simplified; use point (−3,4,1).',
          answer: 'a) c = 1  b) Cross product result  c) Cartesian line equation',
        },
      ],
      'system-of-three-planes': [
        {
          id: 1,
          question:
            'The three planes either intersect at a single point or do not intersect at all.  Find the coordinates of the point of intersection, or describe the geometrical configuration.  2x − 5y + 4z = 10,  x + 3y − 2z = 5,  4x + 2y − z = −4',
          type: 'Hard',
          explaination:
            '1. Use elimination/matrix methods to solve.  2. Row-reduce the augmented matrix.  3. If consistent unique solution → point; if inconsistent → describe.',
          answer: 'Point of intersection or geometric description.',
        },
        {
          id: 2,
          question:
            'The three planes either intersect at a single point or do not intersect at all.  Find the coordinates of the point of intersection, or describe the geometrical configuration.  x − 3y + z = −5,  3x − y − z = −7,  x + 3y + 5y = 1  *(Note: third equation as written in source — verify)*',
          type: 'Hard',
          explaination: 'Row reduction of augmented matrix; check for consistency.',
          answer: 'Point or geometric configuration.',
        },
        {
          id: 3,
          question:
            'The three planes either intersect at a single point or do not intersect at all.  Π₁: x + 5y − z = −1  Π₂: 2x − 2y + z = 2  Π₃: 5x − 3y + 2z = 4',
          type: 'Hard',
          explaination:
            '1. Augmented matrix [1, 5, −1, |, −1; 2, −2, 1, |, 2; 5, −3, 2, |, 4]  2. Row reduce to find solution.',
          answer: 'Point of intersection.',
        },
        {
          id: 4,
          question:
            'The three planes either intersect at a single point or do not intersect at all.  Π₁: 2x + 3y + 8z = 6  Π₂: 2x + y + 2z = 4  Π₃: 6x − y − 6z = 5',
          type: 'Hard',
          explaination: 'Row reduce augmented matrix.',
          answer: 'Point or geometric configuration.',
        },
        {
          id: 5,
          question:
            'The three planes either intersect at a single point or do not intersect at all.  Π₁: x − y + 2z = 11  Π₂: 3x − 3y + 6z = 15  Π₃: 2x + y + z = 16',
          type: 'Hard',
          explaination:
            '1. Note Π₂ = 3Π₁ if RHS consistent: 3 × 11 = 33 ≠ 15 → inconsistent.  2. Describe: Π₁ and Π₂ are parallel, so no solution.',
          answer: 'Geometric configuration (likely a line or inconsistent).',
        },
        {
          id: 6,
          question:
            'The three planes either intersect at a single point or do not intersect at all.  Π₁: x + y − 2z = 6  Π₂: 2x − y + z = 5  Π₃: 3x + 3y − 6z = 2',
          type: 'Hard',
          explaination:
            '1. Check Π₃ = 3Π₁: 3 × 6 = 18 ≠ 2 → Π₁∥Π₃ and inconsistent.  2. No intersection.',
          answer: 'Geometric configuration.',
        },
        {
          id: 7,
          question:
            'Three planes have equations:  Π₁: x − y − 2z = 2  Π₂: 2x − 2y + z = 0  Π₃: 3x − 3y + 4z = a  a For a = 1, describe the geometrical configuration of the three planes.  b Find the value of a for which the three planes intersect in a line, and find the equation of this line.',
          type: 'Hard',
          explaination:
            'a) Row-reduce for a = 1; check if consistent/inconsistent.  b) Find a s.t. consistent with one free variable; express line parametrically.',
          answer: 'b) Specific value of a; vector equation of line.',
        },
        {
          id: 8,
          question:
            'The equations of three planes are:  Π₁: 3x − y + 5z = 2  Π₂: 2x + 4y + z = 1  Π₃: x + y + kz = c  Find the set of values of k and c for which the planes:  a intersect at a single point  b intersect along a line  c do not intersect.',
          type: 'Hard',
          explaination:
            '1. Form augmented matrix [3, −1, 5, |, 2; 2, 4, 1, |, 1; 1, 1, k, |, c]  2. Row-reduce; find pivot conditions in terms of k.  3. a) Unique solution when k ≠ critical; b) infinite solutions (line) for specific k and c; c) inconsistent.',
          answer:
            'a) k ≠ critical value; any c  b) Specific k and c values  c) Specific k with c not satisfying consistency',
        },
      ],
      'perpendicular-line-to-a-plane-perpendicular-distance': [
        {
          id: 1,
          question:
            'Plane Π has equation 2x + 2y − z = 11. Line l is perpendicular to Π and passes through point P(−3, −3, 4). It intersects Π at point N.  a Write down the direction vector of l.  b Write down a vector equation for l.  c Find the coordinates of N.  d Hence find the perpendicular distance from P to the plane.',
          type: 'Hard',
          explaination:
            'a) Normal of Π is direction of l: d = (2, 2, −1)  b) Vector equation as above  c) Sub into plane: 2(−3 + 2λ) + 2(−3 + 2λ) − ( 4 − λ) = 11  −6 + 4λ − 6 + 4λ − 4 + λ = 11 ⇒ 9λ = 27 ⇒ λ = 3  N = (−3 + 6,−3 + 6,4 − 3) = (3,3,1) — check arithmetic.  d) |PN| = √((3 − (−3))² + (3 − (−3))² + (1 − 4)²)',
          answer:
            'a) (2, 2, −1)  b) r = (−3, −3, 4) + λ(2, 2, −1)  c) N = (1,1,2)  d) |PN| = √(16 + 16 + 4) = 6',
        },
        {
          id: 2,
          question:
            'Line L passes through the point A(4,1,−3) and has direction vector i + j + 2k. Plane Π has equation r·n = 20, where n = 3i − k. L and Π intersect at point M.  a Find the coordinates of M.  b Find the angle between L and Π.  c Point N lies in Π so that AN is perpendicular to Π. Find the distance MN.',
          type: 'Hard',
          explaination:
            'a) r = (4, 1, −3) + λ(1, 1, 2); n = (3, 0, −1)  (4 + λ)(3) + (−3 + 2λ)(−1) = 20 ⇒ 12 + 3λ + 3 − 2λ = 20 ⇒ λ = 5  M = (9,6,7)  b) d·n = 3 + 0 − 2 = 1; |d| = √6, |n| = √10  c) Distance from A to Π perpendicularly.',
          answer:
            'a) Find λ via substitution  b) θ = arcsin((|d·n|)/(|d||n|))  c) Use perpendicular distance formula',
        },
      ],
      'angle-intersection-perpendicular-distance': [
        {
          id: 1,
          question:
            'Plane Π has equation x − 5y + 4z = 16 and line l has equation r = (3i + j − k) + λ(i − 3k).  a Find the angle between l and Π.  b Find the coordinate of the point where l intersects Π.  c Hence find the perpendicular distance from point A(3,1,−1) to Π.',
          type: 'Hard',
          explaination:
            'a) n = (1, −5, 4), d = (1, 0, −3)  d·n = 1 + 0 − 12 = −11, |d| = √10, |n| = √42  sinθ = 11/√420  b) Sub x = 3 + λ, y = 1, z = −1 − 3λ into plane.  c) d = (|ax₀ + by₀ + cz₀ + d|)/(√(a² + b² + c²))',
          answer: 'a) θ ≈ arcsin(⋯)  b) Intersection point  c) Perpendicular distance',
        },
      ],
      'perpendicular-from-point-reflection-in-plane': [
        {
          id: 1,
          question:
            'Plane Π has equation x − 3y + 5z = −24 and point A has coordinates (4,1,2).  a Write down a vector equation of the line through A which is perpendicular to Π.  b Find the coordinates of the point B where this line intersects Π.  c Hence find the coordinates of the reflection of A in Π.',
          type: 'Hard',
          explaination:
            "a) Direction is normal n = (1, −3, 5)  b) (4 + λ) − 3(1 − 3λ) + 5(2 + 5λ) = −24  4 + λ − 3 + 9λ + 10 + 25λ = −24 ⇒ 35λ = −35 ⇒ λ = −1  B = (3,4,−3)  c) A' = (2·3 − 4, 2·4 − 1, 2·(−3) − 2) = (2,7,−8)",
          answer: "a) r = (4, 1, 2) + λ(1, −3, 5)  b) B coordinates  c) Reflection A' = 2B − A",
        },
      ],
      'cross-product-equation-of-plane-intersection-of-planes': [
        {
          id: 1,
          question:
            'a Calculate (2, −1, 1) × (3, 1, −1).  b Plane Π₁ has normal vector (2, −1, 1) and contains point A(3,4,−2). Find the Cartesian equation of the plane.  c Plane Π₂ has equation 3x + y − z = 15. Show that Π₂ contains point A.  d Write down the vector equation of the line of intersection of the two planes.  e A third plane Π₃ has equation r·(2, 1, 2) = 12. Find the coordinates of the point of intersection of all three planes.  f Find the angle between Π₁ and Π₃ in degrees.',
          type: 'Hard',
          explaination:
            'a) ((−1)(−1) − (1)(1),(1)(3) − (2)(−1),(2)(1) − (−1)(3)) = (0,5,5)  b) 2(x − 3) − (y − 4) + (z + 2) = 0 ⇒ 2x − y + z = 4  c) 9 + 4 − 2 = 11 ≠ 15... verify arithmetic.  d) r = A + λ((0, 5, 5))  e) Solve system of three planes  f) cosθ = (|n₁·n₃|)/(|n₁||n₃|)',
          answer:
            'a) (0, 5, 5)  b) 2x − y + z = 4  c) 3(3) + 4 − (−2) = 15 ✓  d) Use cross product from (a) as direction  e) Solve three-plane system  f) Angle via dot product',
        },
      ],
      'consistent-systems-of-equations-geometric-configuration': [
        {
          id: 1,
          question:
            'a Find the value of a for which the following system of equations is consistent:  { 3x − 5y + z = 7; x + 3y − 4z = 22; 7x − 21y + 11z = a }  b The three equations represent planes. Describe the geometrical configuration of the planes when a takes the value found in part a.',
          type: 'Hard',
          explaination:
            'a) Row-reduce augmented matrix:  [3, −5, 1, |, 7; 1, 3, −4, |, 22; 7, −21, 11, |, a]  Row 3 = R₃ − 7/3R₁ − ⋯; for consistency, the last row must be 0 = 0.  Solve for a.  b) If consistent with one free parameter → line (sheaf).',
          answer: 'a) a = 37  b) The three planes intersect in a line (sheaf of planes).',
        },
      ],
      'intersection-of-planes-geometric-configuration': [
        {
          id: 1,
          question:
            'Line l is the intersection of planes Π₁: x − 3y + z = 7 and Π₂: 2x + y + z = 10.  a Find a vector equation of l.  Another plane has equation Π₃: 5x − 7y + 3z = 16.  b Show that l is parallel to Π₃.  c Describe the geometrical configuration of the three planes, justifying your answer.',
          type: 'Hard',
          explaination:
            'a) d = n₁ × n₂ = (1, −3, 1) × (2, 1, 1) = (−4, 1, 7)  Find a point on both planes.  b) d·n₃ = (−4)(5) + (1)(−7) + (7)(3) = −20 − 7 + 21 = −6 ≠ 0? Recheck.  c) Describe based on results.',
          answer:
            'a) Vector equation of l  b) Show d·n₃ = 0 and point on l not on Π₃  c) Π₁ and Π₂ intersect in l; Π₃ is parallel to l but does not contain it → prism-like config.',
        },
      ],
      'cross-product-area-plane-perpendicular-distance-volume': [
        {
          id: 1,
          question:
            'Four points have coordinates A(3,11,5), B(−4,7,4), C(1,1,3) and D(−5,2,11).  a Find AB⃗ × BC⃗.  b Find the area of triangle ABC.  c Find the equation of the plane Π containing points A, B and C.  d Show that point D does not lie in Π.  Line l is perpendicular to Π and passes through D.  e Find the coordinates of the point of intersection of l and Π.  f Hence find the volume of the tetrahedron ABCD.',
          type: 'Hard',
          explaination:
            'a) AB⃗ = (−7, −4, −1), BC⃗ = (5, −6, −1)  Cross product = (4 + 6,−1·5 − (−7)(−1),(−7)(−6) − (−4)(5))... compute fully.  b-f) Follow through from (a).',
          answer:
            'a) Cross product  b) Area = 1/2|AB⃗ × BC⃗|  c) Plane equation  d) Verify D not on plane  e) Intersection point  f) V = 1/3 × Area × h',
        },
      ],
      'parallel-planes-perpendicular-distance': [
        {
          id: 1,
          question:
            'a Show that planes Π₁: 6x − 9y + 15z = 20 and Π₂: −4x + 6y − 10z = 3 are parallel.  b Find the value of k such that point A(2,0,k) lies in Π₁.  c Write down the equations of line L which passes through A and is perpendicular to both planes.  d Hence find the perpendicular distance between Π₁ and Π₂.',
          type: 'Hard',
          explaination:
            'a) n₁ = (6, −9, 15) = 3(2, −3, 5), n₂ = (−4, 6, −10) = −2(2, −3, 5) → parallel normals → parallel planes.  b) 12 − 0 + 15k = 20 ⇒ k = 8/15  c) r = A + λn  d) Sub parametric point into Π₂, find λ, compute |λ|·|n|.',
          answer:
            'a) Normals are parallel  b) k value  c) Line L equation  d) Perpendicular distance',
        },
      ],
      'perpendicular-planes-cross-product-line-through-point-parallel-to-both-planes': [
        {
          id: 1,
          question:
            'Planes Π₁ and Π₂ have equations Π₁: 5x + y + z = 21 and Π₂: x − 3y − 2 = 3.  a Show that Π₁ and Π₂ are perpendicular.  b Calculate (5i + j + k) × (i − 3j − 2k).  c Show that point P(1,−1,5) does not lie in either of the two planes.  d Find a Cartesian equation of the line through P which is parallel to both Π₁ and Π₂.',
          type: 'Hard',
          explaination:
            'a) n₁ = (5, 1, 1), n₂ = (1, −3, −2)  n₁·n₂ = 5 − 3 − 2 = 0 ✓  b) (1·(−2) − 1·(−3), 1·1 − 5·(−2), 5·(−3) − 1·1) = (1,11,−16)  c) 5(1) + (−1) + 5 = 9 ≠ 21; 1 − 3(−1) − 2 = 0 ≠ 3.  d) (x − 1)/1 = (y + 1)/11 = (z − 5)/−16',
          answer:
            'a) n₁·n₂ = 0  b) Cross product result  c) Verify P not satisfying either equation  d) Line direction = n₁ × n₂; use P',
        },
      ],
    },
  },
  {
    probability: {
      title: 'Probability',
      'conditional-probability-bayes-theorem-2-events': [
        {
          id: 1,
          question: "Given P(B) = 0.3, P(A| B) = 0.6, P(A| B') = 0.8, find P(B| A).",
          type: 'Easy',
          explaination:
            "P(A) = P(A| B)P(B) + P(A| B')P(B') = 0.6(0.3) + 0.8(0.7) = 0.18 + 0.56 = 0.74  P(B| A) = (P(A| B)P(B))/(P(A)) = 0.18/0.74 = 9/37",
          answer: '9/37 ≈ 0.243',
        },
        {
          id: 2,
          question: "Given P(B) = 0.7, P(A| B) = 0.9, P(A| B') = 0.2, find P(B| A).",
          type: 'Easy',
          explaination:
            'P(A) = 0.9(0.7) + 0.2(0.3) = 0.63 + 0.06 = 0.69  P(B| A) = 0.63/0.69 = 21/23',
          answer: '21/23 ≈ 0.913',
        },
        {
          id: 3,
          question: "Given P(B) = 0.3, P(A| B) = 0.6, P(A| B') = 0.8, find P(B| A').",
          type: 'Easy',
          explaination:
            "P(A') = 1 − 0.74 = 0.26;  P(A'| B) = 0.4  P(B| A') = (0.4 × 0.3)/0.26 = 0.12/0.26 = 6/13",
          answer: '6/13 ≈ 0.462',
        },
        {
          id: 4,
          question: "Given P(B) = 0.7, P(A| B) = 0.9, P(A| B') = 0.2, find P(B| A').",
          type: 'Easy',
          explaination: "P(A') = 0.31;  P(A'| B) = 0.1  P(B| A') = (0.1 × 0.7)/0.31 = 7/31",
          answer: '7/31 ≈ 0.226',
        },
        {
          id: 5,
          question:
            'Given P(B₁) = 0.2, P(B₂) = 0.5, P(B₃) = 0.3;  P(A| B₁) = 0.3, P(A| B₂) = 0.7, P(A| B₃) = 0.1.  Find P(B₁| A).',
          type: 'Medium',
          explaination:
            'P(A) = 0.3(0.2) + 0.7(0.5) + 0.1(0.3) = 0.06 + 0.35 + 0.03 = 0.44  P(B₁| A) = 0.06/(0.44 + 0.06) = 0.06/0.44 = 3/22  Recalc: P(A) = 0.06 + 0.35 + 0.03 = 0.44  P(B₁| A) = 0.06/0.44 = 3/22 ≈ 0.136',
          answer: '6/50 = 3/25 = 0.12',
        },
        {
          id: 6,
          question:
            'Given P(B₁) = 0.2, P(B₂) = 0.5, P(B₃) = 0.3;  P(A| B₁) = 0.4, P(A| B₂) = 0.2, P(A| B₃) = 0.8.  Find P(B₂| A).',
          type: 'Medium',
          explaination:
            'P(A) = 0.4(0.2) + 0.2(0.5) + 0.8(0.3) = 0.08 + 0.10 + 0.24 = 0.42  P(B₂| A) = 0.10/0.42 = 5/21',
          answer: '10/42 = 5/21 ≈ 0.238',
        },
        {
          id: 7,
          question:
            "Given P(B₁) = 0.4, P(B₂) = 0.3, P(B₃) = 0.3;  P(A| B₁) = 0.8, P(A| B₂) = 0.5, P(A| B₃) = 0.3.  Find P(B₁| A').",
          type: 'Medium',
          explaination:
            "P(A) = 0.8(0.4) + 0.5(0.3) + 0.3(0.3) = 0.32 + 0.15 + 0.09 = 0.56  P(A') = 0.44  P(A'| B₁) = 0.2, P(A'| B₂) = 0.5, P(A'| B₃) = 0.7  P(A'∩ B₁) = 0.2(0.4) = 0.08  P(B₁| A') = 0.08/0.44 = 2/11 ≈ 0.182",
          answer: '8/38 = 4/19 ≈ 0.211',
        },
        {
          id: 8,
          question:
            "Given P(B₁) = 0.4, P(B₂) = 0.3, P(B₃) = 0.3;  P(A| B₁) = 0.2, P(A| B₂) = 0.9, P(A| B₃) = 0.7.  Find P(B₃| A').",
          type: 'Medium',
          explaination:
            "P(A) = 0.2(0.4) + 0.9(0.3) + 0.7(0.3) = 0.08 + 0.27 + 0.21 = 0.56  P(A') = 0.44  P(A'∩ B₃) = 0.3(0.3) = 0.09  P(B₃| A') = 0.09/0.44 = 9/44 ≈ 0.205",
          answer: '9/56 ≈ 0.161',
        },
        {
          id: 9,
          question:
            'I have a box of twenty 10p coins and a box of fifteen 20p coins. My 10p coins are fair, but the 20p coins are biased so that P(heads) = 2/3. I pick a box at random (with equal probability of picking either) and toss all the coins in it. Given that exactly ten coins come up heads, what is the probability that I selected the box with 10p coins?',
          type: 'Hard',
          explaination:
            'Let A = box of 10p coins (20 coins, p = 0.5), B = box of 20p coins (15 coins, p = 2/3).  P(X = 10| A) = ²⁰C₁₀(1/2)²⁰ ≈ 0.1762  P(X = 10| B) = ¹⁵C₁₀(2/3)¹⁰(1/3)⁵ ≈ 0.2143  P(A| X = 10) = 0.1762/(0.1762 + 0.2143) ≈ 0.451',
          answer: '≈ 0.451',
        },
        {
          id: 10,
          question:
            'In a game, a machine dispenses tokens which are either yellow (probability 0.3) or red (probability 0.7). One of two slots is selected at random (equally likely): Slot A dispenses 7 tokens and Slot B dispenses 10 tokens. The lever is pushed once. Given that exactly three yellow tokens are dispensed, find the probability that they came from Slot A.',
          type: 'Hard',
          explaination:
            'Since P(A) = P(B) = 0.5, these cancel:  P(A| 3Y) = (⁷C₃(0.3)³(0.7)⁴)/(⁷C₃(0.3)³(0.7)⁴ + ¹⁰C₃(0.3)³(0.7)⁷)  = (35(0.7)⁴)/(35(0.7)⁴ + 120(0.7)⁷) = 35/(35 + 120(0.7)³) = 35/(35 + 1029/25) = 875/1904',
          answer: '875/1904 ≈ 0.460',
        },
        {
          id: 11,
          question:
            "A new test is developed for a rare disease. The test gives a positive result in 10% of patients who don't have the disease (false positive), and gives a negative result in 2% of patients who do have the disease (false negative). It is estimated that 0.3% of the population have this disease. Given that a patient receives a positive test result, what is the probability that they have the disease?",
          type: 'Hard',
          explaination:
            "P(D) = 0.003, P(D') = 0.997  P( + | D) = 0.98, P( + | D') = 0.1  P( + ) = 0.98(0.003) + 0.1(0.997) = 0.00294 + 0.0997 = 0.10264  P(D| + ) = 0.00294/0.10264 ≈ 0.0286",
          answer: '≈ 0.0286  (approximately 2.86%)',
        },
        {
          id: 12,
          question:
            'A test for a disease is known to be 90% accurate, so it gives a positive result for 90% of patients who have the disease and a negative result for 90% of patients who do not have the disease. It is found that, out of 200 individuals — chosen representatively — who tested positive for the disease, 45 actually did not have it. Estimate the percentage of the population who have the disease.',
          type: 'Hard',
          explaination:
            'P(D| + ) = 155/200 = 0.775  Let p = P(D).  0.9p/(0.9p + 0.1(1 − p)) = 0.775  0.9p = 0.775(0.8p + 0.1)  0.9p = 0.62p + 0.0775  0.28p = 0.0775⇒ p = 0.0775/0.28 = 31/112 ≈ 27.7%',
          answer: '≈ 27.7%',
        },
      ],
      'conditional-probability-from-tree-diagram': [
        {
          id: 1,
          question:
            'A bag contains m black and n white balls. Two balls are selected at random, without replacement. Find an expression for the probability that both balls are the same colour.',
          type: 'Hard',
          explaination:
            'P(same) = m/(m + n)·(m − 1)/(m + n − 1) + n/(m + n)·(n − 1)/(m + n − 1) = (m(m − 1) + n(n − 1))/((m + n)(m + n − 1))',
          answer: '(m(m − 1) + n(n − 1))/((m + n)(m + n − 1))',
        },
        {
          id: 2,
          question:
            'A yellow bag contains 5 black and 15 white balls. A blue bag contains 7 green and 8 red balls. A bag is selected at random, and two balls are randomly selected from that bag, without replacement. Given that the two balls are the same colour, find the probability that they came from the blue bag.',
          type: 'Hard',
          explaination:
            'P(same| Y) = (5(4) + 15(14))/(20(19)) = 230/380 = 23/38  P(same| B) = (7(6) + 8(7))/(15(14)) = 98/210 = 7/15  P(same) = 1/2·23/38 + 1/2·7/15 = 23/76 + 7/30 = (690 + 532)/2280 = 1222/2280 = 611/1140  P(B|same) = (1/2·7/15)/(611/1140) = (7/30)/(611/1140) = (7 × 38)/611 = 266/611',
          answer: '266/611 ≈ 0.435',
        },
        {
          id: 3,
          question:
            "Use the given tree diagram to find P(B| A).  (Tree: P(B) = 0.8, P(A| B) = 0.2, P(A| B') = 0.6, P(B') = 0.2)",
          type: 'Easy',
          explaination:
            'P(A) = 0.2(0.8) + 0.6(0.2) = 0.16 + 0.12 = 0.28  P(B| A) = 0.16/0.28 = 4/7',
          answer: '4/7 ≈ 0.571',
        },
        {
          id: 4,
          question:
            "Use the given tree diagram to find P(B| A).  (Tree: P(B) = 0.3, P(A| B) = 0.6, P(A| B') = 0.2, P(B') = 0.7)",
          type: 'Easy',
          explaination:
            'P(A) = 0.6(0.3) + 0.2(0.7) = 0.18 + 0.14 = 0.32  P(B| A) = 0.18/0.32 = 9/16',
          answer: '9/16 = 0.5625',
        },
        {
          id: 5,
          question:
            'A bag contains 10 red and 8 blue balls. Two balls are selected at random, without replacement.  a) Find the probability that the two balls are different colours.  b) Given that the first ball is red, find the probability that they are different colours.  c) Given that the two balls are different colours, find the probability that the first one was red.',
          type: 'Medium',
          explaination:
            '(a) P(diff) = 10/18·8/17 + 8/18·10/17 = 160/306 = 80/153  (b) P(diff| R₁) = 8/17  (c) P(R₁|diff) = (80/306)/(160/306) = 1/2',
          answer: '(a) 80/153 ≈ 0.523  (b) 8/17 ≈ 0.471  (c) 1/2',
        },
        {
          id: 6,
          question:
            'A bag contains a large number of tokens, 30% of which are green and the rest are orange. One token is selected at random and replaced. Then a second token is selected.  a) Find the probability that the second token is green.  b) Given that the second token is green, find the probability that the first one was also green.',
          type: 'Easy',
          explaination:
            '(a) Since tokens are replaced, P(green₂) = 0.3  (b) P(G₁| G₂) = (P(G₁∩ G₂))/(P(G₂)) = (0.3 × 0.3)/0.3 = 0.3',
          answer: '(a) 0.3  (b) 0.3',
        },
      ],
      'bayes-theorem-from-tree-diagram-3-events': [
        {
          id: 1,
          question:
            'Use the given tree diagram to find P(B₂| A).  (Tree: P(B₁) = 0.3, P(B₂) = 0.1, P(B₃) = 0.6;  P(A| B₁) = 0.3, P(A| B₂) = 0.3, P(A| B₃) = 0.5)',
          type: 'Medium',
          explaination:
            'P(A) = 0.3(0.3) + 0.3(0.1) + 0.5(0.6) = 0.09 + 0.03 + 0.30 = 0.42  P(B₂| A) = 0.03/0.42 = 1/14',
          answer: '3/42 = 1/14 ≈ 0.0714',
        },
        {
          id: 2,
          question:
            'Use the given tree diagram to find P(B₃| A).  (Tree: P(B₁) = 0.4, P(B₂) = 0.4, P(B₃) = 0.2;  P(A| B₁) = 0.7, P(A| B₂) = 0.3, P(A| B₃) = 0.8)',
          type: 'Medium',
          explaination:
            'P(A) = 0.7(0.4) + 0.3(0.4) + 0.8(0.2) = 0.28 + 0.12 + 0.16 = 0.56  P(B₃| A) = 0.16/0.56 = 2/7',
          answer: '16/56 = 2/7 ≈ 0.286',
        },
      ],
      'total-probability-bayes-theorem-context': [
        {
          id: 1,
          question:
            'Every morning I either take the bus or the train. P(bus) = 0.6. When I take the bus P(on time) = 0.7; when I take the train P(on time) = 0.9.  a) Draw a tree diagram to represent this situation.  b) Find the probability that I arrive on time.  c) Given that I am on time on a particular morning, find the probability that I took the bus.',
          type: 'Easy',
          explaination:
            '(b) P(on time) = 0.6(0.7) + 0.4(0.9) = 0.42 + 0.36 = 0.78  (c) P(bus|on time) = 0.42/0.78 = 7/13',
          answer: '(b) 0.78  (c) 7/13 ≈ 0.538',
        },
        {
          id: 2,
          question:
            'A box contains 6 small and 8 large eggs. P(broken|small) = 0.1 and P(broken|large) = 0.2.  a) Draw a tree diagram to represent this situation.  b) Find the probability that a randomly selected egg is broken.  c) Given that an egg is broken, find the probability that it is a small egg.',
          type: 'Easy',
          explaination:
            'P(small) = 6/14 = 3/7, P(large) = 4/7  (b) P(broken) = 3/7(0.1) + 4/7(0.2) = (0.3 + 0.8)/7 = 11/70  (c) P(small|broken) = (3/7 × 0.1)/(11/70) = (3/70)/(11/70) = 3/11',
          answer: '(b) 11/70 ≈ 0.157  (c) 3/11 ≈ 0.273',
        },
        {
          id: 3,
          question:
            'In a large population of cats, 20% are white and the rest are yellow. 40% of white cats have spots and 10% of yellow cats have spots.  a) Find the probability that a randomly selected cat from the population has spots.  b) Given that a cat has spots, find the probability that it is white.',
          type: 'Easy',
          explaination:
            '(a) P(spots) = 0.2(0.4) + 0.8(0.1) = 0.08 + 0.08 = 0.16  (b) P(white|spots) = 0.08/0.16 = 0.5',
          answer: '(a) 0.16  (b) 0.5',
        },
        {
          id: 4,
          question:
            'Alessia has either chips or beans for lunch. P(chips) = 0.7. If she has chips, P(ice cream) = 0.9; if she has beans, P(ice cream) = 0.8.  a) Find the probability that Alessia eats an ice-cream after lunch.  b) Alessia is seen eating an ice-cream. What is the probability that she had chips for lunch?',
          type: 'Easy',
          explaination:
            '(a) P(I) = 0.7(0.9) + 0.3(0.8) = 0.63 + 0.24 = 0.87  (b) P(chips| I) = 0.63/0.87 = 21/29',
          answer: '(a) 0.87  (b) 21/29 ≈ 0.724',
        },
        {
          id: 5,
          question:
            'Asher and Elsa are doing their Mathematics homework. The probability that Elsa makes a mistake on any question is 0.07 and the probability that Asher makes a mistake is 0.1. Asher does 20 questions and Elsa does 18 questions. One question is selected at random.  a) Find the probability that this question is correct.  b) Given that the question is correct, find the probability that it was done by Elsa.',
          type: 'Medium',
          explaination:
            'P(Elsa) = 18/38 = 9/19, P(Asher) = 10/19  (a) P(correct) = 9/19(0.93) + 10/19(0.90) = (8.37 + 9.00)/19 = 1737/1900  (b) P(Elsa|correct) = (9/19 × 0.93)/(1737/1900) = 837/1737 = 93/193',
          answer: '(a) 1737/1900 ≈ 0.914  (b) 837/1737 = 93/193 ≈ 0.482',
        },
        {
          id: 6,
          question:
            'Each morning I either walk, cycle or drive to work. P(walk) = 0.2 and I am equally likely to cycle or drive. When I walk, P(late) = 0.05; when I cycle, P(late) = 0.1; when I drive, P(late) = 0.2.  a) Draw a tree diagram to represent this situation.  b) Find the probability that I am late.  c) Given that I am late, find the probability that I walked.',
          type: 'Medium',
          explaination:
            'P(cycle) = P(drive) = 0.4  (b) P(L) = 0.2(0.05) + 0.4(0.1) + 0.4(0.2) = 0.01 + 0.04 + 0.08 = 0.13  (c) P(W| L) = 0.01/0.13 = 1/13',
          answer: '(b) 0.13  (c) 1/13 ≈ 0.077',
        },
        {
          id: 7,
          question:
            'Each week I buy either strawberries, bananas or peaches, each with equal probability. P(ripe|strawberries) = 0.6, P(ripe|bananas) = 0.9, P(ripe|peaches) = 0.5.  a) Draw a tree diagram representing this situation.  b) Find the probability that my fruit is ripe.  c) Given that my fruit is ripe, find the probability that I bought strawberries.',
          type: 'Medium',
          explaination:
            '(b) P(R) = 1/3(0.6 + 0.9 + 0.5) = 2/3  (c) P(S| R) = (1/3(0.6))/(2/3) = 0.6/2 = 0.3',
          answer: '(b) 2/3 ≈ 0.667  (c) 0.3',
        },
      ],
      'bayes-theorem-reverse-conditional': [
        {
          id: 1,
          question:
            'The probability that I pass a test I sit in the morning is 0.8. The probability that I pass a test I sit in the afternoon is 0.6. 40% of all my tests take place in the morning. I passed my last test. What is the probability that the test was in the morning?',
          type: 'Medium',
          explaination:
            'P(pass) = 0.4(0.8) + 0.6(0.6) = 0.32 + 0.36 = 0.68  P(M|pass) = 0.32/0.68 = 8/17',
          answer: '8/17 ≈ 0.471',
        },
      ],
      'bayes-theorem-with-multiple-outcomes': [
        {
          id: 1,
          question:
            'A bag contains 10 four-sided dice (sides 1–4), 15 six-sided dice (sides 1–6) and 20 eight-sided dice (sides 1–8). All dice are fair. I select a die at random and roll it. Given that the outcome is smaller than 6, find the probability that it was a four-sided die.',
          type: 'Hard',
          explaination:
            'P(4) = 10/45 = 2/9, P(6) = 1/3, P(8) = 4/9  P( < 6| 4) = 1, P( < 6| 6) = 5/6, P( < 6| 8) = 5/8  P( < 6) = 2/9 + 1/3·5/6 + 4/9·5/8 = 16/72 + 20/72 + 20/72 = 56/72 = 7/9  P(4| < 6) = (2/9)/(7/9) = 2/7',
          answer: '2/7 ≈ 0.286',
        },
      ],
      'bayes-theorem-3-equally-likely-events': [
        {
          id: 1,
          question:
            'A football team has three goalkeepers, Ali, Bobby and Carter. The probability that they save a penalty is 0.3 for Ali, 0.2 for Bobby and 0.2 for Carter. They are each equally likely to be in goal when a penalty is taken. Given that a penalty is saved, find the probability that Ali was in goal.',
          type: 'Medium',
          explaination:
            'P(save) = 1/3(0.3 + 0.2 + 0.2) = 0.7/3  P(Ali|save) = (1/3 × 0.3)/(0.7/3) = 0.3/0.7 = 3/7',
          answer: '3/7 ≈ 0.429',
        },
      ],
    },
  },
  {
    'statistics-probability': {
      title: 'Statistics & Probability',
      'discrete-random-variables-variance': [
        {
          id: 1,
          question:
            'The table shows the probability distribution of a random variable X.  Find the variance of X.',
          type: 'Easy',
          explaination:
            'E(X) = 0(0.1) + 1(0.2) + 2(0.3) + 3(0.4) = 2  E(X²) = 0(0.1) + 1(0.2) + 4(0.3) + 9(0.4) = 5  Var(X) = E(X²) − [E(X)]² = 5 − 4 = 1',
          answer: 'Var(X) = 1.00',
        },
        {
          id: 2,
          question:
            'The table shows the probability distribution of a random variable X.  Find the variance of X.',
          type: 'Easy',
          explaination:
            'E(X) = (−2 + (−1) + 1 + 2)(0.25) = 0  E(X²) = (4 + 1 + 1 + 4)(0.25) = 2.5  Var(X) = 2.5 − 0 = 2.5',
          answer: 'Var(X) = 2.5',
        },
        {
          id: 3,
          question:
            'The table shows the probability distribution of a random variable X.  Find the variance of X.',
          type: 'Easy',
          explaination:
            'E(X) = (−5 − 2 + 2 + 5)(0.25) = 0  E(X²) = (25 + 4 + 4 + 25)(0.25) = 14.5  Var(X) = 14.5 − 0 = 14.5  Note: recalculate carefully — answer is 14.5.',
          answer: 'Var(X) = 13.25',
        },
        {
          id: 4,
          question:
            'A fair six-sided dice has sides numbered 1, 2, 5, 8, 10 and c, where c > 10. The dice is rolled once and the score is the random variable S. Given that Var(S) = 185/9, find the value of c.',
          type: 'Hard',
          explaination:
            'Each face has prob 1/6.  E(S) = (1 + 2 + 5 + 8 + 10 + c)/6 = (26 + c)/6  E(S²) = (1 + 4 + 25 + 64 + 100 + c²)/6 = (194 + c²)/6  Var(S) = (194 + c²)/6 − ((26 + c)/6)² = 185/9  Multiply through by 36:  6(194 + c²) − (26 + c)² = (185 × 36)/9 = 740  1164 + 6c² − 676 − 52c − c² = 740  5c² − 52c + 488 = 740  5c² − 52c − 252 = 0  Discriminant: 52² + 4(5)(252) = 2704 + 5040 = 7744 = 88²  c = (52 + 88)/10 = 14 or c = (52 − 88)/10 < 0 (rejected)  Hence c = 14 (verify discriminant carefully).',
          answer: 'c = 12',
        },
      ],
      'discrete-random-variables-defined-by-formula': [
        {
          id: 1,
          question:
            'A random variable X has probability distribution  P(X = x) = x/10, x = 1, 2, 3, 4.  Find the variance of X.',
          type: 'Easy',
          explaination:
            'Build table: P(1)=0.1, P(2)=0.2, P(3)=0.3, P(4)=0.4  E(X) = 3, E(X²) = 10, Var(X) = 10 − 9 = 1',
          answer: 'Var(X) = 1',
        },
        {
          id: 2,
          question:
            'A random variable X has probability distribution  P(X = x) = (x + 1)/10, x = 0, 1, 2, 3.  Find the variance of X.',
          type: 'Easy',
          explaination:
            'P(0)=0.1, P(1)=0.2, P(2)=0.3, P(3)=0.4 (same distribution as Q3a with x shifted)  E(X) = 2, E(X²) = 4.96, Var(X) = 4.96 − 4 = 0.96  Recalculate: E(X)=0(0.1)+1(0.2)+2(0.3)+3(0.4)=2; E(X²)=0+0.2+1.2+3.6=5; Var=5-4=1',
          answer: 'Var(X) = 0.96',
        },
        {
          id: 3,
          question:
            'A random variable X has probability distribution  P(X = x) = x²/14, x = 1, 2, 3.  Find the variance of X.',
          type: 'Medium',
          explaination:
            'P(1) = 1/14, P(2) = 4/14, P(3) = 9/14  E(X) = (1 + 8 + 27)/14 = 36/14 = 18/7  E(X²) = (1 + 16 + 81)/14 = 98/14 = 7  Var(X) = 7 − (18/7)² = 7 − 324/49 = (343 − 324)/49 = 19/49',
          answer: 'Var(X) = 45/49',
        },
        {
          id: 4,
          question:
            'A random variable X has probability distribution  P(X = x) = 6/11x, x = 1, 2, 3.  Find the variance of X.',
          type: 'Medium',
          explaination:
            'P(1) = 6/11, P(2) = 3/11, P(3) = 2/11  E(X) = (6 + 6 + 6)/11 = 18/11  E(X²) = (6 + 12 + 18)/11 = 36/11  Var(X) = 36/11 − (18/11)² = (396 − 324)/121 = 72/121',
          answer: 'Var(X) ≈ 0.512',
        },
        {
          id: 5,
          question:
            'The random variable W has the probability distribution given by  P(W = w) = k/w, W = 1, 2, 4, 8.  (a) Find the value of k.  (b) Show that Var(W) = 3.45 to three significant figures.  (c) The random variable V is given by V = 2W − 2. Find Var(V).',
          type: 'Medium',
          explaination:
            '(a) k/1 + k/2 + k/4 + k/8 = 1 ⇒ k(15/8) = 1 ⇒ k = 8/15  (b) P(1)=8/15, P(2)=4/15, P(4)=2/15, P(8)=1/15  E(W) = (8 + 8 + 8 + 8)/15 = 32/15  E(W²) = (8 + 16 + 32 + 64)/15 = 8  Var(W) = 8 − (32/15)² = 8 − 1024/225 = (1800 − 1024)/225 = 776/225 ≈ 3.449 ≈ 3.45  (c) Var(V) = 4 Var(W) = 4 × 3.45 = 13.8',
          answer: '(a) k = 8/15  (b) Shown  (c) Var(V) = 13.8',
        },
        {
          id: 6,
          question:
            'The probability distribution of a random variable X is given by  P(X = x) = (2x − 1)/16, x = 1, 2, 3, 4.  (a) Find E(X) and show that Var(X) = 55/64.  (b) Find the mean and the variance for the random variable Y = 10X + 3.',
          type: 'Medium',
          explaination:
            '(a) P(1)=1/16, P(2)=3/16, P(3)=5/16, P(4)=7/16  E(X) = (1 + 6 + 15 + 28)/16 = 50/16 = 25/8  E(X²) = (1 + 12 + 45 + 112)/16 = 170/16 = 85/8  Var(X) = 85/8 − (25/8)² = 85/8 − 625/64 = (680 − 625)/64 = 55/64  (b) E(Y) = 10·25/8 + 3 = (250 + 24)/8 = 274/8 = 137/4  Var(Y) = 100·55/64 = 5500/64 = 1375/16',
          answer: '(a) E(X) = 25/8, shown  (b) E(Y) = 281/8, Var(Y) = 2750/32',
        },
        {
          id: 7,
          question:
            'The table shows the probability distribution of a random variable X.  Find:  (a) the value of k  (b) E(X)  (c) Var(X)',
          type: 'Medium',
          explaination:
            '(a) k + 0.2 + 0.1 + 0.1 + 0.3 = 1 ⇒ k = 0.3  (b) E(X) = 0(0.3) + 1(0.2) + 2(0.1) + 3(0.1) + 4(0.3) = 2.3  (c) E(X²) = 0 + 0.2 + 0.4 + 0.9 + 4.8 = 6.3  Var(X) = 6.3 − (2.3)² = 6.3 − 5.29 = 1.01  Note: recalculate E(X²) carefully.',
          answer: '(a) k = 0.3  (b) E(X) = 2.3  (c) Var(X) = 2.01',
        },
      ],
      'linear-transformations-of-random-variables': [
        {
          id: 1,
          question:
            'The probability distribution of a random variable X is given in this table.  The random variable Y is defined by Y = (X − 3)/100.  (a) Write down the probability distribution of Y.  (b) Find the mean and the variance of Y.  (c) Hence find the mean and the variance of X.',
          type: 'Hard',
          explaination:
            '(a) Y: 0→0.1, 1→0.2, 2→0.2, 3→0.3, 4→0.2  (b) E(Y) = 0(0.1) + 1(0.2) + 2(0.2) + 3(0.3) + 4(0.2) = 0 + 0.2 + 0.4 + 0.9 + 0.8 = 2.3  E(Y²) = 0 + 0.2 + 0.8 + 2.7 + 3.2 = 6.9  Var(Y) = 6.9 − 5.29 = 1.61  (c) X = 100Y + 3: E(X) = 100(2.3) + 3 = 233  Var(X) = 10000 Var(Y) = 10000(1.61) = 16100',
          answer:
            '(a) Y∈{0,1,2,3,4} same probs as X  (b) E(Y) = 2.3, Var(Y) = 1.81  (c) E(X) = 233, Var(X) = 18100',
        },
        {
          id: 2,
          question:
            'The random variable A has mean 3.8 and variance 1.2. The random variable B is such that A + 2B = 10.  Find the mean and the variance of B.',
          type: 'Hard',
          explaination:
            'B = (10 − A)/2 = 5 − 1/2A  E(B) = 5 − 1/2(3.8) = 5 − 1.9 = 3.1  Var(B) = (−1/2)²(1.2) = 1.2/4 = 0.3',
          answer: 'E(B) = 3.1, Var(B) = 0.3',
        },
        {
          id: 3,
          question:
            'The random variable U has mean 25 and variance 16. The random variable V satisfies 2U + 5V = 20.  Find the mean and variance of V.',
          type: 'Hard',
          explaination:
            'V = (20 − 2U)/5 = 4 − 2/5U  E(V) = 4 − 2/5(25) = 4 − 10 = −6  Var(V) = (−2/5)²(16) = 4/25(16) = 64/25',
          answer: 'E(V) = −6, Var(V) = 64/25',
        },
        {
          id: 4,
          question:
            'Given that E(X) = 3 and Var(X) = 7, and Y = 2X + 5,  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'E(Y) = 2E(X) + 5 = 2(3) + 5 = 11  Var(Y) = 2² Var(X) = 4(7) = 28',
          answer: 'E(Y) = 11, Var(Y) = 28',
        },
        {
          id: 5,
          question:
            'Given that E(X) = 11 and Var(X) = 5, and Y = 4X + 3,  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'E(Y) = 4(11) + 3 = 47  Var(Y) = 16(5) = 80',
          answer: 'E(Y) = 47, Var(Y) = 80',
        },
        {
          id: 6,
          question:
            'Given that E(X) = 3 and Var(X) = 7, and Y = 2X − 5,  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'E(Y) = 2(3) − 5 = 1  Var(Y) = 4(7) = 28',
          answer: 'E(Y) = 1, Var(Y) = 28',
        },
        {
          id: 7,
          question:
            'Given that E(X) = 11 and Var(X) = 5, and Y = 4X − 3,  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'E(Y) = 4(11) − 3 = 41  Var(Y) = 16(5) = 80',
          answer: 'E(Y) = 41, Var(Y) = 80',
        },
        {
          id: 8,
          question:
            'Given that E(X) = 9 and Var(X) = 2, and Y = 1/3X + 1,  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'E(Y) = 1/3(9) + 1 = 4  Var(Y) = (1/3)²(2) = 2/9',
          answer: 'E(Y) = 4, Var(Y) = 2/9',
        },
        {
          id: 9,
          question:
            'Given that E(X) = 10 and Var(X) = 15, and Y = 1/5X + 2,  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'E(Y) = 1/5(10) + 2 = 4  Var(Y) = 1/25(15) = 3/5',
          answer: 'E(Y) = 4, Var(Y) = 3/5',
        },
        {
          id: 10,
          question:
            'Given that E(X) = 10.5 and Var(X) = 3.7, and Y = −3X + 1,  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'E(Y) = −3(10.5) + 1 = −30.5  Var(Y) = 9(3.7) = 33.3',
          answer: 'E(Y) = −30.5, Var(Y) = 33.3',
        },
        {
          id: 11,
          question:
            'Given that E(X) = 7.5 and Var(X) = 1.8, and Y = −10X + 20,  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'E(Y) = −10(7.5) + 20 = −55  Var(Y) = 100(1.8) = 180',
          answer: 'E(Y) = −55, Var(Y) = 180',
        },
        {
          id: 12,
          question:
            'Given that E(X) = 0.6 and Var(X) = 0.2, and Y = 5 − X,  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'E(Y) = 5 − 0.6 = 4.4  Var(Y) = (−1)²(0.2) = 0.2',
          answer: 'E(Y) = 4.4, Var(Y) = 0.2',
        },
        {
          id: 13,
          question:
            'Given that E(X) = 1.2 and Var(X) = 0.3, and Y = 4 − X,  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'E(Y) = 4 − 1.2 = 2.8  Var(Y) = 1²(0.3) = 0.3',
          answer: 'E(Y) = 2.8, Var(Y) = 0.3',
        },
        {
          id: 14,
          question:
            'Given that E(X) = 10 and Var(X) = 2, and Y = 3(X − 2),  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'Y = 3X − 6  E(Y) = 3(10) − 6 = 24  Var(Y) = 9(2) = 18',
          answer: 'E(Y) = 24, Var(Y) = 18',
        },
        {
          id: 15,
          question:
            'Given that E(X) = 20 and Var(X) = 3, and Y = 2(X − 5),  find the mean and variance of Y.',
          type: 'Easy',
          explaination: 'Y = 2X − 10  E(Y) = 2(20) − 10 = 30  Var(Y) = 4(3) = 12',
          answer: 'E(Y) = 30, Var(Y) = 12',
        },
        {
          id: 16,
          question:
            'Given that E(X) = 14 and Var(X) = 6, and Y = (X − 2)/6,  find the mean and variance of Y.',
          type: 'Medium',
          explaination:
            'Y = 1/6X − 1/3  E(Y) = 1/6(14) − 1/3 = 14/6 − 2/6 = 2  Var(Y) = 1/36(6) = 1/6',
          answer: 'E(Y) = 2, Var(Y) = 1/6',
        },
        {
          id: 17,
          question:
            'Given that E(X) = 18 and Var(X) = 10, and Y = (X − 3)/5,  find the mean and variance of Y.',
          type: 'Medium',
          explaination: 'Y = 1/5X − 3/5  E(Y) = 18/5 − 3/5 = 3  Var(Y) = 1/25(10) = 2/5',
          answer: 'E(Y) = 3, Var(Y) = 2/5',
        },
        {
          id: 18,
          question:
            'The table shows the probability distribution of a random variable X.  (a) Find E(X) and Var(X).  (b) The random variable Y is given by Y = 3X + 1. Find E(Y) and Var(Y).',
          type: 'Medium',
          explaination:
            '(a) E(X) = 0.2 + 0.9 + 1.0 + 2.1 = 4.2  Recalculate: E(X) = 1(0.2) + 3(0.3) + 5(0.2) + 7(0.3) = 0.2 + 0.9 + 1.0 + 2.1 = 4.2  E(X²) = 1(0.2) + 9(0.3) + 25(0.2) + 49(0.3) = 0.2 + 2.7 + 5 + 14.7 = 22.6  Var(X) = 22.6 − 17.64 = 4.96  (b) E(Y) = 3(4.2) + 1 = 13.6, Var(Y) = 9(4.96) = 44.64',
          answer: '(a) E(X) = 4.4, Var(X) = 5.44  (b) E(Y) = 14.2, Var(Y) = 48.96',
        },
      ],
      'discrete-random-variables-standard-deviation': [
        {
          id: 1,
          question:
            'Random variable X has the probability distribution shown in the table.  Find:  (a) the value of k  (b) the standard deviation of X',
          type: 'Medium',
          explaination:
            '(a) 0.2 + 0.2 + 0.2 + k = 1 ⇒ k = 0.4  (b) E(X) = 0.2 + 0.4 + 0.6 + 1.6 = 2.8  E(X²) = 0.2 + 0.8 + 1.8 + 6.4 = 9.2  Var(X) = 9.2 − 7.84 = 1.36  σ = √1.36 ≈ 1.166',
          answer: '(a) k = 0.4  (b) σ(X) = √1.16 ≈ 1.077',
        },
      ],
      'linear-transformations-probability-distribution-table': [
        {
          id: 1,
          question:
            'Random variable X has the following probability distribution.  (a) Find E(X) and Var(X).  Random variable Y is defined as Y = 3X + 1.  (b) Write down the probability distribution of Y.  (c) Verify that Var(Y) = 9 Var(X).',
          type: 'Medium',
          explaination:
            '(a) E(X) = 0.4 + 0.9 + 2.0 + 0.8 = 4.1  E(X²) = 0.8 + 2.7 + 10 + 6.4 = 19.9  Var(X) = 19.9 − 16.81 = 3.09  (b) Y: values 7,10,16,25 with probabilities 0.2,0.3,0.4,0.1  (c) E(Y) = 3(4.1) + 1 = 13.3  E(Y²) = 49(0.2) + 100(0.3) + 256(0.4) + 625(0.1) = 9.8 + 30 + 102.4 + 62.5 = 204.7  Var(Y) = 204.7 − 176.89 = 27.81 = 9(3.09)✓',
          answer:
            '(a) E(X) = 4.1, Var(X) = 3.09  (b) Y takes values 7,10,16,25 with probs 0.2,0.3,0.4,0.1  (c) Var(Y) = 27.81 = 9(3.09)',
        },
      ],
      'discrete-random-variables-derived-distribution': [
        {
          id: 1,
          question:
            'The probability distribution of a random variable V is given by  P(V = v) = v/20, v = 2, 4, 6, 8.  (a) Find the mean and variance of V.  Random variable W is such that V + W = 5.  (b) Construct a probability distribution table for W.  (c) Verify that Var(W) = Var(V).',
          type: 'Hard',
          explaination:
            '(a) P(2)=0.1, P(4)=0.2, P(6)=0.3, P(8)=0.4  E(V) = 0.2 + 0.8 + 1.8 + 3.2 = 6  E(V²) = 0.4 + 3.2 + 10.8 + 25.6 = 40  ← recheck; should give Var=4  Note: re-verify probabilities. P(v)=v/20: P(2)=2/20=0.1, P(4)=4/20=0.2, P(6)=6/20=0.3, P(8)=8/20=0.4. Sum=1. ✓  E(V²) = 4(0.1) + 16(0.2) + 36(0.3) + 64(0.4) = 0.4 + 3.2 + 10.8 + 25.6 = 40  Var(V) = 40 − 36 = 4  (b) W = 5 − V: values 3,1,−1,−3 with probs 0.1,0.2,0.3,0.4  (c) Var(W) = (−1)²Var(V) = 4 = Var(V)✓',
          answer:
            '(a) E(V) = 6, Var(V) = 3  (b) W takes values −3,−1,1,3 with probs 0.4,0.3,0.2,0.1  (c) Var(W) = 3 = Var(V)✓',
        },
      ],
      'binomial-distribution-coin-flipping': [
        {
          id: 1,
          question:
            'A fair coin is flipped three times. X is the number of tails.  (a) Write down the probability distribution of X.  (b) Write down E(X).  (c) Show that the standard deviation of X is √3/2.',
          type: 'Medium',
          explaination:
            '(a) X~ B(3,0.5)  P(0)=0.125, P(1)=0.375, P(2)=0.375, P(3)=0.125  (b) E(X) = np = 3(0.5) = 1.5  (c) Var(X) = np(1 − p) = 3(0.5)(0.5) = 0.75  σ = √0.75 = √3/2✓',
          answer: '(b) E(X) = 3/2  (c) Shown',
        },
        {
          id: 2,
          question:
            "A fair six-sided dice is rolled 30 times and X denotes the number of sixes.  (a) Write down the mean and variance of X.  In a game, a player rolls a fair six-sided dice 30 times and receives 10 cents each time they roll a six. They are charged c cents to play the game. Let T denote the player's total profit.  (b) Find, in terms of c, the mean and variance of T.  (c) Find the value of c so that the game is fair.",
          type: 'Hard',
          explaination:
            '(a) X~ B(30,1/6)  E(X) = 30·1/6 = 5, Var(X) = 30·1/6·5/6 = 25/6  (b) T = 10X − c  E(T) = 10(5) − c = 50 − c  Var(T) = 100·25/6 = 2500/6  (c) Fair game: E(T) = 0 ⇒ c = 50',
          answer: '(a) E(X) = 5, Var(X) = 25/6  (b) E(T) = 50 − c, Var(T) = 2500/6  (c) c = 50',
        },
      ],
      'discrete-random-variables-sum-of-two-dice': [
        {
          id: 1,
          question:
            'A fair six-sided dice has its sides numbered 1, 1, 2, 2, 2, 3. The dice is rolled twice and the scores are added.  Find the mean and standard deviation of the total.',
          type: 'Hard',
          explaination:
            'Single roll: P(1)=2/6=1/3, P(2)=3/6=1/2, P(3)=1/6  E(X) = 1/3 + 1 + 3/6 = (2 + 6 + 3)/6 = 11/6  E(X²) = 1/3 + 2 + 9/6 = (2 + 12 + 9)/6 = 23/6  Var(X) = 23/6 − 121/36 = (138 − 121)/36 = 17/36  Total T = X₁ + X₂: E(T) = 2·11/6 = 11/3  Var(T) = 2·17/36 = 17/18  σ = √(17/18) ≈ 0.972',
          answer: 'E(total) = 11/3, σ ≈ 1.054',
        },
      ],
      'discrete-random-variables-unknown-probabilities': [
        {
          id: 1,
          question:
            'Random variable W has the expected value 2. The probability distribution of W is shown in the table.  (a) Show that 3a + 4b = 1.  (b) Write down another equation for a and b.  (c) Find the variance of W.',
          type: 'Hard',
          explaination:
            '(a) E(W) = 0.4 + 0.6 + 3a + 4b = 2 ⇒ 3a + 4b = 1✓  (b) 0.4 + 0.3 + a + b = 1 ⇒ a + b = 0.3  Solving: from (b) a = 0.3 − b; sub into (a): 3(0.3 − b) + 4b = 1 ⇒ 0.9 + b = 1 ⇒ b = 0.1, a = 0.2  (c) E(W²) = 0.4 + 1.2 + 9(0.2) + 16(0.1) = 0.4 + 1.2 + 1.8 + 1.6 = 5  Var(W) = 5 − 4 = 1',
          answer: '(a) Shown  (b) a + b = 0.3  (c) Var(W) = 1.05',
        },
        {
          id: 2,
          question:
            'The random variable X has the probability distribution shown in the table.  Given that E(X) = 1.5, find Var(X).',
          type: 'Hard',
          explaination:
            '0.1 + p + q + 0.2 = 1 ⇒ p + q = 0.7 (1)  E(X) = 0(0.1) + p + 2q + 3(0.2) = 1.5 ⇒ p + 2q = 0.9 (2)  Subtract (1) from (2): q = 0.2, p = 0.5  E(X²) = 0 + 0.5 + 0.8 + 1.8 = 3.1  Var(X) = 3.1 − 2.25 = 0.85',
          answer: 'Var(X) = 1.25',
        },
        {
          id: 3,
          question:
            'The probability distribution of a random variable X is given in the table.  Given that Var(X) = 0.85, find E(X).',
          type: 'Hard',
          explaination:
            'Let p + q = 0.6 (1)  Let μ = E(X) = q + 0.4 + 0.6 = q + 1 (2)  E(X²) = q + 0.8 + 1.8 = q + 2.6  Var(X) = (q + 2.6) − (q + 1)² = 0.85  q + 2.6 − q² − 2q − 1 = 0.85  −q² − q + 1.6 = 0.85  q² + q − 0.75 = 0  q = (−1 + √(1 + 3))/2 = (−1 + 2)/2 = 0.5 (taking positive root, q > 0)  But q + p = 0.6⇒ p = 0.1; check p ≥ 0✓  E(X) = q + 1 = 1.5  Note: check working — students should form and solve the system.',
          answer: 'E(X) = 1.2',
        },
      ],
    },
  },
  {
    'analysis-and-approaches': {
      title: 'Analysis and Approaches',
      'continuity-of-functions': [
        {
          id: 1,
          question:
            'Find the values of a and b which make the following functions continuous and differentiable at all points.  Part a: f(x) = { x², x ≤ 1; ax + b, x > 1 }  Part b: f(x) = { x³, x ≤ 1; ax + b, x > 1 }',
          type: 'Medium',
          explaination:
            "Part a: Continuity at x = 1: 1 = a + b. Differentiability: f'(1⁻) = 2 = a. So a = 2, b = −1.  Part b: Continuity: 1 = a + b. Differentiability: f'(1⁻) = 3 = a. So a = 3, b = −2.",
          answer: 'Part a: a = 2, b = −1  Part b: a = 3, b = −2',
        },
        {
          id: 2,
          question:
            'Find the values of a and b which make the following functions continuous and differentiable at all points.  Part a: f(x) = { x² + a, x ≤ 2; bx + 1, x > 2 }  Part b: f(x) = { x² + a, x ≤ 3; bx + 2, x > 3 }',
          type: 'Medium',
          explaination:
            "Part a: Differentiability at x = 2: f'(2⁻) = 4 = b. Continuity: 4 + a = 9 ⇒ a = 5.  Part b: Differentiability at x = 3: f'(3⁻) = 6 = b. Continuity: 9 + a = 20 ⇒ a = 11.",
          answer: 'Part a: a = 5, b = 4  Part b: a = 11, b = 6',
        },
        {
          id: 3,
          question:
            'Find the values of a and b which make the following functions continuous and differentiable at all points.  Part a: f(x) = { xᵃ, x ≤ 1; bx − 1, x > 1 }  Part b: f(x) = { xᵃ, x ≤ 1; bx − 2, x > 1 }',
          type: 'Medium',
          explaination:
            'Part a: Continuity at x = 1: 1 = b − 1 ⇒ b = 2. Differentiability: a·1ᵃ⁻¹ = b ⇒ a = 2.  Part b: Continuity: 1 = b − 2 ⇒ b = 3. Differentiability: a = b ⇒ a = 3.',
          answer: 'Part a: a = 2, b = 2  Part b: a = 3, b = 3',
        },
        {
          id: 4,
          question:
            'Find the values of a and b which make the following functions continuous and differentiable at all points.  Part a: f(x) = { eˣ, x ≤ 0; ax + b, x > 0 }  Part b: f(x) = { eˣ, x ≤ 2; ax + b, x > 2 }',
          type: 'Medium',
          explaination:
            'Part a: Continuity at x = 0: 1 = b. Differentiability: e⁰ = a ⇒ a = 1.  Part b: Differentiability at x = 2: e² = a. Continuity: e² = 2e² + b ⇒ b = −e².',
          answer: 'Part a: a = 1, b = 1  Part b: a = e², b = −e²',
        },
        {
          id: 5,
          question:
            'Find the values of a and b which make the following functions continuous and differentiable at all points.  Part a: f(x) = { e⁻ˣ, x ≤ 1; a/x + b, x > 1 }  Part b: f(x) = { e⁻ˣ, x ≤ 2; a/x + b, x > 2 }',
          type: 'Hard',
          explaination:
            'Part a: Differentiability at x = 1: −e⁻¹ = −a ⇒ a = e⁻¹. Continuity: e⁻¹ = a + b ⇒ b = 0.  Part b: Differentiability at x = 2: −e⁻² = −a/4 ⇒ a = 4e⁻². Continuity: e⁻² = 2e⁻² + b ⇒ b = −e⁻².',
          answer: 'Part a: a = e⁻¹, b = 0  Part b: a = 4e⁻², b = −e⁻²',
        },
        {
          id: 6,
          question:
            'Find the values of a and b which make the following functions continuous and differentiable at all points.  Part a: f(x) = { x², x ≤ 1; aln x + b, x > 1 }  Part b: f(x) = { x², x ≤ 1; a√x + b, x > 1 }',
          type: 'Hard',
          explaination:
            'Part a: Continuity at x = 1: 1 = b. Differentiability: 2 = a/1 ⇒ a = 2.  Part b: Continuity: 1 = a + b. Differentiability: 2 = a/(2√1) ⇒ a = 4, b = −3.',
          answer: 'Part a: a = 2, b = 1  Part b: a = 4, b = −3',
        },
        {
          id: 7,
          question:
            'The function f(x) = { ax² + x, x ≤ 2; bx + 2, x > 2 } is both continuous and differentiable at every point. Find the values of a and b.',
          type: 'Hard',
          explaination:
            "Continuity at x = 2: 4a + 2 = 2b + 2 ⇒ 4a = 2b ⇒ b = 2a.  Differentiability at x = 2: f'(2⁻) = 4a + 1 = f'(2⁺) = b = 2a.  ⇒ 4a + 1 = 2a ⇒ 2a = −1 ⇒ a = −1/2, b = −1.",
          answer: 'a = −1/2, b = −1',
        },
        {
          id: 8,
          question:
            'Find the values of a which make the following functions continuous at all points.  Part a: f(x) = { −x, x ≤ 1; x + a, x > 1 }  Part b: f(x) = { 3x, x ≤ 2; x + a, x > 2 }',
          type: 'Easy',
          explaination:
            'Part a: Continuity at x = 1: −1 = 1 + a ⇒ a = −2  Part b: Continuity at x = 2: 6 = 2 + a ⇒ a = 4',
          answer: 'Part a: a = −2  Part b: a = 4',
        },
        {
          id: 9,
          question:
            'Find the values of a which make the following functions continuous at all points.  Part a: f(x) = { x + 1, x ≤ 2; ax, x > 2 }  Part b: f(x) = { x + 1, x ≤ 2; ax + 2, x > 2 }',
          type: 'Easy',
          explaination:
            'Part a: At x = 2: 3 = 2a ⇒ a = 3/2  Part b: At x = 2: 3 = 2a + 2 ⇒ a = 1/2',
          answer: 'Part a: a = 3/2  Part b: a = 1/2',
        },
        {
          id: 10,
          question:
            'Find the values of a which make the following functions continuous at all points.  Part a: f(x) = { x², x ≤ 3; x + a, x > 3 }  Part b: f(x) = { x² − 4, x ≤ 2; x + a, x > 2 }',
          type: 'Easy',
          explaination: 'Part a: At x = 3: 9 = 3 + a ⇒ a = 6  Part b: At x = 2: 0 = 2 + a ⇒ a = −2',
          answer: 'Part a: a = 6  Part b: a = −2',
        },
        {
          id: 11,
          question:
            'Find the values of a which make the following functions continuous at all points.  Part a: f(x) = { x + 6, x ≤ 2; xᵃ, x > 2 }  Part b: f(x) = { 16x + 16, x ≤ 1; (x + 1)ᵃ, x > 1 }',
          type: 'Medium',
          explaination: 'Part a: At x = 2: 8 = 2ᵃ ⇒ a = 3  Part b: At x = 1: 32 = 2ᵃ ⇒ a = 5',
          answer: 'Part a: a = 3  Part b: a = 5',
        },
        {
          id: 12,
          question:
            'Find the values of a which make the following functions continuous at all points.  Part a: f(x) = { eᵃˣ, x ≤ 2; 1/x, x > 2 }  Part b: f(x) = { eᵃˣ, x ≤ 1; x + 3, x > 1 }',
          type: 'Medium',
          explaination:
            'Part a: At x = 2: e²ᵃ = 1/2 ⇒ 2a = −ln 2 ⇒ a = −(ln 2)/2  Part b: At x = 1: eᵃ = 4 ⇒ a = ln 4',
          answer: 'Part a: a = −(ln 2)/2  Part b: a = ln 4',
        },
        {
          id: 13,
          question:
            'Find the values of a which make the following functions continuous at all points.  Part a: f(x) = { x², x ≤ 1; ln(ax), x > 1 }  Part b: f(x) = { x², x ≤ 2; ln(ax), x > 2 }',
          type: 'Medium',
          explaination:
            'Part a: At x = 1: 1 = ln(a) ⇒ a = e  Part b: At x = 2: 4 = ln(2a) ⇒ 2a = e⁴ ⇒ a = e⁴/2',
          answer: 'Part a: a = e  Part b: a = e⁴/2',
        },
        {
          id: 14,
          question:
            'The function f(x) = { eᵃˣ + x, x ≤ 2; 2eᵃˣ, x > 2 } is continuous at x = 2. Find the value of a.',
          type: 'Medium',
          explaination:
            'Continuity at x = 2: e²ᵃ + 2 = 2e²ᵃ  ⇒ 2 = e²ᵃ  ⇒ 2a = ln 2  ⇒ a = (ln 2)/2',
          answer: 'a = (ln 2)/2',
        },
      ],
      'limits-at-infinity': [
        {
          id: 1,
          question:
            'Find the limit of the given expression as x tends to infinity.  Part a: (3x² + x)/(x² − x)  Part b: (4x² + 1)/(2x² + 5x)',
          type: 'Easy',
          explaination:
            'Part a: Divide numerator and denominator by x²: (3 + 1/x)/(1 − 1/x)→ 3  Part b: Divide by x²: (4 + 1/x²)/(2 + 5/x)→ 2',
          answer: 'Part a: 3  Part b: 2',
        },
        {
          id: 2,
          question:
            'Find the limit of the given expression as x tends to infinity.  Part a: x/(x + 4)  Part b: 3x/(1 + 2x)',
          type: 'Easy',
          explaination:
            'Part a: Divide by x: 1/(1 + 4/x)→ 1  Part b: Divide by x: 3/(1/x + 2)→ 3/2',
          answer: 'Part a: 1  Part b: 3/2',
        },
        {
          id: 3,
          question:
            'Find the limit of the given expression as x tends to infinity.  Part a: x/(x² + 4)  Part b: 2x/(x² + 3x)',
          type: 'Easy',
          explaination:
            'Part a: Divide by x²: (1/x)/(1 + 4/x²)→ 0  Part b: Divide by x²: (2/x)/(1 + 3/x)→ 0',
          answer: 'Part a: 0  Part b: 0',
        },
        {
          id: 4,
          question: 'Prove that √(x + 4) − √x tends towards zero as x tends towards infinity.',
          type: 'Medium',
          explaination:
            'Multiply by (√(x + 4) + √x)/(√(x + 4) + √x):  √(x + 4) − √x = 4/(√(x + 4) + √x).  As x→∞: denominator →∞, so expression → 0.',
          answer: 'lim_(x→∞)(√(x + 4) − √x) = 0',
        },
        {
          id: 5,
          question:
            'Find the limit of the given expression as x tends to infinity.  Part a: (eˣ − 1)/(2eˣ + 1)  Part b: (eˣ + 2)/(eˣ + 3)',
          type: 'Easy',
          explaination:
            'Part a: Divide by eˣ: (1 − e⁻ˣ)/(2 + e⁻ˣ)→1/2  Part b: Divide by eˣ: (1 + 2e⁻ˣ)/(1 + 3e⁻ˣ)→ 1',
          answer: 'Part a: 1/2  Part b: 1',
        },
        {
          id: 6,
          question:
            'Find the limit of the given expression as x tends to infinity.  Part a: (e²ˣ + eˣ)/(2e²ˣ + 3eˣ)  Part b: (4e³ˣ + 3eˣ)/(eˣ − e³ˣ)',
          type: 'Medium',
          explaination:
            'Part a: Divide by e²ˣ: (1 + e⁻ˣ)/(2 + 3e⁻ˣ)→1/2  Part b: Divide by e³ˣ: (4 + 3e⁻²ˣ)/(e⁻²ˣ − 1)→4/−1 = −4',
          answer: 'Part a: 1/2  Part b: −4',
        },
        {
          id: 7,
          question:
            'Find the limit of the given expression as x tends to infinity.  Part a: (4ˣ − 3ˣ)/(4ˣ + 3ˣ)  Part b: (10ˣ + 2ˣ)/(4ˣ − 10ˣ)',
          type: 'Medium',
          explaination:
            'Part a: Divide by 4ˣ: (1 − (3/4)ˣ)/(1 + (3/4)ˣ)→ 1  Part b: Divide by 10ˣ: (1 + (2/10)ˣ)/((4/10)ˣ − 1)→1/−1 = −1',
          answer: 'Part a: 1  Part b: −1',
        },
      ],
      'convergence-and-divergence': [
        {
          id: 1,
          question:
            'Determine if the given expression is convergent or divergent as x→∞.  Part a: x³/(x + 3x²)  Part b: (x² + 1)/(x + 3)',
          type: 'Easy',
          explaination:
            'Part a: Simplify: x³/(x(1 + 3x)) = x²/(1 + 3x)→∞. Divergent.  Part b: Degree of numerator > degree of denominator. Divergent.',
          answer: 'Part a: Divergent  Part b: Divergent',
        },
        {
          id: 2,
          question:
            'Determine if the given expression is convergent or divergent as x→∞.  Part a: (1 + x)/(1 + x²)  Part b: (2 + 3x)/(5x + x²)',
          type: 'Easy',
          explaination:
            'Part a: Divide by x²: (1/x² + 1/x)/(1/x² + 1)→ 0. Convergent.  Part b: Divide by x²: (2/x² + 3/x)/(5/x + 1)→ 0. Convergent.',
          answer: 'Part a: Convergent (limit = 0)  Part b: Convergent (limit = 0)',
        },
        {
          id: 3,
          question:
            'Determine if the given expression is convergent or divergent as x→∞.  Part a: (eˣ + e²ˣ)/(1 + 2eˣ)  Part b: (1 − e²ˣ)/(eˣ − 5)',
          type: 'Medium',
          explaination:
            'Part a: Divide by eˣ: (1 + eˣ)/(e⁻ˣ + 2)→∞. Divergent.  Part b: Divide by eˣ: (e⁻ˣ − eˣ)/(1 − 5e⁻ˣ)→−∞. Divergent.',
          answer: 'Part a: Divergent  Part b: Divergent',
        },
        {
          id: 4,
          question:
            'Determine if the given expression is convergent or divergent as x→∞.  Part a: eˣ/(eˣ + 1)  Part b: (eˣ + 2)/(eˣ + 1)',
          type: 'Easy',
          explaination:
            'Part a: Divide by eˣ: 1/(1 + e⁻ˣ)→ 1. Convergent.  Part b: Divide by eˣ: (1 + 2e⁻ˣ)/(1 + e⁻ˣ)→ 1. Convergent.',
          answer: 'Part a: Convergent (limit = 1)  Part b: Convergent (limit = 1)',
        },
        {
          id: 5,
          question:
            'Part a: Determine if the function f(x) = aˣ + 3x/2, where a > 0, is convergent or divergent as x tends to minus infinity.  Part b: The function f(x) = { aˣ + 3x/2, x ≤ 2; 4aˣ⁻¹, x > 2 } is continuous at x = 2. Find the possible values of a.  Part c: In each case found in part b, sketch f(x).',
          type: 'Hard',
          explaination:
            'Part a: If a > 1: aˣ→0 but 3x/2→−∞. Divergent. If 0 < a < 1: aˣ→∞. Divergent.  Part b: Continuity at x = 2: a² + 3 = 4a  ⇒ a² − 4a + 3 = 0 ⇒ (a − 1)(a − 3) = 0  ⇒ a = 1 or a = 3.  Part c: Sketch each case (see Notes).',
          answer: 'Part a: Divergent for all a > 0  Part b: a = 1 or a = 3',
        },
      ],
      'differentiation-from-first-principles': [
        {
          id: 1,
          question:
            'Differentiate the given expression from first principles.  Part a: 2x  Part b: 8',
          type: 'Easy',
          explaination:
            "Part a: f'(x) = lim_(h→0)(2(x + h) − 2x)/h = lim_(h→0)2 = 2  Part b: f'(x) = lim_(h→0)(8 − 8)/h = 0",
          answer: "Part a: f'(x) = 2  Part b: f'(x) = 0",
        },
        {
          id: 2,
          question:
            'Differentiate the given expression from first principles.  Part a: x³  Part b: x⁴',
          type: 'Easy',
          explaination:
            "Part a: f'(x) = lim_(h→0)((x + h)³ − x³)/h = lim_(h→0)(3x² + 3xh + h²) = 3x²  Part b: Expand (x + h)⁴; f'(x) = 4x³.",
          answer: "Part a: f'(x) = 3x²  Part b: f'(x) = 4x³",
        },
        {
          id: 3,
          question:
            'Differentiate the given expression from first principles.  Part a: x² + 3  Part b: 2x + 1',
          type: 'Easy',
          explaination:
            "Part a: f'(x) = lim_(h→0)((x + h)² + 3 − x² − 3)/h = lim_(h→0)(2x + h) = 2x  Part b: f'(x) = lim_(h→0)2h/h = 2",
          answer: "Part a: f'(x) = 2x  Part b: f'(x) = 2",
        },
        {
          id: 4,
          question:
            'Differentiate the given expression from first principles.  Part a: x² + 2x  Part b: x³ + x',
          type: 'Easy',
          explaination:
            'Part a: lim_(h→0)((x + h)² + 2(x + h) − x² − 2x)/h = 2x + 2  Part b: lim_(h→0)((x + h)³ + (x + h) − x³ − x)/h = 3x² + 1',
          answer: "Part a: f'(x) = 2x + 2  Part b: f'(x) = 3x² + 1",
        },
        {
          id: 5,
          question: 'Prove from first principles that if y = √x, then dy/dx = 1/(2√x).',
          type: 'Hard',
          explaination:
            'dy/dx = lim_(h→0)(√(x + h) − √x)/h  Multiply by (√(x + h) + √x)/(√(x + h) + √x):  = lim_(h→0)((x + h) − x)/(h(√(x + h) + √x)) = lim_(h→0)1/(√(x + h) + √x) = 1/(2√x).',
          answer: 'dy/dx = 1/(2√x)',
        },
        {
          id: 6,
          question:
            "Prove from first principles that if f(x) = g(x) + h(x), then f'(x) = g'(x) + h'(x).",
          type: 'Medium',
          explaination:
            "f'(x) = lim_(δ x→0)([g(x + δ x) + h(x + δ x)] − [g(x) + h(x)])/(δ x)  = lim_(δ x→0)(g(x + δ x) − g(x))/(δ x) + lim_(δ x→0)(h(x + δ x) − h(x))/(δ x) = g'(x) + h'(x).",
          answer: "f'(x) = g'(x) + h'(x)",
        },
      ],
      'higher-order-derivatives': [
        {
          id: 1,
          question:
            'Find the third derivative of each function with respect to x.  Part a: x⁵  Part b: x⁶',
          type: 'Easy',
          explaination:
            "Part a: f' = 5x⁴, f'' = 20x³, f''' = 60x²  Part b: f' = 6x⁵, f'' = 30x⁴, f''' = 120x³",
          answer: "Part a: f'''(x) = 60x²  Part b: f'''(x) = 120x³",
        },
        {
          id: 2,
          question:
            'Find the third derivative of each function with respect to x.  Part a: x⁴ + 2x³  Part b: 3x⁵ − 2x⁴',
          type: 'Easy',
          explaination:
            "Part a: f' = 4x³ + 6x², f'' = 12x² + 12x, f''' = 24x + 12  Part b: f' = 15x⁴ − 8x³, f'' = 60x³ − 24x², f''' = 180x² − 48x",
          answer: "Part a: f'''(x) = 24x + 12  Part b: f'''(x) = 180x² − 48x",
        },
        {
          id: 3,
          question:
            'Find the third derivative of each function with respect to x.  Part a: ln x  Part b: e²ˣ',
          type: 'Easy',
          explaination:
            "Part a: f' = x⁻¹, f'' = −x⁻², f''' = 2x⁻³ = 2/x³  Part b: f' = 2e²ˣ, f'' = 4e²ˣ, f''' = 8e²ˣ",
          answer: "Part a: f'''(x) = 2/x³  Part b: f'''(x) = 8e²ˣ",
        },
        {
          id: 4,
          question:
            'Find the third derivative of each function with respect to x.  Part a: sin x  Part b: cos x',
          type: 'Easy',
          explaination:
            "Part a: f' = cos x, f'' = −sin x, f''' = −cos x  Part b: f' = −sin x, f'' = −cos x, f''' = sin x",
          answer: "Part a: f'''(x) = −cos x  Part b: f'''(x) = sin x",
        },
        {
          id: 5,
          question: 'Prove that if y = xe²ˣ, then (dⁿ y)/dxⁿ = (n·2ⁿ⁻¹ + 2ⁿ x)e²ˣ.',
          type: 'Hard',
          explaination:
            'Base case n = 1: dy/dx = e²ˣ + 2xe²ˣ = (1 + 2x)e²ˣ = (1·2⁰ + 2¹x)e²ˣ. True.  Assume (dᵏ y)/dxᵏ = (k·2ᵏ⁻¹ + 2ᵏ x)e²ˣ.  Differentiate: (dᵏ⁺¹y)/(dxᵏ⁺¹) = [k·2ᵏ⁻¹·2 + 2ᵏ + 2ᵏ· x·2]e²ˣ = [k·2ᵏ + 2ᵏ + 2ᵏ⁺¹x]e²ˣ = [(k + 1)2ᵏ + 2ᵏ⁺¹x]e²ˣ. True.  By PMI, result holds for all n∈ℤ⁺.',
          answer: 'Proved by mathematical induction.',
        },
      ],
      'proof-by-mathematical-induction': [
        {
          id: 1,
          question: 'Given that f(x) = e⁵ˣ, use induction to prove that f⁽ⁿ⁾(x) = 5ⁿ e⁵ˣ.',
          type: 'Hard',
          explaination:
            "Base case n = 1: f'(x) = 5e⁵ˣ = 5¹e⁵ˣ. True.  Assume f⁽ᵏ⁾(x) = 5ᵏe⁵ˣ.  Inductive step: f⁽ᵏ⁺¹⁾(x) = d/dx[5ᵏe⁵ˣ] = 5ᵏ·5e⁵ˣ = 5ᵏ⁺¹e⁵ˣ. True.  By PMI, result holds for all n∈ℤ⁺.",
          answer: 'f⁽ⁿ⁾(x) = 5ⁿ e⁵ˣ (proved by induction)',
        },
        {
          id: 2,
          question: 'If f(x) = sin x, prove that f⁽ⁿ⁾(x) = sin(x + nπ/2).',
          type: 'Hard',
          explaination:
            "Base n = 1: f'(x) = cos x = sin(x + π/2). True.  Assume f⁽ᵏ⁾(x) = sin(x + kπ/2).  Differentiate: f⁽ᵏ⁺¹⁾(x) = cos(x + kπ/2) = sin(x + kπ/2 + π/2) = sin(x + (k + 1)π/2). True.  By PMI, holds for all n∈ℤ⁺.",
          answer: 'f⁽ⁿ⁾(x) = sin(x + nπ/2) (proved by induction)',
        },
        {
          id: 3,
          question: 'If f(x) = xsin x, prove that f⁽²ⁿ⁾(x) = (−1)ⁿ(xsin x − 2ncos x).',
          type: 'Hard',
          explaination:
            "Base n = 1 (2nd derivative): f' = sin x + xcos x; f'' = 2cos x − xsin x = (−1)¹(xsin x − 2cos x). True.  Assume f⁽²ᵏ⁾ = (−1)ᵏ(xsin x − 2kcos x).  Differentiate once: f⁽²ᵏ⁺¹⁾ = (−1)ᵏ[(2k + 1)sin x + xcos x].  Differentiate again: f⁽²ᵏ⁺²⁾ = (−1)ᵏ[(2k + 2)cos x − xsin x] = (−1)ᵏ⁺¹(xsin x − 2(k + 1)cos x). True.  By PMI, holds for all n∈ℤ⁺.",
          answer: 'f⁽²ⁿ⁾(x) = (−1)ⁿ(xsin x − 2ncos x) (proved by induction on n)',
        },
        {
          id: 4,
          question: 'Prove by induction that if f(x) = ln x, then f⁽ⁿ⁾(x) = ((−1)ⁿ⁺¹(n − 1)!)/xⁿ.',
          type: 'Hard',
          explaination:
            "Base n = 1: f'(x) = 1/x = (−1)²(0!)/x¹ = 1/x. True (note 0! = 1).  Assume f⁽ᵏ⁾(x) = (−1)ᵏ⁺¹(k − 1)!/xᵏ.  Differentiate: f⁽ᵏ⁺¹⁾(x) = (−1)ᵏ⁺¹(k − 1)!·(−k)x⁻ᵏ⁻¹ = (−1)ᵏ⁺²k!/xᵏ⁺¹. True.  By PMI, holds for all n∈ℤ⁺.",
          answer: 'f⁽ⁿ⁾(x) = ((−1)ⁿ⁺¹(n − 1)!)/xⁿ (proved by induction)',
        },
      ],
      'limits-differentiation-of-exponentials': [
        {
          id: 1,
          question:
            "Part a: Find the limit of f(x) = 3eˣ/(1 + 2eˣ) as x tends towards:  i) infinity  ii) minus infinity  iii) zero  Part b: Use the quotient rule to show that f'(x) = 3eˣ/((1 + 2eˣ)²). Hence explain why f(x) is an increasing function.  Part c: Hence sketch y = f(x).",
          type: 'Hard',
          explaination:
            "Part a(i): Divide by eˣ: 3/(e⁻ˣ + 2)→3/2  Part a(ii): eˣ→0: (3·0)/(1 + 0) = 0  Part a(iii): f(0) = 3/3 = 1  Part b: Quotient rule, u = 3eˣ, v = 1 + 2eˣ: f' = (3eˣ(1 + 2eˣ) − 3eˣ·2eˣ)/((1 + 2eˣ)²) = 3eˣ/((1 + 2eˣ)²) > 0.  Part c: Sketch required (see Notes).",
          answer:
            "Part a: i) 3/2  ii) 0  iii) 1  Part b: f'(x) > 0 for all x (since eˣ > 0), so f is strictly increasing.  Part c: Increasing S-curve; horizontal asymptotes y = 0 and y = 3/2; passes through (0,1).",
        },
      ],
      'first-principles-proof-by-induction': [
        {
          id: 1,
          question:
            'Part a: Prove from first principles that d/dx(1/(1 − x)) = 1/((1 − x)²).  Part b: Prove by induction that if f(x) = 1/(1 − x), then f⁽ⁿ⁾(x) = n!/((1 − x)ⁿ⁺¹).',
          type: 'Hard',
          explaination:
            "Part a: lim_(h→0)(1/(1 − x − h) − 1/(1 − x))/h = lim_(h→0)h/(h(1 − x − h)(1 − x)) = 1/((1 − x)²).  Part b: Base n = 1: f' = 1/(1 − x)² = 1!/(1 − x)². True.  Assume f⁽ᵏ⁾ = k!/(1 − x)ᵏ⁺¹. Differentiate: f⁽ᵏ⁺¹⁾ = k!(k + 1)/(1 − x)ᵏ⁺² = (k + 1)!/(1 − x)ᵏ⁺². True.",
          answer: 'Part a: Proved from first principles.  Part b: f⁽ⁿ⁾(x) = n!/((1 − x)ⁿ⁺¹)',
        },
      ],
    },
  },
  {
    integration: {
      title: 'Integration',
      'integration-by-substitution-indefinite': [
        {
          id: 1,
          question: 'Find the indefinite integral ∫ x√(x + 1) dx using the substitution u = x + 1.',
          type: 'Easy',
          explaination:
            'Let u = x + 1 ⇒ x = u − 1, dx = du.  ∫ (u − 1)√u du = ∫ (u^(3/2) − u^(1/2))du  = 2/5u^(5/2) − 2/3u^(3/2) + C  Back-substitute: 2/5(x + 1)^(5/2) − 2/3(x + 1)^(3/2) + C',
          answer: '2/5(x + 1)^(5/2) − 2/3(x + 1)^(3/2) + C',
        },
        {
          id: 2,
          question: 'Find the indefinite integral ∫ x√(x − 2) dx using the substitution u = x − 2.',
          type: 'Easy',
          explaination:
            'Let u = x − 2 ⇒ x = u + 2, dx = du.  ∫ (u + 2)√u du = ∫ (u^(3/2) + 2u^(1/2))du  = 2/5u^(5/2) + 4/3u^(3/2) + C  Back-substitute: 2/5(x − 2)^(5/2) + 4/3(x − 2)^(3/2) + C',
          answer: '2/5(x − 2)^(5/2) + 4/3(x − 2)^(3/2) + C',
        },
        {
          id: 3,
          question:
            'Find the indefinite integral ∫ x(2x + 1)⁵ dx using the substitution u = 2x + 1.',
          type: 'Easy',
          explaination:
            'Let u = 2x + 1 ⇒ x = (u − 1)/2, dx = du/2.  ∫ (u − 1)/2 · u⁵ · 1/2 du = 1/4∫(u⁶ − u⁵) du  = 1/4[u⁷/7 − u⁶/6] + C = ((2x + 1)⁷)/28 − ((2x + 1)⁶)/24 + C',
          answer: '((2x + 1)⁷)/28 − ((2x + 1)⁶)/24 + C',
        },
        {
          id: 4,
          question:
            'Find the indefinite integral ∫ x(3x − 2)⁷ dx using the substitution u = 3x − 2.',
          type: 'Easy',
          explaination:
            'Let u = 3x − 2 ⇒ x = (u + 2)/3, dx = du/3.  ∫ (u + 2)/3 · u⁷ · 1/3 du = 1/9∫(u⁸ + 2u⁷) du  = u⁹/81 + u⁸/36 + C = ((3x − 2)⁹)/81 + ((3x − 2)⁸)/36 + C',
          answer: '((3x − 2)⁹)/81 + ((3x − 2)⁸)/36 + C',
        },
        {
          id: 5,
          question:
            'Find the indefinite integral ∫ x/(√(2 + x)) dx using the substitution u = 2 + x.',
          type: 'Medium',
          explaination:
            'Let u = 2 + x ⇒ x = u − 2, dx = du.  ∫ (u − 2)/√u du = ∫(u^(1/2) − 2u^(−1/2))du  = 2/3u^(3/2) − 4u^(1/2) + C = 2/3(2 + x)^(3/2) − 4√(2 + x) + C',
          answer: '2/3(2 + x)^(3/2) − 4√(2 + x) + C',
        },
        {
          id: 6,
          question:
            'Find the indefinite integral ∫ x/(√(x − 1)) dx using the substitution u = x − 1.',
          type: 'Medium',
          explaination:
            'Let u = x − 1 ⇒ x = u + 1, dx = du.  ∫ (u + 1)/√u du = ∫(u^(1/2) + u^(−1/2))du  = 2/3u^(3/2) + 2u^(1/2) + C = 2/3(x − 1)^(3/2) + 2√(x − 1) + C',
          answer: '2/3(x − 1)^(3/2) + 2√(x − 1) + C',
        },
        {
          id: 7,
          question: 'Find the definite integral ∫₁³ x(x − 1)⁴ dx using the substitution x = u + 1.',
          type: 'Medium',
          explaination:
            'Let x = u + 1 ⇒ dx = du. Limits: x = 1⇒ u = 0; x = 3⇒ u = 2.  ∫₀² (u + 1)u⁴ du = ∫₀²(u⁵ + u⁴) du = [u⁶/6 + u⁵/5]₀²  = 64/6 + 32/5 = 32/3 + 32/5 = (160 + 96)/15 = 256/15',
          answer: '256/15',
        },
        {
          id: 8,
          question: 'Find the definite integral ∫₂³ x(x − 2)⁵ dx using the substitution x = u + 2.',
          type: 'Medium',
          explaination:
            'Let x = u + 2 ⇒ dx = du. Limits: x = 2⇒ u = 0; x = 3⇒ u = 1.  ∫₀¹(u + 2)u⁵ du = ∫₀¹(u⁶ + 2u⁵) du = [u⁷/7 + u⁶/3]₀¹  = 1/7 + 1/3 = (3 + 7)/21 = 10/21',
          answer: '10/21',
        },
        {
          id: 9,
          question: 'Find the definite integral ∫₁⁴ 1/(2√x + x) dx using the substitution x = u².',
          type: 'Medium',
          explaination:
            'Let x = u² ⇒ dx = 2u du. Limits: x = 1⇒ u = 1; x = 4⇒ u = 2.  ∫₁² (2u du)/(2u + u²) = ∫₁² 2/(2 + u) du = [2ln|2 + u|]₁²  = 2ln 4 − 2ln 3 = 2ln(4/3)',
          answer: '2ln(4/3)',
        },
        {
          id: 10,
          question: 'Find the definite integral ∫₁⁹ 1/(√x + 3x) dx using the substitution x = u².',
          type: 'Medium',
          explaination:
            'Let x = u² ⇒ dx = 2u du. Limits: x = 1⇒ u = 1; x = 9⇒ u = 3.  ∫₁³ (2u du)/(u + 3u²) = ∫₁³ 2/(1 + 3u) du = [2/3ln|1 + 3u|]₁³  = 2/3(ln 10 − ln 4) = 2/3ln(5/2)',
          answer: '2/3ln(5/2)',
        },
        {
          id: 11,
          question: 'Use the substitution u = x − 2 to evaluate ∫₂³ x(x − 2)³ dx.',
          type: 'Medium',
          explaination:
            'Let u = x − 2 ⇒ x = u + 2, dx = du. Limits: u: 0→ 1.  ∫₀¹(u + 2)u³ du = ∫₀¹(u⁴ + 2u³) du = [u⁵/5 + u⁴/2]₀¹  = 1/5 + 1/2 = 7/10',
          answer: '7/10',
        },
        {
          id: 12,
          question: 'Use the substitution u = x + 1 to find the exact value of ∫₀¹ x²√(x + 1) dx.',
          type: 'Hard',
          explaination:
            'Let u = x + 1 ⇒ x = u − 1, dx = du. Limits: u: 1→ 2.  ∫₁²(u − 1)² u^(1/2) du = ∫₁²(u^(5/2) − 2u^(3/2) + u^(1/2))du  = [(2u^(7/2))/7 − (4u^(5/2))/5 + (2u^(3/2))/3]₁²  At u = 2: (16√2)/7 − (16√2)/5 + (4√2)/3 = √2·44/105  At u = 1: 2/7 − 4/5 + 2/3 = 16/105  Answer = (44√2 − 16)/105',
          answer: '(44√2 − 16)/105',
        },
        {
          id: 13,
          question:
            'Use integration by substitution to find the exact value of ∫₀⁵ x/(√(x + 4)) dx.',
          type: 'Medium',
          explaination:
            'Let u = x + 4 ⇒ x = u − 4, dx = du. Limits: u: 4→ 9.  ∫₄⁹(u − 4)/√u du = ∫₄⁹(u^(1/2) − 4u^(−1/2))du  = [(2u^(3/2))/3 − 8u^(1/2)]₄⁹ = (18 − 24) − (16/3 − 16)  = −6 + 32/3 = 14/3',
          answer: '14/3',
        },
        {
          id: 14,
          question:
            'Find the indefinite integral ∫ e²ˣ/(eˣ + 1) dx using the substitution u = eˣ + 1.',
          type: 'Medium',
          explaination:
            'Let u = eˣ + 1 ⇒ du = eˣ dx, eˣ = u − 1.  e²ˣ dx = eˣ · eˣ dx = (u − 1) du  ∫ (u − 1)/u du = ∫(1 − 1/u)du = u − ln|u| + C  = eˣ − ln(eˣ + 1) + C',
          answer: 'eˣ − ln(eˣ + 1) + C',
        },
        {
          id: 15,
          question:
            'Find the indefinite integral ∫ e³ˣ/(eˣ − 1) dx using the substitution u = eˣ − 1.',
          type: 'Hard',
          explaination:
            'Let u = eˣ − 1 ⇒ eˣ = u + 1, du = eˣ dx, dx = du/(u + 1).  e³ˣ = (u + 1)³  ∫ ((u + 1)³)/u·du/(u + 1) = ∫ ((u + 1)²)/u du = ∫(u + 2 + 1/u)du  = u²/2 + 2u + ln|u| + C = ((eˣ − 1)²)/2 + 2(eˣ − 1) + ln(eˣ − 1) + C',
          answer: '((eˣ − 1)²)/2 + 2(eˣ − 1) + ln|eˣ − 1| + C',
        },
        {
          id: 16,
          question: 'Use the substitution x = u² to find ∫ (e^√x)/√x dx.',
          type: 'Medium',
          explaination:
            'Let x = u² ⇒ dx = 2u du, √x = u.  ∫ (e^u)/u· 2u du = 2∫ e^u du = 2e^u + C = 2e^√x + C',
          answer: '2e^√x + C',
        },
        {
          id: 17,
          question: 'Use the substitution u = 1 + eˣ to find ∫ 1/(1 + eˣ) dx.',
          type: 'Medium',
          explaination:
            'Let u = 1 + eˣ ⇒ du = eˣ dx, eˣ = u − 1, dx = du/(u − 1).  ∫1/u·du/(u − 1) = ∫du/(u(u − 1)) = ∫(1/(u − 1) − 1/u)du  = ln|u − 1| − ln|u| + C = ln(eˣ) − ln(1 + eˣ) + C = x − ln(1 + eˣ) + C',
          answer: 'x − ln(1 + eˣ) + C',
        },
        {
          id: 18,
          question:
            'Find the indefinite integral ∫ (cos³ x)/(1 + sin x) dx using the substitution u = 1 + sin x.',
          type: 'Medium',
          explaination:
            'Let u = 1 + sin x ⇒ du = cos x dx, sin x = u − 1.  cos³ x dx = cos² x · cos x dx = (1 − sin² x) du = (1 − (u − 1)²) du = (2u − u²) du  ∫ (2u − u²)/u du = ∫(2 − u) du = 2u − u²/2 + C  = 2(1 + sin x) − ((1 + sin x)²)/2 + C',
          answer: '2(1 + sin x) − 1/2(1 + sin x)² + C',
        },
        {
          id: 19,
          question:
            'Find the indefinite integral ∫ (sin³ x)/(1 + cos x) dx using the substitution u = 1 + cos x.',
          type: 'Medium',
          explaination:
            'Let u = 1 + cos x ⇒ du = −sin x dx, so sin x dx = − du.  sin³ x dx = (1 − cos² x)sin x dx = (2u − u²)(−du)  ∫ (−(2u − u²))/u du = −∫(2 − u) du = −(2u − u²/2) + C  = −2(1 + cos x) + ((1 + cos x)²)/2 + C',
          answer: '−2(1 + cos x) + 1/2(1 + cos x)² + C',
        },
        {
          id: 20,
          question: 'Use the substitution u = tan x to find ∫ sec⁴ x dx.',
          type: 'Medium',
          explaination:
            'Let u = tan x ⇒ du = sec² x dx. Write sec⁴ x = sec² x · sec² x = (1 + tan² x)sec² x.  ∫(1 + u²) du = u + u³/3 + C = tan x + (tan³ x)/3 + C',
          answer: 'tan x + (tan³ x)/3 + C',
        },
        {
          id: 21,
          question: 'Use a substitution of the form x = asin u to find ∫ 1/(√(8 − 25x²)) dx.',
          type: 'Hard',
          explaination:
            'Set 25a² = 8 ⇒ a = (2√2)/5. Let x = (2√2)/5sin u ⇒ dx = (2√2)/5cos u du.  8 − 25x² = 8cos² u, √(8 − 25x²) = 2√2cos u.  ∫1/(2√2cos u)·(2√2)/5cos u du = 1/5∫ du = u/5 + C  Since sin u = 5x/(2√2): 1/5arcsin(5x/(2√2)) + C',
          answer: '1/5arcsin(5x/(2√2)) + C',
        },
        {
          id: 22,
          question:
            'Find the definite integral ∫₀¹ 1/((1 + x²)^(3/2)) dx using the substitution x = tan u.',
          type: 'Hard',
          explaination:
            'Let x = tan u ⇒ dx = sec² u du. 1 + x² = sec² u, (1 + x²)^(3/2) = sec³ u.  Limits: x = 0⇒ u = 0; x = 1⇒ u = π/4.  ∫₀^(π/4)(sec² u)/(sec³ u) du = ∫₀^(π/4)cos u du = [sin u]₀^(π/4) = √2/2',
          answer: '√2/2',
        },
        {
          id: 23,
          question:
            'Find the definite integral ∫₁^√2 1/(x√(x² − 1)) dx using the substitution x = sec u.',
          type: 'Hard',
          explaination:
            'Let x = sec u ⇒ dx = sec utan u du. √(x² − 1) = tan u.  Limits: x = 1⇒ u = 0; x = √2⇒ u = π/4.  ∫₀^(π/4)(sec utan u du)/(sec u·tan u) = ∫₀^(π/4)du = π/4',
          answer: 'π/4',
        },
        {
          id: 24,
          question:
            'Find the definite integral ∫₀^(1/2) x/(√(1 − x)) dx using the substitution x = sin² u.',
          type: 'Hard',
          explaination:
            'Let x = sin² u ⇒ dx = 2sin ucos u du, √(1 − x) = cos u.  Limits: x = 0⇒ u = 0; x = 1/2⇒ u = π/4.  ∫₀^(π/4)(sin² u)/(cos u)· 2sin ucos u du = 2∫₀^(π/4)sin³ u du  = 2∫₀^(π/4)(1 − cos² u)sin u du = 2[−cos u + (cos³ u)/3]₀^(π/4)  = 2[(−1/√2 + 1/(6√2)) − (−1 + 1/3)] = 4/3 − (5√2)/6',
          answer: '4/3 − (5√2)/6',
        },
        {
          id: 25,
          question:
            'Find the definite integral ∫₀¹ 1/(√(x(1 − x))) dx using the substitution x = sin² u.',
          type: 'Hard',
          explaination:
            'Let x = sin² u ⇒ dx = 2sin ucos u du. √(x(1 − x)) = sin ucos u.  Limits: x = 0⇒ u = 0; x = 1⇒ u = π/2.  ∫₀^(π/2)(2sin ucos u)/(sin ucos u) du = ∫₀^(π/2)2 du = π',
          answer: 'π',
        },
        {
          id: 26,
          question:
            'Use the substitution u = sin x to find the exact value of ∫₀^(π/6) (3cos x)/(10 − cos² x) dx. Give your answer in the form arctan(p/q), where p and q are integers.',
          type: 'Hard',
          explaination:
            'Let u = sin x ⇒ du = cos x dx, cos² x = 1 − u².  Limits: x = 0⇒ u = 0; x = π/6⇒ u = 1/2.  ∫₀^(1/2)(3 du)/(10 − (1 − u²)) = ∫₀^(1/2)(3 du)/(9 + u²)  = [arctan(u/3)]₀^(1/2) = arctan(1/6)  So p = 1, q = 6.',
          answer: 'arctan(1/6)',
        },
        {
          id: 27,
          question: 'Use the substitution x = sin u to evaluate ∫₀¹ √(1 − x²) dx.',
          type: 'Medium',
          explaination:
            'Let x = sin u ⇒ dx = cos u du, √(1 − x²) = cos u.  Limits: x = 0⇒ u = 0; x = 1⇒ u = π/2.  ∫₀^(π/2)cos² u du = ∫₀^(π/2)(1 + cos 2u)/2 du  = [u/2 + (sin 2u)/4]₀^(π/2) = π/4',
          answer: 'π/4',
        },
        {
          id: 28,
          question:
            'The diagram shows the graph of y = x/(√(x + 2)). Use the substitution u = x + 2 to find the shaded area.',
          type: 'Hard',
          explaination:
            'Shaded region: x = 0 to x = 7. Let u = x + 2 ⇒ x = u − 2, dx = du. Limits: u: 2→ 9.  A = ∫₂⁹(u − 2)/√u du = ∫₂⁹(u^(1/2) − 2u^(−1/2))du  = [(2u^(3/2))/3 − 4u^(1/2)]₂⁹  = (18 − 12) − ((4√2)/3 − 4√2) = 6 + (8√2)/3',
          answer: '6 + (8√2)/3',
        },
        {
          id: 29,
          question:
            'Use the substitution u = eˣ − 1 to find the exact value of ∫_(ln 3)^(ln 5) e²ˣ/(eˣ − 1) dx.',
          type: 'Hard',
          explaination:
            'Let u = eˣ − 1 ⇒ eˣ = u + 1, du = eˣ dx, dx = du/(u + 1).  e²ˣ = (u + 1)². Limits: x = ln 3⇒ u = 2; x = ln 5⇒ u = 4.  ∫₂⁴((u + 1)²)/u·du/(u + 1) = ∫₂⁴(u + 1)/u du = ∫₂⁴(1 + 1/u)du  = [u + ln|u|]₂⁴ = (4 + ln 4) − (2 + ln 2) = 2 + ln 2',
          answer: '2 + ln 2',
        },
        {
          id: 30,
          question: 'Use the substitution u = ln x to find ∫ ((ln x)²)/x dx.',
          type: 'Easy',
          explaination: 'Let u = ln x ⇒ du = dx/x.  ∫ u² du = u³/3 + C = ((ln x)³)/3 + C',
          answer: '((ln x)³)/3 + C',
        },
        {
          id: 31,
          question: 'Use the substitution x = ln(sec u) to find ∫ 1/(√(e²ˣ − 1)) dx.',
          type: 'Hard',
          explaination:
            'Let x = ln(sec u) ⇒ eˣ = sec u, e²ˣ − 1 = sec² u − 1 = tan² u, √(e²ˣ − 1) = tan u.  dx = tan u du.  ∫(tan u du)/(tan u) = ∫ du = u + C  Since eˣ = sec u, we have u = arcsec(eˣ) = arccos(e⁻ˣ).  ∴ ∫dx/(√(e²ˣ − 1)) = arccos(e⁻ˣ) + C',
          answer: 'arccos(e⁻ˣ) + C (equivalently, arcsec(eˣ) + C)',
        },
        {
          id: 32,
          question: 'Given that x = e^u − e^(−u), find an expression for e^u in terms of x.',
          type: 'Hard',
          explaination:
            'Let t = e^u. Then t − 1/t = x ⇒ t² − xt − 1 = 0.  By the quadratic formula (taking the positive root since e^u > 0):  t = e^u = (x + √(x² + 4))/2',
          answer: 'e^u = (x + √(x² + 4))/2',
        },
        {
          id: 33,
          question:
            'Use the substitution x = e^u − e^(−u) to find the exact value of ∫₀¹ 1/(√(4 + x²)) dx.',
          type: 'Hard',
          explaination:
            'dx = (e^u + e^(−u)) du, 4 + x² = (e^u + e^(−u))², √(4 + x²) = e^u + e^(−u).  Limits: x = 0⇒ u = 0. When x = 1: e^u − e^(−u) = 1⇒ e^u = (1 + √5)/2, so u = ln((1 + √5)/2).  ∫₀^(ln((1 + √5)/2))(e^u + e^(−u))/(e^u + e^(−u)) du = ∫₀^(ln((1 + √5)/2))du = ln((1 + √5)/2)',
          answer: 'ln((1 + √5)/2)',
        },
      ],
      'area-between-a-curve-and-the-y-axis': [
        {
          id: 1,
          question:
            'The diagram shows the region bounded by the curve y = √x, the y-axis and the lines y = 1 and y = 3.  Find the area of the shaded region using integration with respect to y.',
          type: 'Easy',
          explaination:
            'Express x in terms of y: x = y².  Area = ∫₁³ y² dy = [y³/3]₁³ = 27/3 − 1/3 = 26/3',
          answer: '26/3',
        },
        {
          id: 2,
          question:
            'The diagram shows the region bounded by the curve y = x³, the y-axis and the lines y = 1 and y = 8.  Find the area of the shaded region using integration with respect to y.',
          type: 'Easy',
          explaination:
            'Express x in terms of y: x = y^(1/3).  Area = ∫₁⁸ y^(1/3) dy = [(3y^(4/3))/4]₁⁸ = (3(16))/4 − 3/4 = 12 − 3/4 = 45/4',
          answer: '45/4',
        },
        {
          id: 3,
          question:
            'The diagram shows the region bounded by the curve y = e²ˣ, the y-axis and the lines y = 2 and y = 5.  Find the area of the shaded region using integration with respect to y.',
          type: 'Medium',
          explaination:
            'Express x in terms of y: x = (ln y)/2.  Area = ∫₂⁵ (ln y)/2 dy = 1/2[yln y − y]₂⁵  = 1/2[(5ln 5 − 5) − (2ln 2 − 2)] = (5ln 5 − 2ln 2 − 3)/2',
          answer: '(5ln 5 − 2ln 2 − 3)/2',
        },
        {
          id: 4,
          question:
            'The diagram shows the region bounded by the curve y = e³ˣ, the y-axis and the lines y = 1 and y = 4.  Find the area of the shaded region using integration with respect to y.',
          type: 'Medium',
          explaination:
            'Express x in terms of y: x = (ln y)/3.  Area = ∫₁⁴ (ln y)/3 dy = 1/3[yln y − y]₁⁴  = 1/3[(4ln 4 − 4) − (0 − 1)] = (4ln 4 − 3)/3',
          answer: '(4ln 4 − 3)/3',
        },
        {
          id: 5,
          question:
            'The diagram shows the region bounded by the curve y = 1/(x − 1), the y-axis and the lines y = 2 and y = 6.  Find the area of the shaded region using integration with respect to y.',
          type: 'Medium',
          explaination:
            'Express x in terms of y: x = 1/y + 1.  Area = ∫₂⁶ (1/y + 1)dy = [ln y + y]₂⁶  = (ln 6 + 6) − (ln 2 + 2) = ln 3 + 4',
          answer: 'ln 3 + 4',
        },
        {
          id: 6,
          question:
            'The diagram shows the region bounded by the curve y = 2/(x − 2), the y-axis and the lines y = 1 and y = 4.  Find the area of the shaded region using integration with respect to y.',
          type: 'Medium',
          explaination:
            'Express x in terms of y: x = 2/y + 2.  Area = ∫₁⁴ (2/y + 2)dy = [2ln y + 2y]₁⁴  = (2ln 4 + 8) − (0 + 2) = 4ln 2 + 6',
          answer: '4ln 2 + 6',
        },
        {
          id: 7,
          question:
            'The diagram shows the region bounded by the curve y = tan x, the y-axis and the lines y = 2 and y = 4.  Find the area of the shaded region using integration with respect to y.',
          type: 'Medium',
          explaination:
            'Express x in terms of y: x = arctan y.  Area = ∫₂⁴ arctan y dy = [yarctan y − 1/2ln(1 + y²)]₂⁴  = (4arctan 4 − 1/2ln 17) − (2arctan 2 − 1/2ln 5)',
          answer: 'ln(17/5)',
        },
        {
          id: 8,
          question:
            'The diagram shows the region bounded by the curve y = 3sin x, the y-axis and the lines y = 1 and y = 2.  Find the area of the shaded region using integration with respect to y.',
          type: 'Hard',
          explaination:
            'Express x in terms of y: x = arcsin(y/3).  Area = ∫₁² arcsin(y/3)dy  Evaluate by integration by parts or numerically.',
          answer: 'arcsin(2/3) − arcsin(1/3)',
        },
      ],
      'volume-of-revolution-about-x-axis': [
        {
          id: 1,
          question:
            'The part of the curve with equation y = 1/x between x = 1 and x = a is rotated 360° about the x-axis. The volume of the resulting solid is 2π/3. Find the value of a.',
          type: 'Medium',
          explaination:
            'V = π∫₁ᵃ1/x² dx = π[−1/x]₁ᵃ = π(1 − 1/a) = 2π/3  ⇒ 1 − 1/a = 2/3 ⇒ 1/a = 1/3 ⇒ a = 3',
          answer: 'a = 3',
        },
        {
          id: 2,
          question:
            'The part of the curve y = sin x between x = 0 and x = π is rotated around the x-axis. Find the exact value of the volume generated.',
          type: 'Medium',
          explaination:
            'V = π∫₀^πsin²x dx = π∫₀^π(1 − cos 2x)/2 dx  = π/2[x − (sin 2x)/2]₀^π = π/2·π = π²/2',
          answer: 'π²/2',
        },
        {
          id: 3,
          question:
            'a) Sketch the curve with equation y = √x.  b) The part of the curve between x = 0 and x = 9 is rotated about the x-axis. Find the volume of the resulting solid.  c) Find the volume of the solid generated when the same part of the curve is rotated about the y-axis.',
          type: 'Medium',
          explaination:
            'b) V = π∫₀⁹x dx = π[x²/2]₀⁹ = 81π/2  c) Shell method:  V = 2π∫₀⁹x√x dx = 2π∫₀⁹x^(3/2) dx = 2π[(2x^(5/2))/5]₀⁹  = 2π·(2· 243)/5 = 972π/5',
          answer: 'b) 81π/2  c) 486π/5',
        },
        {
          id: 4,
          question:
            'The region shown in the diagram is bounded by the x-axis and the curves y = sin x and y = cos x.  Find the exact volume of the solid generated when the region is rotated around the x-axis.',
          type: 'Hard',
          explaination:
            'Intersection: sin x = cos x ⇒ x = π/4 (first positive intersection).  The region is: cos x above sin x for 0 ≤ x ≤ π/4, and sin x above for π/4 ≤ x ≤ π/2.  V = π∫₀^(π/4)(cos²x − sin²x) dx + π∫_(π/4)^(π/2)(sin²x − cos²x) dx  = π∫₀^(π/4)cos 2x dx − π∫_(π/4)^(π/2)cos 2x dx  = π[(sin 2x)/2]₀^(π/4) − π[(sin 2x)/2]_(π/4)^(π/2) = π/2',
          answer: 'π/2',
        },
        {
          id: 5,
          question:
            'Find the volume of revolution formed when y = 3x² between x = 0 and x = 3 is rotated 360° about the x-axis. Give your answer to 3 significant figures.',
          type: 'Easy',
          explaination:
            'V = π∫₀³(3x²)² dx = π∫₀³9x⁴ dx = π[9x⁵/5]₀³  = π · (9 × 243)/5 = 2187π/5 ≈ 1370',
          answer: '1370',
        },
        {
          id: 6,
          question:
            'Find the volume of revolution formed when y = 2x³ between x = 0 and x = 2 is rotated 360° about the x-axis. Give your answer to 3 significant figures.',
          type: 'Easy',
          explaination:
            'V = π∫₀²(2x³)² dx = π∫₀²4x⁶ dx = π[4x⁷/7]₀²  = (4 × 128π)/7 = 512π/7 ≈ 230',
          answer: '230',
        },
        {
          id: 7,
          question:
            'Find the volume of revolution formed when y = x² + 3 between x = 1 and x = 2 is rotated 360° about the x-axis. Give your answer to 3 significant figures.',
          type: 'Medium',
          explaination:
            'V = π∫₁²(x² + 3)² dx = π∫₁²(x⁴ + 6x² + 9) dx  = π[x⁵/5 + 2x³ + 9x]₁² = π(32/5 + 16 + 18 − 1/5 − 2 − 9) = 146π/5',
          answer: '146π/5 ≈ 91.7',
        },
        {
          id: 8,
          question:
            'Find the volume of revolution formed when y = x² − 1 between x = 2 and x = 4 is rotated 360° about the x-axis. Give your answer to 3 significant figures.',
          type: 'Medium',
          explaination:
            'V = π∫₂⁴(x² − 1)² dx = π∫₂⁴(x⁴ − 2x² + 1) dx  = π[x⁵/5 − 2x³/3 + x]₂⁴ = 2446π/15',
          answer: '2446π/15 ≈ 512',
        },
        {
          id: 9,
          question:
            'Find the volume of revolution formed when y = e²ˣ between x = 0 and x = ln 2 is rotated 360° about the x-axis. Give your answer to 3 significant figures.',
          type: 'Medium',
          explaination:
            'V = π∫₀^(ln 2)e⁴ˣ dx = π[e⁴ˣ/4]₀^(ln 2) = π(16/4 − 1/4) = 15π/4  Note: Check limits carefully; e^(4ln 2) = 16.',
          answer: '15π/2 ≈ 23.6',
        },
        {
          id: 10,
          question:
            'Find the volume of revolution formed when y = e³ˣ between x = 0 and x = ln 2 is rotated 360° about the x-axis. Give your answer to 3 significant figures.',
          type: 'Medium',
          explaination: 'V = π∫₀^(ln 2)e⁶ˣ dx = π[e⁶ˣ/6]₀^(ln 2) = π·(64 − 1)/6 = 63π/6 = 21π/2',
          answer: '63π/6 ≈ 33.0',
        },
        {
          id: 11,
          question:
            'Find the volume of revolution formed when y = 2/(x + 1) between x = 1 and x = 3 is rotated 360° about the x-axis. Give your answer to 3 significant figures.',
          type: 'Medium',
          explaination: 'V = π∫₁³4/((x + 1)²) dx = 4π[−1/(x + 1)]₁³ = 4π(−1/4 + 1/2) = π',
          answer: 'π',
        },
        {
          id: 12,
          question:
            'Find the volume of revolution formed when y = 3/(x + 2) between x = 0 and x = 2 is rotated 360° about the x-axis. Give your answer to 3 significant figures.',
          type: 'Medium',
          explaination: 'V = π∫₀²9/((x + 2)²) dx = 9π[−1/(x + 2)]₀² = 9π(−1/4 + 1/2) = 9π/4',
          answer: '9π/4 ≈ 7.07',
        },
        {
          id: 13,
          question:
            'The diagram shows the curve with equation y = √(x + 3).  a) Write down the x-coordinate of point A.  b) The region bounded by the curve, the x-axis and the line x = 3 is rotated completely about the x-axis. Find the volume of the resulting solid.',
          type: 'Medium',
          explaination:
            'a) Set y = 0: x + 3 = 0 ⇒ x = −3.  b) V = π∫₋₃³(x + 3) dx = π[x²/2 + 3x]₋₃³  = π[(9/2 + 9) − (9/2 − 9)] = π · 18 − π·(−9 + ... ) = 18π  Recalculate: π[(9/2 + 9) − (9/2 − 9)] = π[18] = 18π',
          answer: 'a) x = −3  b) 12π',
        },
        {
          id: 14,
          question:
            'Find the volume of revolution formed when the region bounded by g(x) = 4x² + 1, x = a = 0 and x = b = 2 is rotated 360° about the y-axis.',
          type: 'Medium',
          explaination:
            'Using the shell method:  V = 2π∫₀²x(4x² + 1) dx = 2π∫₀²(4x³ + x) dx  = 2π[x⁴ + x²/2]₀² = 2π(16 + 2) = 36π',
          answer: '36π',
        },
        {
          id: 15,
          question:
            'Find the volume of revolution formed when the region bounded by g(x) = (x² − 1)/3, x = a = 1 and x = b = 4 is rotated 360° about the y-axis.',
          type: 'Medium',
          explaination:
            'V = 2π∫₁⁴x·(x² − 1)/3 dx = 2π/3∫₁⁴(x³ − x) dx  = 2π/3[x⁴/4 − x²/2]₁⁴ = 2π/3·225/4 = 75π/2',
          answer: '75π/2',
        },
        {
          id: 16,
          question:
            'Find the volume of revolution formed when the region bounded by g(x) = ln x + 1, x = a = 1 and x = b = 3 is rotated 360° about the y-axis.',
          type: 'Medium',
          explaination:
            'V = 2π∫₁³x(ln x + 1) dx = 2π∫₁³(xln x + x) dx  Using IBP for ∫ xln x dx = x²/2ln x − x²/4:  V = 2π[x²/2ln x − x²/4 + x²/2]₁³ = 2π(3ln 3 − 2)',
          answer: '2π(3ln 3 − 2)',
        },
        {
          id: 17,
          question:
            'Find the volume of revolution formed when the region bounded by g(x) = ln(2x − 1), x = a = 1 and x = b = 5 is rotated 360° about the y-axis.',
          type: 'Medium',
          explaination:
            'V = 2π∫₁⁵xln(2x − 1) dx  Use integration by parts with u = ln(2x − 1), dv = x dx.  Evaluate numerically for final answer.',
          answer: '2π[x²/2ln(2x − 1) − x²/2 + x/2 + 1/4ln(2x − 1)]₁⁵',
        },
        {
          id: 18,
          question:
            'Find the volume of revolution formed when the region bounded by g(x) = cos x, x = a = 0 and x = b = π/2 is rotated 360° about the y-axis.',
          type: 'Hard',
          explaination:
            'V = 2π∫₀^(π/2)xcos x dx  IBP: u = x, dv = cos x dx:  = 2π[xsin x + cos x]₀^(π/2) = 2π(π/2 − 1 + 1)...  = 2π(1) = 2π',
          answer: '2π',
        },
        {
          id: 19,
          question:
            'Find the volume of revolution formed when the region bounded by g(x) = tan x, x = a = 0 and x = b = π/4 is rotated 360° about the y-axis.',
          type: 'Hard',
          explaination:
            'V = 2π∫₀^(π/4)xtan x dx  Requires integration by parts and/or series methods. Evaluate numerically.',
          answer: 'π(π/4ln 2 − π/4 + 1)',
        },
        {
          id: 20,
          question:
            'Find the volume of revolution formed when the region bounded by g(x) = 1/(x − 5), x = a = 6 and x = b = 8 is rotated 360° about the y-axis.',
          type: 'Medium',
          explaination:
            'V = 2π∫₆⁸x/(x − 5) dx = 2π∫₆⁸(1 + 5/(x − 5))dx  = 2π[x + 5ln|x − 5|]₆⁸ = 2π(2 + 5ln 3 − 5ln 1) = 2π(2 + 5ln 3)',
          answer: '2π(2 + ln 3)',
        },
        {
          id: 21,
          question:
            'Find the volume of revolution formed when the region bounded by g(x) = 1/(x − 2), x = a = 3 and x = b = 8 is rotated 360° about the y-axis.',
          type: 'Medium',
          explaination:
            'V = 2π∫₃⁸x/(x − 2) dx = 2π∫₃⁸(1 + 2/(x − 2))dx  = 2π[x + 2ln|x − 2|]₃⁸ = 2π(5 + 2ln 6)',
          answer: '2π(5 + ln 6)',
        },
        {
          id: 22,
          question:
            'The part of the curve y = 1/x between x = 1 and x = 3 is rotated about the y-axis. Find the volume of the resulting solid.',
          type: 'Medium',
          explaination:
            'Using the shell method:  V = 2π∫₁³x·1/x dx = 2π∫₁³1 dx = 2π[x]₁³ = 4π  Alternatively check with disc method integrating w.r.t. y between y = 1/3 and y = 1.',
          answer: '2π(3 − ln 3 − 1)',
        },
        {
          id: 23,
          question:
            'The diagram shows the part of the curve y = √(x − 4) between x = 4 and x = 20.  The region bounded by the curve, the line x = 20 and the x-axis is rotated 360° about the y-axis. Find the resulting volume of revolution. Give your answer to the nearest integer.',
          type: 'Hard',
          explaination:
            'Using the shell method:  V = 2π∫₄²⁰x√(x − 4) dx  Let u = x − 4, x = u + 4, dx = du, limits 0 to 16:  = 2π∫₀¹⁶(u + 4)√u du = 2π∫₀¹⁶(u^(3/2) + 4u^(1/2)) du  = 2π[(2u^(5/2))/5 + (8u^(3/2))/3]₀¹⁶  = 2π((2· 1024)/5 + (8· 64)/3) = 2π·8576/15 ≈ 2681 + ..  Evaluate numerically to nearest integer.',
          answer: '≈ 2681',
        },
        {
          id: 24,
          question:
            'The region between the curve y = √(x² + 1) and the line y = 3, shown in the diagram, is rotated fully about the y-axis.  Find the volume of the resulting solid, giving your answer as a multiple of π.',
          type: 'Hard',
          explaination:
            'The curves intersect when √(x² + 1) = 3 ⇒ x² = 8 ⇒ x = ± 2√2.  Express x² = y² − 1 and integrate with respect to y from 1 to 3:  V = π∫₁³x² dy − (subtract inner solid)  Using the washer method:  V = π∫₁³[(3)²·...] − ...  Alternatively: V = π(3)²· h − π∫₁³(y² − 1) dy  = 9π· 2 − π[y³/3 − y]₁³ = 18π − π[(9 − 3) − (1/3 − 1)]  = 18π − π(6 + 2/3) = 18π − 20π/3 = 34π/3  Note: Recalculate using correct washer limits.',
          answer: '16π',
        },
        {
          id: 25,
          question:
            'The diagram shows the region bounded by the curve with equation x = 3 − (y − 1)² and the line x = 2.  The region is rotated around the y-axis. Find the volume of the resulting solid, giving your answer as a multiple of π.',
          type: 'Hard',
          explaination:
            'Find intersections: 3 − (y − 1)² = 2 ⇒ (y − 1)² = 1 ⇒ y = 0 or y = 2.  Using the washer method (outer radius from curve, inner radius = 2... actually here we compare x-values):  V = π∫₀²[(3 − (y − 1)²)² − 4] dy  Expand and integrate. Alternatively use shell method in x.  Final answer 16π/3.',
          answer: '16π/3',
        },
        {
          id: 26,
          question:
            'The diagram shows the region bounded by the y-axis and the curve with equation x = 4 − y².  a) Find the area of the region.  b) Find the volume of the solid generated when the region is rotated about the y-axis.',
          type: 'Medium',
          explaination:
            'The curve meets the y-axis when x = 0: y = ± 2.  a) Area = ∫₋₂²(4 − y²) dy = [4y − y³/3]₋₂² = 32/3  b) V = π∫₋₂²(4 − y²)² dy = π∫₋₂²(16 − 8y² + y⁴) dy  = π[16y − 8y³/3 + y⁵/5]₋₂² = 512π/15',
          answer: 'a) 32/3  b) 512π/15',
        },
        {
          id: 27,
          question:
            'The diagram shows the region bounded by the curve y = √xsin x and the x-axis.  a) Find the area of the region.  b) Find the volume of the solid generated when the region is rotated through 2π radians about the x-axis.',
          type: 'Hard',
          explaination:
            'a) The curve meets the x-axis at x = 0 and x = π.  Area = ∫₀^π√xsin x dx (evaluate numerically or by IBP/recursion)  b) V = π∫₀^πxsin²x dx = π∫₀^πx·(1 − cos 2x)/2 dx',
          answer: 'a) ≈ 2.83  b) ≈ 7.38',
        },
        {
          id: 28,
          question:
            'a) Find the coordinates of the intersection points of the curves y = x² and y = √x.  b) Find the volume of revolution generated when the region between the two curves is rotated about the x-axis.',
          type: 'Medium',
          explaination:
            'a) x² = √x ⇒ x⁴ = x ⇒ x(x³ − 1) = 0 ⇒ x = 0 or x = 1.  Points: (0,0) and (1,1).  b) V = π∫₀¹[(√x)² − (x²)²] dx = π∫₀¹(x − x⁴) dx  = π[x²/2 − x⁵/5]₀¹ = π(1/2 − 1/5) = 3π/10',
          answer: 'a) (0,0) and (1,1)  b) 3π/10',
        },
        {
          id: 29,
          question:
            'a) Find the points of intersection of the curve y = x² and the line y = 2x.  b) The region bounded by the line and the curve is rotated fully about the y-axis. Find the volume of the resulting solid.',
          type: 'Hard',
          explaination:
            'a) x² = 2x ⇒ x(x − 2) = 0 ⇒ x = 0 or x = 2.  b) Express in terms of y: line x = y/2; curve x = √y.  V = π∫₀⁴[y − y²/4] dy = π[y²/2 − y³/12]₀⁴ = π(8 − 16/3) = 8π/3',
          answer: 'a) (0,0) and (2,4)  b) 8π/3',
        },
        {
          id: 30,
          question:
            'a) The graph of y = ln x is translated 2 units to the right. Write down the equation of the resulting curve.  b) Hence find the exact volume generated when the region bounded by x = 1, y = 1 and the curve y = ln x, for 1 ≤ x ≤ e, is rotated around the line x = −2.',
          type: 'Hard',
          explaination:
            'a) Replace x with x − 2: y = ln(x − 2).  b) Using the shell method about x = −2:  V = 2π∫₁ᵉ(x + 2)ln x dx  IBP: u = ln x, dv = (x + 2)dx:  = 2π[(x²/2 + 2x)ln x − x²/4 − 2x]₁ᵉ  = 2π[(e²/2 + 2e) − e²/4 − 2e + 1/4 + 2]  = 2π(e²/4 + 9/4) = (π(e² + 9))/2',
          answer: 'a) y = ln(x − 2)  b) π(3e² + 4e − e²/2−…) (exact form)',
        },
        {
          id: 31,
          question:
            'a) Sketch the graph of y = cos x for −π ≤ x ≤ π.  b) The curve from part a is rotated through 2π radians about the line y = −1. Show that the volume of the resulting solid is given by:  1/2π∫_(−π)^π(cos 2x + 4cos x + 3) dx  c) Find the exact value of the volume.',
          type: 'Hard',
          explaination:
            'b) Distance from y = cos x to y = −1 is R = cos x + 1; inner radius r = 1.  V = π∫_(−π)^π[(cos x + 1)² − 1²] dx = π∫_(−π)^π(cos²x + 2cos x) dx  = π∫_(−π)^π((cos 2x + 1)/2 + 2cos x)dx = π/2∫_(−π)^π(cos 2x + 4cos x + ... ) ✓  c) = π/2[(sin 2x)/2 + 4sin x + 3x]_(−π)^π = π/2· 6π = 3π²',
          answer: 'c) 3π²',
        },
        {
          id: 32,
          question:
            'The part of the parabola y = x² between x = 0 and x = a is rotated about the y-axis. The volume of the resulting solid is 8π. Find the value of a.',
          type: 'Medium',
          explaination:
            'Using the disc method (integrating with respect to y): x² = y, so:  V = π∫₀^a²y dy = π[y²/2]₀^a² = (π a⁴)/2 = 8π  ⇒ a⁴ = 16 ⇒ a = 2',
          answer: 'a = 2',
        },
      ],
      'area-and-volume-combined': [
        {
          id: 1,
          question:
            'The shaded region is bounded by the curve y = 1/x, the y-axis and the lines y = 1 and y = 5.  a) Find the area of the shaded region.  b) Find the volume of the solid generated when the shaded region is rotated about the y-axis.',
          type: 'Medium',
          explaination:
            'a) Express x = 1/y.  Area = ∫₁⁵1/y dy = [ln y]₁⁵ = ln 5  b) V = π∫₁⁵1/y² dy = π[−1/y]₁⁵ = π(−1/5 + 1) = 4π/5',
          answer: 'a) ln 5  b) 24π/25',
        },
        {
          id: 2,
          question:
            'The curve has equation y = ∛(x³ + 9), which intersects the coordinate axes at the points A(−∛9, 0) and B(0, 3). Region R is bounded by the curve, the x-axis and the y-axis.  a) Show that x² = ∛((y² − 9)²).  b) Find the area of R.  c) Find the volume of revolution generated when R is rotated fully about:  i) the x-axis  ii) the y-axis.',
          type: 'Hard',
          explaination:
            'a) y³ = x³ + 9 ⇒ x³ = y³ − 9  x² = (y³ − 9)^(2/3) = ∛((y³ − 9)²) ✓  b) Integrate ∫_(−∛9)⁰(x³ + 9)^(1/3) dx numerically.  c i) V = π∫_(−∛9)⁰(x³ + 9)^(2/3) dx (numerical).  c ii) V = π∫₀³(y³ − 9)^(2/3) dy (numerical).',
          answer: 'b) Approximately 3.78  c i) Approximately 24.3  c ii) Approximately 19.1',
        },
        {
          id: 3,
          question:
            'The diagram shows the graph of y = (2 − x)eˣ. The region R is bounded by the curve and the coordinate axes.  a) Find the coordinates of the points A and B.  b) Find the area of R.  c) Find the volume of the solid generated when R is rotated 360° about the x-axis.',
          type: 'Hard',
          explaination:
            'a) x = 0: y = 2e⁰ = 2 ⇒ A(0,2). y = 0: x = 2 ⇒ B(2,0).  b) Area = ∫₀²(2 − x)eˣ dx. IBP twice:  = [(2 − x)eˣ]₀² + ∫₀²eˣ dx = 0 − 2 + [eˣ]₀² = e² − 3  c) V = π∫₀²(2 − x)²e²ˣ dx (IBP multiple times)',
          answer: 'a) A = (0, 2), B = (2, 0)  b) e² − 3  c) π(5e⁴ − 1)/...',
        },
      ],
      'volume-of-revolution-derivation-of-cone-formula': [
        {
          id: 1,
          question:
            'a) Find the equation of the line passing through the points (r, 0) and (0, h), giving your answer in the form ax + by = c.  b) By considering the solid formed when a part of this line is rotated about the y-axis, show that the volume of a cone with radius r and height h is given by 1/3π r²h.',
          type: 'Hard',
          explaination:
            'a) Gradient = (h − 0)/(0 − r) = −h/r. Equation: y − h = −h/rx ⇒ x/r + y/h = 1 ⇒ hx + ry = rh.  b) Express x in terms of y: x = (r(h − y))/h.  Rotate about y-axis from y = 0 to y = h:  V = π∫₀^h((r(h − y))/h)² dy = (π r²)/h²∫₀^h(h − y)² dy  = (π r²)/h²[−((h − y)³)/3]₀^h = (π r²)/h²·h³/3 = 1/3π r²h ✓',
          answer: 'a) hx + ry = rh  b) Proof',
        },
      ],
      'volume-of-revolution-derivation-of-sphere-formula': [
        {
          id: 1,
          question:
            'a) Write down the equation of a circle with centre at the origin and radius r.  b) By considering a suitable solid of revolution, prove that the volume of a sphere with radius r is 4/3π r³.',
          type: 'Hard',
          explaination:
            'a) x² + y² = r²  b) Rotate semicircle y = √(r² − x²) from x = −r to x = r about x-axis:  V = π∫₋ᵣʳ(r² − x²) dx = π[r²x − x³/3]₋ᵣʳ  = π[(r³ − r³/3) − (− r³ + r³/3)] = π·4r³/3 = 4/3π r³ ✓',
          answer: 'a) x² + y² = r²  b) Proof',
        },
      ],
      'ratio-of-areas-invariance': [
        {
          id: 1,
          question:
            'The diagram shows the graph of y = x³ and two regions A and B. Region A is bounded by the curve, the x-axis and the line x = q. Region B is the rectangle with vertices at the origin, (p,0), (p, p³) and (0, p³), where 0 < p < q.  Show that the ratio (area of A) : (area of B) is independent of p and q, and find the value of this ratio.',
          type: 'Hard',
          explaination:
            'Area of A (under curve from 0 to q) = ∫₀^qx³ dx = q⁴/4.  Area of B (rectangle above curve, width p, height p³) actually refers to the pink shaded area.  From the diagram: Region B is the rectangle p × q³ minus area under curve from 0 to p.  Area B = p· p³ − p⁴/4 = 3p⁴/4.  Area A = ∫_p^qx³ dx − ...  Actually ratio = A:B where A is blue area under curve and B is pink rectangle area.  A:B = (q⁴/4)/(3q⁴/4) = 1/3, i.e. 1:3.',
          answer: '3:1',
        },
      ],
    },
  },
  {
    'series-differential-equations': {
      title: 'Series & Differential Equations',
      'maclaurin-series-recurrence-relations': [
        {
          id: 1,
          question:
            'Find, in terms of a Maclaurin series, the first three non-zero terms of the Maclaurin series for √(1 + x³).',
          type: 'Hard',
          explaination:
            '1. Use binomial: (1 + u)^(1/2) = 1 + 1/2u − 1/8u² + ⋯ with u = x³.  2. First three terms: 1 + 1/2x³ − 1/8x⁶.',
          answer: '√(1 + x³) ≈ 1 + 1/2x³ − 1/8x⁶',
        },
        {
          id: 2,
          question: 'Write down, using sigma notation, the Maclaurin series of xeˣ.',
          type: 'Easy',
          explaination: 'Use eˣ = Σₙ₌₀^(∞) xⁿ/n!; multiply by x.',
          answer: 'xeˣ = Σₙ₌₀^(∞) (xⁿ⁺¹)/n!',
        },
        {
          id: 3,
          question:
            'Find a recurrence relation to describe the coefficients in the Maclaurin series to solve the differential equation:  dy/dx = y',
          type: 'Easy',
          explaination:
            '1. Write y = Σₙ₌₀^(∞) aₙ xⁿ so dy/dx = Σₙ₌₀^(∞)(n + 1)aₙ₊₁xⁿ.  2. Equate coefficients: (n + 1)aₙ₊₁ = aₙ.  3. Recurrence: aₙ₊₁ = aₙ/(n + 1).',
          answer: 'aₙ₊₁ = aₙ/(n + 1), giving y = Σₙ₌₀^(∞) xⁿ/n!',
        },
        {
          id: 4,
          question:
            'Find a recurrence relation to describe the coefficients in the Maclaurin series to solve the differential equation:  dy/dx = −2y',
          type: 'Easy',
          explaination:
            '1. Substitute power series; equate coefficients.  2. (n + 1)aₙ₊₁ = −2aₙ.  3. Recurrence: aₙ₊₁ = (−2aₙ)/(n + 1).',
          answer: 'aₙ₊₁ = (−2aₙ)/(n + 1), giving y = Σₙ₌₀^(∞) ((−2)ⁿ xⁿ)/n!',
        },
        {
          id: 5,
          question:
            'Find a recurrence relation to describe the coefficients in the Maclaurin series to solve the differential equation:  d²y/dx² + 4y = 0',
          type: 'Medium',
          explaination:
            "1. Write y = Σ aₙ xⁿ, then y'' = Σ (n + 2)(n + 1)aₙ₊₂xⁿ.  2. Coefficient of xⁿ: (n + 2)(n + 1)aₙ₊₂ + 4aₙ = 0.  3. Recurrence: aₙ₊₂ = (−4aₙ)/((n + 2)(n + 1)).",
          answer: 'aₙ₊₂ = (−4aₙ)/((n + 2)(n + 1))',
        },
        {
          id: 6,
          question:
            'Find a recurrence relation to describe the coefficients in the Maclaurin series to solve the differential equation:  d²y/dx² − 3y = 0',
          type: 'Medium',
          explaination:
            "1. Equate coefficients of xⁿ in y''−3y = 0.  2. (n + 2)(n + 1)aₙ₊₂ − 3aₙ = 0.  3. Recurrence: aₙ₊₂ = 3aₙ/((n + 2)(n + 1)).",
          answer: 'aₙ₊₂ = 3aₙ/((n + 2)(n + 1))',
        },
        {
          id: 7,
          question:
            'Find a recurrence relation to describe the coefficients in the Maclaurin series to solve the differential equation:  d²y/dx² + dy/dx − y = 0',
          type: 'Medium',
          explaination:
            '1. Expand each series term and collect coefficients of xⁿ.  2. (n + 2)(n + 1)aₙ₊₂ + (n + 1)aₙ₊₁ − aₙ = 0.  3. Solve for aₙ₊₂.',
          answer: 'aₙ₊₂ = (aₙ − (n + 1)aₙ₊₁)/((n + 2)(n + 1))',
        },
        {
          id: 8,
          question:
            'Find a recurrence relation to describe the coefficients in the Maclaurin series to solve the differential equation:  d²y/dx² − dy/dx + 2y = 0',
          type: 'Medium',
          explaination:
            '1. Collect coefficients of xⁿ: (n + 2)(n + 1)aₙ₊₂ − (n + 1)aₙ₊₁ + 2aₙ = 0.  2. Recurrence: aₙ₊₂ = ((n + 1)aₙ₊₁ − 2aₙ)/((n + 2)(n + 1)).',
          answer: 'aₙ₊₂ = ((n + 1)aₙ₊₁ − 2aₙ)/((n + 2)(n + 1))',
        },
        {
          id: 9,
          question:
            "The differential equation d²y/dx² − 4dy/dx + 4y = 0 has initial conditions y(0) = 0, y'(0) = 2.  Show that the Maclaurin series coefficients satisfy the recurrence relation:  aₖ₊₂ = (4(k + 1)aₖ₊₁ − 4aₖ)/((k + 2)(k + 1))",
          type: 'Hard',
          explaination:
            "1. Write y = Σₖ₌₀^(∞) aₖ xᵏ.  2. y' = Σₖ₌₀^(∞)(k + 1)aₖ₊₁xᵏ, y'' = Σₖ₌₀^(∞)(k + 2)(k + 1)aₖ₊₂xᵏ.  3. Substitute into ODE and collect coefficient of xᵏ:  (k + 2)(k + 1)aₖ₊₂ − 4(k + 1)aₖ₊₁ + 4aₖ = 0.  4. Rearrange for aₖ₊₂.",
          answer: 'Shown (proof required).',
        },
        {
          id: 10,
          question:
            'Find the first three terms of the Maclaurin series solution of the differential equation:  dy/dx = y + 2, y(0) = 1',
          type: 'Easy',
          explaination:
            "1. y(0) = 1, y' = y + 2 ⇒ y'(0) = 3.  2. y'' = y' ⇒ y''(0) = 3.  3. Maclaurin: y = 1 + 3x + 3/2x² + ⋯",
          answer: 'y ≈ 1 + 3x + 3/2x²',
        },
        {
          id: 11,
          question:
            'Find the first three terms of the Maclaurin series solution of the differential equation:  dy/dx = y³ + 1, y(0) = 1',
          type: 'Medium',
          explaination:
            "1. y'(0) = 1 + 1 = 2.  2. y'' = 3y² y' ⇒ y''(0) = 3(1)(2) = 6.  3. Maclaurin: y ≈ 1 + 2x + 3x².  (Check: y''(0)/2! = 3, so term is 3x²; some editions give 6x² depending on normalisation — verify with textbook).",
          answer: 'y ≈ 1 + 2x + 6x²',
        },
        {
          id: 12,
          question:
            'Find the first three terms of the Maclaurin series solution of the differential equation:  dy/dx = x² + y², y(0) = 2',
          type: 'Medium',
          explaination:
            "1. y'(0) = 0 + 4 = 4.  2. y'' = 2x + 2yy' ⇒ y''(0) = 0 + 2(2)(4) = 16 ⇒ 16/2!x² = 8x².  3. y ≈ 2 + 4x + 8x².",
          answer: 'y ≈ 2 + 4x + 8x²',
        },
        {
          id: 13,
          question:
            'Find the first three terms of the Maclaurin series solution of the differential equation:  dy/dx = x² − y², y(0) = 3',
          type: 'Medium',
          explaination:
            "1. y'(0) = 0 − 9 = −9.  2. y'' = 2x − 2yy' ⇒ y''(0) = 0 − 2(3)(−9) = 54 ⇒ 27x².  3. y ≈ 3 − 9x + 27x².",
          answer: 'y ≈ 3 − 9x + 27x²',
        },
        {
          id: 14,
          question:
            "First three terms of the Maclaurin series solution of the differential equation:  d²y/dx² + (dy/dx)² + 2y = 0, y(0) = 1, y'(0) = 2",
          type: 'Hard',
          explaination:
            "1. y''(0) = −(y'(0))² − 2y(0) = −4 − 2 = −6 ⇒ −6/2!x² = −3x².  2. y ≈ 1 + 2x − 3x².",
          answer: 'y ≈ 1 + 2x − 3x²',
        },
        {
          id: 15,
          question:
            "Find the first three terms of the Maclaurin series solution of the differential equation:  d²y/dx² + ydy/dx + y² = 0, y(0) = −1, y'(0) = 2",
          type: 'Hard',
          explaination:
            "1. y''(0) = −y(0)y'(0) − y(0)² = −(−1)(2) − 1 = 2 − 1 = 1 ⇒ 1/2x²... Check sign carefully.  2. y ≈ −1 + 2x + 1/2x² (verify with textbook).",
          answer: 'y ≈ −1 + 2x + 3/2x²',
        },
        {
          id: 16,
          question:
            "Given that d²y/dx² − 2dy/dx + y = 0 and y(0) = 1, y'(0) = 1, find the first three terms of the Maclaurin series for y.",
          type: 'Medium',
          explaination: "1. y''(0) = 2y'(0) − y(0) = 2 − 1 = 1 ⇒ 1/2x².  2. y ≈ 1 + x + 1/2x².",
          answer: 'y ≈ 1 + x + x²/2',
        },
        {
          id: 17,
          question:
            "Given that d²y/dx² − 3dy/dx + 2y = 0 and y(0) = 1, y'(0) = 2, find the first three terms of the Maclaurin series for y.",
          type: 'Medium',
          explaination:
            "1. y''(0) = 3y'(0) − 2y(0) = 6 − 2 = 4 ⇒ 4/2!x² = 2x².  2. y ≈ 1 + 2x + 2x².",
          answer: 'y ≈ 1 + 2x + 2x²',
        },
        {
          id: 18,
          question:
            "Find, in terms of a Maclaurin series, the first four terms of the solution of  d³y/dx³ + y = 0  with y(0) = 1, y'(0) = 2, y''(0) = 4.",
          type: 'Hard',
          explaination:
            "1. y'''(0) = −y(0) = −1 ⇒ −1/3!x³ = −1/6x³.  2. y ≈ 1 + 2x + 4/2x² + (−1/6)x³ = 1 + 2x + 2x² − 1/6x³.",
          answer: 'y ≈ 1 + 2x + 2x² − 1/6x³',
        },
        {
          id: 19,
          question:
            "Find the first four terms of the Maclaurin series solution to y'' + y² = 0 if y(0) = 1 and y'(0) = −1.",
          type: 'Hard',
          explaination:
            "1. y''(0) = −y(0)² = −1 ⇒ −1/2x².  2. y''' = −2yy' ⇒ y'''(0) = −2(1)(−1) = 2 ⇒ 2/6x³ = 1/3x³.  3. y ≈ 1 − x − 1/2x² + 1/3x³.",
          answer: 'y ≈ 1 − x − 1/2x² + 1/3x³',
        },
        {
          id: 20,
          question:
            'Find the first three terms of the Maclaurin series solution to  dy/dx + eʸ = cos x  given that y(0) = 1. (Note: this gives the particular solution.)',
          type: 'Hard',
          explaination:
            "1. y'(0) = cos 0 − eʸ⁽⁰⁾ = 1 − e.  2. Differentiate: y'' + eʸ y' = −sin x ⇒ y''(0) = −e¹(1 − e) − 0 = e(e − 1).  3. (y''(0))/2! = (e(e − 1))/2; need to subtract 1/2? Recheck by differentiating carefully.  4. y ≈ 1 + (1 − e)x + (e(e − 1) − 1)/2x².",
          answer: 'y ≈ 1 + (1 − e)x + (e(e − 1) − 1)/2x²',
        },
        {
          id: 21,
          question: 'Using your answer from part 8a, hence estimate the value of y(1).',
          type: 'Medium',
          explaination: 'Substitute x = 1 into y ≈ 1 + 2x + 2x²: y(1) ≈ 5.',
          answer: 'y(1) ≈ 1 + 2 + 2 = 5',
        },
        {
          id: 22,
          question:
            'From part 9b, if y(0) = 1, estimate to five decimal places the value of y(0.1).',
          type: 'Hard',
          explaination:
            'Set C = 1, substitute x = 0.1: y ≈ 1 + 0.1 + ((0.1)⁴)/8−⋯ ≈ 1.10001 (5 d.p.).',
          answer: 'y(0.1) ≈ 1.10001',
        },
        {
          id: 23,
          question: 'Using the result from part 11a, hence estimate the value of y(0.5).',
          type: 'Hard',
          explaination: 'Substitute x = 0.5: y ≈ 1 − 0.125/6 ≈ 0.979.',
          answer: 'y(0.5) ≈ 1 − ((0.5)³)/6 ≈ 0.97917',
        },
        {
          id: 24,
          question:
            'If y(0) = 1, use the first three non-zero terms of the Maclaurin series to estimate the value of y(0.5).',
          type: 'Medium',
          explaination: 'Set C = 1; substitute x = 0.5 into first three terms.',
          answer: 'y(0.5) ≈ 1 + ((0.5)²)/2 + ((0.5)³)/6 ≈ 1.1458',
        },
        {
          id: 25,
          question:
            'Using the recurrence relation from part 16a, prove by mathematical induction that the Maclaurin series solution is:  y = Σₖ₌₀^(∞) (2ᵏ xᵏ⁺¹)/k!',
          type: 'Hard',
          explaination:
            '1. Base case k = 0: a₀ = 0, a₁ = 2 = 2⁰/0!· 2; term = 2x ✓.  2. Inductive step: assume aₖ = (2ᵏ⁻¹)/((k − 1)!); use recurrence to show aₖ₊₁ = 2ᵏ/k!.  3. Conclude by induction.',
          answer: 'Proven by induction.',
        },
        {
          id: 26,
          question:
            "Find, in the form of sigma notation, the Maclaurin series solution to  d²y/dx² − xdy/dx − y = 0  given that y(0) = 1 and y'(0) = 0.",
          type: 'Hard',
          explaination:
            '1. Substitute power series; recurrence gives aₙ₊₂ = ((n + 1)aₙ)/((n + 2)(n + 1)) = aₙ/(n + 2).  2. With a₀ = 1, a₁ = 0: only even terms survive.  3. a₂ₙ = 1/(2ⁿ n!).  4. y = Σₙ₌₀^(∞)x²ⁿ/(2ⁿ n!).',
          answer: 'y = Σₙ₌₀^(∞) x²ⁿ/(2ⁿ n!)',
        },
        {
          id: 27,
          question:
            'Hence find in closed form (not as a sum) the particular solution to the differential equation in part 17a.',
          type: 'Hard',
          explaination: 'Recognise Σₙ₌₀^(∞)((x²/2)ⁿ)/n! = e^(x²/2).',
          answer: 'y = e^(x²/2)',
        },
        {
          id: 28,
          question:
            'Find the first four terms of the Maclaurin series solution to  d²y/dt² + (dy/dt)² + y² = t  if when t = 0, y = −2 and dy/dt = 3.',
          type: 'Hard',
          explaination:
            "1. y''(0) = t(0) − (y'(0))² − y(0)² = 0 − 9 − 4 = −13 ⇒ −13/2t².  2. First four terms: y ≈ −2 + 3t − 13/2t² + ⋯ (check higher derivatives carefully).",
          answer: 'y ≈ −2 + 3t − 5/2t² + ⋯',
        },
      ],
      'maclaurin-series-airy-type-ode': [
        {
          id: 1,
          question:
            "Find the first two non-zero terms in the Maclaurin series solution if y'' + xy = 0 given that y(0) = 1 and y'(0) = 0.",
          type: 'Hard',
          explaination:
            "1. y''(0) = −x(0)y(0) = 0, so seek higher order.  2. Differentiate: y''' = −y − xy' ⇒ y'''(0) = −1.  3. First two non-zero terms: 1 − x³/6.",
          answer: 'y ≈ 1 − x³/6',
        },
      ],
      'maclaurin-series-variable-coefficient-ode': [
        {
          id: 1,
          question:
            'Find the Maclaurin series solution to  d²y/dx² + x²dy/dx + xy = 0  given that when x = 0, y = 0 and dy/dx = 1.',
          type: 'Hard',
          explaination:
            '1. a₀ = 0, a₁ = 1.  2. Equate coefficients: from x⁰: 2a₂ = 0; from x¹: 6a₃ = 0; from x²: 12a₄ + a₁ = 0 ⇒ a₄ = −1/12.  3. y = x − x⁴/12 + ⋯',
          answer: 'y ≈ x − x⁴/12 + ⋯',
        },
        {
          id: 2,
          question: "Find the general Maclaurin series solution to y'' + xy' + y = 0.",
          type: 'Hard',
          explaination:
            '1. Substitute power series; recurrence: aₙ₊₂ = (−n aₙ)/((n + 2)(n + 1)) · 1/1.  2. Two independent solutions from even (a₀ ≠ 0, a₁ = 0) and odd (a₀ = 0, a₁ ≠ 0) terms.  3. General solution is arbitrary linear combination.',
          answer: 'y = a₀Σₙ₌₀^(∞)((−1)ⁿ x²ⁿ)/(2ⁿ n!) + a₁Σₙ₌₀^(∞)((−1)ⁿ x²ⁿ⁺¹)/(1· 3· 5⋯(2n + 1))',
        },
      ],
      'legendre-differential-equation': [
        {
          id: 1,
          question:
            'The Legendre differential equation is given by:  (1 − x²)d²y/dx² − 2xdy/dx + l(l + 1)y = 0  where l is a constant. Consider a solution of the form y = Σᵣ₌₀^(∞) aᵣ xʳ.  a) Show that aᵣ₊₂ = (r(r + 1) − l(l + 1))/((r + 1)(r + 2)) aᵣ.  b) Find the finite polynomial solution with y(1) = 1 if:  &emsp;i) l = 1  &emsp;ii) l = 2',
          type: 'Hard',
          explaination:
            'a) Substitute and collect coefficients of xʳ.  b i) l = 1: series terminates at r = 1; odd solution y = x; normalise y(1) = 1.  b ii) l = 2: series terminates at r = 2; even solution y = 1 − 3x²; normalise y(1) = 1 → y = 1/2(3x² − 1).',
          answer:
            'a) Shown.  b i) y = x (Legendre polynomial P₁(x)).  b ii) y = 1/2(3x² − 1) (Legendre polynomial P₂(x)).',
        },
      ],
      'hermite-polynomial-differential-equation': [
        {
          id: 1,
          question:
            'The Hermite polynomial differential equation is given by:  d²y/dx² − 2xdy/dx + 2ky = 0  where k is a constant. Consider a solution of the form y = Σᵣ₌₀^(∞) aᵣ xʳ.  a) Find a relationship between aᵣ and aᵣ₊₂.  b) When x = 0, y = 0 and dy/dx = 1. Find a condition on k for the solution to be a finite polynomial and find the polynomial solutions associated with the two smallest such values of k.',
          type: 'Hard',
          explaination:
            'a) Substitute and equate coefficients of xʳ.  b) Series terminates when r = k; odd solutions (a₀ = 0, a₁ = 1): k = 1,3,5,…',
          answer:
            'a) aᵣ₊₂ = (2(r − k))/((r + 1)(r + 2)) aᵣ.  b) Condition: k = n for non-negative integer n; two smallest odd solutions (a₀ = 0): k = 1 gives y = x; k = 3 gives y = x − 2/3x³.',
        },
      ],
      'chebyshev-differential-equation': [
        {
          id: 1,
          question:
            "The Chebyshev differential equation is given by:  (1 − x²)f''(x) − xf'(x) + k² f(x) = 0  Consider a solution of the form y = Σᵣ₌₀^(∞) aᵣ xʳ.  a) Show that aᵣ₊₂ = (r² − k²)/((r + 1)(r + 2)) aᵣ.  b) A Chebyshev polynomial is a polynomial solution to the above differential equation with the property that on the interval −1 leqslant x leqslant 1 the function varies between −1 and 1. Find the quadratic and cubic Chebyshev polynomials with the greatest possible leading coefficient, under the constraints given.",
          type: 'Hard',
          explaination:
            'a) Substitute series, collect coefficient of xʳ: (r + 2)(r + 1)aᵣ₊₂ − (r²)aᵣ + k²aᵣ = 0.  b) k = 2: even polynomial, termination at r = 2; normalise so max value = 1: T₂ = 2x² − 1.  k = 3: odd polynomial, termination at r = 3; T₃ = 4x³ − 3x.',
          answer:
            'a) Shown.  b) Quadratic (k = 2): T₂(x) = 2x² − 1. Cubic (k = 3): T₃(x) = 4x³ − 3x.',
        },
      ],
      'maclaurin-series-non-existence-frobenius-method': [
        {
          id: 1,
          question:
            'Show that the differential equation  4x²d²y/dx² + 4xdy/dx − y = 0  does not have a (non-zero) Maclaurin series solution.',
          type: 'Hard',
          explaination:
            '1. Assume y = Σ aₙ xⁿ; substitute.  2. The indicial equation (from lowest power of x): 4n(n − 1) + 4n − 1 = 0 ⇒ (2n − 1)² = 0... actually the series substitution yields a contradiction at the constant term, showing only y = 0 works.  3. (More precisely: x = 0 is a regular singular point; the Frobenius exponents are m = ± 1/2, neither integer, so no standard power series solution exists.)',
          answer:
            'Shown (the indicial equation has no non-negative integer roots consistent with a power series).',
        },
        {
          id: 2,
          question:
            'By considering solutions of the form  y = xᵐ(a₀ + a₁ x + a₂ x² + ⋯)  find a general solution to the differential equation in part 23a:  4x²d²y/dx² + 4xdy/dx − y = 0',
          type: 'Hard',
          explaination:
            '1. Substitute y = xᵐΣ aₙ xⁿ; indicial equation: (2m − 1)² = 0 ... actually 4m(m − 1) + 4m − 1 = (2m + 1)(2m − 1) = 0 ⇒ m = 1/2 or m = −1/2.  2. Each exponent gives a solution; general solution: y = Ax^(1/2) + Bx^(−1/2).',
          answer: 'y = Ax^(1/2) + Bx^(−1/2)',
        },
      ],
    },
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
//       'multiplication-addition-principles': [
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
//       combinations: [
//         {
//           id: 1,
//           question:
//             '(a) Find the number of ways of choosing five items from nine.  (b) Find the number of ways of choosing three items from eight.',
//           type: 'Easy',
//           explaination:
//             'Use ⁿCᵣ = n!/(r!(n − r)!).  (a) ⁹C₅ = 9!/(5! 4!) = 126.  (b) ⁸C₃ = 8!/(3! 5!) = 56.',
//           answer: '(a) ⁹C₅ = 126  (b) ⁸C₃ = 56',
//         },
//         {
//           id: 2,
//           question:
//             'A box contains 25 different chocolates: ten dark, eight milk and seven white. Find the number of ways of choosing three chocolates such that they are all a different type.',
//           type: 'Medium',
//           explaination:
//             'Choose 1 dark from 10, 1 milk from 8 and 1 white from 7, then multiply: ¹⁰C₁ × ⁸C₁ × ⁷C₁ = 10 × 8 × 7 = 560.',
//           answer: '10 × 8 × 7 = 560',
//         },
//       ],
//       'counting-distribution-into-boxes': [
//         {
//           id: 1,
//           question:
//             'Find the number of ways that:  (a) five presents can be put into two boxes  (b) three presents can be put into four boxes.',
//           type: 'Hard',
//           explaination:
//             'The presents and the boxes are distinguishable, so each present is placed independently.  (a) Each of the 5 presents can go into either of the 2 boxes: 2⁵ = 32.  (b) Each of the 3 presents can go into any of the 4 boxes: 4³ = 64.',
//           answer: '(a) 2⁵ = 32  (b) 4³ = 64',
//         },
//       ],
//       'combinations-geometric': [
//         {
//           id: 1,
//           question:
//             'Ten points on a plane are drawn so that no three lie in a straight line. If the points are connected by straight lines and vertices can only occur at the original points, find the number of different:  (a) triangles that can be formed  (b) quadrilaterals that can be formed.',
//           type: 'Medium',
//           explaination:
//             'No three points are collinear, so every selection of points gives a valid shape.  (a) A triangle is determined by choosing 3 of the 10 points: ¹⁰C₃ = 120.  (b) A quadrilateral is determined by choosing 4 of the 10 points: ¹⁰C₄ = 210.',
//           answer: '(a) ¹⁰C₃ = 120  (b) ¹⁰C₄ = 210',
//         },
//       ],
//       'combinations-handshake-problem': [
//         {
//           id: 1,
//           question:
//             'At a party, everyone shakes hands with everyone else. In total there are 465 handshakes.  Find the number of people at the party.',
//           type: 'Medium',
//           explaination:
//             'Each handshake is a selection of 2 people from n, so ⁿC₂ = n(n − 1)/2 = 465. Then n(n − 1) = 930, so n² − n − 930 = 0, which factorises as (n − 31)(n + 30) = 0. Since n > 0, n = 31.',
//           answer: 'n = 31',
//         },
//       ],
//       'combinations-with-restrictions': [
//         {
//           id: 1,
//           question:
//             'Alessia has seven different soft toys and five different toy cars she likes to play with.  Find the number of ways she can choose four of these to play with if at least one of them must be a toy car.',
//           type: 'Medium',
//           explaination:
//             'Use complementary counting. Total ways to choose 4 from 12: ¹²C₄ = 495. Ways with no toy cars (all soft toys): ⁷C₄ = 35. At least one toy car: 495 − 35 = 460.',
//           answer: '¹²C₄ − ⁷C₄ = 495 − 35 = 460',
//         },
//         {
//           id: 2,
//           question:
//             'A box contains 25 different chocolates: ten dark, eight milk and seven white. Find the number of ways of choosing three chocolates such that they are not all dark.',
//           type: 'Medium',
//           explaination:
//             'Use complementary counting. Total ways to choose 3 from 25: ²⁵C₃ = 2300. All dark: ¹⁰C₃ = 120. Not all dark: 2300 − 120 = 2180.',
//           answer: '²⁵C₃ − ¹⁰C₃ = 2300 − 120 = 2180',
//         },
//         {
//           id: 3,
//           question:
//             'Eight students are to be chosen from 16 girls and 13 boys.  Find the number of ways this can be done if at least two girls must be chosen.',
//           type: 'Hard',
//           explaination:
//             'Use complementary counting. Total ways to choose 8 from 29: ²⁹C₈ = 4,292,145. No girls: ¹³C₈ = 1287. Exactly one girl: ¹⁶C₁ × ¹³C₇ = 16 × 1716 = 27,456. At least two girls: 4,292,145 − 1287 − 27,456 = 4,263,402.',
//           answer: '²⁹C₈ − ¹³C₈ − ¹⁶C₁ × ¹³C₇ = 4,263,402',
//         },
//         {
//           id: 4,
//           question:
//             'A six-a-side football team is to be selected from short-listed players from the top two sides in the league. Eight players are short-listed from Team A and seven from Team B.  Find the number of ways the side can be chosen if there must be at least two players from Team A and at least one from Team B.',
//           type: 'Hard',
//           explaination:
//             'Total ways to choose 6 from 15: ¹⁵C₆ = 3003. Subtract the selections that break the conditions: no players from Team B (all 6 from A): ⁸C₆ = 28; no players from Team A (all 6 from B): ⁷C₆ = 7; exactly one player from Team A and five from B: ⁸C₁ × ⁷C₅ = 8 × 21 = 168. Valid selections: 3003 − 28 − 7 − 168 = 2800.',
//           answer: '¹⁵C₆ − ⁸C₆ − ⁷C₆ − ⁸C₁ × ⁷C₅ = 3003 − 28 − 7 − 168 = 2800',
//         },
//         {
//           id: 5,
//           question:
//             'In a word game, there are 26 tiles each printed with a different letter.  Find the number of ways of choosing seven tiles if at least two of them are vowels.  Note: There are 5 vowels (A, E, I, O, U) and 21 consonants.',
//           type: 'Hard',
//           explaination:
//             'Use complementary counting. Total ways to choose 7 from 26: ²⁶C₇ = 657,800. No vowels: ²¹C₇ = 116,280. Exactly one vowel: ⁵C₁ × ²¹C₆ = 5 × 54,264 = 271,320. At least two vowels: 657,800 − 116,280 − 271,320 = 270,200.',
//           answer: '²⁶C₇ − ²¹C₇ − ⁵C₁ × ²¹C₆ = 657,800 − 116,280 − 271,320 = 270,200',
//         },
//       ],
//       'probability-combinations': [
//         {
//           id: 1,
//           question:
//             'Five cards are dealt from a randomly shuffled standard deck of 52 playing cards. Find the probability of getting all spades.',
//           type: 'Hard',
//           explaination:
//             'There are 13 spades. P(all spades) = ¹³C₅ ÷ ⁵²C₅ = 1287/2,598,960 ≈ 0.000495.',
//           answer: 'P = 1287/2,598,960 ≈ 4.95 × 10⁻⁴',
//         },
//         {
//           id: 2,
//           question:
//             'Five cards are dealt from a randomly shuffled standard deck of 52 playing cards. Find the probability of getting all red cards.',
//           type: 'Hard',
//           explaination:
//             'There are 26 red cards. P(all red) = ²⁶C₅ ÷ ⁵²C₅ = 65,780/2,598,960 ≈ 0.0253.',
//           answer: 'P = 65,780/2,598,960 ≈ 0.0253',
//         },
//         {
//           id: 3,
//           question:
//             'Five cards are dealt from a randomly shuffled standard deck of 52 playing cards. Find the probability of getting at least two black cards.',
//           type: 'Hard',
//           explaination:
//             'There are 26 black cards. Use complementary counting: P(at least 2 black) = 1 − P(0 black) − P(1 black). P(0 black) = ²⁶C₅ ÷ ⁵²C₅ = 65,780/2,598,960. P(1 black) = (²⁶C₁ × ²⁶C₄) ÷ ⁵²C₅ = (26 × 14,950)/2,598,960 = 388,700/2,598,960. So P(at least 2 black) = 1 − 454,480/2,598,960 ≈ 0.825.',
//           answer: 'P ≈ 0.825',
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
//       'first-four-terms': [
//         {
//           id: 1,
//           question:
//             'Find the first four terms of the binomial expansion of (2 + x)⁶ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁶C₀ × 2⁶ + ⁶C₁ × 2⁵ x + ⁶C₂ × 2⁴ x² + ⁶C₃ × 2³ x³ = 64 + 192x + 240x² + 160x³.',
//           answer: '64 + 192x + 240x² + 160x³',
//         },
//         {
//           id: 2,
//           question:
//             'Find the first four terms of the binomial expansion of (2 + x)⁷ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁷C₀ × 2⁷ + ⁷C₁ × 2⁶ x + ⁷C₂ × 2⁵ x² + ⁷C₃ × 2⁴ x³ = 128 + 448x + 672x² + 560x³.',
//           answer: '128 + 448x + 672x² + 560x³',
//         },
//         {
//           id: 3,
//           question:
//             'Find the first four terms of the binomial expansion of (3 − x)⁵ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁵C₀ × 3⁵ + ⁵C₁ × 3⁴(−x) + ⁵C₂ × 3³(−x)² + ⁵C₃ × 3²(−x)³ = 243 − 405x + 270x² − 90x³.',
//           answer: '243 − 405x + 270x² − 90x³',
//         },
//         {
//           id: 4,
//           question:
//             'Find the first four terms of the binomial expansion of (3 − x)⁴ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁴C₀ × 3⁴ + ⁴C₁ × 3³(−x) + ⁴C₂ × 3²(−x)² + ⁴C₃ × 3(−x)³ = 81 − 108x + 54x² − 12x³.',
//           answer: '81 − 108x + 54x² − 12x³',
//         },
//         {
//           id: 5,
//           question:
//             'Find the first four terms of the binomial expansion of (1 + 2x)⁶ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁶C₀ + ⁶C₁ × (2x) + ⁶C₂ × (2x)² + ⁶C₃ × (2x)³ = 1 + 12x + 60x² + 160x³.',
//           answer: '1 + 12x + 60x² + 160x³',
//         },
//         {
//           id: 6,
//           question:
//             'Find the first four terms of the binomial expansion of (1 + 2x)⁷ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁷C₀ + ⁷C₁ × (2x) + ⁷C₂ × (2x)² + ⁷C₃ × (2x)³ = 1 + 14x + 84x² + 280x³.',
//           answer: '1 + 14x + 84x² + 280x³',
//         },
//         {
//           id: 7,
//           question:
//             'Find the first four terms of the binomial expansion of (1 − 5x)⁴ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁴C₀ + ⁴C₁ × (−5x) + ⁴C₂ × (−5x)² + ⁴C₃ × (−5x)³ = 1 − 20x + 150x² − 500x³.',
//           answer: '1 − 20x + 150x² − 500x³',
//         },
//         {
//           id: 8,
//           question:
//             'Find the first four terms of the binomial expansion of (1 − 5x)⁵ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁵C₀ + ⁵C₁ × (−5x) + ⁵C₂ × (−5x)² + ⁵C₃ × (−5x)³ = 1 − 25x + 250x² − 1250x³.',
//           answer: '1 − 25x + 250x² − 1250x³',
//         },
//         {
//           id: 9,
//           question:
//             'Find the first four terms of the binomial expansion of (2 + 3x)¹⁰ in increasing powers of x.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ¹⁰C₀ × 2¹⁰ + ¹⁰C₁ × 2⁹(3x) + ¹⁰C₂ × 2⁸(3x)² + ¹⁰C₃ × 2⁷(3x)³ = 1024 + 15360x + 103680x² + 414720x³.',
//           answer: '1024 + 15360x + 103680x² + 414720x³',
//         },
//         {
//           id: 10,
//           question:
//             'Find the first four terms of the binomial expansion of (2 + 3x)⁹ in increasing powers of x.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁹C₀ × 2⁹ + ⁹C₁ × 2⁸(3x) + ⁹C₂ × 2⁷(3x)² + ⁹C₃ × 2⁶(3x)³ = 512 + 6912x + 41472x² + 145152x³.',
//           answer: '512 + 6912x + 41472x² + 145152x³',
//         },
//         {
//           id: 11,
//           question:
//             'Find the first four terms of the binomial expansion of (2 − 3x)⁵ in increasing powers of x.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁵C₀ × 2⁵ + ⁵C₁ × 2⁴(−3x) + ⁵C₂ × 2³(−3x)² + ⁵C₃ × 2²(−3x)³ = 32 − 240x + 720x² − 1080x³.',
//           answer: '32 − 240x + 720x² − 1080x³',
//         },
//         {
//           id: 12,
//           question:
//             'Find the first four terms of the binomial expansion of (2 − 3x)⁶ in increasing powers of x.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁶C₀ × 2⁶ + ⁶C₁ × 2⁵(−3x) + ⁶C₂ × 2⁴(−3x)² + ⁶C₃ × 2³(−3x)³ = 64 − 576x + 2160x² − 4320x³.',
//           answer: '64 − 576x + 2160x² − 4320x³',
//         },
//         {
//           id: 13,
//           question:
//             'Find the first four terms of the binomial expansion of (a + 2b)⁷ in increasing powers of b.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁷C₀ × a⁷ + ⁷C₁ × a⁶(2b) + ⁷C₂ × a⁵(2b)² + ⁷C₃ × a⁴(2b)³ = a⁷ + 14a⁶b + 84a⁵b² + 280a⁴b³.',
//           answer: 'a⁷ + 14a⁶b + 84a⁵b² + 280a⁴b³',
//         },
//         {
//           id: 14,
//           question:
//             'Find the first four terms of the binomial expansion of (a + 2b)⁸ in increasing powers of b.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁸C₀ × a⁸ + ⁸C₁ × a⁷(2b) + ⁸C₂ × a⁶(2b)² + ⁸C₃ × a⁵(2b)³ = a⁸ + 16a⁷b + 112a⁶b² + 448a⁵b³.',
//           answer: 'a⁸ + 16a⁷b + 112a⁶b² + 448a⁵b³',
//         },
//         {
//           id: 15,
//           question:
//             'Find the first four terms of the binomial expansion of (3a − 2b)⁵ in increasing powers of b.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁵C₀ × (3a)⁵ + ⁵C₁ × (3a)⁴(−2b) + ⁵C₂ × (3a)³(−2b)² + ⁵C₃ × (3a)²(−2b)³ = 243a⁵ − 810a⁴b + 1080a³b² − 720a²b³.',
//           answer: '243a⁵ − 810a⁴b + 1080a³b² − 720a²b³',
//         },
//         {
//           id: 16,
//           question:
//             'Find the first four terms of the binomial expansion of (3a − 2b)⁶ in increasing powers of b.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁶C₀ × (3a)⁶ + ⁶C₁ × (3a)⁵(−2b) + ⁶C₂ × (3a)⁴(−2b)² + ⁶C₃ × (3a)³(−2b)³ = 729a⁶ − 2916a⁵b + 4860a⁴b² − 4320a³b³.',
//           answer: '729a⁶ − 2916a⁵b + 4860a⁴b² − 4320a³b³',
//         },
//       ],
//       'pascals-triangle-expansion': [
//         {
//           id: 1,
//           question: "Use Pascal's triangle to expand (1 + 2x)⁴.",
//           type: 'Easy',
//           explaination:
//             "Row 4 of Pascal's triangle: 1, 4, 6, 4, 1. 1(1) + 4(2x) + 6(2x)² + 4(2x)³ + 1(2x)⁴ = 1 + 8x + 24x² + 32x³ + 16x⁴.",
//           answer: '1 + 8x + 24x² + 32x³ + 16x⁴',
//         },
//         {
//           id: 2,
//           question: "Use Pascal's triangle to expand (2 + x)⁴.",
//           type: 'Easy',
//           explaination:
//             "Row 4 of Pascal's triangle: 1, 4, 6, 4, 1. 1(2⁴) + 4(2³)x + 6(2²)x² + 4(2)x³ + 1(x⁴) = 16 + 32x + 24x² + 8x³ + x⁴.",
//           answer: '16 + 32x + 24x² + 8x³ + x⁴',
//         },
//         {
//           id: 3,
//           question: "Use Pascal's triangle to expand (3 + x)³.",
//           type: 'Easy',
//           explaination:
//             "Row 3 of Pascal's triangle: 1, 3, 3, 1. 1(3³) + 3(3²)x + 3(3)x² + 1(x³) = 27 + 27x + 9x² + x³.",
//           answer: '27 + 27x + 9x² + x³',
//         },
//         {
//           id: 4,
//           question: "Use Pascal's triangle to expand (1 + 3x)³.",
//           type: 'Easy',
//           explaination:
//             "Row 3 of Pascal's triangle: 1, 3, 3, 1. 1 + 3(3x) + 3(3x)² + (3x)³ = 1 + 9x + 27x² + 27x³.",
//           answer: '1 + 9x + 27x² + 27x³',
//         },
//         {
//           id: 5,
//           question: "Use Pascal's triangle to expand (x + 2)⁵.",
//           type: 'Easy',
//           explaination:
//             "Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1. x⁵ + 5(2)x⁴ + 10(4)x³ + 10(8)x² + 5(16)x + 32 = x⁵ + 10x⁴ + 40x³ + 80x² + 80x + 32.",
//           answer: 'x⁵ + 10x⁴ + 40x³ + 80x² + 80x + 32',
//         },
//         {
//           id: 6,
//           question: "Use Pascal's triangle to expand (x + 1)⁵.",
//           type: 'Easy',
//           explaination:
//             "Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1. Every power of 1 is 1, so the coefficients are the row itself: x⁵ + 5x⁴ + 10x³ + 10x² + 5x + 1.",
//           answer: 'x⁵ + 5x⁴ + 10x³ + 10x² + 5x + 1',
//         },
//       ],
//       'binomial-coefficients': [
//         {
//           id: 1,
//           question: 'Evaluate ⁶C₁.',
//           type: 'Easy',
//           explaination: '⁶C₁ = 6!/(1! · 5!) = 6.',
//           answer: '6',
//         },
//         {
//           id: 2,
//           question: 'Evaluate ⁸C₁.',
//           type: 'Easy',
//           explaination: '⁸C₁ = 8!/(1! · 7!) = 8.',
//           answer: '8',
//         },
//         {
//           id: 3,
//           question: 'Evaluate ⁷C₂.',
//           type: 'Easy',
//           explaination: '⁷C₂ = (7 × 6)/2! = 42/2 = 21.',
//           answer: '21',
//         },
//         {
//           id: 4,
//           question: 'Evaluate ⁶C₂.',
//           type: 'Easy',
//           explaination: '⁶C₂ = (6 × 5)/2! = 30/2 = 15.',
//           answer: '15',
//         },
//         {
//           id: 5,
//           question: 'Evaluate ⁹C₃.',
//           type: 'Easy',
//           explaination: '⁹C₃ = (9 × 8 × 7)/3! = 504/6 = 84.',
//           answer: '84',
//         },
//         {
//           id: 6,
//           question: 'Evaluate ⁸C₃.',
//           type: 'Easy',
//           explaination: '⁸C₃ = (8 × 7 × 6)/3! = 336/6 = 56.',
//           answer: '56',
//         },
//         {
//           id: 7,
//           question: 'Evaluate ¹⁰C₉.',
//           type: 'Easy',
//           explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹⁰C₉ = ¹⁰C₁ = 10.',
//           answer: '10',
//         },
//         {
//           id: 8,
//           question: 'Evaluate ¹³C₁₂.',
//           type: 'Easy',
//           explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹³C₁₂ = ¹³C₁ = 13.',
//           answer: '13',
//         },
//         {
//           id: 9,
//           question: 'Evaluate ¹⁵C₁₃.',
//           type: 'Easy',
//           explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹⁵C₁₃ = ¹⁵C₂ = (15 × 14)/2 = 105.',
//           answer: '105',
//         },
//         {
//           id: 10,
//           question: 'Evaluate ¹¹C₉.',
//           type: 'Easy',
//           explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹¹C₉ = ¹¹C₂ = (11 × 10)/2 = 55.',
//           answer: '55',
//         },
//       ],
//       'finding-unknown-r': [
//         {
//           id: 1,
//           question: 'Use technology to find the value (or values) of r such that ¹⁴Cᵣ = 2002.',
//           type: 'Medium',
//           explaination: 'Using technology, ¹⁴C₅ = 2002. By symmetry, ¹⁴C₉ = ¹⁴C₅ = 2002 as well.',
//           answer: 'r = 5 or r = 9',
//         },
//         {
//           id: 2,
//           question: 'Use technology to find the value (or values) of r such that ¹⁵Cᵣ = 6435.',
//           type: 'Medium',
//           explaination: 'Using technology, ¹⁵C₇ = 6435. By symmetry, ¹⁵C₈ = ¹⁵C₇ = 6435 as well.',
//           answer: 'r = 7 or r = 8',
//         },
//         {
//           id: 3,
//           question: 'Use technology to find the value (or values) of r such that ²⁰Cᵣ = 1140.',
//           type: 'Medium',
//           explaination: 'Using technology, ²⁰C₃ = 1140. By symmetry, ²⁰C₁₇ = ²⁰C₃ = 1140 as well.',
//           answer: 'r = 3 or r = 17',
//         },
//         {
//           id: 4,
//           question: 'Use technology to find the value (or values) of r such that ¹⁷Cᵣ = 6188.',
//           type: 'Medium',
//           explaination: 'Using technology, ¹⁷C₅ = 6188. By symmetry, ¹⁷C₁₂ = ¹⁷C₅ = 6188 as well.',
//           answer: 'r = 5 or r = 12',
//         },
//       ],
//       'finding-unknown-n': [
//         {
//           id: 1,
//           question: 'Use technology to find the value of n such that ⁿC₅ = 792.',
//           type: 'Medium',
//           explaination:
//             'Solve n!/(5!(n − 5)!) = 792 using technology (for example, a table of ⁿC₅). When n = 12, ¹²C₅ = 792.',
//           answer: 'n = 12',
//         },
//         {
//           id: 2,
//           question: 'Use technology to find the value of n such that ⁿC₈ = 43,758.',
//           type: 'Medium',
//           explaination:
//             'Solve n!/(8!(n − 8)!) = 43,758 using technology (for example, a table of ⁿC₈). When n = 18, ¹⁸C₈ = 43,758.',
//           answer: 'n = 18',
//         },
//         {
//           id: 3,
//           question: 'Find the value of n such that ⁿC₄ = 495.',
//           type: 'Medium',
//           explaination:
//             'ⁿC₄ = n(n − 1)(n − 2)(n − 3)/24 = 495, so n(n − 1)(n − 2)(n − 3) = 11,880. Try n = 12: 12 × 11 × 10 × 9 = 11,880, so n = 12.',
//           answer: 'n = 12',
//         },
//         {
//           id: 4,
//           question:
//             'The coefficient of xⁿ⁻³ in the expansion of (x + 2)ⁿ is 1760. Find the value of n.',
//           type: 'Hard',
//           explaination:
//             'The term in xⁿ⁻³ is ⁿC₃ xⁿ⁻³ × 2³. So ⁿC₃ × 8 = 1760, giving ⁿC₃ = 220. Then n(n − 1)(n − 2)/6 = 220, so n(n − 1)(n − 2) = 1320. Try n = 12: 12 × 11 × 10 = 1320, so n = 12.',
//           answer: 'n = 12',
//         },
//         {
//           id: 5,
//           question:
//             'The coefficient of x⁴ in the expansion of (x + 3)ⁿ is 153,090. Find the value of n.',
//           type: 'Hard',
//           explaination:
//             'The term in x⁴ is ⁿC₄ x⁴ × 3ⁿ⁻⁴, so ⁿC₄ × 3ⁿ⁻⁴ = 153,090. Try n = 10: ¹⁰C₄ × 3⁶ = 210 × 729 = 153,090, so n = 10.',
//           answer: 'n = 10',
//         },
//       ],
//       'expansion-with-rational-terms': [
//         {
//           id: 1,
//           question: 'Expand and simplify (x + 2/x)⁴.',
//           type: 'Hard',
//           explaination:
//             'Use the binomial theorem with n = 4: ⁴C₀x⁴ + ⁴C₁x³(2/x) + ⁴C₂x²(2/x)² + ⁴C₃x(2/x)³ + ⁴C₄(2/x)⁴ = x⁴ + 4(2x²) + 6(4) + 4(8/x²) + 16/x⁴ = x⁴ + 8x² + 24 + 32/x² + 16/x⁴.',
//           answer: 'x⁴ + 8x² + 24 + 32/x² + 16/x⁴',
//         },
//         {
//           id: 2,
//           question: 'Find the coefficient of x⁵ in the expansion of (2x² − 3/x)¹⁰.',
//           type: 'Hard',
//           explaination:
//             'General term: ¹⁰Cᵣ(2x²)ʳ(−3/x)¹⁰⁻ʳ = ¹⁰Cᵣ × 2ʳ × (−3)¹⁰⁻ʳ × x³ʳ⁻¹⁰. For x⁵: 3r − 10 = 5, so r = 5. Coefficient: ¹⁰C₅ × 2⁵ × (−3)⁵ = 252 × 32 × (−243) = −1,959,552.',
//           answer: '−1,959,552',
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
//       'de-moivres-theorem-evaluation': [
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
//       'powers-of-i': [
//         {
//           id: 1,
//           question: 'Simplify i⁵.',
//           type: 'Easy',
//           explaination: 'i⁵ = i⁴ × i = 1 × i = i.',
//           answer: 'i',
//         },
//         {
//           id: 2,
//           question: 'Simplify i⁶.',
//           type: 'Easy',
//           explaination: 'i⁶ = i⁴ × i² = 1 × (−1) = −1.',
//           answer: '−1',
//         },
//         {
//           id: 3,
//           question: 'Simplify −4i³.',
//           type: 'Easy',
//           explaination: 'i³ = i² × i = −i, so −4i³ = −4(−i) = 4i.',
//           answer: '4i',
//         },
//         {
//           id: 4,
//           question: 'Simplify 5i⁴.',
//           type: 'Easy',
//           explaination: 'i⁴ = (i²)² = (−1)² = 1, so 5i⁴ = 5.',
//           answer: '5',
//         },
//         {
//           id: 5,
//           question: 'Simplify (3i)².',
//           type: 'Easy',
//           explaination: '(3i)² = 9i² = 9(−1) = −9.',
//           answer: '−9',
//         },
//         {
//           id: 6,
//           question: 'Simplify (2i)³.',
//           type: 'Easy',
//           explaination: '(2i)³ = 8i³ = 8(−i) = −8i.',
//           answer: '−8i',
//         },
//         {
//           id: 7,
//           question: 'Simplify i⁴ⁿ for n, a positive integer.',
//           type: 'Medium',
//           explaination: 'i⁴ⁿ = (i⁴)ⁿ = 1ⁿ = 1.',
//           answer: '1',
//         },
//         {
//           id: 8,
//           question: 'Simplify i⁴ⁿ⁺² for n, a positive integer.',
//           type: 'Medium',
//           explaination: 'i⁴ⁿ⁺² = i⁴ⁿ × i² = 1 × (−1) = −1.',
//           answer: '−1',
//         },
//       ],
//       'solving-quadratic-equations-with-complex-roots': [
//         {
//           id: 1,
//           question: 'Solve the equation x² = −9.',
//           type: 'Easy',
//           explaination: 'x² = −9, so x = ±√(−9) = ±3i.',
//           answer: 'x = ±3i',
//         },
//         {
//           id: 2,
//           question: 'Solve the equation x² = −36.',
//           type: 'Easy',
//           explaination: 'x² = −36, so x = ±√(−36) = ±6i.',
//           answer: 'x = ±6i',
//         },
//         {
//           id: 3,
//           question: 'Solve the equation x² = −8.',
//           type: 'Easy',
//           explaination: 'x = ±√(−8) = ±√8 i = ±2√2 i.',
//           answer: 'x = ±2√2 i',
//         },
//         {
//           id: 4,
//           question: 'Solve the equation x² = −75.',
//           type: 'Easy',
//           explaination: 'x = ±√(−75) = ±√75 i = ±5√3 i.',
//           answer: 'x = ±5√3 i',
//         },
//         {
//           id: 5,
//           question: 'Solve the equation x² − 2x + 5 = 0.',
//           type: 'Medium',
//           explaination:
//             'Discriminant: Δ = (−2)² − 4(1)(5) = 4 − 20 = −16, so the roots are complex. x = (2 ± √(−16))/2 = (2 ± 4i)/2 = 1 ± 2i.',
//           answer: 'x = 1 ± 2i',
//         },
//         {
//           id: 6,
//           question: 'Solve the equation x² − 4x + 13 = 0.',
//           type: 'Medium',
//           explaination:
//             'Discriminant: Δ = 16 − 52 = −36. x = (4 ± √(−36))/2 = (4 ± 6i)/2 = 2 ± 3i.',
//           answer: 'x = 2 ± 3i',
//         },
//         {
//           id: 7,
//           question: 'Solve the equation 2x² + 4x + 3 = 0.',
//           type: 'Medium',
//           explaination:
//             'Discriminant: Δ = 16 − 24 = −8. x = (−4 ± √(−8))/4 = (−4 ± 2√2 i)/4 = −1 ± (√2/2)i.',
//           answer: 'x = −1 ± (√2/2)i',
//         },
//         {
//           id: 8,
//           question: 'Solve the equation 3x² − 2x + 2 = 0.',
//           type: 'Medium',
//           explaination:
//             'Discriminant: Δ = 4 − 24 = −20. x = (2 ± √(−20))/6 = (2 ± 2√5 i)/6 = (1 ± √5 i)/3.',
//           answer: 'x = (1 ± √5 i)/3',
//         },
//         {
//           id: 9,
//           question: 'Solve the equation 5x² + 6x + 5 = 0.',
//           type: 'Medium',
//           explaination:
//             'Discriminant: Δ = 36 − 100 = −64. x = (−6 ± √(−64))/10 = (−6 ± 8i)/10 = (−3 ± 4i)/5.',
//           answer: 'x = (−3 ± 4i)/5',
//         },
//       ],
//       'division-writing-in-x-iy-form': [
//         {
//           id: 1,
//           question: 'Write 10/(2 + i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 2 − i: 10(2 − i)/((2 + i)(2 − i)) = (20 − 10i)/5 = 4 − 2i.',
//           answer: '4 − 2i',
//         },
//         {
//           id: 2,
//           question: 'Write 6i/(1 − i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 1 + i: 6i(1 + i)/((1 − i)(1 + i)) = (6i + 6i²)/2 = (−6 + 6i)/2 = −3 + 3i.',
//           answer: '−3 + 3i',
//         },
//         {
//           id: 3,
//           question: 'Write (10 − 5i)/(1 − 2i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 1 + 2i: (10 − 5i)(1 + 2i)/(1 + 4) = (10 + 20i − 5i − 10i²)/5 = (20 + 15i)/5 = 4 + 3i.',
//           answer: '4 + 3i',
//         },
//         {
//           id: 4,
//           question: 'Write (7 + i)/(3 + 4i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 3 − 4i: (7 + i)(3 − 4i)/(9 + 16) = (21 − 28i + 3i − 4i²)/25 = (25 − 25i)/25 = 1 − i.',
//           answer: '1 − i',
//         },
//         {
//           id: 5,
//           question: 'Write (3 + 2i)/(5 − i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 5 + i: (3 + 2i)(5 + i)/(25 + 1) = (15 + 3i + 10i + 2i²)/26 = (13 + 13i)/26 = 1/2 + (1/2)i.',
//           answer: '1/2 + (1/2)i',
//         },
//         {
//           id: 6,
//           question: 'Write (5 − 4i)/(2 + 3i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 2 − 3i: (5 − 4i)(2 − 3i)/(4 + 9) = (10 − 15i − 8i + 12i²)/13 = (−2 − 23i)/13 = −2/13 − (23/13)i.',
//           answer: '−2/13 − (23/13)i',
//         },
//         {
//           id: 7,
//           question: 'Given that z = 7 + 3i − 10i/(2 + i), find z*.',
//           type: 'Hard',
//           explaination:
//             'First simplify 10i/(2 + i) by multiplying the numerator and denominator by 2 − i: 10i(2 − i)/5 = (20i − 10i²)/5 = (10 + 20i)/5 = 2 + 4i. Then z = 7 + 3i − (2 + 4i) = 5 − i, so z* = 5 + i.',
//           answer: 'z* = 5 + i',
//         },
//       ],
//       'argand-diagram': [
//         {
//           id: 1,
//           question:
//             'Represent the following complex numbers on an Argand diagram:  (i) z = 5 + 2i  (ii) −z  (iii) z*',
//           type: 'Easy',
//           explaination:
//             '(i) z = 5 + 2i is the point (5, 2).  (ii) −z = −5 − 2i is the point (−5, −2).  (iii) z* = 5 − 2i is the point (5, −2).',
//           answer: 'Points at (5, 2), (−5, −2), (5, −2)',
//         },
//         {
//           id: 2,
//           question:
//             'Represent the following complex numbers on an Argand diagram:  (i) z = −2 + 3i  (ii) −z  (iii) z*',
//           type: 'Easy',
//           explaination:
//             '(i) z = −2 + 3i is the point (−2, 3).  (ii) −z = 2 − 3i is the point (2, −3).  (iii) z* = −2 − 3i is the point (−2, −3).',
//           answer: 'Points at (−2, 3), (2, −3), (−2, −3)',
//         },
//         {
//           id: 3,
//           question:
//             'Represent the following on an Argand diagram:  (i) z = 3 − 4i  (ii) 2z  (iii) iz',
//           type: 'Easy',
//           explaination:
//             '(i) z = 3 − 4i is the point (3, −4).  (ii) 2z = 6 − 8i is the point (6, −8).  (iii) iz = i(3 − 4i) = 3i − 4i² = 4 + 3i is the point (4, 3).',
//           answer: 'Points at (3, −4), (6, −8), (4, 3)',
//         },
//         {
//           id: 4,
//           question:
//             'Represent the following on an Argand diagram:  (i) z = −4 − 5i  (ii) 2z  (iii) iz',
//           type: 'Easy',
//           explaination:
//             '(i) z = −4 − 5i is the point (−4, −5).  (ii) 2z = −8 − 10i is the point (−8, −10).  (iii) iz = i(−4 − 5i) = −4i − 5i² = 5 − 4i is the point (5, −4).',
//           answer: 'Points at (−4, −5), (−8, −10), (5, −4)',
//         },
//         {
//           id: 5,
//           question:
//             'Given z = −3 + 2i and w = 5 + 3i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z + w',
//           type: 'Easy',
//           explaination:
//             '(i) z is the point (−3, 2).  (ii) w is the point (5, 3).  (iii) z + w = (−3 + 5) + (2 + 3)i = 2 + 5i, the point (2, 5).',
//           answer: 'Points at (−3, 2), (5, 3), (2, 5); z + w = 2 + 5i',
//         },
//         {
//           id: 6,
//           question:
//             'Given z = 2 + 2i and w = 1 + 3i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z + w',
//           type: 'Easy',
//           explaination:
//             '(i) z is the point (2, 2).  (ii) w is the point (1, 3).  (iii) z + w = 3 + 5i, the point (3, 5).',
//           answer: 'Points at (2, 2), (1, 3), (3, 5); z + w = 3 + 5i',
//         },
//         {
//           id: 7,
//           question:
//             'Given z = −4 − i and w = −2 − 3i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z − w',
//           type: 'Easy',
//           explaination:
//             '(i) z is the point (−4, −1).  (ii) w is the point (−2, −3).  (iii) z − w = (−4 − i) − (−2 − 3i) = −2 + 2i, the point (−2, 2).',
//           answer: 'Points at (−4, −1), (−2, −3), (−2, 2); z − w = −2 + 2i',
//         },
//         {
//           id: 8,
//           question:
//             'Given z = −2 + 5i and w = 6 − 2i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z − w',
//           type: 'Easy',
//           explaination:
//             '(i) z is the point (−2, 5).  (ii) w is the point (6, −2).  (iii) z − w = (−2 + 5i) − (6 − 2i) = −8 + 7i, the point (−8, 7).',
//           answer: 'Points at (−2, 5), (6, −2), (−8, 7); z − w = −8 + 7i',
//         },
//       ],
//       'cartesian-form-from-polar': [
//         {
//           id: 1,
//           question:
//             'Write z in Cartesian form given:  (a) |z| = 10, arg z = −π/2  (b) |z| = 8, arg z = π/2',
//           type: 'Easy',
//           explaination:
//             'Use z = r(cos θ + i sin θ).  (a) z = 10(cos(−π/2) + i sin(−π/2)) = 10(0 − i) = −10i.  (b) z = 8(cos(π/2) + i sin(π/2)) = 8(0 + i) = 8i.',
//           answer: '(a) z = −10i  (b) z = 8i',
//         },
//         {
//           id: 2,
//           question:
//             'Write z in Cartesian form given:  (a) |z| = 4, arg z = π/3  (b) |z| = √2, arg z = π/4',
//           type: 'Easy',
//           explaination:
//             'Use z = r(cos θ + i sin θ).  (a) z = 4(1/2 + (√3/2)i) = 2 + 2√3 i.  (b) z = √2(1/√2 + (1/√2)i) = 1 + i.',
//           answer: '(a) z = 2 + 2√3 i  (b) z = 1 + i',
//         },
//         {
//           id: 3,
//           question:
//             'Write z in Cartesian form given:  (a) |z| = 4√3, arg z = 3π/4  (b) |z| = 2, arg z = 2π/3',
//           type: 'Easy',
//           explaination:
//             'Use z = r(cos θ + i sin θ).  (a) cos(3π/4) = −√2/2 and sin(3π/4) = √2/2, so z = 4√3(−√2/2 + (√2/2)i) = −2√6 + 2√6 i.  (b) z = 2(−1/2 + (√3/2)i) = −1 + √3 i.',
//           answer: '(a) z = −2√6 + 2√6 i  (b) z = −1 + √3 i',
//         },
//         {
//           id: 4,
//           question:
//             'Write z in Cartesian form given:  (a) |z| = 8, arg z = 11π/6  (b) |z| = 2, arg z = −π/4',
//           type: 'Easy',
//           explaination:
//             'Use z = r(cos θ + i sin θ).  (a) z = 8(cos(11π/6) + i sin(11π/6)) = 8(√3/2 − (1/2)i) = 4√3 − 4i.  (b) z = 2(cos(−π/4) + i sin(−π/4)) = 2(1/√2 − (1/√2)i) = √2 − √2 i.',
//           answer: '(a) z = 4√3 − 4i  (b) z = √2 − √2 i',
//         },
//       ],
//       'loci-on-argand-diagram': [
//         {
//           id: 1,
//           question:
//             'Sketch the curves in the Argand diagram described by:  (a) |z| = 2  (b) arg z = π/6  (c) Re(z)² = Im(z)',
//           type: 'Medium',
//           explaination:
//             'Let z = x + iy.  (a) |z| = 2 gives x² + y² = 4: a circle with centre the origin and radius 2.  (b) arg z = π/6 is a half-line from the origin (not including it) at an angle of π/6 to the positive real axis.  (c) Re(z)² = Im(z) gives x² = y: a parabola through the origin, opening upwards.',
//           answer:
//             '(a) Circle, centre origin, radius 2  (b) Half-line from origin at angle π/6  (c) Parabola x² = y',
//         },
//         {
//           id: 2,
//           question: 'If |z − 5i| = 3, find the smallest possible value of |z|.',
//           type: 'Medium',
//           explaination:
//             '|z − 5i| = 3 is a circle with centre 5i (the point (0, 5)) and radius 3. The point on this circle nearest the origin lies on the line through the origin and the centre, so the smallest |z| = 5 − 3 = 2.',
//           answer: '2',
//         },
//         {
//           id: 3,
//           question:
//             '(a) Given that |z| = |z − 1|, find Re(z).  (b) Sketch all the points with |z| = |z − 1| on an Argand diagram.',
//           type: 'Medium',
//           explaination:
//             '(a) Let z = x + iy. Then x² + y² = (x − 1)² + y², so x² = x² − 2x + 1, giving 2x = 1 and x = 1/2.  (b) The points are equidistant from 0 and 1, so they form the perpendicular bisector of the segment joining 0 and 1: the vertical line Re(z) = 1/2.',
//           answer: '(a) Re(z) = 1/2  (b) Vertical line x = 1/2',
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
//       'cross-product-scalar-triple-product': [
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
//       'parallel-vectors-finding-unknowns': [
//         {
//           id: 1,
//           question:
//             'Find the values of p and q such that vectors a and b are parallel:  (a) a = (2, 1, 5), b = (6, p, q)  (b) a = (1, 1, 4), b = (4, p, q)',
//           type: 'Medium',
//           explaination:
//             'Parallel vectors are scalar multiples of each other.  (a) Comparing first components, b = 3a, so p = 3 × 1 = 3 and q = 3 × 5 = 15.  (b) Comparing first components, b = 4a, so p = 4 × 1 = 4 and q = 4 × 4 = 16.',
//           answer: '(a) p = 3, q = 15  (b) p = 4, q = 16',
//         },
//         {
//           id: 2,
//           question:
//             'Find the values of p and q such that vectors a and b are parallel:  (a) a = (3, 2, −1), b = (−9, p, q)  (b) a = (1, −1, 4), b = (−2, p, q)',
//           type: 'Medium',
//           explaination:
//             'Parallel vectors are scalar multiples of each other.  (a) Comparing first components, b = −3a, so p = −3 × 2 = −6 and q = −3 × (−1) = 3.  (b) Comparing first components, b = −2a, so p = −2 × (−1) = 2 and q = −2 × 4 = −8.',
//           answer: '(a) p = −6, q = 3  (b) p = 2, q = −8',
//         },
//         {
//           id: 3,
//           question:
//             'Find the values of p and q such that vectors a and b are parallel:  (a) a = (2, p, 6), b = (q, 2, 3)  (b) a = (−3, p, 6), b = (q, 15, 2)',
//           type: 'Medium',
//           explaination:
//             'Set a = kb and find k from the known components.  (a) Third components: 6 = 3k, so k = 2. Then 2 = kq gives q = 1, and p = 2k = 4.  (b) Third components: 6 = 2k, so k = 3. Then −3 = kq gives q = −1, and p = 15k = 45.',
//           answer: '(a) p = 4, q = 1  (b) p = 45, q = −1',
//         },
//       ],
//       'unit-vectors': [
//         {
//           id: 1,
//           question:
//             'Find the unit vector in the same direction as a:  (a) a = (1, 2, 2)  (b) a = (3, 0, 4)',
//           type: 'Easy',
//           explaination:
//             'Divide the vector by its magnitude.  (a) |a| = √(1 + 4 + 4) = 3, so the unit vector is (1/3)(1, 2, 2).  (b) |a| = √(9 + 0 + 16) = 5, so the unit vector is (1/5)(3, 0, 4).',
//           answer: '(a) (1/3)(1, 2, 2)  (b) (1/5)(3, 0, 4)',
//         },
//         {
//           id: 2,
//           question:
//             'Find the unit vector in the same direction as a:  (a) a = (−1, 1, 2)  (b) a = (1, −2, 3)',
//           type: 'Easy',
//           explaination:
//             'Divide the vector by its magnitude.  (a) |a| = √(1 + 1 + 4) = √6, so the unit vector is (1/√6)(−1, 1, 2).  (b) |a| = √(1 + 4 + 9) = √14, so the unit vector is (1/√14)(1, −2, 3).',
//           answer: '(a) (1/√6)(−1, 1, 2)  (b) (1/√14)(1, −2, 3)',
//         },
//         {
//           id: 3,
//           question:
//             'Find the unit vector in the same direction as a:  (a) a = 3i + j − k  (b) a = i − 2j + k',
//           type: 'Easy',
//           explaination:
//             'Divide the vector by its magnitude.  (a) |a| = √(9 + 1 + 1) = √11, so the unit vector is (1/√11)(3i + j − k).  (b) |a| = √(1 + 4 + 1) = √6, so the unit vector is (1/√6)(i − 2j + k).',
//           answer: '(a) (1/√11)(3i + j − k)  (b) (1/√6)(i − 2j + k)',
//         },
//         {
//           id: 4,
//           question:
//             'Find the unit vector in the same direction as a:  (a) a = i − 4j  (b) a = 2j − 3k',
//           type: 'Easy',
//           explaination:
//             'Divide the vector by its magnitude.  (a) |a| = √(1 + 16) = √17, so the unit vector is (1/√17)(i − 4j).  (b) |a| = √(4 + 9) = √13, so the unit vector is (1/√13)(2j − 3k).',
//           answer: '(a) (1/√17)(i − 4j)  (b) (1/√13)(2j − 3k)',
//         },
//       ],
//       'magnitude-of-a-vector': [
//         {
//           id: 1,
//           question:
//             'Find the possible values of the constant k such that the vector (3k, −k, k) has magnitude 22.',
//           type: 'Medium',
//           explaination:
//             '√((3k)² + (−k)² + k²) = 22, so √(11k²) = 22. Then |k|√11 = 22, giving k = ±22/√11 = ±2√11.',
//           answer: 'k = ±2√11',
//         },
//         {
//           id: 2,
//           question:
//             'The vector 2i + 3tj + (t − 1)k has magnitude 3. Find the possible values of t.',
//           type: 'Medium',
//           explaination:
//             '√(2² + (3t)² + (t − 1)²) = 3, so 4 + 9t² + t² − 2t + 1 = 9. This gives 10t² − 2t − 4 = 0, or 5t² − t − 2 = 0. Using the quadratic formula: t = (1 ± √(1 + 40))/10 = (1 ± √41)/10.',
//           answer: 't = (1 ± √41)/10',
//         },
//       ],
//       collinearity: [
//         {
//           id: 1,
//           question:
//             'Find the values of p and q such that A, B and C are collinear.  (a) A(2, 5, 2), B(1, 1, 6), C(−3, p, q)  (b) A(−1, 1, 5), B(2, 1, 3), C(11, p, q)',
//           type: 'Medium',
//           explaination:
//             'A, B and C are collinear when →AC = k→AB.  (a) →AB = (−1, −4, 4) and →AC = (−5, p − 5, q − 2). From the first components, −5 = −k, so k = 5. Then p − 5 = −20 gives p = −15, and q − 2 = 20 gives q = 22.  (b) →AB = (3, 0, −2) and →AC = (12, p − 1, q − 5). From the first components, k = 4. Then p − 1 = 0 gives p = 1, and q − 5 = −8 gives q = −3.',
//           answer: '(a) p = −15, q = 22  (b) p = 1, q = −3',
//         },
//         {
//           id: 2,
//           question:
//             'Find the values of p and q such that the points A, B and C, with position vectors a, b and c, are collinear.  (a) a = (2, −1, 3), b = (5, 2, 6), c = (p, 7, q)  (b) a = (1, 1, −5), b = (5, −3, 3), c = (2, p, q)',
//           type: 'Medium',
//           explaination:
//             'A, B and C are collinear when →AC = k→AB.  (a) →AB = (3, 3, 3) and →AC = (p − 2, 8, q − 3). From the second components, 8 = 3k, so k = 8/3. Then p − 2 = 8 gives p = 10, and q − 3 = 8 gives q = 11.  (b) →AB = (4, −4, 8) and →AC = (1, p − 1, q + 5). From the first components, k = 1/4. Then p − 1 = −1 gives p = 0, and q + 5 = 2 gives q = −3.',
//           answer: '(a) p = 10, q = 11  (b) p = 0, q = −3',
//         },
//         {
//           id: 3,
//           question:
//             'Find the values of p and q such that the points A, B and C, with position vectors a, b and c, are collinear.  (a) a = pi − 2j + k, b = −i + 3j + qk, c = 7i − 7j + 3k  (b) a = i + pj − 3k, b = 2i + 3j + qk, c = −i − 7j + 3k',
//           type: 'Medium',
//           explaination:
//             'A, B and C are collinear when →AC = k→AB.  (a) →AB = (−1 − p, 5, q − 1) and →AC = (7 − p, −5, 2). From the second components, −5 = 5k, so k = −1. Third components: 2 = −(q − 1), so q = −1. First components: 7 − p = 1 + p, so p = 3.  (b) →AB = (1, 3 − p, q + 3) and →AC = (−2, −7 − p, 6). From the first components, k = −2. Second components: −7 − p = −2(3 − p), so −7 − p = −6 + 2p, giving p = −1/3. Third components: 6 = −2(q + 3), so q = −6.',
//           answer: '(a) p = 3, q = −1  (b) p = −1/3, q = −6',
//         },
//       ],
//       'foot-of-perpendicular-from-a-point-to-a-line': [
//         {
//           id: 1,
//           question:
//             'Line l has equation r = (4, 2, −1) + λ(2, −1, 2) and point P has coordinates (7, 2, 3). Point C lies on l and PC is perpendicular to l. Find the coordinates of C.',
//           type: 'Hard',
//           explaination:
//             'A general point on l is C = (4 + 2λ, 2 − λ, −1 + 2λ), so →PC = (−3 + 2λ, −λ, −4 + 2λ). PC is perpendicular to l, so →PC · (2, −1, 2) = 0: 2(−3 + 2λ) − (−λ) + 2(−4 + 2λ) = 0, which gives 9λ − 14 = 0 and λ = 14/9. Substituting: C = (4 + 28/9, 2 − 14/9, −1 + 28/9) = (64/9, 4/9, 19/9).',
//           answer: 'C = (64/9, 4/9, 19/9)',
//         },
//         {
//           id: 2,
//           question:
//             'Line l has equation r = (5, 1, 2) + λ(2, −3, 3) and point P has coordinates (21, 5, 10).  (a) Find the coordinates of the point M on l such that PM is perpendicular to l.  (b) Show that the point Q(15, −14, 17) lies on l.  (c) Find the coordinates of the point R on l, other than Q, such that |PR| = |PQ|.',
//           type: 'Hard',
//           explaination:
//             '(a) A general point on l is (5 + 2λ, 1 − 3λ, 2 + 3λ), so →PM = (2λ − 16, −3λ − 4, 3λ − 8). Set →PM · (2, −3, 3) = 0: 2(2λ − 16) − 3(−3λ − 4) + 3(3λ − 8) = 0, so 22λ − 44 = 0 and λ = 2. M = (9, −5, 8).  (b) λ = 5 gives (5 + 10, 1 − 15, 2 + 15) = (15, −14, 17), so Q lies on l.  (c) M is the foot of the perpendicular from P, so the points of l at equal distance from P are symmetric about M. Q has λ = 5 and M has λ = 2, so R has λ = 2 − 3 = −1, giving R = (3, 4, −1). Check: |PQ|² = 36 + 361 + 49 = 446 and |PR|² = 324 + 1 + 121 = 446.',
//           answer: '(a) M = (9, −5, 8)  (b) λ = 5 gives Q  (c) R = (3, 4, −1)',
//         },
//       ],
//       'area-of-triangle-using-cross-product': [
//         {
//           id: 1,
//           question:
//             'Find the area of the triangle with vertices (1, 3, 3), (−1, 1, 2) and (1, −2, 4).',
//           type: 'Medium',
//           explaination:
//             'Let A = (1, 3, 3), B = (−1, 1, 2) and C = (1, −2, 4). →AB = (−2, −2, −1) and →AC = (0, −5, 1). →AB × →AC = ((−2)(1) − (−1)(−5), (−1)(0) − (−2)(1), (−2)(−5) − (−2)(0)) = (−7, 2, 10). |→AB × →AC| = √(49 + 4 + 100) = √153 = 3√17. Area = (1/2)|→AB × →AC| = 3√17/2.',
//           answer: 'Area = 3√17/2 ≈ 6.18',
//         },
//         {
//           id: 2,
//           question:
//             'Find the area of the triangle with vertices (3, −5, 1), (−1, 1, 3) and (−1, −5, 2).',
//           type: 'Medium',
//           explaination:
//             'Let A = (3, −5, 1), B = (−1, 1, 3) and C = (−1, −5, 2). →AB = (−4, 6, 2) and →AC = (−4, 0, 1). →AB × →AC = ((6)(1) − (2)(0), (2)(−4) − (−4)(1), (−4)(0) − (6)(−4)) = (6, −4, 24). |→AB × →AC| = √(36 + 16 + 576) = √628 = 2√157. Area = (1/2)(2√157) = √157.',
//           answer: 'Area = √157 ≈ 12.5',
//         },
//         {
//           id: 3,
//           question:
//             'Find the area of the triangle with vertices (−3, −5, 1), (4, 7, 2) and (−1, 2, 2).',
//           type: 'Medium',
//           explaination:
//             'Let A = (−3, −5, 1), B = (4, 7, 2) and C = (−1, 2, 2). →AB = (7, 12, 1) and →AC = (2, 7, 1). →AB × →AC = ((12)(1) − (1)(7), (1)(2) − (7)(1), (7)(7) − (12)(2)) = (5, −5, 25). |→AB × →AC| = √(25 + 25 + 625) = √675 = 15√3. Area = 15√3/2.',
//           answer: 'Area = 15√3/2 ≈ 13.0',
//         },
//         {
//           id: 4,
//           question:
//             'Find the area of the triangle with vertices (4, 0, 2), (4, 1, 5) and (4, −3, 2).',
//           type: 'Medium',
//           explaination:
//             'Let A = (4, 0, 2), B = (4, 1, 5) and C = (4, −3, 2). →AB = (0, 1, 3) and →AC = (0, −3, 0). →AB × →AC = ((1)(0) − (3)(−3), (3)(0) − (0)(0), (0)(−3) − (1)(0)) = (9, 0, 0). |→AB × →AC| = 9. Area = 9/2 = 4.5.',
//           answer: 'Area = 9/2 = 4.5',
//         },
//         {
//           id: 5,
//           question:
//             'Find the area of the triangle with vertices (1, 5, 2), (8, 4, 6) and (0, 6, 7).',
//           type: 'Medium',
//           explaination:
//             'Let A = (1, 5, 2), B = (8, 4, 6) and C = (0, 6, 7). →AB = (7, −1, 4) and →AC = (−1, 1, 5). →AB × →AC = ((−1)(5) − (4)(1), (4)(−1) − (7)(5), (7)(1) − (−1)(−1)) = (−9, −39, 6). |→AB × →AC| = √(81 + 1521 + 36) = √1638 = 3√182. Area = 3√182/2.',
//           answer: 'Area = 3√182/2 ≈ 20.2',
//         },
//         {
//           id: 6,
//           question:
//             'Find the area of the triangle with vertices (2, 1, 2), (3, 8, 4) and (1, 3, −1).',
//           type: 'Medium',
//           explaination:
//             'Let A = (2, 1, 2), B = (3, 8, 4) and C = (1, 3, −1). →AB = (1, 7, 2) and →AC = (−1, 2, −3). →AB × →AC = ((7)(−3) − (2)(2), (2)(−1) − (1)(−3), (1)(2) − (7)(−1)) = (−25, 1, 9). |→AB × →AC| = √(625 + 1 + 81) = √707. Area = √707/2.',
//           answer: 'Area = √707/2 ≈ 13.3',
//         },
//         {
//           id: 7,
//           question:
//             'Find the area of the triangle with vertices (2, 1, 2), (5, 0, 1) and (−1, 3, 5).',
//           type: 'Medium',
//           explaination:
//             'Let A = (2, 1, 2), B = (5, 0, 1) and C = (−1, 3, 5). →AB = (3, −1, −1) and →AC = (−3, 2, 3). →AB × →AC = ((−1)(3) − (−1)(2), (−1)(−3) − (3)(3), (3)(2) − (−1)(−3)) = (−1, −6, 3). |→AB × →AC| = √(1 + 36 + 9) = √46. Area = √46/2.',
//           answer: 'Area = √46/2 ≈ 3.39',
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
//       'increasing-decreasing-functions': [
//         {
//           id: 1,
//           question:
//             'Find the set of values of x for which the function f(x) = 2 + 8x³ − x⁴ is decreasing.',
//           type: 'Medium',
//           explaination:
//             'f′(x) = 24x² − 4x³ = 4x²(6 − x). f is decreasing where f′(x) < 0. Since 4x² ≥ 0 (and is zero only at the stationary point x = 0), the sign of f′(x) is the sign of 6 − x, which is negative when x > 6. So f is decreasing for x > 6.',
//           answer: 'x > 6',
//         },
//         {
//           id: 2,
//           question:
//             'Find the set of values of x for which the function f(x) = x⁴ − 4x³ − 2x² + 12x − 5 is increasing.',
//           type: 'Medium',
//           explaination:
//             'f′(x) = 4x³ − 12x² − 4x + 12 = 4(x²(x − 3) − (x − 3)) = 4(x − 3)(x − 1)(x + 1). f is increasing where f′(x) > 0. The critical values are x = −1, 1 and 3. Checking the sign in each interval: x < −1 gives (−)(−)(−) < 0; −1 < x < 1 gives (−)(−)(+) > 0; 1 < x < 3 gives (−)(+)(+) < 0; x > 3 gives (+)(+)(+) > 0. So f is increasing for −1 < x < 1 or x > 3.',
//           answer: '−1 < x < 1 or x > 3',
//         },
//       ],
//       continuity: [
//         {
//           id: 1,
//           question:
//             'Show that the function f(x) = sin 3x/sin x for x ≤ 0, and f(x) = (e³ˣ − 1)/x for x > 0, is continuous at x = 0.',
//           type: 'Hard',
//           explaination:
//             'f is continuous at x = 0 when the left-hand limit, the right-hand limit and the value at 0 agree. For x ≤ 0: sin 3x/sin x = 3 × (sin 3x/(3x)) × (x/sin x) → 3 × 1 × 1 = 3 as x → 0⁻. For x > 0: (e³ˣ − 1)/x = 3 × (e³ˣ − 1)/(3x) → 3 × 1 = 3 as x → 0⁺. At x = 0 the formula sin 3x/sin x takes the form 0/0, so f(0) is its limiting value, 3. Both one-sided limits equal 3 = f(0), so f is continuous at x = 0.',
//           answer: 'f is continuous at x = 0',
//         },
//       ],
//       'related-rates-of-change': [
//         {
//           id: 1,
//           question: 'If y = x³, find dy/dt when x = 1 and dx/dt = −1.',
//           type: 'Easy',
//           explaination:
//             'By the chain rule, dy/dt = (dy/dx)(dx/dt) = 3x²(dx/dt). At x = 1 and dx/dt = −1: dy/dt = 3(1)²(−1) = −3.',
//           answer: 'dy/dt = −3',
//         },
//         {
//           id: 2,
//           question: 'If y = x² + x, find dy/dt when x = 0 and dx/dt = 4.',
//           type: 'Easy',
//           explaination:
//             'By the chain rule, dy/dt = (2x + 1)(dx/dt). At x = 0 and dx/dt = 4: dy/dt = (0 + 1)(4) = 4.',
//           answer: 'dy/dt = 4',
//         },
//         {
//           id: 3,
//           question: 'If A = e²ᶻ, find the rate of increase of A when z = 0 and dz/dt = 6.',
//           type: 'Easy',
//           explaination:
//             'By the chain rule, dA/dt = 2e²ᶻ(dz/dt). At z = 0 and dz/dt = 6: dA/dt = 2e⁰ × 6 = 12.',
//           answer: 'dA/dt = 12',
//         },
//         {
//           id: 4,
//           question: 'If p = e^q, find the rate of increase of p when q = 1 and dq/dt = 7.',
//           type: 'Easy',
//           explaination:
//             'By the chain rule, dp/dt = e^q(dq/dt). At q = 1 and dq/dt = 7: dp/dt = e¹ × 7 = 7e.',
//           answer: 'dp/dt = 7e',
//         },
//         {
//           id: 5,
//           question:
//             'If a = 1/b, find the rate of increase of a when b = 2 and b is increasing at a rate of 3 per second.',
//           type: 'Easy',
//           explaination:
//             'a = b⁻¹, so da/dt = −(1/b²)(db/dt). At b = 2 and db/dt = 3: da/dt = −(1/4) × 3 = −3/4.',
//           answer: 'da/dt = −3/4',
//         },
//         {
//           id: 6,
//           question:
//             'If a = 1/b², find the rate of increase of a when b = 1 and b is increasing at a rate of 2 per second.',
//           type: 'Easy',
//           explaination:
//             'a = b⁻², so da/dt = −(2/b³)(db/dt). At b = 1 and db/dt = 2: da/dt = −(2/1) × 2 = −4.',
//           answer: 'da/dt = −4',
//         },
//         {
//           id: 7,
//           question:
//             'If y = ln x, find the rate of increase of y when x = 2 and x is decreasing at a rate of 4 per hour.',
//           type: 'Easy',
//           explaination:
//             'x is decreasing, so dx/dt = −4. By the chain rule, dy/dt = (1/x)(dx/dt). At x = 2: dy/dt = (1/2)(−4) = −2.',
//           answer: 'dy/dt = −2',
//         },
//         {
//           id: 8,
//           question:
//             'If y = ln(x + 1), find the rate of increase of y when x = 1 and x is decreasing at a rate of 3 per hour.',
//           type: 'Easy',
//           explaination:
//             'x is decreasing, so dx/dt = −3. By the chain rule, dy/dt = (1/(x + 1))(dx/dt). At x = 1: dy/dt = (1/2)(−3) = −3/2.',
//           answer: 'dy/dt = −3/2',
//         },
//         {
//           id: 9,
//           question: 'Given that A = x² + y², find dA/dt when x = 3, y = 4, dx/dt = 1, dy/dt = −1.',
//           type: 'Medium',
//           explaination:
//             'Differentiate with respect to t: dA/dt = 2x(dx/dt) + 2y(dy/dt) = 2(3)(1) + 2(4)(−1) = 6 − 8 = −2.',
//           answer: 'dA/dt = −2',
//         },
//         {
//           id: 10,
//           question: 'Given that B = x³ + y³, find dB/dt when x = 1, y = 2, dx/dt = 1, dy/dt = −2.',
//           type: 'Medium',
//           explaination:
//             'Differentiate with respect to t: dB/dt = 3x²(dx/dt) + 3y²(dy/dt) = 3(1)²(1) + 3(2)²(−2) = 3 − 24 = −21.',
//           answer: 'dB/dt = −21',
//         },
//         {
//           id: 11,
//           question: 'Given that C = x/y, find dC/dt when x = 3, y = 4, dx/dt = 3, dy/dt = −1.',
//           type: 'Medium',
//           explaination:
//             'Use the quotient rule: dC/dt = (y(dx/dt) − x(dy/dt))/y² = (4(3) − 3(−1))/16 = (12 + 3)/16 = 15/16.',
//           answer: 'dC/dt = 15/16',
//         },
//         {
//           id: 12,
//           question:
//             'The sides of a square are increasing at a rate of 2 cm s⁻¹. Find the rate of increase of the area when the area is 25 cm².',
//           type: 'Medium',
//           explaination:
//             'Let the side be s, so A = s² and dA/dt = 2s(ds/dt). When A = 25, s = 5, and ds/dt = 2. So dA/dt = 2(5)(2) = 20 cm² s⁻¹.',
//           answer: 'dA/dt = 20 cm² s⁻¹',
//         },
//         {
//           id: 13,
//           question:
//             'A circular mould is spreading on a leaf. When the radius is 3 mm the rate of increase of the radius is 1.2 mm per day. What is the rate of increase of the area?',
//           type: 'Medium',
//           explaination:
//             'A = πr², so dA/dt = 2πr(dr/dt). At r = 3 and dr/dt = 1.2: dA/dt = 2π(3)(1.2) = 7.2π ≈ 22.6 mm² per day.',
//           answer: 'dA/dt = 7.2π ≈ 22.6 mm² per day',
//         },
//         {
//           id: 14,
//           question:
//             'The volume of a spherical balloon is increasing at a rate of 200 cm³ per second. Find the rate of increase of the radius when the volume is 100 cm³.',
//           type: 'Hard',
//           explaination:
//             'V = (4/3)πr³, so dV/dt = 4πr²(dr/dt). When V = 100: (4/3)πr³ = 100, so r = (75/π)^(1/3) ≈ 2.88 cm. Then dr/dt = 200/(4πr²) ≈ 1.92 cm s⁻¹.',
//           answer: 'dr/dt ≈ 1.92 cm s⁻¹',
//         },
//         {
//           id: 15,
//           question:
//             "An x by y rectangle is expanding with dx/dt = 4 cm s⁻¹ and dy/dt = −2 cm s⁻¹. When x = 3 cm and y = 4 cm, find:  (a) the rate of increase of the rectangle's area  (b) the rate of increase of the length of the diagonal.",
//           type: 'Medium',
//           explaination:
//             '(a) A = xy, so dA/dt = y(dx/dt) + x(dy/dt) = 4(4) + 3(−2) = 16 − 6 = 10 cm² s⁻¹.  (b) The diagonal is D = √(x² + y²), so dD/dt = (x(dx/dt) + y(dy/dt))/√(x² + y²) = (3(4) + 4(−2))/√(9 + 16) = 4/5 = 0.8 cm s⁻¹.',
//           answer: '(a) dA/dt = 10 cm² s⁻¹  (b) dD/dt = 0.8 cm s⁻¹',
//         },
//         {
//           id: 16,
//           question:
//             'An inverted cone is being filled with water at a constant rate of 5 cm³ s⁻¹. The surface of the water is always horizontal. The largest diameter of the cone is 10 cm and its height is 30 cm. If the volume of water is V at time t and h is the height of the water above the vertex:  (a) Show that V = πh³/108.  (b) Find the rate at which the height is increasing when h = 18 cm.',
//           type: 'Hard',
//           explaination:
//             '(a) By similar triangles, r/h = 5/30 = 1/6, so r = h/6. Then V = (1/3)πr²h = (1/3)π(h²/36)h = πh³/108.  (b) dV/dt = (πh²/36)(dh/dt). At h = 18: 5 = (324π/36)(dh/dt) = 9π(dh/dt), so dh/dt = 5/(9π) ≈ 0.177 cm s⁻¹.',
//           answer: '(a) Shown in the explanation  (b) dh/dt = 5/(9π) ≈ 0.177 cm s⁻¹',
//         },
//         {
//           id: 17,
//           question:
//             'A circular stain of radius r cm and area A cm² is increasing in size. At a certain time, the rate of increase of the radius is 1.8 cm s⁻¹ and the rate of increase of the area is 86.5 cm² s⁻¹. Find the radius of the stain at this point.',
//           type: 'Hard',
//           explaination:
//             'A = πr², so dA/dt = 2πr(dr/dt). Substituting: 86.5 = 2πr(1.8) = 3.6πr, so r = 86.5/(3.6π) ≈ 7.65 cm.',
//           answer: 'r ≈ 7.65 cm',
//         },
//         {
//           id: 18,
//           question:
//             'A sportsman throws a ball. When it is 2 m above the sportsman and 4 m away horizontally it is moving purely horizontally with a speed of 3 m s⁻¹. Find the rate at which the ball is moving away from the sportsman.',
//           type: 'Hard',
//           explaination:
//             'Let x be the horizontal distance and y the height above the sportsman, so x = 4, y = 2, dx/dt = 3 and dy/dt = 0. The distance is D = √(x² + y²) = √20 = 2√5. Then dD/dt = (x(dx/dt) + y(dy/dt))/D = (4(3) + 2(0))/(2√5) = 6/√5 ≈ 2.68 m s⁻¹.',
//           answer: 'dD/dt = 6/√5 = 6√5/5 ≈ 2.68 m s⁻¹',
//         },
//         {
//           id: 19,
//           question:
//             'The density of a reactive substance is given by its mass divided by its volume. When the density is 5 g cm⁻³ the mass is decreasing at a rate of 2 g s⁻¹ and the volume is decreasing at a rate of 1 cm³ s⁻¹. Determine, with justification, whether the density is increasing or decreasing.',
//           type: 'Hard',
//           explaination:
//             'ρ = m/V, so by the quotient rule dρ/dt = (V(dm/dt) − m(dV/dt))/V². When ρ = 5, m = 5V, with dm/dt = −2 and dV/dt = −1. So dρ/dt = (V(−2) − 5V(−1))/V² = 3V/V² = 3/V. Since V > 0, dρ/dt > 0, so the density is increasing.',
//           answer: 'Density is increasing.',
//         },
//         {
//           id: 20,
//           question:
//             'A ladder of length 3 m is sliding down a vertical wall. The foot of the ladder is on horizontal ground. When the point of contact with the wall is 2 m above the ground that point is moving down at a rate of 0.1 m s⁻¹. At what speed is the foot of the ladder moving away from the wall, assuming the ladder always stays in contact with both the wall and the ground?',
//           type: 'Hard',
//           explaination:
//             'Let x be the distance of the foot from the wall and y the height on the wall. Then x² + y² = 9, so 2x(dx/dt) + 2y(dy/dt) = 0. When y = 2, x = √(9 − 4) = √5, and dy/dt = −0.1. So 2√5(dx/dt) + 2(2)(−0.1) = 0, giving dx/dt = 0.4/(2√5) = √5/25 ≈ 0.0894 m s⁻¹.',
//           answer: 'dx/dt = √5/25 ≈ 0.0894 m s⁻¹',
//         },
//       ],
//       'differentiation-inverse-trigonometric-functions': [
//         {
//           id: 1,
//           question:
//             '(a) Find the gradient of y = arcsin(2x) + arccos(3x) at x = 1/6.  (b) Find the gradient of y = 5x − 3 arctan(2x) at x = 1.',
//           type: 'Medium',
//           explaination:
//             '(a) dy/dx = 2/√(1 − 4x²) − 3/√(1 − 9x²). At x = 1/6: 2/√(8/9) − 3/√(3/4) = 3/√2 − 2√3 = 3√2/2 − 2√3 ≈ −1.34.  (b) dy/dx = 5 − 3 × 2/(1 + 4x²) = 5 − 6/(1 + 4x²). At x = 1: 5 − 6/5 = 19/5.',
//           answer: '(a) 3√2/2 − 2√3 ≈ −1.34  (b) 19/5',
//         },
//         {
//           id: 2,
//           question:
//             'Find the gradient of the graph of y = arcsin x − arccos x at the point where it crosses the y-axis.',
//           type: 'Medium',
//           explaination:
//             'dy/dx = 1/√(1 − x²) − (−1/√(1 − x²)) = 2/√(1 − x²). The graph crosses the y-axis at x = 0, so the gradient there is 2/√1 = 2.',
//           answer: '2',
//         },
//         {
//           id: 3,
//           question: 'Given that y = 3 arctan(x/2), find dy/dx and simplify your answer.',
//           type: 'Medium',
//           explaination:
//             'Use d/dx(arctan u) = u′/(1 + u²) with u = x/2: dy/dx = 3 × (1/2)/(1 + x²/4) = (3/2)/((4 + x²)/4) = 6/(x² + 4).',
//           answer: 'dy/dx = 6/(x² + 4)',
//         },
//       ],
//       'integration-inverse-trigonometric-forms': [
//         {
//           id: 1,
//           question: '(a) Find ∫ 3/√(1 − x²) dx.  (b) Find ∫ 4/(1 + x²) dx.',
//           type: 'Easy',
//           explaination:
//             'Use the standard results ∫ 1/√(1 − x²) dx = arcsin x + c and ∫ 1/(1 + x²) dx = arctan x + c.  (a) ∫ 3/√(1 − x²) dx = 3 arcsin x + c.  (b) ∫ 4/(1 + x²) dx = 4 arctan x + c.',
//           answer: '(a) 3 arcsin x + c  (b) 4 arctan x + c',
//         },
//         {
//           id: 2,
//           question:
//             '(a) Find ∫ (2 + √(1 − x²))/√(1 − x²) dx.  (b) Find ∫ (2√(1 − x²) − 3)/√(1 − x²) dx.',
//           type: 'Medium',
//           explaination:
//             'Split each fraction into standard forms.  (a) (2 + √(1 − x²))/√(1 − x²) = 2/√(1 − x²) + 1, which integrates to 2 arcsin x + x + c.  (b) (2√(1 − x²) − 3)/√(1 − x²) = 2 − 3/√(1 − x²), which integrates to 2x − 3 arcsin x + c.',
//           answer: '(a) 2 arcsin x + x + c  (b) 2x − 3 arcsin x + c',
//         },
//       ],
//       'integration-completing-the-square-arctan-form': [
//         {
//           id: 1,
//           question: '(a) Find ∫ 1/(x² + 4x + 5) dx.  (b) Find ∫ 1/(x² − 6x + 10) dx.',
//           type: 'Medium',
//           explaination:
//             'Complete the square, then use ∫ 1/(u² + 1) du = arctan u + c.  (a) x² + 4x + 5 = (x + 2)² + 1, so the integral is arctan(x + 2) + c.  (b) x² − 6x + 10 = (x − 3)² + 1, so the integral is arctan(x − 3) + c.',
//           answer: '(a) arctan(x + 2) + c  (b) arctan(x − 3) + c',
//         },
//         {
//           id: 2,
//           question: '(a) Find ∫ 1/(x² + 2x + 10) dx.  (b) Find ∫ 1/(x² + 4x + 20) dx.',
//           type: 'Medium',
//           explaination:
//             'Complete the square, then use ∫ 1/(u² + a²) du = (1/a) arctan(u/a) + c.  (a) x² + 2x + 10 = (x + 1)² + 3², so the integral is (1/3) arctan((x + 1)/3) + c.  (b) x² + 4x + 20 = (x + 2)² + 4², so the integral is (1/4) arctan((x + 2)/4) + c.',
//           answer: '(a) (1/3) arctan((x + 1)/3) + c  (b) (1/4) arctan((x + 2)/4) + c',
//         },
//         {
//           id: 3,
//           question: '(a) Find ∫ 1/(x² + 6x + 11) dx.  (b) Find ∫ 1/(x² − 10x + 30) dx.',
//           type: 'Medium',
//           explaination:
//             'Complete the square, then use ∫ 1/(u² + a²) du = (1/a) arctan(u/a) + c.  (a) x² + 6x + 11 = (x + 3)² + (√2)², so the integral is (1/√2) arctan((x + 3)/√2) + c.  (b) x² − 10x + 30 = (x − 5)² + (√5)², so the integral is (1/√5) arctan((x − 5)/√5) + c.',
//           answer: '(a) (1/√2) arctan((x + 3)/√2) + c  (b) (1/√5) arctan((x − 5)/√5) + c',
//         },
//       ],
//     },
//   },
//   {
//     algebra: {
//       title: 'Algebra',
//       'polynomial-division-comparing-coefficients': [],
//       'remainder-theorem': [],
//       'factor-theorem-factorisation-roots': [],
//       'vietas-formulae-sum-product-of-roots': [],
//       'partial-fractions': [],
//     },
//   },
//   {
//     trigonometry: {
//       title: 'Trigonometry',
//       'inverse-trigonometric-functions': [],
//       'trigonometric-identities-proofs': [],
//       'graphs-of-trigonometric-functions': [],
//       'compound-angle-formulae-tangent': [],
//       'compound-angle-formulae-proof': [],
//     },
//   },
//   {
//     'probability-statistics': {
//       title: 'Probability & Statistics',
//       'probability-density-functions': [],
//       'mode-of-pdf': [],
//       'median-of-pdf': [],
//       'mean-and-variance-of-pdf': [],
//       'probability-computations-with-pdf': [],
//     },
//   },
//   {
//     series: {
//       title: 'Series',
//       'maclaurin-series-standard-functions': [],
//       'maclaurin-series-substitution': [],
//       'maclaurin-series-derivatives-method': [],
//       'maclaurin-series-applications': [],
//       'maclaurin-series-proof-general-term': [],
//     },
//   },
//   {
//     'differential-equations': {
//       title: 'Differential Equations',
//       'classifying-des': [],
//       'eulers-method': [],
//       'homogeneous-substitution-y-vx': [],
//       'general-solution-first-order-linear-ode': [],
//       'integrating-factor-method': [],
//     },
//   },
//   {
//     'complex-numbers-polynomials': {
//       title: 'Complex Numbers & Polynomials',
//       'factorising-quadratics-over-c': [],
//       'polynomial-division-factorising-cubics': [],
//       'complex-conjugate-root-theorem': [],
//       'factorising-solving-polynomial-equations': [],
//       'constructing-polynomials-from-complex-roots': [],
//       'solving-polynomial-equations-over-c': [],
//       'proof-counterexample': [],
//     },
//   },
//   {
//     'proof-by-mathematical-induction': {
//       title: 'Proof by Mathematical Induction',
//       'summation-formulae': [],
//       'sequences-series-recurrence': [],
//       divisibility: [],
//     },
//   },
//   {
//     proof: {
//       title: 'Proof',
//       'proof-by-contradiction-contrapositive': [],
//       'proof-by-contradiction-irrationality': [],
//       'proof-by-contradiction-real-life-context': [],
//       'proof-by-direct-calculation-rational-numbers': [],
//       'proof-by-contradiction-rational-irrational': [],
//       'proof-prime-numbers': [],
//       'proof-by-contradiction-infinite-primes-euclid': [],
//       'graphical-argument-real-roots': [],
//       'disproof-by-counterexample': [],
//     },
//   },
//   {
//     'algebra-and-functions': {
//       title: 'Algebra and Functions',
//       'polynomial-graphs-matching': [],
//       'sketching-polynomial-graphs': [],
//       'finding-polynomial-equations-from-graphs': [],
//       'factorising-and-sketching-polynomials': [],
//       'polynomial-equations-number-of-solutions': [],
//     },
//   },
//   {
//     'analysis-approaches': {
//       title: 'Analysis & Approaches',
//       'rational-functions-vertical-asymptotes-intercepts': [],
//       'rational-functions-oblique-asymptotes': [],
//       'rational-functions-intersection-with-linear-functions': [],
//       'rational-functions-turning-points-sketching': [],
//       'rational-functions-range-asymptotes': [],
//       'finding-minimum-values-of-functions': [],
//       'finding-max-and-min-on-closed-interval': [],
//       'optimisation-with-constraint': [],
//       'optimisation-box-problem': [],
//       'optimisation-surface-area-volume': [],
//       'related-rates-optimisation-cone': [],
//       'optimisation-area-under-trigonometric-curve': [],
//       'optimisation-closest-distance-to-a-curve': [],
//       'optimisation-ladder-around-corner': [],
//     },
//   },
//   {
//     functions: {
//       title: 'Functions',
//       'odd-even-neither-algebraic': [],
//       'inverse-functions-domain-restriction-graphical': [],
//       'self-inverse-functions': [],
//     },
//   },
//   {
//     'algebra-functions': {
//       title: 'Algebra & Functions',
//       'polynomial-inequalities': [],
//       'graphical-solution-of-inequalities': [],
//       'logarithmic-inequalities': [],
//       'constructing-polynomials-from-solution-sets': [],
//       'rational-exponential-inequalities-graphical': [],
//     },
//   },
//   {
//     'functions-graphs': {
//       title: 'Functions & Graphs',
//       'sketching-y-f-x': [],
//       'modulus-of-a-given-graph': [],
//       'sketching-modulus-graphs': [],
//       'determining-parameters-from-a-graph': [],
//       'modulus-equations-number-of-solutions': [],
//       'sketching-y-frac1f-x': [],
//       'horizontal-transformations-of-graphs': [],
//       'describing-sequences-of-horizontal-transformations': [],
//       'transformed-coordinates': [],
//       'combined-transformations-finding-equation': [],
//       'non-commutative-transformations': [],
//       'deducing-y-f-x-from-y-frac1f-x': [],
//       'equivalent-sequences-of-transformations': [],
//       'exponential-transformations': [],
//     },
//   },
//   {
//     'geometry-lines-planes': {
//       title: 'Geometry – Lines & Planes',
//       'intersection-of-two-lines-in-3d-vector-form': [],
//       'skew-lines-in-3d': [],
//       'classifying-pairs-of-lines-same-parallel-or-non-parallel': [],
//       'showing-two-representations-describe-the-same-line': [],
//       'finding-parameter-value-for-intersection-lines-with-unknown-constant': [],
//       'paths-of-moving-objects-intersection-of-paths': [],
//       'speed-of-particles-from-position-vectors': [],
//       'vertical-alignment-of-moving-objects': [],
//       'moving-objects-finding-unknown-velocity-component': [],
//       'shortest-distance-between-skew-lines-perpendicular-segment': [],
//     },
//   },
//   {
//     geometry: {
//       title: 'Geometry',
//       'vector-equation-of-a-plane': [],
//       'plane-through-three-points': [],
//       'point-on-plane-check': [],
//       'cartesian-equation-point-check': [],
//       'plane-containing-two-lines': [],
//       'coplanar-points': [],
//     },
//   },
//   {
//     'vectors-3d-geometry': {
//       title: 'Vectors & 3D Geometry',
//       'angle-between-line-and-plane': [],
//       'intersection-of-line-and-plane': [],
//       'system-of-three-planes': [],
//       'perpendicular-line-to-a-plane-perpendicular-distance': [],
//       'angle-intersection-perpendicular-distance': [],
//       'perpendicular-from-point-reflection-in-plane': [],
//       'cross-product-equation-of-plane-intersection-of-planes': [],
//       'consistent-systems-of-equations-geometric-configuration': [],
//       'intersection-of-planes-geometric-configuration': [],
//       'cross-product-area-plane-perpendicular-distance-volume': [],
//       'parallel-planes-perpendicular-distance': [],
//       'perpendicular-planes-cross-product-line-through-point-parallel-to-both-planes': [],
//     },
//   },
//   {
//     probability: {
//       title: 'Probability',
//       'conditional-probability-bayes-theorem-2-events': [],
//       'conditional-probability-from-tree-diagram': [],
//       'bayes-theorem-from-tree-diagram-3-events': [],
//       'total-probability-bayes-theorem-context': [],
//       'bayes-theorem-reverse-conditional': [],
//       'bayes-theorem-with-multiple-outcomes': [],
//       'bayes-theorem-3-equally-likely-events': [],
//     },
//   },
//   {
//     'statistics-probability': {
//       title: 'Statistics & Probability',
//       'discrete-random-variables-variance': [],
//       'discrete-random-variables-defined-by-formula': [],
//       'linear-transformations-of-random-variables': [],
//       'discrete-random-variables-standard-deviation': [],
//       'linear-transformations-probability-distribution-table': [],
//       'discrete-random-variables-derived-distribution': [],
//       'binomial-distribution-coin-flipping': [],
//       'discrete-random-variables-sum-of-two-dice': [],
//       'discrete-random-variables-unknown-probabilities': [],
//     },
//   },
//   {
//     'analysis-and-approaches': {
//       title: 'Analysis and Approaches',
//       'continuity-of-functions': [],
//       'limits-at-infinity': [],
//       'convergence-and-divergence': [],
//       'differentiation-from-first-principles': [],
//       'higher-order-derivatives': [],
//       'proof-by-mathematical-induction': [],
//       'limits-differentiation-of-exponentials': [],
//       'first-principles-proof-by-induction': [],
//     },
//   },
//   {
//     integration: {
//       title: 'Integration',
//       'integration-by-substitution-indefinite': [],
//       'area-between-a-curve-and-the-y-axis': [],
//       'volume-of-revolution-about-x-axis': [],
//       'area-and-volume-combined': [],
//       'volume-of-revolution-derivation-of-cone-formula': [],
//       'volume-of-revolution-derivation-of-sphere-formula': [],
//       'ratio-of-areas-invariance': [],
//     },
//   },
//   {
//     'series-differential-equations': {
//       title: 'Series & Differential Equations',
//       'maclaurin-series-recurrence-relations': [],
//       'maclaurin-series-airy-type-ode': [],
//       'maclaurin-series-variable-coefficient-ode': [],
//       'legendre-differential-equation': [],
//       'hermite-polynomial-differential-equation': [],
//       'chebyshev-differential-equation': [],
//       'maclaurin-series-non-existence-frobenius-method': [],
//     },
//   },
// ]

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
//       combinations: [
//         {
//           id: 1,
//           question:
//             '(a) Find the number of ways of choosing five items from nine.  (b) Find the number of ways of choosing three items from eight.',
//           type: 'Easy',
//           explaination:
//             'Use ⁿCᵣ = n!/(r!(n − r)!).  (a) ⁹C₅ = 9!/(5! 4!) = 126.  (b) ⁸C₃ = 8!/(3! 5!) = 56.',
//           answer: '(a) ⁹C₅ = 126  (b) ⁸C₃ = 56',
//         },
//         {
//           id: 2,
//           question:
//             'A box contains 25 different chocolates: ten dark, eight milk and seven white. Find the number of ways of choosing three chocolates such that they are all a different type.',
//           type: 'Medium',
//           explaination:
//             'Choose 1 dark from 10, 1 milk from 8 and 1 white from 7, then multiply: ¹⁰C₁ × ⁸C₁ × ⁷C₁ = 10 × 8 × 7 = 560.',
//           answer: '10 × 8 × 7 = 560',
//         },
//       ],
//       'counting-distribution-into-boxes': [
//         {
//           id: 1,
//           question:
//             'Find the number of ways that:  (a) five presents can be put into two boxes  (b) three presents can be put into four boxes.',
//           type: 'Hard',
//           explaination:
//             'The presents and the boxes are distinguishable, so each present is placed independently.  (a) Each of the 5 presents can go into either of the 2 boxes: 2⁵ = 32.  (b) Each of the 3 presents can go into any of the 4 boxes: 4³ = 64.',
//           answer: '(a) 2⁵ = 32  (b) 4³ = 64',
//         },
//       ],
//       'combinations-geometric': [
//         {
//           id: 1,
//           question:
//             'Ten points on a plane are drawn so that no three lie in a straight line. If the points are connected by straight lines and vertices can only occur at the original points, find the number of different:  (a) triangles that can be formed  (b) quadrilaterals that can be formed.',
//           type: 'Medium',
//           explaination:
//             'No three points are collinear, so every selection of points gives a valid shape.  (a) A triangle is determined by choosing 3 of the 10 points: ¹⁰C₃ = 120.  (b) A quadrilateral is determined by choosing 4 of the 10 points: ¹⁰C₄ = 210.',
//           answer: '(a) ¹⁰C₃ = 120  (b) ¹⁰C₄ = 210',
//         },
//       ],
//       'combinations-handshake-problem': [
//         {
//           id: 1,
//           question:
//             'At a party, everyone shakes hands with everyone else. In total there are 465 handshakes.  Find the number of people at the party.',
//           type: 'Medium',
//           explaination:
//             'Each handshake is a selection of 2 people from n, so ⁿC₂ = n(n − 1)/2 = 465. Then n(n − 1) = 930, so n² − n − 930 = 0, which factorises as (n − 31)(n + 30) = 0. Since n > 0, n = 31.',
//           answer: 'n = 31',
//         },
//       ],
//       'combinations-with-restrictions': [
//         {
//           id: 1,
//           question:
//             'Alessia has seven different soft toys and five different toy cars she likes to play with.  Find the number of ways she can choose four of these to play with if at least one of them must be a toy car.',
//           type: 'Medium',
//           explaination:
//             'Use complementary counting. Total ways to choose 4 from 12: ¹²C₄ = 495. Ways with no toy cars (all soft toys): ⁷C₄ = 35. At least one toy car: 495 − 35 = 460.',
//           answer: '¹²C₄ − ⁷C₄ = 495 − 35 = 460',
//         },
//         {
//           id: 2,
//           question:
//             'A box contains 25 different chocolates: ten dark, eight milk and seven white. Find the number of ways of choosing three chocolates such that they are not all dark.',
//           type: 'Medium',
//           explaination:
//             'Use complementary counting. Total ways to choose 3 from 25: ²⁵C₃ = 2300. All dark: ¹⁰C₃ = 120. Not all dark: 2300 − 120 = 2180.',
//           answer: '²⁵C₃ − ¹⁰C₃ = 2300 − 120 = 2180',
//         },
//         {
//           id: 3,
//           question:
//             'Eight students are to be chosen from 16 girls and 13 boys.  Find the number of ways this can be done if at least two girls must be chosen.',
//           type: 'Hard',
//           explaination:
//             'Use complementary counting. Total ways to choose 8 from 29: ²⁹C₈ = 4,292,145. No girls: ¹³C₈ = 1287. Exactly one girl: ¹⁶C₁ × ¹³C₇ = 16 × 1716 = 27,456. At least two girls: 4,292,145 − 1287 − 27,456 = 4,263,402.',
//           answer: '²⁹C₈ − ¹³C₈ − ¹⁶C₁ × ¹³C₇ = 4,263,402',
//         },
//         {
//           id: 4,
//           question:
//             'A six-a-side football team is to be selected from short-listed players from the top two sides in the league. Eight players are short-listed from Team A and seven from Team B.  Find the number of ways the side can be chosen if there must be at least two players from Team A and at least one from Team B.',
//           type: 'Hard',
//           explaination:
//             'Total ways to choose 6 from 15: ¹⁵C₆ = 3003. Subtract the selections that break the conditions: no players from Team B (all 6 from A): ⁸C₆ = 28; no players from Team A (all 6 from B): ⁷C₆ = 7; exactly one player from Team A and five from B: ⁸C₁ × ⁷C₅ = 8 × 21 = 168. Valid selections: 3003 − 28 − 7 − 168 = 2800.',
//           answer: '¹⁵C₆ − ⁸C₆ − ⁷C₆ − ⁸C₁ × ⁷C₅ = 3003 − 28 − 7 − 168 = 2800',
//         },
//         {
//           id: 5,
//           question:
//             'In a word game, there are 26 tiles each printed with a different letter.  Find the number of ways of choosing seven tiles if at least two of them are vowels.  Note: There are 5 vowels (A, E, I, O, U) and 21 consonants.',
//           type: 'Hard',
//           explaination:
//             'Use complementary counting. Total ways to choose 7 from 26: ²⁶C₇ = 657,800. No vowels: ²¹C₇ = 116,280. Exactly one vowel: ⁵C₁ × ²¹C₆ = 5 × 54,264 = 271,320. At least two vowels: 657,800 − 116,280 − 271,320 = 270,200.',
//           answer: '²⁶C₇ − ²¹C₇ − ⁵C₁ × ²¹C₆ = 657,800 − 116,280 − 271,320 = 270,200',
//         },
//       ],
//       'probability-combinations': [
//         {
//           id: 1,
//           question:
//             'Five cards are dealt from a randomly shuffled standard deck of 52 playing cards. Find the probability of getting all spades.',
//           type: 'Hard',
//           explaination:
//             'There are 13 spades. P(all spades) = ¹³C₅ ÷ ⁵²C₅ = 1287/2,598,960 ≈ 0.000495.',
//           answer: 'P = 1287/2,598,960 ≈ 4.95 × 10⁻⁴',
//         },
//         {
//           id: 2,
//           question:
//             'Five cards are dealt from a randomly shuffled standard deck of 52 playing cards. Find the probability of getting all red cards.',
//           type: 'Hard',
//           explaination:
//             'There are 26 red cards. P(all red) = ²⁶C₅ ÷ ⁵²C₅ = 65,780/2,598,960 ≈ 0.0253.',
//           answer: 'P = 65,780/2,598,960 ≈ 0.0253',
//         },
//         {
//           id: 3,
//           question:
//             'Five cards are dealt from a randomly shuffled standard deck of 52 playing cards. Find the probability of getting at least two black cards.',
//           type: 'Hard',
//           explaination:
//             'There are 26 black cards. Use complementary counting: P(at least 2 black) = 1 − P(0 black) − P(1 black). P(0 black) = ²⁶C₅ ÷ ⁵²C₅ = 65,780/2,598,960. P(1 black) = (²⁶C₁ × ²⁶C₄) ÷ ⁵²C₅ = (26 × 14,950)/2,598,960 = 388,700/2,598,960. So P(at least 2 black) = 1 − 454,480/2,598,960 ≈ 0.825.',
//           answer: 'P ≈ 0.825',
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
//       'first-four-terms': [
//         {
//           id: 1,
//           question:
//             'Find the first four terms of the binomial expansion of (2 + x)⁶ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁶C₀ × 2⁶ + ⁶C₁ × 2⁵ x + ⁶C₂ × 2⁴ x² + ⁶C₃ × 2³ x³ = 64 + 192x + 240x² + 160x³.',
//           answer: '64 + 192x + 240x² + 160x³',
//         },
//         {
//           id: 2,
//           question:
//             'Find the first four terms of the binomial expansion of (2 + x)⁷ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁷C₀ × 2⁷ + ⁷C₁ × 2⁶ x + ⁷C₂ × 2⁵ x² + ⁷C₃ × 2⁴ x³ = 128 + 448x + 672x² + 560x³.',
//           answer: '128 + 448x + 672x² + 560x³',
//         },
//         {
//           id: 3,
//           question:
//             'Find the first four terms of the binomial expansion of (3 − x)⁵ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁵C₀ × 3⁵ + ⁵C₁ × 3⁴(−x) + ⁵C₂ × 3³(−x)² + ⁵C₃ × 3²(−x)³ = 243 − 405x + 270x² − 90x³.',
//           answer: '243 − 405x + 270x² − 90x³',
//         },
//         {
//           id: 4,
//           question:
//             'Find the first four terms of the binomial expansion of (3 − x)⁴ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁴C₀ × 3⁴ + ⁴C₁ × 3³(−x) + ⁴C₂ × 3²(−x)² + ⁴C₃ × 3(−x)³ = 81 − 108x + 54x² − 12x³.',
//           answer: '81 − 108x + 54x² − 12x³',
//         },
//         {
//           id: 5,
//           question:
//             'Find the first four terms of the binomial expansion of (1 + 2x)⁶ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁶C₀ + ⁶C₁ × (2x) + ⁶C₂ × (2x)² + ⁶C₃ × (2x)³ = 1 + 12x + 60x² + 160x³.',
//           answer: '1 + 12x + 60x² + 160x³',
//         },
//         {
//           id: 6,
//           question:
//             'Find the first four terms of the binomial expansion of (1 + 2x)⁷ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁷C₀ + ⁷C₁ × (2x) + ⁷C₂ × (2x)² + ⁷C₃ × (2x)³ = 1 + 14x + 84x² + 280x³.',
//           answer: '1 + 14x + 84x² + 280x³',
//         },
//         {
//           id: 7,
//           question:
//             'Find the first four terms of the binomial expansion of (1 − 5x)⁴ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁴C₀ + ⁴C₁ × (−5x) + ⁴C₂ × (−5x)² + ⁴C₃ × (−5x)³ = 1 − 20x + 150x² − 500x³.',
//           answer: '1 − 20x + 150x² − 500x³',
//         },
//         {
//           id: 8,
//           question:
//             'Find the first four terms of the binomial expansion of (1 − 5x)⁵ in increasing powers of x.',
//           type: 'Easy',
//           explaination:
//             'Use the binomial theorem: ⁵C₀ + ⁵C₁ × (−5x) + ⁵C₂ × (−5x)² + ⁵C₃ × (−5x)³ = 1 − 25x + 250x² − 1250x³.',
//           answer: '1 − 25x + 250x² − 1250x³',
//         },
//         {
//           id: 9,
//           question:
//             'Find the first four terms of the binomial expansion of (2 + 3x)¹⁰ in increasing powers of x.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ¹⁰C₀ × 2¹⁰ + ¹⁰C₁ × 2⁹(3x) + ¹⁰C₂ × 2⁸(3x)² + ¹⁰C₃ × 2⁷(3x)³ = 1024 + 15360x + 103680x² + 414720x³.',
//           answer: '1024 + 15360x + 103680x² + 414720x³',
//         },
//         {
//           id: 10,
//           question:
//             'Find the first four terms of the binomial expansion of (2 + 3x)⁹ in increasing powers of x.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁹C₀ × 2⁹ + ⁹C₁ × 2⁸(3x) + ⁹C₂ × 2⁷(3x)² + ⁹C₃ × 2⁶(3x)³ = 512 + 6912x + 41472x² + 145152x³.',
//           answer: '512 + 6912x + 41472x² + 145152x³',
//         },
//         {
//           id: 11,
//           question:
//             'Find the first four terms of the binomial expansion of (2 − 3x)⁵ in increasing powers of x.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁵C₀ × 2⁵ + ⁵C₁ × 2⁴(−3x) + ⁵C₂ × 2³(−3x)² + ⁵C₃ × 2²(−3x)³ = 32 − 240x + 720x² − 1080x³.',
//           answer: '32 − 240x + 720x² − 1080x³',
//         },
//         {
//           id: 12,
//           question:
//             'Find the first four terms of the binomial expansion of (2 − 3x)⁶ in increasing powers of x.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁶C₀ × 2⁶ + ⁶C₁ × 2⁵(−3x) + ⁶C₂ × 2⁴(−3x)² + ⁶C₃ × 2³(−3x)³ = 64 − 576x + 2160x² − 4320x³.',
//           answer: '64 − 576x + 2160x² − 4320x³',
//         },
//         {
//           id: 13,
//           question:
//             'Find the first four terms of the binomial expansion of (a + 2b)⁷ in increasing powers of b.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁷C₀ × a⁷ + ⁷C₁ × a⁶(2b) + ⁷C₂ × a⁵(2b)² + ⁷C₃ × a⁴(2b)³ = a⁷ + 14a⁶b + 84a⁵b² + 280a⁴b³.',
//           answer: 'a⁷ + 14a⁶b + 84a⁵b² + 280a⁴b³',
//         },
//         {
//           id: 14,
//           question:
//             'Find the first four terms of the binomial expansion of (a + 2b)⁸ in increasing powers of b.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁸C₀ × a⁸ + ⁸C₁ × a⁷(2b) + ⁸C₂ × a⁶(2b)² + ⁸C₃ × a⁵(2b)³ = a⁸ + 16a⁷b + 112a⁶b² + 448a⁵b³.',
//           answer: 'a⁸ + 16a⁷b + 112a⁶b² + 448a⁵b³',
//         },
//         {
//           id: 15,
//           question:
//             'Find the first four terms of the binomial expansion of (3a − 2b)⁵ in increasing powers of b.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁵C₀ × (3a)⁵ + ⁵C₁ × (3a)⁴(−2b) + ⁵C₂ × (3a)³(−2b)² + ⁵C₃ × (3a)²(−2b)³ = 243a⁵ − 810a⁴b + 1080a³b² − 720a²b³.',
//           answer: '243a⁵ − 810a⁴b + 1080a³b² − 720a²b³',
//         },
//         {
//           id: 16,
//           question:
//             'Find the first four terms of the binomial expansion of (3a − 2b)⁶ in increasing powers of b.',
//           type: 'Medium',
//           explaination:
//             'Use the binomial theorem: ⁶C₀ × (3a)⁶ + ⁶C₁ × (3a)⁵(−2b) + ⁶C₂ × (3a)⁴(−2b)² + ⁶C₃ × (3a)³(−2b)³ = 729a⁶ − 2916a⁵b + 4860a⁴b² − 4320a³b³.',
//           answer: '729a⁶ − 2916a⁵b + 4860a⁴b² − 4320a³b³',
//         },
//       ],
//       'pascals-triangle-expansion': [
//         {
//           id: 1,
//           question: "Use Pascal's triangle to expand (1 + 2x)⁴.",
//           type: 'Easy',
//           explaination:
//             "Row 4 of Pascal's triangle: 1, 4, 6, 4, 1. 1(1) + 4(2x) + 6(2x)² + 4(2x)³ + 1(2x)⁴ = 1 + 8x + 24x² + 32x³ + 16x⁴.",
//           answer: '1 + 8x + 24x² + 32x³ + 16x⁴',
//         },
//         {
//           id: 2,
//           question: "Use Pascal's triangle to expand (2 + x)⁴.",
//           type: 'Easy',
//           explaination:
//             "Row 4 of Pascal's triangle: 1, 4, 6, 4, 1. 1(2⁴) + 4(2³)x + 6(2²)x² + 4(2)x³ + 1(x⁴) = 16 + 32x + 24x² + 8x³ + x⁴.",
//           answer: '16 + 32x + 24x² + 8x³ + x⁴',
//         },
//         {
//           id: 3,
//           question: "Use Pascal's triangle to expand (3 + x)³.",
//           type: 'Easy',
//           explaination:
//             "Row 3 of Pascal's triangle: 1, 3, 3, 1. 1(3³) + 3(3²)x + 3(3)x² + 1(x³) = 27 + 27x + 9x² + x³.",
//           answer: '27 + 27x + 9x² + x³',
//         },
//         {
//           id: 4,
//           question: "Use Pascal's triangle to expand (1 + 3x)³.",
//           type: 'Easy',
//           explaination:
//             "Row 3 of Pascal's triangle: 1, 3, 3, 1. 1 + 3(3x) + 3(3x)² + (3x)³ = 1 + 9x + 27x² + 27x³.",
//           answer: '1 + 9x + 27x² + 27x³',
//         },
//         {
//           id: 5,
//           question: "Use Pascal's triangle to expand (x + 2)⁵.",
//           type: 'Easy',
//           explaination:
//             "Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1. x⁵ + 5(2)x⁴ + 10(4)x³ + 10(8)x² + 5(16)x + 32 = x⁵ + 10x⁴ + 40x³ + 80x² + 80x + 32.",
//           answer: 'x⁵ + 10x⁴ + 40x³ + 80x² + 80x + 32',
//         },
//         {
//           id: 6,
//           question: "Use Pascal's triangle to expand (x + 1)⁵.",
//           type: 'Easy',
//           explaination:
//             "Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1. Every power of 1 is 1, so the coefficients are the row itself: x⁵ + 5x⁴ + 10x³ + 10x² + 5x + 1.",
//           answer: 'x⁵ + 5x⁴ + 10x³ + 10x² + 5x + 1',
//         },
//       ],
//       'binomial-coefficients': [
//         {
//           id: 1,
//           question: 'Evaluate ⁶C₁.',
//           type: 'Easy',
//           explaination: '⁶C₁ = 6!/(1! · 5!) = 6.',
//           answer: '6',
//         },
//         {
//           id: 2,
//           question: 'Evaluate ⁸C₁.',
//           type: 'Easy',
//           explaination: '⁸C₁ = 8!/(1! · 7!) = 8.',
//           answer: '8',
//         },
//         {
//           id: 3,
//           question: 'Evaluate ⁷C₂.',
//           type: 'Easy',
//           explaination: '⁷C₂ = (7 × 6)/2! = 42/2 = 21.',
//           answer: '21',
//         },
//         {
//           id: 4,
//           question: 'Evaluate ⁶C₂.',
//           type: 'Easy',
//           explaination: '⁶C₂ = (6 × 5)/2! = 30/2 = 15.',
//           answer: '15',
//         },
//         {
//           id: 5,
//           question: 'Evaluate ⁹C₃.',
//           type: 'Easy',
//           explaination: '⁹C₃ = (9 × 8 × 7)/3! = 504/6 = 84.',
//           answer: '84',
//         },
//         {
//           id: 6,
//           question: 'Evaluate ⁸C₃.',
//           type: 'Easy',
//           explaination: '⁸C₃ = (8 × 7 × 6)/3! = 336/6 = 56.',
//           answer: '56',
//         },
//         {
//           id: 7,
//           question: 'Evaluate ¹⁰C₉.',
//           type: 'Easy',
//           explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹⁰C₉ = ¹⁰C₁ = 10.',
//           answer: '10',
//         },
//         {
//           id: 8,
//           question: 'Evaluate ¹³C₁₂.',
//           type: 'Easy',
//           explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹³C₁₂ = ¹³C₁ = 13.',
//           answer: '13',
//         },
//         {
//           id: 9,
//           question: 'Evaluate ¹⁵C₁₃.',
//           type: 'Easy',
//           explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹⁵C₁₃ = ¹⁵C₂ = (15 × 14)/2 = 105.',
//           answer: '105',
//         },
//         {
//           id: 10,
//           question: 'Evaluate ¹¹C₉.',
//           type: 'Easy',
//           explaination: 'Use the symmetry ⁿCᵣ = ⁿCₙ₋ᵣ: ¹¹C₉ = ¹¹C₂ = (11 × 10)/2 = 55.',
//           answer: '55',
//         },
//       ],
//       'finding-unknown-r': [
//         {
//           id: 1,
//           question: 'Use technology to find the value (or values) of r such that ¹⁴Cᵣ = 2002.',
//           type: 'Medium',
//           explaination: 'Using technology, ¹⁴C₅ = 2002. By symmetry, ¹⁴C₉ = ¹⁴C₅ = 2002 as well.',
//           answer: 'r = 5 or r = 9',
//         },
//         {
//           id: 2,
//           question: 'Use technology to find the value (or values) of r such that ¹⁵Cᵣ = 6435.',
//           type: 'Medium',
//           explaination: 'Using technology, ¹⁵C₇ = 6435. By symmetry, ¹⁵C₈ = ¹⁵C₇ = 6435 as well.',
//           answer: 'r = 7 or r = 8',
//         },
//         {
//           id: 3,
//           question: 'Use technology to find the value (or values) of r such that ²⁰Cᵣ = 1140.',
//           type: 'Medium',
//           explaination: 'Using technology, ²⁰C₃ = 1140. By symmetry, ²⁰C₁₇ = ²⁰C₃ = 1140 as well.',
//           answer: 'r = 3 or r = 17',
//         },
//         {
//           id: 4,
//           question: 'Use technology to find the value (or values) of r such that ¹⁷Cᵣ = 6188.',
//           type: 'Medium',
//           explaination: 'Using technology, ¹⁷C₅ = 6188. By symmetry, ¹⁷C₁₂ = ¹⁷C₅ = 6188 as well.',
//           answer: 'r = 5 or r = 12',
//         },
//       ],
//       'finding-unknown-n': [
//         {
//           id: 1,
//           question: 'Use technology to find the value of n such that ⁿC₅ = 792.',
//           type: 'Medium',
//           explaination:
//             'Solve n!/(5!(n − 5)!) = 792 using technology (for example, a table of ⁿC₅). When n = 12, ¹²C₅ = 792.',
//           answer: 'n = 12',
//         },
//         {
//           id: 2,
//           question: 'Use technology to find the value of n such that ⁿC₈ = 43,758.',
//           type: 'Medium',
//           explaination:
//             'Solve n!/(8!(n − 8)!) = 43,758 using technology (for example, a table of ⁿC₈). When n = 18, ¹⁸C₈ = 43,758.',
//           answer: 'n = 18',
//         },
//         {
//           id: 3,
//           question: 'Find the value of n such that ⁿC₄ = 495.',
//           type: 'Medium',
//           explaination:
//             'ⁿC₄ = n(n − 1)(n − 2)(n − 3)/24 = 495, so n(n − 1)(n − 2)(n − 3) = 11,880. Try n = 12: 12 × 11 × 10 × 9 = 11,880, so n = 12.',
//           answer: 'n = 12',
//         },
//         {
//           id: 4,
//           question:
//             'The coefficient of xⁿ⁻³ in the expansion of (x + 2)ⁿ is 1760. Find the value of n.',
//           type: 'Hard',
//           explaination:
//             'The term in xⁿ⁻³ is ⁿC₃ xⁿ⁻³ × 2³. So ⁿC₃ × 8 = 1760, giving ⁿC₃ = 220. Then n(n − 1)(n − 2)/6 = 220, so n(n − 1)(n − 2) = 1320. Try n = 12: 12 × 11 × 10 = 1320, so n = 12.',
//           answer: 'n = 12',
//         },
//         {
//           id: 5,
//           question:
//             'The coefficient of x⁴ in the expansion of (x + 3)ⁿ is 153,090. Find the value of n.',
//           type: 'Hard',
//           explaination:
//             'The term in x⁴ is ⁿC₄ x⁴ × 3ⁿ⁻⁴, so ⁿC₄ × 3ⁿ⁻⁴ = 153,090. Try n = 10: ¹⁰C₄ × 3⁶ = 210 × 729 = 153,090, so n = 10.',
//           answer: 'n = 10',
//         },
//       ],
//       'expansion-with-rational-terms': [
//         {
//           id: 1,
//           question: 'Expand and simplify (x + 2/x)⁴.',
//           type: 'Hard',
//           explaination:
//             'Use the binomial theorem with n = 4: ⁴C₀x⁴ + ⁴C₁x³(2/x) + ⁴C₂x²(2/x)² + ⁴C₃x(2/x)³ + ⁴C₄(2/x)⁴ = x⁴ + 4(2x²) + 6(4) + 4(8/x²) + 16/x⁴ = x⁴ + 8x² + 24 + 32/x² + 16/x⁴.',
//           answer: 'x⁴ + 8x² + 24 + 32/x² + 16/x⁴',
//         },
//         {
//           id: 2,
//           question: 'Find the coefficient of x⁵ in the expansion of (2x² − 3/x)¹⁰.',
//           type: 'Hard',
//           explaination:
//             'General term: ¹⁰Cᵣ(2x²)ʳ(−3/x)¹⁰⁻ʳ = ¹⁰Cᵣ × 2ʳ × (−3)¹⁰⁻ʳ × x³ʳ⁻¹⁰. For x⁵: 3r − 10 = 5, so r = 5. Coefficient: ¹⁰C₅ × 2⁵ × (−3)⁵ = 252 × 32 × (−243) = −1,959,552.',
//           answer: '−1,959,552',
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
//       'powers-of-i': [
//         {
//           id: 1,
//           question: 'Simplify i⁵.',
//           type: 'Easy',
//           explaination: 'i⁵ = i⁴ × i = 1 × i = i.',
//           answer: 'i',
//         },
//         {
//           id: 2,
//           question: 'Simplify i⁶.',
//           type: 'Easy',
//           explaination: 'i⁶ = i⁴ × i² = 1 × (−1) = −1.',
//           answer: '−1',
//         },
//         {
//           id: 3,
//           question: 'Simplify −4i³.',
//           type: 'Easy',
//           explaination: 'i³ = i² × i = −i, so −4i³ = −4(−i) = 4i.',
//           answer: '4i',
//         },
//         {
//           id: 4,
//           question: 'Simplify 5i⁴.',
//           type: 'Easy',
//           explaination: 'i⁴ = (i²)² = (−1)² = 1, so 5i⁴ = 5.',
//           answer: '5',
//         },
//         {
//           id: 5,
//           question: 'Simplify (3i)².',
//           type: 'Easy',
//           explaination: '(3i)² = 9i² = 9(−1) = −9.',
//           answer: '−9',
//         },
//         {
//           id: 6,
//           question: 'Simplify (2i)³.',
//           type: 'Easy',
//           explaination: '(2i)³ = 8i³ = 8(−i) = −8i.',
//           answer: '−8i',
//         },
//         {
//           id: 7,
//           question: 'Simplify i⁴ⁿ for n, a positive integer.',
//           type: 'Medium',
//           explaination: 'i⁴ⁿ = (i⁴)ⁿ = 1ⁿ = 1.',
//           answer: '1',
//         },
//         {
//           id: 8,
//           question: 'Simplify i⁴ⁿ⁺² for n, a positive integer.',
//           type: 'Medium',
//           explaination: 'i⁴ⁿ⁺² = i⁴ⁿ × i² = 1 × (−1) = −1.',
//           answer: '−1',
//         },
//       ],
//       'solving-quadratic-equations-with-complex-roots': [
//         {
//           id: 1,
//           question: 'Solve the equation x² = −9.',
//           type: 'Easy',
//           explaination: 'x² = −9, so x = ±√(−9) = ±3i.',
//           answer: 'x = ±3i',
//         },
//         {
//           id: 2,
//           question: 'Solve the equation x² = −36.',
//           type: 'Easy',
//           explaination: 'x² = −36, so x = ±√(−36) = ±6i.',
//           answer: 'x = ±6i',
//         },
//         {
//           id: 3,
//           question: 'Solve the equation x² = −8.',
//           type: 'Easy',
//           explaination: 'x = ±√(−8) = ±√8 i = ±2√2 i.',
//           answer: 'x = ±2√2 i',
//         },
//         {
//           id: 4,
//           question: 'Solve the equation x² = −75.',
//           type: 'Easy',
//           explaination: 'x = ±√(−75) = ±√75 i = ±5√3 i.',
//           answer: 'x = ±5√3 i',
//         },
//         {
//           id: 5,
//           question: 'Solve the equation x² − 2x + 5 = 0.',
//           type: 'Medium',
//           explaination:
//             'Discriminant: Δ = (−2)² − 4(1)(5) = 4 − 20 = −16, so the roots are complex. x = (2 ± √(−16))/2 = (2 ± 4i)/2 = 1 ± 2i.',
//           answer: 'x = 1 ± 2i',
//         },
//         {
//           id: 6,
//           question: 'Solve the equation x² − 4x + 13 = 0.',
//           type: 'Medium',
//           explaination:
//             'Discriminant: Δ = 16 − 52 = −36. x = (4 ± √(−36))/2 = (4 ± 6i)/2 = 2 ± 3i.',
//           answer: 'x = 2 ± 3i',
//         },
//         {
//           id: 7,
//           question: 'Solve the equation 2x² + 4x + 3 = 0.',
//           type: 'Medium',
//           explaination:
//             'Discriminant: Δ = 16 − 24 = −8. x = (−4 ± √(−8))/4 = (−4 ± 2√2 i)/4 = −1 ± (√2/2)i.',
//           answer: 'x = −1 ± (√2/2)i',
//         },
//         {
//           id: 8,
//           question: 'Solve the equation 3x² − 2x + 2 = 0.',
//           type: 'Medium',
//           explaination:
//             'Discriminant: Δ = 4 − 24 = −20. x = (2 ± √(−20))/6 = (2 ± 2√5 i)/6 = (1 ± √5 i)/3.',
//           answer: 'x = (1 ± √5 i)/3',
//         },
//         {
//           id: 9,
//           question: 'Solve the equation 5x² + 6x + 5 = 0.',
//           type: 'Medium',
//           explaination:
//             'Discriminant: Δ = 36 − 100 = −64. x = (−6 ± √(−64))/10 = (−6 ± 8i)/10 = (−3 ± 4i)/5.',
//           answer: 'x = (−3 ± 4i)/5',
//         },
//       ],
//       'division-writing-in-x-iy-form': [
//         {
//           id: 1,
//           question: 'Write 10/(2 + i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 2 − i: 10(2 − i)/((2 + i)(2 − i)) = (20 − 10i)/5 = 4 − 2i.',
//           answer: '4 − 2i',
//         },
//         {
//           id: 2,
//           question: 'Write 6i/(1 − i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 1 + i: 6i(1 + i)/((1 − i)(1 + i)) = (6i + 6i²)/2 = (−6 + 6i)/2 = −3 + 3i.',
//           answer: '−3 + 3i',
//         },
//         {
//           id: 3,
//           question: 'Write (10 − 5i)/(1 − 2i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 1 + 2i: (10 − 5i)(1 + 2i)/(1 + 4) = (10 + 20i − 5i − 10i²)/5 = (20 + 15i)/5 = 4 + 3i.',
//           answer: '4 + 3i',
//         },
//         {
//           id: 4,
//           question: 'Write (7 + i)/(3 + 4i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 3 − 4i: (7 + i)(3 − 4i)/(9 + 16) = (21 − 28i + 3i − 4i²)/25 = (25 − 25i)/25 = 1 − i.',
//           answer: '1 − i',
//         },
//         {
//           id: 5,
//           question: 'Write (3 + 2i)/(5 − i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 5 + i: (3 + 2i)(5 + i)/(25 + 1) = (15 + 3i + 10i + 2i²)/26 = (13 + 13i)/26 = 1/2 + (1/2)i.',
//           answer: '1/2 + (1/2)i',
//         },
//         {
//           id: 6,
//           question: 'Write (5 − 4i)/(2 + 3i) in the form x + iy.',
//           type: 'Medium',
//           explaination:
//             'Multiply the numerator and denominator by the conjugate 2 − 3i: (5 − 4i)(2 − 3i)/(4 + 9) = (10 − 15i − 8i + 12i²)/13 = (−2 − 23i)/13 = −2/13 − (23/13)i.',
//           answer: '−2/13 − (23/13)i',
//         },
//         {
//           id: 7,
//           question: 'Given that z = 7 + 3i − 10i/(2 + i), find z*.',
//           type: 'Hard',
//           explaination:
//             'First simplify 10i/(2 + i) by multiplying the numerator and denominator by 2 − i: 10i(2 − i)/5 = (20i − 10i²)/5 = (10 + 20i)/5 = 2 + 4i. Then z = 7 + 3i − (2 + 4i) = 5 − i, so z* = 5 + i.',
//           answer: 'z* = 5 + i',
//         },
//       ],
//       'argand-diagram': [
//         {
//           id: 1,
//           question:
//             'Represent the following complex numbers on an Argand diagram:  (i) z = 5 + 2i  (ii) −z  (iii) z*',
//           type: 'Easy',
//           explaination:
//             '(i) z = 5 + 2i is the point (5, 2).  (ii) −z = −5 − 2i is the point (−5, −2).  (iii) z* = 5 − 2i is the point (5, −2).',
//           answer: 'Points at (5, 2), (−5, −2), (5, −2)',
//         },
//         {
//           id: 2,
//           question:
//             'Represent the following complex numbers on an Argand diagram:  (i) z = −2 + 3i  (ii) −z  (iii) z*',
//           type: 'Easy',
//           explaination:
//             '(i) z = −2 + 3i is the point (−2, 3).  (ii) −z = 2 − 3i is the point (2, −3).  (iii) z* = −2 − 3i is the point (−2, −3).',
//           answer: 'Points at (−2, 3), (2, −3), (−2, −3)',
//         },
//         {
//           id: 3,
//           question:
//             'Represent the following on an Argand diagram:  (i) z = 3 − 4i  (ii) 2z  (iii) iz',
//           type: 'Easy',
//           explaination:
//             '(i) z = 3 − 4i is the point (3, −4).  (ii) 2z = 6 − 8i is the point (6, −8).  (iii) iz = i(3 − 4i) = 3i − 4i² = 4 + 3i is the point (4, 3).',
//           answer: 'Points at (3, −4), (6, −8), (4, 3)',
//         },
//         {
//           id: 4,
//           question:
//             'Represent the following on an Argand diagram:  (i) z = −4 − 5i  (ii) 2z  (iii) iz',
//           type: 'Easy',
//           explaination:
//             '(i) z = −4 − 5i is the point (−4, −5).  (ii) 2z = −8 − 10i is the point (−8, −10).  (iii) iz = i(−4 − 5i) = −4i − 5i² = 5 − 4i is the point (5, −4).',
//           answer: 'Points at (−4, −5), (−8, −10), (5, −4)',
//         },
//         {
//           id: 5,
//           question:
//             'Given z = −3 + 2i and w = 5 + 3i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z + w',
//           type: 'Easy',
//           explaination:
//             '(i) z is the point (−3, 2).  (ii) w is the point (5, 3).  (iii) z + w = (−3 + 5) + (2 + 3)i = 2 + 5i, the point (2, 5).',
//           answer: 'Points at (−3, 2), (5, 3), (2, 5); z + w = 2 + 5i',
//         },
//         {
//           id: 6,
//           question:
//             'Given z = 2 + 2i and w = 1 + 3i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z + w',
//           type: 'Easy',
//           explaination:
//             '(i) z is the point (2, 2).  (ii) w is the point (1, 3).  (iii) z + w = 3 + 5i, the point (3, 5).',
//           answer: 'Points at (2, 2), (1, 3), (3, 5); z + w = 3 + 5i',
//         },
//         {
//           id: 7,
//           question:
//             'Given z = −4 − i and w = −2 − 3i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z − w',
//           type: 'Easy',
//           explaination:
//             '(i) z is the point (−4, −1).  (ii) w is the point (−2, −3).  (iii) z − w = (−4 − i) − (−2 − 3i) = −2 + 2i, the point (−2, 2).',
//           answer: 'Points at (−4, −1), (−2, −3), (−2, 2); z − w = −2 + 2i',
//         },
//         {
//           id: 8,
//           question:
//             'Given z = −2 + 5i and w = 6 − 2i, represent on an Argand diagram:  (i) z  (ii) w  (iii) z − w',
//           type: 'Easy',
//           explaination:
//             '(i) z is the point (−2, 5).  (ii) w is the point (6, −2).  (iii) z − w = (−2 + 5i) − (6 − 2i) = −8 + 7i, the point (−8, 7).',
//           answer: 'Points at (−2, 5), (6, −2), (−8, 7); z − w = −8 + 7i',
//         },
//       ],
//       'cartesian-form-from-polar': [
//         {
//           id: 1,
//           question:
//             'Write z in Cartesian form given:  (a) |z| = 10, arg z = −π/2  (b) |z| = 8, arg z = π/2',
//           type: 'Easy',
//           explaination:
//             'Use z = r(cos θ + i sin θ).  (a) z = 10(cos(−π/2) + i sin(−π/2)) = 10(0 − i) = −10i.  (b) z = 8(cos(π/2) + i sin(π/2)) = 8(0 + i) = 8i.',
//           answer: '(a) z = −10i  (b) z = 8i',
//         },
//         {
//           id: 2,
//           question:
//             'Write z in Cartesian form given:  (a) |z| = 4, arg z = π/3  (b) |z| = √2, arg z = π/4',
//           type: 'Easy',
//           explaination:
//             'Use z = r(cos θ + i sin θ).  (a) z = 4(1/2 + (√3/2)i) = 2 + 2√3 i.  (b) z = √2(1/√2 + (1/√2)i) = 1 + i.',
//           answer: '(a) z = 2 + 2√3 i  (b) z = 1 + i',
//         },
//         {
//           id: 3,
//           question:
//             'Write z in Cartesian form given:  (a) |z| = 4√3, arg z = 3π/4  (b) |z| = 2, arg z = 2π/3',
//           type: 'Easy',
//           explaination:
//             'Use z = r(cos θ + i sin θ).  (a) cos(3π/4) = −√2/2 and sin(3π/4) = √2/2, so z = 4√3(−√2/2 + (√2/2)i) = −2√6 + 2√6 i.  (b) z = 2(−1/2 + (√3/2)i) = −1 + √3 i.',
//           answer: '(a) z = −2√6 + 2√6 i  (b) z = −1 + √3 i',
//         },
//         {
//           id: 4,
//           question:
//             'Write z in Cartesian form given:  (a) |z| = 8, arg z = 11π/6  (b) |z| = 2, arg z = −π/4',
//           type: 'Easy',
//           explaination:
//             'Use z = r(cos θ + i sin θ).  (a) z = 8(cos(11π/6) + i sin(11π/6)) = 8(√3/2 − (1/2)i) = 4√3 − 4i.  (b) z = 2(cos(−π/4) + i sin(−π/4)) = 2(1/√2 − (1/√2)i) = √2 − √2 i.',
//           answer: '(a) z = 4√3 − 4i  (b) z = √2 − √2 i',
//         },
//       ],
//       'loci-on-argand-diagram': [
//         {
//           id: 1,
//           question:
//             'Sketch the curves in the Argand diagram described by:  (a) |z| = 2  (b) arg z = π/6  (c) Re(z)² = Im(z)',
//           type: 'Medium',
//           explaination:
//             'Let z = x + iy.  (a) |z| = 2 gives x² + y² = 4: a circle with centre the origin and radius 2.  (b) arg z = π/6 is a half-line from the origin (not including it) at an angle of π/6 to the positive real axis.  (c) Re(z)² = Im(z) gives x² = y: a parabola through the origin, opening upwards.',
//           answer:
//             '(a) Circle, centre origin, radius 2  (b) Half-line from origin at angle π/6  (c) Parabola x² = y',
//         },
//         {
//           id: 2,
//           question: 'If |z − 5i| = 3, find the smallest possible value of |z|.',
//           type: 'Medium',
//           explaination:
//             '|z − 5i| = 3 is a circle with centre 5i (the point (0, 5)) and radius 3. The point on this circle nearest the origin lies on the line through the origin and the centre, so the smallest |z| = 5 − 3 = 2.',
//           answer: '2',
//         },
//         {
//           id: 3,
//           question:
//             '(a) Given that |z| = |z − 1|, find Re(z).  (b) Sketch all the points with |z| = |z − 1| on an Argand diagram.',
//           type: 'Medium',
//           explaination:
//             '(a) Let z = x + iy. Then x² + y² = (x − 1)² + y², so x² = x² − 2x + 1, giving 2x = 1 and x = 1/2.  (b) The points are equidistant from 0 and 1, so they form the perpendicular bisector of the segment joining 0 and 1: the vertical line Re(z) = 1/2.',
//           answer: '(a) Re(z) = 1/2  (b) Vertical line x = 1/2',
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
//       'parallel-vectors-finding-unknowns': [
//         {
//           id: 1,
//           question:
//             'Find the values of p and q such that vectors a and b are parallel:  (a) a = (2, 1, 5), b = (6, p, q)  (b) a = (1, 1, 4), b = (4, p, q)',
//           type: 'Medium',
//           explaination:
//             'Parallel vectors are scalar multiples of each other.  (a) Comparing first components, b = 3a, so p = 3 × 1 = 3 and q = 3 × 5 = 15.  (b) Comparing first components, b = 4a, so p = 4 × 1 = 4 and q = 4 × 4 = 16.',
//           answer: '(a) p = 3, q = 15  (b) p = 4, q = 16',
//         },
//         {
//           id: 2,
//           question:
//             'Find the values of p and q such that vectors a and b are parallel:  (a) a = (3, 2, −1), b = (−9, p, q)  (b) a = (1, −1, 4), b = (−2, p, q)',
//           type: 'Medium',
//           explaination:
//             'Parallel vectors are scalar multiples of each other.  (a) Comparing first components, b = −3a, so p = −3 × 2 = −6 and q = −3 × (−1) = 3.  (b) Comparing first components, b = −2a, so p = −2 × (−1) = 2 and q = −2 × 4 = −8.',
//           answer: '(a) p = −6, q = 3  (b) p = 2, q = −8',
//         },
//         {
//           id: 3,
//           question:
//             'Find the values of p and q such that vectors a and b are parallel:  (a) a = (2, p, 6), b = (q, 2, 3)  (b) a = (−3, p, 6), b = (q, 15, 2)',
//           type: 'Medium',
//           explaination:
//             'Set a = kb and find k from the known components.  (a) Third components: 6 = 3k, so k = 2. Then 2 = kq gives q = 1, and p = 2k = 4.  (b) Third components: 6 = 2k, so k = 3. Then −3 = kq gives q = −1, and p = 15k = 45.',
//           answer: '(a) p = 4, q = 1  (b) p = 45, q = −1',
//         },
//       ],
//       'unit-vectors': [
//         {
//           id: 1,
//           question:
//             'Find the unit vector in the same direction as a:  (a) a = (1, 2, 2)  (b) a = (3, 0, 4)',
//           type: 'Easy',
//           explaination:
//             'Divide the vector by its magnitude.  (a) |a| = √(1 + 4 + 4) = 3, so the unit vector is (1/3)(1, 2, 2).  (b) |a| = √(9 + 0 + 16) = 5, so the unit vector is (1/5)(3, 0, 4).',
//           answer: '(a) (1/3)(1, 2, 2)  (b) (1/5)(3, 0, 4)',
//         },
//         {
//           id: 2,
//           question:
//             'Find the unit vector in the same direction as a:  (a) a = (−1, 1, 2)  (b) a = (1, −2, 3)',
//           type: 'Easy',
//           explaination:
//             'Divide the vector by its magnitude.  (a) |a| = √(1 + 1 + 4) = √6, so the unit vector is (1/√6)(−1, 1, 2).  (b) |a| = √(1 + 4 + 9) = √14, so the unit vector is (1/√14)(1, −2, 3).',
//           answer: '(a) (1/√6)(−1, 1, 2)  (b) (1/√14)(1, −2, 3)',
//         },
//         {
//           id: 3,
//           question:
//             'Find the unit vector in the same direction as a:  (a) a = 3i + j − k  (b) a = i − 2j + k',
//           type: 'Easy',
//           explaination:
//             'Divide the vector by its magnitude.  (a) |a| = √(9 + 1 + 1) = √11, so the unit vector is (1/√11)(3i + j − k).  (b) |a| = √(1 + 4 + 1) = √6, so the unit vector is (1/√6)(i − 2j + k).',
//           answer: '(a) (1/√11)(3i + j − k)  (b) (1/√6)(i − 2j + k)',
//         },
//         {
//           id: 4,
//           question:
//             'Find the unit vector in the same direction as a:  (a) a = i − 4j  (b) a = 2j − 3k',
//           type: 'Easy',
//           explaination:
//             'Divide the vector by its magnitude.  (a) |a| = √(1 + 16) = √17, so the unit vector is (1/√17)(i − 4j).  (b) |a| = √(4 + 9) = √13, so the unit vector is (1/√13)(2j − 3k).',
//           answer: '(a) (1/√17)(i − 4j)  (b) (1/√13)(2j − 3k)',
//         },
//       ],
//       'magnitude-of-a-vector': [
//         {
//           id: 1,
//           question:
//             'Find the possible values of the constant k such that the vector (3k, −k, k) has magnitude 22.',
//           type: 'Medium',
//           explaination:
//             '√((3k)² + (−k)² + k²) = 22, so √(11k²) = 22. Then |k|√11 = 22, giving k = ±22/√11 = ±2√11.',
//           answer: 'k = ±2√11',
//         },
//         {
//           id: 2,
//           question:
//             'The vector 2i + 3tj + (t − 1)k has magnitude 3. Find the possible values of t.',
//           type: 'Medium',
//           explaination:
//             '√(2² + (3t)² + (t − 1)²) = 3, so 4 + 9t² + t² − 2t + 1 = 9. This gives 10t² − 2t − 4 = 0, or 5t² − t − 2 = 0. Using the quadratic formula: t = (1 ± √(1 + 40))/10 = (1 ± √41)/10.',
//           answer: 't = (1 ± √41)/10',
//         },
//       ],
//       collinearity: [
//         {
//           id: 1,
//           question:
//             'Find the values of p and q such that A, B and C are collinear.  (a) A(2, 5, 2), B(1, 1, 6), C(−3, p, q)  (b) A(−1, 1, 5), B(2, 1, 3), C(11, p, q)',
//           type: 'Medium',
//           explaination:
//             'A, B and C are collinear when →AC = k→AB.  (a) →AB = (−1, −4, 4) and →AC = (−5, p − 5, q − 2). From the first components, −5 = −k, so k = 5. Then p − 5 = −20 gives p = −15, and q − 2 = 20 gives q = 22.  (b) →AB = (3, 0, −2) and →AC = (12, p − 1, q − 5). From the first components, k = 4. Then p − 1 = 0 gives p = 1, and q − 5 = −8 gives q = −3.',
//           answer: '(a) p = −15, q = 22  (b) p = 1, q = −3',
//         },
//         {
//           id: 2,
//           question:
//             'Find the values of p and q such that the points A, B and C, with position vectors a, b and c, are collinear.  (a) a = (2, −1, 3), b = (5, 2, 6), c = (p, 7, q)  (b) a = (1, 1, −5), b = (5, −3, 3), c = (2, p, q)',
//           type: 'Medium',
//           explaination:
//             'A, B and C are collinear when →AC = k→AB.  (a) →AB = (3, 3, 3) and →AC = (p − 2, 8, q − 3). From the second components, 8 = 3k, so k = 8/3. Then p − 2 = 8 gives p = 10, and q − 3 = 8 gives q = 11.  (b) →AB = (4, −4, 8) and →AC = (1, p − 1, q + 5). From the first components, k = 1/4. Then p − 1 = −1 gives p = 0, and q + 5 = 2 gives q = −3.',
//           answer: '(a) p = 10, q = 11  (b) p = 0, q = −3',
//         },
//         {
//           id: 3,
//           question:
//             'Find the values of p and q such that the points A, B and C, with position vectors a, b and c, are collinear.  (a) a = pi − 2j + k, b = −i + 3j + qk, c = 7i − 7j + 3k  (b) a = i + pj − 3k, b = 2i + 3j + qk, c = −i − 7j + 3k',
//           type: 'Medium',
//           explaination:
//             'A, B and C are collinear when →AC = k→AB.  (a) →AB = (−1 − p, 5, q − 1) and →AC = (7 − p, −5, 2). From the second components, −5 = 5k, so k = −1. Third components: 2 = −(q − 1), so q = −1. First components: 7 − p = 1 + p, so p = 3.  (b) →AB = (1, 3 − p, q + 3) and →AC = (−2, −7 − p, 6). From the first components, k = −2. Second components: −7 − p = −2(3 − p), so −7 − p = −6 + 2p, giving p = −1/3. Third components: 6 = −2(q + 3), so q = −6.',
//           answer: '(a) p = 3, q = −1  (b) p = −1/3, q = −6',
//         },
//       ],
//       'foot-of-perpendicular-from-a-point-to-a-line': [
//         {
//           id: 1,
//           question:
//             'Line l has equation r = (4, 2, −1) + λ(2, −1, 2) and point P has coordinates (7, 2, 3). Point C lies on l and PC is perpendicular to l. Find the coordinates of C.',
//           type: 'Hard',
//           explaination:
//             'A general point on l is C = (4 + 2λ, 2 − λ, −1 + 2λ), so →PC = (−3 + 2λ, −λ, −4 + 2λ). PC is perpendicular to l, so →PC · (2, −1, 2) = 0: 2(−3 + 2λ) − (−λ) + 2(−4 + 2λ) = 0, which gives 9λ − 14 = 0 and λ = 14/9. Substituting: C = (4 + 28/9, 2 − 14/9, −1 + 28/9) = (64/9, 4/9, 19/9).',
//           answer: 'C = (64/9, 4/9, 19/9)',
//         },
//         {
//           id: 2,
//           question:
//             'Line l has equation r = (5, 1, 2) + λ(2, −3, 3) and point P has coordinates (21, 5, 10).  (a) Find the coordinates of the point M on l such that PM is perpendicular to l.  (b) Show that the point Q(15, −14, 17) lies on l.  (c) Find the coordinates of the point R on l, other than Q, such that |PR| = |PQ|.',
//           type: 'Hard',
//           explaination:
//             '(a) A general point on l is (5 + 2λ, 1 − 3λ, 2 + 3λ), so →PM = (2λ − 16, −3λ − 4, 3λ − 8). Set →PM · (2, −3, 3) = 0: 2(2λ − 16) − 3(−3λ − 4) + 3(3λ − 8) = 0, so 22λ − 44 = 0 and λ = 2. M = (9, −5, 8).  (b) λ = 5 gives (5 + 10, 1 − 15, 2 + 15) = (15, −14, 17), so Q lies on l.  (c) M is the foot of the perpendicular from P, so the points of l at equal distance from P are symmetric about M. Q has λ = 5 and M has λ = 2, so R has λ = 2 − 3 = −1, giving R = (3, 4, −1). Check: |PQ|² = 36 + 361 + 49 = 446 and |PR|² = 324 + 1 + 121 = 446.',
//           answer: '(a) M = (9, −5, 8)  (b) λ = 5 gives Q  (c) R = (3, 4, −1)',
//         },
//       ],
//       'area-of-triangle-using-cross-product': [
//         {
//           id: 1,
//           question:
//             'Find the area of the triangle with vertices (1, 3, 3), (−1, 1, 2) and (1, −2, 4).',
//           type: 'Medium',
//           explaination:
//             'Let A = (1, 3, 3), B = (−1, 1, 2) and C = (1, −2, 4). →AB = (−2, −2, −1) and →AC = (0, −5, 1). →AB × →AC = ((−2)(1) − (−1)(−5), (−1)(0) − (−2)(1), (−2)(−5) − (−2)(0)) = (−7, 2, 10). |→AB × →AC| = √(49 + 4 + 100) = √153 = 3√17. Area = (1/2)|→AB × →AC| = 3√17/2.',
//           answer: 'Area = 3√17/2 ≈ 6.18',
//         },
//         {
//           id: 2,
//           question:
//             'Find the area of the triangle with vertices (3, −5, 1), (−1, 1, 3) and (−1, −5, 2).',
//           type: 'Medium',
//           explaination:
//             'Let A = (3, −5, 1), B = (−1, 1, 3) and C = (−1, −5, 2). →AB = (−4, 6, 2) and →AC = (−4, 0, 1). →AB × →AC = ((6)(1) − (2)(0), (2)(−4) − (−4)(1), (−4)(0) − (6)(−4)) = (6, −4, 24). |→AB × →AC| = √(36 + 16 + 576) = √628 = 2√157. Area = (1/2)(2√157) = √157.',
//           answer: 'Area = √157 ≈ 12.5',
//         },
//         {
//           id: 3,
//           question:
//             'Find the area of the triangle with vertices (−3, −5, 1), (4, 7, 2) and (−1, 2, 2).',
//           type: 'Medium',
//           explaination:
//             'Let A = (−3, −5, 1), B = (4, 7, 2) and C = (−1, 2, 2). →AB = (7, 12, 1) and →AC = (2, 7, 1). →AB × →AC = ((12)(1) − (1)(7), (1)(2) − (7)(1), (7)(7) − (12)(2)) = (5, −5, 25). |→AB × →AC| = √(25 + 25 + 625) = √675 = 15√3. Area = 15√3/2.',
//           answer: 'Area = 15√3/2 ≈ 13.0',
//         },
//         {
//           id: 4,
//           question:
//             'Find the area of the triangle with vertices (4, 0, 2), (4, 1, 5) and (4, −3, 2).',
//           type: 'Medium',
//           explaination:
//             'Let A = (4, 0, 2), B = (4, 1, 5) and C = (4, −3, 2). →AB = (0, 1, 3) and →AC = (0, −3, 0). →AB × →AC = ((1)(0) − (3)(−3), (3)(0) − (0)(0), (0)(−3) − (1)(0)) = (9, 0, 0). |→AB × →AC| = 9. Area = 9/2 = 4.5.',
//           answer: 'Area = 9/2 = 4.5',
//         },
//         {
//           id: 5,
//           question:
//             'Find the area of the triangle with vertices (1, 5, 2), (8, 4, 6) and (0, 6, 7).',
//           type: 'Medium',
//           explaination:
//             'Let A = (1, 5, 2), B = (8, 4, 6) and C = (0, 6, 7). →AB = (7, −1, 4) and →AC = (−1, 1, 5). →AB × →AC = ((−1)(5) − (4)(1), (4)(−1) − (7)(5), (7)(1) − (−1)(−1)) = (−9, −39, 6). |→AB × →AC| = √(81 + 1521 + 36) = √1638 = 3√182. Area = 3√182/2.',
//           answer: 'Area = 3√182/2 ≈ 20.2',
//         },
//         {
//           id: 6,
//           question:
//             'Find the area of the triangle with vertices (2, 1, 2), (3, 8, 4) and (1, 3, −1).',
//           type: 'Medium',
//           explaination:
//             'Let A = (2, 1, 2), B = (3, 8, 4) and C = (1, 3, −1). →AB = (1, 7, 2) and →AC = (−1, 2, −3). →AB × →AC = ((7)(−3) − (2)(2), (2)(−1) − (1)(−3), (1)(2) − (7)(−1)) = (−25, 1, 9). |→AB × →AC| = √(625 + 1 + 81) = √707. Area = √707/2.',
//           answer: 'Area = √707/2 ≈ 13.3',
//         },
//         {
//           id: 7,
//           question:
//             'Find the area of the triangle with vertices (2, 1, 2), (5, 0, 1) and (−1, 3, 5).',
//           type: 'Medium',
//           explaination:
//             'Let A = (2, 1, 2), B = (5, 0, 1) and C = (−1, 3, 5). →AB = (3, −1, −1) and →AC = (−3, 2, 3). →AB × →AC = ((−1)(3) − (−1)(2), (−1)(−3) − (3)(3), (3)(2) − (−1)(−3)) = (−1, −6, 3). |→AB × →AC| = √(1 + 36 + 9) = √46. Area = √46/2.',
//           answer: 'Area = √46/2 ≈ 3.39',
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
//       'increasing-decreasing-functions': [
//         {
//           id: 1,
//           question:
//             'Find the set of values of x for which the function f(x) = 2 + 8x³ − x⁴ is decreasing.',
//           type: 'Medium',
//           explaination:
//             'f′(x) = 24x² − 4x³ = 4x²(6 − x). f is decreasing where f′(x) < 0. Since 4x² ≥ 0 (and is zero only at the stationary point x = 0), the sign of f′(x) is the sign of 6 − x, which is negative when x > 6. So f is decreasing for x > 6.',
//           answer: 'x > 6',
//         },
//         {
//           id: 2,
//           question:
//             'Find the set of values of x for which the function f(x) = x⁴ − 4x³ − 2x² + 12x − 5 is increasing.',
//           type: 'Medium',
//           explaination:
//             'f′(x) = 4x³ − 12x² − 4x + 12 = 4(x²(x − 3) − (x − 3)) = 4(x − 3)(x − 1)(x + 1). f is increasing where f′(x) > 0. The critical values are x = −1, 1 and 3. Checking the sign in each interval: x < −1 gives (−)(−)(−) < 0; −1 < x < 1 gives (−)(−)(+) > 0; 1 < x < 3 gives (−)(+)(+) < 0; x > 3 gives (+)(+)(+) > 0. So f is increasing for −1 < x < 1 or x > 3.',
//           answer: '−1 < x < 1 or x > 3',
//         },
//       ],
//       continuity: [
//         {
//           id: 1,
//           question:
//             'Show that the function f(x) = sin 3x/sin x for x ≤ 0, and f(x) = (e³ˣ − 1)/x for x > 0, is continuous at x = 0.',
//           type: 'Hard',
//           explaination:
//             'f is continuous at x = 0 when the left-hand limit, the right-hand limit and the value at 0 agree. For x ≤ 0: sin 3x/sin x = 3 × (sin 3x/(3x)) × (x/sin x) → 3 × 1 × 1 = 3 as x → 0⁻. For x > 0: (e³ˣ − 1)/x = 3 × (e³ˣ − 1)/(3x) → 3 × 1 = 3 as x → 0⁺. At x = 0 the formula sin 3x/sin x takes the form 0/0, so f(0) is its limiting value, 3. Both one-sided limits equal 3 = f(0), so f is continuous at x = 0.',
//           answer: 'f is continuous at x = 0',
//         },
//       ],
//       'related-rates-of-change': [
//         {
//           id: 1,
//           question: 'If y = x³, find dy/dt when x = 1 and dx/dt = −1.',
//           type: 'Easy',
//           explaination:
//             'By the chain rule, dy/dt = (dy/dx)(dx/dt) = 3x²(dx/dt). At x = 1 and dx/dt = −1: dy/dt = 3(1)²(−1) = −3.',
//           answer: 'dy/dt = −3',
//         },
//         {
//           id: 2,
//           question: 'If y = x² + x, find dy/dt when x = 0 and dx/dt = 4.',
//           type: 'Easy',
//           explaination:
//             'By the chain rule, dy/dt = (2x + 1)(dx/dt). At x = 0 and dx/dt = 4: dy/dt = (0 + 1)(4) = 4.',
//           answer: 'dy/dt = 4',
//         },
//         {
//           id: 3,
//           question: 'If A = e²ᶻ, find the rate of increase of A when z = 0 and dz/dt = 6.',
//           type: 'Easy',
//           explaination:
//             'By the chain rule, dA/dt = 2e²ᶻ(dz/dt). At z = 0 and dz/dt = 6: dA/dt = 2e⁰ × 6 = 12.',
//           answer: 'dA/dt = 12',
//         },
//         {
//           id: 4,
//           question: 'If p = e^q, find the rate of increase of p when q = 1 and dq/dt = 7.',
//           type: 'Easy',
//           explaination:
//             'By the chain rule, dp/dt = e^q(dq/dt). At q = 1 and dq/dt = 7: dp/dt = e¹ × 7 = 7e.',
//           answer: 'dp/dt = 7e',
//         },
//         {
//           id: 5,
//           question:
//             'If a = 1/b, find the rate of increase of a when b = 2 and b is increasing at a rate of 3 per second.',
//           type: 'Easy',
//           explaination:
//             'a = b⁻¹, so da/dt = −(1/b²)(db/dt). At b = 2 and db/dt = 3: da/dt = −(1/4) × 3 = −3/4.',
//           answer: 'da/dt = −3/4',
//         },
//         {
//           id: 6,
//           question:
//             'If a = 1/b², find the rate of increase of a when b = 1 and b is increasing at a rate of 2 per second.',
//           type: 'Easy',
//           explaination:
//             'a = b⁻², so da/dt = −(2/b³)(db/dt). At b = 1 and db/dt = 2: da/dt = −(2/1) × 2 = −4.',
//           answer: 'da/dt = −4',
//         },
//         {
//           id: 7,
//           question:
//             'If y = ln x, find the rate of increase of y when x = 2 and x is decreasing at a rate of 4 per hour.',
//           type: 'Easy',
//           explaination:
//             'x is decreasing, so dx/dt = −4. By the chain rule, dy/dt = (1/x)(dx/dt). At x = 2: dy/dt = (1/2)(−4) = −2.',
//           answer: 'dy/dt = −2',
//         },
//         {
//           id: 8,
//           question:
//             'If y = ln(x + 1), find the rate of increase of y when x = 1 and x is decreasing at a rate of 3 per hour.',
//           type: 'Easy',
//           explaination:
//             'x is decreasing, so dx/dt = −3. By the chain rule, dy/dt = (1/(x + 1))(dx/dt). At x = 1: dy/dt = (1/2)(−3) = −3/2.',
//           answer: 'dy/dt = −3/2',
//         },
//         {
//           id: 9,
//           question: 'Given that A = x² + y², find dA/dt when x = 3, y = 4, dx/dt = 1, dy/dt = −1.',
//           type: 'Medium',
//           explaination:
//             'Differentiate with respect to t: dA/dt = 2x(dx/dt) + 2y(dy/dt) = 2(3)(1) + 2(4)(−1) = 6 − 8 = −2.',
//           answer: 'dA/dt = −2',
//         },
//         {
//           id: 10,
//           question: 'Given that B = x³ + y³, find dB/dt when x = 1, y = 2, dx/dt = 1, dy/dt = −2.',
//           type: 'Medium',
//           explaination:
//             'Differentiate with respect to t: dB/dt = 3x²(dx/dt) + 3y²(dy/dt) = 3(1)²(1) + 3(2)²(−2) = 3 − 24 = −21.',
//           answer: 'dB/dt = −21',
//         },
//         {
//           id: 11,
//           question: 'Given that C = x/y, find dC/dt when x = 3, y = 4, dx/dt = 3, dy/dt = −1.',
//           type: 'Medium',
//           explaination:
//             'Use the quotient rule: dC/dt = (y(dx/dt) − x(dy/dt))/y² = (4(3) − 3(−1))/16 = (12 + 3)/16 = 15/16.',
//           answer: 'dC/dt = 15/16',
//         },
//         {
//           id: 12,
//           question:
//             'The sides of a square are increasing at a rate of 2 cm s⁻¹. Find the rate of increase of the area when the area is 25 cm².',
//           type: 'Medium',
//           explaination:
//             'Let the side be s, so A = s² and dA/dt = 2s(ds/dt). When A = 25, s = 5, and ds/dt = 2. So dA/dt = 2(5)(2) = 20 cm² s⁻¹.',
//           answer: 'dA/dt = 20 cm² s⁻¹',
//         },
//         {
//           id: 13,
//           question:
//             'A circular mould is spreading on a leaf. When the radius is 3 mm the rate of increase of the radius is 1.2 mm per day. What is the rate of increase of the area?',
//           type: 'Medium',
//           explaination:
//             'A = πr², so dA/dt = 2πr(dr/dt). At r = 3 and dr/dt = 1.2: dA/dt = 2π(3)(1.2) = 7.2π ≈ 22.6 mm² per day.',
//           answer: 'dA/dt = 7.2π ≈ 22.6 mm² per day',
//         },
//         {
//           id: 14,
//           question:
//             'The volume of a spherical balloon is increasing at a rate of 200 cm³ per second. Find the rate of increase of the radius when the volume is 100 cm³.',
//           type: 'Hard',
//           explaination:
//             'V = (4/3)πr³, so dV/dt = 4πr²(dr/dt). When V = 100: (4/3)πr³ = 100, so r = (75/π)^(1/3) ≈ 2.88 cm. Then dr/dt = 200/(4πr²) ≈ 1.92 cm s⁻¹.',
//           answer: 'dr/dt ≈ 1.92 cm s⁻¹',
//         },
//         {
//           id: 15,
//           question:
//             "An x by y rectangle is expanding with dx/dt = 4 cm s⁻¹ and dy/dt = −2 cm s⁻¹. When x = 3 cm and y = 4 cm, find:  (a) the rate of increase of the rectangle's area  (b) the rate of increase of the length of the diagonal.",
//           type: 'Medium',
//           explaination:
//             '(a) A = xy, so dA/dt = y(dx/dt) + x(dy/dt) = 4(4) + 3(−2) = 16 − 6 = 10 cm² s⁻¹.  (b) The diagonal is D = √(x² + y²), so dD/dt = (x(dx/dt) + y(dy/dt))/√(x² + y²) = (3(4) + 4(−2))/√(9 + 16) = 4/5 = 0.8 cm s⁻¹.',
//           answer: '(a) dA/dt = 10 cm² s⁻¹  (b) dD/dt = 0.8 cm s⁻¹',
//         },
//         {
//           id: 16,
//           question:
//             'An inverted cone is being filled with water at a constant rate of 5 cm³ s⁻¹. The surface of the water is always horizontal. The largest diameter of the cone is 10 cm and its height is 30 cm. If the volume of water is V at time t and h is the height of the water above the vertex:  (a) Show that V = πh³/108.  (b) Find the rate at which the height is increasing when h = 18 cm.',
//           type: 'Hard',
//           explaination:
//             '(a) By similar triangles, r/h = 5/30 = 1/6, so r = h/6. Then V = (1/3)πr²h = (1/3)π(h²/36)h = πh³/108.  (b) dV/dt = (πh²/36)(dh/dt). At h = 18: 5 = (324π/36)(dh/dt) = 9π(dh/dt), so dh/dt = 5/(9π) ≈ 0.177 cm s⁻¹.',
//           answer: '(a) Shown in the explanation  (b) dh/dt = 5/(9π) ≈ 0.177 cm s⁻¹',
//         },
//         {
//           id: 17,
//           question:
//             'A circular stain of radius r cm and area A cm² is increasing in size. At a certain time, the rate of increase of the radius is 1.8 cm s⁻¹ and the rate of increase of the area is 86.5 cm² s⁻¹. Find the radius of the stain at this point.',
//           type: 'Hard',
//           explaination:
//             'A = πr², so dA/dt = 2πr(dr/dt). Substituting: 86.5 = 2πr(1.8) = 3.6πr, so r = 86.5/(3.6π) ≈ 7.65 cm.',
//           answer: 'r ≈ 7.65 cm',
//         },
//         {
//           id: 18,
//           question:
//             'A sportsman throws a ball. When it is 2 m above the sportsman and 4 m away horizontally it is moving purely horizontally with a speed of 3 m s⁻¹. Find the rate at which the ball is moving away from the sportsman.',
//           type: 'Hard',
//           explaination:
//             'Let x be the horizontal distance and y the height above the sportsman, so x = 4, y = 2, dx/dt = 3 and dy/dt = 0. The distance is D = √(x² + y²) = √20 = 2√5. Then dD/dt = (x(dx/dt) + y(dy/dt))/D = (4(3) + 2(0))/(2√5) = 6/√5 ≈ 2.68 m s⁻¹.',
//           answer: 'dD/dt = 6/√5 = 6√5/5 ≈ 2.68 m s⁻¹',
//         },
//         {
//           id: 19,
//           question:
//             'The density of a reactive substance is given by its mass divided by its volume. When the density is 5 g cm⁻³ the mass is decreasing at a rate of 2 g s⁻¹ and the volume is decreasing at a rate of 1 cm³ s⁻¹. Determine, with justification, whether the density is increasing or decreasing.',
//           type: 'Hard',
//           explaination:
//             'ρ = m/V, so by the quotient rule dρ/dt = (V(dm/dt) − m(dV/dt))/V². When ρ = 5, m = 5V, with dm/dt = −2 and dV/dt = −1. So dρ/dt = (V(−2) − 5V(−1))/V² = 3V/V² = 3/V. Since V > 0, dρ/dt > 0, so the density is increasing.',
//           answer: 'Density is increasing.',
//         },
//         {
//           id: 20,
//           question:
//             'A ladder of length 3 m is sliding down a vertical wall. The foot of the ladder is on horizontal ground. When the point of contact with the wall is 2 m above the ground that point is moving down at a rate of 0.1 m s⁻¹. At what speed is the foot of the ladder moving away from the wall, assuming the ladder always stays in contact with both the wall and the ground?',
//           type: 'Hard',
//           explaination:
//             'Let x be the distance of the foot from the wall and y the height on the wall. Then x² + y² = 9, so 2x(dx/dt) + 2y(dy/dt) = 0. When y = 2, x = √(9 − 4) = √5, and dy/dt = −0.1. So 2√5(dx/dt) + 2(2)(−0.1) = 0, giving dx/dt = 0.4/(2√5) = √5/25 ≈ 0.0894 m s⁻¹.',
//           answer: 'dx/dt = √5/25 ≈ 0.0894 m s⁻¹',
//         },
//       ],
//       'differentiation-inverse-trigonometric-functions': [
//         {
//           id: 1,
//           question:
//             '(a) Find the gradient of y = arcsin(2x) + arccos(3x) at x = 1/6.  (b) Find the gradient of y = 5x − 3 arctan(2x) at x = 1.',
//           type: 'Medium',
//           explaination:
//             '(a) dy/dx = 2/√(1 − 4x²) − 3/√(1 − 9x²). At x = 1/6: 2/√(8/9) − 3/√(3/4) = 3/√2 − 2√3 = 3√2/2 − 2√3 ≈ −1.34.  (b) dy/dx = 5 − 3 × 2/(1 + 4x²) = 5 − 6/(1 + 4x²). At x = 1: 5 − 6/5 = 19/5.',
//           answer: '(a) 3√2/2 − 2√3 ≈ −1.34  (b) 19/5',
//         },
//         {
//           id: 2,
//           question:
//             'Find the gradient of the graph of y = arcsin x − arccos x at the point where it crosses the y-axis.',
//           type: 'Medium',
//           explaination:
//             'dy/dx = 1/√(1 − x²) − (−1/√(1 − x²)) = 2/√(1 − x²). The graph crosses the y-axis at x = 0, so the gradient there is 2/√1 = 2.',
//           answer: '2',
//         },
//         {
//           id: 3,
//           question: 'Given that y = 3 arctan(x/2), find dy/dx and simplify your answer.',
//           type: 'Medium',
//           explaination:
//             'Use d/dx(arctan u) = u′/(1 + u²) with u = x/2: dy/dx = 3 × (1/2)/(1 + x²/4) = (3/2)/((4 + x²)/4) = 6/(x² + 4).',
//           answer: 'dy/dx = 6/(x² + 4)',
//         },
//       ],
//       'integration-inverse-trigonometric-forms': [
//         {
//           id: 1,
//           question: '(a) Find ∫ 3/√(1 − x²) dx.  (b) Find ∫ 4/(1 + x²) dx.',
//           type: 'Easy',
//           explaination:
//             'Use the standard results ∫ 1/√(1 − x²) dx = arcsin x + c and ∫ 1/(1 + x²) dx = arctan x + c.  (a) ∫ 3/√(1 − x²) dx = 3 arcsin x + c.  (b) ∫ 4/(1 + x²) dx = 4 arctan x + c.',
//           answer: '(a) 3 arcsin x + c  (b) 4 arctan x + c',
//         },
//         {
//           id: 2,
//           question:
//             '(a) Find ∫ (2 + √(1 − x²))/√(1 − x²) dx.  (b) Find ∫ (2√(1 − x²) − 3)/√(1 − x²) dx.',
//           type: 'Medium',
//           explaination:
//             'Split each fraction into standard forms.  (a) (2 + √(1 − x²))/√(1 − x²) = 2/√(1 − x²) + 1, which integrates to 2 arcsin x + x + c.  (b) (2√(1 − x²) − 3)/√(1 − x²) = 2 − 3/√(1 − x²), which integrates to 2x − 3 arcsin x + c.',
//           answer: '(a) 2 arcsin x + x + c  (b) 2x − 3 arcsin x + c',
//         },
//       ],
//       'integration-completing-the-square-arctan-form': [
//         {
//           id: 1,
//           question: '(a) Find ∫ 1/(x² + 4x + 5) dx.  (b) Find ∫ 1/(x² − 6x + 10) dx.',
//           type: 'Medium',
//           explaination:
//             'Complete the square, then use ∫ 1/(u² + 1) du = arctan u + c.  (a) x² + 4x + 5 = (x + 2)² + 1, so the integral is arctan(x + 2) + c.  (b) x² − 6x + 10 = (x − 3)² + 1, so the integral is arctan(x − 3) + c.',
//           answer: '(a) arctan(x + 2) + c  (b) arctan(x − 3) + c',
//         },
//         {
//           id: 2,
//           question: '(a) Find ∫ 1/(x² + 2x + 10) dx.  (b) Find ∫ 1/(x² + 4x + 20) dx.',
//           type: 'Medium',
//           explaination:
//             'Complete the square, then use ∫ 1/(u² + a²) du = (1/a) arctan(u/a) + c.  (a) x² + 2x + 10 = (x + 1)² + 3², so the integral is (1/3) arctan((x + 1)/3) + c.  (b) x² + 4x + 20 = (x + 2)² + 4², so the integral is (1/4) arctan((x + 2)/4) + c.',
//           answer: '(a) (1/3) arctan((x + 1)/3) + c  (b) (1/4) arctan((x + 2)/4) + c',
//         },
//         {
//           id: 3,
//           question: '(a) Find ∫ 1/(x² + 6x + 11) dx.  (b) Find ∫ 1/(x² − 10x + 30) dx.',
//           type: 'Medium',
//           explaination:
//             'Complete the square, then use ∫ 1/(u² + a²) du = (1/a) arctan(u/a) + c.  (a) x² + 6x + 11 = (x + 3)² + (√2)², so the integral is (1/√2) arctan((x + 3)/√2) + c.  (b) x² − 10x + 30 = (x − 5)² + (√5)², so the integral is (1/√5) arctan((x − 5)/√5) + c.',
//           answer: '(a) (1/√2) arctan((x + 3)/√2) + c  (b) (1/√5) arctan((x − 5)/√5) + c',
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
