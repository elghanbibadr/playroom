import React, { useEffect, useState } from 'react'
import hamburgerMenu from "../assets/menuHamburger.svg"
import logoIcon from "../assets/logoIcon.svg"
import closeIcon from "../assets/closeIcon.svg"
import { motion } from "framer-motion";
import { featureSubmenu } from './data/ItemsData';
import Card from './ui/Card'

const Navbar = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

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
      <img className='hidden md:block' src={logoIcon} alt="playroom logo" />

      <div className='flex justify-between items-center  border-[#3F3F48] border-[1px] md:hidden bg-[#0F0F10] md:text-center  md:w-1/2 mx-auto mt-6  px-10 py-6 rounded-full'>
        <img className=' md:hidden' src={logoIcon} alt="playroom logo" />

        {!isOpen && <img onClick={() => setIsOpen(true)} className='md:hidden h-[13px] w-[20px]' src={hamburgerMenu} alt="hamburger menu" />}
        {isOpen && <img onClick={() => setIsOpen(false)} className='md:hidden h-[30px] w-[20px]' src={closeIcon} alt="close icon" />}


      </div>
      {isOpen && <motion.ul     variants={container}
           initial="hidden"
           animate="visible" className='flex py-6 md:py-4 flex-col md:w-[78%] lg:w-auto cursor-pointer gap-6 md:flex md:flex-row md:gap-0  text-[1.4rem]  bg-[#0F0F10] mt-6 md:mt-0 p-6   md:rounded-full md:justify-between mx-auto rounded-[18px] border-[0.67px] border-primaryBorderColor px-12'>
        <motion.li variants={item} className={`rounded-full my-3 md:my-0 text-nowrap hover:text-[#efefefc8] transition-colors duration-150 md:p-2 md:py-4 md:px-6 lg:py-5 lg:px-11 ${clickedItem === 1 ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={() => handleItemClick(1)}>Development Kit</motion.li>
        <motion.li variants={item} className={`rounded-full my-3 md:my-0 md:p-2  hover:text-[#efefefc8] transition-colors duration-150 md:py-4 md:px-6 lg:py-5 lg:px-11 ${clickedItem === 3 ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={() => handleItemClick(3)}>Pricing</motion.li>
        <motion.li onMouseEnter={() => handleItemClick(2)}           onMouseLeave={() => setClickedItem(undefined)}
 variants={item} className={`rounded-full my-3 md:my-0 relative  hover:text-[#efefefc8] transition-colors duration-150 md:p-2 md:py-4 md:px-6 lg:py-5 lg:px-11  ${clickedItem === 2 ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={(prv) => {
          setIsFeaturesClicked(true)
          // handleItemClick(2)
          // onMouseEnter={() => handleItemClick(2)}
        }} >Features

          {(clickedItem === 2)
           && 
           <motion.div
           variants={container}
           initial="hidden"
           animate="visible"
           className='featureMenu container absolute w-[500px] h-fit rounded-2xl right-[-20rem] hidden md:block border-[#3F3F48] border-[0.67px] top-[6.5rem] p-10 md:grid grid-cols-2 gap-14 lg:p-16'
         >
           {featureSubmenu.map((feature, index) => (
             <motion.div key={index} variants={item} className='flex gap-4'>
               <Card className="h-[32px] w-[39px] rounded-[1rem] border-[1.4px]" />
               <div>
                 <h6 className='mb-2'>{feature.title}</h6>
                 <span className='text-[1.1rem] font-medium text-[#595959]'>{feature.description}</span>
               </div>
             </motion.div>
           ))}
         </motion.div>
          }
        </motion.li>
        <motion.li variants={item} className={`rounded-full my-3 md:my-0 md:p-2  hover:text-[#efefefc8] transition-colors duration-150 md:py-4 md:px-6 lg:py-5 lg:px-11 ${clickedItem === 5 ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={() => handleItemClick(5)}>Partners</motion.li>
        <motion.li variants={item} className={`rounded-full my-3 md:my-0 md:p-2  hover:text-[#efefefc8] transition-colors duration-150 md:py-4 md:px-6 lg:py-5 lg:px-11  ${clickedItem === 6 ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={() => handleItemClick(6)}>Ressources</motion.li>
      </motion.ul>}



    </nav>
  )
}

export default Navbar