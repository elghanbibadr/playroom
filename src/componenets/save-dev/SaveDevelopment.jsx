import React from 'react'
import Card from '../ui/Card'
import noBackendIcon from "../../assets/noBackendIcon.svg"
import noBackendImage from "../../assets/noBackend.svg"
import lowlatencyImg from "../../assets/lowLatency.svg"
import region from "../../assets/region.svg"
import insertCoin from "../../assets/insertCoin.svg"
import lowlatencyicon from "../../assets/lowlatencyIcon.svg"
import earthIcon from "../../assets/earthIcon.svg"
import lowcodeIcon from "../../assets/lowCodeIcon.svg" 
import Button from '../ui/Button'
const SaveDevelopment = () => {
  return (
    <div 
  
     className='  mt-40 lg:grid lg:grid-cols-2 lg:gap-8'>
           <div className="text-center  md:text-left md:self-center ">
        <h2>Save development & maintenance time</h2>
        <p className="my-5 w-[80%] md:w-full mx-auto lg:mx-1 lg:w-[80%]">
        No longer will you have to oversee WebSocket, TCP, and webRTC protocols, along with server monitoring. You focus on your game and Playroom manages all other aspects.
        </p>
       <Button>Read about architecture</Button>
      </div>

<div className='sm:grid sm:grid-cols-2 mt-10 sm:gap-3 '>
    
        <Card className="w-full mb-4 md:px-8   md:w-full px-4 py-10">
        <img className='hidden md:block h-[120px] mb-12' src={noBackendImage} alt="" />
        <img className='' src={noBackendIcon} alt="" />
        <h6 className='font-bold text-[1.4rem] my-2'>No Backend</h6>
        <span className='text-[1.2rem] text-smallTextColor'>Get people together for deeper casual games</span>
        </Card>
      
        <Card className="w-full mb-4 md:px-8 md:col-start-1 md:col-end-2 md:row-start-2  md:w-full px-4 py-10">
        <img className='hidden md:block h-[120px] mb-12' src={region} alt=""/>
        <img src={earthIcon} alt=""/>
        <h6 className='font-bold text-[1.4rem] my-2'>Region:Earth</h6>
        <span className='text-[1.2rem] text-smallTextColor'>Get people together for deeper casual games</span>
        </Card>
        <Card className="w-full mb-4 md:px-8   md:w-full px-4 py-10">
        <img className='hidden md:block h-[120px] mb-12' src={lowlatencyImg} alt="" />
        <img src={lowlatencyicon} alt="" />

        <h6 className='font-bold text-[1.4rem] my-2'>Low Latency</h6>
        <span className='text-[1.2rem] text-smallTextColor'>Get people together for deeper casual games</span>
        </Card>
        <Card className="w-full mb-4 md:px-8   md:w-full px-4 py-10">
        <img className='hidden md:block h-[120px] mb-12' src={insertCoin} alt="" />
        <img src={lowcodeIcon} alt="" />
        <h6 className='font-bold text-[1.4rem] my-2'>Low code SDK</h6>
        <span className='text-[1.2rem] text-smallTextColor'>Get people together for deeper casual games</span>
        </Card>
</div>


    </div>
  )
}

export default SaveDevelopment