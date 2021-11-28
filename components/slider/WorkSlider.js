import Image from 'next/image'
import SectionLabel from '@/components/sections/SectionLabel'
import { useState, useRef } from 'react'
import { BLUR_IMAGE } from '@/constants'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import SwiperCore, { Navigation, Autoplay } from 'swiper'
import Button from '../Button'

// install Swiper modules
SwiperCore.use([Navigation, Autoplay])

const works = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/h60VOHsLJ3Y',
    author: 'DOES GEN 7',
    image: '/images/dummy/work_1a1a.jpg',
    logo: '/images/dummy/work_1a2c.jpg',
    title: 'Padar',
    content:
      '“Luca” is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.....'
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/q8ymDpGa-BE',
    author: 'DOES GEN 8',
    image: '/images/placeholder.png',
    logo: '/images/placeholder.png',
    title: 'Little Hope',
    content:
      'Donec sodales tortor turpis, ac dictum nisi finibus eu. Praesent metus orci, vulputate nec lectus in, facilisis consequat turpis. Sed ac.'
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/q8ymDpGa-BE',
    author: 'DOES GEN 9',
    image: 'https://i.ibb.co/KX3d5Ky/Mask-Group-2-1.png',
    logo: 'https://i.ibb.co/KX3d5Ky/Mask-Group-2-1.png',
    title: 'Little Hope',
    content:
      'Etiam sit amet condimentum orci. Integer tortor diam, euismod eu massa at, elementum faucibus eros. Proin a sodales neque. Nunc tempor.'
  }
]

export default function WorkSlider() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <>
      <Swiper
        // autoplay
        speed={500}
        loop
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        spaceBetween={16}
        slidesPerView={1}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          }, 100)
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex + 1)
          setSelectedWork(works[swiper.realIndex])
          setIsLoaded(false)
        }}
        onTap={(e) => setShowModal(true)}
        className="select-none"
        noSwiping={false}
      >
        {works &&
          works !== null &&
          works.map((work, index) => (
            <SwiperSlide key={`${work.slug}_${index}`}>
              <div className="container relative z-10 pointer-events-none">
                <div
                  className={`flex flex-wrap lg:flex-nowrap items-center w-full transition-all duration-200`}
                >
                  {/* Left */}
                  <div className="lg:mr-24 w-full lg:w-5/12 lg:pl-14">
                    <SectionLabel
                      icon="profile"
                      text={work.author}
                      extendClass="mb-4 md:mb-6"
                    />
                    <h2 className="text-4xl lg:text-8xl mb-6 md:mb-8 uppercase font-bold">
                      {work.title}
                    </h2>

                    {/* Image - Mobile & tablet only */}
                    <div className="lg:hidden">
                      <Image
                        draggable={false}
                        src={work.image}
                        alt={work.title}
                        width={327}
                        height={240}
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={BLUR_IMAGE}
                        layout="responsive"
                      />
                    </div>

                    <p className="text-sm font-light leading-relaxed mb-12 mt-6 lg:mt-0 md:mb-0">
                      {work.content}
                    </p>

                    {/* Mobile only */}
                    <div className="md:hidden">
                      <Button
                        arrow
                        onClick={() => setShowModal(true)}
                        extendClass="w-full justify-center"
                      >
                        Lihat Detail
                      </Button>
                    </div>
                  </div>

                  {/* Right - Large screen only */}
                  <div className="hidden lg:block lg:pr-14">
                    <Image
                      draggable={false}
                      src={work.image}
                      alt={work.title}
                      width={624}
                      height={440}
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={BLUR_IMAGE}
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="container">
        <div className="flex items-center justify-between mt-12 lg:px-14">
          <div className="flex-grow hidden md:block order-1">
            <Button arrow onClick={() => setShowModal(true)}>
              Lihat Detail
            </Button>
          </div>
          <button
            ref={prevRef}
            className={`h-14 md:h-16 w-14 md:w-16 flex items-center justify-center rounded-full border border-white border-opacity-30 hover:scale-105 active:scale-95 order-3 md:order-2 mr-4 md:mr-0`}
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1L0.999999 9L9 17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="text-gray-888 font-medium md:mx-6 w-9 text-left md:text-center order-2 md:order-3 flex-grow md:flex-grow-0">
            {currentIndex} / {works.length}
          </div>
          <button
            ref={nextRef}
            className={`h-14 md:h-16 w-14 md:w-16 flex items-center justify-center rounded-full border border-white border-opacity-30 hover:scale-105 active:scale-95 order-4`}
          >
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 17L9 9L1 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {/* @TODO: split to component */}
      {showModal && (
        <div
          className="fixed left-0 top-0 z-50 w-full h-full bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div className="w-full px-5 lg:px-0 lg:w-3/4 h-2/3 text-right -mt-4 relative">
            <button
              className="py-2 px-4 hover:bg-primary"
              onClick={() => setShowModal(false)}
            >
              X
            </button>
            {!isLoaded && (
              <p className="italic text-center absolute w-full left-0 top-0">
                Loading...
              </p>
            )}
            <iframe
              width="560"
              height="315"
              src={
                selectedWork && selectedWork !== null
                  ? selectedWork.src
                  : 'https://www.youtube.com/embed/q8ymDpGa-BE'
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
              onClick={(e) => e.stopPropagation()}
              onLoad={() => setIsLoaded(true)}
            ></iframe>
          </div>
        </div>
      )}
    </>
  )
}
