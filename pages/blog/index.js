import Link from 'next/link'
import ATF from '@/components/ATF'
import Button from '@/components/Button'
import Layout from '@/components/Layout'
import { useCallback, useEffect, useState } from 'react'
import useContent from '@/helpers/use-content'
import PostCards from '@/components/post/PostCards'
import PopularPosts from '@/components/post/PopularPosts'
import UnderlinedTitle from '@/components/UnderlinedTitle'
import { POPULAR_POST_LENGTH } from '@/constants'
import dayjs from 'dayjs'
import SoonOverlay from '@/components/SoonOverlay'

const LIMIT = 6
const WITH_INFINITE_SCROLL = false

/* @TODO: remove hard-coded category id */
const POPULAR_CATEGORY_ID = 1 // 1 = popular

export default function Blog() {
  const {
    label_show_more,
    atf_blog,
    atf_blog_image,
    label_no_more_post,
    site_fetching,
    label_popular_post,
    label_latest_post,
    site_no_data
  } = useContent()
  const [posts, setPosts] = useState(null)
  const [popularPosts, setPopularPosts] = useState(null)
  const [offset, setOffset] = useState(0)
  const [canShowMore, setCanShowMore] = useState(true)
  const [isFetching, setIsFetching] = useState(false)

  const fetcher = useCallback(
    (callback) => {
      setIsFetching(true)
      fetch(`/api/blog?limit=${LIMIT}&offset=${offset}`)
        .then((res) => res.json())
        .then((res) => {
          if (callback) callback(res)
        })
        .catch((err) => {
          setPosts(undefined)
        })
        .finally(() => setIsFetching(false))
    },
    [offset]
  )

  useEffect(() => {
    if (popularPosts === null) {
      fetch(
        `/api/blog?limit=${POPULAR_POST_LENGTH}&offset=0&categoryId=${POPULAR_CATEGORY_ID}`
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.data) {
            let newPopularPosts = res.data
            if (res.data < POPULAR_POST_LENGTH) {
              let remaining = POPULAR_POST_LENGTH - res.data.length
              let additionals = posts.slice(0, remaining)
              newPopularPosts = [...res.data, ...additionals]
            }

            setPopularPosts(newPopularPosts)
          } else {
            setPopularPosts(undefined)
          }
        })
        .catch((err) => {
          setPopularPosts(undefined)
        })
        .finally(() => setIsFetching(false))
    }
  }, [popularPosts, posts])

  useEffect(() => {
    if (isFetching || posts !== null) return

    fetcher((res) => {
      if (res.data) {
        const sorted = res.data.sort((a, b) => dayjs(a.date).isAfter(b.date))
        setPosts(sorted)
        setOffset(offset + LIMIT)
      } else {
        setPosts(undefined)
      }
      if (!res.next) {
        setCanShowMore(false)
      }
    })
  }, [isFetching, offset, posts, fetcher])

  const handleShowMore = () => {
    if (isFetching === false) {
      fetcher((res) => {
        if (res.data) {
          const newPosts = [...posts, ...res.data]
          const sorted = newPosts.sort((a, b) => dayjs(a.date).isAfter(b.date))
          setPosts(sorted)
          setOffset(offset + LIMIT)
        }
        if (!res.next) {
          setCanShowMore(false)
        }
      })
    }
  }

  return (
    <Layout>
      <ATF title={atf_blog} imageURL={atf_blog_image} />

      <div className="container relative">
        <SoonOverlay>
          <div className="sticky top-0 pt-28 lg:pt-40 flex justify-center">
            <UnderlinedTitle text1="SOON" />
          </div>
        </SoonOverlay>

        {/* @TODO: delete this */}
        <div className="fixed bottom-4 right-4 px-4 py-2 bg-black shadow-2xl text-white z-header flex justify-between">
          <div className="pr-4">
            <p className="font-bold mb-2">GELORA</p>
            <p className="text-sm mb-2">Anniversary Exhibition</p>
            <Link href="/campaign">
              <a className="underline text-primary hover:no-underline text-sm">
                Read more
              </a>
            </Link>
          </div>
        </div>

        {popularPosts && (
          <div className="py-10 md:py-20 lg:py-40">
            <UnderlinedTitle text1={label_popular_post} lineBold BigText />
            <PopularPosts
              data={popularPosts}
              extendClass={'mt-4 md:mt-10 lg:mt-20'}
            />
          </div>
        )}

        <div className="mb-8 md:mb-12 lg:mb-24">
          <UnderlinedTitle
            text1={label_latest_post}
            lineBold
            BigText
            extendClass
          />
        </div>

        {!posts || posts === null ? (
          <>{site_no_data}</>
        ) : (
          <PostCards posts={posts} />
        )}

        {WITH_INFINITE_SCROLL ? (
          <div className="flex justify-center mb-40">
            {canShowMore ? (
              <>
                {isFetching ? (
                  <p className="italic opacity-50">{site_fetching}</p>
                ) : (
                  <Button outline onClick={handleShowMore}>
                    {label_show_more}
                  </Button>
                )}
              </>
            ) : (
              <p className="italic opacity-50">{label_no_more_post}</p>
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
