import React, { Component } from 'react';
import Content from '../pages/Content';
import Sidebar from '../pages/Sidebar';

function Contact() {
  return(
    <div className="container">
      <h4>Contact</h4>
      <p>This is Contact page.</p>
      <div className="row">
        <Content />
        <Sidebar />
      </div>
    </div>
  )
}

export default Contact;
