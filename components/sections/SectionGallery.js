import Image from 'next/image'
import { BLUR_IMAGE } from '@/constants'
import Lightbox from 'react-image-lightbox'
import { useEffect, useState } from 'react'

const SectionGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const [srcs, setSrcs] = useState([])

  useEffect(() => {
    if (images) {
      setSrcs(images.map((image) => image.src))
    }
  }, [images])

  return (
    <>
      <div className="flex flex-wrap -mx-5">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`px-5 mb-10 ${
              index === 0 ? 'w-full' : 'w-full md:w-1/3'
            }`}
          >
            <div
              className="relative w-full "
              key={`block_image_${image.src}_${Math.random()}`}
            >
              {index === 0 ? (
                <>
                  {/* Desktop */}
                  <div
                    className="hidden md:block cursor-pointer border-2 border-transparent hover:border-primary transition-colors duration-200"
                    onClick={() => {
                      setPhotoIndex(index)
                      setIsOpen(true)
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1208}
                      height={441}
                      layout="responsive"
                      className="object-cover object-center"
                      placeholder="blur"
                      blurDataURL={BLUR_IMAGE}
                    />
                  </div>
                  {/* Mobile */}
                  <div
                    className="md:hidden"
                    onClick={() => {
                      setPhotoIndex(index)
                      setIsOpen(true)
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={376}
                      height={376}
                      layout="responsive"
                      className="object-cover object-center"
                      placeholder="blur"
                      blurDataURL={BLUR_IMAGE}
                    />
                  </div>
                </>
              ) : (
                <div
                  className="cursor-pointer border-2 border-transparent hover:border-primary transition-colors duration-200"
                  onClick={() => {
                    setPhotoIndex(index)
                    setIsOpen(true)
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={376}
                    height={376}
                    layout="responsive"
                    className="object-cover object-center"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={srcs[photoIndex]}
          nextSrc={srcs[(photoIndex + 1) % srcs.length]}
          prevSrc={srcs[(photoIndex + srcs.length - 1) % srcs.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + srcs.length - 1) % srcs.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % srcs.length)
          }
        />
      )}
    </>
  )
}

SectionGallery.displayName = 'SectionGallery'
export default SectionGallery
