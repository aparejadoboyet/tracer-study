import React, { useState } from 'react'
import './Hero.css'
import Form from '../Form/Form'

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
          {/* Ñ ñ */}
          <div className="intro">
            <div className="intro-content">
              <span>Osmeña Colleges</span><br/>
              <span>Computer Science Department</span><br/>
              <span>Tracer Study</span><br/>
              <span>Welcome to the Alumni Tracer Study by Group 20! Our Dean, Engr. Violeta Monticalvo, inspired this study to gather invaluable feedback from our esteemed batch of alumni covering School Year 2022.</span>
            </div>
            <div className="intro-pic">
              <img src="" alt="" srcSet="" />
            </div>
          </div>

        </div>

        <div className="wrapper-bottom">
          {/* Ñ ñ */}
          <div className="intro">
            <div className="intro-pic">
              <img src="" alt="" srcSet="" />
            </div>

            <div className="intro-content">
              <span>To All</span><br/>
              <span>Alumnus</span><br/>
              <span><strong>Your voice matters!</strong><br/> By participating in this survey, you can help shape the future of our Computer Science Department and contribute to the success of our fellow alumni.</span>
              <div className="btn">
                <button className="survey-btn" onClick={handleClick}>
                  Start Survey
                </button>
              </div>
            </div>
          </div>
          
        </div>

    </div>
  )
}

export default Hero