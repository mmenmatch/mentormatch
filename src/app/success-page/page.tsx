// import { Metadata } from 'next'
// import { SuccessPage } from '../components/SuccessPage/SuccessPage'
// import { Suspense } from 'react'

// export const metadata: Metadata = {
//   title: 'Success',
//   description: 'Form submitted successfully.',
//   openGraph: {
//     title: 'Success | Mentor Match',
//     description: 'Form submitted successfully.',
//     images: [
//       {
//         url: 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6a21389fc30b68ec4cafbe77_OG.webp', // absolute URL
//         width: 1200,
//         height: 630,
//         alt: 'Math | Mentor Match',
//       },
//     ],
//   },
// }

// export default function page({ searchParams }: { searchParams: { t?: string } }) {
//   return (
//     <Suspense fallback={null}>
//       <SuccessPage key={searchParams.t ?? 'default'} />
//     </Suspense>
//   )
// }
import { Metadata } from 'next'
import { SuccessPage } from '../components/SuccessPage/SuccessPage'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Success',
  description: 'Form submitted successfully.',
  openGraph: {
    title: 'Success | Mentor Match',
    description: 'Form submitted successfully.',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/6a21389fc30b68ec4cafbe77_OG.webp',
        width: 1200,
        height: 630,
        alt: 'Math | Mentor Match',
      },
    ],
  },
}

export default async function Page({ searchParams }: { searchParams: Promise<{ t?: string }> }) {
  const { t } = await searchParams

  return (
    <Suspense fallback={null}>
      <SuccessPage key={t ?? 'default'} />
    </Suspense>
  )
}
