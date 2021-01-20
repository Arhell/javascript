import '../styles/styles.scss'

export default function MyApp ({Component, pageProps}) {
  return (
    <>
      <Component {...pageProps}/>
    </>
  )
}