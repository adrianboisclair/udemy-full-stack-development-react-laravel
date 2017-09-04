import React, { Componrnt } from 'react';
import Card from './Card'

const Cards = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.data.map((data, index) => {
          console.log(data, index);
          return (
            <Card data={data} key={index}/>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;