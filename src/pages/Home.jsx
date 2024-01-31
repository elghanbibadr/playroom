import React, { useState,useEffect } from 'react'
import rectangleLight from '../assets/RectangleLight.png'
import Navbar from '../componenets/Navbar'
import Hero from '../componenets/Hero'
import {BuiltForNextGeneration} from '../componenets/built-for-nextGeneration/BuiltForNextGeneration'
import GetStarted from '../componenets/get-started-in-minute/GetStarted'
import SaveDevelopment from '../componenets/save-dev/SaveDevelopment'
import Features from '../componenets/features/Features'
import { Container } from '../componenets/ui/Container'
import Resources from '../componenets/ressources/Resources'
const Home = () => {


 return (
    <>
        <div className='p-10 heroWrraper z-10 relative'>
          <Container><Navbar/></Container>
          <Hero/>
        <img className='w-full absolute left-0 right-0 bottom-0 h-[180px]' src={rectangleLight} alt="" />
        </div>
        <Container><BuiltForNextGeneration/></Container>
        <GetStarted />
        <Container>
          <SaveDevelopment />
        <Features/>
        <Resources />
        </Container>
    </>
 )
}

export default Home