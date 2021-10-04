import DateLabel from '@/components/DateLabel'
import useContent from '@/helpers/use-content'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function PostCards({ posts }) {
  const { label_read_more } = useContent()
  const [hovered, setHovered] = useState(null)

  return (
    <>
      <div className="flex flex-wrap -mx-5">
        {posts &&
          posts !== null &&
          posts.map((post) => (
            <div
              key={post.slug}
              className="w-full lg:w-1/3 px-5 mb-12 lg:mb-24"
            >
              <Link href={`/blog/${post.slug}`}>
                <a
                  className="block relative p-4 h-80"
                  onMouseEnter={() => setHovered(post.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {post.thumbnail && (
                    <Image
                      src={post.thumbnail.src}
                      alt={post.thumbnail.alt}
                      layout="fill"
                      className={`object-cover transition-opacity duration-500 ease-in-out ${
                        hovered === post.id ? 'opacity-70' : ''
                      }`}
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAARVJREFUWEfVlzEOgzAMRc3EkAGJkZn7nyRHQGwwIjEwMFG5FSqiCfk2JFAmIIn/c2xwnFlrl7IsKc9zSnnN80zDMFDWtu3CN3VdU1EUSRjGcaSmaYgdz7quW4wx7xcpIFZx1pqm6QNQVRVtB2LtxF6j7/svAO99TAiX7R+AWBA+x5wAV0Mc7aoX4CqIUEgPAc5ChMTZfhBAC4GIwwBSCFRcBIBCSMTFACEIqbgKwAehEVcD7CH4WVtHoK/AVx5Xr3lcW8T+F2Ab8+QhcCVcsiQ8EtJAiHIAEUDmbJMaBpAYlsyFACQGV+/QNUEA1JDrX4Gsfe6BBKFHGwjxkexK8VBOPOtYHsPzfZi8jcmtrdntzend7fkL2HsfP/U3Za8AAAAASUVORK5CYII="
                      placeholder="blur"
                    />
                  )}
                  <Link href={`/blog/${post.slug}`}>
                    <a className="text-white absolute bottom-0 right-0 overflow-hidden">
                      <button
                        className={`bg-primary text-white py-4 pr-5 pl-6 text-sm font-light flex items-center uppercase ${
                          hovered === post.id ? '' : 'translate-y-full'
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
                    </a>
                  </Link>
                </a>
              </Link>
              <div className="relative z-10">
                <DateLabel extendClass="mt-6 mb-4">
                  {dayjs(post.date).format('DD MMMM YYYY')}
                </DateLabel>
                <Link href={`/blog/${post.slug}`}>
                  <a className="text-white">
                    <h2 className="text-xl lg:text-2xl">{post.title}</h2>
                  </a>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
