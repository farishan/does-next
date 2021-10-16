import Image from 'next/image'
import { BLUR_IMAGE } from '@/constants'
import DateLabel from '@/components/DateLabel'

const ATF = ({ imageURL, title, date }) => {
  return (
    <>
      <div className="py-20 lg:min-h-90vh flex items-center relative">
        <div
          className="absolute w-full h-full left-0 top-0 z-10"
          style={{
            background:
              'radial-gradient(94.56% 59.35% at 50% 49.94%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 42.15%, rgba(0, 0, 0, 0.8) 100%)'
          }}
        ></div>
        <Image
          src={imageURL}
          layout="fill"
          className="object-cover"
          alt={title}
          blurDataURL={BLUR_IMAGE}
          placeholder="blur"
        />

        <div className="container text-white relative z-20">
          {title && (
            <h1 className="uppercase font-bold tracking-widest text-2xl lg:text-6xl mb-4 lg:w-11/12">
              {title}
            </h1>
          )}

          <div className="pl-1">
            <DateLabel color="text-white">{date}</DateLabel>
          </div>
        </div>
      </div>
    </>
  )
}

ATF.displayName = 'PostATF'
export default ATF
