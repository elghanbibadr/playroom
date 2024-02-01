import React from 'react'
import ressorces from "../../assets/resourcesImg.svg"
import Card from '../ui/Card'
import Button from '../ui/Button'
const Resources = () => {
  return (
    <Card className=" mt-20  overflow-hidden   md:grid md:grid-cols-2 md:gap-x-20 p-[0px]">
           <div className="text-center md:text-left  p-4 pt-10 md:self-center md:pl-10 ">
        <h2>Resources</h2>
        <p className="my-5 mx-auto px-8 md:px-1">
        Never start from Zero. A growing library of open-source game templates and cross-platform resources with Playroom to help you quick start your next hit game.        </p>
      <Button >View Templates</Button>
      </div>
   <img className=' mt-10 md:mt-0 w-full h-full overflow-hidden' src={ressorces} alt="" />


    </Card>
  )
}

export default Resources