import Card from "../../ui/Card"
const NpmInstallCardBox = () => {
  return (
    <Card className="w-full rounded-[16px] text-center md:w-[75%] md:mx-auto md:py-8">
    <p className='text-white sm:text-[1.4rem] font-extralight text-[1.2rem] md:text-[2rem]'>
    npm install --save playroomkit react react-dom
    </p>
   </Card>
  )
}

export default NpmInstallCardBox