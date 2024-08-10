import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa'

const User = () => {
     const logedUser = JSON.parse(localStorage.getItem("User"))
     const [editEmail, setEditEmail] = useState(logedUser.email)
     const [editName, setEditName] = useState(logedUser.username)
     const [editTel, setEditTel] = useState(logedUser.phone)
     const [editLocation, setEditLocation] = useState(logedUser.location)
     const [editable, setEditable] = useState(false)
     const [nonEdited, setNonEdited] = useState(true)
     const enableEdit = () => {
          setEditable(true)
          if (nonEdited) {
               setTimeout(() => {
                    setEditable(false)
               }, 4000);
          }
     }
     const changeData = (e, func) => {
          if (nonEdited) setNonEdited(false)
          if (!editable) return
          func(e.target.value)
          setEditable(true)
     }
  return (
     <div className={`bg-white rounded-xl text-black relative shadow-md shadow-gray-600 mx-3 my-10 px-2 py-7 overflow-hidden`}>
          <button className={`absolute -top-1 -right-1 text-lg rounded-full p-2 ${editable ? "bg-gray-700" : "bg-black"} text-white hover:bg-slate-950`} onClick={enableEdit}><FaEdit /></button>
          <h2 className={`text-center font-bold text-lg`}>You can edit your info!</h2>
          <div className={`flex flex-col gap-2 justify-center px-2`}>
               <div className={`flex flex-col`}>
                    <label htmlFor="username" className={`text-gray-700 text-sm`}>Username: </label>
                    <input type="text" id='username' className={`font-bold text-md border border-black rounded-lg p-1 indent-2 w-full outline-none`} placeholder={editName} value={editName} onChange={(e) => changeData(e, setEditName)} />
               </div>
               <div className={`flex flex-col`}>
                    <label htmlFor="email" className={`text-gray-700 text-sm`}>Email: </label>
                    <input type="email" id='email' className={`font-bold text-md border border-black rounded-lg p-1 indent-2 w-full outline-none`} placeholder={editEmail} value={editEmail} onChange={(e) => changeData(e, setEditEmail)} />
               </div>
               <div className={`flex gap-3 w-full max-[340px]:flex-col`}>
                    <div className={`flex flex-col w-full`}>
                         <label htmlFor="tel" className={`text-gray-700 text-sm`}>Phone Number: </label>
                         <input type="tel" id='tel' className={`font-bold text-md border border-black rounded-lg p-1 indent-2 w-full outline-none`} placeholder={editTel} value={editTel} onChange={(e) => changeData(e, setEditTel)} />
                    </div>
                    <div className={`flex flex-col w-full`}>
                         <label htmlFor="location" className={`text-gray-700 text-sm`}>Location: </label>
                         <select id="location" className={`font-bold text-sm border border-black rounded-md px-1 py-[9px] indent-2 w-full outline-none`} value={editLocation} onChange={(e) => changeData(e, setEditLocation)}>
                              <option className={`text-xs`} value="Kigali">Kigali</option>
                              <option className={`text-xs`} value="Bugesera">Bugesera</option>
                              <option className={`text-xs`} value="Rusizi">Rusizi</option>
                              <option className={`text-xs`} value="Musanze">Musanze</option>
                              <option className={`text-xs`} value="Huye">Huye</option>
                              <option className={`text-xs`} value="Muhanga">Muhanga</option>
                         </select>
                    </div>
               </div>
               <button type="submit" className={`${!editable ? "bg-gray-600" : "bg-amber-500 hover:bg-amber-400"}  text-white py-2 rounded-md`}>Save</button>
          </div>
     </div>
  )
}

export default User