import React,{useEffect,useState} from  'react'
import hamburgerMenu from "../assets/menuHamburger.svg"
import logo from "../assets/playroomlogo.png"
import closeIcon from "../assets/closeIcon.svg"
const Navbar = () => {
    
    const [isOpen ,setIsOpen]=useState(false)
    const [isFeaturesClicked,setIsFeaturesClicked]=useState(true)

    useEffect(() => {
        const handleResize = () => {
          // Set isOpen to true when screen width is larger than 786
          setIsOpen(window.innerWidth > 786);
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
    
<nav className='md:flex md:justify-between md:items-center md:p-10' > 
<img className='hidden md:block' src={logo} alt="playroom logo" />

  <div className='flex justify-between items-center  border-[#3F3F48] border-[1px] md:hidden bg-[#0F0F10] md:text-center  md:w-1/2 mx-auto mt-6  px-8 py-6 rounded-full'>
      <img className='h-[24px] md:hidden' src={logo} alt="playroom logo" />
         {!isOpen &&   <img onClick={() => setIsOpen(true)} className='md:hidden h-6' src={hamburgerMenu} alt="hamburger menu" />}
        {isOpen && <img onClick={() => setIsOpen(false)} className='md:hidden h-8' src={closeIcon} alt="close icon" />}

      
  </div>
  {isOpen &&   <ul className='flex flex-col cursor-pointer gap-6 md:flex md:flex-row md:w-1/2 text-[1.4rem]  w-[90%] bg-[#0F0F10] mt-6 md:mt-0 p-6 rounded-md md:rounded-full md:justify-between mx-auto '>
            <li>Development Kit</li>
            <li>Pricing</li>
            <li className='relative'><a href="">Features</a>
            {isFeaturesClicked && <div className=' featureMenu absolute w-[400px] h-fit  rounded-2xl   right-[-16rem] hidden md:block border-[#3F3F48] border-[0.67px] top-20 p-14 md:grid grid-cols-2 gap-10'>
                <div>
                    <h6>Serverless</h6>
                    <p>A robust architecture to build with zero backend code</p>
                </div>
                <div>
                    <h6>Serverless</h6>
                    <p>A robust architecture to build with zero backend code</p>
                </div>
                <div>
                    <h6>Serverless</h6>
                    <p>A robust architecture to build with zero backend code</p>
                </div>
                <div>
                    <h6>Serverless</h6>
                    <p>A robust architecture to build with zero backend code</p>
                </div>
                
             </div>}
            </li>
           
            <li>Partners</li>
            <li>Ressources</li>
         </ul>}
</nav>
  )
}

export default Navbar