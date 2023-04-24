import React, {useEffect, useState} from 'react'
import './Network.css'
import { useLocation } from 'react-router-dom';

function Network() {

  const location = useLocation();
  location.state = false;
  const [modal, setModal] = useState(location.state);
  console.log(location.state)
  const handleClick = () =>{
    location.state = !location.state
    console.log(location.state)
  }

  return (

    <div className="network">

      {modal  && (
            <div className="modal-overlay">
              <div className='modal'>  
                <div className="form">
                  <button className="btn-close" onClick={handleClick}>Close</button>
                  FORM MODAL</div>
              </div>
            </div>
          )}

      <div className="header">
        <span className='awesome'>CompSci LAB</span>
      </div>

      <div className="wrapper">
        
        <div className="alumni-pic"></div>
        <div className="intro">
          <span>Are you an <span>ALUMNI?</span></span><br/>
          <span>Come & Take <br/>a short survey for a</span><br/>
          <span>TRACER STUDY</span><br/>
          <button onClick={handleClick}>Start Survey</button>
        </div>

      </div>

    </div>
    )
}

export default Network