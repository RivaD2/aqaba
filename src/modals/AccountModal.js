import React from 'react'
import TextField from '../components/TextField';
import TextButton from '../components/TextButton';
import './AccountModal.css'

const AccountModal = props => {
  return (
    <div className="modal-container">
        <div className="modal-content">
         <div className="modal-header">
           Welcome to Aqaba
         </div>
         <div 
          className="modal-image-container" 
          style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/aqaba.amour.png')`}} 
         />
         <TextField field={{label: 'Username or email'}}> Enter Username or Email</TextField>
         <TextField field={{label: 'Enter Password'}}> Enter Password </TextField>
         <TextButton text='CREATE ACCOUNT' onClick={props.close}/>
        </div>
    </div>
  )
}

export default AccountModal;
