import Image from 'next/image'
import { BLUR_IMAGE } from '@/constants'
import DateLabel from '@/components/DateLabel'

const Content = ({ imageURL, title, date }) => {
  return (
    <>
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
          <h1 className="uppercase font-bold tracking-widest text-2xl md:text-6xl mb-4 lg:w-11/12">
            {title}
          </h1>
        )}

        <div className="pl-1">
          <DateLabel color="text-white">{date}</DateLabel>
        </div>
      </div>
    </>
  )
}

const ATF = (props) => {
  return (
    <>
      {/* Desktop */}
      <div
        className="py-20 hidden lg:flex items-center relative"
        style={{ minHeight: '644px' }}
      >
        <Content {...props} />
      </div>

      {/* Mobile */}
      <div
        className="py-20 md:pt-36 lg:hidden items-center relative"
        style={{ minHeight: '260px' }}
      >
        <Content {...props} />
      </div>
    </>
  )
}

ATF.displayName = 'PostATF'
export default ATF
