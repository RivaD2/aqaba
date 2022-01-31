import React from "react";
import TextField from "../components/TextField";
import IconLabelButtons from "../components/IconLabelButtons";
import TextButton from "../components/TextButton";
import SimpleSelect from "../components/SimpleSelect";
import CountrySelect from "../components/CountrySelect";
import "../pages/Checkout.css";

/**
 * Generates an array of years for SimpleSelect dropdown on Checkout
 * @returns {Array} list of all years
 */
const calculateYears = () => {
  const year = new Date().getFullYear();
  let minimumYears = year + 10;
  const allYears = [];
  for (let i = year; i <= minimumYears; i++) {
    allYears.push(i);
  }
  return allYears;
};

export default class Checkout extends React.Component {
  months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  years = calculateYears();
  // create state for user details
  // pass the details as a callback to the orderConfirmation model (() =>)
  state = {
    monthSelected: "",
    yearSelected: "",
    cvv: "",
  };

  /**
   * @param  {Number} year year the user selects
   */
  onYearSelected = (year) => {
    this.setState({
      yearSelected: year,
    });
  };

  /**
   * @param  {Number} month the month the user selects
   */
  onMonthSelected = (month) => {
    this.setState({
      monthSelected: month,
    });
  };

  /**
   * @param {event} e click event for cvv input selected
   */
  onCvvSelected = (e) => {
    this.setState({
      term: e.target.value,
    });
    this.props.onSearchChanged(e.target.value);
  };

  /**
   * @param  {event} e click event for form submit
   */
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onCvvSelected(this.state.cvv);
  };

  shippingInfo = [
    { label: "Address*" },
    { label: "" },
    { label: "City*" },
    { label: "Zipcode*" },
    { label: "State/Province*" },
  ];

  contactInfo = [
    { label: "First Name*" },
    { label: "Last Name*" },
    { label: "Email Address" },
  ];

  paymentInfo = [{ label: "Cardholder Name" }, { label: "Card Number" }];
  render() {
    const { yearSelected, monthSelected } = this.state;
    return (
      <div className="checkout-container">
        <div className="shipping-container">
          <h1 className="checkout-header">Checkout</h1>
          <div className="contact-details-container">
            <div className="contact-info-container">
              <p className="name-and-email-text">Contact information</p>
              <div className="checkout-sign-in">
                <p>Already have an account?</p>
                <p
                  className="sign-in-link"
                  onClick={this.props.showCreateAccountModal}
                >
                  Sign In
                </p>
              </div>
              {this.contactInfo.map((field) => (
                <TextField key={field.label} field={field} />
              ))}
            </div>
            <div className="shipping-details">
              <p className="shipping-header">Shipping Address</p>
              {this.shippingInfo.map((field) => (
                <TextField key={field.label} field={field} />
              ))}
              <CountrySelect />
            </div>
            <div className="payment-information-container">
              <p className="payment-title">Payment Information</p>
              {this.paymentInfo.map((label) => (
                <TextField key={label.label} field={label} />
              ))}
              <div className="card-details-container">
                <div className="card-details">
                  <SimpleSelect
                    items={this.months}
                    value={monthSelected}
                    onChange={this.onMonthSelected}
                    selected={monthSelected}
                    label="month"
                    aria-label="select a month for card issue"
                  />
                  <SimpleSelect
                    items={this.years}
                    value={yearSelected}
                    onChange={this.onYearSelected}
                    selected={yearSelected}
                    label="year"
                    aria-label="select a year for card issue"
                  />
                  <TextField field={{ label: "cvv" }} width={"70px"} id="cvv" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkout-items-container">
          <div className="item-details">
            <h2 className="items-header">
              Items In Cart ({this.props.cart.qty})
            </h2>
            {this.props.cart.items &&
              this.props.cart.items.map((item, index) => (
                <div className="item-container" key={index}>
                  <div className="image-container">
                    <img
                      src={`/assets/${item.image}`}
                      alt="product"
                      className="cart-image"
                    />
                  </div>
                  <div className="items-added-container">
                    <p className="item-title">{item.title}</p>
                    <p className="item-price">Price: ${item.price}</p>
                    <p className="item-size">Size: {item.size}</p>
                    <p className="item-qty">Qty: {item.qty}</p>
                    <IconLabelButtons
                      className="remove-item"
                      onClick={() => this.props.onRemoveItemFromCart(index)}
                    />
                  </div>
                </div>
              ))}
            <div className="checkout-order-container">
              <p className="shipping-total">Shipping: FREE</p>
              <p className="total">Total: ${this.props.cart.price}</p>
              <div className="placeorder-button">
                <TextButton
                  text="Place order"
                  onClick={this.props.showOrderConfirmationModal()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
