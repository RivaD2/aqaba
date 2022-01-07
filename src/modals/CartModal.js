import React from "react";
import { Link } from "react-router-dom";
import TextButton from "../components/TextButton";
import SimpleSelect from "../components/SimpleSelect";
import IconLabelButtons from "../components/IconLabelButtons";
import "../modals/CartModal.css";

/**
 Function that renders the CartModal
 */
const CartModal = (props) => {
  return (
    <div className="cart-container">
      <h1 className="cart-item-count">CART ({props.cart.qty})</h1>
      {!props.cart.items && <p> Your Cart is Empty</p>}
      {props.cart.items &&
        props.cart.items.map((item, index) => (
          <div className="perfume-card" key={index}>
            <div className="cart-image">
              <img
                src={`/assets/${item.image}`}
                className="aqaba-image"
                alt="product"
              ></img>
            </div>
            <div className="cart-details">
              <p className="product-title">{item.title}</p>
              <p className="product-price">Price: ${item.price} USD</p>
              <p className="product-size-selected">Size: {item.size}</p>
              <p className="product-qty">Qty:{item.qty}</p>
              <div className="qty">
                <SimpleSelect
                  items={[1, 2, 3, 4, 5, 6, 7]}
                  onChange={(newQty) => {
                    item.qty = newQty;
                    props.onAddItemToCart();
                  }}
                  selected={item.qty}
                  label="qty"
                  value={item.qty}
                />
              </div>
              <IconLabelButtons
                className="remove-item"
                onClick={() => props.onRemoveItemFromCart(index)}
              />
            </div>
          </div>
        ))}
      <div className="edit-and-checkout">
        <Link
          to="/checkout"
          style={{ textDecoration: "inherit" }}
          className="checkout"
          onClick={() => props.toggleModal()}
        >
          <TextButton text="CHECKOUT" className="checkout-button" />
        </Link>
        <Link to="/perfumes" onClick={() => props.toggleModal()}>
          <button className="secondary-button">CONTINUE SHOPPING</button>
        </Link>
      </div>
    </div>
  );
};

export default CartModal;
