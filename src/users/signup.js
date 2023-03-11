import React from 'react'
import Fragment from 'render-fragment'
import "./signup.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function signup() {
  return (
    <Fragment>
        <div className='signup'>
        
        <Form>
        <h1> Sign Up</h1>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Username" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="outline-dark">Register</Button>
    </Form>
            
        </div>
    </Fragment>
  )
}

export default signup