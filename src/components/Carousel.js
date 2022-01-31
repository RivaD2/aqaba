import React from "react";
import { useHistory } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./Carousel.css";

const PerfumeCarousel = (props) => {
  const history = useHistory();

  /**
   * @param  {event} event event for when product is clicked
   */
  const onProductClick = (e) => {
    history.push(`/perfume/${e.target.id}`);
  };

  let products = props.products;
  const mostPopular = ["Air Kingdom", "Earth Kingom", "Momo"];

  const carouselItems = products
    .filter((item) => {
      return mostPopular.includes(item.title);
    })
    .map((item) => (
      <div
        id={item._id}
        key={item._id}
        className="carousel-item"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/assets/${item.image}')`,
        }}
        onClick={onProductClick}
      />
    ));

  return (
    <div className="carousel-container">
      <Carousel showArrows={true} showThumbs={false}>
        {carouselItems}
      </Carousel>
    </div>
  );
};

export default PerfumeCarousel;
