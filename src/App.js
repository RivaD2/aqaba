import React from 'react'
import history from './history';
import Header from "./components/Header";
import PerfumesList from './components/PerfumesList';
import ProductSelected from './pages/ProductSelected';
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
// Finish linking add to card button to CartModal
// Finish linking cartIcon to CartModal and updating items added using state or redux...
// Style Aqaba Masculine
// Move on to CartModal
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
  state = {showModal: false}
  toggleModal = () => {}

  toggleModalCallback = toggleFunction => {
  this.toggleModal = toggleFunction;
  }
  
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="router-container App">
          <Router history={history}>
          <Header />
          <Modal toggleModalCallback={this.toggleModalCallback}/>
            <Switch>
              <Route exact path="/" component={AqabaHome}/>
              <Route exact path="/perfumes" component={PerfumesList} />
              <Route exact path="/perfume/:id" component={ProductSelected} />
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


