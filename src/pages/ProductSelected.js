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

  const onAddItemToCart = () => {
    // Making copy of product and adding copy to cart
    // So I can change array of possible values to one selected value
    // Left to right I copy properties from one object to the next
    const copyOfProduct =  Object.assign({}, product, {size, price});
    props.onAddItemToCart(copyOfProduct);
  }

  const onSizeSelected = size => {
    const indexSelected = product.size.indexOf(size);
    setPrice(product.price[indexSelected]);
    setSize(size)
  }

  const {id} = useParams();
  useEffect(() => {
    (async () => {
      const product = await getProduct(id);
      console.log('setting product', product);
      setProduct(product);
      setSize(product.size[0]);
      setPrice(product.price[0]);
    })();
  }, [id]);
   if(!product ) return null;
   
    return (
      <div className="perfume-details-container App-body">
        <div className="perfume-card ">
          <img src={`/assets/${product.image}`} className="productSelected-image" alt="product"/>
        </div>
        <div className="perfume-details">
        <div className="title">
            {product.title}
          </div>
          <div className="price">
           PRICE: ${price} USD
          </div>
          <div className="size">
            <SimpleSelect items={product.size} onChange={onSizeSelected} selected={size}/>
          </div>
          <TextButton className="add-to-cart" text='ADD TO CART' onClick={onAddItemToCart}></TextButton>
          <div className="product-desc">
            {product.description}
          </div>
        </div>
      </div>
    )
  }

  export default ProductSelected;
