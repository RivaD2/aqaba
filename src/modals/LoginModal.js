import React from 'react'
import TextField from '../components/TextField';
import TextButton from '../components/TextButton';
import GoogleAuth from '../components/Login';

const LoginModal = props => {
  return (
    <div>
      <div className="modal-container">
        <div className="modal-image-container">
          <div className="login-modal-image">
            <img 
              src="/assets/aqaba-amour.png" 
              alt="aqaba-classic"
              className="aqaba-product-image"
            />
          </div>
        </div>
        <div className="modal-content">
          <div className="modal-header">
            Welcome To AQABA
          </div>
          <div className="header-slogan-text">A CELEBRATION OF LOVE</div>
            <div className="login-header">
              LOG IN 
            </div>
          <TextField field={{label: 'Username or email'}} className="form-text" />
          <TextField field={{label: 'Enter Password'}} className="form-text" />
          <p>Forgot Password</p>
          <div className="login-buttons">
            <TextButton text='Login' onClick={props.close}/>
            <TextButton text='Login with Google'/>
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginModal;
