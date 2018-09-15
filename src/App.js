import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavigationBar/NavBar';
import Recommended from './components/Recommended/Recommended'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Recommended />
      </div>
    );
  }
}

export default App;
