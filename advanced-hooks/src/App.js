import React, { useReducer, useContext, useEffect, useRef } from "react";

//
// reducer function
// parameters:
// 1) state
// 2) action
//
function appReducer(state, action) {
  switch (action.type) {
    case "reset": {
      return action.payload;
    }
    case "add": {
      return [
        ...state,
        {
          id: Date.now(),
          text: "",
          completed: false
        }
      ];
    }
    case "delete": {
      return state.filter(item => item.id !== action.payload);
    }
    case "completed": {
      return state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      });
    }
    default: {
      return state;
    }
  }
}

//
// TodoList component
//
function TodoList({ items }) {
  // using jsx spread attibutes
  return items.map(item => <TodoItem key={item.id} {...item} />); // {...item} : id={12345} text="" completed={false}
}

//
// TodoItem component
//
function TodoItem(props) {
  const { id, completed, text } = props;
  //
  // call useContext to get context
  // parameter: the context created before
  //
  const dispatch = useContext(Context);
  return (
    // use the context
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
      }}
    >
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch({ type: "completed", payload: id })}
      />
      <input type="text" defaultValue={text} />
      <button onClick={() => dispatch({ type: "delete", payload: id })}>
        Delete
      </button>
    </div>
  );
}

//
// create context
// if context used in diffrect file,
// save this to appContext.js
// and import to different file
//
const Context = React.createContext();

// custom hook
function useEffectOnce(cb) {
  //
  // useRef hook
  // parameter: initialValue
  //
  const didRun = useRef(false);

  useEffect(() => {
    if (!didRun.current) {
      cb();
      didRun.current = true;
    }
  });
}

// App component
function App() {
  //
  // useReducer hook
  // parameters:
  // 1) reducer function
  // 2) initial state
  // return values:
  // destruct array: statte, dispatch function
  const [state, dispatch] = useReducer(appReducer, []);

  useEffectOnce(() => {
    const raw = localStorage.getItem("data");
    //
    // dispatch function: parameter: new state object
    //
    dispatch({ type: "reset", payload: raw ? JSON.parse(raw) : [] });
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(state));
  }, [state]);

  return (
    //
    // use Context.Provider pass the dispatch to children
    //
    <Context.Provider value={dispatch}>
      <h1>Todos App</h1>
      <button onClick={() => dispatch({ type: "add" })}> New Todo</button>
      <TodoList items={state} />
    </Context.Provider>
  );
}

export default App;
