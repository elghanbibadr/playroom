import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import { Footer } from '../footer/Footer'
import { Container } from './Container'
import Hero from '../Hero'
import rectangleLight from '../../assets/RectangleLight.png'
import { useLocation } from 'react-router-dom';
import Button from './Button'
const AppLayout = () => {
    const location = useLocation();

    console.log("path", location.pathname); 
  return (
    <>
     <div className='p-4' >
          <Container>
              <Navbar />
           {location.pathname === "/" && <div className='p-4 heroWrraper min-h-[100vh] md:h-[100vh] z-10 relative'><Hero/></div>}
           {location.pathname === "/pricing" &&  
          <div className='mt-32 bg-black text-left   p-5'>
            <h2>Simple Pricing </h2>
            <p className='mt-4 md:my-[3vh]'>
              Transparent pricing based on MAU (Monthly active users). Pay Zero for non-commercial and low-usage games.
            </p>
            <Button>Price Comparison</Button>
          </div>

      }  
           {location.pathname === "/resources" &&  
          <div className=" text-left bg-black  mt-20 md:mt-40">
          <h2>Resources</h2>
          <p className="my-6   ">
          Quickstart and build your next web-based <br className='hidden md:block' /> multiplayer game with Playroom integrated.
          </p>
          {/* <Button>Ressources</Button> */}
      </div>
      }  
          </Container>
         
        {location.pathname === "/" &&  <img className='w-full absolute left-0 right-0 bottom-0 h-[180px]' src={rectangleLight} alt="" />}
        </div>
    <Outlet/>
    </>
  )
}

export default AppLayout