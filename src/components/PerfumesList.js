import React from 'react'
import PerfumeCarousel from './Carousel';
import './PerfumesList.css';

export default class PerfumesList extends React.Component {
  render() {
    const tempCards = [{},{},{},{},{}];
    return (
      <div className="perfume-container">
        <div className="perfume-cards">
        </div>
          <PerfumeCarousel cards={tempCards}/>
      </div>
    )
  }
}

