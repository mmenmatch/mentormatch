import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findSubtopic, topics } from '../../../../../../data/aa-hl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { AAHLQuestionAndAnswer } from '../../../../../../data/aa-hl'
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

// export const metaData: any = {
//   'counting-and-probability': {
//     'multiplication-principle': {
//       metaTitle: 'Fundamental Counting Principle Questions | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL fundamental counting principle questions. Use the multiplication principle to count outcomes when choices are made in stages.',
//       title: 'IB Maths AA HL Multiplication Principle Questions',
//       description:
//         'Fundamental counting principle questions: when a task is made of independent stages, multiply the number of choices at each stage.',
//     },

//     // Not in the HL brief — left unchanged
//     'addition-principle': {
//       metaTitle: 'Addition Principle Questions | IB Maths AA HL',
//       metaDescription:
//         'Practise the addition principle for IB Maths AA HL. Count outcomes across mutually exclusive alternatives by adding the choices in each case.',
//       title: 'Addition Principle: Questions & Answers',
//       description:
//         'Understand how to count possible outcomes by adding the numbers of choices across mutually exclusive cases.',
//     },

//     // Not in the HL brief — left unchanged
//     'Multiplication-Addition-Principles': {
//       metaTitle: 'Addition and Multiplication Principle Questions | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL addition and multiplication principle questions. Add outcomes across separate cases and multiply choices across successive stages.',
//       title: 'Multiplication & Addition Principles: Questions & Answers',
//       description:
//         'Combine the multiplication and addition principles to solve counting problems involving multiple stages and alternative cases.',
//     },

//     permutations: {
//       metaTitle: 'Permutations Questions | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL permutations questions: count arrangements where order matters, using factorials and nPr, including repeated objects.',
//       title: 'IB Maths AA HL Permutations Questions',
//       description:
//         'Permutations questions on counting arrangements where order matters. Use factorials and nPr, and adjust for repeated objects.',
//     },

//     combinations: {
//       metaTitle: 'nCr Formula: Combinations Questions | IB AA HL',
//       metaDescription:
//         'Use the nCr formula in IB Maths AA HL to count selections where order does not matter, with mark scheme working.',
//       title: 'IB Maths AA HL Combinations Questions',
//       description:
//         'The nCr formula counts the ways to choose r items from n when order does not matter. These questions apply the combination formula to selections and committees.',
//     },

//     'counting-distribution-into-boxes': {
//       metaTitle: 'Stars and Bars Counting Questions | IB AA HL',
//       metaDescription:
//         'Use the stars and bars method in IB Maths AA HL to count ways of distributing identical objects into boxes.',
//       title: 'IB Maths AA HL Counting: Distribution into Boxes',
//       description:
//         'Distributing identical objects into boxes is a classic counting problem. The stars and bars method turns it into a single combination.',
//     },

//     'combinations-geometric': {
//       metaTitle: 'Combinations in Geometry Problems | IB AA HL',
//       metaDescription:
//         'Combinations geometry problems for IB Maths AA HL: count the lines, triangles and diagonals formed from a set of points.',
//       title: 'IB Maths AA HL Combinations in Geometry Questions',
//       description:
//         'Counting lines, triangles or diagonals from a set of points is a combinations geometry problem: each shape is a selection of points where order does not matter.',
//     },

//     'combinations-handshake-problem': {
//       metaTitle: 'Handshake Problem Questions | IB Maths AA HL',
//       metaDescription:
//         'Solve the handshake problem in IB Maths AA HL with combinations: count handshakes, find the group size, and extend to similar problems.',
//       title: 'IB Maths AA HL Handshake Problem Questions',
//       description:
//         'The handshake problem asks how many handshakes happen when everyone in a group shakes hands once. It is a combination of 2 from n.',
//     },

//     'combinations-with-restrictions': {
//       metaTitle: 'Combinations with Restrictions | IB Maths AA HL',
//       metaDescription:
//         'Combinations with restrictions for IB Maths AA HL: selections where certain people or items must be included or left out.',
//       title: 'IB Maths AA HL Combinations with Restrictions Questions',
//       description:
//         'Combinations with restrictions add a condition to a selection: someone must be included, someone must be left out, or a group needs a minimum from each side.',
//     },

//     'probability-combinations': {
//       metaTitle: 'Probability with Combinations | IB Maths AA HL',
//       metaDescription:
//         'Probability with combinations in IB Maths AA HL: count favourable and total selections with nCr to find a probability.',
//       title: 'IB Maths AA HL Probability Using Combinations Questions',
//       description:
//         'When outcomes are selections, probability with combinations is the cleanest method: count the favourable selections, count all selections, and divide.',
//     },
//   },

//   'binomial-series': {
//     'binomial-expansion-applications-and-approximations': {
//       metaTitle: 'Binomial Approximation Questions | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL binomial approximation questions: choose a suitable expansion, approximate the value and interpret the result within the conditions given.',
//       title: 'IB Maths AA HL Binomial Expansion: Applications & Approximations',
//       description:
//         'Use binomial expansions to approximate values such as roots and powers. These binomial approximation questions ask you to choose a suitable substitution and judge how many terms you need.',
//     },

//     'binomial-series-coefficient-problems': {
//       metaTitle: 'Binomial Theorem Questions: Coefficients | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL binomial theorem questions on finding a specified coefficient or term. Identify the general term, match the power and simplify.',
//       title: 'IB Maths AA HL Binomial Series Coefficient Questions',
//       description:
//         'Work through binomial theorem questions that ask for a particular coefficient, a constant term or an unknown in the expansion. Each starts from the general term.',
//     },

//     'binomial-expansion': {
//       metaTitle: 'Binomial Expansion Negative Power Questions | IB Maths AA HL',
//       metaDescription:
//         'Binomial expansion negative power questions for IB Maths AA HL: expand (1+x)^n for negative or fractional n, valid for |x| < 1.',
//       title: 'IB Maths AA HL Binomial Expansion of (1+x)^n for |x| < 1',
//       description:
//         'Practise binomial expansion negative power questions, along with fractional powers. When n is not a positive integer, (1+x)^n becomes an infinite series that is valid only for |x| < 1.',
//     },

//     'binomial-expansion-factoring-out-constant': {
//       metaTitle: 'Binomial Expansion Fractional Power | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL binomial expansion fractional power questions: factor a constant out of (a+bx)^n first, then expand and simplify.',
//       title: 'IB Maths AA HL Binomial Expansion by Factoring Out a Constant',
//       description:
//         'Rewrite (a+bx)^n as a^n(1+bx/a)^n before expanding. These binomial expansion fractional power questions focus on choosing this form and tracking the constant through every term.',
//     },

//     'first-four-terms': {
//       metaTitle: 'First Four Terms of a Binomial Expansion',
//       metaDescription:
//         'Find the first four terms of a binomial expansion in IB Maths AA HL using the binomial theorem, in ascending powers of x.',
//       title: 'IB Maths AA HL First Four Terms of a Binomial Expansion',
//       description:
//         'Many questions ask only for the first four terms of a binomial expansion. These questions write them in ascending powers of x and simplify each coefficient.',
//     },

//     'pascals-triangle-expansion': {
//       metaTitle: "Pascal's Triangle Questions | IB Maths AA HL",
//       metaDescription:
//         "Use Pascal's triangle in IB Maths AA HL to find binomial coefficients and expand brackets quickly for small powers.",
//       title: "IB Maths AA HL Pascal's Triangle Expansion Questions",
//       description:
//         "Each row of Pascal's triangle gives the coefficients of a binomial expansion. These questions use Pascal's triangle for binomial expansion with small powers of n.",
//     },

//     'binomial-coefficients': {
//       metaTitle: 'Binomial Coefficient Questions | IB Maths AA HL',
//       metaDescription:
//         'Calculate a binomial coefficient ⁿCᵣ in IB Maths AA HL and use binomial coefficients to solve problems.',
//       title: 'IB Maths AA HL Binomial Coefficient Questions',
//       description:
//         'A binomial coefficient, ⁿCᵣ, counts the ways to choose r from n and gives each term of an expansion. These questions calculate and apply it.',
//     },

//     'finding-unknown-r': {
//       metaTitle: 'Binomial Expansion: Find r | IB Maths AA HL',
//       metaDescription:
//         'Binomial expansion, find r: identify the term that gives a required power of x, such as the constant term, in IB Maths AA HL.',
//       title: 'IB Maths AA HL Binomial Expansion: Finding the Unknown r',
//       description:
//         'These binomial expansion questions find r: the term number that gives a required power of x, such as the constant term.',
//     },

//     'finding-unknown-n': {
//       metaTitle: 'Binomial Expansion: Find n | IB Maths AA HL',
//       metaDescription:
//         'Binomial expansion, find n: work back from a given coefficient or term to the power of the bracket in IB Maths AA HL.',
//       title: 'IB Maths AA HL Binomial Expansion: Finding the Unknown n',
//       description:
//         'These binomial expansion questions work backwards to find n, the power of the bracket, from a coefficient or term that is given.',
//     },

//     'expansion-with-rational-terms': {
//       metaTitle: 'Binomial Expansion with Fractions | IB AA HL',
//       metaDescription:
//         'Binomial expansion with fractions in IB Maths AA HL: expand brackets containing rational terms such as (x + 1/x)ⁿ.',
//       title: 'IB Maths AA HL Binomial Expansion with Rational Terms',
//       description:
//         'A binomial expansion with fractions, such as (x + 1/x)ⁿ, needs careful work with negative powers. These questions expand and simplify each term.',
//     },
//   },

//   'complex-numbers': {
//     'modulus-argument-form': {
//       metaTitle: 'Modulus–Argument Form: Complex Numbers Practice Questions',
//       metaDescription:
//         'IB Maths AA HL complex numbers practice questions on modulus–argument form. Find the modulus and argument and check the quadrant each time.',
//       title: 'IB Maths AA HL Complex Numbers in Modulus–Argument Form',
//       description:
//         'These complex numbers practice questions cover writing z in the form r(cos θ + i sin θ). Find r and θ, take care with the quadrant, and convert between forms.',
//     },

//     'euler-form': {
//       metaTitle: 'Exponential Form of Complex Numbers | IB Maths AA HL',
//       metaDescription:
//         'Practise the exponential form of complex numbers (Euler form), z = re^(iθ), for IB Maths AA HL. Convert between forms and simplify products and powers.',
//       title: 'IB Maths AA HL Complex Numbers in Euler Form',
//       description:
//         'Questions on the exponential form of complex numbers, z = re^(iθ). Convert between Cartesian, modulus–argument and Euler form, and use it to simplify products, quotients and powers.',
//     },

//     'De-Moivres-theorem-evaluation': {
//       metaTitle: "De Moivre's Theorem Questions and Answers | IB Maths AA HL",
//       metaDescription:
//         "IB Maths AA HL De Moivre's theorem questions and answers. Raise complex numbers to powers in modulus–argument form and simplify the result.",
//       title: "IB Maths AA HL De Moivre's Theorem Questions",
//       description:
//         "Work through De Moivre's theorem questions and answers on evaluating powers of complex numbers. Convert to modulus–argument form first, then apply the theorem.",
//     },

//     'nth-roots-geometric-interpretation': {
//       metaTitle: 'nth Roots of Complex Numbers | IB Maths AA HL',
//       metaDescription:
//         'Find the nth roots of complex numbers and interpret them geometrically for IB Maths AA HL: equally spaced points on a circle in the Argand diagram.',
//       title: 'IB Maths AA HL nth Roots of Complex Numbers',
//       description:
//         'Find the nth roots of complex numbers and see how they sit on the Argand diagram: n points equally spaced on a circle centred at the origin.',
//     },

//     'powers-of-i': {
//       metaTitle: 'Powers of i Questions | IB Maths AA HL',
//       metaDescription:
//         'Powers of i for IB Maths AA HL: use the four-step cycle i, −1, −i, 1 to simplify any power of i quickly.',
//       title: 'IB Maths AA HL Powers of i Questions',
//       description:
//         'Powers of i repeat every four steps: i, −1, −i, 1. These questions use that cycle, also taught as powers of iota, to simplify any power of i.',
//     },

//     'solving-quadratic-equations-with-complex-roots': {
//       metaTitle: 'Complex Roots of Quadratic Equations | IB AA HL',
//       metaDescription:
//         'Find the complex roots of a quadratic equation in IB Maths AA HL when the discriminant is negative, and write them as conjugate pairs.',
//       title: 'IB Maths AA HL Quadratic Equations with Complex Roots',
//       description:
//         'When the discriminant is negative, the complex roots of a quadratic equation come as a conjugate pair. These questions find them with the quadratic formula.',
//     },

//     'division-writing-in-x-iy-form': {
//       metaTitle: 'Division of Complex Numbers | IB Maths AA HL',
//       metaDescription:
//         'Division of complex numbers in IB Maths AA HL: multiply by the conjugate and write the answer in the form x + iy.',
//       title: 'IB Maths AA HL Division of Complex Numbers Questions',
//       description:
//         'Division of complex numbers relies on the complex conjugate. These questions practise dividing complex numbers and writing each answer as x + iy.',
//     },

//     'argand-diagram': {
//       metaTitle: 'Argand Plane Questions | IB Maths AA HL',
//       metaDescription:
//         'Plot complex numbers on the Argand plane in IB Maths AA HL and interpret addition, conjugates and modulus geometrically.',
//       title: 'IB Maths AA HL Argand Diagram Questions',
//       description:
//         'The Argand plane shows every complex number as a point. These questions plot numbers and read addition, conjugates and modulus from the diagram.',
//     },

//     'cartesian-form-from-polar': {
//       metaTitle: 'Polar Form to Rectangular Form | IB Maths AA HL',
//       metaDescription:
//         'Convert complex numbers from polar form to rectangular form in IB Maths AA HL, giving exact Cartesian answers.',
//       title: 'IB Maths AA HL Cartesian Form from Polar Form Questions',
//       description:
//         'Converting polar form to rectangular form turns r cis θ into x + iy. These questions practise the conversion with exact values.',
//     },

//     'loci-on-argand-diagram': {
//       metaTitle: 'Locus of Complex Numbers | IB Maths AA HL',
//       metaDescription:
//         'Sketch the locus of complex numbers on an Argand diagram in IB Maths AA HL: circles, perpendicular bisectors and half-lines.',
//       title: 'IB Maths AA HL Loci on the Argand Diagram Questions',
//       description:
//         'A locus of complex numbers is the set of points that satisfy a condition, such as |z − a| = r. These questions sketch circles, perpendicular bisectors and half-lines.',
//     },
//   },

//   vectors: {
//     'scalar-product': {
//       metaTitle: 'Dot Product Questions (Scalar Product) | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL dot product questions: compute the scalar product of two vectors, test for perpendicularity and use its algebraic properties.',
//       title: 'IB Maths AA HL Scalar Product Questions',
//       description:
//         'Dot product questions on calculating a·b from components, testing whether two vectors are perpendicular and applying the properties of the scalar product.',
//     },

//     'angle-between-vectors': {
//       metaTitle: 'Angle Between Two Vectors: Questions | IB Maths AA HL',
//       metaDescription:
//         'Find the angle between two vectors using the scalar product, for IB Maths AA HL. Apply the formula and interpret acute and obtuse angles.',
//       title: 'IB Maths AA HL Angle Between Vectors Questions',
//       description:
//         'Questions on finding the angle between two vectors. Use the angle between two vectors formula, cos θ = a·b / (|a||b|), and interpret the result in context.',
//     },

//     'vector-equation-of-a-line': {
//       metaTitle: 'Vector Equation of a Line Questions | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL questions on the vector equation of a line, r = a + λb. Form equations, find points and test whether lines intersect.',
//       title: 'IB Maths AA HL Vector Equation of a Line Questions',
//       description:
//         'Practise writing the vector equation of a line, r = a + λb, from a point and a direction or from two points, and use it to work with lines in 3D.',
//     },

//     'cross-Pproduct-scalar-triple-product': {
//       metaTitle: 'Cross Product Questions | IB Maths AA HL Vectors',
//       metaDescription:
//         'IB Maths AA HL cross product questions: find a×b, use it for perpendicular vectors and areas, and evaluate the scalar triple product.',
//       title: 'IB Maths AA HL Cross Product and Scalar Triple Product Questions',
//       description:
//         'Cross product questions on finding a×b, using it to obtain a vector perpendicular to two others, calculating areas and evaluating the scalar triple product.',
//     },

//     'parallel-vectors-finding-unknowns': {
//       metaTitle: 'Parallel Vectors Questions | IB Maths AA HL',
//       metaDescription:
//         'Parallel vectors in IB Maths AA HL: use scalar multiples to test whether vectors are parallel and find unknown components.',
//       title: 'IB Maths AA HL Parallel Vectors Questions',
//       description:
//         'Two vectors are parallel when one is a scalar multiple of the other. These parallel vectors questions use that fact to find unknown components.',
//     },

//     'unit-vectors': {
//       metaTitle: 'Unit Vector Questions | IB Maths AA HL',
//       metaDescription:
//         'Find a unit vector in IB Maths AA HL by dividing a vector by its magnitude, and use unit vectors to scale to any length.',
//       title: 'IB Maths AA HL Unit Vector Questions',
//       description:
//         'A unit vector has magnitude 1 and points in a given direction. These questions apply the unit vector formula, û = u ÷ |u|.',
//     },

//     'magnitude-of-a-vector': {
//       metaTitle: 'Magnitude of a Vector Questions | IB AA HL',
//       metaDescription:
//         'Find the magnitude of a vector in IB Maths AA HL in 2D and 3D, including vectors with unknown components.',
//       title: 'IB Maths AA HL Magnitude of a Vector Questions',
//       description:
//         'The magnitude of a vector is its length. These questions apply the magnitude of vector formula in 2D and 3D, and solve for unknown components.',
//     },

//     collinearity: {
//       metaTitle: 'Collinear Vectors Questions | IB Maths AA HL',
//       metaDescription:
//         'Collinear vectors in IB Maths AA HL: prove that three points lie on one line and find the ratio in which a point divides a line.',
//       title: 'IB Maths AA HL Collinearity Questions',
//       description:
//         'Points are collinear when the vectors between them are parallel and share a point. These collinear vectors questions prove it and find ratios.',
//     },

