import React, { Component } from 'react';

import SignUpPassword from './SignUpPassword.jsx';
import SignUpUsername from './SignUpUsername.jsx';
import SignUpButton from './SignUpButton.jsx';
import { json } from 'express';

class SignUpContainer extends Component{
  constructor(props){
    super(props)

  }



  render() {
    return(
      <div  className='login-container'>
        <h1>Sign Up!</h1>
        <SignUpUsername/>
        <SignUpPassword/>
        <SignUpButton/>
      </div>
    )
  }
}



export default SignUpContainer;