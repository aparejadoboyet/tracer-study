import { Form } from 'react-bootstrap';
import { FormItem } from '../FormData/FormItem';
import './FormStep.css';

export const FormStep = ({ list, step, answers, updateAnswer }) => {

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const image = new Image();
        image.onload = () => {
          const canvas = document.createElement('canvas');
          const MAX_SIZE = 300;
          let width = image.width;
          let height = image.height;
  
          if (width > height) {
            if (width > MAX_SIZE) {
              height *= MAX_SIZE / width;
              width = MAX_SIZE;
            }
          } else {
            if (height > MAX_SIZE) {
              width *= MAX_SIZE / height;
              height = MAX_SIZE;
            }
          }
  
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(image, 0, 0, width, height);
          canvas.toBlob((blob) => {
            const resizedFile = new File([blob], file.name, {
              type: file.type,
              lastModified: Date.now(),
            });
            updateAnswer(resizedFile, 'imageFile');
            updateAnswer(URL.createObjectURL(resizedFile), 'imagePreview');
          }, file.type);
        };
        image.src = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      updateAnswer(null, 'imageFile');
      updateAnswer(null, 'imagePreview');
    }
  };

   // Helper function to render the questions and user's answers
    const renderQuestionAndAnswer = (item) => {
        const answer = answers[item.value];
    
        return (
        <div key={item.label}>
            <p className="question">{item.label}</p>
            <p className="answer"><strong>Answer: "&nbsp;{answer}&nbsp;"</strong></p>
            <hr/>
        </div>
        );
    };

  return (
    <div 
      style={{
        minHeight: 'max-content'  
      }} 
      className="w-100 d-md-flex flex-column justify-content-center align-items-center p-3 px-md-3" >
      {list[step].items?.map((item, index) => {
        if (item.type === 'image') {
          return (
            <Form.Group key={item.label} className="w-100 d-flex flex-column">
              
                <Form.Label>{item.label}</Form.Label>
                <div className="image-preview-container mb-2">
                  {answers.imagePreview && <img src={answers.imagePreview} alt="Preview" className="image-preview" />}
                </div>
                <Form.Control type="file" accept="image/*" onChange={handleImageChange} />
              
            </Form.Group>
          );
        } else {
          return (
            <Form.Group key={item.label} className="h-100 mb-3 w-100">
              <FormItem
                item={item}
                onChange={updateAnswer}
                value={answers[item.value]}
                imageFile={answers.imageFile}
                imagePreview={answers.imagePreview}
              />
            </Form.Group>
          );
        }
    })}
    {step === list.length - 1 && (
        <div className="summary">
          <h3>Summary</h3>
          {list.slice(0, list.length - 1).map((section) => (
            <div key={section.section}>
              {section.items?.map((item) => renderQuestionAndAnswer(item))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

