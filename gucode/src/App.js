import React, { Component } from 'react';
import logo from 'logo.svg';
import Dashboard from 'pages/Dashboard.react'
import Header from 'components/Header.react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header/>
          <Dashboard/>
        </div>
      </div>
    );
  }
}

export default App;
