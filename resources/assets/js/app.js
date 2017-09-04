import './bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Contact from './components/Contact';

const appContainer = document.getElementById('app-container');
const projectName = 'My Project';
const heroData = {
  content: 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.',
  title: 'Welcome!'
};
const arrayOfCards = [
  {
    buttonText: 'View details »',
    content: 'Donec id elit non mi porta gravida.',
    heading: 'Heading 1',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    buttonText: 'View details »',
    content: 'Donec id elit non mi porta gravida.',
    heading: 'Heading 2',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    buttonText: 'View details »',
    content: 'Donec id elit non mi porta gravida.',
    heading: 'Heading 3',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    buttonText: 'View details »',
    content: 'Donec id elit non mi porta gravida.',
    heading: 'Heading 4',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    buttonText: 'View details »',
    content: 'Donec id elit non mi porta gravida.',
    heading: 'Heading 5',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  },
  {
    buttonText: 'View details »',
    content: 'Donec id elit non mi porta gravida.',
    heading: 'Heading 6',
    image: 'https://www.w3schools.com/howto/img_avatar.png'
  }
];

class App extends Component
{
  render() {
    return (
      <div className="container-flud">
        <Nav projectName={projectName}/>
        <Hero data={heroData} />
        <Cards data={arrayOfCards}/>
        <Contact title={'Contact Us'}/>
        <Footer projectName={projectName}/>
      </div>
    );
  }
}

export default App;

ReactDOM.render(<App/>, appContainer);