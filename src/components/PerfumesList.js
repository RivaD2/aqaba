import React from 'react'
import PerfumeCarousel from './Carousel';
import PerfumeCard from './PerfumeCard';
import {Link} from 'react-router-dom';
import './PerfumesList.css';

export default class PerfumesList extends React.Component {
  render() {
    const tempCards = [{},{},{},{},{}];
    return (
      <div className="perfume-container">
        <div className="most-popular">
          MOST POPULAR
        </div>
        <div className="perfume-cards">
          {/* Replace cards in Carousel with full size images, no effects */}
          <PerfumeCarousel cards={tempCards}/>
          </div>
          <div>
            <hr />
          </div>
          <div className="perfumes-links-container">
            <Link to="/perfumes-masculine" className="perfume-links">
              AQABA FEMININE /
            </Link>
            <Link to="/perfumes-masculine" className="perfume-links">
              AQABA MASCULINE
            </Link>
              <div className="card-container">
               {/* Grid for Card layout */}
               <div className="card">
               <PerfumeCard />
               </div>
              </div>
          </div>
      </div>
    )
  }
}

