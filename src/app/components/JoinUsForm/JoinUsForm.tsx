'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { z } from 'zod'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'
import { useState, useEffect, use } from 'react'
import { useJoinUsStepper } from '@/store/joinUs'
import type { Country } from 'react-phone-number-input'
import Image from 'next/image'
import ThankYou from '../../../../public/assets/Images/thanku-tick.webp'

export const JoinUsForm = () => {
  const [writeText, setWriteText] = useState({ curriculum: false, subject: false, language: false })
  const [detectedCountry, setDetectedCountry] = useState<Country>('AE') // fallback

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

  const stepperCount = useJoinUsStepper((state) => state?.stepperCount)
  const nextStep = useJoinUsStepper((state) => state?.nextStep)
  const BackStep = useJoinUsStepper((state) => state?.BackStep)

  const [dir, setDir] = useState(1) // 1 = forward, -1 = back
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 30 : -30, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -30 : 30, opacity: 0 }),
  }

  const parentOrChildOptions = [
    'Parent - For my child',
    'Student - For myself',
    'I’m applying as a tutor',
  ]
  const GRADE = ['Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12']
  const CURRICULUM = [
    'International Baccalaureate',
    'Cambridge/British/IGCSE',
    'American/Common Core',
    'ICSE/CBSE',
    'Others',
  ]
  const SUBJECTS = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Combined Science',
    'English',
    'Others',
  ]
  const PRESENT_ACADEMIC_PERFORMANCE = [
    'Satisfied, want to stay consistent',
    'Good, but aiming higher',
    'Average, need improvement',
    'Below expectations, need strong support',
  ]
  const MAIN_REASON = [
    'Score improvement',
    'Optimizing Study time',
    'Need prep for upcoming exam',
    'Need help understanding concepts',
    'Personal attention',
    'Need someone to clear doubts',
    'Flexible scheduling',
  ]

  const USEFULL_RESOURCE = [
    'Topic-wise AI diagnostic',
    'Practice papers',
    'Your recorded sessions',
    'Monthly parent teacher meetings',
    'Invigilated mock tests',
    'Progress Tracker',
  ]
  const PREFERED_TEACHER = ['Male', 'Female', 'No Preferrence']
  const PARENTS_AVAILABLE = ['Yes, we both can attend', 'No, we can’t']
  const LAPTOP = ['Yes', 'No']
  const PRICING = ['Yes, find my tutor', 'No, this is above my budget']

  const START_FROM = ['Immediately', '1-4 weeks', 'Not sure, just exploring']
  const TIME = ['5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM']
  const SUCCESS_PAGE = [
    'Our advisor wil contact you within 24 hours ',
    'You’l meet your matched tutor in a free trial class',
    'You can start your classes right after',
  ]
  const dateOptions = []
  const date = new Date()

  while (dateOptions.length < 4) {
    date.setDate(date.getDate() + 1)

    // Skip Sunday (0 = Sunday)
    if (date.getDay() === 0) continue

    dateOptions.push({
      value: date.toLocaleDateString('en-CA'), // YYYY-MM-DD
      month: date.toLocaleString('en-US', {
        month: 'short',
      }),
      day: date.getDate(),
    })
  }

  const schema = z.object({
    filled_by: z.string().min(3, 'This Field is required')?.optional(),
    grade: z.string().min(3, 'Please select a grade')?.optional(),
    curriculum: z.string().min(3, 'Please select a curriculum')?.optional(),
    ...(writeText?.curriculum && {
      curriculumText: z.string().min(3, 'Minimum 3 characters required'),
    }),
    subject: z.string().min(3, 'Please select a subject')?.optional(),
    ...(writeText?.subject && {
      subjectText: z.string().min(3, 'Minimum 3 characters required'),
    }),
    persentAcademicPerformace: z.string().optional(),
    mainReason: z.string().optional(),
    usefullResource: z.string().optional(),
    country: z.string().min(3, 'Minimum 3 characters required'),
    city: z.string().min(3, 'Minimum 3 characters required'),
    school: z.string().min(3, 'Minimum 3 characters required'),
    childName: z.string().min(3, 'Minimum 3 characters required'),
    parentName: z.string().min(3, 'Minimum 3 characters required'),
    email: z.string().email('Please enter a valid email'),
    phone: z
      .string()
      .min(1, 'Phone number is required')
      .refine((val) => isValidPhoneNumber(val), {
        message: 'Invalid phone number',
      }),
    startFrom: z.string().min(3, 'Please select a grade')?.optional(),
    day: z.string().min(1, 'Please select a date'),
    time: z.string().min(1, 'Please select a time'),
    preferedTeacher: z.string().min(1, 'Please select a preferedTeacher')?.optional(),
    parentsAvailable: z.string().min(1, 'Please select a parentsAvailable')?.optional(),
    laptopAvailable: z.string().min(1, 'Please select a laptopAvailable')?.optional(),
    language: z.string().optional(),
    ...(writeText?.language && {
      languageText: z.string().min(3, 'Minimum 3 characters required'),
    }),
    pricingAccepted: z.string().min(1, 'Please select a pricing'),
    // mention: z.string().min(3, 'Minimum 3 characters required'),
  })

  type FormData = z.infer<typeof schema>

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

  const filled_by = watch('filled_by')
  const grade = watch('grade')
  const curriculum = watch('curriculum')
  const curriculumText = watch('curriculumText') as String
  const subject = watch('subject')
  const subjectText = watch('subjectText') as String
  const persentAcademicPerformace = watch('persentAcademicPerformace')
  const mainReason = watch('mainReason')
  const usefullResource = watch('usefullResource')
  const country = watch('country')
  const city = watch('city')
  const school = watch('school')
  const childName = watch('childName')
  const parentName = watch('parentName')
  const email = watch('email')
  const time = watch('time')
  const preferedTeacher = watch('preferedTeacher')
  const parentsAvailable = watch('parentsAvailable')
  const laptopAvailable = watch('laptopAvailable')
  const language = watch('language')
  const languageText = watch('languageText') as String
  // const mention = watch('mention')
  const day = watch('day')

  const isParent = filled_by == 'Parent - For my child'

  const handleSelect = (ele: any, name: any) => {
    if (name == 'pricingAccepted') {
      setValue(name, ele, { shouldValidate: true })
      handleSubmit(onSubmit, (errs) => console.log('VALIDATION ERRORS:', errs))()

      return
    }
    if ((name == 'curriculum' || name == 'subject') && ele == 'Others') {
      setValue(name, ele, { shouldValidate: true })
      setWriteText((prev) => ({ ...prev, [name]: true }))
      return
    }
    if (name == 'language' && ele == 'No') {
      setValue(name, ele, { shouldValidate: true })
      setWriteText((prev) => ({ ...prev, [name]: true }))
      return
    }
    if (name == 'filled_by' && ele == 'I’m applying as a tutor') {
      window.location.href = 'https://www.mentormatch.com/become-a-teacher'
    }
    setValue(name, ele, { shouldValidate: true })
    nextStep()
    setDir(1)
  }

  const goBack = () => {
    if (stepperCount === 16) setWriteText((p) => ({ ...p, language: false }))
    if (stepperCount === 2) setWriteText((p) => ({ ...p, curriculum: false }))
    if (stepperCount === 3) setWriteText((p) => ({ ...p, subject: false }))
    BackStep()
    setDir(-1)
  }

  const goNext = () => {
    nextStep()
    setDir(1)
  }
  useEffect(() => {
    if (day && time) {
      nextStep()
      setDir(1)
    }
  }, [time, day])

  const handleDateTime = (ele: any, name: any) => {
    // console.log(name, ele)
    setValue(name, ele, { shouldValidate: true })
    // if (date && time?.length > 0) {
    //   goNext()
    // }
  }

  const onSubmit = async (data: FormData) => {
    const params = new URLSearchParams(window.location.search)
    const eventId = crypto.randomUUID()

    const payload = {
      ...data,
      pageUrl: window.location.href,
      referrer: document.referrer,
      utm_source: params.get('utm_source'),
      utm_medium: params.get('utm_medium'),
      utm_campaign: params.get('utm_campaign'),
      utm_content: params.get('utm_content'),
      utm_term: params.get('utm_term'),
      meta_event_id: eventId || '',
      date: day || '',
      country: country || '',
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
      goNext()
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
    } catch {}
  }

  return (
    <div className="bg-white lg:min-w-120 w-full max-w-120 flex flex-col rounded-xl">
      {isParent ? (
        <p className="text-center text-[#5B6488] text-[0.8rem] font-medium border-b border-[#E3E8F5] py-3 ">
          Help us match your child to the right tutor.{' '}
        </p>
      ) : (
        <p className="text-center text-[#5B6488] text-[0.8rem] font-medium border-b border-[#E3E8F5] py-3 ">
          Help us match the right tutor
        </p>
      )}
      <div className="lg:px-6 px-4 lg:py-6 py-4 flex flex-col gap-4">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.div
            key={stepperCount}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {stepperCount === 0 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw] leading-[160%] text-[#0E1B4D] lg:leading-8  font-medium ">
                  Are you looking for tutoring for your child or for yourself?{' '}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-3 mt-2">
                  {parentOrChildOptions?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('filled_by') === ele ? 'bg-blue-700   text-white ' : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'filled_by')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px] mt-4 lg:mt-0 text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            )}
            {stepperCount === 1 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium ">
                  {isParent ? 'Which grade is your child in?' : 'Which grade are you in?'}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-3 mt-2">
                  {GRADE?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('grade') === ele ? 'bg-blue-700   text-white ' : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'grade')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px] mt-4 lg:mt-0  text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            )}
            {!writeText?.curriculum && stepperCount === 2 ? (
              <div className="flex flex-col gap-2 lg:gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw] text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                  {isParent
                    ? 'Which curriculum is your child studying?'
                    : 'Which curriculum are you studying?'}{' '}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-3 mt-2">
                  {CURRICULUM?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3   rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw]  w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('curriculum') === ele ? 'bg-blue-700   text-white ' : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'curriculum')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px]  mt-4 lg:mt-0 text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            ) : (
              <>
                {writeText?.curriculum && stepperCount === 2 && (
                  <div className="flex flex-col gap-2">
                    <p className="m-0 lg:text-[1.2rem] text-[4.5vw] text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                      {isParent
                        ? 'You’ve selected others. What curriculum is your child in?'
                        : 'You’ve selected others. What curriculum are you in'}
                    </p>
                    <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                      <input
                        {...register('curriculumText')}
                        placeholder="Enter curriculum"
                        className="w-full px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                      />
                      {errors.curriculumText?.message && (
                        <p className="text-red-500 text-xs mt-0 mb-0">
                          {errors.curriculumText.message}
                        </p>
                      )}
                    </div>

                    <div className="flex justify-between items-center mt-4">
                      <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                        Back
                      </button>
                      <button
                        className={`w-[80px] text-[0.8rem] bg-[#1F4FD8] text-white p-2 rounded-4xl  ${curriculumText?.length >= 3 ? 'bg-[#1F4FD8]' : 'bg-gray-500 cursor-not-allowed '}`}
                        onClick={curriculumText?.length >= 3 ? () => goNext() : () => {}}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
            {!writeText?.subject && stepperCount === 3 ? (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw] text-[#0E1B4D] leading-[140%] lg:leading-8 font-medium">
                  {isParent
                    ? 'Which subject are you looking for tutoring in for your child?'
                    : 'Which subject are you looking for tutoring?'}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-3 mt-2">
                  {SUBJECTS?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('subject') === ele ? 'bg-blue-700   text-white ' : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'subject')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px]  mt-4 lg:mt-0 text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            ) : (
              <>
                {writeText?.subject && stepperCount === 3 && (
                  <div className="flex flex-col gap-2">
                    <p className="m-0 lg:text-[1.2rem] text-[4.5vw] text-[#0E1B4D] leading-7  font-medium">
                      Which subject are you looking for tutoring?
                    </p>
                    <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                      <input
                        {...register('subjectText')}
                        placeholder="Enter subject"
                        className="w-full px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                      />
                      {errors.subjectText?.message && (
                        <p className="text-red-500 text-xs mt-0 mb-0">
                          {errors.subjectText.message}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                        Back
                      </button>
                      <button
                        className={`w-[80px] text-[0.8rem] bg-[#1F4FD8] text-white p-2 rounded-4xl  ${subjectText?.length >= 3 ? 'bg-[#1F4FD8]' : 'bg-gray-500 cursor-not-allowed '}`}
                        onClick={subjectText?.length >= 3 ? () => goNext() : () => {}}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
            {stepperCount === 4 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw] text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                  {isParent
                    ? 'How satisfied are you with your child’s present academic grades?'
                    : 'How satisfied are you with your present academic grades?'}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-3 mt-2">
                  {PRESENT_ACADEMIC_PERFORMANCE?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('persentAcademicPerformace') === ele
                          ? 'bg-blue-700   text-white '
                          : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'persentAcademicPerformace')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px] mt-4 lg:mt-0 text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            )}
            {stepperCount === 5 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw] text-[#0E1B4D]  leading-[140%] lg:leading-8  font-medium">
                  {isParent
                    ? 'What’s the main reason you’re opting for 1-on-1 online classes for your child?'
                    : 'What’s the main reason you’re opting for our 1-on-1 online classes?'}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-3 mt-2">
                  {MAIN_REASON?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('mainReason') === ele ? 'bg-blue-700   text-white ' : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'mainReason')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px] mt-4 lg:mt-0 text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            )}
            {stepperCount === 6 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                  {isParent
                    ? 'Which of the following resources would be useful for your child?'
                    : 'What are the following resources that are useful for you?'}{' '}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                  {USEFULL_RESOURCE?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('usefullResource') === ele
                          ? 'bg-blue-700   text-white '
                          : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'usefullResource')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px]  mt-4 lg:mt-0 text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            )}
            {stepperCount === 7 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="m-0 lg:text-[1.2rem] text-[4.5vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                    Which country are you from?{' '}
                  </p>
                  <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                    <input
                      {...register('country')}
                      placeholder="Enter country"
                      className="w-full text-base px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.country?.message && (
                      <p className="text-red-500 text-xs mt-0 mb-0">{errors.country.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="m-0 lg:text-[1.2rem] text-[4.5vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                    Which city do you reside in?{' '}
                  </p>
                  <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                    <input
                      {...register('city')}
                      placeholder="Enter city"
                      className="w-full text-base px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.city?.message && (
                      <p className="text-red-500 text-xs mt-0 mb-0">{errors.city.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                    Back
                  </button>
                  <button
                    className={`w-[80px] text-[0.8rem] bg-[#1F4FD8] text-white p-2 rounded-4xl  ${country?.length >= 3 && city?.length >= 3 ? 'bg-[#1F4FD8]' : 'bg-gray-500 cursor-not-allowed '}`}
                    onClick={country?.length >= 3 && city?.length >= 3 ? () => goNext() : () => {}}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {stepperCount === 8 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="m-0 lg:text-[1.2rem] text-[4.25vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                    {isParent
                      ? 'Which school does your child study in?'
                      : 'Which school do you study in?'}
                  </p>
                  <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                    <input
                      {...register('school')}
                      placeholder="Enter school name"
                      className="w-full text-base px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.school?.message && (
                      <p className="text-red-500 text-xs mt-0 mb-0">{errors.school.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                    Back
                  </button>
                  <button
                    className={`w-[80px] text-[0.8rem] bg-[#1F4FD8] text-white p-2 rounded-4xl  ${school?.length >= 3 ? 'bg-[#1F4FD8]' : 'bg-gray-500 cursor-not-allowed '}`}
                    onClick={school?.length >= 3 ? () => goNext() : () => {}}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {stepperCount === 9 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="m-0 lg:text-[1.2rem] text-[4.5vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                    {isParent ? 'What’s your child’s name?' : 'What’s your name?'}
                  </p>
                  <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                    <input
                      {...register('childName')}
                      placeholder="Enter student's name"
                      className="w-full text-base px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.childName?.message && (
                      <p className="text-red-500 text-xs mt-0 mb-0">{errors.childName.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="m-0 lg:text-[1.2rem] text-[4.5vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                    {isParent ? 'What’s your name?' : 'What’s your parent’s name?'}
                  </p>
                  <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                    <input
                      {...register('parentName')}
                      placeholder="Enter parent's name"
                      className="w-full text-base px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.parentName?.message && (
                      <p className="text-red-500 text-xs mt-0 mb-0">{errors.parentName.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                    Back
                  </button>
                  <button
                    className={`w-[80px] text-[0.8rem] bg-[#1F4FD8] text-white p-2 rounded-4xl  ${parentName?.length >= 3 && childName?.length >= 3 ? 'bg-[#1F4FD8]' : 'bg-gray-500 cursor-not-allowed '}`}
                    onClick={
                      parentName?.length >= 3 && childName?.length >= 3 ? () => goNext() : () => {}
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {stepperCount === 10 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="m-0 lg:text-[1.2rem] text-[4.5vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                    {isParent
                      ? 'What’s your email address?'
                      : 'What’s your parent’s email address?'}
                  </p>
                  <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                    <input
                      {...register('email')}
                      placeholder="Enter Email Address"
                      className="w-full text-base px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.email?.message && (
                      <p className="text-red-500 text-xs mt-0 mb-0">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="m-0 lg:text-[1.2rem] text-[4.5vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                    {isParent ? 'What’s your phone number?' : 'What’s your parent’s phone number?'}
                  </p>
                  <div className="w-full flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2 w-full">
                    {detectedCountry && (
                      <div className="flex flex-col gap-2 mb-4 w-full">
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
                              className={`phone-input-wrapper ${errors?.phone ? 'phone-error' : ''} text-base`}
                              numberInputProps={{
                                className: 'text-base',
                              }}
                            />
                          )}
                        />
                        {errors?.phone && (
                          <p className="text-red-500 text-xs mt-0  mb-0">{errors.phone.message}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                    Back
                  </button>
                  <button
                    className={`w-[80px] text-[0.8rem] bg-[#1F4FD8] text-white p-2 rounded-4xl  ${parentName?.length >= 3 && childName?.length >= 3 ? 'bg-[#1F4FD8]' : 'bg-gray-500 cursor-not-allowed '}`}
                    onClick={
                      parentName?.length >= 3 && childName?.length >= 3 ? () => goNext() : () => {}
                    }
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
            {stepperCount === 11 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                  {isParent
                    ? 'How quickly are you looking to start 1-on-1 classes for your child?'
                    : 'How quickly are you looking to start 1-on-1 classes?'}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                  {START_FROM?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw]  w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('startFrom') === ele ? 'bg-blue-700   text-white ' : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'startFrom')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                  Back
                </button>
              </div>
            )}
            {stepperCount === 12 && (
              <div className="flex flex-col gap-4">
                <div>
                  <p className="m-0 lg:text-[1.2rem] text-[4.5vw]  text-[#0E1B4D] leading-[140%] lg:leading-8  font-medium">
                    Choose a Convenient Date & Time for Your FREE Demo Class{' '}
                  </p>

                  <div className="flex flex-col gap-4 justify-start lg:gap-2.5  gap- mt-2">
                    <label className="text-[0.8rem] text-[#5B6488] font-medium">Select Date</label>
                    <div className="flex flex-wrap gap-2">
                      {dateOptions?.map((ele: any) => (
                        <div
                          className={`px-4 py-3     flex flex-col justify-center items-center gap-2 rounded-4xl  hover:bg-blue-600 hover:text-white  ${
                            watch('day') === ele?.day + ' ' + ele?.month
                              ? 'bg-blue-700 text-white border-blue-700'
                              : 'bg-[#EEF6FF]'
                          }`}
                          onClick={() => {
                            handleDateTime(ele?.day + ' ' + ele?.month, 'day')
                          }}
                        >
                          <p className="text-[3.2vw] lg:text-[0.8rem] font-medium">
                            {ele?.day} {ele?.month}
                          </p>
                        </div>
                      ))}
                    </div>
                    <label className="text-[0.8rem] text-[#5B6488] font-medium mt-4">
                      Select Time (Gulf Standard Time)
                    </label>
                    <div className="flex flex-wrap  gap-4">
                      {TIME?.map((ele: any, index) => (
                        <div
                          key={index + 1}
                          className={`max-w-[80px] text-center text-[3.2vw] lg:text-[0.8rem] lg:px-4 px-3 text-nowrap py-3 rounded-4xl font-medium  w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                            watch('time') === ele ? 'bg-blue-700   text-white ' : 'text-[#0E1B4D]'
                          }`}
                          onClick={() => handleDateTime(ele, 'time')}
                        >
                          {ele}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                  Back
                </button>
              </div>
            )}
            {stepperCount === 13 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw] text-[#0E1B4D]  leading-[140%] lg:leading-8  font-medium">
                  {isParent
                    ? 'Do you have a preferred gender for your child’s tutor?'
                    : 'Do you have a preferred gender for your tutor?'}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                  {PREFERED_TEACHER?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('preferedTeacher') === ele
                          ? 'bg-blue-700   text-white '
                          : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'preferedTeacher')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px] mt-4 lg:mt-0 text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            )}
            {/* {stepperCount === 14 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 text-[1.2rem] text-[#0E1B4D] leading-8  font-medium">
                  Do you have a preferred gender for your tutor?{' '}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                  {PREFERED_TEACHER?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('preferedTeacher') === ele
                          ? 'bg-blue-700   text-white '
                          : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'preferedTeacher')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                  Back
                </button>
              </div>
            )} */}
            {stepperCount === 14 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw] text-[#0E1B4D]  leading-[140%] lg:leading-8  font-medium">
                  {isParent
                    ? 'Can you and your child both attend the first Demo Class?'
                    : 'Can you and your parent both attend the first Demo Class?'}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                  {PARENTS_AVAILABLE?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('parentsAvailable') === ele
                          ? 'bg-blue-700   text-white '
                          : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'parentsAvailable')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px] mt-4 lg:mt-0 text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            )}
            {stepperCount === 15 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw] text-[#0E1B4D]  leading-[140%] lg:leading-8  font-medium">
                  {isParent
                    ? 'Does your child have a laptop/tablet and a high-speed internet connection to attend classes?'
                    : 'Do you have laptop/tablet and a high speed internet to attend classes?'}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                  {LAPTOP?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('laptopAvailable') === ele
                          ? 'bg-blue-700   text-white '
                          : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'laptopAvailable')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px]  mt-4 lg:mt-0 text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            )}
            {!writeText?.language && stepperCount === 16 ? (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[4.5vw] text-[#0E1B4D]  leading-[140%] lg:leading-8  font-medium">
                  {isParent
                    ? 'Is your child comfortable with English as the medium of instruction?'
                    : 'Are you comfortable with English as your medium of instruction?'}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                  {LAPTOP?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white  ${
                        watch('language') === ele ? 'bg-blue-700   text-white ' : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => handleSelect(ele, 'language')}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button
                  className="w-[40px]   mt-4 lg:mt-0  text-[0.8rem] text-[#1F4FD8]"
                  onClick={goBack}
                >
                  Back
                </button>
              </div>
            ) : (
              <>
                {writeText?.language && stepperCount === 16 && (
                  <div className="flex flex-col gap-2">
                    <p className="m-0 lg:text-[1.2rem] text-[4.2vw] text-[#0E1B4D]  leading-[140%] lg:leading-8  font-medium">
                      {isParent
                        ? 'You’ve selected No. Please enter your child’s preferred medium of instruction.'
                        : 'You’ve selected No. Please enter your preferred medium of instruction.'}
                    </p>
                    <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                      <input
                        {...register('languageText')}
                        placeholder="Enter language"
                        className="w-full px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                      />
                      {errors.languageText?.message && (
                        <p className="text-red-500 text-xs mt-0 mb-0">
                          {errors.languageText.message}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                        Back
                      </button>
                      <button
                        className={`w-[80px] text-[0.8rem] bg-[#1F4FD8] text-white p-2 rounded-4xl  ${languageText?.length >= 3 ? 'bg-[#1F4FD8]' : 'bg-gray-500 cursor-not-allowed '}`}
                        onClick={languageText?.length >= 3 ? () => goNext() : () => {}}
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
            {stepperCount === 17 && (
              <div className="flex flex-col gap-4">
                <p className="m-0 lg:text-[1.2rem] text-[3.7vw] text-[#0E1B4D]  leading-[140%] lg:leading-8  font-medium">
                  {isParent
                    ? 'Are you comfortable paying USD 25/session'
                    : 'Are you comfortable paying USD 25/session'}
                </p>
                <div className="flex flex-wrap justify-start lg:gap-2.5  gap-3 mt-2">
                  {PRICING?.map((ele: any) => (
                    <button
                      type="button"
                      key={ele}
                      className={`lg:px-6 px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] text-[3.25vw] w-full bg-[#EEF6FF] hover:bg-blue-600 hover:text-white ${
                        watch('pricingAccepted') === ele
                          ? 'bg-blue-700   text-white '
                          : 'text-[#0E1B4D]'
                      }`}
                      onClick={() => {
                        handleSelect(ele, 'pricingAccepted')
                      }}
                    >
                      {ele}
                    </button>
                  ))}
                </div>
                <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                  Back
                </button>
              </div>
            )}
            {/* {stepperCount === 18 && (
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <p className="m-0 lg:text-[1.2rem] text-[4.2vw] text-[#0E1B4D]  leading-[140%] lg:leading-8  font-medium">
                    {isParent
                      ? 'Would you like to add any additional comments to personalise the classes more for your child? If yes, please mention…'
                      : 'Would you like to add any additional comments to personalise the classes more for you? If yes, pls mention...'}
                  </p>
                  <div className="flex flex-wrap justify-start lg:gap-2.5  gap-2 mt-2">
                    <input
                      {...register('mention')}
                      placeholder="Enter "
                      className="w-full px-4 py-3 border rounded-lg outline-none transition border-gray-300 focus:ring-2 focus:ring-blue-200"
                    />
                    {errors.mention?.message && (
                      <p className="text-red-500 text-xs mt-0 mb-0">{errors.mention.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <button className="w-[40px] text-[0.8rem] text-[#1F4FD8]" onClick={goBack}>
                    Back
                  </button>
                  <button
                    className={`w-[80px] text-[0.8rem] bg-[#1F4FD8] text-white p-2 rounded-4xl  ${mention?.length >= 3 ? 'bg-[#1F4FD8]' : 'bg-gray-500 cursor-not-allowed '}`}
                    onClick={handleSubmit(onSubmit, (errs) =>
                      console.log('VALIDATION ERRORS:', errs),
                    )}
                  >
                    Next
                  </button>
                </div>
              </div>
            )} */}
            {stepperCount === 18 && (
              <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col justify-between items-center">
                  <Image src={ThankYou} alt="success" width={80} />
                  <h3 className="text-[#09C363]">You’re all set!</h3>
                  <p className="text-[0.9rem] text-[#5B6488]">
                    We’re matching you with the best tutor now.
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  {SUCCESS_PAGE?.map((ele: any, index) => (
                    <div
                      key={ele}
                      className={`lg:px-3 flex items-center gap-4  text-left px-6 py-3 rounded-4xl font-medium lg:text-[0.85rem] w-full bg-[#EEF6FF]  
                    `}
                      // onClick={() => handleSelect(ele, 'pricing')}
                    >
                      <span className="bg-blue-700 min-w-[30px] min-h-[30px] text-center flex justify-center items-center  rounded-4xl text-[0.8rem] text-white">
                        {index + 1}{' '}
                      </span>{' '}
                      <p>{ele}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
