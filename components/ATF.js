import { BLUR_IMAGE } from '@/constants'
import useContent from '@/helpers/use-content'
import Image from 'next/image'

const Content = ({ title, imageURL }) => {
  const { site_title } = useContent()

  return (
    <>
      {imageURL && (
        <Image
          src={imageURL}
          layout="fill"
          className="object-cover"
          alt={title}
          blurDataURL={BLUR_IMAGE}
          placeholder="blur"
        />
      )}

      <div
        className="absolute w-full h-full left-0 top-0 z-10"
        style={{
          background:
            'radial-gradient(94.56% 59.35% at 50% 49.94%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 42.15%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      ></div>

      <div className="container">
        {title && (
          <h1 className="text-4xl md:text-6xl lg:text-8xl relative z-10 select-none">
            <span className="font-bold">{title}</span>
            <br />
            <span className="font-light">{site_title}</span>
          </h1>
        )}
      </div>
    </>
  )
}

export default function ATF({
  title,
  imageURL = `/images/placeholder_hero.jpg`
}) {
  return (
    <>
      {/* Desktop */}
      <div
        className="py-20 hidden lg:flex items-center relative"
        style={{ minHeight: '604px' }}
      >
        <Content title={title} imageURL={imageURL} />
      </div>

      {/* Mobile */}
      <div
        className="py-20 md:pt-36 flex lg:hidden items-center relative"
        style={{ minHeight: '260px' }}
      >
        <Content title={title} imageURL={imageURL} />
      </div>
    </>
  )
}
