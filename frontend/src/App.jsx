import './App.css'
import { Footer } from './components/Footer'
import Header from './components/Header'
import AnimatedRoutes from './components/AnimatedRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import {UserProvider} from './components/UserContext'

function App() {
  return (
    <UserProvider>
      <div className='w-full min-h-screen h-full bg-[#eff] pt-[3rem]'>
        <Router>
          <div>
            <Header />
            <AnimatedRoutes />
            <Footer />
          </div>
        </Router>
      </div>
    </UserProvider>
  )
}

export default App
