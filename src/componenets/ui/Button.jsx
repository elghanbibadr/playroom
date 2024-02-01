import { motion } from "framer-motion"

const Button = ({children}) => {
  return (
    <motion.button  
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}className='box text-black mt-6 gradientBtn  rounded-full p-6 px-10 md:px-12 text-[1.2rem] md:text-[1.3rem] font-[500]'>{children}</motion.button>
  )
}

export default Button