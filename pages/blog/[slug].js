import ATF from '@/components/ATF'
import Layout from '@/components/Layout'
import blogHandler from '@/helpers/api/blog'
import dayjs from 'dayjs'
import { sanitize } from 'isomorphic-dompurify'
import Image from 'next/image'

export default function BlogDetail({ data = {} }) {
  const { title, blocks = [], slug, featured_image, date } = data

  const dateFormatted = dayjs(date).format('DD MMMM YYYY')

  return (
    <Layout>
      <ATF title={title} imageURL={featured_image} />

      <div className="container py-8">
        <h1 className="text-2xl font-bold mb-8">{title}</h1>
        {dateFormatted}
        {blocks.map((block) => (
          <div key={`block_${block.id}`}>
            {block.type === 'rich' ? (
              <div
                dangerouslySetInnerHTML={{ __html: sanitize(block.content) }}
                className="mb-8"
              ></div>
            ) : (
              <div className="mb-8">
                {block.images.map((image) => (
                  <div
                    className="relative"
                    key={`block_image_${image.src}_${Math.random()}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={200}
                      height={200}
                    />
                  </div>
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
  const blogs = blogHandler.getAll()
  const paths = blogs.map((post) => ({
    params: { slug: post.slug }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const blogs = blogHandler.getAll()
  const data = blogs.find((b) => b.slug === params.slug)

  return { props: { data } }
}
