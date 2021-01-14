import React from 'react'
import Router from 'next/router'

export default function About() {

	const linkClickHandler = () => {
		Router.push('/')
	}

	return (
		<React.Fragment>
			<h1>About</h1>

			<button onClick={linkClickHandler}>go back to home</button>
			<button onClick={() => Router.push('/posts')}>go to posts</button>
		</React.Fragment>
	)
}