import React from 'react';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getProduct} from '../Axios';
import './PerfumeSelected.css';

const PerfumeSelected = () => {
  const [product, setProduct] = useState();
  const {id} = useParams();
  useEffect(() => {
    (async () => {
      const product = await getProduct(id);
      setProduct(product);
    })();
  }, [id]);

   if(!product) return null;
    return (
      <div className="perfume-details-container">
        <div className="perfume-card">
          <img src={`/assets/${product.image}`} alt="product"/>
          <div className="title">
            {product.title}
          </div>
        </div>
        <div className="perfume-details">
          {product.description}
        </div>
      </div>
    )
  }

export default PerfumeSelected;