# Use React with an index.html and script tags

## create simple html

## run live server

right click the page and select open with live server <br />

## add script tag and test

add script tag, and add: <br />
`const rootEl = document.getElementById ('root')` <br />
`rootEl.textContent = 'Goodbye World'` <br />

## get react file and add to index.html

go to https://unpkg.com/react then https://unpkg.com/react@16.8.6/, and then https://unpkg.com/react@16.8.6/umd/ and then https://unpkg.com/react@16.8.6/umd/react.development.js. <br />

add to index.html file.

## get react-dom file and add to index.html

go to https://unpkg.com/react-dom and then https://unpkg.com/react-dom@16.8.6/ and then https://unpkg.com/react-dom@16.8.6/umd/react-dom.development.js <br />

add to index.html file.

## test react and react-dom

`const rootEl = document.getElementById("root")`<br />
`const element = React.createElement("span", {}, "SpAN!")`<br />
`ReactDOM.render(element, rootEl)`

## add babel to make jsx work

go to https://unpkg.com/babel-standalone and then https://unpkg.com/babel-standalone@6.26.0/babel.js. <br />

and add to index.html.

## change script type to text/babel and test jsx

create elemnet using jsx, and then change script type to text/babel<br />
`<script type="text/babel">`<br />
`const rootEl = document.getElementById("root")`<br />
`const element = <h1 id="header"> hey there </h1>`<br />
`ReactDOM.render(element, rootEl)`<br />
`</script>`
