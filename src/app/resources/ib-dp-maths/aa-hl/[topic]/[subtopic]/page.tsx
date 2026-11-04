import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findSubtopic, topics } from '../../../../../../data/aa-hl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { AAHLQuestionAndAnswer } from '../../../../../../data/aa-hl'
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

//     // New in the HL brief — slug suggested; no matching entry in topics yet
//     combinations: {
//       metaTitle: 'Combinations Questions | IB Maths AA HL',
//       metaDescription:
//         'IB Maths AA HL combinations questions: count selections where order does not matter, using nCr, and tell combinations apart from permutations.',
//       title: 'IB Maths AA HL Combinations Questions',
//       description:
//         'Combinations questions on counting selections where order does not matter. Use nCr and decide when a problem calls for combinations rather than permutations.',
//     },

//     // New in the HL brief — slug suggested; no matching entry in topics yet
//     'counting-with-restrictions': {
//       metaTitle: 'Permutation and Combination Questions with Restrictions',
//       metaDescription:
//         'IB Maths AA HL permutation and combination questions with restrictions: objects together or apart, fixed positions and cases.',
//       title: 'IB Maths AA HL Counting Questions with Restrictions',
//       description:
//         'Permutation and combination questions with restrictions, such as objects kept together or apart, fixed positions, and cases that must be counted separately.',
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

    'cross-Pproduct-scalar-triple-product': {
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
