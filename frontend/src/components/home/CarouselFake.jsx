import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick'

const CarouselFake = () => {
     const [products, setProducts] = useState([])
     useEffect(() => {
          axios.get("https://resto-jeremy.vercel.app/localProducts").then(response => {
          // axios.get("http://localhost:5174/localProducts").then(response => {
               setProducts(response.data.products)
          }).catch(error => {
               console.error("Error fetching Products: ", error.message)
          })
     }, [])

     return (
     <div className={`px-[1rem] py-[1rem]`}>
          <div className={``}>
               {products.map((product, index) => {
                    let numImages = Math.floor(Math.random() * product.images.length)
                    return (
                         <div className={`bg-slate-50 rounded-md w-full h-full flex flex-col items-center my-4 hover:transition-shadow`} key={index}>
                              <img src={`data: image/png;base64, ${product.images[numImages].data}`} alt={product.name[0]} className={`w-full h-full`} />
                              <div className={`px-[1.5rem] py-[1rem] w-full`}>
                                   <p className={`font-bold text-center mb-3 text-xl`}>Frw: {product.normalPrice}</p>
                                   <button className='px-[1rem] py-[.6rem] rounded-lg uppercase bg-amber-600 hover:bg-amber-500 text-white w-full'>Add to Cart</button>
                              </div>
                         </div>
                    )
               })}
          </div>
     </div>
     )
}

export default CarouselFake