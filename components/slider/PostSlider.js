// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import PostCard from '../post/PostCard'
import SwiperCore, { Navigation } from 'swiper'
import { useRef, useState } from 'react'

// install Swiper modules
SwiperCore.use([Navigation])

export default function PostSlider({ posts }) {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const [canNext, setCanNext] = useState(true)
  const [canPrev, setCanPrev] = useState(false)

  if (!posts || posts === null) return <></>

  return (
    <>
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        spaceBetween={16}
        slidesPerView={1.1}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.navigation.destroy()
            swiper.navigation.init()
            swiper.navigation.update()
          }, 100)
        }}
        onSlideChange={(swiper) => {
          setCanNext(!swiper.isEnd)
          setCanPrev(!swiper.isBeginning)
        }}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
            spaceBetween: 30
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        }}
      >
        {posts &&
          posts !== null &&
          posts.map((post) => (
            <SwiperSlide key={post.slug}>
              <PostCard data={post} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="hidden items-center justify-between mt-12 md:flex">
        <button
          ref={prevRef}
          className={`h-16 w-16 flex items-center justify-center rounded-full border border-white border-opacity-30 hover:scale-105 active:scale-95 ${
            canPrev ? '' : 'cursor-not-allowed opacity-25'
          }`}
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
        <button
          ref={nextRef}
          className={`h-16 w-16 flex items-center justify-center rounded-full border border-white border-opacity-30 hover:scale-105 active:scale-95 ${
            canNext ? '' : 'cursor-not-allowed opacity-25'
          }`}
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
    </>
  )
}
