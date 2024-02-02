
import { data } from "./data";
import BuiltForNextGenerationCard from "./BuiltForNextGenerationCard";

import demo from "../../assets/mobileDemoCarton.svg"
import demodesktop from "../../assets/demoCartonDesktop.svg"
import video1 from "../../assets/video1.mp4"
import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";


export const BuiltForNextGeneration = () => {
  const [selectedTabId,setSelectedTabId]=useState(1)
  return (
    <div className=" lg:px-20">
      <div className="text-center mt-20">
        <h2>Built for the next <br className='hidden md:block' /> generation of multiplayer </h2>
        <p className="my-6 w-[80%] md:w-auto mx-auto md:mb-28">
          Multiplayer configurations and tools to create games previously <br className='hidden md:block' /> only feasible by large-scale teams now possible by EVERYONE.
        </p>
      </div>

      <div className="grid mt-10  grid-cols-2  mx-auto place-content-center justify-center items-center content-center gap-3 md:grid-cols-5">
        {data.map((item) => {
          return <BuiltForNextGenerationCard onClick={() => setSelectedTabId(item.id)}  className={item.id === selectedTabId ? "selected" : ""} id={item.id} img1Src={item.img1Src} img2Src={item.img2Src} title={item.title} desc={item.desc} />
        })}
      </div>

     
  {/* <img className="my-6 w-full  md:hidden" src={demo} alt="demo carton image for mobile" />
  <img className="my-6 hidden md:block" src={demodesktop} alt="demo carton image for desktop" /> */}
     <AnimatePresence mode="wait">
          <motion.div
            key={selectedTabId ? selectedTabId : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* {selectedTabId ? selectedTabId : "😋"} */}
           {selectedTabId  && <video className="mt-10 mb-[20px] rounded-2xl"  autoPlay muted loop>
           <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
           </video> }
           {/* {selectedTabId === 2 && <img className="my-6 " src={demodesktop} alt="demo carton image for desktop" /> } */}
       {/* <h1>{selectedTabId}</h1> */}
          </motion.div>
        </AnimatePresence>
 
    </div>
  );
}

