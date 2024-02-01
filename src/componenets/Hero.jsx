import { motion } from "framer-motion"
import Button from "./ui/Button"
const Hero = () => {
  return (
    <div className='md:text-center md:mt-40  pb-20 mb-[160px]'>
    <div>
        <div className='flex text-nowrap items-center border-[1px] p-2 md:py-1 md:px-12 rounded-full w-full mt-6 md:w-fit md:mx-auto justify-between  px-8 border-[#2D2D2D]'>
        <p className='text-[1rem] font-normal md:mr-4 md:text-[1.2rem]'>Unity release with v <span className="hidden md:inline-block">reset states</span> 0.1.0</p>
        <span className='text-white  ml-4 md:mt-1 text-[1.1rem] hover:text-[#efefefc8] transition-colors duration-150  cursor-pointer font-semibold'>Read more</span>
        </div>
    </div>
    <div className='mt-40 md:mt-12 p-5'>
      <h1>Build multiplayer <br className='hidden md:block' /> games in minutes</h1>
      <p className='mt-4 md:my-8'>
      Playroom provides scalable Multiplayer Backend & Cross-platform <br className='hidden md:block' /> integrations for web-based games with Zero Server code. 
      </p>
    </div>
   <Button>Get started for free</Button>
</div>

)
}

export default Hero