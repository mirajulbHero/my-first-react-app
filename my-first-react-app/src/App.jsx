import React, { useState } from "react";
import { Suspense } from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify';
import Customer from './components/customerArea/Customer'
import Heroarea from './components/heroarea/Heroarea'
import Navbar from './components/navbar/Navbar'
import Footer from './components/heroarea/footerArea/footer'


const fetchCustomer = async() => {
    const res = await fetch ('/customer.json')
    return res.json()
}

function App() {
  const [inProgress, setInProgress] = useState(0);
  
  const [resolvedCount, setResolvedCount] = useState(0)

   const customerPromise = fetchCustomer()


  return (
    <>
      <div>
        <Navbar></Navbar>
        <Heroarea inProgress ={inProgress} setInProgress ={setInProgress} resolvedCount={resolvedCount} resolvedCount={resolvedCount}></Heroarea>
        <Suspense fallback ={<div>lodding....</div>}>
          <Customer setResolvedCount = {setResolvedCount} setInProgress={setInProgress} customerPromise ={customerPromise}></Customer>
        </Suspense>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
        
      </div>
    </>
  )
}

export default App
