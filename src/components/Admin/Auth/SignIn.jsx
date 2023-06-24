import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import { Card } from 'react-bootstrap';


const SignIn = () => {
  
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const logIn = e => e.PreventDefault();

  return (

    <div className="admin d-flex justify-content-center align-items-center"
      style={{
      height: "100vh"
    }}>

      <Card
        style={{
          width: "18rem"
      }}>
        <Card.Header className='fw-bolder text-uppercase text-center'>Login</Card.Header>
        <Card.Body>
          <Form onSubmit={logIn}>
            <Form.Group controlId='emailInput' className='mb-3'>
              <Form.Label>Username</Form.Label>
              <Form.Control 
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
                placeholder="Enter username" />
            </Form.Group>
            <Form.Group className='mb-3' controlId="passInput">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter password"
                value={pass}
                onChange={e => setPass(e.target.value)}
              />
            </Form.Group>
            <Col className="d-flex justify-content-evenly">
              <Button type="submit">Login</Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>

    </div>
  )
}

export default SignIn