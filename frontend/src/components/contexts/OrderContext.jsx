import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const OrderContext = createContext(null)

export const OrderProvider = ({ children }) => {
     const [currentOrder, setCurrentOrder] = useState(null)
     const [orders, setOrders] = useState([])
     const [recentOrders, setRecentOrders] = useState([])
     let productsCount = orders.length
     const user = JSON.parse(localStorage.getItem("User"))
     if (user) {
          useEffect(() => {
               // axios.post("http://localhost:5174/getCertainOrder", { userId: user._id}).then(response => {
               axios.post("https://resto-jeremy.vercel.app/getCertainOrder", { userId: user._id}).then(response => {
                    setRecentOrders(response.data)
               }).catch(error => {
                    console.log(error.message)
               })
          }, [])
     }

     const checkOrder = (orderCurr, fullOrders) => {
          for (let i = 0; i < fullOrders.length; i++) {
               if (fullOrders[i].id == orderCurr.id) {
                    return true
               }
          }
          return false
     }

     if (currentOrder) {
          if (checkOrder(currentOrder, orders) === true) {
               // nothis
          } else {
               setOrders(orders.push({...currentOrder}))
               setCurrentOrder(null)
          }
     }

     const removeOrder = (order, orders2=orders) => {
          let newArray = orders2.filter(prod => prod.id != order.id);
          setOrders(newArray)
          console.log(orders)
     }

     return (
          <OrderContext.Provider value={{ setCurrentOrder, orders, productsCount, removeOrder, setOrders, recentOrders }}>
               {children}
          </OrderContext.Provider>
     )
}