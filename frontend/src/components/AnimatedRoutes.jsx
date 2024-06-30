import React from 'react'
import Landing from '../pages/Landing'
import Login from '../pages/Login'
import Auth from '../pages/Auth'
import Missing from '../pages/Missing'
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence} from 'framer-motion'

const AnimatedRoutes = () => {
     const location = useLocation()
  return (
     <AnimatePresence>
          <Routes location={location} key={location.pathname}>
               <Route path='/' exact element={<Landing />} />
               <Route path='/login' exact element={<Login />} />
               <Route path='/auth' exact element={<Auth />} />
               <Route path='*' exact element={<Missing />} />
          </Routes>
     </AnimatePresence>
  )
}

export default AnimatedRoutes