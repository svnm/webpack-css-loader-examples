/** @jsx element */

import element from 'virtual-element'
import { Counter } from './Counter/Counter';
import './app.css';
import {render,tree} from 'deku'

let counter = tree(
  <div class='app'>
    <Counter color='pink' />
    <Counter color='darkred' />
  </div>
);

render(counter, document.getElementById('root'))
