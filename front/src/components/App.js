// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Assets
import '../css/App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const {children } = this.props;
    return (
      <div className="App">
        {children}
      </div>
    );
  }
}

export default App;
