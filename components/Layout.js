/* eslint-disable @next/next/no-page-custom-font */
import Footer from './Footer'
import Header from './Header'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div className="px-24 bg-black">
        <Header />

        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}
