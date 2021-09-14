import useContent from '@/helpers/use-content'
import Image from 'next/image'

export default function Section({
  fullscreen,
  container,
  extendClass = '',
  backgroundImage,
  overlay,
  style,
  children,
  ...props
}) {
  /*
    Do not add any spacing (padding & margin) on this component.
    Add on children instead.
  */

  const { site_title } = useContent()

  const baseClass = 'relative'
  const stateClass = `${fullscreen ? 'min-h-screen' : ''}`
  const className = `${baseClass} ${stateClass} ${extendClass}`
  const finalStyle = {
    background:
      typeof backgroundImage === 'string'
        ? `url(${backgroundImage}) no-repeat center center`
        : null,
    ...style
  }

  const src =
    backgroundImage && backgroundImage.src
      ? backgroundImage.src
      : backgroundImage
  const alt =
    backgroundImage && backgroundImage.alt
      ? backgroundImage.alt
      : `${site_title}`

  return (
    <section className={className} style={finalStyle} {...props}>
      {backgroundImage && (
        <Image
          src={src}
          alt={alt}
          layout="fill"
          className="absolute w-full h-full grayscale opacity-25 z-10 object-cover"
        />
      )}
      {overlay && (
        <div
          className="absolute w-full h-full left-0 top-0 z-20"
          style={{
            background:
              'radial-gradient(60.55% 60.55% at 50% 49.94%, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 36.76%, rgba(0, 0, 0, 0.8) 100%)'
          }}
        ></div>
      )}
      <div className={`${container ? 'container' : ''}`}>{children}</div>
    </section>
  )
}
