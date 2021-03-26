import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PerfumeCard from './PerfumeCard';
import './Carousel.css';

class PerfumeCarousel extends React.Component {
  render() {
    let perfumeCards = this.props.cards;
    const mostPopular = [
      'MIDNIGHT SUN', 
      'AQABA SANDS', 
      'AQABA CLASSIC', 
      'AQABA HAIR MIST', 
      'AQABA BODY LOTION'
    ];
    
    const listOfPerfumes = perfumeCards.filter(card => {
      return mostPopular.includes(card.title)
      // Create div with background image inside, add onClick and other attributes to div
      // Remove PerfumeCard component as it is dynamic
    }).map(card => <PerfumeCard key={card._id} product={card}/>)

    return (
      <div className="carousel-container">
          <Carousel showArrows={true} showThumbs={true}>
            {listOfPerfumes}
          </Carousel>
        </div>
    );
  }
};

export default PerfumeCarousel;

