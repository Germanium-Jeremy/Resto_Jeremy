import React, { useState, useEffect, useContext } from 'react'
import Image1 from '../assets/Potage.webp'
import Logo from '../assets/logo.png'
import { NotificationContext } from '../components/contexts/Notifications'
import axios from 'axios'
// import SideDashMenu from '../components/SideDashMenu'

const Notifications = () => {
  const [notifications, setNotifications] = useState([])
  const { setNotificationsContext } = useContext(NotificationContext)
  const userId = toString(JSON.parse(localStorage.getItem("User"))._id)

  // console.log(notifications)
  useEffect(() => {
    // axios.post("http://localhost:5174/notifications", { userId: userId}).then(response => {
    axios.post("https://resto-jeremy.vercel.app/notifications", { userId: userId}).then(response => {
      setNotifications(response.data)
      setNotificationsContext(response.data.length)
    }).catch(error => {
      console.log(error.message)
    })
  }, [])

  return (
    <div className={`py-3 px-[1rem] flex gap-[2rem]`}>
      <section className={`w-full`}>
        {notifications.length > 0 ? notifications.map((notification, index) => {
          return (
            <button className={`flex gap-3 bg-slate-200 hover:bg-slate-50 rounded-lg w-full px-2 py-2 my-3 items-center`} key={index}>
              <img src={Logo} alt="Image" className={`w-6 h-8 rounded-full`} />
              <div className={`flex flex-col text-left`}>
                <h2 className={`font-semibold text-lg`}>{notification.heading}</h2>
                <p className={`font-light text-xs`}>{notification.message}</p>
                <span></span>
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