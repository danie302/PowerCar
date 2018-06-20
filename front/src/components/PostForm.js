// Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Assets

class FormPost extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      title: "",
      content: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }
  onSubmit(e){

  }

  render(){
    return(
      <div>
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
          <div className="form-group form-check">
            <label className="form-check-label" >
              <input className="form-check-input" type="checkbox"/> Remember me
            </label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormPost;
