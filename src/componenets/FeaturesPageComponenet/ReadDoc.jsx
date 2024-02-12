import Button from '../ui/Button'
const ReadDoc = () => {
  return (
    <div className=" mt-20 m-6  bg-lightBlack    rounded-[18px] border-[0.67px] border-primaryBorderColor overflow-hidden   sm:grid sm:grid-cols-2 sm:gap-x-20 ">
    <div className="text-center sm:text-left  p-4 pt-12 md:self-center md:pl-10 ">
      <h2>Main title about the feature</h2>
      <p className="my-5 mx-auto px-8 sm:px-1 lg:w-[70%] lg:mx-0">
        No longer will you have to oversee WebSocket, TCP, and webRTC protocols, along with server monitoring. You focus on your game and Playroom manages all other aspects.

      </p>
      <Button >Read Docs</Button>
    </div>

    <img className='mt-14 sm:mt-0  md:mt-0  h-[300px] md:h-full overflow-hidden' src={grayRectangle} alt="gray rectangle  background" />

  </div>
  )
}

export default ReadDoc