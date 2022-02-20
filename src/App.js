import React, { Component } from "react";
import FuelQuote from "./FuelQuote";
import FuelQuoteHistory from "./FuelQuoteHistory";
import Login from "./Login";
import Signup from "./Signup";
import SignupDetail from "./SignupDetail";
import Nav from './Nav';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// class App extends Component {
//   render() {
//     return <SignupDetail></SignupDetail>;
//   }
// }

function App(){
  return (
    <Router>
      <div>
        <Nav />
        <Login></Login>
      </div>
    </Router>
  )
}

export default App;


{/* <Route path="/" component={Login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/Profile" component={SignupDetail} /> */}