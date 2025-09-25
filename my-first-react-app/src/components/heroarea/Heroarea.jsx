import React from 'react'
import'./Heroarea.css'
export default function Heroarea() {
  return (
    <div>
        <div className='bg-color'>
            <div className="hero-area container">
                <div className="progress-area">
                    <img src="../assets" alt="" />
                    <p>In-Progress</p>
                    <h2>0</h2>
                </div>
                <div className="resolved-area">
                    <p>Resolved</p>
                    <h2>0</h2>
                </div>
            </div>
        </div>
    </div>
  )
}
