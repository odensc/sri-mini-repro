# sri-mini-repro

Reproducing issue when using mini-css-extract-plugin with webpack-subresource-integrity.

## Instructions

Run `npm start` to start dev server.

There should be an SRI error in the browser console.

If you edit `style.js` to remove the CSS require and simply export a string, the error will disappear.