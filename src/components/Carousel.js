import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import {useHistory} from 'react-router-dom';

const PerfumeCarousel = props => {
const history = useHistory();

  /**
   * @param  {event} event event for when product is clicked
   */
  const onProductClick = e => {
    history.push(`/perfume/${e.target.id}`);
  }

  let products = props.products;
  const mostPopular = [
    'MIDNIGHT SUN', 
    'AQABA SANDS', 
    'AQABA CLASSIC', 
    'AQABA HAIR MIST', 
    'AQABA BODY LOTION',
    'AQABA PERFUME CANDLE',
    'AQABA INCENCE',
    'AQABA BLACK'
  ];
    
  const carouselItems = products.filter(item => {
    return mostPopular.includes(item.title)
  }).map(item => 
    <div 
      id={item._id}
      key={item._id}
      className="carousel-item"
      style={{backgroundImage:`url('${process.env.PUBLIC_URL}/assets/${item.image}')`}}
      onClick={onProductClick}
    />)

  return (
    <div className="carousel-container">
        <Carousel showArrows={true} showThumbs={false}>
          {carouselItems}
        </Carousel>
      </div>
  );
};

export default PerfumeCarousel;

