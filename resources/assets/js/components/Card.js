import React from 'react';

const Card = (props) => {
  const { heading, content, buttonText, image } = props.data;

  return (
      <div id="card" className="col-md-4 card">
        <img className="img-responsive" src={image} alt={heading}/>
        <div className="container">
          <h4><b>{heading}</b></h4>
          <p>{content}</p>
          <p><button>{buttonText}</button></p>
        </div>
      </div>
  );
};

export default Card;