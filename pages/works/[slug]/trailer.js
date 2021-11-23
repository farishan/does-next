import { useRouter } from 'next/dist/client/router'
import works from '@/assets/works.dummy.json'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import IconPlayerBack from '@/components/icons/IconPlayerBack'

export default function WorkTrailer() {
  const router = useRouter()
  const { backLink } = router.query
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
      <div className="select-none" style={{ height: '90vh' }}>
        <div className="w-full pointer-events-none">
          <div className="px-5 lg:px-8">
            <Link href={backLink || '/'}>
              <a
                className="w-max py-4 text-white opacity-50 hover:opacity-100 pointer-events-auto flex items-center hover:text-white"
                title="Back"
              >
                <IconPlayerBack />
                <span className="ml-6">Back</span>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full h-full relative">
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
      </div>
    </>
  )
}
