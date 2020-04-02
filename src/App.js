import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './products/pages/Home';
import Products from './products/pages/Products';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/products" exact>
          <Products/>
        </Route>
        <Redirect to ="/" />
      </Switch>
    </Router>
  )
}

export default App;
