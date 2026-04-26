import Step1 from '../../../../public/assets/Images/step-1.webp'
import Step2 from '../../../../public/assets/Images/step-2.webp'
import Step3 from '../../../../public/assets/Images/step-3.webp'
import Image from 'next/image'

export default function GettingStarted() {
  const gettingStarted = [
    {
      id: 1,
      img: Step1,
      heading: 'Attend a Free Trial Class',
      subtitle:
        ' Explore how a 60-minute session with a passionate tutor can make all the difference.',
    },
    {
      id: 2,
      img: Step2,
      heading: 'Select the Perfect Plan',
      subtitle:
        'Choose sessions and goals, and the tutor will tailor a custom study plan for your child’s growth.',
    },
    {
      id: 3,
      img: Step3,
      heading: 'Start Learning!',
      subtitle:
        'Embark on a journey of academic excellence with regular updates and interactive sessions.',
    },
  ]
  return (
    <div className="mx-auto max-w-360 w-full flex items-center py-8 px-4">
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <h2 className="text-center xl:text-[2.5rem] text-[1.85rem] font-extrabold mb-8">
          Our 3-Step Formula for A+ Success!
        </h2>
        <div className="w-full flex xl:flex-row flex-col gap-8 ">
          {gettingStarted?.map((ele: any) => (
            <div className="w-full flex flex-col justify-around items-center">
              <div className="min-w-[33%] max-w-100  flex flex-col justify-center items-center text-center">
                <div className="w-full max-w-70 flex justify-center items-center rounded-2xl overflow-hidden">
                  <Image src={ele.img} alt="Mentor Match" loading="lazy" />
                </div>
                <h3>{ele.heading}</h3>
                <p className="max-w-100 text-[1.25rem] leading-[120%]">
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
