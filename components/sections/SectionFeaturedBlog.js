import Button from '@/components/Button'
import useContent from '@/helpers/use-content'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PostSlider from '@/components/slider/PostSlider'

const LIMIT = 6

export default function SectionFeaturedBlog() {
  const { nav_blog } = useContent()
  const sectionTitle = nav_blog
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
    <section className="container pt-10 pb-14 lg:py-16">
      <div className="flex items-center mb-10 md:mb-12">
        <div>
          <h2 className="md:text-xl mr-4 md:mr-10 tracking-widest">
            {sectionTitle}
          </h2>
        </div>
        <div className="w-full">
          <hr className="border-white opacity-50" />
        </div>
      </div>

      <PostSlider posts={posts}/>

      <div className="flex justify-center mt-8 md:-mt-16">
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
