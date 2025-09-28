import React from 'react'
import'./Heroarea.css'

export default function Heroarea( {inProgress}) {
  return (
    <div>
        <div className='bg-color'>
            <div className="hero-area container">
                <div className="progress-area">
                    <div className='progress-content'>
                        <p>In-Progress</p>
                        <h2>{inProgress}</h2>
                    </div>
                </div>
                <div className="resolved-area">
                    <div className='resolved-content'>
                        <p>Resolved</p>
                        <h2>0</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
