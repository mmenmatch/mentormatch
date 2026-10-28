import Image from 'next/image'
import Star from '../../../../public/assets/Images/Vector.png'
export const JoinUsReviewSection = () => {
  return (
    <div className="px-8 py-8 lg:py-12 bg-[#EEF6FF]">
      <div className="w-full lg:w-[80rem] mx-auto flex flex-col gap-8 lg:flex-row items-center justify-center">
        <div className="w-full lg:w-[20%] flex flex-col items-center gap-2 lg:gap-4">
          <p className="lg:text-[3rem] text-[12vw] font-bold text-[#2046C2] leading-[100%]">76%</p>
          <p className="text-[#2C2E37] text-[5vw]  lg:text-[1rem] font-medium text-center">
            of students reportedly <br></br> improved exam scores
          </p>
        </div>
        <div className="w-full lg:w-[20%] flex flex-col items-center  gap-2 lg:gap-4">
          <span className="flex justify-center items-center gap-2">
            <p className="lg:text-[3rem] text-[12vw]  font-bold text-[#2046C2] leading-[100%]">
              4.9
            </p>
            <Image src={Star} alt="star" className="w-[30px] lg:w-[40px]" />
          </span>
          <p className="text-[#2C2E37] text-[5vw]  lg:text-[1rem] font-medium text-center">
            Average Rating<br></br> on Google
          </p>
        </div>{' '}
        <div className="w-fulllg:w-[20%] flex flex-col items-center gap-2 lg:gap-4">
          <p className="lg:text-[3rem] text-[12vw]  font-bold text-[#2046C2] leading-[100%]">84%</p>
          <p className="text-[#2C2E37] text-[5vw]  lg:text-[1rem] font-medium text-center">
            students see their tutor <br></br> as their best friend
          </p>
        </div>
      </div>
    </div>
  )
}
