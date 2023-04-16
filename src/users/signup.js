import React from 'react'
import Fragment from 'render-fragment'
import "./signup.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function signup() {
  return (
    <Fragment>
      <div className='car-left'>

      </div>
        <div className='login'>
        
        <h3>Sign Up </h3>
  
        </div>
        <form className='form'>
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email'></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password'></input>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2" placeholder='Confirm Password'></input>
  </div>
  
  <button type="submit" className="btn btn-outline-warning">Submit</button>
</form>
    </Fragment>
  )
}

export default signup