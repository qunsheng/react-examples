## Simple Weather App With React Hooks( useReducer, useContext )

This example utilized following technical sets: <br />

React <br />
Hooks<br />
Fetch data from server <br />

### Create project

`yarn create react-app hook-context-weather`

### Start project

`yarn start`

### Create store store.js

prepare reducer function <br />
prepare initital state object <br />
create context <br />
use reducer and initial state to call useReducer <br />
wrap children inside context.Provider, share the state and dispatch function globally <br />

### Modify index.js

wrap app inside conttext.Provider

### Clean up App.js

delete App.css, use index.css for all the css <br />
delete logo.csv

### Create Main component and put into App.js

create simple main component first, put into App.js

### Wroking with Main.js

use context to get shared global state and displatch function <br />
call useState to set local state <br />
create form and related functions <br />

### get apixu key

go to www.apixu.com to get a key to access weather data <br />

### finish query function and display result
