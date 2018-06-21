// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../css/navbar.css';
import '../css/form-inline2.css';
import img1 from "../images/group-5@3x.png";
import img2 from "../images/group@3x.png";
import img3 from "../images/search-right-1507@3x.png";


class Filter extends Component {
  render(){
    return(

<div className="Rectangle">
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
  <div className="Backgrounds">
    <button className="btn btn-success" type="button">Make a post</button>

  </div>
    <div className="Container">
      <img className="search_right-1507" src={ img3 } >
      </img>
      <p className="Search">Search...</p>
  </div>
  <div className="Filter">Filter</div>
  <div className="Container-2">
    <div className="Container-2-2">
      <p className="Font-Filter-Text">New</p>
      <p className="Font-Filter-Text">Old</p>
      <p className="Font-Filter-Text">Most comments</p>
      <p className="Font-Filter-Text">Most Share</p>
    </div>
  </div>
</div>

    );
  }
}

export default Filter;
