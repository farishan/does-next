import 'tailwindcss/tailwind.css'
import NextNprogress from 'nextjs-progressbar'
import 'react-image-lightbox/style.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress
        color="#D2292D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
