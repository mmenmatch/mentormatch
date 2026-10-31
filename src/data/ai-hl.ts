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
    title: 'Logarithms & Exponentials',
    slug: 'logarithms-and-exponentials',
    description:
      'Solve logarithmic and exponential equations using exponential form, the laws of logarithms and the change of base formula.',
    subtopics: [
      {
        title: 'Solving log equations (base 10)',
        slug: 'solving-log-equations',
        description:
          'Learn how to solve base 10 logarithmic equations by rewriting them in exponential form and checking each solution.',
      },
      {
        title: 'Laws of logarithms – expressing in terms of p and q',
        slug: 'laws-of-logarithms-expressing-in-terms-of-p-and-q',
        description:
          'Use the product, quotient and power laws to rewrite logarithms in terms of given values p and q.',
      },
      {
        title: 'Solving equations using log laws',
        slug: 'solving-equations-using-log-laws',
        description:
          'Learn how to combine several logarithms into one, solve the resulting equation and reject invalid solutions.',
      },
      {
        title: 'Solving exponential equations using logarithms',
        slug: 'solving-exponential-equations-using-logarithms',
        description:
          'Understand how to take logarithms of both sides to solve equations where the unknown is in the power.',
      },
      {
        title: 'Solving equations with non-standard bases',
        slug: 'solving-equations-with-non-standard-bases',
        description:
          'Learn how to use the change of base formula to evaluate and solve logarithms in any base.',
      },
    ],
  },
  {
    title: 'Matrices',
    slug: 'matrices',
    description:
      'Add, subtract and multiply matrices, find the inverse of 2×2 and 3×3 matrices, and solve systems of equations using matrix methods.',
    subtopics: [
      {
        title: 'Matrix Addition & Subtraction',
        slug: 'matrix-addition-and-subtraction',
        description:
          'Learn when matrices can be added or subtracted, combine them element by element and solve for unknown entries.',
      },
      {
        title: 'Matrix Multiplication',
        slug: 'matrix-multiplication',
        description:
          'Understand how to check matrix orders, multiply rows by columns and why AB is not always equal to BA.',
      },
      {
        title: 'Matrix Equations',
        slug: 'matrix-equations',
        description:
          'Learn how to write simultaneous equations as AX = B and solve them using the inverse matrix.',
      },
      {
        title: 'Inverse of 3×3 Matrix',
        slug: 'inverse-of-3x3-Matrix',
        description:
          'Understand when a 3×3 matrix has an inverse, find it with a GDC and use it to solve matrix equations.',
      },
      {
        title: 'Inverse of 2×2 Matrix',
        slug: 'inverse-of-2x2-matrix',
        description:
          'Learn how to find the inverse of a 2×2 matrix by hand using the determinant and the swap-and-negate rule.',
      },
    ],
  },
  {
    title: 'Graph Theory',
    slug: 'graph-theory',
    description:
      "Represent graphs with adjacency matrices, find minimum spanning trees with Kruskal's and Prim's algorithms, and solve the travelling salesman problem.",
    subtopics: [
      {
        title: 'Adjacency Matrices',
        slug: 'adjacency-matrices',
        description:
          'Learn how to build an adjacency matrix from a graph and read degrees, loops and connections from it.',
      },
      {
        title: "Kruskal's Algorithm",
        slug: 'kruskals-algorithm',
        description:
          'Understand how to build a minimum spanning tree by adding the shortest edges that do not form a cycle.',
      },
      {
        title: "Prim's Algorithm",
        slug: 'prims-algorithm',
        description:
          'Learn how to grow a minimum spanning tree from a single vertex, on both graphs and distance tables.',
      },
      {
        title: 'Minimum Spanning Trees',
        slug: 'minimum-spanning-trees',
        description:
          'Find a minimum spanning tree, state its total weight and interpret the result in a real-world context.',
      },
      {
        title: 'Travelling Salesman Problem – Nearest Neighbour Algorithm',
        slug: 'travelling-salesman-problem-nearest-neighbour-algorithm',
        description:
          'Learn how to use the nearest neighbour algorithm to find an upper bound for the travelling salesman problem.',
      },
    ],
  },
  {
    title: 'Statistics & Probability',
    slug: 'statistics-and-probability',
    description:
      'Measure model fit with the coefficient of determination, construct confidence intervals with the z- and t-distributions, and work with the Poisson distribution.',
    subtopics: [
      {
        title: 'Coefficient of Determination R²',
        slug: 'coefficient-of-determination-r2',
        description:
          'Learn how to find and interpret R² to measure how well a regression model fits the data.',
      },
      {
        title: 'Confidence Intervals – Unknown Variance (t-distribution)',
        slug: 'confidence-intervals-unknown-variance-t-distribution',
        description:
          'Understand how to construct a confidence interval for the mean using the t-distribution and an unbiased variance estimate.',
      },
      {
        title: 'Confidence Intervals – Known Variance (z-distribution)',
        slug: 'confidence-intervals-known-variance-z-distribution',
        description:
          'Learn how to construct a confidence interval for the mean using the z-distribution when the population variance is known.',
      },
      {
        title: 'Poisson Probability Calculations',
        slug: 'poisson-probability-calculations',
        description:
          'Calculate exact and cumulative Poisson probabilities for events occurring at a constant average rate.',
      },
      {
        title: 'Poisson Mean and Variance',
        slug: 'poisson-mean-and-variance',
        description:
          'Understand why the mean and variance of a Poisson distribution are both λ and use this to test whether the model fits.',
      },
    ],
  },
  {
    title: 'Statistical Hypothesis Testing',
    slug: 'statistical-hypothesis-testing',
    description:
      'Carry out one-sample z-tests and t-tests, find critical regions, and calculate the probabilities of type I and type II errors.',
    subtopics: [
      {
        title: 'One-sample z-test / t-test',
        slug: 'one-sample-z-test-t-test',
        description:
          'Learn how to choose between a z-test and a t-test for a population mean and draw a conclusion in context.',
      },
      {
        title: 'One-sample t-test',
        slug: 'one-sample-t-test',
        description:
          'Understand how to perform a one-sample t-test when the population variance is estimated from the sample.',
      },
      {
        title: 'Critical Region (one-sample z-test)',
        slug: 'critical-region-one-sample-z-test',
        description:
          'Learn how to find the critical region for a one-sample z-test and decide whether to reject the null hypothesis.',
      },
      {
        title: 'One-sample z-test (known σ)',
        slug: 'one-sample-z-test-known-sigma',
        description:
          'Understand how to perform a one-sample z-test when the population standard deviation is known and interpret the p-value.',
      },
      {
        title: 'Type I and Type II Error – Normal Distribution',
        slug: 'type-i-and-type-ii-error-normal-distribution',
        description:
          'Learn how to define type I and type II errors and calculate their probabilities using the normal distribution.',
      },
    ],
  },
]
export const AIHLQuestionAndAnswer = [
  {
    'logarithms-and-exponentials': {
      title: 'Logarithms & Exponentials',
      'solving-log-equations': [
        {
          id: 1,
          question: 'Solve the equation: log₁₀ x = −2',
          type: 'Easy',
          explaination: 'log₁₀ x = −2 ⇒ x = 10⁻² = 0.01',
          answer: 'x = 0.01',
        },
        {
          id: 2,
          question: 'Solve the equation: log₁₀ x = −1',
          type: 'Easy',
          explaination: 'log₁₀ x = −1 ⇒ x = 10⁻¹ = 0.1',
          answer: 'x = 0.1',
        },
        {
          id: 3,
          question: 'Solve the equation: log₁₀(y − 1) = −1',
          type: 'Easy',
          explaination: 'y − 1 = 10⁻¹ = 0.1 ⇒ y = 1.1',
          answer: 'y = 1.1',
        },
        {
          id: 4,
          question: 'Solve the equation: log₁₀(y − 2) = −2',
          type: 'Easy',
          explaination: 'y − 2 = 10⁻² = 0.01 ⇒ y = 2.01',
          answer: 'y = 2.01',
        },
        {
          id: 5,
          question: 'Solve the equation: log₁₀(x + 2) = 2',
          type: 'Easy',
          explaination: 'x + 2 = 10² = 100 ⇒ x = 98',
          answer: 'x = 98',
        },
        {
          id: 6,
          question: 'Solve the equation: log₁₀(x + 3) = 3',
          type: 'Easy',
          explaination: 'x + 3 = 10³ = 1000 ⇒ x = 997',
          answer: 'x = 997',
        },
        {
          id: 7,
          question: 'Solve the equation: log₁₀(t − 1) = 0',
          type: 'Easy',
          explaination: 't − 1 = 10⁰ = 1 ⇒ t = 2',
          answer: 't = 2',
        },
        {
          id: 8,
          question: 'Solve the equation: log₁₀(r + 3) = 0',
          type: 'Easy',
          explaination: 'r + 3 = 10⁰ = 1 ⇒ r = −2',
          answer: 'r = −2',
        },
        {
          id: 9,
          question: 'Solve the equation log₁₀(2x − 4) = 1.',
          type: 'Easy',
          explaination: '2x−4=10 ⇒ 2x=14 ⇒ x=7',
          answer: 'x = 7',
        },
      ],
      'laws-of-logarithms-expressing-in-terms-of-p-and-q': [
        {
          id: 1,
          question:
            'Given that p = log₁₀ a and q = log₁₀ b, write log₁₀(a²/b) in terms of p and q.',
          type: 'Medium',
          explaination: 'log₁₀(a²) − log₁₀(b) = 2log₁₀a − log₁₀b = 2p − q',
          answer: '2p − q',
        },
        {
          id: 2,
          question:
            'Given that p = log₁₀ a and q = log₁₀ b, write log₁₀(b³/a) in terms of p and q.',
          type: 'Medium',
          explaination: '3log₁₀b − log₁₀a = 3q − p',
          answer: '3q − p',
        },
        {
          id: 3,
          question:
            'Given that p = log₁₀ a and q = log₁₀ b, write log₁₀(a²/b³) in terms of p and q.',
          type: 'Medium',
          explaination: '2log₁₀a − 3log₁₀b = 2p − 3q',
          answer: '2p − 3q',
        },
        {
          id: 4,
          question:
            'Given that p = log₁₀ a and q = log₁₀ b, write log₁₀(b⁴/a²) in terms of p and q.',
          type: 'Medium',
          explaination: '4log₁₀b − 2log₁₀a = 4q − 2p',
          answer: '4q − 2p',
        },
        {
          id: 5,
          question: 'Given that p = log₁₀ a and q = log₁₀ b, write log₁₀√a³b in terms of p and q.',
          type: 'Medium',
          explaination: '1/2log₁₀(a³ b) = 1/2(3p + q) = (3p+q)/2',
          answer: '(3p + q)/2',
        },
        {
          id: 6,
          question: 'Given that p = log₁₀ a and q = log₁₀ b, write log₁₀√a⁴b³ in terms of p and q.',
          type: 'Medium',
          explaination: '1/2(4p + 3q) = 2p + 3q/2',
          answer: '2p + 3q/2',
        },
        {
          id: 7,
          question:
            'Given that p = log₁₀ a and q = log₁₀ b, write log₁₀(100a/b²) in terms of p and q.',
          type: 'Medium',
          explaination: 'log₁₀100 + log₁₀a − 2log₁₀b = 2 + p − 2q',
          answer: '2 + p − 2q',
        },
        {
          id: 8,
          question:
            'Given that p = log₁₀ a and q = log₁₀ b, write log₁₀(10a²/b⁵) in terms of p and q.',
          type: 'Medium',
          explaination: 'log₁₀10 + 2p − 5q = 1 + 2p − 5q',
          answer: '1 + 2p − 5q',
        },
      ],
      'solving-equations-using-log-laws': [
        {
          id: 1,
          question: 'Solve: log₁₀ x + log₁₀ 2 = 3',
          type: 'Medium',
          explaination: 'log₁₀(2x) = 3 ⇒ 2x = 1000 ⇒ x = 500',
          answer: 'x = 500',
        },
        {
          id: 2,
          question: 'Solve: log₁₀ x + log₁₀ 5 = 1',
          type: 'Medium',
          explaination: 'log₁₀(5x) = 1 ⇒ 5x = 10 ⇒ x = 2',
          answer: 'x = 2',
        },
        {
          id: 3,
          question: 'Solve: log₁₀(x + 3) + log₁₀ 2 = 2',
          type: 'Medium',
          explaination: 'log₁₀(2(x+3)) = 2 ⇒ 2(x+3) = 100 ⇒ x+3 = 50 ⇒ x = 47',
          answer: 'x = 47',
        },
        {
          id: 4,
          question: 'Solve: log₁₀(x − 1) + log₁₀ 4 = 1',
          type: 'Medium',
          explaination: 'log₁₀(4(x−1)) = 1 ⇒ 4(x−1)=10 ⇒ x − 1 = 2.5 ⇒ x = 3.5',
          answer: 'x = 3.5',
        },
        {
          id: 5,
          question: 'Solve: log₁₀(x + 1) − log₁₀(x − 2) = 1',
          type: 'Medium',
          explaination: 'log₁₀(x+1)/(x−2) = 1 ⇒ (x+1)/(x−2) = 10 ⇒ x+1=10x−20 ⇒ 9x=21 ⇒ x=7/3',
          answer: 'x = 21/9 = 7/3',
        },
        {
          id: 6,
          question: 'Solve: log₁₀(x + 1) − log₁₀(x − 1) = 2',
          type: 'Medium',
          explaination: '(x+1)/(x−1) = 100 ⇒ x+1 = 100x−100 ⇒ 99x = 101 ⇒ x = 101/99',
          answer: 'x = 101/99',
        },
      ],
      'solving-exponential-equations-using-logarithms': [
        {
          id: 1,
          question: 'Use logarithms to solve: 5ˣ = 10',
          type: 'Medium',
          explaination: 'xln5 = ln10 ⇒ x = ln10/ln5',
          answer: 'x = (ln 10)/(ln 5) ≈ 1.43',
        },
        {
          id: 2,
          question: 'Use logarithms to solve: 2 × 3ˣ + 6 = 20',
          type: 'Medium',
          explaination: '2×3ˣ=14 ⇒ 3ˣ=7 ⇒ x=ln7/ln3',
          answer: 'x = (ln 7)/(ln 3) ≈ 1.77',
        },
        {
          id: 3,
          question: 'Solve the equation 3 × 1.1ˣ = 20.',
          type: 'Medium',
          explaination: '1.1ˣ = 20/3 ⇒ x = (ln(20/3))/ln1.1',
          answer: 'x = (ln(20/3))/(ln 1.1) ≈ 19.9',
        },
        {
          id: 4,
          question: 'Given that 5 × 6ˣ = 12 × 3ˣ, write down the exact value of 2ˣ.',
          type: 'Hard',
          explaination: '6ˣ/3ˣ = 12/5 ⇒ 2ˣ = 12/5',
          answer: '2ˣ = 12/5',
        },
        {
          id: 5,
          question: 'Given that 5 × 6ˣ = 12 × 3ˣ, hence find the value of x.',
          type: 'Hard',
          explaination: 'xln2 = ln(12/5) ⇒ x = (ln(12/5))/ln2',
          answer: 'x = (ln(12/5))/(ln 2) ≈ 1.26',
        },
        {
          id: 6,
          question: 'Solve the equation 8³ˣ⁺¹ = 4ˣ⁻³.',
          type: 'Hard',
          explaination:
            '(3x+1)ln8 = (x−3)ln4 ⇒ (3x+1)3ln2 = (x−3)2ln2 ⇒ 9x+3 = 2x−6 ⇒ 7x=−9 ⇒ x=−9/7',
          answer: 'x = −9/7',
        },
      ],
      'solving-equations-with-non-standard-bases': [
        {
          id: 1,
          question: 'Solve the equation logₓ 27 = −3.',
          type: 'Hard',
          explaination: 'x⁻³ = 27 ⇒ x³ = 1/27 ⇒ x = 1/3',
          answer: 'x = 1/3',
        },
        {
          id: 2,
          question: 'Solve the equation logₓ 32 = 5.',
          type: 'Medium',
          explaination: 'x⁵ = 32 ⇒ x = 32^(1/5) = 2',
          answer: 'x = 2',
        },
        {
          id: 3,
          question: 'Solve the equation logₓ 64 = 3.',
          type: 'Medium',
          explaination: 'x³ = 64 ⇒ x = 4',
          answer: 'x = 4',
        },
      ],
    },
  },
  {
    matrices: {
      title: 'Matrices',
      'matrix-addition-and-subtraction': [
        {
          id: 1,
          question: 'Calculate:\n[5, −3; 1, 9] + [−4, 10; −2, 7]',
          type: 'Easy',
          explaination: 'Add corresponding entries:\n(5+(−4), −3+10; 1+(−2), 9+7) = [1, 7; −1, 16]',
          answer: '[1, 7; −1, 16]',
        },
        {
          id: 2,
          question: 'Calculate:\n[5, −3; 1, 9] − [−4, 10; −2, 7]',
          type: 'Easy',
          explaination:
            'Subtract corresponding entries:\n(5−(−4), −3−10; 1−(−2), 9−7) = [9, −13; 3, 2]',
          answer: '[9, −13; 3, 2]',
        },
        {
          id: 3,
          question: 'Calculate:\n[4, 9, 0, −7; −1, 5, 3, 2] − [3, 9, −2, −1; 1, 8, −6, 2]',
          type: 'Medium',
          explaination: 'Subtract element-wise.',
          answer: '[1, 0, 2, −6; −2, −3, 9, 0]',
        },
        {
          id: 4,
          question: 'Calculate:\n[4, 9, 0, −7; −1, 5, 3, 2] + [3, 9, −2, −1; 1, 8, −6, 2]',
          type: 'Medium',
          explaination: 'Add element-wise.',
          answer: '[7, 18, −2, −8; 0, 13, −3, 4]',
        },
        {
          id: 5,
          question: 'Calculate:\n[1, 0, 4; 0, −7, 2] + [2, 8; −6, 1; 3, −5]',
          type: 'Medium',
          explaination:
            'Matrices have different orders (2×3 and 3×2). Addition requires identical orders. Not possible.',
          answer: 'Not possible',
        },
        {
          id: 6,
          question: 'Calculate:\n[1, 0, 4; 0, −7, 2] − [2, 8; −6, 1; 3, −5]',
          type: 'Medium',
          explaination: 'Different orders → subtraction not possible.',
          answer: 'Not possible',
        },
        {
          id: 7,
          question: 'Calculate:\n[11, −5] − [3, −2]',
          type: 'Easy',
          explaination: '(11−3, −5−(−2)) = (8, −3)',
          answer: '[8, −3]',
        },
        {
          id: 8,
          question: 'Calculate:\n[11, −5] + [3, −2]',
          type: 'Easy',
          explaination: '(11+3, −5+(−2)) = (14, −7)',
          answer: '[14, −7]',
        },
      ],
      'matrix-multiplication': [
        {
          id: 1,
          question:
            'Find the matrix product or state that it does not exist:\n[2, −1; 3, 5][0, 4; 1, −2]',
          type: 'Medium',
          explaination: '(2)(0)+(−1)(1)=−1; (2)(4)+(−1)(−2)=10; (3)(0)+(5)(1)=5; (3)(4)+(5)(−2)=2.',
          answer: '[−1, 10; 5, 2]',
        },
        {
          id: 2,
          question:
            'Find the matrix product or state that it does not exist:\n[0, 4; 1, −2][2, −1; 3, 5]',
          type: 'Medium',
          explaination:
            '(0)(2)+(4)(3)=12; (0)(−1)+(4)(5)=20; (1)(2)+(−2)(3)=−4; (1)(−1)+(−2)(5)=−11. Note: AB ≠ BA in general.',
          answer: '[12, 20; −4, −11]',
        },
        {
          id: 3,
          question:
            'Find the matrix product or state that it does not exist:\n[6, 2, 3; 4, −3, 5; 1, −2, 0][1, 0, 5; −2, 2, −1; −3, 4, 0]',
          type: 'Hard',
          explaination: 'Multiply 3×3 by 3×3. Work row by column systematically.',
          answer: '[−7, 16, 28; −5, 14, 23; 5, −4, 7]',
        },
        {
          id: 4,
          question:
            'Find the matrix product or state that it does not exist:\n[1, 0, 5; −2, 2, −1; −3, 4, 0][6, 2, 3; 4, −3, 5; 1, −2, 0]',
          type: 'Hard',
          explaination:
            'Multiply 3×3 by 3×3. Note: product differs from 14a confirming non-commutativity.',
          answer: '[11, −8, 3; −5, −8, 4; −2, −18, 11]',
        },
        {
          id: 5,
          question:
            'Find the matrix product or state that it does not exist:\n[4, 1; −2, 5; 3, −1; 0, −3][1, −1, 2; 0, 3, 5]',
          type: 'Hard',
          explaination: '4×2 multiplied by 2×3 → valid, gives 4×3 matrix. Multiply row by column.',
          answer: '[4, −1, 13; −2, 17, 21; 3, −6, 1; 0, −9, −15]',
        },
        {
          id: 6,
          question:
            'Find the matrix product or state that it does not exist:\n[1, −1, 2; 0, 3, 5][4, 1; −2, 5; 3, −1; 0, −3]',
          type: 'Hard',
          explaination: '2×3 multiplied by 4×2: inner dimensions 3 ≠ 4, so product does not exist.',
          answer: 'Does not exist',
        },
        {
          id: 7,
          question:
            'Find the matrix product or state that it does not exist:\n[2, 5; −1, −9][3, 7]',
          type: 'Medium',
          explaination: '2×2 multiplied by 1×2: inner dimensions 2 ≠ 1. Does not exist.',
          answer: 'Does not exist',
        },
        {
          id: 8,
          question:
            'Find the matrix product or state that it does not exist:\n[3, 7][2, 5; −1, −9]',
          type: 'Medium',
          explaination:
            '1×2 multiplied by 2×2 → valid, gives 1×2.\n(3)(2)+(7)(−1)=−1; (3)(5)+(7)(−9)=−48.',
          answer: '[−1, −48]',
        },
        {
          id: 9,
          question:
            'Find the matrix product or state that it does not exist:\n[2, −3, 4][5; 1; −2]',
          type: 'Medium',
          explaination: '1×3 multiplied by 3×1 → gives 1×1.\n(2)(5)+(−3)(1)+(4)(−2) = 10−3−8 = −1.',
          answer: '[−1]',
        },
        {
          id: 10,
          question:
            'Find the matrix product or state that it does not exist:\n[5; 1; −2][2, −3, 4]',
          type: 'Medium',
          explaination: '3×1 multiplied by 1×3 → gives 3×3 outer product.',
          answer: '[10, −15, 20; 2, −3, 4; −4, 6, −8]',
        },
      ],
      'matrix-equations': [
        {
          id: 1,
          question: 'Given A = [4, 0, 1; 0, −1, 2; 3, −2, 5], find matrix M such that M = 2A − 3I.',
          type: 'Medium',
          explaination:
            '2A = [8, 0, 2; 0, −2, 4; 6, −4, 10], 3I = [3, 0, 0; 0, 3, 0; 0, 0, 3].\nM = 2A−3I = [5, 0, 2; 0, −5, 4; 6, −4, 7].',
          answer: '[5, 0, 2; 0, −5, 4; 6, −4, 7]',
        },
        {
          id: 2,
          question: 'Given A = [4, 0, 1; 0, −1, 2; 3, −2, 5], find matrix M such that M = I − A.',
          type: 'Medium',
          explaination:
            'I − A = [1−4, 0−0, 0−1; 0−0, −1−(−1), 0−2; 0−3, 0−(−2), 1−5] = [−3, 0, −1; 0, 2, −2; −3, 2, −4]',
          answer: '[−3, 0, −1; 0, 2, −2; −3, 2, −4]',
        },
        {
          id: 3,
          question: 'Given A = [4, 0, 1; 0, −1, 2; 3, −2, 5], find matrix M such that A − 4M = 0.',
          type: 'Medium',
          explaination: '4M = A ⇒ M = 1/4A.',
          answer: 'M = 1/4A = [1, 0, 0.25; 0, −0.25, 0.5; 0.75, −0.5, 1.25]',
        },
        {
          id: 4,
          question: 'Given A = [4, 0, 1; 0, −1, 2; 3, −2, 5], find matrix M such that M + 2A = 0.',
          type: 'Medium',
          explaination: 'M = −2A',
          answer: 'M = −2A = [−8, 0, −2; 0, 2, −4; −6, 4, −10]',
        },
      ],
      'inverse-of-3x3-Matrix': [
        {
          id: 1,
          question:
            'Use your GDC to find the inverse of the matrix, or state that it does not exist:\n[−2, 1, 3; 6, 4, 1; −3, 2, 5]',
          type: 'Easy',
          explaination: 'Since det = 3 ≠ 0, inverse exists.\nUse GDC to compute A⁻¹ directly.',
          answer: 'A⁻¹ = (1/3) × [18, 1, −11; −33, −1, 20; 24, 1, −14]',
        },
        {
          id: 2,
          question:
            'Use your GDC to find the inverse of the matrix, or state that it does not exist:\n[−2, 3, 1; 4, 1, −1; 5, 0, −2]',
          type: 'Easy',
          explaination: 'Since det = 8 ≠ 0, inverse exists.\nUse GDC to compute A⁻¹ directly.',
          answer: 'A⁻¹ = (1/8) × [−2, 6, −4; 3, −1, 2; −5, 15, −14]',
        },
        {
          id: 3,
          question:
            'Use your GDC to find the inverse of the matrix, or state that it does not exist:\n[3, −18, 2; −1, 13, −3; 1, 8, −4]',
          type: 'Easy',
          explaination: 'det = 0, so the matrix is singular and the inverse does not exist.',
          answer: 'Inverse does not exist.',
        },
        {
          id: 4,
          question:
            'Use your GDC to find the inverse of the matrix, or state that it does not exist:\n[2, 1, 8; 3, 5, 19; 4, 7, 26]',
          type: 'Easy',
          explaination: 'det = 0, so the matrix is singular and the inverse does not exist.',
          answer: 'Inverse does not exist.',
        },
        {
          id: 5,
          question:
            'Use your GDC to find the inverse of the matrix, or state that it does not exist:\n[1, 0, −2; 2, 4, 0; −3, 1, 5]',
          type: 'Easy',
          explaination: 'det = −8 ≠ 0, so inverse exists.\nUse GDC to compute A⁻¹.',
          answer: 'A⁻¹ = −(1/8) × [20, −2, 8; −10, −1, −4; 14, −1, 4]',
        },
        {
          id: 6,
          question:
            'Use your GDC to find the inverse of the matrix, or state that it does not exist:\n[4, 5, 0; 0, 1, 3; 2, 3, −2]',
          type: 'Easy',
          explaination: 'det = −14 ≠ 0, so inverse exists.\nUse GDC to compute A⁻¹.',
          answer: 'A⁻¹ = −(1/14) × [−11, 10, 15; 6, −8, −12; −2, −2, 4]',
        },
      ],
      'inverse-of-2x2-matrix': [
        {
          id: 1,
          question:
            'Find the inverse of each matrix, or state that the inverse does not exist:\n\n(a) [1, −4; 3, 2]\n\n(b) [3, 4; −2, −1]',
          type: 'Easy',
          explaination:
            '(a) det = 14; A⁻¹ = (1/14) × [2, 4; −3, 1]\n(b) det = 5; A⁻¹ = (1/5) × [−1, −4; 2, 3]',
          answer: '(a) A⁻¹ = (1/14) × [2, 4; −3, 1]\n\n(b) A⁻¹ = (1/5) × [−1, −4; 2, 3]',
        },
        {
          id: 2,
          question:
            'Find the inverse of each matrix, or state that the inverse does not exist:\n\n(a) [−6, 2; −5, 3]\n\n(b) [0, −2; −1, 8]',
          type: 'Easy',
          explaination:
            '(a) det = −8; A⁻¹ = (1/−8) × [3, −2; 5, −6]\n(b) det = −2; A⁻¹ = (1/−2) × [8, 2; 1, 0]',
          answer: '(a) A⁻¹ = −(1/8) × [3, −2; 5, −6]\n\n(b) A⁻¹ = −(1/2) × [8, 2; 1, 0]',
        },
        {
          id: 3,
          question:
            'Find the inverse of each matrix, or state that the inverse does not exist:\n\n(a) [2, 6; 1, 3]\n\n(b) [−5, 10; −2, 4]',
          type: 'Easy',
          explaination:
            '(a) det = 0 → singular → no inverse.\n(b) det = 0 → singular → no inverse.',
          answer: '(a) Inverse does not exist.\n\n(b) Inverse does not exist.',
        },
      ],
    },
  },
  {
    'graph-theory': {
      title: 'Graph Theory',
      'adjacency-matrices': [
        {
          id: 1,
          question:
            'Construct an adjacency matrix for the undirected graph with vertices A, B, C, D where:\n• A is connected to C and D\n• B is connected to C\n• C is connected to A, B, D\n• D is connected to A, C',
          type: 'Easy',
          explaination:
            'Label rows and columns A, B, C, D.\nEntry (i,j) = 1 if there is an edge between vertex i and vertex j, 0 otherwise.\nThe matrix is symmetric for an undirected graph.\nM = [0, 0, 1, 1; 0, 0, 1, 0; 1, 1, 0, 1; 1, 0, 1, 0]',
          answer: 'M = [0, 0, 1, 1; 0, 0, 1, 0; 1, 1, 0, 1; 1, 0, 1, 0]',
        },
        {
          id: 2,
          question:
            'Construct an adjacency matrix for the graph with vertices A, B, C, D that contains:\n• A loop at vertex A\n• A loop at vertex C\n• Two edges between A and B\n• Two edges between C and D\n• Edges A–D and B–C',
          type: 'Medium',
          explaination:
            'Loops at vertex i contribute 2 to entry (i,i) (or 1 depending on convention — IB uses 2 for loops on the diagonal).\nMultiple edges between i and j give the count as entry (i,j).\nM(AA)=2 (loop), M(AB)=M(BA)=2, M(AD)=M(DA)=1, M(BC)=M(CB)=1, M(CC)=2 (loop), M(CD)=M(DC)=2',
          answer: 'M = [2, 2, 0, 1; 2, 0, 1, 0; 0, 1, 2, 2; 1, 0, 2, 0]',
        },
      ],
      'kruskals-algorithm': [
        {
          id: 1,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the graph with vertices G, A, B, C, D, E, F and the following edges (weight in brackets):\nG–A (2), G–F (2), F–E (2), C–D (2), A–E (4), B–C (4), A–B (5), E–C (6), A–C (7).\nDraw your tree and state its weight.",
          type: 'Easy',
          explaination:
            'Sort edges: G–A=2, G–F=2, F–E=2, C–D=2, A–E=4, B–C=4, A–B=5, E–C=6, A–C=7.\nPick G–A=2 ✓ | Pick G–F=2 ✓ | Pick F–E=2 ✓ | Pick C–D=2 ✓ (separate component) | Pick A–E=4: A,G,F,E already connected → skip | Pick B–C=4 ✓ (adds B to C–D component) | Pick A–B=5: connects {A,G,F,E} to {B,C,D} ✓.\nMST edges: G–A, G–F, F–E, C–D, B–C, A–B → 2+2+2+2+4+5=17',
          answer: 'Weight = 17',
        },
        {
          id: 2,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the graph with vertices E, A, B, C, D, F and the following edges:\nE–A (4), A–B (5), E–B (7), E–D (3), E–F (6), D–B (9), B–C (1), D–C (4), F–D (3), D–C (5).\nDraw your tree and state its weight.",
          type: 'Easy',
          explaination:
            'Sort edges: B–C=1, E–D=3, F–D=3, E–A=4, D–C=4, A–B=5, E–F=6, E–B=7, D–B=9.\nPick B–C=1 ✓ | Pick E–D=3 ✓ | Pick F–D=3 ✓ | Pick E–A=4 ✓ | Pick D–C=4: C is in {B,C} and D is in {E,D,F} → connects ✓ | All 6 vertices connected after 5 edges.\nMST: B–C=1, E–D=3, F–D=3, E–A=4, D–C=4 → 1+3+3+4+4 = 15',
          answer: 'Weight = 15',
        },
        {
          id: 3,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the graph with vertices E, A, B, C, D and edges:\nE–A (13), A–B (8), E–B (12), E–D (11), D–C (13), B–C (10), E–C (12).\nDraw your tree and state its weight.",
          type: 'Medium',
          explaination:
            'Sort: A–B=8, B–C=10, E–D=11, E–B=12, E–C=12, E–A=13, D–C=13.\nPick A–B=8 ✓ | Pick B–C=10 ✓ ({A,B,C}) | Pick E–D=11 ✓ ({E,D}) | Pick E–B=12: merges {E,D} with {A,B,C} ✓ | All 5 connected.\nMST edges: A–B=8, B–C=10, E–D=11, E–B=12 → Weight = 8+10+11+12 = 41',
          answer: 'Weight = 41',
        },
        {
          id: 4,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the pentagonal graph with vertices A, B, C, D, E and edges:\nA–E (10), A–B (9), E–D (11), D–C (7), B–C (8), A–D (4), B–D (6).\nDraw your tree and state its weight.",
          type: 'Medium',
          explaination:
            'Sort: A–D=4, B–D=6, D–C=7, B–C=8, A–B=9, A–E=10, E–D=11.\nPick A–D=4 ✓ | Pick B–D=6 ✓ ({A,B,D}) | Pick D–C=7 ✓ ({A,B,C,D}) | Pick B–C=8: cycle → skip | Pick A–B=9: cycle → skip | Pick A–E=10 ✓ (adds E).\nMST: A–D=4, B–D=6, D–C=7, A–E=10 → Weight = 4+6+7+10 = 27',
          answer: 'Weight = 27',
        },
        {
          id: 5,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the graph with vertices K, R, L, S, M, N, P, Q and edges:\nK–R (8), K–L (7), R–S (4), K–S (6), L–S (6), L–M (7), S–M (17), S–N (11), M–N (12), N–P (10), P–Q (13), Q–R (9), Q–S (5), R–P (5).\nDraw your tree and state its weight.",
          type: 'Hard',
          explaination:
            'Sort: R–S=4, Q–S=5, R–P=5, K–S=6, L–S=6, K–L=7, L–M=7, K–R=8, Q–R=9, N–P=10, S–N=11, M–N=12, P–Q=13, S–M=17.\nPick R–S=4 ✓ | Q–S=5 ✓ | R–P=5 ✓ ({Q,R,S,P}) | K–S=6 ✓ ({K,Q,R,S,P}) | L–S=6 ✓ ({K,L,Q,R,S,P}) | L–M=7 ✓ | N–P=10 ✓.\nMST: R–S=4, Q–S=5, R–P=5, K–S=6, L–S=6, L–M=7, N–P=10 → Weight = 43',
          answer: 'Weight = 43',
        },
        {
          id: 6,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the graph given by the following adjacency table. Draw your tree and state its weight.\n\nColumns: A, B, C, D, E\nA: −, 10, 8, 7, 10\nB: 10, −, 5, 4, 9\nC: 8, 5, −, 7, 10\nD: 7, 4, 7, −, 8\nE: 10, 9, 10, 8, −",
          type: 'Medium',
          explaination:
            'Edges sorted: B–D=4, B–C=5, A–D=7, C–D=7, A–C=8, D–E=8, B–E=9, A–B=10, A–E=10, C–E=10.\nPick B–D=4 ✓ | B–C=5 ✓ ({B,C,D}) | A–D=7 ✓ ({A,B,C,D}) | C–D=7: cycle → skip | A–C=8: cycle → skip | D–E=8 ✓ (all connected).\nMST: B–D=4, B–C=5, A–D=7, D–E=8 → Weight = 4+5+7+8 = 24',
          answer: 'MST weight = 24',
        },
        {
          id: 7,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the graph given by the following adjacency table. Draw your tree and state its weight.\n\nColumns: A, B, C, D, E\nA: −, 12, 16, 11, 16\nB: 12, −, 13, 14, 19\nC: 16, 13, −, 15, 18\nD: 11, 14, 15, −, 18\nE: 16, 19, 18, 18, −",
          type: 'Medium',
          explaination:
            'Edges sorted: A–D=11, A–B=12, B–C=13, B–D=14, C–D=15, A–C=16, A–E=16, C–E=18, D–E=18, B–E=19.\nPick A–D=11 ✓ | A–B=12 ✓ ({A,B,D}) | B–C=13 ✓ ({A,B,C,D}) | B–D=14: cycle → skip | C–D=15: cycle → skip | A–C=16: cycle → skip | A–E=16 ✓ (all 5 connected).\nMST: A–D=11, A–B=12, B–C=13, A–E=16 → Weight = 11+12+13+16 = 52',
          answer: 'MST weight = 52',
        },
        {
          id: 8,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the graph given by the following adjacency table (7 vertices A–G). Draw your tree and state its weight.\n\nColumns: A, B, C, D, E, F, G\nA: −, −, 30, −, −, 50, 45\nB: −, −, 70, 35, 40, −, −\nC: 30, 70, −, 50, −, −, 20\nD: −, 35, 50, −, 10, −, 15\nE: −, 40, −, 10, −, 15, −\nF: 50, −, −, −, 15, −, 10\nG: 45, −, 20, 15, −, 10, −",
          type: 'Hard',
          explaination:
            'Edges sorted: D–E=10, F–G=10, D–G=15, E–F=15, C–G=20, A–C=30, B–D=35, B–E=40, A–G=45, A–F=50, C–D=50, B–C=70.\nPick D–E=10 ✓ | F–G=10 ✓ | D–G=15 ✓ (merges {D,E} with {F,G} = {D,E,F,G}) | E–F=15: cycle → skip | C–G=20 ✓ ({C,D,E,F,G}) | A–C=30 ✓ ({A,C,D,E,F,G}) | B–D=35 ✓ (all 7 connected).\nMST: D–E=10, F–G=10, D–G=15, C–G=20, A–C=30, B–D=35 → Weight = 10+10+15+20+30+35 = 120',
          answer: 'MST weight = 120',
        },
        {
          id: 9,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the graph given by the following adjacency table (7 vertices A–G). Draw your tree and state its weight.\n\nColumns: A, B, C, D, E, F, G\nA: −, 25, 35, 40, −, −, −\nB: 25, −, 50, 35, 40, −, −\nC: 35, 50, −, 45, 45, −, 40\nD: 40, 35, 45, −, 20, 35, 30\nE: −, 40, 45, 20, −, 15, 25\nF: −, −, −, 35, 15, −, −\nG: −, −, 40, 30, 25, −, −",
          type: 'Hard',
          explaination:
            'Edges sorted: E–F=15, D–E=20, A–B=25, E–G=25, D–G=30, A–C=35, B–D=35, D–F=35, A–D=40, B–E=40, C–G=40, C–D=45, C–E=45, B–C=50.\nPick E–F=15 ✓ | D–E=20 ✓ ({D,E,F}) | A–B=25 ✓ | E–G=25 ✓ ({D,E,F,G}) | D–G=30: cycle → skip | A–C=35 ✓ ({A,B,C}) | B–D=35 ✓ (merges {A,B,C} with {D,E,F,G}: all 7 connected).\nMST: E–F=15, D–E=20, A–B=25, E–G=25, A–C=35, B–D=35 → Weight = 15+20+25+25+35+35 = 155',
          answer: 'MST weight = 155',
        },
        {
          id: 10,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the graph given by the following adjacency table (6 vertices A–F). Draw your tree and state its weight.\n\nColumns: A, B, C, D, E, F\nA: −, 4, −, 6, −, 10\nB: 4, −, 5, −, 5, −\nC: −, 5, −, 6, −, 4\nD: 6, −, 6, −, 7, −\nE: −, 5, −, 7, −, 2\nF: 10, −, 4, −, 2, −",
          type: 'Medium',
          explaination:
            'Edges sorted: E–F=2, A–B=4, C–F=4, B–C=5, B–E=5, A–D=6, C–D=6, D–E=7, A–F=10.\nPick E–F=2 ✓ | A–B=4 ✓ | C–F=4 ✓ ({C,E,F}) | B–C=5 ✓ (merges {A,B} with {C,E,F} = {A,B,C,E,F}) | B–E=5: cycle → skip | A–D=6 ✓ (adds D: all 6 connected).\nMST: E–F=2, A–B=4, C–F=4, B–C=5, A–D=6 → Weight = 2+4+4+5+6 = 21',
          answer: 'MST weight = 21',
        },
        {
          id: 11,
          question:
            "Use Kruskal's algorithm to find the minimum spanning tree for the graph given by the following adjacency table (6 vertices A–F). Draw your tree and state its weight.\n\nColumns: A, B, C, D, E, F\nA: −, 5, 7, −, 8, 8\nB: 5, −, 6, −, 5, −\nC: 7, 6, −, 4, 4, 3\nD: −, −, 4, −, 5, 2\nE: 8, 5, 4, 5, −, −\nF: 8, −, 3, 2, −, −",
          type: 'Medium',
          explaination:
            'Edges sorted: D–F=2, C–F=3, C–D=4, C–E=4, A–B=5, B–E=5, D–E=5, B–C=6, A–C=7, A–E=8, A–F=8.\nPick D–F=2 ✓ | C–F=3 ✓ ({C,D,F}) | C–D=4: cycle → skip | C–E=4 ✓ ({C,D,E,F}) | A–B=5 ✓ | B–E=5 ✓ (merges {A,B} with {C,D,E,F}: all 6 connected).\nMST: D–F=2, C–F=3, C–E=4, A–B=5, B–E=5 → Weight = 2+3+4+5+5 = 19',
          answer: 'MST weight = 19',
        },
        {
          id: 12,
          question:
            "The graph alongside shows travel time, in minutes, for bus routes between different locations A, B, C, D, E, F in a town. Some routes are to be closed, but it must still be possible to get from any location to any other. Edges:\nA–F (15), A–B (12), A–C (17), F–C (16), F–E (15), B–C (17), B–D (8), C–D (10), C–E (10), D–E (20).\n\n(a) Use Kruskal's algorithm to determine which routes should remain open.\n\nIt is required that the route CF remains open.\n(b) Describe how you could adapt Kruskal's algorithm to determine which other routes should remain open.",
          type: 'Hard',
          explaination:
            "(a) Sort edges: B–D=8, C–D=10, C–E=10, A–B=12, A–F=15, F–E=15, F–C=16, A–C=17, B–C=17, D–E=20.\nPick B–D=8 ✓ | C–D=10 ✓ ({B,C,D}) | C–E=10 ✓ ({B,C,D,E}) | A–B=12 ✓ ({A,B,C,D,E}) | A–F=15 ✓ (all 6 connected). MST weight = 8+10+10+12+15 = 55.\nRoutes to remain open: B–D, C–D, C–E, A–B, A–F.\n\n(b) Start by including edge C–F first (mandatory). Then apply Kruskal's to the remaining edges in weight order, skipping any that form a cycle, until all vertices are connected. This ensures C–F is always in the spanning tree.",
          answer: '(a) MST edges: B–D=8, C–D=10, C–E=10, A–B=12, A–F=15. Weight = 55 min.',
        },
      ],
      'prims-algorithm': [
        {
          id: 1,
          question:
            "Use Prim's algorithm starting at vertex A to find the minimum spanning tree for the graph with vertices A, B, C, D, E, F and edges:\nC–E (2), C–A (4), E–F (7), A–F (6), A–B (3), B–D (1), B–F (6), D–F (4).\nState the edges in the order you add them.",
          type: 'Medium',
          explaination:
            'Start at A. Edges from A: A–B=3, A–C=4, A–F=6.\nStep 1: Pick A–B=3 → Add B. Candidates: C(4), F(6), B–D=1, B–F=6.\nStep 2: Pick B–D=1 → Add D. Candidates: C(4), F(6), D–F=4.\nStep 3: Pick D–F=4 or A–C=4 (tie). Pick D–F=4 → Add F. Candidates: C(4), E via F=7.\nStep 4: Pick A–C=4 → Add C. Candidates: C–E=2.\nStep 5: Pick C–E=2 → Add E. All vertices connected.\nOrder: A–B, B–D, D–F, A–C, C–E. Weight = 3+1+4+4+2 = 14',
          answer: 'Weight = 14',
        },
        {
          id: 2,
          question:
            "Use Prim's algorithm starting at vertex A to find the minimum spanning tree for the graph with vertices A, B, C, D, E, F and edges:\nA–B (4), A–D (4), A–C (5), C–E (4), C–F (3), D–F (4), B–C (4).\nState the edges in the order you add them.",
          type: 'Medium',
          explaination:
            'Start at A. Candidates: A–B=4, A–D=4, A–C=5.\nStep 1: Pick A–B=4 → Add B. Candidates: D(4), C(5), B–C=4.\nStep 2: Pick A–D=4 (or B–C=4). Pick A–D=4 → Add D. Candidates: C(5 or 4), D–F=4.\nStep 3: Pick D–F=4 → Add F. Candidates: C–F=3, C(4 or 5).\nStep 4: Pick C–F=3 → Add C. Candidates: C–E=4.\nStep 5: Pick C–E=4 → Add E. All connected.\nOrder: A–B, A–D, D–F, C–F, C–E. Weight = 4+4+4+3+4 = 19',
          answer: 'Weight = 19',
        },
        {
          id: 3,
          question:
            "Use Prim's algorithm starting at vertex A to find the minimum spanning tree for the graph with vertices A, B, C, D, E and edges:\nA–E (7), A–B (7), E–B (13), E–D (4), E–C (8), A–C (8), B–C (8).\nState the edges in the order you add them.",
          type: 'Medium',
          explaination:
            'Start at A. Candidates: A–E=7, A–B=7, A–C=8.\nStep 1: Pick A–E=7 → Add E. Candidates: B(7), C(8), E–D=4, E–B=13, E–C=8.\nStep 2: Pick E–D=4 → Add D. (D has no new edges to add.)\nStep 3: Pick A–B=7 → Add B. Candidates: C(8).\nStep 4: Pick A–C=8 (or E–C=8 or B–C=8). Pick any = 8 → Add C.\nOrder: A–E=7, E–D=4, A–B=7, A–C=8. Weight = 7+4+7+8 = 26',
          answer: 'Weight = 26',
        },
        {
          id: 4,
          question:
            "Use Prim's algorithm starting at vertex A to find the minimum spanning tree for the pentagonal graph with vertices A, B, C, D, E and edges:\nA–E (5), A–B (5), E–B (7), E–D (5), E–C (7), D–C (5), B–C (5), D–B (7).\nState the edges in the order you add them.",
          type: 'Medium',
          explaination:
            'Start at A. Candidates: A–E=5, A–B=5.\nStep 1: Pick A–E=5 → Add E. Candidates: B(5), E–D=5, E–B=7, E–C=7.\nStep 2: Pick A–B=5 or E–D=5 (tie). Pick A–B=5 → Add B. Candidates: E–D=5, B–C=5, E–C=7, E–B=7(skip).\nStep 3: Pick E–D=5 → Add D. Candidates: B–C=5, D–C=5.\nStep 4: Pick B–C=5 or D–C=5 (tie). Pick either → Add C.\nOrder: A–E, A–B, E–D, B–C (or D–C). Weight = 5+5+5+5 = 20',
          answer: 'Weight = 20',
        },
        {
          id: 5,
          question:
            "Use Prim's algorithm starting at vertex A to find the minimum spanning tree for the graph with vertices A, B, C, D, E, F, G and edges:\nA–B (6), A–F (8), A–G (4), G–F (9), G–E (9), G–C (5), G–D (7), F–E (8), B–C (4), C–D (6), D–E (4).\nState the edges in the order you add them.",
          type: 'Hard',
          explaination:
            'Start at A. Candidates: A–B=6, A–F=8, A–G=4.\nStep 1: Pick A–G=4 → Add G. New candidates: G–F=9, G–E=9, G–C=5, G–D=7.\nStep 2: Pick G–C=5 → Add C. New candidates: B–C=4, C–D=6.\nStep 3: Pick B–C=4 → Add B. (A–B=6 now skip.)\nStep 4: Pick C–D=6 (or G–D=7). Pick C–D=6 → Add D. New candidate: D–E=4.\nStep 5: Pick D–E=4 → Add E. (G–E=9 skip.)\nStep 6: Pick A–B=6(skip), A–F=8 → Add F.\nMST: A–G=4, G–C=5, B–C=4, C–D=6, D–E=4, A–F=8. Weight = 4+5+4+6+4+8 = 31',
          answer: 'Weight = 31',
        },
        {
          id: 6,
          question:
            "Use the matrix method for Prim's algorithm to find the minimum spanning tree for the graph given by the following adjacency table, starting at vertex A. State the order in which you added the edges.\n\nColumns: A, B, C, D, E\nA: −, 10, 8, 7, 10\nB: 10, −, 5, 4, 9\nC: 8, 5, −, 7, 10\nD: 7, 4, 7, −, 8\nE: 10, 9, 10, 8, −",
          type: 'Medium',
          explaination:
            'Use the adjacency table. Start at A: cross out row A, circle min in col A → D(7).\nAdd D: cross out row D, circle min in cols A,D (available) → B via D=4.\nAdd B: cross out row B, circle min → C via B=5.\nAdd C: cross out row C, circle min → E via D=8.\nAdd E: all connected.\nEdges in order: A–D=7, D–B=4, B–C=5, D–E=8 → Weight = 7+4+5+8 = 24',
          answer: 'MST weight = 24',
        },
        {
          id: 7,
          question:
            "Use the matrix method for Prim's algorithm to find the minimum spanning tree for the graph given by the following adjacency table, starting at vertex A. State the order in which you added the edges.\n\nColumns: A, B, C, D, E\nA: −, 12, 16, 11, 16\nB: 12, −, 13, 14, 19\nC: 16, 13, −, 15, 18\nD: 11, 14, 15, −, 18\nE: 16, 19, 18, 18, −",
          type: 'Medium',
          explaination:
            'Use the adjacency table. Start at A: min in col A → D(11). Add D.\nCross out row D; min in cols A,D → A–B=12. Add B.\nCross out row B; min in cols A,B,D → B–C=13. Add C.\nCross out row C; remaining vertex E: min(A–E=16, B–E=19, C–E=18, D–E=18) = A–E=16. Add E.\nEdges: A–D=11, A–B=12, B–C=13, A–E=16 → Weight = 11+12+13+16 = 52',
          answer: 'MST weight = 52',
        },
        {
          id: 8,
          question:
            "Use the matrix method for Prim's algorithm to find the minimum spanning tree for the graph given by the following adjacency table, starting at vertex E. State the order in which you added the edges.\n\nColumns: A, B, C, D, E, F, G\nA: −, −, 30, −, −, 50, 45\nB: −, −, 70, 35, 40, −, −\nC: 30, 70, −, 50, −, −, 20\nD: −, 35, 50, −, 10, −, 15\nE: −, 40, −, 10, −, 15, −\nF: 50, −, −, −, 15, −, 10\nG: 45, −, 20, 15, −, 10, −",
          type: 'Hard',
          explaination:
            'Use the adjacency table. Start at E: available edges from E → D=10, F=15, B=40.\nStep 1: Add D (E–D=10). Now available from {E,D}: E–F=15, D–G=15, E–B=40, D–B=35.\nStep 2: Add G via D–G=15 (or F via E–F=15). Take E–F=15 → Add F. {E,D,F}: F–G=10.\nStep 3: Add G via F–G=10 → {E,D,F,G}: G–C=20, G–A=45.\nStep 4: Add C via G–C=20. {E,D,F,G,C}: C–A=30, C–B=70.\nStep 5: Add A via C–A=30. {E,D,F,G,C,A}: remaining B.\nStep 6: Add B via D–B=35.\nOrder: E–D=10, E–F=15, F–G=10, G–C=20, C–A=30, D–B=35. Weight = 120',
          answer: 'MST weight = 120',
        },
        {
          id: 9,
          question:
            "Use the matrix method for Prim's algorithm to find the minimum spanning tree for the graph given by the following adjacency table, starting at vertex E. State the order in which you added the edges.\n\nColumns: A, B, C, D, E, F, G\nA: −, 25, 35, 40, −, −, −\nB: 25, −, 50, 35, 40, −, −\nC: 35, 50, −, 45, 45, −, 40\nD: 40, 35, 45, −, 20, 35, 30\nE: −, 40, 45, 20, −, 15, 25\nF: −, −, −, 35, 15, −, −\nG: −, −, 40, 30, 25, −, −",
          type: 'Hard',
          explaination:
            'Start at E: available → F=15, D=20, G=25, B=40, C=45.\nStep 1: Add F via E–F=15.\nStep 2: Add D via E–D=20.\nStep 3: Add G via E–G=25.\nStep 4: Cheapest edge to a new vertex: B via D=35 (A via D=40, C via G=40). Add B via D–B=35.\nStep 5: Add A via B–A=25.\nStep 6: Add C via A–C=35.\nOrder: E–F=15, E–D=20, E–G=25, D–B=35, B–A=25, A–C=35. Weight = 155',
          answer: 'MST weight = 155',
        },
        {
          id: 10,
          question:
            "Use the matrix method for Prim's algorithm to find the minimum spanning tree for the graph given by the following adjacency table, starting at vertex C. State the order in which you added the edges.\n\nColumns: A, B, C, D, E, F\nA: −, 4, −, 6, −, 10\nB: 4, −, 5, −, 5, −\nC: −, 5, −, 6, −, 4\nD: 6, −, 6, −, 7, −\nE: −, 5, −, 7, −, 2\nF: 10, −, 4, −, 2, −",
          type: 'Medium',
          explaination:
            'Use the adjacency table. Start at C: available → B=5, D=6, F=4.\nStep 1: Add F via C–F=4. {C,F}: E via F=2.\nStep 2: Add E via F–E=2. {C,E,F}: B via C=5 or B via E=5, D via E=7.\nStep 3: Add B via C–B=5 (or E–B=5). {C,B,E,F}: A via B=4, D via C=6.\nStep 4: Add A via A–B=4. {A,B,C,E,F}: D via A=6, D via C=6.\nStep 5: Add D via A–D=6.\nOrder: C–F=4, F–E=2, C–B=5, A–B=4, A–D=6. Weight = 4+2+5+4+6 = 21',
          answer: 'MST weight = 21',
        },
        {
          id: 11,
          question:
            "Use the matrix method for Prim's algorithm to find the minimum spanning tree for the graph given by the following adjacency table, starting at vertex C. State the order in which you added the edges.\n\nColumns: A, B, C, D, E, F\nA: −, 5, 7, −, 8, 8\nB: 5, −, 6, −, 5, −\nC: 7, 6, −, 4, 4, 3\nD: −, −, 4, −, 5, 2\nE: 8, 5, 4, 5, −, −\nF: 8, −, 3, 2, −, −",
          type: 'Medium',
          explaination:
            'Use the adjacency table. Start at C: available → A=7, B=6, D=4, E=4, F=3.\nStep 1: Add F via C–F=3. {C,F}: D via F=2.\nStep 2: Add D via F–D=2. {C,D,F}: E via D=5, E via C=4.\nStep 3: Add E via C–E=4. {C,D,E,F}: B via C=6, B via E=5, A via E=8.\nStep 4: Add B via E–B=5. {B,C,D,E,F}: A via B=5.\nStep 5: Add A via A–B=5.\nOrder: C–F=3, F–D=2, C–E=4, E–B=5, A–B=5. Weight = 3+2+4+5+5 = 19',
          answer: 'MST weight = 19',
        },
        {
          id: 12,
          question:
            "Six villages are to be connected by new roads. The graph shows potential roads and their lengths in kilometres, with vertices A, B, C, D, E, F and edges:\nA–E (7), A–B (5), E–B (7), E–D (3), E–C (6), D–C (2), D–F (3), C–B (2), C–F (5).\n\n(a) Use Prim's algorithm, starting at vertex A, to find the minimum spanning tree for the graph. Draw your tree.\n(b) What is the minimum length of road required to ensure that each village is connected to all the others?",
          type: 'Medium',
          explaination:
            '(a) Start at A. Candidates: A–E=7, A–B=5.\nStep 1: Pick A–B=5 → Add B. New: B–C=2, E–B=7.\nStep 2: Pick B–C=2 → Add C. New: C–D=2, E–C=6, C–F=5.\nStep 3: Pick C–D=2 → Add D. New: D–E=3, D–F=3.\nStep 4: Pick D–E=3 → Add E. (A–E=7 now skip.)\nStep 5: Pick D–F=3 → Add F. All 6 connected.\nMST edges: A–B=5, B–C=2, C–D=2, D–E=3, D–F=3.\n(b) Weight = 5+2+2+3+3 = 15 km.',
          answer: '(a) MST edges: A–B, B–C, C–D, D–E, D–F. (b) Minimum length = 15 km',
        },
        {
          id: 13,
          question:
            "Use Prim's algorithm to find the minimum spanning tree of the graph given by the weighted adjacency table, starting at vertex A. Draw your tree.\n\nColumns: A, B, C, D, E, F\nA: −, 12, 8, 14, 9, 10\nB: 12, −, 10, 7, 11, 15\nC: 8, 10, −, 12, 14, 11\nD: 14, 7, 12, −, 13, 10\nE: 9, 11, 14, 13, −, 12\nF: 10, 15, 11, 10, 12, −",
          type: 'Hard',
          explaination:
            'Start at A. Min from A: C=8. Add C via A–C=8.\n{A,C}: min not yet in tree → E via A=9, F via A=10, B via C=10, D via C=12.\nPick A–E=9. Add E.\n{A,C,E}: F via A=10, B via C=10. Pick A–F=10 (or C–B=10). Take A–F=10. Add F.\n{A,C,E,F}: D via F=10, B via C=10. Pick C–B=10 or F–D=10. Take F–D=10. Add D.\n{A,C,D,E,F}: B via D=7. Pick D–B=7. Add B. All 6 connected.\nMST edges: A–C=8, A–E=9, A–F=10, F–D=10, D–B=7. Weight = 8+9+10+10+7 = 44',
          answer: 'MST weight = 44',
        },
        {
          id: 14,
          question:
            'The weighted adjacency table below gives the distances, in metres, between six workstations. An electricity supply is located next to workstation A.\nState the minimum length of wiring required to supply electricity to each workstation.\n\nColumns: A, B, C, D, E, F\nA: −, 12, 8, 14, 9, 10\nB: 12, −, 10, 7, 11, 15\nC: 8, 10, −, 12, 14, 11\nD: 14, 7, 12, −, 13, 10\nE: 9, 11, 14, 13, −, 12\nF: 10, 15, 11, 10, 12, −',
          type: 'Medium',
          explaination:
            "The minimum spanning tree of this graph (Prim's algorithm from A: A–C=8, A–E=9, A–F=10, F–D=10, D–B=7) has weight 44, so the minimum wiring length = 44 m.",
          answer: '44 metres',
        },
      ],
      'minimum-spanning-trees': [
        {
          id: 1,
          question:
            "Explain briefly the differences between Kruskal's algorithm and Prim's algorithm for finding the minimum spanning tree of a graph.",
          type: 'Hard',
          explaination:
            "• Kruskal's builds the MST by selecting edges globally in order of increasing weight, avoiding cycles. It may produce a forest of components that gradually merge.\n• Prim's builds the MST by growing a single connected component from a starting vertex, always adding the cheapest edge that connects a new vertex to the current tree.\n• Key difference: Kruskal's is edge-based (considers all edges globally); Prim's is vertex-based (grows from one vertex). Kruskal's may temporarily form disconnected sub-trees; Prim's always stays connected.\n[Award 1 mark each for any 3 correct distinguishing points.]",
          answer:
            "Kruskal's algorithm chooses edges from the whole graph in order of weight, skipping any that form a cycle; Prim's algorithm grows a single tree from a starting vertex, always adding the cheapest edge to a new vertex.",
        },
        {
          id: 2,
          question:
            'A minimum spanning tree is used to plan the wiring that supplies electricity from workstation A to every other workstation in an office. Explain the significance, in this context, of the minimum spanning tree being:\n(i) connected;\n(ii) a tree.',
          type: 'Medium',
          explaination:
            '(i) Connected: every workstation can receive electricity — there is a path from workstation A (the power source) to every other workstation.\n(ii) Tree (no cycles): there are no redundant/duplicate wires, ensuring the minimum total length of wiring is used (i.e., no wiring is laid unnecessarily).',
          answer:
            '(i) Every workstation is linked to the supply. (ii) There are no cycles, so no wire is laid unnecessarily.',
        },
        {
          id: 3,
          question:
            'A simple connected graph has 5 vertices and 7 edges of lengths 10, 11, 13, 15, 18, 20 and 22.\nFind the\n(a) minimum possible\n(b) maximum possible\nweight of the minimum spanning tree.',
          type: 'Hard',
          explaination:
            "MST of a 5-vertex graph uses exactly 4 edges (= n−1).\n\n(a) Minimum possible MST weight: arrange the graph so that the 4 smallest edges (10, 11, 13, 15) form a spanning tree (no cycles). Then Kruskal's selects all four. Minimum MST weight = 10+11+13+15 = 49.\n\n(b) Maximum possible MST weight: to force heavier edges into the MST, make the edge of weight 13 form a cycle with edges of weight 10 and 11 (triangle on 3 vertices). Then Kruskal's picks 10, 11, skips 13 (cycle), then must pick 15 and 18 to connect remaining vertices. Maximum MST weight = 10+11+15+18 = 54.",
          answer: '(a) 49 (b) 54',
        },
      ],
      'travelling-salesman-problem-nearest-neighbour-algorithm': [
        {
          id: 1,
          question:
            'Use the nearest neighbour algorithm starting at A to find an upper bound for the travelling salesman problem.\n\nGraph 1a: Vertices A, B, C, D with edges:\nAB = 10, AD = 6, AC = 13, BD = 8, BC = 12, CD = 8',
          type: 'Easy',
          explaination:
            'Start at A.\nNearest unvisited: D (6). Visit D.\nNearest unvisited from D: B (8). Visit B.\nNearest unvisited from B: C (12). Visit C.\nReturn to A: C→A = 13.\nRoute: A→D→B→C→A, Total = 6+8+12+13 = 39.',
          answer: 'Upper bound = 39',
        },
        {
          id: 2,
          question:
            'Use the nearest neighbour algorithm starting at A to find an upper bound for the travelling salesman problem.\n\nGraph 1b: Vertices A, B, C, D with edges:\nAB = 21, AC = 21, AD = 18, BC = 16, BD = 22, CD = 30',
          type: 'Easy',
          explaination:
            'Start at A.\nNearest unvisited: D (18). Visit D.\nNearest unvisited from D: B (22). Visit B.\nNearest unvisited from B: C (16). Visit C.\nReturn to A: C→A = 21.\nRoute: A→D→B→C→A, Total = 18+22+16+21 = 77.',
          answer: 'Upper bound = 77',
        },
        {
          id: 3,
          question:
            'Use the nearest neighbour algorithm starting at A to find an upper bound for the travelling salesman problem.\n\nGraph 2a: Complete graph on vertices A, B, C, D, E with edges:\nAE=19, AB=24, EB=11, ED=13, EC=8, DC=7, BC=18, BD=21, AD=12, AC=8',
          type: 'Medium',
          explaination:
            'Start at A.\nNearest unvisited: C (8). Visit C.\nNearest unvisited from C: D (7). Visit D.\nNearest unvisited from D: E (13). Visit E.\nNearest unvisited from E: B (11). Visit B.\nReturn to A: B→A = 24.\nRoute: A→C→D→E→B→A, Total = 8+7+13+11+24 = 63.',
          answer: 'Upper bound = 63',
        },
        {
          id: 4,
          question:
            'Using the distance matrix below, use the nearest neighbour algorithm, starting with each vertex in turn, to find an improved upper bound.\n\nColumns: A, B, C, D, E\nA: −, 4, 3, 7, 6\nB: 4, −, 3, 9, 7\nC: 3, 3, −, 8, 5\nD: 7, 9, 8, −, 9\nE: 6, 7, 5, 9, −',
          type: 'Medium',
          explaination:
            'Start A: A→C→B→E→D→A = 3+3+7+9+7 = 29\nStart B: B→C→A→E→D→B = 3+3+6+9+9 = 30\nStart C: C→B→A→E→D→C = 3+4+6+9+8 = 30 (A and B are tied at 3; choosing A gives 31)\nStart D: D→A→C→B→E→D = 7+3+3+7+9 = 29\nStart E: E→C→B→A→D→E = 5+3+4+7+9 = 28 (A and B are tied at 3 from C; choosing A gives 30)\nThe smallest of these is the improved upper bound: 28.',
          answer: 'Improved upper bound = 28',
        },
      ],
    },
  },
  {
    'statistics-and-probability': {
      title: 'Statistics & Probability',
      'coefficient-of-determination-r2': [
        {
          id: 1,
          question:
            'Find the coefficient of determination for a linear model fitted to the following data.\n\nx: 50, 60, 70, 80, 80, 90, 90, 100, 110, 120\ny: 86, 49, 48, 36, 29, 31, 22, 4, −29, −36',
          type: 'Medium',
          explaination:
            'Enter the data into the GDC and perform a linear regression.\nr ≈ −0.9687, so R² = r² ≈ 0.938 (3 s.f.).',
          answer: 'R² ≈ 0.938',
        },
        {
          id: 2,
          question:
            'Find the coefficient of determination for a linear model fitted to the following data.\n\nx: 10, 15, 20, 25, 30\ny: 2, 12, 10, 13, 20',
          type: 'Easy',
          explaination:
            'Enter the data into the GDC and perform a linear regression.\nr ≈ 0.9049, so R² = r² ≈ 0.819 (3 s.f.).',
          answer: 'R² ≈ 0.819',
        },
      ],
      'confidence-intervals-unknown-variance-t-distribution': [
        {
          id: 1,
          question:
            'Use the t-distribution to find a 90% confidence interval for the population mean of a normal population with unknown variance, given the sample data:\n12.7, 4.8, 5.3, 5.8, 9.7, 11.0, 6.5, 8.2',
          type: 'Medium',
          explaination:
            '1. Calculate x̄ = (12.7+4.8+5.3+5.8+9.7+11.0+6.5+8.2)/8 = 8.0\n2. Calculate sₙ₋₁ ≈ 2.894\n3. n=8, degrees of freedom = 7, t(7, 0.05) ≈ 1.895\n4. CI: 8.0 ± 1.895 × 2.894/√8\n5. = 8.0 ± 1.939 ≈ (6.06, 9.94)',
          answer: 'x̄ = 8.0, sₙ₋₁ ≈ 2.894\nCI: approximately (6.06, 9.94)',
        },
        {
          id: 2,
          question:
            'Use the t-distribution to find a 90% confidence interval for the population mean of a normal population with unknown variance, given the sample data:\n3.62, 1.05, 3.21, 7.70, 4.06, 5.52, 3.25, 4.01',
          type: 'Medium',
          explaination:
            '1. x̄ = (3.62+1.05+3.21+7.70+4.06+5.52+3.25+4.01)/8 ≈ 4.053\n2. sₙ₋₁ ≈ 1.928\n3. n=8, df=7, t(7, 0.05) ≈ 1.895\n4. CI: 4.053 ± 1.895 × 1.928/√8 ≈ (2.76, 5.34)',
          answer: 'x̄ ≈ 4.053, sₙ₋₁ ≈ 1.928\nCI: approximately (2.76, 5.34)',
        },
        {
          id: 3,
          question:
            'Use the t-distribution to find a 95% confidence interval for the population mean of a normal population with unknown variance, given the sample data:\n135, 111, 218, 206, 172, 182, 165',
          type: 'Medium',
          explaination:
            '1. x̄ = (135+111+218+206+172+182+165)/7 ≈ 169.9\n2. sₙ₋₁ ≈ 37.6\n3. n=7, df=6, t(6, 0.025) ≈ 2.447\n4. CI: 169.9 ± 2.447 × 37.6/√7 ≈ (135.1, 204.6)',
          answer: 'x̄ ≈ 169.9, sₙ₋₁ ≈ 37.6\nCI: approximately (135.1, 204.6)',
        },
        {
          id: 4,
          question:
            'Use the t-distribution to find a 95% confidence interval for the population mean of a normal population with unknown variance, given the sample data:\n317, 425, 515, 627, 515, 388, 517',
          type: 'Medium',
          explaination:
            '1. x̄ = (317+425+515+627+515+388+517)/7 = 472.0\n2. sₙ₋₁ ≈ 102.5\n3. n=7, df=6, t(6, 0.025) ≈ 2.447\n4. CI: 472.0 ± 2.447 × 102.5/√7 ≈ (377.2, 566.8)',
          answer: 'x̄ = 472.0, sₙ₋₁ ≈ 102.5\nCI: approximately (377.2, 566.8)',
        },
        {
          id: 5,
          question:
            'Use the t-distribution to find a 90% confidence interval for the population mean of a normal population with unknown variance, given the sample data:\n5.3, 8.7, 9.4, 9.4, 3.8, 4.5, 7.3, 6.5, 8.1, 7.5',
          type: 'Hard',
          explaination:
            '1. x̄ = 7.05\n2. sₙ₋₁ ≈ 1.988\n3. n=10, df=9, t(9, 0.05) ≈ 1.833\n4. CI: 7.05 ± 1.833 × 1.988/√10 ≈ (5.90, 8.20)',
          answer: 'x̄ = 7.05, sₙ₋₁ ≈ 1.988\nCI: approximately (5.90, 8.20)',
        },
        {
          id: 6,
          question:
            'Use the t-distribution to find a 95% confidence interval for the population mean of a normal population with unknown variance, given the sample data:\n5.3, 8.7, 9.4, 9.4, 3.8, 4.5, 7.3, 6.5, 8.1, 7.5',
          type: 'Hard',
          explaination:
            '1. Same x̄ = 7.05, sₙ₋₁ ≈ 1.988, n=10, df=9\n2. t(9, 0.025) ≈ 2.262\n3. CI: 7.05 ± 2.262 × 1.988/√10 ≈ (5.63, 8.47)',
          answer: 'x̄ = 7.05, sₙ₋₁ ≈ 1.988\nCI: approximately (5.63, 8.47)',
        },
        {
          id: 7,
          question:
            'Given summary statistics x̄ = 12.3, sₙ₋₁ = 1.7, sample size n = 12, find a 90% confidence interval for the population mean of a normal population with unknown variance.',
          type: 'Easy',
          explaination:
            '1. df=11, t(11, 0.05) ≈ 1.796\n2. CI: 12.3 ± 1.796 × 1.7/√12 ≈ 12.3 ± 0.881\n3. (11.42, 13.18)',
          answer: 'CI: approximately (11.4, 13.2)',
        },
        {
          id: 8,
          question:
            'Given summary statistics x̄ = 14.2, sₙ₋₁ = 3.8, sample size n = 12, find a 90% confidence interval for the population mean of a normal population with unknown variance.',
          type: 'Easy',
          explaination:
            '1. df=11, t(11, 0.05) ≈ 1.796\n2. CI: 14.2 ± 1.796 × 3.8/√12 ≈ 14.2 ± 1.970\n3. (12.23, 16.17)',
          answer: 'CI: approximately (12.2, 16.2)',
        },
        {
          id: 9,
          question:
            'Given summary statistics x̄ = 186, sₙ₋₁ = 25, sample size n = 8, find a 95% confidence interval for the population mean of a normal population with unknown variance.',
          type: 'Medium',
          explaination:
            '1. df=7, t(7, 0.025) ≈ 2.365\n2. CI: 186 ± 2.365 × 25/√8 ≈ 186 ± 20.9\n3. (165.1, 206.9)',
          answer: 'CI: approximately (165.1, 206.9)',
        },
        {
          id: 10,
          question:
            'Given summary statistics x̄ = 227, sₙ₋₁ = 21, sample size n = 8, find a 95% confidence interval for the population mean of a normal population with unknown variance.',
          type: 'Medium',
          explaination:
            '1. df=7, t(7, 0.025) ≈ 2.365\n2. CI: 227 ± 2.365 × 21/√8 ≈ 227 ± 17.56\n3. (209.4, 244.6)',
          answer: 'CI: approximately (209.4, 244.6)',
        },
        {
          id: 11,
          question:
            'Given summary statistics x̄ = 8.2, sₙ₋₁ = 0.62, sample size n = 25, find an 80% confidence interval for the population mean of a normal population with unknown variance.',
          type: 'Medium',
          explaination:
            '1. df=24, t(24, 0.10) ≈ 1.318\n2. CI: 8.2 ± 1.318 × 0.62/√25 ≈ 8.2 ± 0.163\n3. (8.04, 8.36)',
          answer: 'CI: approximately (8.04, 8.36)',
        },
        {
          id: 12,
          question:
            'Given summary statistics x̄ = 7.7, sₙ₋₁ = 0.85, sample size n = 25, find an 80% confidence interval for the population mean of a normal population with unknown variance.',
          type: 'Medium',
          explaination:
            '1. df=24, t(24, 0.10) ≈ 1.318\n2. CI: 7.7 ± 1.318 × 0.85/√25 ≈ 7.7 ± 0.224\n3. (7.48, 7.92)',
          answer: 'CI: approximately (7.48, 7.92)',
        },
        {
          id: 13,
          question:
            'A random sample of eight adult cats were weighed, with the following results (in kilograms):\n4.6, 2.8, 5.1, 4.2, 3.9, 4.7, 3.6, 4.2\nIt can be assumed that the masses of cats are normally distributed. Find a 90% confidence interval for the population mean mass of a cat.',
          type: 'Medium',
          explaination:
            '1. x̄ = (4.6+2.8+5.1+4.2+3.9+4.7+3.6+4.2)/8 ≈ 4.138\n2. sₙ₋₁ ≈ 0.717\n3. df=7, t(7, 0.05) ≈ 1.895\n4. CI: 4.138 ± 1.895 × 0.717/√8 ≈ (3.66, 4.62)',
          answer: 'x̄ ≈ 4.138, sₙ₋₁ ≈ 0.717\nCI: approximately (3.66, 4.62)',
        },
        {
          id: 14,
          question:
            'The scores on a test can be assumed to be normally distributed. For a random sample of 20 people who took the test, the mean score was 63.8 and the unbiased estimate of the population variance was 18.6. Find a 90% confidence interval for the population mean score.',
          type: 'Medium',
          explaination:
            '1. x̄ = 63.8, sₙ₋₁ = √18.6 ≈ 4.313, n=20\n2. df=19, t(19, 0.05) ≈ 1.729\n3. CI: 63.8 ± 1.729 × 4.313/√20 ≈ (62.13, 65.47)',
          answer: 'sₙ₋₁ = √18.6 ≈ 4.313\nCI: approximately (62.1, 65.5)',
        },
        {
          id: 15,
          question:
            'A randomly selected group of 80 students were asked how long they spent on their last assignment. The mean of the sample was 8.6 hours and the unbiased estimate of the population variance was 1.5 hours².\n\na) Find a 95% confidence interval for the population mean time.\nb) State any assumptions you made about the underlying distribution.',
          type: 'Medium',
          explaination:
            '1. x̄ = 8.6, sₙ₋₁ = √1.5 ≈ 1.225, n=80\n2. df=79, t(79, 0.025) ≈ 1.990 (or use z ≈ 1.960 for large n)\n3. CI: 8.6 ± 1.990 × 1.225/√80 ≈ (8.33, 8.87)\n4. b) Assume population is normally distributed, or invoke CLT since n=80 is large.',
          answer:
            'a) sₙ₋₁ = √1.5 ≈ 1.225\nCI: approximately (8.33, 8.87)\nb) The time spent is normally distributed in the population (or large sample CLT applies).',
        },
        {
          id: 16,
          question:
            'A chemistry student makes many attempts to prepare a 20% solution. The teacher measures the concentration in eight of the attempts and obtains the following results (rounded to the nearest %):\n24, 19, 18, 22, 25, 26, 20, 22\n\na) State an assumption you need to make in order to create a confidence interval for the mean.\nb) Find a 90% confidence interval for the mean concentration of solutions prepared by the student.\nc) Based on your confidence interval, do you think that the student is preparing the solutions correctly? Justify your answer.',
          type: 'Hard',
          explaination:
            'a) The concentration of solutions is normally distributed.\nb) 1. x̄ = (24+19+18+22+25+26+20+22)/8 = 22\n2. sₙ₋₁ ≈ 2.878\n3. df=7, t(7, 0.05) ≈ 1.895\n4. CI: 22 ± 1.895 × 2.878/√8 ≈ (20.07, 23.93)\nc) The target 20% lies outside the CI, suggesting the student is over-concentrating solutions.',
          answer:
            'a) Concentrations are normally distributed.\nb) x̄ = 22, sₙ₋₁ ≈ 2.878\nCI: approximately (20.1, 23.9)\nc) Since 20% is not in the CI, there is evidence that the student is not preparing the solutions correctly.',
        },
        {
          id: 17,
          question:
            "A teacher believes that his students can complete a certain task in less than 3 minutes on average. He asks a random sample of ten students to complete the task. He calculates their mean time to be 3.2 minutes and the unbiased estimate of the population standard deviation to be 0.6 minutes.\n\na) Find a 90% confidence interval for the population mean time. Justify your choice of interval and state any assumptions you have made.\nb) Hence comment on the teacher's belief.",
          type: 'Hard',
          explaination:
            "a) 1. x̄ = 3.2, sₙ₋₁ = 0.6, n=10\n2. df=9, t(9, 0.05) ≈ 1.833\n3. Use t-distribution: variance is unknown and estimated from sample.\n4. Assume task times are normally distributed.\n5. CI: 3.2 ± 1.833 × 0.6/√10 ≈ 3.2 ± 0.348 ≈ (2.85, 3.55)\nb) The value 3 is inside the CI, so there is insufficient evidence to reject the teacher's belief.",
          answer:
            "a) CI: approximately (2.85, 3.55)\nb) Since 3 is within the CI, the data does not provide sufficient evidence to contradict the teacher's belief.",
        },
        {
          id: 18,
          question:
            'A catering manager wants to check the amount of coffee dispensed by a drinks machine. A sample of 20 coffee cups taken from the machine has mean 149 ml and standard deviation 4.6 ml.\n\na) Calculate sₙ₋₁ for this sample.\nb) Find a 95% confidence interval for the mean amount of coffee dispensed by the machine.\nc) The catering manager decides that the machine needs to be adjusted if it dispenses more than 153 ml per cup. Does the machine need adjusting?\nd) A student complains that the machine dispenses less than the stated 150 ml per cup. Does your confidence interval support this claim?',
          type: 'Hard',
          explaination:
            'a) sₙ₋₁ = √(n/(n−1)) × sₙ = √(20/19) × 4.6 ≈ 4.72\nb) df=19, t(19, 0.025) ≈ 2.093\nCI: 149 ± 2.093 × 4.72/√20 ≈ 149 ± 2.211 ≈ (146.79, 151.21)\nc) 153 > 151.21, so the entire CI is below 153 → no adjustment needed.\nd) 150 is inside the CI, so it is plausible the true mean is at most 150; claim has some support.',
          answer:
            'a) sₙ₋₁ = √(20/19) × 4.6 ≈ 4.72\nb) CI: approximately (146.8, 151.2)\nc) No – 153 is above the CI.\nd) Partially – 150 is within the CI, so the claim is plausible.',
        },
        {
          id: 19,
          question:
            'The heights, rounded to the nearest centimetre, of a random sample of 60 adults are summarised in the table below:\n\nh (cm): 145–155, 156–160, 161–165, 166–170, 171–180, 181–190\nFrequency: 4, 7, 12, 14, 14, 9\n\nIt can be assumed that the heights are normally distributed in the population.\n\na) Find an approximate 95% confidence interval for the mean population height.\nb) Explain why the confidence interval is approximate.',
          type: 'Hard',
          explaination:
            'a) 1. Use midpoints: 150, 158, 163, 168, 175.5, 185.5\n2. x̄ = (4(150)+7(158)+12(163)+14(168)+14(175.5)+9(185.5))/60 = 10140.5/60 ≈ 169.0\n3. Calculate sₙ₋₁ ≈ 9.90\n4. df=59, t(59, 0.025) ≈ 2.001\n5. CI: 169.0 ± 2.001 × 9.90/√60 ≈ (166.5, 171.6)\nb) Class midpoints are approximations of the actual data → CI is approximate.',
          answer:
            'a) x̄ ≈ 169.0 cm, sₙ₋₁ ≈ 9.90 cm\nCI: approximately (166.5, 171.6)\nb) Because midpoints of class intervals are used as estimates of the true data values.',
        },
      ],
      'confidence-intervals-known-variance-z-distribution': [
        {
          id: 1,
          question:
            'Given σ = 6.3, x̄ = 18.9, sample size n = 20, find a 90% confidence interval for the population mean of a normal population with known variance.',
          type: 'Easy',
          explaination:
            '1. z₀.₀₅ = 1.645\n2. CI: 18.9 ± 1.645 × 6.3/√20 ≈ 18.9 ± 2.318\n3. (16.58, 21.22)',
          answer: 'CI: approximately (16.6, 21.2)',
        },
        {
          id: 2,
          question:
            'Given σ = 9.2, x̄ = 18.9, sample size n = 20, find a 90% confidence interval for the population mean of a normal population with known variance.',
          type: 'Easy',
          explaination:
            '1. z₀.₀₅ = 1.645\n2. CI: 18.9 ± 1.645 × 9.2/√20 ≈ 18.9 ± 3.384\n3. (15.52, 22.28)',
          answer: 'CI: approximately (15.5, 22.3)',
        },
        {
          id: 3,
          question:
            'Given σ = 9.2, x̄ = 18.9, sample size n = 6, find a 95% confidence interval for the population mean of a normal population with known variance.',
          type: 'Medium',
          explaination:
            '1. z₀.₀₂₅ = 1.960\n2. CI: 18.9 ± 1.960 × 9.2/√6 ≈ 18.9 ± 7.360\n3. (11.54, 26.26)',
          answer: 'CI: approximately (11.5, 26.3)',
        },
        {
          id: 4,
          question:
            'Given σ = 9.2, x̄ = 36.5, sample size n = 6, find a 95% confidence interval for the population mean of a normal population with known variance.',
          type: 'Medium',
          explaination:
            '1. z₀.₀₂₅ = 1.960\n2. CI: 36.5 ± 1.960 × 9.2/√6 ≈ 36.5 ± 7.360\n3. (29.14, 43.86)',
          answer: 'CI: approximately (29.1, 43.9)',
        },
        {
          id: 5,
          question:
            'Given σ = 46, x̄ = 173, sample size n = 12, find an 80% confidence interval for the population mean of a normal population with known variance.',
          type: 'Medium',
          explaination:
            '1. z₀.₁₀ = 1.282\n2. CI: 173 ± 1.282 × 46/√12 ≈ 173 ± 17.02\n3. (155.98, 190.02)',
          answer: 'CI: approximately (156.0, 190.0)',
        },
        {
          id: 6,
          question:
            'Given σ = 82, x̄ = 355, sample size n = 12, find an 80% confidence interval for the population mean of a normal population with known variance.',
          type: 'Medium',
          explaination:
            '1. z₀.₁₀ = 1.282\n2. CI: 355 ± 1.282 × 82/√12 ≈ 355 ± 30.33\n3. (324.67, 385.33)',
          answer: 'CI: approximately (324.7, 385.3)',
        },
        {
          id: 7,
          question:
            'Given σ = 1.6, find a 90% confidence interval for the population mean using the sample data:\n12.7, 4.8, 5.3, 5.8, 9.7, 11.0, 6.5, 8.2',
          type: 'Medium',
          explaination:
            '1. x̄ = 8.0, n=8\n2. z₀.₀₅ = 1.645\n3. CI: 8.0 ± 1.645 × 1.6/√8 ≈ 8.0 ± 0.930\n4. (7.07, 8.93)',
          answer: 'x̄ = 8.0\nCI: approximately (7.07, 8.93)',
        },
        {
          id: 8,
          question:
            'Given σ = 0.87, find a 90% confidence interval for the population mean using the sample data:\n3.62, 1.05, 3.21, 7.70, 4.06, 5.52, 3.25, 4.01',
          type: 'Medium',
          explaination:
            '1. x̄ ≈ 4.053, n=8\n2. CI: 4.053 ± 1.645 × 0.87/√8 ≈ 4.053 ± 0.506\n3. (3.547, 4.559)',
          answer: 'x̄ ≈ 4.053\nCI: approximately (3.55, 4.56)',
        },
        {
          id: 9,
          question:
            'Given σ = 12, find a 95% confidence interval for the population mean using the sample data:\n135, 111, 218, 306, 172, 182, 165',
          type: 'Medium',
          explaination:
            '1. x̄ = (135+111+218+306+172+182+165)/7 ≈ 184.1\n2. CI: 184.1 ± 1.960 × 12/√7 ≈ 184.1 ± 8.890\n3. (175.2, 193.0)',
          answer: 'x̄ ≈ 184.1\nCI: approximately (175.2, 193.0)',
        },
        {
          id: 10,
          question:
            'Given σ = 23, find a 95% confidence interval for the population mean using the sample data:\n317, 425, 515, 627, 515, 388, 517',
          type: 'Medium',
          explaination:
            '1. x̄ ≈ 472.0, n=7\n2. CI: 472.0 ± 1.960 × 23/√7 ≈ 472.0 ± 17.04\n3. (454.96, 489.04)',
          answer: 'x̄ ≈ 472.0\nCI: approximately (454.9, 489.1)',
        },
        {
          id: 11,
          question:
            'Given σ = 0.45, find an 80% confidence interval for the population mean using the sample data:\n5.3, 8.7, 9.4, 9.4, 3.8, 4.5, 7.3, 6.5, 8.1, 7.5',
          type: 'Medium',
          explaination:
            '1. x̄ = 7.05, n=10\n2. z₀.₁₀ = 1.282\n3. CI: 7.05 ± 1.282 × 0.45/√10 ≈ 7.05 ± 0.182\n4. (6.87, 7.23)',
          answer: 'x̄ = 7.05\nCI: approximately (6.87, 7.23)',
        },
        {
          id: 12,
          question:
            'Given σ = 1.02, find a 90% confidence interval for the population mean using the sample data:\n5.3, 8.7, 9.4, 9.4, 3.8, 4.5, 7.3, 6.5, 8.1, 7.5',
          type: 'Medium',
          explaination:
            '1. x̄ = 7.05, n=10\n2. CI: 7.05 ± 1.645 × 1.02/√10 ≈ 7.05 ± 0.531\n3. (6.52, 7.58)',
          answer: 'x̄ = 7.05\nCI: approximately (6.52, 7.58)',
        },
        {
          id: 13,
          question:
            'The mass of fish in a pond is known to be normally distributed with standard deviation 124 g. The mean mass of 85 fish from the pond is found to be 806 g. Find a 95% confidence interval for the mean mass of all the fish in the pond.',
          type: 'Medium',
          explaination:
            '1. σ = 124, x̄ = 806, n=85\n2. z₀.₀₂₅ = 1.960\n3. CI: 806 ± 1.960 × 124/√85 ≈ 806 ± 26.35\n4. (779.65, 832.35)',
          answer: 'CI: approximately (779.6, 832.4)',
        },
        {
          id: 14,
          question:
            'The times to complete a task are known to be normally distributed with standard deviation 5.8 minutes. A group of ten children completed the task in the following times (in minutes):\n20.5, 31.2, 18.7, 22.5, 39.8, 28.7, 22.1, 18.6, 36.4, 29.2\n\na) Find a 90% confidence interval for the mean time required to complete the task.\nb) Justify your choice of interval.',
          type: 'Medium',
          explaination:
            '1. x̄ = (20.5+31.2+18.7+22.5+39.8+28.7+22.1+18.6+36.4+29.2)/10 = 26.77\n2. σ = 5.8, n=10, z₀.₀₅ = 1.645\n3. CI: 26.77 ± 1.645 × 5.8/√10 ≈ 26.77 ± 3.017\n4. (23.75, 29.79)\n5. b) Since σ is known, we use the z-distribution (normal) rather than the t-distribution.',
          answer:
            'a) x̄ = 26.77\nCI: approximately (23.75, 29.79)\nb) Population standard deviation is known, so z-distribution is used.',
        },
        {
          id: 15,
          question:
            'The maximum daily temperature, in °C, in a certain location is known to follow a normal distribution with variance 8.6. A random sample of 12 days was selected and the maximum temperature on each of the days recorded. The mean of this sample was 17.8°C.\n\na) Find the 80% confidence interval for the mean maximum daily temperature.\nb) Does this confidence interval provide evidence that the mean maximum daily temperature is more than 16.5°C?\nc) Would the answer to part b change if you used the 90% interval instead?',
          type: 'Hard',
          explaination:
            'a) 1. σ = √8.6 ≈ 2.933, n=12, z₀.₁₀ = 1.282\n2. CI: 17.8 ± 1.282 × 2.933/√12 ≈ 17.8 ± 1.085 ≈ (16.72, 18.89)\nb) 16.5 < 16.72, so the entire CI is above 16.5 → evidence that mean > 16.5.\nc) 90% CI: 17.8 ± 1.645 × 2.933/√12 ≈ (16.41, 19.19)\n16.5 now falls inside the 90% CI, so evidence is less conclusive.',
          answer:
            'a) CI: approximately (16.7, 18.9)\nb) Yes – 16.5 is below the entire CI.\nc) Yes. The 90% CI, approximately (16.4, 19.2), contains 16.5, so it no longer gives evidence that the mean is more than 16.5°C.',
        },
        {
          id: 16,
          question:
            'A call centre manager wants to estimate the average length of calls. She knows from past experience that the population standard deviation of the length of calls is 2.6 minutes. She takes a random sample of 80 calls and finds that their mean length is 3.7 minutes.\n\na) Find a 95% confidence interval for the mean call length.\nb) An assistant manager points out that it is not known whether the call lengths are normally distributed. State, with a reason, whether the calculation of the confidence interval in part a is still valid.',
          type: 'Hard',
          explaination:
            'a) 1. σ = 2.6, x̄ = 3.7, n=80, z₀.₀₂₅ = 1.960\n2. CI: 3.7 ± 1.960 × 2.6/√80 ≈ 3.7 ± 0.570\n3. (3.130, 4.270)\nb) By the Central Limit Theorem, for large n=80, X̄ is approximately normally distributed regardless of the underlying distribution of individual call lengths.',
          answer:
            'a) CI: approximately (3.13, 4.27)\nb) Valid – large sample (n=80) means CLT applies regardless of distribution shape.',
        },
      ],
      'poisson-probability-calculations': [
        {
          id: 1,
          question: 'Given that X ~ Po(8.4), find P(X = 7).',
          type: 'Easy',
          explaination:
            'Using P(X=k)=(e^(−λ)λᵏ)/k! with λ=8.4, k=7:\nP(X=7)=(e^(−8.4)(8.4)⁷)/7! ≈ 0.1317',
          answer: 'P(X=7) ≈ 0.1317',
        },
        {
          id: 2,
          question: 'Given that X ~ Po(8.4), find P(X = 10).',
          type: 'Easy',
          explaination: 'P(X=10)=(e^(−8.4)(8.4)¹⁰)/10! ≈ 0.1084',
          answer: 'P(X=10) ≈ 0.1084',
        },
        {
          id: 3,
          question: 'Given that X ~ Po(8.4), find P(X ≤ 4).',
          type: 'Easy',
          explaination:
            'Using cumulative Poisson CDF: P(X ≤ 4) = Σ (k=0 to 4) (e^(−8.4)(8.4)ᵏ)/k! ≈ 0.0789',
          answer: 'P(X ≤ 4) ≈ 0.0789',
        },
        {
          id: 4,
          question: 'Given that X ~ Po(8.4), find P(X ≤ 9).',
          type: 'Easy',
          explaination: 'P(X ≤ 9) ≈ 0.6659 using GDC CDF.',
          answer: 'P(X ≤ 9) ≈ 0.6659',
        },
        {
          id: 5,
          question: 'Given that X ~ Po(8.4), find P(X < 11).',
          type: 'Easy',
          explaination: 'P(X < 11) = P(X ≤ 10) ≈ 0.7743',
          answer: 'P(X < 11) = P(X ≤ 10) ≈ 0.7743',
        },
        {
          id: 6,
          question: 'Given that X ~ Po(8.4), find P(X < 8).',
          type: 'Easy',
          explaination: 'P(X < 8) = P(X ≤ 7) ≈ 0.3987',
          answer: 'P(X < 8) = P(X ≤ 7) ≈ 0.3987',
        },
        {
          id: 7,
          question: 'Given that X ~ Po(8.4), find P(X ≥ 6).',
          type: 'Easy',
          explaination: 'P(X ≥ 6) = 1 − P(X ≤ 5) ≈ 1 − 0.1573 = 0.8427',
          answer: 'P(X ≥ 6) = 1 − P(X ≤ 5) ≈ 0.8427',
        },
        {
          id: 8,
          question: 'Given that X ~ Po(8.4), find P(X ≥ 3).',
          type: 'Easy',
          explaination: 'P(X ≥ 3) = 1 − P(X ≤ 2) ≈ 1 − 0.0100 = 0.9900',
          answer: 'P(X ≥ 3) = 1 − P(X ≤ 2) ≈ 0.9900',
        },
        {
          id: 9,
          question: 'Given that X ~ Po(8.4), find P(X > 12).',
          type: 'Medium',
          explaination: 'P(X > 12) = 1 − P(X ≤ 12) ≈ 1 − 0.9150 = 0.0850',
          answer: 'P(X > 12) = 1 − P(X ≤ 12) ≈ 0.0850',
        },
        {
          id: 10,
          question: 'Given that X ~ Po(8.4), find P(X > 7).',
          type: 'Medium',
          explaination: 'P(X > 7) = 1 − P(X ≤ 7) ≈ 1 − 0.3987 = 0.6013',
          answer: 'P(X > 7) = 1 − P(X ≤ 7) ≈ 0.6013',
        },
        {
          id: 11,
          question: 'Given that X ~ Po(8.4), find P(7 ≤ X ≤ 10).',
          type: 'Medium',
          explaination: 'P(7 ≤ X ≤ 10) = P(X ≤ 10) − P(X ≤ 6) ≈ 0.7743 − 0.2670 = 0.5073',
          answer: 'P(7 ≤ X ≤ 10) ≈ 0.5073',
        },
        {
          id: 12,
          question: 'Given that X ~ Po(8.4), find P(5 ≤ X ≤ 8).',
          type: 'Medium',
          explaination: 'P(5 ≤ X ≤ 8) = P(X ≤ 8) − P(X ≤ 4) ≈ 0.5369 − 0.0789 = 0.4580',
          answer: 'P(5 ≤ X ≤ 8) ≈ 0.4580',
        },
        {
          id: 13,
          question: 'Given that X ~ Po(8.4), find P(7 < X < 9).',
          type: 'Medium',
          explaination:
            'Strict inequalities: only k=8 qualifies.\nP(X=8) = (e^(−8.4)(8.4)⁸)/8! ≈ 0.1382',
          answer: 'P(7 < X < 9) = P(X = 8) ≈ 0.1382',
        },
        {
          id: 14,
          question: 'Given that X ~ Po(8.4), find P(6 < X < 12).',
          type: 'Medium',
          explaination: 'P(6 < X < 12) = P(X ≤ 11) − P(X ≤ 6) ≈ 0.8571 − 0.2670 = 0.5901',
          answer: 'P(6 < X < 12) = P(7 ≤ X ≤ 11) ≈ 0.5901',
        },
        {
          id: 15,
          question: 'Given that X ~ Po(8.4), find P(10 ≤ X < 13).',
          type: 'Medium',
          explaination: 'P(10 ≤ X ≤ 12) = P(X ≤ 12) − P(X ≤ 9) ≈ 0.9150 − 0.6659 = 0.2491',
          answer: 'P(10 ≤ X < 13) = P(10 ≤ X ≤ 12) ≈ 0.2491',
        },
        {
          id: 16,
          question: 'Given that X ~ Po(8.4), find P(10 < X ≤ 15).',
          type: 'Medium',
          explaination: 'P(X ≤ 15) − P(X ≤ 10) ≈ 0.9875 − 0.7743 = 0.2132',
          answer: 'P(10 < X ≤ 15) = P(11 ≤ X ≤ 15) ≈ 0.2132',
        },
        {
          id: 17,
          question:
            'A wire manufacturer is looking for flaws. Experience suggests that there are on average 1.8 flaws per metre in the wire.\n\nDetermine the probability that there is exactly one flaw in one metre of the wire.',
          type: 'Medium',
          explaination: 'Let X ~ Po(1.8)\nP(X=1) = e^(−1.8)(1.8) ≈ 0.2975',
          answer: 'P(X=1) ≈ 0.2975',
        },
        {
          id: 18,
          question:
            'The number of road traffic accidents at a particular intersection follows a Poisson distribution. Given that the probability of at least one accident in a given week is 0.6, find the probability of there being more than two accidents in a given week.',
          type: 'Hard',
          explaination:
            'P(X ≥ 1) = 1 − e^(−λ) = 0.6 ⇒ e^(−λ) = 0.4 ⇒ λ = −ln 0.4 ≈ 0.9163\nP(X > 2) = 1 − P(X ≤ 2)\nP(X ≤ 2) = e^(−λ)(1 + λ + λ²/2) ≈ 0.9344\nP(X > 2) ≈ 0.0656',
          answer: 'P(X > 2) ≈ 0.0656',
        },
        {
          id: 19,
          question:
            'The number of telephone calls per minute to a call centre follows a Poisson distribution with a mean of 6. Let X be the number of calls received in one minute.\n\nCalculate P(X = 6).',
          type: 'Medium',
          explaination: 'X ~ Po(6)\nP(X=6) = (e⁻⁶(6)⁶)/6! ≈ 0.1606',
          answer: 'P(X=6) ≈ 0.1606',
        },
        {
          id: 20,
          question:
            'The number of eagles observed in a forest in one day follows a Poisson distribution with mean 1.4.\n\nFind the probability that more than three eagles will be observed on a given day.',
          type: 'Medium',
          explaination: 'X ~ Po(1.4)\nP(X > 3) = 1 − P(X ≤ 3) ≈ 1 − 0.9463 = 0.0537',
          answer: 'P(X > 3) ≈ 0.0537',
        },
        {
          id: 21,
          question:
            'The number of mistakes a teacher makes while marking homework has a Poisson distribution with a mean of 1.6 errors per piece of homework.\n\nFind the probability that there are at least two marking errors in a randomly chosen piece of homework.',
          type: 'Medium',
          explaination:
            'X ~ Po(1.6)\nP(X ≥ 2) = 1 − P(X ≤ 1) = 1 − e^(−1.6)(1+1.6) ≈ 1 − 0.5249 = 0.4751',
          answer: 'P(X ≥ 2) ≈ 0.4751',
        },
        {
          id: 22,
          question:
            'A car company has two limousines that it hires out by the day. The number of requests per day has a Poisson distribution with a mean of 1.3 requests per day.\n\nFind the probability that neither limousine is hired.',
          type: 'Medium',
          explaination: "X ~ Po(1.3)\n'Neither hired' means X=0\nP(X=0) = e^(−1.3) ≈ 0.2725",
          answer: 'P(X=0) ≈ 0.2725',
        },
        {
          id: 23,
          question:
            'A car company has two limousines that it hires out by the day. The number of requests per day has a Poisson distribution with a mean of 1.3 requests per day.\n\nFind the probability that some requests have to be denied.',
          type: 'Medium',
          explaination:
            "'Some denied' means more than 2 requests:\nP(X > 2) = 1 − P(X ≤ 2) ≈ 1 − 0.8571 = 0.1429",
          answer: 'P(X > 2) ≈ 0.1429',
        },
      ],
      'poisson-mean-and-variance': [
        {
          id: 1,
          question: 'Find E(X) if X ~ Po(3.1).',
          type: 'Easy',
          explaination: 'For a Poisson distribution, E(X) = λ = 3.1',
          answer: 'E(X) = 3.1',
        },
        {
          id: 2,
          question: 'Find Var(X) if X ~ Po(3.1).',
          type: 'Easy',
          explaination: 'For a Poisson distribution, Var(X) = λ = 3.1',
          answer: 'Var(X) = 3.1',
        },
        {
          id: 3,
          question: 'Find the standard deviation of X if X ~ Po(5.3).',
          type: 'Easy',
          explaination: 'SD(X) = √λ = √5.3 ≈ 2.302',
          answer: 'SD(X) = √5.3 ≈ 2.302',
        },
        {
          id: 4,
          question: 'Find the mean of X if X ~ Po(5.3).',
          type: 'Easy',
          explaination: 'E(X) = λ = 5.3',
          answer: 'E(X) = 5.3',
        },
      ],
    },
  },
  {
    'statistical-hypothesis-testing': {
      title: 'Statistical Hypothesis Testing',
      'one-sample-z-test-t-test': [
        {
          id: 1,
          question:
            'For the following hypothesis test, use the p-value method to state a conclusion.\nH₀: μ = 12, H₁: μ ≠ 12\nSignificance level: 5%; population σ = 2.7; sample size n = 15; sample mean x̄ = 13.2',
          type: 'Easy',
          explaination:
            'Use a z-test since σ is known.\nz = (x̄ − μ)/(σ / √n) = (13.2 − 12)/(2.7/√15) ≈ 1.721\nTwo-tailed p-value = 2P(Z > 1.721) ≈ 0.0851\nSince 0.0851 > 0.05, do not reject H₀ at 5% significance.\nInsufficient evidence that the mean differs from 12.',
          answer: 'Do not reject H₀',
        },
        {
          id: 2,
          question:
            'For the following hypothesis test, use the p-value method to state a conclusion.\nH₀: μ = 132, H₁: μ ≠ 132\nSignificance level: 5%; population σ = 14.1; sample size n = 12; sample mean x̄ = 122.5',
          type: 'Easy',
          explaination:
            'z-test (σ known).\nz = (122.5 − 132)/(14.1/√12) ≈ −2.334\nTwo-tailed p-value = 2P(Z < −2.334) ≈ 0.0196\nSince 0.0196 < 0.05, reject H₀.\nSufficient evidence that the mean differs from 132.',
          answer: 'Reject H₀',
        },
        {
          id: 3,
          question:
            'For the following hypothesis test, use the p-value method to state a conclusion.\nH₀: μ = 120, H₁: μ > 120\nSignificance level: 10%; population σ = 4.8;\nSample data: 132, 127, 122, 119, 121, 117, 131, 128, 122',
          type: 'Medium',
          explaination:
            'n=9, x̄ ≈ 124.33; σ known → z-test.\nz = (124.33 − 120)/(4.8/√9) = 4.33/1.6 ≈ 2.708\nOne-tailed p-value = P(Z > 2.708) ≈ 0.0034\nSince 0.0034 < 0.10, reject H₀.\nSufficient evidence that the mean exceeds 120.',
          answer: 'Reject H₀',
        },
        {
          id: 4,
          question:
            'For the following hypothesis test, use the p-value method to state a conclusion.\nH₀: μ = 11.5, H₁: μ > 11.5\nSignificance level: 10%; population σ = 1.25;\nSample data: 13.2, 12.7, 12.2, 11.9, 12.1, 11.7, 13.1, 12.8, 12.2',
          type: 'Medium',
          explaination:
            'n=9, x̄ ≈ 12.43; σ known → z-test.\nz = (12.43 − 11.5)/(1.25/√9) ≈ 2.232\nOne-tailed p-value ≈ 0.0128\nSince 0.0128 < 0.10, reject H₀.',
          answer: 'Reject H₀',
        },
      ],
      'one-sample-t-test': [
        {
          id: 1,
          question:
            'For the following hypothesis test, use the p-value method to state a conclusion.\nH₀: μ = 4.5, H₁: μ < 4.5\nSignificance level: 2%; sample size n = 15; sample mean x̄ = 3.7; sₙ₋₁ = 1.26',
          type: 'Easy',
          explaination:
            'Use t-test since σ unknown.\nt = (3.7 − 4.5)/(1.26/√15) ≈ −2.457\nDegrees of freedom: ν = 14\nOne-tailed p-value = P(T₁₄ < −2.457) ≈ 0.0138\nSince 0.0138 < 0.02, reject H₀.\nSufficient evidence that the mean is less than 4.5.',
          answer: 'Reject H₀',
        },
        {
          id: 2,
          question:
            'For the following hypothesis test, use the p-value method to state a conclusion.\nH₀: μ = 72, H₁: μ < 72\nSignificance level: 2%; sample size n = 8; sample mean x̄ = 68.7; sₙ₋₁ = 3.84',
          type: 'Easy',
          explaination:
            't-test (σ unknown).\nt = (68.7 − 72)/(3.84/√8) ≈ −2.429\nDegrees of freedom: ν = 7\nOne-tailed p-value = P(T₇ < −2.429) ≈ 0.0228\nSince 0.0228 > 0.02, do not reject H₀.\nInsufficient evidence that the mean is less than 72.',
          answer: 'Do not reject H₀',
        },
        {
          id: 3,
          question:
            'For the following hypothesis test, use the p-value method to state a conclusion.\nH₀: μ = 16, H₁: μ ≠ 16\nSignificance level: 5%; sample data: 14, 18, 22, 12, 21, 17',
          type: 'Medium',
          explaination:
            'From data: n=6, x̄ = 17.33, sₙ₋₁ ≈ 3.882\nt-test (σ unknown).\nt = (17.33 − 16)/(3.882/√6) ≈ 0.840\nDegrees of freedom: ν = 5\nTwo-tailed p-value ≈ 0.439\nSince 0.439 > 0.05, do not reject H₀.\nInsufficient evidence that the mean differs from 16.',
          answer: 'Do not reject H₀',
        },
        {
          id: 4,
          question:
            'For the following hypothesis test, use the p-value method to state a conclusion.\nH₀: μ = 2.1, H₁: μ ≠ 2.1\nSignificance level: 5%; sample data: 4.2, 1.7, 3.5, 2.1, 4.2, 1.4',
          type: 'Medium',
          explaination:
            'From data: n=6, x̄ = 2.85, sₙ₋₁ ≈ 1.269\nt = (2.85 − 2.1)/(1.269/√6) ≈ 1.447\nDegrees of freedom: ν = 5\nTwo-tailed p-value ≈ 0.207\nSince 0.207 > 0.05, do not reject H₀.',
          answer: 'Do not reject H₀',
        },
        {
          id: 5,
          question:
            "The scores on a national mathematics test are distributed normally with mean 65.7. Juan thinks that the scores in his school are lower than the national average. A random sample of 20 students gives a mean score of 62.9 and variance 12.635.\n\n(a) Use these sample values to find an unbiased estimate of the population variance.\n(b) Explain why a t-test is appropriate in this situation.\n(c) Test Juan's belief at the 10% significance level.",
          type: 'Medium',
          explaination:
            '(a) Unbiased estimate: sₙ₋₁² = n/(n−1) sₙ² = 20/19 × 12.635 ≈ 13.30\n\n(b) Population σ is unknown; sample is taken from a normal distribution, so t-test is appropriate.\n\n(c) H₀: μ = 65.7, H₁: μ < 65.7\nt = (62.9 − 65.7)/(√(13.30/20)) = −2.8/0.8155 ≈ −3.433\nν = 19; one-tailed p-value ≈ 0.0015\nSince p < 0.10, reject H₀. Evidence that scores are lower.',
          answer: '(a) sₙ₋₁² ≈ 13.30\n(c) Reject H₀',
        },
      ],
      'critical-region-one-sample-z-test': [
        {
          id: 1,
          question:
            'Find the critical region for the following hypothesis test.\nH₀: μ = 80.4, H₁: μ < 80.4\n10% significance level; n = 120; population σ = 20',
          type: 'Easy',
          explaination:
            'One-tailed (lower) z-test.\nCritical z-value: z₀.₁₀ = −1.282\nX̄ < 80.4 + (−1.282) × 20/√120\nX̄ < 80.4 − 2.341 ≈ 78.06',
          answer: 'X̄ < 78.06',
        },
        {
          id: 2,
          question:
            'Find the critical region for the following hypothesis test.\nH₀: μ = 93, H₁: μ < 93\n5% significance level; n = 400; population σ = 20',
          type: 'Easy',
          explaination:
            'One-tailed (lower) z-test.\nCritical z: z₀.₀₅ = −1.645\nX̄ < 93 + (−1.645) × 20/√400 = 93 − 1.645 = 91.355',
          answer: 'X̄ < 91.355',
        },
        {
          id: 3,
          question:
            'Find the critical region for the following hypothesis test.\nH₀: μ = 80, H₁: μ > 80\n1% significance level; n = 18; population σ = 10',
          type: 'Easy',
          explaination:
            'One-tailed (upper) z-test.\nCritical z: z₀.₀₁ = 2.326\nX̄ > 80 + 2.326 × 10/√18 ≈ 80 + 5.483 = 85.48',
          answer: 'X̄ > 85.48',
        },
        {
          id: 4,
          question:
            'Find the critical region for the following hypothesis test.\nH₀: μ = 750, H₁: μ > 750\n2% significance level; n = 45; population σ = 10',
          type: 'Easy',
          explaination:
            'One-tailed (upper) z-test.\nCritical z: z₀.₀₂ = 2.054\nX̄ > 750 + 2.054 × 10/√45 ≈ 750 + 3.062 = 753.062',
          answer: 'X̄ > 753.06',
        },
        {
          id: 5,
          question:
            'Find the critical region for the following hypothesis test.\nH₀: μ = 60, H₁: μ ≠ 60\n5% significance level; n = 16; population σ = 10',
          type: 'Medium',
          explaination:
            'Two-tailed z-test.\nCritical z: ± 1.960\nX̄ < 60 − 1.960 × 10/√16 = 60 − 4.9 = 55.1\nX̄ > 60 + 4.9 = 64.9',
          answer: 'X̄ < 55.1 or X̄ > 64.9',
        },
        {
          id: 6,
          question:
            'Find the critical region for the following hypothesis test.\nH₀: μ = 120, H₁: μ ≠ 120\n10% significance level; n = 30; population σ = 10',
          type: 'Medium',
          explaination:
            'Two-tailed z-test.\nCritical z: ± 1.645\nX̄ < 120 − 1.645 × 10/√30 ≈ 120 − 3.003 = 116.997\nX̄ > 120 + 3.003 = 123.003',
          answer: 'X̄ < 117.00 or X̄ > 123.00',
        },
      ],
      'one-sample-z-test-known-sigma': [
        {
          id: 1,
          question:
            "The wingspan of a species of butterfly is known to be normally distributed with mean 10 cm and standard deviation 1 cm. A zoologist suspects he may have found a new sub-species with a larger wingspan. The mean of a sample of 6 of these butterflies is 11.2 cm. Test the scientist's suspicion at the 5% significance level, assuming that the wingspans are still normally distributed with standard deviation 1 cm.",
          type: 'Medium',
          explaination:
            'H₀: μ = 10, H₁: μ > 10\nσ = 1 known; one-tailed z-test.\nz = (11.2 − 10)/(1/√6) = 1.2/0.4082 ≈ 2.939\np-value = P(Z > 2.939) ≈ 0.0016\nSince 0.0016 < 0.05, reject H₀.\nSufficient evidence that the sub-species has a larger wingspan.',
          answer: 'Reject H₀; evidence of a larger wingspan',
        },
        {
          id: 2,
          question:
            "It is believed that, in men, the normal level of testosterone in blood is normally distributed with mean 24 nmol per litre and standard deviation 6 nmol per litre. After a race, a sprinter gives two samples with an average of 34 nmol per litre. Is this sufficiently different (at 1% significance) to suggest that the sprinter's testosterone level is above average?",
          type: 'Medium',
          explaination:
            "H₀: μ = 24, H₁: μ > 24\nσ = 6 known; n = 2; one-tailed z-test.\nz = (34 − 24)/(6/√2) = 10/4.243 ≈ 2.357\nOne-tailed p-value = P(Z > 2.357) ≈ 0.0092\nSince 0.0092 < 0.01, reject H₀.\nSufficient evidence at 1% significance that the sprinter's level is above average.",
          answer: 'Reject H₀; testosterone level is above average',
        },
      ],
      'type-i-and-type-ii-error-normal-distribution': [
        {
          id: 1,
          question:
            'A particular brand of ice cream is sold in 2 litre containers. The volume is normally distributed with standard deviation 0.1 litres. A sample of 10 containers is taken.\n\nH₀: μ = 2, H₁: μ ≠ 2, 5% significance level.\n\na) What is the probability that they conclude the mean is different from 2 litres when in fact it is not?\n\nThey now reject H₀ if the sample mean is less than 1.95 litres or more than 2.05 litres.\n\nb) Find the probability that they conclude the mean is different from 2 litres when in fact it is not.',
          type: 'Hard',
          explaination:
            'a) At 5% significance (two-tailed), P(Type I) = 0.05 by definition.\nb) X̄ ~ N(2, 0.001), SD = 0.1/√10\nP(X̄<1.95 or X̄>2.05) = 2Φ(−0.05/0.03162) = 2Φ(−1.581) ≈ 0.1138',
          answer:
            'a) P(Type I) = 0.05\n\nb) X̄ ~ N(2, 0.01/10)\nP(X̄<1.95) + P(X̄>2.05)\n= 2P(Z < (1.95−2)/(0.1/√10)) ≈ 2P(Z<−1.581) ≈ 0.1138',
        },
        {
          id: 2,
          question:
            'The mean length of adult field mice follows N(10.5, 1.8²) cm. A conservationist tests at 5% significance with a sample of 6 mice:\n\nH₀: μ = 10.5, H₁: μ < 10.5\n\na) Find the probability of a Type I error.\n\nIn reality, μ = 9.8 cm.\n\nb) Find the probability of a Type II error.\n\nc) What could be done to decrease the probability of a Type II error without changing the probability of a Type I error?',
          type: 'Hard',
          explaination:
            'a) One-tailed test at 5%; Type I error probability = significance level = 0.05.\nb) Critical value: X̄(c) = 10.5 − 1.6449 × 1.8/√6 = 10.5 − 1.6449 × 0.7348 ≈ 9.291\nP(Type II) = P(X̄ ≥ 9.291 | μ=9.8) = P(Z ≥ (9.291−9.8)/0.7348) = P(Z ≥ −0.692) ≈ 0.756\nc) Increase sample size (reduces variance of sample mean, making test more powerful).',
          answer:
            'a) P(Type I) = 0.05\n\nb) Find critical value: X̄(c) = 10.5 − 1.645 · 1.8/√6 ≈ 9.291\nP(Type II) = P(X̄ ≥ 9.291 | μ=9.8) ≈ 0.756\n\nc) Increase the sample size.',
        },
      ],
    },
  },
]
// export const AIHLQuestionAndAnswer = [
//   {
//     'logarithms-and-exponentials': {
//       title: 'Logarithms & Exponentials',
//       'solving-log-equations': [],
//       'laws-of-logarithms-expressing-in-terms-of-p-and-q': [],
//       'solving-equations-using-log-laws': [],
//       'solving-exponential-equations-using-logarithms': [],
//       'solving-equations-with-non-standard-bases': [],
//     },
//   },
//   {
//     matrices: {
//       title: 'Matrices',
//       'matrix-addition-and-subtraction': [],
//       'matrix-multiplication': [],
//       'matrix-equations': [],
//       'inverse-of-3x3-Matrix': [],
//       'inverse-of-2x2-matrix': [],
//     },
//   },
//   {
//     'graph-theory': {
//       title: 'Graph Theory',
//       'adjacency-matrices': [],
//       'kruskals-algorithm': [],
//       'prims-algorithm': [],
//       'minimum-spanning-trees': [],
//       'travelling-salesman-problem-nearest-neighbour-algorithm': [],
//     },
//   },
//   {
//     'statistics-and-probability': {
//       title: 'Statistics & Probability',
//       'coefficient-of-determination-r2': [],
//       'confidence-intervals-unknown-variance-t-distribution': [],
//       'confidence-intervals-known-variance-z-distribution': [],
//       'poisson-probability-calculations': [],
//       'poisson-mean-and-variance': [],
//     },
//   },
//   {
//     'statistical-hypothesis-testing': {
//       title: 'Statistical Hypothesis Testing',
//       'one-sample-z-test-t-test': [],
//       'one-sample-t-test': [],
//       'critical-region-one-sample-z-test': [],
//       'one-sample-z-test-known-sigma': [],
//       'type-i-and-type-ii-error-normal-distribution': [],
//     },
//   },
// ]

/*
  Entry shape for each subtopic array (same as the previous file):
  {
    id: 1,
    question: '',
    type: 'Easy' | 'Medium' | 'Hard',
    explaination: '',
    answer: '',
  }
*/

// export const AISLQuestionAndAnswer = [
//   {
//     'number-and-algebra': {
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

export function findTopic(topicSlug: string) {
  return topics.find((topic) => topic.slug === topicSlug)
}

export function findSubtopic(topicSlug: string, subtopicSlug: string) {
  const topic = findTopic(topicSlug)

  const subtopic = topic?.subtopics.find((item) => item.slug === subtopicSlug)

  return topic && subtopic ? { topic, subtopic } : undefined
}
