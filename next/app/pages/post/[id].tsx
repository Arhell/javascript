import {useState, useEffect} from 'react'
import Link from 'next/link'
import {MainLayout} from "../../components/MainLayout";
import {useRouter} from "next/router";

export default function Post({post: serverPost}) {
	const [post, setPost] = useState(serverPost)

	const router = useRouter()

	useEffect(() => {
		async function load() {
			const response = await fetch(`http://localhost:4200/posts/${router.query.id}`)
			const data = await response.json()
			setPost(data)
		}

		if(!serverPost) {
			load()
		}
	},[])

	if(!post) {
		return (
		<MainLayout>
			<p>loading...</p>
		</MainLayout>
		)
	}

	return (
			<MainLayout>
				<h1>{post.title}</h1>
				<hr />
				<p>{post.body}</p>
				<Link href={'/posts'}><a>Back</a></Link>
			</MainLayout>
		)
}

// Post.getInitialProps = async ({query, req}) => {
// 	if (!req) {
// 		return {post: null}
// 	}
// 	const response = await fetch(`http://localhost:4200/posts/${query.id}`)
// 	const post = await response.json()
//
// 	return {
// 		post
// 	}
// }

export async function getServerSideProps({query, req}) {
	if (!req) {
		return {post: null}
	}
	const response = await fetch(`http://localhost:4200/posts/${query.id}`)
	const post = await response.json()

	return {props: {post}}
}