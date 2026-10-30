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
    title: 'Number & Algebra',
    slug: 'number-and-algebra',
    description:
      'Explore number systems, arithmetic sequences and series, bounds, inequalities, percentages and algebraic techniques.',
    subtopics: [
      {
        title: 'Arithmetic Sequences - Finding Terms',
        slug: 'arithmetic-sequences-finding-terms',
        description:
          'Learn how to identify and calculate specific terms in an arithmetic sequence using the common difference.',
      },
      {
        title: 'Arithmetic Sequences – nth Term Formula',
        slug: 'arithmetic-sequences-nth-term-formula',
        description:
          'Understand how to derive and apply the nth term formula to find any term in an arithmetic sequence.',
      },
      {
        title: 'Arithmetic Series – Sum of Terms',
        slug: 'arithmetic-series-sum-of-terms',
        description:
          'Learn how to calculate the sum of a given number of terms in an arithmetic series using appropriate formulas.',
      },
      {
        title: 'Bounds & Inequalities',
        slug: 'bounds-and-inequalities',
        description:
          'Understand upper and lower bounds, rounding errors and how to solve and represent inequalities.',
      },
      {
        title: 'Percentage Error',
        slug: 'percentage-error',
        description:
          'Learn how to calculate percentage error by comparing approximate values with their exact values.',
      },
    ],
  },
  {
    title: 'Probability',
    slug: 'probability',
    description:
      'Explore probability concepts, Venn diagrams, tree diagrams, conditional probability and binomial distributions.',
    subtopics: [
      {
        title: 'Venn Diagrams',
        slug: 'venn-diagrams',
        description:
          'Learn how to represent sets and calculate probabilities of combined events using Venn diagrams.',
      },
      {
        title: 'Tree Diagrams',
        slug: 'tree-diagrams',
        description:
          'Understand how to construct and use probability tree diagrams to calculate probabilities of successive events.',
      },
      {
        title: 'Conditional Probability',
        slug: 'conditional-probability',
        description:
          'Explore conditional probability and learn how to calculate the probability of an event occurring given another event.',
      },
      {
        title: 'Binomial Distribution',
        slug: 'binomial-distribution',
        description:
          'Understand the conditions for a binomial distribution and calculate probabilities using the binomial formula.',
      },
      {
        title: 'Binomial Distribution – Mean & SD',
        slug: 'binomial-distribution-mean-and-sd',
        description:
          'Learn how to calculate and interpret the mean and standard deviation of a binomial distribution.',
      },
    ],
  },
  {
    title: 'Trigonometry',
    slug: 'trigonometry',
    description:
      'Study trigonometric functions, sinusoidal models, sine and cosine rules, and their applications in solving real-world problems.',
    subtopics: [
      {
        title: 'Sinusoidal Models – Real-world Context',
        slug: 'sinusoidal-models-real-world-context',
        description:
          'Learn how to model real-world periodic phenomena using sine and cosine functions and interpret their key features.',
      },
      {
        title: 'Sine Rule',
        slug: 'sine-rule',
        description:
          'Understand how to apply the sine rule to calculate unknown sides and angles in non-right-angled triangles.',
      },
      {
        title: 'Cosine Rule',
        slug: 'cosine-rule',
        description:
          'Learn how to use the cosine rule to find unknown sides and angles in non-right-angled triangles.',
      },
      {
        title: 'Area of a Triangle',
        slug: 'area-of-a-triangle',
        description:
          'Learn how to calculate the area of a triangle using trigonometric formulas involving two sides and the included angle.',
      },
      {
        title: 'Multi-Step Trigonometry Problems',
        slug: 'multi-step-trigonometry-problems',
        description:
          'Apply trigonometric rules and formulas together to solve complex problems involving triangles, angles and unknown lengths.',
      },
    ],
  },
  {
    title: 'Geometry & Trigonometry',
    slug: 'geometry-and-trigonometry',
    description:
      'Explore geometric measurements, bearings, navigation, angles of elevation and depression, arc lengths and sector areas.',
    subtopics: [
      {
        title: 'Bearings and Navigation',
        slug: 'bearings-and-navigation',
        description:
          'Learn how to measure and calculate three-figure bearings and solve navigation problems using geometric and trigonometric methods.',
      },
      {
        title: 'Angles of Elevation and Depression',
        slug: 'angles-of-elevation-and-depression',
        description:
          'Understand angles of elevation and depression and apply trigonometric ratios to solve real-world measurement problems.',
      },
      {
        title: 'Arc Length & Sector Area',
        slug: 'arc-length-and-sector-area',
        description:
          'Learn how to calculate the arc length and area of sectors using angles measured in radians.',
      },
      {
        title: 'Arc Length & Sector Area – Finding Radius',
        slug: 'arc-length-and-sector-area-finding-radius',
        description:
          'Learn how to rearrange arc length and sector area formulas to calculate the radius of a circle.',
      },
      {
        title: 'Arc Length & Sector Area – Finding Angle',
        slug: 'arc-length-and-sector-area-finding-angle',
        description:
          'Understand how to use arc length and sector area formulas to determine unknown angles in radians.',
      },
    ],
  },
  {
    title: 'Statistical Testing',
    slug: 'statistical-testing',
    description:
      'Explore statistical hypothesis testing, including chi-squared tests and t-tests, to analyse data and draw meaningful conclusions.',
    subtopics: [
      {
        title: 'Chi-squared Goodness of Fit',
        slug: 'chi-squared-goodness-of-fit',
        description:
          'Learn how to perform a chi-squared goodness of fit test to determine whether observed data matches an expected distribution.',
      },
      {
        title: 'Chi-squared Test for Independence',
        slug: 'chi-squared-test-for-independence',
        description:
          'Understand how to use the chi-squared test for independence to investigate relationships between two categorical variables.',
      },
      {
        title: 'Chi-squared Test for Independence – Full Test',
        slug: 'chi-squared-test-for-independence-full-test',
        description:
          'Practise completing a full chi-squared test for independence, including hypotheses, expected frequencies, test statistics and conclusions.',
      },
      {
        title: 'One-sample t-test',
        slug: 'one-sample-t-test',
        description:
          'Learn how to perform a one-sample t-test to determine whether a sample mean differs significantly from a hypothesised population mean.',
      },
      {
        title: 'Two-sample t-test',
        slug: 'two-sample-t-test',
        description:
          'Understand how to perform a two-sample t-test to compare the means of two independent groups and assess statistical significance.',
      },
    ],
  },
]
export const AISLQuestionAndAnswer = [
  {
    'number-and-algebra': {
      title: 'Number & Algebra',
      'arithmetic-sequences-finding-terms': [
        {
          id: 1,
          question: 'Given u₁ = 5 and d = 4, find u₁₂.',
          type: 'Easy',
          explaination: 'Use uₙ = u₁ + (n − 1)d. u₁₂ = 5 + (12 − 1)(4) = 5 + 44 = 49.',
          answer: 'u₁₂ = 49',
        },
        {
          id: 2,
          question: 'Given u₁ = 11 and d = 3, find u₂₀.',
          type: 'Easy',
          explaination: 'u₂₀ = 11 + (20 − 1)(3) = 11 + 57 = 68.',
          answer: 'u₂₀ = 68',
        },
        {
          id: 3,
          question: 'Given u₁ = 13 and d = −7, find u₆.',
          type: 'Easy',
          explaination: 'u₆ = 13 + (6 − 1)(−7) = 13 − 35 = −22.',
          answer: 'u₆ = −22',
        },
        {
          id: 4,
          question: 'Given u₁ = 11 and d = −3, find u₁₈.',
          type: 'Easy',
          explaination: 'u₁₈ = 11 + (18 − 1)(−3) = 11 − 51 = −40.',
          answer: 'u₁₈ = −40',
        },
        {
          id: 5,
          question:
            'The first term of an arithmetic sequence is 3 and the second term is 7. Find the eighth term.',
          type: 'Easy',
          explaination: 'd = 7 − 3 = 4. u₈ = 3 + 7(4) = 31.',
          answer: 'u₈ = 31',
        },
        {
          id: 6,
          question:
            'The first term of an arithmetic sequence is −8 and the common difference is 5. Find the 25th term.',
          type: 'Medium',
          explaination: 'u₂₅ = −8 + 24(5) = −8 + 120 = 112.',
          answer: 'u₂₅ = 112',
        },
      ],
      'arithmetic-sequences-nth-term-formula': [
        {
          id: 1,
          question:
            'Given u₁ = 8 and d = −3, find a formula for the nth term of the arithmetic sequence.',
          type: 'Easy',
          explaination: 'uₙ = 8 + (n − 1)(−3) = 8 − 3n + 3 = 11 − 3n.',
          answer: 'uₙ = 11 − 3n',
        },
        {
          id: 2,
          question:
            'Given u₁ = 10 and d = 4, find a formula for the nth term of the arithmetic sequence.',
          type: 'Easy',
          explaination: 'uₙ = 10 + (n − 1)(4) = 4n + 6.',
          answer: 'uₙ = 4n + 6',
        },
        {
          id: 3,
          question:
            'Given u₁ = 3 and u₅ = 11, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination: 'd = (11 − 3) ÷ 4 = 2. uₙ = 3 + (n − 1)(2) = 2n + 1.',
          answer: 'uₙ = 2n + 1',
        },
        {
          id: 4,
          question:
            'Given u₁ = 10 and u₁₁ = 50, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination: 'd = (50 − 10) ÷ 10 = 4. uₙ = 10 + (n − 1)(4) = 4n + 6.',
          answer: 'uₙ = 4n + 6',
        },
        {
          id: 5,
          question:
            'Given u₂ = 6 and u₅ = 21, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination: '3d = 15 ⇒ d = 5. u₁ = 6 − 5 = 1. uₙ = 1 + (n − 1)(5) = 5n − 4.',
          answer: 'uₙ = 5n − 4',
        },
        {
          id: 6,
          question:
            'Given u₃ = 14 and u₆ = −15, find a formula for the nth term of the arithmetic sequence.',
          type: 'Medium',
          explaination:
            'd = (−15 − 14) ÷ 3 = −29/3. u₁ = 14 − 2(−29/3) = 14 + 58/3 = 100/3. uₙ = 100/3 + (n − 1)(−29/3) = −(29/3)n + 129/3.',
          answer: 'uₙ = −(29/3)n + 129/3',
        },
      ],
      'arithmetic-series-sum-of-terms': [
        {
          id: 1,
          question: 'Given u₁ = 9 and d = 4, find S₁₂.',
          type: 'Easy',
          explaination: 'S₁₂ = (12/2)(2(9) + (12 − 1)(4)) = 6(18 + 44) = 6(62) = 372.',
          answer: 'S₁₂ = 372',
        },
        {
          id: 2,
          question: 'Given u₁ = 17 and d = 2, find S₂₀.',
          type: 'Easy',
          explaination: 'S₂₀ = (20/2)(2(17) + (20 − 1)(2)) = 10(34 + 38) = 10(72) = 720.',
          answer: 'S₂₀ = 720',
        },
        {
          id: 3,
          question: 'Given u₁ = 34 and d = −7, find S₁₁.',
          type: 'Easy',
          explaination: 'S₁₁ = (11/2)(2(34) + (11 − 1)(−7)) = (11/2)(68 − 70) = (11/2)(−2) = −11.',
          answer: 'S₁₁ = −11',
        },
        {
          id: 4,
          question: 'Given u₁ = 9 and d = −11, find S₈.',
          type: 'Easy',
          explaination: 'S₈ = (8/2)(2(9) + (8 − 1)(−11)) = 4(18 − 77) = 4(−59) = −236.',
          answer: 'S₈ = −236',
        },
        {
          id: 5,
          question: 'Given u₁ = 7 and u₆ = 32, find S₁₁.',
          type: 'Medium',
          explaination:
            'd = (32 − 7) ÷ 5 = 5. u₁₁ = 7 + 10(5) = 57. S₁₁ = (11/2)(7 + 57) = (11 × 64)/2 = 352.',
          answer: 'S₁₁ = 352',
        },
        {
          id: 6,
          question: 'Given u₁ = 9 and u₅ = 41, find S₁₂.',
          type: 'Medium',
          explaination:
            'd = (41 − 9) ÷ 4 = 8. u₁₂ = 9 + 11(8) = 97. S₁₂ = (12/2)(9 + 97) = 6(106) = 636.',
          answer: 'S₁₂ = 636',
        },
        {
          id: 7,
          question:
            'The first term of an arithmetic sequence is 3 and the second term is 7. Find the sum of the first 15 terms.',
          type: 'Easy',
          explaination:
            'd = 7 − 3 = 4. S₁₅ = (15/2)(2(3) + 14(4)) = (15/2)(6 + 56) = (15 × 62)/2 = 465.',
          answer: 'S₁₅ = 465',
        },
        {
          id: 8,
          question:
            'In an arithmetic sequence, the first term is 8 and the common difference is 5. Find the sum of the first 10 terms.',
          type: 'Easy',
          explaination: 'S₁₀ = (10/2)(2(8) + 9(5)) = 5(16 + 45) = 5(61) = 305.',
          answer: 'S₁₀ = 305',
        },
        {
          id: 9,
          question:
            'In an arithmetic sequence, the first term is 8, the common difference is 3 and the last term is 68. Find the sum of all the terms of the sequence.',
          type: 'Easy',
          explaination: '8 + (n − 1)(3) = 68 ⇒ n = 21. S₂₁ = (21/2)(8 + 68) = (21 × 76)/2 = 798.',
          answer: 'S₂₁ = 798',
        },
        {
          id: 10,
          question:
            'The 7th term of an arithmetic sequence is 35 and the 18th term is 112. Find the sum of the first 18 terms.',
          type: 'Medium',
          explaination:
            '11d = 112 − 35 = 77 ⇒ d = 7. u₁ = 35 − 6(7) = −7. S₁₈ = (18/2)(−7 + 112) = 9(105) = 945.',
          answer: 'S₁₈ = 945',
        },
      ],
      'bounds-and-inequalities': [
        {
          id: 1,
          question: 'x = 12.3 to 1 d.p. Write an inequality for the possible values x can take.',
          type: 'Easy',
          explaination:
            'Half of 0.1 = 0.05. Lower bound: 12.3 − 0.05 = 12.25. Upper bound: 12.3 + 0.05 = 12.35. So 12.25 ≤ x < 12.35.',
          answer: '12.25 ≤ x < 12.35',
        },
        {
          id: 2,
          question: 'x = 0.8 to 1 d.p. Write an inequality for the possible values x can take.',
          type: 'Easy',
          explaination:
            'Half of 0.1 = 0.05. Lower bound: 0.8 − 0.05 = 0.75. Upper bound: 0.8 + 0.05 = 0.85. So 0.75 ≤ x < 0.85.',
          answer: '0.75 ≤ x < 0.85',
        },
        {
          id: 3,
          question: 'x = 0.49 to 2 d.p. Write an inequality for the possible values x can take.',
          type: 'Easy',
          explaination:
            'Half of 0.01 = 0.005. Lower bound: 0.49 − 0.005 = 0.485. Upper bound: 0.49 + 0.005 = 0.495. So 0.485 ≤ x < 0.495.',
          answer: '0.485 ≤ x < 0.495',
        },
        {
          id: 4,
          question: 'x = 5.73 to 2 d.p. Write an inequality for the possible values x can take.',
          type: 'Easy',
          explaination:
            'Half of 0.01 = 0.005. Lower bound: 5.73 − 0.005 = 5.725. Upper bound: 5.73 + 0.005 = 5.735. So 5.725 ≤ x < 5.735.',
          answer: '5.725 ≤ x < 5.735',
        },
        {
          id: 5,
          question: 'x = 60 to 1 s.f. Write an inequality for the possible values x can take.',
          type: 'Easy',
          explaination:
            'Rounded to the nearest 10, so half = 5. 60 − 5 = 55 and 60 + 5 = 65. So 55 ≤ x < 65.',
          answer: '55 ≤ x < 65',
        },
        {
          id: 6,
          question: 'x = 0.3 to 1 s.f. Write an inequality for the possible values x can take.',
          type: 'Easy',
          explaination:
            'Rounded to the nearest 0.1, so half = 0.05. 0.3 − 0.05 = 0.25 and 0.3 + 0.05 = 0.35. So 0.25 ≤ x < 0.35.',
          answer: '0.25 ≤ x < 0.35',
        },
        {
          id: 7,
          question: 'x = 470 to 2 s.f. Write an inequality for the possible values x can take.',
          type: 'Easy',
          explaination:
            'Rounded to the nearest 10, so half = 5. 470 − 5 = 465 and 470 + 5 = 475. So 465 ≤ x < 475.',
          answer: '465 ≤ x < 475',
        },
        {
          id: 8,
          question: 'x = 24 to 2 s.f. Write an inequality for the possible values x can take.',
          type: 'Easy',
          explaination:
            'Rounded to the nearest 1, so half = 0.5. 24 − 0.5 = 23.5 and 24 + 0.5 = 24.5. So 23.5 ≤ x < 24.5.',
          answer: '23.5 ≤ x < 24.5',
        },
        {
          id: 9,
          question:
            'A shelf is 85 cm long to the nearest centimetre. Find the upper and lower bounds of the length.',
          type: 'Easy',
          explaination:
            'Half of 1 cm = 0.5 cm. 85 − 0.5 = 84.5 and 85 + 0.5 = 85.5. So 84.5 ≤ length < 85.5.',
          answer: 'Lower bound: 84.5 cm, Upper bound: 85.5 cm',
        },
        {
          id: 10,
          question:
            'A right-angled triangle ABC has the right angle at A. AB = 4.7 cm to one decimal place and BC = 12.3 cm to one decimal place. Write an inequality for the possible length of AC.',
          type: 'Hard',
          explaination:
            'Bounds: 4.65 ≤ AB < 4.75 and 12.25 ≤ BC < 12.35. BC is the hypotenuse, so AC = √(BC² − AB²). AC is largest when BC is largest and AB is smallest: √(12.35² − 4.65²) = √(152.5225 − 21.6225) = √130.9 ≈ 11.441 cm. AC is smallest when BC is smallest and AB is largest: √(12.25² − 4.75²) = √(150.0625 − 22.5625) = √127.5 ≈ 11.292 cm.',
          answer: '11.292… ≤ AC < 11.441…',
        },
        {
          id: 11,
          question:
            'A right-angled triangle ABC has the right angle at A. AB = 4.7 cm to one decimal place and BC = 12.3 cm to one decimal place, so 11.292… ≤ AC < 11.441…. Find the maximum percentage error in any stated length of AC within this range.',
          type: 'Hard',
          explaination:
            'The largest error occurs when the stated length is at one end of the range and the true length is at the other. Error = 11.441… − 11.292… = 0.1496 cm. Taking the true value as the lower bound gives the largest percentage: ε = 0.1496 ÷ 11.292 × 100% ≈ 1.32%.',
          answer: 'Maximum percentage error ≈ 1.32%',
        },
        {
          id: 12,
          question:
            'It is known that a = 1.45 to two decimal places. Write down an inequality to describe the possible values of a.',
          type: 'Hard',
          explaination: 'Half of 0.01 = 0.005. 1.45 − 0.005 = 1.445 and 1.45 + 0.005 = 1.455.',
          answer: '1.445 ≤ a < 1.455',
        },
        {
          id: 13,
          question:
            'It is known that a = 1.45 to two decimal places, so 1.445 ≤ a < 1.455. Write down an inequality to describe the possible values of 10ᵃ, to two decimal places.',
          type: 'Hard',
          explaination:
            '10ˣ is increasing, so apply it to both bounds. 10¹·⁴⁴⁵ ≈ 27.86 and 10¹·⁴⁵⁵ ≈ 28.51.',
          answer: '27.86 ≤ 10ᵃ < 28.51',
        },
        {
          id: 14,
          question:
            'It is known that a = 1.45 to two decimal places, so 27.86 ≤ 10ᵃ < 28.51. Hence give 10ᵃ to a suitable degree of accuracy, justifying your answer.',
          type: 'Hard',
          explaination:
            'To 2 s.f., both 27.86 and 28.51 round to 28, so 28 is the most accurate value that holds across the whole range. To 3 s.f. they would round to 27.9 and 28.5, which disagree.',
          answer: '10ᵃ ≈ 28 (2 s.f.), since both bounds round to 28',
        },
      ],
      'percentage-error': [
        {
          id: 1,
          question: 'Find the percentage error when estimating √2 as 1.41.',
          type: 'Medium',
          explaination:
            '√2 = 1.41421…. Percentage error = |1.41 − 1.41421…| ÷ 1.41421… × 100% = 0.00421… ÷ 1.41421… × 100% ≈ 0.298%.',
          answer: '≈ 0.298%',
        },
        {
          id: 2,
          question: 'Find the percentage error when estimating √3 as 1.73.',
          type: 'Medium',
          explaination:
            '√3 = 1.73205…. Percentage error = |1.73 − 1.73205…| ÷ 1.73205… × 100% = 0.00205… ÷ 1.73205… × 100% ≈ 0.118%.',
          answer: '≈ 0.118%',
        },
        {
          id: 3,
          question: 'Find the percentage error when estimating e as 19/7.',
          type: 'Medium',
          explaination:
            'e = 2.71828… and 19/7 = 2.71428…. Percentage error = |2.71428… − 2.71828…| ÷ 2.71828… × 100% = 0.00400… ÷ 2.71828… × 100% ≈ 0.147%.',
          answer: '≈ 0.147%',
        },
        {
          id: 4,
          question: 'Find the percentage error when estimating ln 2 as 9/13.',
          type: 'Medium',
          explaination:
            'ln 2 = 0.69315… and 9/13 = 0.69231…. Percentage error = |0.69231… − 0.69315…| ÷ 0.69315… × 100% = 0.000840… ÷ 0.69315… × 100% ≈ 0.121%.',
          answer: '≈ 0.121%',
        },
      ],
    },
  },
  {
    probability: {
      title: 'Probability',
      'venn-diagrams': [
        {
          id: 1,
          question:
            'Out of 25 students in a class, 18 speak French, 9 speak German and 5 speak both languages. Find the probability that a randomly chosen student speaks neither language.',
          type: 'Easy',
          explaination:
            'Students who speak at least one language = 18 + 9 − 5 = 22. Neither = 25 − 22 = 3. P(neither) = 3/25.',
          answer: '3/25',
        },
        {
          id: 2,
          question:
            'Out of 25 students in a class, 18 speak French, 9 speak German and 5 speak both languages. Find the probability that a randomly chosen student speaks German but not French.',
          type: 'Easy',
          explaination: 'German only = 9 − 5 = 4. P(German but not French) = 4/25.',
          answer: '4/25',
        },
        {
          id: 3,
          question:
            'In a group of 30 children, 12 like apples, 18 like bananas and 10 like both fruits. Find the probability that a randomly chosen child likes bananas but not apples.',
          type: 'Easy',
          explaination: 'Bananas only = 18 − 10 = 8. P = 8/30 = 4/15.',
          answer: '4/15',
        },
        {
          id: 4,
          question:
            'In a group of 30 children, 12 like apples, 18 like bananas and 10 like both fruits. Find the probability that a randomly chosen child likes neither fruit.',
          type: 'Easy',
          explaination:
            'At least one fruit = 12 + 18 − 10 = 20. Neither = 30 − 20 = 10. P = 10/30 = 1/3.',
          answer: '1/3',
        },
        {
          id: 5,
          question:
            'In a school of 150 pupils, 80 pupils play basketball, 45 play both hockey and basketball and 25 play neither sport. Find the probability that a randomly selected pupil plays basketball but not hockey.',
          type: 'Medium',
          explaination: 'Basketball only = 80 − 45 = 35. P = 35/150 = 7/30.',
          answer: '7/30',
        },
        {
          id: 6,
          question:
            'In a school of 150 pupils, 80 pupils play basketball, 45 play both hockey and basketball and 25 play neither sport. Find the probability that a randomly selected pupil plays hockey but not basketball.',
          type: 'Medium',
          explaination:
            'Pupils who play a sport = 150 − 25 = 125. Basketball only = 35, so hockey only = 125 − 45 − 35 = 45. P = 45/150 = 3/10.',
          answer: '3/10',
        },
        {
          id: 7,
          question:
            'In a certain school, 80 pupils study both Biology and History, 35 study neither subject, 45 study only Biology and 60 study only History. Find the probability that a randomly selected pupil studies at least one of the two subjects.',
          type: 'Medium',
          explaination:
            'Total = 80 + 45 + 60 + 35 = 220. At least one = 220 − 35 = 185. P = 185/220 = 37/44.',
          answer: '37/44',
        },
        {
          id: 8,
          question:
            'In a certain school, 80 pupils study both Biology and History, 35 study neither subject, 45 study only Biology and 60 study only History. Find the probability that a randomly selected pupil studies History.',
          type: 'Medium',
          explaination:
            'Total = 80 + 45 + 60 + 35 = 220. History = 80 + 60 = 140. P = 140/220 = 7/11.',
          answer: '7/11',
        },
        {
          id: 9,
          question:
            'Out of 35 shops in a town, 28 sell candy, 18 sell ice cream and 12 sell both ice cream and candy. Find the probability that a randomly selected shop sells ice cream but not candy.',
          type: 'Easy',
          explaination: 'Ice cream only = 18 − 12 = 6. P = 6/35.',
          answer: '6/35',
        },
        {
          id: 10,
          question:
            'Out of 35 shops in a town, 28 sell candy, 18 sell ice cream and 12 sell both ice cream and candy. Find the probability that a randomly selected shop sells candy but not ice cream.',
          type: 'Easy',
          explaination: 'Candy only = 28 − 12 = 16. P = 16/35.',
          answer: '16/35',
        },
        {
          id: 11,
          question:
            'At a certain college, the probability that a student studies Geography is 0.4, the probability that they study Spanish is 0.7 and the probability that they study both subjects is 0.2. Find the probability that a randomly selected student studies neither subject.',
          type: 'Medium',
          explaination: 'P(G ∪ S) = 0.4 + 0.7 − 0.2 = 0.9. P(neither) = 1 − 0.9 = 0.1.',
          answer: '0.1',
        },
        {
          id: 12,
          question:
            'At a certain college, the probability that a student studies Geography is 0.4, the probability that they study Spanish is 0.7 and the probability that they study both subjects is 0.2. Find the probability that a randomly selected student studies Spanish but not Geography.',
          type: 'Medium',
          explaination: 'P(Spanish only) = 0.7 − 0.2 = 0.5.',
          answer: '0.5',
        },
        {
          id: 13,
          question:
            'In a given school, the probability that a child plays the piano is 0.4. The probability that they play both the piano and the violin is 0.08, and the probability that they play neither instrument is 0.3. Find the probability that a randomly selected child plays the violin but not the piano.',
          type: 'Medium',
          explaination:
            'P(P ∪ V) = 1 − 0.3 = 0.7. P(V) = 0.7 − 0.4 + 0.08 = 0.38. P(violin only) = 0.38 − 0.08 = 0.30.',
          answer: '0.30',
        },
        {
          id: 14,
          question:
            'In a given school, the probability that a child plays the piano is 0.4. The probability that they play both the piano and the violin is 0.08, and the probability that they play neither instrument is 0.3. Find the probability that a randomly selected child plays the piano but not the violin.',
          type: 'Medium',
          explaination: 'P(piano only) = 0.4 − 0.08 = 0.32.',
          answer: '0.32',
        },
        {
          id: 15,
          question:
            'Asher has 22 toys: 12 are teddies, 5 are green teddies, and 8 are neither green nor teddies. Draw a Venn diagram showing this information and find the number of toys which are green but not teddies.',
          type: 'Medium',
          explaination:
            'T ∩ G = 5 and neither = 8, so T ∪ G = 22 − 8 = 14. Teddy only = 12 − 5 = 7. Green only = 14 − 7 − 5 = 2. Venn regions: teddy only 7, both 5, green only 2, neither 8.',
          answer: '2 toys are green but not teddies',
        },
        {
          id: 16,
          question:
            'Asher has 22 toys: 12 are teddies, 5 are green teddies, and 8 are neither green nor teddies. Find the probability that a randomly selected toy is green.',
          type: 'Medium',
          explaination:
            'Green only = 2 and green teddies = 5, so total green = 2 + 5 = 7. P(green) = 7/22.',
          answer: '7/22',
        },
        {
          id: 17,
          question:
            'Asher has 22 toys: 12 are teddies, 5 are green teddies, and 8 are neither green nor teddies. Given that a toy is green, find the probability that it is a teddy.',
          type: 'Medium',
          explaination: 'There are 7 green toys, and 5 of them are teddies. P(T | G) = 5/7.',
          answer: '5/7',
        },
        {
          id: 18,
          question:
            'Out of 130 students at a college, 50 play tennis, 45 play badminton and 12 play both sports. How many students play neither sport?',
          type: 'Medium',
          explaination: 'At least one sport = 50 + 45 − 12 = 83. Neither = 130 − 83 = 47.',
          answer: '47 students',
        },
        {
          id: 19,
          question:
            'Out of 130 students at a college, 50 play tennis, 45 play badminton and 12 play both sports. Find the probability that a randomly selected student plays at least one of the two sports.',
          type: 'Medium',
          explaination: 'At least one sport = 50 + 45 − 12 = 83. P = 83/130.',
          answer: '83/130',
        },
        {
          id: 20,
          question:
            'Out of 130 students at a college, 50 play tennis, 45 play badminton and 12 play both sports. Given that a student plays exactly one of the two sports, find the probability that it is badminton.',
          type: 'Medium',
          explaination:
            'Tennis only = 50 − 12 = 38. Badminton only = 45 − 12 = 33. Exactly one = 38 + 33 = 71. P(badminton | exactly one) = 33/71.',
          answer: '33/71',
        },
        {
          id: 21,
          question:
            'In a group of 100 people, 27 speak German, 30 speak Mandarin, 40 speak Spanish, 3 speak all three languages, 12 speak only German, 15 speak only Mandarin and 8 speak Spanish and Mandarin but not German. Draw a Venn diagram showing this information, and fill in the missing regions.',
          type: 'Hard',
          explaination:
            'German and Mandarin only = 30 − 15 − 3 − 8 = 4. German and Spanish only = 27 − 12 − 3 − 4 = 8. Spanish only = 40 − 3 − 8 − 8 = 21. Neither = 100 − (12 + 15 + 21 + 4 + 8 + 8 + 3) = 100 − 71 = 29.',
          answer:
            'German only 12, Mandarin only 15, Spanish only 21, German and Mandarin only 4, German and Spanish only 8, Mandarin and Spanish only 8, all three 3, none 29',
        },
        {
          id: 22,
          question:
            'In a group of 100 people, 27 speak German, 30 speak Mandarin, 40 speak Spanish, 3 speak all three languages, 12 speak only German, 15 speak only Mandarin and 8 speak Spanish and Mandarin but not German. Find the probability that a randomly selected person speaks only Spanish.',
          type: 'Hard',
          explaination:
            'German and Mandarin only = 30 − 15 − 3 − 8 = 4. German and Spanish only = 27 − 12 − 3 − 4 = 8. Spanish only = 40 − 3 − 8 − 8 = 21. P(only Spanish) = 21/100.',
          answer: '21/100',
        },
        {
          id: 23,
          question:
            'In a group of 100 people, 27 speak German, 30 speak Mandarin, 40 speak Spanish, 3 speak all three languages, 12 speak only German, 15 speak only Mandarin and 8 speak Spanish and Mandarin but not German. Given that a person speaks Spanish, find the probability that they also speak Mandarin.',
          type: 'Hard',
          explaination:
            '40 people speak Spanish. Those who also speak Mandarin = 8 (Mandarin and Spanish only) + 3 (all three) = 11. P(M | S) = 11/40.',
          answer: '11/40',
        },
        {
          id: 24,
          question:
            'In a class of 30 pupils, 22 have a phone, 17 have a smart watch and 15 have a tablet. 11 have both a smart watch and a phone, 11 have a phone and a tablet and 10 have a tablet and a smart watch. Everyone has at least one of those items. Let x be the number of pupils who have all three items. Draw a Venn diagram showing this information.',
          type: 'Hard',
          explaination:
            'Put x in the centre, then subtract outwards. Phone and watch only = 11 − x. Phone and tablet only = 11 − x. Watch and tablet only = 10 − x. Phone only = 22 − (11 − x) − (11 − x) − x = x. Watch only = 17 − (11 − x) − (10 − x) − x = x − 4. Tablet only = 15 − (11 − x) − (10 − x) − x = x − 6.',
          answer:
            'All three x; phone and watch only 11 − x; phone and tablet only 11 − x; watch and tablet only 10 − x; phone only x; watch only x − 4; tablet only x − 6',
        },
        {
          id: 25,
          question:
            'In a class of 30 pupils, 22 have a phone, 17 have a smart watch and 15 have a tablet. 11 have both a smart watch and a phone, 11 have a phone and a tablet and 10 have a tablet and a smart watch. Everyone has at least one of those items. Let x be the number of pupils who have all three items. Show that x + 22 = 30.',
          type: 'Hard',
          explaination:
            'Phone and watch only = 11 − x. Phone and tablet only = 11 − x. Watch and tablet only = 10 − x. Phone only = 22 − (11 − x) − (11 − x) − x = x. Watch only = 17 − (11 − x) − (10 − x) − x = x − 4. Tablet only = 15 − (11 − x) − (10 − x) − x = x − 6. Everyone has at least one item, so all regions add to 30: x + (x − 4) + (x − 6) + (11 − x) + (11 − x) + (10 − x) + x = x + 22. Therefore x + 22 = 30.',
          answer: 'x + 22 = 30',
        },
        {
          id: 26,
          question:
            'In a class of 30 pupils, 22 have a phone, 17 have a smart watch and 15 have a tablet. 11 have both a smart watch and a phone, 11 have a phone and a tablet and 10 have a tablet and a smart watch. Everyone has at least one of those items. Given that x + 22 = 30, where x is the number of pupils who have all three items, find the probability that a randomly selected pupil has all three items.',
          type: 'Hard',
          explaination: 'x + 22 = 30 ⇒ x = 8. P(all three) = 8/30 = 4/15.',
          answer: '4/15',
        },
        {
          id: 27,
          question:
            'In a class of 30 pupils, 22 have a phone, 17 have a smart watch and 15 have a tablet. 11 have both a smart watch and a phone, 11 have a phone and a tablet and 10 have a tablet and a smart watch. Everyone has at least one of those items. Given that a pupil does not have a tablet, find the probability that they have a phone.',
          type: 'Hard',
          explaination:
            'No tablet = 30 − 15 = 15. Phone without a tablet = 22 − 11 = 11. P(phone | no tablet) = 11/15.',
          answer: '11/15',
        },
        {
          id: 28,
          question:
            'In a class of 30 pupils, 22 have a phone, 17 have a smart watch and 15 have a tablet. 11 have both a smart watch and a phone, 11 have a phone and a tablet and 10 have a tablet and a smart watch. Everyone has at least one of those items. 8 pupils have all three items. Given that a pupil has exactly two of the items, find the probability that they have a smart watch and a tablet.',
          type: 'Hard',
          explaination:
            'Exactly two: phone and watch = 11 − 8 = 3, phone and tablet = 11 − 8 = 3, watch and tablet = 10 − 8 = 2. Total = 3 + 3 + 2 = 8. P(watch and tablet | exactly two) = 2/8 = 1/4.',
          answer: '1/4',
        },
      ],
      'tree-diagrams': [
        {
          id: 1,
          question:
            'Every day, Rahul either drives to work or takes the bus. The probability that he drives is 0.3. If he drives to work the probability that he is late is 0.05. If he takes the bus the probability that he is late is 0.2. Find the probability that Rahul is late for work.',
          type: 'Medium',
          explaination:
            'P(bus) = 1 − 0.3 = 0.7. P(late) = 0.3 × 0.05 + 0.7 × 0.2 = 0.015 + 0.14 = 0.155.',
          answer: '0.155',
        },
        {
          id: 2,
          question:
            'Every day, Rahul either drives to work or takes the bus. The probability that he drives is 0.3. If he drives to work the probability that he is late is 0.05. If he takes the bus the probability that he is late is 0.2. Find the probability that Rahul is not late for work.',
          type: 'Medium',
          explaination:
            'P(late) = 0.3 × 0.05 + 0.7 × 0.2 = 0.155. P(not late) = 1 − 0.155 = 0.845.',
          answer: '0.845',
        },
        {
          id: 3,
          question:
            'The probability that the school canteen serves pizza for lunch is 0.3. If there is pizza, the probability that they also serve fries is 0.8. If there is no pizza, the probability that they serve fries is 0.5. Find the probability that on a randomly selected day there are no fries.',
          type: 'Medium',
          explaination:
            'P(fries) = 0.3 × 0.8 + 0.7 × 0.5 = 0.24 + 0.35 = 0.59. P(no fries) = 1 − 0.59 = 0.41.',
          answer: '0.41',
        },
        {
          id: 4,
          question:
            'The probability that the school canteen serves pizza for lunch is 0.3. If there is pizza, the probability that they also serve fries is 0.8. If there is no pizza, the probability that they serve fries is 0.5. Find the probability that on a randomly selected day there are fries.',
          type: 'Medium',
          explaination: 'P(fries) = 0.3 × 0.8 + 0.7 × 0.5 = 0.24 + 0.35 = 0.59.',
          answer: '0.59',
        },
        {
          id: 5,
          question:
            'Sophia rolls a fair six-sided dice. If she gets a 6, she tosses a fair coin. If she does not get a 6, she tosses a biased coin which has the probability 0.6 of showing tails. Find the probability that the coin shows heads.',
          type: 'Medium',
          explaination:
            'The biased coin shows heads with probability 1 − 0.6 = 0.4. P(heads) = (1/6)(1/2) + (5/6)(0.4) = 1/12 + 4/12 = 5/12.',
          answer: '5/12',
        },
        {
          id: 6,
          question:
            'Sophia rolls a fair six-sided dice. If she gets a 6, she tosses a fair coin. If she does not get a 6, she tosses a biased coin which has the probability 0.6 of showing tails. Find the probability that the coin shows tails.',
          type: 'Medium',
          explaination: 'P(tails) = (1/6)(1/2) + (5/6)(0.6) = 1/12 + 6/12 = 7/12.',
          answer: '7/12',
        },
        {
          id: 7,
          question:
            'A bag contains 12 red balls and 18 blue balls. Two balls are taken out at random, one after the other, without replacement. Find the probability that the two balls are the same colour.',
          type: 'Medium',
          explaination:
            'P(same) = (12/30)(11/29) + (18/30)(17/29) = (132 + 306)/870 = 438/870 = 73/145.',
          answer: '73/145',
        },
        {
          id: 8,
          question:
            'A bag contains 12 red balls and 18 blue balls. Two balls are taken out at random, one after the other, without replacement. Find the probability that the second ball is blue.',
          type: 'Medium',
          explaination:
            'P(2nd blue) = (12/30)(18/29) + (18/30)(17/29) = (216 + 306)/870 = 522/870 = 3/5.',
          answer: '3/5',
        },
        {
          id: 9,
          question:
            'The probability that I revise for a test is 0.8. If I revise, the probability that I pass the test is 0.9. If I do not revise, the probability that I pass is 0.7. Find the probability that I revise and pass the test.',
          type: 'Easy',
          explaination: 'P(revise and pass) = 0.8 × 0.9 = 0.72.',
          answer: '0.72',
        },
        {
          id: 10,
          question:
            'The probability that I revise for a test is 0.8. If I revise, the probability that I pass the test is 0.9. If I do not revise, the probability that I pass is 0.7. Find the probability that I do not revise but pass the test.',
          type: 'Easy',
          explaination: 'P(not revise) = 1 − 0.8 = 0.2. P(not revise and pass) = 0.2 × 0.7 = 0.14.',
          answer: '0.14',
        },
        {
          id: 11,
          question:
            'A bag contains 12 green balls and 18 yellow balls. Two balls are taken out at random, one after the other, without replacement. Find the probability that they are different colours.',
          type: 'Medium',
          explaination:
            'P(different) = P(GY) + P(YG) = (12/30)(18/29) + (18/30)(12/29) = (216 + 216)/870 = 432/870 = 72/145.',
          answer: '72/145',
        },
        {
          id: 12,
          question:
            'A football league consists of 18 teams. My team has a 20% chance of winning against a higher-ranking team and a 70% chance of winning against a lower-ranking team. If my team is currently ranked fifth in the league, what is the probability that we win the next match against a randomly selected team?',
          type: 'Hard',
          explaination:
            'There are 17 possible opponents: 4 ranked higher and 13 ranked lower. P(win) = (4/17)(0.2) + (13/17)(0.7) = (0.8 + 9.1)/17 = 9.9/17 = 99/170 ≈ 0.582.',
          answer: '99/170 ≈ 0.582',
        },
        {
          id: 13,
          question:
            'An office has two photocopiers. One of them is broken with probability 0.2 and the other with probability 0.3. If a photocopier is selected at random, what is the probability that it is working?',
          type: 'Medium',
          explaination:
            'Each photocopier is chosen with probability 1/2. They work with probability 0.8 and 0.7. P(working) = (1/2)(0.8) + (1/2)(0.7) = 0.4 + 0.35 = 0.75.',
          answer: '0.75',
        },
        {
          id: 14,
          question:
            'Theo either walks, takes the bus or cycles to school, each with equal probability. The probability that he is late if he walks is 0.06, if he takes the bus it is 0.2 and if he cycles it is 0.1. Using a tree diagram, or otherwise, find the probability that Theo takes the bus to school and is late.',
          type: 'Medium',
          explaination: 'P(bus) = 1/3. P(bus and late) = (1/3)(0.2) = 1/15 ≈ 0.0667.',
          answer: '1/15 ≈ 0.0667',
        },
        {
          id: 15,
          question:
            'Theo either walks, takes the bus or cycles to school, each with equal probability. The probability that he is late if he walks is 0.06, if he takes the bus it is 0.2 and if he cycles it is 0.1. Using a tree diagram, or otherwise, find the probability that Theo is on time for school.',
          type: 'Medium',
          explaination:
            'P(late) = (1/3)(0.06) + (1/3)(0.2) + (1/3)(0.1) = 0.36/3 = 0.12. P(on time) = 1 − 0.12 = 0.88.',
          answer: '0.88',
        },
        {
          id: 16,
          question:
            'A box contains 40 red balls and 30 green balls. Two balls are taken out at random, one after another without replacement. Given that the first ball is red, find the probability that the second ball is also red.',
          type: 'Hard',
          explaination:
            'After one red ball is removed, 39 of the remaining 69 balls are red. P(R₂ | R₁) = 39/69 = 13/23.',
          answer: '13/23',
        },
        {
          id: 17,
          question:
            'A box contains 40 red balls and 30 green balls. Two balls are taken out at random, one after another without replacement. What is the probability that both balls are red?',
          type: 'Hard',
          explaination: 'P(RR) = (40/70)(39/69) = 1560/4830 = 52/161.',
          answer: '52/161',
        },
        {
          id: 18,
          question:
            'A box contains 40 red balls and 30 green balls. Two balls are taken out at random, one after another without replacement. Is it more likely that the two balls are the same colour or different colours?',
          type: 'Hard',
          explaination:
            'P(RR) = 52/161. P(GG) = (30/70)(29/69) = 29/161. P(same) = 52/161 + 29/161 = 81/161. P(different) = 1 − 81/161 = 80/161. Since 81/161 > 80/161, same colour is more likely.',
          answer: 'Same colour is more likely (81/161 compared with 80/161)',
        },
      ],
      'conditional-probability': [
        {
          id: 1,
          question:
            'A bag contains 20 red counters and 30 blue counters. Two counters are taken out at random, one after the other, without replacement. Given that the first counter is red, find the probability that the second counter is red.',
          type: 'Medium',
          explaination:
            'After one red counter is removed, 19 red and 30 blue remain (49 in total). P(R₂ | R₁) = 19/49.',
          answer: '19/49',
        },
        {
          id: 2,
          question:
            'A bag contains 20 red counters and 30 blue counters. Two counters are taken out at random, one after the other, without replacement. Given that the first counter is red, find the probability that the second counter is blue.',
          type: 'Medium',
          explaination:
            'After one red counter is removed, 19 red and 30 blue remain (49 in total). P(B₂ | R₁) = 30/49.',
          answer: '30/49',
        },
        {
          id: 3,
          question:
            'Two cards are taken out of a standard pack of 52 cards, one after the other, without replacement. Given that the first card is a red 10, find the probability that the second card is red.',
          type: 'Medium',
          explaination:
            'A standard pack has 26 red cards. After a red 10 is removed, 25 red cards remain out of 51. P(red | 1st is red 10) = 25/51.',
          answer: '25/51',
        },
        {
          id: 4,
          question:
            'Two cards are taken out of a standard pack of 52 cards, one after the other, without replacement. Given that the first card is a red 10, find the probability that the second card is a 10.',
          type: 'Medium',
          explaination:
            'A standard pack has four 10s. After a red 10 is removed, 3 tens remain out of 51. P(10 | 1st is red 10) = 3/51 = 1/17.',
          answer: '1/17',
        },
        {
          id: 5,
          question:
            "The favourite colour and favourite fruit for a group of children are shown in the table. Red: Apple 12, Banana 23, Strawberry 18. Blue: Apple 16, Banana 18, Strawberry 9. Green: Apple 3, Banana 9, Strawberry 6. Find the probability that a child's favourite colour is green, given that their favourite fruit is apples.",
          type: 'Medium',
          explaination:
            'Children whose favourite fruit is apples = 12 + 16 + 3 = 31. Of these, 3 chose green. P(green | apple) = 3/31.',
          answer: '3/31',
        },
        {
          id: 6,
          question:
            "The favourite colour and favourite fruit for a group of children are shown in the table. Red: Apple 12, Banana 23, Strawberry 18. Blue: Apple 16, Banana 18, Strawberry 9. Green: Apple 3, Banana 9, Strawberry 6. Find the probability that a child's favourite fruit is strawberries, given that their favourite colour is red.",
          type: 'Medium',
          explaination:
            'Children whose favourite colour is red = 12 + 23 + 18 = 53. Of these, 18 chose strawberries. P(strawberry | red) = 18/53.',
          answer: '18/53',
        },
        {
          id: 7,
          question:
            'The table shows information on hair colour and eye colour of a group of people. Blue eyes: Blond hair 23, Brown hair 18. Brown eyes: Blond hair 16, Brown hair 20. Find the probability that a randomly selected person has brown eyes, given that they have blond hair.',
          type: 'Medium',
          explaination:
            'People with blond hair = 23 + 16 = 39. Of these, 16 have brown eyes. P(brown eyes | blond) = 16/39.',
          answer: '16/39',
        },
        {
          id: 8,
          question:
            'The table shows information on hair colour and eye colour of a group of people. Blue eyes: Blond hair 23, Brown hair 18. Brown eyes: Blond hair 16, Brown hair 20. Find the probability that a randomly selected person has blond hair, given that they have brown eyes.',
          type: 'Medium',
          explaination:
            'People with brown eyes = 16 + 20 = 36. Of these, 16 have blond hair. P(blond | brown eyes) = 16/36 = 4/9.',
          answer: '4/9',
        },
        {
          id: 9,
          question:
            'Out of 25 students in a class, 18 speak French, 9 speak German and 5 speak both languages. Find the probability that a randomly chosen student speaks German, given that they speak French.',
          type: 'Medium',
          explaination: 'P(G | F) = P(G ∩ F) ÷ P(F) = (5/25) ÷ (18/25) = 5/18.',
          answer: '5/18',
        },
        {
          id: 10,
          question:
            'Out of 25 students in a class, 18 speak French, 9 speak German and 5 speak both languages. Find the probability that a randomly chosen student speaks French, given that they speak German.',
          type: 'Medium',
          explaination: 'P(F | G) = P(F ∩ G) ÷ P(G) = (5/25) ÷ (9/25) = 5/9.',
          answer: '5/9',
        },
        {
          id: 11,
          question:
            'In a group of 30 children, 12 like apples, 18 like bananas and 10 like both fruits. Find the probability that a randomly chosen child likes bananas, given that they like apples.',
          type: 'Medium',
          explaination:
            '12 children like apples, and 10 of them also like bananas. P(B | A) = 10/12 = 5/6.',
          answer: '5/6',
        },
        {
          id: 12,
          question:
            'In a group of 30 children, 12 like apples, 18 like bananas and 10 like both fruits. Find the probability that a randomly chosen child likes apples, given that they like bananas.',
          type: 'Medium',
          explaination:
            '18 children like bananas, and 10 of them also like apples. P(A | B) = 10/18 = 5/9.',
          answer: '5/9',
        },
        {
          id: 13,
          question:
            'In a school of 150 pupils, 80 pupils play basketball, 45 play both hockey and basketball and 25 play neither sport. Find the probability that a randomly selected pupil plays basketball, given that they do not play hockey.',
          type: 'Hard',
          explaination:
            'Basketball only = 80 − 45 = 35. Pupils who play a sport = 150 − 25 = 125, so hockey only = 125 − 80 = 45 and hockey total = 45 + 45 = 90. Not hockey = 150 − 90 = 60. P(basketball | not hockey) = 35/60 = 7/12.',
          answer: '7/12',
        },
        {
          id: 14,
          question:
            'In a school of 150 pupils, 80 pupils play basketball, 45 play both hockey and basketball and 25 play neither sport. Find the probability that a randomly selected pupil plays hockey, given that they do not play basketball.',
          type: 'Hard',
          explaination:
            'Pupils who play a sport = 150 − 25 = 125, so hockey only = 125 − 80 = 45. Not basketball = 150 − 80 = 70. P(hockey | not basketball) = 45/70 = 9/14.',
          answer: '9/14',
        },
        {
          id: 15,
          question:
            'In a certain school, 80 pupils study both Biology and History, 35 study neither subject, 45 study only Biology and 60 study only History. Find the probability that a randomly selected pupil studies Biology, given that they study at least one of the two subjects.',
          type: 'Hard',
          explaination:
            'At least one subject = 80 + 45 + 60 = 185. Biology = 80 + 45 = 125. P = 125/185 = 25/37.',
          answer: '25/37',
        },
        {
          id: 16,
          question:
            'In a certain school, 80 pupils study both Biology and History, 35 study neither subject, 45 study only Biology and 60 study only History. Find the probability that a randomly selected pupil studies History, given that they study at least one of the two subjects.',
          type: 'Hard',
          explaination:
            'At least one subject = 80 + 45 + 60 = 185. History = 80 + 60 = 140. P = 140/185 = 28/37.',
          answer: '28/37',
        },
        {
          id: 17,
          question:
            'Out of 35 shops in a town, 28 sell candy, 18 sell ice cream and 12 sell both ice cream and candy. Find the probability that a randomly selected shop sells neither, given that it does not sell candy.',
          type: 'Hard',
          explaination:
            'Neither = 35 − (28 + 18 − 12) = 35 − 34 = 1. Not candy = 35 − 28 = 7. P(neither | not candy) = 1/7.',
          answer: '1/7',
        },
        {
          id: 18,
          question:
            'Out of 35 shops in a town, 28 sell candy, 18 sell ice cream and 12 sell both ice cream and candy. Find the probability that a randomly selected shop sells neither, given that it does not sell ice cream.',
          type: 'Hard',
          explaination:
            'Neither = 35 − (28 + 18 − 12) = 1. Not ice cream = 35 − 18 = 17. P(neither | not ice cream) = 1/17.',
          answer: '1/17',
        },
        {
          id: 19,
          question:
            'At a certain college, the probability that a student studies Geography is 0.4, the probability that they study Spanish is 0.7 and the probability that they study both subjects is 0.2. Find the probability that a randomly selected student studies both subjects, given that they study Geography.',
          type: 'Medium',
          explaination: 'P(both | G) = P(both) ÷ P(G) = 0.2 ÷ 0.4 = 0.5.',
          answer: '0.5',
        },
        {
          id: 20,
          question:
            'At a certain college, the probability that a student studies Geography is 0.4, the probability that they study Spanish is 0.7 and the probability that they study both subjects is 0.2. Find the probability that a randomly selected student studies both subjects, given that they study Spanish.',
          type: 'Medium',
          explaination: 'P(both | S) = P(both) ÷ P(S) = 0.2 ÷ 0.7 = 2/7 ≈ 0.286.',
          answer: '2/7 ≈ 0.286',
        },
        {
          id: 21,
          question:
            'In a school, the probability that a child plays the piano is 0.4. The probability that they play both the piano and the violin is 0.08, and the probability that they play neither instrument is 0.3. Find the probability that a randomly selected child plays the violin, given that they play at least one instrument.',
          type: 'Hard',
          explaination:
            'P(at least one) = 1 − 0.3 = 0.7. P(V) = 0.7 − 0.4 + 0.08 = 0.38. P(V | at least one) = 0.38 ÷ 0.7 = 19/35 ≈ 0.543.',
          answer: '19/35 ≈ 0.543',
        },
        {
          id: 22,
          question:
            'In a school, the probability that a child plays the piano is 0.4. The probability that they play both the piano and the violin is 0.08, and the probability that they play neither instrument is 0.3. Find the probability that a randomly selected child plays the piano, given that they play at least one instrument.',
          type: 'Hard',
          explaination:
            'P(at least one) = 1 − 0.3 = 0.7. P(piano | at least one) = 0.4 ÷ 0.7 = 4/7 ≈ 0.571.',
          answer: '4/7 ≈ 0.571',
        },
      ],
      'binomial-distribution': [
        {
          id: 1,
          question:
            'A fair coin is tossed 30 times and X is the number of heads. Decide whether X can be modelled by a binomial distribution. If yes, identify the distribution in the form X ~ B(n, p). If not, state which conditions are not met.',
          type: 'Easy',
          explaination:
            'Fixed number of trials n = 30 ✓. Two outcomes (heads or tails) ✓. Constant p = 0.5 ✓. Independent trials ✓. All four conditions are met.',
          answer: 'X ~ B(30, 0.5)',
        },
        {
          id: 2,
          question:
            'A fair six-sided dice is rolled 45 times and X is the number of 3s. Decide whether X can be modelled by a binomial distribution. If yes, identify the distribution in the form X ~ B(n, p). If not, state which conditions are not met.',
          type: 'Easy',
          explaination:
            'Fixed n = 45 ✓. Two outcomes (a 3 or not a 3) ✓. Constant p = 1/6 ✓. Independent rolls ✓.',
          answer: 'X ~ B(45, 1/6)',
        },
        {
          id: 3,
          question:
            'A fair six-sided dice is rolled until it shows a 6 and X is the number of 4s rolled up until that point. Decide whether X can be modelled by a binomial distribution. If yes, identify the distribution in the form X ~ B(n, p). If not, state which conditions are not met.',
          type: 'Easy',
          explaination:
            'The number of trials is not fixed, because rolling stops when a 6 appears ✗. The binomial model does not apply.',
          answer: 'Not binomial: the number of trials is not fixed',
        },
        {
          id: 4,
          question:
            'A fair coin is tossed until it shows tails and X is the number of tosses up until that point. Decide whether X can be modelled by a binomial distribution. If yes, identify the distribution in the form X ~ B(n, p). If not, state which conditions are not met.',
          type: 'Easy',
          explaination:
            'The number of trials is not fixed, because tossing stops when tails appears ✗. The binomial model does not apply.',
          answer: 'Not binomial: the number of trials is not fixed',
        },
        {
          id: 5,
          question:
            'Dan has eight white shirts and five blue shirts. He selects four shirts at random, without replacement, and X is the number of white shirts. Decide whether X can be modelled by a binomial distribution. If yes, identify the distribution in the form X ~ B(n, p). If not, state which conditions are not met.',
          type: 'Easy',
          explaination:
            'The shirts are selected without replacement from a small group, so the probability of white changes after each pick and the trials are not independent ✗. The binomial model does not apply.',
          answer: 'Not binomial: p is not constant and the trials are not independent',
        },
        {
          id: 6,
          question:
            'Amy has seven apples and six oranges. She selects three pieces of fruit at random, without replacement, and X is the number of apples. Decide whether X can be modelled by a binomial distribution. If yes, identify the distribution in the form X ~ B(n, p). If not, state which conditions are not met.',
          type: 'Easy',
          explaination:
            'The fruit is selected without replacement from a small group, so the probability of an apple changes after each pick ✗. The binomial model does not apply.',
          answer: 'Not binomial: p is not constant and the trials are not independent',
        },
        {
          id: 7,
          question:
            'In a large population, it is known that 12% of people carry a particular gene. 50 people are selected at random and X is the number of people who carry the gene. Decide whether X can be modelled by a binomial distribution. If yes, identify the distribution in the form X ~ B(n, p). If not, state which conditions are not met.',
          type: 'Easy',
          explaination:
            'The population is large, so the selections are effectively independent ✓. Fixed n = 50 ✓. Constant p = 0.12 ✓. Two outcomes ✓.',
          answer: 'X ~ B(50, 0.12)',
        },
        {
          id: 8,
          question:
            'It is known that 23% of people in a large city have blue eyes. 40 people are selected at random and X is the number of people with blue eyes. Decide whether X can be modelled by a binomial distribution. If yes, identify the distribution in the form X ~ B(n, p). If not, state which conditions are not met.',
          type: 'Easy',
          explaination:
            'The population is large, so independence holds ✓. Fixed n = 40 ✓. Constant p = 0.23 ✓. Two outcomes ✓.',
          answer: 'X ~ B(40, 0.23)',
        },
        {
          id: 9,
          question:
            'In a particular town, the probability that a child takes the bus to school is 0.4. A family has five children and X is the number of children in the family who take the bus to school. Decide whether X can be modelled by a binomial distribution. If yes, identify the distribution in the form X ~ B(n, p). If not, state which conditions are not met.',
          type: 'Easy',
          explaination:
            'Fixed n = 5 ✓. Constant p = 0.4 ✓. Two outcomes ✓. Children in the same family may not be fully independent, but independence is assumed ✓.',
          answer: 'X ~ B(5, 0.4), assuming the children act independently',
        },
        {
          id: 10,
          question:
            'The probability that a child goes bowling on a Sunday is 0.15. X is the number of friends, out of a group of 10, who will go bowling next Sunday. Decide whether X can be modelled by a binomial distribution. If yes, identify the distribution in the form X ~ B(n, p). If not, state which conditions are not met.',
          type: 'Easy',
          explaination:
            'Fixed n = 10 ✓. Constant p = 0.15 ✓. Two outcomes ✓. Independence is assumed ✓.',
          answer: 'X ~ B(10, 0.15), assuming the friends act independently',
        },
        {
          id: 11,
          question: 'Given X ~ B(20, 0.6), find P(X = 11).',
          type: 'Easy',
          explaination: 'P(X = 11) = ²⁰C₁₁ (0.6)¹¹ (0.4)⁹ = 167960 × (0.6)¹¹ × (0.4)⁹ ≈ 0.1597.',
          answer: 'P(X = 11) ≈ 0.160',
        },
        {
          id: 12,
          question: 'Given X ~ B(20, 0.6), find P(X = 12).',
          type: 'Easy',
          explaination: 'P(X = 12) = ²⁰C₁₂ (0.6)¹² (0.4)⁸ = 125970 × (0.6)¹² × (0.4)⁸ ≈ 0.1797.',
          answer: 'P(X = 12) ≈ 0.180',
        },
        {
          id: 13,
          question: 'Given X ~ B(20, 0.6), find P(X ≤ 12).',
          type: 'Easy',
          explaination:
            'Use binomial cdf on the GDC with n = 20, p = 0.6, upper value 12. P(X ≤ 12) ≈ 0.5841.',
          answer: 'P(X ≤ 12) ≈ 0.584',
        },
        {
          id: 14,
          question: 'Given X ~ B(20, 0.6), find P(X ≤ 14).',
          type: 'Easy',
          explaination:
            'Use binomial cdf on the GDC with n = 20, p = 0.6, upper value 14. P(X ≤ 14) ≈ 0.8744.',
          answer: 'P(X ≤ 14) ≈ 0.874',
        },
        {
          id: 15,
          question: 'Given X ~ B(20, 0.6), find P(X > 11).',
          type: 'Medium',
          explaination:
            'P(X > 11) = 1 − P(X ≤ 11). From the GDC, P(X ≤ 11) ≈ 0.4044. So P(X > 11) ≈ 1 − 0.4044 = 0.5956.',
          answer: 'P(X > 11) ≈ 0.596',
        },
        {
          id: 16,
          question: 'Given X ~ B(20, 0.6), find P(X > 13).',
          type: 'Medium',
          explaination:
            'P(X > 13) = 1 − P(X ≤ 13). From the GDC, P(X ≤ 13) ≈ 0.7500. So P(X > 13) ≈ 1 − 0.7500 = 0.2500.',
          answer: 'P(X > 13) ≈ 0.250',
        },
        {
          id: 17,
          question: 'Given X ~ B(16, 1/3), find P(X = 4).',
          type: 'Medium',
          explaination: 'P(X = 4) = ¹⁶C₄ (1/3)⁴ (2/3)¹² = 1820 × (1/3)⁴ × (2/3)¹² ≈ 0.1732.',
          answer: 'P(X = 4) ≈ 0.173',
        },
        {
          id: 18,
          question: 'Given X ~ B(16, 1/3), find P(X = 7).',
          type: 'Medium',
          explaination: 'P(X = 7) = ¹⁶C₇ (1/3)⁷ (2/3)⁹ = 11440 × (1/3)⁷ × (2/3)⁹ ≈ 0.1361.',
          answer: 'P(X = 7) ≈ 0.136',
        },
        {
          id: 19,
          question: 'Given X ~ B(16, 1/3), find P(X ≥ 5).',
          type: 'Medium',
          explaination:
            'P(X ≥ 5) = 1 − P(X ≤ 4). From the GDC, P(X ≤ 4) ≈ 0.3391. So P(X ≥ 5) ≈ 1 − 0.3391 = 0.6609.',
          answer: 'P(X ≥ 5) ≈ 0.661',
        },
        {
          id: 20,
          question: 'Given X ~ B(16, 1/3), find P(X ≥ 8).',
          type: 'Medium',
          explaination:
            'P(X ≥ 8) = 1 − P(X ≤ 7). From the GDC, P(X ≤ 7) ≈ 0.8735. So P(X ≥ 8) ≈ 1 − 0.8735 = 0.1265.',
          answer: 'P(X ≥ 8) ≈ 0.127',
        },
        {
          id: 21,
          question: 'Given X ~ B(16, 1/3), find P(3 < X ≤ 5).',
          type: 'Medium',
          explaination: 'P(3 < X ≤ 5) = P(X = 4) + P(X = 5) ≈ 0.1732 + 0.2078 = 0.3810.',
          answer: 'P(3 < X ≤ 5) ≈ 0.381',
        },
        {
          id: 22,
          question: 'Given X ~ B(16, 1/3), find P(2 < X ≤ 4).',
          type: 'Medium',
          explaination: 'P(2 < X ≤ 4) = P(X = 3) + P(X = 4) ≈ 0.1066 + 0.1732 = 0.2797.',
          answer: 'P(2 < X ≤ 4) ≈ 0.280',
        },
        {
          id: 23,
          question: 'Given X ~ B(16, 1/3), find P(4 ≤ X < 7).',
          type: 'Medium',
          explaination:
            'P(4 ≤ X < 7) = P(X = 4) + P(X = 5) + P(X = 6) ≈ 0.1732 + 0.2078 + 0.1905 = 0.5715.',
          answer: 'P(4 ≤ X < 7) ≈ 0.571',
        },
        {
          id: 24,
          question: 'Given X ~ B(16, 1/3), find P(3 ≤ X < 5).',
          type: 'Medium',
          explaination: 'P(3 ≤ X < 5) = P(X = 3) + P(X = 4) ≈ 0.1066 + 0.1732 = 0.2797.',
          answer: 'P(3 ≤ X < 5) ≈ 0.280',
        },
        {
          id: 25,
          question:
            'An archer has a probability of 0.7 of hitting the target. If they take 12 shots, find the probability that they hit the target exactly six times.',
          type: 'Medium',
          explaination:
            'X ~ B(12, 0.7). P(X = 6) = ¹²C₆ (0.7)⁶ (0.3)⁶ = 924 × (0.7)⁶ × (0.3)⁶ ≈ 0.07925.',
          answer: 'P(X = 6) ≈ 0.0792',
        },
        {
          id: 26,
          question:
            'An archer has a probability of 0.7 of hitting the target. If they take 12 shots, find the probability that they hit the target exactly eight times.',
          type: 'Medium',
          explaination:
            'X ~ B(12, 0.7). P(X = 8) = ¹²C₈ (0.7)⁸ (0.3)⁴ = 495 × (0.7)⁸ × (0.3)⁴ ≈ 0.2311.',
          answer: 'P(X = 8) ≈ 0.231',
        },
        {
          id: 27,
          question:
            'An archer has a probability of 0.7 of hitting the target. If they take 12 shots, find the probability that they hit the target at least seven times.',
          type: 'Medium',
          explaination:
            'X ~ B(12, 0.7). P(X ≥ 7) = 1 − P(X ≤ 6). From the GDC, P(X ≤ 6) ≈ 0.1178. So P(X ≥ 7) ≈ 1 − 0.1178 = 0.8822.',
          answer: 'P(X ≥ 7) ≈ 0.882',
        },
        {
          id: 28,
          question:
            'An archer has a probability of 0.7 of hitting the target. If they take 12 shots, find the probability that they hit the target at least six times.',
          type: 'Medium',
          explaination:
            'X ~ B(12, 0.7). P(X ≥ 6) = 1 − P(X ≤ 5). From the GDC, P(X ≤ 5) ≈ 0.0386. So P(X ≥ 6) ≈ 1 − 0.0386 = 0.9614.',
          answer: 'P(X ≥ 6) ≈ 0.961',
        },
        {
          id: 29,
          question:
            'An archer has a probability of 0.7 of hitting the target. If they take 12 shots, find the probability that they hit the target fewer than eight times.',
          type: 'Medium',
          explaination:
            'X ~ B(12, 0.7). "Fewer than eight" means X ≤ 7. From the GDC, P(X ≤ 7) ≈ 0.2763.',
          answer: 'P(X < 8) ≈ 0.276',
        },
      ],
      'binomial-distribution-mean-and-sd': [
        {
          id: 1,
          question:
            'A multiple-choice quiz has 25 questions and each question has four possible answers. Elsa guesses the answers randomly and X is the number of questions she answers correctly. Find the mean and standard deviation of X.',
          type: 'Easy',
          explaination:
            'X ~ B(25, 1/4). Mean μ = np = 25 × 0.25 = 6.25. Standard deviation σ = √(np(1 − p)) = √(25 × 0.25 × 0.75) = √4.6875 ≈ 2.165.',
          answer: 'μ = 6.25, σ ≈ 2.17',
        },
        {
          id: 2,
          question:
            'A multiple-choice quiz has 30 questions and each question has three possible answers. Asher guesses the answers randomly and X is the number of questions he answers correctly. Find the mean and standard deviation of X.',
          type: 'Easy',
          explaination:
            'X ~ B(30, 1/3). Mean μ = np = 30 × 1/3 = 10. Standard deviation σ = √(30 × 1/3 × 2/3) = √(20/3) ≈ 2.582.',
          answer: 'μ = 10, σ ≈ 2.58',
        },
        {
          id: 3,
          question:
            'A fair coin is tossed 10 times and X is the number of heads. Find the mean and standard deviation of X.',
          type: 'Easy',
          explaination:
            'X ~ B(10, 0.5). Mean μ = 10 × 0.5 = 5. Standard deviation σ = √(10 × 0.5 × 0.5) = √2.5 ≈ 1.581.',
          answer: 'μ = 5, σ ≈ 1.58',
        },
        {
          id: 4,
          question:
            'A fair coin is tossed 20 times and X is the number of tails. Find the mean and standard deviation of X.',
          type: 'Easy',
          explaination:
            'X ~ B(20, 0.5). Mean μ = 20 × 0.5 = 10. Standard deviation σ = √(20 × 0.5 × 0.5) = √5 ≈ 2.236.',
          answer: 'μ = 10, σ ≈ 2.24',
        },
        {
          id: 5,
          question:
            'A fair dice is rolled 30 times and X is the number of 6s. Find the mean and standard deviation of X.',
          type: 'Easy',
          explaination:
            'X ~ B(30, 1/6). Mean μ = 30 × 1/6 = 5. Standard deviation σ = √(30 × 1/6 × 5/6) = √(25/6) ≈ 2.041.',
          answer: 'μ = 5, σ ≈ 2.04',
        },
        {
          id: 6,
          question:
            'A fair dice is rolled 20 times and X is the number of 4s. Find the mean and standard deviation of X.',
          type: 'Easy',
          explaination:
            'X ~ B(20, 1/6). Mean μ = 20 × 1/6 = 10/3 ≈ 3.33. Standard deviation σ = √(20 × 1/6 × 5/6) = √(25/9) = 5/3 ≈ 1.667.',
          answer: 'μ = 10/3 ≈ 3.33, σ ≈ 1.67',
        },
        {
          id: 7,
          question: 'The random variable Y has distribution B(20, 0.6). Find the variance of Y.',
          type: 'Easy',
          explaination: 'Var(Y) = np(1 − p) = 20 × 0.6 × 0.4 = 4.8.',
          answer: 'Var(Y) = 4.8',
        },
        {
          id: 8,
          question:
            'A multiple-choice test consists of 25 questions, each with five possible answers. Daniel guesses answers at random and X is the number of questions he answers correctly. Find the expected number of correct answers.',
          type: 'Easy',
          explaination: 'X ~ B(25, 1/5). E(X) = np = 25 × 0.2 = 5.',
          answer: 'E(X) = 5',
        },
      ],
    },
  },
  {
    trigonometry: {
      title: 'Trigonometry',
      'sinusoidal-models-real-world-context': [
        {
          id: 1,
          question:
            'The depth, d, of water out at sea at a distance x from a fixed point on a given day is modelled by the function d = 1.8 sin(72x) + 50, where d and x are both measured in metres. State the depth of the sea in completely calm water.',
          type: 'Easy',
          explaination:
            'In calm water there are no waves, so the depth is the principal axis of the model: d = 50 m.',
          answer: '50 m',
        },
        {
          id: 2,
          question:
            'The depth, d, of water out at sea at a distance x from a fixed point on a given day is modelled by the function d = 1.8 sin(72x) + 50, where d and x are both measured in metres. State the amplitude of the waves in this model.',
          type: 'Easy',
          explaination: 'The amplitude is the coefficient of sin: 1.8 m.',
          answer: '1.8 m',
        },
        {
          id: 3,
          question:
            'The depth, d, of water out at sea at a distance x from a fixed point on a given day is modelled by the function d = 1.8 sin(72x) + 50, where d and x are both measured in metres. Find the distance between two consecutive peaks of a wave.',
          type: 'Medium',
          explaination:
            'The distance between consecutive peaks is one period. Period = 360° ÷ 72 = 5. Since x is measured in metres, the peaks are 5 m apart.',
          answer: '5 m',
        },
        {
          id: 4,
          question:
            'A swing at a playground is released from its maximum height above the ground. The height, h metres, of the swing above the ground at time t seconds after release is modelled by h = 0.58 cos(bt) + 1.1. Find the maximum height of the swing above the ground.',
          type: 'Easy',
          explaination: 'The maximum occurs when cos(bt) = 1. h max = 1.1 + 0.58 = 1.68 m.',
          answer: '1.68 m',
        },
        {
          id: 5,
          question:
            'A swing at a playground is released from its maximum height above the ground. The height, h metres, of the swing above the ground at time t seconds after release is modelled by h = 0.58 cos(bt) + 1.1. Find the minimum height of the swing above the ground.',
          type: 'Easy',
          explaination: 'The minimum occurs when cos(bt) = −1. h min = 1.1 − 0.58 = 0.52 m.',
          answer: '0.52 m',
        },
        {
          id: 6,
          question:
            'An elastic string is suspended from a fixed point 2 m above the ground. A small weight is attached to the other end. The weight is pulled down and released so it moves up and down. The height, h, of the weight above the ground at time t is given by h = 140 − 12 cos(450t), where h is in centimetres and t in seconds. Find the maximum height of the weight above the ground.',
          type: 'Medium',
          explaination:
            'The maximum occurs when cos(450t) = −1. h max = 140 − 12(−1) = 140 + 12 = 152 cm.',
          answer: '152 cm',
        },
        {
          id: 7,
          question:
            'An elastic string is suspended from a fixed point 2 m above the ground. A small weight is attached to the other end. The weight is pulled down and released so it moves up and down. The height, h, of the weight above the ground at time t is given by h = 140 − 12 cos(450t), where h is in centimetres and t in seconds. State the height of the weight above the ground before it was pulled down and released.',
          type: 'Easy',
          explaination:
            'Before it was pulled down, the weight hung at rest at its equilibrium position, which is the principal axis of the model: 140 cm. (At t = 0, h = 140 − 12 cos 0 = 128 cm, which is the pulled-down position at the moment of release.)',
          answer: '140 cm',
        },
      ],
      'sine-rule': [
        {
          id: 1,
          question: 'In triangle ABC, angle A = 45°, angle B = 30° and a = 12 cm. Find b.',
          type: 'Medium',
          explaination:
            'Sine rule: a/sin A = b/sin B. b = (a sin B)/sin A = (12 sin 30°)/sin 45° = (12 × 0.5)/0.7071 ≈ 8.49 cm.',
          answer: 'b ≈ 8.49 cm',
        },
        {
          id: 2,
          question: 'In triangle ABC, angle A = 60°, angle B = 45° and a = 8 mm. Find b.',
          type: 'Medium',
          explaination: 'b = (8 sin 45°)/sin 60° = (8 × 0.7071)/0.8660 ≈ 6.53 mm.',
          answer: 'b ≈ 6.53 mm',
        },
        {
          id: 3,
          question: 'In triangle PQR, angle P = 70°, angle Q = 40° and QR = 5 cm. Find PR.',
          type: 'Medium',
          explaination:
            'QR is opposite P and PR is opposite Q. QR/sin P = PR/sin Q, so PR = (5 sin 40°)/sin 70° = (5 × 0.6428)/0.9397 ≈ 3.42 cm.',
          answer: 'PR ≈ 3.42 cm',
        },
        {
          id: 4,
          question: 'In triangle PQR, angle P = 60°, angle Q = 15° and QR = 11 mm. Find PR.',
          type: 'Medium',
          explaination:
            'QR is opposite P and PR is opposite Q. PR = (11 sin 15°)/sin 60° = (11 × 0.2588)/0.8660 ≈ 3.29 mm.',
          answer: 'PR ≈ 3.29 mm',
        },
        {
          id: 5,
          question: 'In triangle ABC, angle A = 23°, angle C = 72° and a = 1.3 cm. Find b.',
          type: 'Medium',
          explaination:
            'B = 180° − 23° − 72° = 85°. a/sin A = b/sin B, so b = (1.3 sin 85°)/sin 23° = (1.3 × 0.9962)/0.3907 ≈ 3.31 cm.',
          answer: 'b ≈ 3.31 cm',
        },
        {
          id: 6,
          question: 'In triangle ABC, angle A = 39°, angle C = 74° and a = 2.8 mm. Find b.',
          type: 'Medium',
          explaination:
            'B = 180° − 39° − 74° = 67°. b = (2.8 sin 67°)/sin 39° = (2.8 × 0.9205)/0.6293 ≈ 4.10 mm.',
          answer: 'b ≈ 4.10 mm',
        },
        {
          id: 7,
          question: 'In triangle ABC, angle A = 75°, a = 11 cm and b = 7 cm. Find angle B.',
          type: 'Medium',
          explaination:
            'sin B/b = sin A/a, so sin B = (7 sin 75°)/11 = (7 × 0.9659)/11 ≈ 0.6147. B = sin⁻¹(0.6147) ≈ 37.9°. Since b < a, B must be smaller than A, so the obtuse solution is not possible.',
          answer: 'B ≈ 37.9°',
        },
        {
          id: 8,
          question: 'In triangle ABC, angle A = 82°, a = 9 cm and b = 7 cm. Find angle B.',
          type: 'Medium',
          explaination:
            'sin B = (7 sin 82°)/9 = (7 × 0.9903)/9 ≈ 0.7703. B = sin⁻¹(0.7703) ≈ 50.4°. Since b < a, B is acute.',
          answer: 'B ≈ 50.4°',
        },
        {
          id: 9,
          question: 'In triangle PQR, angle P = 104°, QR = 2.8 cm and PQ = 1.7 cm. Find angle Q.',
          type: 'Medium',
          explaination:
            'QR is opposite P and PQ is opposite R. sin R = (1.7 sin 104°)/2.8 ≈ 1.649/2.8 ≈ 0.5889, so R ≈ 36.1°. Q = 180° − 104° − 36.1° ≈ 39.9°.',
          answer: 'Q ≈ 39.9°',
        },
        {
          id: 10,
          question: 'In triangle PQR, angle P = 119°, QR = 13 cm and PQ = 7 cm. Find angle Q.',
          type: 'Medium',
          explaination:
            'QR is opposite P and PQ is opposite R. sin R = (7 sin 119°)/13 = (7 × 0.8746)/13 ≈ 0.4710, so R ≈ 28.1°. Q = 180° − 119° − 28.1° ≈ 32.9°.',
          answer: 'Q ≈ 32.9°',
        },
        {
          id: 11,
          question: 'In triangle ABC, angle A = 84°, a = 7.3 cm and c = 7.1 cm. Find angle B.',
          type: 'Medium',
          explaination:
            'sin C = (7.1 sin 84°)/7.3 = (7.1 × 0.9945)/7.3 ≈ 0.9670, so C ≈ 75.3°. B = 180° − 84° − 75.3° ≈ 20.7°.',
          answer: 'B ≈ 20.7°',
        },
        {
          id: 12,
          question: 'In triangle ABC, angle A = 70°, a = 89 m and c = 81 m. Find angle B.',
          type: 'Medium',
          explaination:
            'sin C = (81 sin 70°)/89 = (81 × 0.9397)/89 ≈ 0.8554, so C ≈ 58.8°. B = 180° − 70° − 58.8° ≈ 51.2°.',
          answer: 'B ≈ 51.2°',
        },
      ],
      'cosine-rule': [
        {
          id: 1,
          question: 'In triangle ABC, angle A = 60°, b = 4 cm and c = 7 cm. Find side length a.',
          type: 'Medium',
          explaination:
            'a² = b² + c² − 2bc cos A = 16 + 49 − 2(4)(7) cos 60° = 65 − 56 × 0.5 = 37. a = √37 ≈ 6.08 cm.',
          answer: 'a = √37 ≈ 6.08 cm',
        },
        {
          id: 2,
          question: 'In triangle ABC, angle A = 60°, b = 5 mm and c = 8 mm. Find side length a.',
          type: 'Medium',
          explaination: 'a² = 25 + 64 − 2(5)(8) cos 60° = 89 − 80 × 0.5 = 49. a = √49 = 7 mm.',
          answer: 'a = 7 mm',
        },
        {
          id: 3,
          question: 'In triangle PQR, angle P = 45°, PR = 7 cm and PQ = 6 cm. Find side length QR.',
          type: 'Medium',
          explaination:
            'QR is opposite angle P. QR² = PR² + PQ² − 2(PR)(PQ) cos P = 49 + 36 − 84 cos 45° = 85 − 84 × 0.7071 ≈ 25.60. QR ≈ 5.06 cm.',
          answer: 'QR ≈ 5.06 cm',
        },
        {
          id: 4,
          question: 'In triangle PQR, angle P = 50°, PR = 8 mm and PQ = 7 mm. Find side length QR.',
          type: 'Medium',
          explaination:
            'QR is opposite angle P. QR² = 64 + 49 − 2(8)(7) cos 50° = 113 − 112 × 0.6428 ≈ 41.01. QR ≈ 6.40 mm.',
          answer: 'QR ≈ 6.40 mm',
        },
        {
          id: 5,
          question: 'In triangle ABC, angle B = 70°, a = 5 cm and c = 4 cm. Find side length b.',
          type: 'Medium',
          explaination:
            'b² = a² + c² − 2ac cos B = 25 + 16 − 40 cos 70° = 41 − 40 × 0.3420 ≈ 27.32. b = √27.32 ≈ 5.23 cm.',
          answer: 'b ≈ 5.23 cm',
        },
        {
          id: 6,
          question: 'In triangle ABC, angle C = 65°, a = 4 mm and b = 7 mm. Find side length c.',
          type: 'Medium',
          explaination:
            'c² = a² + b² − 2ab cos C = 16 + 49 − 56 cos 65° = 65 − 56 × 0.4226 ≈ 41.33. c ≈ 6.43 mm.',
          answer: 'c ≈ 6.43 mm',
        },
        {
          id: 7,
          question: 'In triangle ABC, a = 7 cm, b = 8 cm and c = 11 cm. Find angle A.',
          type: 'Medium',
          explaination:
            'cos A = (b² + c² − a²)/(2bc) = (64 + 121 − 49)/(2 × 8 × 11) = 136/176 ≈ 0.7727. A = cos⁻¹(0.7727) ≈ 39.4°.',
          answer: 'A ≈ 39.4°',
        },
        {
          id: 8,
          question: 'In triangle ABC, a = 10 cm, b = 12 cm and c = 15 cm. Find angle A.',
          type: 'Medium',
          explaination:
            'cos A = (144 + 225 − 100)/(2 × 12 × 15) = 269/360 ≈ 0.7472. A = cos⁻¹(0.7472) ≈ 41.6°.',
          answer: 'A ≈ 41.6°',
        },
        {
          id: 9,
          question: 'In triangle PQR, PQ = 16 cm, QR = 13 cm and PR = 17 cm. Find angle R.',
          type: 'Medium',
          explaination:
            'Angle R is between QR and PR, opposite PQ. cos R = (QR² + PR² − PQ²)/(2 × QR × PR) = (169 + 289 − 256)/(2 × 13 × 17) = 202/442 ≈ 0.4570. R = cos⁻¹(0.4570) ≈ 62.8°.',
          answer: 'R ≈ 62.8°',
        },
        {
          id: 10,
          question: 'In triangle ABC, a = 5.7 cm, b = 8.1 cm and c = 6.6 cm. Find angle C.',
          type: 'Medium',
          explaination:
            'cos C = (a² + b² − c²)/(2ab) = (32.49 + 65.61 − 43.56)/(2 × 5.7 × 8.1) = 54.54/92.34 ≈ 0.5907. C = cos⁻¹(0.5907) ≈ 53.8°.',
          answer: 'C ≈ 53.8°',
        },
        {
          id: 11,
          question: 'In triangle ABC, a = 1.4 cm, b = 2.5 cm and c = 1.9 cm. Find angle B.',
          type: 'Medium',
          explaination:
            'cos B = (a² + c² − b²)/(2ac) = (1.96 + 3.61 − 6.25)/(2 × 1.4 × 1.9) = −0.68/5.32 ≈ −0.1278. B = cos⁻¹(−0.1278) ≈ 97.3°. The cosine is negative, so B is obtuse.',
          answer: 'B ≈ 97.3°',
        },
        {
          id: 12,
          question:
            'A triangle has two sides of 11 cm and 12 cm, with an angle of 35° between them. Find the length a of the third side, which is opposite the 35° angle.',
          type: 'Hard',
          explaination:
            'The 35° angle is between the sides of 11 cm and 12 cm. a² = 11² + 12² − 2(11)(12) cos 35° = 121 + 144 − 264 × 0.8192 ≈ 265 − 216.26 = 48.74. a = √48.74 ≈ 6.98 cm.',
          answer: 'a ≈ 6.98 cm',
        },
        {
          id: 13,
          question: 'In triangle ABC, CA = 9, CB = 18 and AB = 16. Find the size of angle CAB.',
          type: 'Hard',
          explaination:
            'Angle CAB is between CA and AB, opposite CB. cos A = (CA² + AB² − CB²)/(2 × CA × AB) = (81 + 256 − 324)/(2 × 9 × 16) = 13/288 ≈ 0.04514. A = cos⁻¹(0.04514) ≈ 87.4°.',
          answer: 'Angle CAB ≈ 87.4°',
        },
        {
          id: 14,
          question: 'In triangle ABC, A = 45°, b = 5 cm and c = 8 cm. Find the length of side a.',
          type: 'Medium',
          explaination:
            'a² = b² + c² − 2bc cos A = 25 + 64 − 80 cos 45° = 89 − 56.57 ≈ 32.43. a = √32.43 ≈ 5.69 cm.',
          answer: 'a ≈ 5.69 cm',
        },
        {
          id: 15,
          question: 'In triangle ABC, the sides are a = 4 cm, b = 6 cm and c = 8 cm. Find angle A.',
          type: 'Medium',
          explaination:
            'cos A = (b² + c² − a²)/(2bc) = (36 + 64 − 16)/(2 × 6 × 8) = 84/96 = 0.875. A = cos⁻¹(0.875) ≈ 29.0°.',
          answer: 'A ≈ 29.0°',
        },
      ],
      'area-of-a-triangle': [
        {
          id: 1,
          question: 'In triangle ABC, a = 12 cm, b = 5 cm and angle C = 72°. Find the area.',
          type: 'Easy',
          explaination:
            'Angle C is between sides a and b. Area = ½ab sin C = ½(12)(5) sin 72° = 30 × 0.9511 ≈ 28.5 cm².',
          answer: 'Area ≈ 28.5 cm²',
        },
        {
          id: 2,
          question: 'In triangle ABC, a = 6 mm, b = 7 mm and angle C = 30°. Find the area.',
          type: 'Easy',
          explaination: 'Area = ½ab sin C = ½(6)(7) sin 30° = 21 × 0.5 = 10.5 mm².',
          answer: 'Area = 10.5 mm²',
        },
        {
          id: 3,
          question: 'In triangle PQR, PR = 19 cm, QR = 17 cm and angle R = 52°. Find the area.',
          type: 'Easy',
          explaination:
            'Angle R is between PR and QR. Area = ½(19)(17) sin 52° = ½(323)(0.7880) ≈ 127.26 cm².',
          answer: 'Area ≈ 127 cm²',
        },
        {
          id: 4,
          question: 'In triangle PQR, PR = 3.5 mm, QR = 2.1 mm and angle R = 28°. Find the area.',
          type: 'Easy',
          explaination:
            'Angle R is between PR and QR. Area = ½(3.5)(2.1) sin 28° = ½(7.35)(0.4695) ≈ 1.725 mm².',
          answer: 'Area ≈ 1.73 mm²',
        },
        {
          id: 5,
          question: 'In triangle ABC, a = 37 cm, c = 51 cm and angle B = 42°. Find the area.',
          type: 'Easy',
          explaination:
            'Angle B is between sides a and c. Area = ½ac sin B = ½(37)(51) sin 42° = ½(1887)(0.6691) ≈ 631.3 cm².',
          answer: 'Area ≈ 631 cm²',
        },
        {
          id: 6,
          question: 'In triangle ABC, b = 61 mm, c = 71 mm and angle A = 52°. Find the area.',
          type: 'Easy',
          explaination:
            'Angle A is between sides b and c. Area = ½bc sin A = ½(61)(71) sin 52° = ½(4331)(0.7880) ≈ 1706 mm².',
          answer: 'Area ≈ 1706 mm²',
        },
      ],
      'multi-step-trigonometry-problems': [
        {
          id: 1,
          question:
            'Triangle OAB has a right angle at O, with OA vertical and OB along the base. Point D lies on OB with OD = 4 cm and DB = x. At A, the angle between AO and AD is 35° and the angle between AD and AB is 20°. Find the length x.',
          type: 'Hard',
          explaination:
            'Let h = OA. In triangle OAD: tan 35° = 4/h, so h = 4/tan 35° ≈ 5.713 cm. In triangle OAB, angle OAB = 35° + 20° = 55°, so tan 55° = (4 + x)/h. 4 + x = 5.713 × tan 55° ≈ 5.713 × 1.4281 ≈ 8.158. x ≈ 8.158 − 4 = 4.16 cm.',
          answer: 'x ≈ 4.16 cm',
        },
        {
          id: 2,
          question:
            'Triangle OAB has a right angle at O, with OA vertical and OB along the base. Point D lies on OB with OD = 4 cm and DB = 3 cm. The angle at B is 20°. Find the angle θ = angle ODA, between the line DA and the base.',
          type: 'Hard',
          explaination:
            'OB = 4 + 3 = 7 cm. In triangle OAB: OA = 7 tan 20° ≈ 7 × 0.3640 ≈ 2.548 cm. In triangle OAD: tan θ = OA/OD = 2.548/4 ≈ 0.6370. θ = tan⁻¹(0.6370) ≈ 32.5°.',
          answer: 'θ ≈ 32.5°',
        },
        {
          id: 3,
          question:
            'Triangle OTQ has a right angle at O, with OT = 9 cm horizontal and OQ vertical. Point P lies on OQ with PQ = 3.5 cm. The angle between TO and TP is 25°. The length TQ = x, and θ is the angle between TP and TQ. Find the length x.',
          type: 'Hard',
          explaination:
            'In triangle OTP: OP = 9 tan 25° ≈ 9 × 0.4663 ≈ 4.197 cm. So OQ = OP + PQ ≈ 4.197 + 3.5 = 7.697 cm. In triangle OTQ: x = √(OT² + OQ²) = √(9² + 7.697²) = √(81 + 59.24) ≈ √140.24 ≈ 11.8 cm.',
          answer: 'x ≈ 11.8 cm',
        },
        {
          id: 4,
          question:
            'Triangle OTQ has a right angle at O, with OT = 9 cm horizontal and OQ vertical. Point P lies on OQ with PQ = 3.5 cm. The angle between TO and TP is 25°. The length TQ = x, and θ is the angle between TP and TQ. Find the angle θ.',
          type: 'Hard',
          explaination:
            'OP = 9 tan 25° ≈ 4.197 cm, so OQ ≈ 7.697 cm. Angle OTQ = tan⁻¹(OQ/OT) = tan⁻¹(7.697/9) ≈ 40.5°. θ = angle OTQ − 25° ≈ 40.5° − 25° = 15.5°.',
          answer: 'θ ≈ 15.5°',
        },
        {
          id: 5,
          question:
            'In triangle ABC, D is a point on BC. AB = 10, AD = 9 and AC = 13. Angle ADB = 70°. Find the length of BC.',
          type: 'Hard',
          explaination:
            'Angle ADC = 180° − 70° = 110° (angles on a straight line). In triangle ABD, by the cosine rule: AB² = AD² + BD² − 2(AD)(BD) cos 70°, so 100 = 81 + BD² − 6.156BD, giving BD² − 6.156BD − 19 = 0 and BD ≈ 8.414. In triangle ADC: AC² = AD² + DC² − 2(AD)(DC) cos 110°, so 169 = 81 + DC² + 6.156DC, giving DC² + 6.156DC − 88 = 0 and DC ≈ 6.795. BC = BD + DC ≈ 8.414 + 6.795 ≈ 15.2.',
          answer: 'BC ≈ 15.2',
        },
        {
          id: 6,
          question:
            'Triangle OTR has a right angle at O, with OT vertical and OR along the base. Point P lies on the hypotenuse TR, with OP = 9 and PR = 8. Angle POR = 40° and angle TOP = 50°. TP = x. Find x.',
          type: 'Hard',
          explaination:
            'In triangle OPR, by the sine rule: sin R/9 = sin 40°/8, so sin R = 9 × 0.6428/8 ≈ 0.7231 and R ≈ 46.3° (R must be acute, since triangle OTR has a right angle at O). Angle OPR = 180° − 40° − 46.3° = 93.7°, so angle OPT = 180° − 93.7° = 86.3°. In triangle OTP: angle T = 180° − 50° − 86.3° = 43.7°. By the sine rule: x/sin 50° = 9/sin 43.7°, so x = 9 × 0.7660/0.6907 ≈ 9.98.',
          answer: 'x ≈ 9.98',
        },
      ],
    },
  },
  {
    'geometry-and-trigonometry': {
      title: 'Geometry & Trigonometry',
      'bearings-and-navigation': [
        {
          id: 1,
          question:
            'A drone travels 3.3 km south and then 2.1 km on a bearing of 055°. Find the distance the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            'Due south is a bearing of 180°. The angle between the two legs at the turning point is 180° − 125° = 55°. Cosine rule: d² = 3.3² + 2.1² − 2(3.3)(2.1) cos 55° ≈ 7.350, so d ≈ 2.71 km.',
          answer: '≈ 2.71 km',
        },
        {
          id: 2,
          question:
            'A drone travels 3.3 km south and then 2.1 km on a bearing of 055°. Find the bearing on which the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            "Due south is a bearing of 180°. Distance back ≈ 2.711 km (angle at the turning point = 55°). Cosine rule for the angle at the start: cos A = (3.3² + 2.711² − 2.1²)/(2 × 3.3 × 2.711), so A ≈ 39.4°. The second leg turns anticlockwise, so the bearing of the drone's end point from the start is 180° − 39.4° ≈ 140.6°. The return bearing is the back bearing: 140.6° + 180° ≈ 320.6°.",
          answer: '≈ 321°',
        },
        {
          id: 3,
          question:
            'A drone travels 1.7 km east and then 2.3 km on a bearing of 085°. Find the distance the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            'Due east is a bearing of 090°. The angle between the two legs at the turning point is 180° − 5° = 175°. Cosine rule: d² = 1.7² + 2.3² − 2(1.7)(2.3) cos 175° ≈ 15.970, so d ≈ 4.00 km.',
          answer: '≈ 4.00 km',
        },
        {
          id: 4,
          question:
            'A drone travels 1.7 km east and then 2.3 km on a bearing of 085°. Find the bearing on which the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            "Due east is a bearing of 090°. Distance back ≈ 3.996 km (angle at the turning point = 175°). Cosine rule for the angle at the start: cos A = (1.7² + 3.996² − 2.3²)/(2 × 1.7 × 3.996), so A ≈ 2.9°. The second leg turns anticlockwise, so the bearing of the drone's end point from the start is 90° − 2.9° ≈ 87.1°. The return bearing is the back bearing: 87.1° + 180° ≈ 267.1°.",
          answer: '≈ 267°',
        },
        {
          id: 5,
          question:
            'A drone travels 6.8 km west and then 9.1 km on a bearing of 035°. Find the distance the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            'Due west is a bearing of 270°. The angle between the two legs at the turning point is 180° − 125° = 55°. Cosine rule: d² = 6.8² + 9.1² − 2(6.8)(9.1) cos 55° ≈ 58.064, so d ≈ 7.62 km.',
          answer: '≈ 7.62 km',
        },
        {
          id: 6,
          question:
            'A drone travels 6.8 km west and then 9.1 km on a bearing of 035°. Find the bearing on which the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            "Due west is a bearing of 270°. Distance back ≈ 7.62 km (angle at the turning point = 55°). Cosine rule for the angle at the start: cos A = (6.8² + 7.62² − 9.1²)/(2 × 6.8 × 7.62), so A ≈ 78.0°. The second leg turns clockwise, so the bearing of the drone's end point from the start is 270° + 78.0° ≈ 348.0°. The return bearing is the back bearing: 348.0° − 180° ≈ 168.0°.",
          answer: '≈ 168°',
        },
        {
          id: 7,
          question:
            'A drone travels 2.2 km on a bearing of 130° and then 1.8 km on a bearing of 145°. Find the distance the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            'The angle between the two legs at the turning point is 180° − 15° = 165°. Cosine rule: d² = 2.2² + 1.8² − 2(2.2)(1.8) cos 165° ≈ 15.730, so d ≈ 3.97 km.',
          answer: '≈ 3.97 km',
        },
        {
          id: 8,
          question:
            'A drone travels 2.2 km on a bearing of 130° and then 1.8 km on a bearing of 145°. Find the bearing on which the drone must travel to return to its original position.',
          type: 'Medium',
          explaination:
            "Distance back ≈ 3.966 km (angle at the turning point = 165°). Cosine rule for the angle at the start: cos A = (2.2² + 3.966² − 1.8²)/(2 × 2.2 × 3.966), so A ≈ 6.7°. The second leg turns clockwise, so the bearing of the drone's end point from the start is 130° + 6.7° ≈ 136.7°. The return bearing is the back bearing: 136.7° + 180° ≈ 316.7°.",
          answer: '≈ 317°',
        },
        {
          id: 9,
          question:
            'A drone travels 13 km on a bearing of 220° and then 17 km on a bearing of 105°. Find the distance the drone must travel to return to its original position.',
          type: 'Hard',
          explaination:
            'The angle between the two legs at the turning point is 180° − 115° = 65°. Cosine rule: d² = 13² + 17² − 2(13)(17) cos 65° ≈ 271.203, so d ≈ 16.5 km.',
          answer: '≈ 16.5 km',
        },
        {
          id: 10,
          question:
            'A drone travels 13 km on a bearing of 220° and then 17 km on a bearing of 105°. Find the bearing on which the drone must travel to return to its original position.',
          type: 'Hard',
          explaination:
            "Distance back ≈ 16.47 km (angle at the turning point = 65°). Cosine rule for the angle at the start: cos A = (13² + 16.47² − 17²)/(2 × 13 × 16.47), so A ≈ 69.3°. The second leg turns anticlockwise, so the bearing of the drone's end point from the start is 220° − 69.3° ≈ 150.7°. The return bearing is the back bearing: 150.7° + 180° ≈ 330.7°.",
          answer: '≈ 331°',
        },
        {
          id: 11,
          question:
            'A ship sails from a port due north for 1.2 km. It then changes direction and sails another 0.8 km on a bearing of 037°. Find the final distance of the ship from the port.',
          type: 'Medium',
          explaination:
            'Sketch the port, the 1.2 km leg due north and the 0.8 km leg on 037°. The angle between the two legs at the turning point is 180° − 37° = 143°. Cosine rule: d² = 1.2² + 0.8² − 2(1.2)(0.8) cos 143° ≈ 3.613, so d ≈ 1.90 km.',
          answer: '≈ 1.90 km',
        },
        {
          id: 12,
          question:
            'A dog runs 220 m on a bearing of 042° and then a further 180 m on a bearing of 166°. Find the distance the dog must run to return to the starting position.',
          type: 'Medium',
          explaination:
            'The angle between the two legs at the turning point is 180° − 124° = 56°. Cosine rule: d² = 220² + 180² − 2(220)(180) cos 56° ≈ 36511.922, so d ≈ 191 m.',
          answer: '≈ 191 m',
        },
        {
          id: 13,
          question:
            'A dog runs 220 m on a bearing of 042° and then a further 180 m on a bearing of 166°. Find the bearing on which the dog must run to return to the starting position.',
          type: 'Medium',
          explaination:
            "Distance back ≈ 191.1 m (angle at the turning point = 56°). Cosine rule for the angle at the start: cos A = (220² + 191.1² − 180²)/(2 × 220 × 191.1), so A ≈ 51.3°. The second leg turns clockwise, so the bearing of the dog's end point from the start is 42° + 51.3° ≈ 93.3°. The return bearing is the back bearing: 93.3° + 180° ≈ 273.3°.",
          answer: '≈ 273°',
        },
        {
          id: 14,
          question:
            'A lighthouse is 2.5 km from the port on a bearing of 035°. An island is 1.3 km from the port on a bearing of 130°. Find the distance of the lighthouse from the island.',
          type: 'Medium',
          explaination:
            'The angle at the port between the two directions is 130° − 35° = 95°. Cosine rule: d² = 2.5² + 1.3² − 2(2.5)(1.3) cos 95° ≈ 8.507, so d ≈ 2.92 km.',
          answer: '≈ 2.92 km',
        },
        {
          id: 15,
          question:
            'A lighthouse is 2.5 km from the port on a bearing of 035°. An island is 1.3 km from the port on a bearing of 130°. Find the bearing of the lighthouse from the island.',
          type: 'Medium',
          explaination:
            'Distance from the island to the lighthouse ≈ 2.917 km. The bearing of the port from the island is 130° + 180° = 310°. Cosine rule for the angle at the island: cos I = (1.3² + 2.917² − 2.5²)/(2 × 1.3 × 2.917), so I ≈ 58.6°. The lighthouse is clockwise from the port as seen from the island, so the bearing is 310° + 58.6° = 368.6°, which is 8.6°.',
          answer: '≈ 009°',
        },
      ],
      'angles-of-elevation-and-depression': [
        {
          id: 1,
          question:
            'Viewed from 40 m away, a building has an angle of elevation of 55°. Find the height of the building.',
          type: 'Easy',
          explaination: 'tan 55° = h/40, so h = 40 tan 55° ≈ 40 × 1.4281 ≈ 57.1 m.',
          answer: '≈ 57.1 m',
        },
        {
          id: 2,
          question:
            'A cone has diameter 12 cm and vertical height 9 cm. Find the angle θ between the sloping edge and the base.',
          type: 'Easy',
          explaination:
            'Radius = 12 ÷ 2 = 6 cm. The height, radius and sloping edge form a right-angled triangle. tan θ = 9/6 = 1.5, so θ = tan⁻¹(1.5) ≈ 56.3°.',
          answer: 'θ ≈ 56.3°',
        },
        {
          id: 3,
          question:
            'Alec has an eye level 160 cm above the ground. He stands 6.5 m from a tree. He can see the top of the tree at an angle of elevation of 62°. Find the height of the tree.',
          type: 'Medium',
          explaination:
            'Height of the tree above eye level = 6.5 tan 62° ≈ 6.5 × 1.8807 ≈ 12.22 m. Eye level = 160 cm = 1.6 m. Height of the tree ≈ 12.22 + 1.6 ≈ 13.8 m.',
          answer: '≈ 13.8 m',
        },
        {
          id: 4,
          question:
            "From her window, 9 m above the ground, Julia observes a car at an angle of depression of 12°. Find the distance of the car from the bottom of Julia's building.",
          type: 'Easy',
          explaination:
            'The angle of depression equals the angle of elevation from the car to the window, 12°. tan 12° = 9/d, so d = 9/tan 12° ≈ 9/0.2126 ≈ 42.3 m.',
          answer: '≈ 42.3 m',
        },
        {
          id: 5,
          question:
            "After recording the angle of elevation of the top of a statue from an unknown distance to the statue's base, a student walks exactly 5 m further away from the statue along horizontal ground and records a second angle of elevation. The two angles recorded are 17.7° and 12.0°. Find the height of the statue.",
          type: 'Hard',
          explaination:
            'Let h be the height and d the first distance. tan 17.7° = h/d, so d = h/tan 17.7°. tan 12.0° = h/(d + 5), so d + 5 = h/tan 12.0°. Subtract: h(1/tan 12.0° − 1/tan 17.7°) = 5, so h(4.7046 − 3.1334) = 5 and h = 5/1.5712 ≈ 3.18 m.',
          answer: 'h ≈ 3.18 m',
        },
        {
          id: 6,
          question:
            'From the top of his lighthouse, the keeper observes two buoys. The nearest buoy is directly to the east, and the second buoy is 18 m south of the first. The surface of the water is still. The angle of depression to the first buoy is 42.5° and the angle of depression to the second buoy is 41.3°. Find the height of the lighthouse above sea level, to the nearest metre.',
          type: 'Hard',
          explaination:
            'Let h be the height. Horizontal distance to the first buoy = h/tan 42.5°. The second buoy is 18 m south of the first, and east and south are at right angles, so its horizontal distance is √((h/tan 42.5°)² + 18²). Also, its horizontal distance = h/tan 41.3°. So (h/tan 41.3°)² − (h/tan 42.5°)² = 324. h²(1.2957 − 1.1910) ≈ 324, so h² ≈ 3094 and h ≈ 55.6 m.',
          answer: 'h ≈ 56 m',
        },
        {
          id: 7,
          question:
            'Ramiz stands at point R, 19.5 m from the base B of a vertical tree. He can see the top of the tree T at an angle of elevation of 26°. Find the height of the tree.',
          type: 'Medium',
          explaination: 'h = 19.5 tan 26° ≈ 19.5 × 0.4877 ≈ 9.51 m.',
          answer: '≈ 9.51 m',
        },
        {
          id: 8,
          question:
            "Ramiz stands at point R, 19.5 m from the base B of a vertical tree. He can see the top of the tree T at an angle of elevation of 26°. Mia, standing at point M on the same horizontal ground, can see the top of the tree at an angle of elevation of 41°. Find Mia's distance from the bottom of the tree.",
          type: 'Medium',
          explaination:
            'Height of the tree = 19.5 tan 26° ≈ 9.511 m. tan 41° = 9.511/MB, so MB = 9.511/tan 41° ≈ 9.511/0.8693 ≈ 10.9 m.',
          answer: '≈ 10.9 m',
        },
        {
          id: 9,
          question:
            'Ramiz stands at point R, 19.5 m from the base B of a vertical tree. He can see the top of the tree T at an angle of elevation of 26°. Mia, standing at point M on the same horizontal ground, can see the top of the tree at an angle of elevation of 41°. The distance between Mia and Ramiz is 14.7 m. Find the size of angle RBM, correct to the nearest degree.',
          type: 'Hard',
          explaination:
            'RB = 19.5 m, MB ≈ 10.94 m and RM = 14.7 m. Cosine rule: cos RBM = (RB² + MB² − RM²)/(2 × RB × MB) = (380.25 + 119.70 − 216.09)/(2 × 19.5 × 10.94) ≈ 283.86/426.7 ≈ 0.6653. Angle RBM = cos⁻¹(0.6653) ≈ 48°.',
          answer: 'Angle RBM ≈ 48°',
        },
        {
          id: 10,
          question:
            'A visitor at an art gallery sits on the floor, 2.4 m from the wall, and looks up at a painting. He can see the bottom of the painting at an angle of elevation of 55° and the top of the painting at an angle of elevation of 72°. Find the height of the painting.',
          type: 'Hard',
          explaination:
            'Height to the bottom of the painting = 2.4 tan 55° ≈ 3.428 m. Height to the top = 2.4 tan 72° ≈ 7.386 m. Height of the painting ≈ 7.386 − 3.428 ≈ 3.96 m.',
          answer: '≈ 3.96 m',
        },
      ],
      'arc-length-and-sector-area': [
        {
          id: 1,
          question:
            'A circle has centre O and radius 5 cm. Points A and B lie on the circle, and angle AOB = 40°. Find the length of the minor arc AB.',
          type: 'Easy',
          explaination: 'Arc length = (θ/360°) × 2πr = (40/360) × 2π(5) ≈ 3.491 cm.',
          answer: '≈ 3.49 cm',
        },
        {
          id: 2,
          question:
            'A circle has centre O and radius 5 cm. Points A and B lie on the circle, and angle AOB = 40°. Find the area of the sector AOB.',
          type: 'Easy',
          explaination:
            'Sector area = (θ/360°) × πr² = (40/360) × π(5)² = (40/360) × 25π ≈ 8.727 cm².',
          answer: '≈ 8.73 cm²',
        },
        {
          id: 3,
          question:
            'A circle has centre O and radius 8 cm. Points A and B lie on the circle, and angle AOB = 65°. Find the length of the minor arc AB.',
          type: 'Easy',
          explaination: 'Arc length = (θ/360°) × 2πr = (65/360) × 2π(8) ≈ 9.076 cm.',
          answer: '≈ 9.08 cm',
        },
        {
          id: 4,
          question:
            'A circle has centre O and radius 8 cm. Points A and B lie on the circle, and angle AOB = 65°. Find the area of the sector AOB.',
          type: 'Easy',
          explaination:
            'Sector area = (θ/360°) × πr² = (65/360) × π(8)² = (65/360) × 64π ≈ 36.3 cm².',
          answer: '≈ 36.3 cm²',
        },
        {
          id: 5,
          question:
            'A circle has centre O and radius 4 cm. Points A and B lie on the circle, and angle AOB = 100°. Find the length of the minor arc AB.',
          type: 'Easy',
          explaination: 'Arc length = (θ/360°) × 2πr = (100/360) × 2π(4) ≈ 6.981 cm.',
          answer: '≈ 6.98 cm',
        },
        {
          id: 6,
          question:
            'A circle has centre O and radius 4 cm. Points A and B lie on the circle, and angle AOB = 100°. Find the area of the sector AOB.',
          type: 'Easy',
          explaination:
            'Sector area = (θ/360°) × πr² = (100/360) × π(4)² = (100/360) × 16π ≈ 13.96 cm².',
          answer: '≈ 14.0 cm²',
        },
        {
          id: 7,
          question:
            'A circle has centre O and radius 7 cm. Points A and B lie on the circle, and angle AOB = 120°. Find the length of the minor arc AB.',
          type: 'Easy',
          explaination: 'Arc length = (θ/360°) × 2πr = (120/360) × 2π(7) ≈ 14.66 cm.',
          answer: '≈ 14.7 cm',
        },
        {
          id: 8,
          question:
            'A circle has centre O and radius 7 cm. Points A and B lie on the circle, and angle AOB = 120°. Find the area of the sector AOB.',
          type: 'Easy',
          explaination:
            'Sector area = (θ/360°) × πr² = (120/360) × π(7)² = (120/360) × 49π ≈ 51.31 cm².',
          answer: '≈ 51.3 cm²',
        },
        {
          id: 9,
          question:
            'A circle has centre O and radius 8 cm. Points A and B lie on the circle, and the reflex angle AOB is 240°. Find the length of the major arc AB.',
          type: 'Medium',
          explaination: 'Arc length = (θ/360°) × 2πr = (240/360) × 2π(8) ≈ 33.51 cm.',
          answer: '≈ 33.5 cm',
        },
        {
          id: 10,
          question:
            'A circle has centre O and radius 8 cm. Points A and B lie on the circle, and the reflex angle AOB is 240°. Find the area of the major sector AOB.',
          type: 'Medium',
          explaination:
            'Sector area = (θ/360°) × πr² = (240/360) × π(8)² = (240/360) × 64π ≈ 134 cm².',
          answer: '≈ 134 cm²',
        },
        {
          id: 11,
          question:
            'A circle has centre O and radius 5 cm. Points A and B lie on the circle, and the reflex angle AOB is 290°. Find the length of the major arc AB.',
          type: 'Medium',
          explaination: 'Arc length = (θ/360°) × 2πr = (290/360) × 2π(5) ≈ 25.31 cm.',
          answer: '≈ 25.3 cm',
        },
        {
          id: 12,
          question:
            'A circle has centre O and radius 5 cm. Points A and B lie on the circle, and the reflex angle AOB is 290°. Find the area of the major sector AOB.',
          type: 'Medium',
          explaination:
            'Sector area = (θ/360°) × πr² = (290/360) × π(5)² = (290/360) × 25π ≈ 63.27 cm².',
          answer: '≈ 63.3 cm²',
        },
      ],
      'arc-length-and-sector-area-finding-radius': [
        {
          id: 1,
          question:
            'An arc of a circle has length 12.3 cm and subtends an angle of 70° at the centre of the circle. Find the radius of the circle.',
          type: 'Medium',
          explaination:
            'Arc length = (θ/360°) × 2πr, so 12.3 = (70/360) × 2πr. r = 12.3 ÷ ((70/360) × 2π) = 12.3 ÷ 1.2217 ≈ 10.07 cm.',
          answer: 'r ≈ 10.1 cm',
        },
        {
          id: 2,
          question:
            'A sector of a circle has area 326 cm² and an angle at the centre of 155°. Find the radius of the circle.',
          type: 'Medium',
          explaination:
            'Sector area = (θ/360°) × πr², so 326 = (155/360) × πr². r² = 326 ÷ ((155/360) × π) = 326 ÷ 1.3526 ≈ 241.0, so r ≈ 15.5 cm.',
          answer: 'r ≈ 15.5 cm',
        },
        {
          id: 3,
          question:
            'A sector of a circle has area 87.3 cm² and an angle at the centre of 74.5°. Find the radius of the circle.',
          type: 'Medium',
          explaination:
            '87.3 = (74.5/360) × πr². r² = 87.3 ÷ ((74.5/360) × π) = 87.3 ÷ 0.65014 ≈ 134.28, so r ≈ 11.6 cm.',
          answer: 'r ≈ 11.6 cm',
        },
        {
          id: 4,
          question:
            'A sector of a circle has area 87.3 cm² and an angle at the centre of 74.5°. Find the perimeter of the sector.',
          type: 'Medium',
          explaination:
            'First find the radius: r² = 87.3 ÷ ((74.5/360) × π) ≈ 134.28, so r ≈ 11.588 cm. Arc length = (74.5/360) × 2π(11.588) ≈ 15.07 cm. Perimeter = arc + 2r ≈ 15.07 + 2(11.588) ≈ 38.2 cm.',
          answer: 'Perimeter ≈ 38.2 cm',
        },
        {
          id: 5,
          question:
            'A sector of a circle has perimeter 26 cm and an angle at the centre of 103°. Find the radius of the circle.',
          type: 'Medium',
          explaination:
            'The perimeter is the arc plus two radii: (103/360) × 2πr + 2r = 26. (103/360) × 2π ≈ 1.7977, so r(1.7977 + 2) = 26 and r = 26 ÷ 3.7977 ≈ 6.85 cm.',
          answer: 'r ≈ 6.85 cm',
        },
        {
          id: 6,
          question:
            'A sector of a circle has area 18 cm² and perimeter 30 cm. Find the possible values of the radius of the circle.',
          type: 'Hard',
          explaination:
            'Let θ be the angle in radians. Perimeter: rθ + 2r = 30, so rθ = 30 − 2r. Area: ½r²θ = 18, so r(rθ) = 36. Substitute: r(30 − 2r) = 36, so 2r² − 30r + 36 = 0 and r² − 15r + 18 = 0. r = (15 ± √153)/2, giving r ≈ 1.32 or r ≈ 13.7. Check the angle: if r ≈ 1.32, θ = (30 − 2r)/r ≈ 20.8 radians, which is more than a full turn (2π ≈ 6.28), so this is not possible. If r ≈ 13.7, θ ≈ 0.192 radians (about 11°), which is valid.',
          answer: 'r ≈ 13.7 cm (r ≈ 1.32 cm is rejected because the angle would be more than 360°)',
        },
      ],
      'arc-length-and-sector-area-finding-angle': [
        {
          id: 1,
          question:
            'A sector of a circle has radius 5 cm. The length of its arc AB is 7 cm, and θ is the angle at the centre. Find the value of θ.',
          type: 'Medium',
          explaination:
            'Arc length = (θ/360°) × 2πr, so 7 = (θ/360°) × 2π(5) = (θ/360°) × 10π. θ = (7 × 360°)/(10π) ≈ 80.2°. (In radians, θ = l/r = 7/5 = 1.4.)',
          answer: 'θ ≈ 80.2° (1.4 radians)',
        },
        {
          id: 2,
          question:
            'A sector of a circle has radius 5 cm. The length of its arc AB is 7 cm, and θ is the angle at the centre. Find the area of the sector.',
          type: 'Medium',
          explaination:
            'From the arc length, θ/360° = 7/(10π). Sector area = (θ/360°) × πr² = (7/(10π)) × 25π = 17.5 cm². (In radians: ½r²θ = ½ × 25 × 1.4 = 17.5 cm².)',
          answer: '17.5 cm²',
        },
        {
          id: 3,
          question:
            'A circle with centre O has radius 23 cm. Arc AB subtends angle θ at the centre of the circle. Given that the area of the sector AOB is 185 cm², find the value of θ.',
          type: 'Medium',
          explaination:
            'Sector area = (θ/360°) × πr², so 185 = (θ/360°) × π(23)² = (θ/360°) × 529π. θ = (185 × 360°)/(529π) ≈ 40.1°. (In radians, θ = 2A/r² = 370/529 ≈ 0.699.)',
          answer: 'θ ≈ 40.1° (0.699 radians)',
        },
      ],
    },
  },
  {
    'statistical-testing': {
      title: 'Statistical Testing',
      'chi-squared-goodness-of-fit': [
        {
          id: 1,
          question:
            'A χ² goodness of fit test is carried out on coloured counters. Red: expected probability 1/4, observed 34; Blue: expected probability 1/2, observed 51; Yellow: expected probability 1/4, observed 15. The null hypothesis is that the data follow the expected probabilities. Calculate the expected frequencies and the χ² value.',
          type: 'Medium',
          explaination:
            'Total = 34 + 51 + 15 = 100. Expected frequency = probability × 100: Red = 25, Blue = 50, Yellow = 25. χ² = Σ(O − E)²/E = (34 − 25)²/25 + (51 − 50)²/50 + (15 − 25)²/25 ≈ 7.260.',
          answer: 'Expected: Red = 25, Blue = 50, Yellow = 25; χ² ≈ 7.26',
        },
        {
          id: 2,
          question:
            'A χ² goodness of fit test is carried out on coloured counters. Red: expected probability 1/4, observed 34; Blue: expected probability 1/2, observed 51; Yellow: expected probability 1/4, observed 15. The null hypothesis is that the data follow the expected probabilities. State the number of degrees of freedom.',
          type: 'Medium',
          explaination: 'There are 3 categories, so df = 3 − 1 = 2.',
          answer: 'df = 2',
        },
        {
          id: 3,
          question:
            'A χ² goodness of fit test is carried out on coloured counters. Red: expected probability 1/4, observed 34; Blue: expected probability 1/2, observed 51; Yellow: expected probability 1/4, observed 15. The null hypothesis is that the data follow the expected probabilities. Find the p-value and state the conclusion at the 5% significance level.',
          type: 'Medium',
          explaination:
            'χ² ≈ 7.260 with df = 2. Using the χ² cdf on the GDC, p-value ≈ 0.0265. Since 0.0265 < 0.05, reject H₀: there is evidence that the data do not follow the expected probabilities.',
          answer: 'p-value ≈ 0.0265; reject H₀',
        },
        {
          id: 4,
          question:
            'A χ² goodness of fit test is carried out on fruit types. Apple: expected probability 1/2, observed 45; Orange: expected probability 3/10, observed 33; Banana: expected probability 1/5, observed 22. The null hypothesis is that the data follow the expected probabilities. Calculate the expected frequencies and the χ² value.',
          type: 'Medium',
          explaination:
            'Total = 45 + 33 + 22 = 100. Expected frequency = probability × 100: Apple = 50, Orange = 30, Banana = 20. χ² = Σ(O − E)²/E = (45 − 50)²/50 + (33 − 30)²/30 + (22 − 20)²/20 ≈ 1.000.',
          answer: 'Expected: Apple = 50, Orange = 30, Banana = 20; χ² ≈ 1.00',
        },
        {
          id: 5,
          question:
            'A χ² goodness of fit test is carried out on fruit types. Apple: expected probability 1/2, observed 45; Orange: expected probability 3/10, observed 33; Banana: expected probability 1/5, observed 22. The null hypothesis is that the data follow the expected probabilities. State the number of degrees of freedom.',
          type: 'Medium',
          explaination: 'There are 3 categories, so df = 3 − 1 = 2.',
          answer: 'df = 2',
        },
        {
          id: 6,
          question:
            'A χ² goodness of fit test is carried out on fruit types. Apple: expected probability 1/2, observed 45; Orange: expected probability 3/10, observed 33; Banana: expected probability 1/5, observed 22. The null hypothesis is that the data follow the expected probabilities. Find the p-value and state the conclusion at the 5% significance level.',
          type: 'Medium',
          explaination:
            'χ² ≈ 1.000 with df = 2. Using the χ² cdf on the GDC, p-value ≈ 0.607. Since 0.607 > 0.05, do not reject H₀: there is not enough evidence that the data differ from the expected probabilities.',
          answer: 'p-value ≈ 0.607; do not reject H₀',
        },
        {
          id: 7,
          question:
            'A χ² goodness of fit test is carried out on data values. 1: expected probability 0.2, observed 12; 2: expected probability 0.2, observed 16; 3: expected probability 0.2, observed 8; 4: expected probability 0.2, observed 10; 5: expected probability 0.2, observed 4. The null hypothesis is that the data follow the expected probabilities. Calculate the expected frequencies and the χ² value.',
          type: 'Medium',
          explaination:
            'Total = 12 + 16 + 8 + 10 + 4 = 50. Expected frequency = probability × 50: 1 = 10, 2 = 10, 3 = 10, 4 = 10, 5 = 10. χ² = Σ(O − E)²/E = (12 − 10)²/10 + (16 − 10)²/10 + (8 − 10)²/10 + (10 − 10)²/10 + (4 − 10)²/10 ≈ 8.000.',
          answer: 'Expected: 1 = 10, 2 = 10, 3 = 10, 4 = 10, 5 = 10; χ² ≈ 8.00',
        },
        {
          id: 8,
          question:
            'A χ² goodness of fit test is carried out on data values. 1: expected probability 0.2, observed 12; 2: expected probability 0.2, observed 16; 3: expected probability 0.2, observed 8; 4: expected probability 0.2, observed 10; 5: expected probability 0.2, observed 4. The null hypothesis is that the data follow the expected probabilities. State the number of degrees of freedom.',
          type: 'Medium',
          explaination: 'There are 5 categories, so df = 5 − 1 = 4.',
          answer: 'df = 4',
        },
        {
          id: 9,
          question:
            'A χ² goodness of fit test is carried out on data values. 1: expected probability 0.2, observed 12; 2: expected probability 0.2, observed 16; 3: expected probability 0.2, observed 8; 4: expected probability 0.2, observed 10; 5: expected probability 0.2, observed 4. The null hypothesis is that the data follow the expected probabilities. Find the p-value and state the conclusion at the 5% significance level.',
          type: 'Medium',
          explaination:
            'χ² ≈ 8.000 with df = 4. Using the χ² cdf on the GDC, p-value ≈ 0.0916. Since 0.0916 > 0.05, do not reject H₀: there is not enough evidence that the data differ from the expected probabilities.',
          answer: 'p-value ≈ 0.0916; do not reject H₀',
        },
        {
          id: 10,
          question:
            'A χ² goodness of fit test is carried out on data values. 0: expected probability 0.25, observed 6; 2: expected probability 0.25, observed 18; 4: expected probability 0.25, observed 13; 6: expected probability 0.25, observed 23. The null hypothesis is that the data follow the expected probabilities. Calculate the expected frequencies and the χ² value.',
          type: 'Medium',
          explaination:
            'Total = 6 + 18 + 13 + 23 = 60. Expected frequency = probability × 60: 0 = 15, 2 = 15, 4 = 15, 6 = 15. χ² = Σ(O − E)²/E = (6 − 15)²/15 + (18 − 15)²/15 + (13 − 15)²/15 + (23 − 15)²/15 ≈ 10.53.',
          answer: 'Expected: 0 = 15, 2 = 15, 4 = 15, 6 = 15; χ² ≈ 10.5',
        },
        {
          id: 11,
          question:
            'A χ² goodness of fit test is carried out on data values. 0: expected probability 0.25, observed 6; 2: expected probability 0.25, observed 18; 4: expected probability 0.25, observed 13; 6: expected probability 0.25, observed 23. The null hypothesis is that the data follow the expected probabilities. State the number of degrees of freedom.',
          type: 'Medium',
          explaination: 'There are 4 categories, so df = 4 − 1 = 3.',
          answer: 'df = 3',
        },
        {
          id: 12,
          question:
            'A χ² goodness of fit test is carried out on data values. 0: expected probability 0.25, observed 6; 2: expected probability 0.25, observed 18; 4: expected probability 0.25, observed 13; 6: expected probability 0.25, observed 23. The null hypothesis is that the data follow the expected probabilities. Find the p-value and state the conclusion at the 5% significance level.',
          type: 'Medium',
          explaination:
            'χ² ≈ 10.53 with df = 3. Using the χ² cdf on the GDC, p-value ≈ 0.0145. Since 0.0145 < 0.05, reject H₀: there is evidence that the data do not follow the expected probabilities.',
          answer: 'p-value ≈ 0.0145; reject H₀',
        },
        {
          id: 13,
          question:
            'A χ² goodness of fit test is carried out on languages studied. French: expected probability 1/3, observed 52; Spanish: expected probability 1/4, observed 51; English: expected probability 1/5, observed 30; Mandarin: expected probability 13/60, observed 67. The null hypothesis is that the data follow the expected probabilities. Calculate the expected frequencies and the χ² value.',
          type: 'Hard',
          explaination:
            'Total = 52 + 51 + 30 + 67 = 200. Expected frequency = probability × 200: French = 66.67, Spanish = 50, English = 40, Mandarin = 43.33. χ² = Σ(O − E)²/E = (52 − 66.67)²/66.67 + (51 − 50)²/50 + (30 − 40)²/40 + (67 − 43.33)²/43.33 ≈ 18.67.',
          answer:
            'Expected: French = 66.67, Spanish = 50, English = 40, Mandarin = 43.33; χ² ≈ 18.7',
        },
        {
          id: 14,
          question:
            'A χ² goodness of fit test is carried out on languages studied. French: expected probability 1/3, observed 52; Spanish: expected probability 1/4, observed 51; English: expected probability 1/5, observed 30; Mandarin: expected probability 13/60, observed 67. The null hypothesis is that the data follow the expected probabilities. State the number of degrees of freedom.',
          type: 'Hard',
          explaination: 'There are 4 categories, so df = 4 − 1 = 3.',
          answer: 'df = 3',
        },
        {
          id: 15,
          question:
            'A χ² goodness of fit test is carried out on languages studied. French: expected probability 1/3, observed 52; Spanish: expected probability 1/4, observed 51; English: expected probability 1/5, observed 30; Mandarin: expected probability 13/60, observed 67. The null hypothesis is that the data follow the expected probabilities. Find the p-value and state the conclusion at the 5% significance level.',
          type: 'Hard',
          explaination:
            'χ² ≈ 18.67 with df = 3. Using the χ² cdf on the GDC, p-value ≈ 0.00032. Since 0.00032 < 0.05, reject H₀: there is evidence that the data do not follow the expected probabilities.',
          answer: 'p-value ≈ 0.00032; reject H₀',
        },
        {
          id: 16,
          question:
            'A χ² goodness of fit test is carried out on sciences studied. Biology: expected probability 1/3, observed 52; Chemistry: expected probability 1/6, observed 31; Physics: expected probability 1/5, observed 42; Geology: expected probability 3/10, observed 35. The null hypothesis is that the data follow the expected probabilities. Calculate the expected frequencies and the χ² value.',
          type: 'Hard',
          explaination:
            'Total = 52 + 31 + 42 + 35 = 160. Expected frequency = probability × 160: Biology = 53.33, Chemistry = 26.67, Physics = 32, Geology = 48. χ² = Σ(O − E)²/E = (52 − 53.33)²/53.33 + (31 − 26.67)²/26.67 + (42 − 32)²/32 + (35 − 48)²/48 ≈ 7.383.',
          answer:
            'Expected: Biology = 53.33, Chemistry = 26.67, Physics = 32, Geology = 48; χ² ≈ 7.38',
        },
        {
          id: 17,
          question:
            'A χ² goodness of fit test is carried out on sciences studied. Biology: expected probability 1/3, observed 52; Chemistry: expected probability 1/6, observed 31; Physics: expected probability 1/5, observed 42; Geology: expected probability 3/10, observed 35. The null hypothesis is that the data follow the expected probabilities. State the number of degrees of freedom.',
          type: 'Hard',
          explaination: 'There are 4 categories, so df = 4 − 1 = 3.',
          answer: 'df = 3',
        },
        {
          id: 18,
          question:
            'A χ² goodness of fit test is carried out on sciences studied. Biology: expected probability 1/3, observed 52; Chemistry: expected probability 1/6, observed 31; Physics: expected probability 1/5, observed 42; Geology: expected probability 3/10, observed 35. The null hypothesis is that the data follow the expected probabilities. Find the p-value and state the conclusion at the 5% significance level.',
          type: 'Hard',
          explaination:
            'χ² ≈ 7.383 with df = 3. Using the χ² cdf on the GDC, p-value ≈ 0.0606. Since 0.0606 > 0.05, do not reject H₀: there is not enough evidence that the data differ from the expected probabilities.',
          answer: 'p-value ≈ 0.0606; do not reject H₀',
        },
        {
          id: 19,
          question:
            'Zhao thinks that students at her large college are equally likely to study any of the four mathematics courses. She asks a random sample of 80 students and obtains the following results: Analysis and Approaches HL 18, Analysis and Approaches SL 21, Applications and Interpretation HL 8, Applications and Interpretation SL 33. Zhao conducts a χ² test using a 5% significance level. State the null and alternative hypotheses.',
          type: 'Medium',
          explaination:
            'The null hypothesis says the distribution is uniform; the alternative says it is not.',
          answer:
            'H₀: students are equally likely to study any of the four courses. H₁: students are not equally likely to study any of the four courses.',
        },
        {
          id: 20,
          question:
            'Zhao thinks that students at her large college are equally likely to study any of the four mathematics courses. She asks a random sample of 80 students and obtains the following results: Analysis and Approaches HL 18, Analysis and Approaches SL 21, Applications and Interpretation HL 8, Applications and Interpretation SL 33. Zhao conducts a χ² test using a 5% significance level. Write down the expected frequencies and the number of degrees of freedom.',
          type: 'Medium',
          explaination:
            'If all four courses are equally likely, each expected frequency = 80 ÷ 4 = 20. There are 4 categories, so df = 4 − 1 = 3.',
          answer: 'Expected frequency = 20 for each course; df = 3',
        },
        {
          id: 21,
          question:
            'Zhao thinks that students at her large college are equally likely to study any of the four mathematics courses. She asks a random sample of 80 students and obtains the following results: Analysis and Approaches HL 18, Analysis and Approaches SL 21, Applications and Interpretation HL 8, Applications and Interpretation SL 33. Zhao conducts a χ² test using a 5% significance level. Find the p-value for the test and hence state the conclusion.',
          type: 'Medium',
          explaination:
            'Expected frequency = 20 for each course. χ² = (18 − 20)²/20 + (21 − 20)²/20 + (8 − 20)²/20 + (33 − 20)²/20 = (4 + 1 + 144 + 169)/20 = 15.9. With df = 3, p-value ≈ 0.00119. Since 0.00119 < 0.05, reject H₀: there is evidence that students are not equally likely to study each course.',
          answer: 'χ² = 15.9, p-value ≈ 0.00119; reject H₀',
        },
        {
          id: 22,
          question:
            'A six-sided dice is rolled 120 times, giving the following results: 1 appears 26 times, 2 appears 12 times, 3 appears 16 times, 4 appears 28 times, 5 appears 14 times and 6 appears 24 times. Is there evidence, at the 2% significance level, that the dice is not fair?',
          type: 'Medium',
          explaination:
            'H₀: the dice is fair (each outcome has probability 1/6). H₁: the dice is not fair. Expected frequency = 120 ÷ 6 = 20 for each outcome. χ² = (36 + 64 + 16 + 64 + 36 + 16)/20 = 232/20 = 11.6. df = 6 − 1 = 5. p-value ≈ 0.0407, which is greater than 0.02 (equivalently, 11.6 < the critical value 13.388). Do not reject H₀.',
          answer:
            'χ² = 11.6, p-value ≈ 0.0407 > 0.02; do not reject H₀. There is not enough evidence that the dice is unfair.',
        },
      ],
      'chi-squared-test-for-independence': [
        {
          id: 1,
          question:
            'The following contingency table is given. Row 1: 12, 15, 21. Row 2: 22, 18, 12. A χ² test for independence is carried out, with the null hypothesis that the row and column variables are independent. The critical value for the test is 9.21. State the χ² value and the conclusion of the test.',
          type: 'Medium',
          explaination:
            'Row totals: 48, 52. Column totals: 34, 33, 33. Grand total: 100. Expected frequency = (row total × column total) ÷ grand total. Expected values: Row 1: 16.32, 15.84, 15.84; Row 2: 17.68, 17.16, 17.16. χ² = Σ(O − E)²/E ≈ 5.52, with df = (2 − 1)(3 − 1) = 2. The critical value 9.21 corresponds to a 1% significance level. Since 5.52 < 9.21, do not reject H₀: there is not enough evidence that the variables are dependent.',
          answer:
            'χ² ≈ 5.52; 5.52 < 9.21, so do not reject H₀ (not enough evidence that the variables are dependent)',
        },
        {
          id: 2,
          question:
            'The following contingency table is given. Row 1: 63, 81, 35. Row 2: 27, 32, 62. A χ² test for independence is carried out, with the null hypothesis that the row and column variables are independent. The critical value for the test is 7.38. State the χ² value and the conclusion of the test.',
          type: 'Medium',
          explaination:
            'Row totals: 179, 121. Column totals: 90, 113, 97. Grand total: 300. Expected frequency = (row total × column total) ÷ grand total. Expected values: Row 1: 53.7, 67.42, 57.88; Row 2: 36.3, 45.58, 39.12. χ² = Σ(O − E)²/E ≈ 33.2, with df = (2 − 1)(3 − 1) = 2. The critical value 7.38 corresponds to a 2.5% significance level. Since 33.2 > 7.38, reject H₀: there is evidence that the variables are not independent.',
          answer:
            'χ² ≈ 33.2; 33.2 > 7.38, so reject H₀ (evidence that the variables are not independent)',
        },
        {
          id: 3,
          question:
            'The following contingency table is given. Row 1: 8, 12, 16. Row 2: 9, 15, 21. Row 3: 13, 14, 22. A χ² test for independence is carried out, with the null hypothesis that the row and column variables are independent. The critical value for the test is 7.78. State the χ² value and the conclusion of the test.',
          type: 'Medium',
          explaination:
            'Row totals: 36, 45, 49. Column totals: 30, 41, 59. Grand total: 130. Expected frequency = (row total × column total) ÷ grand total. Expected values: Row 1: 8.31, 11.35, 16.34; Row 2: 10.38, 14.19, 20.42; Row 3: 11.31, 15.45, 22.24. χ² = Σ(O − E)²/E ≈ 0.695, with df = (3 − 1)(3 − 1) = 4. The critical value 7.78 corresponds to a 10% significance level. Since 0.695 < 7.78, do not reject H₀: there is not enough evidence that the variables are dependent.',
          answer:
            'χ² ≈ 0.695; 0.695 < 7.78, so do not reject H₀ (not enough evidence that the variables are dependent)',
        },
        {
          id: 4,
          question:
            'The following contingency table is given. Row 1: 18, 13, 8. Row 2: 13, 16, 21. Row 3: 8, 18, 22. A χ² test for independence is carried out, with the null hypothesis that the row and column variables are independent. The critical value for the test is 9.49. State the χ² value and the conclusion of the test.',
          type: 'Medium',
          explaination:
            'Row totals: 39, 50, 48. Column totals: 39, 47, 51. Grand total: 137. Expected frequency = (row total × column total) ÷ grand total. Expected values: Row 1: 11.1, 13.38, 14.52; Row 2: 14.23, 17.15, 18.61; Row 3: 13.66, 16.47, 17.87. χ² = Σ(O − E)²/E ≈ 11.2, with df = (3 − 1)(3 − 1) = 4. The critical value 9.49 corresponds to a 5% significance level. Since 11.2 > 9.49, reject H₀: there is evidence that the variables are not independent.',
          answer:
            'χ² ≈ 11.2; 11.2 > 9.49, so reject H₀ (evidence that the variables are not independent)',
        },
        {
          id: 5,
          question:
            'The following contingency table is given. Row 1: 62, 37, 81. Row 2: 88, 53, 30. Row 3: 26, 15, 32. Row 4: 81, 73, 55. A χ² test for independence is carried out, with the null hypothesis that the row and column variables are independent. The critical value for the test is 12.6. State the χ² value and the conclusion of the test.',
          type: 'Hard',
          explaination:
            'Row totals: 180, 171, 73, 209. Column totals: 257, 178, 198. Grand total: 633. Expected frequency = (row total × column total) ÷ grand total. Expected values: Row 1: 73.08, 50.62, 56.3; Row 2: 69.43, 48.09, 53.49; Row 3: 29.64, 20.53, 22.83; Row 4: 84.85, 58.77, 65.37. χ² = Σ(O − E)²/E ≈ 42.8, with df = (4 − 1)(3 − 1) = 6. The critical value 12.6 corresponds to a 5% significance level. Since 42.8 > 12.6, reject H₀: there is evidence that the variables are not independent.',
          answer:
            'χ² ≈ 42.8; 42.8 > 12.6, so reject H₀ (evidence that the variables are not independent)',
        },
        {
          id: 6,
          question:
            'The following contingency table is given. Row 1: 13, 11, 11. Row 2: 12, 8, 3. Row 3: 21, 16, 9. Row 4: 13, 13, 13. A χ² test for independence is carried out, with the null hypothesis that the row and column variables are independent. The critical value for the test is 10.6. State the χ² value and the conclusion of the test.',
          type: 'Hard',
          explaination:
            'Row totals: 35, 23, 46, 39. Column totals: 59, 48, 36. Grand total: 143. Expected frequency = (row total × column total) ÷ grand total. Expected values: Row 1: 14.44, 11.75, 8.81; Row 2: 9.49, 7.72, 5.79; Row 3: 18.98, 15.44, 11.58; Row 4: 16.09, 13.09, 9.82. χ² = Σ(O − E)²/E ≈ 5.19, with df = (4 − 1)(3 − 1) = 6. The critical value 10.6 corresponds to a 10% significance level. Since 5.19 < 10.6, do not reject H₀: there is not enough evidence that the variables are dependent.',
          answer:
            'χ² ≈ 5.19; 5.19 < 10.6, so do not reject H₀ (not enough evidence that the variables are dependent)',
        },
      ],
      'chi-squared-test-for-independence-full-test': [
        {
          id: 1,
          question:
            "Ruby wants to test whether students' food preferences depend on their age. She conducts a survey in the school canteen, recording which option each student chooses. Junior school: veggie burger 18, fish fingers 26, pepperoni pizza 51. Senior school: veggie burger 53, fish fingers 38, pepperoni pizza 47. Conduct a suitable χ² test at the 5% significance level, stating your hypotheses and conclusion clearly.",
          type: 'Medium',
          explaination:
            'H₀: food preference is independent of school (junior or senior). H₁: food preference is not independent of school. Row totals (Junior, Senior): 95, 138. Column totals (veggie burger, fish fingers, pepperoni pizza): 71, 64, 98. Grand total: 233. Expected frequency = (row total × column total) ÷ grand total. Expected values: Junior: 28.95, 26.09, 39.96; Senior: 42.05, 37.91, 58.04. All expected values are at least 5. χ² = Σ(O − E)²/E ≈ 12.14. df = (2 − 1)(3 − 1) = 2. p-value ≈ 0.00231 (critical value at 5% ≈ 5.991). Since 0.00231 < 0.05, reject H₀. There is evidence that food preference depends on whether a student is in the junior or senior school.',
          answer:
            'χ² ≈ 12.1, df = 2, p-value ≈ 0.00231; reject H₀. There is evidence that food preference depends on whether a student is in the junior or senior school.',
        },
        {
          id: 2,
          question:
            'A zoologist investigates whether different types of insect are more common in different locations. She collects a random sample of insects from a meadow and a forest and counts the number of ants, bees and flies. Meadow: ants 26, bees 15, flies 21. Forest: ants 32, bees 6, flies 18. Use a χ² test with a 10% significance level to test whether the type of insect found depends on the location.',
          type: 'Medium',
          explaination:
            'H₀: the type of insect is independent of location. H₁: the type of insect is not independent of location. Row totals (Meadow, Forest): 62, 56. Column totals (ants, bees, flies): 58, 21, 39. Grand total: 118. Expected frequency = (row total × column total) ÷ grand total. Expected values: Meadow: 30.47, 11.03, 20.49; Forest: 27.53, 9.97, 18.51. All expected values are at least 5. χ² = Σ(O − E)²/E ≈ 4.415. df = (2 − 1)(3 − 1) = 2. p-value ≈ 0.110 (critical value at 10% ≈ 4.605). Since 0.110 > 0.1, do not reject H₀. There is not enough evidence, at the 10% level, that the type of insect depends on the location.',
          answer:
            'χ² ≈ 4.41, df = 2, p-value ≈ 0.110; do not reject H₀. There is not enough evidence, at the 10% level, that the type of insect depends on the location.',
        },
        {
          id: 3,
          question:
            'The table shows the mode of transport students use to get to school in four different cities. Car: Amsterdam 12, Athens 25, Houston 48, Johannesburg 24. Bus: Amsterdam 18, Athens 33, Houston 12, Johannesburg 18. Bicycle: Amsterdam 46, Athens 12, Houston 7, Johannesburg 53. Walk: Amsterdam 38, Athens 8, Houston 3, Johannesburg 21. Use a χ² test to find out whether there is evidence, at the 5% significance level, of a relationship between the mode of transport and the city. State your hypotheses and conclusion clearly.',
          type: 'Hard',
          explaination:
            'H₀: mode of transport is independent of city. H₁: mode of transport is not independent of city. Row totals (Car, Bus, Bicycle, Walk): 109, 81, 118, 70. Column totals (Amsterdam, Athens, Houston, Johannesburg): 114, 78, 70, 116. Grand total: 378. Expected frequency = (row total × column total) ÷ grand total. Expected values: Car: 32.87, 22.49, 20.19, 33.45; Bus: 24.43, 16.71, 15, 24.86; Bicycle: 35.59, 24.35, 21.85, 36.21; Walk: 21.11, 14.44, 12.96, 21.48. All expected values are at least 5. χ² = Σ(O − E)²/E ≈ 125.8. df = (4 − 1)(4 − 1) = 9. p-value ≈ 8.55 × 10⁻²³ (critical value at 5% ≈ 16.919). Since 8.55 × 10⁻²³ < 0.05, reject H₀. There is strong evidence of a relationship between the mode of transport and the city.',
          answer:
            'χ² ≈ 126, df = 9, p-value ≈ 8.55 × 10⁻²³; reject H₀. There is strong evidence of a relationship between the mode of transport and the city.',
        },
        {
          id: 4,
          question:
            'Katya wants to find out whether diet choices depend on age. She collects data from 200 pupils. Ages 11–13: vegetarian 12, vegan 32, eats meat 21. Ages 14–15: vegetarian 22, vegan 16, eats meat 30. Ages 16–19: vegetarian 26, vegan 18, eats meat 23. Conduct a χ² test for independence, using a 1% significance level. State your conclusion in context.',
          type: 'Hard',
          explaination:
            'H₀: diet choice is independent of age group. H₁: diet choice is not independent of age group. Row totals (11–13, 14–15, 16–19): 65, 68, 67. Column totals (vegetarian, vegan, eats meat): 60, 66, 74. Grand total: 200. Expected frequency = (row total × column total) ÷ grand total. Expected values: 11–13: 19.5, 21.45, 24.05; 14–15: 20.4, 22.44, 25.16; 16–19: 20.1, 22.11, 24.79. All expected values are at least 5. χ² = Σ(O − E)²/E ≈ 13.99. df = (3 − 1)(3 − 1) = 4. p-value ≈ 0.00733 (critical value at 1% ≈ 13.277). Since 0.00733 < 0.01, reject H₀. There is evidence that diet choice depends on age group.',
          answer:
            'χ² ≈ 14.0, df = 4, p-value ≈ 0.00733; reject H₀. There is evidence that diet choice depends on age group.',
        },
        {
          id: 5,
          question:
            'Katya wants to find out whether diet choices depend on age, using data from 200 pupils. She splits the 16–19 age group into two. Ages 11–13: vegetarian 12, vegan 32, eats meat 21. Ages 14–15: vegetarian 22, vegan 16, eats meat 30. Ages 16–17: vegetarian 13, vegan 12, eats meat 10. Ages 18–19: vegetarian 13, vegan 6, eats meat 13. Repeat the χ² test for independence at the 1% significance level, and state the new conclusion clearly.',
          type: 'Hard',
          explaination:
            'H₀: diet choice is independent of age group. H₁: diet choice is not independent of age group. Row totals (11–13, 14–15, 16–17, 18–19): 65, 68, 35, 32. Column totals (vegetarian, vegan, eats meat): 60, 66, 74. Grand total: 200. Expected frequency = (row total × column total) ÷ grand total. Expected values: 11–13: 19.5, 21.45, 24.05; 14–15: 20.4, 22.44, 25.16; 16–17: 10.5, 11.55, 12.95; 18–19: 9.6, 10.56, 11.84. All expected values are at least 5. χ² = Σ(O − E)²/E ≈ 15.94. df = (4 − 1)(3 − 1) = 6. p-value ≈ 0.0141 (critical value at 1% ≈ 16.812). Since 0.0141 > 0.01, do not reject H₀. There is not enough evidence that diet choice depends on age group, so the conclusion changes from the test with three age groups (which rejected H₀). Splitting the group adds degrees of freedom and raises the critical value.',
          answer:
            'χ² ≈ 15.9, df = 6, p-value ≈ 0.0141; do not reject H₀. There is not enough evidence that diet choice depends on age group, so the conclusion changes from the test with three age groups (which rejected H₀). Splitting the group adds degrees of freedom and raises the critical value.',
        },
      ],
      'one-sample-t-test': [
        {
          id: 1,
          question:
            'H₀: μ = 30, H₁: μ > 30, at the 5% significance level. A sample of data is given: 23, 29, 32, 27, 37, 38, 28. Perform a t-test to determine whether there is sufficient evidence to reject the null hypothesis. State the t-statistic and p-value.',
          type: 'Easy',
          explaination:
            'n = 7, x̄ = 214/7 ≈ 30.5714, sample standard deviation s ≈ 5.4423. t = (x̄ − μ₀)/(s/√n) = (30.5714 − 30)/(5.4423/√7) ≈ 0.278. df = 6, one-tailed (right) test, so p-value ≈ 0.395 (use the t-test on the GDC). Since 0.395 > 0.05, do not reject H₀. There is not enough evidence at the 5% level that μ > 30.',
          answer: 't ≈ 0.278, p-value ≈ 0.395; do not reject H₀',
        },
        {
          id: 2,
          question:
            'H₀: μ = 50, H₁: μ > 50, at the 5% significance level. A sample of data is given: 50, 58, 61, 46, 49, 57, 65. Perform a t-test to determine whether there is sufficient evidence to reject the null hypothesis. State the t-statistic and p-value.',
          type: 'Easy',
          explaination:
            'n = 7, x̄ = 386/7 ≈ 55.1429, sample standard deviation s ≈ 6.9625. t = (x̄ − μ₀)/(s/√n) = (55.1429 − 50)/(6.9625/√7) ≈ 1.954. df = 6, one-tailed (right) test, so p-value ≈ 0.0492 (use the t-test on the GDC). Since 0.0492 < 0.05, reject H₀. There is sufficient evidence at the 5% level that μ > 50.',
          answer: 't ≈ 1.954, p-value ≈ 0.0492; reject H₀',
        },
        {
          id: 3,
          question:
            'H₀: μ = 220, H₁: μ < 220, at the 10% significance level. A sample of data is given: 224, 209, 207, 215, 216, 222. Perform a t-test to determine whether there is sufficient evidence to reject the null hypothesis. State the t-statistic and p-value.',
          type: 'Easy',
          explaination:
            'n = 6, x̄ = 1293/6 ≈ 215.5000, sample standard deviation s ≈ 6.7750. t = (x̄ − μ₀)/(s/√n) = (215.5000 − 220)/(6.7750/√6) ≈ −1.627. df = 5, one-tailed (left) test, so p-value ≈ 0.0823 (use the t-test on the GDC). Since 0.0823 < 0.10, reject H₀. There is sufficient evidence at the 10% level that μ < 220.',
          answer: 't ≈ −1.627, p-value ≈ 0.0823; reject H₀',
        },
        {
          id: 4,
          question:
            'H₀: μ = 145, H₁: μ < 145, at the 10% significance level. A sample of data is given: 141, 143, 139, 144, 142, 150. Perform a t-test to determine whether there is sufficient evidence to reject the null hypothesis. State the t-statistic and p-value.',
          type: 'Easy',
          explaination:
            'n = 6, x̄ = 859/6 ≈ 143.1667, sample standard deviation s ≈ 3.7639. t = (x̄ − μ₀)/(s/√n) = (143.1667 − 145)/(3.7639/√6) ≈ −1.193. df = 5, one-tailed (left) test, so p-value ≈ 0.143 (use the t-test on the GDC). Since 0.143 > 0.10, do not reject H₀. There is not enough evidence at the 10% level that μ < 145.',
          answer: 't ≈ −1.193, p-value ≈ 0.143; do not reject H₀',
        },
        {
          id: 5,
          question:
            'H₀: μ = 76.2, H₁: μ ≠ 76.2, at the 2% significance level. A sample of data is given: 69.4, 78.3, 71, 75.5, 77.4, 72.9, 68.8, 73.3, 70.5. Perform a t-test to determine whether there is sufficient evidence to reject the null hypothesis. State the t-statistic and p-value.',
          type: 'Medium',
          explaination:
            'n = 9, x̄ = 657.1/9 ≈ 73.0111, sample standard deviation s ≈ 3.4396. t = (x̄ − μ₀)/(s/√n) = (73.0111 − 76.2)/(3.4396/√9) ≈ −2.781. df = 8, two-tailed test, so p-value ≈ 0.0239 (use the t-test on the GDC). Since 0.0239 > 0.02, do not reject H₀. There is not enough evidence at the 2% level that μ ≠ 76.2.',
          answer: 't ≈ −2.781, p-value ≈ 0.0239; do not reject H₀',
        },
        {
          id: 6,
          question:
            'H₀: μ = 14.7, H₁: μ ≠ 14.7, at the 2% significance level. A sample of data is given: 14.7, 13.9, 18.8, 15.5, 17.7, 15.6, 20.3, 17.5, 16.9. Perform a t-test to determine whether there is sufficient evidence to reject the null hypothesis. State the t-statistic and p-value.',
          type: 'Medium',
          explaination:
            'n = 9, x̄ = 150.9/9 ≈ 16.7667, sample standard deviation s ≈ 2.0463. t = (x̄ − μ₀)/(s/√n) = (16.7667 − 14.7)/(2.0463/√9) ≈ 3.030. df = 8, two-tailed test, so p-value ≈ 0.0163 (use the t-test on the GDC). Since 0.0163 < 0.02, reject H₀. There is sufficient evidence at the 2% level that μ ≠ 14.7.',
          answer: 't ≈ 3.030, p-value ≈ 0.0163; reject H₀',
        },
        {
          id: 7,
          question:
            'H₀: μ = 100, H₁: μ > 100, at the 10% significance level. A sample has n = 25, x̄ = 110 and s²ₙ₋₁ = 25. Using these summary statistics, perform a t-test. State the t-statistic and p-value.',
          type: 'Easy',
          explaination:
            's = √(25) = 5. t = (x̄ − μ₀)/(s/√n) = (110 − 100)/(5/√25) ≈ 10.000. df = 24, one-tailed (right) test, so p-value ≈ 2.46 × 10⁻¹⁰. Since 2.46 × 10⁻¹⁰ < 0.10, reject H₀. There is sufficient evidence at the 10% level that μ > 100.',
          answer: 't = 10, p-value ≈ 2.46 × 10⁻¹⁰; reject H₀',
        },
        {
          id: 8,
          question:
            'H₀: μ = −6, H₁: μ > −6, at the 10% significance level. A sample has n = 40, x̄ = −5 and s²ₙ₋₁ = 10. Using these summary statistics, perform a t-test. State the t-statistic and p-value.',
          type: 'Easy',
          explaination:
            's = √(10) = 3.16228. t = (x̄ − μ₀)/(s/√n) = (−5 − (−6))/(3.16228/√40) ≈ 2.000. df = 39, one-tailed (right) test, so p-value ≈ 0.0262. Since 0.0262 < 0.10, reject H₀. There is sufficient evidence at the 10% level that μ > −6.',
          answer: 't = 2, p-value ≈ 0.0262; reject H₀',
        },
        {
          id: 9,
          question:
            'H₀: μ = 0, H₁: μ < 0, at the 1% significance level. A sample has n = 60, x̄ = −0.6 and s²ₙ₋₁ = 400. Using these summary statistics, perform a t-test. State the t-statistic and p-value.',
          type: 'Medium',
          explaination:
            's = √(400) = 20. t = (x̄ − μ₀)/(s/√n) = (−0.6 − 0)/(20/√60) ≈ −0.232. df = 59, one-tailed (left) test, so p-value ≈ 0.409. Since 0.409 > 0.01, do not reject H₀. There is not enough evidence at the 1% level that μ < 0.',
          answer: 't ≈ −0.232, p-value ≈ 0.409; do not reject H₀',
        },
        {
          id: 10,
          question:
            'H₀: μ = 50, H₁: μ < 50, at the 1% significance level. A sample has n = 15, x̄ = 48 and s²ₙ₋₁ = 81. Using these summary statistics, perform a t-test. State the t-statistic and p-value.',
          type: 'Medium',
          explaination:
            's = √(81) = 9. t = (x̄ − μ₀)/(s/√n) = (48 − 50)/(9/√15) ≈ −0.861. df = 14, one-tailed (left) test, so p-value ≈ 0.202. Since 0.202 > 0.01, do not reject H₀. There is not enough evidence at the 1% level that μ < 50.',
          answer: 't ≈ −0.861, p-value ≈ 0.202; do not reject H₀',
        },
        {
          id: 11,
          question:
            'H₀: μ = 1, H₁: μ ≠ 1, at the 5% significance level. A sample has n = 10, x̄ = 1.04 and s²ₙ₋₁ = 0.25. Using these summary statistics, perform a t-test. State the t-statistic and p-value.',
          type: 'Medium',
          explaination:
            's = √(0.25) = 0.5. t = (x̄ − μ₀)/(s/√n) = (1.04 − 1)/(0.5/√10) ≈ 0.253. df = 9, two-tailed test, so p-value ≈ 0.806. Since 0.806 > 0.05, do not reject H₀. There is not enough evidence at the 5% level that μ ≠ 1.',
          answer: 't ≈ 0.253, p-value ≈ 0.806; do not reject H₀',
        },
        {
          id: 12,
          question:
            'H₀: μ = 10, H₁: μ ≠ 10, at the 5% significance level. A sample has n = 5, x̄ = 9.5 and s²ₙ₋₁ = 1/9. Using these summary statistics, perform a t-test. State the t-statistic and p-value.',
          type: 'Medium',
          explaination:
            's = √(1/9) = 1/3. t = (x̄ − μ₀)/(s/√n) = (9.5 − 10)/((1/3)/√5) ≈ −3.354. df = 4, two-tailed test, so p-value ≈ 0.0285. Since 0.0285 < 0.05, reject H₀. There is sufficient evidence at the 5% level that μ ≠ 10.',
          answer: 't ≈ −3.354, p-value ≈ 0.0285; reject H₀',
        },
      ],
      'two-sample-t-test': [
        {
          id: 1,
          question:
            'H₀: μ₁ = μ₂, H₁: μ₁ > μ₂, at the 5% significance level. Sample 1: mean = 10, variance = 4, size = 5. Sample 2: mean = 8, variance = 5, size = 6. Assuming equal population variances, perform a two-sample t-test. State the t-statistic and p-value.',
          type: 'Medium',
          explaination:
            'Pooled variance s²ₚ = ((n₁ − 1)s₁² + (n₂ − 1)s₂²)/(n₁ + n₂ − 2) = ((5 − 1)(4) + (6 − 1)(5))/9 ≈ 4.556. t = (x̄₁ − x̄₂)/√(s²ₚ(1/n₁ + 1/n₂)) = (10 − 8)/√(4.556 × (1/5 + 1/6)) ≈ 1.547. df = 5 + 6 − 2 = 9, one-tailed (right) test, so p-value ≈ 0.0781 (use the pooled two-sample t-test on the GDC). Since 0.0781 > 0.05, do not reject H₀. There is not enough evidence at the 5% level that μ₁ > μ₂.',
          answer: 't ≈ 1.547, p-value ≈ 0.0781; do not reject H₀',
        },
        {
          id: 2,
          question:
            'H₀: μ₁ = μ₂, H₁: μ₁ > μ₂, at the 2% significance level. Sample 1: mean = 100, variance = 40, size = 50. Sample 2: mean = 80, variance = 50, size = 60. Assuming equal population variances, perform a two-sample t-test. State the t-statistic and p-value.',
          type: 'Medium',
          explaination:
            'Pooled variance s²ₚ = ((n₁ − 1)s₁² + (n₂ − 1)s₂²)/(n₁ + n₂ − 2) = ((50 − 1)(40) + (60 − 1)(50))/108 ≈ 45.46. t = (x̄₁ − x̄₂)/√(s²ₚ(1/n₁ + 1/n₂)) = (100 − 80)/√(45.46 × (1/50 + 1/60)) ≈ 15.5. df = 50 + 60 − 2 = 108, one-tailed (right) test, so p-value ≈ 1.68 × 10⁻²⁹ (use the pooled two-sample t-test on the GDC). Since 1.68 × 10⁻²⁹ < 0.02, reject H₀. There is sufficient evidence at the 2% level that μ₁ > μ₂.',
          answer: 't ≈ 15.5, p-value ≈ 1.68 × 10⁻²⁹; reject H₀',
        },
        {
          id: 3,
          question:
            'H₀: μ₁ = μ₂, H₁: μ₁ < μ₂, at the 10% significance level. Sample 1: mean = 5.4, variance = 4.3, size = 48. Sample 2: mean = 5.8, variance = 3.9, size = 35. Assuming equal population variances, perform a two-sample t-test. State the t-statistic and p-value.',
          type: 'Medium',
          explaination:
            'Pooled variance s²ₚ = ((n₁ − 1)s₁² + (n₂ − 1)s₂²)/(n₁ + n₂ − 2) = ((48 − 1)(4.3) + (35 − 1)(3.9))/81 ≈ 4.132. t = (x̄₁ − x̄₂)/√(s²ₚ(1/n₁ + 1/n₂)) = (5.4 − 5.8)/√(4.132 × (1/48 + 1/35)) ≈ −0.885. df = 48 + 35 − 2 = 81, one-tailed (left) test, so p-value ≈ 0.189 (use the pooled two-sample t-test on the GDC). Since 0.189 > 0.10, do not reject H₀. There is not enough evidence at the 10% level that μ₁ < μ₂.',
          answer: 't ≈ −0.885, p-value ≈ 0.189; do not reject H₀',
        },
        {
          id: 4,
          question:
            'H₀: μ₁ = μ₂, H₁: μ₁ < μ₂, at the 10% significance level. Sample 1: mean = 12, variance = 36, size = 50. Sample 2: mean = 15, variance = 49, size = 50. Assuming equal population variances, perform a two-sample t-test. State the t-statistic and p-value.',
          type: 'Medium',
          explaination:
            'Pooled variance s²ₚ = ((n₁ − 1)s₁² + (n₂ − 1)s₂²)/(n₁ + n₂ − 2) = ((50 − 1)(36) + (50 − 1)(49))/98 ≈ 42.5. t = (x̄₁ − x̄₂)/√(s²ₚ(1/n₁ + 1/n₂)) = (12 − 15)/√(42.5 × (1/50 + 1/50)) ≈ −2.301. df = 50 + 50 − 2 = 98, one-tailed (left) test, so p-value ≈ 0.0118 (use the pooled two-sample t-test on the GDC). Since 0.0118 < 0.10, reject H₀. There is sufficient evidence at the 10% level that μ₁ < μ₂.',
          answer: 't ≈ −2.301, p-value ≈ 0.0118; reject H₀',
        },
        {
          id: 5,
          question:
            'H₀: μ₁ = μ₂, H₁: μ₁ ≠ μ₂, at the 2% significance level. Sample 1: mean = 104, variance = 81, size = 100. Sample 2: mean = 108, variance = 100, size = 100. Assuming equal population variances, perform a two-sample t-test. State the t-statistic and p-value.',
          type: 'Hard',
          explaination:
            'Pooled variance s²ₚ = ((n₁ − 1)s₁² + (n₂ − 1)s₂²)/(n₁ + n₂ − 2) = ((100 − 1)(81) + (100 − 1)(100))/198 ≈ 90.5. t = (x̄₁ − x̄₂)/√(s²ₚ(1/n₁ + 1/n₂)) = (104 − 108)/√(90.5 × (1/100 + 1/100)) ≈ −2.973. df = 100 + 100 − 2 = 198, two-tailed test, so p-value ≈ 0.00331 (use the pooled two-sample t-test on the GDC). Since 0.00331 < 0.02, reject H₀. There is sufficient evidence at the 2% level that μ₁ ≠ μ₂.',
          answer: 't ≈ −2.973, p-value ≈ 0.00331; reject H₀',
        },
        {
          id: 6,
          question:
            'H₀: μ₁ = μ₂, H₁: μ₁ ≠ μ₂, at the 5% significance level. Sample 1: mean = 150, variance = 25, size = 10. Sample 2: mean = 147, variance = 25, size = 10. Assuming equal population variances, perform a two-sample t-test. State the t-statistic and p-value.',
          type: 'Hard',
          explaination:
            'Pooled variance s²ₚ = ((n₁ − 1)s₁² + (n₂ − 1)s₂²)/(n₁ + n₂ − 2) = ((10 − 1)(25) + (10 − 1)(25))/18 ≈ 25. t = (x̄₁ − x̄₂)/√(s²ₚ(1/n₁ + 1/n₂)) = (150 − 147)/√(25 × (1/10 + 1/10)) ≈ 1.342. df = 10 + 10 − 2 = 18, two-tailed test, so p-value ≈ 0.196 (use the pooled two-sample t-test on the GDC). Since 0.196 > 0.05, do not reject H₀. There is not enough evidence at the 5% level that μ₁ ≠ μ₂.',
          answer: 't ≈ 1.342, p-value ≈ 0.196; do not reject H₀',
        },
        {
          id: 7,
          question:
            'Divya measures the masses (in kg) of a random sample of dogs from two different breeds. Breed A: 6.2, 5.1, 8.7, 12.1, 18.3, 5.4. Breed B: 12.1, 7.5, 6.3, 4.8, 11.3, 8.3, 5.9, 7.0. Is there evidence, at the 5% significance level, that the two breeds have different mean masses? You may assume that both populations are normally distributed and have equal variances.',
          type: 'Hard',
          explaination:
            'H₀: μ_A = μ_B, H₁: μ_A ≠ μ_B. Breed A: n = 6, x̄ = 55.8/6 = 9.3, s² ≈ 26.332. Breed B: n = 8, x̄ = 63.2/8 = 7.9, s² ≈ 6.643. Pooled variance s²ₚ = (5 × 26.332 + 7 × 6.643)/12 ≈ 14.847. t = (9.3 − 7.9)/√(14.847 × (1/6 + 1/8)) ≈ 0.673. df = 12, two-tailed test, so p-value ≈ 0.514. Since 0.514 > 0.05, do not reject H₀. There is not enough evidence that the two breeds have different mean masses.',
          answer:
            't ≈ 0.673, p-value ≈ 0.514; do not reject H₀. There is not enough evidence that the mean masses differ.',
        },
        {
          id: 8,
          question:
            'A teacher records the length of time (in minutes) it takes two groups of pupils to complete a writing task. Group 1: sample size 23, sample mean 18.3, estimate of population variance 12.3. Group 2: sample size 28, sample mean 20.6, estimate of population variance 15.0. The teacher uses a t-test to determine whether the first group completed the task significantly faster. State two assumptions required to use a t-test.',
          type: 'Easy',
          explaination:
            'A pooled two-sample t-test assumes that the data in each group come from a normal distribution, and that the two populations have the same variance.',
          answer:
            'Both populations are normally distributed, and both populations have equal variances.',
        },
        {
          id: 9,
          question:
            'A teacher records the length of time (in minutes) it takes two groups of pupils to complete a writing task. Group 1: sample size 23, sample mean 18.3, estimate of population variance 12.3. Group 2: sample size 28, sample mean 20.6, estimate of population variance 15.0. The teacher uses a t-test to determine whether the first group completed the task significantly faster. State the appropriate hypotheses.',
          type: 'Easy',
          explaination:
            '"Faster" means a shorter mean time, so Group 1\'s mean is less than Group 2\'s. This makes the test one-tailed (left).',
          answer: 'H₀: μ₁ = μ₂, H₁: μ₁ < μ₂',
        },
        {
          id: 10,
          question:
            'A teacher records the length of time (in minutes) it takes two groups of pupils to complete a writing task. Group 1: sample size 23, sample mean 18.3, estimate of population variance 12.3. Group 2: sample size 28, sample mean 20.6, estimate of population variance 15.0. The teacher uses a t-test to determine whether the first group completed the task significantly faster. Conduct the test and state the conclusion at the 5% significance level.',
          type: 'Hard',
          explaination:
            'H₀: μ₁ = μ₂, H₁: μ₁ < μ₂. Pooled variance s²ₚ = (22 × 12.3 + 27 × 15.0)/49 = (270.6 + 405)/49 ≈ 13.788. t = (18.3 − 20.6)/√(13.788 × (1/23 + 1/28)) = −2.3/√1.0919 ≈ −2.201. df = 49, one-tailed (left), so p-value ≈ 0.0162. Since 0.0162 < 0.05, reject H₀. There is evidence at the 5% level that Group 1 completed the task faster.',
          answer: 't ≈ −2.201, p-value ≈ 0.0162; reject H₀ at 5%: Group 1 was significantly faster',
        },
        {
          id: 11,
          question:
            'A teacher records the length of time (in minutes) it takes two groups of pupils to complete a writing task. Group 1: sample size 23, sample mean 18.3, estimate of population variance 12.3. Group 2: sample size 28, sample mean 20.6, estimate of population variance 15.0. The teacher uses a t-test to determine whether the first group completed the task significantly faster. Conduct the test and state the conclusion at the 1% significance level.',
          type: 'Hard',
          explaination:
            'H₀: μ₁ = μ₂, H₁: μ₁ < μ₂. Pooled variance s²ₚ = (22 × 12.3 + 27 × 15.0)/49 = (270.6 + 405)/49 ≈ 13.788. t = (18.3 − 20.6)/√(13.788 × (1/23 + 1/28)) = −2.3/√1.0919 ≈ −2.201. df = 49, one-tailed (left), so p-value ≈ 0.0162. Since 0.0162 > 0.01, do not reject H₀. There is not enough evidence at the 1% level that Group 1 was faster.',
          answer: 't ≈ −2.201, p-value ≈ 0.0162; do not reject H₀ at 1%',
        },
      ],
    },
  },
]

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
