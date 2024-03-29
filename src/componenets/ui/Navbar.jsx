import React, { useEffect, useState, useRef } from 'react';
import hamburgerMenu from "../../assets/menuHamburger.svg";
import logoIcon from "../../assets/logoIcon.svg";
import closeIcon from "../../assets/closeIcon.svg";
import { featureSubmenu } from '../../data/data';
import FeatureSubmenuLinkItem from '../HomePageComponenets/FeatureSubmenuLinkItem';
import NavItem from './NavLink';

import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);
  const submenuRef = useRef(null);

  const handleItemClick = (index) => {
    setClickedItem(index);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setClickedItem(null);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className='md:flex pt-10 md:pt-16 md:justify-between md:gap-6 md:items-center'>
      {/* <Link to="/"><img className='hidden md:block md:w-[138px] md:h-[38px]' src={logoIcon} alt="playroom logo" /></Link> */}
      <div className='flex justify-between items-center border-[#3F3F48] border-[1px] md:hidden bg-[#0F0F10] md:text-center md:w-1/2 mx-auto mt-6 px-10 py-6 rounded-full'>
        <Link to="/"><img className='md:hidden' src={logoIcon} alt="playroom logo" /></Link>
        {!isOpen && <img onClick={() => setIsOpen(true)} className='md:hidden h-[13px] w-[20px]' src={hamburgerMenu} alt="hamburger menu" />}
        {isOpen && <img onClick={() => setIsOpen(false)} className='md:hidden h-[30px] w-[20px]' src={closeIcon} alt="close icon" />}
      </div>
      {isOpen && (
        <ul
          ref={submenuRef}
          className='flex justify-between py-6 md:py-4 flex-col md:items-center md:w-[90%]  lg:w-auto  lg:mx-auto cursor-pointer gap-6 md:flex md:flex-row md:gap-0 text-[1.4rem] bg-[#0F0F10] mt-6 md:mt-0 p-6 md:rounded-full md:justify-between mx-auto rounded-[18px] border-[0.67px] border-primaryBorderColor px-12'
        >
                <li>
                  <Link to="/"><img className='hidden md:block mr-10 ' src={logoIcon} alt="playroom logo" /></Link>
                </li>

           <li
              onMouseEnter={() => handleItemClick(3)}
              className={`rounded-full my-3 md:my-0 relative hover:text-[#efefefc8] border-[1px] border-lightBlack transition-colors duration-150 md:p-2 md:py-4 md:px-6 lg:py-5 lg:px-11 ${clickedItem === 3 ? 'md:bg-white text-black' : ''} hover:text-white`}
            >
              <span className='flex  items-center justify-between w-full inline-flex '>
                <span className=''>Features</span>
                <svg className='relative left-5' width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.5 0.903076L4.25 4.65308L8 0.903076" stroke="black"/>
                </svg>
              </span>

              {clickedItem === 3 && (
                <div
                  className='featureMenu z-20 absolute w-[570px] h-[200px] rounded-3xl right-[-30rm] lg:right-[-20rem] hidden md:block border-[#3F3F48] border-[0.67px] top-[6.5rem] p-8 md:grid grid-cols-2 items-center justify-center gap-6 lg:p-10'
                >
                  {featureSubmenu.map((feature, index) => (
                    <FeatureSubmenuLinkItem key={index} title={feature.title} description={feature.description} icon={feature.icon} onHoverIcon={feature.onHoverIcon} />
                  ))}
                </div>
              )}
            </li>
          <NavItem itemIndex={1} handleItemClick={handleItemClick} clickedItem={clickedItem}>
          Documentation
          </NavItem>
          <Link to="/pricing">
            <NavItem itemIndex={2} handleItemClick={handleItemClick} clickedItem={clickedItem}>
            Pricing
            </NavItem>
          </Link>
          {/* <Link to="/features"> */}
           
          {/* </Link> */}
          {/* <Link to="/partners">
            <NavItem itemIndex={4} handleItemClick={handleItemClick} clickedItem={clickedItem}>
              Partners
            </NavItem>
          </Link> */}
          <Link to="/resources">
            <NavItem itemIndex={5} handleItemClick={handleItemClick} clickedItem={clickedItem}>
            Resources
            </NavItem>
          </Link>
          <Link to="/resources">
            <NavItem itemIndex={4} handleItemClick={handleItemClick} clickedItem={clickedItem}>
            Sign in
            </NavItem>
          </Link>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
