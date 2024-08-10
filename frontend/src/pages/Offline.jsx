import React from 'react'
import { Detector, Online } from 'react-detect-offline'

const Offline = (props) => {
  return (
    <>
    <Detector render={( { online } ) => (
     onload ? props.children : <div className={`w-full h-full flex flex-col`}>
          <div className={`bg-black text-white px-3 py-5 min-h-[7cm] flex items-center justify-center`}>
               <h1 className={`text-3xl font-bold`}>German-resto: Connection Lost</h1>
          </div>
          <div className={`flex flex-col gap-3 px-3 py-6 text-lg text-center font-bold`}>
               <p>Please, open data or connect to a wi-fi</p>
          </div>
          <div className={`no-connection-icon`}></div>
     </div>
    )} />
    </>
  )
}

export default Offline