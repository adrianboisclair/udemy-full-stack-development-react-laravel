import React, { Componrnt } from 'react';
import Card from './Card'

const Cards = (props) => {
  return (
    <div id="cards" className="container">
      <div className="row">
        {props.data.map((data, index) => <Card data={data} key={index}/>)}
      </div>
    </div>
  );
};

export default Cards;