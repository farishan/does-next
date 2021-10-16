import DateLabel from '@/components/DateLabel'
import { BLUR_IMAGE } from '@/constants'
import useContent from '@/helpers/use-content'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function PostCard({ data }) {
  const { slug, id, thumbnail, title, date } = data

  const { label_read_more } = useContent()
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <Link href={`/blog/${slug}`}>
        <a
          className="block relative p-4 h-80"
          onMouseEnter={() => setHovered(id)}
          onMouseLeave={() => setHovered(null)}
        >
          {thumbnail && (
            <Image
              src={thumbnail.src}
              alt={thumbnail.alt}
              layout="fill"
              className={`select-none object-cover transition-opacity duration-500 ease-in-out pointer-events-none ${
                hovered === id ? 'opacity-70' : ''
              }`}
              blurDataURL={BLUR_IMAGE}
              placeholder="blur"
            />
          )}
          <span className="absolute bottom-0 right-0 overflow-hidden">
            <button
              className={`select-none bg-primary text-white py-4 pr-5 pl-6 text-sm font-light flex items-center uppercase ${
                hovered === id ? '' : 'translate-y-full'
              } transition-transform duration-200 ease-in-out`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ minWidth: '14px' }}
                className="mr-3.5"
              >
                <path
                  d="M7 7V13M1 7H7H1ZM13 7H7H13ZM7 7V1V7Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {label_read_more}
            </button>
          </span>
        </a>
      </Link>
      <div className="relative z-10 select-none">
        <DateLabel extendClass="mt-3 md:mt-6 mb-2 md:mb-4">
          {dayjs(date).format('DD MMMM YYYY')}
        </DateLabel>
        <Link href={`/blog/${slug}`}>
          <a className="text-white">
            <h2 className="text-lg md:text-2xl font-medium">{title}</h2>
          </a>
        </Link>
      </div>
    </>
  )
}
