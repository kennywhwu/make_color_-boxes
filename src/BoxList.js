import React, { Component } from 'react';
import './BoxList.css';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import uuid from 'uuid/v4';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };
    this.addBox = this.addBox.bind(this);
    // this.clearBox = this.clearBox.bind(this);
  }

  addBox(box) {
    let addNewBox = { ...box, id: uuid() };
    this.setState(st => ({ boxes: [...st.boxes, addNewBox] }));
  }

  clearBox(id) {
    this.setState(st => ({
      boxes: st.boxes.filter(e => {
        return e.id !== id;
      })
    }));
  }

  render() {
    let boxes = this.state.boxes.map(box => {
      return (
        <div key={box.id}>
          <Box
            color={box.color}
            width={box.width}
            height={box.height}
            handleClear={() => this.clearBox(box.id)}
          />
          {/* <button
            onClick={() => {
              this.handleClear(box.id);
            }}
          >
            X
          </button> */}
        </div>
      );
    });

    return (
      <div className="BoxList">
        <NewBoxForm handleNewBox={this.addBox} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
