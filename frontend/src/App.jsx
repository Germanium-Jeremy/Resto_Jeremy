import './App.css'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Decorations from './components/Decorations'
import AnimatedRoutes from './components/AnimatedRoutes'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './components/contexts/UserContext'
import { NotificationProvider } from './components/contexts/Notifications'
import { ProductsProvider } from './components/contexts/ProductsContext'
import { OrderProvider } from './components/contexts/OrderContext'
import { ReviewProvider } from './components/contexts/ReviewContext'

function App() {
  return (
    <UserProvider>
      <NotificationProvider>
        <ProductsProvider>
          <OrderProvider>
            <ReviewProvider>
              <div className='w-full min-h-screen h-full bg-[#eff] pt-[2rem]'>
                {/* <Decorations /> */}
                <Router>
                  <div>
                    <Header />
                    <AnimatedRoutes />
                    <Footer />
                  </div>
                </Router>
                <ToastContainer position="top-center" autoClose={4000} limit={4} hideProgressBar={true} newestOnTop={true} rtl={false}
                  pauseOnFocusLoss pauseOnHover theme="light" transition:Zoom />
              </div>
            </ReviewProvider>
          </OrderProvider>
        </ProductsProvider>
      </NotificationProvider>
    </UserProvider>
  )
}

export default App
