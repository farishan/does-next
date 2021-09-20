import ATF from '@/components/ATF'
import Layout from '@/components/Layout'
import blogs from '@/assets/blogs.dummy.json'
import { sanitize } from 'isomorphic-dompurify'
import Image from 'next/image'

export default function BlogDetail({ data = {} }) {
  const { title, blocks = [], slug } = data

  return (
    <Layout>
      <ATF title={title} />

      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-8">{title}</h1>
        {blocks.map((block) => (
          <div key={block.id}>
            {block.type === 'rich' ? (
              <div
                dangerouslySetInnerHTML={{ __html: sanitize(block.content) }}
                className="mb-8"
              ></div>
            ) : (
              <div className="mb-8">
                {block.images.map((image) => (
                  <Image
                    key={image.src}
                    src={image.src}
                    alt={image.alt}
                    width="200px"
                    height="200px"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = blogs.map((post) => ({
    params: { slug: post.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const data = blogs.find((b) => b.slug === params.slug)

  return { props: { data } }
}
