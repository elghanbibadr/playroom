

const UseCase = () => {
  return (
    <div className="mt-20 carousel m-6 md:grid-cols-4 gap-6">
    {[...Array(4)].map((_, index) => (
      <div key={index} className="carousel-item flex flex-col">
        <svg className="w-full" viewBox="0 0 389 298" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.288187" y="0.288187" width="388.119" height="297.424" rx="17.003" fill="#3F3F48" fillOpacity="0.2" stroke="#3F3F48" strokeWidth="0.576373" />
        </svg>
        <h5 className="text-white font-semibold my-2 text-[13px]">Use case</h5>
        <span className="small-text">Subheading about the <br className="hidden md:block" /> feature here</span>
      </div>
    ))}
  </div>
  )
}

export default UseCase