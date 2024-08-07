import { createContext, useContext, useEffect, useState } from "react";

export const OrderContext = createContext(null)

export const OrderProvider = ({ children }) => {
     const [currentOrder, setCurrentOrder] = useState(null)
     const [orders, setOrders] = useState([])
     let productsCount = orders.length

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
          <OrderContext.Provider value={{ setCurrentOrder, orders, productsCount, removeOrder, setOrders }}>
               {children}
          </OrderContext.Provider>
     )
}