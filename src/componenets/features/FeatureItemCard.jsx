import React from 'react'
import Card from '../ui/Card'
import moderationIcon from "../../assets/moderationIcon.svg"
const FeatureItemCard = () => {
  return (
    <Card className="pt-10 px-12 md:pb-10 h-[150px] md:h-[180px] flex flex-col items-start justify-end md:w-full">
        <img className='h-10 mb-2' src={moderationIcon} alt="" />
        <h6 className='my-2 text-[1.6rem] font-bold'>Moderation</h6>
        <span className='hidden md:block text-[1.4rem] text-smallTextColor'>
        Subheading about the feature here
        </span>
    </Card>
  )
}

export default FeatureItemCard