//Dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

// Assets
import "../css/Form.css";
import "../css/home.css";

class FormPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      title: "",
      content: "",
      success: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();
    const post={
      name: this.state.name,
      title: this.state.title,
      content: this.state.content
    }
    axios({
      method: 'post',
      url: 'http://35.174.174.156/api/posts/create',
      data: post,
      config: {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    })
    .then(res => {
          console.log(res);
          console.log(res.data);
          this.setState({success: true});
    })
        .catch(err => console.log(err));
        console.log(post);

  }

  render(){
    if(this.state.success) {
      return( <Redirect to="/posts"/>);
    }
    return(
      <div className="formMarg">
        <form action="/action_page.php">
          <div className="form-group">
            <label for="name">Nickname</label>
            <input type="String" className="form-control" name="name" onChange={this.onChange} value={this.state.name} />
          </div>
          <div className="form-group">
            <label for="pwd">Title</label>
            <input type="String" className="form-control" name="title" onChange={this.onChange} value={this.state.title}/>
          </div>
          <div className="form-group">
            <label for="pwd">Comment</label>
            <input type="String" className="form-control" name="content" onChange={this.onChange} value={this.state.content}/>
          </div>
          <button  className="btn btn-primary mgbtn " onClick={this.onSubmit} href="/posts"  >Submit</button>
        </form>
      </div>
    );
  }
}

export default FormPost;
