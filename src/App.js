import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hello?</h1>
        <Button className="btn-success">Button text!</Button>
      </div>
    );
  }
}

export default App;
