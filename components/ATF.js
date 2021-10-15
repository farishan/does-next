import { BLUR_IMAGE } from '@/constants'
import Image from 'next/image'

export default function ATF({
  title,
  imageURL = `/images/placeholder_hero.jpg`
}) {
  return (
    <>
      <div className="py-20 lg:min-h-90vh flex items-center justify-center relative">
        <Image
          src={imageURL}
          layout="fill"
          className="object-cover"
          alt={title}
          blurDataURL={BLUR_IMAGE}
          placeholder="blur"
        />

        {title && (
          <h1 className="uppercase font-bold tracking-widest text-2xl lg:text-5xl relative z-10 text-center">
            {title}
          </h1>
        )}
      </div>
    </>
  )
}
