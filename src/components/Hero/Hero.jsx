import React, { useState } from 'react'
import './Hero.css'
import Form from '../Form/Form'
import Logo from '../../assets/img/logo-200px.png'
import LogoBig from '../../assets/img/csd-logo.png'
import 'animate.css'

function Hero() {

  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal)
  }

  const handleClose = () => {
    setModal(false);
  }

  return (
    <div className="hero">

      {modal  && (
        <Form onClose={handleClose} />
      )}
        
        <div className="wrapper">
            <div className="content">
              <span>Osmeña Colleges</span>
              <span>Computer Science Department</span>
              <span>Tracer Study</span>
              <span>Welcome to the Alumni Tracer Study by Group 20! Our Dean, Engr. Violeta Monticalvo, inspired this study to gather invaluable feedback from our esteemed batch of alumni covering School Year 2022.</span>
            </div>
            <div className="pic">
              {/* <img src={LogoBig} alt="" srcSet="" /> */}
            </div>
        </div>

        <div className="wrapper-bottom">
            
            <div className="bottom-content">
              <span>To All</span>
              <span>Alumnus</span>
              <span><strong>Your voice matters!</strong></span>
              <span>By participating in this survey, you can help shape the future of our Computer Science Department and contribute to the success of our fellow alumni.</span>

              <div className="button">
                <button className={(modal ? "survey-btn active" : "survey-btn")} onClick={handleClick}>Take Survey</button>
              </div>  
            </div>

        </div>



        {/* <img src={logo} alt="" className='fab-btn animate__animated animate__bounce animate__slow animate__infinite' onClick={handleClick}/> */}

    </div>
  )
}

export default Hero