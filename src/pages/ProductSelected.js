import React from 'react';
import TextButton from '../components/TextButton';
import SimpleSelect from '../components/SimpleSelect';
import Modal from '../modals/Modal';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getProduct} from '../Axios';
import './ProductSelected.css';

const ProductSelected = () => {
  const [product, setProduct] = useState();
  
  let toggleModal = () => {};
  const toggleModalCallback = toggleFunction => {
    toggleModal = toggleFunction;
  }
  const {id} = useParams();
  useEffect(() => {
    (async () => {
      const product = await getProduct(id);
      setProduct(product);
    })();
  }, [id]);
   if(!product ) return null;
   
    return (
      <div className="perfume-details-container">
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
            <SimpleSelect />
          </div>
          <TextButton className="add-to-cart" text='ADD TO CART' onClick={() => toggleModal(true)}></TextButton>
          <div className="product-desc">
            {product.description}
          </div>
        </div>
        <Modal toggleModalCallback={toggleModalCallback}>
          <div>Cart Modal goes here</div>
        </Modal>
      </div>
    )
  }

  export default ProductSelected;
