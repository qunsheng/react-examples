import React, { useState } from "react";

import { createPost } from "../actions/postActions";

export default function Postform() {
  // set initital state
  const [state, setState] = useState({
    title: "",
    body: ""
  });

  console.log("============= initital state: ", state);

  let onSubmit = e => {
    e.preventDefault(); // prevent submit the form and reload the page

    console.log("================ on submit");

    // create post function should be passed from context

    // const post = {
    //   title: this.state.title,
    //   body: this.state.body
    // };

    // this.props.createPost(post);
  };

  let onChange = e => {
    console.log("============ on change");
    setState({ ...state, [e.target.name]: e.target.value });
    console.log("============= updated state: ", state);
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
