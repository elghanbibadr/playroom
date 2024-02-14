import React from 'react'

export const Container = ({children,className}) => {
  return (
    <div className={ ` ${className} mx-auto px-4 lg:px-8    max-w-[1400px] `}>{children}</div>
  )
}
