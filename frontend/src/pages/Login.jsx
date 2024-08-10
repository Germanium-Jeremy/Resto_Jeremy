import React, { useState, useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Image1 from '../assets/Potage.webp'
import { UserContext } from '../components/contexts/UserContext'
import { toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import axios from 'axios'

const Login = () => {
     const [password, setPassword] = useState(null)
     const { emailContext } = useContext(UserContext)
     const [loading, setLoading] = useState(false)
     const navigate = useNavigate()

     const note = async (heading) => {
          const userId = JSON.parse(localStorage.getItem("User"))._id
          const name = JSON.parse(localStorage.getItem("User")).username
          const message = name + ", You have successfully loged to your account"
          // axios.post("http://localhost:5174/createNotification", { userId: userId, productId: "", heading: heading, message: message, longMessage: "", dateOfMake: ''}).then(response => {
          axios.post("https://resto-jeremy.vercel.app/createNotification", { userId: userId, productId: "", heading: heading, message: message, longMessage: ""}).then(response => {
               console.log(response.data.message)
          }).catch(error => {
               console.error(error.message)
          })
     }

     const hangleLogin = (e) => {
          e.preventDefault()
          setLoading(true)
          // axios.post("http://localhost:5174/login", { email: emailContext, password: password})
          axios.post("https://resto-jeremy.vercel.app/login", { email: emailContext, password: password})
          .then(response => {
               setLoading(false)
               localStorage.setItem("User", JSON.stringify(response.data.user))
               localStorage.setItem("Token", JSON.stringify(response.data.token))
               toast.success(response.data.message)
               note(response.data.message)
               setTimeout(() => {
                    location = '/dashboard/user' || navigate("/dashboard")
               }, 2000)
          }).catch(error => {
               setLoading(false)
               toast.warn(error.response.data)
          })
     }

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
                    <input type="password" id="password" className={`w-full px-3 py-1 rounded-md border border-white bg-transparent`} placeholder='Enter password'
                     required onChange={(e) => setPassword(e.target.value)} />
               </div>
               <div className={`text-end pt-3`}>
                    <Link to={'/forgot'} className={` w-full text-right`}>Forgot Password</Link>
               </div>
               {loading !== true ? <button type='submit' onClick={hangleLogin} className={`rounded-md w-full bg-amber-500 py-1 mt-2 shadow hover:shadow-white outline-none`}>Log in</button> :
                <button type='disabled' className={`rounded-md w-full bg-gray-500 py-1 mt-2 outline-none`}>Loading...</button>}
          </form>
     </motion.div>
  )
}

export default Login