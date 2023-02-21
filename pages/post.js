import React from 'react';
import fetch from 'unfetch';

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  )
}

Post.getInitialProps = async ({ req }) => {
  const postId = req.params.id;

  const response = await fetch(`http://example.com/posts/${postId}`);
  const json = await response.json();

  return { post: json };
}

export default Post;
