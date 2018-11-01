import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div>
        <div
          className="Box"
          style={{
            backgroundColor: this.props.color,
            width: this.props.width,
            height: this.props.height
          }}
        />
        <button onClick={this.props.handleClear}>X</button>
      </div>
    );
  }
}

export default Box;
