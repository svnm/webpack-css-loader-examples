import React, { Component } from 'react'
import { Grid } from './Grid/Grid'
import './app.css';

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Grid />
      </div>
    );
  }
}