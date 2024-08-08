import React, { useContext, useState } from 'react'
import Image1 from '../assets/Potage.webp'
import { ReviewContext } from './contexts/ReviewContext'

const ReachUs = () => {
     const { handleSubmit, username, email, message, setUsername, setEmail, setMessage, user, loading } = useContext(ReviewContext)

  return (
     <>
     <div className={`max-sm:hidden w-full h-full flex`}>
          <img src={Image1} alt="Image" className={`h-[58vh] lg:h-[70vh] w-full`} />
     </div>
     <form className={`w-full md:px-5`} onSubmit={handleSubmit}>
          <h2 className={`text-4xl font-bold`}>Reach Out</h2>
          <p className={`text-xl`}>Leave a review to help use improve better.</p>
          {!user && (
               <div className='mt-3 mb-3 lg:mb-2 lg:mt-2 w-full'>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder='Enter name' required value={username} onChange={(e) => setUsername(e.target.value)}
                         className={`border border-black px-3 py-2 outline-none rounded-md w-full`} />
               </div>
          )}
          {!user && (
               <div className='mt-3 mb-3 lg:mb-2 lg:mt-2 w-full'>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder='Enter email' required value={email} onChange={(e) => setEmail(e.target.value)}
                         className={`border border-black px-3 py-2 outline-none rounded-md w-full`} />
               </div>
          )}
          <div className='mt-3 mb-3 lg:mb-2 lg:mt-2 w-full'>
               <label htmlFor="message">Your Message</label>
               <textarea name="" id="message" placeholder='Enter message' required value={message} onChange={(e) => setMessage(e.target.value)}
                    className={`border border-black px-3 py-2 outline-none rounded-md w-full max-h-32`}></textarea>
          </div>
          <button className={`px-4 py-2 rounded-md text-white shadow ${loading == true ? "bg-gray-700" : "bg-amber-500  hover:shadow-gray-600"}`}>{loading ? "Sending..." : "Send"}</button>
     </form>
     </>
  )
}

export default ReachUs