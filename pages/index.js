import Head from 'next/head'
import useContent from '@/helpers/use-content'
import Layout from '@/components/Layout'

export default function Home() {
  const { site_title, site_description } = useContent()

  return (
    <Layout>
      <Head>
        <title>{site_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold mb-8">
            Welcome to{' '}
            <a className="text-red-600" href="https://nextjs.org">
              {site_title}!
            </a>
          </h1>

          <p>{site_description}</p>
        </main>
      </div>
    </Layout>
  )
}
