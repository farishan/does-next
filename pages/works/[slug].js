import ATF from '@/components/ATF'
import Layout from '@/components/Layout'
import useContent from '@/helpers/use-content'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'
import works from '@/assets/works.dummy.json'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Html from '@/components/Html'

/* @todo: split to other file */
const PageSection = ({ data = {} }) => {
  const { title, image, entities = [] } = data

  return (
    <>
      <div className="py-8">
        <div className="relative w-full h-96 flex items-center justify-center">
          <Image
            src={image}
            layout="fill"
            className="object-cover"
            alt="Main"
          />

          <h1 className="relative z-10 font-bold uppercase text-center">
            {title}
          </h1>
        </div>
        <div className="container py-8">
          {entities.map((entity) => (
            <div key={entity.id} className="py-8">
              <p className="text-2xl">{entity.name}</p>
              <div>{entity.description}</div>
              <div className="flex flex-wrap justify-between -mx-4 mt-8">
                {entity.images.map((image, index) => (
                  <div
                    className="w-1/2 md:w-1/4 px-4 mb-4 relative h-20"
                    key={image}
                  >
                    <Image
                      src={image}
                      alt={image}
                      key={image + index}
                      layout="fill"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default function WorkDetail() {
  const router = useRouter()
  const slug = router.query.slug
  const { site_title } = useContent()
  const [data, setData] = useState({
    title: 'No Title',
    image: '/images/placeholder.png',
    content: '',
    entity: {},
    entity_keys: [],
    video: {}
  })

  useEffect(() => {
    const selected = works.find((work) => work.slug === slug)

    if (selected && selected.entity) {
      const entityKeys = Object.keys(selected.entity)
      selected.entity_keys = entityKeys
    }

    if (selected) setData(selected)
  }, [slug])

  const { title, image, content, entity, video, entity_keys } = data

  return (
    <Layout>
      <Head>
        <title>
          {title} - {site_title}
        </title>
      </Head>

      <ATF title={title} imageURL={image} />

      <div className="py-10 md:py-20 text-white">
        {data ? (
          <>
            <div className="container">
              <h1>{title}</h1>
              <Html block>{content}</Html>
              <div className="py-4">
                <p>{video.title}</p>
                <iframe
                  width="560"
                  height="315"
                  src={video.embed_url}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                ></iframe>
              </div>
            </div>

            {entity_keys.map((entityKey) => (
              <section key={entityKey}>
                <PageSection data={entity[entityKey]} />
              </section>
            ))}
          </>
        ) : (
          <div className="container">
            No data.{' '}
            <button onClick={() => router.back()}>Back to listing</button>
          </div>
        )}
      </div>
    </Layout>
  )
}
