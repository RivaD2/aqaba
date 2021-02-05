import React, { Component } from 'react'
import history from './history';
import Header from "./components/Header";
import PerfumesList from './components/PerfumesList';
import AqabaFeminine from './components/AqabaFeminine';
import AqabaMasculine from './components/AqabaMasculine';
import Gifts from './pages/Gifts';
import AqabaHome from './pages/AqabaHome';
import Footer from './components/Footer';
import {Route, Switch} from 'react-router-dom';
import {Router} from 'react-router-dom';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import './App.css';


let font =  "font-family: 'Cairo', sans-serif"
let theme = createMuiTheme({
  typography: {
    fontFamily: font,
  }
})

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
      <div className="router-container App">
          <Router history={history}>
          <Header />
            <Switch>
              <Route exact path="/" component={AqabaHome}/>
              <Route exact path="/perfumes" component={PerfumesList} />
              <Route exact path="/perfumes/feminine" component={AqabaFeminine} />
              <Route exact path="/perfumes/masculine" component={AqabaMasculine} />
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


