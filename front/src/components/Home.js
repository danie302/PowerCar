// Dependencies
import React, { Component } from 'react';

// Assets
import '../css/home.css';

// Components
import FormPost from './FormPost.js';

class Home extends Component {
  render(){
    return(
      <div>
        <div>
          <h1>Discuss your idea</h1>
        </div>
        <FormPost />
      </div>
    );
  }
}

export default Home;
