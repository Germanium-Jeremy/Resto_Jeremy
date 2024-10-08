import React from 'react'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Auth from '../pages/Auth'
import Missing from '../pages/Missing'
import Signin from '../pages/Signin'
import Notifications from '../pages/Notifications'
import Home from '../pages/Home'
import Diet from '../pages/Diet'
import Dashboard from './dashboard/Dashboard'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion'
const AnimatedRoutes = () => {
     const location = useLocation()
     const user = JSON.parse(localStorage.getItem("User"))

  return (
     <AnimatePresence>
          <Routes location={location} key={location.pathname}>
               <Route path='/' exact element={<Landing />} />
               <Route path='/home' exact element={<Home />} />
               <Route path='/diet' exact element={<Diet />} />
               <Route path='/login' exact element={<Login />} />
               <Route path='/signup' exact element={<Signin />} />
               <Route path='/auth' exact element={<Auth />} />
               <Route path='/notifications' exact element={user ? <Notifications /> : <Auth />} />
               <Route path='/dashboard/*' exact element={user ? <Dashboard /> : <Auth />} />
               <Route path='*' exact element={<Missing />} />
          </Routes>
     </AnimatePresence>
  )
}

export default AnimatedRoutes