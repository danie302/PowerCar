//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Window extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: []
    };
  }

  componentWillMount() {
    fetch('http://35.174.174.156/api/posts')
    .then(res => res.json())
    .then(json  => this.setState({comments: json.posts}))
}

  render(){
    const postItems = this.state.comments.map(comments => (
      <div key={comments.id} className="card">
        <div class="card-header">
          {comments.title}
        </div>
        <div class="card-body ">
          <h5 className="card-title">{comments.name}</h5>
          <p className="card-text">{comments.content}</p>
          <Link to="/posts" class="btn btn-primary">Comment</Link>
        </div>
      </div>
    ));
    return(
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <h1>Posts</h1>
          { postItems }
        </div>
        <div className="col"></div>
      </div>
    );
  }
}

export default Window;
