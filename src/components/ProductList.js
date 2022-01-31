import React from "react";
import { getPerfumes, getSearch } from "../Axios";
import { withRouter } from "react-router";
import PerfumeCarousel from "./Carousel";
import PerfumeCard from "./PerfumeCard";
import "./ProductsList.css";

class ProductList extends React.Component {
  state = {
    list: [],
    price: undefined,
  };

  componentDidMount() {
    this.props.page === "search" ? this.onSearch() : this.onListFilter();
  }

  onSearch = async () => {
    const term = this.props.match.params.term;
    const listOfProducts = await getSearch(term);
    this.setState({
      list: listOfProducts,
    });
  };
  /**
   * Filters the list of products based of category and sets the new products
   * of that category in state.
   * If method is called without category, category is picked based off page name
   * @param {string} category the category of product
   */
  onListFilter = async (category) => {
    try {
      if (category === undefined) {
        category = this.props.page === "perfumes" ? "feminine" : "gift";
      }
      const listOfProducts = await getPerfumes(category);
      this.setState({
        list: listOfProducts,
      });
    } catch (err) {
      console.log(err);
    }
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.page !== prevProps.page) {
      this.onListFilter();
    }
  };

  render() {
    const { list } = this.state;
    const { page } = this.props;
    let filterSections;
    switch (page) {
      case "perfumes":
        // Making a single JSX element
        filterSections = (
          <>
            <FilterSection
              filter="feminine"
              label="APPA FEMININE"
              onListFilter={this.onListFilter}
            />
            <FilterSection
              filter="masculine"
              label="APPA MASCULINE"
              onListFilter={this.onListFilter}
            />
          </>
        );
        break;
      case "gifts":
        filterSections = (
          <FilterSection
            filter="gift"
            label="GIFTS"
            onListFilter={this.onListFilter}
          />
        );
        break;
      case "search":
        filterSections = undefined;
        break;
      default:
        return <div></div>;
    }

    return (
      <div className="perfume-container">
        {filterSections !== "gift" ? (
          <div></div>
        ) : (
          <div className="most-popular">MOST POPULAR</div>
        )}
        <div className="perfume-cards">
          {list && <PerfumeCarousel products={list} />}
        </div>
        <div>
          <hr className="divider-line" />
        </div>
        <div className="perfumes-links-container">{filterSections}</div>
        <div className="product-list-card-container">
          {list.map((card) => (
            <div className="product-list-card" key={card._id}>
              <PerfumeCard product={card} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const FilterSection = ({ filter, label, onListFilter }) => (
  <div className="perfume-links" onClick={() => onListFilter(filter)}>
    {label}
  </div>
);

export default withRouter(ProductList);
