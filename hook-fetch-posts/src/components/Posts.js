import React from "react";

export default function Posts(props) {
  // properties will pass to component using props objects
  const { postStateObj } = props; // desctruct props

  const posts = postStateObj.items;
  const newPost = postStateObj.item;

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
