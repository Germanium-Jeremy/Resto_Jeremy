import React from 'react'
import Image1 from '../assets/Potage.webp'

const Awards = () => {
  return (
     <div className={`px-[1rem] md:px-[3rem] my-6 md:flex gap-5 md:items-center mb-6`}>
          <div className='w-full'>
               <h1 className={`text-5xl font-bold md:text-4xl`}>Breakfast Awaits!</h1>
               <p className={`text-md text-gray-500`}>Taste the best breakfast.</p>
               <div className={`flex justify-between my-3`}>
                    <button className={`py-1 px-2 md:px-6 md:py-2 rounded-lg bg-amber-500 text-white shadow-sm hover:shadow-gray-500`}>Order Today</button>
                    <button className={`py-1 px-2 md:px-6 md:py-2 rounded-lg border border-black shadow-sm hover:shadow-gray-500`}>Explore More</button>
               </div>
          </div>
          <div className='w-full'>
               <img src={Image1} alt="Image" className={`rounded-3xl w-full h-40 md:h-52`} />
          </div>
     </div>
  )
}

export default Awards