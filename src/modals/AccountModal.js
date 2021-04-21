import React from 'react'
import Modal from './Modal';
import TextField from '../components/TextField';
import TextButton from '../components/TextButton';
import './AccountModal.css'

const AccountModal = props => {
  return (
    <div className="modal-container">
      <Modal open={props.open}>
        <div className="modal-content">
         <div className="modal-header">
           Welcome to Aqaba
         </div>
         <div 
          className="modal-image-container" 
          style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/aqaba.amour.png')`}} 
         />
         <TextField> Enter Username or Email</TextField>
         <TextField> Enter Password</TextField>
         <TextButton text='CREATE ACCOUNT' onClick={props.close}/>
        </div>
      </Modal>
    </div>
  )
}

export default AccountModal;
