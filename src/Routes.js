import React from 'react'
import PerfumesList from './components/PerfumesList';
import Gifts from './components/Gifts';
import {Route, Router, Switch} from 'react-router-dom';
import history from './history';

const Routes = (props) => {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/aqaba" />
          <Route path="/perfumes" component={PerfumesList} />
          <Route path="/gifts" component={Gifts} />
        </Switch>
        </Router>
    </div>
  )
}

export default Routes;
