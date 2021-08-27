import Head from 'next/head'
import useContent from '@/helpers/use-content'
import Layout from '@/components/Layout'
import ATF from '@/components/ATF'
import SectionFeatured from '@/components/sections/SectionFeatured'
import SectionWork from '@/components/sections/SectionWork'
import Button from '@/components/Button'

export default function Home() {
  const { site_title, site_description } = useContent()

  const blog_title = 'Blog'
  const blog_description = 'Our featured blogposts'

  return (
    <Layout>
      <Head>
        <title>{site_title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ATF imageURL={`/images/placeholder_hero.jpg`} />

      {/* Modular, adjustable sections */}
      <SectionFeatured />
      <SectionWork />

      <section className="bg-gray-666 py-16 md:py-32">
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <main className="flex flex-col items-center justify-center w-full flex-1 px-5 lg:px-20 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-8">
              Welcome to{' '}
              <a className="text-red-600" href="https://nextjs.org">
                {site_title}!
              </a>
            </h1>

            <p>{site_description}</p>
          </main>
        </div>
      </section>

      <section className="container py-8 md:py-16">
        <h2 className="text-2xl font-bold tracking-widest mb-4 text-center uppercase">
          {blog_title}
        </h2>
        <p className="text-center mb-16">{blog_description}</p>
        <div className="p-4 w-full h-96 bg-gray-666">
          Featured blogposts goes here
        </div>
        <div className="text-center mt-16">
          <Button viewMore />
        </div>
      </section>
    </Layout>
  )
}
