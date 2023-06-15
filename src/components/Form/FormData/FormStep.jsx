import { Form } from 'react-bootstrap';
import { FormItem } from '../FormData/FormItem';
import './FormStep.css';

export const FormStep = ({ list, step, answers, updateAnswer }) => {
  
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
          
          if (item.type === 'file' && item.value === 'ProfilePicture') {
            return (
              <Form.Group key={item.label} className="h-100 mb-3 w-100">
                {answers.imageResized && (
                  <div className="img-wrapper"
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center'  
                    }}>
                    <img src={answers.imageResized} alt="Profile" style={{ marginTop: '10px', width: '150px', height: '150px' }} />
                  </div>
                )}
                <FormItem
                  item={item}
                  onChange={updateAnswer}
                  value={answers.imageFile}
                />
              </Form.Group>
            );
          }
  
          return (
            <Form.Group key={item.label} className="h-100 mb-3 w-100">
              <FormItem
                item={item}
                onChange={updateAnswer}
                value={answers[item.value]}
              />
            </Form.Group>
          );

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

