import React, { Component } from 'react';
import './App.css';
import { Button, Container, Col, Row} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      secondsElapsed: 1500
    }
  }


  getSeconds = () => {
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
  }

  getMinutes = () => {
    return Math.floor((this.state.secondsElapsed / 60));
  }

  handleStart = () => {
    this.incrimenter = setInterval(() => {
      this.setState({
        secondsElapsed: (this.state.secondsElapsed - 1)
      })
    }, 1000);
}

  handleStop = () => {
    clearInterval(this.incrimenter);
}



  render() {
    return (
      <div className="App">
      <Container id="leaf-container">
      <Row>
        <Col id="leaf-col" align="center">
          <div className="leaf"></div>
        </Col>
      </Row>

      </Container>

      <Container id="tomato">
      <Row>
        <Col>
        <p className="h1" id="x">My "Apple" Watch</p>
        </Col>
      </Row>
      <Row className="w-25 p3">
        <Col id="timer-box">
        <h1 className="timer">{this.getMinutes()}:{this.getSeconds()}</h1>
        </Col>
      </Row>
      <Row id="button-row">
        <Col>
        <Button className="btn-success btn-lg"
          onClick={this.handleStart}
          >Start</Button>
        </Col>
        <Col>
        <Button className="btn-danger btn-lg"
          onClick={this.handleStop}
          >Stop</Button>
        </Col>
      </Row>
          
        </Container>
      </div>
    );
  }
}

export default App;
