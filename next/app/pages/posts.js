import {useState, useEffect} from 'react'
import {MainLayout} from "../components/MainLayout";

export default function Posts() {
	const [posts, setPosts] = useState([])

	useEffect(() => {
		async function load() {
			const response = await fetch('http://localhost:4200/posts')
			const json = await response.json()
			setPosts(json)
		}

		load()
	}, [])

	return (
		<MainLayout title={'Posts'}>
			<h1>Posts</h1>
			<pre>
				{JSON.stringify(posts, null, 2)}
			</pre>
		</MainLayout>
	)
}