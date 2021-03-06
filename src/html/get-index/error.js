/** 
 * Architect will use error.js to display all errors if it exists, accepts an Error parameter and returns a non empty String.
 * Otherwise it uses its own default error page template.
 */
module.exports = function error(err) {
  return `
    <!doctype html>
    <html>
    <head>
    <style>
    pre, code {
      margin:0;
      padding:20px;
      border-radius:7px;
    }
    </style>
    </head>
    <body> 

        <h1>${Number.isInteger(err.code)? err.code : 500} | ${err.message}</h1>
        <pre style="background:black;color:lime;">${err.stack}</pre>
        <p><a href=/>back to happy days</a></p>
        <p><a href=https://github.com/arc-repos/arc-example-errors>check our the source code here</a></p>

    </body>
    </html>
  `
}
