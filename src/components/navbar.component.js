import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">NHMP Inventory</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Repair Registers</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create-repair-register" className="nav-link">Create Repair Register Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create-dead-stock" className="nav-link">Create Dead Stock</Link>
          </li>
          <li className="navbar-item">
          <Link to="/deadstocks" className="nav-link">View Dead Stocks</Link>
          </li>
          <li className="navbar-item">
          <Link to='#' className="nav-link">Issue Item</Link>
          </li>
          <li className="navbar-item">
          <Link to='#' className="nav-link">Order Item</Link>  
          </li>
          <li className="navbar-item">
          <Link to='#' className="nav-link">Request Item</Link>  
          </li>
          
        </ul>
        </div>
      </nav>
    );
  }
}