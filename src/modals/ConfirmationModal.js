import React from "react";
import "./ConfirmationModal.css";

/**
 * Function that renders Confirmation Modal
 */
const ConfirmationModal = (props) => {
  return (
    <div className="order-confirmation-container">
      <h1 className="title">AQABA</h1>
      <hr />
      <p className="confirmation-header">Thank you for your order!</p>
      <p className="order-number">Order Number: #C442879</p>
      <p className="tracking-text">
        {" "}
        We'll send you tracking information when the order ships.
      </p>
      <p className="cart-count">Your Items: ({props.cart.qty})</p>
      <div className="items-from-cart">
        {props.cart.items &&
          props.cart.items.map((item, index) => (
            <div className="perfume-card" key={index}>
              <div className="cart-image">
                <img
                  src={`/assets/${item.image}`}
                  className="cart-image"
                  alt="product"
                ></img>
              </div>
              <div className="cart-details">
                <p className="product-title">{item.title}</p>
                <p className="product-price">Price: ${item.price} USD</p>
                <p className="product-size-selected">Size: {item.size}</p>
                <p className="product-qty">Qty:{item.qty}</p>
              </div>
            </div>
          ))}
        <hr />
        <div className="totals">
          <p className="payment-method">Payment Method: Credit Card</p>
          <p className="total-shipping">Shipping: FREE</p>
          <p className="order-total">Total: ${props.cart.price}</p>
        </div>
      </div>
    </div>
  );
};
export default ConfirmationModal;
