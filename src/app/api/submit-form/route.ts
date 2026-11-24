// import { NextRequest, NextResponse } from 'next/server'
// type FormData = {
//   email?: string
//   childName?: string
//   phone?: string
//   grade?: string
//   pageUrl?: string
//   referrer?: string
//   pricingAccepted?: string
//   parentName?: string
//   subject?: string
//   curriculum?: string
//   date?: string
//   time?: string

//   utm_source?: string
//   utm_medium?: string
//   utm_campaign?: string
//   utm_content?: string
//   utm_term?: string
//   city?: string
//   meta_event_id?: any

//   filled_by: string
//   curriculumText: string
//   subjectText: string
//   persentAcademicPerformace: any
//   mainReason: string
//   usefullResource: string
//   country: string
//   school: string
//   startFrom: string
//   preferedTeacher: string
//   parentsAvailable: string
//   laptopAvailable: string
//   language: string
//   languageText: string
//   mention: string
//   day: string
//   fb_click_id: string
// }

// export async function POST(req: NextRequest) {
//   const body: FormData = await req.json()
//   const {
//     parentName,
//     subject,
//     curriculum = '',
//     email,
//     childName = '',
//     grade,
//     phone,
//     pageUrl,
//     referrer,
//     pricingAccepted,
//     utm_source,
//     utm_medium,
//     utm_campaign,
//     utm_content,
//     utm_term,
//     date = '',
//     time = '',
//     city = '',
//     meta_event_id = '',
//     filled_by = '',
//     curriculumText = '',
//     subjectText = '',
//     persentAcademicPerformace = '',
//     mainReason = '',
//     usefullResource = '',
//     country = '',
//     school = '',
//     startFrom = '',
//     preferedTeacher = '',
//     parentsAvailable = '',
//     laptopAvailable = '',
//     language = '',
//     languageText = '',
//     mention = '',
//     day = '',
//     fb_click_id = '',
//   } = body

//   const results = await Promise.allSettled([
//     submitToHubSpot({
//       parentName,
//       subject,
//       curriculum,
//       email,
//       childName,
//       grade,
//       phone,
//       pricingAccepted,
//       pageUrl,
//       referrer,
//       utm_source,
//       utm_medium,
//       utm_campaign,
//       utm_content,
//       utm_term,
//       date,
//       time,
//       city,
//       meta_event_id,
//       filled_by,
//       curriculumText,
//       subjectText,
//       persentAcademicPerformace,
//       mainReason,
//       usefullResource,
//       country,
//       school,
//       startFrom,
//       preferedTeacher,
//       parentsAvailable,
//       laptopAvailable,
//       language,
//       languageText,
//       mention,
//       fb_click_id,
//     }),
//   ])

//   const failed = results.filter((r) => r.status === 'rejected')
//   if (failed.length > 0) {
//     console.error('Some submissions failed:', failed)
//   }

//   return NextResponse.json({ ok: true })
// }

// // ── HubSpot ──────────────────────────────────────────────
// async function submitToHubSpot(data: any) {
//   // console.log(' time', data?.time)
//   console.log('data', data)

