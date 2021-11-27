import Button from '@/components/Button'
import useContent from '@/helpers/use-content'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import PostSlider from '@/components/slider/PostSlider'
import ExternalLinkDirection from '../ExternalLinkDirection'
import Section from '@/components/sections/Section'
import Badge from '../Badge'

const LIMIT = 6

export default function SectionFeaturedBlog() {
  const {
    nav_blog,
    alt_blog_background_src,
    alt_blog_background_alt,
    site_youtube
  } = useContent()
  const sectionTitle = nav_blog
  const [posts, setPosts] = useState(null)
  const [isFetching, setIsFetching] = useState(false)
  const alt_blog_backgroundImage = {
    src: alt_blog_background_src,
    alt: alt_blog_background_alt
  }

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
    <Section
      // overlay
      fullscreen
      backgroundImage={alt_blog_backgroundImage}
      extendClass="overflow-y-hidden"
    >
      <div className="absolute bottom-0 left-0 z-30 h-full w-full">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="mb-10">
            <Badge text="2015 - 2021" />
          </div>
          <ExternalLinkDirection url={site_youtube}>
            <div className="flex flex-col justify-center items-center font-extralight">
              <h1 className="font-body text-white text-4xl md:text-6xl lg:text-8xl">
                THE <span className="font-bold">ACTIVITY</span>
              </h1>
              <h1 className="font-body text-white text-4xl md:text-6xl lg:text-8xl">
                AND <span className="font-bold">STORY</span> OF
              </h1>
              <h1 className="font-body text-white text-4xl md:text-6xl lg:text-8xl">
                <span className="font-bold">DOES</span> UNIVERSITY
              </h1>
            </div>
          </ExternalLinkDirection>
        </div>
      </div>
    </Section>

    /* TODO Show real content of featured blog section */
    // <section className="container pt-10 pb-14 lg:py-16 relative">
    //   <div className="flex items-center mb-10 md:mb-12">
    //     <div>
    //       <h2 className="md:text-xl mr-4 md:mr-10 tracking-widest">
    //         {sectionTitle}
    //       </h2>
    //     </div>
    //     <div className="w-full">
    //       <hr className="border-white opacity-50" />
    //     </div>
    //   </div>

    //   <PostSlider posts={posts} />

    //   <div className="flex justify-center mt-8 md:-mt-16">
    //     <Link href="/blog">
    //       <a>
    //         <Button outline arrow>
    //           Lihat Berita Lain
    //         </Button>
    //       </a>
    //     </Link>
    //   </div>
    // </section>
  )
}
