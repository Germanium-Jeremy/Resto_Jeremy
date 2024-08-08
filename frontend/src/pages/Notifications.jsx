import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { NotificationContext } from '../components/contexts/Notifications'

const Notifications = () => {
  const { notificationsContext, noteLoading, noteLength, noteError } = useContext(NotificationContext)
  // const navigate = useNavigate()

  return (
    <div className={`py-3 px-[1rem] flex gap-[2rem] max-w-[760px]`}>
      {noteLoading ? (
        <div className={`flex flex-col gap-4 w-full`}>
          <div className={`w-full h-[2cm] rounded-md bg-gray-500 animate-pulse shadow-md shadow-gray-400`}></div>
          <div className={`w-full h-[2cm] rounded-md bg-gray-500 animate-pulse shadow-md shadow-gray-400`}></div>
          <div className={`w-full h-[2cm] rounded-md bg-gray-500 animate-pulse shadow-md shadow-gray-400`}></div>
          <div className={`w-full h-[2cm] rounded-md bg-gray-500 animate-pulse shadow-md shadow-gray-400`}></div>
        </div>
      ) : (
        <section className={`w-full`}>
          {noteLength > 0 ? notificationsContext.map((notification, index) => {
            return (
              <button className={`flex gap-3 bg-slate-200 hover:bg-slate-50 rounded-lg w-full px-1 py-1 my-2 items-center`} key={index}>
                <img src={Logo} alt="Image" className={`w-5 h-6 rounded-full`} />
                <div className={`flex flex-col text-left w-full`}>
                  <h2 className={`font-semibold text-sm`}>{notification.heading}</h2>
                  <p className={`font-light text-xs`}>{notification.message}</p>
                  <span className={`text-gray-800 text-[12px] text-right font-bold`}>{notification.dateOfMake}</span>
                </div>
              </button>
            )
          }) : (
            <div className={``}>
              <p className={`font-bold py-[.5rem] px-[.3rem] bg-slate-50`}>😔 No Notifications Yet</p>
            </div>
          )}
        </section>
      )}
    </div>
  )
}

export default Notifications