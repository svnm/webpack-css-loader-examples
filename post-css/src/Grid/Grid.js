import './style.css';
import React, { Component } from 'react';
import { render } from 'react-dom';

export class Grid extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className='Grid'>
        <div className='Grid__cell'>
        cell 1
        </div>
        <div className='Grid__cell'>
        cell 2
        </div>
        <div className='Grid__cell'>
        cell 3
        </div>
      </div>
    );
  }
}
