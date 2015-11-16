/** @jsx element */

import './style.css';
import {render,tree} from 'deku'
import element from 'virtual-element'

let Counter = {

  initialState () {
    return { secondsElapsed: 0 }
  },

  render (component) {
    let { props, state } = component;
    let { secondsElapsed } = state;

    return (
      <div class='counter'>
        <h1 class={`counter--${props.color}`}>
          Counter: { secondsElapsed }
        </h1>
      </div>
    );
  },

  afterUpdate (component) {
    let { props, state } = component;
  },

  afterMount (component, el, setState) {
    var counter = 0;
    component.interval = setInterval(() => {
       setState({ secondsElapsed: counter++ })
    }, 1000);
  },

  beforeUnmount (component) {
    clearInterval(component.interval);
  }
}

export {Counter}
