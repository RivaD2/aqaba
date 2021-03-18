import React from 'react'
import PerfumeCarousel from './Carousel';
import PerfumeCard from './PerfumeCard';
import {getPerfumes} from '../Axios';
import './PerfumesList.css';

export default class PerfumesList extends React.Component {
  state = {
    filterByCategory: 'feminine',
    list: [],
    price: undefined
  };

  componentDidMount() {
   this.onListFilter(this.state.filterByCategory);
  }
 
  onListFilter = async category => {
    try {
     const listOfProducts = await getPerfumes(category);
     this.setState({
       list: listOfProducts,
       filterByCategory: category
     })
    } catch (err) {
      console.log(err);
    }
  };
  
  render() {
    const {list, price} = this.state;
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
            {this.state.list.map(card => (
              <div className="card" key={card._id}>
                <PerfumeCard product={card}/>
              </div>
            ))}
          </div>
      </div>
    )
  }
}

