//Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Window extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: []
    };
  }

  componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(data => this.setState({comments: data}))
  }

  render(){
    const postItems = this.state.comments.map(comments => (
      <div key={comments.id} className="card">
        <div class="card-header">
          Comment
        </div>
        <div class="card-body ">
          <h5 className="card-title">{comments.email}</h5>
          <p className="card-text">{comments.body}</p>
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
