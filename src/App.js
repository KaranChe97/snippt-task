import React, { Component } from 'react';
import ParentComponent from './Components/ParentComponent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id = "snippt"> Snippt-Task :  Table Creator  </h1>
        <div id="breaker"></div>
        <br></br>
        <ParentComponent />
      </div>
    );
  }
}

export default App;
