import React, { useState} from 'react'
import './Network.css'
import Form from '../../Form/Form';

function Network() {

  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal)
  }

  const handleClose = () => {
    setModal(false);
  }

  return (

    <div className="network">

      {modal  && (
            <Form onClose={handleClose} />
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