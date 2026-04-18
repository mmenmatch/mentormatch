'use client'
import React, { ChangeEvent } from 'react'

type InputProps = {
  labelName?: string
  placeHolder?: string
  required?: boolean
  value?: any
  name: string
  min?: number
  max?: number
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  register?: any
  errors?: any
  requiredErrorMsg?: string
  maxErrorMsg?: string
  type?: string
  pattern?: any
  emailError?: string
}

export const Input = ({
  labelName,
  placeHolder,
  required = false,
  name,
  max,
  min,
  onChange,
  value,
  register,
  errors,
  requiredErrorMsg,
  maxErrorMsg,
  type = 'text',
  pattern = '',
  emailError = '',
}: InputProps) => {
  const error = errors?.[name]
  return (
    <div className="custom-mm-input flex flex-col relative mb-4 min-h-12 p-1  rounded">
      <label
        className={`w-full px-1 -top-2.5 left-3 bg-white text-[0.75rem] font-normal
           ${errors[name] ? 'text-red-600' : ''}
           `}
        htmlFor={name}
      >
        {labelName}
        {required && (
          <span className="ml-0.5 text-red-600 text-[0.85rem]">*</span>
        )}
      </label>
      <input
        className={`peer w-full shadow-[3px_3px_0px_black] h-10  border-1 focus:outline-0 rounded min-h-6  px-4  `}
        name={name}
        maxLength={max}
        minLength={min}
        type={type}
        // value={value}
        // onChange={onChange}
        {...register(name, {
          required: required ? requiredErrorMsg : false,

          ...(pattern && {
            pattern: {
              value: pattern,
              message: emailError || 'Invalid ',
            },
          }),
          ...(min && {
            minLength: {
              value: min,
              message: `Minimum ${3} Characters are required.`,
            },
          }),
        })}
      />

      {error && (
        <p className="mt-0.5 text-red-600 text-[0.75rem]">{error?.message}</p>
      )}
    </div>
  )
}
