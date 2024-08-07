import React, { useContext, useState } from 'react'
import CartImage from '../../assets/cart1.png'
import ProductCart from './ProductCart'
import { OrderContext } from '../contexts/OrderContext'

const Cart = () => {
     const { orders, productsCount } = useContext(OrderContext)
     const [viewCart, setViewCart] = useState(false)

     return (
          <div className={`fixed w-16 md:w-20 h-10 md:h-14 bg-gradient rounded-lg sm:rounded-xl md:rounded-2xl flex flex-col items-center z-10 ${viewCart == true ? "-top-[100%] -right-[100%]" : "top-12 right-2 md:right-5 lg:right-10"} transition-all`}>
               <span className={`bg-white w-4 h-4 rounded-xl absolute -left-1 -top-1 text-amber-600 flex justify-center items-center`}>{productsCount}</span>
               <img src={CartImage} alt="Cart" className={`w-8 h-6 md:w-10 md:h-8`} />
               <button className={`py-1 rounded-xl bg-[#502] hover:bg-[#603] hover:shadow-sm shadow-white text-[12px] md:text-xs w-full`} onClick={() => setViewCart(true)}>Purchase</button>
               <ProductCart products={orders} setViewCart={setViewCart} viewCart={viewCart} />
          </div>
     )
}

export default Cart