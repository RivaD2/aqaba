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
  
  contactEmail = [
    {
      label: 'Email Address'
    }
  ]

  render() {
    return (
        <div className="checkout-container">
          <div className="checkout-header">
            Checkout
          </div>
          <div className="contact-details-container">
            <div className="contact-header">
              Contact information
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
        <div className="checkout-items-container">
          <div className="item-count">
            ITEMS: (3)
          </div>
          <div className="perfume-card">
            <div className="item-image">
              IMAGE
            </div>
            <div className="item-details">
              <div className="item-title">
                perfume title
              </div>
              <div className="item-price">
                perfume price
              </div>
              <div className="item-size">
                perfume size
              </div>
              <div className="item-qty">
                perfume qty
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
