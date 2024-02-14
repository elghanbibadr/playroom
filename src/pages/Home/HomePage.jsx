
import GetStarted from '../../componenets/HomePageComponenets/GetStarted/GetStarted'
import SaveDevelopment from '../../componenets/HomePageComponenets/SaveDevelopment/SaveDevelopment'
import Features from '../../componenets/HomePageComponenets/Features/Features'
import { Container } from '../../componenets/ui/Container'
import Resources from '../../componenets/HomePageComponenets/Resscources/Resources'
import {BuiltForNextGeneration} from '../../componenets/HomePageComponenets/BuiltForNextGeneration/BuiltForNextGeneration'
import { LetsConnect } from '../../componenets/HomePageComponenets/LetsConnect/LetsConnect'
import { Footer } from '../../componenets/ui/Footer'
import Navbar from '../../componenets/ui/Navbar'
import Hero from '../../componenets/HomePageComponenets/Hero/Hero'
import rectangleLight from "../../assets/rectangleLight.png"
const Home = () => {

 return (

    <>
    
    <div className=' heroWrraper   min-h-[100vh] md:h-[100vh] z-10 relative'>
    <Container>
      <Navbar/>
        <Hero/>
    </Container>
      <img className='w-full absolute left-0 right-0 bottom-0 h-[180px]' src={rectangleLight} alt="" />
      </div>
    <Container>
    <BuiltForNextGeneration/>
    </Container>

    <GetStarted />
    <Container>
      <SaveDevelopment />
    <Features/>
    <Resources />
    <LetsConnect />
    </Container>
     <Footer/>
    </>


  
 )
}

export default Home