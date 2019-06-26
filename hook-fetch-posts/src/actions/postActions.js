// put a list of what to import into import {...}
import { FETCH_POSTS, NEW_POST } from "./types";

// fetch data from backend and dispatch
export const fetchPosts = dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts =>
      // dispatch after fetch data
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

// post new post to backend, wait for response back, and then dispatch
export const createPost = (postData, dispatch) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      // dispatch after fetch data
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};
