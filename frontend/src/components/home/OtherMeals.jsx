import React, { useEffect, useState } from 'react'
import axios from 'axios'

const OtherMeals = () => {

     const [products, setProducts] = useState([])
     useEffect(() => {
          // axios.get("https://resto-jeremy.vercel.app/localProducts").then(response => {
          axios.get("http://localhost:5174/localProducts").then(response => {
               setProducts(response.data.products)
          }).catch(error => {
               console.error("Error fetching Products: ", error.message)
          })
     }, [])

     return (
          <div className={`px-[1rem] py-[1rem] mb-[2rem]`}>
          <h1 className={`text-xl md:text-2xl text-center font-bold mb-[1rem]`}>We provide additional lunch and supper meal.</h1>
          <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3`}>
               {products.map((product, index) => {
                    let numImages = Math.floor(Math.random() * product.images.length)
                    return (
                         <div className={`w-full h-[4cm] rounded-xl bg-slate-50`}>
                              <img src={`data: image/png;base64, ${product.images[numImages].data}`} alt="" className={`w-full h-3/5`} />
                              <div className={`flex max-[340px]:flex-col justify-between items-center w-full px-[.3rem]`}>
                                   <p>Frw: {product.normalPrice}</p>
                                   <button className={`bg-amber-600 hover:bg-amber-500 text-white p-[.2rem] px-[.7rem] text-xl font-bold rounded-full max-[340px]:w-full max-[340px]:rounded-lg max-[340px]:p-0`}>+</button>
                              </div>
                         </div>
                    )
               })}
          </div>
     </div>
     )
}

export default OtherMeals