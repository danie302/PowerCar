// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets
import '../css/navbar.css';
import '../css/form-inline2.css';
import img3 from "../images/search-right-1507@3x.png";


class Filter extends Component {
  render(){
    return(

<div className="">
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
