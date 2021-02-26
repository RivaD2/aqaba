import React, { Component } from 'react'
import TextField from '../components/TextField';
import '../pages/Checkout.css'

export default class Checkout extends Component {
  render() {
    return (
      <div className="checkout-container">
        <div className="checkout-header">
          Checkout
          </div>
         <div ClassName="shipping-header">
           Shipping Address
         </div>
      <div className="shipping-details">
         <TextField />
      </div>
    </div>
    )
  }
}
