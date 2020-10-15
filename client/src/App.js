import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from "react-redux";
import store from "./store";

import Dashboard from './components/admin/Dashboard'
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

import NotFound from './components/NotFound'
import PrivateRoute from "./private-route/PrivateRoute";

import Landing from './components/landing/landing';


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());    // Redirect to login
    window.location.href = "./auth/login";
  }
}

function AuthLayout() {
  return (
    <div>
      <Route path="/auth/register" exact component={Register} />
      <Route path="/auth/login" exact component={Login} />
      <Redirect from="/auth" to="/auth/login" exact />
      <Route />
    </div>
  );
}

function Layouts() {
  return (
    <Switch>
        <Route path="/auth" component={AuthLayout} />
        <PrivateRoute path="/admin" component={Dashboard} />
        <Route path="/index" component={Landing} />
        <Redirect from="/" to="/index" exact />
        <Route component={NotFound} />
        <Route />
    </Switch>
  );
}

export class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL} >
          <Layouts />
        </Router>
      </Provider>
    )
  }
}

export default App;