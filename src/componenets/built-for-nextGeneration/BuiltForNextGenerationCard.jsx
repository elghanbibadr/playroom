import React from 'react';
import Card from '../ui/Card';

const BuiltForNextGenerationCard = ({ img1Src,img2Src, title, desc }) => {
  return (
    <Card className="h-full">
      <div className='flex  mb-4 gap-4'>
        <img className='h-[30px]' src={img1Src} alt="" />
        {img2Src &&  <img className='h-[30px]' src={img2Src} alt="" />}
        </div>
      <h6 className="text-white font-medium text-[1.4rem]">{title}</h6>
      <span className="text-[1.2rem] font-normal text-[#797B86]">{desc}</span>
    </Card>
  );
}

export default BuiltForNextGenerationCard;
