import React, { useState,useEffect } from 'react'
import rectangleLight from '../assets/RectangleLight.png'
import Navbar from '../componenets/Navbar'
import Hero from '../componenets/Hero'
import {BuiltForNextGeneration} from '../componenets/built-for-nextGeneration/BuiltForNextGeneration'
const Home = () => {


 return (
    <div>
        <div className='p-10 heroWrraper z-10 relative'>
          <Navbar/>
          <Hero/>
        <img className='w-full absolute left-0 right-0 bottom-0 h-[180px]' src={rectangleLight} alt="" />
        </div>
        <BuiltForNextGeneration/>
    </div>
 )
}

export default Home