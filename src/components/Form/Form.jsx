import React from 'react'
import './Form.css'

const Form = ({onClose}) => {

    const handleClick = () => {
        onClose();
    }

    return (
       <>
        <div className="modal-overlay">
            <div className='modal'>  
            <div className="form">
                <button className="btn-close" onClick={handleClick} >Close</button>
                FORM MODAL</div>
            </div>
        </div>
       </>
    )
}

export default Form
