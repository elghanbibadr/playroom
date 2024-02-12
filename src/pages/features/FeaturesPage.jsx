// import purpleCircle from "../../assets/cirlcePurple.svg"

import noBackendIcon from "../../assets/noBackendIcon.svg"
import grayRectangle from "../../assets/grayRectangle.png"
import simpleApisectionImg from "../../assets/simpleApiSectionImg.png"
import Button from "../../componenets/ui/Button"


const FeaturesPage = () => {
  return (
    <div>
     {/* hero */}
     <div className="bg-lightBlack h-[70vh] md:h-[80vh] flex items-center justify-center flex-col mt-20 text-center py-40">
     <svg className="mx-auto" width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24.6572" cy="24" r="24" fill="#8057FE"/>
</svg>

<h2 className="my-6">
Main Title Here
</h2>

<p>Subheading here</p>

     </div>
     {/* hero */}

     {/* features */}
     <div className="sm:grid sm:grid-cols-2 sm:gap-10 py-20 px-4 md:grid-cols-4">
  {Array.from({ length: 4 }).map((_, index) => (
    <div key={index} className="mb-10 sm:mb-auto">
      <img className="mb-6" src={noBackendIcon} alt="" />
      <h5 className="text-white font-semibold my-2 text-[13px]">Feature #{index + 1}</h5>
      <span className="small-text">Subheading about the <br className="hidden md:block" /> feature here</span>
    </div>
  ))}
</div>
     {/* features end */}
  
   {/*  Main about title haha*/}
   <div className=" mt-20 m-6  bg-lightBlack    rounded-[18px] border-[0.67px] border-primaryBorderColor overflow-hidden   sm:grid sm:grid-cols-2 sm:gap-x-20 ">
           <div className="text-center sm:text-left  p-4 pt-12 md:self-center md:pl-10 ">
        <h2>Main title about the feature</h2>
        <p className="my-5 mx-auto px-8 sm:px-1 lg:w-[70%] lg:mx-0">
        No longer will you have to oversee WebSocket, TCP, and webRTC protocols, along with server monitoring. You focus on your game and Playroom manages all other aspects.
         
        </p>
      <Button >Read Docs</Button>
      </div>
   
   <img className='mt-14 sm:mt-0  md:mt-0  h-[300px] md:h-full overflow-hidden' src={grayRectangle} alt="gray rectangle  background" />

    </div>
    {/* main about title end */}

    {/* use case */}
    <div className="mt-20 carousel m-6 md:grid-cols-4 gap-6">
  {[...Array(4)].map((_, index) => (
    <div key={index} className="carousel-item flex flex-col">
      <svg className="w-full" viewBox="0 0 389 298" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.288187" y="0.288187" width="388.119" height="297.424" rx="17.003" fill="#3F3F48" fillOpacity="0.2" stroke="#3F3F48" strokeWidth="0.576373"/>
      </svg>
      <h5 className="text-white font-semibold my-2 text-[13px]">Use case</h5>
      <span className="small-text">Subheading about the <br className="hidden md:block" /> feature here</span>
    </div>
  ))}
</div>

    {/* use case end */}


    {/* Simple api section */}
    <div className="text-center mt-40 md:mt-56">
    <h2>Simple API</h2>
                     <p className="my-6 md:mb-10">
                     Simple API to set or get the state of game room. The state is <br className='hidden md:block' /> automatically synced between all players and screens.        </p>
     <img src={simpleApisectionImg} alt="" />
 
    </div>

    {/* doc */}
    <div className="text-center mt-40 md:mt-60 md:pb-60 ">
    <h2>Documentation</h2>
          <p className="my-6  md:w-auto mx-auto">
          This module is an addon feature with usage price based on events.
          </p>
          <Button>Get Started</Button>
    </div>
    </div>
  )
}

export default FeaturesPage