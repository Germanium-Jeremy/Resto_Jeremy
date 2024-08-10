import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductsContext'

const TopProds = () => {
     const { productsContext } = useContext(ProductContext)
  return (
     <div className={`text-black px-3 py-2 mb-10`}>
          <h2 className={`font-bold text-xl`}>Top Products</h2>
          <div className={`grid gap-3 max-[340px]:grid-cols-1 min-[340px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`}>
               {productsContext.map((product, index) => {
                    return (
                         <div className={`w-full h-[3cm] rounded-lg shadow-md shadow-gray-400`}>
                              <img src={`data: image/png;base64, ${product.images[0].data}`} alt="Product" className={`w-full h-full p-2`} />
                         </div>
                    )
               })}
          </div>
     </div>
  )
}

export default TopProds