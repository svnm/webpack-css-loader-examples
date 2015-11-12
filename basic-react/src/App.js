import React, { Component } from 'react'
import { Counter } from './Counter/Counter'
import './app.css';

export class App extends Component {
  render() {
    return (
      <div className='app'>
        <Counter increment={1} color='darkred' />
        <Counter increment={5} color='pink' />
      </div>
    );
  }
}