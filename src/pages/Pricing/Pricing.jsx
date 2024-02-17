import PricingCard from "../../componenets/ui/PricingCard"
import { Container } from "../../componenets/ui/Container"
import { plansData } from "../../data/data"
import { packageOffersData1,packageOffersData2,packageOffersData3 } from "../../data/data"
import PackageList from "../../componenets/PricingPageComponenets/PackageList"

const Pricing = () => {
  return (  
    <Container>
      <div className="mt-20 gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  ">
        {plansData.map((plan, index) => {
          return <PricingCard key={index} {...plan} />
        })}
      </div>
      <div className="text-center mt-40">
        <h2>Multiplayer & More </h2>
        <p className='mt-4 md:my-[3vh]'>
          Building multiplayer is hard and its more than just networking. Leverage <br className='hidden md:block' />  Playroom to you ship your games faster and across platforms.
        </p>
       
        {/* mt-20 md:mt-40 */}
        <div className="md:grid sm:w-[80%] sm:mx-auto mt-20 md:mt-40 md:w-full lg:w-[70%]    md:grid-cols-3 md:grid-rows-auto ">
     
          <div>
            {packageOffersData1.map(({ packageName, packageFeatures }, index) => {
              return <> 
                {index === 0 && <div className="hidden md:sticky md:block bg-black md:top-0 md:pt-8 border-b-[1.5px] pb-6 border-[#8f8d8d73]">
                <h6 className="text-left  text-[13px] text-[#D2D2D2] ">Multiplayer Services</h6>
                </div> }<PackageList key={index} className='text-left' packageOffres={packageFeatures} packageName={packageName} />  </> 
            })}  
          </div>
          <div className="bg-[#1B1125] border-[#602F92] border rounded-3xl py-6 md:py-0 h-full">
            {packageOffersData2.map(({ packageName, packageFeatures }, index) => {
              return <>  
              {index === 0 && <div className="hidden md:sticky md:block    rounded-3xl bg-[#1B1125]   md:top-0 md:pt-6">
                <h6 className="text-[24px] ">Playroom</h6>
                </div> }
           
              <PackageList  className=" text-white"  key={index} index={index} packageOffres={packageFeatures} packageName={packageName} hasBorder={false}/>;
              </> 
            })}
          </div>
          <div>           
          {packageOffersData3.map(({ packageName, packageFeatures }, index) => {
             return <>
                 {index === 0 && <div className="hidden md:sticky md:block bg-black md:top-0 md:pt-8 border-b-[1.5px] pb-6 border-[#8f8d8d73]">
                <h6 className="text-center  text-[13px]  text-[#D2D2D2]">Others</h6>
                </div> }
               <PackageList  className=" text-white"  key={index} packageOffres={packageFeatures} packageName={packageName} />;

              </> 
              
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Pricing