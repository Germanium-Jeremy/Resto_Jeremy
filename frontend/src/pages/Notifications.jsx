import React from 'react'
import Image1 from '../assets/Potage.webp'
import SideDashMenu from '../components/SideDashMenu'

const Notifications = () => {
  return (
    <div className={`py-5 px-[2rem] flex gap-[2rem]`}>
      <SideDashMenu />
      <section className={`w-full`}>
        <div className={`flex gap-3 bg-slate-200 rounded-lg px-5 py-3`}>
          <img src={Image1} alt="Image" className={`w-10 h-10 rounded-full`} />
          <div className={`flex flex-col`}>
            <h2 className={`font-semibold text-lg`}>Notification heading</h2>
            <p className={`font-light text-xs`}>Notification Message</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Notifications