//     'foot-of-perpendicular-from-a-point-to-a-line': {
//       metaTitle: 'Foot of Perpendicular Questions | IB AA HL',
//       metaDescription:
//         'Find the foot of perpendicular from a point to a line in IB Maths AA HL, and use it to find the shortest distance.',
//       title: 'IB Maths AA HL Foot of the Perpendicular Questions',
//       description:
//         'The foot of perpendicular is the point on a line closest to a given point. These questions find it and use it to calculate the shortest distance.',
//     },

//     'area-of-triangle-using-cross-product': {
//       metaTitle: 'Area of a Triangle Using Vectors | IB AA HL',
//       metaDescription:
//         'Find the area of a triangle using vectors in IB Maths AA HL: half the magnitude of the cross product of two sides.',
//       title: 'IB Maths AA HL Area of a Triangle Using the Cross Product',
//       description:
//         'The area of a triangle using vectors is half the magnitude of the cross product of two of its sides. These questions apply the area of triangle cross product method in 3D.',
//     },
//   },

//   calculus: {
//     limits: {
//       metaTitle: 'Limits Practice Problems | IB Maths AA HL Calculus',
//       metaDescription:
//         "IB Maths AA HL limits practice problems. Evaluate limits algebraically, including indeterminate forms, and use L'Hôpital's rule where appropriate.",
//       title: 'IB Maths AA HL Limits Questions & Practice',
//       description:
//         "Limits practice problems for IB Maths AA HL. Evaluate limits by simplifying, handle indeterminate forms and decide when L'Hôpital's rule applies.",
//     },

//     'implicit-differentiation': {
//       metaTitle: 'Implicit Differentiation Questions | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL implicit differentiation questions: differentiate both sides, find dy/dx and use it for gradients, tangents and normals.',
//       title: 'IB Maths AA HL Implicit Differentiation Questions',
//       description:
//         'Implicit differentiation questions where y cannot easily be written in terms of x. Differentiate term by term, collect the dy/dx terms and use the result.',
//     },

//     'integration-by-parts': {
//       metaTitle: 'Integration by Parts Questions | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL integration by parts questions. Choose u and dv/dx well, apply the formula and handle repeated or definite integrals.',
//       title: 'IB Maths AA HL Integration by Parts Questions',
//       description:
//         'Integration by parts questions for IB Maths AA HL. Decide which factor to differentiate and which to integrate, then apply the formula, repeating it where needed.',
//     },

//     'reduction-formula': {
//       metaTitle: 'Reduction Formula Integration Questions | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL reduction formula integration questions. Derive a reduction formula using integration by parts and apply it to evaluate integrals.',
//       title: 'IB Maths AA HL Reduction Formula Integration Questions',
//       description:
//         'Reduction formula integration questions: use integration by parts to relate Iₙ to a lower-index integral, then apply the reduction formula repeatedly to evaluate it.',
//     },

//     'increasing-decreasing-functions': {
//       metaTitle: 'Increasing and Decreasing Functions | IB AA HL',
//       metaDescription:
//         'Increasing and decreasing functions in IB Maths AA HL: find the intervals using the sign of the first derivative.',
//       title: 'IB Maths AA HL Increasing and Decreasing Functions Questions',
//       description:
//         'A function is increasing where its derivative is positive and decreasing where it is negative. These questions find the intervals of increasing and decreasing functions.',
//     },

//     continuity: {
//       metaTitle: 'Continuity and Differentiability | IB AA HL',
//       metaDescription:
//         'Continuity and differentiability in IB Maths AA HL: test whether a function is continuous or differentiable at a point.',
//       title: 'IB Maths AA HL Continuity Questions',
//       description:
//         'A function is continuous at a point when its limit equals its value there. These questions test continuity and differentiability, including piecewise functions.',
//     },

//     'related-rates-of-change': {
//       metaTitle: 'Related Rates Questions | IB Maths AA HL',
//       metaDescription:
//         'Related rates questions for IB Maths AA HL: link two changing quantities with the chain rule, from expanding circles to filling tanks.',
//       title: 'IB Maths AA HL Related Rates of Change Questions',
//       description:
//         'Related rates questions connect how fast two linked quantities change, such as the radius and area of a spreading circle. The chain rule does the linking.',
//     },

//     'differentiation-inverse-trigonometric-functions': {
//       metaTitle: 'Differentiation of Inverse Trigonometric Functions',
//       metaDescription:
//         'Differentiation of inverse trigonometric functions in IB Maths AA HL: arcsin, arccos and arctan, with the chain rule.',
//       title: 'IB Maths AA HL Differentiation of Inverse Trigonometric Functions',
//       description:
//         'These questions cover the differentiation of inverse trigonometric functions: arcsin, arccos and arctan, often combined with the chain rule.',
//     },

//     'integration-inverse-trigonometric-forms': {
//       metaTitle: 'Integration of Inverse Trigonometric Functions',
//       metaDescription:
//         'Integration of inverse trigonometric functions in IB Maths AA HL: integrals that give arcsin and arctan results.',
//       title: 'IB Maths AA HL Integration: Inverse Trigonometric Forms',
//       description:
//         'Some integrals give inverse trigonometric results. These questions on the integration of inverse trigonometric functions recognise the arcsin and arctan forms.',
//     },

