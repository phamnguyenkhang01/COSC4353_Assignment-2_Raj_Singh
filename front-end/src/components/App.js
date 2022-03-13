import 'react-notifications/lib/notifications.css';
import '../style/App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Profile from "./Profile";
import FuelQuote from "./FuelQuote";
import FuelQuoteHistory from "./FuelQuoteHistory";

function App() {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  console.log("here", user);
  return <Router>
    {!localStorage.getItem('loggedInUser') ? (
      <Switch>
        <Route path="/sign-up" component = { Signup } />
        <Route path="/login" component = { Login } />
        <Redirect to="/login" />
      </Switch>
    ) : (
      <Switch>
        <Route path="/profile" name = "" component = { Profile } />
        <Route path="/fuel-quote" component = { FuelQuote } />
        <Route path="/" component = { FuelQuoteHistory } />
        <Route path="/home" component = { FuelQuoteHistory } />
        {user.status === 'Pending'? (
          <Redirect to="/profile" />
        ) : (
          <Redirect to="/home" />
        )}
      </Switch>
    )}
  </Router>
}

export default App;
