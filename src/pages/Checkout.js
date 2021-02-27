import React, { Component } from 'react'
import TextField from '../components/TextField';
import Accordian from '../components/Accordian';
import '../pages/Checkout.css'

export default class Checkout extends Component {
  shippingInfo = [
    {
      label: 'First Name*'
    },
    {
      label: 'Last Name*'
    },
    {
      label: 'Address*'
    },
    {
      label: ''
    },
    {
      label: 'City*'
    },
    {
      label: 'Zipcode*'
    },
    {
      label: 'State/Province*'
    }
];

  render() {
    return (
      <div className="checkout-container">
        <div className="checkout-header">
          Checkout
          </div>
      <div className="shipping-details">
        <div className="shipping-header">
          Shipping Address
        </div>
        {this.shippingInfo.map(field => (
          <TextField key={field.label} field={field} />
        ))}
        <Accordian />
      </div>
    </div>
    )
  }
}
