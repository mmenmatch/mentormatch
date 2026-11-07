import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { findSubtopic, topics } from '../../../../../../data/ai-sl'
import { ResourceBanner } from '@/app/components/ResourceBanner/ResourceBanner'
import { AISLQuestionAndAnswer } from '../../../../../../data/ai-sl'
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
//   'number-and-algebra': {
//     'arithmetic-sequences-finding-terms': {
//       metaTitle: 'Arithmetic Progression Questions | IB AI SL ',
//       metaDescription:
//         'Arithmetic progression questions for IB Maths AI SL: find any term of an arithmetic sequence from the first term and common difference.',
//       title: 'IB Maths AI SL 1.2 Arithmetic Sequences: Finding Terms',
//       description:
//         'Arithmetic progression questions start with two values: the first term and the common difference. These arithmetic sequence questions use them to find any term you are asked for.',
//     },
//     'arithmetic-sequences-nth-term-formula': {
//       metaTitle: 'Arithmetic Sequence nth Term Formula | IB AI SL ',
//       metaDescription:
//         'Use the nth term formula of an arithmetic sequence in IB Maths AI SL: write the general term and use it to find any value in the sequence.',
//       title: 'IB Maths AI SL 1.2 Arithmetic Sequence: nth Term Formula',
//       description:
//         'Every arithmetic sequence can be written with one formula: u = u₁ + (n − 1)d. These questions ask you to build that nth term formula from given information and use it.',
//     },
//     'arithmetic-series-sum-of-terms': {
//       metaTitle: 'Arithmetic Series Formula | IB Maths AI SL ',
//       metaDescription:
//         'Apply the arithmetic series formula in IB Maths AI SL to find the sum of the first n terms, with practice on choosing the right version.',
//       title: 'IB Maths AI SL 1.2 Arithmetic Series: Sum of Terms',
//       description:
//         'The arithmetic series formula adds the terms of a sequence without listing them. These arithmetic series questions ask for the sum of the first n terms in both pure and applied settings.',
//     },
//     'bounds-and-inequalities': {
//       metaTitle: 'Upper and Lower Bounds Questions | IB AI SL ',
//       metaDescription:
//         'Upper and lower bounds questions for IB Maths AI SL: find the bounds of rounded values, write them as inequalities and use them in calculations.',
//       title: 'IB Maths AI SL 1.6 Bounds & Inequalities Questions',
//       description:
//         'A rounded measurement hides a range of possible values. These upper and lower bounds questions find that range and express it as an inequality.',
//     },
//     'percentage-error': {
//       metaTitle: 'Percentage Error Formula | IB Maths AI SL ',
//       metaDescription:
//         'Use the percentage error formula in IB Maths AI SL to compare an approximate value with the exact value, with mark scheme working.',
//       title: 'IB Maths AI SL 1.6 Percentage Error Questions',
//       description:
//         'The percentage error formula compares an approximate value with the exact one: ε = |vₐ − vₑ| ÷ |vₑ| × 100%. These questions apply it to rounding, estimation and measurement.',
//     },
//   },
//   probability: {
//     'venn-diagrams': {
//       metaTitle: 'Venn Diagram Probability Questions | IB AI SL ',
//       metaDescription:
//         'Venn diagram probability questions for IB Maths AI SL: complete the diagram, then find probabilities of unions, intersections and complements.',
//       title: 'IB Maths AI SL 4.6 Venn Diagram Questions',
//       description:
//         'A Venn diagram shows how two events overlap, and most probability questions become simple once it is filled in correctly. These Venn diagram probability questions build that skill.',
//     },
//     'tree-diagrams': {
//       metaTitle: 'Tree Diagram Probability Questions | IB AI SL ',
//       metaDescription:
//         'Tree diagram probability questions for IB Maths AI SL: draw each stage, multiply along branches and add the outcomes you need.',
//       title: 'IB Maths AI SL 4.6 Tree Diagram Questions',
//       description:
//         'A tree diagram breaks a probability problem into stages. These tree diagram probability questions ask you to draw the branches, multiply along them and combine the outcomes.',
//     },
//     'conditional-probability': {
//       metaTitle: 'Conditional Probability Questions | IB AI SL ',
//       metaDescription:
//         'Conditional probability for IB Maths AI SL: find P(A | B) from tables, Venn diagrams and tree diagrams, with mark scheme working.',
//       title: 'IB Maths AI SL 4.6 Conditional Probability Questions',
//       description:
//         'Conditional probability narrows the sample space to the outcomes you already know have happened. These conditional probability questions use tables, Venn diagrams and tree diagrams.',
//     },
//     'binomial-distribution': {
//       metaTitle: 'Binomial Distribution Questions | IB AI SL ',
//       metaDescription:
//         'Binomial distribution questions for IB Maths AI SL: check the conditions and find exact and cumulative probabilities on your GDC.',
//       title: 'IB Maths AI SL 4.8 Binomial Distribution Questions',
//       description:
//         'The binomial distribution models a fixed number of independent trials with two outcomes. These binomial distribution questions turn on one decision: P(X = k) or a cumulative probability.',
//     },
//     'binomial-distribution-mean-and-sd': {
//       metaTitle: 'Binomial Distribution Mean and Variance ',
//       metaDescription:
//         'Find the binomial distribution mean and variance in IB Maths AI SL using E(X) = np and Var(X) = np(1 − p), then the standard deviation.',
//       title: 'IB Maths AI SL 4.8 Binomial Distribution: Mean & Standard Deviation',
//       description:
//         'Two short formulas give the binomial distribution mean and variance: E(X) = np and Var(X) = np(1 − p). These questions use them, along with the standard deviation, in context.',
//     },
//   },
//   trigonometry: {
//     'sinusoidal-models-real-world-context': {
//       metaTitle: 'Sinusoidal Function Models | IB Maths AI SL ',
//       metaDescription:
//         'Model real situations with a sinusoidal function in IB Maths AI SL: tides, daylight and temperature, using amplitude, period and principal axis.',
//       title: 'IB Maths AI SL 2.5 Sinusoidal Models: Real-World Context',
//       description:
//         'A sinusoidal function models anything that repeats, from tide heights to hours of daylight. These questions apply the model to real data and interpret each parameter.',
//     },
//     'sine-rule': {
//       metaTitle: 'Sine Rule Questions: Finding Sides | IB AI SL ',
//       metaDescription:
//         'Use the sine rule in IB Maths AI SL to find a missing side in a non-right-angled triangle, with mark scheme working for every answer.',
//       title: 'IB Maths AI SL 3.2 Sine Rule Questions: Finding Sides',
//       description:
//         'The sine rule finds a missing side whenever you know an angle and its opposite side. These sine rule questions practise setting up the ratio and solving it accurately.',
//     },
//     'cosine-rule': {
//       metaTitle: 'Cosine Rule Questions: Finding Sides | IB AI SL ',
//       metaDescription:
//         'Use the cosine rule in IB Maths AI SL to find a missing side when you know two sides and the included angle, with mark scheme working.',
//       title: 'IB Maths AI SL 3.2 Cosine Rule Questions: Finding Sides',
//       description:
//         'The cosine rule finds the third side of a triangle from two sides and the angle between them. These cosine rule questions practise substituting correctly and evaluating in one step.',
//     },
//     'area-of-a-triangle': {
//       metaTitle: 'Area of a Triangle Using Sine | IB Maths AI SL ',
//       metaDescription:
//         'Find the area of a triangle using sine in IB Maths AI SL with ½ab sin C, including problems where you must find a side or angle first.',
//       title: 'IB Maths AI SL 3.2 Area of a Triangle Questions',
//       description:
//         'When a triangle has no right angle, its area comes from two sides and the angle between them. These questions find the area of a triangle using sine: A = ½ab sin C.',
//     },
//     'multi-step-trigonometry-problems': {
//       metaTitle: 'Sine and Cosine Rule Problems | IB Maths AI SL ',
//       metaDescription:
//         'Multi-step sine and cosine rule problems for IB Maths AI SL: combine both rules and triangle area in longer exam-style questions.',
//       title: 'IB Maths AI SL 3.2 Multi-Step Trigonometry Problems',
//       description:
//         'Longer questions combine the sine and cosine rule in one problem, often with an area or a second triangle. These multi-step problems practise choosing the right rule at each stage.',
//     },
//   },
//   'geometry-and-trigonometry': {
//     'bearings-and-navigation': {
//       metaTitle: 'Bearings Questions | IB Maths AI SL ',
//       metaDescription:
//         'Bearings questions for IB Maths AI SL: measure three-figure bearings clockwise from north and solve navigation problems with trigonometry.',
//       title: 'IB Maths AI SL 3.3 Bearings and Navigation Questions',
//       description:
//         'Bearings are measured clockwise from north as three-figure angles. These bearings questions combine that convention with bearings trigonometry to find distances and directions.',
//     },
//     'angles-of-elevation-and-depression': {
//       metaTitle: 'Angle of Elevation and Depression | IB AI SL ',
//       metaDescription:
//         'Angle of elevation and depression questions for IB Maths AI SL: draw the diagram, then solve with right-angled trigonometry.',
//       title: 'IB Maths AI SL 3.3 Angles of Elevation and Depression Questions',
//       description:
//         'Every angle of elevation and depression is measured from the horizontal. These angle of elevation and depression questions practise drawing the diagram and solving the triangle.',
//     },
//     'arc-length-and-sector-area': {
//       metaTitle: 'Arc Length Formula & Sector Area | IB AI SL ',
//       metaDescription:
//         'Use the arc length formula and sector area formula in IB Maths AI SL, with angles in degrees and mark scheme working for each answer.',
//       title: 'IB Maths AI SL 3.4 Arc Length & Sector Area Questions',
//       description:
//         'The arc length formula takes a fraction of the circumference: l = (θ/360) × 2πr. These questions apply it alongside the sector area formula.',
//     },
//     'arc-length-and-sector-area-finding-radius': {
//       metaTitle: 'Area of a Sector: Finding the Radius | IB AI SL ',
//       metaDescription:
//         'Work backwards from the area of a sector or an arc length to find the radius in IB Maths AI SL, with mark scheme working.',
//       title: 'IB Maths AI SL 3.4 Arc Length & Sector Area: Finding the Radius',
//       description:
//         'These questions reverse the usual process: you are given the area of a sector or an arc length and must find the radius.',
//     },
//     'arc-length-and-sector-area-finding-angle': {
//       metaTitle: 'Arc Length Questions: Finding θ | IB AI SL ',
//       metaDescription:
//         'Arc length questions for IB Maths AI SL that ask for the angle at the centre, given the arc length or sector area and the radius.',
//       title: 'IB Maths AI SL 3.4 Arc Length & Sector Area: Finding the Angle',
//       description:
//         'When the radius and the arc length are known, the angle at the centre follows from one rearrangement. These arc length questions practise finding it.',
//     },
//   },
//   'statistical-testing': {
//     'chi-squared-goodness-of-fit': {
//       metaTitle: 'Chi Square Goodness of Fit Questions | IB AI SL ',
//       metaDescription:
//         'Chi square goodness of fit questions for IB Maths AI SL: state hypotheses, find expected frequencies and draw a conclusion from the p-value.',
//       title: 'IB Maths AI SL 4.11 Chi-Squared Goodness of Fit Questions',
//       description:
//         'A chi square goodness of fit test asks whether observed data match an expected distribution. These questions take you through every stage, from hypotheses to conclusion.',
//     },
//     'chi-squared-test-for-independence': {
//       metaTitle: 'Chi Square Test for Independence | IB AI SL ',
//       metaDescription:
//         'Chi square test for independence questions for IB Maths AI SL: expected frequencies, degrees of freedom and conclusions in context.',
//       title: 'IB Maths AI SL 4.11 Chi-Squared Test for Independence Questions',
//       description:
//         'The chi square test for independence asks whether two variables in a contingency table are related. These questions practise expected frequencies, degrees of freedom and conclusions.',
//     },
//     'chi-squared-test-for-independence-full-test': {
//       metaTitle: 'Chi Square Test Questions: Full Test | IB AI SL ',
//       metaDescription:
//         'Full chi square test questions for IB Maths AI SL, from hypotheses to conclusion, set out the way the mark scheme expects.',
//       title: 'IB Maths AI SL 4.11 Chi-Squared Test for Independence: Full Test',
//       description:
//         'These chi square test questions take a test for independence from start to finish, in the order the mark scheme rewards: hypotheses, expected values, statistic, p-value, conclusion.',
//     },
//     'one-sample-t-test': {
//       metaTitle: 'One-Sample t Test Questions | IB Maths AI SL ',
//       metaDescription:
//         'One-sample t test questions for IB Maths AI SL: test a population mean, find the p-value on your GDC and conclude in context.',
//       title: 'IB Maths AI SL 4.11 One-Sample t-Test Questions',
//       description:
//         'A one-sample t test compares a sample mean with a claimed population mean when the population standard deviation is unknown. These t test questions practise the full method.',
//     },
//     'two-sample-t-test': {
//       metaTitle: 'Two-Sample t Test Questions | IB AI SL ',
//       metaDescription:
//         'Two-sample t test questions for IB Maths AI SL: compare the means of two independent groups, find the p-value and conclude in context.',
//       title: 'IB Maths AI SL 4.11 Two-Sample t-Test Questions',
//       description:
//         'A two-sample t test asks whether two independent groups have different population means. These t test questions set up the hypotheses and interpret the result.',
//     },
//   },
// }

