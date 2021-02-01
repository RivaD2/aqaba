import React from 'react'
import PerfumeCarousel from './Carousel';

import './PerfumesList.css';

export default class PerfumesList extends React.Component {
  render() {
    return (
      <div className="perfume-container">
        <div className="perfume-cards">
        </div>
        <PerfumeCarousel />
      </div>
    )
  }
}

