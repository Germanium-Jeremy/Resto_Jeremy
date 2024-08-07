import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import Product from './Product'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ProductCart = ({ products, setViewCart, viewCart }) => {
     var user = JSON.parse(localStorage.getItem("User"))
     const navigate = useNavigate()

     const note = async (heading) => {
          const userId = JSON.parse(localStorage.getItem("User"))._id
          const name = JSON.parse(localStorage.getItem("User")).username

          let productsNames = []
          products.forEach(product => {
               productsNames.push(product.name[0].substring(0, product.name[0].indexOf('.')).toUpperCase())
          });
          const message = name + ", You have Ordered this products: " + productsNames.join(', ')

          // axios.post("http://localhost:5174/createNotification", { userId: userId, productId: "", heading: heading, message: message, longMessage: "", dateOfMake: ''}).then(response => {
          axios.post("https://resto-jeremy.vercel.app/createNotification", { userId: userId, productId: "", heading: heading, message: message, longMessage: "", dateOfMake: ''}).then(response => {
               console.log(response.data.message)
          }).catch(error => {
               console.error(error.message)
          })
     }

     const makeOrder = (e) => {
          e.preventDefault()

          if (user == null || user == undefined) {
               toast.warn("Please, Login First")
               setViewCart(false)
               setTimeout(() => {
                    navigate('/auth')
               }, 2000);
          }

          let productsIds = []
          products.forEach(product => {
               productsIds.push(product.id)
          });

          // axios.post("http://localhost:5174/orderProduct", { productsId: productsIds, userId: user._id, quantity: products.length }).then(response => {
          axios.post("https://resto-jeremy.vercel.app/orderProduct", { productsId: productsIds, userId: user._id, quantity: products.length }).then(response => {
               console.log(response.data)
               note(response.data.message)
          }).catch(error => {
               console.error(error)
               toast.warn(error.response.data)
          })
     }

  return (
     <div className={`fixed overflow-y-auto z-[5] bg-gradient rounded-md w-52 shadow-md shadow-black pb-1 ${viewCart == true ? "top-4 right-0" : "-top-[100%] -right-[100%]"} transition-all`}>
          <button className={`absolute right-1 top-1 text-red-700 text-lg`} onClick={() => setViewCart(false)}><AiFillCloseCircle /></button>
          <div className='p-2 flex flex-col gap-2 w-full h-full'>
               {products.map((order) => {
                    return (<Product data={order} key={order.id} />)
               })}
          </div>
          <form className={`px-2`} onSubmit={makeOrder}>
               <button type='submit' className={`w-full rounded-md bg-[#502]`}>Buy</button>
          </form>
     </div>
  )
}

export default ProductCart