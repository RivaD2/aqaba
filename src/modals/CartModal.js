import React from 'react'
import TextButton from '../components/TextButton';
import IconLabelButtons from '../components/IconLabelButtons';
import '../modals/CartModal.css';

const CartModal = () => {
  return (
    <div className="cart-container">
      <div className="perfume-card">
      <div className="cart-item-count">
          CART(1)
        </div>
        <img src={'/assets/aqaba-classic.png'} alt="product"></img>
      </div>
      <div className="cart-details">
        <div className="product-title">
          PERFUME TITLE
        </div>
        <div className="product-price">
          PRICE
        </div>
        <div ClassName="product-size-selected">
          SIZE
        </div>
        <div className="qty">
          {/* use SimpleSelect component with props so I can input qty and size depending */}
          QTY: 
        </div>
          <IconLabelButtons/>
        <div className="edit-and-checkout">
          <TextButton className="edit-cart" text='EDIT CART'></TextButton>
          <TextButton className="checkout" text='CHECKOUT'></TextButton>
        </div>
      </div>
    </div>
  )
}

export default CartModal;
