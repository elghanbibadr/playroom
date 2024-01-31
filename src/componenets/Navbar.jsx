import React, { useEffect, useState } from 'react'
import hamburgerMenu from "../assets/menuHamburger.svg"
import logo from "../assets/playroomlogo.png"
import closeIcon from "../assets/closeIcon.svg"
import Card from './ui/Card'
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isFeaturesClicked, setIsFeaturesClicked] = useState(false)
  const [clickedItem, setClickedItem] = useState(null);

  const handleItemClick = (index) => {
    setClickedItem(index);
  };
  useEffect(() => {
    const handleResize = () => {
      // Set isOpen to true when screen width is larger than 786
      setIsOpen(window.innerWidth > 768);
    };

    // Initial setup
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures that this effect runs once after the initial render

  return (

    <nav className='md:flex md:justify-between md:gap-6 md:items-center ' >
      <img className='hidden md:block' src={logo} alt="playroom logo" />

      <div className='flex justify-between items-center  border-[#3F3F48] border-[1px] md:hidden bg-[#0F0F10] md:text-center  md:w-1/2 mx-auto mt-6  px-8 py-6 rounded-full'>
        <img className='h-[24px] md:hidden' src={logo} alt="playroom logo" />
        {!isOpen && <img onClick={() => setIsOpen(true)} className='md:hidden h-6' src={hamburgerMenu} alt="hamburger menu" />}
        {isOpen && <img onClick={() => setIsOpen(false)} className='md:hidden h-8' src={closeIcon} alt="close icon" />}


      </div>
      {isOpen && <ul className='flex flex-col cursor-pointer gap-6 md:flex md:flex-row md:gap-x-10  text-[1.4rem]  bg-[#0F0F10] mt-6 md:mt-0 p-6 py-5  md:rounded-full md:justify-between mx-auto rounded-[18px] border-[0.67px] border-primaryBorderColor px-12'>
        <li className={`rounded-full text-nowrap md:p-2 lg:py-4 lg:px-8 ${clickedItem === 1 ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={() => handleItemClick(1)}>Development Kit</li>
        <li className={`rounded-full md:p-2 lg:py-4 lg:px-8 ${clickedItem === 3 ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={() => handleItemClick(3)}>Pricing</li>
        <li className={`rounded-full relative md:p-2 lg:py-4 lg:px-8  ${clickedItem === 2 ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={(prv) => {
          setIsFeaturesClicked(true)
          handleItemClick(2)
        }} >Features

          {(clickedItem === 2) && <div className=' featureMenu absolute w-[500px] h-fit  rounded-2xl   right-[-20rem] hidden md:block border-[#3F3F48] border-[0.67px] top-[6.5rem] p-10 md:grid grid-cols-2 gap-10 lg:p-16'>
            <div className='flex gap-4 '>
              <Card className="h-[34px] w-[40px] rounded-[1rem] border-[1.4px] " />
              <div>
                <h6>Serverless</h6>
                <p className='font-normal'>A robust architecture to build with zero backend code</p>
              </div>

            </div>
            <div className='flex gap-4 '>
              <Card className="h-[34px] w-[40px] rounded-[1rem] border-[1.4px] " />
              <div>
                <h6>Web Multiplayer</h6>
                <p className='font-normal'>Build and ship 2D & 3D games across platforms</p>
              </div>

            </div>
            <div className='flex gap-4 '>
              <Card className="h-[34px] w-[40px]  rounded-[1rem] border-[1.4px] " />
              <div>
                <h6>Sync’d Objects</h6>
                <p className='font-normal'>Embeddable UI Components that speeds up development</p>
              </div>

            </div>
            <div className='flex gap-4 '>
              <Card className="h-[34px] w-[40px]  rounded-[1rem] border-[1.4px] " />
              <div>
                <h6>Stream Mode</h6>
                <p className='font-normal'>Embeddable UI Components that speeds up development</p>
              </div>

            </div>
            <div className='flex gap-4 '>
              <Card className="h-[34px] w-[40px]  rounded-[1rem] border-[1.4px] " />
              <div>
                <h6>Playtesting</h6>
                <p className='font-normal'>Workflow to improve multiplayer playtesting</p>
              </div>

            </div>
            <div className='flex gap-4 '>
              <Card className="h-[34px] w-[40px]  rounded-[1rem] border-[1.4px] " />
              <div>
                <h6>Live</h6>
                <p className='font-normal'>Workflow to improve multiplayer playtesting</p>
              </div>

            </div>




          </div>}
        </li>
        <li className={`rounded-full md:p-2 lg:py-4 lg:px-8 ${clickedItem === 5 ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={() => handleItemClick(5)}>Partners</li>
        <li className={`rounded-full md:p-2 lg:py-4 lg:px-8 ${clickedItem === 6 ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={() => handleItemClick(6)}>Ressources</li>
      </ul>}



    </nav>
  )
}

export default Navbar