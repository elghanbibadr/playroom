import Card from "./Card"
import Button from "./Button"
import checkIcon from "../../assets/checkIcon.svg"

const PricingCard = () => {
  return (
    <Card className="rounded-[17px] py-10">
        <span className="text-white font-bold">Hobby</span>
        <h3 className="text-[27px] font-semibold">Custom</h3>
        <button className="rounded-[6px] bg-transparent w-full my-10 p-4 text-white border-[1px] border-[#292A2D]">Get in Touch</button>
        <ul>
            <li className="flex ">
                <img className="mr-3" src={checkIcon} alt="check icon" />
                <span>Non Commercial</span>

            </li>
        </ul>
    </Card>
  )
}

export default PricingCard