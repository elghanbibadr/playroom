import Card from "../ui/Card"
export const LetsConnect = () => {
  return (
    <div className="mt-20 md:mt-64 p-4">
           <div className="text-center   ">
        <h2 className="text-white">Let’s Connect</h2>
        <p className="my-5 mx-auto ">
        Looking for help? We are just a message away.       </p>
      </div>
      <div className="md:grid md:grid-cols-2 mt-10 items-center sm:w-[90%] mx-auto md:w-[80%]  place-items-center md:gap-4">
          <Card className="w-full  mb-6 md:mb-0  flex justify-center items-center h-[120px] ">
            <h4 className="text-white font-medium text-[1.6rem] ">Get in Touch</h4>
          </Card>
          <Card className="w-full flex  justify-center items-center h-[120px] ">
            <h4 className="text-white font-medium text-[1.6rem] ">Discord</h4>
          </Card>
      </div>
    </div>
  )
}
