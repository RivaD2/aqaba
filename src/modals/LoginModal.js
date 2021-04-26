import React from 'react'
import TextField from '../components/TextField';
import TextButton from '../components/TextButton';
import GoogleAuth from '../components/Login';
import {Link} from 'react-router-dom';
import './LoginModal.css'

const LoginModal = props => {
  return (
    <div>
      <div>
        <div className="login-modal-header">
            Welcome To AQABA
        </div>
        <div className="login-header-slogan-text">
            A CELEBRATION OF LOVE
        </div>
      </div>
      <div className="login-modal-container">
        <div className="login-modal-image-container">
          <div className="login-modal-image"></div>
        </div>
        <div className="login-modal-content">
          <div className="login-header">
            LOG IN 
          </div>
          <TextField field={{label: 'Username or email'}} className="form-text" />
          <div className="password-container">
            <div className="form-text">
              <TextField field={{label: 'Password'}} />
            </div>
            <div className="forgot-password-link">
              <Link>Forgot Password</Link>
            </div>
          </div>
          <div className="login-button-container">
            <TextButton text='Login'/>
            <TextButton text='Login with Google'onClick={props.close}/>
            {/* <GoogleAuth /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginModal;
