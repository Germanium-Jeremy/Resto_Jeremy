import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { FaBell, FaSignInAlt, FaUserAlt, FaBuffer, FaBars, FaSearch, FaSadCry } from 'react-icons/fa'
import Profile from '../assets/react.svg'
import Logo from '../assets/logo.png'
import { NotificationContext } from './contexts/Notifications';

const Header = () => {
  const [menuShow, setMenuShow] = useState(false)
  const setFalse = () => setMenuShow(false)
  const { notificationsContext } = useContext(NotificationContext)
  const changeMenu = () => menuShow == true ? setMenuShow(false) : setMenuShow(true)
  const user = JSON.parse(localStorage.getItem("User"))

  return (
    <nav className='fixed top-0 right-0 left-0 bg-black text-white px-[2rem] max-[450px]:px-3 py-3 flex items-center justify-between z-[5]'>
      <Link to={'/'}>
        <h1 className={`text-2xl font-bold max-sm:hidden`}>DELIGHT<span className={`text-amber-500`}>FAST</span></h1>
        <span className={`sm:hidden text-3xl font-bold invert`}><img src={Logo} alt="Delight Fast" title='Delight Fast' /></span>
      </Link>
      <div className={`flex gap-5 max-[350px]:gap-3 max-sm:hidden`}>
        <Link to={'/home'} className='flex justify-center items-center hover:text-amber-500'>
          <span className={`max-sm:hidden`}>Home</span>
        </Link>
        <Link className='flex justify-center items-center hover:text-amber-500'>
          <span className={`max-sm:hidden`}>Diet</span>
        </Link>
        <Link className='flex justify-center items-center hover:text-amber-500'>
          <span className={`max-sm:hidden`}>Drinks</span>
        </Link>
      </div>
      {!user ? (<div className={`flex gap-[1rem] max-[350px]:gap-2 max-sm:hidden`}>
        <Link to={'/auth'} className={`px-[1rem] max-[350px]:px-2 py-1 rounded-md bg-black font-bold shadow-sm hover:shadow-white hover:bg-gray-950`}>
          <span className={`max-sm:hidden`}>Log in</span>
          <span className={`md:hidden`}><FaSignInAlt /></span>
        </Link>
        <Link to={'/auth'} className={`px-[1rem] max-[350px]:px-2 py-1 rounded-md bg-amber-500 font-bold shadow-sm hover:shadow-white`}>
          <span className={`max-sm:hidden`}>Sign up</span>
          <span className={`md:hidden`}><FaUserAlt /></span>
        </Link>
      </div>) : (
        <div className={`flex gap-[1rem] items-center max-sm:hidden`}>
          <button className={`text-md`}><FaSearch /></button>
          <Link to={'/notifications'} className={`relative`}>
          {notificationsContext <= 0 ? null : (
            <span className={`absolute h-3 w-3 rounded-full bg-amber-500 p-1 border border-white -top-2 -right-1`}>
              {notificationsContext <= 0 ? null : notificationsContext <= 9 ? notificationsContext : '9+'}
            </span>
          )}
            <FaBell />
          </Link>
          <p className={`max-sm:hidden`}>{user.username}</p>
          <img src={Profile} alt="Profile" className='rounded-full h-10 w-10 border border-white p-1 max-sm:hidden' />
        </div>
      )}

      <div className={`flex gap-4 md:hidden`}>
        {user && (
          <button className={`text-md`}><FaSearch /></button>
        )}
        {user && (
          <Link to={'/notifications'} className={`relative`}>
            {notificationsContext <= 0 ? null : (
              <span className={`absolute h-[1rem] w-[1.2rem] rounded-full bg-amber-500 border border-white -top-2 -right-2 text-xs flex items-center justify-center`}>
                {notificationsContext <= 0 ? null : notificationsContext <= 9 ? notificationsContext : '9+'}
              </span>
            )}
            <FaBell />
          </Link>
        )}
        <button className={``} onClick={changeMenu}><FaBars /></button>
      </div>
      <nav className={`fixed top-0 bottom-0 left-0 w-1/2 max-sm:w-3/4 md:hidden bg-black p-5 flex flex-col z-[2] ${menuShow == true ? "left-0 transition-all" : "left-[-100%] transition-all"}`}>
        <div className={`flex flex-col gap-2`}>
          <Link to={'/home'} onClick={setFalse} className={`px-2 py-1 rounded-md shadow hover:shadow-white`}>Home</Link>
          <Link to={'/'} onClick={setFalse} className={`px-2 py-1 rounded-md shadow hover:shadow-white`}>Meals</Link>
          <Link to={'/'} onClick={setFalse} className={`px-2 py-1 rounded-md shadow hover:shadow-white`}>Drinks</Link>
          {user && <Link to={'/'} onClick={setFalse} className={`px-2 py-1 rounded-md shadow hover:shadow-white`}>Account</Link>}
          {user && <Link to={'/'} onClick={setFalse} className={`px-2 py-1 rounded-md shadow hover:shadow-white`}>Settings</Link>}
        </div>
        {!user && (
          <div className={`my-6 flex justify-between`}>
            <Link to={'/auth'} onClick={setFalse} className={`px-3 py-1 rounded shadow hover:shadow-white`}>Login</Link>
            <Link to={'/auth'} onClick={setFalse} className={`px-3 py-1 rounded shadow bg-amber-500 hover:shadow-white`}>Signup</Link>
          </div>
        )}
      </nav>
    </nav>
  )
}

export default Header