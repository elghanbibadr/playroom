
import Navbar from "../../componenets/Navbar"
import Button from "../../componenets/ui/Button"
import PricingCard from "../../componenets/ui/PricingCard"

const Pricing = () => {
  return (
    <div className="bg-black p-4">
        <Navbar/>
        <div className='mt-32 text-left md:text-center  p-5'>
      <h2>Simple Pricing </h2>
      <p className='mt-4 md:my-[3vh]'>
      Transparent pricing based on MAU (Monthly active users). Pay Zero for non-commercial and low-usage games.
      </p>   
       <Button>Price Comparison</Button>
       <PricingCard/>
       </div>
    </div>
  )
}

export default Pricing