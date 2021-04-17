import React, { Component } from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  inputChange(p1, p2, e) {
    console.log('Param1: ', p1);
    console.log('Param2: ', p2);
    this.setState({ input: e.target.value });
  }

  // handle click event of logout button
  handleLogout(props) {
    props.history.push('/login');
  };


    render() {
      return (
        <div>
          <div className="container">
            <h1>Welcome User!</h1>
            <p>Biding method with parameters</p>
            <input onChange={(e) => this.inputChange('Parameter 1', 'Parameter 2', e)}></input><br />
            <p>Input value: {this.state.input}</p>
          </div>
        </div>
      );
    }
}

export default Dashboard;
