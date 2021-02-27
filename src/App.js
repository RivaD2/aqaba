import React from 'react'
import history from './history';
import Header from "./components/Header";
import PerfumesList from './components/PerfumesList';
import ProductSelected from './pages/ProductSelected';
import CartModal from './modals/CartModal';
import Checkout from './pages/Checkout';
import Gifts from './pages/Gifts';
import AqabaHome from './pages/AqabaHome';
import Footer from './components/Footer';
import Modal from './modals/Modal';
import {Route, Switch} from 'react-router-dom';
import {Router} from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import './App.css';

// TODO's:
// Style Aqaba Masculine
// Change images on Home to have perfume layers added so it is clear what the site is about
// Give pages clear names so user knows where they are!
// Add style to app for Jordinian theme
// Finish checkout page 
// Create page for additional products


let font =  "font-family: 'Cairo', sans-serif"
let theme = createMuiTheme({
  typography: {
    fontFamily: font,
  }
})

class App extends React.Component {
  state = {
    showModal: false,
    toggleModal: () => {},
    cartItems:[],
    cartTotal: 0
  }
 
  toggleModalCallback = toggleFunction => {
    this.setState({
      toggleModal: toggleFunction
    })
 }

  onAddItemToCart = product => {
    this.state.cartItems.push(product);
    this.showCart();
  }
  
  onRemoveItemFromCart = indexOfItem => {
  console.log('indexOFItem', indexOfItem);
   this.state.cartItems.splice(indexOfItem, 1);
   this.setState({
     cartItems: [...this.state.cartItems]
   }, this.showCart)
  }

  showCart = () => {
    this.state.toggleModal(
      <CartModal 
        items={this.state.cartItems} 
        onRemoveItemFromCart={this.onRemoveItemFromCart}
        toggleModal={this.state.toggleModal}
      />)
  }
  
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="router-container App">
          <Router history={history}>
          <Header showCart={this.showCart}/>
          <Modal toggleModalCallback={this.toggleModalCallback}/>
            <Switch>
              <Route exact path="/" render={() => <AqabaHome />}/>
              <Route exact path="/perfumes" component={PerfumesList} />
              <Route exact path="/perfume/:id" render={() => <ProductSelected onAddItemToCart={this.onAddItemToCart} /> }/>
              <Route exact path="/checkout" component={Checkout} />
              {/* <Route exact path="/gifts" component={Gifts} /> */}
            </Switch>
            <Footer />
          </Router>
          </div>
      </ThemeProvider>

    )
  }
}

export default App;


