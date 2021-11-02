import { useRouter } from 'next/dist/client/router'
import works from '@/assets/works.dummy.json'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function WorkTrailer() {
  const router = useRouter()
  const slug = router.query.slug
  const [data, setData] = useState({
    title: 'No Title',
    image: '/images/placeholder.png',
    content: '',
    entity: {},
    entity_keys: [],
    video: {}
  })

  useEffect(() => {
    /* @TODO: Fetch from /api route */
    const selected = works.find((work) => work.slug === slug)

    if (selected && selected.entity) {
      const entityKeys = Object.keys(selected.entity)
      selected.entity_keys = entityKeys
    }

    if (selected) setData(selected)
  }, [slug])

  const { video } = data

  return (
    <>
      <div className="h-screen p-8">
        <Link href="/">
          <a className="text-white underline">Back</a>
        </Link>
        <iframe
          width="1440"
          height="900"
          src={video.embed_url + '?&autoplay=1'}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </>
  )
}
