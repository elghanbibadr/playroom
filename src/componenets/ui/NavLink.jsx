import React from 'react'

const NavLink = ({handleItemClick,clickedItem,children,itemIndex}) => {
  return (
    <li  className={`rounded-full my-3 md:my-0 md:p-2  hover:text-[#efefefc8] transition-colors duration-150 md:py-4 md:px-6 lg:py-5 lg:px-11  ${clickedItem === itemIndex ? 'md:border-[#8C72F4] md:border-[1px]' : ''}`} onClick={() => handleItemClick(itemIndex)}>{children}</li>

  )
}

export default NavLink