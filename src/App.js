import React, { Component } from 'react';
import Decrement from "./Decrement"
import './App.css';
import Title from './Title';
import Footer from './Footer';

class App extends Component{
  render(){
    return (
      <>
      <Title />
      <div className="App">
        <Decrement start = {5}/>
        <Decrement start = {10}/>
        <Decrement start = {20}/>
        <Decrement start = {30}/>
        <Decrement start = {40}/>
        <Decrement start = {50}/>
      </div>
      <Footer/>
      </>
    );
  }
}

export default App;
