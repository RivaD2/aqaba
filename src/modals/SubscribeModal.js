import React from 'react'
import TextButton from '../components/TextButton';
import TextField from '../components/TextField';
import { Hidden } from '@material-ui/core';
import './SubscribeModal.css';

const SubscribeModal = props => {
  return (
    <div>
      <div className="subscribe-modal">
      <div className="modal-content">
        <div className="company-title">
          AQABA
        </div>
        <div className="slogan-text">A CELEBRATION OF LOVE</div>
        <div className="modal-image-container">
          <div className="subscribe-modal-image">
            <img 
              src="/assets/aqaba-classic.png" 
              alt="aqaba-classic perfume"
              className="aqaba-product-image"
            />
          </div>
          <div className="text-container">
           <div className="text">Take 15% off 
             your first order.
           </div>
        </div>
        </div>
        <TextField field={{label: 'Username or email'}} className="form-text" />
        <div className="signup-button-container">
          <Hidden xsDown>
            <TextButton text='Sign Up' onClick={props.onClose}/>
          </Hidden>
          <button className="signup-button-mobile" onClick={props.onClose}>SIGN UP</button>
        </div>
      </div>
    </div>
    </div>
  )
}
export default SubscribeModal;