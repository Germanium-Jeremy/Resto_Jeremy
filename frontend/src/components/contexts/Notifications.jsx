import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios';

export const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
     const [notificationsContext, setNotificationsContext] = useState(null);
     const [noteLength, setNoteLength] = useState(0);
     const [newNote, setNewNote] = useState(false)
     const [noteError, setNoteError] = useState(0)
     const [noteLoading, setNoteLoading] = useState(false)
     let userId = JSON.parse(localStorage.getItem("User"))
     userId == null ? "good" : userId = userId._id

     useEffect(() => {
          setNoteLoading(true)
          // axios.post("http://localhost:5174/notifications", { userId: userId}).then(response => {
          axios.post("https://resto-jeremy.vercel.app/notifications", { userId: userId}).then(response => {
               setNoteLoading(false)
               setNotificationsContext(response.data)
               setNoteLength(response.data.length)
          }).catch(error => {
               setNoteLoading(false)
               console.error(error.message)
               setNoteError(noteError + 1)
          })
        }, [newNote, noteError])
     return (
          <NotificationContext.Provider value={{ notificationsContext, setNotificationsContext, noteLength, newNote, setNewNote, noteLoading }}>
               {children}
          </NotificationContext.Provider>
     )
}
