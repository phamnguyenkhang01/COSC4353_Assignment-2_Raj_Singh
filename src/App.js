import React, { Component } from "react";
import FuelQuote from "./FuelQuote";
import FuelQuoteHistory from "./FuelQuoteHistory";
import Login from "./Login";
import Signup from "./Signup";
import SignupDetail from "./SignupDetail";

// class App extends Component {
//   render() {
//     return <SignupDetail></SignupDetail>;
//   }
// }

function App(){
  return (
    <div className="App">
      <Login />
      <Signup />
      <SignupDetail />
      <FuelQuote />
      <FuelQuoteHistory />
    </div>
  )
}

export default App;
