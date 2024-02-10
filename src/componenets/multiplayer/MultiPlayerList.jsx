import checkIcon from "../../assets/checkIcon.svg"
const PackagesList = ({packageOffres,packageName,className,hasBorder=true}) => {
  return (
    <div className={`my-20 text-[#D2D2D2] h-[400px]  ${className}`}>
    <h6 className={`text-[#D2D2D2] h-14  text-[13px] font-semibold ${hasBorder ? "border-b-[1.5px] pb-6 border-[#8f8d8d73]" : ""} `}>{packageName}</h6>
    <ul className="text-[#D2D2D2] ">
      {packageOffres.map(item =>{
        return   <li className="text-[#D2D2D2] my-8 text-[13px]">
           {!item.hasCheck && <span>{item.text}</span>}
           {item.hasCheck &&  <img className="h-6 mx-auto w-8" src={item.iconSource} />}
           </li>

      })}
    </ul>
  </div>
  )
}




export default PackagesList


