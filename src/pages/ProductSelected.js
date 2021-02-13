import React from 'react';
import TextButton from '../components/TextButton';
import SimpleSelect from '../components/SimpleSelect';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getProduct} from '../Axios';
import './ProductSelected.css';

const ProductSelected = props => {
  const [product, setProduct] = useState();

  const onAddItemToCart = () => {
    props.onAddItemToCart(product)
  }

  const {id} = useParams();
  useEffect(() => {
    (async () => {
      const product = await getProduct(id);
      setProduct(product);
      console.log('setting product', product);
    })();
  }, [id]);
   if(!product ) return null;
   
    return (
      <div className="perfume-details-container App-body">
        <div className="perfume-card">
          <img src={`/assets/${product.image}`} alt="product"/>
        </div>
        <div className="perfume-details">
        <div className="title">
            {product.title}
          </div>
          <div className="price">
            PRICE
          </div>
          <div className="size">
            <SimpleSelect items={product.size}/>
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
