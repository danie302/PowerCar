// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../css/home.css';
import img1 from "../images/group-5@3x.png";


class Navbar extends Component {
  render(){
    return(
<div>
  <nav className="navbar navbar-light bg-link">
    <Link to= "/"className="navbar-brand" href="#">
      <img src={ img1 } width="100" height="30" alt="">
      </img>
    </Link>
    <form className="form-inline">
      <button className="btn btn-link" type="button">Log in</button>
      <button className="btn btn-success" type="button">Register</button>
    </form>
  </nav>

  <h1 className="">Welcome to our platform
  Discuss our brand and send your best recommendation!</h1>

</div>

    );
  }
}

export default Navbar;
