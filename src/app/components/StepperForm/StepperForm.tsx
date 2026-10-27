'use client'
import { useState, useEffect } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import type { Country } from 'react-phone-number-input'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { SuccessAnimation } from '../SuccessAnimation/SuccessAnimation'
import { AnimatePresence, motion } from 'framer-motion'

const Grade = ['6', '7', '8', '9', '10', '11', '12']
const SUBJECT = ['Maths', ' Science', 'English']
const CURRICULUM = ['IB', 'British/Cambridge/IGCSE', 'CBSE/ICSE', 'Other']
const PRICE = ['Yes, find my child’s tutor', 'No, this is above my budget']

const schema = z.object({
  grade: z.string().min(1, 'Please select a grade'),
  childName: z.string().min(3, 'Minimum 3 characters required'),
  phone: z
    .string()
    .min(1, 'Phone number is required')
    .refine((val) => isValidPhoneNumber(val), { message: 'Invalid phone number' }),
  subject: z.string().min(1, 'Please select a subject'),
  curriculum: z.string().min(1, 'Please select a curriculum'),
  pricingAccepted: z.string().min(1, 'Please select an option'),
})

type FormData = z.infer<typeof schema>

const getDateOptions = () => {
  const options: { value: string; month: string; day: number }[] = []
  const date = new Date()
  while (options.length < 4) {
    date.setDate(date.getDate() + 1)
    if (date.getDay() === 0) continue // skip Sunday
    options.push({
      value: date.toLocaleDateString('en-CA'),
      month: date.toLocaleString('en-US', { month: 'short' }),
      day: date.getDate(),
    })
  }
  return options
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
}
const StepperForm = ({ utm_campaign }: any) => {
  const [stepper, setStepper] = useState(0)
  const [dir, setDir] = useState(1) // 1 = forward, -1 = back
  const next = () => {
    setDir(1)
    setStepper((p) => p + 1)
  }
  const back = () => {
    setDir(-1)
    setStepper((p) => p - 1)
  }
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [detectedCountry, setDetectedCountry] = useState<Country>('AE')
  const [dateOptions] = useState(getDateOptions)
  useEffect(() => {
    if (!swiper) return
    // wait one frame so React has painted the error message first
    const id = requestAnimationFrame(() => swiper.updateAutoHeight(200))
    return () => cancelAnimationFrame(id)
  }, [swiper])

  const pricingLabel =
    detectedCountry === 'AE'
      ? 'Our fee is 70-100 AED/hour'
      : detectedCountry === 'IN'
        ? 'Our fee is ₹1200-₹1500/hour'
        : 'Our fee is $20-$25/hour'

  const {
    register,
    control,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  })

  useEffect(() => {
    fetch('https://ipinfo.io/json')
      .then((res) => res.json())
      .then((data: any) => {
        if (data?.country) setDetectedCountry(data.country as Country)
      })
      .catch(() => {})
  }, [])

  const nextButton = () => {
    swiper?.slideNext()
    setStepper((p) => p + 1)
  }

  const backButton = () => {
    swiper?.slidePrev()
    setStepper((p) => p - 1)
  }

  const handleGradeSelect = (grade: string) => {
    setValue('grade', grade, { shouldValidate: true })
    // nextButton()
  }

  const handleSubjectSelect = (subject: string) => {
    setValue('subject', subject, { shouldValidate: true })
    // nextButton()
  }
  const handleCurriculumSelect = (curriculum: string) => {
    setValue('curriculum', curriculum, { shouldValidate: true })
    // nextButton()
  }
  const handlePriceSelect = (pricingAccepted: string) => {
    setValue('pricingAccepted', pricingAccepted, { shouldValidate: true })
    // nextButton()
  }

  const childName = watch('childName')
  const phone = watch('phone')
  const subject = watch('subject')
  const curriculum = watch('curriculum')
  const pricingAccepted = watch('pricingAccepted')
  const grade = watch('grade')

  const step1Valid = childName?.trim()?.length > 3 && grade?.length > 0
  const step2Valid = subject?.length > 0 && curriculum?.length > 0
  const step3Valid = !!phone && isValidPhoneNumber(phone) && pricingAccepted?.length > 0

  // const lastValid = !!phone && isValidPhoneNumber(phone) && pricingAccepted?.length > 0

  const onSubmit = async (data: FormData) => {
    console.log('logged')
    setStatus('loading')
    const params = new URLSearchParams(window.location.search)
    const eventId = crypto.randomUUID()

    const payload = {
      ...data,
      pageUrl: window.location.href,
      referrer: document.referrer,
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: utm_campaign ? utm_campaign : params.get('utm_campaign'),
      utm_content: params.get('utm_content'),
      utm_term: params.get('utm_term'),
      meta_event_id: eventId || '',
    }
    localStorage.setItem('formData', JSON.stringify(payload))

    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'Submit Application')
    }

    try {
      const res = await fetch('/app/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')

      // Slide to the thank-you step
      // swiper?.slideTo(5)
      setStepper(3)

      // Google Ads conversion
      window.gtag?.('event', 'conversion', {
        send_to: 'AW-11284198205/Lm3eCMyY5eIbEL3m3IQq',
      })

      // dataLayer (enhanced conversions)
      window.dataLayer?.push({
        event: 'ec_form_submit',
        user_data: {
          // email: data?.email || '',
          phone_number: data?.phone || '',
        },
      })

      // Meta Pixel Lead
      if (typeof window.fbq !== 'undefined') {
        window.fbq(
          'track',
          'Lead',
          { ph: data.phone || '', fn: data.childName || '' },
          { eventID: eventId },
        )
      }

      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const btnClass = (valid: boolean) =>
    `w-full p-3 flex rounded justify-center items-center lg:text-[1rem] text-[0.85rem] font-semibold text-white ${
      valid ? 'bg-blue-700' : 'bg-gray-400'
    }`

  const BackLink = () => (
    <button
      type="button"
      onClick={backButton}
      className="self-start text-sm text-blue-700 font-medium mb-1"
    >
      ← Back
    </button>
  )

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[450px] border mx-auto border-white overflow-hidden bg-white rounded-2xl p-6">
      <div id="cta" className="w-full min-w-0">
        {stepper > 0 && stepper != 3 && (
          <button className="text-blue-800 font-semibold mb-2" onClick={backButton}>
            ← Back
          </button>
        )}
        {stepper != 3 && (
          <div className="w-full flex gap-2 mb-3 mt-2">
            <div
              className={`w-[33%] h-[6px] rounded ${stepper == 0 || stepper > 0 ? 'bg-blue-600' : 'bg-blue-200'} `}
            ></div>
            <div
              className={`w-[33%] h-[6px] rounded ${stepper == 1 || stepper > 1 ? 'bg-blue-600' : 'bg-blue-200'} `}
            ></div>
            <div
              className={`w-[33%] h-[6px] rounded ${stepper == 2 ? 'bg-blue-600' : 'bg-blue-200'} `}
            ></div>
          </div>
        )}
        {stepper == 0 && (
          <p className="text-[0.8rem] text-gray-500  font-medium">
            Step 1 of 3 · Takes under 60 seconds
          </p>
        )}
        {stepper == 1 && (
          <p className="text-[0.8rem] text-gray-500 font-medium ">Step 2 of 3 · Almost there</p>
        )}
        {stepper == 2 && <p className="text-[0.8rem] text-gray-500  font-medium">Final step</p>}
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={stepper}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {stepper === 0 && (
              <div className="w-full flex flex-col justify-center  h-auto mt-3">
                <h2 className="text-center lg:text-[1.3rem] text-[4.25vw] m-0 leading-8 mb-1 ">
                  Book Your Child’s Free 1:1 Demo Class
                </h2>
                <p className="text-center text-gray-500 lg:text-[0.8rem] text-[3.5vw] font-medium leading-6">
                  Tell us a little about your child and we’ll match the right tutor.
                </p>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="w-full flex flex-col gap-2">
                    <label className="block text-[3.5vw] lg:text-[0.9rem]  font-medium text-gray-700 ">
                      Child's Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      {...register('childName')}
                      placeholder="Enter Child's Name"
                      className="w-full px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.childName && (
                      <p className="text-red-500 text-xs">{errors.childName.message}</p>
                    )}
                  </div>
                  <div className="mb-2">
                    <label className="block text-[3.5vw] lg:text-[0.9rem] font-medium text-gray-700 text-left">
                      Select Your Child's Grade <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                      {Grade.map((ele) => (
                        <button
                          type="button"
                          key={ele}
                          className={`lg:px-6 px-6 py-2.5 border rounded font-medium lg:text-[0.85rem] ${
                            watch('grade') === ele
                              ? 'bg-blue-700 text-white  border-blue-700'
                              : 'border-blue-400'
                          }`}
                          onClick={() => handleGradeSelect(ele)}
                        >
                          {ele}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={nextButton}
                    disabled={!step1Valid}
                    className={btnClass(step1Valid)}
                  >
                    Start Now →
                  </button>
                  <span className="text-center font-bold text-[#3f4b7f]  text-[0.8rem]">
                    No payment required. Your first class is free.{' '}
                  </span>
                </div>
              </div>
            )}
            {stepper === 1 && (
              <div className="w-full flex flex-col justify-center  h-auto mt-3">
                <h2 className="text-center text-[1rem] m-0 leading-8 mb-1 ">
                  Which Subject Does Your Child Need a Boost In?{' '}
                </h2>
                <p className="text-center text-gray-500 text-[0.8rem] font-medium leading-5">
                  Choose the subject and curriculum. We’ll match a tutor who teaches exactly
                  that.{' '}
                </p>
                {/* <p className="text-center">We'd love to know who's joining the Mentor Match family</p> */}
                <div className="w-full mt-4 flex flex-col gap-6">
                  <div className="">
                    <label className="block text-[3.5vw] lg:text-[0.9rem]  font-medium text-gray-700">
                      Select Your Child's Subject <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap justify-start  gap-2 lg:gap-3 mt-4">
                      {SUBJECT.map((ele) => (
                        <button
                          type="button"
                          key={ele}
                          className={`lg:px-5 px-6 py-2.5 border rounded font-medium lg:text-[0.85rem] ${
                            watch('subject') === ele
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'border-blue-400'
                          }`}
                          onClick={() => handleSubjectSelect(ele)}
                        >
                          {ele}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="">
                    <label className="block text-[3.5vw] lg:text-[0.9rem]  font-medium text-gray-700">
                      Select Your Child's Curriculum <span className="text-red-500">*</span>
                    </label>
                    <div className="flex flex-wrap justify-start gap-2 lg:gap-3 mt-4">
                      {CURRICULUM.map((ele) => (
                        <button
                          type="button"
                          key={ele}
                          className={`lg:px-6 px-6 py-2.5 border rounded font-medium lg:text-[0.85rem] ${
                            watch('curriculum') === ele
                              ? 'bg-blue-700 text-white   border-blue-700'
                              : 'border-blue-400'
                          }`}
                          onClick={() => handleCurriculumSelect(ele)}
                        >
                          {ele}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="w-full ">
                    <button
                      type="button"
                      onClick={nextButton}
                      disabled={!step2Valid}
                      className={btnClass(step2Valid)}
                    >
                      Continue →
                    </button>
                  </div>
                  <span className="text-center font-bold text-[#3f4b7f]  text-[0.8rem]">
                    One more step and your free demo class is booked{' '}
                  </span>
                </div>
              </div>
            )}
            {stepper === 2 && (
              <div className="w-full flex flex-col mt-3">
                <h2 className="text-center text-[1.2rem] m-0 leading-8 mb-1">
                  Your Free Demo Class Is One Tap Away{' '}
                </h2>
                <p className="text-center text-gray-500 text-[0.8rem] font-medium leading-5">
                  We’ll share your tutor and class timing on this number.{' '}
                </p>{' '}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2 my-4">
                    <label className="block text-[3.5vw] lg:text-[0.9rem]  font-medium text-gray-700">
                      Parent's Phone Number <span className="text-red-500">*</span>
                    </label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          international
                          defaultCountry={detectedCountry}
                          value={value}
                          onChange={(v) => onChange(v || '')}
                          autoComplete="tel"
                          className={`phone-input-wrapper ${errors?.phone ? 'phone-error' : ''}`}
                        />
                      )}
                    />
                    {errors?.phone && (
                      <p className="text-red-500 text-xs mt-0 mb-0">{errors.phone.message}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-2 mb-4">
                    <label className="block text-[3.5vw] lg:text-[0.9rem]  font-medium text-gray-700">
                      {pricingLabel} <span className="text-red-500">*</span>
                    </label>
                    {PRICE.map((ele) => (
                      <button
                        type="button"
                        key={ele}
                        className={`lg:px-6 px-6 py-2.5 border rounded font-medium lg:text-[0.85rem] ${
                          watch('pricingAccepted') === ele
                            ? 'bg-blue-700 text-white   border-blue-700'
                            : 'border-blue-400 '
                        }`}
                        onClick={() => handlePriceSelect(ele)}
                      >
                        {ele}
                      </button>
                    ))}
                    {errors?.pricingAccepted && (
                      <p className="text-red-500 text-xs mt-0 mb-0">
                        {errors.pricingAccepted.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <button
                    type="button"
                    onClick={handleSubmit(onSubmit, (errs) =>
                      console.log('VALIDATION ERRORS:', errs),
                    )}
                    disabled={!step3Valid || status === 'loading'}
                    className={btnClass(step3Valid && status !== 'loading')}
                  >
                    {status === 'loading' ? 'Booking...' : 'Book My Free Class'}
                  </button>
                </div>
                <span className="text-center font-bold text-[#3f4b7f]  text-[0.8rem] mt-4">
                  Your details are safe. We never spam.
                </span>
              </div>
            )}
            {stepper === 3 && (
              <div className="flex flex-col justify-center items-center gap-2 ">
                <SuccessAnimation w={'w-[200px]'} h={'h-[200px]'} />
                <h2 className="text-center m-0 text-[2rem]">Thank You </h2>
                <p className="text-center text-[0.9rem] font-medium leading-[150%]">
                  Our counsellor will reach out to you via Whatsapp in the next 12 hrs.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default StepperForm
