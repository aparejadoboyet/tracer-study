import React, { useState } from 'react';
import './MultiStepForm.css';
import { question } from '../FormData/Questions';
import { FormStep } from '../FormData/FormStep';
import { MultiStepProgressBar } from './ProgressBar/MultiStepProgressBar';
import Button from 'react-bootstrap/Button';
import { db, ref, set, push } from '../../../firebase';
import Resizer from 'react-image-file-resizer';

const MultiStepForm = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  
  const updateAnswer = (value, category) => {

      if (category === 'ProfilePicture') {

        const file = value;
        const fileReader = new FileReader();
    
        fileReader.onloadend = () => {
          const imagePreview = fileReader.result;
          setAnswers(prevAnswers => ({
            ...prevAnswers,
            imageFile: file,
            imagePreview: imagePreview
          }));
    
          // Resize the image to 200px
          Resizer.imageFileResizer(
            file,
            200,
            200,
            'JPEG',
            100,
            0,
            (resizedImage) => {
              // Update the answers with the resized image
              setAnswers(prevAnswers => ({
                ...prevAnswers,
                imageResized: resizedImage
              }));
            },
            'base64'
          );
        };
    
        if (file) {
          fileReader.readAsDataURL(file);
        }
      } else {
        setAnswers(prevAnswers => ({
          ...prevAnswers,
          [category]: value
        }));
      }
    };

  const saveFormData = () => {

    // Get a new reference for the form data
    const formDataRef = ref(db, 'formAnswers');

    // Push the form answers to the database
    const newFormRef = push(formDataRef);
    set(newFormRef, answers);

    // Close the form
    onClose();
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
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
              saveFormData();
            }}
          >
            SUBMIT
          </Button>
        )}
        
      </div>
    </div>
  );
};

export default MultiStepForm;
