import React, { useContext } from 'react'
import Image2 from '../assets/banana.png'
import { Link } from 'react-router-dom'

const Awards = () => {
  return (
     <>
     <div className='w-full'>
          <h1 className={`text-5xl font-bold md:text-4xl`}>Breakfast Awaits!</h1>
          <p className={`text-md text-gray-500`}>Taste the best breakfast.</p>
          <div className={`flex justify-between my-3`}>
               <Link to={'/home'} className={`py-1 px-2 md:px-4 md:py-2 rounded-lg bg-amber-500 text-white shadow-sm hover:shadow-gray-500`}>Order Today</Link>
               <Link to={'/diet'} className={`py-1 px-2 md:px-4 md:py-2 rounded-lg border border-black shadow-sm hover:shadow-gray-500`}>Explore More</Link>
          </div>
     </div>
     <div className='w-full relative'>
          <div className={`w-full h-40 md:h-52 rounded-3xl bg-gray-500 animate-pulse absolute opacity-25 -z-[1]`}></div>
          <img src={Image2} alt="Image" className={`rounded-3xl w-full h-40 md:h-52`} loading='lazy' />
     </div>
     </>
  )
}

export default Awards