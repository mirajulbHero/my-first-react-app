
import { Suspense } from 'react'
import './App.css'
import Customer from './components/customerArea/Customer'
import Heroarea from './components/heroarea/Heroarea'
import Navbar from './components/navbar/Navbar'
import Footer from './components/heroarea/footerArea/footer'

const fetchCustomer = async() => {
    const res = await fetch ('/customer.json')
    return res.json()
}

function App() {
  const customerPromise = fetchCustomer()

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Heroarea></Heroarea>
        <Suspense>
          <Customer customerPromise ={customerPromise}></Customer>
        </Suspense>
        <Footer></Footer>
        
      </div>
    </>
  )
}

export default App
