import React, { useState } from 'react'
import './Form.css'
import { agreement } from './FormData/Agreement';
import MultiStepForm from './MultiStepForm/MultiStepForm';

const Form = ({onClose}) => {

    const [agreementAccepted, setAgreementAccepted] = useState(false);

    const agreementSection = (
        <div className="agreement">
            <h3>{agreement.heading}</h3>
            <>{agreement.content}</>
            <div className="buttons">
                <button onClick={()=>setAgreementAccepted(true)}>Accept</button>
                <button onClick={()=>onClose()}>Decline</button>
            </div>
        </div>
    );

    return (
       <>
        <div className="modal-overlay">
            <div className='modal'>  
                {agreementAccepted ? <MultiStepForm onClose = {onClose} /> : agreementSection}
            </div>
        </div>
       </>
    )
}

export default Form
