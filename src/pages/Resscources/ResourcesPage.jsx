import Navbar from "../../componenets/ui/Navbar"
import { Container } from "../../componenets/ui/Container"
import ResscourcesCard from "../../componenets/RessourcesPageComponents/ResscourcesCard"

import ressourceImg1 from "../../assets/ressourcesimg1.webp"
import ressourceImg2 from "../../assets/ressourcesimg2.webp"
import ressourceImg3 from "../../assets/ressourcesimg3.webp"
import ressourceImg4 from "../../assets/ressourcesimg4.webp"
import ressourceImg5 from "../../assets/ressourcesimg5.webp"
import ressourceImg6 from "../../assets/ressourcesimg6.webp"
import ressourceImg7 from "../../assets/ressourcesimg7.webp"
import ressourceImg9 from "../../assets/ressrourceImg9.webp"
import HireDeveloperCard from "../../componenets/RessourcesPageComponents/HireDeveloperCard"
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


       
    
    <Container className='md:pb-40'>
        
          <div className="sm:grid mt-20  md:mt-40 sm:grid-cols-2 md:grid-cols-3 sm:gap-10">
          {ressourcesListImages.map((src,index) => {
            return <ResscourcesCard key={index} imgSrc={src} />
          })}
          </div>
                <HireDeveloperCard />
       
      </Container>
    
   
  
  
  )
}

export default ResourcesPage