import React from 'react'
import history from './history';
import {Route, Switch} from 'react-router-dom';
import {Router} from 'react-router-dom';
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
      })
    }
  }

  toggleModalCallback = toggleFunction => {
    this.setState({
      toggleModal: toggleFunction
    })
  }

    //Given an array of objects(products), each obj has id, size, and quantity,
    // If the arr (this.state.cartItems) has an obj with same id and size, add qty to that object's qty.
    // If not, add that obj to arr.
  onAddItemToCart = async (product, qty) => {
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
  }
  
  onRemoveItemFromCart = async indexOfItem => {
   this.state.cart.items.splice(indexOfItem, 1);
   await this.calculateCartTotals();
   this.showCart();
   localStorage.setItem('cartItems', JSON.stringify(this.state.cart));
  }
  
  calculateCartTotals = async () => {
    let totalQty = 0;
    let totalPrice = 0;
    this.state.cart.items.forEach(item => {
      totalPrice += item.price * item.qty;
      totalQty += item.qty;
    });
    // Creating a promise to resolve once the new Cart is safely in state
    return new Promise(resolve => {
    this.setState({
      cart: {
        qty: totalQty,
        price: totalPrice,
        items: this.state.cart.items
      }
    }, resolve)
   })
  }
  
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

  showCreateAccountModal = () => {
    console.log('showCreateAccModal')
    this.state.toggleModal(
      <CreateAccountModal onClose={this.closeModal}/>
    )
  }
  
  showLoginModal = () => {
    // close Modal is not called yet, but is here for use later!
    this.state.toggleModal(
      <LoginModal onClose={this.closeModal} showCreateAccountModal={this.showCreateAccountModal} />
    )
  }

  showSubscribeModal = () => {
    this.state.toggleModal(
      <SubscribeModal onClose={this.closeModal} showSubscribeModal={this.showSubscribeModal} />
    )
  }
  
  showOrderConfirmationModal = () => {
    this.state.toggleModal(
      <ConfirmationModal 
      onClose={this.closeModal} 
      showOrderConfirmationModal={this.showOrderConfirmationModal} 
      cart={this.state.cart} />
    )
  }

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


