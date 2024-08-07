import React from 'react'
import Image from '../assets/Potage.webp'
import Image1 from '../assets/goat.jpg'
import Image2 from '../assets/koreanBread1.jpg'

const items = [
     {
          id: 1,
          image: Image1,
          title: "Title",
          desc: "prompt"
     },
     {
          id: 2,
          image: Image,
          title: "Title",
          desc: "prompt"
     },
     {
          id: 3,
          image: Image2,
          title: "Title",
          desc: "prompt"
     },
]

const Promise = () => {
  return (
     <>
     <h1 className={`text-3xl font-bold md:text-4xl`}><span className={`text-amber-500 text-3xl md:text-5xl`}>Our Promise </span>Creating Happy Morning</h1>
     <p>Our Journey</p>

     <div className={`mt-[2rem]`}>
          <h1 className={`text-5xl text-center font-bold stroke-black`}>Quality Ingredients</h1>
          <p className={`text-center text-md my-3`}>Premium choices only.</p>
          <div className={`grid gap-[1rem] md:flex md:items-center md:justify-center`}>
               {items.map((item) => (
                    <article key={item.id} className={`flex flex-col items-center`}>
                         <img src={item.image} alt={item.title} className={`w-full h-36 lg:h-44 rounded-3xl`} />
                         <h2 className={`font-semibold mt-1 text-xl`}>{item.title}</h2>
                         <p className={`text-gray-600 text-sm -mt-1`}>{item.desc}</p>
                    </article>
               ))}
          </div>
     </div>
     </>
  )
}

export default Promise