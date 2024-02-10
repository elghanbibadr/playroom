import Card from "./Card"
import Button from "./Button"
import checkIcon from "../../assets/checkIcon.svg"

const PricingCard = ({title,price,buttonName,planFeatures}) => {
  return (
    <Card className={`rounded-[17px] py-14  ${price === "Custom" ? "bg-[#1B1125]":""}  px-8 my-4`}>
        <div className="md:text-left">
            <span className="text-white text-[14px] font-semibold">{title}</span>
            <h3 className="text-[27px] font-semibold capitalize">{price}</h3>
        </div>
        <button className={`rounded-[6px]  text-[14px] bg-transparent w-full my-8 p-4  border-[1px] border-[#292A2D] ${price.toLowerCase() === "free" ? "gradientBtn text-black" : "text-white"} `}>{buttonName}</button>
        <ul>
            {planFeatures.map((feature,index) =>{
                return  <li key={index} className="flex ">
                <img className="mr-3" src={checkIcon} alt="check icon" />
                <span className="my-2 text-[14px]">{feature}</span>

            </li> 
            })}
           
        </ul>
    </Card>
  )
}

export default PricingCard