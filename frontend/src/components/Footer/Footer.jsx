import React from 'react'
import './Footer.css'
import footer_logo from '../assetss/logo.png'
import instagram_icon from '../assetss/instagram_icon.png'
import pinteresr_icon from '../assetss/pintester_icon.png'
import whatsapp_icon from '../assetss/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>Urban Wave</p>
        </div>

        <ul className="footer_links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icon-container">
                <img src={instagram_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={pinteresr_icon} alt="" />
            </div>
            <div className="footer-icon-container">
                <img src={whatsapp_icon} alt="" />
            </div>

        </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024. All Rights Reserved</p>
            </div>
      
    </div>
  )
}

export default Footer
