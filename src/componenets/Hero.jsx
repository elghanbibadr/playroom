
const Hero = () => {
  return (
    <div className='md:text-center md:mt-40  pb-20'>
    <div>
        <div className='flex items-center border-[1px] p-2 md:px-12 rounded-full w-full mt-6 md:w-fit md:mx-auto justify-between  px-8 border-[#2D2D2D]'>
        <p className='text-[1.3rem] font-normal md:mr-4'>Unity release with reset states 0.1.0</p>
        <span className='text-white mt-1 ml-4 font-semibold'>Read more</span>
        </div>
    </div>
    <div className='mt-40 md:mt-6'>
      <h1>Build multiplayer <br className='hidden md:block' /> games in minutes</h1>
      <p className='mt-4'>
      Playroom provides scalable Multiplayer Backend & Cross-platform <br className='hidden md:block' /> integrations for web-based games with Zero Server code. 
      </p>
    </div>
    {/* BUTTON */}
     <button className='text-black mt-6 gradientBtn mb-[160px] rounded-full p-6 px-10 text-[1.1rem] md:text-[1.4rem] font-medium'>Get started for free</button>
    {/* button */}
</div>

)
}

export default Hero