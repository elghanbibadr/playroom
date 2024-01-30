import FeatureItemCard from "./FeatureItemCard"
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
      <div className="flex gap-4 mt-10 md:mt-20 md:grid md:grid-cols-3 md:gap-20 ">
          <FeatureItemCard/>
          <FeatureItemCard/>
          <FeatureItemCard/>
          <FeatureItemCard/>
          <FeatureItemCard/>
          <FeatureItemCard/>
  
      </div>
    </div>
  )
}

export default Features