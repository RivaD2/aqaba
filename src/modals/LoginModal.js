import React from 'react'
import TextField from '../components/TextField';
import PasswordInput from '../components/PasswordInput';
import TextButton from '../components/TextButton';
import GoogleButton from 'react-google-button';
import './LoginModal.css'

const LoginModal = props => {
console.log('props are',  props)
  const handleSignIn = async e => {
    try {
      const auth = window.gapi.auth2.getAuthInstance();
      await auth.signIn();
      e.preventDefault();
    } catch (err) {
      console.error(err);
    }
  }
  
  return (
    <div>
      <div className="login-modal-container">
        <div className="login-modal-image-container">
          <div className="login-modal-image"></div>
        </div>
        <div className="login-modal-content">
          <div>
            <div className="login-modal-header">
              Welcome To AQABA
            </div>
            <div className="login-header-slogan-text">
              A CELEBRATION OF LOVE
            </div>
          </div>
          <h3 className="sign-in">Sign In</h3>
          <TextField field={{label: 'Username or email'}} className="form-text" />
          <div className="password-container">
            <div className="form-text">
              <PasswordInput />
            </div>
            <div className="forgot-password-link-container">
              <div className="link">Forgot password?</div>
            </div>
          </div>
          <div className="login-button-container">
            <TextButton 
              text='Login' 
              className="login-buttton" 
            />
            <button className="mobile-login-button">
              LOGIN
            </button>
            <div className="google-login-button">
              <GoogleButton 
                type="dark" 
                onClick={handleSignIn}
              />
            </div>
            <div className="create-account-container">
              <div>Don't have an account?</div>
              <div className="link" onClick={props.showCreateAccountModal}> Click here</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginModal;
