import ATF from '@/components/ATF'
import Layout from '@/components/Layout'
import blogs from '@/assets/blogs.dummy.json'
import Image from 'next/image'
import { sanitize } from 'isomorphic-dompurify'
import Button from '@/components/Button'
import useContent from '@/helpers/use-content'
import Link from 'next/link'
import UnderlinedTitle from '@/components/UnderlinedTitle'
import PopularPosts from '@/components/PopularPosts'

const Excerpt = ({ data }) => {
  const MAX_CHAR = 50
  const firstRichText = data.find((d) => d.type === 'rich').content
  const sanitized = sanitize(firstRichText)
  const content =
    sanitized.length > MAX_CHAR
      ? sanitized.substr(0, MAX_CHAR) + '...'
      : sanitized

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export default function Blog() {
  const { label_view_more } = useContent()

  return (
    <Layout>
      <ATF title="Berita" />

      <div className="container">
        <div className="py-10 md:py-20 lg:py-40">
          <UnderlinedTitle text1={`Popular News`} lineBold BigText />
          <PopularPosts data={[]} extendClass={'mt-4 md:mt-10 lg:mt-20'} />
        </div>

        {blogs.map((blog) => (
          <div key={blog.slug}>
            <div className="relative p-4">
              <Image
                src={blog.thumbnail.src}
                alt={blog.thumbnail.alt}
                layout="fill"
                className="object-cover"
              />
              <div className="relative z-10">
                <Link href={`/blog/${blog.slug}`}>
                  <a className="text-white">
                    <h2 className="text-lg font-bold py-4">{blog.title}</h2>
                  </a>
                </Link>
                <h2 className="py-4">{blog.date}</h2>
                <Excerpt data={blog.blocks} />
                <Link href={`/blog/${blog.slug}`}>
                  <a className="text-white">
                    <Button arrow>{label_view_more}</Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
