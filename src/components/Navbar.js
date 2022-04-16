import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import {Link,NavLink } from "react-router-dom";

export class Navbar extends Component {


  render() {
 


  
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsMonkey</Link>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <NavLink className='nav-link'  to="/">Home</NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink className='nav-link' activeClassName="active" to="/general">General</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' activeClassName="active"  to="/business">business </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' activeClassName="active" to="/entertainment">entertainment</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' activeClassName="active" to="/science">science</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' activeClassName="active" to="/sports">sports</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className='nav-link' activeClassName="active" to="/technology">technology</NavLink>
        </li>
        
    
      </ul>
      
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default Navbar
