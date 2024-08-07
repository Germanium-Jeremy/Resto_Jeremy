import React from 'react'
import Image1 from '../assets/Potage.webp'
import Image2 from '../assets/potatoes5.jpg'
import Image3 from '../assets/rabbit.jpg'
import Image4 from '../assets/rice.webp'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
     <>
     <div className={`flex flex-col justify-center max-sm:items-center w-full text-white`}>
          <h1 className={`text-3xl font-bold md:text-4xl`}>DELIGHT<span className={`text-amber-500`}>FAST</span></h1>
          <p className={`text-sm text-gray-300 -mt-1`}>Savor our breakfasts.</p>
          <Link to={'/home'} className={`w-full rounded-md bg-amber-500 p-2 shadow-sm hover:shadow-gray-500 md:my-5 text-center`}>Order Now</Link>
     </div>
     <div className={`flex flex-col xl:flex-row max-sm:mt-5 mt-8 gap-2 w-full xl:py-5`}>
          <img src={Image1} alt="Image 1" className={`w-full h-44 rounded-2xl lg:h-52 xl:w-40 xl:h-40 bg-gray-500`} loading='lazy' />
          <div className={`flex flex-col gap-4 md:gap-2 md:flex-row xl:flex-row`}>
               <div className={`flex md:flex-col flex-row gap-3 md:gap-2 md:w-full md:h-full`}>
                    <img src={Image3} alt="Image 2" className={`w-full h-[5rem] md:h-1/3 rounded-2xl xl:w-40 xl:h-[4.7rem] bg-gray-500`} loading='lazy' />
                    <img src={Image4} alt="Image 3" className={`w-full h-[5rem] md:h-1/3 rounded-2xl xl:w-40 xl:h-[4.7rem] bg-gray-500`} loading='lazy' />
               </div>
               <img src={Image2} alt="Image 4" className={`w-full h-48 rounded-2xl md:w-1/2 md:h-2/3 max-sm:hidden xl:w-40 xl:h-40 bg-gray-500`} loading='lazy' />
          </div>
     </div>
     </>
  )
}

export default Hero