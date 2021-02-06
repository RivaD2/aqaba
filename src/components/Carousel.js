import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PerfumeCard from './PerfumeCard';
import './Carousel.css';

class PerfumeCarousel extends React.Component {
    render() {
        let perfumeCards = this.props.cards;
        const listOfPerfumes = perfumeCards.map(card => <PerfumeCard key={card}/>)
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
/*<Carousel showArrows={true} showThumbs={true}>
{
  images.map((url, index) => (
      <div key={index}>
         <img src={url} />
         <p>Legend</p>
      </div>
  ))
}
</Carousel>
*/
