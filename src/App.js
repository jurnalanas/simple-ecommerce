import React, { useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Products from './products/pages/Products';
import Product from './products/pages/Product';
import Profile from './users/pages/Profile.js';
import Auth from './users/pages/Auth';
import { AuthContext } from './shared/context/auth-context';
import Login from './users/pages/Login.js';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(false);


  const login = useCallback(uid => {
    setIsLoggedIn(true);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setUserId(null);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Products/>
          </Route>
          <Route path="/product/:productId" exact>
            <Product/>
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
    );
  } else {
    routes = (
      <Router>
        <Switch>
          <Route path="/product/:productId" exact>
            <Product/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/auth" exact>
            <Auth/>
          </Route>
          <Redirect to ="/auth" />
        </Switch>
      </Router>
    )
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout, userId: userId }}
    >
    <Router>
      {routes}
    </Router>
    </AuthContext.Provider>
  )
}

export default App;
