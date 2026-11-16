import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findSubtopic, topics } from '../../../../../../data/ai-hl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { AIHLQuestionAndAnswer } from '../../../../../../data/ai-hl'
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
export const metaData: any = {
  'logarithms-and-exponentials': {
    'solving-log-equations': {
      metaTitle: 'How to Solve Log Equations: log x = k → x = 10ᵏ | AI HL',
      metaDescription:
        'If log₁₀ x = k then x = 10ᵏ. Rewrite each log equation in exponential form, solve and check every answer. IB Maths AI HL practice with answers.',
      title: 'IB Maths AI HL 1.9 Solving Log Equations (Base 10)',
      description:
        'Solving logarithmic equations in base 10 rests on one definition: if log₁₀ x = k, then x = 10ᵏ. These questions apply it to equations of increasing difficulty.',
    },
    'laws-of-logarithms-expressing-in-terms-of-p-and-q': {
      metaTitle: 'Log Laws: Write Logs in Terms of p and q | IB AI HL',
      metaDescription:
        'Given log a = p and log b = q, use the product, quotient and power laws to rewrite logs like log(a²/b). IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL 1.9 Laws of Logarithms: Expressing in Terms of p and q',
      description:
        'These questions give you log a = p and log b = q, then ask you to rewrite other logarithms using them. Each one is a direct test of the log rules.',
    },
    'solving-equations-using-log-laws': {
      metaTitle: 'Solve Equations with Log Laws: Combine First | IB AI HL',
      metaDescription:
        'Combine several logs into one with the log laws, remove the log, then reject answers outside the domain. IB Maths AI HL log equations with answers.',
      title: 'IB Maths AI HL 1.9 Solving Equations Using Log Laws',
      description:
        'When an equation has more than one logarithm, the laws of logarithms combine them into one. These questions practise combining, solving and checking.',
    },
    'solving-exponential-equations-using-logarithms': {
      metaTitle: 'Solve Exponential Equations with Logs: Examples | IB AI HL',
      metaDescription:
        'Unknown in the power? Take logs of both sides, bring the power down and solve exactly or on a GDC. IB Maths AI HL exponential equations with answers.',
      title: 'IB Maths AI HL 1.9 Solving Exponential Equations Using Logarithms',
      description:
        'When the unknown sits in the power, logarithms bring it down. These exponential equations questions practise taking logs of both sides and solving exactly or with a GDC.',
    },
    'solving-equations-with-non-standard-bases': {
      metaTitle: 'Change of Base Formula: logₐx = log x ÷ log a | IB AI HL',
      metaDescription:
        'Your calculator only has base 10 and e. Use the change of base formula to evaluate and solve logs in any base. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL 1.9 Solving Equations with Non-Standard Bases',
      description:
        'A calculator works in base 10 and base e, so other bases need the change of base formula: logₐ x = log x ÷ log a. These questions use it to evaluate and solve.',
    },
  },
  matrices: {
    'matrix-addition-and-subtraction': {
      metaTitle: 'Adding & Subtracting Matrices: Rules | IB Maths AI HL',
      metaDescription:
        'Same order only: add or subtract element by element, then use it to find unknown entries. IB Maths AI HL matrix addition practice with answers.',
      title: 'IB Maths AI HL 1.14 Matrix Addition & Subtraction Questions',
      description:
        'Matrices of the same order are added and subtracted element by element. These matrices questions practise the operation and use it to find unknown entries.',
    },
    'matrix-multiplication': {
      metaTitle: 'Matrix Multiplication: Rows × Columns | IB Maths AI HL',
      metaDescription:
        'Check the orders match, multiply rows by columns, and see why AB ≠ BA in general. IB Maths AI HL matrix multiplication questions with answers.',
      title: 'IB Maths AI HL 1.14 Matrix Multiplication Questions',
      description:
        'Matrix multiplication combines rows of the first matrix with columns of the second, so order matters. These matrix multiplication questions practise the method by hand and with a GDC.',
    },
    'matrix-equations': {
      metaTitle: 'Solve Simultaneous Equations with Matrices: AX = B | AI HL',
      metaDescription:
        'Write the system as AX = B, then X = A⁻¹B on your GDC. IB Maths AI HL questions on solving systems of equations using matrices, with answers.',
      title: 'IB Maths AI HL 1.14 Matrix Equations Questions',
      description:
        'Any set of simultaneous linear equations can be written as one matrix equation, AX = B. These questions practise solving systems of equations using matrices.',
    },
    'inverse-of-3x3-Matrix': {
      metaTitle: 'Inverse of a 3×3 Matrix on a GDC | IB Maths AI HL',
      metaDescription:
        'Check det ≠ 0, find the 3×3 inverse with technology and use it to solve AX = B. IB Maths AI HL inverse matrix questions with answers.',
      title: 'IB Maths AI HL 1.14 Inverse of a 3×3 Matrix Questions',
      description:
        'The inverse of a matrix undoes it, and exists only when the determinant is non-zero. These questions find the inverse of 3×3 matrices with a GDC and apply it.',
    },
    'inverse-of-2x2-matrix': {
      metaTitle: 'Inverse of a 2×2 Matrix: Swap & Negate Formula | AI HL',
      metaDescription:
        'A⁻¹ = (1/(ad − bc)) × [d −b; −c a]: swap a and d, negate b and c, divide by the determinant. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL 1.14 Inverse of a 2×2 Matrix Questions',
      description:
        'A 2×2 inverse can be found by hand in one line. These inverse matrix questions practise the formula and the determinant check that comes before it.',
    },
  },
  'graph-theory': {
    'adjacency-matrices': {
      metaTitle: 'Adjacency Matrix: Build & Read It | IB Maths AI HL',
      metaDescription:
        'Turn a graph into an adjacency matrix and read degrees, loops and connections back from it. IB Maths AI HL adjacency matrix questions with answers.',
      title: 'IB Maths AI HL 3.15 Adjacency Matrix Questions',
      description:
        'An adjacency matrix records every connection in a graph as a number. These questions build the adjacency matrix from a graph and read information back from it.',
    },
    'kruskals-algorithm': {
      metaTitle: "Kruskal's Algorithm: Step-by-Step Example | IB AI HL",
      metaDescription:
        "Sort the edges, add the shortest that doesn't form a cycle, repeat until every vertex is joined. IB Maths AI HL Kruskal's algorithm questions with answers.",
      title: "IB Maths AI HL 3.16 Kruskal's Algorithm Questions",
      description:
        "Kruskal's algorithm builds a minimum spanning tree by adding the shortest available edge each time, as long as it does not form a cycle.",
    },
    'prims-algorithm': {
      metaTitle: "Prim's Algorithm on Graphs & Distance Tables | IB AI HL",
      metaDescription:
        "Start at one vertex and keep adding the nearest unconnected vertex, on a graph or a table. IB Maths AI HL Prim's algorithm questions with answers.",
      title: "IB Maths AI HL 3.16 Prim's Algorithm Questions",
      description:
        "Prim's algorithm grows a minimum spanning tree from a single vertex, adding the nearest unconnected vertex each time. It works on both graphs and distance tables.",
    },
    'minimum-spanning-trees': {
      metaTitle: 'Minimum Spanning Tree: Find It & Its Weight | IB AI HL',
      metaDescription:
        'Connect every vertex at the lowest total weight, state the weight, and explain it in context. IB Maths AI HL minimum spanning tree questions with answers.',
      title: 'IB Maths AI HL 3.16 Minimum Spanning Tree Questions',
      description:
        'A minimum spanning tree connects every vertex at the lowest total weight. These minimum spanning tree questions ask you to find it, state its weight and explain what it means.',
    },
    'travelling-salesman-problem-nearest-neighbour-algorithm': {
      metaTitle: 'Travelling Salesman: Nearest Neighbour Upper Bound | AI HL',
      metaDescription:
        'Always visit the nearest unvisited vertex, then return to the start: that tour gives an upper bound. IB Maths AI HL TSP questions with answers.',
      title: 'IB Maths AI HL 3.16 Travelling Salesman Problem: Nearest Neighbour',
      description:
        'The travelling salesman problem asks for the shortest route that visits every vertex and returns to the start. The nearest neighbour algorithm gives an upper bound for it.',
    },
  },
  'statistics-and-probability': {
    'coefficient-of-determination-r2': {
      metaTitle: 'Coefficient of Determination R² | IB AI HL ',
      metaDescription:
        'The coefficient of determination R² in IB Maths AI HL: measure how well a model fits the data and compare regression models.',
      title: 'IB Maths AI HL 4.13 Coefficient of Determination R² Questions',
      description:
        'The coefficient of determination, R², measures how much of the variation in the data a model explains. These questions find it on a GDC and use it to compare models.',
    },
    'confidence-intervals-unknown-variance-t-distribution': {
      metaTitle: 'Confidence Interval with Unknown Variance: t-Dist | AI HL',
      metaDescription:
        "σ unknown? Use the sample's sₙ₋₁ and the t-distribution to build a confidence interval for the mean. IB Maths AI HL questions with answers.",
      title: 'IB Maths AI HL 4.16 Confidence Intervals: Unknown Variance (t-Distribution)',
      description:
        "When the population variance is unknown, a confidence interval uses the t-distribution and the sample's unbiased estimate of variance. These questions build a confidence interval for the mean.",
    },
    'confidence-intervals-known-variance-z-distribution': {
      metaTitle: 'Confidence Interval Formula: x̄ ± z × σ/√n | IB AI HL',
      metaDescription:
        'With σ known, build the interval x̄ ± z × σ/√n and interpret its width. IB Maths AI HL z confidence interval questions with answers.',
      title: 'IB Maths AI HL 4.16 Confidence Intervals: Known Variance (z-Distribution)',
      description:
        'With a known population variance, the confidence interval formula is x̄ ± z × σ/√n. These questions apply it and interpret the width of the interval.',
    },
    'poisson-probability-calculations': {
      metaTitle: 'Poisson Distribution Probability on a GDC | IB AI HL',
      metaDescription:
        'Exact P(X = x) with poissonpdf and cumulative P(X ≤ x) with poissoncdf, for events at a constant rate. IB Maths AI HL Poisson questions with answers.',
      title: 'IB Maths AI HL 4.17 Poisson Probability Questions',
      description:
        'The Poisson distribution models how many times an event happens in a fixed interval. These Poisson distribution questions find exact and cumulative probabilities on a GDC.',
    },
    'poisson-mean-and-variance': {
      metaTitle: 'Poisson Mean = Variance = λ: Test the Model | IB AI HL',
      metaDescription:
        'P(X = x) = e^(−λ)λˣ/x!, and E(X) = Var(X) = λ. Compare mean and variance to decide if a Poisson model fits. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL 4.17 Poisson Mean and Variance Questions',
      description:
        'The Poisson distribution formula, P(X = x) = e⁻λ λˣ ÷ x!, has one parameter, and both the mean and the variance equal λ. These questions use that property to test whether a Poisson model fits.',
    },
  },
  'statistical-hypothesis-testing': {
    'one-sample-z-test-t-test': {
      metaTitle: 'Hypothesis Testing: z and t Tests | IB AI HL ',
      metaDescription:
        'Hypothesis testing for a population mean in IB Maths AI HL: choose a z-test or t-test, find the p-value and conclude in context.',
      title: 'IB Maths AI HL 4.18 Hypothesis Testing: One-Sample z-Test and t-Test',
      description:
        'Hypothesis testing for a mean starts with one choice: a z-test when the population standard deviation is known, a t-test when it is not. These questions practise both.',
    },
    'one-sample-t-test': {
      metaTitle: 'Hypothesis Testing Questions | IB AI HL ',
      metaDescription:
        'Hypothesis testing questions for IB Maths AI HL using the one-sample t-test when the population variance is unknown, with mark scheme working.',
      title: 'IB Maths AI HL 4.18 One-Sample t-Test Questions',
      description:
        'These hypothesis testing questions use the one-sample t-test, the standard choice when the population variance must be estimated from the sample.',
    },
    'critical-region-one-sample-z-test': {
      metaTitle: 'Critical Region for a z-Test: Find the Boundary | AI HL',
      metaDescription:
        'Use inverse normal at the significance level to find the critical value, then decide whether to reject H₀. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL 4.18 Critical Region Questions (One-Sample z-Test)',
      description:
        'The critical region in hypothesis testing is the set of values that lead you to reject H₀. These questions find its boundary for a one-sample z-test.',
    },
    'one-sample-z-test-known-sigma': {
      metaTitle: 'One-Sample z-Test with Known σ: p-Value | IB AI HL',
      metaDescription:
        'State H₀ and H₁, get the p-value on your GDC, compare with the significance level and conclude in context. IB Maths AI HL z-test with answers.',
      title: 'IB Maths AI HL 4.18 One-Sample z-Test Questions (Known σ)',
      description:
        'When σ is known, the one-sample z-test gives a p-value directly. These p-value hypothesis testing questions practise reading it correctly and concluding in context.',
    },
    'type-i-and-type-ii-error-normal-distribution': {
      metaTitle: 'Type I vs Type II Error: Probabilities | IB Maths AI HL',
      metaDescription:
        'Type I: reject a true H₀. Type II: accept a false H₀. Define each and calculate its probability with the normal distribution. IB AI HL, with answers.',
      title: 'IB Maths AI HL 4.18 Type I and Type II Error Questions',
      description:
        'A type 1 error rejects a true null hypothesis; a type 2 error fails to reject a false one. These questions define type 1 and type 2 errors and calculate their probabilities.',
    },
  },
  'indices-surds': {
    'evaluating-fractional-indices-unit-fractions': {
      metaTitle: 'Fractional Indices: a^(1/n) = nth Root | IB Maths AI HL',
      metaDescription:
        '8^(1/3) = 2 and 81^(1/4) = 3: a unit fraction power is a root. Evaluate without a calculator. IB Maths AI HL fractional indices with answers.',
      title: 'IB Maths AI HL Evaluating Fractional Indices (Unit Fractions)',
      description:
        'Evaluating fractional indices with a unit fraction means taking a root: a^(1/n) is the nth root of a.',
    },
    'evaluating-rational-negative-indices': {
      metaTitle: 'Rational & Negative Indices: Root, Power, Flip | IB AI HL',
      metaDescription:
        'The denominator is the root, the numerator the power, a minus sign the reciprocal. Find exact values without a calculator. IB Maths AI HL, with answers.',
      title: 'IB Maths AI HL Evaluating Rational and Negative Indices',
      description:
        'Evaluating rational indices takes two steps: the denominator gives a root and the numerator gives a power.',
    },
    'simplifying-expressions-with-indices-and-surds': {
      metaTitle: 'Write x²√x as a Single Power: x^(5/2) | IB Maths AI HL',
      metaDescription:
        'Turn every root into a fractional power and add the indices to reach the form axᵖ. IB Maths AI HL indices and surds questions with answers.',
      title: 'IB Maths AI HL Simplifying Expressions with Indices and Surds',
      description:
        'These fractional indices questions turn expressions with roots into a single power of x.',
    },
    'simplifying-mixed-surd-index-expressions': {
      metaTitle: 'Write 3/∛x + 2√x as axᵖ + bxᵠ | IB Maths AI HL',
      metaDescription:
        'Convert each term separately: roots become fractional powers, 1/x becomes a negative power. IB Maths AI HL surd and index questions with answers.',
      title: 'IB Maths AI HL Simplifying Mixed Surd and Index Expressions',
      description: 'Simplifying surds and indices in a sum means converting each term separately.',
    },
    'solving-equations-with-rational-indices': {
      metaTitle: 'Solve x^(3/2) = 1/8 with the Reciprocal Index | IB AI HL',
      metaDescription:
        'Raise both sides to the reciprocal power, 2/3, to undo the index. IB Maths AI HL equations with rational indices, with answers.',
      title: 'IB Maths AI HL Solving Equations with Rational Indices',
      description:
        'Solving equations with rational indices uses the reciprocal power to undo the index.',
    },
    'composite-index-expressions': {
      metaTitle: 'Powers of Powers: y = 2∛(x²), Find y⁴ | IB Maths AI HL',
      metaDescription:
        'Write the root as a fractional power, then raise to the new power by multiplying indices. IB Maths AI HL composite index questions with answers.',
      title: 'IB Maths AI HL Composite Index Expressions',
      description:
        'Composite index expressions raise an expression that already has a power to another power.',
    },
    'solving-exponential-equations-using-index-laws': {
      metaTitle: 'Solve (√3)ˣ = 9ˣ⁻¹ by Matching Bases | IB Maths AI HL',
      metaDescription:
        'Write both sides as powers of 3, set the indices equal and solve. No logs needed. IB Maths AI HL exponential equations with answers.',
      title: 'IB Maths AI HL Solving Exponential Equations Using Index Laws',
      description:
        'Solving exponential equations using index laws means writing both sides as powers of the same base.',
    },
  },
  'sequences-series': {
    'infinite-geometric-series-sum-to-infinity': {
      metaTitle: 'Sum to Infinity: S∞ = u₁ ÷ (1 − r) | IB Maths AI HL',
      metaDescription:
        'Works only when |r| < 1. Find the sum of an infinite geometric series in one step. IB Maths AI HL sum to infinity questions with answers.',
      title: 'IB Maths AI HL Infinite Geometric Series: Sum to Infinity',
      description: 'The sum to infinity formula, S∞ = u₁ ÷ (1 − r), works only when |r| < 1.',
    },
    'convergence-of-infinite-geometric-series': {
      metaTitle: 'When Does a Geometric Series Converge? |r| < 1 | IB AI HL',
      metaDescription:
        'Write r in terms of x and solve −1 < r < 1 for the values that make the series converge. IB Maths AI HL convergence questions with answers.',
      title: 'IB Maths AI HL Convergence of Infinite Geometric Series',
      description:
        'The convergence of geometric series depends only on the common ratio: the series converges when |r| < 1.',
    },
    'infinite-geometric-series-finding-unknown': {
      metaTitle: 'Find u₁ or r from the Sum to Infinity | IB Maths AI HL',
      metaDescription:
        'Rearrange S∞ = u₁ ÷ (1 − r) to find the missing first term or ratio, rejecting |r| ≥ 1. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Infinite Geometric Series: Finding Unknowns',
      description:
        'The infinite geometric series formula links three values: the first term, the ratio and the sum to infinity.',
    },
    'sigma-notation-infinite-series': {
      metaTitle: 'Infinite Series in Sigma Notation: Find the Sum | AI HL',
      metaDescription:
        'Read u₁ and r from the Σ, check |r| < 1, sum it, then solve for x. IB Maths AI HL sigma notation infinite series questions with answers.',
      title: 'IB Maths AI HL Sigma Notation and Infinite Series',
      description:
        'Sigma notation infinite series questions hide a geometric series inside the ∑ symbol.',
    },
    'convergence-sum-to-infinity': {
      metaTitle: 'Range of x for Convergence + Sum in x | IB Maths AI HL',
      metaDescription:
        'Two answers needed: the interval of x where |r| < 1, and S∞ written in terms of x. IB Maths AI HL convergence questions with answers.',
      title: 'IB Maths AI HL Convergence and Sum to Infinity',
      description:
        'Convergence and sum to infinity questions in x need two answers: the valid range and an expression for the sum.',
    },
    'fractal-geometric-series': {
      metaTitle: 'Fractals as Geometric Series: Square Areas | IB AI HL',
      metaDescription:
        'Each step adds shapes scaled by the same factor, so their areas form a geometric sequence. IB Maths AI HL fractal questions with answers.',
      title: 'IB Maths AI HL Fractals: Geometric Series',
      description:
        'A fractal geometric series appears when each step adds shapes scaled by the same factor.',
    },
    'fractal-total-area': {
      metaTitle: 'Total Area of a Fractal: Sum to Infinity | IB AI HL',
      metaDescription:
        'The steps never end, yet the area is finite: sum the infinite geometric series of added squares. IB Maths AI HL fractal area questions with answers.',
      title: 'IB Maths AI HL Fractals: Total Area',
      description:
        'The total fractal area is finite even though the steps never end, because the series converges.',
    },
  },
  'complex-numbers': {
    'powers-of-i': {
      metaTitle: 'Powers of i: Simplify i⁵, i¹⁰ and Beyond | IB AI HL',
      metaDescription:
        'i, −1, −i, 1 repeats every 4 powers: divide by 4 and use the remainder. IB Maths AI HL powers of i questions with answers.',
      title: 'IB Maths AI HL Powers of i',
      description: 'These powers of i questions rely on one pattern: the powers repeat every four.',
    },
    multiplication: {
      metaTitle: 'Multiplying Complex Numbers: (2 + 3i)(1 − 2i) | IB AI HL',
      metaDescription:
        'Expand like brackets and replace i² with −1, then write a + bi. IB Maths AI HL complex multiplication questions with answers.',
      title: 'IB Maths AI HL Multiplying Complex Numbers',
      description:
        'Multiplying complex numbers works like expanding brackets, with i² replaced by −1.',
    },
    'division-conjugate': {
      metaTitle: 'Dividing Complex Numbers with the Conjugate | IB AI HL',
      metaDescription:
        'Multiply top and bottom by the conjugate of the denominator to make it real, then write x + iy. IB Maths AI HL complex division with answers.',
      title: 'IB Maths AI HL Dividing Complex Numbers',
      description:
        'Dividing complex numbers uses the conjugate of the denominator to make it real.',
    },
    'equating-real-imaginary-parts': {
      metaTitle: 'Equate Real & Imaginary Parts to Find a and b | IB AI HL',
      metaDescription:
        'One complex equation gives two real ones: match the real parts, match the imaginary parts, solve. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Equating Real and Imaginary Parts',
      description:
        'Equating real and imaginary parts turns one complex equation into two real ones.',
    },
    'complex-conjugate-equations': {
      metaTitle: 'Solve Equations with z and z*: z = x + iy Method | IB AI HL',
      metaDescription:
        'Write z = x + iy and z* = x − iy, then equate real and imaginary parts: z + 3i = 2z* + 4. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Complex Conjugate Equations',
      description:
        'Complex conjugate equations contain both z and z*, so write z = x + iy and z* = x − iy.',
    },
    'argand-diagram': {
      metaTitle: 'Argand Diagram: Plot z, −z, z* and Sums | IB Maths AI HL',
      metaDescription:
        'Real part across, imaginary part up: plot complex numbers, conjugates, sums, differences and powers. IB Maths AI HL Argand diagram practice with answers.',
      title: 'IB Maths AI HL Argand Diagram',
      description:
        'An Argand diagram plots complex numbers with the real part across and the imaginary part up.',
    },
    'quadratic-equations-with-complex-roots': {
      metaTitle: 'Quadratics with Complex Roots: x² + 9 = 0 → ±3i | IB AI HL',
      metaDescription:
        'Negative discriminant? The roots are a conjugate pair a ± bi. Solve with the quadratic formula. IB Maths AI HL complex roots questions with answers.',
      title: 'IB Maths AI HL Quadratic Equations with Complex Roots',
      description:
        'Quadratic equations with complex roots have a negative discriminant, and their roots come as a conjugate pair.',
    },
    'algebraic-manipulation': {
      metaTitle: 'Complex Numbers in AC Circuits & Waves | IB Maths AI HL',
      metaDescription:
        'Add waves of the same frequency with complex numbers, plus algebra with z and w and a short proof. IB Maths AI HL applications with answers.',
      title: 'IB Maths AI HL Algebraic Manipulation and Applications',
      description:
        'Applications of complex numbers include adding waves of the same frequency, as in AC circuits.',
    },
    'modulus-argument-geometric-transformations': {
      metaTitle: 'Modulus-Argument Form r cis θ: Convert & Use | IB AI HL',
      metaDescription:
        '|z| is the distance from the origin, arg z the angle. Write z = r cis θ and use it in geometry problems. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Modulus, Argument and Geometric Transformations',
      description:
        "Modulus argument form, r cis θ, shows a complex number's distance from the origin and its angle.",
    },
    'rotation-in-the-complex-plane': {
      metaTitle: 'Rotate in the Complex Plane: Multiply by cis θ | IB AI HL',
      metaDescription:
        'Multiplying by cis θ turns a point through θ about the origin. Rotate a square and rotate about any point. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Rotation in the Complex Plane',
      description:
        'Rotation in the complex plane is multiplication by cis θ, which turns a point through θ about the origin.',
    },
    'equilateral-triangle-in-the-complex-plane': {
      metaTitle: 'Equilateral Triangle Vertices via 2π/3 Rotation | IB AI HL',
      metaDescription:
        'Centred on the origin, the vertices are a rotation of 2π/3 apart: multiply by cis(2π/3). IB Maths AI HL complex plane question with answers.',
      title: 'IB Maths AI HL Equilateral Triangle in the Complex Plane',
      description:
        'An equilateral triangle in the complex plane, centred on the origin, has vertices a rotation of 2π/3 apart.',
    },
    'cartesian-form': {
      metaTitle: 'Polar to Cartesian Form: a = r cos θ, b = r sin θ | AI HL',
      metaDescription:
        'Convert r cis θ to a + bi, including products given in cis form. IB Maths AI HL Cartesian form questions with answers.',
      title: 'IB Maths AI HL Cartesian Form',
      description:
        'Cartesian form, a + bi, comes from r cis θ through a = r cos θ and b = r sin θ.',
    },
    'multiplication-division-in-polar-form': {
      metaTitle: 'Multiply & Divide in Polar Form: Moduli & Arguments | AI HL',
      metaDescription:
        'Multiply: multiply moduli, add arguments. Divide: divide moduli, subtract arguments. IB Maths AI HL polar form questions with answers.',
      title: 'IB Maths AI HL Multiplication and Division in Polar Form',
      description:
        'Multiplication and division in polar form are quick: moduli multiply or divide, and arguments add or subtract.',
    },
    'de-moivres-theorem': {
      metaTitle: "De Moivre's Theorem: (r cis θ)ⁿ = rⁿ cis nθ | IB AI HL",
      metaDescription:
        "Raise complex numbers in polar form to any power in one step, and simplify products. IB Maths AI HL De Moivre's theorem questions with answers.",
      title: "IB Maths AI HL De Moivre's Theorem",
      description:
        "De Moivre's theorem raises a complex number in polar form to a power: (r cis θ)ⁿ = rⁿ cis nθ.",
    },
    'exponential-form': {
      metaTitle: 'Exponential Form re^(iθ): Why iⁱ Is Real | IB Maths AI HL',
      metaDescription:
        'Multiply in exponential form, convert to Cartesian form and show iⁱ = e^(−π/2), a real number. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Exponential Form',
      description:
        'Exponential form writes a complex number as re^(iθ), which makes products and powers simple.',
    },
    'arguments-of-products': {
      metaTitle: 'arg(zw) = arg z + arg w: Products & Quotients | IB AI HL',
      metaDescription:
        'Arguments of products add and of quotients subtract: z = 1 + i, w = 1 + √3i. IB Maths AI HL argument questions with answers.',
      title: 'IB Maths AI HL Arguments of Products',
      description:
        'Arguments of products add: arg(zw) = arg z + arg w. Arguments of quotients subtract.',
    },
    'powers-of-complex-numbers': {
      metaTitle: 'When Is zⁿ Real? Smallest n Using Arguments | IB AI HL',
      metaDescription:
        'zⁿ is real when nθ is a multiple of π, purely imaginary at odd multiples of π/2. Find the smallest n. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Powers of Complex Numbers',
      description:
        'Powers of complex numbers multiply the argument, so zⁿ is real when nθ is a multiple of π.',
    },
    'complex-logarithms': {
      metaTitle: 'Logarithm of a Negative Number: ln(−2) | IB Maths AI HL',
      metaDescription:
        'Write −2 = 2e^(iπ) to suggest ln(−2) = ln 2 + iπ. IB Maths AI HL complex logarithm question with answers.',
      title: 'IB Maths AI HL Complex Logarithms',
      description: 'Complex logarithms extend ln to negative numbers through exponential form.',
    },
  },
  algebra: {
    'matrix-applications-real-world-problems': {
      metaTitle: 'Matrices in Real Life: Solve a Word Problem | IB AI HL',
      metaDescription:
        'A restaurant buys raspberries and strawberries: write the system as a matrix equation and solve. IB Maths AI HL matrix application with answers.',
      title: 'IB Maths AI HL Matrix Applications: Real-World Problems',
      description:
        'Matrices real life applications turn a system of linear equations into one matrix equation.',
    },
    'matrix-applications-investment-problems-33': {
      metaTitle: '3×3 Matrix Word Problem: Investment Split | IB Maths AI HL',
      metaDescription:
        'Three funds, three facts, three equations: set up a 3×3 system and solve with the inverse. IB Maths AI HL matrix word problem with answers.',
      title: 'IB Maths AI HL Matrix Applications: Investment Problems (3 × 3)',
      description:
        'Matrix word problems with three unknowns need three equations, one for each fact given.',
    },
  },
  'matrices-eigenvalues': {
    'eigenvalues-eigenvectors': {
      metaTitle: 'Eigenvalues & Eigenvectors of a 2×2 Matrix | IB Maths AI HL',
      metaDescription:
        'Solve det(M − λI) = 0 for λ, then find each eigenvector: reflections and long-run population models. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Eigenvalues and Eigenvectors',
      description:
        'Eigenvalues and eigenvectors describe the directions a matrix only stretches, and by how much.',
    },
    diagonalisation: {
      metaTitle: 'Diagonalise a 2×2 Matrix: A = PDP⁻¹ | IB Maths AI HL',
      metaDescription:
        'Put eigenvectors in P and eigenvalues on the diagonal of D. IB Maths AI HL diagonalisation questions with answers.',
      title: 'IB Maths AI HL Diagonalisation',
      description:
        'Diagonalisation writes a matrix as PDP⁻¹, with eigenvectors in P and eigenvalues on the diagonal of D.',
    },
    'matrix-powers-via-diagonalisation': {
      metaTitle: 'Matrix Powers: Mⁿ = PDⁿP⁻¹ | IB Maths AI HL',
      metaDescription:
        'Only the diagonal of D gets raised to the power, so Mⁿ is quick. Find images under repeated maps. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Matrix Powers via Diagonalisation',
      description:
        'Matrix powers using diagonalisation are simple, because only the diagonal entries of D are raised to the power.',
    },
    'characteristic-polynomial-eigenvalues': {
      metaTitle: 'Characteristic Polynomial det(M − λI) = 0 | IB AI HL',
      metaDescription:
        'Expand det(M − λI) for a 2×2 matrix, then solve the quadratic for the eigenvalues. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Characteristic Polynomial and Eigenvalues',
      description:
        'The characteristic polynomial, det(M − λI), has the eigenvalues of M as its roots.',
    },
    'constructing-matrices-from-eigenvectors': {
      metaTitle: 'Build a Matrix from Eigenvectors: M = PDP⁻¹ | IB AI HL',
      metaDescription:
        'Given eigenvalues and eigenvectors, form P and D and multiply PDP⁻¹ to get M. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Constructing Matrices from Eigenvectors',
      description:
        'Constructing matrices from eigenvectors reverses diagonalisation: P and D are given, and M is the result.',
    },
  },
  functions: {
    'composite-functions': {
      metaTitle: 'Composite Functions (f ∘ g)(x): g First, Then f | AI HL',
      metaDescription:
        'Find (f ∘ g)(x), its domain, values from tables, and solve composite equations. IB Maths AI HL composite function questions with answers.',
      title: 'IB Maths AI HL Composite Functions',
      description:
        'Composite functions apply one function to the output of another. (f ∘ g)(x) means g first, then f.',
    },
    'domain-range-equations-with-self-composite': {
      metaTitle: 'Self-Composite f ∘ f: Domain, Range & Equations | AI HL',
      metaDescription:
        'Apply f twice: find the domain and range of f ∘ f and solve equations with it. IB Maths AI HL self-composite function questions with answers.',
      title: 'IB Maths AI HL Domain, Range and Equations with Self-Composites',
      description: 'A self composite function, f ∘ f, applies the same function twice.',
    },
    'inverse-functions': {
      metaTitle: 'How to Find an Inverse Function: Examples | IB AI HL',
      metaDescription:
        'Swap x and y, rearrange for y: linear, rational, exponential, log and cubic functions, plus graphs in y = x. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Inverse Functions',
      description:
        'These inverse functions examples cover every function type in the course, from rational to logarithmic.',
    },
    'domain-for-inverse-to-exist': {
      metaTitle: 'Restrict the Domain So an Inverse Exists | IB Maths AI HL',
      metaDescription:
        'An inverse needs a one-to-one function: find the largest domain that passes the horizontal line test. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Domain for an Inverse to Exist',
      description: 'A domain for an inverse to exist must make the function one-to-one.',
    },
    continuity: {
      metaTitle: 'Make a Piecewise Function Continuous: Find a | IB AI HL',
      metaDescription:
        'Set the two pieces equal where they join and solve for the constant, so there is no jump. IB Maths AI HL continuity questions with answers.',
      title: 'IB Maths AI HL Continuity',
      description:
        'A continuous piecewise function has pieces that meet at the same value where they join.',
    },
    'trigonometric-graphs': {
      metaTitle: 'Trig Graphs: Sketch Two Curves & Intersections | IB AI HL',
      metaDescription:
        'Sketch two trig curves on one diagram and find every intersection across the domain. IB Maths AI HL trigonometric graph questions with answers.',
      title: 'IB Maths AI HL Trigonometric Graphs',
      description:
        'Trigonometric graphs repeat, so intersections come in patterns across the domain.',
    },
  },
  'functions-graphs': {
    'graph-transformations-vertical-translation': {
      metaTitle: 'Vertical Translation y = f(x) + k: Sketch & Equation | AI HL',
      metaDescription:
        'Every point moves up by k. Sketch the shifted graph and write the polynomial after the shift. IB Maths AI HL translation questions with answers.',
      title: 'IB Maths AI HL Graph Transformations: Vertical Translation',
      description: 'Vertical translation of graphs uses y = f(x) + k: every point moves up by k.',
    },
    'graph-transformations-horizontal-translation': {
      metaTitle: 'f(x + a) Moves Left, f(bx) Squeezes | IB Maths AI HL',
      metaDescription:
        'Horizontal changes act opposite to the sign: sketch y = f(x + a), y = f(bx) and combine them. IB Maths AI HL transformation questions with answers.',
      title: 'IB Maths AI HL Graph Transformations: Horizontal Translation',
      description:
        'A horizontal translation, y = f(x + a), moves the graph a units left, the opposite of what the sign suggests.',
    },
    'vertical-stretch-of-functions': {
      metaTitle: 'Vertical Stretch y = af(x): Sketch It | IB Maths AI HL',
      metaDescription:
        'Multiply every y-value by a; points on the x-axis stay put. Sketch y = 2f(x) and similar. IB Maths AI HL vertical stretch questions with answers.',
      title: 'IB Maths AI HL Vertical Stretch of Functions',
      description: 'A vertical stretch of functions multiplies every y-value by the same factor.',
    },
    'describing-transformations-from-algebraic-form': {
      metaTitle: 'Describe the Transformation Between Two Graphs | IB AI HL',
      metaDescription:
        'Name the type, direction and size of each transformation that maps one quadratic or cubic onto another. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Describing Transformations from Algebraic Form',
      description:
        'Describing transformations of graphs needs the type, the direction and the size, in the correct order.',
    },
    'reflection-in-x-axis-vertex': {
      metaTitle: 'Reflect in the x- or y-Axis: Where the Vertex Goes | AI HL',
      metaDescription:
        'x-axis: y changes sign. y-axis: x changes sign. Track the vertex under each reflection. IB Maths AI HL reflection questions with answers.',
      title: 'IB Maths AI HL Reflections in the Axes: Vertex',
      description:
        'A reflection in the y axis changes the sign of x; a reflection in the x-axis changes the sign of y.',
    },
    'combined-transformations-sketching': {
      metaTitle: 'Sketch y = f(x − 2) + 3: Combined Transformations | AI HL',
      metaDescription:
        'Apply each change in turn: right 2, up 3. Then find equations and parameters after several maps. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Combined Transformations',
      description:
        'Combined transformations apply two or more changes to the same graph, one after another.',
    },
    'describing-sequence-of-transformations': {
      metaTitle: 'Describe a Sequence of Transformations in Order | IB AI HL',
      metaDescription:
        'Order can change the result: describe each step that maps one quadratic onto another, in sequence. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Describing a Sequence of Transformations',
      description:
        'A sequence of transformations must be given in order, because the order can change the result.',
    },
    'exponential-transformation': {
      metaTitle: 'Transform y = eˣ: New Equation & Asymptote | IB Maths AI HL',
      metaDescription:
        'Translations and stretches move the asymptote too. Transform y = eˣ and write the new equation. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Exponential Functions: Transformations',
      description:
        'Transformations of exponential functions move the asymptote as well as the curve.',
    },
    'completing-the-square-transformations': {
      metaTitle: 'Complete the Square to Describe Transformations | IB AI HL',
      metaDescription:
        'x² − 10x + 11 = (x − 5)² − 14: a translation right 5 and down 14 from y = x². IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Completing the Square and Transformations',
      description:
        'Completing the square and transformations go together: (x − h)² + k shows the translation from y = x².',
    },
    'vertical-vs-horizontal-stretch-equivalence': {
      metaTitle: 'When a Vertical Stretch = a Horizontal Stretch | IB AI HL',
      metaDescription:
        'y = 9x² is a vertical stretch by 9 and a horizontal stretch by 1/3 of y = x². See why power functions allow both. IB Maths AI HL, with answers.',
      title: 'IB Maths AI HL Vertical and Horizontal Stretch Equivalence',
      description: 'A vertical and horizontal stretch can give the same graph for power functions.',
    },
    'successive-reflections': {
      metaTitle: 'Reflect in Both Axes: Half-Turn About the Origin | AI HL',
      metaDescription:
        'Reflect y = 2x³ − 5x² in the x-axis, then the y-axis, and find the new equation. IB Maths AI HL successive reflection questions with answers.',
      title: 'IB Maths AI HL Successive Reflections',
      description: 'Successive reflections in both axes give a half-turn about the origin.',
    },
    'transformations-of-square-root-functions': {
      metaTitle: 'Map y = √x onto y = √(2x − 1): Transformations | IB AI HL',
      metaDescription:
        'A stretch and a translation hide inside the root: describe both in the right order. IB Maths AI HL square root transformation questions with answers.',
      title: 'IB Maths AI HL Transformations of Square Root Functions',
      description:
        'Transformations of square root functions often hide a stretch and a translation inside the root.',
    },
    'order-of-transformations-stretch-then-translate-vs-translate-then-stretch': {
      metaTitle: 'Stretch Then Translate vs Translate Then Stretch | IB AI HL',
      metaDescription:
        'In the same direction, order matters: compare the two results algebraically and on the graph. IB Maths AI HL order of transformations with answers.',
      title: 'IB Maths AI HL Order of Transformations',
      description:
        'The order of transformations matters when a stretch and a translation act in the same direction.',
    },
    'stretch-away-from-invariant-line': {
      metaTitle: 'Stretch from an Invariant Line: Sketch & Fixed Lines | AI HL',
      metaDescription:
        'The invariant line stays fixed while everything else moves away. Find the lines y = mx a map keeps. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Stretch Away from an Invariant Line',
      description:
        'In a stretch from an invariant line, that line stays fixed and every other point moves away from it.',
    },
  },
  'mathematical-models': {
    'logarithmic-models': {
      metaTitle: 'Logarithmic Model y = a + b ln x from Two Points | IB AI HL',
      metaDescription:
        'Substitute two points, solve for a and b, and see why log models grow fast then slowly. IB Maths AI HL logarithmic model questions with answers.',
      title: 'IB Maths AI HL Logarithmic Models',
      description: 'Logarithmic models grow quickly at first, then more slowly, without a limit.',
    },
    'sinusoidal-models': {
      metaTitle: 'Sinusoidal Model: Amplitude, Period, Central Line | IB AI HL',
      metaDescription:
        'Build y = a sin(b(x − c)) + d from amplitude, central line, period and a known maximum: tides and temperatures. IB Maths AI HL, with answers.',
      title: 'IB Maths AI HL Sinusoidal Models',
      description: 'Sinusoidal models describe repeating patterns such as tides and temperatures.',
    },
    'logistic-models': {
      metaTitle: 'Logistic Growth Model: Carrying Capacity | IB Maths AI HL',
      metaDescription:
        'Near-exponential growth that levels off at the carrying capacity: form the model and use it for rabbits on an island. IB AI HL, with answers.',
      title: 'IB Maths AI HL Logistic Models',
      description:
        'Logistic models grow almost exponentially at first, then level off at the carrying capacity.',
    },
    'exponential-cooling': {
      metaTitle: 'Exponential Cooling & Heating Models | IB Maths AI HL',
      metaDescription:
        'Temperature approaches room temperature exponentially: model ice cream, cakes and worm populations. IB Maths AI HL growth and decay with answers.',
      title: 'IB Maths AI HL Exponential Cooling and Heating',
      description:
        'Exponential growth and decay models of temperature approach the surrounding temperature over time.',
    },
    'modelling-assumptions': {
      metaTitle: "What Are a Model's Assumptions? Cooling Example | AI HL",
      metaDescription:
        'State what the model treats as fixed, like room temperature, and explain when that fails. IB Maths AI HL modelling assumptions with answers.',
      title: 'IB Maths AI HL Modelling Assumptions',
      description:
        'Model assumptions are what a model takes as fixed, such as a constant room temperature.',
    },
    'piecewise-models': {
      metaTitle: 'Piecewise Models: Water in a Bucket | IB Maths AI HL',
      metaDescription:
        'A different rule for each time interval, joined where the situation changes. IB Maths AI HL piecewise model questions with answers.',
      title: 'IB Maths AI HL Piecewise Models',
      description:
        'Piecewise models use a different function for each interval, joined where the situation changes.',
    },
    'model-limitations': {
      metaTitle: 'Limitations of a Model: Exponential Decay of Tigers | AI HL',
      metaDescription:
        'When a model predicts part of a tiger, it has broken down. Explain the limits clearly. IB Maths AI HL model limitations question with answers.',
      title: 'IB Maths AI HL Model Limitations',
      description:
        'Model limitations become clear when a model gives impossible values, such as part of a tiger.',
    },
  },
  linearisation: {
    'power-functions-log-log': {
      metaTitle: 'Linearise y = axᵇ with a Log-Log Graph | IB Maths AI HL',
      metaDescription:
        'log y = log a + b log x: a straight line with gradient b and intercept log a. IB Maths AI HL log-log graph questions with answers.',
      title: 'IB Maths AI HL Power Functions (Log-Log)',
      description: 'A log log graph turns y = axᵇ into a straight line with gradient b.',
    },
    'exponential-functions-semi-log': {
      metaTitle: 'Linearise y = abˣ with a Semi-Log Graph | IB Maths AI HL',
      metaDescription:
        'Plot ln y against x and an exponential becomes a straight line. Read off the constants. IB Maths AI HL semi-log graph questions with answers.',
      title: 'IB Maths AI HL Exponential Functions (Semi-Log)',
      description:
        'A semi log graph plots ln y against x, so exponential functions become straight lines.',
    },
    'reading-linearised-graphs-log-log': {
      metaTitle: 'Read a Linearised Graph Back to the Model | IB Maths AI HL',
      metaDescription:
        'From a straight log-log or semi-log line, work back to the original power or exponential relationship. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Reading Linearised Graphs',
      description:
        'Reading linearised graphs means working back from a straight line to the original relationship.',
    },
    'choosing-the-appropriate-model': {
      metaTitle: 'Semi-Log or Log-Log? Choose the Right Model | IB AI HL',
      metaDescription:
        'The plot that looks straightest shows the model: exponential (semi-log) or power (log-log). IB Maths AI HL model choice questions with answers.',
      title: 'IB Maths AI HL Choosing the Appropriate Model',
      description:
        'Comparing semi log vs log log plots shows whether data follow an exponential or a power model.',
    },
  },
  'linearisation-regression': {
    'power-model': {
      metaTitle: "Fit a Power Model: Kepler's Law & Magnets | IB Maths AI HL",
      metaDescription:
        "Use log-log regression to fit y = axᵇ to real data: magnets, Kepler's law and Lotka's law. IB Maths AI HL power model questions with answers.",
      title: 'IB Maths AI HL Power Model',
      description:
        'A power model, y = axᵇ, fits data such as planetary orbits, where one quantity grows as a power of another.',
    },
    'model-selection-using-pmcc': {
      metaTitle: "Choose a Model Using PMCC: Zipf's Law | IB Maths AI HL",
      metaDescription:
        'Compare r for each linearised plot to pick the better model: city sizes and words in Treasure Island. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Model Selection Using PMCC',
      description:
        'Model selection using PMCC compares how close each linearised plot is to a straight line.',
    },
    'newtons-law-of-cooling': {
      metaTitle: "Newton's Law of Cooling: Linearise & Regress | IB AI HL",
      metaDescription:
        'Cooling rate ∝ temperature difference: linearise the data and find the constants by regression. IB Maths AI HL questions with answers.',
      title: "IB Maths AI HL Newton's Law of Cooling",
      description:
        "Newton's law of cooling says a body cools at a rate proportional to its difference from the surrounding temperature.",
    },
    'michaelismenten-kinetics-lineweaverburk': {
      metaTitle: 'Lineweaver-Burk Plot: Michaelis-Menten Constants | IB AI HL',
      metaDescription:
        'Take reciprocals of both variables so enzyme data form a straight line, then read off Vmax and Km. IB Maths AI HL question with answers.',
      title: 'IB Maths AI HL Michaelis–Menten Kinetics (Lineweaver–Burk)',
      description:
        'A Lineweaver Burk plot takes reciprocals of both variables so enzyme kinetics data form a straight line.',
    },
  },
  'trigonometry-radians': {
    'degree-radian-conversion': {
      metaTitle: 'Degrees to Radians: 180° = π | IB Maths AI HL',
      metaDescription:
        'Multiply by π/180 for radians and 180/π for degrees, with exact answers in π. IB Maths AI HL degree-radian conversion questions with answers.',
      title: 'IB Maths AI HL Degree-Radian Conversion',
      description: 'Degree radian conversion uses one fact: 180° equals π radians.',
    },
    'unit-circle': {
      metaTitle: 'Unit Circle: Exact sin & cos in Radians | IB Maths AI HL',
      metaDescription:
        'Every point is (cos θ, sin θ): mark radian angles and read exact values. IB Maths AI HL unit circle questions with answers.',
      title: 'IB Maths AI HL Unit Circle',
      description:
        'These unit circle questions use a circle of radius 1, where each point is (cos θ, sin θ).',
    },
    'arc-length-sector-area': {
      metaTitle: 'Arc Length l = rθ & Sector Area ½r²θ | IB Maths AI HL',
      metaDescription:
        'With θ in radians the formulas are simple. Find arcs and sectors, and compare an arc with its chord. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Arc Length and Sector Area',
      description:
        'The arc length and sector area formula in radians is simple: l = rθ and A = ½r²θ.',
    },
    'shaded-region-area-perimeter': {
      metaTitle: 'Shaded Region Area & Perimeter: Sector − Triangle | AI HL',
      metaDescription:
        'Subtract one shape from another and add the right edges for perimeter, angles in radians. IB Maths AI HL shaded region questions with answers.',
      title: 'IB Maths AI HL Shaded Region Area and Perimeter',
      description:
        'A shaded region area is usually one shape minus another, such as a sector minus a triangle.',
    },
    'sector-perimeter-area': {
      metaTitle: 'Sector Perimeter 2r + rθ: Find r or θ | IB Maths AI HL',
      metaDescription:
        'Use the perimeter alone or with the area to find the radius or angle. IB Maths AI HL sector perimeter and area questions with answers.',
      title: 'IB Maths AI HL Sector Perimeter and Area',
      description: 'A sector perimeter is two radii plus the arc: 2r + rθ.',
    },
    'sector-area-finding-angle': {
      metaTitle: "Find a Sector's Angle from Its Area: θ = 2A/r² | IB AI HL",
      metaDescription:
        'Rearrange A = ½r²θ for the angle, or for the radius when θ is known. IB Maths AI HL sector area questions with answers.',
      title: 'IB Maths AI HL Sector Area: Finding the Angle',
      description: 'The angle of a sector comes from rearranging A = ½r²θ.',
    },
    'composite-figures': {
      metaTitle: 'Area of Shapes with Sectors & Semicircles | IB Maths AI HL',
      metaDescription:
        'Split the figure into a rectangle plus a sector or semicircle, then add the areas. IB Maths AI HL composite shape questions with answers.',
      title: 'IB Maths AI HL Composite Figures',
      description:
        'Composite shapes with circles combine straight-sided shapes with sectors or semicircles.',
    },
    'arc-length-equilateral-triangle': {
      metaTitle: 'Reuleaux Triangle: Perimeter from Three Arcs | IB AI HL',
      metaDescription:
        'Three arcs of angle π/3, each centred on a vertex of an equilateral triangle: find the perimeter. IB Maths AI HL question with answers.',
      title: 'IB Maths AI HL Arc Length: Equilateral Triangle',
      description:
        'A Reuleaux triangle is built from three arcs, each centred on a vertex of an equilateral triangle.',
    },
    'shaded-region-segment': {
      metaTitle: 'Area of a Segment: ½r²(θ − sin θ) | IB Maths AI HL',
      metaDescription:
        'Sector minus triangle, with θ in radians, gives the area between an arc and its chord. IB Maths AI HL segment area questions with answers.',
      title: 'IB Maths AI HL Shaded Region: Segment',
      description:
        'The area of a segment is the sector minus the triangle formed by the two radii and the chord.',
    },
    'segment-area-proof-equation-solving': {
      metaTitle: 'Prove the Segment Area Formula, Then Solve for θ | AI HL',
      metaDescription:
        'Subtract the triangle from the sector to prove the formula, then solve for θ on a GDC. IB Maths AI HL proof question with answers.',
      title: 'IB Maths AI HL Segment Area: Proof and Equation Solving',
      description:
        "The segment area formula comes from subtracting the triangle's area from the sector's.",
    },
    'annular-sector-area': {
      metaTitle: 'Annular Sector Area: Big Sector − Small Sector | IB AI HL',
      metaDescription:
        'Same centre, same angle: subtract the smaller sector from the larger, ½θ(R² − r²). IB Maths AI HL annular sector questions with answers.',
      title: 'IB Maths AI HL Annular Sector Area',
      description: 'An annular sector area is the larger sector minus the smaller one.',
    },
    'sector-rolled-into-cone': {
      metaTitle: 'Roll a Sector into a Cone: Find the Volume | IB AI HL',
      metaDescription:
        'The arc becomes the base circumference and the radius becomes the slant height. Find r, h and the volume. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Sector Rolled into a Cone',
      description:
        'When a sector is rolled into a cone, the arc becomes the base circumference and the radius becomes the slant height.',
    },
    'overlapping-circles-shaded-region': {
      metaTitle: 'Overlapping Circles: Area of the Shared Region | IB AI HL',
      metaDescription:
        "Each circle passes through the other's centre, so the angle is 2π/3. Add two segments for the overlap. IB Maths AI HL question with answers.",
      title: 'IB Maths AI HL Overlapping Circles: Shaded Region',
      description:
        "Overlapping circles that pass through each other's centres meet at angles of 2π/3.",
    },
  },
  trigonometry: {
    'sine-rule': {
      metaTitle: 'Sine Rule & the Ambiguous Case | IB Maths AI HL',
      metaDescription:
        'a/sin A = b/sin B: find sides and angles, and spot when two triangles are possible. IB Maths AI HL sine rule questions with answers.',
      title: 'IB Maths AI HL Sine Rule',
      description:
        'The sine rule formula links each side to the sine of its opposite angle: a/sin A = b/sin B.',
    },
    'pythagorean-identity': {
      metaTitle: 'sin²x + cos²x = 1: Find sin x & tan x from cos x | AI HL',
      metaDescription:
        'Use the Pythagorean identity to find one ratio from another, choosing the sign from the quadrant. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Pythagorean Identity',
      description: 'The Pythagorean identity, sin²x + cos²x = 1, finds one ratio from another.',
    },
    'solving-trig-equations-graphically': {
      metaTitle: 'Solve Trig Equations Graphically: All Solutions | IB AI HL',
      metaDescription:
        'Graph both sides of 3 sin x = 0.5 over 0 ≤ x < 3π and read every intersection. IB Maths AI HL trig equation questions with answers.',
      title: 'IB Maths AI HL Solving Trig Equations Graphically',
      description:
        'Solving trig equations graphically shows every solution in the interval at once.',
    },
    'trigonometric-models': {
      metaTitle: 'Tide Model: Max Depth & Safe Times | IB Maths AI HL',
      metaDescription:
        'Use a sinusoidal model of harbour depth to find the maximum and the times it is safe to enter. IB Maths AI HL trigonometric model with answers.',
      title: 'IB Maths AI HL Trigonometric Models',
      description:
        'Trigonometric models describe quantities that rise and fall regularly, such as tides.',
    },
    'cosine-rule': {
      metaTitle: 'Cosine Rule: a² = b² + c² − 2bc cos A | IB Maths AI HL',
      metaDescription:
        "Find sides and angles when the sine rule can't, including problems with a median. IB Maths AI HL cosine rule questions with answers.",
      title: 'IB Maths AI HL Cosine Rule',
      description:
        'The cosine rule formula, a² = b² + c² − 2bc cos A, works when the sine rule cannot.',
    },
    'trigonometric-identities': {
      metaTitle: 'Trig Identities: Prove & Solve with sin 2x | IB Maths AI HL',
      metaDescription:
        'Rewrite expressions with sin²x + cos²x = 1 and sin 2x = 2 sin x cos x, prove identities and solve. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Trigonometric Identities',
      description:
        'These trigonometric identities questions rewrite expressions using sin²x + cos²x = 1 and the double angle formula.',
    },
  },
  'matrices-transformations': {
    'matrix-transformation-of-a-point': {
      metaTitle: 'Matrix Transformation of a Point: Find the Image | AI HL',
      metaDescription:
        "Multiply the matrix by the point's position vector to get its image, then build a logo from repeated maps. IB Maths AI HL questions with answers.",
      title: 'IB Maths AI HL Matrix Transformation of a Point',
      description:
        "A matrix transformation of a point multiplies the matrix by the point's position vector.",
    },
    'finding-original-point-given-image': {
      metaTitle: 'Find the Original Point from Its Image: Use M⁻¹ | AI HL',
      metaDescription:
        'Reverse the transformation by multiplying the image by the inverse matrix. IB Maths AI HL matrix transformation questions with answers.',
      title: 'IB Maths AI HL Finding the Original Point Given Its Image',
      description:
        'Finding the original point from its image reverses the transformation with the inverse matrix.',
    },
    'image-of-unit-square-under-transformation': {
      metaTitle: 'Image of the Unit Square Under a Matrix | IB Maths AI HL',
      metaDescription:
        'The columns of the matrix are the images of (1, 0) and (0, 1): draw the image and describe its shape. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Image of the Unit Square',
      description:
        "The image of the unit square shows a matrix's effect: its columns are the images of (1, 0) and (0, 1).",
    },
    'finding-matrix-from-image-of-unit-square': {
      metaTitle: "Find a Matrix from the Unit Square's Image | IB AI HL",
      metaDescription:
        'Read the images of (1, 0) and (0, 1) and write them as the matrix columns. IB Maths AI HL transformation matrix questions with answers.',
      title: "IB Maths AI HL Finding a Matrix from the Unit Square's Image",
      description:
        'The matrix from the image of the unit square has the images of (1, 0) and (0, 1) as its columns.',
    },
    'matrix-for-standard-transformations': {
      metaTitle: 'Transformation Matrices: Rotate, Reflect, Stretch | IB AI HL',
      metaDescription:
        'Write down the matrices for stretches, enlargements, reflections and rotations, rebuilt from the unit square. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Matrices for Standard Transformations',
      description:
        'Transformation matrices for the standard maps follow patterns you can rebuild from the unit square.',
    },
    'composite-transformations-on-a-point': {
      metaTitle: 'Composite Transformations: Does Order Matter? | IB AI HL',
      metaDescription:
        'Apply one map after another to a point, and find when swapping the order gives the same image. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Composite Transformations on a Point',
      description:
        'Composite transformations apply one map after another, so the order of the matrices matters.',
    },
    'matrix-for-composite-transformation': {
      metaTitle: 'Composite Transformation Matrix: Order Matters | IB AI HL',
      metaDescription:
        'Multiply the matrices with the first transformation on the right: rotations, enlargements and translations. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Matrix for a Composite Transformation',
      description:
        'The matrix for a composite transformation is the product of the matrices, with the first map on the right.',
    },
    'area-of-image-of-a-shape': {
      metaTitle: 'Area of an Image = Area × |det M| | IB Maths AI HL',
      metaDescription:
        'The determinant is the area scale factor: multiply the original area by |det M|. IB Maths AI HL area of image questions with answers.',
      title: 'IB Maths AI HL Area of the Image of a Shape',
      description: 'The area of the image of a shape is the original area multiplied by |det M|.',
    },
    'matrix-transformation-mixed-skills': {
      metaTitle: 'Matrix Transformations: Mixed Exam-Style Problems | AI HL',
      metaDescription:
        'Images, inverses, areas and invariant points in one problem. IB Maths AI HL mixed matrix transformation questions with answers.',
      title: 'IB Maths AI HL Matrix Transformations: Mixed Skills',
      description:
        'These matrix transformations questions bring several skills together in one problem.',
    },
    'rotation-and-translation-composite': {
      metaTitle: 'Rotation Matrix + Translation: Rotate Through 135° | AI HL',
      metaDescription:
        'Use the matrix with cos θ and sin θ to rotate points, then combine with a translation. IB Maths AI HL rotation questions with answers.',
      title: 'IB Maths AI HL Rotation and Translation Composite',
      description:
        'A rotation transformation about the origin uses the matrix with cos θ and sin θ.',
    },
    'composite-transformation-area': {
      metaTitle: 'When a Composite Map Is a Single Reflection | IB AI HL',
      metaDescription:
        'Multiply the matrices, recognise the result as a reflection, then find the area of the image. IB Maths AI HL composite transformation with answers.',
      title: 'IB Maths AI HL Composite Transformation and Area',
      description:
        'A composite transformation matrix can turn out to be a simpler single transformation, such as a reflection.',
    },
    'matrix-for-reflection-in-given-line': {
      metaTitle: 'Reflection Matrix in y = (tan θ)x | IB Maths AI HL',
      metaDescription:
        'Find the angle of the line, then build [cos 2θ sin 2θ; sin 2θ −cos 2θ], e.g. for y = 3x. IB Maths AI HL reflection matrix with answers.',
      title: 'IB Maths AI HL Matrix for Reflection in a Given Line',
      description: 'A reflection matrix in y = (tan θ)x uses cos 2θ and sin 2θ.',
    },
    'composite-transformation-inverse': {
      metaTitle: 'Undo a Composite Transformation: Reverse the Order | AI HL',
      metaDescription:
        '(AB)⁻¹ = B⁻¹A⁻¹: invert each matrix and apply them in reverse order. IB Maths AI HL inverse transformation questions with answers.',
      title: 'IB Maths AI HL Composite Transformation: Inverse',
      description:
        'An inverse transformation matrix undoes the original map, and for a composite the order reverses.',
    },
    'proof-using-rotation-matrices': {
      metaTitle: 'Prove Two Rotations Make One: R(α)R(β) = R(α + β) | AI HL',
      metaDescription:
        'Multiply two rotation matrices and use the compound angle formulas to get a single rotation. IB Maths AI HL matrix proof with answers.',
      title: 'IB Maths AI HL Proof Using Rotation Matrices',
      description: 'Rotation matrices multiply to give the rotation through the sum of the angles.',
    },
    'composite-of-reflection-and-rotation': {
      metaTitle: 'Reflection After Rotation = Another Reflection | IB AI HL',
      metaDescription:
        'Multiply the matrices, identify the line of the resulting reflection and its invariant lines. IB Maths AI HL composite transformation with answers.',
      title: 'IB Maths AI HL Composite of Reflection and Rotation',
      description: 'The composite of reflection and rotation is always another reflection.',
    },
    'area-logo-design': {
      metaTitle: 'Determinant as Area Scale Factor: Logo Design | IB AI HL',
      metaDescription:
        'Each piece of the logo is an image of the first, so multiply its area by each |det|. IB Maths AI HL area scale factor question with answers.',
      title: 'IB Maths AI HL Area: Logo Design',
      description:
        "The determinant area scale factor shows how each transformation changes the area of the logo's pieces.",
    },
    'matrix-powers-and-area': {
      metaTitle: 'Matrix Powers Mⁿ and Area Scale Factor (det M)ⁿ | AI HL',
      metaDescription:
        'Find images under Mⁿ, conjecture a pattern for Pₙ, and scale areas by (det M)ⁿ. IB Maths AI HL matrix power questions with answers.',
      title: 'IB Maths AI HL Matrix Powers and Area',
      description: 'Matrix powers and area are linked: the area scale factor of Mⁿ is (det M)ⁿ.',
    },
    'area-under-repeated-transformation': {
      metaTitle: 'Area After Repeated Transformations of a Square | AI HL',
      metaDescription:
        "Each application multiplies the area by |det M|: find the unit square's area after n maps. IB Maths AI HL questions with answers.",
      title: 'IB Maths AI HL Area under Repeated Transformation',
      description:
        'The area under repeated transformation multiplies by the determinant each time.',
    },
    'geometric-interpretation-of-eigenvectors': {
      metaTitle: 'Eigenvectors Geometrically: Directions a Map Keeps | AI HL',
      metaDescription:
        'For a reflection in y = −x, the eigenvectors lie along and across the mirror line. Explain why. IB Maths AI HL question with answers.',
      title: 'IB Maths AI HL Geometric Interpretation of Eigenvectors',
      description:
        'The geometric interpretation of eigenvectors is simple: they are the directions a transformation keeps.',
    },
    'invariant-lines-no-real-eigenvalues': {
      metaTitle: 'No Real Eigenvalues = No Invariant Lines | IB Maths AI HL',
      metaDescription:
        'Invariant lines through the origin are eigenvectors, so a complex characteristic equation means none exist. IB Maths AI HL proof with answers.',
      title: 'IB Maths AI HL Invariant Lines: No Real Eigenvalues',
      description:
        'Invariant lines through the origin match the eigenvectors, so no real eigenvalues means no such lines.',
    },
    'repeated-composite-transformation': {
      metaTitle: 'Repeated Enlargement + Rotation as a Matrix Power | AI HL',
      metaDescription:
        'Combine the maps into one matrix, then raise it to a power to apply it again and again. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Repeated Composite Transformation',
      description: 'A repeated composite transformation is one matrix raised to a power.',
    },
    'area-of-fractal-design': {
      metaTitle: 'Fractal Design Area: Geometric Series with det M | AI HL',
      metaDescription:
        'Each step scales area by the determinant, so the total area is a geometric series. IB Maths AI HL fractal area question with answers.',
      title: 'IB Maths AI HL Area of a Fractal Design',
      description:
        'The area of a fractal design is a geometric series, with the determinant as the common ratio.',
    },
  },
  vectors: {
    'column-vectors-from-diagrams': {
      metaTitle: 'Write Column Vectors from a Diagram | IB Maths AI HL',
      metaDescription:
        'Count steps across for the top number and up for the bottom number, with signs for direction. IB Maths AI HL column vector practice with answers.',
      title: 'IB Maths AI HL Column Vectors from Diagrams',
      description:
        'Column vectors record movement: the top number is across and the bottom number is up.',
    },
    'base-vectors-i-j-k': {
      metaTitle: 'Base Vectors i, j, k: Unit Vectors Along Each Axis | AI HL',
      metaDescription:
        'Convert between column vectors and i, j, k form, the unit vectors along x, y and z. IB Maths AI HL base vector questions with answers.',
      title: 'IB Maths AI HL Base Vectors i, j, k',
      description: 'Base vectors i, j and k are unit vectors along the x-, y- and z-axes.',
    },
    '3d-column-vectors': {
      metaTitle: '3D Column Vectors from i, j, k Form | IB Maths AI HL',
      metaDescription:
        'Write 2i − 3j + k as a column vector, with a zero for any missing component. IB Maths AI HL 3D vector questions with answers.',
      title: 'IB Maths AI HL 3D Column Vectors',
      description: '3D column vectors have three components, one for each of i, j and k.',
    },
    'vectors-in-terms-of-a-b-c': {
      metaTitle: 'Write Vectors in Terms of a, b and c: Route Method | AI HL',
      metaDescription:
        'Find a route along known vectors, adding when you go with an arrow and subtracting against it. IB Maths AI HL vector diagram questions with answers.',
      title: 'IB Maths AI HL Vectors in Terms of a, b and c',
      description: 'Writing vectors in terms of a and b means finding a route along known vectors.',
    },
    'vector-arithmetic': {
      metaTitle: 'Vector Arithmetic: Calculate 2a − 3b | IB Maths AI HL',
      metaDescription:
        'Add, subtract and scale 3D vectors component by component. IB Maths AI HL vector arithmetic questions with answers.',
      title: 'IB Maths AI HL Vector Arithmetic',
      description: 'Vector arithmetic works component by component.',
    },
    'vectors-in-a-parallelogram': {
      metaTitle: 'Vectors in a Parallelogram: Diagonals in a and b | AI HL',
      metaDescription:
        'Opposite sides are equal vectors, so each diagonal is a + b or b − a. IB Maths AI HL parallelogram vector questions with answers.',
      title: 'IB Maths AI HL Vectors in a Parallelogram',
      description: 'Vectors in a parallelogram use the fact that opposite sides are equal vectors.',
    },
    'parallel-vectors': {
      metaTitle: 'Parallel Vectors: b = ka, Find p and q | IB Maths AI HL',
      metaDescription:
        'Parallel vectors are scalar multiples: find unknowns, use a scalar parameter and write a parallel line. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Parallel Vectors',
      description:
        'These parallel vectors questions use one fact: parallel vectors are scalar multiples, so b = ka.',
    },
    'unit-vectors': {
      metaTitle: 'Unit Vector Formula: â = a ÷ |a| | IB Maths AI HL',
      metaDescription:
        'Divide by the magnitude for a unit vector in the same direction, or use a cross product for a perpendicular one. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Unit Vectors',
      description: 'Unit vectors have magnitude 1 and give a direction only.',
    },
    'displacement-vectors': {
      metaTitle: 'Displacement Vector AB = b − a | IB Maths AI HL',
      metaDescription:
        'Subtract the start position vector from the end one to get the vector from A to B. IB Maths AI HL displacement vector questions with answers.',
      title: 'IB Maths AI HL Displacement Vectors',
      description: 'Displacement vectors go from one point to another: AB = b − a.',
    },
    'distance-between-points': {
      metaTitle: 'Distance Between Two Points in 3D: |b − a| | IB AI HL',
      metaDescription:
        'Find the vector joining the points, then its magnitude. Also solve for an unknown from a given distance. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Distance Between Points',
      description: 'The distance between points is the magnitude of the vector joining them.',
    },
    'resultant-vectors': {
      metaTitle: 'Resultant Force: Add the Vectors, Find the Magnitude | AI HL',
      metaDescription:
        'The resultant is the sum of all vectors acting: find a missing force and the size of the total. IB Maths AI HL resultant vector questions with answers.',
      title: 'IB Maths AI HL Resultant Vectors',
      description: 'Resultant vectors are the sum of all the vectors acting together.',
    },
    'vectors-in-geometric-shapes': {
      metaTitle: 'Vectors in a Rectangle Using Midpoints | IB Maths AI HL',
      metaDescription:
        'Use midpoints and equal sides to write unknown vectors in terms of known ones and compare them. IB Maths AI HL geometry vector questions with answers.',
      title: 'IB Maths AI HL Vectors in Geometric Shapes',
      description:
        'Vectors in geometric shapes use midpoints and equal sides to link unknown vectors to known ones.',
    },
    'vectors-in-a-triangle': {
      metaTitle: 'Vectors in a Triangle: Point Dividing a Side | IB AI HL',
      metaDescription:
        'With OA = a and OB = b, find the vector to a point that splits AB in a given ratio. IB Maths AI HL triangle vector questions with answers.',
      title: 'IB Maths AI HL Vectors in a Triangle',
      description: 'Vectors in a triangle are built from the two sides that start at the origin.',
    },
    'vector-calculations': {
      metaTitle: 'Vector Calculations with Three Vectors | IB Maths AI HL',
      metaDescription:
        'Combine three given vectors, find magnitudes and test statements about them. IB Maths AI HL vector calculation questions with answers.',
      title: 'IB Maths AI HL Vector Calculations',
      description:
        'These vector calculations combine several operations on the same three vectors.',
    },
    'magnitude-of-vectors': {
      metaTitle: 'Magnitude of a 3D Vector: √(x² + y² + z²) | IB AI HL',
      metaDescription:
        "Find a vector's length, the value of k for a given length, and the smallest magnitude of a vector in t. IB Maths AI HL with answers.",
      title: 'IB Maths AI HL Magnitude of Vectors',
      description:
        'The magnitude of vectors is their length, found with Pythagoras in three dimensions.',
    },
    'solving-vector-equations': {
      metaTitle: 'Solve Vector Equations: One Equation per Component | AI HL',
      metaDescription:
        'Find the scalars that make a combination of vectors equal another by matching each component. IB Maths AI HL vector equation questions with answers.',
      title: 'IB Maths AI HL Solving Vector Equations',
      description: 'Solving vector equations gives one equation for each component.',
    },
    'scaled-vectors': {
      metaTitle: 'Vector of a Given Length Parallel to Another | IB AI HL',
      metaDescription:
        'Make a unit vector, then multiply by 6 for a vector of magnitude 6 in the same direction. IB Maths AI HL scaled vector question with answers.',
      title: 'IB Maths AI HL Scaled Vectors',
      description: 'Scaled vectors keep the direction and change the length.',
    },
    'midpoints-and-position-vectors': {
      metaTitle: 'Midpoint Position Vector: ½(p + q) | IB Maths AI HL',
      metaDescription:
        'Average the two position vectors to find the midpoint of a line segment. IB Maths AI HL midpoint vector questions with answers.',
      title: 'IB Maths AI HL Midpoints and Position Vectors',
      description: 'The midpoint of a line segment has position vector ½(p + q).',
    },
    'dot-product-geometric': {
      metaTitle: 'Dot Product: a·b = |a||b| cos θ = a₁b₁ + a₂b₂ + a₃b₃ | AI HL',
      metaDescription:
        'Use both forms of the scalar product to find values and test directions. IB Maths AI HL dot product questions with answers.',
      title: 'IB Maths AI HL Dot Product',
      description:
        'The dot product of two vectors is a number that measures how much they point the same way.',
    },
    'angle-between-vectors': {
      metaTitle: 'Angle Between Two Vectors: cos θ = a·b ÷ |a||b| | IB AI HL',
      metaDescription:
        'Find the dot product and magnitudes, then the angle, for vectors and for lines through points. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Angle Between Vectors',
      description: 'The angle between vectors comes from rearranging the dot product formula.',
    },
    'angle-at-a-vertex': {
      metaTitle: 'Angle BAC with Vectors: Both from A | IB Maths AI HL',
      metaDescription:
        'Use AB and AC, both starting at A, in the dot product formula to find the angle at the vertex. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Angle at a Vertex',
      description: 'The angle at a vertex uses two vectors that both start at that vertex.',
    },
    'perpendicular-vectors': {
      metaTitle: 'Perpendicular Vectors: a·b = 0, Find t | IB Maths AI HL',
      metaDescription:
        'Set the dot product to zero to find unknowns and prove lines perpendicular. IB Maths AI HL perpendicular vector questions with answers.',
      title: 'IB Maths AI HL Perpendicular Vectors',
      description: 'Perpendicular vectors have a dot product of zero.',
    },
    'angle-between-lines': {
      metaTitle: 'Acute Angle Between Two Lines in 3D | IB Maths AI HL',
      metaDescription:
        'Only the direction vectors matter: take their dot product and give the acute angle, from vector or parametric form. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Angle Between Lines',
      description: 'The angle between lines depends only on their direction vectors.',
    },
    'cross-product-magnitude': {
      metaTitle: 'Cross Product a × b: Components & |a||b| sin θ | IB AI HL',
      metaDescription:
        'Find a × b by components and its magnitude from |a||b| sin θ: a vector perpendicular to both. IB Maths AI HL cross product with answers.',
      title: 'IB Maths AI HL Cross Product',
      description: 'The cross product of two vectors gives a third vector perpendicular to both.',
    },
    'area-of-triangle': {
      metaTitle: 'Area of a Triangle with Vectors: ½|AB × AC| | IB AI HL',
      metaDescription:
        'Half the magnitude of the cross product of two sides gives the area, in 3D or from tangent lines to a curve. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Area of a Triangle',
      description:
        'The area of triangle using vectors formula is ½|AB × AC|, half the magnitude of the cross product of two sides.',
    },
    'vector-projection-component': {
      metaTitle: 'Vector Projection & Scalar Component Formula | IB AI HL',
      metaDescription:
        'Scalar component = a·b̂; vector projection = (a·b̂)b̂: how much of a points along b. IB Maths AI HL projection questions with answers.',
      title: 'IB Maths AI HL Vector Projection (Component)',
      description: 'Vector projection finds how much of one vector points along another.',
    },
    'angle-from-dot-product': {
      metaTitle: 'Find the Angle from |a|, |b| and a·b Only | IB Maths AI HL',
      metaDescription:
        'Three numbers are enough: cos θ = a·b ÷ (|a||b|). No components needed. IB Maths AI HL dot product angle questions with answers.',
      title: 'IB Maths AI HL Angle from Dot Product',
      description: 'The angle from the dot product needs only three numbers: |a|, |b| and a·b.',
    },
    'finding-magnitude-from-dot-product': {
      metaTitle: 'Find a Magnitude from the Dot Product | IB Maths AI HL',
      metaDescription:
        'Rearrange a·b = |a||b| cos θ to find the missing length from the angle and one magnitude. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Finding Magnitude from Dot Product',
      description: 'A magnitude from the dot product comes from rearranging a·b = |a||b| cos θ.',
    },
    'angle-from-cross-product': {
      metaTitle: 'Angle from the Cross Product: Two Possible Answers | AI HL',
      metaDescription:
        '|a × b| = |a||b| sin θ gives sin θ, so θ could be acute or obtuse. Decide which. IB Maths AI HL cross product angle questions with answers.',
      title: 'IB Maths AI HL Angle from Cross Product',
      description:
        'The angle from the cross product uses |a × b| = |a||b| sin θ, which gives two possible angles.',
    },
    'applied-vector-projection': {
      metaTitle: 'Vector Projection in Real Life: Rowing Boat | IB AI HL',
      metaDescription:
        "Split a boat's velocity into the part along a direction and the part across it. IB Maths AI HL applied vector projection question with answers.",
      title: 'IB Maths AI HL Applied Vector Projection',
      description:
        'Applied vector projection splits a velocity into the part along a direction and the part across it.',
    },
    'angles-of-a-triangle': {
      metaTitle: 'All Three Angles of a 3D Triangle with Vectors | IB AI HL',
      metaDescription:
        'Use the dot product at each vertex, with both vectors starting there, and check the angles sum to 180°. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Angles of a Triangle',
      description: 'The angles of a triangle in 3D come from the dot product at each vertex.',
    },
    'parametric-vector-equations-of-lines': {
      metaTitle: 'Convert Vector ↔ Parametric Equations of a Line | AI HL',
      metaDescription:
        'Write r = a + λd as x, y and z equations and back, including a line with constant y. IB Maths AI HL line equation questions with answers.',
      title: 'IB Maths AI HL Parametric and Vector Equations of Lines',
      description:
        'Parametric and vector equations of lines carry the same information in two forms.',
    },
    'cross-product-properties-proof': {
      metaTitle: 'Why (a × b)·a = 0: Cross Product Properties | IB AI HL',
      metaDescription:
        'a × b is perpendicular to both a and b, so its dot product with either is zero. Use it to evaluate expressions. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Cross Product Properties',
      description:
        'Cross product properties follow from one fact: a × b is perpendicular to both a and b.',
    },
    'cross-product-application': {
      metaTitle: 'Normal Vector & Triangle Area from 3 Points | IB AI HL',
      metaDescription:
        'One cross product gives both a perpendicular direction and the area of the triangle. IB Maths AI HL cross product application with answers.',
      title: 'IB Maths AI HL Cross Product Application',
      description:
        'Cross product applications include finding a perpendicular direction and an area in one calculation.',
    },
    'parallelogram-proof-and-area': {
      metaTitle: 'Prove a Parallelogram, Then Area = |a × b| | IB AI HL',
      metaDescription:
        'Show opposite sides are equal vectors, then take the cross product of adjacent sides for the area. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Parallelogram: Proof and Area',
      description:
        'The area of a parallelogram with vectors is the magnitude of the cross product of two adjacent sides.',
    },
    'parallelogram-finding-vertex-and-area': {
      metaTitle: 'Find the 4th Vertex of a Parallelogram & Its Area | AI HL',
      metaDescription:
        'Use AB = DC to find D from A, B and C, then |AB × AD| for the area. IB Maths AI HL parallelogram vector questions with answers.',
      title: 'IB Maths AI HL Parallelogram: Finding a Vertex and Area',
      description: 'Parallelogram vectors questions use AB = DC to find a missing vertex.',
    },
    'vector-identity-proof': {
      metaTitle: 'Prove |a × b|² + (a·b)² = |a|²|b|² | IB Maths AI HL',
      metaDescription:
        'Write both in terms of sin θ and cos θ and use sin²θ + cos²θ = 1. IB Maths AI HL vector identity proof with answers.',
      title: 'IB Maths AI HL Vector Identity Proof',
      description:
        'This vector identity proof links the dot and cross products through sin²θ + cos²θ = 1.',
    },
    'parallelogram-dot-product-proof': {
      metaTitle: "When Are a Parallelogram's Diagonals Perpendicular? | AI HL",
      metaDescription:
        'Write the diagonals as a + b and b − a, set the dot product to zero: only when |a| = |b|. IB Maths AI HL dot product proof with answers.',
      title: 'IB Maths AI HL Parallelogram and Dot Product Proof',
      description:
        'This parallelogram dot product proof writes both diagonals in terms of a and b.',
    },
    'lines-and-perpendicularity': {
      metaTitle: 'Foot of the Perpendicular from a Point to a Line | AI HL',
      metaDescription:
        'Make the joining vector perpendicular to the direction, solve for λ, then find the distance. IB Maths AI HL perpendicular line questions with answers.',
      title: 'IB Maths AI HL Lines and Perpendicularity',
      description: 'Perpendicular lines in 3D have direction vectors with a dot product of zero.',
    },
    'cuboid-geometry': {
      metaTitle: 'Vectors in a Cuboid: Vertices, Diagonals, Angles | IB AI HL',
      metaDescription:
        'Use the edges as directions along the axes to find coordinates, diagonals and angles inside a box. IB Maths AI HL 3D vector questions with answers.',
      title: 'IB Maths AI HL Cuboid Geometry',
      description: "Vectors in a cuboid use the box's edges as directions along the axes.",
    },
  },
  'geometry-vectors': {
    'lines-in-3d-equation-through-two-points': {
      metaTitle: 'Equation of a Line Through Two Points in 3D | IB AI HL',
      metaDescription:
        'Use one point and the direction AB to write r = a + λ(b − a), then test whether a third point lies on it. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Lines in 3D: Equation Through Two Points',
      description: 'The equation of a line in 3D needs a point on the line and a direction vector.',
    },
    'vector-equation-of-a-line-direction-and-point': {
      metaTitle: 'Vector Equation of a Line: r = a + λd | IB Maths AI HL',
      metaDescription:
        'A fixed point plus any multiple of a direction: write it from a point and direction, two points or parametric form. IB AI HL, with answers.',
      title: 'IB Maths AI HL Vector Equation of a Line',
      description:
        'The vector equation of a line is r = a + λd, a fixed point plus any multiple of a direction.',
    },
    'parametric-form-of-a-line': {
      metaTitle: 'Parametric Form of a Line in 3D | IB Maths AI HL',
      metaDescription:
        'Write x, y and z separately in terms of λ, then use them to test whether two lines meet. IB Maths AI HL parametric line questions with answers.',
      title: 'IB Maths AI HL Parametric Form of a Line',
      description: 'The parametric form of a line writes x, y and z separately in terms of λ.',
    },
    'intersection-of-two-lines-in-3d': {
      metaTitle: 'Where Do Two 3D Lines Intersect? Method | IB Maths AI HL',
      metaDescription:
        'Use different parameters, equate components, solve two equations and check the third. IB Maths AI HL line intersection questions with answers.',
      title: 'IB Maths AI HL Intersection of Two Lines in 3D',
      description:
        'These intersection of two lines in 3D questions use different parameters for each line.',
    },
    'non-intersecting-lines-skew-lines': {
      metaTitle: 'Prove Two Lines Are Skew: Not Parallel, No Meeting | AI HL',
      metaDescription:
        "Show the directions aren't multiples and the component equations have no common solution. IB Maths AI HL skew lines questions with answers.",
      title: 'IB Maths AI HL Non-Intersecting Lines (Skew Lines)',
      description:
        'Skew lines in 3D never meet and are not parallel, which can only happen in three dimensions.',
    },
    'point-on-a-line-parametric-verification': {
      metaTitle: 'Is the Point on the Line? Same λ in Every Component | AI HL',
      metaDescription:
        'Test a point, find a parameter value, a point at a given distance and a distance to a line. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Point on a Line: Parametric Verification',
      description: 'A point on a line gives the same value of λ in every component.',
    },
    'equivalent-representations-of-a-line': {
      metaTitle: 'Do Two Vector Equations Describe the Same Line? | IB AI HL',
      metaDescription:
        'Check the directions are parallel and that a point on one lies on the other. IB Maths AI HL equivalent line questions with answers.',
      title: 'IB Maths AI HL Equivalent Representations of a Line',
      description:
        'Equivalent representations of a line have parallel directions and share a point.',
    },
    'midpoint-on-a-line': {
      metaTitle: 'Find C on a Line So AB = BC | IB Maths AI HL',
      metaDescription:
        'Repeat the vector AB from B to land on C. IB Maths AI HL point on a line at equal distance question with answers.',
      title: 'IB Maths AI HL Midpoint on a Line',
      description:
        'A point on a line at equal distance from B to A is found by repeating the vector AB.',
    },
    'intersection-of-lines-defined-by-points': {
      metaTitle: 'Intersection of Lines AB and CD from Coordinates | AI HL',
      metaDescription:
        "Write each line's equation from its two points, then equate and solve. IB Maths AI HL line intersection questions with answers.",
      title: 'IB Maths AI HL Intersection of Lines Defined by Points',
      description:
        "The intersection of lines through points starts with writing each line's equation.",
    },
    'line-intersecting-an-axis': {
      metaTitle: 'Does a Line Cross an Axis? Set Two Coordinates to 0 | AI HL',
      metaDescription:
        'On the x-axis, y = z = 0: solve for λ, or show no λ works. IB Maths AI HL line and axis questions with answers.',
      title: 'IB Maths AI HL Line Intersecting an Axis',
      description:
        'A line intersecting an axis has two of its three coordinates equal to zero at that point.',
    },
    'finding-a-parameter-for-intersecting-lines': {
      metaTitle: 'Find p So Two 3D Lines Intersect | IB Maths AI HL',
      metaDescription:
        'Solve two component equations for the parameters, then use the third to find p. IB Maths AI HL intersecting lines questions with answers.',
      title: 'IB Maths AI HL Finding a Parameter for Intersecting Lines',
      description:
        'Finding the parameter for intersecting lines means choosing p so all three component equations agree.',
    },
    'shortest-distance-from-a-point-to-a-line': {
      metaTitle: 'Shortest Distance from a Point to a Line in 3D | IB AI HL',
      metaDescription:
        'Find the foot of the perpendicular using the dot product with the direction, then the distance. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Shortest Distance from a Point to a Line',
      description: 'The shortest distance from a point to a line is along the perpendicular.',
    },
  },
  'geometry-and-trigonometry': {
    'velocity-vectors-and-bearings': {
      metaTitle: 'Bearing from a Velocity Vector | IB Maths AI HL',
      metaDescription:
        'Use the components and tan to find the direction, then measure clockwise from north. IB Maths AI HL velocity and bearing questions with answers.',
      title: 'IB Maths AI HL Velocity Vectors and Bearings',
      description:
        'Velocity vectors and bearings link components to direction, measured clockwise from north.',
    },
    'speed-from-velocity-vectors': {
      metaTitle: 'Speed = |Velocity Vector|: Both Directions | IB AI HL',
      metaDescription:
        'Speed is the magnitude of the velocity; reverse it to build a velocity from speed and direction. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Speed from Velocity Vectors',
      description:
        'Speed from velocity vectors is the magnitude; direction and speed together give the velocity.',
    },
    'position-vectors-with-constant-velocity': {
      metaTitle: 'Position at Time t: r = r₀ + tv | IB Maths AI HL',
      metaDescription:
        'Start position plus time × velocity gives where an object is at any time. IB Maths AI HL constant velocity questions with answers.',
      title: 'IB Maths AI HL Position Vectors with Constant Velocity',
      description: 'Position vectors with constant velocity follow r = r₀ + tv.',
    },
    'kinematics-with-constant-velocity': {
      metaTitle: 'Constant Velocity in 3D: Position, Speed, Distance | AI HL',
      metaDescription:
        'Treat motion as a line with time as the parameter: find position, speed and distance travelled. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Kinematics with Constant Velocity',
      description:
        'Kinematics with constant velocity treats motion as a line, with time as the parameter.',
    },
    'relative-position-and-distance-between-particles': {
      metaTitle: 'Relative Position r₂ − r₁ & Distance Apart | IB AI HL',
      metaDescription:
        'Subtract position vectors for relative position, then take the magnitude for the distance between particles. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Relative Position and Distance Between Particles',
      description:
        'The relative position of one particle from another is r₂ − r₁, and its rate of change is v₂ − v₁.',
    },
    'vector-equations-of-motion': {
      metaTitle: 'Vector Equations of Motion: Where Ships Will Be | AI HL',
      metaDescription:
        "Write each ship's position at time t from its start and velocity, then predict where it will be. IB Maths AI HL questions with answers.",
      title: 'IB Maths AI HL Vector Equations of Motion',
      description: "Vector equations of motion give each ship's position at time t.",
    },
    'intersection-and-collision-of-paths': {
      metaTitle: 'Paths Cross vs Collide: Toy Helicopters | IB Maths AI HL',
      metaDescription:
        'Crossing paths need any times; a collision needs the same time. Test both. IB Maths AI HL intersection and collision question with answers.',
      title: 'IB Maths AI HL Intersection and Collision of Paths',
      description:
        'A collision of paths needs both objects at the same point at the same time; crossing paths alone is not enough.',
    },
    'distance-between-moving-particles': {
      metaTitle: 'When Are Two Moving Particles Closest? | IB Maths AI HL',
      metaDescription:
        'Write the distance as a function of t and find its minimum. IB Maths AI HL distance between moving particles questions with answers.',
      title: 'IB Maths AI HL Distance Between Moving Particles',
      description: 'The distance between moving particles is a function of time with a minimum.',
    },
    '3d-kinematics-vertical-alignment': {
      metaTitle: 'When Is One Fly Directly Above the Other? | IB AI HL',
      metaDescription:
        'Match the x- and y-components at the same time t and solve. IB Maths AI HL 3D vector kinematics question with answers.',
      title: 'IB Maths AI HL 3D Kinematics: Vertical Alignment',
      description:
        'In vector kinematics in 3D, one object is directly above another when their x- and y-components match.',
    },
    '3d-kinematics-interception': {
      metaTitle: 'Interception Problem: Velocity to Intercept a Boat | AI HL',
      metaDescription:
        'Both objects must be in the same place at the same time: solve for the velocity needed. IB Maths AI HL interception questions with answers.',
      title: 'IB Maths AI HL 3D Kinematics: Interception',
      description: 'Interception problems need both objects at the same position at the same time.',
    },
  },
  'graphs-networks': {
    'weighted-graphs-adjacency-tables': {
      metaTitle: 'Weighted Graphs & Adjacency Tables | IB Maths AI HL',
      metaDescription:
        'Build adjacency tables from directed and undirected weighted graphs, and draw graphs from tables. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Weighted Graphs and Adjacency Tables',
      description:
        'Weighted graphs give each edge a value, such as a distance or cost, recorded in an adjacency table.',
    },
    'transition-matrices': {
      metaTitle: 'Transition Matrix from a Graph or Markov Chain | AI HL',
      metaDescription:
        'Each column holds the probabilities of moving from one state to every other. Build it for graphs and Markov chains. IB Maths AI HL, with answers.',
      title: 'IB Maths AI HL Transition Matrices',
      description:
        'Transition matrices hold the probability of moving from each state to each other state.',
    },
    'random-walks-stationary-distribution': {
      metaTitle: 'Random Walk on a Graph: Long-Run Time at Each Vertex | AI HL',
      metaDescription:
        'Find the stationary distribution to see what share of time a random walk spends at each vertex. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Random Walks and Stationary Distribution',
      description: 'A random walk on a graph settles into a stationary distribution over time.',
    },
    'pagerank-web-search-ranking': {
      metaTitle: 'How PageRank Ranks Pages: Random Surfer Model | IB AI HL',
      metaDescription:
        'Rank web pages by the long-run probability a random surfer lands on each. IB Maths AI HL PageRank questions with answers.',
      title: 'IB Maths AI HL PageRank and Web Search Ranking',
      description:
        'PageRank ranks web pages by how often a random surfer following links would land on each.',
    },
    'shortest-path-dijkstras-algorithm': {
      metaTitle: "Dijkstra's Algorithm: Shortest Route Step by Step | AI HL",
      metaDescription:
        'Label vertices with the shortest known distance, finalise the smallest each time, then trace the route back. IB Maths AI HL, with answers.',
      title: "IB Maths AI HL Shortest Path (Dijkstra's Algorithm)",
      description: "Dijkstra's algorithm finds the shortest path from one vertex to every other.",
    },
    'drawing-graphs-from-adjacency-tables': {
      metaTitle: 'Draw a Graph from an Adjacency Table | IB Maths AI HL',
      metaDescription:
        'Every non-zero entry is an edge: draw the paths between six locations in a park. IB Maths AI HL adjacency table questions with answers.',
      title: 'IB Maths AI HL Drawing Graphs from Adjacency Tables',
      description: 'Drawing graphs from adjacency tables turns each non-zero entry into an edge.',
    },
    'shortest-path-modified': {
      metaTitle: 'Shortest Path When a Road Closes | IB Maths AI HL',
      metaDescription:
        'Remove the edge and rerun the algorithm: the shortest route can change completely. IB Maths AI HL modified shortest path question with answers.',
      title: 'IB Maths AI HL Shortest Path (Modified)',
      description:
        'A shortest path algorithm must be rerun when an edge is removed, since the shortest route can change completely.',
    },
    'markov-chains-probability': {
      metaTitle: 'Markov Chain Probabilities After n Steps: Tⁿs₀ | AI HL',
      metaDescription:
        'Multiply the initial state vector by Tⁿ to find where a tourist is likely to be after several trips. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Markov Chains and Probability',
      description:
        'In Markov chains, probability after n steps comes from multiplying the initial vector by Tⁿ.',
    },
    'stationary-distribution-long-run-probability': {
      metaTitle: 'Long-Run Probability: Stationary Distribution | IB AI HL',
      metaDescription:
        'Raise T to a large power or solve Ts = s to find which port a tourist visits most. IB Maths AI HL Markov chain questions with answers.',
      title: 'IB Maths AI HL Stationary Distribution and Long-Run Probability',
      description:
        'The long run probability of each state is its entry in the stationary distribution.',
    },
    'pagerank-with-damping-modified-transition-matrix': {
      metaTitle: 'PageRank with Damping Factor: Modified Matrix | IB AI HL',
      metaDescription:
        'A surfer sometimes jumps to a random page: build the damped transition matrix and rank pages. IB Maths AI HL PageRank questions with answers.',
      title: 'IB Maths AI HL PageRank with Damping',
      description:
        'PageRank with damping allows a surfer to jump to any page at random, not only along links.',
    },
  },
  'probability-statistics': {
    'markov-chains-transition-diagrams': {
      metaTitle: 'Markov Chain Transition Diagram to Matrix | IB AI HL',
      metaDescription:
        'Turn the diagram into a transition matrix, then find multi-step and steady-state probabilities. IB Maths AI HL Markov chain questions with answers.',
      title: 'IB Maths AI HL Markov Chains: Transition Diagrams',
      description:
        'A Markov chain transition diagram shows each state and the probability of moving between them.',
    },
    'markov-chains-steady-state-algebraic': {
      metaTitle: 'Steady-State Vector: Solve Ts = s Exactly | IB AI HL',
      metaDescription:
        'Solve Ts = s with the entries summing to 1 for the exact long-run probabilities. IB Maths AI HL steady state questions with answers.',
      title: 'IB Maths AI HL Markov Chains: Steady-State (Algebraic)',
      description: 'The steady state vector is unchanged by the transition matrix: Ts = s.',
    },
    'markov-chains-applications': {
      metaTitle: 'Markov Chains in Real Life: Cars, Weather, Migration | AI HL',
      metaDescription:
        'The next state depends only on the current one: model car purchases, weather and population movement. IB Maths AI HL, with answers.',
      title: 'IB Maths AI HL Markov Chains: Applications',
      description:
        'Markov chains model situations where the next state depends only on the current one.',
    },
    'markov-chains-absorbing-states-gamblers-ruin': {
      metaTitle: "Gambler's Ruin: Absorbing Markov Chain | IB Maths AI HL",
      metaDescription:
        'Reaching $0 or the target ends the game for good: build and analyse the absorbing chain. IB Maths AI HL Markov chain question with answers.',
      title: 'IB Maths AI HL Markov Chains: Absorbing States',
      description: 'An absorbing Markov chain has states that, once reached, are never left.',
    },
  },
  statistics: {
    'validity-reliability-of-survey-questions': {
      metaTitle: 'Validity in Statistics: Survey Questions | IB Maths AI HL',
      metaDescription:
        'Define validity and judge whether survey questions measure what they claim to. IB Maths AI HL validity questions with answers.',
      title: 'IB Maths AI HL Validity and Reliability of Survey Questions',
      description:
        'Validity in statistics asks whether a question or test measures what it is meant to measure.',
    },
    'unbiased-estimates-of-population-mean-and-variance': {
      metaTitle: 'Unbiased Estimate of Variance: sₙ₋₁² Formula | IB AI HL',
      metaDescription:
        'Use x̄ for the mean and divide by n − 1 for variance: sₙ₋₁² = n/(n − 1) × sₙ². IB Maths AI HL unbiased estimate questions with answers.',
      title: 'IB Maths AI HL Unbiased Estimates of Population Mean and Variance',
      description:
        'Unbiased estimates of mean and variance for a population use x̄ and sₙ₋₁², which divides by n − 1.',
    },
    reliability: {
      metaTitle: 'Reliability: Test-Retest & Parallel Forms | IB Maths AI HL',
      metaDescription:
        'A reliable test gives consistent results when repeated. Define it and test it two ways. IB Maths AI HL reliability questions with answers.',
      title: 'IB Maths AI HL Reliability',
      description:
        'Reliability in statistics asks whether a test gives consistent results when repeated.',
    },
    'chi-squared-test-for-independence': {
      metaTitle: 'Chi-Squared Test: Independence & Goodness of Fit | IB AI HL',
      metaDescription:
        'Compare observed and expected frequencies, find χ² and the p-value, and conclude: Poisson, normal and binomial fits too. IB AI HL, with answers.',
      title: 'IB Maths AI HL Chi-Squared Test for Independence and Goodness of Fit',
      description:
        'A chi squared test compares observed frequencies with those expected under a model or under independence.',
    },
    'hypothesis-testing-binomial-distribution-p-value': {
      metaTitle: 'Binomial Hypothesis Test with a p-Value | IB Maths AI HL',
      metaDescription:
        'Has the proportion changed? Find P(X ≥ x) or P(X ≤ x) under H₀ and compare with the significance level. IB Maths AI HL, with answers.',
      title: 'IB Maths AI HL Hypothesis Testing: Binomial Distribution (p-value)',
      description:
        'A binomial hypothesis test checks whether a proportion has changed, based on a count of successes.',
    },
    'hypothesis-testing-binomial-distribution-critical-region': {
      metaTitle: 'Binomial Critical Region & Actual Significance Level | AI HL',
      metaDescription:
        'Find the values that reject H₀ for a one-tailed test and the true probability of a type I error. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Hypothesis Testing: Binomial Critical Region',
      description:
        'The binomial critical region is the set of values that would lead to rejecting H₀.',
    },
    'hypothesis-testing-poisson-distribution-p-value': {
      metaTitle: 'Poisson Hypothesis Test: p-Value & Critical Region | AI HL',
      metaDescription:
        'Test whether a rate has changed using a Poisson model: rainy days, typing errors and more. IB Maths AI HL hypothesis test questions with answers.',
      title: 'IB Maths AI HL Hypothesis Testing: Poisson Distribution',
      description:
        'These Poisson distribution examples cover counts of events in a fixed interval, such as rainy days or typing errors.',
    },
    'hypothesis-testing-correlation-pmcc': {
      metaTitle: 'Hypothesis Test for Correlation: Is ρ ≠ 0? | IB Maths AI HL',
      metaDescription:
        'Set H₀: ρ = 0, get r and its p-value from technology and conclude in context. IB Maths AI HL PMCC hypothesis test questions with answers.',
      title: 'IB Maths AI HL Hypothesis Testing: Correlation (PMCC)',
      description:
        'A hypothesis test for correlation asks whether the population correlation ρ is greater than, less than or different from zero.',
    },
    'hypothesis-testing-comparing-models': {
      metaTitle: 'Binomial vs Poisson Test: When They Disagree | IB AI HL',
      metaDescription:
        'Find a significance level where the two models give different conclusions from the same data. IB Maths AI HL hypothesis test question with answers.',
      title: 'IB Maths AI HL Hypothesis Testing: Comparing Models',
      description:
        'Comparing hypothesis tests shows that different models can lead to different conclusions from the same data.',
    },
  },
  calculus: {
    'differentiation-power-rule': {
      metaTitle: 'Power Rule with Fractional Powers: x^(2/3), 2√x | IB AI HL',
      metaDescription:
        'Bring the power down and subtract 1, even for fractions and roots: write √x as x^(1/2) first. IB Maths AI HL power rule questions with answers.',
      title: 'IB Maths AI HL Differentiation: Power Rule',
      description:
        'These power rule differentiation questions use fractional and negative powers as well as whole ones.',
    },
    'differentiation-simplifying-before-differentiating': {
      metaTitle: 'Simplify First, Then Differentiate a Fraction | IB AI HL',
      metaDescription:
        'Divide each term of (9x + 1)/x^(4/3) by the denominator and avoid the quotient rule. IB Maths AI HL differentiation questions with answers.',
      title: 'IB Maths AI HL Differentiation: Simplifying Before Differentiating',
      description:
        'In these simplify and differentiate questions, dividing each term by the denominator avoids the quotient rule.',
    },
    'differentiation-trigonometric-functions': {
      metaTitle: 'Derivatives of sin, cos & tan: sin 2x and More | IB AI HL',
      metaDescription:
        'sin x → cos x, cos x → −sin x, tan x → sec²x, and sin 2x → 2 cos 2x. IB Maths AI HL trig differentiation questions with answers.',
      title: 'IB Maths AI HL Differentiation: Trigonometric Functions',
      description:
        'The derivative of trig functions follows a cycle: sin x gives cos x, and cos x gives −sin x.',
    },
    'differentiation-logarithmic-functions': {
      metaTitle: 'Derivative of ln x = 1/x (and Why ln 4x Is Too) | IB AI HL',
      metaDescription:
        'ln 4x = ln 4 + ln x, so it also differentiates to 1/x. Practise 3 ln x, ln 4x and more. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Differentiation: Logarithmic Functions',
      description:
        'The derivative of ln x is 1/x, and ln 4x has the same derivative because ln 4x = ln 4 + ln x.',
    },
    'differentiation-exponential-functions': {
      metaTitle: 'Derivative of eˣ Is eˣ: 5eˣ, e³ˣ, xeˣ | IB Maths AI HL',
      metaDescription:
        'eˣ differentiates to itself; e^(kx) gives ke^(kx). Practise multiples, e³ˣ and products. IB Maths AI HL exponential derivative questions with answers.',
      title: 'IB Maths AI HL Differentiation: Exponential Functions',
      description:
        'The derivative of e^x is e^x itself, which makes exponential functions central to calculus.',
    },
    'gradient-of-a-curve-at-a-point': {
      metaTitle: 'Gradient of a Curve at a Point: Substitute into f′ | AI HL',
      metaDescription:
        'Differentiate, then substitute: y = sin x at π/3 and y = e²ˣ + 5x at x = ln 3. IB Maths AI HL gradient questions with answers.',
      title: 'IB Maths AI HL Gradient of a Curve at a Point',
      description: 'The gradient of a curve at a point is the value of the derivative there.',
    },
    'rate-of-change-real-world-context': {
      metaTitle: 'Rate of Change dh/dt: A Swooping Falcon | IB Maths AI HL',
      metaDescription:
        'Differentiate the height model to get the rate in metres per second and interpret its sign. IB Maths AI HL rate of change question with answers.',
      title: 'IB Maths AI HL Rate of Change: Real-World Context',
      description:
        'The rate of change formula in calculus is the derivative, here dh/dt in metres per second.',
    },
    'gradient-conditions-finding-points': {
      metaTitle: 'Find the Point Where the Gradient Equals k | IB AI HL',
      metaDescription:
        'Solve f′(x) = k: where does y = 2 + 5x − eˣ have gradient 4? IB Maths AI HL gradient condition questions with answers.',
      title: 'IB Maths AI HL Gradient Conditions: Finding Points',
      description: 'A point with a given gradient comes from solving f′(x) = k.',
    },
    'gradient-at-a-specific-point-exponential': {
      metaTitle: 'Exact Gradient at x = ln 2: e^(ln 2) = 2 | IB Maths AI HL',
      metaDescription:
        'Differentiate y = eˣ + 3x + 4 and simplify e^(ln 2) to 2 for an exact answer. IB Maths AI HL exact gradient question with answers.',
      title: 'IB Maths AI HL Gradient at a Specific Point: Exponential',
      description: 'An exact gradient keeps values like ln 2 and e^(ln 2) in exact form.',
    },
    'equation-of-tangent-parallel-lines': {
      metaTitle: 'Tangent Parallel or Perpendicular to a Line | IB AI HL',
      metaDescription:
        'Start from the gradient the tangent must have, solve f′(x) = m, then write the line. IB Maths AI HL tangent questions with answers.',
      title: 'IB Maths AI HL Equation of a Tangent: Parallel and Perpendicular Lines',
      description:
        'Tangent lines with a required direction start from the gradient they must have.',
    },
    'equation-of-normal-proof': {
      metaTitle: 'Equation of a Normal: Gradient −1/f′(a) | IB Maths AI HL',
      metaDescription:
        "Find the normal to y = 2x − eˣ and show it can't pass through the origin. IB Maths AI HL normal line proof with answers.",
      title: 'IB Maths AI HL Equation of a Normal: Proof',
      description:
        'The equation of normal formula uses the gradient −1/f′(a) through the point on the curve.',
    },
    'modelling-exponential-radical-growth': {
      metaTitle: 'Bacteria Growth Rate: Differentiate the Model | IB AI HL',
      metaDescription:
        'Turn a population model into a growth rate on an agar dish by differentiating. IB Maths AI HL differentiation in modelling question with answers.',
      title: 'IB Maths AI HL Modelling: Exponential and Radical Growth',
      description: 'Differentiation in modelling turns a population model into a growth rate.',
    },
    'modelling-rate-of-change': {
      metaTitle: 'When Is Growth Fastest? N = (1 + √t)² | IB Maths AI HL',
      metaDescription:
        'Differentiate the model and analyse dN/dt to see when the bacteria grow fastest. IB Maths AI HL rate of change model question with answers.',
      title: 'IB Maths AI HL Modelling: Rate of Change',
      description: 'Rate of change calculus questions ask how quickly a model changes and when.',
    },
    'modelling-limitations': {
      metaTitle: 'Why a Growth Model Fails: Unlimited Bacteria | IB AI HL',
      metaDescription:
        "A model that grows forever can't fit a real dish. Explain the limitation clearly. IB Maths AI HL growth model limitation question with answers.",
      title: 'IB Maths AI HL Modelling: Limitations',
      description:
        'The limitations of a growth model show when it predicts growth that no real dish can support.',
    },
    'increasing-decreasing-functions': {
      metaTitle: 'Where Is ln x − 2x Decreasing? Solve f′(x) < 0 | IB AI HL',
      metaDescription:
        'Differentiate, solve f′(x) < 0 within the domain, and state the interval. IB Maths AI HL increasing and decreasing function questions with answers.',
      title: 'IB Maths AI HL Increasing and Decreasing Functions',
      description: 'To find where a function is decreasing, solve f′(x) < 0 over its domain.',
    },
    'perpendicular-tangents-finding-parameter': {
      metaTitle: 'Perpendicular Tangents: Gradients Multiply to −1 | AI HL',
      metaDescription:
        'Find the parameter that makes the tangents to two curves meet at right angles. IB Maths AI HL perpendicular tangent question with answers.',
      title: 'IB Maths AI HL Perpendicular Tangents: Finding a Parameter',
      description: 'Perpendicular tangents have gradients that multiply to −1.',
    },
    'tangent-through-external-point': {
      metaTitle: 'Tangent from a Point Not on the Curve | IB Maths AI HL',
      metaDescription:
        'Let the touching point be (a, f(a)), make the tangent pass through the external point, solve for a. IB Maths AI HL tangent questions with answers.',
      title: 'IB Maths AI HL Tangent Through an External Point',
      description:
        'A tangent through an external point touches the curve at an unknown point, which must be found first.',
    },
    'parallel-tangents-combined-functions': {
      metaTitle: 'Parallel Tangents on y = x² − 2 ln x | IB Maths AI HL',
      metaDescription:
        'Parallel tangents share a gradient: solve f′(x) = m to find every such point. IB Maths AI HL parallel tangent questions with answers.',
      title: 'IB Maths AI HL Parallel Tangents: Combined Functions',
      description:
        'Parallel tangents share a gradient, so they come from solving one derivative equation.',
    },
    'chain-rule-differentiation': {
      metaTitle: 'Chain Rule: dy/dx = dy/du × du/dx, (3x + 2)⁴ | IB AI HL',
      metaDescription:
        "Differentiate the outside, keep the inside, multiply by the inside's derivative: (3x + 2)⁴ and sin² 3x. IB Maths AI HL chain rule with answers.",
      title: 'IB Maths AI HL Chain Rule: Differentiation',
      description:
        'The chain rule formula, dy/dx = dy/du × du/dx, differentiates a function of a function.',
    },
    'exponential-differentiation-applied': {
      metaTitle: 'Differentiate 1/eˣ: Rewrite as e⁻ˣ First | IB Maths AI HL',
      metaDescription:
        '1/eˣ = e⁻ˣ, so its derivative is −e⁻ˣ. A quick trick that avoids the quotient rule. IB Maths AI HL question with answers.',
      title: 'IB Maths AI HL Exponential Differentiation: Applied',
      description: 'Exponential differentiation is easiest when 1/eˣ is rewritten as e⁻ˣ.',
    },
    'composite-trigonometric-differentiation': {
      metaTitle: 'Derivative of sin²x = 2 sin x cos x = sin 2x | IB AI HL',
      metaDescription:
        'Use the chain rule on (sin x)², then simplify with the double angle formula. IB Maths AI HL composite trig differentiation with answers.',
      title: 'IB Maths AI HL Composite Trigonometric Differentiation',
      description: 'The derivative of sin squared x comes from the chain rule: 2 sin x cos x.',
    },
    'stationary-points-on-trigonometric-curve': {
      metaTitle: 'Stationary Points of a Trig Curve: Find & Classify | AI HL',
      metaDescription:
        'Solve f′(x) = 0, check every solution in the interval, then classify each point. IB Maths AI HL trig stationary point questions with answers.',
      title: 'IB Maths AI HL Stationary Points on a Trigonometric Curve',
      description:
        'Stationary points of trig functions repeat across the interval, so check every solution in range.',
    },
    'differentiation-applied-to-identity': {
      metaTitle: 'Differentiate sin 2x = 2 sin x cos x to Get cos 2x | AI HL',
      metaDescription:
        'Differentiate both sides of one identity to deduce cos 2x = cos²x − sin²x. IB Maths AI HL identity question with answers.',
      title: 'IB Maths AI HL Differentiation Applied to an Identity',
      description: 'Differentiating trig identities turns one known identity into a new one.',
    },
    'proof-using-differentiation-and-given-identity': {
      metaTitle: 'Derive the cos 3x Identity by Differentiating sin 3x | AI HL',
      metaDescription:
        'Differentiate both sides of the sin 3x identity to reach a new one for cos 3x. IB Maths AI HL proof using differentiation with answers.',
      title: 'IB Maths AI HL Proof Using Differentiation and a Given Identity',
      description:
        'This proof using differentiation differentiates both sides of an identity to reach a new one.',
    },
    'finding-points-with-specified-gradient': {
      metaTitle: 'Points with a Given Gradient on y = ln(x² − 8) | IB AI HL',
      metaDescription:
        'Solve f′(x) = k, then keep only x-values inside the domain x² > 8. IB Maths AI HL specified gradient question with answers.',
      title: 'IB Maths AI HL Finding Points with a Specified Gradient',
      description:
        "Points with a specified gradient on a log curve must also lie inside the curve's domain.",
    },
    'exponential-derivative-show-that': {
      metaTitle: 'Show dy/dx = 2y When y = e²ˣ | IB Maths AI HL',
      metaDescription:
        'Differentiate, then substitute y back in: the rate is proportional to the value. IB Maths AI HL show-that question with answers.',
      title: 'IB Maths AI HL Exponential Derivative: Show That',
      description:
        'This exponential derivative result shows that the rate of change is proportional to the value.',
    },
    'converse-reasoning-with-exponentials': {
      metaTitle: 'If dy/dx = 2y, Must y = e²ˣ? Counterexample | IB AI HL',
      metaDescription:
        'No: y = 3e²ˣ works too. Test whether a result holds in reverse and justify it. IB Maths AI HL converse reasoning question with answers.',
      title: 'IB Maths AI HL Converse Reasoning with Exponentials',
      description: 'Converse reasoning tests whether a result also works in reverse.',
    },
    'product-rule-differentiation': {
      metaTitle: 'Product Rule: x sin x, x ln x and More | IB Maths AI HL',
      metaDescription:
        'd/dx(uv) = u′v + uv′: differentiate products, including ones that also need the chain rule. IB Maths AI HL product rule questions with answers.',
      title: 'IB Maths AI HL Product Rule',
      description: 'Product rule differentiation handles functions multiplied together.',
    },
    'quotient-rule': {
      metaTitle: 'Quotient Rule (vu′ − uv′)/v²: Examples | IB Maths AI HL',
      metaDescription:
        'Label u and v, apply the formula in the right order, then simplify the numerator. IB Maths AI HL quotient rule questions with answers.',
      title: 'IB Maths AI HL Quotient Rule',
      description: 'The quotient rule formula is (vu′ − uv′)/v² for y = u/v.',
    },
    'differentiation-evaluation': {
      metaTitle: 'Find f′(3) for f(x) = xe²ˣ: Product + Chain Rule | AI HL',
      metaDescription:
        'Differentiate first, then substitute the value. IB Maths AI HL evaluating derivative questions with answers.',
      title: 'IB Maths AI HL Differentiation and Evaluation',
      description: 'To evaluate a derivative at a point, find f′(x) first, then substitute.',
    },
    'differentiation-of-functions-with-parameters': {
      metaTitle: 'Differentiate x/√(k + x²) with k Constant | IB Maths AI HL',
      metaDescription:
        'Treat k as a fixed number, use the quotient or product rule and simplify fully. IB Maths AI HL differentiation with parameters with answers.',
      title: 'IB Maths AI HL Differentiation of Functions with Parameters',
      description: 'Differentiation with parameters treats letters like k as fixed numbers.',
    },
    'proof-show-that': {
      metaTitle: 'Show f′(x) = (ax + b) ÷ (2√(2 + x)) | IB Maths AI HL',
      metaDescription:
        'Differentiate x√(2 + x) with the product rule and work to the exact stated form. IB Maths AI HL differentiation show-that question with answers.',
      title: 'IB Maths AI HL Proof and Show That',
      description:
        'A differentiation proof like this needs the working to reach a stated form exactly.',
    },
    'proof-increasing-functions': {
      metaTitle: 'Prove x²/(1 + x) Is Increasing on an Interval | IB AI HL',
      metaDescription:
        'Show the derivative is positive throughout the interval to prove the function increases. IB Maths AI HL proof question with answers.',
      title: 'IB Maths AI HL Proof: Increasing Functions',
      description:
        'Proving a function is increasing on an interval means showing the derivative is positive there.',
    },
    'differentiation-of-models-real-world-contexts': {
      metaTitle: 'Rabbit Population Growth Rate: Differentiate | IB AI HL',
      metaDescription:
        'Differentiate a population model to find how fast rabbits on an island are increasing. IB Maths AI HL real-world differentiation question with answers.',
      title: 'IB Maths AI HL Differentiation of Models in Real-World Contexts',
      description:
        'Differentiation in real world contexts gives rates such as how fast a population is growing.',
    },
    'limits-behaviour-of-functions': {
      metaTitle: 'Limit of 4 ÷ (1 + 3e⁻ⁿ) as n → ∞ Is 4 | IB Maths AI HL',
      metaDescription:
        'As n grows, e⁻ⁿ → 0, so the model levels off at 4. Find the end behaviour of functions like this. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Limits and Behaviour of Functions',
      description:
        'The end behaviour of functions describes what happens as the input grows without limit.',
    },
    'graphs-sketching': {
      metaTitle: 'Sketch a Logistic Curve: Intercept & Asymptote | IB AI HL',
      metaDescription:
        'Combine the intercept, the horizontal asymptote and the S-shape to sketch a population model. IB Maths AI HL curve sketching with answers.',
      title: 'IB Maths AI HL Graphs and Sketching',
      description:
        'These curve sketching questions combine an intercept, an asymptote and the overall shape.',
    },
    'proof-exponential-functions': {
      metaTitle: 'Prove xˣ = e^(x ln x) for x > 0 | IB Maths AI HL',
      metaDescription:
        'Write xˣ using e and ln: x = e^(ln x), so xˣ = e^(x ln x). IB Maths AI HL exponential proof question with answers.',
      title: 'IB Maths AI HL Proof: Exponential Functions',
      description: 'This exponential function proof rewrites a power using e and ln.',
    },
    'related-rates-of-change': {
      metaTitle: 'Related Rates: dy/dt = dy/dx × dx/dt Examples | IB AI HL',
      metaDescription:
        'Link two rates with the chain rule: growing squares, a thrown ball and changing density. IB Maths AI HL related rates questions with answers.',
      title: 'IB Maths AI HL Related Rates of Change',
      description:
        'Related rates of change link two rates through the chain rule: dy/dt = dy/dx × dx/dt.',
    },
    'kinematics-differentiation': {
      metaTitle: 'Velocity & Acceleration from Displacement | IB Maths AI HL',
      metaDescription:
        'v = ds/dt and a = dv/dt; set v = 0 to find the maximum displacement. IB Maths AI HL kinematics differentiation questions with answers.',
      title: 'IB Maths AI HL Kinematics: Differentiation',
      description:
        'What is kinematics? The study of motion through displacement, velocity and acceleration. These kinematics examples link them by differentiation.',
    },
    'kinematics-chain-rule-a-in-terms-of-s': {
      metaTitle: 'Acceleration as a = v dv/ds | IB Maths AI HL',
      metaDescription:
        'When v is given in terms of s, use the chain rule a = v dv/ds: racing cars and more. IB Maths AI HL kinematics questions with answers.',
      title: 'IB Maths AI HL Kinematics: Chain Rule (a in Terms of s)',
      description: 'Acceleration in terms of displacement uses the chain rule: a = v dv/ds.',
    },
    'kinematics-integration-displacement': {
      metaTitle: 'Displacement = ∫v dt Between Two Times | IB Maths AI HL',
      metaDescription:
        'Integrate the velocity over the time interval, including exponential velocity models. IB Maths AI HL displacement from velocity questions with answers.',
      title: 'IB Maths AI HL Kinematics: Integration (Displacement)',
      description:
        'Displacement from velocity is the definite integral of v over the time interval.',
    },
    'kinematics-integration-velocity-change': {
      metaTitle: 'Change in Velocity = ∫a dt: a = 2 cos(t/3) | IB AI HL',
      metaDescription:
        'Integrate acceleration over the interval to find how much the velocity changes. IB Maths AI HL kinematics integration question with answers.',
      title: 'IB Maths AI HL Kinematics: Integration (Velocity Change)',
      description: 'The change in velocity is the definite integral of acceleration over time.',
    },
    'kinematics-distance-travelled': {
      metaTitle: 'Distance Travelled = ∫|v| dt: v = sin t / t | IB AI HL',
      metaDescription:
        'Integrate speed, not velocity, so back-and-forth motion all counts. Use a GDC for t = 1 to 5. IB Maths AI HL distance questions with answers.',
      title: 'IB Maths AI HL Kinematics: Distance Travelled',
      description:
        'Distance travelled counts motion in both directions, so it integrates the speed |v|.',
    },
    'kinematics-maximum-speed': {
      metaTitle: 'Maximum Speed: Largest |v|, Not Largest v | IB Maths AI HL',
      metaDescription:
        'Check stationary points of v and the end points, then compare |v|. Also minimum and average speed. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Kinematics: Maximum Speed',
      description:
        'The maximum speed is the largest value of |v|, which may occur where v is most negative.',
    },
    'kinematics-distance-vs-displacement': {
      metaTitle: 'Distance vs Displacement: Why the Answers Differ | IB AI HL',
      metaDescription:
        "Displacement can cancel when the particle turns back; distance can't. Find both and explain the gap. IB Maths AI HL question with answers.",
      title: 'IB Maths AI HL Kinematics: Distance vs Displacement',
      description:
        'Distance and displacement differ because displacement can cancel out when the particle turns back, distance cannot.',
    },
    'kinematics-integration-velocity-from-acceleration': {
      metaTitle: 'Velocity from Acceleration: Integrate 2t + 1 | IB AI HL',
      metaDescription:
        'Integrate a, then use the initial velocity to find the constant. IB Maths AI HL velocity from acceleration questions with answers.',
      title: 'IB Maths AI HL Kinematics: Velocity from Acceleration',
      description:
        'Velocity from acceleration is found by integrating, with the initial velocity fixing the constant.',
    },
    'kinematics-mixed-problem': {
      metaTitle: 'Kinematics Problem: Bullet in Fluid, v = 256 − t⁴ | AI HL',
      metaDescription:
        'Differentiate and integrate in one context: when the bullet stops and how far it travels. IB Maths AI HL kinematics problem with answers.',
      title: 'IB Maths AI HL Kinematics: Mixed Problem',
      description:
        'This kinematics problem combines differentiation and integration in one context.',
    },
    'kinematics-proof-constant-acceleration': {
      metaTitle: 'Prove v = u + at and s = ut + ½at² | IB Maths AI HL',
      metaDescription:
        'Integrate constant acceleration twice, using initial conditions for each constant. IB Maths AI HL constant acceleration proof with answers.',
      title: 'IB Maths AI HL Kinematics: Proof with Constant Acceleration',
      description: 'The constant acceleration equations follow from integrating a constant twice.',
    },
    'kinematics-shm-proof': {
      metaTitle: 'Simple Harmonic Motion: Prove ẍ = −ω²x | IB Maths AI HL',
      metaDescription:
        'Differentiate x = sin ωt twice: acceleration is proportional to displacement and opposite in sign. IB Maths AI HL SHM proof with answers.',
      title: 'IB Maths AI HL Kinematics: Simple Harmonic Motion Proof',
      description:
        'What is simple harmonic motion? Motion where acceleration is proportional to displacement and directed back towards the centre. These simple harmonic motion examples prove it.',
    },
    'kinematics-piecewise-acceleration': {
      metaTitle: "Piecewise Acceleration: A Cyclist's Motion | IB Maths AI HL",
      metaDescription:
        'Integrate each interval, carrying the velocity at the end of one stage into the next. IB Maths AI HL piecewise acceleration questions with answers.',
      title: 'IB Maths AI HL Kinematics: Piecewise Acceleration',
      description:
        'Piecewise acceleration models need the velocity at the end of one interval to start the next.',
    },
    'kinematics-integration-distance': {
      metaTitle: 'Total Distance ∫|v| dt for v = 1/t − 1 | IB Maths AI HL',
      metaDescription:
        'Find where v changes sign, then integrate |v| for the total distance travelled. IB Maths AI HL total distance question with answers.',
      title: 'IB Maths AI HL Kinematics: Integration (Distance)',
      description:
        'The total distance travelled formula integrates the speed, |v|, over the time interval.',
    },
    'kinematics-relative-motion': {
      metaTitle: 'When Does One Runner Catch Another? | IB Maths AI HL',
      metaDescription:
        'Integrate the difference in velocities to track the gap and find when it closes. IB Maths AI HL relative motion question with answers.',
      title: 'IB Maths AI HL Kinematics: Relative Motion',
      description:
        'Relative velocity is the difference between two velocities, and integrating it gives the change in the gap.',
    },
    'kinematics-collision-problem': {
      metaTitle: "When Do a Juggler's Balls Meet? Collision Problem | AI HL",
      metaDescription:
        'Write both heights as functions of time, set them equal and solve. IB Maths AI HL kinematics collision question with answers.',
      title: 'IB Maths AI HL Kinematics: Collision Problem',
      description: 'Collision problems need both objects at the same height at the same time.',
    },
    'kinematics-mediant-inequality-proof': {
      metaTitle: 'Prove the Mediant Inequality with Average Speed | IB AI HL',
      metaDescription:
        'If a/b < c/d, two journeys show (a + c)/(b + d) lies between them. IB Maths AI HL mediant inequality proof with answers.',
      title: 'IB Maths AI HL Kinematics: Mediant Inequality Proof',
      description:
        'The mediant inequality has a neat kinematic proof using two journeys at different average speeds.',
    },
  },
  'analysis-approaches': {
    'second-derivatives': {
      metaTitle: 'Second Derivative f″(x): Powers, eˣ, ln, Trig | IB AI HL',
      metaDescription:
        'Differentiate twice and use f″ to find unknown constants. IB Maths AI HL second derivative questions with answers.',
      title: 'IB Maths AI HL Second Derivatives',
      description:
        'The second derivative is the derivative of the derivative. It measures how the gradient is changing.',
    },
    'curve-analysis-concavity-monotonicity': {
      metaTitle: 'Concave Up or Down? Increasing or Decreasing? | IB AI HL',
      metaDescription:
        'f″ > 0 concave up, f″ < 0 concave down; f′ sets the direction. Describe curves and find constants. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Curve Analysis: Concavity and Monotonicity',
      description:
        'The concavity of a function depends on the sign of f″(x): positive means concave up, negative means concave down.',
    },
    'concavity-conditions': {
      metaTitle: 'Concave Up AND Increasing: Combine f′ and f″ | IB AI HL',
      metaDescription:
        'Solve f′(x) > 0 and f″(x) > 0 together to find the x-values that meet both conditions. IB Maths AI HL concavity questions with answers.',
      title: 'IB Maths AI HL Concavity Conditions',
      description: 'Concavity conditions combine the signs of f′(x) and f″(x).',
    },
    'stationary-points-classification': {
      metaTitle: 'Classify Stationary Points: Max, Min or Inflection | AI HL',
      metaDescription:
        'Solve f′(x) = 0, then use f″ or the sign of f′ either side on cubic curves. IB Maths AI HL stationary point questions with answers.',
      title: 'IB Maths AI HL Stationary Points: Classification',
      description:
        'The nature of stationary points is decided by the second derivative or by the sign of f′(x) either side.',
    },
    'stationary-points-quartic': {
      metaTitle: 'Stationary Points on Harder Curves: Quartic, ln, eˣ | AI HL',
      metaDescription:
        'The same steps on log, exponential, rational and quartic curves, some with parameters. IB Maths AI HL classifying stationary points with answers.',
      title: 'IB Maths AI HL Stationary Points: Further Curves',
      description:
        'Classifying stationary points on harder curves uses the same steps, with more care over the algebra.',
    },
    'curve-sketching-from-derivative-conditions': {
      metaTitle: 'Sketch f When f < 0, f′ > 0, f″ < 0 | IB Maths AI HL',
      metaDescription:
        'Turn three signs into one shape: below the axis, rising, bending down. IB Maths AI HL curve sketching from derivatives with answers.',
      title: 'IB Maths AI HL Curve Sketching from Derivative Conditions',
      description: 'Curve sketching from derivatives turns three signs into one shape.',
    },
    'concavity-finding-unknown-constant': {
      metaTitle: 'Find k: Concave Up Only for x > 1 | IB Maths AI HL',
      metaDescription:
        'Set f″(1) = 0 for y = x³ − kx² + 4x + 7 and solve for k. IB Maths AI HL concavity question with answers.',
      title: 'IB Maths AI HL Concavity: Finding an Unknown Constant',
      description: 'These concavity questions use the point where f″(x) changes sign.',
    },
    'proof-concavity': {
      metaTitle: 'Prove Every Parabola y = x² + bx + c Is Concave Up | AI HL',
      metaDescription:
        'f″(x) = 2 > 0 for every x, whatever b and c are. IB Maths AI HL concavity proof questions with answers.',
      title: 'IB Maths AI HL Proof: Concavity',
      description: 'To prove a curve is concave up everywhere, show f″(x) > 0 for every x.',
    },
    'decreasing-gradient-point-of-inflection': {
      metaTitle: 'Point of Inflection & Decreasing Gradient on a Cubic | AI HL',
      metaDescription:
        'f″ changes sign at the inflection; where f″ < 0 the gradient is decreasing. IB Maths AI HL point of inflection questions with answers.',
      title: 'IB Maths AI HL Decreasing Gradient and Point of Inflection',
      description:
        'What is a point of inflection? A point where the concavity changes, so f″(x) changes sign. These point of inflection questions find one on a cubic.',
    },
    'optimisation-profit-function': {
      metaTitle: 'Maximise Profit with Calculus: P′(x) = 0 | IB Maths AI HL',
      metaDescription:
        "Differentiate the profit function, solve P′(x) = 0 and confirm it's a maximum. IB Maths AI HL profit maximisation question with answers.",
      title: 'IB Maths AI HL Optimisation: Profit Function',
      description:
        'Profit maximisation finds the output where the derivative of profit is zero and the profit is greatest.',
    },
    'optimisation-volume-of-cuboid': {
      metaTitle: 'Maximum Volume of a Box: Square-Based Cuboid | IB AI HL',
      metaDescription:
        'Use the fixed surface area to write volume in one variable, then differentiate and solve. IB Maths AI HL optimisation questions with answers.',
      title: 'IB Maths AI HL Optimisation: Volume of a Cuboid',
      description:
        'The maximum volume of a box comes from writing volume in one variable, then differentiating.',
    },
    'optimisation-rate-of-change': {
      metaTitle: 'When Is a Rain Barrel Filling Fastest? V″(t) = 0 | AI HL',
      metaDescription:
        'The rate of change is greatest where its derivative, V″(t), is zero. IB Maths AI HL maximum rate of change question with answers.',
      title: 'IB Maths AI HL Optimisation: Rate of Change',
      description: 'The maximum rate of change happens where the second derivative is zero.',
    },
    'optimisation-population-model': {
      metaTitle: 'When Is a Fish Population Growing Fastest? | IB AI HL',
      metaDescription:
        'Maximise the growth rate by setting its derivative to zero. IB Maths AI HL optimisation population model question with answers.',
      title: 'IB Maths AI HL Optimisation: Population Model',
      description:
        'This optimisation population model question finds when the growth rate is greatest.',
    },
    'range-of-exponential-function': {
      metaTitle: 'Range of f(x) = eˣ − ax in Terms of a | IB Maths AI HL',
      metaDescription:
        'Find the minimum at x = ln a, giving the range f(x) ≥ a − a ln a. IB Maths AI HL range of exponential function question with answers.',
      title: 'IB Maths AI HL Range of an Exponential Function',
      description:
        'The range of an exponential function like eˣ − ax depends on its minimum value.',
    },
    'optimisation-hanging-chain': {
      metaTitle: "Catenary: A Hanging Chain's Lowest Point | IB Maths AI HL",
      metaDescription:
        'Model a hanging chain with eˣ and e⁻ˣ, then find its lowest point with calculus. IB Maths AI HL catenary question with answers.',
      title: 'IB Maths AI HL Optimisation: Hanging Chain',
      description: 'A catenary is the curve a hanging chain makes, modelled with eˣ and e⁻ˣ.',
    },
    'graph-interpretation-derivatives': {
      metaTitle: "Read f's Turning Points & Inflections from f′ | IB AI HL",
      metaDescription:
        'Roots of f′ give stationary points of f; turning points of f′ give inflections. IB Maths AI HL derivative graph questions with answers.',
      title: 'IB Maths AI HL Graph Interpretation: Derivatives',
      description:
        "Interpreting derivative graphs means reading f's behaviour from the graph of f′.",
    },
    'definite-integration': {
      metaTitle: 'Definite Integrals: F(b) − F(a) and Unknown Limits | AI HL',
      metaDescription:
        'Integrate powers, trig, eˣ and 1/x exactly, then solve for an unknown limit. IB Maths AI HL definite integration questions with answers.',
      title: 'IB Maths AI HL Definite Integration',
      description:
        'The definite integration formula, ∫ₐᵇ f(x) dx = F(b) − F(a), gives an exact value from an antiderivative.',
    },
    'area-under-a-curve': {
      metaTitle: 'Area Under a Curve Above & Below the x-Axis | IB AI HL',
      metaDescription:
        'Split at the roots and add the absolute value of each region: polynomial, trig and log curves. IB Maths AI HL area questions with answers.',
      title: 'IB Maths AI HL Area Under a Curve',
      description: 'These area under a curve questions include regions above and below the x-axis.',
    },
    'area-enclosed-by-curve-and-x-axis': {
      metaTitle: 'Area Between y = 9 − x² and the x-Axis | IB Maths AI HL',
      metaDescription:
        'Find where the curve crosses the axis (x = ±3), then integrate between them. IB Maths AI HL enclosed area questions with answers.',
      title: 'IB Maths AI HL Area Enclosed by a Curve and the x-Axis',
      description:
        'The area enclosed by a curve and the x axis uses the crossing points as the limits.',
    },
    'area-signed-and-unsigned-integrals': {
      metaTitle: 'Why ∫y dx ≠ Area When a Curve Dips Below | IB AI HL',
      metaDescription:
        'Regions below the axis count as negative in an integral. Compare signed and true area for a cubic. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Area: Signed and Unsigned Integrals',
      description:
        'Signed area counts regions below the axis as negative, so an integral can be smaller than the area.',
    },
    'area-between-two-curves-trigonometric': {
      metaTitle: 'Area Between y = sin x and y = cos x | IB Maths AI HL',
      metaDescription:
        'Find exact intersections, then integrate the upper curve minus the lower: trig and exponential examples. IB Maths AI HL with answers.',
      title: 'IB Maths AI HL Area Between Two Curves: Exponential and Trigonometric',
      description:
        'These area between two curves examples need exact intersection points as limits.',
    },
    'intersection-of-exponential-curves': {
      metaTitle: 'Where Do y = e^(−x²) and y = e^(−x) Meet? | IB AI HL',
      metaDescription:
        'Same base, so set the powers equal: x² = x gives x = 0 or 1. IB Maths AI HL exponential intersection question with answers.',
      title: 'IB Maths AI HL Intersection of Exponential Curves',
      description:
        'The intersection of exponential curves with the same base comes from equating the powers.',
    },
    'properties-of-definite-integrals': {
      metaTitle: 'Properties of Definite Integrals: Split, Add, Scale | AI HL',
      metaDescription:
        'Use given integral values to find new ones without integrating. IB Maths AI HL properties of definite integrals questions with answers.',
      title: 'IB Maths AI HL Properties of Definite Integrals',
      description:
        'The properties of definite integrals let you split, combine and scale integrals without integrating.',
    },
    'integration-by-recognition-reverse-chain-rule': {
      metaTitle: '∫ln x dx via d/dx(x ln x): Recognition | IB Maths AI HL',
      metaDescription:
        'Differentiate x ln x, rearrange, and integrate ln x without integration by parts. IB Maths AI HL reverse chain rule question with answers.',
      title: 'IB Maths AI HL Integration by Recognition (Reverse Chain Rule)',
      description:
        'The reverse chain rule, or integration by recognition, uses a known derivative to integrate.',
    },
  },
  integration: {
    'power-rule-fractional-negative-indices': {
      metaTitle: 'Integration Power Rule: ∫xⁿ dx = xⁿ⁺¹/(n + 1) + c | AI HL',
      metaDescription:
        'Works for fractional and negative powers like x^(2/3), for every n except −1. IB Maths AI HL integration power rule questions with answers.',
      title: 'IB Maths AI HL Integration: Power Rule (Fractional and Negative Indices)',
      description:
        'The integration power rule formula, ∫xⁿ dx = xⁿ⁺¹ ÷ (n + 1) + c, works for any n except −1.',
    },
    'power-rule-roots-surds': {
      metaTitle: 'Integrate Square Roots & Cube Roots as Powers | IB AI HL',
      metaDescription:
        'Rewrite ½∛x as ½x^(1/3), then apply the power rule. IB Maths AI HL integrating surds questions with answers.',
      title: 'IB Maths AI HL Integration: Power Rule (Roots and Surds)',
      description:
        'Integrating square roots and cube roots starts with rewriting them as fractional powers.',
    },
    'integration-of-trigonometric-functions': {
      metaTitle: '∫cos x = sin x, ∫sin x = −cos x: Integrate Trig | AI HL',
      metaDescription:
        'Find y from dy/dx = 3 cos x, and integrate 3 sin 2x − 2 cos 3x. IB Maths AI HL trig integration questions with answers.',
      title: 'IB Maths AI HL Integration of Trigonometric Functions',
      description:
        'Integrating trig functions reverses differentiation: ∫cos x dx = sin x and ∫sin x dx = −cos x.',
    },
    'integration-of-exponential-functions': {
      metaTitle: 'Integrate eˣ: dy/dx = 5eˣ → y = 5eˣ + c | IB Maths AI HL',
      metaDescription:
        'eˣ integrates to itself; multiples just carry through. Find y from dy/dx. IB Maths AI HL exponential integration questions with answers.',
      title: 'IB Maths AI HL Integration of Exponential Functions',
      description:
        'Integration of exponential functions is simple for eˣ, which integrates to itself.',
    },
    'integration-of-1-x': {
      metaTitle: 'Integral of 1/x = ln|x| + c | IB Maths AI HL',
      metaDescription:
        "The one case the power rule can't handle. Extend it to 1/(ax + b) and 1/(x ln x). IB Maths AI HL integral of 1/x questions with answers.",
      title: 'IB Maths AI HL Integration of 1/x',
      description: 'The integral of 1/x is ln|x| + c, the one case the power rule cannot cover.',
    },
    'integration-by-substitution-linear': {
      metaTitle: 'Integration by Substitution: Choose u Step by Step | AI HL',
      metaDescription:
        'Replace part of the integrand with u, change dx to du, integrate and substitute back: linear, trig, rational, exponential. IB AI HL, with answers.',
      title: 'IB Maths AI HL Integration by Substitution',
      description:
        'The integration by substitution formula replaces part of the integrand with u, so the integral becomes simpler.',
    },
    'integration-of-trig-with-linear-argument': {
      metaTitle: 'Integral of sin³x and cos(2 − 3x) | IB Maths AI HL',
      metaDescription:
        'Split sin³x with sin²x = 1 − cos²x; divide by the coefficient of x for linear arguments. IB Maths AI HL trig integration questions with answers.',
      title: 'IB Maths AI HL Integration of Trig with a Linear Argument',
      description:
        'The integral of sin^3x uses sin²x = 1 − cos²x to split it into parts that can be integrated.',
    },
    'integration-of-exponential-with-linear-argument': {
      metaTitle: 'Integral of tan x = −ln|cos x| + c, and e^(5x + 2) | AI HL',
      metaDescription:
        'Write tan x as sin x/cos x and spot the reverse chain rule; divide by 5 for e^(5x + 2). IB Maths AI HL integration questions with answers.',
      title: 'IB Maths AI HL Integration of tan x and Exponentials with a Linear Argument',
      description:
        'The integral of tan x comes from writing it as sin x ÷ cos x, giving −ln|cos x| + c.',
    },
    'integration-with-initial-condition': {
      metaTitle: 'Find y from dy/dx and One Point: Initial Conditions | AI HL',
      metaDescription:
        'Integrate, add c, substitute the known point to fix c. Every function type. IB Maths AI HL initial condition questions with answers.',
      title: 'IB Maths AI HL Integration with an Initial Condition',
      description:
        'Integration with initial conditions finds one exact curve from the family F(x) + c.',
    },
    'simplify-then-integrate-rational': {
      metaTitle: 'Integrate (4x² + 3)/2x: Split the Fraction First | IB AI HL',
      metaDescription:
        'Divide each term by 2x to get 2x + 3/(2x), then integrate term by term. IB Maths AI HL integrating fractions question with answers.',
      title: 'IB Maths AI HL Simplify then Integrate (Rational)',
      description:
        'Integrating fractions with a single-term denominator starts with dividing each term.',
    },
    'integration-involving-constant-substitution-polynomial': {
      metaTitle: 'Integrate 4cos³x sin x + kx² + 1 with Unknown k | AI HL',
      metaDescription:
        'Treat k as a number and use substitution for the cos³x sin x term. IB Maths AI HL integration with a constant question with answers.',
      title: 'IB Maths AI HL Integration Involving a Constant',
      description:
        'Integration with an unknown constant treats k like any number during integration.',
    },
    'simplify-then-integrate-exponential': {
      metaTitle: 'Integrate (e²ˣ − e⁻²ˣ)/eˣ: Index Laws First | IB AI HL',
      metaDescription:
        'Divide to get eˣ − e⁻³ˣ, then integrate each term. IB Maths AI HL simplify-then-integrate question with answers.',
      title: 'IB Maths AI HL Simplify then Integrate (Exponential)',
      description: 'Integrating exponentials divided by eˣ is easiest after using index laws.',
    },
    'use-of-trigonometric-identity-integration': {
      metaTitle: 'Integrate sin²x with cos 2x = 1 − 2sin²x | IB Maths AI HL',
      metaDescription:
        'Rewrite sin²x as (1 − cos 2x)/2, then integrate directly. IB Maths AI HL integration using trig identities with answers.',
      title: 'IB Maths AI HL Trigonometric Identity and Integration',
      description:
        'Integration using trig identities turns sin²x into an expression that can be integrated directly.',
    },
    'area-between-curve-and-y-axis': {
      metaTitle: 'Area Between a Curve and the y-Axis: ∫x dy | IB AI HL',
      metaDescription:
        'Write x as a function of y and integrate between the y-limits. IB Maths AI HL area against the y-axis questions with answers.',
      title: 'IB Maths AI HL Area Between a Curve and the y-Axis',
      description:
        'The area between a curve and the y axis uses x as a function of y, with y-limits.',
    },
    'volume-of-revolution-x-axis': {
      metaTitle: 'Volume of Revolution: V = π∫y² dx and π∫x² dy | IB AI HL',
      metaDescription:
        'Rotate regions about the x-axis, the y-axis and vertical lines, then integrate. IB Maths AI HL volume of revolution questions with answers.',
      title: 'IB Maths AI HL Volume of Revolution',
      description:
        'A volume of revolution is the solid formed by rotating a region through 2π about an axis.',
    },
    'area-and-volume-x-axis': {
      metaTitle: 'Area and Volume of Revolution for the Same Region | AI HL',
      metaDescription:
        'Use the same limits for ∫y dx and π∫y² dx: y = √x sin x and y = √(x³ + 9). IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Area and Volume (x-Axis)',
      description:
        'Area and volume of revolution questions use the same limits for both integrals.',
    },
    'area-and-integration-proof': {
      metaTitle: 'Area Bounded by y = ln x and the Axes | IB Maths AI HL',
      metaDescription:
        'Integrate with respect to y, using x = eʸ, to avoid ∫ln x dx. IB Maths AI HL area proof question with answers.',
      title: 'IB Maths AI HL Area and Integration Proof',
      description:
        'This area under a curve proof uses integration with respect to y to avoid ∫ln x dx.',
    },
    'volume-proof-cone': {
      metaTitle: 'Prove V = ⅓πr²h by Integration | IB Maths AI HL',
      metaDescription:
        'Rotate y = (r/h)x from 0 to h about the x-axis and integrate π∫y² dx. IB Maths AI HL cone volume proof with answers.',
      title: 'IB Maths AI HL Volume Proof (Cone)',
      description:
        'The volume of a cone by integration comes from rotating a line through the origin.',
    },
    'volume-proof-sphere': {
      metaTitle: 'Prove V = ⁴⁄₃πr³: Rotate a Semicircle | IB Maths AI HL',
      metaDescription:
        'Rotate y = √(r² − x²) from −r to r about the x-axis and integrate. IB Maths AI HL sphere volume proof with answers.',
      title: 'IB Maths AI HL Volume Proof (Sphere)',
      description: 'The volume of a sphere by integration rotates the semicircle y = √(r² − x²).',
    },
    'area-ratio-algebraic-proof': {
      metaTitle: 'Areas Next to y = x³ Are Always in a Fixed Ratio | AI HL',
      metaDescription:
        "Find both areas in terms of the limit and show the ratio doesn't depend on it. IB Maths AI HL integration proof with answers.",
      title: 'IB Maths AI HL Area Ratio (Algebraic Proof)',
      description:
        'This ratio of areas holds for every value of the limit, which is what makes it a proof.',
    },
    'volume-about-horizontal-line': {
      metaTitle: 'Volume of Revolution About y = 1 | IB Maths AI HL',
      metaDescription:
        'Measure the radius from the line, not the x-axis: V = π∫(1 − y)² dx for part of y = cos x. IB Maths AI HL volume question with answers.',
      title: 'IB Maths AI HL Volume About a Horizontal Line',
      description:
        'A volume about a horizontal line measures the radius from that line, not from the x-axis.',
    },
  },
  'differential-equations': {
    'forming-des': {
      metaTitle: 'Form a Differential Equation from a Rate Sentence | AI HL',
      metaDescription:
        "'Grows at a rate proportional to its size' becomes dN/dt = kN. Practise bacteria, cooling and more. IB Maths AI HL questions with answers.",
      title: 'IB Maths AI HL Forming Differential Equations',
      description:
        'These forming differential equations questions translate a sentence about a rate into an equation.',
    },
    'integration-general-solution': {
      metaTitle: 'General Solution of dy/dx = f(x) by Integration | IB AI HL',
      metaDescription:
        'Integrate directly and keep + C: a family of curves. Also a simple system. IB Maths AI HL general solution questions with answers.',
      title: 'IB Maths AI HL Integration: General Solution',
      description:
        'The general solution of a differential equation includes an arbitrary constant, so it describes a family of curves.',
    },
    'separation-of-variables': {
      metaTitle: 'Separation of Variables: Solve dy/dx = f(x)g(y) | IB AI HL',
      metaDescription:
        'Put every y with dy and every x with dx, integrate both sides, then apply initial conditions. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Separation of Variables',
      description: 'Separation of variables puts every y on one side and every x on the other.',
    },
    'applied-de-radioactive-decay': {
      metaTitle: 'Radioactive Decay DE: dm/dt = −km Solved | IB AI HL',
      metaDescription:
        'Separate and integrate to get m = m₀e^(−kt), then find k and half-lives. IB Maths AI HL radioactive decay questions with answers.',
      title: 'IB Maths AI HL Applied DE: Radioactive Decay',
      description:
        'A radioactive decay differential equation, dm/dt = −km, gives exponential decay.',
    },
    'applied-de-population-growth': {
      metaTitle: 'Population Growth DE: dN/dt = kN | IB Maths AI HL',
      metaDescription:
        'Solve for N = N₀e^(kt) and analyse the long-term behaviour of coupled populations. IB Maths AI HL population growth questions with answers.',
      title: 'IB Maths AI HL Applied DE: Population Growth',
      description:
        'A population growth differential equation, dN/dt = kN, models growth proportional to size.',
    },
    'applied-de-volume-rate': {
      metaTitle: 'Balloon Inflation: dV/dt = k/V Solved | IB Maths AI HL',
      metaDescription:
        'Separate to V dV = k dt, integrate, and use the data to find the constants. IB Maths AI HL rate of change DE question with answers.',
      title: 'IB Maths AI HL Applied DE: Volume and Rate',
      description:
        'This rate of change differential equation has dV/dt = k/V, which separates neatly.',
    },
    'applied-de-kinematics': {
      metaTitle: 'Air Resistance DE & Terminal Velocity | IB Maths AI HL',
      metaDescription:
        'Model a falling object with dv/dt, solve it and find the terminal velocity. IB Maths AI HL differential equations in kinematics with answers.',
      title: 'IB Maths AI HL Applied DE: Kinematics',
      description:
        'Differential equations in kinematics model forces such as air resistance through dv/dt.',
    },
    'applied-de-modelling': {
      metaTitle: 'Raindrop Evaporation DE: Rate ∝ Surface Area | IB AI HL',
      metaDescription:
        'Turn the physical rule into a differential equation, solve it and predict when the drop disappears. IB Maths AI HL modelling question with answers.',
      title: 'IB Maths AI HL Applied DE: Modelling',
      description:
        'Differential equation modelling turns a physical rule into an equation and then a prediction.',
    },
    'slope-fields-solution-curves': {
      metaTitle: 'Slope Fields: Sketch Solution Curves & Equilibria | AI HL',
      metaDescription:
        'Read the gradient at each point, sketch solutions without solving and find equilibrium lines. IB Maths AI HL slope field questions with answers.',
      title: 'IB Maths AI HL Slope Fields and Solution Curves',
      description:
        'Slope fields show the gradient of every solution at each point, so solution curves can be sketched without solving.',
    },
    'eulers-method': {
      metaTitle: "Euler's Method: yₙ₊₁ = yₙ + h f(xₙ, yₙ) | IB Maths AI HL",
      metaDescription:
        "Step forward numerically for first-order equations, coupled systems and second-order equations. IB Maths AI HL Euler's method questions with answers.",
      title: "IB Maths AI HL Euler's Method",
      description: "The Euler's method formula steps forward with yₙ₊₁ = yₙ + h × f(xₙ, yₙ).",
    },
    'separable-differential-equations': {
      metaTitle: 'Solve dy/dx = xeʸ Exactly by Separating | IB Maths AI HL',
      metaDescription:
        "Separate, integrate and use y = 0.3 at x = 1, then compare with Euler's method. IB Maths AI HL separable DE question with answers.",
      title: 'IB Maths AI HL Separable Differential Equations',
      description:
        "Separable differential equations can be solved exactly, which allows a check on Euler's method.",
    },
    'percentage-error': {
      metaTitle: "Percentage Error of Euler's Method vs Exact | IB AI HL",
      metaDescription:
        'Percentage error = |estimate − exact| ÷ exact × 100%. Compare an Euler estimate with the true value. IB Maths AI HL questions with answers.',
      title: 'IB Maths AI HL Percentage Error',
      description:
        'Percentage error compares an estimate with the exact value: |estimate − exact| ÷ exact × 100%.',
    },
    'coupled-systems-general-solution': {
      metaTitle: 'Coupled Differential Equations: Eigenvalue Solution | AI HL',
      metaDescription:
        'Write the system as a matrix, find eigenvalues and eigenvectors, then the general solution. IB Maths AI HL coupled system questions with answers.',
      title: 'IB Maths AI HL Coupled Systems: General Solution',
      description:
        'Coupled differential equations link two rates, each depending on both variables.',
    },
    'phase-portraits': {
      metaTitle: 'Phase Portraits: Saddle, Node, Spiral, Centre | IB AI HL',
      metaDescription:
        'Real eigenvalues of opposite sign: saddle. Same sign: node. Complex: spiral or centre. Sketch each. IB Maths AI HL phase portrait questions with answers.',
      title: 'IB Maths AI HL Phase Portraits',
      description:
        'Phase portraits show how a coupled system moves through the xy-plane over time.',
    },
    'numerical-methods-technology': {
      metaTitle: 'Solve Differential Equations Numerically on a GDC | AI HL',
      metaDescription:
        'Use technology to sketch x against t and y against x when no exact solution exists. IB Maths AI HL numerical methods questions with answers.',
      title: 'IB Maths AI HL Numerical Methods: Technology',
      description:
        'Numerical methods for differential equations let technology draw solutions that cannot be found exactly.',
    },
    'particular-solution-with-initial-conditions': {
      metaTitle: 'Particular Solution of a Coupled System | IB Maths AI HL',
      metaDescription:
        'Substitute the initial conditions into the general solution to fix both constants. IB Maths AI HL particular solution question with answers.',
      title: 'IB Maths AI HL Particular Solution with Initial Conditions',
      description:
        'A particular solution fixes the constants in the general solution using initial conditions.',
    },
    'eigenvalues-and-particular-solution': {
      metaTitle: 'Eigenvalues to a Particular Solution of a System | AI HL',
      metaDescription:
        'Each eigenvalue gives one exponential term; use initial values to find the constants. IB Maths AI HL eigenvalue DE question with answers.',
      title: 'IB Maths AI HL Eigenvalues and Particular Solution',
      description:
        'Eigenvalues and differential equations meet in coupled systems: each eigenvalue gives one exponential term.',
    },
    'technology-solution-curves-and-graphs': {
      metaTitle: 'Sketch Solution Curves for a Coupled System on a GDC | AI HL',
      metaDescription:
        'Plot how each variable changes from the initial values, including x against t. IB Maths AI HL solution curve questions with answers.',
      title: 'IB Maths AI HL Technology: Solution Curves and Graphs',
      description: 'Solution curves show how each variable changes from the initial values.',
    },
    'eigenvalues-population-model': {
      metaTitle: 'Two Populations: What the Eigenvalues Tell You | AI HL',
      metaDescription:
        'Positive eigenvalue: growth. Negative: decline. Describe how both populations change over time. IB Maths AI HL population model with answers.',
      title: 'IB Maths AI HL Eigenvalues and Population Model',
      description:
        'In an eigenvalues population model, the sign of each eigenvalue shows growth or decline.',
    },
    'population-model-foxes-and-rabbits': {
      metaTitle: 'Predator-Prey Model: Foxes and Rabbits | IB Maths AI HL',
      metaDescription:
        "Each population's growth depends on the other: analyse with phase portraits and interpret in context. IB Maths AI HL predator-prey questions with answers.",
      title: 'IB Maths AI HL Population Model: Foxes and Rabbits',
      description:
        "A predator prey model links two populations, where each one's growth depends on the other.",
    },
    'long-term-ratio': {
      metaTitle: 'Long-Term Ratio of Foxes to Rabbits: Eigenvector | AI HL',
      metaDescription:
        'The eigenvector of the largest eigenvalue sets the long-run ratio as t grows. IB Maths AI HL long-term behaviour question with answers.',
      title: 'IB Maths AI HL Long-Term Ratio',
      description:
        'Long term behaviour is controlled by the eigenvector of the largest eigenvalue.',
    },
    'equilibrium-state-substitution': {
      metaTitle: 'Equilibrium Points of Sharks & Fish: Shift to Origin | AI HL',
      metaDescription:
        'Set both rates to zero for the equilibrium, then substitute to move it to the origin. IB Maths AI HL equilibrium question with answers.',
      title: 'IB Maths AI HL Equilibrium State and Substitution',
      description:
        'Equilibrium points are where both rates are zero, so the populations stay constant.',
    },
    'variable-substitution-to-standard-form': {
      metaTitle: 'Second-Order DE as a Coupled System: y = dx/dt | AI HL',
      metaDescription:
        'Let y = dx/dt to turn a second-order equation into two first-order ones, then solve. IB Maths AI HL second-order DE questions with answers.',
      title: 'IB Maths AI HL Variable Substitution to Standard Form',
      description:
        'Second order differential equations become coupled systems when you let y = dx/dt.',
    },
    'eigenvalues-of-transformed-system': {
      metaTitle: 'Classify an Equilibrium from Its Eigenvalues | IB AI HL',
      metaDescription:
        "After shifting to the origin, find the eigenvalues and decide whether it's a saddle, node, spiral or centre. IB Maths AI HL, with answers.",
      title: 'IB Maths AI HL Eigenvalues of a Transformed System',
      description:
        'The eigenvalues of a system after shifting to the origin decide the type of equilibrium.',
    },
    'stability-of-solutions-2nd-order-odes': {
      metaTitle: 'Stability of Second-Order ODEs Using Eigenvalues | AI HL',
      metaDescription:
        'Negative real parts: solutions settle (stable). Any positive: they grow (unstable). IB Maths AI HL stability questions with answers.',
      title: 'IB Maths AI HL Stability of Solutions (Second-Order ODEs)',
      description:
        'The stability of differential equations depends on whether solutions settle down or grow.',
    },
    'verification-of-exact-solution-non-linear-ode': {
      metaTitle: 'Verify y = sin t Solves a Non-Linear ODE | IB Maths AI HL',
      metaDescription:
        'Substitute the solution and its derivatives back in and show both sides match. IB Maths AI HL verification question with answers.',
      title: 'IB Maths AI HL Verification of an Exact Solution (Non-Linear ODE)',
      description:
        'To verify a solution of a differential equation, substitute it and its derivatives back in.',
    },
  },
}
// export const metaData: any = {
//   'logarithms-and-exponentials': {
//     'solving-log-equations': {
//       metaTitle: 'Solving Logarithmic Equations | IB Maths AI HL ',
//       metaDescription:
//         'Practise solving logarithmic equations in base 10 for IB Maths AI HL: rewrite each log in exponential form and check every solution.',
//       title: 'IB Maths AI HL 1.9 Solving Log Equations (Base 10)',
//       description:
//         'Solving logarithmic equations in base 10 rests on one definition: if log₁₀ x = k, then x = 10ᵏ. These questions apply it to equations of increasing difficulty.',
//     },
//     'laws-of-logarithms-expressing-in-terms-of-p-and-q': {
//       metaTitle: 'Log Rules Questions | IB Maths AI HL ',
//       metaDescription:
//         'Use the log rules in IB Maths AI HL to rewrite logarithms in terms of p and q, applying the product, quotient and power laws.',
//       title: 'IB Maths AI HL 1.9 Laws of Logarithms: Expressing in Terms of p and q',
//       description:
//         'These questions give you log a = p and log b = q, then ask you to rewrite other logarithms using them. Each one is a direct test of the log rules.',
//     },
//     'solving-equations-using-log-laws': {
//       metaTitle: 'Laws of Logarithms Questions | IB AI HL ',
//       metaDescription:
//         'Solve equations with the laws of logarithms in IB Maths AI HL: combine logs into one, then remove it and check each solution.',
//       title: 'IB Maths AI HL 1.9 Solving Equations Using Log Laws',
//       description:
//         'When an equation has more than one logarithm, the laws of logarithms combine them into one. These questions practise combining, solving and checking.',
//     },
//     'solving-exponential-equations-using-logarithms': {
//       metaTitle: 'Exponential Equations Questions | IB AI HL ',
//       metaDescription:
//         'Exponential equations questions for IB Maths AI HL: take logarithms of both sides to solve for an unknown in the power, with mark scheme working.',
//       title: 'IB Maths AI HL 1.9 Solving Exponential Equations Using Logarithms',
//       description:
//         'When the unknown sits in the power, logarithms bring it down. These exponential equations questions practise taking logs of both sides and solving exactly or with a GDC.',
//     },
//     'solving-equations-with-non-standard-bases': {
//       metaTitle: 'Change of Base Formula | IB Maths AI HL ',
//       metaDescription:
//         'Use the change of base formula in IB Maths AI HL to evaluate and solve logarithmic equations with non-standard bases, with mark scheme working.',
//       title: 'IB Maths AI HL 1.9 Solving Equations with Non-Standard Bases',
//       description:
//         'A calculator works in base 10 and base e, so other bases need the change of base formula: logₐ x = log x ÷ log a. These questions use it to evaluate and solve.',
//     },
//   },
//   matrices: {
//     'matrix-addition-and-subtraction': {
//       metaTitle: 'Matrices Questions | IB Maths AI HL ',
//       metaDescription:
//         'Matrices questions for IB Maths AI HL on adding and subtracting matrices, including when the operation is defined and solving for unknowns.',
//       title: 'IB Maths AI HL 1.14 Matrix Addition & Subtraction Questions',
//       description:
//         'Matrices of the same order are added and subtracted element by element. These matrices questions practise the operation and use it to find unknown entries.',
//     },
//     'matrix-multiplication': {
//       metaTitle: 'Matrix Multiplication Questions | IB AI HL ',
//       metaDescription:
//         'Matrix multiplication questions for IB Maths AI HL: check the orders, multiply rows by columns and see why AB is not always BA.',
//       title: 'IB Maths AI HL 1.14 Matrix Multiplication Questions',
//       description:
//         'Matrix multiplication combines rows of the first matrix with columns of the second, so order matters. These matrix multiplication questions practise the method by hand and with a GDC.',
//     },
//     'matrix-equations': {
//       metaTitle: 'Solving Systems of Equations Using Matrices ',
//       metaDescription:
//         'Matrix equations for IB Maths AI HL: write simultaneous equations as AX = B, then practise solving systems of equations using matrices.',
//       title: 'IB Maths AI HL 1.14 Matrix Equations Questions',
//       description:
//         'Any set of simultaneous linear equations can be written as one matrix equation, AX = B. These questions practise solving systems of equations using matrices.',
//     },
//     'inverse-of-3x3-Matrix': {
//       metaTitle: 'Inverse of a Matrix: 3×3 Questions | IB AI HL ',
//       metaDescription:
//         'Find the inverse of a matrix in IB Maths AI HL for 3×3 matrices, check it is non-singular and use it to solve matrix equations.',
//       title: 'IB Maths AI HL 1.14 Inverse of a 3×3 Matrix Questions',
//       description:
//         'The inverse of a matrix undoes it, and exists only when the determinant is non-zero. These questions find the inverse of 3×3 matrices with a GDC and apply it.',
//     },
//     'inverse-of-2x2-matrix': {
//       metaTitle: 'Inverse Matrix Questions: 2×2 | IB Maths AI HL ',
//       metaDescription:
//         'Inverse matrix questions for IB Maths AI HL: find the inverse of a 2×2 matrix by hand using the determinant and the swap-and-negate rule.',
//       title: 'IB Maths AI HL 1.14 Inverse of a 2×2 Matrix Questions',
//       description:
//         'A 2×2 inverse can be found by hand in one line. These inverse matrix questions practise the formula and the determinant check that comes before it.',
//     },
//   },
//   'graph-theory': {
//     'adjacency-matrices': {
//       metaTitle: 'Adjacency Matrix Questions | IB Maths AI HL ',
//       metaDescription:
//         'Adjacency matrix questions for IB Maths AI HL: build the matrix from a graph and read degrees, loops and connections from it.',
//       title: 'IB Maths AI HL 3.15 Adjacency Matrix Questions',
//       description:
//         'An adjacency matrix records every connection in a graph as a number. These questions build the adjacency matrix from a graph and read information back from it.',
//     },
//     'kruskals-algorithm': {
//       metaTitle: "Kruskal's Algorithm Questions | IB Maths AI HL ",
//       metaDescription:
//         "Kruskal's algorithm questions for IB Maths AI HL: build a minimum spanning tree by choosing the shortest edges that avoid cycles.",
//       title: "IB Maths AI HL 3.16 Kruskal's Algorithm Questions",
//       description:
//         "Kruskal's algorithm builds a minimum spanning tree by adding the shortest available edge each time, as long as it does not form a cycle.",
//     },
//     'prims-algorithm': {
//       metaTitle: "Prim's Algorithm Questions | IB Maths AI HL ",
//       metaDescription:
//         "Prim's algorithm questions for IB Maths AI HL: grow a minimum spanning tree from one vertex, on graphs and distance tables.",
//       title: "IB Maths AI HL 3.16 Prim's Algorithm Questions",
//       description:
//         "Prim's algorithm grows a minimum spanning tree from a single vertex, adding the nearest unconnected vertex each time. It works on both graphs and distance tables.",
//     },
//     'minimum-spanning-trees': {
//       metaTitle: 'Minimum Spanning Tree Questions | IB AI HL ',
//       metaDescription:
//         'Minimum spanning tree questions for IB Maths AI HL: find the tree, state its total weight and interpret the result in a real context.',
//       title: 'IB Maths AI HL 3.16 Minimum Spanning Tree Questions',
//       description:
//         'A minimum spanning tree connects every vertex at the lowest total weight. These minimum spanning tree questions ask you to find it, state its weight and explain what it means.',
//     },
//     'travelling-salesman-problem-nearest-neighbour-algorithm': {
//       metaTitle: 'Travelling Salesman Problem | IB Maths AI HL ',
//       metaDescription:
//         'The travelling salesman problem in IB Maths AI HL: find an upper bound for the shortest tour with the nearest neighbour algorithm.',
//       title: 'IB Maths AI HL 3.16 Travelling Salesman Problem: Nearest Neighbour',
//       description:
//         'The travelling salesman problem asks for the shortest route that visits every vertex and returns to the start. The nearest neighbour algorithm gives an upper bound for it.',
//     },
//   },
//   'statistics-and-probability': {
//     'coefficient-of-determination-r2': {
//       metaTitle: 'Coefficient of Determination R² | IB AI HL ',
//       metaDescription:
//         'The coefficient of determination R² in IB Maths AI HL: measure how well a model fits the data and compare regression models.',
//       title: 'IB Maths AI HL 4.13 Coefficient of Determination R² Questions',
//       description:
//         'The coefficient of determination, R², measures how much of the variation in the data a model explains. These questions find it on a GDC and use it to compare models.',
//     },
//     'confidence-intervals-unknown-variance-t-distribution': {
//       metaTitle: 'Confidence Interval: t-Distribution | IB AI HL ',
//       metaDescription:
//         'Confidence interval questions for IB Maths AI HL when the variance is unknown: use the t-distribution and unbiased estimates.',
//       title: 'IB Maths AI HL 4.16 Confidence Intervals: Unknown Variance (t-Distribution)',
//       description:
//         "When the population variance is unknown, a confidence interval uses the t-distribution and the sample's unbiased estimate of variance. These questions build a confidence interval for the mean.",
//     },
//     'confidence-intervals-known-variance-z-distribution': {
//       metaTitle: 'Confidence Interval Formula | IB Maths AI HL ',
//       metaDescription:
//         'Apply the confidence interval formula in IB Maths AI HL when the population variance is known, using the z-distribution.',
//       title: 'IB Maths AI HL 4.16 Confidence Intervals: Known Variance (z-Distribution)',
//       description:
//         'With a known population variance, the confidence interval formula is x̄ ± z × σ/√n. These questions apply it and interpret the width of the interval.',
//     },
//     'poisson-probability-calculations': {
//       metaTitle: 'Poisson Distribution Questions | IB Maths AI HL ',
//       metaDescription:
//         'Poisson distribution questions for IB Maths AI HL: exact and cumulative probabilities for events at a constant average rate.',
//       title: 'IB Maths AI HL 4.17 Poisson Probability Questions',
//       description:
//         'The Poisson distribution models how many times an event happens in a fixed interval. These Poisson distribution questions find exact and cumulative probabilities on a GDC.',
//     },
//     'poisson-mean-and-variance': {
//       metaTitle: 'Poisson Distribution Formula | IB AI HL ',
//       metaDescription:
//         'The Poisson distribution formula and its mean and variance in IB Maths AI HL: use E(X) = Var(X) = λ to test whether the model fits.',
//       title: 'IB Maths AI HL 4.17 Poisson Mean and Variance Questions',
//       description:
//         'The Poisson distribution formula, P(X = x) = e⁻λ λˣ ÷ x!, has one parameter, and both the mean and the variance equal λ. These questions use that property to test whether a Poisson model fits.',
//     },
//   },
//   'statistical-hypothesis-testing': {
//     'one-sample-z-test-t-test': {
//       metaTitle: 'Hypothesis Testing: z and t Tests | IB AI HL ',
//       metaDescription:
//         'Hypothesis testing for a population mean in IB Maths AI HL: choose a z-test or t-test, find the p-value and conclude in context.',
//       title: 'IB Maths AI HL 4.18 Hypothesis Testing: One-Sample z-Test and t-Test',
//       description:
//         'Hypothesis testing for a mean starts with one choice: a z-test when the population standard deviation is known, a t-test when it is not. These questions practise both.',
//     },
//     'one-sample-t-test': {
//       metaTitle: 'Hypothesis Testing Questions | IB AI HL ',
//       metaDescription:
//         'Hypothesis testing questions for IB Maths AI HL using the one-sample t-test when the population variance is unknown, with mark scheme working.',
//       title: 'IB Maths AI HL 4.18 One-Sample t-Test Questions',
//       description:
//         'These hypothesis testing questions use the one-sample t-test, the standard choice when the population variance must be estimated from the sample.',
//     },
//     'critical-region-one-sample-z-test': {
//       metaTitle: 'Critical Region Hypothesis Testing | IB AI HL ',
//       metaDescription:
//         'Critical region hypothesis testing for IB Maths AI HL: find the critical region for a one-sample z-test and decide whether to reject H₀.',
//       title: 'IB Maths AI HL 4.18 Critical Region Questions (One-Sample z-Test)',
//       description:
//         'The critical region in hypothesis testing is the set of values that lead you to reject H₀. These questions find its boundary for a one-sample z-test.',
//     },
//     'one-sample-z-test-known-sigma': {
//       metaTitle: 'p-Value Hypothesis Testing: z-Test | IB AI HL ',
//       metaDescription:
//         'p-value hypothesis testing for IB Maths AI HL with a one-sample z-test when the population standard deviation is known, concluding in context.',
//       title: 'IB Maths AI HL 4.18 One-Sample z-Test Questions (Known σ)',
//       description:
//         'When σ is known, the one-sample z-test gives a p-value directly. These p-value hypothesis testing questions practise reading it correctly and concluding in context.',
//     },
//     'type-i-and-type-ii-error-normal-distribution': {
//       metaTitle: 'Type 1 and Type 2 Errors Questions | IB AI HL ',
//       metaDescription:
//         'Type 1 and type 2 errors for IB Maths AI HL with the normal distribution: define each error and calculate its probability.',
//       title: 'IB Maths AI HL 4.18 Type I and Type II Error Questions',
//       description:
//         'A type 1 error rejects a true null hypothesis; a type 2 error fails to reject a false one. These questions define type 1 and type 2 errors and calculate their probabilities.',
//     },
//   },
//   'indices-surds': {
//     'evaluating-fractional-indices-unit-fractions': {
//       metaTitle: 'Evaluating Fractional Indices | IB Maths AI HL ',
//       metaDescription:
//         'Practise evaluating fractional indices in IB Maths AI HL without a calculator, such as 8^(1/3) and 81^(1/4).',
//       title: 'IB Maths AI HL Evaluating Fractional Indices (Unit Fractions)',
//       description:
//         'Evaluating fractional indices with a unit fraction means taking a root: a^(1/n) is the nth root of a.',
//     },
//     'evaluating-rational-negative-indices': {
//       metaTitle: 'Evaluating Rational Indices | IB Maths AI HL ',
//       metaDescription:
//         'Practise evaluating rational indices in IB Maths AI HL, including negative ones, giving exact values without a calculator.',
//       title: 'IB Maths AI HL Evaluating Rational and Negative Indices',
//       description:
//         'Evaluating rational indices takes two steps: the denominator gives a root and the numerator gives a power.',
//     },
//     'simplifying-expressions-with-indices-and-surds': {
//       metaTitle: 'Fractional Indices Questions | IB Maths AI HL ',
//       metaDescription:
//         'Fractional indices questions for IB Maths AI HL: write expressions with roots and powers, such as x²√x, in the form axᵖ.',
//       title: 'IB Maths AI HL Simplifying Expressions with Indices and Surds',
//       description:
//         'These fractional indices questions turn expressions with roots into a single power of x.',
//     },
//     'simplifying-mixed-surd-index-expressions': {
//       metaTitle: 'Simplifying Surds and Indices | IB Maths AI HL ',
//       metaDescription:
//         'Practise simplifying surds and indices in IB Maths AI HL, writing sums such as 3/∛x + 2√x in the form axᵖ + bxᵠ.',
//       title: 'IB Maths AI HL Simplifying Mixed Surd and Index Expressions',
//       description: 'Simplifying surds and indices in a sum means converting each term separately.',
//     },
//     'solving-equations-with-rational-indices': {
//       metaTitle: 'Solving Equations with Rational Indices | AI HL ',
//       metaDescription:
//         'Practise solving equations with rational indices in IB Maths AI HL, such as x^(3/2) = 1/8, using the reciprocal index.',
//       title: 'IB Maths AI HL Solving Equations with Rational Indices',
//       description:
//         'Solving equations with rational indices uses the reciprocal power to undo the index.',
//     },
//     'composite-index-expressions': {
//       metaTitle: 'Composite Index Expressions | IB Maths AI HL ',
//       metaDescription:
//         'Composite index expressions in IB Maths AI HL: given y = 2∛(x²), write y⁴ in the form axᵏ by combining powers.',
//       title: 'IB Maths AI HL Composite Index Expressions',
//       description:
//         'Composite index expressions raise an expression that already has a power to another power.',
//     },
//     'solving-exponential-equations-using-index-laws': {
//       metaTitle: 'Exponential Equations Using Index Laws | AI HL ',
//       metaDescription:
//         'Solve exponential equations using index laws in IB Maths AI HL, such as (√3)ˣ = 9ˣ⁻¹, by matching the bases.',
//       title: 'IB Maths AI HL Solving Exponential Equations Using Index Laws',
//       description:
//         'Solving exponential equations using index laws means writing both sides as powers of the same base.',
//     },
//   },
//   'sequences-series': {
//     'infinite-geometric-series-sum-to-infinity': {
//       metaTitle: 'Sum to Infinity Formula | IB Maths AI HL ',
//       metaDescription:
//         'Use the sum to infinity formula in IB Maths AI HL, S∞ = u₁ ÷ (1 − r), for infinite geometric series.',
//       title: 'IB Maths AI HL Infinite Geometric Series: Sum to Infinity',
//       description: 'The sum to infinity formula, S∞ = u₁ ÷ (1 − r), works only when |r| < 1.',
//     },
//     'convergence-of-infinite-geometric-series': {
//       metaTitle: 'Convergence of Geometric Series | IB AI HL ',
//       metaDescription:
//         'Find the convergence of geometric series in IB Maths AI HL: the range of values of x that makes |r| < 1.',
//       title: 'IB Maths AI HL Convergence of Infinite Geometric Series',
//       description:
//         'The convergence of geometric series depends only on the common ratio: the series converges when |r| < 1.',
//     },
//     'infinite-geometric-series-finding-unknown': {
//       metaTitle: 'Infinite Geometric Series Formula | IB AI HL ',
//       metaDescription:
//         'Use the infinite geometric series formula in IB Maths AI HL to find the first term or ratio from a sum to infinity.',
//       title: 'IB Maths AI HL Infinite Geometric Series: Finding Unknowns',
//       description:
//         'The infinite geometric series formula links three values: the first term, the ratio and the sum to infinity.',
//     },
//     'sigma-notation-infinite-series': {
//       metaTitle: 'Sigma Notation and Infinite Series | IB AI HL ',
//       metaDescription:
//         'Sigma notation infinite series in IB Maths AI HL: read u₁ and r from ∑, find the sum, and solve for x.',
//       title: 'IB Maths AI HL Sigma Notation and Infinite Series',
//       description:
//         'Sigma notation infinite series questions hide a geometric series inside the ∑ symbol.',
//     },
//     'convergence-sum-to-infinity': {
//       metaTitle: 'Convergence and Sum to Infinity | IB AI HL ',
//       metaDescription:
//         'Convergence and sum to infinity in IB Maths AI HL: find the range of x for convergence, then the sum in terms of x.',
//       title: 'IB Maths AI HL Convergence and Sum to Infinity',
//       description:
//         'Convergence and sum to infinity questions in x need two answers: the valid range and an expression for the sum.',
//     },
//     'fractal-geometric-series': {
//       metaTitle: 'Fractal Geometric Series | IB Maths AI HL ',
//       metaDescription:
//         'A fractal geometric series in IB Maths AI HL: squares added at each step form a geometric sequence of areas.',
//       title: 'IB Maths AI HL Fractals: Geometric Series',
//       description:
//         'A fractal geometric series appears when each step adds shapes scaled by the same factor.',
//     },
//     'fractal-total-area': {
//       metaTitle: 'Fractal Area: Sum to Infinity | IB Maths AI HL ',
//       metaDescription:
//         'Find the total fractal area in IB Maths AI HL by summing an infinite geometric series of added squares.',
//       title: 'IB Maths AI HL Fractals: Total Area',
//       description:
//         'The total fractal area is finite even though the steps never end, because the series converges.',
//     },
//   },
//   'complex-numbers': {
//     'powers-of-i': {
//       metaTitle: 'Powers of i Questions | IB Maths AI HL ',
//       metaDescription:
//         'Powers of i questions for IB Maths AI HL: simplify i⁵, i¹⁰ and higher powers using the cycle i, −1, −i, 1.',
//       title: 'IB Maths AI HL Powers of i',
//       description: 'These powers of i questions rely on one pattern: the powers repeat every four.',
//     },
//     multiplication: {
//       metaTitle: 'Multiplying Complex Numbers | IB Maths AI HL ',
//       metaDescription:
//         'Practise multiplying complex numbers in IB Maths AI HL, such as (2 + 3i)(1 − 2i), in the form a + bi.',
//       title: 'IB Maths AI HL Multiplying Complex Numbers',
//       description:
//         'Multiplying complex numbers works like expanding brackets, with i² replaced by −1.',
//     },
//     'division-conjugate': {
//       metaTitle: 'Dividing Complex Numbers | IB Maths AI HL ',
//       metaDescription:
//         'Practise dividing complex numbers in IB Maths AI HL by multiplying by the conjugate, writing answers as x + iy.',
//       title: 'IB Maths AI HL Dividing Complex Numbers',
//       description:
//         'Dividing complex numbers uses the conjugate of the denominator to make it real.',
//     },
//     'equating-real-imaginary-parts': {
//       metaTitle: 'Equating Real and Imaginary Parts | IB AI HL ',
//       metaDescription:
//         'Practise equating real and imaginary parts in IB Maths AI HL to find the unknown real numbers a and b.',
//       title: 'IB Maths AI HL Equating Real and Imaginary Parts',
//       description:
//         'Equating real and imaginary parts turns one complex equation into two real ones.',
//     },
//     'complex-conjugate-equations': {
//       metaTitle: 'Complex Conjugate Equations | IB Maths AI HL ',
//       metaDescription:
//         'Solve complex conjugate equations in IB Maths AI HL, such as z + 3i = 2z* + 4, by writing z = x + iy.',
//       title: 'IB Maths AI HL Complex Conjugate Equations',
//       description:
//         'Complex conjugate equations contain both z and z*, so write z = x + iy and z* = x − iy.',
//     },
//     'argand-diagram': {
//       metaTitle: 'Argand Diagram Questions | IB Maths AI HL ',
//       metaDescription:
//         'Represent complex numbers on an Argand diagram in IB Maths AI HL: z, −z, z*, sums, differences and powers.',
//       title: 'IB Maths AI HL Argand Diagram',
//       description:
//         'An Argand diagram plots complex numbers with the real part across and the imaginary part up.',
//     },
//     'quadratic-equations-with-complex-roots': {
//       metaTitle: 'Quadratic Equations with Complex Roots | AI HL ',
//       metaDescription:
//         'Solve quadratic equations with complex roots in IB Maths AI HL, such as x² + 9 = 0, as conjugate pairs.',
//       title: 'IB Maths AI HL Quadratic Equations with Complex Roots',
//       description:
//         'Quadratic equations with complex roots have a negative discriminant, and their roots come as a conjugate pair.',
//     },
//     'algebraic-manipulation': {
//       metaTitle: 'Applications of Complex Numbers | IB AI HL ',
//       metaDescription:
//         'Applications of complex numbers in IB Maths AI HL: algebra with z and w, a short proof, trigonometric models and AC circuits.',
//       title: 'IB Maths AI HL Algebraic Manipulation and Applications',
//       description:
//         'Applications of complex numbers include adding waves of the same frequency, as in AC circuits.',
//     },
//     'modulus-argument-geometric-transformations': {
//       metaTitle: 'Modulus-Argument Form | IB Maths AI HL ',
//       metaDescription:
//         'Write complex numbers in modulus argument form in IB Maths AI HL, and use modulus and argument in geometric problems.',
//       title: 'IB Maths AI HL Modulus, Argument and Geometric Transformations',
//       description:
//         "Modulus argument form, r cis θ, shows a complex number's distance from the origin and its angle.",
//     },
//     'rotation-in-the-complex-plane': {
//       metaTitle: 'Rotation in the Complex Plane | IB Maths AI HL ',
//       metaDescription:
//         'Rotation in the complex plane in IB Maths AI HL: multiply by cis θ, rotate a square, and rotate about any point.',
//       title: 'IB Maths AI HL Rotation in the Complex Plane',
//       description:
//         'Rotation in the complex plane is multiplication by cis θ, which turns a point through θ about the origin.',
//     },
//     'equilateral-triangle-in-the-complex-plane': {
//       metaTitle: 'Equilateral Triangle: Complex Plane | IB AI HL ',
//       metaDescription:
//         'Find the vertices of an equilateral triangle in the complex plane in IB Maths AI HL by rotating through 2π/3.',
//       title: 'IB Maths AI HL Equilateral Triangle in the Complex Plane',
//       description:
//         'An equilateral triangle in the complex plane, centred on the origin, has vertices a rotation of 2π/3 apart.',
//     },
//     'cartesian-form': {
//       metaTitle: 'Cartesian Form of Complex Numbers | IB AI HL ',
//       metaDescription:
//         'Convert complex numbers to Cartesian form in IB Maths AI HL from modulus and argument, and from products in cis form.',
//       title: 'IB Maths AI HL Cartesian Form',
//       description:
//         'Cartesian form, a + bi, comes from r cis θ through a = r cos θ and b = r sin θ.',
//     },
//     'multiplication-division-in-polar-form': {
//       metaTitle: 'Multiplication and Division in Polar Form ',
//       metaDescription:
//         'Practise multiplication and division in polar form in IB Maths AI HL: multiply moduli and add arguments.',
//       title: 'IB Maths AI HL Multiplication and Division in Polar Form',
//       description:
//         'Multiplication and division in polar form are quick: moduli multiply or divide, and arguments add or subtract.',
//     },
//     'de-moivres-theorem': {
//       metaTitle: "De Moivre's Theorem Questions | IB Maths AI HL ",
//       metaDescription:
//         "Use De Moivre's theorem in IB Maths AI HL to simplify powers and products of complex numbers in cis form.",
//       title: "IB Maths AI HL De Moivre's Theorem",
//       description:
//         "De Moivre's theorem raises a complex number in polar form to a power: (r cis θ)ⁿ = rⁿ cis nθ.",
//     },
//     'exponential-form': {
//       metaTitle: 'Exponential Form of Complex Numbers | IB AI HL ',
//       metaDescription:
//         'Exponential form in IB Maths AI HL: multiply in re^(iθ) form, convert to Cartesian form and show iⁱ is real.',
//       title: 'IB Maths AI HL Exponential Form',
//       description:
//         'Exponential form writes a complex number as re^(iθ), which makes products and powers simple.',
//     },
//     'arguments-of-products': {
//       metaTitle: 'Arguments of Products | IB Maths AI HL ',
//       metaDescription:
//         'Find arguments of products and quotients in IB Maths AI HL, such as arg(zw) for z = 1 + i and w = 1 + √3i.',
//       title: 'IB Maths AI HL Arguments of Products',
//       description:
//         'Arguments of products add: arg(zw) = arg z + arg w. Arguments of quotients subtract.',
//     },
//     'powers-of-complex-numbers': {
//       metaTitle: 'Powers of Complex Numbers | IB Maths AI HL ',
//       metaDescription:
//         'Powers of complex numbers in IB Maths AI HL: find the smallest n that makes zⁿ real or purely imaginary.',
//       title: 'IB Maths AI HL Powers of Complex Numbers',
//       description:
//         'Powers of complex numbers multiply the argument, so zⁿ is real when nθ is a multiple of π.',
//     },
//     'complex-logarithms': {
//       metaTitle: 'Complex Logarithms | IB Maths AI HL ',
//       metaDescription:
//         'Complex logarithms in IB Maths AI HL: write −2 in exponential form and use it to suggest a value for ln(−2).',
//       title: 'IB Maths AI HL Complex Logarithms',
//       description: 'Complex logarithms extend ln to negative numbers through exponential form.',
//     },
//   },
//   algebra: {
//     'matrix-applications-real-world-problems': {
//       metaTitle: 'Matrices: Real-Life Applications | IB AI HL ',
//       metaDescription:
//         'Matrices real life applications in IB Maths AI HL: a restaurant buying raspberries and strawberries, solved with matrices.',
//       title: 'IB Maths AI HL Matrix Applications: Real-World Problems',
//       description:
//         'Matrices real life applications turn a system of linear equations into one matrix equation.',
//     },
//     'matrix-applications-investment-problems-33': {
//       metaTitle: 'Matrix Word Problems | IB Maths AI HL ',
//       metaDescription:
//         'Matrix word problems for IB Maths AI HL: split an investment across three share funds with a 3 × 3 system.',
//       title: 'IB Maths AI HL Matrix Applications: Investment Problems (3 × 3)',
//       description:
//         'Matrix word problems with three unknowns need three equations, one for each fact given.',
//     },
//   },
//   'matrices-eigenvalues': {
//     'eigenvalues-eigenvectors': {
//       metaTitle: 'Eigenvalues and Eigenvectors | IB Maths AI HL ',
//       metaDescription:
//         'Find eigenvalues and eigenvectors in IB Maths AI HL for 2 × 2 matrices, reflections and long-term population models.',
//       title: 'IB Maths AI HL Eigenvalues and Eigenvectors',
//       description:
//         'Eigenvalues and eigenvectors describe the directions a matrix only stretches, and by how much.',
//     },
//     diagonalisation: {
//       metaTitle: 'Diagonalisation of Matrices | IB Maths AI HL ',
//       metaDescription:
//         'Diagonalisation in IB Maths AI HL: express a 2 × 2 matrix as A = PDP⁻¹ using its eigenvalues and eigenvectors.',
//       title: 'IB Maths AI HL Diagonalisation',
//       description:
//         'Diagonalisation writes a matrix as PDP⁻¹, with eigenvectors in P and eigenvalues on the diagonal of D.',
//     },
//     'matrix-powers-via-diagonalisation': {
//       metaTitle: 'Matrix Powers Using Diagonalisation | IB AI HL ',
//       metaDescription:
//         'Find matrix powers using diagonalisation in IB Maths AI HL: Mⁿ = PDⁿP⁻¹, and images of points under repeated maps.',
//       title: 'IB Maths AI HL Matrix Powers via Diagonalisation',
//       description:
//         'Matrix powers using diagonalisation are simple, because only the diagonal entries of D are raised to the power.',
//     },
//     'characteristic-polynomial-eigenvalues': {
//       metaTitle: 'Characteristic Polynomial | IB Maths AI HL ',
//       metaDescription:
//         'Find the characteristic polynomial in IB Maths AI HL for a 2 × 2 matrix, then solve it for the eigenvalues.',
//       title: 'IB Maths AI HL Characteristic Polynomial and Eigenvalues',
//       description:
//         'The characteristic polynomial, det(M − λI), has the eigenvalues of M as its roots.',
//     },
//     'constructing-matrices-from-eigenvectors': {
//       metaTitle: 'Constructing Matrices from Eigenvectors | AI HL ',
//       metaDescription:
//         'Practise constructing matrices from eigenvectors in IB Maths AI HL, using M = PDP⁻¹ with given eigenvalues.',
//       title: 'IB Maths AI HL Constructing Matrices from Eigenvectors',
//       description:
//         'Constructing matrices from eigenvectors reverses diagonalisation: P and D are given, and M is the result.',
//     },
//   },
//   functions: {
//     'composite-functions': {
//       metaTitle: 'Composite Functions Questions | IB Maths AI HL ',
//       metaDescription:
//         'Composite functions in IB Maths AI HL: find (f ∘ g)(x), its domain, values from tables and solve equations.',
//       title: 'IB Maths AI HL Composite Functions',
//       description:
//         'Composite functions apply one function to the output of another. (f ∘ g)(x) means g first, then f.',
//     },
//     'domain-range-equations-with-self-composite': {
//       metaTitle: 'Self-Composite Functions | IB Maths AI HL ',
//       metaDescription:
//         'A self composite function in IB Maths AI HL: find the domain and range of f ∘ f, and solve equations involving it.',
//       title: 'IB Maths AI HL Domain, Range and Equations with Self-Composites',
//       description: 'A self composite function, f ∘ f, applies the same function twice.',
//     },
//     'inverse-functions': {
//       metaTitle: 'Inverse Functions Examples | IB Maths AI HL ',
//       metaDescription:
//         'Inverse functions examples for IB Maths AI HL: linear, rational, exponential, logarithmic and cubic functions, and graphs.',
//       title: 'IB Maths AI HL Inverse Functions',
//       description:
//         'These inverse functions examples cover every function type in the course, from rational to logarithmic.',
//     },
//     'domain-for-inverse-to-exist': {
//       metaTitle: 'Domain for an Inverse to Exist | IB Maths AI HL ',
//       metaDescription:
//         'Find the largest domain for an inverse to exist in IB Maths AI HL by restricting the function to be one-to-one.',
//       title: 'IB Maths AI HL Domain for an Inverse to Exist',
//       description: 'A domain for an inverse to exist must make the function one-to-one.',
//     },
//     continuity: {
//       metaTitle: 'Continuous Piecewise Functions | IB Maths AI HL ',
//       metaDescription:
//         'Find the value of a that makes a continuous piecewise function in IB Maths AI HL, with no jump where the pieces meet.',
//       title: 'IB Maths AI HL Continuity',
//       description:
//         'A continuous piecewise function has pieces that meet at the same value where they join.',
//     },
//     'trigonometric-graphs': {
//       metaTitle: 'Trigonometric Graphs | IB Maths AI HL ',
//       metaDescription:
//         'Sketch trigonometric graphs in IB Maths AI HL, compare two curves on one diagram and find where they intersect.',
//       title: 'IB Maths AI HL Trigonometric Graphs',
//       description:
//         'Trigonometric graphs repeat, so intersections come in patterns across the domain.',
//     },
//   },
//   'functions-graphs': {
//     'graph-transformations-vertical-translation': {
//       metaTitle: 'Vertical Translation of Graphs | IB Maths AI HL ',
//       metaDescription:
//         'Vertical translation of graphs in IB Maths AI HL: sketch y = f(x) + k and find the equation of a polynomial after a shift.',
//       title: 'IB Maths AI HL Graph Transformations: Vertical Translation',
//       description: 'Vertical translation of graphs uses y = f(x) + k: every point moves up by k.',
//     },
//     'graph-transformations-horizontal-translation': {
//       metaTitle: 'Horizontal Translation and Stretch | IB AI HL ',
//       metaDescription:
//         'Horizontal translation and stretch in IB Maths AI HL: sketch y = f(x + a) and y = f(bx), and combine the two.',
//       title: 'IB Maths AI HL Graph Transformations: Horizontal Translation',
//       description:
//         'A horizontal translation, y = f(x + a), moves the graph a units left, the opposite of what the sign suggests.',
//     },
//     'vertical-stretch-of-functions': {
//       metaTitle: 'Vertical Stretch of Functions | IB Maths AI HL ',
//       metaDescription:
//         'Sketch a vertical stretch of functions in IB Maths AI HL, such as y = 2f(x), keeping points on the x-axis fixed.',
//       title: 'IB Maths AI HL Vertical Stretch of Functions',
//       description: 'A vertical stretch of functions multiplies every y-value by the same factor.',
//     },
//     'describing-transformations-from-algebraic-form': {
//       metaTitle: 'Describing Transformations of Graphs | IB AI HL ',
//       metaDescription:
//         'Practise describing transformations of graphs in IB Maths AI HL that map one quadratic or cubic graph onto another.',
//       title: 'IB Maths AI HL Describing Transformations from Algebraic Form',
//       description:
//         'Describing transformations of graphs needs the type, the direction and the size, in the correct order.',
//     },
//     'reflection-in-x-axis-vertex': {
//       metaTitle: 'Reflection in the y-Axis and x-Axis | IB AI HL ',
//       metaDescription:
//         'Reflection in the y axis and x-axis in IB Maths AI HL: find where the vertex of a graph moves under each.',
//       title: 'IB Maths AI HL Reflections in the Axes: Vertex',
//       description:
//         'A reflection in the y axis changes the sign of x; a reflection in the x-axis changes the sign of y.',
//     },
//     'combined-transformations-sketching': {
//       metaTitle: 'Combined Transformations of Graphs | IB AI HL ',
//       metaDescription:
//         'Combined transformations in IB Maths AI HL: sketch y = f(x − 2) + 3, and find equations and parameters after several maps.',
//       title: 'IB Maths AI HL Combined Transformations',
//       description:
//         'Combined transformations apply two or more changes to the same graph, one after another.',
//     },
//     'describing-sequence-of-transformations': {
//       metaTitle: 'Sequence of Transformations | IB Maths AI HL ',
//       metaDescription:
//         'Describe a sequence of transformations in IB Maths AI HL that maps one quadratic graph onto another, in order.',
//       title: 'IB Maths AI HL Describing a Sequence of Transformations',
//       description:
//         'A sequence of transformations must be given in order, because the order can change the result.',
//     },
//     'exponential-transformation': {
//       metaTitle: 'Transformations of Exponential Functions ',
//       metaDescription:
//         'Transformations of exponential functions in IB Maths AI HL: translate and stretch y = eˣ and find the new equation.',
//       title: 'IB Maths AI HL Exponential Functions: Transformations',
//       description:
//         'Transformations of exponential functions move the asymptote as well as the curve.',
//     },
//     'completing-the-square-transformations': {
//       metaTitle: 'Completing the Square and Transformations ',
//       metaDescription:
//         'Completing the square and transformations in IB Maths AI HL: write x² − 10x + 11 as (x − h)² + k and describe the maps.',
//       title: 'IB Maths AI HL Completing the Square and Transformations',
//       description:
//         'Completing the square and transformations go together: (x − h)² + k shows the translation from y = x².',
//     },
//     'vertical-vs-horizontal-stretch-equivalence': {
//       metaTitle: 'Vertical and Horizontal Stretch | IB AI HL ',
//       metaDescription:
//         'Compare a vertical and horizontal stretch in IB Maths AI HL: when y = 9x² is also a horizontal stretch of y = x².',
//       title: 'IB Maths AI HL Vertical and Horizontal Stretch Equivalence',
//       description: 'A vertical and horizontal stretch can give the same graph for power functions.',
//     },
//     'successive-reflections': {
//       metaTitle: 'Successive Reflections of Graphs | IB AI HL ',
//       metaDescription:
//         'Successive reflections in IB Maths AI HL: reflect y = 2x³ − 5x² in the x-axis, then the y-axis, and find the equation.',
//       title: 'IB Maths AI HL Successive Reflections',
//       description: 'Successive reflections in both axes give a half-turn about the origin.',
//     },
//     'transformations-of-square-root-functions': {
//       metaTitle: 'Transformations of Square Root Functions ',
//       metaDescription:
//         'Transformations of square root functions in IB Maths AI HL: describe how y = √x maps onto y = √(2x − 1).',
//       title: 'IB Maths AI HL Transformations of Square Root Functions',
//       description:
//         'Transformations of square root functions often hide a stretch and a translation inside the root.',
//     },
//     'order-of-transformations-stretch-then-translate-vs-translate-then-stretch': {
//       metaTitle: 'Order of Transformations | IB Maths AI HL ',
//       metaDescription:
//         'The order of transformations in IB Maths AI HL: stretch then translate gives a different result from translate then stretch.',
//       title: 'IB Maths AI HL Order of Transformations',
//       description:
//         'The order of transformations matters when a stretch and a translation act in the same direction.',
//     },
//     'stretch-away-from-invariant-line': {
//       metaTitle: 'Stretch from an Invariant Line | IB Maths AI HL ',
//       metaDescription:
//         'Sketch a stretch from an invariant line in IB Maths AI HL, and find lines y = mx that a transformation keeps fixed.',
//       title: 'IB Maths AI HL Stretch Away from an Invariant Line',
//       description:
//         'In a stretch from an invariant line, that line stays fixed and every other point moves away from it.',
//     },
//   },
//   'mathematical-models': {
//     'logarithmic-models': {
//       metaTitle: 'Logarithmic Models | IB Maths AI HL ',
//       metaDescription:
//         'Create logarithmic models in IB Maths AI HL of the form y = a + b ln x that pass through two given points.',
//       title: 'IB Maths AI HL Logarithmic Models',
//       description: 'Logarithmic models grow quickly at first, then more slowly, without a limit.',
//     },
//     'sinusoidal-models': {
//       metaTitle: 'Sinusoidal Models | IB Maths AI HL ',
//       metaDescription:
//         'Find sinusoidal models in IB Maths AI HL from the amplitude, central line, period and a known maximum.',
//       title: 'IB Maths AI HL Sinusoidal Models',
//       description: 'Sinusoidal models describe repeating patterns such as tides and temperatures.',
//     },
//     'logistic-models': {
//       metaTitle: 'Logistic Models | IB Maths AI HL ',
//       metaDescription:
//         'Form logistic models in IB Maths AI HL from the carrying capacity and initial value, and model rabbits on an island.',
//       title: 'IB Maths AI HL Logistic Models',
//       description:
//         'Logistic models grow almost exponentially at first, then level off at the carrying capacity.',
//     },
//     'exponential-cooling': {
//       metaTitle: 'Exponential Growth and Decay: Cooling | AI HL ',
//       metaDescription:
//         'Exponential growth and decay in IB Maths AI HL: cooling ice cream, heating cakes and changing worm populations.',
//       title: 'IB Maths AI HL Exponential Cooling and Heating',
//       description:
//         'Exponential growth and decay models of temperature approach the surrounding temperature over time.',
//     },
//     'modelling-assumptions': {
//       metaTitle: 'Model Assumptions | IB Maths AI HL ',
//       metaDescription:
//         'State model assumptions in IB Maths AI HL for an exponential cooling model, and explain when they fail in practice.',
//       title: 'IB Maths AI HL Modelling Assumptions',
//       description:
//         'Model assumptions are what a model takes as fixed, such as a constant room temperature.',
//     },
//     'piecewise-models': {
//       metaTitle: 'Piecewise Models | IB Maths AI HL ',
//       metaDescription:
//         'Piecewise models in IB Maths AI HL: the volume of water in a bucket, with a different rule for each time interval.',
//       title: 'IB Maths AI HL Piecewise Models',
//       description:
//         'Piecewise models use a different function for each interval, joined where the situation changes.',
//     },
//     'model-limitations': {
//       metaTitle: 'Model Limitations | IB Maths AI HL ',
//       metaDescription:
//         'Explain model limitations in IB Maths AI HL for a tiger population modelled as decaying exponentially.',
//       title: 'IB Maths AI HL Model Limitations',
//       description:
//         'Model limitations become clear when a model gives impossible values, such as part of a tiger.',
//     },
//   },
//   linearisation: {
//     'power-functions-log-log': {
//       metaTitle: 'Log-Log Graph: Power Functions | IB Maths AI HL ',
//       metaDescription:
//         'Linearise power functions in IB Maths AI HL with a log log graph, and describe the gradient and intercept.',
//       title: 'IB Maths AI HL Power Functions (Log-Log)',
//       description: 'A log log graph turns y = axᵇ into a straight line with gradient b.',
//     },
//     'exponential-functions-semi-log': {
//       metaTitle: 'Semi-Log Graph: Exponential Functions | AI HL ',
//       metaDescription:
//         'Linearise exponential functions in IB Maths AI HL with a semi log graph, and describe the line it gives.',
//       title: 'IB Maths AI HL Exponential Functions (Semi-Log)',
//       description:
//         'A semi log graph plots ln y against x, so exponential functions become straight lines.',
//     },
//     'reading-linearised-graphs-log-log': {
//       metaTitle: 'Reading Linearised Graphs | IB Maths AI HL ',
//       metaDescription:
//         'Practise reading linearised graphs in IB Maths AI HL: suggest a relationship from log-log and semi-log plots.',
//       title: 'IB Maths AI HL Reading Linearised Graphs',
//       description:
//         'Reading linearised graphs means working back from a straight line to the original relationship.',
//     },
//     'choosing-the-appropriate-model': {
//       metaTitle: 'Semi-Log vs Log-Log Plots | IB Maths AI HL ',
//       metaDescription:
//         'Choose between semi log vs log log plots in IB Maths AI HL: the straighter scatterplot shows the right model.',
//       title: 'IB Maths AI HL Choosing the Appropriate Model',
//       description:
//         'Comparing semi log vs log log plots shows whether data follow an exponential or a power model.',
//     },
//   },
//   'linearisation-regression': {
//     'power-model': {
//       metaTitle: 'Power Model Questions | IB Maths AI HL ',
//       metaDescription:
//         "Fit a power model in IB Maths AI HL to magnets, Kepler's law and Lotka's law using log-log regression.",
//       title: 'IB Maths AI HL Power Model',
//       description:
//         'A power model, y = axᵇ, fits data such as planetary orbits, where one quantity grows as a power of another.',
//     },
//     'model-selection-using-pmcc': {
//       metaTitle: 'Model Selection Using PMCC | IB Maths AI HL ',
//       metaDescription:
//         "Model selection using PMCC in IB Maths AI HL: city populations and word frequencies in Treasure Island (Zipf's law).",
//       title: 'IB Maths AI HL Model Selection Using PMCC',
//       description:
//         'Model selection using PMCC compares how close each linearised plot is to a straight line.',
//     },
//     'newtons-law-of-cooling': {
//       metaTitle: "Newton's Law of Cooling | IB Maths AI HL ",
//       metaDescription:
//         "Newton's law of cooling in IB Maths AI HL: linearise temperature data and find the constants by regression.",
//       title: "IB Maths AI HL Newton's Law of Cooling",
//       description:
//         "Newton's law of cooling says a body cools at a rate proportional to its difference from the surrounding temperature.",
//     },
//     'michaelismenten-kinetics-lineweaverburk': {
//       metaTitle: 'Lineweaver–Burk Plot | IB Maths AI HL ',
//       metaDescription:
//         'Use a Lineweaver Burk plot in IB Maths AI HL to linearise Michaelis–Menten kinetics and find the constants.',
//       title: 'IB Maths AI HL Michaelis–Menten Kinetics (Lineweaver–Burk)',
//       description:
//         'A Lineweaver Burk plot takes reciprocals of both variables so enzyme kinetics data form a straight line.',
//     },
//   },
//   'trigonometry-radians': {
//     'degree-radian-conversion': {
//       metaTitle: 'Degree Radian Conversion | IB Maths AI HL ',
//       metaDescription:
//         'Degree radian conversion in IB Maths AI HL: convert degrees to radians in terms of π, and radians to degrees.',
//       title: 'IB Maths AI HL Degree-Radian Conversion',
//       description: 'Degree radian conversion uses one fact: 180° equals π radians.',
//     },
//     'unit-circle': {
//       metaTitle: 'Unit Circle Questions | IB Maths AI HL ',
//       metaDescription:
//         'Unit circle questions for IB Maths AI HL: mark angles in radians and read exact values of sine and cosine.',
//       title: 'IB Maths AI HL Unit Circle',
//       description:
//         'These unit circle questions use a circle of radius 1, where each point is (cos θ, sin θ).',
//     },
//     'arc-length-sector-area': {
//       metaTitle: 'Arc Length and Sector Area Formula | IB AI HL ',
//       metaDescription:
//         'Use the arc length and sector area formula in IB Maths AI HL with angles in radians, and compare arcs with chords.',
//       title: 'IB Maths AI HL Arc Length and Sector Area',
//       description:
//         'The arc length and sector area formula in radians is simple: l = rθ and A = ½r²θ.',
//     },
//     'shaded-region-area-perimeter': {
//       metaTitle: 'Shaded Region Area and Perimeter | IB AI HL ',
//       metaDescription:
//         'Find the shaded region area and perimeter in IB Maths AI HL from triangles and sectors with angles in radians.',
//       title: 'IB Maths AI HL Shaded Region Area and Perimeter',
//       description:
//         'A shaded region area is usually one shape minus another, such as a sector minus a triangle.',
//     },
//     'sector-perimeter-area': {
//       metaTitle: 'Sector Perimeter and Area | IB Maths AI HL ',
//       metaDescription:
//         'Sector perimeter and area in IB Maths AI HL: find the radius or angle from the perimeter, or solve both together.',
//       title: 'IB Maths AI HL Sector Perimeter and Area',
//       description: 'A sector perimeter is two radii plus the arc: 2r + rθ.',
//     },
//     'sector-area-finding-angle': {
//       metaTitle: 'Angle of a Sector from Its Area | IB AI HL ',
//       metaDescription:
//         'Find the angle of a sector in IB Maths AI HL from its area, and the radius from the area and angle in radians.',
//       title: 'IB Maths AI HL Sector Area: Finding the Angle',
//       description: 'The angle of a sector comes from rearranging A = ½r²θ.',
//     },
//     'composite-figures': {
//       metaTitle: 'Composite Shapes with Circles | IB Maths AI HL ',
//       metaDescription:
//         'Find the area of composite shapes with circles in IB Maths AI HL: a rectangle joined to a sector or semicircle.',
//       title: 'IB Maths AI HL Composite Figures',
//       description:
//         'Composite shapes with circles combine straight-sided shapes with sectors or semicircles.',
//     },
//     'arc-length-equilateral-triangle': {
//       metaTitle: 'Reuleaux Triangle: Arc Length | IB Maths AI HL ',
//       metaDescription:
//         'The Reuleaux triangle in IB Maths AI HL: three arcs drawn from the vertices of an equilateral triangle.',
//       title: 'IB Maths AI HL Arc Length: Equilateral Triangle',
//       description:
//         'A Reuleaux triangle is built from three arcs, each centred on a vertex of an equilateral triangle.',
//     },
//     'shaded-region-segment': {
//       metaTitle: 'Area of a Segment | IB Maths AI HL ',
//       metaDescription:
//         'Find the area of a segment in IB Maths AI HL: the region between an arc and its chord, with the angle in radians.',
//       title: 'IB Maths AI HL Shaded Region: Segment',
//       description:
//         'The area of a segment is the sector minus the triangle formed by the two radii and the chord.',
//     },
//     'segment-area-proof-equation-solving': {
//       metaTitle: 'Segment Area Formula: Proof | IB Maths AI HL ',
//       metaDescription:
//         'Prove the segment area formula in IB Maths AI HL, then solve an equation for the angle using technology.',
//       title: 'IB Maths AI HL Segment Area: Proof and Equation Solving',
//       description:
//         "The segment area formula comes from subtracting the triangle's area from the sector's.",
//     },
//     'annular-sector-area': {
//       metaTitle: 'Annular Sector Area | IB Maths AI HL ',
//       metaDescription:
//         'Find an annular sector area in IB Maths AI HL: the region between two sectors with the same centre and angle.',
//       title: 'IB Maths AI HL Annular Sector Area',
//       description: 'An annular sector area is the larger sector minus the smaller one.',
//     },
//     'sector-rolled-into-cone': {
//       metaTitle: 'Sector Rolled into a Cone | IB Maths AI HL ',
//       metaDescription:
//         'A sector rolled into a cone in IB Maths AI HL: link the arc length to the base circumference and find the volume.',
//       title: 'IB Maths AI HL Sector Rolled into a Cone',
//       description:
//         'When a sector is rolled into a cone, the arc becomes the base circumference and the radius becomes the slant height.',
//     },
//     'overlapping-circles-shaded-region': {
//       metaTitle: 'Overlapping Circles: Shaded Region | IB AI HL ',
//       metaDescription:
//         "Find the shaded region of overlapping circles in IB Maths AI HL, where each circle passes through the other's centre.",
//       title: 'IB Maths AI HL Overlapping Circles: Shaded Region',
//       description:
//         "Overlapping circles that pass through each other's centres meet at angles of 2π/3.",
//     },
//   },
//   trigonometry: {
//     'sine-rule': {
//       metaTitle: 'Sine Rule Formula | IB Maths AI HL ',
//       metaDescription:
//         'Use the sine rule formula in IB Maths AI HL, including the ambiguous case where two angles are possible.',
//       title: 'IB Maths AI HL Sine Rule',
//       description:
//         'The sine rule formula links each side to the sine of its opposite angle: a/sin A = b/sin B.',
//     },
//     'pythagorean-identity': {
//       metaTitle: 'Pythagorean Identity | IB Maths AI HL ',
//       metaDescription:
//         'Use the Pythagorean identity in IB Maths AI HL to find sin x and tan x from cos x, with the correct sign.',
//       title: 'IB Maths AI HL Pythagorean Identity',
//       description: 'The Pythagorean identity, sin²x + cos²x = 1, finds one ratio from another.',
//     },
//     'solving-trig-equations-graphically': {
//       metaTitle: 'Solving Trig Equations Graphically | IB AI HL ',
//       metaDescription:
//         'Practise solving trig equations graphically in IB Maths AI HL, such as 3 sin x = 0.5 for 0 ≤ x < 3π.',
//       title: 'IB Maths AI HL Solving Trig Equations Graphically',
//       description:
//         'Solving trig equations graphically shows every solution in the interval at once.',
//     },
//     'trigonometric-models': {
//       metaTitle: 'Trigonometric Models | IB Maths AI HL ',
//       metaDescription:
//         'Trigonometric models in IB Maths AI HL: the depth of water in a harbour, with maximum depth and safe times.',
//       title: 'IB Maths AI HL Trigonometric Models',
//       description:
//         'Trigonometric models describe quantities that rise and fall regularly, such as tides.',
//     },
//     'cosine-rule': {
//       metaTitle: 'Cosine Rule Formula | IB Maths AI HL ',
//       metaDescription:
//         'Use the cosine rule formula in IB Maths AI HL to find sides and angles in triangles, including with a median.',
//       title: 'IB Maths AI HL Cosine Rule',
//       description:
//         'The cosine rule formula, a² = b² + c² − 2bc cos A, works when the sine rule cannot.',
//     },
//     'trigonometric-identities': {
//       metaTitle: 'Trigonometric Identities Questions | IB AI HL ',
//       metaDescription:
//         'Trigonometric identities questions for IB Maths AI HL: rewrite expressions, prove identities and solve with sin 2x.',
//       title: 'IB Maths AI HL Trigonometric Identities',
//       description:
//         'These trigonometric identities questions rewrite expressions using sin²x + cos²x = 1 and the double angle formula.',
//     },
//   },
//   'matrices-transformations': {
//     'matrix-transformation-of-a-point': {
//       metaTitle: 'Matrix Transformation of a Point | IB AI HL ',
//       metaDescription:
//         'Find the image under a matrix transformation of a point in IB Maths AI HL, including a logo made by repeated maps.',
//       title: 'IB Maths AI HL Matrix Transformation of a Point',
//       description:
//         "A matrix transformation of a point multiplies the matrix by the point's position vector.",
//     },
//     'finding-original-point-given-image': {
//       metaTitle: 'Original Point from Its Image | IB Maths AI HL ',
//       metaDescription:
//         'Find the original point from its image in IB Maths AI HL using the inverse of the transformation matrix.',
//       title: 'IB Maths AI HL Finding the Original Point Given Its Image',
//       description:
//         'Finding the original point from its image reverses the transformation with the inverse matrix.',
//     },
//     'image-of-unit-square-under-transformation': {
//       metaTitle: 'Image of the Unit Square | IB Maths AI HL ',
//       metaDescription:
//         'Draw the image of the unit square under a matrix transformation in IB Maths AI HL, and describe its shape.',
//       title: 'IB Maths AI HL Image of the Unit Square',
//       description:
//         "The image of the unit square shows a matrix's effect: its columns are the images of (1, 0) and (0, 1).",
//     },
//     'finding-matrix-from-image-of-unit-square': {
//       metaTitle: 'Matrix from Image of Unit Square | IB AI HL ',
//       metaDescription:
//         'Find the matrix from the image of the unit square in IB Maths AI HL by reading the images of (1, 0) and (0, 1).',
//       title: "IB Maths AI HL Finding a Matrix from the Unit Square's Image",
//       description:
//         'The matrix from the image of the unit square has the images of (1, 0) and (0, 1) as its columns.',
//     },
//     'matrix-for-standard-transformations': {
//       metaTitle: 'Transformation Matrices | IB Maths AI HL ',
//       metaDescription:
//         'Write down transformation matrices in IB Maths AI HL for stretches, enlargements, reflections and rotations.',
//       title: 'IB Maths AI HL Matrices for Standard Transformations',
//       description:
//         'Transformation matrices for the standard maps follow patterns you can rebuild from the unit square.',
//     },
//     'composite-transformations-on-a-point': {
//       metaTitle: 'Composite Transformations of a Point | IB AI HL ',
//       metaDescription:
//         'Composite transformations in IB Maths AI HL: images of points under sequences of maps, and when order does not matter.',
//       title: 'IB Maths AI HL Composite Transformations on a Point',
//       description:
//         'Composite transformations apply one map after another, so the order of the matrices matters.',
//     },
//     'matrix-for-composite-transformation': {
//       metaTitle: 'Matrix for a Composite Transformation | AI HL ',
//       metaDescription:
//         'Find the matrix for a composite transformation in IB Maths AI HL, including rotations, enlargements and translations.',
//       title: 'IB Maths AI HL Matrix for a Composite Transformation',
//       description:
//         'The matrix for a composite transformation is the product of the matrices, with the first map on the right.',
//     },
//     'area-of-image-of-a-shape': {
//       metaTitle: 'Area of the Image of a Shape | IB Maths AI HL ',
//       metaDescription:
//         'Find the area of the image of a shape in IB Maths AI HL using the determinant of the transformation matrix.',
//       title: 'IB Maths AI HL Area of the Image of a Shape',
//       description: 'The area of the image of a shape is the original area multiplied by |det M|.',
//     },
//     'matrix-transformation-mixed-skills': {
//       metaTitle: 'Matrix Transformations Questions | IB AI HL ',
//       metaDescription:
//         'Matrix transformations questions for IB Maths AI HL that combine images, inverses, areas and invariant points.',
//       title: 'IB Maths AI HL Matrix Transformations: Mixed Skills',
//       description:
//         'These matrix transformations questions bring several skills together in one problem.',
//     },
//     'rotation-and-translation-composite': {
//       metaTitle: 'Rotation Transformation Questions | IB AI HL ',
//       metaDescription:
//         'Rotation transformation in IB Maths AI HL: rotate points through 135°, and combine a rotation with a translation.',
//       title: 'IB Maths AI HL Rotation and Translation Composite',
//       description:
//         'A rotation transformation about the origin uses the matrix with cos θ and sin θ.',
//     },
//     'composite-transformation-area': {
//       metaTitle: 'Composite Transformation Matrix | IB AI HL ',
//       metaDescription:
//         'Use a composite transformation matrix in IB Maths AI HL to identify a reflection and find the area of an image.',
//       title: 'IB Maths AI HL Composite Transformation and Area',
//       description:
//         'A composite transformation matrix can turn out to be a simpler single transformation, such as a reflection.',
//     },
//     'matrix-for-reflection-in-given-line': {
//       metaTitle: 'Reflection Matrix in a Given Line | IB AI HL ',
//       metaDescription:
//         'Find the reflection matrix for a given line in IB Maths AI HL, such as y = 3x, using the angle of the line.',
//       title: 'IB Maths AI HL Matrix for Reflection in a Given Line',
//       description: 'A reflection matrix in y = (tan θ)x uses cos 2θ and sin 2θ.',
//     },
//     'composite-transformation-inverse': {
//       metaTitle: 'Inverse Transformation Matrix | IB Maths AI HL ',
//       metaDescription:
//         'Use the inverse transformation matrix in IB Maths AI HL to reverse a composite transformation, in the right order.',
//       title: 'IB Maths AI HL Composite Transformation: Inverse',
//       description:
//         'An inverse transformation matrix undoes the original map, and for a composite the order reverses.',
//     },
//     'proof-using-rotation-matrices': {
//       metaTitle: 'Proof Using Rotation Matrices | IB Maths AI HL ',
//       metaDescription:
//         'Use rotation matrices in IB Maths AI HL to prove that two rotations combine into one single rotation.',
//       title: 'IB Maths AI HL Proof Using Rotation Matrices',
//       description: 'Rotation matrices multiply to give the rotation through the sum of the angles.',
//     },
//     'composite-of-reflection-and-rotation': {
//       metaTitle: 'Composite of Reflection and Rotation | IB AI HL ',
//       metaDescription:
//         'Find the composite of reflection and rotation in IB Maths AI HL, describe it, and find its invariant lines.',
//       title: 'IB Maths AI HL Composite of Reflection and Rotation',
//       description: 'The composite of reflection and rotation is always another reflection.',
//     },
//     'area-logo-design': {
//       metaTitle: 'Determinant as Area Scale Factor | IB AI HL ',
//       metaDescription:
//         'Use the determinant as an area scale factor in IB Maths AI HL to find the total area of a logo built from images.',
//       title: 'IB Maths AI HL Area: Logo Design',
//       description:
//         "The determinant area scale factor shows how each transformation changes the area of the logo's pieces.",
//     },
//     'matrix-powers-and-area': {
//       metaTitle: 'Matrix Powers and Area | IB Maths AI HL ',
//       metaDescription:
//         'Matrix powers and area in IB Maths AI HL: images of points under Mⁿ, a conjecture for Pₙ and the area scale factor.',
//       title: 'IB Maths AI HL Matrix Powers and Area',
//       description: 'Matrix powers and area are linked: the area scale factor of Mⁿ is (det M)ⁿ.',
//     },
//     'area-under-repeated-transformation': {
//       metaTitle: 'Area under Repeated Transformation | IB AI HL ',
//       metaDescription:
//         "Find the area under repeated transformation in IB Maths AI HL: the unit square's image under a matrix power.",
//       title: 'IB Maths AI HL Area under Repeated Transformation',
//       description:
//         'The area under repeated transformation multiplies by the determinant each time.',
//     },
//     'geometric-interpretation-of-eigenvectors': {
//       metaTitle: 'Geometric Interpretation of Eigenvectors ',
//       metaDescription:
//         'Give a geometric interpretation of eigenvectors in IB Maths AI HL for a reflection in the line y = −x.',
//       title: 'IB Maths AI HL Geometric Interpretation of Eigenvectors',
//       description:
//         'The geometric interpretation of eigenvectors is simple: they are the directions a transformation keeps.',
//     },
//     'invariant-lines-no-real-eigenvalues': {
//       metaTitle: 'Invariant Lines: No Real Eigenvalues | IB AI HL ',
//       metaDescription:
//         'Show a transformation has no invariant lines through the origin in IB Maths AI HL when it has no real eigenvalues.',
//       title: 'IB Maths AI HL Invariant Lines: No Real Eigenvalues',
//       description:
//         'Invariant lines through the origin match the eigenvectors, so no real eigenvalues means no such lines.',
//     },
//     'repeated-composite-transformation': {
//       metaTitle: 'Repeated Composite Transformation | IB AI HL ',
//       metaDescription:
//         'A repeated composite transformation in IB Maths AI HL: an enlargement then a rotation, applied again and again.',
//       title: 'IB Maths AI HL Repeated Composite Transformation',
//       description: 'A repeated composite transformation is one matrix raised to a power.',
//     },
//     'area-of-fractal-design': {
//       metaTitle: 'Area of a Fractal Design | IB Maths AI HL ',
//       metaDescription:
//         'Find the area of a fractal design in IB Maths AI HL by summing areas under repeated transformation as a series.',
//       title: 'IB Maths AI HL Area of a Fractal Design',
//       description:
//         'The area of a fractal design is a geometric series, with the determinant as the common ratio.',
//     },
//   },
//   vectors: {
//     'column-vectors-from-diagrams': {
//       metaTitle: 'Column Vectors from Diagrams | IB Maths AI HL ',
//       metaDescription:
//         'Write column vectors from diagrams in IB Maths AI HL by counting the horizontal and vertical steps of each arrow.',
//       title: 'IB Maths AI HL Column Vectors from Diagrams',
//       description:
//         'Column vectors record movement: the top number is across and the bottom number is up.',
//     },
//     'base-vectors-i-j-k': {
//       metaTitle: 'Base Vectors i, j and k | IB Maths AI HL ',
//       metaDescription:
//         'Write column vectors using base vectors i, j and k in IB Maths AI HL, the unit vectors along each axis.',
//       title: 'IB Maths AI HL Base Vectors i, j, k',
//       description: 'Base vectors i, j and k are unit vectors along the x-, y- and z-axes.',
//     },
//     '3d-column-vectors': {
//       metaTitle: '3D Column Vectors | IB Maths AI HL ',
//       metaDescription:
//         'Write 3D column vectors in IB Maths AI HL from i, j, k form, such as 2i − 3j + k, with zeros where needed.',
//       title: 'IB Maths AI HL 3D Column Vectors',
//       description: '3D column vectors have three components, one for each of i, j and k.',
//     },
//     'vectors-in-terms-of-a-b-c': {
//       metaTitle: 'Vectors in Terms of a, b and c | IB Maths AI HL ',
//       metaDescription:
//         'Write vectors in terms of a and b, and c, in IB Maths AI HL by following routes around a labelled diagram.',
//       title: 'IB Maths AI HL Vectors in Terms of a, b and c',
//       description: 'Writing vectors in terms of a and b means finding a route along known vectors.',
//     },
//     'vector-arithmetic': {
//       metaTitle: 'Vector Arithmetic | IB Maths AI HL ',
//       metaDescription:
//         'Vector arithmetic in IB Maths AI HL: add, subtract and multiply 3D vectors by scalars, such as 2a − 3b.',
//       title: 'IB Maths AI HL Vector Arithmetic',
//       description: 'Vector arithmetic works component by component.',
//     },
//     'vectors-in-a-parallelogram': {
//       metaTitle: 'Vectors in a Parallelogram | IB Maths AI HL ',
//       metaDescription:
//         'Vectors in a parallelogram in IB Maths AI HL: write the diagonals and other sides in terms of a and b.',
//       title: 'IB Maths AI HL Vectors in a Parallelogram',
//       description: 'Vectors in a parallelogram use the fact that opposite sides are equal vectors.',
//     },
//     'parallel-vectors': {
//       metaTitle: 'Parallel Vectors Questions | IB Maths AI HL ',
//       metaDescription:
//         'Parallel vectors questions in IB Maths AI HL: find unknowns p and q, use a scalar parameter, and write a parallel line.',
//       title: 'IB Maths AI HL Parallel Vectors',
//       description:
//         'These parallel vectors questions use one fact: parallel vectors are scalar multiples, so b = ka.',
//     },
//     'unit-vectors': {
//       metaTitle: 'Unit Vectors Questions | IB Maths AI HL ',
//       metaDescription:
//         'Unit vectors in IB Maths AI HL: in the same direction as a, perpendicular to two vectors, and from cross products.',
//       title: 'IB Maths AI HL Unit Vectors',
//       description: 'Unit vectors have magnitude 1 and give a direction only.',
//     },
//     'displacement-vectors': {
//       metaTitle: 'Displacement Vectors | IB Maths AI HL ',
//       metaDescription:
//         'Find displacement vectors in IB Maths AI HL between points with given position vectors, such as AB = b − a.',
//       title: 'IB Maths AI HL Displacement Vectors',
//       description: 'Displacement vectors go from one point to another: AB = b − a.',
//     },
//     'distance-between-points': {
//       metaTitle: 'Distance Between Points in 3D | IB Maths AI HL ',
//       metaDescription:
//         'Find the exact distance between points in 3D in IB Maths AI HL, including an unknown found from a given distance.',
//       title: 'IB Maths AI HL Distance Between Points',
//       description: 'The distance between points is the magnitude of the vector joining them.',
//     },
//     'resultant-vectors': {
//       metaTitle: 'Resultant Vectors and Forces | IB Maths AI HL ',
//       metaDescription:
//         'Resultant vectors in IB Maths AI HL: find a missing vector from a resultant, and the magnitude of a resultant force.',
//       title: 'IB Maths AI HL Resultant Vectors',
//       description: 'Resultant vectors are the sum of all the vectors acting together.',
//     },
//     'vectors-in-geometric-shapes': {
//       metaTitle: 'Vectors in Geometric Shapes | IB Maths AI HL ',
//       metaDescription:
//         'Vectors in geometric shapes in IB Maths AI HL: use midpoints in a rectangle to write and compare vectors.',
//       title: 'IB Maths AI HL Vectors in Geometric Shapes',
//       description:
//         'Vectors in geometric shapes use midpoints and equal sides to link unknown vectors to known ones.',
//     },
//     'vectors-in-a-triangle': {
//       metaTitle: 'Vectors in a Triangle | IB Maths AI HL ',
//       metaDescription:
//         'Vectors in a triangle in IB Maths AI HL: with OA = a and OB = b, find vectors to points that divide a side.',
//       title: 'IB Maths AI HL Vectors in a Triangle',
//       description: 'Vectors in a triangle are built from the two sides that start at the origin.',
//     },
//     'vector-calculations': {
//       metaTitle: 'Vector Calculations | IB Maths AI HL ',
//       metaDescription:
//         'Vector calculations in IB Maths AI HL: combine three given vectors, find magnitudes and test results.',
//       title: 'IB Maths AI HL Vector Calculations',
//       description:
//         'These vector calculations combine several operations on the same three vectors.',
//     },
//     'magnitude-of-vectors': {
//       metaTitle: 'Magnitude of Vectors | IB Maths AI HL ',
//       metaDescription:
//         'Magnitude of vectors in IB Maths AI HL: find k for a given length, and the smallest magnitude of a vector in t.',
//       title: 'IB Maths AI HL Magnitude of Vectors',
//       description:
//         'The magnitude of vectors is their length, found with Pythagoras in three dimensions.',
//     },
//     'solving-vector-equations': {
//       metaTitle: 'Solving Vector Equations | IB Maths AI HL ',
//       metaDescription:
//         'Practise solving vector equations in IB Maths AI HL, finding scalars so that a combination of vectors equals another.',
//       title: 'IB Maths AI HL Solving Vector Equations',
//       description: 'Solving vector equations gives one equation for each component.',
//     },
//     'scaled-vectors': {
//       metaTitle: 'Scaled Vectors: Given Magnitude | IB AI HL ',
//       metaDescription:
//         'Find scaled vectors in IB Maths AI HL: a vector of magnitude 6 that is parallel to a given 3D vector.',
//       title: 'IB Maths AI HL Scaled Vectors',
//       description: 'Scaled vectors keep the direction and change the length.',
//     },
//     'midpoints-and-position-vectors': {
//       metaTitle: 'Midpoint of a Line Segment: Vectors | IB AI HL ',
//       metaDescription:
//         'Find the midpoint of a line segment in IB Maths AI HL from position vectors, as the average of p and q.',
//       title: 'IB Maths AI HL Midpoints and Position Vectors',
//       description: 'The midpoint of a line segment has position vector ½(p + q).',
//     },
//     'dot-product-geometric': {
//       metaTitle: 'Dot Product Questions | IB Maths AI HL ',
//       metaDescription:
//         'The dot product in IB Maths AI HL: use a·b = |a||b| cos θ and the component form a₁b₁ + a₂b₂ + a₃b₃.',
//       title: 'IB Maths AI HL Dot Product',
//       description:
//         'The dot product of two vectors is a number that measures how much they point the same way.',
//     },
//     'angle-between-vectors': {
//       metaTitle: 'Angle Between Vectors | IB Maths AI HL ',
//       metaDescription:
//         'Find the angle between vectors in IB Maths AI HL using cos θ = a·b ÷ (|a||b|), for vectors and lines through points.',
//       title: 'IB Maths AI HL Angle Between Vectors',
//       description: 'The angle between vectors comes from rearranging the dot product formula.',
//     },
//     'angle-at-a-vertex': {
//       metaTitle: 'Angle at a Vertex: Vectors | IB Maths AI HL ',
//       metaDescription:
//         'Find the angle at a vertex in IB Maths AI HL, such as angle BAC, using vectors from A to the other two points.',
//       title: 'IB Maths AI HL Angle at a Vertex',
//       description: 'The angle at a vertex uses two vectors that both start at that vertex.',
//     },
//     'perpendicular-vectors': {
//       metaTitle: 'Perpendicular Vectors | IB Maths AI HL ',
//       metaDescription:
//         'Perpendicular vectors in IB Maths AI HL: find t so a·b = 0, prove lines perpendicular, and find perpendicular components.',
//       title: 'IB Maths AI HL Perpendicular Vectors',
//       description: 'Perpendicular vectors have a dot product of zero.',
//     },
//     'angle-between-lines': {
//       metaTitle: 'Angle Between Lines in 3D | IB Maths AI HL ',
//       metaDescription:
//         'Find the acute angle between lines in IB Maths AI HL from their direction vectors, in vector or parametric form.',
//       title: 'IB Maths AI HL Angle Between Lines',
//       description: 'The angle between lines depends only on their direction vectors.',
//     },
//     'cross-product-magnitude': {
//       metaTitle: 'Cross Product Questions | IB Maths AI HL ',
//       metaDescription:
//         'The cross product in IB Maths AI HL: find a × b in components, and |a × b| = |a||b| sin θ from magnitudes.',
//       title: 'IB Maths AI HL Cross Product',
//       description: 'The cross product of two vectors gives a third vector perpendicular to both.',
//     },
//     'area-of-triangle': {
//       metaTitle: 'Area of Triangle Using Vectors Formula | AI HL ',
//       metaDescription:
//         'Use the area of triangle using vectors formula in IB Maths AI HL, for vertices in 3D or tangent lines to a curve.',
//       title: 'IB Maths AI HL Area of a Triangle',
//       description:
//         'The area of triangle using vectors formula is ½|AB × AC|, half the magnitude of the cross product of two sides.',
//     },
//     'vector-projection-component': {
//       metaTitle: 'Vector Projection | IB Maths AI HL ',
//       metaDescription:
//         'Find the vector projection and scalar component of one vector in the direction of another in IB Maths AI HL.',
//       title: 'IB Maths AI HL Vector Projection (Component)',
//       description: 'Vector projection finds how much of one vector points along another.',
//     },
//     'angle-from-dot-product': {
//       metaTitle: 'Angle from Dot Product | IB Maths AI HL ',
//       metaDescription:
//         'Find the angle from the dot product in IB Maths AI HL when only the two magnitudes and a·b are given.',
//       title: 'IB Maths AI HL Angle from Dot Product',
//       description: 'The angle from the dot product needs only three numbers: |a|, |b| and a·b.',
//     },
//     'finding-magnitude-from-dot-product': {
//       metaTitle: 'Magnitude from Dot Product | IB Maths AI HL ',
//       metaDescription:
//         'Find a magnitude from the dot product in IB Maths AI HL, given a·b, one magnitude and the angle between them.',
//       title: 'IB Maths AI HL Finding Magnitude from Dot Product',
//       description: 'A magnitude from the dot product comes from rearranging a·b = |a||b| cos θ.',
//     },
//     'angle-from-cross-product': {
//       metaTitle: 'Angle from Cross Product | IB Maths AI HL ',
//       metaDescription:
//         'Find the angle from the cross product in IB Maths AI HL, given |a|, |b| and |a × b|, including the obtuse case.',
//       title: 'IB Maths AI HL Angle from Cross Product',
//       description:
//         'The angle from the cross product uses |a × b| = |a||b| sin θ, which gives two possible angles.',
//     },
//     'applied-vector-projection': {
//       metaTitle: 'Applied Vector Projection | IB Maths AI HL ',
//       metaDescription:
//         "Applied vector projection in IB Maths AI HL: the component of a rowing boat's velocity in a given direction.",
//       title: 'IB Maths AI HL Applied Vector Projection',
//       description:
//         'Applied vector projection splits a velocity into the part along a direction and the part across it.',
//     },
//     'angles-of-a-triangle': {
//       metaTitle: 'Angles of a Triangle Using Vectors | IB AI HL ',
//       metaDescription:
//         'Find the angles of a triangle in IB Maths AI HL from its vertices in 3D, using the dot product at each vertex.',
//       title: 'IB Maths AI HL Angles of a Triangle',
//       description: 'The angles of a triangle in 3D come from the dot product at each vertex.',
//     },
//     'parametric-vector-equations-of-lines': {
//       metaTitle: 'Parametric and Vector Equations of Lines ',
//       metaDescription:
//         'Convert between parametric and vector equations of lines in IB Maths AI HL, including a line with constant y.',
//       title: 'IB Maths AI HL Parametric and Vector Equations of Lines',
//       description:
//         'Parametric and vector equations of lines carry the same information in two forms.',
//     },
//     'cross-product-properties-proof': {
//       metaTitle: 'Cross Product Properties | IB Maths AI HL ',
//       metaDescription:
//         'Cross product properties in IB Maths AI HL: explain why (a × b)·a = 0, and evaluate related expressions.',
//       title: 'IB Maths AI HL Cross Product Properties',
//       description:
//         'Cross product properties follow from one fact: a × b is perpendicular to both a and b.',
//     },
//     'cross-product-application': {
//       metaTitle: 'Cross Product Applications | IB Maths AI HL ',
//       metaDescription:
//         'Cross product applications in IB Maths AI HL: find a normal vector and the area of a triangle from three points.',
//       title: 'IB Maths AI HL Cross Product Application',
//       description:
//         'Cross product applications include finding a perpendicular direction and an area in one calculation.',
//     },
//     'parallelogram-proof-and-area': {
//       metaTitle: 'Area of a Parallelogram Using Vectors | AI HL ',
//       metaDescription:
//         'Find the area of a parallelogram using vectors in IB Maths AI HL, after proving the quadrilateral is a parallelogram.',
//       title: 'IB Maths AI HL Parallelogram: Proof and Area',
//       description:
//         'The area of a parallelogram with vectors is the magnitude of the cross product of two adjacent sides.',
//     },
//     'parallelogram-finding-vertex-and-area': {
//       metaTitle: 'Parallelogram Vectors: Vertex and Area | AI HL ',
//       metaDescription:
//         'Parallelogram vectors in IB Maths AI HL: find the fourth vertex D from A, B and C, then find the area.',
//       title: 'IB Maths AI HL Parallelogram: Finding a Vertex and Area',
//       description: 'Parallelogram vectors questions use AB = DC to find a missing vertex.',
//     },
//     'vector-identity-proof': {
//       metaTitle: 'Vector Identity Proof | IB Maths AI HL ',
//       metaDescription:
//         'A vector identity proof in IB Maths AI HL: show that |a × b|² + (a·b)² = |a|²|b|² for any two vectors.',
//       title: 'IB Maths AI HL Vector Identity Proof',
//       description:
//         'This vector identity proof links the dot and cross products through sin²θ + cos²θ = 1.',
//     },
//     'parallelogram-dot-product-proof': {
//       metaTitle: 'Parallelogram Dot Product Proof | IB AI HL ',
//       metaDescription:
//         'A parallelogram dot product proof in IB Maths AI HL: show when the diagonals of a parallelogram are perpendicular.',
//       title: 'IB Maths AI HL Parallelogram and Dot Product Proof',
//       description:
//         'This parallelogram dot product proof writes both diagonals in terms of a and b.',
//     },
//     'lines-and-perpendicularity': {
//       metaTitle: 'Perpendicular Lines in 3D | IB Maths AI HL ',
//       metaDescription:
//         'Perpendicular lines in 3D in IB Maths AI HL: find the foot of a perpendicular from a point and the distance to a line.',
//       title: 'IB Maths AI HL Lines and Perpendicularity',
//       description: 'Perpendicular lines in 3D have direction vectors with a dot product of zero.',
//     },
//     'cuboid-geometry': {
//       metaTitle: 'Vectors in a Cuboid | IB Maths AI HL ',
//       metaDescription:
//         'Vectors in a cuboid in IB Maths AI HL: find vertex coordinates, diagonals and angles inside a 3D box.',
//       title: 'IB Maths AI HL Cuboid Geometry',
//       description: "Vectors in a cuboid use the box's edges as directions along the axes.",
//     },
//   },
//   'geometry-vectors': {
//     'lines-in-3d-equation-through-two-points': {
//       metaTitle: 'Equation of a Line in 3D | IB Maths AI HL ',
//       metaDescription:
//         'Find the equation of a line in 3D in IB Maths AI HL through two points, and test whether a third point lies on it.',
//       title: 'IB Maths AI HL Lines in 3D: Equation Through Two Points',
//       description: 'The equation of a line in 3D needs a point on the line and a direction vector.',
//     },
//     'vector-equation-of-a-line-direction-and-point': {
//       metaTitle: 'Vector Equation of a Line | IB Maths AI HL ',
//       metaDescription:
//         'Write the vector equation of a line in IB Maths AI HL from a point and direction, two points or parametric form.',
//       title: 'IB Maths AI HL Vector Equation of a Line',
//       description:
//         'The vector equation of a line is r = a + λd, a fixed point plus any multiple of a direction.',
//     },
//     'parametric-form-of-a-line': {
//       metaTitle: 'Parametric Form of a Line | IB Maths AI HL ',
//       metaDescription:
//         'Write the parametric form of a line in IB Maths AI HL from its vector equation, and test whether two lines meet.',
//       title: 'IB Maths AI HL Parametric Form of a Line',
//       description: 'The parametric form of a line writes x, y and z separately in terms of λ.',
//     },
//     'intersection-of-two-lines-in-3d': {
//       metaTitle: 'Intersection of Two Lines in 3D Questions ',
//       metaDescription:
//         'Intersection of two lines in 3D questions for IB Maths AI HL: find the coordinates of the meeting point.',
//       title: 'IB Maths AI HL Intersection of Two Lines in 3D',
//       description:
//         'These intersection of two lines in 3D questions use different parameters for each line.',
//     },
//     'non-intersecting-lines-skew-lines': {
//       metaTitle: 'Skew Lines Questions | IB Maths AI HL ',
//       metaDescription:
//         'Skew lines in IB Maths AI HL: show that two lines in 3D neither meet nor run parallel, using their component equations.',
//       title: 'IB Maths AI HL Non-Intersecting Lines (Skew Lines)',
//       description:
//         'Skew lines in 3D never meet and are not parallel, which can only happen in three dimensions.',
//     },
//     'point-on-a-line-parametric-verification': {
//       metaTitle: 'Point on a Line in 3D | IB Maths AI HL ',
//       metaDescription:
//         'Test a point on a line in IB Maths AI HL, find a parameter value, a point at a given distance and a distance to a line.',
//       title: 'IB Maths AI HL Point on a Line: Parametric Verification',
//       description: 'A point on a line gives the same value of λ in every component.',
//     },
//     'equivalent-representations-of-a-line': {
//       metaTitle: 'Equivalent Representations of a Line | IB AI HL ',
//       metaDescription:
//         'Show equivalent representations of a line in IB Maths AI HL: two vector equations that describe the same line.',
//       title: 'IB Maths AI HL Equivalent Representations of a Line',
//       description:
//         'Equivalent representations of a line have parallel directions and share a point.',
//     },
//     'midpoint-on-a-line': {
//       metaTitle: 'Point on a Line at Equal Distance | IB AI HL ',
//       metaDescription:
//         'Find a point on a line at equal distance in IB Maths AI HL: C on l such that AB = BC, using the direction vector.',
//       title: 'IB Maths AI HL Midpoint on a Line',
//       description:
//         'A point on a line at equal distance from B to A is found by repeating the vector AB.',
//     },
//     'intersection-of-lines-defined-by-points': {
//       metaTitle: 'Intersection of Lines Through Points | IB AI HL ',
//       metaDescription:
//         'Find the intersection of lines through points in IB Maths AI HL: lines AB and CD defined by their coordinates.',
//       title: 'IB Maths AI HL Intersection of Lines Defined by Points',
//       description:
//         "The intersection of lines through points starts with writing each line's equation.",
//     },
//     'line-intersecting-an-axis': {
//       metaTitle: 'Line Intersecting an Axis | IB Maths AI HL ',
//       metaDescription:
//         'Find a line intersecting an axis in IB Maths AI HL, or show it never meets one, using components set to zero.',
//       title: 'IB Maths AI HL Line Intersecting an Axis',
//       description:
//         'A line intersecting an axis has two of its three coordinates equal to zero at that point.',
//     },
//     'finding-a-parameter-for-intersecting-lines': {
//       metaTitle: 'Parameter for Intersecting Lines | IB AI HL ',
//       metaDescription:
//         'Find the parameter for intersecting lines in IB Maths AI HL: the value of p that makes two lines meet.',
//       title: 'IB Maths AI HL Finding a Parameter for Intersecting Lines',
//       description:
//         'Finding the parameter for intersecting lines means choosing p so all three component equations agree.',
//     },
//     'shortest-distance-from-a-point-to-a-line': {
//       metaTitle: 'Shortest Distance from a Point to a Line ',
//       metaDescription:
//         'Find the shortest distance from a point to a line in IB Maths AI HL using a perpendicular to the direction vector.',
//       title: 'IB Maths AI HL Shortest Distance from a Point to a Line',
//       description: 'The shortest distance from a point to a line is along the perpendicular.',
//     },
//   },
//   'geometry-and-trigonometry': {
//     'velocity-vectors-and-bearings': {
//       metaTitle: 'Velocity Vectors and Bearings | IB Maths AI HL ',
//       metaDescription:
//         'Velocity vectors and bearings in IB Maths AI HL: find the bearing of a particle from its velocity vector.',
//       title: 'IB Maths AI HL Velocity Vectors and Bearings',
//       description:
//         'Velocity vectors and bearings link components to direction, measured clockwise from north.',
//     },
//     'speed-from-velocity-vectors': {
//       metaTitle: 'Speed from Velocity Vectors | IB Maths AI HL ',
//       metaDescription:
//         'Find speed from velocity vectors in IB Maths AI HL, and write a velocity vector from a given speed and direction.',
//       title: 'IB Maths AI HL Speed from Velocity Vectors',
//       description:
//         'Speed from velocity vectors is the magnitude; direction and speed together give the velocity.',
//     },
//     'position-vectors-with-constant-velocity': {
//       metaTitle: 'Position Vectors with Constant Velocity | AI HL ',
//       metaDescription:
//         'Position vectors with constant velocity in IB Maths AI HL: find where an object is at time t using r = r₀ + tv.',
//       title: 'IB Maths AI HL Position Vectors with Constant Velocity',
//       description: 'Position vectors with constant velocity follow r = r₀ + tv.',
//     },
//     'kinematics-with-constant-velocity': {
//       metaTitle: 'Kinematics with Constant Velocity | IB AI HL ',
//       metaDescription:
//         "Kinematics with constant velocity in IB Maths AI HL: a particle's position, speed and distance travelled in 3D.",
//       title: 'IB Maths AI HL Kinematics with Constant Velocity',
//       description:
//         'Kinematics with constant velocity treats motion as a line, with time as the parameter.',
//     },
//     'relative-position-and-distance-between-particles': {
//       metaTitle: 'Relative Position and Distance | IB Maths AI HL ',
//       metaDescription:
//         'Find the relative position and distance between two particles in IB Maths AI HL from their position vectors.',
//       title: 'IB Maths AI HL Relative Position and Distance Between Particles',
//       description:
//         'The relative position of one particle from another is r₂ − r₁, and its rate of change is v₂ − v₁.',
//     },
//     'vector-equations-of-motion': {
//       metaTitle: 'Vector Equations of Motion | IB Maths AI HL ',
//       metaDescription:
//         'Vector equations of motion in IB Maths AI HL: ships with given positions and velocities, and where they will be.',
//       title: 'IB Maths AI HL Vector Equations of Motion',
//       description: "Vector equations of motion give each ship's position at time t.",
//     },
//     'intersection-and-collision-of-paths': {
//       metaTitle: 'Intersection and Collision of Paths | IB AI HL ',
//       metaDescription:
//         "Intersection and collision of paths in IB Maths AI HL: do two toy helicopters' paths cross, and do they collide?",
//       title: 'IB Maths AI HL Intersection and Collision of Paths',
//       description:
//         'A collision of paths needs both objects at the same point at the same time; crossing paths alone is not enough.',
//     },
//     'distance-between-moving-particles': {
//       metaTitle: 'Distance Between Moving Particles | IB AI HL ',
//       metaDescription:
//         'Find the distance between moving particles in IB Maths AI HL, and the time when the two are closest together.',
//       title: 'IB Maths AI HL Distance Between Moving Particles',
//       description: 'The distance between moving particles is a function of time with a minimum.',
//     },
//     '3d-kinematics-vertical-alignment': {
//       metaTitle: 'Vector Kinematics in 3D | IB Maths AI HL ',
//       metaDescription:
//         'Vector kinematics in 3D for IB Maths AI HL: two flies moving in space, and when one is directly above the other.',
//       title: 'IB Maths AI HL 3D Kinematics: Vertical Alignment',
//       description:
//         'In vector kinematics in 3D, one object is directly above another when their x- and y-components match.',
//     },
//     '3d-kinematics-interception': {
//       metaTitle: 'Interception Problems | IB Maths AI HL ',
//       metaDescription:
//         'Interception problems in IB Maths AI HL: find the velocity a boat needs to intercept another moving object.',
//       title: 'IB Maths AI HL 3D Kinematics: Interception',
//       description: 'Interception problems need both objects at the same position at the same time.',
//     },
//   },
//   'graphs-networks': {
//     'weighted-graphs-adjacency-tables': {
//       metaTitle: 'Weighted Graphs and Adjacency Tables | IB AI HL ',
//       metaDescription:
//         'Weighted graphs in IB Maths AI HL: build adjacency tables from directed and undirected graphs, and draw graphs from tables.',
//       title: 'IB Maths AI HL Weighted Graphs and Adjacency Tables',
//       description:
//         'Weighted graphs give each edge a value, such as a distance or cost, recorded in an adjacency table.',
//     },
//     'transition-matrices': {
//       metaTitle: 'Transition Matrices | IB Maths AI HL ',
//       metaDescription:
//         'Construct transition matrices in IB Maths AI HL for undirected and directed graphs and for Markov chains.',
//       title: 'IB Maths AI HL Transition Matrices',
//       description:
//         'Transition matrices hold the probability of moving from each state to each other state.',
//     },
//     'random-walks-stationary-distribution': {
//       metaTitle: 'Random Walk: Stationary Distribution | IB AI HL ',
//       metaDescription:
//         'A random walk on a graph in IB Maths AI HL: find the proportion of time spent at each vertex in the long run.',
//       title: 'IB Maths AI HL Random Walks and Stationary Distribution',
//       description: 'A random walk on a graph settles into a stationary distribution over time.',
//     },
//     'pagerank-web-search-ranking': {
//       metaTitle: 'PageRank: Web Search Ranking | IB Maths AI HL ',
//       metaDescription:
//         'PageRank in IB Maths AI HL: rank web pages by the long-run probability of a random surfer visiting each one.',
//       title: 'IB Maths AI HL PageRank and Web Search Ranking',
//       description:
//         'PageRank ranks web pages by how often a random surfer following links would land on each.',
//     },
//     'shortest-path-dijkstras-algorithm': {
//       metaTitle: "Dijkstra's Algorithm Questions | IB Maths AI HL ",
//       metaDescription:
//         "Dijkstra's algorithm in IB Maths AI HL: find the shortest route between two vertices on a weighted graph of flights.",
//       title: "IB Maths AI HL Shortest Path (Dijkstra's Algorithm)",
//       description: "Dijkstra's algorithm finds the shortest path from one vertex to every other.",
//     },
//     'drawing-graphs-from-adjacency-tables': {
//       metaTitle: 'Drawing Graphs from Adjacency Tables | IB AI HL ',
//       metaDescription:
//         'Practise drawing graphs from adjacency tables in IB Maths AI HL, such as paths between six locations in a park.',
//       title: 'IB Maths AI HL Drawing Graphs from Adjacency Tables',
//       description: 'Drawing graphs from adjacency tables turns each non-zero entry into an edge.',
//     },
//     'shortest-path-modified': {
//       metaTitle: 'Shortest Path Algorithm: Road Closures | AI HL ',
//       metaDescription:
//         'Use a shortest path algorithm in IB Maths AI HL when a road is closed, and find the new shortest route.',
//       title: 'IB Maths AI HL Shortest Path (Modified)',
//       description:
//         'A shortest path algorithm must be rerun when an edge is removed, since the shortest route can change completely.',
//     },
//     'markov-chains-probability': {
//       metaTitle: 'Markov Chains Probability | IB Maths AI HL ',
//       metaDescription:
//         "Markov chains probability in IB Maths AI HL: probability vectors after several steps, from a tourist's travel between ports.",
//       title: 'IB Maths AI HL Markov Chains and Probability',
//       description:
//         'In Markov chains, probability after n steps comes from multiplying the initial vector by Tⁿ.',
//     },
//     'stationary-distribution-long-run-probability': {
//       metaTitle: 'Long-Run Probability | IB Maths AI HL ',
//       metaDescription:
//         'Find the long run probability in IB Maths AI HL: which port a tourist visits most after travelling for a long time.',
//       title: 'IB Maths AI HL Stationary Distribution and Long-Run Probability',
//       description:
//         'The long run probability of each state is its entry in the stationary distribution.',
//     },
//     'pagerank-with-damping-modified-transition-matrix': {
//       metaTitle: 'PageRank with Damping | IB Maths AI HL ',
//       metaDescription:
//         'PageRank with damping in IB Maths AI HL: a user may stop following links, so build the modified transition matrix.',
//       title: 'IB Maths AI HL PageRank with Damping',
//       description:
//         'PageRank with damping allows a surfer to jump to any page at random, not only along links.',
//     },
//   },
//   'probability-statistics': {
//     'markov-chains-transition-diagrams': {
//       metaTitle: 'Markov Chain Transition Diagram | IB AI HL ',
//       metaDescription:
//         'Use a Markov chain transition diagram in IB Maths AI HL to write the matrix, then find multi-step and steady-state values.',
//       title: 'IB Maths AI HL Markov Chains: Transition Diagrams',
//       description:
//         'A Markov chain transition diagram shows each state and the probability of moving between them.',
//     },
//     'markov-chains-steady-state-algebraic': {
//       metaTitle: 'Steady State Vector | IB Maths AI HL ',
//       metaDescription:
//         'Find the exact steady state vector in IB Maths AI HL for a transition matrix by solving Ts = s with entries summing to 1.',
//       title: 'IB Maths AI HL Markov Chains: Steady-State (Algebraic)',
//       description: 'The steady state vector is unchanged by the transition matrix: Ts = s.',
//     },
//     'markov-chains-applications': {
//       metaTitle: 'Markov Chains: Applications | IB Maths AI HL ',
//       metaDescription:
//         'Markov chains in IB Maths AI HL applied to car purchases, weather and population movement over time.',
//       title: 'IB Maths AI HL Markov Chains: Applications',
//       description:
//         'Markov chains model situations where the next state depends only on the current one.',
//     },
//     'markov-chains-absorbing-states-gamblers-ruin': {
//       metaTitle: "Absorbing Markov Chain: Gambler's Ruin | AI HL ",
//       metaDescription:
//         "An absorbing Markov chain in IB Maths AI HL: the gambler's ruin, where reaching $0 or a target ends the game.",
//       title: 'IB Maths AI HL Markov Chains: Absorbing States',
//       description: 'An absorbing Markov chain has states that, once reached, are never left.',
//     },
//   },
//   statistics: {
//     'validity-reliability-of-survey-questions': {
//       metaTitle: 'Validity in Statistics | IB Maths AI HL ',
//       metaDescription:
//         'Validity in statistics for IB Maths AI HL: define it, and judge whether survey questions measure what they claim to.',
//       title: 'IB Maths AI HL Validity and Reliability of Survey Questions',
//       description:
//         'Validity in statistics asks whether a question or test measures what it is meant to measure.',
//     },
//     'unbiased-estimates-of-population-mean-and-variance': {
//       metaTitle: 'Unbiased Estimates of Mean and Variance | AI HL ',
//       metaDescription:
//         'Find unbiased estimates of mean and variance in IB Maths AI HL for a population, and convert sₙ to sₙ₋₁ with a formula.',
//       title: 'IB Maths AI HL Unbiased Estimates of Population Mean and Variance',
//       description:
//         'Unbiased estimates of mean and variance for a population use x̄ and sₙ₋₁², which divides by n − 1.',
//     },
//     reliability: {
//       metaTitle: 'Reliability in Statistics | IB Maths AI HL ',
//       metaDescription:
//         'Reliability in statistics for IB Maths AI HL: define it and test it with test-retest or parallel forms.',
//       title: 'IB Maths AI HL Reliability',
//       description:
//         'Reliability in statistics asks whether a test gives consistent results when repeated.',
//     },
//     'chi-squared-test-for-independence': {
//       metaTitle: 'Chi-Squared Test | IB Maths AI HL ',
//       metaDescription:
//         'The chi squared test in IB Maths AI HL: goodness of fit for Poisson, normal and binomial models, and independence.',
//       title: 'IB Maths AI HL Chi-Squared Test for Independence and Goodness of Fit',
//       description:
//         'A chi squared test compares observed frequencies with those expected under a model or under independence.',
//     },
//     'hypothesis-testing-binomial-distribution-p-value': {
//       metaTitle: 'Binomial Hypothesis Test | IB Maths AI HL ',
//       metaDescription:
//         'Carry out a binomial hypothesis test in IB Maths AI HL with a p-value, for a new treatment and other contexts.',
//       title: 'IB Maths AI HL Hypothesis Testing: Binomial Distribution (p-value)',
//       description:
//         'A binomial hypothesis test checks whether a proportion has changed, based on a count of successes.',
//     },
//     'hypothesis-testing-binomial-distribution-critical-region': {
//       metaTitle: 'Binomial Critical Region | IB Maths AI HL ',
//       metaDescription:
//         'Find the binomial critical region in IB Maths AI HL for one-tailed tests, and its actual significance level.',
//       title: 'IB Maths AI HL Hypothesis Testing: Binomial Critical Region',
//       description:
//         'The binomial critical region is the set of values that would lead to rejecting H₀.',
//     },
//     'hypothesis-testing-poisson-distribution-p-value': {
//       metaTitle: 'Poisson Distribution Examples | IB Maths AI HL ',
//       metaDescription:
//         'Poisson distribution examples for IB Maths AI HL: properties, p-values and critical regions for hypothesis tests.',
//       title: 'IB Maths AI HL Hypothesis Testing: Poisson Distribution',
//       description:
//         'These Poisson distribution examples cover counts of events in a fixed interval, such as rainy days or typing errors.',
//     },
//     'hypothesis-testing-correlation-pmcc': {
//       metaTitle: 'Hypothesis Test for Correlation | IB AI HL ',
//       metaDescription:
//         'Carry out a hypothesis test for correlation in IB Maths AI HL using the PMCC and its p-value from technology.',
//       title: 'IB Maths AI HL Hypothesis Testing: Correlation (PMCC)',
//       description:
//         'A hypothesis test for correlation asks whether the population correlation ρ is greater than, less than or different from zero.',
//     },
//     'hypothesis-testing-comparing-models': {
//       metaTitle: 'Comparing Hypothesis Tests | IB Maths AI HL ',
//       metaDescription:
//         'Practise comparing hypothesis tests in IB Maths AI HL: find a significance level where binomial and Poisson tests disagree.',
//       title: 'IB Maths AI HL Hypothesis Testing: Comparing Models',
//       description:
//         'Comparing hypothesis tests shows that different models can lead to different conclusions from the same data.',
//     },
//   },
//   calculus: {
//     'differentiation-power-rule': {
//       metaTitle: 'Power Rule Differentiation Questions | IB AI HL ',
//       metaDescription:
//         'Power rule differentiation questions for IB Maths AI HL: fractional powers and surds, such as x^(2/3) and 2√x.',
//       title: 'IB Maths AI HL Differentiation: Power Rule',
//       description:
//         'These power rule differentiation questions use fractional and negative powers as well as whole ones.',
//     },
//     'differentiation-simplifying-before-differentiating': {
//       metaTitle: 'Simplify and Differentiate Questions | IB AI HL ',
//       metaDescription:
//         'Simplify and differentiate questions for IB Maths AI HL: split fractions such as (9x + 1)/x^(4/3) into powers first.',
//       title: 'IB Maths AI HL Differentiation: Simplifying Before Differentiating',
//       description:
//         'In these simplify and differentiate questions, dividing each term by the denominator avoids the quotient rule.',
//     },
//     'differentiation-trigonometric-functions': {
//       metaTitle: 'Derivative of Trig Functions | IB Maths AI HL ',
//       metaDescription:
//         'Find the derivative of trig functions in IB Maths AI HL: sin, cos and tan, including sin 2x and multiples.',
//       title: 'IB Maths AI HL Differentiation: Trigonometric Functions',
//       description:
//         'The derivative of trig functions follows a cycle: sin x gives cos x, and cos x gives −sin x.',
//     },
//     'differentiation-logarithmic-functions': {
//       metaTitle: 'Derivative of ln x | IB Maths AI HL ',
//       metaDescription:
//         'The derivative of ln x in IB Maths AI HL is 1/x; apply it to 3 ln x, ln 4x and other logarithmic functions.',
//       title: 'IB Maths AI HL Differentiation: Logarithmic Functions',
//       description:
//         'The derivative of ln x is 1/x, and ln 4x has the same derivative because ln 4x = ln 4 + ln x.',
//     },
//     'differentiation-exponential-functions': {
//       metaTitle: 'Derivative of e^x | IB Maths AI HL ',
//       metaDescription:
//         'The derivative of e^x in IB Maths AI HL is e^x; differentiate 5eˣ, e³ˣ and products such as xeˣ ln x.',
//       title: 'IB Maths AI HL Differentiation: Exponential Functions',
//       description:
//         'The derivative of e^x is e^x itself, which makes exponential functions central to calculus.',
//     },
//     'gradient-of-a-curve-at-a-point': {
//       metaTitle: 'Gradient of a Curve at a Point | IB Maths AI HL ',
//       metaDescription:
//         'Find the gradient of a curve at a point in IB Maths AI HL, such as y = sin x at π/3 and y = e²ˣ + 5x at x = ln 3.',
//       title: 'IB Maths AI HL Gradient of a Curve at a Point',
//       description: 'The gradient of a curve at a point is the value of the derivative there.',
//     },
//     'rate-of-change-real-world-context': {
//       metaTitle: 'Rate of Change Formula in Context | IB AI HL ',
//       metaDescription:
//         'Use the rate of change formula, dh/dt, in IB Maths AI HL for the height of a falcon during a swooping attack.',
//       title: 'IB Maths AI HL Rate of Change: Real-World Context',
//       description:
//         'The rate of change formula in calculus is the derivative, here dh/dt in metres per second.',
//     },
//     'gradient-conditions-finding-points': {
//       metaTitle: 'Point with a Given Gradient | IB Maths AI HL ',
//       metaDescription:
//         'Find the point with a given gradient in IB Maths AI HL, such as where y = 2 + 5x − eˣ has gradient 4.',
//       title: 'IB Maths AI HL Gradient Conditions: Finding Points',
//       description: 'A point with a given gradient comes from solving f′(x) = k.',
//     },
//     'gradient-at-a-specific-point-exponential': {
//       metaTitle: 'Exact Gradient at a Point | IB Maths AI HL ',
//       metaDescription:
//         'Find the exact gradient of y = eˣ + 3x + 4 at x = ln 2 in IB Maths AI HL, simplifying with e^(ln 2) = 2.',
//       title: 'IB Maths AI HL Gradient at a Specific Point: Exponential',
//       description: 'An exact gradient keeps values like ln 2 and e^(ln 2) in exact form.',
//     },
//     'equation-of-tangent-parallel-lines': {
//       metaTitle: 'Tangent Lines: Parallel and Perpendicular ',
//       metaDescription:
//         'Tangent lines in IB Maths AI HL: tangents parallel or perpendicular to a given line, at a general point and on root curves.',
//       title: 'IB Maths AI HL Equation of a Tangent: Parallel and Perpendicular Lines',
//       description:
//         'Tangent lines with a required direction start from the gradient they must have.',
//     },
//     'equation-of-normal-proof': {
//       metaTitle: 'Equation of Normal Formula: Proof | IB AI HL ',
//       metaDescription:
//         'Use the equation of normal formula in IB Maths AI HL to show a normal to y = 2x − eˣ does not pass through the origin.',
//       title: 'IB Maths AI HL Equation of a Normal: Proof',
//       description:
//         'The equation of normal formula uses the gradient −1/f′(a) through the point on the curve.',
//     },
//     'modelling-exponential-radical-growth': {
//       metaTitle: 'Differentiation in Modelling | IB Maths AI HL ',
//       metaDescription:
//         'Differentiation in modelling for IB Maths AI HL: the rate at which a bacteria population grows on an agar dish.',
//       title: 'IB Maths AI HL Modelling: Exponential and Radical Growth',
//       description: 'Differentiation in modelling turns a population model into a growth rate.',
//     },
//     'modelling-rate-of-change': {
//       metaTitle: 'Rate of Change: Calculus Model | IB Maths AI HL ',
//       metaDescription:
//         'Rate of change calculus in IB Maths AI HL: when is a bacteria population growing fastest under N = (1 + √t)²?',
//       title: 'IB Maths AI HL Modelling: Rate of Change',
//       description: 'Rate of change calculus questions ask how quickly a model changes and when.',
//     },
//     'modelling-limitations': {
//       metaTitle: 'Limitations of a Growth Model | IB Maths AI HL ',
//       metaDescription:
//         'Explain the limitations of a growth model in IB Maths AI HL for bacteria that keep growing without limit.',
//       title: 'IB Maths AI HL Modelling: Limitations',
//       description:
//         'The limitations of a growth model show when it predicts growth that no real dish can support.',
//     },
//     'increasing-decreasing-functions': {
//       metaTitle: 'Where a Function Is Decreasing | IB Maths AI HL ',
//       metaDescription:
//         'Find where a function is decreasing in IB Maths AI HL, such as ln x − 2x, from the sign of its derivative.',
//       title: 'IB Maths AI HL Increasing and Decreasing Functions',
//       description: 'To find where a function is decreasing, solve f′(x) < 0 over its domain.',
//     },
//     'perpendicular-tangents-finding-parameter': {
//       metaTitle: 'Perpendicular Tangents | IB Maths AI HL ',
//       metaDescription:
//         'Find a parameter for perpendicular tangents in IB Maths AI HL, where the tangents to two curves meet at right angles.',
//       title: 'IB Maths AI HL Perpendicular Tangents: Finding a Parameter',
//       description: 'Perpendicular tangents have gradients that multiply to −1.',
//     },
//     'tangent-through-external-point': {
//       metaTitle: 'Tangent Through an External Point | IB AI HL ',
//       metaDescription:
//         'Find a tangent through an external point in IB Maths AI HL, and tangents to trigonometric, log and exponential curves.',
//       title: 'IB Maths AI HL Tangent Through an External Point',
//       description:
//         'A tangent through an external point touches the curve at an unknown point, which must be found first.',
//     },
//     'parallel-tangents-combined-functions': {
//       metaTitle: 'Parallel Tangents | IB Maths AI HL ',
//       metaDescription:
//         'Find parallel tangents in IB Maths AI HL: points on y = x² − 2 ln x where the tangent is parallel to a given line.',
//       title: 'IB Maths AI HL Parallel Tangents: Combined Functions',
//       description:
//         'Parallel tangents share a gradient, so they come from solving one derivative equation.',
//     },
//     'chain-rule-differentiation': {
//       metaTitle: 'Chain Rule Formula | IB Maths AI HL ',
//       metaDescription:
//         'Use the chain rule formula in IB Maths AI HL for composite functions such as (3x + 2)⁴ and sin² 3x, step by step.',
//       title: 'IB Maths AI HL Chain Rule: Differentiation',
//       description:
//         'The chain rule formula, dy/dx = dy/du × du/dx, differentiates a function of a function.',
//     },
//     'exponential-differentiation-applied': {
//       metaTitle: 'Exponential Differentiation: 1/eˣ | IB AI HL ',
//       metaDescription:
//         'Exponential differentiation in IB Maths AI HL: find the derivative of 1/eˣ by rewriting it as e⁻ˣ first.',
//       title: 'IB Maths AI HL Exponential Differentiation: Applied',
//       description: 'Exponential differentiation is easiest when 1/eˣ is rewritten as e⁻ˣ.',
//     },
//     'composite-trigonometric-differentiation': {
//       metaTitle: 'Derivative of sin Squared x | IB Maths AI HL ',
//       metaDescription:
//         'Find the derivative of sin squared x in IB Maths AI HL with the chain rule, and simplify with sin 2x.',
//       title: 'IB Maths AI HL Composite Trigonometric Differentiation',
//       description: 'The derivative of sin squared x comes from the chain rule: 2 sin x cos x.',
//     },
//     'stationary-points-on-trigonometric-curve': {
//       metaTitle: 'Stationary Points of Trig Functions | IB AI HL ',
//       metaDescription:
//         'Find and classify stationary points of trig functions in IB Maths AI HL, and points where a gradient condition holds.',
//       title: 'IB Maths AI HL Stationary Points on a Trigonometric Curve',
//       description:
//         'Stationary points of trig functions repeat across the interval, so check every solution in range.',
//     },
//     'differentiation-applied-to-identity': {
//       metaTitle: 'Differentiating Trig Identities | IB AI HL ',
//       metaDescription:
//         'Practise differentiating trig identities in IB Maths AI HL: deduce cos 2x = cos² x − sin² x from sin 2x.',
//       title: 'IB Maths AI HL Differentiation Applied to an Identity',
//       description: 'Differentiating trig identities turns one known identity into a new one.',
//     },
//     'proof-using-differentiation-and-given-identity': {
//       metaTitle: 'Proof Using Differentiation | IB Maths AI HL ',
//       metaDescription:
//         'A proof using differentiation in IB Maths AI HL: derive the cos 3x identity from the identity for sin 3x.',
//       title: 'IB Maths AI HL Proof Using Differentiation and a Given Identity',
//       description:
//         'This proof using differentiation differentiates both sides of an identity to reach a new one.',
//     },
//     'finding-points-with-specified-gradient': {
//       metaTitle: 'Points with a Specified Gradient | IB AI HL ',
//       metaDescription:
//         'Find all points with a specified gradient on y = ln(x² − 8) in IB Maths AI HL, respecting the domain.',
//       title: 'IB Maths AI HL Finding Points with a Specified Gradient',
//       description:
//         "Points with a specified gradient on a log curve must also lie inside the curve's domain.",
//     },
//     'exponential-derivative-show-that': {
//       metaTitle: 'Exponential Derivative: Show That | IB AI HL ',
//       metaDescription:
//         'Show an exponential derivative result in IB Maths AI HL: if y = e²ˣ, then dy/dx = 2y, by differentiating and substituting.',
//       title: 'IB Maths AI HL Exponential Derivative: Show That',
//       description:
//         'This exponential derivative result shows that the rate of change is proportional to the value.',
//     },
//     'converse-reasoning-with-exponentials': {
//       metaTitle: 'Converse Reasoning with Exponentials | IB AI HL ',
//       metaDescription:
//         'Converse reasoning in IB Maths AI HL: if dy/dx = 2y, must y = e²ˣ? Justify your answer with a counterexample.',
//       title: 'IB Maths AI HL Converse Reasoning with Exponentials',
//       description: 'Converse reasoning tests whether a result also works in reverse.',
//     },
//     'product-rule-differentiation': {
//       metaTitle: 'Product Rule Differentiation | IB Maths AI HL ',
//       metaDescription:
//         'Product rule differentiation in IB Maths AI HL: x sin x, x ln x and products that also need the chain rule.',
//       title: 'IB Maths AI HL Product Rule',
//       description: 'Product rule differentiation handles functions multiplied together.',
//     },
//     'quotient-rule': {
//       metaTitle: 'Quotient Rule Formula | IB Maths AI HL ',
//       metaDescription:
//         'Use the quotient rule formula in IB Maths AI HL to differentiate fractions such as x²/(x + 2), then simplify.',
//       title: 'IB Maths AI HL Quotient Rule',
//       description: 'The quotient rule formula is (vu′ − uv′)/v² for y = u/v.',
//     },
//     'differentiation-evaluation': {
//       metaTitle: 'Evaluate a Derivative | IB Maths AI HL ',
//       metaDescription:
//         'Evaluate a derivative in IB Maths AI HL, such as f′(3) for f(x) = xe²ˣ, using the product and chain rules.',
//       title: 'IB Maths AI HL Differentiation and Evaluation',
//       description: 'To evaluate a derivative at a point, find f′(x) first, then substitute.',
//     },
//     'differentiation-of-functions-with-parameters': {
//       metaTitle: 'Differentiation with Parameters | IB AI HL ',
//       metaDescription:
//         'Differentiation with parameters in IB Maths AI HL: simplify the derivative of x/√(k + x²), treating k as a constant.',
//       title: 'IB Maths AI HL Differentiation of Functions with Parameters',
//       description: 'Differentiation with parameters treats letters like k as fixed numbers.',
//     },
//     'proof-show-that': {
//       metaTitle: 'Differentiation Proof: Show That | IB AI HL ',
//       metaDescription:
//         'A differentiation proof in IB Maths AI HL: show f′(x) for x√(2 + x) has the form (ax + b) ÷ (2√(2 + x)).',
//       title: 'IB Maths AI HL Proof and Show That',
//       description:
//         'A differentiation proof like this needs the working to reach a stated form exactly.',
//     },
//     'proof-increasing-functions': {
//       metaTitle: 'Proving a Function Is Increasing | IB AI HL ',
//       metaDescription:
//         'Practise proving a function is increasing in IB Maths AI HL: show x²/(1 + x) increases for x > a or x < b.',
//       title: 'IB Maths AI HL Proof: Increasing Functions',
//       description:
//         'Proving a function is increasing on an interval means showing the derivative is positive there.',
//     },
//     'differentiation-of-models-real-world-contexts': {
//       metaTitle: 'Differentiation in Real-World Contexts | AI HL ',
//       metaDescription:
//         'Differentiation in real world contexts for IB Maths AI HL: the growth rate of a rabbit population on an island.',
//       title: 'IB Maths AI HL Differentiation of Models in Real-World Contexts',
//       description:
//         'Differentiation in real world contexts gives rates such as how fast a population is growing.',
//     },
//     'limits-behaviour-of-functions': {
//       metaTitle: 'End Behaviour of Functions | IB Maths AI HL ',
//       metaDescription:
//         'Find the end behaviour of functions in IB Maths AI HL: the limit of P = 4 ÷ (1 + 3e⁻ⁿ) as n becomes large.',
//       title: 'IB Maths AI HL Limits and Behaviour of Functions',
//       description:
//         'The end behaviour of functions describes what happens as the input grows without limit.',
//     },
//     'graphs-sketching': {
//       metaTitle: 'Curve Sketching Questions | IB Maths AI HL ',
//       metaDescription:
//         'Curve sketching questions for IB Maths AI HL: sketch a logistic population model with its intercept and asymptote.',
//       title: 'IB Maths AI HL Graphs and Sketching',
//       description:
//         'These curve sketching questions combine an intercept, an asymptote and the overall shape.',
//     },
//     'proof-exponential-functions': {
//       metaTitle: 'Exponential Function Proof | IB Maths AI HL ',
//       metaDescription:
//         'An exponential function proof in IB Maths AI HL: show that xˣ = e^(x ln x) for x > 0 using the laws of logarithms.',
//       title: 'IB Maths AI HL Proof: Exponential Functions',
//       description: 'This exponential function proof rewrites a power using e and ln.',
//     },
//     'related-rates-of-change': {
//       metaTitle: 'Related Rates of Change | IB Maths AI HL ',
//       metaDescription:
//         'Related rates of change in IB Maths AI HL: growing squares, a thrown ball and changing density, using the chain rule.',
//       title: 'IB Maths AI HL Related Rates of Change',
//       description:
//         'Related rates of change link two rates through the chain rule: dy/dt = dy/dx × dx/dt.',
//     },
//     'kinematics-differentiation': {
//       metaTitle: 'Kinematics Examples: Differentiation | IB AI HL ',
//       metaDescription:
//         'Kinematics examples for IB Maths AI HL: find velocity and acceleration from displacement, and the maximum displacement.',
//       title: 'IB Maths AI HL Kinematics: Differentiation',
//       description:
//         'What is kinematics? The study of motion through displacement, velocity and acceleration. These kinematics examples link them by differentiation.',
//     },
//     'kinematics-chain-rule-a-in-terms-of-s': {
//       metaTitle: 'Acceleration in Terms of Displacement | AI HL ',
//       metaDescription:
//         'Find acceleration in terms of displacement in IB Maths AI HL using a = v dv/ds, for racing cars and other models.',
//       title: 'IB Maths AI HL Kinematics: Chain Rule (a in Terms of s)',
//       description: 'Acceleration in terms of displacement uses the chain rule: a = v dv/ds.',
//     },
//     'kinematics-integration-displacement': {
//       metaTitle: 'Displacement from Velocity | IB Maths AI HL ',
//       metaDescription:
//         'Find displacement from velocity in IB Maths AI HL by integrating v between two times, including exponential velocity.',
//       title: 'IB Maths AI HL Kinematics: Integration (Displacement)',
//       description:
//         'Displacement from velocity is the definite integral of v over the time interval.',
//     },
//     'kinematics-integration-velocity-change': {
//       metaTitle: 'Change in Velocity from Acceleration | IB AI HL ',
//       metaDescription:
//         'Find the change in velocity in IB Maths AI HL by integrating acceleration, such as a = 2 cos(t/3), over an interval.',
//       title: 'IB Maths AI HL Kinematics: Integration (Velocity Change)',
//       description: 'The change in velocity is the definite integral of acceleration over time.',
//     },
//     'kinematics-distance-travelled': {
//       metaTitle: 'Distance Travelled: Calculus | IB Maths AI HL ',
//       metaDescription:
//         'Find the distance travelled in IB Maths AI HL by integrating |v|, such as v = sin t / t between t = 1 and t = 5.',
//       title: 'IB Maths AI HL Kinematics: Distance Travelled',
//       description:
//         'Distance travelled counts motion in both directions, so it integrates the speed |v|.',
//     },
//     'kinematics-maximum-speed': {
//       metaTitle: 'Maximum Speed: Calculus | IB Maths AI HL ',
//       metaDescription:
//         'Find the maximum speed in IB Maths AI HL from a velocity model, plus minimum and average speed over an interval.',
//       title: 'IB Maths AI HL Kinematics: Maximum Speed',
//       description:
//         'The maximum speed is the largest value of |v|, which may occur where v is most negative.',
//     },
//     'kinematics-distance-vs-displacement': {
//       metaTitle: 'Distance and Displacement | IB Maths AI HL ',
//       metaDescription:
//         'Distance and displacement in IB Maths AI HL: find both for v = 4 − x² and explain why the two answers differ.',
//       title: 'IB Maths AI HL Kinematics: Distance vs Displacement',
//       description:
//         'Distance and displacement differ because displacement can cancel out when the particle turns back, distance cannot.',
//     },
//     'kinematics-integration-velocity-from-acceleration': {
//       metaTitle: 'Velocity from Acceleration | IB Maths AI HL ',
//       metaDescription:
//         'Find velocity from acceleration in IB Maths AI HL by integrating 2t + 1 and using the initial velocity.',
//       title: 'IB Maths AI HL Kinematics: Velocity from Acceleration',
//       description:
//         'Velocity from acceleration is found by integrating, with the initial velocity fixing the constant.',
//     },
//     'kinematics-mixed-problem': {
//       metaTitle: 'Kinematics Problem: Mixed | IB Maths AI HL ',
//       metaDescription:
//         'A kinematics problem for IB Maths AI HL: a bullet slowing in a viscous fluid, with velocity v = 256 − t⁴.',
//       title: 'IB Maths AI HL Kinematics: Mixed Problem',
//       description:
//         'This kinematics problem combines differentiation and integration in one context.',
//     },
//     'kinematics-proof-constant-acceleration': {
//       metaTitle: 'Constant Acceleration Equations: Proof | AI HL ',
//       metaDescription:
//         'Prove the constant acceleration equations in IB Maths AI HL, such as v = u + at and s = ut + ½at², by integration.',
//       title: 'IB Maths AI HL Kinematics: Proof with Constant Acceleration',
//       description: 'The constant acceleration equations follow from integrating a constant twice.',
//     },
//     'kinematics-shm-proof': {
//       metaTitle: 'Simple Harmonic Motion Examples | IB AI HL ',
//       metaDescription:
//         'Simple harmonic motion examples for IB Maths AI HL: show that x = sin ωt satisfies ẍ = −ω²x by differentiating twice.',
//       title: 'IB Maths AI HL Kinematics: Simple Harmonic Motion Proof',
//       description:
//         'What is simple harmonic motion? Motion where acceleration is proportional to displacement and directed back towards the centre. These simple harmonic motion examples prove it.',
//     },
//     'kinematics-piecewise-acceleration': {
//       metaTitle: 'Piecewise Acceleration Models | IB Maths AI HL ',
//       metaDescription:
//         'Piecewise acceleration models in IB Maths AI HL: a cyclist with different acceleration models over different time intervals.',
//       title: 'IB Maths AI HL Kinematics: Piecewise Acceleration',
//       description:
//         'Piecewise acceleration models need the velocity at the end of one interval to start the next.',
//     },
//     'kinematics-integration-distance': {
//       metaTitle: 'Total Distance Travelled Formula | IB AI HL ',
//       metaDescription:
//         'Use the total distance travelled formula in IB Maths AI HL, ∫|v| dt, for a particle with velocity 1/t − 1.',
//       title: 'IB Maths AI HL Kinematics: Integration (Distance)',
//       description:
//         'The total distance travelled formula integrates the speed, |v|, over the time interval.',
//     },
//     'kinematics-relative-motion': {
//       metaTitle: 'Relative Velocity: Calculus | IB Maths AI HL ',
//       metaDescription:
//         'Relative velocity in IB Maths AI HL: two runners in a race, and when one catches the other, using integration.',
//       title: 'IB Maths AI HL Kinematics: Relative Motion',
//       description:
//         'Relative velocity is the difference between two velocities, and integrating it gives the change in the gap.',
//     },
//     'kinematics-collision-problem': {
//       metaTitle: 'Collision Problems: Kinematics | IB Maths AI HL ',
//       metaDescription:
//         "Collision problems in IB Maths AI HL: a juggler's balls thrown upwards, and when and where they meet.",
//       title: 'IB Maths AI HL Kinematics: Collision Problem',
//       description: 'Collision problems need both objects at the same height at the same time.',
//     },
//     'kinematics-mediant-inequality-proof': {
//       metaTitle: 'Mediant Inequality Proof | IB Maths AI HL ',
//       metaDescription:
//         'Prove the mediant inequality in IB Maths AI HL using average speeds: if a/b < c/d, then (a + c)/(b + d) lies between.',
//       title: 'IB Maths AI HL Kinematics: Mediant Inequality Proof',
//       description:
//         'The mediant inequality has a neat kinematic proof using two journeys at different average speeds.',
//     },
//   },
//   'analysis-approaches': {
//     'second-derivatives': {
//       metaTitle: 'Second Derivative Questions | IB Maths AI HL ',
//       metaDescription:
//         'Find the second derivative in IB Maths AI HL for powers, exponentials, logs and trig, and use it to find unknowns.',
//       title: 'IB Maths AI HL Second Derivatives',
//       description:
//         'The second derivative is the derivative of the derivative. It measures how the gradient is changing.',
//     },
//     'curve-analysis-concavity-monotonicity': {
//       metaTitle: 'Concavity of a Function | IB Maths AI HL ',
//       metaDescription:
//         'Describe the concavity of a function in IB Maths AI HL, with where it increases or decreases, and find unknown constants.',
//       title: 'IB Maths AI HL Curve Analysis: Concavity and Monotonicity',
//       description:
//         'The concavity of a function depends on the sign of f″(x): positive means concave up, negative means concave down.',
//     },
//     'concavity-conditions': {
//       metaTitle: 'Concavity Conditions | IB Maths AI HL ',
//       metaDescription:
//         'Find the values of x that meet concavity conditions in IB Maths AI HL, such as concave up and increasing together.',
//       title: 'IB Maths AI HL Concavity Conditions',
//       description: 'Concavity conditions combine the signs of f′(x) and f″(x).',
//     },
//     'stationary-points-classification': {
//       metaTitle: 'Nature of Stationary Points | IB Maths AI HL ',
//       metaDescription:
//         'Find the nature of stationary points in IB Maths AI HL, classifying maxima, minima and inflections on cubic curves.',
//       title: 'IB Maths AI HL Stationary Points: Classification',
//       description:
//         'The nature of stationary points is decided by the second derivative or by the sign of f′(x) either side.',
//     },
//     'stationary-points-quartic': {
//       metaTitle: 'Classifying Stationary Points | IB Maths AI HL ',
//       metaDescription:
//         'Practise classifying stationary points in IB Maths AI HL on log, exponential, rational and quartic curves, with parameters.',
//       title: 'IB Maths AI HL Stationary Points: Further Curves',
//       description:
//         'Classifying stationary points on harder curves uses the same steps, with more care over the algebra.',
//     },
//     'curve-sketching-from-derivative-conditions': {
//       metaTitle: 'Curve Sketching from Derivatives | IB AI HL ',
//       metaDescription:
//         'Practise curve sketching from derivatives in IB Maths AI HL: sketch f when f < 0, f′ > 0 and f″ < 0.',
//       title: 'IB Maths AI HL Curve Sketching from Derivative Conditions',
//       description: 'Curve sketching from derivatives turns three signs into one shape.',
//     },
//     'concavity-finding-unknown-constant': {
//       metaTitle: 'Concavity Questions | IB Maths AI HL ',
//       metaDescription:
//         'Concavity questions for IB Maths AI HL: find k when y = x³ − kx² + 4x + 7 is concave up only for x > 1.',
//       title: 'IB Maths AI HL Concavity: Finding an Unknown Constant',
//       description: 'These concavity questions use the point where f″(x) changes sign.',
//     },
//     'proof-concavity': {
//       metaTitle: 'Prove a Curve Is Concave Up | IB Maths AI HL ',
//       metaDescription:
//         'Prove a curve is concave up in IB Maths AI HL, such as every parabola y = x² + bx + c, using the second derivative.',
//       title: 'IB Maths AI HL Proof: Concavity',
//       description: 'To prove a curve is concave up everywhere, show f″(x) > 0 for every x.',
//     },
//     'decreasing-gradient-point-of-inflection': {
//       metaTitle: 'Point of Inflection Questions | IB Maths AI HL ',
//       metaDescription:
//         'Point of inflection questions for IB Maths AI HL: find the inflection and where the gradient decreases on a cubic.',
//       title: 'IB Maths AI HL Decreasing Gradient and Point of Inflection',
//       description:
//         'What is a point of inflection? A point where the concavity changes, so f″(x) changes sign. These point of inflection questions find one on a cubic.',
//     },
//     'optimisation-profit-function': {
//       metaTitle: 'Profit Maximisation | IB Maths AI HL ',
//       metaDescription:
//         'Profit maximisation in IB Maths AI HL: find the production level that maximises a monthly profit function.',
//       title: 'IB Maths AI HL Optimisation: Profit Function',
//       description:
//         'Profit maximisation finds the output where the derivative of profit is zero and the profit is greatest.',
//     },
//     'optimisation-volume-of-cuboid': {
//       metaTitle: 'Maximum Volume of a Box | IB Maths AI HL ',
//       metaDescription:
//         'Find the maximum volume of a box in IB Maths AI HL: a square-based cuboid with a fixed surface area or length.',
//       title: 'IB Maths AI HL Optimisation: Volume of a Cuboid',
//       description:
//         'The maximum volume of a box comes from writing volume in one variable, then differentiating.',
//     },
//     'optimisation-rate-of-change': {
//       metaTitle: 'Maximum Rate of Change | IB Maths AI HL ',
//       metaDescription:
//         'Find the maximum rate of change in IB Maths AI HL: when water fills a rain barrel fastest, using V″(t) = 0.',
//       title: 'IB Maths AI HL Optimisation: Rate of Change',
//       description: 'The maximum rate of change happens where the second derivative is zero.',
//     },
//     'optimisation-population-model': {
//       metaTitle: 'Optimisation: Population Model | IB Maths AI HL ',
//       metaDescription:
//         'Optimisation with a population model in IB Maths AI HL: when is a fish population in a lake growing fastest?',
//       title: 'IB Maths AI HL Optimisation: Population Model',
//       description:
//         'This optimisation population model question finds when the growth rate is greatest.',
//     },
//     'range-of-exponential-function': {
//       metaTitle: 'Range of an Exponential Function | IB AI HL ',
//       metaDescription:
//         'Find the range of an exponential function in IB Maths AI HL, such as f(x) = eˣ − ax, in terms of the constant a.',
//       title: 'IB Maths AI HL Range of an Exponential Function',
//       description:
//         'The range of an exponential function like eˣ − ax depends on its minimum value.',
//     },
//     'optimisation-hanging-chain': {
//       metaTitle: 'Catenary: Hanging Chain | IB Maths AI HL ',
//       metaDescription:
//         'A catenary in IB Maths AI HL: model a hanging chain with exponential functions and find its lowest point.',
//       title: 'IB Maths AI HL Optimisation: Hanging Chain',
//       description: 'A catenary is the curve a hanging chain makes, modelled with eˣ and e⁻ˣ.',
//     },
//     'graph-interpretation-derivatives': {
//       metaTitle: 'Interpreting Derivative Graphs | IB Maths AI HL ',
//       metaDescription:
//         'Practise interpreting derivative graphs in IB Maths AI HL: mark stationary points and inflections of f from f′.',
//       title: 'IB Maths AI HL Graph Interpretation: Derivatives',
//       description:
//         "Interpreting derivative graphs means reading f's behaviour from the graph of f′.",
//     },
//     'definite-integration': {
//       metaTitle: 'Definite Integration Formula | IB Maths AI HL ',
//       metaDescription:
//         'Use the definite integration formula in IB Maths AI HL for powers, trig, eˣ and 1/x, and solve for unknown limits.',
//       title: 'IB Maths AI HL Definite Integration',
//       description:
//         'The definite integration formula, ∫ₐᵇ f(x) dx = F(b) − F(a), gives an exact value from an antiderivative.',
//     },
//     'area-under-a-curve': {
//       metaTitle: 'Area Under a Curve Questions | IB Maths AI HL ',
//       metaDescription:
//         'Area under a curve questions for IB Maths AI HL: polynomial, trigonometric and logarithmic curves with several regions.',
//       title: 'IB Maths AI HL Area Under a Curve',
//       description: 'These area under a curve questions include regions above and below the x-axis.',
//     },
//     'area-enclosed-by-curve-and-x-axis': {
//       metaTitle: 'Area Enclosed by a Curve and the x-Axis | AI HL ',
//       metaDescription:
//         'Find the area enclosed by a curve and the x axis in IB Maths AI HL, starting with where y = 9 − x² crosses it.',
//       title: 'IB Maths AI HL Area Enclosed by a Curve and the x-Axis',
//       description:
//         'The area enclosed by a curve and the x axis uses the crossing points as the limits.',
//     },
//     'area-signed-and-unsigned-integrals': {
//       metaTitle: 'Signed Area: Integrals vs Area | IB Maths AI HL ',
//       metaDescription:
//         'Signed area in IB Maths AI HL: compare ∫y dx with the true area when a cubic curve dips below the x-axis.',
//       title: 'IB Maths AI HL Area: Signed and Unsigned Integrals',
//       description:
//         'Signed area counts regions below the axis as negative, so an integral can be smaller than the area.',
//     },
//     'area-between-two-curves-trigonometric': {
//       metaTitle: 'Area Between Two Curves Examples | IB AI HL ',
//       metaDescription:
//         'Area between two curves examples for IB Maths AI HL: exponential curves and y = sin x with y = cos x.',
//       title: 'IB Maths AI HL Area Between Two Curves: Exponential and Trigonometric',
//       description:
//         'These area between two curves examples need exact intersection points as limits.',
//     },
//     'intersection-of-exponential-curves': {
//       metaTitle: 'Intersection of Exponential Curves | IB AI HL ',
//       metaDescription:
//         'Find the intersection of exponential curves in IB Maths AI HL, such as y = e^(−x²) and y = e^(−x), exactly.',
//       title: 'IB Maths AI HL Intersection of Exponential Curves',
//       description:
//         'The intersection of exponential curves with the same base comes from equating the powers.',
//     },
//     'properties-of-definite-integrals': {
//       metaTitle: 'Properties of Definite Integrals | IB AI HL ',
//       metaDescription:
//         'Use the properties of definite integrals in IB Maths AI HL: scale, add and split integrals with given values.',
//       title: 'IB Maths AI HL Properties of Definite Integrals',
//       description:
//         'The properties of definite integrals let you split, combine and scale integrals without integrating.',
//     },
//     'integration-by-recognition-reverse-chain-rule': {
//       metaTitle: 'Reverse Chain Rule: Integration | IB AI HL ',
//       metaDescription:
//         'Use the reverse chain rule in IB Maths AI HL: differentiate x ln x, then use the result to evaluate ∫ ln x dx.',
//       title: 'IB Maths AI HL Integration by Recognition (Reverse Chain Rule)',
//       description:
//         'The reverse chain rule, or integration by recognition, uses a known derivative to integrate.',
//     },
//   },
//   integration: {
//     'power-rule-fractional-negative-indices': {
//       metaTitle: 'Integration Power Rule Formula | IB Maths AI HL ',
//       metaDescription:
//         'Use the integration power rule formula in IB Maths AI HL for fractional and negative indices, such as ∫x^(2/3) dx.',
//       title: 'IB Maths AI HL Integration: Power Rule (Fractional and Negative Indices)',
//       description:
//         'The integration power rule formula, ∫xⁿ dx = xⁿ⁺¹ ÷ (n + 1) + c, works for any n except −1.',
//     },
//     'power-rule-roots-surds': {
//       metaTitle: 'Integrating Square Roots and Surds | IB AI HL ',
//       metaDescription:
//         'Practise integrating square roots and other surds in IB Maths AI HL, such as ½∛x, by writing them as powers.',
//       title: 'IB Maths AI HL Integration: Power Rule (Roots and Surds)',
//       description:
//         'Integrating square roots and cube roots starts with rewriting them as fractional powers.',
//     },
//     'integration-of-trigonometric-functions': {
//       metaTitle: 'Integrating Trig Functions | IB Maths AI HL ',
//       metaDescription:
//         'Integrating trig functions in IB Maths AI HL: find y from 3 cos x, and integrate 3 sin 2x − 2 cos 3x.',
//       title: 'IB Maths AI HL Integration of Trigonometric Functions',
//       description:
//         'Integrating trig functions reverses differentiation: ∫cos x dx = sin x and ∫sin x dx = −cos x.',
//     },
//     'integration-of-exponential-functions': {
//       metaTitle: 'Integration of Exponential Functions | IB AI HL ',
//       metaDescription:
//         'Integration of exponential functions in IB Maths AI HL: find y when dy/dx = 5eˣ, and other multiples of eˣ.',
//       title: 'IB Maths AI HL Integration of Exponential Functions',
//       description:
//         'Integration of exponential functions is simple for eˣ, which integrates to itself.',
//     },
//     'integration-of-1-x': {
//       metaTitle: 'Integral of 1/x | IB Maths AI HL ',
//       metaDescription:
//         'The integral of 1/x in IB Maths AI HL is ln|x| + c; then extend the result to 1/(ax + b) and 1/(x ln x).',
//       title: 'IB Maths AI HL Integration of 1/x',
//       description: 'The integral of 1/x is ln|x| + c, the one case the power rule cannot cover.',
//     },
//     'integration-by-substitution-linear': {
//       metaTitle: 'Integration by Substitution Formula | IB AI HL ',
//       metaDescription:
//         'Use the integration by substitution formula in IB Maths AI HL for linear, polynomial, trig, rational and exponential integrals.',
//       title: 'IB Maths AI HL Integration by Substitution',
//       description:
//         'The integration by substitution formula replaces part of the integrand with u, so the integral becomes simpler.',
//     },
//     'integration-of-trig-with-linear-argument': {
//       metaTitle: 'Integral of sin^3x | IB Maths AI HL ',
//       metaDescription:
//         'Find the integral of sin^3x in IB Maths AI HL using an identity, and integrate cos(2 − 3x) and similar functions.',
//       title: 'IB Maths AI HL Integration of Trig with a Linear Argument',
//       description:
//         'The integral of sin^3x uses sin²x = 1 − cos²x to split it into parts that can be integrated.',
//     },
//     'integration-of-exponential-with-linear-argument': {
//       metaTitle: 'Integral of tan x | IB Maths AI HL ',
//       metaDescription:
//         'Find the integral of tan x in IB Maths AI HL with full working, and integrate eˣ with a linear argument such as e^(5x + 2).',
//       title: 'IB Maths AI HL Integration of tan x and Exponentials with a Linear Argument',
//       description:
//         'The integral of tan x comes from writing it as sin x ÷ cos x, giving −ln|cos x| + c.',
//     },
//     'integration-with-initial-condition': {
//       metaTitle: 'Integration with Initial Conditions | IB AI HL ',
//       metaDescription:
//         'Integration with initial conditions in IB Maths AI HL: find y from dy/dx and one known point, across every function type.',
//       title: 'IB Maths AI HL Integration with an Initial Condition',
//       description:
//         'Integration with initial conditions finds one exact curve from the family F(x) + c.',
//     },
//     'simplify-then-integrate-rational': {
//       metaTitle: 'Integrating Fractions: Simplify First | AI HL ',
//       metaDescription:
//         'Practise integrating fractions in IB Maths AI HL by splitting (4x² + 3)/2x into separate terms first.',
//       title: 'IB Maths AI HL Simplify then Integrate (Rational)',
//       description:
//         'Integrating fractions with a single-term denominator starts with dividing each term.',
//     },
//     'integration-involving-constant-substitution-polynomial': {
//       metaTitle: 'Integration with an Unknown Constant | IB AI HL ',
//       metaDescription:
//         'Integration with an unknown constant in IB Maths AI HL: integrate 4cos³x sin x + kx² + 1, and use substitution.',
//       title: 'IB Maths AI HL Integration Involving a Constant',
//       description:
//         'Integration with an unknown constant treats k like any number during integration.',
//     },
//     'simplify-then-integrate-exponential': {
//       metaTitle: 'Integrating Exponentials | IB Maths AI HL ',
//       metaDescription:
//         'Practise integrating exponentials in IB Maths AI HL by simplifying (e²ˣ − e⁻²ˣ)/eˣ with index laws first.',
//       title: 'IB Maths AI HL Simplify then Integrate (Exponential)',
//       description: 'Integrating exponentials divided by eˣ is easiest after using index laws.',
//     },
//     'use-of-trigonometric-identity-integration': {
//       metaTitle: 'Integration Using Trig Identities | IB AI HL ',
//       metaDescription:
//         'Integration using trig identities in IB Maths AI HL: write cos 2x in terms of sin x, then integrate sin²x.',
//       title: 'IB Maths AI HL Trigonometric Identity and Integration',
//       description:
//         'Integration using trig identities turns sin²x into an expression that can be integrated directly.',
//     },
//     'area-between-curve-and-y-axis': {
//       metaTitle: 'Area Between a Curve and the y-Axis | IB AI HL ',
//       metaDescription:
//         'Find the area between a curve and the y axis in IB Maths AI HL by integrating with respect to y between y-limits.',
//       title: 'IB Maths AI HL Area Between a Curve and the y-Axis',
//       description:
//         'The area between a curve and the y axis uses x as a function of y, with y-limits.',
//     },
//     'volume-of-revolution-x-axis': {
//       metaTitle: 'Volume of Revolution | IB Maths AI HL ',
//       metaDescription:
//         'Volume of revolution in IB Maths AI HL: rotate curves about the x-axis, the y-axis and vertical lines.',
//       title: 'IB Maths AI HL Volume of Revolution',
//       description:
//         'A volume of revolution is the solid formed by rotating a region through 2π about an axis.',
//     },
//     'area-and-volume-x-axis': {
//       metaTitle: 'Area and Volume of Revolution | IB Maths AI HL ',
//       metaDescription:
//         'Area and volume of revolution in IB Maths AI HL: find both for regions under y = √x sin x and y = √(x³ + 9).',
//       title: 'IB Maths AI HL Area and Volume (x-Axis)',
//       description:
//         'Area and volume of revolution questions use the same limits for both integrals.',
//     },
//     'area-and-integration-proof': {
//       metaTitle: 'Area Under a Curve Proof | IB Maths AI HL ',
//       metaDescription:
//         'An area under a curve proof in IB Maths AI HL: the region bounded by y = ln x and the coordinate axes.',
//       title: 'IB Maths AI HL Area and Integration Proof',
//       description:
//         'This area under a curve proof uses integration with respect to y to avoid ∫ln x dx.',
//     },
//     'volume-proof-cone': {
//       metaTitle: 'Volume of a Cone by Integration | IB AI HL ',
//       metaDescription:
//         'Prove the volume of a cone by integration in IB Maths AI HL, rotating a straight line about the x-axis.',
//       title: 'IB Maths AI HL Volume Proof (Cone)',
//       description:
//         'The volume of a cone by integration comes from rotating a line through the origin.',
//     },
//     'volume-proof-sphere': {
//       metaTitle: 'Volume of a Sphere by Integration | IB AI HL ',
//       metaDescription:
//         'Prove the volume of a sphere by integration in IB Maths AI HL, rotating a semicircle about the x-axis.',
//       title: 'IB Maths AI HL Volume Proof (Sphere)',
//       description: 'The volume of a sphere by integration rotates the semicircle y = √(r² − x²).',
//     },
//     'area-ratio-algebraic-proof': {
//       metaTitle: 'Ratio of Areas: Integration Proof | IB AI HL ',
//       metaDescription:
//         'Prove a ratio of areas in IB Maths AI HL: two regions next to the curve y = x³ have areas in a fixed ratio.',
//       title: 'IB Maths AI HL Area Ratio (Algebraic Proof)',
//       description:
//         'This ratio of areas holds for every value of the limit, which is what makes it a proof.',
//     },
//     'volume-about-horizontal-line': {
//       metaTitle: 'Volume About a Horizontal Line | IB Maths AI HL ',
//       metaDescription:
//         'Find a volume about a horizontal line in IB Maths AI HL, rotating part of y = cos x about a line such as y = 1.',
//       title: 'IB Maths AI HL Volume About a Horizontal Line',
//       description:
//         'A volume about a horizontal line measures the radius from that line, not from the x-axis.',
//     },
//   },
//   'differential-equations': {
//     'forming-des': {
//       metaTitle: 'Forming Differential Equations Questions ',
//       metaDescription:
//         'Forming differential equations questions for IB Maths AI HL: bacteria growth, cooling and other rate statements.',
//       title: 'IB Maths AI HL Forming Differential Equations',
//       description:
//         'These forming differential equations questions translate a sentence about a rate into an equation.',
//     },
//     'integration-general-solution': {
//       metaTitle: 'General Solution of a Differential Equation ',
//       metaDescription:
//         'Find the general solution of a differential equation in IB Maths AI HL by direct integration, and for a system.',
//       title: 'IB Maths AI HL Integration: General Solution',
//       description:
//         'The general solution of a differential equation includes an arbitrary constant, so it describes a family of curves.',
//     },
//     'separation-of-variables': {
//       metaTitle: 'Separation of Variables | IB Maths AI HL ',
//       metaDescription:
//         'Separation of variables in IB Maths AI HL: solve dy/dx = f(x)g(y), with initial conditions and short proofs.',
//       title: 'IB Maths AI HL Separation of Variables',
//       description: 'Separation of variables puts every y on one side and every x on the other.',
//     },
//     'applied-de-radioactive-decay': {
//       metaTitle: 'Radioactive Decay Differential Equation | AI HL ',
//       metaDescription:
//         'Solve a radioactive decay differential equation in IB Maths AI HL, where mass decays at a rate proportional to itself.',
//       title: 'IB Maths AI HL Applied DE: Radioactive Decay',
//       description:
//         'A radioactive decay differential equation, dm/dt = −km, gives exponential decay.',
//     },
//     'applied-de-population-growth': {
//       metaTitle: 'Population Growth Differential Equation | AI HL ',
//       metaDescription:
//         'A population growth differential equation in IB Maths AI HL, plus the long-term behaviour of coupled populations.',
//       title: 'IB Maths AI HL Applied DE: Population Growth',
//       description:
//         'A population growth differential equation, dN/dt = kN, models growth proportional to size.',
//     },
//     'applied-de-volume-rate': {
//       metaTitle: 'Rate of Change Differential Equation | AI HL ',
//       metaDescription:
//         'A rate of change differential equation in IB Maths AI HL: a balloon inflated at a rate inversely proportional to its volume.',
//       title: 'IB Maths AI HL Applied DE: Volume and Rate',
//       description:
//         'This rate of change differential equation has dV/dt = k/V, which separates neatly.',
//     },
//     'applied-de-kinematics': {
//       metaTitle: 'Differential Equations in Kinematics | IB AI HL ',
//       metaDescription:
//         'Differential equations in kinematics for IB Maths AI HL: a falling object with air resistance and its terminal velocity.',
//       title: 'IB Maths AI HL Applied DE: Kinematics',
//       description:
//         'Differential equations in kinematics model forces such as air resistance through dv/dt.',
//     },
//     'applied-de-modelling': {
//       metaTitle: 'Differential Equation Modelling | IB AI HL ',
//       metaDescription:
//         "Differential equation modelling in IB Maths AI HL: a raindrop's volume decreases at a rate proportional to its surface area.",
//       title: 'IB Maths AI HL Applied DE: Modelling',
//       description:
//         'Differential equation modelling turns a physical rule into an equation and then a prediction.',
//     },
//     'slope-fields-solution-curves': {
//       metaTitle: 'Slope Fields and Solution Curves | IB AI HL ',
//       metaDescription:
//         'Slope fields in IB Maths AI HL: read and sketch them, draw solution curves and find equilibrium solutions.',
//       title: 'IB Maths AI HL Slope Fields and Solution Curves',
//       description:
//         'Slope fields show the gradient of every solution at each point, so solution curves can be sketched without solving.',
//     },
//     'eulers-method': {
//       metaTitle: "Euler's Method Formula | IB Maths AI HL ",
//       metaDescription:
//         "Use the Euler's method formula in IB Maths AI HL for first-order equations, coupled systems and second-order equations.",
//       title: "IB Maths AI HL Euler's Method",
//       description: "The Euler's method formula steps forward with yₙ₊₁ = yₙ + h × f(xₙ, yₙ).",
//     },
//     'separable-differential-equations': {
//       metaTitle: 'Separable Differential Equations | IB AI HL ',
//       metaDescription:
//         'Solve separable differential equations exactly in IB Maths AI HL, such as dy/dx = xeʸ with y = 0.3 when x = 1.',
//       title: 'IB Maths AI HL Separable Differential Equations',
//       description:
//         "Separable differential equations can be solved exactly, which allows a check on Euler's method.",
//     },
//     'percentage-error': {
//       metaTitle: "Percentage Error: Euler's Method | IB AI HL ",
//       metaDescription:
//         "Find the percentage error in IB Maths AI HL between an Euler's method estimate and the exact solution.",
//       title: 'IB Maths AI HL Percentage Error',
//       description:
//         'Percentage error compares an estimate with the exact value: |estimate − exact| ÷ exact × 100%.',
//     },
//     'coupled-systems-general-solution': {
//       metaTitle: 'Coupled Differential Equations | IB Maths AI HL ',
//       metaDescription:
//         'Find the general solution of coupled differential equations in IB Maths AI HL using eigenvalues and eigenvectors.',
//       title: 'IB Maths AI HL Coupled Systems: General Solution',
//       description:
//         'Coupled differential equations link two rates, each depending on both variables.',
//     },
//     'phase-portraits': {
//       metaTitle: 'Phase Portraits | IB Maths AI HL ',
//       metaDescription:
//         'Draw phase portraits in IB Maths AI HL for coupled systems: saddles, nodes, spirals and centres from eigenvalues.',
//       title: 'IB Maths AI HL Phase Portraits',
//       description:
//         'Phase portraits show how a coupled system moves through the xy-plane over time.',
//     },
//     'numerical-methods-technology': {
//       metaTitle: 'Numerical Methods for Differential Equations ',
//       metaDescription:
//         'Use numerical methods for differential equations in IB Maths AI HL to sketch x against t and y against x with technology.',
//       title: 'IB Maths AI HL Numerical Methods: Technology',
//       description:
//         'Numerical methods for differential equations let technology draw solutions that cannot be found exactly.',
//     },
//     'particular-solution-with-initial-conditions': {
//       metaTitle: 'Particular Solution with Initial Conditions ',
//       metaDescription:
//         'Find the particular solution of a coupled system in IB Maths AI HL from initial conditions such as x(0) = y(0) = 4.',
//       title: 'IB Maths AI HL Particular Solution with Initial Conditions',
//       description:
//         'A particular solution fixes the constants in the general solution using initial conditions.',
//     },
//     'eigenvalues-and-particular-solution': {
//       metaTitle: 'Eigenvalues and Differential Equations | AI HL ',
//       metaDescription:
//         'Use eigenvalues and differential equations together in IB Maths AI HL to find a particular solution of a system.',
//       title: 'IB Maths AI HL Eigenvalues and Particular Solution',
//       description:
//         'Eigenvalues and differential equations meet in coupled systems: each eigenvalue gives one exponential term.',
//     },
//     'technology-solution-curves-and-graphs': {
//       metaTitle: 'Solution Curves Using Technology | IB AI HL ',
//       metaDescription:
//         'Sketch solution curves in IB Maths AI HL with technology for coupled systems, including x against t.',
//       title: 'IB Maths AI HL Technology: Solution Curves and Graphs',
//       description: 'Solution curves show how each variable changes from the initial values.',
//     },
//     'eigenvalues-population-model': {
//       metaTitle: 'Eigenvalues: Population Model | IB Maths AI HL ',
//       metaDescription:
//         'Use an eigenvalues population model in IB Maths AI HL to describe how two populations change over time.',
//       title: 'IB Maths AI HL Eigenvalues and Population Model',
//       description:
//         'In an eigenvalues population model, the sign of each eigenvalue shows growth or decline.',
//     },
//     'population-model-foxes-and-rabbits': {
//       metaTitle: 'Predator–Prey Model | IB Maths AI HL ',
//       metaDescription:
//         'A predator prey model in IB Maths AI HL: foxes and rabbits, birds and insects, with phase portraits and interpretation.',
//       title: 'IB Maths AI HL Population Model: Foxes and Rabbits',
//       description:
//         "A predator prey model links two populations, where each one's growth depends on the other.",
//     },
//     'long-term-ratio': {
//       metaTitle: 'Long-Term Behaviour: Ratio | IB Maths AI HL ',
//       metaDescription:
//         'Find the long term behaviour of a coupled system in IB Maths AI HL: the ratio of foxes to rabbits as t grows.',
//       title: 'IB Maths AI HL Long-Term Ratio',
//       description:
//         'Long term behaviour is controlled by the eigenvector of the largest eigenvalue.',
//     },
//     'equilibrium-state-substitution': {
//       metaTitle: 'Equilibrium Points: Substitution | IB AI HL ',
//       metaDescription:
//         'Find equilibrium points in IB Maths AI HL for a sharks and fish model, then shift the system to the origin.',
//       title: 'IB Maths AI HL Equilibrium State and Substitution',
//       description:
//         'Equilibrium points are where both rates are zero, so the populations stay constant.',
//     },
//     'variable-substitution-to-standard-form': {
//       metaTitle: 'Second Order Differential Equations | IB AI HL ',
//       metaDescription:
//         'Solve second order differential equations in IB Maths AI HL by writing them as a coupled first-order system.',
//       title: 'IB Maths AI HL Variable Substitution to Standard Form',
//       description:
//         'Second order differential equations become coupled systems when you let y = dx/dt.',
//     },
//     'eigenvalues-of-transformed-system': {
//       metaTitle: 'Eigenvalues of a Transformed System | IB AI HL ',
//       metaDescription:
//         'Find the eigenvalues of a system in IB Maths AI HL after substitution, and use them to classify the equilibrium.',
//       title: 'IB Maths AI HL Eigenvalues of a Transformed System',
//       description:
//         'The eigenvalues of a system after shifting to the origin decide the type of equilibrium.',
//     },
//     'stability-of-solutions-2nd-order-odes': {
//       metaTitle: 'Stability of Differential Equations | IB AI HL ',
//       metaDescription:
//         'Decide the stability of differential equations in IB Maths AI HL for second-order equations, using eigenvalues.',
//       title: 'IB Maths AI HL Stability of Solutions (Second-Order ODEs)',
//       description:
//         'The stability of differential equations depends on whether solutions settle down or grow.',
//     },
//     'verification-of-exact-solution-non-linear-ode': {
//       metaTitle: 'Verify a Solution of a Differential Equation ',
//       metaDescription:
//         'Verify a solution of a differential equation in IB Maths AI HL: show y = sin t satisfies a non-linear equation.',
//       title: 'IB Maths AI HL Verification of an Exact Solution (Non-Linear ODE)',
//       description:
//         'To verify a solution of a differential equation, substitute it and its derivatives back in.',
//     },
//   },
// }


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
  let pageData: any = AIHLQuestionAndAnswer?.find((item: any, index: any) => item?.[topicSlug])

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
