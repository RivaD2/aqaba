import React from 'react'
import TextButton from '../components/TextButton';
import IconLabelButtons from '../components/IconLabelButtons';
import '../modals/CartModal.css';

const CartModal = props => {
  console.log('cart has items', props.items);
  return (
    <div className="cart-container">
      <div className="cart-item-count">
          CART ({props.items.length})
      </div>
          {props.items.map(item => (
      <div className="perfume-card">
        <div className="cart-image">
          <img src={`/assets/${item.image}`} className="aqaba-image" alt="product"></img>
        </div>
        <div className="cart-details">
            <div className="product-title">
            {item.title}
          </div>
          <div className="product-price">
            PRICE: {item.price}
          </div>
          <div ClassName="product-size-selected">
            SIZE: {item.size}
          </div>
          <div className="qty">
            QTY: 
          </div>
            <IconLabelButtons/>
        </div>
      </div>
        ))}
      <div className="edit-and-checkout">
        <TextButton className="checkout" text='EDIT CART'></TextButton>
        <TextButton className="checkout" text='CHECKOUT'></TextButton>
      </div>
    </div>
  )
}

export default CartModal;
