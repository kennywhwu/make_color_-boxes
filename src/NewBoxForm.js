import React, { Component } from 'react';
import './NewBoxForm.css';

class NewBoxForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      width: '50px',
      height: '50px'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.handleNewBox(this.state);
    this.setState({ color: '', width: '50px', height: '50px' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="color">Background Color:</label>
        <input
          id="color"
          name="color"
          value={this.state.color}
          onChange={this.handleChange}
        />

        <label htmlFor="width">Width:</label>
        <input
          id="width"
          name="width"
          value={this.state.width}
          onChange={this.handleChange}
        />
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          name="height"
          value={this.state.height}
          onChange={this.handleChange}
        />
        <button>Create a new box!</button>
      </form>
    );
  }
}

export default NewBoxForm;
