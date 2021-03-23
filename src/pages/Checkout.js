import React from 'react'
import TextField from '../components/TextField';
import IconLabelButtons from '../components/IconLabelButtons';
import TextButton from '../components/TextButton';
import CountrySelect from '../components/CountrySelect';
import '../pages/Checkout.css'

export default class Checkout extends React.Component {
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
      label: 'City*',
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
    console.log('what is total in checkout',this.props.cart.price);
    console.log('what is this.props.cart.items in checkout', this.props.cart.items)
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
                  <CountrySelect/>
                </div>
            </div>
          </div>
      <div className="checkout-items-container">
          <div className="item-details">
              <div className="items-header">
                Items In Cart({this.props.cart.qty})
              </div>
              {this.props.cart.items && this.props.cart.items.map((item, index) => (
                  <div className="item-container" key={index}>
                    <div className="image-container">
                      <img 
                        src={`/assets/${item.image}`} 
                        alt="product" 
                        className="aqaba-image" 
                      />
                    </div>
                    <div className="items-added-container">
                      <div className="item-title">
                        {item.title}
                      </div>
                      <div className="item-price">
                        Price: ${item.price}
                      </div>
                      <div className="item-size">
                        Size: {item.size}
                      </div>
                      <div className="item-qty">
                        Qty: {item.qty}
                      </div>
                        <IconLabelButtons className="remove-item" onClick={() => this.props.onRemoveItemFromCart(index)} />
                    </div>
                  </div>
                 ))}
              <div className="checkout-order-container">
                  <div className="shipping-total">
                    Shipping: FREE
                  </div>
                  <div className="total">
                    TOTAL: ${this.props.cart.price}
                  </div>  
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
