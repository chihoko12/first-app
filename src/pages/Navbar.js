import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import Dashboard from '../Dashboard';

class Navbar extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="navbar">
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
            <NavLink activeClassName="active" to="#">About</NavLink>
            <NavLink activeClassName="active" className="right" to="#">Contact</NavLink>
          </div>

          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
    </BrowserRouter>
    );
  }
}

export default Navbar
