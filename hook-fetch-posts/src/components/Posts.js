import React, { useContext, useEffect, useState } from "react";
import AppContext from "../appcontext";
import { fetchPosts } from "../actions/postActions";

export default function Posts() {
  const [state, dispatch] = useContext(AppContext);

  useEffect(() => {
    fetchPosts(dispatch);
  }, []);

  const posts = state.items;
  const newPost = state.item;

  if (newPost) {
    posts.unshift(newPost); // add new post to posts list
  }

  // convert js list to jsx list
  const postItems = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ));

  // return jsx
  return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
  );
}
