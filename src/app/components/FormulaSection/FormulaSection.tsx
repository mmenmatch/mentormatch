import React from 'react'

export default function FormulaSection() {
  const ourFormula = [
    {
      id: 1,
      video: 'https://dev.mentormatch.com/1%20(3).mp4',
      poster:
        'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/69ea2c8634e74addd970845f_fallback-1.webp',

      heading: 'Personalized AI Learning Plan',
      subtitle:
        ' Identify your child’s learning gaps with AI and tackle them with a personalized study plan.',
    },
    {
      id: 2,
      video: 'https://dev.mentormatch.com/2%20(2).mp4',
      poster:
        'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/69ea2c8634e74addd9708443_fallback-2.webp',

      heading: 'High-Impact 1:1 Tutoring',
      subtitle:
        '2–3 live sessions per week with top tutors for real-time guidance and support.',
    },
    {
      id: 3,
      video: 'https://dev.mentormatch.com/3%20(2).mp4',
      poster:
        'https://cdn.prod.website-files.com/645c85e0705da20f26b63b8e/69ea2c865c83306039e2779e_fallback-3.webp',

      heading: 'Stay Informed, Stay Involved',
      subtitle:
        'Get weekly updates on your child’s progress, next steps, and areas for improvement.',
    },
  ]
  return (
    <div className="mx-auto max-w-360 w-full flex items-center py-8 px-4">
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <h2 className="text-center xl:text-[2.5rem] text-[1.85rem] font-extrabold mb-8">
          Our 3-Step Formula for A+ Success!
        </h2>
        <div className="w-full flex xl:flex-row flex-col gap-8  ">
          {ourFormula?.map((ele: any) => (
            <div className="w-full flex flex-col justify-around items-center">
              <div className="min-w-[33%] max-w-100  flex flex-col justify-center items-center text-center">
                <div className="w-full max-w-100 flex justify-center items-center rounded-2xl overflow-hidden">
                  <video preload="none" loop autoPlay muted poster={ele.poster}>
                    <source src={ele.video} type="video/mp4" />
                  </video>
                </div>
                <h3>{ele.heading}</h3>
                <p className="max-w-90 text-[1.25rem] leading-[120%]">
                  {ele?.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
