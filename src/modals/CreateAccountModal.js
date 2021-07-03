import React from 'react'
import TextField from '../components/TextField';
import TextButton from '../components/TextButton';
import PasswordInput from '../components/PasswordInput';
import Hidden from '@material-ui/core/Hidden';
import './CreateAccountModal.css'

/**
 * Function that renders CreateAccountModal
 */
const CreateAccountModal = props => {
  return (
    <div className="create-account-modal-container" id="create-account-modal">
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
          <Hidden xsDown>
            <TextButton text='CREATE ACCOUNT' onClick={props.onClose}/>
          </Hidden>
          <button className="mobile-create-account-button"onClick={props.onClose}>CREATE ACCOUNT</button>
        </div>
      </div>
    </div>
  )
}
export default CreateAccountModal;
