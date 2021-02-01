import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PerfumeCard from './PerfumeCard';

class PerfumeCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <div>
                    <PerfumeCard />
                </div>
            </Carousel>
        );
    }
};

export default PerfumeCarousel;
