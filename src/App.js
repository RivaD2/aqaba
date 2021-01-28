import React, { Component } from 'react'
import history from './history';
import Header from "./components/Header";
import PerfumesList from './components/PerfumesList';
import Gifts from './components/Gifts';
import {Route, Switch} from 'react-router-dom';
import {Router} from 'react-router-dom';

export default class App extends Component {
const font =  "'Quicksand', sans-serif";
const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: 
      textTransform: "none"
    }
  }
});

  render() {
    return (
      <div className="home container">
          <Router history={history}>
            <Switch>
              <Route exact path="/aqaba" />
              <Route path="/perfumes" component={PerfumesList} />
              <Route path="/gifts" component={Gifts} />
            </Switch>
            <Header />
          </Router>
      </div>
    )
  }
}



