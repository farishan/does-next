import 'tailwindcss/tailwind.css'
import NextNprogress from 'nextjs-progressbar'
import 'react-image-lightbox/style.css'
import '../index.css'
import useContent from '@/helpers/use-content'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const { site_title } = useContent()

  return (
    <>
      <Head>
        <title>{site_title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Sekolah bakat non-formal dan non-komersial yang ditujukan untuk mengajarkan ilmu sesuai minat dan bakat peserta didik."
        />
      </Head>
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
