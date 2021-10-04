/* @TODO: add slider */

import Button from '@/components/Button'
import useContent from '@/helpers/use-content'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PostCards from '../PostCards'

const LIMIT = 3

export default function SectionFeaturedBlog() {
  const { nav_news } = useContent()
  const sectionTitle = nav_news
  const [posts, setPosts] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if (isFetching === false && posts === null) {
      setIsFetching(true)
      fetch(`/api/blog?limit=${LIMIT}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            setPosts(res.data)
          } else {
            setPosts(undefined)
          }
        })
        .catch((err) => {
          console.log(err)
          setPosts(undefined)
        })
        .finally(() => setIsFetching(false))
    }
  }, [isFetching, posts])

  return (
    <section className="container py-8 md:py-16">
      <div className="flex items-center mb-12">
        <div>
          <h2 className="text-xl mr-10 font-bold tracking-widest">
            {sectionTitle}
          </h2>
        </div>
        <div className="w-full">
          <hr className="border-white opacity-50" />
        </div>
      </div>

      <PostCards posts={posts} />

      <div className="flex justify-center -mt-12">
        <Link href="/blog">
          <a>
            <Button outline arrow>
              Lihat Berita Lain
            </Button>
          </a>
        </Link>
      </div>
    </section>
  )
}
