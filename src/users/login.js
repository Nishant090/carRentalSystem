import React from 'react'
import Fragment from 'render-fragment'
import "./login.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function login() {
  return (
    <Fragment>
        <div className='login'>
        
        <Form>
        <h1> Login </h1>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="outline-dark">Login</Button>
    </Form>
            
        </div>
    </Fragment>
  )
}

export default login