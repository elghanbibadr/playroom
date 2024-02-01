
import { data } from "./data";
import BuiltForNextGenerationCard from "./BuiltForNextGenerationCard";

import demo from "../../assets/mobileDemoCarton.svg"
import demodesktop from "../../assets/demoCartonDesktop.svg"

export const BuiltForNextGeneration = () => {
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
          return <BuiltForNextGenerationCard id={item.id} img1Src={item.img1Src} img2Src={item.img2Src} title={item.title} desc={item.desc} />
        })}
      </div>

     
  <img className="my-6 w-full  md:hidden" src={demo} alt="demo carton image for mobile" />
  <img className="my-6 hidden md:block" src={demodesktop} alt="demo carton image for desktop" />
    </div>
  );
}

