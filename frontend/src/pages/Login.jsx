import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Image1 from '../assets/Potage.webp'

const Login = () => {

  return (
     <motion.div className={`flex justify-center items-center bg-auth-img bg-cover min-h-[7cm] px-[.4rem] md:px-[1rem] py-[2rem] md:py-[6rem] md:max-h-[20cm] min-[800px]:max-h-[24cm]`} 
     initial={{bottom: "-100%"}} animate={{bottom: 0}} exit={{bottom: "100%", opacity: 0}} transition={{duration: 0.4, delay: 0.2}}>
          <form className={`blur-bg px-5 py-4 bg-slate-950 rounded-xl text-white w-full md:w-2/3 lg:w-2/4`}>
               <div className={`flex flex-col items-center justify-center`}>
                    <img src={Image1} alt="Image1" className={`rounded-full h-12 w-12`} />
                    <h2 className={`font-bold`}>Account Login</h2>
               </div>
               <div className={`flex flex-col gap-1 mt-2`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" className={`w-full px-3 py-1 rounded-md border border-white bg-transparent`} placeholder='Enter password' required />
               </div>
               <div className={`text-end pt-3`}>
                    <Link to={'/forgot'} className={` w-full text-right`}>Forgot Password</Link>
               </div>
               <button type='submit' className={`rounded-md w-full bg-amber-500 py-1 mt-2 shadow hover:shadow-white outline-none`}>Log in</button>
          </form>
     </motion.div>
  )
}

export default Login