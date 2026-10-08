'use client'

import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import type { Country } from 'react-phone-number-input'
import { useRouter } from 'next/navigation'

const GRADES = [
  'Grade 4',
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
  'Grade 10',
  'Grade 11',
  'Grade 12',
]
const SUBJECT = ['Math', 'Physics', 'Chemistry', 'Biology', 'Combined Science']

const CURRICULUM = ['IB', 'British/Cambridge/IGCSE', 'American', 'CBSE', 'ICSE', 'Other']

const PRICE = ['Yes, I want to apply', 'No, it is outside my budget']

export default function CueMathForm({ v2 = false }) {
  const [detectedCountry, setDetectedCountry] = useState<Country>('AE') // fallback
  const pricingLabel =
    detectedCountry === 'AE' ? 'Our fee is AED 499/month' : 'Our fee is ₹7,999/month'
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const router = useRouter()

  const schema = z.object({
    parentName: z.string().min(3, 'Minimum 3 characters required'),
    email: z
      .string()
      .min(1, 'Email Address is required')
      .email({ message: 'Please Enter a Valid Email Address' }),
    grade: z.string().min(1, 'Please select a grade'),
    subject: z.string().min(1, 'Please select a subject'),
    phone: z
      .string()
      .min(1, 'Phone number is required')
      .refine((val) => isValidPhoneNumber(val), {
        message: 'Invalid phone number for selected country',
      }),
    curriculum: z.string().min(1, 'Please select a curriculums'),
  })

  type FormData = z.infer<typeof schema>

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
  const CITY =
    detectedCountry === 'AE'
      ? ['Dubai', 'Abu Dhabi', 'Emirate of Sharjah', 'Other']
      : ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'Ahmedabad', 'Other']
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
    <div className="w-full mx-auto md:p-0 p-4  font-light" id="cta">
      <h2 className="font-[900] md:text-[2.5rem] text-[6vw]  leading-[110%] text-center mt-4  md:text-[#0F1F3D] md:py-8">
        Book a FREE Online Trial Class
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Parent Name */}
        <div className="flex flex-col gap-2 mb-4">
          <input
            {...register('parentName')}
            placeholder="Parent's Name"
            className={`w-full px-1 py-4  border-b border-black text-[#364153] outline-none transition text-[1.1rem]`}
          />
          {/* Only show error while under 3 chars; disappears once valid */}
          {errors.parentName && (
            <p className="text-red-500 text-xs mt-0 mb-0">{errors?.parentName?.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <input
            {...register('email')}
            placeholder="Email Address"
            className={`w-full px-1 py-4  border-b border-black text-[#364153] outline-none transition text-[1.1rem]`}
          />
          {/* Only show error while under 3 chars; disappears once valid */}
          {errors.email && <p className="text-red-500 text-xs mt-0 mb-0">{errors.email.message}</p>}
        </div>
        {/* Phone Number with Country Code */}
        {detectedCountry && (
          <div className="flex flex-col gap-2 mb-4">
            <Controller
              name="phone"
              control={control}
              render={({ field: { onChange, value } }) => (
                <PhoneInput
                  international
                  defaultCountry={detectedCountry}
                  value={value}
                  onChange={onChange}
                  autoComplete="new-password"
                  className={`cuemath-phone-input-wrapper ${errors.phone ? 'phone-error' : ''}`}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-xs mt-0  mb-0">{errors.phone.message}</p>
            )}
          </div>
        )}
        {/*Curriculum*/}
        <div className="flex flex-col gap-2 mb-4">
          <select
            {...register('curriculum')}
            className={`w-full px-1 py-4  border-b border-black text-[#364153] outline-none transition text-[1.1rem]`}
          >
            <option className="text-[#364153]" value="">
              Select a Curriculum
            </option>
            {CURRICULUM?.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          {errors?.subject && (
            <p className="text-red-500 text-xs mt-0  mb-0">{errors?.subject.message}</p>
          )}
        </div>
        {/* Grade Dropdown */}
        <div className="flex flex-col gap-2 mb-4">
          <select
            {...register('grade')}
            className={`w-full px-1 py-4  border-b border-black text-[#364153] outline-none transition text-[1.1rem]`}
          >
            <option className="text-[#364153]" value="">
              Select a grade
            </option>
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
          <select
            {...register('subject')}
            className={`w-full px-1 py-4  border-b border-black text-[#364153] outline-none transition text-[1.1rem]`}
          >
            <option className="text-[#364153]" value="">
              Select a subject
            </option>
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

        {/* Submit */}
        <button
          type="submit"
          disabled={!isValid || status === 'loading'}
          style={{
            color: isValid ? 'black' : 'grey',
            border: isValid ? '2px solid black' : '2px solid #d3d3d3',
            boxShadow: isValid ? '0px_4px_0px_black' : '',
          }}
          className="w-full md:py-3 py-3 bg-[#FFF116]  font-semibold rounded-4xl
             disabled:bg-gray-300 transition text-[1rem] mt-4 "
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
