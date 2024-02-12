import React from 'react'

const SupportedLibrariesCard = ({icon,title}) => {
  return (
    <div  className="h-[90px] border-[#3E3E47] border-[0.87px] md:h-[34px] w-full md:min-w-fit md:w-full md:px-2 md:py-1 flex items-center md:gap-2 rounded-xl justify-center ">
    <img className='md:h-[16px] md:w-[16px] ' src={icon} alt={`${title} icon`} />
    <h6 className='text-white font-bold hidden md:block'>{title}</h6>
  </div>
  )
}

export default SupportedLibrariesCard