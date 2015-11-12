Basic Post-CSS Example
=====================

This example is to show off basic use of css-loader as documented in the [webpack docs](https://christianalfoni.github.io/react-webpack-cookbook/Loading-CSS.html) with post-css and autoprefixer.

Note that this does not cover css-modules, it is simple for adding css imports to your react components. I prefer to use this setup and stick to [BEM](https://css-tricks.com/bem-101/) for naming convention.

Note the autoprefixer postcss plugin is in use, which will as you would imagine automatically add prefixes for us.

```css
a {
    display: flex;
}
```

compiles to

```css
a {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex
}
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