//   const response = await fetch(
//     `https://api.hsforms.com/submissions/v3/integration/submit/244333388/767d3250-c3d6-4873-84d2-ea278f019ab6`,
//     {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         fields: [
//           { name: 'email', value: data?.email || ' ' },
//           { name: 'price_qualification', value: data?.pricingAccepted || '' },
//           { name: 'student_name', value: data?.childName || '' }, // custom property
//           { name: 'class', value: data?.grade || ' ' },
//           { name: 'phone', value: data?.phone || '' },
//           { name: 'firstname', value: data?.parentName || ' ' },
//           { name: 'subject', value: data?.subject || '' },
//           { name: 'curriculum', value: data?.curriculum || '' },
//           { name: 'city', value: data?.city || '' },
//           {
//             name: 'preferred_demo_date',
//             value: data?.date || data?.day || '',
//           },
//           {
//             name: 'preferred_demo_time',
//             value: data?.time || '',
//           },
//           {
//             name: 'source_url',
//             value: data?.pageUrl || '',
//           },
//           {
//             name: 'utm_source',
//             value: data?.utm_source || '',
//           },
//           {
//             name: 'utm_medium',
//             value: data?.utm_medium || '',
//           },
//           {
//             name: 'utm_campaign',
//             value: data?.utm_campaign || '',
//           },
//           {
//             name: 'utm_content',
//             value: data?.utm_content || '',
//           },
//           {
//             name: 'utm_term',
//             value: data?.utm_term || '',
//           },
//           {
//             name: 'meta_event_id',
//             value: data?.meta_event_id || '',
//           },
//           {
//             name: 'filled_by',
//             value: data?.filled_by || '',
//           },
//           {
//             name: 'custom_curriculum',
//             value: data?.curriculumText || '',
//           },
//           {
//             name: 'custom_subject',
//             value: data?.subjectText || '',
//           },
//           //persentAcademicPerformace
//           {
//             name: 'child_performance',
//             value: data?.persentAcademicPerformace || '',
//           },
//           //mainReason
//           {
//             name: 'reason',
//             value: data?.mainReason || '',
//           },
//           //usefullResource
//           {
//             name: 'resources',
//             value: data?.usefullResource || '',
//           },
//           //country
//           {
//             name: 'residing_country',
//             value: data?.country || '',
//           },
//           //school
//           {
//             name: 'school_name',
//             value: data?.school || '',
//           },
//           //startFrom
//           {
//             name: 'like_to_start_from',
//             value: data?.startFrom || '',
//           },
//           //preferedTeacher
//           {
//             name: 'preferred_tutor_gender',
//             value: data?.preferedTeacher || '',
//           },
//           //parentsAvailable
//           {
//             name: 'parents_available_in_first_demo',
//             value: data?.parentsAvailable || '',
//           },
//           //laptopAvailable
//           {
//             name: 'laptop_available',
//             value: data?.laptopAvailable || '',
//           },
//           //language
//           {
//             name: 'comfortable_with_english',
//             value: data?.language || '',
//           },
//           //languageText
//           {
//             name: 'preferred_language',
//             value: data?.languageText || '',
//           },
//           //mention
//           {
//             name: 'special_mention',
//             value: data?.mention || '',
//           },
//           {
//             name: 'fb_click_id',
//             value: data?.fb_click_id || '',
//           },
//         ],
//       }),
//     },
//   )
//   const result = await response.text()

// }

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
  city?: string
  meta_event_id?: any

  filled_by: string
  curriculumText: string
  subjectText: string
  persentAcademicPerformace: any
  mainReason: string
  usefullResource: string
  country: string
  school: string
  startFrom: string
  preferedTeacher: string
  parentsAvailable: string
  laptopAvailable: string
  language: string
  languageText: string
  mention: string
  day: string
  fb_click_id: string
}

// ── Visitor IP + user agent (captured once here, for every form) ──────────

/** Cleans one raw header value into a plain IP, or '' if unusable. */
function cleanIp(raw?: string | null): string {
  if (!raw) return ''
  let ip = raw.trim()
  if (!ip || ip.toLowerCase() === 'unknown') return ''

  // "[2001:db8::1]:443" → "2001:db8::1"
  const bracketed = ip.match(/^\[([^\]]+)\](?::\d+)?$/)
  if (bracketed) ip = bracketed[1]

  // "1.2.3.4:5678" → "1.2.3.4"
  if (/^\d{1,3}(\.\d{1,3}){3}:\d+$/.test(ip)) ip = ip.split(':')[0]

  // IPv4-mapped IPv6 "::ffff:1.2.3.4" → "1.2.3.4"
  if (ip.toLowerCase().startsWith('::ffff:')) ip = ip.slice(7)

  // Local addresses (e.g. during local dev) are useless to Meta
  if (ip === '::1' || ip === '127.0.0.1') return ''

  return ip
}

/**
 * The visitor's real IP. Behind Vercel / Cloudflare / Nginx the socket IP is
 * the proxy, so read the proxy headers. x-forwarded-for can be a list
 * "client, proxy1, proxy2": the first entry is the visitor.
 */
function getClientIp(req: NextRequest): string {
  const candidates = [
    req.headers.get('cf-connecting-ip'), // Cloudflare
    req.headers.get('x-forwarded-for')?.split(',')[0], // Vercel / most proxies
    req.headers.get('x-real-ip'), // Nginx / Vercel
    req.headers.get('x-vercel-forwarded-for')?.split(',')[0],
  ]
  for (const c of candidates) {
    const ip = cleanIp(c)
    if (ip) return ip
  }
  return ''
}

