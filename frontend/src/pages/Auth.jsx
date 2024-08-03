import React, { useState, useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { FaGoogle } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Image1 from '../assets/Potage.webp'
import { UserContext } from '../components/contexts/UserContext'
import { toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

const Auth = () => {
  const [email, setEmail] = useState('')
  const [emailLogin, setEmailLogin] = useState('')
  const [responseEmail, setResponseEmail] = useState(null)
  const [signup, setSignup] = useState(false)
  const { setEmailContext } = useContext(UserContext);
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const showAuth = () => signup == true ? setSignup(false) : setSignup(true)

  const handleSignupEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post("http://localhost:5174/email", { email: email })
    // axios.post("https://resto-jeremy.vercel.app/email", { email: email })
    .then(responseEmail => {
      setLoading(false)
      setEmailContext(responseEmail.data)
      setResponseEmail(responseEmail.data)
      navigate('/signup')
    })
    .catch(error => {
      setLoading(false)
      if (error.response.data.message) {
        toast.warn(error.response.data.message);
      } else {
        toast.error("Network Error")
      }
    })
  }

  const handleLoginEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post("http://localhost:5174/emailLogin", { email: emailLogin })
    // axios.post("https://resto-jeremy.vercel.app/emailLogin", { email: emailLogin })
    .then(responseEmail => {
      setLoading(false)
      setEmailContext(responseEmail.data)
      setResponseEmail(responseEmail.data)
      navigate('/login')
    })
    .catch(error => {
      setLoading(false)
      if (error.response.data.message) {
        toast.warn(error.response.data.message);
      } else {
        toast.error("Network Error")
      }
    })
  }
  return (
    <motion.div className={`flex justify-center items-center bg-auth-img bg-cover min-h-[10cm] px-[.4rem] md:px-[1rem] py-[2rem] md:py-[6rem] md:max-h-[20cm] min-[800px]:max-h-[24cm] max-[850px]:h-screen`} 
      initial={{bottom: "-100%"}} animate={{bottom: 0}} exit={{bottom: "100%", opacity: 0}} transition={{duration: 0.4, delay: 0.2}}>

      <div className={`blur-bg px-5 py-4 bg-slate-950 rounded-xl text-white w-full md:w-2/3 lg:w-2/4 ${signup == true ? "hidden" : "block"}`}>
        <div className={`flex flex-col items-center justify-center`}>
          <img src={Image1} alt="Image1" className={`rounded-full h-12 w-12`} />
          <h2 className={`font-bold`}>Account Login</h2>
          <p className={`text-xs font-light`}>Get started!</p>
          <button className={`flex gap-4 justify-center items-center rounded-md bg-slate-700 w-full py-2 mt-2`}>
            <FaGoogle />
            <span className={`text-sm`}>Sign in with Google</span>
          </button>
        </div>
        <form className={`flex flex-col gap-1 mt-2`} onSubmit={handleLoginEmail}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" className={`w-full px-3 py-1 rounded-md border border-white bg-transparent`} placeholder='Enter email' required
            onChange={(e) => setEmailLogin(e.target.value)} value={emailLogin} />
          {loading == false ? <button type='submit' className={`rounded-md w-full bg-amber-500 py-1 mt-2 shadow hover:shadow-white`}>Sign in with Email</button> :
           <button type='disabled' className={`rounded-md w-full bg-gray-600 py-1 mt-2 shadow hover:shadow-white cursor-not-allowed`}>Loading...</button>}
        </form>
        <p className={`text-xs font-extralight my-2`}>You agree to our <Link to={'/'} className={`font-semibold`}>terms of services</Link></p>
        <button className={`text-amber-400 text-center w-full`} onClick={showAuth}>Don't have account</button>
      </div>


      <div className={`blur-bg px-5 py-4 bg-slate-950 rounded-xl text-white w-full md:w-2/3 lg:w-2/4 ${signup == true ? "block" : "hidden"}`}>
        <div className={`flex flex-col items-center justify-center`}>
          <img src={Image1} alt="Image1" className={`rounded-full h-12 w-12`} />
          <h2 className={`font-bold`}>Create Account</h2>
          <p className={`text-xs font-light`}>Get started!</p>
          <button className={`flex gap-4 justify-center items-center rounded-md bg-slate-700 w-full py-2 mt-2`}>
            <FaGoogle />
            <span className={`text-sm`}>Sign up with Google</span>
          </button>
        </div>
        <form className={`flex flex-col gap-1 mt-2`} onSubmit={handleSignupEmail}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" className={`w-full px-3 py-1 rounded-md border border-white bg-transparent`} placeholder='Enter email' required
          onChange={(e) => setEmail(e.target.value)} />
          {loading == false ? <button type='submit' className={`rounded-md w-full bg-amber-500 py-1 mt-2 shadow hover:shadow-white`}>Sign up with Email</button> :
           <button type='disabled' className={`rounded-md w-full bg-gray-600 py-1 mt-2 shadow hover:shadow-white cursor-not-allowed`}>Loading...</button>}
        </form>
        <p className={`text-xs font-extralight my-2`}>You agree to our <Link to={'/'} className={`font-semibold`}>terms of services</Link></p>
        <button className={`text-amber-400 text-center w-full`} onClick={showAuth}>Have account</button>
      </div>
    </motion.div>
  )
}

export default Auth