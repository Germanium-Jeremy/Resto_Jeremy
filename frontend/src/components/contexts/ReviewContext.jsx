import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const ReviewContext = createContext(null);

export const ReviewProvider = ({ children }) => {
     const user = JSON.parse(localStorage.getItem("User"))
     const [username, setUsername] = useState('')
     const [email, setEmail] = useState('')
     const [message, setMessage] = useState('')
     const [comments, setComments] = useState([])
     const [loading, setLoading] = useState(false)
     const [newReview, setNewReview] = useState(false)
     const [commentError, setCommentError] = useState(0)
     const [commentsLoading, setCommentsLoading] = useState(false)

     const handleSubmit = (e) => {
          e.preventDefault()
          setLoading(true)
          if (!user || user == null || user == undefined) {
               return console.log("No User")
          } else {
               setEmail(user.email)
               setUsername(user.username)
          }
          if (message.length < 30) {
               toast.warn("Your Message should be greater than 30 letters")
               return
          }
          // axios.post("http://localhost:5174/createComment", { username: username, userEmail: email, comment: message}).then(response => {
          axios.post("https://resto-jeremy.vercel.app/createComment", { username: username, userEmail: email, comment: message}).then(response => {
               setLoading(false)
               toast.success(response.data)
               setMessage('')
               setNewReview(true)
          }).catch(error => {
               setLoading(false)
               console.error(error.message)
          })
     }

     useEffect(() => {
          setCommentsLoading(true)
          setNewReview(false)
          // axios.get("http://localhost:5174/getComments").then(response => {
          axios.get("https://resto-jeremy.vercel.app/getComments").then(response => {
               setCommentsLoading(false)
               setComments(response.data)
          }).catch(error => {
               setCommentsLoading(false)
               setCommentError(commentError + 1)
          })
     }, [newReview, commentError])

     return (
          <ReviewContext.Provider value={{ handleSubmit, username, email, message, setUsername, setEmail, setMessage, user, comments, loading, commentsLoading }}>
               {children}
          </ReviewContext.Provider>
     )
}
