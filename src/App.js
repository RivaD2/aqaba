import React from 'react'
import history from './history';
import Header from "./components/Header";
import PerfumesList from './components/PerfumesList';
import ProductSelected from './pages/ProductSelected';
import CartModal from './modals/CartModal';
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
// On PerfumeSelected, map through list of prices and sizes, fix error with props and fix footer
// On Product List move titles outside of cards and render price, size dynamically
// Updating items/show items in cart when item is added
// Style Aqaba Masculine
// Change images on Home to have perfume layers added so it is clear what the site is about
// Give pages clear names so user knows where they are!
// Add style to app for Jordinian theme


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
    this.state.toggleModal(<CartModal items={this.state.cartItems}/>)
  }
  
  // Create method to remove item
  // Accepts an arg of index of item to be removed
  // Use slice/splice to remove item at index
  // Pass it to cart modal onto the remove button, with prop of removeItem 
  
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="router-container App">
          <Router history={history}>
          <Header toggleModal={this.state.toggleModal}/>
          <Modal toggleModalCallback={this.toggleModalCallback}/>
            <Switch>
              <Route exact path="/" component={AqabaHome}/>
              <Route exact path="/perfumes" component={PerfumesList} />
              <Route exact path="/perfume/:id" render={() => <ProductSelected onAddItemToCart={this.onAddItemToCart} /> }/> 
              <Route exact path="/gifts" component={Gifts} />
            </Switch>
            <Footer />
          </Router>
          </div>
      </ThemeProvider>

    )
  }
}

export default App;


