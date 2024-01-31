import FeatureItemCard from "./FeatureItemCard"
import joystickIcon from "../../assets/joystickIcon.svg"
import lobyIcon from "../../assets/lobyIcon.svg"
import moderationIcon from "../../assets/moderationIcon.svg"
import gamepadIcon from "../../assets/gamepad.svg"
import playtestingIcon from "../../assets/playtestting.svg"
import chatIcon from "../../assets/chat.svg"

const featureCardsData=[
    {
        id:1,
        title:"Joysticks",
        subheading:"Subheading about the feature here",
        imgSrc:joystickIcon
    },
    {
        id:2,
        title:"Lobby",
        subheading:"Subheading about the feature here",
        imgSrc:lobyIcon
    },
    {
        id:3,
        title:"Moderation",
        subheading:"Subheading about the feature here",
        imgSrc:moderationIcon
    },
    {
        id:4,
        title:"Gamepads",
        subheading:"Subheading about the feature here",
        imgSrc:gamepadIcon
    },
    {
        id:5,
        title:"Playtesting",
        subheading:"Subheading about the feature here",
        imgSrc:playtestingIcon
    },
    {
        id:6,
        title:"Chat",
        subheading:"Subheading about the feature here",
        imgSrc:chatIcon
    },
]
const Features = () => {
  return (
    <div className='p-4'>
          <div className="text-center mt-20 md:mt-40 md:self-center ">
        <h2>Ship faster with easy-to-use <br className='hidden md:block' /> integrations & toolkit</h2>
        <p className="my-5 mx-auto lg:w-[50%]">
        Multiplayer modules can be embedded into any game for speed development and play testing. It’s perfect for teams with faster development cycle to launch games.
        </p>
        <button className='text-black mt-6 bg-white  rounded-full p-6 px-10 text-[1.1rem] md:text-[1.4rem] font-medium'>Read Documentation</button>
      </div>
      <div className="flex carousel rounded-box md:p-20 gap-4 mt-10 md:mt-20 md:grid md:grid-cols-3 md:gap-x-28 ">
          {featureCardsData.map(({id,imgSrc,title,subheading}) =>{
          return <FeatureItemCard key={id} imgSrc={imgSrc} title={title} subheading={subheading} />
          })}
         
  
      </div>
    </div>
  )
}

export default Features