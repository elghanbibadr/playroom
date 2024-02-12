
import GetStarted from '../../componenets/HomePageComponenets/GetStarted/GetStarted'
import SaveDevelopment from '../../componenets/HomePageComponenets/SaveDevelopment/SaveDevelopment'
import Features from '../../componenets/HomePageComponenets/Features/Features'
import { Container } from '../../componenets/ui/Container'
import Resources from '../../componenets/HomePageComponenets/Resscources/Resources'
import {BuiltForNextGeneration} from '../../componenets/HomePageComponenets/BuiltForNextGeneration/BuiltForNextGeneration'
import { LetsConnect } from '../../componenets/HomePageComponenets/LetsConnect/LetsConnect'
import { Footer } from '../../componenets/ui/Footer'
const Home = () => {

 return (

    <>
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