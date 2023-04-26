import React, { useState } from 'react'
import './Form.css'

const Form = ({onClose}) => {

    const [agreementAccepted, setAgreementAccepted] = useState(false);

    const [respondentDetails, setRespondentDetails] = useState(true);

    const [firstName, setFirstName] = useState('');
    const [middleInitial, setMiddleInitial] = useState('');
    const [lastName, setLastName] = useState('');
    const [showEmploymentStatus, setShowEmploymentStatus ] = useState(false);

    const handleClick = () => {
        onClose();
    }

    const handleAccept = () => {
        setAgreementAccepted(true);
    }

    const handleDecline = () => {
        onClose();
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleMiddleInitialChange = (event) => {
        setMiddleInitial(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const agreementSection = (
        <div className="agreement">
            <h3>Data Privacy Statement</h3>
            <p>Your privacy is important to us, and we are committed to protecting your personal information. The purpose of this tracer study is to gather information on the outcomes of the Osmena Colleges Computer Science Department's curriculum for the school years 2020 to 2022. Your participation in this study is entirely voluntary, and you have the right to withdraw at any time.<br/><br/>

            All data collected from you will be kept confidential and used solely for research purposes. The data will be stored securely and will only be accessible by authorized personnel involved in this study. Your personal information, such as your name and contact details, will not be disclosed to any third party without your consent.<br/>

            By clicking "Accept" below, you are indicating that you have read and understood the privacy statement and are consenting to participate in this tracer study. If you do not agree with the terms outlined in this privacy statement, please click "Decline" and exit the survey.</p>
            <div className="buttons">
                <button onClick={handleAccept}>Accept</button>
                <button onClick={handleDecline}>Decline</button>
            </div>
        </div>
    );

    const formSection = (
        <div className="form">
            <button className="btn-close" onClick={handleClick} >Close</button>

            <div className="form-field">
                { respondentDetails && (
                    <>
                        <h3>Respondents Information</h3>
                    <div className="fname field">
                        <label htmlFor="firstName">
                            First Name:
                        </label>
                        <input type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange} />
                    </div>
                    <div className="midName field">
                        <label htmlFor="middleInitial">
                            Middle Initial:
                        </label>
                        <input type="text" id="middleInitial" name="middleInitial" value={middleInitial} onChange={handleMiddleInitialChange} />
                    </div>
                    <div className="lName field">
                        <label htmlFor="lastName">
                            Last Name:
                        </label>
                        <input type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} />
                    </div>
                    <button className="btn-continue" onClick={()=>{
                        setShowEmploymentStatus(!showEmploymentStatus)
                        setRespondentDetails(!respondentDetails)
                    }}>Continue</button>
                    </>
                )}

                {showEmploymentStatus && (
                    <div className="employment field">
                    <label>What is your current employment status?</label>
                    <div>
                      <input type="radio" id="employed" name="employmentStatus" value="Employed" onChange={(e) => console.log(e.target.value)} />
                      <label htmlFor="employed">Employed</label>
                    </div>
                    <div>
                      <input type="radio" id="unemployed" name="employmentStatus" value="Unemployed" onChange={(e) => console.log(e.target.value)} />
                      <label htmlFor="unemployed">Unemployed</label>
                    </div>
                    <div>
                      <input type="radio" id="selfEmployed" name="employmentStatus" value="Self Employed" onChange={(e) => console.log(e.target.value)} />
                      <label htmlFor="selfEmployed">Self Employed</label>
                    </div>
                  </div>
                )}

            </div>

        </div>
    );

    return (
       <>
        <div className="modal-overlay">
            <div className='modal'>  
                {agreementAccepted ? formSection : agreementSection}
            </div>
        </div>
       </>
    )
}

export default Form
