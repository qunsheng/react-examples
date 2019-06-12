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

## test react

`const rootEl = document.getElementById("root")`
`const element = React.createElement("span", {}, "SpAN!")`
`ReactDOM.render(element, rootEl)`

## add babel

go to https://unpkg.com/babel-standalone and then https://unpkg.com/babel-standalone@6.26.0/babel.js. <br />

and add to index.html.

## test jsx

create elemnet using jsx, and then change script type to text/babel
`<script type="text/babel">`
`const rootEl = document.getElementById("root")`
`const element = <h1 id="header"> hey there </h1>`
`ReactDOM.render(element, rootEl)`
`</script>`
