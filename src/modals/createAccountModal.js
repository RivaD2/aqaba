import React from 'react'
import TextField from '../components/TextField';
import TextButton from '../components/TextButton';
import PasswordInput from '../components/PasswordInput';
import './CreateAccountModal.css'

const CreateAccountModal = props => {
  return (
    <div className="modal-container">
      <div className="modal-content">
        <div className="modal-header">
          Welcome To AQABA
        </div>
        <div className="header-slogan-text">A CELEBRATION OF LOVE</div>
        <div className="modal-image-container">
          <div className="account-modal-image">
            <img 
              src="/assets/aqaba-amour.png" 
              alt="aqaba-classic-perfume"
              className="aqaba-product-image"
            />
          </div>
          <div className="create-account-header">
           <h3>Create Account</h3>
        </div>
        </div>
        <TextField field={{label: 'Username or email'}} className="form-text" />
        <PasswordInput />
        <div className="create-account-button">
          <TextButton text='CREATE ACCOUNT' onClick={props.close}/>
          <button className="mobile-create-account-button">CREATE ACCOUNT</button>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountModal;
