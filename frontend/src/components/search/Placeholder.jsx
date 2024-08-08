import React, { useContext } from 'react'
import { OrderContext } from '../contexts/OrderContext';

const Placeholder = ({ product }) => {
     const { setCurrentOrder } = useContext(OrderContext)
     let numImages = Math.floor(Math.random() * product.images.length)
  return (
     <div className={`w-full h-[4cm] rounded-xl bg-slate-50`}>
          <img src={`data: image/png;base64, ${product.images[numImages].data}`} alt="" className={`w-full h-3/5`} />
          <div className={`flex max-[340px]:flex-col justify-between items-center w-full px-[.3rem]`}>
               <p className={`text-black text-xs`}>Frw: {product.normalPrice}</p>
               <button className={`bg-amber-600 hover:bg-amber-500 text-white p-[.2rem] px-[.7rem] text-xl font-bold rounded-full max-[340px]:w-full max-[340px]:rounded-lg max-[340px]:p-0`} onClick={() => setCurrentOrder(product)}>+</button>
          </div>
     </div>
  )
}

export default Placeholder