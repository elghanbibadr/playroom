import noBackendIcon from "../../assets/noBackendIcon.svg"

const FeaturesList = () => {
  return (
    <div className="sm:grid sm:grid-cols-2 sm:gap-10 py-20 px-4 md:grid-cols-4">
    {Array.from({ length: 4 }).map((_, index) => (
      <div key={index} className="mb-10 sm:mb-auto">
        <img className="mb-6" src={noBackendIcon} alt="" />
        <h5 className="text-white font-semibold my-2 text-[13px]">Feature #{index + 1}</h5>
        <span className="small-text">Subheading about the <br className="hidden md:block" /> feature here</span>
      </div>
    ))}
  </div>
  )
}

export default FeaturesList