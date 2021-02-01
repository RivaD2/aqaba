import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PerfumeCard from './PerfumeCard';

class PerfumeCarousel extends React.Component {
    render() {
        let perfumeCards = this.props.cards;
        const listOfPerfumes = perfumeCards.map(card => <PerfumeCard key={card}/>)
        return (
            <Carousel>
              {listOfPerfumes}
            </Carousel>
        );
    }
};

export default PerfumeCarousel;
