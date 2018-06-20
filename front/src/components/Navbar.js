// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../css/navbar.css';
import '../css/form-inline2.css';
import img1 from "../images/group-5@3x.png";


class Navbar extends Component {
  render(){
    return(
<div>
  <nav className="navbar navbar-light bg-link">
    <Link to= "/"className="navbar-brand" >
      <img className="Group-5" src={ img1 } width="120" height="40" alt="">
      </img>
    </Link>
    <form className="form-inline2">
      <button className="btn btn-link" type="button">Log in</button>
      <button className="btn btn-success" type="button">Register</button>
    </form>
  </nav>

  <p className="Welcome-to-our-platf ">Welcome to our platform</p>
  <p className="Welcome-to-our-platf-text-style-1">Discuss our brand and send your best recommendation!</p>

</div>

    );
  }
}

export default Navbar;
