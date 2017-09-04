import './bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Footer from './components/Footer';

const appContainer = document.getElementById('app-container');

const myCardArray = [
  {
    heading: 'Heading 1',
    content: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    buttonText: 'View details »'
  },
  {
    heading: 'Heading 2',
    content: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    buttonText: 'View details »'
  },
  {
    heading: 'Heading 3',
    content: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.',
    buttonText: 'View details »'
  }
];

class App extends Component
{
  render() {
    const projectName = 'My Project';
    return (
      <div className="container-flud">
        <Nav projectName={projectName}/>
        <Hero />
        <div>
          BodyContainer

          Load Cards:

          <Cards data={myCardArray}/>

        </div>
        <Footer projectName={projectName}/>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App/>, appContainer);