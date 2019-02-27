import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import CardContainer from "./components/CardContainer/CardContainer";
import Card from "./components/Card/Card";
class App extends Component {
  render() {
    return(
        <>
      <Navbar/>
      <Jumbotron/>
      <CardContainer/>
      </>
    );
  }
}

export default App;
