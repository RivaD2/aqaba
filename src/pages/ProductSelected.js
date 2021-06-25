import React from 'react';
import TextButton from '../components/TextButton';
import SimpleSelect from '../components/SimpleSelect';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getProduct} from '../Axios';
import './ProductSelected.css';

const ProductSelected = props => {
  const [product, setProduct] = useState();
  const [size, setSize] = useState('');
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState(1);

  /**
   * Adds selected product to cart
   */
  const onAddItemToCart = () => {
    // Making copy of product and adding copy to cart
    // So I can change array of possible values to one selected value
    // Left to right I copy properties from one object to the next
    const copyOfProduct =  Object.assign({}, product, {size, price});
    props.onAddItemToCart(copyOfProduct, quantity, price);
  }

  /**
   * @param  {number} size size of product selected
   */
  const onSizeSelected = size => {
    const indexSelected = product.size.indexOf(size);
    setPrice(product.price[indexSelected]);
    setSize(size)
  }

  const {id} = useParams();
  useEffect(() => {
    (async () => {
      const product = await getProduct(id);
      setProduct(product);
      setSize(product.size[0]);
      setPrice(product.price[0]);
    })();
  }, [id]);
   if(!product ) return null;
   
    return (
      <div className="product-details-container App-body">
        <div>
        <div className="product-card">
          <img src={`/assets/${product.image}`} className="product-selected-image" alt="product"/>
        </div>
        </div>
        <div className="product-details">
        <div className="title">
            {product.title}
          </div>
          <div className="price">
           PRICE: ${price} USD
          </div>
          <div className="size" id="size-input">
            <SimpleSelect 
              items={product.size} 
              onChange={onSizeSelected} 
              selected={size}
              label='size'
              aria-labelledby="size-input"
            />
          </div>
          <div className="qty" id="qty-input">
            <SimpleSelect 
              items={[1, 2, 3, 4, 5, 6, 7]} 
              value={quantity}
              onChange={setQuantity} 
              selected={quantity}
              label='qty'
              aria-labelledby="qty-input"
            />
          </div>
          <TextButton className="add-to-cart" text='ADD TO CART' onClick={onAddItemToCart} ></TextButton>
          <div className="product-desc">
            {product.description}
          </div>
        </div>
      </div>
    )
  }

  export default ProductSelected;