function getUserAgent(req: NextRequest): string {
  return (req.headers.get('user-agent') || '').trim().slice(0, 1000)
}

// ── Route ────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const body: FormData = await req.json()

  // Collected from the request itself, so no form needs to send them
  const ipAddress = getClientIp(req)
  const userAgent = getUserAgent(req)

  console.log('ipAddress', ipAddress)
  console.log('userAgent', userAgent)

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
    city = '',
    meta_event_id = '',
    filled_by = '',
    curriculumText = '',
    subjectText = '',
    persentAcademicPerformace = '',
    mainReason = '',
    usefullResource = '',
    country = '',
    school = '',
    startFrom = '',
    preferedTeacher = '',
    parentsAvailable = '',
    laptopAvailable = '',
    language = '',
    languageText = '',
    mention = '',
    day = '',
    fb_click_id = '',
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
      day,
      time,
      city,
      meta_event_id,
      filled_by,
      curriculumText,
      subjectText,
      persentAcademicPerformace,
      mainReason,
      usefullResource,
      country,
      school,
      startFrom,
      preferedTeacher,
      parentsAvailable,
      laptopAvailable,
      language,
      languageText,
      mention,
      fb_click_id,
      ipAddress,
      userAgent,
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
  console.log('data', data)

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/244333388/767d3250-c3d6-4873-84d2-ea278f019ab6`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: [
          { name: 'email', value: data?.email || ' ' },
          { name: 'price_qualification', value: data?.pricingAccepted || '' },
          { name: 'student_name', value: data?.childName || '' },
          { name: 'class', value: data?.grade || ' ' },
          { name: 'phone', value: data?.phone || '' },
          { name: 'firstname', value: data?.parentName || ' ' },
          { name: 'subject', value: data?.subject || '' },
          { name: 'curriculum', value: data?.curriculum || '' },
          { name: 'city', value: data?.city || '' },
          { name: 'preferred_demo_date', value: data?.date || data?.day || '' },
          { name: 'preferred_demo_time', value: data?.time || '' },
          { name: 'source_url', value: data?.pageUrl || '' },
          { name: 'utm_source', value: data?.utm_source || '' },
          { name: 'utm_medium', value: data?.utm_medium || '' },
          { name: 'utm_campaign', value: data?.utm_campaign || '' },
          { name: 'utm_content', value: data?.utm_content || '' },
          { name: 'utm_term', value: data?.utm_term || '' },
          { name: 'meta_event_id', value: data?.meta_event_id || '' },
          { name: 'filled_by', value: data?.filled_by || '' },
          { name: 'custom_curriculum', value: data?.curriculumText || '' },
          { name: 'custom_subject', value: data?.subjectText || '' },
          { name: 'child_performance', value: data?.persentAcademicPerformace || '' },
          { name: 'reason', value: data?.mainReason || '' },
          { name: 'resources', value: data?.usefullResource || '' },
          { name: 'residing_country', value: data?.country || '' },
          { name: 'school_name', value: data?.school || '' },
          { name: 'like_to_start_from', value: data?.startFrom || '' },
          { name: 'preferred_tutor_gender', value: data?.preferedTeacher || '' },
          { name: 'parents_available_in_first_demo', value: data?.parentsAvailable || '' },
          { name: 'laptop_available', value: data?.laptopAvailable || '' },
          { name: 'comfortable_with_english', value: data?.language || '' },
          { name: 'preferred_language', value: data?.languageText || '' },
          { name: 'special_mention', value: data?.mention || '' },
          { name: 'fb_click_id', value: data?.fb_click_id || '' },

          // NEW: custom contact properties used by the Meta sync workflow
          { name: 'client_ip_address', value: data?.ipAddress || '' },
          { name: 'client_user_agent', value: data?.userAgent || '' },
        ],
        // HubSpot's own submission context (also shows the IP on the form submission)
        context: {
          ...(data?.ipAddress ? { ipAddress: data.ipAddress } : {}),
          ...(data?.pageUrl ? { pageUri: data.pageUrl } : {}),
        },
      }),
    },
  )

  const result = await response.text()
  if (!response.ok) {
    console.error('HubSpot submission failed:', response.status, result)
    throw new Error(`HubSpot ${response.status}: ${result}`)
  }
}
