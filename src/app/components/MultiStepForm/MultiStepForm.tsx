'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import StepperTick from '../../../../public/assets/Images/stepper-tick.png'
import type { Country } from 'react-phone-number-input'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { zodResolver } from '@hookform/resolvers/zod'

export const MultiStepForm = ({ TotalCount = 6 }: any) => {
  const [activeStep, setActiveStep] = useState(0)
  const [selectGrade, setSelectGrade] = useState('')
  const [selectTime, setSelectTime] = useState('')
  const [selectDate, setSelectDate] = useState('')

  const isFinalStep = (index: any) => index === TotalCount - 1
  const isActive = (index: any) => (index == activeStep ? 'bg-blue-700' : '')
  const isActiveBorder = (index: any) => (index == activeStep ? 'border-blue-700' : '')
  const [detectedCountry, setDetectedCountry] = useState<Country>('AE') // fallback

  const nextButton = () => {
    setActiveStep((prev) => prev + 1)
  }
  const Grade = [6, 7, 8, 9, 10, 11, 12]
  const Time = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM']
  const dateOptions = Array.from({ length: 4 }, (_, index) => {
    const date = new Date()
    date.setDate(date.getDate() + index)

    return {
      value: date.toISOString().split('T')[0],
      month: date.toLocaleString('en-US', {
        month: 'short',
      }),
      day: date.getDate(),
    }
  })

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

    date: z.string().min(1, 'Please select a date'),

    time: z.string().min(1, 'Please select a time'),
  })

  const handleGradeSelect = (data: any) => {
    // setSelectGrade(data)
    setValue('grade', data, {
      shouldValidate: true,
    })

    nextButton()
  }
  const handleSelectTime = (data: any) => {
    setSelectTime(data)
    setValue('time', data, {
      shouldValidate: true,
    })
  }
  const handleSelectDate = (data: any) => {
    setSelectDate(data)
    setValue('date', data.value, {
      shouldValidate: true,
    })
  }
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

  const SUBJECT = ['Math', 'Physics', 'Chemistry', 'Biology', 'Combined Science']
  const CURRICULUM = ['IB', 'British/Cambridge/IGCSE', 'American', 'CBSE', 'ICSE', 'Other']
  const {
    register,
    control,
    setValue,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
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
  const selectedDate = watch('date')
  const selectedTime = watch('time')

  const isStep5Valid = !!selectedDate && !!selectedTime

  return (
    <div className="w-full p-16 h-screen bg-[#2B51FF] flex justify-center items-center">
      <div className="flex flex-col bg-white md:p-8 p-6 rounded-2xl  gap-4 max-w-[360px]">
        {activeStep !== 5 && (
          <div className="flex items-center  justify-center mb-0">
            {Array.from({ length: TotalCount }).map((ele, index) => (
              <>
                {' '}
                <div
                  className={`bg-[#908B85] w-8 h-8 rounded-full flex items-center justify-center text-white  ${isActive(index)} ${activeStep > index ? 'bg-blue-700' : ''} `}
                >
                  <p className="flex justify-center items-center">
                    {activeStep > index ? (
                      <Image src={StepperTick} alt="StepperTick" className="w-[50%] h-auto" />
                    ) : (
                      index + 1
                    )}
                  </p>
                </div>
                {isFinalStep(index) ? null : (
                  <div
                    className={`w-6 h-0.5 border  ${activeStep > index ? 'border-blue-700' : 'border-[#908B85]'}`}
                  ></div>
                )}{' '}
              </>
            ))}
          </div>
        )}
        <div className="h-auto">
          {/* Step 1 */}
          {activeStep === 0 && (
            <div className="w-90% flex flex-col justify-center items-center gap-2">
              <h2 className="text-center m-0 ">
                Your Child's Math <br></br>Journey Starts Here
              </h2>
              <p className="text-center">
                Select Your Child's Grade For<br></br>A Personalised Free Math Demo Class
              </p>
              <div className=" flex flex-wrap justify-center gap-4 mt-4 ">
                {Grade?.map((ele) => (
                  <div className=" flex justify-center  ">
                    <div
                      className={`px-8 py-4 border border-gray rounded font-semibold ${
                        watch('grade') == ele
                          ? 'bg-blue-700 text-white border-blue-700'
                          : 'border-blue-400'
                      }`}
                      onClick={() => {
                        handleGradeSelect(ele)
                      }}
                    >
                      {ele}
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-[#017BFC] mt-4 p-4 bg-blue-50 rounded flex flex-col  justify-center items-center">
                <p className="font-bold">Trusted by 5000+ parents: </p>
                <p>Math classes customized per grade!</p>
              </div>
            </div>
          )}
          {activeStep === 1 && (
            <div className="w-90% flex flex-col justify-center items-center gap-2">
              <h2 className="text-center m-0">Tell Us AboutYourself</h2>
              <p className="text-center">We'd love to know who's joining theBhanzu family </p>
              <div className="w-full mt-2">
                <div className="w-full flex flex-col gap-4 mb-4">
                  <label className="block text-[1rem] font-medium text-gray-700 ">
                    Parent's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('parentName')}
                    placeholder="Enter parent's name"
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition`}
                  />
                  {errors.parentName && (
                    <p className="text-red-500 text-xs">{errors.parentName.message}</p>
                  )}
                </div>
                <div className="w-full flex flex-col gap-4">
                  <label className="block text-[1rem] font-medium text-gray-700 ">
                    Child's Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('childName')}
                    placeholder="Enter Child's Name"
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition`}
                  />
                  {errors.childName && (
                    <p className="text-red-500 text-xs">{errors.childName.message}</p>
                  )}
                </div>
                <div className="w-full mt-8">
                  <button
                    onClick={() => {
                      nextButton()
                    }}
                    disabled={!isStep2Valid}
                    className={`w-full p-3 flex rounded justify-center items-center text-[1rem] font-semibold bg-blue-700 text-white ${!isStep2Valid ? 'bg-gray-400' : ''}`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeStep === 2 && (
            <div className="w-90% flex flex-col justify-center items-center gap-4">
              <h2 className="text-center m-0 text-[1.25rem]  leading-[130%]">
                Where Should We Send the Link to Join Live Demo Class?
              </h2>
              <p className="text-center">We'll share tes's Math Demo class details here</p>
              <div className="w-full mt-2">
                {detectedCountry && (
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="block text-[1rem] font-medium text-gray-700 mb-1">
                      Parent's Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          international
                          defaultCountry={detectedCountry} // 👈 dynamic instead of hardcoded "IN"
                          value={value}
                          onChange={onChange}
                          className={`phone-input-wrapper ${errors?.phone ? 'phone-error' : ''}`}
                        />
                      )}
                    />
                    {errors?.phone && (
                      <p className="text-red-500 text-xs mt-0  mb-0">{errors.phone.message}</p>
                    )}
                  </div>
                )}
                <div className="w-full flex flex-col gap-4">
                  <label className="block text-[1rem] font-medium text-gray-700 ">
                    Email Address<span className="text-red-500">*</span>
                  </label>
                  <input
                    {...register('email')}
                    placeholder="Enter Email Address"
                    className={`w-full px-4 py-3 border rounded-lg outline-none transition`}
                  />
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
                <div className="w-full mt-8">
                  <button
                    onClick={() => {
                      nextButton()
                    }}
                    disabled={!isStep3Valid}
                    className={`w-full p-3 flex rounded justify-center items-center text-[1rem] font-semibold bg-blue-700 text-white ${!isStep3Valid ? 'bg-gray-400' : ''}`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeStep === 3 && (
            <div className="w-90% flex flex-col justify-center items-center gap-2">
              <h2 className="text-center m-0">Tell Us AboutYourself</h2>
              <p className="text-center">We'd love to know who's joining theBhanzu family </p>
              <div className="w-full mt-2">
                <div className="w-full flex flex-col gap-4 mb-4">
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="block text-[1rem]  font-medium text-gray-700 mb-1">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('subject')}
                      className={`w-full px-4 py-3 border rounded-lg outline-none bg-white transition`}
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
                <div className="w-full flex flex-col gap-4 mb-4">
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="block text-[1rem]  font-medium text-gray-700 mb-1">
                      Curriculum <span className="text-red-500">*</span>
                    </label>
                    <select
                      {...register('curriculum')}
                      className={`w-full px-4 py-3 border rounded-lg outline-none bg-white transition`}
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
                <div className="w-full mt-8">
                  <button
                    onClick={() => {
                      nextButton()
                    }}
                    disabled={!isStep4Valid}
                    className={`w-full p-3 flex rounded justify-center items-center text-[1rem] font-semibold bg-blue-700 text-white ${!isStep4Valid ? 'bg-gray-400' : ''}`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeStep === 4 && (
            <div className="w-90% flex flex-col justify-center items-center gap-2">
              <h2 className="text-center m-0">Tell Us AboutYourself</h2>
              <p className="text-center">We'd love to know who's joining theBhanzu family </p>
              <div className="w-full mt-2">
                <div className="w-full flex flex-col gap-4 mb-4">
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="block text-[1rem]  font-medium text-gray-700 mb-1">
                      Date <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap justify-start items-center gap-2">
                      {dateOptions?.map((ele: any) => (
                        <div
                          className={`px-3 py-3 border text-[0.9rem] flex flex-col justify-center items-center border-blue-400 rounded ${
                            watch('date') === ele.value
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'border-blue-400'
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
                </div>
                <div className="w-full flex flex-col gap-4 mb-4">
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="block text-[1rem]  font-medium text-gray-700 mb-1">
                      Time <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap justify-start items-center gap-2">
                      {Time?.map((ele) => (
                        <div
                          className={`px-3 py-3 border text-[0.85rem] border-blue-400 rounded ${
                            watch('time') === ele
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'border-blue-400'
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
                </div>
                <div className="w-full mt-8">
                  <button
                    onClick={() => {
                      nextButton()
                    }}
                    disabled={!isStep5Valid}
                    className={`w-full p-3 flex rounded justify-center items-center text-[1rem] font-semibold bg-blue-700 text-white ${!isStep5Valid ? 'bg-gray-400' : ''}`}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeStep === 5 && (
            <div className="flex flex-col justify-center items-center gap-2 p-8">
              <h2>Thank You </h2>
              <p>Our Team will reach out to you soon.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
