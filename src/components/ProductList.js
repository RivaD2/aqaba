import React from 'react'
import PerfumeCarousel from './Carousel';
import PerfumeCard from './PerfumeCard';
import {getPerfumes} from '../Axios';
import './ProductsList.css';

export default class ProductList extends React.Component {
  state = {
    list: [],
    price: undefined
  }

  componentDidMount() {
    this.onListFilter();
  }
 
  onListFilter = async category => {
    try {
      if(category === undefined) {
        // If onListFilter is called without category, category is picked based off page name
        category = this.props.page === 'perfumes' ? 'feminine' : 
         (this.props.page === 'bath_and_body' ? 'body' : 'gift');
      }
      const listOfProducts = await getPerfumes(category);
      this.setState({
        list: listOfProducts, 
      })
    } catch (err) {
      console.log(err);
    }
  }
 
  componentDidUpdate = prevProps => {
    if(this.props.page !== prevProps.page){
      this.onListFilter();
    }
  }

  render() {
    const {list} = this.state;
    const {page} = this.props;
    let filterSections;
    switch(page) {
      case 'perfumes':
        // Making a single JSX element
        filterSections = (
         <>
          <div className="perfume-links" onClick={() => this.onListFilter('feminine')}>
            AQABA FEMININE /
          </div>
          <div className="perfume-links" onClick={() => this.onListFilter('masculine')}>
            AQABA MASCULINE
          </div>
         </>
        );
        break;
      case 'bath_and_body':
        filterSections = (
          <>
            <div className="perfume-links" onClick={() => this.onListFilter('bath')}>
              BATH /
            </div>
            <div className="perfume-links" onClick={() => this.onListFilter('body')}>
              BODY
            </div>
          </>
        );
        break;
      case 'gifts':
          filterSections = (
            <div className="perfume-links" onClick={() => this.onListFilter('gift')}>
              GIFTS
            </div>
          );
        break;
      default: 
      return (<div></div> );
    }

    return (
      <div className="perfume-container">
        <div className="most-popular">
          MOST POPULAR
        </div>
        <div className="perfume-cards">
           {/* if list is defined, show carousel */}
           {list && <PerfumeCarousel products={list} />}
        </div>
        <div>
          <hr className="divider-line"/>
        </div>
        <div className="perfumes-links-container">
          {filterSections}
        </div>
        <div className="product-list-card-container">
          {list.map(card => (
            <div className="product-list-card" key={card._id}>
              <PerfumeCard product={card} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}
