import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
     const [notificationsContext, setNotificationsContext] = useState(null);
     const [noteLength, setNoteLength] = useState(0);
     const [noteSeen, setNoteSeen] = useState(false)
     const [noteSeenList, setNoteSeenList] = useState([])
     let userId = JSON.parse(localStorage.getItem("User"))
     userId == null ? "good" : userId = userId._id

     useEffect(() => {
          // axios.post("http://localhost:5174/notifications", { userId: userId}).then(response => {
          axios.post("https://resto-jeremy.vercel.app/notifications", { userId: userId}).then(response => {
            setNotificationsContext(response.data)
            setNoteLength(response.data.length)
          }).catch(error => {
            console.log(error.message)
          })
        }, [])
     return (
          <NotificationContext.Provider value={{ notificationsContext, setNotificationsContext, noteLength }}>
               {children}
          </NotificationContext.Provider>
     )
}
