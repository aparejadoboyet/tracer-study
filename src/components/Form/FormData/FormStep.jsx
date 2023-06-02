import { Form } from 'react-bootstrap';
import { FormItem } from '../FormData/FormItem';
import './FormStep.css';

export const FormStep = ({ list, step, answers, updateAnswer }) => {

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              updateAnswer(file, 'imageFile');
              updateAnswer(reader.result, 'imagePreview');
        };
        reader.readAsDataURL(file);
        } else {
          updateAnswer(null, 'imageFile'); // Clear the image file if no file is selected
          updateAnswer(null, 'imagePreview'); // Clear the image preview if no file is selected
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

