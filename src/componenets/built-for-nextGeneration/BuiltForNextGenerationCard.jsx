import React from 'react';
import Card from '../ui/Card';

const BuiltForNextGenerationCard = ({id, img1Src,img2Src, title, desc }) => {
  console.log(id)
  return (
    <Card className={`h-full w-full ${id === 4 ? "hidden md:block": ""}`}>
      <div className='flex  mb-4 gap-4'>
        <img className={`h-[24px] ${id === 1 ? "h-[30px]" : ""} ${id === 3  ? " h-[30px] ml-4  scale-150" : "mb-3"}`} src={img1Src} alt="" />
        {img2Src &&  <img className='h-[24px] ' src={img2Src} alt="" />}
        </div>
      <h6 className="text-white font-medium text-[1.4rem]">{title}</h6>
      <span className="text-[1.2rem] font-normal text-[#797B86]">{desc}</span>
    </Card>
  );
}

export default BuiltForNextGenerationCard;
