import React from 'react'
import Card from '../ui/Card'
import reactIcon from "../../assets/React-icon.svg"
import editorMobileImg from "../../assets/image 36 (3).png"
import editorMobileImg2 from "../../assets/editorMobile.png"
import editorDesktopImg from "../../assets/editorbgdesktop2.png"
import regionImg from "../../assets/region.svg"
import unityIcon from "../../assets/unityIcon.svg"
import threejsIcon from "../../assets/threejsIcon.svg"
import godotIcon from "../../assets/godotIcon.svg"
import cocosIcon from "../../assets/cocosIcon.svg"
import webxrIcon from "../../assets/webxrIcon.svg"
import phaserIcon from "../../assets/phaserIcon.svg"
import { Container } from '../ui/Container'
import pixijsIcon from "../../assets/PixijsIcon.svg"
import playcanvasIcon from "../../assets/playcanvasIcon.svg"

const GetStarted = () => {
  return (
    <Container>

    <div className='p-4'>
             <div className="text-center mt-20">
                     <h2>Get started in minutes <br className='hidden md:block' />  </h2>
                     <p className="my-6 md:mb-40">
                     Simple API to set or get the state of game room. The state is automatically synced between all players and screens.        </p>
                   </div>
                    <Card className="w-full text-center md:w-[70%] md:mx-auto md:py-6">
                     <p className='text-white'>
                     npm install --save playroomkit react react-dom
                     </p>
                    </Card>
                    <div className='mt-10 grid grid-cols-3 gap-3 p-4 md:flex md:justify-between  lg:w-[70%] lg:mx-auto '>
                   {/* card */}
                   <div className="h-[90px] border-[#3E3E47] border-[0.87px] md:h-[34px] w-full  md:px-1 md:py-1 flex items-center md:gap-2 rounded-xl justify-center">
                <img className='md:h-[14px] md:w-[14px]' src={reactIcon} alt="react icon" />
                <h6 className='text-white font-bold hidden md:block'>React </h6>
                     </div>
                     {/* card */}
                   {/* card */}
                   <div className="h-[90px] border-[#3E3E47] border-[0.87px] md:h-[34px] w-full  md:px-1 md:py-1 flex items-center md:gap-2 rounded-xl justify-center">
                <img className='md:h-[14px] md:w-[14px]' src={unityIcon} alt="react icon" />
                <h6 className='text-white font-bold hidden md:block'>Unity</h6>
                     </div>
                     {/* card */}
                   {/* card */}
                   <div className="h-[90px] border-[#3E3E47] border-[0.87px] md:h-[34px] w-full  md:px-1 md:py-1 flex items-center md:gap-2 rounded-xl justify-center">
                <img className='md:h-[14px] md:w-[14px]' src={threejsIcon} alt="react icon" />
                <h6 className='text-white font-bold hidden md:block'>Threejs</h6>
                     </div>
                     {/* card */}
                   {/* card */}
                   <div className="h-[90px] border-[#3E3E47] border-[0.87px] md:h-[34px] w-full  md:px-1 md:py-1 flex items-center md:gap-2 rounded-xl justify-center">
                <img className='md:h-[14px] md:w-[14px]' src={godotIcon} alt="react icon" />
                <h6 className='text-white font-bold hidden md:block'>Godot</h6>
                     </div>
                     {/* card */}
                   {/* card */}
                   <div className="h-[90px] border-[#3E3E47] border-[0.87px] md:h-[34px] w-full  md:px-1 md:py-1 flex items-center md:gap-2 rounded-xl justify-center">
                <img className='md:h-[14px] md:w-[14px]' src={cocosIcon} alt="react icon" />
                <h6 className='text-white font-bold hidden md:block'>Cocos </h6>
                     </div>
                     {/* card */}
                   {/* card */}
                   <div className="h-[90px] border-[#3E3E47] border-[0.87px] md:h-[34px] w-full  md:px-1 md:py-1 flex items-center md:gap-2 rounded-xl justify-center">
                <img className='md:h-[14px] md:w-[14px]' src={phaserIcon} alt="react icon" />
                <h6 className='text-white font-bold hidden md:block'>Phaser</h6>
                     </div>
                     {/* card */}
                   {/* card */}
                   <div className="h-[90px] border-[#3E3E47] border-[0.87px] md:h-[34px] w-full  md:px-1 md:py-1 flex items-center md:gap-2 rounded-xl justify-center">
                <img className='md:h-[14px] md:w-[14px]' src={pixijsIcon} alt="react icon" />
                <h6 className='text-white font-bold hidden md:block'>PixiJs</h6>
                     </div>
                     {/* card */}
                   {/* card */}
                   <div className="h-[90px] border-[#3E3E47] border-[0.87px] md:h-[34px] w-full  md:px-1 md:py-1 flex items-center md:gap-2 rounded-xl justify-center">
                <img className='md:h-[14px] md:w-[14px]' src={webxrIcon} alt="react icon" />
                <h6 className='text-white font-bold hidden md:block'>WebXR</h6>
                     </div>
                     {/* card */}
                   {/* card */}
                   <div className="h-[90px] border-[#3E3E47] border-[0.87px] md:h-[34px] w-full  md:px-1 md:py-1 flex items-center md:gap-2 rounded-xl justify-center">
                <img className='md:h-[14px] md:w-[14px]' src={playcanvasIcon} alt="react icon" />
                <h6 className='text-white font-bold hidden md:block'>Playcanvas</h6>
                     </div>
                     {/* card */}
                   
                    </div>


       {/* EDITOR */}
       <div>
       <svg className='md:hidden'  viewBox="0 0 374 192" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.402832" y="0.622681" width="183.516" height="190.868" fill="#161718"/>
<circle cx="92.4807" cy="98.646" r="31.8557" fill="#8C72F4"/>
<rect x="63.3477" y="130.502" width="60.9886" height="60.9886" fill="#5BEDB0"/>
<rect x="189.984" y="0.622681" width="183.516" height="190.868" fill="#161718"/>
<circle cx="276.609" cy="98.646" r="31.8557" fill="#8C72F4"/>
<rect x="247.476" y="130.502" width="60.9886" height="60.9886" fill="#5BEDB0"/>
</svg>
<div className='mt-6'>
    <img className='w-full md:hidden' src={editorMobileImg} alt="" /></div>
    <img className='w-full hidden md:block' src={editorDesktopImg} alt="" />

       </div>
     
       
    </div>
    </Container>

  )
}

export default GetStarted