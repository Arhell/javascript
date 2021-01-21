import Link from 'next/link'
import Head from 'next/head'

export function MainLayout ({children, title= 'App'}) {
  return (
    <>
      <Head>
        <title>{title} | next</title>
        <meta name="Keywords" content="Keywords" />
        <meta name="description" content="description" />
      </Head>
      <nav>
        <Link href={'/'}><a>Home</a></Link>
        <Link href={'/about'}><a>About</a></Link>
        <Link href={'/posts'}><a>Posts</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>
        {`
          nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            top: 0;
            background-color: darkblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
          nav a {
            color: #ffffff;
            text-decoration: none;
          }
          
          main {
            margin-top: 60px;
            padding: 1rem;
          }
        `}
      </style>
    </>
  )
}