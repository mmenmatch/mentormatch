'use client'
import { useRef, useEffect, useState } from 'react'
import { Input } from '../FormComponents/Input/Input'
import { useForm, Controller } from 'react-hook-form'
import IntlTelInput from 'intl-tel-input/reactWithUtils'
import 'intl-tel-input/styles'

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    // mode: 'onChange', // 🔥 this is the key
    // reValidateMode: 'onChange',
  })
  console.log('errors', errors)

  const [country, setCountry] = useState('in')

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then((res) => res.json())
      .then((data: any) => {
        if (data?.country_code) {
          setCountry(data.country_code.toLowerCase())
        }
      })
  }, [])
  const onSubmit = (data: any) => {
    console.log('Submitted:', data)
  }
  const isValidRef = useRef(false)

  return (
    <div className="py-8 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto px-8 py-8 shadow-[1px_1px_0mpx_black] rounded-2xl bg-white"
      >
        <div className="flex justify-center items-center">
          {/* <h2 className="text-3xl">Book A Free Trial</h2> */}
        </div>
        <Input
          name="firstname"
          labelName="PARENT NAME"
          required
          register={register}
          errors={errors}
          requiredErrorMsg="This Field is Required"
          min={3}
        />
        <Input
          name="studentname"
          labelName="CHILD NAME"
          required
          register={register}
          errors={errors}
          requiredErrorMsg="This Field is Required"
          min={3}
        />
        <Input
          name="email"
          labelName="EMAIL ADDRESS"
          required
          register={register}
          errors={errors}
          requiredErrorMsg="This Field is Required"
          type="email"
          pattern={/^[^\s@]+@[^\s@]+\.[^\s@]+$/}
          emailError="Invalid Email Address"
        />
        <div>
          <label
            className={`w-full px-1 -top-2.5 left-3 bg-white text-[0.75rem] font-normal ${errors?.phone?.message ? 'text-red-600' : ''}`}
          >
            PHONE NUMBER{' '}
            <span className="ml-0.5 text-red-600 text-[0.85rem]">*</span>
          </label>

          <Controller
            name="phone"
            control={control}
            // rules={{
            //   required: 'This Field is required',
            //   // validate: () => {
            //   //   if (!isValidRef.current) {
            //   //     return 'Enter a valid phone number'
            //   //   }
            //   //   return true
            //   // },
            // }}
            render={({ field }) => (
              <div>
                <IntlTelInput
                  {...field}
                  initialCountry="auto"
                  strictMode
                  separateDialCode
                  formatOnDisplay
                  usePreciseValidation
                  value={field.value} // ✅ bind value
                  onChangeNumber={(number: string) => {
                    field.onChange(number) // ✅ send value to RHF
                  }}
                  // onChangeValidity={(isValid: boolean) => {
                  //   isValidRef.current = isValid // ✅ track validity
                  //   console.log('isValidRef', isValidRef.current)
                  //   // if (!isValidRef.current) {
                  //   //   setError('phone', {
                  //   //     type: 'manual',
                  //   //     message: 'Dont Forget Your Username Should Be Cool!',
                  //   //   })
                  //   // }
                  // }}
                  geoIpLookup={(callback) => {
                    fetch('https://ipapi.co/json/')
                      .then((res) => res.json())
                      .then((data: any) => {
                        console.log('')
                        callback(data.country_code?.toLowerCase()) // e.g., "in"
                      })
                      .catch(() => {
                        callback('ae') // fallback (India)
                      })
                  }}
                />

                {errors.phone && (
                  <p className="mt-0.5 text-red-600 text-[0.75rem]">
                    {errors.phone.message as string}
                  </p>
                )}
              </div>
            )}
          />
        </div>

        <button
          type="submit"
          className="w-full mt-8  border-1 border-black xl:px-8 xl:py-3 px-6 py-2 text-white rounded text-[1rem] font-medium bg-[#2b51ff]"
        >
          Book A Free Trial
        </button>
      </form>
    </div>
  )
}
