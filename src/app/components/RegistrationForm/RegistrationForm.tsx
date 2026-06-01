'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

const schema = z.object({
  parentName: z.string().min(3, 'Minimum 3 characters required'),
  childName: z.string().min(3, 'Minimum 3 characters required'),
  grade: z.string().min(1, 'Please select a grade'),
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

export default function RegistrationForm() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange', // validates while typing
  })

  // Watch values to stop error once min length is met
  const parentName = watch('parentName', '')
  const childName = watch('childName', '')

  const onSubmit = async (data: FormData) => {
    setStatus('loading')
    console.log('data', data)
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="w-full  mx-auto p-6  font-light">
      <h2 className="md:text-[2rem] text-[6vw]  font-medium md:text-left  text-center  mb-4 text-gray-800">
        Book a <span className="text-[#2B23FF] font-bold">Free Trial</span> for
        your child!
      </h2>
      <p className="md:text-[2rem] mb-8 text-[6vw] w-full text-[#2B23FF] font-bold  md:text-left   text-center ">
        For Grade 6 to 12th
      </p>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
        {/* Parent Name */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="block text-[1rem] font-medium text-gray-700 ">
            Parent Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('parentName')}
            placeholder="Enter parent's name"
            className={`w-full px-4 py-3 border rounded-lg outline-none transition
              ${
                errors.parentName
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-2 focus:ring-blue-200'
              }`}
          />
          {/* Only show error while under 3 chars; disappears once valid */}
          {errors.parentName && parentName.length < 3 && (
            <p className="text-red-500 text-xs mt-0 mb-0">
              {errors.parentName.message}
            </p>
          )}
        </div>

        {/* Child Name */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="block text-[1rem]  font-medium text-gray-700 mb-1">
            Child's Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register('childName')}
            placeholder="Enter child's name"
            className={`w-full px-4 py-3 border rounded-lg outline-none transition
              ${
                errors.childName
                  ? 'border-red-400 focus:ring-2 focus:ring-red-200'
                  : 'border-gray-300 focus:ring-2 focus:ring-blue-200'
              }`}
          />
          {errors.childName && childName.length < 3 && (
            <p className="text-red-500 text-xs mt-0  mb-0">
              {errors.childName.message}
            </p>
          )}
        </div>

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
            <p className="text-red-500 text-xs mt-0  mb-0">
              {errors.grade.message}
            </p>
          )}
        </div>

        {/* Phone Number with Country Code */}
        <div className="flex flex-col gap-2 mb-4">
          <label className="block text-[1rem] font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, value } }) => (
              <PhoneInput
                international
                defaultCountry="IN" // change default to your target country
                value={value}
                onChange={onChange}
                className={`phone-input-wrapper ${errors.phone ? 'phone-error' : ''}`}
              />
            )}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-0  mb-0">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 bg-[#2B23FF] text-white font-semibold rounded-lg
            hover:bg-[#2B23FF] disabled:opacity-50 transition text-[1rem]"
        >
          {status === 'loading' ? 'Submitting...' : 'Book A Free Trial'}
        </button>
        {/* <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 bg-[#FFF116] text-black border-2 border-black rounded-full font-semibold 
            hover:bg-[#2B23FF] disabled:opacity-50 transition text-[1rem]"
        >
          {status === 'loading' ? 'Submitting...' : 'Book A Free Trial'}
        </button> */}

        {status === 'success' && (
          <p className="text-green-600 text-center text-sm font-medium">
            ✅ Registration successful!
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
