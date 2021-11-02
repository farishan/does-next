import WorkItem from './WorkItem'
import Image from 'next/image'
import Link from 'next/link'
import IconArrowRight from './icons/IconArrowRight'
import IconClock from './icons/IconClock'
import IconCalendar from './icons/IconCalendar'
import IconPlayButton from './icons/IconPlayButton'
import Button from './Button'
import useContent from '@/helpers/use-content'

const placeholder = {
  title: 'No Title',
  thumbnail: '/images/placeholder.png',
  description: '',
  date: '',
  slug: ''
}

export default function FeaturedWorkItem({ data = placeholder }) {
  const { label_view_more } = useContent()

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
          <div className="hidden md:block">
            <div className="w-full border-t border-white border-opacity-30 my-10" />
            <p className="text-sm font-extralight mb-12">
              {data?.description}
            </p>
            <Link href={`/works/${data?.slug}`}>
              <a>
                <Button arrow>{label_view_more}</Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:hidden">
        <p className="text-sm font-extralight mb-8">{data?.description}</p>
        <Link href={`/works/${data?.slug}`}>
          <a>
            <Button arrow>{label_view_more}</Button>
          </a>
        </Link>
      </div>
    </>
  )
}
