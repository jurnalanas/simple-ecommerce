import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Home from './products/pages/Home';
import Products from './products/pages/Products';
import Product from './products/pages/Product';
import Profile from './users/pages/Profile.js';
import Login from './users/pages/Login.js';


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
        <Route path="/product/:productId" exact>
          <Product/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/profile" exact>
          <Profile/>
        </Route>
        <Route path="/profile/add/:productId" exact>
          <Profile/>
        </Route>
        <Redirect to ="/" />
      </Switch>
    </Router>
  )
}

export default App;
