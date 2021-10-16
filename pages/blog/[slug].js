import dayjs from 'dayjs'
import Link from 'next/link'
import ATF from '@/components/post/ATF'
import Layout from '@/components/Layout'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import blogHandler from '@/helpers/api/blog'
import useContent from '@/helpers/use-content'
import PostCards from '@/components/post/PostCards'
import UnderlinedTitle from '@/components/UnderlinedTitle'
import SectionGallery from '@/components/sections/SectionGallery'
import SectionRichText from '@/components/sections/SectionRichText'

export default function BlogDetail({ data = {} }) {
  const { title, blocks = [], featured_image, date, categories } = data
  const { label_similar_post, label_show_more } = useContent()
  const [similarPosts, setSimilarPosts] = useState(null)

  const dateFormatted = dayjs(date).format('DD MMMM YYYY')

  /* Fetch similar news */
  useEffect(() => {
    if (
      similarPosts !== null ||
      !categories ||
      categories === null ||
      categories.length === 0
    )
      return

    const firstCategory = categories[0]

    fetch(`/api/blog?limit=3&offset=0&categoryId=${firstCategory}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setSimilarPosts(res.data)
        } else {
          setSimilarPosts(undefined)
        }
      })
      .catch((err) => {
        setSimilarPosts(undefined)
      })
  }, [categories, similarPosts])

  return (
    <Layout>
      <ATF title={title} imageURL={featured_image} date={dateFormatted} />

      <div className="container py-12 lg:pt-24">
        {blocks.map((block) => (
          <div key={`block_${block.id}`}>
            {block.type === 'rich' ? (
              <div className="mb-8 md:mb-24">
                <SectionRichText content={block.content} />
              </div>
            ) : block.type === 'gallery' ? (
              <div className="mb-8 md:mb-14">
                <SectionGallery images={block.images} />
              </div>
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>

      {similarPosts && similarPosts !== null && (
        <div className="container">
          <UnderlinedTitle text1={label_similar_post} lineBold BigText />
          <div className="mt-7 md:mt-24">
            <PostCards posts={similarPosts} />
          </div>
          <div className="flex justify-center mb-40">
            <Link href="/blog/listing">
              <a>
                <Button outline>{label_show_more}</Button>
              </a>
            </Link>
          </div>
        </div>
      )}
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
