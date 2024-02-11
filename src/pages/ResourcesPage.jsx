import Navbar from "../componenets/Navbar"
import { Container } from "../componenets/ui/Container"
import ResscourcesCard from "../componenets/ressroucesPageComponents/ResscourcesCard"
import ressourceImg1 from "../assets/ressourcesimg1.png"
import ressourceImg2 from "../assets/ressourcesimg2.png"
import ressourceImg3 from "../assets/ressourcesimg3.png"
import ressourceImg4 from "../assets/ressourcesimg4.png"
import ressourceImg5 from "../assets/ressourcesimg5.png"
import ressourceImg6 from "../assets/ressourcesimg6.png"
import ressourceImg7 from "../assets/ressourcesimg7.png"
import ressourceImg8 from "../assets/ressourcesimg8.png"
import ressourceImg9 from "../assets/ressrourceImg9.png"


const ressourcesListImages=[
ressourceImg9,
ressourceImg1,
ressourceImg2,
ressourceImg3,
ressourceImg4,
ressourceImg5,
ressourceImg6,
ressourceImg7,
ressourceImg8,
]
const ResourcesPage = () => {
  return (
    <div className="heroWrraper p-4">
      <Container>
        <Navbar/>
        <div className=" text-left md:text-center mt-20 md:mt-40">
          <h2>Resources</h2>
          <p className="my-6  md:w-auto mx-auto md:mb-28">
            Multiplayer configurations and tools to create games previously <br className='hidden md:block' /> only feasible by large-scale teams now possible by EVERYONE.
          </p>
        </div>
        <div className="mt-20 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-10">
        {ressourcesListImages.map((src,index) => {
          return <ResscourcesCard key={index} imgSrc={src} />
        })}
        {/* <ResscourcesCard />
        <ResscourcesCard />
        <ResscourcesCard />
        <ResscourcesCard />
        <ResscourcesCard />
        <ResscourcesCard />
        <ResscourcesCard />
        <ResscourcesCard />
        <ResscourcesCard /> */}

        </div>
      </Container>
    </div>
  )
}

export default ResourcesPage