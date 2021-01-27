import NextNprogress from 'nextjs-progressbar';
import '../styles/styles.scss'

export default function MyApp ({Component, pageProps}) {
  return (
    <>
      <NextNprogress
        color="red"
        startPosition={0.3}
        stopDelayMs={200}
        height="3"
      />
      <Component {...pageProps}/>
    </>
  )
}