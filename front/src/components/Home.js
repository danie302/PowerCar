// Dependencies
import React, { Component } from 'react';

// Assets
import '../css/home.css';
import img2 from "../images/group@3x.png";

// Components
import FormPost from './FormPost.js';

class Home extends Component {
  render(){
    return(
      <div>
        <div>
          <h1>Discuss your idea</h1>
        </div>
        <div className="Backgrounds">
          <button className="btn btn-success" type="button">Make a post</button>
        </div>
        <FormPost />
        <img className="Group" src={ img2 } ></img>
      </div>
    );
  }
}

export default Home;
