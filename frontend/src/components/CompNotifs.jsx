import React, { useState, useContext } from 'react'
import Logo from '../assets/logo.png'
import { NotificationContext } from '../components/contexts/Notifications'

const CompNotifs = () => {
     const { notificationsContext } = useContext(NotificationContext)
     const { noteLength } = useContext(NotificationContext)

  return (
     <div className={`py-2 px-[.8rem] flex gap-[2rem] max-w-[560px] bg-black fixed bottom-0 right-0 rounded-lg shadow-lg max-h-[70%] overflow-y-auto transition-all`}>
          <section className={`w-full`}>
               {noteLength > 0 ? notificationsContext.map((notification, index) => {
                    return (
                    <button className={`flex gap-3 bg-gray-950 hover:bg-slate-900 rounded-lg w-full px-1 py-1 my-3 items-center`} key={index}>
                         <img src={Logo} alt="Image" className={`w-4 h-4 rounded-full invert`} />
                         <div className={`flex flex-col text-left w-full`}>
                              <h2 className={`font-semibold text-xs`}>{notification.heading}</h2>
                              <p className={`font-light text-[12px] mb-1`}>{notification.message}</p>
                              <span className={`text-gray-300 text-[9px] text-right font-bold`}>{notification.dateOfMake}</span>
                         </div>
                    </button>
                    )
                    }) : (
                    <div className={``}>
                         <p className={`font-bold py-[.5rem] px-[.3rem] bg-slate-950`}>😔 No Notifications Yet</p>
                    </div>
               )}
          </section>
   </div>
  )
}

export default CompNotifs