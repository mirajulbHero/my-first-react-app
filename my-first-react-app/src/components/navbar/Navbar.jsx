
import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <div>
        <div className='container'>
            <nav className='nav-area'>
                <h1>CS — Ticket System</h1>
                <div className="menu-container">
                    <ul>
                        <li><a href="">Home</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Changelog</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Download</a></li>
                        <li><a href="">Contact</a></li>
                        <button className="nav-btn"> + New Ticket</button>
                    </ul>
                    
                </div>
            </nav>
        </div>
    </div>
    
  )
}
