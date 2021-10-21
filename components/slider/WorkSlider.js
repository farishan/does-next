import Image from 'next/image'
import SectionLabel from '@/components/sections/SectionLabel'
import { useEffect, useState } from 'react'
import { BLUR_IMAGE } from '@/constants'

const works = [
  {
    id: 1,
    author: 'DOES GEN 7',
    image: '/images/dummy/work_1a1a.jpg',
    logo: '/images/dummy/work_1a2c.jpg',
    content:
      '“Luca” is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.....'
  },
  {
    id: 2,
    author: 'DOES GEN 8',
    image: '/images/placeholder.png',
    logo: '/images/placeholder.png',
    content:
      'Donec sodales tortor turpis, ac dictum nisi finibus eu. Praesent metus orci, vulputate nec lectus in, facilisis consequat turpis. Sed ac.'
  },
  {
    id: 3,
    author: 'DOES GEN 9',
    image: '/images/dummy/work_1a1b.jpg',
    logo: '/images/dummy/work_1a1b.jpg',
    content:
      'Etiam sit amet condimentum orci. Integer tortor diam, euismod eu massa at, elementum faucibus eros. Proin a sodales neque. Nunc tempor.'
  }
]

const len = works.length

function getPrev(i) {
  return i == 0 ? len - 1 : i - 1
}

function getNext(i) {
  return i == len - 1 ? 0 : i + 1
}

export default function WorkSlider() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [direction, setDirection] = useState(null)
  const [selected, setSelected] = useState(1)
  const [prev, setPrev] = useState(null)
  const [next, setNext] = useState(null)
  const [navClass, setNavClass] = useState('')
  const [selectedClass, setSelectedClass] = useState('')

  useEffect(() => {
    if (isProcessing === false) {
      setIsProcessing(true)
      let translate = ``

      if (direction === 'next') {
        translate = '-translate-x-4'
      } else {
        translate = 'translate-x-4'
      }

      setSelectedClass('opacity-0 ' + translate)
      setNavClass('opacity-0')

      var newPrev = works[getPrev(selected)]
      var newNext = works[getNext(selected)]
      setPrev(newPrev)
      setNext(newNext)

      setTimeout(() => {
        setSelectedClass('opacity-100 translate-x-0')
        setNavClass('opacity-40 hover:opacity-70')
        setIsProcessing(false)
      }, 400)
    }
    // eslint-disable-next-line
  }, [selected])

  const baseNavClass = `cursor-pointer absolute top-1/2 -translate-y-1/2 transition-all duration-100`

  const handleNav = (type) => {
    if (isProcessing === false) {
      setDirection(type)
      setSelected(type === 'prev' ? getPrev(selected) : getNext(selected))
    }
  }

  return (
    <section
      className="overflow-x-hidden relative py-10 md:py-14 lg:py-16 select-none"
      draggable={false}
    >
      {/* Prev */}
      {prev && prev !== null && (
        <div
          className={`${baseNavClass} ${navClass} left-0 -translate-x-3/4 lg:-translate-x-1/2 active:-translate-x-1/2 lg:active:-translate-x-1/3`}
          onClick={() => handleNav('prev')}
        >
          <div className="hidden lg:block">
            <Image
              draggable={false}
              src={prev.image}
              alt={`test`}
              width={400}
              height={400}
              className="object-contain"
              placeholder="blur"
              blurDataURL={BLUR_IMAGE}
            />
          </div>
          <div className="lg:hidden">
            <Image
              draggable={false}
              src={prev.image}
              alt={`test`}
              width={200}
              height={200}
              className="object-contain"
              placeholder="blur"
              blurDataURL={BLUR_IMAGE}
            />
          </div>
        </div>
      )}

      <div className="container relative z-10 pointer-events-none">
        <div
          className={`flex flex-wrap lg:flex-nowrap items-center w-full lg:w-8/12 lg:mx-auto transition-all duration-200 ${selectedClass}`}
        >
          <div className="mb-6 lg:mb-0 lg:mr-24 w-full lg:w-64">
            <SectionLabel
              icon="profile"
              text={works[selected].author}
              extendClass="mb-4"
            />
            <div className="mb-8">
              <Image
                draggable={false}
                src={works[selected].logo}
                alt={`test`}
                width={230}
                height={200}
                className="object-contain"
                layout="responsive"
                placeholder="blur"
                blurDataURL={BLUR_IMAGE}
              />
            </div>
            <div className="lg:hidden mb-12">
              <Image
                draggable={false}
                src={works[selected].image}
                alt={`test`}
                width={246}
                height={200}
                className="object-contain"
                layout="responsive"
                placeholder="blur"
                blurDataURL={BLUR_IMAGE}
              />
            </div>
            <p className="text-sm font-light leading-relaxed">
              {works[selected].content}
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              draggable={false}
              src={works[selected].image}
              alt={`test`}
              width={494}
              height={400}
              className="object-contain"
              placeholder="blur"
              blurDataURL={BLUR_IMAGE}
            />
          </div>
        </div>
      </div>

      {/* Next */}
      {next && next !== null && (
        <div
          className={`${baseNavClass} ${navClass} right-0 translate-x-3/4 lg:translate-x-1/2 active:translate-x-1/2 lg:active:translate-x-1/3`}
          onClick={() => handleNav('next')}
        >
          <div className="hidden lg:block">
            <Image
              draggable={false}
              src={next.image}
              alt={`test`}
              width={400}
              height={400}
              className="object-contain"
              placeholder="blur"
              blurDataURL={BLUR_IMAGE}
            />
          </div>
          <div className="lg:hidden">
            <Image
              draggable={false}
              src={next.image}
              alt={`test`}
              width={200}
              height={200}
              className="object-contain"
              placeholder="blur"
              blurDataURL={BLUR_IMAGE}
            />
          </div>
        </div>
      )}
    </section>
  )
}