export const metaData: any = {
  'number-and-algebra': {
    'arithmetic-sequences-finding-terms': {
      metaTitle: 'Arithmetic Progression Questions | IB AI SL ',
      metaDescription:
        'Arithmetic progression questions for IB Maths AI SL: find any term of an arithmetic sequence from the first term and common difference.',
      title: 'IB Maths AI SL 1.2 Arithmetic Sequences: Finding Terms',
      description:
        'Arithmetic progression questions start with two values: the first term and the common difference. These arithmetic sequence questions use them to find any term you are asked for.',
    },
    'arithmetic-sequences-nth-term-formula': {
      metaTitle: 'Arithmetic Sequence nth Term Formula | IB AI SL ',
      metaDescription:
        'Use the nth term formula of an arithmetic sequence in IB Maths AI SL: write the general term and use it to find any value in the sequence.',
      title: 'IB Maths AI SL 1.2 Arithmetic Sequence: nth Term Formula',
      description:
        'Every arithmetic sequence can be written with one formula: u = u₁ + (n − 1)d. These questions ask you to build that nth term formula from given information and use it.',
    },
    'arithmetic-series-sum-of-terms': {
      metaTitle: 'Arithmetic Series Formula | IB Maths AI SL ',
      metaDescription:
        'Apply the arithmetic series formula in IB Maths AI SL to find the sum of the first n terms, with practice on choosing the right version.',
      title: 'IB Maths AI SL 1.2 Arithmetic Series: Sum of Terms',
      description:
        'The arithmetic series formula adds the terms of a sequence without listing them. These arithmetic series questions ask for the sum of the first n terms in both pure and applied settings.',
    },
    'bounds-and-inequalities': {
      metaTitle: 'Upper and Lower Bounds Questions | IB AI SL ',
      metaDescription:
        'Upper and lower bounds questions for IB Maths AI SL: find the bounds of rounded values, write them as inequalities and use them in calculations.',
      title: 'IB Maths AI SL 1.6 Bounds & Inequalities Questions',
      description:
        'A rounded measurement hides a range of possible values. These upper and lower bounds questions find that range and express it as an inequality.',
    },
    'percentage-error': {
      metaTitle: 'Percentage Error Formula | IB Maths AI SL ',
      metaDescription:
        'Use the percentage error formula in IB Maths AI SL to compare an approximate value with the exact value, with mark scheme working.',
      title: 'IB Maths AI SL 1.6 Percentage Error Questions',
      description:
        'The percentage error formula compares an approximate value with the exact one: ε = |vₐ − vₑ| ÷ |vₑ| × 100%. These questions apply it to rounding, estimation and measurement.',
    },
  },
  probability: {
    'venn-diagrams': {
      metaTitle: 'Venn Diagram Probability Questions | IB AI SL ',
      metaDescription:
        'Venn diagram probability questions for IB Maths AI SL: complete the diagram, then find probabilities of unions, intersections and complements.',
      title: 'IB Maths AI SL 4.6 Venn Diagram Questions',
      description:
        'A Venn diagram shows how two events overlap, and most probability questions become simple once it is filled in correctly. These Venn diagram probability questions build that skill.',
    },
    'tree-diagrams': {
      metaTitle: 'Tree Diagram Probability Questions | IB AI SL ',
      metaDescription:
        'Tree diagram probability questions for IB Maths AI SL: draw each stage, multiply along branches and add the outcomes you need.',
      title: 'IB Maths AI SL 4.6 Tree Diagram Questions',
      description:
        'A tree diagram breaks a probability problem into stages. These tree diagram probability questions ask you to draw the branches, multiply along them and combine the outcomes.',
    },
    'conditional-probability': {
      metaTitle: 'Conditional Probability Questions | IB AI SL ',
      metaDescription:
        'Conditional probability for IB Maths AI SL: find P(A | B) from tables, Venn diagrams and tree diagrams, with mark scheme working.',
      title: 'IB Maths AI SL 4.6 Conditional Probability Questions',
      description:
        'Conditional probability narrows the sample space to the outcomes you already know have happened. These conditional probability questions use tables, Venn diagrams and tree diagrams.',
    },
    'binomial-distribution': {
      metaTitle: 'Binomial Distribution Questions | IB AI SL ',
      metaDescription:
        'Binomial distribution questions for IB Maths AI SL: check the conditions and find exact and cumulative probabilities on your GDC.',
      title: 'IB Maths AI SL 4.8 Binomial Distribution Questions',
      description:
        'The binomial distribution models a fixed number of independent trials with two outcomes. These binomial distribution questions turn on one decision: P(X = k) or a cumulative probability.',
    },
    'binomial-distribution-mean-and-sd': {
      metaTitle: 'Binomial Distribution Mean and Variance ',
      metaDescription:
        'Find the binomial distribution mean and variance in IB Maths AI SL using E(X) = np and Var(X) = np(1 − p), then the standard deviation.',
      title: 'IB Maths AI SL 4.8 Binomial Distribution: Mean & Standard Deviation',
      description:
        'Two short formulas give the binomial distribution mean and variance: E(X) = np and Var(X) = np(1 − p). These questions use them, along with the standard deviation, in context.',
    },
  },
  trigonometry: {
    'sinusoidal-models-real-world-context': {
      metaTitle: 'Sinusoidal Function Models | IB Maths AI SL ',
      metaDescription:
        'Model real situations with a sinusoidal function in IB Maths AI SL: tides, daylight and temperature, using amplitude, period and principal axis.',
      title: 'IB Maths AI SL 2.5 Sinusoidal Models: Real-World Context',
      description:
        'A sinusoidal function models anything that repeats, from tide heights to hours of daylight. These questions apply the model to real data and interpret each parameter.',
    },
    'sine-rule': {
      metaTitle: 'Sine Rule Questions: Finding Sides | IB AI SL ',
      metaDescription:
        'Use the sine rule in IB Maths AI SL to find a missing side in a non-right-angled triangle, with mark scheme working for every answer.',
      title: 'IB Maths AI SL 3.2 Sine Rule Questions: Finding Sides',
      description:
        'The sine rule finds a missing side whenever you know an angle and its opposite side. These sine rule questions practise setting up the ratio and solving it accurately.',
    },
    'cosine-rule': {
      metaTitle: 'Cosine Rule Questions: Finding Sides | IB AI SL ',
      metaDescription:
        'Use the cosine rule in IB Maths AI SL to find a missing side when you know two sides and the included angle, with mark scheme working.',
      title: 'IB Maths AI SL 3.2 Cosine Rule Questions: Finding Sides',
      description:
        'The cosine rule finds the third side of a triangle from two sides and the angle between them. These cosine rule questions practise substituting correctly and evaluating in one step.',
    },
    'area-of-a-triangle': {
      metaTitle: 'Area of a Triangle Using Sine | IB Maths AI SL ',
      metaDescription:
        'Find the area of a triangle using sine in IB Maths AI SL with ½ab sin C, including problems where you must find a side or angle first.',
      title: 'IB Maths AI SL 3.2 Area of a Triangle Questions',
      description:
        'When a triangle has no right angle, its area comes from two sides and the angle between them. These questions find the area of a triangle using sine: A = ½ab sin C.',
    },
    'multi-step-trigonometry-problems': {
      metaTitle: 'Sine and Cosine Rule Problems | IB Maths AI SL ',
      metaDescription:
        'Multi-step sine and cosine rule problems for IB Maths AI SL: combine both rules and triangle area in longer exam-style questions.',
      title: 'IB Maths AI SL 3.2 Multi-Step Trigonometry Problems',
      description:
        'Longer questions combine the sine and cosine rule in one problem, often with an area or a second triangle. These multi-step problems practise choosing the right rule at each stage.',
    },
  },
  'geometry-and-trigonometry': {
    'bearings-and-navigation': {
      metaTitle: 'Bearings Questions | IB Maths AI SL ',
      metaDescription:
        'Bearings questions for IB Maths AI SL: measure three-figure bearings clockwise from north and solve navigation problems with trigonometry.',
      title: 'IB Maths AI SL 3.3 Bearings and Navigation Questions',
      description:
        'Bearings are measured clockwise from north as three-figure angles. These bearings questions combine that convention with bearings trigonometry to find distances and directions.',
    },
    'angles-of-elevation-and-depression': {
      metaTitle: 'Angle of Elevation and Depression | IB AI SL ',
      metaDescription:
        'Angle of elevation and depression questions for IB Maths AI SL: draw the diagram, then solve with right-angled trigonometry.',
      title: 'IB Maths AI SL 3.3 Angles of Elevation and Depression Questions',
      description:
        'Every angle of elevation and depression is measured from the horizontal. These angle of elevation and depression questions practise drawing the diagram and solving the triangle.',
    },
    'arc-length-and-sector-area': {
      metaTitle: 'Arc Length Formula & Sector Area | IB AI SL ',
      metaDescription:
        'Use the arc length formula and sector area formula in IB Maths AI SL, with angles in degrees and mark scheme working for each answer.',
      title: 'IB Maths AI SL 3.4 Arc Length & Sector Area Questions',
      description:
        'The arc length formula takes a fraction of the circumference: l = (θ/360) × 2πr. These questions apply it alongside the sector area formula.',
    },
    'arc-length-and-sector-area-finding-radius': {
      metaTitle: 'Area of a Sector: Finding the Radius | IB AI SL ',
      metaDescription:
        'Work backwards from the area of a sector or an arc length to find the radius in IB Maths AI SL, with mark scheme working.',
      title: 'IB Maths AI SL 3.4 Arc Length & Sector Area: Finding the Radius',
      description:
        'These questions reverse the usual process: you are given the area of a sector or an arc length and must find the radius.',
    },
    'arc-length-and-sector-area-finding-angle': {
      metaTitle: 'Arc Length Questions: Finding θ | IB AI SL ',
      metaDescription:
        'Arc length questions for IB Maths AI SL that ask for the angle at the centre, given the arc length or sector area and the radius.',
      title: 'IB Maths AI SL 3.4 Arc Length & Sector Area: Finding the Angle',
      description:
        'When the radius and the arc length are known, the angle at the centre follows from one rearrangement. These arc length questions practise finding it.',
    },
  },
  'statistical-testing': {
    'chi-squared-goodness-of-fit': {
      metaTitle: 'Chi Square Goodness of Fit Questions | IB AI SL ',
      metaDescription:
        'Chi square goodness of fit questions for IB Maths AI SL: state hypotheses, find expected frequencies and draw a conclusion from the p-value.',
      title: 'IB Maths AI SL 4.11 Chi-Squared Goodness of Fit Questions',
      description:
        'A chi square goodness of fit test asks whether observed data match an expected distribution. These questions take you through every stage, from hypotheses to conclusion.',
    },
    'chi-squared-test-for-independence': {
      metaTitle: 'Chi Square Test for Independence | IB AI SL ',
      metaDescription:
        'Chi square test for independence questions for IB Maths AI SL: expected frequencies, degrees of freedom and conclusions in context.',
      title: 'IB Maths AI SL 4.11 Chi-Squared Test for Independence Questions',
      description:
        'The chi square test for independence asks whether two variables in a contingency table are related. These questions practise expected frequencies, degrees of freedom and conclusions.',
    },
    'chi-squared-test-for-independence-full-test': {
      metaTitle: 'Chi Square Test Questions: Full Test | IB AI SL ',
      metaDescription:
        'Full chi square test questions for IB Maths AI SL, from hypotheses to conclusion, set out the way the mark scheme expects.',
      title: 'IB Maths AI SL 4.11 Chi-Squared Test for Independence: Full Test',
      description:
        'These chi square test questions take a test for independence from start to finish, in the order the mark scheme rewards: hypotheses, expected values, statistic, p-value, conclusion.',
    },
    'one-sample-t-test': {
      metaTitle: 'One-Sample t Test Questions | IB Maths AI SL ',
      metaDescription:
        'One-sample t test questions for IB Maths AI SL: test a population mean, find the p-value on your GDC and conclude in context.',
      title: 'IB Maths AI SL 4.11 One-Sample t-Test Questions',
      description:
        'A one-sample t test compares a sample mean with a claimed population mean when the population standard deviation is unknown. These t test questions practise the full method.',
    },
    'two-sample-t-test': {
      metaTitle: 'Two-Sample t Test Questions | IB AI SL ',
      metaDescription:
        'Two-sample t test questions for IB Maths AI SL: compare the means of two independent groups, find the p-value and conclude in context.',
      title: 'IB Maths AI SL 4.11 Two-Sample t-Test Questions',
      description:
        'A two-sample t test asks whether two independent groups have different population means. These t test questions set up the hypotheses and interpret the result.',
    },
  },

  // 6. Sequences & Series
  'sequences-series': {
    'geometric-sequences-nth-term': {
      metaTitle: 'Geometric Sequence Formula Questions | IB AI SL  ',
      metaDescription:
        'Use the geometric sequence formula in IB Maths AI SL to find any term, including algebraic sequences, decay models and bouncing balls.',
      title: 'IB Maths AI SL Geometric Sequences: nth Term',
      description:
        'The geometric sequence formula, uₙ = u₁rⁿ⁻¹, finds any term from the first term and the common ratio, in pure and real-world questions.',
      questionTitle: 'Geometric Sequences – nth Term: Questions & Answers',
      questionDescription:
        'Identify u₁ and r, substitute into the formula, and for percentage decay turn the percentage into a ratio first, such as 0.8 for a 20% decrease. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },

    'finding-first-term-common-ratio': {
      metaTitle: 'Finding the First Term and Common Ratio | AI SL  ',
      metaDescription:
        'Practise finding the first term and common ratio of a geometric sequence in IB Maths AI SL from two given terms.',
      title: 'IB Maths AI SL Finding First Term and Common Ratio',
      description:
        'Finding the first term and common ratio from two terms means writing each as u₁rⁿ⁻¹ and dividing.',
      questionTitle: 'Finding First Term & Common Ratio: Questions & Answers',
      questionDescription:
        'Divide the later term by the earlier one to find a power of r, take the root (including any negative value), then substitute back for u₁. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },

    'number-of-terms-in-geometric-sequence': {
      metaTitle: 'Number of Terms in a Geometric Sequence | AI SL  ',
      metaDescription:
        'Find the number of terms in a geometric sequence in IB Maths AI SL from its last term, and the ratio from a given sum.',
      title: 'IB Maths AI SL Number of Terms in a Geometric Sequence',
      description:
        'The number of terms in a geometric sequence comes from solving u₁rⁿ⁻¹ = uₙ for n, using logarithms or technology.',
      questionTitle: 'Number of Terms in Geometric Sequence: Questions & Answers',
      questionDescription:
        'Set up the equation, solve for n with your GDC or logarithms, and check that n is a whole number. Questions follow syllabus section SL 1.3, SL 1.8. Every question comes with the mark scheme working.',
    },

    'sum-of-geometric-series': {
      metaTitle: 'Sum of Geometric Series Formula | IB AI SL  ',
      metaDescription:
        'Use the sum of geometric series formula in IB Maths AI SL to find Sₙ from the first term and the common ratio.',
      title: 'IB Maths AI SL Sum of a Geometric Series',
      description:
        'The sum of geometric series formula, Sₙ = u₁(rⁿ − 1)/(r − 1), adds the first n terms in one step.',
      questionTitle: 'Sum of Geometric Series: Questions & Answers',
      questionDescription:
        'Identify u₁, r and n, substitute carefully, and use technology to check the total. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },

    'sigma-notation-geometric-series': {
      metaTitle: 'Sigma Notation Examples | IB Maths AI SL  ',
      metaDescription:
        'Sigma notation examples for IB Maths AI SL: evaluate geometric sums, simplify the general term and use a recurrence relation.',
      title: 'IB Maths AI SL Sigma Notation: Geometric Series',
      description:
        'These sigma notation examples write a geometric series compactly. Each one is evaluated by reading the first term, ratio and number of terms.',
      questionTitle: 'Sigma Notation – Geometric Series: Questions & Answers',
      questionDescription:
        'Write out the first terms to find u₁ and r, simplify the general term where you can, then use the sum formula or your GDC. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },

    'finding-common-ratio-from-two-terms': {
      metaTitle: 'Common Ratio from Two Terms | IB Maths AI SL  ',
      metaDescription:
        'Find the common ratio from two terms of a geometric sequence in IB Maths AI SL, then use it to find the first term and later terms.',
      title: 'IB Maths AI SL Finding the Common Ratio from Two Terms',
      description: 'The common ratio from two terms comes from dividing them: u₅ ÷ u₂ = r³.',
      questionTitle: 'Finding Common Ratio from Two Terms: Questions & Answers',
      questionDescription:
        'Divide the terms, take the cube root, then use the ratio to find the first term and any later term. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },

    'geometric-growth-real-world': {
      metaTitle: 'Geometric Growth Questions | IB Maths AI SL  ',
      metaDescription:
        'Geometric growth in IB Maths AI SL: algae on a pond and the grains-of-wheat chessboard legend, modelled with geometric sequences.',
      title: 'IB Maths AI SL Geometric Growth in the Real World',
      description:
        'Geometric growth multiplies by the same factor each step. These questions model algae spreading on a pond and the famous chessboard legend.',
      questionTitle: 'Geometric Growth – Real World: Questions & Answers',
      questionDescription:
        'Identify the growth factor, write the nth term or sum, and interpret very large results in context. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },

    'ratio-of-sum-to-first-term': {
      metaTitle: 'Ratio of Sum to First Term | IB Maths AI SL  ',
      metaDescription:
        'Find the ratio of sum to first term in IB Maths AI SL when the fifth term is eight times the second term.',
      title: 'IB Maths AI SL Ratio of Sum to First Term',
      description:
        'This question finds the ratio of sum to first term, S₈ ÷ u₁, without knowing the first term.',
      questionTitle: 'Ratio of Sum to First Term: Questions & Answers',
      questionDescription:
        'Use u₅ = 8u₂ to find r, write S₈ in terms of u₁, and divide so u₁ cancels. Questions follow syllabus section SL 1.3. Every question comes with the mark scheme working.',
    },
  },

  // 7. Financial Mathematics
  'financial-mathematics': {
    'compound-interest-future-value': {
      metaTitle: 'Compound Interest Formula Questions | IB AI SL  ',
      metaDescription:
        'Use the compound interest formula in IB Maths AI SL to find the final value of an investment compounded annually.',
      title: 'IB Maths AI SL Compound Interest: Future Value',
      description:
        'The compound interest formula, FV = PV(1 + r/100)ⁿ, finds what an investment grows to when interest is added each year.',
      questionTitle: 'Compound Interest – Future Value: Questions & Answers',
      questionDescription:
        'Substitute the present value, rate and number of years, or use the TVM solver on your GDC, as in the compound interest formula examples. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    'compound-interest-finding-time': {
      metaTitle: 'Compound Interest Time Formula | IB Maths AI SL  ',
      metaDescription:
        'Use the compound interest time formula in IB Maths AI SL to find how many years an investment takes to reach a target.',
      title: 'IB Maths AI SL Compound Interest: Finding Time',
      description:
        'The compound interest time formula rearranges FV = PV(1 + r)ⁿ for n, using logarithms or the TVM solver.',
      questionTitle: 'Compound Interest – Finding Time: Questions & Answers',
      questionDescription:
        'Solve for n with your GDC, then round up to the next whole year, since interest is added only at the end of each year. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    'compound-interest-finding-rate': {
      metaTitle: 'Compound Interest Rate Formula | IB Maths AI SL  ',
      metaDescription:
        'Use the compound interest rate formula in IB Maths AI SL to find the annual rate needed for an investment to reach its target.',
      title: 'IB Maths AI SL Compound Interest: Finding the Rate',
      description:
        'The compound interest rate formula finds r when the start value, end value and time are known.',
      questionTitle: 'Compound Interest – Finding Rate: Questions & Answers',
      questionDescription:
        'Rearrange FV = PV(1 + r/100)ⁿ or use the TVM solver, and give the rate to the accuracy asked for. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    depreciation: {
      metaTitle: 'Depreciation Formula Questions | IB Maths AI SL  ',
      metaDescription:
        "Use the depreciation formula in IB Maths AI SL to find an asset's value after several years, including changing rates.",
      title: 'IB Maths AI SL Depreciation',
      description:
        'The depreciation formula is compound interest in reverse: the value falls by the same percentage each year.',
      questionTitle: 'Depreciation: Questions & Answers',
      questionDescription:
        'Use FV = PV(1 − r/100)ⁿ, and when the rate changes after the first year, apply each rate for its own period. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    'inflation-real-value-of-cash': {
      metaTitle: 'Real Value and Inflation | IB Maths AI SL  ',
      metaDescription:
        'Find the real value of cash after inflation in IB Maths AI SL, relative to its value at the start, when no interest is earned.',
      title: 'IB Maths AI SL Inflation: Real Value of Cash',
      description:
        'Real value under inflation measures what money can buy. Cash that earns no interest loses real value every year.',
      questionTitle: 'Inflation – Real Value of Cash: Questions & Answers',
      questionDescription:
        "Divide by (1 + i/100) for each year of inflation to find the real value in today's terms. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.",
    },

    'inflation-real-value-of-investment': {
      metaTitle: 'Inflation Adjusted Return | IB Maths AI SL  ',
      metaDescription:
        'Find the inflation adjusted return on an investment in IB Maths AI SL when interest and inflation both apply.',
      title: 'IB Maths AI SL Inflation: Real Value of an Investment',
      description:
        'An inflation adjusted return combines growth from interest with the loss of buying power from inflation.',
      questionTitle: 'Inflation – Real Value of Investment: Questions & Answers',
      questionDescription:
        "Use a real rate of approximately r − i, or apply interest and inflation separately, and state your answer in today's money. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.",
    },

    'compound-interest-application': {
      metaTitle: 'Compound Interest Word Problems | IB AI SL  ',
      metaDescription:
        'Compound interest word problems for IB Maths AI SL: a savings account and a seven-year loan with no repayments.',
      title: 'IB Maths AI SL Compound Interest in Context',
      description:
        'These compound interest word problems use the same formula for savings and for debt.',
      questionTitle: 'Compound Interest Application: Questions & Answers',
      questionDescription:
        'Identify the present value, rate and time from the context, then calculate the future value and interpret it. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    'compound-interest-non-annual-compounding': {
      metaTitle: 'Compound Interest Monthly Formula | IB AI SL  ',
      metaDescription:
        'Use the compound interest monthly formula in IB Maths AI SL for savings and loans compounded more than once a year.',
      title: 'IB Maths AI SL Compound Interest: Non-Annual Compounding',
      description:
        'The compound interest monthly formula divides the annual rate by 12 and multiplies the years by 12.',
      questionTitle: 'Compound Interest – Non-annual Compounding: Questions & Answers',
      questionDescription:
        'For compound interest monthly, use FV = PV(1 + r/(100k))ᵏⁿ with k = 12, or set C/Y = 12 on the TVM solver. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    'compound-interest-comparing-compounding-periods': {
      metaTitle: 'Compounding Periods | IB Maths AI SL  ',
      metaDescription:
        'Compare compounding periods in IB Maths AI SL: is annual, quarterly or monthly compounding better for the same rate?',
      title: 'IB Maths AI SL Comparing Compounding Periods',
      description:
        'Compounding periods change the return: interest added more often earns interest sooner.',
      questionTitle: 'Compound Interest – Comparing Compounding Periods: Questions & Answers',
      questionDescription:
        'Calculate the final value for each period with the same nominal rate, compare, and explain the difference. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    'depreciation-reducing-balance-table': {
      metaTitle: 'Reducing Balance Depreciation | IB Maths AI SL  ',
      metaDescription:
        'Reducing balance depreciation in IB Maths AI SL: complete a depreciation table for a machine down to its scrap value.',
      title: 'IB Maths AI SL Depreciation: Reducing Balance Table',
      description:
        'Reducing balance depreciation takes the same percentage off the remaining value each year, so the amount lost shrinks over time.',
      questionTitle: 'Depreciation – Reducing Balance Table: Questions & Answers',
      questionDescription:
        'Find the annual rate from the reducing balance depreciation formula, then fill in the table year by year. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    'inflation-real-return-on-investment': {
      metaTitle: 'Real Rate of Return Formula | IB Maths AI SL  ',
      metaDescription:
        "Use the real rate of return formula in IB Maths AI SL to compare an account's interest with inflation over five years.",
      title: 'IB Maths AI SL Inflation: Real Return on Investment',
      description:
        'The real rate of return formula subtracts inflation from the interest rate to show genuine growth.',
      questionTitle: 'Inflation – Real Return on Investment: Questions & Answers',
      questionDescription:
        'Find the real rate, apply it over the period, and state the real value of the investment. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    'effective-annual-rate-ear': {
      metaTitle: 'Effective Annual Rate Formula | IB Maths AI SL  ',
      metaDescription:
        'Use the effective annual rate formula in IB Maths AI SL: the true yearly rate of a loan at 12% compounded monthly.',
      title: 'IB Maths AI SL Effective Annual Rate',
      description:
        'The effective annual rate formula shows the true yearly cost of interest compounded more than once a year.',
      questionTitle: 'Effective Annual Rate (EAR): Questions & Answers',
      questionDescription:
        'Calculate (1 + r/k)ᵏ − 1 with k periods, and give the answer as a percentage. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    'inflation-real-terms-growth': {
      metaTitle: 'Real Terms Growth | IB Maths AI SL  ',
      metaDescription:
        'Real terms growth in IB Maths AI SL: education spending rising 5% a year while inflation runs at 2.5%.',
      title: 'IB Maths AI SL Inflation: Real Terms Growth',
      description:
        'Real terms growth is the increase left after inflation. A 5% rise with 2.5% inflation is a smaller real increase.',
      questionTitle: 'Inflation – Real Terms Growth: Questions & Answers',
      questionDescription:
        'Find the real rate of increase, apply it over the years given, and compare with the nominal figure. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    hyperinflation: {
      metaTitle: 'Hyperinflation Examples | IB Maths AI SL  ',
      metaDescription:
        'Hyperinflation examples for IB Maths AI SL: Germany in 1923, when prices rose by around 10¹¹% a year.',
      title: 'IB Maths AI SL Hyperinflation',
      description:
        'Among hyperinflation examples, Germany in 1923 is the most famous: prices rose so fast that savings became worthless.',
      questionTitle: 'Hyperinflation: Questions & Answers',
      questionDescription:
        'Convert the inflation rate to a multiplier, apply it over the time given, and work with standard form for the very large numbers. Questions follow syllabus section SL 1.4. Every question comes with the mark scheme working.',
    },

    'loan-repayments-amortisation': {
      metaTitle: 'Amortisation: Loan Repayments | IB Maths AI SL  ',
      metaDescription:
        'Amortisation in IB Maths AI SL: find the regular payments needed to repay a loan with annual or monthly compounding.',
      title: 'IB Maths AI SL Loan Repayments and Amortisation',
      description:
        'Amortisation spreads a loan into equal repayments that cover the interest and the borrowed amount.',
      questionTitle: 'Loan Repayments (Amortisation): Questions & Answers',
      questionDescription:
        'Use the TVM solver with the loan as PV and FV = 0; an amortisation table shows the loan repayment formula at work year by year. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },

    'maximum-loan-amount': {
      metaTitle: 'Maximum Loan Amount | IB Maths AI SL  ',
      metaDescription:
        'Find the maximum loan amount in IB Maths AI SL from the largest monthly repayment a borrower can afford.',
      title: 'IB Maths AI SL Maximum Loan Amount',
      description:
        'The maximum loan amount is the present value of the payments a borrower can afford.',
      questionTitle: 'Maximum Loan Amount: Questions & Answers',
      questionDescription:
        'Enter the payment, rate and term in the TVM solver and solve for PV. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },

    'annuity-payments-from-investment': {
      metaTitle: 'Annuity Formula Questions | IB Maths AI SL  ',
      metaDescription:
        'Use the annuity formula in IB Maths AI SL to find regular withdrawals from an investment, and how long they last.',
      title: 'IB Maths AI SL Annuities: Payments and Duration',
      description:
        'An annuity pays a regular amount from an investment until it runs out. The annuity formula links the payment, rate and time.',
      questionTitle: 'Annuity Payments from Investment: Questions & Answers',
      questionDescription:
        'Use the TVM solver with the investment as PV and FV = 0, solving for PMT or for N as the question requires. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },

    'future-value-savings-annuity': {
      metaTitle: 'Future Value of Annuity Formula | IB AI SL  ',
      metaDescription:
        'Use the future value of annuity formula in IB Maths AI SL for regular savings paid in at the start of each year.',
      title: 'IB Maths AI SL Savings Annuity: Future Value',
      description:
        'The future value of annuity formula adds regular deposits and the interest each one earns.',
      questionTitle: 'Future Value / Savings Annuity: Questions & Answers',
      questionDescription:
        'Enter the deposit as PMT, set payments at the beginning of each period if needed, and solve for the future value of annuity. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },

    'loan-repayments-comparison': {
      metaTitle: 'Loan Comparison | IB Maths AI SL  ',
      metaDescription:
        'Loan comparison in IB Maths AI SL: two repayment options for the same loan, compared by monthly payment and total cost.',
      title: 'IB Maths AI SL Loan Repayments: Comparison',
      description:
        'A loan comparison looks at both the monthly payment and the total paid, since a lower payment can cost more overall.',
      questionTitle: 'Loan Repayments / Comparison: Questions & Answers',
      questionDescription:
        'Find the payment for each option with the TVM solver, multiply by the number of payments, and compare. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },

    'variable-rate-loan-amortisation': {
      metaTitle: 'Variable Rate Loan | IB Maths AI SL  ',
      metaDescription:
        'A variable rate loan in IB Maths AI SL: find the balance after the first rate period, then the time to finish repaying.',
      title: 'IB Maths AI SL Variable-Rate Loan',
      description:
        'A variable rate loan changes its interest rate partway through, so it is solved in stages.',
      questionTitle: 'Variable-Rate Loan / Amortisation: Questions & Answers',
      questionDescription:
        'Find the balance at the end of the first period, use it as the new PV at the new rate, and solve for the remaining time. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },

    'mortgage-comparison': {
      metaTitle: 'Mortgage Comparison | IB Maths AI SL  ',
      metaDescription:
        'Mortgage comparison in IB Maths AI SL: two mortgage offers with different rates and terms, compared by payment and total cost.',
      title: 'IB Maths AI SL Mortgage Comparison',
      description: 'A mortgage comparison weighs a lower rate against a different term or fee.',
      questionTitle: 'Mortgage Comparison: Questions & Answers',
      questionDescription:
        'Calculate each monthly payment and total repaid, then explain which mortgage is better and why. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },

    'variable-rate-loan-affordability': {
      metaTitle: 'Loan Affordability | IB Maths AI SL  ',
      metaDescription:
        "Loan affordability in IB Maths AI SL: test whether a car loan with set repayment rules fits a borrower's budget.",
      title: 'IB Maths AI SL Variable-Rate Loan: Affordability',
      description:
        "Loan affordability depends on whether the required repayment stays within a budget under the loan's terms.",
      questionTitle: 'Variable-Rate Loan / Affordability: Questions & Answers',
      questionDescription:
        'Calculate the payment under the stated terms, compare it with the budget, and justify the conclusion. Questions follow syllabus section SL 1.7. Every question comes with the mark scheme working.',
    },

    'investment-and-interest': {
      metaTitle: 'Simultaneous Equations Word Problems | IB AI SL  ',
      metaDescription:
        'Simultaneous equations word problems for IB Maths AI SL: split an investment across three accounts with different rates.',
      title: 'IB Maths AI SL Investment and Interest',
      description:
        'These simultaneous equations word problems turn an investment split across accounts into a system of equations.',
      questionTitle: 'Investment and Interest: Questions & Answers',
      questionDescription:
        'Define a variable for each account, write equations for the total invested and the interest earned, and solve with technology. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },
  },

  // 8. Algebra – Indices & Surds
  'algebra-indices-surds': {
    'index-laws-multiplication': {
      metaTitle: 'Laws of Indices Questions | IB Maths AI SL  ',
      metaDescription:
        'Laws of indices in IB Maths AI SL: multiply, divide and raise expressions to powers, with variables and real contexts.',
      title: 'IB Maths AI SL Laws of Indices',
      description:
        'The laws of indices add powers when multiplying, subtract them when dividing and multiply them for a power of a power.',
      questionTitle: 'Index laws – multiplication: Questions & Answers',
      questionDescription:
        'These laws of indices questions start with numbers and letters together: deal with coefficients and powers separately, as in the laws of indices examples. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'power-of-a-power': {
      metaTitle: 'Power of a Power | IB Maths AI SL  ',
      metaDescription:
        'The power of a power rule in IB Maths AI SL: simplify expressions such as (x³)⁵ by multiplying the indices.',
      title: 'IB Maths AI SL Power of a Power',
      description:
        'The power of a power rule says (xᵃ)ᵇ = xᵃᵇ. These questions practise it until it becomes automatic.',
      questionTitle: 'Power of a power: Questions & Answers',
      questionDescription:
        'Multiply the indices, and in power of a power examples with a coefficient, raise the coefficient to the power as well. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'negative-indices': {
      metaTitle: 'Negative Indices | IB Maths AI SL  ',
      metaDescription:
        'Negative indices in IB Maths AI SL: write powers such as 10⁻¹ and 2⁻³ as fractions in their simplest form.',
      title: 'IB Maths AI SL Negative Indices',
      description: 'Negative indices mean a reciprocal: x⁻ⁿ = 1/xⁿ.',
      questionTitle: 'Negative indices: Questions & Answers',
      questionDescription:
        'Write the base with a positive power under 1, evaluate, and simplify the fraction. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'power-of-a-fraction': {
      metaTitle: 'Fraction Raised to a Power | IB Maths AI SL  ',
      metaDescription:
        'Simplify a fraction raised to a power in IB Maths AI SL, such as (x/3)³ and (5/x²)², by applying the index to top and bottom.',
      title: 'IB Maths AI SL Fraction Raised to a Power',
      description:
        'A fraction raised to a power applies the index to the numerator and the denominator: (a/b)ⁿ = aⁿ/bⁿ.',
      questionTitle: 'Power of a fraction: Questions & Answers',
      questionDescription:
        'Raise every factor top and bottom to the power, multiply indices where needed, and simplify. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'simplify-algebraic-fractions': {
      metaTitle: 'Simplify Algebraic Fractions | IB Maths AI SL  ',
      metaDescription:
        'Simplify algebraic fractions in IB Maths AI SL by dividing each term by a monomial, such as (6x² − 21x⁷)/3x.',
      title: 'IB Maths AI SL Simplifying Algebraic Fractions',
      description:
        'To simplify algebraic fractions with a single-term denominator, divide every term on top by it.',
      questionTitle: 'Simplify algebraic fractions: Questions & Answers',
      questionDescription:
        'Split the fraction into separate terms, divide the coefficients, subtract the indices, and collect the result. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'expressing-as-a-power-of-a-prime': {
      metaTitle: 'Prime Factorisation in Index Form | IB AI SL  ',
      metaDescription:
        'Write numbers in prime factorisation index form in IB Maths AI SL, such as 9⁴ and 27⁸ as powers of 3.',
      title: 'IB Maths AI SL Expressing as a Power of a Prime',
      description:
        'Prime factorisation in index form writes a number as a power of a prime, which makes comparing and combining powers easier.',
      questionTitle: 'Expressing as a power of a prime: Questions & Answers',
      questionDescription:
        'Write the base as a power of the prime, then use the power of a power rule. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'exponential-equations-integer-exponents': {
      metaTitle: 'Solving Exponential Equations | IB Maths AI SL  ',
      metaDescription:
        'Practise solving exponential equations in IB Maths AI SL by matching bases, such as 3ˣ = 81 and 9ˣ = 3ˣ⁺⁵, then equating the indices.',
      title: 'IB Maths AI SL Exponential Equations',
      description:
        'Solving exponential equations with integer answers is quickest by writing both sides as powers of the same base.',
      questionTitle: 'Exponential equations (integer exponents): Questions & Answers',
      questionDescription:
        'Rearrange so the power stands alone, write both sides with a common base, then equate the indices. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'exponential-equations-simultaneous': {
      metaTitle: 'Simultaneous Exponential Equations | IB AI SL  ',
      metaDescription:
        'Solve simultaneous exponential equations in IB Maths AI SL by writing every term as a power of 2 and equating indices.',
      title: 'IB Maths AI SL Simultaneous Exponential Equations',
      description:
        'Simultaneous exponential equations become linear once every base is written as a power of 2.',
      questionTitle: 'Exponential equations – simultaneous: Questions & Answers',
      questionDescription:
        'Rewrite each equation with base 2, equate the indices to get two linear equations, and solve. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'comparing-large-powers': {
      metaTitle: 'Comparing Large Powers | IB Maths AI SL  ',
      metaDescription:
        'Comparing large powers in IB Maths AI SL: decide which is larger, 2⁷⁰⁰⁰ or 5³⁰⁰⁰, with a clear justification.',
      title: 'IB Maths AI SL Comparing Large Powers',
      description:
        'Comparing large powers without a calculator means rewriting them with a common index.',
      questionTitle: 'Comparing large powers: Questions & Answers',
      questionDescription:
        'Write both as powers of 1000, compare the bases, and justify the conclusion. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'last-digit-modular-arithmetic': {
      metaTitle: 'Last Digit of a Power | IB Maths AI SL  ',
      metaDescription:
        'Find the last digit of a power in IB Maths AI SL, such as 316³¹⁶ + 631⁶³¹, using repeating patterns.',
      title: 'IB Maths AI SL Last Digit and Modular Arithmetic',
      description:
        'The last digit of a power repeats in a short cycle, so huge powers can be handled without calculating them.',
      questionTitle: 'Last digit / modular arithmetic: Questions & Answers',
      questionDescription:
        'Look at the last digit of each base, find its cycle, and add the two last digits. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
  },

  // 9. Logarithms and Exponentials
  'logarithms-and-exponentials': {
    'evaluating-base-10-logarithms': {
      metaTitle: 'Evaluating Logarithms | IB Maths AI SL  ',
      metaDescription:
        'Practise evaluating logarithms without a calculator in IB Maths AI SL, in base 10 and other bases such as log₂ and log₃.',
      title: 'IB Maths AI SL Evaluating Logarithms',
      description:
        'Evaluating logarithms means asking what power of the base gives the number: log 1000 = 3 because 10³ = 1000.',
      questionTitle: 'Evaluating Base-10 Logarithms: Questions & Answers',
      questionDescription:
        'Write the number as a power of the base and read off the index. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'solving-logarithmic-equations': {
      metaTitle: 'Solving Logarithmic Equations Questions | AI SL  ',
      metaDescription:
        'Solving logarithmic equations questions for IB Maths AI SL: find exact values of x when log x or log(ax + b) is given.',
      title: 'IB Maths AI SL Solving Logarithmic Equations',
      description:
        'These solving logarithmic equations questions turn each log back into a power of 10.',
      questionTitle: 'Solving Logarithmic Equations: Questions & Answers',
      questionDescription:
        'Rewrite log y = k as y = 10ᵏ, then solve the linear equation for x. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'rearranging-natural-logarithm-equations': {
      metaTitle: 'Rearranging Natural Log Equations | IB AI SL  ',
      metaDescription:
        'Practise rearranging natural log equations in IB Maths AI SL to find x in terms of y, using the fact that ln x = k means x = eᵏ.',
      title: 'IB Maths AI SL Rearranging Natural Logarithm Equations',
      description: 'Rearranging natural log equations uses the fact that ln x = k means x = eᵏ.',
      questionTitle: 'Rearranging Natural Logarithm Equations: Questions & Answers',
      questionDescription:
        'Isolate ln x, then raise e to the power of the other side. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'simplifying-logarithmic-expressions': {
      metaTitle: 'Simplifying Logarithmic Expressions | IB AI SL  ',
      metaDescription:
        'Practise simplifying logarithmic expressions in IB Maths AI SL by collecting like log terms and cancelling.',
      title: 'IB Maths AI SL Simplifying Logarithmic Expressions',
      description:
        'Simplifying logarithmic expressions often means treating log x like a single variable.',
      questionTitle: 'Simplifying Logarithmic Expressions: Questions & Answers',
      questionDescription:
        'Collect like terms, cancel common factors, and keep the logarithm intact. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'laws-of-logarithms-key-identity': {
      metaTitle: 'Laws of Logarithms Questions | IB Maths AI SL  ',
      metaDescription:
        'Laws of logarithms questions for IB Maths AI SL: simplify log 10ⁿ and ln eⁿ using the key inverse identity.',
      title: 'IB Maths AI SL Laws of Logarithms: Key Identity',
      description:
        'These laws of logarithms questions use the identity that a log and its base cancel: log 10ⁿ = n and ln eⁿ = n.',
      questionTitle: 'Laws of Logarithms – Key Identity: Questions & Answers',
      questionDescription:
        'Spot the matching base, cancel, and write down the power. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'using-technology-logarithms': {
      metaTitle: 'Logarithms with a Calculator | IB Maths AI SL  ',
      metaDescription:
        'Practise solving logarithms with a calculator in IB Maths AI SL, giving log and ln values to three significant figures.',
      title: 'IB Maths AI SL Using Technology: Logarithms',
      description:
        'Solving logarithms with a calculator is quick, but the right key and the right rounding matter.',
      questionTitle: 'Using Technology – Logarithms: Questions & Answers',
      questionDescription:
        'Use log for base 10 and ln for base e, then round to three significant figures. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'solving-exponential-equations-exactly': {
      metaTitle: 'Solving Exponential Equations Exactly | AI SL  ',
      metaDescription:
        'Practise solving exponential equations exactly in IB Maths AI SL, and with technology, such as 10ˣ = 5.',
      title: 'IB Maths AI SL Solving Exponential Equations',
      description:
        'Solving exponential equations exactly uses logarithms: 10ˣ = 5 gives x = log 5.',
      questionTitle: 'Solving Exponential Equations Exactly: Questions & Answers',
      questionDescription:
        'Take logs of both sides for the exact answer, then use your GDC to give a decimal when asked. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'solving-harder-exponential-equations': {
      metaTitle: 'Harder Exponential Equations | IB Maths AI SL  ',
      metaDescription:
        'Practise solving harder exponential equations in IB Maths AI SL, such as 10ˣ = 5 × 10⁻ˣ, to three significant figures.',
      title: 'IB Maths AI SL Solving Harder Exponential Equations',
      description:
        'Solving harder exponential equations means collecting the exponentials on one side before taking logarithms.',
      questionTitle: 'Solving Harder Exponential Equations: Questions & Answers',
      questionDescription:
        'Multiply or divide to combine the powers, take logs of both sides, and solve for x. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'logarithms-in-context-ph': {
      metaTitle: 'pH and Logarithms | IB Maths AI SL  ',
      metaDescription:
        'Use the pH logarithm formula in IB Maths AI SL, pH = −log[H⁺], to move between pH and hydrogen ion concentration.',
      title: 'IB Maths AI SL Logarithms in Context: pH',
      description:
        'The pH logarithm scale turns tiny concentrations into simple numbers: pH = −log[H⁺].',
      questionTitle: 'Logarithms in Context – pH: Questions & Answers',
      questionDescription:
        'Substitute to find the pH, or rearrange to [H⁺] = 10⁻ᵖᴴ to find the concentration. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'logarithms-in-context-radioactive-decay': {
      metaTitle: 'Radioactive Decay Formula | IB Maths AI SL  ',
      metaDescription:
        'Use a radioactive decay formula in IB Maths AI SL, such as R = 10e^(−0.1t), and solve for time with logarithms.',
      title: 'IB Maths AI SL Logarithms in Context: Radioactive Decay',
      description:
        'A radioactive decay formula such as m = ke^(−ct) falls by a fixed proportion each unit of time.',
      questionTitle: 'Logarithms in Context – Radioactive Decay: Questions & Answers',
      questionDescription:
        'Substitute t = 0 for the starting amount, then take natural logs to solve for the time needed. Questions follow syllabus section SL 1.5, SL 2.5. Every question comes with the mark scheme working.',
    },

    'logarithms-in-context-exponential-growth': {
      metaTitle: 'Exponential Growth and Logarithms | IB AI SL  ',
      metaDescription:
        'Use exponential growth logarithms in IB Maths AI SL to find when a bacteria population reaches a given size.',
      title: 'IB Maths AI SL Logarithms in Context: Exponential Growth',
      description:
        'Exponential growth logarithms questions ask when a growing quantity reaches a target, which needs a log to solve.',
      questionTitle: 'Logarithms in Context – Exponential Growth: Questions & Answers',
      questionDescription:
        'Set the model equal to the target, divide by the starting value, and take natural logs. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'logarithms-in-context-population-modelling': {
      metaTitle: 'Population Growth and Logarithms | IB AI SL  ',
      metaDescription:
        'Use a population growth logarithm model in IB Maths AI SL to find when two penguin populations are equal.',
      title: 'IB Maths AI SL Logarithms in Context: Population Modelling',
      description:
        'This population growth logarithm question compares two exponential models and finds when they meet.',
      questionTitle: 'Logarithms in Context – Population Modelling: Questions & Answers',
      questionDescription:
        'Set the two models equal, collect the exponentials, and take natural logs, or use your GDC. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'logarithms-in-context-decibel-scale': {
      metaTitle: 'Decibel Scale and Logarithms | IB Maths AI SL  ',
      metaDescription:
        'Use the decibel scale logarithm formula in IB Maths AI SL, L = 10 log(10¹² I), to compare sound intensities.',
      title: 'IB Maths AI SL Logarithms in Context: Decibel Scale',
      description:
        'The decibel scale logarithm formula turns huge changes in intensity into small changes in decibels.',
      questionTitle: 'Logarithms in Context – Decibel Scale: Questions & Answers',
      questionDescription:
        'Substitute for L, or rearrange to find I, and compare intensities by dividing. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'expressing-numbers-using-natural-logarithms': {
      metaTitle: 'Numbers Using Natural Logarithms | IB AI SL  ',
      metaDescription:
        'Practise expressing numbers using natural logarithms in IB Maths AI SL: write 20 as eᵏ and solve 20ˣ = 7 exactly.',
      title: 'IB Maths AI SL Expressing Numbers Using Natural Logarithms',
      description:
        'Expressing numbers using natural logarithms means writing them as powers of e: 20 = e^(ln 20).',
      questionTitle: 'Expressing Numbers Using Natural Logarithms: Questions & Answers',
      questionDescription:
        'Use k = ln 20, then substitute to rewrite and solve the exponential equation exactly. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },

    'simultaneous-logarithmic-equations': {
      metaTitle: 'Simultaneous Logarithmic Equations | IB AI SL  ',
      metaDescription:
        'Solve simultaneous logarithmic equations in IB Maths AI SL, such as log(xy) = 3 and log(x/y) = 1, by removing the logs first.',
      title: 'IB Maths AI SL Simultaneous Logarithmic Equations',
      description:
        'Simultaneous logarithmic equations become simple once each is rewritten without the log.',
      questionTitle: 'Simultaneous Logarithmic Equations: Questions & Answers',
      questionDescription:
        'Convert to xy = 1000 and x/y = 10, multiply the equations to find x², and solve. Questions follow syllabus section SL 1.5. Every question comes with the mark scheme working.',
    },
  },

  // 10. Number & Algebra / Functions
  'number-algebra-functions': {
    'model-evaluation': {
      metaTitle: 'Evaluating Mathematical Models | IB Maths AI SL  ',
      metaDescription:
        'Practise evaluating mathematical models in IB Maths AI SL: test a model that predicts party attendance and judge its limits.',
      title: 'IB Maths AI SL Model Evaluation',
      description:
        'Evaluating mathematical models means checking predictions against sense: does the model give impossible values?',
      questionTitle: 'Model Evaluation: Questions & Answers',
      questionDescription:
        'Substitute values into the model, interpret each result, and explain where and why the model breaks down. Questions follow syllabus section SL 1.6. Every question comes with the mark scheme working.',
    },
  },

  // 11. Algebra
  algebra: {
    'simultaneous-equations-2-variables': {
      metaTitle: 'Simultaneous Equations Questions | IB AI SL  ',
      metaDescription:
        "Solve simultaneous equations in IB Maths AI SL with two, three and four unknowns, using your GDC's equation solver.",
      title: 'IB Maths AI SL Simultaneous Equations',
      description:
        'Simultaneous equations share their unknowns, so they are solved together. These simultaneous equations examples range from two to four variables.',
      questionTitle: 'Simultaneous Equations (2 variables): Questions & Answers',
      questionDescription:
        "Write each system in standard form, enter it in your GDC's equation solver, and check the solution in one original equation; these simultaneous equations questions all expect technology. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.",
    },

    'forming-and-solving-simultaneous-equations': {
      metaTitle: 'Forming Simultaneous Equations | IB Maths AI SL  ',
      metaDescription:
        'Practise forming simultaneous equations in IB Maths AI SL from word problems, then solving them, plus forming a cubic equation.',
      title: 'IB Maths AI SL Forming and Solving Simultaneous Equations',
      description:
        'Forming simultaneous equations is the step most students find hardest: turning a description into algebra.',
      questionTitle: 'Forming and Solving Simultaneous Equations: Questions & Answers',
      questionDescription:
        'Define a variable for each unknown, write one equation per fact given, solve with technology, and answer in context. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },

    'digit-problems': {
      metaTitle: 'Digit Word Problems | IB Maths AI SL  ',
      metaDescription:
        'Digit word problems in IB Maths AI SL: find a three-digit number from conditions on its digits using simultaneous equations.',
      title: 'IB Maths AI SL Digit Problems',
      description:
        'Digit word problems give clues about the digits of a number. Each clue becomes one equation.',
      questionTitle: 'Digit Problems: Questions & Answers',
      questionDescription:
        'Let a, b and c be the digits, write an equation for each condition, and solve the system with technology. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },

    'non-linear-simultaneous-equations': {
      metaTitle: 'Non-Linear Simultaneous Equations | IB AI SL  ',
      metaDescription:
        'Solve non-linear simultaneous equations in IB Maths AI SL, such as a system in x², y² and z², by substitution.',
      title: 'IB Maths AI SL Non-Linear Simultaneous Equations',
      description:
        'These non-linear simultaneous equations become linear once you treat x², y² and z² as the unknowns.',
      questionTitle: 'Non-linear Simultaneous Equations: Questions & Answers',
      questionDescription:
        'Solve for the squares first, then take square roots, giving every positive and negative combination. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },

    'solving-quadratic-equations': {
      metaTitle: 'Solving Quadratic Equations | IB Maths AI SL  ',
      metaDescription:
        'Practise solving quadratic equations in IB Maths AI SL with technology, including equations that must be formed first.',
      title: 'IB Maths AI SL Solving Quadratic Equations',
      description:
        'Solving quadratic equations with a GDC is quick once the equation is in the form ax² + bx + c = 0.',
      questionTitle: 'Solving Quadratic Equations: Questions & Answers',
      questionDescription:
        'Rearrange to equal zero, use the polynomial solver, and give roots to three significant figures unless exact values are asked for. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },

    'solving-cubic-equations': {
      metaTitle: 'Solving Cubic Equations | IB Maths AI SL  ',
      metaDescription:
        'Practise solving cubic equations in IB Maths AI SL with the GDC polynomial solver, including a can-design context.',
      title: 'IB Maths AI SL Solving Cubic Equations',
      description:
        'Solving cubic equations with technology gives up to three real roots. In context, only some of them make sense.',
      questionTitle: 'Solving Cubic Equations: Questions & Answers',
      questionDescription:
        'Enter the coefficients in the polynomial solver, list the real roots, and reject any that do not fit the context. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },

    'solving-quartic-equations': {
      metaTitle: 'Solving Quartic Equations | IB Maths AI SL  ',
      metaDescription:
        'Practise solving quartic equations in IB Maths AI SL with technology, giving every real root to three significant figures.',
      title: 'IB Maths AI SL Solving Quartic Equations',
      description:
        'Solving quartic equations by hand is rarely needed in AI SL; technology finds all the real roots.',
      questionTitle: 'Solving Quartic Equations: Questions & Answers',
      questionDescription:
        'Enter the equation in the polynomial solver with degree 4, and give each real root to the accuracy asked for. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },

    'determining-real-roots': {
      metaTitle: 'Determining Real Roots | IB Maths AI SL  ',
      metaDescription:
        'Practise determining real roots in IB Maths AI SL: decide whether equations such as x² − 3x + 8 = 0 have any.',
      title: 'IB Maths AI SL Determining Real Roots',
      description:
        'Determining real roots starts with a quick check: a GDC that returns complex values, or a graph that misses the axis, means none exist.',
      questionTitle: 'Determining Real Roots: Questions & Answers',
      questionDescription:
        'Use the polynomial solver or graph the function, and state clearly when there are no real roots. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },

    'quadratic-equations-in-context': {
      metaTitle: 'Quadratic Equations in Context | IB Maths AI SL  ',
      metaDescription:
        'Quadratic equations in context for IB Maths AI SL: triangles, rectangles and other shapes where the area gives a quadratic.',
      title: 'IB Maths AI SL Quadratic Equations in Context',
      description:
        'Quadratic equations in context come from areas and dimensions. Building the equation is the main skill.',
      questionTitle: 'Quadratic Equations in Context: Questions & Answers',
      questionDescription:
        'Define x, write the area or other condition as an equation, solve with technology, and reject negative lengths. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },

    'polynomial-equations-in-context': {
      metaTitle: 'Polynomial Word Problems | IB Maths AI SL  ',
      metaDescription:
        'Polynomial word problems for IB Maths AI SL: open boxes made from card, where volume gives a cubic equation.',
      title: 'IB Maths AI SL Polynomial Equations in Context',
      description:
        'These polynomial word problems turn a physical shape into a cubic equation, such as the volume of an open box.',
      questionTitle: 'Polynomial Equations in Context: Questions & Answers',
      questionDescription:
        'Write each dimension in terms of x, multiply for the volume, solve the equation with technology, and check the valid range of x. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },

    'combinatorics-polygon-diagonals': {
      metaTitle: 'Number of Diagonals in a Polygon | IB AI SL  ',
      metaDescription:
        'Find the number of diagonals in a polygon in IB Maths AI SL as an expression in n, then solve for n.',
      title: 'IB Maths AI SL Combinatorics: Polygon Diagonals',
      description:
        'The number of diagonals in a polygon with n sides is n(n − 3)/2, since each vertex joins every other vertex except itself and its two neighbours.',
      questionTitle: 'Combinatorics / Polygon Diagonals: Questions & Answers',
      questionDescription:
        'Derive the expression, then set it equal to the given number and solve the quadratic for n. Questions follow syllabus section SL 1.8. Every question comes with the mark scheme working.',
    },
  },

  // 12. Statistics
  statistics: {
    'mean-median-and-range': {
      metaTitle: 'Mean, Median and Range | IB Maths AI SL  ',
      metaDescription:
        'Mean, median and range problems in IB Maths AI SL: find unknown integers from conditions on all three.',
      title: 'IB Maths AI SL Mean, Median and Range',
      description:
        'These mean, median and range questions work backwards: the averages are given, and the data values are unknown.',
      questionTitle: 'Mean, Median and Range: Questions & Answers',
      questionDescription:
        'Order the values, use the median to fix the middle one, the range to link the ends, and the mean for a final equation. Questions follow syllabus section SL 1.8, SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'grouped-frequency-tables': {
      metaTitle: 'Grouped Frequency Tables | IB Maths AI SL  ',
      metaDescription:
        'Grouped frequency tables in IB Maths AI SL: organise race times and other data into classes and read off totals.',
      title: 'IB Maths AI SL Grouped Frequency Tables',
      description:
        'Grouped frequency tables organise continuous data into classes so patterns are easier to see.',
      questionTitle: 'Grouped Frequency Tables: Questions & Answers',
      questionDescription:
        'Choose class boundaries with no gaps or overlaps, tally the data, and check the frequencies add to the total. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'mean-median-and-mode': {
      metaTitle: 'Mean, Median and Mode | IB Maths AI SL  ',
      metaDescription:
        'Mean, median and mode in IB Maths AI SL: from lists and frequency tables, with quartiles, outliers and unknown values.',
      title: 'IB Maths AI SL Mean, Median and Mode',
      description:
        'Mean, median and mode summarise a data set in three different ways. These questions find them from lists, frequency tables and grouped data.',
      questionTitle: 'Mean, Median and Mode: Questions & Answers',
      questionDescription:
        'These mean median and mode questions use the same steps each time: order the data, count to find the median, and use technology for the mean, as in the mean median and mode examples. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'finding-unknown-from-mean': {
      metaTitle: 'Finding an Unknown from the Mean | IB AI SL  ',
      metaDescription:
        'Practise finding an unknown from the mean in IB Maths AI SL, such as x when the mean of 2, 5, 8, x and 2x is 9.',
      title: 'IB Maths AI SL Finding an Unknown from the Mean',
      description:
        'Finding an unknown from the mean uses one fact: the total equals the mean times the number of values.',
      questionTitle: 'Finding Unknown from Mean: Questions & Answers',
      questionDescription:
        'Write the sum in terms of x, set it equal to mean × n, and solve. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'mean-from-frequency-table': {
      metaTitle: 'Mean from a Frequency Table | IB Maths AI SL  ',
      metaDescription:
        'Find the mean from a frequency table in IB Maths AI SL, with standard deviation and one or two unknown values.',
      title: 'IB Maths AI SL Mean from a Frequency Table',
      description:
        'The mean from a frequency table is Σfx ÷ Σf. When a value or frequency is unknown, the given mean gives an equation.',
      questionTitle: 'Mean from Frequency Table: Questions & Answers',
      questionDescription:
        'Multiply each value by its frequency, add, and divide by the total frequency; with unknowns, form one equation per fact given. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'estimated-mean-from-grouped-data-modal-group': {
      metaTitle: 'Estimated Mean from Grouped Data | IB AI SL  ',
      metaDescription:
        'Find the estimated mean from grouped data and the modal group in IB Maths AI SL using class midpoints.',
      title: 'IB Maths AI SL Estimated Mean and Modal Group',
      description:
        'The estimated mean from grouped data uses each class midpoint, since the exact values are unknown.',
      questionTitle: 'Estimated Mean from Grouped Data / Modal Group: Questions & Answers',
      questionDescription:
        'Find each midpoint, multiply by the frequency, divide by the total, and state the modal class as the one with the highest frequency. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'outliers-iqr-method': {
      metaTitle: 'Outliers: IQR Method | IB Maths AI SL  ',
      metaDescription:
        'Find outliers with the IQR method in IB Maths AI SL: values below Q₁ − 1.5 × IQR or above Q₃ + 1.5 × IQR.',
      title: 'IB Maths AI SL Outliers: IQR Method',
      description: 'The outliers IQR rule flags values more than 1.5 × IQR beyond the quartiles.',
      questionTitle: 'Outliers (IQR method): Questions & Answers',
      questionDescription:
        'Calculate the IQR, find both boundaries, and state the range of values that would count as outliers. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'effect-of-linear-transformations-addition-subtraction': {
      metaTitle: 'Adding a Constant to Data | IB Maths AI SL  ',
      metaDescription:
        'Adding a constant to data in IB Maths AI SL: how the mean, median, standard deviation and IQR change.',
      title: 'IB Maths AI SL Effect of Adding or Subtracting a Constant',
      description:
        'Adding a constant to data shifts every value equally, so measures of centre move but measures of spread do not.',
      questionTitle: 'Effect of Linear Transformations (Addition/Subtraction): Questions & Answers',
      questionDescription:
        'Add the constant to the mean and median, and leave the standard deviation, range and IQR unchanged. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'effect-of-linear-transformations-multiplication-division': {
      metaTitle: 'Multiplying Data by a Constant | IB Maths AI SL  ',
      metaDescription:
        'Multiplying data by a constant in IB Maths AI SL: the effect on the median, IQR, mean and standard deviation.',
      title: 'IB Maths AI SL Effect of Multiplying or Dividing',
      description:
        'Multiplying data by a constant scales every statistic, both centre and spread, by that constant.',
      questionTitle:
        'Effect of Linear Transformations (Multiplication/Division): Questions & Answers',
      questionDescription:
        'Multiply the mean, median, standard deviation and IQR by the constant, and square it for the variance. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'median-and-interquartile-range': {
      metaTitle: 'Median and Interquartile Range | IB Maths AI SL  ',
      metaDescription:
        'Find the median and interquartile range in IB Maths AI SL, then test for outliers, including with an unknown value.',
      title: 'IB Maths AI SL Median, IQR and Outliers',
      description:
        'The median and interquartile range describe the centre and spread of data without being affected by outliers.',
      questionTitle: 'Median and Interquartile Range: Questions & Answers',
      questionDescription:
        'Order the data, find the quartiles with technology, calculate the IQR, then apply the 1.5 × IQR test. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'finding-unknown-standard-deviation': {
      metaTitle: 'Standard Deviation with an Unknown | IB AI SL  ',
      metaDescription:
        'Find a, then the standard deviation with an unknown in IB Maths AI SL, when the mean of five values is given.',
      title: 'IB Maths AI SL Finding an Unknown: Standard Deviation',
      description:
        'Standard deviation with an unknown starts with the mean: it gives the unknown, and then the data are complete.',
      questionTitle: 'Finding Unknown; Standard Deviation: Questions & Answers',
      questionDescription:
        'Use the mean to find a, substitute to list the data, and calculate the standard deviation with technology. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'finding-unknown-variance': {
      metaTitle: 'Variance Formula Questions | IB Maths AI SL  ',
      metaDescription:
        'Use the variance formula in IB Maths AI SL after finding an unknown value from the mean of six expressions in x.',
      title: 'IB Maths AI SL Finding an Unknown: Variance',
      description:
        'The variance formula measures spread as the mean of squared distances from the mean.',
      questionTitle: 'Finding Unknown; Variance: Questions & Answers',
      questionDescription:
        'Find x from the mean, list the six values, and calculate the variance with technology or Σ(x − x̄)² ÷ n. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'combined-mean': {
      metaTitle: 'Combined Mean Questions | IB Maths AI SL  ',
      metaDescription:
        'Find the combined mean of two groups in IB Maths AI SL by combining their totals, not by averaging the means.',
      title: 'IB Maths AI SL Combined Mean',
      description: 'The combined mean of two groups weights each mean by the size of its group.',
      questionTitle: 'Combined Mean: Questions & Answers',
      questionDescription:
        'Use the combined mean formula: multiply each mean by its group size, add, and divide by the total number. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'mean-reverse-calculation': {
      metaTitle: 'Finding a Missing Value from the Mean | AI SL  ',
      metaDescription:
        'Practise finding a missing value from the mean in IB Maths AI SL: the score Lucy needs on her last paper to pass.',
      title: 'IB Maths AI SL Mean: Reverse Calculation',
      description:
        'Finding a missing value from the mean works backwards from the target average to the score still needed.',
      questionTitle: 'Mean — Reverse Calculation: Questions & Answers',
      questionDescription:
        'Find the total needed, subtract the scores already known, and check the answer is possible. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'mean-sd-linear-coding-currency': {
      metaTitle: 'Coding Data: Mean and SD | IB Maths AI SL  ',
      metaDescription:
        'Coding data in IB Maths AI SL: find the mean and standard deviation of wages, then of transformed values.',
      title: 'IB Maths AI SL Mean, SD and Linear Coding',
      description:
        'Coding data with a linear rule changes the mean and standard deviation in predictable ways.',
      questionTitle: 'Mean, SD, Linear Coding (Currency): Questions & Answers',
      questionDescription:
        'Calculate the original statistics, then apply the rule: the mean follows ax + b, the standard deviation is multiplied by |a|. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'effect-of-linear-transformations-unit-conversion': {
      metaTitle: 'Linear Transformation of Data | IB Maths AI SL  ',
      metaDescription:
        'Linear transformation of data in IB Maths AI SL: unit conversions such as °F to °C, and multiplying by a negative number.',
      title: 'IB Maths AI SL Effect of Linear Transformations: Units and Negatives',
      description:
        'A linear transformation of data, such as converting temperatures, changes centre and spread by the same rule each time.',
      questionTitle: 'Effect of Linear Transformations (Unit Conversion): Questions & Answers',
      questionDescription:
        'Apply y = ax + b to the mean and median, multiply spread by |a|, and square a for the variance. Questions follow syllabus section SL 4.2, SL 4.3. Every question comes with the mark scheme working.',
    },

    'scatter-diagrams-line-of-best-fit': {
      metaTitle: 'Scatter Diagrams and Line of Best Fit | AI SL  ',
      metaDescription:
        'Draw scatter diagrams in IB Maths AI SL, plot the mean point, add a line of best fit and use it to predict.',
      title: 'IB Maths AI SL Scatter Diagrams and Line of Best Fit',
      description:
        'Scatter diagrams show whether two variables are related. A line of best fit through the mean point lets you predict.',
      questionTitle: 'Scatter Diagrams & Line of Best Fit: Questions & Answers',
      questionDescription:
        'Plot every pair, calculate and plot the mean point, draw the line through it, and read off the prediction. Questions follow syllabus section SL 4.4. Every question comes with the mark scheme working.',
    },

    'describing-linear-correlation': {
      metaTitle: 'Describing Linear Correlation | IB Maths AI SL  ',
      metaDescription:
        'Practise describing linear correlation in IB Maths AI SL scatter graphs by its direction and its strength.',
      title: 'IB Maths AI SL Describing Linear Correlation',
      description: 'Describing linear correlation needs two words: the direction and the strength.',
      questionTitle: 'Describing Linear Correlation: Questions & Answers',
      questionDescription:
        'State positive, negative or none, then strong, moderate or weak, based on how closely the points follow a line. Questions follow syllabus section SL 4.4. Every question comes with the mark scheme working.',
    },

    'pearsons-product-moment-correlation-coefficient': {
      metaTitle: 'Product Moment Correlation Coefficient | AI SL  ',
      metaDescription:
        "Calculate Pearson's product moment correlation coefficient in IB Maths AI SL with technology and interpret its value.",
      title: "IB Maths AI SL Pearson's Product-Moment Correlation Coefficient",
      description:
        "The product moment correlation coefficient, r, also called Pearson's, measures linear correlation from −1 to 1.",
      questionTitle: "Pearson's Product-Moment Correlation Coefficient: Questions & Answers",
      questionDescription:
        "Enter the data on your GDC, run a linear regression to read Pearson's product moment correlation coefficient, and interpret its sign and size. Questions follow syllabus section SL 4.4. Every question comes with the mark scheme working.",
    },

    'predictions-and-reliability': {
      metaTitle: 'Predictions and Reliability | IB Maths AI SL  ',
      metaDescription:
        'Judge predictions and reliability in IB Maths AI SL: is a regression estimate inside the data range, and is r strong?',
      title: 'IB Maths AI SL Predictions and Reliability',
      description:
        'Predictions and reliability go together: an estimate from a regression line is only trustworthy in the right conditions.',
      questionTitle: 'Predictions and Reliability: Questions & Answers',
      questionDescription:
        'Check whether the value is inside the data range and whether |r| is close to 1, then state whether the prediction is reliable. Questions follow syllabus section SL 4.4. Every question comes with the mark scheme working.',
    },

    'interpreting-pearsons-correlation-coefficient': {
      metaTitle: 'Interpreting Correlation Coefficients | AI SL  ',
      metaDescription:
        "Practise interpreting correlation coefficients in IB Maths AI SL: match scatter diagrams to Pearson's and Spearman's values.",
      title: 'IB Maths AI SL Interpreting Correlation Coefficients',
      description:
        'Interpreting correlation coefficients means matching a number to a picture: strength, direction and whether the trend is linear.',
      questionTitle: "Interpreting Pearson's Correlation Coefficient: Questions & Answers",
      questionDescription:
        'Look at the direction first, then how tightly points follow the trend, and match each diagram to its value of r or rₛ. Questions follow syllabus section SL 4.4, SL 4.10. Every question comes with the mark scheme working.',
    },

    'pmcc-regression': {
      metaTitle: 'PMCC and Regression | IB Maths AI SL  ',
      metaDescription:
        'PMCC and regression in IB Maths AI SL: test scores, advertising and profit, then predict with the regression line.',
      title: 'IB Maths AI SL PMCC and Regression',
      description:
        'PMCC and regression work together: r tells you whether a line is worth using, and the regression line gives the predictions.',
      questionTitle: 'PMCC & Regression: Questions & Answers',
      questionDescription:
        'Find r and the regression line with technology, comment on the strength of correlation, then predict within the data range. Questions follow syllabus section SL 4.4. Every question comes with the mark scheme working.',
    },

    'pmcc-significance-test': {
      metaTitle: 'PMCC Significance Test | IB Maths AI SL  ',
      metaDescription:
        'Carry out a PMCC significance test in IB Maths AI SL on car age and value data, using the p-value from technology.',
      title: 'IB Maths AI SL PMCC and Significance Test',
      description:
        'A PMCC significance test decides whether the correlation in a sample is strong enough to suggest correlation in the population.',
      questionTitle: 'PMCC & Significance Test: Questions & Answers',
      questionDescription:
        'State the hypotheses, find r and the p-value with technology, compare with the significance level, and conclude in context. Questions follow syllabus section SL 4.4. Every question comes with the mark scheme working.',
    },

    'regression-interpretation-causation': {
      metaTitle: 'Correlation vs Causation | IB Maths AI SL  ',
      metaDescription:
        'Correlation vs causation in IB Maths AI SL: interpret a regression of profit on advertising budget without overclaiming.',
      title: 'IB Maths AI SL Regression: Interpretation and Causation',
      description:
        'Correlation vs causation is a key distinction: two variables can move together without one causing the other.',
      questionTitle: 'Regression — Interpretation & Causation: Questions & Answers',
      questionDescription:
        'Interpret the gradient in context, then explain why the data alone cannot prove cause, as in the correlation vs causation examples. Questions follow syllabus section SL 4.4. Every question comes with the mark scheme working.',
    },

    'scatter-diagrams-two-linear-regions': {
      metaTitle: 'Piecewise Regression Questions | IB Maths AI SL  ',
      metaDescription:
        'Piecewise regression questions in IB Maths AI SL: ice cream sales at different temperatures, with two linear regions.',
      title: 'IB Maths AI SL Scatter Diagrams: Two Linear Regions',
      description:
        'These piecewise regression questions fit separate lines when a scatter diagram shows two distinct trends.',
      questionTitle: 'Scatter Diagrams — Two Linear Regions: Questions & Answers',
      questionDescription:
        'Plot the data, find where the trend changes, and calculate a regression line for each region. Questions follow syllabus section SL 4.4. Every question comes with the mark scheme working.',
    },

    'outliers-quartiles-scatter-graphs': {
      metaTitle: 'Outliers, Quartiles and Scatter Graphs | AI SL  ',
      metaDescription:
        'Find outliers, quartiles and scatter graph patterns in IB Maths AI SL, all for one paired data set of values.',
      title: 'IB Maths AI SL Outliers, Quartiles and Scatter Graphs',
      description:
        'This question links outliers, quartiles and scatter graphs: the same data are summarised, tested and plotted.',
      questionTitle: 'Outliers, Quartiles & Scatter Graphs: Questions & Answers',
      questionDescription:
        'Find the quartiles and IQR, test each value for outliers, then plot and describe the scatter graph. Questions follow syllabus section SL 4.4. Every question comes with the mark scheme working.',
    },

    'spearmans-rank-correlation-coefficient': {
      metaTitle: "Spearman's Rank Correlation Coefficient | AI SL  ",
      metaDescription:
        "Calculate Spearman's rank correlation coefficient in IB Maths AI SL, including data with tied ranks.",
      title: "IB Maths AI SL Spearman's Rank Correlation Coefficient",
      description:
        "Spearman's rank correlation coefficient measures how well the ranks of two variables agree.",
      questionTitle: "Spearman's Rank Correlation Coefficient: Questions & Answers",
      questionDescription:
        "Rank each variable, give tied values the average of their ranks, then find Pearson's r of the ranks with technology. Questions follow syllabus section SL 4.10. Every question comes with the mark scheme working.",
    },

    'pearsons-and-spearmans-correlation': {
      metaTitle: "Pearson's vs Spearman's Correlation | IB AI SL  ",
      metaDescription:
        "Pearson's vs Spearman's correlation in IB Maths AI SL: which to use, and how outliers and unit changes affect each.",
      title: "IB Maths AI SL Pearson's and Spearman's Correlation",
      description:
        "Pearson's vs Spearman's comes down to the relationship: Pearson's for linear, Spearman's for any consistent increase or decrease.",
      questionTitle: "Pearson's and Spearman's Correlation: Questions & Answers",
      questionDescription:
        'Calculate both coefficients, compare them, and explain which suits the data and how an outlier affects each. Questions follow syllabus section SL 4.10. Every question comes with the mark scheme working.',
    },

    'spearmans-rank-contextual-interpretation': {
      metaTitle: "Spearman's Rank in Context | IB Maths AI SL  ",
      metaDescription:
        "Use Spearman's rank in context in IB Maths AI SL: park visitors and temperature, and when it is the right measure.",
      title: "IB Maths AI SL Spearman's Rank: Interpretation",
      description:
        "Spearman's rank is the right measure when the relationship is consistent but not linear.",
      questionTitle: "Spearman's Rank — Contextual Interpretation: Questions & Answers",
      questionDescription:
        "Decide whether Spearman's rank is appropriate, calculate it with ranked data, and interpret the value in context. Questions follow syllabus section SL 4.10. Every question comes with the mark scheme working.",
    },

    'hypothesis-testing-spearmans-rank': {
      metaTitle: 'Spearman Rank Hypothesis Test | IB Maths AI SL  ',
      metaDescription:
        'Carry out a Spearman rank hypothesis test in IB Maths AI SL using critical values, for race times, grades and judges.',
      title: "IB Maths AI SL Hypothesis Testing: Spearman's Rank",
      description:
        'A Spearman rank hypothesis test asks whether the ranks agree more than chance would allow.',
      questionTitle: "Hypothesis Testing — Spearman's Rank: Questions & Answers",
      questionDescription:
        'State H₀ and H₁, calculate rₛ, compare with the critical value for the sample size, and conclude in context. Questions follow syllabus section SL 4.10. Every question comes with the mark scheme working.',
    },
  },

  // 13. Coordinate Geometry
  'coordinate-geometry': {
    'gradient-of-a-line': {
      metaTitle: 'Gradient of a Line Questions | IB Maths AI SL  ',
      metaDescription:
        "Find the gradient of a line in IB Maths AI SL from two points, from a graph and in real contexts such as a mountain's slope.",
      title: 'IB Maths AI SL Gradient of a Line',
      description:
        'The gradient of a line is rise over run. These questions find it from coordinates, from graphs and from real situations.',
      questionTitle: 'Gradient of a Line: Questions & Answers',
      questionDescription:
        'Use the gradient of a line formula, m = (y₂ − y₁) ÷ (x₂ − x₁), and in context state what the gradient means with units. Questions follow syllabus section SL 2.1, SL 3.5. Every question comes with the mark scheme working.',
    },

    'intercepts-of-a-line': {
      metaTitle: 'Intercepts of a Line | IB Maths AI SL  ',
      metaDescription:
        'Find the intercepts of a line in IB Maths AI SL, where it crosses the x- and y-axes, from its equation.',
      title: 'IB Maths AI SL Intercepts of a Line',
      description:
        'The intercepts of a line are where it crosses the axes: set y = 0 for one and x = 0 for the other.',
      questionTitle: 'Intercepts of a Line: Questions & Answers',
      questionDescription:
        'Substitute zero for each variable in turn and write both intercepts as coordinates. Questions follow syllabus section SL 2.1, SL 3.5. Every question comes with the mark scheme working.',
    },

    'equation-of-a-line': {
      metaTitle: 'Equation of a Line Formula | IB Maths AI SL  ',
      metaDescription:
        'Use the equation of a line formula in IB Maths AI SL from a gradient and intercept, a point, two points or regression data.',
      title: 'IB Maths AI SL Equation of a Line',
      description:
        'The equation of a line formula takes different starting points: gradient and intercept, gradient and a point, or two points.',
      questionTitle: 'Equation of a Line: Questions & Answers',
      questionDescription:
        'Use y = mx + c or y − y₁ = m(x − x₁), and rearrange to ax + by + c = 0 when the question asks for that form. Questions follow syllabus section SL 2.1, SL 3.5, SL 4.4. Every question comes with the mark scheme working.',
    },

    'gradient-intercept-form': {
      metaTitle: 'Gradient-Intercept Form | IB Maths AI SL  ',
      metaDescription:
        'Rewrite equations in gradient intercept form, y = mx + c, in IB Maths AI SL and read off the gradient and intercepts.',
      title: 'IB Maths AI SL Gradient-Intercept Form',
      description:
        'Gradient intercept form, y = mx + c, shows the gradient and y-intercept at a glance.',
      questionTitle: 'Gradient-Intercept Form: Questions & Answers',
      questionDescription:
        'Make y the subject, simplify, and state m and c; set y = 0 for the x-intercept. Questions follow syllabus section SL 2.1, SL 3.5. Every question comes with the mark scheme working.',
    },

    'parallel-lines': {
      metaTitle: 'Parallel Lines Questions | IB Maths AI SL  ',
      metaDescription:
        'Parallel lines in IB Maths AI SL: write equations of lines parallel to a given one, and prove a shape is a parallelogram.',
      title: 'IB Maths AI SL Parallel Lines',
      description:
        'Parallel lines have equal gradients. These parallel lines questions write new equations and test quadrilaterals.',
      questionTitle: 'Parallel Lines: Questions & Answers',
      questionDescription:
        'Find the gradient of the given line, keep it for the new line through the point, and compare gradients to prove sides parallel. Questions follow syllabus section SL 2.1, SL 3.5. Every question comes with the mark scheme working.',
    },

    'perpendicular-lines': {
      metaTitle: 'Perpendicular Lines Examples | IB Maths AI SL  ',
      metaDescription:
        'Perpendicular lines examples for IB Maths AI SL: find the equation of a line at right angles through a given point.',
      title: 'IB Maths AI SL Perpendicular Lines',
      description:
        'These perpendicular lines examples use the rule that perpendicular gradients multiply to −1.',
      questionTitle: 'Perpendicular Lines: Questions & Answers',
      questionDescription:
        'Find the original gradient, take its negative reciprocal, and substitute the point into y − y₁ = m(x − x₁). Questions follow syllabus section SL 2.1, SL 3.5. Every question comes with the mark scheme working.',
    },

    'point-of-intersection': {
      metaTitle: 'Point of Intersection of Two Lines | IB AI SL  ',
      metaDescription:
        'Find the point of intersection of two lines in IB Maths AI SL by solving their equations simultaneously.',
      title: 'IB Maths AI SL Point of Intersection',
      description: 'The point of intersection of two lines satisfies both equations at once.',
      questionTitle: 'Point of Intersection: Questions & Answers',
      questionDescription:
        'Solve the equations simultaneously by hand or with your GDC, and write the answer as coordinates. Questions follow syllabus section SL 2.1, SL 3.5. Every question comes with the mark scheme working.',
    },

    'coordinates-and-area': {
      metaTitle: 'Area of a Triangle with Coordinates | IB AI SL  ',
      metaDescription:
        'Find the area of a triangle with coordinates in IB Maths AI SL, and estimate the area of a forest from points on a map.',
      title: 'IB Maths AI SL Coordinates and Area',
      description:
        'The area of a triangle with coordinates comes from a base and perpendicular height read from the grid.',
      questionTitle: 'Coordinates and Area: Questions & Answers',
      questionDescription:
        'Sketch the points, choose a horizontal or vertical side as the base, and split irregular shapes into triangles and rectangles. Questions follow syllabus section SL 2.1, SL 3.5, SL 5.8. Every question comes with the mark scheme working.',
    },

    'simultaneous-equations-intersection': {
      metaTitle: 'Intersection of Two Lines | IB Maths AI SL  ',
      metaDescription:
        'Find the intersection of two lines in IB Maths AI SL from a gradient and y-intercept for each, by forming their equations first.',
      title: 'IB Maths AI SL Simultaneous Equations and Intersection',
      description:
        'The intersection of two lines needs both equations. Here they are built from a gradient and an intercept first.',
      questionTitle: 'Simultaneous Equations / Intersection: Questions & Answers',
      questionDescription:
        'Write each line as y = mx + c, set the expressions equal, solve for x, then substitute for y. Questions follow syllabus section SL 2.1, SL 3.5. Every question comes with the mark scheme working.',
    },
  },

  // 14. Linear Models
  'linear-models': {
    'linear-functions-in-context': {
      metaTitle: 'Linear Functions Word Problems | IB Maths AI SL  ',
      metaDescription:
        'Linear functions word problems for IB Maths AI SL: a balloon inflating at a constant rate, modelled as V = at + b.',
      title: 'IB Maths AI SL Linear Functions in Context',
      description:
        'Linear functions word problems describe a starting value and a constant rate of change.',
      questionTitle: 'Linear Functions in Context: Questions & Answers',
      questionDescription:
        'Read the starting value as the intercept and the rate as the gradient, write the model, then substitute to answer each part. Questions follow syllabus section SL 2.1, SL 3.5. Every question comes with the mark scheme working.',
    },

    'direct-proportion-hookes-law': {
      metaTitle: 'Direct Proportion Questions | IB Maths AI SL  ',
      metaDescription:
        "Direct proportion in IB Maths AI SL: Hooke's law and y ∝ x² questions, finding the constant k from one known pair.",
      title: "IB Maths AI SL Direct Proportion and Hooke's Law",
      description:
        "In direct proportion, y = kx: doubling one variable doubles the other. These direct proportion examples include Hooke's law examples for springs.",
      questionTitle: "Direct Proportion / Hooke's Law: Questions & Answers",
      questionDescription:
        'These direct proportion questions follow three steps: write y = kxⁿ, substitute a known pair to find k, then use the equation. Questions follow syllabus section SL 2.1, SL 3.5, SL 2.5. Every question comes with the mark scheme working.',
    },

    'linear-models-in-context': {
      metaTitle: 'Linear Models in Context | IB Maths AI SL  ',
      metaDescription:
        'Linear models in IB Maths AI SL: phone contracts with a fixed charge plus a rate, and house prices against size.',
      title: 'IB Maths AI SL Linear Models in Context',
      description:
        'Linear models describe situations with a fixed part and a part that grows at a constant rate.',
      questionTitle: 'Linear Models in Context: Questions & Answers',
      questionDescription:
        'Identify the fixed charge as c and the rate as m, write y = mx + c, interpret both in context, and use it to predict. Questions follow syllabus section SL 2.1, SL 3.5, SL 2.5. Every question comes with the mark scheme working.',
    },
  },

  // 15. Functions
  functions: {
    'evaluating-functions': {
      metaTitle: 'Evaluating Functions Questions | IB Maths AI SL  ',
      metaDescription:
        'Practise evaluating functions in IB Maths AI SL: substitute values into f(x), then solve equations such as g(x) = 7.',
      title: 'IB Maths AI SL Evaluating Functions',
      description:
        'Evaluating functions means replacing x with a number. Solving reverses it: find x for a given output.',
      questionTitle: 'Evaluating Functions: Questions & Answers',
      questionDescription:
        'Substitute carefully using brackets for negative values, and for solving, set the expression equal to the output and rearrange. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },

    'identifying-functions-from-graphs': {
      metaTitle: 'Identifying Functions from Graphs | IB AI SL  ',
      metaDescription:
        'Practise identifying functions from graphs in IB Maths AI SL using the vertical line test on each curve.',
      title: 'IB Maths AI SL Identifying Functions from Graphs',
      description:
        'Identifying functions from graphs uses the vertical line test: each x must give exactly one y.',
      questionTitle: 'Identifying Functions from Graphs: Questions & Answers',
      questionDescription:
        'Imagine a vertical line moving across the graph; if it ever crosses twice, the graph is not a function. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },

    'domain-of-functions': {
      metaTitle: 'Domain of Functions Questions | IB Maths AI SL  ',
      metaDescription:
        'Find the largest possible domain of functions in IB Maths AI SL, including roots, fractions and a tyre-pressure model.',
      title: 'IB Maths AI SL Domain of Functions',
      description:
        'The domain of functions is the set of inputs allowed. Square roots, fractions and real contexts restrict it.',
      questionTitle: 'Domain of Functions: Questions & Answers',
      questionDescription:
        'Exclude values that make a denominator zero or a square root negative, and in context keep only realistic inputs. Questions follow syllabus section SL 2.2, SL 2.6. Every question comes with the mark scheme working.',
    },

    'range-of-functions': {
      metaTitle: 'Range of Functions Questions | IB Maths AI SL  ',
      metaDescription:
        'Find the range of functions in IB Maths AI SL by sketching with technology: polynomials, logs, exponentials and restricted domains.',
      title: 'IB Maths AI SL Range of Functions',
      description:
        'The range of functions is the set of outputs. A sketch on your GDC shows the maximum, minimum and any asymptotes.',
      questionTitle: 'Range of Functions: Questions & Answers',
      questionDescription:
        'Graph the function over its domain, find the vertices and end values, and write the range with the correct inequality signs. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4, SL 5.6. Every question comes with the mark scheme working.',
    },

    'inverse-functions': {
      metaTitle: 'Inverse Functions Questions | IB Maths AI SL  ',
      metaDescription:
        'Inverse functions in IB Maths AI SL: find values of f⁻¹, sketch inverses, use tables and convert currencies.',
      title: 'IB Maths AI SL Inverse Functions',
      description:
        'Inverse functions undo the original function. Their graph is the reflection in the line y = x.',
      questionTitle: 'Inverse Functions: Questions & Answers',
      questionDescription:
        'To find f⁻¹(a), solve f(x) = a; to sketch it, reflect the graph in y = x, and check the function is one-to-one first. Questions follow syllabus section SL 2.2, SL 5.5. Every question comes with the mark scheme working.',
    },

    'solving-functions': {
      metaTitle: 'Solving Equations with Functions | IB AI SL  ',
      metaDescription:
        'Practise solving equations with functions in IB Maths AI SL, by rearranging and graphically with technology.',
      title: 'IB Maths AI SL Solving Functions',
      description: 'Solving equations with functions finds the input that gives a required output.',
      questionTitle: 'Solving Functions: Questions & Answers',
      questionDescription:
        'Rearrange simple equations by hand; for harder ones, graph both sides and find where the curves intersect. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'modelling-with-functions': {
      metaTitle: 'Modelling with Functions | IB Maths AI SL  ',
      metaDescription:
        "Modelling with functions in IB Maths AI SL: a car's speed over time and an exponential smartphone model.",
      title: 'IB Maths AI SL Modelling with Functions',
      description:
        'Modelling with functions turns a real situation into an equation you can evaluate, solve and interpret.',
      questionTitle: 'Modelling with Functions: Questions & Answers',
      questionDescription:
        'Identify the variables and units, substitute the given values, and comment on whether the answer is realistic. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },

    'range-evaluation-and-solving': {
      metaTitle: 'Range of a Function: Evaluate and Solve | AI SL  ',
      metaDescription:
        'Find the range of a function in IB Maths AI SL, then evaluate it and solve an equation for one quadratic function.',
      title: 'IB Maths AI SL Range, Evaluation and Solving',
      description:
        'This question finds the range of a function, then evaluates it and solves for a given output.',
      questionTitle: 'Range, Evaluation, and Solving: Questions & Answers',
      questionDescription:
        'Find the vertex for the minimum value, write the range, substitute to evaluate, and solve the equation with technology. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },

    'domain-range-and-solving': {
      metaTitle: 'Domain and Range Questions | IB Maths AI SL  ',
      metaDescription:
        'Domain and range in IB Maths AI SL: square-root functions, finding the range, then solving an equation.',
      title: 'IB Maths AI SL Domain, Range and Solving',
      description:
        'Domain and range describe what goes into a function and what comes out. These domain and range examples use square-root functions.',
      questionTitle: 'Domain, Range, and Solving: Questions & Answers',
      questionDescription:
        'In these domain and range questions, set the expression under the root ≥ 0 for the domain, then use the graph for the range. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },

    'modelling-with-exponential-decay': {
      metaTitle: 'Exponential Decay Model | IB Maths AI SL  ',
      metaDescription:
        'Use an exponential decay model in IB Maths AI SL for a fish population, finding initial size and long-term behaviour.',
      title: 'IB Maths AI SL Modelling with Exponential Decay',
      description:
        'An exponential decay model falls quickly at first, then levels off towards a limiting value.',
      questionTitle: 'Modelling with Exponential Decay: Questions & Answers',
      questionDescription:
        'Substitute t = 0 for the initial value, solve for a given size with technology, and identify the horizontal asymptote. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },

    'logarithmic-functions': {
      metaTitle: 'Logarithmic Functions Questions | IB AI SL  ',
      metaDescription:
        'Logarithmic functions in IB Maths AI SL: largest possible domain, inverses and graphs of log functions.',
      title: 'IB Maths AI SL Logarithmic Functions',
      description:
        'Logarithmic functions are only defined for positive inputs, so the domain comes from setting the argument above zero.',
      questionTitle: 'Logarithmic Functions: Questions & Answers',
      questionDescription:
        'Set the argument > 0 for the domain, use exponentials to find inverses, and sketch with technology to find vertices and asymptotes. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'reading-values-from-a-graph': {
      metaTitle: 'Reading Values from a Graph | IB Maths AI SL  ',
      metaDescription:
        'Practise reading values from a graph in IB Maths AI SL, finding f(x) and solving f(x) = k from an exponential curve.',
      title: 'IB Maths AI SL Reading Values from a Graph',
      description:
        'Reading values from a graph works in two directions: across from x to find y, and back from y to find x.',
      questionTitle: 'Reading Values from a Graph: Questions & Answers',
      questionDescription:
        'Draw construction lines on the graph and state answers to the accuracy the scale allows. Questions follow syllabus section SL 2.2. Every question comes with the mark scheme working.',
    },

    'rational-functions-asymptotes': {
      metaTitle: 'Asymptotes of Rational Functions | IB AI SL  ',
      metaDescription:
        'Find asymptotes of rational functions in IB Maths AI SL, sketch the graphs from your GDC and state the domain.',
      title: 'IB Maths AI SL Rational Functions and Asymptotes',
      description:
        'Asymptotes of rational functions come from the denominator (vertical) and the long-run behaviour (horizontal).',
      questionTitle: 'Rational Functions / Asymptotes: Questions & Answers',
      questionDescription:
        'Set the denominator to zero for vertical asymptotes, consider large x for horizontal ones, and sketch with intercepts labelled. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'rational-exponential-functions': {
      metaTitle: 'Rational and Exponential Functions | IB AI SL  ',
      metaDescription:
        'Sketch rational and exponential functions in IB Maths AI SL from your calculator, with intercepts and asymptotes.',
      title: 'IB Maths AI SL Rational and Exponential Functions',
      description:
        'Rational and exponential functions both have asymptotes, which must appear on every sketch.',
      questionTitle: 'Rational & Exponential Functions: Questions & Answers',
      questionDescription:
        'Graph each function on your GDC, then sketch it with intercepts, asymptotes and the overall shape shown clearly. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'vertices-lines-of-symmetry': {
      metaTitle: 'Vertex Form and Lines of Symmetry | IB AI SL  ',
      metaDescription:
        'Use vertex form in IB Maths AI SL to build quadratic models, and find vertices and lines of symmetry with technology.',
      title: 'IB Maths AI SL Vertices and Lines of Symmetry',
      description:
        'Vertex form, y = a(x − h)² + k, shows the vertex (h, k) and the line of symmetry x = h directly.',
      questionTitle: 'Vertices & Lines of Symmetry: Questions & Answers',
      questionDescription:
        'Use the vertex form formula with the given vertex, substitute another point to find a, and use technology for other curves. Questions follow syllabus section SL 2.5, SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'vertices-of-polynomial-curves': {
      metaTitle: 'Turning Points of Polynomial Curves | IB AI SL  ',
      metaDescription:
        'Find the turning points of polynomial curves in IB Maths AI SL using technology, and classify each as a maximum or minimum.',
      title: 'IB Maths AI SL Vertices of Polynomial Curves',
      description:
        'The turning points of a polynomial are its vertices: local maximums and minimums.',
      questionTitle: 'Vertices of Polynomial Curves: Questions & Answers',
      questionDescription:
        'Graph the curve, use the maximum and minimum tools, and give each point to three significant figures. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'sketching-rational-graphs-from-properties': {
      metaTitle: 'Sketching Rational Functions | IB Maths AI SL  ',
      metaDescription:
        'Practise sketching rational functions in IB Maths AI SL from given zeros, asymptotes and intercepts.',
      title: 'IB Maths AI SL Sketching Rational Graphs from Properties',
      description:
        'Sketching rational functions from properties means building a graph from clues rather than an equation.',
      questionTitle: 'Sketching Rational Graphs from Properties: Questions & Answers',
      questionDescription:
        'Draw the asymptotes as dashed lines first, mark the zeros and intercepts, then join them with a curve that fits every property. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'sketching-exponential-log-graphs-from-properties': {
      metaTitle: 'Exponential and Logarithmic Graphs | IB AI SL  ',
      metaDescription:
        'Practise sketching exponential and logarithmic graphs in IB Maths AI SL from a given range, intercepts and asymptote.',
      title: 'IB Maths AI SL Sketching Exponential and Log Graphs from Properties',
      description:
        'Sketching exponential and logarithmic graphs from properties starts with the asymptote, then the direction of the curve.',
      questionTitle: 'Sketching Exponential/Log Graphs from Properties: Questions & Answers',
      questionDescription:
        'Draw the asymptote, plot the given intercepts, and make sure the curve stays within the stated range. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'intersection-of-curves': {
      metaTitle: 'Intersection of Curves Questions | IB AI SL  ',
      metaDescription:
        'Find the intersection of curves in IB Maths AI SL with technology for pairs of linear, quadratic and other equations.',
      title: 'IB Maths AI SL Intersection of Curves',
      description: 'The intersection of curves is where both equations are true at the same point.',
      questionTitle: 'Intersection of Curves: Questions & Answers',
      questionDescription:
        'Graph both equations on your GDC, use the intersect tool for each crossing, and give coordinates to three significant figures. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'zeros-of-functions': {
      metaTitle: 'Zeros of Functions Questions | IB Maths AI SL  ',
      metaDescription:
        'Find the zeros of functions in IB Maths AI SL with your calculator, including polynomials and quadratics from their zeros.',
      title: 'IB Maths AI SL Zeros of Functions',
      description: 'The zeros of functions are the x-values where the graph crosses the x-axis.',
      questionTitle: 'Zeros of Functions: Questions & Answers',
      questionDescription:
        'Use the zero tool on your GDC or the polynomial solver, and give every real zero to the accuracy asked for. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4, SL 2.5. Every question comes with the mark scheme working.',
    },

    'roots-of-equations': {
      metaTitle: 'Roots of Equations Questions | IB Maths AI SL  ',
      metaDescription:
        'Find the roots of equations in IB Maths AI SL with your calculator, by rearranging to zero or graphing both sides.',
      title: 'IB Maths AI SL Roots of Equations',
      description:
        'The roots of equations are the values that make them true. A GDC finds them quickly.',
      questionTitle: 'Roots of Equations: Questions & Answers',
      questionDescription:
        'Rearrange to f(x) = 0 and find the zeros, or graph each side and find the intersections. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'graphs-of-exponential-functions': {
      metaTitle: 'Graphs of Exponential Functions | IB AI SL  ',
      metaDescription:
        'Sketch graphs of exponential functions in IB Maths AI SL, such as y = 7 − 3e⁻⁰·⁵ˣ, with intercepts and asymptotes.',
      title: 'IB Maths AI SL Graphs of Exponential Functions',
      description:
        'Graphs of exponential functions have one horizontal asymptote and either grow or decay towards it.',
      questionTitle: 'Graphs of Exponential Functions: Questions & Answers',
      questionDescription:
        'Find the y-intercept, the x-intercept with technology, and the asymptote from the constant term, then sketch. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'maximum-point-of-rational-function': {
      metaTitle: 'Maximum Point of a Rational Function | IB AI SL  ',
      metaDescription:
        'Find the maximum point of a rational function in IB Maths AI SL, such as y = 10 ÷ (x² + 2x + 5), with technology.',
      title: 'IB Maths AI SL Maximum Point of a Rational Function',
      description:
        'The maximum point of a rational function like this sits where the denominator is smallest.',
      questionTitle: 'Maximum Point of Rational Function: Questions & Answers',
      questionDescription:
        'Graph the function, use the maximum tool, and check by finding the vertex of the denominator. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'optimisation-modelling': {
      metaTitle: 'Optimisation Modelling Questions | IB AI SL  ',
      metaDescription:
        'Optimisation modelling in IB Maths AI SL: find the production level that maximises monthly profit with technology.',
      title: 'IB Maths AI SL Optimisation and Modelling',
      description:
        'Optimisation modelling finds the input that gives the greatest profit or least cost.',
      questionTitle: 'Optimisation / Modelling: Questions & Answers',
      questionDescription:
        'Graph the model, find the maximum, and interpret the coordinates in context with units. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'line-of-symmetry-of-rational-graph': {
      metaTitle: 'Line of Symmetry of a Graph | IB Maths AI SL  ',
      metaDescription:
        'Find the line of symmetry of a graph in IB Maths AI SL, such as y = 1 ÷ (x² + 2x + 3), from its vertex.',
      title: 'IB Maths AI SL Line of Symmetry of a Rational Graph',
      description: 'The line of symmetry of a graph like this passes through its vertex.',
      questionTitle: 'Line of Symmetry of Rational Graph: Questions & Answers',
      questionDescription:
        'Find the vertex with technology or by completing the square in the denominator, then write x = h. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'modelling-with-graphs-cumulative-frequency': {
      metaTitle: 'Cumulative Frequency Graph Questions | IB AI SL  ',
      metaDescription:
        'Cumulative frequency graphs and modelling with graphs in IB Maths AI SL: test scores, braking cars and data tables.',
      title: 'IB Maths AI SL Modelling with Graphs and Cumulative Frequency',
      description:
        'A cumulative frequency graph shows how many values fall below each point, and reads off medians and quartiles.',
      questionTitle: 'Modelling with Graphs / Cumulative Frequency: Questions & Answers',
      questionDescription:
        'Plot running totals at upper class boundaries, join with a smooth curve, and read across at n ÷ 2 for the median. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4, SL 4.2. Every question comes with the mark scheme working.',
    },

    'modelling-with-graphs-quadratic': {
      metaTitle: 'Quadratic Equation from Roots | IB Maths AI SL  ',
      metaDescription:
        'Find a quadratic equation from roots in IB Maths AI SL, or from three points, and use quadratic models for profit and roads.',
      title: 'IB Maths AI SL Quadratic Models',
      description:
        'A quadratic equation from roots starts with y = a(x − p)(x − q). One more point gives a.',
      questionTitle: 'Modelling with Graphs / Quadratic: Questions & Answers',
      questionDescription:
        'Use the quadratic equation from roots formula when zeros are given, quadratic regression for three points, and interpret in context. Questions follow syllabus section SL 2.5, SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'absolute-value-equations': {
      metaTitle: 'Absolute Value Equations | IB Maths AI SL  ',
      metaDescription:
        'Solve absolute value equations in IB Maths AI SL, including |4 − x²| = x² and a logarithmic modulus equation.',
      title: 'IB Maths AI SL Absolute Value Equations',
      description: 'Absolute value equations have two cases, since |a| = a or −a.',
      questionTitle: 'Absolute Value Equations: Questions & Answers',
      questionDescription:
        'Graph both sides and find every intersection, or split into cases and check each solution in the original equation. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'maximum-of-exponential-function': {
      metaTitle: 'Maximum Value of a Function | IB Maths AI SL  ',
      metaDescription:
        'Find the maximum value of a function in IB Maths AI SL, such as f(x) = xe⁻⁰·⁴ˣ, using graphing technology.',
      title: 'IB Maths AI SL Maximum of an Exponential Function',
      description:
        'The maximum value of a function like xe⁻⁰·⁴ˣ comes from a balance between growth and decay.',
      questionTitle: 'Maximum of Exponential Function: Questions & Answers',
      questionDescription:
        'Graph the function, use the maximum tool, and give the y-coordinate as the maximum value. Questions follow syllabus section SL 2.2, SL 2.3, SL 2.4. Every question comes with the mark scheme working.',
    },

    'linear-models-two-points': {
      metaTitle: 'Linear Model from Two Points | IB Maths AI SL  ',
      metaDescription:
        'Find a linear model from two points in IB Maths AI SL, writing y = mx + c through each given pair of points.',
      title: 'IB Maths AI SL Linear Models: Two Points',
      description: 'A linear model from two points needs the gradient first, then the intercept.',
      questionTitle: 'Linear Models – Two Points: Questions & Answers',
      questionDescription:
        'Calculate m from the two points, substitute one point to find c, and write y = mx + c. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'interpreting-linear-models': {
      metaTitle: 'Interpreting Linear Models | IB Maths AI SL  ',
      metaDescription:
        "Practise interpreting linear models in IB Maths AI SL: car mileage and a baby's mass, with gradient and intercept in context.",
      title: 'IB Maths AI SL Interpreting Linear Models',
      description:
        'Interpreting linear models means explaining what the gradient and intercept mean in the real situation.',
      questionTitle: 'Interpreting Linear Models: Questions & Answers',
      questionDescription:
        "State the gradient as a rate with units and the intercept as the starting value, then comment on the model's limits. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.",
    },

    'forming-using-linear-models': {
      metaTitle: 'Forming Linear Models | IB Maths AI SL  ',
      metaDescription:
        'Practise forming linear models in IB Maths AI SL for taxi fares and removal companies, then compare options.',
      title: 'IB Maths AI SL Forming and Using Linear Models',
      description: 'Forming linear models from prices gives one fixed fee and one rate per unit.',
      questionTitle: 'Forming & Using Linear Models: Questions & Answers',
      questionDescription:
        'Write a model for each option, solve where they are equal, and use it to decide which option is cheaper. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'linear-models-battery-domain': {
      metaTitle: 'Linear Model Domain | IB Maths AI SL  ',
      metaDescription:
        "Find a linear model domain in IB Maths AI SL for a phone battery's charge, from full to empty, and interpret it.",
      title: 'IB Maths AI SL Linear Models: Battery and Domain',
      description:
        'A linear model domain limits the inputs to values that make sense, such as the time until a battery runs out.',
      questionTitle: 'Linear Models – Battery/Domain: Questions & Answers',
      questionDescription:
        'Find when the output reaches its limit, write the domain as an inequality, and interpret the gradient in context. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'piecewise-linear-functions': {
      metaTitle: 'Piecewise Linear Functions | IB Maths AI SL  ',
      metaDescription:
        'Piecewise linear functions in IB Maths AI SL: electricity charges and income tax bands, written as separate rules.',
      title: 'IB Maths AI SL Piecewise Linear Functions',
      description:
        'Piecewise linear functions use different rules over different intervals, as in tax bands.',
      questionTitle: 'Piecewise Linear Functions: Questions & Answers',
      questionDescription:
        'Write a rule for each interval, make sure the pieces join, and apply the right piece to each input. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'demand-supply-functions': {
      metaTitle: 'Demand and Supply Functions | IB Maths AI SL  ',
      metaDescription:
        'Demand and supply functions in IB Maths AI SL: find the equilibrium price where the two linear models meet.',
      title: 'IB Maths AI SL Demand and Supply Functions',
      description:
        'Demand and supply functions model how many items people want and how many are offered at each price.',
      questionTitle: 'Demand & Supply Functions: Questions & Answers',
      questionDescription:
        'Set demand equal to supply, solve for the equilibrium price, and substitute to find the quantity. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'properties-of-quadratic-functions': {
      metaTitle: 'Properties of Quadratic Functions | IB AI SL  ',
      metaDescription:
        'Use properties of quadratic functions in IB Maths AI SL, such as the axis of symmetry and a point, to find coefficients.',
      title: 'IB Maths AI SL Properties of Quadratic Functions',
      description:
        'The properties of quadratic functions, like the axis of symmetry x = −b ÷ 2a, link the graph to its coefficients.',
      questionTitle: 'Properties of Quadratic Functions: Questions & Answers',
      questionDescription:
        'Use the axis of symmetry to form one equation, substitute known points for others, and solve simultaneously. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'quadratic-modelling-projectile-kinematics': {
      metaTitle: 'Projectile Motion Quadratic | IB Maths AI SL  ',
      metaDescription:
        'Use a projectile motion quadratic in IB Maths AI SL for a ball thrown upwards from a ledge: maximum height and landing time.',
      title: 'IB Maths AI SL Quadratic Modelling: Projectiles',
      description:
        'A projectile motion quadratic gives height against time, with the vertex at the highest point.',
      questionTitle: 'Quadratic Modelling – Projectile / Kinematics: Questions & Answers',
      questionDescription:
        'Find the vertex for the maximum height, solve h = 0 for the landing time, and reject negative times. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'linear-modelling-area-growth': {
      metaTitle: 'Linear Modelling: Area Growth | IB Maths AI SL  ',
      metaDescription:
        'Linear modelling in IB Maths AI SL: algae on a pond whose radius grows linearly, and how its area then grows.',
      title: 'IB Maths AI SL Linear Modelling: Area Growth',
      description:
        'Linear modelling of the radius does not mean the area grows linearly. This question shows why.',
      questionTitle: 'Linear Modelling – Area Growth: Questions & Answers',
      questionDescription:
        'Model the radius with a linear function, substitute into A = πR², and compare the two predictions. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },
  },

  // 16. Exponential Functions
  'exponential-functions': {
    'sketching-exponential-functions': {
      metaTitle: 'Sketching Exponential Functions | IB AI SL  ',
      metaDescription:
        'Practise sketching exponential functions in IB Maths AI SL, such as y = 5 × 2ˣ + 3, with intercepts and asymptotes.',
      title: 'IB Maths AI SL Sketching Exponential Functions',
      description:
        'Sketching exponential functions needs three things: the y-intercept, the asymptote and the direction of growth.',
      questionTitle: 'Sketching Exponential Functions: Questions & Answers',
      questionDescription:
        'Substitute x = 0, read the asymptote from the added constant, and sketch the curve approaching it. Questions follow syllabus section SL 2.5, SL 5.2. Every question comes with the mark scheme working.',
    },

    'finding-exponential-models': {
      metaTitle: 'Finding Exponential Models | IB Maths AI SL  ',
      metaDescription:
        'Practise finding exponential models in IB Maths AI SL of the form y = k × 3ˣ + c or y = ke⁻ˣ + c through two points.',
      title: 'IB Maths AI SL Finding Exponential Models',
      description: 'Finding exponential models through two points gives two equations in k and c.',
      questionTitle: 'Finding Exponential Models: Questions & Answers',
      questionDescription:
        'Substitute each point into the model and solve the simultaneous equations for k and c. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'exponential-growth-models': {
      metaTitle: 'Exponential Growth Models | IB Maths AI SL  ',
      metaDescription:
        'Exponential growth models in IB Maths AI SL: mobile phone users and UK population growing by a fixed percentage.',
      title: 'IB Maths AI SL Exponential Growth Models',
      description: 'Exponential growth models increase by the same percentage each period.',
      questionTitle: 'Exponential Growth Models: Questions & Answers',
      questionDescription:
        'Write the model as N = N₀ × (1 + r)ᵗ, use it to predict, and solve for t with technology. Questions follow syllabus section SL 2.5, SL 2.6. Every question comes with the mark scheme working.',
    },

    'exponential-decay-models': {
      metaTitle: 'Exponential Decay Models | IB Maths AI SL  ',
      metaDescription:
        'Exponential decay models in IB Maths AI SL: car depreciation, medication in the bloodstream and cooling soup.',
      title: 'IB Maths AI SL Exponential Decay Models',
      description:
        'Exponential decay models lose the same percentage each period, so values approach a limit.',
      questionTitle: 'Exponential Decay Models: Questions & Answers',
      questionDescription:
        'Find the decay factor from two values, write the model, and interpret any constant as the long-term value. Questions follow syllabus section SL 2.5, SL 2.6. Every question comes with the mark scheme working.',
    },

    'exponential-models-with-e': {
      metaTitle: 'Exponential Models with e | IB Maths AI SL  ',
      metaDescription:
        'Exponential models with e in IB Maths AI SL: find k and the growth rate for a bacteria population from data.',
      title: 'IB Maths AI SL Exponential Models with e',
      description:
        'Exponential models with e use N = ke^(rt), where r is the continuous growth rate.',
      questionTitle: 'Exponential Models with e: Questions & Answers',
      questionDescription:
        'Use t = 0 to find k, substitute a second point to find r, and solve for a target value with technology. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'limiting-value-asymptotic-behaviour': {
      metaTitle: 'Horizontal Asymptote: Limiting Value | IB AI SL  ',
      metaDescription:
        'Find the horizontal asymptote of an exponential function in IB Maths AI SL as the limiting speed of a parachutist.',
      title: 'IB Maths AI SL Limiting Value and Asymptotic Behaviour',
      description:
        'The horizontal asymptote of an exponential function gives the value it approaches but never reaches.',
      questionTitle: 'Limiting Value / Asymptotic Behaviour: Questions & Answers',
      questionDescription:
        'Let t become large so the exponential term approaches zero, and interpret the remaining constant in context. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },
  },

  // 17. Algebra & Functions
  'algebra-functions': {
    'inverse-proportion': {
      metaTitle: 'Inverse Proportion Questions | IB Maths AI SL  ',
      metaDescription:
        "Inverse proportion in IB Maths AI SL: y = k ÷ x, finding k from one known pair, and applying Boyle's law.",
      title: 'IB Maths AI SL Inverse Proportion',
      description:
        'In inverse proportion, one variable halves when the other doubles. The inverse proportion formula is y = k ÷ x.',
      questionTitle: 'Inverse Proportion: Questions & Answers',
      questionDescription:
        'These inverse proportion questions follow the same steps as the inverse proportion examples: write the formula, find k, then use it. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'cubic-models': {
      metaTitle: 'Cubic Models Questions | IB Maths AI SL  ',
      metaDescription:
        'Find cubic models in IB Maths AI SL through four given points with cubic regression, and apply one to planetary orbits.',
      title: 'IB Maths AI SL Cubic Models',
      description: 'Cubic models need four points to fix their four coefficients.',
      questionTitle: 'Cubic Models: Questions & Answers',
      questionDescription:
        'Enter the points in your GDC, run cubic regression, write the model, and use it within the data range. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'direct-proportion-applied': {
      metaTitle: 'Direct Proportion Word Problems | IB AI SL  ',
      metaDescription:
        'Direct proportion word problems for IB Maths AI SL: springs, where force is directly proportional to extension.',
      title: 'IB Maths AI SL Direct Proportion: Applied',
      description: 'These direct proportion word problems link force to extension, so F = kx.',
      questionTitle: 'Direct Proportion – Applied: Questions & Answers',
      questionDescription:
        'Find k from the given values, write the model, and use it to find the missing force or extension. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },

    'combined-proportion': {
      metaTitle: 'Combined Proportion Questions | IB Maths AI SL  ',
      metaDescription:
        'Combined proportion in IB Maths AI SL: chain two proportion rules, and model the time to build a housing estate.',
      title: 'IB Maths AI SL Combined Proportion',
      description:
        'Combined proportion links three variables through two rules, or one variable to two others at once.',
      questionTitle: 'Combined Proportion: Questions & Answers',
      questionDescription:
        'Write each relationship with its own constant, substitute one into the other, and find the combined constant from the data. Questions follow syllabus section SL 2.5. Every question comes with the mark scheme working.',
    },
  },

  // 18. Mathematical Models
  'mathematical-models': {
    'choosing-an-appropriate-model': {
      metaTitle: 'Choosing an Appropriate Model | IB Maths AI SL  ',
      metaDescription:
        "Practise choosing an appropriate model in IB Maths AI SL: linear, quadratic, exponential or other, based on the data's shape.",
      title: 'IB Maths AI SL Choosing an Appropriate Model',
      description:
        'Choosing an appropriate model starts with the shape of the data, then checks how it should behave beyond it.',
      questionTitle: 'Choosing an Appropriate Model: Questions & Answers',
      questionDescription:
        'Plot the data, compare its shape with each model, and consider whether the model makes sense for large or small values. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },

    'limitations-of-mathematical-models': {
      metaTitle: 'Limitations of a Model | IB Maths AI SL  ',
      metaDescription:
        'Explain the limitations of a model in IB Maths AI SL, such as a 1% growth model for the UK population.',
      title: 'IB Maths AI SL Limitations of Mathematical Models',
      description:
        'The limitations of a model show up when it is used far beyond the data it was built from.',
      questionTitle: 'Limitations of Mathematical Models: Questions & Answers',
      questionDescription:
        'Use the model to predict, then explain which assumption breaks down over a long time period. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },

    'improving-mathematical-models': {
      metaTitle: 'Improving Mathematical Models | IB Maths AI SL  ',
      metaDescription:
        'Practise improving mathematical models in IB Maths AI SL, starting with a linear tyre-pressure model that fails over time.',
      title: 'IB Maths AI SL Improving Mathematical Models',
      description:
        'Improving mathematical models means spotting where a model gives impossible answers and choosing a better form.',
      questionTitle: 'Improving Mathematical Models: Questions & Answers',
      questionDescription:
        'Find where the model fails, explain why, and suggest a model whose shape fits the real behaviour. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },

    'exponential-decay-long-term-behaviour': {
      metaTitle: 'Exponential Decay: Long-Term Behaviour | AI SL  ',
      metaDescription:
        'Exponential decay long term behaviour in IB Maths AI SL: the temperature of boiled water approaches room temperature.',
      title: 'IB Maths AI SL Exponential Decay: Long-Term Behaviour',
      description:
        'Exponential decay long term behaviour is set by the constant in the model, the value the curve levels off at.',
      questionTitle: 'Exponential Decay / Long-term Behaviour: Questions & Answers',
      questionDescription:
        'Let t become large, state the limiting value, and interpret it in context. Questions follow syllabus section SL 2.6. Every question comes with the mark scheme working.',
    },
  },

  // 19. Geometry & Mensuration
  'geometry-mensuration': {
    'surface-area-volume-of-spheres': {
      metaTitle: 'Surface Area of a Sphere and Volume | IB AI SL  ',
      metaDescription:
        'Find the surface area of a sphere and its volume in IB Maths AI SL, exactly or to 3 s.f., plus the volume of a frustum.',
      title: 'IB Maths AI SL Surface Area and Volume of Spheres',
      description:
        'The surface area of a sphere is 4πr² and its volume is ⁴⁄₃πr³. These questions find the volume and surface area of a sphere from a radius, a diameter or the volume.',
      questionTitle: 'Surface Area & Volume of Spheres: Questions & Answers',
      questionDescription:
        'Use the surface area of sphere formula and halve diameters first; for a frustum, subtract the small cone from the large one. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },

    'surface-area-volume-of-hemispheres': {
      metaTitle: 'Surface Area of a Hemisphere | IB Maths AI SL  ',
      metaDescription:
        'Find the surface area of a hemisphere and its volume in IB Maths AI SL, then compound shapes, pyramids and paint estimates.',
      title: 'IB Maths AI SL Surface Area and Volume of Hemispheres',
      description:
        'The surface area of hemisphere shapes has two parts: the curved surface, 2πr², and the flat circular base, πr².',
      questionTitle: 'Surface Area & Volume of Hemispheres: Questions & Answers',
      questionDescription:
        'Use the surface area of hemisphere formula and the volume of hemisphere formula, ⅔πr³, and add or subtract parts for compound shapes. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },

    'surface-area-volume-of-cones': {
      metaTitle: 'Volume of a Cone and Surface Area | IB AI SL  ',
      metaDescription:
        'Find the volume of a cone and its surface area in IB Maths AI SL, exactly or to 3 s.f., from a radius and height.',
      title: 'IB Maths AI SL Surface Area and Volume of Cones',
      description:
        'The volume of a cone is one third of the cylinder with the same base and height.',
      questionTitle: 'Surface Area & Volume of Cones: Questions & Answers',
      questionDescription:
        'Use the volume of cone formula, ⅓πr²h, and for the surface area of a cone add the curved surface, πrl, to the base. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },

    'volume-of-pyramids': {
      metaTitle: 'Volume of a Pyramid Questions | IB Maths AI SL  ',
      metaDescription:
        'Find the volume of a pyramid in IB Maths AI SL, with triangular and square bases, plus the total surface area of right pyramids.',
      title: 'IB Maths AI SL Volume of Pyramids',
      description:
        'The volume of a pyramid is one third of base area times height, whatever the shape of the base.',
      questionTitle: 'Volume of Pyramids: Questions & Answers',
      questionDescription:
        'Use the volume of pyramid formula, ⅓ × base area × height, and find slant heights with Pythagoras for surface area. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },

    'total-surface-area-of-hemispheres': {
      metaTitle: 'Total Surface Area of Compound Shapes | AI SL  ',
      metaDescription:
        'Find the total surface area of compound shapes in IB Maths AI SL, from solid hemispheres and cones to a toy rocket.',
      title: 'IB Maths AI SL Total Surface Area of Compound Shapes',
      description:
        'The total surface area of compound shapes counts every exposed face. For a solid hemisphere it is 3πr².',
      questionTitle: 'Total Surface Area of Hemispheres: Questions & Answers',
      questionDescription:
        'Use the total surface area of hemisphere formula, add every exposed face, and for compound shapes leave out the surfaces where two parts join. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },

    'cone-geometry-finding-radius': {
      metaTitle: 'Slant Height of a Cone | IB Maths AI SL  ',
      metaDescription:
        'Use the slant height of a cone in IB Maths AI SL with Pythagoras to find the radius from the vertical height.',
      title: 'IB Maths AI SL Cone Geometry: Finding the Radius',
      description:
        'The slant height of a cone, its vertical height and its radius form a right-angled triangle.',
      questionTitle: 'Cone Geometry — Finding Radius: Questions & Answers',
      questionDescription:
        'Apply l² = r² + h², rearrange for the unknown, and give the answer to three significant figures. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },

    'cylinder-finding-radius-from-volume': {
      metaTitle: 'Volume of a Cylinder Formula | IB Maths AI SL  ',
      metaDescription:
        'Use the volume of a cylinder formula in IB Maths AI SL in reverse, finding the radius from the height and the volume.',
      title: 'IB Maths AI SL Cylinder: Finding the Radius from Volume',
      description:
        'The volume of a cylinder formula, V = πr²h, can be rearranged to find the radius.',
      questionTitle: 'Cylinder — Finding Radius from Volume: Questions & Answers',
      questionDescription:
        'Divide the volume by πh, take the square root, and keep full accuracy until the final answer. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },

    'cone-matching-volume-to-cylinder': {
      metaTitle: 'Volume of Cone and Cylinder | IB Maths AI SL  ',
      metaDescription:
        'Compare the volume of a cone and cylinder in IB Maths AI SL: find the height of a cone with the same radius and volume.',
      title: 'IB Maths AI SL Cone: Matching Volume to a Cylinder',
      description:
        'The volume of cone and cylinder shapes with the same base differ by a factor of three.',
      questionTitle: 'Cone — Matching Volume to Cylinder: Questions & Answers',
      questionDescription:
        "Use the volume of cone and cylinder formula, set ⅓πr²h equal to the cylinder's volume, and solve for h. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.",
    },

    'volume-of-spheres-reverse-problem': {
      metaTitle: 'Radius of a Sphere from Volume | IB Maths AI SL  ',
      metaDescription:
        'Find the radius of a sphere from volume in IB Maths AI SL when an ornament is melted down and recast as a ball.',
      title: 'IB Maths AI SL Volume of Spheres: Reverse Problem',
      description:
        'Finding the radius of a sphere from volume reverses V = ⁴⁄₃πr³; melting keeps the volume the same.',
      questionTitle: 'Volume of Spheres — Reverse Problem: Questions & Answers',
      questionDescription:
        'Find the original volume, set it equal to ⁴⁄₃πr³, and solve for r using a cube root. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },

    'compound-shapes-cone-on-cylinder': {
      metaTitle: 'Volume of Composite Solids | IB Maths AI SL  ',
      metaDescription:
        'Find the volume of composite solids in IB Maths AI SL: a toy rocket modelled as a cone on top of a cylinder.',
      title: 'IB Maths AI SL Compound Shapes: Cone on Cylinder',
      description: 'The volume of composite solids is the sum of the volumes of their parts.',
      questionTitle: 'Compound Shapes — Cone on Cylinder: Questions & Answers',
      questionDescription:
        "Find each part's dimensions, calculate each volume, and add them. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.",
    },

    'square-based-pyramid-finding-base-side': {
      metaTitle: 'Square-Based Pyramid Questions | IB Maths AI SL  ',
      metaDescription:
        'Find the base side of a square based pyramid in IB Maths AI SL from its height and its volume, then check units.',
      title: 'IB Maths AI SL Square-Based Pyramid: Finding the Base Side',
      description:
        'A square based pyramid has volume ⅓x²h, so the base side comes from a square root.',
      questionTitle: 'Square-Based Pyramid — Finding Base Side: Questions & Answers',
      questionDescription:
        'As in the square based pyramid examples, substitute the volume and height, solve for x², then take the square root. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },

    'scaling-of-compound-shapes': {
      metaTitle: 'Scale Factor and Volume | IB Maths AI SL  ',
      metaDescription:
        "Use scale factor volume rules in IB Maths AI SL when a tablet's radius is decreased by 10% for ease of swallowing.",
      title: 'IB Maths AI SL Scaling of Compound Shapes',
      description:
        'With a scale factor, volume changes by the cube of the factor and area by its square.',
      questionTitle: 'Scaling of Compound Shapes: Questions & Answers',
      questionDescription:
        'Find the new dimensions, recalculate the volume, or multiply the original by the scale factor cubed when every length changes. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },

    'volume-of-compound-shapes-batch-calculation': {
      metaTitle: 'Volume of Compound Shapes Questions | IB AI SL  ',
      metaDescription:
        'Volume of compound shapes questions for IB Maths AI SL: a batch of metal fenceposts made from a cylinder and hemisphere.',
      title: 'IB Maths AI SL Volume of Compound Shapes: Batch Calculation',
      description:
        "These volume of compound shapes questions scale one object's volume up to a whole batch.",
      questionTitle: 'Volume of Compound Shapes — Batch Calculation: Questions & Answers',
      questionDescription:
        'Find the volume of one fencepost, multiply by the number in the batch, and convert units at the end. Questions follow syllabus section SL 3.1. Every question comes with the mark scheme working.',
    },
  },

  // 20. Geometry & Voronoi Diagrams
  'geometry-voronoi-diagrams': {
    'perpendicular-bisectors': {
      metaTitle: 'Perpendicular Bisectors Questions | IB AI SL  ',
      metaDescription:
        'Find perpendicular bisectors in IB Maths AI SL from two points or a line segment, check Voronoi edges and divide land fairly.',
      title: 'IB Maths AI SL Perpendicular Bisectors',
      description:
        'Perpendicular bisectors are the set of points equally far from two sites, which makes them the edges of Voronoi diagrams.',
      questionTitle: 'Perpendicular Bisectors: Questions & Answers',
      questionDescription:
        'In these perpendicular bisector questions, find the midpoint, take the negative reciprocal gradient, and write the line. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },

    'voronoi-diagram-vocabulary': {
      metaTitle: 'Voronoi Diagrams: Vocabulary and Uses | AI SL  ',
      metaDescription:
        'Voronoi diagrams in IB Maths AI SL: sites, edges, cells and vertices, with uses for supermarkets and water contamination.',
      title: 'IB Maths AI SL Voronoi Diagram Vocabulary',
      description:
        'Voronoi diagrams split a region into cells, each holding the points closest to one site.',
      questionTitle: 'Voronoi Diagram Vocabulary: Questions & Answers',
      questionDescription:
        'Name the sites, edges, vertices and cells, then use the cells to answer which site serves which area. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },

    'reading-voronoi-diagrams': {
      metaTitle: 'Reading Voronoi Diagrams | IB Maths AI SL  ',
      metaDescription:
        'Practise reading Voronoi diagrams in IB Maths AI SL: find the closest site to a point and complete a diagram.',
      title: 'IB Maths AI SL Reading Voronoi Diagrams',
      description:
        "Reading Voronoi diagrams means finding which cell a point lies in. That cell's site is the closest one.",
      questionTitle: 'Reading Voronoi Diagrams: Questions & Answers',
      questionDescription:
        'Locate the point, identify its cell, and use perpendicular bisectors to complete any missing edges. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },

    'updating-voronoi-diagrams': {
      metaTitle: 'Updating Voronoi Diagrams | IB Maths AI SL  ',
      metaDescription:
        'Practise updating Voronoi diagrams in IB Maths AI SL when a new site is added, using the perpendicular bisectors given.',
      title: 'IB Maths AI SL Updating Voronoi Diagrams',
      description: 'Updating Voronoi diagrams for a new site only changes the cells next to it.',
      questionTitle: 'Updating Voronoi Diagrams: Questions & Answers',
      questionDescription:
        'Draw the new perpendicular bisectors from the new site, keep the parts that form its cell, and erase the edges inside it. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },

    'nearest-neighbour-interpolation': {
      metaTitle: 'Nearest Neighbour Interpolation | IB AI SL  ',
      metaDescription:
        'Nearest neighbour interpolation in IB Maths AI SL: estimate temperatures on an island from its weather stations.',
      title: 'IB Maths AI SL Nearest Neighbour Interpolation',
      description:
        'Nearest neighbour interpolation gives each point the value of its closest site.',
      questionTitle: 'Nearest Neighbour Interpolation: Questions & Answers',
      questionDescription:
        "Find the Voronoi cell the point lies in and use that station's value as the estimate. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.",
    },

    'voronoi-vertices': {
      metaTitle: 'Voronoi Vertices Questions | IB Maths AI SL  ',
      metaDescription:
        'Find Voronoi vertices in IB Maths AI SL by solving bisector equations, and place a new hospital furthest from the others.',
      title: 'IB Maths AI SL Voronoi Vertices',
      description:
        'Voronoi vertices are equally far from three or more sites. They solve the largest empty circle problem.',
      questionTitle: 'Voronoi Vertices: Questions & Answers',
      questionDescription:
        'Find two perpendicular bisectors, solve them simultaneously, and check the vertex is inside the region given. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },

    'area-of-voronoi-cells': {
      metaTitle: 'Area of Voronoi Cells | IB Maths AI SL  ',
      metaDescription:
        'Find the area of Voronoi cells in IB Maths AI SL for restaurants in a shopping centre, using the grid scale.',
      title: 'IB Maths AI SL Area of Voronoi Cells',
      description: 'The area of Voronoi cells shows how much of a region each site is closest to.',
      questionTitle: 'Area of Voronoi Cells: Questions & Answers',
      questionDescription:
        'Split each cell into triangles and rectangles, find their areas, and convert using the scale. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },

    'distance-calculation': {
      metaTitle: 'Distance Between Two Points | IB Maths AI SL  ',
      metaDescription:
        'Find the distance between two points in IB Maths AI SL for towns on an island and a vertex of a Voronoi diagram.',
      title: 'IB Maths AI SL Distance Calculation',
      description:
        'The distance between two points comes from Pythagoras applied to the change in x and y.',
      questionTitle: 'Distance Calculation: Questions & Answers',
      questionDescription:
        'Use the distance between two points formula, d = √((x₂ − x₁)² + (y₂ − y₁)²), and include units. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },

    'modelling-assumptions': {
      metaTitle: 'Modelling Assumptions Questions | IB AI SL  ',
      metaDescription:
        'Identify modelling assumptions in IB Maths AI SL for a Voronoi model of three towns on an island, and their effect.',
      title: 'IB Maths AI SL Modelling Assumptions',
      description:
        'Modelling assumptions are the simplifications a model relies on, such as straight-line travel.',
      questionTitle: 'Modelling Assumptions: Questions & Answers',
      questionDescription:
        'State the assumption the model makes, then explain how real roads or terrain would change the answer. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },

    'mathematical-modelling': {
      metaTitle: 'Mathematical Modelling Examples | IB AI SL  ',
      metaDescription:
        'Mathematical modelling examples for IB Maths AI SL: place a central facility for four towns using Voronoi ideas.',
      title: 'IB Maths AI SL Mathematical Modelling',
      description:
        'These mathematical modelling examples apply Voronoi diagrams to a real decision about where to build.',
      questionTitle: 'Mathematical Modelling: Questions & Answers',
      questionDescription:
        'Explain what is mathematical modelling in this context: set up the model, solve it, and judge whether the answer is sensible. Questions follow syllabus section SL 3.6. Every question comes with the mark scheme working.',
    },
  },

  // 21. Statistics & Probability
  'statistics-probability': {
    'stratified-sampling': {
      metaTitle: 'Stratified Sampling Examples | IB Maths AI SL  ',
      metaDescription:
        'Stratified sampling examples in IB Maths AI SL: choose the right number from each group, plus a quota sampling question.',
      title: 'IB Maths AI SL Stratified Sampling',
      description:
        'These stratified sampling examples select from each group in proportion to its size.',
      questionTitle: 'Stratified Sampling: Questions & Answers',
      questionDescription:
        "To answer what is stratified sampling in practice, multiply each group's proportion by the sample size and round sensibly. Questions follow syllabus section SL 4.1. Every question comes with the mark scheme working.",
    },

    'sampling-methods-bias': {
      metaTitle: 'Sampling Methods and Bias | IB Maths AI SL  ',
      metaDescription:
        'Sampling methods and bias in IB Maths AI SL: judge how surveys of pets and school pupils were sampled, and spot outliers.',
      title: 'IB Maths AI SL Sampling Methods and Bias',
      description:
        'Sampling methods and bias are linked: the way a sample is chosen decides whether it represents the population.',
      questionTitle: 'Sampling Methods & Bias: Questions & Answers',
      questionDescription:
        'Name the sampling method, explain any source of bias, and suggest a better method. Questions follow syllabus section SL 4.1. Every question comes with the mark scheme working.',
    },

    'types-of-data-systematic-sampling': {
      metaTitle: 'Types of Data and Sampling | IB Maths AI SL  ',
      metaDescription:
        'Types of data and sampling in IB Maths AI SL: discrete or continuous data, with convenience and systematic sampling.',
      title: 'IB Maths AI SL Types of Data and Systematic Sampling',
      description:
        'Types of data and sampling go together: first classify the data, then choose how to collect it.',
      questionTitle: 'Types of Data & Systematic Sampling: Questions & Answers',
      questionDescription:
        'State whether the data are discrete or continuous, describe the sampling method, and give one advantage or disadvantage. Questions follow syllabus section SL 4.1. Every question comes with the mark scheme working.',
    },

    'quota-sampling-sampling-methods': {
      metaTitle: 'Quota Sampling Questions | IB Maths AI SL  ',
      metaDescription:
        'Quota sampling in IB Maths AI SL: estimate the proportion of adult animals in a wildlife park, and compare methods.',
      title: 'IB Maths AI SL Quota Sampling and Sampling Methods',
      description: 'Quota sampling fills a set number from each group, but not at random.',
      questionTitle: 'Quota Sampling & Sampling Methods: Questions & Answers',
      questionDescription:
        'Describe how the quota is set, explain why it is not random, and compare it with stratified sampling. Questions follow syllabus section SL 4.1. Every question comes with the mark scheme working.',
    },

    'sampling-outliers-interpretation': {
      metaTitle: 'Sample Data and Outliers | IB Maths AI SL  ',
      metaDescription:
        'Interpret sample data and outliers in IB Maths AI SL using the heights of six children from a primary school.',
      title: 'IB Maths AI SL Sampling, Outliers and Interpretation',
      description: 'Sample data and outliers both affect how far you can trust a conclusion.',
      questionTitle: 'Sampling, Outliers & Interpretation: Questions & Answers',
      questionDescription:
        'Test for outliers, comment on the sample size and method, and say whether the result can be generalised. Questions follow syllabus section SL 4.1. Every question comes with the mark scheme working.',
    },

    'randomised-response-theory': {
      metaTitle: 'Randomised Response Theory | IB Maths AI SL  ',
      metaDescription:
        'Randomised response theory in IB Maths AI SL: estimate how many people answer yes to a sensitive question, using probability.',
      title: 'IB Maths AI SL Randomised Response Theory',
      description:
        'Randomised response theory lets people answer sensitive questions honestly, because no single answer can be traced to them.',
      questionTitle: 'Randomised Response Theory: Questions & Answers',
      questionDescription:
        'Use the probability of each route to a yes, set the total equal to the observed proportion, and solve for the unknown. Questions follow syllabus section SL 4.1. Every question comes with the mark scheme working.',
    },

    'capture-recapture-lincolnpetersen-method': {
      metaTitle: 'Capture-Recapture Method | IB Maths AI SL  ',
      metaDescription:
        'Use the capture recapture method in IB Maths AI SL, the Lincoln–Petersen estimate, for cod in the North Sea.',
      title: 'IB Maths AI SL Capture-Recapture: Lincoln–Petersen Method',
      description:
        'The capture recapture method estimates a population from how many tagged animals are caught a second time.',
      questionTitle: 'Capture-Recapture / Lincoln–Petersen Method: Questions & Answers',
      questionDescription:
        'Use N ≈ (n₁ × n₂) ÷ m, where m is the number recaptured, and state the assumptions the estimate relies on. Questions follow syllabus section SL 4.1. Every question comes with the mark scheme working.',
    },

    histograms: {
      metaTitle: 'Histograms Questions | IB Maths AI SL  ',
      metaDescription:
        'Histograms in IB Maths AI SL: draw them with technology, read frequencies from bars and match them to cumulative frequency.',
      title: 'IB Maths AI SL Histograms',
      description: 'Histograms show the distribution of continuous data, with bars that touch.',
      questionTitle: 'Histograms: Questions & Answers',
      questionDescription:
        "Enter the data with technology, read each bar's frequency carefully, and match shapes to the steepest parts of cumulative frequency curves. Questions follow syllabus section SL 4.2. Every question comes with the mark scheme working.",
    },

    'cumulative-frequency-statistics': {
      metaTitle: 'Cumulative Frequency Questions | IB Maths AI SL  ',
      metaDescription:
        'Cumulative frequency questions for IB Maths AI SL: read the median, quartiles and percentiles from a curve of 150 values.',
      title: 'IB Maths AI SL Cumulative Frequency: Statistics',
      description:
        'Cumulative frequency questions like these read statistics straight from the curve.',
      questionTitle: 'Cumulative Frequency – Statistics: Questions & Answers',
      questionDescription:
        'These cumulative frequency questions and answers follow one method: read across at 75 for the median, at 37.5 and 112.5 for the quartiles, and down to the x-axis for each value. Questions follow syllabus section SL 4.2. Every question comes with the mark scheme working.',
    },

    'box-and-whisker-diagrams': {
      metaTitle: 'Box and Whisker Diagrams | IB Maths AI SL  ',
      metaDescription:
        'Construct box and whisker diagrams in IB Maths AI SL from small data sets, using the five-number summary.',
      title: 'IB Maths AI SL Box-and-Whisker Diagrams',
      description:
        'Box and whisker diagrams show the five-number summary: minimum, Q₁, median, Q₃ and maximum.',
      questionTitle: 'Box-and-Whisker Diagrams: Questions & Answers',
      questionDescription:
        'Order the data, find the five values with technology, and draw the box and whiskers on a labelled scale. Questions follow syllabus section SL 4.2. Every question comes with the mark scheme working.',
    },

    'normal-distribution-finding-probabilities': {
      metaTitle: 'Normal Distribution Examples | IB Maths AI SL  ',
      metaDescription:
        'Normal distribution examples in IB Maths AI SL: find probabilities with your GDC for tree heights, ages and other contexts.',
      title: 'IB Maths AI SL Normal Distribution: Finding Probabilities',
      description:
        'These normal distribution examples find probabilities for continuous data that cluster around a mean.',
      questionTitle: 'Normal distribution – finding probabilities: Questions & Answers',
      questionDescription:
        'In these normal distribution questions, sketch the curve, shade the region, and find each normal distribution probability using normal cdf with the mean and standard deviation. Questions follow syllabus section SL 4.9. Every question comes with the mark scheme working.',
    },

    'normal-distribution-finding-unknown-values': {
      metaTitle: 'Inverse Normal Distribution Questions | AI SL  ',
      metaDescription:
        'Inverse normal distribution questions for IB Maths AI SL: find x when P(X < x) is given, using your GDC.',
      title: 'IB Maths AI SL Normal Distribution: Finding Unknown Values',
      description:
        'Inverse normal distribution questions start with a probability and find the value that gives it.',
      questionTitle: 'Normal distribution – finding unknown values: Questions & Answers',
      questionDescription:
        'Convert the condition to a left-tail area, use inverse normal with the mean and standard deviation, and check the answer is sensible. Questions follow syllabus section SL 4.9. Every question comes with the mark scheme working.',
    },
  },

  // 22. Probability & Statistics
  'probability-statistics': {
    'discrete-probability-distributions': {
      metaTitle: 'Discrete Probability Distributions | IB AI SL  ',
      metaDescription:
        'Discrete probability distributions in IB Maths AI SL: build tables from counters and dice, and find the expected value.',
      title: 'IB Maths AI SL Discrete Probability Distributions',
      description:
        'Discrete probability distributions list every value of a discrete random variable with its probability.',
      questionTitle: 'Discrete Probability Distributions: Questions & Answers',
      questionDescription:
        'As in the discrete probability distributions examples, list every outcome, check the probabilities sum to 1, and find E(X) = Σxp. Questions follow syllabus section SL 4.7. Every question comes with the mark scheme working.',
    },

    'probability-distributions-algebraic': {
      metaTitle: 'Probability Distributions Questions | IB AI SL  ',
      metaDescription:
        'Probability distributions in IB Maths AI SL given by a formula: find the unknown constant, then probabilities and E(X).',
      title: 'IB Maths AI SL Probability Distributions (Algebraic)',
      description: 'Some probability distributions are given by a formula rather than a table.',
      questionTitle: 'Probability Distributions (algebraic): Questions & Answers',
      questionDescription:
        'Use the probability distributions formula for each value, set the total equal to 1 to find the constant, then calculate. Questions follow syllabus section SL 4.7. Every question comes with the mark scheme working.',
    },
  },

  // 23. Calculus
  calculus: {
    limits: {
      metaTitle: 'Limits Examples | IB Maths AI SL  ',
      metaDescription:
        'Limits examples for IB Maths AI SL: suggest a limit by substituting values close to zero, or from a graph on your GDC.',
      title: 'IB Maths AI SL Limits',
      description:
        'These limits examples estimate what a function approaches when direct substitution fails.',
      questionTitle: 'Limits: Questions & Answers',
      questionDescription:
        'In these limits questions, try values closer and closer to the point, or graph the function, and state the value it approaches. This is the starting idea of limits calculus. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.',
    },

    'gradient-by-numerical-method': {
      metaTitle: 'Slope of a Curve: Numerical Method | IB AI SL  ',
      metaDescription:
        'Estimate the slope of a curve in IB Maths AI SL with chords from P to points Q that move closer, such as on y = x².',
      title: 'IB Maths AI SL Gradient by Numerical Method',
      description:
        'The slope of a curve at a point is the limit of chord gradients as the second point moves closer.',
      questionTitle: 'Gradient by Numerical Method: Questions & Answers',
      questionDescription:
        'Complete the table of chord gradients, watch the values settle, and state the gradient of a curve at P. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.',
    },

    'derivative-notation': {
      metaTitle: 'Derivative of a Constant and Notation | AI SL  ',
      metaDescription:
        'Use derivative notation in IB Maths AI SL, find the derivative of a constant and of linear terms, and evaluate dy/dx.',
      title: 'IB Maths AI SL Derivative Notation',
      description:
        'The derivative of a constant is zero, since a constant never changes. Derivative notation, dy/dx, names the rate of change.',
      questionTitle: 'Derivative Notation: Questions & Answers',
      questionDescription:
        'Write each rate of change as a derivative, differentiate term by term treating letters a, b and c as constants, then substitute. Questions follow syllabus section SL 5.3, SL 5.1, SL 5.4. Every question comes with the mark scheme working.',
    },

    'differential-equations-forming': {
      metaTitle: 'Forming Differential Equations | IB Maths AI SL  ',
      metaDescription:
        'Practise forming differential equations in IB Maths AI SL from statements about gradients and rates of change.',
      title: 'IB Maths AI SL Differential Equations (Forming)',
      description:
        'Forming differential equations means turning a sentence about a rate into an equation with dy/dx.',
      questionTitle: 'Differential Equations (Forming): Questions & Answers',
      questionDescription:
        "Identify the variables, write the rate as a derivative, and translate 'proportional to' with a constant k. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.",
    },

    'gradient-from-first-principles': {
      metaTitle: 'Slope of Tangent and First Principles | AI SL  ',
      metaDescription:
        'Find the slope of tangent lines in IB Maths AI SL, from chords and first principles, and where the gradient equals y.',
      title: 'IB Maths AI SL Gradient from First Principles',
      description:
        'The slope of tangent lines is the limit of chord gradients, which is how differentiation from first principles works.',
      questionTitle: 'Gradient from First Principles: Questions & Answers',
      questionDescription:
        'Find the gradient of the chord in terms of x, let x approach the point, and state the gradient of tangent at that point. Questions follow syllabus section SL 5.4, SL 5.1. Every question comes with the mark scheme working.',
    },

    'derivatives-related-rates': {
      metaTitle: 'Related Rates Questions | IB Maths AI SL  ',
      metaDescription:
        'Related rates questions in IB Maths AI SL: given dx/dy = 3x, find the gradient dy/dx on the graph at a given point.',
      title: 'IB Maths AI SL Derivatives and Related Rates',
      description:
        'Related rates questions like this link two derivatives. Here dy/dx is the reciprocal of dx/dy.',
      questionTitle: 'Derivatives / Related Rates: Questions & Answers',
      questionDescription:
        'Take the reciprocal of the given rate, substitute the point, and simplify. Questions follow syllabus section SL 5.1. Every question comes with the mark scheme working.',
    },

    'increasing-decreasing-functions': {
      metaTitle: 'Increasing and Decreasing Functions | IB AI SL  ',
      metaDescription:
        'Increasing and decreasing functions in IB Maths AI SL: read intervals from a graph and from the sign of f′(x).',
      title: 'IB Maths AI SL Increasing and Decreasing Functions',
      description:
        'Increasing decreasing functions are identified by the sign of the gradient: positive means increasing, negative means decreasing.',
      questionTitle: 'Increasing/Decreasing Functions: Questions & Answers',
      questionDescription:
        'Find f′(x), solve f′(x) > 0 or f′(x) < 0, and write the increasing and decreasing intervals as inequalities. Questions follow syllabus section SL 5.2, SL 5.3. Every question comes with the mark scheme working.',
    },

    'sketching-derivatives': {
      metaTitle: 'Sketching Derivatives | IB Maths AI SL  ',
      metaDescription:
        'Practise sketching derivatives in IB Maths AI SL: draw the graph of y = f′(x) from the graph of y = f(x), shape by shape.',
      title: 'IB Maths AI SL Sketching Derivatives',
      description:
        'Sketching derivatives turns the gradient of one graph into the height of another.',
      questionTitle: 'Sketching Derivatives: Questions & Answers',
      questionDescription:
        'Mark where f has turning points as zeros of f′, then decide where f′ is positive or negative from the slope of f. Questions follow syllabus section SL 5.2. Every question comes with the mark scheme working.',
    },

    'inequalities-from-f-x': {
      metaTitle: 'Inequalities from the Derivative | IB AI SL  ',
      metaDescription:
        'Solve inequalities from the derivative in IB Maths AI SL by reading where the graph of f′(x) is above or below the axis.',
      title: 'IB Maths AI SL Inequalities from f′(x)',
      description:
        'Inequalities from the derivative come straight from the graph of f′(x): above the axis means f is increasing.',
      questionTitle: "Inequalities from f'(x): Questions & Answers",
      questionDescription:
        'Find where f′(x) = 0, then read the intervals where f′(x) > 0 and f′(x) < 0. Questions follow syllabus section SL 5.2. Every question comes with the mark scheme working.',
    },

    'sketching-f-x-from-f-x': {
      metaTitle: 'Sketching f from f Prime | IB Maths AI SL  ',
      metaDescription:
        'Practise sketching f from f prime in IB Maths AI SL, building a possible graph of y = f(x) from y = f′(x).',
      title: 'IB Maths AI SL Sketching f(x) from f′(x)',
      description:
        'Sketching f from f prime reverses the usual process: the height of f′ tells you the slope of f.',
      questionTitle: "Sketching f(x) from f'(x): Questions & Answers",
      questionDescription:
        'Use zeros of f′ as turning points of f, positive regions as increasing and negative regions as decreasing. Questions follow syllabus section SL 5.2. Every question comes with the mark scheme working.',
    },

    'technology-graphing': {
      metaTitle: 'Graphing Derivatives on a Calculator | IB AI SL  ',
      metaDescription:
        'Practise graphing derivatives on a calculator in IB Maths AI SL, for functions such as f(x) = x²(x² − 1).',
      title: 'IB Maths AI SL Technology and Graphing',
      description:
        'Graphing derivatives on a calculator lets you compare a function with its gradient function.',
      questionTitle: 'Technology / Graphing: Questions & Answers',
      questionDescription:
        'Graph y = f(x) and its numerical derivative together, then link turning points of f to zeros of f′. Questions follow syllabus section SL 5.2. Every question comes with the mark scheme working.',
    },

    'function-and-derivative-matching': {
      metaTitle: 'Function and Derivative Matching | IB AI SL  ',
      metaDescription:
        'Function and derivative matching in IB Maths AI SL: pair each graph with the graph of its derivative.',
      title: 'IB Maths AI SL Function and Derivative Matching',
      description:
        'Function and derivative matching relies on turning points: they line up with the zeros of the derivative.',
      questionTitle: 'Function and Derivative Matching: Questions & Answers',
      questionDescription:
        "Find each graph's turning points and where it increases, then match it to the derivative that is zero and positive in the same places. Questions follow syllabus section SL 5.2. Every question comes with the mark scheme working.",
    },

    'differentiation-power-rule': {
      metaTitle: 'Power Rule Differentiation | IB Maths AI SL  ',
      metaDescription:
        'Power rule differentiation in IB Maths AI SL: find the derivative of xⁿ, multiplying by the power and reducing it by one.',
      title: 'IB Maths AI SL Differentiation: Power Rule',
      description: 'Power rule differentiation turns axⁿ into naxⁿ⁻¹.',
      questionTitle: 'Differentiation – Power Rule: Questions & Answers',
      questionDescription:
        'Multiply the coefficient by the power, subtract one from the power, and simplify. Questions follow syllabus section SL 5.3. Every question comes with the mark scheme working.',
    },

    'differentiation-rewriting-as-power': {
      metaTitle: 'Differentiating Negative Powers | IB AI SL  ',
      metaDescription:
        'Practise differentiating negative powers in IB Maths AI SL: rewrite 1/x and roots as powers before differentiating.',
      title: 'IB Maths AI SL Differentiation: Rewriting as a Power',
      description:
        'Differentiating negative powers starts with rewriting: 1/x becomes x⁻¹ and √x becomes x^½.',
      questionTitle: 'Differentiation – Rewriting as Power: Questions & Answers',
      questionDescription:
        'Rewrite each term as axⁿ, apply the power rule, and rewrite the answer without negative indices if asked. Questions follow syllabus section SL 5.3. Every question comes with the mark scheme working.',
    },

    'differentiation-polynomial-functions': {
      metaTitle: 'Differentiating Polynomials | IB Maths AI SL  ',
      metaDescription:
        'Practise differentiating polynomials in IB Maths AI SL term by term, from f(x) = x² − 4x to longer expressions.',
      title: 'IB Maths AI SL Differentiation: Polynomial Functions',
      description: 'Differentiating polynomials applies the power rule to each term separately.',
      questionTitle: 'Differentiation – Polynomial Functions: Questions & Answers',
      questionDescription:
        'Differentiate each term, remember the constant becomes zero, and write the derivative in simplest form. Questions follow syllabus section SL 5.3. Every question comes with the mark scheme working.',
    },

    'differentiation-expand-then-differentiate': {
      metaTitle: 'Expand and Differentiate | IB Maths AI SL  ',
      metaDescription:
        'Expand and differentiate in IB Maths AI SL: multiply out brackets such as x³(2x − 5) before finding the derivative.',
      title: 'IB Maths AI SL Differentiation: Expand then Differentiate',
      description:
        'In AI SL, products must be expanded before you differentiate, since the product rule is not on the syllabus.',
      questionTitle: 'Differentiation – Expand then Differentiate: Questions & Answers',
      questionDescription:
        'Expand and differentiate in two clear steps: multiply out fully, then apply the power rule term by term. Questions follow syllabus section SL 5.3. Every question comes with the mark scheme working.',
    },

    'differentiation-simplify-then-differentiate': {
      metaTitle: 'Simplify and Differentiate | IB Maths AI SL  ',
      metaDescription:
        'Simplify and differentiate in IB Maths AI SL: split fractions like (x + 10)/x into separate powers first.',
      title: 'IB Maths AI SL Differentiation: Simplify then Differentiate',
      description:
        'To simplify and differentiate a fraction, divide each term in the numerator by the denominator.',
      questionTitle: 'Differentiation – Simplify then Differentiate: Questions & Answers',
      questionDescription:
        'Write the expression as a sum of powers of x, differentiate each term, and simplify. Questions follow syllabus section SL 5.3. Every question comes with the mark scheme working.',
    },

    'differentiation-applied': {
      metaTitle: 'Applications of Differentiation | IB AI SL  ',
      metaDescription:
        'Applications of differentiation in IB Maths AI SL: differentiate expressions in t, such as d = 6t − 4/t, with respect to t.',
      title: 'IB Maths AI SL Differentiation: Applied',
      description:
        'Applications of differentiation often use letters other than x, such as t for time.',
      questionTitle: 'Differentiation – Applied: Questions & Answers',
      questionDescription:
        'Rewrite each term as a power of the variable, differentiate with respect to it, and include units if the context gives them. Questions follow syllabus section SL 5.3. Every question comes with the mark scheme working.',
    },

    'differentiation-implicit': {
      metaTitle: 'Implicit Differentiation Questions | IB AI SL  ',
      metaDescription:
        'Implicit differentiation in IB Maths AI SL at its simplest: find dy/dx when x + y = 8 by rearranging first.',
      title: 'IB Maths AI SL Differentiation: Implicit',
      description:
        'These implicit differentiation examples are simple enough to rearrange for y before differentiating.',
      questionTitle: 'Differentiation – Implicit: Questions & Answers',
      questionDescription:
        'Make y the subject, differentiate, and check the answer by differentiating both sides of the original equation. Questions follow syllabus section SL 5.3. Every question comes with the mark scheme working.',
    },

    'differentiation-contextual-application': {
      metaTitle: 'Differentiation Word Problems | IB Maths AI SL  ',
      metaDescription:
        'Differentiation word problems in IB Maths AI SL: potential energy around a star, and its rate of change with distance.',
      title: 'IB Maths AI SL Differentiation: Contextual Application',
      description:
        'Differentiation word problems ask what a rate of change means in a real situation.',
      questionTitle: 'Differentiation – Contextual Application: Questions & Answers',
      questionDescription:
        'Differentiate with respect to the stated variable, substitute the given value, and interpret the sign and units. Questions follow syllabus section SL 5.3. Every question comes with the mark scheme working.',
    },

    'proof-increasing-functions': {
      metaTitle: 'Prove a Function Is Increasing | IB Maths AI SL  ',
      metaDescription:
        'Prove a function is increasing in IB Maths AI SL: show f(x) = 4x³ + 7x − 2 has a positive derivative for every x.',
      title: 'IB Maths AI SL Proof: Increasing Functions',
      description:
        'To prove a function is increasing everywhere, show its derivative is always positive.',
      questionTitle: 'Proof – Increasing Functions: Questions & Answers',
      questionDescription:
        'Differentiate, explain why every term is positive or non-negative, and conclude that f′(x) > 0 for all x. Questions follow syllabus section SL 5.3. Every question comes with the mark scheme working.',
    },

    'rate-of-change': {
      metaTitle: 'Rate of Change Questions | IB Maths AI SL  ',
      metaDescription:
        'Rate of change in IB Maths AI SL: find how quickly a quantity changes, and use integration for baths and filters.',
      title: 'IB Maths AI SL Rate of Change',
      description: 'A rate of change is a derivative. Integrating a rate gives the total change.',
      questionTitle: 'Rate of change: Questions & Answers',
      questionDescription:
        'Differentiate and substitute for an instantaneous rate, or integrate the rate over the time interval for a total. Questions follow syllabus section SL 5.4, SL 5.5. Every question comes with the mark scheme working.',
    },

    'finding-x-for-given-gradient': {
      metaTitle: 'Finding x for a Given Gradient | IB Maths AI SL  ',
      metaDescription:
        'Practise finding x for a given gradient in IB Maths AI SL by solving f′(x) = k, by hand or with technology.',
      title: 'IB Maths AI SL Finding x for a Given Gradient',
      description: 'Finding x for a given gradient means solving an equation in the derivative.',
      questionTitle: 'Finding x for given gradient: Questions & Answers',
      questionDescription:
        'Differentiate, set f′(x) equal to the gradient, and solve; use technology when the equation cannot be solved by hand. Questions follow syllabus section SL 5.4. Every question comes with the mark scheme working.',
    },

    'equation-of-tangent': {
      metaTitle: 'Equation of a Tangent | IB Maths AI SL  ',
      metaDescription:
        'Find the equation of a tangent in IB Maths AI SL by hand and with technology, in the form ax + by + d = 0.',
      title: 'IB Maths AI SL Equation of a Tangent',
      description:
        'The equation of tangent lines uses the derivative for the gradient and the curve for the point.',
      questionTitle: 'Equation of tangent: Questions & Answers',
      questionDescription:
        'Apply the equation of tangent formula, y − y₁ = m(x − x₁), with m = f′(a), then rearrange to the form asked. Questions follow syllabus section SL 5.4. Every question comes with the mark scheme working.',
    },

    'equation-of-normal': {
      metaTitle: 'Equation of a Normal | IB Maths AI SL  ',
      metaDescription:
        'Find the equation of a normal in IB Maths AI SL by hand and with technology, perpendicular to the tangent.',
      title: 'IB Maths AI SL Equation of a Normal',
      description:
        "The equation of normal lines uses the negative reciprocal of the tangent's gradient.",
      questionTitle: 'Equation of normal: Questions & Answers',
      questionDescription:
        'Find f′(a), take −1/f′(a), substitute the point, and rearrange to the form asked. Questions follow syllabus section SL 5.4. Every question comes with the mark scheme working.',
    },

    'differentiation-tangent-and-normal': {
      metaTitle: 'Tangent and Normal Questions | IB Maths AI SL  ',
      metaDescription:
        'Tangent and normal problems in IB Maths AI SL: tangents through external points and the origin, and a short proof.',
      title: 'IB Maths AI SL Differentiation: Tangent and Normal',
      description:
        'These tangent and normal questions go further: the point of contact is unknown and must be found.',
      questionTitle: 'Differentiation – tangent and normal: Questions & Answers',
      questionDescription:
        'Write the tangent at a general point, substitute the given external point, and solve for the point of contact. Questions follow syllabus section SL 5.4. Every question comes with the mark scheme working.',
    },

    'normal-meets-curve-again': {
      metaTitle: 'Normal Meets the Curve Again | IB Maths AI SL  ',
      metaDescription:
        'Find where the normal meets the curve again in IB Maths AI SL, such as the normal to y = x² at x = 1.',
      title: 'IB Maths AI SL Normal Meets the Curve Again',
      description:
        'Where the normal meets the curve again comes from solving the normal and the curve together.',
      questionTitle: 'Normal meets curve again: Questions & Answers',
      questionDescription:
        "Find the normal's equation, set it equal to the curve, and solve; one solution is the original point. Questions follow syllabus section SL 5.4. Every question comes with the mark scheme working.",
    },

    'parallel-tangent': {
      metaTitle: 'Parallel Tangent Questions | IB Maths AI SL  ',
      metaDescription:
        'Find the parallel tangent in IB Maths AI SL: the tangent to the curve y = x² that is parallel to a given line.',
      title: 'IB Maths AI SL Parallel Tangent',
      description: 'A parallel tangent has the same gradient as the given line.',
      questionTitle: 'Parallel tangent: Questions & Answers',
      questionDescription:
        "Find the line's gradient, solve f′(x) = m for the point of contact, and write the tangent's equation. Questions follow syllabus section SL 5.4. Every question comes with the mark scheme working.",
    },

    'parallel-normal': {
      metaTitle: 'Parallel Normal Questions | IB Maths AI SL  ',
      metaDescription:
        'Find a parallel normal in IB Maths AI SL, where the normal to a curve is parallel to a given straight line.',
      title: 'IB Maths AI SL Parallel Normal',
      description:
        "A parallel normal has the line's gradient, so the tangent has the negative reciprocal.",
      questionTitle: 'Parallel normal: Questions & Answers',
      questionDescription:
        'Find the tangent gradient needed, solve f′(x) for it, and write the normal through that point. Questions follow syllabus section SL 5.4. Every question comes with the mark scheme working.',
    },

    'perpendicular-normals': {
      metaTitle: 'Perpendicular Normals | IB Maths AI SL  ',
      metaDescription:
        'Find perpendicular normals in IB Maths AI SL: the normals to y = x³ that are perpendicular to a given line.',
      title: 'IB Maths AI SL Perpendicular Normals',
      description: 'Perpendicular normals to a line have tangents parallel to that line.',
      questionTitle: 'Perpendicular normals: Questions & Answers',
      questionDescription:
        "Set f′(x) equal to the line's gradient, find every point, and write the normal at each. Questions follow syllabus section SL 5.4. Every question comes with the mark scheme working.",
    },

    'proof-area-independent-of-parameter': {
      metaTitle: 'Tangent Area Proof | IB Maths AI SL  ',
      metaDescription:
        'A tangent area proof for IB Maths AI SL: show the triangle under a tangent to y = 1/x has area that does not depend on a.',
      title: 'IB Maths AI SL Proof: Area Independent of a Parameter',
      description:
        'This tangent area proof shows a surprising result: the area stays the same wherever the tangent is drawn.',
      questionTitle: 'Proof – area independent of parameter: Questions & Answers',
      questionDescription:
        "Write the tangent at x = a, find both intercepts, calculate the triangle's area, and simplify to a constant. Questions follow syllabus section SL 5.4. Every question comes with the mark scheme working.",
    },

    'integration-of-power-functions': {
      metaTitle: 'Integration Power Rule | IB Maths AI SL  ',
      metaDescription:
        'Use the integration power rule in IB Maths AI SL to find f(x) from f′(x), adding the constant of integration.',
      title: 'IB Maths AI SL Integration of Power Functions',
      description:
        'The integration power rule reverses differentiation: add one to the power, then divide by the new power.',
      questionTitle: 'Integration of Power Functions: Questions & Answers',
      questionDescription:
        'Integrate each term, add + c, and check by differentiating your answer. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },

    'integration-of-polynomials': {
      metaTitle: 'Integration of Polynomials | IB Maths AI SL  ',
      metaDescription:
        'Integration of polynomials in IB Maths AI SL: find y from dy/dx term by term, for example 3x² − 4x + 5.',
      title: 'IB Maths AI SL Integration of Polynomials',
      description: 'Integration of polynomials applies the power rule to each term in turn.',
      questionTitle: 'Integration of Polynomials: Questions & Answers',
      questionDescription:
        'Integrate term by term, remember a constant integrates to a multiple of x, and add + c. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },

    'integration-by-expansion': {
      metaTitle: 'Integration by Expansion | IB Maths AI SL  ',
      metaDescription:
        'Integration by expansion in IB Maths AI SL: multiply out brackets such as x²(x + 5) before integrating.',
      title: 'IB Maths AI SL Integration by Expansion',
      description:
        'Integration by expansion is needed because a product cannot be integrated term by term.',
      questionTitle: 'Integration by Expansion: Questions & Answers',
      questionDescription:
        'Expand the brackets fully, integrate each power of x, and add + c. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },

    'integration-after-algebraic-simplification': {
      metaTitle: 'Integration after Simplifying | IB Maths AI SL  ',
      metaDescription:
        'Integration after simplifying in IB Maths AI SL: write fractions and roots as sums of axⁿ before you integrate.',
      title: 'IB Maths AI SL Integration after Algebraic Simplification',
      description: 'Integration after simplifying starts with rewriting each term as a power of x.',
      questionTitle: 'Integration after Algebraic Simplification: Questions & Answers',
      questionDescription:
        'Divide through by the denominator, write roots as fractional powers, integrate, and add + c. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },

    'finding-constants-of-integration': {
      metaTitle: 'Finding Constants of Integration | IB AI SL  ',
      metaDescription:
        'Practise finding constants of integration in IB Maths AI SL from a known point on the curve, then write the equation.',
      title: 'IB Maths AI SL Finding Constants of Integration',
      description:
        'Finding constants of integration picks out one curve from the family y = F(x) + c.',
      questionTitle: 'Finding Constants of Integration: Questions & Answers',
      questionDescription:
        'Integrate, substitute the given point, solve for c, and write the final equation. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },

    'applied-integration-kinematics-growth': {
      metaTitle: 'Applications of Integration Questions | AI SL  ',
      metaDescription:
        'Applications of integration questions in IB Maths AI SL: weed growth and kinematics, finding a quantity from its rate of change.',
      title: 'IB Maths AI SL Applied Integration: Kinematics and Growth',
      description:
        'These applications of integration questions recover a quantity from its rate, such as mass from a growth rate.',
      questionTitle: 'Applied Integration – Kinematics/Growth: Questions & Answers',
      questionDescription:
        'Integrate the rate, use the initial condition to find c, and answer the question in context. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },

    'differentiation-horizontal-tangents': {
      metaTitle: 'Horizontal Tangent Questions | IB Maths AI SL  ',
      metaDescription:
        'Horizontal tangent problems in IB Maths AI SL: find unknown constants so a curve has a horizontal tangent at a point.',
      title: 'IB Maths AI SL Differentiation: Horizontal Tangents',
      description:
        'A horizontal tangent has gradient zero, which gives one equation for an unknown constant.',
      questionTitle: 'Differentiation – Horizontal Tangents: Questions & Answers',
      questionDescription:
        'Set f′(x) = 0 at the given point, use the point on the curve for a second equation, and solve. Questions follow syllabus section SL 5.6. Every question comes with the mark scheme working.',
    },

    'solving-f-x-0': {
      metaTitle: 'Stationary Points: Solving f′(x) = 0 | IB AI SL  ',
      metaDescription:
        'Find stationary points in IB Maths AI SL by solving f′(x) = 0, by hand or with technology, alongside f(x) = 0.',
      title: 'IB Maths AI SL Solving f′(x) = 0',
      description: 'Stationary points are where the gradient is zero, so f′(x) = 0.',
      questionTitle: "Solving f'(x) = 0: Questions & Answers",
      questionDescription:
        'Differentiate, solve f′(x) = 0, and substitute each solution into f(x) for the coordinates. Questions follow syllabus section SL 5.6. Every question comes with the mark scheme working.',
    },

    'local-max-min-and-maximum-value': {
      metaTitle: 'Local Maximum and Minimum | IB Maths AI SL  ',
      metaDescription:
        'Find the local maximum and minimum points in IB Maths AI SL, including unknown coefficients and maximum values on a domain.',
      title: 'IB Maths AI SL Local Max/Min and Maximum Value',
      description:
        'A local maximum and minimum are turning points where the gradient changes sign.',
      questionTitle: 'Local Max/Min and Maximum Value: Questions & Answers',
      questionDescription:
        'As in the local maximum and minimum examples, solve f′(x) = 0, classify each point, and compare with the end points of the domain. Questions follow syllabus section SL 5.6. Every question comes with the mark scheme working.',
    },

    'horizontal-tangents-coordinate-finding': {
      metaTitle: 'Horizontal Tangent Line Points | IB Maths AI SL  ',
      metaDescription:
        'Find the points where a horizontal tangent line touches the curve y = 4x³ − x⁴ in IB Maths AI SL, by solving f′(x) = 0.',
      title: 'IB Maths AI SL Horizontal Tangents: Finding Coordinates',
      description: 'A horizontal tangent line touches the curve where its gradient is zero.',
      questionTitle: 'Horizontal Tangents – Coordinate Finding: Questions & Answers',
      questionDescription:
        'Differentiate, factorise f′(x) = 0, and substitute each x into the curve for the coordinates. Questions follow syllabus section SL 5.6. Every question comes with the mark scheme working.',
    },

    'local-min-smallest-value-on-domain': {
      metaTitle: 'Minimum Value of a Function | IB Maths AI SL  ',
      metaDescription:
        'Find the minimum value of a function in IB Maths AI SL: the local minimum, then the smallest value on a domain.',
      title: 'IB Maths AI SL Local Minimum and Smallest Value on a Domain',
      description:
        'The minimum value of a function on a domain may be a local minimum or an end point.',
      questionTitle: 'Local Min + Smallest Value on Domain: Questions & Answers',
      questionDescription:
        'Find the local minimum with f′(x) = 0, evaluate f at the end points, and compare. Questions follow syllabus section SL 5.6. Every question comes with the mark scheme working.',
    },

    'greatest-value-on-closed-domain': {
      metaTitle: 'Absolute Maximum on a Closed Interval | AI SL  ',
      metaDescription:
        'Find the absolute maximum on a closed interval in IB Maths AI SL for f(x) = 3x² + x³ − 0.3x⁵ on −3 ≤ x ≤ 3.',
      title: 'IB Maths AI SL Greatest Value on a Closed Domain',
      description:
        'The absolute maximum on a closed interval is the greatest value anywhere in it, including the end points.',
      questionTitle: 'Greatest Value on Closed Domain: Questions & Answers',
      questionDescription:
        'Find every stationary point in the interval, evaluate f there and at both ends, and choose the largest. Questions follow syllabus section SL 5.6. Every question comes with the mark scheme working.',
    },

    'optimisation-differentiation': {
      metaTitle: 'Optimisation Using Differentiation | IB AI SL  ',
      metaDescription:
        'Optimisation using differentiation in IB Maths AI SL: maximise profit from advertising, minimise cost and more.',
      title: 'IB Maths AI SL Optimisation: Differentiation',
      description:
        'Optimisation using differentiation finds the input that gives the greatest or least value of a model.',
      questionTitle: 'Optimisation – Differentiation: Questions & Answers',
      questionDescription:
        'Write the quantity in one variable, solve the derivative equal to zero, confirm it is a maximum or minimum, and answer in context. Questions follow syllabus section SL 5.7. Every question comes with the mark scheme working.',
    },
  },

  // 24. Analysis & Approaches / Applications & Interpretation
  'analysis-approaches-applications-interpretation': {
    'definite-integration': {
      metaTitle: 'Definite Integration Questions | IB Maths AI SL  ',
      metaDescription:
        'Definite integration in IB Maths AI SL: evaluate integrals with your GDC, and integrate f(x) after finding it from f′(x).',
      title: 'IB Maths AI SL Definite Integration',
      description:
        'Definite integration gives a number: the signed area between the curve and the x-axis over an interval.',
      questionTitle: 'Definite Integration: Questions & Answers',
      questionDescription:
        "In these definite integration questions, use your GDC's integral tool with the limits, or find f(x) first when only f′(x) is given. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.",
    },

    'area-under-a-curve': {
      metaTitle: 'Area Under a Curve | IB Maths AI SL  ',
      metaDescription:
        'Find the area under a curve in IB Maths AI SL, such as the shaded region between y = 4x − x³ and the x-axis.',
      title: 'IB Maths AI SL Area Under a Curve',
      description:
        'The area under a curve is a definite integral. Parts below the x-axis must be treated separately.',
      questionTitle: 'Area Under a Curve: Questions & Answers',
      questionDescription:
        'Find where the curve crosses the axis, integrate each part, and add the absolute values. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },

    'area-between-two-curves': {
      metaTitle: 'Area Between Two Curves Formula | IB AI SL  ',
      metaDescription:
        'Use the area between two curves formula in IB Maths AI SL, and find the area between a curve and the y-axis with your GDC.',
      title: 'IB Maths AI SL Area Between Two Curves',
      description:
        'The area between two curves formula integrates the top curve minus the bottom curve.',
      questionTitle: 'Area Between Two Curves: Questions & Answers',
      questionDescription:
        'Find where the curves intersect, then apply the area between two curves formula, ∫(upper − lower) dx, between those limits. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },

    'reverse-differentiation-finding-f-x': {
      metaTitle: 'Antiderivative: Finding f(x) | IB Maths AI SL  ',
      metaDescription:
        'Use the antiderivative in IB Maths AI SL to find f(x) when ∫f(x) dx is given, by differentiating it term by term.',
      title: 'IB Maths AI SL Reverse Differentiation: Finding f(x)',
      description:
        'An antiderivative undoes differentiation, so differentiating it gives back f(x).',
      questionTitle: 'Reverse Differentiation / Finding f(x): Questions & Answers',
      questionDescription:
        'Differentiate the given antiderivative term by term, noting the constant disappears, and simplify. Questions follow syllabus section SL 5.5. Every question comes with the mark scheme working.',
    },
  },

  // 25. Integration
  integration: {
    'numerical-integration-trapezoid-rectangle-rule': {
      metaTitle: 'Numerical Integration Questions | IB AI SL  ',
      metaDescription:
        'Numerical integration in IB Maths AI SL: approximate integrals such as ∫5eˣ dx with strips, and compare with exact values.',
      title: 'IB Maths AI SL Numerical Integration',
      description:
        'Numerical integration approximates an integral by adding the areas of simple shapes.',
      questionTitle: 'Numerical Integration – Trapezoid/Rectangle Rule: Questions & Answers',
      questionDescription:
        'Find the strip width, evaluate the function at each boundary, apply the numerical integration formula, and compare with your GDC. Questions follow syllabus section SL 5.8. Every question comes with the mark scheme working.',
    },

    'trapezoidal-rule-given-data-points': {
      metaTitle: 'Trapezoidal Rule Questions | IB Maths AI SL  ',
      metaDescription:
        'The trapezoidal rule in IB Maths AI SL: estimate integrals from data, strips and intervals, and judge over- or underestimates.',
      title: 'IB Maths AI SL Trapezoidal Rule',
      description:
        'The trapezoidal rule estimates an integral by joining points with straight lines.',
      questionTitle: 'Trapezoidal Rule – Given Data Points: Questions & Answers',
      questionDescription:
        "Use the trapezoidal rule formula, ½h[y₀ + yₙ + 2(y₁ + … + yₙ₋₁)], and in these trapezoidal rule questions, use the curve's shape to say whether it over- or underestimates. Questions follow syllabus section SL 5.8. Every question comes with the mark scheme working.",
    },

    'real-world-application-area-estimation': {
      metaTitle: 'Estimating Area Under a Curve | IB Maths AI SL  ',
      metaDescription:
        'Practise estimating area under a curve in IB Maths AI SL: the area of a lake from widths measured at two-metre intervals.',
      title: 'IB Maths AI SL Real-World Application: Area Estimation',
      description:
        'Estimating area under a curve from measurements is the trapezoidal rule applied to real data.',
      questionTitle: 'Real-World Application – Area Estimation: Questions & Answers',
      questionDescription:
        'Use the measured widths as heights, the interval as h, apply the trapezoidal rule, and include units. Questions follow syllabus section SL 5.8. Every question comes with the mark scheme working.',
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
  let pageData: any = AISLQuestionAndAnswer?.find((item: any, index: any) => item?.[topicSlug])

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
