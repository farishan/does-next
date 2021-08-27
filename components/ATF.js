import Image from 'next/image'

export default function ATF({ title, imageURL }) {
  return (
    <>
      <div className="py-20 lg:min-h-90vh flex items-center justify-center relative">
        {imageURL && (
          <Image
            src={imageURL}
            layout="fill"
            className="object-cover"
            alt={title}
          />
        )}

        {title && (
          <h1 className="uppercase font-bold tracking-widest text-2xl lg:text-5xl relative z-10">
            {title}
          </h1>
        )}
      </div>
    </>
  )
}
