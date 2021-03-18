import React from 'react'
import {getPerfumes} from '../Axios'
import PerfumeCard from '../components/PerfumeCard';
import './BodyProducts.css';

export default class BodyProductsList extends React.Component {
  state = {
    productsList: [],
    filterByCategory: 'body'
  }

  componentDidMount() {
    this.onListFilterBodyProducts(this.state.filterByCategory);
  }
   
  onListFilterBodyProducts = async category => {
    try {
      const listOfProducts = await getPerfumes(category);
      this.setState({
        productsList: listOfProducts,
        filterByCategory: category
    })
    } catch (err) {
      console.log(err)
    }
  }
  
  render() {
    return (
      <div className="body-products-container">
          <div className="links-container">
            <div className="body-links" onClick={() => this.onListFilterBodyProducts('bath')}>
              BATH /
            </div>
            <div className="body-links" onClick={() => this.onListFilterBodyProducts('body')}>
              BODY
            </div>
          </div>
          <div className="card-container">
              {this.state.productsList.map(card => (
                <div classname="body-card" key={card._id}>
                  <PerfumeCard product={card}/>
                </div>
              ))}
          </div>
      </div>
    )
  }
}
