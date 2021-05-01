import React, { Component } from 'react';

function Sidebar() {
  return (
    <div className="side">
      <h2>Sidebar</h2>
      <h5>Something in mind</h5>
      <div className="fakeimg" style={{ height: 200 }}>Image</div>
      <p>blah blah blah</p>
      <h3>Say something</h3>
      <p>Lorem ipsum dolor sit</p>
      <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
      <div className="fakeimg" style={{ height: 60 }}>Image</div><br />
      <div className="fakeimg" style={{ height: 60 }}>Image</div>
    </div>
  );
}

export default Sidebar
