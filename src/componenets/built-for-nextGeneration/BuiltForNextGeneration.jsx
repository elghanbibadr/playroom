import Card from "../ui/Card";
import appstore from "../../assets/app-store.png";
import { data } from "./data";
import BuiltForNextGenerationCard from "./BuiltForNextGenerationCard";
import nextGenerationRectagle from "../../assets/nextgenRectangle.png"
import nextGenerationRectagleDesktop from "../../assets/nextgenRectangleDesktop.png"
export const BuiltForNextGeneration = () => {
  return (
    <div className="p-4 lg:px-20">
      <div className="text-center mt-20">
        <h2>Built for the next <br className='hidden md:block' /> generation of multiplayer </h2>
        <p className="my-6 md:mb-40">
          Multiplayer configurations and tools to create games previously <br className='hidden md:block' /> only feasible by large-scale teams now possible by EVERYONE.
        </p>
      </div>

      <div className="grid grid-cols-2  mx-auto place-content-center justify-center items-center content-center gap-3 md:grid-cols-5">
        {data.map((item) => {
          return <BuiltForNextGenerationCard img1Src={item.img1Src} img2Src={item.img2Src} title={item.title} desc={item.desc} />
        })}
      </div>

     
  <img className="my-6 md:hidden" src={nextGenerationRectagle} alt="" />
  <img className="my-6 hidden md:block" src={nextGenerationRectagleDesktop} alt="" />
    </div>
  );
}

