import React from 'react'
import { Link } from 'react-router-dom'

const MissingBody = () => {
  return (
     <div className='bg-auth-img1 flex flex-col'>
          <div className={`px-[2rem] py-[1rem] bg-black text-3xl font-bold text-white text-center`}>
               <p className={`text-xl py-[1rem]`}>German-resto: Page Not Found</p>
               <span>404</span>
          </div>
          <div className={`py-[1rem] px-[.5rem] text-black font-bold`}>
               <h2 className={`text-md text-center mb-5`}>The Page you are looking for is missing or has complications</h2>
               <div className={`flex px-3 justify-between text-xl text-white`}>
                    <Link to={'/'} className={`px-[1rem] py-[.3rem] bg-amber-600 hover:bg-amber-500 border-2 border-black rounded-md hover:border-white`}>Home</Link>
                    <Link to={'/'} className={`px-[1rem] py-[.3rem] bg-amber-600 hover:bg-amber-500 border-2 border-black rounded-md hover:border-white`}>Back</Link>
               </div>
          </div>
     </div>
  )
}

export default MissingBody