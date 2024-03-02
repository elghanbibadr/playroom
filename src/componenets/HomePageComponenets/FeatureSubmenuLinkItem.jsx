

import { useState } from 'react';
import Card from '../ui/Card';

const FeatureSubmenuLinkItem = ({title, description,icon,onHoverIcon}) => {

  console.log('icon',icon)
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className='flex  gap-4 p-2 hover:bg-[#1D1D20] hover:rounded-md'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <Card className="h-[32px] w-[39px] rounded-[1rem] border-[1.4px]" > */}
      <div >
   { !isHovered && <img className='h-[32px] w-[39px]' src={icon} alt="" />}
   {isHovered &&  <img className='h-[32px] w-[39px]' src={onHoverIcon} alt="" />}
      </div>
{/* </Card> */}

      <div>
        <h6 className={`mb-2 ${isHovered ? 'text-[#595959]' : ''}`}>{title}</h6>
        <span className='text-[1.1rem] font-medium text-[#595959] inline-block w-[90%]'>{description}</span>
      </div>
    </div>
  );
};

export default FeatureSubmenuLinkItem;


