import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='px-2 md:px-5 border border-black text-white bg-black'>
      <div className={`border-b-2 border-white py-2 md:flex md:justify-between md:items-center`}>
        <div>
          <h2 className={`text-2xl font-bold`}>Delight Fast</h2>
          <div className={`flex gap-4 text-xs`}>
            <Link to={'/'} className={`font-semibold`}>Our Story</Link>
            <Link to={'/'} className={`font-semibold`}>Meals</Link>
            <Link to={'/'} className={`font-semibold`}>Social Media</Link>
          </div>
        </div>
        <div className={`my-2`}>
          <h2 className={`text-end md:text-start`}>Newsletter Signup</h2>
          <form className='flex gap-2'>
            <input type="email" placeholder='Enter your email' className={`border border-white px-3 py-1 outline-none w-full text-black`} />
            <button className={`border border-white w-3/5 shadow hover:shadow-white`}>Join Now</button>
          </form>
          <Link to={'/'}>Agree to privacy policy</Link>
        </div>
      </div>
      <div className={`flex max-sm:flex-col my-3 md:justify-between md:items-center`}>
        <div className={`flex gap-2 text-xs`}>
          <Link to={'/'}>Services Terms</Link>
          <Link to={'/'}>Cookie Preference</Link>
        </div>
        <div className={`text-center font-semibold my-3`}>
          &copy;2024 DelightFast. All right reserved.
        </div>
      </div>
    </footer>
  )
}
