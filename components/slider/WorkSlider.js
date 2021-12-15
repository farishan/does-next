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
import Modal from '../Modal'

// install Swiper modules
SwiperCore.use([Navigation, Autoplay])

const works = [
  {
    id: 1,
    src: 'https://www.youtube.com/embed/h60VOHsLJ3Y',
    author: 'DOES GEN 6',
    image: 'https://i.ibb.co/MByDdfC/PADAR-POSTER-LANDSCAPE.jpg',
    logo: '/images/dummy/work_1a2c.jpg',
    title: 'Padar',
    content:
      'Berkisah tentang seorang pemuda desa bersama dua kawannya, seekor komodo dan tupai terbang yang sedang menghadapi kekeringan ekstrim di pulau tempat mereka tinggal.'
  },
  {
    id: 2,
    src: 'https://www.youtube.com/embed/SRTdPvrLtn0',
    author: 'DOES GEN 7',
    image: 'https://img.youtube.com/vi/SRTdPvrLtn0/sddefault.jpg',
    logo: '/images/placeholder.png',
    title: 'Little Hope',
    content:
      'Kisah petualangan seru dan mengharukan Ziya untuk menyelamatkan dunia. Cerita dengan tema Sci-Fi yang belum pernah dibawakan pada animasi-animasi sebelumnya.'
  },
  {
    id: 3,
    src: 'https://www.youtube.com/embed/3sDgADNrHq4',
    author: 'DOES GEN 4',
    image: 'https://img.youtube.com/vi/3sDgADNrHq4/maxresdefault.jpg',
    logo: '/images/placeholder.png',
    title: 'DIE HARD FANS',
    content:
      '3 orang fans yang memiliki idola yang berbeda, mereka berusaha membuktikan kecintaan mereka terhadap idola masing masing'
  },
  {
    id: 4,
    src: 'https://www.youtube.com/embed/H4pOSmY7fzg',
    author: 'DOES GEN 2',
    image: 'https://i.ibb.co/Bjhw0b7/pos.jpg',
    logo: '/images/placeholder.png',
    title: 'SUPER USA',
    content:
      'Super USA terdiri dari Udin, Sukro, dan Amir yang merupakan 3 karakter utama dalam dalam serial komik superhero karya Endank Soekamti berjudul "Soekamti Day".'
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
                      className="object-contain cursor-pointer"
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
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        noHeader
        transparentContent
      >
        <div className="w-full h-full px-5 lg:px-0 text-right -mt-4 relative">
          <button
            className="py-2 px-4 hover:bg-primary"
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
            style={{ width: '100%', height: '40vw' }}
          ></iframe>
        </div>
      </Modal>
    </>
  )
}
