import Button from "../../ui/Button"
import rectangleLight from '../../../assets/RectangleLight.png'

const Hero = () => {
  return (
    <div className='md:text-center  mb-20 md:mt-[17vh]  '>
    <div>
        <div className='flex text-nowrap items-center border-[1px] p-2 md:py-1 md:px-12 lg:px-16 rounded-full w-full mt-6 md:w-fit md:mx-auto justify-between  px-8 border-[#2D2D2D]'>
        <p className='text-[1rem] font-normal md:mr-4 md:text-[1.2rem]'>Unity release with v <span className="hidden md:inline-block">reset states</span> 0.1.0</p>
        <span className='text-white  ml-4 md:mt-1 text-[1.1rem] hover:text-[#efefefc8] transition-colors duration-150  cursor-pointer font-semibold'>Read more</span>
        </div>
    </div>
    <div className='mt-32  mx-6 md:mt-4 '>
      <h1>Build multiplayer <br className='hidden md:block' /> games in minutes</h1>
      <p className='mt-6 md:my-[3vh]'>
      Playroom provides scalable Multiplayer Backend & Cross-platform <br className='hidden md:block' /> integrations for web-based games with Zero Server code. 
      </p>
    </div>
   <Button className=" mx-6">Get started for free</Button>
   <img className='w-full absolute left-0 right-0 bottom-0 h-[180px]' src={rectangleLight} alt="" />
</div>

)
}

export default Hero