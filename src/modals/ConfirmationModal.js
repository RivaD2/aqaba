import React from 'react'

const ConfirmationModal = props => {
  return (
    <div className="order-confirmation-container">
      <div className="company-title">
        AQABA
      </div>
      <hr/>
      <div className="confirmation-header">
        YOUR ORDER IS ON IT'S WAY
      </div>
      <div className="tracking-text"> We'll send you tracking information when the order ships.</div>
      <div className="cart-item-count">
          Your Items: ({props.cart.qty})
      </div>
      <hr/>
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
         <div className="order-total">
            <div className="shipping-total">
              Shipping: FREE
            </div>
            <div className="total">
              Total: ${props.cart.price}
            </div>  
          </div>
      </div>
    </div>
  )
}
export default ConfirmationModal;