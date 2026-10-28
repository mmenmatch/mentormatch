'use client'
import { useJoinUsStepper } from '@/store/joinUs'
import { useState } from 'react'
const JoinUsProgressBar = () => {
  const [stepperPercentage, setStepperPercentage] = useState(5.25)

  const stepperCount = useJoinUsStepper((state) => state?.stepperCount)

  return (
    <div className="w-full border border-white bg-white rounded-4xl max-w-240 mx-auto h-2 overflow-hidden">
      <div
        style={{ width: `${stepperPercentage * stepperCount + 1}%` }}
        className={`h-full bg-[linear-gradient(90deg,#023BF3_0%,#006CFF_45%,#38B1CD_75%,#00BF63_100%)] rounded-2xl`}
      ></div>
    </div>
  )
}

export default JoinUsProgressBar
