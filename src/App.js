import React, { Component } from 'react';
import Decrement from "./Decrement"
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Decrement start = {5}/>
        <Decrement start = {10}/>
        <Decrement start = {15}/>
        <Decrement start = {30}/>
      </div>
    );
  }
}

export default App;
