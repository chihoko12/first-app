import React from 'react';
import './App.css';
import Login from './Login';
import Dashboard from './Dashboard';
import Home from './Home';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Content from './pages/Content';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="row">
        <Content />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
