import React from 'react'
import "./Footer.css"
import crossImg from "../../../assets/cross.png"
import linkedinImg from "../../../assets/linkedin.png"
import facebookImg from "../../../assets/facebook.png"
import meassageImg from "../../../assets/meassage.png"

export default function Footer() {
  return (
    <div className='bg-black'>
        <div className='container'>
            <div className='footer-area'>
                <div className="ticket-system">
                    <h4>CS — Ticket System</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="company">
                    <h4>Company</h4>
                    <p>About Us</p>
                    <p>Our Mission</p>
                    <p>Contact Saled</p>
                </div>
                <div className="service">
                    <h4>Services</h4>
                    <p>Products & Services</p>
                    <p>Customer Stories</p>
                    <p>Download Apps</p>
                </div>
                <div className="information">
                    <h4>Information</h4>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                    <p>Join Us</p>
                </div>
                <div className="social-icon">
                    <h4>Social Links</h4>
                    <div className="cross-area">
                        <img src={crossImg} alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className="linkedin-area">
                        <img src={linkedinImg} alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className="facebook-area">
                        <img src={facebookImg} alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className="meassage-area">
                        <img src={meassageImg} alt="" />
                        <p>support@cst.com</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="copy-wright-area container">
            <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
       
    </div>
  )
}


