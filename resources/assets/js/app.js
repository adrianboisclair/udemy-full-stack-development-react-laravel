import './bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';

const appContainer = document.getElementById('app-container');

class App extends Component
{
  render() {
    return (
      <div>
        <Nav/>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App/>, appContainer);