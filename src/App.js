import React, { Component } from 'react';
import './App.css';
import { Button, Container, Col, Row} from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      secondsElapsed: 1500,
      isRunning: false,
      breakTime: false
    }
  }

  getSeconds = () => {
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
  }

  getMinutes = () => {
    return Math.floor((this.state.secondsElapsed / 60));
  }

  handleStart = () => {
    if (!this.state.isRunning){
      this.setState({
        isRunning: true
      });
      this.incrimenter = setInterval(() => {
        this.setState({
          secondsElapsed: (this.state.secondsElapsed - 1),
        })
      }, 1000);
  }
}

  handleStop = () => {
    this.setState({
      isRunning: false
    });
    clearInterval(this.incrimenter);
}

  handleWork = () => {
    this.setState({
      secondsElapsed: 1500,
      isRunning: false,
    });
    clearInterval(this.incrimenter);
  }

  handleBreak = () => {
    this.setState({
      secondsElapsed: 300,
      isRunning: false
    });
    clearInterval(this.incrimenter);
  }

  checkForBreak = () => {
    if (!this.state.breakTime && this.state.secondsElapsed === -1) {
      clearInterval(this.incrimenter);
      this.setState({
        secondsElapsed: 300,
        isRunning: false,
        breakTime: true
      });
  } else if (this.state.breakTime && this.state.secondsElapsed === -1) {
    clearInterval(this.incrimenter);
    this.setState({
      secondsElapsed: 1500,
      isRunning: false,
      breaktime: false
    });
  }
}

  render() {

    this.checkForBreak();

    return (
      <div className="App">
      <Container id="leaf-container">
      <Row>
        <Col id="leaf-col" align="center">
          <div className="leaf"></div>
        </Col>
      </Row>

      </Container>

      <Container id="apple">
      <Row>
        <Col>
        <p className="h1" id="x">My "Apple" Watch</p>
        </Col>
      </Row>
      <Row className="w-30 p3">
        <Col id="timer-box">
        <h1 className="timer">{this.getMinutes()}:{this.getSeconds()}</h1>
        </Col>
      </Row>
      <Row id="button-row">
        <Col>
          <Button className="btn-success btn-md"
            onClick={this.handleStart}
            >Start</Button>
        </Col>
        <Col>
          <Button className="btn-info btn-md"
            onClick={this.handleWork}
          >Work</Button>
        </Col>
        <Col>
          <Button className="btn-dark btn-md"
          onClick={this.handleBreak}
          >Break</Button>
        </Col>
        <Col>
          <Button className="btn-danger btn-md"
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
