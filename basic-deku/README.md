Basic React Example
=====================

This example is to show off basic use of css-loader as documented in the [webpack docs](https://christianalfoni.github.io/react-webpack-cookbook/Loading-CSS.html).

Note that this does not cover css-modules, it is simple for adding css imports to your deku components. You can use this method and stick to [BEM](https://css-tricks.com/bem-101/) for naming convention in your components, or you can try out the awesome css-module example

To change over from just using css-loader to use css modules update your css loader from 

from

```json
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
```

to

```json
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') }
```

and in your components 

from

```js
import './style.css';

className="counter"
```

to

```js
import styles from './AddFriendInput.css';

className={styles.addFriendInput}
```

## Run Dev

```
npm install
npm start
open http://localhost:3000
```

## Run Prod

```
npm install
npm run build
npm start:prod
open http://localhost:3000
```

## License

[MIT](http://isekivacenz.mit-license.org/)
