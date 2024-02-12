

import FeaturesHero from "../../componenets/FeaturesPageComponenet/FeaturesHero"
import FeaturesList from "../../componenets/FeaturesPageComponenet/FeaturesList"
import ReadDoc from "../../componenets/FeaturesPageComponenet/ReadDoc"
import UseCase from "../../componenets/FeaturesPageComponenet/UseCase"
import SimpleApi from "../../componenets/FeaturesPageComponenet/SimpleApi"
import Documentation from "../../componenets/FeaturesPageComponenet/Documentation"
const FeaturesPage = () => {
  return (
    <>
      <FeaturesHero />
      <FeaturesList />
      <ReadDoc />
      <UseCase />
      <SimpleApi />
      <Documentation />
    </>
  )
}

export default FeaturesPage