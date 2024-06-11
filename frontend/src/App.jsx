import './App.css'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Landing from './pages/Landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='w-full min-h-screen h-full bg-[#eff]'>
      <Header />
      <Router>
        <Routes>
          <Route path='/' exact element={<Landing />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
