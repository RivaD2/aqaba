import React from 'react'
import TextField from '../components/TextField';
import TextButton from '../components/TextButton';
import PasswordInput from '../components/PasswordInput';
import './AccountModal.css'

const AccountModal = props => {
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
              alt="aqaba-classic"
              className="aqaba-product-image"
            />
          </div>
          <div className="create-account-header">
            CREATE ACCOUNT
        </div>
        </div>
        <TextField field={{label: 'Username or email'}} className="form-text" />
        <PasswordInput />
        <div className="create-account-button">
          <TextButton text='CREATE ACCOUNT' onClick={props.close}/>
        </div>
      </div>
    </div>
  )
}

export default AccountModal;
