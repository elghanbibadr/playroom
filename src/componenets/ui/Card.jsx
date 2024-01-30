import React from 'react'

const Card = ({children,className}) => {
  return (
    <div className={`bg-lightBlack   w-fit p-4 rounded-[18px] border-[0.67px] border-primaryBorderColor ${className}`}>{children}</div>
  )
}

export default Card