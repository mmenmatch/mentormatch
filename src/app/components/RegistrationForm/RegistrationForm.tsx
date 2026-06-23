'use client'

import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import type { Country } from 'react-phone-number-input'
import { useRouter } from 'next/navigation'


const schema = z.object({
  parentName: z.string().min(3, 'Minimum 3 characters required'),
  email: z
    .string()
    .min(1, 'Email Address is required')
    .email({ message: 'Please Enter a Valid Email Address' }),
  grade: z.string().min(1, 'Please select a grade'),
  subject: z.string().min(1, 'Please select a subject'),
  pricingAccepted: z.string().min(1, 'Please select an option'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .refine((val) => isValidPhoneNumber(val), {
      message: 'Invalid phone number for selected country',
    }),
})

type FormData = z.infer<typeof schema>

const GRADES = [
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12',
]
const SUBJECT = ['Math', 'Physics', 'Chemistry', 'Biology', 'Combined Science']

const CURRICULUM = [
  'IB',
  'British/Cambridge/IGCSE',
  'American',
  'CBSE',
  'ICSE',
  'Other',
]

const PRICE = ['Yes, I want to apply', 'No, it is outside my budget']

export default function RegistrationForm() {
  const [detectedCountry, setDetectedCountry] = useState<Country>('AE') // fallback
  const pricingLabel =
    detectedCountry === 'AE'
      ? 'Our fee is AED 499/month'
      : 'Our fee is ₹7,999/month'
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const router = useRouter()

  useEffect(() => {
    fetch('https://ipinfo.io/json')
      .then((res) => res.json())
      .then((data: any) => {
        if (data?.country) {
          setDetectedCountry(data?.country as Country)
        }
      })
      .catch(() => {
        // silently fall back to 'IN'
      })
  }, [])

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange', // validates while typing
  })

  // Watch values to stop error once min length is met
  const email = watch('email', '')
  // const childName = watch('childName', '')
  const parentName = watch('parentName', '')

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    const params = new URLSearchParams(window.location.search)
    console.log('data', data)
    const payload = {
      ...data,
      pageUrl: window.location.href,
      referrer: document.referrer,
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_content: params.get('utm_content'),
      utm_term: params.get('utm_term'),
    }
  localStorage.setItem('formData', JSON.stringify(payload))
if (typeof window.fbq !== 'undefined') {
  // console.log('Meta Pixel loaded')
  window.fbq('track', 'Submit Application')
  // console.log('Submit Application event sent')
} else {
  console.error('fbq not found')
}
    try {
      const res = await fetch('/app/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')
      //META PIXEL

      router.push('/success-page')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="w-full  mx-auto md:p-0 p-4  font-light" id="cta">
      <h2 className="md:text-[2.25rem] text-[6vw] leading-[110%] font-medium md:text-left text-center mt-4 mb-8 md:text-gray-800">
        Book a{' '}
        <span className="bg-[#FFF116] leading-[100%] text-black px-1 rounded font-bold leading-[140%]">
          Free Trial
        </span>{' '}
        for your child!
      </h2>
      {/* <p className="md:text-[2.25rem] mb-8 text-[6vw] leading-[110%]  w-full text-[#2B23FF] font-bold  md:text-left   text-center ">
        For Grade 6 to 12th
      </p> */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Parent Name */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="block text-[1rem] font-medium text-gray-700 ">
            Parent's Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('parentName')}
            placeholder="Enter parent's name"
            className={`w-full px-4 py-3 border rounded-lg outline-none transition
              ${
                errors?.parentName
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-2 focus:ring-blue-200'
              }`}
          />
          {/* Only show error while under 3 chars; disappears once valid */}
          {errors.parentName && (
            <p className="text-red-500 text-xs mt-0 mb-0">{errors?.parentName?.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <label className="block text-[1rem] font-medium text-gray-700 ">
            Parent's Email Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register('email')}
            placeholder="Enter parent's email address"
            className={`w-full px-4 py-3 border rounded-lg outline-none transition
              ${
                errors.email
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-2 focus:ring-blue-200'
              }`}
          />
          {/* Only show error while under 3 chars; disappears once valid */}
          {errors.email && <p className="text-red-500 text-xs mt-0 mb-0">{errors.email.message}</p>}
        </div>

        {/* Phone Number with Country Code */}
        {detectedCountry && (
          <div className="flex flex-col gap-2 mb-4">
            <label className="block text-[1rem] font-medium text-gray-700 mb-1">
              Parent's Phone Number <span className="text-red-500">*</span>
            </label>
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, value } }) => (
                // <PhoneInput
                //   international
                //   defaultCountry="AE" // change default to your target country
                //   value={value}
                //   onChange={onChange}
                //   className={`phone-input-wrapper ${errors.phone ? 'phone-error' : ''}`}
                // />
                <PhoneInput
                  international
                  defaultCountry={detectedCountry} // 👈 dynamic instead of hardcoded "IN"
                  value={value}
                  onChange={onChange}
                  autoComplete="new-password"
                  className={`phone-input-wrapper ${errors.phone ? 'phone-error' : ''}`}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-0  mb-0">{errors.phone.message}</p>
            )}
          </div>
        )}

        {/* Grade Dropdown */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="block text-[1rem]  font-medium text-gray-700 mb-1">
            Grade <span className="text-red-500">*</span>
          </label>
          <select
            {...register('grade')}
            className={`w-full px-4 py-3 border rounded-lg outline-none bg-white transition
              ${
                errors.grade
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-2 focus:ring-blue-200'
              }`}
          >
            <option value="">Select a grade</option>
            {GRADES.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {errors.grade && (
            <p className="text-red-500 text-xs mt-0  mb-0">{errors.grade.message}</p>
          )}
        </div>

        {/*Subject*/}
        <div className="flex flex-col gap-2 mb-4">
          <label className="block text-[1rem]  font-medium text-gray-700 mb-1">
            Subject <span className="text-red-500">*</span>
          </label>
          <select
            {...register('subject')}
            className={`w-full px-4 py-3 border rounded-lg outline-none bg-white transition
              ${
                errors?.subject
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-2 focus:ring-blue-200'
              }`}
          >
            <option value="">Select a subject</option>
            {SUBJECT?.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {errors?.subject && (
            <p className="text-red-500 text-xs mt-0  mb-0">{errors?.subject.message}</p>
          )}
        </div>

        {/*Pricing...*/}
        <div className="flex flex-col gap-2 mb-4">
          <label className="block text-[1rem]  font-medium text-gray-700 mb-1">
            {pricingLabel} <span className="text-red-500">*</span>
          </label>
          <select
            {...register('pricingAccepted')}
            className={`w-full px-4 py-3 border rounded-lg outline-none bg-white transition
              ${
                errors?.pricingAccepted
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-2 focus:ring-blue-200'
              }`}
          >
            <option value="">Select a option</option>
            {PRICE?.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {errors?.pricingAccepted && (
            <p className="text-red-500 text-xs mt-0  mb-0">{errors?.pricingAccepted.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid || status === 'loading'}
          className="w-full py-4 bg-[#2B23FF] text-white font-semibold rounded-lg
            hover:bg-[#2B23FF] disabled:bg-gray-300 transition text-[1rem]"
        >
          {status === 'loading' ? 'Submitting...' : 'Book A Free Trial'}
        </button>

        {status === 'success' && (
          <p className="text-green-600 text-center text-sm font-medium">
            ✅ Your Free Trial Has Been Booked Successfully!
          </p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center text-sm">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  )
}
