import React from 'react'
import PerfumeCarousel from './Carousel';
import PerfumeCard from './PerfumeCard';
import {getPerfumes} from '../Axios';
import './PerfumesList.css';

export default class PerfumesList extends React.Component {
  state = {
    filterByCategory: 'feminine',
    list: undefined,
  };

  async componentDidMount() {
   const list = await getPerfumes();
   this.setState({
     list
   })
  }
 
  onListFilter = category => {
    this.setState({
      filterByCategory: category,
    })
  };

  render() {
    const {list} = this.state;
    const filteredCards = list === undefined ? [] : list.filter(card => {
      return card.category === this.state.filterByCategory
    });

    return (
      <div className="perfume-container">
        <div className="most-popular">
          MOST POPULAR
        </div>
        <div className="perfume-cards">
          {/* if list is defined, show carousel */}
          {list && <PerfumeCarousel cards={list}/>}
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
                <div className="card" key={card._id}>
                 <PerfumeCard product={card} />
                </div>
              ))}
              </div>
      </div>
    )
  }
}