//     'integration-completing-the-square-arctan-form': {
//       metaTitle: 'Integration by Completing the Square | IB AA HL',
//       metaDescription:
//         'Integration by completing the square in IB Maths AA HL: rewrite quadratic denominators to reach the arctan form.',
//       title: 'IB Maths AA HL Integration by Completing the Square',
//       description:
//         'Integration by completing the square turns a quadratic denominator into (x + p)² + q², ready for the standard arctan result.',
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
    'multiplication-addition-principles': {
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

    combinations: {
      metaTitle: 'nCr Formula: Combinations Questions | IB AA HL',
      metaDescription:
        'Use the nCr formula in IB Maths AA HL to count selections where order does not matter, with mark scheme working.',
      title: 'IB Maths AA HL Combinations Questions',
      description:
        'The nCr formula counts the ways to choose r items from n when order does not matter. These questions apply the combination formula to selections and committees.',
    },

    'counting-distribution-into-boxes': {
      metaTitle: 'Stars and Bars Counting Questions | IB AA HL',
      metaDescription:
        'Use the stars and bars method in IB Maths AA HL to count ways of distributing identical objects into boxes.',
      title: 'IB Maths AA HL Counting: Distribution into Boxes',
      description:
        'Distributing identical objects into boxes is a classic counting problem. The stars and bars method turns it into a single combination.',
    },

    'combinations-geometric': {
      metaTitle: 'Combinations in Geometry Problems | IB AA HL',
      metaDescription:
        'Combinations geometry problems for IB Maths AA HL: count the lines, triangles and diagonals formed from a set of points.',
      title: 'IB Maths AA HL Combinations in Geometry Questions',
      description:
        'Counting lines, triangles or diagonals from a set of points is a combinations geometry problem: each shape is a selection of points where order does not matter.',
    },

    'combinations-handshake-problem': {
      metaTitle: 'Handshake Problem Questions | IB Maths AA HL',
      metaDescription:
        'Solve the handshake problem in IB Maths AA HL with combinations: count handshakes, find the group size, and extend to similar problems.',
      title: 'IB Maths AA HL Handshake Problem Questions',
      description:
        'The handshake problem asks how many handshakes happen when everyone in a group shakes hands once. It is a combination of 2 from n.',
    },

    'combinations-with-restrictions': {
      metaTitle: 'Combinations with Restrictions | IB Maths AA HL',
      metaDescription:
        'Combinations with restrictions for IB Maths AA HL: selections where certain people or items must be included or left out.',
      title: 'IB Maths AA HL Combinations with Restrictions Questions',
      description:
        'Combinations with restrictions add a condition to a selection: someone must be included, someone must be left out, or a group needs a minimum from each side.',
    },

    'probability-combinations': {
      metaTitle: 'Probability with Combinations | IB Maths AA HL',
      metaDescription:
        'Probability with combinations in IB Maths AA HL: count favourable and total selections with nCr to find a probability.',
      title: 'IB Maths AA HL Probability Using Combinations Questions',
      description:
        'When outcomes are selections, probability with combinations is the cleanest method: count the favourable selections, count all selections, and divide.',
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

    'first-four-terms': {
      metaTitle: 'First Four Terms of a Binomial Expansion',
      metaDescription:
        'Find the first four terms of a binomial expansion in IB Maths AA HL using the binomial theorem, in ascending powers of x.',
      title: 'IB Maths AA HL First Four Terms of a Binomial Expansion',
      description:
        'Many questions ask only for the first four terms of a binomial expansion. These questions write them in ascending powers of x and simplify each coefficient.',
    },

    'pascals-triangle-expansion': {
      metaTitle: "Pascal's Triangle Questions | IB Maths AA HL",
      metaDescription:
        "Use Pascal's triangle in IB Maths AA HL to find binomial coefficients and expand brackets quickly for small powers.",
      title: "IB Maths AA HL Pascal's Triangle Expansion Questions",
      description:
        "Each row of Pascal's triangle gives the coefficients of a binomial expansion. These questions use Pascal's triangle for binomial expansion with small powers of n.",
    },

    'binomial-coefficients': {
      metaTitle: 'Binomial Coefficient Questions | IB Maths AA HL',
      metaDescription:
        'Calculate a binomial coefficient ⁿCᵣ in IB Maths AA HL and use binomial coefficients to solve problems.',
      title: 'IB Maths AA HL Binomial Coefficient Questions',
      description:
        'A binomial coefficient, ⁿCᵣ, counts the ways to choose r from n and gives each term of an expansion. These questions calculate and apply it.',
    },

    'finding-unknown-r': {
      metaTitle: 'Binomial Expansion: Find r | IB Maths AA HL',
      metaDescription:
        'Binomial expansion, find r: identify the term that gives a required power of x, such as the constant term, in IB Maths AA HL.',
      title: 'IB Maths AA HL Binomial Expansion: Finding the Unknown r',
      description:
        'These binomial expansion questions find r: the term number that gives a required power of x, such as the constant term.',
    },

    'finding-unknown-n': {
      metaTitle: 'Binomial Expansion: Find n | IB Maths AA HL',
      metaDescription:
        'Binomial expansion, find n: work back from a given coefficient or term to the power of the bracket in IB Maths AA HL.',
      title: 'IB Maths AA HL Binomial Expansion: Finding the Unknown n',
      description:
        'These binomial expansion questions work backwards to find n, the power of the bracket, from a coefficient or term that is given.',
    },

    'expansion-with-rational-terms': {
      metaTitle: 'Binomial Expansion with Fractions | IB AA HL',
      metaDescription:
        'Binomial expansion with fractions in IB Maths AA HL: expand brackets containing rational terms such as (x + 1/x)ⁿ.',
      title: 'IB Maths AA HL Binomial Expansion with Rational Terms',
      description:
        'A binomial expansion with fractions, such as (x + 1/x)ⁿ, needs careful work with negative powers. These questions expand and simplify each term.',
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

    'de-moivres-theorem-evaluation': {
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

    'powers-of-i': {
      metaTitle: 'Powers of i Questions | IB Maths AA HL',
      metaDescription:
        'Powers of i for IB Maths AA HL: use the four-step cycle i, −1, −i, 1 to simplify any power of i quickly.',
      title: 'IB Maths AA HL Powers of i Questions',
      description:
        'Powers of i repeat every four steps: i, −1, −i, 1. These questions use that cycle, also taught as powers of iota, to simplify any power of i.',
    },

    'solving-quadratic-equations-with-complex-roots': {
      metaTitle: 'Complex Roots of Quadratic Equations | IB AA HL',
      metaDescription:
        'Find the complex roots of a quadratic equation in IB Maths AA HL when the discriminant is negative, and write them as conjugate pairs.',
      title: 'IB Maths AA HL Quadratic Equations with Complex Roots',
      description:
        'When the discriminant is negative, the complex roots of a quadratic equation come as a conjugate pair. These questions find them with the quadratic formula.',
    },

    'division-writing-in-x-iy-form': {
      metaTitle: 'Division of Complex Numbers | IB Maths AA HL',
      metaDescription:
        'Division of complex numbers in IB Maths AA HL: multiply by the conjugate and write the answer in the form x + iy.',
      title: 'IB Maths AA HL Division of Complex Numbers Questions',
      description:
        'Division of complex numbers relies on the complex conjugate. These questions practise dividing complex numbers and writing each answer as x + iy.',
    },

    'argand-diagram': {
      metaTitle: 'Argand Plane Questions | IB Maths AA HL',
      metaDescription:
        'Plot complex numbers on the Argand plane in IB Maths AA HL and interpret addition, conjugates and modulus geometrically.',
      title: 'IB Maths AA HL Argand Diagram Questions',
      description:
        'The Argand plane shows every complex number as a point. These questions plot numbers and read addition, conjugates and modulus from the diagram.',
    },

    'cartesian-form-from-polar': {
      metaTitle: 'Polar Form to Rectangular Form | IB Maths AA HL',
      metaDescription:
        'Convert complex numbers from polar form to rectangular form in IB Maths AA HL, giving exact Cartesian answers.',
      title: 'IB Maths AA HL Cartesian Form from Polar Form Questions',
      description:
        'Converting polar form to rectangular form turns r cis θ into x + iy. These questions practise the conversion with exact values.',
    },

    'loci-on-argand-diagram': {
      metaTitle: 'Locus of Complex Numbers | IB Maths AA HL',
      metaDescription:
        'Sketch the locus of complex numbers on an Argand diagram in IB Maths AA HL: circles, perpendicular bisectors and half-lines.',
      title: 'IB Maths AA HL Loci on the Argand Diagram Questions',
      description:
        'A locus of complex numbers is the set of points that satisfy a condition, such as |z − a| = r. These questions sketch circles, perpendicular bisectors and half-lines.',
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

    'cross-product-scalar-triple-product': {
      metaTitle: 'Cross Product Questions | IB Maths AA HL Vectors',
      metaDescription:
        'IB Maths AA HL cross product questions: find a×b, use it for perpendicular vectors and areas, and evaluate the scalar triple product.',
      title: 'IB Maths AA HL Cross Product and Scalar Triple Product Questions',
      description:
        'Cross product questions on finding a×b, using it to obtain a vector perpendicular to two others, calculating areas and evaluating the scalar triple product.',
    },

    'parallel-vectors-finding-unknowns': {
      metaTitle: 'Parallel Vectors Questions | IB Maths AA HL',
      metaDescription:
        'Parallel vectors in IB Maths AA HL: use scalar multiples to test whether vectors are parallel and find unknown components.',
      title: 'IB Maths AA HL Parallel Vectors Questions',
      description:
        'Two vectors are parallel when one is a scalar multiple of the other. These parallel vectors questions use that fact to find unknown components.',
    },

    'unit-vectors': {
      metaTitle: 'Unit Vector Questions | IB Maths AA HL',
      metaDescription:
        'Find a unit vector in IB Maths AA HL by dividing a vector by its magnitude, and use unit vectors to scale to any length.',
      title: 'IB Maths AA HL Unit Vector Questions',
      description:
        'A unit vector has magnitude 1 and points in a given direction. These questions apply the unit vector formula, û = u ÷ |u|.',
    },

    'magnitude-of-a-vector': {
      metaTitle: 'Magnitude of a Vector Questions | IB AA HL',
      metaDescription:
        'Find the magnitude of a vector in IB Maths AA HL in 2D and 3D, including vectors with unknown components.',
      title: 'IB Maths AA HL Magnitude of a Vector Questions',
      description:
        'The magnitude of a vector is its length. These questions apply the magnitude of vector formula in 2D and 3D, and solve for unknown components.',
    },

    collinearity: {
      metaTitle: 'Collinear Vectors Questions | IB Maths AA HL',
      metaDescription:
        'Collinear vectors in IB Maths AA HL: prove that three points lie on one line and find the ratio in which a point divides a line.',
      title: 'IB Maths AA HL Collinearity Questions',
      description:
        'Points are collinear when the vectors between them are parallel and share a point. These collinear vectors questions prove it and find ratios.',
    },

    'foot-of-perpendicular-from-a-point-to-a-line': {
      metaTitle: 'Foot of Perpendicular Questions | IB AA HL',
      metaDescription:
        'Find the foot of perpendicular from a point to a line in IB Maths AA HL, and use it to find the shortest distance.',
      title: 'IB Maths AA HL Foot of the Perpendicular Questions',
      description:
        'The foot of perpendicular is the point on a line closest to a given point. These questions find it and use it to calculate the shortest distance.',
    },

    'area-of-triangle-using-cross-product': {
      metaTitle: 'Area of a Triangle Using Vectors | IB AA HL',
      metaDescription:
        'Find the area of a triangle using vectors in IB Maths AA HL: half the magnitude of the cross product of two sides.',
      title: 'IB Maths AA HL Area of a Triangle Using the Cross Product',
      description:
        'The area of a triangle using vectors is half the magnitude of the cross product of two of its sides. These questions apply the area of triangle cross product method in 3D.',
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

    'increasing-decreasing-functions': {
      metaTitle: 'Increasing and Decreasing Functions | IB AA HL',
      metaDescription:
        'Increasing and decreasing functions in IB Maths AA HL: find the intervals using the sign of the first derivative.',
      title: 'IB Maths AA HL Increasing and Decreasing Functions Questions',
      description:
        'A function is increasing where its derivative is positive and decreasing where it is negative. These questions find the intervals of increasing and decreasing functions.',
    },

    continuity: {
      metaTitle: 'Continuity and Differentiability | IB AA HL',
      metaDescription:
        'Continuity and differentiability in IB Maths AA HL: test whether a function is continuous or differentiable at a point.',
      title: 'IB Maths AA HL Continuity Questions',
      description:
        'A function is continuous at a point when its limit equals its value there. These questions test continuity and differentiability, including piecewise functions.',
    },

    'related-rates-of-change': {
      metaTitle: 'Related Rates Questions | IB Maths AA HL',
      metaDescription:
        'Related rates questions for IB Maths AA HL: link two changing quantities with the chain rule, from expanding circles to filling tanks.',
      title: 'IB Maths AA HL Related Rates of Change Questions',
      description:
        'Related rates questions connect how fast two linked quantities change, such as the radius and area of a spreading circle. The chain rule does the linking.',
    },

    'differentiation-inverse-trigonometric-functions': {
      metaTitle: 'Differentiation of Inverse Trigonometric Functions',
      metaDescription:
        'Differentiation of inverse trigonometric functions in IB Maths AA HL: arcsin, arccos and arctan, with the chain rule.',
      title: 'IB Maths AA HL Differentiation of Inverse Trigonometric Functions',
      description:
        'These questions cover the differentiation of inverse trigonometric functions: arcsin, arccos and arctan, often combined with the chain rule.',
    },

    'integration-inverse-trigonometric-forms': {
      metaTitle: 'Integration of Inverse Trigonometric Functions',
      metaDescription:
        'Integration of inverse trigonometric functions in IB Maths AA HL: integrals that give arcsin and arctan results.',
      title: 'IB Maths AA HL Integration: Inverse Trigonometric Forms',
      description:
        'Some integrals give inverse trigonometric results. These questions on the integration of inverse trigonometric functions recognise the arcsin and arctan forms.',
    },

    'integration-completing-the-square-arctan-form': {
      metaTitle: 'Integration by Completing the Square | IB AA HL',
      metaDescription:
        'Integration by completing the square in IB Maths AA HL: rewrite quadratic denominators to reach the arctan form.',
      title: 'IB Maths AA HL Integration by Completing the Square',
      description:
        'Integration by completing the square turns a quadratic denominator into (x + p)² + q², ready for the standard arctan result.',
    },
  },

  // 6. Algebra
  algebra: {
    'polynomial-division-comparing-coefficients': {
      metaTitle: 'Polynomial Division Questions | IB Maths AA HL  ',
      metaDescription:
        'Polynomial division for IB Maths AA HL: divide polynomials by long division or by comparing coefficients, and find the remainder.',
      title: 'IB Maths AA HL Polynomial Division Questions',
      description:
        'Polynomial division splits a polynomial into a quotient and a remainder. These questions use polynomial long division and the faster method of comparing coefficients.',
      questionTitle: 'Polynomial Division (Comparing Coefficients): Questions & Answers',
      questionDescription:
        'Write P(x) = D(x)Q(x) + R(x) with the correct degrees, expand, and equate coefficients of each power of x to find the unknowns. Questions follow syllabus section AHL 2.12. Every question comes with the mark scheme working.',
    },

    'remainder-theorem': {
      metaTitle: 'Remainder Theorem Questions | IB Maths AA HL  ',
      metaDescription:
        'Remainder theorem questions for IB Maths AA HL: find a remainder without dividing, and use it to find unknown coefficients.',
      title: 'IB Maths AA HL Remainder Theorem Questions',
      description:
        'The remainder theorem finds the remainder of a division without doing the division: dividing P(x) by (x − a) leaves P(a). These remainder theorem questions apply it directly and in reverse.',
      questionTitle: 'Remainder Theorem: Questions & Answers',
      questionDescription:
        'Substitute the root of the divisor into the polynomial. When unknown coefficients are involved, set up an equation for each remainder given and solve simultaneously. Questions follow syllabus section AHL 2.12. Every question comes with the mark scheme working.',
    },

    'factor-theorem-factorisation-roots': {
      metaTitle: 'Factor Theorem Questions | IB Maths AA HL  ',
      metaDescription:
        'Use the factor theorem in IB Maths AA HL to find a factor, factorise a polynomial fully and solve for all of its roots, with mark scheme working.',
      title: 'IB Maths AA HL Factor Theorem Questions',
      description:
        'The factor theorem states that (x − a) is a factor of P(x) exactly when P(a) = 0. These questions use it to find a first factor, then factorise fully and find every root.',
      questionTitle: 'Factor Theorem – Factorisation & Roots: Questions & Answers',
      questionDescription:
        'Test small values to find a root, divide by the corresponding factor, and factorise the quotient to find the remaining roots. Questions follow syllabus section AHL 2.12. Every question comes with the mark scheme working.',
    },

    'vietas-formulae-sum-product-of-roots': {
      metaTitle: 'Sum and Product of Roots | IB Maths AA HL  ',
      metaDescription:
        "Sum and product of roots questions for IB Maths AA HL: apply Vieta's formulas to quadratics, cubics and higher polynomials.",
      title: 'IB Maths AA HL Sum and Product of Roots Questions',
      description:
        "The sum and product of roots can be read straight from a polynomial's coefficients. These questions apply Vieta's formulas without solving the equation.",
      questionTitle: "Vieta's Formulae (Sum & Product of Roots): Questions & Answers",
      questionDescription:
        'For a polynomial of degree n, the sum of roots is −aₙ₋₁/aₙ and the product is (−1)ⁿa₀/aₙ. Express what the question asks for in terms of these. Questions follow syllabus section AHL 2.12. Every question comes with the mark scheme working.',
    },

    'partial-fractions': {
      metaTitle: 'Partial Fractions Questions | IB Maths AA HL  ',
      metaDescription:
        'Partial fractions for IB Maths AA HL: split a rational function into simpler fractions, ready for integration or series expansion.',
      title: 'IB Maths AA HL Partial Fractions Questions',
      description:
        'Partial fractions split one rational function into a sum of simpler ones. These partial fraction decomposition questions prepare expressions for integration.',
      questionTitle: 'Partial Fractions: Questions & Answers',
      questionDescription:
        'Factorise the denominator, write the correct form with unknown numerators, multiply through, and find the constants by substitution or by comparing coefficients. Questions follow syllabus section AHL 5.15. Every question comes with the mark scheme working.',
    },
  },

  // 7. Trigonometry
  trigonometry: {
    'inverse-trigonometric-functions': {
      metaTitle: 'Inverse Trigonometric Functions | IB AA HL  ',
      metaDescription:
        'Inverse trigonometric functions in IB Maths AA HL: arcsin, arccos and arctan, their domains, ranges, graphs and exact values.',
      title: 'IB Maths AA HL Inverse Trigonometric Functions Questions',
      description:
        'Inverse trigonometric functions undo sine, cosine and tangent on a restricted domain. These questions cover arcsin, arccos and arctan: their ranges, graphs and exact values.',
      questionTitle: 'Inverse Trigonometric Functions: Questions & Answers',
      questionDescription:
        "Check that the input lies in the function's domain, give answers within the principal range, and use the unit circle for exact values. Questions follow syllabus section AHL 3.9. Every question comes with the mark scheme working.",
    },

    'trigonometric-identities-proofs': {
      metaTitle: 'Trigonometric Identities & Proofs | IB AA HL  ',
      metaDescription:
        'Prove trigonometric identities in IB Maths AA HL using Pythagorean, reciprocal, double angle and compound angle results.',
      title: 'IB Maths AA HL Trigonometric Identities and Proofs Questions',
      description:
        'Proving trigonometric identities rewards a clear plan more than memorised steps. These questions combine the core trig identities to prove one side equals the other.',
      questionTitle: 'Trigonometric Identities & Proofs: Questions & Answers',
      questionDescription:
        'Start from the more complicated side, rewrite in terms of sine and cosine, apply one identity per line, and finish exactly at the other side. Questions follow syllabus section AHL 3.11. Every question comes with the mark scheme working.',
    },

    'graphs-of-trigonometric-functions': {
      metaTitle: 'Graphs of Trigonometric Functions | IB AA HL  ',
      metaDescription:
        'Sketch and interpret graphs of trigonometric functions in IB Maths AA HL, including the reciprocal and inverse trig graphs.',
      title: 'IB Maths AA HL Graphs of Trigonometric Functions Questions',
      description:
        'Graphs of trigonometric functions show period, amplitude and asymptotes at a glance. These questions sketch and read trig graphs, including sec, cosec and cot.',
      questionTitle: 'Graphs of Trigonometric Functions: Questions & Answers',
      questionDescription:
        'Mark the period, key points and any asymptotes first, then sketch. For reciprocal functions, draw the original graph lightly and use it as a guide. Questions follow syllabus section AHL 3.11. Every question comes with the mark scheme working.',
    },

    'compound-angle-formulae-tangent': {
      metaTitle: 'Tan Addition Formula Questions | IB Maths AA HL  ',
      metaDescription:
        'Use the tan addition formula in IB Maths AA HL to expand tan(A ± B), find exact values and solve trigonometric equations, with mark scheme working.',
      title: 'IB Maths AA HL Compound Angle Formulae: Tangent Questions',
      description:
        'The tan addition formula expands tan(A ± B) in terms of tan A and tan B. These questions use it to find exact values and to solve equations.',
      questionTitle: 'Compound Angle Formulae – Tangent: Questions & Answers',
      questionDescription:
        'Apply tan(A ± B) = (tan A ± tan B) ÷ (1 ∓ tan A tan B), split awkward angles into familiar ones, and simplify surds fully. Questions follow syllabus section AHL 3.10. Every question comes with the mark scheme working.',
    },

    'compound-angle-formulae-proof': {
      metaTitle: 'Compound Angle Formula Questions | IB AA HL  ',
      metaDescription:
        'Use the compound angle formula for sine, cosine and tangent in IB Maths AA HL to prove identities and show given results.',
      title: 'IB Maths AA HL Compound Angle Formulae: Proof Questions',
      description:
        'Each compound angle formula expands a trig function of A ± B. These questions use the formulae to prove identities and show given results line by line.',
      questionTitle: 'Compound Angle Formulae – Proof: Questions & Answers',
      questionDescription:
        'Expand with the correct formula, collect terms, and apply a Pythagorean or double angle identity where it simplifies the expression. Show every step. Questions follow syllabus section AHL 3.10. Every question comes with the mark scheme working.',
    },
  },

  // 8. Probability & Statistics
  'probability-statistics': {
    'probability-density-functions': {
      metaTitle: 'Probability Density Function | IB AA HL  ',
      metaDescription:
        'Probability density function questions for IB Maths AA HL: check validity, find unknown constants and calculate probabilities.',
      title: 'IB Maths AA HL Probability Density Function Questions',
      description:
        'A probability density function describes a continuous random variable, and its total area must equal 1. These questions check validity, find k and calculate probabilities.',
      questionTitle: 'Probability Density Functions: Questions & Answers',
      questionDescription:
        'Set the integral of f(x) over its domain equal to 1 to find any constant, then integrate between the required limits for each probability. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'mode-of-pdf': {
      metaTitle: 'Mode of a Continuous Random Variable | IB AA HL  ',
      metaDescription:
        'Find the mode of a continuous random variable in IB Maths AA HL: locate the maximum of the probability density function.',
      title: 'IB Maths AA HL Mode of a PDF Questions',
      description:
        'The mode of a continuous random variable is where its density function reaches a maximum. These questions find it with differentiation or a sketch.',
      questionTitle: 'Mode of PDF: Questions & Answers',
      questionDescription:
        'Differentiate f(x), solve f′(x) = 0, and check the end points of the domain, since the maximum can lie on a boundary. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'median-of-pdf': {
      metaTitle: 'Median of a Continuous Random Variable  ',
      metaDescription:
        'Find the median of a continuous random variable in IB Maths AA HL by setting the cumulative area under the density function equal to one half.',
      title: 'IB Maths AA HL Median of a PDF Questions',
      description:
        'The median of a continuous random variable splits the area under its density function in half. These questions set up and solve that equation.',
      questionTitle: 'Median of PDF: Questions & Answers',
      questionDescription:
        'Integrate f(x) from the lower bound to m, set the result equal to 0.5, and solve for m, choosing the root that lies inside the domain. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'mean-and-variance-of-pdf': {
      metaTitle: 'Expected Value of a Continuous Random Variable  ',
      metaDescription:
        'Find the expected value of a continuous random variable in IB Maths AA HL, plus its variance, by integrating over the full domain of the density function.',
      title: 'IB Maths AA HL Mean and Variance of a PDF Questions',
      description:
        'The expected value of a continuous random variable is found by integration, not summation. These questions calculate the mean and variance of continuous random variables.',
      questionTitle: 'Mean and Variance of PDF: Questions & Answers',
      questionDescription:
        'Use E(X) = ∫x f(x) dx and Var(X) = ∫x² f(x) dx − [E(X)]², integrating over the full domain of the density function. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'probability-computations-with-pdf': {
      metaTitle: 'PDF Statistics Questions | IB Maths AA HL  ',
      metaDescription:
        'PDF statistics for IB Maths AA HL: calculate probabilities for a continuous random variable by integrating its density function.',
      title: 'IB Maths AA HL Probability Computations with a PDF',
      description:
        'In PDF statistics, a probability is an area under the density curve. These questions calculate probabilities for continuous random variables by integration.',
      questionTitle: 'Probability Computations with PDF: Questions & Answers',
      questionDescription:
        'Integrate f(x) between the limits the question sets, splitting the integral where a piecewise function changes rule. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },
  },

  // 9. Series
  series: {
    'maclaurin-series-standard-functions': {
      metaTitle: 'Maclaurin Series Questions | IB Maths AA HL  ',
      metaDescription:
        'Maclaurin series questions for IB Maths AA HL: standard expansions of eˣ, sin x, cos x and ln(1 + x), with mark scheme working.',
      title: 'IB Maths AA HL Maclaurin Series Questions',
      description:
        'A Maclaurin series writes a function as an infinite polynomial centred at x = 0. These questions use the standard Maclaurin series for eˣ, sin x, cos x and ln(1 + x).',
      questionTitle: 'Maclaurin Series – Standard Functions: Questions & Answers',
      questionDescription:
        'Quote the standard series from the formula booklet, write out the terms required, and state the interval of validity where it applies. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },

    'maclaurin-series-substitution': {
      metaTitle: 'Maclaurin Series Expansion | IB Maths AA HL  ',
      metaDescription:
        'Find a Maclaurin series expansion in IB Maths AA HL by substituting into a standard series, such as e^(2x) or sin(x²), with mark scheme working.',
      title: 'IB Maths AA HL Maclaurin Series by Substitution',
      description:
        'Substitution is the quickest route to a new Maclaurin series expansion. These questions replace x in a standard series with expressions such as 2x, −x or x².',
      questionTitle: 'Maclaurin Series – Substitution: Questions & Answers',
      questionDescription:
        'Write the standard series, replace every x with the new expression, and simplify each term to the power of x the question asks for. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },

    'maclaurin-series-derivatives-method': {
      metaTitle: 'Maclaurin Series Formula Questions | IB AA HL  ',
      metaDescription:
        'Use the Maclaurin series formula in IB Maths AA HL: find successive derivatives at x = 0 and build the series term by term.',
      title: 'IB Maths AA HL Maclaurin Series: Derivatives Method',
      description:
        "The Maclaurin series formula builds a series from a function's derivatives at zero: f(0) + f′(0)x + f″(0)x²/2! + … These questions apply it directly.",
      questionTitle: 'Maclaurin Series – Derivatives Method: Questions & Answers',
      questionDescription:
        'Differentiate repeatedly, evaluate each derivative at x = 0, and substitute into the formula, dividing each term by the correct factorial. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },

    'maclaurin-series-applications': {
      metaTitle: 'Taylor Series Approximation | IB Maths AA HL  ',
      metaDescription:
        'Taylor series approximation in IB Maths AA HL: use the first terms of a Maclaurin series to estimate values and integrals.',
      title: 'IB Maths AA HL Maclaurin Series Applications',
      description:
        'A Taylor series approximation uses the first few terms of a series in place of the function. These questions estimate values, integrals and solutions this way.',
      questionTitle: 'Maclaurin Series – Applications: Questions & Answers',
      questionDescription:
        'Choose enough terms for the accuracy required, substitute the value, and compare with the calculator value to comment on the error. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },

    'maclaurin-series-proof-general-term': {
      metaTitle: 'Maclaurin Series Questions | IB AA HL  ',
      metaDescription:
        'Maclaurin series questions for IB Maths AA HL on finding the general term and proving expansions, set out the way the mark scheme expects.',
      title: 'IB Maths AA HL Maclaurin Series: Proof and General Term',
      description:
        'These Maclaurin series questions ask for the general term of a series or a proof of a given expansion, so the working must be complete.',
      questionTitle: 'Maclaurin Series – Proof / General Term: Questions & Answers',
      questionDescription:
        'Spot the pattern in the first few terms, express it with n and the correct factorial and sign, and verify the general term against the terms you have. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },
  },

  // 10. Differential Equations
  'differential-equations': {
    'classifying-des': {
      metaTitle: 'Types of Differential Equations | IB AA HL  ',
      metaDescription:
        'Identify the types of differential equations in IB Maths AA HL: order, linear or non-linear, separable or homogeneous, with worked answers.',
      title: 'IB Maths AA HL Classifying Differential Equations Questions',
      description:
        'Choosing a method starts with recognising the type. These questions classify the types of differential equations by order, linearity and structure.',
      questionTitle: 'Classifying DEs: Questions & Answers',
      questionDescription:
        'Find the highest derivative for the order, check whether y and its derivatives appear only to the first power, and test for separable or homogeneous form. Questions follow syllabus section AHL 5.18. Every question comes with the mark scheme working.',
    },

    'eulers-method': {
      metaTitle: "Euler's Method Questions | IB Maths AA HL  ",
      metaDescription:
        "Euler's method questions for IB Maths AA HL: approximate solutions of differential equations step by step and judge the error.",
      title: "IB Maths AA HL Euler's Method Questions",
      description:
        "Euler's method approximates a solution one small step at a time. These questions apply it with a table of values and ask how the step size affects accuracy.",
      questionTitle: "Euler's Method: Questions & Answers",
      questionDescription:
        'Set up columns for x, y and the gradient, apply yₙ₊₁ = yₙ + h·f(xₙ, yₙ), and keep full accuracy until the final answer. Questions follow syllabus section AHL 5.18. Every question comes with the mark scheme working.',
    },

    'homogeneous-substitution-y-vx': {
      metaTitle: 'Homogeneous Differential Equation | IB AA HL  ',
      metaDescription:
        'Solve a homogeneous differential equation in IB Maths AA HL with the substitution y = vx, then separate the variables and integrate.',
      title: 'IB Maths AA HL Homogeneous Differential Equations (y = vx)',
      description:
        'A homogeneous differential equation can be written as dy/dx = f(y/x). These questions use the substitution y = vx to turn it into a separable equation.',
      questionTitle: 'Homogeneous – Substitution y = vx: Questions & Answers',
      questionDescription:
        'Substitute y = vx and dy/dx = v + x dv/dx, simplify, separate the variables, integrate, and replace v with y/x at the end. Questions follow syllabus section AHL 5.18. Every question comes with the mark scheme working.',
    },

    'general-solution-first-order-linear-ode': {
      metaTitle: 'Linear Differential Equation | IB Maths AA HL  ',
      metaDescription:
        'Solve a first order linear differential equation in IB Maths AA HL and find its general solution, with mark scheme working.',
      title: 'IB Maths AA HL First-Order Linear Differential Equation Questions',
      description:
        'A linear differential equation of first order has the form dy/dx + P(x)y = Q(x). These questions find the general solution of each first order linear differential equation.',
      questionTitle: 'General Solution – First-Order Linear ODE: Questions & Answers',
      questionDescription:
        'Write the equation in standard form, find the integrating factor, multiply through, integrate both sides and include the constant. Questions follow syllabus section AHL 5.18. Every question comes with the mark scheme working.',
    },

    'integrating-factor-method': {
      metaTitle: 'Integrating Factor Questions | IB Maths AA HL  ',
      metaDescription:
        'Use an integrating factor in IB Maths AA HL to solve first-order linear differential equations, including initial value problems.',
      title: 'IB Maths AA HL Integrating Factor Method Questions',
      description:
        'An integrating factor turns the left side of a linear equation into the derivative of a product. These questions apply the integrating factor method from start to finish.',
      questionTitle: 'Integrating Factor Method: Questions & Answers',
      questionDescription:
        'Calculate I(x) = e^(∫P(x) dx), multiply the whole equation by it, recognise the left side as d/dx[I(x)y], then integrate and use any initial condition. Questions follow syllabus section AHL 5.18. Every question comes with the mark scheme working.',
    },
  },

  // 11. Complex Numbers & Polynomials
  'complex-numbers-polynomials': {
    'factorising-quadratics-over-c': {
      metaTitle: 'Complex Roots of Quadratic Equations | IB AA HL  ',
      metaDescription:
        'Find the complex roots of quadratic equations in IB Maths AA HL by factorising quadratics such as x² + 4 over the complex numbers.',
      title: 'IB Maths AA HL Factorising Quadratics over ℂ',
      description:
        'A quadratic with no real roots still factorises over the complex numbers. These questions find the complex roots of quadratic equations such as x² + 25 = 0.',
      questionTitle: 'Factorising Quadratics over ℂ: Questions & Answers',
      questionDescription:
        'Write the expression as a sum of squares, use i² = −1 to factorise it as (x + ai)(x − ai), or complete the square when there is an x term. Questions follow syllabus section AHL 1.14. Every question comes with the mark scheme working.',
    },

    'polynomial-division-factorising-cubics': {
      metaTitle: 'Polynomial Division Questions | IB Maths AA HL  ',
      metaDescription:
        'Polynomial division questions for IB Maths AA HL: use a known real root to factorise a cubic into a linear and a quadratic factor.',
      title: 'IB Maths AA HL Polynomial Division: Factorising Cubics',
      description:
        'Once one real root of a cubic is known, polynomial division leaves a quadratic factor. These polynomial division questions factorise cubics this way.',
      questionTitle: 'Polynomial Division – Factorising Cubics: Questions & Answers',
      questionDescription:
        'Divide by (x − a) using long or synthetic division, as in the polynomial division examples, then check the quotient by expanding. Questions follow syllabus section AHL 1.14. Every question comes with the mark scheme working.',
    },

    'complex-conjugate-root-theorem': {
      metaTitle: 'Complex Conjugate Root Theorem | IB Maths AA HL  ',
      metaDescription:
        'Use the complex conjugate root theorem in IB Maths AA HL to find every root of a real polynomial from one given complex root.',
      title: 'IB Maths AA HL Complex Conjugate Root Theorem',
      description:
        'The complex conjugate root theorem says that a polynomial with real coefficients has complex roots in conjugate pairs. One complex root gives you a second for free.',
      questionTitle: 'Complex Conjugate Root Theorem: Questions & Answers',
      questionDescription:
        'Write down the conjugate, multiply the two linear factors to form a real quadratic, then divide to find the remaining roots. Questions follow syllabus section AHL 1.14. Every question comes with the mark scheme working.',
    },

    'factorising-solving-polynomial-equations': {
      metaTitle: 'Solving Polynomial Equations | IB Maths AA HL  ',
      metaDescription:
        'Factorising and solving polynomial equations in IB Maths AA HL: use a given root to factorise a cubic and find its complex roots.',
      title: 'IB Maths AA HL Factorising and Solving Polynomial Equations',
      description:
        'These questions combine factorising and solving polynomial equations: a given real root leads to a quadratic factor, and that quadratic gives the complex roots.',
      questionTitle: 'Factorising & Solving Polynomial Equations: Questions & Answers',
      questionDescription:
        'Divide out the known factor, solve the quadratic with the quadratic formula, and write complex roots in the form a + bi. Questions follow syllabus section AHL 1.14. Every question comes with the mark scheme working.',
    },

    'constructing-polynomials-from-complex-roots': {
      metaTitle: 'Polynomials from Complex Roots | IB Maths AA HL  ',
      metaDescription:
        'Construct polynomials from complex roots in IB Maths AA HL, and find unknown real coefficients from a real root and a complex root.',
      title: 'IB Maths AA HL Constructing Polynomials from Complex Roots',
      description:
        'Constructing polynomials from complex roots works backwards: each root gives a factor, and the conjugate pair multiplies to a real quadratic.',
      questionTitle: 'Constructing Polynomials from Complex Roots: Questions & Answers',
      questionDescription:
        'Include the conjugate of every complex root, multiply the factors, and compare coefficients to find any unknown constants. Questions follow syllabus section AHL 1.14. Every question comes with the mark scheme working.',
    },

    'solving-polynomial-equations-over-c': {
      metaTitle: 'Polynomial Equations with Complex Roots | AA HL  ',
      metaDescription:
        'Practise solving polynomial equations with complex roots in IB Maths AA HL, such as the quartic x⁴ + 13x² + 40 = 0.',
      title: 'IB Maths AA HL Solving Polynomial Equations over ℂ',
      description:
        'Solving polynomial equations with complex roots often starts by spotting a quadratic in x². This quartic has four complex roots.',
      questionTitle: 'Solving Polynomial Equations over ℂ: Questions & Answers',
      questionDescription:
        'Substitute u = x², solve the quadratic in u, then take square roots of each negative value to give roots of the form ±bi. Questions follow syllabus section AHL 1.14. Every question comes with the mark scheme working.',
    },

    'proof-counterexample': {
      metaTitle: 'Proof by Counterexample: Complex Roots | AA HL  ',
      metaDescription:
        'Use proof by counterexample in IB Maths AA HL to show that an equation with complex conjugate roots need not have real coefficients.',
      title: 'IB Maths AA HL Proof by Counterexample: Complex Roots',
      description:
        'A single example that breaks a statement is enough to disprove it. This proof by counterexample tests a claim about complex conjugate roots.',
      questionTitle: 'Proof / Counterexample: Questions & Answers',
      questionDescription:
        'Choose a simple equation with conjugate roots whose coefficients are not all real, and state clearly how it disproves the claim. Questions follow syllabus section AHL 1.14. Every question comes with the mark scheme working.',
    },
  },

  // 12. Proof by Mathematical Induction
  'proof-by-mathematical-induction': {
    'summation-formulae': {
      metaTitle: 'Sum of Squares Formula Proof | IB Maths AA HL  ',
      metaDescription:
        'Prove summation formulae by induction in IB Maths AA HL, including the sum of squares formula and the sum of cubes.',
      title: 'IB Maths AA HL Proof by Induction: Summation Formulae',
      description:
        'Summation formulas such as the sum of squares formula and the sum of cubes are proved by mathematical induction. These questions practise the full structure.',
      questionTitle: 'Summation Formulae: Questions & Answers',
      questionDescription:
        'Show the base case, assume the result for n = k, add the (k + 1)th term, and simplify to the formula for n = k + 1 before writing the conclusion. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },

    'sequences-series-recurrence': {
      metaTitle: 'Recurrence Relation Proof by Induction | AA HL  ',
      metaDescription:
        'Recurrence relation proof by induction in IB Maths AA HL: prove a formula for the nth term of a sequence defined recursively.',
      title: 'IB Maths AA HL Proof by Induction: Sequences and Recurrence',
      description:
        'A recurrence relation proof by induction shows that a closed formula matches every term of a recursively defined sequence.',
      questionTitle: 'Sequences & Series (Recurrence): Questions & Answers',
      questionDescription:
        'Check u₁ against the formula, assume it for uₖ, substitute into the recurrence to find uₖ₊₁, and show it matches the formula. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },

    divisibility: {
      metaTitle: 'Proof by Induction: Divisibility | IB AA HL  ',
      metaDescription:
        'Proof by induction for divisibility, inequalities and higher derivatives in IB Maths AA HL, such as 5ⁿ − 1 being divisible by 4.',
      title: 'IB Maths AA HL Proof by Induction: Divisibility, Inequalities and Derivatives',
      description:
        'These questions apply proof by induction to divisibility, to inequalities such as 2ⁿ > n², and to formulas for the nth derivative.',
      questionTitle: 'Divisibility: Questions & Answers',
      questionDescription:
        'For divisibility, write the k + 1 case in terms of the k case. For proof by induction inequalities, build the k + 1 case from the assumption step by step. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },
  },

  // 13. Proof
  proof: {
    'proof-by-contradiction-contrapositive': {
      metaTitle: 'Proof by Contradiction Questions | IB AA HL  ',
      metaDescription:
        'Proof by contradiction in IB Maths AA HL: integers, real numbers and products, including proof by contrapositive.',
      title: 'IB Maths AA HL Proof by Contradiction and Contrapositive',
      description:
        'Proof by contradiction assumes the opposite of what you want and reaches an impossibility. These questions use it for integers and real numbers.',
      questionTitle: 'Proof by Contradiction / Contrapositive: Questions & Answers',
      questionDescription:
        "State the assumption clearly, follow it to a contradiction, and conclude. For proof by contrapositive, prove 'not Q implies not P' instead. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.",
    },

    'proof-by-contradiction-irrationality': {
      metaTitle: 'Prove Root 2 Is Irrational | IB Maths AA HL  ',
      metaDescription:
        'Prove root 2 is irrational and extend the method in IB Maths AA HL to √5, ∛2, log₂3 and the root of a cubic.',
      title: 'IB Maths AA HL Proof by Contradiction: Irrationality',
      description:
        'The classic way to prove root 2 is irrational is by contradiction. These questions apply the same method to other roots and to logarithms.',
      questionTitle: 'Proof by Contradiction — Irrationality: Questions & Answers',
      questionDescription:
        'Assume the number equals p/q in lowest terms, rearrange, and show both p and q share a factor, or that an even number equals an odd one. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },

    'proof-by-contradiction-real-life-context': {
      metaTitle: 'Proof by Contradiction Examples | IB AA HL  ',
      metaDescription:
        'One of the clearest proof by contradiction examples for IB Maths AA HL: show that at least one of three children is at least the mean height.',
      title: 'IB Maths AA HL Proof by Contradiction in Context',
      description:
        'Among proof by contradiction examples, this one uses an everyday setting: three children with a known mean height.',
      questionTitle: 'Proof by Contradiction — Real-life Context: Questions & Answers',
      questionDescription:
        'Assume every child is shorter than the mean, add the three heights, and show the total is too small. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },

    'proof-by-direct-calculation-rational-numbers': {
      metaTitle: 'Direct Proof: Rational Numbers | IB Maths AA HL  ',
      metaDescription:
        'A direct proof in IB Maths AA HL: show by calculation that the difference of two rational numbers is always rational.',
      title: 'IB Maths AA HL Proof by Direct Calculation',
      description:
        'A direct proof starts from definitions and works forward. Here two rational numbers are written as fractions and subtracted.',
      questionTitle: 'Proof by Direct Calculation — Rational Numbers: Questions & Answers',
      questionDescription:
        'Write each number as an integer over a non-zero integer, combine them over a common denominator, and explain why the result is rational. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },

    'proof-by-contradiction-rational-irrational': {
      metaTitle: 'Rational Plus Irrational Is Irrational | AA HL  ',
      metaDescription:
        'The rational plus irrational is irrational proof in IB Maths AA HL, done by contradiction from the definition of a rational number.',
      title: 'IB Maths AA HL Proof by Contradiction: Rational and Irrational',
      description:
        'This question proves that a rational number plus an irrational number is irrational. The rational plus irrational is irrational proof uses contradiction.',
      questionTitle: 'Proof by Contradiction — Rational + Irrational: Questions & Answers',
      questionDescription:
        'Assume the sum is rational, rearrange to make the irrational number the subject, and show it would then be rational. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },

    'proof-prime-numbers': {
      metaTitle: 'Prime Number Proof Questions | IB Maths AA HL  ',
      metaDescription:
        'A prime number proof in IB Maths AA HL: show that p₁p₂p₃ + 1 is not divisible by any of the three primes.',
      title: 'IB Maths AA HL Proof: Prime Numbers',
      description:
        'This prime number proof uses remainders: a product of primes plus 1 leaves remainder 1 when divided by each of them.',
      questionTitle: 'Proof — Prime Numbers: Questions & Answers',
      questionDescription:
        'Consider division by each prime in turn and explain why the remainder can never be zero. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },

    'proof-by-contradiction-infinite-primes-euclid': {
      metaTitle: 'Proof of Infinitely Many Primes | IB AA HL  ',
      metaDescription:
        "Euclid's proof of infinitely many primes for IB Maths AA HL, written step by step as a proof by contradiction.",
      title: 'IB Maths AA HL Proof by Contradiction: Infinite Primes',
      description:
        "Euclid's proof of infinitely many primes is a model proof by contradiction: assume a finite list, then build a number it cannot explain.",
      questionTitle: 'Proof by Contradiction — Infinite Primes (Euclid): Questions & Answers',
      questionDescription:
        'Assume the primes are p₁ to pₙ, form their product plus 1, and show it has a prime factor missing from the list. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },

    'graphical-argument-real-roots': {
      metaTitle: 'Number of Real Roots Graphically | IB AA HL  ',
      metaDescription:
        'Find the number of real roots graphically in IB Maths AA HL: show x³ + x − 1 = 0 has exactly one real root by sketching.',
      title: 'IB Maths AA HL Graphical Argument: Real Roots',
      description:
        'Finding the number of real roots graphically means counting intersections. Rearranging to x³ = 1 − x gives two graphs that meet once.',
      questionTitle: 'Graphical Argument — Real Roots: Questions & Answers',
      questionDescription:
        'Sketch both sides as separate graphs, explain why one is increasing and the other decreasing, and conclude they meet exactly once. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },

    'disproof-by-counterexample': {
      metaTitle: 'Disproof by Counterexample | IB Maths AA HL  ',
      metaDescription:
        'Disproof by counterexample in IB Maths AA HL: find values that break false identities such as (x − y)³ ≡ x³ − y³.',
      title: 'IB Maths AA HL Disproof by Counterexample',
      description:
        'A disproof by counterexample needs only one case where the statement fails. These questions test false identities and claims.',
      questionTitle: 'Disproof by Counterexample: Questions & Answers',
      questionDescription:
        'Choose simple values, substitute into both sides, show they differ, and state that the statement is therefore false. Questions follow syllabus section AHL 1.15. Every question comes with the mark scheme working.',
    },
  },

  // 14. Algebra and Functions
  'algebra-and-functions': {
    'polynomial-graphs-matching': {
      metaTitle: 'Polynomial Graphs: Matching | IB Maths AA HL  ',
      metaDescription:
        'Match polynomial graphs to their equations in IB Maths AA HL using degree, leading coefficient and y-intercept.',
      title: 'IB Maths AA HL Polynomial Graphs: Matching',
      description:
        "Polynomial graphs show their equation's features: the degree sets the shape, the leading coefficient the end behaviour, and the constant the y-intercept.",
      questionTitle: 'Polynomial Graphs – Matching: Questions & Answers',
      questionDescription:
        'Check the end behaviour first, then the y-intercept, then the roots, eliminating equations until each graph has one match. Questions follow syllabus section AHL 2.12. Every question comes with the mark scheme working.',
    },

    'sketching-polynomial-graphs': {
      metaTitle: 'Sketching Polynomial Graphs | IB Maths AA HL  ',
      metaDescription:
        'Practise sketching polynomial graphs in IB Maths AA HL from factorised form, including repeated roots and general forms.',
      title: 'IB Maths AA HL Sketching Polynomial Graphs',
      description:
        'Sketching polynomial graphs from factorised form is quick: each factor gives a root, and a squared factor means the curve touches the axis.',
      questionTitle: 'Sketching Polynomial Graphs: Questions & Answers',
      questionDescription:
        'Mark every root and the y-intercept, decide the end behaviour from the leading term, and show where the graph touches rather than crosses. Questions follow syllabus section AHL 2.12. Every question comes with the mark scheme working.',
    },

    'finding-polynomial-equations-from-graphs': {
      metaTitle: 'Finding Polynomial Equations | IB Maths AA HL  ',
      metaDescription:
        'Practise finding polynomial equations from graphs in IB Maths AA HL using roots, repeated roots and one extra point.',
      title: 'IB Maths AA HL Finding Polynomial Equations from Graphs',
      description:
        'Finding polynomial equations from a graph means reading the roots, noting whether each is repeated, and using one more point to fix the scale factor.',
      questionTitle: 'Finding Polynomial Equations from Graphs: Questions & Answers',
      questionDescription:
        'Write y = a(x − p)(x − q)(x − r) with the right multiplicities, substitute the y-intercept or another point, and solve for a. Questions follow syllabus section AHL 2.12. Every question comes with the mark scheme working.',
    },

    'factorising-and-sketching-polynomials': {
      metaTitle: 'Factorising and Sketching Polynomials | AA HL  ',
      metaDescription:
        'Factorising and sketching polynomials in IB Maths AA HL: factorise a cubic fully, then sketch it with every axis intercept.',
      title: 'IB Maths AA HL Factorising and Sketching Polynomials',
      description:
        'These questions link factorising and sketching polynomials: the full factorisation gives every root you need for the sketch.',
      questionTitle: 'Factorising and Sketching Polynomials: Questions & Answers',
      questionDescription:
        'Take out any common factor, factorise the remaining quadratic, then sketch with all intercepts labelled. Questions follow syllabus section AHL 2.12. Every question comes with the mark scheme working.',
    },

    'polynomial-equations-number-of-solutions': {
      metaTitle: 'Polynomial Equation Number of Solutions | AA HL  ',
      metaDescription:
        'Polynomial equation number of solutions in IB Maths AA HL: how many roots (x − p)²(x − q) = k has for k > 0, found from a sketch.',
      title: 'IB Maths AA HL Polynomial Equation: Number of Solutions',
      description:
        'The number of solutions of a polynomial equation equals how often the horizontal line y = k meets its graph.',
      questionTitle: 'Polynomial Equations – Number of Solutions: Questions & Answers',
      questionDescription:
        'Sketch the polynomial, draw y = k for k > 0, and count the intersections. Questions follow syllabus section AHL 2.12. Every question comes with the mark scheme working.',
    },
  },

  // 15. Analysis & Approaches
  'analysis-approaches': {
    'rational-functions-vertical-asymptotes-intercepts': {
      metaTitle: 'Vertical Asymptotes, Rational Functions | AA HL  ',
      metaDescription:
        'Find each vertical asymptote of a rational function in IB Maths AA HL, label the intercepts and sketch the graph.',
      title: 'IB Maths AA HL Rational Functions: Vertical Asymptotes and Intercepts',
      description:
        'Each vertical asymptote of a rational function sits where the denominator is zero and the numerator is not.',
      questionTitle: 'Rational Functions – Vertical Asymptotes & Intercepts: Questions & Answers',
      questionDescription:
        'Factorise the denominator for the vertical asymptotes, set the numerator to zero for the x-intercepts, and substitute x = 0 for the y-intercept. Questions follow syllabus section AHL 2.13. Every question comes with the mark scheme working.',
    },

    'rational-functions-oblique-asymptotes': {
      metaTitle: 'Oblique Asymptote Questions | IB Maths AA HL  ',
      metaDescription:
        'Find the oblique asymptote of a rational function in IB Maths AA HL by polynomial division, then sketch the graph.',
      title: 'IB Maths AA HL Rational Functions: Oblique Asymptotes',
      description:
        "When the numerator's degree is one more than the denominator's, the graph has an oblique asymptote, y = Ax + B, found by division.",
      questionTitle: 'Rational Functions – Oblique Asymptotes: Questions & Answers',
      questionDescription:
        'Divide to write f(x) = Ax + B + C/(x − a); there is no single oblique asymptote formula, but the quotient Ax + B is the asymptote. Questions follow syllabus section AHL 2.13. Every question comes with the mark scheme working.',
    },

    'rational-functions-intersection-with-linear-functions': {
      metaTitle: 'Rational Function Graph Questions | IB AA HL  ',
      metaDescription:
        'Sketch a rational function graph in IB Maths AA HL for different parameter orders, and find where it meets a straight line.',
      title: 'IB Maths AA HL Rational Functions: Curve Sketching and Intersections',
      description:
        'Each rational function graph here depends on the order of its parameters or meets a straight line, so the sketch has to be precise.',
      questionTitle: 'Rational Functions – Intersection with Linear Functions: Questions & Answers',
      questionDescription:
        'Mark every asymptote and intercept, sketch each branch, and solve the equation formed by setting the two expressions equal. Questions follow syllabus section AHL 2.13. Every question comes with the mark scheme working.',
    },

    'rational-functions-turning-points-sketching': {
      metaTitle: 'Sketching Rational Functions | IB Maths AA HL  ',
      metaDescription:
        'Practise sketching rational functions in IB Maths AA HL using the discriminant to find turning points, as for y = (2x − 3)/(x² + 4).',
      title: 'IB Maths AA HL Rational Functions: Turning Points and Sketching',
      description:
        'Sketching rational functions without calculus uses a neat idea: if y = k meets the curve, the resulting quadratic must have real roots.',
      questionTitle: 'Rational Functions – Turning Points & Sketching: Questions & Answers',
      questionDescription:
        'Set y = k, rearrange to a quadratic in x, apply the discriminant condition to find the range, then sketch using the turning points it gives. Questions follow syllabus section AHL 2.13. Every question comes with the mark scheme working.',
    },

    'rational-functions-range-asymptotes': {
      metaTitle: 'Range of a Rational Function | IB Maths AA HL  ',
      metaDescription:
        'Find the range of a rational function in IB Maths AA HL using the discriminant, and find parameters that make the range all real numbers.',
      title: 'IB Maths AA HL Rational Functions: Range and Asymptotes',
      description:
        'The range of a rational function comes from asking which values of y give real solutions for x.',
      questionTitle: 'Rational Functions – Range & Asymptotes: Questions & Answers',
      questionDescription:
        'Write y = f(x) as a quadratic in x, require a non-negative discriminant, and solve the resulting inequality in y. Questions follow syllabus section AHL 2.13. Every question comes with the mark scheme working.',
    },

    'finding-minimum-values-of-functions': {
      metaTitle: 'Finding Minimum Values of Functions | IB AA HL  ',
      metaDescription:
        'Practise finding minimum values of functions in IB Maths AA HL on restricted domains, such as x² + x for x ≥ 0.',
      title: 'IB Maths AA HL Finding Minimum Values of Functions',
      description:
        'Finding minimum values of functions on a restricted domain means checking the turning points and the end of the domain.',
      questionTitle: 'Finding Minimum Values of Functions: Questions & Answers',
      questionDescription:
        'Find any stationary points inside the domain, evaluate the function there and at the boundary, and compare. Questions follow syllabus section AHL 5.14. Every question comes with the mark scheme working.',
    },

    'finding-max-and-min-on-closed-interval': {
      metaTitle: 'Maximum and Minimum on an Interval | IB AA HL  ',
      metaDescription:
        'Find the maximum and minimum on an interval in IB Maths AA HL, for closed intervals and for open intervals such as 0.5 < x < 2.',
      title: 'IB Maths AA HL Maximum and Minimum on Closed and Open Intervals',
      description:
        'The maximum and minimum on an interval can occur at a turning point or at an end point. On an open interval the end points are excluded.',
      questionTitle: 'Finding Max and Min on Closed Interval: Questions & Answers',
      questionDescription:
        'Find the stationary points, evaluate at each one and at any included end points, and explain when a maximum or minimum does not exist. Questions follow syllabus section AHL 5.14. Every question comes with the mark scheme working.',
    },

    'optimisation-with-constraint': {
      metaTitle: 'Optimisation with Constraints | IB Maths AA HL  ',
      metaDescription:
        'Optimisation with constraints in IB Maths AA HL: maximise xy given x + 2y = 6, and prove a result about an isosceles triangle.',
      title: 'IB Maths AA HL Optimisation with a Constraint',
      description:
        'Optimisation with constraints uses the constraint to reduce two variables to one, then differentiates.',
      questionTitle: 'Optimisation with Constraint: Questions & Answers',
      questionDescription:
        'Rearrange the constraint, substitute to get a function of one variable, differentiate, and confirm the nature of the stationary point. Questions follow syllabus section AHL 5.14. Every question comes with the mark scheme working.',
    },

    'optimisation-box-problem': {
      metaTitle: 'Optimisation: Box Problem | IB Maths AA HL  ',
      metaDescription:
        "The optimisation box problem in IB Maths AA HL: cut squares from a card's corners and find the size that gives the largest volume.",
      title: 'IB Maths AA HL Optimisation: Box Problem',
      description:
        'The optimisation box problem is a classic: cut squares from the corners of a card, fold up the sides, and maximise the volume.',
      questionTitle: 'Optimisation — Box Problem: Questions & Answers',
      questionDescription:
        'Write the volume in terms of x, state the valid domain, differentiate, and check which stationary point gives the maximum. Questions follow syllabus section AHL 5.14. Every question comes with the mark scheme working.',
    },

    'optimisation-surface-area-volume': {
      metaTitle: 'Optimisation Volume Problems | IB Maths AA HL  ',
      metaDescription:
        'Optimisation volume problems in IB Maths AA HL: find the minimum surface area of a square-based cuboid with a fixed volume.',
      title: 'IB Maths AA HL Optimisation: Surface Area and Volume',
      description:
        'In optimisation volume problems the volume is fixed, so it links the dimensions and leaves one variable to optimise.',
      questionTitle: 'Optimisation — Surface Area/Volume: Questions & Answers',
      questionDescription:
        'Use the volume to write the height in terms of the base, substitute into the surface area, differentiate and confirm a minimum. Questions follow syllabus section AHL 5.14. Every question comes with the mark scheme working.',
    },

    'related-rates-optimisation-cone': {
      metaTitle: 'Related Rates and Optimisation: Cone | IB AA HL  ',
      metaDescription:
        'Related rates for a cone in IB Maths AA HL: how fast the volume changes as the apex angle grows, and when it is greatest.',
      title: 'IB Maths AA HL Related Rates and Optimisation: Cone',
      description:
        "This related rates cone question links a changing apex angle to the cone's volume, then finds the angle that maximises it.",
      questionTitle: 'Related Rates & Optimisation — Cone: Questions & Answers',
      questionDescription:
        'Write the volume in terms of θ, apply the chain rule with dθ/dt, and set dV/dθ = 0 for the maximum. Questions follow syllabus section AHL 5.14. Every question comes with the mark scheme working.',
    },

    'optimisation-area-under-trigonometric-curve': {
      metaTitle: 'Optimisation with Trigonometry | IB Maths AA HL  ',
      metaDescription:
        'Optimisation with trigonometry in IB Maths AA HL: the largest rectangle under y = sin x with one side on the x-axis.',
      title: 'IB Maths AA HL Optimisation: Area Under a Trigonometric Curve',
      description:
        'This optimisation trigonometry question places a rectangle under y = sin x and maximises its area.',
      questionTitle: 'Optimisation — Area Under Trigonometric Curve: Questions & Answers',
      questionDescription:
        "Write the rectangle's width and height in terms of one corner's x-coordinate, differentiate the area, and solve on your GDC if needed. Questions follow syllabus section AHL 5.14. Every question comes with the mark scheme working.",
    },

    'optimisation-closest-distance-to-a-curve': {
      metaTitle: 'Closest Point on a Curve | IB Maths AA HL  ',
      metaDescription:
        'Find the closest point on a curve in IB Maths AA HL: the shortest distance from (1, 2) to the curve y = x³.',
      title: 'IB Maths AA HL Optimisation: Closest Distance to a Curve',
      description:
        'To find the closest point on a curve, minimise the squared distance from the fixed point; it has the same minimum and is easier to differentiate.',
      questionTitle: 'Optimisation — Closest Distance to a Curve: Questions & Answers',
      questionDescription:
        'Write D² in terms of x, differentiate, solve for the stationary point with technology, and take the square root at the end. Questions follow syllabus section AHL 5.14. Every question comes with the mark scheme working.',
    },

    'optimisation-ladder-around-corner': {
      metaTitle: 'Ladder Around a Corner Problem | IB Maths AA HL  ',
      metaDescription:
        'The ladder around a corner problem in IB Maths AA HL: find the longest ladder that fits horizontally where two corridors meet.',
      title: 'IB Maths AA HL Optimisation: Ladder Around a Corner',
      description:
        'The ladder around a corner problem is solved by minimising: the longest ladder that fits equals the shortest line touching the corner.',
      questionTitle: 'Optimisation — Ladder Around Corner: Questions & Answers',
      questionDescription:
        'Write the length in terms of the angle the ladder makes, differentiate, and find the angle that minimises it. Questions follow syllabus section AHL 5.14. Every question comes with the mark scheme working.',
    },
  },

  // 16. Functions
  functions: {
    'odd-even-neither-algebraic': {
      metaTitle: 'Odd and Even Functions | IB Maths AA HL  ',
      metaDescription:
        'Odd and even functions in IB Maths AA HL: test algebraically with f(−x), read symmetry from graphs, and prove properties.',
      title: 'IB Maths AA HL Odd, Even or Neither',
      description:
        'Odd and even functions have a symmetry you can test: f(−x) = f(x) for even functions and f(−x) = −f(x) for odd ones.',
      questionTitle: 'Odd / Even / Neither (Algebraic): Questions & Answers',
      questionDescription:
        'Substitute −x and simplify, or check the graph for symmetry in the y-axis or rotational symmetry about the origin. For proofs, work from the definitions. Questions follow syllabus section AHL 2.14, AHL 2.16. Every question comes with the mark scheme working.',
    },

    'inverse-functions-domain-restriction-graphical': {
      metaTitle: 'Inverse Function: Domain Restriction | IB AA HL  ',
      metaDescription:
        'Inverse function domain restriction in IB Maths AA HL: find the largest valid domain from a graph or algebraically, then find f⁻¹.',
      title: 'IB Maths AA HL Inverse Functions: Domain Restriction',
      description:
        'An inverse function exists only where the original is one-to-one. These questions find the largest domain restriction that makes that true.',
      questionTitle: 'Inverse Functions – Domain Restriction (Graphical): Questions & Answers',
      questionDescription:
        'Find the turning points, restrict the domain to one side of them, then swap x and y and rearrange to find f⁻¹ with its domain and range. Questions follow syllabus section AHL 2.14, AHL 2.16. Every question comes with the mark scheme working.',
    },

    'self-inverse-functions': {
      metaTitle: 'Self-Inverse Functions | IB Maths AA HL  ',
      metaDescription:
        'Self-inverse functions in IB Maths AA HL: test algebraically, prove f(f(x)) = x and find the parameter that makes a function self-inverse.',
      title: 'IB Maths AA HL Self-Inverse Functions',
      description:
        'Self-inverse functions are their own inverse, so f(f(x)) = x and the graph is symmetrical in the line y = x.',
      questionTitle: 'Self-Inverse Functions: Questions & Answers',
      questionDescription:
        'Find f⁻¹ and compare it with f, or show f(f(x)) simplifies to x. For a parameter, set f⁻¹ equal to f and compare coefficients. Questions follow syllabus section AHL 2.14, AHL 2.16. Every question comes with the mark scheme working.',
    },
  },

  // 17. Algebra & Functions
  'algebra-functions': {
    'polynomial-inequalities': {
      metaTitle: 'Polynomial Inequalities | IB Maths AA HL  ',
      metaDescription:
        'Solve polynomial inequalities in IB Maths AA HL with factorisation and sign analysis, including repeated roots and the factor theorem.',
      title: 'IB Maths AA HL Polynomial Inequalities',
      description:
        'Polynomial inequalities are solved by factorising and checking the sign between roots. Repeated roots need extra care.',
      questionTitle: 'Polynomial Inequalities: Questions & Answers',
      questionDescription:
        'Rearrange to zero, factorise fully, mark the roots on a number line or sketch, and read off where the expression is positive or negative. Questions follow syllabus section AHL 2.15. Every question comes with the mark scheme working.',
    },

    'graphical-solution-of-inequalities': {
      metaTitle: 'Graphical Solution of Inequalities | IB AA HL  ',
      metaDescription:
        'Find the graphical solution of inequalities in IB Maths AA HL with a GDC, mixing polynomial, exponential, logarithmic and trig functions.',
      title: 'IB Maths AA HL Graphical Solution of Inequalities',
      description:
        'When algebra cannot isolate x, the graphical solution of inequalities uses technology to find where one curve lies above another.',
      questionTitle: 'Graphical Solution of Inequalities: Questions & Answers',
      questionDescription:
        'Graph both sides, find every intersection, then read off the intervals where the inequality holds, respecting any domain restrictions. Questions follow syllabus section AHL 2.15. Every question comes with the mark scheme working.',
    },

    'logarithmic-inequalities': {
      metaTitle: 'Logarithmic Inequalities | IB Maths AA HL  ',
      metaDescription:
        'Solve logarithmic inequalities in IB Maths AA HL, such as 3 ln(x² + 1) < x + 2, and a rational inequality against ln(x + 4).',
      title: 'IB Maths AA HL Logarithmic Inequalities',
      description:
        'Logarithmic inequalities usually need technology, and the domain of the logarithm limits which solutions count.',
      questionTitle: 'Logarithmic Inequalities: Questions & Answers',
      questionDescription:
        'State the domain first, graph both sides, find the intersections, and give the solution set within that domain. Questions follow syllabus section AHL 2.15. Every question comes with the mark scheme working.',
    },

    'constructing-polynomials-from-solution-sets': {
      metaTitle: 'Polynomials from Solution Sets | IB Maths AA HL  ',
      metaDescription:
        'Work backwards in IB Maths AA HL: construct polynomials from solution sets of inequalities and find the unknown coefficients.',
      title: 'IB Maths AA HL Constructing Polynomials from Solution Sets',
      description:
        'Constructing polynomials from solution sets reverses the usual process: the solution tells you the roots and their multiplicities.',
      questionTitle: 'Constructing Polynomials from Solution Sets: Questions & Answers',
      questionDescription:
        'Use the boundary values as roots, note any excluded single value as a repeated root, write the polynomial, and compare coefficients. Questions follow syllabus section AHL 2.15. Every question comes with the mark scheme working.',
    },

    'rational-exponential-inequalities-graphical': {
      metaTitle: 'Rational Inequalities | IB Maths AA HL  ',
      metaDescription:
        'Solve rational inequalities in IB Maths AA HL graphically and algebraically, including general parameters and reverse problems.',
      title: 'IB Maths AA HL Rational and Exponential Inequalities',
      description:
        'Rational inequalities change sign at asymptotes as well as at roots, so a sketch is essential.',
      questionTitle: 'Rational & Exponential Inequalities (Graphical): Questions & Answers',
      questionDescription:
        'Sketch both sides with their asymptotes, find the intersections, and include or exclude each boundary correctly. For reverse problems, match the given boundaries to the equation. Questions follow syllabus section AHL 2.15. Every question comes with the mark scheme working.',
    },
  },

  // 18. Functions & Graphs
  'functions-graphs': {
    'sketching-y-f-x': {
      metaTitle: 'Modulus Function Graph | IB Maths AA HL  ',
      metaDescription:
        'Sketch a modulus function graph in IB Maths AA HL: y = |f(x)| and y = f(|x|) for linear functions, with every intercept.',
      title: 'IB Maths AA HL Sketching y = |f(x)| and y = f(|x|)',
      description:
        'A modulus function graph reflects parts of a curve. For y = |f(x)|, anything below the x-axis is reflected up; for y = f(|x|), the right half is mirrored left.',
      questionTitle: 'Sketching y=|f(x)|: Questions & Answers',
      questionDescription:
        'Sketch y = f(x) first, then apply the right reflection, as in the modulus function graph examples, and label every intercept. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'modulus-of-a-given-graph': {
      metaTitle: 'Modulus Graph Questions | IB Maths AA HL  ',
      metaDescription:
        'Draw the modulus graph of a given curve in IB Maths AA HL, keeping its asymptotes and turning points in the right places.',
      title: 'IB Maths AA HL Modulus of a Given Graph',
      description:
        'Taking the modulus graph of a curve keeps every asymptote and reflects any part below the x-axis.',
      questionTitle: 'Modulus of a Given Graph: Questions & Answers',
      questionDescription:
        'Mark the asymptotes and intercepts from the original, reflect the negative sections, and show the new turning points. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'sketching-modulus-graphs': {
      metaTitle: 'Sketching Modulus Graphs | IB Maths AA HL  ',
      metaDescription:
        'Practise sketching modulus graphs in IB Maths AA HL, such as y = 2 − 3|x + 1| and y = |(x − a)(x − b)|.',
      title: 'IB Maths AA HL Sketching Modulus Graphs',
      description:
        'Sketching modulus graphs means finding the vertex or the reflected sections, then labelling each intercept.',
      questionTitle: 'Sketching Modulus Graphs: Questions & Answers',
      questionDescription:
        'Find where the expression inside the modulus is zero, sketch each side as a straight line or curve, and label the axis intercepts. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'determining-parameters-from-a-graph': {
      metaTitle: 'Finding Parameters from a Graph | IB AA HL  ',
      metaDescription:
        'Finding parameters from a graph in IB Maths AA HL: work out a, b and c in y = a|x + b| + c from its intercepts.',
      title: 'IB Maths AA HL Determining Parameters from a Graph',
      description:
        "Finding parameters from a graph turns its key points into equations. A modulus graph's vertex and intercepts fix a, b and c.",
      questionTitle: 'Determining Parameters from a Graph: Questions & Answers',
      questionDescription:
        'Use the symmetry of the intercepts to find the vertex, then substitute known points to find each constant. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'modulus-equations-number-of-solutions': {
      metaTitle: 'Modulus Equations: Number of Solutions | AA HL  ',
      metaDescription:
        'Find the values of k that give modulus equations four solutions in IB Maths AA HL, using a sketch of the modulus graph.',
      title: 'IB Maths AA HL Modulus Equations: Number of Solutions',
      description:
        'The number of solutions of modulus equations such as |x² + 4x − 7| = k depends on where the line y = k cuts the graph.',
      questionTitle: 'Modulus Equations — Number of Solutions: Questions & Answers',
      questionDescription:
        'These modulus equations questions start with a sketch: find the turning points of the modulus graph, then the range of k for four intersections. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'sketching-y-frac1f-x': {
      metaTitle: 'Reciprocal Function Graph: y = 1/f(x) | AA HL  ',
      metaDescription:
        'Sketch the reciprocal function graph y = 1/f(x) and y = [f(x)]² in IB Maths AA HL from a given graph of y = f(x).',
      title: 'IB Maths AA HL Sketching y = 1/f(x) and y = [f(x)]²',
      description:
        'A reciprocal function graph turns roots into vertical asymptotes and maximum points into minimum points. Squaring a function keeps it above the axis.',
      questionTitle: 'Sketching y = \\frac{1{f(x): Questions & Answers',
      questionDescription:
        'Mark vertical asymptotes at the roots of f, invert key y-values, and for [f(x)]² square each y-value and show where the curve touches the x-axis. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'horizontal-transformations-of-graphs': {
      metaTitle: 'Horizontal Transformations of Graphs | IB AA HL  ',
      metaDescription:
        'Sketch horizontal transformations of graphs in IB Maths AA HL, such as y = f(3x + 2), from a piecewise linear graph.',
      title: 'IB Maths AA HL Horizontal Transformations of Graphs',
      description:
        'Horizontal transformations of graphs act on x, so they work the opposite way to how they look: f(3x) squeezes by a factor of 3.',
      questionTitle: 'Horizontal Transformations of Graphs: Questions & Answers',
      questionDescription:
        'Write the transformation as f(a(x + b)), apply the translation and stretch to each key point in the right order, and sketch. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'describing-sequences-of-horizontal-transformations': {
      metaTitle: 'Describing Horizontal Transformations | AA HL  ',
      metaDescription:
        'Practise describing horizontal transformations in IB Maths AA HL that map y = x² or y = cos x to a new graph.',
      title: 'IB Maths AA HL Describing Sequences of Transformations',
      description:
        'Describing horizontal transformations in sequence needs the right order: a stretch then a translation gives a different graph from the reverse.',
      questionTitle: 'Describing Sequences of Horizontal Transformations: Questions & Answers',
      questionDescription:
        'Factorise inside the function to see the stretch and translation, then state each transformation with its size and direction. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'transformed-coordinates': {
      metaTitle: 'Transformed Coordinates | IB Maths AA HL  ',
      metaDescription:
        'Find transformed coordinates in IB Maths AA HL: where the point (3, −4) on y = f(x) moves under combined transformations.',
      title: 'IB Maths AA HL Transformed Coordinates',
      description:
        'Transformed coordinates follow the same rules as the graph: changes inside the function move x, and changes outside move y.',
      questionTitle: 'Transformed Coordinates: Questions & Answers',
      questionDescription:
        'Apply each transformation to the point in order, working out the new x-coordinate and the new y-coordinate separately. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'combined-transformations-finding-equation': {
      metaTitle: 'Combined Transformations of Graphs | IB AA HL  ',
      metaDescription:
        'Combined transformations in IB Maths AA HL: find the new equation after a sequence of stretches and translations, and the coefficients.',
      title: 'IB Maths AA HL Combined Transformations: Equations and Coefficients',
      description:
        'Combined transformations change an equation step by step. These questions find the final equation or work back to the original coefficients.',
      questionTitle: 'Combined Transformations — Finding Equation: Questions & Answers',
      questionDescription:
        'Apply one transformation at a time, substituting into the equation each time, and compare coefficients when the result is given. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'non-commutative-transformations': {
      metaTitle: 'Non-Commutative Transformations | IB AA HL  ',
      metaDescription:
        'Non-commutative transformations in IB Maths AA HL: show a reflection then a translation gives a different graph from the reverse order.',
      title: 'IB Maths AA HL Non-Commutative Transformations',
      description:
        'Non-commutative transformations give different results in different orders. Here a reflection and a translation are applied both ways.',
      questionTitle: 'Non-commutative Transformations: Questions & Answers',
      questionDescription:
        'Apply the transformations in each order, write both final equations, and compare them. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'deducing-y-f-x-from-y-frac1f-x': {
      metaTitle: 'Reciprocal Graphs: Finding y = f(x) | IB AA HL  ',
      metaDescription:
        'Use reciprocal graphs in IB Maths AA HL: deduce y = f(x) from the graph of y = 1/f(x) and its asymptotes.',
      title: 'IB Maths AA HL Deducing y = f(x) from y = 1/f(x)',
      description:
        "Reciprocal graphs can be read backwards: vertical asymptotes of 1/f(x) are roots of f, and its horizontal asymptote gives f's limiting value.",
      questionTitle: 'Deducing y = f(x) from y = \\frac{1{f(x): Questions & Answers',
      questionDescription:
        'Turn each asymptote and key point of 1/f(x) into the matching feature of f(x), then sketch f. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'equivalent-sequences-of-transformations': {
      metaTitle: 'Equivalent Transformations | IB Maths AA HL  ',
      metaDescription:
        'Find equivalent transformations in IB Maths AA HL: a translation then a stretch matched by a stretch then a translation.',
      title: 'IB Maths AA HL Equivalent Sequences of Transformations',
      description:
        'Two different sequences can be equivalent transformations that produce the same graph. The translation distance changes when the order changes.',
      questionTitle: 'Equivalent Sequences of Transformations: Questions & Answers',
      questionDescription:
        'Write the final function in terms of x, then factorise it the other way to read off the equivalent translation. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },

    'exponential-transformations': {
      metaTitle: 'Exponential Transformations | IB Maths AA HL  ',
      metaDescription:
        'Exponential transformations in IB Maths AA HL: show a vertical stretch of y = 8ˣ equals a horizontal translation.',
      title: 'IB Maths AA HL Exponential Transformations',
      description:
        'Exponential transformations have a special property: a vertical stretch of y = aˣ is the same as a horizontal translation.',
      questionTitle: 'Exponential Transformations: Questions & Answers',
      questionDescription:
        'Write the stretch as 5 × 8ˣ, express 5 as a power of 8, and use the laws of indices to find the translation. Questions follow syllabus section AHL 2.16. Every question comes with the mark scheme working.',
    },
  },

  // 19. Geometry – Lines & Planes
  'geometry-lines-planes': {
    'intersection-of-two-lines-in-3d-vector-form': {
      metaTitle: 'Intersection of Two Lines in 3D | IB AA HL  ',
      metaDescription:
        'Find the intersection of two lines in 3D in IB Maths AA HL from vector and Cartesian equations, and where a line meets an axis.',
      title: 'IB Maths AA HL Intersection of Two Lines in 3D',
      description:
        'Two lines in 3D meet only if their equations give the same point for some pair of parameter values. These questions find the intersection of two lines in 3D.',
      questionTitle: 'Intersection of two lines in 3D (vector form): Questions & Answers',
      questionDescription:
        'Equate the components, solve two equations for the parameters, check the third, and substitute back for the point. Questions follow syllabus section AHL 3.15. Every question comes with the mark scheme working.',
    },

    'skew-lines-in-3d': {
      metaTitle: 'Skew Lines in 3D | IB Maths AA HL  ',
      metaDescription:
        'Show that two lines are skew lines in 3D in IB Maths AA HL: not parallel and with no point of intersection.',
      title: 'IB Maths AA HL Skew Lines in 3D',
      description:
        'Skew lines in 3D are neither parallel nor intersecting. Proving it takes two checks.',
      questionTitle: 'Skew lines in 3D: Questions & Answers',
      questionDescription:
        'Show the direction vectors are not multiples of each other, then show the equations for an intersection are inconsistent. Questions follow syllabus section AHL 3.15. Every question comes with the mark scheme working.',
    },

    'classifying-pairs-of-lines-same-parallel-or-non-parallel': {
      metaTitle: 'Parallel, Intersecting or Skew Lines | IB AA HL  ',
      metaDescription:
        'Classify pairs of lines in IB Maths AA HL as the same line, parallel, intersecting or skew lines, from their vector equations.',
      title: 'IB Maths AA HL Classifying Pairs of Lines',
      description:
        'Two lines in 3D can be the same, parallel, intersecting or skew lines. These questions decide which from the equations.',
      questionTitle:
        'Classifying pairs of lines: same, parallel, or non-parallel: Questions & Answers',
      questionDescription:
        'Compare direction vectors first; if parallel, test whether a point on one lies on the other; if not, test for an intersection. Questions follow syllabus section AHL 3.15. Every question comes with the mark scheme working.',
    },

    'showing-two-representations-describe-the-same-line': {
      metaTitle: 'Same Line or Different Lines? | IB Maths AA HL  ',
      metaDescription:
        'Same line or different lines? Decide in IB Maths AA HL whether two vector equations describe one line, using direction and point checks.',
      title: 'IB Maths AA HL Same Line or Different Lines',
      description:
        'A line has many vector equations. Deciding between the same line or different lines needs a direction check and a point check.',
      questionTitle: 'Showing two representations describe the same line: Questions & Answers',
      questionDescription:
        'Check the direction vectors are parallel, then test whether a point from one equation satisfies the other. Questions follow syllabus section AHL 3.15. Every question comes with the mark scheme working.',
    },

    'finding-parameter-value-for-intersection-lines-with-unknown-constant': {
      metaTitle: 'Parameter Value for Intersecting Lines | AA HL  ',
      metaDescription:
        'Find the parameter value for intersecting lines in IB Maths AA HL: the value of p that makes two lines with an unknown constant meet.',
      title: 'IB Maths AA HL Lines with an Unknown Constant',
      description:
        'Finding the parameter value for intersecting lines means choosing p so the three component equations become consistent.',
      questionTitle:
        'Finding parameter value for intersection; lines with unknown constant: Questions & Answers',
      questionDescription:
        'Equate components, solve two equations for the line parameters in terms of p, and substitute into the third to find p. Questions follow syllabus section AHL 3.15. Every question comes with the mark scheme working.',
    },

    'paths-of-moving-objects-intersection-of-paths': {
      metaTitle: 'Paths of Moving Objects: Vectors | IB AA HL  ',
      metaDescription:
        "Paths of moving objects with vectors in IB Maths AA HL: do two helicopters' paths cross, and do the helicopters actually collide?",
      title: 'IB Maths AA HL Paths of Moving Objects',
      description:
        'Paths of moving objects described by vectors can cross without the objects meeting. This two-part question separates the two ideas with toy helicopters.',
      questionTitle: 'Paths of moving objects; intersection of paths: Questions & Answers',
      questionDescription:
        'For the paths, use separate parameters and solve. For a collision, use the same time t in both equations and check every component. Questions follow syllabus section AHL 3.15. Every question comes with the mark scheme working.',
    },

    'speed-of-particles-from-position-vectors': {
      metaTitle: 'Speed from Position Vectors | IB Maths AA HL  ',
      metaDescription:
        'Find speed from position vectors in IB Maths AA HL for two particles, then decide whether two moving particles meet.',
      title: 'IB Maths AA HL Speed and Meeting of Moving Particles',
      description:
        'Speed from position vectors is the magnitude of the velocity vector, the coefficient of t.',
      questionTitle: 'Speed of particles from position vectors: Questions & Answers',
      questionDescription:
        'Read off the velocity vector, find its magnitude, then set the two position vectors equal at the same t to test for a meeting. Questions follow syllabus section AHL 3.15. Every question comes with the mark scheme working.',
    },

    'vertical-alignment-of-moving-objects': {
      metaTitle: 'Vertical Alignment of Moving Objects | IB AA HL  ',
      metaDescription:
        'Vertical alignment of moving objects in IB Maths AA HL: when one fly is directly above another, and their distance apart at a given time.',
      title: 'IB Maths AA HL Moving Objects: Alignment and Distance',
      description:
        'Vertical alignment of moving objects happens when their x- and y-coordinates match at the same time.',
      questionTitle: 'Vertical alignment of moving objects: Questions & Answers',
      questionDescription:
        'Equate the horizontal components at the same t, solve, then find the distance between the two positions with the distance formula. Questions follow syllabus section AHL 3.15. Every question comes with the mark scheme working.',
    },

    'moving-objects-finding-unknown-velocity-component': {
      metaTitle: 'Vector Kinematics: Boat Problem | IB AA HL  ',
      metaDescription:
        "Vector kinematics in IB Maths AA HL: find a boat's unknown velocity component from its path, then its speed.",
      title: 'IB Maths AA HL Moving Objects: Velocity and Speed',
      description:
        'In vector kinematics, position = start + t × velocity. Known positions at known times fix any unknown velocity component.',
      questionTitle: 'Moving objects; finding unknown velocity component: Questions & Answers',
      questionDescription:
        'Substitute the known time and position, solve for the unknown component, then find the speed as the magnitude of the velocity. Questions follow syllabus section AHL 3.15. Every question comes with the mark scheme working.',
    },

    'shortest-distance-between-skew-lines-perpendicular-segment': {
      metaTitle: 'Shortest Distance Between Skew Lines | IB AA HL  ',
      metaDescription:
        'Find the shortest distance between skew lines in IB Maths AA HL using the common perpendicular segment.',
      title: 'IB Maths AA HL Shortest Distance Between Skew Lines',
      description:
        'The shortest distance between skew lines is the length of the segment perpendicular to both.',
      questionTitle:
        'Shortest distance between skew lines; perpendicular segment: Questions & Answers',
      questionDescription:
        'Write a general vector between the lines, make it perpendicular to both directions, solve for the parameters, and find its length; the shortest distance between skew lines formula gives the same result. Questions follow syllabus section AHL 3.15. Every question comes with the mark scheme working.',
    },
  },

  // 20. Geometry
  geometry: {
    'vector-equation-of-a-plane': {
      metaTitle: 'Vector Equation of a Plane | IB Maths AA HL  ',
      metaDescription:
        'Write the vector equation of a plane in IB Maths AA HL from a point and two direction vectors parallel to it.',
      title: 'IB Maths AA HL Vector Equation of a Plane',
      description:
        'The vector equation of a plane uses one point and two non-parallel directions: r = a + λd₁ + μd₂.',
      questionTitle: 'Vector Equation of a Plane: Questions & Answers',
      questionDescription:
        'Take the given point as a, use the two direction vectors, and write the equation with two separate parameters. Questions follow syllabus section AHL 3.17. Every question comes with the mark scheme working.',
    },

    'plane-through-three-points': {
      metaTitle: 'Plane Through Three Points | IB Maths AA HL  ',
      metaDescription:
        'Find the equation of a plane through three points in IB Maths AA HL using two direction vectors and the cross product.',
      title: 'IB Maths AA HL Plane Through Three Points',
      description:
        'A plane through three points uses one of them as a position vector and two joining vectors as directions.',
      questionTitle: 'Plane Through Three Points: Questions & Answers',
      questionDescription:
        'Find AB and AC, write the vector equation, or take AB × AC as the normal for the Cartesian form. Questions follow syllabus section AHL 3.17, AHL 3.18. Every question comes with the mark scheme working.',
    },

    'point-on-plane-check': {
      metaTitle: 'Point on a Plane | IB Maths AA HL  ',
      metaDescription:
        'Check whether a point lies on a plane in IB Maths AA HL from its vector equation, including a plane through three points.',
      title: 'IB Maths AA HL Point on Plane Check',
      description:
        'To test a point on a plane, see whether some pair of parameters gives exactly that point.',
      questionTitle: 'Point on Plane Check: Questions & Answers',
      questionDescription:
        'Set the vector equation equal to the point, solve two components for the parameters, and check the third. Questions follow syllabus section AHL 3.17. Every question comes with the mark scheme working.',
    },

    'cartesian-equation-point-check': {
      metaTitle: 'Cartesian Equation of a Plane | IB Maths AA HL  ',
      metaDescription:
        'Write the Cartesian equation of a plane in IB Maths AA HL from a normal vector and a point, and check points on it.',
      title: 'IB Maths AA HL Cartesian Equation of a Plane',
      description:
        'The Cartesian equation of a plane is r · n = a · n, written as ax + by + cz = d with n = (a, b, c).',
      questionTitle: 'Cartesian Equation & Point Check: Questions & Answers',
      questionDescription:
        'Read or find the normal, substitute a known point to find d, and test other points by substitution. Questions follow syllabus section AHL 3.17. Every question comes with the mark scheme working.',
    },

    'plane-containing-two-lines': {
      metaTitle: 'Plane Containing a Line and Point | IB AA HL  ',
      metaDescription:
        'Find a plane containing a line and point, or two lines, in IB Maths AA HL, and show a line lies in a given plane.',
      title: 'IB Maths AA HL Plane Containing Lines and Points',
      description:
        "A plane containing a line and point uses the line's direction and the vector from the line to the point as its two directions.",
      questionTitle: 'Plane Containing Two Lines: Questions & Answers',
      questionDescription:
        'Find two direction vectors in the plane, take their cross product as the normal, and use a known point to finish the equation. Questions follow syllabus section AHL 3.17. Every question comes with the mark scheme working.',
    },

    'coplanar-points': {
      metaTitle: 'Coplanar Points | IB Maths AA HL  ',
      metaDescription:
        'Show that four coplanar points lie in the same plane in IB Maths AA HL using the plane through three of them.',
      title: 'IB Maths AA HL Coplanar Points',
      description:
        'Coplanar points all lie in one plane. Four points are coplanar when the fourth satisfies the plane through the other three.',
      questionTitle: 'Coplanar Points: Questions & Answers',
      questionDescription:
        'Find the plane through A, B and C, then substitute D and show it satisfies the equation. Questions follow syllabus section AHL 3.17. Every question comes with the mark scheme working.',
    },
  },

  // 21. Vectors & 3D Geometry
  'vectors-3d-geometry': {
    'angle-between-line-and-plane': {
      metaTitle: 'Angle Between Two Planes | IB Maths AA HL  ',
      metaDescription:
        'Find the angle between two planes, and between a line and a plane, in IB Maths AA HL using normal and direction vectors.',
      title: 'IB Maths AA HL Angles Between Lines and Planes',
      description:
        "The angle between two planes equals the angle between their normals. For a line and a plane, use the line's direction and the plane's normal.",
      questionTitle: 'Angle between line and plane: Questions & Answers',
      questionDescription:
        'Use the scalar product of the right pair of vectors, give the acute angle, and for a line and plane subtract from 90° when you use the normal. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.',
    },

    'intersection-of-line-and-plane': {
      metaTitle: 'Intersection of Line and Plane | IB Maths AA HL  ',
      metaDescription:
        'Find the intersection of a line and plane in IB Maths AA HL, and the line of intersection of two or three planes.',
      title: 'IB Maths AA HL Intersections of Lines and Planes',
      description:
        "The intersection of a line and plane is found by substituting the line into the plane's equation. Two planes meet in a line found from their normals.",
      questionTitle: 'Intersection of line and plane: Questions & Answers',
      questionDescription:
        "Substitute the line's components into the plane and solve for the parameter. For two planes, take the cross product of the normals as the line's direction. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.",
    },

    'system-of-three-planes': {
      metaTitle: 'System of Three Planes | IB Maths AA HL  ',
      metaDescription:
        'Solve a system of three planes in IB Maths AA HL, describe its geometric configuration, and find the values of k and c for each case.',
      title: 'IB Maths AA HL Systems of Three Planes',
      description:
        'A system of three planes can meet at a point, in a line, or not at all. The solution of the equations tells you which.',
      questionTitle: 'System of three planes: Questions & Answers',
      questionDescription:
        'Solve the equations by elimination or with technology, interpret any inconsistency or free parameter, and describe the configuration. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.',
    },

    'perpendicular-line-to-a-plane-perpendicular-distance': {
      metaTitle: 'Line Perpendicular to a Plane | IB Maths AA HL  ',
      metaDescription:
        'Write a line perpendicular to a plane in IB Maths AA HL, find where it meets the plane, and the perpendicular distance from a point.',
      title: 'IB Maths AA HL Perpendicular Lines and Distances',
      description:
        "A line perpendicular to a plane has the plane's normal as its direction. Where it meets the plane gives the foot of the perpendicular.",
      questionTitle: 'Perpendicular line to a plane; perpendicular distance: Questions & Answers',
      questionDescription:
        'Write the line through the point with direction n, substitute into the plane, and find the distance from the point to the foot. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.',
    },

    'angle-intersection-perpendicular-distance': {
      metaTitle: 'Distance from a Point to a Plane | IB AA HL  ',
      metaDescription:
        'Find the perpendicular distance from a point to a plane in IB Maths AA HL, with the angle and intersection of a line and plane.',
      title: 'IB Maths AA HL Angle, Intersection and Perpendicular Distance',
      description:
        'This multi-part question finds an angle, an intersection and the perpendicular distance from a point to a plane.',
      questionTitle: 'Angle; intersection; perpendicular distance: Questions & Answers',
      questionDescription:
        'Work through each part in order: the angle from n and d, the intersection by substitution, then the distance along the normal. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.',
    },

    'perpendicular-from-point-reflection-in-plane': {
      metaTitle: 'Reflection of a Point in a Plane | IB AA HL  ',
      metaDescription:
        'Find the reflection of a point in a plane in IB Maths AA HL via the foot of the perpendicular from the point.',
      title: 'IB Maths AA HL Reflection in a Plane',
      description:
        'The reflection of a point in a plane lies the same distance on the other side, along the normal through the point.',
      questionTitle: 'Perpendicular from point; reflection in plane: Questions & Answers',
      questionDescription:
        'Find the foot of the perpendicular, then go the same distance again: the reflection is A + 2(F − A). Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.',
    },

    'cross-product-equation-of-plane-intersection-of-planes': {
      metaTitle: 'Line of Intersection of Two Planes | IB AA HL  ',
      metaDescription:
        "Use the cross product in IB Maths AA HL to find a plane's equation and the line of intersection of two planes.",
      title: 'IB Maths AA HL Cross Product and Intersection of Planes',
      description:
        'The line of intersection of two planes runs perpendicular to both normals, so its direction is their cross product.',
      questionTitle:
        'Cross product; equation of plane; intersection of planes: Questions & Answers',
      questionDescription:
        'Calculate the cross product, find one point on both planes by setting one coordinate to zero, and write the vector equation. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.',
    },

    'consistent-systems-of-equations-geometric-configuration': {
      metaTitle: 'Consistent Systems of Equations | IB AA HL  ',
      metaDescription:
        'Consistent systems of equations in IB Maths AA HL: find the value of a that makes three planes meet, and describe their configuration.',
      title: 'IB Maths AA HL Consistent Systems and Geometric Configuration',
      description:
        'Consistent systems of equations have at least one solution. Here the planes meet in a line only for one value of a.',
      questionTitle:
        'Consistent systems of equations; geometric configuration: Questions & Answers',
      questionDescription:
        'Eliminate to reach a final equation in a, set it to be consistent, solve in terms of a parameter, and describe the line of intersection. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.',
    },

    'intersection-of-planes-geometric-configuration': {
      metaTitle: 'Intersection of Planes | IB Maths AA HL  ',
      metaDescription:
        'Find the intersection of planes in IB Maths AA HL as a vector line, then how it relates to a third plane.',
      title: 'IB Maths AA HL Intersection of Planes: Geometric Configuration',
      description:
        'The intersection of planes Π₁ and Π₂ is a line. This question finds it, then compares it with a third plane.',
      questionTitle: 'Intersection of planes; geometric configuration: Questions & Answers',
      questionDescription:
        'Find the line from the cross product and a common point, then substitute into the third plane to see whether it meets, lies in or misses it. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.',
    },

    'cross-product-area-plane-perpendicular-distance-volume': {
      metaTitle: 'Volume of Tetrahedron Using Vectors | IB AA HL  ',
      metaDescription:
        'Find the volume of a tetrahedron using vectors in IB Maths AA HL, from triangle area, plane equation and perpendicular height.',
      title: 'IB Maths AA HL Cross Product, Area and Volume',
      description:
        'The volume of a tetrahedron using vectors comes from a base area and a perpendicular height, both found with the cross product.',
      questionTitle:
        'Cross product; area; plane; perpendicular distance; volume: Questions & Answers',
      questionDescription:
        "Find AB × AC for the area of triangle ABC and the plane's normal, the distance from D to the plane, then V = ⅓ × area × height. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.",
    },

    'parallel-planes-perpendicular-distance': {
      metaTitle: 'Parallel Planes: Distance Between | IB AA HL  ',
      metaDescription:
        'Show that two parallel planes are parallel in IB Maths AA HL, then find the perpendicular distance between them.',
      title: 'IB Maths AA HL Parallel Planes and Perpendicular Distance',
      description:
        'Parallel planes have normals that are multiples of each other. The distance between them is measured along that normal.',
      questionTitle: 'Parallel planes; perpendicular distance: Questions & Answers',
      questionDescription:
        'Show the normals are parallel, take a point on one plane, and find its perpendicular distance to the other. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.',
    },

    'perpendicular-planes-cross-product-line-through-point-parallel-to-both-planes': {
      metaTitle: 'Perpendicular Planes | IB Maths AA HL  ',
      metaDescription:
        'Show that perpendicular planes have perpendicular normals in IB Maths AA HL, and find a line parallel to both planes.',
      title: 'IB Maths AA HL Perpendicular Planes and Cross Product',
      description:
        'Perpendicular planes have normals whose scalar product is zero. A line parallel to both runs along the cross product of the normals.',
      questionTitle:
        'Perpendicular planes; cross product; line through point parallel to both planes: Questions & Answers',
      questionDescription:
        'Show n₁ · n₂ = 0, calculate n₁ × n₂, and write the line through the given point with that direction. Questions follow syllabus section AHL 3.18. Every question comes with the mark scheme working.',
    },
  },

  // 22. Probability
  probability: {
    'conditional-probability-bayes-theorem-2-events': {
      metaTitle: 'Bayes Theorem Questions | IB Maths AA HL  ',
      metaDescription:
        'Bayes theorem in IB Maths AA HL: two and three events, binomial contexts and medical tests, including rare-disease screening.',
      title: "IB Maths AA HL Bayes' Theorem",
      description:
        'Bayes theorem reverses a conditional probability: from P(A | B) to P(B | A). These questions use it for two events, three events and real tests.',
      questionTitle: "Conditional Probability (Bayes' Theorem – 2 events): Questions & Answers",
      questionDescription:
        'Write the Bayes theorem formula, find the total probability of A in the denominator, and check the answer makes sense; the bayes theorem questions and answers show every line. Questions follow syllabus section AHL 4.13. Every question comes with the mark scheme working.',
    },

    'conditional-probability-from-tree-diagram': {
      metaTitle: 'Conditional Probability: Bags and Trees | AA HL  ',
      metaDescription:
        'Conditional probability with bags in IB Maths AA HL: tree diagrams, with and without replacement, and algebraic combined bags.',
      title: 'IB Maths AA HL Conditional Probability: Trees and Bags',
      description:
        'Conditional probability bags problems draw counters or balls from one or more bags, often without replacement.',
      questionTitle: 'Conditional Probability from Tree Diagram: Questions & Answers',
      questionDescription:
        'Draw the tree with probabilities that change after each draw, then divide the probability of both events by the probability of the given one. Questions follow syllabus section AHL 4.13. Every question comes with the mark scheme working.',
    },

    'bayes-theorem-from-tree-diagram-3-events': {
      metaTitle: 'Bayes Theorem with a Tree Diagram | IB AA HL  ',
      metaDescription:
        'Use a Bayes theorem tree diagram in IB Maths AA HL to find P(B₂ | A) when there are three possible first-stage events.',
      title: "IB Maths AA HL Bayes' Theorem from a Tree Diagram",
      description:
        'A Bayes theorem tree diagram with three branches shows every route to A. The answer is one route divided by all of them.',
      questionTitle: "Bayes' Theorem from Tree Diagram – 3 Events: Questions & Answers",
      questionDescription:
        'Multiply along each branch that ends in A, add them for P(A), and divide the branch you need by that total. Questions follow syllabus section AHL 4.13. Every question comes with the mark scheme working.',
    },

    'total-probability-bayes-theorem-context': {
      metaTitle: 'Law of Total Probability | IB Maths AA HL  ',
      metaDescription:
        "Use the law of total probability with Bayes' theorem in IB Maths AA HL: buses and trains, broken eggs and other contexts.",
      title: "IB Maths AA HL Total Probability and Bayes' Theorem",
      description:
        "The law of total probability adds the chance of an event through every route. It gives the denominator in Bayes' theorem.",
      questionTitle: "Total Probability & Bayes' Theorem (Context): Questions & Answers",
      questionDescription:
        'Apply the law of total probability formula, P(A) = Σ P(A | Bᵢ)P(Bᵢ), then use it to reverse the condition. Questions follow syllabus section AHL 4.13. Every question comes with the mark scheme working.',
    },

    'bayes-theorem-reverse-conditional': {
      metaTitle: 'Reverse Conditional Probability | IB AA HL  ',
      metaDescription:
        'Reverse conditional probability in IB Maths AA HL: given that a test was passed, find the probability it was taken in the morning.',
      title: "IB Maths AA HL Bayes' Theorem: Reverse Conditional",
      description:
        "Reverse conditional probability asks about the cause given the outcome, which is what Bayes' theorem answers.",
      questionTitle: "Bayes' Theorem (Reverse Conditional): Questions & Answers",
      questionDescription:
        'Draw the tree from the cause to the outcome, then divide the morning-and-pass branch by the total probability of passing. Questions follow syllabus section AHL 4.13. Every question comes with the mark scheme working.',
    },

    'bayes-theorem-with-multiple-outcomes': {
      metaTitle: 'Bayes Theorem Examples: Mixed Dice | IB AA HL  ',
      metaDescription:
        'One of the richer Bayes theorem examples for IB Maths AA HL: four-, six- and eight-sided dice drawn from one bag.',
      title: "IB Maths AA HL Bayes' Theorem with Multiple Outcomes",
      description:
        'Among Bayes theorem examples, this one has three kinds of dice, so the first stage has three branches.',
      questionTitle: "Bayes' Theorem with Multiple Outcomes: Questions & Answers",
      questionDescription:
        "Find the probability of the score for each dice type, weight by how many of each are in the bag, then apply Bayes' theorem. Questions follow syllabus section AHL 4.13. Every question comes with the mark scheme working.",
    },

    'bayes-theorem-3-equally-likely-events': {
      metaTitle: 'Bayes Theorem Questions: Goalkeepers | IB AA HL  ',
      metaDescription:
        'Bayes theorem questions for IB Maths AA HL: three equally likely goalkeepers and the chance a saved penalty was made by each.',
      title: "IB Maths AA HL Bayes' Theorem: Three Equally Likely Events",
      description:
        'These Bayes theorem questions use three equally likely goalkeepers, each with a different chance of saving a penalty.',
      questionTitle: "Bayes' Theorem – 3 Equally Likely Events: Questions & Answers",
      questionDescription:
        'Weight each save probability by ⅓, add for the total probability of a save, and divide the goalkeeper you need by that total. Questions follow syllabus section AHL 4.13. Every question comes with the mark scheme working.',
    },
  },

  // 23. Statistics & Probability
  'statistics-probability': {
    'discrete-random-variables-variance': {
      metaTitle: 'Variance of a Discrete Random Variable | AA HL  ',
      metaDescription:
        'Find the variance of a discrete random variable in IB Maths AA HL from a table, including a dice with an unknown face value.',
      title: 'IB Maths AA HL Discrete Random Variables: Variance',
      description:
        'The variance of a discrete random variable measures spread: Var(X) = E(X²) − [E(X)]².',
      questionTitle: 'Discrete Random Variables – Variance: Questions & Answers',
      questionDescription:
        'Find E(X) and E(X²) from the table, subtract, and keep exact fractions until the end. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'discrete-random-variables-defined-by-formula': {
      metaTitle: 'Discrete Random Variable Questions | IB AA HL  ',
      metaDescription:
        'Discrete random variable questions in IB Maths AA HL: distributions defined by a formula, the value of k, E(X) and Var(X).',
      title: 'IB Maths AA HL Discrete Random Variables: Distributions by Formula',
      description:
        'A discrete random variable can be defined by a formula such as P(X = x) = x/10. The probabilities must still sum to 1.',
      questionTitle: 'Discrete Random Variables – Defined by Formula: Questions & Answers',
      questionDescription:
        'List each probability from the formula, use the sum of 1 to find any constant, then calculate E(X) and Var(X). Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'linear-transformations-of-random-variables': {
      metaTitle: 'Linear Transformation of Random Variables  ',
      metaDescription:
        'Linear transformation of random variables in IB Maths AA HL: E(aX + b), Var(aX + b) and derived distributions.',
      title: 'IB Maths AA HL Linear Transformations of Random Variables',
      description:
        'A linear transformation of random variables shifts and scales the mean, but only scales the variance: Var(aX + b) = a²Var(X).',
      questionTitle: 'Linear Transformations of Random Variables: Questions & Answers',
      questionDescription:
        'Apply E(aX + b) = aE(X) + b and Var(aX + b) = a²Var(X), rearranging first when the relationship is written as A + 2B = 10. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'discrete-random-variables-standard-deviation': {
      metaTitle: 'Standard Deviation of a Random Variable | AA HL  ',
      metaDescription:
        'Find k and the standard deviation of a discrete random variable in IB Maths AA HL from its probability distribution table.',
      title: 'IB Maths AA HL Discrete Random Variables: Standard Deviation',
      description:
        'The standard deviation of a discrete random variable is the square root of its variance.',
      questionTitle: 'Discrete Random Variables – Standard Deviation: Questions & Answers',
      questionDescription:
        'Use the sum of 1 to find k, calculate Var(X) = E(X²) − [E(X)]², and take the square root. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'linear-transformations-probability-distribution-table': {
      metaTitle: 'E(aX + b) and Var(aX + b) | IB Maths AA HL  ',
      metaDescription:
        'Find E(aX + b) and Var(aX + b) in IB Maths AA HL from a probability distribution table, then for a new random variable.',
      title: 'IB Maths AA HL Linear Transformations: Distribution Table',
      description:
        'Once E(X) and Var(X) are known, E(aX + b) and Var(aX + b) follow without a new table.',
      questionTitle: 'Linear Transformations – Probability Distribution Table: Questions & Answers',
      questionDescription:
        'Find E(X) and Var(X) from the table, then apply the transformation rules to the new variable. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'discrete-random-variables-derived-distribution': {
      metaTitle: 'Derived Probability Distribution | IB AA HL  ',
      metaDescription:
        'Build a derived probability distribution in IB Maths AA HL from P(V = v) = v/20, then find its expected value.',
      title: 'IB Maths AA HL Discrete Random Variables: Derived Distribution',
      description:
        'A derived probability distribution comes from applying a function to each value of an existing random variable.',
      questionTitle: 'Discrete Random Variables – Derived Distribution: Questions & Answers',
      questionDescription:
        'List the new values with their probabilities, combine any that repeat, and calculate the expected value. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'binomial-distribution-coin-flipping': {
      metaTitle: 'Binomial Distribution: Coin Toss | IB AA HL  ',
      metaDescription:
        'Binomial distribution with a coin toss and a dice in IB Maths AA HL: write the distribution, the mean and the expected profit.',
      title: 'IB Maths AA HL Binomial Distribution: Coins and Dice',
      description:
        'A binomial distribution coin toss model counts tails in a fixed number of fair flips. The same ideas give the expected profit in a dice game.',
      questionTitle: 'Binomial Distribution – Coin Flipping: Questions & Answers',
      questionDescription:
        'Write X ~ B(n, p), list the probabilities, use E(X) = np and Var(X) = np(1 − p), and apply them to the profit. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'discrete-random-variables-sum-of-two-dice': {
      metaTitle: 'Sum of Two Dice Distribution | IB Maths AA HL  ',
      metaDescription:
        'Find the sum of two dice probability distribution in IB Maths AA HL for a dice numbered 1, 1, 2, 2, 2, 3.',
      title: 'IB Maths AA HL Discrete Random Variables: Sum of Two Dice',
      description:
        'The sum of two dice probability distribution comes from a sample space grid of every pair of scores.',
      questionTitle: 'Discrete Random Variables – Sum of Two Dice: Questions & Answers',
      questionDescription:
        'Draw the grid of totals, count the outcomes for each total, and write the distribution as a table. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },

    'discrete-random-variables-unknown-probabilities': {
      metaTitle: 'Probability Distribution with Unknowns | AA HL  ',
      metaDescription:
        'Probability distribution with unknowns in IB Maths AA HL: find the missing probabilities from E(X) and the total of 1, then the variance.',
      title: 'IB Maths AA HL Discrete Random Variables: Unknown Probabilities',
      description:
        'A probability distribution with unknowns is fixed by two facts: the probabilities sum to 1, and E(X) is given.',
      questionTitle: 'Discrete Random Variables – Unknown Probabilities: Questions & Answers',
      questionDescription:
        'Form two equations from those facts, solve simultaneously, then calculate the variance. Questions follow syllabus section AHL 4.14. Every question comes with the mark scheme working.',
    },
  },

  // 24. Analysis and Approaches
  'analysis-and-approaches': {
    'continuity-of-functions': {
      metaTitle: 'Continuity and Differentiability Questions  ',
      metaDescription:
        'Continuity and differentiability questions for IB Maths AA HL: find a and b so piecewise functions are continuous and smooth.',
      title: 'IB Maths AA HL Continuity and Differentiability',
      description:
        'These continuity and differentiability questions use piecewise functions. Continuity needs the pieces to meet; differentiability needs their gradients to match too.',
      questionTitle: 'Continuity of Functions: Questions & Answers',
      questionDescription:
        'Set the two pieces equal at the join for continuity, set their derivatives equal for differentiability, and solve for the constants. Questions follow syllabus section AHL 5.12. Every question comes with the mark scheme working.',
    },

    'limits-at-infinity': {
      metaTitle: 'Limits at Infinity | IB Maths AA HL  ',
      metaDescription:
        'Find limits at infinity in IB Maths AA HL for rational and exponential expressions by dividing by the dominant term.',
      title: 'IB Maths AA HL Limits at Infinity',
      description:
        'Limits at infinity depend on the dominant terms. Dividing every term by the highest power, or the largest exponential, shows the limit.',
      questionTitle: 'Limits at Infinity: Questions & Answers',
      questionDescription:
        'Divide numerator and denominator by the dominant term, note which terms approach zero, and state the limit. Questions follow syllabus section AHL 5.12. Every question comes with the mark scheme working.',
    },

    'convergence-and-divergence': {
      metaTitle: 'Convergence and Divergence | IB Maths AA HL  ',
      metaDescription:
        'Decide convergence and divergence as x approaches infinity in IB Maths AA HL, and link it to continuity.',
      title: 'IB Maths AA HL Convergence and Divergence',
      description:
        'Convergence and divergence describe whether an expression settles to a finite value as x grows.',
      questionTitle: 'Convergence and Divergence: Questions & Answers',
      questionDescription:
        'Compare the degrees or growth rates of numerator and denominator, then state whether the expression converges and to what value. Questions follow syllabus section AHL 5.12. Every question comes with the mark scheme working.',
    },

    'differentiation-from-first-principles': {
      metaTitle: 'Differentiation from First Principles | AA HL  ',
      metaDescription:
        'Differentiation from first principles in IB Maths AA HL: polynomials such as x³ and x⁴, and a proof of the sum rule.',
      title: 'IB Maths AA HL Differentiation from First Principles',
      description:
        'Differentiation from first principles uses the limit of (f(x + h) − f(x)) ÷ h as h approaches 0.',
      questionTitle: 'Differentiation from First Principles: Questions & Answers',
      questionDescription:
        'Expand f(x + h), cancel f(x), divide by h, and let h approach 0. For the proof, apply the definition to g + h term by term. Questions follow syllabus section AHL 5.12. Every question comes with the mark scheme working.',
    },

    'higher-order-derivatives': {
      metaTitle: 'Higher Order Derivatives | IB Maths AA HL  ',
      metaDescription:
        'Find higher order derivatives in IB Maths AA HL, including a general nth derivative proved by induction.',
      title: 'IB Maths AA HL Higher Order Derivatives',
      description:
        'Higher order derivatives come from differentiating repeatedly. A pattern in them can then be proved for all n.',
      questionTitle: 'Higher Order Derivatives: Questions & Answers',
      questionDescription:
        'Differentiate step by step as in the higher order derivatives examples, then prove the general formula by induction. Questions follow syllabus section AHL 5.12. Every question comes with the mark scheme working.',
    },

    'proof-by-mathematical-induction': {
      metaTitle: 'Proof by Mathematical Induction | IB AA HL  ',
      metaDescription:
        'Proof by mathematical induction for nth derivatives in IB Maths AA HL, such as the nth derivative of e^(5x) and of sin x.',
      title: 'IB Maths AA HL Proof by Induction: nth Derivatives',
      description:
        'Proof by mathematical induction confirms a formula for the nth derivative: check n = 1, assume n = k, differentiate once more.',
      questionTitle: 'Proof by Mathematical Induction: Questions & Answers',
      questionDescription:
        'Differentiate the assumed kth derivative, show it matches the formula for k + 1, and write the conclusion. Questions follow syllabus section AHL 5.12. Every question comes with the mark scheme working.',
    },

    'limits-differentiation-of-exponentials': {
      metaTitle: 'Exponential Limits and Derivatives | IB AA HL  ',
      metaDescription:
        'Exponential limits and derivatives in IB Maths AA HL: find limits as x approaches ±∞ and zero, then differentiate the function.',
      title: 'IB Maths AA HL Limits and Differentiation of Exponentials',
      description:
        'This question works through exponential limits and derivatives for one function: its limits as x approaches ±∞ and zero, then its derivative.',
      questionTitle: 'Limits / Differentiation of Exponentials: Questions & Answers',
      questionDescription:
        'Divide by the dominant exponential for each limit, then differentiate with the quotient rule. Questions follow syllabus section AHL 5.12. Every question comes with the mark scheme working.',
    },

    'first-principles-proof-by-induction': {
      metaTitle: 'First Principles and Proof by Induction | AA HL  ',
      metaDescription:
        'Combine first principles and proof by induction in IB Maths AA HL: prove a derivative from the definition, then the nth derivative.',
      title: 'IB Maths AA HL First Principles and Proof by Induction',
      description:
        'This question combines two proofs: a derivative from first principles, then an nth derivative by induction.',
      questionTitle: 'First Principles / Proof by Induction: Questions & Answers',
      questionDescription:
        'Use the limit definition for part a, then check the base case, assume n = k and differentiate once more for part b. Questions follow syllabus section AHL 5.12. Every question comes with the mark scheme working.',
    },
  },

  // 25. Integration
  integration: {
    'integration-by-substitution-indefinite': {
      metaTitle: 'Integration by Substitution Questions | AA HL  ',
      metaDescription:
        'Integration by substitution questions for IB Maths AA HL: indefinite and definite, with exponentials, trig, logs and areas.',
      title: 'IB Maths AA HL Integration by Substitution',
      description:
        'These integration by substitution questions cover definite and indefinite integrals with algebraic, exponential, logarithmic and trigonometric substitutions.',
      questionTitle: 'Integration by Substitution (Indefinite): Questions & Answers',
      questionDescription:
        'Replace every x and dx in terms of u, change the limits for a definite integral, and simplify before integrating, as in the integration by substitution examples. Questions follow syllabus section AHL 5.16. Every question comes with the mark scheme working.',
    },

    'area-between-a-curve-and-the-y-axis': {
      metaTitle: 'Area Between a Curve and the y-Axis | IB AA HL  ',
      metaDescription:
        'Find the area between a curve and the y-axis in IB Maths AA HL by integrating with respect to y between two horizontal lines.',
      title: 'IB Maths AA HL Area Between a Curve and the y-axis',
      description:
        'The area between a curve and the y-axis is found by integrating x with respect to y between the given y-values.',
      questionTitle: 'Area between a curve and the y-axis: Questions & Answers',
      questionDescription:
        'Rearrange to make x the subject, integrate with respect to y between the limits, and give the exact area. Questions follow syllabus section AHL 5.17. Every question comes with the mark scheme working.',
    },

    'volume-of-revolution-about-x-axis': {
      metaTitle: 'Volume of Revolution Questions | IB Maths AA HL  ',
      metaDescription:
        'Volume of revolution in IB Maths AA HL: about the x-axis and y-axis, between curves, about other lines and with unknown limits.',
      title: 'IB Maths AA HL Volume of Revolution',
      description:
        'A volume of revolution comes from rotating a region around an axis: V = π∫y² dx about the x-axis or π∫x² dy about the y-axis.',
      questionTitle: 'Volume of revolution about x-axis: Questions & Answers',
      questionDescription:
        'Choose the right axis, square the function, use the correct limits, and subtract inner volumes for regions between two curves. Questions follow syllabus section AHL 5.17. Every question comes with the mark scheme working.',
    },

    'area-and-volume-combined': {
      metaTitle: 'Area and Volume of Revolution | IB Maths AA HL  ',
      metaDescription:
        "Area and volume of revolution in IB Maths AA HL: find a region's area, then the volume when it is rotated, in multi-part questions.",
      title: 'IB Maths AA HL Area and Volume Combined',
      description:
        'These questions find the area and volume of revolution for the same region, so the limits found in one part are used in the next.',
      questionTitle: 'Area and volume combined: Questions & Answers',
      questionDescription:
        'Find the intersections first, integrate for the area, then square and integrate for the volume of revolution. Questions follow syllabus section AHL 5.17. Every question comes with the mark scheme working.',
    },

    'volume-of-revolution-derivation-of-cone-formula': {
      metaTitle: 'Volume of a Cone Using Integration | IB AA HL  ',
      metaDescription:
        'Derive the volume of a cone using integration in IB Maths AA HL by rotating a straight line about the x-axis.',
      title: 'IB Maths AA HL Volume of Revolution: Derivation of the Cone Formula',
      description:
        'The volume of a cone using integration comes from rotating a straight line through the origin about the x-axis.',
      questionTitle: 'Volume of revolution – derivation of cone formula: Questions & Answers',
      questionDescription:
        "Find the line's equation, square it, integrate from 0 to h, and simplify to ⅓πr²h. Questions follow syllabus section AHL 5.17. Every question comes with the mark scheme working.",
    },

    'volume-of-revolution-derivation-of-sphere-formula': {
      metaTitle: 'Volume of a Sphere Using Integration | IB AA HL  ',
      metaDescription:
        'Derive the volume of a sphere using integration in IB Maths AA HL by rotating a semicircle about the x-axis.',
      title: 'IB Maths AA HL Volume of Revolution: Derivation of the Sphere Formula',
      description:
        'The volume of a sphere using integration comes from rotating the semicircle y = √(r² − x²) about the x-axis.',
      questionTitle: 'Volume of revolution – derivation of sphere formula: Questions & Answers',
      questionDescription:
        "Square the semicircle's equation, integrate from −r to r, and simplify to ⁴⁄₃πr³. Questions follow syllabus section AHL 5.17. Every question comes with the mark scheme working.",
    },

    'ratio-of-areas-invariance': {
      metaTitle: 'Ratio of Areas with Integration | IB AA HL  ',
      metaDescription:
        'Ratio of areas integration in IB Maths AA HL: show the split of the area under y = x³ stays the same for every upper limit.',
      title: 'IB Maths AA HL Ratio of Areas: Invariance',
      description:
        'This ratio of areas integration question shows that two regions under y = x³ always split in the same proportion.',
      questionTitle: 'Ratio of areas – invariance: Questions & Answers',
      questionDescription:
        'Find each area in terms of the limit, form the ratio, and simplify to show it does not depend on that limit. Questions follow syllabus section AHL 5.17. Every question comes with the mark scheme working.',
    },
  },

  // 26. Series & Differential Equations
  'series-differential-equations': {
    'maclaurin-series-recurrence-relations': {
      metaTitle: 'Maclaurin Series Differential Equations | AA HL  ',
      metaDescription:
        'Maclaurin series differential equation solutions in IB Maths AA HL: first terms, recurrence relations, proofs and estimates.',
      title: 'IB Maths AA HL Maclaurin Series Solutions of Differential Equations',
      description:
        'A Maclaurin series differential equation question builds the solution term by term from the equation and its initial conditions.',
      questionTitle: 'Maclaurin Series – Recurrence Relations: Questions & Answers',
      questionDescription:
        'Differentiate the equation repeatedly, substitute x = 0 to find each derivative, and write the series; for recurrences, compare coefficients. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },

    'maclaurin-series-airy-type-ode': {
      metaTitle: 'Airy Equation: Maclaurin Series | IB AA HL  ',
      metaDescription:
        'Find the first non-zero terms of the Maclaurin series solution to the Airy equation y″ + xy = 0 in IB Maths AA HL.',
      title: 'IB Maths AA HL Maclaurin Series: Airy-type Equation',
      description:
        'The Airy equation, y″ + xy = 0, has a variable coefficient, so a Maclaurin series is the natural way to approximate its solution.',
      questionTitle: 'Maclaurin Series – Airy-type ODE: Questions & Answers',
      questionDescription:
        'Use the initial conditions for y(0) and y′(0), differentiate the equation to find higher derivatives at 0, and build the series. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },

    'maclaurin-series-variable-coefficient-ode': {
      metaTitle: 'Power Series Solutions | IB Maths AA HL  ',
      metaDescription:
        'Find power series solutions to differential equations with variable coefficients in IB Maths AA HL, including the general solution.',
      title: 'IB Maths AA HL Maclaurin Series: Variable Coefficients',
      description:
        'Power series solutions of equations with variable coefficients assume y = Σ aₙxⁿ and finds the coefficients.',
      questionTitle: 'Maclaurin Series – Variable Coefficient ODE: Questions & Answers',
      questionDescription:
        'Substitute the series, collect powers of x, set each coefficient to zero to get a recurrence, and use any initial conditions. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },

    'legendre-differential-equation': {
      metaTitle: 'Legendre Differential Equation | IB Maths AA HL  ',
      metaDescription:
        'Use a series solution for the Legendre differential equation in IB Maths AA HL and find polynomial solutions for integer l.',
      title: 'IB Maths AA HL Legendre Differential Equation',
      description:
        'The Legendre differential equation has polynomial solutions when l is a whole number. A series solution shows why.',
      questionTitle: 'Legendre Differential Equation: Questions & Answers',
      questionDescription:
        'Substitute a power series, find the recurrence for the coefficients, and show it terminates for integer l. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },

    'hermite-polynomial-differential-equation': {
      metaTitle: 'Hermite Differential Equation | IB Maths AA HL  ',
      metaDescription:
        'Solve the Hermite polynomial differential equation in IB Maths AA HL with a series and find when the solution is a polynomial.',
      title: 'IB Maths AA HL Hermite Polynomial Differential Equation',
      description:
        'The Hermite polynomial differential equation gives polynomial solutions for whole-number k.',
      questionTitle: 'Hermite Polynomial Differential Equation: Questions & Answers',
      questionDescription:
        'Assume a power series, derive the recurrence relation, and identify when the series stops. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },

    'chebyshev-differential-equation': {
      metaTitle: 'Chebyshev Differential Equation | IB AA HL  ',
      metaDescription:
        'Solve the Chebyshev differential equation in IB Maths AA HL using a series solution and its recurrence relation.',
      title: 'IB Maths AA HL Chebyshev Differential Equation',
      description:
        'The Chebyshev differential equation is another case where a series solution reveals polynomial answers.',
      questionTitle: 'Chebyshev Differential Equation: Questions & Answers',
      questionDescription:
        'Substitute the series, find the recurrence for the coefficients, and use it to write the first terms. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
    },

    'maclaurin-series-non-existence-frobenius-method': {
      metaTitle: 'Frobenius Method | IB Maths AA HL  ',
      metaDescription:
        'Use the Frobenius method in IB Maths AA HL when a Maclaurin series solution does not exist, and find the general solution.',
      title: 'IB Maths AA HL Frobenius Method',
      description:
        'Some differential equations have no Maclaurin series solution. The Frobenius method allows a power of x in front of the series.',
      questionTitle: 'Maclaurin Series – Non-existence / Frobenius Method: Questions & Answers',
      questionDescription:
        'Show the Maclaurin approach fails, then substitute y = xᵐ Σ aₙxⁿ, find the indicial equation for m, and build each solution. Questions follow syllabus section AHL 5.19. Every question comes with the mark scheme working.',
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
  let pageData: any = AAHLQuestionAndAnswer?.find((item: any, index: any) => item?.[topicSlug])

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
