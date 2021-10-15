import Image from 'next/image'
import Link from 'next/link'
import DateLabel from '@/components/DateLabel'
import LinkArrow from '@/components/LinkArrow'
import dayjs from 'dayjs'
import { BLUR_IMAGE, DATE_FORMAT } from '@/constants'

const SmallCard = ({ data }) => {
  if (!data || data === null) return <></>

  const { title, date, thumbnail, excerpt } = data
  const link = '/'

  return (
    <>
      <div className="flex -mx-2 lg:-mx-5">
        <div className="px-2 lg:px-5 w-auto">
          <Link href={link}>
            <a className="block w-32 md:w-64 h-32 md:h-64 relative">
              <Image
                src={thumbnail ? thumbnail.src : `/images/placeholder.png`}
                alt={{ title }}
                layout="fill"
                className="object-cover"
                blurDataURL={BLUR_IMAGE}
                placeholder="blur"
              />
            </a>
          </Link>
        </div>
        <div className="px-2 lg:px-5 w-full">
          <h3 className="text-lg lg:text-2xl mb-3 font-semibold -mt-1 md:mt-0">
            <Link href={link}>
              <a className="text-white hover:underline hover:text-white">
                {title}
              </a>
            </Link>
          </h3>
          <DateLabel extendClass="mb-4">
            {dayjs(date).format(DATE_FORMAT)}
          </DateLabel>

          <p className="hidden md:block opacity-70 mb-4 text-xs lg:text-sm leading-relaxed md:leading-loose lg:leading-loose">
            {excerpt}
          </p>
          <Link href={link}>
            <a>
              <LinkArrow>Selengkapnya</LinkArrow>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

SmallCard.displayName = 'SmallCard'
export default SmallCard
