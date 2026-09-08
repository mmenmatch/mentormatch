'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import BackButton from '../../../../public/assets/Images/back-img.png'
import { z } from 'zod'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import type { Country } from 'react-phone-number-input'
import { useRouter } from 'next/navigation'
import { SuccessAnimation } from '../SuccessAnimation/SuccessAnimation'

function FreeTrialForm() {
  const [stepperCount, setStepperCount] = useState(1)
  const [stepperPercentage, setStepperPercentage] = useState(16.666)
  const [selectGrade, setSelectGrade] = useState()
  const [detectedCountry, setDetectedCountry] = useState<Country>('AE') // fallback
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const Grade = ['6', '7', '8', '9', '10', '11', '12']
  const SUBJECT = ['Math', 'Physics', 'Chemistry', 'Biology', 'Combined Science']
  const CURRICULUM = ['IB', 'British/Cambridge/IGCSE', 'CBSE', 'ICSE', 'Other']
  const CITY = ['Bangalore', 'Mumbai', 'Delhi', 'Hyderabad', 'Pune', 'Ahmedabad', 'Other']
  const PRICES_OPTIONS = ['Yes, I want to apply', 'No, it is outside my budget']
  const Time = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM']

  const schema = z.object({
    grade: z.string().min(1, 'Please select a grade'),

    parentName: z.string().min(3, 'Minimum 3 characters required'),

    childName: z.string().min(3, 'Minimum 3 characters required'),

    phone: z
      .string()
      .min(1, 'Phone number is required')
      .refine((val) => isValidPhoneNumber(val), {
        message: 'Invalid phone number',
      }),

    email: z.string().email('Please enter a valid email'),

    subject: z.string().min(1, 'Please select a subject'),

    curriculum: z.string().min(1, 'Please select a curriculum'),

    city: z.string().min(1, 'Please select a city'),

    pricingAccepted: z.string().min(1, 'Please select an option'),

    date: z.string().min(1, 'Please select a date'),

    time: z.string().min(1, 'Please select a time'),
  })

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
    control,
    setValue,
    trigger,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  type FormData = z.infer<typeof schema>

  const selectGradeFn = (event: any) => {
    console.log(event)
    setSelectGrade(event)
    setValue('grade', String(event), {
      shouldValidate: true,
    })
  }

  const continueFn = () => {
    setStepperCount((prev) => prev + 1)
  }
  const backFn = () => {
    setStepperCount((prev) => prev - 1)
  }
  const handleSelectDate = (data: any) => {
    setValue('date', data.value, {
      shouldValidate: true,
    })
  }
  const handleSelectTime = (data: any) => {
    // setSelectTime(data)
    setValue('time', data, {
      shouldValidate: true,
    })
  }

  const dateOptions = Array.from({ length: 4 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() + index + 1)

    return {
      value: date.toISOString().split('T')[0],
      month: date.toLocaleString('en-US', {
        month: 'short',
      }),
      day: date.getDate(),
    }
  })
  const parentName = watch('parentName')
  const childName = watch('childName')
  const isStep2Valid = parentName?.trim()?.length >= 3 && childName?.trim()?.length >= 3
  const phone = watch('phone')
  const email = watch('email')
  const isStep3Valid =
    !!phone && isValidPhoneNumber(phone) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email || '')
  const subject = watch('subject')
  const curriculum = watch('curriculum')

  const isStep4Valid = subject && curriculum
  const city = watch('city')
  const price = watch('pricingAccepted')
  const isStep5Valid = city && price

  const selectedDate = watch('date')
  const selectedTime = watch('time')
  const isStep6Valid = !!selectedDate && !!selectedTime

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
console.log('payload', payload)
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
      setStepperCount(7)

      // Fire Google Ads conversion
      window.gtag?.('event', 'conversion', {
        send_to: 'AW-11284198205/Lm3eCMyY5eIbEL3m3IQq',
      })

      // Push user data to dataLayer
      window.dataLayer?.push({
        event: 'ec_form_submit',
        user_data: {
          email: data?.email || '',
          phone_number: data?.phone || '',
        },
      })

      if (typeof window.fbq !== 'undefined') {
        console.log('Meta Pixel loaded')
        if (data) {
          window.fbq('track', 'Lead', {
            em: data.email || '',
            ph: data.phone || '',
            fn: data.parentName || '',
          })
          console.log('Lead event sent')
        } else {
          window.fbq('track', 'Lead')
          console.log('Lead event sent without data')
        }
      } else {
        console.error('fbq not found')
      }
      console.log('✅ dataLayer after push:', window.dataLayer) // ← check dataLayer

      // router.push('/success-page')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }
  return (
    <div className="w-full bg-white p-8 rounded-2xl shadow-lg">
      {stepperCount !== 7 && (
        <div className="flex flex-col gap-6">
          {/* stepper */}
          <div className="flex flex-col gap-4">
            <p className="text-[#5B6280] font-semibold text-[1rem]">Step {stepperCount} of 6</p>
            <div className="w-full h-3 rounded-2xl bg-[#E4EAFE] overflow-hidden">
              <div
                style={{ width: `${stepperPercentage * stepperCount}%` }}
                className={`h-full bg-[linear-gradient(90deg,#00BF63_0%,#32E08C_100%)] rounded-2xl`}
              ></div>
            </div>
          </div>
          {/* Form */}
          <div>
            <form
              onSubmit={handleSubmit(onSubmit, (errors) => {
                console.log('VALIDATION ERRORS:', errors)
              })}
            >
              {stepperCount == 1 && (
                <div className="flex flex-col gap-4">
                  <label className="text-[#12142B] md:text-[1.25rem] text-[4vw] font-medium">
                    Select your child's grade
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {Grade?.map((ele) => (
                      <div
                        onClick={() => selectGradeFn(ele)}
                        className={`rounded-xl ${selectGrade == ele ? 'bg-[linear-gradient(90deg,#2B23FF_100%)] text-white' : ''} md:px-16 md:py-4 px-8 py-4 text-[1rem] border border-[#B9C6F7] text-[#12142B] font-semibold`}
                      >
                        {ele}
                      </div>
                    ))}
                  </div>
                  {/* Button */}
                  <div className="flex gap-2">
                    <button
                      onClick={
                        selectGrade
                          ? () => continueFn()
                          : () => {
                              return
                            }
                      }
                      className={`${selectGrade ? 'bg-[#2B23FF] text-white cursor-pointer' : 'cursor-not-allowed bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-full   rounded-4xl font-semibold text-[#5F6592]`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
              {stepperCount == 2 && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col mb-2 gap-2">
                    <p className="text-[#12142B] md:text-[1.25rem] text-[4vw] font-medium">
                      Tell Us About Yourself
                    </p>
                    <p className="text-[#6A7188] md:text-[0.9rem] text-[3.6vw]">
                      We’d love to know who’s joining the Mentor Match family
                    </p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[#12142B] md:text-[1rem] text-[3.5vw] tracking-[1px] font-medium mb-4">
                      Parent’s Name<span className="text-red-500">*</span>{' '}
                    </label>
                    <div className="flex flex-wrap gap-1 ">
                      <input
                        {...register('parentName')}
                        placeholder="Enter parent's name"
                        className={`w-full px-4 py-3 border border-[#A3A3C7] rounded-lg outline-none transition`}
                      />
                      {errors?.parentName && (
                        <p className="text-red-500 text-xs">{errors?.parentName?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2 mb-2">
                    <label className="text-[#12142B] md:text-[1rem] text-[3.5vw] tracking-[1px] font-medium mb-4">
                      Student’s Name<span className="text-red-500">*</span>{' '}
                    </label>
                    <div className="flex flex-wrap gap-1">
                      <input
                        {...register('childName')}
                        placeholder="Enter student's name"
                        className={`w-full px-4 py-3 border border-[#A3A3C7] rounded-lg outline-none transition`}
                      />
                      {errors?.childName && (
                        <p className="text-red-500 text-xs">{errors?.childName?.message}</p>
                      )}
                    </div>
                  </div>
                  {/* Button */}
                  <div className="flex gap-2">
                    <div
                      onClick={backFn}
                      className={`${'cursor-pointer bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-[60px]   rounded-4xl font-semibold text-[#5F6592] flex items-center justify-center`}
                    >
                      <Image src={BackButton} alt="mentor match" width={15} />
                    </div>
                    <button
                      disabled={!isStep2Valid}
                      onClick={continueFn}
                      className={`${isStep2Valid ? 'bg-[#2B23FF] text-white cursor-pointer' : 'cursor-not-allowed bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-full   rounded-4xl font-semibold text-[#5F6592]`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
              {stepperCount == 3 && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col mb-2 gap-2">
                    <p className="text-[#12142B] md:text-[1.25rem] text-[4vw] font-medium">
                      Share Your Contact for Us to Book Your 1-on-1 Demo Class
                    </p>
                    <p className="text-[#6A7188] md:text-[0.9rem] text-[3.6vw]">
                      We’ll Share Your Demo Class Details here{' '}
                    </p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[#12142B] md:text-[1rem] text-[3.5vw] tracking-[1px] font-medium mb-4">
                      Parent's Phone Number<span className="text-red-500">*</span>{' '}
                    </label>
                    <div className="flex flex-wrap gap-2 w-full">
                      <Controller
                        name="phone"
                        control={control}
                        render={({ field: { onChange, value } }) => (
                          <PhoneInput
                            international
                            defaultCountry={detectedCountry} // 👈 dynamic instead of hardcoded "IN"
                            value={value}
                            onChange={onChange}
                            autoComplete="new-password"
                            className={`phone-input-wrapper-ft w-full border-[#A3A3C7] ${errors?.phone ? 'phone-error' : ''}`}
                          />
                        )}
                      />
                      {errors?.phone && (
                        <p className="text-red-500 text-xs mt-0  mb-0">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2 mb-2">
                    <label className="text-[#12142B] md:text-[1rem] text-[3.5vw] tracking-[1px] font-medium mb-4">
                      Email Address<span className="text-red-500">*</span>{' '}
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <input
                        {...register('email')}
                        placeholder="Enter student's name"
                        className={`w-full px-4 py-3 border border-[#A3A3C7] rounded-lg outline-none transition`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  {/* Button */}
                  <div className="flex gap-2">
                    <div
                      onClick={backFn}
                      className={`${'text-white cursor-pointer bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-[60px]   rounded-4xl font-semibold text-[#5F6592] flex items-center justify-center`}
                    >
                      <Image src={BackButton} alt="mentor match" width={15} />
                    </div>
                    <button
                      disabled={!isStep3Valid}
                      onClick={continueFn}
                      className={`${isStep3Valid ? 'bg-[#2B23FF] text-white cursor-pointer' : 'cursor-not-allowed bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-full   rounded-4xl font-semibold text-[#5F6592]`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
              {stepperCount == 4 && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col mb-2 gap-2">
                    <p className="text-[#12142B] md:text-[1.25rem] text-[4vw] font-medium">
                      Specify Your Child’s Learning Needs{' '}
                    </p>
                    <p className="text-[#6A7188] md:text-[0.9rem] text-[3.6vw]">
                      Help us Personalise the demo class by selecting the subject and
                      curriculum{' '}
                    </p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[#12142B] md:text-[1rem] text-[3.5vw] tracking-[1px] font-medium mb-4">
                      Subject<span className="text-red-500">*</span>{' '}
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <select
                        {...register('subject')}
                        className={`w-full px-4 py-3 border border-[#A3A3C7]  rounded-lg outline-none bg-white transition`}
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
                  </div>
                  <div className="w-full flex flex-col gap-2 mb-2">
                    <label className="text-[#12142B] md:text-[1rem] text-[3.5vw] tracking-[1px] font-medium mb-4">
                      {' '}
                      Curriculum<span className="text-red-500">*</span>
                    </label>{' '}
                    <div className="flex flex-wrap gap-4">
                      <select
                        {...register('curriculum')}
                        className={`w-full px-4 py-3 border border-[#A3A3C7] rounded-lg outline-none bg-white transition`}
                      >
                        <option value="">Select a curriculum</option>
                        {CURRICULUM?.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                      {errors?.curriculum && (
                        <p className="text-red-500 text-xs mt-0  mb-0">
                          {errors?.curriculum?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Button */}
                  <div className="flex gap-2">
                    <div
                      onClick={backFn}
                      className={`${'cursor-pointer bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-[60px]   rounded-4xl font-semibold text-[#5F6592] flex items-center justify-center`}
                    >
                      <Image src={BackButton} alt="mentor match" width={15} />
                    </div>
                    <button
                      disabled={!isStep4Valid}
                      onClick={continueFn}
                      className={`${isStep4Valid ? 'bg-[#2B23FF] text-white cursor-pointer' : 'cursor-not-allowed bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-full   rounded-4xl font-semibold text-[#5F6592]`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
              {stepperCount == 5 && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col mb-2 gap-2">
                    <p className="text-[#12142B] md:text-[1.25rem] text-[4vw] font-medium">
                      Just a Couple More Details Before We Book Your Slot{' '}
                    </p>
                    <p className="text-[#6A7188] md:text-[0.9rem] text-[3.6vw]">
                      Confirm your city and fee preference{' '}
                    </p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[#12142B] md:text-[1rem] text-[3.5vw] tracking-[1px] font-medium mb-4">
                      City<span className="text-red-500">*</span>{' '}
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <select
                        {...register('city')}
                        className={`w-full px-4 py-3 border border-[#A3A3C7] rounded-lg outline-none bg-white transition`}
                      >
                        <option value="">Select a city</option>
                        {CITY?.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                      {errors?.city && (
                        <p className="text-red-500 text-xs mt-0  mb-0">{errors?.city?.message}</p>
                      )}
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2 mb-2">
                    <label className="text-[#12142B] md:text-[1rem] text-[3.5vw] tracking-[1px] font-medium mb-4">
                      {' '}
                      Our fee is ₹7,999/month<span className="text-red-500">*</span>
                    </label>{' '}
                    <div className="flex flex-wrap gap-4">
                      <select
                        {...register('pricingAccepted')}
                        className={`w-full px-4 py-3 border border-[#A3A3C7] rounded-lg outline-none bg-white transition`}
                      >
                        <option value="">Select a Option</option>
                        {PRICES_OPTIONS?.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                      {errors?.pricingAccepted && (
                        <p className="text-red-500 text-xs mt-0  mb-0">
                          {errors?.pricingAccepted?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  {/* Button */}
                  <div className="flex gap-2">
                    <div
                      onClick={backFn}
                      className={`${'cursor-pointer bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-[60px]   rounded-4xl font-semibold text-[#5F6592] flex items-center justify-center`}
                    >
                      <Image src={BackButton} alt="mentor match" width={15} />
                    </div>
                    <button
                      disabled={!isStep5Valid}
                      onClick={continueFn}
                      className={`${isStep5Valid ? 'bg-[#2B23FF] text-white cursor-pointer' : 'cursor-not-allowed bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-full   rounded-4xl font-semibold text-[#5F6592]`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
              {stepperCount == 6 && (
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col mb-2 gap-2">
                    <p className="text-[#12142B] md:text-[1.25rem] text-[4vw] font-medium">
                      Choose a Convenient Time for Your Demo Class{' '}
                    </p>
                    <p className="text-[#6A7188] text-[0.9rem]">
                      Select your preferred date and time we’ll reserve a spot for your child{' '}
                    </p>
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <label className="text-[#12142B] md:text-[1rem] text-[3.5vw] tracking-[1px] font-medium mb-4">
                      Select Date<span className="text-red-500">*</span>{' '}
                    </label>
                    <div className="flex flex-wrap justify-start items-center gap-2">
                      {dateOptions?.map((ele: any) => (
                        <div
                          className={`px-3 py-3 border text-[0.9rem] flex flex-col justify-center items-center border-[#A3A3C7] rounded ${
                            watch('date') === ele.value
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'border-[#A3A3C7]'
                          }`}
                          onClick={() => {
                            handleSelectDate(ele)
                          }}
                        >
                          <p className="text-[1rem] font-semibold">{ele?.month}</p>
                          <p className="text-[0.85rem]">{ele?.day}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-full flex flex-col gap-2 mb-2.5">
                    <label className="text-[#12142B] md:text-[1rem] text-[3.5vw] tracking-[1px] font-medium mb-4">
                      {' '}
                      Select Time<span className="text-red-500">*</span>
                    </label>{' '}
                    <div className="flex flex-wrap justify-start items-center gap-2">
                      {Time?.map((ele) => (
                        <div
                          className={`px-3 py-3 border text-[0.85rem] border-[#A3A3C7] rounded ${
                            watch('time') === ele
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'border-[#A3A3C7]'
                          }`}
                          onClick={() => {
                            handleSelectTime(ele)
                          }}
                        >
                          {ele}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Button */}
                  <div className="flex gap-2">
                    <div
                      onClick={backFn}
                      className={`${'cursor-pointer bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-[60px]   rounded-4xl font-semibold text-[#5F6592] flex items-center justify-center`}
                    >
                      <Image src={BackButton} alt="mentor match" width={15} />
                    </div>
                    <button
                      disabled={!isStep6Valid}
                      // onClick={continueFn}
                      type="submit"
                      // onClick={() => {
                      //   nextButton()
                      // }}
                      onClick={() => console.log('SUBMIT BUTTON CLICKED')}
                      className={`${isStep6Valid ? 'bg-[#2B23FF] text-white cursor-pointer' : 'cursor-not-allowed bg-[#E7E9F2] border-[#D4D7E6]'} p-4 w-full   rounded-4xl font-semibold text-[#5F6592]`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      )}
      {stepperCount === 7 && (
        <div className="flex flex-col justify-center items-center gap-2 ">
          <SuccessAnimation w={'w-[200px]'} h={'h-[200px]'} />
          <h2 className="text-center m-0 text-[2rem]">Thank You </h2>
          <p className="text-center text-[1rem] leading-[130%]">
            Our counsellor will reach out to you via Whatsapp in the next 12 hrs.
          </p>
        </div>
      )}
    </div>
  )
}

export default FreeTrialForm
