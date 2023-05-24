import React, { useState } from 'react'
import './MultiStepForm.css'
import { completed } from '../FormData/Completed';
import UserDetails from '../FormData/UserDetails';
import FirstForm from '../FormData/FirstForm';

const MultiStepForm = ({onClose}) => {

  const [ step, setStep ] = useState(0);

  const FormHeading = [
    "Respondent Info.",
    "Second Form",
    completed.Heading
  ];

  const formComponents = {
    0 : <UserDetails />,
    1 : <FirstForm />,
    2 : completed.Content
  }

  return (

    <div className="form">
        <div className="progressbar"></div>
        <div className="form-container">

          <div className="heading">
            <h1>{FormHeading[step]}</h1>
          </div>

          <div className="content">
            {formComponents[step]}
          </div>

          <div className="footer">
            {(step !== 0 && step !== FormHeading.length-1) &&
              <button onClick={()=>setStep(i=>i-1)}>PREV</button>
            }
            {(step!==FormHeading.length && step!==FormHeading.length-1) &&
              <button onClick={()=>setStep(i=>i+1)}>{step === FormHeading.length - 2 ? 'FINISH':'NEXT'}</button>
            }
            {step === FormHeading.length-1 &&
              <button onClick={()=>onClose()}>Close</button>
            }
          </div>

        </div>
    </div>

  )
}

export default MultiStepForm