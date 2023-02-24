import React from 'react';
import path from 'path';
import fs from 'fs';

export default function Post ({ post }) {
  
  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.description}</p>
      <pre>{post?.filename}</pre>
    </div>
  )
}

export function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), `posts/${params.id}.json`)
  const fileContents = fs.readFileSync(filePath, 'utf8')

  // Generally you would parse/transform the contents
  // For example you can transform markdown to HTML here
  const post = JSON.parse(fileContents)

  return {
    props: {
      filename: filePath,
      post,
    }
  }
}

export function getStaticPaths() {
  const filePath = path.join(process.cwd(), `posts`);
  const dirContents = fs.readdirSync(filePath, 'utf8');
  
  const paths = dirContents.map(
    p => ({
      params: { id: path.parse(p).name }
    })
  )
  // const paths = dirContents.map()
  // TODO fetch from folder come per index
  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  }
}