import './Footer.css'
import {FaFacebook, FaGithub, FaTwitter} from 'react-icons/fa'

import React from 'react'

const Footer = () => {
  return (

    <div className="footer">
        <div className="wrapper">
          <div className="heading">
            <strong>GROUP 12</strong>
          </div>
          <div className="social">
            <ul className='social-icons'>
              <li><a href="#"><FaFacebook /></a></li>
              <li><a href="#"><FaGithub /></a></li>
              <li><a href="#"><FaTwitter /></a></li>
            </ul>
          </div>
          <div className="copyright">
            <p>Copyright &copy; 2023 <strong>TRACER</strong>. All rights reserved.</p>
          </div>
          <div className="disclaimer">
            <p>Disclaimer: This website is for educational purposes only and should not be considered as professional advice. The authors and developers do not guarantee the accuracy or reliability of the information provided. The website may experience temporary technical issues beyond our control.</p>
          </div>
        </div>
        <div className="wrapper-bottom">
          <div className="link-wrapper">
            <h4>LINKS</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/results">Results</a></li>
              <li><a href="/profiles">Profiles</a></li>
              <li><a href="/about">About Us</a></li>
            </ul>
          </div>
          <div className="contact-wrapper">
            <h4>HELP </h4>
            <ul>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
          </div>
        </div>
    </div>

  )
}

export default Footer