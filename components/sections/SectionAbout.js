import Html from '../Html'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../Button'
import SectionLabel from './SectionLabel'
import styles from './SectionAbout.module.css'
import Section from '@/components/sections/Section'

const DEFAULT_IMAGE = { src: '/images/placeholder.png', alt: 'Placeholder ALT' }

export default function SectionAbout({
  link,
  label,
  title,
  description,
  backgroundImage,
  mainImage = DEFAULT_IMAGE
}) {
  const linkHref = link && link.href ? link.href : link
  const linkText = link && link.text ? link.text : link

  return (
    <Section
      overlay
      fullscreen
      backgroundImage={backgroundImage}
      extendClass="overflow-y-hidden"
    >
      {/* Main Image - Desktop */}
      <div
        className={`${styles['main-image']} hidden lg:block absolute bottom-0 left-0 z-30 xl`}
        style={{ width: '43vw', height: '49vw' }}
      >
        {mainImage.src && (
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            layout="fill"
            className="object-contain select-none"
          />
        )}
      </div>

      <main className="container pt-8 md:pt-16 lg:pt-24 pb-12 md:pb-20 lg:pb-32 relative z-40 3xl:h-screen 3xl:flex 3xl:items-center">
        <div className="w-full md:w-3/4 lg:w-1/2 lg:ml-auto pt-0 md:pt-5">
          {label && <SectionLabel {...label} extendClass="mb-6" />}
          {title && (
            <h1 className="text-4xl lg:text-7xl lg:w-10/12 xl:w-full xl:text-8xl mb-8 md:mb-12">
              <Html inline>{title}</Html>
            </h1>
          )}
          {description && (
            <p className="mb-8 md:mb-12 text-sm font-light leading-loose lg:w-9/12 xl:w-2/3 xl:pr-4">
              <Html inline>{description}</Html>
            </p>
          )}
          {linkHref && (
            <Link href={linkHref}>
              <a>
                <Button outline arrow>
                  {linkText}
                </Button>
              </a>
            </Link>
          )}
        </div>
      </main>

      {/* Main Image - Mobile */}
      <div
        className={`${styles['main-image']} hidden sm:block lg:hidden absolute bottom-0 left-0 z-30 -mb-28 md:-mb-72`}
        style={{ width: '100vw', height: '112vw' }}
      >
        {mainImage.src && (
          <Image
            src={mainImage.src}
            alt={mainImage.alt}
            layout="fill"
            className="object-contain"
          />
        )}
      </div>
    </Section>
  )
}
