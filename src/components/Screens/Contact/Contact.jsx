import React, { useState } from 'react'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPaperPlane } from 'react-icons/fa'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // handles the changing of name value
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  // handles the changing of email value
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  // handles the changing of subject value
  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  }

  // handles the changing of message value
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the form from refreshing upon submitting

    // ikaw nan bahala di san form submission
    // send san data sa database

    console.log('Form submitted: ', { name, email, subject, message });

    // clear all inputs
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  }

  return (
    <div className="contact container pt-5">
        <div className="row container-fluid mb-3">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <h1 className="contact-header text-center mb-3 mb-md-5 mt-5">Contact Us</h1>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 p-3 mb-md-4">
            <h4>Greetings!</h4>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam inventore voluptate cupiditate minima non suscipit quod facere quo excepturi aperiam autem dolore dolorem ipsum distinctio nihil, ut debitis nam neque.</p>
            <p className='mb-0 fw-bold'>We are happy to hear from you!</p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6 p-3">
            <form onSubmit={ handleSubmit }>
              <div className="form-group">
                <input 
                  type='text' 
                  className='form-control mb-3'
                  id='name'
                  value={ name }
                  onChange={ handleNameChange }
                  placeholder='Name'
                  required
                />
                <input 
                  type='email' 
                  className='form-control mb-3'
                  id='email'
                  value={ email }
                  onChange={ handleEmailChange }
                  placeholder='Email'
                  required
                />
                <input 
                  type='text' 
                  className='form-control mb-3'
                  id='subject'
                  value={ subject }
                  onChange={ handleSubjectChange }
                  placeholder='Subject'
                  required
                />
                <textarea
                  className='form-control mb-3'
                  id='message'
                  rows={ 5 }
                  value={ message }
                  onChange={ handleMessageChange }
                  placeholder='Message'
                  required
                ></textarea>
              </div>
              <div className='container-fluid text-center'>
                <button type='submit' className='btn btn-primary submit w-sm-100'>Send Your Feedback <FaPaperPlane /></button>
              </div>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact;