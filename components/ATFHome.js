import Link from 'next/link'
import Button from './Button'
import Image from 'next/image'
import { BLUR_IMAGE } from '@/constants'
import useContent from '@/helpers/use-content'
import SectionLabel from './sections/SectionLabel'

export default function ATFHome() {
  const { site_title } = useContent()
  const {
    section_atf_background = `/images/placeholder_hero.jpg`,
    section_atf_main_image = `/images/placeholder_hero.jpg`,
    section_atf_content_text,
    section_atf_content_image,
    section_atf_label_1,
    section_atf_label_1_text,
    section_atf_label_2,
    section_atf_label_2_text,
    section_atf_link,
    section_atf_link_text
  } = useContent('page_home')

  return (
    <>
      <Background imageURL={section_atf_background} />

      <div className="flex items-center relative">
        <div className="container relative z-30">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-28">
              <div className="flex items-center mt-28 lg:mt-52 mb-6 md:mb-8">
                <SectionLabel
                  icon={section_atf_label_1}
                  text={section_atf_label_1_text}
                  extendClass="mr-4 md:mr-8"
                />
                <SectionLabel
                  icon={section_atf_label_2}
                  text={section_atf_label_2_text}
                />
              </div>
              <Image
                src={section_atf_content_image}
                alt={section_atf_content_text}
                width={575}
                height={160}
                blurDataURL={BLUR_IMAGE}
                placeholder="blur"
              />

              <p className="mb-8 md:mb-16 font-light leading-relaxed md:leading-loose md:opacity-70 mt-4 md:mt-5 md:w-10/12">
                {section_atf_content_text}
              </p>

              <Link href={section_atf_link}>
                <a>
                  <Button arrow>{section_atf_link_text}</Button>
                </a>
              </Link>
            </div>

            <div className="w-full lg:w-1/2 px-4">
              <div className="relative w-full h-96 lg:h-full">
                <Image
                  src={section_atf_main_image}
                  layout="fill"
                  className="object-contain object-bottom"
                  alt={site_title}
                  blurDataURL={BLUR_IMAGE}
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Background({ imageURL }) {
  const { site_title } = useContent()

  return (
    <>
      {/* Background Image - z axis level 1 */}
      {imageURL && (
        <Image
          src={imageURL}
          layout="fill"
          className="object-cover"
          alt={site_title}
          blurDataURL={BLUR_IMAGE}
          placeholder="blur"
        />
      )}

      {/* Radial Overlay - z axis level 2 */}
      <div
        className="absolute w-full h-full left-0 top-0 z-10"
        style={{
          background:
            'radial-gradient(50.06% 50.06% at 50% 49.94%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.109514) 66.56%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      ></div>

      {/* Image Overlay - z axis level 3*/}
      <Image
        src={'/images/home/overlay.png'}
        layout="fill"
        className="object-cover z-20"
        alt={site_title}
        blurDataURL={BLUR_IMAGE}
        placeholder="blur"
      />
    </>
  )
}
