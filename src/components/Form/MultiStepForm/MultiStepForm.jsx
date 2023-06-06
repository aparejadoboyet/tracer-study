import React, { useState } from 'react';
import './MultiStepForm.css';
import { question } from '../FormData/Questions';
import { FormStep } from '../FormData/FormStep';
import { MultiStepProgressBar } from './ProgressBar/MultiStepProgressBar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { db, ref, set, push } from '../../../firebase';

const MultiStepForm = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);
  const [hasEmptyFields, setHasEmptyFields] = useState(false);

  const updateAnswer = (value, category) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [category]: value,
    }));
  };

  const saveFormData = () => {
    // Check if there are any empty fields

    console.log(Object.keys(answers))

    const emptyFields = Object.keys(answers).filter((key) => answers[key] === '');
    if (emptyFields.length > 0) {
      setHasEmptyFields(true);
      return;
    }

    // Get a new reference for the form data
    const formDataRef = ref(db, 'formAnswers');

    // Push the form answers to the database
    const newFormRef = push(formDataRef);
    set(newFormRef, answers);

    // Close the form
    onClose();
  };

  const handleNext = () => {
    if (hasEmptyFields) {
      setHasEmptyFields(false);
    }
    setStep((prevStep) => prevStep + 1);
  };

  const handleModalClose = () => {
    setHasEmptyFields(false);
  };

  return (
    <div
      className="card w-100 h-100"
      style={{
        maxHeight: '560px',
        maxWidth: '720px',
        minHeight: '0',
        minWidth: '0',
      }}
    >
      <div className="progressbar card-header w-100">
        <MultiStepProgressBar step={step} />
      </div>

      <div className="card-body h-100 w-100 overflow-auto">
        <FormStep step={step} list={question} answers={answers} updateAnswer={updateAnswer} />
      </div>

      <div className="card-footer d-flex justify-content-evenly align-items-center w-100">
        {step === 0 && (
          <Button className="px-3 fw-bold" variant="outline-danger" size="sm" onClick={onClose}>
            CANCEL
          </Button>
        )}

        {step !== 0 && (
          <Button
            className="px-3 fw-bold"
            variant="outline-primary"
            size="sm"
            onClick={() => setStep((prevStep) => prevStep - 1)}
          >
            PREV
          </Button>
        )}

        {step !== question.length - 1 && (
          <Button className="px-3 fw-bold" variant="outline-primary" size="sm" onClick={handleNext}>
            NEXT
          </Button>
        )}

        {step === question.length - 1 && (
          <Button
            className="px-3 fw-bold align-self-end"
            variant="outline-success"
            size="sm"
            onClick={() => {
              setIsSubmitClicked(true);
              saveFormData();
            }}
          >
            SUBMIT
          </Button>
        )}

        {/* Display modal with warning when submit button is clicked and there are empty fields */}
        <Modal show={hasEmptyFields && isSubmitClicked} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>Empty Fields</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please fill in all fields before submitting the form.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default MultiStepForm;
