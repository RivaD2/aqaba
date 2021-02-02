import React from 'react'
import PerfumeCarousel from './Carousel';
import {Link} from 'react-router-dom';
import './PerfumesList.css';

export default class PerfumesList extends React.Component {
  render() {
    const tempCards = [{},{},{},{},{}];
    return (
      <div className="perfume-container">
          <div className="perfumes-links-container">
            <Link to="/perfumes-masculine" className="perfume-links">
              AQABA FEMININE /
            </Link>
            <Link to="/perfumes-masculine" className="perfume-links">
              AQABA MASCULINE
            </Link>
          </div>
        <div className="perfume-cards">
          <PerfumeCarousel cards={tempCards}/>
          </div>
      </div>
    )
  }
}

