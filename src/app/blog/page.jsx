import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"
import { getPosts } from "@/lib/data";

export const metadata = {
  title: 'Blog Page',
  description: 'Blog Description',
}

const BlogPage = async () => {

  const posts = await getPosts()
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.posts} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage