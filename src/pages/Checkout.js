import React, { Component } from 'react'
import TextField from '../components/TextField';
import Accordian from '../components/Accordian';
import IconLabelButtons from '../components/IconLabelButtons';
import TextButton from '../components/TextButton';
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
          <div className="shipping-container">
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
          </div>
      <div className="checkout-items-container">
          <div className="item-details">
              <div className="items-header">
                Items In Cart({this.props.items.length})
              </div>
              {this.props.items && this.props.items.map((item, index) => (
                  <div className="item-container">
                    <div className="image-container">
                      <img src="/assets/aqaba-sands.png" alt="perfume" className="item-image" />
                    </div>
                    <div className="items-added-container">
                      <div className="item-title">
                      AQABA SANDS
                      </div>
                      <div className="item-price">
                        $100.00
                      </div>
                      <div className="item-size">
                        2.5oz
                      </div>
                      <div className="item-qty">
                        Qty: 1
                      </div>
                      <div className="shipping-total">
                        Shipping: FREE
                      </div>
                      <div className="total">
                        TOTAL: $110.00
                      </div>
                      <IconLabelButtons className="remove-item" />
                    </div>
                </div>
              ))}
              <div className="checkout-button">
                <div>TOTAL:</div>
                <div className="placeOrder-button">
                  <TextButton text='PLACE ORDER'/>
                </div>
              </div>
          </div>
       </div>
     </div>
    )
  }
}
