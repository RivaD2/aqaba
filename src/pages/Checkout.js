import React from 'react'
import TextField from '../components/TextField';
import IconLabelButtons from '../components/IconLabelButtons';
import TextButton from '../components/TextButton';
import SimpleSelect from '../components/SimpleSelect';
import CountrySelect from '../components/CountrySelect';
import '../pages/Checkout.css'

const calculateYears = () => {
  const year = (new Date()).getFullYear();
  let minimumYears = year - 30;
  const allYears = [];
  for(let i = year; i >= minimumYears; i--) {
    allYears.push(i);
  }
  return allYears;
}

export default class Checkout extends React.Component {
  months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  years = calculateYears();

  state = {
    monthSelected: '',
    yearSelected: '',
    cvv: ''
  }

  onYearSelected = year => {
    this.setState({
      yearSelected: year
    }, () => console.log('what is years',this.state.yearSelected))
  }

  onMonthSelected = month => {
    this.setState({
      monthSelected: month
    })
  }

  onCvvSelected = e => {
    this.setState({ term: e.target.value })
    this.props.onSearchChanged(e.target.value)
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onCvvSelected(this.state.cvv);
  }
  
  shippingInfo = [
    {label: 'Address*'},
    {label: ''},
    {label: 'City*'},
    {label: 'Zipcode*'},
    {label: 'State/Province*'}
  ];
  
  contactInfo = [
    {label: 'First Name*'},
    {label: 'Last Name*'},
    {label: 'Email Address'}
  ]

  paymentInfo = [
    {label: 'Cardholder Name'},
    {label: 'Card Number'}
  ]
  
  render() {
    const {yearSelected, monthSelected} = this.state;

    return (
      <div className="checkout-container">
          <div className="shipping-container">
              <div className="checkout-header">
                Checkout
              </div>
              <div className="contact-details-container">
                <div className="contact-info-container">
                  <div className="name-and-email-text">
                    Contact information
                  </div>
                  <div className="checkout-sign-in">
                    Already have an account? 
                    <div className="sign-in-link" onClick={this.props.showCreateAccountModal}>
                      Sign In
                    </div>
                  </div>
                </div>
                {this.contactInfo.map(field => (
                    <TextField key={field.label} field={field} />
                  ))}
                <div className="shipping-details">
                  <div className="shipping-header">
                    Shipping Address
                 </div>
                  {this.shippingInfo.map(field => (
                    <TextField key={field.label} field={field} />
                  ))}
                  <CountrySelect/>
                </div>
                <div className="payment-information-container">
                  <div className="payment-title">
                    Enter Your Payment Information
                  </div>
                  {this.paymentInfo.map(label => (
                    <TextField key={label.label} field={label} />
                  ))}
                 <div className="card-details-container">
                   <div className="card-details">
                      <SimpleSelect 
                        items={this.months} 
                        value={monthSelected}
                        onChange={this.onMonthSelected} 
                        selected={monthSelected}
                        label='month'
                        aria-labelledby="select a month for card issue"
                        />
                        <SimpleSelect 
                        items={this.years} 
                        value={yearSelected}
                        onChange={this.onYearSelected} 
                        selected={yearSelected}
                        label='year'
                        aria-labelledby="select a year for card issue"
                      />
                      <TextField width={'80px'} field={{label:'cvv'}} />
                    </div>
                 </div>
                </div>
            </div>
          </div>
      <div className="checkout-items-container">
          <div className="item-details">
              <div className="items-header">
                Items In Cart ({this.props.cart.qty})
              </div>
              {this.props.cart.items && this.props.cart.items.map((item, index) => (
                  <div className="item-container" key={index}>
                    <div className="image-container">
                      <img 
                        src={`/assets/${item.image}`} 
                        alt="product" 
                        className="aqaba-image" 
                      />
                    </div>
                    <div className="items-added-container">
                      <div className="item-title">
                        {item.title}
                      </div>
                      <div className="item-price">
                        Price: ${item.price}
                      </div>
                      <div className="item-size">
                        Size: {item.size}
                      </div>
                      <div className="item-qty">
                        Qty: {item.qty}
                      </div>
                        <IconLabelButtons className="remove-item" onClick={() => this.props.onRemoveItemFromCart(index)} />
                    </div>
                  </div>
                 ))}
              <div className="checkout-order-container">
                  <div className="shipping-total">
                    Shipping: FREE
                  </div>
                  <div className="total">
                    Total: ${this.props.cart.price}
                  </div>  
                  <div className="placeorder-button">
                    <TextButton text='Place order' />
                 </div>
              </div>
          </div>
       </div>
     </div>
    )
  }
}
