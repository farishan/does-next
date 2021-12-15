import Image from 'next/image'
import Badge from '@/components/Badge'
import useContent from '@/helpers/use-content'
// import ExternalLinkDirection from '@/components/ExternalLinkDirection'
import Modal from '../Modal'
import { useState } from 'react'

export default function SectionFeaturedLink() {
  const [showModal, setShowModal] = useState(false)
  const {
    alt_blog_background_src,
    alt_blog_background_alt,
    site_youtube,
    site_featured_youtube_embed
  } = useContent()
  const alt_blog_backgroundImage = {
    src: alt_blog_background_src,
    alt: alt_blog_background_alt
  }

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
            {/* <ExternalLinkDirection url={site_youtube}> */}
            <div
              className="flex flex-col justify-center items-center font-extralight cursor-pointer"
              onClick={() => setShowModal(true)}
            >
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
            {/* </ExternalLinkDirection> */}
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        noHeader
        transparentContent
      >
        <button
          className="block ml-auto mb-4"
          onClick={() => setShowModal(false)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ minWidth: '14px' }}
          >
            <path d="M13 1L1 13" stroke="#FFFFFF" strokeWidth="2" />
            <path d="M13 13L1 0.999999" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </button>
        <iframe
          width="560"
          height="315"
          src={site_featured_youtube_embed}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '40vw' }}
        ></iframe>
      </Modal>
    </section>
  )
}
