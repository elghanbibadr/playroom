import React from 'react'
import ressorces from "../../assets/resourcesImg.svg"
import Card from '../ui/Card'
const Resources = () => {
  return (
    <Card className=" mt-20 p-0 overflow-hidden   md:grid md:grid-cols-2 md:gap-x-20 ">
           <div className="text-center md:text-left  p-4 pt-10 md:self-center md:pl-10 ">
        <h2>Resources</h2>
        <p className="my-5 mx-auto ">
        Never start from Zero. A growing library of open-source game templates and cross-platform resources with Playroom to help you quick start your next hit game.        </p>
        <button className='text-black my-6 gradientBtn  rounded-full p-6 px-10 text-[1.1rem] md:text-[1.4rem] font-medium'>View Templates</button>
      </div>
   <img className=' mt-10 md:mt-0 w-full h-full overflow-hidden' src={ressorces} alt="" />


    </Card>
  )
}

export default Resources