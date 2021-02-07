import React from 'react'
import PerfumeCarousel from './Carousel';
import PerfumeCard from './PerfumeCard';
import './PerfumesList.css';

export default class PerfumesList extends React.Component {
  // Need to do ajax call to get list of perfumes from DB
  state = {filterByCategory: 'feminine'};

  onListFilter = category => {
    this.setState({
      filterByCategory: category
    })
  };

  render() {
    const tempCards = [
      {category: 'masculine'},
      {category: 'masculine'},
      {category:'feminine'},
      {category: 'feminine'},
      {category: 'feminine'}
    ];

    const filteredCards = tempCards.filter(card => {
      return card.category === this.state.filterByCategory
    });

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
            <div className="perfume-links" onClick={() => this.onListFilter('feminine')}>
              AQABA FEMININE /
            </div>
            <div className="perfume-links" onClick={() => this.onListFilter('masculine')}>
              AQABA MASCULINE
            </div>
          </div>
          <div className="card-container">
              {filteredCards.map(card => (
                <div className="card" key={card}>
                 <PerfumeCard />
                </div>
              ))}
              </div>
      </div>
    )
  }
}

