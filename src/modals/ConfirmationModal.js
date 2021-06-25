import React from 'react'
import './ConfirmationModal.css';

/**
 * Function that renders Confirmation Modal
 */
const ConfirmationModal = props => {
  return (
    <div className="order-confirmation-container">
        <div className="title">
          AQABA
        </div>
        <hr />
        <div className="confirmation-header">
          Thank you for your order!
        </div>
        <div className="order-number">
         Order Number:  #C442879
        </div>
        <div className="tracking-text"> We'll send you tracking information when the order ships.</div>
      <div className="cart-count">
          Your Items: ({props.cart.qty})
      </div>
      <div className="items-from-cart">
        {props.cart.items && props.cart.items.map((item, index) => (
          <div className="perfume-card" key={index}>
            <div className="cart-image">
              <img 
                src={`/assets/${item.image}`} 
                className="aqaba-image" 
                alt="product">
              </img>
            </div>
            <div className="cart-details">
                <div className="product-title">
                {item.title}
              </div>
              <div className="product-price">
                Price: ${item.price} USD
              </div>
              <div className="product-size-selected">
                Size: {item.size}
              </div>
              <div className="product-qty">
                Qty:{item.qty}
              </div>
            </div>
          </div>
        ))}
        <hr />
         <div className="totals">
           <div className="payment-method">
             Payment Method: Credit Card
           </div>
            <div className="total-shipping">
              Shipping: FREE
            </div>
            <div className="order-total">
              Total: ${props.cart.price}
            </div>  
          </div>
      </div>
    </div>
  )
}
export default ConfirmationModal;