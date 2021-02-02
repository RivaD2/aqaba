import React from 'react'
import PerfumeCarousel from './Carousel';
import './PerfumesList.css';

export default class PerfumesList extends React.Component {
  render() {
    const tempCards = [{},{},{},{},{}];
    return (
      <div className="perfume-container">
          <div className="perfumes-links">
            AQABA FEMININE/AQABA MASCULINE
          </div>
        <div className="perfume-cards">
          <PerfumeCarousel cards={tempCards}/>
          </div>
      </div>
    )
  }
}

