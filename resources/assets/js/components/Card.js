import React, { Componrnt } from 'react';

const Card = (props) => {
  return (
    <div className="col-md-4">
      <h2>{props.data.heading}</h2>
      <p>{props.data.content}</p>
      <p><a className="btn btn-default" href="#" role="button">{props.data.buttonText}</a></p>
    </div>
  );
};

export default Card;