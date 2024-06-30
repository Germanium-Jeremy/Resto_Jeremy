import './App.css'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Auth from './pages/Auth'
import Missing from './pages/Missing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='w-full min-h-screen h-full bg-[#eff] pt-[3rem]'>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path='/' exact element={<Landing />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/auth' exact element={<Auth />} />
            <Route path='*' exact element={<Missing />} />
          </Routes>
        <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App
