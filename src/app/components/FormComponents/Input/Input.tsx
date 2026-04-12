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
}

export const Input = ({
  labelName,
  placeHolder,
  required,
  name,
  max,
  min,
  onChange,
  value,
}: InputProps) => {
  return (
    <div className="custom-mm-input relative mb-4 min-h-13 ">
      <input
        className="peer border w-full min-h-10 rounded px-4 focus:outline-1 focus:-outline-offset-1 focus:outline-blue-800"
        name={name}
        maxLength={max}
        minLength={min}
        type="text"
        value={value}
        onChange={onChange}
      />
      <label
        className="absolute px-1 -top-2.5 left-3 bg-white text-[0.75rem] font-normal peer-focus:text-blue-800"
        htmlFor={name}
      >
        {labelName}
        {required && (
          <span className="ml-0.5 text-red-600 text-[0.85rem]">*</span>
        )}
      </label>
      <p className="mt-0.5 text-red-600 text-[0.65rem]">ERROR</p>
    </div>
  )
}
