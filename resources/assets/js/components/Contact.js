import React from 'react';

const Contact = (props)=> {

  return (
    <div id="contact" className="container">
      <h3>{props.title}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="name" className="form-control" id="name"/>
        </div>
        <div className="form-group">
          <label>Email address:</label>
          <input type="email" className="form-control" id="email"/>
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea type="message" className="form-control" id="message"/>
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
    </div>
  );
};

const handleSubmit = (e)=> {
  e.preventDefault();
  const name = document.querySelector('#contact form #name').value;
  const email = document.querySelector('#contact form #email').value;
  const message = document.querySelector('#contact form #message').value;

  // Todo: send via http call to backend

};

export default Contact;