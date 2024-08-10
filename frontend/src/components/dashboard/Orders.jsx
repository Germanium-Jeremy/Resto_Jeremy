import React, { useContext } from 'react'
import { OrderContext } from '../contexts/OrderContext'
import { ProductContext } from '../contexts/ProductsContext'

const Orders = () => {
  const { recentOrders } = useContext(OrderContext)
  const { productsContext } = useContext(ProductContext)
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
    }
    return text;
  }
  
  return (
    <div className={`bg-white rounded-xl text-black relative shadow-md shadow-gray-600 mx-3 my-6 px-2 py-5 overflow-hidden`}>
      <h2 className={`font-bold text-lg mb-4`}>Recent Orders</h2>
      <div className={`grid gap-3 max-[340px]:grid-cols-1 min-[340px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7`}>
        {recentOrders.map((order, index) => {
          return (
            <div className={`w-full h-[5cm] rounded-md shadow shadow-gray-400 relative`} key={index}>
              <h3>Products:</h3>
              <ol className={`pl-5`}>
                {order.productsId.map((product, index) => {
                  return (
                    <li className={`list-disc`}>{ truncateText(product, 10) }</li>
                  )
                })}
              </ol>
              <span className={`absolute right-1 bottom-0`}>{order.dateOfMake}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Orders