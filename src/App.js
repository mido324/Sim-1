import React, { Component } from 'react';
import Binlist from './components/binlist/Binlist'
import './App.css';
// import Binlist from './components/binlist/Binlist';

class App extends Component {
  render() {
    return (
      <div className="App">
       Hello Shelfi
       <Binlist/>
      </div>
    );
  }
}

export default App;
