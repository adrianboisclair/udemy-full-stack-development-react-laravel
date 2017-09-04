import React  from 'react';

const Hero = (props)=> {
  const { content, title } = props.data;
    return (
      <div id="hero" className="jumbotron">
        <div className="container">
          <h1>{title}</h1>
          <p>{content}</p>
          <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
        </div>
      </div>
    );
};

export default Hero;