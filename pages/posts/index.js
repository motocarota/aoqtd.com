import path from 'path';
import fs from 'fs';

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug}>{post.title}</li>
      ))}
    </ul>
  )
}

export function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), './posts')
  const filenames = fs.readdirSync(postsDirectory)

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const post = JSON.parse(fileContents)

    return post
  })
  
  return {
    props: {
      posts,
    },
  }
}
