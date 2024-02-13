import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

import { Container } from './Container'

import { useLocation } from 'react-router-dom';
import Button from './Button'
const AppLayout = () => {
    const location = useLocation();


  return (
    <>
    
          <Container>
            { location.pathname !=="/" && <Navbar /> }
           
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
         
       
    <Outlet/>
    </>
  )
}

export default AppLayout