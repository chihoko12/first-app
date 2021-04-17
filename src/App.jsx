import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  inputChange(p1, p2, e) {
    console.log('Params1: ', p1);
    console.log('Parmas2: ', p2);
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div className="header">
              <ul>
                <li>
                  <NavLink exact activeClassName="active" to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/login">Login</NavLink><small>(Access without token only)</small>
                </li>
                <li>
                  <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink><small>(Access with token only)</small>
                </li>
              </ul>
          </div>

            <div className="content">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/contact" component={Dashboard} />
              </Switch>
            </div>

            <div className="container">
              <p>Biding method with parameters</p>
              <input onChange={this.inputChange.bind(this, 'Parameter 1', 'Parameter 2')}></input><br />
              <p>Input value: {this.state.input}</p>
            </div>


          </div>

        </BrowserRouter>
      </div>
    );
  }
}

export default App;
