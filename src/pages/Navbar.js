import React from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import Home from '../components/Home';
import Login from '../components/Login';
import Dashboard from '../components/Dashboard';
import Reservation from '../components/Reservation';
import About from '../components/About';
import Contact from '../components/Contact';

import PrivateRoute from '../Utils/PrivateRoute';
import PublicRoute from '../Utils/PublicRoute';

function Navbar() {
  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
          <NavLink activeClassName="active" to="/login">Login</NavLink>
          <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
          <NavLink activeClassName="active" to="/reservation">Reservation</NavLink>
          <NavLink activeClassName="active" to="/about">About</NavLink>
          <NavLink activeClassName="active" className="right" to="/contact">Contact</NavLink>
        </div>

        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <PublicRoute path="/login" component={Login} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/reservation" component={Reservation} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Navbar
