import Navbar from "../componenets/Navbar"
import { Container } from "../componenets/ui/Container"

const ResourcesPage = () => {
  return (
    <div className="heroWrraper">
      <Container>
        <Navbar/>
        <div className=" text-left border-b-[1px] border-[#272729] md:text-center mt-20 md:mt-40">
          <h2>Resources</h2>
          <p className="my-6  md:w-auto mx-auto md:mb-28">
            Multiplayer configurations and tools to create games previously <br className='hidden md:block' /> only feasible by large-scale teams now possible by EVERYONE.
          </p>
        </div>
      </Container>
    </div>
  )
}

export default ResourcesPage