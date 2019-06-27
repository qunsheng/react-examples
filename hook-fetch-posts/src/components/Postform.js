import React, { useState, useContext } from "react";

import { createPost } from "../actions/postActions";
import AppContext from "../appcontext";

export default function Postform() {
  // set initital state
  const [state, setState] = useState({
    title: "",
    body: ""
  });

  // get context from provider
  const [, dispatch] = useContext(AppContext);

  const onSubmit = e => {
    e.preventDefault(); // prevent submit the form and reload the page
    const post = {
      title: state.title,
      body: state.body
    };

    createPost(post, dispatch);
  };

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // return what you want to render, similar to render()
  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label>Title: </label>
          <br />
          <input
            type="text"
            name="title"
            onChange={onChange}
            value={state.title}
          />
        </div>
        <br />
        <div>
          <label>Body: </label>
          <br />
          <textarea name="body" onChange={onChange} value={state.body} />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
