import Link from 'next/link'
import ATF from '@/components/ATF'
import Button from '@/components/Button'
import Layout from '@/components/Layout'
import { useEffect, useState } from 'react'
import useContent from '@/helpers/use-content'
import PostCards from '@/components/PostCards'
import PopularPosts from '@/components/PopularPosts'
import UnderlinedTitle from '@/components/UnderlinedTitle'

const LIMIT = 6
const WITH_INFINITE_SCROLL = false

export default function Blog() {
  const { label_show_more } = useContent()
  const [posts, setPosts] = useState(null)
  const [offset, setOffset] = useState(0)
  const [canShowMore, setCanShowMore] = useState(true)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if (isFetching === false && posts === null) {
      setIsFetching(true)
      fetch(`/api/blog?limit=${LIMIT}&offset=${offset}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            setPosts(res.data)
            setOffset(offset + LIMIT)
          } else {
            setPosts(undefined)
          }
          if (!res.next) {
            setCanShowMore(false)
          }
        })
        .catch((err) => {
          console.log(err)
          setPosts(undefined)
        })
        .finally(() => setIsFetching(false))
    }
  }, [isFetching, offset, posts])

  const handleShowMore = () => {
    if (isFetching === false) {
      setIsFetching(true)
      fetch(`/api/blog?limit=${LIMIT}&offset=${offset}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            const newPosts = [...posts, ...res.data]
            setPosts(newPosts)
            setOffset(offset + LIMIT)
          }
          if (!res.next) {
            setCanShowMore(false)
          }
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => setIsFetching(false))
    }
  }

  return (
    <Layout>
      <ATF title="Berita" />

      <div className="container">
        <div className="py-10 md:py-20 lg:py-40">
          <UnderlinedTitle text1={`Popular News`} lineBold BigText />
          <PopularPosts data={[]} extendClass={'mt-4 md:mt-10 lg:mt-20'} />
        </div>

        <UnderlinedTitle text1={`Latest News`} lineBold BigText />

        {!posts || posts === null ? <>No data.</> : <PostCards posts={posts} />}

        {WITH_INFINITE_SCROLL ? (
          <div className="flex justify-center mb-40">
            {canShowMore ? (
              <>
                {isFetching ? (
                  <p className="italic opacity-50">Fetching...</p>
                ) : (
                  <Button outline onClick={handleShowMore}>
                    {label_show_more}
                  </Button>
                )}
              </>
            ) : (
              <p className="italic opacity-50">No more posts.</p>
            )}
          </div>
        ) : (
          <div className="flex justify-center mb-40">
            <Link href="/blog/listing">
              <a>
                <Button outline>{label_show_more}</Button>
              </a>
            </Link>
          </div>
        )}
      </div>
    </Layout>
  )
}
