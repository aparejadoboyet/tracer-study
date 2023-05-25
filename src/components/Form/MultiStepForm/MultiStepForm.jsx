import React, { useState } from 'react'
import './MultiStepForm.css'
import { question } from '../FormData/Questions';
import { FormStep } from '../FormData/FormStep';
import { MultiStepProgressBar } from './ProgressBar/MultiStepProgressBar'; 
import Button from 'react-bootstrap/Button';

const MultiStepForm = ({onClose}) => {

  const [ step, setStep ] = useState(0);

  return (

    // <div className="form">

      <div className="form-container p-3 card w-100 h-100" style={{maxWidth:'860px'}}>

        <div className="progressbar card-header">
          <MultiStepProgressBar step={step} />
        </div>
        <div className="content card-body fw-bold d-flex align-items-center px-5 justify-content-center overflow-auto">
          <FormStep step={step} list={question} />
        </div>
        <div className="form-footer card-footer d-flex justify-content-evenly align-items-center w-100">
          { step !== 0 &&
            <Button className='px-3 fw-bold' variant='outline-primary' size='sm' 
              onClick = {
                () => setStep( i => i - 1 )
              }
            > PREV </Button>
          }
          { step !== question.length-1 &&
            <Button className='px-3 fw-bold ' variant='outline-primary' size='sm'
              onClick={
                () => setStep( i => i+1 )
              }
            > {step === question.length - 2 ? 'FINISH':'NEXT'}</Button>
          }
          {step === question.length - 1 &&
            <Button className='px-3 fw-bold align-self-end' variant='outline-success' size='sm' onClick={()=>onClose()}>SUBMIT</Button>
          }
        </div>

      </div>

    /* </div> */

  )
}

export default MultiStepForm