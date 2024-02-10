
import Navbar from "../../componenets/Navbar"
import Button from "../../componenets/ui/Button"
import PricingCard from "../../componenets/ui/PricingCard"
import { Container } from "../../componenets/ui/Container"  
import PackagesList from "../../componenets/multiplayer/MultiPlayerList"
import checkIcon from "../../assets/checkIcon.svg"
import checkIconWhite from "../../assets/checkIconWhite.png"
import checkIconGrey from "../../assets/checkIcongrey.svg"
import xmark from "../../assets/xmark.svg"


const plansData=[
  {
    id:1,
    title:"Hobby",
    price:"free",
    buttonName:"Get started",
    planFeatures:["Non Commercial","Unlimited CCU"]
  },
  {
    id:2,
    title:"Starter",
    price:"$10",
    buttonName:"Get in Touch",
    planFeatures:["10k MAU (Monthly Active Users)","Unlimited CCU","Auto Scaling","$0.0075 additional users"]
  },
  {
    id:3,
    title:"Studio",
    price:"$150",
    buttonName:"Get in Touch",
    planFeatures:["200k MAU (Monthly Active Users)","Unlimited CCU","Auto Scaling","$0.0050 additional users","Priority Support"]
  },
  {
    id:4,
    title:"Enterprise",
    price:"Custom",
    buttonName:"Contact Us",
    planFeatures:["Multiple Games","1M+ MAU","Custom Pricing","Unlimited CCU","Team Dashboard","Dedicated support"]
  },
]


const packageOffresData1 = [
  { text: "CCU Limit", hasCheck: false, iconSource: "path/to/ccu_limit_icon.png" },
  { text: "Platforms", hasCheck: false, iconSource: "path/to/platforms_icon.png" },
  { text: "Managed SSL Certificates", hasCheck: false, iconSource: "path/to/ssl_certificates_icon.png" },
  { text: "Bandwidth", hasCheck: false, iconSource: "path/to/bandwidth_icon.png" },
  { text: "Support", hasCheck: false, iconSource: "path/to/support_icon.png" },
  { text: "Scaling", hasCheck: false, iconSource: "path/to/scaling_icon.png" },
  { text: "Region", hasCheck: false, iconSource: "path/to/region_icon.png" },
  { text: "Updates", hasCheck: false, iconSource: "path/to/updates_icon.png" },
  { text: "Bug Handling", hasCheck: false, iconSource: "path/to/bug_handling_icon.png" },
  { text: "Documentation", hasCheck: false, iconSource: "path/to/documentation_icon.png" }
];
const packageOffresData2 = [
  { text: "Open Source Templates", hasCheck: false, iconSource: null },
  { text: "UI Lobby", hasCheck: false, iconSource: null },
  { text: "UI Matchmaking", hasCheck: false, iconSource:null },
  { text: "Sync’d Game Objects", hasCheck: false, iconSource:null },
  { text: "Gamepads Integrations", hasCheck: false, iconSource:null},
  { text: "UI Avatar pickers", hasCheck: false, iconSource: null },
 
  
];
const packageOffresData3 = [
  { text: "Sync’d Chat Kit", hasCheck: false, iconSource: null },
  { text: "Sync’d Voice Kit", hasCheck: false, iconSource: null },
  { text: "Stream mode UI", hasCheck: false, iconSource:null },
  { text: "Tv mode UI", hasCheck: false, iconSource:null },
  { text: "Twitch Moderation Kit", hasCheck: false, iconSource:null},
  { text: "AI Assets Generator API", hasCheck: false, iconSource: null },
  { text: "AI Text/Voice generatior with OpenAI", hasCheck: false, iconSource: null },
  { text: "25+ Customizable Multiplayer Objects", hasCheck: false, iconSource: null },
 
  
];
const packageOffresData4 = [
  { text: "Ready Player Me Integration", hasCheck: false, iconSource: null },
  { text: "Discord Integration", hasCheck: false, iconSource: null },
  { text: "Bunch Integration", hasCheck: false, iconSource:null },
  { text: "Twitch Integration", hasCheck: false, iconSource:null },
  { text: "TikTok Integration", hasCheck: false, iconSource:null},
  { text: "Crazygames Integration", hasCheck: false, iconSource: null },
  { text: "Payment partners", hasCheck: false, iconSource: null },
  { text: "Auth partners", hasCheck: false, iconSource: null },
  { text: "Analytics partners", hasCheck: false, iconSource: null },
 
  
];
const packageOffresData5 = [
  { text: "Unlimited", hasCheck: false, iconSource: null },
  { text: "Ship Everywhere", hasCheck: false, iconSource: null },
  { text: null, hasCheck: true, iconSource:checkIcon },
  { text: "Auto Scale", hasCheck: false, iconSource:null },
  { text: null, hasCheck: true, iconSource:checkIcon },
  { text: null, hasCheck: true, iconSource:checkIcon },
  { text: "Global", hasCheck: false, iconSource: null },
  { text: null, hasCheck: true, iconSource:checkIcon },
  { text: null, hasCheck: true, iconSource:checkIcon },
  { text: "The Best!", hasCheck: false, iconSource: null },
 
  
];
const packageOffresData6 = [
  { text: null, hasCheck: true, iconSource:checkIcon },
  { text: null, hasCheck: true, iconSource:checkIcon },
  { text: null, hasCheck: true, iconSource:checkIcon },
  { text: null, hasCheck: true, iconSource:checkIcon },
  { text: null, hasCheck: true, iconSource:checkIcon },
  { text: null, hasCheck: true, iconSource:checkIcon },
 
  
];
const packageOffresData7 = [
  { text: "Alpha", hasCheck: false, iconSource: null },
  { text: "Alpha", hasCheck: false, iconSource: null },
  { text: "Alpha", hasCheck: false, iconSource: null },
  { text: "Alpha", hasCheck: false, iconSource: null },
  { text: "Alpha", hasCheck: false, iconSource: null },
  { text: "Alpha", hasCheck: false, iconSource: null },
  { text: "Alpha", hasCheck: false, iconSource: null },
  { text: "More coming soon", hasCheck: false, iconSource: null },
];
const packageOffresData8= [
  { text: "Alpha", hasCheck: false, iconSource: null },
  { text: "Alpha Live", hasCheck: false, iconSource: null },
  { text: "In Development", hasCheck: false, iconSource: null },
  { text: "Alpha Live", hasCheck: false, iconSource: null },
  { text: "TBD", hasCheck: false, iconSource: null },
  { text: "TBD", hasCheck: false, iconSource: null },
  { text: "TBD", hasCheck: false, iconSource: null },
  { text: "TBD", hasCheck: false, iconSource: null },

];

