import React, { useState } from 'react'
import './Form.css'
import { agreement } from './FormData/Agreement';
import MultiStepForm from './MultiStepForm/MultiStepForm';
import 'bootstrap/dist/css/bootstrap.min.css';

const Form = ({onClose}) => {

    const [agreementAccepted, setAgreementAccepted] = useState(false);

    const agreementSection = (
        <div className="card w-100 h-100" 
            style={{
                maxHeight: '560px',
                maxWidth: '720px',
                minHeight: '0',
                minWidth: '0'
            }}>
            <div className="card-header"></div>
            <div className='card-title text-center text-wrap fw-bold fs-1 text-uppercase mt-3'>{agreement.heading}</div>
            <div className='card-body overflow-auto text-just px-4 px-sm-5'>{agreement.content}</div>
            <div className="card-footer d-flex justify-content-evenly py-3">
                <button className='btn btn-success' onClick={()=>setAgreementAccepted(true)}>Accept</button>
                <button className='btn btn-danger' onClick={()=>onClose()}>Decline</button>
            </div>
        </div>
    );

    return (
       <>
        <div className="modal-overlay">
                {agreementAccepted ? <MultiStepForm onClose = {onClose} /> : agreementSection}
        </div>
       </>
    )
}

export default Form
