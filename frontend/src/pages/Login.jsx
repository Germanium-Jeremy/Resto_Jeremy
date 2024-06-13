import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
     const [loginEmail, setEmail] = useState("")
     const [loginPassword, setPassword] = useState("")
     const [loginResponse, setResponse] = useState(null)

     const submitted = async(e) => {
          e.preventDefault()
          axios.post("http://localhost:5174/login", {
               email: loginEmail,
               password: loginPassword
             })
             .then(response => {
               setResponse(response.data)
               console.log("Response: ", response)
               localStorage.setItem("Token", response.data.token)
               localStorage.setItem("User", JSON.stringify(response.data.user))
               location.href = '/'
             })
             .catch(error => console.log("Error Caught: ", error));
     }
  return (
    <div>
     <h1 className='text-xl'>Login to german resto</h1>
     <form className='w-full' onSubmit={submitted}>
          <div className=''>
               <label htmlFor="">Email</label>
               <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} value={loginEmail} autoComplete='on' />
          </div>
          <div>
               <label htmlFor="">Password</label>
               <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} value={loginPassword} autoComplete='off' />
          </div>
          <Link to={'/signup'}>Don't have Account?</Link>
          <button type='submit' className='block'>SignIn</button>
     </form>
     <div>
          <Link to={'/google'}>Login With Google</Link>
     </div>
     {loginResponse && (
        <div>
          <p className='text-center text-xl text-white'>Login Response: {JSON.stringify(loginResponse)}</p>
        </div>
      )}
    </div>

  )
}

export default Login