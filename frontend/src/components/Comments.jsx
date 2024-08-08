import React, { useContext } from 'react'
import { ReviewContext } from './contexts/ReviewContext'
import Slider from 'react-slick'
import Image1 from '../assets/react.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comments = () => {
     const { comments, commentsLoading } = useContext(ReviewContext)
     const settings = {
          dots: true, infinite: true, speed: 400, slidesToScroll: 1,
          responsive: [{
               breakpoint: 1740,
               settings: { slidesToShow: 5, slidesToScroll: 4 },
          },{
               breakpoint: 1340,
               settings: { slidesToShow: 4, slidesToScroll: 3 },
          },{
               breakpoint: 1024,
               settings: { slidesToShow: 3, slidesToScroll: 2 },
          },{
               breakpoint: 824,
               settings: { slidesToShow: 2, slidesToScroll: 1 },
          },{
               breakpoint: 600,
               settings: { slidesToShow: 1 },
          },]
     }

  return (
     <>
     <h1 className={`text-center text-xl font-bold`}>Top Reviews</h1>
     {commentsLoading ? (
          <div className={`w-full h-[4cm] bg-gray-600 rounded-md shadow-md shadow-gray-600 animate-pulse`}></div>
     ) : (
          <Slider {...settings}>
               {comments.map((comment, index) => {
                    return (
                         <div className={`px-3 py-2 rounded-md bg-slate-50 shadow-md shadow-slate-700 min-h-[5cm]`} key={index}>
                              <div className={`flex h-full mb-3`}>
                                   <div className={`w-10 h-10 rounded-full relative overflow-hidden bg-black mr-3`}>
                                        <img src={Image1} alt="User" className={`w-full h-full`} loading='lazy' />
                                        <span className={`bg-gray-500 absolute animate-pulse w-full h-full`}></span>
                                   </div>
                                   <p className={`text-md font-bold ml-3`}>{comment.username}</p>
                              </div>
                              <p className={`text-sm font-semibold my-2 h-full text-center`}>{comment.comment}</p>
                         </div>
                    )
               })}
          </Slider>
     )}
     
     </>
  )
}

export default Comments