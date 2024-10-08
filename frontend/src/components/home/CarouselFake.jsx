import React, { useEffect, useState, useContext } from 'react'
import Slider from 'react-slick'
import { ProductContext } from '../contexts/ProductsContext';
import { OrderContext } from '../contexts/OrderContext';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselFake = () => {
     const { productsContext, imagesLoading, imageErrors } = useContext(ProductContext)
     const { setCurrentOrder } = useContext(OrderContext)
     const settings = {
          dots: true, infinite: true, speed: 400, autoplay: true, autoplaySpeed: 3000, slidesToScroll: 1,
          responsive: [{
               breakpoint: 1740,
               settings: { slidesToShow: 5, slidesToScroll: 4, autoplay: true, autoplaySpeed: 3000 },
          },{
               breakpoint: 1340,
               settings: { slidesToShow: 4, slidesToScroll: 3, autoplay: true, autoplaySpeed: 3000 },
          },{
               breakpoint: 1024,
               settings: { slidesToShow: 3, slidesToScroll: 2, autoplay: true, autoplaySpeed: 3000 },
          },{
               breakpoint: 824,
               settings: { slidesToShow: 2, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000 },
          },{
               breakpoint: 600,
               settings: { slidesToShow: 1, autoplay: true, autoplaySpeed: 3000 },
          },]
     }

     return (
     <div className={`px-[1.3rem] py-[1rem] h-full w-full`}>
          {imagesLoading == true ? (
               <div className={`w-full min-h-[5cm] bg-gray-500 animate-pulse rounded-md`}></div>
          ): imageErrors ? (
               <div className={`w-full max-sm:min-h-[4cm] sm:min-h-[5cm] lg:min-h-[6cm] 2xl:min-h-[7cm] bg-gray-400 rounded-md flex items-center justify-center`}>
                    Images not available!
               </div>
          ) : (
               <Slider {...settings}>
                    {productsContext.map((product, index) => {
                         let numImages = Math.floor(Math.random() * product.images.length)
                         return (
                              <div className={`bg-slate-50 rounded-md w-full h-full flex flex-col items-center my-4 hover:transition-shadow`} key={index}>
                                   <img src={`data: image/png;base64, ${product.images[numImages].data}`} alt={product.name[0]} className={`w-full h-[5cm] max-[340px]:h-[4cm]`} loading='lazy' />
                                   <div className={`px-[1.5rem] py-[1rem] w-full`}>
                                        <p className={`font-bold text-center mb-3 md:text-sm text-xl`}>Frw: {product.normalPrice}</p>
                                        <button className='px-[1rem] py-[.6rem] rounded-lg uppercase bg-amber-600 hover:bg-amber-500 text-white text-xs w-full' onClick={() => setCurrentOrder(product)}>Add to Cart</button>
                                   </div>
                              </div>
                         )
                    })}
               </Slider>
          )}
     </div>
     )
}

export default CarouselFake