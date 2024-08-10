import React, { useContext, useState } from 'react'
import ReactImage from '../../assets/react.svg'
import User from './User'
import Orders from './Orders'
import Facts from './Facts'
import { Link, useLocation, Routes, Route } from 'react-router-dom'
import { FaUser , FaPaperclip, FaTextHeight} from 'react-icons/fa'
import TopProds from './TopProds'

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("User"))
  const mainDashLinks = [
    { id: 1, icon: <FaUser />, text: "User", link: "/dashboard/user" },
    { id: 2, icon: <FaPaperclip />, text: "Orders", link: "/dashboard/orders" },
    { id: 3, icon: <FaTextHeight />, text: "Fan Facts", link: "/dashboard/facts" },
  ]
  const navigate = useLocation()

  return (
    <div className={`text-white`}>
      <div className={`absolute h-[11cm] w-full bg-black`}></div>

      <div className={`flex justify-between px-2 py-6 relative`}>
        <div className={``}>
          <p className={`text-md`}>Hello {user.username}.</p>
          <p className={`font-bold`}>Order meals and enjoy them.</p>
        </div>
        <div className={`relative w-8 h-8 rounded-full border border-white overflow-hidden`}>
          <span className={`w-full h-full bg-gray-600 absolute opacity-30`}></span>
          <img src={ReactImage} alt={user.username} className={`w-full h-full bg-black`} />
        </div>
      </div>
      <div className={`relative flex justify-between px-5 text-black`}>
        {mainDashLinks.map((link, index) => {
          const isActive = location.pathname.startsWith(link.link)
          return (
            <Link to={link.link} key={index} className={`flex gap-1 text-sm rounded-2xl py-2 items-center px-2 ${isActive ? "bg-amber-400" : "bg-white"}`}>
              {link.icon}
              <span className={`max-[340px]:hidden min-[340px]:block]`}>{link.text}</span>
            </Link>
          )
        })}
      </div>
        <Routes>
          <Route path='/user' exact element={<User />} />
          <Route path='/orders' exact element={<Orders />} />
          <Route path='/facts' exact element={<Facts />} />
        </Routes>
        <TopProds />
    </div>
  )
}

export default Dashboard