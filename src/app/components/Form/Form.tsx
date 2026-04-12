import React from 'react'
import { Input } from '../FormComponents/Input/Input'

export const Form = () => {
  return (
    <div className="mx-auto max-w-[400px] my-8 border-2 border-blue-800 px-8 py-8">
      <Input name="firstname" labelName="PARENT NAME" required />
      <Input name="studentname" labelName="CHILD NAME" required />
    </div>
  )
}
