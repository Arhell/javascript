import {useState, useEffect} from 'react'
import {MainLayout} from "../components/MainLayout";
import Link from 'next/link'
import {MyPost} from "../interfaces/post";
import {NextPageContext} from "next";

interface PostPageProps {
	posts: MyPost[]
}

export default function Posts({posts: serverPosts}: PostPageProps) {
	const [posts, setPosts] = useState(serverPosts)

	useEffect(() => {
		async function load() {
			const response = await fetch('http://localhost:4200/posts')
			const json = await response.json()
			setPosts(json)
		}

		if(!serverPosts) {
			load()
		}
	}, [])

	if(!posts) {
		return (
			<MainLayout>
				<p>loading...</p>
			</MainLayout>
		)
	}

	return (
		<MainLayout title={'Posts'}>
			<h1>Posts</h1>
			<ul>
				{posts.map(post => (
					<li key={post.id}>
						<Link href={`/post/[id]`} as={`/post/${post.id}`}>
							<a>
								{post.title}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</MainLayout>
	)
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
	if(!req) {
		return {posts: null}
	}
	const response = await fetch('http://localhost:4200/posts')
	const posts: MyPost[] = await response.json()

	return {
		posts
	}
}