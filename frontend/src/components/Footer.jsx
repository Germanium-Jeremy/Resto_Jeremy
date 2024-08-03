import React, { useState, useContext }  from 'react'
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom'
import { UserContext } from './contexts/UserContext'
import { toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

export const Footer = () => {
  const [email, setEmail] = useState('')
  const { setEmailContext } = useContext(UserContext);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("User"))

  const handleSignupEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.post("http://localhost:5174/email", { email: email })
    // axios.post("https://resto-jeremy.vercel.app/email", { email: email })
    .then(responseEmail => {
      setLoading(false)
      setEmailContext(responseEmail.data)
      navigate('/signup')
    })
    .catch(error => {
      setLoading(false)
      if (error.response) {
        toast.warn(error.response.data.message);
      } else {
        toast.error("Network Error")
      }
    })
  }

  return (
    <footer className='px-2 md:px-5 border border-black text-white bg-black'>
      <div className={`border-b-2 border-white py-2 md:flex md:justify-between md:items-center`}>
        <div>
          <h2 className={`text-2xl font-bold`}>Delight Fast</h2>
          <div className={`flex gap-4 text-xs`}>
            <Link to={'/'} className={`font-semibold`}>Our Story</Link>
            <Link to={'/'} className={`font-semibold`}>Meals</Link>
            <Link to={'/'} className={`font-semibold`}>Social Media</Link>
          </div>
        </div>
        {user == null ? (
          <div className={`my-2`}>
            <h2 className={`text-end md:text-start`}>Newsletter Signup</h2>
            <form className='flex gap-2' onSubmit={handleSignupEmail}>
              <input type="email" placeholder='Enter your email' className={`border border-white px-3 py-1 outline-none w-full text-black`} onChange={(e) => setEmail(e.target.value)} value={email} required />
              <button className={`border ${loading ? "bg-gray-600" : "bg-none" } border-white w-3/5 shadow hover:shadow-white`}>{loading ? "Loading..." : "Join Now"}</button>
            </form>
            <Link to={'/'}>Agree to privacy policy</Link>
          </div>
        ) : null}
      </div>
      <div className={`flex max-sm:flex-col my-3 md:justify-between md:items-center`}>
        <div className={`flex gap-2 text-xs`}>
          <Link to={'/'}>Services Terms</Link>
          <Link to={'/'}>Cookie Preference</Link>
        </div>
        <div className={`text-center font-semibold my-3`}>
          &copy;2024 DelightFast. All right reserved.
        </div>
      </div>
    </footer>
  )
}
