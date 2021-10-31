import WorkItem from './WorkItem'
import Image from 'next/image'
import Link from 'next/link'
import IconArrowRight from './icons/IconArrowRight'
import IconClock from './icons/IconClock'
import IconCalendar from './icons/IconCalendar'
import IconPlayButton from './icons/IconPlayButton'

const placeholder = {
  title: 'No Title',
  thumbnail: '/images/placeholder.png',
  description: '',
  date: '',
  slug: ''
}

export default function FeaturedWorkItem({ data = placeholder }) {
  return (
    <>
      <div className="flex">
        <div className="w-1/2">
          <Link href={`/works/${data?.slug}`}>
            <a>
              {data?.thumbnail && (
                <Image
                  src={data?.thumbnail}
                  alt={data?.title}
                  width="376px"
                  height="576px"
                />
              )}
            </a>
          </Link>
        </div>
        <div className="w-1/2 flex flex-col pl-7 font-body">
          <p className="text-6xl mb-5">{data?.title}</p>
          <div className="flex flex-wrap font-extralight text-sm text-gray-400">
            <div className="mr-5 mb-2 flex items-center">
              <span className="text-red-700 mr-2">
                <IconClock />
              </span>
              {data?.duration}
            </div>
            <div className="mr-5 mb-2 flex items-center">
              <span className="text-red-700 mr-2">
                <IconCalendar />
              </span>
              {data?.releaseDate}
            </div>
            <div className="mr-5 flex items-center">
              <span className="text-red-700 mr-2">
                <IconPlayButton />
              </span>
              {data?.contentType}
            </div>
          </div>
          <div className="sm:hidden md:block">
            <div className="w-full border-t border-white border-opacity-30 my-10" />
            <p className="text-sm font-extralight">{data?.description}</p>
            <Link href={`/works/${data?.slug}`}>
              <a className="bg-red-600 text-white w-max p-6 mt-10 flex">
                SELENGKAPNYA
                <span className="ml-3">
                  <IconArrowRight />
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <p className="text-sm font-extralight">{data?.description}</p>
        <Link href={`/works/${data?.slug}`}>
          <a className="bg-red-600 text-white w-max p-6 mt-10 flex">
            SELENGKAPNYA
            <span className="ml-3">
              <IconArrowRight />
            </span>
          </a>
        </Link>
      </div>
    </>
  )
}
