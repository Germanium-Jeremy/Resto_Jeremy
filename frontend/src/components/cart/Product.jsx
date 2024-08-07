import React, { useContext, useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import { OrderContext } from '../contexts/OrderContext'

const Product = ({ data }) => {
     let numImages = Math.floor(Math.random() * data.images.length)
     const [productCount, setProductCount] = useState(1)
     const [cantAdd, setCantAdd] = useState(false)
     const [cantMinus, setCantMinus] = useState(false)
     const { removeOrder, orders, setOrders } = useContext(OrderContext)
     let total = data.normalPrice * productCount

     const increase = () => {
          setProductCount(productCount + 1)
          if (productCount == 39) {
               setCantAdd(true)
          } else {
               setCantAdd(false)
          }
     }
     const descrease = () => {
          setProductCount(productCount - 1)
          if (productCount == 1) {
               setCantMinus(true)
               removeOrder(data)
          } else {
               setCantMinus(false)
          }
     }
  return (
     <div className={`bg-slate-200 rounded-sm p-2 text-black flex justify-between items-center gap-3`}>
          <img src={`data: image/png;base64, ${data.images[numImages].data}`} alt="Image" className={`rounded-full h-8 w-8 bg-slate-800`} />
          <div className={`flex flex-col gap-1 text-xs`}>
               <p className={`font-bold text-sm`}>{data.name[0].substring(0, data.name[0].indexOf('.')).toUpperCase()}</p>
               <p className={``}>Frw:&nbsp;{total}</p>
          </div>
          <div className={`flex gap-2 items-center`}>
               <button className={`rounded-full bg-amber-500 hover:bg-amber-400 w-4 h-4 flex items-center justify-center font-bold p-[3px]`} onClick={cantMinus == true ? null : descrease}><FaMinus /></button>
               <span>{productCount}</span>
               <button className={`rounded-full w-4 h-4 flex items-center justify-center font-bold p-[3px] ${cantAdd == true ? "bg-gray-600" : "bg-amber-500 hover:bg-amber-400"}`} onClick={cantAdd == true ? null : increase}><FaPlus /></button>
          </div>
     </div>
  )
}

export default Product