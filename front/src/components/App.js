// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../css/App.css';

// Components
import Navbar from "./Navbar.js";
import Filter from "./Filter.js";

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children } = this.props;
    return (
      <div className="App">
        <Navbar />
        {children}
      </div>
    );
  }
}

export default App;
