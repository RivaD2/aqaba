import React, {useReducer} from 'react'
import {Link} from 'react-router-dom';
import TextButton from '../components/TextButton';
import SimpleSelect from '../components/SimpleSelect';
import IconLabelButtons from '../components/IconLabelButtons';
import '../modals/CartModal.css';

const CartModal = props => {
  return (
    <div className="cart-container">
      <div className="cart-item-count">
          CART ({props.cart.qty})
      </div>
       {!props.cart.items && (<div> Your Cart is Empty</div>)}
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
          <div className="qty">
            <SimpleSelect
              items={[1, 2, 3, 4, 5, 6, 7]} 
              onChange={(newQty) => {
                item.qty = newQty;
                props.onAddItemToCart();
              }} 
              selected={item.qty}
              label='qty'
              value={item.qty}
            />
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
