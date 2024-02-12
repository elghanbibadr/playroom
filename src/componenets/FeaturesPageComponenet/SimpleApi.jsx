import simpleApisectionImg from "../../assets/simpleApiSectionImg.png"

const SimpleApi = () => {
  return (
    <div className="text-center mt-40 md:mt-56">
    <h2>Simple API</h2>
    <p className="my-6 md:mb-10">
      Simple API to set or get the state of game room. The state is <br className='hidden md:block' /> automatically synced between all players and screens.        </p>
    <img src={simpleApisectionImg} alt="EDITOR image with sneakers illustration" />

  </div>

  )
}

export default SimpleApi