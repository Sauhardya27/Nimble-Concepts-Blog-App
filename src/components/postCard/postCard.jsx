import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"

const PostCard = ({ post }) => {
	const date = new Date(post.updatedAt).toLocaleDateString("en-GB", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric"
	}).replace(/\//g, ".");

	return (
		<div className={styles.container}>
			<div className={styles.top}>
				{post.img && <div className={styles.imgContainer}>
					<Image src={post.img} alt="" fill className={styles.img} />
				</div>}
				<span className={styles.date}>{date}</span>
			</div>
			<div className={styles.bottom}>
				<h1 className={styles.title}>{post.title}</h1>
				<p className={styles.desc}>{post.body}</p>
				<Link className={styles.link} href={`/blog/${post.slug}`}> READ MORE</Link>
			</div>
		</div>
	)
}

export default PostCard