import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { data: "no data" };
  }

  componentDidMount() {
    fetch(`http://localhost:3100/id/1`)
      .then(response => response.json())
      .then(json => this.setState( { data: json[0].content }))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          { this.state.data }
        </p>
      </div>
    );
  }
}

export default App;
