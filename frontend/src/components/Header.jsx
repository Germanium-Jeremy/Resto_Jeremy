import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBell, FaSignInAlt, FaUserAlt, FaBuffer, FaBars, FaSearch, FaSadCry } from 'react-icons/fa'
import Profile from '../assets/react.svg'
import Logo from '../assets/logo.png'
import { NotificationContext } from './contexts/Notifications';
import CompNotifs from './CompNotifs';
import Container from './search/Container';

const Header = () => {
  const [menuShow, setMenuShow] = useState(false)
  const [seeNotifications, setSeeNotifications] = useState(false)
  const setFalse = () => setMenuShow(false)
  const { notificationsContext } = useContext(NotificationContext)
  const changeMenu = () => menuShow == true ? setMenuShow(false) : setMenuShow(true)
  const user = JSON.parse(localStorage.getItem("User"))
  const [searchShow, setSearchShow] = useState(false)

  return (
    <nav className='fixed top-0 right-0 left-0 bg-black text-white px-[2rem] max-[450px]:px-3 py-1 flex items-center justify-between z-[5]'>
      {searchShow && (
        <motion.div className={`fixed top-0 right-0 left-0 bottom-0 bg-blue-50 z-[2] overflow-y-auto`}
          initial={{top: "-100%"}} animate={{top: 0}} exit={{top: "-100%"}} transition={{duration: 0.1, delay: 0.2}}>
          <Container setSearchShow={setSearchShow} />
        </motion.div>
      )}
      <Link to={'/'}>
        <h1 className={`text-lg font-bold max-sm:hidden`}>DELIGHT<span className={`text-amber-500`}>FAST</span></h1>
        <span className={`sm:hidden text-3xl font-bold invert`}><img src={Logo} alt="Delight Fast" title='Delight Fast' /></span>
      </Link>
      <div className={`flex gap-5 max-[350px]:gap-3 max-sm:hidden`}>
        <Link to={'/home'} className='flex justify-center items-center hover:text-amber-500'>
          <span className={`max-sm:hidden text-xs`}>Home</span>
        </Link>
        <Link className='flex justify-center items-center hover:text-amber-500'>
          <span className={`max-sm:hidden text-xs`}>Diet</span>
        </Link>
        <Link className='flex justify-center items-center hover:text-amber-500'>
          <span className={`max-sm:hidden text-xs`}>Drinks</span>
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
          <button className={`text-xs`}><FaSearch /></button>
          <button className={`relative text-xs`} onClick={() => setSeeNotifications(seeNotifications == true ? false : true)}>
          {notificationsContext <= 0 ? null : (
            <span className={`absolute h-2 w-2 rounded-full bg-amber-500 p-1 border border-white -top-1 -right-1`}>
            </span>
          )}
            <FaBell />
          </button>
          <p className={`max-sm:hidden text-xs`}>{user.username}</p>
          <img src={Profile} alt="Profile" className='rounded-full h-6 w-6 border border-white p-1 max-sm:hidden' />
        </div>
      )}

      <div className={`flex gap-4 md:hidden`}>
        {user && (
          <button className={`text-md`} onClick={() =>setSearchShow(true)}><FaSearch /></button>
        )}
        {user && (
          <Link to={'/notifications'} className={`relative`}>
            {notificationsContext <= 0 ? null : (
              <span className={`absolute h-3 w-3 p-1 rounded-full bg-amber-500 border border-white -top-1 -right-1`}>
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
      {seeNotifications && <CompNotifs />}
    </nav>
  )
}

export default Header