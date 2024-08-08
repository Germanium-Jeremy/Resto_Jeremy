import React, { useEffect, useState, useContext } from 'react'
import { ProductContext } from '../contexts/ProductsContext';
import { OrderContext } from '../contexts/OrderContext';

const OtherMeals = () => {
     const { productsContext, imagesLoading, imageErrors } = useContext(ProductContext)
     const { setCurrentOrder } = useContext(OrderContext)

     return (
          <>
          <h1 className={`text-xl md:text-2xl text-center font-bold mb-[1rem]`}>We provide additional lunch and supper meal.</h1>
          {imagesLoading == true ? (
               <div className={`w-full min-h-[5cm] bg-gray-400 animate-pulse rounded-md`}></div>
          ) : imageErrors == true ? (
               <div className={`w-full max-sm:min-h-[4cm] sm:min-h-[5cm] lg:min-h-[6cm] 2xl:min-h-[7cm] bg-gray-400 rounded-md flex items-center justify-center`}>
                    Images not available!
               </div>
          ) : (
               <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3`}>
                    {productsContext.map((product, index) => {
                         let numImages = Math.floor(Math.random() * product.images.length)
                         return (
                              <div className={`w-full h-[4cm] rounded-xl bg-slate-50`} key={index}>
                                   <img src={`data: image/png;base64, ${product.images[numImages].data}`} alt="" className={`w-full h-3/5`} />
                                   <div className={`flex max-[340px]:flex-col justify-between items-center w-full px-[.3rem]`}>
                                        <p className={`text-sm`}>Frw: {product.normalPrice}</p>
                                        <button className={`bg-amber-600 hover:bg-amber-500 text-white p-[.2rem] px-[.7rem] text-xl font-bold rounded-full max-[340px]:w-full max-[340px]:rounded-lg max-[340px]:p-0`} onClick={() => setCurrentOrder(product)}>+</button>
                                   </div>
                              </div>
                         )
                    })}
               </div>
          )}
     </>
     )
}

export default OtherMeals