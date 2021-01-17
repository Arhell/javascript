import Link from 'next/link'
import Head from 'next/head'
import {MainLayout} from "../components/MainLayout";

export default function Index() {
	return (
		<MainLayout>
			<Head>
				<title>Title</title>
				<meta name="Keywords" content="Keywords" />
				<meta name="description" content="description" />
			</Head>

			<h1>Text</h1>
			<p>
				<Link href={'/about'}>
					<a>About</a>
				</Link>
			</p>

			<p>
				<Link href={'/posts'}>
					<a>Posts</a>
				</Link>
			</p>
		</MainLayout>
	)
}