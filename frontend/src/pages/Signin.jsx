import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Image1 from '../assets/Potage.webp'
import { UserContext } from '../components/UserContext'
import axios from 'axios'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const Signin = () => {
     const [username, setUsername] = useState('')
     const [dob, setDob] = useState('')
     const [phone, setPhone] = useState(0)
     const [location, setLocation] = useState('')
     const [password, setPassword] = useState('')
     // const [response, setResponse] = useState(null)
     // const [error, setError] = useState(null)
     const navigate = useNavigate()
     const { emailContext } = useContext(UserContext);
     // const { user, setUser } = useContext(UserContext);

     const handleSignup = (e) => {
          e.preventDefault()
          axios.post("http://localhost:5174/signup", { username: username, email: emailContext, dob: dob, password: password, phone: phone, location: location})
          // axios.post("https://resto-jeremy.vercel.app/signup", { username: username, email: emailContext, dob: dob, password: password, phone: phone, location: location})
          .then(response => {
               localStorage.setItem("User", JSON.stringify(response.data.user))
               localStorage.setItem("Token", JSON.stringify(response.data.token))
               toast.success(response.data.message)
               setTimeout(() => {
                    window.location = '/' || navigate('/')
               }, 2000)
          })
          .catch(error => {
               console.log(error.response.data)
               toast.warn(error.response.data)
          })
     }

  return (
     <motion.div className={`flex justify-center items-center bg-auth-img bg-cover min-h-[10cm] px-[.4rem] md:px-[1rem] py-[3rem] md:py-[6rem] md:max-h-[20cm] min-[800px]:max-h-[24cm]`} 
     initial={{bottom: "-100%"}} animate={{bottom: 0}} exit={{bottom: "100%", opacity: 0}} transition={{duration: 0.4, delay: 0.2}}>
          <form className={`blur-bg px-5 py-4 bg-slate-950 rounded-xl text-white w-full md:w-2/3 lg:w-2/4`} onSubmit={handleSignup}>
               <div className={`flex flex-col items-center justify-center`}>
                    <img src={Image1} alt="Image1" className={`rounded-full h-12 w-12`} />
                    <h2 className={`font-bold`}>Register Account</h2>
               </div>
               <div className={`flex flex-col gap-1 mt-2`}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className={`w-full px-3 py-1 rounded-md border border-white bg-transparent`} placeholder='Enter Username' required onChange={(e) => setUsername(e.target.value )} />
               </div>
               <div className={`flex flex-col gap-1 mt-2`}>
                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" id="dob" className={`w-full px-3 py-1 rounded-md border border-white bg-transparent`} required onChange={(e) => setDob(e.target.value)} />
               </div>
               <div className={`flex flex-col gap-1 mt-2`}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" className={`w-full px-3 py-1 rounded-md border border-white bg-transparent`} placeholder='Eg: 789 999 999' required onChange={(e) => setPhone(e.target.value)} />
               </div>
               <div className={`flex flex-col gap-1 mt-2`}>
                    <label htmlFor="loction">Location</label>
                    <select id="loction" className={`w-full px-3 py-1 rounded-md border border-white bg-transparent`} required onChange={(e) => setLocation(e.target.value)}>
                         <option className={`text-black`} defaultValue value="Kigali">Kigali</option>
                         <option className={`text-black`} value="Bugesera">Bugesera</option>
                         <option className={`text-black`} value="Rulindo">Rulindo</option>
                         <option className={`text-black`} value="Kamonyi">Kamonyi</option>
                    </select>
               </div>
               <div className={`flex flex-col gap-1 mt-2`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder='Enter password' required autoComplete='off' onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-3 py-1 rounded-md border border-white bg-transparent`} />
               </div>
               <div className={`text-end pt-3`}>
                    <p className={` w-full text-right font-extralight text-sm`}>By continuing, you agree to our <Link to={'/'} className={`font-bold`}>terms of services</Link></p>
               </div>
               <button type='submit' className={`rounded-md w-full bg-amber-500 py-1 mt-2 shadow hover:shadow-white outline-none`}>Register</button>
          </form>
     </motion.div>
  )
}

export default Signin