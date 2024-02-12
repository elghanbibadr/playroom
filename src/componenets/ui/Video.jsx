import React from 'react'

const Video = ({videoSrc}) => {
  return (
    <video className="mt-10 mb-[20px] rounded-2xl"  autoPlay muted loop>
    <source src={videoSrc} type="video/mp4" />
    </video>
  )
}

export default Video