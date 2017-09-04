import './bootstrap';
//require('./bootstrap'); // Import Default Laravel JS
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const appContainer = document.getElementById('app-container');

class App extends Component
{
  render() {
    return (
      <div class="col-md-8 col-md-offset-2">
        <div class="panel panel-default">
          <div class="panel-heading">Dashboard</div>
          <div class="panel-body">You are logged in!</div>
      </div>
    </div>
    );
  }
}

export default App;

ReactDOM.render(<App/>, appContainer);