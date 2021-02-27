import React from 'react'
import {Link} from 'react-router-dom';
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
       {!props.items && (<div> Your Cart is Empty</div>)}
        {props.items && props.items.map((item, index) => (
      <div className="perfume-card">
        <div className="cart-image">
          <img src={`/assets/${item.image}`} className="aqaba-image" alt="product"></img>
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
          <div className="qty">
            Qty: 
          </div>
            <IconLabelButtons className="remove-item" onClick={() => props.onRemoveItemFromCart(index)}/>
        </div>
      </div>
        ))}
      <div className="edit-and-checkout">
        <TextButton className="checkout" text='EDIT CART'></TextButton>
          <Link 
            to="/checkout" 
            style={{ textDecoration: 'inherit'}} 
            className="checkout"
            onClick={() => props.toggleModal()}>
        <TextButton text='CHECKOUT'/>
        </Link>
      </div>
    </div>
  )
}

export default CartModal;
