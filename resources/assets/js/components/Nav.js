import React, { Component } from 'react';

const Nav = (props)=> {
  return (
    <nav id="navbar"  className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">{props.projectName}</a>
        </div>
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><a href="./">Default <span className="sr-only">(current)</span></a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;