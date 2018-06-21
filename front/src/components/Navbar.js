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

<div className="Rectangle_1">
  <div className="Wrapper">
    <img className="Group-5" src={ img1 } width="120" height="40" alt="">
    </img>
    <Link to="/" className="Log-in" >Log in</Link>
    <button className="btn btn-success" type="button">Register</button>
  </div>
  <div className="Welcome-to-our-platf">
    <p className="Welcome-to-our-platf-text-style-1">Welcome to our platform</p>
    <p className="Welcome-to-our-platf-text-style-2">Discuss our brand and send your best recommendation!</p>
  </div>

</div>

    );
  }
}

export default Navbar;
