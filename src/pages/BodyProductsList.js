import React from 'react'
import {getPerfumes} from '../Axios'
import PerfumeCard from '../components/PerfumeCard';
import './BodyProducts.css';

export default class BodyProductsList extends React.Component {
  state = {
    productsList: undefined,
    filterByCategory: 'body'
  }

  async componentDidMount() {
    const listOfProducts = await getPerfumes();
    this.setState({
      listOfProducts
    });
  }
   
  onListFilterBodyProducts = category => {
    this.setState({
      filterByCategory: category
    })
  }
  
  render() {
    const {listOfProducts} = this.state;
    const bodyProductCards = listOfProducts === undefined ? [] : listOfProducts.filter(card => {
      return card.category === this.state.filterByCategory
    })

    return (
      <div className="body-products-container">
          <div className="links-container">
            <div className="body-links" onClick={() => this.onListFilterBodyProducts('body')}>
              BATH /
            </div>
            <div className="body-links" onClick={() => this.onListFilterBodyProducts('bath')}>
              BODY
            </div>
          </div>
          <div className="card-container">
              {bodyProductCards.map(card => (
                <div classname="body-card" key={card._id}>
                  <PerfumeCard product={card}/>
                </div>
              ))}
          </div>
      </div>
    )
  }
}
