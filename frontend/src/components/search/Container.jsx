import React, { useContext, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { ProductContext } from '../contexts/ProductsContext'
import Placeholder from './Placeholder'

const Container = ({ setSearchShow }) => {
     const [searchQuery, setSearchQuery] = useState("");
     const [typed, setTyped] = useState(false);
     const { productsContext } = useContext(ProductContext);
     const [products, setProducts] = useState([]);

     const handleSubmit = (e) => {
          e.preventDefault()
     }

     function truncateText(text, maxLength) {
          if (text.length > maxLength) {
              return text.slice(0, maxLength) + '...';
          }
          return text;
      }
      

     const filterProducts = (e) => {
          const query = e.target.value;
          setSearchQuery(query);
          setTyped(true);

          const filteredProducts = productsContext.filter((product) =>
               product.keywords.some((keyword) => 
                    keyword.toLowerCase().includes(query.toLowerCase())
               )
          )
          setProducts(filteredProducts);
     }

  return (
     <div className={`flex flex-col items-center justify-center px-[1rem] py-[2rem] w-full`}>
          <button className={`fixed top-4 right-4 rounded-full bg-white text-gray-950 text-xl z-[1]`} onClick={() => setSearchShow(false)}><AiFillCloseCircle /></button>
          <form className={`text-black w-full sticky top-0 bg-blue-50 p-1 flex flex-col items-center`} onSubmit={handleSubmit}>
               <label htmlFor="search" className='block'>Search Here...</label>
               <input type="search" id='search' className={`outline-none border text-xs border-black rounded-md p-2 indent-3 capitalize w-full lg:w-4/5`} placeholder='search'
                    onChange={filterProducts} value={searchQuery} />
          </form>
          {typed && (
               <>
                    {products.length === 0 ? (
                         <p className={`text-black text-sm text-center p-1 my-3`}><span className={`font-bold text-md`}>No products match your search</span> : {truncateText(searchQuery, 20)}</p>
                    ) : (
                         <div className={`grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-3 w-full`}>
                              {products.map((product, index) => <Placeholder product={product} key={index} />)}
                         </div>
                    )}
               </>
          )}
     </div>
  )
}

export default Container