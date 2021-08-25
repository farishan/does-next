import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}

      <div className="container py-4">
        <Link href="/">
          <a className="pr-4">Home</a>
        </Link>
        <Link href="/about">
          <a className="pr-4">About</a>
        </Link>
      </div>

      <main>{children}</main>

      {/* <Footer /> */}
    </>
  )
}
