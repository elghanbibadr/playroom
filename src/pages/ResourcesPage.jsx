import Navbar from "../componenets/Navbar"
import { Container } from "../componenets/ui/Container"
import ResscourcesCard from "../componenets/ressroucesPageComponents/ResscourcesCard"
import Button from "../componenets/ui/Button"
import rectangleLight from '../assets/RectangleLight.png'

import ressourceImg1 from "../assets/ressourcesimg1.png"
import ressourceImg2 from "../assets/ressourcesimg2.png"
import ressourceImg3 from "../assets/ressourcesimg3.png"
import ressourceImg4 from "../assets/ressourcesimg4.png"
import ressourceImg5 from "../assets/ressourcesimg5.png"
import ressourceImg6 from "../assets/ressourcesimg6.png"
import ressourceImg7 from "../assets/ressourcesimg7.png"
import ressourceImg9 from "../assets/ressrourceImg9.png"
import HireDeveloperCard from "../componenets/ressroucesPageComponents/HireDeveloperCard"
import { Footer } from "../componenets/footer/Footer"
const ressourcesListImages=[
ressourceImg9,
ressourceImg1,
ressourceImg2,
ressourceImg3,
ressourceImg4,
ressourceImg5,
ressourceImg6,
ressourceImg7,
ressourceImg3,
]


const ResourcesPage = () => {
  return (

    <>
       
       {/* <div  className='p-4 heroWrraper min-h-[100vh] md:h-[100vh] z-10 relative'>
          <Container>
              <Navbar />
              <Hero/>
          </Container>
         
        <img className='w-full absolute left-0 right-0 bottom-0 h-[180px]' src={rectangleLight} alt="" />
        </div> */}
    <div className="heroWrraper min-h-[100vh] md:h-[100vh] z-10 relative p-4 ">
        <Container>
          <Navbar/>
          <div className=" text-left md:text-center mt-20 md:mt-40">
            <h2>Resources</h2>
            <p className="my-6  md:w-auto mx-auto ">
              Multiplayer configurations and tools to create games previously <br className='hidden md:block' /> only feasible by large-scale teams now possible by EVERYONE.
            </p>
            <Button>Ressources</Button>
        </div>
        </Container>
        <img className='w-full absolute left-0 right-0 bottom-0 h-[180px]' src={rectangleLight} alt="" />

        </div>
    <Container>
        <div className="sm:grid mt-20 md:mt-40 sm:grid-cols-2 md:grid-cols-3 sm:gap-10">
        {ressourcesListImages.map((src,index) => {
          return <ResscourcesCard key={index} imgSrc={src} />
        })}  
        </div>
      <HireDeveloperCard />
      </Container>
      <Footer/>
    
    </>
  
  
  )
}

export default ResourcesPage