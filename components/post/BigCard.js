import Image from 'next/image'
import Link from 'next/link'
import DateLabel from '@/components/DateLabel'
import LinkArrow from '@/components/LinkArrow'
import dayjs from 'dayjs'
import { BLUR_IMAGE, DATE_FORMAT } from '@/constants'
import useContent from '@/helpers/use-content'
import { useRouter } from 'next/router'

const BigCard = ({ data }) => {
  const router = useRouter()
  const { label_view_more } = useContent()

  if (!data || data === null) return <></>

  const { title, date, thumbnail, excerpt, slug } = data

  return (
    <>
      <div
        className="relative flex items-end cursor-pointer transition-shadow duration-200"
        style={{ minHeight: '100%' }}
      >
        {thumbnail && (
          <>
            <Link href={`/blog/${slug}`}>
              <a>
                <Image
                  src={
                    thumbnail.src ? thumbnail.src : `/images/placeholder.png`
                  }
                  alt={thumbnail.alt ? thumbnail.alt : title}
                  layout="fill"
                  className="absolute object-cover object-center"
                  blurDataURL={BLUR_IMAGE}
                  placeholder="blur"
                />
              </a>
            </Link>
          </>
        )}

        <div
          onClick={() => router.push(`/blog/${`together`}`)}
          className="absolute w-full h-full"
          style={{
            background:
              'linear-gradient(0.28deg, #000000 -12.83%, rgba(0, 0, 0, 0) 91.09%)'
          }}
        ></div>

        <div className="p-5 lg:p-10 relative z-10">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">
            <Link href={`/blog/${slug}`}>
              <a className="text-white hover:underline hover:text-white">
                {title}
              </a>
            </Link>
          </h2>
          {date && (
            <DateLabel extendClass="mb-6">
              {dayjs(date).format(DATE_FORMAT)}
            </DateLabel>
          )}
          <p className="mb-8">{excerpt}</p>
          <Link href={`/blog/${slug}`}>
            <a>
              <LinkArrow>{label_view_more}</LinkArrow>
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

BigCard.displayName = 'BigCard'
export default BigCard
