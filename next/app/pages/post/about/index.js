import React from 'react'
import Router from 'next/router'
import {MainLayout} from "../../../components/MainLayout";

export default function About() {

	const linkClickHandler = () => {
		Router.push('/')
	}

	return (
		<MainLayout>
			<h1>About</h1>

			<button onClick={linkClickHandler}>go back to home</button>
			<button onClick={() => Router.push('/posts')}>go to posts</button>
		</MainLayout>
	)
}