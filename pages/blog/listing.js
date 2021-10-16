import ATF from '@/components/ATF'
import Layout from '@/components/Layout'
import useContent from '@/helpers/use-content'
import { useCallback, useEffect, useState } from 'react'
import Button from '@/components/Button'
import PostCards from '@/components/post/PostCards'
import TabNav from '@/components/TabNav'

const LIMIT = 12

export default function BlogListing() {
  const { label_show_more } = useContent()
  const [posts, setPosts] = useState(null)
  const [categories, setCategories] = useState(null)
  const [offset, setOffset] = useState(0)
  const [canShowMore, setCanShowMore] = useState(true)
  const [isFetching, setIsFetching] = useState(false)
  const [tabs, setTabs] = useState([
    {
      id: 'all',
      label: 'All'
    }
  ])

  const fetcher = useCallback(
    (callback) => {
      setIsFetching(true)
      fetch(`/api/blog?limit=${LIMIT}&offset=${offset}`)
        .then((res) => res.json())
        .then((res) => {
          if (callback) callback(res)
        })
        .catch((err) => {
          console.log(err)
          setPosts(undefined)
        })
        .finally(() => setIsFetching(false))
    },
    [offset]
  )

  useEffect(() => {
    if (categories !== null) return

    fetch(`/api/blog-categories`)
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setCategories(res.data)
          setTabs([
            {
              id: 'all',
              label: 'All'
            },
            ...res.data.map((d) => ({ id: d.id, label: d.title }))
          ])
        } else {
          setCategories(undefined)
        }
      })
      .catch((err) => {
        console.log(err)
        setCategories(undefined)
      })
  }, [categories])

  useEffect(() => {
    if (isFetching || posts !== null) return

    fetcher((res) => {
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
  }, [isFetching, offset, posts, fetcher])

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

          setCanShowMore(res.next)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => setIsFetching(false))

      fetcher((res) => {
        if (res.data) {
          const newPosts = [...posts, ...res.data]
          setPosts(newPosts)
          setOffset(offset + LIMIT)
        }

        if (!res.next) {
          setCanShowMore(false)
        }
      })
    }
  }

  const handleFilter = (categoryId) => {
    if (isFetching) return

    setIsFetching(true)
    setOffset(0)

    fetch(`/api/blog?limit=${LIMIT}&offset=0&categoryId=${categoryId}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          const newPosts = res.data
          setPosts(newPosts)
          setOffset(newPosts.length)
        }

        setCanShowMore(res.next)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setIsFetching(false))
  }

  return (
    <Layout>
      <ATF title="Berita" />

      <div className="container pt-5">
        <TabNav tabs={tabs} onChange={handleFilter} defaultValue={tabs[0].id} />
      </div>

      <div className="container pt-12 lg:pt-24">
        {!posts || posts === null ? <>No data.</> : <PostCards posts={posts} />}

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
      </div>
    </Layout>
  )
}
