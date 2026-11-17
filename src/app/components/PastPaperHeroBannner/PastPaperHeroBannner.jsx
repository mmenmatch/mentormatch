export const PastPaperHeroBannner = () => {
  const IBDP_SPLITS = ['AA SL', 'AA HL', 'AI SL', 'AI HL']
  return (
    <div className="w-full py-24 bg-[linear-gradient(130deg,_#2A15FF_40%,_#04C1FC_100%)] pyp-main-page">
      <div className="w-full lg:max-w-[80rem] xl:max-w-[90rem] mx-auto lg:px-16 2xl:px-4  px-4  text-white ">
        <div className="flex flex-col items-start justify-center lg:w-[50%] gap-4  ">
          <p className="text-[0.8rem] text-center tracking-[2px] font-bold bg-[#00BF63] px-4 py-2 rounded-4xl">
            Past Paper Questions
          </p>
          <h1 className="text-[2.8rem] text-white leading-[130%] my-0">
            IB Maths AA SL{' '}
            <span className="relative inline-block px-2 text-black z-0">
              <span className="absolute text-[3rem] inset-0 bg-[#FFF116] rounded-xl -rotate-2 -z-10"></span>
              Past Paper
            </span>{' '}
            Questions
          </h1>
          <p className="font-semibold text-[1.5rem] leading-[130%]">
            474 exam questions with answers and worked mark schema{' '}
          </p>
          <p className="text-[1rem] leading-[150%] font-medium">
            Organised by syllabus topic and by paper pick a topic, Choose paper 1 or paper 2, and
            filter by difficulty{' '}
          </p>
          <div className="flex rounded-4xl">
            {IBDP_SPLITS?.map((topics) => (
              <span className="flex mr-4 text-center bg-white py-2 px-4 rounded-4xl text-black text-[1.1rem] font-bold shadow-[4px_4px_0px_black]">
                {topics}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
