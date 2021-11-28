import Image from 'next/image'
import Badge from '@/components/Badge'
import { useEffect, useState } from 'react'
// import Button from '@/components/Button'
import useContent from '@/helpers/use-content'
// import PostSlider from '@/components/slider/PostSlider'
import ExternalLinkDirection from '@/components/ExternalLinkDirection'

const LIMIT = 6

export default function SectionFeaturedBlog() {
  const {
    // nav_blog,
    alt_blog_background_src,
    alt_blog_background_alt,
    site_youtube
  } = useContent()
  // const sectionTitle = nav_blog
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
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="relative py-8 md:py-16 lg:py-20">
          <div
            className="absolute w-full h-full z-10 left-0 top-0"
            style={{
              background:
                'radial-gradient(60.55% 60.55% at 50% 49.94%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 36.76%, rgba(0, 0, 0, 0.8) 100%)'
            }}
          ></div>
          <Image
            src={alt_blog_backgroundImage}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="mx-6"
          />
          <div className="flex flex-col justify-center items-center h-full relative z-20">
            <div className="mb-10">
              <Badge text="2015 - 2021" />
            </div>
            <ExternalLinkDirection url={site_youtube}>
              <div className="flex flex-col justify-center items-center font-extralight">
                <h2 className="font-body text-white text-4xl md:text-6xl lg:text-8xl text-center">
                  THE <span className="font-bold">ACTIVITY</span>
                </h2>
                <h2 className="font-body text-white text-4xl md:text-6xl lg:text-8xl text-center">
                  AND <span className="font-bold">STORY</span> OF
                </h2>
                <h2 className="font-body text-white text-4xl md:text-6xl lg:text-8xl text-center">
                  <span className="font-bold">DOES</span> UNIVERSITY
                </h2>
              </div>
            </ExternalLinkDirection>
          </div>
        </div>
      </div>
    </section>

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
