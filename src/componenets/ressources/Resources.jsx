import React from 'react'
import ressorces from "../../assets/resourcesImg.svg"
import Card from '../ui/Card'
const Resources = () => {
  return (
    <Card className="m-4 mt-20  md:grid md:grid-cols-2 md:gap-x-20 ">
           <div className="text-center md:text-left   md:self-center ">
        <h2>Resources</h2>
        <p className="my-5 mx-auto ">
        Never start from Zero. A growing library of open-source game templates and cross-platform resources with Playroom to help you quick start your next hit game.        </p>
        <button className='text-black my-6 gradientBtn  rounded-full p-6 px-10 text-[1.1rem] md:text-[1.4rem] font-medium'>View Templates</button>
      </div>
   <img className=' w-full h-full' src={ressorces} alt="" />


    </Card>
  )
}

export default Resources