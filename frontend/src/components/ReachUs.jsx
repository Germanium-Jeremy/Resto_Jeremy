import React from 'react'
import Image1 from '../assets/Potage.webp'

const ReachUs = () => {
  return (
     <div className={`mx-[1rem] md:mx-[3rem] my-20 flex items-center justify-center md:gap-[2rem] md:border md:border-black`}>
          <div className={`max-sm:hidden w-full h-full flex`}>
               <img src={Image1} alt="Image" className={`h-[58vh] lg:h-[70vh] w-full`} />
          </div>
          <form className={`w-full md:px-5`}>
               <h2 className={`text-4xl font-bold`}>Reach Out</h2>
               <p className={`text-xl`}>We're here to chat.</p>
               <div>
                    <div className='mt-3 mb-3 lg:mb-2 lg:mt-2 w-full'>
                         <label htmlFor="name">Full Name</label>
                         <input type="text" id="name" className={`border border-black px-3 py-2 outline-none rounded-md w-full`} placeholder='Enter name' required />
                    </div>
                    <div className='mt-3 mb-3 lg:mb-2 lg:mt-2 w-full'>
                         <label htmlFor="email">Email Address</label>
                         <input type="email" id="email" className={`border border-black px-3 py-2 outline-none rounded-md w-full`} placeholder='Enter email' required />
                    </div>
                    <div className='mt-3 mb-3 lg:mb-2 lg:mt-2 w-full'>
                         <label htmlFor="message">Your Query</label>
                         <textarea name="" id="message" className={`border border-black px-3 py-2 outline-none rounded-md w-full max-h-32`} placeholder='Enter message' required></textarea>
                    </div>
               </div>
               <button className={`px-4 py-2 rounded-md bg-amber-500 text-white shadow hover:shadow-gray-600`}>Submit</button>
          </form>
     </div>
  )
}

export default ReachUs