

import FeaturesHero from "../../componenets/FeaturesPageComponenet/FeaturesHero"
import FeaturesList from "../../componenets/FeaturesPageComponenet/FeaturesList"
import ReadDoc from "../../componenets/FeaturesPageComponenet/ReadDoc"
import UseCase from "../../componenets/FeaturesPageComponenet/UseCase"
import SimpleApi from "../../componenets/FeaturesPageComponenet/SimpleApi"
import Documentation from "../../componenets/FeaturesPageComponenet/Documentation"
import { Container } from "../../componenets/ui/Container"


const PartnersPage = () => {
  return (
    <>
      <FeaturesHero />
     <Container>
        <FeaturesList />
      <ReadDoc />
      <UseCase />
      <SimpleApi />
      <Documentation />
    </Container>
    </>
    
  )
}

export default PartnersPage