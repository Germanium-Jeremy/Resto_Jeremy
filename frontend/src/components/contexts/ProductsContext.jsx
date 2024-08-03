import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const ProductContext = createContext(null);

export const ProductsProvider = ({ children }) => {
     const [productsContext, setProductContext] = useState([]);
     const [imagesLoading, setImagesLoading] = useState(true)
     const [imageErrors, setImageError] = useState(false)

     useEffect(() => {
          axios.get("http://localhost:5174/localProducts").then(response => {
          // axios.get("https://resto-jeremy.vercel.app/localProducts").then(response => {
               setProductContext(response.data.products)
               setImagesLoading(false)
          }).catch(error => {
               setImagesLoading(false)
               setImageError(true)
               console.log(error.message)
          })
        }, [])

     return (
          <ProductContext.Provider value={{ productsContext, setProductContext, imagesLoading, imageErrors }}>
               {children}
          </ProductContext.Provider>
     )
}
