import React from 'react'
import history from './history';
import {Route, Switch, Router} from 'react-router-dom';
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductSelected from './pages/ProductSelected';
import Modal from './modals/Modal';
import CartModal from './modals/CartModal';
import LoginModal from './modals/LoginModal';
import SubscribeModal from './modals/SubscribeModal';
import CreateAccountModal from './modals/CreateAccountModal';
import ConfirmationModal from './modals/ConfirmationModal';
import Checkout from './pages/Checkout';
import AqabaHome from './pages/AqabaHome';
import Footer from './components/Footer';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import './App.css';


let font =  "font-family: 'Cairo', sans-serif"
let theme = createMuiTheme({
  typography: {
    fontFamily: font,
  }
})

class App extends React.Component {
  state = {
    toggleModal: () => {},
    cart: {
      total:0,
      qty:0,
      items:[]
    }
  }

  componentDidMount() {
    let savedCartItems = localStorage.getItem('cartItems');
    if(savedCartItems !== null) {
      this.setState({
        cart: JSON.parse(savedCartItems)
      });
    }
  }

  /**
   * Method -toggle method to toggle state of modal selected}
   * @param {Function} toggleFunction the component to display as a model
   */
  toggleModalCallback = toggleFunction => {
    this.setState({
      toggleModal: toggleFunction
    });
  }


  /**
   * Method - updates the cart state based off new items added
   * @param  {Object} product the product to add to cart
   * @param  {Number} qty the qty to add to cart
   */
   //Given an array of objects(products), each obj has id, size, and quantity,
  // If the arr (this.state.cartItems) has an obj with same id and size, add qty to that object's qty.
  // If not, add that obj to arr.
  onAddItemToCart = async (product, qty) => {
    try {
      // If product is undefined, then cart is unchanged and loop is skipped
      // Cart total is still calculated
      const alreadyInCart = product === undefined || this.state.cart.items.some(obj => {
        if(product._id + product.size  === obj._id + obj.size){
          obj.qty = qty;
          return true;
        } else {
          return false;
        }
      })
      if(!alreadyInCart){
        product.qty = qty;
        this.state.cart.items.push(product)
      }
      await this.calculateCartTotals();
      this.showCart();
      localStorage.setItem('cartItems', JSON.stringify(this.state.cart));
    } catch (err) {
      console.log(err);
    }
  }
  
  /**
   * Removes items from cart and sets the new cart state, recalculates cart totals, and sets new Cart in local storage
   * @param {Number} indexOfItem index of item to be removed
   */
  onRemoveItemFromCart = async indexOfItem => {
   try {
    this.state.cart.items.splice(indexOfItem, 1);
    await this.calculateCartTotals();
    this.showCart();
    localStorage.setItem('cartItems', JSON.stringify(this.state.cart));
   } catch (err) {
     console.log(err);
   }

  }
  
  /**
   *  Calculates cart totals using price and qty of items added and sets new cart in state
   * @returns {Promise} Promise to resolve once the new Cart is safely in state
   */
  calculateCartTotals = () => {
    let totalQty = 0;
    let totalPrice = 0;
    this.state.cart.items.forEach(item => {
      totalPrice += item.price * item.qty;
      totalQty += item.qty;
    });
    return new Promise(resolve => {
      this.setState({
        cart: {
          qty: totalQty,
          price: totalPrice,
          items: this.state.cart.items
        }
      }, resolve);
    });
  }
  
  /**
   * Consumes the Cart component and shows the Cart when toggleModal callback runs
  */
  showCart = () => {
    this.state.toggleModal(
      <CartModal 
        cart={this.state.cart} 
        onAddItemToCart={this.onAddItemToCart}
        onRemoveItemFromCart={this.onRemoveItemFromCart}
        toggleModal={this.state.toggleModal}
      />
    )
  }

  /**
   * Consumes the CreateAccountModal and tells state to update the modal shown
   */
  showCreateAccountModal = () => {
    this.state.toggleModal(
      <CreateAccountModal onClose={this.closeModal}/>
    )
  }
  
  /**
   * Consumes LoginModal component and tells state to update modal shown
   */
  showLoginModal = () => {
    // close Modal is not called yet, but is here for use later!
    this.state.toggleModal(
      <LoginModal onClose={this.closeModal} showCreateAccountModal={this.showCreateAccountModal} />
    )
  }

  /**
   * @ Consumes SubScribeModal component and tells state to update modal shown
   */
  showSubscribeModal = () => {
    this.state.toggleModal(
      <SubscribeModal onClose={this.closeModal} showSubscribeModal={this.showSubscribeModal} />
    )
  }
  
  /**
   * Consumes ConfirmationModal and tells state to toggle modal shown
   */
  showOrderConfirmationModal = () => {
    this.state.toggleModal(
      <ConfirmationModal 
      onClose={this.closeModal} 
      showOrderConfirmationModal={this.showOrderConfirmationModal} 
      cart={this.state.cart} />
    )
  }

  /**
   * Closes modal by toggling the state
   */
  closeModal = () => {
    this.state.toggleModal();
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="router-container App">
          <Router history={history}>
          <Header showCart={this.showCart} showLoginModal={this.showLoginModal} />
          <Modal toggleModalCallback={this.toggleModalCallback} />
            <Switch>
              <Route exact path="/" render={() => <AqabaHome />} />
              <Route exact path="/perfumes" render={() => <ProductList page="perfumes" /> } />
              <Route exact path="/search/:term" render={()=> <ProductList page="search"/>} />
              <Route exact path="/perfume/:id" render={() => <ProductSelected onAddItemToCart={this.onAddItemToCart}/> } />
              <Route 
                exact path="/checkout" 
                render={() => <Checkout cart={this.state.cart}  
                onRemoveItemFromCart={this.onRemoveItemFromCart} 
                showCreateAccountModal={this.showCreateAccountModal} 
                showOrderConfirmationModal={this.showOrderConfirmationModal}/> } 
              />
              <Route exact path="/bath_and_body" render={() => <ProductList page="bath_and_body" /> } />
              <Route exact path="/gifts" render={() => <ProductList page="gifts" />} />
            </Switch>
            <Footer showSubscribeModal={this.showSubscribeModal} />
          </Router>
          </div>
      </ThemeProvider>
    )
  }
}

export default App;
