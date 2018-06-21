// Dependencies
import React, { Component } from 'react';

// Assets
import '../css/home.css';
import '../css/navbar.css';
import "../css/Form.css";

// Components
import FormPost from './FormPost.js';

class Home extends Component {
  constructor(props){
    super(props);
    this.state ={
      number: 1
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    this.setState({number: 2});
  }
  render(){

      if(this.state.number == 1){
        return(
          <div className="backComps">
            <div>
              <button className="btn btn-success" type="button" onClick={this.onClick}>Make a Post</button>
            </div>
          </div>
        )
      }
      if(this.state.number == 2){
        return(
          <div className="backComps">
            <div>
              <h1 className="formMarg discus">Discuss your idea</h1>
            </div>
            <FormPost />
          </div>
        )
      }
  }
}

export default Home;
