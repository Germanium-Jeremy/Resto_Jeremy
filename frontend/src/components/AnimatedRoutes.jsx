import React from 'react'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Auth from '../pages/Auth'
import Missing from '../pages/Missing'
import Signin from '../pages/Signin'
import Notifications from '../pages/Notifications'
import Home from '../pages/Home'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
     const location = useLocation()
     // const user = loca
  return (
     <AnimatePresence>
          <Routes location={location} key={location.pathname}>
               <Route path='/' exact element={<Landing />} />
               <Route path='/home' exact element={<Home />} />
               <Route path='/login' exact element={<Login />} />
               <Route path='/signup' exact element={<Signin />} />
               <Route path='/auth' exact element={<Auth />} />
               <Route path='/notifications' exact element={<Notifications />} />
               <Route path='*' exact element={<Missing />} />
          </Routes>
     </AnimatePresence>
  )
}

export default AnimatedRoutes