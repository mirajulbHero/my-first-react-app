import React, { useState } from "react";
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
  const [selectedCards, SetSelectedCards] = useState([]);
  const [inProgress, setInProgress] = useState(0);

  return (
    <>
      <div>
        <Navbar></Navbar>
        <Heroarea inProgress ={inProgress} setInProgress ={setInProgress}></Heroarea>
        <Suspense fallback ={<div>lodding....</div>}>
          <Customer setInProgress={setInProgress} customerPromise ={customerPromise}></Customer>
        </Suspense>
        <Footer></Footer>
        
      </div>
    </>
  )
}

export default App