const packageOffresData9= [
  { text: "CCU Limit pricing", hasCheck: false, iconSource: null },
  { text: "per platfom pricing", hasCheck: false, iconSource: null },
  { text: null, hasCheck: true, iconSource:checkIconGrey },
  { text: "CPU and Bandwidth charges", hasCheck: false, iconSource: null },
  { text: "Only if you are enterprise", hasCheck: false, iconSource: null },
  { text: "vertical and horizontal pricing", hasCheck: false, iconSource: null },
  { text: "Per Region server pricing", hasCheck: false, iconSource: null },
  { text: null, hasCheck: true, iconSource:checkIconGrey },
  { text: null, hasCheck: true, iconSource:checkIconGrey },
  { text: "Good luck!", hasCheck: false, iconSource: null },

];
const packageOffresData10= [
  { text: "Requires setup", hasCheck: false, iconSource: null },
  { text: null, hasCheck: true, iconSource:checkIconGrey },
  { text: null, hasCheck: true, iconSource:checkIconGrey },
  { text: null, hasCheck: true, iconSource:checkIconGrey },
  { text: null, hasCheck: true, iconSource:checkIconGrey },
  { text: null, hasCheck: true, iconSource:checkIconGrey },
];

const packageOffresData11= [
  { text: null, hasCheck: true, iconSource:xmark },
  { text: null, hasCheck: true, iconSource:xmark },
  { text: null, hasCheck: true, iconSource:xmark },
  { text: null, hasCheck: true, iconSource:xmark },
  { text: null, hasCheck: true, iconSource:xmark },
  { text: null, hasCheck: true, iconSource:xmark },
];



const Pricing = () => {
  return (
    <Container className="bg-black p-4">
        <Navbar/>
        <div className='mt-32 text-left md:text-center  p-5'>
      <h2>Simple Pricing </h2>
      <p className='mt-4 md:my-[3vh]'>
      Transparent pricing based on MAU (Monthly active users). Pay Zero for non-commercial and low-usage games.
      </p>   
       <Button>Price Comparison</Button>
       {/* custom-grid */}
       <div className="mt-20 gap-6 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
         {plansData.map((plan,index) =>{
         return <PricingCard key={index} {...plan}/>
         })}
       </div>
       </div>

       {/* MULTIPLE PLAYER */}
       <div className="text-center mt-40">
         <h2>Multiplayer & More </h2>
               <p className='mt-4 md:my-[3vh]'>
               Building multiplayer is hard and its more than just networking. Leverage Playroom to you ship your games faster and across platforms.
               </p>


              <div className="md:grid mt-20 md:mt-40  md:grid-cols-3 ">
                <div>
                  <PackagesList packageOffres={packageOffresData1} packageName="Multiplayer Services" />
                  <PackagesList packageOffres={packageOffresData2} packageName="Basic Modules & UI Kits" />
                  <PackagesList packageOffres={packageOffresData3} packageName="Pro Modules & UI Kits (Usage based pricing)" />
                  <PackagesList packageOffres={packageOffresData4} packageName="Cross-platform Integrations (Custom pricing)" />
                </div>
                <div className="bg-[#1B1125]  rounded-3xl h-full">
                  {/* <h1>hello world</h1> */}
                  <PackagesList className=" text-white" packageOffres={packageOffresData5} packageName="Playroom" hasBorder={false} />
                  <PackagesList className=" text-white py-20" packageOffres={packageOffresData6} packageName=" " hasBorder={false}  />
                  <PackagesList className=" text-white py-20" packageOffres={packageOffresData7} packageName=" " hasBorder={false}  />
                  <PackagesList className=" text-white py-20" packageOffres={packageOffresData8} packageName=" " hasBorder={false}  />

                </div>
                <div>
                  <PackagesList packageOffres={packageOffresData9} packageName="Others" />
                  <PackagesList packageOffres={packageOffresData10} packageName="" />
                  <PackagesList packageOffres={packageOffresData11} packageName="" />
                  <PackagesList packageOffres={packageOffresData11} packageName="" />
                </div>
              </div>
       </div>

       {/* MULTIPLE PLAYER */}
    </Container>
  )
}

export default Pricing