import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { NotificationContext } from '../components/contexts/Notifications'

const Notifications = () => {
  const { notificationsContext } = useContext(NotificationContext)
  const { noteLength } = useContext(NotificationContext)
  const navigate = useNavigate()

  return (
    <div className={`py-3 px-[1rem] md:${navigate('/')} flex gap-[2rem] max-w-[760px] bg-gray-50`}>
      <section className={`w-full`}>
        {noteLength > 0 ? notificationsContext.map((notification, index) => {
          const dateNote = notification.createdAt
          const nowDate = Date()
          return (
            <button className={`flex gap-3 bg-slate-200 hover:bg-slate-50 rounded-lg w-full px-2 py-2 my-3 items-center`} key={index}>
              <img src={Logo} alt="Image" className={`w-6 h-8 rounded-full`} />
              <div className={`flex flex-col text-left`}>
                <h2 className={`font-semibold text-lg`}>{notification.heading}</h2>
                <p className={`font-light text-xs`}>{notification.message}</p>
                <span className={`text-gray-800 text-xs text-center font-bold`}>{dateNote}</span>
              </div>
            </button>
          )
        }) : (
          <div className={``}>
            <p className={`font-bold py-[.5rem] px-[.3rem] bg-slate-50`}>😔 No Notifications Yet</p>
          </div>
        )}
      </section>
    </div>
  )
}

export default Notifications