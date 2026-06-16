import { NextRequest, NextResponse } from 'next/server'
type FormData = {
  email?: string
  childName?: string
  phone?: string
  grade?: string
  pageUrl?: string
  referrer?: string
  pricingAccepted?: string
  parentName?: string
  subject?: string
  curriculum?: string
  date?: string
  time?: string

  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
}

export async function POST(req: NextRequest) {
  const body: FormData = await req.json()
  const {
    parentName,
    subject,
    curriculum = '',
    email,
    childName = '',
    grade,
    phone,
    pageUrl,
    referrer,
    pricingAccepted,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
    date = '',
    time = '',
  } = body

  const results = await Promise.allSettled([
    submitToHubSpot({
      parentName,
      subject,
      curriculum,
      email,
      childName,
      grade,
      phone,
      pricingAccepted,
      pageUrl,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      date,
      time,
    }),
    // submitToGoogleSheets({ email, childName, grade, phone }),
    sendSlackNotification({
      parentName,
      subject,
      // curriculum,
      email,
      // childName,
      grade,
      phone,
      pricingAccepted,
      pageUrl,
      referrer,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      date,
      time,
    }),
  ])

  const failed = results.filter((r) => r.status === 'rejected')
  if (failed.length > 0) {
    console.error('Some submissions failed:', failed)
  }

  return NextResponse.json({ ok: true })
}

// ── HubSpot ──────────────────────────────────────────────
async function submitToHubSpot(data: any) {
  // console.log(' time', data?.time)
  // console.log(' Date', data?.date)

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/244333388/767d3250-c3d6-4873-84d2-ea278f019ab6`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { name: 'email', value: data?.email || ' ' },
          { name: 'price_qualification', value: data?.pricingAccepted || '' },
          { name: 'student_name', value: data?.childName || '' }, // custom property
          { name: 'class', value: data?.grade || ' ' },
          { name: 'phone', value: data?.phone || '' },
          { name: 'firstname', value: data?.parentName || ' ' },
          { name: 'subject', value: data?.subject || '' },
          { name: 'curriculum', value: data?.curriculum || '' },
          {
            name: 'preferred_demo_date',
            value: data?.date || '',
          },
          {
            name: 'preferred_demo_time',
            value: data?.time || '',
          },
          {
            name: 'source_url',
            value: data?.pageUrl || '',
          },
          {
            name: 'utm_source',
            value: data?.utm_source || '',
          },
          {
            name: 'utm_medium',
            value: data?.utm_medium || '',
          },
          {
            name: 'utm_campaign',
            value: data?.utm_campaign || '',
          },
          {
            name: 'utm_content',
            value: data?.utm_content || '',
          },
          {
            name: 'utm_term',
            value: data?.utm_term || '',
          },
        ],
      }),
    },
  )
  const result = await response.text()
  console.log('result', result)
  console.log(' time', data?.time)
  console.log(' Date', data?.date)
}

// ── Slack ─────────────────────────────────────────────────
async function sendSlackNotification(data: any) {
  await fetch('https://hooks.zapier.com/hooks/catch/13620112/4biyudy/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      parentName: data?.parentName,
      subject: data?.subject,
      curriculum: data?.curriculum,
      email: data?.email,
      studentName: data?.childName,
      class: data?.grade,
      phone: data?.phone,
      source_url: data?.pageUrl,
      referrer: data?.referrer,
      utm_source: data?.utm_source,
      utm_medium: data?.utm_medium,
      utm_campaign: data?.utm_campaign,
      utm_content: data?.utm_content,
      utm_term: data?.utm_term,
      price_qualification: data?.pricingAccepted,
      preferred_demo_date: data?.date,
      preferred_demo_time: data?.time,
    }),
  })
}
